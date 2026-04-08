import { getEmergencyContactsGuideByCitySlug } from '@/data/emergencyContactsGuide'
import './CityEmergencyContactsGuide.css'

type Props = {
  citySlug: string
  cityName: string
}

function cleanDial(n: string) {
  return n.replace(/[^\d+]/g, '')
}

export function CityEmergencyContactsGuide({ citySlug, cityName }: Props) {
  const bundle = getEmergencyContactsGuideByCitySlug(citySlug)

  return (
    <section
      id="city-emergency-contacts"
      className="city-page__block city-page__block--last city-emergency"
      aria-labelledby="city-emergency-title"
    >
      <div className="city-emergency__hero">
        <h2 id="city-emergency-title" className="city-emergency__hero-main">
          {bundle.intro.title}
        </h2>
        <p className="city-emergency__hero-sub">({bundle.intro.eyebrow})</p>
      </div>

      <p className="city-emergency__lead">
        {bundle.intro.lead} <span className="city-emergency__city">— {cityName}</span>
      </p>

      <div className="city-emergency__tiles" aria-label="Quick reference">
        {bundle.quickTiles.map((t) => (
          <div key={t.label} className="city-emergency__tile">
            <span className="city-emergency__tile-label">{t.label}</span>
            <span className="city-emergency__tile-value">{t.value}</span>
          </div>
        ))}
      </div>

      <article className="city-emergency__card">
        <header className="city-emergency__card-head">
          <span className="city-emergency__card-emoji" aria-hidden>
            🔴
          </span>
          <div className="city-emergency__card-titles">
            <h3 className="city-emergency__card-title">Problem</h3>
            <p className="city-emergency__card-sub">Why tourists get stuck</p>
          </div>
        </header>
        <ul className="city-emergency__bullets">
          {bundle.problems.map((x) => (
            <li key={x}>{x}</li>
          ))}
        </ul>
      </article>

      <article className="city-emergency__card city-emergency__card--numbers">
        <header className="city-emergency__card-head">
          <span className="city-emergency__card-emoji" aria-hidden>
            ✅
          </span>
          <div className="city-emergency__card-titles">
            <h3 className="city-emergency__card-title">{bundle.allIndiaNumbers.title}</h3>
            <p className="city-emergency__card-sub">One‑tap call buttons</p>
          </div>
        </header>

        <p className="city-emergency__muted">{bundle.allIndiaNumbers.lead}</p>

        <div className="city-emergency__button-grid" aria-label="Emergency call buttons">
          {bundle.allIndiaNumbers.buttons.map((b) => (
            <a
              key={b.id}
              className="city-emergency__btn"
              href={`tel:${cleanDial(b.number)}`}
              aria-label={b.ariaLabel ?? `Call ${b.number}`}
              title={`Call ${b.number}`}
            >
              <span className="city-emergency__btn-k">{b.label}</span>
              <span className="city-emergency__btn-v">{b.number}</span>
              {b.note ? <span className="city-emergency__btn-note">{b.note}</span> : null}
            </a>
          ))}
        </div>

        <ul className="city-emergency__notes" aria-label="Call tips">
          {bundle.allIndiaNumbers.tips.map((x) => (
            <li key={x}>{x}</li>
          ))}
        </ul>
      </article>

      <article className="city-emergency__card">
        <header className="city-emergency__card-head">
          <span className="city-emergency__card-emoji" aria-hidden>
            🧭
          </span>
          <div className="city-emergency__card-titles">
            <h3 className="city-emergency__card-title">{bundle.touristHelp.title}</h3>
            <p className="city-emergency__card-sub">Tourist support</p>
          </div>
        </header>

        <p className="city-emergency__muted">{bundle.touristHelp.lead}</p>

        <div className="city-emergency__button-grid" aria-label="Tourist help call buttons">
          {bundle.touristHelp.buttons.map((b) => (
            <a
              key={b.id}
              className="city-emergency__btn city-emergency__btn--soft"
              href={`tel:${cleanDial(b.number)}`}
              aria-label={b.ariaLabel ?? `Call ${b.number}`}
              title={`Call ${b.number}`}
            >
              <span className="city-emergency__btn-k">{b.label}</span>
              <span className="city-emergency__btn-v">{b.number}</span>
              {b.note ? <span className="city-emergency__btn-note">{b.note}</span> : null}
            </a>
          ))}
        </div>

        <ul className="city-emergency__bullets">
          {bundle.touristHelp.tips.map((x) => (
            <li key={x}>{x}</li>
          ))}
        </ul>
      </article>

      <article className="city-emergency__card">
        <header className="city-emergency__card-head">
          <span className="city-emergency__card-emoji" aria-hidden>
            🏛️
          </span>
          <div className="city-emergency__card-titles">
            <h3 className="city-emergency__card-title">{bundle.embassyGuidance.title}</h3>
            <p className="city-emergency__card-sub">Passport loss, legal help</p>
          </div>
        </header>
        <p className="city-emergency__muted">{bundle.embassyGuidance.lead}</p>
        <ol className="city-emergency__steps">
          {bundle.embassyGuidance.steps.map((x) => (
            <li key={x}>{x}</li>
          ))}
        </ol>
      </article>

      <article className="city-emergency__card city-emergency__card--why">
        <header className="city-emergency__card-head">
          <span className="city-emergency__card-emoji" aria-hidden>
            💡
          </span>
          <div className="city-emergency__card-titles">
            <h3 className="city-emergency__card-title">Why this matters</h3>
            <p className="city-emergency__card-sub">A literal life saver</p>
          </div>
        </header>
        <ul className="city-emergency__bullets">
          {bundle.whyItMatters.map((x) => (
            <li key={x}>{x}</li>
          ))}
        </ul>
      </article>
    </section>
  )
}

