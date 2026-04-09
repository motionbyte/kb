/**
 * Short text chunks for keyword retrieval (site-grounded answers).
 * City entries are built from `cities` in @/data/cities — edit that file only; Chetak stays in sync automatically.
 */
import { cities } from '@/data/cities'

export type KnowledgeChunk = {
  id: string
  text: string
  tags: string[]
}

/** Site-wide snippets (not per-city). */
export const STATIC_SITE_KNOWLEDGE_CHUNKS: KnowledgeChunk[] = [
  {
    id: 'brand',
    text: 'Kesariya Balam is a Rajasthan travel site. Chetak is the in-app assistant: cities, festivals, food, places, weather, and an itinerary planner. The home screen shows a parchment map — tap Discover to open the guide hub, pick a city, then browse topics (heritage, food, festivals, etc.).',
    tags: ['kesariya', 'chetak', 'guide', 'discover', 'map', 'home'],
  },
  {
    id: 'itinerary-how',
    text: 'The itinerary planner lives at /itinerary. You choose trip style (budget, balanced, luxury), add cities, pick activity categories and sub-options, set nights per city, then view route tab and export PNG/PDF. Shareable links use URL hash #p= with an encoded plan.',
    tags: ['itinerary', 'plan', 'pdf', 'export', 'trip'],
  },
  {
    id: 'city-topics',
    text: 'Each city has a hub at /city/{slug} with topics: festivals, food trails, photo spots, sunrise/sunset, drone info, cultural shows, adventure, workshops, nightlife, and language help (hash #city-language-help).',
    tags: ['city', 'topics', 'hub', 'language'],
  },
  {
    id: 'weather',
    text: 'Weather pages are at /weather/{citySlug} with forecast-oriented copy. Use them alongside the city guide for packing and timing outdoor plans.',
    tags: ['weather', 'forecast'],
  },
  {
    id: 'food-restaurants',
    text: 'Statewide food overview: /food. Restaurant listings: /restaurants. City-specific dining angles appear inside each city topic where relevant.',
    tags: ['food', 'restaurant', 'thali'],
  },
  {
    id: 'respect',
    text: 'Temples and dargahs: dress modestly, follow local rules, ask before photographing people. Desert and fort sites: carry water, sun protection, and avoid midday heat April–June.',
    tags: ['temple', 'respect', 'safety', 'heat'],
  },
]

/** One chunk per city — always derived from live `cities` data (no duplicate copy-paste). */
export function buildCityKnowledgeChunks(): KnowledgeChunk[] {
  return cities.map((city) => {
    const tips =
      city.localTips.length > 0 ? `\n\nLocal tips: ${city.localTips.map((t) => `• ${t}`).join(' ')}` : ''
    const text = [
      `${city.name} (slug: ${city.slug}) — ${city.region}. ${city.tagline}`,
      city.description,
      `Best time: ${city.bestTime}`,
      tips,
      `Open this city in the app: /city/${city.slug} — topics include festivals, food, photo spots, weather, and more.`,
    ]
      .filter(Boolean)
      .join('\n\n')

    const tagSet = new Set<string>([
      city.slug,
      city.id,
      city.name.toLowerCase(),
      ...city.region.toLowerCase().split(/[\s,]+/).filter((w) => w.length > 2),
      ...city.name.toLowerCase().split(/\s+/),
    ])

    return {
      id: `city-${city.slug}`,
      text,
      tags: [...tagSet],
    }
  })
}

/** Full retrieval set: static site copy + auto-synced city copy from `cities`. */
export function getAllKnowledgeChunks(): KnowledgeChunk[] {
  return [...STATIC_SITE_KNOWLEDGE_CHUNKS, ...buildCityKnowledgeChunks()]
}

/** Current route city — always reflects `cities` for that slug (no stale duplicate text). */
export function getCityKnowledgeChunkBySlug(slug: string | null | undefined): KnowledgeChunk | null {
  if (!slug) return null
  return buildCityKnowledgeChunks().find((c) => c.id === `city-${slug}`) ?? null
}

function dedupeChunksById(chunks: KnowledgeChunk[]): KnowledgeChunk[] {
  const seen = new Set<string>()
  const out: KnowledgeChunk[] = []
  for (const c of chunks) {
    if (seen.has(c.id)) continue
    seen.add(c.id)
    out.push(c)
  }
  return out
}

/**
 * Merge keyword retrieval with the page’s city chunk first (so Chetak always sees up-to-date city
 * data for the URL the user is on).
 */
export function retrieveKnowledgeForChat(
  userMessage: string | undefined,
  citySlugFromPath: string | null | undefined,
  keywordLimit = 6,
): KnowledgeChunk[] {
  const pageCity = getCityKnowledgeChunkBySlug(citySlugFromPath)
  const fromKeywords = userMessage?.trim()
    ? retrieveKnowledgeChunks(userMessage, keywordLimit)
    : pageCity
      ? [pageCity]
      : STATIC_SITE_KNOWLEDGE_CHUNKS.slice(0, keywordLimit)
  return dedupeChunksById([...(pageCity ? [pageCity] : []), ...fromKeywords]).slice(0, keywordLimit + 1)
}

const STOP = new Set([
  'the',
  'and',
  'for',
  'with',
  'how',
  'what',
  'where',
  'when',
  'this',
  'that',
  'from',
  'into',
  'about',
  'city',
  'page',
])

export function retrieveKnowledgeChunks(query: string, limit = 5): KnowledgeChunk[] {
  const all = getAllKnowledgeChunks()
  const raw = query.toLowerCase().replace(/[^\p{L}\p{N}\s]/gu, ' ')
  const words = raw
    .split(/\s+/)
    .filter((w) => w.length > 1 && !STOP.has(w))
  if (words.length === 0) return all.slice(0, limit)

  const scored = all.map((c) => {
    const blob = `${c.text} ${c.tags.join(' ')}`.toLowerCase()
    let s = 0
    for (const w of words) {
      if (blob.includes(w)) s += 2
    }
    for (const t of c.tags) {
      if (raw.includes(t)) s += 4
    }
    return { c, s }
  })
  return scored
    .sort((a, b) => b.s - a.s)
    .filter((x, i) => x.s > 0 || i < 2)
    .map((x) => x.c)
    .slice(0, limit)
}
