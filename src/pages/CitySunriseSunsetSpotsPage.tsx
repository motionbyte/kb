import { useMemo } from 'react'
import { Link, useParams } from 'react-router-dom'
import { Button } from '@/components/ui/Button'
import { InstagramSpotsAccordion } from '@/components/features/InstagramSpotsAccordion'
import { getCitySunriseSunsetSpotsBySlug } from '@/data/citySunriseSunsetSpots'
import { getCityBySlug } from '@/data/cities'
import '@/pages/WeatherPage.css'
import './CityPage.css'
import './CityInstagramSpotsPage.css'

export function CitySunriseSunsetSpotsPage() {
  const { slug } = useParams()
  const city = slug ? getCityBySlug(slug) : undefined

  const bundle = useMemo(() => (slug ? getCitySunriseSunsetSpotsBySlug(slug) : undefined), [slug])

  if (!city) {
    return (
      <div className="city-page city-page--app">
        <div className="city-missing">
          <h1 className="city-missing__title">City not found</h1>
          <p className="city-missing__text">We do not have a sunrise &amp; sunset guide for that link yet.</p>
          <Button to="/cities">Back to cities</Button>
        </div>
      </div>
    )
  }

  return (
    <div className="city-page city-page--app city-ig-page">
      <header className="weather-page__intro city-page__intro">
        <p className="city-page__region">{city.region}</p>
        <h1 className="weather-page__city">{city.name}</h1>
        <p className="weather-page__sub city-ig-page__subtitle">Sunrise &amp; sunset points</p>
      </header>

      {bundle ? (
        <InstagramSpotsAccordion bundle={bundle} cityName={city.name} variant="sunrise" />
      ) : (
        <p className="city-ig-page__fallback">
          We are still curating sunrise &amp; sunset viewpoints for {city.name}.{' '}
          <Link to={`/city/${city.slug}`}>Open the city guide</Link> for famous places and maps.
        </p>
      )}

      <p className="city-ig-page__back">
        <Link to={`/city/${city.slug}`} className="city-ig-page__back-link">
          ← Back to {city.name} guide
        </Link>
      </p>
    </div>
  )
}
