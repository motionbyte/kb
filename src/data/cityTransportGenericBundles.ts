import type { City } from '@/types'
import type { TransportGuideBundle, TransportKind, TransportOption } from './cityTransportGuide'

function mq(q: string): string {
  return `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(q)}`
}

type Ctx = Pick<City, 'name' | 'slug' | 'region'>

type FullTransport = Record<TransportKind, TransportGuideBundle>

const cache = new Map<string, FullTransport>()

function opt(
  slug: string,
  sid: string,
  name: string,
  area: string,
  typeTag: string,
  approxFare: string,
  timings: string,
  mapQuery: string,
  tips: string[],
  watchOut: string[],
  phone?: string,
  website?: string,
): TransportOption {
  return {
    id: `${slug}-tr-${sid}`,
    name,
    area,
    typeTag,
    approxFare,
    timings,
    phone,
    website,
    mapUrl: mq(mapQuery),
    tips,
    watchOut,
  }
}

/** Nearest major airport + typical road story for non-hub cities */
function gatewayForSlug(slug: string, cn: string): {
  primary: string
  mapQ: string
  driveBand: string
  note: string
} {
  const g: Record<string, { primary: string; mapQ: string; driveBand: string; note: string }> = {
    alwar: {
      primary: 'Delhi IGI (DEL) or Jaipur JAI',
      mapQ: 'Jaipur International Airport to Alwar taxi',
      driveBand: 'JAI → Alwar ~2–3.5 hr; DEL → Alwar ~3.5–5 hr',
      note: 'International flyers often land Delhi; domestic connects frequently via Jaipur.',
    },
    banswara: {
      primary: 'Udaipur Maharana Pratap (UDR)',
      mapQ: 'Udaipur airport to Banswara cab',
      driveBand: 'UDR → Banswara ~2–3.5 hr',
      note: 'Ahmedabad is an alternate hub for some airlines — compare total time.',
    },
    baran: {
      primary: 'Kota (KTU) or Jaipur JAI',
      mapQ: 'Kota airport to Baran taxi',
      driveBand: 'Kota → Baran ~1.5–2.5 hr; JAI longer',
      note: 'Kota rail hub often beats flying for last mile.',
    },
    barmer: {
      primary: 'Jodhpur (JDH) or Jaisalmer (JSA)',
      mapQ: 'Jodhpur airport to Barmer cab',
      driveBand: 'JDH → Barmer ~2.5–4 hr',
      note: 'Desert roads — avoid night driving if unfamiliar.',
    },
    bharatpur: {
      primary: 'Delhi IGI (DEL) or Jaipur JAI',
      mapQ: 'Jaipur airport to Bharatpur taxi',
      driveBand: 'JAI → Bharatpur ~3–4 hr; Agra Kheria also used by some',
      note: 'Keoladeo is a short hop from Agra/Mathura road network.',
    },
    bhilwara: {
      primary: 'Jaipur JAI or Udaipur UDR',
      mapQ: 'Jaipur airport to Bhilwara cab',
      driveBand: 'JAI ~2.5–4 hr; UDR ~3–4.5 hr — pick by flight price',
      note: 'Verify NH congestion during festival weeks.',
    },
    bundi: {
      primary: 'Kota (KTU) or Jaipur JAI',
      mapQ: 'Kota airport to Bundi taxi',
      driveBand: 'Kota → Bundi ~35–55 min',
      note: 'Trains Jaipur–Kota–Bundi are popular with backpackers.',
    },
    chittorgarh: {
      primary: 'Udaipur UDR or Jaipur JAI',
      mapQ: 'Udaipur airport to Chittorgarh cab',
      driveBand: 'UDR ~2–3 hr; JAI ~3–4.5 hr',
      note: 'Chittorgarh Junction is a strong rail alternative.',
    },
    churu: {
      primary: 'Jaipur JAI or Bikaner Nal (BKB)',
      mapQ: 'Jaipur airport to Churu taxi',
      driveBand: 'JAI ~3–4 hr; Bikaner ~2–3 hr',
      note: 'Winter fog can delay morning road legs.',
    },
    dausa: {
      primary: 'Jaipur JAI',
      mapQ: 'Jaipur airport to Dausa taxi',
      driveBand: 'JAI → Dausa ~1.5–2.5 hr',
      note: 'Often quicker on Jaipur–Agra NH if traffic cooperates.',
    },
    dholpur: {
      primary: 'Delhi IGI (DEL) or Gwalior (GWL)',
      mapQ: 'Gwalior airport to Dholpur cab',
      driveBand: 'GWL → Dholpur ~2–3 hr; DEL longer',
      note: 'Check Chambal bridge traffic during melas.',
    },
    dungarpur: {
      primary: 'Udaipur UDR or Ahmedabad AMD',
      mapQ: 'Udaipur airport to Dungarpur cab',
      driveBand: 'UDR ~2.5–3.5 hr',
      note: 'Hilly last miles — day arrival safer for first-timers.',
    },
    hanumangarh: {
      primary: 'Delhi IGI, Amritsar ATQ, or Jaipur JAI',
      mapQ: 'Delhi to Hanumangarh taxi',
      driveBand: 'Long road legs (5–8+ hr) — trains often win',
      note: 'Sri Ganganagar route shares same logic; buffer fog season.',
    },
    jalore: {
      primary: 'Jodhpur JDH',
      mapQ: 'Jodhpur airport to Jalore cab',
      driveBand: 'JDH ~2–3.5 hr',
      note: 'Marwar road quality varies — check monsoon cuts.',
    },
    jhalawar: {
      primary: 'Kota (KTU) or Indore/ Ujjain (multi-hop)',
      mapQ: 'Kota airport to Jhalawar taxi',
      driveBand: 'Kota → Jhalawar ~1.5–2.5 hr',
      note: 'MP border proximity — some itineraries fly Indore.',
    },
    jhunjhunu: {
      primary: 'Jaipur JAI or Delhi DEL',
      mapQ: 'Jaipur airport to Jhunjhunu cab',
      driveBand: 'JAI ~2.5–4 hr',
      note: 'Shekhawati belt — combine with road trip from Jaipur.',
    },
    karauli: {
      primary: 'Jaipur JAI or Agra / Gwalior',
      mapQ: 'Jaipur airport to Karauli taxi',
      driveBand: 'JAI ~3–4.5 hr',
      note: 'Chambal ravines — avoid night buses on unknown routes.',
    },
    nagaur: {
      primary: 'Jodhpur JDH or Bikaner BKB',
      mapQ: 'Jodhpur airport to Nagaur taxi',
      driveBand: 'JDH ~2–3.5 hr; Bikaner ~2–3 hr',
      note: 'Sit midway on desert triangle — pick hub by airline fare.',
    },
    pali: {
      primary: 'Jodhpur JDH',
      mapQ: 'Jodhpur airport to Pali taxi',
      driveBand: 'JDH → Pali ~1.5–2.5 hr',
      note: 'NH62 congestion during market days.',
    },
    pratapgarh: {
      primary: 'Udaipur UDR or Ahmedabad AMD',
      mapQ: 'Udaipur airport to Pratapgarh Rajasthan cab',
      driveBand: 'UDR ~2.5–4 hr',
      note: 'Tribal belt roads — daytime travel advised.',
    },
    rajsamand: {
      primary: 'Udaipur UDR',
      mapQ: 'Udaipur airport to Rajsamand taxi',
      driveBand: 'UDR → Rajsamand ~1–1.5 hr',
      note: 'Kumbhalgarh is often bundled from Udaipur.',
    },
    'sawai-madhopur': {
      primary: 'Jaipur JAI or Kota KTU',
      mapQ: 'Jaipur airport to Sawai Madhopur taxi',
      driveBand: 'JAI ~3–4 hr; Kota rail link popular',
      note: 'Ranthambore safari guests often train from Jaipur/Delhi.',
    },
    sikar: {
      primary: 'Jaipur JAI',
      mapQ: 'Jaipur airport to Sikar taxi',
      driveBand: 'JAI → Sikar ~2–3.5 hr',
      note: 'Shekhawati winter fog — morning flights need buffer.',
    },
    sirohi: {
      primary: 'Udaipur UDR or Jodhpur JDH',
      mapQ: 'Udaipur airport to Sirohi cab',
      driveBand: 'UDR ~2–3 hr; JDH ~2.5–4 hr — Abu Road rail is common',
      note: 'Mount Abu hill roads — separate timing from plain sector.',
    },
    'sri-ganganagar': {
      primary: 'Amritsar ATQ or Delhi DEL',
      mapQ: 'Amritsar airport to Sri Ganganagar taxi',
      driveBand: 'ATQ ~3.5–5 hr; DEL much longer',
      note: 'Canal-belt fog Dec–Jan — train sometimes more reliable.',
    },
    tonk: {
      primary: 'Jaipur JAI or Kota KTU',
      mapQ: 'Jaipur airport to Tonk taxi',
      driveBand: 'JAI ~1.5–2.5 hr',
      note: 'Sits between Jaipur–Kota highway — flexible routing.',
    },
  }
  return (
    g[slug] ?? {
      primary: 'Jaipur JAI (most domestic networks)',
      mapQ: `Jaipur airport to ${cn} taxi`,
      driveBand: 'Typically 2.5–6 hr by road depending on exact district — always verify live Maps',
      note: 'Compare Udaipur/Jodhpur fares if your airline ticket is cheaper to those hubs.',
    }
  )
}

