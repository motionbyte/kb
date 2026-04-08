import { useCallback, useEffect, useMemo, useState, type ReactNode } from 'react'
import type { FamousPlace } from '@/data/cityFamousPlaces'
import { exclusiveAccordionToggle } from '@/lib/exclusiveAccordion'
import { cn } from '@/lib/cn'
import { buildMapLinks, openPreferredMapApp } from '@/lib/mapsOpen'
import '@/pages/WeatherPage.css'
import './CityFamousPlacesAccordion.css'

/** Default / system maps (geo URI) — compass needle */
function IconMapGeo() {
  return (
    <svg className="city-famous__map-app-icon" viewBox="0 0 24 24" aria-hidden>
      <circle cx="12" cy="12" r="9" fill="none" stroke="currentColor" strokeWidth="1.5" />
      <path
        fill="currentColor"
        d="M12 6.2L14.5 16 12 14.1 9.5 16 12 6.2z"
        opacity="0.92"
      />
    </svg>
  )
}

/** Google Maps–style location pin */
function IconGoogleMaps() {
  return (
    <svg className="city-famous__map-app-icon" viewBox="0 0 24 24" aria-hidden>
      <path
        fill="#EA4335"
        d="M12 3C8.7 3 6 5.85 6 9.2c0 3.8 4.2 9.3 5.4 10.6.3.4 1 .4 1.3 0C13.8 18.5 18 13 18 9.2 18 5.85 15.3 3 12 3z"
      />
      <circle cx="12" cy="9" r="2.2" fill="#fff" />
    </svg>
  )
}

/** Apple Maps–style folded map */
function IconAppleMaps() {
  return (
    <svg className="city-famous__map-app-icon" viewBox="0 0 24 24" aria-hidden>
      <path
        fill="#007AFF"
        d="M4.5 17.2V7.8L9 6.5v10.4l-4.5 1.3zm6-12l7 2v10.4l-7-2V5.2z"
      />
      <path fill="#5AC8FA" d="M10.5 5.2L17 7v2.2l-6.5-1.9V5.2z" opacity="0.85" />
    </svg>
  )
}

function MapGlyphIcon() {
  return (
    <svg className="city-famous__map-glyph" viewBox="0 0 24 24" aria-hidden>
      <path
        fill="none"
        stroke="currentColor"
        strokeWidth="1.75"
        strokeLinejoin="round"
        d="M9 20 5 18V6l4 2 6-3 4 2v12l-4-2-6 3z"
      />
      <path
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        d="M15 5v14M9 6v14"
        opacity="0.45"
      />
    </svg>
  )
}

function PinIcon() {
  return (
    <svg className="weather-page__acc-icon" viewBox="0 0 24 24" aria-hidden>
      <path
        fill="none"
        stroke="currentColor"
        strokeWidth="1.75"
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M12 21s7-4.35 7-11a7 7 0 1 0-14 0c0 6.65 7 11 7 11z"
      />
      <circle cx="12" cy="10" r="2.25" fill="currentColor" opacity="0.35" />
    </svg>
  )
}

type AccProps = {
  place: FamousPlace
  isOpen: boolean
  onToggle: () => void
  index: number
}

function PlaceMapRow({ place }: { place: FamousPlace }) {
  const { latitude, longitude, name } = place
  const links = buildMapLinks(latitude, longitude, name)

  return (
    <div className="city-famous__map">
      <button
        type="button"
        className="city-famous__map-primary"
        aria-label={`Open ${name} in your maps app`}
        onClick={() => openPreferredMapApp(latitude, longitude, name)}
      >
        <MapGlyphIcon />
        <span>Open in Maps</span>
      </button>
      <details className="city-famous__map-details">
        <summary className="city-famous__map-summary">Other map apps</summary>
        <ul className="city-famous__map-list" role="list">
          <li>
            <a
              className="city-famous__map-icon-link"
              href={links.geo}
              aria-label="Open in default maps app (geo)"
            >
              <IconMapGeo />
            </a>
          </li>
          <li>
            <a
              className="city-famous__map-icon-link"
              href={links.googleMaps}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Open in Google Maps"
            >
              <IconGoogleMaps />
            </a>
          </li>
          <li>
            <a
              className="city-famous__map-icon-link"
              href={links.appleMaps}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Open in Apple Maps"
            >
              <IconAppleMaps />
            </a>
          </li>
        </ul>
      </details>
    </div>
  )
}

