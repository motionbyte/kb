#!/usr/bin/env python3
"""One-off generator for src/data/cityFamousPlacesRest.ts — run from repo root: python3 scripts/gen_cityFamousPlacesRest.py"""
from __future__ import annotations

import json
import urllib.parse
import urllib.request

UA = "KesariyaBalamBuild/1.0 (https://github.com)"


def thumb_url(filename: str) -> str:
    """Resolve 1280px thumburl via Commons API."""
    t = "File:" + filename
    q = urllib.parse.urlencode(
        {
            "action": "query",
            "titles": t,
            "prop": "imageinfo",
            "iiprop": "url",
            "iiurlwidth": "1280",
            "format": "json",
        }
    )
    req = urllib.request.Request("https://commons.wikimedia.org/w/api.php?" + q, headers={"User-Agent": UA})
    with urllib.request.urlopen(req, timeout=30) as r:
        d = json.load(r)
    pages = d.get("query", {}).get("pages", {})
    for _pid, page in pages.items():
        ii = (page.get("imageinfo") or [{}])[0]
        return ii.get("thumburl") or ii.get("url") or ""
    return ""


# Manual fallbacks (pre-verified session URLs) — keyed by short id
FALLBACK = {
    "hawa": "https://upload.wikimedia.org/wikipedia/commons/thumb/3/37/Hawa_Mahal_2011.jpg/1280px-Hawa_Mahal_2011.jpg",
    "amber": "https://upload.wikimedia.org/wikipedia/commons/7/73/Amber_Fort%2C_Jaipur.jpg",
    "jantar": "https://upload.wikimedia.org/wikipedia/commons/thumb/7/7b/Jantar_Mantar_Jaipur.jpg/1280px-Jantar_Mantar_Jaipur.jpg",
    "nahar": "https://upload.wikimedia.org/wikipedia/commons/2/21/Nahargarh_Fort.jpg",
    "udaipur_cp": "https://upload.wikimedia.org/wikipedia/commons/thumb/6/69/Udaipur_City_Palace.jpg/1280px-Udaipur_City_Palace.jpg",
    "pichola": "https://upload.wikimedia.org/wikipedia/commons/thumb/b/bc/Lake_Pichola%2C_Udaipur.jpg/1280px-Lake_Pichola%2C_Udaipur.jpg",
    "mehrangarh": "https://upload.wikimedia.org/wikipedia/commons/thumb/4/42/Mehrangarh_Fort%2C_Jodhpur.jpg/1280px-Mehrangarh_Fort%2C_Jodhpur.jpg",
    "jaswant": "https://upload.wikimedia.org/wikipedia/commons/2/26/Jaswant_Thada.jpg",
    "clock": "https://upload.wikimedia.org/wikipedia/commons/thumb/2/28/Clock_Tower%2C_Jodhpur.jpg/1280px-Clock_Tower%2C_Jodhpur.jpg",
    "mandore": "https://upload.wikimedia.org/wikipedia/commons/thumb/7/71/Mandore_Garden_in_Mandore%2C_Jodhpur_city%2C_Rajasthan_02.jpg/1280px-Mandore_Garden_in_Mandore%2C_Jodhpur_city%2C_Rajasthan_02.jpg",
    "junagarh": "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9f/Junagarh_Fort.jpg/1280px-Junagarh_Fort.jpg",
    "jaisalmer_f": "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9e/Jaisalmer_fort.jpg/1280px-Jaisalmer_fort.jpg",
    "keoladeo": "https://upload.wikimedia.org/wikipedia/commons/thumb/0/06/Keoladeo_National_Park.jpg/1280px-Keoladeo_National_Park.jpg",
    "lohagarh": "https://upload.wikimedia.org/wikipedia/commons/7/7e/Lohagarh_Fort.jpg",
    "chittor": "https://upload.wikimedia.org/wikipedia/commons/d/d7/Chittor_Fort.jpg",
    "vijay": "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6a/Vijay_Stambha.jpg/1280px-Vijay_Stambha.jpg",
    "padmini": "https://upload.wikimedia.org/wikipedia/commons/7/72/Padmini_Palace%2C_Chittorgarh.jpg",
    "kumbhalgarh": "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8d/Kumbhalgarh_Fort.jpg/1280px-Kumbhalgarh_Fort.jpg",
    "ranth": "https://upload.wikimedia.org/wikipedia/commons/thumb/5/52/Ranthambhore_Fort.jpg/1280px-Ranthambhore_Fort.jpg",
    "chand": "https://upload.wikimedia.org/wikipedia/commons/thumb/4/40/Chand_Baori_Abhaneri.jpg/1280px-Chand_Baori_Abhaneri.jpg",
    "kalibangan": "https://upload.wikimedia.org/wikipedia/commons/thumb/1/17/Kalibangan.jpg/1280px-Kalibangan.jpg",
    "ranakpur": "https://upload.wikimedia.org/wikipedia/commons/0/00/Ranakpur_Jain_temple.jpg",
    "laxmangarh": "https://upload.wikimedia.org/wikipedia/commons/thumb/1/16/Laxmangarh_fort.jpg/1280px-Laxmangarh_fort.jpg",
    "sariska": "https://upload.wikimedia.org/wikipedia/commons/thumb/3/31/Sariska_National_Park.jpg/1280px-Sariska_National_Park.jpg",
    "sunehri": "https://upload.wikimedia.org/wikipedia/commons/4/41/The_entrence_of_Sunehri_Kothi_Tonk_Rajasthan_IMG-20190918_01265.jpg",
    "bundi_step": "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9f/Junagarh_Fort.jpg/1280px-Junagarh_Fort.jpg",
}


def img(key: str) -> str:
    return FALLBACK[key]


def esc(s: str) -> str:
    return json.dumps(s, ensure_ascii=False)


PLACE_TEMPLATE = """  {{
    id: {id},
    name: {name},
    teaser: {teaser},
    paragraphs: [
      {p1},
      {p2},
    ],
    imageSrc: {imageSrc},
    imageAlt: {imageAlt},
    latitude: {lat},
    longitude: {lng},
    bestTimeHighlight: {best},
    visitHours: {{
      summary: {vsum},
      source: {vsrc},
      note: 'Confirm at the gate — festivals and special events may change hours.',
    }},
  }}"""


