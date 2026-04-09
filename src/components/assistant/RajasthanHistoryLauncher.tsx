import { useEffect, useId, useState } from 'react'

type Era = {
  era: string
  years: string
  summary: string
  rulers: string[]
}

type MapSource = {
  period: string
  years: string
  scope: string
  sourceLabel: string
  sourceUrl: string
}

const ERA_FLOW: Era[] = [
  {
    era: 'Proto-historic foundations',
    years: 'c. 3500 BCE - 1500 BCE',
    summary:
      'Kalibangan, Ahar-Banas, and Ganeshwar-Jodhpura zones show urban craft, metallurgy, trade, and early settlement ecology across the Thar-Aravalli transition.',
    rulers: ['Urban-craft polities (archaeological, not king-list based)'],
  },
  {
    era: 'Vedic / early janapada phase',
    years: 'c. 1500 BCE - 600 BCE',
    summary:
      'Texts and later tradition place Matsya and nearby janapadas in this region; sacrificial culture, agro-pastoral life, and clan polity structures expand.',
    rulers: ['Matsya tradition (Puranic-Itihasa layer)'],
  },
  {
    era: 'Mahajanapada to classical empires',
    years: 'c. 600 BCE - 550 CE',
    summary:
      'Maurya influence, post-Mauryan currents, and Gupta-era integrations shape trade corridors, temple patronage seeds, and early state articulation.',
    rulers: ['Mauryan imperial governors', 'Regional lineages under shifting suzerainty'],
  },
  {
    era: 'Early medieval Rajput state formation',
    years: 'c. 550 CE - 1200 CE',
    summary:
      'Gurjara-Pratihara, Chahamanas (Chauhans), Guhilas, and related houses consolidate fort-based polities, temple networks, and frontier diplomacy.',
    rulers: ['Nagabhata I/II (Pratihara)', 'Vigraharaja IV', 'Prithviraj III (Chahamana)'],
  },
  {
    era: 'Turko-Afghan pressure and Rajput reconfiguration',
    years: 'c. 1200 CE - 1526 CE',
    summary:
      'Delhi Sultanate campaigns alter political geography; Rajput houses reconfigure alliances, fort defense strategy, and legitimacy narratives.',
    rulers: ['Hammir of Ranthambore', 'Rana Kumbha (Mewar)'],
  },
  {
    era: 'Mughal-Rajput negotiated order',
    years: '1526 CE - 1707 CE',
    summary:
      'Marriage diplomacy, military service, resistance episodes, and autonomous court cultures coexist; Amber/Jaipur, Marwar, and Mewar trajectories diverge.',
    rulers: ['Rana Sanga', 'Maharana Pratap', 'Raja Man Singh I', 'Jaswant Singh', 'Sawai Jai Singh II'],
  },
  {
    era: 'Late pre-colonial transition',
    years: '1707 CE - 1818 CE',
    summary:
      'Post-Mughal fragmentation, Maratha pressures, fiscal stress, and regional contest produce unstable but adaptive statecraft.',
    rulers: ['Maharaja Suraj Mal (Bharatpur sphere)', 'Various Kachhwaha/Rathore/Sisodia rulers'],
  },
  {
    era: 'British paramountcy in Rajputana',
    years: '1818 CE - 1947 CE',
    summary:
      'Treaty system stabilizes princely houses under colonial supremacy; railways, revenue reforms, cantonments, and modern institutions expand unevenly.',
    rulers: ['Princely states under Rajputana Agency', 'Modernizing rulers incl. Ganga Singh (Bikaner)'],
  },
  {
    era: 'Integration and modern Rajasthan',
    years: '1948 CE - present',
    summary:
      'Multi-stage union of princely states creates Rajasthan; democratic institutions, irrigation, mining, tourism, handicrafts, and services transform the economy.',
    rulers: ['Constitutional democracy: elected governments'],
  },
]

