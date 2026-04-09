import { useCallback, useEffect, useMemo, useRef, useState, type ReactNode } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import { AssistantContext } from '@/components/assistant/assistantContext'
import type { AssistantMessage } from '@/components/assistant/assistantTypes'
import { AssistantDrawer } from '@/components/assistant/AssistantDrawer'
import { AssistantFab } from '@/components/assistant/AssistantFab'
import { RajasthanHistoryLauncher } from '@/components/assistant/RajasthanHistoryLauncher'

const STORAGE_OPEN = 'kb-assistant-open'
/** Bump when reply format changes so stale “needs API key” bubbles don’t linger. */
const STORAGE_MESSAGES = 'kb-assistant-messages-v2'

function loadOpen(): boolean {
  try {
    return sessionStorage.getItem(STORAGE_OPEN) === '1'
  } catch {
    return false
  }
}

function loadMessages(): AssistantMessage[] {
  try {
    const raw = sessionStorage.getItem(STORAGE_MESSAGES)
    if (!raw) return []
    const parsed = JSON.parse(raw) as unknown
    if (!Array.isArray(parsed)) return []
    return parsed
      .filter(
        (m): m is AssistantMessage =>
          m &&
          typeof m === 'object' &&
          (m as AssistantMessage).role &&
          typeof (m as AssistantMessage).content === 'string',
      )
      .slice(-40)
      .map((m, i) => ({
        ...m,
        id: typeof (m as AssistantMessage).id === 'string' ? (m as AssistantMessage).id : `m-${i}-${Date.now()}`,
      }))
  } catch {
    return []
  }
}

export function AssistantProvider({ children }: { children: ReactNode }) {
  const location = useLocation()
  const navigate = useNavigate()
  const [open, setOpenState] = useState(loadOpen)
  const [messages, setMessages] = useState<AssistantMessage[]>(loadMessages)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const abortRef = useRef<AbortController | null>(null)

  useEffect(() => {
    try {
      sessionStorage.setItem(STORAGE_OPEN, open ? '1' : '0')
    } catch {
      /* ignore */
    }
  }, [open])

  useEffect(() => {
    try {
      sessionStorage.setItem(STORAGE_MESSAGES, JSON.stringify(messages))
    } catch {
      /* ignore */
    }
  }, [messages])

  const setOpen = useCallback((v: boolean | ((p: boolean) => boolean)) => {
    setOpenState(v)
  }, [])

  const clearChat = useCallback(() => {
    setMessages([])
    setError(null)
    try {
      sessionStorage.removeItem(STORAGE_MESSAGES)
    } catch {
      /* ignore */
    }
  }, [])

  const sendMessage = useCallback(
    async (text: string) => {
      const trimmed = text.trim()
      if (!trimmed || loading) return
      setError(null)
      const userMsg: AssistantMessage = {
        id: `u-${Date.now()}`,
        role: 'user',
        content: trimmed,
      }
      const threadAfterUser = [...messages, userMsg]
      setMessages(threadAfterUser)
      setLoading(true)
      abortRef.current?.abort()
      const ac = new AbortController()
      abortRef.current = ac

      const lang =
        typeof navigator !== 'undefined' ? navigator.language || navigator.languages?.[0] || '' : ''

      const payload = {
        pathname: location.pathname + location.search,
        languageHint: lang,
        messages: threadAfterUser.map((m) => ({
          role: m.role,
          content: m.content,
        })),
      }

      try {
        const res = await fetch('/api/chat', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(payload),
          signal: ac.signal,
        })
        const data = (await res.json()) as {
          reply?: string
          error?: string
          itineraryUrl?: string | null
        }
        if (!res.ok) {
          throw new Error(data.error || `Request failed (${res.status})`)
        }
        const reply = typeof data.reply === 'string' ? data.reply : ''
        const itineraryUrl =
          typeof data.itineraryUrl === 'string' && data.itineraryUrl.length > 0 ? data.itineraryUrl : undefined
        const botMsg: AssistantMessage = {
          id: `a-${Date.now()}`,
          role: 'assistant',
          content: reply || data.error || 'No response.',
          itineraryUrl,
        }
        setMessages((prev) => [...prev, botMsg])
      } catch (e) {
        if ((e as Error).name === 'AbortError') return
        setError(e instanceof Error ? e.message : 'Something went wrong.')
        const errMsg: AssistantMessage = {
          id: `a-${Date.now()}`,
          role: 'assistant',
          content:
            e instanceof Error
              ? `Sorry — ${e.message}`
              : 'Sorry, the guide hit a snag. Try again in a moment.',
        }
        setMessages((prev) => [...prev, errMsg])
      } finally {
        setLoading(false)
      }
    },
    [loading, location.pathname, location.search, messages],
  )

  const openItinerary = useCallback(
    (url: string) => {
      navigate(url)
      setOpenState(false)
    },
    [navigate],
  )

  const value = useMemo(
    () => ({
      open,
      setOpen,
      messages,
      sendMessage,
      loading,
      error,
      clearChat,
    }),
    [open, setOpen, messages, sendMessage, loading, error, clearChat],
  )

  return (
    <AssistantContext.Provider value={value}>
      {children}
      <RajasthanHistoryLauncher />
      <AssistantFab />
      <AssistantDrawer onOpenItinerary={openItinerary} />
    </AssistantContext.Provider>
  )
}
