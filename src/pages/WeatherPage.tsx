import { useCallback, useEffect, useState, type ReactNode } from 'react'
import { Link, useParams } from 'react-router-dom'
import { getCityBySlug } from '@/data/cities'
import {
  type CurrentWeatherBundle,
  fetchWeatherBundle,
  formatVal,
  geocodeCityInIndia,
} from '@/lib/weather/openMeteo'
import { exclusiveAccordionToggle } from '@/lib/exclusiveAccordion'
import { cn } from '@/lib/cn'
import './WeatherPage.css'

function CardIconWeather() {
  return (
    <svg className="weather-page__acc-icon" viewBox="0 0 24 24" aria-hidden>
      <path
        fill="none"
        stroke="currentColor"
        strokeWidth="1.75"
        strokeLinecap="round"
        d="M7 14a4 4 0 0 1 6.7-3 3.5 3.5 0 1 1 2.3 6H7Z"
      />
    </svg>
  )
}

function CardIconMarine() {
  return (
    <svg className="weather-page__acc-icon" viewBox="0 0 24 24" aria-hidden>
      <path
        fill="none"
        stroke="currentColor"
        strokeWidth="1.75"
        strokeLinecap="round"
        d="M2 14c2 2 4 0 6 2s4-2 6 0 4 2 6 0M2 18c2 2 4 0 6 2s4-2 6 0 4 2 6 0M2 10c2 2 4 0 6 2s4-2 6 0 4 2 6 0"
      />
    </svg>
  )
}

function CardIconTide() {
  return (
    <svg className="weather-page__acc-icon" viewBox="0 0 24 24" aria-hidden>
      <path
        fill="currentColor"
        d="M5 18V8h3v10H5zm5.5 4V4h3v18h-3zM16 14v8h3v-8h-3z"
        opacity="0.9"
      />
    </svg>
  )
}

function CardIconSolar() {
  return (
    <svg className="weather-page__acc-icon" viewBox="0 0 24 24" aria-hidden>
      <circle cx="12" cy="12" r="4" fill="none" stroke="currentColor" strokeWidth="1.75" />
      <path
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        d="M12 2v2M12 20v2M2 12h2M20 12h2M4.9 4.9l1.4 1.4M17.7 17.7l1.4 1.4M19.1 4.9l-1.4 1.4M6.3 17.7l-1.4 1.4"
      />
    </svg>
  )
}

function Row({ label, value }: { label: string; value: string }) {
  return (
    <div className="weather-page__row">
      <span className="weather-page__row-label">{label}</span>
      <span className="weather-page__row-value">{value}</span>
    </div>
  )
}

type AccProps = {
  id: string
  title: string
  icon: ReactNode
  isOpen: boolean
  onToggle: () => void
  index: number
  children: React.ReactNode
}

function AccordionSection({ id, title, icon, isOpen, onToggle, index, children }: AccProps) {
  const triggerId = `weather-acc-${id}`
  const panelId = `weather-panel-${id}`

  return (
    <div className={cn('weather-page__acc-block', index > 0 && 'weather-page__acc-block--spaced')}>
      {index > 0 ? <div className="weather-page__acc-rule" aria-hidden /> : null}
      <button
        type="button"
        id={triggerId}
        className={cn('weather-page__acc-trigger', isOpen && 'weather-page__acc-trigger--open')}
        aria-expanded={isOpen}
        aria-controls={panelId}
        onClick={onToggle}
      >
        <span className="weather-page__acc-trigger-main">
          {icon}
          <span className="weather-page__acc-title">{title}</span>
        </span>
        <span className="weather-page__acc-chevron" aria-hidden>
          {isOpen ? '▴' : '▾'}
        </span>
      </button>
      <div
        id={panelId}
        role="region"
        aria-labelledby={triggerId}
        aria-hidden={!isOpen}
        className={cn('weather-page__acc-panel-wrap', isOpen && 'is-open')}
      >
        <div className="weather-page__acc-panel-inner">
          <div className="weather-page__acc-body">{children}</div>
        </div>
      </div>
    </div>
  )
}

