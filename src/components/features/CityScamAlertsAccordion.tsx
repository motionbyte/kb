import { useCallback, useMemo, useState } from 'react'
import { SCAM_ALERT_CATEGORIES, SCAM_GUIDE_HELPLINES } from '@/data/scamAlertsGuide'
import { exclusiveAccordionToggle } from '@/lib/exclusiveAccordion'
import { cn } from '@/lib/cn'
import '@/pages/WeatherPage.css'
import './CityScamAlertsAccordion.css'

export function CityScamAlertsAccordion() {
  const categoryIds = useMemo(() => SCAM_ALERT_CATEGORIES.map((c) => c.id), [])
  const [openSections, setOpenSections] = useState<Record<string, boolean>>({})

  const toggle = useCallback(
    (id: string) => {
      setOpenSections((prev) => exclusiveAccordionToggle(categoryIds, prev, id))
    },
    [categoryIds],
  )

  return (
    <section id="city-scams" className="city-page__block city-scam-guide" aria-labelledby="city-scams-title">
      <p className="city-page__eyebrow">Local wisdom</p>
      <h2 id="city-scams-title" className="city-page__block-title">
        Scam alerts
      </h2>
      <p className="city-scam-guide__lead">
        Practical red flags, what to do on the spot, and how to stay ahead — for transport, stays, food,
        shopping, guides, temples, nightlife, and online bookings. Not legal advice; keep calm and involve
        police (100/112) or cyber helpline (1930) when money or safety is at risk.
      </p>

      <div className="city-scam-guide__helplines" role="region" aria-label="Key helplines">
        <p className="city-scam-guide__helplines-label">Save these</p>
        <ul className="city-scam-guide__helplines-list">
          {SCAM_GUIDE_HELPLINES.map((h) => (
            <li key={h.id}>
              <span className="city-scam-guide__helplines-meta">
                <span className="city-scam-guide__helplines-name">{h.label}</span>
                <a className="city-scam-guide__helplines-tel" href={`tel:${h.telDigits}`}>
                  {h.displayNumber}
                </a>
              </span>
            </li>
          ))}
        </ul>
      </div>

      <ul className="city-scam-guide__acc-root">
        {SCAM_ALERT_CATEGORIES.map((cat, index) => {
          const isOpen = Boolean(openSections[cat.id])
          const panelId = `scam-cat-panel-${cat.id}`
          const triggerId = `scam-cat-trigger-${cat.id}`

          return (
            <li
              key={cat.id}
              className={cn('city-scam-guide__acc-block', index > 0 && 'weather-page__acc-block--spaced')}
            >
              {index > 0 ? <div className="weather-page__acc-rule" aria-hidden /> : null}
              <button
                type="button"
                id={triggerId}
                className={cn(
                  'weather-page__acc-trigger city-scam-guide__cat-trigger',
                  isOpen && 'weather-page__acc-trigger--open',
                )}
                aria-expanded={isOpen}
                aria-controls={panelId}
                onClick={() => toggle(cat.id)}
              >
                <span className="weather-page__acc-trigger-main">
                  <span className="city-scam-guide__cat-emoji" aria-hidden>
                    {cat.emoji}
                  </span>
                  <span className="weather-page__acc-title-wrap">
                    <span className="city-scam-guide__cat-title">{cat.title}</span>
                  </span>
                </span>
                <span className="weather-page__acc-chevron" aria-hidden>
                  {isOpen ? '▴' : '▾'}
                </span>
              </button>

              <div
                id={panelId}
                role="region"
                aria-labelledby={triggerId}
                aria-hidden={!isOpen}
                className={cn('weather-page__acc-panel-wrap', isOpen && 'is-open')}
              >
                <div className="weather-page__acc-panel-inner">
                  <div className="city-scam-guide__panel">
                    {cat.intro ? <p className="city-scam-guide__cat-intro">{cat.intro}</p> : null}
                    <div className="city-scam-guide__items">
                      {cat.items.map((item) => (
                        <article key={item.id} className="city-scam-guide__item">
                          <h3 className="city-scam-guide__item-title">{item.title}</h3>

                          <div className="city-scam-guide__chunk">
                            <p className="city-scam-guide__chunk-label">Watch for</p>
                            <ul className="city-scam-guide__bullets">
                              {item.watchFor.map((t, i) => (
                                <li key={`${item.id}-w-${i}`}>{t}</li>
                              ))}
                            </ul>
                          </div>

                          <div className="city-scam-guide__chunk">
                            <p className="city-scam-guide__chunk-label">If it happens</p>
                            <ul className="city-scam-guide__bullets">
                              {item.ifItHappens.map((t, i) => (
                                <li key={`${item.id}-h-${i}`}>{t}</li>
                              ))}
                            </ul>
                          </div>

                          <div className="city-scam-guide__chunk">
                            <p className="city-scam-guide__chunk-label">Safer habits</p>
                            <ul className="city-scam-guide__bullets">
                              {item.avoid.map((t, i) => (
                                <li key={`${item.id}-a-${i}`}>{t}</li>
                              ))}
                            </ul>
                          </div>

                          {item.contactNote ? (
                            <p className="city-scam-guide__contact-note">{item.contactNote}</p>
                          ) : null}
                        </article>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </li>
          )
        })}
      </ul>
    </section>
  )
}
