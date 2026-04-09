/**
 * Machine-readable site map for the AI assistant (navigation help + prompt grounding).
 */
export type SiteRouteEntry = {
  /** Express-style pattern for docs; match with simple rules */
  id: string
  pathPattern: string
  label: string
  /** How a user reaches this area from the home map */
  navHint: string
  keywords: string[]
}

export const SITE_ROUTES: SiteRouteEntry[] = [
  {
    id: 'home',
    pathPattern: '/',
    label: 'Home — parchment map',
    navHint: 'Open the site root. Tap Discover to enter the guide hub.',
    keywords: ['home', 'map', 'landing', 'discover'],
  },
  {
    id: 'cities',
    pathPattern: '/cities',
    label: 'All cities',
    navHint: 'Guide → Choose a city, or open Browse and use Topics → pick a city from the list.',
    keywords: ['cities', 'list', 'choose city'],
  },
  {
    id: 'city-hub',
    pathPattern: '/city/:slug',
    label: 'City guide hub',
    navHint:
      'Discover → pick a city → you land on topics for that city (heritage, food, festivals, etc.). Or /city/{slug} from Browse.',
    keywords: ['city', 'guide', 'topics', 'hub'],
  },
  {
    id: 'festivals',
    pathPattern: '/festivals/:slug',
    label: 'City festivals',
    navHint: 'From city topics, choose Festivals. URL pattern /festivals/{city-slug}.',
    keywords: ['festival', 'tyohar', 'events'],
  },
  {
    id: 'food',
    pathPattern: '/food',
    label: 'Food guide (statewide)',
    navHint: 'Browse → Topics → Food, or go to /food.',
    keywords: ['food', 'thali', 'restaurant'],
  },
  {
    id: 'restaurants',
    pathPattern: '/restaurants',
    label: 'Restaurants',
    navHint: 'Browse → /restaurants.',
    keywords: ['restaurant', 'dining'],
  },
  {
    id: 'places',
    pathPattern: '/places',
    label: 'Places overview',
    navHint: 'Browse → /places.',
    keywords: ['places', 'sightseeing'],
  },
  {
    id: 'weather',
    pathPattern: '/weather/:citySlug',
    label: 'Weather for a city',
    navHint: 'Pick a city in the guide, then weather from topics or /weather/{slug}.',
    keywords: ['weather', 'mausam', 'temperature'],
  },
  {
    id: 'itinerary',
    pathPattern: '/itinerary',
    label: 'Itinerary planner',
    navHint: 'Browse → Itinerary from the app bar, or /itinerary. Build days, categories, export PDF.',
    keywords: ['itinerary', 'plan', 'trip', 'schedule'],
  },
  {
    id: 'about',
    pathPattern: '/about',
    label: 'About Kesariya Balam',
    navHint: '/about from main navigation when visible.',
    keywords: ['about', 'kesariya'],
  },
  {
    id: 'instagram-spots',
    pathPattern: '/instagram-spots/:slug',
    label: 'Instagram / photo spots (city)',
    navHint: 'City topics → Instagram spots. /instagram-spots/{slug}.',
    keywords: ['instagram', 'photo', 'selfie'],
  },
  {
    id: 'sunrise-sunset',
    pathPattern: '/sunrise-sunset/:slug',
    label: 'Sunrise & sunset spots',
    navHint: 'City topics → Sunrise & sunset.',
    keywords: ['sunrise', 'sunset', 'golden hour'],
  },
  {
    id: 'drone',
    pathPattern: '/drone-info/:slug',
    label: 'Drone rules & spots',
    navHint: 'City topics → Drone info.',
    keywords: ['drone', 'uav'],
  },
  {
    id: 'cultural-shows',
    pathPattern: '/cultural-shows/:slug',
    label: 'Cultural shows',
    navHint: 'City topics → Cultural shows.',
    keywords: ['culture', 'show', 'folk'],
  },
  {
    id: 'adventure',
    pathPattern: '/adventure-activities/:slug',
    label: 'Adventure activities',
    navHint: 'City topics → Adventure.',
    keywords: ['adventure', 'camel', 'jeep'],
  },
  {
    id: 'workshops',
    pathPattern: '/workshops/:slug',
    label: 'Workshops',
    navHint: 'City topics → Workshops.',
    keywords: ['workshop', 'craft'],
  },
  {
    id: 'nightlife',
    pathPattern: '/nightlife/:slug',
    label: 'Nightlife',
    navHint: 'City topics → Nightlife.',
    keywords: ['night', 'evening', 'bar'],
  },
  {
    id: 'shop',
    pathPattern: '/shop',
    label: 'Shop (coming soon)',
    navHint: '/shop — availability may vary.',
    keywords: ['shop', 'buy'],
  },
]

/** Compact string for LLM system prompt */
export function formatSiteRoutesForPrompt(maxChars = 12000): string {
  const lines = SITE_ROUTES.map(
    (r) =>
      `- [${r.id}] ${r.label} (${r.pathPattern}): ${r.navHint} Keywords: ${r.keywords.join(', ')}`,
  )
  const text = lines.join('\n')
  return text.length > maxChars ? `${text.slice(0, maxChars)}\n…` : text
}

export function filterRoutesByQuery(query: string): SiteRouteEntry[] {
  const q = query.toLowerCase().trim()
  if (!q) return SITE_ROUTES.slice(0, 12)
  const words = q.split(/\s+/).filter(Boolean)
  const scored = SITE_ROUTES.map((r) => {
    const blob = `${r.label} ${r.navHint} ${r.keywords.join(' ')}`.toLowerCase()
    let s = 0
    for (const w of words) {
      if (blob.includes(w)) s += 2
    }
    for (const kw of r.keywords) {
      if (q.includes(kw)) s += 3
    }
    return { r, s }
  })
  return scored
    .filter((x) => x.s > 0)
    .sort((a, b) => b.s - a.s)
    .map((x) => x.r)
    .slice(0, 8)
}
