/**
 * Drone rules & contacts — planning reference only. Laws change; verify on DGCA / district sites before flying.
 */

export type DroneContact = {
  id: string
  organization: string
  role: string
  phoneDisplay?: string
  telDigits?: string
  website?: string
  note?: string
}

export type DroneZoneBand = 'banned' | 'caution' | 'ok'

export type DroneZoneCard = {
  band: DroneZoneBand
  title: string
  subtitle: string
  bullets: string[]
}

export type DronePermissionTrigger = {
  title: string
  detail: string
}

export type IndiaRuleRow = {
  id: string
  label: string
  status: 'banned' | 'caution' | 'ok'
  detail: string
}

export type CityDroneBundle = {
  citySlug: string
  cityLabel: string
  pageTitle: string
  leadParagraphs: string[]
  /** Plain answer block */
  canFlyAnswer: { heading: string; paragraphs: string[] }
  localContextTitle: string
  localContextParagraphs: string[]
  zones: DroneZoneCard[]
  indiaRulesTitle: string
  indiaRulesIntro: string
  indiaRules: IndiaRuleRow[]
  permissionTitle: string
  permissionIntro: string
  permissionTriggers: DronePermissionTrigger[]
  registrationBlock: { title: string; paragraphs: string[] }
  contacts: DroneContact[]
  disclaimer: string[]
  officialLinks: { label: string; href: string }[]
}

const DGCA_DIGITAL_SKY = 'https://digitalsky.dgca.gov.in'
const DGCA_HOME = 'https://www.dgca.gov.in'

const SHARED_INDIA_RULES: IndiaRuleRow[] = [
  {
    id: 'monuments',
    label: 'Monuments & ASI sites (forts, palaces, many temples)',
    status: 'banned',
    detail:
      'Archaeological Survey of India (ASI) protected monuments and many state heritage sites restrict or prohibit drone take-off without written approval. Treat these as no-fly unless a specific permit names the site.',
  },
  {
    id: 'airport',
    label: 'Airports & aerodrome zones',
    status: 'banned',
    detail:
      'Strict no-drone zones around operational airports and designated aerodromes on the Digital Sky map. Distance limits apply — never guess; check the official map for your exact GPS.',
  },
  {
    id: 'military',
    label: 'Military, defence & strategic installations',
    status: 'banned',
    detail:
      'Absolutely prohibited. Includes cantonments, radar, border areas, and any area marked restricted on government maps — even if it “looks empty”.',
  },
  {
    id: 'public',
    label: 'Dense public places (melas, ghats, bazaars)',
    status: 'caution',
    detail:
      'May be allowed only with permission from local police / administration and when your drone class & Digital Sky registration allow that airspace. Crowds, noise, and privacy make enforcement strict.',
  },
  {
    id: 'remote',
    label: 'Open rural / desert / hill areas (away from crowds & NOT in restricted airspace)',
    status: 'ok',
    detail:
      'Often the most realistic option for hobby flying — still requires valid registration & compliance on Digital Sky, checking NOTAMs, and landowner consent where private.',
  },
]

const SHARED_PERMISSION_TRIGGERS: DronePermissionTrigger[] = [
  {
    title: 'Commercial use (any paid shoot, brand content, stock)',
    detail:
      'Typically needs appropriate operator / remote pilot approvals under current Drone Rules and may need local shoot permission from police or district — especially in towns.',
  },
  {
    title: 'Heavier or non-nano class drones',
    detail:
      'Higher weight classes have stricter training, equipment, and insurance expectations. Nano category rules are not a free pass to ignore no-fly zones.',
  },
  {
    title: 'Sensitive locations (shrines, rallies, government buildings, border districts)',
    detail:
      'Expect extra scrutiny. Religious sites often ban flight on moral / crowd-safety grounds even when airspace looks “open”. Always ask management and local police in writing when possible.',
  },
  {
    title: 'Night flying, BVLOS, or flying above allowed height',
    detail:
      'Usually restricted to certified operators under approved scenarios — not typical for tourists.',
  },
]

const SHARED_REGISTRATION = {
  title: 'Registration & Digital Sky (India)',
  paragraphs: [
    'All drone operations in India must follow the Ministry of Civil Aviation’s Drone Rules and the Digital Sky platform for registration, pilot listing, and zone checks where applicable.',
    'Before you travel, create / update your profile on Digital Sky, verify your drone class, and download any required certificates. The in-app map shows green / yellow / red zones — red means no flight without explicit permission.',
    `Official portal: ${DGCA_DIGITAL_SKY} — also bookmark ${DGCA_HOME} for circulars and updates.`,
  ],
}

