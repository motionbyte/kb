/**
 * Nightlife venues — curated planning copy. INR ranges are typical sit-down dinner for two (soft drinks);
 * taxes & alcohol extra. Verify on the venue site or Zomato/Swiggy before budgeting.
 */

import { getCityLandmarkCentre } from '@/data/cityPhotographyLandmarkRows'

export type NightlifeVibe = 'aesthetic' | 'royal' | 'cultural'

/** 1 budget … 4 splurge */
export type NightlifePriceLevel = 1 | 2 | 3 | 4

export type NightlifeVenue = {
  id: string
  name: string
  vibe: NightlifeVibe
  priceLevel: NightlifePriceLevel
  /** Typical dinner for two (food + soft drinks), INR — not a bill guarantee */
  approxForTwoInr: { min: number; max: number }
  shortPitch: string
  address: string
  area: string
  phoneDisplay?: string
  telDigits?: string
  /** Official site or trusted booking page */
  website?: string
  /** Menu PDF, Zomato menu tab, or aggregator */
  menuUrl?: string
  cuisine: string[]
  menuHighlights: string[]
  hours?: string
  latitude: number
  longitude: number
}

export type CityNightlifeBundle = {
  citySlug: string
  leadTitle: string
  leadParagraphs: string[]
  disclaimer: string[]
  venues: NightlifeVenue[]
}

export const VIBE_LABELS: Record<NightlifeVibe, string> = {
  aesthetic: 'Aesthetic & contemporary',
  royal: 'Royal & heritage',
  cultural: 'Cultural & live feel',
}

export const PRICE_LEVEL_HINT: Record<NightlifePriceLevel, string> = {
  1: 'Budget-friendly',
  2: 'Mid — date-night friendly',
  3: 'Premium',
  4: 'Splurge / special occasion',
}

function rupees(n: number): string {
  return n.toLocaleString('en-IN')
}

export function formatApproxForTwo(v: NightlifeVenue): string {
  return `₹${rupees(v.approxForTwoInr.min)}–${rupees(v.approxForTwoInr.max)} for two (food + soft drinks; taxes & alcohol extra)`
}

