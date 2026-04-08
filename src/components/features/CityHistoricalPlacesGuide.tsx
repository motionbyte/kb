import { getHistoricalPlacesGuideByCitySlug } from '@/data/historicalPlacesGuide'
import './CityHistoricalPlacesGuide.css'

type Props = {
  citySlug: string
  cityName: string
}

export function CityHistoricalPlacesGuide({ citySlug, cityName }: Props) {
  const bundle = getHistoricalPlacesGuideByCitySlug(citySlug)

  if (!bundle) {
    return (
      <section id="city-historical-places" className="city-page__block city-page__block--last city-historical">
        <div className="city-historical__hero">
          <h2 className="city-historical__hero-main">Historical places</h2>
          <p className="city-historical__hero-sub">(Sightseeing & Attractions)</p>
        </div>
        <p className="city-historical__lead">Detailed historical dossier is not available for {cityName} yet.</p>
      </section>
    )
  }

  return (
    <section
      id="city-historical-places"
      className="city-page__block city-page__block--last city-historical"
      aria-labelledby="city-historical-title"
    >
      <div className="city-historical__hero">
        <h2 id="city-historical-title" className="city-historical__hero-main">
          {bundle.intro.title}
        </h2>
        <p className="city-historical__hero-sub">({bundle.intro.eyebrow})</p>
      </div>

      <p className="city-historical__lead">
        {bundle.intro.lead} <span className="city-historical__city">— {cityName}</span>
      </p>

      <div className="city-historical__tiles">
        {bundle.categories.map((c) => (
          <div key={c.label} className="city-historical__tile">
            <span className="city-historical__tile-label">{c.label}</span>
            <span className="city-historical__tile-value">{c.value}</span>
          </div>
        ))}
      </div>

      <div className="city-historical__stack">
        {bundle.monuments.map((m) => (
          <article key={m.id} className="city-historical__card">
            <header className="city-historical__card-head">
              <span className="city-historical__emoji" aria-hidden>
                🏰
              </span>
              <div>
                <h3 className="city-historical__card-title">{m.name}</h3>
                <p className="city-historical__card-sub">
                  {m.typeTag} • {m.era}
                </p>
              </div>
            </header>

            <p className="city-historical__summary">{m.summary}</p>
            <p className="city-historical__meta">
              <strong>Location:</strong> {m.location} •{' '}
              <a href={m.mapUrl} target="_blank" rel="noreferrer">
                Open map
              </a>
            </p>

            <div className="city-historical__section">
              <p className="city-historical__k">Detailed history</p>
              <ul>
                {m.detailedHistory.map((line) => (
                  <li key={line}>{line}</li>
                ))}
              </ul>
            </div>

            <div className="city-historical__section">
              <p className="city-historical__k">Rulers timeline (flow)</p>
              <ol className="city-historical__timeline">
                {m.rulersTimeline.map((t) => (
                  <li key={`${m.id}-${t.period}-${t.ruler}`} className="city-historical__timeline-item">
                    <span className="city-historical__timeline-period">{t.period}</span>
                    <span className="city-historical__timeline-arrow" aria-hidden>
                      →
                    </span>
                    <span className="city-historical__timeline-ruler">{t.ruler}</span>
                    <p className="city-historical__timeline-note">{t.note}</p>
                  </li>
                ))}
              </ol>
            </div>

            <div className="city-historical__section city-historical__section--brave">
              <p className="city-historical__k">Brave stories & legacy</p>
              <ul>
                {m.braveStories.map((line) => (
                  <li key={line}>{line}</li>
                ))}
              </ul>
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}

