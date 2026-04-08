/**
 * Travel Hindi / Hinglish phrases for Rajasthan — used by the Language Help bot only.
 */

export type PhraseRow = {
  id: string
  /** Roman / Hinglish — what to say aloud */
  hi: string
  /** Devanagari — for reading & learning */
  hiScript?: string
  en: string
  /** Roman + English hints for matching user questions */
  keywords: string[]
}

export type PhraseCategory = {
  id: string
  emoji: string
  title: string
  categoryKeywords: string[]
  phrases: PhraseRow[]
}

export const LANGUAGE_HELP_INTRO = {
  title: 'Language help',
  subtitle: '(Practical use)',
  welcome:
    'You can type in English, हिंदी, Spanish, French, or other languages. I will show what to say in ' +
    'Hindi (Roman wording + Devanagari script + English meaning). Use the category chips, or try words ' +
    'such as meter, kitna, police, room…',
}

/** If nothing matches strongly */
export const LANGUAGE_HELP_FALLBACK =
  'No close match yet. Try shorter travel words (for example “how much”, “police”, “stop here”), or ask ' +
  '“how to say … in Hindi” in any language. In Learn mode I only cover travel Hindi phrases.'

export const LANGUAGE_HELP_OFF_TOPIC =
  'That question is outside this language coach. I only support travel Hindi (Roman + Devanagari + short ' +
  'English gloss). Try terms such as price, taxi, hotel, police, or help.'

export const PHRASE_CATEGORIES: PhraseCategory[] = [
  {
    id: 'basic',
    emoji: '💬',
    title: 'Basic phrases',
    categoryKeywords: [
      'basic',
      'phrase',
      'general',
      'price',
      'expensive',
      'cheap',
      'discount',
      'bargain',
      'hello',
      'thanks',
      'water',
      'toilet',
      'left',
      'right',
    ],
    phrases: [
      {
        id: 'b1',
        hi: 'Kitna hua?',
        hiScript: 'कितना हुआ?',
        en: 'How much?',
        keywords: ['kitna', 'how much', 'price', 'cost', 'bill', 'total', 'rupees', 'rupaye', 'paisa'],
      },
      {
        id: 'b2',
        hi: 'Yeh mehenga hai.',
        hiScript: 'यह महंगा है।',
        en: 'This is expensive.',
        keywords: ['expensive', 'mehenga', 'mehnga', 'costly', 'overpriced', 'zyada', 'kam', 'cheap'],
      },
      {
        id: 'b3',
        hi: 'Thoda kam karo.',
        hiScript: 'थोड़ा कम करो।',
        en: 'Reduce the price. / Come down a bit.',
        keywords: ['discount', 'kam', 'reduce', 'bargain', 'negotiate', 'deal', 'less'],
      },
      {
        id: 'b4',
        hi: 'Mujhe yahan jana hai.',
        hiScript: 'मुझे यहाँ जाना है।',
        en: 'I want to go here.',
        keywords: ['go', 'jana', 'here', 'yahan', 'map', 'destination', 'drop', 'reach'],
      },
      {
        id: 'b5',
        hi: 'Paani milega?',
        hiScript: 'पानी मिलेगा?',
        en: 'Can I get water?',
        keywords: ['water', 'paani', 'drink', 'bottle'],
      },
      {
        id: 'b6',
        hi: 'Dhanyavaad / Shukriya.',
        hiScript: 'धन्यवाद / शुक्रिया।',
        en: 'Thank you.',
        keywords: ['thanks', 'thank', 'shukriya', 'dhanyavaad'],
      },
      {
        id: 'b7',
        hi: 'Maaf kijiye.',
        hiScript: 'माफ़ कीजिए।',
        en: 'Excuse me / Sorry.',
        keywords: ['sorry', 'excuse', 'maaf'],
      },
    ],
  },
  {
    id: 'transport',
    emoji: '🚕',
    title: 'Transport use',
    categoryKeywords: [
      'transport',
      'auto',
      'taxi',
      'cab',
      'rickshaw',
      'driver',
      'meter',
      'route',
      'stop',
      'straight',
      'left',
      'right',
      'airport',
      'station',
    ],
    phrases: [
      {
        id: 't1',
        hi: 'Meter se chalo.',
        hiScript: 'मीटर से चलो।',
        en: 'Go by the meter. / Use the meter.',
        keywords: ['meter', 'fare', 'by meter', 'auto', 'taxi', 'rickshaw'],
      },
      {
        id: 't2',
        hi: 'Seedha jana.',
        hiScript: 'सीधा जाना।',
        en: 'Go straight.',
        keywords: ['straight', 'seedha', 'ahead', 'forward'],
      },
      {
        id: 't3',
        hi: 'Yahan rok do.',
        hiScript: 'यहाँ रोक दो।',
        en: 'Stop here.',
        keywords: ['stop', 'rok', 'here', 'yahan', 'drop'],
      },
      {
        id: 't4',
        hi: 'Left / Right mudo.',
        hiScript: 'लेफ्ट / राइट मुड़ो।',
        en: 'Turn left / right.',
        keywords: ['left', 'right', 'turn', 'mudo', 'side'],
      },
      {
        id: 't5',
        hi: 'Airport / station chhod do.',
        hiScript: 'एयरपोर्ट / स्टेशन छोड़ दो।',
        en: 'Drop me at the airport / station.',
        keywords: ['airport', 'station', 'railway', 'bus', 'drop', 'chhod'],
      },
      {
        id: 't6',
        hi: 'Kitna time lagega?',
        hiScript: 'कितना टाइम लगेगा?',
        en: 'How long will it take?',
        keywords: ['time', 'kitna', 'long', 'duration', 'late'],
      },
    ],
  },
  {
    id: 'hotel',
    emoji: '🏨',
    title: 'Hotel use',
    categoryKeywords: [
      'hotel',
      'room',
      'stay',
      'check',
      'checkout',
      'wifi',
      'key',
      'booking',
      'bill',
      'luggage',
    ],
    phrases: [
      {
        id: 'h1',
        hi: 'Room available hai?',
        hiScript: 'रूम अवेलेबल है?',
        en: 'Is a room available?',
        keywords: ['room', 'available', 'vacancy', 'book', 'booking', 'stay'],
      },
      {
        id: 'h2',
        hi: 'Check-out kab hai?',
        hiScript: 'चेक-आउट कब है?',
        en: 'When is checkout?',
        keywords: ['checkout', 'check-out', 'check out', 'time', 'late checkout'],
      },
      {
        id: 'h3',
        hi: 'Wi‑Fi password kya hai?',
        hiScript: 'वाई-फ़ाई पासवर्ड क्या है?',
        en: 'What is the Wi‑Fi password?',
        keywords: ['wifi', 'wi-fi', 'internet', 'password', 'network'],
      },
      {
        id: 'h4',
        hi: 'Mera samaan room mein rakho.',
        hiScript: 'मेरा सामान रूम में रखो।',
        en: 'Please keep my luggage in the room.',
        keywords: ['luggage', 'bag', 'samaan', 'bellboy', 'porter'],
      },
      {
        id: 'h5',
        hi: 'Bill de do.',
        hiScript: 'बिल दे दो।',
        en: 'Please give the bill.',
        keywords: ['bill', 'invoice', 'receipt', 'payment'],
      },
    ],
  },
  {
    id: 'emergency',
    emoji: '🚨',
    title: 'Emergency',
    categoryKeywords: [
      'police',
      'help',
      'emergency',
      'ambulance',
      'lost',
      'accident',
      'safe',
      'thief',
      'problem',
    ],
    phrases: [
      {
        id: 'e1',
        hi: 'Police bulao.',
        hiScript: 'पुलिस बुलाओ।',
        en: 'Call the police.',
        keywords: ['police', 'thief', 'chor', 'crime', 'report'],
      },
      {
        id: 'e2',
        hi: 'Mujhe help chahiye.',
        hiScript: 'मुझे हेल्प चाहिए।',
        en: 'I need help.',
        keywords: ['help', 'chahiye', 'need', 'assist', 'problem', 'emergency'],
      },
      {
        id: 'e3',
        hi: 'Ambulance bulao.',
        hiScript: 'एम्बुलेंस बुलाओ।',
        en: 'Call an ambulance.',
        keywords: ['ambulance', 'hospital', 'injury', 'accident', 'sick', 'bimaar'],
      },
      {
        id: 'e4',
        hi: 'Mera phone / bag kho gaya.',
        hiScript: 'मेरा फोन / बैग खो गया।',
        en: 'I lost my phone / bag.',
        keywords: ['lost', 'kho', 'missing', 'phone', 'bag', 'passport'],
      },
    ],
  },
]

