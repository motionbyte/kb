import { useMemo } from 'react'
import { Link, useParams } from 'react-router-dom'
import { Button } from '@/components/ui/Button'
import { CityWorkshopsAccordion } from '@/components/features/CityWorkshopsAccordion'
import { getCityWorkshopsBySlug } from '@/data/cityWorkshops'
import { getCityBySlug } from '@/data/cities'
import '@/pages/WeatherPage.css'
import './CityPage.css'
import './CityWorkshopsPage.css'

export function CityWorkshopsPage() {
  const { slug } = useParams()
  const city = slug ? getCityBySlug(slug) : undefined

  const bundle = useMemo(() => {
    if (!slug || !city) return undefined
    return getCityWorkshopsBySlug(slug, city.name)
  }, [slug, city])

  if (!city) {
    return (
      <div className="city-page city-page--app">
        <div className="city-missing">
          <h1 className="city-missing__title">City not found</h1>
          <p className="city-missing__text">We do not have a workshops guide for that link yet.</p>
          <Button to="/cities">Back to cities</Button>
        </div>
      </div>
    )
  }

  return (
    <div className="city-page city-page--app city-workshops-page">
      <header className="weather-page__intro city-page__intro">
        <p className="city-page__region">{city.region}</p>
        <h1 className="weather-page__city">{city.name}</h1>
        <p className="weather-page__sub city-workshops-page__subtitle">Workshops — cooking &amp; art</p>
      </header>

      {bundle ? (
        <CityWorkshopsAccordion bundle={bundle} />
      ) : (
        <p className="city-workshops-page__fallback">
          Workshops for {city.name} could not be loaded.{' '}
          <Link to={`/city/${city.slug}`}>Open the city guide</Link>.
        </p>
      )}

      <p className="city-workshops-page__back">
        <Link to={`/city/${city.slug}`} className="city-workshops-page__back-link">
          ← Back to {city.name} guide
        </Link>
      </p>
    </div>
  )
}
