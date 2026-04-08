import { useMemo } from 'react'
import { Link, useParams } from 'react-router-dom'
import { Button } from '@/components/ui/Button'
import { CityCulturalShowsAccordion } from '@/components/features/CityCulturalShowsAccordion'
import { getCityCulturalShowsBySlug } from '@/data/cityCulturalShows'
import { getCityBySlug } from '@/data/cities'
import '@/pages/WeatherPage.css'
import './CityPage.css'
import './CityCulturalShowsPage.css'

export function CityCulturalShowsPage() {
  const { slug } = useParams()
  const city = slug ? getCityBySlug(slug) : undefined

  const bundle = useMemo(() => (slug ? getCityCulturalShowsBySlug(slug) : undefined), [slug])

  if (!city) {
    return (
      <div className="city-page city-page--app">
        <div className="city-missing">
          <h1 className="city-missing__title">City not found</h1>
          <p className="city-missing__text">We do not have a cultural shows guide for that link yet.</p>
          <Button to="/cities">Back to cities</Button>
        </div>
      </div>
    )
  }

  return (
    <div className="city-page city-page--app city-cultural-page">
      <header className="weather-page__intro city-page__intro">
        <p className="city-page__region">{city.region}</p>
        <h1 className="weather-page__city">{city.name}</h1>
        <p className="weather-page__sub city-cultural-page__subtitle">Cultural shows</p>
      </header>

      {bundle ? (
        <CityCulturalShowsAccordion bundle={bundle} />
      ) : (
        <p className="city-cultural-page__fallback">
          We are still curating cultural show details for {city.name}.{' '}
          <Link to={`/city/${city.slug}`}>Open the city guide</Link> for places and local tips.
        </p>
      )}

      <p className="city-cultural-page__back">
        <Link to={`/city/${city.slug}`} className="city-cultural-page__back-link">
          ← Back to {city.name} guide
        </Link>
      </p>
    </div>
  )
}
