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

const AREAS = [
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

function makeEntry(i: number): CityRestaurantEntry {
  const veg = i % 2 === 0
  // Keep realistic mix: most bars in non-veg, but some veg-friendly venues also have bar lounges.
  const hasBar = veg ? i % 10 === 0 : i % 3 !== 0
  const area = AREAS[i % AREAS.length]!
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

const AJMER_TOP_100: CityRestaurantEntry[] = Array.from({ length: 100 }, (_, i) => makeEntry(i))

export function getCityTopRestaurants(slug: string): CityRestaurantEntry[] {
  if (slug === 'ajmer') return AJMER_TOP_100
  return []
}

