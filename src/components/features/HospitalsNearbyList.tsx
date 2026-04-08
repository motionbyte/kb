import { useEffect, useState } from 'react'
import { getCitySafetyBySlug, type HospitalEntry } from '@/data/citySafety'
import { fetchHospitalsLive } from '@/lib/hospitalsFetch'
import { buildHospitalMapLinks } from '@/lib/mapsOpen'
import { cn } from '@/lib/cn'
import './CitySafetySection.css'

type Props = {
  citySlug: string
  cityName: string
  /** When false, children don’t render heavy fetch (parent controls visibility) */
  isActive: boolean
  /** Lighter panel chrome when nested inside another accordion (e.g. Instagram page) */
  embedded?: boolean
  /** When set, panel is exposed as an accessible region (e.g. under Safety toggle) */
  ariaLabelledBy?: string
}

function IconGoogleMaps() {
  return (
    <svg className="city-safety__hospital-map-icon" viewBox="0 0 24 24" aria-hidden>
      <path
        fill="#EA4335"
        d="M12 3C8.7 3 6 5.85 6 9.2c0 3.8 4.2 9.3 5.4 10.6.3.4 1 .4 1.3 0C13.8 18.5 18 13 18 9.2 18 5.85 15.3 3 12 3z"
      />
      <circle cx="12" cy="9" r="2.2" fill="#fff" />
    </svg>
  )
}

function IconAppleMaps() {
  return (
    <svg className="city-safety__hospital-map-icon" viewBox="0 0 24 24" aria-hidden>
      <path
        fill="#007AFF"
        d="M4.5 17.2V7.8L9 6.5v10.4l-4.5 1.3zm6-12l7 2v10.4l-7-2V5.2z"
      />
      <path fill="#5AC8FA" d="M10.5 5.2L17 7v2.2l-6.5-1.9V5.2z" opacity="0.85" />
    </svg>
  )
}

function IconWebsite() {
  return (
    <svg className="city-safety__hospital-map-icon" viewBox="0 0 24 24" aria-hidden>
      <circle cx="12" cy="12" r="9" fill="none" stroke="currentColor" strokeWidth="1.5" />
      <path
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M8 12h8M12 8c.8 2.2.8 3.8 0 8M12 8c-.8 2.2-.8 3.8 0 8"
      />
    </svg>
  )
}

function HospitalRowActions({ h, cityName }: { h: HospitalEntry; cityName: string }) {
  const { googleMaps, appleMaps } = buildHospitalMapLinks(h, cityName)
  return (
    <div className="city-safety__hospital-actions">
      <a
        className="city-safety__hospital-icon-link"
        href={googleMaps}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={`${h.name} — Google Maps`}
      >
        <IconGoogleMaps />
      </a>
      <a
        className="city-safety__hospital-icon-link"
        href={appleMaps}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={`${h.name} — Apple Maps`}
      >
        <IconAppleMaps />
      </a>
      {h.website ? (
        <a
          className="city-safety__hospital-icon-link"
          href={h.website}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={`${h.name} — website`}
        >
          <IconWebsite />
        </a>
      ) : null}
    </div>
  )
}

/**
 * Shared hospital listing: curated + optional Nominatim live fetch when `isActive`.
 */
export function HospitalsNearbyList({
  citySlug,
  cityName,
  isActive,
  embedded = false,
  ariaLabelledBy,
}: Props) {
  const bundle = getCitySafetyBySlug(citySlug)
  const [hospitalRows, setHospitalRows] = useState<HospitalEntry[]>([])
  const [liveState, setLiveState] = useState<'idle' | 'loading' | 'live' | 'curated'>('idle')

  useEffect(() => {
    if (!bundle) return
    setHospitalRows(bundle.hospitals)
    setLiveState('idle')
  }, [bundle, citySlug])

  useEffect(() => {
    if (!isActive || !bundle) return

    let cancelled = false
    setLiveState('loading')

    ;(async () => {
      const live = await fetchHospitalsLive(cityName, bundle.searchLat, bundle.searchLng)
      if (cancelled) return
      if (live && live.length >= 10) {
        setHospitalRows(live.slice(0, 20))
        setLiveState('live')
      } else {
        setHospitalRows(bundle.hospitals)
        setLiveState('curated')
      }
    })()

    return () => {
      cancelled = true
    }
  }, [isActive, bundle, cityName])

  if (!bundle) {
    return (
      <p className="ig-hospitals__empty">
        No hospital list is configured for this destination yet.
      </p>
    )
  }

  return (
    <div
      className={cn('city-safety__hospital-panel', embedded && 'ig-hospitals__embed')}
      id={`hospital-list-${citySlug}`}
      role={ariaLabelledBy ? 'region' : undefined}
      aria-labelledby={ariaLabelledBy}
    >
      <p className="city-safety__hospital-status" role="status">
        {liveState === 'loading' && 'Checking live listings…'}
        {liveState === 'live' && 'Showing live search results (OpenStreetMap) near this city.'}
        {liveState === 'curated' && 'Showing curated local list (live list unavailable or too short).'}
      </p>
      <ol className="city-safety__hospital-list">
        {hospitalRows.map((h) => (
          <li key={h.id}>
            <div className="city-safety__hospital-row">
              <div className="city-safety__hospital-text">
                <span className="city-safety__hospital-name">{h.name}</span>
                {h.area ? <span className="city-safety__hospital-area">{h.area}</span> : null}
                {h.phone ? (
                  <a className="city-safety__hospital-phone" href={`tel:${h.phone.replace(/\D/g, '')}`}>
                    {h.phone}
                  </a>
                ) : null}
              </div>
              <HospitalRowActions h={h} cityName={cityName} />
            </div>
          </li>
        ))}
      </ol>
    </div>
  )
}
