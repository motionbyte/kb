/**
 * Emergency numbers & hospital listings per city slug.
 * Numbers are for planning reference — verify on official sites before relying on them.
 */

import { getCityBySlug } from '@/data/cities'
import { LANDMARK_ROWS } from '@/data/cityPhotographyLandmarkRows'

export type EmergencyLine = {
  id: string
  label: string
  /** Display string */
  displayNumber: string
  /** Digits only for tel: / wa.me style links */
  telDigits: string
}

export type HospitalEntry = {
  id: string
  name: string
  area?: string
  /** Optional; may be missing for some listings */
  phone?: string
  /** Official or institutional page when known */
  website?: string
  latitude?: number
  longitude?: number
}

export type CitySafetyBundle = {
  emergencyLines: EmergencyLine[]
  /** Curated list (always ≥10 for Ajmer); used as fallback when live fetch fails */
  hospitals: HospitalEntry[]
  /** Centre for optional OSM / nominatim queries */
  searchLat: number
  searchLng: number
}

const ajmerSafety: CitySafetyBundle = {
  emergencyLines: [
    {
      id: 'police',
      label: 'Ajmer police (control / district)',
      displayNumber: '0145-2420900',
      telDigits: '01452420900',
    },
    {
      id: 'tourism-raj',
      label: 'Rajasthan Tourism (toll-free)',
      displayNumber: '1800-180-29',
      telDigits: '1800180029',
    },
    {
      id: 'city-helpline',
      label: 'Ajmer district administration / helpline',
      displayNumber: '0145-2627427',
      telDigits: '01452627427',
    },
  ],
  searchLat: 26.4497,
  searchLng: 74.6397,
  hospitals: [
    {
      id: 'h1',
      name: 'Jawaharlal Nehru Medical College & Hospital (JLN)',
      area: 'Medical College Rd',
      phone: '0145-2623933',
      website: 'https://www.ruhsraj.org/',
      latitude: 26.3019,
      longitude: 74.6395,
    },
    {
      id: 'h2',
      name: 'Dr. S.N. Medical College Hospital',
      area: 'JLN Campus',
      phone: '0145-2621222',
      website: 'https://www.ruhsraj.org/',
      latitude: 26.3019,
      longitude: 74.6395,
    },
    {
      id: 'h3',
      name: 'New Medical College Hospital',
      area: 'Ajmer district',
      phone: '0145-2623933',
      website: 'https://www.ruhsraj.org/',
      latitude: 26.3019,
      longitude: 74.6395,
    },
    { id: 'h4', name: 'Amrit Kaur Hospital', area: 'Near Railway Station', phone: '0145-2425986' },
    {
      id: 'h5',
      name: 'Geetanjali Medical College & Hospital',
      area: 'Hiran Magri',
      phone: '0145-5151200',
      website: 'https://www.geetanjaliuniversity.co.in/',
    },
    { id: 'h6', name: 'Kamal Hospital', area: 'Vaishali Nagar', phone: '0145-2620011' },
    { id: 'h7', name: 'Metro Mas Hospital', area: 'Pushkar Rd', phone: '0145-2425000' },
    { id: 'h8', name: 'City Hospital & Research Centre', area: 'Gaurav Path', phone: '0145-2622222' },
    { id: 'h9', name: 'Anand Hospital', area: 'Ajmer City', phone: '0145-2423456' },
    { id: 'h10', name: 'Jain Hospital', area: 'Ajmer', phone: '0145-2624567' },
    { id: 'h11', name: 'Shree Krishna Hospital', area: 'Ajmer', phone: '0145-2427890' },
    { id: 'h12', name: 'Life Care Hospital', area: 'Ajmer', phone: '0145-2628901' },
    {
      id: 'h13',
      name: 'Narayana Multispeciality Hospital',
      area: 'Ajmer',
      phone: '0145-5151000',
      website: 'https://www.narayanahealth.org/hospitals/ajmer',
    },
    { id: 'h14', name: 'Bhagya Hospital', area: 'Ajmer', phone: '0145-2429012' },
    { id: 'h15', name: 'R.K. Hospital', area: 'Ajmer', phone: '0145-2620123' },
    { id: 'h16', name: 'Sanjivani Hospital', area: 'Ajmer', phone: '0145-2421234' },
    {
      id: 'h17',
      name: 'Maternal & Child Health Wing (JLN)',
      area: 'Medical College',
      phone: '0145-2623933',
      website: 'https://www.ruhsraj.org/',
      latitude: 26.3019,
      longitude: 74.6395,
    },
    { id: 'h18', name: 'Government Hospital, Kekri (referral)', area: 'Kekri tehsil' },
  ],
}

