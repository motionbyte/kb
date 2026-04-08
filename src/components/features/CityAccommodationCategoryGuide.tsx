import {
  getAccommodationCategoryGuideByCitySlug,
  type AccommodationCategory,
} from '@/data/accommodationCategoryGuide'
import './CityAccommodationCategoryGuide.css'

type Props = {
  citySlug: string
  cityName: string
  category: AccommodationCategory
}

export function CityAccommodationCategoryGuide({ citySlug, cityName, category }: Props) {
  const bundle = getAccommodationCategoryGuideByCitySlug(citySlug, category)

  return (
    <section className="city-page__block city-page__block--last city-accom-cat" aria-labelledby="city-accom-cat-title">
      <div className="city-accom-cat__hero">
        <h2 id="city-accom-cat-title" className="city-accom-cat__hero-main">
          {bundle.title}
        </h2>
        <p className="city-accom-cat__hero-sub">({bundle.eyebrow})</p>
      </div>

      <p className="city-accom-cat__lead">
        {bundle.lead} <span className="city-accom-cat__city">— {cityName}</span>
      </p>

      <div className="city-accom-cat__tiles">
        {bundle.quickTiles.map((t) => (
          <div key={t.label} className="city-accom-cat__tile">
            <span className="city-accom-cat__tile-label">{t.label}</span>
            <span className="city-accom-cat__tile-value">{t.value}</span>
          </div>
        ))}
      </div>

      <article className="city-accom-cat__card">
        <header className="city-accom-cat__card-head">
          <span className="city-accom-cat__card-emoji">🔴</span>
          <div>
            <h3 className="city-accom-cat__card-title">Problem</h3>
          </div>
        </header>
        <ul className="city-accom-cat__bullets">
          {bundle.problem.map((x) => (
            <li key={x}>{x}</li>
          ))}
        </ul>
      </article>

      <article className="city-accom-cat__card">
        <header className="city-accom-cat__card-head">
          <span className="city-accom-cat__card-emoji">✅</span>
          <div>
            <h3 className="city-accom-cat__card-title">Solution</h3>
          </div>
        </header>
        <ul className="city-accom-cat__bullets">
          {bundle.solution.map((x) => (
            <li key={x}>{x}</li>
          ))}
        </ul>
      </article>

      <article className="city-accom-cat__card city-accom-cat__card--list">
        <header className="city-accom-cat__card-head">
          <span className="city-accom-cat__card-emoji">📍</span>
          <div>
            <h3 className="city-accom-cat__card-title">{bundle.spotsTitle}</h3>
            <p className="city-accom-cat__sub">{bundle.spotsLead}</p>
          </div>
        </header>

        <div className="city-accom-cat__grid">
          {bundle.spots.map((s) => (
            <article key={s.id} className="city-accom-cat__spot">
              <h4 className="city-accom-cat__spot-name">{s.name}</h4>
              <p className="city-accom-cat__spot-meta">
                {s.area} • {s.typeTag} • {s.budgetBand}
              </p>
              <p className="city-accom-cat__spot-price">{s.approxPrice}</p>
              <p className="city-accom-cat__spot-address">{s.addressHint}</p>
              {s.phone ? <p className="city-accom-cat__spot-contact">Phone: {s.phone}</p> : null}
              {s.email ? <p className="city-accom-cat__spot-contact">Email: {s.email}</p> : null}
              {s.safetyTag ? <p className="city-accom-cat__spot-safe">Safety: {s.safetyTag}</p> : null}
              <div className="city-accom-cat__actions">
                {s.phone ? <a href={`tel:${s.phone.replace(/[^\d+]/g, '')}`}>Call</a> : null}
                {s.website ? (
                  <a href={s.website} target="_blank" rel="noreferrer">
                    Website
                  </a>
                ) : null}
                <a href={s.mapUrl} target="_blank" rel="noreferrer">
                  Map
                </a>
                <a href={s.reviewsUrl} target="_blank" rel="noreferrer">
                  Reviews
                </a>
              </div>
              <p className="city-accom-cat__k">Highlights</p>
              <ul className="city-accom-cat__mini">
                {s.highlights.map((x) => (
                  <li key={x}>{x}</li>
                ))}
              </ul>
              <p className="city-accom-cat__k city-accom-cat__k--warn">Watch out</p>
              <ul className="city-accom-cat__mini city-accom-cat__mini--warn">
                {s.caution.map((x) => (
                  <li key={x}>{x}</li>
                ))}
              </ul>
              {s.sourceLabel ? (
                <p className="city-accom-cat__source">
                  Source:{' '}
                  {s.sourceUrl ? (
                    <a href={s.sourceUrl} target="_blank" rel="noreferrer">
                      {s.sourceLabel}
                    </a>
                  ) : (
                    s.sourceLabel
                  )}
                </p>
              ) : null}
            </article>
          ))}
        </div>
      </article>

      <article className="city-accom-cat__card">
        <header className="city-accom-cat__card-head">
          <span className="city-accom-cat__card-emoji">💡</span>
          <div>
            <h3 className="city-accom-cat__card-title">Why this matters</h3>
          </div>
        </header>
        <ul className="city-accom-cat__bullets">
          {bundle.why.map((x) => (
            <li key={x}>{x}</li>
          ))}
        </ul>
      </article>
    </section>
  )
}

