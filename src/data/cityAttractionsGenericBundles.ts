import type { City } from '@/types'
import type { AttractionDetail, AttractionGuideBundle, AttractionKind } from './cityAttractionsDetailedGuide'

function mq(q: string): string {
  return `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(q)}`
}

type Ctx = Pick<City, 'name' | 'slug' | 'region'>

type FullGuide = Record<AttractionKind, AttractionGuideBundle>

const cache = new Map<string, FullGuide>()

function place(
  slug: string,
  sid: string,
  name: string,
  typeTag: string,
  era: string,
  location: string,
  mapQuery: string,
  summary: string,
  history: string[],
  stories: string[],
): AttractionDetail {
  return {
    id: `${slug}-${sid}`,
    name,
    typeTag,
    era,
    location,
    mapUrl: mq(mapQuery),
    summary,
    history,
    stories,
  }
}

export function buildGenericCityAttractionsGuide(ctx: Ctx): FullGuide {
  const hit = cache.get(ctx.slug)
  if (hit) return hit

  const cn = ctx.name
  const rg = ctx.region
  const slug = ctx.slug

  const natural: AttractionGuideBundle = {
    title: 'Natural spots',
    eyebrow: 'Sightseeing & Attractions',
    lead: `${cn} sits inside ${rg}’s semi-arid geography: Aravalli folds, seasonal water, and human-made tanks together shape what feels “natural” here. Use the lists below as discovery prompts — famous viewpoints and quiet edges both matter.`,
    categoryTiles: [
      { label: 'Water bodies', value: 'Lakes, tanks & monsoon wetlands' },
      { label: 'Ridges', value: 'Hill belts, sunrise points, fort-linked terrain' },
      { label: 'Wild edges', value: 'Sanctuary day-trips & birding pockets' },
      { label: 'Seasonality', value: 'Heat vs monsoon vs winter clarity' },
    ],
    places: [
      place(
        slug,
        'nat-lake',
        'Main lake, tank or reservoir belt',
        'Historic lake / civic water',
        'Medieval to modern impoundments',
        `Lakefront and embankment roads, ${cn}`,
        `${cn} lake viewpoint sunrise`,
        `The largest water sheet near ${cn} usually anchors evening walks, migratory birds, and festival immersion protocols — rules change yearly.`,
        [
          `Many Rajasthani tanks combine Chauhan-era cores with Mughal garden edges and municipal bunds — ${cn} follows that stacked history.`,
          'Monsoon can raise water fast; avoid steep slime on ghats after rain.',
          'Winter mornings often bring mist — photographers arrive before dawn; carry a torch for steps.',
          'Check district irrigation / tourism boards for blue-green algae advisories before swimming.',
        ],
        [
          `Birders treat peri-urban tanks as migration pit-stops — eBird lists for ${cn} district help more than random blogs.`,
          'Water is political: respect local cleaning shifts and avoid drone flight over crowded ghats.',
        ],
      ),
      place(
        slug,
        'nat-hill',
        'Aravalli ridge & sunset viewpoints',
        'Hillscape / watch ridges',
        'Geological antiquity; modern road access',
        `Hill approach roads, ${cn} district`,
        `${cn} sunset viewpoint Aravalli`,
        `Folded quartzite ridges explain why forts and temples gravitate to the same skyline — ${cn} shares that logic with neighbouring districts.`,
        [
          'Wind patterns differ by season: March–June evenings can be dust-laden; July–Sept can be electrically stormy.',
          'Leopards and nilgai use the same ridges after dark — do not hike alone at night outside marked trails.',
          'Some viewpoints sit on private land — ask at the last shop or homestay before crossing fences.',
        ],
        [
          'Sunrise often beats sunset for haze in April–May — plan accordingly.',
          `Couples and families share the same belvederes; queue politely during wedding-season weekends.`,
        ],
      ),
      place(
        slug,
        'nat-park',
        'Urban parks, riverfront & green lungs',
        'City parks / river rejuvenation',
        '20th–21st century civic ecology',
        `Central and peripheral parks, ${cn}`,
        `${cn} park garden birding`,
        `Where the grid relaxes: jogging tracks, old banyans, and sometimes restored nullahs that remember monsoon floods before concrete.`,
        [
          'Morning walkers set the social clock — 6–8 AM is safest for solo travellers seeking crowd cover.',
          'Snack vendors follow park hours; carry your own bottle to reduce plastic.',
          'Some parks host open-air yoga — footwear rules vary.',
        ],
        [
          'Children’s play zones get crowded Sunday mornings — plan buffer time.',
          `Night lighting is uneven; prefer known gates when leaving after dark.`,
        ],
      ),
      place(
        slug,
        'nat-sanctuary',
        'Wildlife sanctuary / reserve (day-trip arc)',
        'Protected area edge',
        'Notification-era to present',
        `Outskirts / district boundary (verify distance)`,
        `${cn} wildlife sanctuary safari`,
        `Several Rajasthan districts place sanctuaries within 1–3 hour drives — not always inside municipal ${cn}, but locals bundle them into itineraries.`,
        [
          'Jeep safaris need online slots in peak season; carry ID and follow zone rules.',
          'Monsoon closures are common — call the range office, not just aggregators.',
          'Silence and neutral clothing matter more than camera length.',
        ],
        [
          'Combine with village lunch only at registered outlets — forest-edge dhabas vary in hygiene.',
          'If leopards are reported near farms, do not chase “sightings” off-road.',
        ],
      ),
      place(
        slug,
        'nat-monsoon',
        'Seasonal waterfalls, nullahs & monsoon-only streams',
        'Ephemeral water (rain-fed)',
        'Primarily July–September',
        `Upstream Aravalli pockets, ${cn} district`,
        `${cn} waterfall monsoon Rajasthan`,
        `Not every year delivers drama — but when it does, quartzite gorges briefly roar. Flash floods are real; admire from marked viewpoints.`,
        [
          'Soil becomes slick; sandals beat flip-flops.',
          'Mobile signal may die in narrow gorges — tell someone your route.',
          'Leave no plastic — these sites rarely have cleanup crews.',
        ],
        [
          'Local kids know the safe boulders — follow their lines, not Instagram recklessness.',
          'If thunder echoes, descend immediately.',
        ],
      ),
    ],
  }

  const religious: AttractionGuideBundle = {
    title: 'Religious places',
    eyebrow: 'Sightseeing & Attractions',
    lead: `${cn} layers Hindu, Jain, Sufi, Sikh, and Christian histories depending on neighbourhood — pilgrimage intensity swings by festival calendar. Move slowly: queues, footwear, and photography rules differ by sect and management.`,
    categoryTiles: [
      { label: 'Temple cores', value: 'Shaktipeeth links & local kuldevtas' },
      { label: 'Syncretic nodes', value: 'Sufi dargahs & shared shrines' },
      { label: 'Jain tirth', value: 'Digambar / Shwetambar circuits' },
      { label: 'Etiquette', value: 'Dress, donation, photo discipline' },
    ],
    puranicTirths: [
      {
        id: `${slug}-pur-tank`,
        name: 'Sacred tanks & tirth-linked hydrology',
        location: `Major ghats, stepwell-adjacent shrines, and old town tanks in ${cn} district`,
        puranicContext: `Across Rajasthan, Puranic imagination ties kingship to water: lakes become tirth when story, ritual, and annual cleaning align. ${cn} participates in that geography even when a site is not “famous” nationally — local sthal puranas and mahatmya pamphlets (often Hindi/Marwari) carry the detail gazetteers skip.`,
        mapUrl: mq(`${cn} sacred lake ghat temple`),
        practicalNotes: [
          'Ask which side is “older” ghat vs newly tiled — slip risk differs.',
          'Solar eclipse and Kartik Purnima crowds can overwhelm parking — use drop-off points.',
          'Donation desks are optional; watch for touts between car park and mandir.',
        ],
      },
      {
        id: `${slug}-pur-yatra`,
        name: 'Yatra peaks & Aravalli shrine circuits',
        location: `Hill temples and ridge mandirs reachable from ${cn}`,
        puranicContext: `Many Aravalli peaks host goddesses whose vahana stories connect to pastoral communities — the same ridges you hike for sunset carry vow rituals (mannat threads, coconuts). Read them as living ecology, not only sculpture.`,
        mapUrl: mq(`${cn} hill temple trek`),
        practicalNotes: [
          'Monsoon: leeches and loose scree on unofficial shortcuts.',
          'Some shrines close afternoon; verify before climbing.',
          'Carry a scarf — wind chill surprises even in April mornings.',
        ],
      },
    ],
    places: [
      place(
        slug,
        'rel-major-temple',
        'District headline temples & old-town mandir clusters',
        'Hindu pilgrimage / nagara architecture',
        'Medieval to modern renovations',
        `Old city / main deity precincts, ${cn}`,
        `${cn} famous temple`,
        `Every Rajasthan district has one or two names travellers repeat — but neighbourhood mandirs often hold older murtis and fewer touts. Compare both.`,
        [
          'Morning arti and evening sandhya arti set crowd curves — festivals multiply police deployments.',
          'Non-Hindu visitors: some sanctums restrict entry; courtyard darshan may still be possible.',
          'Shoes, leather belts, and phones follow separate rules — watch printed boards, not other tourists.',
        ],
        [
          `Prasad economics supports kitchens and schools — when in doubt, official counters beat street hawkers.`,
          'Festivals like Navratri or Shivratri can close roads — plan circular routes.',
        ],
      ),
      place(
        slug,
        'rel-sufi',
        'Sufi dargahs & syncretic shrines',
        'Chishti / other silsilas (site-specific)',
        '13th century onward layers',
        `Dargah quarter if present — search Maps for ${cn}`,
        `${cn} dargah shrine`,
        `Where qawwali, chadar offerings, and shared langar rhythms meet — ${cn} may host smaller ziarat than Ajmer but etiquette scales the same: shoulders covered, calm queues.`,
        [
          'Thursday evenings and urs dates spike footfall — shoes off, pockets zipped.',
          'Women’s sections and family lines vary — follow signage, not crowd crush.',
          'Photography may be restricted; ask khadim volunteers politely.',
        ],
        [
          'Langar donations often fund schools — verify counter receipts.',
          'Political seasons can add security — cooperate with bag checks.',
        ],
      ),
      place(
        slug,
        'rel-jain',
        'Jain tirth & tonk complexes',
        'Digambar / Shwetambar heritage',
        'Medieval to contemporary marble phases',
        `Jain quarter / outskirts — ${cn}`,
        `${cn} Jain temple`,
        `Rajasthan remains a major Jain landscape — ayambil, fasts, and manuscript libraries sometimes hide behind plain facades.`,
        [
          'Some temples segregate sections by gender or sect — ask before climbing to roof cameras.',
          'Leather items including belts may need removal.',
          'Morning visits beat heat on white marble courtyards.',
        ],
        [
          'Manuscript or museum wings may need prior appointment.',
          'Donation for gaushala upkeep is common — confirm official desk.',
        ],
      ),
      place(
        slug,
        'rel-gurdwara-church',
        'Gurdwaras, churches & colonial chapels',
        'Panth + mission histories',
        '19th–20th century',
        `Station / Cantonment belts, ${cn}`,
        `${cn} gurdwara church heritage`,
        `Railways brought Sikhs, Anglo-Indian communities, and mission schools — their prayer halls anchor different ideas of time than Rajput fort clocks.`,
        [
          'Sunday services and Gurpurab schedules differ — check notice boards.',
          'Headcover rules in gurdwaras; modest shoulders in churches.',
          'Community kitchens (langar) welcome volunteers — ask sevadars before filming.',
        ],
        [
          'Cemetery chapels nearby sometimes confuse tourists — maintain quiet.',
          `Christmas and Easter can fill cantonment roads — plan parking.`,
        ],
      ),
      place(
        slug,
        'rel-folk',
        'Gram devtas, hero stones & local fairs',
        'Folk religion / caste panchayat sites',
        'Living tradition',
        `Rural periphery of ${cn} district`,
        `${cn} village fair temple`,
        `Beyond ASI monuments: hero stones (satī / warrior memorials), serpent shrines, and tejaji fairs that stitch pastoral memory.`,
        [
          'Fairs mix commerce, alcohol policy zones, and stampedes — stand aside when horses circle.',
          'Gender norms can be conservative — dress down camera aggression.',
          'Some sites prohibit non-community rituals — respect refusal.',
        ],
        [
          'Oral epic singers work these fairs — tip performers after asking.',
          `Documenting rituals may need community consent — especially women’s-only spaces.`,
        ],
      ),
    ],
  }

  const museums: AttractionGuideBundle = {
    title: 'Museums',
    eyebrow: 'Sightseeing & Attractions',
    lead: `Museums around ${cn} hold inscriptions, arms, textiles, and folk instruments that textbooks flatten. Read them slowly: labels carry political choices about whose history counts.`,
    categoryTiles: [
      { label: 'State / district', value: 'Government museums & archaeology wings' },
      { label: 'Site museums', value: 'Fort-adjacent galleries' },
      { label: 'Living craft', value: 'Private foundations & haveli museums' },
      { label: 'Tips', value: 'Photo tickets, humidity, closures' },
    ],
    places: [
      place(
        slug,
        'mus-district',
        'District museum & government galleries',
        'Archaeology + ethnography',
        '20th century onward institutions',
        `Civil Lines / collectorate belt, ${cn}`,
        `${cn} district museum Rajasthan`,
        `The default start for sculpture fragments, coins, and Harappan touchpoints if curated — air-conditioning varies; carry water.`,
        [
          'Tuesday closures still common — verify on Dept. of Archaeology & Museums, Rajasthan.',
          'Photo passes cost extra — tripods rarely allowed.',
          'Guides may be students — tip only if arranged through desk.',
        ],
        [
          'Compare showcase labels with recent research — some dates predate carbon fixes.',
          `Gift shops sometimes stock replicas — ask provenance if buying.`,
        ],
      ),
      place(
        slug,
        'mus-fort-site',
        'Fort or palace site museums',
        'Adaptive reuse inside heritage walls',
        'Mixed eras',
        `Fort / palace ticketed campus, ${cn}`,
        `${cn} fort museum gallery`,
        `Weapons, costumes, and miniature copies gain drama when viewed from the same ramparts they describe.`,
        [
          'Composite tickets may bundle light-and-sound — confirm expiry same day.',
          'Heat inside stone galleries exceeds outdoor breeze — visit early.',
          'Some arms are replicas after theft episodes — read fine print.',
        ],
        [
          'Audio guides may lack child mode — parents preview first.',
          `Monsoon: leaky roofs happen — report puddles to staff for artifact safety.`,
        ],
      ),
      place(
        slug,
        'mus-tribal-folk',
        'Tribal cultural centres & folk instrument rooms',
        'Adivasi heritage & performing arts',
        'Post-Independence collections',
        `${cn} or regional hub (verify)`,
        `${cn} tribal museum folk art`,
        `Bhil, Meena, Garasia, and other community histories appear in mask rooms, terracotta, and Banswara-style documentation — read for nuance, not exotic selfies.`,
        [
          'Consent matters for face photography of masks — many are ritual, not decorative.',
          'Some centres rotate exhibits — call before long detours.',
          'Translations may be uneven — cross-check with academic sources.',
        ],
        [
          'Purchase crafts from centre emporiums when possible — revenue loops back to artisans.',
          `If an exhibit references bonded labour or displacement, sit with the discomfort — museums are political.`,
        ],
      ),
      place(
        slug,
        'mus-private',
        'Private haveli museums & foundation galleries',
        'House museums / trust collections',
        '19th–21st century',
        `Old city / boutique hotel partnerships, ${cn}`,
        `${cn} heritage museum haveli`,
        `Smaller rooms can feel more intimate than state halls — but hours follow owner whims; WhatsApp booking is common.`,
        [
          'Entry fees support restoration — ask what phase is funded.',
          'Roof access may be extra — wind hazard on narrow stairs.',
          'Some displays include family portraits still private — no flash.',
        ],
        [
          'Combine with chai in courtyard only if invited — pricing may be separate.',
          `If reviews mention “aggressive guides”, book official slots only.`,
        ],
      ),
      place(
        slug,
        'mus-war-mem',
        'War memorial rooms & police museums (where listed)',
        'Modern military / civic memory',
        '20th century',
        `Cantonment / parade ground adjacency, ${cn}`,
        `${cn} war memorial museum`,
        `Uniforms, medal stories, and partition ledgers — quieter than palace bling but central to how ${cn} imagines courage now.`,
        [
          'Security checks stricter — carry ID.',
          'Some galleries ban bags entirely.',
          'Children may find imagery intense — preview online if available.',
        ],
        [
          'Veteran volunteers sometimes narrate — weekdays better for conversation.',
          `Flag protocols matter — stand quietly during cadet drills if sharing campus.`,
        ],
      ),
    ],
  }

  const hidden: AttractionGuideBundle = {
    title: 'Hidden gems',
    eyebrow: 'Sightseeing & Attractions',
    lead: `Beyond billboard sites, ${cn} rewards slow turns: side lanes, orchard walls, unnamed stepwells, and ridge angles only shepherds use. “Hidden” does not mean risk-free — daylight, footwear, and local confirmation still matter.`,
    categoryTiles: [
      { label: 'Micro lanes', value: 'Facades, chattris, jali windows' },
      { label: 'Quiet water', value: 'Peripheral tanks & birding reeds' },
      { label: 'Craft roofs', value: 'Workshops without shopfronts' },
      { label: 'Safety', value: 'No solo night exploration' },
    ],
    places: [
      place(
        slug,
        'hid-lane',
        'Back-lane chattris & haveli shoulders',
        'Micro-heritage urban fabric',
        '18th–19th century residues',
        `Wards behind main bazaar, ${cn}`,
        `${cn} old city heritage lane walk`,
        `Where Instagram hasn’t named every corner — carved brackets, faded frescoes, and wooden balconies that smell of rain.`,
        [
          'Residents live here — noise and lenses intrude; smile first, shoot second.',
          'Dogs and scooters share lanes — walk single file.',
          'Some lanes flood in monsoon — waterproof sandals help.',
        ],
        [
          'Heritage walks led by locals fund repairs — prefer paid ethical tours over trespass.',
          `Morning light reveals stucco better than noon glare.`,
        ],
      ),
      place(
        slug,
        'hid-stepwell',
        'Lesser-known baori / vav pockets',
        'Stepwell architecture',
        'Medieval patronage',
        `Peri-urban wards — verify access, ${cn}`,
        `${cn} hidden stepwell baori`,
        `Often locked or part-private — peer respectfully; never hop barbed wire for “content”.`,
        [
          'Bat colonies and ammonia smell are real — carry scarf.',
          'ASI sites need tickets even if empty — fines exist.',
          'Depth disorients — hold children tight on stairs.',
        ],
        [
          'Monsoon water level changes daily — one viral reel doesn’t mean safe today.',
          `Pair with local NGO clean-up days if scheduled — community goodwill opens doors.`,
        ],
      ),
      place(
        slug,
        'hid-bird',
        'Reed beds & peri-urban wetlands',
        'Birding hides (informal)',
        'Seasonal ecology',
        `Tank edges beyond tourist ghats, ${cn}`,
        `${cn} bird watching wetland`,
        `eBird hotspots sometimes use farmer fields — ask before setting up tripod.`,
        [
          'Dawn and dusk matter more than gear.',
          'March–April migrants differ from winter visitors — checklist updates weekly.',
          'Keep distance from nesting islands — drones stress birds.',
        ],
        [
          `Carry binocs, not playback calls — ethical birders win repeat sightings.`,
          'Plastic spooks habitat — pack out everything.',
        ],
      ),
      place(
        slug,
        'hid-craft',
        'Courtyard workshops (blue pottery, metal, leather)',
        'Living craft cells',
        'Generational skill',
        `Non-retail lanes — Maps often wrong, ${cn}`,
        `${cn} artisan workshop visit`,
        `Knock politely; many units supply export houses and dislike random haggling — ask for seconds or learning slots.`,
        [
          'Heat + kiln fumes require short visits — asthmatics beware.',
          'Children should not run near wheels or acids.',
          'Buy directly if welcomed — prices may still be export-linked.',
        ],
        [
          `Document processes only after consent — designs may be pre-order for overseas clients.`,
          'Festivals shut workshops unpredictably — call morning-of.',
        ],
      ),
      place(
        slug,
        'hid-ridge',
        'Alternate ridge angles & shepherd trails',
        'Low-traffic viewpoints',
        'Pastoral routes',
        `Aravalli folds north/south of ${cn}`,
        `${cn} quiet hill viewpoint trail`,
        `Not the same selfie point as everyone else — longer walk, fewer railings, bigger sky.`,
        [
          'Sheep dogs guard flocks — don’t pet.',
          'Carry offline map — trails fork.',
          'Forest department beats may question cameras — permits for commercial shoots.',
        ],
        [
          'Sunset returns in dark — torch + buddy system.',
          `If you find fossils or lithics, photograph and leave — removal is illegal.`,
        ],
      ),
    ],
  }

  const out: FullGuide = {
    natural,
    religious,
    museums,
    'hidden-gems': hidden,
  }
  cache.set(slug, out)
  return out
}
