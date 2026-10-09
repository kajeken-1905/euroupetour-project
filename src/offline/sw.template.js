/* Service worker. The version and precache list below are filled in by the offline plugin in vite.config.ts. */
const VERSION = '__VERSION__'
const SHELL = `shell-${VERSION}`
const IMAGES = 'images-v1'
const FONTS = 'fonts-v1'
const PRECACHE = __PRECACHE__
const BASE = new URL('./', self.location).pathname
const INDEX = `${BASE}index.html`
const IMAGE_RE = /\.(?:jpe?g|png|webp|gif|svg|avif)$/i

self.addEventListener('install', (event) => {
  event.waitUntil(
    (async () => {
      const cache = await caches.open(SHELL)
      for (let i = 0; i < PRECACHE.length; i += 20) {
        await cache.addAll(PRECACHE.slice(i, i + 20).map((path) => new Request(BASE + path, { cache: 'reload' })))
      }
    })(),
  )
})

self.addEventListener('activate', (event) => {
  event.waitUntil(
    (async () => {
      const names = await caches.keys()
      await Promise.all(names.filter((n) => n.startsWith('shell-') && n !== SHELL).map((n) => caches.delete(n)))
      await self.clients.claim()
    })(),
  )
})

// The page asks the waiting worker to take over when the user accepts an update.
self.addEventListener('message', (event) => {
  if (event.data === 'SKIP_WAITING') self.skipWaiting()
})

async function navigation(request) {
  const controller = new AbortController()
  const timer = setTimeout(() => controller.abort(), 4000)
  try {
    return await fetch(request, { signal: controller.signal })
  } catch {
    return (await caches.match(INDEX)) ?? Response.error()
  } finally {
    clearTimeout(timer)
  }
}

async function sameOrigin(request) {
  const cached = await caches.match(request, { ignoreVary: true })
  if (cached) return cached
  const response = await fetch(request)
  if (response.ok && IMAGE_RE.test(new URL(request.url).pathname)) {
    const cache = await caches.open(IMAGES)
    cache.put(request, response.clone())
  }
  return response
}

async function fonts(request) {
  const cache = await caches.open(FONTS)
  const cached = await cache.match(request)
  const fresh = fetch(request)
    .then((response) => {
      if (response.ok) cache.put(request, response.clone())
      return response
    })
    .catch(() => cached ?? Response.error())
  return cached ?? fresh
}

self.addEventListener('fetch', (event) => {
  const { request } = event
  if (request.method !== 'GET') return
  const url = new URL(request.url)
  if (request.mode === 'navigate' && url.origin === self.location.origin) {
    event.respondWith(navigation(request))
  } else if (url.origin === self.location.origin && url.pathname.startsWith(BASE)) {
    event.respondWith(sameOrigin(request))
  } else if (url.hostname === 'fonts.googleapis.com' || url.hostname === 'fonts.gstatic.com') {
    event.respondWith(fonts(request))
  }
})
