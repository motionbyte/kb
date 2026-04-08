export type PriceLevel = 1 | 2 | 3 | 4

export type RestaurantVibe =
  | 'heritage_haveli'
  | 'rooftop'
  | 'courtyard'
  | 'modern_fusion'
  | 'palace'

export type AttractionCategory =
  | 'fort'
  | 'palace'
  | 'temple'
  | 'lake'
  | 'market'
  | 'museum'

export type FoodCategory = 'veg' | 'sweets' | 'thali' | 'snacks' | 'nonveg'

export interface City {
  id: string
  name: string
  slug: string
  tagline: string
  description: string
  bestTime: string
  localTips: string[]
  region: string
}

export interface Restaurant {
  id: string
  name: string
  slug: string
  cityId: string
  shortDescription: string
  tags: string[]
  vibe: RestaurantVibe
  priceLevel: PriceLevel
  area?: string
}

export interface Attraction {
  id: string
  name: string
  slug: string
  cityId: string
  shortDescription: string
  tags: string[]
  category: AttractionCategory
}

export interface FoodHighlight {
  id: string
  name: string
  slug: string
  description: string
  category: FoodCategory
  cityIds: string[]
}