const SHARED_DISCLAIMER = [
  'This page is general guidance for travellers, not legal advice. Rules, zones, and phone numbers change. Always confirm on DGCA Digital Sky, district websites, and local police before flying.',
  'Flying without permission in restricted areas can lead to seizure of equipment, fines, or prosecution. When in doubt, do not take off.',
]

function sharedContactsRajasthan(): DroneContact[] {
  return [
    {
      id: 'dgca',
      organization: 'Directorate General of Civil Aviation (DGCA)',
      role: 'Drone rules, Digital Sky registration & zone queries',
      website: DGCA_DIGITAL_SKY,
      note: 'Use Digital Sky for maps, registration, and latest circulars. Main site: dgca.gov.in',
    },
    {
      id: 'emergency',
      organization: 'National emergency',
      role: 'Police / fire / ambulance',
      phoneDisplay: '112',
      telDigits: '112',
    },
    {
      id: 'raj-tourism',
      organization: 'Rajasthan Tourism',
      role: 'State travel helpline (general queries)',
      phoneDisplay: '1800-180-29',
      telDigits: '1800180029',
      website: 'https://tourism.rajasthan.gov.in/',
    },
  ]
}

const ajmerBundle: CityDroneBundle = {
  citySlug: 'ajmer',
  cityLabel: 'Ajmer',
  pageTitle: 'Drone rules & safe flying',
  leadParagraphs: [
    'Ajmer mixes dense pilgrimage streets, lakes, ASI monuments, and an airport in the district — so “can I fly?” depends on exact GPS, your drone class, and whether you have written permission.',
    'Read the zones below, check Digital Sky before every flight, and when unsure ask local police or shrine management — not bystanders.',
  ],
  canFlyAnswer: {
    heading: 'Can you fly a drone in Ajmer?',
    paragraphs: [
      'There is no single “yes” for the whole city. Hobby drones are not automatically allowed at the Dargah, Adhai Din ka Jhonpra, museums, or crowded ghats — these behave like monuments or controlled public spaces.',
      'Open countryside in the district (away from crowds, NOT in red zones on Digital Sky, with landowner consent) is often where compliant hobby flying is realistic — still only after you are registered and following height / weight rules.',
      'Near Kishangarh Airport (district aerodrome): treat surrounding airspace as strictly controlled — use the Digital Sky map; do not rely on visual distance guesses.',
    ],
  },
  localContextTitle: 'Ajmer-specific sensitivities',
  localContextParagraphs: [
    'Ajmer Sharif dargah, museum complexes, and lake promenades see huge crowds — flying over people is unsafe and likely to attract police attention even if airspace shows yellow.',
    'Pushkar (same district, common day-trip): temple ghats and fair grounds are extremely sensitive during Kartik and fairs — expect informal bans and heavy enforcement.',
    'ASI ticketed sites (e.g. Adhai Din ka Jhonpra, fort areas under ASI): assume flight is prohibited unless you hold a written approval that names the site and date.',
    'Wildlife / sanctuary buffers (e.g. if you travel toward Sariska side): additional forest department rules may apply — drones are often restricted.',
  ],
  zones: [
    {
      band: 'banned',
      title: 'Mostly banned — do not launch',
      subtitle: 'Unless you have explicit written permission naming the location',
      bullets: [
        'Within airport / aerodrome restriction zones (check Digital Sky for Kishangarh & other listed zones).',
        'ASI monuments, museum interiors’ airspace, military or police installations.',
        'Over Ajmer Sharif inner courts, dense mela crowds, or processions — safety + privacy.',
      ],
    },
    {
      band: 'caution',
      title: 'Sometimes possible — permission often required',
      subtitle: 'Police or administration may need to be informed',
      bullets: [
        'Wide lakeside areas with few people — still check red/yellow zones on Digital Sky.',
        'Private farm / desert edge outside town — landowner consent + zone check.',
        'Any commercial filming in city limits — expect police intimation and possibly district permissions.',
      ],
    },
    {
      band: 'ok',
      title: 'More realistic for compliant hobby flying',
      subtitle: 'Still: registered drone, day VLOS, height limits, no crowds',
      bullets: [
        'Remote rural strips where Digital Sky shows green, weather is calm, and you are not over villages without consent.',
        'Practice flights at dedicated drone training / club sites if available — not implied here; verify locally.',
      ],
    },
  ],
  indiaRulesTitle: 'India drone rules — quick mental map',
  indiaRulesIntro:
    'These mirror how Indian authorities usually classify risk. Your exact rights depend on drone weight class, registration, and the live Digital Sky map.',
  indiaRules: SHARED_INDIA_RULES,
  permissionTitle: 'When is permission / extra paperwork usually needed?',
  permissionIntro:
    'If any of these apply, stop and plan paperwork before you pack the drone — “I didn’t know” is not a defence at a checkpoint.',
  permissionTriggers: SHARED_PERMISSION_TRIGGERS,
  registrationBlock: SHARED_REGISTRATION,
  contacts: [
    ...sharedContactsRajasthan(),
    {
      id: 'ajmer-police',
      organization: 'Ajmer district police (control room)',
      role: 'Local law & order; ask about shoot / drone intimation',
      phoneDisplay: '0145-2420900',
      telDigits: '01452420900',
      note: 'For life-threatening emergencies prefer 112. Verify number on official Rajasthan Police directory if it changes.',
    },
    {
      id: 'ajmer-admin',
      organization: 'Ajmer district administration',
      role: 'General district helpline / coordination',
      phoneDisplay: '0145-2627427',
      telDigits: '01452627427',
      note: 'Large events or commercial shoots may need district-level clearance — ask your fixer / hotel to confirm current desk.',
    },
  ],
  disclaimer: SHARED_DISCLAIMER,
  officialLinks: [
    { label: 'Digital Sky (DGCA)', href: DGCA_DIGITAL_SKY },
    { label: 'DGCA — civil aviation', href: DGCA_HOME },
    { label: 'Rajasthan Tourism', href: 'https://tourism.rajasthan.gov.in/' },
  ],
}

