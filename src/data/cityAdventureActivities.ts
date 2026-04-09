/**
 * Adventure activities by category — planning copy; verify operators, permits, and season before booking.
 */

import { getCityLandmarkCentre } from '@/data/cityPhotographyLandmarkRows'

export type AdventureContact = {
  id: string
  label: string
  role: string
  phoneDisplay?: string
  telDigits?: string
  website?: string
}

export type AdventureDifficulty = 'Easy' | 'Moderate' | 'Hard'

export type AdventureActivity = {
  id: string
  name: string
  teaser?: string
  where: string
  overview: string[]
  expect: string[]
  seasonTiming: string
  difficulty?: AdventureDifficulty
  safetyTips?: string[]
  contact?: AdventureContact
  latitude: number
  longitude: number
}

export type AdventureCategory = {
  id: string
  eyebrow: string
  title: string
  intro: string[]
  activities: AdventureActivity[]
}

export type CityAdventureActivitiesBundle = {
  citySlug: string
  leadTitle: string
  leadParagraphs: string[]
  authorityContacts: AdventureContact[]
  categories: AdventureCategory[]
}

const rajTourism: AdventureContact = {
  id: 'tourism-raj',
  label: 'Rajasthan Tourism',
  role: 'Licensed operator lists & travel helpdesk',
  phoneDisplay: '1800-180-29',
  telDigits: '1800180029',
  website: 'https://tourism.rajasthan.gov.in/',
}

const ajmerAdmin: AdventureContact = {
  id: 'ajmer-admin',
  label: 'Ajmer district administration',
  role: 'District coordination / public event info',
  phoneDisplay: '0145-2627427',
  telDigits: '01452627427',
}

const ajmerPolice: AdventureContact = {
  id: 'ajmer-police',
  label: 'Ajmer police control',
  role: 'Safety on remote routes & night travel',
  phoneDisplay: '0145-2420900',
  telDigits: '01452420900',
}

const emergency: AdventureContact = {
  id: 'emergency',
  label: 'National emergency',
  role: 'Police / ambulance / fire',
  phoneDisplay: '112',
  telDigits: '112',
}

