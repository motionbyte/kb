import type { City } from '@/types'

/** Full guide entries (rich copy) */
const citiesFeatured: City[] = [
  {
    id: 'jaipur',
    name: 'Jaipur',
    slug: 'jaipur',
    tagline: 'Pink City, golden hours',
    description:
      'The capital of Rajasthan wraps you in terracotta walls, bustling bazaars, and palace grandeur — ideal for first-time visitors who want colour, craft, and cuisine in one sweep.',
    bestTime: 'October to March (pleasant days; carry a light layer for evenings).',
    localTips: [
      'Start early at Hawa Mahal or Amber Fort to beat crowds and heat.',
      'Johari and Tripolia bazaars reward slow browsing — ask before photographing artisans.',
      'Try a lassi or kachori in the old city; keep cash for small vendors.',
    ],
    region: 'East Rajasthan',
  },
  {
    id: 'udaipur',
    name: 'Udaipur',
    slug: 'udaipur',
    tagline: 'Lakes, ghats, and marble glow',
    description:
      'Romantic and serene, Udaipur pairs lake reflections with rooftop dinners and heritage walks — perfect when you want Rajasthan at a gentler pace.',
    bestTime: 'September to March; monsoon can be lush and beautiful around the lakes.',
    localTips: [
      'Sunset boat rides on Lake Pichola are popular — book ahead in peak season.',
      'Explore the old city lanes on foot; many havelis hide cafés and studios.',
      'Respect temple dress codes and photography rules at City Palace galleries.',
    ],
    region: 'Southern Rajasthan',
  },
  {
    id: 'jodhpur',
    name: 'Jodhpur',
    slug: 'jodhpur',
    tagline: 'Blue lanes, mighty fort',
    description:
      'The Blue City rises under Mehrangarh — a maze of indigo homes, spice markets, and desert-edge drama that feels cinematic at every turn.',
    bestTime: 'October to March; April–June can be very hot.',
    localTips: [
      'Allocate half a day for Mehrangarh — audio guides add rich context.',
      'Clock Tower market is a sensory feast; negotiate politely for textiles.',
      'Carry water for walks in the old blue quarters; mornings are kindest.',
    ],
    region: 'Western Rajasthan',
  },
]

/** Remaining districts — same shape; copy grows over time */
function compactCity(
  id: string,
  name: string,
  tagline: string,
  region: string,
  extraTips?: string[],
): City {
  return {
    id,
    name,
    slug: id,
    tagline,
    region,
    description: `${name} — forts, bazaars, and local rhythm across Rajasthan. Use this page as a compass; we keep adding detail.`,
    bestTime: 'October to March for most sights; carry sun cover in summer.',
    localTips: extraTips ?? [
      'Mornings are gentler at monuments and markets.',
      'Ask your stay for trusted drivers and fair fares.',
    ],
  }
}

const citiesRest: City[] = [
  {
    id: 'ajmer',
    name: 'Ajmer',
    slug: 'ajmer',
    tagline: 'Dargah breeze, Ana Sagar rim',
    region: 'Central Rajasthan',
    description:
      'Ajmer — forts, bazaars, and local rhythm across Rajasthan. Use this page as a compass; we keep adding detail.',
    bestTime:
      'October–March: clearest weather for the dargah, lakeside walks, museums, and Pushkar day-trips. April–June: start at sunrise; avoid 11 AM–4 PM outdoors. July–September: monsoon humidity & slick ghats — carry cover. Urs & Kartik: huge pilgrim flows — book stays and transport early.',
    localTips: [
      'Mornings are gentler at monuments and markets.',
      'Ask your stay for trusted drivers and fair fares.',
      'Same-day Pushkar: carry water, sun cover, and modest layers for temple areas.',
    ],
  },
  compactCity('alwar', 'Alwar', 'Sariska gateway, hill forts', 'North-East Rajasthan'),
  compactCity('banswara', 'Banswara', 'Hills, dams, tribal colour', 'Southern Rajasthan'),
  compactCity('baran', 'Baran', 'Hadoti rivers, quiet shrines', 'South-East Rajasthan'),
  compactCity('barmer', 'Barmer', 'Desert crafts, border light', 'Western Rajasthan'),
  compactCity('bharatpur', 'Bharatpur', 'Keoladeo birds, Jat lore', 'North-East Rajasthan'),
  compactCity('bhilwara', 'Bhilwara', 'Textile hum, temple towns', 'Central Rajasthan'),
  compactCity('bikaner', 'Bikaner', 'Junagarh, bhujia, camels', 'North-West Rajasthan'),
  compactCity('bundi', 'Bundi', 'Stepwell poetry, blue lanes', 'South-East Rajasthan'),
  compactCity('chittorgarh', 'Chittorgarh', 'Fort epic, tower silence', 'Southern Rajasthan'),
  compactCity('churu', 'Churu', 'Shekhawati fresco havelis', 'North-East Rajasthan'),
  compactCity('dausa', 'Dausa', 'Meena hills, village pace', 'East Rajasthan'),
  compactCity('dholpur', 'Dholpur', 'Chambal ravines, red stone', 'North-East Rajasthan'),
  compactCity('dungarpur', 'Dungarpur', 'Aravalli folds, palace lakes', 'Southern Rajasthan'),
  compactCity('hanumangarh', 'Hanumangarh', 'Ghaggar fields, ancient mounds', 'North Rajasthan'),
  compactCity('jaisalmer', 'Jaisalmer', 'Golden fort, dunes at dusk', 'Western Rajasthan'),
  compactCity('jalore', 'Jalore', 'Granite fort, spice routes', 'Western Rajasthan'),
  compactCity('jhalawar', 'Jhalawar', 'Hadoti temples, river bends', 'South-East Rajasthan'),
  compactCity('jhunjhunu', 'Jhunjhunu', 'Shekhawati mansions, fresco towns', 'North-East Rajasthan'),
  compactCity('karauli', 'Karauli', 'Palace town, Kaila Devi hills', 'East Rajasthan'),
  compactCity('kota', 'Kota', 'Chambal gardens, coaching ghats', 'South-East Rajasthan'),
  compactCity('nagaur', 'Nagaur', 'Cattle fair dust, Sufi fairgrounds', 'Western Rajasthan'),
  compactCity('pali', 'Pali', 'Jain marble, Aravalli passes', 'Western Rajasthan'),
  compactCity('pratapgarh', 'Pratapgarh', 'Tribal belt, green pockets', 'Southern Rajasthan'),
  compactCity('rajsamand', 'Rajsamand', 'Marble country, Kumbhalgarh near', 'Southern Rajasthan'),
  compactCity('sawai-madhopur', 'Sawai Madhopur', 'Ranthambhore gates, fort forest', 'East Rajasthan'),
  compactCity('sikar', 'Sikar', 'Shekhawati doors, merchant past', 'North-East Rajasthan'),
  compactCity('sirohi', 'Sirohi', 'Mount Abu climb, marble steps', 'South-West Rajasthan'),
  compactCity(
    'sri-ganganagar',
    'Sri Ganganagar',
    'Canal grids, Indira Gandhi canal',
    'North Rajasthan',
  ),
  compactCity('tonk', 'Tonk', 'Sawai Madhopur road, Nawabi lanes', 'East Rajasthan'),
]

/** All Rajasthan districts / featured cities — alphabetical for the dropdown */
export const cities: City[] = [...citiesFeatured, ...citiesRest].sort((a, b) =>
  a.name.localeCompare(b.name),
)

export function getCityBySlug(slug: string): City | undefined {
  return cities.find((c) => c.slug === slug)
}