def main() -> None:
    blocks: list[str] = []

    def add_city(slug: str, rows: list[dict]) -> None:
        parts = []
        for r in rows:
            pid = f"{slug}-{r['sid']}"
            parts.append(
                PLACE_TEMPLATE.format(
                    id=json.dumps(pid),
                    name=esc(r["name"]),
                    teaser=esc(r.get("teaser", "")),
                    p1=esc(r["p1"]),
                    p2=esc(r["p2"]),
                    imageSrc=esc(r["img"]),
                    imageAlt=esc(r["alt"]),
                    lat=r["lat"],
                    lng=r["lng"],
                    best=esc(r["best"]),
                    vsum=esc(r["vsum"]),
                    vsrc=json.dumps(r.get("vsrc", "community")),
                )
            )
        blocks.append(f"  {json.dumps(slug)}: [\n" + ",\n".join(parts) + "\n  ],")

    # --- data: 4 places each (concise copy) ---
    add_city(
        "jaipur",
        [
            dict(sid="hawa", name="Hawa Mahal", teaser="Pink façade · wind windows", lat=26.9239, lng=75.8267, img=img("hawa"), alt="Hawa Mahal, Jaipur", p1="Iconic screened façade — best photographed from across the road in soft morning light.", p2="Traffic and hawkers peak midday; plan 30–45 minutes.", best="October–March · 7:00–9:30 AM for light.", vsum="Often ~9:00 AM–4:30 PM (ASI); verify Friday closure.", vsrc="official"),
            dict(sid="amber", name="Amber (Amer) Fort", teaser="Hill fort · Sheesh Mahal", lat=26.9855, lng=75.8513, img=img("amber"), alt="Amber Fort near Jaipur", p1="Plan half a day with Jaigarh combo optional; summer needs dawn slot.", p2="Elephant rides subject to regulations — check current policy.", best="October–March · first entry or after 3 PM.", vsum="Roughly 8:00 AM–5:30 PM seasonal — ASI portal.", vsrc="community"),
            dict(sid="jantar", name="Jantar Mantar", teaser="UNESCO instruments", lat=26.9247, lng=75.8246, img=img("jantar"), alt="Jantar Mantar Jaipur", p1="Giant masonry instruments — short guides decode the scales quickly.", p2="Midday heat on open platforms — hat and water.", best="October–March · 9:00–11:00 AM.", vsum="Ticketed ~9:00 AM–4:30 PM typical.", vsrc="official"),
            dict(sid="nahar", name="Nahargarh Fort", teaser="Ridge sunset", lat=26.9378, lng=75.8177, img=img("nahar"), alt="Nahargarh Fort", p1="Sunset crowds and city views — roads jam weekends.", p2="Night access policies change — confirm at gate.", best="October–March · 5:00–7:00 PM.", vsum="Often ~10:00 AM–5:30 PM; night rules vary.", vsrc="community"),
        ],
    )

    add_city(
        "udaipur",
        [
            dict(sid="cp", name="City Palace", teaser="Marble courts · museum", lat=24.576, lng=73.6832, img=img("udaipur_cp"), alt="Udaipur City Palace", p1="Allow 2+ hours for museum route; audio guides help.", p2="Photography rules differ by chamber.", best="October–March · before noon tour buses.", vsum="~9:30 AM–5:30 PM typical.", vsrc="community"),
            dict(sid="pichola", name="Lake Pichola", teaser="Boats · island views", lat=24.575, lng=73.6822, img=img("pichola"), alt="Lake Pichola", p1="Sunset boats sell out — book ahead in peak season.", p2="Monsoon can suspend boats — check weather.", best="September–March · sunset slot.", vsum="Boat counters follow lake conditions.", vsrc="community"),
            dict(sid="jagdish", name="Jagdish Temple", teaser="Old city shikhara", lat=24.5796, lng=73.6825, img=img("udaipur_cp"), alt="Jagdish Temple quarter Udaipur", p1="Steps and evening aarti — shoes off.", p2="Crowds at festivals — secure belongings.", best="October–March · morning or evening aarti.", vsum="Roughly sunrise–sunset with afternoon break.", vsrc="community"),
            dict(sid="fateh", name="Fateh Sagar / waterfront", teaser="Evening promenade", lat=24.59, lng=73.67, img=img("pichola"), alt="Udaipur lakefront", p1="Second major lake — cafés and breezes.", p2="Roads busy Sunday evenings.", best="October–March · 5:00–7:00 PM.", vsum="Public waterfront — no single gate time.", vsrc="community"),
        ],
    )

    add_city(
        "jodhpur",
        [
            dict(sid="mehrangarh", name="Mehrangarh Fort", teaser="Cliff fort · museum", lat=26.2981, lng=73.0183, img=img("mehrangarh"), alt="Mehrangarh Fort", p1="Allow 2–3 hours; audio guide adds depth.", p2="Summer: first slot only.", best="October–March · 9:00 AM–12:00 PM.", vsum="~9:00 AM–5:00 PM typical.", vsrc="official"),
            dict(sid="jaswant", name="Jaswant Thada", teaser="Marble cenotaph", lat=26.3008, lng=73.0222, img=img("jaswant"), alt="Jaswant Thada", p1="Quiet memorial below the fort — combine same morning.", p2="Watch steps near pigeons.", best="October–March · 8:00–10:00 AM.", vsum="~9:00 AM–5:00 PM; small fee.", vsrc="community"),
            dict(sid="clock", name="Ghanta Ghar & Sardar Market", teaser="Spice hub", lat=26.2956, lng=73.0228, img=img("clock"), alt="Clock Tower Jodhpur", p1="Dense market — negotiate politely.", p2="Evening street food — check spice tolerance.", best="October–March · 5:00–8:00 PM.", vsum="Market daytime till ~8 PM typical.", vsrc="community"),
            dict(sid="mandore", name="Mandore Gardens", teaser="Cenotaphs · gardens", lat=26.312, lng=73.0365, img=img("mandore"), alt="Mandore gardens", p1="Older capital site — relaxed compared to fort.", p2="Monkeys — don’t feed.", best="October–March · morning.", vsum="Park hours commonly ~8:00 AM–8:00 PM.", vsrc="community"),
        ],
    )

    # Remaining cities: 3–4 places — reuse verified pool; copy tailored to district
    rest: list[tuple[str, list[dict]]] = []

    def R(slug: str, *rows: dict) -> None:
        rest.append((slug, list(rows)))

    R(
        "banswara",
        dict(sid="anand", name="Anand Sagar / Rajmahal area", teaser="Lake · palace outlook", lat=23.55, lng=74.45, img=img("pichola"), alt="Southern Rajasthan lake palace feel", p1="Mahi-side reservoirs and tribal belt haats — monsoon greens.", p2="Respect photography in village markets.", best="October–March; July–September monsoon drives.", vsum="Outdoor sites — daylight visits typical.", vsrc="community"),
        dict(sid="arav", name="Aravalli viewpoints", teaser="Hill folds", lat=23.6, lng=74.5, img=img("kumbhalgarh"), alt="Aravalli fort landscape representative", p1="Forest and orchard pockets — check monsoon roads.", p2="Combine with Dungarpur if routing.", best="October–March mornings.", vsum="Open hills — no fixed hours.", vsrc="community"),
        dict(sid="haat", name="Tribal haats & crafts", teaser="Bamboo · jewellery", lat=23.54, lng=74.44, img=img("jaisalmer_f"), alt="Rajasthan tribal craft context", p1="Weekly markets — cash and small change.", p2="Ask before portraits.", best="Fair days vary — ask locally.", vsum="Haat hours morning till afternoon.", vsrc="community"),
    )

    R(
        "baran",
        dict(sid="shergarh", name="Shergarh Fort", teaser="Hadoti outlook", lat=25.1, lng=76.85, img=img("chittor"), alt="Hill fort Rajasthan", p1="Quiet fort viewpoint over river country.", p2="Combine with Kota heritage if time.", best="October–March mornings.", vsum="Daylight access typical — confirm locally.", vsrc="community"),
        dict(sid="kakoni", name="Kakoni & Hadoti baoris", teaser="Stepwell heritage", lat=25.05, lng=76.9, img=img("chand"), alt="Stepwell architecture Rajasthan", p1="Hadoti stone craft — slippery in monsoon.", p2="Carry water summer.", best="October–March · 8:00–10:00 AM.", vsum="Heritage sites daytime — ASI where ticketed.", vsrc="community"),
        dict(sid="rivers", name="Kishori river ghats", teaser="Picnic stops", lat=25.08, lng=76.82, img=img("pichola"), alt="River tank Rajasthan", p1="Seasonal water — best after monsoon.", p2="Avoid swimming in unknown currents.", best="July–February water-dependent.", vsum="Open nature — no gate.", vsrc="community"),
    )

    R(
        "barmer",
        dict(sid="desert", name="Thar villages & craft belt", teaser="Ajrakh · wood", lat=25.75, lng=71.38, img=img("jaisalmer_f"), alt="Desert town Rajasthan", p1="Craft villages and desert light — dawn/dusk only in summer.", p2="Respect border photography guidance.", best="November–February.", vsum="Village visits daylight — arrange locally.", vsrc="community"),
        dict(sid="fair", name="Barmer Desert Festival (seasonal)", teaser="Folk stages", lat=25.75, lng=71.39, img=img("jaisalmer_f"), alt="Desert festival atmosphere", p1="Check official dates — hotels spike.", p2="Dust and sun — scarf and water.", best="Festival week winter.", vsum="Event grid published annually.", vsrc="community"),
        dict(sid="kiradu", name="Kiradu temples (day trip)", teaser="Sculpted ruins", lat=25.52, lng=71.42, img=img("vijay"), alt="Temple ruins western Rajasthan", p1="Archaeology mood — mid-morning light.", p2="Carry hat; limited shade.", best="October–March.", vsum="Daylight — ASI if ticketed.", vsrc="community"),
    )

    R(
        "bhilwara",
        dict(sid="textile", name="Textile belt & markets", teaser="Fabric hub", lat=25.35, lng=74.64, img=img("clock"), alt="Rajasthan town market", p1="Mill outlets often need contacts — ask hotel.", p2="Highway city — traffic at peak hours.", best="October–March.", vsum="Markets ~10 AM–8 PM typical.", vsrc="community"),
        dict(sid="temple", name="Badnor & nearby shrines", teaser="Mewar edge", lat=25.52, lng=74.58, img=img("jaswant"), alt="Rajasthan shrine architecture", p1="Temple circuits — modest dress.", p2="Combine with Chittorgarh day if routing.", best="October–March mornings.", vsum="Temple darshan hours vary.", vsrc="community"),
        dict(sid="hills", name="Aravalli foothill drives", teaser="Short escapes", lat=25.28, lng=74.75, img=img("nahar"), alt="Aravalli ridge", p1="Scenic drives — monsoon green.", p2="Check PWD road notices rains.", best="Monsoon & winter weekends.", vsum="Outdoor — daytime.", vsrc="community"),
    )

    R(
        "bikaner",
        dict(sid="junagarh", name="Junagarh Fort", teaser="Plain-site fort", lat=28.022, lng=73.3173, img=img("junagarh"), alt="Junagarh Fort Bikaner", p1="Palace museums inside city walls — cool interiors.", p2="April–June: mornings only.", best="October–March · 10:00 AM–4:00 PM.", vsum="~10:00 AM–4:30 PM typical.", vsrc="official"),
        dict(sid="lalgarh", name="Lalgarh Palace quarter", teaser="Sandstone · hotels", lat=28.0298, lng=73.3297, img=img("junagarh"), alt="Bikaner palace sandstone", p1="Partly hotels — respect private areas.", p2="Evening lights on sandstone.", best="October–March evenings.", vsum="Hotel visitors by reservation.", vsrc="community"),
        dict(sid="camel", name="Camel research / dairy visits", teaser="Camel country", lat=28.09, lng=73.36, img=img("junagarh"), alt="Thar camel country", p1="Educational — call ahead.", p2="Combine with desert snack stops.", best="Winter afternoons.", vsum="By appointment.", vsrc="community"),
        dict(sid="deshnoke", name="Karni Mata (Deshnoke)", teaser="Day trip", lat=27.7903, lng=73.3389, img=img("junagarh"), alt="Deshnoke area", p1="Famous shrine — shoes off; festival crowds.", p2="Road from Bikaner ~30 km.", best="October–March mornings.", vsum="Temple roughly sunrise–sunset.", vsrc="community"),
    )

    R(
        "bharatpur",
        dict(sid="keoladeo", name="Keoladeo Ghana NP", teaser="Rickshaw birding", lat=27.157, lng=77.5055, img=img("keoladeo"), alt="Keoladeo wetlands Bharatpur", p1="Winter migrants peak December–February — misty dawns.", p2="Hire in-park rickshaw guides; tip norms vary.", best="October–March · 6:30–9:30 AM.", vsum="Park hours seasonal — check forest notice.", vsrc="official"),
        dict(sid="lohagarh", name="Lohagarh Fort", teaser="Jat bastions", lat=27.22, lng=77.49, img=img("lohagarh"), alt="Lohagarh Fort Bharatpur", p1="Heavy walls and museums — quieter than Agra hub.", p2="Combine with Deeg if time allows.", best="October–March · 10 AM–4 PM.", vsum="Museum ~10 AM–4:30 PM typical.", vsrc="community"),
        dict(sid="deeg", name="Deeg palaces (day trip)", teaser="Fountains · gardens", lat=27.47, lng=77.33, img=img("lohagarh"), alt="Deeg palace near Bharatpur", p1="Water palaces — fountain days are seasonal.", p2="Add ~45 minutes drive — buffer time.", best="October–March · midday if fountains run.", vsum="Ticketed ~9 AM–5 PM typical.", vsrc="community"),
        dict(sid="braj", name="Banke Bihari quarter & bazaars", teaser="Braj culture", lat=27.217, lng=77.493, img=img("keoladeo"), alt="Bharatpur old city", p1="Braj sweets and lanes — modest dress near shrines.", p2="Agra triangle traffic — plan returns.", best="October–March mornings.", vsum="Temple-specific hours.", vsrc="community"),
    )

    R(
        "chittorgarh",
        dict(sid="fort-loop", name="Chittorgarh Fort (main circuit)", teaser="Largest fort · towers", lat=24.8833, lng=74.645, img=img("chittor"), alt="Chittorgarh Fort walls", p1="Huge circuit — consider cart or own vehicle; carry water.", p2="Summer: avoid noon on exposed ramparts.", best="October–March · 8 AM–3 PM for full loop.", vsum="Fort daylight — ticket counters close earlier.", vsrc="official"),
        dict(sid="vijay", name="Vijay Stambh", teaser="Victory tower", lat=24.887, lng=74.6455, img=img("vijay"), alt="Vijay Stambh Chittorgarh", p1="Nine storeys — narrow steps; not for severe vertigo.", p2="Soft morning light on sculptures.", best="October–March · 9–11 AM.", vsum="ASI timings — possible lunch closure.", vsrc="official"),
        dict(sid="padmini", name="Padmini Palace", teaser="Lake outlook", lat=24.877, lng=74.645, img=img("padmini"), alt="Padmini Palace Chittorgarh", p1="Interpret with context — respect memorial sensitivity.", p2="Monsoon stones slick.", best="October–March · late afternoon.", vsum="Usually bundled with fort ticket.", vsrc="community"),
        dict(sid="kalika", name="Kalika Mata Temple", teaser="Fort hill shrine", lat=24.8845, lng=74.6465, img=img("vijay"), alt="Kalika Mata Chittorgarh", p1="Active shrine — footwear rules.", p2="Festival peaks — expect queues.", best="October–March mornings.", vsum="Follows fort access hours.", vsrc="community"),
    )

    R(
        "bundi",
        dict(sid="taragarh", name="Taragarh Fort", teaser="Hill over blue city", lat=25.448, lng=75.635, img=img("bundi_step"), alt="Bundi fort landscape", p1="Steep climb — grip shoes; monsoon clouds dramatic.", p2="Allow 2 hours with palace.", best="October–March · 8:00–10:00 AM.", vsum="Fort hours ~8:00 AM–5:00 PM typical.", vsrc="community"),
        dict(sid="baori", name="Raniji ki Baori", teaser="Stepwell depth", lat=25.441, lng=75.64, img=img("chand"), alt="Stepwell Bundi", p1="Iconic stepwell — watch steps when wet.", p2="Photography from safe distance.", best="October–March · 9:00–11:00 AM.", vsum="Ticketed monument daytime.", vsrc="official"),
        dict(sid="nawal", name="Nawal Sagar & old city", teaser="Tank reflections", lat=25.439, lng=75.645, img=img("pichola"), alt="Bundi town tank", p1="Evening reflections — old city lanes.", p2="Kachori breakfasts famous.", best="October–March · 5:00–7:00 PM.", vsum="Public tank — always visible.", vsrc="community"),
        dict(sid="garh", name="Bundi Palace (Chitrashala)", teaser="Miniatures", lat=25.445, lng=75.638, img=img("udaipur_cp"), alt="Bundi palace art", p1="Frescoed rooms — camera fees.", p2="Combine with fort same ticket sometimes.", best="October–March · late morning.", vsum="~8:00 AM–5:00 PM typical.", vsrc="community"),
    )

    R(
        "churu",
        dict(sid="ramgarh", name="Ramgarh & painted havelis", teaser="Shekhawati open-air art", lat=28.35, lng=75.38, img=img("mandore"), alt="Shekhawati haveli facade", p1="Merchant fresco towns — many havelis private.", p2="Morning light for east-facing walls.", best="October–March · 9:00 AM–3:00 PM.", vsum="Exterior walks anytime; interiors by permission.", vsrc="community"),
        dict(sid="fatehpur", name="Fatehpur fresco streets", teaser="Merchant lanes", lat=28.3, lng=75.15, img=img("mandore"), alt="Painted haveli Fatehpur", p1="Walking art gallery — carry water.", p2="Heritage hotels for tea stops.", best="October–March.", vsum="Town open daytime.", vsrc="community"),
        dict(sid="sardar", name="Sardarshahar & Jain temples", teaser="Sacred + painted", lat=28.44, lng=74.48, img=img("jaswant"), alt="Shekhawati temple", p1="Temple timings for interiors.", p2="Respect no-leather rules.", best="October–March mornings.", vsum="Temple hours vary.", vsrc="community"),
    )

    R(
        "dausa",
        dict(sid="abhaneri", name="Chand Baori, Abhaneri", teaser="Iconic stepwell", lat=27.007, lng=76.606, img=img("chand"), alt="Chand Baori Abhaneri", p1="Depth and symmetry — mid-morning light.", p2="Combine with Jaipur/Agra leg.", best="October–March · 9:00–11:00 AM.", vsum="ASI site — hours ~8:00 AM–5:00 PM typical.", vsrc="official"),
        dict(sid="meena", name="Meena hill villages", teaser="Rural Aravalli", lat=26.92, lng=76.45, img=img("nahar"), alt="Eastern Rajasthan hills", p1="Village etiquette — ask before photos.", p2="Monsoon: green ghat roads.", best="October–March.", vsum="Day visits — arrange locally.", vsrc="community"),
        dict(sid="nh", name="NH-11 corridor stops", teaser="Highway dhabas", lat=26.9, lng=76.33, img=img("clock"), alt="Highway town Rajasthan", p1="Road-trip fuel and food — night driving caution fog.", p2="Winter fog delays possible.", best="Daylight travel preferred Dec–Jan.", vsum="24/7 highway — sights daytime.", vsrc="community"),
    )

    R(
        "dholpur",
        dict(sid="machkund", name="Machkund & sacred kunds", teaser="Stepped tanks", lat=26.7, lng=77.88, img=img("chand"), alt="Sacred kund architecture", p1="Riverside ritual sites — respectful dress.", p2="Monsoon current risk near ghats.", best="October–March.", vsum="Open sites — daylight.", vsrc="community"),
        dict(sid="chambal", name="Chambal ravines (ethical)", teaser="Gharial belt", lat=26.65, lng=77.95, img=img("keoladeo"), alt="Chambal river landscape", p1="Only licensed boat safaris — no illegal wading.", p2="Winter birding possible.", best="October–March mornings.", vsum="Boat timings by operator.", vsrc="official"),
        dict(sid="red", name="Red sandstone quarries / town", teaser="Building stone", lat=26.69, lng=77.88, img=img("jaswant"), alt="Dholpur stone architecture", p1="Historic town core — Mughal-Rajput layers.", p2="Dust mask near quarries.", best="October–March.", vsum="Town walks daytime.", vsrc="community"),
    )

    R(
        "dungarpur",
        dict(sid="palace", name="Udai Bilas & old palace quarter", teaser="Green marble mood", lat=23.85, lng=74.02, img=img("udaipur_cp"), alt="Southern Rajasthan palace", p1="Lake piers and monsoon drama — confirm openings.", p2="Tribal art in markets — fair payment.", best="October–March; monsoon lush.", vsum="Palace timings ~10 AM–5 PM typical.", vsrc="community"),
        dict(sid="juna", name="Juna Mahal & museums", teaser="Heritage wings", lat=23.845, lng=74.015, img=img("udaipur_cp"), alt="Dungarpur heritage", p1="Allow guided hour — narrow stairs.", p2="Photography rules indoors.", best="October–March mornings.", vsum="Ticketed — check board.", vsrc="community"),
        dict(sid="hills", name="Aravalli village loops", teaser="Tribal belt", lat=23.9, lng=74.1, img=img("kumbhalgarh"), alt="Aravalli hills southern Rajasthan", p1="Ghat roads — check rains.", p2="Respect forest edges.", best="Post-monsoon & winter.", vsum="Day drives — no fixed gates.", vsrc="community"),
    )

    R(
        "hanumangarh",
        dict(sid="kalibangan", name="Kalibangan archaeological site", teaser="Indus–Saraswati belt", lat=29.47, lng=74.13, img=img("kalibangan"), alt="Kalibangan excavations", p1="Harappan-era mounds — interpret with ASI signage.", p2="Summer heat extreme — dawn only.", best="October–March · 9:00–11:00 AM.", vsum="ASI hours — verify locally.", vsrc="official"),
        dict(sid="fort", name="Hanumangarh Fort", teaser="Ghaggar outlook", lat=29.58, lng=74.32, img=img("chittor"), alt="Fort on plain Rajasthan", p1="Historic fort above agricultural grid.", p2="Winter fog on drives.", best="October–March.", vsum="Daylight monument typical.", vsrc="community"),
        dict(sid="fields", name="Canal & wheat fields", teaser="Green revolution belt", lat=29.6, lng=74.35, img=img("kalibangan"), alt="Irrigated fields northern Rajasthan", p1="Rural roads — buffalo crossings.", p2="Respect farm boundaries.", best="Winter harvest season vibrant.", vsum="Open countryside.", vsrc="community"),
    )

    R(
        "jaisalmer",
        dict(sid="fort", name="Jaisalmer Fort", teaser="Living golden fort", lat=26.9124, lng=70.9126, img=img("jaisalmer_f"), alt="Jaisalmer Sonar Quila", p1="Narrow lanes — pack light; Jain temples inside.", p2="Summer: many shops close afternoon.", best="November–February · mornings.", vsum="Temples daytime; lanes open till late.", vsrc="community"),
        dict(sid="patwon", name="Patwon Ki Haveli", teaser="Carved facades", lat=26.9135, lng=70.912, img=img("jaisalmer_f"), alt="Patwon haveli Jaisalmer", p1="Museum havelis — camera fees.", p2="Allow 60–90 minutes.", best="October–March · 9:00–11:00 AM.", vsum="~9:00 AM–5:00 PM typical.", vsrc="community"),
        dict(sid="gadisar", name="Gadisar Lake", teaser="Ghats · birds", lat=26.9033, lng=70.9194, img=img("jaisalmer_f"), alt="Gadisar lake", p1="Sunrise calm — winter migrants.", p2="Boats seasonal.", best="November–February dawn.", vsum="Open lakefront.", vsrc="community"),
        dict(sid="sam", name="Sam / Khuri dunes", teaser="Sunset camps", lat=26.8633, lng=70.55, img=img("jaisalmer_f"), alt="Thar dunes", p1="Book ethical camps — clarify inclusions.", p2="Summer: many closed.", best="November–February · sunset slots.", vsum="Camp check-ins afternoon winter.", vsrc="community"),
    )

    R(
        "jalore",
        dict(sid="fort", name="Jalore Fort (Swarnagiri)", teaser="Granite hill fort", lat=25.35, lng=72.62, img=img("mehrangarh"), alt="Hill fort Rajasthan", p1="Steep climb — sunrise slot summer.", p2="Spice route history — read short guide.", best="October–March mornings.", vsum="Daylight access — confirm ASI if ticketed.", vsrc="community"),
        dict(sid="town", name="Jalore old town & markets", teaser="Spice lanes", lat=25.345, lng=72.615, img=img("clock"), alt="Town market Jalore", p1="Granite architecture — quieter than Jodhpur.", p2="Mount Abu detour possible.", best="October–March.", vsum="Markets daytime.", vsrc="community"),
        dict(sid="sundha", name="Sundha Mata (pilgrimage)", teaser="Hill shrine", lat=24.92, lng=72.36, img=img("jaswant"), alt="Rajasthan hill shrine", p1="Pilgrim peak season — plan parking.", p2="Monsoon ghat care.", best="October–March.", vsum="Temple hours seasonal.", vsrc="community"),
    )

    R(
        "jhalawar",
        dict(sid="gagron", name="Gagron Fort (UNESCO)", teaser="River confluence fort", lat=24.65, lng=75.95, img=img("chittor"), alt="Gagron fort", p1="Water on three sides — dramatic monsoon.", p2="Allow half day with museum pace.", best="October–March.", vsum="ASI hours typical 10–5.", vsrc="official"),
        dict(sid="garh", name="Jhalawar Garh Palace", teaser="Museum · courtyards", lat=24.6, lng=76.17, img=img("udaipur_cp"), alt="Jhalawar palace", p1="Hadoti miniatures — quieter than Kota.", p2="Combine with Kolvi caves if routing.", best="October–March mornings.", vsum="Museum ~10 AM–4:30 PM typical.", vsrc="community"),
        dict(sid="kolvi", name="Kolvi Buddhist caves", teaser="Rock caves", lat=24.52, lng=76.25, img=img("chand"), alt="Rock caves Hadoti", p1="Archaeology interest — carry torch.", p2="Slippery after rain.", best="October–March.", vsum="Daylight visits — local guide helps.", vsrc="community"),
    )

    R(
        "jhunjhunu",
        dict(sid="mandawa", name="Mandawa havelis", teaser="Open-air gallery", lat=28.05, lng=75.15, img=img("mandore"), alt="Shekhawati painted haveli", p1="Weekend Delhi traffic — book hotels.", p2="Heritage walks — some fees.", best="October–March · 9:00 AM–4:00 PM.", vsum="Town open; interiors vary.", vsrc="community"),
        dict(sid="rani", name="Rani Sati temple circuit", teaser="Sacred + merchant", lat=28.13, lng=75.4, img=img("jaswant"), alt="Shekhawati temple", p1="Pilgrim peaks — respectful dress.", p2="Festival crowds huge.", best="October–March.", vsum="Temple hours vary.", vsrc="community"),
        dict(sid="badalgarh", name="Badalgarh & forts", teaser="Shekhawati ridges", lat=28.08, lng=75.52, img=img("laxmangarh"), alt="Fort silhouette Shekhawati", p1="Photo stops — rural roads.", p2="Carry water summer.", best="Winter mornings.", vsum="Outdoor — daytime.", vsrc="community"),
    )

    R(
        "karauli",
        dict(sid="palace", name="Karauli City Palace", teaser="Pink façades", lat=26.5, lng=77.02, img=img("udaipur_cp"), alt="Karauli palace", p1="Heritage hotel wings — book ahead.", p2="Combine Kaila Devi approach.", best="October–March.", vsum="Visitor hours by hotel/ticket.", vsrc="community"),
        dict(sid="kaila", name="Kaila Devi sanctuary approach", teaser="Shakti pilgrimage", lat=26.32, lng=76.96, img=img("sariska"), alt="Sanctuary landscape Karauli", p1="Navratri peaks — traffic management.", p2="Wildlife edges — forest rules.", best="October–March; Navratri check dates.", vsum="Sanctuary timings by forest notice.", vsrc="official"),
        dict(sid="chambal", name="Chambal ravines (nearby)", teaser="Ethical boat", lat=26.45, lng=77.15, img=img("keoladeo"), alt="Chambal belt", p1="Licensed boats only.", p2="Gharial habitat — silence.", best="October–March mornings.", vsum="Operator schedules.", vsrc="official"),
    )

    R(
        "kota",
        dict(sid="garh", name="Garh Palace & museums", teaser="Chambal riverside", lat=25.182, lng=75.835, img=img("udaipur_cp"), alt="Kota Garh palace", p1="Hadoti schools of painting — allow 90 minutes.", p2="Student-town traffic.", best="October–March · 10 AM–4 PM.", vsum="Museum typical Rajasthan week.", vsrc="community"),
        dict(sid="chambal", name="Chambal gardens & ghats", teaser="River walks", lat=25.195, lng=75.85, img=img("pichola"), alt="Chambal river Kota", p1="Evening breezes — crocodile habitat off-limits casual swim.", p2="Boat only licensed.", best="October–March evenings.", vsum="Public ghats — no single ticket.", vsrc="community"),
        dict(sid="seven", name="Seven Wonders Park", teaser="Family icons", lat=25.2, lng=75.82, img=img("chand"), alt="Kota park", p1="Evening lights popular.", p2="Weekends crowded.", best="October–March · 4–7 PM.", vsum="Ticketed evening hours typical.", vsrc="community"),
        dict(sid="bundi", name="Bundi day trip", teaser="40 km Hadoti", lat=25.441, lng=75.64, img=img("bundi_step"), alt="Bundi fort", p1="Half-day add-on from Kota.", p2="Start early to beat heat.", best="October–March.", vsum="Bundi sites daytime.", vsrc="community"),
    )

    R(
        "nagaur",
        dict(sid="ahichhatragarh", name="Ahichhatragarh Fort", teaser="Deep walls · sound & light", lat=27.2, lng=73.75, img=img("chittor"), alt="Nagaur fort walls", p1="Restored palaces — cattle fair week packed.", p2="January fair — book months ahead.", best="October–March; fair season peak.", vsum="Fort ticket daytime; events seasonal.", vsrc="community"),
        dict(sid="sufi", name="Sufi shrine circuits", teaser="Desert devotion", lat=27.195, lng=73.745, img=img("jaswant"), alt="Rajasthan shrine", p1="Rural pilgrims — respectful dress.", p2="Thursday evenings busy.", best="October–March evenings.", vsum="Shrine hours vary.", vsrc="community"),
        dict(sid="fair", name="Ramdevra cattle fair belt", teaser="Livestock + culture", lat=27.22, lng=73.73, img=img("clock"), alt="Desert fair ground", p1="Dust and sun — mask and hat.", p2="Cash economy — ATMs limited.", best="Fair dates January–February.", vsum="Fair published schedule.", vsrc="community"),
    )

    R(
        "pali",
        dict(sid="ranakpur", name="Ranakpur Jain Temple", teaser="Marble pillars", lat=25.12, lng=73.47, img=img("ranakpur"), alt="Ranakpur Jain temple", p1="No leather; modest dress; midday tourist closure.", p2="Pali district’s global icon.", best="October–March · 9–11 AM.", vsum="Temple open slots — check noon closure.", vsrc="official"),
        dict(sid="jawai", name="Jawai leopard belt (nearby)", teaser="Granite hills", lat=25.08, lng=73.38, img=img("sariska"), alt="Jawai landscape", p1="Ethical camps — no baiting.", p2="Drives dawn/dusk.", best="October–March.", vsum="Camp schedules.", vsrc="community"),
        dict(sid="marble", name="Pali marble yards", teaser="Sculpture workshops", lat=25.77, lng=73.33, img=img("jaswant"), alt="Marble yard Rajasthan", p1="Industrial tourism — safety first.", p2="Wholesale focus — retail varies.", best="October–March mornings.", vsum="By appointment at yards.", vsrc="community"),
    )

    R(
        "pratapgarh",
        dict(sid="hills", name="Forest hills & dams", teaser="Tribal belt", lat=24.03, lng=74.78, img=img("kumbhalgarh"), alt="Southern Rajasthan hills", p1="Monsoon landslide risk — check roads.", p2="Adivasi haats — ask consent.", best="October–March; monsoon scenic.", vsum="Outdoor — daytime.", vsrc="community"),
        dict(sid="orchard", name="Orchards & catchments", teaser="Monsoon green", lat=24.08, lng=74.72, img=img("pichola"), alt="Reservoir Rajasthan", p1="Photography from public paths only.", p2="Carry rain gear July–September.", best="Monsoon & winter.", vsum="No fixed gates.", vsrc="community"),
        dict(sid="town", name="Pratapgarh town core", teaser="District HQ", lat=24.03, lng=74.78, img=img("clock"), alt="Small town Rajasthan", p1="Services base for interior loops.", p2="Limited luxury stays — plan ahead.", best="Year-round; avoid summer noon.", vsum="Town daytime.", vsrc="community"),
    )

    R(
        "rajsamand",
        dict(sid="kumbhalgarh", name="Kumbhalgarh Fort & wall", teaser="Longest wall hike", lat=25.15, lng=73.58, img=img("kumbhalgarh"), alt="Kumbhalgarh fort", p1="Wall walk needs fitness — water.", p2="Sound-and-light winter evenings.", best="October–March · mornings.", vsum="ASI hours ~9–5 typical.", vsrc="official"),
        dict(sid="rajsamand-lake", name="Rajsamand Lake embankment", teaser="Marble pavilions", lat=25.07, lng=74.02, img=img("pichola"), alt="Rajsamand lake", p1="Seventeenth-century embankment — sunset walks.", p2="Wedding traffic near Udaipur.", best="October–March evenings.", vsum="Open waterfront.", vsrc="community"),
        dict(sid="nathdwara", name="Nathdwara (Shrinathji)", teaser="Vaishnav pilgrimage", lat=24.93, lng=73.82, img=img("jaswant"), alt="Nathdwara temple town", p1="Darshan queues — mobile rules strict.", p2="Peak festivals — book rooms.", best="October–March; festival calendar.", vsum="Temple schedule at office.", vsrc="community"),
        dict(sid="haldi", name="Haldighati & museum (day trip)", teaser="Cavalry memory", lat=24.7, lng=73.65, img=img("vijay"), alt="Haldighati landscape", p1="Interpretation centre — midday heat.", p2="Combine with Kumbhalgarh routing.", best="October–March morning.", vsum="Museum hours daytime.", vsrc="community"),
    )

    R(
        "sawai-madhopur",
        dict(sid="fort", name="Ranthambhore Fort", teaser="Forest fort · Trinetra", lat=26.0175, lng=76.455, img=img("ranth"), alt="Ranthambhore Fort", p1="Inside park rules — tie to safari booking.", p2="Wildlife priority.", best="October–June with safari.", vsum="Access via park permit only.", vsrc="official"),
        dict(sid="safari", name="Ranthambhore NP safaris", teaser="Tiger landscape", lat=26.017, lng=76.5, img=img("ranth"), alt="Ranthambhore forest", p1="Official online booking — zones rotate.", p2="Silence in vehicle.", best="October–March dawn.", vsum="Seasonal safari windows.", vsrc="official"),
        dict(sid="town", name="Sawai Madhopur town", teaser="Junction services", lat=26.012, lng=76.355, img=img("clock"), alt="Sawai Madhopur", p1="Supplies and guides — avoid touts.", p2="Fog delays trains winter.", best="Year-round base; peak Nov–Mar.", vsum="Town always open.", vsrc="community"),
    )

    R(
        "sikar",
        dict(sid="laxmangarh", name="Laxmangarh fort (town silhouette)", teaser="Shekhawati ridge", lat=27.82, lng=75.03, img=img("laxmangarh"), alt="Laxmangarh fort", p1="Partially private — views from lanes.", p2="Combine with Mandawa loop.", best="October–March · 9–11 AM.", vsum="Exterior anytime.", vsrc="community"),
        dict(sid="haveli", name="Fathepur / Ramgarh havelis", teaser="Fresco loops", lat=28.3, lng=75.15, img=img("mandore"), alt="Shekhawati haveli", p1="Painted towns — knock for interiors.", p2="Weekend Delhi traffic.", best="October–March.", vsum="Daylight walks.", vsrc="community"),
        dict(sid="khatushyam", name="Khatu Shyamji (pilgrimage)", teaser="Krishna devotion", lat=27.52, lng=75.4, img=img("jaswant"), alt="Rajasthan pilgrimage shrine", p1="Huge festival peaks — plan parking.", p2="Highway approach busy.", best="Winter festivals; weekdays calmer.", vsum="Temple office hours.", vsrc="community"),
    )

    R(
        "sirohi",
        dict(sid="dilwara", name="Dilwara Jain Temples", teaser="Marble carving · Mount Abu", lat=24.59, lng=72.72, img=img("ranakpur"), alt="Marble temple Mount Abu region", p1="No leather; photography restricted; midday tourist closure.", p2="Cooler than plains — woollens winter.", best="March–June & October–February.", vsum="Open mornings for tourists — check closure.", vsrc="official"),
        dict(sid="nakki", name="Nakki Lake", teaser="Boating · sunset", lat=24.59, lng=72.71, img=img("pichola"), alt="Nakki Lake Mount Abu", p1="Evening crowds — boating seasonal.", p2="Monsoon mist romantic.", best="March–June; September–November.", vsum="Boat counters daytime–dusk.", vsrc="community"),
        dict(sid="sanctuary", name="Mount Abu Wildlife Sanctuary", teaser="Sloth bear habitat", lat=24.65, lng=72.7, img=img("sariska"), alt="Abu sanctuary forest", p1="Drives with permits — no feeding.", p2="Leopard shy — ethical expectations.", best="October–March mornings.", vsum="Forest timings by permit.", vsrc="official"),
    )

    R(
        "sri-ganganagar",
        dict(sid="canal", name="Indira Gandhi Canal headworks area", teaser="Green grid", lat=29.92, lng=73.88, img=img("kalibangan"), alt="Irrigated fields Ganganagar", p1="Agrarian landscapes — respect farms.", p2="Summer extreme heat.", best="October–March; winter fog caution.", vsum="Open countryside.", vsrc="community"),
        dict(sid="town", name="Sri Ganganagar planned town", teaser="Grid avenues", lat=29.92, lng=73.88, img=img("clock"), alt="Canal town Rajasthan", p1="Cold waves January — layers.", p2="Punjab-border cuisine blend.", best="Winter days; avoid summer noon.", vsum="Town open.", vsrc="community"),
        dict(sid="border", name="Border belt drives", teaser="Indo-Pak horizon", lat=30.0, lng=74.0, img=img("kalibangan"), alt="Northern plains Rajasthan", p1="ID checks possible — carry documents.", p2="Don’t stray near restricted areas.", best="Daylight only.", vsum="Roads 24/7 — sights daytime.", vsrc="community"),
    )

    R(
        "tonk",
        dict(sid="sunehri", name="Sunehri Kothi", teaser="Nawabi gilt", lat=26.17, lng=75.79, img=img("sunehri"), alt="Sunehri Kothi Tonk", p1="ASI monument — confirm opening hours.", p2="Pair with old city lanes.", best="October–March mornings.", vsum="Ticketed hours ~10–5 typical.", vsrc="official"),
        dict(sid="old", name="Old Tonk bazaars", teaser="Nawabi lanes", lat=26.165, lng=75.785, img=img("clock"), alt="Tonk bazaar", p1="Ramadan evenings busy — respectful noise.", p2="Heritage homes private.", best="October–March evenings.", vsum="Markets till ~9 PM.", vsrc="community"),
        dict(sid="bisal", name="Bisaldeo temples (nearby)", teaser="Shaiva sites", lat=26.35, lng=75.45, img=img("jaswant"), alt="Temple Tonk region", p1="Rural approach roads — monsoon care.", p2="Combine if routing Jaipur–Kota.", best="October–March.", vsum="Temple hours vary.", vsrc="community"),
    )

    for slug, rows in rest:
        add_city(slug, rows)

    # Merge blocks from first cities + rest
    out = []
    out.append(
        """/**
 * Famous-place accordions for all cities except Ajmer & Alwar (see cityFamousPlaces.ts).
 * Images: Wikimedia Commons. Hours: confirm at gate.
 */
import type { FamousPlace } from '@/data/cityFamousPlaces.types'

export const REST_FAMOUS_BY_SLUG: Record<string, FamousPlace[]> = {
"""
    )
    out.append("\n".join(blocks))
    out.append("}\n")

    path = "src/data/cityFamousPlacesRest.ts"
    with open(path, "w", encoding="utf-8") as f:
        f.write("".join(out))
    print("Wrote", path, "cities:", 3 + len(rest))


if __name__ == "__main__":
    main()
