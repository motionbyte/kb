/**
 * Hands-on workshops — cooking, craft, art. Confirm schedules with hosts; many run seasonally.
 */

import { getCityLandmarkCentre } from '@/data/cityPhotographyLandmarkRows'

export type WorkshopContact = {
  id: string
  label: string
  role: string
  phoneDisplay?: string
  telDigits?: string
  website?: string
}

export type WorkshopLevel = 'Beginner friendly' | 'All levels' | 'Some experience helps'

export type WorkshopEntry = {
  id: string
  name: string
  teaser?: string
  where: string
  youLearn: string[]
  expect: string[]
  durationBooking: string
  level?: WorkshopLevel
  etiquette?: string[]
  contact?: WorkshopContact
  latitude: number
  longitude: number
}

export type WorkshopCategory = {
  id: string
  eyebrow: string
  title: string
  intro: string[]
  workshops: WorkshopEntry[]
}

export type CityWorkshopsBundle = {
  citySlug: string
  leadTitle: string
  leadParagraphs: string[]
  authorityContacts: WorkshopContact[]
  categories: WorkshopCategory[]
}

const rajTourism: WorkshopContact = {
  id: 'tourism-raj',
  label: 'Rajasthan Tourism',
  role: 'Licensed guides & Institute of Hotel Management / craft referrals',
  phoneDisplay: '1800-180-29',
  telDigits: '1800180029',
  website: 'https://tourism.rajasthan.gov.in/',
}

const ajmerAdmin: WorkshopContact = {
  id: 'ajmer-admin',
  label: 'Ajmer district administration',
  role: 'Large public workshop / mela coordination',
  phoneDisplay: '0145-2627427',
  telDigits: '01452627427',
}

