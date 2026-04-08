import { useCallback, useEffect, useMemo, useState } from 'react'
import type {
  AdventureActivity,
  AdventureCategory,
  AdventureContact,
  CityAdventureActivitiesBundle,
} from '@/data/cityAdventureActivities'
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

function CompassGlyph() {
  return (
    <svg className="city-fest__inner-icon" viewBox="0 0 24 24" aria-hidden>
      <circle cx="12" cy="12" r="9" fill="none" stroke="currentColor" strokeWidth="1.75" />
      <path
        fill="none"
        stroke="currentColor"
        strokeWidth="1.75"
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M12 6l2 6 6 2-6 2-2 6-2-6-6-2 6-2 2-6z"
      />
    </svg>
  )
}

function ContactChip({ c }: { c: AdventureContact }) {
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

function ActivityPanel({ a }: { a: AdventureActivity }) {
  return (
    <div className="city-fest__panel">
      <div className="city-fest__block">
        <p className="city-fest__block-label">Where & how to reach</p>
        <p className="city-fest__para">{a.where}</p>
      </div>
      <div className="city-fest__block">
        <p className="city-fest__block-label">Overview</p>
        {a.overview.map((p, i) => (
          <p key={i} className="city-fest__para">
            {p}
          </p>
        ))}
      </div>
      {a.difficulty ? (
        <div className="city-fest__origin-card">
          <p className="city-fest__origin-label">Difficulty</p>
          <p className="city-fest__origin-text">{a.difficulty}</p>
        </div>
      ) : null}
      <div className="city-fest__block">
        <p className="city-fest__block-label">What to expect</p>
        <ul className="city-fest__sci-list">
          {a.expect.map((line, i) => (
            <li key={i}>{line}</li>
          ))}
        </ul>
      </div>
      <div className="city-fest__origin-card">
        <p className="city-fest__origin-label">Season & timing</p>
        <p className="city-fest__origin-text">{a.seasonTiming}</p>
      </div>
      {a.safetyTips && a.safetyTips.length > 0 ? (
        <div className="city-fest__block">
          <p className="city-fest__block-label">Safety</p>
          <ul className="city-fest__sci-list">
            {a.safetyTips.map((line, i) => (
              <li key={i}>{line}</li>
            ))}
          </ul>
        </div>
      ) : null}
      {a.contact ? (
        <div className="cultural-shows__inline-contact">
          <p className="city-fest__origin-label">Useful contact</p>
          <ContactChip c={a.contact} />
        </div>
      ) : null}
      <PhotoSpotMapRow name={a.name} latitude={a.latitude} longitude={a.longitude} />
    </div>
  )
}

function ActivityRow({
  a,
  catId,
  isOpen,
  onToggle,
  index,
}: {
  a: AdventureActivity
  catId: string
  isOpen: boolean
  onToggle: () => void
  index: number
}) {
  const aid = `${catId}::${a.id}`
  const triggerId = `city-adv-acc-${aid}`
  const panelId = `city-adv-panel-${aid}`

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
          <CompassGlyph />
          <span className="weather-page__acc-title-wrap">
            {a.teaser ? <span className="city-history__eyebrow">{a.teaser}</span> : null}
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
          <div className="weather-page__acc-body city-fest__acc-body">
            <ActivityPanel a={a} />
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
  openAct,
  toggleAct,
}: {
  cat: AdventureCategory
  isOpen: boolean
  onToggle: () => void
  index: number
  openAct: Record<string, boolean>
  toggleAct: (key: string) => void
}) {
  const triggerId = `city-adv-cat-${cat.id}`
  const panelId = `city-adv-cat-panel-${cat.id}`

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
            <p className="city-fest__nest-hint">Each activity — tap for detail, safety and map</p>
            <div className="weather-page__acc-stack city-fest__nest-stack">
              {cat.activities.map((a, i) => {
                const key = `${cat.id}::${a.id}`
                return (
                  <ActivityRow
                    key={a.id}
                    a={a}
                    catId={cat.id}
                    index={i}
                    isOpen={Boolean(openAct[key])}
                    onToggle={() => toggleAct(key)}
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
  bundle: CityAdventureActivitiesBundle
}

export function CityAdventureActivitiesAccordion({ bundle }: Props) {
  const catInitial = useMemo(
    () => Object.fromEntries(bundle.categories.map((c) => [c.id, false])) as Record<string, boolean>,
    [bundle.categories],
  )
  const actKeys = useMemo(() => {
    const keys: string[] = []
    for (const c of bundle.categories) {
      for (const a of c.activities) {
        keys.push(`${c.id}::${a.id}`)
      }
    }
    return keys
  }, [bundle.categories])

  const actInitial = useMemo(
    () => Object.fromEntries(actKeys.map((k) => [k, false])) as Record<string, boolean>,
    [actKeys],
  )

  const catIds = useMemo(() => bundle.categories.map((c) => c.id), [bundle.categories])

  const [openCat, setOpenCat] = useState<Record<string, boolean>>(catInitial)
  const [openAct, setOpenAct] = useState<Record<string, boolean>>(actInitial)

  const toggleCat = useCallback(
    (id: string) => {
      setOpenAct(actInitial)
      setOpenCat((o) => exclusiveAccordionToggle(catIds, o, id))
    },
    [catIds, actInitial],
  )

  const toggleAct = useCallback(
    (key: string) => {
      setOpenAct((o) => exclusiveAccordionToggle(actKeys, o, key))
    },
    [actKeys],
  )

  useEffect(() => {
    setOpenCat(catInitial)
    setOpenAct(actInitial)
  }, [catInitial, actInitial])

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

      <section className="cultural-shows__authority" aria-label="Authority contacts">
        <p className="cultural-shows__authority-label">Helpful contacts</p>
        <div className="cultural-shows__authority-grid">
          {bundle.authorityContacts.map((c) => (
            <ContactChip key={c.id} c={c} />
          ))}
        </div>
      </section>

      <p className="city-history__stack-label">
        Six adventure families — one category open at a time · one activity detail open
      </p>
      <div className="weather-page__acc-stack">
        {bundle.categories.map((cat, index) => (
          <CategoryRow
            key={cat.id}
            cat={cat}
            index={index}
            isOpen={Boolean(openCat[cat.id])}
            onToggle={() => toggleCat(cat.id)}
            openAct={openAct}
            toggleAct={toggleAct}
          />
        ))}
      </div>
    </div>
  )
}
