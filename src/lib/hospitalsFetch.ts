import type { HospitalEntry } from '@/data/citySafety'

const MIN_RESULTS = 10
const MAX_RESULTS = 20

/**
 * Try to load hospital-like places from OpenStreetMap (Nominatim).
 * Respects Nominatim usage policy: low volume, identifying User-Agent.
 * Returns null on failure or if too few usable rows (caller keeps curated list).
 */
export async function fetchHospitalsLive(
  cityName: string,
  _lat: number,
  _lng: number,
): Promise<HospitalEntry[] | null> {
  try {
    const q = encodeURIComponent(`${cityName} hospital Rajasthan India`)
    const url = `https://nominatim.openstreetmap.org/search?format=json&limit=30&addressdetails=0&q=${q}`
    const res = await fetch(url, {
      headers: {
        Accept: 'application/json',
        'User-Agent': 'KesariyaBalamGuide/1.0 (travel guide app)',
      },
    })
    if (!res.ok) return null
    const raw = (await res.json()) as {
      display_name: string
      place_id: number
      lat: string
      lon: string
    }[]
    const filtered = raw.filter((r) =>
      /hospital|medical college|sanatorium|clinic|health centre|health center/i.test(r.display_name),
    )
    if (filtered.length < MIN_RESULTS) return null

    const mapped: HospitalEntry[] = filtered.slice(0, MAX_RESULTS).map((r, i) => {
      const parts = r.display_name.split(',').map((s) => s.trim())
      const shortName = parts[0] ?? r.display_name
      const lat = Number.parseFloat(r.lat)
      const lon = Number.parseFloat(r.lon)
      return {
        id: `nominatim-${r.place_id}-${i}`,
        name: shortName,
        area: parts.slice(1, 4).join(', ') || undefined,
        ...(Number.isFinite(lat) && Number.isFinite(lon) ? { latitude: lat, longitude: lon } : {}),
      }
    })

    return mapped.length >= MIN_RESULTS ? mapped : null
  } catch {
    return null
  }
}
