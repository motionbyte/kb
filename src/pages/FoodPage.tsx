import { useEffect, useMemo, useState } from 'react'
import { Link, useSearchParams } from 'react-router-dom'
import { FoodCategoryStrip } from '@/components/features/FoodCategoryStrip'
import { Section } from '@/components/ui/Section'
import { cities } from '@/data/cities'
import { foodHighlights } from '@/data/food'
import type { FoodCategory } from '@/types'
import './FoodPage.css'

function cityIdFromSearch(searchParams: URLSearchParams): string | null {
  const raw = searchParams.get('city')
  if (!raw) return null
  return cities.some((c) => c.id === raw) ? raw : null
}

export function FoodPage() {
  const [searchParams] = useSearchParams()
  const [cat, setCat] = useState<FoodCategory | 'all'>('all')
  const [cityFilter, setCityFilter] = useState<string | null>(() =>
    cityIdFromSearch(searchParams),
  )

  useEffect(() => {
    setCityFilter(cityIdFromSearch(searchParams))
  }, [searchParams])

  const filtered = useMemo(() => {
    let list = cat === 'all' ? foodHighlights : foodHighlights.filter((f) => f.category === cat)
    if (cityFilter) {
      list = list.filter((f) => f.cityIds.includes(cityFilter))
    }
    return list
  }, [cat, cityFilter])

  return (
    <Section
      eyebrow="Khana"
      title="Flavours of Rajasthan"
      lead="From thalis to street snacks — filter by mood. Restaurants with matching vibes are linked from each city page."
      spacing="hero"
    >
      <FoodCategoryStrip active={cat} onSelect={setCat} />
      <ul className="food-grid">
        {filtered.map((item) => (
          <li key={item.id} className="food-card">
            <h3 className="food-card__title">{item.name}</h3>
            <p className="food-card__text">{item.description}</p>
            <p className="food-card__cities">
              {item.cityIds
                .map((id) => cities.find((c) => c.id === id)?.name ?? id)
                .join(' · ')}
            </p>
            <Link className="food-card__link" to="/restaurants">
              Find restaurants
            </Link>
          </li>
        ))}
      </ul>
    </Section>
  )
}
