import type { ReactNode } from 'react'
import { cn } from '@/lib/cn'
import './Card.css'

type CardProps = {
  children: ReactNode
  className?: string
  variant?: 'default' | 'arch'
  interactive?: boolean
}

export function Card({
  children,
  className,
  variant = 'default',
  interactive = false,
}: CardProps) {
  return (
    <div
      className={cn(
        'kb-card',
        variant === 'arch' && 'kb-card--arch',
        interactive && 'kb-card--interactive',
        className
      )}
    >
      {children}
    </div>
  )
}
