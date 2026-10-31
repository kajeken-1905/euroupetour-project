/* Service worker. The version and precache list below are filled in by the offline plugin in vite.config.ts. */
const VERSION = 'e72af2704206'
const SHELL = `shell-${VERSION}`
const IMAGES = 'images-v1'
const FONTS = 'fonts-v1'
const PRECACHE = ["index.html","favicon.svg","icons.svg","manifest.webmanifest","image-sizes.json","offline-images.json","assets/BeenButton-BqXqtluO.js","assets/ChecklistPage-DmSeRf4i.js","assets/CityMapView-BX7HtPqA.js","assets/CityMapView-vh-t_kPv.css","assets/CityPage-DOp7k1Ga.js","assets/CountryPage-Dn0Y6Os-.js","assets/FavoriteButton-VNBJdKxT.js","assets/FootballPanel-ODdRM-lr.js","assets/MapLinks-BAl-v1eU.js","assets/MapPage-Bwv0MQsl.js","assets/OfflinePanel-CMKlGAZ7.js","assets/PlacePage-DtPmsRTc.js","assets/RoutesPanel-BlH55MAK.js","assets/ScenicTrainsPanel-7L2FyJOE.js","assets/SearchPage-HIG-7E4l.js","assets/SharePage-DK8y8-AL.js","assets/TripSections-CwVj5qkP.js","assets/ad-DtdVNsED.js","assets/al-C0f97y1B.js","assets/al-Ciu2xhFG.js","assets/am-BiF1106p.js","assets/am-BwJeXXpM.js","assets/assetUrl-ReaOFYNK.js","assets/at-CsI-UIoy.js","assets/at-D67NTO5L.js","assets/az-BKISM9ga.js","assets/az-CaVxkV6G.js","assets/ba-DT0oG6Eh.js","assets/ba-ZeoBAxz2.js","assets/be-BkuH5exN.js","assets/be-YuBfThdW.js","assets/bg-D-vzHda-.js","assets/bg-D7Gy0pgg.js","assets/by-CpEundn3.js","assets/ch-BSSCOuB0.js","assets/ch-CXzYQ38g.js","assets/color-Dg2eSAJV.js","assets/countryData-BWsw1_kA.js","assets/cy-5aX0862X.js","assets/cy-DC9ssPlr.js","assets/cz-Br1In9Af.js","assets/cz-DAnAYdwp.js","assets/de-BXTBjxYr.js","assets/de-B_zMGlyJ.js","assets/dk-DXKLC77W.js","assets/dk-Y9fVvB3R.js","assets/ee-BFJgAIiA.js","assets/ee-CVmJkfJv.js","assets/es-B9RIKd4a.js","assets/es-Dr23wrGr.js","assets/fi-1POLohFg.js","assets/fi-wS1qp-rh.js","assets/fo-BZjSn50w.js","assets/fo-CBjLSVbH.js","assets/football-D8cHlqUD.js","assets/fr-BWGIYi_H.js","assets/fr-D8KQUFf6.js","assets/gateways-B8r_DoON.js","assets/ge-BK4b0nRr.js","assets/ge-OD3nxMCU.js","assets/geo-DPhezIqZ.js","assets/gg-BNJufBNo.js","assets/gg-DSV2X0GP.js","assets/gi-D4DEkRlY.js","assets/gi-meySymZW.js","assets/gl-BZgbknFZ.js","assets/gr-BI5bgqdT.js","assets/gr-Czkl4soQ.js","assets/hr-Cd40gJRW.js","assets/hr-NAMjRigB.js","assets/hu-BSWJvI_U.js","assets/hu-DQnhzCdt.js","assets/ie-CGu59D2q.js","assets/ie-t_AykNGc.js","assets/im-CrPFCmjt.js","assets/im-PYtKIEqF.js","assets/index-B6M0CXNF.css","assets/index-BBXOhJGd.js","assets/is-C7xQwlCr.js","assets/is-D94Rl002.js","assets/it-BSl1xDk2.js","assets/it-DM7Ns_LS.js","assets/je-BpCd2X3T.js","assets/je-Ph5k5boR.js","assets/jsx-runtime-n5LQ9ujS.js","assets/li-q1Fpz8xs.js","assets/lt-DvcMd9rX.js","assets/lt-n3WbVOjW.js","assets/lu-DLTLHt2v.js","assets/lu-NlYCAprE.js","assets/lv-BAdBqskv.js","assets/lv-CI1MT5Mv.js","assets/mc-DnftEBfj.js","assets/md-B_tjbUNg.js","assets/md-DpG14N7d.js","assets/me-Boub1JW-.js","assets/me-DR5kCv5q.js","assets/mk-BWKtURVX.js","assets/mk-CszHlGNL.js","assets/mt-BQeBa2AP.js","assets/nl-CrPqJ_Tb.js","assets/nl-SXc5p4lw.js","assets/no-CbFGWUyW.js","assets/no-Sh7S_f8T.js","assets/pl-C2fVlM8j.js","assets/pl-Ccjyy2lq.js","assets/pt-Dq1wcAd_.js","assets/pt-PodcjfS_.js","assets/ro-Bxlq7lbp.js","assets/ro-CMpTxU9m.js","assets/rs-BScgBmKG.js","assets/rs-EU8wgZj5.js","assets/ru-BxW-cziD.js","assets/scenic-trains-Cehkm2V7.js","assets/se--NacuDgL.js","assets/se-DmFdTfQm.js","assets/search-5NNy62wv.js","assets/shareText-BL25AhrZ.js","assets/si-CEu1wmEd.js","assets/si-DfGLDEVT.js","assets/sk-D6pE00Jq.js","assets/sk-ICWxG6-M.js","assets/sm-DRirDI5f.js","assets/tr-ClGGdLRs.js","assets/tr-D7-ufx9B.js","assets/types-r5cjzL4J.js","assets/ua-C6D_jd6C.js","assets/uk-DAvje_oB.js","assets/uk-DyB6jUvm.js","assets/va-CAXR0RsB.js","assets/xc-DhxFDSBI.js","assets/xk-BF-TN2JT.js","assets/xk-qJU-bS1U.js","flags/ad.svg","flags/al.svg","flags/am.svg","flags/at.svg","flags/az.svg","flags/ba.svg","flags/be.svg","flags/bg.svg","flags/by.svg","flags/ch.svg","flags/cy.svg","flags/cz.svg","flags/de.svg","flags/dk.svg","flags/ee.svg","flags/es.svg","flags/fi.svg","flags/fo.svg","flags/fr.svg","flags/ge.svg","flags/gg.svg","flags/gi.svg","flags/gl.svg","flags/gr.svg","flags/hr.svg","flags/hu.svg","flags/ie.svg","flags/im.svg","flags/is.svg","flags/it.svg","flags/je.svg","flags/li.svg","flags/lt.svg","flags/lu.svg","flags/lv.svg","flags/mc.svg","flags/md.svg","flags/me.svg","flags/mk.svg","flags/mt.svg","flags/nl.svg","flags/no.svg","flags/pl.svg","flags/pt.svg","flags/ro.svg","flags/rs.svg","flags/ru.svg","flags/se.svg","flags/si.svg","flags/sk.svg","flags/sm.svg","flags/tr.svg","flags/ua.svg","flags/uk.svg","flags/va.svg","flags/xc.svg","flags/xk.svg","stamps/ad.png","stamps/al.png","stamps/am.png","stamps/at.png","stamps/az.png","stamps/ba.png","stamps/be.png","stamps/bg.png","stamps/cy.png","stamps/cz.png","stamps/de.png","stamps/dk.png","stamps/ee.png","stamps/es.png","stamps/fi.png","stamps/fr.png","stamps/ge.png","stamps/gr.png","stamps/hr.png","stamps/hu.png","stamps/ie.png","stamps/it.png","stamps/li.png","stamps/lt.png","stamps/lu.png","stamps/lv.png","stamps/mc.png","stamps/md.png","stamps/me.png","stamps/mk.png","stamps/mt.png","stamps/no.png","stamps/pl.png","stamps/pt.png","stamps/ro.png","stamps/rs.png","stamps/se.png","stamps/si.png","stamps/sk.png","stamps/sm.png","stamps/tr.png","stamps/ua.png","stamps/uk.png","stamps/va.png","stamps/xk.png","transit-apps/9292.png","transit-apps/ady.png","transit-apps/air-greenland.png","transit-apps/alsa.png","transit-apps/anda.png","transit-apps/andbus.png","transit-apps/anm-go.png","transit-apps/antalyakart.png","transit-apps/apam-mobile.png","transit-apps/at-bus.png","transit-apps/atac.png","transit-apps/atb.png","transit-apps/atm-milano.png","transit-apps/autobuses-urbanos-de-segovia.png","transit-apps/avanza-zaragoza.png","transit-apps/avm-venezia.png","transit-apps/baku-metropolitan.png","transit-apps/barik.png","transit-apps/beograd-plus.png","transit-apps/bilbobus.png","transit-apps/blablacar.png","transit-apps/bolt.png","transit-apps/bonjour-ratp.png","transit-apps/budapestgo.png","transit-apps/bursakart.png","transit-apps/bus-eireann-expressway.png","transit-apps/buses-gg.png","transit-apps/bvg.png","transit-apps/cabify.png","transit-apps/cardiff-bus.png","transit-apps/carris-metropolitana.png","transit-apps/carris.png","transit-apps/cd.png","transit-apps/cfl.png","transit-apps/cfr.png","transit-apps/chamonix-mobilite.png","transit-apps/citymapper.png","transit-apps/cp.png","transit-apps/ct-mover.png","transit-apps/cts.png","transit-apps/cyprus-bus.png","transit-apps/db.png","transit-apps/dbus.png","transit-apps/de-lijn.png","transit-apps/divia-mobilites.png","transit-apps/dsb.png","transit-apps/dvb-mobil.png","transit-apps/e-ticket-klaipeda.png","transit-apps/easyjet.png","transit-apps/ecolines.png","transit-apps/ego-cepte.png","transit-apps/elron.png","transit-apps/emt-malaga.png","transit-apps/emt-palma.png","transit-apps/entur.png","transit-apps/etnatrasporti.png","transit-apps/eurowings.png","transit-apps/first-bus.png","transit-apps/flixbus.png","transit-apps/foli.png","transit-apps/free-now.png","transit-apps/georgian-railway.png","transit-apps/grand-reims-mobilites.png","transit-apps/grazmobil.png","transit-apps/gvb.png","transit-apps/hellenic-train.png","transit-apps/hsl.png","transit-apps/htm.png","transit-apps/hvv-switch.png","transit-apps/hzpp.png","transit-apps/idfm.png","transit-apps/idos.png","transit-apps/info-transport-stb.png","transit-apps/infotrafic-tpt.png","transit-apps/irish-rail.png","transit-apps/iryo.png","transit-apps/istanbulkart.png","transit-apps/italo.png","transit-apps/ivb-tickets-app.png","transit-apps/jakdojade.png","transit-apps/jet2.png","transit-apps/klappid.png","transit-apps/kolumbus.png","transit-apps/kvb-app.png","transit-apps/la-metropole-mobilite.png","transit-apps/leipzigmove.png","transit-apps/leo-express.png","transit-apps/libertas-app.png","transit-apps/libertybus.png","transit-apps/lignes-azur.png","transit-apps/lothian.png","transit-apps/ltg-link.png","transit-apps/lux-express.png","transit-apps/matkahuolto.png","transit-apps/mav.png","transit-apps/metro-madrid.png","transit-apps/metrovalencia.png","transit-apps/midttrafik-live.png","transit-apps/mobicascais.png","transit-apps/mobiliteit-lu.png","transit-apps/moscow-metro.png","transit-apps/moscow-transport.png","transit-apps/mticket-tam.png","transit-apps/mvgo.png","transit-apps/my-astuce.png","transit-apps/my-bus-matera.png","transit-apps/national-express.png","transit-apps/national-rail.png","transit-apps/navegante.png","transit-apps/nicard.png","transit-apps/norwegian.png","transit-apps/ns.png","transit-apps/nsmart.png","transit-apps/oasa.png","transit-apps/oasth.png","transit-apps/obilet.png","transit-apps/oebb.png","transit-apps/orizo.png","transit-apps/ouigo-es.png","transit-apps/pegasus.png","transit-apps/peka.png","transit-apps/pid-litacka.png","transit-apps/pkp.png","transit-apps/podorozhnik.png","transit-apps/promet-split.png","transit-apps/rail-planner.png","transit-apps/rede-expressos.png","transit-apps/regiojet.png","transit-apps/rejsebillet.png","transit-apps/renfe.png","transit-apps/reseau-mat.png","transit-apps/ret.png","transit-apps/rigas-satiksme.png","transit-apps/rmvgo.png","transit-apps/rnv-start-info.png","transit-apps/roger.png","transit-apps/rtm.png","transit-apps/ruter.png","transit-apps/ryanair.png","transit-apps/salgo.png","transit-apps/salisbury-reds.png","transit-apps/salzburg-verkehr.png","transit-apps/sbb.png","transit-apps/seta.png","transit-apps/sgm-lecce.png","transit-apps/sibiubus.png","transit-apps/sibra.png","transit-apps/sj.png","transit-apps/skanetrafiken.png","transit-apps/skyss.png","transit-apps/sl.png","transit-apps/sncb.png","transit-apps/sncf.png","transit-apps/srbijavoz.png","transit-apps/stagecoach-bus.png","transit-apps/stib.png","transit-apps/sudtirolmobil.png","transit-apps/svipper.png","transit-apps/svt-vicenza.png","transit-apps/sz.png","transit-apps/tallinja.png","transit-apps/tbm.png","transit-apps/tcdd.png","transit-apps/tcl.png","transit-apps/tfi-live.png","transit-apps/tfl.png","transit-apps/tib-mallorca.png","transit-apps/ticketvarna.png","transit-apps/tisseo.png","transit-apps/tmb.png","transit-apps/to-move.png","transit-apps/trafi.png","transit-apps/trainline.png","transit-apps/transavia.png","transit-apps/translink.png","transit-apps/transporte-de-andalucia.png","transit-apps/transporte-urbano-de-granada.png","transit-apps/trenitalia.png","transit-apps/tub-app.png","transit-apps/tussam.png","transit-apps/txik-txak.png","transit-apps/uber.png","transit-apps/ul.png","transit-apps/urbana.png","transit-apps/uz.png","transit-apps/vasttrafik.png","transit-apps/vivi.png","transit-apps/volotea.png","transit-apps/vr.png","transit-apps/vueling.png","transit-apps/vvs-mobil.png","transit-apps/vy.png","transit-apps/westbahn.png","transit-apps/wienmobil.png","transit-apps/wizz-air.png","transit-apps/yandex-go.png","transit-apps/yandex-maps.png","transit-apps/yelo.png","transit-apps/ziogas.png","transit-apps/zssk.png","phrases/ad/excuse.mp3","phrases/ad/hello.mp3","phrases/ad/howMuch.mp3","phrases/ad/morning.mp3","phrases/ad/thanks.mp3","phrases/al/excuse.mp3","phrases/al/hello.mp3","phrases/al/howMuch.mp3","phrases/al/morning.mp3","phrases/al/thanks.mp3","phrases/at/excuse.mp3","phrases/at/hello.mp3","phrases/at/howMuch.mp3","phrases/at/morning.mp3","phrases/at/thanks.mp3","phrases/ba/excuse.mp3","phrases/ba/hello.mp3","phrases/ba/howMuch.mp3","phrases/ba/morning.mp3","phrases/ba/thanks.mp3","phrases/be/excuse.mp3","phrases/be/hello.mp3","phrases/be/howMuch.mp3","phrases/be/morning.mp3","phrases/be/thanks.mp3","phrases/bg/excuse.mp3","phrases/bg/hello.mp3","phrases/bg/howMuch.mp3","phrases/bg/morning.mp3","phrases/bg/thanks.mp3","phrases/ch/excuse.mp3","phrases/ch/hello.mp3","phrases/ch/howMuch.mp3","phrases/ch/morning.mp3","phrases/ch/thanks.mp3","phrases/cy/excuse.mp3","phrases/cy/hello.mp3","phrases/cy/howMuch.mp3","phrases/cy/morning.mp3","phrases/cy/thanks.mp3","phrases/cz/excuse.mp3","phrases/cz/hello.mp3","phrases/cz/howMuch.mp3","phrases/cz/morning.mp3","phrases/cz/thanks.mp3","phrases/de/excuse.mp3","phrases/de/hello.mp3","phrases/de/howMuch.mp3","phrases/de/morning.mp3","phrases/de/thanks.mp3","phrases/dk/excuse.mp3","phrases/dk/hello.mp3","phrases/dk/howMuch.mp3","phrases/dk/morning.mp3","phrases/dk/thanks.mp3","phrases/ee/excuse.mp3","phrases/ee/hello.mp3","phrases/ee/howMuch.mp3","phrases/ee/morning.mp3","phrases/ee/thanks.mp3","phrases/es/excuse.mp3","phrases/es/hello.mp3","phrases/es/howMuch.mp3","phrases/es/morning.mp3","phrases/es/thanks.mp3","phrases/fi/excuse.mp3","phrases/fi/hello.mp3","phrases/fi/howMuch.mp3","phrases/fi/morning.mp3","phrases/fi/thanks.mp3","phrases/fr/excuse.mp3","phrases/fr/hello.mp3","phrases/fr/howMuch.mp3","phrases/fr/morning.mp3","phrases/fr/thanks.mp3","phrases/ge/excuse.mp3","phrases/ge/hello.mp3","phrases/ge/howMuch.mp3","phrases/ge/morning.mp3","phrases/ge/thanks.mp3","phrases/gr/excuse.mp3","phrases/gr/hello.mp3","phrases/gr/howMuch.mp3","phrases/gr/morning.mp3","phrases/gr/thanks.mp3","phrases/hr/excuse.mp3","phrases/hr/hello.mp3","phrases/hr/howMuch.mp3","phrases/hr/morning.mp3","phrases/hr/thanks.mp3","phrases/hu/excuse.mp3","phrases/hu/hello.mp3","phrases/hu/howMuch.mp3","phrases/hu/morning.mp3","phrases/hu/thanks.mp3","phrases/ie/excuse.mp3","phrases/ie/hello.mp3","phrases/ie/howMuch.mp3","phrases/ie/morning.mp3","phrases/ie/thanks.mp3","phrases/is/excuse.mp3","phrases/is/hello.mp3","phrases/is/howMuch.mp3","phrases/is/morning.mp3","phrases/is/thanks.mp3","phrases/it/excuse.mp3","phrases/it/hello.mp3","phrases/it/howMuch.mp3","phrases/it/morning.mp3","phrases/it/thanks.mp3","phrases/li/excuse.mp3","phrases/li/hello.mp3","phrases/li/howMuch.mp3","phrases/li/morning.mp3","phrases/li/thanks.mp3","phrases/lt/excuse.mp3","phrases/lt/hello.mp3","phrases/lt/howMuch.mp3","phrases/lt/morning.mp3","phrases/lt/thanks.mp3","phrases/lu/excuse.mp3","phrases/lu/hello.mp3","phrases/lu/howMuch.mp3","phrases/lu/morning.mp3","phrases/lu/thanks.mp3","phrases/lv/excuse.mp3","phrases/lv/hello.mp3","phrases/lv/howMuch.mp3","phrases/lv/morning.mp3","phrases/lv/thanks.mp3","phrases/mc/excuse.mp3","phrases/mc/hello.mp3","phrases/mc/howMuch.mp3","phrases/mc/morning.mp3","phrases/mc/thanks.mp3","phrases/me/excuse.mp3","phrases/me/hello.mp3","phrases/me/howMuch.mp3","phrases/me/morning.mp3","phrases/me/thanks.mp3","phrases/mk/excuse.mp3","phrases/mk/hello.mp3","phrases/mk/howMuch.mp3","phrases/mk/morning.mp3","phrases/mk/thanks.mp3","phrases/mt/excuse.mp3","phrases/mt/hello.mp3","phrases/mt/howMuch.mp3","phrases/mt/morning.mp3","phrases/mt/thanks.mp3","phrases/nl/excuse.mp3","phrases/nl/hello.mp3","phrases/nl/howMuch.mp3","phrases/nl/morning.mp3","phrases/nl/thanks.mp3","phrases/no/excuse.mp3","phrases/no/hello.mp3","phrases/no/howMuch.mp3","phrases/no/morning.mp3","phrases/no/thanks.mp3","phrases/pl/excuse.mp3","phrases/pl/hello.mp3","phrases/pl/howMuch.mp3","phrases/pl/morning.mp3","phrases/pl/thanks.mp3","phrases/pt/excuse.mp3","phrases/pt/hello.mp3","phrases/pt/howMuch.mp3","phrases/pt/morning.mp3","phrases/pt/thanks.mp3","phrases/ro/excuse.mp3","phrases/ro/hello.mp3","phrases/ro/howMuch.mp3","phrases/ro/morning.mp3","phrases/ro/thanks.mp3","phrases/rs/excuse.mp3","phrases/rs/hello.mp3","phrases/rs/howMuch.mp3","phrases/rs/morning.mp3","phrases/rs/thanks.mp3","phrases/se/excuse.mp3","phrases/se/hello.mp3","phrases/se/howMuch.mp3","phrases/se/morning.mp3","phrases/se/thanks.mp3","phrases/si/excuse.mp3","phrases/si/hello.mp3","phrases/si/howMuch.mp3","phrases/si/morning.mp3","phrases/si/thanks.mp3","phrases/sk/excuse.mp3","phrases/sk/hello.mp3","phrases/sk/howMuch.mp3","phrases/sk/morning.mp3","phrases/sk/thanks.mp3","phrases/tr/excuse.mp3","phrases/tr/hello.mp3","phrases/tr/howMuch.mp3","phrases/tr/morning.mp3","phrases/tr/thanks.mp3","phrases/uk/excuse.mp3","phrases/uk/hello.mp3","phrases/uk/howMuch.mp3","phrases/uk/morning.mp3","phrases/uk/thanks.mp3","phrases/va/excuse.mp3","phrases/va/hello.mp3","phrases/va/howMuch.mp3","phrases/va/morning.mp3","phrases/va/thanks.mp3","icons/apple-touch-icon.png","icons/icon-192.png","icons/icon-512.png"]
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
      // Drop older copies of precached files from the image cache, so a replaced file never comes back.
      const images = await caches.open(IMAGES)
      await Promise.all(PRECACHE.map((path) => images.delete(BASE + path)))
      // Photos are kept across versions too, so one replaced under the same name (a new city picture) would
      // stay old for anyone who had seen it. Drop every cached photo whose size differs from this build's.
      const sizes = await (await caches.open(SHELL)).match(`${BASE}image-sizes.json`)
      if (sizes) {
        const want = await sizes.json()
        for (const request of await images.keys()) {
          const size = want[decodeURIComponent(new URL(request.url).pathname.slice(BASE.length))]
          if (size === undefined) continue
          const response = await images.match(request)
          const length = Number(response?.headers.get('content-length')) || (await response?.blob())?.size
          if (length !== size) await images.delete(request)
        }
      }
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
  // This version's own files first: a file replaced under the same name (e.g. a flag) must not be
  // shadowed by the older copy kept in the long-lived image cache.
  const shell = await caches.open(SHELL)
  const cached = (await shell.match(request, { ignoreVary: true })) ?? (await caches.match(request, { ignoreVary: true }))
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
