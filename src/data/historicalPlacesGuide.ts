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

export function getHistoricalPlacesGuideByCitySlug(slug: string): HistoricalPlacesGuideBundle | null {
  if (slug === 'ajmer') return AJMER_HISTORICAL
  return null
}

