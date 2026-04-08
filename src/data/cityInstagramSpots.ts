/**
 * Photo-forward spots — “best known” vs “quieter / hidden” frames.
 * Coordinates are approximate pin centres for maps; respect local rules & people’s privacy.
 */

export type InstagramSpotEntry = {
  id: string
  name: string
  teaser?: string
  paragraphs: string[]
  /** Practical camera / phone tips */
  photoTips: string[]
  /** Golden hour, season, haze */
  bestLight: string
  /** Crowd, dress, drone, flash */
  etiquette?: string[]
  latitude: number
  longitude: number
}

export type InstagramSpotCategory = {
  id: string
  eyebrow: string
  title: string
  intro: string[]
  spots: InstagramSpotEntry[]
  /** When true, show shared city hospital list (lazy fetch) instead of photo spots */
  hospitalsOnly?: boolean
}

export type CityInstagramSpotsBundle = {
  citySlug: string
  leadTitle: string
  leadParagraphs: string[]
  categories: InstagramSpotCategory[]
}

const ajmerInstagram: CityInstagramSpotsBundle = {
  citySlug: 'ajmer',
  leadTitle: 'Frames worth the feed',
  leadParagraphs: [
    'Ajmer mixes marble courtyards, lake horizons, and carved stone screens — strong geometry for Instagram, but the city is also a working pilgrimage town. Shoot with patience: wide shots for scale, then tighter frames on texture and hands (where respectful).',
    'Below: “best known” icons first, then quieter angles — still active public places, not trespass. Tripods and drones need permission; always ask at shrines before raising a camera toward worshippers.',
  ],
  categories: [
    {
      id: 'ig-best-known',
      eyebrow: 'Icons · classic frames',
      title: 'Best-known & most “Instagrammable”',
      intro: [
        'These are the headline views travellers expect — busy at peak hours, so plan light and fast compositions, or return at softer times.',
      ],
      spots: [
        {
          id: 'dargah-approach',
          name: 'Ajmer Sharif — Buland Darwaza & marble courtyard',
          teaser: 'Symmetry · white-on-blue',
          paragraphs: [
            'The long approach through the Buland Darwaza and into the marble courtyard gives a natural leading line — domes, minarets, and crowds in motion. Early morning light is cooler in tone; evenings add warmth and qawwali atmosphere.',
            'Wide lens for architecture; 50–85mm for candid portraits only if people consent — never thrust a camera into prayer.',
          ],
          photoTips: [
            'Use burst mode for walking pilgrims — pick one respectful frame.',
            'Expose for the marble — slight underexposure keeps dome detail.',
            'Try reflections after light rain on courtyard stone.',
          ],
          bestLight: 'Sunrise to ~9 AM for thinner crowds; 1 h before sunset for golden glow on domes (check gate times).',
          etiquette: [
            'Dress modestly; no shoes inside; ask khadims before commercial shoots.',
            'Avoid flash near the sanctum; respect “no photo” zones.',
          ],
          latitude: 26.449722,
          longitude: 74.639722,
        },
        {
          id: 'ana-sagar-baradari',
          name: 'Ana Sagar Lake & Baradari',
          teaser: 'Horizon · sunset palette',
          paragraphs: [
            'The embankment and marble pavilions frame a wide sky — classic “landscape + water” composition. Local life along the edge adds scale: walkers, tea stalls, birds.',
            'For a cleaner frame, zoom slightly to crop parked vehicles and plastic clutter at the shoreline.',
          ],
          photoTips: [
            'Polarising filter (if using a camera) to cut haze on water.',
            'Silhouettes work well — expose for sky, let foreground go dark.',
            'Bring a small tripod for blue hour; mind wind shake.',
          ],
          bestLight: 'Last 90 minutes before sunset; winter hazes can be pastel and soft.',
          latitude: 26.471389,
          longitude: 74.625833,
        },
        {
          id: 'adhai-din-screen',
          name: 'Adhai Din ka Jhonpra — carved screen',
          teaser: 'Textured stone · graphic light',
          paragraphs: [
            'The ornate arched screen is a macro and mid-shot playground — calligraphy, geometry, and deep shadow lines. Contrast is high in midday sun; softer light reveals more subtle carving.',
          ],
          photoTips: [
            'Side-lighting rakes texture — walk around until the sun grazes the stone.',
            'Include a human figure for scale — ask permission.',
          ],
          bestLight: 'Mornings 8–10 AM in cooler months; avoid harsh noon contrast.',
          latitude: 26.450278,
          longitude: 74.638889,
        },
        {
          id: 'akbari-fort-museum',
          name: 'Akbari Fort — museum & rampart mood',
          teaser: 'Mughal mass · museum still life',
          paragraphs: [
            'Courtyard walls, cannon placements, and museum galleries offer layered frames — stone, iron, and painted miniatures behind glass. Good for “heritage palette” edits.',
          ],
          photoTips: [
            'Shoot exhibits without flash — high ISO on modern phones is fine.',
            'Look for repeating arches down corridors.',
          ],
          bestLight: 'Museum interiors: overcast or soft daylight; exteriors: morning before heat haze builds.',
          etiquette: ['Confirm museum photography rules at the ticket counter.'],
          latitude: 26.456111,
          longitude: 74.639167,
        },
      ],
    },
    {
      id: 'ig-hidden-quieter',
      eyebrow: 'Quieter · local angles',
      title: 'Hidden gems & less crowded frames',
      intro: [
        'These spots are still public — not “secret” in a legal sense — but usually calmer than the dargah main court. Some are short drives (Pushkar / Nareli). Always check permissions for drones.',
      ],
      spots: [
        {
          id: 'foy-sagar',
          name: 'Foy Sagar — wide horizon & wind',
          teaser: 'Less touristed embankment',
          paragraphs: [
            'West of the core city, Foy Sagar is an older reservoir with long sightlines — fewer selfie crowds than Ana Sagar on many weekdays. Good for minimal compositions: water, sky, one tree.',
          ],
          photoTips: [
            'Telephoto compression pulls distant Aravalli ridges closer.',
            'Wind ripples add texture — faster shutter to freeze, slow for blur.',
          ],
          bestLight: 'Monsoon greens pop; winter afternoons are crisp if air quality is clear.',
          latitude: 26.4278,
          longitude: 74.6153,
        },
        {
          id: 'dargah-bazaar-lanes',
          name: 'Dargah outer lanes — colour & commerce',
          teaser: 'Candid street (respectful)',
          paragraphs: [
            'Rose garlands, brassware, and narrow shopfronts give saturated colour — better for storytelling than a single “postcard”. Work with 35mm equivalent and keep the camera low-profile.',
          ],
          photoTips: [
            'Shoot from the hip with zone focus for motion — ethical candids only.',
            'Pay for a rose or chai if you’re working inside a stall’s space.',
          ],
          bestLight: 'Late afternoon when stalls are busy but not fully dark.',
          etiquette: [
            'No mocking poses; don’t block pilgrims.',
            'Ask vendors before portraits that show their face clearly.',
          ],
          latitude: 26.4504,
          longitude: 74.6412,
        },
        {
          id: 'nasiyan-hall',
          name: 'Soniji ki Nasiyan — gilt hall (where allowed)',
          teaser: 'Miniature worlds · wood & gold',
          paragraphs: [
            'The Swarna Nagari diorama upstairs is visually stunning — low light, rich colour. Many temples restrict tripods and flash; phone night mode can help if permitted.',
          ],
          photoTips: [
            'Brace against a pillar; burst mode to beat micro-shake.',
            'Single-point AF on diorama detail; watch minimum focus distance.',
          ],
          bestLight: 'Mid-morning if skylight helps; otherwise rely on interior lamps.',
          etiquette: [
            'Follow temple staff instructions; some areas may forbid photography entirely — obey first.',
          ],
          latitude: 26.456944,
          longitude: 74.635556,
        },
        {
          id: 'pushkar-ghat-blue-hour',
          name: 'Pushkar Sarovar ghats (day trip)',
          teaser: 'Lamps · steps · reflection',
          paragraphs: [
            'Under an hour’s drive — Pushkar’s ghats at blue hour deliver tiered steps, lamps, and temple spires. It’s a different town’s rhythm but pairs naturally with an Ajmer itinerary.',
          ],
          photoTips: [
            'Arrive before lamps for setup; manual white balance for warm LEDs.',
            'Tripod only where not obstructing parikrama.',
          ],
          bestLight: '20–40 minutes after sunset on clear evenings; Kartik week is packed — arrive early.',
          latitude: 26.488889,
          longitude: 74.551389,
        },
        {
          id: 'nareli-marble',
          name: 'Nareli Jain temples (short drive)',
          teaser: 'Modern marble · clean lines',
          paragraphs: [
            'The Nareli complex’s white marble reads almost futuristic against blue sky — strong symmetry for architectural shots. Less medieval than Adhai Din, more “minimal Instagram”.',
          ],
          photoTips: [
            'Circular polariser to deepen sky vs marble.',
            'Step back for vanishing-point shots along staircases.',
          ],
          bestLight: 'Early morning for cool shadows on carved panels.',
          etiquette: ['Shoes off; no loud posing inside sanctums.'],
          latitude: 26.292,
          longitude: 74.738,
        },
      ],
    },
    {
      id: 'ig-hospitals-nearby',
      eyebrow: 'Emergency · medical',
      title: 'Hospitals nearby',
      intro: [
        'Shoot days can run long — heat, dust, and crowded lanes. Keep this list handy: it mirrors the city safety guide — live OpenStreetMap hospital search when the network allows, otherwise our curated Ajmer listings.',
        'Pins cover the wider city (not one monument only), but facilities are within typical reach when you are working around central Ajmer, Ana Sagar, or a Pushkar day trip.',
      ],
      spots: [],
      hospitalsOnly: true,
    },
  ],
}

const bySlug: Record<string, CityInstagramSpotsBundle> = {
  ajmer: ajmerInstagram,
}

export function getCityInstagramSpotsBySlug(slug: string): CityInstagramSpotsBundle | undefined {
  return bySlug[slug]
}
