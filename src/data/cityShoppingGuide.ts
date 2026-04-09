import { getCityBySlug } from '@/data/cities'
import type { City } from '@/types'
import { buildGenericCityShoppingGuide } from '@/data/cityShoppingGenericBundles'

export type ShoppingKind = 'local-markets' | 'handicrafts' | 'souvenirs' | 'shopping-streets'

export type ShoppingSpot = {
  id: string
  name: string
  area: string
  typeTag: string
  priceBand: string
  hours: string
  addressHint: string
  phone?: string
  website?: string
  mapUrl: string
  reviewsUrl: string
  bestBuys: string[]
  tips: string[]
}

export type ShoppingGuideBundle = {
  title: string
  eyebrow: string
  lead: string
  problem: string[]
  solution: string[]
  why: string[]
  quickTiles: Array<{ label: string; value: string }>
  spotsTitle: string
  spotsLead: string
  spots: ShoppingSpot[]
}

type CityShoppingGuide = Record<ShoppingKind, ShoppingGuideBundle>

const AJMER_SHOPPING_GUIDE: CityShoppingGuide = {
  'local-markets': {
    title: 'Local markets',
    eyebrow: 'Shopping',
    lead:
      'Ajmer local markets are vibrant and value-rich, but first-time tourists need a clear map of what to buy where, and how to bargain smartly.',
    problem: [
      'Tourists visit random lanes and miss the best value pockets.',
      'Price anchoring confusion leads to overpaying in busy zones.',
      'No practical guidance on market timing and crowd-safe flow.',
    ],
    solution: [
      'Shortlisted market clusters with map and review links.',
      'Price-band orientation + practical bargaining cues.',
      'What to buy from each zone so decisions are faster.',
    ],
    why: ['Local market shopping is part of Rajasthan identity.', 'Clear guidance converts browsing into confident spending.'],
    quickTiles: [
      { label: 'Best time', value: 'Late afternoon to evening' },
      { label: 'Budget', value: 'Low to medium' },
      { label: 'Skill', value: 'Polite bargaining' },
      { label: 'Rule', value: 'Compare 2-3 shops first' },
    ],
    spotsTitle: 'Market clusters (Ajmer)',
    spotsLead: 'Use this shortlist to plan your shopping route efficiently.',
    spots: [
      {
        id: 'lm-dargah-bazar',
        name: 'Dargah Bazar market lanes',
        area: 'Dargah zone',
        typeTag: 'Traditional mixed market',
        priceBand: 'INR 100-3000 (item dependent)',
        hours: 'Typically 10:30 AM-10:00 PM',
        addressHint: 'Dargah Bazar, Ajmer',
        mapUrl: 'https://www.google.com/maps/search/?api=1&query=Dargah%20Bazar%20Ajmer',
        reviewsUrl: 'https://www.google.com/maps/search/?api=1&query=Dargah%20Bazar%20Ajmer%20reviews',
        bestBuys: ['Attar/perfume oils', 'Caps/chadars', 'Local snacks and sweets'],
        tips: ['Keep cash + UPI both', 'Cross-check price at two shops before final buy'],
      },
      {
        id: 'lm-naya-bazar',
        name: 'Naya Bazar retail belt',
        area: 'Old city',
        typeTag: 'General shopping strip',
        priceBand: 'INR 150-5000',
        hours: 'Approx 10:00 AM-9:30 PM',
        addressHint: 'Naya Bazar, Ajmer',
        mapUrl: 'https://www.google.com/maps/search/?api=1&query=Naya%20Bazar%20Ajmer',
        reviewsUrl: 'https://www.google.com/maps/search/?api=1&query=Naya%20Bazar%20Ajmer%20shopping%20reviews',
        bestBuys: ['Textiles', 'Household utility items', 'Budget fashion'],
        tips: ['Afternoon is less crowded than evening', 'Ask final price including any packing charge'],
      },
      {
        id: 'lm-madar-gate',
        name: 'Madar Gate market',
        area: 'Madar Gate',
        typeTag: 'Footfall-heavy local market',
        priceBand: 'INR 100-3500',
        hours: 'Typically 11:00 AM-9:00 PM',
        addressHint: 'Madar Gate, Ajmer',
        mapUrl: 'https://www.google.com/maps/search/?api=1&query=Madar%20Gate%20Ajmer%20market',
        reviewsUrl: 'https://www.google.com/maps/search/?api=1&query=Madar%20Gate%20Ajmer%20reviews',
        bestBuys: ['Daily wear and accessories', 'Street snacks', 'Giftables'],
        tips: ['Keep bag zipped in dense crowd', 'Prefer known stores for higher-value items'],
      },
    ],
  },
  handicrafts: {
    title: 'Handicrafts',
    eyebrow: 'Shopping',
    lead:
      'Handicraft shopping is where authenticity matters most. This guide helps you separate machine-made replicas from artisan-grade pieces.',
    problem: [
      'Tourists often cannot identify genuine handwork.',
      'Craft stories and material details are rarely explained clearly.',
      'Pricing varies heavily without quality benchmarks.',
    ],
    solution: [
      'Handicraft-focused shops/areas with quality checks.',
      'Quick authenticity cues before payment.',
      'Gift vs collector buying guidance by budget level.',
    ],
    why: ['Handicrafts represent local heritage and livelihood.', 'Buying authentic craft improves both value and memory.'],
    quickTiles: [
      { label: 'Best buys', value: 'Textiles / leather / decor' },
      { label: 'Quality check', value: 'Hand-finish + stitch detail' },
      { label: 'Budget', value: 'Medium to premium' },
      { label: 'Rule', value: 'Ask material origin' },
    ],
    spotsTitle: 'Handicraft shopping picks',
    spotsLead: 'Use these zones and verify craftsmanship before checkout.',
    spots: [
      {
        id: 'hc-rajasthali',
        name: 'Rajasthali (state emporium route)',
        area: 'Ajmer city core',
        typeTag: 'Government-backed craft retail',
        priceBand: 'Fixed-price medium to premium',
        hours: 'Typically 10:00 AM-8:00 PM',
        addressHint: 'Search nearest Rajasthali/empanelled craft outlet in Ajmer',
        mapUrl: 'https://www.google.com/maps/search/?api=1&query=Rajasthali%20Ajmer',
        reviewsUrl: 'https://www.google.com/maps/search/?api=1&query=Rajasthali%20Ajmer%20reviews',
        bestBuys: ['Block-print textiles', 'Blue pottery style decor', 'Leather craft items'],
        tips: ['Good for authenticity assurance', 'Request invoice with item description'],
      },
      {
        id: 'hc-dargah-craft',
        name: 'Dargah side handicraft stores',
        area: 'Dargah Bazar lanes',
        typeTag: 'Independent craft sellers',
        priceBand: 'INR 250-8000',
        hours: '11:00 AM-10:00 PM (varies)',
        addressHint: 'Dargah market interior lanes',
        mapUrl: 'https://www.google.com/maps/search/?api=1&query=Dargah%20Bazar%20Ajmer%20handicrafts',
        reviewsUrl: 'https://www.google.com/maps/search/?api=1&query=Ajmer%20handicrafts%20reviews',
        bestBuys: ['Decor metalware', 'Embroidery work', 'Prayer-linked artisanal items'],
        tips: ['Inspect finish quality in daylight if possible', 'Negotiate politely but avoid unrealistic offers'],
      },
      {
        id: 'hc-pushkar-crafts',
        name: 'Pushkar craft strip (near Ajmer)',
        area: 'Pushkar market',
        typeTag: 'Tourist-craft cluster',
        priceBand: 'INR 300-12000',
        hours: '10:30 AM-9:30 PM',
        addressHint: 'Pushkar main market lanes',
        mapUrl: 'https://www.google.com/maps/search/?api=1&query=Pushkar%20handicrafts',
        reviewsUrl: 'https://www.google.com/maps/search/?api=1&query=Pushkar%20handicrafts%20reviews',
        bestBuys: ['Boho textiles', 'Handmade jewelry', 'Wall hangings'],
        tips: ['Great variety but compare across shops', 'Ask if color-fast and travel-safe packed'],
      },
    ],
  },
  souvenirs: {
    title: 'Souvenirs',
    eyebrow: 'Shopping',
    lead:
      'Souvenir buying should be meaningful and easy to carry. This section helps you pick practical keepsakes without tourist-trap pricing.',
    problem: [
      'Visitors buy generic items with low local relevance.',
      'Poor packing causes breakage during onward travel.',
      'Last-minute shopping leads to rushed, overpriced purchases.',
    ],
    solution: [
      'Souvenir-first shortlist by portability and authenticity.',
      'Packing and quantity-buy tips to avoid damage and overpaying.',
      'Best zones for gift shopping near major movement routes.',
    ],
    why: ['Souvenirs are emotional takeaways from the trip.', 'Well-guided buying improves satisfaction and sharing.'],
    quickTiles: [
      { label: 'Best for', value: 'Gifts + memory keepsakes' },
      { label: 'Carry ease', value: 'Light-medium' },
      { label: 'Budget', value: 'INR 100+' },
      { label: 'Tip', value: 'Ask packing quality' },
    ],
    spotsTitle: 'Souvenir-focused shopping points',
    spotsLead: 'Pick based on gift type, budget, and carry convenience.',
    spots: [
      {
        id: 'sv-dargah-gifts',
        name: 'Dargah gift and devotional shops',
        area: 'Dargah Bazar',
        typeTag: 'Religious + cultural souvenirs',
        priceBand: 'INR 80-2500',
        hours: '10:00 AM-10:00 PM',
        addressHint: 'Near Dargah approach market',
        mapUrl: 'https://www.google.com/maps/search/?api=1&query=Dargah%20Bazar%20souvenir%20shops',
        reviewsUrl: 'https://www.google.com/maps/search/?api=1&query=Dargah%20Bazar%20gift%20shops%20reviews',
        bestBuys: ['Prayer beads', 'Mini decor pieces', 'Perfume bottles'],
        tips: ['Buy fragile glass items only with layered packing'],
      },
      {
        id: 'sv-city-mixed-gifts',
        name: 'City mixed gift stores',
        area: 'Civil Lines / main road pockets',
        typeTag: 'General souvenir stores',
        priceBand: 'INR 150-4000',
        hours: '11:00 AM-9:30 PM',
        addressHint: 'Civil Lines and central Ajmer markets',
        mapUrl: 'https://www.google.com/maps/search/?api=1&query=Ajmer%20souvenir%20shop',
        reviewsUrl: 'https://www.google.com/maps/search/?api=1&query=Ajmer%20souvenir%20shop%20reviews',
        bestBuys: ['Fridge magnets', 'Mini craft sets', 'Packaged local snacks'],
        tips: ['Good option for one-stop gift bulk purchase'],
      },
      {
        id: 'sv-pushkar-keepsakes',
        name: 'Pushkar keepsake stores',
        area: 'Pushkar town market',
        typeTag: 'Tourist keepsake strip',
        priceBand: 'INR 120-4500',
        hours: '10:30 AM-10:00 PM',
        addressHint: 'Pushkar market lanes',
        mapUrl: 'https://www.google.com/maps/search/?api=1&query=Pushkar%20souvenir%20shops',
        reviewsUrl: 'https://www.google.com/maps/search/?api=1&query=Pushkar%20souvenir%20reviews',
        bestBuys: ['Bohemian accessories', 'Printed diaries', 'Temple-town themed gifts'],
        tips: ['Evening vibe is great but crowded; morning is calmer'],
      },
    ],
  },
  'shopping-streets': {
    title: 'Shopping streets',
    eyebrow: 'Shopping',
    lead:
      'Street-wise shopping plans save time and make your route efficient. This guide maps key walkable shopping belts around Ajmer.',
    problem: [
      'Travellers waste time moving randomly between disconnected markets.',
      'No clear idea which street suits what shopping intent.',
      'Night crowd and traffic make unplanned movement stressful.',
    ],
    solution: [
      'Street-level shopping routes with type and spend cues.',
      'When-to-visit guidance by crowd profile.',
      'Practical movement tips for family, solo, and quick-buy trips.',
    ],
    why: ['Smart routes mean more finds in less time.', 'Better movement planning reduces fatigue and confusion.'],
    quickTiles: [
      { label: 'Best use', value: 'Route-based shopping' },
      { label: 'Mode', value: 'Walk + short auto hops' },
      { label: 'Peak', value: '6-9 PM' },
      { label: 'Rule', value: 'Plan by category first' },
    ],
    spotsTitle: 'Top shopping streets (Ajmer region)',
    spotsLead: 'Pick one or two belts per session for better coverage.',
    spots: [
      {
        id: 'ss-dargah-street',
        name: 'Dargah Bazar street network',
        area: 'Old city',
        typeTag: 'Dense traditional shopping street',
        priceBand: 'INR 100-5000',
        hours: '10:30 AM-10:00 PM',
        addressHint: 'Dargah approach lanes, Ajmer',
        mapUrl: 'https://www.google.com/maps/search/?api=1&query=Dargah%20Bazar%20street%20Ajmer',
        reviewsUrl: 'https://www.google.com/maps/search/?api=1&query=Dargah%20Bazar%20street%20reviews',
        bestBuys: ['Religious items', 'Local eats', 'Small gifts'],
        tips: ['Walk-friendly but dense; avoid heavy luggage while browsing'],
      },
      {
        id: 'ss-madar-link',
        name: 'Madar Gate commercial stretch',
        area: 'Madar Gate',
        typeTag: 'Street retail corridor',
        priceBand: 'INR 120-4500',
        hours: '11:00 AM-9:30 PM',
        addressHint: 'Madar Gate main lanes',
        mapUrl: 'https://www.google.com/maps/search/?api=1&query=Madar%20Gate%20Ajmer%20shopping%20street',
        reviewsUrl: 'https://www.google.com/maps/search/?api=1&query=Madar%20Gate%20Ajmer%20shopping%20reviews',
        bestBuys: ['Fashion basics', 'Accessories', 'Daily retail picks'],
        tips: ['Good for mixed shopping in one pass'],
      },
      {
        id: 'ss-pushkar-main',
        name: 'Pushkar market main street',
        area: 'Pushkar',
        typeTag: 'Tourist shopping promenade',
        priceBand: 'INR 150-9000',
        hours: '10:00 AM-10:00 PM',
        addressHint: 'Pushkar main market road',
        mapUrl: 'https://www.google.com/maps/search/?api=1&query=Pushkar%20main%20market',
        reviewsUrl: 'https://www.google.com/maps/search/?api=1&query=Pushkar%20market%20reviews',
        bestBuys: ['Textiles', 'Silver-style jewelry', 'Boho decor'],
        tips: ['Best combined with cafe break + sunset visit plan'],
      },
    ],
  },
}

type ShoppingCtx = Pick<City, 'name' | 'slug' | 'region'>

export function getCityShoppingGuide(slug: string, kind: ShoppingKind): ShoppingGuideBundle {
  if (slug === 'ajmer') return AJMER_SHOPPING_GUIDE[kind]
  const city = getCityBySlug(slug)
  const ctx: ShoppingCtx = city
    ? { name: city.name, slug: city.slug, region: city.region }
    : {
        name: slug
          .split('-')
          .map((w) => w.charAt(0).toUpperCase() + w.slice(1))
          .join(' '),
        slug,
        region: 'Rajasthan',
      }
  return buildGenericCityShoppingGuide(ctx)[kind]
}
