/**
 * Offline Chetak brain: no LLM — intent + site data + templates.
 * As smart as we can get without an API (still not true OpenAI reasoning).
 */
import { cities } from '../src/data/cities'
import { retrieveKnowledgeForChat } from '../src/data/assistant/knowledgeChunks'
import { validateItineraryPlan } from '../src/lib/assistantPlanValidate'
import { encodePlanToBase64 } from '../src/lib/itineraryPlanCodec'
import type { TripStyleId } from '../src/data/itineraryPlannerCatalog'
import { filterRoutesByQuery } from '../src/lib/siteRouteMap'

export type LocalChetakInput = {
  message: string
  pathname: string
  citySlug: string | null
  weatherSlug: string | null
}

export type LocalChetakResult = {
  reply: string
  itineraryUrl: string | null
}

/** Valid sub-option IDs — balanced “first trip” mix */
const DEFAULT_ITINERARY_PICKS = [
  'heritage-forts',
  'food-thali',
  'sunset-lake',
  'markets-textile',
  'spiritual-temples',
] as const

function norm(s: string): string {
  return s.trim().toLowerCase()
}

function findCitySlugsInText(text: string): string[] {
  const t = norm(text)
  const sorted = [...cities].sort((a, b) => b.name.length - a.name.length)
  const found: string[] = []
  for (const c of sorted) {
    const name = c.name.toLowerCase()
    const slugAsWords = c.slug.replace(/-/g, ' ')
    if (t.includes(name) || t.includes(slugAsWords) || new RegExp(`\\b${c.slug}\\b`).test(t)) {
      found.push(c.slug)
    }
  }
  return [...new Set(found)]
}

function extractTotalDays(text: string): number | null {
  const m = text.match(/(\d+)\s*(?:day|days|night|nights|din|दिन)/i)
  if (!m) return null
  const n = parseInt(m[1], 10)
  if (!Number.isFinite(n) || n < 1) return null
  return Math.min(14, n)
}

function extractStyle(text: string): TripStyleId {
  const t = norm(text)
  if (/\b(budget|cheap|backpack|sasta|कम खर्च|सस्ता)\b/.test(t)) return 'budget'
  if (/\b(luxury|premium|5\s*star|five star|palace|महंगा|लक्ज़री)\b/.test(t)) return 'luxury'
  return 'balanced'
}

function distributeNights(total: number, cityCount: number): number[] {
  if (cityCount <= 0) return []
  const base = Math.floor(total / cityCount)
  const rem = total % cityCount
  return Array.from({ length: cityCount }, (_, i) => base + (i < rem ? 1 : 0))
}

function tryBuildItineraryLink(message: string): string | null {
  const slugs = findCitySlugsInText(message)
  if (slugs.length === 0) return null

  const totalDays = extractTotalDays(message) ?? (slugs.length === 1 ? 3 : slugs.length * 2)
  const style = extractStyle(message)
  const nights = distributeNights(Math.max(totalDays, slugs.length), slugs.length)

  const selections: Record<string, string[]> = {}
  const nightsPerCity: Record<string, number> = {}
  slugs.forEach((slug, i) => {
    selections[slug] = [...DEFAULT_ITINERARY_PICKS]
    nightsPerCity[slug] = nights[i] ?? 2
  })

  const raw = {
    version: 2 as const,
    style,
    cities: slugs,
    selections,
    nightsPerCity,
  }
  const validated = validateItineraryPlan(raw)
  if (!validated) return null
  const b64 = encodePlanToBase64(validated)
  return `/itinerary#p=${encodeURIComponent(b64)}`
}

function isSmallTalk(t: string): boolean {
  return /^(hi|hello|hey|namaste|नमस्ते|hii|yo|sup|thanks|thank you|dhanyavad|धन्यवाद|bye|ok|okay)\b/i.test(
    t.trim(),
  )
}

function wantsNavigation(t: string): boolean {
  return (
    /\b(where|how do i|how to|open|navigate|find|click|path|url|route|section|screen|kahan|kaise|कहाँ|कैसे)\b/i.test(
      t,
    ) && !/\b(weather|mausam)\b/i.test(t)
  )
}

function wantsItineraryHelp(t: string): boolean {
  return /\b(itinerary|trip plan|plan my|days in|day trip|route tab|planner|यात्रा|ट्रिप|plan for|banado|बनाओ)\b/i.test(
    t,
  )
}

function shouldOfferItineraryLink(message: string): boolean {
  const t = norm(message)
  if (findCitySlugsInText(message).length === 0) return false
  return (
    wantsItineraryHelp(t) ||
    extractTotalDays(message) !== null ||
    /\b(plan|itinerary|trip|draft|schedule|days?\s+\d)\b/i.test(t)
  )
}

