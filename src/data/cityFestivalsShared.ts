import type { CityFestivalsBundle, FestivalCategory, FestivalEntry } from './cityFestivals.types'

/** Second lead paragraph — matches Ajmer; reused for every city bundle. */
export const FESTIVALS_LEAD_P2 =
  'Each block asks: why celebrate, how old is the memory, who is remembered, and what astronomy, season, or social science helps explain the timing and the crowd.'

export function entryHoli(slug: string): FestivalEntry {
  return {
    id: `${slug}-holi-phalgun`,
    name: 'Holi (Phalgun Purnima region)',
    teaser: 'Spring colour · Vasant',
    why: [
      'Holi celebrates the turning of winter toward summer — Krishna–Rādhā lore, Kamadeva spring myths, and the bonfire of Holikā Dahan (night before) in many regions. In Rajasthan towns, colour play (gulal) and community mixing express social repair after the closed-in cold season.',
      'Reason to celebrate: renewal, fertility of fields, and joyful inversion of hierarchy for a day — servants and kings could share colour in folk memory.',
    ],
    origin: {
      whenStarted:
        'Medieval bhakti and regional courts spread Holi songs and timed festivals; the colour-throwing form familiar today intensified under 19th–20th century urban leisure and industrial pigment production.',
      attributedWho:
        'Puranic narratives (Prahlāda–Holikā); poets like Surdas in Braj tradition; local thikanas — no single founder.',
    },
    scientificAndSocial: [
      'Seasonal: Phalgun aligns with spring equinox period in North India — rising temperatures, flowering — sensible time for outdoor gathering before brutal heat.',
      'Plant dyes historically (tesu, indigo) had pharmacognosy links; modern synthetic colours raised dermatology and eye-safety concerns — “science” here includes public-health messaging.',
      'Social cohesion: Large mixed gatherings can strengthen weak ties in neighbourhoods — studied in sociology of festivals.',
    ],
  }
}

export function entryDiwali(slug: string): FestivalEntry {
  return {
    id: `${slug}-diwali-kartik`,
    name: 'Diwali (Deepotsava · Amāvasyā of Kārtika)',
    teaser: 'Lamps, Lakṣmī-pūjā, winter prep',
    why: [
      'Diwali clusters many stories — Rāma’s return to Ayodhyā, Lakṣmī emerging from the churning ocean, Narakāsura in some regions — but common thread is light over darkness, dharma over fear, and household prosperity rituals.',
      'In merchant towns of Rajasthan, ledgers and shops are blessed; for farmers, it marks post-kharif gratitude and pre-winter storage psychology.',
    ],
    origin: {
      whenStarted:
        'Pan-Indian observance for well over a millennium in inscription and poetry; lamp rows appear in Sanskrit drama and medieval temple epigraphy — modern electric lighting is new, meaning is old.',
      attributedWho:
        'Scriptural memory ties to Rāma and Lakṣmī; community gurus and mercantile castes standardized local muhūrta for pūjā.',
    },
    scientificAndSocial: [
      'Astronomy: New moon night of Kārtika — darkest sky, hence symbolic need for lamps; also start of winter night lengthening in Northern Hemisphere.',
      'Air quality: Traditional oil lamps vs crackers — crackers add particulates; civic science debates peak each October–November.',
      'Economy: Festival consumption cycle — sweets, metalware, textiles — classic demand shock studied in regional economics.',
    ],
  }
}

export function entryMakarSankranti(slug: string): FestivalEntry {
  return {
    id: `${slug}-makar-sankranti`,
    name: 'Makar Saṅkrānti',
    teaser: 'Sun into Makara · til-gur',
    why: [
      'Saṅkrānti marks the sun’s apparent entry into Capricorn (Makara) — a solar hinge celebrated with sesame–jaggery sweets, kites in many North Indian towns, and charity.',
      'Reason: gratitude for harvest (especially in irrigated belts), honouring ancestors, and welcoming longer days after winter solstice period.',
    ],
    origin: {
      whenStarted:
        'Observed for centuries in Indic calendars; kite flying as mass culture is more recent urban layer (19th–20th c. in many cities).',
      attributedWho:
        'Pan-Indian solar ritual grammar — regional kings and temples set fair days; no single inventor.',
    },
    scientificAndSocial: [
      'Astronomy: True tropical year vs civil calendar — Indian solar calendars use sidereal zodiac; Makar Saṅkrānti is a predictable solar event.',
      'Nutrition: Sesame (oil) + jaggery (iron, energy) fits cold-season dietary advice in Āyurveda-inspired folk practice — not a substitute for clinical dietetics but culturally coherent.',
      'Safety: Kite strings (“manjha”) caused cuts and power-line accidents — urban science communication now targets safer materials.',
    ],
  }
}