export function WeatherPage() {
  const { citySlug } = useParams()
  const city = citySlug ? getCityBySlug(citySlug) : undefined

  const [bundle, setBundle] = useState<CurrentWeatherBundle | null>(null)
  const [error, setError] = useState<string | null>(null)
  const [loading, setLoading] = useState(true)
  const [open, setOpen] = useState<Record<string, boolean>>({
    weather: false,
    marine: false,
    tide: false,
    solar: false,
  })

  const weatherAccIds = ['weather', 'marine', 'tide', 'solar']
  const toggle = useCallback((key: string) => {
    setOpen((o) => exclusiveAccordionToggle(weatherAccIds, o, key))
  }, [])

  /** New city in URL → idle accordions + no stale forecast from the previous city */
  useEffect(() => {
    setOpen({ weather: false, marine: false, tide: false, solar: false })
    setBundle(null)
  }, [citySlug])

  useEffect(() => {
    if (!city) {
      setLoading(false)
      setError('City not found')
      return
    }

    let cancelled = false
    setLoading(true)
    setError(null)

    ;(async () => {
      try {
        const geo = await geocodeCityInIndia(city.name)
        if (cancelled) return
        if (!geo) {
          setError('Could not locate this city for weather data.')
          setLoading(false)
          return
        }
        const b = await fetchWeatherBundle(geo.name, geo.latitude, geo.longitude)
        if (!cancelled) {
          setBundle(b)
        }
      } catch (e) {
        if (!cancelled) {
          setError(e instanceof Error ? e.message : 'Weather could not be loaded.')
        }
      } finally {
        if (!cancelled) setLoading(false)
      }
    })()

    return () => {
      cancelled = true
    }
  }, [city])

  if (!city) {
    return (
      <div className="weather-page weather-page--app">
        <p className="weather-page__err">
          <Link to="/">Back home</Link>
        </p>
      </div>
    )
  }

  return (
    <div className="weather-page weather-page--app">
      <header className="weather-page__intro">
        <h1 className="weather-page__city">{city.name}</h1>
        <p className="weather-page__sub">
          Open-Meteo · planning only, not for critical decisions.
        </p>
        {bundle?.time ? (
          <p className="weather-page__updated">Updated · {bundle.time}</p>
        ) : null}
      </header>

      {loading ? (
        <p className="weather-page__loading" role="status">
          Loading forecast…
        </p>
      ) : error ? (
        <p className="weather-page__err">{error}</p>
      ) : bundle ? (
        <div className="weather-page__acc-stack">
          <AccordionSection
            id="weather"
            title="Weather"
            icon={<CardIconWeather />}
            isOpen={Boolean(open.weather)}
            onToggle={() => toggle('weather')}
            index={0}
          >
            <Row label="Air temperature" value={formatVal(bundle.temperatureC, '°C')} />
            <Row label="Air pressure (MSL)" value={formatVal(bundle.pressureMslHpa, 'hPa', 0)} />
            <Row label="Surface pressure" value={formatVal(bundle.surfacePressureHpa, 'hPa', 0)} />
            <Row label="Wind" value={formatVal(bundle.windSpeedMs, 'm/s')} />
            <Row
              label="Wind direction"
              value={bundle.windDirDeg !== null ? `${Math.round(bundle.windDirDeg)}°` : '—'}
            />
            <Row label="Gust" value={formatVal(bundle.windGustsMs, 'm/s')} />
            <Row label="Precipitation (now)" value={formatVal(bundle.precipitationMm, 'mm')} />
            <Row label="Humidity" value={formatVal(bundle.humidityPct, '%', 0)} />
            <Row label="Dew point" value={formatVal(bundle.dewpointC, '°C')} />
            <Row
              label="Visibility"
              value={
                bundle.visibilityM !== null
                  ? `${(bundle.visibilityM / 1000).toFixed(1)} km`
                  : '—'
              }
            />
            <Row label="Snow (now)" value={formatVal(bundle.snowfallCm, 'cm')} />
            <Row label="Soil moisture (0–7 cm)" value={formatVal(bundle.soilMoisture, 'm³/m³')} />
            <Row label="Soil temp. (0–7 cm)" value={formatVal(bundle.soilTempC, '°C')} />
            <p className="weather-page__more">And more… (model adds hourly detail)</p>
          </AccordionSection>

          <AccordionSection
            id="marine"
            title="Marine weather"
            icon={<CardIconMarine />}
            isOpen={Boolean(open.marine)}
            onToggle={() => toggle('marine')}
            index={1}
          >
            {bundle.isInlandNote ? (
              <p className="weather-page__note">
                {city.name} is inland — marine grids target coastal waters. Values below only if the
                model returns them for this point.
              </p>
            ) : null}
            <Row label="Wave" value={formatVal(bundle.marineSample?.waveHeightM ?? null, 'm')} />
            <Row
              label="Current"
              value={formatVal(bundle.marineSample?.oceanCurrentVelocity ?? null, 'm/s')}
            />
            <Row label="Swell" value="—" />
            <Row label="Secondary swell" value="—" />
            <Row label="Wind wave" value="—" />
            <Row
              label="Water temperature"
              value={formatVal(bundle.marineSample?.seaSurfaceTempC ?? null, '°C')}
            />
            <Row label="Ice" value="—" />
            <Row label="Sea depth" value="—" />
            <Row label="Chlorophyll" value="—" />
            <Row label="Salinity" value="—" />
            <Row label="pH" value="—" />
            <Row label="Oxygen" value="—" />
            <Row label="Phytoplankton" value="—" />
            <p className="weather-page__more">And more…</p>
          </AccordionSection>

          <AccordionSection
            id="tide"
            title="Tide"
            icon={<CardIconTide />}
            isOpen={Boolean(open.tide)}
            onToggle={() => toggle('tide')}
            index={2}
          >
            <p className="weather-page__note">
              Tide needs port-specific models — use official coastal or harbour sources for your
              area.
            </p>
            <Row label="Extremes" value="—" />
            <Row label="High / low" value="—" />
            <Row label="Sea level" value="—" />
          </AccordionSection>

          <AccordionSection
            id="solar"
            title="Solar"
            icon={<CardIconSolar />}
            isOpen={Boolean(open.solar)}
            onToggle={() => toggle('solar')}
            index={3}
          >
            <Row
              label="Radiation (today’s sum)"
              value={
                bundle.shortwaveRadiationMJ !== null
                  ? `${bundle.shortwaveRadiationMJ.toFixed(2)} MJ/m²`
                  : '—'
              }
            />
            <Row
              label="UV index (daily max)"
              value={bundle.uvIndexMax !== null ? bundle.uvIndexMax.toFixed(1) : '—'}
            />
            <Row label="Cloud cover (now)" value={formatVal(bundle.cloudCoverPct, '%', 0)} />
          </AccordionSection>
        </div>
      ) : null}
    </div>
  )
}
