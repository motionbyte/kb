/**
 * Full city guide menu: sections + sub-options (shown after picking a Rajasthan city).
 * `href` maps into existing app routes where possible.
 */
export type GuideMenuCtx = { cityId: string; slug: string }

export type GuideMenuLeaf = {
  id: string
  label: string
  href: (ctx: GuideMenuCtx) => string
}

export type GuideMenuSection = {
  id: string
  icon: string
  title: string
  items: GuideMenuLeaf[]
}

const cityHub = (ctx: GuideMenuCtx) => `/city/${ctx.slug}`
const cityScams = (ctx: GuideMenuCtx) => `/city/${ctx.slug}#city-scams`
const citySafetyTips = (ctx: GuideMenuCtx) => `/city/${ctx.slug}#city-safety-tips`
const cityEtiquette = (ctx: GuideMenuCtx) => `/city/${ctx.slug}#city-etiquette`
const cityLanguageHelp = (ctx: GuideMenuCtx) => `/city/${ctx.slug}#city-language-help`
const citySimCards = (ctx: GuideMenuCtx) => `/city/${ctx.slug}#city-sim-cards`
const cityInternet = (ctx: GuideMenuCtx) => `/city/${ctx.slug}#city-internet`
const cityCurrencyExchange = (ctx: GuideMenuCtx) => `/city/${ctx.slug}#city-currency-exchange`
const cityEmergencyContacts = (ctx: GuideMenuCtx) => `/city/${ctx.slug}#city-emergency-contacts`
const cityHospitals = (ctx: GuideMenuCtx) => `/city/${ctx.slug}#city-hospitals`
const cityHotels = (ctx: GuideMenuCtx) => `/city/${ctx.slug}#city-hotels`
const cityRestaurants = (ctx: GuideMenuCtx) => `/city/${ctx.slug}#city-restaurants`
const cityStreetFood = (ctx: GuideMenuCtx) => `/city/${ctx.slug}#city-street-food`
const cityCafes = (ctx: GuideMenuCtx) => `/city/${ctx.slug}#city-cafes`
const cityFineDining = (ctx: GuideMenuCtx) => `/city/${ctx.slug}#city-fine-dining`
const cityLocalCuisine = (ctx: GuideMenuCtx) => `/city/${ctx.slug}#city-local-cuisine`
const cityHostels = (ctx: GuideMenuCtx) => `/city/${ctx.slug}#city-hostels`
const cityHomestays = (ctx: GuideMenuCtx) => `/city/${ctx.slug}#city-homestays`
const cityResorts = (ctx: GuideMenuCtx) => `/city/${ctx.slug}#city-resorts`
const cityHeritageStays = (ctx: GuideMenuCtx) => `/city/${ctx.slug}#city-heritage-stays`
const cityCamps = (ctx: GuideMenuCtx) => `/city/${ctx.slug}#city-camps`
const cityHistoricalPlaces = (ctx: GuideMenuCtx) => `/city/${ctx.slug}#city-historical-places`
const cityNaturalSpots = (ctx: GuideMenuCtx) => `/city/${ctx.slug}#city-natural-spots`
const cityReligiousPlaces = (ctx: GuideMenuCtx) => `/city/${ctx.slug}#city-religious-places`
const cityMuseums = (ctx: GuideMenuCtx) => `/city/${ctx.slug}#city-museums`
const cityHiddenGems = (ctx: GuideMenuCtx) => `/city/${ctx.slug}#city-hidden-gems`
const cityLocalTransport = (ctx: GuideMenuCtx) => `/city/${ctx.slug}#city-local-transport`
const cityCabApps = (ctx: GuideMenuCtx) => `/city/${ctx.slug}#city-cab-apps`
const cityRental = (ctx: GuideMenuCtx) => `/city/${ctx.slug}#city-rental`
const cityPublicTransport = (ctx: GuideMenuCtx) => `/city/${ctx.slug}#city-public-transport`
const cityAirportTransfers = (ctx: GuideMenuCtx) => `/city/${ctx.slug}#city-airport-transfers`
const citySafari = (ctx: GuideMenuCtx) => `/city/${ctx.slug}#city-safari`
const cityLocalMarkets = (ctx: GuideMenuCtx) => `/city/${ctx.slug}#city-local-markets`
const cityHandicrafts = (ctx: GuideMenuCtx) => `/city/${ctx.slug}#city-handicrafts`
const citySouvenirs = (ctx: GuideMenuCtx) => `/city/${ctx.slug}#city-souvenirs`
const cityShoppingStreets = (ctx: GuideMenuCtx) => `/city/${ctx.slug}#city-shopping-streets`
/** Best time + famous-place accordions (where available) */
const cityBestTimeAnchor = (ctx: GuideMenuCtx) => `/city/${ctx.slug}#city-best-places`
/** Dedicated festivals screen — top-level segment avoids router matching issues */
const cityFestivalsPath = (ctx: GuideMenuCtx) => `/festivals/${ctx.slug}`
const cityInstagramSpotsPath = (ctx: GuideMenuCtx) => `/instagram-spots/${ctx.slug}`
const citySunriseSunsetPath = (ctx: GuideMenuCtx) => `/sunrise-sunset/${ctx.slug}`
const cityDroneInfoPath = (ctx: GuideMenuCtx) => `/drone-info/${ctx.slug}`
const cityCulturalShowsPath = (ctx: GuideMenuCtx) => `/cultural-shows/${ctx.slug}`
const cityAdventureActivitiesPath = (ctx: GuideMenuCtx) => `/adventure-activities/${ctx.slug}`
const cityWorkshopsPath = (ctx: GuideMenuCtx) => `/workshops/${ctx.slug}`
const cityNightlifePath = (ctx: GuideMenuCtx) => `/nightlife/${ctx.slug}`

