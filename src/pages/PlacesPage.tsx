import { useEffect, useMemo, useState } from 'react'
import { Link, useSearchParams } from 'react-router-dom'
import { Section } from '@/components/ui/Section'
import { attractions } from '@/data/attractions'
import { cities } from '@/data/cities'
import type { AttractionCategory } from '@/types'
import { cn } from '@/lib/cn'
import '@/pages/WeatherPage.css'
import '@/components/features/CityHistoryAccordion.css'
import './PlacesPage.css'

const CATEGORY_LABELS: Record<AttractionCategory, string> = {
  fort: 'Fort',
  palace: 'Palace',
  temple: 'Temple',
  lake: 'Lake',
  market: 'Market',
  museum: 'Museum',
}

function cityIdFromSearch(searchParams: URLSearchParams): string {
  const raw = searchParams.get('city')
  if (!raw || raw === 'all') return 'all'
  return cities.some((c) => c.id === raw) ? raw : 'all'
}

function CalendarGlyph() {
  return (
    <svg className="weather-page__acc-icon places-acc__icon" viewBox="0 0 24 24" aria-hidden>
      <path
        fill="none"
        stroke="currentColor"
        strokeWidth="1.75"
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M7 3v3M17 3v3M4 10h16M6 3h12a2 2 0 0 1 2 2v15a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2z"
      />
    </svg>
  )
}

export function PlacesPage() {
  const [searchParams] = useSearchParams()
  const [cityId, setCityId] = useState<string>(() => cityIdFromSearch(searchParams))
  const [openId, setOpenId] = useState<string | null>(null)

  useEffect(() => {
    setCityId(cityIdFromSearch(searchParams))
  }, [searchParams])

  useEffect(() => {
    setOpenId(null)
  }, [cityId])

  const filtered = useMemo(() => {
    if (cityId === 'all') return attractions
    return attractions.filter((a) => a.cityId === cityId)
  }, [cityId])

  const toggleRow = (id: string) => {
    setOpenId((prev) => (prev === id ? null : id))
  }

  return (
    <Section
      eyebrow="Dekho"
      title="Places & monuments"
      lead="Top 100 curated spots across Rajasthan — tap a row to open details; only one stays open at a time."
      spacing="hero"
    >
      <p className="places-meta" role="status">
        Showing <strong>{filtered.length}</strong> of {attractions.length} curated places
        {cityId !== 'all' ? ` · ${cities.find((c) => c.id === cityId)?.name ?? ''}` : ''}
      </p>

      <div className="places-filter">
        <span className="places-filter__label" id="places-city-label">
          City
        </span>
        <div className="places-chips" role="group" aria-labelledby="places-city-label">
          <button
            type="button"
            className={`places-chip${cityId === 'all' ? ' places-chip--on' : ''}`}
            onClick={() => setCityId('all')}
          >
            All
          </button>
          {cities.map((c) => (
            <button
              key={c.id}
              type="button"
              className={`places-chip${cityId === c.id ? ' places-chip--on' : ''}`}
              onClick={() => setCityId(c.id)}
            >
              {c.name}
            </button>
          ))}
        </div>
      </div>

      <ul className="places-acc-list">
        {filtered.map((a, index) => {
          const city = cities.find((c) => c.id === a.cityId)
          const isOpen = openId === a.id
          const triggerId = `place-acc-${a.id}`
          const panelId = `place-panel-${a.id}`

          return (
            <li
              key={a.id}
              className={cn('places-acc__block', index > 0 && 'weather-page__acc-block--spaced')}
            >
              {index > 0 ? <div className="weather-page__acc-rule" aria-hidden /> : null}
              <button
                type="button"
                id={triggerId}
                className={cn('weather-page__acc-trigger places-acc__trigger', isOpen && 'weather-page__acc-trigger--open')}
                aria-expanded={isOpen}
                aria-controls={panelId}
                onClick={() => toggleRow(a.id)}
              >
                <span className="weather-page__acc-trigger-main">
                  <CalendarGlyph />
                  <span className="weather-page__acc-title-wrap">
                    <span className="city-history__eyebrow">
                      {CATEGORY_LABELS[a.category]}
                      {city ? ` · ${city.name}` : ''}
                    </span>
                    <span className="weather-page__acc-title">{a.name}</span>
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
                  <div className="weather-page__acc-body places-acc__body">
                    <p className="places-acc__text">{a.shortDescription}</p>
                    <div className="places-acc__tags">
                      {a.tags.map((t) => (
                        <span key={t} className="places-acc__tag">
                          {t}
                        </span>
                      ))}
                    </div>
                    {city ? (
                      <Link className="places-acc__link" to={`/city/${city.slug}`}>
                        Open {city.name} city guide
                      </Link>
                    ) : null}
                  </div>
                </div>
              </div>
            </li>
          )
        })}
      </ul>
    </Section>
  )
}
