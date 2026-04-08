import { useCallback, useMemo, useState } from 'react'
import { SAFETY_TIPS_CATEGORIES } from '@/data/safetyTipsGuide'
import { exclusiveAccordionToggle } from '@/lib/exclusiveAccordion'
import { cn } from '@/lib/cn'
import '@/pages/WeatherPage.css'
import './CityTravelSafetyTips.css'

type Props = {
  cityName: string
}

export function CityTravelSafetyTips({ cityName }: Props) {
  const categoryIds = useMemo(() => SAFETY_TIPS_CATEGORIES.map((c) => c.id), [])
  const [openSections, setOpenSections] = useState<Record<string, boolean>>({})

  const toggle = useCallback(
    (id: string) => {
      setOpenSections((prev) => exclusiveAccordionToggle(categoryIds, prev, id))
    },
    [categoryIds],
  )

  return (
    <section
      id="city-safety-tips"
      className="city-page__block city-page__block--last city-travel-safety"
      aria-labelledby="city-safety-tips-title"
    >
      <p className="city-page__eyebrow">Safety</p>
      <h2 id="city-safety-tips-title" className="city-page__block-title">
        Safety tips
      </h2>
      <p className="city-travel-safety__lead">
        Practical habits for getting around {cityName} and wider Rajasthan — stay aware, stay hydrated,
        and keep someone informed when plans change. Not medical or legal advice.
      </p>

      <ul className="city-travel-safety__acc-root">
        {SAFETY_TIPS_CATEGORIES.map((cat, index) => {
          const isOpen = Boolean(openSections[cat.id])
          const panelId = `safety-tip-panel-${cat.id}`
          const triggerId = `safety-tip-trigger-${cat.id}`

          return (
            <li
              key={cat.id}
              className={cn(
                'city-travel-safety__acc-block',
                index > 0 && 'weather-page__acc-block--spaced',
              )}
            >
              {index > 0 ? <div className="weather-page__acc-rule" aria-hidden /> : null}
              <button
                type="button"
                id={triggerId}
                className={cn(
                  'weather-page__acc-trigger city-travel-safety__trigger',
                  isOpen && 'weather-page__acc-trigger--open',
                )}
                aria-expanded={isOpen}
                aria-controls={panelId}
                onClick={() => toggle(cat.id)}
              >
                <span className="weather-page__acc-trigger-main">
                  <span className="city-travel-safety__emoji" aria-hidden>
                    {cat.emoji}
                  </span>
                  <span className="weather-page__acc-title-wrap">
                    <span className="city-travel-safety__cat-title">{cat.title}</span>
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
                  <div className="city-travel-safety__panel">
                    {cat.lead ? <p className="city-travel-safety__cat-lead">{cat.lead}</p> : null}
                    <ul className="city-travel-safety__bullets">
                      {cat.tips.map((t, i) => (
                        <li key={`${cat.id}-t-${i}`}>{t}</li>
                      ))}
                    </ul>
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