const MAP_SOURCES: MapSource[] = [
  {
    period: 'Rajputana & princely boundaries',
    years: '19th-early 20th century',
    scope: 'Political boundaries, agency structure, state limits',
    sourceLabel: 'Survey of India (legacy map catalog)',
    sourceUrl: 'https://surveyofindia.gov.in/',
  },
  {
    period: 'Imperial Gazetteer / district geography',
    years: 'Colonial period',
    scope: 'District gazetteers, administrative maps, settlement patterns',
    sourceLabel: 'Digital South Asia Library (map and gazetteer archive)',
    sourceUrl: 'https://dsal.uchicago.edu/',
  },
  {
    period: 'Princely states to union phase',
    years: '1948-1956',
    scope: 'Matsya Union, Greater Rajasthan, reorganisation transitions',
    sourceLabel: 'National Archives of India (records and cartographic refs)',
    sourceUrl: 'https://nationalarchives.nic.in/',
  },
  {
    period: 'Constitutional and legal territorial orders',
    years: '1950 onward',
    scope: 'Acts, state reorganisation references, legal boundary basis',
    sourceLabel: 'India Code / Legislative Department',
    sourceUrl: 'https://www.indiacode.nic.in/',
  },
  {
    period: 'Current district/state official maps',
    years: 'Contemporary',
    scope: 'District-level official map resources and planning overlays',
    sourceLabel: 'Rajasthan Government portals',
    sourceUrl: 'https://rajasthan.gov.in/',
  },
]

