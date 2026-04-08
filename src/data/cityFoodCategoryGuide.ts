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

export function getCityFoodCategoryGuide(slug: string, kind: FoodCategoryKind): FoodCategoryBundle {
  if (slug === 'ajmer') return AJMER_FOOD_GUIDE[kind]
  return AJMER_FOOD_GUIDE[kind]
}

