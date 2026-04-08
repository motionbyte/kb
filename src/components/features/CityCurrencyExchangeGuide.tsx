import { useEffect, useMemo, useState } from 'react'
import { getCurrencyExchangeGuideByCitySlug } from '@/data/currencyExchangeGuide'
import './CityCurrencyExchangeGuide.css'

type Props = {
  citySlug: string
  cityName: string
}

type FxMode = 'to-inr' | 'from-inr'

const CURRENCY_OPTIONS = [
  'USD',
  'EUR',
  'GBP',
  'AED',
  'AUD',
  'CAD',
  'SGD',
  'JPY',
  'CNY',
  'THB',
  'CHF',
  'NZD',
  'MYR',
  'NPR',
  'LKR',
  'ZAR',
] as const

type RatesPayload = {
  base_code: string
  time_last_update_utc: string
  rates: Record<string, number>
}

export function CityCurrencyExchangeGuide({ citySlug, cityName }: Props) {
  const bundle = getCurrencyExchangeGuideByCitySlug(citySlug)
  const [mode, setMode] = useState<FxMode>('to-inr')
  const [amount, setAmount] = useState<string>('100')
  const [currency, setCurrency] = useState<string>('USD')
  const [rates, setRates] = useState<Record<string, number> | null>(null)
  const [updatedAt, setUpdatedAt] = useState<string>('')
  const [loadingRates, setLoadingRates] = useState<boolean>(true)
  const [ratesError, setRatesError] = useState<string>('')

  useEffect(() => {
    let cancelled = false

    async function loadRates() {
      setLoadingRates(true)
      setRatesError('')

      try {
        const res = await fetch('https://open.er-api.com/v6/latest/INR')
        if (!res.ok) throw new Error('Rate fetch failed')
        const data = (await res.json()) as RatesPayload
        if (!data?.rates?.USD) throw new Error('Rate payload invalid')
        if (cancelled) return
        setRates(data.rates)
        setUpdatedAt(data.time_last_update_utc ?? '')
      } catch {
        if (cancelled) return
        setRatesError('Live rates unavailable right now. Try again in a moment.')
      } finally {
        if (!cancelled) setLoadingRates(false)
      }
    }

    void loadRates()
    return () => {
      cancelled = true
    }
  }, [])

  const parsedAmount = Number(amount)
  const hasValidAmount = Number.isFinite(parsedAmount) && parsedAmount >= 0

  const conversion = useMemo(() => {
    if (!rates || !hasValidAmount) return null
    const r = rates[currency]
    if (!r) return null
    if (mode === 'to-inr') {
      // INR base means 1 INR = r currency units => 1 currency = 1/r INR
      return parsedAmount / r
    }
    // INR to currency
    return parsedAmount * r
  }, [rates, hasValidAmount, parsedAmount, currency, mode])

  const formattedResult = useMemo(() => {
    if (conversion == null) return '--'
    return conversion.toLocaleString(undefined, {
      maximumFractionDigits: 2,
      minimumFractionDigits: 2,
    })
  }, [conversion])

  const updatedAtLabel = useMemo(() => {
    if (!updatedAt) return ''
    const d = new Date(updatedAt)
    if (Number.isNaN(d.getTime())) return updatedAt
    return d.toLocaleString()
  }, [updatedAt])

  return (
    <section
      id="city-currency-exchange"
      className="city-page__block city-page__block--last city-currency"
      aria-labelledby="city-currency-title"
    >
      <div className="city-currency__hero">
        <h2 id="city-currency-title" className="city-currency__hero-main">
          {bundle.intro.title}
        </h2>
        <p className="city-currency__hero-sub">({bundle.intro.eyebrow})</p>
      </div>

      <p className="city-currency__lead">
        {bundle.intro.lead} <span className="city-currency__city">— {cityName}</span>
      </p>

      <div className="city-currency__tiles" aria-label="Quick reference">
        {bundle.quickTiles.map((t) => (
          <div key={t.label} className="city-currency__tile">
            <span className="city-currency__tile-label">{t.label}</span>
            <span className="city-currency__tile-value">{t.value}</span>
          </div>
        ))}
      </div>

      <article className="city-currency__card">
        <header className="city-currency__card-head">
          <span className="city-currency__card-emoji" aria-hidden>
            🔴
          </span>
          <div className="city-currency__card-titles">
            <h3 className="city-currency__card-title">Problem areas</h3>
            <p className="city-currency__card-sub">Where tourists lose money</p>
          </div>
        </header>
        <ul className="city-currency__bullets">
          {bundle.problems.map((x) => (
            <li key={x}>{x}</li>
          ))}
        </ul>
      </article>

      <article className="city-currency__card">
        <header className="city-currency__card-head">
          <span className="city-currency__card-emoji" aria-hidden>
            ✅
          </span>
          <div className="city-currency__card-titles">
            <h3 className="city-currency__card-title">Best exchange spots</h3>
            <p className="city-currency__card-sub">Safer options first</p>
          </div>
        </header>
        <div className="city-currency__spots">
          {bundle.bestSpots.map((s) => (
            <article key={s.id} className="city-currency__spot">
              <h4 className="city-currency__spot-title">{s.title}</h4>
              <p className="city-currency__spot-sub">{s.subtitle}</p>
              <p className="city-currency__spot-k">Why safer</p>
              <ul>
                {s.whySafer.map((x) => (
                  <li key={x}>{x}</li>
                ))}
              </ul>
              <p className="city-currency__spot-k city-currency__spot-k--warn">Avoid</p>
              <ul className="city-currency__spot-list--warn">
                {s.avoid.map((x) => (
                  <li key={x}>{x}</li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </article>

      <article className="city-currency__card city-currency__card--converter">
        <header className="city-currency__card-head">
          <span className="city-currency__card-emoji" aria-hidden>
            💱
          </span>
          <div className="city-currency__card-titles">
            <h3 className="city-currency__card-title">Live exchange converter</h3>
            <p className="city-currency__card-sub">Any currency ↔ INR</p>
          </div>
        </header>

        <div className="city-currency__converter">
          <div className="city-currency__mode">
            <button
              type="button"
              className={mode === 'to-inr' ? 'is-active' : ''}
              onClick={() => setMode('to-inr')}
            >
              Currency → INR
            </button>
            <button
              type="button"
              className={mode === 'from-inr' ? 'is-active' : ''}
              onClick={() => setMode('from-inr')}
            >
              INR → Currency
            </button>
          </div>

          <div className="city-currency__inputs">
            <label className="city-currency__field">
              <span>Amount</span>
              <input
                type="number"
                min="0"
                step="0.01"
                value={amount}
                onChange={(e) => setAmount(e.target.value)}
                placeholder="Enter amount"
              />
            </label>

            <label className="city-currency__field">
              <span>Currency</span>
              <select value={currency} onChange={(e) => setCurrency(e.target.value)}>
                {CURRENCY_OPTIONS.map((c) => (
                  <option key={c} value={c}>
                    {c}
                  </option>
                ))}
              </select>
            </label>
          </div>

          <div className="city-currency__result">
            {mode === 'to-inr' ? (
              <p>
                {hasValidAmount ? amount : '0'} {currency} = <strong>{formattedResult} INR</strong>
              </p>
            ) : (
              <p>
                {hasValidAmount ? amount : '0'} INR = <strong>{formattedResult} {currency}</strong>
              </p>
            )}
          </div>

          <p className="city-currency__meta">
            {loadingRates ? 'Loading live rates...' : ratesError || `Rate source: open.er-api.com • Updated: ${updatedAtLabel}`}
          </p>
        </div>
      </article>

      <article className="city-currency__card">
        <header className="city-currency__card-head">
          <span className="city-currency__card-emoji" aria-hidden>
            📉
          </span>
          <div className="city-currency__card-titles">
            <h3 className="city-currency__card-title">Real-time rate awareness</h3>
            <p className="city-currency__card-sub">Do this before any exchange</p>
          </div>
        </header>
        <ul className="city-currency__bullets">
          {bundle.rateAwareness.map((x) => (
            <li key={x}>{x}</li>
          ))}
        </ul>
      </article>

      <article className="city-currency__card">
        <header className="city-currency__card-head">
          <span className="city-currency__card-emoji" aria-hidden>
            📲
          </span>
          <div className="city-currency__card-titles">
            <h3 className="city-currency__card-title">{bundle.upiGuide.title}</h3>
            <p className="city-currency__card-sub">Digital payment confidence</p>
          </div>
        </header>
        <ol className="city-currency__steps">
          {bundle.upiGuide.steps.map((x) => (
            <li key={x}>{x}</li>
          ))}
        </ol>
        <div className="city-currency__notes-box">
          <p className="city-currency__spot-k">Fraud safety notes</p>
          <ul>
            {bundle.upiGuide.notes.map((x) => (
              <li key={x}>{x}</li>
            ))}
          </ul>
        </div>
      </article>

      <article className="city-currency__card city-currency__card--why">
        <header className="city-currency__card-head">
          <span className="city-currency__card-emoji" aria-hidden>
            💡
          </span>
          <div className="city-currency__card-titles">
            <h3 className="city-currency__card-title">Why this matters</h3>
            <p className="city-currency__card-sub">Confidence + independence</p>
          </div>
        </header>
        <ul className="city-currency__bullets">
          {bundle.whyItMatters.map((x) => (
            <li key={x}>{x}</li>
          ))}
        </ul>
      </article>
    </section>
  )
}