export function categoryCivicNational(slug: string, cityName: string): FestivalCategory {
  return {
    id: `${slug}-civic-national`,
    eyebrow: 'Civic · republic',
    title: 'National & state days in the city',
    intro: [
      'These follow the Gregorian calendar and the Constitution — observed in schools, offices, and public grounds. They are not “religious” but shape when traffic, closures, and flag ceremonies concentrate.',
    ],
    festivals: [
      {
        id: `${slug}-republic-day`,
        name: 'Republic Day (26 January)',
        teaser: 'Constitution · parade grammar',
        why: [
          'Marks the date India’s Constitution came into effect (1950) — citizenship, rights, and duties as a democratic republic. Schools and colleges hold parades; locally, municipal grounds echo smaller versions.',
          'Reason to participate: civic pride, remembrance of the freedom struggle’s legal outcome, and children learning anthem/discipline as embodied ritual.',
        ],
        origin: {
          whenStarted:
            'Observed annually since 1950; the form of pageantry stabilizes through Doordarshan-era national broadcasting.',
          attributedWho:
            'The Constituent Assembly and Dr. B.R. Ambedkar’s drafting committee as institutional authors; celebration is state-organized with citizen participation.',
        },
        scientificAndSocial: [
          'Meteorology: Late January in Rajasthan is cool — outdoor parades feasible; heat stress lower than summer.',
          'Acoustics & crowd: Marching bands and loudspeakers — sound-level norms now appear in urban bylaws.',
          'Pedagogy: Ritual repetition builds constitutional literacy alongside flag etiquette — political science of civic education.',
        ],
      },
      {
        id: `${slug}-independence-day`,
        name: 'Independence Day (15 August)',
        teaser: '1947 · midnight sovereignty',
        why: [
          'Celebrates the end of colonial rule and the transfer of power — flag-hoisting at Red Fort is iconic; locally, schools and offices mirror speeches and sweets.',
          `Emotional reason: memory of partition trauma alongside freedom — in ${cityName} as elsewhere, families carry mixed stories; the day is both triumph and solemnity.`,
        ],
        origin: {
          whenStarted:
            '1947 first observance; annual since — television standardized the “chief minister speech” pattern in states.',
          attributedWho:
            'Freedom movement leaders and millions of unnamed activists; the date follows the Indian Independence Act timeline.',
        },
        scientificAndSocial: [
          'Climate: Mid-August can still be monsoon-heavy — outdoor events need rain contingency; disease vectors peak in wet season — health camps sometimes piggyback.',
          'Media: Satellite era unified simultaneous flag rituals — studied in media anthropology.',
        ],
      },
      {
        id: `${slug}-rajasthan-day`,
        name: 'Rajasthan Day (30 March)',
        teaser: 'State formation memory',
        why: [
          'Commemorates the merger of princely states into Rajasthan in 1949 — for locals, it explains Jaipur as capital today and how former thikanas became districts.',
          `For ${cityName}, the day situates local memory inside that larger map — crafts, dialects, and regional heroes appear in state-sponsored programmes.`,
        ],
        origin: {
          whenStarted:
            'Modern observance as “state day” grows with post-2000 cultural policy branding; the underlying integration is mid-20th century.',
          attributedWho:
            'Sardār Vallabhbhāī Patel’s integration architecture; local maharajas’ accession; later elected governments curate the story.',
        },
        scientificAndSocial: [
          'Administrative science: District boundaries affect resource allocation — understanding the festival is partly understanding GIS governance.',
          'Tourism: State tourism boards time campaigns — economic spillovers.',
        ],
      },
    ],
  }
}

export function categoryLocalLiveEvents(): FestivalCategory {
  return {
    id: 'local-live-events',
    eyebrow: 'Listings · live',
    title: 'Local events (today & upcoming)',
    intro: [
      'Concerts, comedy, sports screenings, workshops and other ticketed happenings — grouped by category. Nothing here is a fixed script: listings load when you open this block.',
      'BookMyShow, Insider, Townscript and similar apps do not ship a reliable unauthenticated browser API. Wire `VITE_LOCAL_EVENTS_URL` to your own aggregator (official partner APIs or scraped feeds you host) for production; until then the app shows rotating demo rows so you can test the UI.',
    ],
    festivals: [],
    liveEvents: true,
  }
}

