import type { ReactNode } from 'react'
import { cn } from '@/lib/cn'
import './Container.css'

type ContainerWidth = 'default' | 'narrow' | 'wide'

type ContainerProps = {
  children: ReactNode
  className?: string
  width?: ContainerWidth
  as?: 'div' | 'section' | 'article' | 'header' | 'footer'
}

export function Container({
  children,
  className,
  width = 'default',
  as: Tag = 'div',
}: ContainerProps) {
  return (
    <Tag
      className={cn(
        'kb-container',
        width === 'narrow' && 'kb-container--narrow',
        width === 'wide' && 'kb-container--wide',
        className
      )}
    >
      {children}
    </Tag>
  )
}
