import { useCallback, useEffect, useMemo, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import { Button } from '@/components/ui/Button'
import { NightlifeVenueCard } from '@/components/features/NightlifeVenueCard'
import {
  formatApproxForTwo,
  getCityNightlifeBySlug,
  PRICE_LEVEL_HINT,
  type NightlifeVibe,
  type NightlifeVenue,
  VIBE_LABELS,
} from '@/data/cityNightlife'
import { getCityBySlug } from '@/data/cities'
import { fetchNightlifeVenues } from '@/lib/nightlifeFetch'
import { cn } from '@/lib/cn'
import '@/components/features/CityHistoryAccordion.css'
import '@/pages/WeatherPage.css'
import './CityPage.css'
import './CityNightlifePage.css'

function priceDots(level: number): string {
  return '₹'.repeat(Math.min(4, Math.max(1, level)))
}

function MoonGlyph() {
  return (
    <svg className="weather-page__acc-icon" viewBox="0 0 24 24" aria-hidden>
      <path
        fill="none"
        stroke="currentColor"
        strokeWidth="1.75"
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"
      />
    </svg>
  )
}

const VIBES: Array<{ id: 'all' | NightlifeVibe; label: string }> = [
  { id: 'all', label: 'All' },
  { id: 'aesthetic', label: 'Aesthetic' },
  { id: 'royal', label: 'Royal' },
  { id: 'cultural', label: 'Cultural' },
]

export function CityNightlifePage() {
  const { slug } = useParams()
  const city = slug ? getCityBySlug(slug) : undefined

  const bundle = useMemo(() => {
    if (!slug || !city) return undefined
    return getCityNightlifeBySlug(slug, city.name)
  }, [slug, city])

  const [vibe, setVibe] = useState<'all' | NightlifeVibe>('all')
  const [sortPrice, setSortPrice] = useState<'asc' | 'desc'>('asc')
  const [remoteVenues, setRemoteVenues] = useState<NightlifeVenue[]>([])
  const [remoteStatus, setRemoteStatus] = useState<'idle' | 'loading' | 'ready' | 'error'>('idle')
  const [remoteErr, setRemoteErr] = useState<string | null>(null)
  const [openVenueId, setOpenVenueId] = useState<string | null>(null)

  const loadRemote = useCallback(async () => {
    if (!slug) return
    setRemoteStatus('loading')
    setRemoteErr(null)
    try {
      const rows = await fetchNightlifeVenues(slug)
      setRemoteVenues(rows)
      setRemoteStatus('ready')
    } catch (e) {
      setRemoteErr(e instanceof Error ? e.message : 'Could not load live venues')
      setRemoteStatus('error')
    }
  }, [slug])

  useEffect(() => {
    loadRemote()
  }, [loadRemote])

  useEffect(() => {
    setOpenVenueId(null)
  }, [vibe, sortPrice])

  const merged = useMemo(() => {
    if (!bundle) return []
    return [...bundle.venues, ...remoteVenues]
  }, [bundle, remoteVenues])

  const filtered = useMemo(() => {
    let rows = vibe === 'all' ? merged : merged.filter((v) => v.vibe === vibe)
    rows = [...rows].sort((a, b) => {
      const av = sortPrice === 'asc' ? a.approxForTwoInr.min : a.approxForTwoInr.max
      const bv = sortPrice === 'asc' ? b.approxForTwoInr.min : b.approxForTwoInr.max
      return sortPrice === 'asc' ? av - bv : bv - av
    })
    return rows
  }, [merged, vibe, sortPrice])

  if (!city) {
    return (
      <div className="city-page city-page--app">
        <div className="city-missing">
          <h1 className="city-missing__title">City not found</h1>
          <p className="city-missing__text">We do not have a nightlife guide for that link yet.</p>
          <Button to="/cities">Back to cities</Button>
        </div>
      </div>
    )
  }

  const toggleVenue = (id: string) => {
    setOpenVenueId((prev) => (prev === id ? null : id))
  }

  if (!bundle) {
    return (
      <div className="city-page city-page--app city-nightlife-page">
        <p className="city-nightlife-page__fallback">
          Nightlife data could not be loaded for {city.name}.{' '}
          <Link to={`/city/${city.slug}`}>Open the city guide</Link>.
        </p>
      </div>
    )
  }

  return (
    <div className="city-page city-page--app city-nightlife-page">
      <header className="weather-page__intro city-page__intro">
        <p className="city-page__region">{city.region}</p>
        <h1 className="weather-page__city">{city.name}</h1>
        <p className="weather-page__sub city-nightlife-page__subtitle">Nightlife &amp; evenings</p>
      </header>

      <div className="city-nightlife-page__lead">
        <h2 className="city-nightlife-page__lead-title">{bundle.leadTitle}</h2>
        {bundle.leadParagraphs.map((p, i) => (
          <p key={i} className="city-nightlife-page__lead-para">
            {p}
          </p>
        ))}
      </div>

      <div className="city-nightlife-page__places-cta">
        <p className="city-nightlife-page__places-cta-label">Top 100 curated places</p>
        <Link className="city-nightlife-page__places-cta-link" to={`/places?city=${city.id}`}>
          {city.name}: monuments &amp; spots (same accordion list as Places)
        </Link>
        <p className="city-nightlife-page__places-cta-note">
          This screen is evening venues only — fewer rows than the full curated list.
        </p>
      </div>

      <div className="city-nightlife-page__toolbar" role="region" aria-label="Filter and sort">
        <div className="city-nightlife-page__filters">
          <p className="city-nightlife-page__toolbar-label">Look</p>
          <div className="city-nightlife-page__chips">
            {VIBES.map((v) => (
              <button
                key={v.id}
                type="button"
                className={cn('city-nightlife-page__chip', vibe === v.id && 'city-nightlife-page__chip--on')}
                onClick={() => setVibe(v.id)}
              >
                {v.id === 'all' ? v.label : VIBE_LABELS[v.id]}
              </button>
            ))}
          </div>
        </div>
        <div className="city-nightlife-page__sort">
          <label className="city-nightlife-page__toolbar-label" htmlFor="nl-sort">
            By price (for two)
          </label>
          <select
            id="nl-sort"
            className="city-nightlife-page__select"
            value={sortPrice}
            onChange={(e) => setSortPrice(e.target.value as 'asc' | 'desc')}
          >
            <option value="asc">Low to high</option>
            <option value="desc">High to low</option>
          </select>
        </div>
      </div>

      {remoteStatus === 'loading' ? (
        <p className="city-nightlife-page__remote" role="status">
          Checking live venue feed…
        </p>
      ) : null}
      {remoteStatus === 'error' ? (
        <p className="city-nightlife-page__remote city-nightlife-page__remote--err" role="alert">
          {remoteErr}{' '}
          <button type="button" className="city-nightlife-page__retry" onClick={loadRemote}>
            Retry
          </button>
        </p>
      ) : null}
      {import.meta.env.VITE_NIGHTLIFE_URL && remoteStatus === 'ready' && remoteVenues.length === 0 ? (
        <p className="city-nightlife-page__remote">No extra rows from live feed — showing curated list.</p>
      ) : null}

      <p className="city-nightlife-page__count" aria-live="polite">
        {filtered.length} evening venue{filtered.length === 1 ? '' : 's'}
        {vibe !== 'all' ? ` · ${VIBE_LABELS[vibe]}` : ''}
        <span className="city-nightlife-page__count-hint"> · tap one row; only one stays open</span>
      </p>

      <ul className="city-nightlife-page__acc-list">
        {filtered.map((v, index) => {
          const isOpen = openVenueId === v.id
          const triggerId = `nl-acc-${v.id}`
          const panelId = `nl-panel-${v.id}`
          const live = v.id.startsWith('live-')
          return (
            <li
              key={v.id}
              className={cn('city-nightlife-page__acc-block', index > 0 && 'weather-page__acc-block--spaced')}
            >
              {index > 0 ? <div className="weather-page__acc-rule" aria-hidden /> : null}
              <button
                type="button"
                id={triggerId}
                className={cn(
                  'weather-page__acc-trigger city-nightlife-page__acc-trigger',
                  isOpen && 'weather-page__acc-trigger--open',
                )}
                aria-expanded={isOpen}
                aria-controls={panelId}
                onClick={() => toggleVenue(v.id)}
              >
                <span className="weather-page__acc-trigger-main">
                  <MoonGlyph />
                  <span className="weather-page__acc-title-wrap">
                    <span className="city-history__eyebrow">{VIBE_LABELS[v.vibe]}</span>
                    <span className="weather-page__acc-title">{v.name}</span>
                    <span className="city-nightlife-page__acc-trigger-meta">
                      <span className="city-nightlife-page__acc-dots" title="Price band">
                        {priceDots(v.priceLevel)}
                      </span>
                      <span className="city-nightlife-page__acc-hint">{PRICE_LEVEL_HINT[v.priceLevel]}</span>
                      <span className="city-nightlife-page__acc-approx">{formatApproxForTwo(v)}</span>
                      {live ? <span className="city-nightlife-page__acc-live">Live feed</span> : null}
                    </span>
                  </span>
                </span>
                <span className="weather-page__acc-chevron" aria-hidden>
                  {isOpen ? '▴' : '▾'}
                </span>
              </button>
              <div
                id={panelId}
                role="region"
                aria-labelledby={triggerId}
                aria-hidden={!isOpen}
                className={cn('weather-page__acc-panel-wrap', isOpen && 'is-open')}
              >
                <div className="weather-page__acc-panel-inner">
                  <div className="city-nightlife-page__acc-card-wrap">
                    <NightlifeVenueCard venue={v} live={live} />
                  </div>
                </div>
              </div>
            </li>
          )
        })}
      </ul>

      <div className="city-nightlife-page__disclaimer">
        {bundle.disclaimer.map((p, i) => (
          <p key={i} className="city-nightlife-page__disclaimer-para">
            {p}
          </p>
        ))}
        <p className="city-nightlife-page__disclaimer-para">
          Connect a live aggregator by setting <code className="city-nightlife-page__code">VITE_NIGHTLIFE_URL</code>{' '}
          (JSON <code className="city-nightlife-page__code">{'{ venues: [...] }'}</code>) to merge BookMyShow / Zomato-style
          rows.
        </p>
      </div>

      <p className="city-nightlife-page__back">
        <Link to={`/city/${city.slug}`} className="city-nightlife-page__back-link">
          ← Back to {city.name} guide
        </Link>
      </p>
    </div>
  )
}
