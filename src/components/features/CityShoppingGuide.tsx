import { useState } from 'react'
import { getCityShoppingGuide, type ShoppingKind } from '@/data/cityShoppingGuide'
import './CityShoppingGuide.css'

type Props = {
  citySlug: string
  cityName: string
  kind: ShoppingKind
}

function cleanDial(n?: string): string {
  if (!n) return ''
  return n.replace(/[^\d+]/g, '')
}

export function CityShoppingGuide({ citySlug, cityName, kind }: Props) {
  const bundle = getCityShoppingGuide(citySlug, kind)
  const [openId, setOpenId] = useState<string | null>(bundle.spots[0]?.id ?? null)

  return (
    <section className="city-page__block city-page__block--last city-shopping">
      <div className="city-shopping__hero">
        <h2 className="city-shopping__title">{bundle.title}</h2>
        <p className="city-shopping__sub">({bundle.eyebrow})</p>
      </div>

      <p className="city-shopping__lead">
        {bundle.lead} <span className="city-shopping__city">— {cityName}</span>
      </p>

      <div className="city-shopping__tiles">
        {bundle.quickTiles.map((t) => (
          <div key={t.label} className="city-shopping__tile">
            <span className="city-shopping__tile-k">{t.label}</span>
            <span className="city-shopping__tile-v">{t.value}</span>
          </div>
        ))}
      </div>

      <article className="city-shopping__card">
        <h3>Problem</h3>
        <ul>{bundle.problem.map((x) => <li key={x}>{x}</li>)}</ul>
      </article>

      <article className="city-shopping__card">
        <h3>Solution</h3>
        <ul>{bundle.solution.map((x) => <li key={x}>{x}</li>)}</ul>
      </article>

      <article className="city-shopping__card">
        <h3>{bundle.spotsTitle}</h3>
        <p className="city-shopping__muted">{bundle.spotsLead}</p>

        <div className="city-shopping__stack">
          {bundle.spots.map((s) => {
            const isOpen = openId === s.id
            return (
              <article key={s.id} className="city-shopping__spot">
                <button
                  type="button"
                  className={`city-shopping__trigger ${isOpen ? 'is-open' : ''}`}
                  onClick={() => setOpenId((prev) => (prev === s.id ? null : s.id))}
                  aria-expanded={isOpen}
                >
                  <span className="city-shopping__trigger-main">
                    <span className="city-shopping__trigger-title">{s.name}</span>
                    <span className="city-shopping__trigger-sub">
                      {s.area} • {s.typeTag}
                    </span>
                  </span>
                  <span className="city-shopping__chev" aria-hidden>
                    {isOpen ? '▴' : '▾'}
                  </span>
                </button>

                {isOpen ? (
                  <div className="city-shopping__panel">
                    <p className="city-shopping__meta">
                      <strong>Price band:</strong> {s.priceBand}
                    </p>
                    <p className="city-shopping__meta">
                      <strong>Hours:</strong> {s.hours}
                    </p>
                    <p className="city-shopping__meta">
                      <strong>Address:</strong> {s.addressHint}
                    </p>
                    {s.phone ? (
                      <p className="city-shopping__meta">
                        <strong>Phone:</strong> {s.phone}
                      </p>
                    ) : null}

                    <div className="city-shopping__actions">
                      {s.phone ? (
                        <a href={`tel:${cleanDial(s.phone)}`} target="_self" rel="noreferrer">
                          Call
                        </a>
                      ) : null}
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

                    <p className="city-shopping__k">Best buys</p>
                    <ul className="city-shopping__mini">{s.bestBuys.map((x) => <li key={x}>{x}</li>)}</ul>
                    <p className="city-shopping__k">Tips</p>
                    <ul className="city-shopping__mini">{s.tips.map((x) => <li key={x}>{x}</li>)}</ul>
                  </div>
                ) : null}
              </article>
            )
          })}
        </div>
      </article>

      <article className="city-shopping__card">
        <h3>Why this matters</h3>
        <ul>{bundle.why.map((x) => <li key={x}>{x}</li>)}</ul>
      </article>
    </section>
  )
}
