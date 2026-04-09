import { useCallback, useEffect, useMemo, useState } from 'react'
import type {
  CityInstagramSpotsBundle,
  InstagramSpotCategory,
  InstagramSpotEntry,
} from '@/data/cityInstagramSpots.types'
import { exclusiveAccordionToggle } from '@/lib/exclusiveAccordion'
import { cn } from '@/lib/cn'
import { PhotoSpotMapRow } from '@/components/features/PhotoSpotMapRow'
import { HospitalsNearbyList } from '@/components/features/HospitalsNearbyList'
import '@/pages/WeatherPage.css'
import './CityHistoryAccordion.css'
import './CityFestivalsAccordion.css'
import './InstagramSpotsAccordion.css'

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

function MedicalGlyph() {
  return (
    <svg className="weather-page__acc-icon" viewBox="0 0 24 24" aria-hidden>
      <circle cx="12" cy="12" r="9" fill="none" stroke="currentColor" strokeWidth="1.75" />
      <path
        fill="none"
        stroke="currentColor"
        strokeWidth="1.75"
        strokeLinecap="round"
        d="M12 8v8M8 12h8"
      />
    </svg>
  )
}

function SunGlyph() {
  return (
    <svg className="ig-spot__inner-icon" viewBox="0 0 24 24" aria-hidden>
      <circle cx="12" cy="12" r="4" fill="none" stroke="currentColor" strokeWidth="1.75" />
      <path
        fill="none"
        stroke="currentColor"
        strokeWidth="1.75"
        strokeLinecap="round"
        d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M4.93 19.07l1.41-1.41M17.66 6.34l1.41-1.41"
      />
    </svg>
  )
}

function CameraGlyph() {
  return (
    <svg className="ig-spot__inner-icon" viewBox="0 0 24 24" aria-hidden>
      <path
        fill="none"
        stroke="currentColor"
        strokeWidth="1.75"
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M4 7h3l1.5-2h7L17 7h3a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V9a2 2 0 0 1 2-2z"
      />
      <circle cx="12" cy="13" r="3.5" fill="none" stroke="currentColor" strokeWidth="1.75" />
    </svg>
  )
}

type PageVariant = 'instagram' | 'sunrise'

function SpotPanel({ spot, variant }: { spot: InstagramSpotEntry; variant: PageVariant }) {
  return (
    <div className="ig-spot__panel">
      {spot.paragraphs.map((p, i) => (
        <p key={i} className="ig-spot__para">
          {p}
        </p>
      ))}
      <div className="ig-spot__light-card">
        <p className="ig-spot__label">
          {variant === 'sunrise' ? 'Golden hour & timing' : 'Best light & conditions'}
        </p>
        <p className="ig-spot__light-text">{spot.bestLight}</p>
      </div>
      <div className="ig-spot__block">
        <p className="ig-spot__label">{variant === 'sunrise' ? 'Viewing tips' : 'Photo tips'}</p>
        <ul className="ig-spot__tips">
          {spot.photoTips.map((t, i) => (
            <li key={i}>{t}</li>
          ))}
        </ul>
      </div>
      {spot.etiquette && spot.etiquette.length > 0 ? (
        <div className="ig-spot__block ig-spot__block--etiquette">
          <p className="ig-spot__label">Etiquette &amp; rules</p>
          <ul className="ig-spot__tips">
            {spot.etiquette.map((t, i) => (
              <li key={i}>{t}</li>
            ))}
          </ul>
        </div>
      ) : null}
      <PhotoSpotMapRow name={spot.name} latitude={spot.latitude} longitude={spot.longitude} />
    </div>
  )
}

