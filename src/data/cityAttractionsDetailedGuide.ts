import { getCityBySlug } from '@/data/cities'
import type { City } from '@/types'
import { buildGenericCityAttractionsGuide } from '@/data/cityAttractionsGenericBundles'

export type AttractionKind = 'natural' | 'religious' | 'museums' | 'hidden-gems'

export type AttractionDetail = {
  id: string
  name: string
  typeTag: string
  era: string
  location: string
  mapUrl: string
  summary: string
  history: string[]
  stories: string[]
}

export type AttractionGuideBundle = {
  title: string
  eyebrow: string
  lead: string
  categoryTiles: Array<{ label: string; value: string }>
  puranicTirths?: Array<{
    id: string
    name: string
    location: string
    puranicContext: string
    mapUrl: string
    practicalNotes: string[]
  }>
  places: AttractionDetail[]
}

type CityGuide = Record<AttractionKind, AttractionGuideBundle>

const AJMER_ATTRACTION_GUIDE: CityGuide = {
  natural: {
    title: 'Natural spots',
    eyebrow: 'Sightseeing & Attractions',
    lead:
      'Ajmer’s natural landscapes are tightly connected to medieval water systems, hill defense geography, and later civic heritage.',
    categoryTiles: [
      { label: 'Lake heritage', value: 'Ana Sagar hydrology + urban memory' },
      { label: 'Hill landscape', value: 'Aravalli ridges and fort-watch terrain' },
      { label: 'Seasonality', value: 'Monsoon-to-winter visibility shifts' },
      { label: 'Best time', value: 'Sunrise / sunset windows' },
    ],
    places: [
      {
        id: 'ana-sagar-lake',
        name: 'Ana Sagar Lake',
        typeTag: 'Historic artificial lake',
        era: '12th century origin, later Mughal-era enhancements',
        location: 'Central Ajmer lakefront',
        mapUrl: 'https://www.google.com/maps/search/?api=1&query=Ana%20Sagar%20Lake%20Ajmer',
        summary: 'A medieval civic water body that became a long-term social and political landmark.',
        history: [
          'Traditionally associated with the Chauhan period and civic-water engineering under early Ajmer rulers.',
          'In Mughal times, the lakefront received imperial landscape additions, strengthening its courtly value.',
          'Ana Sagar remains a rare continuity point where medieval infrastructure still shapes modern city life.',
        ],
        stories: [
          'The lake symbolizes resilience in semi-arid Rajasthan, where water security was a strategic achievement.',
        ],
      },
      {
        id: 'foy-sagar',
        name: 'Foy Sagar Lake',
        typeTag: 'Colonial-era reservoir',
        era: 'Late 19th century (British public works period)',
        location: 'West Ajmer side',
        mapUrl: 'https://www.google.com/maps/search/?api=1&query=Foy%20Sagar%20Lake%20Ajmer',
        summary: 'A colonial public-works reservoir that expanded Ajmer’s water management footprint.',
        history: [
          'Constructed in the colonial period as a famine-relief and storage-linked work context.',
          'The site reflects how Ajmer’s hydrology evolved beyond early medieval lake systems.',
        ],
        stories: ['A reminder that water structures often doubled as social-relief and survival infrastructure.'],
      },
      {
        id: 'nareli-hills-view',
        name: 'Nareli Hill viewpoints',
        typeTag: 'Hillscape / ridge viewpoints',
        era: 'Natural landscape, modern access routes',
        location: 'Nareli / hill belt',
        mapUrl: 'https://www.google.com/maps/search/?api=1&query=Nareli%20Ajmer%20viewpoint',
        summary: 'Aravalli-linked terrain that helps explain Ajmer’s historic defense and settlement logic.',
        history: [
          'Ajmer’s hill-ring geography influenced early fort siting and route control.',
          'Modern viewpoint roads reveal the same topographic advantages valued by earlier rulers.',
        ],
        stories: ['The ridgelines illustrate why hill forts and watchpoints remained central to Ajmer strategy.'],
      },
    ],
  },
  religious: {
    title: 'Religious places',
    eyebrow: 'Sightseeing & Attractions',
    lead:
      'Ajmer is one of India’s strongest syncretic pilgrimage geographies, where Sufi, Jain, and Hindu heritage layers intersect.',
    categoryTiles: [
      { label: 'Sufi heritage', value: 'Khwaja Moinuddin Chishti legacy' },
      { label: 'Temple hills', value: 'High-ground spiritual routes' },
      { label: 'Pilgrim economy', value: 'Markets, routes, and ritual timing' },
      { label: 'Etiquette', value: 'Dress + conduct + queue awareness' },
    ],
    puranicTirths: [
      {
        id: 'pushkar-tirth',
        name: 'Pushkar Tirth (Pushkar Sarovar)',
        location: 'Pushkar town, Ajmer district (approx 14-16 km from Ajmer city)',
        puranicContext:
          'Widely associated with Puranic tradition, especially Padma Purana references to Pushkar as a highly sacred tirth.',
        mapUrl: 'https://www.google.com/maps/search/?api=1&query=Pushkar%20Lake%20Ajmer',
        practicalNotes: [
          'Core tirth circuit includes Pushkar Lake ghats, Brahma Temple, Varaha Temple, and Savitri Mata temple route.',
          'Best darshan windows are early morning and post-sunset aarti periods (crowd-sensitive timings vary by festival days).',
          'Follow ghat etiquette: modest dress, footwear rules, and avoid unsolicited ritual-pressure sellers.',
        ],
      },
    ],
    places: [
      {
        id: 'ajmer-sharif-dargah',
        name: 'Ajmer Sharif Dargah',
        typeTag: 'Major Sufi shrine',
        era: 'Chishti spiritual legacy consolidated from 13th century onward',
        location: 'Dargah area, old Ajmer',
        mapUrl: 'https://www.google.com/maps/search/?api=1&query=Ajmer%20Sharif%20Dargah',
        summary: 'One of the most influential Sufi pilgrimage centers in South Asia.',
        history: [
          'Associated with Khwaja Moinuddin Chishti, whose spiritual influence shaped Ajmer’s religious identity deeply.',
          'Received patronage and visits from major medieval and early-modern rulers, including Mughal emperors.',
          'The shrine became a cross-community devotional hub, symbolizing shared faith practices.',
        ],
        stories: [
          'Ajmer Sharif is remembered as a place of compassion and social inclusion, beyond narrow sectarian lines.',
        ],
      },
      {
        id: 'nareli-jain',
        name: 'Nareli Jain Temple',
        typeTag: 'Jain complex',
        era: 'Modern monumental temple phase with classical references',
        location: 'Nareli, Ajmer outskirts',
        mapUrl: 'https://www.google.com/maps/search/?api=1&query=Nareli%20Jain%20Temple%20Ajmer',
        summary: 'A major contemporary Jain pilgrimage and architecture complex near Ajmer.',
        history: [
          'Developed as a modern Jain spiritual complex with strong visual references to traditional temple planning.',
          'Its hill-linked layout echoes older Indian sacred topography patterns.',
        ],
        stories: ['Represents continuity of pilgrimage culture in a new-era religious architectural form.'],
      },
      {
        id: 'soniji-ki-nasiya',
        name: 'Soniji Ki Nasiyan',
        typeTag: 'Jain temple / interpretive heritage',
        era: '19th century prominence',
        location: 'Prithviraj Marg side, Ajmer',
        mapUrl: 'https://www.google.com/maps/search/?api=1&query=Soniji%20Ki%20Nasiyan%20Ajmer',
        summary: 'Known for its richly crafted Jain heritage displays and symbolic narrative spaces.',
        history: [
          'Emerges strongly in the 19th-century Jain patronage context of urban Ajmer.',
          'Combines devotional setting with narrative-heritage presentation.',
        ],
        stories: ['A prime example of religion and visual storytelling merging in sacred architecture.'],
      },
    ],
  },
  museums: {
    title: 'Museums',
    eyebrow: 'Sightseeing & Attractions',
    lead:
      'Ajmer museums are best read as power-transition archives: Rajput, Sultanate, Mughal, colonial, and modern layers in one city.',
    categoryTiles: [
      { label: 'Political archive', value: 'Dynasty and administrative transitions' },
      { label: 'Material culture', value: 'Inscriptions, weapons, manuscripts, objects' },
      { label: 'Reading lens', value: 'Compare era-to-era continuity' },
      { label: 'Best approach', value: 'Slow section-by-section visit' },
    ],
    places: [
      {
        id: 'akbari-fort-museum',
        name: 'Akbari Fort Government Museum',
        typeTag: 'State museum in fort complex',
        era: 'Mughal structure with modern museum adaptation',
        location: 'Central Ajmer',
        mapUrl: 'https://www.google.com/maps/search/?api=1&query=Akbari%20Fort%20Museum%20Ajmer',
        summary: 'A core site for understanding Ajmer’s imperial and regional artifact record.',
        history: [
          'Fort complex linked to Mughal-era administrative priorities under Akbar’s period.',
          'Museum conversion created a public archive frame for inscriptions, sculpture fragments, and historical objects.',
        ],
        stories: ['The museum embodies Ajmer’s shift from active power seat to curated historical memory.'],
      },
      {
        id: 'prithviraj-smarak-context',
        name: 'Prithviraj Smarak interpretive context',
        typeTag: 'Memorial-historical interpretive zone',
        era: 'Modern memorialization of medieval Rajput history',
        location: 'Taragarh hill approach region',
        mapUrl: 'https://www.google.com/maps/search/?api=1&query=Prithviraj%20Smarak%20Ajmer',
        summary: 'A memory-site emphasizing Prithviraj Chauhan’s legacy in regional identity.',
        history: [
          'Part of modern commemorative practices around Chauhan-era political memory.',
          'Often visited as symbolic-historical context alongside fort landscapes.',
        ],
        stories: ['Centers bravery memory and Rajput martial imagination in present-day civic culture.'],
      },
      {
        id: 'local-archive-galleries',
        name: 'Local archive galleries / heritage collections',
        typeTag: 'Regional historical displays',
        era: 'Mixed-era collections',
        location: 'City cultural institutions',
        mapUrl: 'https://www.google.com/maps/search/?api=1&query=Ajmer%20museum%20heritage%20gallery',
        summary: 'Smaller collections that add social and everyday-history depth beyond royal narratives.',
        history: [
          'These spaces preserve material traces of changing civic and cultural life in Ajmer.',
          'Useful for understanding non-courtly and local memory layers.',
        ],
        stories: ['They show how ordinary lives persisted through major regime changes.'],
      },
    ],
  },
  'hidden-gems': {
    title: 'Hidden gems',
    eyebrow: 'Sightseeing & Attractions',
    lead:
      'For travellers who want less-crowded heritage textures: smaller viewpoints, quiet corridors, and memory-rich corners beyond headline monuments.',
    categoryTiles: [
      { label: 'Low-crowd zones', value: 'Quieter heritage observation points' },
      { label: 'Context spots', value: 'Sites that explain bigger monuments' },
      { label: 'Photo windows', value: 'Best light at sunrise/sunset' },
      { label: 'Use safely', value: 'Go with daylight and route checks' },
    ],
    places: [
      {
        id: 'taragarh-side-bastion-views',
        name: 'Taragarh side bastion viewpoints',
        typeTag: 'Lesser-known fort-edge spots',
        era: 'Medieval fortification context',
        location: 'Taragarh approach sections',
        mapUrl: 'https://www.google.com/maps/search/?api=1&query=Taragarh%20Ajmer%20viewpoint',
        summary: 'Quieter points that reveal defensive geometry and route control logic.',
        history: [
          'These edges help decode how the fort used elevation and visibility as military advantage.',
          'Often skipped by quick visitors, yet critical for understanding hill-fort strategy.',
        ],
        stories: ['Bravery here was as much about vigilance and endurance as direct combat.'],
      },
      {
        id: 'ana-sagar-backside-walks',
        name: 'Ana Sagar quieter stretches',
        typeTag: 'Lakeside hidden walk',
        era: 'Layered medieval-to-modern civic landscape',
        location: 'Less-crowded lake edges',
        mapUrl: 'https://www.google.com/maps/search/?api=1&query=Ana%20Sagar%20quiet%20side%20Ajmer',
        summary: 'Calmer lakeside segments offering better reading of urban-water heritage.',
        history: [
          'Less commercial edges show the long arc of Ajmer’s civic hydrology continuity.',
          'Useful for observing how historic water systems still structure present-day movement.',
        ],
        stories: ['A quiet reminder that survival infrastructure can outlast every dynasty.'],
      },
      {
        id: 'old-lane-heritage-fragments',
        name: 'Old-lane heritage fragments',
        typeTag: 'Micro-heritage urban pockets',
        era: 'Mixed-era built fabric',
        location: 'Old Ajmer lanes',
        mapUrl: 'https://www.google.com/maps/search/?api=1&query=Old%20Ajmer%20heritage%20lanes',
        summary: 'Small facades, inscriptions, and material traces that add texture to mainstream history.',
        history: [
          'These fragments preserve everyday architectural memory not captured in major monuments.',
          'Together they provide social-history context to elite political narratives.',
        ],
        stories: ['The courage of cities often lives in ordinary continuity, not only grand battles.'],
      },
    ],
  },
}

type AttrCtx = Pick<City, 'name' | 'slug' | 'region'>

export function getCityAttractionsDetailedGuide(slug: string, kind: AttractionKind): AttractionGuideBundle {
  if (slug === 'ajmer') return AJMER_ATTRACTION_GUIDE[kind]
  const city = getCityBySlug(slug)
  const ctx: AttrCtx = city
    ? { name: city.name, slug: city.slug, region: city.region }
    : {
        name: slug
          .split('-')
          .map((w) => w.charAt(0).toUpperCase() + w.slice(1))
          .join(' '),
        slug,
        region: 'Rajasthan',
      }
  return buildGenericCityAttractionsGuide(ctx)[kind]
}

