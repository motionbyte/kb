import type { City } from '@/types'

/** Full guide entries — Alwar-style rich description, seasonal bestTime, local tips */
const citiesFeatured: City[] = [
  {
    id: 'jaipur',
    name: 'Jaipur',
    slug: 'jaipur',
    tagline: 'Pink City, golden hours',
    region: 'East Rajasthan',
    description:
      'The capital wraps you in terracotta walls, palace courtyards, and jewellery bazaars — Amber’s ridges, Nahargarh’s views, and the old city’s chaos in one itinerary. Ideal when you want colour, craft, and cuisine without leaving the highway loop.',
    bestTime:
      'October–March: clearest skies for Amber, Nahargarh, Hawa Mahal photos, and evening walks in Johari bazaar; evenings can be cool in January — light layer. April–June: extreme heat; start forts at 6–7 AM, avoid open plazas 11 AM–4 PM, hydrate. July–September: monsoon breaks heat but sudden storms — carry cover; Jal Mahal reflections can shine. Diwali & New Year: peak crowds — book stays and drivers early.',
    localTips: [
      'Book Amber Fort mornings or late afternoons; combo tickets with Jaigarh save time.',
      'Johari & Tripolia: ask before photographing artisans; carry cash for small vendors.',
      'Heritage walks: modest dress at temples; City Palace galleries may restrict flash.',
    ],
  },
  {
    id: 'udaipur',
    name: 'Udaipur',
    slug: 'udaipur',
    tagline: 'Lakes, ghats, and marble glow',
    region: 'Southern Rajasthan',
    description:
      'Lake Pichola and Fateh Sagar frame marble palaces, ghats, and rooftop dinners — gentler pace than the desert cities, with Aravalli ridges for sunrise hikes. Monsoon turns the hills lush; winter is the classic wedding-and-leisure season.',
    bestTime:
      'September–March: best for boat rides, City Palace, and walking old-city lanes; peak weddings Nov–Feb — book boats and tables. April–June: hot but mornings/evenings workable on the water. July–September: heavy monsoon can disrupt boat schedules — check daily; greenery peaks. Holi & Gangaur: festive but busy — plan buffer time.',
    localTips: [
      'Sunset boats sell out — reserve same morning or day before in peak season.',
      'Jagdish Temple & ghats: dress modestly; watch steps when wet.',
      'Monsoon Palace road: confirm fog/visibility before driving up for sunset.',
    ],
  },
  {
    id: 'jodhpur',
    name: 'Jodhpur',
    slug: 'jodhpur',
    tagline: 'Blue lanes, mighty fort',
    region: 'Western Rajasthan',
    description:
      'Mehrangarh dominates the skyline; the old blue quarters, spice markets, and Jaswant Thada’s marble lie below. Desert winds dry the air — dramatic light, strong sun, and a cinematic old city best explored in short morning or evening bursts.',
    bestTime:
      'October–March: ideal fort & old-city weather; January nights can be cool on the ramparts. April–June: very hot — Mehrangarh first slot (~8–9 AM), Clock Tower after 4 PM. July–September: sporadic rain; slippery stone — grip footwear. Marwar festivals & desert events: check dates for hotel surge.',
    localTips: [
      'Audio guide at Mehrangarh adds context; allow 2–3 hours including museum.',
      'Blue city lanes: narrow, uneven — morning light for photos, water in summer.',
      'Mandore gardens: combine with fort day if pacing heat.',
    ],
  },
]

