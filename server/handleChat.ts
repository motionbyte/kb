/**
 * Dev-server handler for POST /api/chat — OpenAI with tools + site grounding.
 * Set OPENAI_API_KEY in env. Optional: OPENAI_MODEL (default gpt-4o-mini).
 */
import type { IncomingMessage, ServerResponse } from 'node:http'
import { retrieveKnowledgeForChat } from '../src/data/assistant/knowledgeChunks'
import { validateItineraryPlan } from '../src/lib/assistantPlanValidate'
import { encodePlanToBase64 } from '../src/lib/itineraryPlanCodec'
import { getAssistantRouteContext } from '../src/lib/routeContext'
import { filterRoutesByQuery, formatSiteRoutesForPrompt } from '../src/lib/siteRouteMap'
import { runLocalChetak } from './localChetak'

function readBody(req: IncomingMessage): Promise<string> {
  return new Promise((resolve, reject) => {
    const chunks: Buffer[] = []
    req.on('data', (c) => chunks.push(c as Buffer))
    req.on('end', () => resolve(Buffer.concat(chunks).toString('utf8')))
    req.on('error', reject)
  })
}

const rateBucket = new Map<string, { n: number; t: number }>()
const RATE_WINDOW_MS = 60_000
const RATE_MAX = 24

function rateLimit(ip: string): boolean {
  const now = Date.now()
  const b = rateBucket.get(ip)
  if (!b || now - b.t > RATE_WINDOW_MS) {
    rateBucket.set(ip, { n: 1, t: now })
    return true
  }
  if (b.n >= RATE_MAX) return false
  b.n += 1
  return true
}

const SYSTEM_PROMPT = `You are "Chetak", the in-app travel assistant for Kesariya Balam — a Rajasthan travel website.

Voice: warm, smart, slightly quirky, never cruel or mocking. Match the user's language (English, Hindi, Hinglish, or other languages they use). Keep answers helpful and concise unless they ask for detail.

Rules:
- Only rely on the SITE ROUTES, RETRIEVED KNOWLEDGE, and tool results provided below for factual claims about this website. If something is not covered, say you are not sure and suggest where on the site they might look (Topics/Discover) or invite them to rephrase.
- Do not give medical, legal, or visa guarantees. No harassment or stereotypes.
- When users ask "where do I click", give step-by-step navigation using Discover → city → topic when relevant.
- You may suggest itinerary ideas conceptually; to build a plan inside our planner, use the create_itinerary_link tool with valid city slugs and selection IDs.

SITE ROUTES (reference):
${formatSiteRoutesForPrompt(10000)}
`

const tools = [
  {
    type: 'function' as const,
    function: {
      name: 'search_site_content',
      description:
        'Search curated knowledge snippets about this website (how navigation works, itinerary, etc.).',
      parameters: {
        type: 'object',
        properties: {
          query: { type: 'string', description: 'Search query' },
        },
        required: ['query'],
      },
    },
  },
  {
    type: 'function' as const,
    function: {
      name: 'get_navigation_routes',
      description: 'List site routes most relevant to a user question (paths and how to open them).',
      parameters: {
        type: 'object',
        properties: {
          query: { type: 'string', description: 'User question or keywords' },
        },
        required: ['query'],
      },
    },
  },
  {
    type: 'function' as const,
    function: {
      name: 'create_itinerary_link',
      description:
        'Build a validated itinerary plan and return a relative URL with hash for our planner. Cities must be real slugs from our data. Selection IDs must be valid sub-option or place IDs from the itinerary catalog.',
      parameters: {
        type: 'object',
        properties: {
          plan: {
            type: 'object',
            description: 'ItineraryPlanStateV2 shape',
            properties: {
              style: { type: 'string', enum: ['budget', 'balanced', 'luxury'] },
              cities: { type: 'array', items: { type: 'string' } },
              selections: { type: 'object', additionalProperties: { type: 'array', items: { type: 'string' } } },
              nightsPerCity: { type: 'object', additionalProperties: { type: 'number' } },
            },
            required: ['style', 'cities', 'selections'],
          },
        },
        required: ['plan'],
      },
    },
  },
]

async function openaiChat(messages: Array<Record<string, unknown>>, apiKey: string, model: string) {
  const res = await fetch('https://api.openai.com/v1/chat/completions', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${apiKey}`,
    },
    body: JSON.stringify({
      model,
      messages,
      tools,
      tool_choice: 'auto',
      temperature: 0.7,
      max_tokens: 1200,
    }),
  })
  if (!res.ok) {
    const errText = await res.text()
    throw new Error(`OpenAI ${res.status}: ${errText.slice(0, 500)}`)
  }
  return res.json() as Promise<{
    choices: Array<{
      message: {
        role: string
        content: string | null
        tool_calls?: Array<{
          id: string
          type: string
          function: { name: string; arguments: string }
        }>
      }
    }>
  }>
}

function runTool(name: string, args: unknown): string {
  if (name === 'search_site_content') {
    const q = typeof args === 'object' && args && 'query' in args ? String((args as { query: unknown }).query) : ''
    const chunks = retrieveKnowledgeForChat(q, null, 8)
    return chunks.map((c) => `[${c.id}] ${c.text}`).join('\n\n')
  }
  if (name === 'get_navigation_routes') {
    const q = typeof args === 'object' && args && 'query' in args ? String((args as { query: unknown }).query) : ''
    const routes = filterRoutesByQuery(q)
    return routes.length
      ? routes.map((r) => `${r.label} — ${r.pathPattern}. ${r.navHint}`).join('\n')
      : formatSiteRoutesForPrompt(4000)
  }
  if (name === 'create_itinerary_link') {
    const planArg =
      typeof args === 'object' && args && 'plan' in args ? (args as { plan: unknown }).plan : null
    const validated = validateItineraryPlan(planArg)
    if (!validated) {
      return JSON.stringify({ ok: false, error: 'Invalid plan (city slugs or selection IDs).' })
    }
    const b64 = encodePlanToBase64(validated)
    const url = `/itinerary#p=${encodeURIComponent(b64)}`
    return JSON.stringify({ ok: true, url, summary: `${validated.cities.join(' → ')} · ${validated.style}` })
  }
  return JSON.stringify({ error: 'unknown tool' })
}

