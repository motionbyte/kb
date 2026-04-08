import { GuideCityCategoryMenu } from '@/components/features/GuideCityCategoryMenu'
import { GuideCityDropdown } from '@/components/features/GuideCityDropdown'
import { cities, getCityBySlug } from '@/data/cities'
import './GuideHubMenu.css'

type Step = 'cities' | 'categories'

type GuideHubMenuProps = {
  step: Step
  /** City slug when step is categories */
  selectedCitySlug: string | null
  onSelectCity: (citySlug: string) => void
  onNavigate: (path: string) => void
}

export function GuideHubMenu({
  step,
  selectedCitySlug,
  onSelectCity,
  onNavigate,
}: GuideHubMenuProps) {
  const city = selectedCitySlug ? getCityBySlug(selectedCitySlug) : undefined

  return (
    <div className="guide-hub">
      <header className="guide-hub__head">
        {step === 'cities' ? (
          <>
            <h1 className="guide-hub__title" id="guide-hub-title">
              Choose a city
            </h1>
            <p className="guide-hub__lead">
              Where should we open the map? Pick one — then we&apos;ll show what a guide would
              know for that place.
            </p>
          </>
        ) : (
          <>
            <h1 className="guide-hub__title guide-hub__title--city" id="guide-hub-title">
              {city ? city.name : 'City'}
            </h1>
            <p className="guide-hub__lead">
              Choose a topic — each link opens in the guide for {city?.name ?? 'this city'}.
            </p>
          </>
        )}
      </header>

      {step === 'cities' ? (
        <div className="guide-hub__dropdown-wrap">
          <GuideCityDropdown cities={cities} onSelectCity={onSelectCity} />
        </div>
      ) : city ? (
        <div className="guide-hub__cat-menu">
          <GuideCityCategoryMenu city={city} onNavigate={onNavigate} />
        </div>
      ) : null}
    </div>
  )
}
