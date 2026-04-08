import { useId } from 'react'

type Props = {
  className?: string
}

/** Decorative bandhani-style dot pattern for backgrounds */
export function BandhaniPattern({ className }: Props) {
  const uid = useId().replace(/:/g, '')
  const pid = `bandhani-pattern-${uid}`
  return (
    <svg className={className} width="120" height="120" aria-hidden focusable="false">
      <defs>
        <pattern id={pid} width="20" height="20" patternUnits="userSpaceOnUse">
          <circle cx="3" cy="3" r="2" fill="#d4a84b" fillOpacity="0.35" />
          <circle cx="13" cy="3" r="1.5" fill="#e0782c" fillOpacity="0.3" />
          <circle cx="13" cy="13" r="2" fill="#7eb8a8" fillOpacity="0.28" />
          <circle cx="3" cy="13" r="1.5" fill="#c65d3b" fillOpacity="0.28" />
        </pattern>
      </defs>
      <rect width="100%" height="100%" fill={`url(#${pid})`} />
    </svg>
  )
}
