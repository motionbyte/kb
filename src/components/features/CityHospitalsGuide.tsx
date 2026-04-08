import { getHospitalsGuideByCitySlug } from '@/data/hospitalsGuide'
import './CityHospitalsGuide.css'

type Props = {
  citySlug: string
  cityName: string
}

function cleanDial(n?: string) {
  if (!n) return ''
  return n.replace(/[^\d+]/g, '')
}

export function CityHospitalsGuide({ citySlug, cityName }: Props) {
  const bundle = getHospitalsGuideByCitySlug(citySlug)

  return (
    <section
      id="city-hospitals"
      className="city-page__block city-page__block--last city-hospitals"
      aria-labelledby="city-hospitals-title"
    >
      <div className="city-hospitals__hero">
        <h2 id="city-hospitals-title" className="city-hospitals__hero-main">
          {bundle.intro.title}
        </h2>
        <p className="city-hospitals__hero-sub">({bundle.intro.eyebrow})</p>
      </div>

      <p className="city-hospitals__lead">
        {bundle.intro.lead} <span className="city-hospitals__city">— {cityName}</span>
      </p>

      <div className="city-hospitals__tiles" aria-label="Quick reference">
        {bundle.quickTiles.map((t) => (
          <div key={t.label} className="city-hospitals__tile">
            <span className="city-hospitals__tile-label">{t.label}</span>
            <span className="city-hospitals__tile-value">{t.value}</span>
          </div>
        ))}
      </div>

      <article className="city-hospitals__card">
        <header className="city-hospitals__card-head">
          <span className="city-hospitals__card-emoji" aria-hidden>
            🔴
          </span>
          <div className="city-hospitals__card-titles">
            <h3 className="city-hospitals__card-title">Problem</h3>
            <p className="city-hospitals__card-sub">Why travellers choose wrong</p>
          </div>
        </header>
        <ul className="city-hospitals__bullets">
          {bundle.problem.map((x) => (
            <li key={x}>{x}</li>
          ))}
        </ul>
      </article>

      <article className="city-hospitals__card">
        <header className="city-hospitals__card-head">
          <span className="city-hospitals__card-emoji" aria-hidden>
            🧭
          </span>
          <div className="city-hospitals__card-titles">
            <h3 className="city-hospitals__card-title">Where to go (fast chooser)</h3>
            <p className="city-hospitals__card-sub">Emergency vs urgent vs routine</p>
          </div>
        </header>
        <div className="city-hospitals__chooser">
          {bundle.chooser.map((c) => (
            <article key={c.id} className="city-hospitals__chooser-card">
              <h4 className="city-hospitals__chooser-title">{c.title}</h4>
              <p className="city-hospitals__chooser-when">{c.when}</p>
              <ul className="city-hospitals__chooser-list">
                {c.goTo.map((x) => (
                  <li key={x}>{x}</li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </article>

      <article className="city-hospitals__card">
        <header className="city-hospitals__card-head">
          <span className="city-hospitals__card-emoji" aria-hidden>
            🏥
          </span>
          <div className="city-hospitals__card-titles">
            <h3 className="city-hospitals__card-title">{bundle.govtVsPrivate.title}</h3>
            <p className="city-hospitals__card-sub">Know what you’re walking into</p>
          </div>
        </header>

        <div className="city-hospitals__split">
          <div className="city-hospitals__split-col city-hospitals__split-col--govt">
            <p className="city-hospitals__split-label">{bundle.govtVsPrivate.left.title}</p>
            <ul>
              {bundle.govtVsPrivate.left.bullets.map((x) => (
                <li key={x}>{x}</li>
              ))}
            </ul>
          </div>
          <div className="city-hospitals__split-col city-hospitals__split-col--private">
            <p className="city-hospitals__split-label">{bundle.govtVsPrivate.right.title}</p>
            <ul>
              {bundle.govtVsPrivate.right.bullets.map((x) => (
                <li key={x}>{x}</li>
              ))}
            </ul>
          </div>
        </div>
      </article>

      <article className="city-hospitals__card">
        <header className="city-hospitals__card-head">
          <span className="city-hospitals__card-emoji" aria-hidden>
            💸
          </span>
          <div className="city-hospitals__card-titles">
            <h3 className="city-hospitals__card-title">{bundle.costBands.title}</h3>
            <p className="city-hospitals__card-sub">Set expectations, avoid panic‑spend</p>
          </div>
        </header>

        <p className="city-hospitals__muted">{bundle.costBands.disclaimer}</p>
        <div className="city-hospitals__cost-tiles" aria-label="Cost bands">
          {bundle.costBands.bands.map((b) => (
            <div key={b.label} className="city-hospitals__cost-tile">
              <p className="city-hospitals__cost-label">{b.label}</p>
              <p className="city-hospitals__cost-range">{b.range}</p>
              {b.note ? <p className="city-hospitals__cost-note">{b.note}</p> : null}
            </div>
          ))}
        </div>

        <div className="city-hospitals__redflags">
          <p className="city-hospitals__redflags-title">Overcharging red flags</p>
          <ul>
            {bundle.costBands.overchargeRedFlags.map((x) => (
              <li key={x}>{x}</li>
            ))}
          </ul>
        </div>
      </article>

      <article className="city-hospitals__card city-hospitals__card--list">
        <header className="city-hospitals__card-head">
          <span className="city-hospitals__card-emoji" aria-hidden>
            ✅
          </span>
          <div className="city-hospitals__card-titles">
            <h3 className="city-hospitals__card-title">{bundle.verifiedList.title}</h3>
            <p className="city-hospitals__card-sub">Verified city list</p>
          </div>
        </header>

        <p className="city-hospitals__muted">{bundle.verifiedList.lead}</p>

        <div className="city-hospitals__grid" aria-label="Hospital list">
          {bundle.verifiedList.hospitals.map((h) => (
            <article key={h.id} className={`city-hospitals__hospital city-hospitals__hospital--${h.kind.toLowerCase()}`}>
              <header className="city-hospitals__hospital-head">
                <span className="city-hospitals__hospital-badge" aria-hidden>
                  {h.kind === 'Government' ? '🏛️' : '🩺'}
                </span>
                <div className="city-hospitals__hospital-titles">
                  <h4 className="city-hospitals__hospital-name">{h.name}</h4>
                  <p className="city-hospitals__hospital-sub">
                    {h.kind} • {h.area} • English: {h.englishSupportLikely}
                  </p>
                </div>
              </header>

              <div className="city-hospitals__hospital-meta">
                <p className="city-hospitals__hospital-address">{h.address}</p>
                {h.phone ? <p className="city-hospitals__hospital-line">Phone: {h.phone}</p> : null}
                {h.emergencyPhone ? (
                  <p className="city-hospitals__hospital-line">Emergency: {h.emergencyPhone}</p>
                ) : null}
                {h.email ? <p className="city-hospitals__hospital-line">Email: {h.email}</p> : null}
              </div>

              <div className="city-hospitals__actions" aria-label="Links">
                {h.emergencyPhone ? (
                  <a className="city-hospitals__action city-hospitals__action--urgent" href={`tel:${cleanDial(h.emergencyPhone)}`}>
                    Call emergency
                  </a>
                ) : h.phone ? (
                  <a className="city-hospitals__action city-hospitals__action--urgent" href={`tel:${cleanDial(h.phone)}`}>
                    Call
                  </a>
                ) : null}
                {h.website ? (
                  <a className="city-hospitals__action" href={h.website} target="_blank" rel="noreferrer">
                    Website
                  </a>
                ) : null}
                {h.email ? (
                  <a className="city-hospitals__action" href={`mailto:${h.email}`}>
                    Email
                  </a>
                ) : null}
                <a className="city-hospitals__action city-hospitals__action--map" href={h.mapUrl} target="_blank" rel="noreferrer">
                  Map
                </a>
              </div>

              {h.notes && h.notes.length > 0 ? (
                <ul className="city-hospitals__notes" aria-label="Notes">
                  {h.notes.map((n) => (
                    <li key={n}>{n}</li>
                  ))}
                </ul>
              ) : null}

              {h.sourceLabel ? (
                <p className="city-hospitals__source">
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

      <article className="city-hospitals__card city-hospitals__card--why">
        <header className="city-hospitals__card-head">
          <span className="city-hospitals__card-emoji" aria-hidden>
            💡
          </span>
          <div className="city-hospitals__card-titles">
            <h3 className="city-hospitals__card-title">Why this matters</h3>
            <p className="city-hospitals__card-sub">Health = trust</p>
          </div>
        </header>
        <ul className="city-hospitals__bullets">
          {bundle.whyItMatters.map((x) => (
            <li key={x}>{x}</li>
          ))}
        </ul>
      </article>
    </section>
  )
}

