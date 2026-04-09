import type {
  CityInstagramSpotsBundle,
  InstagramSpotCategory,
  InstagramSpotEntry,
} from '@/data/cityInstagramSpots.types'

export type RawPhotoSpot = {
  id: string
  name: string
  teaser: string
  latitude: number
  longitude: number
  ig: {
    paragraphs: [string, string]
    photoTips: [string, string, string]
    bestLight: string
  }
  ss: {
    paragraphs: [string, string]
    photoTips: [string, string, string]
    bestLight: string
  }
  etiquette?: string[]
}

export type PhotographyCitySpec = {
  slug: string
  name: string
  igLead: [string, string]
  ssLead: [string, string]
  best: RawPhotoSpot[]
  hidden: RawPhotoSpot[]
}

function toInstagramEntry(slug: string, s: RawPhotoSpot, prefix: string): InstagramSpotEntry {
  return {
    id: `${prefix}-${slug}-${s.id}`,
    name: s.name,
    teaser: s.teaser,
    paragraphs: [s.ig.paragraphs[0], s.ig.paragraphs[1]],
    photoTips: [s.ig.photoTips[0], s.ig.photoTips[1], s.ig.photoTips[2]],
    bestLight: s.ig.bestLight,
    etiquette: s.etiquette,
    latitude: s.latitude,
    longitude: s.longitude,
  }
}

function toSunriseEntry(slug: string, s: RawPhotoSpot, prefix: string): InstagramSpotEntry {
  return {
    id: `${prefix}-${slug}-${s.id}`,
    name: s.name,
    teaser: s.teaser,
    paragraphs: [s.ss.paragraphs[0], s.ss.paragraphs[1]],
    photoTips: [s.ss.photoTips[0], s.ss.photoTips[1], s.ss.photoTips[2]],
    bestLight: s.ss.bestLight,
    etiquette: s.etiquette,
    latitude: s.latitude,
    longitude: s.longitude,
  }
}

function hospitalsCategoryInstagram(slug: string, cityName: string): InstagramSpotCategory {
  return {
    id: `${slug}-ig-hospitals-nearby`,
    eyebrow: 'Emergency · medical',
    title: 'Hospitals nearby',
    intro: [
      `Shoot days can run long — heat, dust, and crowded lanes. Keep this list handy: it mirrors the city safety guide — live OpenStreetMap hospital search when the network allows, otherwise our curated ${cityName} listings.`,
      `Pins cover the wider city (not one monument only), but facilities are within typical reach when you are working around central ${cityName} and main sightseeing circuits.`,
    ],
    spots: [],
    hospitalsOnly: true,
  }
}

function hospitalsCategorySunrise(slug: string, cityName: string): InstagramSpotCategory {
  return {
    id: `${slug}-ss-hospitals-nearby`,
    eyebrow: 'Emergency · medical',
    title: 'Hospitals nearby',
    intro: [
      `Long evenings by the water or early climbs can still mean dehydration or a slip. Same hospital list as the city safety guide — live OpenStreetMap results when available, otherwise curated ${cityName} facilities.`,
      `Useful anywhere in the district when you are chasing light far from your hotel.`,
    ],
    spots: [],
    hospitalsOnly: true,
  }
}

export function buildInstagramBundleFromSpec(spec: PhotographyCitySpec): CityInstagramSpotsBundle {
  const { slug, igLead, best, hidden } = spec
  return {
    citySlug: slug,
    leadTitle: 'Frames worth the feed',
    leadParagraphs: [igLead[0], igLead[1]],
    categories: [
      {
        id: `${slug}-ig-best-known`,
        eyebrow: 'Icons · classic frames',
        title: 'Best-known & most “Instagrammable”',
        intro: [
          'Headline monuments sit alongside strong everyday frames — mandirs, mandis, and chowks — not every pin is a ticketed “sight”, but each is a real place worth respectful photography.',
        ],
        spots: best.map((s) => toInstagramEntry(slug, s, 'ig')),
      },
      {
        id: `${slug}-ig-hidden`,
        eyebrow: 'Quieter · local angles',
        title: 'Hidden gems & less crowded frames',
        intro: [
          'Quieter lanes, tanks, and local corners — still public, not trespass. Some entries are everyday neighbourhoods rather than famous names; tripods and drones need permission; ask at shrines before aiming at worshippers.',
        ],
        spots: hidden.map((s) => toInstagramEntry(slug, s, 'ig')),
      },
      hospitalsCategoryInstagram(slug, spec.name),
    ],
  }
}

export function buildSunriseBundleFromSpec(spec: PhotographyCitySpec): CityInstagramSpotsBundle {
  const { slug, ssLead, best, hidden } = spec
  return {
    citySlug: slug,
    leadTitle: 'Skyline & golden hour',
    leadParagraphs: [ssLead[0], ssLead[1]],
    categories: [
      {
        id: `${slug}-ss-best-spots`,
        eyebrow: 'Icons · classic views',
        title: 'Best spots — sunrise & sunset',
        intro: [
          'Classic viewpoints plus ordinary town edges — lakes, ridges, and local chowks. Arrive 30–40 minutes before sunrise or sunset when chasing colour; not every pin is a “viewpoint” in the brochure sense.',
        ],
        spots: best.map((s) => toSunriseEntry(slug, s, 'ss')),
      },
      {
        id: `${slug}-ss-hidden`,
        eyebrow: 'Quieter · local angles',
        title: 'Hidden gems & softer horizons',
        intro: [
          'Fewer selfie crowds on many weekdays — village tanks, ward temples, and short drives count too. Air quality and haze affect colour; flexible plans beat chasing one “perfect” sunset.',
        ],
        spots: hidden.map((s) => toSunriseEntry(slug, s, 'ss')),
      },
      hospitalsCategorySunrise(slug, spec.name),
    ],
  }
}

export function bundlesFromSpecs(specs: PhotographyCitySpec[]): {
  instagram: Record<string, CityInstagramSpotsBundle>
  sunrise: Record<string, CityInstagramSpotsBundle>
} {
  const instagram: Record<string, CityInstagramSpotsBundle> = {}
  const sunrise: Record<string, CityInstagramSpotsBundle> = {}
  for (const spec of specs) {
    instagram[spec.slug] = buildInstagramBundleFromSpec(spec)
    sunrise[spec.slug] = buildSunriseBundleFromSpec(spec)
  }
  return { instagram, sunrise }
}
