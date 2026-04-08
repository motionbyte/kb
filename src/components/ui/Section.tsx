import type { ReactNode } from 'react'
import { cn } from '@/lib/cn'
import { Container } from './Container'
import './Section.css'

type SectionTone = 'default' | 'muted' | 'indigo'

type SectionProps = {
  children: ReactNode
  className?: string
  id?: string
  tone?: SectionTone
  spacing?: 'default' | 'tight' | 'hero'
  eyebrow?: string
  title?: string
  lead?: string
}

export function Section({
  children,
  className,
  id,
  tone = 'default',
  spacing = 'default',
  eyebrow,
  title,
  lead,
}: SectionProps) {
  return (
    <section
      id={id}
      className={cn(
        'kb-section',
        spacing === 'tight' && 'kb-section--tight',
        spacing === 'hero' && 'kb-section--hero',
        tone === 'muted' && 'kb-section--tone-muted',
        tone === 'indigo' && 'kb-section--tone-indigo',
        className
      )}
    >
      <Container>
        {(eyebrow || title || lead) && (
          <header className="kb-section__header">
            {eyebrow ? <span className="kb-section__eyebrow">{eyebrow}</span> : null}
            {title ? <h2 className="kb-section__title">{title}</h2> : null}
            {lead ? <p className="kb-section__lead">{lead}</p> : null}
          </header>
        )}
        {children}
      </Container>
    </section>
  )
}