const ajmerAdventure: CityAdventureActivitiesBundle = {
  citySlug: 'ajmer',
  leadTitle: 'Adventure in and around Ajmer',
  leadParagraphs: [
    'Ajmer sits between lake country and the Aravalli edge — so adventures mix short hill climbs, lakeside activity, and desert-style outings as day trips toward Pushkar dunes or longer wildlife runs.',
    'Use categories below to scan by activity type. Book only with insured operators; summer heat and monsoon slick trails change risk fast.',
  ],
  authorityContacts: [rajTourism, ajmerAdmin, ajmerPolice, emergency],
  categories: [
    {
      id: 'adv-desert-safari',
      eyebrow: 'Sand & caravan',
      title: 'Desert, camel & jeep outings',
      intro: [
        'Classic “Thar-adjacent” experiences are usually organised as half- or full-day trips from Ajmer–Pushkar — camel rides, camel carts, and jeep runs on dune edges rather than deep wilderness.',
      ],
      activities: [
        {
          id: 'pushkar-camel-safari',
          name: 'Camel rides & short desert circuits (Pushkar belt)',
          teaser: 'Most bookable option',
          where: 'Organised camps and operators on the Pushkar / dune-edge circuit — typically reached by road from Ajmer',
          overview: [
            'Camel safaris here are usually 30–90 minute loops or sunset rides stitched to camp dinners — not multi-day crossings.',
            'Quality varies sharply; compare vehicle backup, water, helmet rules for jeep segments, and whether animals are rested in heat.',
          ],
          expect: [
            'Haggle politely but prefer fixed packages from hotels you trust.',
            'Carry sun cover, closed shoes, and cash for tips.',
            'Winter evenings get cold on open sand — layer up.',
          ],
          seasonTiming: 'Best Oct–Feb; avoid midday sun Mar–Jun. Monsoon Jul–Sep: fewer departures, slippery tracks.',
          difficulty: 'Easy',
          safetyTips: [
            'Refuse overloaded camels or rushed handlers — walk away.',
            'Jeep dunes: seat belts if provided; no standing in open trucks on highways.',
          ],
          contact: rajTourism,
          latitude: 26.45,
          longitude: 74.58,
        },
        {
          id: 'jeep-dune-bashing',
          name: 'Jeep rides & dune-edge runs',
          teaser: 'Faster, louder',
          where: 'Same Pushkar–sand belt; often paired with camel segment',
          overview: [
            'Short dune drives are marketed as “jeep safari”. Routes should stay off fragile crusted soil and village farms — insist on known circuits.',
          ],
          expect: [
            'Dust, wind, and splashes during monsoon mud.',
            'Fixed per-vehicle pricing is common; split with group.',
          ],
          seasonTiming: 'Oct–Mar prime; summer only early morning.',
          difficulty: 'Moderate',
          safetyTips: ['No acrobatics standing in moving jeeps.', 'Children need firm seating and adult supervision.'],
          latitude: 26.452,
          longitude: 74.565,
        },
        {
          id: 'overnight-desert-camp',
          name: 'Overnight desert camps (luxury to basic)',
          teaser: 'Bonfire, folk show add-ons',
          where: 'Dune-edge camps 15–40 km from Ajmer depending on operator',
          overview: [
            'Packages often bundle dinner, transport, and optional cultural programme. Stargazing is a draw on clear winter nights.',
          ],
          expect: [
            'Confirm toilet, bedding, and power arrangements before paying.',
            'Loud music curfews vary — ask if you want quiet.',
          ],
          seasonTiming: 'Peak Nov–Feb; book early on long weekends.',
          difficulty: 'Easy',
          safetyTips: [
            'Keep phone charged; share live location with hotel.',
            'Carry personal meds — remote camps may be far from pharmacies.',
          ],
          contact: rajTourism,
          latitude: 26.44,
          longitude: 74.52,
        },
      ],
    },
    {
      id: 'adv-hills-trek',
      eyebrow: 'Stone & ridge',
      title: 'Hills, forts & trekking',
      intro: [
        'Ajmer’s Aravalli fringes offer short, steep climbs and fort paths. These are not Himalayan treks — think 1–3 hour efforts with big payoffs in views and breeze.',
      ],
      activities: [
        {
          id: 'taragarh-hike',
          name: 'Taragarh Fort — steep stone path',
          teaser: 'Iconic climb · sunrise crowd',
          where: 'Ajmer city; trailheads toward the hill fort above the old town',
          overview: [
            'The walk up is legendary among locals for fitness and views over the bowl of Ajmer. Fort access and timings vary seasonally — check gate rules.',
          ],
          expect: [
            'Loose stone, monkeys, and sharp sun on open sections.',
            'Carry 1–2L water per person even in “short” hikes.',
          ],
          seasonTiming: 'Nov–Feb early mornings best; Apr–Jun start before 7 AM.',
          difficulty: 'Moderate',
          safetyTips: [
            'Avoid solo climbs after dark.',
            'Monsoon: slippery tread — use grip shoes, trekking pole optional.',
          ],
          contact: ajmerAdmin,
          latitude: 26.449,
          longitude: 74.637,
        },
        {
          id: 'ana-sagar-ridge-walk',
          name: 'Ana Sagar embankment & ridge strolls',
          teaser: 'Easier · lake breeze',
          where: 'Marble pavilions and long walking margin of Ana Sagar',
          overview: [
            'Not mountaineering — but long flat-to-rolling walks with wind exposure and big skyline. Good recovery day between harder climbs.',
          ],
          expect: [
            'Cyclists and evening crowds share the path.',
            'Dogs and monkeys near food stalls.',
          ],
          seasonTiming: 'Year-round; sunset busiest Oct–Mar.',
          difficulty: 'Easy',
          safetyTips: ['Stay back from unrailed drop-offs in dark.', 'Keep snacks sealed from monkeys.'],
          latitude: 26.471389,
          longitude: 74.625833,
        },
        {
          id: 'nareli-day-out',
          name: 'Nareli marble complex — hill-fringe outing',
          teaser: 'Short drive + terraced steps',
          where: 'Nareli Jain temples south-east of Ajmer (road trip)',
          overview: [
            'Combines architectural sightseeing with gentle elevation changes — good family half-day when heat is mild.',
          ],
          expect: [
            'Shoes off in sanctums; modest dress.',
            'Photography rules inside may be strict.',
          ],
          seasonTiming: 'Oct–Mar; mornings preferred.',
          difficulty: 'Easy',
          contact: rajTourism,
          latitude: 26.292,
          longitude: 74.738,
        },
      ],
    },
    {
      id: 'adv-water',
      eyebrow: 'Lake & shore',
      title: 'Water & lakeside activity',
      intro: [
        'Large open water here is mostly reservoirs — boating and promenade life, not white-water.',
      ],
      activities: [
        {
          id: 'ana-sagar-boating',
          name: 'Boating & lake promenade (Ana Sagar)',
          teaser: 'Pedal / row as available',
          where: 'Ana Sagar Lake, Ajmer',
          overview: [
            'Seasonal boating operations depend on water level, wind, and contractor schedules — ask locally at the lake edge.',
          ],
          expect: [
            'Life jackets should be non-negotiable for children.',
            'Evening breeze can push small boats — listen to operator briefings.',
          ],
          seasonTiming: 'Usually stronger offerings Oct–Mar; monsoon winds can pause service.',
          difficulty: 'Easy',
          safetyTips: ['No swimming in reservoirs — currents and depth vary.', 'Secure phones from splash.'],
          latitude: 26.471389,
          longitude: 74.625833,
        },
        {
          id: 'foy-sagar-wind-walk',
          name: 'Foy Sagar — open horizon & wind sports (informal)',
          teaser: 'Kite flyers · walkers',
          where: 'Foy Sagar reservoir west of Ajmer core',
          overview: [
            'Wide embankments attract walkers and kite hobbyists on breezy days — not a licensed surf spot, but active sky on weekends.',
          ],
          expect: [
            'Strong cross-winds in winter.',
            'Fewer amenities than Ana Sagar — carry your own water.',
          ],
          seasonTiming: 'Winter afternoons for wind; summer mornings only.',
          difficulty: 'Easy',
          latitude: 26.4278,
          longitude: 74.6153,
        },
      ],
    },
    {
      id: 'adv-wildlife',
      eyebrow: 'Forest & fauna',
      title: 'Wildlife & nature day trips',
      intro: [
        'Ajmer is not inside a tiger reserve — nearest heavy wildlife experiences are day-trip distance. Plan full days and park permits.',
      ],
      activities: [
        {
          id: 'sariska-day-trip',
          name: 'Sariska Tiger Reserve (long day trip)',
          teaser: 'Tigers · drives · Alwar edge',
          where: 'Alwar district — typically 4–6 hours road depending on route and stops',
          overview: [
            'Jeep safaris inside the reserve require advance booking through official channels or registered lodges. This is not a spontaneous “show up” activity in peak season.',
          ],
          expect: [
            'Early morning and late afternoon game-drive windows.',
            'Park remains closed on listed holidays — verify calendar.',
          ],
          seasonTiming: 'Oct–Jun core season; April–June very hot in open gypsy.',
          difficulty: 'Moderate',
          safetyTips: [
            'Stay inside the vehicle; follow guide instructions.',
            'Carry ID — reserve check posts are strict.',
          ],
          contact: rajTourism,
          latitude: 27.317,
          longitude: 76.438,
        },
      ],
    },
    {
      id: 'adv-aerial',
      eyebrow: 'Sky & rush',
      title: 'Aerial & adrenaline (regional)',
      intro: [
        'Ajmer itself has limited licensed zip-line / balloon infrastructure on public maps — travellers often stitch balloon or adventure-park days from Jaipur or other hubs while based here.',
      ],
      activities: [
        {
          id: 'balloon-regional',
          name: 'Hot-air balloon & adventure parks (usually Jaipur / other hubs)',
          teaser: 'Plan as add-on travel day',
          where: 'Operators market from Jaipur and other Rajasthan cities — confirm meet point',
          overview: [
            'If ballooning matters to your trip, book only DGCA-compliant operators and read weather-cancellation policies upfront.',
          ],
          expect: [
            'Dawn meet times; rides may cancel last minute for wind.',
            'Premium pricing on festival weekends.',
          ],
          seasonTiming: 'Oct–Mar most reliable weather windows.',
          difficulty: 'Moderate',
          safetyTips: ['No loose scarves or hats without straps.', 'Declare health conditions when asked.'],
          contact: rajTourism,
          latitude: 26.9124,
          longitude: 75.7873,
        },
      ],
    },
    {
      id: 'adv-wheels',
      eyebrow: 'Pedal & path',
      title: 'Cycling, walking & soft adventure',
      intro: [
        'Low-impact adventures — heritage loops, ridge dirt tracks near villages, and long lake margins. Ideal for heat-management days.',
      ],
      activities: [
        {
          id: 'heritage-cycle-loop',
          name: 'Heritage cycling loops (old city ↔ lake)',
          teaser: 'Self-guided · early start',
          where: 'Ajmer old quarters linking dargah outer lanes to Ana Sagar margins',
          overview: [
            'Rent geared bicycles from city shops where available or bring a folding bike. Traffic is dense — this suits confident urban riders.',
          ],
          expect: [
            'Cows, rickshaws, and festival detours.',
            'Parking eyes on your bike at food stops.',
          ],
          seasonTiming: 'Oct–Mar sunrise rides; summer only before 8 AM.',
          difficulty: 'Moderate',
          safetyTips: ['Helmet + lights if you return after dark.', 'Avoid headphone isolation in traffic.'],
          latitude: 26.456,
          longitude: 74.632,
        },
        {
          id: 'pushkar-hike-ghat',
          name: 'Pushkar ridge & ghat wandering',
          teaser: 'Walk-heavy day trip',
          where: 'Pushkar town and outer hills',
          overview: [
            'Combines spiritual walking circuits with short uphill spurs for viewpoint seekers — respectful dress near ghats.',
          ],
          expect: [
            'Kartik fair weeks are jammed — adjust pacing and water.',
            'Stray dogs near food — don’t run; move calmly.',
          ],
          seasonTiming: 'Nov–Feb best on foot; carry hat year-round.',
          difficulty: 'Easy',
          latitude: 26.488889,
          longitude: 74.551389,
        },
      ],
    },
  ],
}

