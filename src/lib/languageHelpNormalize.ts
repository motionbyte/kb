/**
 * Normalize user input: any language → better matching for Hindi phrase intents.
 */

/** Extract what user wants translated from common question patterns (English + mixed). */
export function extractTranslationTarget(raw: string): string | null {
  const t = raw.trim()
  const patterns: Array<{ re: RegExp; g: number }> = [
    { re: /^how\s+(?:do\s+i|should\s+i|can\s+i)\s+say\s+["'“”]?(.+?)["'“”]?\s*[?.!…]*$/i, g: 1 },
    { re: /^how\s+to\s+say\s+["'“”]?(.+?)["'“”]?\s*[?.!…]*$/i, g: 1 },
    { re: /^tell\s+me\s+how\s+to\s+say\s+["'“”]?(.+?)["'“”]?\s*[?.!…]*$/i, g: 1 },
    { re: /^what\s+is\s+["'“”]?(.+?)["'“”]?\s+in\s+(?:hindi|hinglish)\s*[?.!…]*$/i, g: 1 },
    { re: /^what(?:'s|s)\s+["'“”]?(.+?)["'“”]?\s+in\s+(?:hindi|hinglish)\s*[?.!…]*$/i, g: 1 },
    { re: /^translate\s+["'“”]?(.+?)["'“”]?\s*[?.!…]*$/i, g: 1 },
    { re: /^say\s+["'“”]?(.+?)["'“”]?\s+in\s+hindi\s*[?.!…]*$/i, g: 1 },
    { re: /^(.+?)\s+ko\s+hindi\s+mein\s+kaise\s+boleh?/i, g: 1 },
    { re: /^(.+?)\s+in\s+hindi\s*(?:please|pls)?\s*[?.!…]*$/i, g: 1 },
  ]

  for (const { re, g } of patterns) {
    const m = t.match(re)
    if (m) {
      const s = m[g]?.trim() ?? ''
      if (s.length > 0 && s.length < 200 && !/^(hindi|hinglish)$/i.test(s)) return s
    }
  }
  return null
}

const DEVANAGARI = /[\u0900-\u097F]/

export function hasDevanagari(s: string): boolean {
  return DEVANAGARI.test(s)
}

export function tokenizeLoose(s: string): string[] {
  return s
    .replace(/[.,;:!?…'"“”]/g, ' ')
    .split(/\s+/)
    .map((x) => x.trim())
    .filter(Boolean)
}

export function normalizeLatinFold(s: string): string {
  return s
    .normalize('NFD')
    .replace(/\p{M}/gu, '')
    .toLowerCase()
}

export function keywordScore(message: string, kw: string): number {
  const k = kw.trim()
  if (!k) return 0

  if (DEVANAGARI.test(k)) {
    return message.includes(k) ? 2.5 : 0
  }

  const msgLower = message.toLowerCase()
  const kl = k.toLowerCase()
  if (kl.length <= 2) {
    return new RegExp(`(^|[^a-z0-9áéíóúñü])${escapeReg(kl)}([^a-z0-9áéíóúñü]|$)`, 'i').test(message)
      ? 2
      : 0
  }

  if (msgLower.includes(kl)) {
    const re = new RegExp(`(^|[\\s,.;:!?…(])${escapeReg(kl)}($|[\\s,.;:!?…)])`, 'i')
    return re.test(message) ? 3 : 2
  }
  return 0
}

function escapeReg(s: string): string {
  return s.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')
}

export function fuzzyLatinMatch(message: string, kw: string): number {
  const kl = kw.toLowerCase()
  if (kl.length < 4) return 0
  const words = tokenizeLoose(normalizeLatinFold(message))
  for (const w of words) {
    if (w.length < 4) continue
    if (levenshtein(w, kl) <= 1) return 2
    if (kl.length >= 6 && levenshtein(w, kl) <= 2) return 1.5
  }
  return 0
}

function levenshtein(a: string, b: string): number {
  const m = a.length
  const n = b.length
  if (m === 0) return n
  if (n === 0) return m
  const dp: number[][] = Array.from({ length: m + 1 }, () => new Array(n + 1).fill(0))
  for (let i = 0; i <= m; i++) dp[i][0] = i
  for (let j = 0; j <= n; j++) dp[0][j] = j
  for (let i = 1; i <= m; i++) {
    for (let j = 1; j <= n; j++) {
      const c = a[i - 1] === b[j - 1] ? 0 : 1
      dp[i][j] = Math.min(dp[i - 1][j] + 1, dp[i][j - 1] + 1, dp[i - 1][j - 1] + c)
    }
  }
  return dp[m][n]
}

export function fuzzyKeywordScore(message: string, kw: string): number {
  return Math.max(keywordScore(message, kw), fuzzyLatinMatch(message, kw))
}
