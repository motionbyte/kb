import { useEffect, useMemo, useRef, useState } from 'react'
import { Outlet, useLocation, useNavigate } from 'react-router-dom'
import { GuideHubMenu } from '@/components/features/GuideHubMenu'
import { MaharanaMapScene } from '@/components/features/MaharanaMapScene'
import { getCityBySlug } from '@/data/cities'
import { cn } from '@/lib/cn'
import './PageShell.css'

type GuideFlow = 'cityPick' | 'categoryPick' | 'browse'

export function PageShell() {
  const location = useLocation()
  const navigate = useNavigate()
  const [guideOpen, setGuideOpen] = useState(() => location.pathname !== '/')
  const [guideFlow, setGuideFlow] = useState<GuideFlow>(() =>
    location.pathname !== '/' ? 'browse' : 'cityPick',
  )
  const [selectedCitySlug, setSelectedCitySlug] = useState<string | null>(null)
  const prevPathname = useRef<string | null>(null)

  useEffect(() => {
    if (location.pathname !== '/' && guideOpen) {
      setGuideFlow('browse')
    }
  }, [location.pathname, guideOpen])

  /** SPA: navigating from the parchment home (`/`) into the planner must mount the guide shell */
  useEffect(() => {
    const prev = prevPathname.current
    prevPathname.current = location.pathname
    if (location.pathname === '/itinerary' && prev === '/') {
      setGuideOpen(true)
      setGuideFlow('browse')
    }
  }, [location.pathname])

  const openGuideFromDiscover = () => {
    setGuideOpen(true)
    setGuideFlow('cityPick')
    setSelectedCitySlug(null)
  }

  const closeGuide = () => {
    setGuideOpen(false)
    setSelectedCitySlug(null)
    if (location.pathname === '/') {
      setGuideFlow('cityPick')
    }
  }

  const handleSelectCity = (slug: string) => {
    setSelectedCitySlug(slug)
    setGuideFlow('categoryPick')
  }

  const handleCategoryNavigate = (path: string) => {
    navigate(path)
    setGuideFlow('browse')
  }

  const citySlugFromPath = useMemo(() => {
    const mCity = location.pathname.match(/^\/city\/([^/]+)/)
    if (mCity) return mCity[1]
    const mFest = location.pathname.match(/^\/festivals\/([^/]+)/)
    if (mFest) return mFest[1]
    const mIg = location.pathname.match(/^\/instagram-spots\/([^/]+)/)
    const mSun = location.pathname.match(/^\/sunrise-sunset\/([^/]+)/)
    const mDrone = location.pathname.match(/^\/drone-info\/([^/]+)/)
    const mCulture = location.pathname.match(/^\/cultural-shows\/([^/]+)/)
    const mAdv = location.pathname.match(/^\/adventure-activities\/([^/]+)/)
    const mWs = location.pathname.match(/^\/workshops\/([^/]+)/)
    const mNl = location.pathname.match(/^\/nightlife\/([^/]+)/)
    return mIg?.[1] ?? mSun?.[1] ?? mDrone?.[1] ?? mCulture?.[1] ?? mAdv?.[1] ?? mWs?.[1] ?? mNl?.[1] ?? null
  }, [location.pathname])

  const cityIdFromQuery = useMemo(() => {
    const raw = new URLSearchParams(location.search).get('city')
    if (!raw || raw === 'all') return null
    return raw
  }, [location.search])

  const weatherSlugFromPath = useMemo(() => {
    const m = location.pathname.match(/^\/weather\/([^/]+)/)
    return m?.[1] ?? null
  }, [location.pathname])

  /** Language Help chat uses its own title row — hide Topics | Map strip */
  const hideBrowseAppBar =
    /^\/city\/[^/]+$/.test(location.pathname) && location.hash === '#city-language-help'

  /** Browse mode always uses the app-style top bar (Topics | title | Map) — no marketing Header/nav. */
  const appBarTitle = useMemo(() => {
    const path = location.pathname
    if (path.startsWith('/weather/')) return 'Weather'
    if (path === '/places') return 'Places'
    if (path === '/food') return 'Food'
    if (path === '/restaurants') return 'Restaurants'
    if (path === '/cities') return 'Cities'
    if (path === '/about') return 'About'
    if (path === '/shop') return 'Shop'
    if (path === '/itinerary') return 'Itinerary'
    if (citySlugFromPath) {
      return getCityBySlug(citySlugFromPath)?.name ?? 'Guide'
    }
    return 'Guide'
  }, [location.pathname, citySlugFromPath])

  const backToHubTopics = () => {
    navigate('/', { replace: true })
    setGuideOpen(true)
    const slug = selectedCitySlug ?? citySlugFromPath ?? weatherSlugFromPath ?? cityIdFromQuery
    if (slug) {
      setSelectedCitySlug(slug)
      setGuideFlow('categoryPick')
    } else {
      setSelectedCitySlug(null)
      setGuideFlow('cityPick')
    }
  }

  const hubBack = () => {
    if (guideFlow === 'categoryPick') {
      setGuideFlow('cityPick')
      setSelectedCitySlug(null)
    } else {
      closeGuide()
    }
  }

  const showBrowseChrome = guideOpen && guideFlow === 'browse'
  const isBrowse = guideFlow === 'browse'
  /** City/category steps stay in the same parchment frame as landing — no full-screen map bed */
  const isHub = guideOpen && !isBrowse

  return (
    <div
      className={cn(
        'page-shell',
        guideOpen ? 'page-shell--guide' : 'page-shell--map-only',
        isHub && 'page-shell--guide-in-box',
      )}
    >
      <div
        className={cn(
          'page-shell__scrim',
          guideOpen && isBrowse ? 'page-shell__scrim--guide' : 'page-shell__scrim--map-entry',
        )}
        aria-hidden
      />
      {guideOpen && isBrowse ? (
        <div className="page-shell__map-scene page-shell__map-scene--guide" aria-hidden>
          <MaharanaMapScene />
        </div>
      ) : null}
      <div
        className={cn(
          'page-shell__map-entry',
          guideOpen && isBrowse && 'page-shell__map-entry--guide',
        )}
      >
        <article
          className={cn(
            'page-shell__parchment-card',
            guideOpen && 'page-shell__parchment-card--guide',
            guideOpen && isBrowse && 'page-shell__parchment-card--browse',
          )}
          aria-label={guideOpen ? undefined : 'Kesariya Balam — map and guide'}
          role={guideOpen ? 'main' : undefined}
          aria-labelledby={guideOpen ? 'app-dialog-title' : undefined}
          aria-describedby={guideOpen ? 'app-dialog-desc' : undefined}
          data-layout={guideOpen ? 'guide' : 'landing'}
        >
          {guideOpen ? (
            <p id="app-dialog-desc" className="visually-hidden">
              Rajasthan travel guide. Choose a city, then explore places, food, and more.
            </p>
          ) : null}
          {guideOpen && showBrowseChrome ? (
            <a href="#main-content" className="skip-link">
              Skip to main content
            </a>
          ) : null}

          {!guideOpen ? (
            <div className="page-shell__layer page-shell__layer--landing">
              <header className="page-shell__parchment-head">
                <p className="page-shell__parchment-title">MEWAR</p>
                <p className="page-shell__parchment-subtitle">Inscribed in earth &amp; blood</p>
              </header>
              <div className="page-shell__hero-gold" aria-hidden>
                <img
                  className="page-shell__hero-gold-img"
                  src={`${import.meta.env.BASE_URL}mpc.png`}
                  alt=""
                  width={480}
                  height={560}
                  decoding="async"
                  loading="eager"
                />
              </div>
              <div className="page-shell__discover" role="region" aria-label="Open travel guide">
                <p className="page-shell__discover-eyebrow">Kesariya Balam</p>
                <h1 className="page-shell__discover-lead">
                  The ink shivers when brave hooves thunder. Unfold the legend — then step into
                  Rajasthan.
                </h1>
                <div className="page-shell__discover-stamp-wrap">
                  <button
                    type="button"
                    className="page-shell__discover-btn"
                    onClick={openGuideFromDiscover}
                  >
                    <span className="page-shell__discover-btn-ring" aria-hidden />
                    <span className="page-shell__discover-btn-label">Discover</span>
                  </button>
                </div>
                <p className="page-shell__discover-hint" aria-hidden>
                  Mischief managed? Almost.
                </p>
              </div>
            </div>
          ) : null}

          {guideOpen && isHub ? (
            <div
              className="page-shell__layer page-shell__layer--guide page-shell__layer--hub-sheet"
              aria-hidden={false}
            >
              <div className="page-shell__hub-sheet">
                <div className="page-shell__hub-toolbar">
                  <button
                    type="button"
                    className="page-shell__hub-back-btn"
                    onClick={hubBack}
                    aria-label={
                      guideFlow === 'categoryPick'
                        ? 'Back to city list'
                        : 'Back to the parchment map'
                    }
                  >
                    <ArrowLeftIcon />
                    <span>{guideFlow === 'categoryPick' ? 'Cities' : 'Back'}</span>
                  </button>
                  <p className="page-shell__hub-toolbar-title">Kesariya Balam</p>
                  <button
                    type="button"
                    className="page-shell__hub-map-btn"
                    onClick={closeGuide}
                    aria-label="Return to the parchment map"
                    title="Back to map"
                  >
                    <MapBackIcon />
                    <span>The Map</span>
                  </button>
                </div>
                <div
                  className={cn(
                    'page-shell__hub-scroll',
                    guideFlow === 'cityPick' && 'page-shell__hub-scroll--city-pick',
                  )}
                >
                  <GuideHubMenu
                    step={guideFlow === 'cityPick' ? 'cities' : 'categories'}
                    selectedCitySlug={selectedCitySlug}
                    onSelectCity={handleSelectCity}
                    onNavigate={handleCategoryNavigate}
                  />
                </div>
              </div>
            </div>
          ) : null}

          {guideOpen && isBrowse ? (
            <div className="page-shell__layer page-shell__layer--guide" aria-hidden={false}>
              <div className="page-shell__guide-inner">
                <aside className="page-shell__book-left" aria-label="Guide cover page">
                  <div className="page-shell__book-left-inner">
                    <p className="page-shell__book-folio" aria-hidden>
                      Kesariya Balam
                    </p>
                    <div className="page-shell__book-left-dots" aria-hidden>
                      <span className="page-shell__dot page-shell__dot--kesariya" />
                      <span className="page-shell__dot page-shell__dot--gold" />
                      <span className="page-shell__dot page-shell__dot--mint" />
                    </div>
                    <p className="page-shell__book-chapter">Your guide</p>
                    <button
                      type="button"
                      className="page-shell__map-back-btn page-shell__map-back-btn--topics"
                      onClick={backToHubTopics}
                      aria-label="Back to city topics menu"
                      title="Topics"
                    >
                      <ArrowLeftIcon />
                      <span className="page-shell__map-back-text">Topics</span>
                    </button>
                    <button
                      type="button"
                      className="page-shell__map-back-btn"
                      onClick={closeGuide}
                      aria-label="Return to the parchment map"
                      title="Back to map"
                    >
                      <MapBackIcon />
                      <span className="page-shell__map-back-text">The Map</span>
                    </button>
                  </div>
                </aside>
                <div className="page-shell__book-spine" aria-hidden />
                <div
                  className={cn('page-shell__book-right', hideBrowseAppBar && 'page-shell__book-right--no-appbar')}
                >
                  {hideBrowseAppBar ? null : (
                    <div className="page-shell__browse-appbar">
                      <button
                        type="button"
                        className="page-shell__browse-appbar-btn"
                        onClick={backToHubTopics}
                        aria-label="Back to city topics"
                      >
                        <ArrowLeftIcon />
                        <span>Topics</span>
                      </button>
                      <p className="page-shell__browse-appbar-title" id="app-dialog-title">
                        {appBarTitle}
                      </p>
                      <button
                        type="button"
                        className="page-shell__browse-appbar-btn page-shell__browse-appbar-btn--map"
                        onClick={closeGuide}
                        aria-label="Back to the parchment map"
                      >
                        <MapBackIcon />
                        <span>Map</span>
                      </button>
                    </div>
                  )}
                  <div className="page-shell__scroll">
                    <main id="main-content" className="page-shell__main" tabIndex={-1}>
                      <Outlet />
                    </main>
                  </div>
                </div>
              </div>
            </div>
          ) : null}
        </article>
      </div>
    </div>
  )
}

function ArrowLeftIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" aria-hidden className="page-shell__icon-svg">
      <path
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M15 18l-6-6 6-6"
      />
    </svg>
  )
}

function MapBackIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" aria-hidden className="page-shell__icon-svg">
      <path
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M12 5v14M5 12l7-7 7 7"
      />
    </svg>
  )
}
