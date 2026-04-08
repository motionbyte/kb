import { JharokhaIcon } from '@/assets/illustrations'
import { Container } from '@/components/ui/Container'
import './AboutPage.css'

export function AboutPage() {
  return (
    <article className="about">
      <Container width="narrow">
        <div className="about__hero">
          <JharokhaIcon size={96} />
          <h1 className="about__title">About Kesariya Balam</h1>
          <p className="about__lead">
            “Kesariya” is the colour of saffron sunsets on desert stone; “balam” is the
            beloved — the traveller we wrote this for.
          </p>
        </div>
        <div className="about__body">
          <p>
            This web app is an illustrated companion for people visiting Rajasthan —
            whether you are chasing Jaipur’s pink facades, Udaipur’s lake mirrors, or
            Jodhpur’s blue lanes. We bring together places to see, food to hunt, and
            restaurants chosen for their setting as much as their menu.
          </p>
          <p>
            Everything here is curated for clarity: short tips, honest filters, and a
            layout that feels like a premium guidebook — without the bulk in your bag.
          </p>
          <p>
            Soon you will also be able to shop souvenirs directly through Kesariya Balam
            — handicrafts, textiles, and keepsakes from makers we trust.
          </p>
        </div>
      </Container>
    </article>
  )
}
