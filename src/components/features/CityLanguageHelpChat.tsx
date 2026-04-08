import { useCallback, useEffect, useRef, useState } from 'react'
import { LANGUAGE_HELP_INTRO } from '@/data/languageHelpKnowledge'
import { getLanguageHelpReply } from '@/lib/languageHelpReply'
import { formatTranslateReply, translateAnyToHindi } from '@/lib/translateToHindi'
import { cn } from '@/lib/cn'
import './CityLanguageHelpChat.css'

type ChatMode = 'learn' | 'translate'

type Msg = {
  id: string
  role: 'user' | 'bot'
  body: string
  phrases?: { hi: string; hiScript?: string; en: string }[]
}

function uid() {
  return `${Date.now()}-${Math.random().toString(36).slice(2, 9)}`
}

function learnWelcome(city: string) {
  return `${LANGUAGE_HELP_INTRO.welcome}\n\n(Learn mode — ${city}.)`
}

function translateWelcome(city: string) {
  return (
    `Translate mode\n\n` +
    `Type any sentence or use the 🎤 microphone. You will see Hindi in Devanagari script. ` +
    `An internet connection is required. Machine translation may shift casual phrasing or tone slightly.\n\n` +
    `(${city})`
  )
}

const QUICK_CATS = [
  { id: 'basic', label: 'Basic', cmd: '__cat:basic__' as const },
  { id: 'transport', label: 'Transport', cmd: '__cat:transport__' as const },
  { id: 'hotel', label: 'Hotel', cmd: '__cat:hotel__' as const },
  { id: 'emergency', label: 'Emergency', cmd: '__cat:emergency__' as const },
]

type Props = {
  cityName: string
}

