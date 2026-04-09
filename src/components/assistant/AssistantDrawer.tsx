import { useCallback, useEffect, useId, useRef } from 'react'
import { useAssistant } from '@/components/assistant/useAssistant'
import { cn } from '@/lib/cn'
import './AssistantDrawer.css'

type Props = {
  onOpenItinerary: (url: string) => void
}

export function AssistantDrawer({ onOpenItinerary }: Props) {
  const { open, setOpen, messages, sendMessage, loading, clearChat } = useAssistant()
  const panelId = useId()
  const titleId = useId()
  const inputRef = useRef<HTMLTextAreaElement>(null)
  const endRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (open) {
      inputRef.current?.focus()
    }
  }, [open])

  useEffect(() => {
    endRef.current?.scrollIntoView({ behavior: 'smooth' })
  }, [messages, open])

  const onBackdropClick = useCallback(() => setOpen(false), [setOpen])

  const onSubmit = useCallback(
    (e: React.FormEvent) => {
      e.preventDefault()
      const el = inputRef.current
      const v = el?.value?.trim()
      if (!v) return
      void sendMessage(v)
      if (el) el.value = ''
    },
    [sendMessage],
  )

  useEffect(() => {
    if (!open) return
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setOpen(false)
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [open, setOpen])

  if (!open) return null

  return (
    <div className="assistant-overlay" role="presentation">
      <button
        type="button"
        className="assistant-overlay__backdrop"
        aria-label="Close Chetak"
        onClick={onBackdropClick}
      />
      <aside
        id="chetak-assistant-drawer"
        className="assistant-drawer"
        role="dialog"
        aria-modal="true"
        aria-labelledby={titleId}
        aria-describedby={panelId}
      >
        <header className="assistant-drawer__head">
          <div className="assistant-drawer__brand">
            <p id={titleId} className="assistant-drawer__title">
              Chetak
            </p>
            <p id={panelId} className="assistant-drawer__sub">
              Kesariya Balam · your travel copilot. City copy stays synced with the site — ask routes,
              places, or trip ideas.
            </p>
          </div>
          <div className="assistant-drawer__actions">
            <button type="button" className="assistant-drawer__ghost" onClick={() => clearChat()}>
              Clear
            </button>
            <button
              type="button"
              className="assistant-drawer__close"
              onClick={() => setOpen(false)}
              aria-label="Close"
            >
              ×
            </button>
          </div>
        </header>

        <div className="assistant-drawer__suggestions" role="group" aria-label="Quick prompts">
          {[
            'How do I open festivals for Udaipur?',
            'Plan a 3-day Jaipur heritage-heavy trip',
            'Where is the itinerary planner?',
          ].map((q) => (
            <button
              key={q}
              type="button"
              className="assistant-drawer__chip"
              onClick={() => {
                void sendMessage(q)
              }}
              disabled={loading}
            >
              {q}
            </button>
          ))}
        </div>

        <div className="assistant-drawer__thread" role="log" aria-live="polite">
          {messages.length === 0 ? (
            <p className="assistant-drawer__empty">
              Namaste — I’m Chetak. I stay on your screen while you move around the map and guides. Ask
              in any language you like.
            </p>
          ) : null}
          {messages.map((m) => (
            <div
              key={m.id}
              className={cn('assistant-msg', m.role === 'user' ? 'assistant-msg--user' : 'assistant-msg--bot')}
            >
              <div className="assistant-msg__bubble">
                <p className="assistant-msg__text">{m.content}</p>
                {m.itineraryUrl ? (
                  <div className="assistant-msg__cta">
                    <button
                      type="button"
                      className="assistant-msg__itinerary-btn"
                      onClick={() => onOpenItinerary(m.itineraryUrl!)}
                    >
                      Open in itinerary planner
                    </button>
                  </div>
                ) : null}
              </div>
            </div>
          ))}
          {loading ? (
            <div className="assistant-msg assistant-msg--bot">
              <div className="assistant-msg__bubble assistant-msg__bubble--typing">
                <span className="assistant-msg__dot" />
                <span className="assistant-msg__dot" />
                <span className="assistant-msg__dot" />
              </div>
            </div>
          ) : null}
          <div ref={endRef} />
        </div>

        <form className="assistant-drawer__form" onSubmit={onSubmit}>
          <label htmlFor="assistant-input" className="visually-hidden">
            Message
          </label>
          <textarea
            id="assistant-input"
            ref={inputRef}
            className="assistant-drawer__input"
            rows={2}
            placeholder="Ask Chetak anything about the guide…"
            disabled={loading}
            maxLength={4000}
            onKeyDown={(e) => {
              if (e.key === 'Enter' && !e.shiftKey) {
                e.preventDefault()
                onSubmit(e)
              }
            }}
          />
          <button type="submit" className="assistant-drawer__send" disabled={loading}>
            Send
          </button>
        </form>
      </aside>
    </div>
  )
}