const ajmerWorkshops: CityWorkshopsBundle = {
  citySlug: 'ajmer',
  leadTitle: 'Workshops — cooking, craft & art',
  leadParagraphs: [
    'Ajmer–Pushkar attracts makers: sweets sellers, block printers from nearby towns, and hotel kitchens that teach travellers quick Rajasthani menus. Most workshops are 1–3 hour taster formats inside hotels, studios, or fair grounds.',
    'Book ahead in peak season (Oct–Mar). Ask whether materials, recipes, and takeaway pieces are included in the fee.',
  ],
  authorityContacts: [rajTourism, ajmerAdmin],
  categories: [
    {
      id: 'ws-cooking',
      eyebrow: 'Kitchen & flavour',
      title: 'Cooking & food workshops',
      intro: [
        'Vegetarian norms are common in pilgrimage neighbourhoods — always tell hosts about allergies. Hands-on classes often cover dal-baati sensibility, breads, chutneys, or festival sweets at a home-style level.',
      ],
      workshops: [
        {
          id: 'rajasthani-thali-taster',
          name: 'Rajasthani home kitchen taster (hotel / homestay)',
          teaser: 'Dal, roti, seasonal veg',
          where: 'Heritage hotels and guest kitchens in Ajmer old city and lake road belt — book through your stay or tourism desk',
          youLearn: [
            'Basic masala sequencing and tarkas used in Marwar–Mewar border cooking.',
            'How to balance heat, oil, and sour notes without overpowering pilgrimage-friendly palates.',
          ],
          expect: [
            'Aprons sometimes provided; confirm.',
            'Usually ends with a sit-down meal — pace spice politely if you are sensitive.',
          ],
          durationBooking: '2–3 hours; book 24–48 h ahead in season. Mornings or late afternoons avoid kitchen peak heat.',
          level: 'Beginner friendly',
          etiquette: ['Wash hands; ask before photographing family kitchens.', 'Tip staff if it is a private home — follow host cues.'],
          contact: rajTourism,
          latitude: 26.456,
          longitude: 74.632,
        },
        {
          id: 'sweet-makers-demo',
          name: 'Festive sweets & mithai demos',
          teaser: 'Malpua, rabri context',
          where: 'Often paired with culture hotels near dargah outer lanes or festival stalls during Urs / melas',
          youLearn: [
            'Sugar syrups, khoya handling basics, and how pilgrims’ sweets differ from Delhi–style mithai shops.',
          ],
          expect: [
            'More watch-and-taste than full production in small stalls.',
            'Hygiene standards vary — prefer organised demos inside licensed kitchens.',
          ],
          durationBooking: '60–90 minutes when offered; strongest during fair and festival programming.',
          level: 'All levels',
          contact: ajmerAdmin,
          latitude: 26.4504,
          longitude: 74.6412,
        },
      ],
    },
    {
      id: 'ws-textiles',
      eyebrow: 'Cloth & colour',
      title: 'Block printing & textiles',
      intro: [
        'Rajasthan’s block-print story lives in towns like Bagru, Sanganer, Barmer — artists sometimes run short modules for travellers based in Ajmer or Pushkar.',
      ],
      workshops: [
        {
          id: 'block-print-taster',
          name: 'Block printing taster — carve, dip, repeat',
          teaser: 'Motif + natural dyes intro',
          where: 'Studio-format classes advertised through Pushkar guesthouses or Ajmer craft NGOs — confirm current host',
          youLearn: [
            'How wooden blocks register on cotton and why repeat patterns “float”.',
            'Quick natural dye vocabulary: indigo vs madder families — not a chemistry lab, but enough to shop smarter.',
          ],
          expect: [
            'You often take home a napkin or scarf blank.',
            'Dyes stain — old clothes recommended.',
          ],
          durationBooking: 'Half-day common; full-day for serious learners. Reserve 1 week ahead for small studios.',
          level: 'Beginner friendly',
          latitude: 26.486,
          longitude: 74.555,
        },
        {
          id: 'bandhani-overview',
          name: 'Bandhani (tie-dye) demo & micro-project',
          teaser: 'Dots & resist',
          where: 'Craft sellers in Pushkar lanes sometimes host micro sessions; verify fixed schedule with shop owner',
          youLearn: [
            'How fine dots are tied before dye vats and why desert climates favoured this technique.',
          ],
          expect: [
            'Hands get dye; gloves not always supplied.',
            'Finished cloth may need overnight drying — shipping extra.',
          ],
          durationBooking: '2–4 hours when offered; weakest in off-season low tourism.',
          level: 'All levels',
          etiquette: ['Pay quoted price for materials before starting.', 'Credit the artisan if you post close process shots.'],
          latitude: 26.4892,
          longitude: 74.552,
        },
      ],
    },
    {
      id: 'ws-pottery',
      eyebrow: 'Clay & kiln',
      title: 'Pottery & clay',
      intro: [
        'Wheel-throwing tasters appear in traveller towns; Ajmer proper has fewer public wheels than Pushkar’s creative stays — still worth scanning NGO calendars.',
      ],
      workshops: [
        {
          id: 'clay-wheel-taster',
          name: 'Clay wheel or hand-build taster',
          teaser: 'Cup, diya, or small bowl',
          where: 'Pushkar-side creative stays and occasional Ajmer art spaces — ask Rajasthan Tourism for current list',
          youLearn: [
            'Centering basics on a wheel or coil/pinch alternatives if wheels are busy.',
            'How greenware becomes bisque — why you may not glaze same day.',
          ],
          expect: [
            'Clothes get dusty; short nails help on the wheel.',
            'Firing may take days — shipping or pickup arrangements vary.',
          ],
          durationBooking: '90 minutes typical; book morning slots Mar–Jun to avoid afternoon wheel slip from sweat.',
          level: 'Beginner friendly',
          contact: rajTourism,
          latitude: 26.4875,
          longitude: 74.553,
        },
      ],
    },
    {
      id: 'ws-art',
      eyebrow: 'Brush & line',
      title: 'Art, miniature & folk illustration',
      intro: [
        'Miniature lineage is stronger in Jaipur–Udaipur circuits, but Ajmer hosts art students and small galleries — short sketching workshops happen around Pushkar sunsets.',
      ],
      workshops: [
        {
          id: 'folk-illustration',
          name: 'Folk pattern & illustration session',
          teaser: 'Geometry from architecture',
          where: 'Small studios and rooftop classes — often announced via guesthouses',
          youLearn: [
            'How to break down jharokha and arch geometry into repeatable sketch units.',
            'Limited palette exercises with gouache or watercolour on cotton rag.',
          ],
          expect: [
            'Bring a sketchbook if you have a favourite paper — spare supplies may be student-grade.',
            'Wind on rooftops can scatter cups — clip boards help.',
          ],
          durationBooking: '2–3 hour sessions; sunset slots Oct–Feb most pleasant.',
          level: 'Some experience helps',
          latitude: 26.488889,
          longitude: 74.551389,
        },
      ],
    },
    {
      id: 'ws-metal',
      eyebrow: 'Silver & adornment',
      title: 'Jewellery & metal crafts',
      intro: [
        'Pushkar’s bazaar is famous for silver and tribal-style pieces. Some smiths allow short “finish a simple ring” experiences — always confirm insurance and torch safety.',
      ],
      workshops: [
        {
          id: 'silver-soft-hammer',
          name: 'Silver studio micro-workshop (stamping / soft form)',
          teaser: 'Not full casting',
          where: 'Pushkar main bazaar — only with shops that advertise fixed lessons and safety gear',
          youLearn: [
            'Annealing intuition, simple stamping, how to read silver purity marks in India.',
          ],
          expect: [
            'Torches and pickle baths — follow instructor boundaries.',
            'Material charges are separate from teaching fee.',
          ],
          durationBooking: '2–4 hours when available; avoid monsoon afternoons without roof cover.',
          level: 'Beginner friendly',
          etiquette: ['Do not film proprietary patterns without permission.', 'Bargain after class if you buy stock.'],
          latitude: 26.4886,
          longitude: 74.5525,
        },
      ],
    },
    {
      id: 'ws-photo-creative',
      eyebrow: 'Lens & story',
      title: 'Photography & travel journaling',
      intro: [
        'Short modules on phone photography, light near marble, and ethical candids are popular with foreign groups — often run by freelance guides.',
      ],
      workshops: [
        {
          id: 'phone-light-marble',
          name: 'Phone photography — light on marble & ghats',
          teaser: 'Exposure + respect',
          where: 'Meeting points near Ana Sagar or Pushkar ghats — book through trusted guide or hotel',
          youLearn: [
            'Metering pale stone without blowing highlights.',
            'Composition that avoids intrusive angles at shrines.',
          ],
          expect: [
            'Some shrine areas forbid tripods or any camera — obey signs first.',
            'Bring power bank; heat drains batteries fast.',
          ],
          durationBooking: 'Golden hour ~90 minutes + short edit talk; book evening before.',
          level: 'All levels',
          latitude: 26.471389,
          longitude: 74.625833,
        },
      ],
    },
  ],
}

