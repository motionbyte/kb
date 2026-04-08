import { phrasebookHindi } from '@/lib/translatePhrasebook'
import { devanagariToHinglish } from '@/lib/devanagariToHinglish'

/**
 * Free machine translation → Hindi (Devanagari). Browser needs network; not 100% accurate for slang.
 * Primary: Phrasebook (common casual English) → Lingva (auto source) → MyMemory en→hi.
 */

const MAX_LEN = 900
const TIMEOUT_MS = 14_000

async function fetchWithTimeout(url: string, init?: RequestInit): Promise<Response> {
  const ctrl = new AbortController()
  const t = setTimeout(() => ctrl.abort(), TIMEOUT_MS)
  try {
    return await fetch(url, { ...init, signal: ctrl.signal })
  } finally {
    clearTimeout(t)
  }
}

export type TranslateResult = {
  /** Hindi in Devanagari */
  hi: string
  /** Which backend was used */
  via: 'phrasebook' | 'lingva' | 'mymemory'
}

export async function translateAnyToHindi(text: string): Promise<TranslateResult> {
  const q = text.trim().slice(0, MAX_LEN)
  if (!q) {
    throw new Error('empty')
  }

  const book = phrasebookHindi(q)
  if (book) {
    return { hi: book, via: 'phrasebook' }
  }

  const lingvaUrl = `https://lingva.ml/api/v1/auto/hi/${encodeURIComponent(q)}`
  try {
    const res = await fetchWithTimeout(lingvaUrl, { headers: { Accept: 'application/json' } })
    if (res.ok) {
      const data = (await res.json()) as { translation?: string }
      const t = data.translation?.trim()
      if (t) return { hi: t, via: 'lingva' }
    }
  } catch {
    /* try fallback */
  }

  const mmUrl = `https://api.mymemory.translated.net/get?q=${encodeURIComponent(q)}&langpair=en|hi`
  try {
    const res = await fetchWithTimeout(mmUrl)
    if (!res.ok) throw new Error('mymemory_http')
    const data = (await res.json()) as {
      responseData?: { translatedText?: string }
    }
    const raw = data.responseData?.translatedText?.trim() ?? ''
    if (!raw || /INVALID/i.test(raw)) throw new Error('mymemory_bad')
    return { hi: raw, via: 'mymemory' }
  } catch {
    throw new Error('translate_failed')
  }
}

export function formatTranslateReply(result: TranslateResult, original: string): string {
  const shown = `${original.slice(0, 200)}${original.length > 200 ? '…' : ''}`
  const hinglish = devanagariToHinglish(result.hi)
  let backendNote: string
  if (result.via === 'phrasebook') {
    backendNote =
      'Note: Common informal English → natural Hindi (phrasebook). Safer for greetings and short slang than raw machine translation.'
  } else if (result.via === 'mymemory') {
    backendNote =
      'Note: A backup service was used (English → Hindi). This is machine-generated; tone may differ slightly.'
  } else {
    backendNote =
      'Note: The source language was detected automatically. This is machine-generated; casual phrasing or tone may not match perfectly in Hindi.'
  }
  return (
    `Say this in Hindi (Devanagari script):\n\n${result.hi}\n\n` +
    `Hinglish (Roman):\n\n${hinglish}\n\n` +
    `—\n` +
    `You wrote: “${shown}”\n` +
    `${backendNote}`
  )
}
