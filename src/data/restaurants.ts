import type { Restaurant } from '@/types'

export const restaurants: Restaurant[] = [
  {
    id: '1135-ad',
    name: '1135 AD',
    slug: '1135-ad',
    cityId: 'jaipur',
    shortDescription:
      'Dinner inside Amber Fort with royal Rajasthani fare and candlelit ambience — book ahead.',
    tags: ['Fine dine', 'Rajasthani thali'],
    vibe: 'palace',
    priceLevel: 4,
    area: 'Amber',
  },
  {
    id: 'peacock-rooftop',
    name: 'Peacock Rooftop Restaurant',
    slug: 'peacock-rooftop',
    cityId: 'jaipur',
    shortDescription:
      'Relaxed rooftop with views over the Pink City — mixed Indian and continental crowd-pleasers.',
    tags: ['Rooftop', 'Sunset'],
    vibe: 'rooftop',
    priceLevel: 2,
    area: 'Hanuman Chowk',
  },
  {
    id: 'samode-haveli',
    name: 'Samode Haveli Dining',
    slug: 'samode-haveli',
    cityId: 'jaipur',
    shortDescription:
      'Courtyard dining in a restored noble home — heritage setting with calm lighting.',
    tags: ['Heritage', 'Courtyard'],
    vibe: 'heritage_haveli',
    priceLevel: 3,
    area: 'Gangapole',
  },
  {
    id: 'udaipur-rooftop',
    name: 'Ambrai',
    slug: 'ambrai-udaipur',
    cityId: 'udaipur',
    shortDescription:
      'Lake-facing tables with City Palace views — romantic and popular for dinner.',
    tags: ['Lake view', 'Romantic'],
    vibe: 'rooftop',
    priceLevel: 3,
    area: 'Ambrai Ghat',
  },
  {
    id: 'raas-leela',
    name: 'Raas Leela',
    slug: 'raas-leela',
    cityId: 'udaipur',
    shortDescription:
      'Contemporary Indian plates in a stylish courtyard setting near the old city.',
    tags: ['Fusion', 'Courtyard'],
    vibe: 'courtyard',
    priceLevel: 3,
    area: 'Lal Ghat',
  },
  {
    id: 'jodhpur-indique',
    name: 'Indique',
    slug: 'indique-jodhpur',
    cityId: 'jodhpur',
    shortDescription:
      'Rooftop over Mehrangarh’s glow — North Indian and barbecue favourites.',
    tags: ['Fort view', 'Rooftop'],
    vibe: 'rooftop',
    priceLevel: 2,
    area: 'Sardar Market',
  },
  {
    id: 'on-the-rocks',
    name: 'On The Rocks',
    slug: 'on-the-rocks-jodhpur',
    cityId: 'jodhpur',
    shortDescription:
      'Modern grill and bar near Ajit Bhawan — polished, international-friendly.',
    tags: ['Grill', 'Bar'],
    vibe: 'modern_fusion',
    priceLevel: 3,
    area: 'Circuit House Road',
  },
  {
    id: 'hanwant-mahal',
    name: 'Hanwant Mahal',
    slug: 'hanwant-mahal-jodhpur',
    cityId: 'jodhpur',
    shortDescription:
      'Heritage dining with Rajasthani specials and fort panoramas — special-occasion vibes.',
    tags: ['Rajasthani', 'Views'],
    vibe: 'heritage_haveli',
    priceLevel: 3,
    area: 'Umaid Bhawan zone',
  },
]

export const VIBE_LABELS: Record<Restaurant['vibe'], string> = {
  heritage_haveli: 'Heritage haveli',
  rooftop: 'Rooftop',
  courtyard: 'Courtyard',
  modern_fusion: 'Modern / fusion',
  palace: 'Palace / royal setting',
}
