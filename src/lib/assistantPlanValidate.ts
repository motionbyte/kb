import { cities } from '@/data/cities'
import type { TripStyleId } from '@/data/itineraryPlannerCatalog'
import { getPlaceById, getSubOptionById } from '@/data/itineraryPlannerCatalog'
import type { ItineraryPlanStateV2 } from '@/lib/itineraryPlanCodec'

const citySlugs = new Set(cities.map((c) => c.slug))

function isValidSelectionId(id: string): boolean {
  return Boolean(getSubOptionById(id) || getPlaceById(id))
}

/** Normalize and validate a loose itinerary object from the model */
export function validateItineraryPlan(raw: unknown): ItineraryPlanStateV2 | null {
  if (!raw || typeof raw !== 'object') return null
  const p = raw as Record<string, unknown>
  const style = p.style as string | undefined
  if (style !== 'budget' && style !== 'balanced' && style !== 'luxury') return null
  if (!Array.isArray(p.cities) || p.cities.length === 0) return null
  const cityList = p.cities.filter((c): c is string => typeof c === 'string')
  for (const slug of cityList) {
    if (!citySlugs.has(slug)) return null
  }
  const selections = p.selections
  if (!selections || typeof selections !== 'object') return null
  const selObj = selections as Record<string, unknown>
  const nightsPerCity = p.nightsPerCity
  const nights: Record<string, number> = {}
  if (nightsPerCity && typeof nightsPerCity === 'object') {
    for (const [k, v] of Object.entries(nightsPerCity as Record<string, unknown>)) {
      if (typeof v === 'number' && Number.isFinite(v) && v >= 0 && v <= 30) nights[k] = Math.round(v)
    }
  }
  const outSel: Record<string, string[]> = {}
  for (const city of cityList) {
    const ids = selObj[city]
    if (!Array.isArray(ids)) {
      outSel[city] = []
      continue
    }
    const clean = ids.filter((id): id is string => typeof id === 'string' && isValidSelectionId(id))
    outSel[city] = [...new Set(clean)]
  }
  return {
    version: 2,
    style: style as TripStyleId,
    cities: cityList,
    selections: outSel,
    nightsPerCity: nights,
  }
}
