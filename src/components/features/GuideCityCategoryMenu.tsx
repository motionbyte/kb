import { useCallback, useMemo, useState } from 'react'
import type { City } from '@/types'
import { GUIDE_CITY_MENU_SECTIONS } from '@/data/guideCityMenu'
import { exclusiveAccordionToggle } from '@/lib/exclusiveAccordion'
import { cn } from '@/lib/cn'
import './GuideCityCategoryMenu.css'

type GuideCityCategoryMenuProps = {
  city: City
  onNavigate: (path: string) => void
}

export function GuideCityCategoryMenu({ city, onNavigate }: GuideCityCategoryMenuProps) {
  const ctx = { cityId: city.id, slug: city.slug }
  const sectionIds = useMemo(() => GUIDE_CITY_MENU_SECTIONS.map((s) => s.id), [])
  const [openSections, setOpenSections] = useState<Record<string, boolean>>({})

  const toggle = useCallback(
    (id: string) => {
      setOpenSections((prev) => exclusiveAccordionToggle(sectionIds, prev, id))
    },
    [sectionIds],
  )

  return (
    <nav className="guide-city-cat" aria-label={`${city.name} guide topics`}>
      <div className="guide-city-cat__stack">
        {GUIDE_CITY_MENU_SECTIONS.map((section, index) => {
          const isOpen = Boolean(openSections[section.id])
          const panelId = `guide-cat-panel-${section.id}`
          const triggerId = `guide-cat-trigger-${section.id}`

          return (
            <div
              key={section.id}
              className={cn('guide-city-cat__block', index > 0 && 'guide-city-cat__block--spaced')}
            >
              {index > 0 ? <div className="guide-city-cat__rule" aria-hidden /> : null}
              <button
                type="button"
                id={triggerId}
                className={cn('guide-city-cat__trigger', isOpen && 'guide-city-cat__trigger--open')}
                aria-expanded={isOpen}
                aria-controls={panelId}
                onClick={() => toggle(section.id)}
              >
                <span className="guide-city-cat__trigger-main">
                  <span className="guide-city-cat__icon" aria-hidden>
                    {section.icon}
                  </span>
                  <span className="guide-city-cat__trigger-title">{section.title}</span>
                </span>
                <span className="guide-city-cat__chevron" aria-hidden>
                  {isOpen ? '▴' : '▾'}
                </span>
              </button>

              <div
                id={panelId}
                role="region"
                aria-labelledby={triggerId}
                aria-hidden={!isOpen}
                className={cn('guide-city-cat__panel-wrap', isOpen && 'is-open')}
              >
                <div className="guide-city-cat__panel-inner">
                  <ul className="guide-city-cat__list">
                    {section.items.map((item) => (
                      <li key={item.id}>
                        <button
                          type="button"
                          className="guide-city-cat__link"
                          tabIndex={isOpen ? 0 : -1}
                          onClick={() => onNavigate(item.href(ctx))}
                        >
                          {item.label}
                        </button>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          )
        })}
      </div>
    </nav>
  )
}