function genericWorkshops(cityName: string, slug: string): CityWorkshopsBundle {
  const pin = getCityLandmarkCentre(slug)
  const mk = (
    id: string,
    name: string,
    teaser: string,
    catEyebrow: string,
    catTitle: string,
    catIntro: string[],
    learn: string[],
  ): WorkshopCategory => ({
    id,
    eyebrow: catEyebrow,
    title: catTitle,
    intro: catIntro,
    workshops: [
      {
        id: `${id}-intro`,
        name,
        teaser,
        where: `${cityName} — ask your hotel or ${rajTourism.label} for vetted hosts this season.`,
        youLearn: learn,
        expect: [
          'Small groups fill fastest Thu–Sun.',
          'Confirm language of instruction (Hindi / English) before paying.',
        ],
        durationBooking: 'Typically 2–3 hours; book at least one day ahead in peak season.',
        level: 'All levels',
        contact: rajTourism,
        latitude: pin.latitude,
        longitude: pin.longitude,
      },
    ],
  })

  return {
    citySlug: slug,
    leadTitle: `Workshops in ${cityName}`,
    leadParagraphs: [
      `${cityName} — same workshop categories as our full templates: cooking, textiles, clay, metal, lens & story. Hosts and hotel desks vary by season — call ahead in peak months.`,
      'Prefer kitchens and studios with clear cancellation policies; avoid paying 100% upfront to unknown WhatsApp numbers.',
    ],
    authorityContacts: [rajTourism],
    categories: [
      mk(
        'ws-cooking',
        'Regional cooking taster',
        'Hotel or home kitchen',
        'Kitchen & flavour',
        'Cooking workshops',
        ['Hands-on or demo formats for local thalis and chutneys.'],
        ['Basic spice order, fry vs temper timing, one bread technique.', 'How to adapt heat for guests.'],
      ),
      mk(
        'ws-textiles',
        'Textile & print session',
        'Block or tie-resist',
        'Cloth & colour',
        'Textiles',
        ['Short modules on resist dyeing or wood blocks.'],
        ['Repeat registration on cotton and how natural dyes fade beautifully.'],
      ),
      mk(
        'ws-pottery',
        'Pottery taster',
        'Wheel or hand-build',
        'Clay & kiln',
        'Pottery',
        ['Clay studios in traveller towns sometimes offer wheels.'],
        ['Centering or pinch pots; why firing waits matter.'],
      ),
      mk(
        'ws-art',
        'Art session',
        'Sketch or colour',
        'Brush & line',
        'Art & illustration',
        ['Geometry from local architecture as drawing prompts.'],
        ['Limited palette exercises; portable sketch habits.'],
      ),
      mk(
        'ws-metal',
        'Craft studio taster',
        'Metal or small forge intro',
        'Silver & adornment',
        'Metal crafts',
        ['Only with shops that show safety gear and insurance.'],
        ['Stamping, soft forming, material costs explained upfront.'],
      ),
      mk(
        'ws-photo-creative',
        'Creative skills',
        'Photo or journal',
        'Lens & story',
        'Photography & journaling',
        ['Ethical shooting near busy public sites.'],
        ['Phone exposure basics and quick editing workflow.'],
      ),
    ],
  }
}

const bySlug: Record<string, CityWorkshopsBundle> = {
  ajmer: ajmerWorkshops,
}

export function getCityWorkshopsBySlug(slug: string, cityName: string): CityWorkshopsBundle {
  return bySlug[slug] ?? genericWorkshops(cityName, slug)
}
