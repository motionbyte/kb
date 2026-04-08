import { useEffect, useState } from 'react'
import {
  fetchLocalEvents,
  groupEventsByCategory,
  type LocalEventRecord,
} from '@/lib/localEventsFetch'
import './LocalEventsLivePanel.css'

function formatWhen(iso: string): string {
  try {
    const d = new Date(iso)
    return new Intl.DateTimeFormat('en-IN', {
      weekday: 'short',
      day: 'numeric',
      month: 'short',
      hour: 'numeric',
      minute: '2-digit',
    }).format(d)
  } catch {
    return iso
  }
}

type Props = {
  citySlug: string
  cityName: string
  /** Accordion panel is expanded */
  isActive: boolean
}

export function LocalEventsLivePanel({ citySlug, cityName, isActive }: Props) {
  const [status, setStatus] = useState<'idle' | 'loading' | 'error' | 'ready'>('idle')
  const [events, setEvents] = useState<LocalEventRecord[]>([])
  const [err, setErr] = useState<string | null>(null)

  useEffect(() => {
    if (!isActive) return

    let cancelled = false
    setStatus('loading')
    setErr(null)

    ;(async () => {
      try {
        const rows = await fetchLocalEvents(citySlug, cityName)
        if (cancelled) return
        setEvents(rows)
        setStatus('ready')
      } catch (e) {
        if (cancelled) return
        setErr(e instanceof Error ? e.message : 'Could not load events')
        setStatus('error')
      }
    })()

    return () => {
      cancelled = true
    }
  }, [isActive, citySlug, cityName])

  if (!isActive) return null

  if (status === 'loading' || status === 'idle') {
    return (
      <div className="local-events" role="status">
        <p className="local-events__loading">Loading listings for {cityName}…</p>
      </div>
    )
  }

  if (status === 'error') {
    return (
      <div className="local-events local-events--error" role="alert">
        <p className="local-events__err">{err}</p>
        <p className="local-events__hint">
          Check <code className="local-events__code">VITE_LOCAL_EVENTS_URL</code> or try again.
        </p>
      </div>
    )
  }

  const grouped = groupEventsByCategory(events)

  return (
    <div className="local-events">
      <p className="local-events__meta" role="status">
        {events.length} listing{events.length === 1 ? '' : 's'} · grouped by category
      </p>
      <div className="local-events__groups">
        {[...grouped.entries()].map(([category, rows]) => (
          <section key={category} className="local-events__group" aria-label={category}>
            <h3 className="local-events__cat">{category}</h3>
            <ul className="local-events__list">
              {rows.map((ev) => (
                <li key={ev.id} className="local-events__card">
                  <div className="local-events__card-head">
                    <p className="local-events__when">{formatWhen(ev.startsAt)}</p>
                    <span className="local-events__src">{ev.sourceLabel}</span>
                  </div>
                  <p className="local-events__title">{ev.title}</p>
                  {ev.venue ? <p className="local-events__venue">{ev.venue}</p> : null}
                  <p className="local-events__desc">{ev.description}</p>
                  {ev.ticketUrl ? (
                    <a
                      className="local-events__ticket"
                      href={ev.ticketUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Tickets / details
                    </a>
                  ) : null}
                </li>
              ))}
            </ul>
          </section>
        ))}
      </div>
    </div>
  )
}
