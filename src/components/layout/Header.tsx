import { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { cn } from '@/lib/cn'
import './Header.css'

const navItems: { to: string; label: string; end?: boolean }[] = [
  { to: '/', label: 'Home', end: true },
  { to: '/cities', label: 'Cities' },
  { to: '/places', label: 'Places' },
  { to: '/food', label: 'Food' },
  { to: '/restaurants', label: 'Restaurants' },
  { to: '/shop', label: 'Souvenirs' },
  { to: '/about', label: 'About' },
]

export function Header() {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <header className="site-header" role="banner">
      <div className="site-header__inner">
        <Link to="/" className="site-header__brand" onClick={() => setMenuOpen(false)}>
          <span className="site-header__title" id="app-dialog-title">
            Kesariya Balam
          </span>
          <span className="site-header__tagline">Rajasthan travel guide</span>
        </Link>

        <nav className="site-nav" aria-label="Main">
          <button
            type="button"
            className="site-nav__toggle"
            aria-expanded={menuOpen}
            aria-controls="site-nav-drawer"
            onClick={() => setMenuOpen((o) => !o)}
          >
            <span className="visually-hidden">
              {menuOpen ? 'Close menu' : 'Open menu'}
            </span>
            <svg width="24" height="24" viewBox="0 0 24 24" aria-hidden>
              {menuOpen ? (
                <path
                  d="M6 6l12 12M18 6L6 18"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  fill="none"
                />
              ) : (
                <path
                  fill="currentColor"
                  d="M4 6h16v2H4V6zm0 5h16v2H4v-2zm0 5h16v2H4v-2z"
                />
              )}
            </svg>
          </button>
          <div id="site-nav-drawer" className="site-nav__drawer" data-open={menuOpen}>
            {navItems.map(({ to, label, end }) => (
              <NavLink
                key={to}
                to={to}
                end={Boolean(end)}
                className={({ isActive }) =>
                  cn('site-nav__link', isActive && 'site-nav__link--active')
                }
                onClick={() => setMenuOpen(false)}
              >
                {label}
              </NavLink>
            ))}
          </div>
        </nav>
      </div>
    </header>
  )
}
