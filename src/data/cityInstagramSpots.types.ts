/** Shared bundle shape for Instagram spots and sunrise/sunset pages (same accordion UI). */

export type InstagramSpotEntry = {
  id: string
  name: string
  teaser?: string
  paragraphs: string[]
  photoTips: string[]
  bestLight: string
  etiquette?: string[]
  latitude: number
  longitude: number
}

export type InstagramSpotCategory = {
  id: string
  eyebrow: string
  title: string
  intro: string[]
  spots: InstagramSpotEntry[]
  hospitalsOnly?: boolean
}

export type CityInstagramSpotsBundle = {
  citySlug: string
  leadTitle: string
  leadParagraphs: string[]
  categories: InstagramSpotCategory[]
}
