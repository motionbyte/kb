import type { PlannerPlace } from '@/data/itineraryPlannerCatalog'
import { makeCityPlaces } from '@/data/itineraryPlaces/helpers'

/**
 * Compact per-city hooks → full 48 sub-option pin lists (Ajmer-style labels).
 * Each entry in cityKeywordRegistry.ts is one dedicated city spec.
 */
export type CityKeywordPins = {
  slug: string
  name: string
  region: string
  /** Primary fort / palace / UNESCO / hill stronghold */
  fort?: string
  fort2?: string
  palace?: string
  /** Lakes / reservoirs / ghats */
  lake?: string
  lake2?: string
  /** Temples / Jain / stepwell heritage */
  temple?: string
  temple2?: string
  /** Sufi / dargah if relevant; else rural peer shrines */
  dargah?: string
  /** Main bazaar / market name */
  market?: string
  museum?: string
  stepwell?: string
  hill?: string
  desert?: string
  wildlife?: string
  bird?: string
  festival?: string
  food?: string
  sweet?: string
  craft?: string
  /** Day trips (first tab) */
  dayA?: string
  dayB?: string
  dayC?: string
  /** For daytrip-pushkar tab: nearest holy town / fair — not always Pushkar */
  holyTown?: string
  /** Railway / highway context */
  rail?: string
}

