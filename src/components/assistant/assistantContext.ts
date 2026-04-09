import { createContext } from 'react'
import type { AssistantMessage } from '@/components/assistant/assistantTypes'

export type AssistantCtx = {
  open: boolean
  setOpen: (v: boolean | ((p: boolean) => boolean)) => void
  messages: AssistantMessage[]
  sendMessage: (text: string) => Promise<void>
  loading: boolean
  error: string | null
  clearChat: () => void
}

export const AssistantContext = createContext<AssistantCtx | null>(null)
