// Favourites / personal plan smoke test: node scripts/trip-test.mjs <out-dir>
// Serves dist/ with `vite preview` and drives the plan editor in headless Chrome. Needs Node 22+.
import { spawn } from 'node:child_process'
import { writeFileSync, rmSync, mkdirSync } from 'node:fs'

const out = process.argv[2] ?? '/tmp/trip-test'
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
const chrome = spawn(CHROME, ['--headless=new', '--disable-gpu', '--remote-debugging-port=9334', `--user-data-dir=${out}/profile`, '--window-size=430,1500', 'about:blank'], { stdio: 'ignore' })
let target
for (let i = 0; i < 30; i++) {
  try { target = (await (await fetch('http://127.0.0.1:9334/json')).json()).find((t) => t.type === 'page'); if (target) break } catch {}
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
const plan = () => evaluate(`JSON.stringify((JSON.parse(localStorage.getItem('my-trip-v1') ?? '{}').plans ?? {}).paris?.map(d => d.stops.map(s => s.replace('paris-', ''))))`)
const click = (sel, n = 0) => evaluate(`document.querySelectorAll(${JSON.stringify(sel)})[${n}].click()`)
const report = {}
try {
  await send('Page.enable')
  await go('/city/paris')
  report.tabs = await evaluate(`[...document.querySelectorAll('.bottom-tab a')].map(a => a.textContent).join('|')`)
  report.planBefore = await evaluate(`document.querySelectorAll('.plan-stops').length`)
  // Favourite two highlights and one restaurant.
  await click('.highlight-card .fav-btn', 0)
  await click('.highlight-card .fav-btn', 19)
  await click('.place-card .fav-btn', 0)
  report.favourites = await evaluate(`localStorage.getItem('my-trip-v1')`)
  await evaluate(`[...document.querySelectorAll('.plan-btn')].find(b => b.textContent.includes('가져오기')).click()`)
  await sleep(300)
  report.imported = await plan()
  report.importButtonGone = await evaluate(`![...document.querySelectorAll('.plan-btn')].some(b => b.textContent.includes('가져오기'))`)
  // First stop of day 2 moves up: it should become the last stop of day 1.
  const day1 = await evaluate(`document.querySelectorAll('.plan-stops')[0].children.length`)
  await click('.plan-icon-btn', day1 * 3)
  report.afterCrossDayUp = await plan()
  await click('.plan-icon-btn', 1) // first stop down
  report.afterSwap = await plan()
  await click('.plan-icon-btn', 2) // remove first stop
  report.afterRemove = await plan()
  report.addOptions = await evaluate(`[...document.querySelector('.plan-add').querySelectorAll('optgroup')].map(g => g.label + ':' + g.children.length).join(' / ')`)
  await evaluate(`(() => { const s = document.querySelector('.plan-add'); s.value = s.querySelector('optgroup option').value; s.dispatchEvent(new Event('change', { bubbles: true })) })()`)
  await sleep(200)
  report.afterAdd = await plan()
  await evaluate(`[...document.querySelectorAll('.plan-btn')].find(b => b.textContent.includes('하루 추가')).click()`)
  report.afterAddDay = await plan()
  await evaluate(`document.querySelector('.plan-stops').closest('section').scrollIntoView()`)
  await sleep(300)
  await shot('1-plan-editor')
  await evaluate(`document.querySelector('.highlight-card').scrollIntoView()`)
  await shot('2-highlight-fav')
  await evaluate(`document.querySelector('.place-card').scrollIntoView({ block: 'center' })`)
  await shot('3-place-fav')
  await go('/trip')
  report.tripPage = await evaluate(`[...document.querySelectorAll('.section-label')].map(e => e.textContent).join('|')`)
  report.tripFavs = await evaluate(`[...document.querySelectorAll('.trip-fav .search-item-title')].map(e => e.textContent).join('|')`)
  await shot('4-trip')
  // Reload keeps everything; then delete the plan on the city page.
  await go('/city/paris')
  report.persisted = await plan()
  await evaluate(`[...document.querySelectorAll('.plan-btn')].find(b => b.textContent.includes('내 일정 지우기')).click()`)
  await sleep(200)
  await evaluate(`document.querySelector('.plan-btn-danger').click()`)
  await sleep(200)
  report.afterClear = await plan()
  await go('/trip')
  await shot('5-trip-favs-only')
} finally {
  console.log(JSON.stringify(report, null, 1))
  ws.close()
  chrome.kill()
  process.kill(-server.pid)
}
