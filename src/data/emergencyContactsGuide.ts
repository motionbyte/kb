export type EmergencyButton = {
  id: string
  label: string
  number: string
  note?: string
  /** For screen readers / clarity */
  ariaLabel?: string
}

export type EmergencyContactsGuideBundle = {
  intro: {
    eyebrow: string
    title: string
    lead: string
  }
  quickTiles: Array<{ label: string; value: string }>
  problems: string[]
  allIndiaNumbers: {
    title: string
    lead: string
    buttons: EmergencyButton[]
    tips: string[]
  }
  touristHelp: {
    title: string
    lead: string
    buttons: EmergencyButton[]
    tips: string[]
  }
  embassyGuidance: {
    title: string
    lead: string
    steps: string[]
  }
  whyItMatters: string[]
}

const INDIA_DEFAULTS: EmergencyContactsGuideBundle = {
  intro: {
    eyebrow: 'Practical info',
    title: 'Emergency contacts',
    lead:
      'In a crisis you should not be searching the internet. Save these numbers, use one‑tap calling, and know what to say when you connect.',
  },
  quickTiles: [
    { label: 'Universal', value: '112' },
    { label: 'Ambulance', value: '108 / 102' },
    { label: 'Tourist', value: '1363' },
    { label: 'Women', value: '1091' },
  ],
  problems: [
    'Most foreigners do not know the correct emergency number for India.',
    'People panic and waste time searching “police/ambulance number” during a crisis.',
    'Tourist help exists, but travellers rarely know it before something goes wrong.',
  ],
  allIndiaNumbers: {
    title: 'All‑India emergency numbers',
    lead:
      'Start with **112** (universal). If that fails, try the dedicated lines below. These are widely used across India.',
    buttons: [
      { id: 'universal-112', label: 'Call 112', number: '112', ariaLabel: 'Call emergency number 112' },
      { id: 'police-100', label: 'Police 100', number: '100', ariaLabel: 'Call police number 100' },
      { id: 'fire-101', label: 'Fire 101', number: '101', ariaLabel: 'Call fire brigade number 101' },
      { id: 'ambulance-108', label: 'Ambulance 108', number: '108', ariaLabel: 'Call ambulance number 108' },
      { id: 'ambulance-102', label: 'Ambulance 102', number: '102', ariaLabel: 'Call ambulance number 102' },
      { id: 'women-1091', label: 'Women 1091', number: '1091', ariaLabel: 'Call women helpline 1091' },
    ],
    tips: [
      'If you can speak, say: **city + exact location + what happened + your callback number**.',
      'If you are lost, share a landmark (hotel name, gate name, mall, petrol pump) or your map pin.',
      'If you are not comfortable speaking, ask your hotel staff to call with you on speaker.',
    ],
  },
  touristHelp: {
    title: 'Tourist help + escalation',
    lead:
      'Use these when you are being harassed, scammed, or need official help navigating a dispute.',
    buttons: [
      {
        id: 'tourist-1363',
        label: 'Tourist helpline 1363',
        number: '1363',
        ariaLabel: 'Call tourist helpline 1363',
        note: 'General tourist support in India',
      },
      {
        id: 'tourist-1800111363',
        label: 'Tourist helpline (toll‑free)',
        number: '1800111363',
        ariaLabel: 'Call tourist helpline 1800 111 363',
        note: 'If 1363 does not connect',
      },
    ],
    tips: [
      'If a scam is in progress, move to a safer public spot first (hotel lobby, police booth, busy shop).',
      'Do not hand over passport/phone to “helpers”. Take photos of IDs/plates if safe.',
      'Keep receipts/SMS screenshots. They matter for disputes.',
    ],
  },
  embassyGuidance: {
    title: 'Embassy / consulate guidance',
    lead:
      'If you lose your passport, face serious harassment, or need legal support, contact your embassy/consulate. This is how to do it fast.',
    steps: [
      'Search: “<your country> embassy India emergency number” on mobile data (not public Wi‑Fi).',
      'If you are in danger: call **112 first**, then embassy after you are safe.',
      'For passport loss: file a police report, then contact embassy for replacement/travel document steps.',
      'Share: full name, passport number (if available), location, and a safe callback number.',
    ],
  },
  whyItMatters: [
    'In crisis moments, seconds matter — this page removes decision fatigue.',
    'One‑tap calling is a literal life saver when your hands are shaking.',
    'It protects tourists from high-pressure scammers who try to isolate you.',
  ],
}

export function getEmergencyContactsGuideByCitySlug(_slug: string): EmergencyContactsGuideBundle {
  return INDIA_DEFAULTS
}