function genericBundle(cityName: string, slug: string): CityDroneBundle {
  return {
    citySlug: slug,
    cityLabel: cityName,
    pageTitle: 'Drone rules & safe flying',
    leadParagraphs: [
      `${cityName} — like any Rajasthan city — has ASI sites, crowded markets, possible airport-related zones, and local sensitivities. Treat this page as a checklist, then confirm zones on Digital Sky for your exact coordinates.`,
      'We have not listed every monument in this district yet; until you verify, assume forts, palaces, and major temples behave like no-fly unless you have written approval.',
    ],
    canFlyAnswer: {
      heading: `Can you fly a drone in ${cityName}?`,
      paragraphs: [
        'There is no automatic “tourist OK” for urban cores. Most travellers who fly legally do so in open rural areas outside town, in green Digital Sky zones, with a registered drone and without flying over people.',
        'City centres, fairs, and heritage sites usually require explicit permissions — sometimes from police, district, ASI, or site management depending on the shoot.',
        'Always load the Digital Sky map at your exact take-off point before every flight.',
      ],
    },
    localContextTitle: `Local reminders for ${cityName}`,
    localContextParagraphs: [
      'Check for any airport or airstrip within the district on Digital Sky — distance rings apply.',
      'Religious processions, haats, and wildlife areas add extra restrictions even when the sky looks empty.',
      'Hospitality staff are not lawyers — get written clarity from authorities for commercial work.',
    ],
    zones: ajmerBundle.zones,
    indiaRulesTitle: ajmerBundle.indiaRulesTitle,
    indiaRulesIntro: ajmerBundle.indiaRulesIntro,
    indiaRules: SHARED_INDIA_RULES,
    permissionTitle: ajmerBundle.permissionTitle,
    permissionIntro: ajmerBundle.permissionIntro,
    permissionTriggers: SHARED_PERMISSION_TRIGGERS,
    registrationBlock: SHARED_REGISTRATION,
    contacts: sharedContactsRajasthan(),
    disclaimer: SHARED_DISCLAIMER,
    officialLinks: ajmerBundle.officialLinks,
  }
}

