import { useMemo } from 'react'
import { useLocation, useParams } from 'react-router-dom'
import { Button } from '@/components/ui/Button'
import { CityFamousPlacesAccordion } from '@/components/features/CityFamousPlacesAccordion'
import { CityScamAlertsAccordion } from '@/components/features/CityScamAlertsAccordion'
import { CitySafetySection } from '@/components/features/CitySafetySection'
import { CityEtiquetteGuide } from '@/components/features/CityEtiquetteGuide'
import { CityLanguageHelpChat } from '@/components/features/CityLanguageHelpChat'
import { CityTravelSafetyTips } from '@/components/features/CityTravelSafetyTips'
import { CitySimCardsGuide } from '@/components/features/CitySimCardsGuide'
import { CityInternetGuide } from '@/components/features/CityInternetGuide'
import { CityCurrencyExchangeGuide } from '@/components/features/CityCurrencyExchangeGuide'
import { CityEmergencyContactsGuide } from '@/components/features/CityEmergencyContactsGuide'
import { CityHospitalsGuide } from '@/components/features/CityHospitalsGuide'
import { CityHotelsGuide } from '@/components/features/CityHotelsGuide'
import { CityAccommodationCategoryGuide } from '@/components/features/CityAccommodationCategoryGuide'
import { CityRestaurantsGuide } from '@/components/features/CityRestaurantsGuide'
import { CityFoodCategoryGuide } from '@/components/features/CityFoodCategoryGuide'
import { CityHistoricalPlacesGuide } from '@/components/features/CityHistoricalPlacesGuide'
import { CityAttractionsDetailedGuide } from '@/components/features/CityAttractionsDetailedGuide'
import { CityTransportGuide } from '@/components/features/CityTransportGuide'
import { CityShoppingGuide } from '@/components/features/CityShoppingGuide'
import { CityRoyalFamilyGuide } from '@/components/features/CityRoyalFamilyGuide'
import { getCityBySlug } from '@/data/cities'
import { getFamousPlacesByCitySlug } from '@/data/cityFamousPlaces'
import '@/pages/WeatherPage.css'
import './CityPage.css'

