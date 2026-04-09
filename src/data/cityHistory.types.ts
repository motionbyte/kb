/** Shared types for city guide history accordions */

export type HistoryTimelineEntry = {
  id: string
  years: string
  rulerOrEra: string
  work: string
}

export type HistorySection = {
  id: string
  eyebrow: string
  title: string
  paragraphs: string[]
  timeline: HistoryTimelineEntry[]
}

export type CityHistoryBundle = {
  citySlug: string
  whatIsTitle: string
  whatIsParagraphs: string[]
  sections: HistorySection[]
}
