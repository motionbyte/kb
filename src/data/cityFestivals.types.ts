/**
 * Shared types for city festival bundles (Sanātana, Islamic, civic, live listings).
 */

export type FestivalOrigin = {
  whenStarted: string
  attributedWho: string
}

export type FestivalEntry = {
  id: string
  name: string
  teaser?: string
  why: string[]
  origin: FestivalOrigin
  scientificAndSocial: string[]
}

export type FestivalCategory = {
  id: string
  eyebrow: string
  title: string
  intro: string[]
  festivals: FestivalEntry[]
  liveEvents?: boolean
}

export type CityFestivalsBundle = {
  citySlug: string
  leadTitle: string
  leadParagraphs: string[]
  categories: FestivalCategory[]
}