export async function handleChatPost(req: IncomingMessage, res: ServerResponse): Promise<void> {
  const ip = (req.socket.remoteAddress || 'local').slice(0, 64)
  if (!rateLimit(ip)) {
    res.statusCode = 429
    res.setHeader('Content-Type', 'application/json')
    res.end(JSON.stringify({ error: 'Too many requests. Try again in a minute.' }))
    return
  }

  if (req.method !== 'POST') {
    res.statusCode = 405
    res.end()
    return
  }

  const apiKey = process.env.OPENAI_API_KEY
  const model = process.env.OPENAI_MODEL || 'gpt-4o-mini'

  let body: {
    messages?: Array<{ role: string; content: string }>
    pathname?: string
    languageHint?: string
  }
  try {
    body = JSON.parse(await readBody(req)) as typeof body
  } catch {
    res.statusCode = 400
    res.setHeader('Content-Type', 'application/json')
    res.end(JSON.stringify({ error: 'Invalid JSON' }))
    return
  }

  const pathname = typeof body.pathname === 'string' ? body.pathname : '/'
  const lang = typeof body.languageHint === 'string' ? body.languageHint : ''
  const routeCtx = getAssistantRouteContext(pathname)
  const userMessages = Array.isArray(body.messages) ? body.messages : []
  const lastUser = [...userMessages].reverse().find((m) => m.role === 'user')

  if (!apiKey) {
    const local = runLocalChetak({
      message: lastUser?.content?.trim() ?? '',
      pathname,
      citySlug: routeCtx.citySlug,
      weatherSlug: routeCtx.weatherSlug,
    })
    res.setHeader('Content-Type', 'application/json')
    res.setHeader('Access-Control-Allow-Origin', '*')
    res.end(JSON.stringify({ reply: local.reply, itineraryUrl: local.itineraryUrl }))
    return
  }

  const retrieval = retrieveKnowledgeForChat(lastUser?.content, routeCtx.citySlug, 6)
  const retrievalText = retrieval.map((c) => c.text).join('\n\n')

  const contextBlock = `CURRENT PAGE: ${pathname}
CITY CONTEXT: ${routeCtx.citySlug ?? 'none'}
WEATHER CITY: ${routeCtx.weatherSlug ?? 'none'}
USER LANGUAGE HINT: ${lang || 'unknown'}

RETRIEVED KNOWLEDGE (may be partial):
${retrievalText || '(none — use tools if needed)'}
`

  const messages: Array<Record<string, unknown>> = [
    { role: 'system', content: SYSTEM_PROMPT + '\n\n' + contextBlock },
    ...userMessages.map((m) => ({ role: m.role, content: m.content })),
  ]

  let itineraryUrl: string | null = null

  try {
    let data = await openaiChat(messages, apiKey, model)
    let assistantMessage = data.choices[0]?.message
    let guard = 0

    while (assistantMessage?.tool_calls?.length && guard < 5) {
      const toolCalls = assistantMessage.tool_calls
      messages.push({
        role: 'assistant',
        content: assistantMessage.content ?? '',
        tool_calls: toolCalls,
      })

      for (const tc of toolCalls) {
        const fn = tc.function
        let args: unknown = {}
        try {
          args = JSON.parse(fn.arguments || '{}')
        } catch {
          args = {}
        }
        const result = runTool(fn.name, args)
        if (fn.name === 'create_itinerary_link') {
          try {
            const parsed = JSON.parse(result) as { ok?: boolean; url?: string }
            if (parsed.ok && parsed.url) itineraryUrl = parsed.url
          } catch {
            /* ignore */
          }
        }
        messages.push({
          role: 'tool',
          tool_call_id: tc.id,
          content: result,
        })
      }

      data = await openaiChat(messages, apiKey, model)
      assistantMessage = data.choices[0]?.message
      guard += 1
    }

    const reply = assistantMessage?.content?.trim() || '…'
    res.setHeader('Content-Type', 'application/json')
    res.setHeader('Access-Control-Allow-Origin', '*')
    res.end(JSON.stringify({ reply, itineraryUrl }))
  } catch (e) {
    const msg = e instanceof Error ? e.message : 'Chat failed'
    const local = runLocalChetak({
      message: lastUser?.content?.trim() ?? '',
      pathname,
      citySlug: routeCtx.citySlug,
      weatherSlug: routeCtx.weatherSlug,
    })
    res.statusCode = 200
    res.setHeader('Content-Type', 'application/json')
    res.setHeader('Access-Control-Allow-Origin', '*')
    res.end(
      JSON.stringify({
        reply: `${local.reply}\n\n(Cloud AI issue: ${msg} — showing offline Chetak instead.)`,
        itineraryUrl: local.itineraryUrl,
      }),
    )
  }
}

export function handleChatOptions(res: ServerResponse): void {
  res.statusCode = 204
  res.setHeader('Access-Control-Allow-Origin', '*')
  res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS')
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type')
  res.end()
}