export function CityLanguageHelpChat({ cityName }: Props) {
  const [mode, setMode] = useState<ChatMode>('learn')
  const [input, setInput] = useState('')
  const [messages, setMessages] = useState<Msg[]>(() => [
    { id: uid(), role: 'bot', body: learnWelcome(cityName) },
  ])
  const threadEndRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    threadEndRef.current?.scrollIntoView({ behavior: 'smooth', block: 'end' })
  }, [messages])

  const switchMode = useCallback(
    (next: ChatMode) => {
      if (next === mode) return
      setMode(next)
      setMessages([{ id: uid(), role: 'bot', body: next === 'learn' ? learnWelcome(cityName) : translateWelcome(cityName) }])
    },
    [mode, cityName],
  )

  const startMic = useCallback(() => {
    const win = window as unknown as {
      SpeechRecognition?: new () => {
        lang: string
        interimResults: boolean
        maxAlternatives: number
        start: () => void
        onresult: ((ev: Event) => void) | null
        onerror: (() => void) | null
      }
      webkitSpeechRecognition?: new () => {
        lang: string
        interimResults: boolean
        maxAlternatives: number
        start: () => void
        onresult: ((ev: Event) => void) | null
        onerror: (() => void) | null
      }
    }
    const Ctor = win.SpeechRecognition || win.webkitSpeechRecognition
    if (!Ctor) {
      setMessages((prev) => [
        ...prev,
        {
          id: uid(),
          role: 'bot',
          body: 'Voice input is not supported in this browser or device. Please type your sentence instead.',
        },
      ])
      return
    }
    const rec = new Ctor()
    rec.lang = 'en-IN'
    rec.interimResults = false
    rec.maxAlternatives = 1
    rec.onresult = (ev: Event) => {
      const r = ev as unknown as { results: { 0: { 0: { transcript: string } } } }
      const line = r.results[0]?.[0]?.transcript?.trim()
      if (line) setInput((prev) => (prev ? `${prev} ${line}` : line))
    }
    rec.onerror = () => {
      setMessages((prev) => [
        ...prev,
        {
          id: uid(),
          role: 'bot',
          body: 'The microphone did not pick up speech. Check permission or try again.',
        },
      ])
    }
    rec.start()
  }, [])

  const pushExchange = useCallback(
    async (userText: string) => {
      const trimmed = userText.trim()
      if (!trimmed) return

      if (mode === 'learn') {
        const reply = getLanguageHelpReply(trimmed)
        setMessages((prev) => [
          ...prev,
          { id: uid(), role: 'user', body: trimmed },
          { id: uid(), role: 'bot', body: reply.body, phrases: reply.phrases },
        ])
        setInput('')
        return
      }

      const botId = uid()
      setMessages((prev) => [
        ...prev,
        { id: uid(), role: 'user', body: trimmed },
        { id: botId, role: 'bot', body: 'Translating…' },
      ])
      setInput('')

      try {
        const result = await translateAnyToHindi(trimmed)
        const body = formatTranslateReply(result, trimmed)
        setMessages((prev) => prev.map((m) => (m.id === botId ? { ...m, body } : m)))
      } catch {
        setMessages((prev) =>
          prev.map((m) =>
            m.id === botId
              ? {
                  ...m,
                  body:
                    'Translation could not load. Check your internet connection or VPN, or switch to Learn mode for ready-made travel phrases.',
                }
              : m,
          ),
        )
      }
    },
    [mode],
  )

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    void pushExchange(input)
  }

  return (
    <section className="lang-chat" aria-labelledby="app-dialog-title">
      <div className="lang-chat__hero">
        <p className="lang-chat__kicker">{LANGUAGE_HELP_INTRO.title}</p>
        <h1 id="app-dialog-title" className="lang-chat__title">
          {LANGUAGE_HELP_INTRO.subtitle}
        </h1>
        <p className="lang-chat__scope">
          Two modes: <strong>Learn</strong> (travel phrase coach) and <strong>Translate</strong> (any line → Hindi).
        </p>
      </div>

      <div className="lang-chat__modes" role="tablist" aria-label="Choose mode">
        <button
          type="button"
          role="tab"
          aria-selected={mode === 'learn'}
          className={cn('lang-chat__mode', mode === 'learn' && 'lang-chat__mode--on')}
          onClick={() => switchMode('learn')}
        >
          Learn
        </button>
        <button
          type="button"
          role="tab"
          aria-selected={mode === 'translate'}
          className={cn('lang-chat__mode', mode === 'translate' && 'lang-chat__mode--on')}
          onClick={() => switchMode('translate')}
        >
          Translate
        </button>
      </div>

      {mode === 'learn' ? (
        <div className="lang-chat__quick" role="group" aria-label="Phrase categories">
          {QUICK_CATS.map((c) => (
            <button
              key={c.id}
              type="button"
              className="lang-chat__chip"
              onClick={() => void pushExchange(c.cmd)}
            >
              {c.label}
            </button>
          ))}
        </div>
      ) : (
        <p className="lang-chat__translate-hint">
          You may speak English or Hindi on the mic. Keep the network on for translation.
        </p>
      )}

      <div className="lang-chat__thread" role="log" aria-live="polite" aria-relevant="additions">
        {messages.map((m) => (
          <div
            key={m.id}
            className={cn('lang-chat__row', m.role === 'user' ? 'lang-chat__row--user' : 'lang-chat__row--bot')}
          >
            <div className="lang-chat__bubble">
              {m.role === 'bot' ? (
                <span className="lang-chat__avatar" aria-hidden>
                  💬
                </span>
              ) : null}
              <div className="lang-chat__bubble-inner">
                <p className="lang-chat__text">{m.body}</p>
                {m.phrases && m.phrases.length > 0 ? (
                  <ul className="lang-chat__phrases">
                    {m.phrases.map((p, i) => (
                      <li key={`${m.id}-p-${i}`} className="lang-chat__phrase-card">
                        <span className="lang-chat__phrase-hi">{p.hi}</span>
                        {p.hiScript ? (
                          <span className="lang-chat__phrase-dev" lang="hi">
                            {p.hiScript}
                          </span>
                        ) : null}
                        <span className="lang-chat__phrase-en">{p.en}</span>
                      </li>
                    ))}
                  </ul>
                ) : null}
              </div>
            </div>
          </div>
        ))}
        <div ref={threadEndRef} />
      </div>

      <form className="lang-chat__form" onSubmit={onSubmit}>
        <label className="visually-hidden" htmlFor="lang-chat-input">
          {mode === 'learn'
            ? 'Phrase or any language keyword'
            : 'Anything to translate to Hindi'}
        </label>
        {mode === 'translate' ? (
          <button
            type="button"
            className="lang-chat__mic"
            onClick={startMic}
            aria-label="Speak into microphone"
            title="Mic"
          >
            🎤
          </button>
        ) : null}
        <input
          id="lang-chat-input"
          type="text"
          className="lang-chat__input"
          autoComplete="off"
          placeholder={
            mode === 'learn'
              ? 'e.g. kitna, meter, police, or “how to say … in Hindi”'
              : 'Any language — full sentences are fine'
          }
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
        <button type="submit" className="lang-chat__send">
          Send
        </button>
      </form>
    </section>
  )
}
