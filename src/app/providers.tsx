import type { ReactNode } from 'react'

type ProvidersProps = {
  children: ReactNode
}

/** Shell for future context providers (theme, cart, etc.) */
export function Providers({ children }: ProvidersProps) {
  return children
}
