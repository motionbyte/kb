import { getCityBySlug } from '@/data/cities'
import type { City } from '@/types'

export type FoodCategoryKind = 'street-food' | 'cafes' | 'fine-dining' | 'local-cuisine'

export type FoodCategoryPlace = {
  id: string
  name: string
  area: string
  typeTag: string
  approxSpend: string
  addressHint: string
  phone?: string
  website?: string
  mapUrl: string
  reviewsUrl: string
  mustTry: string[]
  tips: string[]
}

export type FoodCategoryBundle = {
  title: string
  eyebrow: string
  lead: string
  problem: string[]
  solution: string[]
  why: string[]
  quickTiles: Array<{ label: string; value: string }>
  placesTitle: string
  placesLead: string
  places: FoodCategoryPlace[]
}

type CityFoodGuide = Record<FoodCategoryKind, FoodCategoryBundle>

const AJMER_FOOD_GUIDE: CityFoodGuide = {
  'street-food': {
    title: 'Street food',
    eyebrow: 'Food & Dining',
    lead:
      'Ajmer street food is amazing but you need hygiene and crowd-timing judgement. This page helps you eat boldly but safely.',
    problem: [
      'Tourists struggle to pick hygienic stalls vs risky setups.',
      'Peak-time crowd confusion leads to long waits and rushed decisions.',
      'Price confusion for first-time visitors at crowded points.',
    ],
    solution: [
      'Crowd-smart picks with map/review links.',
      'Approx spend guidance so overcharging chances drop.',
      'What to try + practical food safety tips per place.',
    ],
    why: ['Street food is a core local experience.', 'If this works well, daily app usage goes up naturally.'],
    quickTiles: [
      { label: 'Best time', value: 'Evening rush' },
      { label: 'Rule', value: 'High turnover stalls' },
      { label: 'Budget', value: 'Low-medium spend' },
      { label: 'Safety', value: 'Cooked-hot first' },
    ],
    placesTitle: 'Street food picks (Ajmer)',
    placesLead: 'Shortlist + verify recent reviews/photos before going.',
    places: [
      {
        id: 'sf-dargah-bazar',
        name: 'Dargah Bazar snack lane',
        area: 'Dargah zone',
        typeTag: 'Busy street-food strip',
        approxSpend: 'INR 80-300 per person',
        addressHint: 'Dargah Bazar main lane, Ajmer',
        mapUrl: 'https://www.google.com/maps/search/?api=1&query=Dargah%20Bazar%20Ajmer%20street%20food',
        reviewsUrl: 'https://www.google.com/maps/search/?api=1&query=Dargah%20Bazar%20Ajmer%20reviews',
        mustTry: ['Kachori', 'Samosa', 'Local sweets'],
        tips: ['Pick stalls with quick turnover', 'Avoid cut-fruit in peak heat'],
      },
      {
        id: 'sf-madar-gate',
        name: 'Madar Gate evening carts',
        area: 'Madar Gate',
        typeTag: 'Evening chaat belt',
        approxSpend: 'INR 100-350 per person',
        addressHint: 'Madar Gate market stretch, Ajmer',
        mapUrl: 'https://www.google.com/maps/search/?api=1&query=Madar%20Gate%20Ajmer%20chaat',
        reviewsUrl: 'https://www.google.com/maps/search/?api=1&query=Madar%20Gate%20Ajmer%20food%20reviews',
        mustTry: ['Chaat', 'Pakoda', 'Kulfi'],
        tips: ['Carry small change', 'Ask price before extra toppings'],
      },
      {
        id: 'sf-naya-bazar',
        name: 'Naya Bazar quick bites',
        area: 'Naya Bazar',
        typeTag: 'Market-side stalls',
        approxSpend: 'INR 70-250 per person',
        addressHint: 'Naya Bazar central lanes',
        mapUrl: 'https://www.google.com/maps/search/?api=1&query=Naya%20Bazar%20Ajmer%20food',
        reviewsUrl: 'https://www.google.com/maps/search/?api=1&query=Naya%20Bazar%20Ajmer%20food%20reviews',
        mustTry: ['Mirchi vada', 'Poha', 'Jalebi'],
        tips: ['Morning snacks often fresher', 'Prefer visible oil-change hygiene'],
      },
    ],
  },
  cafes: {
    title: 'Cafes',
    eyebrow: 'Food & Dining',
    lead:
      'For breaks, remote-work pockets, and relaxed conversations. Choose cafes by vibe, seating, and reliability.',
    problem: [
      'Tourists find it hard to identify work-friendly cafes vs quick-serve ones.',
      'Inconsistent Wi-Fi/power and crowded seating reduce comfort.',
      'Menu expectations mismatch (coffee-focused vs full-meal cafes).',
    ],
    solution: [
      'Cafe shortlist by vibe and spend.',
      'Map + review links for live atmosphere checks.',
      'Practical tips for seating and work hours.',
    ],
    why: ['Cafes are high-repeat touchpoints during city exploration.', 'Great cafe discovery drives longer session retention.'],
    quickTiles: [
      { label: 'Vibe', value: 'Chill / Work / Social' },
      { label: 'Spend', value: 'Medium' },
      { label: 'Use case', value: 'Breaks + planning' },
      { label: 'Tip', value: 'Check latest photos' },
    ],
    placesTitle: 'Cafe picks (Ajmer + Pushkar side)',
    placesLead: 'Use reviews to confirm current ambience and seating.',
    places: [
      {
        id: 'cf-cafe-lake',
        name: 'Lake-view cafe cluster',
        area: 'Ana Sagar side',
        typeTag: 'View cafe',
        approxSpend: 'INR 300-900 per person',
        addressHint: 'Ana Sagar link-road cafes',
        mapUrl: 'https://www.google.com/maps/search/?api=1&query=Ana%20Sagar%20Ajmer%20cafe',
        reviewsUrl: 'https://www.google.com/maps/search/?api=1&query=Ana%20Sagar%20Ajmer%20cafe%20reviews',
        mustTry: ['Cold coffee', 'Sandwiches', 'Desserts'],
        tips: ['Sunset hours are crowded', 'Request quieter corner if working'],
      },
      {
        id: 'cf-pushkar-cafe-belt',
        name: 'Pushkar cafe belt',
        area: 'Pushkar (near Ajmer)',
        typeTag: 'Backpacker cafe cluster',
        approxSpend: 'INR 250-800 per person',
        addressHint: 'Pushkar market/cafe lanes',
        mapUrl: 'https://www.google.com/maps/search/?api=1&query=Pushkar%20cafes',
        reviewsUrl: 'https://www.google.com/maps/search/?api=1&query=Pushkar%20cafes%20reviews',
        mustTry: ['Breakfast platters', 'Falafel bowls', 'Specialty coffee'],
        tips: ['Good for long sits', 'Ask for charger seating in advance'],
      },
      {
        id: 'cf-vaishali-cafe',
        name: 'Vaishali Nagar neighborhood cafes',
        area: 'Vaishali Nagar',
        typeTag: 'City cafe',
        approxSpend: 'INR 250-700 per person',
        addressHint: 'Vaishali Nagar cafe blocks',
        mapUrl: 'https://www.google.com/maps/search/?api=1&query=Vaishali%20Nagar%20Ajmer%20cafe',
        reviewsUrl: 'https://www.google.com/maps/search/?api=1&query=Vaishali%20Nagar%20Ajmer%20cafe%20reviews',
        mustTry: ['Pasta', 'Bakes', 'Shakes'],
        tips: ['Better for daytime meetings', 'Check parking before peak evenings'],
      },
    ],
  },
  'fine-dining': {
    title: 'Fine dining',
    eyebrow: 'Food & Dining',
    lead:
      'For premium meals, dates, and celebration dinners. Focus on reservation clarity, net spend, and ambience fit.',
    problem: [
      'Tourists pay premium without clear expectation of service and inclusions.',
      'Reservation and table-location mismatches affect experience.',
      'Bill surprises happen through taxes/service additions and upselling.',
    ],
    solution: [
      'Premium shortlist with spend ranges and map/review access.',
      'Reservation-first checklist.',
      'Bill transparency guidance before ordering.',
    ],
    why: ['High-intent diners are willing to spend for certainty.', 'Transparent fine-dining choices improve trust and conversion.'],
    quickTiles: [
      { label: 'Book first', value: 'Table reservation' },
      { label: 'Spend', value: 'Medium-high' },
      { label: 'Best for', value: 'Special nights' },
      { label: 'Rule', value: 'Confirm final bill format' },
    ],
    placesTitle: 'Fine-dining picks (Ajmer region)',
    placesLead: 'For premium plans, confirm reservation and expected spend before arrival.',
    places: [
      {
        id: 'fd-pratap-mahal-dining',
        name: 'Pratap Mahal dining spaces',
        area: 'Pushkar Bypass',
        typeTag: 'Luxury dining',
        approxSpend: 'INR 2000-6000 per couple',
        addressHint: 'Pratap Mahal / Pushkar Bypass zone',
        mapUrl: 'https://www.google.com/maps/search/?api=1&query=Pratap%20Mahal%20Ajmer%20dining',
        reviewsUrl: 'https://www.google.com/maps/search/?api=1&query=Pratap%20Mahal%20Ajmer%20restaurant%20reviews',
        mustTry: ['Chef specials', 'Rajasthani tasting options'],
        tips: ['Reserve ahead on weekends', 'Confirm tax/service components'],
      },
      {
        id: 'fd-resort-dining-pushkar',
        name: 'Resort fine-dining venues (Pushkar side)',
        area: 'Pushkar luxury belt',
        typeTag: 'Resort fine dining',
        approxSpend: 'INR 1800-5200 per couple',
        addressHint: 'Pushkar resort zone',
        mapUrl: 'https://www.google.com/maps/search/?api=1&query=Pushkar%20fine%20dining',
        reviewsUrl: 'https://www.google.com/maps/search/?api=1&query=Pushkar%20fine%20dining%20reviews',
        mustTry: ['Multi-course meals', 'Rooftop/ambience dining'],
        tips: ['Ask if outside guests are allowed', 'Check dress expectations if any'],
      },
      {
        id: 'fd-city-premium',
        name: 'City premium dining rooms',
        area: 'Civil Lines / Panchsheel',
        typeTag: 'Premium city dining',
        approxSpend: 'INR 1400-4000 per couple',
        addressHint: 'Civil Lines-Panchsheel premium pockets',
        mapUrl: 'https://www.google.com/maps/search/?api=1&query=Ajmer%20premium%20dining',
        reviewsUrl: 'https://www.google.com/maps/search/?api=1&query=Ajmer%20premium%20dining%20reviews',
        mustTry: ['Tandoor platters', 'Chef curries', 'Dessert course'],
        tips: ['Confirm live-music days if you prefer quiet dining'],
      },
    ],
  },
  'local-cuisine': {
    title: 'Local cuisine guide',
    eyebrow: 'Food & Dining',
    lead:
      'If you want authentic Rajasthan flavours, this guide helps you prioritize signature dishes and where to try them confidently.',
    problem: [
      'Travellers don’t know what is truly local vs generic menu filler.',
      'Spice levels and prep styles vary heavily by place.',
      'No clear “first-time must-try” roadmap.',
    ],
    solution: [
      'Dish-first approach with practical local recommendations.',
      'Balanced options for mild-medium-spicy preferences.',
      'Cultural context with practical ordering tips.',
    ],
    why: ['Local food builds cultural memory.', 'This is one of the strongest “shareable travel moments”.'],
    quickTiles: [
      { label: 'Must try', value: 'Dal Baati Churma' },
      { label: 'Snack hero', value: 'Kachori / Mirchi vada' },
      { label: 'Sweet', value: 'Ghevar / Malpua' },
      { label: 'Tip', value: 'Start mild, scale spice' },
    ],
    placesTitle: 'Local cuisine roadmap (Ajmer)',
    placesLead: 'Use this as a practical tasting sequence through your stay.',
    places: [
      {
        id: 'lc-thali-spots',
        name: 'Traditional thali venues',
        area: 'Central Ajmer',
        typeTag: 'Rajasthani thali',
        approxSpend: 'INR 300-900 per person',
        addressHint: 'Old city and central dining pockets',
        mapUrl: 'https://www.google.com/maps/search/?api=1&query=Ajmer%20Rajasthani%20thali',
        reviewsUrl: 'https://www.google.com/maps/search/?api=1&query=Ajmer%20Rajasthani%20thali%20reviews',
        mustTry: ['Dal Baati Churma', 'Gatte ki sabzi'],
        tips: ['Ask for ghee level if you prefer lighter meal'],
      },
      {
        id: 'lc-snack-sweets',
        name: 'Kachori + sweets route',
        area: 'Bazaar lanes',
        typeTag: 'Snacks + mithai',
        approxSpend: 'INR 100-350 per person',
        addressHint: 'Dargah Bazar / Naya Bazar stretches',
        mapUrl: 'https://www.google.com/maps/search/?api=1&query=Ajmer%20kachori%20sweet%20shops',
        reviewsUrl: 'https://www.google.com/maps/search/?api=1&query=Ajmer%20kachori%20shops%20reviews',
        mustTry: ['Pyaaz kachori', 'Ghevar', 'Rabri'],
        tips: ['Best in fresh batches; ask what is made today'],
      },
      {
        id: 'lc-pushkar-local',
        name: 'Pushkar local veg classics',
        area: 'Pushkar',
        typeTag: 'Local veg cuisine',
        approxSpend: 'INR 250-800 per person',
        addressHint: 'Pushkar market food lanes',
        mapUrl: 'https://www.google.com/maps/search/?api=1&query=Pushkar%20local%20veg%20food',
        reviewsUrl: 'https://www.google.com/maps/search/?api=1&query=Pushkar%20local%20food%20reviews',
        mustTry: ['Malpua', 'Local thali variants', 'Seasonal sweets'],
        tips: ['Plan this as half-day food walk with hydration breaks'],
      },
    ],
  },
}

