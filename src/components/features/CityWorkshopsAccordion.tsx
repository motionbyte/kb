import { useCallback, useEffect, useMemo, useState } from 'react'
import type {
  CityWorkshopsBundle,
  WorkshopCategory,
  WorkshopContact,
  WorkshopEntry,
} from '@/data/cityWorkshops'
import { PhotoSpotMapRow } from '@/components/features/PhotoSpotMapRow'
import { exclusiveAccordionToggle } from '@/lib/exclusiveAccordion'
import { cn } from '@/lib/cn'
import '@/pages/WeatherPage.css'
import './CityHistoryAccordion.css'
import './CityFestivalsAccordion.css'
import './CityCulturalShowsAccordion.css'

function CalendarGlyph() {
  return (
    <svg className="weather-page__acc-icon" viewBox="0 0 24 24" aria-hidden>
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

function BrushGlyph() {
  return (
    <svg className="city-fest__inner-icon" viewBox="0 0 24 24" aria-hidden>
      <path
        fill="none"
        stroke="currentColor"
        strokeWidth="1.75"
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M4 20l4-4M15 5l4 4M7 17l8-8a2 2 0 0 0-3-3L4 14l3 3z"
      />
    </svg>
  )
}

function ContactChip({ c }: { c: WorkshopContact }) {
  return (
    <div className="cultural-shows__contact-chip">
      <p className="cultural-shows__contact-label">{c.label}</p>
      <p className="cultural-shows__contact-role">{c.role}</p>
      <div className="cultural-shows__contact-links">
        {c.phoneDisplay && c.telDigits ? <a href={`tel:${c.telDigits}`}>{c.phoneDisplay}</a> : null}
        {c.website ? (
          <a href={c.website} target="_blank" rel="noopener noreferrer">
            Official site
          </a>
        ) : null}
      </div>
    </div>
  )
}

function WorkshopPanel({ w }: { w: WorkshopEntry }) {
  return (
    <div className="city-fest__panel">
      <div className="city-fest__block">
        <p className="city-fest__block-label">Where & how to book</p>
        <p className="city-fest__para">{w.where}</p>
      </div>
      <div className="city-fest__block">
        <p className="city-fest__block-label">What you learn</p>
        {w.youLearn.map((p, i) => (
          <p key={i} className="city-fest__para">
            {p}
          </p>
        ))}
      </div>
      {w.level ? (
        <div className="city-fest__origin-card">
          <p className="city-fest__origin-label">Level</p>
          <p className="city-fest__origin-text">{w.level}</p>
        </div>
      ) : null}
      <div className="city-fest__block">
        <p className="city-fest__block-label">What to expect</p>
        <ul className="city-fest__sci-list">
          {w.expect.map((line, i) => (
            <li key={i}>{line}</li>
          ))}
        </ul>
      </div>
      <div className="city-fest__origin-card">
        <p className="city-fest__origin-label">Duration & booking</p>
        <p className="city-fest__origin-text">{w.durationBooking}</p>
      </div>
      {w.etiquette && w.etiquette.length > 0 ? (
        <div className="city-fest__block">
          <p className="city-fest__block-label">Etiquette</p>
          <ul className="city-fest__sci-list">
            {w.etiquette.map((line, i) => (
              <li key={i}>{line}</li>
            ))}
          </ul>
        </div>
      ) : null}
      {w.contact ? (
        <div className="cultural-shows__inline-contact">
          <p className="city-fest__origin-label">Useful contact</p>
          <ContactChip c={w.contact} />
        </div>
      ) : null}
      <PhotoSpotMapRow name={w.name} latitude={w.latitude} longitude={w.longitude} />
    </div>
  )
}

function WorkshopRow({
  w,
  catId,
  isOpen,
  onToggle,
  index,
}: {
  w: WorkshopEntry
  catId: string
  isOpen: boolean
  onToggle: () => void
  index: number
}) {
  const wid = `${catId}::${w.id}`
  const triggerId = `city-ws-acc-${wid}`
  const panelId = `city-ws-panel-${wid}`

  return (
    <div className={cn('city-fest__inner-block', index > 0 && 'weather-page__acc-block--spaced')}>
      {index > 0 ? <div className="weather-page__acc-rule city-fest__inner-rule" aria-hidden /> : null}
      <button
        type="button"
        id={triggerId}
        className={cn('weather-page__acc-trigger city-fest__trigger', isOpen && 'weather-page__acc-trigger--open')}
        aria-expanded={isOpen}
        aria-controls={panelId}
        onClick={onToggle}
      >
        <span className="weather-page__acc-trigger-main">
          <BrushGlyph />
          <span className="weather-page__acc-title-wrap">
            {w.teaser ? <span className="city-history__eyebrow">{w.teaser}</span> : null}
            <span className="weather-page__acc-title">{w.name}</span>
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
          <div className="weather-page__acc-body city-fest__acc-body">
            <WorkshopPanel w={w} />
          </div>
        </div>
      </div>
    </div>
  )
}

function CategoryRow({
  cat,
  isOpen,
  onToggle,
  index,
  openWs,
  toggleWs,
}: {
  cat: WorkshopCategory
  isOpen: boolean
  onToggle: () => void
  index: number
  openWs: Record<string, boolean>
  toggleWs: (key: string) => void
}) {
  const triggerId = `city-ws-cat-${cat.id}`
  const panelId = `city-ws-cat-panel-${cat.id}`

  return (
    <div className={cn('weather-page__acc-block', index > 0 && 'weather-page__acc-block--spaced')}>
      {index > 0 ? <div className="weather-page__acc-rule" aria-hidden /> : null}
      <button
        type="button"
        id={triggerId}
        className={cn('weather-page__acc-trigger', isOpen && 'weather-page__acc-trigger--open')}
        aria-expanded={isOpen}
        aria-controls={panelId}
        onClick={onToggle}
      >
        <span className="weather-page__acc-trigger-main">
          <CalendarGlyph />
          <span className="weather-page__acc-title-wrap">
            <span className="city-history__eyebrow">{cat.eyebrow}</span>
            <span className="weather-page__acc-title">{cat.title}</span>
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
          <div className="weather-page__acc-body city-fest__category-body">
            {cat.intro.map((p, i) => (
              <p key={i} className="city-history__para">
                {p}
              </p>
            ))}
            <p className="city-fest__nest-hint">Each workshop — tap for skills, booking and map</p>
            <div className="weather-page__acc-stack city-fest__nest-stack">
              {cat.workshops.map((w, i) => {
                const key = `${cat.id}::${w.id}`
                return (
                  <WorkshopRow
                    key={w.id}
                    w={w}
                    catId={cat.id}
                    index={i}
                    isOpen={Boolean(openWs[key])}
                    onToggle={() => toggleWs(key)}
                  />
                )
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

type Props = {
  bundle: CityWorkshopsBundle
}

export function CityWorkshopsAccordion({ bundle }: Props) {
  const catInitial = useMemo(
    () => Object.fromEntries(bundle.categories.map((c) => [c.id, false])) as Record<string, boolean>,
    [bundle.categories],
  )
  const wsKeys = useMemo(() => {
    const keys: string[] = []
    for (const c of bundle.categories) {
      for (const w of c.workshops) {
        keys.push(`${c.id}::${w.id}`)
      }
    }
    return keys
  }, [bundle.categories])

  const wsInitial = useMemo(
    () => Object.fromEntries(wsKeys.map((k) => [k, false])) as Record<string, boolean>,
    [wsKeys],
  )

  const catIds = useMemo(() => bundle.categories.map((c) => c.id), [bundle.categories])

  const [openCat, setOpenCat] = useState<Record<string, boolean>>(catInitial)
  const [openWs, setOpenWs] = useState<Record<string, boolean>>(wsInitial)

  const toggleCat = useCallback(
    (id: string) => {
      setOpenWs(wsInitial)
      setOpenCat((o) => exclusiveAccordionToggle(catIds, o, id))
    },
    [catIds, wsInitial],
  )

  const toggleWs = useCallback(
    (key: string) => {
      setOpenWs((o) => exclusiveAccordionToggle(wsKeys, o, key))
    },
    [wsKeys],
  )

  useEffect(() => {
    setOpenCat(catInitial)
    setOpenWs(wsInitial)
  }, [catInitial, wsInitial])

  return (
    <div className="city-fest">
      <div className="city-history__what city-fest__lead">
        <h2 className="city-history__what-title">{bundle.leadTitle}</h2>
        {bundle.leadParagraphs.map((p, i) => (
          <p key={i} className="city-history__what-para">
            {p}
          </p>
        ))}
      </div>

      <section className="cultural-shows__authority" aria-label="Helpful contacts">
        <p className="cultural-shows__authority-label">Helpful contacts</p>
        <div className="cultural-shows__authority-grid">
          {bundle.authorityContacts.map((c) => (
            <ContactChip key={c.id} c={c} />
          ))}
        </div>
      </section>

      <p className="city-history__stack-label">
        Six workshop families — one category open at a time · one workshop detail open
      </p>
      <div className="weather-page__acc-stack">
        {bundle.categories.map((cat, index) => (
          <CategoryRow
            key={cat.id}
            cat={cat}
            index={index}
            isOpen={Boolean(openCat[cat.id])}
            onToggle={() => toggleCat(cat.id)}
            openWs={openWs}
            toggleWs={toggleWs}
          />
        ))}
      </div>
    </div>
  )
}
