/**
 * Deep history copy for city guide pages — verified in broad strokes from standard Indian history texts;
 * dates for early periods are often approximate; cross-check academic sources before academic citation.
 */

import type { CityHistoryBundle } from '@/data/cityHistory.types'
import { REST_CITY_HISTORIES } from '@/data/cityHistoryRest'

export type { CityHistoryBundle, HistorySection, HistoryTimelineEntry } from '@/data/cityHistory.types'

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

const alwarHistory: CityHistoryBundle = {
  citySlug: 'alwar',
  whatIsTitle: 'What is Alwar?',
  whatIsParagraphs: [
    'Alwar sits where the Aravallis roll down toward the Delhi–Jaipur corridor — close enough to the NCR for weekend escapes, yet still unmistakably Rajasthan in its forts, sweets, and jungle edge. The district wraps ancient Matsya-country memory, medieval hill forts, and the tiger forests of Sariska in one map: Bala Quila looms over the town; Siliserh and Sagar lakes catch monsoon light; highways lead outward to Neemrana and Jaipur.',
    'Travellers often pair the city with Sariska Tiger Reserve (jeep mornings, dry-deciduous ridges) or with Neemrana’s ridge forts — but Alwar itself rewards slow lanes: milk-cake shops, the old palace quarter, and bazaars that still feel like a former princely capital rather than a generic highway stop.',
  ],
  sections: [
    {
      id: 'puranic-ancient',
      eyebrow: 'Puranic & ancient',
      title: 'Matsya, Virat Nagar, epic memory',
      paragraphs: [
        'Mahabharata geography places the kingdom of Matsya in this belt — the “fish-country” realm where the Pandavas spent part of their ajñātavāsa (year incognito) in the court of King Virata. Traditions and modern archaeology both point to sites in and around present-day Alwar district (including Bairat / Virat Nagar) as layers of that remembered landscape — Ashokan pillars and early historic remains remind us the region was politically alive long before “Alwar” appeared on maps.',
        'Ancient trade and pilgrimage routes crossed the eastern Aravallis toward Mathura and the Gangetic plain; local clans, temples, and tanks accumulated around strategic passes. What you see today in Alwar’s museums and fort lore is the medieval Rajput state built on those older foundations.',
      ],
      timeline: [
        {
          id: 'matsya-epic',
          years: 'Epic memory',
          rulerOrEra: 'Matsya kingdom (Virata)',
          work: 'Puranic and epic texts anchor this belt in Mahabharata geography — pilgrimage and identity still echo “Matsya” in regional names and fairs.',
        },
        {
          id: 'virat-bairat',
          years: 'Ancient–early historic',
          rulerOrEra: 'Virat Nagar / Bairat circle',
          work: 'Archaeology around Bairat links the district to Mauryan and post-Mauryan India — coins, inscriptions, and early shrines along the Aravalli grain.',
        },
        {
          id: 'regional-polities',
          years: '1st millennium CE onward',
          rulerOrEra: 'Regional dynasties & clan networks',
          work: 'Successive powers — Yadava links, Gurjara-Pratihara shadow, local lineages — contested the passes and fertile pockets before the medieval fort cities of Rajasthan took shape.',
        },
      ],
    },
    {
      id: 'medieval-early-modern',
      eyebrow: 'Medieval & early modern',
      title: 'Nikumbhas, Khanzadas, Mughal maps',
      paragraphs: [
        'From the late medieval period, the hills around Alwar were held by Rajput houses — including Nikumbha and later Khanzada lineages — who built and rebuilt Bala Quila and linked the town to the politics of Delhi and Amber. Mughal chronicles and revenue maps knew this terrain as a strategic Aravalli salient: control here secured routes between Hindustan and the Rajput principalities.',
        'As Mughal authority thinned and Maratha networks expanded, local rulers negotiated tribute and territory; Alwar’s rulers would later style themselves as sovereigns of a compact but defensible state — fort, treasury, and forest rights bundled together.',
      ],
      timeline: [
        {
          id: 'bala-quila',
          years: '15th–17th century (layers)',
          rulerOrEra: 'Fort-building era',
          work: 'Bala Quila (Alwar Fort) rises as one of the longest ridge forts in Rajasthan — a statement of hill control over the plain.',
        },
        {
          id: 'mughal-maratha',
          years: '17th–18th century',
          rulerOrEra: 'Mughal decline / Maratha pressure',
          work: 'Rajput states manoeuvre between imperial farmans and Pune-based military finance — prelude to East India Company paramountcy.',
        },
        {
          id: 'alwar-principality',
          years: '18th century onward',
          rulerOrEra: 'Alwar state (Naruka / princely house)',
          work: 'Consolidation of Alwar as a named principality with courts, armies, and treaties — the town becomes an administrative and ritual centre.',
        },
      ],
    },
    {
      id: 'colonial-modern',
      eyebrow: 'Colonial & modern',
      title: 'Princely Alwar, Rajasthan state, Sariska',
      paragraphs: [
        'Under British paramountcy, Alwar was one of Rajasthan’s salute states — railways, Anglo-vernacular schools, and codified law arrived alongside hunting preserves that later became part of India’s wildlife story. After Independence, the princely state merged into Matsya Union and then into a larger Rajasthan; district boundaries were redrawn, but Alwar remained a hub for education, courts, and regional trade.',
        'Today’s visitors inherit that layered past: the same ridges that held cannons now host tiger tourism in Sariska; the old capital’s lanes still sell Alwar’s famous milk cake (palang tor) while new highways connect the city to Delhi and Jaipur in a few hours.',
      ],
      timeline: [
        {
          id: 'british-paramountcy',
          years: '19th–mid 20th century',
          rulerOrEra: 'British India / princely treaties',
          work: 'Indirect rule — roads, cantonment culture, and forest policy; elite hunting estates foreshadow conservation debates.',
        },
        {
          id: 'independence',
          years: '1947',
          rulerOrEra: 'Indian Dominion',
          work: 'Princely states accede; Alwar’s administration transitions to democratic institutions.',
        },
        {
          id: 'rajasthan-merge',
          years: '1948–1956',
          rulerOrEra: 'Matsya Union → Rajasthan',
          work: 'Integration into modern Rajasthan — district HQ functions, Hindi-medium institutions, and a share in state tourism branding.',
        },
        {
          id: 'sariska-era',
          years: '1978 reserve (benchmark)',
          rulerOrEra: 'Sariska Tiger Reserve',
          work: 'Dry-deciduous forests become a flagship protected area — jeep tourism, conservation conflict, and “tiger landscape” identity for Alwar district.',
        },
      ],
    },
  ],
}

const bySlug: Record<string, CityHistoryBundle> = {
  ajmer: ajmerHistory,
  alwar: alwarHistory,
  ...REST_CITY_HISTORIES,
}

export function getCityHistoryBySlug(slug: string): CityHistoryBundle | undefined {
  return bySlug[slug]
}
