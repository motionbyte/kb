import type { ButtonHTMLAttributes, ReactNode } from 'react'
import { Link } from 'react-router-dom'
import { cn } from '@/lib/cn'
import './Button.css'

type ButtonVariant = 'primary' | 'secondary' | 'ghost'
type ButtonSize = 'md' | 'sm'

export type AppButtonProps = {
  children: ReactNode
  className?: string
  variant?: ButtonVariant
  size?: ButtonSize
  /** If set, renders a React Router link instead of a button */
  to?: string
} & Omit<ButtonHTMLAttributes<HTMLButtonElement>, 'className'>

export function Button({
  children,
  className,
  variant = 'primary',
  size = 'md',
  to,
  type = 'button',
  ...rest
}: AppButtonProps) {
  const cls = cn(
    'kb-btn',
    variant === 'primary' && 'kb-btn--primary',
    variant === 'secondary' && 'kb-btn--secondary',
    variant === 'ghost' && 'kb-btn--ghost',
    size === 'sm' && 'kb-btn--sm',
    className
  )

  if (to) {
    return (
      <Link className={cls} to={to}>
        {children}
      </Link>
    )
  }

  return (
    <button type={type} className={cls} {...rest}>
      {children}
    </button>
  )
}
