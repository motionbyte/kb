import { getCityFoodCategoryGuide, type FoodCategoryKind } from '@/data/cityFoodCategoryGuide'
import './CityFoodCategoryGuide.css'

type Props = {
  citySlug: string
  cityName: string
  kind: FoodCategoryKind
}

export function CityFoodCategoryGuide({ citySlug, cityName, kind }: Props) {
  const bundle = getCityFoodCategoryGuide(citySlug, kind)
  return (
    <section className="city-page__block city-page__block--last city-food-cat">
      <div className="city-food-cat__hero">
        <h2 className="city-food-cat__title">{bundle.title}</h2>
        <p className="city-food-cat__sub">({bundle.eyebrow})</p>
      </div>

      <p className="city-food-cat__lead">
        {bundle.lead} <span className="city-food-cat__city">— {cityName}</span>
      </p>

      <div className="city-food-cat__tiles">
        {bundle.quickTiles.map((t) => (
          <div key={t.label} className="city-food-cat__tile">
            <span className="city-food-cat__tile-k">{t.label}</span>
            <span className="city-food-cat__tile-v">{t.value}</span>
          </div>
        ))}
      </div>

      <article className="city-food-cat__card">
        <h3>Problem</h3>
        <ul>{bundle.problem.map((x) => <li key={x}>{x}</li>)}</ul>
      </article>
      <article className="city-food-cat__card">
        <h3>Solution</h3>
        <ul>{bundle.solution.map((x) => <li key={x}>{x}</li>)}</ul>
      </article>

      <article className="city-food-cat__card">
        <h3>{bundle.placesTitle}</h3>
        <p className="city-food-cat__muted">{bundle.placesLead}</p>
        <div className="city-food-cat__grid">
          {bundle.places.map((p) => (
            <article key={p.id} className="city-food-cat__place">
              <h4>{p.name}</h4>
              <p className="city-food-cat__meta">
                {p.area} • {p.typeTag}
              </p>
              <p className="city-food-cat__meta">{p.approxSpend}</p>
              <p className="city-food-cat__meta">{p.addressHint}</p>
              {p.phone ? <p className="city-food-cat__meta">Phone: {p.phone}</p> : null}
              <div className="city-food-cat__actions">
                {p.website ? (
                  <a href={p.website} target="_blank" rel="noreferrer">
                    Website
                  </a>
                ) : null}
                <a href={p.mapUrl} target="_blank" rel="noreferrer">
                  Map
                </a>
                <a href={p.reviewsUrl} target="_blank" rel="noreferrer">
                  Reviews
                </a>
              </div>
              <p className="city-food-cat__k">Must try</p>
              <ul className="city-food-cat__mini">{p.mustTry.map((x) => <li key={x}>{x}</li>)}</ul>
              <p className="city-food-cat__k">Tips</p>
              <ul className="city-food-cat__mini">{p.tips.map((x) => <li key={x}>{x}</li>)}</ul>
            </article>
          ))}
        </div>
      </article>

      <article className="city-food-cat__card">
        <h3>Why this matters</h3>
        <ul>{bundle.why.map((x) => <li key={x}>{x}</li>)}</ul>
      </article>
    </section>
  )
}

