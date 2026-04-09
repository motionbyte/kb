import type { PlannerPlace } from '@/data/itineraryPlannerCatalog'

/** Stable ids: pl:<citySlug>:<subOptionId>:<placeSlug> */
export function makeCityPlaces(
  citySlug: string,
  subOptionId: string,
  items: Array<[string, string]>,
): PlannerPlace[] {
  return items.map(([slug, label]) => ({
    id: `pl:${citySlug}:${subOptionId}:${slug}`,
    subOptionId,
    label,
  }))
}

/** Build a full city map from raw [id, label][] per sub-option (Ajmer-style authoring). */
export function defineCityPlaces(
  citySlug: string,
  sections: Record<string, Array<[string, string]>>,
): Record<string, PlannerPlace[]> {
  const out: Record<string, PlannerPlace[]> = {}
  for (const [subId, rows] of Object.entries(sections)) {
    out[subId] = makeCityPlaces(citySlug, subId, rows)
  }
  return out
}
