import { PHRASE_EXTRA_KEYWORDS } from '@/data/phraseExtraKeywords'
import {
  LANGUAGE_HELP_FALLBACK,
  LANGUAGE_HELP_INTRO,
  LANGUAGE_HELP_OFF_TOPIC,
  PHRASE_CATEGORIES,
  type PhraseCategory,
  type PhraseRow,
  isGreeting,
  looksOffTopic,
} from '@/data/languageHelpKnowledge'
import {
  extractTranslationTarget,
  fuzzyKeywordScore,
  tokenizeLoose,
} from '@/lib/languageHelpNormalize'

export type BotPhraseLine = {
  hi: string
  hiScript?: string
  en: string
}

export type BotReply = {
  body: string
  phrases?: BotPhraseLine[]
}

const CAT_PREFIX = /^__cat:([\w-]+)__$/

function allKeywords(phrase: PhraseRow): string[] {
  return [...phrase.keywords, ...(PHRASE_EXTRA_KEYWORDS[phrase.id] ?? [])]
}

function scorePhraseAdvanced(blob: string, phrase: PhraseRow): number {
  let score = 0
  for (const kw of allKeywords(phrase)) {
    score += fuzzyKeywordScore(blob, kw)
  }
  if (phrase.hiScript && blob.includes(phrase.hiScript)) score += 4
  for (const w of tokenizeLoose(phrase.hi)) {
    if (w.length > 2) score += fuzzyKeywordScore(blob, w) * 0.35
  }
  return score
}

function scoreCategoryMessage(blob: string, cat: PhraseCategory): number {
  let s = 0
  for (const kw of cat.categoryKeywords) {
    s += fuzzyKeywordScore(blob, kw)
  }
  for (const p of cat.phrases) {
    s += scorePhraseAdvanced(blob, p) * 0.4
  }
  return s
}

function formatCategory(cat: PhraseCategory): BotReply {
  const lines = cat.phrases.map((p) => {
    const lipi = p.hiScript ? ` | ${p.hiScript}` : ''
    return `${p.hi}${lipi} → ${p.en}`
  })
  const body = `${cat.emoji} ${cat.title}\n\n${lines.join('\n')}`
  return {
    body,
    phrases: cat.phrases.map((p) => ({ hi: p.hi, hiScript: p.hiScript, en: p.en })),
  }
}

function teachPhrase(phrase: PhraseRow, related: PhraseRow[]): BotReply {
  const lipi = phrase.hiScript ? `\nDevanagari script: ${phrase.hiScript}` : ''
  const body =
    `Hindi (Roman): ${phrase.hi}${lipi}\nEnglish meaning: ${phrase.en}` +
    (related.length
      ? `\n\nOther useful phrases:\n${related.map((p) => `• ${p.hi} — ${p.en}`).join('\n')}`
      : '')
  return {
    body,
    phrases: [phrase, ...related].map((p) => ({ hi: p.hi, hiScript: p.hiScript, en: p.en })),
  }
}

function bestPhraseMatch(blob: string): { phrase: PhraseRow; cat: PhraseCategory; score: number } | null {
  let best: { phrase: PhraseRow; cat: PhraseCategory; score: number } | null = null
  for (const cat of PHRASE_CATEGORIES) {
    for (const phrase of cat.phrases) {
      const score = scorePhraseAdvanced(blob, phrase)
      if (!best || score > best.score) {
        best = { phrase, cat, score }
      }
    }
  }
  return best && best.score >= 2.5 ? best : null
}

function weakPhraseMatch(blob: string): { phrase: PhraseRow; cat: PhraseCategory; score: number } | null {
  let best: { phrase: PhraseRow; cat: PhraseCategory; score: number } | null = null
  for (const cat of PHRASE_CATEGORIES) {
    for (const phrase of cat.phrases) {
      const score = scorePhraseAdvanced(blob, phrase)
      if (!best || score > best.score) {
        best = { phrase, cat, score }
      }
    }
  }
  return best && best.score >= 1 ? best : null
}

function bestCategoryMatch(blob: string): { cat: PhraseCategory; score: number } | null {
  let best: { cat: PhraseCategory; score: number } | null = null
  for (const cat of PHRASE_CATEGORIES) {
    const score = scoreCategoryMessage(blob, cat)
    if (!best || score > best.score) {
      best = { cat, score }
    }
  }
  return best && best.score >= 3.5 ? best : null
}

export function getLanguageHelpReply(input: string): BotReply {
  const raw = input.trim()
  if (!raw) {
    return { body: LANGUAGE_HELP_INTRO.welcome }
  }

  const catCmd = raw.match(CAT_PREFIX)
  if (catCmd) {
    const cat = PHRASE_CATEGORIES.find((c) => c.id === catCmd[1])
    if (cat) return formatCategory(cat)
  }

  if (isGreeting(raw)) {
    return { body: `Hello! ${LANGUAGE_HELP_INTRO.welcome}` }
  }

  const extracted = extractTranslationTarget(raw)
  const blob = extracted ? `${raw}\n${extracted}` : raw

  const phraseHit = bestPhraseMatch(blob)
  const catHit = bestCategoryMatch(blob)
  const weakHit = weakPhraseMatch(blob)
  const hasPhraseHit = Boolean(phraseHit || catHit || (weakHit && weakHit.score >= 1.8))

  if (looksOffTopic(raw, hasPhraseHit, extracted)) {
    return { body: LANGUAGE_HELP_OFF_TOPIC }
  }

  if (phraseHit && phraseHit.score >= 2.5) {
    const { phrase, cat } = phraseHit
    const related = cat.phrases.filter((p) => p.id !== phrase.id).slice(0, 4)
    return teachPhrase(phrase, related)
  }

  if (catHit && catHit.score >= 3.5) {
    return formatCategory(catHit.cat)
  }

  if (weakHit && weakHit.score >= 1) {
    return teachPhrase(weakHit.phrase, [])
  }

  return { body: LANGUAGE_HELP_FALLBACK }
}
