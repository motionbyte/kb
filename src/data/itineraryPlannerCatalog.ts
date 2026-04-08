import { AJMER_EXTRA_PLACES, AJMER_PLACES_BY_SUB } from '@/data/itineraryAjmerPlaces'

/**
 * Visual activity tiles + per-category sub-options for the itinerary builder.
 */
export type TripStyleId = 'budget' | 'balanced' | 'luxury'

export type PlannerActivity = {
  id: string
  label: string
  shortLabel: string
  icon: string
  hint: string
}

export type PlannerSubOption = {
  id: string
  label: string
  parentId: string
}

/** Specific stops under a sub-option — user ticks where to go within that bucket. */
export type PlannerPlace = {
  id: string
  label: string
  subOptionId: string
}

export const TRIP_STYLES: Array<{ id: TripStyleId; label: string; hint: string }> = [
  { id: 'budget', label: 'Budget', hint: 'Smart spends, public transport where possible' },
  { id: 'balanced', label: 'Balanced', hint: 'Mix of comfort and value' },
  { id: 'luxury', label: 'Luxury', hint: 'Premium stays, private transfers, slower pace' },
]

export const PLANNER_ACTIVITIES: PlannerActivity[] = [
  { id: 'heritage', label: 'Heritage & forts', shortLabel: 'Heritage', icon: '🏛️', hint: 'Monuments, palaces, audio tours' },
  { id: 'spiritual', label: 'Temples & dargahs', shortLabel: 'Spiritual', icon: '🕌', hint: 'Dress codes & timing' },
  { id: 'food', label: 'Local food trail', shortLabel: 'Food', icon: '🍽️', hint: 'Thali, street, sweets' },
  { id: 'markets', label: 'Bazaars & shopping', shortLabel: 'Markets', icon: '🛍️', hint: 'Textiles, crafts, bargains' },
  { id: 'sunset', label: 'Sunset & viewpoints', shortLabel: 'Sunset', icon: '🌅', hint: 'Rooftops, lakes, ridges' },
  { id: 'nature', label: 'Lakes & nature', shortLabel: 'Nature', icon: '🌿', hint: 'Walks, ghats, reserves' },
  { id: 'photo', label: 'Photo / Instagram', shortLabel: 'Photos', icon: '📸', hint: 'Blue lanes, stepwells' },
  { id: 'culture', label: 'Shows & culture', shortLabel: 'Culture', icon: '🎭', hint: 'Folk, puppet, music' },
  { id: 'adventure', label: 'Desert / adventure', shortLabel: 'Adventure', icon: '🐪', hint: 'Safari, dunes, jeep' },
  { id: 'wellness', label: 'Slow / spa day', shortLabel: 'Wellness', icon: '🧘', hint: 'One unhurried day' },
  { id: 'daytrip', label: 'Day trip nearby', shortLabel: 'Day trip', icon: '🚌', hint: 'Pushkar, Abhaneri, etc.' },
  { id: 'night', label: 'Night walk / safe eve', shortLabel: 'Evening', icon: '🌙', hint: 'Lit monuments, safe pockets' },
]

