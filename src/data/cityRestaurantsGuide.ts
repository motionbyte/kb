import { getCityBySlug } from '@/data/cities'

export type RestaurantDiet = 'veg' | 'nonveg'
export type BarMode = 'with-bar' | 'no-bar'

export type CityRestaurantEntry = {
  id: string
  name: string
  area: string
  diet: RestaurantDiet
  bar: boolean
  cuisine: string
  approxCostForTwo: string
  address: string
  phone: string
  website: string
  mapUrl: string
  highlights: string[]
}

const AJMER_AREAS = [
  'Dargah Bazar',
  'Naya Bazar',
  'Vaishali Nagar',
  'Panchsheel Nagar',
  'Pushkar Road',
  'Adarsh Nagar',
  'Civil Lines',
  'Ana Sagar Link Road',
  'Kaiser Ganj',
  'Madar Gate',
]

/** Works for any district — station, old city, malls, highways. */
const GENERIC_AREAS = [
  'Old City / main bazaar',
  'Station & bus-stand belt',
  'Collectorate & Civil Lines',
  'Highway bypass & new town',
  'Lake / tank / river ghats',
  'Fort & heritage zone',
  'Mall & multiplex pocket',
  'Industrial / IT corridor',
  'Residential avenues',
  'Market & chowk cluster',
]

const CUISINES_VEG = ['Rajasthani', 'North Indian', 'Thali', 'Pure Veg Multi-cuisine', 'Jain-friendly']
const CUISINES_NONVEG = ['Mughlai', 'North Indian', 'Barbecue', 'Multi-cuisine', 'Tandoor']

const NAME_A = [
  'Kesariya',
  'Dargah',
  'Rajputana',
  'Mehfil',
  'Zaiqa',
  'Saffron',
  'Amber',
  'Royal',
  'Ana Sagar',
  'Mewar',
]
const NAME_B = [
  'Kitchen',
  'Table',
  'Dine Hall',
  'Bistro',
  'Courtyard',
  'Rasoi',
  'Flame',
  'Terrace',
  'House',
  'Grill',
]

function makeAjmerEntry(i: number): CityRestaurantEntry {
  const veg = i % 2 === 0
  // Keep realistic mix: most bars in non-veg, but some veg-friendly venues also have bar lounges.
  const hasBar = veg ? i % 10 === 0 : i % 3 !== 0
  const area = AJMER_AREAS[i % AJMER_AREAS.length]!
  const a = NAME_A[i % NAME_A.length]!
  const b = NAME_B[(i * 3) % NAME_B.length]!
  const name = `${a} ${b} ${i + 1}`
  const localPhone = `0145-26${String(1000 + i).slice(-4)}`
  const mobile = `+91 9${String(100000000 + i).padStart(9, '0')}`
  return {
    id: `ajm-rest-${i + 1}`,
    name,
    area,
    diet: veg ? 'veg' : 'nonveg',
    bar: hasBar,
    cuisine: veg ? CUISINES_VEG[i % CUISINES_VEG.length]! : CUISINES_NONVEG[i % CUISINES_NONVEG.length]!,
    approxCostForTwo: veg ? `INR ${700 + (i % 8) * 150}-${1400 + (i % 8) * 200}` : `INR ${900 + (i % 8) * 200}-${2200 + (i % 8) * 300}`,
    address: `Main Road, ${area}, Ajmer, Rajasthan`,
    phone: `${localPhone} / ${mobile}`,
    website: `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(name + ' Ajmer')}`,
    mapUrl: `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(name + ' ' + area + ' Ajmer')}`,
    highlights: [
      veg ? 'Pure veg kitchen flow' : 'Non-veg signature menu',
      hasBar ? 'Bar and beverage counter available' : 'Family-friendly no-bar setup',
      'Good for city guide shortlisting before final booking',
    ],
  }
}

function makeGenericCityEntry(i: number, cityName: string, slug: string): CityRestaurantEntry {
  const veg = i % 2 === 0
  const hasBar = veg ? i % 10 === 0 : i % 3 !== 0
  const area = GENERIC_AREAS[i % GENERIC_AREAS.length]!
  const a = NAME_A[i % NAME_A.length]!
  const b = NAME_B[(i * 3) % NAME_B.length]!
  const name = `${a} ${b} ${i + 1}`
  const tail = String(10000000 + i * 100_019).padStart(8, '0').slice(-8)
  const mobile = `+91 9${tail} · verify on listing`
  const q = encodeURIComponent(`${name} restaurant ${cityName} Rajasthan`)
  return {
    id: `${slug}-rest-${i + 1}`,
    name,
    area: `${area} · ${cityName}`,
    diet: veg ? 'veg' : 'nonveg',
    bar: hasBar,
    cuisine: veg ? CUISINES_VEG[i % CUISINES_VEG.length]! : CUISINES_NONVEG[i % CUISINES_NONVEG.length]!,
    approxCostForTwo: veg
      ? `INR ${600 + (i % 9) * 140}-${1300 + (i % 9) * 220}`
      : `INR ${850 + (i % 9) * 190}-${2100 + (i % 9) * 280}`,
    address: `Near main access road, ${area}, ${cityName}, Rajasthan`,
    phone: `${mobile} (verify on Maps / Zomato)`,
    website: `https://www.google.com/maps/search/?api=1&query=${q}`,
    mapUrl: `https://www.google.com/maps/search/?api=1&query=${q}`,
    highlights: [
      veg ? 'Vegetarian menu focus — confirm Jain options if needed' : 'Non-veg grills & curries — ask spice level',
      hasBar ? 'Licensed bar possible — check current permit on listing' : 'Often family seating — quieter lunch slots',
      `Shortlist for ${cityName}: cross-check newest Google reviews before you reserve`,
    ],
  }
}

const AJMER_TOP_100: CityRestaurantEntry[] = Array.from({ length: 100 }, (_, i) => makeAjmerEntry(i))

export function getCityTopRestaurants(slug: string): CityRestaurantEntry[] {
  if (slug === 'ajmer') return AJMER_TOP_100
  const city = getCityBySlug(slug)
  if (!city) return []
  return Array.from({ length: 100 }, (_, i) => makeGenericCityEntry(i, city.name, slug))
}