/** Words that suggest the user is asking for language help (not off-topic) */
export const LANGUAGE_INTENT_WORDS = [
  'hindi',
  'hinglish',
  'phrase',
  'translate',
  'translation',
  'meaning',
  'bolna',
  'bolu',
  'kaise',
  'how to say',
  'say in',
  'what is',
  'kyun',
  'spell',
  'pronounce',
  'spanish',
  'french',
  'german',
  'japanese',
  'chinese',
  'arabic',
  'turkish',
  'korean',
  'russian',
  'italian',
  'portuguese',
  'devanagari',
  'lipi',
  'roman',
  'in hindi',
]

const GREETING_RE =
  /^(hi|hello|hey|namaste|namskar|namaskar|kaise|good morning|good evening|hola|bonjour|ciao|salut)\b/i

export function isGreeting(s: string): boolean {
  const t = s.trim()
  return t.length < 40 && GREETING_RE.test(t)
}

/** Strong off-topic: user asks unrelated things without any phrase hook */
const OFF_TOPIC_HINTS = [
  'weather',
  'forecast',
  'temperature',
  'itinerary',
  'best restaurant',
  'best hotel',
  'book ticket',
  'flight',
  'stock',
  'cricket score',
  'recipe',
  'joke',
  'who is pm',
]

export function looksOffTopic(
  message: string,
  hasPhraseHit: boolean,
  /** User asked “how to say X in Hindi” — never treat as off-topic */
  extractedTranslation?: string | null,
): boolean {
  const lower = message.toLowerCase()
  if (hasPhraseHit) return false
  if (extractedTranslation) return false
  if (LANGUAGE_INTENT_WORDS.some((w) => lower.includes(w))) return false
  if (/\b(hindi|hinglish|devanagari|phrase|translate|bol(na|u|enge))\b/i.test(message)) return false
  if (message.trim().length < 8) return false
  return OFF_TOPIC_HINTS.some((h) => lower.includes(h))
}