function SpotRow({
  spot,
  catId,
  isOpen,
  onToggle,
  index,
  variant,
}: {
  spot: InstagramSpotEntry
  catId: string
  isOpen: boolean
  onToggle: () => void
  index: number
  variant: PageVariant
}) {
  const SpotIcon = variant === 'sunrise' ? SunGlyph : CameraGlyph
  const triggerId = `ig-spot-acc-${catId}-${spot.id}`
  const panelId = `ig-spot-panel-${catId}-${spot.id}`

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
          <SpotIcon />
          <span className="weather-page__acc-title-wrap">
            {spot.teaser ? <span className="city-history__eyebrow">{spot.teaser}</span> : null}
            <span className="weather-page__acc-title">{spot.name}</span>
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
            <SpotPanel spot={spot} variant={variant} />
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
  openSpot,
  toggleSpot,
  citySlug,
  cityName,
  variant,
}: {
  cat: InstagramSpotCategory
  isOpen: boolean
  onToggle: () => void
  index: number
  openSpot: Record<string, boolean>
  toggleSpot: (key: string) => void
  citySlug: string
  cityName: string
  variant: PageVariant
}) {
  const triggerId = `ig-cat-${cat.id}`
  const panelId = `ig-cat-panel-${cat.id}`
  const Icon = cat.hospitalsOnly ? MedicalGlyph : CalendarGlyph

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
            {cat.hospitalsOnly ? (
              <HospitalsNearbyList
                citySlug={citySlug}
                cityName={cityName}
                isActive={isOpen}
                embedded
              />
            ) : (
              <>
                <p className="city-fest__nest-hint">
                  {variant === 'sunrise'
                    ? 'Each place — tap for timing, tips & maps'
                    : 'Each place — tap for tips, light & maps'}
                </p>
                <div className="weather-page__acc-stack city-fest__nest-stack">
                  {cat.spots.map((s, i) => {
                    const key = `${cat.id}::${s.id}`
                    return (
                      <SpotRow
                        key={s.id}
                        spot={s}
                        catId={cat.id}
                        index={i}
                        isOpen={Boolean(openSpot[key])}
                        onToggle={() => toggleSpot(key)}
                        variant={variant}
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
  bundle: CityInstagramSpotsBundle
  cityName: string
  /** Instagram page vs sunrise/sunset copy & nested icons */
  variant?: PageVariant
}

export function InstagramSpotsAccordion({ bundle, cityName, variant = 'instagram' }: Props) {
  const catInitial = useMemo(
    () => Object.fromEntries(bundle.categories.map((c) => [c.id, false])) as Record<string, boolean>,
    [bundle.categories],
  )

  const spotKeys = useMemo(() => {
    const keys: string[] = []
    for (const c of bundle.categories) {
      for (const s of c.spots) {
        keys.push(`${c.id}::${s.id}`)
      }
    }
    return keys
  }, [bundle.categories])

  const spotInitial = useMemo(
    () => Object.fromEntries(spotKeys.map((k) => [k, false])) as Record<string, boolean>,
    [spotKeys],
  )

  const catIds = useMemo(() => bundle.categories.map((c) => c.id), [bundle.categories])

  const [openCat, setOpenCat] = useState<Record<string, boolean>>(catInitial)
  const [openSpot, setOpenSpot] = useState<Record<string, boolean>>(spotInitial)

  const toggleCat = useCallback(
    (id: string) => {
      setOpenSpot(spotInitial)
      setOpenCat((o) => exclusiveAccordionToggle(catIds, o, id))
    },
    [catIds, spotInitial],
  )

  const toggleSpot = useCallback(
    (key: string) => {
      setOpenSpot((o) => exclusiveAccordionToggle(spotKeys, o, key))
    },
    [spotKeys],
  )

  useEffect(() => {
    setOpenCat(catInitial)
    setOpenSpot(spotInitial)
  }, [catInitial, spotInitial])

  return (
    <div className="ig-spot">
      <div className="city-history__what ig-spot__lead">
        <h2 className="city-history__what-title">{bundle.leadTitle}</h2>
        {bundle.leadParagraphs.map((p, i) => (
          <p key={i} className="city-history__what-para">
            {p}
          </p>
        ))}
      </div>
      <p className="city-history__stack-label">
        {variant === 'sunrise'
          ? 'Best spots · hidden gems · hospitals nearby — one category open at a time · one spot detail open'
          : 'Best known · hidden & quieter · hospitals nearby — one category open at a time · one spot detail open'}
      </p>
      <div className="weather-page__acc-stack">
        {bundle.categories.map((cat, index) => (
          <CategoryRow
            key={cat.id}
            cat={cat}
            index={index}
            isOpen={Boolean(openCat[cat.id])}
            onToggle={() => toggleCat(cat.id)}
            openSpot={openSpot}
            toggleSpot={toggleSpot}
            citySlug={bundle.citySlug}
            cityName={cityName}
            variant={variant}
          />
        ))}
      </div>
    </div>
  )
}