function genericAdventure(cityName: string, slug: string): CityAdventureActivitiesBundle {
  const pin = getCityLandmarkCentre(slug)
  const mk = (id: string, name: string, teaser: string, body: string[]): AdventureActivity => ({
    id,
    name,
    teaser,
    where: `${cityName} district — operators vary; confirm with Rajasthan Tourism or your hotel.`,
    overview: body,
    expect: [
      'Compare inclusions (transport, meals, permits) before you pay.',
      'Peak season (Oct–Mar) — book a day ahead when possible.',
    ],
    seasonTiming: 'Generally Oct–Mar for outdoor comfort; summer only early mornings.',
    difficulty: 'Moderate',
    safetyTips: ['Use insured operators.', 'Share your live location with someone for remote segments.'],
    contact: rajTourism,
    latitude: pin.latitude,
    longitude: pin.longitude,
  })

  return {
    citySlug: slug,
    leadTitle: `Adventure around ${cityName}`,
    leadParagraphs: [
      `${cityName} — category checklist for Rajasthan-style adventures in this district. Pins centre on local landmarks; verify operators, permits, and gates before you pay.`,
      'Laws, park closures, and monsoon access change — double-check the morning you travel.',
    ],
    authorityContacts: [rajTourism, emergency],
    categories: [
      {
        id: 'adv-desert-safari',
        eyebrow: 'Sand & caravan',
        title: 'Desert, camel & jeep outings',
        intro: ['Camel rides, jeep dunes, and camp nights — usually organised packages.'],
        activities: [
          mk(
            'gen-desert',
            'Camel & jeep desert circuits',
            'Most common “Rajasthan adventure”',
            [
              'Half-day to overnight formats exist; insist on water, shade, and ethical animal handling.',
              'Avoid ad-hoc touts at bus stands — use hotel or tourism-referred desks when you can.',
            ],
          ),
        ],
      },
      {
        id: 'adv-hills-trek',
        eyebrow: 'Stone & ridge',
        title: 'Hills, forts & trekking',
        intro: ['Short Aravalli climbs and fort paths — start early, carry water.'],
        activities: [
          mk(
            'gen-hill',
            'Fort paths & ridge walks',
            'Steep stone · big views',
            [
              'Wear grip shoes; monsoon rock is slippery.',
              'Many forts have restricted hours — verify gates before a dawn hike.',
            ],
          ),
        ],
      },
      {
        id: 'adv-water',
        eyebrow: 'Lake & shore',
        title: 'Water & lakeside activity',
        intro: ['Boating where licensed; never swim in unfamiliar reservoirs.'],
        activities: [
          mk(
            'gen-water',
            'Boating & lake promenades',
            'Easy family segment',
            [
              'Life jackets matter for children and weak swimmers.',
              'Wind can cancel small boats — flexible plans help.',
            ],
          ),
        ],
      },
      {
        id: 'adv-wildlife',
        eyebrow: 'Forest & fauna',
        title: 'Wildlife & safaris',
        intro: ['Reserve safaris need permits — book ahead in season.'],
        activities: [
          mk(
            'gen-wild',
            'Jeep safaris (nearest reserve)',
            'Plan a full day',
            [
              'Carry government ID; foreign guests may need passport copies per park rules.',
              'Closed days happen — confirm online notices.',
            ],
          ),
        ],
      },
      {
        id: 'adv-aerial',
        eyebrow: 'Sky & rush',
        title: 'Aerial & adrenaline',
        intro: ['Ballooning and zip lines cluster in a few licensed hubs — rarely spontaneous.'],
        activities: [
          mk(
            'gen-sky',
            'Balloon / zip / adventure park',
            'Often city-specific',
            [
              'Weather cancellations are normal — read refund rules.',
              'Age/weight limits apply on aerial gear.',
            ],
          ),
        ],
      },
      {
        id: 'adv-wheels',
        eyebrow: 'Pedal & path',
        title: 'Cycling & soft adventure',
        intro: ['Urban heritage loops or village edge tracks — traffic-aware riders only in old cores.'],
        activities: [
          mk(
            'gen-bike',
            'Heritage cycling & village loops',
            'Low impact',
            [
              'Helmet, lights, and a lock matter.',
              'Avoid midday heat Apr–Jun.',
            ],
          ),
        ],
      },
    ],
  }
}

const bySlug: Record<string, CityAdventureActivitiesBundle> = {
  ajmer: ajmerAdventure,
}

export function getCityAdventureActivitiesBySlug(slug: string, cityName: string): CityAdventureActivitiesBundle {
  return bySlug[slug] ?? genericAdventure(cityName, slug)
}
