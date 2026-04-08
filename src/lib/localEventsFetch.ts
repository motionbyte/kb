/**
 * Live ticketed events for a city — intended to be backed by your server aggregating
 * BookMyShow / Insider / etc. (those sites do not expose CORS-friendly public APIs in the browser).
 *
 * Set `VITE_LOCAL_EVENTS_URL` to a JSON endpoint, e.g. `https://api.yoursite.com/events`
 * Your API should accept `?city=ajmer` and return `{ "events": LocalEventRecord[] }`.
 */

export type LocalEventRecord = {
  id: string
  title: string
  category: string
  venue?: string
  /** ISO 8601 */
  startsAt: string
  description: string
  /** e.g. "BookMyShow", "Insider", "Demo" */
  sourceLabel: string
  ticketUrl?: string
}

const DEMO_SOURCES = ['Demo listing', 'Sample feed'] as const

function buildDemoEvents(cityName: string, citySlug: string): LocalEventRecord[] {
  const now = Date.now()
  const categories = [
    'Music',
    'Theatre & arts',
    'Comedy & spoken word',
    'Sports & outdoors',
    'Community & culture',
    'Workshops & talks',
  ] as const

  const titles: Record<(typeof categories)[number], [string, string]> = {
    Music: ['Sufi evening · open mic', 'Indie Rajasthan · acoustic set'],
    'Theatre & arts': ['Folk drama · courtyard show', 'Miniature art walk & talk'],
    'Comedy & spoken word': ['Hinglish stand-up night', 'Poetry & storytelling'],
    'Sports & outdoors': ['5k heritage run (registration)', 'Cricket screening · finals'],
    'Community & culture': ['Heritage walk · old city', 'Food pop-up · local chefs'],
    'Workshops & talks': ['Phone photography 101', 'Block printing · 2 hr taster'],
  }

  const out: LocalEventRecord[] = []
  let i = 0
  for (const cat of categories) {
    const pair = titles[cat]
    for (const title of pair) {
      const dayOffset = 1 + ((i * 3) % 12)
      const hour = 10 + (i % 8)
      const startsAt = new Date(now + dayOffset * 86400000)
      startsAt.setHours(hour, (i * 17) % 60, 0, 0)
      out.push({
        id: `${citySlug}-demo-${i}`,
        title,
        category: cat,
        venue: `Near city centre · ${cityName}`,
        startsAt: startsAt.toISOString(),
        description:
          'Placeholder copy for layout testing. Replace with real synopsis from your events API — usually one or two sentences from the organiser.',
        sourceLabel: DEMO_SOURCES[i % DEMO_SOURCES.length],
        ticketUrl: 'https://example.com/tickets',
      })
      i += 1
    }
  }
  return out.sort((a, b) => a.startsAt.localeCompare(b.startsAt))
}

export async function fetchLocalEvents(
  citySlug: string,
  cityDisplayName: string,
): Promise<LocalEventRecord[]> {
  const raw = import.meta.env.VITE_LOCAL_EVENTS_URL as string | undefined
  const base = raw?.trim()

  if (base) {
    const sep = base.includes('?') ? '&' : '?'
    const url = `${base}${sep}city=${encodeURIComponent(citySlug)}`
    const res = await fetch(url, {
      headers: { Accept: 'application/json' },
    })
    if (!res.ok) {
      throw new Error(`Events request failed (${res.status})`)
    }
    const data = (await res.json()) as { events?: LocalEventRecord[] }
    const list = data.events
    if (!Array.isArray(list)) {
      throw new Error('Invalid events JSON — expected { events: [...] }')
    }
    return list
  }

  await new Promise((r) => setTimeout(r, 450))
  return buildDemoEvents(cityDisplayName, citySlug)
}

export function groupEventsByCategory(events: LocalEventRecord[]): Map<string, LocalEventRecord[]> {
  const m = new Map<string, LocalEventRecord[]>()
  for (const e of events) {
    const list = m.get(e.category) ?? []
    list.push(e)
    m.set(e.category, list)
  }
  return m
}