function safariForSlug(slug: string, cn: string, rg: string): TransportGuideBundle {
  const baseProblem = [
    'Package inclusions (pickup, duration, meals) stay vague on brochures.',
    'Peak sunset slots sell out — ad-hoc rates spike.',
    'Animal welfare and route ethics vary by operator.',
  ]
  const baseSolution = [
    'Demand written itinerary: hours in saddle/seat, km loop, meals, taxes.',
    'Prefer operators with recent Google reviews and GST billing.',
    'Carry sun cover, water, and confirm child pricing before paying.',
  ]
  const baseWhy = [
    'Safari is the emotional peak of many Rajasthan trips.',
    'Transparent booking protects both travellers and local hosts.',
  ]

  const shell = (partial: Omit<TransportGuideBundle, 'title' | 'eyebrow' | 'problem' | 'solution' | 'why'>): TransportGuideBundle => ({
    title: 'Safari (Camel/Jeep)',
    eyebrow: 'Transport & Mobility',
    problem: baseProblem,
    solution: baseSolution,
    why: baseWhy,
    ...partial,
  })

  if (slug === 'sawai-madhopur') {
    return shell({
      lead: `Sawai Madhopur is synonymous with **Ranthambore National Park** jeep safaris — book core/buffer zones through **official forest portals** or registered lodges; avoid “guaranteed tiger” scams.`,
      quickTiles: [
        { label: 'Icon', value: 'Ranthambore jeep' },
        { label: 'Book', value: '90 days peak' },
        { label: 'Slots', value: 'Dawn & dusk' },
        { label: 'Rule', value: 'ID + permit' },
      ],
      optionsTitle: 'Jeep safari channels (Sawai Madhopur)',
      optionsLead: 'Verify zone allocation and guide credentials before paying.',
      options: [
        opt(slug, 'sf-rtr-official', 'Forest department safari booking (online)', 'Ranthambore', 'Official permit', 'INR 1.8k–4k+ per seat (season/zone)', 'Slots per forest calendar', 'Ranthambore safari booking online', ['Carry same ID as booking', 'Reach gate 20 min early'], ['No off-road “extra” drives']),
        opt(slug, 'sf-lodge', 'Lodge-resident safari desks', 'Ranthambore belt', 'Package add-on', 'Bundled with stay', 'As per lodge', 'Ranthambore resort safari booking', ['Helpful for first-timers', 'Ask pick-up time'], ['Mark-ups possible — compare with direct booking']),
        opt(slug, 'sf-buffer', 'Buffer zone / canter options', 'Periphery routes', 'Canter / shared', 'Lower to mid range', 'Seasonal', 'Ranthambore canter safari', ['Budget option', 'Less flexible timing'], ['Sightings statistically lower than core — set expectations']),
        opt(slug, 'sf-train', 'Same-day rail from Jaipur + safari', 'Logistics combo', 'Travel stack', 'Train + jeep separate', 'Plan full day', 'Jaipur to Sawai Madhopur train', ['Popular backpacker pattern', 'Book train + safari on different sites'], ['Tight connections fail if safari delayed']),
      ],
    })
  }

  if (slug === 'alwar') {
    return shell({
      lead: `Alwar is the gateway to **Sariska Tiger Reserve** — jeep safaris use official booking; combine with heritage city days.`,
      quickTiles: [
        { label: 'Park', value: 'Sariska jeep' },
        { label: 'Book', value: 'Online / lodge' },
        { label: 'Best', value: 'Winter mornings' },
        { label: 'Caution', value: 'Zone closures' },
      ],
      optionsTitle: 'Sariska & safari-style drives (Alwar region)',
      optionsLead: 'Use forest-approved vehicles only.',
      options: [
        opt(slug, 'sf-sariska', 'Sariska jeep safari operators', 'Tehla gate belt', 'Forest jeep', 'Mid range per seat', 'Dawn/dusk', 'Sariska safari booking', ['Book ahead weekends', 'Carry warm layer winter'], ['Monsoon schedules change']),
        opt(slug, 'sf-alwar-drive', 'Scenic drives Siliserh / Jaisamand lake', 'Alwar district', 'Day trip', 'Fuel + entry', 'Daytime', 'Siliserh Lake Alwar', ['Good without park permit', 'Picnic timing'], ['Water level seasonal']),
        opt(slug, 'sf-vintage', 'Vintage city + night drive prudence', 'Alwar old city', 'Heritage loop', 'Cab hire', 'Evening', 'Alwar city palace road', ['Combine with palace ticket', 'Use app cab for safety'], ['Cattle on roads — slow driving']),
        opt(slug, 'sf-combo', 'Jaipur–Alwar–Sariska combo cabs', 'Intercity', 'Private cab', 'INR 3k–8k day', 'Full day', 'Alwar Sariska day trip cab', ['Fixed itinerary helps', 'Driver meals clarify'], ['Highway tolls extra — confirm']),
      ],
    })
  }

  if (slug === 'jaisalmer' || slug === 'bikaner' || slug === 'barmer') {
    const desertLabel = slug === 'jaisalmer' ? 'Thar dunes' : slug === 'bikaner' ? 'Bikaner sand belts' : 'Barmer desert edges'
    return shell({
      lead: `${cn} sits deep in desert circuits — **camel rides**, **jeep dune bashing**, and **camp dinners** bundle easily; verify camel hours and dune conservation norms.`,
      quickTiles: [
        { label: 'Modes', value: 'Camel + jeep' },
        { label: 'Best', value: 'Sunset / dawn' },
        { label: 'Spend', value: 'Wide range' },
        { label: 'Care', value: 'Hydration' },
      ],
      optionsTitle: `Desert safari clusters (${cn})`,
      optionsLead: 'Compare inclusions: pickup km, camel time, music dinner, taxes.',
      options: [
        opt(slug, 'sf-camel', 'Camel safari operators', desertLabel, 'Camel circuit', 'INR 800–3k+', 'Sunrise/sunset', `${cn} camel safari desert`, ['Ask saddle padding', 'Confirm return time'], ['Animal condition — walk away if overload']),
        opt(slug, 'sf-jeep', 'Jeep dune safaris', 'Outskirts', '4x4', 'INR 1.5k–5k+', 'Morning/evening', `${cn} jeep desert safari`, ['Seat belts', 'Driver ID'], ['Dune damage — stay on trails']),
        opt(slug, 'sf-camp', 'Camp + dinner combos', 'Desert camps', 'Package', 'INR 2k–7k+', 'Evening-first', `${cn} desert camp safari`, ['Transfers included?', 'Veg/Jain meal flag'], ['Late-night road safety to hotel']),
        opt(slug, 'sf-day', 'Half-day city + short camel', `${cn} town`, 'Stacked plan', 'Custom', 'Daytime', `${cn} camel ride short`, ['Good for heat-sensitive travellers', 'Shorter camel ethical load'], ['Still negotiate clearly']),
      ],
    })
  }

  if (slug === 'jaipur') {
    return shell({
      lead: `Jaipur adds **Jhalana leopard safari**, **elephant village ethics** debates, and **Amber–Nahargarh** scenic drives — distinct from Thar dunes.`,
      quickTiles: [
        { label: 'Leopard', value: 'Jhalana' },
        { label: 'Classic', value: 'Amber hills' },
        { label: 'Night', value: 'Nahargarh road' },
        { label: 'Book', value: 'Online slots' },
      ],
      optionsTitle: 'Safari-style experiences (Jaipur)',
      optionsLead: 'Forest/leopard bookings are regulated — use official channels.',
      options: [
        opt(slug, 'sf-jhalana', 'Jhalana Leopard Safari booking', 'Jhalana reserve', 'Leopard jeep', 'Govt tariff + vehicle', 'Slot-based', 'Jhalana leopard safari booking Jaipur', ['Book online', 'Silence phones'], ['No guaranteed leopard']),
        opt(slug, 'sf-amber', 'Amber–Nahargarh scenic drives', 'Eastern ridges', 'Heritage road', 'Cab day hire', 'Day/evening', 'Nahargarh Fort road Jaipur', ['Sunset crowds', 'Parking early'], ['Self-drive: tight hairpins']),
        opt(slug, 'sf-balloon', 'Hot-air balloon (seasonal operators)', 'Jamnalal strip', 'Balloon', 'Premium', 'Dawn', 'Jaipur hot air balloon', ['Weather cancellations', 'Insurance read'], ['Not wheelchair default']),
        opt(slug, 'sf-osian', 'Osian day-trip desert (via Jodhpur leg)', 'Multi-day tourists', 'Optional', 'If routing west', 'Full long day', 'Osian desert safari from Jaipur', ['Only if itinerary already westbound', 'Very long day'], ['Driver fatigue — split stays']),
      ],
    })
  }

  if (slug === 'bharatpur') {
    return shell({
      lead: `Bharatpur’s “safari” is **Keoladeo Ghana** — cycle-rickshaw and walking trails with world-class birding rather than jeep dunes.`,
      quickTiles: [
        { label: 'Park', value: 'Keoladeo' },
        { label: 'Mode', value: 'Cycle / walk' },
        { label: 'Best', value: 'Winter migrants' },
        { label: 'Quiet', value: 'Dawn' },
      ],
      optionsTitle: 'Wildlife & nature drives (Bharatpur)',
      optionsLead: 'Hire guides inside gate for species ID.',
      options: [
        opt(slug, 'sf-keoladeo', 'Keoladeo National Park entry + rickshaw', 'Bharatpur', 'Birding trail', 'Entry + guide fees', 'Dawn to dusk', 'Keoladeo Ghana National Park safari', ['Winter binoculars', 'Silence'], ['No plastic — strict']),
        opt(slug, 'sf-cycle', 'Bicycle rental inside park', 'Main trail', 'Self-paced', 'Low cost', 'Daytime', 'Keoladeo bicycle hire', ['Hydrate', 'Map nodes'], ['Heat midday — exit early']),
        opt(slug, 'sf-chambal', 'Chambal boat safari (day trip)', 'Dholpur/Pali side', 'River safari', 'Mid range', 'Morning', 'Chambal river safari near Bharatpur', ['Gharial viewing', 'Life jackets'], ['Separate district — long drive']),
        opt(slug, 'sf-jeep', 'Jeep safaris (other districts)', 'If combining', 'Intercity', 'Varies', 'Multi-day tour', 'Rajasthan jeep safari tour', ['Tour operators only', 'Read reviews'], ['Not inside Keoladeo core']),
      ],
    })
  }

  return shell({
    lead: `Around ${cn} (${rg}), safari usually means **nearest desert belt**, **district wildlife sanctuary**, or **day-trip to a national park** — nothing may be inside city limits; treat Maps pins as shortlist, then verify licences.`,
    quickTiles: [
      { label: 'Types', value: 'Jeep / camel / bird' },
      { label: 'Book', value: 'Reviews + GST' },
      { label: 'Safety', value: 'Daylight ops' },
      { label: 'Ethics', value: 'No overload' },
    ],
    optionsTitle: `Safari & outdoor drives (${cn} region)`,
    optionsLead: 'Use official park booking where a reserve exists; else vet desert operators carefully.',
    options: [
      opt(slug, 'sf-search-jeep', 'Jeep safari operators (district search)', `${cn} outskirts`, 'Day trip', 'INR 1.5k–6k+', 'Seasonal', `${cn} jeep safari Rajasthan`, ['WhatsApp itinerary in writing', 'Driver name + vehicle no.'], ['Fake “government” badges']),
      opt(slug, 'sf-camel-gen', 'Camel ride / short desert loops', 'Nearest Thar edge', 'Camel', 'INR 600–2.5k', 'Sunrise/set', `${cn} camel safari`, ['Limit ride time ethically', 'Water bottle'], ['Pushy touts at highways']),
      opt(slug, 'sf-sanctuary', 'District wildlife sanctuary day-trip', 'Peri-urban belt', 'Forest jeep if available', 'Varies', 'Check sanctuary site', `${cn} wildlife sanctuary safari`, ['Permits online if listed', 'Binoculars'], ['Many sanctuaries closed monsoon']),
      opt(slug, 'sf-combo-tour', 'Multi-day Rajasthan circuit operators', 'Package', 'Mixed', 'Premium', 'Custom', `${cn} Rajasthan desert tour package`, ['Good if hopping cities', 'Single invoice'], ['Read cancellation terms']),
    ],
  })
}