/** Same structure as Ajmer: India-wide rules + city-specific lead & local context. */
function districtDroneBundle(
  slug: string,
  cityName: string,
  leadParagraphs: [string, string],
  canFlyParagraphs: string[],
  localContextParagraphs: string[],
): CityDroneBundle {
  return {
    citySlug: slug,
    cityLabel: cityName,
    pageTitle: ajmerBundle.pageTitle,
    leadParagraphs,
    canFlyAnswer: {
      heading: `Can you fly a drone in ${cityName}?`,
      paragraphs: canFlyParagraphs,
    },
    localContextTitle: `${cityName}-specific sensitivities`,
    localContextParagraphs,
    zones: ajmerBundle.zones,
    indiaRulesTitle: ajmerBundle.indiaRulesTitle,
    indiaRulesIntro: ajmerBundle.indiaRulesIntro,
    indiaRules: SHARED_INDIA_RULES,
    permissionTitle: ajmerBundle.permissionTitle,
    permissionIntro: ajmerBundle.permissionIntro,
    permissionTriggers: SHARED_PERMISSION_TRIGGERS,
    registrationBlock: SHARED_REGISTRATION,
    contacts: [
      ...sharedContactsRajasthan(),
      {
        id: `${slug}-district-verify`,
        organization: `${cityName} district police / administration`,
        role: 'Shoot permissions, large gatherings, commercial drone queries — verify current desk numbers',
        website: 'https://www.rajasthanpolice.gov.in/',
        note: 'Official Rajasthan Police directory lists district SP / control rooms; numbers change. Life-threatening emergencies: 112.',
      },
    ],
    disclaimer: SHARED_DISCLAIMER,
    officialLinks: ajmerBundle.officialLinks,
  }
}

