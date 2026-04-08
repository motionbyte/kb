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

const bySlug: Record<string, CityDroneBundle> = {
  ajmer: ajmerBundle,
}

export function getCityDroneInfoBySlug(slug: string, cityName: string): CityDroneBundle {
  return bySlug[slug] ?? genericBundle(cityName, slug)
}
