import { CityCard } from '@/components/features/CityCard'
import { Section } from '@/components/ui/Section'
import { cities } from '@/data/cities'
import './CitiesPage.css'

export function CitiesPage() {
  return (
    <Section
      eyebrow="Rajasthan"
      title="Cities in this guide"
      lead="Three anchors to begin — each with distinct colour, cuisine, and pace. Tap a card for local tips and timing."
      spacing="hero"
    >
      <div className="cities-grid">
        {cities.map((city) => (
          <CityCard key={city.id} city={city} />
        ))}
      </div>
    </Section>
  )
}
