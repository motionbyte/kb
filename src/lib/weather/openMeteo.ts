/**
 * Open-Meteo — free, no API key, open data (https://open-meteo.com).
 * Used for live forecast; coastal/marine where coordinates apply.
 */

export type GeocodeHit = {
  name: string
  latitude: number
  longitude: number
  country_code?: string
}

type GeocodeApiResult = {
  name: string
  latitude: number
  longitude: number
  country_code?: string
  /** State / region, e.g. "Rajasthan" */
  admin1?: string
}

function normalizeAdmin1(admin1?: string): string {
  return (admin1 ?? '')
    .normalize('NFKD')
    .replace(/\p{M}/gu, '')
    .toLowerCase()
    .trim()
}

function isRajasthan(admin1?: string): boolean {
  return normalizeAdmin1(admin1) === 'rajasthan'
}

function toHit(r: GeocodeApiResult): GeocodeHit {
  return {
    name: r.name,
    latitude: r.latitude,
    longitude: r.longitude,
    country_code: r.country_code,
  }
}

async function fetchGeocodeResults(name: string, count: number): Promise<GeocodeApiResult[]> {
  const q = new URLSearchParams({
    name,
    count: String(count),
    language: 'en',
    format: 'json',
  })
  const res = await fetch(`https://geocoding-api.open-meteo.com/v1/search?${q}`)
  if (!res.ok) return []
  const data = (await res.json()) as { results?: GeocodeApiResult[] }
  return data.results ?? []
}

function firstRajasthanInIndia(results: GeocodeApiResult[]): GeocodeHit | null {
  const rj = results.find((r) => r.country_code === 'IN' && isRajasthan(r.admin1))
  return rj ? toHit(rj) : null
}

function firstIndia(results: GeocodeApiResult[]): GeocodeHit | null {
  const hit = results.find((r) => r.country_code === 'IN')
  return hit ? toHit(hit) : null
}

/**
 * Resolve coordinates for a Rajasthan guide city. Open-Meteo returns many
 * homonyms (same name in other states); we prefer `admin1 === Rajasthan`, then
 * disambiguate with ", Rajasthan" searches before falling back to any India hit.
 */
export async function geocodeCityInIndia(name: string): Promise<GeocodeHit | null> {
  const primary = await fetchGeocodeResults(name, 20)
  const fromPrimary = firstRajasthanInIndia(primary)
  if (fromPrimary) return fromPrimary

  const tryQueries = [`${name}, Rajasthan`, `${name}, Rajasthan, India`]
  for (const q of tryQueries) {
    const rows = await fetchGeocodeResults(q, 12)
    const rj = firstRajasthanInIndia(rows)
    if (rj) return rj
    const anyIn = firstIndia(rows)
    if (anyIn) return anyIn
  }

  return firstIndia(primary)
}

export type CurrentWeatherBundle = {
  locationLabel: string
  latitude: number
  longitude: number
  /** ISO time of current observation */
  time: string
  temperatureC: number | null
  apparentTempC: number | null
  humidityPct: number | null
  precipitationMm: number | null
  rainMm: number | null
  showersMm: number | null
  snowfallCm: number | null
  weatherCode: number | null
  cloudCoverPct: number | null
  pressureMslHpa: number | null
  surfacePressureHpa: number | null
  windSpeedMs: number | null
  windDirDeg: number | null
  windGustsMs: number | null
  dewpointC: number | null
  visibilityM: number | null
  soilMoisture: number | null
  soilTempC: number | null
  uvIndexMax: number | null
  shortwaveRadiationMJ: number | null
  isInlandNote: boolean
  marineAvailable: boolean
  marineSample?: {
    waveHeightM: number | null
    seaSurfaceTempC: number | null
    oceanCurrentVelocity: number | null
  }
}

function num(v: unknown): number | null {
  if (v === null || v === undefined) return null
  const n = Number(v)
  return Number.isFinite(n) ? n : null
}

/**
 * Main forecast + hourly extras (visibility, soil where model provides).
 * Marine API attempted separately for coastal grids only.
 */
