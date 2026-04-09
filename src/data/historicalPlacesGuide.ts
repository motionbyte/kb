import { getCityBySlug } from '@/data/cities'
import type { City } from '@/types'

export type MonumentTimelineStop = {
  period: string
  ruler: string
  note: string
}

export type MonumentGuide = {
  id: string
  name: string
  typeTag: string
  era: string
  location: string
  mapUrl: string
  summary: string
  detailedHistory: string[]
  rulersTimeline: MonumentTimelineStop[]
  braveStories: string[]
}

export type HistoricalPlacesGuideBundle = {
  intro: {
    eyebrow: string
    title: string
    lead: string
  }
  categories: Array<{ label: string; value: string }>
  monuments: MonumentGuide[]
}

const AJMER_HISTORICAL: HistoricalPlacesGuideBundle = {
  intro: {
    eyebrow: 'Sightseeing & Attractions',
    title: 'Historical places',
    lead:
      'A deep historical walkthrough of Ajmer’s major monuments: who built them, which rulers controlled them, and the brave stories attached to each site.',
  },
  categories: [
    { label: 'Fortifications', value: 'Taragarh Fort & military hill defenses' },
    { label: 'Sultanate-Era structures', value: 'Adhai Din Ka Jhonpra and early Indo-Islamic phase' },
    { label: 'Mughal-era seats', value: 'Akbari Fort / palace administration layer' },
    { label: 'Urban heritage works', value: 'Ana Sagar & royal-public infrastructure' },
  ],
  monuments: [
    {
      id: 'taragarh-fort',
      name: 'Taragarh Fort',
      typeTag: 'Hill fort',
      era: 'Primarily 8th-12th century onward (expanded in later eras)',
      location: 'Taragarh Hill, Ajmer',
      mapUrl: 'https://www.google.com/maps/search/?api=1&query=Taragarh%20Fort%20Ajmer',
      summary:
        'One of the most prominent early Rajput hill forts in the region, strongly associated with the Chauhan rulers of Ajmer.',
      detailedHistory: [
        'Traditionally linked to Ajayaraja II (Chauhan line), who established Ajmer as a strategic seat in the 12th century.',
        'Taragarh functioned as a military watchpoint over trade and movement routes across central Rajasthan.',
        'After the defeat of Prithviraj Chauhan III in 1192 CE (Second Battle of Tarain), power in the region moved through Ghurid/Delhi Sultanate influence, but the fort remained a strategic military point under successive regimes.',
        'In later centuries, the site and surrounding defenses were adapted and reused by changing Rajput, Sultanate, and Mughal authorities depending on political control.',
      ],
      rulersTimeline: [
        {
          period: 'c. 1110s-1130s CE',
          ruler: 'Ajayaraja II (Chauhan)',
          note: 'Ajmer consolidated as a major Chauhan center; fort significance rises.',
        },
        {
          period: 'c. 1178-1192 CE',
          ruler: 'Prithviraj Chauhan III',
          note: 'Late Chauhan high period before Ghurid victory at Tarain.',
        },
        {
          period: 'late 12th-13th century',
          ruler: 'Ghurid / early Delhi Sultanate administration',
          note: 'Regional control shifts after Tarain; fort’s strategic role persists.',
        },
        {
          period: '16th century onward (variable)',
          ruler: 'Mughal-era military administration',
          note: 'Ajmer remains politically significant under Mughal imperial routes.',
        },
      ],
      braveStories: [
        'Local memory celebrates Rajput resistance culture tied to the Chauhan defense ethos around Ajmer’s hill belt.',
        'Taragarh’s enduring military position reflects the long-standing martial identity of the region despite repeated political transitions.',
      ],
    },
    {
      id: 'adhai-din-ka-jhonpra',
      name: 'Adhai Din Ka Jhonpra',
      typeTag: 'Mosque / reused early structure',
      era: '12th-13th century phase (with earlier structural layers)',
      location: 'Near Dargah zone, Ajmer',
      mapUrl: 'https://www.google.com/maps/search/?api=1&query=Adhai%20Din%20Ka%20Jhonpra%20Ajmer',
      summary:
        'A key monument in Ajmer’s transition from late Rajput to early Sultanate architecture, known for layered construction history.',
      detailedHistory: [
        'The site is associated with an earlier pre-Islamic educational/temple-linked complex tradition in historical discourse, later reconfigured in the Sultanate period.',
        'Construction as a congregational structure is attributed to the period after Ghurid advances, with works often linked to Qutb-ud-Din Aibak and later Iltutmish-era additions.',
        'Architecturally, the monument is important for its reused carved elements, arch screens, and transitional design language in North Indian Islamic architecture.',
        'It is one of Ajmer’s most debated and discussed monuments for understanding cultural-political transition in the 12th-13th centuries.',
      ],
      rulersTimeline: [
        {
          period: 'Pre-1192 context',
          ruler: 'Chauhan political sphere',
          note: 'Ajmer under Rajput-Chauhan authority before Ghurid victory.',
        },
        {
          period: 'late 12th century',
          ruler: 'Qutb-ud-Din Aibak period',
          note: 'Initial Sultanate-phase construction association.',
        },
        {
          period: 'early 13th century',
          ruler: 'Iltutmish period',
          note: 'Further architectural development and screen work traditions.',
        },
      ],
      braveStories: [
        'The monument stands as evidence of how Ajmer survived intense political upheaval and still retained visible layers of earlier artistry.',
        'Its very fabric tells a “contested but continuous” history rather than a single-era narrative.',
      ],
    },
    {
      id: 'akbari-fort-museum',
      name: 'Akbari Fort & Museum',
      typeTag: 'Mughal fort-palace complex',
      era: '16th century CE (Mughal period)',
      location: 'Museum area, central Ajmer',
      mapUrl: 'https://www.google.com/maps/search/?api=1&query=Akbari%20Fort%20Ajmer%20Museum',
      summary:
        'A Mughal administrative strongpoint in Ajmer, representing imperial governance, mobility, and military control routes in Rajasthan.',
      detailedHistory: [
        'Attributed to Emperor Akbar’s period in the later 16th century when Ajmer served as a key Mughal base for Rajputana strategy.',
        'Ajmer held high political value because it connected military campaigns, pilgrimage networks, and administrative circuits.',
        'The fort later evolved in function, and in modern times houses a museum context preserving regional artifacts and inscriptions.',
        'The site marks Ajmer’s transformation into a major imperial node under Mughal governance.',
      ],
      rulersTimeline: [
        {
          period: '1556-1605 CE',
          ruler: 'Emperor Akbar',
          note: 'Fort-palace development and Ajmer’s imperial administrative rise.',
        },
        {
          period: '17th century',
          ruler: 'Mughal successors',
          note: 'Ajmer remains an important imperial stop and control center.',
        },
        {
          period: 'Colonial to modern museum era',
          ruler: 'Later administrations',
          note: 'Military-administrative site adapted into heritage museum function.',
        },
      ],
      braveStories: [
        'Ajmer’s Mughal-era military logistics required disciplined garrison and route control across difficult terrain.',
        'The fort symbolizes the city’s role in high-stakes imperial campaigns and negotiations in Rajasthan.',
      ],
    },
    {
      id: 'ana-sagar-daulat-bagh',
      name: 'Ana Sagar & Daulat Bagh heritage zone',
      typeTag: 'Lake works + royal garden heritage',
      era: '12th century origins with later Mughal additions',
      location: 'Ana Sagar Lakefront, Ajmer',
      mapUrl: 'https://www.google.com/maps/search/?api=1&query=Ana%20Sagar%20Ajmer',
      summary:
        'A long-duration urban heritage landscape: early Chauhan-era water infrastructure later enriched by Mughal garden aesthetics.',
      detailedHistory: [
        'Ana Sagar Lake is associated with the Chauhan period (traditionally linked to Arnoraja / Ana), reflecting medieval water-management and urban planning.',
        'In the Mughal era, surrounding pleasure-garden and pavilion interventions (including Daulat Bagh context) added imperial leisure-architecture layers.',
        'The zone demonstrates how Ajmer’s history is not only military and religious, but also civic-engineering and ecological adaptation.',
        'Today it remains a core heritage-public space that ties together Rajput and Mughal urban memory.',
      ],
      rulersTimeline: [
        {
          period: '12th century',
          ruler: 'Chauhan dynasty (Ana/Arnoraja association)',
          note: 'Lake works linked to early Ajmer civic infrastructure.',
        },
        {
          period: '16th-17th centuries',
          ruler: 'Mughal imperial period',
          note: 'Garden and lakeside landscape enhancements.',
        },
        {
          period: 'Modern civic era',
          ruler: 'Municipal/heritage stewardship',
          note: 'Continues as a major public and cultural city landmark.',
        },
      ],
      braveStories: [
        'Building and sustaining large water bodies in semi-arid Rajasthan was itself a civilizational act of resilience.',
        'Ana Sagar’s survival across dynasties reflects long-term collective stewardship over short-term rule changes.',
      ],
    },
  ],
}

