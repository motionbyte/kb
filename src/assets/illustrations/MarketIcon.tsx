import { useId } from 'react'

type IconProps = {
  className?: string
  title?: string
  size?: number
}

export function MarketIcon({ className, title, size = 64 }: IconProps) {
  const uid = useId().replace(/:/g, '')
  return (
    <svg
      className={className}
      width={size}
      height={size}
      viewBox="0 0 64 64"
      role="img"
      aria-hidden={title ? undefined : true}
    >
      {title ? <title>{title}</title> : null}
      <defs>
        <linearGradient id={`mktStripes-${uid}`} x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#e0782c" />
          <stop offset="25%" stopColor="#d4a84b" />
          <stop offset="50%" stopColor="#7eb8a8" />
          <stop offset="75%" stopColor="#c65d3b" />
          <stop offset="100%" stopColor="#e0782c" />
        </linearGradient>
      </defs>
      <rect width="64" height="64" rx="12" fill="#fdf6ec" />
      <path d="M8 44h48v12H8z" fill={`url(#mktStripes-${uid})`} opacity="0.85" />
      <path
        d="M18 20h-4v24h4V20zm12 0h-4v24h4V20zm12 0h-4v24h4V20zm12 0h-4v24h4V20z"
        fill="#241a45"
        opacity="0.2"
      />
      <path
        d="M12 24c0-6 8-8 16-8s16 2 16 8v2H12v-2z"
        fill="#f0d078"
        stroke="#241a45"
        strokeWidth="1.2"
      />
      <circle cx="32" cy="14" r="4" fill="#e0782c" />
    </svg>
  )
}
