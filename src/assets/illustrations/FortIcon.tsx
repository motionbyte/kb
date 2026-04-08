import { useId } from 'react'

type IconProps = {
  className?: string
  title?: string
  size?: number
}

/** Stylised fort / amber wall — illustration icon */
export function FortIcon({ className, title, size = 64 }: IconProps) {
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
        <linearGradient id={`fortSky-${uid}`} x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#7eb8d4" />
          <stop offset="100%" stopColor="#c9e4f0" />
        </linearGradient>
        <linearGradient id={`fortStone-${uid}`} x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#e8a070" />
          <stop offset="100%" stopColor="#c65d3b" />
        </linearGradient>
        <linearGradient id={`fortGold-${uid}`} x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#f0d078" />
          <stop offset="100%" stopColor="#d4a84b" />
        </linearGradient>
      </defs>
      <rect width="64" height="64" rx="12" fill={`url(#fortSky-${uid})`} />
      <path
        d="M8 44V52h48V44l-4-8H12l-4 8z"
        fill={`url(#fortStone-${uid})`}
        stroke="#241a45"
        strokeWidth="1.2"
        strokeLinejoin="round"
      />
      <path
        d="M12 36h8v8h-8v-8zm16 0h8v8h-8v-8zm16 0h8v8h-8v-8zM16 28h4v8h-4v-8zm12 0h4v8h-4v-8zm12 0h4v8h-4v-8zm12 0h4v8h-4v-8z"
        fill="#fdf6ec"
        opacity="0.9"
      />
      <path
        d="M32 8L20 20h24L32 8z"
        fill={`url(#fortGold-${uid})`}
        stroke="#241a45"
        strokeWidth="1"
        strokeLinejoin="round"
      />
      <circle cx="32" cy="14" r="2" fill="#241a45" />
    </svg>
  )
}
