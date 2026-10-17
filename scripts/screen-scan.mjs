// Whole-app screen scan: node scripts/screen-scan.mjs <out-dir> [width] [ko|en] [routes]
// Serves dist/ with `vite preview`, walks every country, city and place screen in headless Chrome
// (client-side navigation, so each country's data loads once) and reports, per screen:
//   - hangul left in the English UI (en only), horizontal overflow, images that failed to load, page errors.
// routes: comma list of kinds to walk (default home,countries,country,city,place). Needs Node 22+.
import { spawn } from 'node:child_process'
import { writeFileSync, rmSync, mkdirSync, readFileSync } from 'node:fs'

const out = process.argv[2] ?? '/tmp/screen-scan'
if (/(^|\/)(dist|docs)\/?$/.test(out)) throw new Error('out-dir must not be dist/ or docs/')
mkdirSync(out, { recursive: true })
const WIDTH = Number(process.argv[3] ?? 320)
const LANG = process.argv[4] ?? 'en'
const KINDS = (process.argv[5] ?? 'home,countries,search,trip,map,country,city,place').split(',')
const PORT = 4181
const BASE = '/euroupetour-project'
const URL = `http://127.0.0.1:${PORT}${BASE}`
const CHROME = '/Applications/Google Chrome.app/Contents/MacOS/Google Chrome'
const sleep = (ms) => new Promise((r) => setTimeout(r, ms))

