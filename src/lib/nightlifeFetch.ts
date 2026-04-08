/**
 * Optional live venue rows from your backend (aggregators / scrapers). Set `VITE_NIGHTLIFE_URL`
 * to a JSON endpoint returning `{ "venues": NightlifeVenue[] }` for `?city=ajmer`.
 */

import type { NightlifeVenue } from '@/data/cityNightlife'

export async function fetchNightlifeVenues(citySlug: string): Promise<NightlifeVenue[]> {
  const raw = import.meta.env.VITE_NIGHTLIFE_URL as string | undefined
  const base = raw?.trim()
  if (!base) return []

  const sep = base.includes('?') ? '&' : '?'
  const url = `${base}${sep}city=${encodeURIComponent(citySlug)}`
  const res = await fetch(url, { headers: { Accept: 'application/json' } })
  if (!res.ok) {
    throw new Error(`Nightlife feed failed (${res.status})`)
  }
  const data = (await res.json()) as { venues?: NightlifeVenue[] }
  const list = data.venues
  if (!Array.isArray(list)) {
    throw new Error('Invalid JSON — expected { venues: [...] }')
  }
  return list.map((v, i) => ({
    ...v,
    id: v.id?.startsWith('live-') ? v.id : `live-${citySlug}-${i}-${v.id ?? 'row'}`,
  }))
}
