/**
 * Festival copy for city guides — Sanātana, Sufi-Islamic, and civic calendars.
 * Dates are lunar/solar approximations; verify each year with local panchang & mosque/dargah notices.
 */

export type FestivalOrigin = {
  /** When the observance crystallized or is first clearly attested */
  whenStarted: string
  /** Teachers, rulers, or communities associated — rarely a single “inventor” */
  attributedWho: string
}

export type FestivalEntry = {
  id: string
  name: string
  teaser?: string
  /** Why people gather; meaning in lived religion */
  why: string[]
  origin: FestivalOrigin
  /** Astronomy, season, body/society — not miracle claims */
  scientificAndSocial: string[]
}

export type FestivalCategory = {
  id: string
  eyebrow: string
  title: string
  intro: string[]
  festivals: FestivalEntry[]
  /**
   * When true, nested festival rows are hidden and the panel loads live ticketed listings
   * (lazy on open) — see `LocalEventsLivePanel`.
   */
  liveEvents?: boolean
}

export type CityFestivalsBundle = {
  citySlug: string
  leadTitle: string
  leadParagraphs: string[]
  categories: FestivalCategory[]
}

const ajmerFestivals: CityFestivalsBundle = {
  citySlug: 'ajmer',
  leadTitle: 'Why this calendar matters here',
  leadParagraphs: [
    'Ajmer sits at the hinge of the Aravallis: pilgrims walk the same lanes for Kartik at Pushkar, for the Urs at the Chishti dargah, and for Eid in the bazaars. Below, festivals are grouped by tradition — not to separate people, but to show how different calendars (lunar-solar tithi, Islamic hijri, Gregorian civic) overlap in one city.',
    'Each block asks: why celebrate, how old is the memory, who is remembered, and what astronomy, season, or social science helps explain the timing and the crowd.',
  ],
  categories: [
    {
      id: 'sanatan-pushkar',
      eyebrow: 'Sanātana · tirth',
      title: 'Hindu lunar-solar festivals & Pushkar',
      intro: [
        'These follow the Vikram Samvat / regional panchang: tithi (lunar day) tied to sunrise, with months like Kartik, Phalgun, Ashwin. Pushkar (in Ajmer district) shares the lake and ghats with Ajmer’s itineraries — many visitors pair both in one trip.',
      ],
      festivals: [
        {
          id: 'kartik-pushkar',
          name: 'Kartik Purnima & Pushkar Fair (Pushkar Mela)',
          teaser: 'Full moon of Kartik · cattle & culture',
          why: [
            'Kartik Purnima is the full-moon night of the month Kartik — sacred for bathing (snāna), lamp-offerings (deepotsava), and in Pushkar especially for honouring Brahma and the lake tirth. The fair grew as a seasonal market: herders brought livestock; traders brought cloth and metalwork; pilgrims brought devotion — all on the same sand.',
            'Locally the Mela is world-famous for camel trading and cultural programmes, but its religious core is parikrama of the lake and snāna at ghats whose names map onto Puranic memory. “Why” is both moksha-seeking and sangha — being in the crowd of believers at a cosmically marked moment.',
          ],
          origin: {
            whenStarted:
              'Layered: Pushkar as tirth is ancient in textual memory; the large cattle fair in its modern scale is a product of the 19th–20th century trade and tourism economy, even though smaller seasonal markets are much older.',
            attributedWho:
              'No single “starter”: Brahma–Savitri lore is attributed in sthala-purāṇa memory; fair organization today involves temple committees, district administration, and herding communities — a collective institution.',
          },
          scientificAndSocial: [
            'Astronomy: Kartik full moon is a precise celestial event — predictable years ahead; bathing at dawn links ritual time to light/temperature cycles.',
            'Season: Post-monsoon (roughly Oct–Nov) — water tables better, dust slightly settled, safer for camping animals and outdoor trade than peak summer.',
            'Social economy: Concentrates liquidity — buyers/sellers meet once; reduces search costs for pastoralists; tourism multipliers for Ajmer–Pushkar transport.',
            'Epidemiology note: Mass bathing has public-health dimensions — historically rivers carried risks; today municipal planning matters for water quality and crowd flow.',
          ],
        },
        {
          id: 'holi-phalgun',
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
        },
        {
          id: 'diwali-kartik',
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
        },
        {
          id: 'makar-sankranti',
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
        },
      ],
    },
    {
      id: 'chishti-urs-islamic',
      eyebrow: 'Chishtī · Mughal patronage',
      title: 'Urs, Islamic calendar & dargah life',
      intro: [
        'Ajmer’s global fame in this register is the Chishti silsila: Khwāja Muʿīnuddīn Ḥasan Chishtī (popularly Garīb Nawāz). The Mughal emperor Akbar walked to the dargah — not to “start” the Urs, but to magnify its prestige and to signal sovereign respect for the shrine. The Urs is a death-anniversary (Arabic: wedding with the Beloved) observed on 1–6 Rajab in the hijrī calendar — dates shift ~11 days earlier each solar year.',
      ],
      festivals: [
        {
          id: 'urs-ajmer',
          name: 'Urs of Khwāja Muʿīnuddīn Chishtī (Ajmer Sharif)',
          teaser: 'Rajab · qawwālī & pilgrimage',
          why: [
            'The Urs commemorates the passing of the shaikh into the unseen — in Sufi idiom, union (ʿurs = marriage) with the Divine. Pilgrims offer flowers, chaadar, and nazr; qawwālī frames longing and adab (etiquette) toward the saint as wasīla of mercy.',
            'Why people come from across South Asia: barakat (blessing-flow), vow fulfilment (mannat), and belonging to a silsila that transcends ethnicity — the shrine is a node in a network older than the nation-state.',
          ],
          origin: {
            whenStarted:
              'Annual death-anniversary observance begins soon after 1236 CE (death of the saint); the large medieval/Mughal-era public scale grows with empire, trade routes, and later colonial rail — the “national Urs” feeling is modern, the core ritual centuries old.',
            attributedWho:
              'The saint’s successors (khādims), Chishtī teaching line, and imperial patronage — especially remembered: Sulṭān Iltutmish’s burial respect, later Mughal emperors’ endowments; Akbar’s pilgrimage (1562) is iconic in memory though he did not invent the Urs.',
          },
          scientificAndSocial: [
            'Calendar science: Hijrī lunar months — Rajab’s moon sighting sets variability; organizers publish tables; phones now synchronize global pilgrims.',
            'Crowd physics: Millions in narrow lanes — fluid dynamics, crush-risk management, signal timing for gates — studied in disaster-risk literature for mass gatherings.',
            'Public health: Respiratory infections, food safety in stalls, water — municipal surveillance peaks during Urs.',
            'Economics: Remittance-like spending by pilgrims; informal employment for porters, florists, singers — classic festival economy.',
          ],
        },
        {
          id: 'eid-two',
          name: 'ʿĪd al-Fiṭr & ʿĪd al-Aḍḥā',
          teaser: 'Lunar Islamic feasts',
          why: [
            'ʿĪd al-Fiṭr breaks Ramaḍān fasting — gratitude, charity (zakāt al-fiṭr), communal prayer. ʿĪd al-Aḍḥā remembers Ibrāhīm’s trial and distributes meat after Ḥajj symbolism — sharing with neighbours regardless of faith is a strong social norm in many Indian towns.',
            'In Ajmer as in other cities, bazaars light up; families visit graves; the dargah precinct may see extra visitors though these are not “Ajmer-only” feasts — they colour the whole urban soundscape.',
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
          id: 'mughal-patronage-memory',
          name: 'Mughal patronage & imperial dargah visits (historical layer)',
          teaser: 'Not a separate “Mughal festival”',
          why: [
            'This entry explains memory: Mughal rulers did not create Islamic worship, but they funded langar-like kitchens, lamps, and rest-houses at major dargahs. Akbar’s walking pilgrimage to Ajmer is remembered because it linked political legitimacy with ethical kingship (ṣulḥ-i kull spirit) in court chronicles.',
            'Reason it matters in Ajmer: the Urs already existed; empire amplified scale, security of routes, and architectural layers around the shrine — today’s crowds inherit that geography.',
          ],
          origin: {
            whenStarted:
              'Patronage intensifies from the 16th century; each emperor’s farmans and local waqf deeds have dates in epigraphy — historians read these as fiscal science of empire.',
            attributedWho:
              'Akbar, Jahāngīr, and later figures in chronicles; local dargah administrators executed daily life — emperors were donors, not priests.',
          },
          scientificAndSocial: [
            'Hydraulics & architecture: Stepwells, tanks, and caravan routes near shrines — civil engineering for water in arid zones.',
            'Information: Imperial pilgrimage advertised safety of roads — early “soft power” for trade caravans.',
            'Historiography: Separating hagiography from revenue records is ongoing — numbers in chronicles are not always demographic data.',
          ],
        },
      ],
    },
    {
      id: 'civic-national',
      eyebrow: 'Civic · republic',
      title: 'National & state days in the city',
      intro: [
        'These follow the Gregorian calendar and the Constitution — observed in schools, offices, and the cantonment mood of the town. They are not “religious” but shape when traffic, closures, and flag ceremonies concentrate.',
      ],
      festivals: [
        {
          id: 'republic-day',
          name: 'Republic Day (26 January)',
          teaser: 'Constitution · parade grammar',
          why: [
            'Marks the date India’s Constitution came into effect (1950) — citizenship, rights, and duties as a democratic republic. Schools and colleges hold parades; the capital hosts the main military parade; locally, municipal grounds echo smaller versions.',
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
          id: 'independence-day',
          name: 'Independence Day (15 August)',
          teaser: '1947 · midnight sovereignty',
          why: [
            'Celebrates the end of colonial rule and the transfer of power — flag-hoisting at Red Fort is iconic; locally, schools and offices mirror the grammar of speeches and sweets.',
            'Emotional reason: memory of partition trauma alongside freedom — in Ajmer as elsewhere, families carry mixed stories; the day is both triumph and solemnity.',
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
          id: 'rajasthan-day',
          name: 'Rajasthan Day (30 March)',
          teaser: 'State formation memory',
          why: [
            'Commemorates the merger of princely states into Rajasthan in 1949 — for locals, it explains why Jaipur is capital today and how former thikanas became districts. Ajmer’s own British-era Ajmer–Merwara history folds into this narrative.',
            'Reason: state identity within the Union — language, crafts, and regional heroes celebrated in programmes.',
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
    },
    {
      id: 'local-live-events',
      eyebrow: 'Listings · live',
      title: 'Local events (today & upcoming)',
      intro: [
        'Concerts, comedy, sports screenings, workshops and other ticketed happenings — grouped by category. Nothing here is a fixed script: listings load when you open this block.',
        'BookMyShow, Insider, Townscript and similar apps do not ship a reliable unauthenticated browser API. Wire `VITE_LOCAL_EVENTS_URL` to your own aggregator (official partner APIs or scraped feeds you host) for production; until then the app shows rotating demo rows so you can test the UI.',
      ],
      festivals: [],
      liveEvents: true,
    },
  ],
}

const bySlug: Record<string, CityFestivalsBundle> = {
  ajmer: ajmerFestivals,
}

export function getCityFestivalsBySlug(slug: string): CityFestivalsBundle | undefined {
  return bySlug[slug]
}
