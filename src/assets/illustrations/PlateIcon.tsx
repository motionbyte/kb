import { useId } from 'react'

type IconProps = {
  className?: string
  title?: string
  size?: number
}

export function PlateIcon({ className, title, size = 64 }: IconProps) {
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
        <linearGradient id={`plateBg-${uid}`} x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#fff5e8" />
          <stop offset="100%" stopColor="#f0e4d4" />
        </linearGradient>
      </defs>
      <rect width="64" height="64" rx="12" fill={`url(#plateBg-${uid})`} />
      <ellipse cx="32" cy="52" rx="22" ry="3" fill="rgba(36,26,69,0.08)" />
      <ellipse
        cx="32"
        cy="34"
        rx="22"
        ry="18"
        fill="#fff"
        stroke="#d4a84b"
        strokeWidth="2"
      />
      <circle cx="32" cy="34" r="14" fill="#f8d878" opacity="0.35" />
      <path
        d="M18 30c4-6 10-8 14-8s10 2 14 8"
        stroke="#c65d3b"
        strokeWidth="2"
        strokeLinecap="round"
        fill="none"
      />
      <circle cx="26" cy="32" r="3" fill="#7eb8a8" />
      <circle cx="38" cy="32" r="3" fill="#e0782c" />
      <circle cx="32" cy="38" r="2.5" fill="#d4a84b" />
    </svg>
  )
}
