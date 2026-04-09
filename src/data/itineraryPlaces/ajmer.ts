import type { PlannerPlace } from '@/data/itineraryPlannerCatalog'
import { makeCityPlaces } from '@/data/itineraryPlaces/helpers'


export const AJMER_PLACES_BY_SUB: Partial<Record<string, PlannerPlace[]>> = {
  /* ——— Heritage ——— */
  'heritage-forts': makeCityPlaces('ajmer', 'heritage-forts', [
    ['taragarh', 'Taragarh Fort — hill fort, ramparts & Aravalli views'],
    ['akbari', 'Akbari Fort & Government Museum — palace-museum complex'],
    ['adhai', 'Adhai Din Ka Jhonpra — Indo-Islamic mosque & carved screens'],
    ['anasagar', 'Ana Sagar — Baradari & marble pavilions (lake “palace” circuit)'],
    ['magazine', 'Magazine — Mughal-era arsenal near Taragarh approach'],
    ['old-gates', 'Old city gates — Madar, Delhi, Tripolia & walled-town pockets'],
  ]),
  'heritage-museums': makeCityPlaces('ajmer', 'heritage-museums', [
    ['govt', 'Government Museum — galleries inside Akbari Fort'],
    ['arms', 'Arms & armour rooms — Mughal & Rajput pieces'],
    ['manuscript', 'Manuscripts, sculptures & inscriptions — rotation galleries'],
    ['coin', 'Coin & history section — local mint & trade story'],
    ['photo', 'Photography rules — check flash/tripod policy before visit'],
  ]),
  'heritage-walks': makeCityPlaces('ajmer', 'heritage-walks', [
    ['anasagar', 'Ana Sagar dam crest & promenade — breeze & baradari loop'],
    ['dargah-approach', 'Dargah approach bazaar — stone paving & shop rhythm'],
    ['old-city', 'Old city & Clock Tower pocket — haveli lanes'],
    ['mayo', 'Mayo College & colonial ridge — exteriors & tree-lined roads'],
    ['station', 'Railway heritage quarter — Raj-era station environs walk'],
  ]),
  'heritage-audio': makeCityPlaces('ajmer', 'heritage-audio', [
    ['asiguide', 'ASI / ticketed sites — hire approved guide at Akbari Fort & Adhai Din'],
    ['dargah-tour', 'Dargah complex — licensed khadim / group tours (fixed circuits)'],
    ['self-ana', 'Self-guided Ana Sagar — map the dam, baradari & pavilion sequence'],
    ['app-walk', 'Heritage walk apps / PDF maps — Civil Lines & old city routes'],
    ['hotel-docent', 'Heritage hotels — sometimes in-house storyteller for guests'],
  ]),

  /* ——— Spiritual ——— */
  'spiritual-temples': makeCityPlaces('ajmer', 'spiritual-temples', [
    ['nasiyan', 'Soniji Ki Nasiyan — Jain red-stone hall & gilt model of Ayodhya'],
    ['rangji', 'Sri Rangnath (Rangji) Temple — Dravidian-style gopuram in Rajasthan'],
    ['nareli', 'Nareli Jain temples — modern marble shrines on Aravalli spur (~7 km)'],
    ['lakshmi', 'Lakshmi Narayan & old-town temples — neighbourhood pujas'],
    ['pushkar-note', 'Same-day Pushkar — Brahma temple & ghats (pair with day-trip tab)'],
  ]),
  'spiritual-dargah': makeCityPlaces('ajmer', 'spiritual-dargah', [
    ['main', 'Dargah Sharif — Hazrat Khwaja Moinuddin Chishti shrine & courtyard'],
    ['buland', 'Buland Darwaza & outer gates — entry sequence & shoe deposit'],
    ['jannati', 'Jannati Darwaza & tombs complex — circuit inside dargah'],
    ['langar', 'Langar & community kitchen — timing & queue etiquette'],
    ['qawwali', 'Qawwali sessions — check daily schedule & special nights'],
    ['chadar', 'Chadar & flower offerings — buy from licensed stalls outside'],
  ]),
  'spiritual-festivals': makeCityPlaces('ajmer', 'spiritual-festivals', [
    ['urs', 'Urs Sharif — annual Dargah peak; book stay & crowd plan early'],
    ['eid', 'Eid & Milad — old city & Dargah lane festive nights'],
    ['diwali', 'Diwali — temple lights + bazaar crackers (mixed city mood)'],
    ['pushkar-fair', 'Pushkar Camel Fair (Nov) — ghats + mela day trip'],
    ['kartik', 'Kartik Purnima — Pushkar lake snan (huge day-trip flow)'],
  ]),
  'spiritual-quiet': makeCityPlaces('ajmer', 'spiritual-quiet', [
    ['dawn-dargah', 'Pre-dawn Dargah courtyard — before day crowds'],
    ['anasagar-dawn', 'Ana Sagar east bank — quiet bench & birdsong'],
    ['small-dargah', 'Smaller neighbourhood dargahs — ask locals for respectful visits'],
    ['jain-quiet', 'Nasiyan or Nareli — off-peak hours for slow circumambulation'],
    ['hotel-meditation', 'Hotel meditation / prayer room — if staying on property'],
  ]),

  /* ——— Food ——— */
  'food-thali': makeCityPlaces('ajmer', 'food-thali', [
    ['veg-civil', 'Civil Lines & Jaipur Road — pure veg Rajasthani thali & Gujarati counters'],
    ['dargah-nonveg', 'Dargah outer belt — kebab, roti & “hotel” non-veg thali (icons locally known)'],
    ['hotel-buffet', 'Heritage & 4★ properties — buffet thali nights (reservations)'],
    ['dal-bati', 'Dal–bati–churma — festival-style or weekend specials at local restaurants'],
    ['jain-thali', 'Jain / satvik thali — Station Road & Vaishali-nagar style outlets'],
  ]),
  'food-street': makeCityPlaces('ajmer', 'food-street', [
    ['dargah-snacks', 'Dargah lane — malpua, kebab skewers, kachori & chai'],
    ['naya-bazaar', 'Naya Bazaar — chaat, golgappe & evening stalls'],
    ['station-chaat', 'Station Road — evening chaat & snack cluster'],
    ['kachori', 'Pyaz kachori & mirchi bada — morning tiffin culture (ask hotel for nearest famous stall)'],
    ['night-dhaba', 'Late-night dhaba — Jaipur-Ajmer highway dhabas (car/taxi)'],
  ]),
  'food-sweets': makeCityPlaces('ajmer', 'food-sweets', [
    ['sohan', 'Sohan halwa — Ajmer’s signature; compare shops near Dargah / old city'],
    ['malpua', 'Malpua & rabri — Dargah festival nights especially'],
    ['mithai', 'Mithai boxes — Station Road halwai for train journey gifts'],
    ['ghewar', 'Ghewar & seasonal sweets — monsoon / Teej windows'],
    ['mithai-cold', 'Kulfi & falooda — summer evening lanes'],
  ]),
  'food-cafe': makeCityPlaces('ajmer', 'food-cafe', [
    ['lake-view', 'Ana Sagar ring — cafés & ice cream with lake breeze'],
    ['rooftop-dargah', 'Rooftop tea near Dargah skyline — sunset slot'],
    ['civil-coffee', 'Civil Lines — coffee, bakery & casual dinner'],
    ['hotel-roof', 'Hotel rooftop grills — Jaipur Road properties'],
    ['co-working', 'New-town cafés — laptop-friendly if you need a slow afternoon'],
  ]),

  /* ——— Markets ——— */
  'markets-textile': makeCityPlaces('ajmer', 'markets-textile', [
    ['dargah-chadar', 'Dargah market — chadar, skullcaps & unstitched fabric'],
    ['naya-cloth', 'Naya Bazaar — suit pieces, saree counters & seasonal sales'],
    ['purani-mandi', 'Purani Mandi — wholesale cloth & dress material'],
    ['khadi', 'Khadi gramodyog & handloom outlets — yardage & stoles'],
    ['readymade', 'Station Road — readymade ethnic & mojari pairing'],
  ]),
  'markets-crafts': makeCityPlaces('ajmer', 'markets-crafts', [
    ['ittar', 'Dargah lane — ittar (attar), rose water & sufi souvenirs'],
    ['marble', 'Marble inlay & small deity figures — compare Nareli & city crafts'],
    ['leather', 'Juttis & leather goods — old city & Station shops'],
    ['souvenir', 'Ajmer Sharif mementos — ethical buying; avoid plastic trinkets'],
    ['book-stalls', 'Islamic & Sufi book stalls near Dargah — calligraphy kits'],
  ]),
  'markets-spices': makeCityPlaces('ajmer', 'markets-spices', [
    ['mandi', 'Krishi Mandi / dry fruit — nuts, figs & saffron-style gifts'],
    ['masala', 'Old city masala grinders — red chilli, coriander bulk'],
    ['pickle', 'Achar & papad — home-style packs for travel'],
    ['mithai-ingredient', 'Mithai supply shops — ghee, mawa for festival cooking'],
    ['herb', 'Unani / herb counters — verify authenticity with locals'],
  ]),
  'markets-jewellery': makeCityPlaces('ajmer', 'markets-jewellery', [
    ['silver', 'Silver anklets & toe rings — traditional weight-based pricing'],
    ['lac', 'Lac bangles — colours by season & wedding lists'],
    ['imitation', 'Imitation temple jewellery for festivals — bargain politely'],
    ['gem', 'Licensed gem shops — insist on certificates for pricey stones'],
    ['gold-lane', 'Sarafa-style lanes — compare making charges city vs Jaipur'],
  ]),

  /* ——— Sunset ——— */
  'sunset-rooftop': makeCityPlaces('ajmer', 'sunset-rooftop', [
    ['dargah-skyline', 'Rooftop cafés — Dargah domes & minaret silhouette'],
    ['civil-roof', 'Civil Lines hotels — Aravalli rim glow'],
    ['jaipur-road', 'Jaipur Road resorts — pool deck sunset'],
    ['station-view', 'High-floor hotel bars — if open to non-guests (call ahead)'],
  ]),
  'sunset-lake': makeCityPlaces('ajmer', 'sunset-lake', [
    ['ana-golden', 'Ana Sagar — west-facing baradari & dam golden hour'],
    ['foy-monsoon', 'Foy Sagar — wide horizon; best when water level is up'],
    ['pushkar-sunset', 'Pushkar lake — ghats at lamp time (pair with day trip)'],
    ['khari-glow', 'Khari riverbed near city — monsoon reflections (safety first)'],
  ]),
  'sunset-fort': makeCityPlaces('ajmer', 'sunset-fort', [
    ['taragarh-ridge', 'Taragarh upper scarp — last light on Aravalli (timing & ticket rules)'],
    ['magazine-silhouette', 'Magazine bastion — fort mass against sky'],
    ['akbari-ramp', 'Akbari Fort walls — museum close time vs sunset'],
    ['rooftop-fort-view', 'City rooftops that catch Taragarh ridge line'],
  ]),
  'sunset-desert': makeCityPlaces('ajmer', 'sunset-desert', [
    ['pushkar-sand', 'Pushkar sand ridges — camel silhouette sunset (~1 hr)'],
    ['aravalli-fold', 'West-facing Aravalli folds beyond city — clear-day drive'],
    ['salt-flat-mood', 'Dry lake bed moods — winter haze photography'],
    ['jeep-sunset', 'Jeep to open west horizon — via local operators (Pushkar side)'],
  ]),

  /* ——— Nature ——— */
  'nature-lakes': makeCityPlaces('ajmer', 'nature-lakes', [
    ['ana-boat', 'Ana Sagar — pedal / row boating when operational'],
    ['ana-walk', 'Ana Sagar full ring walk — breeze & winter migrants'],
    ['foy-picnic', 'Foy Sagar — picnic & kite flying when water returns'],
    ['pushkar-lake', 'Pushkar lake — parikrama & ghats (half-day)'],
    ['chhatri', 'Lake-facing chhatris & pavilions — photo + birding'],
  ]),
  'nature-gardens': makeCityPlaces('ajmer', 'nature-gardens', [
    ['daulat-bagh', 'Daulat Bagh — Mughal garden feel near Ana Sagar'],
    ['company-bagh', 'Company Bagh / municipal parks — morning walks'],
    ['mayo-lawns', 'Mayo College periphery — tree-lined (exterior etiquette)'],
    ['hotel-garden', 'Resort lawns on Jaipur Road — day-pass where sold'],
    ['rooftop-green', 'Hotel courtyards — monsoon green burst'],
  ]),
  'nature-wildlife': makeCityPlaces('ajmer', 'nature-wildlife', [
    ['foy-birds', 'Foy Sagar — winter ducks & waders when water present'],
    ['ana-migrants', 'Ana Sagar — cormorants, egrets & seasonal migrants'],
    ['khari-birding', 'Khari river scrub — early morning binoculars'],
    ['pushkar-bird', 'Pushkar countryside — harriers & larks in fields'],
    ['mayasagar', 'Mayasi / Mayapur birding pockets — local guide recommended'],
  ]),
  'nature-hills': makeCityPlaces('ajmer', 'nature-hills', [
    ['taragarh-hike', 'Taragarh — steep stone path & fort summit'],
    ['nareli-hill', 'Nareli approach — marble temples on rocky spur'],
    ['aravalli-trail', 'Short Aravalli spur walks — avoid lonely dusk'],
    ['savitri-note', 'Savitri temple hike — Pushkar sunrise (day trip)'],
    ['jeep-hill', 'Jeep to ridge viewpoints — Pushkar / hotel packages'],
  ]),

  /* ——— Photo ——— */
  'photo-icons': makeCityPlaces('ajmer', 'photo-icons', [
    ['dargah-dome', 'Dargah white dome & Buland Darwaza — classic postcard'],
    ['adhai-arches', 'Adhai Din Ka Jhonpra — carved arch “frames”'],
    ['ana-baradari', 'Ana Sagar marble pavilions — symmetry shots'],
    ['mayo-gothic', 'Mayo College — Gothic revival façade'],
    ['clock-tower', 'Victoria Jubilee Clock Tower — old city junction'],
  ]),
  'photo-lanes': makeCityPlaces('ajmer', 'photo-lanes', [
    ['dargah-bazaar', 'Dargah approach — colour, chadar stacks & crowds'],
    ['haveli-doors', 'Old city wooden doors & turquoise paint'],
    ['spice-colour', 'Spice & dry fruit sacks — market still life'],
    ['tongas', 'Tongas & cycle rickshaws — motion blur experiments'],
    ['monsoon-lane', 'Wet stone lanes — reflections during rain'],
  ]),
  'photo-stepwell': makeCityPlaces('ajmer', 'photo-stepwell', [
    ['adhai-depth', 'Adhai Din courtyard — step-like prayer platform depth'],
    ['old-baori', 'Hidden baori / wells — ask heritage walkers; many locked'],
    ['chand-day', 'Chand Baori (Abhaneri) — long day via Jaipur highway'],
    ['tank-perspective', 'Ana Sagar stepped ghats — leading lines'],
    ['shadow-play', 'Fort bastion shadows — late afternoon geometry'],
  ]),
  'photo-portrait': makeCityPlaces('ajmer', 'photo-portrait', [
    ['flower-seller', 'Rose & flower sellers — ask before portraits'],
    ['khadim', 'Khadims & shrine life — strict permission & no flash in sensitive zones'],
    ['craftsman', 'Marble polishers & leather workers — workshop etiquette'],
    ['kids-cricket', 'Gully cricket — telephoto from distance'],
    ['women-bazaar', 'Women in bazaar — always ask consent; avoid intrusive shots'],
  ]),

  /* ——— Culture ——— */
  'culture-folk': makeCityPlaces('ajmer', 'culture-folk', [
    ['hotel-night', 'Heritage hotels — Rajasthani folk evenings (season/weekend)'],
    ['pushkar-music', 'Pushkar cafés — live fusion / folk nights'],
    ['urs-stage', 'Urs cultural stages — Dargah outer programmes (annual)'],
    ['mela-ground', 'Local fairgrounds — seasonal brass band & dance'],
    ['wedding-hall', 'Community wedding halls — only if invited / public events'],
  ]),
  'culture-puppet': makeCityPlaces('ajmer', 'culture-puppet', [
    ['hotel-puppet', 'Hotel puppet & magic shows — enquire at 4★ properties'],
    ['jaipur-day', 'Jaipur puppet museums — if combining long day from Ajmer'],
    ['school-fair', 'School / college fests — annual calendar luck'],
    ['pushkar-cafe', 'Pushkar rooftop — occasional puppet cafés'],
    ['youtube-live', 'Backup: curated puppet recordings if nothing live matches dates'],
  ]),
  'culture-craft': makeCityPlaces('ajmer', 'culture-craft', [
    ['blue-pottery', 'Kishangarh blue pottery — short workshop day trip'],
    ['marble-polish', 'Marble atelier visits — Nareli & city yards'],
    ['ittar-blend', 'Ittar blending demo — Dargah lane trusted shops'],
    ['block-print', 'Bagru / Sanganer — long textile day via Jaipur'],
    ['silver-smith', 'Silver-smith lanes — watch soldering (safety & ask first)'],
  ]),
  'culture-festival': makeCityPlaces('ajmer', 'culture-festival', [
    ['urs-calendar', 'Urs dates — qawwali, chadar processions & night bazaar'],
    ['pushkar-fair-dates', 'Pushkar fair — camel races & cultural contests'],
    ['holi-gulal', 'Holi — old city colour & Dargah respect balance'],
    ['kite-sankranti', 'Makar Sankranti — kite duels on terraces'],
    ['national-theatre', 'RKDF / town halls — sporadic drama (check local listings)'],
  ]),

  /* ——— Adventure ——— */
  'adv-camel': makeCityPlaces('ajmer', 'adv-camel', [
    ['pushkar-camel', 'Pushkar — short camel rides & sunset silhouette'],
    ['camel-cart', 'Camel cart village loop — operators near Pushkar'],
    ['fair-ride', 'Pushkar Camel Fair — heavy camel traffic & photo ops'],
    ['ajmer-limited', 'Ajmer city — no dunes; plan half-day Pushkar for camel'],
    ['ethical', 'Choose licensed operators; avoid overloaded animals'],
  ]),
  'adv-jeep': makeCityPlaces('ajmer', 'adv-jeep', [
    ['pushkar-jeep', 'Pushkar outskirts — jeep to sunset ridge'],
    ['village-jeep', 'Village & temple jeep circuits — hotel tie-ups'],
    ['aravalli-track', 'Aravalli dirt tracks — dry season only; guide essential'],
    ['wildlife-jeep', 'If combining Ranthambore later — book from Ajmer rail hub'],
    ['night-jeep', 'Avoid unlit ridge roads after dark'],
  ]),
  'adv-quad': makeCityPlaces('ajmer', 'adv-quad', [
    ['pushkar-atv', 'Seasonal ATV near Pushkar sand — ask updated operators'],
    ['resort-sports', 'Some highway resorts — ATV/buggy for guests'],
    ['jaipur-park', 'Jaipur adventure parks — long day option'],
    ['safety-gear', 'Helmet & briefing non-negotiable'],
    ['verify', 'Operators change yearly — verify on ground before paying'],
  ]),
  'adv-zipline': makeCityPlaces('ajmer', 'adv-zipline', [
    ['neemrana', 'Neemrana Flying Fox — ~2.5 hr towards Delhi; full day'],
    ['jaipur-adventure', 'Jaipur rope courses — day trip with early start'],
    ['pushkar-check', 'Pushkar pop-up adventure — festival season only'],
    ['none-ajmer', 'Ajmer city centre — no permanent zipline as of typical listings'],
    ['combo', 'Pair with Golden Triangle leg if adventure is priority'],
  ]),

  /* ——— Wellness ——— */
  'well-spa': makeCityPlaces('ajmer', 'well-spa', [
    ['five-star', 'Five-star hotel spas — Ayurvedic & Swedish menus'],
    ['day-spa', 'Day spa packages — Civil Lines & Jaipur Road'],
    ['kerala-ayur', 'Kerala ayurveda centres — abhyanga & shirodhara slots'],
    ['couple', 'Couple suites — book 48h ahead on weekends'],
    ['hygiene', 'Check disposable liners & therapist gender preference'],
  ]),
  'well-pool': makeCityPlaces('ajmer', 'well-pool', [
    ['resort-pool', 'Resort pools — day pass where sold (call ahead)'],
    ['hotel-guest', 'Hotel guest-only pools — book night for pool access'],
    ['infinity-mood', 'Hill-view pools on Jaipur Road — sunset float'],
    ['family', 'Kids’ pool rules — depth markers'],
    ['monsoon', 'Pool hygiene dips after dust storms — ask staff'],
  ]),
  'well-yoga': makeCityPlaces('ajmer', 'well-yoga', [
    ['hotel-yoga', 'Hotel morning yoga on lawns — guest slots'],
    ['anasagar-sunrise', 'Self yoga — Ana Sagar east bank quiet patch'],
    ['studio', 'Local yoga studios — new-town Instagram listings'],
    ['pranayam', 'Pranayama at home terrace — altitude mild; hydrate'],
    ['meditation', 'Silent meditation — Nasiyan or inner Dargah zones (rules)'],
  ]),
  'well-unplanned': makeCityPlaces('ajmer', 'well-unplanned', [
    ['buffer-lake', 'No-plan morning — Ana Sagar bench & newspaper'],
    ['cafe-read', 'Civil Lines café — book + coffee half day'],
    ['hotel-bed', 'Sleep-in & room service — recovery after Urs crowds'],
    ['spa-only', 'Spa-only day — one massage + pool + nap'],
    ['digital-detox', 'Phone-off walk — old city without maps'],
  ]),

  /* ——— Day trip ——— */
  'daytrip-nearby': makeCityPlaces('ajmer', 'daytrip-nearby', [
    ['pushkar', 'Pushkar — Brahma temple, ghats & cafés (14 km)'],
    ['kishangarh', 'Kishangarh — fort, marble dumping & blue pottery'],
    ['roopangarh', 'Roopangarh Fort — boutique stay or meal stop'],
    ['merta', 'Merta City — Meera Bai associations (longer day)'],
    ['nasirabad', 'Nasirabad cantonment — British-era grid (drive-through)'],
  ]),
  'daytrip-pushkar': makeCityPlaces('ajmer', 'daytrip-pushkar', [
    ['brahma', 'Brahma temple & lake parikrama'],
    ['savitri', 'Savitri temple hill — sunrise or sunset hike'],
    ['ghats', 'Ghats — aarti timing & shoe rules'],
    ['cafe', 'Rooftop lunch — lake view'],
    ['sadhu', 'Sadhu photos — ask permission; respect bathing zones'],
  ]),
  'daytrip-fort': makeCityPlaces('ajmer', 'daytrip-fort', [
    ['kishangarh-fort', 'Kishangarh Fort — hilltop views & marble town'],
    ['roopangarh-full', 'Roopangarh — heritage hotel lunch + tour'],
    ['taragarh-deep', 'Taragarh deep explore — if not done in city heritage'],
    ['bhangarh', 'Bhangarh “haunted” — very long day; start pre-dawn'],
    ['jaipur-fort', 'Jaipur forts — same day only with express highway & tight plan'],
  ]),
  'daytrip-custom': makeCityPlaces('ajmer', 'daytrip-custom', [
    ['driver-full', 'Full-day Innova with driver — Pushkar + Kishangarh combo'],
    ['jaipur-express', 'Jaipur same day — Hawa Mahal + Jantar Mantar (long)'],
    ['jodhpur-train', 'Overnight train hub — plan Jodhpur as next stop, not day'],
    ['custom-aravalli', 'Custom Aravalli village circuit — potters & weavers'],
    ['airport-drop', 'Jaipur airport drop — shop en route Kishangarh'],
  ]),

  /* ——— Night ——— */
  'night-lit': makeCityPlaces('ajmer', 'night-lit', [
    ['dargah-night', 'Dargah — lit domes & night qawwali energy'],
    ['ana-prom', 'Ana Sagar promenade — lamp posts & family crowds'],
    ['clock-night', 'Clock Tower crossing — neon & tonga lights'],
    ['fort-flood', 'Fort floodlight views from city — long lens'],
    ['safe-stroll', 'Stick to busy lanes; avoid empty riverbeds'],
  ]),
  'night-food': makeCityPlaces('ajmer', 'night-food', [
    ['dargah-kebab', 'Post-qawwali kebab & roti — busy stalls'],
    ['station-late', 'Station Road late dhaba — train travellers’ mix'],
    ['highway-dhaba', 'NH48 dhabas — kulhad chai & tandoor'],
    ['ice-cream', 'Ice cream parlours — family night out'],
    ['safety', 'Prefer lit seating; avoid isolated pockets'],
  ]),
  'night-cultural': makeCityPlaces('ajmer', 'night-cultural', [
    ['qawwali', 'Dargah qawwali — check schedule & gender seating norms'],
    ['hotel-rajasthani', 'Hotel Rajasthani nights — thali + folk bundle'],
    ['urs-concert', 'Urs special concerts — annual only'],
    ['cinema', 'Multiplex — new-town Hindi releases'],
    ['quiet-tea', 'Late tea on Civil Lines terrace — low-key culture'],
  ]),
  'night-early': makeCityPlaces('ajmer', 'night-early', [
    ['resort-sleep', 'Resort by 9 — spa morning next day'],
    ['family-routine', 'Family hotels — quiet curfew-friendly'],
    ['read-cafe', 'Book café that closes early — chamomile & sleep'],
    ['no-late-dargah', 'Skip late Dargah if you need dawn start next day'],
    ['white-noise', 'Earplugs — old city muezzin & dogs'],
  ]),
}

export const AJMER_EXTRA_PLACES: PlannerPlace[] = Object.values(AJMER_PLACES_BY_SUB).flatMap(
  (list) => list ?? [],
)
