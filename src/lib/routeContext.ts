/**
 * Shared route context for the travel assistant (matches PageShell city slug logic).
 */
export function getCitySlugFromPathname(pathname: string): string | null {
  const mCity = pathname.match(/^\/city\/([^/]+)/)
  if (mCity) return mCity[1]
  const mFest = pathname.match(/^\/festivals\/([^/]+)/)
  if (mFest) return mFest[1]
  const mIg = pathname.match(/^\/instagram-spots\/([^/]+)/)
  const mSun = pathname.match(/^\/sunrise-sunset\/([^/]+)/)
  const mDrone = pathname.match(/^\/drone-info\/([^/]+)/)
  const mCulture = pathname.match(/^\/cultural-shows\/([^/]+)/)
  const mAdv = pathname.match(/^\/adventure-activities\/([^/]+)/)
  const mWs = pathname.match(/^\/workshops\/([^/]+)/)
  const mNl = pathname.match(/^\/nightlife\/([^/]+)/)
  return (
    mIg?.[1] ??
    mSun?.[1] ??
    mDrone?.[1] ??
    mCulture?.[1] ??
    mAdv?.[1] ??
    mWs?.[1] ??
    mNl?.[1] ??
    null
  )
}

export function getWeatherSlugFromPathname(pathname: string): string | null {
  const m = pathname.match(/^\/weather\/([^/]+)/)
  return m?.[1] ?? null
}

export function getAssistantRouteContext(pathname: string): {
  pathname: string
  citySlug: string | null
  weatherSlug: string | null
} {
  return {
    pathname,
    citySlug: getCitySlugFromPathname(pathname),
    weatherSlug: getWeatherSlugFromPathname(pathname),
  }
}