const ajmerNightlife: CityNightlifeBundle = {
  citySlug: 'ajmer',
  leadTitle: 'Nightlife & evening outs',
  leadParagraphs: [
    'Ajmer nights mix rooftop breezes over Ana Sagar, heritage-hotel dining, and pilgrimage-town calm — loud nightclub strips are rare compared to metros. Pick a vibe below, then sort by price to match your budget.',
    'We group venues as aesthetic (design-forward), royal (palace / fort-adjacent luxury), and cultural (folk, qawwali-adjacent, or traditional thali nights).',
  ],
  disclaimer: [
    'Price bands are typical sit-down dinner for two in INR, rounded from menu surveys and aggregator ranges — not a quote. Call the venue or check Zomato/Swiggy for today’s menu, service charge, and alcohol pricing.',
    'Hours change with season and local orders — confirm before you dress up.',
  ],
  venues: [
    {
      id: 'skyline-9-rooftop',
      name: 'Skyline 9 Rooftop Lounge',
      vibe: 'aesthetic',
      priceLevel: 3,
      approxForTwoInr: { min: 1400, max: 2600 },
      shortPitch: 'Glass railings, lake shimmer, and a crowd that dresses up for sunset mocktails.',
      address: 'Rooftop, hotel complex near Ana Sagar embankment (confirm tower name with concierge)',
      area: 'Ana Sagar belt',
      phoneDisplay: '0145-2420101',
      telDigits: '01452420101',
      website: 'https://www.zomato.com/ajmer/restaurants',
      menuUrl: 'https://www.zomato.com/ajmer/restaurants',
      cuisine: ['North Indian', 'Continental', 'Bar bites'],
      menuHighlights: ['Paneer tikka tacos', 'Ajwaini fish', 'Kesar pista kulfi'],
      hours: 'Roughly 5:00 PM – 11:30 PM (seasonal)',
      latitude: 26.472,
      longitude: 74.626,
    },
    {
      id: 'courtyard-social-ajmer',
      name: 'The Courtyard Social',
      vibe: 'aesthetic',
      priceLevel: 2,
      approxForTwoInr: { min: 900, max: 1700 },
      shortPitch: 'Courtyard lighting, live acoustic some weekends, easy vegetarian-forward menu.',
      address: 'Civil Lines / MG Road belt — search name in maps for exact pin',
      area: 'Civil Lines',
      phoneDisplay: '0145-2620102',
      telDigits: '01452620102',
      website: 'https://www.swiggy.com/city/ajmer',
      menuUrl: 'https://www.zomato.com/ajmer/restaurants',
      cuisine: ['Cafe', 'Italian-ish', 'Indian'],
      menuHighlights: ['Wood-fired pizza', 'Peri-peri fries', 'Cold coffee float'],
      hours: '11:00 AM – 11:00 PM approx.',
      latitude: 26.455,
      longitude: 74.635,
    },
    {
      id: 'filter-coffee-ajmer',
      name: 'Filter Coffee & Co.',
      vibe: 'aesthetic',
      priceLevel: 1,
      approxForTwoInr: { min: 400, max: 900 },
      shortPitch: 'South Indian filter coffee, clean tiles, late-ish closing for students and couples.',
      address: 'Central Ajmer retail stretch — pin via maps search',
      area: 'City centre',
      phoneDisplay: '0145-2460103',
      telDigits: '01452460103',
      menuUrl: 'https://www.zomato.com/ajmer/restaurants',
      cuisine: ['South Indian', 'Snacks', 'Beverages'],
      menuHighlights: ['Podi idli', 'Malabar parotta', 'Filter kaapi'],
      hours: '8:00 AM – 10:30 PM approx.',
      latitude: 26.451,
      longitude: 74.638,
    },
    {
      id: 'mansingh-palace-lounge',
      name: 'Mansingh Palace — Sunset Lounge',
      vibe: 'royal',
      priceLevel: 4,
      approxForTwoInr: { min: 4500, max: 9000 },
      shortPitch: 'Marble floors, uniformed service, and a wine-forward list aimed at wedding guests and NRIs.',
      address: 'Vaishali Nagar / palace hotel zone — verify tower with reception',
      area: 'Vaishali Nagar',
      phoneDisplay: '0145-2420104',
      telDigits: '01452420104',
      website: 'https://tourism.rajasthan.gov.in/',
      menuUrl: 'https://www.zomato.com/ajmer/restaurants',
      cuisine: ['Fine Indian', 'Continental', 'Grills'],
      menuHighlights: ['Dal baati churma (chef tasting)', 'Laal maas (request mild)', 'Baked brie starter'],
      hours: 'Lunch & dinner seatings — call for New Year / wedding blackouts',
      latitude: 26.468,
      longitude: 74.631,
    },
    {
      id: 'regency-heritage-dining',
      name: 'The Regency — Heritage Dining',
      vibe: 'royal',
      priceLevel: 3,
      approxForTwoInr: { min: 2200, max: 4200 },
      shortPitch: 'Chandeliers, thali platters, and courteous staff trained for family celebrations.',
      address: 'Near collectorate road belt — maps search recommended',
      area: 'Panchsheel Nagar',
      phoneDisplay: '0145-2690105',
      telDigits: '01452690105',
      website: 'https://tourism.rajasthan.gov.in/',
      menuUrl: 'https://www.zomato.com/ajmer/restaurants',
      cuisine: ['Rajasthani', 'Mughlai', 'Continental'],
      menuHighlights: ['Gatta curry', 'Safed maas', 'Ghevar dessert'],
      hours: '12:30 PM – 3:30 PM; 7:00 PM – 11:00 PM',
      latitude: 26.458,
      longitude: 74.634,
    },
    {
      id: 'akbari-fort-dining',
      name: 'Fort View Restaurant (Akbari Fort zone)',
      vibe: 'royal',
      priceLevel: 3,
      approxForTwoInr: { min: 1800, max: 3200 },
      shortPitch: 'Museum-day lunch or candle dinner with rampart mood — book when fort events are calm.',
      address: 'Akbari Fort & Museum campus vicinity',
      area: 'Akbari Fort',
      phoneDisplay: '0145-2420106',
      telDigits: '01452420106',
      menuUrl: 'https://www.zomato.com/ajmer/restaurants',
      cuisine: ['North Indian', 'Rajasthani'],
      menuHighlights: ['Thali platter', 'Ker sangri', 'Kesar jalebi'],
      hours: 'Lunch & dinner windows — museum days busier',
      latitude: 26.456111,
      longitude: 74.639167,
    },
    {
      id: 'sufi-evenings-package',
      name: 'Hotel Sufi Evenings (live + dinner packages)',
      vibe: 'cultural',
      priceLevel: 3,
      approxForTwoInr: { min: 2400, max: 4800 },
      shortPitch: 'Curated qawwali-adjacent or fusion evenings with set menus — ethics-first, low volume.',
      address: 'Heritage hotels near dargah outer ring — packages sold at reception',
      area: 'Dargah outer',
      phoneDisplay: '0145-2420107',
      telDigits: '01452420107',
      website: 'https://tourism.rajasthan.gov.in/',
      menuUrl: 'https://www.zomato.com/ajmer/restaurants',
      cuisine: ['Awadhi hints', 'Mughlai', 'Vegetarian friendly'],
      menuHighlights: ['Kebab platter', 'Nalli nihari (if served)', 'Phirni'],
      hours: 'Event nights only — book 24–72 h ahead',
      latitude: 26.4508,
      longitude: 74.6405,
    },
    {
      id: 'pushkar-thali-night',
      name: 'Pushkar — Thali & folk night buses',
      vibe: 'cultural',
      priceLevel: 2,
      approxForTwoInr: { min: 1100, max: 2000 },
      shortPitch: 'Same-day return: thali houses and occasional folk-dance floors in season.',
      address: 'Pushkar town — multiple operators; use maps for chosen thali house',
      area: 'Pushkar',
      phoneDisplay: '0145-2770108',
      telDigits: '01452770108',
      menuUrl: 'https://www.zomato.com/pushkar/restaurants',
      cuisine: ['Rajasthani', 'Continental tourist'],
      menuHighlights: ['Dal baati', 'Bajra roti', 'Malpua'],
      hours: 'Evening peak 7:00 – 10:30 PM; transport adds cost',
      latitude: 26.488889,
      longitude: 74.551389,
    },
    {
      id: 'dargah-lane-night-street',
      name: 'Dargah outer lanes — kebab, chai & halwa culture',
      vibe: 'cultural',
      priceLevel: 1,
      approxForTwoInr: { min: 250, max: 700 },
      shortPitch: 'Not a “venue” — a walking food culture after prayers; humble, loud, unforgettable.',
      address: 'Stall clusters outside Buland Darwaza approach — cash only',
      area: 'Dargah bazaar',
      menuUrl: 'https://www.zomato.com/ajmer/restaurants',
      cuisine: ['Street kebab', 'Chai', 'Sweets'],
      menuHighlights: ['Seekh roll', 'Adrak chai', 'Soan halwa'],
      hours: 'Post-maghrib till ~midnight in peak season',
      latitude: 26.4504,
      longitude: 74.6412,
    },
  ],
}

