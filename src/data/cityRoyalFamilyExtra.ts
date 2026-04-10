import type { CityRoyalFamilyBundle } from './cityRoyalFamily'

const POST_1971 =
  'Privy purses and official princely titles were abolished in 1971 (26th Amendment era). ' +
  'Descendants may still use courtesy styles culturally — not as legal rulers.'

/** Cities not covered in the main `BUNDLES` map — princely / thikana context where applicable. */
export const EXTRA_ROYAL_BUNDLES: Record<string, CityRoyalFamilyBundle> = {
  chittorgarh: {
    slug: 'chittorgarh',
    houseLabel: 'Sisodia — Mewar (historic seat at Chittor)',
    disclaimer: POST_1971,
    intro:
      'Chittorgarh Fort was the great capital of Mewar before the court shifted toward Udaipur. ' +
      'The **same Sisodia house** you read about in Udaipur is tied here through memory, siege narratives, and tower monuments — not a separate “Chittor royal family”.',
    successionLine: [
      { name: 'Early Mewar rulers at Chittor', era: 'medieval', note: 'Bappa Rawal lore; Guhilot/Sisodia identity forms around Chittor.' },
      { name: 'Rana Hammir / Rana Kumbha era', era: '14th–15th c.', note: 'Tower-building; Mewar prestige peaks at Chittor.' },
      { name: 'Rana Sanga (Sangram Singh)', era: 'c. 1509–1528', note: 'Pan-Indian Rajput coalition memory.' },
      { name: 'Maharana Udai Singh II', era: 'mid-16th c.', note: 'After Chittor pressures, capital moves toward Udaipur — Chittor remains symbolic.' },
      { name: 'Maharana Pratap Singh I', era: '1572–1597', note: 'Haldighati / Gogunda arc; Chittor in lore even when Udaipur is seat.' },
      {
        name: 'Later Maharanas (Udaipur seat)',
        era: '17th c. onward',
        note: 'Regnal line continues from Udaipur; Chittor is heritage landscape of that same house.',
      },
    ],
    currentHead: {
      roleLabel: 'Ceremonial custodian of the House of Mewar (same lineage as Udaipur)',
      name: 'Lakshyaraj Singh Mewar',
      note:
        'Chittor has no separate “ruler” today — follow House of Mewar / City Palace Udaipur materials; succession reporting in 2025 included family disputes.',
    },
    timeline: [
      { period: 'Medieval', headline: 'Fort capital', detail: 'Chittor as seat of Sisodia power and fort-building.' },
      { period: '16th c.', headline: 'Siege & shift', detail: 'Court culture strengthens Udaipur; Chittor stays sacred in memory.' },
      { period: '1818–1947', headline: 'British Raj', detail: 'Princely Mewar under treaty order; fort as monument.' },
      { period: '1947+', headline: 'Democracy & tourism', detail: 'ASI-protected site; heritage economy — not rulership.' },
    ],
    familyTree: {
      id: 'chittor-mewar',
      name: 'Sisodia — Chittor → Udaipur arc',
      note: 'One house; two iconic capitals in story',
      children: [
        {
          id: 'chittor-era',
          name: 'Chittor as fort capital',
          note: 'Kumbha, Sanga, Udai II…',
          chain: ['Rana Kumbha', 'Rana Sanga', 'Udai Singh II'],
          children: [
            {
              id: 'pratap-line',
              name: 'Pratap → later Maharanas',
              note: 'Resistance memory → Udaipur court',
              chain: ['Pratap Singh I', '…', 'Fateh Singh', 'Bhupal Singh'],
              children: [
                {
                  id: 'today-mewar',
                  name: 'House of Mewar today',
                  note: 'heritage custodianship',
                  chain: ['Bhagwat Singh', 'Arvind Singh', 'Lakshyaraj Singh'],
                },
              ],
            },
          ],
        },
      ],
    },
  },

  bundi: {
    slug: 'bundi',
    houseLabel: 'Hada Chauhan — Bundi (Hadoti)',
    disclaimer: POST_1971,
    intro:
      'Bundi was the senior Hadoti capital of the Hada Chauhans before Kota’s line gained prominence. ' +
      'Taragarh, stepwells, and palace museums anchor its princely-era story.',
    successionLine: [
      { name: 'Rao Deva (Deva Singh)', era: '14th c.', note: 'Hada chief; Bundi state formation in standard accounts.' },
      { name: 'Rao Bairaj', era: 'late 14th c.' },
      { name: 'Rao Narayan Das', era: 'early 15th c.' },
      { name: 'Rao Surjan Singh', era: 'late 16th c.', note: 'Often linked to Mughal alliance context; Chittor pacts lore.' },
      { name: 'Later Hada Maharaos / Maharajas', era: '17th–19th c.', note: 'Full regnal lists in Bundi palace & gazetteers.' },
      { name: 'Maharao Raghubir Singh', era: '1889–1929' },
      { name: 'Maharao Ishwari Singh', era: '1929–1948', note: 'Accession to India; titles later ceremonial only.' },
    ],
    currentHead: {
      roleLabel: 'Head of the former Bundi house (verify locally)',
      name: 'Descendants of the Hada line',
      note: 'Use Bundi palace trusts and district heritage cells for named contemporary figures.',
    },
    timeline: [
      { period: 'Medieval–early modern', headline: 'Hadoti court', detail: 'Fort, baoris, and trade toward Malwa.' },
      { period: 'Colonial', headline: 'Treaty order', detail: 'Rajputana administration; roads and schools.' },
      { period: '1947+', headline: 'Integration', detail: 'Part of Rajasthan; democratic institutions.' },
    ],
    familyTree: {
      id: 'bundi-hada',
      name: 'Hada Chauhan — Bundi',
      note: 'Kota broke later as separate Hadoti state',
      children: [
        {
          id: 'deva-surjan',
          name: 'Early Hada line',
          note: 'Deva → … → Surjan',
          chain: ['Rao Deva', 'Rao Surjan Singh', '…', 'Ishwari Singh'],
          children: [{ id: 'bundi-today', name: 'Post-1948 family', note: 'cultural / trust roles' }],
        },
      ],
    },
  },

  karauli: {
    slug: 'karauli',
    houseLabel: 'Jadaun (Yaduvanshi) — Karauli',
    disclaimer: POST_1971,
    intro:
      'Karauli was ruled by a Yaduvanshi (Jadaun) dynasty claiming lunar-lineage traditions. ' +
      'City Palace and Kaila Devi pilgrimages tie civic memory to that house.',
    successionLine: [
      { name: 'Maharaja Vijay Pal', era: 'late 18th c.', note: 'Modern state consolidation in regional histories.' },
      { name: 'Maharaja Harbaksh Pal', era: 'early 19th c.' },
      { name: 'Later Maharajas', era: '19th–20th c.', note: 'See Karauli palace chronologies for exact names/years.' },
      {
        name: 'Maharaja Ganesh Pal / post-integration',
        era: '20th c.',
        note: 'Last ruling context before merger into Rajasthan — verify regnal spellings in local sources.',
      },
    ],
    currentHead: {
      roleLabel: 'Descendants of the Karauli house (cultural)',
      name: 'Verify with Karauli City Palace / family',
      note: 'National media coverage thinner than Jaipur–Udaipur; prefer palace-affiliated bios.',
    },
    timeline: [
      { period: '18th–19th c.', headline: 'Hill-state diplomacy', detail: 'Between Jaipur, Gwalior, and British maps.' },
      { period: '1947+', headline: 'Democracy', detail: 'Integration; titles become cultural.' },
    ],
    familyTree: {
      id: 'karauli-yadu',
      name: 'Jadaun — Karauli (outline)',
      note: 'Yaduvanshi identity; local museums',
      children: [
        {
          id: 'kp-line',
          name: 'Maharaja line (simplified)',
          chain: ['Vijay Pal', '…', 'Ganesh Pal era'],
          children: [{ id: 'kr-today', name: 'Contemporary family', note: 'verify locally' }],
        },
      ],
    },
  },

  dholpur: {
    slug: 'dholpur',
    houseLabel: 'Bamraulia — Dholpur',
    disclaimer: POST_1971,
    intro:
      'Dholpur’s rulers belonged to the Bamraulia lineage (widely described as a Jat-led house in colonial gazetteers). ' +
      'Red sandstone kunds and Chambal-edge forts frame their princely-era story.',
    successionLine: [
      { name: 'Kirat Singh / early Bamraulia chiefs', era: '18th c.', note: 'Rise in Yamuna–Chambal country.' },
      { name: 'Maharaja Kirat Singh (later reigns)', era: 'varies', note: 'Confirm spellings in Dholpur palace sources.' },
      { name: 'Maharaja Nihal Singh', era: '19th c.' },
      { name: 'Maharaja Udaybhan Singh', era: 'early 20th c.' },
      { name: 'Maharaja Udaybhan Singh / last ruler context', era: '1947', note: 'Merger with Indian Union — verify exact last maharaja name in district history.' },
    ],
    currentHead: {
      roleLabel: 'Head of the former Dholpur house (verify)',
      name: 'See Dholpur fort & family sources',
      note: 'Use verified regnal lists; some names recur across generations in local records.',
    },
    timeline: [
      { period: '18th–19th c.', headline: 'Border statecraft', detail: 'Between Mughal successor zones and British maps.' },
      { period: '1947+', headline: 'Integration', detail: 'Democratic Rajasthan; heritage memory only.' },
    ],
    familyTree: {
      id: 'dholpur-bam',
      name: 'Bamraulia — Dholpur',
      children: [
        {
          id: 'dhol-line',
          name: 'Maharaja sequence (outline)',
          chain: ['Kirat Singh', 'Nihal Singh', 'Udaybhan Singh'],
          children: [{ id: 'dhol-today', name: 'Present generation', note: 'verify' }],
        },
      ],
    },
  },

  dungarpur: {
    slug: 'dungarpur',
    houseLabel: 'Sisodia (Pur Bansiya) — Dungarpur',
    disclaimer: POST_1971,
    intro:
      'Dungarpur was ruled by a Sisodia cadet branch (“Banswara–Dungarpur” belt) distinct from the main Udaipur line but sharing Guhilot/Sisodia memory. ' +
      'Green marble palaces and lake piers express that court culture.',
    successionLine: [
      { name: 'Rawal Peetha / early Rawals', era: 'medieval', note: 'Founding lore in Vagad histories.' },
      { name: 'Maharawals of Dungarpur', era: '17th–20th c.', note: 'Regnal tables in palace materials.' },
      {
        name: 'Last ruling Maharawal context',
        era: '1948',
        note: 'Integration into Rajasthan; verify last name in official lists.',
      },
    ],
    currentHead: {
      roleLabel: 'Head of the Dungarpur house (cultural — verify)',
      name: 'See Dungarpur palace / trust sources',
      note: 'Cadet Sisodia line; not the same as Udaipur’s main Mewar succession.',
    },
    timeline: [
      { period: 'Medieval–modern', headline: 'Vagad courts', detail: 'Aravalli folds; Gujarat trade links.' },
      { period: '1947+', headline: 'Democracy', detail: 'Heritage tourism; no sovereignty.' },
    ],
    familyTree: {
      id: 'dungarpur-sis',
      name: 'Sisodia cadet — Dungarpur',
      note: 'Pur Bansiya branch (common label)',
      children: [
        {
          id: 'dg-line',
          name: 'Maharawal line (outline)',
          chain: ['Early Rawals', '…', '20th c. Maharawal'],
          children: [{ id: 'dg-today', name: 'Contemporary family', note: 'verify' }],
        },
      ],
    },
  },

  banswara: {
    slug: 'banswara',
    houseLabel: 'Maharawals of Banswara',
    disclaimer: POST_1971,
    intro:
      'Banswara was a Vagad-area state ruled by Maharawals (often classed among Rajput-led polities in gazetteers). ' +
      'Mahi dams and tribal belts sit alongside princely-era administration.',
    successionLine: [
      { name: 'Founding Rawal / Maharawal lines', era: 'medieval–early modern', note: 'See Banswara state chronicles.' },
      { name: 'Maharawal succession', era: '18th–20th c.', note: 'Multiple reigns — palace lists.' },
      { name: 'Last ruler before merger', era: '1948', note: 'Integration into Greater Rajasthan.' },
    ],
    currentHead: {
      roleLabel: 'Descendants of the house (verify)',
      name: 'Local palace / district heritage',
      note: 'Less national press than major capitals; confirm names on site.',
    },
    timeline: [
      { period: 'Colonial–modern', headline: 'Hill state', detail: 'Forests, dams, and treaty-era revenue maps.' },
      { period: '1947+', headline: 'Democracy', detail: 'Cultural continuity without rulership.' },
    ],
    familyTree: {
      id: 'banswara',
      name: 'Maharawal — Banswara',
      children: [
        {
          id: 'bsw-line',
          name: 'Main line (placeholder outline)',
          chain: ['Early Maharawal', '…', 'Last ruler'],
          children: [{ id: 'bsw-today', name: 'Today', note: 'heritage layer' }],
        },
      ],
    },
  },

  jhalawar: {
    slug: 'jhalawar',
    houseLabel: 'Jhala — Jhalawar (carved from Kota)',
    disclaimer: POST_1971,
    intro:
      'Jhalawar was created in 1838 as a separate state for the descendants of Jhala Zalim Singh of Kota. ' +
      'Jhalas (Jhala Rajputs) link culturally to Hadoti’s Jhala military tradition.',
    successionLine: [
      { name: 'Maharaj Rana Madho Singh', era: '1838 onward', note: 'First ruler of separate Jhalawar state.' },
      { name: 'Later Maharajas of Jhalawar', era: '19th–20th c.', note: 'Regnal lists in palace / gazetteers.' },
      { name: 'Last ruling Maharaja', era: '1948', note: 'Merger into Rajasthan.' },
    ],
    currentHead: {
      roleLabel: 'Head of the former Jhalawar house (verify)',
      name: 'Jhalawar palace / family sources',
      note: 'Smaller state; confirm contemporary names locally.',
    },
    timeline: [
      { period: '1838+', headline: 'Separate state', detail: 'Jhala branch administration from Kota context.' },
      { period: '1947+', headline: 'Integration', detail: 'Democratic institutions.' },
    ],
    familyTree: {
      id: 'jhalawar-jhala',
      name: 'Jhala — Jhalawar',
      children: [
        {
          id: 'jhala-line',
          name: 'From Kota separation',
          chain: ['Zalim Singh memory', 'Madho Singh', '…', 'Last Maharaja'],
          children: [{ id: 'jhl-today', name: 'Present', note: 'cultural' }],
        },
      ],
    },
  },

  tonk: {
    slug: 'tonk',
    houseLabel: 'Nawabs of Tonk (Pathan)',
    disclaimer: POST_1971,
    intro:
      'Tonk was a distinct **Muslim-ruled** princely state under Nawabs of Pathan descent (Amir Khan’s line in standard histories), unlike the Rajput-led states elsewhere in this guide. ' +
      'Sunehri Kothi and mosque architecture reflect that court.',
    successionLine: [
      { name: 'Nawab Amir Khan', era: 'early 19th c.', note: 'Pindari-era figure; state formation under British treaty order.' },
      { name: 'Nawab Muhammad Wazir Khan', era: 'mid-19th c.' },
      { name: 'Later Nawabs', era: '19th–20th c.', note: 'See Tonk state lists.' },
      { name: 'Last Nawab before integration', era: '1948', note: 'Accession to India.' },
    ],
    currentHead: {
      roleLabel: 'Descendants of the Tonk ruling family (cultural)',
      name: 'Verify with Tonk heritage sources',
      note: 'Not a Rajput lineage — different titles and memory practices.',
    },
    timeline: [
      { period: '19th c.', headline: 'Nawabi administration', detail: 'Persianate court culture in Hadoti fringe.' },
      { period: '1947+', headline: 'Democracy', detail: 'Mosques and havelis as heritage.' },
    ],
    familyTree: {
      id: 'tonk-nawab',
      name: 'Pathan Nawabs — Tonk',
      children: [
        {
          id: 'amir-line',
          name: 'Amir Khan succession (outline)',
          chain: ['Amir Khan', 'Wazir Khan', '…', 'Last Nawab'],
          children: [{ id: 'tonk-today', name: 'Today', note: 'community & heritage' }],
        },
      ],
    },
  },

  'sawai-madhopur': {
    slug: 'sawai-madhopur',
    houseLabel: 'Kachhwaha — Jaipur (Ranthambhore jagir)',
    disclaimer: POST_1971,
    intro:
      'Sawai Madhopur town grew around the railway and **Ranthambhore**, historically tied to the **Jaipur (Kachhwaha)** state. ' +
      'The fort and forests were not a separate “Madhopur dynasty” — they sat within Jaipur’s princely map.',
    successionLine: [
      { name: 'Jaipur Maharajas (sovereigns)', era: '18th–20th c.', note: 'Ranthambhore as part of Jaipur territory.' },
      { name: 'Sawai Jai Singh II', era: '18th c.', note: 'Namesake “Sawai” links to Jaipur’s titulature.' },
      { name: 'Sawai Man Singh II / Bhawani Singh era', era: '20th c.', note: 'Last ruling maharaja context for Jaipur state.' },
    ],
    currentHead: {
      roleLabel: 'Head of the Jaipur house (same as Jaipur city page)',
      name: 'Sawai Padmanabh Singh',
      note: 'Cultural head of the Kachhwaha Jaipur line; Ranthambhore is heritage land, not a separate throne.',
    },
    timeline: [
      { period: 'Medieval', headline: 'Fort seat', detail: 'Ranthambhore as strategic stronghold before Jaipur-era administration.' },
      { period: '20th c.', headline: 'Jaipur state', detail: 'Forests later become protected tiger reserve.' },
      { period: '1971+', headline: 'Wildlife & democracy', detail: 'Conservation law — not princely hunting rights.' },
    ],
    familyTree: {
      id: 'sm-rtr',
      name: 'Jaipur — Ranthambhore belt',
      note: 'Not a separate royal house',
      children: [
        {
          id: 'jp-ranth',
          name: 'Kachhwaha sovereigns',
          chain: ['Jai Singh II', '…', 'Man Singh II', 'Bhawani Singh', 'Padmanabh Singh'],
          children: [{ id: 'sm-heritage', name: 'Reserve & communities', note: 'tourism + conservation' }],
        },
      ],
    },
  },

  sirohi: {
    slug: 'sirohi',
    houseLabel: 'Deora Chauhan — Sirohi',
    disclaimer: POST_1971,
    intro:
      'Sirohi state was ruled by Deora Chauhans (distinct from Jalore’s medieval Chauhan line). ' +
      'Mount Abu and Dilwara sit in this district — hill country linked to that princely map.',
    successionLine: [
      { name: 'Early Rawals / Maharaos', era: 'medieval–early modern', note: 'See Sirohi chronicles.' },
      { name: 'Maharao Sahab', era: '19th–20th c.', note: 'Verify exact names in palace lists.' },
      { name: 'Last ruler context', era: '1948', note: 'Merger into Rajasthan.' },
    ],
    currentHead: {
      roleLabel: 'Descendants of the Sirohi house (verify)',
      name: 'Sirohi palace / local sources',
      note: 'Abu Road tourism economy; not a separate “Abu royal family”.',
    },
    timeline: [
      { period: 'Colonial–modern', headline: 'Hill state', detail: 'Aravalli resources; British mapping.' },
      { period: '1947+', headline: 'Integration', detail: 'Democratic Rajasthan.' },
    ],
    familyTree: {
      id: 'sirohi-deora',
      name: 'Deora Chauhan — Sirohi',
      children: [
        {
          id: 'sr-line',
          name: 'Maharao line (outline)',
          chain: ['Early Deora', '…', 'Last Maharao'],
          children: [{ id: 'sr-today', name: 'Today', note: 'heritage' }],
        },
      ],
    },
  },

  jalore: {
    slug: 'jalore',
    houseLabel: 'Chauhan — Jalore (medieval kingdom)',
    disclaimer: POST_1971,
    intro:
      'Jalore was a major **medieval Chauhan** fort-kingdom (the “Songara” Chauhan line in many texts) eventually ended by Delhi Sultanate campaigns. ' +
      'Today’s district is Marwar–Gujarat trade country — there is **no continuous princely “Jalore state”** after the early modern period in the same way as Jaipur or Udaipur.',
    successionLine: [
      { name: 'Chauhan rulers of Jalore', era: '12th–14th c.', note: 'Kanhara Deo and successors in regional epigraphy.' },
      { name: 'Ala-ud-din Khilji’s conquest', era: '1311', note: 'End of independent Jalore kingdom in standard narratives.' },
      {
        name: 'Later Marwar / Mughal maps',
        era: '15th c. onward',
        note: 'Fort remains symbol; administration under larger states.',
      },
    ],
    currentHead: {
      roleLabel: 'No single princely house mapped for modern Jalore district',
      name: '—',
      note: 'Use Mehrangarh / Jodhpur archives for Marwar-era jagirs in the region.',
    },
    timeline: [
      { period: 'Medieval', headline: 'Fort kingdom', detail: 'Strategic Aravalli stronghold.' },
      { period: 'Sultanate–Mughal', headline: 'Imperial maps', detail: 'Jalore loses independent kingship.' },
      { period: 'Modern', headline: 'Marwar hinterland', detail: 'Trade routes; no separate “raja” office today.' },
    ],
    familyTree: {
      id: 'jalore-chauhan',
      name: 'Medieval Chauhans — Jalore fort',
      note: 'Line ends as independent kingdom',
      children: [
        {
          id: 'kanhara',
          name: 'Songara Chauhan memory',
          chain: ['Kanhara Deo', '…', 'conquest era'],
          children: [{ id: 'jl-later', name: 'Marwar / thikana era', note: 'no one continuous “royal family” label for whole district' }],
        },
      ],
    },
  },

  rajsamand: {
    slug: 'rajsamand',
    houseLabel: 'Sisodia — Mewar (Kumbhalgarh–lake country)',
    disclaimer: POST_1971,
    intro:
      'Rajsamand district is core **Mewar** country: Rajsamand Lake was built under Maharana Raj Singh I; **Kumbhalgarh** was built by Rana Kumbha. ' +
      'The lineage is the **same Sisodia house** as Udaipur — not a different dynasty.',
    successionLine: [
      { name: 'Rana Kumbha', era: '15th c.', note: 'Kumbhalgarh fort; literary & military prestige.' },
      { name: 'Maharana Raj Singh I', era: '17th c.', note: 'Rajsamand Lake embankment era.' },
      { name: 'Later Maharanas (Udaipur seat)', era: '18th–20th c.', note: 'Same regnal line as Udaipur page.' },
    ],
    currentHead: {
      roleLabel: 'House of Mewar (same as Udaipur / Chittor context)',
      name: 'Lakshyaraj Singh Mewar',
      note: 'District heritage ties to Sisodia memory; titles ceremonial only.',
    },
    timeline: [
      { period: '15th c.', headline: 'Kumbhalgarh', detail: 'Massive wall line; strategic Aravalli defence.' },
      { period: '17th c.', headline: 'Rajsamand Lake', detail: 'Irrigation and ritual landscape.' },
      { period: 'Modern', headline: 'Tourism & faith', detail: 'Nathdwara pilgrim economy; ASI sites.' },
    ],
    familyTree: {
      id: 'rajsamand-mewar',
      name: 'Sisodia — Mewar heartland',
      children: [
        {
          id: 'kumbha-raj',
          name: 'Builders’ memory',
          chain: ['Rana Kumbha', 'Raj Singh I', '…', 'Bhagwat Singh'],
          children: [{ id: 'rj-today', name: 'Mewar today', note: 'Udaipur custodianship' }],
        },
      ],
    },
  },

  ajmer: {
    slug: 'ajmer',
    houseLabel: 'Ajmer — Chauhan past, British residency',
    disclaimer: POST_1971,
    intro:
      'Ajmer was the seat of **Prithviraj Chauhan** lore and later the **Ajmer-Merwara** province under direct British administration — it was **not** the capital of a major 19th-century Rajput princely state like Jaipur. ' +
      'Nearby **Kishangarh** had its own maharajas; Pushkar is pilgrimage town — different stories.',
    successionLine: [
      { name: 'Chauhan rulers of Sapadalaksha / Ajmer', era: 'medieval', note: 'Prithviraj III memory; Chauhan power before Delhi Sultanate.' },
      { name: 'Delhi Sultanate → Mughal maps', era: '13th–18th c.', note: 'Dargah culture; no local “maharaja” in later centuries.' },
      { name: 'British Ajmer-Merwara', era: '19th–20th c.', note: 'Chief Commissioner administration — not a ruling Rajput house in town.' },
    ],
    currentHead: {
      roleLabel: 'No single “royal family of Ajmer city”',
      name: '—',
      note: 'For Kishangarh Rathore line, see that state’s materials; for Chauhan lineage use academic histories.',
    },
    timeline: [
      { period: 'Medieval', headline: 'Chauhan Ajmer', detail: 'Fort and Taragarh in regional power.' },
      { period: 'Colonial', headline: 'British province', detail: 'Rail junction; Mayo College context.' },
      { period: '1947+', headline: 'Democratic India', detail: 'Ajmer district in Rajasthan.' },
    ],
    familyTree: {
      id: 'ajmer-mix',
      name: 'Layers (not one house)',
      children: [
        {
          id: 'chauhan-aj',
          name: 'Chauhan memory',
          note: 'medieval',
          chain: ['Ajaypal', '…', 'Prithviraj III'],
          children: [
            {
              id: 'british',
              name: 'Colonial province',
              note: 'British Ajmer-Merwara — separate from princely states',
              children: [{ id: 'nearby', name: 'Nearby princely states', note: 'Kishangarh, Bundi, Jaipur — different seats' }],
            },
          ],
        },
      ],
    },
  },

  nagaur: {
    slug: 'nagaur',
    houseLabel: 'Nagaur — Chauhan fort, later Jodhpur sphere',
    disclaimer: POST_1971,
    intro:
      'Nagaur was a historic **Chauhan** stronghold; later it moved through Mughal and **Marwar (Jodhpur)** administrative orbits. ' +
      'The big fort hosted Sufi fair culture — the “royal” story is layered, not one continuous local dynasty in the modern town alone.',
    successionLine: [
      { name: 'Chauhan rulers of Nagaur', era: '12th–13th c.', note: 'Kanhadadeva memory in regional lore.' },
      { name: 'Sultanate / Mughal administration', era: 'medieval–early modern', note: 'Fort as imperial outpost.' },
      { name: 'Marwar (Rathore) integration', era: '18th–20th c.', note: 'Jodhpur state maps include Nagaur area.' },
    ],
    currentHead: {
      roleLabel: 'No separate Nagaur “maharaja” today',
      name: 'Marwar heritage → Jodhpur house for Rathore context',
      note: 'See Jodhpur page for Rathore head of house; Nagaur itself is civic + fair city.',
    },
    timeline: [
      { period: 'Medieval', headline: 'Desert fort', detail: 'Trade crossroads.' },
      { period: 'Modern', headline: 'Agency Rajputana', detail: 'Cattle fair; Muslim & Hindu pilgrimage layers.' },
    ],
    familyTree: {
      id: 'nagaur-layer',
      name: 'Nagaur — layered sovereignty',
      children: [
        {
          id: 'ch-nag',
          name: 'Chauhan era',
          chain: ['Kanhadadeva', '…', 'imperial maps'],
          children: [
            {
              id: 'marwar',
              name: 'Rathore / Jodhpur context',
              note: 'not a separate Nagaur royal line today',
              chain: ['Jodhpur state', '…', 'Gaj Singh II (house head)'],
            },
          ],
        },
      ],
    },
  },

  pali: {
    slug: 'pali',
    houseLabel: 'Marwar — thikanas & temples (Rathore sphere)',
    disclaimer: POST_1971,
    intro:
      'Pali district lies in **Marwar** — historically under **Jodhpur (Rathore)** sovereignty with many **thikanas** (estate lines). ' +
      'Ranakpur’s temples are Jain faith sites, not a “royal dynasty” seat.',
    successionLine: [
      { name: 'Rathore Maharajas of Jodhpur', era: 'sovereigns', note: 'Pali as part of Marwar.' },
      { name: 'Local thikanas', era: 'varies', note: 'Multiple Rajput estate families — not one city-wide lineage.' },
    ],
    currentHead: {
      roleLabel: 'Head of Marwar house (cultural)',
      name: 'Maharaja Gaj Singh II',
      note: 'Sovereign lineage context is Jodhpur Rathores; local thikanas have their own family trees.',
    },
    timeline: [
      { period: 'Medieval–modern', headline: 'Marwar hinterland', detail: 'Trade toward Gujarat; Aravalli passes.' },
      { period: 'Modern', headline: 'Industry & pilgrimage', detail: 'Marble; Ranakpur; Jawai belt.' },
    ],
    familyTree: {
      id: 'pali-marwar',
      name: 'Jodhpur → Pali belt',
      children: [
        {
          id: 'rathore-sov',
          name: 'Rathore sovereign line',
          chain: ['Rao Jodha', '…', 'Gaj Singh II'],
          children: [{ id: 'thikanas', name: 'Thikana families', note: 'many collateral lines in district' }],
        },
      ],
    },
  },

  barmer: {
    slug: 'barmer',
    houseLabel: 'Marwar — Thar thikanas (Rathore sphere)',
    disclaimer: POST_1971,
    intro:
      'Barmer’s settlements sat under **Jodhpur state** administration with **desert thikanas** and trade communities — not a separate Barmer dynasty. ' +
      'Craft villages and border light belong to that Marwar cultural map.',
    successionLine: [
      { name: 'Maharajas of Jodhpur', era: 'sovereign line', note: 'Barmer within Marwar.' },
      { name: 'Local thikana & jagirdar lines', era: 'varies', note: 'Verify in family histories; many estates.' },
    ],
    currentHead: {
      roleLabel: 'Marwar house head (cultural)',
      name: 'Maharaja Gaj Singh II',
      note: 'District-specific thikana heads are separate private genealogies.',
    },
    timeline: [
      { period: 'Colonial–modern', headline: 'Desert agency', detail: 'Rail and famine records; border economy.' },
      { period: '1947+', headline: 'Democracy', detail: 'Rajasthan desert districts.' },
    ],
    familyTree: {
      id: 'barmer-marwar',
      name: 'Jodhpur → Barmer Thar',
      children: [
        {
          id: 'marwar-thar',
          name: 'Rathore line + local estates',
          chain: ['Jodhpur maharajas', '…', 'thikanas'],
          children: [{ id: 'bm-craft', name: 'Communities', note: 'craft & pastoral belts' }],
        },
      ],
    },
  },

  churu: {
    slug: 'churu',
    houseLabel: 'Shekhawati — merchant havelis & thikanas',
    disclaimer: POST_1971,
    intro:
      'Churu district is classic **Shekhawati** — many **Shekhawat** and other Rajput **thikanas** (e.g. Sikar, Khetri) influenced the region, alongside Jain merchant capital that built painted havelis. ' +
      'There is **no one “Churu royal family”** — it’s a network of estates and families.',
    successionLine: [
      { name: 'Shekhawat / Khetri / Sikar thikana lines', era: '18th–20th c.', note: 'Interlinked but distinct genealogies.' },
      { name: 'Jaipur state overlap', era: 'treaty era', note: 'Some estates tied to Jaipur orbit.' },
    ],
    currentHead: {
      roleLabel: 'Multiple houses — no single head for the whole district',
      name: '—',
      note: 'Research specific thikana or haveli family if tracing one line.',
    },
    timeline: [
      { period: '18th–19th c.', headline: 'Opium & trade', detail: 'Merchant wealth → fresco towns.' },
      { period: 'Modern', headline: 'Heritage tourism', detail: 'Private havelis; varied access.' },
    ],
    familyTree: {
      id: 'churu-shekh',
      name: 'Shekhawati network',
      children: [
        {
          id: 'multi',
          name: 'Thikana map (illustrative)',
          chain: ['Shekhawat lines', 'Khetri', 'Sikar', 'Bissau'],
          children: [{ id: 'merchant', name: 'Jain merchant families', note: 'not dynastic “rajas” but patron elite' }],
        },
      ],
    },
  },

  jhunjhunu: {
    slug: 'jhunjhunu',
    houseLabel: 'Shekhawati — Mandawa / Nawalgarh belt',
    disclaimer: POST_1971,
    intro:
      'Jhunjhunu is central **Shekhawati** — the same **thikana + merchant** pattern as Churu: multiple Rajput estate families and trading lineages, not one princely capital family for the whole district.',
    successionLine: [
      { name: 'Local thikana families', era: 'varies', note: 'Mandawa, Nawalgarh, Mukundgarh — separate trees.' },
    ],
    currentHead: {
      roleLabel: 'No district-wide royal head',
      name: '—',
      note: 'Heritage hotels in restored havelis often use family names — verify privately.',
    },
    timeline: [
      { period: '19th c.', headline: 'Merchant boom', detail: 'Fresco competition between towns.' },
      { period: 'Modern', headline: 'Tourism', detail: 'Weekend traffic from Delhi–Jaipur.' },
    ],
    familyTree: {
      id: 'jhun-shekh',
      name: 'Shekhawati towns',
      chain: ['Mandawa', 'Nawalgarh', 'Mukundgarh'],
      children: [{ id: 'jj-note', name: 'Separate genealogies per estate', note: 'illustrative cluster only' }],
    },
  },

  sikar: {
    slug: 'sikar',
    houseLabel: 'Shekhawati — Sikar thikana & Laxmangarh',
    disclaimer: POST_1971,
    intro:
      'Sikar was a **Shekhawat thikana** centre with **Laxmangarh fort** — part of the broader Jaipur-aligned Shekhawati political field in the colonial era. ' +
      'Treat it as **one prominent estate line among many**, not the only “royal” story in the district.',
    successionLine: [
      { name: 'Shekhawat rulers of Sikar', era: '18th–20th c.', note: 'Thikana chronicles in local histories.' },
      { name: 'Integration', era: '1947+', note: 'Rajasthan formation; titles ceremonial afterward.' },
    ],
    currentHead: {
      roleLabel: 'Sikar house descendants (verify)',
      name: 'Local thikana / family sources',
      note: 'Jaipur Kachhwaha sovereign line is separate — see Jaipur page for “maharaja” head of state lineage.',
    },
    timeline: [
      { period: 'Colonial', headline: 'Thikana town', detail: 'Trade routes; agrarian estates.' },
      { period: 'Modern', headline: 'Heritage', detail: 'Fresco tourism.' },
    ],
    familyTree: {
      id: 'sikar-shekh',
      name: 'Shekhawat — Sikar (outline)',
      children: [
        {
          id: 'sikar-line',
          name: 'Thikana succession',
          chain: ['Early Shekhawat', '…', '20th c.'],
          children: [{ id: 'laxman', name: 'Laxmangarh fort', note: 'viewpoints & private holdings' }],
        },
      ],
    },
  },

  bhilwara: {
    slug: 'bhilwara',
    houseLabel: 'Mewar–Malwa fringe — estates & temples',
    disclaimer: POST_1971,
    intro:
      'Bhilwara is mainly a **textile and temple** belt between **Chittorgarh/Udaipur** and **Malwa**. ' +
      'It was not a separate princely capital like Udaipur; local **jagirdars** and **thikanas** existed under larger states.',
    successionLine: [
      { name: 'Mewar / Jaipur spheres of influence', era: 'colonial', note: 'District-level estates — fragmented.' },
    ],
    currentHead: {
      roleLabel: 'No single “Bhilwara royal family” in public records',
      name: '—',
      note: 'Trace specific jagir if family history is known.',
    },
    timeline: [
      { period: 'Modern', headline: 'Industrial & pilgrimage', detail: 'Textile hub; Asind etc.' },
    ],
    familyTree: {
      id: 'bhilwara',
      name: 'Regional estates (generic)',
      children: [
        {
          id: 'estates',
          name: 'Overlapping sovereignties',
          chain: ['Mewar influence', 'Jaipur influence', 'local jagirs'],
          children: [{ id: 'bh-today', name: 'Today', note: 'democratic civic life' }],
        },
      ],
    },
  },

  baran: {
    slug: 'baran',
    houseLabel: 'Hadoti hinterland — Kota / Bundi sphere',
    disclaimer: POST_1971,
    intro:
      'Baran sits in **Hadoti** between Kota and the Chambal side — historically under **Kota** and **Bundi**-related administration rather than its own princely capital.',
    successionLine: [
      { name: 'Kota Maharaos', era: 'reference sovereigns', note: 'Baran as hinterland of Hadoti states.' },
      { name: 'Local jagirs', era: 'varies', note: 'Smaller estate lines — verify in district gazetteers.' },
    ],
    currentHead: {
      roleLabel: 'No separate Baran dynasty',
      name: 'Kota / Bundi lineages for Hadoti context',
      note: 'See Kota & Bundi pages for maharao / Hada lines.',
    },
    timeline: [
      { period: 'Modern', headline: 'Chambal edge', detail: 'Quiet district; Kota student traffic nearby.' },
    ],
    familyTree: {
      id: 'baran-hadoti',
      name: 'Hadoti cluster',
      chain: ['Bundi Hada', 'Kota Hada', 'Baran hinterland'],
      children: [{ id: 'br-local', name: 'Local memory', note: 'forts & shrines' }],
    },
  },

  dausa: {
    slug: 'dausa',
    houseLabel: 'Eastern belt — Kachhwaha jagirs & Meena hills',
    disclaimer: POST_1971,
    intro:
      'Dausa lies in Jaipur’s eastern hinterland — historically a mix of **Kachhwaha jagirs**, **Alwar**-sphere influences, and **Meena** hill communities. ' +
      'Abhaneri stepwell is heritage — not tied to one princely “Dausa king”.',
    successionLine: [
      { name: 'Jaipur Maharajas (sovereign context)', era: '18th–20th c.', note: 'Regional overlordship patterns.' },
      { name: 'Local jagirdars', era: 'varies', note: 'Multiple families.' },
    ],
    currentHead: {
      roleLabel: 'Sovereign lineage context → Jaipur Kachhwaha',
      name: 'Sawai Padmanabh Singh',
      note: 'District itself has many communities — not one royal lineage.',
    },
    timeline: [
      { period: 'Modern', headline: 'Highway hinterland', detail: 'Jaipur–Agra corridor; stepwell tourism.' },
    ],
    familyTree: {
      id: 'dausa-east',
      name: 'Jaipur eastern orbit',
      chain: ['Kachhwaha Jaipur', 'local jagirs', 'Meena regions'],
      children: [{ id: 'ds-note', name: 'Plural lineages', note: 'no single tree' }],
    },
  },

  hanumangarh: {
    slug: 'hanumangarh',
    houseLabel: 'Bhatner / Bikaner — Ghaggar–border belt',
    disclaimer: POST_1971,
    intro:
      'Hanumangarh has **Bhatner (Hanumangarh) fort** memory and strong **Bikaner state** geography on the Punjab border. ' +
      'The princely-era story aligns with **Bikaner Rathores**, not a separate Hanumangarh dynasty.',
    successionLine: [
      { name: 'Bikaner Maharajas', era: 'reference', note: 'District formed from Bikaner region.' },
      { name: 'Border jagirs', era: 'varies', note: 'Punjab–Rajasthan agrarian elites.' },
    ],
    currentHead: {
      roleLabel: 'Bikaner house context (see Bikaner city)',
      name: 'Verify with Bikaner / family sources',
      note: 'District city is administrative; not a former capital seat like Bikaner town.',
    },
    timeline: [
      { period: 'Ancient–medieval', headline: 'Bhatner fort', detail: 'Strategic Ghaggar crossing.' },
      { period: 'Modern', headline: 'Canal agriculture', detail: 'Indira Gandhi canal belt.' },
    ],
    familyTree: {
      id: 'hanu-bikaner',
      name: 'Bikaner Rathore sphere',
      chain: ['Rao Bika', '…', 'Ganga Singh', 'Karni Singh'],
      children: [{ id: 'hanu-today', name: 'Hanumangarh today', note: 'civic + agrarian' }],
    },
  },

  'sri-ganganagar': {
    slug: 'sri-ganganagar',
    houseLabel: 'Bikaner lands — canal colony (20th c.)',
    disclaimer: POST_1971,
    intro:
      'Sri Ganganagar was planned as a **20th-century canal city** on **ex-Bikaner state** lands. ' +
      'There is **no ancient Ganganagar royal line** — the “princely” link is **Bikaner Rathore** sovereignty over the territory before integration.',
    successionLine: [
      { name: 'Bikaner Maharajas', era: 'pre-1948', note: 'Territorial sovereigns for the region.' },
      { name: 'Post-independence', era: '1947+', note: 'Peasant settlement & irrigation grids — democratic governance.' },
    ],
    currentHead: {
      roleLabel: 'Former territorial sovereign context → Bikaner house',
      name: 'See Bikaner page / clan sources',
      note: 'Ganganagar itself is not a seat of a separate maharaja.',
    },
    timeline: [
      { period: '1920s+', headline: 'Canal town', detail: 'IG canal; Punjabi–Rajasthani agrarian mix.' },
      { period: 'Modern', headline: 'Food bowl', detail: 'Wheat, cotton; cold fog winters.' },
    ],
    familyTree: {
      id: 'sgn-bikaner',
      name: 'Bikaner → Ganganagar lands',
      chain: ['Bikaner state', 'integration', 'canal grids'],
      children: [{ id: 'sgn-today', name: 'Contemporary city', note: 'no separate royal house' }],
    },
  },

  pratapgarh: {
    slug: 'pratapgarh',
    houseLabel: 'Vagad tribal belt — new district (2008)',
    disclaimer: POST_1971,
    intro:
      'Pratapgarh district was carved from **Chittorgarh / Udaipur** margins and is predominantly **Adivasi**-majority. ' +
      'It was **not** a historic princely capital named “Pratapgarh” in the Rajasthan integration lists — do not confuse with **Maharana Pratap**’s Sisodia line (that story lives under **Mewar / Chittor / Udaipur**).',
    successionLine: [
      { name: 'Sisodia / Mewar (regional sovereign context)', era: 'historical', note: 'Neighbouring former Udaipur state — not a “Pratapgarh dynasty”.' },
      { name: 'Local jagirs & tribal headships', era: 'varies', note: 'Community-specific — not one app-wide genealogy.' },
    ],
    currentHead: {
      roleLabel: 'No princely “raja of Pratapgarh district”',
      name: '—',
      note: 'For Sisodia lineage use Udaipur / Chittorgarh / Rajsamand materials.',
    },
    timeline: [
      { period: '2008+', headline: 'New district', detail: 'Administrative split; forest & dam belts.' },
    ],
    familyTree: {
      id: 'pratapgarh-dist',
      name: 'Context — not a capital house',
      children: [
        {
          id: 'mewar-near',
          name: 'Neighbouring Mewar memory',
          chain: ['Udai Singh II', 'Pratap Singh I', '…'],
          children: [{ id: 'pg-local', name: 'Pratapgarh district', note: 'tribal & forest communities today' }],
        },
      ],
    },
  },
}