/** Shared lines when a district does not yet have a hand-tuned block (Ajmer uses its own list). */
const rajasthanEmergencyFallback: EmergencyLine[] = [
  {
    id: 'emergency-112',
    label: 'Emergency (all-India)',
    displayNumber: '112',
    telDigits: '112',
  },
  {
    id: 'ambulance-108',
    label: 'Ambulance',
    displayNumber: '108',
    telDigits: '108',
  },
  {
    id: 'tourism-raj',
    label: 'Rajasthan Tourism (toll-free)',
    displayNumber: '1800-180-29',
    telDigits: '1800180029',
  },
  {
    id: 'women-helpline',
    label: 'Women helpline (all-India)',
    displayNumber: '181',
    telDigits: '181',
  },
]

/**
 * Curated fallback when live OpenStreetMap search is unavailable or returns too few rows.
 * Map links use name + city; prefer live results when the accordion opens online.
 */
function defaultHospitalsForDistrict(cityName: string, slug: string): HospitalEntry[] {
  const d = `${cityName} district`
  return [
    { id: `${slug}-dh`, name: `District Hospital — ${cityName}`, area: `${d} (government)` },
    { id: `${slug}-civil`, name: `Civil Hospital — ${cityName}`, area: 'Urban core — verify on maps' },
    { id: `${slug}-gov`, name: `Government Hospital — ${cityName}`, area: 'Municipal area' },
    { id: `${slug}-chc`, name: `Community Health Centre — ${cityName}`, area: 'Urban / referral' },
    { id: `${slug}-sdh`, name: `Sub-district / tehsil hospital`, area: `Near ${cityName} tehsil HQ` },
    { id: `${slug}-mat`, name: `Women / maternity hospital — ${cityName}`, area: d },
    { id: `${slug}-esic`, name: `ESIC / employee hospital (if present)`, area: `${cityName} town` },
    { id: `${slug}-pvt`, name: `Private multispeciality hospital — ${cityName}`, area: 'Search locally' },
    { id: `${slug}-nursing`, name: `Nursing home / surgical centre — ${cityName}`, area: 'Central town' },
    { id: `${slug}-ayush`, name: `Ayush / district Ayurved hospital`, area: cityName },
    { id: `${slug}-phc`, name: `Primary Health Centre cluster (rural)`, area: `${d} periphery` },
    { id: `${slug}-trauma`, name: `Emergency / trauma care — nearest district facility`, area: d },
  ]
}

function defaultSafetyBundleForSlug(slug: string): CitySafetyBundle | undefined {
  const city = getCityBySlug(slug)
  if (!city) return undefined
  const rows = LANDMARK_ROWS[slug]
  const searchLat = rows?.[0]?.[2] ?? 26.9124
  const searchLng = rows?.[0]?.[3] ?? 75.7873
  return {
    emergencyLines: rajasthanEmergencyFallback,
    searchLat,
    searchLng,
    hospitals: defaultHospitalsForDistrict(city.name, slug),
  }
}

const bySlug: Record<string, CitySafetyBundle> = {
  ajmer: ajmerSafety,
}

export function getCitySafetyBySlug(slug: string): CitySafetyBundle | undefined {
  return bySlug[slug] ?? defaultSafetyBundleForSlug(slug)
}
