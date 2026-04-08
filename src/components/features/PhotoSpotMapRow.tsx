import { buildMapLinks, openPreferredMapApp } from '@/lib/mapsOpen'
import './CityFamousPlacesAccordion.css'

function IconMapGeo() {
  return (
    <svg className="city-famous__map-app-icon" viewBox="0 0 24 24" aria-hidden>
      <circle cx="12" cy="12" r="9" fill="none" stroke="currentColor" strokeWidth="1.5" />
      <path fill="currentColor" d="M12 6.2L14.5 16 12 14.1 9.5 16 12 6.2z" opacity="0.92" />
    </svg>
  )
}

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

type Props = {
  name: string
  latitude: number
  longitude: number
}

export function PhotoSpotMapRow({ name, latitude, longitude }: Props) {
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
            <a className="city-famous__map-icon-link" href={links.geo} aria-label="Open in default maps app (geo)">
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