/** Listed options when a category icon is opened — tick to select (per city). */
export const PLANNER_SUB_OPTIONS: Record<string, PlannerSubOption[]> = {
  heritage: [
    { id: 'heritage-forts', label: 'Forts & palace circuits', parentId: 'heritage' },
    { id: 'heritage-museums', label: 'Museums & galleries', parentId: 'heritage' },
    { id: 'heritage-walks', label: 'Heritage walking routes', parentId: 'heritage' },
    { id: 'heritage-audio', label: 'Audio / guided tours', parentId: 'heritage' },
  ],
  spiritual: [
    { id: 'spiritual-temples', label: 'Temple visits & aarti', parentId: 'spiritual' },
    { id: 'spiritual-dargah', label: 'Dargah / sufi circuits', parentId: 'spiritual' },
    { id: 'spiritual-festivals', label: 'Festival-day planning', parentId: 'spiritual' },
    { id: 'spiritual-quiet', label: 'Quiet prayer / meditation slots', parentId: 'spiritual' },
  ],
  food: [
    { id: 'food-thali', label: 'Rajasthani thali & local classics', parentId: 'food' },
    { id: 'food-street', label: 'Street food & snacks', parentId: 'food' },
    { id: 'food-sweets', label: 'Mithai & dessert stops', parentId: 'food' },
    { id: 'food-cafe', label: 'Cafés & rooftop dinners', parentId: 'food' },
  ],
  markets: [
    { id: 'markets-textile', label: 'Textiles & fabrics', parentId: 'markets' },
    { id: 'markets-crafts', label: 'Handicrafts & souvenirs', parentId: 'markets' },
    { id: 'markets-spices', label: 'Spices & dry goods', parentId: 'markets' },
    { id: 'markets-jewellery', label: 'Silver / lac / local jewellery', parentId: 'markets' },
  ],
  sunset: [
    { id: 'sunset-rooftop', label: 'Rooftop / café sunset', parentId: 'sunset' },
    { id: 'sunset-lake', label: 'Lake / ghat golden hour', parentId: 'sunset' },
    { id: 'sunset-fort', label: 'Fort rampart views', parentId: 'sunset' },
    { id: 'sunset-desert', label: 'Desert horizon line', parentId: 'sunset' },
  ],
  nature: [
    { id: 'nature-lakes', label: 'Lake walks & boating', parentId: 'nature' },
    { id: 'nature-gardens', label: 'Gardens & parks', parentId: 'nature' },
    { id: 'nature-wildlife', label: 'Wildlife / birding (where available)', parentId: 'nature' },
    { id: 'nature-hills', label: 'Hill viewpoints & short hikes', parentId: 'nature' },
  ],
  photo: [
    { id: 'photo-icons', label: 'Iconic landmarks & facades', parentId: 'photo' },
    { id: 'photo-lanes', label: 'Old city lanes & colours', parentId: 'photo' },
    { id: 'photo-stepwell', label: 'Stepwells & architectural frames', parentId: 'photo' },
    { id: 'photo-portrait', label: 'Local life (respectful shots)', parentId: 'photo' },
  ],
  culture: [
    { id: 'culture-folk', label: 'Folk dance / music shows', parentId: 'culture' },
    { id: 'culture-puppet', label: 'Puppet / traditional theatre', parentId: 'culture' },
    { id: 'culture-craft', label: 'Craft demos & workshops', parentId: 'culture' },
    { id: 'culture-festival', label: 'Festival events (if dates match)', parentId: 'culture' },
  ],
  adventure: [
    { id: 'adv-camel', label: 'Camel safari / short rides', parentId: 'adventure' },
    { id: 'adv-jeep', label: 'Jeep / dune bashing', parentId: 'adventure' },
    { id: 'adv-quad', label: 'ATV / adventure sports (where available)', parentId: 'adventure' },
    { id: 'adv-zipline', label: 'Zipline / rope activities', parentId: 'adventure' },
  ],
  wellness: [
    { id: 'well-spa', label: 'Spa / ayurveda (half day)', parentId: 'wellness' },
    { id: 'well-pool', label: 'Resort pool & slow day', parentId: 'wellness' },
    { id: 'well-yoga', label: 'Yoga / meditation slot', parentId: 'wellness' },
    { id: 'well-unplanned', label: 'One buffer “no plan” day', parentId: 'wellness' },
  ],
  daytrip: [
    { id: 'daytrip-nearby', label: 'Same-day nearby town', parentId: 'daytrip' },
    { id: 'daytrip-pushkar', label: 'Pushkar / holy town circuit', parentId: 'daytrip' },
    { id: 'daytrip-fort', label: 'Outlying fort / stepwell day', parentId: 'daytrip' },
    { id: 'daytrip-custom', label: 'Private driver day trip', parentId: 'daytrip' },
  ],
  night: [
    { id: 'night-lit', label: 'Lit monuments & safe evening stroll', parentId: 'night' },
    { id: 'night-food', label: 'Night food lanes (busy areas)', parentId: 'night' },
    { id: 'night-cultural', label: 'Evening cultural show', parentId: 'night' },
    { id: 'night-early', label: 'Early sleep / rest day', parentId: 'night' },
  ],
}

const subOptionIndex = new Map<string, PlannerSubOption>()
for (const list of Object.values(PLANNER_SUB_OPTIONS)) {
  for (const s of list) {
    subOptionIndex.set(s.id, s)
  }
}

function makePlacesForSubOption(s: PlannerSubOption): PlannerPlace[] {
  return [
    {
      id: `pl:${s.id}:0`,
      subOptionId: s.id,
      label: `${s.label} — main stop (iconic / ticketed where applicable)`,
    },
    {
      id: `pl:${s.id}:1`,
      subOptionId: s.id,
      label: `${s.label} — second stop (same area / half-day pair)`,
    },
    {
      id: `pl:${s.id}:2`,
      subOptionId: s.id,
      label: `${s.label} — quiet slot or early / late timing`,
    },
  ]
}

/** Places to pick after choosing a sub-category (3 per row). */
export const PLACES_BY_SUB_OPTION: Record<string, PlannerPlace[]> = (() => {
  const out: Record<string, PlannerPlace[]> = {}
  for (const list of Object.values(PLANNER_SUB_OPTIONS)) {
    for (const s of list) {
      out[s.id] = makePlacesForSubOption(s)
    }
  }
  return out
})()

const placeById = new Map<string, PlannerPlace>()
for (const list of Object.values(PLACES_BY_SUB_OPTION)) {
  for (const p of list) {
    placeById.set(p.id, p)
  }
}
for (const p of AJMER_EXTRA_PLACES) {
  placeById.set(p.id, p)
}

export function getPlaceById(id: string): PlannerPlace | undefined {
  return placeById.get(id)
}

export function placesForSubOption(subOptionId: string): PlannerPlace[] {
  return PLACES_BY_SUB_OPTION[subOptionId] ?? []
}

/** City-specific pins (e.g. Ajmer forts) when defined; otherwise generic three-line templates. */
export function placesForSubOptionInCity(citySlug: string, subOptionId: string): PlannerPlace[] {
  if (citySlug === 'ajmer') {
    const override = AJMER_PLACES_BY_SUB[subOptionId]
    if (override?.length) return override
  }
  return placesForSubOption(subOptionId)
}

export function getSubOptionById(id: string): PlannerSubOption | undefined {
  return subOptionIndex.get(id)
}

export function activityById(id: string): PlannerActivity | undefined {
  return PLANNER_ACTIVITIES.find((a) => a.id === id)
}

export function subsForCategory(categoryId: string): PlannerSubOption[] {
  return PLANNER_SUB_OPTIONS[categoryId] ?? []
}

/** True if any sub-option or place under this category is selected. */
export function categoryHasSelection(categoryId: string, selectedIds: string[]): boolean {
  for (const id of selectedIds) {
    const sub = getSubOptionById(id)
    if (sub?.parentId === categoryId) return true
    const pl = getPlaceById(id)
    if (pl) {
      const parentSub = getSubOptionById(pl.subOptionId)
      if (parentSub?.parentId === categoryId) return true
    }
  }
  return false
}