export function CityPage() {
  const { slug } = useParams()
  const { hash } = useLocation()
  const city = slug ? getCityBySlug(slug) : undefined
  /** Hub deep links — slim city header, no planning/history */
  const scamsFocus = hash === '#city-scams'
  /** Safety tips only — no emergency block, scams, or local-wisdom list */
  const safetyTipsFocus = hash === '#city-safety-tips'
  const etiquetteFocus = hash === '#city-etiquette'
  const languageHelpFocus = hash === '#city-language-help'
  const simCardsFocus = hash === '#city-sim-cards'
  const internetFocus = hash === '#city-internet'
  const currencyExchangeFocus = hash === '#city-currency-exchange'
  const emergencyContactsFocus = hash === '#city-emergency-contacts'
  const hospitalsFocus = hash === '#city-hospitals'
  const hotelsFocus = hash === '#city-hotels'
  const hostelsFocus = hash === '#city-hostels'
  const homestaysFocus = hash === '#city-homestays'
  const resortsFocus = hash === '#city-resorts'
  const heritageStaysFocus = hash === '#city-heritage-stays'
  const campsFocus = hash === '#city-camps'
  const restaurantsFocus = hash === '#city-restaurants'
  const streetFoodFocus = hash === '#city-street-food'
  const cafesFocus = hash === '#city-cafes'
  const fineDiningFocus = hash === '#city-fine-dining'
  const localCuisineFocus = hash === '#city-local-cuisine'
  const historicalPlacesFocus = hash === '#city-historical-places'
  const naturalSpotsFocus = hash === '#city-natural-spots'
  const religiousPlacesFocus = hash === '#city-religious-places'
  const museumsFocus = hash === '#city-museums'
  const hiddenGemsFocus = hash === '#city-hidden-gems'
  const localTransportFocus = hash === '#city-local-transport'
  const cabAppsFocus = hash === '#city-cab-apps'
  const rentalFocus = hash === '#city-rental'
  const publicTransportFocus = hash === '#city-public-transport'
  const airportTransfersFocus = hash === '#city-airport-transfers'
  const safariFocus = hash === '#city-safari'
  const localMarketsFocus = hash === '#city-local-markets'
  const handicraftsFocus = hash === '#city-handicrafts'
  const souvenirsFocus = hash === '#city-souvenirs'
  const shoppingStreetsFocus = hash === '#city-shopping-streets'
  const royalFamilyFocus = hash === '#city-royal-family'

  const famousPlaces = useMemo(() => {
    if (!slug) return []
    return getFamousPlacesByCitySlug(slug)
  }, [slug])

  if (!city) {
    return (
      <div className="city-page city-page--app">
        <div className="city-missing">
          <h1 className="city-missing__title">City not found</h1>
          <p className="city-missing__text">
            We do not have a guide page for that link yet.
          </p>
          <Button to="/cities">Back to cities</Button>
        </div>
      </div>
    )
  }

  if (scamsFocus) {
    return (
      <div className="city-page city-page--app city-page--scams-focus">
        <header className="weather-page__intro city-page__intro">
          <p className="city-page__region">{city.region}</p>
          <h1 className="weather-page__city">{city.name}</h1>
        </header>
        <CityScamAlertsAccordion cityName={city.name} />
      </div>
    )
  }

  if (safetyTipsFocus) {
    return (
      <div className="city-page city-page--app city-page--safety-tips-focus">
        <header className="weather-page__intro city-page__intro">
          <p className="city-page__region">{city.region}</p>
          <h1 className="weather-page__city">{city.name}</h1>
        </header>
        <CityTravelSafetyTips key={city.slug} cityName={city.name} />
      </div>
    )
  }

  if (etiquetteFocus) {
    return (
      <div className="city-page city-page--app city-page--etiquette-focus">
        <header className="weather-page__intro city-page__intro">
          <p className="city-page__region">{city.region}</p>
          <h1 className="weather-page__city">{city.name}</h1>
        </header>
        <CityEtiquetteGuide key={city.slug} cityName={city.name} />
      </div>
    )
  }

  if (languageHelpFocus) {
    return (
      <div className="city-page city-page--app city-page--language-help-focus">
        <header className="weather-page__intro city-page__intro">
          <p className="city-page__region">{city.region}</p>
          <h1 className="weather-page__city">{city.name}</h1>
        </header>
        <CityLanguageHelpChat key={city.slug} cityName={city.name} />
      </div>
    )
  }

  if (simCardsFocus) {
    return (
      <div className="city-page city-page--app city-page--sim-cards-focus">
        <header className="weather-page__intro city-page__intro">
          <p className="city-page__region">{city.region}</p>
          <h1 className="weather-page__city">{city.name}</h1>
        </header>
        <CitySimCardsGuide key={city.slug} citySlug={city.slug} cityName={city.name} />
      </div>
    )
  }

  if (internetFocus) {
    return (
      <div className="city-page city-page--app city-page--internet-focus">
        <header className="weather-page__intro city-page__intro">
          <p className="city-page__region">{city.region}</p>
          <h1 className="weather-page__city">{city.name}</h1>
        </header>
        <CityInternetGuide key={city.slug} citySlug={city.slug} cityName={city.name} />
      </div>
    )
  }

  if (currencyExchangeFocus) {
    return (
      <div className="city-page city-page--app city-page--currency-exchange-focus">
        <header className="weather-page__intro city-page__intro">
          <p className="city-page__region">{city.region}</p>
          <h1 className="weather-page__city">{city.name}</h1>
        </header>
        <CityCurrencyExchangeGuide key={city.slug} citySlug={city.slug} cityName={city.name} />
      </div>
    )
  }

  if (emergencyContactsFocus) {
    return (
      <div className="city-page city-page--app city-page--emergency-contacts-focus">
        <header className="weather-page__intro city-page__intro">
          <p className="city-page__region">{city.region}</p>
          <h1 className="weather-page__city">{city.name}</h1>
        </header>
        <CityEmergencyContactsGuide key={city.slug} citySlug={city.slug} cityName={city.name} />
      </div>
    )
  }

  if (hospitalsFocus) {
    return (
      <div className="city-page city-page--app city-page--hospitals-focus">
        <header className="weather-page__intro city-page__intro">
          <p className="city-page__region">{city.region}</p>
          <h1 className="weather-page__city">{city.name}</h1>
        </header>
        <CityHospitalsGuide key={city.slug} citySlug={city.slug} cityName={city.name} />
      </div>
    )
  }

  if (hotelsFocus) {
    return (
      <div className="city-page city-page--app city-page--hotels-focus">
        <header className="weather-page__intro city-page__intro">
          <p className="city-page__region">{city.region}</p>
          <h1 className="weather-page__city">{city.name}</h1>
        </header>
        <CityHotelsGuide key={city.slug} citySlug={city.slug} cityName={city.name} />
      </div>
    )
  }

  if (hostelsFocus) {
    return (
      <div className="city-page city-page--app city-page--hostels-focus">
        <header className="weather-page__intro city-page__intro">
          <p className="city-page__region">{city.region}</p>
          <h1 className="weather-page__city">{city.name}</h1>
        </header>
        <CityAccommodationCategoryGuide key={city.slug} citySlug={city.slug} cityName={city.name} category="hostels" />
      </div>
    )
  }

  if (homestaysFocus) {
    return (
      <div className="city-page city-page--app city-page--homestays-focus">
        <header className="weather-page__intro city-page__intro">
          <p className="city-page__region">{city.region}</p>
          <h1 className="weather-page__city">{city.name}</h1>
        </header>
        <CityAccommodationCategoryGuide key={city.slug} citySlug={city.slug} cityName={city.name} category="homestays" />
      </div>
    )
  }

  if (resortsFocus) {
    return (
      <div className="city-page city-page--app city-page--resorts-focus">
        <header className="weather-page__intro city-page__intro">
          <p className="city-page__region">{city.region}</p>
          <h1 className="weather-page__city">{city.name}</h1>
        </header>
        <CityAccommodationCategoryGuide key={city.slug} citySlug={city.slug} cityName={city.name} category="resorts" />
      </div>
    )
  }

  if (heritageStaysFocus) {
    return (
      <div className="city-page city-page--app city-page--heritage-stays-focus">
        <header className="weather-page__intro city-page__intro">
          <p className="city-page__region">{city.region}</p>
          <h1 className="weather-page__city">{city.name}</h1>
        </header>
        <CityAccommodationCategoryGuide key={city.slug} citySlug={city.slug} cityName={city.name} category="heritage" />
      </div>
    )
  }

  if (campsFocus) {
    return (
      <div className="city-page city-page--app city-page--camps-focus">
        <header className="weather-page__intro city-page__intro">
          <p className="city-page__region">{city.region}</p>
          <h1 className="weather-page__city">{city.name}</h1>
        </header>
        <CityAccommodationCategoryGuide key={city.slug} citySlug={city.slug} cityName={city.name} category="camps" />
      </div>
    )
  }

  if (restaurantsFocus) {
    return (
      <div className="city-page city-page--app city-page--restaurants-focus">
        <header className="weather-page__intro city-page__intro">
          <p className="city-page__region">{city.region}</p>
          <h1 className="weather-page__city">{city.name}</h1>
        </header>
        <CityRestaurantsGuide key={city.slug} citySlug={city.slug} cityName={city.name} />
      </div>
    )
  }

  if (streetFoodFocus) {
    return (
      <div className="city-page city-page--app">
        <header className="weather-page__intro city-page__intro">
          <p className="city-page__region">{city.region}</p>
          <h1 className="weather-page__city">{city.name}</h1>
        </header>
        <CityFoodCategoryGuide key={`${city.slug}-street-food`} citySlug={city.slug} cityName={city.name} kind="street-food" />
      </div>
    )
  }

  if (cafesFocus) {
    return (
      <div className="city-page city-page--app">
        <header className="weather-page__intro city-page__intro">
          <p className="city-page__region">{city.region}</p>
          <h1 className="weather-page__city">{city.name}</h1>
        </header>
        <CityFoodCategoryGuide key={`${city.slug}-cafes`} citySlug={city.slug} cityName={city.name} kind="cafes" />
      </div>
    )
  }

  if (fineDiningFocus) {
    return (
      <div className="city-page city-page--app">
        <header className="weather-page__intro city-page__intro">
          <p className="city-page__region">{city.region}</p>
          <h1 className="weather-page__city">{city.name}</h1>
        </header>
        <CityFoodCategoryGuide key={`${city.slug}-fine-dining`} citySlug={city.slug} cityName={city.name} kind="fine-dining" />
      </div>
    )
  }

  if (localCuisineFocus) {
    return (
      <div className="city-page city-page--app">
        <header className="weather-page__intro city-page__intro">
          <p className="city-page__region">{city.region}</p>
          <h1 className="weather-page__city">{city.name}</h1>
        </header>
        <CityFoodCategoryGuide key={`${city.slug}-local-cuisine`} citySlug={city.slug} cityName={city.name} kind="local-cuisine" />
      </div>
    )
  }

  if (historicalPlacesFocus) {
    return (
      <div className="city-page city-page--app city-page--historical-focus">
        <header className="weather-page__intro city-page__intro">
          <p className="city-page__region">{city.region}</p>
          <h1 className="weather-page__city">{city.name}</h1>
        </header>
        <CityHistoricalPlacesGuide key={city.slug} citySlug={city.slug} cityName={city.name} />
      </div>
    )
  }

  if (naturalSpotsFocus) {
    return (
      <div className="city-page city-page--app">
        <header className="weather-page__intro city-page__intro">
          <p className="city-page__region">{city.region}</p>
          <h1 className="weather-page__city">{city.name}</h1>
        </header>
        <CityAttractionsDetailedGuide key={`${city.slug}-natural`} citySlug={city.slug} cityName={city.name} kind="natural" />
      </div>
    )
  }

  if (religiousPlacesFocus) {
    return (
      <div className="city-page city-page--app">
        <header className="weather-page__intro city-page__intro">
          <p className="city-page__region">{city.region}</p>
          <h1 className="weather-page__city">{city.name}</h1>
        </header>
        <CityAttractionsDetailedGuide key={`${city.slug}-religious`} citySlug={city.slug} cityName={city.name} kind="religious" />
      </div>
    )
  }

  if (museumsFocus) {
    return (
      <div className="city-page city-page--app">
        <header className="weather-page__intro city-page__intro">
          <p className="city-page__region">{city.region}</p>
          <h1 className="weather-page__city">{city.name}</h1>
        </header>
        <CityAttractionsDetailedGuide key={`${city.slug}-museums`} citySlug={city.slug} cityName={city.name} kind="museums" />
      </div>
    )
  }

  if (hiddenGemsFocus) {
    return (
      <div className="city-page city-page--app">
        <header className="weather-page__intro city-page__intro">
          <p className="city-page__region">{city.region}</p>
          <h1 className="weather-page__city">{city.name}</h1>
        </header>
        <CityAttractionsDetailedGuide key={`${city.slug}-hidden-gems`} citySlug={city.slug} cityName={city.name} kind="hidden-gems" />
      </div>
    )
  }

  if (localTransportFocus) {
    return (
      <div className="city-page city-page--app">
        <header className="weather-page__intro city-page__intro">
          <p className="city-page__region">{city.region}</p>
          <h1 className="weather-page__city">{city.name}</h1>
        </header>
        <CityTransportGuide key={`${city.slug}-local-transport`} citySlug={city.slug} cityName={city.name} kind="local-transport" />
      </div>
    )
  }

  if (cabAppsFocus) {
    return (
      <div className="city-page city-page--app">
        <header className="weather-page__intro city-page__intro">
          <p className="city-page__region">{city.region}</p>
          <h1 className="weather-page__city">{city.name}</h1>
        </header>
        <CityTransportGuide key={`${city.slug}-cab-apps`} citySlug={city.slug} cityName={city.name} kind="cab-apps" />
      </div>
    )
  }

  if (rentalFocus) {
    return (
      <div className="city-page city-page--app">
        <header className="weather-page__intro city-page__intro">
          <p className="city-page__region">{city.region}</p>
          <h1 className="weather-page__city">{city.name}</h1>
        </header>
        <CityTransportGuide key={`${city.slug}-rental`} citySlug={city.slug} cityName={city.name} kind="rental" />
      </div>
    )
  }

  if (publicTransportFocus) {
    return (
      <div className="city-page city-page--app">
        <header className="weather-page__intro city-page__intro">
          <p className="city-page__region">{city.region}</p>
          <h1 className="weather-page__city">{city.name}</h1>
        </header>
        <CityTransportGuide key={`${city.slug}-public-transport`} citySlug={city.slug} cityName={city.name} kind="public-transport" />
      </div>
    )
  }

  if (airportTransfersFocus) {
    return (
      <div className="city-page city-page--app">
        <header className="weather-page__intro city-page__intro">
          <p className="city-page__region">{city.region}</p>
          <h1 className="weather-page__city">{city.name}</h1>
        </header>
        <CityTransportGuide key={`${city.slug}-airport-transfers`} citySlug={city.slug} cityName={city.name} kind="airport-transfers" />
      </div>
    )
  }

  if (safariFocus) {
    return (
      <div className="city-page city-page--app">
        <header className="weather-page__intro city-page__intro">
          <p className="city-page__region">{city.region}</p>
          <h1 className="weather-page__city">{city.name}</h1>
        </header>
        <CityTransportGuide key={`${city.slug}-safari`} citySlug={city.slug} cityName={city.name} kind="safari" />
      </div>
    )
  }

  if (localMarketsFocus) {
    return (
      <div className="city-page city-page--app">
        <header className="weather-page__intro city-page__intro">
          <p className="city-page__region">{city.region}</p>
          <h1 className="weather-page__city">{city.name}</h1>
        </header>
        <CityShoppingGuide key={`${city.slug}-local-markets`} citySlug={city.slug} cityName={city.name} kind="local-markets" />
      </div>
    )
  }

  if (handicraftsFocus) {
    return (
      <div className="city-page city-page--app">
        <header className="weather-page__intro city-page__intro">
          <p className="city-page__region">{city.region}</p>
          <h1 className="weather-page__city">{city.name}</h1>
        </header>
        <CityShoppingGuide key={`${city.slug}-handicrafts`} citySlug={city.slug} cityName={city.name} kind="handicrafts" />
      </div>
    )
  }

  if (souvenirsFocus) {
    return (
      <div className="city-page city-page--app">
        <header className="weather-page__intro city-page__intro">
          <p className="city-page__region">{city.region}</p>
          <h1 className="weather-page__city">{city.name}</h1>
        </header>
        <CityShoppingGuide key={`${city.slug}-souvenirs`} citySlug={city.slug} cityName={city.name} kind="souvenirs" />
      </div>
    )
  }

  if (shoppingStreetsFocus) {
    return (
      <div className="city-page city-page--app">
        <header className="weather-page__intro city-page__intro">
          <p className="city-page__region">{city.region}</p>
          <h1 className="weather-page__city">{city.name}</h1>
        </header>
        <CityShoppingGuide key={`${city.slug}-shopping-streets`} citySlug={city.slug} cityName={city.name} kind="shopping-streets" />
      </div>
    )
  }

  if (royalFamilyFocus) {
    return (
      <div className="city-page city-page--app city-page--royal-family-focus">
        <header className="weather-page__intro city-page__intro">
          <p className="city-page__region">{city.region}</p>
          <h1 className="weather-page__city">{city.name}</h1>
        </header>
        <CityRoyalFamilyGuide citySlug={city.slug} cityName={city.name} />
      </div>
    )
  }

  return (
    <div className="city-page city-page--app">
      <header className="weather-page__intro city-page__intro">
        <p className="city-page__region">{city.region}</p>
        <h1 className="weather-page__city">{city.name}</h1>
        {!scamsFocus ? (
          <>
            <p className="city-page__tagline">{city.tagline}</p>
            <p className="weather-page__sub city-page__desc">{city.description}</p>
          </>
        ) : null}
      </header>

      {!scamsFocus ? (
        <section id="city-best-places" className="city-page__block">
          <p className="city-page__eyebrow">Planning</p>
          <h2 className="city-page__block-title">Best time to visit</h2>
          <div className="city-page__best-window" role="region" aria-label="Best time to visit this area">
            <p className="city-page__best-window-label">When to go</p>
            <p className="city-page__best-window-text">{city.bestTime}</p>
          </div>
          {famousPlaces.length > 0 ? (
            <CityFamousPlacesAccordion
              places={famousPlaces}
              intro={
                <p>
                  Famous places — tap for photos, maps, <strong>best time</strong>, and{' '}
                  <strong>public hours</strong> (official where we could cite them; else typical web &amp; visitor
                  patterns — always confirm at the gate).
                </p>
              }
            />
          ) : (
            <p className="city-best-fallback">
              Seasonal tips for walking monuments and markets continue in{' '}
              <a href="#city-tips">Local wisdom</a> below.
            </p>
          )}
        </section>
      ) : null}

      <CitySafetySection citySlug={city.slug} cityName={city.name} />

      <CityScamAlertsAccordion cityName={city.name} />

      <section id="city-tips" className="city-page__block city-page__block--last">
        <p className="city-page__eyebrow">Local wisdom</p>
        <h2 className="city-page__block-title">Tips before you wander</h2>
        <p className="city-page__lead city-page__lead--muted">
          Short, practical notes — the kind a friend scribbles on the back of a ticket.
        </p>
        <ul className="city-page__tips">
          {city.localTips.map((tip) => (
            <li key={tip}>{tip}</li>
          ))}
        </ul>
      </section>
    </div>
  )
}
