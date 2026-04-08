/**
 * Famous places under “Best time to visit” — expandable copy + image per city.
 *
 * Images: Wikimedia Commons (stable `upload.wikimedia.org` thumb URLs).
 * See each file’s Commons page for author and license (typically CC BY-SA).
 *
 * `VisitHoursInfo.source`: `official` = archaeology / shrine / museum notices; `community` = typical Google Maps & travel-aggregator patterns — always verify at the gate.
 */
export type VisitHoursSource = 'official' | 'community'

export type VisitHoursInfo = {
  /** Primary “open / ticket” line */
  summary: string
  /** Season splits, closed days, lunch break, etc. */
  lines?: string[]
  source: VisitHoursSource
  /** Verification hint */
  note?: string
}

export type FamousPlace = {
  id: string
  name: string
  /** Shown on the collapsed row (optional) */
  teaser?: string
  paragraphs: string[]
  imageSrc: string
  imageAlt: string
  /** WGS84 — pin for “Open in Maps” */
  latitude: number
  longitude: number
  /** Best months & time-of-day for this specific site */
  bestTimeHighlight?: string
  /** Public / ticket hours where applicable */
  visitHours?: VisitHoursInfo
}

/** 1280px-wide thumbnails — same pattern Commons uses for predictable hotlinking */
const DARGAH =
  'https://upload.wikimedia.org/wikipedia/commons/thumb/4/4c/Ajmer_Sharif%2C_Dargah_of_Mainuddin_Chisti_in_Ajmer%2C_Rajasthan_11.jpg/1280px-Ajmer_Sharif%2C_Dargah_of_Mainuddin_Chisti_in_Ajmer%2C_Rajasthan_11.jpg'

const ANA_SAGAR =
  'https://upload.wikimedia.org/wikipedia/commons/thumb/2/2e/20191216_Ana_Sagar_Lake_Ajmer_1129_8858.jpg/1280px-20191216_Ana_Sagar_Lake_Ajmer_1129_8858.jpg'

const ADHAI_DIN =
  'https://upload.wikimedia.org/wikipedia/commons/thumb/1/13/20191216_Adhai_Din_Ka_Jhonpra%2C_Ajmer_1208_8881.jpg/1280px-20191216_Adhai_Din_Ka_Jhonpra%2C_Ajmer_1208_8881.jpg'

const NASIYAN =
  'https://upload.wikimedia.org/wikipedia/commons/thumb/9/92/20191216_Soniji_Ki_Nasiyan_-_Ajmer_Jain_temple%2C_1257_8914.jpg/1280px-20191216_Soniji_Ki_Nasiyan_-_Ajmer_Jain_temple%2C_1257_8914.jpg'

const AKBARI_FORT =
  'https://upload.wikimedia.org/wikipedia/commons/thumb/c/cd/Akbar%27s_Fort_or_Magazine_or_Daulata_Khana3.jpg/1280px-Akbar%27s_Fort_or_Magazine_or_Daulata_Khana3.jpg'

/** Pushkar — ~14 km from Ajmer; classic same-day Sanatan / tirth circuit */
const BRAHMA_PUSHKAR =
  'https://upload.wikimedia.org/wikipedia/commons/thumb/5/5a/Pushkar_Brahma_Temple%2C_at_Pushkar_in_Rajasthan_09.jpg/1280px-Pushkar_Brahma_Temple%2C_at_Pushkar_in_Rajasthan_09.jpg'

const SAVITRI_PUSHKAR =
  'https://upload.wikimedia.org/wikipedia/commons/thumb/3/38/20191215_%C5%9Awi%C4%85tynia_Savitri_w_Puszkarze_1016_8669_DxO.jpg/1280px-20191215_%C5%9Awi%C4%85tynia_Savitri_w_Puszkarze_1016_8669_DxO.jpg'

const RANGJI_PUSHKAR =
  'https://upload.wikimedia.org/wikipedia/commons/thumb/3/37/Old_Rangji_temple%2C_built_in_1823_in_Pushkar_14.jpg/1280px-Old_Rangji_temple%2C_built_in_1823_in_Pushkar_14.jpg'

const VARAHA_LAKE_PUSHKAR =
  'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b3/Pushkar%2C_India%2C_Pushkar_Lake_and_Ghats.jpg/1280px-Pushkar%2C_India%2C_Pushkar_Lake_and_Ghats.jpg'

