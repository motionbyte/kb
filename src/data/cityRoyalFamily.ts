/**
 * Erstwhile princely houses + contemporary cultural heads (post-1971: no ruling powers).
 * Succession lines are condensed from common public histories — verify details in palace / museum sources.
 */

import { EXTRA_ROYAL_BUNDLES } from './cityRoyalFamilyExtra'

export type RoyalTimelineEntry = {
  period: string
  headline: string
  detail: string
}

export type RoyalFamilyNode = {
  id: string
  name: string
  note?: string
  /** Optional horizontal “A → B → C” strip (readable on small screens via wrap). */
  chain?: string[]
  children?: RoyalFamilyNode[]
}

/** One named step in the main ruling / titular line (not a legal office today). */
export type SuccessionEntry = {
  name: string
  era?: string
  note?: string
}

export type CurrentHeadOfHouse = {
  /** e.g. "Head of the former ruling house (cultural / courtesy)" */
  roleLabel: string
  name: string
  note?: string
}

export type CityRoyalFamilyBundle = {
  slug: string
  houseLabel: string
  disclaimer: string
  intro: string
  /** Main line from an early named ruler through integration / titular era — not every collateral branch. */
  successionLine?: SuccessionEntry[]
  /** Present-day public-facing head of the house (ceremonial / heritage; not governance). */
  currentHead?: CurrentHeadOfHouse
  timeline: RoyalTimelineEntry[]
  familyTree: RoyalFamilyNode
}

const POST_1971 =
  'Privy purses and official princely titles were abolished in 1971 (26th Amendment era). ' +
  'Descendants may still use courtesy styles culturally — not as legal rulers.'

function genericBundle(cityName: string, slug: string): CityRoyalFamilyBundle {
  return {
    slug,
    houseLabel: `${cityName} — regional history`,
    disclaimer: POST_1971,
    intro: `${cityName} sits in a landscape of former thikanas, jagirs, and zamindari estates. ` +
      `A single “royal house” is not mapped here yet — use local fort and palace museums for verified genealogies.`,
    successionLine: [
      {
        name: 'Local thikana / jagirdar lines',
        era: 'varies',
        note: 'Many families; not one city-wide tree in this dataset.',
      },
    ],
    timeline: [
      {
        period: 'Medieval–early modern',
        headline: 'Fort-based polities',
        detail: 'Local lineages rose around trade routes, forts, and temple networks.',
      },
      {
        period: 'Colonial era',
        headline: 'Treaty order',
        detail: 'British paramountcy standardized boundaries; gazetteers document elite families.',
      },
      {
        period: '1947–1971',
        headline: 'Integration',
        detail: 'Princely states merged into Rajasthan; constitutional democracy replaced rulership.',
      },
      {
        period: '1971 onward',
        headline: 'Cultural continuity',
        detail: 'Heritage trusts, festivals, and museums preserve memory — without political sovereignty.',
      },
    ],
    familyTree: {
      id: 'generic-root',
      name: 'Place-specific lineage',
      note: 'Add verified names in data layer when sources are confirmed',
      children: [
        { id: 'g1', name: 'Fort & palace archives', note: 'primary verification' },
        { id: 'g2', name: 'District gazetteers & museums', note: 'secondary context' },
      ],
    },
  }
}