const countries = [...readFileSync('src/data/countries.ts', 'utf8').matchAll(/\n {4}id: '([a-z]+)'/g)].map((m) => m[1])
const cities = [...readFileSync('src/data/cityIndex.ts', 'utf8').matchAll(/"id":"([^"]+)","countryId"/g)].map((m) => m[1])
const places = []
for (const f of ['ad', 'al', 'am', 'at', 'az', 'ba', 'be', 'bg', 'ch', 'cy', 'cz', 'de', 'dk', 'ee', 'es', 'fi', 'fr', 'ge', 'gr', 'hr', 'hu', 'ie', 'is', 'it', 'li', 'lt', 'lu', 'lv', 'mc', 'md', 'me', 'mk', 'mt', 'nl', 'no', 'pl', 'pt', 'ro', 'rs', 'se', 'si', 'sk', 'sm', 'tr', 'ua', 'uk', 'va', 'xk']) {
  try {
    for (const m of readFileSync(`src/data/places-${f}-extra.ts`, 'utf8').matchAll(/\n\s*place\('([^']+)'/g)) places.push(m[1])
  } catch {}
}
for (const n of [1, 2, 3, 4]) for (const m of readFileSync(`src/data/places-part${n}.ts`, 'utf8').matchAll(/\n\s*id: '([^']+)',/g)) places.push(m[1])

const routes = []
if (KINDS.includes('home')) routes.push('/')
for (const k of ['countries', 'search', 'trip', 'map']) if (KINDS.includes(k)) routes.push('/' + k)
if (KINDS.includes('country')) routes.push(...countries.map((c) => '/country/' + c))
if (KINDS.includes('city')) routes.push(...cities.map((c) => '/city/' + c))
if (KINDS.includes('place')) routes.push(...places.map((p) => '/place/' + p))

const server = spawn('npx', ['vite', 'preview', '--port', String(PORT), '--host', '127.0.0.1'], { stdio: 'ignore', detached: true })
for (let i = 0; i < 30; i++) {
  try { await fetch(URL + '/'); break } catch { await sleep(500) }
}
rmSync(`${out}/profile`, { recursive: true, force: true })
const chrome = spawn(CHROME, ['--headless=new', '--disable-gpu', '--remote-debugging-port=9337', `--user-data-dir=${out}/profile`, `--window-size=${WIDTH},900`, 'about:blank'], { stdio: 'ignore' })
let target
for (let i = 0; i < 30; i++) {
  try { target = (await (await fetch('http://127.0.0.1:9337/json')).json()).find((t) => t.type === 'page'); if (target) break } catch {}
  await sleep(500)
}
const ws = new WebSocket(target.webSocketDebuggerUrl)
await new Promise((r) => (ws.onopen = r))
let id = 0
const pending = new Map()
const errors = []
ws.onmessage = (m) => {
  const d = JSON.parse(m.data)
  if (d.id && pending.has(d.id)) { pending.get(d.id)(d); pending.delete(d.id) }
  if (d.method === 'Runtime.exceptionThrown') errors.push(d.params.exceptionDetails?.exception?.description?.slice(0, 200))
}
const send = (method, params = {}) => new Promise((r) => { pending.set(++id, r); ws.send(JSON.stringify({ id, method, params })) })
const evaluate = async (expression) => {
  const r = await send('Runtime.evaluate', { expression, awaitPromise: true, returnByValue: true })
  if (r.result?.exceptionDetails) throw new Error(JSON.stringify(r.result.exceptionDetails).slice(0, 400))
  return r.result?.result?.value
}

const CHECK = `(async () => {
  for (let i = 0; i < 20 && !document.querySelector('.phone-content *'); i++) await new Promise(r => setTimeout(r, 100))
  await new Promise(r => setTimeout(r, 350))
  const root = document.querySelector('.phone-content') || document.body
  const text = root.innerText
  const hangul = ${LANG === 'en'} ? [...new Set(text.split('\\n').filter(l => /[가-힣]/.test(l)).map(l => l.trim().slice(0, 80)))].slice(0, 5) : []
  const w = root.clientWidth
  const wide = []
  if (root.scrollWidth > w + 1 || document.documentElement.scrollWidth > innerWidth + 1) {
    for (const el of root.querySelectorAll('*')) {
      const r = el.getBoundingClientRect()
      if (r.width && r.right > innerWidth + 1 && getComputedStyle(el).position !== 'fixed' && !el.closest('.leaflet-container, [data-scroll-x], .h-scroll, .chip-row, .tabs')) {
        wide.push((el.className || el.tagName).toString().slice(0, 50) + ':' + Math.round(r.right))
        if (wide.length > 3) break
      }
    }
  }
  const broken = [...root.querySelectorAll('img')].filter(i => i.complete && i.naturalWidth === 0 && i.src && !i.src.startsWith('data:')).map(i => i.getAttribute('src')).slice(0, 3)
  return JSON.stringify({ hangul, wide, broken, empty: text.trim().length < 20 })
})()`

const report = { width: WIDTH, lang: LANG, screens: routes.length, problems: {} }
try {
  await send('Page.enable')
  await send('Runtime.enable')
  await send('Page.navigate', { url: URL + '/' })
  await sleep(2500)
  await evaluate(`localStorage.setItem('lang', '${LANG}')`)
  await send('Page.navigate', { url: URL + '/' })
  await sleep(2500)
  let n = 0
  for (const r of routes) {
    errors.length = 0
    await evaluate(`history.pushState({}, '', '${BASE}${r}'); dispatchEvent(new PopStateEvent('popstate')); window.scrollTo(0, 0)`)
    const res = JSON.parse(await evaluate(CHECK))
    if (errors.length) res.errors = [...errors]
    if (res.hangul.length || res.wide.length || res.broken.length || res.empty || res.errors) report.problems[r] = res
    if (++n % 200 === 0) console.error(`${n}/${routes.length}`)
  }
} finally {
  report.problemCount = Object.keys(report.problems).length
  writeFileSync(`${out}/screen-scan-${LANG}-${WIDTH}.json`, JSON.stringify(report, null, 1))
  console.log(JSON.stringify({ width: WIDTH, lang: LANG, screens: report.screens, problems: report.problemCount }))
  ws.close()
  chrome.kill()
  try { process.kill(-server.pid) } catch {}
}
process.exit(0)
