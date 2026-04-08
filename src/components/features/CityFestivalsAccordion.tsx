import { useCallback, useEffect, useMemo, useState } from 'react'
import type { CityFestivalsBundle, FestivalCategory, FestivalEntry } from '@/data/cityFestivals'
import { getCityBySlug } from '@/data/cities'
import { LocalEventsLivePanel } from '@/components/features/LocalEventsLivePanel'
import { exclusiveAccordionToggle } from '@/lib/exclusiveAccordion'
import { cn } from '@/lib/cn'
import '@/pages/WeatherPage.css'
import './CityHistoryAccordion.css'
import './CityFestivalsAccordion.css'

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

function SparkGlyph() {
  return (
    <svg className="city-fest__inner-icon" viewBox="0 0 24 24" aria-hidden>
      <path
        fill="currentColor"
        d="M12 2l2.4 7.4H22l-6.2 4.5 2.4 7.4L12 17.3l-6.2 4.5 2.4-7.4L2 9.4h7.6L12 2z"
      />
    </svg>
  )
}

function FestivalPanel({ f }: { f: FestivalEntry }) {
  return (
    <div className="city-fest__panel">
      <div className="city-fest__block">
        <p className="city-fest__block-label">Why it is celebrated</p>
        {f.why.map((p, i) => (
          <p key={i} className="city-fest__para">
            {p}
          </p>
        ))}
      </div>
      <div className="city-fest__origin-grid">
        <div className="city-fest__origin-card">
          <p className="city-fest__origin-label">When the observance took shape</p>
          <p className="city-fest__origin-text">{f.origin.whenStarted}</p>
        </div>
        <div className="city-fest__origin-card">
          <p className="city-fest__origin-label">Who is remembered / credited</p>
          <p className="city-fest__origin-text">{f.origin.attributedWho}</p>
        </div>
      </div>
      <div className="city-fest__block">
        <p className="city-fest__block-label">Scientific &amp; social angles</p>
        <ul className="city-fest__sci-list">
          {f.scientificAndSocial.map((line, i) => (
            <li key={i}>{line}</li>
          ))}
        </ul>
      </div>
    </div>
  )
}

function FestivalRow({
  f,
  catId,
  isOpen,
  onToggle,
  index,
}: {
  f: FestivalEntry
  catId: string
  isOpen: boolean
  onToggle: () => void
  index: number
}) {
  const fid = `${catId}::${f.id}`
  const triggerId = `city-fest-acc-${fid}`
  const panelId = `city-fest-panel-${fid}`

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
          <SparkGlyph />
          <span className="weather-page__acc-title-wrap">
            {f.teaser ? <span className="city-history__eyebrow">{f.teaser}</span> : null}
            <span className="weather-page__acc-title">{f.name}</span>
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
            <FestivalPanel f={f} />
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
  openFest,
  toggleFest,
  citySlug,
  cityName,
}: {
  cat: FestivalCategory
  isOpen: boolean
  onToggle: () => void
  index: number
  openFest: Record<string, boolean>
  toggleFest: (key: string) => void
  citySlug: string
  cityName: string
}) {
  const triggerId = `city-fest-cat-${cat.id}`
  const panelId = `city-fest-cat-panel-${cat.id}`

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
            {cat.liveEvents ? (
              <LocalEventsLivePanel citySlug={citySlug} cityName={cityName} isActive={isOpen} />
            ) : (
              <>
                <p className="city-fest__nest-hint">Each festival — tap to expand</p>
                <div className="weather-page__acc-stack city-fest__nest-stack">
                  {cat.festivals.map((f, i) => {
                    const key = `${cat.id}::${f.id}`
                    return (
                      <FestivalRow
                        key={f.id}
                        f={f}
                        catId={cat.id}
                        index={i}
                        isOpen={Boolean(openFest[key])}
                        onToggle={() => toggleFest(key)}
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
  bundle: CityFestivalsBundle
}

export function CityFestivalsAccordion({ bundle }: Props) {
  const cityName = useMemo(
    () => getCityBySlug(bundle.citySlug)?.name ?? bundle.citySlug,
    [bundle.citySlug],
  )

  const catInitial = useMemo(
    () => Object.fromEntries(bundle.categories.map((c) => [c.id, false])) as Record<string, boolean>,
    [bundle.categories],
  )
  const festKeys = useMemo(() => {
    const keys: string[] = []
    for (const c of bundle.categories) {
      for (const f of c.festivals) {
        keys.push(`${c.id}::${f.id}`)
      }
    }
    return keys
  }, [bundle.categories])

  const festInitial = useMemo(
    () => Object.fromEntries(festKeys.map((k) => [k, false])) as Record<string, boolean>,
    [festKeys],
  )

  const catIds = useMemo(() => bundle.categories.map((c) => c.id), [bundle.categories])

  const [openCat, setOpenCat] = useState<Record<string, boolean>>(catInitial)
  const [openFest, setOpenFest] = useState<Record<string, boolean>>(festInitial)

  const toggleCat = useCallback(
    (id: string) => {
      setOpenFest(festInitial)
      setOpenCat((o) => exclusiveAccordionToggle(catIds, o, id))
    },
    [catIds, festInitial],
  )

  const toggleFest = useCallback(
    (key: string) => {
      setOpenFest((o) => exclusiveAccordionToggle(festKeys, o, key))
    },
    [festKeys],
  )

  useEffect(() => {
    setOpenCat(catInitial)
    setOpenFest(festInitial)
  }, [catInitial, festInitial])

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
      <p className="city-history__stack-label">
        Sanātana · Chishtī &amp; Mughal memory · civic · live listings — open one pillar at a time
      </p>
      <div className="weather-page__acc-stack">
        {bundle.categories.map((cat, index) => (
          <CategoryRow
            key={cat.id}
            cat={cat}
            index={index}
            isOpen={Boolean(openCat[cat.id])}
            onToggle={() => toggleCat(cat.id)}
            openFest={openFest}
            toggleFest={toggleFest}
            citySlug={bundle.citySlug}
            cityName={cityName}
          />
        ))}
      </div>
    </div>
  )
}
