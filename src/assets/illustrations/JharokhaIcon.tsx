import { useId } from 'react'

type IconProps = {
  className?: string
  title?: string
  size?: number
}

/** Ornate jharokha window */
export function JharokhaIcon({ className, title, size = 64 }: IconProps) {
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
        <linearGradient id={`jhFrame-${uid}`} x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#d4a84b" />
          <stop offset="100%" stopColor="#e0782c" />
        </linearGradient>
        <linearGradient id={`jhBg-${uid}`} x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#4a3d78" />
          <stop offset="100%" stopColor="#241a45" />
        </linearGradient>
      </defs>
      <rect width="64" height="64" rx="12" fill={`url(#jhBg-${uid})`} />
      <path
        d="M8 44h48V28c0-8-8-14-16-14s-16 6-16 14v16z"
        fill="none"
        stroke={`url(#jhFrame-${uid})`}
        strokeWidth="3"
        strokeLinejoin="round"
      />
      <path d="M12 36h40v8H12v-8z" fill="#fdf6ec" opacity="0.15" />
      <path d="M20 28h24v8H20v-8zM26 20h12v8H26v-8z" fill="#fdf6ec" opacity="0.9" />
      <circle cx="32" cy="14" r="3" fill="#d4a84b" />
    </svg>
  )
}
