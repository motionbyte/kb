export type CarrierId = 'jio' | 'airtel' | 'vi'

export type InternetGuideBundle = {
  intro: {
    eyebrow: string
    title: string
    lead: string
  }
  quickTiles: Array<{ label: string; value: string }>
  bestNetworks: {
    verdict: string
    cityNotes: string[]
    carriers: Array<{
      id: CarrierId
      name: string
      vibe: string
      bestFor: string[]
      watchOut: string[]
    }>
  }
  rechargeHowTo: {
    title: string
    steps: string[]
    proTips: string[]
    officialLinks: Array<{ label: string; url: string }>
  }
  dataPlans: {
    title: string
    lead: string
    tiles: Array<{ label: string; value: string; note?: string }>
    guardrails: string[]
  }
  publicWifi: {
    title: string
    safeRules: string[]
    redFlags: string[]
    ifSomethingFeelsOff: string[]
  }
  whyItMatters: {
    title: string
    bullets: string[]
  }
}

const BASE_LINKS = {
  jio: 'https://www.jio.com/',
  airtel: 'https://www.airtel.in/',
  vi: 'https://www.myvi.in/',
  upi: 'https://www.npci.org.in/what-we-do/upi/product-overview',
}

const AJMER_INTERNET: InternetGuideBundle = {
  intro: {
    eyebrow: 'Practical info',
    title: 'Internet',
    lead:
      'Pick a network with confidence, recharge without confusion, and use public Wi‑Fi safely. Built for travellers who rely on maps, translation, and payments every day.',
  },
  quickTiles: [
    { label: 'Best default', value: 'Jio / Airtel' },
    { label: 'Recharge', value: 'UPI or carrier app' },
    { label: 'Wi‑Fi rule', value: 'No banking' },
    { label: 'Anti‑scam', value: 'Verify links' },
  ],
  bestNetworks: {
    verdict:
      'In Ajmer, **Jio and Airtel** are the safest “first pick” for most tourists. If you want maximum reliability, test both at your hotel (signal indoors matters).',
    cityNotes: [
      'Old-city lanes can be patchy indoors—your hotel room signal matters more than street signal.',
      'For day trips (Pushkar / highways), network stability can vary—keep offline maps as backup.',
      'If you are buying only one SIM, pick the one that works best inside your stay (room + lobby).',
    ],
    carriers: [
      {
        id: 'jio',
        name: 'Jio',
        vibe: 'Strong value + wide usage',
        bestFor: ['Tourists who want a simple “works everywhere” default', 'Good app ecosystem (recharge, usage, support)'],
        watchOut: ['Some spots may feel weaker indoors—test inside your hotel', 'Avoid unofficial “activation later” promises'],
      },
      {
        id: 'airtel',
        name: 'Airtel',
        vibe: 'Often great consistency',
        bestFor: ['Reliable day-to-day data', 'If your friends/host recommends it for your area'],
        watchOut: ['Plan pricing varies—confirm the exact pack before paying', 'Prefer official channels (Airtel Thanks app/website)'],
      },
      {
        id: 'vi',
        name: 'Vi',
        vibe: 'Good in some pockets',
        bestFor: ['If Vi is specifically strong where you stay', 'Porting/continuity if you already use Vi'],
        watchOut: ['Coverage can vary more by neighbourhood—test signal first if possible'],
      },
    ],
  },
  rechargeHowTo: {
    title: 'How to recharge (the easy way)',
    steps: [
      'Find your carrier app/official site (Jio / Airtel / Vi).',
      'Enter your mobile number and choose a plan (data + validity).',
      'Pay with UPI (recommended) or card; save the confirmation SMS.',
      'Check remaining data in the carrier app (or via the plan details).',
    ],
    proTips: [
      'If a shopkeeper sends you a payment link on WhatsApp/SMS, do not pay—use the official app or UPI QR.',
      'If you are new to India, ask your hotel to help you do the first recharge via official app (2 minutes).',
      'Turn on “data saver” and offline maps before long walking days.',
    ],
    officialLinks: [
      { label: 'Jio (official)', url: BASE_LINKS.jio },
      { label: 'Airtel (official)', url: BASE_LINKS.airtel },
      { label: 'Vi (official)', url: BASE_LINKS.vi },
      { label: 'UPI overview', url: BASE_LINKS.upi },
    ],
  },
  dataPlans: {
    title: 'Data plans (India advantage)',
    lead:
      'India is usually cheaper than many countries. Instead of chasing the “perfect” plan, pick a simple daily-data pack that matches your routine.',
    tiles: [
      { label: 'Light use', value: 'Maps + chat + bookings', note: 'If you mostly use hotel Wi‑Fi.' },
      { label: 'Everyday travel', value: 'Maps + translation + payments', note: 'Best default for tourists.' },
      { label: 'Heavy use', value: 'Video + hotspot + long rides', note: 'Good for road trips and streaming.' },
      { label: 'Emergency backup', value: 'Small top‑up pack', note: 'Keeps you connected when things go wrong.' },
    ],
    guardrails: [
      'Confirm **validity** (days) before paying; cheap packs can expire quickly.',
      'Avoid unofficial “special tourist plan” pitches unless it is shown inside the official app.',
      'If hotspot matters, ask whether the pack allows tethering without restrictions.',
    ],
  },
  publicWifi: {
    title: 'Public Wi‑Fi: use it safely',
    safeRules: [
      'Do not do banking/UPI payments on public Wi‑Fi (use mobile data).',
      'Prefer your hotel Wi‑Fi, but still avoid unknown links and popups.',
      'Turn off “auto‑join Wi‑Fi” so your phone does not connect to fake networks.',
      'If a captive portal asks for extra permissions, personal details, or OTPs—leave.',
    ],
    redFlags: [
      'Network name looks like a popular place but with extra symbols/spaces (common spoof).',
      'Login page asks for card details, Aadhaar/passport upload, or “verification fee”.',
      'You get a “security alert” popup telling you to install an app/extension.',
    ],
    ifSomethingFeelsOff: [
      'Disconnect immediately and forget the network.',
      'Switch to mobile data and change passwords only on a trusted connection.',
      'If you entered an OTP or paid something: contact your bank/app support right away.',
    ],
  },
  whyItMatters: {
    title: 'Why this matters',
    bullets: [
      'Maps: finding gates, ghats, and the right entrance saves time and stress.',
      'Translator: quick, clear communication reduces misunderstandings (and scams).',
      'Payments: UPI/cards and booking confirmations rely on stable internet.',
      'Confidence: being connected makes you independent even when plans change.',
    ],
  },
}

export function getInternetGuideByCitySlug(slug: string): InternetGuideBundle {
  if (slug === 'ajmer') return AJMER_INTERNET
  // Default: use Ajmer bundle as a safe baseline copy for now.
  return AJMER_INTERNET
}

