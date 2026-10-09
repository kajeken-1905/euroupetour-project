/** Registers the service worker and tracks whether an updated version is waiting. */
let waiting: ServiceWorker | null = null
const listeners = new Set<() => void>()

function setWaiting(worker: ServiceWorker | null) {
  waiting = worker
  listeners.forEach((fn) => fn())
}

export function subscribeUpdate(fn: () => void) {
  listeners.add(fn)
  return () => {
    listeners.delete(fn)
  }
}

export function hasUpdate() {
  return waiting !== null
}

/** Let the waiting worker take over; the page reloads once it controls the page. */
export function applyUpdate() {
  waiting?.postMessage('SKIP_WAITING')
}

export function registerServiceWorker() {
  if (!import.meta.env.PROD || !('serviceWorker' in navigator)) return
  window.addEventListener('load', async () => {
    try {
      const reg = await navigator.serviceWorker.register(`${import.meta.env.BASE_URL}sw.js`)
      // A worker that finishes installing while another one controls the page is an update.
      const track = (worker: ServiceWorker | null) => {
        worker?.addEventListener('statechange', () => {
          if (worker.state === 'installed' && navigator.serviceWorker.controller) setWaiting(worker)
        })
      }
      if (reg.waiting && navigator.serviceWorker.controller) setWaiting(reg.waiting)
      track(reg.installing)
      reg.addEventListener('updatefound', () => track(reg.installing))

      let reloading = false
      const hadController = navigator.serviceWorker.controller !== null
      navigator.serviceWorker.addEventListener('controllerchange', () => {
        if (!hadController || reloading) return
        reloading = true
        window.location.reload()
      })
      document.addEventListener('visibilitychange', () => {
        if (document.visibilityState === 'visible') reg.update().catch(() => {})
      })
    } catch {
      // Offline support is optional; the app works without it.
    }
  })
}
