import { getSimCardsGuideByCitySlug } from '@/data/simCardsGuide'
import { cn } from '@/lib/cn'
import './CitySimCardsGuide.css'

type Props = {
  citySlug: string
  cityName: string
}

export function CitySimCardsGuide({ citySlug, cityName }: Props) {
  const bundle = getSimCardsGuideByCitySlug(citySlug)

  if (!bundle) {
    return (
      <section id="city-sim-cards" className="city-page__block city-page__block--last city-sim-cards">
        <div className="city-sim-cards__hero">
          <h2 className="city-sim-cards__hero-main">SIM cards</h2>
          <p className="city-sim-cards__hero-sub">Practical info</p>
        </div>
        <p className="city-sim-cards__lead">
          We do not have verified SIM pickup points for <strong>{cityName}</strong> yet.
        </p>
      </section>
    )
  }

  return (
    <section
      id="city-sim-cards"
      className="city-page__block city-page__block--last city-sim-cards"
      aria-labelledby="city-sim-cards-title"
    >
      <div className="city-sim-cards__hero">
        <h2 id="city-sim-cards-title" className="city-sim-cards__hero-main">
          {bundle.intro.title}
        </h2>
        <p className="city-sim-cards__hero-sub">({bundle.intro.eyebrow})</p>
      </div>

      <p className="city-sim-cards__lead">
        {bundle.intro.lead} <span className="city-sim-cards__city">— {cityName}</span>
      </p>

      <div className="city-sim-cards__tiles" aria-label="Quick reference">
        {bundle.quickTiles.map((t) => (
          <div key={t.label} className="city-sim-cards__tile">
            <span className="city-sim-cards__tile-label">{t.label}</span>
            <span className="city-sim-cards__tile-value">{t.value}</span>
          </div>
        ))}
      </div>

      <article className="city-sim-cards__card city-sim-cards__card--checklist" aria-label="Checklist">
        <header className="city-sim-cards__card-head">
          <span className="city-sim-cards__card-emoji" aria-hidden>
            ✅
          </span>
          <div className="city-sim-cards__card-titles">
            <h3 className="city-sim-cards__card-title">Quick checklist</h3>
            <p className="city-sim-cards__card-sub">Before you walk in</p>
          </div>
        </header>
        <ul className="city-sim-cards__bullets">
          {bundle.checklist.map((line) => (
            <li key={line}>{line}</li>
          ))}
        </ul>
      </article>

      <div className="city-sim-cards__grid" aria-label="SIM pickup points">
        {bundle.spots.map((spot) => (
          <article key={spot.id} className={cn('city-sim-cards__card', `city-sim-cards__card--${spot.provider.toLowerCase()}`)}>
            <header className="city-sim-cards__card-head">
              <span className="city-sim-cards__card-emoji" aria-hidden>
                {spot.provider === 'Jio' ? '🔵' : spot.provider === 'Vi' ? '🟠' : spot.provider === 'Airtel' ? '🔴' : '📍'}
              </span>
              <div className="city-sim-cards__card-titles">
                <h3 className="city-sim-cards__card-title">{spot.name}</h3>
                <p className="city-sim-cards__card-sub">
                  {spot.provider} • {spot.area}
                </p>
              </div>
            </header>

            <div className="city-sim-cards__meta">
              <div className="city-sim-cards__meta-row">
                <span className="city-sim-cards__meta-k">Address</span>
                <span className="city-sim-cards__meta-v">{spot.address}</span>
              </div>
              {spot.hours ? (
                <div className="city-sim-cards__meta-row">
                  <span className="city-sim-cards__meta-k">Hours</span>
                  <span className="city-sim-cards__meta-v">{spot.hours}</span>
                </div>
              ) : null}
            </div>

            <div className="city-sim-cards__actions" aria-label="Links">
              {spot.phone ? (
                <a className="city-sim-cards__action" href={`tel:${spot.phone.replace(/\s+/g, '')}`}>
                  Call
                </a>
              ) : null}
              {spot.email ? (
                <a className="city-sim-cards__action" href={`mailto:${spot.email}`}>
                  Email
                </a>
              ) : null}
              {spot.website ? (
                <a className="city-sim-cards__action" href={spot.website} target="_blank" rel="noreferrer">
                  Website
                </a>
              ) : null}
              <a className="city-sim-cards__action city-sim-cards__action--map" href={spot.mapUrl} target="_blank" rel="noreferrer">
                Map
              </a>
            </div>

            {spot.notes && spot.notes.length > 0 ? (
              <ul className="city-sim-cards__notes" aria-label="Notes">
                {spot.notes.map((n) => (
                  <li key={n}>{n}</li>
                ))}
              </ul>
            ) : null}

            {spot.sourceLabel ? (
              <p className="city-sim-cards__source">
                Source:{' '}
                {spot.sourceUrl ? (
                  <a href={spot.sourceUrl} target="_blank" rel="noreferrer">
                    {spot.sourceLabel}
                  </a>
                ) : (
                  spot.sourceLabel
                )}
              </p>
            ) : null}
          </article>
        ))}
      </div>
    </section>
  )
}

