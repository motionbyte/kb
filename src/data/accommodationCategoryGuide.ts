import { getCityBySlug } from '@/data/cities'
import type { City } from '@/types'

export type AccommodationCategory = 'hostels' | 'homestays' | 'resorts' | 'heritage' | 'camps'

export type AccommodationSpot = {
  id: string
  name: string
  area: string
  typeTag: string
  budgetBand: string
  approxPrice: string
  safetyTag?: string
  addressHint: string
  phone?: string
  email?: string
  website?: string
  mapUrl: string
  reviewsUrl: string
  highlights: string[]
  caution: string[]
  sourceLabel?: string
  sourceUrl?: string
}

export type AccommodationCategoryBundle = {
  title: string
  eyebrow: string
  lead: string
  problem: string[]
  solution: string[]
  why: string[]
  quickTiles: Array<{ label: string; value: string }>
  spotsTitle: string
  spotsLead: string
  spots: AccommodationSpot[]
}

type CityAccommodationGuide = Record<AccommodationCategory, AccommodationCategoryBundle>

const AJMER_GUIDE: CityAccommodationGuide = {
  hostels: {
    title: 'Hostels',
    eyebrow: 'Accommodation',
    lead:
      'For solo and budget travellers: choose by vibe, safety, and review quality—not just price or edited photos.',
    problem: [
      'Travellers cannot easily tell safe hostels from risky ones.',
      'Party vs peaceful vibe mismatch ruins sleep and next-day plans.',
      'Some places market themselves as “backpacker hostel” but operate like budget lodges.',
    ],
    solution: [
      'Vibe classification: Party, Chill, Work-friendly.',
      'Safety signals: 24x7 reception, female dorm options, locker policy, verified review patterns.',
      'Community proof: map reviews + recent traveller photos.',
    ],
    why: [
      'Budget + social experience is the core hostel decision.',
      'Gen Z travellers compare hostels deeply before booking.',
    ],
    quickTiles: [
      { label: 'Vibe', value: 'Party / Chill / Work' },
      { label: 'Safety', value: 'Female-first checks' },
      { label: 'Proof', value: 'Newest reviews' },
      { label: 'Rule', value: 'Check night noise' },
    ],
    spotsTitle: 'Hostel-style stays (Ajmer/Pushkar side)',
    spotsLead:
      'Ajmer city has fewer pure hostels than Pushkar; many backpackers stay in Pushkar and day-trip to Ajmer.',
    spots: [
      {
        id: 'hst-zostel-pushkar',
        name: 'Zostel Pushkar',
        area: 'Pushkar (near Ajmer)',
        typeTag: 'Backpacker hostel',
        budgetBand: '$$',
        approxPrice: 'Approx: INR 700-2200 / night (dorm to private, season-dependent)',
        safetyTag: 'Women-friendly options (verify current listing)',
        addressHint: 'Pushkar area (best for backpacker social vibe)',
        phone: '+91 2248962266',
        email: 'reservations@zostel.com',
        website: 'https://www.zostel.com/destination/pushkar/stay/zostel-pushkar-pshh956',
        mapUrl: 'https://www.google.com/maps/search/?api=1&query=Zostel%20Pushkar',
        reviewsUrl: 'https://www.google.com/maps/search/?api=1&query=Zostel%20Pushkar%20reviews',
        highlights: ['Strong community vibe', 'Good for solo travellers meeting others'],
        caution: ['Not ideal if you need very quiet nights'],
        sourceLabel: 'Zostel listing/contact',
        sourceUrl: 'https://www.zostel.com/destination/pushkar/stay/zostel-pushkar-pshh956',
      },
      {
        id: 'hst-madpackers-pushkar',
        name: 'Madpackers Pushkar',
        area: 'Pushkar (near Ajmer)',
        typeTag: 'Social hostel',
        budgetBand: '$$',
        approxPrice: 'Approx: INR 600-2000 / night',
        phone: '+91 9549795545',
        website: 'https://madpackers.com/hostels/pushkar/',
        addressHint: 'Pushkar side backpacker lane clusters',
        mapUrl: 'https://www.google.com/maps/search/?api=1&query=Madpackers%20Pushkar',
        reviewsUrl: 'https://www.google.com/maps/search/?api=1&query=Madpackers%20Pushkar%20reviews',
        highlights: ['Often social/common-area heavy', 'Useful for budget + community'],
        caution: ['Verify dorm hygiene in latest reviews'],
        sourceLabel: 'Madpackers listing',
        sourceUrl: 'https://madpackers.com/hostels/pushkar/',
      },
      {
        id: 'hst-moustache-pushkar',
        name: 'Moustache Pushkar',
        area: 'Pushkar (near Ajmer)',
        typeTag: 'Backpacking hostel',
        budgetBand: '$$',
        approxPrice: 'Approx: INR 650-2300 / night',
        phone: '+91 7339967029',
        website: 'https://moustachescapes.com/hostel/backpacking-hostel/moustache-hostel-pushkar',
        addressHint: 'Mamdev Marg, beside canal bridge side, Pushkar',
        mapUrl: 'https://www.google.com/maps/search/?api=1&query=Moustache%20Pushkar%20Hostel',
        reviewsUrl: 'https://www.google.com/maps/search/?api=1&query=Moustache%20Pushkar%20Hostel%20reviews',
        highlights: ['Backpacker-focused property', 'Usually active common spaces'],
        caution: ['Confirm room noise and event schedule before booking'],
      },
      {
        id: 'hst-zostel-plus-pushkar',
        name: 'Zostel (Pushkar area variants)',
        area: 'Pushkar',
        typeTag: 'Hostel network property',
        budgetBand: '$$',
        approxPrice: 'Approx: INR 700-2500 / night',
        phone: '+91 2248962266',
        email: 'reservations@zostel.com',
        website: 'https://www.zostel.com/destination/pushkar',
        addressHint: 'Pushkar backpacker circuit',
        mapUrl: 'https://www.google.com/maps/search/?api=1&query=Zostel%20Pushkar',
        reviewsUrl: 'https://www.google.com/maps/search/?api=1&query=Pushkar%20hostel%20reviews',
        highlights: ['Predictable hostel process', 'Useful for first-time India backpackers'],
        caution: ['Always verify exact property name before paying'],
      },
    ],
  },
  homestays: {
    title: 'Homestays',
    eyebrow: 'Accommodation',
    lead:
      'If you want “real India” experience, verify that it is a true host-run home, not just a small hotel with homestay branding.',
    problem: [
      'Fake “homestays” are often mini-hotels with no local-family interaction.',
      'Hygiene and washroom cleanliness can vary widely.',
      'Language barriers with hosts create confusion around check-in, meals, and house rules.',
    ],
    solution: [
      'Host authenticity checks: host profile, family interaction mentions, on-site host presence.',
      'Cultural tags: local food, village life, traditions, walking tours.',
      'Cleanliness and safety checks from recent photos + review text.',
    ],
    why: ['Foreign travellers seek emotional-cultural connection.', 'Great homestays create memorable “story” value.'],
    quickTiles: [
      { label: 'Authentic?', value: 'Host-run proof' },
      { label: 'Culture', value: 'Food + local life' },
      { label: 'Cleanliness', value: 'Recent photos' },
      { label: 'Communication', value: 'Host language check' },
    ],
    spotsTitle: 'Homestay-style picks (Ajmer/Pushkar)',
    spotsLead: 'Use these as starting points, then verify host details on latest listing pages.',
    spots: [
      {
        id: 'hm-pushkar-farmstay',
        name: 'Pushkar farm / family homestay clusters',
        area: 'Pushkar outskirts',
        typeTag: 'Host-family / farmstay',
        budgetBand: '$$',
        approxPrice: 'Approx: INR 1200-3800 / night',
        website: 'https://www.google.com/travel/hotels',
        addressHint: 'Pushkar village-edge properties',
        mapUrl: 'https://www.google.com/maps/search/?api=1&query=Pushkar%20family%20homestay',
        reviewsUrl: 'https://www.google.com/maps/search/?api=1&query=Pushkar%20family%20homestay%20reviews',
        highlights: ['Better cultural immersion', 'Traditional meals possible'],
        caution: ['Confirm private bathroom and hot water availability'],
      },
      {
        id: 'hm-ajmer-host-home',
        name: 'Ajmer host-run apartment homestays',
        area: 'Ajmer residential neighborhoods',
        typeTag: 'City homestay',
        budgetBand: '$$',
        approxPrice: 'Approx: INR 1000-3200 / night',
        website: 'https://www.google.com/maps/search/?api=1&query=Ajmer%20homestay',
        addressHint: 'Residential Ajmer zones',
        mapUrl: 'https://www.google.com/maps/search/?api=1&query=Ajmer%20homestay',
        reviewsUrl: 'https://www.google.com/maps/search/?api=1&query=Ajmer%20homestay%20reviews',
        highlights: ['Useful for longer stay', 'More local neighbourhood feel'],
        caution: ['Ask host response time + late check-in policy'],
      },
      {
        id: 'hm-badnor-house',
        name: 'Badnor House',
        area: 'Civil Lines, Ajmer',
        typeTag: 'Heritage homestay',
        budgetBand: '$$$',
        approxPrice: 'Approx: INR 2500-7000 / night',
        phone: '+91 1452627579 / +91 9829077722',
        email: 'badnorhouse@gmail.com',
        website: 'https://badnorhouse.com/',
        addressHint: 'Civil Lines, near Khadim RTDC Ajmer',
        mapUrl: 'https://www.google.com/maps/search/?api=1&query=Badnor%20House%20Ajmer',
        reviewsUrl: 'https://www.google.com/maps/search/?api=1&query=Badnor%20House%20Ajmer%20reviews',
        highlights: ['Known host-led heritage stay format', 'Good for quieter premium homestay feel'],
        caution: ['Confirm meal plan and check-in timing'],
      },
      {
        id: 'hm-delight-homestay',
        name: 'Delight Home Stay',
        area: 'Haribhau Upadhyay Nagar, Ajmer',
        typeTag: 'Family-run homestay',
        budgetBand: '$$',
        approxPrice: 'Approx: INR 1400-3500 / night',
        phone: '+91 7425830147 / +91 9660088326',
        email: 'delighthomestayajmer@gmail.com',
        website: 'https://www.delighthomestay.in/',
        addressHint: 'Near petrol pump, Haribhau Upadhyay Nagar',
        mapUrl: 'https://www.google.com/maps/search/?api=1&query=Delight%20Home%20Stay%20Ajmer',
        reviewsUrl: 'https://www.google.com/maps/search/?api=1&query=Delight%20Home%20Stay%20Ajmer%20reviews',
        highlights: ['Direct host contact', 'Useful for city-base family stays'],
        caution: ['Reconfirm exact room photos before paying'],
      },
    ],
  },
  resorts: {
    title: 'Resorts',
    eyebrow: 'Accommodation',
    lead:
      'Luxury pricing only makes sense when inclusions are clear. Compare all-inclusive vs pay-per-use before booking.',
    problem: [
      'High prices without clarity on what is actually included.',
      'Hidden charges for spa, activities, meals, transfers.',
      '“Luxury” marketing sometimes exceeds real on-ground experience.',
    ],
    solution: [
      'Inclusion clarity: room only vs meal plan vs activity package.',
      'Experience breakdown: spa, pool, safari, cultural evening, pickup/drop.',
      'Value-for-money check: compare net spend, not only nightly headline rate.',
    ],
    why: ['Luxury users pay more but expect full transparency.', 'Clear pricing improves high-ticket conversion.'],
    quickTiles: [
      { label: 'Compare', value: 'Net total spend' },
      { label: 'Plan type', value: 'All-in / Pay-use' },
      { label: 'Experiences', value: 'Spa / Pool / Safari' },
      { label: 'Rule', value: 'Written inclusions' },
    ],
    spotsTitle: 'Resort-style options (Ajmer + Pushkar belt)',
    spotsLead: 'Strong for leisure stays, weddings, and slower itineraries.',
    spots: [
      {
        id: 'rs-pratap-mahal',
        name: 'Pratap Mahal, Ajmer (IHCL SeleQtions)',
        area: 'Pushkar Bypass, Ajmer',
        typeTag: 'Luxury resort-hotel',
        budgetBand: '$$$$',
        approxPrice: 'Approx: INR 9000-22000 / night',
        website: 'https://www.tajhotels.com/en-in/destination/hotels-in-ajmer',
        addressHint: 'Pushkar Bypass Road',
        mapUrl: 'https://www.google.com/maps/search/?api=1&query=Pratap%20Mahal%20Ajmer',
        reviewsUrl: 'https://www.google.com/maps/search/?api=1&query=Pratap%20Mahal%20Ajmer%20reviews',
        highlights: ['Premium service stack', 'Reliable for high-comfort stays'],
        caution: ['Confirm taxes + meal plan + transfer costs'],
      },
      {
        id: 'rs-pushkar-bagh',
        name: 'The Pushkar Bagh Resort',
        area: 'Pushkar',
        typeTag: 'Leisure resort',
        budgetBand: '$$$',
        approxPrice: 'Approx: INR 4500-12000 / night',
        phone: '0091-145-2773929 / 0091-9414030669',
        email: 'info@thepushkarbaghresort.com',
        website: 'https://www.thepushkarbaghresort.com/',
        addressHint: 'Motisar Link Road, Pushkar',
        mapUrl: 'https://www.google.com/maps/search/?api=1&query=The%20Pushkar%20Bagh%20Resort',
        reviewsUrl: 'https://www.google.com/maps/search/?api=1&query=The%20Pushkar%20Bagh%20Resort%20reviews',
        highlights: ['Leisure vibe and open-space stay', 'Good for slower trips'],
        caution: ['Verify inclusions for activities and meals'],
      },
      {
        id: 'rs-ananta-pushkar',
        name: 'Ananta Spa & Resort Pushkar',
        area: 'Ajmer-Pushkar Road',
        typeTag: 'Luxury resort',
        budgetBand: '$$$$',
        approxPrice: 'Approx: INR 8000-20000 / night',
        phone: '+91 1413540500',
        email: 'crs@anantahotels.com',
        website: 'https://www.anantahotels.com/ananta-spa-resorts-pushkar/',
        addressHint: 'Village Leela Sevri, Ajmer-Pushkar Road',
        mapUrl: 'https://www.google.com/maps/search/?api=1&query=Ananta%20Spa%20and%20Resort%20Pushkar',
        reviewsUrl: 'https://www.google.com/maps/search/?api=1&query=Ananta%20Spa%20and%20Resort%20Pushkar%20reviews',
        highlights: ['Strong amenities stack', 'Good for resort-focused itinerary'],
        caution: ['Confirm activity inclusions vs extra charges'],
      },
      {
        id: 'rs-westin-pushkar',
        name: 'The Westin Pushkar Resort & Spa',
        area: 'Pushkar',
        typeTag: 'Luxury international resort',
        budgetBand: '$$$$',
        approxPrice: 'Approx: INR 12000-30000 / night',
        phone: '+91 1452774400',
        email: 'westin.pushkar@westin.com',
        website: 'https://www.marriott.com/en-us/hotels/jaipu-the-westin-pushkar-resort-and-spa/overview/',
        addressHint: 'Pushkar villa belt',
        mapUrl: 'https://www.google.com/maps/search/?api=1&query=The%20Westin%20Pushkar%20Resort%20and%20Spa',
        reviewsUrl: 'https://www.google.com/maps/search/?api=1&query=The%20Westin%20Pushkar%20Resort%20and%20Spa%20reviews',
        highlights: ['High-standard service system', 'Good for premium comfort stays'],
        caution: ['Review net spend incl taxes and meals'],
      },
    ],
  },
  heritage: {
    title: 'Heritage Stays (Haveli/Fort)',
    eyebrow: 'Accommodation',
    lead:
      'Rajasthan’s USP is heritage. Verify real historical character vs modern themed decor to avoid overpaying for only aesthetics.',
    problem: [
      'Travellers can’t tell real heritage properties from modern lookalikes.',
      '“Authentic” claims often focus on decor, not heritage substance.',
      'Overpricing is common when heritage stories are not verifiable.',
    ],
    solution: [
      'Authenticity checks: property history, archival references, long-standing identity.',
      'Experience details: royal rooms, traditional food, folk performances, storytelling.',
      'Premium-value clarity: what is truly unique vs standard hotel service.',
    ],
    why: ['This category is Rajasthan’s emotional and premium anchor.', 'Great heritage experiences create strong word-of-mouth.'],
    quickTiles: [
      { label: 'Authenticity', value: 'History proof' },
      { label: 'Experience', value: 'Culture + stories' },
      { label: 'Premium', value: 'Value check' },
      { label: 'Rule', value: 'Ask property history' },
    ],
    spotsTitle: 'Heritage-style stays around Ajmer region',
    spotsLead: 'Ajmer core has fewer fort-stay options than Udaipur/Jodhpur; nearby zones offer heritage-style properties.',
    spots: [
      {
        id: 'hg-pratap-mahal',
        name: 'Pratap Mahal, Ajmer',
        area: 'Ajmer',
        typeTag: 'Heritage-inspired luxury',
        budgetBand: '$$$$',
        approxPrice: 'Approx: INR 9000-22000 / night',
        website: 'https://www.tajhotels.com/en-in/destination/hotels-in-ajmer',
        addressHint: 'Pushkar Bypass',
        mapUrl: 'https://www.google.com/maps/search/?api=1&query=Pratap%20Mahal%20Ajmer',
        reviewsUrl: 'https://www.google.com/maps/search/?api=1&query=Pratap%20Mahal%20Ajmer%20heritage%20reviews',
        highlights: ['Strong Rajasthani design language', 'Premium ambience'],
        caution: ['Heritage-inspired is not always a historical fort/haveli'],
      },
      {
        id: 'hg-pushkar-heritage-clusters',
        name: 'Pushkar heritage haveli clusters',
        area: 'Pushkar',
        typeTag: 'Haveli-style stays',
        budgetBand: '$$$',
        approxPrice: 'Approx: INR 3500-12000 / night',
        website: 'https://www.google.com/maps/search/?api=1&query=Pushkar%20heritage%20haveli%20stay',
        addressHint: 'Pushkar old lanes and outskirts',
        mapUrl: 'https://www.google.com/maps/search/?api=1&query=Pushkar%20heritage%20haveli%20stay',
        reviewsUrl: 'https://www.google.com/maps/search/?api=1&query=Pushkar%20heritage%20haveli%20reviews',
        highlights: ['More intimate heritage vibe', 'Cultural proximity'],
        caution: ['Verify building age/history claims before paying premium'],
      },
      {
        id: 'hg-moti-mahal-pushkar',
        name: 'Hotel Moti Mahal (Heritage Haveli, Pushkar)',
        area: 'Pushkar lake side',
        typeTag: 'Heritage haveli',
        budgetBand: '$$$',
        approxPrice: 'Approx: INR 3000-9000 / night',
        phone: '+91 8905250179',
        website: 'https://www.motimahalpushkar.com/',
        addressHint: 'Pushkar lake bridge side',
        mapUrl: 'https://www.google.com/maps/search/?api=1&query=Hotel%20Moti%20Mahal%20Pushkar',
        reviewsUrl: 'https://www.google.com/maps/search/?api=1&query=Hotel%20Moti%20Mahal%20Pushkar%20reviews',
        highlights: ['Heritage haveli branding with central location', 'Useful for cultural proximity'],
        caution: ['Confirm actual room category vs promotional photos'],
      },
      {
        id: 'hg-pushkar-fort-resort',
        name: 'Pushkar Fort (heritage-style resort)',
        area: 'Motisar Road, Pushkar',
        typeTag: 'Fort-style heritage resort',
        budgetBand: '$$$',
        approxPrice: 'Approx: INR 5000-14000 / night',
        phone: '+91 1452772019 / +91 9672104104',
        email: 'reservations@pushkararesort.com',
        website: 'https://pushkararesort.com/',
        addressHint: 'Motisar Road, Ganahera, Pushkar',
        mapUrl: 'https://www.google.com/maps/search/?api=1&query=Pushkar%20Fort%20Resort',
        reviewsUrl: 'https://www.google.com/maps/search/?api=1&query=Pushkar%20Fort%20Resort%20reviews',
        highlights: ['Fort-style architecture appeal', 'Good for heritage-themed leisure stays'],
        caution: ['Clarify true heritage history vs themed design'],
      },
    ],
  },
  camps: {
    title: 'Camps (Desert/Adventure)',
    eyebrow: 'Accommodation',
    lead:
      'Camp listings can be misleading. Always confirm tent type, included activities, and safety setup before payment.',
    problem: [
      '“Luxury camp” can turn out to be basic tents with poor facilities.',
      'Remote locations increase safety concerns and transport confusion.',
      'Activity inclusion confusion (camel safari, dinner, folk show, transfers).',
    ],
    solution: [
      'Camp type clarity: budget tent vs premium desert camp.',
      'Included activities checklist in writing.',
      'Safety verification: exact location, on-site team, night security, medical access.',
    ],
    why: ['This is a high-share social-media experience category.', 'A bad camp experience can ruin overall trip sentiment.'],
    quickTiles: [
      { label: 'Camp type', value: 'Budget vs Luxury' },
      { label: 'Inclusions', value: 'Written list' },
      { label: 'Safety', value: 'Remote-check' },
      { label: 'Rule', value: 'Map before pay' },
    ],
    spotsTitle: 'Camp experiences (Pushkar belt)',
    spotsLead: 'For Ajmer itineraries, many camp experiences are booked in nearby Pushkar/desert-style zones.',
    spots: [
      {
        id: 'cp-pushkar-camp-clusters',
        name: 'Pushkar desert camp clusters',
        area: 'Pushkar outskirts',
        typeTag: 'Desert camp',
        budgetBand: '$$-$$$',
        approxPrice: 'Approx: INR 2000-8500 / night (package-dependent)',
        website: 'https://www.google.com/maps/search/?api=1&query=Pushkar%20desert%20camp',
        addressHint: 'Pushkar outer belt / activity zones',
        mapUrl: 'https://www.google.com/maps/search/?api=1&query=Pushkar%20desert%20camp',
        reviewsUrl: 'https://www.google.com/maps/search/?api=1&query=Pushkar%20desert%20camp%20reviews',
        highlights: ['Good for sunset + activity packages', 'Instagram-friendly setup'],
        caution: ['Confirm private washroom + power backup + transfer timing'],
      },
      {
        id: 'cp-adventure-camp-ajmer-belt',
        name: 'Adventure camp operators (Ajmer-Pushkar belt)',
        area: 'Regional activity routes',
        typeTag: 'Adventure camp',
        budgetBand: '$$',
        approxPrice: 'Approx: INR 1500-6000 / night',
        website: 'https://www.google.com/maps/search/?api=1&query=Ajmer%20Pushkar%20adventure%20camp',
        addressHint: 'Ajmer-Pushkar road-linked zones',
        mapUrl: 'https://www.google.com/maps/search/?api=1&query=Ajmer%20Pushkar%20adventure%20camp',
        reviewsUrl: 'https://www.google.com/maps/search/?api=1&query=Ajmer%20Pushkar%20adventure%20camp%20reviews',
        highlights: ['Activity-heavy formats', 'Group-friendly experiences'],
        caution: ['Verify operator legitimacy + emergency support'],
      },
      {
        id: 'cp-pushkar-adventure-desert-camp',
        name: 'Pushkar Adventure Desert Camp',
        area: 'Pushkar',
        typeTag: 'Desert camp operator',
        budgetBand: '$$',
        approxPrice: 'Approx: INR 2200-7500 / night + activity packages',
        phone: '+91 9828349144',
        website: 'https://www.pushkarsafaridesertcamp.com/contact/',
        addressHint: 'Pushkar camp belt',
        mapUrl: 'https://www.google.com/maps/search/?api=1&query=Pushkar%20Adventure%20Desert%20Camp',
        reviewsUrl: 'https://www.google.com/maps/search/?api=1&query=Pushkar%20Adventure%20Desert%20Camp%20reviews',
        highlights: ['Known camp operator with direct contact', 'Useful for activity-led bookings'],
        caution: ['Confirm exact inclusions in writing before payment'],
      },
      {
        id: 'cp-desert-safari-pushkar',
        name: 'Desert Safari Pushkar camp operators',
        area: 'Pushkar outskirts',
        typeTag: 'Camp + safari package',
        budgetBand: '$$',
        approxPrice: 'Approx: INR 1800-6500 / night',
        phone: '+91 9587735719',
        website: 'https://www.desertsafaripushkar.com/desert-camping-pushkar.php',
        addressHint: 'Pushkar outskirts (operator-dependent location)',
        mapUrl: 'https://www.google.com/maps/search/?api=1&query=Desert%20Safari%20Pushkar%20Camp',
        reviewsUrl: 'https://www.google.com/maps/search/?api=1&query=Desert%20Safari%20Pushkar%20Camp%20reviews',
        highlights: ['Good for combined camp + safari intent', 'Budget-to-mid package variety'],
        caution: ['Verify tent category and private washroom status'],
      },
    ],
  },
}

