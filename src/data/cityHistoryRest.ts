/**
 * City history accordions — same three-block shape as Ajmer/Alwar for every Rajasthan district slug.
 */
import type { CityHistoryBundle, HistorySection, HistoryTimelineEntry } from '@/data/cityHistory.types'

function timelineEntry(id: string, years: string, rulerOrEra: string, work: string): HistoryTimelineEntry {
  return { id, years, rulerOrEra, work }
}

function sec(
  id: string,
  eyebrow: string,
  title: string,
  paragraphs: [string, string],
  timelines: HistoryTimelineEntry[],
): HistorySection {
  return { id, eyebrow, title, paragraphs: [...paragraphs], timeline: timelines }
}

function historyBundle(
  citySlug: string,
  name: string,
  whatIsParagraphs: [string, string],
  s1: HistorySection,
  s2: HistorySection,
  s3: HistorySection,
): CityHistoryBundle {
  return {
    citySlug,
    whatIsTitle: `What is ${name}?`,
    whatIsParagraphs: [...whatIsParagraphs],
    sections: [s1, s2, s3],
  }
}

export const REST_CITY_HISTORIES: Record<string, CityHistoryBundle> = {
  jaipur: historyBundle(
    'jaipur',
    'Jaipur',
    [
      'Jaipur — the Pink City — was founded as a planned capital under Maharaja Jai Singh II in the 18th century, linking Rajput kingship with Mughal court etiquette and new astronomy. Amber’s older fort, Jaigarh’s cannon foundries, and Nahargarh’s ridge walls already spoke of Kachwaha power before the pink-walled grid took shape.',
      'Today it is Rajasthan’s capital: jewellery bazaars, palace museums, UNESCO observatories, and a highway hub toward Delhi and Agra — the story below moves from epic Saraswati memory and Dhundhar country to modern statehood.',
    ],
    sec(
      'puranic-ancient',
      'Puranic & ancient',
      'Epic Dhundhar, temple tanks, early trade',
      [
        'Regional memory ties the eastern Aravallis and Dhundhar country into broader epic and Puranic maps — pilgrim routes, clan geographies, and the hill forts that later became Rajput seats. Temple tanks and stepwells anchored settlement long before grid planning.',
        'From early medieval centuries, Kachwaha lineages and allied clans negotiated hills, passes, and the trade corridors toward Gujarat and Malwa — context for the later shift from Amber hill to Jaipur plain.',
      ],
      [
        timelineEntry('j1', 'Epic & regional memory', 'Dhundhar / eastern Aravallis', 'Puranic and folk maps place this belt in western Indian pilgrimage and kingdom lore — fortresses and tanks as sacred geography.'),
        timelineEntry('j2', 'Early medieval', 'Regional polities', 'Gurjara-Pratihara shadow and local Rajput networks contest passes and revenue routes.'),
        timelineEntry('j3', 'Pre-Jaipur capitals', 'Amber hill fort', 'Kachwaha power centres on defensible ridges before the 18th-century plain capital.'),
      ],
    ),
    sec(
      'medieval-early-modern',
      'Medieval & early modern',
      'Kachwahas, Mughal farmans, Jaipur foundation',
      [
        'The Kachwahas of Amber cultivated alliances with Mughal emperors — service, marriage, and ritual respect — in exchange for rank and protection in a competitive Rajput world. Jai Singh II’s reign (18th century) brought astronomy, Sanskrit learning, and the new city plan with its nine-grid geometry.',
        'Jaipur’s pink wash in honour of a Victorian prince visit is a modern layer on older markets — Johari and Tripolia bazaars still echo merchant capital and craft guilds.',
      ],
      [
        timelineEntry('j4', '16th–17th century', 'Mughal alliance', 'Kachwaha rajas serve imperial armies and diplomacy; Amber gains prestige.'),
        timelineEntry('j5', '1727 CE (trad.)', 'Jaipur city founded', 'Jai Singh II shifts capital to the plain — astronomy, planning, and courtly splendour.'),
        timelineEntry('j6', '18th–19th century', 'Maratha pressure & treaties', 'Revenue stress and British paramountcy reshape armies and borders.'),
      ],
    ),
    sec(
      'colonial-modern',
      'Colonial & modern',
      'Princely Jaipur, Rajasthan capital',
      [
        'Under British paramountcy Jaipur remained a premier princely state — railways, Anglo-vernacular schools, and polo clubs layered onto older bazaar networks. Independence merged princely states into Rajasthan with Jaipur emerging as state capital after reorganisation.',
        'Modern Jaipur balances heritage tourism, gem and textile industries, IT corridors, and electoral politics — Puranic memory, Mughal-era diplomacy, and democratic India on one map.',
      ],
      [
        timelineEntry('j7', '1818–1947', 'British paramountcy', 'Treaty networks — Jaipur as model princely administration.'),
        timelineEntry('j8', '1947', 'Independence', 'Accession to Indian Union; princely armies disband or integrate.'),
        timelineEntry('j9', '1956', 'States reorganisation', 'Jaipur capital of enlarged Rajasthan — modern district and metro growth.'),
      ],
    ),
  ),

  udaipur: historyBundle(
    'udaipur',
    'Udaipur',
    [
      'Udaipur — Mewar’s lake capital — grew around Lake Pichola after Maharana Udai Singh moved the seat from vulnerable Chittor. Island palaces, marble ghats, and Aravalli ridges frame a city that long defined Rajput honour in resistance narratives.',
      'Today it is a global leisure destination — rooftop weddings, craft studios, and wildlife edges toward Kumbhalgarh — yet still tied to the Sisodia story and Shrinathji pilgrimage circuits.',
    ],
    sec(
      'puranic-ancient',
      'Puranic & ancient',
      'Mewar hills, Eklingji, early polities',
      [
        'Mewar’s hills enter epic memory as forest kingdoms and ascetic sites — Shiva’s Eklingji patronage later ties dynastic legitimacy to the Maharanas. Lakes and tanks structured ritual time around water.',
        'Medieval centuries saw Sisodia claims to pre-eminence among Rajputs — fort-building, bardic chronicles, and alliances across Gujarat and Malwa.',
      ],
      [
        timelineEntry('u1', 'Ancient–medieval', 'Eklingji & regional shrines', 'Sacred landscape anchors Mewar identity before modern Udaipur.'),
        timelineEntry('u2', 'Medieval', 'Sisodia line', 'Chittor as earlier seat — fort epic and saka memory.'),
        timelineEntry('u3', '16th century', 'Shift toward Udaipur', 'Strategic move to lake country after Mughal pressure on Chittor.'),
      ],
    ),
    sec(
      'medieval-early-modern',
      'Medieval & early modern',
      'Chittor, Haldighati, palace building',
      [
        'From Sanga to Pratap, Mewar symbolised armed resistance and ritual honour — Haldighati (1576) became a national memory site. Mughal farmans and raids did not erase Sisodia rule; diplomacy and guerrilla tactics preserved core territories.',
        'Lake palaces and marble courts expanded under later Maharanas — blending Rajput, Mughal, and European decorative vocabularies.',
      ],
      [
        timelineEntry('u4', '1568', 'Fall of Chittor (episode)', 'Mughal siege — memory drives relocation projects.'),
        timelineEntry('u5', '1576', 'Haldighati', 'Pratap vs Mughal forces — symbolic Mewar resilience.'),
        timelineEntry('u6', '17th–18th century', 'Palace layers & Maratha networks', 'Construction, tribute, and survival between empires.'),
      ],
    ),
    sec(
      'colonial-modern',
      'Colonial & modern',
      'British treaties, tourism state',
      [
        'British paramountcy brought railways, schools, and hunting preserves — Mewar negotiated treaties while preserving internal ritual prestige. After 1947, merger into Rajasthan repositioned Udaipur as heritage and wedding economy hub.',
        'Today Udaipur links lakeside tourism with marble and miniature-painting studios — democratic Rajasthan with global hospitality brands.',
      ],
      [
        timelineEntry('u7', '1818', 'Treaty era', 'Mewar under British paramountcy — internal administration continues.'),
        timelineEntry('u8', '1947', 'Independence', 'Accession; later Rajasthan integration.'),
        timelineEntry('u9', 'Present', 'Heritage & tourism', 'Lake city as international leisure destination.'),
      ],
    ),
  ),

  jodhpur: historyBundle(
    'jodhpur',
    'Jodhpur',
    [
      'Jodhpur — Marwar’s sun city — spreads under Mehrangarh’s basalt cliff, a blue-washed old town and desert trade routes toward Gujarat and Sind. Rathore lineage, Mughal rank, and British-era treaties shaped its armies and merchants.',
      'Camel caravans, spice markets, and Jain silver houses still mark the economy — now joined by handicraft export and desert tourism.',
    ],
    sec(
      'puranic-ancient',
      'Puranic & ancient',
      'Thar edge, oasis towns, clan networks',
      [
        'Thar geography frames epic memory of desert kingdoms and oasis routes — water determined settlement and caravan trade toward the Indus and Gujarat coasts.',
        'Early medieval centuries saw Rathore migration and state-building in the Marwar tract — forts, temples, and bardic genealogies.',
      ],
      [
        timelineEntry('jd1', 'Regional memory', 'Desert & oases', 'Puranic and folk maps of western Rajasthan trade belts.'),
        timelineEntry('jd2', 'Medieval', 'Rathore consolidation', 'Clan networks and fortresses before Jodhpur’s rise.'),
        timelineEntry('jd3', 'Strategic site', 'Mehrangarh ridge', 'Natural fortress above the plain.'),
      ],
    ),
    sec(
      'medieval-early-modern',
      'Medieval & early modern',
      'Rathores, Mughal mansabs, Jodhpur court',
      [
        'Rathore rulers negotiated Mughal service and Rajput honour — mansabs, marriage alliances, and occasional rebellion. Jodhpur city expanded with palaces, stepwells, and Jain merchant patronage.',
        'Maratha finance and later British treaties reframed revenue — armies modernised, borders stabilised with neighbouring states.',
      ],
      [
        timelineEntry('jd4', '15th–17th century', 'Rathore–Mughal interface', 'Rank, tribute, and battlefield honour.'),
        timelineEntry('jd5', '18th century', 'Maratha pressure', 'Chauth and military finance.'),
        timelineEntry('jd6', '19th century', 'British paramountcy', 'Treaty Raj — internal reform and railways.'),
      ],
    ),
    sec(
      'colonial-modern',
      'Colonial & modern',
      'Princely Marwar, desert India',
      [
        'Jodhpur lancers and polo clubs symbolised princely modernity; railways linked desert produce to port cities. Independence merged Marwar into Rajasthan.',
        'Today Jodhpur is a desert tourism hub, military air presence, and export craft centre — blue city lanes with global Instagram traffic.',
      ],
      [
        timelineEntry('jd7', '1947', 'Independence', 'Accession to India Union.'),
        timelineEntry('jd8', '1956', 'Rajasthan', 'District in reorganised state.'),
        timelineEntry('jd9', 'Present', 'Tourism & trade', 'Mehrangarh as flagship monument economy.'),
      ],
    ),
  ),

  banswara: historyBundle(
    'banswara',
    'Banswara',
    [
      'Banswara sits in the wetter southern Aravallis — Mahi dams, tribal belts, and “hundred island” lake imagery where Gujarat and Rajasthan cultures overlap. Bhil and tribal communities shape local language, haats, and forest interfaces.',
      'Modern district administration overlays older kingdom memory — smaller capitals, forest rights debates, and irrigation grids.',
    ],
    sec('puranic-ancient', 'Puranic & ancient', 'Aravalli tribal belts, epic forest', [
      'Regional lore maps forest kingdoms and tribal geographies into broader epic memory — hills, dams, and seasonal rivers structure ritual calendars.',
      'Archaeology and oral history trace long settlement before modern borders — trade links toward Gujarat ports.',
    ], [timelineEntry('ba1', 'Ancient–medieval', 'Tribal polities', 'Hill belts and clan networks.'), timelineEntry('ba2', 'Regional memory', 'Mahi & forests', 'Water and forest as identity.'), timelineEntry('ba3', 'Pre-modern', 'Local rajadoms', 'Smaller courts before British maps.')]),
    sec('medieval-early-modern', 'Medieval & early modern', 'Rajput & tribal interface', [
      'Medieval and early modern states negotiated forest rights, tribute, and trade with larger neighbours — Maratha and British surveys later codified boundaries.',
      'Colonial forest policy and princely treaties reshaped access — precedents for today’s conservation debates.',
    ], [timelineEntry('ba4', '18th–19th century', 'Surveys & treaties', 'Boundary-making in tribal hills.'), timelineEntry('ba5', 'Princely era', 'Local courts', 'Administration under paramountcy.'), timelineEntry('ba6', 'Revenue', 'Forests & agriculture', 'Cash crops and migration.')]),
    sec('colonial-modern', 'Colonial & modern', 'District India, dams & rights', [
      'After Independence, tribal development schemes, dams, and electoral schedules reshaped daily life — Panchayati Raj and forest rights laws matter here.',
      'Today Banswara balances horticulture, migration remittances, and cultural tourism — adivasi fairs and monsoon landscapes.',
    ], [timelineEntry('ba7', '1947', 'Independence', 'Integration with Indian Union.'), timelineEntry('ba8', '1956', 'Rajasthan', 'District boundaries stabilise.'), timelineEntry('ba9', 'Present', 'Water & identity', 'Dams, forests, and tribal politics.')]),
  ),

  baran: historyBundle(
    'baran',
    'Baran',
    [
      'Baran anchors Hadoti’s quieter corner — river tanks, Shergarh fort memory, and routes toward Kota and Chambal. Agrarian cycles and coaching-town spillovers from neighbouring districts colour its economy.',
      'The district offers a slower pace than Kota — temples, picnic ghats, and heritage pockets along Hadoti’s stone country.',
    ],
    sec('puranic-ancient', 'Puranic & ancient', 'Hadoti rivers, ancient shrines', [
      'Hadoti’s rivers enter broader epic and folk maps of central India — forested hills and tanks as pilgrimage nodes.',
      'Early inscriptions and temple remains show long settlement along trade routes toward Malwa.',
    ], [timelineEntry('br1', 'Regional', 'Hadoti belt', 'River tanks and fort culture.'), timelineEntry('br2', 'Medieval', 'Local lineages', 'Rajput fortlets along trade paths.'), timelineEntry('br3', 'Cultural', 'Fairs & temples', 'Seasonal rhythm.')]),
    sec('medieval-early-modern', 'Medieval & early modern', 'Forts, Maratha maps', [
      'Medieval fortifications and village republics gave way to Mughal–Maratha revenue maps — later British gazetteers fixed district cores.',
      'Kota’s later prominence as court hub shaped neighbouring economies.',
    ], [timelineEntry('br4', '17th–18th century', 'Maratha networks', 'Revenue pressure on villages.'), timelineEntry('br5', '19th century', 'British maps', 'Gazetteer Baran tract.'), timelineEntry('br6', 'Education spillover', 'Kota proximity', 'Modern coaching economy nearby.')]),
    sec('colonial-modern', 'Colonial & modern', 'Free India, district Baran', [
      'Post-Independence irrigation and roads integrated Baran into Rajasthan’s development grid — district formation in republic era.',
      'Today: agriculture, small industry, and heritage day-trips from Kota.',
    ], [timelineEntry('br7', '1947', 'Independence', 'Princely state integration.'), timelineEntry('br8', '1991', 'District Baran (benchmark)', 'Modern administrative map.'), timelineEntry('br9', 'Present', 'Hadoti life', 'Rivers and quiet shrines.')]),
  ),

  barmer: historyBundle(
    'barmer',
    'Barmer',
    [
      'Barmer is Thar’s craft and sand country — ajrakh printing, wood carving, and border light toward Pakistan. Oilseeds, camels, and desert festivals colour the district’s soundscape.',
      'Ancient trade toward Sindh and Gujarat crossed this belt — medieval fortlets and Sufi shrines mark oasis towns.',
    ],
    sec('puranic-ancient', 'Puranic & ancient', 'Thar trade, oasis memory', [
      'Desert geography frames ancient caravan memory — salt, cloth, and livestock moving toward the coast.',
      'Local shrines and johads structured water and time long before modern canals.',
    ], [timelineEntry('bm1', 'Ancient trade', 'Caravan belts', 'Thar connectivity.'), timelineEntry('bm2', 'Medieval', 'Oasis towns', 'Fortlets and shrines.'), timelineEntry('bm3', 'Clans', 'Pastoral networks', 'Camel and sheep economies.')]),
    sec('medieval-early-modern', 'Medieval & early modern', 'Rajput houses, Jodhpur orbit', [
      'Medieval Rajput states and Jodhpur’s Marwar orbit shaped Barmer’s forts and revenue — Mughal farmans and desert warfare.',
      'Colonial surveys mapped famine and grazing rights — precedents for border management.',
    ], [timelineEntry('bm4', 'Marwar linkage', 'Rathore maps', 'Desert suzerainty.'), timelineEntry('bm5', '19th century', 'British gazetteers', 'Famine and trade records.'), timelineEntry('bm6', 'Craft', 'Textile heritage', 'Block print lineages.')]),
    sec('colonial-modern', 'Colonial & modern', 'Border district, festival India', [
      'Partition and border fencing altered old routes — modern Barmer balances security, craft export, and desert tourism.',
      'Desert Festival and cultural programmes showcase folk performance — democratic India’s borderland.',
    ], [timelineEntry('bm7', '1947', 'Partition context', 'Route shifts.'), timelineEntry('bm8', 'State era', 'Rajasthan district', 'Infrastructure push.'), timelineEntry('bm9', 'Present', 'Craft & sand', 'Tourism and resilience.')]),
  ),

  bharatpur: historyBundle(
    'bharatpur',
    'Bharatpur',
    [
      'Bharatpur rose as a Jat kingdom famous for impregnable Lohagarh and wetland birding at Keoladeo — Braj culture, Krishna memory, and Mughal–Maratha contests meet here near Agra.',
      'Modern Bharatpur is a golden-triangle satellite — birders, fort visitors, and Deeg palaces on the same circuit.',
    ],
    sec('puranic-ancient', 'Puranic & ancient', 'Braj, Krishna geography', [
      'Braj bhoomi links Bharatpur into Krishna pilgrimage maps — groves, ghats, and seasonal rasas.',
      'Early polities and Jat clan networks farmed the Gangetic fringe — wetlands as sacred resource.',
    ], [timelineEntry('bh1', 'Epic memory', 'Braj', 'Pilgrimage belt.'), timelineEntry('bh2', 'Medieval', 'Jat consolidation', 'Village republics and militias.'), timelineEntry('bh3', 'Wetlands', 'Keoladeo basin', 'Water as kingdom asset.')]),
    sec('medieval-early-modern', 'Medieval & early modern', 'Jat kingdoms, Mughal wars', [
      'Bharatpur’s rulers defied imperial armies — Lohagarh’s siege legends. Maratha alliances and British treaties followed.',
      'Deeg’s fountains and Mughal garden vocabulary show courtly ambition.',
    ], [timelineEntry('bh4', '18th century', 'Siege fame', 'Lohagarh resilience.'), timelineEntry('bh5', 'Treaties', 'British paramountcy', 'Revenue settlements.'), timelineEntry('bh6', 'Court culture', 'Deeg palaces', 'Fountain architecture.')]),
    sec('colonial-modern', 'Colonial & modern', 'Birding capital, NCR tourism', [
      'Keoladeo became a protected area — global birding icon. Green revolution farming changed surrounding fields.',
      'Today Bharatpur balances conservation, highway traffic, and Braj festivals — electoral democracy and tourism revenue.',
    ], [timelineEntry('bh7', '1947', 'Independence', 'Accession.'), timelineEntry('bh8', '1970s–80s', 'Park status', 'Wildlife protection milestones.'), timelineEntry('bh9', 'Present', 'Birds & Braj', 'Tourism economy.')]),
  ),

  bhilwara: historyBundle(
    'bhilwara',
    'Bhilwara',
    [
      'Bhilwara is Rajasthan’s textile engine — spinning, weaving, and garment clusters on the Jaipur–Udaipur corridor. Temple towns and Aravalli foothills punctuate an industrial landscape.',
      'Historically a Mewar–Malwa transition belt — trade routes and local shrines long before mills.',
    ],
    sec('puranic-ancient', 'Puranic & ancient', 'Temple towns, trade', [
      'Regional shrines and fairs anchored agrarian markets — Jain and Vaishnav networks across Malwa links.',
      'Early medieval polities contested the fertile pockets between hills and plains.',
    ], [timelineEntry('bw1', 'Sacred', 'Local tirths', 'Pilgrim economy.'), timelineEntry('bw2', 'Trade', 'Malwa links', 'Cloth and grain routes.'), timelineEntry('bw3', 'Medieval', 'Clan networks', 'Rajput and merchant houses.')]),
    sec('medieval-early-modern', 'Medieval & early modern', 'Mewar orbit, revenue maps', [
      'Mewar suzerainty and Maratha surveys shaped land revenue — British gazetteers documented castes and crafts.',
      'Colonial cotton markets foreshadowed modern textile clusters.',
    ], [timelineEntry('bw4', '18th century', 'Revenue pressure', 'Maratha era.'), timelineEntry('bw5', '19th century', 'British maps', 'Gazetteer Bhilwara tract.'), timelineEntry('bw6', 'Craft seeds', 'Weaver communities', 'Pre-mill industry.')]),
    sec('colonial-modern', 'Colonial & modern', 'Manchester of Rajasthan', [
      'Post-Independence textile mills and power looms scaled up — migration and urban growth.',
      'Today Bhilwara mixes industry, temples, and highway logistics — district HQ in democratic Rajasthan.',
    ], [timelineEntry('bw7', '1947', 'Independence', 'Integration.'), timelineEntry('bw8', 'Industrial era', 'Textile boom', 'National market.'), timelineEntry('bw9', 'Present', 'Cloth & jobs', 'Export and MSMEs.')]),
  ),

  bikaner: historyBundle(
    'bikaner',
    'Bikaner',
    [
      'Bikaner — Rao Bika’s desert capital — built Junagarh inside the city and camel-riding Rathore power on the old Silk Route toward Central Asia. Bhujia, sweets, and Jain temples mark merchant culture.',
      'Thar grazing, Indira Gandhi Canal edges, and military bases — modern Bikaner is still a frontier town with palace hotels.',
    ],
    sec('puranic-ancient', 'Puranic & ancient', 'Desert kingdoms, caravan memory', [
      'Thar trade routes and Jain pilgrimage maps shaped oasis settlement — water temples and bardic genealogies.',
      'Early medieval polities contested grazing and tribute in the sand.',
    ], [timelineEntry('bk1', 'Trade', 'Caravan routes', 'Salt and cloth.'), timelineEntry('bk2', 'Sacred', 'Jain networks', 'Desert temples.'), timelineEntry('bk3', 'Clans', 'Rathore migration', 'State-building story.')]),
    sec('medieval-early-modern', 'Medieval & early modern', 'Rao Bika, Mughal rank', [
      'Bikaner’s rulers cultivated Mughal service — rank, artillery, and marriage alliances. Junagarh’s palaces layer Rajput and Mughal aesthetics.',
      'British-era railways and famine administration reshaped desert life.',
    ], [timelineEntry('bk4', '15th century', 'Foundation', 'Rao Bika’s capital.'), timelineEntry('bk5', '17th–18th century', 'Imperial service', 'Mansabs and diplomacy.'), timelineEntry('bk6', '19th century', 'Railways', 'Desert integration.')]),
    sec('colonial-modern', 'Colonial & modern', 'Canal era, tourism', [
      'Canal irrigation brought new green belts — demographic shifts. Independence merged Bikaner into Rajasthan.',
      'Camel Festival, desert tourism, and snack exports — global brand for bhujia.',
    ], [timelineEntry('bk7', '1947', 'Independence', 'Accession.'), timelineEntry('bk8', 'Canal age', 'IG canal', 'Agriculture change.'), timelineEntry('bk9', 'Present', 'Heritage & snacks', 'Palace hotels.')]),
  ),

  bundi: historyBundle(
    'bundi',
    'Bundi',
    [
      'Bundi’s compact blue city lies under Taragarh — stepwell poetry, Nawal Sagar’s reflections, and Hadoti miniature painting lineages. Hada Rajput memory ties the town to Kota’s later split.',
      'Artists, fort lovers, and slow travellers choose Bundi for lanes larger cities lost.',
    ],
    sec('puranic-ancient', 'Puranic & ancient', 'Hadoti hills, sacred water', [
      'Sacred geography and seasonal rivers structured early settlement — stepwells as ritual and social infrastructure.',
      'Hada clan networks emerged in the hill forts above the plain.',
    ], [timelineEntry('bu1', 'Water', 'Stepwells', 'Community infrastructure.'), timelineEntry('bu2', 'Clans', 'Hada Rajputs', 'Fort polities.'), timelineEntry('bu3', 'Sacred', 'Krishna & local shrines', 'Hadoti culture.')]),
    sec('medieval-early-modern', 'Medieval & early modern', 'Hada courts, Mughal maps', [
      'Bundi’s court patronised painting and architecture — Mughal alliances and occasional conflict. Kota split as a junior line grew.',
      'Maratha revenue pressure and British treaties followed.',
    ], [timelineEntry('bu4', '16th–17th century', 'Court culture', 'Miniature schools.'), timelineEntry('bu5', '18th century', 'Kota bifurcation', 'Sibling states.'), timelineEntry('bu6', '19th century', 'Paramountcy', 'Treaty Raj.')]),
    sec('colonial-modern', 'Colonial & modern', 'Heritage Bundi', [
      'Princely Bundi merged into Rajasthan — tourism rediscovered stepwells and frescoes.',
      'Today: small hotels, heritage walks, and monsoon photography — democratic India’s slow lane.',
    ], [timelineEntry('bu7', '1947', 'Independence', 'Accession.'), timelineEntry('bu8', 'Post-1947', 'Rajasthan state', 'District identity.'), timelineEntry('bu9', 'Present', 'Tourism & art', 'Stepwell revival.')]),
  ),

  chittorgarh: historyBundle(
    'chittorgarh',
    'Chittorgarh',
    [
      'Chittor — Sisodia honour’s epicentre — carries Padmini memory, tower silence, and the largest fort footprint in India. Gambhir valleys and monsoon clouds frame UNESCO-scale walls.',
      'Modern Chittorgarh is a railway junction and pilgrimage node — Maharana Pratap jayanti draws national crowds.',
    ],
    sec('puranic-ancient', 'Puranic & ancient', 'Mewar ridge, sacred fort', [
      'Early fort myths and bardic chronicles tie Chittor to dynastic legitimacy — water bodies and temples inside the walls.',
      'Regional trade routes linked Malwa and Gujarat — fort as revenue magnet.',
    ], [timelineEntry('ch1', 'Early medieval', 'Sisodia seat', 'Fort epic.'), timelineEntry('ch2', 'Sacred', 'Temples & kunds', 'Ritual geography.'), timelineEntry('ch3', 'Trade', 'Highland routes', 'Caravan tolls.')]),
    sec('medieval-early-modern', 'Medieval & early modern', 'Sieges, Mughal pressure', [
      'Alauddin’s siege (1303) and later Akbar campaigns mark imperial memory — jauhar narratives of honour.',
      'Shift of capital to Udaipur did not erase Chittor’s symbolic power.',
    ], [timelineEntry('ch4', '1303', 'Alauddin siege', 'Iconic memory.'), timelineEntry('ch5', '1568', 'Akbar campaign', 'Fort resettlement debates.'), timelineEntry('ch6', '17th–18th century', 'Symbolic ruin', 'Pilgrimage and repair.')]),
    sec('colonial-modern', 'Colonial & modern', 'Monument India', [
      'British-era conservation and ASI work stabilised towers — post-Independence tourism and roads scaled access.',
      'Today: UNESCO nomination, sound-and-light, and Pratap festivals — electoral Rajasthan with global visitors.',
    ], [timelineEntry('ch7', 'ASI era', 'Conservation', 'Monument protection.'), timelineEntry('ch8', '1947', 'Independence', 'Integration.'), timelineEntry('ch9', 'Present', 'Heritage icon', 'Tourism economy.')]),
  ),

  churu: historyBundle(
    'churu',
    'Churu',
    [
      'Churu anchors Shekhawati’s painted havelis — merchant wealth from opium and trade, frescoed facades in Ramgarh, Fatehpur, and Sardarshahar. Camel fairs punctuate semi-arid light.',
      'A Delhi–Bikaner highway grid town — fewer monuments than forts, more open-air art history.',
    ],
    sec('puranic-ancient', 'Puranic & ancient', 'Desert trade, merchant lore', [
      'Shekhawati’s wells and caravan routes structured settlement — Jain and Vaishnav patronage.',
      'Early modern merchant networks linked Calcutta and Bombay trade to the interior.',
    ], [timelineEntry('cu1', 'Trade', 'Caravan towns', 'Opium-era wealth.'), timelineEntry('cu2', 'Sacred', 'Temple networks', 'Shekhawati shrines.'), timelineEntry('cu3', 'Clans', 'Merchant families', 'Haveli foundations.')]),
    sec('medieval-early-modern', 'Medieval & early modern', 'Rajput estates, Company maps', [
      'Rajput thikanas and Maratha revenue maps overlaid merchant towns — British thikana lists codified status.',
      'Fresco cycles peaked in the 19th century — mythological and European motifs.',
    ], [timelineEntry('cu4', '18th century', 'Maratha era', 'Revenue pressure.'), timelineEntry('cu5', '19th century', 'Fresco boom', 'Merchant competition.'), timelineEntry('cu6', 'British', 'Thikana lists', 'Administrative maps.')]),
    sec('colonial-modern', 'Colonial & modern', 'Heritage Shekhawati', [
      'Post-Independence drought and migration shifted demographics — heritage tourism revived haveli hotels.',
      'Today: weekend Delhi traffic, art walks, and fading paint conservation debates.',
    ], [timelineEntry('cu7', '1947', 'Independence', 'Integration.'), timelineEntry('cu8', 'Heritage tourism', '1990s–2000s', 'Haveli hotels.'), timelineEntry('cu9', 'Present', 'Fresco economy', 'Restoration ethics.')]),
  ),

  dausa: historyBundle(
    'dausa',
    'Dausa',
    [
      'Dausa is the gateway to Meena hills and Chand Baori at Abhaneri — Jaipur–Agra highway traffic, village temples, and harvest rhythms between two megacity corridors.',
      'District memory ties into eastern Rajasthan’s agrarian and tribal interfaces.',
    ],
    sec('puranic-ancient', 'Puranic & ancient', 'Stepwell country, sacred tanks', [
      'Abhaneri’s stepwells show medieval water engineering — ritual and social infrastructure in dry belts.',
      'Regional shrines and fairs structure local time.',
    ], [timelineEntry('da1', 'Water', 'Baoris', 'Community architecture.'), timelineEntry('da2', 'Tribal', 'Meena belts', 'Hill villages.'), timelineEntry('da3', 'Trade', 'Highway ancestors', 'Caravan precursors.')]),
    sec('medieval-early-modern', 'Medieval & early modern', 'Jaipur orbit, Kachwaha maps', [
      'Kachwaha suzerainty linked Dausa to Jaipur court — revenue assignments and thikana lists.',
      'Colonial gazetteers documented castes and irrigation.',
    ], [timelineEntry('da4', '18th century', 'Jaipur linkage', 'Administrative ties.'), timelineEntry('da5', '19th century', 'British maps', 'District records.'), timelineEntry('da6', 'Agrarian', 'Canals & wells', 'Water disputes.')]),
    sec('colonial-modern', 'Colonial & modern', 'NH-11, Abhaneri tourism', [
      'Post-Independence roads and buses scaled tourism to stepwells — NCR weekend traffic.',
      'Today: district HQ, agriculture, and commuter economy toward Jaipur.',
    ], [timelineEntry('da7', '1947', 'Independence', 'Integration.'), timelineEntry('da8', 'Highway era', 'Tourism', 'Abhaneri fame.'), timelineEntry('da9', 'Present', 'Corridor town', 'Agra–Jaipur hop.')]),
  ),

  dholpur: historyBundle(
    'dholpur',
    'Dholpur',
    [
      'Dholpur’s red sandstone quarries supplied Mughal Delhi — Machkund kunds, riverside forts, and Chambal ravines where dacoit lore meets gharial conservation. Border geometry with MP and UP.',
      'Quiet district capital with Mughal–Rajput fort layers and birding along the river.',
    ],
    sec('puranic-ancient', 'Puranic & ancient', 'Chambal memory, sacred kunds', [
      'River mythology and seasonal floods structured sacred sites — kunds as pilgrimage nodes.',
      'Ancient polities traded sandstone toward the Gangetic plain.',
    ], [timelineEntry('dh1', 'Rivers', 'Chambal', 'Sacred and dangerous.'), timelineEntry('dh2', 'Stone', 'Quarries', 'Building material export.'), timelineEntry('dh3', 'Early polities', 'Regional forts', 'Borderland maps.')]),
    sec('medieval-early-modern', 'Medieval & early modern', 'Mughal campaigns, Jat houses', [
      'Mughal armies campaigned across Dholpur’s terrain — later Jat states and British treaties fixed the map.',
      'Ravine ecology resisted easy revenue extraction.',
    ], [timelineEntry('dh4', 'Mughal era', 'Campaigns', 'Fort control.'), timelineEntry('dh5', '18th–19th century', 'Jat states', 'Treaty networks.'), timelineEntry('dh6', 'British', 'Ravine maps', 'Survey challenges.')]),
    sec('colonial-modern', 'Colonial & modern', 'Conservation & quarries', [
      'Post-Independence irrigation and wildlife laws reshaped Chambal use — quarry regulation and eco-tourism.',
      'Today: stone industry, river ethics, and Agra–Gwalior road tourism.',
    ], [timelineEntry('dh7', '1947', 'Independence', 'Integration.'), timelineEntry('dh8', 'Wildlife', 'Gharial & sanctuary', 'Conservation frames.'), timelineEntry('dh9', 'Present', 'Stone & river', 'Border district.')]),
  ),

  dungarpur: historyBundle(
    'dungarpur',
    'Dungarpur',
    [
      'Dungarpur’s marble palaces and lake piers sit in wetter southern Aravallis — Bhil and tribal-majority belts, Gujarat-border trade, and monsoon-green hills.',
      'A softer Mewar-adjacent culture — smaller courts, intricate mirror-work, and forest interfaces.',
    ],
    sec('puranic-ancient', 'Puranic & ancient', 'Aravalli tribal belts', [
      'Hill forests and seasonal rivers anchor tribal lore and shrine networks — trade toward Gujarat ports.',
      'Early polities negotiated forest rights and tribute.',
    ], [timelineEntry('du1', 'Forests', 'Tribal belts', 'Rights and ritual.'), timelineEntry('du2', 'Trade', 'Gujarat links', 'Marble and grain.'), timelineEntry('du3', 'Sacred', 'Local shrines', 'Fair calendars.')]),
    sec('medieval-early-modern', 'Medieval & early modern', 'Banswara–Dungarpur courts', [
      'Medieval Rajput states and Maratha surveys shaped revenue — princely Dungarpur under British paramountcy.',
      'Colonial forest policy framed later conservation debates.',
    ], [timelineEntry('du4', 'Princely era', 'Local court', 'Marble patronage.'), timelineEntry('du5', '19th century', 'Paramountcy', 'Treaty maps.'), timelineEntry('du6', 'Forests', 'Policy', 'Reserved forests.')]),
    sec('colonial-modern', 'Colonial & modern', 'District Dungarpur', [
      'Post-Independence tribal development schedules and Panchayati Raj — migration and horticulture.',
      'Today: palace tourism, tribal art markets, and monsoon drives — democratic India’s green corner.',
    ], [timelineEntry('du7', '1947', 'Independence', 'Integration.'), timelineEntry('du8', 'Schedules', 'Tribal development', 'Policy layers.'), timelineEntry('du9', 'Present', 'Marble & hills', 'Tourism niche.')]),
  ),

  hanumangarh: historyBundle(
    'hanumangarh',
    'Hanumangarh',
    [
      'Hanumangarh sits on the Ghaggar plain — Indus–Saraswati archaeology at Kalibangan, cold winters, and Punjab-border wheat fields. Fort Hanumangarh overlooks irrigated grids.',
      'Ancient mound cities and Harappan links draw scholars; modern life is agrarian and railway-heavy.',
    ],
    sec('puranic-ancient', 'Puranic & ancient', 'Saraswati memory, mounds', [
      'Regional geography ties to Vedic river debates — archaeological mounds as evidence of urban beginnings.',
      'Medieval fort towns guarded the plain toward Multan and Delhi.',
    ], [timelineEntry('ha1', 'Archaeology', 'Kalibangan', 'Harappan belt.'), timelineEntry('ha2', 'Epic maps', 'Saraswati lore', 'Sacred geography.'), timelineEntry('ha3', 'Medieval', 'Fort towns', 'Border defence.')]),
    sec('medieval-early-modern', 'Medieval & early modern', 'Punjab wars, Sikh maps', [
      'Mughal and Sikh-era campaigns crossed the plain — later British cantonments and canal surveys.',
      'Railways linked Karachi–Lahore lines to interior grain markets.',
    ], [timelineEntry('ha4', '18th–19th century', 'Campaign belt', 'Military geography.'), timelineEntry('ha5', 'Canal era', 'Irrigation', 'Agricultural change.'), timelineEntry('ha6', 'Railways', 'Connectivity', 'Grain exports.')]),
    sec('colonial-modern', 'Colonial & modern', 'Green revolution edge', [
      'Post-Partition border shifts remade trade — green revolution intensified wheat.',
      'Today: cold waves, fog delays, and archaeology tourism — democratic India’s northern Rajasthan.',
    ], [timelineEntry('ha7', '1947', 'Partition', 'Route shifts.'), timelineEntry('ha8', 'Green revolution', 'Wheat belt', 'Yield boom.'), timelineEntry('ha9', 'Present', 'Archaeology & ag', 'District HQ.')]),
  ),

  jaisalmer: historyBundle(
    'jaisalmer',
    'Jaisalmer',
    [
      'Jaisalmer — golden fort on the Silk Route — rose under Bhati Rajputs; Jain temples and merchant havelis inside living walls. Thar sand, border trade, and desert festivals define global image.',
      'Modern India: border tourism, wind farms, and military logistics — camel corps memory.',
    ],
    sec('puranic-ancient', 'Puranic & ancient', 'Desert kingdoms, Jain trade', [
      'Thar trade routes and Jain pilgrimage tied oasis towns to Gujarat and Sindh — water temples and merchant ethics.',
      'Early medieval Bhati consolidation in Jaisalmer’s ridge.',
    ], [timelineEntry('ja1', 'Trade', 'Silk Route', 'Caravan cities.'), timelineEntry('ja2', 'Sacred', 'Jain temples', 'Fort shrines.'), timelineEntry('ja3', 'Clans', 'Bhati Rajputs', 'Desert state.')]),
    sec('medieval-early-modern', 'Medieval & early modern', 'Bhati courts, Mughal farmans', [
      'Bhati rulers negotiated Mughal rank and desert autonomy — haveli wealth from opium and cloth.',
      'British-era boundary-making and famine administration.',
    ], [timelineEntry('ja4', '15th–17th century', 'Fort city', 'Golden limestone.'), timelineEntry('ja5', '18th century', 'Trade wealth', 'Merchant havelis.'), timelineEntry('ja6', '19th century', 'Railways', 'Desert integration.')]),
    sec('colonial-modern', 'Colonial & modern', 'Border Rajasthan, tourism', [
      'Partition closed western routes — tourism and military roads reoriented economy.',
      'Desert Festival, dunes camps, and heritage hotels — Instagram’s favourite fort.',
    ], [timelineEntry('ja7', '1947', 'Partition', 'Trade shock.'), timelineEntry('ja8', 'Border era', 'Security & roads', 'Infrastructure.'), timelineEntry('ja9', 'Present', 'Tourism & wind', 'Renewable projects.')]),
  ),

  jalore: historyBundle(
    'jalore',
    'Jalore',
    [
      'Jalore’s granite fort commands spice routes toward Gujarat — Chauhan-era memory, marble quarries, and quieter desert than Jodhpur. Mount Abu lies nearby across the hills.',
      'Agriculture and stone industry dominate today’s map.',
    ],
    sec('puranic-ancient', 'Puranic & ancient', 'Aravalli passes, trade', [
      'Hill passes linked Malwa and Gujarat — temples and tanks at nodes.',
      'Chauhan genealogies tie Jalore to broader Rajasthan hero narratives.',
    ], [timelineEntry('jl1', 'Passes', 'Strategic hills', 'Fort geography.'), timelineEntry('jl2', 'Medieval', 'Chauhan links', 'Rajput memory.'), timelineEntry('jl3', 'Trade', 'Spice & salt', 'Caravan tolls.')]),
    sec('medieval-early-modern', 'Medieval & early modern', 'Sieges, sultanate maps', [
      'Jalore fort features in sultanate campaigns — later Marwar and Mughal revenue maps.',
      'British gazetteers documented agriculture and quarries.',
    ], [timelineEntry('jl4', 'Medieval wars', 'Fort sieges', 'Delhi Sultanate memory.'), timelineEntry('jl5', '18th century', 'Maratha era', 'Revenue pressure.'), timelineEntry('jl6', '19th century', 'British maps', 'District records.')]),
    sec('colonial-modern', 'Colonial & modern', 'Stone & spice', [
      'Post-Independence marble industry scaled — highway links to Ahmedabad.',
      'Today: fort tourism, stone yards, and Abu day-trips — democratic Rajasthan’s western edge.',
    ], [timelineEntry('jl7', '1947', 'Independence', 'Integration.'), timelineEntry('jl8', 'Industry', 'Marble', 'Export yards.'), timelineEntry('jl9', 'Present', 'Fort & stone', 'Local tourism.')]),
  ),

  jhalawar: historyBundle(
    'jhalawar',
    'Jhalawar',
    [
      'Jhalawar — Chandrabhaga river country — holds Gagron’s UNESCO fort, Kolvi Buddhist caves, and Hadoti temple clusters. Greener than western Rajasthan; Kota’s neighbour with its own court history.',
      'Agriculture, small industry, and heritage circuits toward Bhopal and Malwa.',
    ],
    sec('puranic-ancient', 'Puranic & ancient', 'River Hadoti, sacred ghats', [
      'River geography ties to broader Malwa–Hadoti pilgrimage maps — Buddhist remains show early cosmopolitan links.',
      'Temple architecture and stepwells mark local time.',
    ], [timelineEntry('jh1', 'Buddhist', 'Kolvi caves', 'Ancient links.'), timelineEntry('jh2', 'Rivers', 'Chandrabhaga', 'Sacred water.'), timelineEntry('jh3', 'Temples', 'Hadoti style', 'Regional schools.')]),
    sec('medieval-early-modern', 'Medieval & early modern', 'Gagron fort, Malwa wars', [
      'Gagron’s confluence fort saw imperial campaigns — Mughal and Malwa contests. Jhalawar state under British paramountcy.',
      'Revenue maps linked agriculture to river irrigation.',
    ], [timelineEntry('jh4', 'UNESCO', 'Gagron', 'Fortified history.'), timelineEntry('jh5', '19th century', 'Jhalawar state', 'Princely administration.'), timelineEntry('jh6', 'Treaties', 'British paramountcy', 'Revenue settlement.')]),
    sec('colonial-modern', 'Colonial & modern', 'District Jhalawar', [
      'Post-Independence integration into Rajasthan — irrigation projects and roads.',
      'Today: heritage tourism, agriculture, and education hubs — democratic India’s Hadoti corner.',
    ], [timelineEntry('jh7', '1947', 'Independence', 'Accession.'), timelineEntry('jh8', 'Rajasthan', 'District map', 'Administrative HQ.'), timelineEntry('jh9', 'Present', 'Heritage & farms', 'Tourism circuits.')]),
  ),

  jhunjhunu: historyBundle(
    'jhunjhunu',
    'Jhunjhunu',
    [
      'Jhunjhunu — Shekhawati’s fresco heart — Rani Sati shrines, merchant havelis, and Mandawa’s weekend tourism. Opium-era wealth painted mythological cycles on walls.',
      'Delhi weekend traffic and heritage hotel economy — open-air museum country.',
    ],
    sec('puranic-ancient', 'Puranic & ancient', 'Merchant lore, sacred shrines', [
      'Shekhawati’s wells and caravan towns linked interior to Calcutta trade — Jain and Vaishnav networks.',
      'Rani Sati tradition and local kuldevi memory structure social time.',
    ], [timelineEntry('jj1', 'Trade', 'Opium-era wealth', 'Haveli funds.'), timelineEntry('jj2', 'Sacred', 'Rani Sati', 'Pilgrimage networks.'), timelineEntry('jj3', 'Clans', 'Merchant families', 'Marwari maps.')]),
    sec('medieval-early-modern', 'Medieval & early modern', 'Thikanas, Company lists', [
      'Rajput thikanas and Maratha revenue overlaid merchant towns — British maps codified status.',
      'Fresco cycles peaked in the 19th century.',
    ], [timelineEntry('jj4', '18th century', 'Maratha era', 'Revenue maps.'), timelineEntry('jj5', '19th century', 'Fresco boom', 'Competitive patronage.'), timelineEntry('jj6', 'British', 'Thikana records', 'Administrative lists.')]),
    sec('colonial-modern', 'Colonial & modern', 'Heritage tourism', [
      'Post-Independence migration and drought shifted demographics — tourism revived painted towns.',
      'Today: film shoots, art walks, and haveli hotels — NCR’s weekend Rajasthan.',
    ], [timelineEntry('jj7', '1947', 'Independence', 'Integration.'), timelineEntry('jj8', 'Heritage boom', '1990s+', 'Tourism economy.'), timelineEntry('jj9', 'Present', 'Fresco towns', 'Mandawa circuit.')]),
  ),

  karauli: historyBundle(
    'karauli',
    'Karauli',
    [
      'Karauli — Yaduvanshi palace town — pink City Palace, Kaila Devi sanctuary approaches, and Chambal ravines. Off the main triangle but rich in faith and wildlife edges.',
      'Braj culture blends with Rajput courtly forms — quieter than Jaipur or Bharatpur.',
    ],
    sec('puranic-ancient', 'Puranic & ancient', 'Braj, Yadu memory', [
      'Braj geography and Yaduvanshi genealogies tie Karauli into Krishna landscape memory — forested hills toward sanctuary belts.',
      'Temple networks and seasonal fairs structure local calendars.',
    ], [timelineEntry('ka1', 'Sacred', 'Kaila Devi', 'Shakti pilgrimage.'), timelineEntry('ka2', 'Genealogy', 'Yaduvanshi', 'Court legitimacy.'), timelineEntry('ka3', 'Forests', 'Sanctuary edges', 'Wildlife lore.')]),
    sec('medieval-early-modern', 'Medieval & early modern', 'Karauli court, Mughal maps', [
      'Karauli’s rulers negotiated Mughal rank and Maratha revenue — palace building and ritual calendars.',
      'British treaties and thikana lists followed.',
    ], [timelineEntry('ka4', '16th–18th century', 'Court culture', 'Palace layers.'), timelineEntry('ka5', '19th century', 'Paramountcy', 'Treaty Raj.'), timelineEntry('ka6', 'Chambal', 'Ravine ecology', 'Bandit lore.')]),
    sec('colonial-modern', 'Colonial & modern', 'Palace tourism', [
      'Post-Independence merger into Rajasthan — wildlife laws and road access to sanctuaries.',
      'Today: palace hotels, Kaila Devi pilgrim flows, and Ranthambhore combo trips.',
    ], [timelineEntry('ka7', '1947', 'Independence', 'Accession.'), timelineEntry('ka8', 'Post-1947', 'Rajasthan state', 'District identity.'), timelineEntry('ka9', 'Present', 'Faith & wildlife', 'Tourism niche.')]),
  ),

  kota: historyBundle(
    'kota',
    'Kota',
    [
      'Kota — Hadoti’s coaching capital — sits on the Chambal with Garh Palace museums, riverside gardens, and Seven Wonders Park. Bundi’s junior line grew into a separate state under British maps.',
      'Modern Kota mixes student hostels, textile units, and riverfront ethics debates.',
    ],
    sec('puranic-ancient', 'Puranic & ancient', 'Chambal sacred, Hadoti temples', [
      'Chambal’s ghats and temples structure river memory — Hadoti architecture and stepwell culture.',
      'Early medieval polities contested the fertile Chambal valley.',
    ], [timelineEntry('ko1', 'Rivers', 'Chambal', 'Sacred and economic.'), timelineEntry('ko2', 'Temples', 'Hadoti style', 'Regional schools.'), timelineEntry('ko3', 'Clans', 'Hada–Kota split', 'Sibling states.')]),
    sec('medieval-early-modern', 'Medieval & early modern', 'Kota state, British treaties', [
      'Kota’s court patronised miniature painting and river forts — Maratha revenue pressure and British paramountcy.',
      'Railways and irrigation projects changed demography.',
    ], [timelineEntry('ko4', '17th–18th century', 'Kota court', 'Palace culture.'), timelineEntry('ko5', '19th century', 'Paramountcy', 'Administrative maps.'), timelineEntry('ko6', 'Railways', 'Connectivity', 'Trade boom.')]),
    sec('colonial-modern', 'Colonial & modern', 'Coaching & industry', [
      'Post-Independence integration — engineering and medical coaching industry scaled globally.',
      'Today: student economy, Chambal boat ethics, and Bundi day-trips — democratic India’s exam town.',
    ], [timelineEntry('ko7', '1947', 'Independence', 'Accession.'), timelineEntry('ko8', 'Coaching boom', '1990s+', 'Education industry.'), timelineEntry('ko9', 'Present', 'Students & river', 'Urban growth.')]),
  ),

  nagaur: historyBundle(
    'nagaur',
    'Nagaur',
    [
      'Nagaur’s Ahichhatragarh Fort — deep walls, Sufi fair rhythms, and India’s huge cattle fair between Jodhpur and Bikaner. Desert light and Marwar trade routes.',
      'Agriculture on the desert fringe and leather craft — modern Nagaur balances heritage and livestock economy.',
    ],
    sec('puranic-ancient', 'Puranic & ancient', 'Desert fairs, Sufi memory', [
      'Desert fair calendars and Sufi shrines structured trade time — cattle as wealth and ritual.',
      'Early medieval fort towns guarded Jodhpur–Bikaner corridors.',
    ], [timelineEntry('na1', 'Fairs', 'Cattle trade', 'Desert economy.'), timelineEntry('na2', 'Sacred', 'Sufi shrines', 'Rural networks.'), timelineEntry('na3', 'Forts', 'Strategic Nagaur', 'Trade control.')]),
    sec('medieval-early-modern', 'Medieval & early modern', 'Rathore–Bikaner contests', [
      'Medieval sieges and Mughal farmans — Maratha revenue and British treaties.',
      'Cattle fair grew under princely patronage.',
    ], [timelineEntry('na4', 'Medieval', 'Fort wars', 'Rajput contests.'), timelineEntry('na5', '18th century', 'Maratha era', 'Revenue maps.'), timelineEntry('na6', '19th century', 'British', 'Fair administration.')]),
    sec('colonial-modern', 'Colonial & modern', 'Cattle fair tourism', [
      'Post-Independence fair regulation and highway tourism — fort restoration and sound-and-light.',
      'Today: desert festival crowds, livestock economy, and electoral agriculture — democratic Marwar.',
    ], [timelineEntry('na7', '1947', 'Independence', 'Integration.'), timelineEntry('na8', 'Fair tourism', 'Global visitors', 'Heritage events.'), timelineEntry('na9', 'Present', 'Fort & fair', 'District identity.')]),
  ),

  pali: historyBundle(
    'pali',
    'Pali',
    [
      'Pali links Jodhpur to Udaipur through Aravalli passes — Ranakpur’s Jain marble, Jawai leopard belt, and textile industry. Marble yards and temple carving workshops.',
      'Industrial corridor with spiritual tourism — less a single fort city than a route hub.',
    ],
    sec('puranic-ancient', 'Puranic & ancient', 'Jain corridors, passes', [
      'Jain pilgrimage and merchant ethics tied interior towns to Gujarat ports — marble carving lineages.',
      'Aravalli passes structured defence and tolls.',
    ], [timelineEntry('pa1', 'Sacred', 'Ranakpur', 'Jain architecture.'), timelineEntry('pa2', 'Trade', 'Marble & cloth', 'Caravan routes.'), timelineEntry('pa3', 'Passes', 'Aravallis', 'Strategic geography.')]),
    sec('medieval-early-modern', 'Medieval & early modern', 'Marwar–Mewar maps', [
      'Marwar and Mewar contested passes — Mughal farmans and toll assignments.',
      'British gazetteers documented castes and industry.',
    ], [timelineEntry('pa4', '17th–18th century', 'Pass contests', 'Fort politics.'), timelineEntry('pa5', '19th century', 'British maps', 'District records.'), timelineEntry('pa6', 'Craft', 'Marble workshops', 'Artisan lineages.')]),
    sec('colonial-modern', 'Colonial & modern', 'Industry & wildlife', [
      'Post-Independence roads scaled marble export — ethical wildlife tourism near Jawai.',
      'Today: highway logistics, Jain tourism, and leopard camps — democratic Rajasthan’s western corridor.',
    ], [timelineEntry('pa7', '1947', 'Independence', 'Integration.'), timelineEntry('pa8', 'Wildlife', 'Jawai belt', 'Eco-tourism.'), timelineEntry('pa9', 'Present', 'Marble & faith', 'Route hub.')]),
  ),

  pratapgarh: historyBundle(
    'pratapgarh',
    'Pratapgarh',
    [
      'Rajasthan’s youngest district — forested southern hills, tribal-majority communities, and dam catchments where Gujarat and MP angles meet the Aravallis.',
      'Administration and development schemes overlay older tribal geographies — migration and horticulture shape the economy.',
    ],
    sec('puranic-ancient', 'Puranic & ancient', 'Tribal hills, forest memory', [
      'Regional lore maps forest kingdoms and adivasi shrines — seasonal rivers and shifting cultivation memory.',
      'Archaeology and oral history trace long settlement before modern borders.',
    ], [timelineEntry('pr1', 'Tribal', 'Adivasi belts', 'Rights and ritual.'), timelineEntry('pr2', 'Forests', 'Aravalli folds', 'Ecology.'), timelineEntry('pr3', 'Trade', 'Border haats', 'Gujarat links.')]),
    sec('medieval-early-modern', 'Medieval & early modern', 'Local rajadoms, surveys', [
      'Smaller courts and forest tribute under larger empires — British surveys mapped tribes and forests.',
      'Princely maps merged into post-colonial states.',
    ], [timelineEntry('pr4', '18th–19th century', 'Surveys', 'Tribe lists.'), timelineEntry('pr5', 'Princely', 'Local lords', 'Tribute maps.'), timelineEntry('pr6', 'Forests', 'Policy', 'Reserved forests.')]),
    sec('colonial-modern', 'Colonial & modern', 'New district', [
      'Pratapgarh district formed in republic era — Panchayati Raj and forest rights laws.',
      'Today: tribal development, horticulture, and ghat-road tourism — democratic India’s green edge.',
    ], [timelineEntry('pr7', 'Republic', 'District formation', 'Modern map.'), timelineEntry('pr8', 'Rights', 'FRA & schedules', 'Policy layers.'), timelineEntry('pr9', 'Present', 'Hills & tribes', 'Development focus.')]),
  ),

  rajsamand: historyBundle(
    'rajsamand',
    'Rajsamand',
    [
      'Rajsamand — marble country — namesake lake embankments built by Maharana Raj Singh, Kumbhalgarh’s wall line, and Nathdwara’s Shrinathji pilgrimage. Mewar’s economic heart between Udaipur and Jodhpur.',
      'Mining, tourism, and faith economies overlap — wedding traffic toward Udaipur passes through.',
    ],
    sec('puranic-ancient', 'Puranic & ancient', 'Mewar lakes, sacred geography', [
      'Lake-building and temple networks structured Mewar time — marble as ritual and export commodity.',
      'Sisodia genealogies tie legitimacy to Eklingji and Chittor memory.',
    ], [timelineEntry('ra1', 'Lakes', 'Rajsamand', 'Imperial project.'), timelineEntry('ra2', 'Sacred', 'Nathdwara', 'Vaishnav pilgrimage.'), timelineEntry('ra3', 'Marble', 'Quarries', 'Craft economy.')]),
    sec('medieval-early-modern', 'Medieval & early modern', 'Kumbhalgarh, Mewar defence', [
      'Kumbhalgarh’s wall symbolised layered defence — Mughal campaigns and Sisodia resilience.',
      'Lake embankments and irrigation projects under Maharana patronage.',
    ], [timelineEntry('ra4', '15th century', 'Kumbhalgarh', 'Fort wall.'), timelineEntry('ra5', '17th century', 'Lake works', 'Rajsamand embankment.'), timelineEntry('ra6', '18th century', 'Maratha pressure', 'Revenue stress.')]),
    sec('colonial-modern', 'Colonial & modern', 'Marble & pilgrimage', [
      'British paramountcy and post-Independence mining scaled marble export — Nathdwara traffic boomed.',
      'Today: Kumbhalgarh tourism, lake walks, and studio weddings — democratic Mewar.',
    ], [timelineEntry('ra7', '1947', 'Independence', 'Integration.'), timelineEntry('ra8', 'Mining', 'Marble industry', 'Export yards.'), timelineEntry('ra9', 'Present', 'Faith & walls', 'Tourism economy.')]),
  ),

  'sawai-madhopur': historyBundle(
    'sawai-madhopur',
    'Sawai Madhopur',
    [
      'Sawai Madhopur — gateway to Ranthambhore — UNESCO fort inside tiger forests, railway junction energy, and Hadoti links toward Kota. Named for Sawai Madho Singh’s patronage.',
      'Global wildlife tourism meets local agriculture — tiger as identity and livelihood.',
    ],
    sec('puranic-ancient', 'Puranic & ancient', 'Forest fort, sacred ridges', [
      'Ranthambhore ridge enters regional memory as sacred hunting ground and fort — bardic tales of Hammir and sovereignty.',
      'Seasonal rivers and lakes structured wildlife and human settlement.',
    ], [timelineEntry('sm1', 'Fort', 'Ranthambhore', 'Hill seat.'), timelineEntry('sm2', 'Sacred', 'Trinetra temple', 'Forest deity.'), timelineEntry('sm3', 'Forests', 'Wildlife', 'Ecology memory.')]),
    sec('medieval-early-modern', 'Medieval & early modern', 'Mewar–Jaipur contests', [
      'Fort changed hands between Mewar and Jaipur arms — Mughal campaigns and later Maratha revenue.',
      'British-era conservation seeds and princely hunting preserves.',
    ], [timelineEntry('sm4', 'Medieval wars', 'Fort contests', 'Rajput states.'), timelineEntry('sm5', '19th century', 'Jaipur state', 'Hunting preserves.'), timelineEntry('sm6', 'Railways', 'MG lines', 'Junction town.')]),
    sec('colonial-modern', 'Colonial & modern', 'Tiger reserve icon', [
      'Project Tiger and UNESCO nomination — global wildlife branding.',
      'Today: safari economy, hotel chains, and conservation conflict — democratic India’s flagship park.',
    ], [timelineEntry('sm7', '1973', 'Project Tiger', 'Wildlife milestone.'), timelineEntry('sm8', '1980s–UNESCO', 'Fort nomination', 'Heritage + nature.'), timelineEntry('sm9', 'Present', 'Safari town', 'Tourism GDP.')]),
  ),

  sikar: historyBundle(
    'sikar',
    'Sikar',
    [
      'Sikar — Shekhawati doors and Laxmangarh fort silhouette — merchant fresco towns with agrarian hinterland. Jaipur weekend drives and fewer tourists than Mandawa.',
      'Khetri copper links and local fairs — semi-arid light and painted havelis.',
    ],
    sec('puranic-ancient', 'Puranic & ancient', 'Shekhawati trade, wells', [
      'Caravan towns and stepwells structured Shekhawati — Jain and merchant networks.',
      'Rajput thikanas and clan maps overlaid merchant wealth.',
    ], [timelineEntry('si1', 'Trade', 'Marwari maps', 'Interior to ports.'), timelineEntry('si2', 'Water', 'Wells & tanks', 'Desert survival.'), timelineEntry('si3', 'Forts', 'Laxmangarh', 'Strategic ridge.')]),
    sec('medieval-early-modern', 'Medieval & early modern', 'Thikanas, Company maps', [
      'Maratha revenue and British thikana lists — fresco competition among merchants.',
      'Copper and textile trade foreshadowed modern industry.',
    ], [timelineEntry('si4', '18th century', 'Maratha era', 'Revenue maps.'), timelineEntry('si5', '19th century', 'Fresco boom', 'Merchant houses.'), timelineEntry('si6', 'British', 'Gazetteers', 'Sikar tract.')]),
    sec('colonial-modern', 'Colonial & modern', 'Heritage & commute', [
      'Post-Independence migration and NCR integration — heritage tourism along Shekhawati loop.',
      'Today: painted town walks, fort viewpoints, and Jaipur commute — democratic Rajasthan’s north-east.',
    ], [timelineEntry('si7', '1947', 'Independence', 'Integration.'), timelineEntry('si8', 'NCR', 'Weekend tourism', 'Highway access.'), timelineEntry('si9', 'Present', 'Fresco belt', 'Local identity.')]),
  ),

  sirohi: historyBundle(
    'sirohi',
    'Sirohi',
    [
      'Sirohi — Mount Abu’s district — Dilwara marble temples, Abu Road’s rail junction, and Gujarat-border checks. Rajasthan’s only hill station with cool monsoon mist and cold winters.',
      'Marble carving, tourism, and border trade — leopard country toward Jawai.',
    ],
    sec('puranic-ancient', 'Puranic & ancient', 'Aravalli heights, sacred peaks', [
      'Mount Abu enters myth as sage retreat — temple-building and pilgrimage long before modern tourism.',
      'Sirohi state’s Rajput house negotiated Gujarat and Malwa trade.',
    ], [timelineEntry('sr1', 'Sacred', 'Dilwara', 'Jain marble.'), timelineEntry('sr2', 'Hills', 'Abu', 'Climate refuge.'), timelineEntry('sr3', 'Trade', 'Border routes', 'Salt and cloth.')]),
    sec('medieval-early-modern', 'Medieval & early modern', 'Sirohi court, Company maps', [
      'Sirohi princely state under British paramountcy — hill roads and sanatoria.',
      'Colonial-era forest policy and wildlife notes.',
    ], [timelineEntry('sr4', '19th century', 'Hill roads', 'British visitors.'), timelineEntry('sr5', 'Princely', 'Sirohi state', 'Administration.'), timelineEntry('sr6', 'Forests', 'Sanctuary seeds', 'Wildlife notes.')]),
    sec('colonial-modern', 'Colonial & modern', 'Hill station India', [
      'Post-Independence integration — tourism boom and highway traffic from Gujarat.',
      'Today: Dilwara rules, Nakki Lake boating, and winter cold waves — democratic India’s cool Rajasthan.',
    ], [timelineEntry('sr7', '1947', 'Independence', 'Accession.'), timelineEntry('sr8', 'Tourism', 'Hill station', 'Domestic travel.'), timelineEntry('sr9', 'Present', 'Abu & marble', 'District HQ.')]),
  ),

  'sri-ganganagar': historyBundle(
    'sri-ganganagar',
    'Sri Ganganagar',
    [
      'Sri Ganganagar — irrigated grid on the Indira Gandhi Canal — Punjab-border wheat and cotton, cold winters, and blazing summers. Planned town layout beside ancient Ghaggar memory.',
      'Green revolution heartland with canal politics and cross-border kinship networks.',
    ],
    sec('puranic-ancient', 'Puranic & ancient', 'Ghaggar plain, ancient fields', [
      'Saraswati debate and Harappan links frame northern plain archaeology — mound fields and seasonal rivers.',
      'Medieval fort towns toward Multan guarded trade routes.',
    ], [timelineEntry('sg1', 'Archaeology', 'Plain mounds', 'Ancient agriculture.'), timelineEntry('sg2', 'Medieval', 'Border forts', 'Trade routes.'), timelineEntry('sg3', 'Agrarian', 'Wheat memory', 'Breadbasket lore.')]),
    sec('medieval-early-modern', 'Medieval & early modern', 'Punjab wars, canals', [
      'Sikh-era campaigns and British canal surveys — Bikaner state’s irrigation dreams.',
      'Partition shifted border kinship and market routes.',
    ], [timelineEntry('sg4', '19th century', 'Canal surveys', 'Desert irrigation.'), timelineEntry('sg5', '1947', 'Partition', 'Punjab border.'), timelineEntry('sg6', 'IG canal', 'Green revolution', 'Yield boom.')]),
    sec('colonial-modern', 'Colonial & modern', 'Canal metropolis', [
      'Ganganagar planned as canal capital — demographic shifts from Punjab and Haryana migration.',
      'Today: cold fog, cricket nurseries, and agrarian politics — democratic India’s northern Rajasthan.',
    ], [timelineEntry('sg7', '1950s–60s', 'Canal era', 'Settlement boom.'), timelineEntry('sg8', 'Green revolution', 'Wheat belt', 'National food security.'), timelineEntry('sg9', 'Present', 'Canal & cold', 'District HQ.')]),
  ),

  tonk: historyBundle(
    'tonk',
    'Tonk',
    [
      'Tonk — Nawabi lanes in eastern Rajasthan — Sunehri Kothi’s gilt, Bisaldeo temples, and Muslim courtly culture between Jaipur and Kota. A quieter Nawabi town with hinterland mosques.',
      'Agriculture, small industry, and heritage walks — Ramadan evenings busy the bazaars.',
    ],
    sec('puranic-ancient', 'Puranic & ancient', 'Sacred hills, Hadoti edge', [
      'Temple networks and seasonal rivers structure local memory — Bisaldeo and Shaiva sites.',
      'Early medieval polities contested the fertile edge toward Malwa.',
    ], [timelineEntry('to1', 'Temples', 'Bisaldeo', 'Sacred geography.'), timelineEntry('to2', 'Rivers', 'Banas tributaries', 'Agrarian time.'), timelineEntry('to3', 'Trade', 'Jaipur–Kota routes', 'Caravan links.')]),
    sec('medieval-early-modern', 'Medieval & early modern', 'Nawabi Tonk, Maratha maps', [
      'Afghan Rohilla/Nawabi lineages and Maratha revenue maps — princely Tonk under British paramountcy.',
      'Courtly architecture and Urdu culture.',
    ], [timelineEntry('to4', '18th–19th century', 'Nawabi court', 'Sunehri Kothi era.'), timelineEntry('to5', 'Treaties', 'British paramountcy', 'Revenue maps.'), timelineEntry('to6', 'Culture', 'Urdu & craft', 'Courtly life.')]),
    sec('colonial-modern', 'Colonial & modern', 'Heritage Tonk', [
      'Post-Independence merger into Rajasthan — roads toward Sawai Madhopur and Jaipur.',
      'Today: mosque architecture tourism, rural hinterland, and exam-town spillover — democratic India’s Nawabi pocket.',
    ], [timelineEntry('to7', '1947', 'Independence', 'Integration.'), timelineEntry('to8', 'Rajasthan', 'District map', 'HQ functions.'), timelineEntry('to9', 'Present', 'Nawabi lanes', 'Local tourism.')]),
  ),
}