const BUNDLES: Record<string, CityRoyalFamilyBundle> = {
  jaipur: {
    slug: 'jaipur',
    houseLabel: 'Kachhwaha / Jaipur (Amber–Jaipur)',
    disclaimer: POST_1971,
    intro:
      'Jaipur is tied to the Kachhwaha house that ruled from Amber and planned the “Pink City”. ' +
      'Below is the main maharaja line from the Jaipur-era founder through the last ruling maharaja, then the present head of the house in a heritage role — not government office.',
    successionLine: [
      {
        name: 'Raja Bharmal',
        era: 'c. 1558–1574',
        note: 'Key early Kachhwaha ruler at Amber; Mughal-alliance era (many earlier chiefs omitted here).',
      },
      { name: 'Sawai Jai Singh II', era: '1699–1743', note: 'Jaipur city founded 1727; astronomy & planned capital.' },
      { name: 'Sawai Ishwari Singh', era: '1743–1750' },
      { name: 'Sawai Madho Singh I', era: '1751–1768' },
      { name: 'Sawai Prithvi Singh II', era: '1768–1778' },
      { name: 'Sawai Pratap Singh', era: '1778–1803' },
      { name: 'Sawai Jagat Singh II', era: '1803–1818' },
      { name: 'Sawai Jai Singh III', era: '1819–1835' },
      { name: 'Sawai Ram Singh II', era: '1835–1880' },
      { name: 'Sawai Madho Singh II', era: '1880–1922' },
      {
        name: 'Sawai Man Singh II',
        era: '1922–1948 (ruler); d. 1970',
        note: 'Last ruling Maharaja of Jaipur; accession as minor; post-1947 accession to India.',
      },
      {
        name: 'Sawai Bhawani Singh',
        era: 'titular head after integration; d. 2011',
        note: 'Grandfather of present head; cultural leadership & City Palace institutions.',
      },
    ],
    currentHead: {
      roleLabel: 'Head of the former Jaipur house (cultural / titular use of “Maharaja” in public life)',
      name: 'Sawai Padmanabh Singh',
      note: 'Widely described as present head of the Kachhwaha Jaipur line in heritage and media; verify at City Palace–affiliated sources.',
    },
    timeline: [
      {
        period: '1727',
        headline: 'Jaipur city foundation',
        detail: 'Sawai Jai Singh II shifts court culture toward a planned capital (grid, astronomy, craft economies).',
      },
      {
        period: '19th c.',
        headline: 'Treaty era under British paramountcy',
        detail: 'Administrative modernization: roads, schools, and negotiated sovereignty within empire.',
      },
      {
        period: '1949',
        headline: 'Greater Rajasthan integration',
        detail: 'Princely states merge into the Indian Union; later democratic statehood.',
      },
      {
        period: '1971 onward',
        headline: 'Ceremonial leadership + heritage',
        detail: 'Titles become cultural; City Palace trusts and tourism anchor public memory.',
      },
    ],
    familyTree: {
      id: 'kachhwaha-root',
      name: 'Kachhwaha main line (Jaipur)',
      note: 'Collateral branches of the clan exist across Rajputana',
      children: [
        {
          id: 'jai-ii',
          name: 'Sawai Jai Singh II',
          note: 'Jaipur founder',
          children: [
            {
              id: 'maharaja-era',
              name: '18th–19th c. succession',
              note: 'Treaty-era maharajas',
              chain: [
                'Ishwari',
                'Madho I',
                'Prithvi',
                'Pratap',
                'Jagat',
                'Jai III',
                'Ram II',
                'Madho II',
              ],
              children: [
                {
                  id: 'man-bhawani',
                  name: 'Integration & titular era',
                  note: 'last ruling → heritage leadership',
                  chain: ['Man Singh II', 'Bhawani Singh'],
                  children: [
                    {
                      id: 'padmanabh',
                      name: 'Padmanabh Singh',
                      note: 'present head of house (cultural)',
                    },
                  ],
                },
              ],
            },
          ],
        },
      ],
    },
  },
  udaipur: {
    slug: 'udaipur',
    houseLabel: 'Sisodia — Maharana of Mewar',
    disclaimer: POST_1971,
    intro:
      'Udaipur is the lake capital of the Sisodia house of Mewar. The list below highlights major Maharanas across eras; many reigns and relatives are omitted for space. Head-of-house wording today is ceremonial — not a public office.',
    successionLine: [
      { name: 'Maharana Udai Singh II', era: '1559–1572', note: 'Udaipur as principal seat after Chittor pressures.' },
      { name: 'Maharana Pratap Singh I', era: '1572–1597', note: 'Haldighati / resistance memory; iconic Sisodia ruler.' },
      {
        name: 'Later Maharanas (16th–19th c.)',
        era: 'many reigns',
        note:
          'Amar Singh I, Karan Singh II, Raj Singh, Jagat Singh II, Bhim Singh, Jawan Singh, Swarup Singh, Sajjan Singh, and others — full regnal tables in Mewar histories and palace materials.',
      },
      { name: 'Maharana Fateh Singh', era: '1884–1930' },
      { name: 'Maharana Bhupal Singh', era: '1930–1955', note: 'Integration era.' },
      { name: 'Maharana Bhagwat Singh Mewar', era: '1955–1984' },
      {
        name: 'Maharana Arvind Singh Mewar',
        era: '1984–2025',
        note: 'Often described as 76th custodian in public materials; d. March 2025.',
      },
    ],
    currentHead: {
      roleLabel: 'Ceremonial custodian of the House of Mewar (not a constitutional role)',
      name: 'Lakshyaraj Singh Mewar',
      note:
        'Media reported a April 2025 investiture at City Palace as 77th custodian. Other family members have publicly disputed succession — this app does not resolve private claims; check palace and reputable news sources.',
    },
    timeline: [
      {
        period: '1559 onward',
        headline: 'Udaipur as seat',
        detail: 'Lake Pichola and palace complexes anchor court culture after Chittor pressures.',
      },
      {
        period: '16th–17th c.',
        headline: 'Mughal–Rajput negotiation',
        detail: 'Alliances and conflicts reshape sovereignty; fort diplomacy intensifies.',
      },
      {
        period: '1818–1947',
        headline: 'British paramountcy',
        detail: 'Treaty order; internal administration continues with colonial oversight.',
      },
      {
        period: '1948–present',
        headline: 'Union + democracy',
        detail: 'Integration into Rajasthan; heritage tourism globalizes Mewar memory.',
      },
    ],
    familyTree: {
      id: 'sisodia',
      name: 'Sisodia — Mewar (simplified)',
      note: 'Chittor and Udaipur phases; many cadet lines',
      children: [
        {
          id: 'udai-pratap',
          name: 'Lake capital & resistance memory',
          note: 'Udaipur seat → iconic Maharana era',
          chain: ['Udai Singh II', 'Pratap Singh I'],
          children: [
            {
              id: 'later-maharana',
              name: '17th–19th c. Maharanas',
              note: 'many reigns between Pratap and Fateh Singh',
              children: [
                {
                  id: 'modern-mewar',
                  name: 'Modern integration & heritage',
                  note: 'City Palace institutions',
                  chain: ['Bhupal Singh', 'Bhagwat Singh', 'Arvind Singh'],
                  children: [
                    {
                      id: 'mewar-now',
                      name: 'Lakshyaraj Singh Mewar',
                      note: 'reported 2025 custodian — disputed by some relatives',
                    },
                  ],
                },
              ],
            },
          ],
        },
      ],
    },
  },
  jodhpur: {
    slug: 'jodhpur',
    houseLabel: 'Rathore — Marwar (Jodhpur)',
    disclaimer: POST_1971,
    intro:
      'Jodhpur is the Marwar capital of the Rathore dynasty. The succession below is the main Jodhpur line in outline from the fort’s founder to the widely known present head of the house.',
    successionLine: [
      { name: 'Rao Jodha', era: '1459–1489', note: 'Founder of Jodhpur; Mehrangarh.' },
      { name: 'Rao Satal', era: '1489–1492', note: 'Short reign; succeeded by Rao Suja.' },
      { name: 'Rao Suja', era: '1491–1515' },
      { name: 'Rao Ganga', era: '1515–1532' },
      { name: 'Rao Maldeo', era: '1532–1562', note: 'Major expansion era.' },
      { name: 'Rao Chandrasen', era: '1562–1581' },
      { name: 'Raja Udai Singh', era: '1581–1593', note: 'Mughal suzerainty context.' },
      { name: 'Raja Sur Singh', era: '1593–1619' },
      { name: 'Raja Gaj Singh I', era: '1619–1638' },
      { name: 'Maharaja Jaswant Singh', era: '1638–1678' },
      { name: 'Maharaja Ajit Singh', era: '1679–1724' },
      { name: 'Maharaja Abhai Singh', era: '1724–1749' },
      { name: 'Maharaja Ram Singh', era: '1749–1751' },
      { name: 'Maharaja Vijay Singh', era: '1751–1753' },
      { name: 'Maharaja Bhim Singh', era: '1753–1793' },
      { name: 'Maharaja Man Singh', era: '1793–1843' },
      { name: 'Maharaja Takhat Singh', era: '1843–1873' },
      { name: 'Maharaja Jaswant Singh II', era: '1873–1895' },
      { name: 'Maharaja Sardar Singh', era: '1895–1911' },
      { name: 'Maharaja Sumer Singh', era: '1911–1918' },
      { name: 'Maharaja Umaid Singh', era: '1918–1947' },
      { name: 'Maharaja Hanwant Singh', era: '1947–1952', note: 'Died 1952; last ruling-style context pre full integration.' },
    ],
    currentHead: {
      roleLabel: 'Head of the house of Marwar-Jodhpur (cultural / heritage)',
      name: 'Maharaja Gaj Singh II',
      note: 'Widely known for Mehrangarh Trust and palace museums; heir often named in profiles as Shivraj Singh — verify in family sources.',
    },
    timeline: [
      {
        period: '1459 onward',
        headline: 'Jodhpur fort-city',
        detail: 'Mehrangarh anchors a desert polity with expanding trade links.',
      },
      {
        period: '17th–18th c.',
        headline: 'Mughal–Maratha pressures',
        detail: 'Revenue competition and shifting alliances reshape borders.',
      },
      {
        period: 'Colonial era',
        headline: 'Agency mapping',
        detail: 'Rajputana gazetteers document estates; railways transform mobility.',
      },
      {
        period: '1947+',
        headline: 'Democratic Rajasthan',
        detail: 'Former ruling families transition to civic and heritage leadership.',
      },
    ],
    familyTree: {
      id: 'rathore-marwar',
      name: 'Rathore — Jodhpur main line',
      note: 'Other Rathore branches (Bikaner, etc.) are separate',
      children: [
        {
          id: 'jodha-maldeo',
          name: 'Desert fort & early Marwar',
          note: 'Mehrangarh → expansion age',
          chain: ['Rao Jodha', 'Rao Maldeo'],
          children: [
            {
              id: 'maharaja-era',
              name: 'Maharajas of Jodhpur',
              note: 'Jaswant Singh era → Umaid / Hanwant Singh',
              chain: ['Jaswant I', 'Ajit', 'Abhai', 'Takhat', 'Jaswant II', 'Umaid', 'Hanwant'],
              children: [
                {
                  id: 'gaj-singh',
                  name: 'Gaj Singh II',
                  note: 'present head of house (cultural)',
                },
              ],
            },
          ],
        },
      ],
    },
  },
  bikaner: {
    slug: 'bikaner',
    houseLabel: 'Rathore — Bikaner',
    disclaimer: POST_1971,
    intro:
      'Bikaner was founded by a Rathore cadet line in the Thar. The main maharajas are listed in outline; collateral lines and post-1988 headship have been discussed in media as disputed — verify locally.',
    successionLine: [
      { name: 'Rao Bika', era: '1488–1504', note: 'Founder of Bikaner.' },
      { name: 'Rao Narayan Singh', era: '1504–1525' },
      { name: 'Rao Lunakaran', era: '1525–1562' },
      { name: 'Rai Kalyan Mal', era: '1562–1571' },
      { name: 'Rai Rai Singh', era: '1571–1612' },
      { name: 'Rai Dalpat Singh', era: '1612–1614' },
      { name: 'Rai Sur Singh', era: '1614–1631' },
      { name: 'Rai Karan Singh', era: '1631–1639' },
      { name: 'Rai Jagat Singh', era: '1639–1641' },
      { name: 'Rai Pugal Singh', era: '1641–1649' },
      { name: 'Rai Amar Singh', era: '1649–1689' },
      { name: 'Maharaja Anup Singh', era: '1689–1698' },
      { name: 'Maharaja Sarup Singh', era: '1698–1706' },
      { name: 'Maharaja Sujan Singh', era: '1706–1735' },
      { name: 'Maharaja Zorawar Singh', era: '1735–1746' },
      { name: 'Maharaja Gaj Singh', era: '1746–1787' },
      { name: 'Maharaja Raj Singh', era: '1787–1810' },
      { name: 'Maharaja Surat Singh', era: '1810–1823' },
      { name: 'Maharaja Ratan Singh', era: '1823–1851' },
      { name: 'Maharaja Sardar Singh', era: '1851–1872' },
      { name: 'Maharaja Dungar Singh', era: '1872–1887' },
      { name: 'Maharaja Ganga Singh', era: '1887–1943' },
      { name: 'Maharaja Sadul Singh', era: '1943–1950' },
      {
        name: 'Maharaja Karni Singh',
        era: '1950–1971 (titles); d. 1988',
        note: 'Last to hold maharaja title in princely-era sense; Olympic shooter, diplomat.',
      },
    ],
    currentHead: {
      roleLabel: 'Head of the Bikaner house (reporting varies — not a legal office)',
      name: 'See clan / family sources',
      note:
        'Narendra Singh (son of Karni Singh) was often named before his death in 2003; genealogical websites mention later arrangements. Indian media have also reported intra-family disputes — confirm with Bikaner House / family statements.',
    },
    timeline: [
      {
        period: 'Late medieval',
        headline: 'Desert state formation',
        detail: 'Fort-based control of routes; agrarian islands in arid ecology.',
      },
      {
        period: 'Colonial',
        headline: 'Imperial mapping',
        detail: 'Gazetteers and irrigation experiments change economic geography.',
      },
      { period: '1947+', headline: 'Integration', detail: 'Democratic institutions replace rulership.' },
    ],
    familyTree: {
      id: 'bikaner-rathore',
      name: 'Rathore — Bikaner',
      note: 'Cadet branch from Jodhpur line',
      children: [
        {
          id: 'bika-line',
          name: 'Bikaner maharaja sequence (outline)',
          note: 'desert trade & Ganga Singh–era modernization',
          chain: ['Rao Bika', 'Rai Singh', 'Anup Singh', 'Ganga Singh', 'Sadul Singh', 'Karni Singh'],
          children: [{ id: 'bik-today', name: 'Present generation', note: 'verify headship in sources' }],
        },
      ],
    },
  },
  jaisalmer: {
    slug: 'jaisalmer',
    houseLabel: 'Bhati — Jaisalmer',
    disclaimer: POST_1971,
    intro:
      'Jaisalmer’s Bhati rulers used the title Rawal / later Maharawal. Below: founder through recent generations; many medieval Rawals are compressed.',
    successionLine: [
      { name: 'Rawal Jaisal', era: '12th c.', note: 'Bhati eponymous founder of the fort-capital.' },
      {
        name: 'Bhati Rawals & Maharawals',
        era: 'medieval–early 20th c.',
        note: 'Dozens of reigns; titles shift Rawal / Maharawal — see regnal lists in fort and gazetteers.',
      },
      { name: 'Maharawal Jawahir Singh', era: 'to 1949', note: 'Last ruler of princely Jaisalmer.' },
      { name: 'Maharawal Girdhar Singh', era: '1949', note: 'Very brief reign in accession year.' },
      { name: 'Maharawal Brijraj Singh', era: '1949–2020', note: 'Long post-integration cultural leadership.' },
    ],
    currentHead: {
      roleLabel: 'Head of the Bhati house of Jaisalmer (ceremonial Maharawal in public reporting)',
      name: 'Chaitanya Raj Singh',
      note: 'Widely reported as 44th Maharawal in a 2021 investiture after Brijraj Singh — courtesy title only.',
    },
    timeline: [
      {
        period: 'Medieval',
        headline: 'Fortified desert capital',
        detail: 'Trade and tribute systems across sand routes.',
      },
      { period: 'Colonial', headline: 'Treaty order', detail: 'British maps stabilize boundaries.' },
      { period: 'Modern', headline: 'Tourism economy', detail: 'Heritage becomes the main public interface.' },
    ],
    familyTree: {
      id: 'bhati-jsl',
      name: 'Bhati — Jaisalmer',
      note: 'Frontier kingdom; many Rawals in full regnal lists',
      children: [
        {
          id: 'jaisal',
          name: 'Rawal Jaisal',
          note: 'eponymous founder',
          children: [
            {
              id: 'modern',
              name: 'Late 20th c. → today',
              note: 'public-facing line in media',
              chain: ['Brijraj Singh', 'Chaitanya Raj Singh'],
            },
          ],
        },
      ],
    },
  },
  kota: {
    slug: 'kota',
    houseLabel: 'Kota — Hadoti (Hada Chauhan)',
    disclaimer: POST_1971,
    intro:
      'Kota broke from Bundi under Hada rulers; the list below traces main maharaos in outline. Verify exact regnal years in Hadoti histories.',
    successionLine: [
      { name: 'Rao Madho Singh', era: 'from 1631', note: 'Kota separates from Bundi in standard accounts.' },
      { name: 'Rao Mukund Singh / early maharaos', era: '17th c.', note: 'Includes Jagat Singh and episodes of Bundi union — timelines vary.' },
      { name: 'Maharao Durjan Sal', era: '1723–1756', note: 'Major 18th-century reign.' },
      { name: 'Maharao Guman Singh', era: '1764–1771' },
      { name: 'Maharao Umed Singh I', era: '1771–1819' },
      { name: 'Maharao Kishor Singh II', era: '1819–1828' },
      { name: 'Maharao Ram Singh II', era: '1828–1866' },
      { name: 'Maharao Shatrusal Singh II', era: '1866–1889' },
      { name: 'Maharao Umed Singh II', era: '1889–1940' },
      { name: 'Maharao Bhim Singh II', era: '1940–1948', note: 'Last ruler; Kota merges into Rajasthan.' },
    ],
    currentHead: {
      roleLabel: 'Head of the former Kota house (if named in local sources)',
      name: 'Verify with Kota Garh / family',
      note: 'Succession after 1948 is often low-profile in national media; check palace trusts and local histories.',
    },
    timeline: [
      { period: '17th–18th c.', headline: 'Regional statecraft', detail: 'Court, forts, and riverine economy.' },
      { period: 'Colonial', headline: 'Agency era', detail: 'Maps and schools modernize unevenly.' },
      { period: '1947+', headline: 'Democracy', detail: 'Integration into Rajasthan.' },
    ],
    familyTree: {
      id: 'kota-hada',
      name: 'Hada — Kota',
      note: 'Related to Bundi branch',
      children: [
        {
          id: 'madho',
          name: 'Kota maharao line (outline)',
          note: 'Chambal court; Garh palace',
          chain: ['Madho Singh', 'Durjan Sal', 'Umed I', 'Ram II', 'Umed II', 'Bhim II'],
          children: [{ id: 'kota-today', name: 'Post-1948 generations', note: 'verify locally' }],
        },
      ],
    },
  },
  alwar: {
    slug: 'alwar',
    houseLabel: 'Alwar — Naruka / princely house',
    disclaimer: POST_1971,
    intro:
      'Alwar’s rulers (Naruka Rajputs in standard accounts) took the title Maharaja. Below is a broad outline; regnal lists differ slightly by source.',
    successionLine: [
      { name: 'Maharaja Pratap Singh', era: '1775–1802', note: 'Often treated as founder of modern Alwar state.' },
      { name: 'Maharao Bakhtawar Singh', era: '1802–1815' },
      { name: 'Maharao Viney Singh', era: '1815–1835' },
      { name: 'Maharao Bane Singh', era: '1835–1857' },
      { name: 'Maharaja Sheodan Singh', era: '1857–1874' },
      { name: 'Maharaja Mangal Singh', era: '1874–1892' },
      { name: 'Maharaja Jai Singh Pratap Singh', era: '1892–1937' },
      { name: 'Maharaja Tej Singh', era: '1937–1948', note: 'Last ruler; accession to India.' },
    ],
    currentHead: {
      roleLabel: 'Descendants of the house (cultural)',
      name: 'Verify with Alwar palace / district sources',
      note: 'National profiles less consistent than Jaipur–Udaipur; use local heritage institutions.',
    },
    timeline: [
      { period: '18th–19th c.', headline: 'State consolidation', detail: 'Fort politics and revenue maps.' },
      { period: '20th c.', headline: 'Modern institutions', detail: 'Schools, railways, civic projects.' },
      { period: '1947+', headline: 'Integration', detail: 'Democratic Rajasthan.' },
    ],
    familyTree: {
      id: 'alwar-line',
      name: 'Naruka — Alwar (simplified)',
      children: [
        {
          id: 'pratap-tej',
          name: 'Naruka maharaja line (outline)',
          note: 'many reigns omitted',
          chain: ['Pratap Singh', 'Mangal Singh', 'Jai Singh Pratap', 'Tej Singh'],
          children: [{ id: 'alwar-today', name: 'Contemporary family', note: 'verify locally' }],
        },
      ],
    },
  },
  bharatpur: {
    slug: 'bharatpur',
    houseLabel: 'Bharatpur — Jat rulers',
    disclaimer: POST_1971,
    intro:
      'Bharatpur was ruled by Sinsinwar Jat maharajas, famous for Lohagarh and 18th-century military-fiscal power.',
    successionLine: [
      { name: 'Maharaja Badan Singh', era: '1722–1756', note: 'Consolidation of Bharatpur power.' },
      { name: 'Maharaja Suraj Mal', era: '1756–1763', note: 'Major expansion; iconic ruler.' },
      { name: 'Maharaja Jawahar Singh', era: '1763–1768' },
      { name: 'Maharaja Ratan Singh', era: '1768–1769' },
      { name: 'Maharaja Kehri Singh', era: '1769–1771' },
      { name: 'Maharaja Ranjit Singh', era: '1771–1805' },
      { name: 'Maharaja Randhir Singh', era: '1805–1825' },
      { name: 'Maharaja Baldeo Singh', era: '1825–1826' },
      { name: 'Maharaja Balwant Singh', era: '1826–1853' },
      { name: 'Maharaja Jashwant Singh', era: '1853–1893' },
      { name: 'Maharaja Ram Singh', era: '1893–1900' },
      { name: 'Maharaja Kishan Singh', era: '1900–1929' },
      { name: 'Maharaja Brijendra Singh', era: '1929–1948', note: 'Last ruling maharaja; merger with Matsya Union.' },
    ],
    currentHead: {
      roleLabel: 'Head of the house (often discussed in local / political news)',
      name: 'Verify with Bharatpur fort & family sources',
      note: 'Prominent descendants appear in public life; we do not list a single contested name here.',
    },
    timeline: [
      { period: '18th c.', headline: 'Regional power', detail: 'Military-fiscal state in a competitive plain.' },
      { period: 'Colonial', headline: 'Treaty mapping', detail: 'British gazetteers document estates.' },
      { period: '1947+', headline: 'Democracy', detail: 'Integration into Rajasthan.' },
    ],
    familyTree: {
      id: 'bharatpur-jat',
      name: 'Sinsinwar Jats — Bharatpur',
      children: [
        {
          id: 'badan-suraj',
          name: 'Sinsinwar maharaja line (outline)',
          note: 'Lohagarh-era expansion → union',
          chain: ['Badan Singh', 'Suraj Mal', 'Jawahar Singh', 'Ranjit Singh', 'Brijendra Singh'],
          children: [{ id: 'bharat-today', name: 'Contemporary descendants', note: 'verify locally' }],
        },
      ],
    },
  },
}

export function getCityRoyalFamilyBundle(slug: string, cityName: string): CityRoyalFamilyBundle {
  return BUNDLES[slug] ?? EXTRA_ROYAL_BUNDLES[slug] ?? genericBundle(cityName, slug)
}
