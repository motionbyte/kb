import { useId } from 'react'
import './MaharanaMapScene.css'

/**
 * Soft parchment layer behind the guide dialog (no hero landing — that lives in PageShell).
 */
export function MaharanaMapScene() {
  const uid = useId().replace(/:/g, '')

  return (
    <div className="maharana-map-root">
      <svg
        className="maharana-map"
        viewBox="0 0 920 1480"
        preserveAspectRatio="xMidYMid meet"
        xmlns="http://www.w3.org/2000/svg"
        role="img"
        aria-hidden
      >
        <title>Rajasthan</title>
        <defs>
          <linearGradient id={`mpParchment-${uid}`} x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#ede4cf" />
            <stop offset="35%" stopColor="#d9ca9e" />
            <stop offset="70%" stopColor="#c8b27e" />
            <stop offset="100%" stopColor="#a89162" />
          </linearGradient>
          <radialGradient id={`mpGlow-${uid}`} cx="50%" cy="42%" r="55%">
            <stop offset="0%" stopColor="rgba(255, 230, 170, 0.45)" />
            <stop offset="55%" stopColor="rgba(212, 168, 75, 0.12)" />
            <stop offset="100%" stopColor="rgba(42, 31, 22, 0)" />
          </radialGradient>
        </defs>
        <rect width="920" height="1480" fill={`url(#mpParchment-${uid})`} />
        <rect width="920" height="1480" fill={`url(#mpGlow-${uid})`} />
      </svg>
    </div>
  )
}
