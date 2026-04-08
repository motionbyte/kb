import { useCallback, useEffect, useMemo, useRef, useState } from 'react'
import { useSearchParams } from 'react-router-dom'
import { cities, getCityBySlug } from '@/data/cities'
import {
  PLANNER_ACTIVITIES,
  TRIP_STYLES,
  activityById,
  categoryHasSelection,
  getPlaceById,
  placesForSubOptionInCity,
  subsForCategory,
  type PlannerPlace,
  type TripStyleId,
} from '@/data/itineraryPlannerCatalog'
import {
  EMPTY_PLAN,
  encodePlanToBase64,
  decodePlanFromBase64,
  mergeSeedCity,
  type ItineraryPlanStateV2,
} from '@/lib/itineraryPlanCodec'
import { exportElementToPdf, exportElementToPng } from '@/lib/itineraryExport'
import './ItineraryPlannerPage.css'

type TabId = 'builder' | 'route'

export function ItineraryPlannerPage() {
  const [searchParams] = useSearchParams()
  const exportRef = useRef<HTMLDivElement>(null)
  const [plan, setPlan] = useState<ItineraryPlanStateV2>(EMPTY_PLAN)
  const [tab, setTab] = useState<TabId>('builder')
  /** Which category row is expanded to show sub-options (per city). */
  const [openCategoryByCity, setOpenCategoryByCity] = useState<Record<string, string | null>>({})
  /** Which sub-option rows have their place list expanded (per city). */
  const [expandedSubsByCity, setExpandedSubsByCity] = useState<Record<string, string[]>>({})
  const [activeCity, setActiveCity] = useState<string | null>(null)
  const [addCityValue, setAddCityValue] = useState('')
  const [toast, setToast] = useState('')
  const [exporting, setExporting] = useState(false)

  const seedApplied = useRef(false)
  const appliedQuery = useRef(false)

  useEffect(() => {
    document.title = 'Itinerary planner · Kesariya Balam'
  }, [])

  /** Hash plan wins over ?seed=; then apply style/tab from query */
  useEffect(() => {
    const raw = window.location.hash.match(/^#p=(.+)$/)
    if (raw?.[1]) {
      const decoded = decodePlanFromBase64(decodeURIComponent(raw[1]))
      if (decoded) {
        setPlan(decoded)
        if (decoded.cities[0]) setActiveCity(decoded.cities[0])
        seedApplied.current = true
        appliedQuery.current = true
        return
      }
    }

    if (!appliedQuery.current) {
      const tabParam = searchParams.get('tab') as TabId | null
      if (tabParam === 'route' || tabParam === 'builder') setTab(tabParam)
      const style = searchParams.get('style') as TripStyleId | null
      if (style === 'budget' || style === 'balanced' || style === 'luxury') {
        setPlan((p) => ({ ...p, style }))
      }
      appliedQuery.current = true
    }

    const seed = searchParams.get('seed')
    if (seed && !seedApplied.current) {
      seedApplied.current = true
      setPlan((p) => mergeSeedCity(p, seed))
      setActiveCity(seed)
    }
  }, [searchParams])

  const shareUrl = useMemo(() => {
    const enc = encodePlanToBase64(plan)
    const base = `${window.location.origin}${window.location.pathname}`
    if (!enc) return base
    return `${base}#p=${encodeURIComponent(enc)}`
  }, [plan])

  const copyShareLink = useCallback(async () => {
    try {
      await navigator.clipboard.writeText(shareUrl)
      setToast('Link copied — open it anywhere to load this plan.')
    } catch {
      setToast('Could not copy. Select the URL from the address bar.')
    }
    window.setTimeout(() => setToast(''), 4500)
  }, [shareUrl])

  const addCity = useCallback((slug: string) => {
    if (!slug || plan.cities.includes(slug)) return
    setPlan((p) => ({
      ...p,
      cities: [...p.cities, slug],
      selections: { ...p.selections, [slug]: p.selections[slug] ?? [] },
      nightsPerCity: { ...p.nightsPerCity, [slug]: p.nightsPerCity[slug] ?? 2 },
    }))
    setActiveCity(slug)
    setAddCityValue('')
  }, [plan.cities, plan.selections, plan.nightsPerCity])

  const removeCity = useCallback((slug: string) => {
    setPlan((p) => {
      const cities = p.cities.filter((c) => c !== slug)
      const { [slug]: _, ...restSel } = p.selections
      const { [slug]: __, ...restN } = p.nightsPerCity
      return { ...p, cities, selections: restSel, nightsPerCity: restN }
    })
    setActiveCity((cur) => (cur === slug ? null : cur))
    setOpenCategoryByCity((prev) => {
      const { [slug]: ___, ...rest } = prev
      return rest
    })
    setExpandedSubsByCity((prev) => {
      const { [slug]: ____, ...rest } = prev
      return rest
    })
  }, [])

  const moveCity = useCallback((slug: string, dir: -1 | 1) => {
    setPlan((p) => {
      const i = p.cities.indexOf(slug)
      if (i < 0) return p
      const j = i + dir
      if (j < 0 || j >= p.cities.length) return p
      const next = [...p.cities]
      ;[next[i], next[j]] = [next[j]!, next[i]!]
      return { ...p, cities: next }
    })
  }, [])

  const toggleSubOption = useCallback((citySlug: string, subId: string) => {
    const places = placesForSubOptionInCity(citySlug, subId)
    setPlan((p) => {
      let cur = [...(p.selections[citySlug] ?? [])]
      const has = cur.includes(subId)
      if (has) {
        cur = cur.filter((id) => id !== subId)
        const pids = places.map((pl) => pl.id)
        cur = cur.filter((id) => !pids.includes(id))
      } else {
        cur.push(subId)
        cur = cur.filter((id) => {
          const pl = getPlaceById(id)
          return !pl || pl.subOptionId !== subId
        })
      }
      return { ...p, selections: { ...p.selections, [citySlug]: cur } }
    })
    if (places.length > 0) {
      setExpandedSubsByCity((prev) => ({
        ...prev,
        [citySlug]: [...new Set([...(prev[citySlug] ?? []), subId])],
      }))
    }
  }, [])

  const togglePlace = useCallback((citySlug: string, pl: PlannerPlace) => {
    setPlan((p) => {
      let cur = [...(p.selections[citySlug] ?? [])]
      const has = cur.includes(pl.id)
      if (has) {
        cur = cur.filter((id) => id !== pl.id)
      } else {
        cur = cur.filter((id) => id !== pl.subOptionId)
        cur.push(pl.id)
      }
      return { ...p, selections: { ...p.selections, [citySlug]: cur } }
    })
    setExpandedSubsByCity((prev) => ({
      ...prev,
      [citySlug]: [...new Set([...(prev[citySlug] ?? []), pl.subOptionId])],
    }))
  }, [])

  const toggleExpandSubPlaces = useCallback((citySlug: string, subId: string) => {
    setExpandedSubsByCity((prev) => {
      const list = prev[citySlug] ?? []
      const has = list.includes(subId)
      return {
        ...prev,
        [citySlug]: has ? list.filter((id) => id !== subId) : [...list, subId],
      }
    })
  }, [])

  const toggleCategoryPanel = useCallback((citySlug: string, categoryId: string) => {
    setOpenCategoryByCity((prev) => ({
      ...prev,
      [citySlug]: prev[citySlug] === categoryId ? null : categoryId,
    }))
  }, [])

  const scrollToCitySection = useCallback((slug: string) => {
    setActiveCity(slug)
    document.getElementById(`itinerary-city-${slug}`)?.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }, [])

  const setNights = useCallback((citySlug: string, n: number) => {
    const v = Math.min(14, Math.max(1, Math.round(n)))
    setPlan((p) => ({ ...p, nightsPerCity: { ...p.nightsPerCity, [citySlug]: v } }))
  }, [])

  const exportPng = async () => {
    if (!exportRef.current) return
    setExporting(true)
    try {
      await exportElementToPng(exportRef.current, 'kesariya-itinerary')
    } finally {
      setExporting(false)
    }
  }

  const exportPdf = async () => {
    if (!exportRef.current) return
    setExporting(true)
    try {
      await exportElementToPdf(exportRef.current, 'kesariya-itinerary')
    } finally {
      setExporting(false)
    }
  }

  const styleLabel = TRIP_STYLES.find((s) => s.id === plan.style)?.label ?? plan.style
  const totalNights = plan.cities.reduce((acc, s) => acc + (plan.nightsPerCity[s] ?? 0), 0)

  return (
    <div className="itinerary-page">
      <header className="itinerary-page__intro">
        <p className="itinerary-page__eyebrow">Interactive planner</p>
        <h1 className="itinerary-page__title">Build your Rajasthan trip</h1>
        <p className="itinerary-page__lead">
          Add one or more cities — each city has its own block. Tap a category icon to see listed
          options; tick a row to open specific places under it and pick where to go. Multi-city trips
          stay in separate sections. Then export or share your plan.
        </p>
      </header>

      <div className="itinerary-page__toolbar">
        <div className="itinerary-page__style">
          <span className="itinerary-page__toolbar-label">Trip style</span>
          <div className="itinerary-page__style-btns" role="group" aria-label="Trip style">
            {TRIP_STYLES.map((s) => (
              <button
                key={s.id}
                type="button"
                className={plan.style === s.id ? 'is-active' : ''}
                onClick={() => setPlan((p) => ({ ...p, style: s.id }))}
                title={s.hint}
              >
                {s.label}
              </button>
            ))}
          </div>
        </div>

        <div className="itinerary-page__tabs" role="tablist">
          <button
            type="button"
            role="tab"
            aria-selected={tab === 'builder'}
            className={tab === 'builder' ? 'is-active' : ''}
            onClick={() => setTab('builder')}
          >
            Builder
          </button>
          <button
            type="button"
            role="tab"
            aria-selected={tab === 'route'}
            className={tab === 'route' ? 'is-active' : ''}
            onClick={() => setTab('route')}
          >
            Route order
          </button>
        </div>
      </div>

      {tab === 'builder' ? (
        <section className="itinerary-page__panel" aria-labelledby="it-cities-heading">
          <h2 id="it-cities-heading" className="itinerary-page__h2">
            Cities on this trip
          </h2>
          <p className="itinerary-page__hint">
            Add cities in the order you plan to visit. You can reorder anytime.
          </p>

          <div className="itinerary-page__add-row">
            <label className="itinerary-page__add-label">
              <span>Add city</span>
              <select
                value={addCityValue}
                onChange={(e) => {
                  const v = e.target.value
                  setAddCityValue(v)
                  if (v) addCity(v)
                }}
              >
                <option value="">Choose…</option>
                {cities
                  .filter((c) => !plan.cities.includes(c.slug))
                  .map((c) => (
                    <option key={c.slug} value={c.slug}>
                      {c.name}
                    </option>
                  ))}
              </select>
            </label>
          </div>

          {plan.cities.length === 0 ? (
            <p className="itinerary-page__empty">Add at least one city to start selecting activities.</p>
          ) : (
            <ul className="itinerary-page__city-chips">
              {plan.cities.map((slug) => {
                const c = getCityBySlug(slug)
                return (
                  <li key={slug}>
                    <button
                      type="button"
                      className={`itinerary-page__chip ${activeCity === slug ? 'is-active' : ''}`}
                      onClick={() => scrollToCitySection(slug)}
                    >
                      {c?.name ?? slug}
                    </button>
                    <span className="itinerary-page__chip-actions">
                      <button type="button" aria-label={`Move ${c?.name} up`} onClick={() => moveCity(slug, -1)}>
                        ↑
                      </button>
                      <button type="button" aria-label={`Move ${c?.name} down`} onClick={() => moveCity(slug, 1)}>
                        ↓
                      </button>
                      <button type="button" className="itinerary-page__chip-remove" onClick={() => removeCity(slug)}>
                        ×
                      </button>
                    </span>
                  </li>
                )
              })}
            </ul>
          )}

          {plan.cities.map((citySlug) => {
            const c = getCityBySlug(citySlug)
            const selected = plan.selections[citySlug] ?? []
            const openCat = openCategoryByCity[citySlug] ?? null
            return (
              <section
                key={citySlug}
                id={`itinerary-city-${citySlug}`}
                className="itinerary-page__city-section"
              >
                <div className="itinerary-page__city-section-head">
                  <h3 className="itinerary-page__city-heading">{c?.name ?? citySlug}</h3>
                  <p className="itinerary-page__city-tag">{c?.region}</p>
                </div>

                <div className="itinerary-page__nights itinerary-page__nights--in-section">
                  <label>
                    Nights
                    <input
                      type="number"
                      min={1}
                      max={14}
                      value={plan.nightsPerCity[citySlug] ?? 2}
                      onChange={(e) => setNights(citySlug, Number(e.target.value))}
                    />
                  </label>
                </div>

                <p className="itinerary-page__pick-label">Categories — tap an icon to list options, then tick what you want</p>
                <div className="itinerary-page__activity-grid">
                  {PLANNER_ACTIVITIES.map((a) => {
                    const hasSel = categoryHasSelection(a.id, selected)
                    return (
                      <div key={a.id} className="itinerary-page__activity-cell">
                        <button
                          type="button"
                          className={`itinerary-page__activity ${hasSel ? 'is-on' : ''} ${openCat === a.id ? 'is-open' : ''}`}
                          onClick={() => toggleCategoryPanel(citySlug, a.id)}
                          title={a.hint}
                          aria-expanded={openCat === a.id}
                        >
                          <span className="itinerary-page__activity-icon" aria-hidden>
                            {a.icon}
                          </span>
                          <span className="itinerary-page__activity-label">{a.shortLabel}</span>
                        </button>
                      </div>
                    )
                  })}
                </div>

                {openCat ? (
                  <div className="itinerary-page__category-panel" role="region" aria-label={`Options for ${activityById(openCat)?.shortLabel}`}>
                    <div className="itinerary-page__category-panel-head">
                      <span className="itinerary-page__category-panel-icon" aria-hidden>
                        {activityById(openCat)?.icon}
                      </span>
                      <span>{activityById(openCat)?.label}</span>
                      <button
                        type="button"
                        className="itinerary-page__category-panel-close"
                        onClick={() => toggleCategoryPanel(citySlug, openCat)}
                        aria-label="Close list"
                      >
                        ×
                      </button>
                    </div>
                    <ul className="itinerary-page__sub-list">
                      {subsForCategory(openCat).map((sub) => {
                        const places = placesForSubOptionInCity(citySlug, sub.id)
                        const expanded = (expandedSubsByCity[citySlug] ?? []).includes(sub.id)
                        const subTick =
                          selected.includes(sub.id) ||
                          places.some((pl) => selected.includes(pl.id))
                        const subOnly = selected.includes(sub.id) && !places.some((pl) => selected.includes(pl.id))
                        return (
                          <li key={sub.id} className="itinerary-page__sub-block">
                            <div className="itinerary-page__sub-row">
                              {places.length > 0 ? (
                                <button
                                  type="button"
                                  className={`itinerary-page__sub-chevron ${expanded ? 'is-open' : ''}`}
                                  onClick={() => toggleExpandSubPlaces(citySlug, sub.id)}
                                  aria-expanded={expanded}
                                  aria-label={expanded ? 'Hide places' : 'Show places'}
                                >
                                  {expanded ? '▾' : '▸'}
                                </button>
                              ) : (
                                <span className="itinerary-page__sub-chevron itinerary-page__sub-chevron--spacer" />
                              )}
                              <button
                                type="button"
                                className="itinerary-page__sub-label-btn"
                                onClick={() => {
                                  if (places.length > 0) toggleExpandSubPlaces(citySlug, sub.id)
                                }}
                              >
                                {sub.label}
                              </button>
                              <button
                                type="button"
                                className={`itinerary-page__tick ${subTick ? 'is-on' : ''}`}
                                onClick={() => toggleSubOption(citySlug, sub.id)}
                                aria-pressed={subTick}
                                aria-label={
                                  subTick ? `Deselect ${sub.label}` : `Select all ${sub.label}`
                                }
                              >
                                {subTick ? '✓' : '○'}
                              </button>
                            </div>
                            {places.length > 0 && expanded ? (
                              <ul className="itinerary-page__place-list">
                                {places.map((pl) => {
                                  const pon = selected.includes(pl.id)
                                  return (
                                    <li key={pl.id} className="itinerary-page__place-row">
                                      <span className="itinerary-page__place-label">{pl.label}</span>
                                      <button
                                        type="button"
                                        className={`itinerary-page__tick itinerary-page__tick--place ${pon ? 'is-on' : ''}`}
                                        onClick={() => togglePlace(citySlug, pl)}
                                        aria-pressed={pon}
                                        aria-label={pon ? `Deselect ${pl.label}` : `Select ${pl.label}`}
                                      >
                                        {pon ? '✓' : '○'}
                                      </button>
                                    </li>
                                  )
                                })}
                              </ul>
                            ) : null}
                            {places.length > 0 && subOnly ? (
                              <p className="itinerary-page__sub-note">Whole sub-category — add specific places above if you want pins.</p>
                            ) : null}
                          </li>
                        )
                      })}
                    </ul>
                  </div>
                ) : null}
              </section>
            )
          })}
        </section>
      ) : (
        <section className="itinerary-page__panel itinerary-page__panel--route" aria-labelledby="it-route-heading">
          <h2 id="it-route-heading" className="itinerary-page__h2">
            Route
          </h2>
          <p className="itinerary-page__hint">
            This is your overland order — use ↑↓ in the Builder tab to change the sequence across cities.
          </p>
          {plan.cities.length === 0 ? (
            <p className="itinerary-page__empty">Add cities in the Builder tab first.</p>
          ) : (
            <ol className="itinerary-page__route-list">
              {plan.cities.map((slug, idx) => {
                const c = getCityBySlug(slug)
                const nights = plan.nightsPerCity[slug] ?? 0
                return (
                  <li key={slug} className="itinerary-page__route-item">
                    <span className="itinerary-page__route-num">{idx + 1}</span>
                    <div>
                      <strong>{c?.name ?? slug}</strong>
                      <span className="itinerary-page__route-meta">
                        {nights} night{nights !== 1 ? 's' : ''}
                        {(plan.selections[slug] ?? []).length > 0
                          ? ` · ${(plan.selections[slug] ?? []).length} picks`
                          : ''}
                      </span>
                    </div>
                  </li>
                )
              })}
            </ol>
          )}
        </section>
      )}

      <section className="itinerary-page__export-bar" aria-label="Export and share">
        <p className="itinerary-page__export-summary">
          {plan.cities.length === 0
            ? 'Add cities to enable export.'
            : `${plan.cities.length} cit${plan.cities.length === 1 ? 'y' : 'ies'} · ~${totalNights} night${totalNights !== 1 ? 's' : ''} · ${styleLabel}`}
        </p>
        <div className="itinerary-page__export-btns">
          <button type="button" className="itinerary-page__btn secondary" onClick={copyShareLink} disabled={plan.cities.length === 0}>
            Copy share link
          </button>
          <button type="button" className="itinerary-page__btn" onClick={exportPng} disabled={plan.cities.length === 0 || exporting}>
            Download PNG
          </button>
          <button type="button" className="itinerary-page__btn" onClick={exportPdf} disabled={plan.cities.length === 0 || exporting}>
            Download PDF
          </button>
        </div>
        {toast ? <p className="itinerary-page__toast">{toast}</p> : null}
      </section>

      {/* Off-screen / clipped: html2canvas target */}
      <div className="itinerary-page__export-wrap" aria-hidden>
        <div ref={exportRef} className="itinerary-export-card">
          <header className="itinerary-export-card__head">
            <p className="itinerary-export-card__brand">Kesariya Balam</p>
            <h2 className="itinerary-export-card__title">Rajasthan itinerary</h2>
            <p className="itinerary-export-card__style">{styleLabel} · {totalNights} night{totalNights !== 1 ? 's' : ''} total</p>
          </header>
          <div className="itinerary-export-card__route">
            {plan.cities.map((slug) => getCityBySlug(slug)?.name ?? slug).join(' → ') || '—'}
          </div>
          <ul className="itinerary-export-card__stops">
            {plan.cities.map((slug) => {
              const c = getCityBySlug(slug)
              const ids = plan.selections[slug] ?? []
              const nights = plan.nightsPerCity[slug] ?? 0
              return (
                <li key={slug}>
                  <div className="itinerary-export-card__stop-head">
                    <strong>{c?.name ?? slug}</strong>
                    <span>{nights} night{nights !== 1 ? 's' : ''}</span>
                  </div>
                  {ids.length === 0 ? (
                    <p className="itinerary-export-card__none">Activities to be decided</p>
                  ) : (
                    <div className="itinerary-export-card__grouped">
                      {PLANNER_ACTIVITIES.map((act) => {
                        const subs = subsForCategory(act.id)
                        const subsWithContent = subs.filter((sub) => {
                          const places = placesForSubOptionInCity(slug, sub.id)
                          const picked = places.filter((p) => ids.includes(p.id))
                          const subOnly = ids.includes(sub.id) && picked.length === 0
                          return picked.length > 0 || subOnly
                        })
                        if (subsWithContent.length === 0) return null
                        return (
                          <div key={act.id} className="itinerary-export-card__group">
                            <p className="itinerary-export-card__group-title">
                              {act.icon} {act.label}
                            </p>
                            {subsWithContent.map((sub) => {
                              const places = placesForSubOptionInCity(slug, sub.id)
                              const picked = places.filter((p) => ids.includes(p.id))
                              const subOnly = ids.includes(sub.id) && picked.length === 0
                              return (
                                <div key={sub.id} className="itinerary-export-card__sub">
                                  <p className="itinerary-export-card__sub-title">{sub.label}</p>
                                  {picked.length > 0 ? (
                                    <ul className="itinerary-export-card__acts">
                                      {picked.map((p) => (
                                        <li key={p.id}>{p.label}</li>
                                      ))}
                                    </ul>
                                  ) : subOnly ? (
                                    <p className="itinerary-export-card__sub-all">Whole sub-category</p>
                                  ) : null}
                                </div>
                              )
                            })}
                          </div>
                        )
                      })}
                    </div>
                  )}
                </li>
              )
            })}
          </ul>
          <footer className="itinerary-export-card__foot">kesariya-balam · Plan built in app</footer>
        </div>
      </div>
    </div>
  )
}
