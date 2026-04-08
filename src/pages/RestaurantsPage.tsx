import { useMemo } from 'react'
import { useSearchParams } from 'react-router-dom'
import { RestaurantCard } from '@/components/features/RestaurantCard'
import { Section } from '@/components/ui/Section'
import { cities } from '@/data/cities'
import { restaurants, VIBE_LABELS } from '@/data/restaurants'
import type { PriceLevel, Restaurant, RestaurantVibe } from '@/types'
import './RestaurantsPage.css'

const vibes = Object.keys(VIBE_LABELS) as RestaurantVibe[]

export function RestaurantsPage() {
  const [searchParams, setSearchParams] = useSearchParams()
  const cityFilter = searchParams.get('city') ?? 'all'
  const vibeFilter = searchParams.get('vibe') ?? 'all'
  const priceFilter = searchParams.get('price') ?? 'all'

  const filtered = useMemo(() => {
    return restaurants.filter((r) => {
      if (cityFilter !== 'all' && r.cityId !== cityFilter) return false
      if (vibeFilter !== 'all' && r.vibe !== vibeFilter) return false
      if (priceFilter !== 'all') {
        const p = Number(priceFilter) as PriceLevel
        if (r.priceLevel !== p) return false
      }
      return true
    })
  }, [cityFilter, vibeFilter, priceFilter])

  function setParam(key: string, value: string) {
    const next = new URLSearchParams(searchParams)
    if (value === 'all') next.delete(key)
    else next.set(key, value)
    setSearchParams(next, { replace: true })
  }

  return (
    <Section
      eyebrow="Where to eat"
      title="Restaurants by city & vibe"
      lead="Heritage haveli, rooftop sunsets, palace courtyards — pick what matches your evening. Shareable URLs via filters."
      spacing="hero"
    >
      <div className="rest-filters" role="group" aria-label="Restaurant filters">
        <label className="rest-filters__field">
          <span className="rest-filters__label">City</span>
          <select
            className="rest-filters__select"
            value={cityFilter}
            onChange={(e) => setParam('city', e.target.value)}
          >
            <option value="all">All cities</option>
            {cities.map((c) => (
              <option key={c.id} value={c.id}>
                {c.name}
              </option>
            ))}
          </select>
        </label>
        <label className="rest-filters__field">
          <span className="rest-filters__label">Design / vibe</span>
          <select
            className="rest-filters__select"
            value={vibeFilter}
            onChange={(e) => setParam('vibe', e.target.value)}
          >
            <option value="all">All vibes</option>
            {vibes.map((v) => (
              <option key={v} value={v}>
                {VIBE_LABELS[v]}
              </option>
            ))}
          </select>
        </label>
        <label className="rest-filters__field">
          <span className="rest-filters__label">Price band</span>
          <select
            className="rest-filters__select"
            value={priceFilter}
            onChange={(e) => setParam('price', e.target.value)}
          >
            <option value="all">Any</option>
            {([1, 2, 3, 4] as const).map((p) => (
              <option key={p} value={String(p)}>
                {'₹'.repeat(p)} — {priceLabel(p)}
              </option>
            ))}
          </select>
        </label>
      </div>

      <p className="rest-count">
        Showing <strong>{filtered.length}</strong> of {restaurants.length} places
      </p>

      <div className="rest-grid">
        {filtered.map((r: Restaurant) => (
          <RestaurantCard key={r.id} restaurant={r} />
        ))}
      </div>

      {filtered.length === 0 ? (
        <p className="rest-empty">No restaurants match — try widening filters.</p>
      ) : null}
    </Section>
  )
}

function priceLabel(p: PriceLevel): string {
  const labels: Record<PriceLevel, string> = {
    1: 'Budget friendly',
    2: 'Moderate',
    3: 'Upscale',
    4: 'Splurge',
  }
  return labels[p]
}
