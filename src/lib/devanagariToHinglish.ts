import { hasDevanagari } from '@/lib/languageHelpNormalize'

/**
 * Lightweight Devanagari → Hinglish (Roman) transliteration.
 * Goal: readable pronunciation help (not perfect linguistic IAST).
 */
export function devanagariToHinglish(input: string): string {
  const s = input.trim()
  if (!s || !hasDevanagari(s)) return input.trim()

  const VOWEL_INDEP: Record<string, string> = {
    अ: 'a',
    आ: 'aa',
    इ: 'i',
    ई: 'ii',
    उ: 'u',
    ऊ: 'uu',
    ऋ: 'ri',
    ए: 'e',
    ऐ: 'ai',
    ओ: 'o',
    औ: 'au',
  }

  const MATRA: Record<string, string> = {
    'ा': 'aa',
    'ि': 'i',
    'ी': 'ii',
    'ु': 'u',
    'ू': 'uu',
    'ृ': 'ri',
    'े': 'e',
    'ै': 'ai',
    'ो': 'o',
    'ौ': 'au',
    'ं': 'n',
    'ँ': 'n',
    'ः': 'h',
  }

  const CONSONANT: Record<string, string> = {
    क: 'k',
    ख: 'kh',
    ग: 'g',
    घ: 'gh',
    ङ: 'ng',
    च: 'ch',
    छ: 'chh',
    ज: 'j',
    झ: 'jh',
    ञ: 'ny',
    ट: 't',
    ठ: 'th',
    ड: 'd',
    ढ: 'dh',
    ण: 'n',
    त: 't',
    थ: 'th',
    द: 'd',
    ध: 'dh',
    न: 'n',
    प: 'p',
    फ: 'ph',
    ब: 'b',
    भ: 'bh',
    म: 'm',
    य: 'y',
    र: 'r',
    ल: 'l',
    व: 'v',
    श: 'sh',
    ष: 'sh',
    स: 's',
    ह: 'h',
    क़: 'q',
    ख़: 'kh',
    ग़: 'g',
    ज़: 'z',
    फ़: 'f',
    ड़: 'd',
    ढ़: 'dh',
  }

  const VIRAMA = '्'

  let out = ''
  for (let i = 0; i < s.length; i++) {
    const ch = s[i]!

    if (VOWEL_INDEP[ch]) {
      out += VOWEL_INDEP[ch]
      continue
    }

    if (CONSONANT[ch]) {
      const base = CONSONANT[ch]
      const next = s[i + 1]

      // Consonant + virama: no inherent vowel.
      if (next === VIRAMA) {
        out += base
        i += 1
        continue
      }

      // Consonant + matra.
      if (next && MATRA[next]) {
        out += base + MATRA[next]
        i += 1
        continue
      }

      // Default inherent 'a'
      out += base + 'a'
      continue
    }

    if (MATRA[ch]) {
      out += MATRA[ch]
      continue
    }

    // Preserve punctuation/whitespace/latin digits as-is.
    out += ch
  }

  // Clean up common artifacts.
  return out
    .replace(/\s+/g, ' ')
    .replace(/aa+/g, 'aa')
    .trim()
}