export async function fetchWeatherBundle(
  cityDisplayName: string,
  lat: number,
  lon: number,
): Promise<CurrentWeatherBundle> {
  const params = new URLSearchParams({
    latitude: String(lat),
    longitude: String(lon),
    timezone: 'auto',
    wind_speed_unit: 'ms',
    current: [
      'temperature_2m',
      'relative_humidity_2m',
      'apparent_temperature',
      'precipitation',
      'rain',
      'showers',
      'snowfall',
      'weather_code',
      'cloud_cover',
      'pressure_msl',
      'surface_pressure',
      'wind_speed_10m',
      'wind_direction_10m',
      'wind_gusts_10m',
      'dew_point_2m',
    ].join(','),
    hourly: ['visibility', 'soil_moisture_0_to_7cm', 'soil_temperature_0_to_7cm'].join(','),
    daily: ['uv_index_max', 'shortwave_radiation_sum'].join(','),
    forecast_days: '2',
  })

  const res = await fetch(`https://api.open-meteo.com/v1/forecast?${params}`)
  if (!res.ok) throw new Error('Forecast unavailable')
  const data = (await res.json()) as {
    current?: Record<string, unknown>
    current_units?: Record<string, string>
    hourly?: { time: string[]; visibility?: number[]; soil_moisture_0_to_7cm?: number[]; soil_temperature_0_to_7cm?: number[] }
    daily?: { time: string[]; uv_index_max?: number[]; shortwave_radiation_sum?: number[] }
  }

  const cur = data.current ?? {}
  const hourly = data.hourly
  const daily = data.daily

  const nowIdx = 0
  const vis = hourly?.visibility?.[nowIdx]
  const soilM = hourly?.soil_moisture_0_to_7cm?.[nowIdx]
  const soilT = hourly?.soil_temperature_0_to_7cm?.[nowIdx]

  const uvMax = daily?.uv_index_max?.[0]
  const swRad = daily?.shortwave_radiation_sum?.[0]

  const isInland = !isLikelyCoastal(lat, lon)

  let marine: CurrentWeatherBundle['marineSample'] | undefined
  let marineOk = false
  try {
    const mp = new URLSearchParams({
      latitude: String(lat),
      longitude: String(lon),
      current: 'wave_height,sea_surface_temperature,ocean_current_velocity',
      timezone: 'auto',
    })
    const mres = await fetch(`https://marine-api.open-meteo.com/v1/marine?${mp}`)
    if (mres.ok) {
      const mj = (await mres.json()) as { current?: Record<string, unknown> }
      const mc = mj.current
      if (mc) {
        const wh = num(mc.wave_height)
        const sst = num(mc.sea_surface_temperature)
        const oc = num(mc.ocean_current_velocity)
        if (wh !== null || sst !== null || oc !== null) {
          marineOk = true
          marine = {
            waveHeightM: wh,
            seaSurfaceTempC: sst,
            oceanCurrentVelocity: oc,
          }
        }
      }
    }
  } catch {
    /* ignore */
  }

  return {
    locationLabel: cityDisplayName,
    latitude: lat,
    longitude: lon,
    time: String(cur.time ?? ''),
    temperatureC: num(cur.temperature_2m),
    apparentTempC: num(cur.apparent_temperature),
    humidityPct: num(cur.relative_humidity_2m),
    precipitationMm: num(cur.precipitation),
    rainMm: num(cur.rain),
    showersMm: num(cur.showers),
    snowfallCm: num(cur.snowfall),
    weatherCode: num(cur.weather_code),
    cloudCoverPct: num(cur.cloud_cover),
    pressureMslHpa: num(cur.pressure_msl),
    surfacePressureHpa: num(cur.surface_pressure),
    windSpeedMs: num(cur.wind_speed_10m),
    windDirDeg: num(cur.wind_direction_10m),
    windGustsMs: num(cur.wind_gusts_10m),
    dewpointC: num(cur.dew_point_2m),
    visibilityM: vis !== undefined ? num(vis) : null,
    soilMoisture: soilM !== undefined ? num(soilM) : null,
    soilTempC: soilT !== undefined ? num(soilT) : null,
    uvIndexMax: uvMax !== undefined ? num(uvMax) : null,
    shortwaveRadiationMJ: swRad !== undefined ? num(swRad) : null,
    isInlandNote: isInland,
    marineAvailable: marineOk,
    marineSample: marine,
  }
}

/** Very rough: Indian coast ~ west/south/east; Rajasthan = inland */
function isLikelyCoastal(lat: number, lon: number): boolean {
  if (lat < 6 || lat > 36 || lon < 68 || lon > 98) return false
  // Arabian sea west coast, Kerala, TN, Odisha/WB coast approximations
  if (lon < 74 && lat > 8 && lat < 24) return true
  if (lon > 77 && lon < 81 && lat > 8 && lat < 14) return true
  if (lon > 85 && lat > 17 && lat < 22) return true
  return false
}

export function formatVal(v: number | null, unit: string, digits = 1): string {
  if (v === null || Number.isNaN(v)) return '—'
  return `${v.toFixed(digits)}${unit ? ` ${unit}` : ''}`
}
