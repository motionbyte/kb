import { useContext } from 'react'
import { AssistantContext, type AssistantCtx } from '@/components/assistant/assistantContext'

export function useAssistant(): AssistantCtx {
  const ctx = useContext(AssistantContext)
  if (!ctx) throw new Error('useAssistant must be used within AssistantProvider')
  return ctx
}