/** Build all 48 sub-option arrays for one city — Ajmer-style depth: semantic ids + planner note. */
export function placeMapFromKeywords(k: CityKeywordPins): Record<string, PlannerPlace[]> {
  const n = k.name
  const r = k.region
  const fort = k.fort ?? `${n} hill forts & walled pockets`
  const fort2 = k.fort2 ?? `Outlying garhs — ask locals for safe paths`
  const palace = k.palace ?? `${n} palace & haveli circuit`
  const lake = k.lake ?? `${n} tanks & stepwell-fed ponds (seasonal)`
  const lake2 = k.lake2 ?? `Monsoon reservoirs — picnic & birding`
  const temple = k.temple ?? `Old-town temples — aarti timings`
  const temple2 = k.temple2 ?? `Jain / folk shrines in bazaar lanes`
  const dargah = k.dargah ?? `Sufi shrines & urs calendars — dress modestly`
  const market = k.market ?? `${n} main bazaar — textiles & spices`
  const museum = k.museum ?? `${n} museum / gallery — check open days`
  const stepwell = k.stepwell ?? `Stepwells & baori frames — many locked; ask guides`
  const hill = k.hill ?? `Aravalli spurs near ${n} — short ridge walks`
  const desert = k.desert ?? `Thar edge / sand belts — day-trip from ${n}`
  const wildlife = k.wildlife ?? `Birding pockets & scrub — dawn outings`
  const bird = k.bird ?? `Winter migrants at local johads & wetlands`
  const festival = k.festival ?? `${n} fairgrounds — check district calendar`
  const food = k.food ?? `Dal–bati, kachori & local “hotel” counters`
  const sweet = k.sweet ?? `Mithai & festival sweets — morning halwai`
  const craft = k.craft ?? `Handloom & village crafts — ethical buying`
  const dayA = k.dayA ?? `Nearby district HQ towns — driver day`
  const dayB = k.dayB ?? `Heritage circuit on state highway — start early`
  const dayC = k.dayC ?? `Jaipur / Jodhpur — long day if on Golden Triangle`
  const holy = k.holyTown ?? `Regional pilgrimage pocket — modest dress`
  const rail = k.rail ?? `${n} junction — train-linked side trips`

  const placeKeys = ['main', 'second', 'third', 'fourth', 'fifth', 'planner-note'] as const
  const m = (sub: string, labels: string[]) =>
    makeCityPlaces(
      k.slug,
      sub,
      [
        ...labels,
        `Planner note — ${n} (${r}): confirm ASI / ticket hours, dress codes, cash for vendors, safe night lanes & festival crowds with your stay.`,
      ].map((label, i) => [placeKeys[i] ?? `extra-${i}`, label]),
    )

  return {
    'heritage-forts': m('heritage-forts', [
      `${fort} — ticketed zones & sunset slots`,
      `${fort2} — half-day pair with old city`,
      `${palace} — museum wings & audio guides`,
      `${n} ramparts & city gates — photo walk`,
      `ASI / state archaeology sites — ID discounts`,
    ]),
    'heritage-museums': m('heritage-museums', [
      `${museum} — sculpture & armour halls`,
      `District archives / gallery — photography rules`,
      `Coin & history boards — trade-route story of ${r}`,
      `Folk instruments & textiles — rotation exhibits`,
      `Temporary shows — festival weekends`,
    ]),
    'heritage-walks': m('heritage-walks', [
      `Old ${n} lanes — haveli doors & chowks`,
      `${market} — morning before heat`,
      `Railway quarter & clock towers — Raj-era grid`,
      `Temple-adjacent bazaar rhythm — shoe rules`,
      `Ridge or lake promenade — breeze walk`,
    ]),
    'heritage-audio': m('heritage-audio', [
      `ASI-approved guides at ticketed monuments`,
      `Hotel heritage storytellers — guest slots`,
      `Self-guided PDF / app walks — ${n} old city`,
      `College / museum docent tours — seasonal`,
      `Photography briefing — tripod & drone rules`,
    ]),
    'spiritual-temples': m('spiritual-temples', [
      `${temple} — morning aarti & bell rhythm`,
      `${temple2} — Jain / Shakti circuits`,
      `Village shrines on ${r} belt — drive & donate`,
      `Festival calendar — Kartik, Navratri peaks`,
      `River / tank ghats — snan etiquette`,
    ]),
    'spiritual-dargah': m('spiritual-dargah', [
      `${dargah}`,
      `Thursday / Jumuah rhythms — crowd planning`,
      `Langar & community kitchens — timing`,
      `Qawwali or sama evenings — check schedules`,
      `Rural peer shrines — ask locals for respect norms`,
    ]),
    'spiritual-festivals': m('spiritual-festivals', [
      `${festival}`,
      `Diwali / Holi street mood — safety & colour`,
      `Teej & Gangaur processions — if dates match`,
      `Kartik / Purnima melas — ghats busy`,
      `Eid & Milad — night bazaar hum`,
    ]),
    'spiritual-quiet': m('spiritual-quiet', [
      `Pre-dawn temple courtyards — before buses`,
      `Tank / johad benches — birdsong`,
      `Small neighbourhood mandirs — off-peak`,
      `Hotel prayer / meditation room`,
      `Jain upashray — silence days (ask first)`,
    ]),
    'food-thali': m('food-thali', [
      `${food}`,
      `Pure veg thali — ${n} old city`,
      `Heritage hotel buffets — reservations`,
      `Railway station “family” dining — quick turn`,
      `Jain / satvik counters — no onion garlic`,
    ]),
    'food-street': m('food-street', [
      `${market} — kachori, mirchi vada & chai`,
      `Evening chaat clusters — carry cash`,
      `Highway dhabas — tandoor & paratha`,
      `Sweet-savoury combos — festival weeks`,
      `Night-safe lit stalls only`,
    ]),
    'food-sweets': m('food-sweets', [
      `${sweet}`,
      `Rabri–jalebi winters — ghee-heavy`,
      `Festival mithai boxes — train gifts`,
      `Kulfi & falooda — summer evenings`,
      `Seasonal ghewar / pheni — check halwai`,
    ]),
    'food-cafe': m('food-cafe', [
      `Rooftop tea — old city skyline`,
      `New-town cafés — coffee & bakery`,
      `Lake / tank view ice cream — sunset`,
      `Hotel grills — pool deck nights`,
      `Co-working friendly cafés — laptop hours`,
    ]),
    'markets-textile': m('markets-textile', [
      `${market} — bandhani & saree counters`,
      `Khadi & handloom — yardage cuts`,
      `Wholesale cloth — morning mandi`,
      `Readymade ethnic — mojari pairing`,
      `Wool / blanket stalls — winter stock`,
    ]),
    'markets-crafts': m('markets-crafts', [
      `${craft}`,
      `Leather juttis & belts — bargain fair`,
      `Brass & koftgari — weight check`,
      `Souvenir ethics — avoid plastic junk`,
      `Book & stationery — local presses`,
      `Festival pop-ups — camel leather etc.`,
    ]),
    'markets-spices': m('markets-spices', [
      `Dry fruit & nut lanes — winter gifts`,
      `Masala grinders — chilli & coriander`,
      `Achar & papad — travel packs`,
      `Desi ghee counters — purity ask`,
      `Herb & unani — verify source`,
    ]),
    'markets-jewellery': m('markets-jewellery', [
      `Silver anklets & tribal motifs`,
      `Lac bangles — colour by season`,
      `Imitation temple sets — festive`,
      `Gold sarafa — making charges compare`,
      `Gem shops — insist certificates`,
    ]),
    'sunset-rooftop': m('sunset-rooftop', [
      `Old city rooftops — minaret / fort silhouette`,
      `Hotel pool decks — west horizon`,
      `Café terraces — chai golden hour`,
      `High-floor lounges — if open to public`,
      `Safe railings — wind on ridges`,
    ]),
    'sunset-lake': m('sunset-lake', [
      `${lake} — lamp reflections`,
      `${lake2} — monsoon wider mirror`,
      `Tank ghats — bird flocks`,
      `Irrigation canal bridges — long shadows`,
      `Pushkar-style holy water — if paired trip`,
    ]),
    'sunset-fort': m('sunset-fort', [
      `${fort} — bastion glow`,
      `Rampart walks — ticket close time`,
      `Magazine / watch towers — silhouette`,
      `Drone rules — check ASI`,
      `Telephoto from city chowks`,
    ]),
    'sunset-desert': m('sunset-desert', [
      `${desert}`,
      `Camel silhouette ridges — operator ethics`,
      `Jeep to open west — dust goggles`,
      `Salt-flat moods — winter haze`,
      `Village sundown — respectful distance`,
    ]),
    'nature-lakes': m('nature-lakes', [
      `${lake} — boating if open`,
      `${lake2} — picnic & kites`,
      `Irrigation tanks — birding`,
      `Monsoon waterfalls — slippery rocks`,
      `Village johads — morning walk`,
    ]),
    'nature-gardens': m('nature-gardens', [
      `Municipal parks — morning yoga`,
      `Palace lawns — exterior only`,
      `Botanical pockets — rare in ${r}`,
      `Hotel gardens — guest access`,
      `Monsoon green burst — terrace herbs`,
    ]),
    'nature-wildlife': m('nature-wildlife', [
      `${wildlife}`,
      `${bird}`,
      `Scrub harriers — winter fields`,
      `Blackbuck pockets — if notified areas`,
      `Avoid night scrub alone`,
    ]),
    'nature-hills': m('nature-hills', [
      `${hill}`,
      `Aravalli folds — loose stones`,
      `Sunrise ridge — carry torch`,
      `Village goat trails — guide useful`,
      `Monsoon leeches — socks & checks`,
    ]),
    'photo-icons': m('photo-icons', [
      `${fort} — postcard frame`,
      `${palace} — façade symmetry`,
      `${temple} — shikhara detail`,
      `${market} — chaos colour`,
      `${n} skyline — long lens`,
    ]),
    'photo-lanes': m('photo-lanes', [
      `Old city alleys — morning light`,
      `Spice sacks & scales — still life`,
      `Indigo / blue wash walls — if present`,
      `Monsoon reflections — puddle shots`,
      `Tongas & e-rickshaws — motion blur`,
    ]),
    'photo-stepwell': m('photo-stepwell', [
      `${stepwell}`,
      `Village stepwells — locked; ask`,
      `Tank ghats — leading lines`,
      `Shadow geometry — noon contrast`,
      `Chand Baori day — if long drive`,
    ]),
    'photo-portrait': m('photo-portrait', [
      `Vendors — ask consent`,
      `Craftspeople — workshop etiquette`,
      `Kids in gully — parents first`,
      `Women in crowd — telephoto & respect`,
      `Festival faces — colour consent`,
    ]),
    'culture-folk': m('culture-folk', [
      `Hotel Rajasthani nights — weekend`,
      `District mela stages — brass bands`,
      `Wedding halls — if invited`,
      `College fests — annual luck`,
      `YouTube archives — backup plan`,
    ]),
    'culture-puppet': m('culture-puppet', [
      `Hotel puppet shows — enquire`,
      `Jaipur museums — long day`,
      `School fairs — puppet clubs`,
      `Streaming puppet heritage — travel nights`,
      `Kathputli co-ops — rare in ${n}`,
    ]),
    'culture-craft': m('culture-craft', [
      `${craft}`,
      `Pottery & blue clay — if nearby`,
      `Textile block demos — workshop`,
      `Marble inlay — Pali / Jaipur tie`,
      `Silver soldering — safety goggles`,
    ]),
    'culture-festival': m('culture-festival', [
      `${festival}`,
      `Teej / Gangaur — women-led`,
      `Camel / cattle fair — if district hosts`,
      `Literature & theatre — town hall`,
      `National holidays — flag protocols`,
    ]),
    'adv-camel': m('adv-camel', [
      `${desert} — short rides`,
      `Camel carts — village loops`,
      `Fair season — heavy traffic`,
      `Animal welfare — choose licensed`,
      `Combine with sunset ridge`,
    ]),
    'adv-jeep': m('adv-jeep', [
      `Jeep safaris — scrub & dunes`,
      `Village circuits — hotel tie-up`,
      `Night drives — avoid solo`,
      `Wildlife zones — permits`,
      `Monsoon track caution`,
    ]),
    'adv-quad': m('adv-quad', [
      `ATV pop-ups — verify yearly`,
      `Resort buggies — guest-only`,
      `Helmet rule — non-negotiable`,
      `Jaipur parks — long day`,
      `Dust & heat — goggles`,
    ]),
    'adv-zipline': m('adv-zipline', [
      `Neemrana Flying Fox — if Delhi leg`,
      `Jaipur rope courses — day trip`,
      `${n} centre — rarely permanent`,
      `Water park zip — family option`,
      `Safety harness check — operator ID`,
    ]),
    'well-spa': m('well-spa', [
      `Hotel spas — Swedish & Ayurveda`,
      `Day packages — couples weekend`,
      `Kerala ayurveda — abhyanga`,
      `Hygiene — disposable liners`,
      `Book 48h ahead — peak`,
    ]),
    'well-pool': m('well-pool', [
      `Resort pools — day pass ask`,
      `Hotel guest pools — night stay`,
      `Kids’ depth rules — lifeguard`,
      `Monsoon cleaning — ask staff`,
      `Infinity mood — ridge views`,
    ]),
    'well-yoga': m('well-yoga', [
      `Hotel sunrise yoga — lawns`,
      `Studio drop-in — new town`,
      `Tank-side pranayama — quiet`,
      `Meditation apps — offline`,
      `Heat & hydration — summer`,
    ]),
    'well-unplanned': m('well-unplanned', [
      `No-plan morning — newspaper & chai`,
      `Spa-only day — massage + nap`,
      `Digital detox walk — old city`,
      `Sleep-in — night train recovery`,
      `Buffer before long drive`,
    ]),
    'daytrip-nearby': m('daytrip-nearby', [
      `${dayA}`,
      `${dayB}`,
      `${dayC}`,
      `${rail}`,
      `District wildlife / bird — if close`,
    ]),
    'daytrip-pushkar': m('daytrip-pushkar', [
      `${holy} — lake / temple etiquette`,
      `Fair season — camel & crowd`,
      `Ghats & aarti — shoes off`,
      `Rooftop lunch — view`,
      `Sadhu photos — permission`,
    ]),
    'daytrip-fort': m('daytrip-fort', [
      `${fort} deep dive — full morning`,
      `${fort2} — outlying circuit`,
      `Kumbhalgarh / Chittor — if south link`,
      `Jaisalmer / Jodhpur forts — if west link`,
      `Bhangarh — long spooky day (rules)`,
    ]),
    'daytrip-custom': m('daytrip-custom', [
      `Private Innova — 8h charter`,
      `Driver + guide — heritage combo`,
      `Jaipur same day — express highway`,
      `Jodhpur / Udaipur — overnight better`,
      `Airport transfer — shopping en route`,
    ]),
    'night-lit': m('night-lit', [
      `${fort} floodlight — if available`,
      `${market} — neon & bustle`,
      `Temple lamps — festival nights`,
      `Tank promenade — family crowds`,
      `Stick to lit lanes`,
    ]),
    'night-food': m('night-food', [
      `Late dhaba — tandoor`,
      `Station night counters — trains`,
      `Ice cream & kulfi — families`,
      `Highway NH dhabas — kulhad chai`,
      `Safety — avoid empty plots`,
    ]),
    'night-cultural': m('night-cultural', [
      `Hotel folk + thali — bundle`,
      `Cinema multiplex — new town`,
      `Qawwali / sama — if scheduled`,
      `College theatre — rare`,
      `Low-key terrace tea`,
    ]),
    'night-early': m('night-early', [
      `Resort early bed — spa morning`,
      `Family hotel quiet wing`,
      `Earplugs — dogs & muezzin`,
      `Read instead of late drive`,
      `Prep dawn trek — sleep by 10`,
    ]),
  }
}
