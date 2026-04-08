import { getHotelsGuideByCitySlug } from '@/data/hotelsGuide'
import './CityHotelsGuide.css'

type Props = {
  citySlug: string
  cityName: string
}

function cleanDial(n?: string) {
  if (!n) return ''
  return n.replace(/[^\d+]/g, '')
}

function bandLabel(b: '$' | '$$' | '$$$' | '$$$$') {
  if (b === '$') return 'Budget'
  if (b === '$$') return 'Mid-range'
  if (b === '$$$') return 'Premium'
  return 'Luxury'
}

export function CityHotelsGuide({ citySlug, cityName }: Props) {
  const bundle = getHotelsGuideByCitySlug(citySlug)

  return (
    <section
      id="city-hotels"
      className="city-page__block city-page__block--last city-hotels"
      aria-labelledby="city-hotels-title"
    >
      <div className="city-hotels__hero">
        <h2 id="city-hotels-title" className="city-hotels__hero-main">
          {bundle.intro.title}
        </h2>
        <p className="city-hotels__hero-sub">({bundle.intro.eyebrow})</p>
      </div>

      <p className="city-hotels__lead">
        {bundle.intro.lead} <span className="city-hotels__city">— {cityName}</span>
      </p>

      <div className="city-hotels__tiles" aria-label="Quick reference">
        {bundle.quickTiles.map((t) => (
          <div key={t.label} className="city-hotels__tile">
            <span className="city-hotels__tile-label">{t.label}</span>
            <span className="city-hotels__tile-value">{t.value}</span>
          </div>
        ))}
      </div>

      <article className="city-hotels__card">
        <header className="city-hotels__card-head">
          <span className="city-hotels__card-emoji" aria-hidden>
            🔴
          </span>
          <div className="city-hotels__card-titles">
            <h3 className="city-hotels__card-title">Problem</h3>
            <p className="city-hotels__card-sub">Where foreigners get trapped</p>
          </div>
        </header>
        <ul className="city-hotels__bullets">
          {bundle.problem.map((x) => (
            <li key={x}>{x}</li>
          ))}
        </ul>
      </article>

      <article className="city-hotels__card">
        <header className="city-hotels__card-head">
          <span className="city-hotels__card-emoji" aria-hidden>
            ✅
          </span>
          <div className="city-hotels__card-titles">
            <h3 className="city-hotels__card-title">Solution</h3>
            <p className="city-hotels__card-sub">Clarity + safety + honest signals</p>
          </div>
        </header>
        <ul className="city-hotels__bullets">
          {bundle.solve.map((x) => (
            <li key={x}>{x}</li>
          ))}
        </ul>
      </article>

      <article className="city-hotels__card">
        <header className="city-hotels__card-head">
          <span className="city-hotels__card-emoji" aria-hidden>
            🧾
          </span>
          <div className="city-hotels__card-titles">
            <h3 className="city-hotels__card-title">{bundle.bookingRules.title}</h3>
            <p className="city-hotels__card-sub">No hidden costs</p>
          </div>
        </header>

        <div className="city-hotels__split">
          <div className="city-hotels__split-col city-hotels__split-col--do">
            <p className="city-hotels__split-label">Do</p>
            <ul>
              {bundle.bookingRules.do.map((x) => (
                <li key={x}>{x}</li>
              ))}
            </ul>
          </div>
          <div className="city-hotels__split-col city-hotels__split-col--avoid">
            <p className="city-hotels__split-label">Avoid</p>
            <ul>
              {bundle.bookingRules.avoid.map((x) => (
                <li key={x}>{x}</li>
              ))}
            </ul>
          </div>
        </div>
      </article>

      <article className="city-hotels__card city-hotels__card--list">
        <header className="city-hotels__card-head">
          <span className="city-hotels__card-emoji" aria-hidden>
            🏨
          </span>
          <div className="city-hotels__card-titles">
            <h3 className="city-hotels__card-title">{bundle.verified.title}</h3>
            <p className="city-hotels__card-sub">Verified + easy to check</p>
          </div>
        </header>

        <p className="city-hotels__muted">{bundle.verified.lead}</p>

        <div className="city-hotels__grid" aria-label="Hotel list">
          {bundle.verified.hotels.map((h) => (
            <article key={h.id} className="city-hotels__hotel">
              <header className="city-hotels__hotel-head">
                <div className="city-hotels__hotel-titles">
                  <h4 className="city-hotels__hotel-name">{h.name}</h4>
                  <p className="city-hotels__hotel-sub">
                    {h.area} • {bandLabel(h.priceBand)} {h.priceBand}
                  </p>
                </div>
              </header>

              <div className="city-hotels__hotel-meta">
                <p className="city-hotels__hotel-address">{h.address}</p>
                {h.phone ? <p className="city-hotels__hotel-line">Phone: {h.phone}</p> : null}
                {h.email ? <p className="city-hotels__hotel-line">Email: {h.email}</p> : null}
              </div>

              <div className="city-hotels__actions" aria-label="Links">
                {h.phone ? (
                  <a className="city-hotels__action city-hotels__action--call" href={`tel:${cleanDial(h.phone)}`}>
                    Call
                  </a>
                ) : null}
                {h.website ? (
                  <a className="city-hotels__action" href={h.website} target="_blank" rel="noreferrer">
                    Website
                  </a>
                ) : null}
                <a className="city-hotels__action city-hotels__action--map" href={h.mapUrl} target="_blank" rel="noreferrer">
                  Map
                </a>
                <a className="city-hotels__action city-hotels__action--reviews" href={h.reviewsUrl} target="_blank" rel="noreferrer">
                  Reviews & photos
                </a>
              </div>

              <div className="city-hotels__two-col">
                <div>
                  <p className="city-hotels__k">Why stay here</p>
                  <ul className="city-hotels__mini">
                    {h.whyStayHere.map((x) => (
                      <li key={x}>{x}</li>
                    ))}
                  </ul>
                </div>
                <div>
                  <p className="city-hotels__k city-hotels__k--warn">Watch out</p>
                  <ul className="city-hotels__mini city-hotels__mini--warn">
                    {h.watchOut.map((x) => (
                      <li key={x}>{x}</li>
                    ))}
                  </ul>
                </div>
              </div>

              {h.sourceLabel ? (
                <p className="city-hotels__source">
                  Source:{' '}
                  {h.sourceUrl ? (
                    <a href={h.sourceUrl} target="_blank" rel="noreferrer">
                      {h.sourceLabel}
                    </a>
                  ) : (
                    h.sourceLabel
                  )}
                </p>
              ) : null}
            </article>
          ))}
        </div>
      </article>

      <article className="city-hotels__card city-hotels__card--why">
        <header className="city-hotels__card-head">
          <span className="city-hotels__card-emoji" aria-hidden>
            💡
          </span>
          <div className="city-hotels__card-titles">
            <h3 className="city-hotels__card-title">Why</h3>
            <p className="city-hotels__card-sub">Retention + trust</p>
          </div>
        </header>
        <ul className="city-hotels__bullets">
          {bundle.why.map((x) => (
            <li key={x}>{x}</li>
          ))}
        </ul>
      </article>
    </section>
  )
}

