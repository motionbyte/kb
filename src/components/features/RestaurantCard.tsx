import { Link } from 'react-router-dom'
import type { Restaurant } from '@/types'
import { VIBE_LABELS } from '@/data/restaurants'
import { cities } from '@/data/cities'
import { Card } from '@/components/ui/Card'
import { PlateIcon } from '@/assets/illustrations'
import './RestaurantCard.css'

type Props = {
  restaurant: Restaurant
}

function priceDots(level: Restaurant['priceLevel']): string {
  return '₹'.repeat(level) + '·'.repeat(4 - level)
}

export function RestaurantCard({ restaurant }: Props) {
  const city = cities.find((c) => c.id === restaurant.cityId)
  return (
    <Card variant="arch" className="restaurant-card">
      <div className="restaurant-card__media">
        <PlateIcon size={64} />
      </div>
      <div className="restaurant-card__body">
        <p className="restaurant-card__meta">
          {city?.name ?? 'Rajasthan'}
          {restaurant.area ? ` · ${restaurant.area}` : ''}
        </p>
        <h3 className="restaurant-card__title">{restaurant.name}</h3>
        <p className="restaurant-card__vibe">
          {VIBE_LABELS[restaurant.vibe]} ·{' '}
          <span className="restaurant-card__price" title="Price band">
            {priceDots(restaurant.priceLevel)}
          </span>
        </p>
        <p className="restaurant-card__text">{restaurant.shortDescription}</p>
        <ul className="restaurant-card__tags">
          {restaurant.tags.map((t) => (
            <li key={t}>{t}</li>
          ))}
        </ul>
        {city ? (
          <Link className="restaurant-card__city-link" to={`/city/${city.slug}`}>
            Explore {city.name}
          </Link>
        ) : null}
      </div>
    </Card>
  )
}