function PlaceVisitMeta({ place }: { place: FamousPlace }) {
  if (!place.bestTimeHighlight && !place.visitHours) return null
  return (
    <div className="city-famous__visit-meta">
      {place.bestTimeHighlight ? (
        <div className="city-famous__best-window">
          <span className="city-famous__best-window-label">Best time</span>
          <p className="city-famous__best-window-text">{place.bestTimeHighlight}</p>
        </div>
      ) : null}
      {place.visitHours ? (
        <div className="city-famous__hours">
          <span className="city-famous__hours-label">Public hours &amp; visit time</span>
          <p className="city-famous__hours-summary">{place.visitHours.summary}</p>
          {place.visitHours.lines?.map((line, i) => (
            <p key={i} className="city-famous__hours-line">
              {line}
            </p>
          ))}
          <p className="city-famous__hours-source">
            <span className="city-famous__hours-pill">
              {place.visitHours.source === 'official' ? 'Official / institutional' : 'Web & visitor typical'}
            </span>
            {place.visitHours.note ? <span className="city-famous__hours-note"> {place.visitHours.note}</span> : null}
          </p>
        </div>
      ) : null}
    </div>
  )
}

function PlaceAccordionRow({ place, isOpen, onToggle, index }: AccProps) {
  const triggerId = `city-place-acc-${place.id}`
  const panelId = `city-place-panel-${place.id}`

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
          <PinIcon />
          <span className="weather-page__acc-title-wrap">
            <span className="weather-page__acc-title">{place.name}</span>
            {place.teaser ? (
              <span className="city-famous__teaser">{place.teaser}</span>
            ) : null}
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
          <div className="weather-page__acc-body city-famous__panel">
            <figure className="city-famous__figure">
              <img
                className="city-famous__img"
                src={place.imageSrc}
                alt={place.imageAlt}
                loading="lazy"
                decoding="async"
                referrerPolicy="no-referrer"
                sizes="(max-width: 520px) 100vw, 520px"
              />
            </figure>
            <PlaceVisitMeta place={place} />
            <PlaceMapRow place={place} />
            <div className="city-famous__copy">
              {place.paragraphs.map((p, i) => (
                <p key={i} className="city-famous__para">
                  {p}
                </p>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

type Props = {
  places: FamousPlace[]
  /** Intro line above the stack */
  intro?: ReactNode
}

export function CityFamousPlacesAccordion({ places, intro }: Props) {
  const initial = useMemo(
    () => Object.fromEntries(places.map((p) => [p.id, false])) as Record<string, boolean>,
    [places],
  )
  const placeIds = useMemo(() => places.map((p) => p.id), [places])
  const [open, setOpen] = useState<Record<string, boolean>>(initial)

  const toggle = useCallback(
    (id: string) => {
      setOpen((o) => exclusiveAccordionToggle(placeIds, o, id))
    },
    [placeIds],
  )

  useEffect(() => {
    setOpen(initial)
  }, [initial])

  if (places.length === 0) return null

  return (
    <div className="city-famous">
      {intro ? <div className="city-famous__intro">{intro}</div> : null}
      <div className="weather-page__acc-stack">
        {places.map((place, index) => (
          <PlaceAccordionRow
            key={place.id}
            place={place}
            index={index}
            isOpen={Boolean(open[place.id])}
            onToggle={() => toggle(place.id)}
          />
        ))}
      </div>
    </div>
  )
}
