import { getInternetGuideByCitySlug } from '@/data/internetGuide'
import './CityInternetGuide.css'

type Props = {
  citySlug: string
  cityName: string
}

function carrierBadge(id: string) {
  if (id === 'jio') return '🔵'
  if (id === 'airtel') return '🔴'
  if (id === 'vi') return '🟠'
  return '📶'
}

export function CityInternetGuide({ citySlug, cityName }: Props) {
  const bundle = getInternetGuideByCitySlug(citySlug)

  return (
    <section
      id="city-internet"
      className="city-page__block city-page__block--last city-internet"
      aria-labelledby="city-internet-title"
    >
      <div className="city-internet__hero">
        <h2 id="city-internet-title" className="city-internet__hero-main">
          {bundle.intro.title}
        </h2>
        <p className="city-internet__hero-sub">({bundle.intro.eyebrow})</p>
      </div>

      <p className="city-internet__lead">
        {bundle.intro.lead} <span className="city-internet__city">— {cityName}</span>
      </p>

      <div className="city-internet__tiles" aria-label="Quick reference">
        {bundle.quickTiles.map((t) => (
          <div key={t.label} className="city-internet__tile">
            <span className="city-internet__tile-label">{t.label}</span>
            <span className="city-internet__tile-value">{t.value}</span>
          </div>
        ))}
      </div>

      <article className="city-internet__card city-internet__card--verdict" aria-label="Best networks">
        <header className="city-internet__card-head">
          <span className="city-internet__card-emoji" aria-hidden>
            📡
          </span>
          <div className="city-internet__card-titles">
            <h3 className="city-internet__card-title">Best networks</h3>
            <p className="city-internet__card-sub">Choose fast, safe, simple</p>
          </div>
        </header>

        <p className="city-internet__verdict">{bundle.bestNetworks.verdict}</p>
        <ul className="city-internet__notes">
          {bundle.bestNetworks.cityNotes.map((n) => (
            <li key={n}>{n}</li>
          ))}
        </ul>

        <div className="city-internet__carrier-grid" aria-label="Carrier comparison">
          {bundle.bestNetworks.carriers.map((c) => (
            <article key={c.id} className={`city-internet__carrier city-internet__carrier--${c.id}`}>
              <header className="city-internet__carrier-head">
                <span className="city-internet__carrier-badge" aria-hidden>
                  {carrierBadge(c.id)}
                </span>
                <div className="city-internet__carrier-titles">
                  <h4 className="city-internet__carrier-name">{c.name}</h4>
                  <p className="city-internet__carrier-vibe">{c.vibe}</p>
                </div>
              </header>
              <div className="city-internet__carrier-body">
                <p className="city-internet__carrier-k">Best for</p>
                <ul className="city-internet__carrier-list">
                  {c.bestFor.map((x) => (
                    <li key={x}>{x}</li>
                  ))}
                </ul>
                <p className="city-internet__carrier-k">Watch out</p>
                <ul className="city-internet__carrier-list city-internet__carrier-list--muted">
                  {c.watchOut.map((x) => (
                    <li key={x}>{x}</li>
                  ))}
                </ul>
              </div>
            </article>
          ))}
        </div>
      </article>

      <article className="city-internet__card" aria-label="Recharge">
        <header className="city-internet__card-head">
          <span className="city-internet__card-emoji" aria-hidden>
            💳
          </span>
          <div className="city-internet__card-titles">
            <h3 className="city-internet__card-title">{bundle.rechargeHowTo.title}</h3>
            <p className="city-internet__card-sub">No confusion, no sketchy links</p>
          </div>
        </header>

        <ol className="city-internet__steps">
          {bundle.rechargeHowTo.steps.map((s) => (
            <li key={s}>{s}</li>
          ))}
        </ol>

        <div className="city-internet__split">
          <div className="city-internet__split-col city-internet__split-col--do">
            <p className="city-internet__split-label">Pro tips</p>
            <ul>
              {bundle.rechargeHowTo.proTips.map((x) => (
                <li key={x}>{x}</li>
              ))}
            </ul>
          </div>
          <div className="city-internet__split-col city-internet__split-col--links">
            <p className="city-internet__split-label">Official links</p>
            <ul className="city-internet__links">
              {bundle.rechargeHowTo.officialLinks.map((l) => (
                <li key={l.url}>
                  <a href={l.url} target="_blank" rel="noreferrer">
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </article>

      <article className="city-internet__card" aria-label="Plans">
        <header className="city-internet__card-head">
          <span className="city-internet__card-emoji" aria-hidden>
            💸
          </span>
          <div className="city-internet__card-titles">
            <h3 className="city-internet__card-title">{bundle.dataPlans.title}</h3>
            <p className="city-internet__card-sub">Pick by routine, not by hype</p>
          </div>
        </header>

        <p className="city-internet__muted">{bundle.dataPlans.lead}</p>

        <div className="city-internet__plan-tiles" aria-label="Plan suggestions">
          {bundle.dataPlans.tiles.map((t) => (
            <div key={t.label} className="city-internet__plan-tile">
              <p className="city-internet__plan-label">{t.label}</p>
              <p className="city-internet__plan-value">{t.value}</p>
              {t.note ? <p className="city-internet__plan-note">{t.note}</p> : null}
            </div>
          ))}
        </div>

        <ul className="city-internet__guardrails" aria-label="Guardrails">
          {bundle.dataPlans.guardrails.map((g) => (
            <li key={g}>{g}</li>
          ))}
        </ul>
      </article>

      <article className="city-internet__card" aria-label="Public Wi-Fi safety">
        <header className="city-internet__card-head">
          <span className="city-internet__card-emoji" aria-hidden>
            🛡️
          </span>
          <div className="city-internet__card-titles">
            <h3 className="city-internet__card-title">{bundle.publicWifi.title}</h3>
            <p className="city-internet__card-sub">Avoid phishing and fake networks</p>
          </div>
        </header>

        <div className="city-internet__wifi-grid">
          <div className="city-internet__wifi-col city-internet__wifi-col--safe">
            <p className="city-internet__wifi-label">Safe rules</p>
            <ul>
              {bundle.publicWifi.safeRules.map((x) => (
                <li key={x}>{x}</li>
              ))}
            </ul>
          </div>
          <div className="city-internet__wifi-col city-internet__wifi-col--flags">
            <p className="city-internet__wifi-label">Red flags</p>
            <ul>
              {bundle.publicWifi.redFlags.map((x) => (
                <li key={x}>{x}</li>
              ))}
            </ul>
          </div>
        </div>

        <div className="city-internet__wifi-fallback">
          <p className="city-internet__wifi-label">If something feels off</p>
          <ul>
            {bundle.publicWifi.ifSomethingFeelsOff.map((x) => (
              <li key={x}>{x}</li>
            ))}
          </ul>
        </div>
      </article>

      <article className="city-internet__card city-internet__card--why" aria-label="Why it matters">
        <header className="city-internet__card-head">
          <span className="city-internet__card-emoji" aria-hidden>
            🧭
          </span>
          <div className="city-internet__card-titles">
            <h3 className="city-internet__card-title">{bundle.whyItMatters.title}</h3>
            <p className="city-internet__card-sub">Confidence + independence</p>
          </div>
        </header>
        <ul className="city-internet__why">
          {bundle.whyItMatters.bullets.map((b) => (
            <li key={b}>{b}</li>
          ))}
        </ul>
      </article>
    </section>
  )
}