export function categoryIslamicStandard(
  slug: string,
  cityName: string,
  eyebrow: string,
  title: string,
  intro: string[],
): FestivalCategory {
  return {
    id: `${slug}-islamic-calendars`,
    eyebrow,
    title,
    intro,
    festivals: [
      {
        id: `${slug}-eid-two`,
        name: 'ʿĪd al-Fiṭr & ʿĪd al-Aḍḥā',
        teaser: 'Lunar Islamic feasts',
        why: [
          'ʿĪd al-Fiṭr breaks Ramaḍān fasting — gratitude, charity (zakāt al-fiṭr), communal prayer. ʿĪd al-Aḍḥā remembers Ibrāhīm’s trial and distributes meat after Ḥajj symbolism — sharing with neighbours regardless of faith is a strong social norm in many Indian towns.',
          `In ${cityName}, bazaars light up; families visit graves; mosques and Sufi-linked sites may see extra visitors — the whole urban soundscape shifts for those days.`,
        ],
        origin: {
          whenStarted:
            'Qurʾānic-era Arab community practice; in India, localized for centuries — Indo-Islamic courts standardized jamaʿāt timings; British census recorded regional variants.',
          attributedWho:
            'Prophetic sunna as transmitted fiqh schools; Indian ulema and local mosques declare moonsighting or follow calendars — authority is distributed.',
        },
        scientificAndSocial: [
          'Astronomy: Lunar months ~29.5 days — 12 months ≈ 354 days, so Islamic feasts drift through seasons over a ~33-year cycle — Ramadan can fall in summer or winter in India.',
          'Physiology: Ramadan fasting in high heat raises hydration and occupational-safety issues — medical literature on athletes, labourers, diabetics.',
          'Sociology: Eid prayer grounds temporarily unify neighbourhoods; meat distribution reduces inequality in meat access for a day — anthropologists write on “festival redistribution”.',
        ],
      },
      {
        id: `${slug}-muharram-ramadan-neighbourhood`,
        name: 'Muharram, Ramaḍān rhythms & neighbourhood mosques',
        teaser: 'Hijrī calendar · civic coexistence',
        why: [
          'ʿĀshūrā and Muharram processions in some towns; in others a quieter commemoration — patterns vary by sect and local history. Ramaḍān structures night markets, iftār generosity, and tarāwīḥ schedules that reshape traffic and sound.',
          `For ${cityName}, the point is practical: lunar calendars set school holidays, shop hours, and NGO meal lines — reading the city means noticing these overlapping rhythms alongside Hindu tithi and the Gregorian week.`,
        ],
        origin: {
          whenStarted:
            'Centuries of Indo-Islamic settlement; public processions where permitted reflect colonial-era police protocols and post-Partition demographic maps.',
          attributedWho:
            'Local ʿulamāʾ, anjumans, and municipal negotiators — not a single author.',
        },
        scientificAndSocial: [
          'Public health: Large gatherings need water, crowd control, and noise management — municipal science peaks during major nights.',
          'Acoustics: Azān and loudspeakers intersect with urban noise bylaws — a live civics lesson.',
          'Economy: Iftār stalls and seasonal employment — informal labour markets spike during Ramadan in many North Indian cities.',
        ],
      },
      {
        id: `${slug}-sufi-dargah-memory`,
        name: 'Dargahs, qabrastān & shared sacred geography',
        teaser: 'Not every town has a Mughal-scale Urs',
        why: [
          'Smaller towns may lack a world-famous Urs, but many have qabrastāns, chillahs, and family shrines visited on Thursdays or death anniversaries — adab (respect) and langar-like feeding still structure neighbourhood ethics.',
          `Visitors to ${cityName} often walk past these sites without labels — understanding them helps parse why certain streets widen during processions or why parking rules change overnight.`,
        ],
        origin: {
          whenStarted:
            'Chishtī and other silsilas spread through Rajasthan from the medieval period; local graves become nodes of memory without imperial chronicles.',
          attributedWho:
            'Khādim families, regional saints’ descendants, and women-led vow networks — oral history often ahead of archives.',
        },
        scientificAndSocial: [
          'Urban planning: Procession routes are legacy infrastructure — widening a lane can be a heritage decision.',
          'Demography: Census categories undercount ritual participation — festival studies complement headcounts.',
        ],
      },
    ],
  }
}

export type CityFestivalsParts = {
  slug: string
  name: string
  leadParagraph1: string
  sanatan: {
    eyebrow: string
    title: string
    intro: string[]
    signature: FestivalEntry
  }
  islamic: {
    eyebrow: string
    title: string
    intro: string[]
  }
}

export function buildCityFestivalsBundle(parts: CityFestivalsParts): CityFestivalsBundle {
  const { slug, name, leadParagraph1, sanatan, islamic } = parts
  return {
    citySlug: slug,
    leadTitle: 'Why this calendar matters here',
    leadParagraphs: [leadParagraph1, FESTIVALS_LEAD_P2],
    categories: [
      {
        id: `${slug}-sanatan`,
        eyebrow: sanatan.eyebrow,
        title: sanatan.title,
        intro: sanatan.intro,
        festivals: [entryHoli(slug), entryDiwali(slug), entryMakarSankranti(slug), sanatan.signature],
      },
      categoryIslamicStandard(slug, name, islamic.eyebrow, islamic.title, islamic.intro),
      categoryCivicNational(slug, name),
      categoryLocalLiveEvents(),
    ],
  }
}