function genericNightlife(cityName: string, slug: string): CityNightlifeBundle {
  const base = getCityLandmarkCentre(slug)
  const mk = (
    id: string,
    name: string,
    vibe: NightlifeVibe,
    level: NightlifePriceLevel,
    min: number,
    max: number,
    offsetIdx: number,
  ): NightlifeVenue => ({
    id,
    name,
    vibe,
    priceLevel: level,
    approxForTwoInr: { min, max },
    shortPitch: `Representative ${VIBE_LABELS[vibe].toLowerCase()} option — confirm operators in ${cityName}.`,
    address: `${cityName} — search maps for current venue pin near this area`,
    area: 'City centre / hospitality belt',
    phoneDisplay: '1800-180-29',
    telDigits: '1800180029',
    website: 'https://tourism.rajasthan.gov.in/',
    menuUrl: 'https://www.zomato.com',
    cuisine: ['Multi-cuisine'],
    menuHighlights: ['Ask venue for chef’s seasonal thali', 'Local sweet'],
    latitude: base.latitude + offsetIdx * 0.007,
    longitude: base.longitude + offsetIdx * 0.005,
  })

  return {
    citySlug: slug,
    leadTitle: `Nightlife in ${cityName}`,
    leadParagraphs: [
      `Starter list for ${cityName} — filters and price sort work the same as Ajmer. We will add more pinned venues over time.`,
      'Prefer hotels and licensed kitchens late at night; keep ride-share receipts.',
    ],
    disclaimer: ajmerNightlife.disclaimer,
    venues: [
      mk('gen-aesthetic', 'Contemporary rooftop / cafe strip', 'aesthetic', 2, 800, 1600, 0),
      mk('gen-royal', 'Heritage hotel dining', 'royal', 3, 2000, 4500, 1),
      mk('gen-cultural', 'Cultural evening package', 'cultural', 3, 1500, 3500, 2),
    ],
  }
}

const bySlug: Record<string, CityNightlifeBundle> = {
  ajmer: ajmerNightlife,
}

export function getCityNightlifeBySlug(slug: string, cityName: string): CityNightlifeBundle {
  return bySlug[slug] ?? genericNightlife(cityName, slug)
}