export const GUIDE_CITY_MENU_SECTIONS: GuideMenuSection[] = [
  {
    id: 'weather-timing',
    icon: '🌦️',
    title: 'Weather & Timing',
    items: [
      { id: 'weather-info', label: 'Weather info', href: (ctx) => `/weather/${ctx.slug}` },
      { id: 'best-time', label: 'Best time to visit', href: cityBestTimeAnchor },
      { id: 'festivals', label: 'Festivals/events', href: cityFestivalsPath },
    ],
  },
  {
    id: 'photography',
    icon: '📸',
    title: 'Photography Spots',
    items: [
      { id: 'instagram-spots', label: 'Instagram spots', href: cityInstagramSpotsPath },
      { id: 'sunrise-sunset', label: 'Sunrise/sunset points', href: citySunriseSunsetPath },
      { id: 'drone-info', label: 'Drone info', href: cityDroneInfoPath },
    ],
  },
  {
    id: 'activities',
    icon: '🎭',
    title: 'Activities & Experiences',
    items: [
      { id: 'cultural-shows', label: 'Cultural shows', href: cityCulturalShowsPath },
      { id: 'adventure', label: 'Adventure activities', href: cityAdventureActivitiesPath },
      { id: 'workshops', label: 'Workshops (Cooking/Art)', href: cityWorkshopsPath },
      { id: 'nightlife', label: 'Nightlife', href: cityNightlifePath },
    ],
  },
  {
    id: 'safety',
    icon: '🧾',
    title: 'Local Tips & Safety',
    items: [
      { id: 'scams', label: 'Scam alerts', href: cityScams },
      { id: 'safety-tips', label: 'Safety tips', href: citySafetyTips },
      { id: 'etiquette', label: 'Local etiquette', href: cityEtiquette },
      { id: 'language', label: 'Language help', href: cityLanguageHelp },
    ],
  },
  {
    id: 'practical',
    icon: '📶',
    title: 'Practical Info',
    items: [
      { id: 'sim', label: 'SIM cards', href: citySimCards },
      { id: 'internet', label: 'Internet', href: cityInternet },
      { id: 'currency', label: 'Currency exchange', href: cityCurrencyExchange },
      { id: 'emergency', label: 'Emergency contacts', href: cityEmergencyContacts },
      { id: 'hospitals', label: 'Hospitals', href: cityHospitals },
    ],
  },
  {
    id: 'accommodation',
    icon: '🏛️',
    title: 'Accommodation',
    items: [
      { id: 'hotels', label: 'Hotels', href: cityHotels },
      { id: 'hostels', label: 'Hostels', href: cityHostels },
      { id: 'homestays', label: 'Homestays', href: cityHomestays },
      { id: 'resorts', label: 'Resorts', href: cityResorts },
      { id: 'heritage-stays', label: 'Heritage stays (Haveli/Fort)', href: cityHeritageStays },
      { id: 'camps', label: 'Camps (Desert/Adventure)', href: cityCamps },
    ],
  },
  {
    id: 'food-dining',
    icon: '🍽️',
    title: 'Food & Dining',
    items: [
      { id: 'restaurants-list', label: 'Restaurants', href: cityRestaurants },
      { id: 'street-food', label: 'Street food', href: cityStreetFood },
      { id: 'cafes', label: 'Cafes', href: cityCafes },
      { id: 'fine-dining', label: 'Fine dining', href: cityFineDining },
      { id: 'local-cuisine', label: 'Local cuisine guide', href: cityLocalCuisine },
    ],
  },
  {
    id: 'sightseeing',
    icon: '📍',
    title: 'Sightseeing & Attractions',
    items: [
      { id: 'historical', label: 'Historical places', href: cityHistoricalPlaces },
      { id: 'natural', label: 'Natural spots', href: cityNaturalSpots },
      { id: 'religious', label: 'Religious places', href: cityReligiousPlaces },
      { id: 'museums', label: 'Museums', href: cityMuseums },
      { id: 'hidden-gems', label: 'Hidden gems', href: cityHiddenGems },
    ],
  },
  {
    id: 'transport',
    icon: '🚕',
    title: 'Transport & Mobility',
    items: [
      { id: 'local-transport', label: 'Local transport (Auto/Taxi)', href: cityLocalTransport },
      { id: 'cab-apps', label: 'Cab apps (Uber/Ola)', href: cityCabApps },
      { id: 'rental', label: 'Car/Bike rental', href: cityRental },
      { id: 'public-transport', label: 'Public transport (Bus/Train)', href: cityPublicTransport },
      { id: 'airport', label: 'Airport transfers', href: cityAirportTransfers },
      { id: 'safari', label: 'Safari (Camel/Jeep)', href: citySafari },
    ],
  },
  {
    id: 'itinerary',
    icon: '🗺️',
    title: 'Itinerary Planning',
    items: [
      { id: 'day-plans', label: 'Day-wise plans', href: cityHub },
      { id: 'budget', label: 'Budget itinerary', href: cityHub },
      { id: 'luxury', label: 'Luxury itinerary', href: cityHub },
      { id: 'route', label: 'Route planning', href: cityHub },
    ],
  },
  {
    id: 'shopping',
    icon: '🛍️',
    title: 'Shopping',
    items: [
      { id: 'markets', label: 'Local markets', href: cityLocalMarkets },
      { id: 'handicrafts', label: 'Handicrafts', href: cityHandicrafts },
      { id: 'souvenirs', label: 'Souvenirs', href: citySouvenirs },
      { id: 'shopping-streets', label: 'Shopping streets', href: cityShoppingStreets },
    ],
  },
]
