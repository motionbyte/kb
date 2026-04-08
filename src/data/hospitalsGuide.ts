export type HospitalKind = 'Government' | 'Private'

export type VerifiedHospital = {
  id: string
  name: string
  kind: HospitalKind
  area: string
  address: string
  phone?: string
  emergencyPhone?: string
  email?: string
  website?: string
  mapUrl: string
  /** “Likely” because staffing changes; do not promise. */
  englishSupportLikely: 'High' | 'Medium' | 'Unknown'
  notes?: string[]
  sourceLabel?: string
  sourceUrl?: string
}

export type HospitalsGuideBundle = {
  intro: { eyebrow: string; title: string; lead: string }
  quickTiles: Array<{ label: string; value: string }>
  problem: string[]
  chooser: Array<{
    id: string
    title: string
    when: string
    goTo: string[]
  }>
  govtVsPrivate: {
    title: string
    left: { title: string; bullets: string[] }
    right: { title: string; bullets: string[] }
  }
  costBands: {
    title: string
    disclaimer: string
    bands: Array<{ label: string; range: string; note?: string }>
    overchargeRedFlags: string[]
  }
  verifiedList: {
    title: string
    lead: string
    hospitals: VerifiedHospital[]
  }
  whyItMatters: string[]
}

const AJMER_HOSPITALS: HospitalsGuideBundle = {
  intro: {
    eyebrow: 'Practical info',
    title: 'Hospitals',
    lead:
      'When you are unwell, you need speed, clarity, and trust. This page helps you choose the right hospital, reduce overcharging risk, and handle language barriers.',
  },
  quickTiles: [
    { label: 'Emergency', value: '112 / 108' },
    { label: 'Best proof', value: 'Receipt + estimate' },
    { label: 'Ask for', value: 'Written costs' },
    { label: 'Language', value: 'Bring translator' },
  ],
  problem: [
    'Foreigners often do not understand the difference between government vs private hospitals in India.',
    'Language barriers can lead to wrong treatment details or billing confusion.',
    'Overcharging risk increases when you are stressed and paying quickly.',
    'In emergencies, people lose time by going to a non‑ideal facility first.',
  ],
  chooser: [
    {
      id: 'life-threatening',
      title: 'Life‑threatening emergency',
      when: 'Chest pain, severe bleeding, unconsciousness, serious accident, breathing difficulty',
      goTo: ['Call 112 first', 'Call ambulance 108', 'Go to the nearest major emergency department'],
    },
    {
      id: 'urgent',
      title: 'Urgent but stable',
      when: 'High fever, dehydration, asthma flare, fracture pain, severe vomiting',
      goTo: [
        'Prefer a large private multispecialty hospital or the main govt hospital',
        'Ask for an estimate before admission if you are stable',
      ],
    },
    {
      id: 'routine',
      title: 'Routine consult',
      when: 'Mild infection, travel stomach issues, prescription refill, test follow‑up',
      goTo: ['Private hospital OPD (often faster)', 'Govt OPD (cheaper, but queues can be long)'],
    },
  ],
  govtVsPrivate: {
    title: 'Government vs private (quick difference)',
    left: {
      title: 'Government hospitals',
      bullets: [
        'Lower cost, but longer waits and crowded departments.',
        'Good for broad access and specialist departments in major campuses.',
        'Carry ID and be ready for queues; keep water/snacks.',
      ],
    },
    right: {
      title: 'Private hospitals',
      bullets: [
        'Faster triage and more predictable process (usually).',
        'Higher cost; insist on written estimate for admissions/procedures.',
        'English support is more likely, but always confirm at reception.',
      ],
    },
  },
  costBands: {
    title: 'Approx cost idea (typical ranges)',
    disclaimer:
      'These are broad India‑typical bands to set expectations. Actual pricing varies by hospital, doctor, tests, and insurance. Always ask for a written estimate.',
    bands: [
      { label: 'OPD consultation', range: 'Govt: low fee • Private: ~₹300–₹1000', note: 'Specialists can cost more.' },
      { label: 'Basic blood tests', range: 'Often ~₹200–₹1500', note: 'Depends on panel and lab.' },
      { label: 'ER / emergency consult', range: 'Often ~₹500–₹2500+', note: 'Excludes scans and procedures.' },
      { label: 'Private bed per day', range: 'Often ~₹2000–₹12000+', note: 'ICU is higher.' },
    ],
    overchargeRedFlags: [
      'No written estimate / refusal to explain charges.',
      'Pressure to pay immediately without itemized bill.',
      'Asking for passport to “hold” as security.',
      'Unnecessary tests pushed without clinical explanation.',
    ],
  },
  verifiedList: {
    title: 'Verified hospitals (Ajmer)',
    lead:
      'Tap Call / Website / Map. “English support” is marked as likely (staffing can change). In an emergency, go by proximity first.',
    hospitals: [
      {
        id: 'ajm-mittal',
        name: 'Gheesibai Memorial Mittal Hospital & Research Centre',
        kind: 'Private',
        area: 'Pushkar Road',
        address: 'Pushkar Road, Ajmer, Rajasthan, India',
        phone: '+91 145 2603 603',
        emergencyPhone: '+91 80030 53111',
        email: 'info@mittalhospital.com',
        website: 'https://mittalhospital.com/',
        mapUrl:
          'https://www.google.com/maps/search/?api=1&query=Gheesibai%20Memorial%20Mittal%20Hospital%20Ajmer%20Pushkar%20Road',
        englishSupportLikely: 'High',
        notes: ['24/7 emergency services (per hospital contact page).', 'Ask for estimate + itemized bill for admissions.'],
        sourceLabel: 'Mittal Hospital contact page',
        sourceUrl: 'https://mittalhospital.com/contact-us/',
      },
      {
        id: 'ajm-paras',
        name: 'Paras Urology & Multispeciality Hospital',
        kind: 'Private',
        area: 'Pushkar Road / Haribhau Upadhyay Nagar',
        address: 'C Block, Pushkar Road, Haribhau Upadhyay Nagar, Ajmer, Rajasthan',
        phone: '+91 95218 94263',
        website: 'https://www.parashospitalajmer.com/',
        mapUrl:
          'https://www.google.com/maps/search/?api=1&query=Paras%20Urology%20and%20Multispeciality%20Hospital%20Ajmer%20Pushkar%20Road',
        englishSupportLikely: 'High',
        notes: ['Their booking page states 24/7 availability and uses this number for emergencies.'],
        sourceLabel: 'Paras booking page',
        sourceUrl: 'https://www.parashospitalajmer.com/book-appointment',
      },
      {
        id: 'ajm-jln-govt-epbx',
        name: 'J.L.N. Medical College & Associated Hospitals (Govt)',
        kind: 'Government',
        area: 'Adarsh Nagar / JLN campus',
        address: 'JLN campus, Ajmer, Rajasthan (main EPBX connects to departments)',
        phone: '0145-2425050',
        mapUrl:
          'https://www.google.com/maps/search/?api=1&query=JLN%20Medical%20College%20Ajmer',
        englishSupportLikely: 'Medium',
        notes: [
          'Call EPBX and ask for Emergency/Casualty extension if needed.',
          'Crowds can be heavy—bring a local helper/hotel staff if possible.',
        ],
        sourceLabel: 'India Customer Care (EPBX + extensions)',
        sourceUrl: 'https://www.indiacustomercare.com/jln-medical-college-ajmer-contact-no',
      },
    ],
  },
  whyItMatters: [
    'Health builds trust faster than anything—getting help here makes the app feel real.',
    'In emergencies, choosing the right facility saves time and reduces risk.',
    'Clear billing expectations protect tourists from panic‑spend situations.',
  ],
}

export function getHospitalsGuideByCitySlug(slug: string): HospitalsGuideBundle {
  if (slug === 'ajmer') return AJMER_HOSPITALS
  return AJMER_HOSPITALS
}

