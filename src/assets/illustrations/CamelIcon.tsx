import { useId } from 'react'

type IconProps = {
  className?: string
  title?: string
  size?: number
}

export function CamelIcon({ className, title, size = 64 }: IconProps) {
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
        <linearGradient id={`camelDune-${uid}`} x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#f4c090" />
          <stop offset="100%" stopColor="#e0782c" />
        </linearGradient>
        <linearGradient id={`camelSky-${uid}`} x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#7eb8a8" />
          <stop offset="100%" stopColor="#c8e8df" />
        </linearGradient>
      </defs>
      <rect width="64" height="64" rx="12" fill={`url(#camelSky-${uid})`} />
      <ellipse cx="32" cy="52" rx="26" ry="4" fill="rgba(36,26,69,0.12)" />
      <path
        d="M14 38c2-8 8-12 14-12 6 0 10 4 12 10 2-2 4-3 4-4 0-2-2-4-4-4h-2l2-6h-4l-2 6c-2 0-4 2-4 4 0 2 1 4 2 5-4 4-6 10-6 16v4h6v-4c0-4 2-8 4-10z"
        fill={`url(#camelDune-${uid})`}
        stroke="#241a45"
        strokeWidth="1.2"
        strokeLinejoin="round"
      />
      <circle cx="40" cy="26" r="2" fill="#241a45" />
      <path d="M18 42h-2l-2 6h4l2-6zM44 42h4l2 6h-4l-2-6z" fill="#c65d3b" />
      <path
        d="M12 20c4-4 10-6 16-6"
        stroke="#d4a84b"
        strokeWidth="2"
        strokeLinecap="round"
        fill="none"
      />
    </svg>
  )
}
