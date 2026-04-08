import type { NightlifeVenue } from '@/data/cityNightlife'
import { formatApproxForTwo, PRICE_LEVEL_HINT, VIBE_LABELS } from '@/data/cityNightlife'
import { buildMapLinks } from '@/lib/mapsOpen'
import { cn } from '@/lib/cn'
import './NightlifeVenueCard.css'

function priceDots(level: number): string {
  return '₹'.repeat(Math.min(4, Math.max(1, level)))
}

type Props = {
  venue: NightlifeVenue
  live?: boolean
}

export function NightlifeVenueCard({ venue, live }: Props) {
  const maps = buildMapLinks(venue.latitude, venue.longitude, venue.name)

  return (
    <article
      className={cn('nl-card', `nl-card--${venue.vibe}`)}
      itemScope
      itemType="https://schema.org/Restaurant"
    >
      <header className="nl-card__head">
        <div className="nl-card__badges">
          <span className="nl-card__vibe">{VIBE_LABELS[venue.vibe]}</span>
          {live ? <span className="nl-card__live">Live feed</span> : null}
        </div>
        <div className="nl-card__price-row">
          <span className="nl-card__dots" title="Price band">
            {priceDots(venue.priceLevel)}
          </span>
          <span className="nl-card__hint">{PRICE_LEVEL_HINT[venue.priceLevel]}</span>
        </div>
        <h3 className="nl-card__title" itemProp="name">
          {venue.name}
        </h3>
        <p className="nl-card__pitch">{venue.shortPitch}</p>
        <p className="nl-card__approx">{formatApproxForTwo(venue)}</p>
      </header>

      <div className="nl-card__body">
        <div className="nl-card__block">
          <p className="nl-card__label">Cuisine</p>
          <ul className="nl-card__tags">
            {venue.cuisine.map((c) => (
              <li key={c}>{c}</li>
            ))}
          </ul>
        </div>
        <div className="nl-card__block">
          <p className="nl-card__label">Menu picks</p>
          <ul className="nl-card__menu">
            {venue.menuHighlights.map((m) => (
              <li key={m}>{m}</li>
            ))}
          </ul>
        </div>
        <div className="nl-card__block">
          <p className="nl-card__label">Address</p>
          <p className="nl-card__text" itemProp="address">
            {venue.address}
          </p>
          <p className="nl-card__area">{venue.area}</p>
        </div>
        {venue.hours ? (
          <div className="nl-card__block">
            <p className="nl-card__label">Hours</p>
            <p className="nl-card__text">{venue.hours}</p>
          </div>
        ) : null}
      </div>

      <footer className="nl-card__actions">
        {venue.telDigits && venue.phoneDisplay ? (
          <a className="nl-card__btn nl-card__btn--primary" href={`tel:${venue.telDigits}`}>
            Call {venue.phoneDisplay}
          </a>
        ) : null}
        <a
          className="nl-card__btn"
          href={maps.googleMaps}
          target="_blank"
          rel="noopener noreferrer"
        >
          Maps
        </a>
        {venue.website ? (
          <a className="nl-card__btn" href={venue.website} target="_blank" rel="noopener noreferrer">
            Website
          </a>
        ) : null}
        {venue.menuUrl ? (
          <a className="nl-card__btn" href={venue.menuUrl} target="_blank" rel="noopener noreferrer">
            Menu / order
          </a>
        ) : null}
      </footer>
    </article>
  )
}
