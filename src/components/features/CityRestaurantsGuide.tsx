import { useMemo, useState } from 'react'
import { getCityTopRestaurants, type CityRestaurantEntry, type RestaurantDiet } from '@/data/cityRestaurantsGuide'
import './CityRestaurantsGuide.css'

type Props = {
  citySlug: string
  cityName: string
}

type BarFilter = 'any' | 'yes' | 'no'

export function CityRestaurantsGuide({ citySlug, cityName }: Props) {
  const all = useMemo(() => getCityTopRestaurants(citySlug), [citySlug])
  const [diet, setDiet] = useState<RestaurantDiet>('veg')
  const [bar, setBar] = useState<BarFilter>('any')
  const [openId, setOpenId] = useState<string | null>(all[0]?.id ?? null)

  const filtered = useMemo(() => {
    return all.filter((r) => {
      if (r.diet !== diet) return false
      if (bar === 'yes' && !r.bar) return false
      if (bar === 'no' && r.bar) return false
      return true
    })
  }, [all, diet, bar])

  return (
    <section id="city-restaurants" className="city-page__block city-page__block--last city-rest-guide">
      <div className="city-rest-guide__hero">
        <h2 className="city-rest-guide__title">Restaurants</h2>
        <p className="city-rest-guide__sub">Top 100 shortlist — {cityName}</p>
      </div>

      <div className="city-rest-guide__filters">
        <div className="city-rest-guide__seg" role="tablist" aria-label="Diet filter">
          <button className={diet === 'veg' ? 'is-on' : ''} onClick={() => setDiet('veg')} type="button">
            Pure Veg
          </button>
          <button className={diet === 'nonveg' ? 'is-on' : ''} onClick={() => setDiet('nonveg')} type="button">
            Non-Veg
          </button>
        </div>

        <label className="city-rest-guide__bar">
          <span>Bar required?</span>
          <select value={bar} onChange={(e) => setBar(e.target.value as BarFilter)}>
            <option value="any">Any</option>
            <option value="yes">Yes, with bar</option>
            <option value="no">No bar</option>
          </select>
        </label>
      </div>

      <p className="city-rest-guide__count">
        Showing <strong>{filtered.length}</strong> restaurants
      </p>

      <div className="city-rest-guide__stack">
        {filtered.map((r) => {
          const open = openId === r.id
          return (
            <article key={r.id} className="city-rest-guide__item">
              <button
                type="button"
                className={`city-rest-guide__trigger ${open ? 'is-open' : ''}`}
                onClick={() => setOpenId((prev) => (prev === r.id ? null : r.id))}
                aria-expanded={open}
              >
                <span className="city-rest-guide__trigger-main">
                  <span className="city-rest-guide__dot" aria-hidden>
                    🍽️
                  </span>
                  <span>
                    <span className="city-rest-guide__name">{r.name}</span>
                    <span className="city-rest-guide__meta">
                      {r.area} • {r.cuisine} • {r.bar ? 'Bar' : 'No bar'}
                    </span>
                  </span>
                </span>
                <span className="city-rest-guide__chev" aria-hidden>
                  {open ? '▴' : '▾'}
                </span>
              </button>

              {open ? <RestaurantPanel r={r} /> : null}
            </article>
          )
        })}
      </div>
    </section>
  )
}

function RestaurantPanel({ r }: { r: CityRestaurantEntry }) {
  const dial = r.phone.replace(/[^\d+]/g, '')
  return (
    <div className="city-rest-guide__panel">
      <p className="city-rest-guide__line">
        <strong>Approx cost for 2:</strong> {r.approxCostForTwo}
      </p>
      <p className="city-rest-guide__line">
        <strong>Address:</strong> {r.address}
      </p>
      <p className="city-rest-guide__line">
        <strong>Contact:</strong> {r.phone}
      </p>
      <div className="city-rest-guide__actions">
        <a href={`tel:${dial}`}>Call</a>
        <a href={r.website} target="_blank" rel="noreferrer">
          Website
        </a>
        <a href={r.mapUrl} target="_blank" rel="noreferrer">
          Map
        </a>
      </div>
      <ul className="city-rest-guide__highlights">
        {r.highlights.map((h) => (
          <li key={h}>{h}</li>
        ))}
      </ul>
    </div>
  )
}

