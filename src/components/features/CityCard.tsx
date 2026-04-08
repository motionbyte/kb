import { Link } from 'react-router-dom'
import type { City } from '@/types'
import { Card } from '@/components/ui/Card'
import { FortIcon } from '@/assets/illustrations'
import './CityCard.css'

type Props = {
  city: City
}

export function CityCard({ city }: Props) {
  return (
    <Link to={`/city/${city.slug}`} className="city-card-link">
      <Card variant="arch" interactive className="city-card">
        <div className="city-card__media">
          <FortIcon size={72} />
        </div>
        <div className="city-card__body">
          <p className="city-card__meta">{city.region}</p>
          <h3 className="city-card__title">{city.name}</h3>
          <p className="city-card__text">{city.tagline}</p>
        </div>
      </Card>
    </Link>
  )
}
