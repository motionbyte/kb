import { getCityBySlug } from '@/data/cities'
import type { City } from '@/types'
import { buildGenericCityTransportGuide } from '@/data/cityTransportGenericBundles'

export type TransportKind =
  | 'local-transport'
  | 'cab-apps'
  | 'rental'
  | 'public-transport'
  | 'airport-transfers'
  | 'safari'

export type TransportOption = {
  id: string
  name: string
  area: string
  typeTag: string
  approxFare: string
  timings: string
  phone?: string
  website?: string
  mapUrl: string
  tips: string[]
  watchOut: string[]
}

export type TransportGuideBundle = {
  title: string
  eyebrow: string
  lead: string
  problem: string[]
  solution: string[]
  why: string[]
  quickTiles: Array<{ label: string; value: string }>
  optionsTitle: string
  optionsLead: string
  options: TransportOption[]
}

type CityTransportGuide = Record<TransportKind, TransportGuideBundle>

const AJMER_TRANSPORT_GUIDE: CityTransportGuide = {
  'local-transport': {
    title: 'Local transport (Auto/Taxi)',
    eyebrow: 'Transport & Mobility',
    lead:
      'For short city rides, autos and local taxis are fastest, but first-time visitors need fare clarity and safe pickup points.',
    problem: [
      'Tourists get confused between meter fares and negotiated fares.',
      'Peak hours near station and Dargah increase overquote risk.',
      'Route confusion causes unnecessary detours and extra cost.',
    ],
    solution: [
      'Use high-footfall pickup points and confirm fare before boarding.',
      'Keep destination in map ready and share live location if possible.',
      'Prefer prepaid/stand counters where available near transit hubs.',
    ],
    why: ['Most daily city movement depends on these rides.', 'Fare confidence directly improves travel trust.'],
    quickTiles: [
      { label: 'Best use', value: '2-8 km city rides' },
      { label: 'Fare mode', value: 'Negotiate first' },
      { label: 'Peak caution', value: '7-10 AM, 6-9 PM' },
      { label: 'Safety', value: 'Share ride details' },
    ],
    optionsTitle: 'Recommended pickup zones (Ajmer)',
    optionsLead: 'Practical city points where autos/taxis are usually available.',
    options: [
      {
        id: 'lt-ajmer-junction',
        name: 'Ajmer Junction auto stand',
        area: 'Railway station area',
        typeTag: 'Auto/taxi stand',
        approxFare: 'INR 80-250 (within city, distance dependent)',
        timings: 'Early morning to late evening (strong flow all day)',
        phone: '+91 145 242 9642',
        mapUrl: 'https://www.google.com/maps/search/?api=1&query=Ajmer%20Junction%20auto%20stand',
        tips: ['Confirm full fare before ride starts', 'Keep small cash change ready'],
        watchOut: ['Avoid vague “city tour” upsell without rate card'],
      },
      {
        id: 'lt-dargah-gate',
        name: 'Dargah Gate mobility point',
        area: 'Dargah Bazar side',
        typeTag: 'Short-hop autos',
        approxFare: 'INR 60-220',
        timings: 'High availability in daytime and evening',
        mapUrl: 'https://www.google.com/maps/search/?api=1&query=Dargah%20Gate%20Ajmer%20auto',
        tips: ['Walk to main road for easier fare comparison', 'Use map pin, not landmark-only direction'],
        watchOut: ['Crowd-time surge quotes are common on weekends'],
      },
      {
        id: 'lt-ana-sagar',
        name: 'Ana Sagar / Civil Lines taxis',
        area: 'Ana Sagar Road',
        typeTag: 'Point-to-point taxi',
        approxFare: 'INR 150-450',
        timings: 'Late morning till night',
        mapUrl: 'https://www.google.com/maps/search/?api=1&query=Ana%20Sagar%20Road%20Ajmer%20taxi',
        tips: ['Good option for family rides with luggage', 'Save driver number for return if service is good'],
        watchOut: ['Confirm AC/non-AC charge upfront'],
      },
    ],
  },
  'cab-apps': {
    title: 'Cab apps (Uber/Ola)',
    eyebrow: 'Transport & Mobility',
    lead: 'App cabs give better fare visibility, but coverage and driver acceptance vary by pocket and timing.',
    problem: [
      'Pickups may be cancelled in low-demand pockets.',
      'Tourists are unsure when app fare is better than local auto.',
      'Airport/intercity drop fares can fluctuate sharply.',
    ],
    solution: [
      'Compare app fare vs local quote in 20-30 seconds before confirming.',
      'Use clear pickup pins on wider roads to reduce cancellations.',
      'For early/late trips, pre-book and keep one backup option.',
    ],
    why: ['Transparent pricing reduces stress.', 'Useful for non-Hindi travellers who prefer in-app tracking.'],
    quickTiles: [
      { label: 'Best use', value: 'Mid-distance city rides' },
      { label: 'Strength', value: 'Live fare visibility' },
      { label: 'Risk', value: 'Pickup cancellation' },
      { label: 'Tip', value: 'Pin main road pickup' },
    ],
    optionsTitle: 'Cab-app friendly zones (Ajmer)',
    optionsLead: 'Areas where pickups are generally easier to complete.',
    options: [
      {
        id: 'ca-civil-lines',
        name: 'Civil Lines pickup corridor',
        area: 'Civil Lines / Panchsheel',
        typeTag: 'App-cab friendly',
        approxFare: 'INR 120-350 (typical city range)',
        timings: 'All day, stronger after 9 AM',
        website: 'https://www.uber.com/in/en/ride/',
        mapUrl: 'https://www.google.com/maps/search/?api=1&query=Civil%20Lines%20Ajmer',
        tips: ['Set pickup near landmark shops/hotels', 'Verify car number before boarding'],
        watchOut: ['Avoid in-app calls sharing unnecessary personal data'],
      },
      {
        id: 'ca-station-road',
        name: 'Station Road app pickup points',
        area: 'Near Ajmer station',
        typeTag: 'Transit pickup pocket',
        approxFare: 'INR 100-320',
        timings: 'Strong in daytime',
        website: 'https://www.olacabs.com/',
        mapUrl: 'https://www.google.com/maps/search/?api=1&query=Station%20Road%20Ajmer',
        tips: ['Move slightly away from crowd gate for faster match'],
        watchOut: ['Do not accept off-app fare switch requests'],
      },
      {
        id: 'ca-pushkar-link',
        name: 'Ajmer-Pushkar app route',
        area: 'Pushkar bypass side',
        typeTag: 'Inter-town app ride',
        approxFare: 'INR 450-1200 (time dependent)',
        timings: 'Daytime better than late night',
        mapUrl: 'https://www.google.com/maps/search/?api=1&query=Ajmer%20to%20Pushkar',
        tips: ['Check one-way vs round-trip clearly'],
        watchOut: ['Festival days can trigger very high surge'],
      },
    ],
  },
  rental: {
    title: 'Car/Bike rental',
    eyebrow: 'Transport & Mobility',
    lead: 'Rentals are great for flexibility, but tourists need paperwork clarity and fuel/deposit transparency.',
    problem: [
      'Hidden charges in fuel policy and late-return clauses.',
      'Unclear insurance terms and damage responsibility.',
      'Helmet/document checks often ignored by first-time renters.',
    ],
    solution: [
      'Take full vehicle photo/video before pickup and at return.',
      'Ask for written total estimate including taxes and deposit terms.',
      'Carry license + ID and insist on helmet quality for bike rentals.',
    ],
    why: ['Good rental process saves both time and money.', 'Road confidence improves independent itinerary planning.'],
    quickTiles: [
      { label: 'Best use', value: 'Day trips + flexible plans' },
      { label: 'Must carry', value: 'License + ID proof' },
      { label: 'Check', value: 'Fuel + damage photos' },
      { label: 'Risk', value: 'Deposit disputes' },
    ],
    optionsTitle: 'Rental search points (Ajmer-Pushkar belt)',
    optionsLead: 'Use these map clusters to shortlist and compare reviews.',
    options: [
      {
        id: 'rn-station-belt',
        name: 'Station Road rental operators',
        area: 'Station Road',
        typeTag: 'Bike/car rental cluster',
        approxFare: 'Bike INR 500-1200/day, Car INR 1800+/day',
        timings: 'Usually 8 AM-9 PM',
        mapUrl: 'https://www.google.com/maps/search/?api=1&query=Ajmer%20bike%20rental%20station%20road',
        tips: ['Check tyre/brake condition before leaving'],
        watchOut: ['No-document rental offers are unsafe and risky'],
      },
      {
        id: 'rn-pushkar-rentals',
        name: 'Pushkar bike rental lane',
        area: 'Pushkar market side',
        typeTag: 'Tourist bike rental',
        approxFare: 'INR 600-1500/day',
        timings: 'Morning to evening',
        mapUrl: 'https://www.google.com/maps/search/?api=1&query=Pushkar%20bike%20rental',
        tips: ['Ideal for short local loops around Pushkar'],
        watchOut: ['Confirm extra-hour charge and fuel return rule'],
      },
      {
        id: 'rn-self-drive-cars',
        name: 'Self-drive car options (regional)',
        area: 'Ajmer city coverage',
        typeTag: 'Self-drive aggregator',
        approxFare: 'INR 2200-5500/day (vehicle type based)',
        timings: 'Pre-book recommended',
        website: 'https://www.zoomcar.com/',
        mapUrl: 'https://www.google.com/maps/search/?api=1&query=Ajmer%20self%20drive%20car%20rental',
        tips: ['Book ahead for weekends and holidays'],
        watchOut: ['Read km-limit and extra-km billing carefully'],
      },
    ],
  },
  'public-transport': {
    title: 'Public transport (Bus/Train)',
    eyebrow: 'Transport & Mobility',
    lead:
      'Public transport is budget-friendly, but platform/bus stand navigation can be confusing for international travellers.',
    problem: [
      'Travellers struggle with bus stand counters and route naming.',
      'Train timing changes and platform updates cause missed connections.',
      'Ticketing process feels unclear during rush hours.',
    ],
    solution: [
      'Use official rail apps/sites and double-check departure boards.',
      'Reach bus stand/station 20-30 minutes early in peak periods.',
      'Keep route screenshot and destination in Hindi + English.',
    ],
    why: ['Cheapest way for intercity movement.', 'Strong backup option when cab availability is low.'],
    quickTiles: [
      { label: 'Best for', value: 'Budget travel' },
      { label: 'Train source', value: 'IRCTC / NTES' },
      { label: 'Bus source', value: 'RSRTC counters' },
      { label: 'Rule', value: 'Arrive early' },
    ],
    optionsTitle: 'Core public transport nodes',
    optionsLead: 'Primary stations and terminals used by most travellers.',
    options: [
      {
        id: 'pt-ajmer-junction',
        name: 'Ajmer Junction railway station',
        area: 'Station Road',
        typeTag: 'Rail hub',
        approxFare: 'Varies by route/class',
        timings: '24x7 station access',
        website: 'https://www.irctc.co.in/',
        mapUrl: 'https://www.google.com/maps/search/?api=1&query=Ajmer%20Junction',
        tips: ['Track platform on official display boards', 'Use waiting room for safer late-night wait'],
        watchOut: ['Ignore unofficial “ticket helper” agents'],
      },
      {
        id: 'pt-rsrtc',
        name: 'Ajmer RSRTC bus stand',
        area: 'Bus stand zone, Ajmer',
        typeTag: 'State bus terminal',
        approxFare: 'Low-cost regional fares',
        timings: 'Early morning to late night (route dependent)',
        mapUrl: 'https://www.google.com/maps/search/?api=1&query=Ajmer%20RSRTC%20bus%20stand',
        tips: ['Confirm platform and bus number before boarding'],
        watchOut: ['Festival periods may have heavy queue delays'],
      },
      {
        id: 'pt-pushkar-bus',
        name: 'Ajmer-Pushkar bus route points',
        area: 'Ajmer local bus links',
        typeTag: 'Short inter-town bus',
        approxFare: 'Budget short-hop fares',
        timings: 'Frequent daytime movement',
        mapUrl: 'https://www.google.com/maps/search/?api=1&query=Ajmer%20to%20Pushkar%20bus',
        tips: ['Good low-budget option for solo travellers'],
        watchOut: ['Keep small luggage secure in crowded buses'],
      },
    ],
  },
  'airport-transfers': {
    title: 'Airport transfers',
    eyebrow: 'Transport & Mobility',
    lead:
      'Ajmer travellers usually connect via Jaipur airport, so transfer planning matters for comfort, timing, and fixed costs.',
    problem: [
      'Late-night arrivals create uncertainty for onward travel.',
      'Tourists get overquoted for direct airport drops/pickups.',
      'No clear benchmark on transfer duration and total spend.',
    ],
    solution: [
      'Pre-book transfer and keep one backup option ready.',
      'Prefer written fare confirmation over verbal rate promises.',
      'Plan buffer time for Jaipur-Ajmer road conditions.',
    ],
    why: ['Airport legs are high-stress moments.', 'A reliable transfer creates a strong first/last trip impression.'],
    quickTiles: [
      { label: 'Primary airport', value: 'Jaipur (JAI)' },
      { label: 'Typical duration', value: '2.5-3.5 hrs' },
      { label: 'Mode', value: 'Cab / private transfer' },
      { label: 'Rule', value: 'Pre-confirm fare' },
    ],
    optionsTitle: 'Transfer options (Ajmer base)',
    optionsLead: 'Choose by budget, comfort, and arrival time.',
    options: [
      {
        id: 'at-prebook-cab',
        name: 'Pre-booked private cab (JAI-Ajmer)',
        area: 'Jaipur airport to Ajmer hotels',
        typeTag: 'Door-to-door transfer',
        approxFare: 'INR 3500-6500 one way (vehicle type/time)',
        timings: '24x7 with prior booking',
        mapUrl: 'https://www.google.com/maps/search/?api=1&query=Jaipur%20Airport%20to%20Ajmer%20cab',
        tips: ['Share flight number for delay tracking'],
        watchOut: ['Confirm toll/parking inclusion in final fare'],
      },
      {
        id: 'at-app-cab-jaipur',
        name: 'App-cab from Jaipur airport',
        area: 'Jaipur airport pickup zone',
        typeTag: 'App-based transfer',
        approxFare: 'Dynamic pricing (often 3200+)',
        timings: 'Availability depends on hour and demand',
        website: 'https://www.uber.com/in/en/ride/',
        mapUrl: 'https://www.google.com/maps/search/?api=1&query=Jaipur%20International%20Airport',
        tips: ['Reconfirm pickup gate inside app'],
        watchOut: ['High surge during event/festival nights'],
      },
      {
        id: 'at-rail-combo',
        name: 'Airport to Jaipur Junction + train to Ajmer',
        area: 'Jaipur transit combo',
        typeTag: 'Budget hybrid route',
        approxFare: 'Lower than private cab, time-flex required',
        timings: 'Daytime easier for first-timers',
        mapUrl: 'https://www.google.com/maps/search/?api=1&query=Jaipur%20Junction%20to%20Ajmer%20train',
        tips: ['Works well if luggage is light and schedule is flexible'],
        watchOut: ['Multiple transfers are tiring after long flights'],
      },
    ],
  },
  safari: {
    title: 'Safari (Camel/Jeep)',
    eyebrow: 'Transport & Mobility',
    lead:
      'Camel/jeep safari plans around Ajmer-Pushkar can be memorable if route, duration, and inclusions are verified in advance.',
    problem: [
      'Tourists book vague packages without inclusion details.',
      'Safety gear and operator quality vary by provider.',
      'Sunset demand often causes price confusion.',
    ],
    solution: [
      'Ask exact itinerary: ride time, meals, show, pickup/drop.',
      'Choose operators with recent reviews and clear cancellation terms.',
      'Carry sun protection and hydration for daytime desert legs.',
    ],
    why: ['Safari is a flagship Rajasthan experience.', 'Clear booking prevents disappointment and overpaying.'],
    quickTiles: [
      { label: 'Best window', value: 'Sunrise / sunset' },
      { label: 'Modes', value: 'Camel / Jeep' },
      { label: 'Duration', value: '2 hrs to full day' },
      { label: 'Safety', value: 'Operator quality first' },
    ],
    optionsTitle: 'Safari planning options (Ajmer region)',
    optionsLead: 'Pushkar side operators are commonly used by Ajmer travellers.',
    options: [
      {
        id: 'sf-pushkar-camel',
        name: 'Pushkar camel safari operators',
        area: 'Pushkar outskirts',
        typeTag: 'Camel ride circuits',
        approxFare: 'INR 800-2500 per person (duration dependent)',
        timings: 'Sunrise and sunset slots',
        mapUrl: 'https://www.google.com/maps/search/?api=1&query=Pushkar%20camel%20safari',
        tips: ['Sunset slot is popular; pre-book preferred'],
        watchOut: ['Confirm total ride time to avoid short-ride disputes'],
      },
      {
        id: 'sf-pushkar-jeep',
        name: 'Pushkar jeep safari operators',
        area: 'Pushkar desert belt',
        typeTag: 'Jeep off-road routes',
        approxFare: 'INR 1500-4500 per jeep (route dependent)',
        timings: 'Mostly morning and evening',
        mapUrl: 'https://www.google.com/maps/search/?api=1&query=Pushkar%20jeep%20safari',
        tips: ['Ask max passenger count before finalizing price'],
        watchOut: ['Avoid no-bill bookings for larger group payments'],
      },
      {
        id: 'sf-combo-experience',
        name: 'Camel + dinner/show combo camps',
        area: 'Pushkar camp zone',
        typeTag: 'Bundled safari experience',
        approxFare: 'INR 1800-5200 per person',
        timings: 'Evening-first programs',
        mapUrl: 'https://www.google.com/maps/search/?api=1&query=Pushkar%20desert%20camp%20safari',
        tips: ['Check what is included: pickup, meal, performance'],
        watchOut: ['Inspect transfer safety for late-night return'],
      },
    ],
  },
}

type TransportCtx = Pick<City, 'name' | 'slug' | 'region'>

export function getCityTransportGuide(slug: string, kind: TransportKind): TransportGuideBundle {
  if (slug === 'ajmer') return AJMER_TRANSPORT_GUIDE[kind]
  const city = getCityBySlug(slug)
  const ctx: TransportCtx = city
    ? { name: city.name, slug: city.slug, region: city.region }
    : {
        name: slug
          .split('-')
          .map((w) => w.charAt(0).toUpperCase() + w.slice(1))
          .join(' '),
        slug,
        region: 'Rajasthan',
      }
  return buildGenericCityTransportGuide(ctx)[kind]
}
