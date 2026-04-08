/**
 * Open the system-preferred maps experience where possible:
 * - iOS / iPadOS → Apple Maps (https://maps.apple.com opens the app when installed)
 * - Android → geo: URI (lets the user pick their default maps app)
 * - Desktop → Google Maps in a new tab
 *
 * `buildMapLinks` exposes the same destinations for explicit “Other apps” links.
 */

import type { HospitalEntry } from '@/data/citySafety'

export type MapLinks = {
  /** Lets the OS route to the default maps app (Android / some desktops) */
  geo: string
  googleMaps: string
  appleMaps: string
}

export function buildMapLinks(latitude: number, longitude: number, label: string): MapLinks {
  const q = encodeURIComponent(label)
  const geoQ = encodeURIComponent(`${latitude},${longitude}(${label})`)
  return {
    geo: `geo:${latitude},${longitude}?q=${geoQ}`,
    googleMaps: `https://www.google.com/maps/search/?api=1&query=${latitude},${longitude}`,
    appleMaps: `https://maps.apple.com/?ll=${latitude},${longitude}&q=${q}`,
  }
}

/** When exact coords are unknown, search by place name + city (still opens correct area). */
export function buildMapLinksFromPlaceQuery(
  name: string,
  area: string | undefined,
  cityName: string,
): Pick<MapLinks, 'googleMaps' | 'appleMaps'> {
  const q = encodeURIComponent([name, area, cityName, 'India'].filter(Boolean).join(', '))
  return {
    googleMaps: `https://www.google.com/maps/search/?api=1&query=${q}`,
    appleMaps: `https://maps.apple.com/?q=${q}`,
  }
}

export function buildHospitalMapLinks(
  h: HospitalEntry,
  cityName: string,
): { googleMaps: string; appleMaps: string } {
  if (h.latitude != null && h.longitude != null) {
    const m = buildMapLinks(h.latitude, h.longitude, h.name)
    return { googleMaps: m.googleMaps, appleMaps: m.appleMaps }
  }
  return buildMapLinksFromPlaceQuery(h.name, h.area, cityName)
}

export function openPreferredMapApp(latitude: number, longitude: number, label: string): void {
  const { geo, googleMaps, appleMaps } = buildMapLinks(latitude, longitude, label)
  const ua = navigator.userAgent || ''

  if (/iPhone|iPad|iPod/i.test(ua)) {
    window.location.href = appleMaps
    return
  }
  if (/Android/i.test(ua)) {
    window.location.href = geo
    return
  }
  window.open(googleMaps, '_blank', 'noopener,noreferrer')
}
