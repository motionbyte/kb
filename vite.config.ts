import path from 'node:path'
import { fileURLToPath } from 'node:url'
import type { Plugin, ViteDevServer } from 'vite'
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const chatHandlerPath = path.resolve(__dirname, 'server/handleChat.ts')

function assistantApiPlugin(): Plugin {
  let serverRef: ViteDevServer | null = null
  let handlerMod: Promise<Record<string, unknown>> | null = null

  return {
    name: 'chetak-assistant-api',
    configureServer(server) {
      serverRef = server
      server.middlewares.use('/api/chat', (req, res, next) => {
        if (!serverRef) {
          next()
          return
        }
        if (!handlerMod) {
          handlerMod = serverRef.ssrLoadModule(chatHandlerPath)
        }
        const load = handlerMod
        void load
          .then((m) => {
            const mod = m as {
              handleChatPost: (req: import('node:http').IncomingMessage, res: import('node:http').ServerResponse) => Promise<void>
              handleChatOptions: (res: import('node:http').ServerResponse) => void
            }
            if (req.method === 'OPTIONS') {
              mod.handleChatOptions(res)
              return
            }
            if (req.method === 'POST') {
              return mod.handleChatPost(req, res).catch((err: unknown) => {
                res.statusCode = 500
                res.setHeader('Content-Type', 'application/json')
                res.end(JSON.stringify({ error: err instanceof Error ? err.message : 'Server error' }))
              })
            }
            res.statusCode = 405
            res.end()
          })
          .catch((err: unknown) => {
            res.statusCode = 500
            res.setHeader('Content-Type', 'application/json')
            res.end(JSON.stringify({ error: err instanceof Error ? err.message : 'Server error' }))
          })
      })
    },
  }
}

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), assistantApiPlugin()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
})
