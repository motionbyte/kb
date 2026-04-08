export type CulturalAuthorityContact = {
  id: string
  label: string
  role: string
  phoneDisplay?: string
  telDigits?: string
  website?: string
}

export type CulturalShowEntry = {
  id: string
  name: string
  teaser?: string
  where: string
  historicalContext: string[]
  whatToExpect: string[]
  typicalTiming: string
  contact?: CulturalAuthorityContact
  latitude: number
  longitude: number
}

export type CulturalShowsCategory = {
  id: string
  eyebrow: string
  title: string
  intro: string[]
  shows: CulturalShowEntry[]
  /** Lazy live listings on open via LocalEventsLivePanel */
  liveEvents?: boolean
}

export type CityCulturalShowsBundle = {
  citySlug: string
  leadTitle: string
  leadParagraphs: string[]
  authorityContacts: CulturalAuthorityContact[]
  categories: CulturalShowsCategory[]
}

const ajmerCulturalShows: CityCulturalShowsBundle = {
  citySlug: 'ajmer',
  leadTitle: 'Cultural shows: heritage to live stage',
  leadParagraphs: [
    'Ajmer district offers Sufi devotional music, qawwali mehfils in festival windows, folk dance circuits in Pushkar season, and hotel courtyard programs for tourists. The context below helps users understand what is historical, what is tourist-curated, and where each usually happens.',
    'Keep expectations practical: some shows are seasonal, some are only during Urs/Kartik/fair periods, and some depend on private venue programming.',
  ],
  authorityContacts: [
    {
      id: 'tourism-raj',
      label: 'Rajasthan Tourism',
      role: 'Official tourism helpdesk and event pointers',
      phoneDisplay: '1800-180-29',
      telDigits: '1800180029',
      website: 'https://tourism.rajasthan.gov.in/',
    },
    {
      id: 'ajmer-admin',
      label: 'Ajmer district administration',
      role: 'District event permissions / public event coordination',
      phoneDisplay: '0145-2627427',
      telDigits: '01452627427',
    },
    {
      id: 'ajmer-police',
      label: 'Ajmer police control',
      role: 'Crowd control / local event safety queries',
      phoneDisplay: '0145-2420900',
      telDigits: '01452420900',
    },
  ],
  categories: [
    {
      id: 'cultural-historic',
      eyebrow: 'Best known · historic circuits',
      title: 'Historically rooted shows',
      intro: [
        'These are not all nightly ticketed programs. Many are tied to dargah tradition, temple-town calendars, or major mela windows. Use the location and contact pointers before visiting.',
      ],
      shows: [
        {
          id: 'urs-qawwali',
          name: 'Urs qawwali mehfils (Ajmer Sharif orbit)',
          teaser: 'Chishti Sufi tradition',
          where: 'Dargah area during Urs windows and associated gatherings',
          historicalContext: [
            'Ajmer Sharif hosts one of the most important Chishti devotional traditions in South Asia. Qawwali here is rooted in sama (listening gatherings), with poetic lineages and devotional intent rather than only stage entertainment.',
            'Performance intensity and access vary by date, shrine flow, and management advisories.',
          ],
          whatToExpect: [
            'High crowd density during Urs and key evenings.',
            'Devotional setting first; filming may be restricted.',
            'Late-evening schedules can shift based on shrine activity.',
          ],
          typicalTiming: 'Mostly Urs period and selected evenings around dargah activity cycles.',
          contact: {
            id: 'tourism-raj-spot',
            label: 'Rajasthan Tourism',
            role: 'Guidance on major festival windows',
            phoneDisplay: '1800-180-29',
            telDigits: '1800180029',
          },
          latitude: 26.449722,
          longitude: 74.639722,
        },
        {
          id: 'pushkar-fair-stage',
          name: 'Pushkar fair folk stage programs',
          teaser: 'Kalbelia, ghoomar, bhavai circuits',
          where: 'Pushkar mela grounds and cultural stages (district Ajmer)',
          historicalContext: [
            'Pushkar fair combines pilgrimage, pastoral trade, and staged folk performance. Many acts are community forms adapted for public stage over 20th-century fair programming.',
            'Program sheets usually tighten in Kartik season; off-season availability is limited.',
          ],
          whatToExpect: [
            'Large open grounds, variable sound quality, and weather exposure.',
            'Multiple short-format performances across evening slots.',
            'Best confirmed through district fair notices in season.',
          ],
          typicalTiming: 'Peak around Kartik fair season; limited outside fair windows.',
          contact: {
            id: 'ajmer-admin-spot',
            label: 'Ajmer district administration',
            role: 'Fair notices and district event coordination',
            phoneDisplay: '0145-2627427',
            telDigits: '01452627427',
          },
          latitude: 26.488889,
          longitude: 74.551389,
        },
        {
          id: 'brahma-ghat-bhajans',
          name: 'Pushkar ghat devotional music / bhajan evenings',
          teaser: 'Temple-town devotional format',
          where: 'Selected ghats and temple precincts in Pushkar',
          historicalContext: [
            'Bhajan and kirtan formats in Pushkar are tied to temple and pilgrimage rhythms, not fixed-ticket theater timetables.',
            'Access, recording permissions, and participation etiquette vary by temple trust and occasion.',
          ],
          whatToExpect: [
            'Quiet, devotional atmosphere over amplified stage production.',
            'Footwear and dress etiquette in sacred zones.',
            'Programs can be short and unscripted.',
          ],
          typicalTiming: 'Common around aarti windows and festival dates; timing varies by temple.',
          latitude: 26.4887,
          longitude: 74.5509,
        },
      ],
    },
    {
      id: 'cultural-tourist-local',
      eyebrow: 'Hidden gems · local venue nights',
      title: 'Local and venue-curated cultural shows',
      intro: [
        'These are practical options for visitors who want a same-day cultural evening. They are often private-venue curated rather than ancient fixed institutions.',
      ],
      shows: [
        {
          id: 'hotel-courtyard-folk',
          name: 'Hotel courtyard folk dance/music nights',
          teaser: 'Tourist-friendly set formats',
          where: 'Heritage hotels and larger resorts around Ajmer/Pushkar route',
          historicalContext: [
            'Modern hospitality venues curate folk ensembles to introduce regional forms (ghoomar, kalbelia, sufi-folk fusion) in a compact show format.',
            'Lineups depend on occupancy and private event bookings.',
          ],
          whatToExpect: [
            '45-90 minute sets, often with dinner packages.',
            'Pre-booking required for non-resident guests at many venues.',
            'Photography usually allowed; ask before close portraits of performers.',
          ],
          typicalTiming: 'Most frequent Oct-Mar evenings and holiday weekends.',
          contact: {
            id: 'tourism-raj-venue',
            label: 'Rajasthan Tourism',
            role: 'Can suggest verified hospitality circuits',
            phoneDisplay: '1800-180-29',
            telDigits: '1800180029',
          },
          latitude: 26.4825,
          longitude: 74.6208,
        },
        {
          id: 'city-auditorium-events',
          name: 'City auditorium / college cultural programs',
          teaser: 'One-off public performances',
          where: 'Ajmer town halls, colleges, and civic auditoriums',
          historicalContext: [
            'Institution-led cultural nights (music, theater, poetry) are an important modern layer of city culture and often feature local artists.',
            'Calendars are irregular and often announced close to date.',
          ],
          whatToExpect: [
            'Ticketed or invite-based formats.',
            'Language mix: Hindi, Rajasthani, Urdu depending on organizer.',
            'Events may be postponed with little notice.',
          ],
          typicalTiming: 'Mostly academic/civic calendars and festival weeks.',
          contact: {
            id: 'ajmer-admin-aud',
            label: 'Ajmer district administration',
            role: 'Public venue and civic event references',
            phoneDisplay: '0145-2627427',
            telDigits: '01452627427',
          },
          latitude: 26.455,
          longitude: 74.6376,
        },
      ],
    },
    {
      id: 'cultural-live-today',
      eyebrow: 'Today · live listings',
      title: 'Cultural shows today',
      intro: [
        'This section fetches fresh listings when you open it. Connect your events API to Insider/BookMyShow aggregators using VITE_LOCAL_EVENTS_URL for production.',
      ],
      shows: [],
      liveEvents: true,
    },
  ],
}

const bySlug: Record<string, CityCulturalShowsBundle> = {
  ajmer: ajmerCulturalShows,
}

export function getCityCulturalShowsBySlug(slug: string): CityCulturalShowsBundle | undefined {
  return bySlug[slug]
}
