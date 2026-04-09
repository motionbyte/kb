/**
 * Instagram + sunrise/sunset bundles for all cities except Ajmer (Ajmer uses hand-authored pages in cityInstagramSpots / citySunriseSunsetSpots).
 * Landmark teasers are written for photo planning; coordinates are approximate pin centres — verify on site.
 */

import { cities } from '@/data/cities'
import type { PhotographyCitySpec, RawPhotoSpot } from '@/data/cityPhotographyShared'
import { bundlesFromSpecs } from '@/data/cityPhotographyShared'
import { PHOTO_FIRST_LEADS } from '@/data/cityPhotographyLeads'
import { LANDMARK_ROWS } from '@/data/cityPhotographyLandmarkRows'

const IG_LEAD_SECOND =
  'Below: headline icons first, then quieter angles — still active public places, not trespass. Tripods and drones need permission; always ask at shrines before raising a camera toward worshippers.'

const SS_LEAD_SECOND =
  'Below: headline viewpoints first, then softer horizons — still public ghats, embankments, and ridges. Check fort and shrine timings; never block pilgrims or residents for a shot.'

/** Four everyday frames (not necessarily “tourist famous”) — appended for every district so lists stay honest about local life. */
function genericLocalTuples(
  cityName: string,
  slug: string,
  seedLat: number,
  seedLng: number,
): [string, string, number, number][] {
  const d = 0.018
  return [
    [
      `${slug}-local-mandir`,
      `${cityName} — mohalla mandir / local shrine — evening lamps · rarely in guidebooks`,
      seedLat + d * 0.45,
      seedLng - d * 0.28,
    ],
    [
      `${slug}-sabzi-mandi`,
      `${cityName} — sabzi–fruit mandi — tarpaulins & morning colour`,
      seedLat - d * 0.22,
      seedLng + d * 0.38,
    ],
    [
      `${slug}-nagar-park`,
      `${cityName} — nagar nigam / town park — walker silhouettes & open lawns`,
      seedLat + d * 0.12,
      seedLng + d * 0.42,
    ],
    [
      `${slug}-chowk-dusk`,
      `${cityName} — main chowk or old bus-stand edge — sodium light & everyday traffic`,
      seedLat - d * 0.38,
      seedLng - d * 0.32,
    ],
  ]
}

function rowToRawSpot(
  cityName: string,
  row: readonly [string, string, number, number],
  bucket: 'best' | 'hidden',
): RawPhotoSpot {
  const [id, label, latitude, longitude] = row
  const parts = label.split('—')
  const title = parts[0]?.trim() ?? label
  const teaser = parts.slice(1).join('—').trim() || 'Photo spot'

  return {
    id,
    name: title,
    teaser,
    latitude,
    longitude,
    ig: {
      paragraphs: [
        `${title} is a ${bucket === 'best' ? 'headline' : 'softer'} frame in ${cityName} — ${teaser}. Start wide for context and scale, then move closer for carving, texture, or hands where respectful.`,
        `Crowds and signage change daily — burst mode for motion; assume tripods need permission at ticketed monuments and living shrines.`,
      ],
      photoTips: [
        bucket === 'best'
          ? `Arrive 35–50 minutes before golden hour; ${cityName} winter haze often thickens after ~9 AM.`
          : `Try side-light 8–10 AM or 4–6 PM in cool months — midday sun flattens stone and paint.`,
        'Polarising sunglasses help you preview sky contrast; on phones, avoid crushing blacks.',
        'Expose for bright marble, sand, or water highlights; lift shadows gently in edit.',
      ],
      bestLight:
        bucket === 'best'
          ? 'Last 80–100 minutes before sunset or first hour after sunrise — confirm ticket and gate times.'
          : 'Softer angled sun: winter mornings and late afternoons; monsoon clouds can outperform clear skies.',
    },
    ss: {
      paragraphs: [
        `For sunrise and sunset planning, ${title} offers ${bucket === 'best' ? 'priority' : 'alternate'} sightlines around ${cityName} — ${teaser}.`,
        `Wind, dust, and monsoon mist change sharpness — protect lenses; on ghats and ridges, footing beats “the perfect angle”.`,
      ],
      photoTips: [
        'Arrive 30–45 minutes before civil sunrise/sunset for colour in the sky disk and clouds.',
        'Use satellite maps to check east/west orientation; water rewards low sun for long reflections.',
        'Tripods may be restricted at fort gates — handheld burst with higher ISO often wins.',
      ],
      bestLight:
        'Sunrise: 15–35 minutes before official time for blue-to-gold transition. Sunset: last 75–95 minutes; winter dust and crop smoke can tint reds.',
    },
  }
}

function specForSlug(slug: string, name: string): PhotographyCitySpec {
  const leads = PHOTO_FIRST_LEADS[slug]
  const rows = LANDMARK_ROWS[slug]
  if (!leads || !rows || rows.length < 8) {
    throw new Error(`Photography data incomplete for ${slug} (need ≥8 landmarks)`)
  }
  const seedLat = rows[0][2]
  const seedLng = rows[0][3]
  const allTuples = [...rows, ...genericLocalTuples(name, slug, seedLat, seedLng)]
  /** Icons first, quieter second — includes both named sites & everyday local frames */
  const bestCount = Math.ceil(allTuples.length / 2)
  const bestRows = allTuples.slice(0, bestCount) as [string, string, number, number][]
  const hiddenRows = allTuples.slice(bestCount) as [string, string, number, number][]
  return {
    slug,
    name,
    igLead: [leads.ig1, IG_LEAD_SECOND],
    ssLead: [leads.ss1, SS_LEAD_SECOND],
    best: bestRows.map((r) => rowToRawSpot(name, r, 'best')),
    hidden: hiddenRows.map((r) => rowToRawSpot(name, r, 'hidden')),
  }
}

const nonAjmer = cities.filter((c) => c.slug !== 'ajmer')

export const PHOTOGRAPHY_CITY_SPECS: PhotographyCitySpec[] = nonAjmer.map((c) => specForSlug(c.slug, c.name))

const { instagram: restInstagram, sunrise: restSunrise } = bundlesFromSpecs(PHOTOGRAPHY_CITY_SPECS)
export const REST_INSTAGRAM_BY_SLUG = restInstagram
export const REST_SUNRISE_BY_SLUG = restSunrise

/** Dev-time check: every non-Ajmer city has leads + ≥8 landmarks (big heritage cities may have more) */
for (const c of nonAjmer) {
  if (!PHOTO_FIRST_LEADS[c.slug]) throw new Error(`Missing PHOTO_FIRST_LEADS for ${c.slug}`)
  if (!LANDMARK_ROWS[c.slug] || LANDMARK_ROWS[c.slug].length < 8) {
    throw new Error(`LANDMARK_ROWS must have at least 8 rows for ${c.slug}`)
  }
}
