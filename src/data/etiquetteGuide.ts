/**
 * Cultural etiquette for visitors in Rajasthan — general guidance; customs vary by site and community.
 */

export type EtiquetteHighlight = {
  /** Short label for the “tile” */
  label: string
  /** Optional emphasis (e.g. “Mandatory”) */
  tag?: string
}

export type EtiquetteSection = {
  id: string
  emoji: string
  title: string
  subtitle?: string
  highlights: EtiquetteHighlight[]
  /** Main narrative bullets */
  details: string[]
  dos?: string[]
  donts?: string[]
}

export const ETIQUETTE_INTRO = {
  eyebrow: 'Cultural guide',
  title: 'Local etiquette',
  lead:
    'Small gestures build trust — especially at shrines, in bazaars, and around food. Nothing here replaces ' +
    'on-site rules; when in doubt, watch locals and ask quietly.',
}

export const ETIQUETTE_SECTIONS: EtiquetteSection[] = [
  {
    id: 'religious',
    emoji: '🛕',
    title: 'Religious places',
    subtitle: 'Temples, dargahs, shrines & sacred steps',
    highlights: [
      { label: 'Footwear', tag: 'Remove' },
      { label: 'Dress', tag: 'Modest' },
      { label: 'Volume', tag: 'Low' },
      { label: 'Photos', tag: 'Ask first' },
    ],
    details: [
      'Shoes come off where racks or signs say so — use the rack mindfully and keep socks if you prefer hot stone.',
      'Shoulders and knees covered reads as respectful in most places; some sites ask men to wear a waistcloth or women a dupatta.',
      'Walk clockwise where tradition expects it; don’t turn your back to the main deity casually for a selfie.',
      'At Sufi dargahs, both men and women often cover the head — carry a light scarf.',
      'Offerings and prasad: use official counters when you can; avoid loud haggling at the gate.',
    ],
    dos: [
      'Wash hands or use sanitizer before entering inner areas if basins are provided.',
      'Step aside for those praying; don’t block the qibla or garbha griha flow.',
    ],
    donts: [
      'Don’t point feet at idols or the Quran; don’t touch ritual objects without invitation.',
      'Avoid leather belts/bags where Jain or some Hindu norms restrict animal products inside.',
    ],
  },
  {
    id: 'social',
    emoji: '🤝',
    title: 'Social behaviour',
    subtitle: 'Tone, elders & the bazaar rhythm',
    highlights: [
      { label: 'Greeting', tag: 'Namaste' },
      { label: 'Elders', tag: 'First' },
      { label: 'Haggle', tag: 'Calm' },
      { label: 'Space', tag: 'Easy' },
    ],
    details: [
      'A calm “Namaste” / “Adaab” goes further than a loud hello; use titles like “ji” when unsure (e.g. Sharma ji).',
      'Let elders be served first in informal settings; stand slightly when an elder enters a small room if you’re already seated.',
      'In markets, smile, quote a fair counter-offer, and be ready to walk — aggression rarely wins goodwill.',
      'Public displays of affection draw stares; keep affection discreet in conservative areas.',
      'Ask before photographing people, especially women and children — a nod beats a surprise shot.',
    ],
    dos: [
      'Use your right hand for handing over money, cards, or prasad.',
      'Queue loosely but fairly — a gentle “excuse me” works better than pushing.',
    ],
    donts: [
      'Avoid prolonged staring; if you’re curious, a polite question breaks the ice.',
      'Don’t touch someone’s head casually; it can read as overly familiar.',
    ],
  },
  {
    id: 'food',
    emoji: '🍽️',
    title: 'Food etiquette',
    subtitle: 'Thali, street & sharing',
    highlights: [
      { label: 'Hand', tag: 'Right' },
      { label: 'Waste', tag: 'Minimal' },
      { label: 'Shared', tag: 'Thali' },
      { label: 'Water', tag: 'Ask' },
    ],
    details: [
      'Eat and pass food with the right hand; the left is avoided for touching shared dishes in many households.',
      'If you’re served from a common bowl, take a side you haven’t bitten into back into the pot.',
      'Street snacks: follow the stall’s busiest hours; a busy kadhai usually means quicker turnover.',
      'Saying “bas, thank you” when you’re full is clearer than leaving half a plate without a word — hosts notice.',
      'Alcohol isn’t universal — check venue and local dry days before assuming it’s on the menu.',
    ],
    dos: [
      'Compliment the cook briefly if you loved the meal — it lands well in home stays.',
      'Accept tea once if offered unless you truly can’t; a polite decline is fine.',
    ],
    donts: [
      'Don’t waste water in arid regions — pour small refills instead of leaving full glasses.',
    ],
  },
  {
    id: 'photo',
    emoji: '📸',
    title: 'Photography etiquette',
    subtitle: 'People, prayer & privacy',
    highlights: [
      { label: 'People', tag: 'Consent' },
      { label: 'Prayer', tag: 'No flash' },
      { label: 'Drone', tag: 'Permit' },
      { label: 'Kids', tag: 'Guardian' },
    ],
    details: [
      'Crowds around ceremonies are not automatic consent — step to the side and gesture camera-up for a yes/no.',
      'Many sanctuaries ban photography inside; signs beat assumptions — put the phone away when asked.',
      'Flash can disturb worshippers and old murals; prefer natural light or higher ISO.',
      'Drones need ASI / local authority clearance at monuments — fines are real.',
      'If someone poses for you, a small thank-you or buying a print from them is fair when it’s their livelihood.',
    ],
    dos: [
      'Share one preview shot if they ask — it builds trust.',
    ],
    donts: [
      'Don’t live-stream someone’s prayer without explicit permission.',
    ],
  },
]

export type TippingBand = {
  id: string
  context: string
  range: string
  /** Short line under the percentage */
  note: string
}

export const ETIQUETTE_TIPPING = {
  emoji: '💰',
  title: 'Tipping culture',
  subtitle: 'Optional but appreciated — round when service shines',
  intro:
    'Tipping isn’t legally required; it rewards good service. Round to the nearest ₹10/50 for small bills.',
  bands: [
    {
      id: 'rest',
      context: 'Restaurants & cafés',
      range: '5–10%',
      note: 'On the bill before tax if service charge isn’t already added — check the printout.',
    },
    {
      id: 'guide',
      context: 'Guides (half / full day)',
      range: '₹200–500+',
      note: 'Scale with group size and depth; half-day toward the lower end.',
    },
    {
      id: 'driver',
      context: 'Private drivers',
      range: '₹100–300 / day',
      note: 'Or round up the fare on app rides for long hauls.',
    },
    {
      id: 'porter',
      context: 'Station / hotel porter',
      range: '₹20–50 / bag',
      note: 'Agree if unmetered; skip if you carried bags yourself.',
    },
    {
      id: 'housekeeping',
      context: 'Housekeeping',
      range: '₹50–100 / night',
      note: 'Leave on checkout with a note — not on the pillow in every property.',
    },
  ] satisfies TippingBand[],
}
