import { useCallback, useEffect, useMemo, useState } from 'react'
import type { CityHistoryBundle, HistorySection } from '@/data/cityHistory'
import { exclusiveAccordionToggle } from '@/lib/exclusiveAccordion'
import { cn } from '@/lib/cn'
import '@/pages/WeatherPage.css'
import './CityHistoryAccordion.css'

function ScrollIcon() {
  return (
    <svg className="weather-page__acc-icon" viewBox="0 0 24 24" aria-hidden>
      <path
        fill="none"
        stroke="currentColor"
        strokeWidth="1.75"
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M8 3h8a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2z"
      />
      <path
        fill="none"
        stroke="currentColor"
        strokeWidth="1.25"
        strokeLinecap="round"
        d="M9 8h6M9 12h6M9 16h5"
        opacity="0.5"
      />
    </svg>
  )
}

function HistorySectionRow({
  section,
  isOpen,
  onToggle,
  index,
}: {
  section: HistorySection
  isOpen: boolean
  onToggle: () => void
  index: number
}) {
  const triggerId = `city-history-acc-${section.id}`
  const panelId = `city-history-panel-${section.id}`

  return (
    <div className={cn('weather-page__acc-block', index > 0 && 'weather-page__acc-block--spaced')}>
      {index > 0 ? <div className="weather-page__acc-rule" aria-hidden /> : null}
      <button
        type="button"
        id={triggerId}
        className={cn('weather-page__acc-trigger', isOpen && 'weather-page__acc-trigger--open')}
        aria-expanded={isOpen}
        aria-controls={panelId}
        onClick={onToggle}
      >
        <span className="weather-page__acc-trigger-main">
          <ScrollIcon />
          <span className="weather-page__acc-title-wrap">
            <span className="city-history__eyebrow">{section.eyebrow}</span>
            <span className="weather-page__acc-title">{section.title}</span>
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
          <div className="weather-page__acc-body city-history__panel">
            {section.paragraphs.map((p, i) => (
              <p key={i} className="city-history__para">
                {p}
              </p>
            ))}
            <p className="city-history__tl-heading">Timeline — rulers, years &amp; prominent work</p>
            <ul className="city-history__timeline">
              {section.timeline.map((t) => (
                <li key={t.id} className="city-history__tl-item">
                  <div className="city-history__tl-years">{t.years}</div>
                  <div className="city-history__tl-who">{t.rulerOrEra}</div>
                  <p className="city-history__tl-work">{t.work}</p>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}

type Props = {
  bundle: CityHistoryBundle
}

export function CityHistoryAccordion({ bundle }: Props) {
  const initial = useMemo(
    () => Object.fromEntries(bundle.sections.map((s) => [s.id, false])) as Record<string, boolean>,
    [bundle.sections],
  )
  const sectionIds = useMemo(() => bundle.sections.map((s) => s.id), [bundle.sections])
  const [open, setOpen] = useState<Record<string, boolean>>(initial)

  const toggle = useCallback(
    (id: string) => {
      setOpen((o) => exclusiveAccordionToggle(sectionIds, o, id))
    },
    [sectionIds],
  )

  useEffect(() => {
    setOpen(initial)
  }, [initial])

  return (
    <div className="city-history">
      <div className="city-history__what">
        <h2 className="city-history__what-title">{bundle.whatIsTitle}</h2>
        {bundle.whatIsParagraphs.map((p, i) => (
          <p key={i} className="city-history__what-para">
            {p}
          </p>
        ))}
      </div>
      <p className="city-history__stack-label">Puranic · medieval · modern — open each block</p>
      <div className="weather-page__acc-stack">
        {bundle.sections.map((section, index) => (
          <HistorySectionRow
            key={section.id}
            section={section}
            index={index}
            isOpen={Boolean(open[section.id])}
            onToggle={() => toggle(section.id)}
          />
        ))}
      </div>
    </div>
  )
}
