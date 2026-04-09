import { getCityBySlug } from '@/data/cities'

export type CurrencyExchangeGuideBundle = {
  intro: {
    eyebrow: string
    title: string
    lead: string
  }
  quickTiles: Array<{ label: string; value: string }>
  problems: string[]
  bestSpots: Array<{
    id: string
    title: string
    subtitle: string
    whySafer: string[]
    avoid: string[]
  }>
  rateAwareness: string[]
  upiGuide: {
    title: string
    steps: string[]
    notes: string[]
  }
  whyItMatters: string[]
}

const AJMER_CURRENCY_GUIDE: CurrencyExchangeGuideBundle = {
  intro: {
    eyebrow: 'Practical info',
    title: 'Currency exchange',
    lead:
      'Avoid bad rates and fake-note traps. Use verified channels, compare rates first, and keep enough INR cash for places where cards still fail.',
  },
  quickTiles: [
    { label: 'Never do', value: 'Street exchange' },
    { label: 'Best first stop', value: 'Bank / authorized forex' },
    { label: 'Card backup', value: 'Cash + UPI mix' },
    { label: 'Rate check', value: 'Live converter below' },
  ],
  problems: [
    'Airport counters are convenient but often expensive versus city counters.',
    'Street exchange carries scam risk: fake notes, hidden commission, and wrong counting.',
    'Card acceptance drops outside big hotels/malls; rural and small-market areas still rely on cash.',
  ],
  bestSpots: [
    {
      id: 'bank-branch',
      title: 'Major bank branches',
      subtitle: 'Safest default for most travellers',
      whySafer: [
        'KYC + printed slips reduce dispute risk.',
        'Better authenticity checks for notes.',
        'Clear fee disclosure compared to informal exchange.',
      ],
      avoid: ['Do not exchange via “helpers” outside branch gates.', 'Confirm final INR amount before handing over cash/passport.'],
    },
    {
      id: 'authorized-forex',
      title: 'Authorized forex counters',
      subtitle: 'Good balance of speed + documentation',
      whySafer: [
        'Licensed money changers follow compliance and provide receipts.',
        'Useful when banks are crowded or timing is tight.',
        'Often better than airport rate if you compare first.',
      ],
      avoid: ['Reject counters that refuse printed receipt.', 'Avoid cash handover before rate + commission are written.'],
    },
    {
      id: 'hotel-desk',
      title: 'Hotel concierge guidance',
      subtitle: 'Use as navigation help, not as blind trust',
      whySafer: [
        'Good hotels can point you to known counters.',
        'Helpful when language/local navigation is difficult.',
      ],
      avoid: ['Ask for exact name and location before leaving.', 'Always compare one more rate before final exchange.'],
    },
  ],
  rateAwareness: [
    'Always compare at least 2 quotes before final exchange.',
    'Ask for the net amount after fees/commission.',
    'Count notes at the counter and keep receipt until trip ends.',
  ],
  upiGuide: {
    title: 'UPI / digital payment guide',
    steps: [
      'Keep one active Indian payment method (if available) + one card backup.',
      'At shops, prefer scanning verified UPI QR over unknown payment links.',
      'For high-value payments, verify merchant name before confirming.',
      'Keep small cash for autos, tips, and places with weak network.',
    ],
    notes: [
      'Never share OTP/PIN even with “support” callers.',
      'If payment fails but money is debited, wait for SMS status before paying again.',
      'Use mobile data for payments; avoid public Wi-Fi checkout.',
    ],
  },
  whyItMatters: [
    'Money issues are the biggest travel stress multiplier.',
    'Currency scams are among the highest-risk, highest-loss situations for tourists.',
    'Strong money flow = confidence, independence, and safer decision-making.',
  ],
}

export function getCurrencyExchangeGuideByCitySlug(slug: string): CurrencyExchangeGuideBundle {
  if (slug === 'ajmer') return AJMER_CURRENCY_GUIDE
  const city = getCityBySlug(slug)
  if (!city) return AJMER_CURRENCY_GUIDE
  const b = structuredClone(AJMER_CURRENCY_GUIDE)
  b.intro.lead =
    `${b.intro.lead} In ${city.name}, use banks or authorized forex first — street touts carry the highest scam risk.`
  return b
}

