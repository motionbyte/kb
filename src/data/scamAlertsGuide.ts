/**
 * Pan-Rajasthan tourist scam reference — planning aid only; verify numbers on official sites.
 */

export type HelplineEntry = {
  id: string
  label: string
  displayNumber: string
  telDigits: string
}

/** Shown at top of the scam guide */
export const SCAM_GUIDE_HELPLINES: HelplineEntry[] = [
  { id: 'emergency', label: 'Emergency (all-in-one)', displayNumber: '112', telDigits: '112' },
  { id: 'police', label: 'Police', displayNumber: '100', telDigits: '100' },
  { id: 'women', label: "Women's helpline", displayNumber: '1090', telDigits: '1090' },
  { id: 'cyber', label: 'Cyber fraud / online scams (India)', displayNumber: '1930', telDigits: '1930' },
  {
    id: 'tourism-raj',
    label: 'Rajasthan Tourism (toll-free)',
    displayNumber: '1800-180-29',
    telDigits: '1800180029',
  },
]

export type ScamItem = {
  id: string
  title: string
  /** Red flags / how you spot it */
  watchFor: string[]
  /** What to do if you’re caught in it */
  ifItHappens: string[]
  /** Prevention & safer habits */
  avoid: string[]
  /** Extra numbers or notes — not duplicate of global helplines unless city-specific */
  contactNote?: string
}

export type ScamCategory = {
  id: string
  emoji: string
  title: string
  intro?: string
  items: ScamItem[]
}

