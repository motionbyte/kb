import type { TripStyleId } from '@/data/itineraryPlannerCatalog'
import { PLANNER_SUB_OPTIONS, getPlaceById, getSubOptionById } from '@/data/itineraryPlannerCatalog'

export type ItineraryPlanStateV1 = {
  version: 1
  style: TripStyleId
  cities: string[]
  selections: Record<string, string[]>
  nightsPerCity: Record<string, number>
}

/** Selections store sub-option ids (e.g. heritage-forts), not parent category ids. */
export type ItineraryPlanStateV2 = {
  version: 2
  style: TripStyleId
  cities: string[]
  selections: Record<string, string[]>
  nightsPerCity: Record<string, number>
}

export type ItineraryPlanState = ItineraryPlanStateV2

export const EMPTY_PLAN: ItineraryPlanStateV2 = {
  version: 2,
  style: 'balanced',
  cities: [],
  selections: {},
  nightsPerCity: {},
}

function migrateV1SelectionIds(ids: string[]): string[] {
  const out = new Set<string>()
  for (const id of ids) {
    if (getPlaceById(id)) {
      out.add(id)
      continue
    }
    if (getSubOptionById(id)) {
      out.add(id)
      continue
    }
    const subs = PLANNER_SUB_OPTIONS[id]
    if (subs?.[0]) {
      out.add(subs[0].id)
    }
  }
  return [...out]
}

function normalizeDecoded(raw: unknown): ItineraryPlanStateV2 | null {
  if (!raw || typeof raw !== 'object') return null
  const p = raw as Record<string, unknown>
  if (p.version === 2 && Array.isArray(p.cities)) {
    return raw as ItineraryPlanStateV2
  }
  if (p.version === 1 && Array.isArray(p.cities)) {
    const v1 = raw as ItineraryPlanStateV1
    return {
      version: 2,
      style: v1.style,
      cities: v1.cities,
      nightsPerCity: v1.nightsPerCity,
      selections: Object.fromEntries(
        Object.entries(v1.selections).map(([city, ids]) => [city, migrateV1SelectionIds(ids)]),
      ),
    }
  }
  // Very old / hand-edited JSON without version: try best-effort
  if (Array.isArray(p.cities) && p.selections && typeof p.selections === 'object') {
    const sel = p.selections as Record<string, string[]>
    return {
      version: 2,
      style: (p.style as TripStyleId) ?? 'balanced',
      cities: p.cities as string[],
      nightsPerCity: (p.nightsPerCity as Record<string, number>) ?? {},
      selections: Object.fromEntries(
        Object.entries(sel).map(([c, ids]) => [c, migrateV1SelectionIds(Array.isArray(ids) ? ids : [])]),
      ),
    }
  }
  return null
}

export function encodePlanToBase64(plan: ItineraryPlanStateV2): string {
  try {
    const json = JSON.stringify(plan)
    return btoa(unescape(encodeURIComponent(json)))
  } catch {
    return ''
  }
}

export function decodePlanFromBase64(b64: string): ItineraryPlanStateV2 | null {
  try {
    const json = decodeURIComponent(escape(atob(b64)))
    const parsed = JSON.parse(json) as unknown
    return normalizeDecoded(parsed)
  } catch {
    return null
  }
}

export function mergeSeedCity(plan: ItineraryPlanStateV2, slug: string | null): ItineraryPlanStateV2 {
  if (!slug || plan.cities.includes(slug)) return plan
  return {
    ...plan,
    cities: [slug, ...plan.cities],
    selections: { ...plan.selections, [slug]: plan.selections[slug] ?? [] },
    nightsPerCity: { ...plan.nightsPerCity, [slug]: plan.nightsPerCity[slug] ?? 2 },
  }
}

/** Re-export for legacy type name used in components */
export type ItineraryPlanStateV1Legacy = ItineraryPlanStateV1
