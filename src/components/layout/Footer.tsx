import { Link } from 'react-router-dom'
import { Container } from '@/components/ui/Container'
import './Footer.css'

export function Footer() {
  return (
    <footer className="site-footer" role="contentinfo">
      <Container width="wide">
        <div className="site-footer__inner">
          <div>
            <div className="site-footer__brand">Kesariya Balam</div>
            <p className="site-footer__blurb">
              Your illustrated companion for Rajasthan — forts, flavours, and lanes — so
              you can wander Jaipur, Udaipur, Jodhpur and beyond with confidence.
            </p>
          </div>
          <div className="site-footer__links">
            <div className="site-footer__col">
              <h3>Explore</h3>
              <ul>
                <li>
                  <Link to="/cities">Cities</Link>
                </li>
                <li>
                  <Link to="/places">Places</Link>
                </li>
                <li>
                  <Link to="/food">Food</Link>
                </li>
                <li>
                  <Link to="/restaurants">Restaurants</Link>
                </li>
              </ul>
            </div>
            <div className="site-footer__col">
              <h3>More</h3>
              <ul>
                <li>
                  <Link to="/shop">Souvenirs (soon)</Link>
                </li>
                <li>
                  <Link to="/about">About</Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <p className="site-footer__bottom">
          © {new Date().getFullYear()} Kesariya Balam · Crafted with love for travellers
          in Rajasthan
        </p>
      </Container>
    </footer>
  )
}
