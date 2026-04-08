import { useMemo } from 'react'
import { Link, useParams } from 'react-router-dom'
import { Button } from '@/components/ui/Button'
import { CityFestivalsAccordion } from '@/components/features/CityFestivalsAccordion'
import { getCityFestivalsBySlug } from '@/data/cityFestivals'
import { getCityBySlug } from '@/data/cities'
import '@/pages/WeatherPage.css'
import './CityPage.css'
import './CityFestivalsPage.css'

/** Dedicated calendar — not part of the “Best time to visit” city guide screen. */
export function CityFestivalsPage() {
  const { slug } = useParams()
  const city = slug ? getCityBySlug(slug) : undefined

  const bundle = useMemo(() => (slug ? getCityFestivalsBySlug(slug) : undefined), [slug])

  if (!city) {
    return (
      <div className="city-page city-page--app">
        <div className="city-missing">
          <h1 className="city-missing__title">City not found</h1>
          <p className="city-missing__text">We do not have a festival guide for that link yet.</p>
          <Button to="/cities">Back to cities</Button>
        </div>
      </div>
    )
  }

  return (
    <div className="city-page city-page--app city-festivals-page">
      <header className="weather-page__intro city-page__intro">
        <p className="city-page__region">{city.region}</p>
        <h1 className="weather-page__city">{city.name}</h1>
        <p className="weather-page__sub city-festivals-page__subtitle">Festivals &amp; fairs</p>
      </header>

      {bundle ? (
        <CityFestivalsAccordion bundle={bundle} />
      ) : (
        <p className="city-festivals-page__fallback">
          We are still building a full festival calendar for {city.name}.{' '}
          <Link to={`/city/${city.slug}`}>Open the city guide</Link> for seasons under “Best time to visit”.
        </p>
      )}

      <p className="city-festivals-page__back">
        <Link to={`/city/${city.slug}`} className="city-festivals-page__back-link">
          ← Back to {city.name} guide
        </Link>
      </p>
    </div>
  )
}
