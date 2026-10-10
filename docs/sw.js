/* Service worker. The version and precache list below are filled in by the offline plugin in vite.config.ts. */
const VERSION = '2476adc34618'
const SHELL = `shell-${VERSION}`
const IMAGES = 'images-v1'
const FONTS = 'fonts-v1'
const PRECACHE = ["index.html","favicon.svg","icons.svg","manifest.webmanifest","image-sizes.json","assets/MapPage-DutTt6xg.js","assets/index-BtEaZsXi.js","assets/index-mzJzvJgd.css","flags/ad.svg","flags/al.svg","flags/am.svg","flags/at.svg","flags/az.svg","flags/ba.svg","flags/be.svg","flags/bg.svg","flags/ch.svg","flags/cy.svg","flags/cz.svg","flags/de.svg","flags/dk.svg","flags/ee.svg","flags/es.svg","flags/fi.svg","flags/fr.svg","flags/ge.svg","flags/gr.svg","flags/hr.svg","flags/hu.svg","flags/ie.svg","flags/is.svg","flags/it.svg","flags/li.svg","flags/lt.svg","flags/lu.svg","flags/lv.svg","flags/mc.svg","flags/md.svg","flags/me.svg","flags/mk.svg","flags/mt.svg","flags/nl.svg","flags/no.svg","flags/pl.svg","flags/pt.svg","flags/ro.svg","flags/rs.svg","flags/se.svg","flags/si.svg","flags/sk.svg","flags/sm.svg","flags/tr.svg","flags/ua.svg","flags/uk.svg","flags/va.svg","flags/xk.svg","stamps/ad.png","stamps/al.png","stamps/am.png","stamps/at.png","stamps/az.png","stamps/ba.png","stamps/be.png","stamps/bg.png","stamps/cy.png","stamps/cz.png","stamps/de.png","stamps/dk.png","stamps/ee.png","stamps/es.png","stamps/fi.png","stamps/fr.png","stamps/ge.png","stamps/gr.png","stamps/hr.png","stamps/hu.png","stamps/ie.png","stamps/it.png","stamps/li.png","stamps/lt.png","stamps/lu.png","stamps/lv.png","stamps/mc.png","stamps/md.png","stamps/me.png","stamps/mk.png","stamps/mt.png","stamps/no.png","stamps/pl.png","stamps/pt.png","stamps/ro.png","stamps/rs.png","stamps/se.png","stamps/si.png","stamps/sk.png","stamps/sm.png","stamps/tr.png","stamps/ua.png","stamps/uk.png","stamps/va.png","stamps/xk.png","transit-apps/alsa.png","transit-apps/bolt.png","transit-apps/cabify.png","transit-apps/carris.png","transit-apps/cd.png","transit-apps/cfl.png","transit-apps/citymapper.png","transit-apps/cp.png","transit-apps/db.png","transit-apps/dsb.png","transit-apps/flixbus.png","transit-apps/free-now.png","transit-apps/gibraltar.png","transit-apps/idfm.png","transit-apps/irish-rail.png","transit-apps/mav.png","transit-apps/metro-lisboa.png","transit-apps/metro-madrid.png","transit-apps/metro-porto.png","transit-apps/metrovalencia.png","transit-apps/ns.png","transit-apps/oebb.png","transit-apps/pkp.png","transit-apps/rede-expressos.png","transit-apps/renfe.png","transit-apps/sbb.png","transit-apps/sj.png","transit-apps/sncb.png","transit-apps/sncf.png","transit-apps/tfl.png","transit-apps/tmb.png","transit-apps/trainline.png","transit-apps/trenitalia.png","transit-apps/tussam.png","transit-apps/uber.png","transit-apps/vr.png","transit-apps/vy.png","phrases/ad/excuse.mp3","phrases/ad/hello.mp3","phrases/ad/howMuch.mp3","phrases/ad/morning.mp3","phrases/ad/thanks.mp3","phrases/al/excuse.mp3","phrases/al/hello.mp3","phrases/al/howMuch.mp3","phrases/al/morning.mp3","phrases/al/thanks.mp3","phrases/at/excuse.mp3","phrases/at/hello.mp3","phrases/at/howMuch.mp3","phrases/at/morning.mp3","phrases/at/thanks.mp3","phrases/ba/excuse.mp3","phrases/ba/hello.mp3","phrases/ba/howMuch.mp3","phrases/ba/morning.mp3","phrases/ba/thanks.mp3","phrases/be/excuse.mp3","phrases/be/hello.mp3","phrases/be/howMuch.mp3","phrases/be/morning.mp3","phrases/be/thanks.mp3","phrases/bg/excuse.mp3","phrases/bg/hello.mp3","phrases/bg/howMuch.mp3","phrases/bg/morning.mp3","phrases/bg/thanks.mp3","phrases/ch/excuse.mp3","phrases/ch/hello.mp3","phrases/ch/howMuch.mp3","phrases/ch/morning.mp3","phrases/ch/thanks.mp3","phrases/cy/excuse.mp3","phrases/cy/hello.mp3","phrases/cy/howMuch.mp3","phrases/cy/morning.mp3","phrases/cy/thanks.mp3","phrases/cz/excuse.mp3","phrases/cz/hello.mp3","phrases/cz/howMuch.mp3","phrases/cz/morning.mp3","phrases/cz/thanks.mp3","phrases/de/excuse.mp3","phrases/de/hello.mp3","phrases/de/howMuch.mp3","phrases/de/morning.mp3","phrases/de/thanks.mp3","phrases/dk/excuse.mp3","phrases/dk/hello.mp3","phrases/dk/howMuch.mp3","phrases/dk/morning.mp3","phrases/dk/thanks.mp3","phrases/ee/excuse.mp3","phrases/ee/hello.mp3","phrases/ee/howMuch.mp3","phrases/ee/morning.mp3","phrases/ee/thanks.mp3","phrases/es/excuse.mp3","phrases/es/hello.mp3","phrases/es/howMuch.mp3","phrases/es/morning.mp3","phrases/es/thanks.mp3","phrases/fi/excuse.mp3","phrases/fi/hello.mp3","phrases/fi/howMuch.mp3","phrases/fi/morning.mp3","phrases/fi/thanks.mp3","phrases/fr/excuse.mp3","phrases/fr/hello.mp3","phrases/fr/howMuch.mp3","phrases/fr/morning.mp3","phrases/fr/thanks.mp3","phrases/ge/excuse.mp3","phrases/ge/hello.mp3","phrases/ge/howMuch.mp3","phrases/ge/morning.mp3","phrases/ge/thanks.mp3","phrases/gr/excuse.mp3","phrases/gr/hello.mp3","phrases/gr/howMuch.mp3","phrases/gr/morning.mp3","phrases/gr/thanks.mp3","phrases/hr/excuse.mp3","phrases/hr/hello.mp3","phrases/hr/howMuch.mp3","phrases/hr/morning.mp3","phrases/hr/thanks.mp3","phrases/hu/excuse.mp3","phrases/hu/hello.mp3","phrases/hu/howMuch.mp3","phrases/hu/morning.mp3","phrases/hu/thanks.mp3","phrases/ie/excuse.mp3","phrases/ie/hello.mp3","phrases/ie/howMuch.mp3","phrases/ie/morning.mp3","phrases/ie/thanks.mp3","phrases/is/excuse.mp3","phrases/is/hello.mp3","phrases/is/howMuch.mp3","phrases/is/morning.mp3","phrases/is/thanks.mp3","phrases/it/excuse.mp3","phrases/it/hello.mp3","phrases/it/howMuch.mp3","phrases/it/morning.mp3","phrases/it/thanks.mp3","phrases/li/excuse.mp3","phrases/li/hello.mp3","phrases/li/howMuch.mp3","phrases/li/morning.mp3","phrases/li/thanks.mp3","phrases/lt/excuse.mp3","phrases/lt/hello.mp3","phrases/lt/howMuch.mp3","phrases/lt/morning.mp3","phrases/lt/thanks.mp3","phrases/lu/excuse.mp3","phrases/lu/hello.mp3","phrases/lu/howMuch.mp3","phrases/lu/morning.mp3","phrases/lu/thanks.mp3","phrases/lv/excuse.mp3","phrases/lv/hello.mp3","phrases/lv/howMuch.mp3","phrases/lv/morning.mp3","phrases/lv/thanks.mp3","phrases/mc/excuse.mp3","phrases/mc/hello.mp3","phrases/mc/howMuch.mp3","phrases/mc/morning.mp3","phrases/mc/thanks.mp3","phrases/me/excuse.mp3","phrases/me/hello.mp3","phrases/me/howMuch.mp3","phrases/me/morning.mp3","phrases/me/thanks.mp3","phrases/mk/excuse.mp3","phrases/mk/hello.mp3","phrases/mk/howMuch.mp3","phrases/mk/morning.mp3","phrases/mk/thanks.mp3","phrases/mt/excuse.mp3","phrases/mt/hello.mp3","phrases/mt/howMuch.mp3","phrases/mt/morning.mp3","phrases/mt/thanks.mp3","phrases/nl/excuse.mp3","phrases/nl/hello.mp3","phrases/nl/howMuch.mp3","phrases/nl/morning.mp3","phrases/nl/thanks.mp3","phrases/no/excuse.mp3","phrases/no/hello.mp3","phrases/no/howMuch.mp3","phrases/no/morning.mp3","phrases/no/thanks.mp3","phrases/pl/excuse.mp3","phrases/pl/hello.mp3","phrases/pl/howMuch.mp3","phrases/pl/morning.mp3","phrases/pl/thanks.mp3","phrases/pt/excuse.mp3","phrases/pt/hello.mp3","phrases/pt/howMuch.mp3","phrases/pt/morning.mp3","phrases/pt/thanks.mp3","phrases/ro/excuse.mp3","phrases/ro/hello.mp3","phrases/ro/howMuch.mp3","phrases/ro/morning.mp3","phrases/ro/thanks.mp3","phrases/rs/excuse.mp3","phrases/rs/hello.mp3","phrases/rs/howMuch.mp3","phrases/rs/morning.mp3","phrases/rs/thanks.mp3","phrases/se/excuse.mp3","phrases/se/hello.mp3","phrases/se/howMuch.mp3","phrases/se/morning.mp3","phrases/se/thanks.mp3","phrases/si/excuse.mp3","phrases/si/hello.mp3","phrases/si/howMuch.mp3","phrases/si/morning.mp3","phrases/si/thanks.mp3","phrases/sk/excuse.mp3","phrases/sk/hello.mp3","phrases/sk/howMuch.mp3","phrases/sk/morning.mp3","phrases/sk/thanks.mp3","phrases/tr/excuse.mp3","phrases/tr/hello.mp3","phrases/tr/howMuch.mp3","phrases/tr/morning.mp3","phrases/tr/thanks.mp3","phrases/uk/excuse.mp3","phrases/uk/hello.mp3","phrases/uk/howMuch.mp3","phrases/uk/morning.mp3","phrases/uk/thanks.mp3","phrases/va/excuse.mp3","phrases/va/hello.mp3","phrases/va/howMuch.mp3","phrases/va/morning.mp3","phrases/va/thanks.mp3","icons/apple-touch-icon.png","icons/icon-192.png","icons/icon-512.png"]
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
