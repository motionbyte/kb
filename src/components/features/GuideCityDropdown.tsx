import { useCallback, useEffect, useId, useRef, useState } from 'react'
import type { City } from '@/types'
import { cn } from '@/lib/cn'
import './GuideCityDropdown.css'

type GuideCityDropdownProps = {
  cities: City[]
  onSelectCity: (slug: string) => void
  className?: string
}

export function GuideCityDropdown({ cities, onSelectCity, className }: GuideCityDropdownProps) {
  const [open, setOpen] = useState(false)
  const rootRef = useRef<HTMLDivElement>(null)
  const listId = useId()

  const close = useCallback(() => setOpen(false), [])

  useEffect(() => {
    if (!open) return
    function onDocMouseDown(e: MouseEvent) {
      if (!rootRef.current?.contains(e.target as Node)) close()
    }
    function onKey(e: KeyboardEvent) {
      if (e.key === 'Escape') close()
    }
    document.addEventListener('mousedown', onDocMouseDown)
    document.addEventListener('keydown', onKey)
    return () => {
      document.removeEventListener('mousedown', onDocMouseDown)
      document.removeEventListener('keydown', onKey)
    }
  }, [open, close])

  return (
    <div ref={rootRef} className={cn('guide-city-dd', className)}>
      <button
        type="button"
        className="guide-city-dd__trigger"
        aria-expanded={open}
        aria-haspopup="listbox"
        aria-controls={listId}
        onClick={() => setOpen((o) => !o)}
      >
        <span className="guide-city-dd__trigger-label">Choose a city</span>
        <span className="guide-city-dd__chevron" aria-hidden>
          {open ? '▴' : '▾'}
        </span>
      </button>

      {open ? (
        <div className="guide-city-dd__panel" role="presentation">
          <ul id={listId} className="guide-city-dd__list" role="listbox" aria-label="Rajasthan cities">
            {cities.map((c) => (
              <li key={c.id} role="none">
                <button
                  type="button"
                  role="option"
                  className="guide-city-dd__option"
                  onClick={() => {
                    onSelectCity(c.slug)
                    close()
                  }}
                >
                  <span className="guide-city-dd__name">{c.name}</span>
                  <span className="guide-city-dd__region">{c.region}</span>
                </button>
              </li>
            ))}
          </ul>
        </div>
      ) : null}
    </div>
  )
}
