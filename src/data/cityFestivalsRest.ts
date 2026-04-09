import type { CityFestivalsBundle, FestivalEntry } from './cityFestivals.types'
import { buildCityFestivalsBundle } from './cityFestivalsShared'

function sig(
  slug: string,
  suffix: string,
  name: string,
  teaser: string,
  why: string[],
  whenStarted: string,
  attributedWho: string,
  scientificAndSocial: string[],
): FestivalEntry {
  return {
    id: `${slug}-${suffix}`,
    name,
    teaser,
    why,
    origin: { whenStarted, attributedWho },
    scientificAndSocial,
  }
}

const REST = [
  buildCityFestivalsBundle({
    slug: 'jaipur',
    name: 'Jaipur',
    leadParagraph1:
      'Jaipur is the Pink City capital: palace calendars, Johari and Tripolia bazaars, and the old city’s Gangaur processions still set the seasonal rhythm alongside modern trade fairs. Below, festivals are grouped by tradition — not to separate people, but to show how lunar-solar tithi, Islamic hijrī, and Gregorian civic days overlap in one dense capital.',
    sanatan: {
      eyebrow: 'Sanātana · capital region',
      title: 'Hindu lunar-solar festivals & Jaipur’s public life',
      intro: [
        'These follow the Vikram Samvat / regional panchang. Jaipur’s Kachhwaha courts and public temples amplified Gangaur, Teej, and Holi as state-visible rituals — today those same lanes host both devotion and tourism.',
      ],
      signature: sig(
        'jaipur',
        'gangaur-teej',
        'Gangaur & Teej (spring–monsoon women’s public festivals)',
        'Chaitra–Bhadrapad · Ghoomar & processions',
        [
          'Gangaur honours Gaurī (Pārvatī) and marital felicity — clay images are carried through wards and toward water; Teej marks monsoon arrival with swings, songs, and fasts tied to union lore.',
          'In Jaipur the Old City processions are iconic: lakhs line the routes; crafts and jewellery economies spike — the “why” mixes śakti devotion, neighbourhood pride, and women-led public visibility.',
        ],
        'Documented at Rajasthani courts for centuries; modern mass scale and state tourism branding intensify after Independence — televised parades are a late 20th-century layer.',
        'Temple committees, royal trusts historically, and today GHMC-like municipal coordination — collective authorship, not a single founder.',
        [
          'Hydrology: Teej’s timing tracks monsoon onset statistics — ritual and climate literacy overlap.',
          'Crowd safety: Narrow gates and elephants/horses in heritage processions need traffic science — studied in urban risk reports.',
          'Gender & public space: Sociologists read these festivals as negotiated visibility in patriarchal cityscapes.',
        ],
      ),
    },
    islamic: {
      eyebrow: 'Islamic · Indo-Persian city',
      title: 'Mosques, Eid & the hijrī calendar in Jaipur',
      intro: [
        'Jaipur’s Muslim neighbourhoods (and Sufi-linked sites in the region) follow the same lunar feasts as elsewhere, with local Urdu–Rajasthani soundscapes in markets near Ramganj and beyond. Ramadan and Muharram reshape night-time street economies in the capital.',
      ],
    },
  }),

  buildCityFestivalsBundle({
    slug: 'udaipur',
    name: 'Udaipur',
    leadParagraph1:
      'Udaipur wraps around lakes and palaces: Mewar memory, monsoon festivals at the ghats, and boat processions that mix courtly symbolism with bhakti. The calendar here is partly “lake time” — when the water rises, which ghats host arti, and when the city opens to desert pilgrims.',
    sanatan: {
      eyebrow: 'Sanātana · Mewar',
      title: 'Hindu lunar-solar festivals & lake ghats',
      intro: [
        'Tithi months like Shravan and Bhadrapad matter for Jal Jhulni Ekadashi and Hariyali — processions touch Pichola and Fatehsagar in ways hill towns cannot replicate.',
      ],
      signature: sig(
        'udaipur',
        'jal-jhulni-hariyali',
        'Jal Jhulni Ekadashi & Hariyali Amāvasyā (monsoon lake rites)',
        'Shravan–Bhadrapad · idols on boats',
        [
          'Jal Jhulni carries śāligrāma or icons to water — in Udaipur the lake becomes the mandap; Hariyali greens the landscape and ties sowing psychology to goddess and snake lore regionally.',
          'Reason: monsoon gratitude, cooling symbolism after summer, and Mewar’s public choreography of kingship-as-sevā still echoed in civic tourism.',
        ],
        'Layered śāstra timing with medieval court patronage; boat processions as spectacle grow with photography and heritage branding.',
        'Bhils, Rajput courts, Brahmin panchangs — plural stewardship; today municipal boats and pollution rules enter the story.',
        [
          'Limnology: Lake water quality affects ritual bathing — science meets faith at monitoring stations.',
          'Tourism load: Carrying capacity of ghats is a real constraint — studied in sustainable heritage.',
        ],
      ),
    },
    islamic: {
      eyebrow: 'Islamic · lake bazaars',
      title: 'Eid, Ramadan & neighbourhood mosques in Udaipur',
      intro: [
        'Udaipur’s Muslim quarters participate in the same hijrī cycle; Old City lanes near the lakes see seasonal iftār stalls and processions where permitted — the acoustic overlap with arti bells is part of the city’s sensory map.',
      ],
    },
  }),

  buildCityFestivalsBundle({
    slug: 'jodhpur',
    name: 'Jodhpur',
    leadParagraph1:
      'Jodhpur is Marwar’s blue-walled sentinel under Mehrangarh: desert winds, cattle and textile trade, and festivals that once synced thikana clocks with village fairs. Here the calendar explains when the fort lights up, when rural kin visit, and when the cantonment joins the Old City in colour.',
    sanatan: {
      eyebrow: 'Sanātana · Marwar',
      title: 'Hindu lunar-solar festivals & Marwar fairs',
      intro: [
        'Phalgun Holi and Kartik Diwali carry Marwari merchant rhythms — ledgers and temples in the Old City still anchor the same tithi economy that diaspora families remember abroad.',
      ],
      signature: sig(
        'jodhpur',
        'sheetala-nag-panchami',
        'Sheetalā Satī & Nāg Pañcamī (heat-season protective rites)',
        'Chaitra–Shravan · coolants & snake lore',
        [
          'Sheetalā protects against pox and summer disease in folk memory; offerings of cooled grain and buttermilk mark neighbourhood ethics of care.',
          'Nāg Pañcamī ties monsoon snakes to fertility and groundwater anxiety — relevant in arid Marwar where every tank matters.',
        ],
        'Village India layer for centuries; urban Jodhpur inherits the same grammar with hospital posters now beside temple posters.',
        'Women-led vow networks and local pūjārīs — decentralized authority.',
        [
          'Epidemiology: Smallpox vaccination history changed Sheetālā’s meaning — public-health anthropology.',
          'Herpetology education overlaps with ritual fear — science communication opportunity.',
        ],
      ),
    },
    islamic: {
      eyebrow: 'Islamic · Old City & cantonment',
      title: 'Islamic feasts & clocktower bazaars',
      intro: [
        'Clock Tower and Sardar Market areas intensify during Eid; military stations nearby mean Republic and Independence parades sometimes share infrastructure with Old City processions — layered security geography.',
      ],
    },
  }),

  buildCityFestivalsBundle({
    slug: 'alwar',
    name: 'Alwar',
    leadParagraph1:
      'Alwar sits where the Aravallis meet the eastern plains: Matsya-region memory, Sariska’s forests, and a city that once linked Delhi with Jaipur trade routes. Festivals here mix hunting-reserve ecotourism seasons with traditional tithi observance in temples and villages.',
    sanatan: {
      eyebrow: 'Sanātana · Matsya',
      title: 'Hindu lunar-solar festivals & Alwar’s region',
      intro: [
        'Kartik and Phalgun pull pilgrims toward Pushkar-adjacent circuits sometimes via Alwar; local temples anchor Gangaur and Teej with a greener monsoon edge than deep desert.',
      ],
      signature: sig(
        'alwar',
        'matsya-kite-spring',
        'Spring kite gatherings & Basant Pañcamī echoes',
        'Magha–Phalgun · Vasant',
        [
          'Alwar shares North Indian Basant colour memory — kites on Makar Saṅkrānti and school holidays cluster in winter sun.',
          'Reason: seasonal joy before exams and harvest psychology in wheat belts approaching from the east.',
        ],
        'Medieval courts celebrated Vasant; modern civic bans on dangerous manjha intersect with tradition.',
        'Schools and clubs — contemporary kite culture is youth-led.',
        [
          'Safety: Power-line and neck injuries — urban engineering responses.',
          'Bird life: Kite festivals now debate bird strikes near reserves — conservation crossover.',
        ],
      ),
    },
    islamic: {
      eyebrow: 'Islamic · eastern Rajasthan',
      title: 'Eid & mosques in Alwar district',
      intro: [
        'Indo-Islamic neighbourhoods follow lunar feasts; Alwar’s history under different states left diverse mosque architectures — processions and moonsighting debates are part of everyday civics.',
      ],
    },
  }),

  buildCityFestivalsBundle({
    slug: 'banswara',
    name: 'Banswara',
    leadParagraph1:
      'Banswara is southern tribal Rajasthan: hills, dams, and Bhil–Garasia communities whose festival calendar mixes tithi observance with local fair cycles tied to forest and monsoon. Understanding the city means reading both panchang time and adivasi assembly memory.',
    sanatan: {
      eyebrow: 'Sanātana · Vagad & adivasi',
      title: 'Hindu calendars & local fair cycles',
      intro: [
        'Diwali and Holi are widely observed; alongside them, village melās follow agricultural and harvest signals more than a single court standard.',
      ],
      signature: sig(
        'banswara',
        'bhil-holi-diwali',
        'Holi & Diwali in Bhil–Garasia neighbourhoods',
        'Phalgun · Kārtika · community dance',
        [
          'Colour play and lamp rows appear with local instruments — ghoomar and gair variants differ from Shekhawati idioms.',
          'Reason: seasonal renewal and solidarity after migratory labour cycles.',
        ],
        'Oral histories predate colonial district maps; anthropologists documented 20th-century shifts.',
        'Community elders and panchs — flexible leadership.',
        [
          'Livelihood: Seasonal migration affects who can attend — labour geography shapes “festival attendance”.',
          'Language: Regional dialects carry song texts — intangible heritage.',
        ],
      ),
    },
    islamic: {
      eyebrow: 'Islamic · southern towns',
      title: 'Islamic calendars in Banswara district',
      intro: [
        'Smaller urban Muslim communities participate in Ramadan and Eid; rural–urban links mean iftār sometimes moves between town mosques and village homes.',
      ],
    },
  }),

  buildCityFestivalsBundle({
    slug: 'baran',
    name: 'Baran',
    leadParagraph1:
      'Baran is Hadoti’s eastern edge: Chambal tributaries, mixed agriculture, and festivals that align with Kota–Jhalawar cultural circuits. The calendar helps travellers know when melās cluster and when roads fill for Dussehra-linked events in the region.',
    sanatan: {
      eyebrow: 'Sanātana · Hadoti',
      title: 'Hindu lunar-solar festivals & Hadoti melās',
      intro: [
        'Kartik and Ashwin host Diwali and Dussehra echoes across Hadoti; local temples time fairs to post-monsoon harvests.',
      ],
      signature: sig(
        'baran',
        'hadoti-dussehra-echo',
        'Dussehra season & Rāvaṇa-burning grammar (regional)',
        'Ashwin · Vijayādaśamī',
        [
          'Hadoti towns share the North Indian Rāma narrative climax — effigies and fairs bind agricultural surplus release with moral storytelling.',
          'In Baran the scale is district-town; meaning is still “dharma over adharma” in public pedagogy.',
        ],
        'Medieval bardic and temple networks; modern electricity and sound systems scale the spectacle.',
        'Municipal permits and temple trusts — joint governance.',
        [
          'Acoustics & air quality: Crackers and loudspeakers — civic regulation.',
          'Pedagogy: School holidays synchronize — calendar science for parents.',
        ],
      ),
    },
    islamic: {
      eyebrow: 'Islamic · Hadoti towns',
      title: 'Eid & mosques in Baran',
      intro: [
        'Indo-Islamic feasts follow the hijrī calendar; smaller towns may share imām supply with Kota — moonsighting networks are practical infrastructure.',
      ],
    },
  }),

  buildCityFestivalsBundle({
    slug: 'barmer',
    name: 'Barmer',
    leadParagraph1:
      'Barmer is deep western Rajasthan: Thar winds, border trade memory, and festivals that must reckon with heat and sparse rain. Holi and Diwali still structure merchant and pastoral calendars; melās often coincide with livestock and wool cycles.',
    sanatan: {
      eyebrow: 'Sanātana · Thar',
      title: 'Hindu lunar-solar festivals & desert fairs',
      intro: [
        'Phalgun Holi and Kartik Diwali anchor the year; local fairs attach to cattle and craft seasons tied to pastoral mobility.',
      ],
      signature: sig(
        'barmer',
        'thar-fair-pastoral',
        'Pastoral melās & post-monsoon gathering points',
        'Kārtika–Chaitra · trade + devotion',
        [
          'When rain allows, herders and traders meet at designated fair grounds — devotion and account books travel together.',
          'Reason: reducing search costs in sparse population density — classic rural economics.',
        ],
        'Ancient trade geography; modern roads and mobile phones change timing but not the need to gather.',
        'Communities of herders, dealers, and temple committees.',
        [
          'Climate risk: Heat waves affect open-air fairs — public-health planning.',
          'Water: Tank and well rituals peak around local hydrogeology.',
        ],
      ),
    },
    islamic: {
      eyebrow: 'Islamic · western towns',
      title: 'Eid & desert mosques in Barmer',
      intro: [
        'Ramadan and Eid punctuate the year; border proximity and army logistics sometimes add security overlays to large gatherings — reading notices matters.',
      ],
    },
  }),

  buildCityFestivalsBundle({
    slug: 'bharatpur',
    name: 'Bharatpur',
    leadParagraph1:
      'Bharatpur is Braj-border country: Jat fort memory, Keoladeo wetlands, and Krishna–related tithi currents that run stronger here than in arid Marwar. Festivals help time birding seasons, temple circuits, and the Mathura–Agra cultural pull.',
    sanatan: {
      eyebrow: 'Sanātana · Braj edge',
      title: 'Hindu lunar-solar festivals & Braj echoes',
      intro: [
        'Shravan and Bhadrapad intensify Krishna-related fasting and swings; Kartik and Holi carry Braj-style colour and lamp idioms into local temples.',
      ],
      signature: sig(
        'bharatpur',
        'janmashtami-brij',
        'Janmāṣṭamī & Braj-season swings (Shravan–Bhadrapad)',
        'Late summer · maṭkī & raslīlā',
        [
          'Krishna’s birth anniversary is observed with night vigils and sweets; in Braj-border towns the emotional tone draws from Krishna-bhakti publics.',
          'Keoladeo’s monsoon birds parallel the “green” season of Braj imagination — ecology and devotion share a calendar.',
        ],
        'Bhakti movement layers; 19th–20th century print and audio amplified songs.',
        'Temples, maṇḍalīs, and households — decentralized performance.',
        [
          'Ornithology: Bird counts peak when festivals peak — tourism management science.',
          'Hydrology: Wetland water levels affect both birds and ghats — integrated planning.',
        ],
      ),
    },
    islamic: {
      eyebrow: 'Islamic · eastern plains',
      title: 'Islamic feasts in Bharatpur',
      intro: [
        'Muslim neighbourhoods join pan-Indian Eid rhythms; Agra–Delhi corridors also mean diverse migrant chaplaincies and culinary styles during Ramadan.',
      ],
    },
  }),

  buildCityFestivalsBundle({
    slug: 'bhilwara',
    name: 'Bhilwara',
    leadParagraph1:
      'Bhilwara is Rajasthan’s textile powerhouse: loom time, migrant labour, and city-wide holidays that sync factory shifts with school tithi breaks. Festivals explain when the market slows for Holi and when Diwali bonuses circulate.',
    sanatan: {
      eyebrow: 'Sanātana · Malpura region',
      title: 'Hindu lunar-solar festivals & mill-town life',
      intro: [
        'Holi and Diwali are mass observances across wards; Gangaur and Teej appear with strong women-led street presence in trading neighbourhoods.',
      ],
      signature: sig(
        'bhilwara',
        'textile-dussehra-diwali',
        'Dussehra–Diwali industrial holiday cluster',
        'Ashwin–Kārtika · production pause',
        [
          'Textile units historically timed shutdowns around festival clusters — labour law and union bargains now formalize some patterns.',
          'Reason: cultural continuity plus economic coordination — a calendar is partly a collective bargaining clock.',
        ],
        'Post-independence industrialization layered on older agrarian festivals.',
        'Owners, unions, and municipal traders’ associations — plural stakeholding.',
        [
          'Supply chains: Pre-festival demand spikes in cloth — operations research in retail.',
          'Air quality: Diwali crackers vs textile dust — stacked environmental health issues.',
        ],
      ),
    },
    islamic: {
      eyebrow: 'Islamic · mill town',
      title: 'Eid & mosques in Bhilwara',
      intro: [
        'Indo-Islamic neighbourhoods follow Ramadan and Eid; shift workers negotiate prayer breaks with factory clocks — an everyday urban sociology.',
      ],
    },
  }),

  buildCityFestivalsBundle({
    slug: 'bikaner',
    name: 'Bikaner',
    leadParagraph1:
      'Bikaner is northern desert kingdom memory: camels, Junagarh fort, and a festival economy built around winter tourism and agrarian fairs. The Camel Festival is globally marketed; underneath still run the same tithi grids as the rest of Rajasthan.',
    sanatan: {
      eyebrow: 'Sanātana · Bikaner region',
      title: 'Hindu lunar-solar festivals & desert kingdoms',
      intro: [
        'Kartik and Phalgun structure pilgrimage and colour; local temples and the royal legacy amplify processions with Marwari patronage.',
      ],
      signature: sig(
        'bikaner',
        'camel-festival-tourism',
        'Bikaner Camel Festival (winter tourism fair)',
        'Magha · heritage + livestock culture',
        [
          'Showcases camel decoration, racing, and folk performance — not a śāstra tithi festival but a civic scheduling of desert culture for visitors.',
          'Reason: livelihood for breeders and musicians; soft power for the city brand.',
        ],
        'Late 20th-century tourism product layered on older livestock fairs.',
        'State tourism, municipal boards, herder cooperatives.',
        [
          'Animal welfare: Performance ethics — veterinary oversight debates.',
          'Climate: January timing minimizes heat stress — sensible scheduling science.',
        ],
      ),
    },
    islamic: {
      eyebrow: 'Islamic · northern Rajasthan',
      title: 'Eid & mosques in Bikaner',
      intro: [
        'Indo-Islamic calendars structure Old City neighbourhoods; Eid markets around Kote Gate area intensify seasonally.',
      ],
    },
  }),

  buildCityFestivalsBundle({
    slug: 'bundi',
    name: 'Bundi',
    leadParagraph1:
      'Bundi is stepped-well country: monsoon-fed baoris, Hadoti miniature memory, and a festival map where Teej and Kajli meld with lake ghats. Tourists time visits around Bundi Utsav as much as around Holi.',
    sanatan: {
      eyebrow: 'Sanātana · Hadoti',
      title: 'Hindu lunar-solar festivals & Bundi’s ghats',
      intro: [
        'Shravan Teej and Bhadrapad festivals use water architecture — stepwells and tanks become stage sets for women’s songs and processions.',
      ],
      signature: sig(
        'bundi',
        'bundi-utsav-kajli',
        'Bundi Utsav & Kajli Teej (monsoon culture)',
        'Shravan–Bhadrapad · arts + water',
        [
          'Bundi Utsav is a state-curated winter/spring showcase of crafts and music; Kajli Teej carries local song traditions tied to separation–union tropes.',
          'Together they show how “festival” can mean both tithi devotion and deliberate cultural economy.',
        ],
        'Heritage tourism branding from late 20th century; Teej layers are older.',
        'District administration plus traditional performers — negotiated authenticity.',
        [
          'Water heritage: Stepwell safety and crowd loads — civil engineering.',
          'Cultural IP: Who benefits from ticketed heritage — political economy.',
        ],
      ),
    },
    islamic: {
      eyebrow: 'Islamic · Hadoti town',
      title: 'Islamic feasts in Bundi',
      intro: [
        'Smaller Muslim communities observe Eid and Muharram patterns with local anjuman leadership; monsoon traffic to lakes overlaps with everyone’s outdoor season.',
      ],
    },
  }),

  buildCityFestivalsBundle({
    slug: 'chittorgarh',
    name: 'Chittorgarh',
    leadParagraph1:
      'Chittorgarh is fort and memory: Rajput–Sisodia narrative, Meera’s bhakti echo, and festivals that turn the citadel into a pilgrimage of identity. Diwali and Holi scale with tourism; Vijayadashami carries extra epic weight here.',
    sanatan: {
      eyebrow: 'Sanātana · Mewar memory',
      title: 'Hindu lunar-solar festivals & fort symbolism',
      intro: [
        'Kartik and Ashwin festivals intersect with Rāma–Sītā and Durgā idioms; the fort’s public archaeology shapes how crowds move during holidays.',
      ],
      signature: sig(
        'chittorgarh',
        'vijayadashami-fort',
        'Vijayādaśamī at Chittor (epic-scale public memory)',
        'Ashwin · “victory” symbolism',
        [
          'Dussehra already carries Rāma’s victory; in Chittorgarh the landscape adds Rajput heroic memory — not identical stories, but layered “victory” semiotics.',
          'Reason: civic education through ritual — who tells which story matters in historiography.',
        ],
        'Medieval courtly patronage of festivals; modern tourism amplifies crowds.',
        'Temple trusts, historians, and guides — contested narrative economy.',
        [
          'Crowd dynamics on fort ramps — safety engineering.',
          'Heat: Autumn still warm — medical tents at melās.',
        ],
      ),
    },
    islamic: {
      eyebrow: 'Islamic · fort town',
      title: 'Islamic calendars in Chittorgarh',
      intro: [
        'Indo-Islamic feasts proceed in town neighbourhoods; the fort’s medieval history also includes diverse communities — reading inscriptions alongside ritual time.',
      ],
    },
  }),

  buildCityFestivalsBundle({
    slug: 'churu',
    name: 'Churu',
    leadParagraph1:
      'Churu is Shekhawati haveli country: painted towns, merchant diaspora, and festivals financed by remittance aesthetics — when havelis open for Holi colour and Diwali lamps become competitive art. The calendar is partly a migration clock.',
    sanatan: {
      eyebrow: 'Sanātana · Shekhawati',
      title: 'Hindu lunar-solar festivals & painted-town fairs',
      intro: [
        'Phalgun Holi and Kartik Diwali are visually spectacular where merchant families sponsor gulal and lights on frescoed streets.',
      ],
      signature: sig(
        'churu',
        'shekhawati-holi-diwali',
        'Shekhawati Holi & Diwali (haveli-sponsored public art)',
        'Phalgun–Kārtika · colour & light',
        [
          'Colour and lamps become neighbourhood competition — caste-neutral in aspiration though not always in practice — binding NRIs and local kin.',
          'Reason: displaying prosperity ethically framed as “sevā to devatā and saṅgha”.',
        ],
        '19th–20th century Marwari capital flows; Instagram is the newest layer.',
        'Family trusts, youth clubs, and municipal cleanup — post-festival labour is real.',
        [
          'Heritage conservation: Gulal on frescoes — chemistry meets conservation science.',
          'Economy: Remittance shocks affect sponsorship — migration studies.',
        ],
      ),
    },
    islamic: {
      eyebrow: 'Islamic · Shekhawati towns',
      title: 'Eid & mosques in Churu',
      intro: [
        'Indo-Islamic neighbourhoods follow lunar feasts; Shekhawati pluralism is lived in adjacent lanes — procession routes are negotiated civic infrastructure.',
      ],
    },
  }),

  buildCityFestivalsBundle({
    slug: 'dausa',
    name: 'Dausa',
    leadParagraph1:
      'Dausa sits near eastern Aravalli approaches: Mehandipur Balaji’s reputation draws vow publics, and Jaipur–Agra traffic pulses seasonally. Festivals help time temple peaks, road congestion, and rural melās in the district.',
    sanatan: {
      eyebrow: 'Sanātana · eastern gateway',
      title: 'Hindu lunar-solar festivals & regional tirths',
      intro: [
        'Navrātrī and Kartik see spikes at śakti and Hanuman sites; Holi and Diwali structure the merchant year in towns.',
      ],
      signature: sig(
        'dausa',
        'mehandipur-bhakti',
        'Mehandipur Balaji & śakti vow calendars (regional pull)',
        'Year-round · Tuesday–Saturday peaks',
        [
          'Mehandipur is a major vow destination for exorcism-related folk practice in public imagination — scholars debate psychology and ethics; pilgrims experience relief narratives.',
          'Dausa district benefits from transport and lodging economies — festival time is labour time.',
        ],
        'Late 20th-century massification via road networks and video.',
        'Temple administration and local hospitality — informal sector huge.',
        [
          'Mental health: Intersection with clinical care — sensitive public-health framing.',
          'Traffic: Highway peaks — civil engineering.',
        ],
      ),
    },
    islamic: {
      eyebrow: 'Islamic · eastern district',
      title: 'Islamic feasts in Dausa',
      intro: [
        'Muslim communities in towns along NH corridors observe Ramadan and Eid with the same lunar discipline as larger cities — moon sighting apps now standard.',
      ],
    },
  }),

  buildCityFestivalsBundle({
    slug: 'dholpur',
    name: 'Dholpur',
    leadParagraph1:
      'Dholpur is Chambal sandstone country: river gorges, fort memory, and festivals that sit on the cusp of Rajasthan, UP, and MP cultural pulls. Tithi observance mingles with riparian agriculture calendars.',
    sanatan: {
      eyebrow: 'Sanātana · Chambal',
      title: 'Hindu lunar-solar festivals & riverine life',
      intro: [
        'Kartik and Phalgun matter for temples along the Chambal; monsoon festivals track water levels that affect both irrigation and boat imagery.',
      ],
      signature: sig(
        'dholpur',
        'machkund-naga',
        'Machkund fair & Nāga symbolism (regional water lore)',
        'Shravan · tanks and tanks’ ecology',
        [
          'Water tanks named in lore become tīrtha during monsoon — snakes, fertility, and hydrogeology meet in ritual language.',
          'Reason: arable anxiety and cooling symbolism in a hot belt.',
        ],
        'Puranic memory layers; modern irrigation changed river behaviour — rituals adapt slower than hydrology.',
        'Local priests and irrigation cooperatives — informal water governance.',
        [
          'Ichthyology & pollution: River quality affects ritual bathing — monitoring science.',
          'Tourism: Boating safety during fairs.',
        ],
      ),
    },
    islamic: {
      eyebrow: 'Islamic · border district',
      title: 'Islamic calendars in Dholpur',
      intro: [
        'Indo-Islamic neighbourhoods along trade routes observe Eid; cross-border cultural markets (legal goods) intensify seasonally.',
      ],
    },
  }),

  buildCityFestivalsBundle({
    slug: 'dungarpur',
    name: 'Dungarpur',
    leadParagraph1:
      'Dungarpur is southern tribal Rajasthan: Mahi river hills, Bhil polities, and festivals where royal–tribal negotiation memory still shapes public dance and fair timing. Panchang time meets community assembly.',
    sanatan: {
      eyebrow: 'Sanātana · Vagad hills',
      title: 'Hindu calendars & adivasi fair cycles',
      intro: [
        'Diwali and Holi are widely celebrated; local melās follow agricultural and forest product cycles tied to monsoon.',
      ],
      signature: sig(
        'dungarpur',
        'vagad-holi-gair',
        'Holi & post-monsoon dance gatherings (Gair variants)',
        'Phalgun–Chaitra · circle dances',
        [
          'Gair-style dances appear in regional variants — men’s rhythmic lines and drums mark seasonal joy after Holi.',
          'Reason: social cohesion in scattered hamlets — dance as scalable coordination.',
        ],
        'Documented in ethnographies; audio recording changed repertoire circulation.',
        'Youth clubs and caste-tribe networks — evolving leadership.',
        [
          'Forestry: Seasonal forest access affects venue choice — political ecology.',
          'Gender: Participation rules vary — anthropological nuance.',
        ],
      ),
    },
    islamic: {
      eyebrow: 'Islamic · southern district',
      title: 'Islamic feasts in Dungarpur',
      intro: [
        'Smaller urban Muslim communities observe hijrī feasts; rural–urban kinship networks share iftār during Ramadan.',
      ],
    },
  }),

  buildCityFestivalsBundle({
    slug: 'hanumangarh',
    name: 'Hanumangarh',
    leadParagraph1:
      'Hanumangarh is Ghaggar–Hakra plain country: ancient site memory, canal irrigation, and festivals tuned to wheat–cotton rotations and cold winters. The calendar overlaps Punjab-border cultural time.',
    sanatan: {
      eyebrow: 'Sanātana · northwest plains',
      title: 'Hindu lunar-solar festivals & agrarian winters',
      intro: [
        'Makar Saṅkrānti and Lohri neighbourhood echoes matter in cold season; Kartik Diwali aligns with post-kharif gratitude.',
      ],
      signature: sig(
        'hanumangarh',
        'lohri-makar-border',
        'Makar Saṅkrānti & Lohri-season bonfires (northwest winter)',
        'Paush–Magha · sesame–revwri',
        [
          'Bonfires and sweets mark the solar hinge — in border districts the cultural vocabulary blends with Punjabi winter festivals.',
          'Reason: body-warming foods, kin gatherings before spring sowing psychology.',
        ],
        'Agricultural calendars predate modern districts; canal colonies added migrant mixes.',
        'Farm households and urban traders — joint celebration geographies.',
        [
          'Air quality: Stubble and bonfires — atmospheric science debates.',
          'Migration: Punjab-linked labour — calendar synchronization.',
        ],
      ),
    },
    islamic: {
      eyebrow: 'Islamic · northwest towns',
      title: 'Islamic calendars in Hanumangarh',
      intro: [
        'Indo-Islamic feasts are observed in towns; border economy rhythms sometimes align festival shopping with mandi arrivals.',
      ],
    },
  }),

  buildCityFestivalsBundle({
    slug: 'jaisalmer',
    name: 'Jaisalmer',
    leadParagraph1:
      'Jaisalmer is golden fort and dunes: Thar tourism, camel culture, and a festival economy where winter is “the” season. The Desert Festival is globally known; Diwali still lights the sandstone city every Kartik.',
    sanatan: {
      eyebrow: 'Sanātana · Thar fort',
      title: 'Hindu lunar-solar festivals & desert symbolism',
      intro: [
        'Kartik and Phalgun structure pilgrimage and colour inside the fort and in villages; water timing is existential in this rainfall regime.',
      ],
      signature: sig(
        'jaisalmer',
        'desert-festival',
        'Jaisalmer Desert Festival (winter tourism showcase)',
        'Magha · dunes + folk performance',
        [
          'Camel races, turban competitions, and folk music staged for visitors — livelihoods for musicians and breeders; not a single-tithi “religious” event but a civic scheduling of desert identity.',
          'Reason: concentrates income in the short tourism window — seasonal development economics.',
        ],
        'State tourism product from late 20th century; local fairs older.',
        'District admin, hotel associations, herders — negotiated spectacle.',
        [
          'Sand dune ecology: Vehicle damage — conservation science.',
          'Heat: Even “winter” can warm — heat-stress medicine at events.',
        ],
      ),
    },
    islamic: {
      eyebrow: 'Islamic · border fort',
      title: 'Eid & mosques in Jaisalmer',
      intro: [
        'Old City mosques and Sufi-linked memory participate in Ramadan and Eid; border security context means checking local advisories during large gatherings.',
      ],
    },
  }),

  buildCityFestivalsBundle({
    slug: 'jalore',
    name: 'Jalore',
    leadParagraph1:
      'Jalore is southwestern fort country: Aravalli outliers toward Gujarat, Sundha Mata pilgrimage pull, and festivals that mix Marwari devotion with pastoral trade fairs. Heat shapes every outdoor gathering.',
    sanatan: {
      eyebrow: 'Sanātana · southwestern',
      title: 'Hindu lunar-solar festivals & hill shrines',
      intro: [
        'Navrātrī and Kartik see spikes at śakti sites; Holi and Diwali remain universal merchant–farmer anchors.',
      ],
      signature: sig(
        'jalore',
        'sundha-mata',
        'Sundha Mata Navrātrī & hill pilgrimage peaks',
        'Ashwin–Chaitra · śakti vows',
        [
          'Sundha Mata draws lakhs during Navrātrī — hill roads, stalls, and vow narratives structure district traffic.',
          'Reason: śakti devotion plus regional employment in services — classic pilgrimage economy.',
        ],
        'Long-standing śakti geography; road improvements changed crowd scale.',
        'Temple committees and transport unions — safety-critical governance.',
        [
          'Slope stability & crowd crush risk — civil engineering.',
          'Waste: Hill shrines need carrying-capacity planning.',
        ],
      ),
    },
    islamic: {
      eyebrow: 'Islamic · southwestern towns',
      title: 'Islamic feasts in Jalore',
      intro: [
        'Indo-Islamic neighbourhoods follow lunar feasts; proximity to Gujarat adds trade-linked diversity in mosque styles and cuisines during Ramadan.',
      ],
    },
  }),

  buildCityFestivalsBundle({
    slug: 'jhalawar',
    name: 'Jhalawar',
    leadParagraph1:
      'Jhalawar is southeastern Hadoti: river-fed fields, Chandrabhaga fair memory, and festivals that align with Kota–Bundi circuits. Monsoon and post-monsoon melās cluster when water and crops align.',
    sanatan: {
      eyebrow: 'Sanātana · Hadoti',
      title: 'Hindu lunar-solar festivals & river fairs',
      intro: [
        'Kartik full-moon bathing imagery matters near rivers; Phalgun Holi bridges town and village youth networks.',
      ],
      signature: sig(
        'jhalawar',
        'chandrabhaga-kartik',
        'Chandrabhaga (Charmanwati) Kartik bathing memory (regional)',
        'Kārtika · river snāna ethics',
        [
          'North Indian Kartik snāna traditions attach moral weight to dawn rivers — in Hadoti, water availability makes some years more “successful” than others.',
          'Reason: purification symbolism tied to agricultural gratitude — hydrology is theology-adjacent.',
        ],
        'Puranic river names layer over changing channels — geomorphology vs textual memory.',
        'Pilgrim families and irrigation cooperatives — practical hydrology actors.',
        [
          'Water quality: Bacterial loads after monsoon — public health.',
          'Climate change: Flow variability — adaptive ritual commentary.',
        ],
      ),
    },
    islamic: {
      eyebrow: 'Islamic · Hadoti district',
      title: 'Islamic calendars in Jhalawar',
      intro: [
        'Town mosques coordinate Eid; smaller qasbahs may share imāms — transport links to Kota matter for religious education networks.',
      ],
    },
  }),

  buildCityFestivalsBundle({
    slug: 'jhunjhunu',
    name: 'Jhunjhunu',
    leadParagraph1:
      'Jhunjhunu is core Shekhawati: painted havelis, mining and business remittances, and festivals that finance competitive Diwali facades. The calendar is a remittance and school-holiday synchronizer.',
    sanatan: {
      eyebrow: 'Sanātana · Shekhawati',
      title: 'Hindu lunar-solar festivals & merchant towns',
      intro: [
        'Gangaur, Teej, Holi, and Diwali are visually intense — youth return from cities for specific tithi weeks.',
      ],
      signature: sig(
        'jhunjhunu',
        'shekhawati-gangaur',
        'Gangaur in Shekhawati lanes (clay processions & haveli sponsorship)',
        'Chaitra · marital vows & neighbourhood pride',
        [
          'Gangaur processions weave through frescoed streets — kinship and sponsorship visible on every balcony.',
          'Reason: gendered public ritual tied to marital flourishing narratives — sociology meets aesthetics.',
        ],
        'Courtly patronage historically; NRIs now sponsor loudspeakers and lights.',
        'Women’s societies and family networks — leadership plural.',
        [
          'Noise: Decibel norms — civic science.',
          'Art conservation: Procession smoke near paintings — risk management.',
        ],
      ),
    },
    islamic: {
      eyebrow: 'Islamic · Shekhawati',
      title: 'Eid & mosques in Jhunjhunu',
      intro: [
        'Indo-Islamic feasts proceed in town mosques; Shekhawati pluralism often means knowing multiple procession calendars in one market square.',
      ],
    },
  }),

  buildCityFestivalsBundle({
    slug: 'karauli',
    name: 'Karauli',
    leadParagraph1:
      'Karauli is eastern palace country: Kaila Devi pilgrimage, forested hills, and festivals that tie śakti vows to Chambal-region mobility. Navrātrī peaks reshape district traffic.',
    sanatan: {
      eyebrow: 'Sanātana · Karauli region',
      title: 'Hindu lunar-solar festivals & śakti peaks',
      intro: [
        'Ashwin and Chaitra Navrātrī concentrate śakti publics; Holi and Diwali still structure the merchant year in Karauli town.',
      ],
      signature: sig(
        'karauli',
        'kaila-devi-navratri',
        'Kaila Devi shrine peaks (Navrātrī & Chaitra crowds)',
        'Ashwin–Chaitra · śakti vows',
        [
          'Kaila Devi draws massive vows during Navrātrī — rural buses, stalls, and policing plans treat it as a temporary city.',
          'Reason: śakti barakat in folk idiom — vow fulfilment economies are real.',
        ],
        'Long-term pilgrimage geography; road widening changed crush physics.',
        'Temple administration and state transport — disaster-risk literature applies.',
        [
          'Wildlife: Forest edges — human–animal interface management.',
          'Public health: Food stalls at scale — surveillance science.',
        ],
      ),
    },
    islamic: {
      eyebrow: 'Islamic · eastern district',
      title: 'Islamic feasts in Karauli',
      intro: [
        'Muslim communities in towns observe Eid; rural service workers often move seasonally — festival return trips mirror harvest labour.',
      ],
    },
  }),

  buildCityFestivalsBundle({
    slug: 'kota',
    name: 'Kota',
    leadParagraph1:
      'Kota is Chambal education capital: coaching clocks, river ghats, and a Dussehra famous for huge mela grounds. Festivals here are entangled with student migration — when hostels empty for Holi and when parents visit during Diwali.',
    sanatan: {
      eyebrow: 'Sanātana · Hadoti',
      title: 'Hindu lunar-solar festivals & Kota’s Dussehra',
      intro: [
        'Ashwin Vijayadashami dominates public imagination — effigies on the Chambal frontage are a civic spectacle; Kartik and Phalgun still carry standard tithi grammar.',
      ],
      signature: sig(
        'kota',
        'kota-dussehra',
        'Kota Dussehra (Vijayādaśamī riverfront melā)',
        'Ashwin · massive public spectacle',
        [
          'Kota’s Dussehra is known for scale — processions, fairs, and fireworks along the river; meaning remains Rāma’s victory plus local pride in orderly civic ritual.',
          'Reason: combines religious narrative with municipal crowd management prestige — a city branding device.',
        ],
        'Royal and municipal patronage histories; modern safety regulation intensifies.',
        'District collector office, police, temple trusts — interagency choreography.',
        [
          'Riverfront crowd physics — disaster-risk engineering.',
          'Air quality: Fireworks — PM2.5 spikes studied in Indian cities.',
        ],
      ),
    },
    islamic: {
      eyebrow: 'Islamic · coaching city',
      title: 'Islamic feasts & mosques in Kota',
      intro: [
        'Student-heavy neighbourhoods mix mosque timings with coaching schedules — Ramadan iftār among out-of-state migrants is a distinct urban sociology.',
      ],
    },
  }),

  buildCityFestivalsBundle({
    slug: 'nagaur',
    name: 'Nagaur',
    leadParagraph1:
      'Nagaur is cattle-fair country: desert trade, Sufi shrine memory, and a festival economy where the Ramdevra and Nagaur fairs concentrate pastoral liquidity. Holi and Diwali still beat the year for every household.',
    sanatan: {
      eyebrow: 'Sanātana · Nagaur region',
      title: 'Hindu lunar-solar festivals & livestock fairs',
      intro: [
        'Kartik and Phalgun matter universally; regional fair cycles attach to cattle and wool more than to a single court.',
      ],
      signature: sig(
        'nagaur',
        'nagaur-cattle-fair',
        'Nagaur Cattle Fair (winter livestock & culture melā)',
        'Magha–Phalgun · trade + performance',
        [
          'One of the largest cattle fairs in the region — camels, horses, and folk performance; economic geography of pastoral search costs.',
          'Reason: seasonal liquidity for breeders — festival as market institution.',
        ],
        'Centuries of desert trade; modern veterinary stalls and digital payments are new layers.',
        'Herders, traders, district admin — contract enforcement informal but real.',
        [
          'Zoonosis risk at animal density — veterinary public health.',
          'Dust and respiratory load — occupational medicine.',
        ],
      ),
    },
    islamic: {
      eyebrow: 'Islamic · Nagaur town',
      title: 'Eid, Sufi memory & mosques',
      intro: [
        'Nagaur’s Indo-Islamic past includes shrine-centred neighbourhoods; Ramadan and Eid intersect with fair-season labour mobility — calendars overlap in interesting ways.',
      ],
    },
  }),

  buildCityFestivalsBundle({
    slug: 'pali',
    name: 'Pali',
    leadParagraph1:
      'Pali is western industry and pilgrimage circuits: marble, textiles, and routes toward Ranakpur and Parshuram Mahadev that shape “festival traffic” differently from a pure desert town. Jain tithi observances add quiet density to the public calendar.',
    sanatan: {
      eyebrow: 'Sanātana · Marwar gateway',
      title: 'Hindu lunar-solar festivals & pilgrimage edges',
      intro: [
        'Holi and Diwali are mass events; Mahāśivarātrī and other śaiva peaks matter near hills; Jain communities add parallel fasting calendars that affect restaurant markets.',
      ],
      signature: sig(
        'pali',
        'mahashivaratri-marwar',
        'Mahāśivarātrī & hill śaiva circuits (regional)',
        'Phalguna · all-night vigil',
        [
          'Night vigils and bilva offerings scale with proximity to Aravalli śaiva sites — Pali district sits on road networks toward such tirths.',
          'Reason: śiva as timekeeper of yoga and austerity — physiology of fasting enters public conversation.',
        ],
        'All-India śaiva grammar; local buses amplify crowds.',
        'Temples and private donors — infrastructure competition.',
        [
          'Sleep deprivation medicine — public health at mass vigils.',
          'Traffic: Night convoys — road safety science.',
        ],
      ),
    },
    islamic: {
      eyebrow: 'Islamic · western district',
      title: 'Islamic feasts in Pali',
      intro: [
        'Indo-Islamic neighbourhoods follow Eid rhythms; industrial shift schedules interact with Ramadan — HR policies in factories sometimes negotiate breaks.',
      ],
    },
  }),

  buildCityFestivalsBundle({
    slug: 'pratapgarh',
    name: 'Pratapgarh',
    leadParagraph1:
      'Pratapgarh is southern tribal Rajasthan: forested hills, mixed agriculture, and festival cycles tied to monsoon and migration. Standard tithi festivals appear alongside adivasi fair memory.',
    sanatan: {
      eyebrow: 'Sanātana · Vagad',
      title: 'Hindu calendars & local melās',
      intro: [
        'Diwali and Holi are widely shared; village assemblies time fairs to crops and forest produce.',
      ],
      signature: sig(
        'pratapgarh',
        'monsoon-mela-tribal',
        'Post-monsoon village melās (agriculture & kinship)',
        'Bhadrapad–Ashwin · harvest gratitude',
        [
          'Smaller melās celebrate surplus and kin return after seasonal migration — dance and music scale to available crowds.',
          'Reason: risk pooling in uncertain rainfall — ritual as social insurance metaphor.',
        ],
        'Oral tradition; Panchayat schedules now intersect.',
        'Elders and youth clubs — leadership in transition.',
        [
          'Climate volatility: Rainfall variance — adaptive sociology.',
          'Education: Exam calendars vs festivals — household tension.',
        ],
      ),
    },
    islamic: {
      eyebrow: 'Islamic · southern district',
      title: 'Islamic calendars in Pratapgarh',
      intro: [
        'Smaller Muslim communities observe hijrī feasts; interfaith neighbourhood patterns in towns follow everyday trade rhythms.',
      ],
    },
  }),

  buildCityFestivalsBundle({
    slug: 'rajsamand',
    name: 'Rajsamand',
    leadParagraph1:
      'Rajsamand is Mewar lake district: Rajsamand Lake memory, marble economy, and festivals that orbit Krishna lore and monsoon ghats. Independence-era integration stories overlap with local courtly festival patronage.',
    sanatan: {
      eyebrow: 'Sanātana · Mewar',
      title: 'Hindu lunar-solar festivals & lake symbolism',
      intro: [
        'Shravan–Bhadrapad festivals use water bodies; Kartik and Holi carry standard Rajasthani public forms with Mewar idioms.',
      ],
      signature: sig(
        'rajsamand',
        'haldighati-janmashtami',
        'Janmāṣṭamī & regional Krishna memory (Mewar circuits)',
        'Shravan · night vigil',
        [
          'Krishna’s birth is celebrated with fasting, sweets, and child-god swings; in Mewar the landscape carries epic memory that tourists often frame around Haldighati routes.',
          'Reason: bhakti publics + heritage tourism — calendars coordinate both devotion and itineraries.',
        ],
        'Bhakti print and media; security routes during major nights.',
        'Temples and tour operators — supply chain of devotion.',
        [
          'Crowd control at midnight peaks — medical tents.',
          'Water: Lake ghats — limnology and safety.',
        ],
      ),
    },
    islamic: {
      eyebrow: 'Islamic · Mewar district',
      title: 'Islamic feasts in Rajsamand',
      intro: [
        'Town mosques observe Ramadan and Eid; marble workshops see seasonal slowdowns around major festivals — labour sociology.',
      ],
    },
  }),

  buildCityFestivalsBundle({
    slug: 'sawai-madhopur',
    name: 'Sawai Madhopur',
    leadParagraph1:
      'Sawai Madhopur is gateway to Ranthambhore: forest tourism clocks, Ganesh Chaturthi processions, and Navrātrī peaks that share roads with tiger safaris. Festivals help predict crowd competition between pilgrims and wildlife visitors.',
    sanatan: {
      eyebrow: 'Sanātana · forest gateway',
      title: 'Hindu lunar-solar festivals & pilgrimage traffic',
      intro: [
        'Ganesh Chaturthi and Navrātrī concentrate processions; Holi and Diwali structure the local market year around the fort town.',
      ],
      signature: sig(
        'sawai-madhopur',
        'ganesh-chaturthi-ranthambhore',
        'Ganesh Chaturthi & fort-town processions (tourism overlap)',
        'Bhadrapad · elephant-headed god',
        [
          'Ganesh idols move through lanes — in a tourism town, processions share road space with safari jeeps and hotel logistics.',
          'Reason: vow fulfilment and neighbourhood identity — also a planning puzzle for municipal traffic.',
        ],
        'All-India Hindu grammar; local timber and idol markets — informal economy.',
        'Puja committees and forest department — occasional conflict over noise near reserve edges.',
        [
          'Wildlife: Noise near forest — conservation science.',
          'Solid waste: Idol immersion — river chemistry debates.',
        ],
      ),
    },
    islamic: {
      eyebrow: 'Islamic · forest town',
      title: 'Islamic feasts in Sawai Madhopur',
      intro: [
        'Indo-Islamic neighbourhoods follow Eid; tourism seasonality means hospitality workers face peak labour during festivals — wage spikes.',
      ],
    },
  }),

  buildCityFestivalsBundle({
    slug: 'sikar',
    name: 'Sikar',
    leadParagraph1:
      'Sikar is Shekhawati’s busy hub: havelis, agrarian markets, and coaching/education migration similar to Kota on a smaller scale. Gangaur, Teej, Holi, and Diwali structure remittance displays and school holidays.',
    sanatan: {
      eyebrow: 'Sanātana · Shekhawati',
      title: 'Hindu lunar-solar festivals & market town life',
      intro: [
        'Phalgun Holi and Kartik Diwali are city-wide; Gangaur processions compete for attention with exam calendars.',
      ],
      signature: sig(
        'sikar',
        'shekhawati-teej-gangaur',
        'Teej & Gangaur in Sikar’s bazaars',
        'Shravan–Chaitra · swings & clay images',
        [
          'Women-led festivals dominate summer monsoon and spring streets — textiles and jewellery markets spike.',
          'Reason: śakti devotion intertwined with visible prosperity ethics in merchant aesthetics.',
        ],
        'Shekhawati cultural geography; social media changed parade choreography.',
        'Women’s organisations and traders’ associations — hybrid leadership.',
        [
          'Heat stress during day processions — occupational health for participants.',
          'Street electrical safety — municipal engineering.',
        ],
      ),
    },
    islamic: {
      eyebrow: 'Islamic · Shekhawati hub',
      title: 'Eid & mosques in Sikar',
      intro: [
        'Indo-Islamic feasts structure Old City lanes; exam-season quiet hours sometimes negotiate with night Ramadan markets — civic compromise.',
      ],
    },
  }),

  buildCityFestivalsBundle({
    slug: 'sirohi',
    name: 'Sirohi',
    leadParagraph1:
      'Sirohi is Abu road and hill country: pilgrimage routes toward Ambaji and Mount Abu, marble and tourism supply chains, and festivals that include both hot-plain summers and cool-season hill escapes.',
    sanatan: {
      eyebrow: 'Sanātana · Aravalli slopes',
      title: 'Hindu lunar-solar festivals & hill pilgrimage',
      intro: [
        'Navrātrī and Kartik see movement toward śakti sites; Holi and Diwali remain universal anchors in Sirohi town.',
      ],
      signature: sig(
        'sirohi',
        'ambaji-navratri',
        'Navrātrī traffic toward Ambaji & Gujarat-border śakti peaks',
        'Ashwin–Chaitra · multi-state pilgrims',
        [
          'Sirohi district funnels pilgrims toward Ambaji — buses, hotels, and police plans treat festival weeks as infrastructure stress tests.',
          'Reason: śakti geography crosses state lines — calendar literacy includes traffic science.',
        ],
        'Long-term pilgrimage economics; toll roads changed journey times.',
        'Temple trusts and transport unions — price volatility during peaks.',
        [
          'Road safety: Hairpin routes — engineering.',
          'Carbon: Bus fleets — environmental accounting debates.',
        ],
      ),
    },
    islamic: {
      eyebrow: 'Islamic · border district',
      title: 'Islamic feasts in Sirohi',
      intro: [
        'Indo-Islamic neighbourhoods observe Eid; proximity to Gujarat adds trade-linked diversity in mosque life and Ramadan markets.',
      ],
    },
  }),

  buildCityFestivalsBundle({
    slug: 'sri-ganganagar',
    name: 'Sri Ganganagar',
    leadParagraph1:
      'Sri Ganganagar is canal-colony northwestern Rajasthan: Punjab-border culture, wheat–cotton cycles, and festivals where Lohri–Makar vocabulary blends with Rajasthani observance. Republic Day cold parades here are genuinely winter events.',
    sanatan: {
      eyebrow: 'Sanātana · canal belt',
      title: 'Hindu lunar-solar festivals & northwest winters',
      intro: [
        'Kartik Diwali and Phalgun Holi are widely observed; Vasant and harvest festivals echo cross-border kinship.',
      ],
      signature: sig(
        'sri-ganganagar',
        'baisakhi-vaisakhi-border',
        'Vaisākhī / harvest gratitude in the canal belt',
        'Vaisākha · wheat harvest psychology',
        [
          'Harvest festivals in northwest India carry gratitude and kin feasts — in Ganganagar the canal network changed which fields prosper first.',
          'Reason: coordinates agricultural labour returns with religious joy — political economy of water.',
        ],
        'Colonial canal colonies + post-Partition demographic shifts.',
        'Farm unions and gurdwaras/temples — plural leadership.',
        [
          'Groundwater: Canal vs tubewell — hydrology science.',
          'Air quality: Harvest fires — atmospheric monitoring.',
        ],
      ),
    },
    islamic: {
      eyebrow: 'Islamic · Ganganagar city',
      title: 'Islamic feasts & border towns',
      intro: [
        'Indo-Islamic feasts are observed in urban neighbourhoods; mandi calendars and Eid shopping sometimes align — informal sector synergies.',
      ],
    },
  }),

  buildCityFestivalsBundle({
    slug: 'tonk',
    name: 'Tonk',
    leadParagraph1:
      'Tonk is Nawabi memory: Sunni scholarly towns, Urdu book culture, and festivals where Islamic calendars feel especially public alongside Hindu tithi observance. Eid and Muharram patterns have historically visible town morphology.',
    sanatan: {
      eyebrow: 'Sanātana · Hadoti edge',
      title: 'Hindu lunar-solar festivals & town pluralism',
      intro: [
        'Holi, Diwali, and Navrātrī are widely observed; regional śakti sites draw seasonal pilgrims from surrounding districts.',
      ],
      signature: sig(
        'tonk',
        'navratri-plural-town',
        'Navrātrī & Durgā publics in a plural townscape',
        'Ashwin–Chaitra · śakti processions',
        [
          'Navrātrī processions share streets with everyday mosque clocks — Tonk’s urban fabric is a lesson in layered soundscapes.',
          'Reason: śakti devotion as public culture — sociology of coexistence is concrete, not abstract.',
        ],
        'Medieval and modern town planning; loudspeaker regulations now mediate coexistence.',
        'Puja committees and anjumans — negotiated routes.',
        [
          'Noise mapping — acoustic science.',
          'Security: Route planning — operations research.',
        ],
      ),
    },
    islamic: {
      eyebrow: 'Islamic · Nawabi towns',
      title: 'ʿĪd, Ramadan & scholarly Tonk',
      intro: [
        'Tonk’s Indo-Islamic heritage includes madrasa and print cultures — Ramadan tarāwīḥ and Eid markets have long shaped night bazaars and bookstalls.',
      ],
    },
  }),
]

export const REST_CITY_FESTIVALS: Record<string, CityFestivalsBundle> = Object.fromEntries(
  REST.map((b) => [b.citySlug, b]),
)
