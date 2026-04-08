/**
 * General travel-safety tips with Rajasthan context — planning aid, not professional advice.
 */

export type SafetyTipsCategory = {
  id: string
  emoji: string
  title: string
  lead?: string
  tips: string[]
}

export const SAFETY_TIPS_CATEGORIES: SafetyTipsCategory[] = [
  {
    id: 'heat-health',
    emoji: '☀️',
    title: 'Heat, sun & hydration',
    lead: 'Rajasthan days can be intense — pace yourself, especially around forts and open ghats.',
    tips: [
      'Carry water; sip often. Prefer sealed bottles at MRP from shops you trust.',
      'Wear a hat or scarf; sunglasses reduce glare on pale stone.',
      'Schedule heavy walking early or late; take shade breaks.',
      'Know signs of heat exhaustion (dizziness, nausea) — move to cool shade and seek help if needed.',
    ],
  },
  {
    id: 'temples-crowds',
    emoji: '🛕',
    title: 'Temples, dargahs & crowds',
    tips: [
      'Dress modestly; cover shoulders and knees where local norms expect it.',
      'Remove shoes where required; watch your belongings in shoe racks.',
      'Keep cash minimal; use a small cross-body bag in crowds.',
      'Follow photography rules — many inner sanctums forbid cameras.',
      'In very dense gatherings, agree a meet-up point with your group outside.',
    ],
  },
  {
    id: 'women-solo',
    emoji: '👤',
    title: 'Women & solo travellers',
    tips: [
      'Share live location with someone you trust when moving between cities.',
      'Prefer licensed cabs or app rides at night; sit in the back, note the plate.',
      'Trust your instincts — leave uncomfortable situations firmly.',
      "1090 is the national women's helpline; 112 works for emergencies.",
    ],
  },
  {
    id: 'night-transport',
    emoji: '🌙',
    title: 'Evenings, night travel & remote areas',
    tips: [
      'Stick to lit streets in old cities; avoid isolated shortcuts you haven’t checked on maps.',
      'Pre-book late airport or station transfers when possible.',
      'On desert or safari outings, use only registered operators; confirm return time.',
      'Avoid swimming in unfamiliar water bodies; currents and depth vary.',
    ],
  },
  {
    id: 'money-docs',
    emoji: '🎒',
    title: 'Money, phone & documents',
    tips: [
      'Split cash and cards; keep scans of passport/ID in encrypted cloud storage.',
      'Use hotel safe when available; carry one ID copy, not everything together.',
      'ATM: cover PIN; prefer machines inside bank branches in unfamiliar areas.',
      'If robbed, block cards immediately; file a police report for insurance.',
    ],
  },
  {
    id: 'food-water',
    emoji: '💧',
    title: 'Food & water hygiene',
    tips: [
      'Hot, freshly cooked food is usually safer than long-exposed buffets.',
      'Peel fruit yourself; be cautious with ice if you have a sensitive stomach.',
      'Street food: pick busy stalls with high turnover.',
      'Carry oral rehydration salts if you’re prone to dehydration.',
    ],
  },
  {
    id: 'animals',
    emoji: '🐪',
    title: 'Animals, safaris & photos',
    tips: [
      'Don’t pet or feed monkeys — bites and scratches need medical attention.',
      'Keep distance from snakes and stray dogs; rabies post-exposure care exists but prevention is best.',
      'Animal rides: check that operators treat animals responsibly; walk away from cruelty.',
    ],
  },
  {
    id: 'medical',
    emoji: '⚕️',
    title: 'Health & emergencies',
    tips: [
      '112 — unified emergency; 108 — ambulance in many states (verify locally).',
      'Carry regular prescriptions with pharmacy labels; note your blood type if relevant.',
      'For serious symptoms, prefer established hospitals over unknown clinics.',
    ],
  },
]
