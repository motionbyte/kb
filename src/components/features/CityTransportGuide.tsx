import { useState } from 'react'
import { getCityTransportGuide, type TransportKind } from '@/data/cityTransportGuide'
import './CityTransportGuide.css'

type Props = {
  citySlug: string
  cityName: string
  kind: TransportKind
}

function cleanDial(n?: string): string {
  if (!n) return ''
  return n.replace(/[^\d+]/g, '')
}

export function CityTransportGuide({ citySlug, cityName, kind }: Props) {
  const bundle = getCityTransportGuide(citySlug, kind)
  const [openId, setOpenId] = useState<string | null>(bundle.options[0]?.id ?? null)

  return (
    <section className="city-page__block city-page__block--last city-transport">
      <div className="city-transport__hero">
        <h2 className="city-transport__title">{bundle.title}</h2>
        <p className="city-transport__sub">({bundle.eyebrow})</p>
      </div>

      <p className="city-transport__lead">
        {bundle.lead} <span className="city-transport__city">— {cityName}</span>
      </p>

      <div className="city-transport__tiles">
        {bundle.quickTiles.map((t) => (
          <div key={t.label} className="city-transport__tile">
            <span className="city-transport__tile-k">{t.label}</span>
            <span className="city-transport__tile-v">{t.value}</span>
          </div>
        ))}
      </div>

      <article className="city-transport__card">
        <h3>Problem</h3>
        <ul>{bundle.problem.map((x) => <li key={x}>{x}</li>)}</ul>
      </article>

      <article className="city-transport__card">
        <h3>Solution</h3>
        <ul>{bundle.solution.map((x) => <li key={x}>{x}</li>)}</ul>
      </article>

      <article className="city-transport__card">
        <h3>{bundle.optionsTitle}</h3>
        <p className="city-transport__muted">{bundle.optionsLead}</p>

        <div className="city-transport__stack">
          {bundle.options.map((o) => {
            const isOpen = openId === o.id
            return (
              <article key={o.id} className="city-transport__option">
                <button
                  type="button"
                  className={`city-transport__trigger ${isOpen ? 'is-open' : ''}`}
                  onClick={() => setOpenId((prev) => (prev === o.id ? null : o.id))}
                  aria-expanded={isOpen}
                >
                  <span className="city-transport__trigger-main">
                    <span className="city-transport__trigger-title">{o.name}</span>
                    <span className="city-transport__trigger-sub">
                      {o.area} • {o.typeTag}
                    </span>
                  </span>
                  <span className="city-transport__chev" aria-hidden>
                    {isOpen ? '▴' : '▾'}
                  </span>
                </button>

                {isOpen ? (
                  <div className="city-transport__panel">
                    <p className="city-transport__meta">
                      <strong>Approx fare:</strong> {o.approxFare}
                    </p>
                    <p className="city-transport__meta">
                      <strong>Timings:</strong> {o.timings}
                    </p>
                    {o.phone ? (
                      <p className="city-transport__meta">
                        <strong>Phone:</strong> {o.phone}
                      </p>
                    ) : null}

                    <div className="city-transport__actions">
                      {o.phone ? (
                        <a href={`tel:${cleanDial(o.phone)}`} target="_self" rel="noreferrer">
                          Call
                        </a>
                      ) : null}
                      {o.website ? (
                        <a href={o.website} target="_blank" rel="noreferrer">
                          Website
                        </a>
                      ) : null}
                      <a href={o.mapUrl} target="_blank" rel="noreferrer">
                        Map
                      </a>
                    </div>

                    <p className="city-transport__k">Tips</p>
                    <ul className="city-transport__mini">{o.tips.map((x) => <li key={x}>{x}</li>)}</ul>
                    <p className="city-transport__k">Watch out</p>
                    <ul className="city-transport__mini">{o.watchOut.map((x) => <li key={x}>{x}</li>)}</ul>
                  </div>
                ) : null}
              </article>
            )
          })}
        </div>
      </article>

      <article className="city-transport__card">
        <h3>Why this matters</h3>
        <ul>{bundle.why.map((x) => <li key={x}>{x}</li>)}</ul>
      </article>
    </section>
  )
}
