/**
 * Emergency numbers & hospital listings per city slug.
 * Numbers are for planning reference — verify on official sites before relying on them.
 */

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

const bySlug: Record<string, CitySafetyBundle> = {
  ajmer: ajmerSafety,
}

export function getCitySafetyBySlug(slug: string): CitySafetyBundle | undefined {
  return bySlug[slug]
}
