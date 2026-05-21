'use client'

import { useEffect } from 'react'

/**
 * Global guard that reloads the page when Next.js tries to load a JS chunk that no longer
 * exists on the server. This happens after a deploy when a client has a stale HTML/router
 * state pointing to old chunk hashes that have been replaced by the new build.
 *
 * Without this guard, the user sees Next's default fallback ("Application error: a client-side
 * exception has occurred") and must manually do a hard refresh.
 *
 * Strategy: listen for both `error` (script load failure) and `unhandledrejection` (dynamic
 * import failure) events. If the message matches a chunk loading error pattern, reload once
 * per session to avoid infinite reload loops.
 */
export default function ChunkErrorReloader() {
  useEffect(() => {
    const RELOAD_FLAG = 'rr_chunk_reloaded'

    const isChunkError = (msg: string | undefined): boolean => {
      if (!msg) return false
      return (
        msg.includes('ChunkLoadError') ||
        msg.includes('Loading chunk') ||
        msg.includes('Loading CSS chunk') ||
        /Failed to fetch dynamically imported module/i.test(msg)
      )
    }

    const reloadOnce = () => {
      if (sessionStorage.getItem(RELOAD_FLAG)) return
      sessionStorage.setItem(RELOAD_FLAG, '1')
      window.location.reload()
    }

    const onError = (event: ErrorEvent) => {
      if (isChunkError(event.message) || isChunkError(event.error?.message)) {
        reloadOnce()
      }
    }

    const onRejection = (event: PromiseRejectionEvent) => {
      const reason = event.reason
      const msg = typeof reason === 'string' ? reason : reason?.message
      if (isChunkError(msg) || isChunkError(reason?.name)) {
        reloadOnce()
      }
    }

    window.addEventListener('error', onError)
    window.addEventListener('unhandledrejection', onRejection)

    return () => {
      window.removeEventListener('error', onError)
      window.removeEventListener('unhandledrejection', onRejection)
    }
  }, [])

  return null
}
