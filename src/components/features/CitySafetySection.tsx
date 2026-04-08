import { useEffect, useState } from 'react'
import { getCitySafetyBySlug } from '@/data/citySafety'
import { HospitalsNearbyList } from '@/components/features/HospitalsNearbyList'
import { cn } from '@/lib/cn'
import './CitySafetySection.css'

type Props = {
  citySlug: string
  cityName: string
}

function PhoneIcon() {
  return (
    <svg className="city-safety__line-icon" viewBox="0 0 24 24" aria-hidden>
      <path
        fill="none"
        stroke="currentColor"
        strokeWidth="1.75"
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"
      />
    </svg>
  )
}

function HospitalIcon() {
  return (
    <svg className="city-safety__btn-icon" viewBox="0 0 24 24" aria-hidden>
      <path
        fill="none"
        stroke="currentColor"
        strokeWidth="1.75"
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M3 21h18M5 21V7l7-4 7 4v14M9 21v-4h6v4M9 9h1M9 13h1M14 9h1M14 13h1"
      />
    </svg>
  )
}

export function CitySafetySection({ citySlug, cityName }: Props) {
  const bundle = getCitySafetyBySlug(citySlug)
  const [hospitalOpen, setHospitalOpen] = useState(false)
  const hospitalPanelId = `hospital-list-${citySlug}`

  useEffect(() => {
    if (!bundle) return
    setHospitalOpen(false)
  }, [bundle, citySlug])

  if (!bundle) return null

  return (
    <section id="city-emergency" className="city-page__block city-safety">
      <p className="city-page__eyebrow">Safety</p>
      <h2 className="city-page__block-title">Emergency &amp; help</h2>
      <p className="city-safety__note">
        For life-threatening emergencies use <strong>112</strong> (all-India) or <strong>108</strong>{' '}
        (ambulance). Numbers below are for planning — verify on official sites.
      </p>

      <ul className="city-safety__phones">
        {bundle.emergencyLines.map((line) => (
          <li key={line.id} className="city-safety__phone-row">
            <PhoneIcon />
            <div className="city-safety__phone-meta">
              <span className="city-safety__phone-label">{line.label}</span>
              <a className="city-safety__phone-tel" href={`tel:${line.telDigits}`}>
                {line.displayNumber}
              </a>
            </div>
          </li>
        ))}
      </ul>

      <div className="city-safety__hospital-wrap">
        <button
          type="button"
          className={cn('city-safety__hospital-btn', hospitalOpen && 'city-safety__hospital-btn--open')}
          aria-expanded={hospitalOpen}
          aria-controls={hospitalPanelId}
          id="city-hospital-toggle"
          onClick={() => setHospitalOpen((o) => !o)}
        >
          <HospitalIcon />
          <span>Hospitals nearby</span>
          <span className="city-safety__hospital-chevron" aria-hidden>
            {hospitalOpen ? '▴' : '▾'}
          </span>
        </button>

        {hospitalOpen ? (
          <HospitalsNearbyList
            citySlug={citySlug}
            cityName={cityName}
            isActive={hospitalOpen}
            embedded={false}
            ariaLabelledBy="city-hospital-toggle"
          />
        ) : null}
      </div>
    </section>
  )
}
