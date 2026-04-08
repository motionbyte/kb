import { useCallback, useEffect, useMemo, useState } from 'react'
import type {
  CityCulturalShowsBundle,
  CulturalAuthorityContact,
  CulturalShowEntry,
  CulturalShowsCategory,
} from '@/data/cityCulturalShows'
import { getCityBySlug } from '@/data/cities'
import { LocalEventsLivePanel } from '@/components/features/LocalEventsLivePanel'
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

function StageGlyph() {
  return (
    <svg className="city-fest__inner-icon" viewBox="0 0 24 24" aria-hidden>
      <path
        fill="none"
        stroke="currentColor"
        strokeWidth="1.75"
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M4 18h16M6 18V7l6 4 6-4v11M10 9V5h4v4"
      />
    </svg>
  )
}

function LiveGlyph() {
  return (
    <svg className="weather-page__acc-icon" viewBox="0 0 24 24" aria-hidden>
      <circle cx="12" cy="12" r="9" fill="none" stroke="currentColor" strokeWidth="1.75" />
      <circle cx="12" cy="12" r="3.2" fill="currentColor" />
    </svg>
  )
}

function ContactChip({ c }: { c: CulturalAuthorityContact }) {
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

function ShowPanel({ s }: { s: CulturalShowEntry }) {
  return (
    <div className="city-fest__panel">
      <div className="city-fest__block">
        <p className="city-fest__block-label">Where it happens</p>
        <p className="city-fest__para">{s.where}</p>
      </div>
      <div className="city-fest__block">
        <p className="city-fest__block-label">Historical context</p>
        {s.historicalContext.map((p, i) => (
          <p key={i} className="city-fest__para">
            {p}
          </p>
        ))}
      </div>
      <div className="city-fest__block">
        <p className="city-fest__block-label">What to expect</p>
        <ul className="city-fest__sci-list">
          {s.whatToExpect.map((line, i) => (
            <li key={i}>{line}</li>
          ))}
        </ul>
      </div>
      <div className="city-fest__origin-card">
        <p className="city-fest__origin-label">Typical timing</p>
        <p className="city-fest__origin-text">{s.typicalTiming}</p>
      </div>
      {s.contact ? (
        <div className="cultural-shows__inline-contact">
          <p className="city-fest__origin-label">Useful contact</p>
          <ContactChip c={s.contact} />
        </div>
      ) : null}
      <PhotoSpotMapRow name={s.name} latitude={s.latitude} longitude={s.longitude} />
    </div>
  )
}

function ShowRow({
  s,
  catId,
  isOpen,
  onToggle,
  index,
}: {
  s: CulturalShowEntry
  catId: string
  isOpen: boolean
  onToggle: () => void
  index: number
}) {
  const sid = `${catId}::${s.id}`
  const triggerId = `city-culture-acc-${sid}`
  const panelId = `city-culture-panel-${sid}`

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
          <StageGlyph />
          <span className="weather-page__acc-title-wrap">
            {s.teaser ? <span className="city-history__eyebrow">{s.teaser}</span> : null}
            <span className="weather-page__acc-title">{s.name}</span>
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
            <ShowPanel s={s} />
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
  openShow,
  toggleShow,
  citySlug,
  cityName,
}: {
  cat: CulturalShowsCategory
  isOpen: boolean
  onToggle: () => void
  index: number
  openShow: Record<string, boolean>
  toggleShow: (key: string) => void
  citySlug: string
  cityName: string
}) {
  const triggerId = `city-culture-cat-${cat.id}`
  const panelId = `city-culture-cat-panel-${cat.id}`
  const Icon = cat.liveEvents ? LiveGlyph : CalendarGlyph

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
          <Icon />
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
            {cat.liveEvents ? (
              <LocalEventsLivePanel citySlug={citySlug} cityName={cityName} isActive={isOpen} />
            ) : (
              <>
                <p className="city-fest__nest-hint">Each show - tap for history, location, contact and map</p>
                <div className="weather-page__acc-stack city-fest__nest-stack">
                  {cat.shows.map((s, i) => {
                    const key = `${cat.id}::${s.id}`
                    return (
                      <ShowRow
                        key={s.id}
                        s={s}
                        catId={cat.id}
                        index={i}
                        isOpen={Boolean(openShow[key])}
                        onToggle={() => toggleShow(key)}
                      />
                    )
                  })}
                </div>
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}

type Props = {
  bundle: CityCulturalShowsBundle
}

export function CityCulturalShowsAccordion({ bundle }: Props) {
  const cityName = useMemo(
    () => getCityBySlug(bundle.citySlug)?.name ?? bundle.citySlug,
    [bundle.citySlug],
  )

  const catInitial = useMemo(
    () => Object.fromEntries(bundle.categories.map((c) => [c.id, false])) as Record<string, boolean>,
    [bundle.categories],
  )
  const showKeys = useMemo(() => {
    const keys: string[] = []
    for (const c of bundle.categories) {
      for (const s of c.shows) {
        keys.push(`${c.id}::${s.id}`)
      }
    }
    return keys
  }, [bundle.categories])

  const showInitial = useMemo(
    () => Object.fromEntries(showKeys.map((k) => [k, false])) as Record<string, boolean>,
    [showKeys],
  )

  const catIds = useMemo(() => bundle.categories.map((c) => c.id), [bundle.categories])

  const [openCat, setOpenCat] = useState<Record<string, boolean>>(catInitial)
  const [openShow, setOpenShow] = useState<Record<string, boolean>>(showInitial)

  const toggleCat = useCallback(
    (id: string) => {
      setOpenShow(showInitial)
      setOpenCat((o) => exclusiveAccordionToggle(catIds, o, id))
    },
    [catIds, showInitial],
  )

  const toggleShow = useCallback(
    (key: string) => {
      setOpenShow((o) => exclusiveAccordionToggle(showKeys, o, key))
    },
    [showKeys],
  )

  useEffect(() => {
    setOpenCat(catInitial)
    setOpenShow(showInitial)
  }, [catInitial, showInitial])

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
        <p className="cultural-shows__authority-label">Authority contacts</p>
        <div className="cultural-shows__authority-grid">
          {bundle.authorityContacts.map((c) => (
            <ContactChip key={c.id} c={c} />
          ))}
        </div>
      </section>

      <p className="city-history__stack-label">
        Historic shows · local venue nights · cultural shows today (live) - one category open at a time
      </p>
      <div className="weather-page__acc-stack">
        {bundle.categories.map((cat, index) => (
          <CategoryRow
            key={cat.id}
            cat={cat}
            index={index}
            isOpen={Boolean(openCat[cat.id])}
            onToggle={() => toggleCat(cat.id)}
            openShow={openShow}
            toggleShow={toggleShow}
            citySlug={bundle.citySlug}
            cityName={cityName}
          />
        ))}
      </div>
    </div>
  )
}
