import {
  ETIQUETTE_INTRO,
  ETIQUETTE_SECTIONS,
  ETIQUETTE_TIPPING,
} from '@/data/etiquetteGuide'
import './CityEtiquetteGuide.css'

type Props = {
  cityName: string
}

export function CityEtiquetteGuide({ cityName }: Props) {
  return (
    <section
      id="city-etiquette"
      className="city-page__block city-page__block--last city-etiquette"
      aria-labelledby="city-etiquette-hero-title"
    >
      <div className="city-etiquette__hero">
        <h2 id="city-etiquette-hero-title" className="city-etiquette__hero-main">
          {ETIQUETTE_INTRO.title}
        </h2>
        <p className="city-etiquette__hero-sub">({ETIQUETTE_INTRO.eyebrow})</p>
      </div>

      <p className="city-etiquette__lead">
        {ETIQUETTE_INTRO.lead} <span className="city-etiquette__city">— {cityName}</span>
      </p>

      <div className="city-etiquette__flow">
        {ETIQUETTE_SECTIONS.map((sec) => (
          <article key={sec.id} className="city-etiquette__card">
            <header className="city-etiquette__card-head">
              <span className="city-etiquette__card-emoji" aria-hidden>
                {sec.emoji}
              </span>
              <div className="city-etiquette__card-titles">
                <h3 className="city-etiquette__card-title">{sec.title}</h3>
                {sec.subtitle ? <p className="city-etiquette__card-sub">{sec.subtitle}</p> : null}
              </div>
            </header>

            <div className="city-etiquette__tiles" aria-label="Quick reference">
              {sec.highlights.map((h) => (
                <div key={h.label} className="city-etiquette__tile">
                  <span className="city-etiquette__tile-label">{h.label}</span>
                  {h.tag ? <span className="city-etiquette__tile-tag">{h.tag}</span> : null}
                </div>
              ))}
            </div>

            <ul className="city-etiquette__details">
              {sec.details.map((line) => (
                <li key={line}>{line}</li>
              ))}
            </ul>

            {sec.dos && sec.dos.length > 0 ? (
              <div className="city-etiquette__split">
                <div className="city-etiquette__split-col city-etiquette__split-col--do">
                  <p className="city-etiquette__split-label">Do</p>
                  <ul>
                    {sec.dos.map((d) => (
                      <li key={d}>{d}</li>
                    ))}
                  </ul>
                </div>
                {sec.donts && sec.donts.length > 0 ? (
                  <div className="city-etiquette__split-col city-etiquette__split-col--dont">
                    <p className="city-etiquette__split-label">Avoid</p>
                    <ul>
                      {sec.donts.map((d) => (
                        <li key={d}>{d}</li>
                      ))}
                    </ul>
                  </div>
                ) : null}
              </div>
            ) : null}
          </article>
        ))}

        <article className="city-etiquette__card city-etiquette__card--tipping">
          <header className="city-etiquette__card-head">
            <span className="city-etiquette__card-emoji" aria-hidden>
              {ETIQUETTE_TIPPING.emoji}
            </span>
            <div className="city-etiquette__card-titles">
              <h3 className="city-etiquette__card-title">{ETIQUETTE_TIPPING.title}</h3>
              <p className="city-etiquette__card-sub">{ETIQUETTE_TIPPING.subtitle}</p>
            </div>
          </header>

          <p className="city-etiquette__tipping-intro">{ETIQUETTE_TIPPING.intro}</p>

          <div className="city-etiquette__tip-bands">
            {ETIQUETTE_TIPPING.bands.map((b) => (
              <div key={b.id} className="city-etiquette__tip-band">
                <div className="city-etiquette__tip-range" aria-hidden>
                  {b.range}
                </div>
                <div className="city-etiquette__tip-meta">
                  <p className="city-etiquette__tip-context">{b.context}</p>
                  <p className="city-etiquette__tip-note">{b.note}</p>
                </div>
              </div>
            ))}
          </div>
        </article>
      </div>
    </section>
  )
}
