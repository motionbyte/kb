import { CamelIcon } from '@/assets/illustrations'
import { Button } from '@/components/ui/Button'
import { Container } from '@/components/ui/Container'
import './ShopComingSoonPage.css'

export function ShopComingSoonPage() {
  return (
    <section className="shop-soon" aria-labelledby="shop-title">
      <Container width="narrow">
        <div className="shop-soon__art" aria-hidden>
          <CamelIcon size={120} title="Camel illustration" />
        </div>
        <h1 id="shop-title" className="shop-soon__title">
          Souvenirs — coming soon
        </h1>
        <p className="shop-soon__lead">
          We are lining up artisans and trusted studios so you can bring home textiles,
          pottery, and keepsakes without haggling blind. For now, favourite a city and
          plan your meals — the shop will meet you here.
        </p>
        <div className="shop-soon__actions">
          <Button to="/cities">Plan your trip</Button>
          <Button to="/" variant="ghost">
            Back home
          </Button>
        </div>
      </Container>
    </section>
  )
}
