/**
 * Deep history copy for city guide pages — verified in broad strokes from standard Indian history texts;
 * dates for early periods are often approximate; cross-check academic sources before academic citation.
 */

export type HistoryTimelineEntry = {
  id: string
  years: string
  rulerOrEra: string
  work: string
}

export type HistorySection = {
  id: string
  eyebrow: string
  title: string
  paragraphs: string[]
  timeline: HistoryTimelineEntry[]
}

export type CityHistoryBundle = {
  citySlug: string
  /** Short “what is this place?” — shown above the accordion stack */
  whatIsTitle: string
  whatIsParagraphs: string[]
  sections: HistorySection[]
}

const ajmerHistory: CityHistoryBundle = {
  citySlug: 'ajmer',
  whatIsTitle: 'What is Ajmer?',
  whatIsParagraphs: [
    'Ajmer (Sanskrit Ajayameru — “invincible hill”) is a historic city in the Aravalli fold of central Rajasthan. It sits between the Thar edge and the fertile plains toward the east, and has long been a crossroads of trade routes, armies, and faiths — Rajput fortresses, Delhi Sultans, Mughal emperors, Maratha diplomacy, British administration, and today’s democratic India have all left layers here.',
    'People know Ajmer across India chiefly for the Dargah of Khwaja Moinuddin Chishti (Ajmer Sharif) — one of the most visited Sufi shrines in South Asia — and for nearby Pushkar, a major Hindu tirtha. The story below moves from Puranic geography and epic memory to medieval kingdoms, conquest, empire, and modern statehood.',
  ],
  sections: [
    {
      id: 'puranic-ancient',
      eyebrow: 'Puranic & ancient',
      title: 'Epic geography, Pushkar, early kingdoms',
      paragraphs: [
        'In Mahabharata geography, much of present-day Rajasthan is woven into the broader “Matsya” and desert-country narratives — kingdoms and pilgrim routes that later poets and Puranic compilers remembered when they mapped Bharatavarsha. Pushkar, today in Ajmer district beside the lake, is named in tradition as the site linked to Brahma and the rare Pushkar tirtha — a place of yajnas and fairs long before modern borders.',
        'From the early centuries CE, dynasties rose and fell across western India — Saka rulers, Gupta-era connections, Gurjara-Pratihara influence, and local clan networks — before the medieval Rajput houses that would make Ajmer a famous Chauhan capital. Archaeology and inscriptions fill in what texts only sketch: forts, temples, and trade towns along the route to Gujarat and Malwa.',
      ],
      timeline: [
        {
          id: 'matsya-epic',
          years: 'Epic & Puranic memory',
          rulerOrEra: 'Matsya / desert-country lore',
          work: 'Mahabharata and later texts place pilgrim routes and kingdoms across this belt; not a single “Ajmer” name in the epic, but the region sits in the remembered geography of western India.',
        },
        {
          id: 'pushkar-tirtha',
          years: 'Ancient–medieval continuity',
          rulerOrEra: 'Pushkar tirtha',
          work: 'One of Hinduism’s major pilgrimage centres — the Brahma temple and Kartik fair draw millions; spiritually, Ajmer district is inseparable from Pushkar for many visitors.',
        },
        {
          id: 'early-polities',
          years: 'c. 1st–9th century CE',
          rulerOrEra: 'Saka / Gupta links / regional powers',
          work: 'Coins, inscriptions, and temple remains show long-distance trade and shifting suzerainty — context for later Rajput state-building in Rajasthan.',
        },
      ],
    },
    {
      id: 'medieval-early-modern',
      eyebrow: 'Medieval & early modern',
      title: 'Chauhans, Tarain, Sultanate, Mughals',
      paragraphs: [
        'The Chauhans (Chahamanas) of Shakambhari (later Sapadalaksha) made Ajmer a leading Rajput capital. Traditional accounts credit King Ajayaraja II with consolidating “Ajayameru” as a fortified royal seat in the 12th century — the name that became Ajmer. His successors expanded power across eastern Rajasthan; Vigraharaja IV (Visaladeva) is remembered for military success and Sanskrit court culture.',
        'The best-known Chauhan ruler is Prithviraj III (Prithviraj Chauhan), whose kingdom included Ajmer and Delhi. After victory in the first battle of Tarain (1191), he was defeated in the second (1192) by Shihab al-Din Muhammad Ghori’s forces — a turning point in north Indian politics. Muslim rule was soon established in Ajmer; Qutb al-Din Aibak is associated with campaigns in the region. The Chishti khanqah grew into a pan-Indian spiritual centre.',
        'Under the Delhi Sultanate and then the Mughals, Ajmer remained strategically and spiritually important. Emperor Akbar’s documented pilgrimage to the Dargah (1562 CE) symbolized Mughal outreach to diverse subjects; the city’s Sufi shrine and Hindu pilgrimage neighbours (Pushkar) coexisted within imperial frameworks.',
      ],
      timeline: [
        {
          id: 'ajayaraja',
          years: '12th century (trad. foundation era)',
          rulerOrEra: 'Ajayaraja II (Chauhan)',
          work: 'Associated with fortifying and naming Ajayameru — the hill capital that gives Ajmer its name.',
        },
        {
          id: 'vigraharaja',
          years: 'c. 1153–1163 CE',
          rulerOrEra: 'Vigraharaja IV (Visaladeva)',
          work: 'Expansion of Chauhan power; patronage of poets — Ajmer as a hub of Sanskrit culture and arms.',
        },
        {
          id: 'prithviraj',
          years: '1177–1192 CE',
          rulerOrEra: 'Prithviraja III',
          work: 'Last great Hindu ruler of the Chauhan line at this scale; Tarain battles against Ghurid armies decide the fate of north India.',
        },
        {
          id: 'post-1192',
          years: 'From 1193 CE',
          rulerOrEra: 'Delhi Sultanate (Ghurid / Mamluk phase)',
          work: 'Ajmer incorporated into Turkic-Indian sultanates; Indo-Islamic architecture and new administrative cadres.',
        },
        {
          id: 'chishti',
          years: '13th century onward',
          rulerOrEra: 'Chishti silsila — Khwaja Moinuddin',
          work: 'Dargah at Ajmer becomes one of India’s most revered Sufi centres — drawing emperors and commoners alike.',
        },
        {
          id: 'akbar',
          years: '1562 CE (notable visit)',
          rulerOrEra: 'Akbar (Mughal)',
          work: 'Imperial pilgrimage to Ajmer Sharif; policy of sulh-i kull (harmony) expressed through respect for major shrines.',
        },
      ],
    },
    {
      id: 'colonial-modern',
      eyebrow: 'Colonial & modern',
      title: 'Marathas, British Raj, free India',
      paragraphs: [
        'From the 18th century, Maratha armies and diplomacy reshaped Rajasthan; local Rajput states negotiated treaties with the Marathas and later with the East India Company. Ajmer became the seat of the British “Ajmer–Merwara” province — a compact, directly administered territory surrounded by princely states, important for roads, law courts, and education.',
        'After Independence (1947), Ajmer–Merwara merged with Rajasthan in stages (1956 reorganisation is the landmark for state boundaries today). Modern Ajmer is a railway junction, education and medical hub, and a city whose economy still rests partly on pilgrimage tourism and regional trade — the medieval crossroads updated for the republic.',
      ],
      timeline: [
        {
          id: 'maratha-era',
          years: '18th century',
          rulerOrEra: 'Maratha networks & Rajput treaties',
          work: 'Military and revenue pressure from Pune-based power; Rajput states pay tribute or ally — prelude to Company supremacy.',
        },
        {
          id: 'british-ajmer',
          years: '1818–1947 (broadly)',
          rulerOrEra: 'British Crown / Ajmer–Merwara province',
          work: 'Direct rule — railways, Anglo-vernacular schools, courts; Ajmer as administrative island amid princely Rajasthan.',
        },
        {
          id: 'independence',
          years: '1947',
          rulerOrEra: 'Dominion of India',
          work: 'End of British paramountcy; princely states integrate; Ajmer chooses Indian Union.',
        },
        {
          id: 'rajasthan-state',
          years: '1956',
          rulerOrEra: 'States Reorganisation',
          work: 'Ajmer merged into a larger Rajasthan — modern district boundaries and Hindi-medium state institutions take shape.',
        },
        {
          id: 'today',
          years: 'Present',
          rulerOrEra: 'Republic of India (democracy)',
          work: 'Ajmer as district HQ, university town, and national pilgrimage destination — Puranic memory, Sufi devotion, and electoral politics on one map.',
        },
      ],
    },
  ],
}

const bySlug: Record<string, CityHistoryBundle> = {
  ajmer: ajmerHistory,
}

export function getCityHistoryBySlug(slug: string): CityHistoryBundle | undefined {
  return bySlug[slug]
}
