import type { PlannerPlace } from '@/data/itineraryPlannerCatalog'
import { AJMER_EXTRA_PLACES, AJMER_PLACES_BY_SUB } from '@/data/itineraryPlaces/ajmer'
import { ALWAR_PLACES_BY_SUB } from '@/data/itineraryPlaces/detailed/alwar'
import { JAIPUR_PLACES_BY_SUB } from '@/data/itineraryPlaces/detailed/jaipur'
import { UDAIPUR_PLACES_BY_SUB } from '@/data/itineraryPlaces/detailed/udaipur'
import { JODHPUR_PLACES_BY_SUB } from '@/data/itineraryPlaces/detailed/jodhpur'
import { JAISALMER_PLACES_BY_SUB } from '@/data/itineraryPlaces/detailed/jaisalmer'
import { BIKANER_PLACES_BY_SUB } from '@/data/itineraryPlaces/detailed/bikaner'
import { BANSWARA_PLACES_BY_SUB, BARAN_PLACES_BY_SUB } from '@/data/itineraryPlaces/detailed/remainingCitiesA'
import { CITY_KEYWORD_PIN_LIST } from '@/data/itineraryPlaces/cityKeywordRegistry'
import { placeMapFromKeywords } from '@/data/itineraryPlaces/cityKeywordPins'

/** Hand-authored Ajmer-depth modules (no registry template for these slugs). */
const HAND_AUTHORED_SLUGS = new Set([
  'ajmer',
  'alwar',
  'jaipur',
  'udaipur',
  'jodhpur',
  'jaisalmer',
  'bikaner',
  'banswara',
  'baran',
])

const fromKeywordRegistry: Record<string, Record<string, PlannerPlace[]>> = Object.fromEntries(
  CITY_KEYWORD_PIN_LIST.filter((c) => !HAND_AUTHORED_SLUGS.has(c.slug)).map((spec) => [
    spec.slug,
    placeMapFromKeywords(spec),
  ]),
)

/** Every city slug: hand modules + enriched registry rows (6 pins/sub, planner note). */
export const ITINERARY_PLACES_BY_CITY: Record<string, Record<string, PlannerPlace[]>> = {
  ajmer: AJMER_PLACES_BY_SUB as Record<string, PlannerPlace[]>,
  alwar: ALWAR_PLACES_BY_SUB,
  jaipur: JAIPUR_PLACES_BY_SUB,
  udaipur: UDAIPUR_PLACES_BY_SUB,
  jodhpur: JODHPUR_PLACES_BY_SUB,
  jaisalmer: JAISALMER_PLACES_BY_SUB,
  bikaner: BIKANER_PLACES_BY_SUB,
  banswara: BANSWARA_PLACES_BY_SUB,
  baran: BARAN_PLACES_BY_SUB,
  ...fromKeywordRegistry,
}

/** Flattened for getPlaceById / share links. */
export const ALL_ITINERARY_EXTRA_PLACES: PlannerPlace[] = [
  ...AJMER_EXTRA_PLACES,
  ...Object.values({
    alwar: ALWAR_PLACES_BY_SUB,
    jaipur: JAIPUR_PLACES_BY_SUB,
    udaipur: UDAIPUR_PLACES_BY_SUB,
    jodhpur: JODHPUR_PLACES_BY_SUB,
    jaisalmer: JAISALMER_PLACES_BY_SUB,
    bikaner: BIKANER_PLACES_BY_SUB,
    banswara: BANSWARA_PLACES_BY_SUB,
    baran: BARAN_PLACES_BY_SUB,
  }).flatMap((m) => Object.values(m).flat()),
  ...Object.values(fromKeywordRegistry).flatMap((m) => Object.values(m).flat()),
]
