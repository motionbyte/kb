import { useMemo } from 'react'
import { Link, useParams } from 'react-router-dom'
import { Button } from '@/components/ui/Button'
import { getCityDroneInfoBySlug } from '@/data/cityDroneInfo'
import type { CityDroneBundle, DroneZoneBand } from '@/data/cityDroneInfo'
import { getCityBySlug } from '@/data/cities'
import { cn } from '@/lib/cn'
import '@/pages/WeatherPage.css'
import './CityPage.css'
import './CityInstagramSpotsPage.css'
import './CityDroneInfoPage.css'

function zoneBandMeta(band: DroneZoneBand): { badge: string; mark: string } {
  switch (band) {
    case 'banned':
      return { badge: 'Restricted', mark: '⛔' }
    case 'caution':
      return { badge: 'Permission / checks', mark: '⚠️' }
    case 'ok':
      return { badge: 'Often feasible', mark: '✅' }
    default:
      return { badge: '', mark: '•' }
  }
}

function ruleStatusMark(status: 'banned' | 'caution' | 'ok'): string {
  switch (status) {
    case 'banned':
      return '❌'
    case 'caution':
      return '⚠️'
    case 'ok':
      return '✅'
    default:
      return '•'
  }
}

function DroneContent({ bundle }: { bundle: CityDroneBundle }) {
  return (
    <>
      <div className="city-history__what drone-page__lead">
        <h2 className="city-history__what-title">{bundle.pageTitle}</h2>
        {bundle.leadParagraphs.map((p, i) => (
          <p key={i} className="city-history__what-para">
            {p}
          </p>
        ))}
      </div>

      <section className="drone-page__section" aria-labelledby="drone-can-fly">
        <div className="drone-page__answer-card">
          <h3 id="drone-can-fly" className="drone-page__answer-title">
            {bundle.canFlyAnswer.heading}
          </h3>
          {bundle.canFlyAnswer.paragraphs.map((p, i) => (
            <p key={i} className="drone-page__para">
              {p}
            </p>
          ))}
        </div>
      </section>

      <section className="drone-page__section" aria-labelledby="drone-zones">
        <h3 id="drone-zones" className="drone-page__section-title">
          Where it is banned vs where it may be allowed
        </h3>
        <p className="drone-page__para">
          Three bands travellers use as a mental model. Digital Sky and local orders always override this summary.
        </p>
        <div className="drone-page__zones">
          {bundle.zones.map((z) => {
            const meta = zoneBandMeta(z.band)
            return (
              <div
                key={z.title}
                className={cn(
                  'drone-zone-card',
                  z.band === 'banned' && 'drone-zone-card--banned',
                  z.band === 'caution' && 'drone-zone-card--caution',
                  z.band === 'ok' && 'drone-zone-card--ok',
                )}
              >
                <div className="drone-zone-card__head">
                  <span className="drone-zone-card__badge" aria-hidden>
                    {meta.mark}
                  </span>
                  <div>
                    <span className="visually-hidden">{meta.badge}</span>
                    <p className="drone-zone-card__title">{z.title}</p>
                    <p className="drone-zone-card__sub">{z.subtitle}</p>
                  </div>
                </div>
                <ul className="drone-zone-card__list">
                  {z.bullets.map((b) => (
                    <li key={b}>{b}</li>
                  ))}
                </ul>
              </div>
            )
          })}
        </div>
      </section>

      <section className="drone-page__section" aria-labelledby="drone-india-rules">
        <h3 id="drone-india-rules" className="drone-page__section-title">
          {bundle.indiaRulesTitle}
        </h3>
        <p className="drone-page__para">{bundle.indiaRulesIntro}</p>
        <div className="drone-rules-table" role="list">
          {bundle.indiaRules.map((r) => (
            <div key={r.id} className="drone-rule-row" role="listitem">
              <div className="drone-rule-row__top">
                <span className="drone-rule-row__mark" aria-hidden>
                  {ruleStatusMark(r.status)}
                </span>
                <span className="drone-rule-row__label">{r.label}</span>
              </div>
              <p className="drone-rule-row__detail">{r.detail}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="drone-page__section" aria-labelledby="drone-local">
        <h3 id="drone-local" className="drone-page__section-title">
          {bundle.localContextTitle}
        </h3>
        {bundle.localContextParagraphs.map((p, i) => (
          <p key={i} className="drone-page__para">
            {p}
          </p>
        ))}
      </section>

      <section className="drone-page__section" aria-labelledby="drone-perm">
        <h3 id="drone-perm" className="drone-page__section-title">
          {bundle.permissionTitle}
        </h3>
        <p className="drone-page__para">{bundle.permissionIntro}</p>
        <ul className="drone-perm-list">
          {bundle.permissionTriggers.map((t) => (
            <li key={t.title} className="drone-perm-item">
              <p className="drone-perm-item__title">{t.title}</p>
              <p className="drone-perm-item__detail">{t.detail}</p>
            </li>
          ))}
        </ul>
      </section>

      <section className="drone-page__section" aria-labelledby="drone-reg">
        <div className="drone-reg-card">
          <h3 id="drone-reg" className="drone-reg-card__title">
            {bundle.registrationBlock.title}
          </h3>
          {bundle.registrationBlock.paragraphs.map((p, i) => (
            <p key={i} className="drone-page__para">
              {p}
            </p>
          ))}
        </div>
      </section>

      <section className="drone-page__section" aria-labelledby="drone-contacts">
        <h3 id="drone-contacts" className="drone-page__section-title">
          Who to contact (authorities & helplines)
        </h3>
        <p className="drone-page__para">
          Save these before you travel. Numbers can change — cross-check on official government sites when possible.
        </p>
        <div className="drone-contacts">
          {bundle.contacts.map((c) => (
            <div key={c.id} className="drone-contact">
              <p className="drone-contact__org">{c.organization}</p>
              <p className="drone-contact__role">{c.role}</p>
              <div className="drone-contact__row">
                {c.phoneDisplay && c.telDigits ? (
                  <a className="drone-contact__tel" href={`tel:${c.telDigits}`}>
                    {c.phoneDisplay}
                  </a>
                ) : null}
                {c.website ? (
                  <a className="drone-contact__link" href={c.website} target="_blank" rel="noopener noreferrer">
                    Official website
                  </a>
                ) : null}
              </div>
              {c.note ? <p className="drone-contact__note">{c.note}</p> : null}
            </div>
          ))}
        </div>
      </section>

      <section className="drone-page__section" aria-labelledby="drone-official">
        <h3 id="drone-official" className="drone-page__section-title">
          Official links (bookmark)
        </h3>
        <div className="drone-page__links">
          {bundle.officialLinks.map((l) => (
            <a key={l.href} href={l.href} target="_blank" rel="noopener noreferrer">
              {l.label} — {l.href}
            </a>
          ))}
        </div>
      </section>

      <section className="drone-page__disclaimer" aria-labelledby="drone-disclaimer">
        <h3 id="drone-disclaimer" className="visually-hidden">
          Disclaimer
        </h3>
        {bundle.disclaimer.map((p, i) => (
          <p key={i} className="drone-page__para">
            {p}
          </p>
        ))}
      </section>
    </>
  )
}

export function CityDroneInfoPage() {
  const { slug } = useParams()
  const city = slug ? getCityBySlug(slug) : undefined

  const bundle = useMemo(() => {
    if (!slug || !city) return null
    return getCityDroneInfoBySlug(slug, city.name)
  }, [slug, city])

  if (!city) {
    return (
      <div className="city-page city-page--app">
        <div className="city-missing">
          <h1 className="city-missing__title">City not found</h1>
          <p className="city-missing__text">We do not have a drone guide for that link yet.</p>
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
        <p className="weather-page__sub city-ig-page__subtitle">Drone info &amp; flying rules</p>
      </header>

      {bundle ? (
        <DroneContent bundle={bundle} />
      ) : (
        <p className="city-ig-page__fallback">
          Drone information could not be loaded for {city.name}.{' '}
          <Link to={`/city/${city.slug}`}>Open the city guide</Link>.
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