function buildAirportBundle(slug: string, cn: string, rg: string): TransportGuideBundle {
  const localAirports: Record<string, { label: string; mapQ: string; blurb: string }> = {
    jaipur: {
      label: 'Jaipur International (JAI) — Sanganer',
      mapQ: 'Jaipur International Airport arrivals',
      blurb: 'Metro corridor expanding — check last-mile options; prepaid taxis and app zones well marked.',
    },
    udaipur: {
      label: 'Maharana Pratap Airport (UDR)',
      mapQ: 'Udaipur airport terminal',
      blurb: 'Hilly approach — monsoon clouds can disrupt; hotel pickups common.',
    },
    jodhpur: {
      label: 'Jodhpur Airport (JDH)',
      mapQ: 'Jodhpur airport',
      blurb: 'Compact terminal — peak season congestion at exit; pre-book winter arrivals.',
    },
    jaisalmer: {
      label: 'Jaisalmer Airport (JSA)',
      mapQ: 'Jaisalmer airport',
      blurb: 'Limited airline mix — many still route via Jodhpur/Jaipur; confirm baggage on small aircraft.',
    },
    kota: {
      label: 'Kota Airport (KTU)',
      mapQ: 'Kota airport Rajasthan',
      blurb: 'Fewer flights than mega hubs — travellers often combine with Jaipur/Delhi rail-fly split.',
    },
    bikaner: {
      label: 'Nal Airport Bikaner (BKB) + Jodhpur/Jaipur fallback',
      mapQ: 'Bikaner Nal airport',
      blurb: 'Service frequency varies — compare Jodhpur road time vs connection fare.',
    },
  }

  const gw = gatewayForSlug(slug, cn)
  const loc = localAirports[slug]

  if (loc) {
    return {
      title: 'Airport transfers',
      eyebrow: 'Transport & Mobility',
      lead: `${cn} connects by air primarily through **${loc.label}**. ${loc.blurb} Plan hotel transfers with pin accuracy — desert-city exits get crowded in season.`,
      problem: [
        'Late-night arrivals face driver no-shows or surge spikes.',
        'Luggage + family groups struggle with tiny airport exits.',
        'Touts mimic “prepaid” counters outside glass doors.',
      ],
      solution: [
        'Book hotel/airport desk pickup once; keep app backup.',
        'Screenshot fare in writing for private operators.',
        'Move to official pickup lane before engaging drivers.',
      ],
      why: ['Airport legs set trip tone.', 'Fixed pricing reduces family stress.'],
      quickTiles: [
        { label: 'Primary airport', value: loc.label.split('—')[0]!.trim() },
        { label: 'City transfer', value: slug === 'jaipur' ? '35–80 min' : '20–90 min' },
        { label: 'Mode', value: 'Cab / hotel / app' },
        { label: 'Rule', value: 'Confirm tolls' },
      ],
      optionsTitle: `Airport ↔ ${cn} options`,
      optionsLead: 'Pick by arrival hour, luggage, and comfort.',
      options: [
        opt(slug, 'ap-prepaid', 'Prepaid taxi / airport booth', 'Arrivals curb', 'Fixed fare desk', 'INR 400–1.2k+ (city zone)', '24x7 desk cycles', `${loc.mapQ} prepaid taxi`, ['Receipt mandatory', 'Ask AC/non-AC'], ['Extra stop charges']),
        opt(slug, 'ap-app', 'Uber / Ola / InDrive pickup', 'Designated zone', 'App', 'Dynamic', '24x7 subject drivers', `${loc.mapQ} uber pickup`, ['Pin exact pillar', 'Verify plate'], ['Cancellation waves']),
        opt(slug, 'ap-hotel', 'Hotel airport transfer', 'Private', 'Hotel car', 'INR 800–3k+', 'Pre-book', `${cn} hotel airport pickup`, ['Flight tracking', 'Meet-greet'], ['Hotel premium pricing']),
        opt(slug, 'ap-rail', 'Airport to station + train (multi-hop)', 'Budget stack', 'Hybrid', 'Split fares', 'Daytime easier', `${loc.mapQ} to railway station`, ['Saves if flight lands morning', 'Heavy luggage tough'], ['Missed connection risk']),
      ],
    }
  }

  return {
    title: 'Airport transfers',
    eyebrow: 'Transport & Mobility',
    lead: `Most flyers reach ${cn} via **${gw.primary}**, then road or rail. ${gw.note} Typical drive bands: **${gw.driveBand}**. Always re-check live traffic, especially festival weeks in ${rg}.`,
    problem: [
      'Multi-hop fatigue after long flights — travellers underestimate road time.',
      'Inter-city cab quotes vary 2× without benchmarks.',
      'Night highway driving in fog season is riskier for first-timers.',
    ],
    solution: [
      'Compare **direct cab** vs **fly to closer hub + short road** total cost.',
      'Book trains from hub city when luggage is light.',
      'Prefer daytime arrival into Rajasthan highways if self-driving.',
    ],
    why: ['Airport choice changes total holiday price.', 'Smooth transfer builds safety confidence.'],
    quickTiles: [
      { label: 'Gateway hub(s)', value: gw.primary },
      { label: 'Road band', value: gw.driveBand },
      { label: 'Verify', value: 'Maps live ETA' },
      { label: 'Night', value: 'Prepaid > random' },
    ],
    optionsTitle: `Hub-to-${cn} transfer patterns`,
    optionsLead: 'Use these patterns before you pay opaque “package” rates.',
    options: [
      opt(slug, 'ap-direct', 'Private cab hub airport → hotel', 'Door-to-door', 'SUV/sedan', 'INR 2.5k–9k+', 'Book ahead', gw.mapQ, ['Share flight number', 'Toll inclusion'], ['Driver swap scams']),
        opt(slug, 'ap-app-hub', 'App cab from hub airport to city centre', 'Gateway city', 'Uber/Ola', 'Dynamic', 'Varies', `Rajasthan airport uber ola pickup zone`, ['Install app before flight', 'Use airport Wi‑Fi for OTP'], ['Surge at holidays']),
      opt(slug, 'ap-train', 'Hub airport → rail station → train', 'Budget stack', 'Train last mile', 'Split', 'Schedule-linked', `${cn} nearest railway station train from Jaipur`, ['Comfortable sleepers exist', 'UPI tickets'], ['Unreserved rush']),
      opt(slug, 'ap-sleeper', 'Overnight Volvo from hub bus stand', 'SRTC/private', 'Sleeper bus', 'INR 600–2k+', 'Night departures', `${cn} RSRTC bus from Jaipur`, ['Cheap backbone', 'Wi-Fi rare'], ['Bag theft — cable lock']),
    ],
  }
}

