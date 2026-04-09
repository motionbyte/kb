import { useAssistant } from '@/components/assistant/useAssistant'
import { cn } from '@/lib/cn'

export function AssistantFab() {
  const { open, setOpen, loading } = useAssistant()

  return (
    <button
      type="button"
      className={cn('assistant-fab', open && 'assistant-fab--hidden')}
      onClick={() => setOpen(true)}
      aria-expanded={open}
      aria-controls="chetak-assistant-drawer"
      aria-label="Open Chetak — travel assistant"
      title="Chat with Chetak"
      disabled={loading}
    >
      <span className="assistant-fab__glow" aria-hidden />
      <span className="assistant-fab__icon" aria-hidden>
        <svg width="26" height="26" viewBox="0 0 24 24" fill="none">
          <path
            d="M12 3C7.03 3 3 6.58 3 11c0 2.6 1.4 4.9 3.5 6.2V21l4.2-2.3c.9.2 1.8.3 2.8.3 4.97 0 9-3.58 9-8s-4.03-8-9-8z"
            stroke="currentColor"
            strokeWidth="1.75"
            strokeLinejoin="round"
          />
          <path
            d="M8 11h.01M12 11h.01M16 11h.01"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
          />
        </svg>
      </span>
      <span className="assistant-fab__label">Chetak</span>
    </button>
  )
}