function mq(q: string): string {
  return `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(q)}`
}

type HistCtx = Pick<City, 'name' | 'slug' | 'region'>

const genericHistoricalCache = new Map<string, HistoricalPlacesGuideBundle>()

function buildGenericHistoricalGuide(ctx: HistCtx): HistoricalPlacesGuideBundle {
  const cached = genericHistoricalCache.get(ctx.slug)
  if (cached) return cached

  const cn = ctx.name
  const rg = ctx.region
  const slug = ctx.slug

  const bundle: HistoricalPlacesGuideBundle = {
    intro: {
      eyebrow: 'Sightseeing & Attractions',
      title: 'Historical places',
      lead: `A district-level historical walkthrough for ${cn}: forts and ridge seats, courtly cores, water monuments, and civic layers that explain how ${rg} evolved politically and socially. Names below mix archetypal site types with live Map searches — verify opening hours, ASI tickets, and local rules before visiting.`,
    },
    categories: [
      { label: 'Fortifications & seats', value: `Hill forts, garhs, and military ridges around ${cn}` },
      { label: 'Court & urban cores', value: 'Palaces, havelis, and old civic administration belts' },
      { label: 'Water heritage', value: 'Stepwells, tanks, and medieval hydrology that sustained towns' },
      { label: 'Modern memory layers', value: 'Colonial civic buildings, memorials, and museum archives' },
    ],
    monuments: [
      {
        id: `${slug}-hist-fort`,
        name: 'Fort, garh & ridge strongholds',
        typeTag: 'Hill fort / defensive seat',
        era: 'Early medieval to late Maratha–Rajput phases (site-specific)',
        location: `Fort belt and Aravalli approaches, ${cn} district`,
        mapUrl: mq(`${cn} fort heritage Rajasthan historical`),
        summary: `Rajasthan’s towns often grew under the shadow of a fort or ridge post controlling trade, pilgrimage, or pasture routes. Around ${cn}, search for garh names, watchpoints, and walled enclosures that show how ${rg} balanced agriculture, warfare, and mobility.`,
        detailedHistory: [
          `In most districts of ${rg}, Rajput clans, Rathores, Kachwahas, and allied lineages rotated control of forts through alliances, jagirs, and imperial farmans — ${cn} typically sits inside one such strategic corridor.`,
          'Stone walls and bastions were not decorative: they managed monsoon runoff, stored grain, and anchored revenue collection for surrounding villages.',
          'Mughal farmans and later Maratha dak routes sometimes repurposed the same ridges for relay horses, tax checkpoints, and pilgrimage protection.',
          'British gazetteers and post-Independence conservation frames added “protected monument” status to some sites — use ASI / state archaeology pages for ticketed access.',
        ],
        rulersTimeline: [
          {
            period: 'c. 8th–13th century',
            ruler: 'Early Rajput polities & Chauhan-era parallels',
            note: `Hill seats consolidate around trade–pasture nodes; ${cn} inherits that geography.`,
          },
          {
            period: 'c. 14th–17th century',
            ruler: 'Regional kingdoms & Mughal suzerainty',
            note: 'Forts become nodes of negotiated sovereignty — tribute, mansabdari postings, pilgrimage security.',
          },
          {
            period: '18th–19th century',
            ruler: 'Maratha influence & treaty networks',
            note: 'Some forts gain new artillery platforms; others decay into symbolic seats.',
          },
          {
            period: '20th century onward',
            ruler: 'Heritage & civic stewardship',
            note: 'Tourism, lighting, and conservation change how locals relate to the same stone.',
          },
        ],
        braveStories: [
          `Local memory often celebrates night vigil on the walls, not only single battles — endurance on scarce water mattered as much as sword clashes in ${rg}.`,
          'Women’s roles in provisioning, intelligence, and ritual during sieges appear in oral histories even when colonial texts underplay them.',
        ],
      },
      {
        id: `${slug}-hist-palace`,
        name: 'Palace, haveli & court heritage core',
        typeTag: 'Royal / elite residence layer',
        era: '17th–20th century layers (city-specific)',
        location: `Old city and administrative spine, ${cn}`,
        mapUrl: mq(`${cn} palace haveli heritage old city`),
        summary: `Courtly architecture around ${cn} mixes Rajput jharokha grammar with Mughal arcades and later colonial offices. These buildings narrate marriage alliances, durbars, and the shift from sword prestige to paperwork and railways.`,
        detailedHistory: [
          'Courtyards (chowks) organized gendered movement, treasury access, and festival display — many havelis doubled as banking houses for caravan trade.',
          'Stucco, mirror glass, and blue pottery imports trace Jaipur–Jodhpur craft circuits into smaller district towns.',
          'Partition and land-reform cycles converted some elite homes into schools, courts, or hotels — layers of reuse are visible in mixed facades.',
          `For ${cn}, compare “living palace” museums with still-private havelis — permission and photography rules differ sharply.`,
        ],
        rulersTimeline: [
          {
            period: '17th–18th century',
            ruler: 'Regional riyasat courts',
            note: 'Durbars, patronage to poets, temple grants.',
          },
          {
            period: '19th century',
            ruler: 'Treaty & residency pressures',
            note: 'Administrative buildings multiply; some palaces get neo-classical wings.',
          },
          {
            period: '20th–21st century',
            ruler: 'Tourism & adaptive reuse',
            note: 'Heritage hotels, sound-and-light, civic museums.',
          },
        ],
        braveStories: [
          'Patronage stories link havelis to famine kitchens, not only feasts — check local guides for 1899 or 1943 relief narratives where documented.',
          'Craft families still tie their identity to specific courtyards; ask before photographing people at work.',
        ],
      },
      {
        id: `${slug}-hist-water`,
        name: 'Stepwells, tanks & medieval hydrology',
        typeTag: 'Baori / johad / lake works',
        era: '11th–19th century (mixed)',
        location: `Urban periphery and old wards, ${cn}`,
        mapUrl: mq(`${cn} stepwell baori heritage tank`),
        summary: `Water monuments are ${cn}’s silent constitution: they structured festivals, caste cooperation around cleaning shifts, and the rhythm of women’s journeys. Many are ASI or state-protected — steep steps demand footwear with grip.`,
        detailedHistory: [
          'Stepwells (baori/vav) combined spiritual merit, public health, and microclimate cooling — carved levels also served as social stages during holy weeks.',
          'Johads and anicuts in the district belt show community labour investment before piped water; some tanks still recharge wells for peri-urban fields.',
          'Mughal and later British engineers mapped many sites in irrigation reports — useful for understanding which bodies are natural lakes vs reshaped tanks.',
          'Monsoon algal bloom and bird migrations can make some tanks ecologically sensitive — follow board warnings.',
        ],
        rulersTimeline: [
          {
            period: 'Medieval patronage',
            ruler: 'Queens & noble donors',
            note: 'Many inscriptions credit royal women — read translation plaques carefully.',
          },
          {
            period: 'Colonial hydrology',
            ruler: 'Public Works Department era',
            note: 'Canals, bunds, and famine codes refashion water rights.',
          },
          {
            period: 'Present',
            ruler: 'Municipal + heritage boards',
            note: 'Fencing, lighting, and idol immersion rules evolve yearly.',
          },
        ],
        braveStories: [
          'Flood-season rescues and rival mohalla teams maintaining the same well appear in oral histories — “bravery” includes collective upkeep.',
          `Desert-adjacent districts celebrate water as sovereignty; ${cn} participates in that moral geography even when headlines focus only on forts.`,
        ],
      },
      {
        id: `${slug}-hist-civic`,
        name: 'Colonial civic layer & memorial archives',
        typeTag: 'Gothic / Indo-Saracenic / modernist civic',
        era: '1860s–1950s (typical)',
        location: `Station road, courts, colleges — ${cn}`,
        mapUrl: mq(`${cn} heritage building museum colonial`),
        summary: `Railways, law courts, and schools reframed ${cn} as a paperwork city inside ${rg}. Clock towers, post offices, and memorial statues are not “less historical” than forts — they explain voting, policing, and public health as you see them today.`,
        detailedHistory: [
          'Sandy tracks became metre-gauge lifelines for salt, cloth, and pilgrims — station neighbourhoods often have the most mixed castes and cuisines.',
          'War memorials and statues encode which conflicts the colonial state wanted remembered; Independence-era renaming adds another palimpsest.',
          'Universities and hospitals imported architectural styles that locals then copied in smaller shops — a visual network across Rajasthan.',
          `Municipal museums and district archives sometimes hold maps not yet digitized — researchers should call ahead.`,
        ],
        rulersTimeline: [
          {
            period: 'British Raj district era',
            ruler: 'Collector-led administration',
            note: 'Gazetteers freeze a snapshot of villages and roads — compare with old survey maps.',
          },
          {
            period: '1947–1970s',
            ruler: 'Nation-building institutions',
            note: 'New colleges, cooperatives, and dams change daily life faster than fort restorations.',
          },
          {
            period: '1990s onward',
            ruler: 'Heritage listing & litigation',
            note: 'Some civic buildings gain INTACH / HUDA tags; others decay.',
          },
        ],
        braveStories: [
          `Lawyers, teachers, and nurses trained in these buildings shaped ${cn}’s modern moral voice — civic bravery is quieter than battlefield myth but equally formative.`,
          'Partition refugee resettlement and later riot relief routes often used the same station squares — read plaques with empathy.',
        ],
      },
    ],
  }

  genericHistoricalCache.set(slug, bundle)
  return bundle
}

export function getHistoricalPlacesGuideByCitySlug(slug: string): HistoricalPlacesGuideBundle {
  if (slug === 'ajmer') return AJMER_HISTORICAL
  const city = getCityBySlug(slug)
  const ctx: HistCtx = city
    ? { name: city.name, slug: city.slug, region: city.region }
    : {
        name: slug
          .split('-')
          .map((w) => w.charAt(0).toUpperCase() + w.slice(1))
          .join(' '),
        slug,
        region: 'Rajasthan',
      }
  return buildGenericHistoricalGuide(ctx)
}