const ajmerPlaces: FamousPlace[] = [
  {
    id: 'dargah-sharif',
    name: 'Ajmer Sharif Dargah',
    teaser: 'Khwaja Moinuddin Chishti',
    paragraphs: [
      'The shrine of Khwaja Garib Nawaz is the spiritual heart of Ajmer — a calm marble courtyard, qawwali in the evenings, and a steady stream of pilgrims who have walked these lanes for centuries. Dress modestly, remove shoes at the gate, and allow time to sit quietly rather than rush the inner sanctum.',
      'Thursdays and Urs days draw the largest crowds; if you prefer a gentler visit, aim for early morning on a weekday in the cooler months. Photography rules change — ask at the entrance and respect closures around the main tomb.',
    ],
    imageSrc: DARGAH,
    imageAlt: 'Ajmer Sharif Dargah — white domes and courtyard of the Chishti shrine',
    latitude: 26.449722,
    longitude: 74.639722,
    bestTimeHighlight:
      'October–March for pleasant weather · weekday early mornings or after Asr for lighter crowds than Thursday evenings.',
    visitHours: {
      summary:
        'Main ziyarat: summer (Apr–Sep) often ~4:00 AM–10:00 PM; winter (Oct–Mar) often ~5:00 AM–9:00 PM (published dargah timetables).',
      lines: [
        'Daily rituals (khidmat, qawwali, closing) shift through the day — expect pauses around prayer times.',
        'Urs, Ramadan & Eid schedules can extend hours or change access — check the shrine notice board.',
      ],
      source: 'official',
      note: 'Cross-check on ajmersharifdargah.org or at the main gate — special days override routine timings.',
    },
  },
  {
    id: 'ana-sagar',
    name: 'Ana Sagar Lake & Baradari',
    teaser: 'Sunset walks, city views',
    paragraphs: [
      'Ana Sagar is an artificial lake commissioned in the twelfth century; its embankments are still a favourite evening stroll for locals. The marble Baradari pavilions and gardens added later frame wide views across the water toward the Aravalli rim.',
      'Winter sunsets tint the haze gold; in monsoon the breeze is freshest. Pair a walk with street snacks from nearby stalls, and keep an eye on weather — open areas can feel windy on cool evenings.',
    ],
    imageSrc: ANA_SAGAR,
    imageAlt: 'Ana Sagar Lake in Ajmer with trees and shoreline',
    latitude: 26.471389,
    longitude: 74.625833,
    bestTimeHighlight:
      'October–March for sunset walks · 5:00–7:30 PM for golden light; weekends are busier along the promenade.',
    visitHours: {
      summary:
        'Open public waterfront — no fixed ticketed “opening”. Most walkers use daylight till ~1 h after sunset; avoid isolated stretches late at night.',
      lines: [
        'Baradari / garden pockets may follow municipal maintenance hours if temporarily fenced.',
      ],
      source: 'community',
      note: 'Based on common visitor patterns (Google Maps reviews & local guides) — not a single official “gate time”.',
    },
  },
  {
    id: 'adhai-din-ka-jhonpra',
    name: 'Adhai Din ka Jhonpra',
    teaser: 'Indo-Islamic screen & pillars',
    paragraphs: [
      'This mosque ruins site is famous for its ornate arched screen — a carved wall of calligraphy and geometric patterns that feels almost lacework in stone. The name ties to a legend of rapid construction; historians read the layers as a palimpsest of temples reworked into a Friday mosque.',
      'Visit with a guide or good notes on architectural detail — the contrast between rough outer walls and refined interior carving is the story. Mornings offer softer light for photos; the compound is compact, so an hour is usually enough.',
    ],
    imageSrc: ADHAI_DIN,
    imageAlt: 'Ruins of Adhai Din ka Jhonpra mosque in Ajmer',
    latitude: 26.450278,
    longitude: 74.638889,
    bestTimeHighlight:
      'October–March · 8:00–10:00 AM for soft light on the carved screen; allow 45–60 minutes.',
    visitHours: {
      summary:
        'Widely listed for visitors: about 6:00 AM–8:30 PM daily (Archaeological Survey of India monument).',
      lines: ['Ticket counter timings may end earlier than outer gate — confirm on arrival.'],
      source: 'community',
      note: 'Aggregator sites align on these hours; ASI Jaipur circle can post changes — read the board at entry.',
    },
  },
  {
    id: 'nasiyan-jain',
    name: 'Soniji ki Nasiyan (Nasiyan Jain Temple)',
    teaser: 'Wooden hall & gilt dioramas',
    paragraphs: [
      'Known locally as the Red Temple for its sandstone exterior, the real marvel is the Swarna Nagari hall upstairs — a wood-and-gilt model world depicting Jain cosmology in dizzying miniature cities and mountains.',
      'Shoes off, whispered movement, and slow circles around the dioramas reward patience. Combine with a stroll in the surrounding lanes; allow 45–60 minutes including the museum pace.',
    ],
    imageSrc: NASIYAN,
    imageAlt: 'Soniji ki Nasiyan — Ajmer Jain temple exterior',
    latitude: 26.456944,
    longitude: 74.635556,
    bestTimeHighlight:
      'October–March · late morning for natural light in the gilt hall; allow 45–60 minutes including stairs.',
    visitHours: {
      summary:
        'Museums of India listing: 8:30 AM–4:30 PM (all days, including public holidays per database entry).',
      lines: ['Small camera / entry fees may apply — cash handy.'],
      source: 'official',
      note: 'From Museums of India (national portal) — confirm fee at ticket window.',
    },
  },
  {
    id: 'akbari-fort',
    name: 'Akbari Fort & Museum',
    teaser: 'Mughal walls, Rajputana museum',
    paragraphs: [
      'Built under Akbar and later tied to British residency history, the fort compound today holds the Government Museum — arms, miniature paintings, and sculpture that sketch Rajasthan’s courtly and folk worlds.',
      'Good for history-first travellers; signage can be sparse, so read ahead or hire a short guided round. Combine with the nearby dargah circuit on foot if you are comfortable with sun and distance — hydrate.',
    ],
    imageSrc: AKBARI_FORT,
    imageAlt: 'Akbari Fort — magazine and fort walls in Ajmer',
    latitude: 26.456111,
    longitude: 74.639167,
    bestTimeHighlight:
      'October–March · museum interiors read best before harsh midday sun; pair with Old Ajmer lanes on foot.',
    visitHours: {
      summary:
        'Rajasthan Government Museum (inside fort): typically 10:00 AM–4:30 PM; closed Mondays & notified holidays.',
      lines: ['Separate fort precinct rules may apply — museum ticket is the usual visitor path.'],
      source: 'official',
      note: 'Matches Department of Archaeology & Museums, Rajasthan, standard museum week — verify before a long detour.',
    },
  },
  {
    id: 'brahma-temple-pushkar',
    name: 'Jagatpita Brahma Mandir, Pushkar',
    teaser: 'Rare Brahma shrine · ~14 km from Ajmer',
    paragraphs: [
      'Pushkar lies a short drive from Ajmer and is one of Hinduism’s ancient tirthas — centred on a sacred lake ringed by ghats and hundreds of shrines. The Brahma Mandir here is among the very few widely known temples dedicated to Lord Brahma; the red shikhara and marble sanctum draw pilgrims especially during Kartik Purnima.',
      'Dress modestly, remove shoes where asked, and expect crowds on festival days. Combine with a parikrama mood: early mornings are cooler and the lanes a little calmer.',
    ],
    imageSrc: BRAHMA_PUSHKAR,
    imageAlt: 'Brahma Temple, Pushkar — red shikhara and entrance',
    latitude: 26.4875,
    longitude: 74.551389,
    bestTimeHighlight:
      'Kartik Purnima week is peak festival · otherwise October–March, early morning mangal aarti or evening sandhya.',
    visitHours: {
      summary:
        'Typical published darshan: winter ~5:30 AM–1:30 PM & 3:00–9:00 PM; summer ~6:00 AM–1:30 PM & 3:00–8:30 PM.',
      lines: ['Afternoon break commonly ~1:30–3:00 PM. Hours shift with aarti & festivals.'],
      source: 'community',
      note: 'Compiled from multiple temple guides & traveller reports — confirm on the notice board at the entrance.',
    },
  },
  {
    id: 'savitri-temple-pushkar',
    name: 'Savitri Mata Mandir, Pushkar',
    teaser: 'Hill-top · Aravalli views',
    paragraphs: [
      'Dedicated to Goddess Savitri, this shrine sits on a ridge above Pushkar with sweeping views over the town and lake. Many visitors hike the stone path or take the ropeway — either way, carry water and start early in hot months.',
      'The climb is part of the ritual for some families; pause at the top for darshan and the breeze before descending into the bazaar.',
    ],
    imageSrc: SAVITRI_PUSHKAR,
    imageAlt: 'Savitri Mata temple on the hill above Pushkar',
    latitude: 26.493056,
    longitude: 74.561111,
    bestTimeHighlight:
      'October–March · first ropeway trips or sunrise hike for cool air; avoid midday climb April–June.',
    visitHours: {
      summary:
        'Ropeway commonly listed ~8:00 AM–7:00 PM (seasonal); hill path usable roughly sunrise–sunset when safe.',
      lines: [
        'Temple darshan usually follows ropeway or hiking access — last rides often ~45–60 min before closing.',
      ],
      source: 'community',
      note: 'Aggregator & review patterns (Holidify, local operators) disagree slightly — check the booth same day.',
    },
  },
  {
    id: 'rangji-temple-pushkar',
    name: 'Rangji Mandir (Ranganatha), Pushkar',
    teaser: 'Dravidian-style Vaishnav shrine',
    paragraphs: [
      'Dedicated to Lord Rangji (Ranganatha), this large temple stands out for its South Indian–influenced gopuram and courtyard layout — unusual in the Rajasthan landscape. It reflects the layered history of traders and traditions that passed through Pushkar.',
      'Allow time for the full compound; photography may be restricted inside — check signs at the gate.',
    ],
    imageSrc: RANGJI_PUSHKAR,
    imageAlt: 'Rangji temple gopuram and courtyard, Pushkar',
    latitude: 26.485833,
    longitude: 74.552222,
    bestTimeHighlight:
      'October–March mornings for the gopuram in soft light; allow 45–60 minutes for full courtyard.',
    visitHours: {
      summary:
        'Typical visitor-reported hours: ~6:00 AM–12:30 PM & ~4:00 PM–9:00 PM; mid-day closure ~12:30–4:00 PM.',
      lines: ['South Indian–style ritual schedule — longer queues during Kartik.'],
      source: 'community',
      note: 'From Google Maps & travel blogs — verify at the temple office; photography may be restricted inside.',
    },
  },
  {
    id: 'varaha-temple-pushkar',
    name: 'Varaha Mandir & Pushkar Sarovar',
    teaser: 'Ancient Varaha shrine · lake ghats',
    paragraphs: [
      'On the banks of Pushkar Lake, the Varaha Mandir is one of the older stone shrines in the tirth — dedicated to Lord Vishnu in his Varaha form. The lake itself is the heart of the Sanatan circuit: ghats, aarti, and parikrama link Brahma Kund with dozens of small mandirs.',
      'Respect bathing and ritual zones; non-Hindus may be asked not to enter certain inner areas — follow local guidance. Pair with evening lamp-lit scenes at the ghats when the light is kindest for photos from the outer paths.',
    ],
    imageSrc: VARAHA_LAKE_PUSHKAR,
    imageAlt: 'Pushkar Lake and ghats with temples along the water',
    latitude: 26.488889,
    longitude: 74.551389,
    bestTimeHighlight:
      'October–March · evening aarti at the ghats for lamps & breeze; Kartik week is packed but atmospheric.',
    visitHours: {
      summary:
        'Lake & outer ghats: generally accessible through the day for parikrama; Varaha shrine often follows typical temple slots (~sunrise–noon, reopen afternoon).',
      lines: [
        'Some inner sanctum areas may restrict entry by tradition — ask at the gate.',
      ],
      source: 'community',
      note: 'No single state “ticket hour” for the whole lake — timings are temple-specific & festival-driven.',
    },
  },
]

const bySlug: Record<string, FamousPlace[]> = {
  ajmer: ajmerPlaces,
}

/** Always first when present; rest of list is shuffled (Fisher–Yates). */
const JAGATPITA_FIRST_ID = 'brahma-temple-pushkar'

function shuffleRest<T>(items: T[]): T[] {
  const copy = [...items]
  for (let i = copy.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1))
    const t = copy[i]!
    copy[i] = copy[j]!
    copy[j] = t
  }
  return copy
}

export function getFamousPlacesByCitySlug(slug: string): FamousPlace[] {
  const list = bySlug[slug] ?? []
  const idx = list.findIndex((p) => p.id === JAGATPITA_FIRST_ID)
  if (idx === -1) return [...list]

  const jagatpita = list[idx]!
  const rest = list.filter((_, i) => i !== idx)
  return [jagatpita, ...shuffleRest(rest)]
}
