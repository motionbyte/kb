export type PriceBand = '$' | '$$' | '$$$' | '$$$$'

export type VerifiedHotel = {
  id: string
  name: string
  area: string
  address: string
  priceBand: PriceBand
  phone?: string
  email?: string
  website?: string
  mapUrl: string
  /** Where to check real photos + recent reviews */
  reviewsUrl: string
  whyStayHere: string[]
  watchOut: string[]
  sourceLabel?: string
  sourceUrl?: string
}

export type HotelsGuideBundle = {
  intro: { eyebrow: string; title: string; lead: string }
  problem: string[]
  solve: string[]
  why: string[]
  quickTiles: Array<{ label: string; value: string }>
  bookingRules: {
    title: string
    do: string[]
    avoid: string[]
  }
  verified: {
    title: string
    lead: string
    hotels: VerifiedHotel[]
  }
}

const AJMER_HOTELS: HotelsGuideBundle = {
  intro: {
    eyebrow: 'Accommodation',
    title: 'Hotels',
    lead:
      'Avoid overpriced rooms, fake photos, and hidden fees. Use verified stays, check real reviews, and book with clarity—especially around Dargah/peak dates.',
  },
  problem: [
    'Foreigners often get quoted overpriced rooms or “foreigner price”.',
    'Listing photos don’t always match reality (old images, wrong room category).',
    'Hidden charges appear at checkout (taxes, “service fee”, extra person, early check-in).',
    'Safe vs shady stays are hard to judge quickly—especially near busy pilgrimage zones.',
  ],
  solve: [
    'A curated list of verified hotels with direct contacts and map/review links.',
    'A simple checklist to confirm the real total price (and what is included).',
    'How to spot fake photos and review manipulation in under 60 seconds.',
    'Location advantage guidance: what to pick for Dargah, station, and quieter nights.',
  ],
  why: ['Hotels are the default choice for most travellers.', 'If trust is built here, users stick with the app.'],
  quickTiles: [
    { label: 'Rule', value: 'Confirm total price' },
    { label: 'Proof', value: 'Recent reviews' },
    { label: 'Safety', value: 'Reception + ID policy' },
    { label: 'Location', value: 'Near what you do' },
  ],
  bookingRules: {
    title: 'Book safely (fast checklist)',
    do: [
      'Ask: “What is the total price including taxes for my exact dates?”',
      'Confirm what’s included: breakfast, AC, Wi‑Fi, hot water, parking, early check‑in.',
      'Check Google Maps reviews sorted by “Newest” and look for consistent patterns.',
      'Prefer properties with clear address signage and a staffed reception desk.',
      'Pay by card/UPI when possible; keep screenshots of confirmation and inclusions.',
    ],
    avoid: [
      'Avoid paying full cash up-front without written confirmation/receipt.',
      'Avoid listings with only perfect 5-star reviews and no detailed photos.',
      'Avoid “we will shift you to sister property” unless you explicitly agree in writing.',
      'Avoid rooms shown only via edited studio photos—look for guest photos in reviews.',
    ],
  },
  verified: {
    title: 'Verified hotels (Ajmer)',
    lead:
      'Tap Website for direct booking, Map for navigation, and Reviews for real photos + recent guest experiences. Price band is a quick expectation—not a guarantee.',
    hotels: [
      {
        id: 'ajm-ajmer-inn',
        name: 'Hotel Ajmer Inn',
        area: 'Purani Mandi / Churi Bazar',
        address: 'Churi Bazar, Near Central Bank of India, Purani Mandi, Ajmer (Raj) 305001',
        priceBand: '$$',
        phone: '0145-2665551, 7073965550',
        email: 'reservations@ajmerinn.com',
        website: 'https://www.hotelajmerinn.com/',
        mapUrl: 'https://www.google.com/maps/search/?api=1&query=Hotel%20Ajmer%20Inn%20Ajmer',
        reviewsUrl: 'https://www.google.com/maps/search/?api=1&query=Hotel%20Ajmer%20Inn%20Ajmer&query_place_id=',
        whyStayHere: [
          'Central location for markets + station area.',
          'Direct hotel website with contact details.',
          'Good “basecamp” if you’re doing short city stays.',
        ],
        watchOut: ['Confirm room category (photos vs actual).', 'Ask for written total including taxes.'],
        sourceLabel: 'Hotel official site',
        sourceUrl: 'https://www.hotelajmerinn.com/',
      },
      {
        id: 'ajm-pratap-mahal-ihcl',
        name: 'Pratap Mahal, Ajmer — IHCL SeleQtions',
        area: 'Pushkar Bypass Road',
        address: 'Pushkar Bypass Road, Ajmer, Rajasthan 305022, India',
        priceBand: '$$$$',
        website: 'https://www.tajhotels.com/en-in/destination/hotels-in-ajmer',
        mapUrl: 'https://www.google.com/maps/search/?api=1&query=Pratap%20Mahal%20Ajmer%20IHCL%20SeleQtions',
        reviewsUrl: 'https://www.google.com/maps/search/?api=1&query=Pratap%20Mahal%20Ajmer%20IHCL%20SeleQtions',
        whyStayHere: [
          'Higher reliability for foreigners (process, billing clarity, service).',
          'Good if you want a calmer stay away from dense lanes.',
        ],
        watchOut: ['Farther from old-city walking; plan taxis/driver.', 'Confirm what’s included in rate (meals/transfers).'],
        sourceLabel: 'IHCL/Taj destination page',
        sourceUrl: 'https://www.tajhotels.com/en-in/destination/hotels-in-ajmer',
      },
      {
        id: 'pushkar-bagh',
        name: 'The Pushkar Bagh Resort',
        area: 'Pushkar (day-trip zone)',
        address: 'Motisar Link Road, Village Ghanehera, Pushkar, Ajmer, Rajasthan, India',
        priceBand: '$$$',
        phone: '0091-145-2773929 (24h reservations: 0091-9414030669, 9549657515)',
        email: 'info@thepushkarbaghresort.com',
        website: 'https://www.thepushkarbaghresort.com/',
        mapUrl: 'https://www.google.com/maps/search/?api=1&query=The%20Pushkar%20Bagh%20Resort',
        reviewsUrl: 'https://www.google.com/maps/search/?api=1&query=The%20Pushkar%20Bagh%20Resort',
        whyStayHere: [
          'Best if you’re pairing Ajmer with Pushkar and want a quieter, resort-style night.',
          'Good for travellers who prefer open space over dense city lanes.',
        ],
        watchOut: ['It’s not central Ajmer—plan transport times.', 'Confirm check-in time and meal inclusions.'],
        sourceLabel: 'Resort contact page',
        sourceUrl: 'https://www.thepushkarbaghresort.com/contact-us.html',
      },
    ],
  },
}

export function getHotelsGuideByCitySlug(slug: string): HotelsGuideBundle {
  if (slug === 'ajmer') return AJMER_HOTELS
  return AJMER_HOTELS
}

