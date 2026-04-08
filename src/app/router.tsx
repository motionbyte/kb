import { createBrowserRouter, Navigate, useParams } from 'react-router-dom'
import { PageShell } from '@/components/layout/PageShell'
import { AboutPage } from '@/pages/AboutPage'
import { CitiesPage } from '@/pages/CitiesPage'
import { CityFestivalsPage } from '@/pages/CityFestivalsPage'
import { CityInstagramSpotsPage } from '@/pages/CityInstagramSpotsPage'
import { CitySunriseSunsetSpotsPage } from '@/pages/CitySunriseSunsetSpotsPage'
import { CityDroneInfoPage } from '@/pages/CityDroneInfoPage'
import { CityCulturalShowsPage } from '@/pages/CityCulturalShowsPage'
import { CityAdventureActivitiesPage } from '@/pages/CityAdventureActivitiesPage'
import { CityWorkshopsPage } from '@/pages/CityWorkshopsPage'
import { CityNightlifePage } from '@/pages/CityNightlifePage'
import { CityPage } from '@/pages/CityPage'
import { FoodPage } from '@/pages/FoodPage'
import { HomePage } from '@/pages/HomePage'
import { NotFoundPage } from '@/pages/NotFoundPage'
import { PlacesPage } from '@/pages/PlacesPage'
import { RestaurantsPage } from '@/pages/RestaurantsPage'
import { ShopComingSoonPage } from '@/pages/shop/ShopComingSoonPage'
import { WeatherPage } from '@/pages/WeatherPage'
import { ItineraryPlannerPage } from '@/pages/ItineraryPlannerPage'

/** `/city/:slug/festivals` → `/festivals/:slug` (stable match on all routers) */
function LegacyCityFestivalsUrlRedirect() {
  const { slug } = useParams()
  if (!slug) return <Navigate to="/cities" replace />
  return <Navigate to={`/festivals/${slug}`} replace />
}

export const router = createBrowserRouter([
  {
    path: '/',
    element: <PageShell />,
    children: [
      { index: true, element: <HomePage /> },
      { path: 'cities', element: <CitiesPage /> },
      { path: 'festivals/:slug', element: <CityFestivalsPage /> },
      { path: 'instagram-spots/:slug', element: <CityInstagramSpotsPage /> },
      { path: 'sunrise-sunset/:slug', element: <CitySunriseSunsetSpotsPage /> },
      { path: 'drone-info/:slug', element: <CityDroneInfoPage /> },
      { path: 'cultural-shows/:slug', element: <CityCulturalShowsPage /> },
      { path: 'adventure-activities/:slug', element: <CityAdventureActivitiesPage /> },
      { path: 'workshops/:slug', element: <CityWorkshopsPage /> },
      { path: 'nightlife/:slug', element: <CityNightlifePage /> },
      { path: 'city/:slug/festivals', element: <LegacyCityFestivalsUrlRedirect /> },
      { path: 'city/:slug', element: <CityPage /> },
      { path: 'weather/:citySlug', element: <WeatherPage /> },
      { path: 'food', element: <FoodPage /> },
      { path: 'restaurants', element: <RestaurantsPage /> },
      { path: 'places', element: <PlacesPage /> },
      { path: 'about', element: <AboutPage /> },
      { path: 'shop', element: <ShopComingSoonPage /> },
      { path: 'itinerary', element: <ItineraryPlannerPage /> },
      { path: '*', element: <NotFoundPage /> },
    ],
  },
])