function wantsWeather(t: string): boolean {
  return /\b(weather|forecast|rain|temperature|mausam|मौसम)\b/i.test(t)
}

function compressKnowledge(chunks: Array<{ id: string; text: string }>, maxChars: number): string {
  const parts: string[] = []
  let used = 0
  for (const c of chunks) {
    const line = c.text.replace(/\s+/g, ' ').trim()
    if (!line) continue
    const chunk = line.length > 420 ? `${line.slice(0, 417)}…` : line
    if (used + chunk.length > maxChars) break
    parts.push(chunk)
    used += chunk.length + 2
  }
  return parts.join('\n\n')
}

function chetakVoice(intro: string, body: string): string {
  return `${intro}\n\n${body}\n\n— Chetak · offline mode (site data + rules — OpenAI key optional for chattier replies).`
}

export function runLocalChetak(input: LocalChetakInput): LocalChetakResult {
  const msg = input.message.trim()
  if (!msg) {
    return {
      reply: chetakVoice(
        'Haan, sun raha hoon.',
        'City ka naam likho (jaise Jaipur), ya poochho “festivals kahan milega”, “itinerary kaise banaye”, ya “weather Udaipur”. Main site ke data se jawab dunga.',
      ),
      itineraryUrl: null,
    }
  }

  const t = norm(msg)
  let itineraryUrl: string | null = null

  if (isSmallTalk(msg)) {
    return {
      reply: chetakVoice(
        'Arre, vibe sahi hai.',
        'Main yahin hoon — Discover se city chuno, topics khulenge. Seedha planner chahiye to `/itinerary` bolo.',
      ),
      itineraryUrl: null,
    }
  }

  const chunks = retrieveKnowledgeForChat(msg, input.citySlug, 7)
  const knowledgeBlock = compressKnowledge(chunks, 2800)

  if (wantsWeather(t)) {
    const slugs = findCitySlugsInText(msg)
    const w = input.weatherSlug || slugs[0] || input.citySlug
    const hint = w
      ? `Is city ke liye weather: /weather/${w} (Topics se bhi khul sakta hai).`
      : 'City ka naam likho — main /weather/{city} ka link suggest karunga.'
    return {
      reply: chetakVoice('Weather ki baat.', `${hint}\n\n${knowledgeBlock ? `Context:\n${knowledgeBlock}` : ''}`),
      itineraryUrl: null,
    }
  }

  if (wantsNavigation(t) || /\b(discover|topics|browse|map)\b/i.test(t)) {
    const routes = filterRoutesByQuery(msg)
    const lines = routes.length
      ? routes.map((r, i) => `${i + 1}. ${r.label} — ${r.pathPattern}. ${r.navHint}`).join('\n')
      : filterRoutesByQuery('guide city food itinerary')
          .slice(0, 6)
          .map((r, i) => `${i + 1}. ${r.label} — ${r.pathPattern}. ${r.navHint}`)
          .join('\n')
    return {
      reply: chetakVoice(
        'Chalo, seedha route.',
        `Quick nav:\n${lines}\n\n${knowledgeBlock ? `\nExtra from our pages:\n${knowledgeBlock}` : ''}`,
      ),
      itineraryUrl: null,
    }
  }

  const planLink = shouldOfferItineraryLink(msg) ? tryBuildItineraryLink(msg) : null
  if (planLink) {
    itineraryUrl = planLink
    const names = findCitySlugsInText(msg)
      .map((s) => cities.find((c) => c.slug === s)?.name ?? s)
      .join(' → ')
    return {
      reply: chetakVoice(
        'Itinerary frame ready — tumhari site ke rules ke andar.',
        `Maine ${names || 'cities'} ke liye ek starter plan chipka diya (heritage + food + sunset + markets flavour). Button se planner kholo, wahan tweak karna.\n\n${knowledgeBlock ? `City notes:\n${knowledgeBlock.slice(0, 1200)}` : ''}`,
      ),
      itineraryUrl,
    }
  }

  if (wantsItineraryHelp(t) && !planLink) {
    return {
      reply: chetakVoice(
        'Planner ki baat.',
        'City naam likho + kitne din (jaise “4 days Jaipur Udaipur”). Main yahin se ek draft plan link bana dunga. Ya khud **/itinerary** khol ke drag-drop karo.',
      ),
      itineraryUrl: null,
    }
  }

  const slugsInMsg = findCitySlugsInText(msg)

  const body =
    knowledgeBlock ||
    'Is baare me site par detail alag sections me hai — Discover → city → topic try karo.'

  return {
    reply: chetakVoice(
      slugsInMsg.length
        ? `${slugsInMsg.map((s) => cities.find((c) => c.slug === s)?.name).filter(Boolean).join(', ')} — suno.`
        : 'Theek, yeh padh ke jawab:',
      body,
    ),
    itineraryUrl: null,
  }
}