export function buildGenericCityTransportGuide(ctx: Ctx): FullTransport {
  const hit = cache.get(ctx.slug)
  if (hit) return hit

  const cn = ctx.name
  const slug = ctx.slug
  const rg = ctx.region

  const out: FullTransport = {
    'local-transport': {
      title: 'Local transport (Auto/Taxi)',
      eyebrow: 'Transport & Mobility',
      lead: `Short hops in ${cn} still run on **autos**, **e-rickshaws**, and **city taxis** — meters are rare; negotiated fares and app alternatives overlap. Old-city lanes and mandi traffic need patience.`,
      problem: [
        'Fare confusion between locals’ rates and tourist quotes.',
        'Pilgrimage or market peaks create surge behaviour at stands.',
        'Language gaps on turn-by-turn directions.',
      ],
      solution: [
        'Confirm **full fare + luggage charge** before the ride starts.',
        'Use Maps pins; share live location with family on night rides.',
        'Prefer stands near police booths or prepaid kiosks when available.',
      ],
      why: ['Autos are the real daily backbone.', 'Fair behaviour here sets safety tone.'],
      quickTiles: [
        { label: 'Best use', value: '2–12 km hops' },
        { label: 'Cash', value: 'Small notes' },
        { label: 'Peak', value: 'Mornings / fairs' },
        { label: 'Safety', value: 'Share ride' },
      ],
      optionsTitle: `Pickup zones & stands (${cn})`,
      optionsLead: 'High-footfall points usually have regulated queues — still verify fare.',
      options: [
        opt(slug, 'lt-rail', 'Railway junction auto/taxi stand', 'Station approach', 'Prepaid + loose autos', 'INR 60–350+', '5 AM–11 PM heavy', `${cn} railway station auto stand`, ['Prepaid counter first', 'Photo of rate card'], ['Touts inside station']),
        opt(slug, 'lt-bus', 'RSRTC / private bus stand autos', 'Intercity terminal', 'Stand autos', 'INR 50–280', 'Daytime peak', `${cn} bus stand auto`, ['Good for hostel districts', 'Fixed lane exits'], ['Bag snatching — lap bags']),
        opt(slug, 'lt-old', 'Old city / main bazaar mobility', 'Core bazaar', 'E-rick + auto', 'INR 40–200', '10 AM–9 PM', `${cn} old city auto rickshaw`, ['E-rick short hops', 'Walk final 200m if jammed'], ['One-ways — wrong side driving']),
        opt(slug, 'lt-hotel', 'Hotel & hospital corridor taxis', 'Civil Lines / MG Road', 'Taxi', 'INR 120–450', 'Most day', `${cn} taxi stand Civil Lines`, ['Better for families', 'AC clarify'], ['Hotel guards may overquote']),
      ],
    },
    'cab-apps': {
      title: 'Cab apps (Uber/Ola)',
      eyebrow: 'Transport & Mobility',
      lead: `Uber, Ola, Rapido (bike), and **InDrive** overlap in ${cn} — coverage is **patchy** in old cores but decent on highways and mall belts. Compare app vs auto before every mid trip.`,
      problem: [
        'Pickup cancellations in narrow lanes.',
        'OTP scams and fake driver names.',
        'Surge during weddings, cricket, or fair days.',
      ],
      solution: [
        'Set pin on **wider crossroads** 80–120 m from deep lanes.',
        'Verify **number plate + driver photo** every time.',
        'Keep offline map of backup auto stand.',
      ],
      why: ['Apps add traceability.', 'Helpful for non-Hindi speakers.'],
      quickTiles: [
        { label: 'Works best', value: 'NH + malls' },
        { label: 'Weak', value: 'Inner gullies' },
        { label: 'Alt', value: 'InDrive bid' },
        { label: 'Tip', value: 'Avoid cash touts' },
      ],
      optionsTitle: `App-friendly pickup pockets (${cn})`,
      optionsLead: 'Choose pins where drivers can stop without blocking temples.',
      options: [
        opt(slug, 'ca-mall', 'Mall / highway commercial pockets', 'Ring road sectors', 'Uber/Ola', 'INR 120–520', '9 AM–11 PM', `${cn} mall uber pickup`, ['Wide shoulders', 'CCTV zones'], ['Weekend surge']),
        opt(slug, 'ca-station', 'Station approach main roads', 'Transit', 'App + prepaid mix', 'INR 100–400', 'All day', `${cn} railway station uber pickup point`, ['Walk 50m from gate crowd', 'Less cancellation'], ['RPF zones — no honk']),
        opt(slug, 'ca-hotel', 'Business hotel & hospital axes', 'Civil belt', 'Sedan priority', 'INR 150–600', 'Most hours', `${cn} hotel zone ola`, ['Doorman help pins', 'AC default'], ['Hospital surcharges myth — refuse']),
        opt(slug, 'ca-inter', 'Inter-city app rides (long)', 'Outstation', 'Uber Intercity / Ola', 'Dynamic', 'Book 1 hr+ ahead', `${cn} to Jaipur uber intercity`, ['Good for luggage families', 'Tolls extra'], ['Driver may ask cash toll — get receipt']),
      ],
    },
    rental: {
      title: 'Car/Bike rental',
      eyebrow: 'Transport & Mobility',
      lead: `Self-drive and bike rentals help explore ${cn} and ${rg} hinterland — paperwork, helmet quality, and **fuel return policy** separate honest vendors from traps.`,
      problem: [
        'Deposit disputes on minor scratches.',
        'International licence translation gaps.',
        'Third-party insurance confusion.',
      ],
      solution: [
        '360° **video + photos** with timestamp at pickup.',
        'Written tariff: km cap, late fee, fuel baseline.',
        'Helmet ISI mark + two helmets for pillion.',
      ],
      why: ['Freedom beats fixed tours when roads are familiar.', 'Bike works for old-city parking pain.'],
      quickTiles: [
        { label: 'Docs', value: 'DL + ID' },
        { label: 'Photo', value: 'Full walkaround' },
        { label: 'Fuel', value: 'Same-to-same' },
        { label: 'Risk', value: 'Deposit' },
      ],
      optionsTitle: `Rental shortlist (${cn})`,
      optionsLead: 'Map search first — then call for stock.',
      options: [
        opt(slug, 'rn-bike', 'Bike & scooter rental clusters', 'Station / market roads', 'Daily bike', 'INR 400–1.5k/day', 'Usually 8–9 PM', `${cn} bike rental shop`, ['Disc brake check', 'Helmet fit'], ['Passport as deposit — avoid']),
        opt(slug, 'rn-self', 'Self-drive cars (Zoomcar / Revv / local)', 'City depot', 'Hatch/SUV', 'INR 2–6k/day', '24x7 app', `${cn} self drive car rental`, ['KM package read', 'FASTag balance'], ['Speed traps NH']),
        opt(slug, 'rn-bullet', 'Royal Enfield / tour bikes', 'Tourist belt', 'Premium bike', 'INR 1.8k+', 'Daylight', `${cn} bullet bike rent`, ['Ideal for Aravalli loops', 'Chain lube ask'], ['Heavy bike + sand']),
        opt(slug, 'rn-id', 'ID + international permit help', 'Agencies', 'Paperwork assist', 'Fee', 'Office hours', `${cn} car rental without deposit`, ['Clarify only legit paths', 'Never fake IDs'], ['Scam offers']),
      ],
    },
    'public-transport': {
      title: 'Public transport (Bus/Train)',
      eyebrow: 'Transport & Mobility',
      lead: `RSRTC buses and Indian Railways still move most of ${cn}’s workforce — cheap, crowded, and **time-table sensitive**. NTES + UTS apps reduce platform chaos.`,
      problem: [
        'Hindi-only destination boards confuse visitors.',
        'Last-minute platform changes on single-line sections.',
        'Bus luggage placement during peak.',
      ],
      solution: [
        'Screenshot train number + coach in IRCTC.',
        'Reach bus stand **30 min** early — numbered platforms help.',
        'Keep cash + UPI; conductor change may lag.',
      ],
      why: ['Backbone for budget itineraries.', 'Eco-friendly when trains work.'],
      quickTiles: [
        { label: 'Train app', value: 'IRCTC + NTES' },
        { label: 'Bus', value: 'RSRTC' },
        { label: 'Tip', value: 'Upper berth AC' },
        { label: 'Caution', value: 'Pickpockets' },
      ],
      optionsTitle: `Core nodes (${cn})`,
      optionsLead: 'Verify latest timetable — festivals add extra buses.',
      options: [
        opt(slug, 'pt-rail', `${cn} railway station (IR)`, 'Main line', 'Rail hub', 'Fare by class', '24x7', `${cn} railway station`, ['General unreserved tough summer', 'Use retiring room booking'], ['Tout “VIP” entry']),
        opt(slug, 'pt-bus', 'RSRTC bus stand', 'State buses', 'Inter-district', 'Low cost', '4 AM–11 PM', `${cn} RSRTC bus stand`, ['Luggage roof — watch', 'Ladies seats respect'], ['Holiday queues']),
        opt(slug, 'pt-express', 'Private Volvo / semi-sleeper', 'Private operators', 'Highway', 'Mid', 'Night focus', `${cn} private bus booking`, ['Blanket in winter AC', 'USB charging ask'], ['Hidden boarding points']),
        opt(slug, 'pt-local', 'City bus / mini bus (where exists)', 'Intra-urban', 'Cheap hop', 'INR 10–40', 'Daytime', `${cn} city bus route`, ['Women front seats', 'Exact change'], ['Frequency gaps']),
      ],
    },
    'airport-transfers': buildAirportBundle(slug, cn, rg),
    safari: safariForSlug(slug, cn, rg),
  }

  cache.set(slug, out)
  return out
}