function mq(q: string): string {
  return `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(q)}`
}

function mkSpot(
  slug: string,
  id: string,
  name: string,
  area: string,
  typeTag: string,
  budgetBand: string,
  approxPrice: string,
  addressHint: string,
  query: string,
  highlights: string[],
  caution: string[],
): AccommodationSpot {
  return {
    id: `${slug}-${id}`,
    name,
    area,
    typeTag,
    budgetBand,
    approxPrice,
    addressHint,
    mapUrl: mq(query),
    reviewsUrl: mq(`${query} reviews`),
    highlights,
    caution,
    sourceLabel: 'Map search — verify',
  }
}

function campSearchQueries(cityName: string, region: string): [string, string, string, string] {
  const r = region.toLowerCase()
  if (/desert|thar|western rajasthan|jodhpur|jaisalmer|bikaner|barmer|jalore/i.test(r)) {
    return [
      `desert camp ${cityName} Rajasthan`,
      `camel safari camp ${cityName}`,
      `luxury tent camp ${cityName}`,
      `sand dune camp ${cityName}`,
    ]
  }
  if (/lake|mewar|southern|hadoti|chambal|east|banswara|udaipur|kota|chittorgarh/i.test(r)) {
    return [
      `eco camp ${cityName}`,
      `lakeside resort camp ${cityName} Rajasthan`,
      `adventure camp ${cityName}`,
      `tented stay ${cityName}`,
    ]
  }
  return [
    `camp ${cityName} Rajasthan`,
    `adventure camp ${cityName}`,
    `eco resort ${cityName}`,
    `tent hotel ${cityName}`,
  ]
}