export function RajasthanHistoryLauncher() {
  const [open, setOpen] = useState(false)
  const titleId = useId()
  const descId = useId()

  useEffect(() => {
    if (!open) return
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setOpen(false)
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [open])

  return (
    <>
      <button
        type="button"
        className={`history-fab ${open ? 'history-fab--hidden' : ''}`}
        onClick={() => setOpen(true)}
        aria-label="Open Rajasthan history"
        aria-controls="rajasthan-history-dialog"
        aria-expanded={open}
        title="History of Rajasthan"
      >
        <span className="history-fab__glow" aria-hidden />
        <span className="history-fab__icon" aria-hidden>
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
            <path
              d="M4 5.5A2.5 2.5 0 0 1 6.5 3H20v15H6.5A2.5 2.5 0 1 0 6.5 23H4V5.5Z"
              stroke="currentColor"
              strokeWidth="1.7"
              strokeLinejoin="round"
            />
            <path
              d="M8 7h8M8 11h8M8 15h6"
              stroke="currentColor"
              strokeWidth="1.7"
              strokeLinecap="round"
            />
          </svg>
        </span>
        <span className="history-fab__label">History</span>
      </button>

      {open ? (
        <div className="history-overlay" role="presentation">
          <button
            type="button"
            className="history-overlay__backdrop"
            aria-label="Close Rajasthan history"
            onClick={() => setOpen(false)}
          />

          <section
            id="rajasthan-history-dialog"
            className="history-dialog"
            role="dialog"
            aria-modal="true"
            aria-labelledby={titleId}
            aria-describedby={descId}
          >
            <header className="history-dialog__head">
              <div>
                <p className="history-dialog__kicker">Rajasthan Archive</p>
                <h2 id={titleId} className="history-dialog__title">
                  History of Rajasthan
                </h2>
              </div>
              <button
                type="button"
                className="history-dialog__close"
                onClick={() => setOpen(false)}
                aria-label="Close"
              >
                ×
              </button>
            </header>

            <div className="history-dialog__body">
              <p id={descId} className="history-dialog__lead">
                <strong>What is Rajasthan?</strong> Rajasthan is a major historical region and a modern
                Indian state in the north-west of the subcontinent. From the Aravalli belt to the Thar,
                from frontier defense to long-distance trade, from fort-based political culture to planned
                urban systems, its role has been central. It is not merely a “desert state”; it is a
                civilizational zone made of multiple ecological belts: arid desert tracts, semi-arid
                plains, hill-fort landscapes, river-linked agrarian pockets, and pilgrimage corridors.
                <br />
                <br />
                <strong>When did the name “Rajasthan” emerge?</strong> The term “Rajasthan” literally
                means “land of kings” (raja + sthan). In medieval and early modern records, this area was
                usually not treated as one uniform political unit, but as a constellation of regional
                polities (Mewar, Marwar, Dhundhar, Hadoti, Shekhawati, Mewat, and others). During the
                colonial period, “Rajputana” became the dominant administrative umbrella in British usage,
                especially through agency-based mapping of princely states. In the 20th century, the
                identity “Rajasthan” consolidated through regional-national political discourse, and after
                independence it was institutionalized through the multi-stage integration of princely
                states into a constitutional state.
                <br />
                <br />
                <strong>What names has this region carried over time?</strong>
                <br />
                1) <strong>Matsya</strong> - early textual-geographical memory in Itihasa-Puranic layers.
                <br />
                2) <strong>Sapadalaksha / Jangladesh / Maru</strong> - terms used in medieval
                inscriptions and textual traditions for distinct political-ecological zones.
                <br />
                3) <strong>Mewar, Marwar, Dhundhar, Hadoti, Shekhawati, Mewat</strong> - strong regional
                historical-cultural zones with distinct political trajectories and dialect continuums.
                <br />
                4) <strong>Rajputana</strong> - colonial administrative label, especially visible in
                British cartographic and bureaucratic records.
                <br />
                5) <strong>Rajasthan</strong> - modern integrative state identity in post-independence
                constitutional usage.
                <br />
                <br />
                <strong>Who used or popularized which name?</strong>
                <br />
                - Early textual traditions preserved names such as Matsya within civilizational memory.
                <br />
                - Regional courts, inscriptions, and bardic chronicles institutionalized zonal names such
                as Mewar and Marwar.
                <br />
                - The British colonial administrative system normalized “Rajputana” in official governance
                and map language.
                <br />
                - 20th-century political integration and post-1947 state formation stabilized “Rajasthan”
                as the definitive modern name.
              </p>

              <section className="history-section">
                <h3>1) Puranic and Itihasa references (what is mentioned)</h3>
                <p>
                  The region linked to present-day Rajasthan appears in layered textual memory through{' '}
                  <strong>Matsya</strong>, <strong>Shurasena-adjacent zones</strong>, and later
                  genealogical traditions tied to solar/lunar lineages. These references are civilizational
                  memory frameworks, not modern survey maps. Their significance lies in:
                </p>
                <ul>
                  <li>placing Rajasthan inside early dharmic-political imagination, not outside it;</li>
                  <li>
                    connecting sacred geography (rivers, hills, pilgrimage nodes) with later state
                    legitimacy;
                  </li>
                  <li>
                    explaining why medieval Rajput polities framed kingship as both martial duty and ritual
                    guardianship.
                  </li>
                </ul>
              </section>

              <section className="history-section">
                <h3>2) Flowchart timeline: from ancient cultures to modern state</h3>
                <div className="history-flow" aria-label="Rajasthan history flowchart">
                  {ERA_FLOW.map((item) => (
                    <article key={item.era} className="history-flow__card">
                      <p className="history-flow__years">{item.years}</p>
                      <h4>{item.era}</h4>
                      <p>{item.summary}</p>
                      <p className="history-flow__rulers">
                        <strong>Key rulers / powers:</strong> {item.rulers.join(' · ')}
                      </p>
                    </article>
                  ))}
                </div>
              </section>

              <section className="history-section">
                <h3>3) Major rulers and houses (high-importance list)</h3>
                <p>
                  Rajasthan history is multi-dynastic, not single-line. Influential houses include{' '}
                  <strong>Guhila/Sisodia (Mewar)</strong>, <strong>Kachhwaha (Amber/Jaipur)</strong>,{' '}
                  <strong>Rathore (Marwar/Jodhpur)</strong>, <strong>Bhati (Jaisalmer)</strong>,{' '}
                  <strong>Hada (Hadoti/Bundi-Kota)</strong>, and the earlier{' '}
                  <strong>Gurjara-Pratihara</strong> and <strong>Chahamana</strong> streams.
                </p>
                <ul>
                  <li>Rana Kumbha (15th c.): fortification, temple patronage, strategic architecture.</li>
                  <li>Maharana Sanga (early 16th c.): Rajput confederate military politics.</li>
                  <li>Maharana Pratap (16th c.): resistance memory, terrain warfare, symbolic sovereignty.</li>
                  <li>Raja Man Singh I (16th-17th c.): imperial command and Rajput-Mughal integration.</li>
                  <li>Sawai Jai Singh II (18th c.): Jaipur city planning, astronomy, administrative reform.</li>
                  <li>Maharaja Ganga Singh (late 19th-20th c.): modern institutions and canal-era transition.</li>
                </ul>
              </section>

              <section className="history-section">
                <h3>4) Year-wise map track (government / archival sources)</h3>
                <p>
                  A full year-by-year map atlas can be generated from official repositories and archival
                  map series. Below are source anchors for authoritative extraction and curation.
                </p>
                <div className="history-map-table" role="table" aria-label="Map source table">
                  {MAP_SOURCES.map((row) => (
                    <div className="history-map-table__row" key={`${row.period}-${row.years}`}>
                      <p>
                        <strong>{row.period}</strong> ({row.years})
                      </p>
                      <p>{row.scope}</p>
                      <p>
                        <a href={row.sourceUrl} target="_blank" rel="noreferrer">
                          {row.sourceLabel}
                        </a>
                      </p>
                    </div>
                  ))}
                </div>
                <p className="history-note">
                  Note: detailed year-wise boundary visualisations will be compiled in the next data layer
                  after map licensing + citation metadata is finalised.
                </p>
              </section>

              <section className="history-section">
                <h3>5) Post-independence: what changed after 1947</h3>
                <ul>
                  <li>
                    <strong>1948-1949 integration phase:</strong> Matsya Union and other princely unions
                    merged in stages toward Greater Rajasthan.
                  </li>
                  <li>
                    <strong>1949-1950 constitutional consolidation:</strong> administrative harmonisation,
                    legal unification, and transition from princely regimes to elected governance.
                  </li>
                  <li>
                    <strong>1956 reorganisation logic:</strong> modern state framework stabilised with
                    linguistic-administrative rationalisation.
                  </li>
                  <li>
                    <strong>Green and desert development arcs:</strong> irrigation expansion (including
                    canal systems), mining-industrial growth, tourism scaling, and urbanisation.
                  </li>
                </ul>
              </section>

              <section className="history-section">
                <h3>6) What Rajasthan gave India and the world</h3>
                <ul>
                  <li>
                    <strong>Statecraft and diplomacy models:</strong> frontier negotiation, alliance
                    politics, and courtly federal behaviour under changing empires.
                  </li>
                  <li>
                    <strong>Architecture and urbanism:</strong> hill forts, stepwells, walled cities,
                    planned Jaipur, water-smart design in arid ecology.
                  </li>
                  <li>
                    <strong>Military heritage:</strong> fort defense systems, cavalry memory, and national
                    armed service traditions.
                  </li>
                  <li>
                    <strong>Culture economy:</strong> textile crafts, miniature painting, music, oral epics,
                    festival tourism, and global heritage branding.
                  </li>
                  <li>
                    <strong>Strategic geography:</strong> western frontier significance and logistics value
                    in modern Indian security planning.
                  </li>
                </ul>
              </section>

              <section className="history-section">
                <h3>7) Why Rajasthan is a critical part of Bharat</h3>
                <p>
                  Rajasthan links desert and plain, north-west frontier and inland trade, sacred memory and
                  modern federal democracy. Without Rajasthan, India’s military history, architectural
                  canon, pilgrimage circuits, and tourism economy would be fundamentally incomplete. It is a
                  civilizational core, not a peripheral region.
                </p>
              </section>
            </div>
          </section>
        </div>
      ) : null}
    </>
  )
}
