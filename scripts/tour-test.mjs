// Multi-city route and city + kind search smoke test: node scripts/tour-test.mjs <out-dir>
// Serves dist/ with `vite preview` and drives the My trip route and the search page in headless Chrome. Needs Node 22+.
import { spawn } from 'node:child_process'
import { writeFileSync, rmSync, mkdirSync } from 'node:fs'

const out = process.argv[2] ?? '/tmp/tour-test'
mkdirSync(out, { recursive: true })
const PORT = 4179
const URL = `http://127.0.0.1:${PORT}/euroupetour-project`
const CHROME = '/Applications/Google Chrome.app/Contents/MacOS/Google Chrome'
const sleep = (ms) => new Promise((r) => setTimeout(r, ms))

const server = spawn('npx', ['vite', 'preview', '--port', String(PORT), '--host', '127.0.0.1'], { stdio: 'ignore', detached: true })
for (let i = 0; i < 30; i++) {
  try { await fetch(URL + '/'); break } catch { await sleep(500) }
}
rmSync(`${out}/profile`, { recursive: true, force: true })
const chrome = spawn(CHROME, ['--headless=new', '--disable-gpu', '--remote-debugging-port=9335', `--user-data-dir=${out}/profile`, '--window-size=430,1900', 'about:blank'], { stdio: 'ignore' })
let target
for (let i = 0; i < 30; i++) {
  try { target = (await (await fetch('http://127.0.0.1:9335/json')).json()).find((t) => t.type === 'page'); if (target) break } catch {}
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
const route = () => evaluate(`JSON.stringify(JSON.parse(localStorage.getItem('my-trip-v1') ?? '{}').route ?? [])`)
const click = (sel, n = 0) => evaluate(`document.querySelectorAll(${JSON.stringify(sel)})[${n}].click()`)
const type = async (sel, text) => {
  await evaluate(`(() => { const i = document.querySelector(${JSON.stringify(sel)}); Object.getOwnPropertyDescriptor(HTMLInputElement.prototype, 'value').set.call(i, ${JSON.stringify(text)}); i.dispatchEvent(new Event('input', { bubbles: true })) })()`)
  await sleep(600)
}
const pick = async (name) => {
  await type('.tour-input', name)
  await evaluate(`[...document.querySelectorAll('.tour-picks .itinerary-stop')].find(b => b.textContent.includes(${JSON.stringify(name)})).click()`)
  await sleep(200)
}
const legs = () => evaluate(`[...document.querySelectorAll('.tour-leg')].map(e => e.textContent.replace(/\\s+/g, ' ').trim()).join(' || ')`)
const report = {}
try {
  await send('Page.enable')
  // The city page adds itself to the route.
  await go('/city/paris')
  await evaluate(`[...document.querySelectorAll('.tour-button .plan-btn')][0].click()`)
  await sleep(200)
  report.fromCityPage = await route()
  report.cityButton = await evaluate(`document.querySelector('.tour-button .plan-btn').textContent`)
  await go('/trip')
  report.onwardChips = await evaluate(`[...document.querySelectorAll('.tour-picks .itinerary-stop')].map(b => b.textContent).join('|')`)
  await pick('리옹')
  await pick('니스')
  await pick('피렌체')
  await pick('레이캬비크')
  report.route = await route()
  report.legs = await legs()
  report.total = await evaluate(`document.querySelector('.transit-card .itinerary-total')?.textContent`)
  await shot('1-route')
  // Move Nice up, then remove the last city.
  await click('.tour-stop .plan-icon-btn', 2 * 3)
  report.afterMoveUp = await route()
  await click('.tour-stop .plan-icon-btn', 4 * 3 + 2)
  report.afterRemove = await route()
  await go('/trip')
  report.persisted = await route()
  await shot('2-route-reloaded')
  // The Europe map draws the route; the button frames it.
  await go('/map')
  report.mapRoute = await evaluate(`document.querySelector('.map-route-stops')?.textContent + ' | dots ' + document.querySelectorAll('.map-route-dot').length + ' lines ' + document.querySelectorAll('.map-route-line').length`)
  await evaluate(`window.scrollTo(0, 0)`)
  await shot('5-map-route')
  await click('.map-route .plan-btn')
  await sleep(1200)
  await shot('6-map-route-fit')
  // A day of a city plan opens as Google Maps directions.
  await go('/city/paris')
  await evaluate(`[...document.querySelectorAll('.plan-btn')].find(b => b.textContent.includes('가져오기')).click()`)
  await sleep(300)
  report.directions = await evaluate(`decodeURIComponent(document.querySelector('.plan-map-link')?.href ?? '').slice(0, 260)`)
  await go('/trip')
  report.tripDirections = await evaluate(`document.querySelectorAll('.plan-map-link').length`)
  await shot('7-trip-with-plan')
  // Search: city + kind.
  await go('/search')
  const results = () => evaluate(`[...document.querySelectorAll('.search-group')].map(g => g.querySelector('.section-label').textContent + ': ' + [...g.querySelectorAll('.search-item-title')].map(e => e.firstChild.textContent).join(', ')).join(' / ')`)
  for (const q of ['파리 카페', '프랑스 빵집', '리스본 에그타르트', '파리 미술관']) {
    await type('.search-input', q)
    report[`search ${q}`] = await results()
  }
  await type('.search-input', '파리 카페')
  await shot('3-search-paris-cafe')
  await type('.search-input', '')
  await shot('4-search-hint')
  // Clearing the route.
  await go('/trip')
  await evaluate(`[...document.querySelectorAll('.plan-btn')].find(b => b.textContent.includes('경로 지우기')).click()`)
  await sleep(200)
  await click('.plan-btn-danger')
  report.afterClear = await route()
} finally {
  console.log(JSON.stringify(report, null, 1))
  ws.close()
  chrome.kill()
  process.kill(-server.pid)
}