function genericSpots(category: AccommodationCategory, city: City): AccommodationSpot[] {
  const { name: cn, slug, region } = city
  switch (category) {
    case 'hostels':
      return [
        mkSpot(
          slug,
          'hst1',
          `Hostels & dorms — ${cn}`,
          cn,
          'Hostel',
          '$$',
          'Approx INR 400–2500 / night (season)',
          'Traveller lanes / near institutes',
          `hostel ${cn} Rajasthan`,
          ['Sort reviews by newest', 'Check curfew and locker rules'],
          ['Party hostels can be loud — read night-noise notes'],
        ),
        mkSpot(
          slug,
          'hst2',
          `Backpacker stays — ${cn}`,
          cn,
          'Backpacker',
          '$$',
          'Approx INR 500–2200 / night',
          'Old city / market edges',
          `backpacker hostel ${cn}`,
          ['Social common areas', 'Good for solo travellers'],
          ['Verify 24h reception in recent reviews'],
        ),
        mkSpot(
          slug,
          'hst3',
          `Budget lodges & dorms — ${cn}`,
          cn,
          'Dorm / lodge',
          '$',
          'Approx INR 350–1200 / night',
          'Near station or bus stand',
          `budget lodge dormitory ${cn}`,
          ['Lowest cash burn', 'Ask for linen policy'],
          ['Shared facilities — hygiene varies'],
        ),
        mkSpot(
          slug,
          'hst4',
          `Traveller PG / lodge clusters — ${cn}`,
          cn,
          'Lodge',
          '$',
          'Approx INR 400–1500 / night',
          'Mixed — verify listing',
          `traveller lodge ${cn} Rajasthan`,
          ['Useful for quick transits', 'Negotiate for multi-night'],
          ['Confirm exact room photos before paying'],
        ),
      ]
    case 'homestays':
      return [
        mkSpot(
          slug,
          'hm1',
          `Homestays — ${cn}`,
          cn,
          'Homestay',
          '$$',
          'Approx INR 900–4500 / night',
          'Residential streets / village edge',
          `homestay ${cn} Rajasthan`,
          ['Host interaction when genuine', 'Ask about meals'],
          ['Confirm private bathroom and hot water'],
        ),
        mkSpot(
          slug,
          'hm2',
          `Farm stays & rural guest houses — ${cn}`,
          cn,
          'Farmstay',
          '$$',
          'Approx INR 1200–5000 / night',
          'Outskirts',
          `farm stay ${cn} Rajasthan`,
          ['Quieter nights', 'Star visibility on clear days'],
          ['Own transport helps — confirm road condition in monsoon'],
        ),
        mkSpot(
          slug,
          'hm3',
          `Serviced apartments — ${cn}`,
          cn,
          'Apartment',
          '$$',
          'Varies',
          'Neighbourhood blocks',
          `serviced apartment ${cn} Rajasthan`,
          ['Kitchen access sometimes', 'Families prefer'],
          ['Verify exact tower/flat before transfer'],
        ),
        mkSpot(
          slug,
          'hm4',
          `Family guest houses — ${cn}`,
          cn,
          'Guest house',
          '$$',
          'Approx INR 800–3500 / night',
          'Town centre',
          `guest house ${cn}`,
          ['Simpler than big hotels', 'Often flexible meals'],
          ['AC/generator claims — verify in reviews'],
        ),
      ]
    case 'resorts':
      return [
        mkSpot(
          slug,
          'rs1',
          `Resorts — ${cn}`,
          cn,
          'Resort',
          '$$$',
          'Approx INR 3500–18000 / night',
          'Scenic / highway belt',
          `resort ${cn} Rajasthan`,
          ['Pools & lawns where listed', 'Compare half-board vs room-only'],
          ['Resort fee / taxes — ask net price'],
        ),
        mkSpot(
          slug,
          'rs2',
          `Spa & leisure resorts — ${cn}`,
          cn,
          'Spa resort',
          '$$$$',
          'Premium',
          'Drive radius from town',
          `spa resort ${cn}`,
          ['Slow itineraries', 'Weekend surcharges'],
          ['Activity inclusions — get in writing'],
        ),
        mkSpot(
          slug,
          'rs3',
          `Luxury stays — ${region}`,
          region,
          'Luxury',
          '$$$$',
          'Varies',
          'Destination hotels',
          `luxury hotel resort ${cn}`,
          ['Event calendars busy in season', 'Transfers optional'],
          ['Compare palace hotels vs modern five-star for value'],
        ),
        mkSpot(
          slug,
          'rs4',
          `Eco & nature resorts — ${cn}`,
          cn,
          'Eco resort',
          '$$$',
          'Varies',
          'Green belts',
          `eco resort ${cn} Rajasthan`,
          ['Nature-forward', 'Good for 2+ nights'],
          ['Wildlife buffers — follow local guidance'],
        ),
      ]
    case 'heritage':
      return [
        mkSpot(
          slug,
          'hg1',
          `Heritage hotels — ${cn}`,
          cn,
          'Heritage',
          '$$$',
          'Approx INR 4000–20000 / night',
          'Old quarters / fort views',
          `heritage hotel ${cn} Rajasthan`,
          ['Courtyards & arches', 'Ask verifiable history'],
          ['Stairs and thresholds — accessibility check'],
        ),
        mkSpot(
          slug,
          'hg2',
          `Haveli stays — ${cn}`,
          cn,
          'Haveli',
          '$$$',
          'Varies',
          'Historic lanes',
          `haveli hotel ${cn}`,
          ['Intimate scale', 'Great for photos'],
          ['Premium pricing — compare meal plans'],
        ),
        mkSpot(
          slug,
          'hg3',
          `Palace & fort-style hotels — ${region}`,
          region,
          'Palace hotel',
          '$$$$',
          'Luxury',
          'Where district has inventory',
          `palace hotel ${cn}`,
          ['Flagship experiences', 'Book dinners early'],
          ['Heritage room vs new wing — confirm category'],
        ),
        mkSpot(
          slug,
          'hg4',
          `Boutique heritage — ${cn}`,
          cn,
          'Boutique',
          '$$$',
          'Varies',
          'Central town',
          `boutique heritage hotel ${cn}`,
          ['Design-led', 'Smaller room count'],
          ['Parking tight in old cores — ask hotel'],
        ),
      ]
    case 'camps': {
      const [q1, q2, q3, q4] = campSearchQueries(cn, region)
      return [
        mkSpot(
          slug,
          'cp1',
          `Camp stays — ${cn}`,
          cn,
          'Camp',
          '$$',
          'Approx INR 1500–9000+ / night',
          'Operator-dependent',
          q1,
          ['Bonfire / folk nights common in desert belts', 'Confirm inclusions'],
          ['Ask: attached bath? power backup?'],
        ),
        mkSpot(
          slug,
          'cp2',
          `Adventure camps — ${cn}`,
          cn,
          'Adventure',
          '$$',
          'Package-heavy',
          'Outskirts',
          q2,
          ['Zip / ATV / rope where offered', 'Helmets and harness checks'],
          ['Refund rules if weather cancels'],
        ),
        mkSpot(
          slug,
          'cp3',
          `Luxury tents & glamping — ${region}`,
          region,
          'Glamping',
          '$$$',
          'Premium',
          'Scenic belts',
          q3,
          ['Comfort + views', 'Book meals'],
          ['Remote roads — daytime arrival safer'],
        ),
        mkSpot(
          slug,
          'cp4',
          `More operators — ${cn}`,
          cn,
          'Camp cluster',
          '$$',
          'Varies',
          'Compare listings',
          q4,
          ['Cross-check two operators before deposit', 'Share live location with someone'],
          ['Read newest reviews for toilet/shower quality'],
        ),
      ]
    }
    default:
      return []
  }
}

function genericCategoryBundle(category: AccommodationCategory, city: City): AccommodationCategoryBundle {
  const b = structuredClone(AJMER_GUIDE[category])
  b.spotsTitle = `${b.title} — ${city.name}`
  b.spotsLead = `Hand-verified rows are expanding. For ${city.name} (${city.region}), use these Map searches first — sort by **Newest** reviews, then confirm on the official listing or hotel call.`
  b.spots = genericSpots(category, city)
  return b
}

export function getAccommodationCategoryGuideByCitySlug(
  slug: string,
  category: AccommodationCategory,
): AccommodationCategoryBundle {
  if (slug === 'ajmer') return AJMER_GUIDE[category]
  const city = getCityBySlug(slug)
  if (!city) return AJMER_GUIDE[category]
  return genericCategoryBundle(category, city)
}