function mqQuery(q: string): string {
  return `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(q)}`
}

type CityFoodCtx = Pick<City, 'name' | 'slug' | 'region'>

const genericFoodGuideCache = new Map<string, CityFoodGuide>()

function buildGenericCityFoodGuide(ctx: CityFoodCtx): CityFoodGuide {
  const cached = genericFoodGuideCache.get(ctx.slug)
  if (cached) return cached

  const cn = ctx.name
  const rg = ctx.region
  const slug = ctx.slug

  const street: FoodCategoryBundle = {
    title: 'Street food',
    eyebrow: 'Food & Dining',
    lead: `${cn} street food is where smoke, spice, and crowd energy meet — but hygiene and timing matter as much as taste. This guide helps you eat boldly across ${rg} while staying practical about oil, water, and peak-hour chaos.`,
    problem: [
      `Visitors struggle to tell high-turnover stalls (usually safer) from slow or reheated setups near ${cn} markets and tourist lanes.`,
      'Evening rush around bazaars and stations means long queues, rushed orders, and easy mistakes on spice level or portion size.',
      'Carts rarely publish uniform prices — first-time guests can overpay or get smaller portions at the busiest corners.',
    ],
    solution: [
      'Four searchable belts — old city, transport hub, highway dhaba, and central market — each with Map + review links for live hygiene signals.',
      'Approx spend bands so you can compare without awkward guesswork.',
      'Must-try dishes and safety tips tuned for Rajasthani snacks: fried items, chutneys, and mithai.',
    ],
    why: [
      `${cn} street flavours are often the most shared travel memory.`,
      'When street picks feel trustworthy, people stay longer and explore more of the district.',
    ],
    quickTiles: [
      { label: 'Best window', value: 'Evening 6–9 pm' },
      { label: 'Rule', value: 'Busy = fresher' },
      { label: 'Budget', value: '₹60–350 / head' },
      { label: 'Safety', value: 'Cooked hot' },
    ],
    placesTitle: `Street food picks (${cn})`,
    placesLead: `Shortlist stalls around ${cn}, then sort Google Maps reviews by **Newest** — check oil clarity, turnover, and recent prep photos.`,
    places: [
      {
        id: `${slug}-sf-old-bazaar`,
        name: 'Old city & main bazaar evening strip',
        area: 'Old city core',
        typeTag: 'High-turnover snack lane',
        approxSpend: 'INR 70–320 per person',
        addressHint: `Dense market and temple-adjacent pockets, ${cn}`,
        mapUrl: mqQuery(`${cn} old city street food bazaar Rajasthan`),
        reviewsUrl: mqQuery(`${cn} old city street food reviews`),
        mustTry: ['Pyaaz kachori', 'Mirchi vada', 'Jalebi / imarti'],
        tips: [
          'Choose stalls where the kadhai keeps moving and oil looks clean',
          'Carry small notes; skip peeled fruit or room-temperature chutney if your stomach is sensitive',
        ],
      },
      {
        id: `${slug}-sf-transport`,
        name: 'Station / bus stand chaat belt',
        area: 'Transport hub',
        typeTag: 'Commuter chaat & quick meals',
        approxSpend: 'INR 80–380 per person',
        addressHint: `Approach roads to railway station or main bus stand, ${cn}`,
        mapUrl: mqQuery(`${cn} railway station street food chaat`),
        reviewsUrl: mqQuery(`${cn} bus stand chaat food reviews`),
        mustTry: ['Aloo tikki chaat', 'Chole kulche', 'Sweet lassi'],
        tips: [
          'Handy before connections — confirm wait time before ordering layered chaat',
          'Prefer dry plates; avoid ice of unknown source in peak summer',
        ],
      },
      {
        id: `${slug}-sf-highway`,
        name: 'Highway & ring-road dhaba cluster',
        area: 'NH / outskirts',
        typeTag: 'Tandoor dhabas & truck stops',
        approxSpend: 'INR 150–450 per person',
        addressHint: `NH entry / ring-road belts near ${cn}`,
        mapUrl: mqQuery(`${cn} highway dhaba food`),
        reviewsUrl: mqQuery(`${cn} dhaba restaurant reviews`),
        mustTry: ['Tandoori roti + dal', 'Paneer tikka', 'Kadhai milk tea'],
        tips: [
          'Sit-down dhabas often safer than curbside when you want calmer pacing',
          'Weekend nights: kitchens can run low on breads — order early',
        ],
      },
      {
        id: `${slug}-sf-central`,
        name: 'Central market & haat lane',
        area: 'City centre',
        typeTag: 'Market-day snacks',
        approxSpend: 'INR 60–300 per person',
        addressHint: `Main municipal market / weekly haat lanes, ${cn}`,
        mapUrl: mqQuery(`${cn} central market street food stalls`),
        reviewsUrl: mqQuery(`${cn} market food stalls reviews`),
        mustTry: ['Samosa', 'Namkeen mix', 'Seasonal mithai'],
        tips: [
          'Ask what was fried or steamed today — freshness beats fame',
          'Pair heavy fried snacks with chaas or nimbu soda instead of multiple sweet stops in a row',
        ],
      },
    ],
  }

  const cafes: FoodCategoryBundle = {
    title: 'Cafes',
    eyebrow: 'Food & Dining',
    lead: `Cafes in ${cn} are your pause button — remote-work blocks, date corners, and caffeine resets between fort walks and bazaar runs. Choose by seating, power, and how long you actually want to stay.`,
    problem: [
      '“Cafe” listings mix quick-serve bakeries with real sit-down spaces — photos rarely show noise or plug access.',
      'Wi‑Fi and charging can be inconsistent; some places turn music loud after sunset.',
      'Menu expectations drift: espresso-forward vs full-meal cafes — bill and wait times differ a lot.',
    ],
    solution: [
      'Four vibe buckets — mall pocket, Civil Lines, heritage lane, and view / sunset belt — with Map searches for ${cn}.',
      'Spend bands so you can match cafe tier to your day plan.',
      'Practical tips for work blocks, families, and couples.',
    ],
    why: [
      'Cafes are high-repeat touchpoints during city exploration.',
      'Good cafe discovery keeps people in-app between sightseeing hops.',
    ],
    quickTiles: [
      { label: 'Vibe', value: 'Work / date / family' },
      { label: 'Spend', value: '₹200–900 / head' },
      { label: 'Check', value: 'Newest photos' },
      { label: 'Tip', value: 'Ask for quiet zone' },
    ],
    placesTitle: `Cafe picks (${cn})`,
    placesLead: `Use reviews to confirm current ambience, AC vs open seating, and whether laptops are welcome during peak hours.`,
    places: [
      {
        id: `${slug}-cf-mall`,
        name: 'Mall & multiplex cafe pocket',
        area: 'Commercial hub',
        typeTag: 'Chain + indie cafes',
        approxSpend: 'INR 250–850 per person',
        addressHint: `Mall food courts and adjoining cafe strips, ${cn}`,
        mapUrl: mqQuery(`${cn} mall cafe coffee`),
        reviewsUrl: mqQuery(`${cn} mall cafe reviews`),
        mustTry: ['Cold coffee', 'Brownie sundae', 'Fusion sandwiches'],
        tips: [
          'Predictable AC and seating — good for families and heat escape',
          'Parking and closing times follow mall hours — plan evening exit',
        ],
      },
      {
        id: `${slug}-cf-civil`,
        name: 'Civil Lines / cantonment coffee belt',
        area: 'Civil Lines',
        typeTag: 'Neighbourhood cafes',
        approxSpend: 'INR 220–750 per person',
        addressHint: `Tree-lined roads and institutional pockets, ${cn}`,
        mapUrl: mqQuery(`${cn} Civil Lines cafe`),
        reviewsUrl: mqQuery(`${cn} Civil Lines coffee shop reviews`),
        mustTry: ['Filter / pour-over', 'All-day breakfast', 'Chef bakes'],
        tips: [
          'Often quieter weekday afternoons — better for calls or reading',
          'Check if outdoor seating gets traffic noise at rush hour',
        ],
      },
      {
        id: `${slug}-cf-heritage`,
        name: 'Heritage lane & haveli cafes',
        area: 'Old city',
        typeTag: 'Courtyard / rooftop cafe',
        approxSpend: 'INR 300–950 per person',
        addressHint: `Restored lanes and heritage walks, ${cn}`,
        mapUrl: mqQuery(`${cn} heritage cafe rooftop`),
        reviewsUrl: mqQuery(`${cn} heritage cafe reviews`),
        mustTry: ['Masala chai', 'Local thali-light plates', 'Seasonal coolers'],
        tips: [
          'Staircases can be steep — ask for ground seating if needed',
          'Sunset slots fill fast — message ahead on weekends',
        ],
      },
      {
        id: `${slug}-cf-view`,
        name: 'Lake / garden / sunset view cafes',
        area: 'Scenic belt',
        typeTag: 'View seating',
        approxSpend: 'INR 280–900 per person',
        addressHint: `Waterfront, ridge, or large public garden edges near ${cn}`,
        mapUrl: mqQuery(`${cn} lake view cafe sunset`),
        reviewsUrl: mqQuery(`${cn} rooftop cafe reviews`),
        mustTry: ['Sunset coffee', 'Grilled snacks', 'Mocktails'],
        tips: [
          'Wind and glare can ruin laptop work — scout seat before ordering',
          'Carry a layer if sitting open-air after dark in winter',
        ],
      },
    ],
  }

  const fine: FoodCategoryBundle = {
    title: 'Fine dining',
    eyebrow: 'Food & Dining',
    lead: `Fine dining around ${cn} is for celebrations, slow meals, and clear service — but you need reservation discipline and bill literacy so premium spend matches premium calm.`,
    problem: [
      'Guests pay cover or chef-table prices without clarity on taxes, service, and bottled water defaults.',
      '“Premium” tags appear on loud banquet halls — ambience may not match a quiet dinner.',
      'Table location requests (window, terrace) are often lost without written confirmation.',
    ],
    solution: [
      'Four premium archetypes — hotel dining, rooftop, high-street grill, and resort / outskirts — with Maps search for ${cn}.',
      'Spend ranges per couple so you can align expectations before dressing up.',
      'Reservation and bill checkpoints tailored to Indian fine-dining norms.',
    ],
    why: [
      'High-intent diners trade money for certainty — transparent picks build trust.',
      'Strong fine-dining guidance reduces refund/support noise after trips.',
    ],
    quickTiles: [
      { label: 'Book', value: 'Table + slot' },
      { label: 'Spend', value: '₹1.4k–6k couple' },
      { label: 'Ask', value: 'Tax + service' },
      { label: 'Dress', value: 'Smart casual+' },
    ],
    placesTitle: `Fine-dining picks (${cn})`,
    placesLead: `Confirm reservation, terrace availability, and whether live music suits your evening — sort reviews by **Newest** for menu changes.`,
    places: [
      {
        id: `${slug}-fd-hotel`,
        name: 'Five-star / luxury hotel dining',
        area: 'Premium hotel zone',
        typeTag: 'Hotel restaurant',
        approxSpend: 'INR 2200–6500 per couple',
        addressHint: `Flagship hotels and convention pockets, ${cn}`,
        mapUrl: mqQuery(`${cn} five star hotel restaurant fine dining`),
        reviewsUrl: mqQuery(`${cn} luxury hotel dining reviews`),
        mustTry: ['Chef tasting menus', 'Kebab platters', 'Rajasthani mains'],
        tips: [
          'Ask for inclusive pricing or a sample bill format before ordering chef specials',
          'Buffet vs à la carte — confirm which matches your pace',
        ],
      },
      {
        id: `${slug}-fd-rooftop`,
        name: 'Rooftop & skyline dining',
        area: 'City centre / ridge',
        typeTag: 'Rooftop premium',
        approxSpend: 'INR 1800–5200 per couple',
        addressHint: `High-rise hospitality and heritage rooftops, ${cn}`,
        mapUrl: mqQuery(`${cn} rooftop fine dining restaurant`),
        reviewsUrl: mqQuery(`${cn} rooftop restaurant reviews`),
        mustTry: ['Grills', 'Small plates', 'Craft mocktails'],
        tips: [
          'Wind and noise vary — ask for wind-screened tables if available',
          'Book blue hour if you want photos without harsh midday heat',
        ],
      },
      {
        id: `${slug}-fd-highstreet`,
        name: 'High-street premium & grill rooms',
        area: 'MG Road / central commercial',
        typeTag: 'Premium standalone',
        approxSpend: 'INR 1600–4800 per couple',
        addressHint: `Main commercial spine and upscale retail belts, ${cn}`,
        mapUrl: mqQuery(`${cn} best fine dining restaurant`),
        reviewsUrl: mqQuery(`${cn} premium restaurant reviews`),
        mustTry: ['Tandoor platters', 'Continental mains', 'Dessert tasting'],
        tips: [
          'Parking can be tight — use mall or hotel stacks when bundled',
          'Weekends: confirm waiting policy if you arrive without booking',
        ],
      },
      {
        id: `${slug}-fd-resort`,
        name: 'Resort & outskirts celebration dining',
        area: 'Outskirts',
        typeTag: 'Destination dining',
        approxSpend: 'INR 2000–7000 per couple',
        addressHint: `Resort roads and landscaped properties beyond city core, ${cn}`,
        mapUrl: mqQuery(`${cn} resort fine dining restaurant`),
        reviewsUrl: mqQuery(`${cn} resort restaurant reviews`),
        mustTry: ['Slow-roasted mains', 'Thali experiences', 'Chef desserts'],
        tips: [
          'Factor travel time — kitchens may close earlier than city restaurants',
          'Ask if day visitors are allowed without room stay',
        ],
      },
    ],
  }

  const local: FoodCategoryBundle = {
    title: 'Local cuisine guide',
    eyebrow: 'Food & Dining',
    lead: `Rajasthani food in ${cn} is more than “spicy” — it is ghee, millets, lentils, and desert-smart preservation. This roadmap helps you taste signature dishes without ordering blind.`,
    problem: [
      'Menus list “Rajasthani thali” everywhere — quality swings between homestyle and banquet filler.',
      'Spice and ghee levels vary; guests unused to heat may struggle without guidance.',
      'Sweet-heavy meals (churma, malpua) can feel heavy if sequenced wrong.',
    ],
    solution: [
      'Dish-first sequencing: snacks → breads → mains → sweets.',
      'Four discovery tracks — thali houses, snack trail, dal–baati specialists, and mithai shops — anchored to ${cn}.',
      'Ordering language so servers can tone spice or ghee without losing flavour.',
    ],
    why: [
      'Local cuisine is the story travellers repeat — it anchors memory of ${rg}.',
      'When guests eat confidently, they recommend the city, not just the monument list.',
    ],
    quickTiles: [
      { label: 'Hero', value: 'Dal Baati Churma' },
      { label: 'Snack', value: 'Kachori / mirchi' },
      { label: 'Sweet', value: 'Ghevar / malpua' },
      { label: 'Tip', value: 'Start mild' },
    ],
    placesTitle: `Local cuisine roadmap (${cn})`,
    placesLead: `Treat this as a tasting sequence across your stay — mix heavy dinners with lighter lunches and hydration.`,
    places: [
      {
        id: `${slug}-lc-thali`,
        name: 'Rajasthani thali & family dining rooms',
        area: 'City-wide',
        typeTag: 'Thali / regional meals',
        approxSpend: 'INR 350–950 per person',
        addressHint: `Established thali names and old-city dining rooms, ${cn}`,
        mapUrl: mqQuery(`${cn} Rajasthani thali restaurant`),
        reviewsUrl: mqQuery(`${cn} Rajasthani thali reviews`),
        mustTry: ['Dal baati churma', 'Gatte ki sabzi', 'Ker sangri'],
        tips: [
          'Ask for “medium spice” if you want flavour without fire',
          'Split one extra bread basket instead of over-ordering ghee-forward items',
        ],
      },
      {
        id: `${slug}-lc-snacks`,
        name: 'Kachori, mirchi vada & namkeen trail',
        area: 'Bazaar belt',
        typeTag: 'Snacks & savouries',
        approxSpend: 'INR 80–380 per person',
        addressHint: `Morning and evening bazaar lanes, ${cn}`,
        mapUrl: mqQuery(`${cn} famous kachori namkeen shop`),
        reviewsUrl: mqQuery(`${cn} kachori sweet shop reviews`),
        mustTry: ['Pyaaz kachori', 'Mirchi vada', 'Aloo bhujia / sev'],
        tips: [
          'Morning batches are often crispiest — evenings can be oil-heavy',
          'Buy smaller portions from two shops instead of one overloaded plate',
        ],
      },
      {
        id: `${slug}-lc-dalbaati`,
        name: 'Dal baati & homestyle Rajasthani kitchens',
        area: 'Neighbourhood favourites',
        typeTag: 'Homestyle / speciality',
        approxSpend: 'INR 400–1100 per person',
        addressHint: `Residential dining pockets praised in local reviews, ${cn}`,
        mapUrl: mqQuery(`${cn} dal baati churma restaurant`),
        reviewsUrl: mqQuery(`${cn} dal baati restaurant reviews`),
        mustTry: ['Bafla baati', 'Panchmel dal', 'Churma crumble'],
        tips: [
          'If baati feels dry, ask for extra dal or lasoon chutney on the side',
          'Good option before a light day — it is filling',
        ],
      },
      {
        id: `${slug}-lc-mithai`,
        name: 'Mithai & dessert counters',
        area: 'Sweet shops',
        typeTag: 'Seasonal sweets',
        approxSpend: 'INR 120–650 per person',
        addressHint: `Established mithai houses and festival-season counters, ${cn}`,
        mapUrl: mqQuery(`${cn} best sweet shop ghevar malpua`),
        reviewsUrl: mqQuery(`${cn} sweet shop reviews`),
        mustTry: ['Ghevar', 'Malpua', 'Rabri / basundi'],
        tips: [
          'Festival weeks bring fresher ghevar — off-season, ask what was made today',
          'Pack sweets for travel only with stable packaging; cream items need cooling',
        ],
      },
    ],
  }

  const guide: CityFoodGuide = {
    'street-food': street,
    cafes,
    'fine-dining': fine,
    'local-cuisine': local,
  }
  genericFoodGuideCache.set(slug, guide)
  return guide
}

export function getCityFoodCategoryGuide(slug: string, kind: FoodCategoryKind): FoodCategoryBundle {
  if (slug === 'ajmer') return AJMER_FOOD_GUIDE[kind]
  const city = getCityBySlug(slug)
  const ctx: CityFoodCtx = city
    ? { name: city.name, slug: city.slug, region: city.region }
    : {
        name: slug
          .split('-')
          .map((w) => w.charAt(0).toUpperCase() + w.slice(1))
          .join(' '),
        slug,
        region: 'Rajasthan',
      }
  return buildGenericCityFoodGuide(ctx)[kind]
}
