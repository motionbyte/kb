import { useState } from 'react'
import { getCityAttractionsDetailedGuide, type AttractionKind } from '@/data/cityAttractionsDetailedGuide'
import './CityAttractionsDetailedGuide.css'

type Props = {
  citySlug: string
  cityName: string
  kind: AttractionKind
}

export function CityAttractionsDetailedGuide({ citySlug, cityName, kind }: Props) {
  const bundle = getCityAttractionsDetailedGuide(citySlug, kind)
  const [openTirthId, setOpenTirthId] = useState<string | null>(bundle.puranicTirths?.[0]?.id ?? null)
  const [openPlaceId, setOpenPlaceId] = useState<string | null>(bundle.places[0]?.id ?? null)
  return (
    <section className="city-page__block city-page__block--last city-attr-detail">
      <div className="city-attr-detail__hero">
        <h2 className="city-attr-detail__title">{bundle.title}</h2>
        <p className="city-attr-detail__sub">({bundle.eyebrow})</p>
      </div>

      <p className="city-attr-detail__lead">
        {bundle.lead} <span className="city-attr-detail__city">— {cityName}</span>
      </p>

      <div className="city-attr-detail__tiles">
        {bundle.categoryTiles.map((t) => (
          <div key={t.label} className="city-attr-detail__tile">
            <span className="city-attr-detail__tile-k">{t.label}</span>
            <span className="city-attr-detail__tile-v">{t.value}</span>
          </div>
        ))}
      </div>

      {bundle.puranicTirths && bundle.puranicTirths.length > 0 ? (
        <article className="city-attr-detail__card city-attr-detail__card--tirth">
          <header className="city-attr-detail__head">
            <span className="city-attr-detail__emoji">🕉️</span>
            <div>
              <h3 className="city-attr-detail__name">Puranic tirths ({cityName} region)</h3>
              <p className="city-attr-detail__meta">Scriptural context + practical route guidance</p>
            </div>
          </header>
          <div className="city-attr-detail__tirth-grid">
            {bundle.puranicTirths.map((t) => (
              <article key={t.id} className="city-attr-detail__card city-attr-detail__card--accordion">
                <button
                  type="button"
                  className={`city-attr-detail__trigger ${openTirthId === t.id ? 'is-open' : ''}`}
                  onClick={() => setOpenTirthId((prev) => (prev === t.id ? null : t.id))}
                  aria-expanded={openTirthId === t.id}
                >
                  <span className="city-attr-detail__trigger-left">
                    <span className="city-attr-detail__emoji" aria-hidden>
                      🕉️
                    </span>
                    <span className="city-attr-detail__name">{t.name}</span>
                  </span>
                  <span className="city-attr-detail__trigger-arrow" aria-hidden>
                    {openTirthId === t.id ? '▴' : '▾'}
                  </span>
                </button>
                {openTirthId === t.id ? (
                  <div className="city-attr-detail__panel">
                    <p className="city-attr-detail__meta city-attr-detail__meta--panel-start">
                      <strong>Location:</strong> {t.location}
                    </p>
                    <p className="city-attr-detail__summary">{t.puranicContext}</p>
                    <p className="city-attr-detail__meta">
                      <a href={t.mapUrl} target="_blank" rel="noreferrer">
                        Open tirth map
                      </a>
                    </p>
                    <ul className="city-attr-detail__tirth-notes">
                      {t.practicalNotes.map((x) => (
                        <li key={x}>{x}</li>
                      ))}
                    </ul>
                  </div>
                ) : null}
              </article>
            ))}
          </div>
        </article>
      ) : null}

      <div className="city-attr-detail__stack">
        {bundle.places.map((p) => (
          <article key={p.id} className="city-attr-detail__card city-attr-detail__card--accordion">
            <button
              type="button"
              className={`city-attr-detail__trigger ${openPlaceId === p.id ? 'is-open' : ''}`}
              onClick={() => setOpenPlaceId((prev) => (prev === p.id ? null : p.id))}
              aria-expanded={openPlaceId === p.id}
            >
              <span className="city-attr-detail__trigger-left">
                <span className="city-attr-detail__emoji" aria-hidden>
                  🧭
                </span>
                <span>
                  <span className="city-attr-detail__name">{p.name}</span>
                  <span className="city-attr-detail__meta city-attr-detail__meta--trigger">
                    {p.typeTag} • {p.era}
                  </span>
                </span>
              </span>
              <span className="city-attr-detail__trigger-arrow" aria-hidden>
                {openPlaceId === p.id ? '▴' : '▾'}
              </span>
            </button>

            {openPlaceId === p.id ? (
              <div className="city-attr-detail__panel">
                <p className="city-attr-detail__summary">{p.summary}</p>
                <p className="city-attr-detail__meta">
                  <strong>Location:</strong> {p.location} •{' '}
                  <a href={p.mapUrl} target="_blank" rel="noreferrer">
                    Map
                  </a>
                </p>

                <div className="city-attr-detail__box">
                  <p className="city-attr-detail__k">Detailed history</p>
                  <ul>{p.history.map((x) => <li key={x}>{x}</li>)}</ul>
                </div>

                <div className="city-attr-detail__box city-attr-detail__box--story">
                  <p className="city-attr-detail__k">Stories & legacy</p>
                  <ul>{p.stories.map((x) => <li key={x}>{x}</li>)}</ul>
                </div>
              </div>
            ) : null}
          </article>
        ))}
      </div>
    </section>
  )
}

