/**
 * Sunrise & sunset viewpoints — lakes, ghats, ridges, heritage silhouettes.
 * Same bundle shape as Instagram spots; coordinates are approximate pin centres.
 */

import type { CityInstagramSpotsBundle } from '@/data/cityInstagramSpots'

const ajmerSunriseSunset: CityInstagramSpotsBundle = {
  citySlug: 'ajmer',
  leadTitle: 'Skyline & golden hour',
  leadParagraphs: [
    'Ajmer sits in a bowl of Aravalli folds — lakes open to the west for sunsets, while domes and minarets catch the first pink light at dawn. Winter haze softens colour; monsoon clouds can turn dramatic; summer heat means earlier starts and later, cooler evenings.',
    'Below: headline viewpoints first, then quieter angles — still public places (ghats, embankments, ridges). Check shrine and fort timings; never block pilgrims or swimmers for a shot.',
  ],
  categories: [
    {
      id: 'ss-best-spots',
      eyebrow: 'Icons · classic views',
      title: 'Best spots — sunrise & sunset',
      intro: [
        'These are the views travellers plan trips around — busier at peak colour, so arrive 30–40 minutes before sunrise or sunset to claim a calm stretch of railing or steps.',
      ],
      spots: [
        {
          id: 'ana-sagar-baradari',
          name: 'Ana Sagar Lake & Baradari',
          teaser: 'Lake · west-facing sky',
          paragraphs: [
            'The marble pavilions and long embankment face open water — classic wide-sky sunsets with city silhouette. Morning walkers and tea stalls add life without needing a “perfect empty” frame.',
            'Wind picks up after noon; evenings can feel cooler by the water — carry a light layer in winter.',
          ],
          photoTips: [
            'Face west for sunset; east-facing shots catch pastel reverse light on the ridge.',
            'Polarising sunglasses help you preview sky contrast before you shoot.',
            'Weekday evenings are calmer than Sundays near the parking edge.',
          ],
          bestLight:
            'Sunset: last 75–90 minutes (check seasonal clock). Sunrise: eastern sky behind the city — good for soft pinks on water, less dramatic than full sunset unless very clear air.',
          latitude: 26.471389,
          longitude: 74.625833,
        },
        {
          id: 'taragarh-ridge',
          name: 'Taragarh Fort — ridge & city bowl',
          teaser: 'High · sunrise priority',
          paragraphs: [
            'From the fort paths you look down on Ajmer’s dense fabric and the dargah’s domes — sunrise paints layers of mist and muezzin sound carries. Sunset can work if gates stay open; confirm timings seasonally.',
            'Climb only when you are fit and hydrated; paths are stone and uneven.',
          ],
          photoTips: [
            'Arrive before first light for tripod setup on stable ground only.',
            'Telephoto compresses the city against the hills behind.',
            'Carry water — even winter mornings warm up fast after sunrise.',
          ],
          bestLight:
            'Sunrise: 20–40 minutes before official sunrise for blue-to-gold transition. Haze often peaks after 8 AM — earlier is sharper.',
          etiquette: ['Do not venture beyond marked paths; forts can have sheer drops.'],
          latitude: 26.449,
          longitude: 74.637,
        },
        {
          id: 'dargah-outer-courtyard',
          name: 'Ajmer Sharif — marble courtyard glow',
          teaser: 'Domes · first & last light',
          paragraphs: [
            'Low sun skims white marble and bulbous domes — warm gold and long shadows. Qawwali evenings add sound; mornings are quieter for contemplative light.',
            'This is a working shrine, not a viewpoint terrace — keep movements calm and cameras discreet.',
          ],
          photoTips: [
            'Expose for marble highlights; lift shadows slightly in edit rather than blowing highlights.',
            'Wide lens for architecture; avoid aiming at worshippers’ faces.',
          ],
          bestLight:
            'Roughly 30–45 minutes after sunrise and 45–60 minutes before sunset for angled warmth (exact gates vary — verify locally).',
          etiquette: [
            'Dress modestly; shoes off; no loud posing; ask khadims before commercial work.',
          ],
          latitude: 26.449722,
          longitude: 74.639722,
        },
        {
          id: 'pushkar-ghats',
          name: 'Pushkar Sarovar — ghats & spires',
          teaser: 'Day trip · twin golden hours',
          paragraphs: [
            'Under an hour away — tiered ghats, temple spires, and lamps at dusk. Sunsets reflect warm tones on steps; sunrises can be misty and devotional.',
            'Kartik and major melas pack the waterfront — plan extra time and patience.',
          ],
          photoTips: [
            'Scout east-facing steps for sunrise silhouette of temples.',
            'Blue hour after sunset often beats the actual disk touching horizon for colour balance.',
          ],
          bestLight:
            'Clear-sky sunsets: arrive 1 h before. Monsoon: dramatic clouds but risky lightning — stay off metal ghats in storms.',
          latitude: 26.488889,
          longitude: 74.551389,
        },
        {
          id: 'adhai-din-jhonpra',
          name: 'Adhai Din ka Jhonpra — carved screen silhouette',
          teaser: 'Heritage · side light',
          paragraphs: [
            'The ornate arched screen reads as strong graphic silhouette against bright sky — sunrise side-light rakes the carvings; late afternoon adds amber on stone.',
            'Grounds close to public hours — plan around ticketed access.',
          ],
          photoTips: [
            'Walk the arc until the sun grazes the screen — texture pops at an angle, not head-on.',
            'Pair with a wide sky slice to show scale vs intricate stone.',
          ],
          bestLight: 'Winter: 7:30–9:30 AM and 4:00–5:30 PM for angled sun; summer: earlier mornings.',
          latitude: 26.450278,
          longitude: 74.638889,
        },
        {
          id: 'akbari-fort-rampart',
          name: 'Akbari Fort — rampart line against sky',
          teaser: 'Mughal mass · horizon slice',
          paragraphs: [
            'Courtyard walls and cannon platforms give a clean horizon line above the museum quarter — subtle compared to lakes, but good when you want stone against a burning sky without water foreground.',
          ],
          photoTips: [
            'Use a person or tree for scale along the wall.',
            'Museum exit timing may coincide with closing light — check hours.',
          ],
          bestLight: 'Last hour of daylight when the wall still catches direct sun; closes before full blue hour most days.',
          etiquette: ['Respect museum rules; no climbing on protected masonry.'],
          latitude: 26.456111,
          longitude: 74.639167,
        },
      ],
    },
    {
      id: 'ss-hidden-gems',
      eyebrow: 'Quieter · local angles',
      title: 'Hidden gems & softer horizons',
      intro: [
        'Fewer selfie crowds on many weekdays — still public reservoirs, lanes, and short drives. Air quality and crop-burn haze affect colour; flexible plans beat chasing a single “perfect” sunset.',
      ],
      spots: [
        {
          id: 'foy-sagar',
          name: 'Foy Sagar — wide reservoir rim',
          teaser: 'Minimal · wind & water',
          paragraphs: [
            'West of the core, Foy Sagar offers long sightlines and fewer food-stall clusters than Ana Sagar on some days — minimal composition: sky, water, one tree line.',
            'Open banks mean wind; dress for gusts in winter.',
          ],
          photoTips: [
            'Silhouette birds or cattle for scale on the horizon.',
            'After heavy rain, mud near the edge — stay on firm ground.',
          ],
          bestLight:
            'Monsoon greens and storm stacks can outperform clear winter pastels; carry rain cover for gear.',
          latitude: 26.4278,
          longitude: 74.6153,
        },
        {
          id: 'nareli-marble',
          name: 'Nareli Jain temples',
          teaser: 'Short drive · cool marble dawn',
          paragraphs: [
            'White marble complexes glow in first light — clean symmetry and fewer urban obstacles on the horizon than central Ajmer. Pair with an early departure back before heat builds.',
          ],
          photoTips: [
            'Circular polariser deepens blue sky against marble when sun is high enough.',
            'Temple rules may limit where you stand at dawn — follow staff.',
          ],
          bestLight: 'First 60–90 minutes after sunrise for soft shadows in carvings; harsh by mid-morning.',
          etiquette: ['Shoes off in sanctums; no loud groups at prayer times.'],
          latitude: 26.292,
          longitude: 74.738,
        },
        {
          id: 'dargah-bazaar-rooftops',
          name: 'Dargah outer lanes — rooftop colour',
          teaser: 'Urban · last light on stalls',
          paragraphs: [
            'Where cafés or guesthouses allow rooftop access, you get warm last rays on painted shopfronts and minaret tips — storytelling light rather than a big horizon.',
            'Always ask the owner; never assume roof rights.',
          ],
          photoTips: [
            'Shoot across lanes, not down into private homes.',
            'Fast shutter for pigeons wheeling at dusk.',
          ],
          bestLight: 'Last 30–45 minutes of daylight when stalls are still lit but sky holds colour.',
          etiquette: ['Tip staff if you use their terrace; keep noise low near prayer times.'],
          latitude: 26.4504,
          longitude: 74.6412,
        },
        {
          id: 'soniji-nasiyan-exterior',
          name: 'Soniji ki Nasiyan — temple roofline at dusk',
          teaser: 'Spires · neighbourhood sky',
          paragraphs: [
            'Even if the gilt hall is closed, the outer Jain temple roofline against twilight can read as a delicate silhouette from the street — respectful distance, no flash toward worshippers.',
          ],
          photoTips: [
            'Street-level 85mm equivalent isolates spires without entering restricted zones.',
            'Combine with ambient shop lights for warm/cool contrast.',
          ],
          bestLight: 'Blue hour just after sunset when sky still holds gradient behind spires.',
          etiquette: ['Obey any photography restrictions; some areas forbid cameras entirely.'],
          latitude: 26.456944,
          longitude: 74.635556,
        },
        {
          id: 'ana-sagar-north-embankment',
          name: 'Ana Sagar — north & east stretches',
          teaser: 'Alternate railing · fewer clusters',
          paragraphs: [
            'Walk past the busiest Baradari cluster to quieter bends — same lake, different foreground weeds and trees. Sunrise reflections can appear here when the main crowd faces west for sunset.',
          ],
          photoTips: [
            'Map app “satellite” view helps find tree gaps before you walk.',
            'Mind cyclists and evening joggers on shared paths.',
          ],
          bestLight: 'Experiment: east shore for post-sunrise sparkles; west for classic sunset.',
          latitude: 26.474,
          longitude: 74.628,
        },
      ],
    },
    {
      id: 'ss-hospitals-nearby',
      eyebrow: 'Emergency · medical',
      title: 'Hospitals nearby',
      intro: [
        'Long evenings by the water or early climbs can still mean dehydration or a slip. Same hospital list as the city safety guide — live OpenStreetMap results when available, otherwise curated Ajmer facilities.',
        'Useful anywhere in the district when you are chasing light far from your hotel.',
      ],
      spots: [],
      hospitalsOnly: true,
    },
  ],
}

const bySlug: Record<string, CityInstagramSpotsBundle> = {
  ajmer: ajmerSunriseSunset,
}

export function getCitySunriseSunsetSpotsBySlug(slug: string): CityInstagramSpotsBundle | undefined {
  return bySlug[slug]
}
