import type { FoodCategory, FoodHighlight } from '@/types'

export const foodHighlights: FoodHighlight[] = [
  {
    id: 'dal-baati',
    name: 'Dal Baati Churma',
    slug: 'dal-baati',
    description:
      'Baked wheat balls with lentil dal and sweet churma — the Rajasthan meal everyone asks for.',
    category: 'thali',
    cityIds: ['jaipur', 'jodhpur', 'udaipur'],
  },
  {
    id: 'ghevar',
    name: 'Ghewar',
    slug: 'ghevar',
    description:
      'Disc-shaped sweet with honeycomb texture — monsoon season favourite in Jaipur.',
    category: 'sweets',
    cityIds: ['jaipur'],
  },
  {
    id: 'laal-maas',
    name: 'Laal Maas',
    slug: 'laal-maas',
    description:
      'Fiery mutton curry with mathania chillies — a classic non-veg order in royal kitchens.',
    category: 'nonveg',
    cityIds: ['jaipur', 'jodhpur', 'udaipur'],
  },
  {
    id: 'kachori',
    name: 'Pyaz Kachori',
    slug: 'pyaz-kachori',
    description:
      'Crisp kachoris stuffed with spiced onion — best enjoyed hot from old-city stalls.',
    category: 'snacks',
    cityIds: ['jaipur', 'jodhpur'],
  },
  {
    id: 'gatte',
    name: 'Gatte ki Sabzi',
    slug: 'gatte',
    description:
      'Gram-flour dumplings in yoghurt gravy — comforting vegetarian staple.',
    category: 'veg',
    cityIds: ['jaipur', 'udaipur', 'jodhpur'],
  },
  {
    id: 'malai-ghewar',
    name: 'Rabri & Malai Sweets',
    slug: 'malai-sweets',
    description:
      'Creamy milk-based sweets across mithai shops — perfect after a spicy thali.',
    category: 'sweets',
    cityIds: ['jaipur', 'udaipur', 'jodhpur'],
  },
]

export const FOOD_CATEGORY_LABELS: Record<FoodCategory, string> = {
  veg: 'Vegetarian',
  sweets: 'Sweets',
  thali: 'Thali & regional meals',
  snacks: 'Snacks & street',
  nonveg: 'Non-vegetarian',
}
