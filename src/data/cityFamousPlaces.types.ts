/** Types for “Best time to visit” famous-place accordions */

export type VisitHoursSource = 'official' | 'community'

export type VisitHoursInfo = {
  summary: string
  lines?: string[]
  source: VisitHoursSource
  note?: string
}

export type FamousPlace = {
  id: string
  name: string
  teaser?: string
  paragraphs: string[]
  imageSrc: string
  imageAlt: string
  latitude: number
  longitude: number
  bestTimeHighlight?: string
  visitHours?: VisitHoursInfo
}