const REST_DRONE_BY_SLUG: Record<string, CityDroneBundle> = {
  alwar: districtDroneBundle(
    'alwar',
    'Alwar',
    [
      'Alwar straddles the eastern Aravallis: Bala Quila ridges, Sariska buffers, and highway corridors toward Delhi — airspace risk mixes heritage no-fly logic with occasional low-altitude traffic.',
      'Treat every fort, palace, and sanctuary boundary as permission-first; Digital Sky is mandatory before take-off.',
    ],
    [
      'Urban Alwar and the fort zone behave like dense heritage airspace — crowds, ASI rules, and ridge winds make casual flying unsafe and often illegal.',
      'Sariska Tiger Reserve and nearby forest buffers: assume wildlife department restrictions even when the map looks “open”.',
      'Always load Digital Sky at your GPS; Jaipur International’s larger airspace influence is north-east — do not guess distance rings.',
    ],
    [
      'Siliserh and company-bagh areas combine water bodies with public visitors — privacy and safety trump “scenic” flights.',
      'Winter fog and summer dust reduce VLOS — if you cannot see the drone, land immediately.',
      'Interstate highways carry fast traffic — do not launch from medians or distract drivers.',
    ],
  ),
  banswara: districtDroneBundle(
    'banswara',
    'Banswara',
    [
      'Southern tribal belts and dam catchments mix forest edges with steep ghats — GPS drift and birds are real risks.',
      'Monsoon landslips can close roads; emergency response is slower — plan flights conservatively.',
    ],
    [
      'Reservoirs and tribal fair grounds may look empty but are often community-sensitive — ask local administration before filming.',
      'Assume extra caution near Gujarat/MP approach roads — border-adjacent areas attract scrutiny.',
      'Digital Sky first; nano class is not a free pass over people or water rescue zones.',
    ],
    [
      'Weekly haats and festival nights add crowds and music stages — temporary no-fly realities even if maps look yellow.',
      'Forest department rules may apply near reserve edges — check current circulars.',
    ],
  ),
  baran: districtDroneBundle(
    'baran',
    'Baran',
    [
      'Hadoti’s eastern edge links toward Kota coaching traffic and Chambal ravines — mixed urban and riverine risk.',
      'Small-town melās and temple peaks can concentrate crowds unpredictably.',
    ],
    [
      'Fort ruins and river ghats are rarely “empty” legally — ASI and irrigation department interests overlap.',
      'Chambal wildlife ethics extend to airspace — do not harass gharials or nesting birds.',
      'Verify Digital Sky along NH corridors; electrical lines cross fields.',
    ],
    [
      'Summer heat reduces safe battery performance — land early.',
      'Monsoon water levels change landing options near banks.',
    ],
  ),
  barmer: districtDroneBundle(
    'barmer',
    'Barmer',
    [
      'Deep western Thar: border-adjacent grids, military routes, and sparse population — enforcement can be strict even in “empty” desert.',
      'Desert Festival and livestock fairs create temporary high-density zones.',
    ],
    [
      'Do not fly toward border fencing or security infrastructure — ever.',
      'Sandstorms reduce visibility below safe VLOS; landing on dunes can damage motors.',
      'Check Digital Sky for any tactical airspace notices; do not rely on visual emptiness.',
    ],
    [
      'Village privacy: herders and women at tanks may not want cameras overhead.',
      'Heat stress for pilots is real — hydrate; avoid midday launches.',
    ],
  ),
  bharatpur: districtDroneBundle(
    'bharatpur',
    'Bharatpur',
    [
      'Keoladeo Ghana is a protected wetland — assume strict wildlife drone bans without written forest permission.',
      'Lohagarh and Deeg palace zones follow ASI / state heritage norms.',
    ],
    [
      'Bird sanctuaries and breeding seasons: noise and rotor wash disturb wildlife — authorities enforce heavily.',
      'Golden triangle tourist volume means police are alert near monuments.',
      'Agra/Gwalior air corridors are not far — check map layers carefully.',
    ],
    [
      'Rickshaw birding paths are low — flying above them still risks people and birds.',
      'Fog in January affects VLOS on open fields.',
    ],
  ),
  bhilwara: districtDroneBundle(
    'bhilwara',
    'Bhilwara',
    [
      'Textile-industry skylines and temple clusters — fewer famous forts but real factory chimneys and power lines.',
      'Dust from grinding and transport affects visibility.',
    ],
    [
      'Industrial areas may have private no-fly policies — security guards are not airspace lawyers; get written clearance.',
      'Town markets get dense during shifts — avoid overflight.',
      'Digital Sky for any open rural strip; landowner consent on farms.',
    ],
    [
      'Monsoon lightning near Aravalli edges — land before storms.',
    ],
  ),
  bikaner: districtDroneBundle(
    'bikaner',
    'Bikaner',
    [
      'Junagarh, camel belts, and desert fair infrastructure — mixing ASI monuments with livestock events.',
      'Karni Mata (Deshnoke) and other shrines are devotion-first — expect moral bans on drones.',
    ],
    [
      'Airport / air force influence appears in north Rajasthan maps — verify rings, not road distance.',
      'Camel festival grounds: temporary crowd density — treat as no-fly unless officially cleared.',
      'Open desert still needs landowner consent and green zones.',
    ],
    [
      'Night cold batteries — pre-warm packs in winter.',
    ],
  ),
  bundi: districtDroneBundle(
    'bundi',
    'Bundi',
    [
      'Stepwells, Taragarh, and monsoon tanks — slippery stone, bats, and tight old-city wiring.',
      'Hadoti tourism spikes in winter; rooftops are not public flight decks.',
    ],
    [
      'Heritage interiors and baori depths: tripods often restricted; drones doubly so.',
      'Nawal Sagar ghats combine pilgrims and swimmers — no overflight.',
      'Check Digital Sky before ridge attempts near power lines.',
    ],
    [
      'Leopards occasionally near town edges — do not lure wildlife with drones.',
    ],
  ),
  chittorgarh: districtDroneBundle(
    'chittorgarh',
    'Chittorgarh',
    [
      'One of India’s largest fort circuits — ASI zones, long ridges, and lightning-prone monsoon walls.',
      'Tour buses and electric vehicles inside the complex — crowds move unpredictably.',
    ],
    [
      'Assume entire fort superstructure is sensitive — film permissions are rarely casual.',
      'Vijay Stambh and Padmini areas are iconic — enforcement mirrors other ASI no-fly norms.',
      'Nearby Menal and Bhainsrorgarh add cliff risk — wind gusts.',
    ],
    [
      'Heat on exposed walls exceeds city forecasts — shorter flights, more hydration.',
    ],
  ),
  churu: districtDroneBundle(
    'churu',
    'Churu',
    [
      'Shekhawati haveli towns: painted private homes — aerial views can violate privacy even from “public” roads.',
      'Dust storms in summer reduce VLOS dramatically.',
    ],
    [
      'Many havelis are family-owned — commercial shoots need owner consent, not just street access.',
      'Desert edge highways: high crosswinds for small drones.',
      'Tal Chhapar wildlife circle — separate sanctuary rules if you day-trip.',
    ],
    [
      'Kite festival weeks — manjha hazards for drones too.',
    ],
  ),
  dausa: districtDroneBundle(
    'dausa',
    'Dausa',
    [
      'Abhaneri stepwell tourism and village temples on NH corridors — police are used to sudden crowds.',
      'Meena hills add ghat fog and loose rocks.',
    ],
    [
      'Chand Baori and Harshat Mata are protected settings — assume aerial restrictions.',
      'Highway medians are not launchpads.',
      'Verify Digital Sky near Jaipur approach airspace to the north-west.',
    ],
    [
      'Respect village panchayat requests during melās.',
    ],
  ),
  dholpur: districtDroneBundle(
    'dholpur',
    'Dholpur',
    [
      'Chambal ravines, sandstone quarries, and interstate bridges — multi-agency sensitivity.',
      'Machkund and palace zones carry heritage and ritual traffic.',
    ],
    [
      'River wildlife safaris: follow operator rules; drones usually incompatible.',
      'Quarry faces collapse — do not hover above unstable cuts.',
      'MP/UP border traffic — document checks can extend to equipment bags.',
    ],
    [
      'Summer heat haze reduces contrast — VLOS harder than it looks.',
    ],
  ),
  dungarpur: districtDroneBundle(
    'dungarpur',
    'Dungarpur',
    [
      'Green marble palaces and tribal hamlets — wetter hills mean mist and slick roads.',
      'Forest department presence near reserve edges.',
    ],
    [
      'Palace hotels may control aerial marketing rights — ask management.',
      'Monsoon landslips on ghats — don’t chase clouds recklessly.',
      'Gujarat border routes: police curiosity about gear is normal — carry papers.',
    ],
    [
      'Adivasi photography ethics apply overhead too — consent matters.',
    ],
  ),
  hanumangarh: districtDroneBundle(
    'hanumangarh',
    'Hanumangarh',
    [
      'Canal grids, Ghaggar agriculture, and Punjab-border airspace awareness — fog and stubble smoke.',
      'Kalibangan archaeology: ASI oversight.',
    ],
    [
      'Winter fog can drop below safe VLOS within minutes.',
      'Border-adjacent grids: do not fly toward security infrastructure.',
      'Crop-fire smoke is unpredictable — land if visibility drops.',
    ],
    [
      'High-tension lines along canals — map before launch.',
    ],
  ),
  jaipur: districtDroneBundle(
    'jaipur',
    'Jaipur',
    [
      'Rajasthan’s capital: Amer, Nahargarh, busy old-city cores, and growing air traffic — “empty sky” is rare near monuments.',
      'Film shoots and weddings are common — police expect paperwork for commercial drones.',
    ],
    [
      'Jaipur International Airport rings dominate north/north-west approaches — Digital Sky is non-negotiable.',
      'City Palace, Hawa Mahal, Jantar Mantar: treat as no-fly without explicit approvals.',
      'Do not fly over Johari/Tripolia crowds — crush and wire risk.',
    ],
    [
      'Kite festivals and Diwali weeks add manjha and fireworks — extra hazards.',
      'Heritage walks often include police presence — ask before take-off near checkpoints.',
    ],
  ),
  jaisalmer: districtDroneBundle(
    'jaisalmer',
    'Jaisalmer',
    [
      'Living fort, dunes, and border tourism — military sensitivity plus sand hazards.',
      'Desert Festival and camp clusters create temporary dense sites.',
    ],
    [
      'Border roads and BSF areas: absolute no-fly.',
      'Sand ingestion kills motors — avoid low hover in storms.',
      'Village water points attract crowds — privacy matters.',
    ],
    [
      'Camel safari routes are workplaces — don’t buzz animals.',
    ],
  ),
  jalore: districtDroneBundle(
    'jalore',
    'Jalore',
    [
      'Granite fort climbs and Sundha Mata approaches — steep terrain and pilgrimage peaks.',
      'Spice markets and marble yards add dust.',
    ],
    [
      'Fort ramparts behave like ASI-risk zones — verify.',
      'Highway toward Gujarat: check Digital Sky layers near any listed airstrip.',
      'Heat limits safe battery performance on exposed rock.',
    ],
    [
      'Monsoon lightning on hills — retreat early.',
    ],
  ),
  jhalawar: districtDroneBundle(
    'jhalawar',
    'Jhalawar',
    [
      'River temples, Gagron UNESCO setting, and cave archaeology — water levels change risk profiles.',
      'Hadoti melās add seasonal crowds.',
    ],
    [
      'River ghats during Kartik snāna: assume public-safety priority — no overflight.',
      'Cave interiors forbid drones; exteriors still need heritage checks.',
      'Digital Sky before any rural strip flight.',
    ],
    [
      'Crocodile stretches on some rivers — wildlife harassment laws apply.',
    ],
  ),
  jhunjhunu: districtDroneBundle(
    'jhunjhunu',
    'Jhunjhunu',
    [
      'Shekhawati fresco towns — private haveli roofs dominate skylines; weekend Delhi traffic surges.',
      'Mining lorries raise dust on ring roads.',
    ],
    [
      'Rooftop terraces are often hotel-private — flight permission is not implied.',
      'Desert storms in summer — sudden VLOS loss.',
      'Kite festival periods — avoid shared air with manjha.',
    ],
    [
      'Heritage hotel weddings may rent air rights — don’t assume public sky.',
    ],
  ),
  jodhpur: districtDroneBundle(
    'jodhpur',
    'Jodhpur',
    [
      'Mehrangarh, blue-city density, and military airfields in the region — classic high-risk mix.',
      'Desert wind shear near ridges.',
    ],
    [
      'Assume fort and palace ASI / trust restrictions on aerial work.',
      'Old-city wires and narrow lanes — unsafe take-off zones.',
      'Check airport / defence circles on Digital Sky beyond visual distance cues.',
    ],
    [
      'Marwar festivals and processions — dynamic crowd lines.',
    ],
  ),
  karauli: districtDroneBundle(
    'karauli',
    'Karauli',
    [
      'Palace town plus Kaila Devi sanctuary approaches — faith traffic and forest edges.',
      'Chambal ravines nearby — wildlife and bandit-history sensitivities (modern policing still tight).',
    ],
    [
      'Sanctuary buffers: forest department drone norms apply.',
      'Palace hotels may control marketing rights to aerial imagery.',
      'Narrow ravine roads — don’t launch from unsafe shoulders.',
    ],
    [
      'Navratri peaks — massive footfall; airspace is emotionally charged.',
    ],
  ),
  kota: districtDroneBundle(
    'kota',
    'Kota',
    [
      'Chambal riverside, coaching-town rooftops, and bridge traffic — student crowds are dense and frequent.',
      'Seven Wonders Park and river gardens are municipal venues — permits may apply.',
    ],
    [
      'Bridges and ghats: never fly over moving traffic or swimmers.',
      'Exam-season police deployments — extra scrutiny on unusual equipment bags.',
      'Upstream dams and hydrology sites — utility sensitivity.',
    ],
    [
      'Summer heat and river humidity — battery derating.',
    ],
  ),
  nagaur: districtDroneBundle(
    'nagaur',
    'Nagaur',
    [
      'Ahichhatragarh fort, Sufi fair rhythms, and India-scale cattle fair density — dust, tents, and livestock.',
      'Jodhpur–Bikaner highway convergence.',
    ],
    [
      'Fair weeks behave like temporary cities — crowd safety bans override hobby flying.',
      'Fort interiors and ramparts: heritage permissions.',
      'Open desert outside town still needs Digital Sky green + landowner consent.',
    ],
    [
      'Camels and horses startle — rotor noise is a welfare issue.',
    ],
  ),
  pali: districtDroneBundle(
    'pali',
    'Pali',
    [
      'Ranakpur marble, Aravalli passes, and Jawai leopard belt — wildlife and temple ethics first.',
      'Marble yards are industrial-private.',
    ],
    [
      'Jawai leopard landscapes: treat as sensitive — forest department norms.',
      'Jain temples: strict non-violence culture includes noise stress — avoid buzzing wildlife.',
      'Nano drones near white marble can still distract pilgrims — ask management.',
    ],
    [
      'Leopard tourism has ethical guidelines — baiting is illegal; drones can disturb hunts.',
    ],
  ),
  pratapgarh: districtDroneBundle(
    'pratapgarh',
    'Pratapgarh',
    [
      'Young district with forested hills and tribal communities — slower emergency response.',
      'Monsoon landslips on interior roads.',
    ],
    [
      'Forest department rules may apply even on “open” looking ridges.',
      'Ask district administration before filming villages — consent and reputation risk.',
      'Dams and spillways: utility security awareness.',
    ],
    [
      'Interior mobile coverage can be weak — don’t fly BVLOS.',
    ],
  ),
  rajsamand: districtDroneBundle(
    'rajsamand',
    'Rajsamand',
    [
      'Rajsamand Lake, Kumbhalgarh wallscapes, and Nathdwara devotion — wedding traffic and tight temple rules.',
      'Marble industry dust.',
    ],
    [
      'Kumbhalgarh fort length means multiple ASI-sensitive segments — don’t hop along walls casually.',
      'Nathdwara: assume no aerial imaging near shrine precincts.',
      'Lake dams: irrigation / safety infrastructure — ask before flying.',
    ],
    [
      'Monsoon lightning on long wall walks — exposed risk.',
    ],
  ),
  'sawai-madhopur': districtDroneBundle(
    'sawai-madhopur',
    'Sawai Madhopur',
    [
      'Ranthambhore tiger reserve and UNESCO fort — absolute wildlife priority; drones and national parks rarely mix.',
      'Railway-town movement and safari jeep clusters.',
    ],
    [
      'Never launch toward park core / buffer rules — fines and seizure are real.',
      'Fort viewpoints still attract crowds — safety-first.',
      'Train stunts and crossings: never fly near tracks.',
    ],
    [
      'Tiger tourism ethics: silence and distance — drones violate both.',
    ],
  ),
  sikar: districtDroneBundle(
    'sikar',
    'Sikar',
    [
      'Laxmangarh fort skyline, Shekhawati havelis, and agrarian grids — weekend traffic from Jaipur.',
      'Fog and dust alternate by season.',
    ],
    [
      'Private haveli museums control commercial imagery — aerial counts.',
      'NH congestion — don’t launch from road shoulders.',
      'Digital Sky near Jaipur airspace influence.',
    ],
    [
      'Kite season — cord hazards.',
    ],
  ),
  sirohi: districtDroneBundle(
    'sirohi',
    'Sirohi',
    [
      'Mount Abu ghat roads, Dilwara marble, and Gujarat-border movement — mist, landslip risk, and temple strictness.',
      'Cooler climate doesn’t mean open airspace.',
    ],
    [
      'Hill station crowds and forest sanctuary buffers — check forest circulars.',
      'Dilwara: assume strict no-fly for sanctity and marble safety.',
      'Ghat roads: no launching from blind curves.',
    ],
    [
      'Monsoon: leeches and slick stone — secure footing before flying.',
    ],
  ),
  'sri-ganganagar': districtDroneBundle(
    'sri-ganganagar',
    'Sri Ganganagar',
    [
      'Canal grids, Punjab-border culture, and extreme winter fog — agricultural burning affects visibility.',
      'Large open fields tempt hobby pilots; land rights still matter.',
    ],
    [
      'Fog can drop below legal VLOS within minutes — abort if you lose sight.',
      'Border-adjacent grids: heightened security.',
      'High-tension lines along canals — map first.',
    ],
    [
      'Harvest season smoke — rotor wash visibility issues.',
    ],
  ),
  tonk: districtDroneBundle(
    'tonk',
    'Tonk',
    [
      'Nawabi lanes, mosques, and Sawai Madhopur road links — plural town with sensitive nights during Ramadan.',
      'Smaller administration desks; verify permissions in writing for commercial work.',
    ],
    [
      'Sunehri Kothi and heritage interiors: assume aerial restrictions near monuments.',
      'Old-city wiring — unsafe launches.',
      'Wildlife belt day-trips (Banas) carry separate forest norms.',
    ],
    [
      'Procession nights — dynamic crowds; don’t add rotor noise.',
    ],
  ),
  udaipur: districtDroneBundle(
    'udaipur',
    'Udaipur',
    [
      'Lake city: palaces, ghats, weddings, and boat traffic — reflections tempt pilots but crowds fill every shore.',
      'Monsoon hill roads to Monsoon Palace add weather risk.',
    ],
    [
      'City Palace and lake islands: assume no-fly without explicit approvals.',
      'Boats and swimmers — never overfly people on water.',
      'Dabok Airport (Udaipur) rings — Digital Sky mandatory.',
    ],
    [
      'Monsoon lightning over lakes — metal ghats are unsafe shelters during storms.',
      'Heritage hotels may claim marketing rights over lake-facing imagery — ask.',
    ],
  ),
}

const bySlug: Record<string, CityDroneBundle> = {
  ajmer: ajmerBundle,
  ...REST_DRONE_BY_SLUG,
}

export function getCityDroneInfoBySlug(slug: string, cityName: string): CityDroneBundle {
  return bySlug[slug] ?? genericBundle(cityName, slug)
}
