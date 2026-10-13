// City map smoke test: node scripts/map-test.mjs <out-dir>   (out-dir must NOT be dist/)
// Serves dist/ with `vite preview`, opens the map on a city page in headless Chrome and saves screenshots. Needs Node 22+.
import { spawn } from 'node:child_process'
import { writeFileSync, rmSync, mkdirSync } from 'node:fs'

const out = process.argv[2] ?? '/tmp/map-test'
if (/(^|\/)(dist|docs)\/?$/.test(out)) throw new Error('out-dir must not be dist/ or docs/')
mkdirSync(out, { recursive: true })
const PORT = 4180
const URL = `http://127.0.0.1:${PORT}/euroupetour-project`
const CHROME = '/Applications/Google Chrome.app/Contents/MacOS/Google Chrome'
const sleep = (ms) => new Promise((r) => setTimeout(r, ms))

const server = spawn('npx', ['vite', 'preview', '--port', String(PORT), '--host', '127.0.0.1'], { stdio: 'ignore', detached: true })
for (let i = 0; i < 30; i++) {
  try { await fetch(URL + '/'); break } catch { await sleep(500) }
}
rmSync(`${out}/profile`, { recursive: true, force: true })
const chrome = spawn(CHROME, ['--headless=new', '--disable-gpu', '--remote-debugging-port=9336', `--user-data-dir=${out}/profile`, '--window-size=430,1100', 'about:blank'], { stdio: 'ignore' })
let target
for (let i = 0; i < 30; i++) {
  try { target = (await (await fetch('http://127.0.0.1:9336/json')).json()).find((t) => t.type === 'page'); if (target) break } catch {}
  await sleep(500)
}
const ws = new WebSocket(target.webSocketDebuggerUrl)
await new Promise((r) => (ws.onopen = r))
let id = 0
const pending = new Map()
ws.onmessage = (m) => { const d = JSON.parse(m.data); if (d.id && pending.has(d.id)) { pending.get(d.id)(d); pending.delete(d.id) } }
const send = (method, params = {}) => new Promise((r) => { pending.set(++id, r); ws.send(JSON.stringify({ id, method, params })) })
const evaluate = async (expression) => {
  const r = await send('Runtime.evaluate', { expression, awaitPromise: true, returnByValue: true })
  if (r.result?.exceptionDetails) throw new Error(JSON.stringify(r.result.exceptionDetails).slice(0, 400))
  return r.result?.result?.value
}
const go = async (path) => { await send('Page.navigate', { url: URL + path }); await sleep(2500) }
const shot = async (name) => writeFileSync(`${out}/${name}.png`, Buffer.from((await send('Page.captureScreenshot')).result.data, 'base64'))
const state = () => evaluate(`JSON.stringify({ pins: document.querySelectorAll('.city-map-pin').length, numbered: document.querySelectorAll('.city-map-pin:not(.city-map-dot)').length, tiles: [...document.querySelectorAll('.leaflet-tile')].filter(i => i.complete && i.naturalWidth > 0).length, lines: document.querySelectorAll('.leaflet-overlay-pane path').length, hints: [...document.querySelectorAll('.city-map .route-hint')].map(e => e.textContent.slice(0, 90)) })`)
const report = {}
try {
  await send('Page.enable')
  for (const city of (process.argv[3] ?? 'paris,rome').split(',')) {
    await go(`/city/${city}`)
    report[city] = { closed: await evaluate(`document.querySelectorAll('.leaflet-container').length`) }
    await evaluate(`document.querySelector('.city-map .plan-btn').click()`)
    await sleep(4000)
    await evaluate(`document.querySelector('.city-map').scrollIntoView({ block: 'start' })`)
    await sleep(1500)
    report[city].all = JSON.parse(await state())
    await shot(`${city}-all`)
    const days = await evaluate(`document.querySelectorAll('.city-map-days .itinerary-stop').length`)
    if (days > 1) {
      await evaluate(`document.querySelectorAll('.city-map-days .itinerary-stop')[1].click()`)
      await sleep(3500)
      report[city].day1 = JSON.parse(await state())
      await shot(`${city}-day1`)
    }
  }
} finally {
  console.log(JSON.stringify(report, null, 1))
  ws.close()
  chrome.kill()
  try { process.kill(-server.pid) } catch {}
}
process.exit(0)