const citiesRest: City[] = [
  {
    id: 'ajmer',
    name: 'Ajmer',
    slug: 'ajmer',
    tagline: 'Dargah breeze, Ana Sagar rim',
    region: 'Central Rajasthan',
    description:
      'Ajmer sits in the Aravalli fold between the Thar edge and the plains — Ana Sagar’s embankments, Akbari Fort’s museums, and the Chishti dargah draw pilgrims year-round; Pushkar’s ghats are a short hop. Layers of Chauhan, Sultanate, Mughal, and British maps meet in one busy junction town.',
    bestTime:
      'October–March: clearest weather for the dargah, lakeside walks, museums, and Pushkar day-trips. April–June: start at sunrise; avoid 11 AM–4 PM outdoors. July–September: monsoon humidity & slick ghats — carry cover. Urs & Kartik: huge pilgrim flows — book stays and transport early.',
    localTips: [
      'Mornings are gentler at monuments and markets.',
      'Ask your stay for trusted drivers and fair fares.',
      'Same-day Pushkar: carry water, sun cover, and modest layers for temple areas.',
    ],
  },
  {
    id: 'alwar',
    name: 'Alwar',
    slug: 'alwar',
    tagline: 'Sariska gateway, hill forts',
    region: 'North-East Rajasthan',
    description:
      'Alwar straddles the eastern Aravallis between the Delhi–Jaipur highway and tiger country — Bala Quila’s ridges, Siliserh’s monsoon sparkle, and Sariska’s dry forests in one weekend radius. The town keeps a princely-capital feel: milk-cake shops, old bazaars, and museums that tie Matsya lore to modern Rajasthan.',
    bestTime:
      'October–March: clearest skies and pleasant days for Bala Quila, City Palace pockets, Siliserh, and early-morning Sariska jeep safaris — winter can be cool at dawn in the forest; carry a light jacket. April–June: intense heat on the ridges; if you visit, start at sunrise for the fort and reserve slots, rest midday, hydrate. July–September: greener hills and fuller tanks (Siliserh can look lovely); humidity rises and trails may be slick — good for landscape, plan flexible outdoor time. Matsya festival & long weekends: book Sariska drives and stays early; avoid black-market “guaranteed” wildlife promises.',
    localTips: [
      'Sariska: book park safaris through official channels; winter mornings improve odds of animal movement near water.',
      'Fort walks: carry water and sun cover; afternoons on exposed ramparts are punishing in summer.',
      'Same-day Neemrana or Jaipur legs are doable — confirm highway traffic windows with your driver.',
    ],
  },
  {
    id: 'banswara',
    name: 'Banswara',
    slug: 'banswara',
    tagline: 'Hills, dams, tribal colour',
    region: 'Southern Rajasthan',
    description:
      'The “area of a hundred islands” — Mahi backwaters, dam reservoirs, and forested Aravalli folds where tribal belts, weekly haats, and monsoon-green hills contrast with the desert west.',
    bestTime:
      'October–March: pleasant for Anand Sagar, fort viewpoints, and village circuits; winter mornings mild. April–June: hot and humid — schedule outdoor blocks early. July–September: heavy monsoon — lush dams but road checks; carry rain gear. Tribal fairs & Holi: vibrant but plan transport in advance.',
    localTips: [
      'Combine with Dungarpur if ridge-hopping — confirm district road conditions in monsoon.',
      'Respect tribal-market photography etiquette — ask before portraits.',
      'Carry cash for haat days; ATMs thinner in interior belts.',
    ],
  },
  {
    id: 'baran',
    name: 'Baran',
    slug: 'baran',
    tagline: 'Hadoti rivers, quiet shrines',
    region: 'South-East Rajasthan',
    description:
      'Hadoti’s quieter district — Kishori river tanks, Shergarh’s fort outlook, and Chambal-side picnic country between Kota’s coaching bustle and the calmer hinterland.',
    bestTime:
      'October–March: best for fort walks, river ghats, and day hops toward Kota or Chittorgarh. April–June: scorching — limit midday outdoors. July–September: monsoon fills tanks and turns fields green — verify rural roads. Exam-season traffic spikes near Kota — plan highway time.',
    localTips: [
      'Shergarh & baori clusters: start early; carry water in summer.',
      'Kota combo: book trains/buses — highway can be busy with student traffic.',
      'Wildlife buffers toward Chambal: follow local guides; no night wading.',
    ],
  },
  {
    id: 'barmer',
    name: 'Barmer',
    slug: 'barmer',
    tagline: 'Desert crafts, border light',
    region: 'Western Rajasthan',
    description:
      'Thar sand, oilseed fields, and craft villages — ajrakh block prints, wood carving, and the desert festival’s folk stages — with Jaisalmer and Jodhpur reachable on long highway legs.',
    bestTime:
      'November–February: kindest for outdoor fairs, village visits, and sunset silhouettes; nights can be cool. March–June: extreme heat — schedule dawn/dusk only. July–September: patchy monsoon; rare green bursts — check road news. Desert Festival dates: book stays and confirm event grid.',
    localTips: [
      'Carry sun cover, lip balm, and litres of water April–June.',
      'Respect border-area photography rules — ask locals about sensitive zones.',
      'Craft purchases: buy from artisans when possible; verify natural dyes.',
    ],
  },
  {
    id: 'bharatpur',
    name: 'Bharatpur',
    slug: 'bharatpur',
    tagline: 'Keoladeo birds, Jat lore',
    region: 'North-East Rajasthan',
    description:
      'Keoladeo Ghana’s wetlands — rickshaw birding at dawn — and Lohagarh’s massive bastions, with Braj culture and Agra/Fatehpur day-trip options on the golden triangle fringe.',
    bestTime:
      'October–March: peak migration — misty winter mornings for cranes, ducks, and raptors; carry layers. April–June: hot — birding still possible at first light; avoid midday paths. Monsoon: breeding residents; humidity and mosquitoes — repellent & cover. Brij Festival: check February window.',
    localTips: [
      'Hire approved rickshaw guides inside the park — tip policy varies.',
      'Deeg palaces: combine as half-day; fountain days need seasonal luck.',
      'Agra traffic: add buffer for Taj legs from Bharatpur.',
    ],
  },
  {
    id: 'bhilwara',
    name: 'Bhilwara',
    slug: 'bhilwara',
    tagline: 'Textile hum, temple towns',
    region: 'Central Rajasthan',
    description:
      'A major textile hub on the Jaipur–Udaipur corridor — mill towns, temple clusters, and the Mewar–Malwa transition belt — fewer monuments than capitals but real industrial Rajasthan.',
    bestTime:
      'October–March: pleasant for temple visits and short drives into the Aravalli foothills. April–June: dry heat — plan indoor industry visits or early stops. Monsoon: moderate rain; occasional heavy spells — check road to Chittorgarh side trips.',
    localTips: [
      'Factory outlet visits usually need prior contacts — ask your hotel.',
      'Weekend traffic toward Udaipur/Chittorgarh: leave buffer time.',
      'Local dhabas: try seasonal sabzi; carry bottled water in summer.',
    ],
  },
  {
    id: 'bikaner',
    name: 'Bikaner',
    slug: 'bikaner',
    tagline: 'Junagarh, bhujia, camels',
    region: 'North-West Rajasthan',
    description:
      'Junagarh’s palaces inside the city (rare in Rajasthan), camel farms, Karni Mata’s shrine at Deshnoke, and the desert’s sweet-savoury food culture — bhujia, kachori, and winter fairs.',
    bestTime:
      'October–March: ideal for fort, havelis, and desert-edge drives; cool nights December–January. April–June: brutal afternoons — schedule Junagarh mornings. July–September: humid monsoon on the edge of Thar — fewer tourists, moody skies. Camel Festival: check January dates early.',
    localTips: [
      'Junagarh: ticket combos sometimes include museums — ask at counter.',
      'Deshnoke rats temple: remove shoes; respect queues.',
      'Desert detours: carry scarf against dust; full tank before remote loops.',
    ],
  },
  {
    id: 'bundi',
    name: 'Bundi',
    slug: 'bundi',
    tagline: 'Stepwell poetry, blue lanes',
    region: 'South-East Rajasthan',
    description:
      'Taragarh over blue lanes, Raniji ki Baori’s depth, and Nawal Sagar’s reflections — a compact Hadoti gem between Jaipur and Kota with fewer crowds than the big three.',
    bestTime:
      'October–March: perfect for stepwell photography and fort climbs; mornings clearest. April–June: intense heat — baori interiors cooler but slippery if wet. July–September: monsoon greens the hills — dramatic clouds; watch for slippery steps. Bundi Utsav: check winter dates.',
    localTips: [
      'Stepwells: no flash near bats; mind mossy steps.',
      'Chaurasia kachori: morning ritual — go early.',
      'Kota day-trip: Chambal ghats add time — plan return before dark if unfamiliar.',
    ],
  },
  {
    id: 'chittorgarh',
    name: 'Chittorgarh',
    slug: 'chittorgarh',
    tagline: 'Fort epic, tower silence',
    region: 'Southern Rajasthan',
    description:
      'India’s largest fort complex — Padmini Palace, Vijay Stambh, and Kirti Stambh on a long ridge — the epicentre of Sisodia memory and monsoon drama over Gambhir valleys.',
    bestTime:
      'October–March: full-day fort walks viable; carry water for exposed stretches. April–June: start at 7–8 AM; exit before noon heat. Monsoon: lush but lightning risk on open walls — check weather. Maharana Pratap Jayanti & Jauhar Mela: huge crowds — book transport.',
    localTips: [
      'Electric vehicle or own car saves walking inside the huge circuit.',
      'Guides vary in quality — agree on route and price upfront.',
      'Combine with Menal temples if time — add 45 min drive.',
    ],
  },
  {
    id: 'churu',
    name: 'Churu',
    slug: 'churu',
    tagline: 'Shekhawati fresco havelis',
    region: 'North-East Rajasthan',
    description:
      'Open-air art gallery of Rajasthan — merchant havelis with painted facades in Ramgarh, Fatehpur, and Sardarshahar — camel fairs and semi-arid light on the Shekhawati grid.',
    bestTime:
      'October–March: clearest for fresco photography; short winter days — plan 9 AM–4 PM rounds. April–June: extreme heat — paint fades in harsh noon light; shoot early. Monsoon: fewer tourists; humidity can dull colours — polarising filter helps. Ramdevra & local fairs: check dates.',
    localTips: [
      'Many havelis are private — knock politely or hire local guide.',
      'Carry water; lanes are dusty in summer winds.',
      'Sikar/Jhunjhunu loops: one base, multiple town drives.',
    ],
  },
  {
    id: 'dausa',
    name: 'Dausa',
    slug: 'dausa',
    tagline: 'Meena hills, village pace',
    region: 'East Rajasthan',
    description:
      'Gateway to Meena hills, Chand Baori at Abhaneri nearby, and the Jaipur–Agra highway’s calmer hinterland — village temples and harvest-season rhythm.',
    bestTime:
      'October–March: best for Abhaneri day-trip, village temples, and short hikes. April–June: very hot — Chand Baori early only. Monsoon: stepwell reflections; steps slippery — grip shoes. Long weekends from Delhi/Jaipur: traffic surge on NH-11.',
    localTips: [
      'Abhaneri: combine with Jaipur or Agra leg — same-day doable.',
      'Respect village camera rules — ask panchayat or elders.',
      'NH diversions: check Rajasthan PWD notices in monsoon.',
    ],
  },
  {
    id: 'dholpur',
    name: 'Dholpur',
    slug: 'dholpur',
    tagline: 'Chambal ravines, red stone',
    region: 'North-East Rajasthan',
    description:
      'Red sandstone quarries, Machkund’s kunds, Chambal’s ravines, and Mughal–Rajput fort layers — a quiet border district with Agra/Gwalior geometry.',
    bestTime:
      'October–March: pleasant for fort, kunds, and boat/safari ethics on Chambal (if arranging). April–June: scorching ravines — avoid midday. Monsoon: rising water — verify ghat safety. Winter fog: can delay Agra road links.',
    localTips: [
      'Chambal wildlife: use only licensed operators; no illegal wading.',
      'Stone quarry dust: mask if sensitive.',
      'Carry ID for interstate border checks.',
    ],
  },
  {
    id: 'dungarpur',
    name: 'Dungarpur',
    slug: 'dungarpur',
    tagline: 'Aravalli folds, palace lakes',
    region: 'Southern Rajasthan',
    description:
      'Green marble palaces, lake piers, and Aravalli folds — a softer, wetter corner near Gujarat with tribal art and monsoon-fed tanks.',
    bestTime:
      'October–March: ideal palace and lake weather; mild compared to desert. April–June: hot but mornings still workable. July–September: heavy monsoon — lush drives; check landslide news on ghats. Holi & local fairs: vibrant — book homestays.',
    localTips: [
      'Palace visits: confirm opening hours — some wings private.',
      'Banswara cross-day: verify road status in rains.',
      'Tribal art purchases: prefer cooperatives.',
    ],
  },
  {
    id: 'hanumangarh',
    name: 'Hanumangarh',
    slug: 'hanumangarh',
    tagline: 'Ghaggar fields, ancient mounds',
    region: 'North Rajasthan',
    description:
      'Indus–Saraswati archaeology belt — Kalibangan’s mounds, Ghaggar irrigation, and Punjab-border agriculture — cold winters, hot summers, and strong harvest winds.',
    bestTime:
      'October–March: best for site visits and fort ruins; fog can linger December–January — drive carefully. April–June: extreme heat — outdoor only at dawn. Monsoon: limited rain; dust storms possible pre-monsoon. Summer crop fires: check air quality.',
    localTips: [
      'Kalibangan: confirm ASI hours; carry sun hat.',
      'Border routes: keep documents handy.',
      'Winter fog: delay trains — check IRCTC updates.',
    ],
  },
  {
    id: 'jaisalmer',
    name: 'Jaisalmer',
    slug: 'jaisalmer',
    tagline: 'Golden fort, dunes at dusk',
    region: 'Western Rajasthan',
    description:
      'A living fort of golden limestone, Jain temples, haveli lanes, and Sam/Khuri dunes — Thar sunsets, desert festivals, and border-caravan romance.',
    bestTime:
      'November–February: peak desert season — cool nights, full fort days; Desert Festival dates book out fast. March–April: still viable mornings/evenings. May–September: extreme heat or monsoon humidity — many camps closed; check before booking dunes. Full moon over dunes: reserve camps early.',
    localTips: [
      'Living fort: luggage wheels struggle — pack light or use porters.',
      'Camel safaris: clarify inclusions; ethical operators avoid overload.',
      'Carry scarf, water, and lip balm year-round.',
    ],
  },
  {
    id: 'jalore',
    name: 'Jalore',
    slug: 'jalore',
    tagline: 'Granite fort, spice routes',
    region: 'Western Rajasthan',
    description:
      'The granite fort on Swarnagiri, spice and marble trade routes, and Marwar–Gujarat crossroads — quieter than Jodhpur but with serious medieval walls.',
    bestTime:
      'October–March: best for fort climb and town walks; winter mornings crisp. April–June: brutal — fort only at sunrise. Monsoon: moderate; granite can be slippery — careful footing. Local fairs: ask district calendar.',
    localTips: [
      'Fort climb: steep — wear grip shoes; avoid midday.',
      'Marble workshops: safety goggles if visiting cutting yards.',
      'Mount Abu detour: add half day by road — check monsoon ghat closures.',
    ],
  },
  {
    id: 'jhalawar',
    name: 'Jhalawar',
    slug: 'jhalawar',
    tagline: 'Hadoti temples, river bends',
    region: 'South-East Rajasthan',
    description:
      'Chandrabhaga river country, Gagron’s UNESCO fort, Buddhist caves at Kolvi, and Hadoti’s temple-heavy landscape — greener than western Rajasthan.',
    bestTime:
      'October–March: pleasant for temple circuits, river ghats, and fort drives. April–June: hot — schedule early. Monsoon: rivers swell — scenic but risky near banks; check alerts. Chandrabhaga fair: verify Kartik dates.',
    localTips: [
      'Gagron: combine with Jhalawar palace museum same day.',
      'Wildlife toward Ranthambhore side: book through official gates only.',
      'Carry mosquito repellent near water in monsoon.',
    ],
  },
  {
    id: 'jhunjhunu',
    name: 'Jhunjhunu',
    slug: 'jhunjhunu',
    tagline: 'Shekhawati mansions, fresco towns',
    region: 'North-East Rajasthan',
    description:
      'Rani Sati temples, painted havelis of Mandawa, Nawalgarh, and Mukundgarh — the same merchant-lore belt as Churu and Sikar with weekend Delhi traffic.',
    bestTime:
      'October–March: ideal fresco light; short days — cluster towns in one loop. April–June: heat — shoot interiors and shaded courtyards early. Monsoon: fewer tourists; watch for peeling paint maintenance. Kite festivals: windy — rooftop caution.',
    localTips: [
      'Heritage hotels: many in restored havelis — book for ambience.',
      'Photography: some havelis charge camera fees.',
      'Delhi weekend rush: Friday evening highways busy.',
    ],
  },
  {
    id: 'karauli',
    name: 'Karauli',
    slug: 'karauli',
    tagline: 'Palace town, Kaila Devi hills',
    region: 'East Rajasthan',
    description:
      'City Palace’s pink facades, Kaila Devi sanctuary pilgrimages, and Chambal-side ravines — off the main triangle but rich for faith and wildlife edges.',
    bestTime:
      'October–March: best for palace, bazaar, and sanctuary approach roads; cool mornings. April–June: harsh — limit to early visits. Monsoon: green but ghat slips — verify. Navratri at Kaila Devi: massive crowds — plan parking and stays.',
    localTips: [
      'Palace hotel: book ahead if staying in heritage wing.',
      'Sanctuary: follow forest timings; no night wandering.',
      'Combine with Ranthambhore if routing — add drive time.',
    ],
  },
  {
    id: 'kota',
    name: 'Kota',
    slug: 'kota',
    tagline: 'Chambal gardens, coaching ghats',
    region: 'South-East Rajasthan',
    description:
      'Chambal riverside gardens, coaching-industry energy, Garh Palace museums, and Seven Wonders Park — Hadoti’s busiest city between Jaipur and the Narmada tilt.',
    bestTime:
      'October–March: river walks, palace visits, and boat ethics if arranging Chambal — pleasant except peak fog January. April–June: intense heat — Chambal ghats early morning only. Monsoon: high water — respect warning signs. Exam season: traffic chaos near centres.',
    localTips: [
      'Chambal boat: licensed operators only; crocodile habitat.',
      'City traffic: allow buffer for coaching-town jams.',
      'Bundi day-trip: 40 km — half-day minimum.',
    ],
  },
  {
    id: 'nagaur',
    name: 'Nagaur',
    slug: 'nagaur',
    tagline: 'Cattle fair dust, Sufi fairgrounds',
    region: 'Western Rajasthan',
    description:
      'Ahichhatragarh Fort’s deep walls, Sufi fair rhythms, and the second-largest cattle fair in India — desert light between Bikaner and Jodhpur.',
    bestTime:
      'October–March: best for fort and town walks; cool evenings. January–February: cattle fair — huge crowds, book stays months ahead. April–September: hot or monsoon — fort mornings only; fair off-season quieter.',
    localTips: [
      'Fair week: cash, dust mask, and sun hat.',
      'Fort sound-and-light: check winter schedule.',
      'Jodhpur/Bikaner hops: confirm night bus timings.',
    ],
  },
  {
    id: 'pali',
    name: 'Pali',
    slug: 'pali',
    tagline: 'Jain marble, Aravalli passes',
    region: 'Western Rajasthan',
    description:
      'Jain temples at Ranakpur (district edge), marble yards, and Aravalli passes linking Jodhpur to Udaipur — industrial and spiritual corridors.',
    bestTime:
      'October–March: ideal for Ranakpur, temple timings, and hill drives; mornings cool. April–June: hot — temples midday closed anyway. Monsoon: ghats green — watch for slippery marble. Mahavir Jayanti: major crowds at Ranakpur.',
    localTips: [
      'Ranakpur: modest dress; leather goods not allowed inside.',
      'Marble yards: closed shoes; negotiate transport for factory visits.',
      'Jawai leopard belt (nearby): book ethical camps — no baiting.',
    ],
  },
  {
    id: 'pratapgarh',
    name: 'Pratapgarh',
    slug: 'pratapgarh',
    tagline: 'Tribal belt, green pockets',
    region: 'Southern Rajasthan',
    description:
      'Rajasthan’s youngest district — forested hills, tribal communities, and dam catchments where Gujarat and MP angles meet the Aravallis.',
    bestTime:
      'October–March: mildest for village circuits and viewpoints. April–June: hot and dry — limit outdoor time. July–September: heavy monsoon — lush but landslide-prone on ghat roads — check PWD. Local adivasi fairs: ask district calendar.',
    localTips: [
      'Interior roads: 4x4 after rain sometimes.',
      'Homestays: confirm bookings in festival weeks.',
      'Respect forest department rules in reserve edges.',
    ],
  },
  {
    id: 'rajsamand',
    name: 'Rajsamand',
    slug: 'rajsamand',
    tagline: 'Marble country, Kumbhalgarh near',
    region: 'Southern Rajasthan',
    description:
      'Rajsamand Lake’s marble embankments, Kumbhalgarh’s massive wall line, Haveli art at Nathdwara, and the Mewar heartland between Udaipur and Jodhpur.',
    bestTime:
      'October–March: perfect for lake walks, fort day, and Shrinathji darshan planning; peak wedding traffic Udaipur-side. April–June: hot — fort sunrise slot. Monsoon: dramatic clouds over Aravallis — wall walks slippery. Kartik & festival peaks: book Nathdwara early.',
    localTips: [
      'Nathdwara: mobile/camera rules strict — read notices.',
      'Kumbhalgarh sound-and-light: winter evenings — confirm ticket.',
      'Marble yards: closed shoes; dust masks.',
    ],
  },
  {
    id: 'sawai-madhopur',
    name: 'Sawai Madhopur',
    slug: 'sawai-madhopur',
    tagline: 'Ranthambhore gates, fort forest',
    region: 'East Rajasthan',
    description:
      'Ranthambhore National Park’s tiger forests, the UNESCO fort inside the park, and railway junction energy — gateway to one of India’s flagship wildlife circuits.',
    bestTime:
      'October–June: park open (core zones vary by season — check current forest notice); October–March best climate for drives. April–June: scorching but good sighting odds near water — book morning slots. July–September: monsoon closure patterns — verify core/buffer reopening. Festival weekends: book safaris 90 days ahead online.',
    localTips: [
      'Safaris: official portal only — avoid touts.',
      'Fort zone: combine only if ticket includes; separate timings.',
      'Winter fog: trains can run late — buffer connections.',
    ],
  },
  {
    id: 'sikar',
    name: 'Sikar',
    slug: 'sikar',
    tagline: 'Shekhawati doors, merchant past',
    region: 'North-East Rajasthan',
    description:
      'Laxmangarh’s fort silhouette, painted havelis, and agrarian Shekhawati — easy Jaipur weekend drives and fewer tourists than Jaipur proper.',
    bestTime:
      'October–March: fresco walks and fort viewpoints; winter mornings foggy — drive slow. April–June: heat — indoor haveli museums better. Monsoon: moderate; refresh painted facades visually. Local fairs: check district calendar.',
    localTips: [
      'Laxmangarh fort: partially private — views from town lanes.',
      'Haveli museums: combo tickets sometimes in Fathepur loop.',
      'Jaipur day commute: NH busy Sunday evenings.',
    ],
  },
  {
    id: 'sirohi',
    name: 'Sirohi',
    slug: 'sirohi',
    tagline: 'Mount Abu climb, marble steps',
    region: 'South-West Rajasthan',
    description:
      'Mount Abu’s only hill station in Rajasthan, Dilwara marble temples, wildlife sanctuary edges, and Abu Road’s rail junction — cooler nights than the plains.',
    bestTime:
      'March–June: escape heat — Abu is busiest; book stays. July–September: monsoon mist — landslides rare but possible — check ghat news. October–February: pleasant days, cold nights December–January — woollens. Dilwara: midday closure for tourists — plan slots.',
    localTips: [
      'Dilwara: no leather; mobile rules strict.',
      'Nakki Lake: boating seasonal — verify hours.',
      'Gujarat border checks: keep ID.',
    ],
  },
  {
    id: 'sri-ganganagar',
    name: 'Sri Ganganagar',
    slug: 'sri-ganganagar',
    tagline: 'Canal grids, Indira Gandhi canal',
    region: 'North Rajasthan',
    description:
      'Canal-irrigated grids, wheat and cotton belts, and Punjab-border culture — the “food basket” corner with cold winters and blazing summers.',
    bestTime:
      'October–March: pleasant for town walks and canal bund drives; January fog extreme — drive with caution. April–June: very hot — outdoor only early. Monsoon: limited; dust storms pre-monsoon. Lohri & Baisakhi: festive — plan trains early.',
    localTips: [
      'Border routes: document checks possible.',
      'Farm visits: permission through contacts — not trespassing.',
      'Winter fog: airport/rail delays — buffer itineraries.',
    ],
  },
  {
    id: 'tonk',
    name: 'Tonk',
    slug: 'tonk',
    tagline: 'Sawai Madhopur road, Nawabi lanes',
    region: 'East Rajasthan',
    description:
      'Sunehri Kothi’s gilt, Nawabi-era lanes, and Bisaldeo temples — a quieter Nawabi town between Jaipur and Kota with hinterland mosques and havelis.',
    bestTime:
      'October–March: best for heritage walks and mosque architecture; mild heat. April–June: hot — indoor monuments midday. Monsoon: moderate rain; old city lanes can flood — check drainage. Ramadan evenings: busy bazaars — respect prayer times.',
    localTips: [
      'Sunehri Kothi: confirm opening — hours vary.',
      'Old city lanes: narrow — park outside and walk.',
      'Combine with Banas wildlife belt if routing — add permits.',
    ],
  },
]

/** All Rajasthan districts / featured cities — alphabetical for the dropdown */
export const cities: City[] = [...citiesFeatured, ...citiesRest].sort((a, b) =>
  a.name.localeCompare(b.name),
)

export function getCityBySlug(slug: string): City | undefined {
  return cities.find((c) => c.slug === slug)
}