export const SCAM_ALERT_CATEGORIES: ScamCategory[] = [
  {
    id: 'transport',
    emoji: '🚕',
    title: 'Transport scams',
    intro: 'Autos, cabs, airport pickups, and rentals — negotiate or app-book before you sit.',
    items: [
      {
        id: 'taxi-meter',
        title: 'Taxi / auto overpricing & “meter kharab hai”',
        watchFor: [
          'Driver refuses meter or says it’s broken every time.',
          'Flat “tourist rate” that’s 3–5× maps estimate.',
          'No receipt or vague “package” pricing.',
        ],
        ifItHappens: [
          'Note vehicle number, route, and time; take a photo of the number plate if safe.',
          'If overcharged after ride: file complaint via traffic police / RTO app where available, or local police booth with receipt/screenshot.',
          'For app rides, use in-app support — don’t pay cash “extras” not shown in app.',
        ],
        avoid: [
          'Use Ola/Uber/Indrive where available; compare estimate before confirming.',
          'Insist on meter or agree a clear fare in writing / screenshot before starting.',
          'Use maps to call out unnecessary detours politely.',
        ],
      },
      {
        id: 'long-route',
        title: 'Long route / sightseeing detour',
        watchFor: [
          'Sudden “shortcuts” that lengthen the trip.',
          'Stops at cousin’s shop “just 2 minutes”.',
        ],
        ifItHappens: [
          'Say you’ll report to police if route isn’t corrected; share live location with someone.',
          'End ride at nearest safe point (hotel, police post) if you feel trapped.',
        ],
        avoid: [
          'Open maps with GPS on; name your drop pin aloud.',
          'Book prepaid airport/rail booths where they exist.',
        ],
      },
      {
        id: 'fake-pickup',
        title: 'Fake airport / station pickup',
        watchFor: [
          'Someone holds a sign with your name without you giving that detail.',
          '“Your hotel sent me” when you didn’t arrange transfer.',
        ],
        ifItHappens: [
          'Call hotel/host on record number before entering the car.',
          'Move to official prepaid taxi counter or app pickup zone.',
        ],
        avoid: [
          'Pre-book airport transfer via hotel or trusted app.',
          'Never follow touts inside the terminal exit.',
        ],
      },
      {
        id: 'rental-damage',
        title: 'Rental bike / car damage scam',
        watchFor: [
          'Vague checklist; old scratches not marked on sheet.',
          'Pressure to skip photos “to save time”.',
        ],
        ifItHappens: [
          'Demand written condition report; if extortion, involve local police (100) and keep rental agreement.',
          'Pay only what contract says; get receipts.',
        ],
        avoid: [
          'Video walkaround + photos of existing damage before leaving.',
          'Rent from reviewed outlets; read insurance terms.',
        ],
      },
    ],
  },
  {
    id: 'accommodation',
    emoji: '🏨',
    title: 'Accommodation scams',
    items: [
      {
        id: 'fake-booking',
        title: 'Fake booking site / payment redirect',
        watchFor: [
          'URL almost like a known brand; only phone payment.',
          'Prices far below market with pressure to pay “advance” instantly.',
        ],
        ifItHappens: [
          'If money lost online: call 1930 (cyber) and bank immediately; dispute card charge.',
          'Save URLs, screenshots, UPI ref numbers.',
        ],
        avoid: [
          'Book on official site or major OTAs; verify HTTPS and reviews.',
          'Never transfer to personal accounts named “manager”.',
        ],
        contactNote: 'Cyber helpline 1930 for fraudulent sites and UPI fraud.',
      },
      {
        id: 'hidden-charges',
        title: 'Hidden charges (AC, Wi‑Fi, tax, “resort fee”)',
        watchFor: [
          'Rate quote excludes GST or “mandatory” add-ons.',
          'AC/remote deposit not mentioned at booking.',
        ],
        ifItHappens: [
          'Ask for printed tariff; escalate to front desk manager.',
          'For wrongful charge: email OTA + card dispute if charged wrong amount.',
        ],
        avoid: [
          'Read cancellation and tax breakdown before pay.',
          'Screenshot booking confirmation with inclusions.',
        ],
      },
      {
        id: 'photo-mislead',
        title: 'Misleading photos / wrong property',
        watchFor: [
          'Same stock photos on many listings; address vague.',
        ],
        ifItHappens: [
          'Refuse check-in if property materially different; document with photos.',
          'Demand refund per platform rules; leave honest review with evidence.',
        ],
        avoid: [
          'Cross-check recent traveller photos on maps/review sites.',
          'Choose “verified” stays where possible.',
        ],
      },
      {
        id: 'no-refund',
        title: 'No-refund / fake cancellation policy',
        watchFor: [
          'Verbal “full refund” not in email.',
          'Host asks to cancel off-platform “for discount”.',
        ],
        ifItHappens: [
          'Keep all chat on platform; use official cancellation flow.',
          'Chargeback + consumer forum path for fraud.',
        ],
        avoid: [
          'Never cancel off-app to “save tax”.',
        ],
      },
    ],
  },
  {
    id: 'food',
    emoji: '🍽️',
    title: 'Food scams',
    items: [
      {
        id: 'menu-switch',
        title: 'Menu price change / duplicate menu',
        watchFor: [
          'Prices higher than board outside; “English menu” costs more.',
        ],
        ifItHappens: [
          'Photograph menu; pay what printed price says; call police if threatened.',
        ],
        avoid: [
          'Check prices before ordering; ask for bill with itemized GST.',
        ],
      },
      {
        id: 'extra-items',
        title: 'Extra items on bill / duplicate entries',
        watchFor: [
          'Unfamiliar line items, double roti count, “service” not declared.',
        ],
        ifItHappens: [
          'Ask manager to regenerate bill; pay only corrected amount.',
        ],
        avoid: [
          'Order verbally confirmed; ask for running bill on large groups.',
        ],
      },
      {
        id: 'water-overprice',
        title: 'Water bottle / packaged overpricing',
        watchFor: [
          'MRP scratched or “cooling charges” on sealed bottles.',
        ],
        ifItHappens: [
          'Refuse above MRP; note shop name for legal metrology complaint (state consumer helpline).',
        ],
        avoid: [
          'Carry reusable bottle; buy from departmental stores at printed MRP.',
        ],
      },
      {
        id: 'forced-dishes',
        title: 'Forced expensive thali / “special” dishes',
        watchFor: [
          'Items placed without order; “chef’s special” brought unasked.',
        ],
        ifItHappens: [
          'State clearly you won’t pay for unordered food; involve manager.',
        ],
        avoid: [
          'Order explicitly; say no to starters you didn’t ask for.',
        ],
      },
    ],
  },
  {
    id: 'shopping',
    emoji: '🛍️',
    title: 'Shopping scams',
    items: [
      {
        id: 'fake-handicraft',
        title: 'Fake handicrafts / fake gems & jewellery',
        watchFor: [
          '“Mine price” for “Kundan” sold in 10 minutes.',
          'Certificates typed in shop back room.',
        ],
        ifItHappens: [
          'Stop payment if still possible; 1930 for online fraud.',
          'File police report for high-value fraud with receipts.',
        ],
        avoid: [
          'Buy gems only from reputed stores; get GST bill.',
        ],
      },
      {
        id: 'govt-shop',
        title: 'Fake “government emporium” / official shop',
        watchFor: [
          'Taxi drops at unnamed “approved” outlet.',
          'Banners claiming “RTDC” without verifiable address.',
        ],
        ifItHappens: [
          'Walk out; report driver–shop nexus to tourism police where available.',
        ],
        avoid: [
          'Use Rajasthan Tourism official outlets list online.',
        ],
      },
      {
        id: 'overprice',
        title: 'Extreme overpricing',
        watchFor: [
          'No price tag; “special discount for you” after absurd quote.',
        ],
        ifItHappens: [
          'Leave; compare in 2–3 shops before any large buy.',
        ],
        avoid: [
          'Research ballpark prices; bargain calmly or skip.',
        ],
      },
      {
        id: 'shipping',
        title: 'Shipping scam — pay now, parcel never arrives',
        watchFor: [
          'Courier arranged by shop only; no tracking.',
        ],
        ifItHappens: [
          'Cyber complaint + consumer dispute; use card chargeback.',
        ],
        avoid: [
          'Use your own courier with tracking; pay on delivery when possible.',
        ],
      },
    ],
  },
  {
    id: 'guides',
    emoji: '🧑‍🏫',
    title: 'Guide scams',
    items: [
      {
        id: 'fake-guide',
        title: 'Unlicensed / fake tourist guide',
        watchFor: [
          'No ID card; pushes one shop aggressively.',
        ],
        ifItHappens: [
          'Ask for ASI / tourism board authorised guide at monument gate.',
          'Report touts to site security.',
        ],
        avoid: [
          'Hire guides from official counters only.',
        ],
      },
      {
        id: 'forced-guide',
        title: 'Forced guiding / won’t leave your group',
        watchFor: [
          'Follows without permission; demands tip for “information”.',
        ],
        ifItHappens: [
          'Firm no; walk to security; call 112 if harassment persists.',
        ],
        avoid: [
          'Don’t engage ambiguous “helpers” at gates.',
        ],
      },
      {
        id: 'fake-tickets',
        title: 'Fake / reused entry tickets',
        watchFor: [
          'Seller away from counter; QR looks photocopied.',
        ],
        ifItHappens: [
          'Buy only at official window or app; report scalpers.',
        ],
        avoid: [
          'Skip “skip the line” strangers.',
        ],
      },
    ],
  },
  {
    id: 'religious',
    emoji: '🙏',
    title: 'Religious & temple scams',
    items: [
      {
        id: 'fake-pandit',
        title: 'Fake pandit / ritual trap',
        watchFor: [
          'Rushed “pooja for family” with open-ended fees.',
        ],
        ifItHappens: [
          'Stop payment; ask temple office for authorised panda list.',
        ],
        avoid: [
          'Donate at official counters; fixed amounts on display.',
        ],
      },
      {
        id: 'prasad-paid',
        title: '“Free prasad” → paid / donation pressure',
        watchFor: [
          'Packet handed then “ dakshina” demanded loudly.',
        ],
        ifItHappens: [
          'Return item or place in hundi; walk toward crowd/security.',
        ],
        avoid: [
          'Take prasad only from official distribution.',
        ],
      },
      {
        id: 'blessing-money',
        title: 'Blessing → large cash demand',
        watchFor: [
          'Private corner of temple; photography of cash.',
        ],
        ifItHappens: [
          'Refuse; move to public area; complain at temple admin.',
        ],
        avoid: [
          'Keep donations small and at official donation boxes.',
        ],
      },
    ],
  },
  {
    id: 'experience',
    emoji: '🎭',
    title: 'Experience & activity scams',
    items: [
      {
        id: 'safari-hidden',
        title: 'Safari hidden charges (jeep / camel / desert camp)',
        watchFor: [
          'Base price excludes park fee, camera, “driver tip” mandatory.',
        ],
        ifItHappens: [
          'Get written inclusions; pay only agreed amount.',
        ],
        avoid: [
          'Book via registered operators; read reviews mentioning fees.',
        ],
      },
      {
        id: 'fake-event-tix',
        title: 'Fake event / show tickets',
        watchFor: [
          'Seller outside venue; price “half off”.',
        ],
        ifItHappens: [
          'Buy at box office or BookMyShow etc.; 1930 for UPI scams.',
        ],
        avoid: [
          'Never buy from touts.',
        ],
      },
      {
        id: 'overpriced-activity',
        title: 'Overpriced activities & packages',
        watchFor: [
          '“Only today” combo with vague duration.',
        ],
        ifItHappens: [
          'Compare with 2 operators; walk away from pressure.',
        ],
        avoid: [
          'Pre-book rated vendors; clarify per-person vs per-jeep.',
        ],
      },
    ],
  },
  {
    id: 'photo',
    emoji: '📸',
    title: 'Photo scams',
    items: [
      {
        id: 'free-photo',
        title: '“Free photo” → money demand',
        watchFor: [
          'Snake charmer, costume wallahs at forts — snap first, pay later.',
        ],
        ifItHappens: [
          'Pay nothing if no price was agreed upfront; move to security.',
        ],
        avoid: [
          'Ask price before any pose; say no to unsolicited shots.',
        ],
      },
      {
        id: 'animal-photo',
        title: 'Animal photo trap (camel, cobra, monkey)',
        watchFor: [
          'Animal placed in your hand before you consent.',
        ],
        ifItHappens: [
          'Put phone away; walk off; report cruelty to forest/wildlife line if abuse.',
        ],
        avoid: [
          'Don’t engage animal handlers at tourist spots; prefer ethical sanctuaries.',
        ],
      },
    ],
  },
  {
    id: 'party',
    emoji: '💊',
    title: 'Drug & late-night / party scams',
    items: [
      {
        id: 'drug-offer',
        title: 'Drug offering / “party invite” trap',
        watchFor: [
          'Strangers near clubs offering pills or unknown drinks.',
        ],
        ifItHappens: [
          'Refuse; leave venue; legal risk is serious — contact police if threatened.',
        ],
        avoid: [
          'Stay in groups; don’t accept open drinks from strangers.',
        ],
      },
      {
        id: 'bar-bill',
        title: 'Bar / lounge overbilling & card swap',
        watchFor: [
          'Unfamiliar shots on tab; card taken out of sight.',
        ],
        ifItHappens: [
          'Verify bill; call bank to block card if misused; police for assault.',
        ],
        avoid: [
          'Tap card yourself; check running tab.',
        ],
      },
    ],
  },
  {
    id: 'money',
    emoji: '🏦',
    title: 'Money & card scams',
    items: [
      {
        id: 'fx-fake',
        title: 'Fake currency exchange / bad rates',
        watchFor: [
          'Street “best rate” with counting tricks.',
        ],
        ifItHappens: [
          'Count again in bank light; involve police for cheating.',
        ],
        avoid: [
          'Use banks / authorised AD-II counters; compare RBI reference rate.',
        ],
      },
      {
        id: 'skim',
        title: 'Card skimming / shoulder surfing',
        watchFor: [
          'Loose ATM card slot; helper offering to “speed up” PIN.',
        ],
        ifItHappens: [
          'Block card via bank app; 1930 if OTP fraud.',
        ],
        avoid: [
          'Cover PIN; use bank ATMs inside branches when possible.',
        ],
      },
    ],
  },
  {
    id: 'psych',
    emoji: '🧠',
    title: 'Psychological & street pressure',
    items: [
      {
        id: 'fake-emergency',
        title: 'Fake emergency story (“lost wallet, need petrol”)',
        watchFor: [
          'Polished story + urgency + follow to ATM.',
        ],
        ifItHappens: [
          'Offer to call police for them — scammers usually leave.',
        ],
        avoid: [
          'No cash to strangers; donate via NGOs if you want to help.',
        ],
      },
      {
        id: 'begging-mafia',
        title: 'Begging mafia / child used for sympathy',
        watchFor: [
          'Coordinator watching from distance; same kids daily.',
        ],
        ifItHappens: [
          'Don’t incentivise organised begging; report to child helpline 1098 if exploitation suspected.',
        ],
        avoid: [
          'Support verified charities instead.',
        ],
        contactNote: 'Childline India: 1098.',
      },
    ],
  },
  {
    id: 'digital',
    emoji: '🌐',
    title: 'Digital scams',
    items: [
      {
        id: 'fake-site',
        title: 'Fake booking / phishing websites',
        watchFor: [
          'Misspelled domain; HTTP only; WhatsApp-only support.',
        ],
        ifItHappens: [
          '1930 + bank freeze; change passwords.',
        ],
        avoid: [
          'Type URLs directly; check padlock; don’t click SMS links.',
        ],
      },
      {
        id: 'fake-calls',
        title: 'Fake calls for advance / “hotel manager”',
        watchFor: [
          'Caller knows partial booking details from leaks.',
        ],
        ifItHappens: [
          'Hang up; call hotel official number from website.',
        ],
        avoid: [
          'Never share OTP/card over phone.',
        ],
      },
    ],
  },
  {
    id: 'misc',
    emoji: '🧾',
    title: 'Miscellaneous',
    items: [
      {
        id: 'toilet',
        title: 'Paid toilet overcharge / no change',
        watchFor: [
          'No rate board; “₹20” for ₹5 facility.',
        ],
        ifItHappens: [
          'Ask for receipt; complain to municipal body if gross.',
        ],
        avoid: [
          'Use mall / station facilities with posted rates.',
        ],
      },
      {
        id: 'attraction-closed',
        title: '“Attraction closed today” redirect to shop',
        watchFor: [
          'Stranger near gate contradicts official hours.',
        ],
        ifItHappens: [
          'Check Google Maps hours + official Twitter/site; walk to ticket counter.',
        ],
        avoid: [
          'Trust only notice board + counter staff.',
        ],
      },
      {
        id: 'sim-wifi',
        title: 'SIM / pocket Wi‑Fi oversell',
        watchFor: [
          'Unlimited data claims with hidden FUP.',
        ],
        ifItHappens: [
          'Return under TRAI rules where applicable; consumer forum.',
        ],
        avoid: [
          'Buy from carrier store with printed plan.',
        ],
      },
    ],
  },
]
