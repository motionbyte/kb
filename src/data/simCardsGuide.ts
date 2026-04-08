export type SimPickupProvider = 'Jio' | 'Vi' | 'Airtel' | 'Other'

export type SimPickupSpot = {
  id: string
  provider: SimPickupProvider
  name: string
  area: string
  address: string
  hours?: string
  phone?: string
  email?: string
  website?: string
  mapUrl: string
  notes?: string[]
  /** Where we sourced the listing from (human readable). */
  sourceLabel?: string
  sourceUrl?: string
}

export type CitySimCardsGuideBundle = {
  intro: {
    eyebrow: string
    title: string
    lead: string
  }
  quickTiles: Array<{ label: string; value: string }>
  checklist: string[]
  spots: SimPickupSpot[]
}

const AJMER_SIM_CARDS: CitySimCardsGuideBundle = {
  intro: {
    eyebrow: 'Practical info',
    title: 'SIM cards',
    lead:
      'Verified pickup points for tourist-friendly areas. Tap Call / Email / Map for each spot. If a counter says “activation later”, ask for eKYC activation on the spot (Aadhaar/Passport rules may apply).',
  },
  quickTiles: [
    { label: 'Bring', value: 'ID + photo' },
    { label: 'Ask for', value: 'eKYC activation' },
    { label: 'Best zones', value: 'Ramganj • Vaishali' },
    { label: 'Backup', value: 'Home delivery' },
  ],
  checklist: [
    'Carry your original ID (Aadhaar/Passport) and a local contact number if requested.',
    'Prefer official carrier stores or Reliance Digital-style counters for fewer surprises.',
    'Ask them to confirm plan price + validity before you pay; keep the receipt/SMS.',
    'For eSIM: confirm your handset supports it and that they can issue eSIM at that store.',
  ],
  spots: [
    {
      id: 'ajm-jio-ramganj-teligali',
      provider: 'Jio',
      name: 'Digital Xpress mini (Jio) — Ramganj, Beawar Road',
      area: 'Ramganj / Beawar Road',
      address: 'Digital Xpress mini, 679/27, Teli Gali, Ramganj, Beawar Road, Ajmer 305001, Rajasthan',
      hours: 'Mon–Sun: 10:00 AM – 10:00 PM',
      phone: '0145 2441016',
      email: 'digitalxpressmini_ajm.7465_bawr@ril.com',
      website: 'https://www.jiocare.com/',
      mapUrl:
        'https://www.google.com/maps/search/?api=1&query=Digital%20Xpress%20mini%20679%2F27%20Teli%20Gali%20Ramganj%20Ajmer%20305001',
      notes: ['Good pick if you are near old-city markets and Ramganj.', 'Ask for immediate SIM activation before leaving.'],
      sourceLabel: 'JioCare listing',
      sourceUrl:
        'https://www.jiocare.com/Reliance-Jio-Stores/Teli-Gali-Ramganj-Beawar-Road-Ajmer-Rajasthan',
    },
    {
      id: 'ajm-jio-reliance-digital-cinemall',
      provider: 'Jio',
      name: 'Reliance Digital (Jio counter) — Cine Mall',
      area: 'Vaishali Nagar',
      address: 'Reliance Digital, Cine Mall, Lower Ground Floor, Vaishali Nagar, Ajmer 305001, Rajasthan',
      hours: 'Mon–Sun: 11:00 AM – 10:00 PM',
      phone: '0145 2625307',
      email: 'crm_ajm.8703_cnml@ril.com',
      website: 'https://www.jiocare.com/',
      mapUrl:
        'https://www.google.com/maps/search/?api=1&query=Reliance%20Digital%20Cine%20Mall%20Lower%20Ground%20Floor%20Vaishali%20Nagar%20Ajmer%20305001',
      notes: ['Mall-based counter — usually easier for card payments and receipts.'],
      sourceLabel: 'JioCare listing',
      sourceUrl:
        'https://www.jiocare.com/Reliance-Jio-Stores/Cine-Mall-Lower-Ground-Floor-Vaishali-Nagar-Ajmer-Rajasthan',
    },
    {
      id: 'ajm-jio-martindale-bridge',
      provider: 'Jio',
      name: 'Digital Xpress mini (Jio) — Near Martindale Bridge',
      area: 'Martindale Bridge area',
      address: 'Digital Xpress mini, Ground Floor, 31/32, Near Martindale Bridge, Ajmer 201001, Rajasthan',
      hours: 'Mon–Sun: 10:00 AM – 10:00 PM',
      phone: '0145 2624107',
      email: 'digitalxpressmini_ajm.7848_mart@ril.com',
      website: 'https://www.jiocare.com/',
      mapUrl:
        'https://www.google.com/maps/search/?api=1&query=Digital%20Xpress%20mini%2031%2F32%20Near%20Martindale%20Bridge%20Ajmer%20201001',
      notes: ['Handy if you are moving between central Ajmer and newer corridors.'],
      sourceLabel: 'JioCare listing',
      sourceUrl: 'https://www.jiocare.com/Reliance-Jio-Stores/Near-Martindale-Bridge-Ajmer-Rajasthan',
    },
    {
      id: 'ajm-vi-vaishali-hotel-avita',
      provider: 'Vi',
      name: 'Vi Store — Vaishali Nagar (Hotel Avita)',
      area: 'Vaishali Nagar',
      address: 'Ground Floor, Hotel Avita, Near Bikaner Sweets, Vaishali Nagar, Ajmer 305001, Rajasthan',
      hours: 'Mon–Sat: 10:30 AM – 8:00 PM (Sun closed)',
      phone: '+91 91671 16326',
      website: 'https://stores.myvi.in/location/rajasthan/ajmer',
      mapUrl: 'https://maps.google.com/maps?cid=2552201028218610865',
      notes: ['If you want eSIM, ask at the counter first — some staff can convert to eSIM.'],
      sourceLabel: 'Official Vi store page',
      sourceUrl:
        'https://stores.myvi.in/vi-vodafone-idea-store-vi-store-kc-complex-telecommunications-service-provider-vaishali-nagar-ajmer-137289/Home',
    },
    {
      id: 'ajm-vi-kutchery-road',
      provider: 'Vi',
      name: 'Vi Store — Kutchery Road',
      area: 'Kutchery Road',
      address: 'No 429A, Kutchery Road, Ajmer 305001, Rajasthan (Opposite HP Petrol Pump)',
      hours: 'Mon–Sat: 10:30 AM – 8:00 PM (Sun closed)',
      phone: '+91 88791 80183',
      website: 'https://stores.myvi.in/location/rajasthan/ajmer',
      mapUrl: 'https://maps.google.com/maps?cid=1299313917084874945',
      notes: ['Convenient for paperwork/porting (MNP) and plan clarification.'],
      sourceLabel: 'Official Vi store page',
      sourceUrl:
        'https://stores.myvi.in/vi-vodafone-idea-store-vi-store-kachery-road-telecommunications-service-provider-kutchery-road-ajmer-135734/Contact-Us',
    },
    {
      id: 'ajm-vi-mini-nasirabad-road',
      provider: 'Vi',
      name: 'Vi Mini Store — Nasirabad Road (Fajlu Market)',
      area: 'Nasirabad Road',
      address: 'Shop No 1, Fajlu Market, Nasirabad Road, Ajmer 305001, Rajasthan (Near SBI Bank)',
      hours: 'Mon–Sat: 10:30 AM – 7:30 PM (Sun closed)',
      phone: '+91 98284 82509',
      website: 'https://stores.myvi.in/location/rajasthan/ajmer',
      mapUrl: 'https://maps.google.com/maps?cid=1002994064431025771',
      notes: ['Good for SIM upgrade / replacement, but ask upfront about activation time.'],
      sourceLabel: 'Official Vi store page',
      sourceUrl:
        'https://stores.myvi.in/vi-vodafone-idea-mini-store-vi-mini-store-gt-enterprises-telecommunications-service-provider-nasirabad-road-ajmer-171638/Contact-Us',
    },
    {
      id: 'ajm-airtel-home-delivery',
      provider: 'Airtel',
      name: 'Airtel — free home delivery (Ajmer)',
      area: 'Citywide',
      address: 'Order online and get the SIM delivered to your stay in Ajmer (PIN code required).',
      website: 'https://www.airtel.in/new-connection/prepaid-sim/explore/ajmer/',
      mapUrl: 'https://www.airtel.in/new-connection/prepaid-sim/explore/ajmer/',
      notes: [
        'Best backup if you arrive late or do not want to search markets.',
        'Activation timing depends on eKYC completion; keep your ID handy.',
      ],
      sourceLabel: 'Airtel official page',
      sourceUrl: 'https://www.airtel.in/new-connection/prepaid-sim/explore/ajmer/',
    },
  ],
}

export function getSimCardsGuideByCitySlug(slug: string): CitySimCardsGuideBundle | null {
  if (slug === 'ajmer') return AJMER_SIM_CARDS
  return null
}

