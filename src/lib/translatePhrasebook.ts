/**
 * Natural Hindi for very common casual English — avoids silly literal machine output
 * (e.g. “what’s up baby” → not “क्या हुआ बच्चे”).
 */

export function phrasebookHindi(raw: string): string | null {
  const normalized = raw
    .trim()
    .replace(/\s+/g, ' ')
    .replace(/\s*[?!.…]+$/u, '')
    .trim()
  if (!normalized) return null

  const lower = normalized.toLowerCase()

  // What's up / whats up (+ optional words: baby, bro, dude, man)
  if (
    /^what's up\b/i.test(normalized) ||
    /^whats up\b/i.test(normalized) ||
    /^what up\b/i.test(normalized)
  ) {
    const hasBaby = /\bbaby\b/i.test(normalized)
    const hasBro = /\b(bro|dude|man|yaar)\b/i.test(normalized)
    if (hasBaby) {
      return 'अरे, क्या हाल है? / हाय, सब ठीक है? (अनौपचारिक, प्यार भरा अंदाज़)'
    }
    if (hasBro) {
      return 'क्या हाल-चाल है? / क्या चल रहा है? (दोस्ताना)'
    }
    return 'क्या हाल है? / क्या चल रहा है? / सब ठीक? (अनौपचारिक नमस्कार)'
  }

  if (/^sup'?$/i.test(lower) || /^wassup$/i.test(lower) || /^waddup$/i.test(lower)) {
    return 'क्या हाल है? / क्या चल रहा है?'
  }

  // Very short casual hi
  if (/^hi+\s*(there)?$/i.test(lower) || /^hey+\s*(there)?$/i.test(lower)) {
    return 'नमस्ते / हाय / अरे हाँ'
  }

  if (/^how\s+are\s+you\b/i.test(normalized)) {
    if (/\bbaby\b/i.test(normalized)) {
      return 'तुम कैसी हो? / तुम्हारा क्या हाल है? (प्यार से पूछना)'
    }
    return 'आप कैसे हैं? / तुम कैसे हो?'
  }

  if (/^i\s+miss\s+you\b/i.test(lower)) {
    return 'मुझे तुम्हारी बहुत याद आती है'
  }

  if (/^i\s+love\s+you\b/i.test(lower)) {
    return 'मैं तुमसे प्यार करता हूँ / मैं तुमसे प्यार करती हूँ'
  }

  return null
}
