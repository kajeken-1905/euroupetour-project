// Planner smoke test: node scripts/planner-test.mjs <out-dir>   (out-dir must NOT be dist/)
// Serves dist/ with `vite preview`, builds a plan from conditions on a city page, saves it and reads it back. Needs Node 22+.
// The rules themselves are checked over every city by scripts/planner-check.ts.
import { spawn } from 'node:child_process'
import { writeFileSync, rmSync, mkdirSync } from 'node:fs'

const out = process.argv[2] ?? '/tmp/planner-test'
if (/(^|\/)(dist|docs)\/?$/.test(out)) throw new Error('out-dir must not be dist/ or docs/')
mkdirSync(out, { recursive: true })
const PORT = 4183
const URL = `http://127.0.0.1:${PORT}/euroupetour-project`
const CHROME = '/Applications/Google Chrome.app/Contents/MacOS/Google Chrome'
const sleep = (ms) => new Promise((r) => setTimeout(r, ms))

const server = spawn('npx', ['vite', 'preview', '--port', String(PORT), '--host', '127.0.0.1'], { stdio: 'ignore', detached: true })
for (let i = 0; i < 30; i++) {
  try { await fetch(URL + '/'); break } catch { await sleep(500) }
}
rmSync(`${out}/profile`, { recursive: true, force: true })
const chrome = spawn(CHROME, ['--headless=new', '--disable-gpu', '--remote-debugging-port=9339', `--user-data-dir=${out}/profile`, '--window-size=430,1100', 'about:blank'], { stdio: 'ignore' })
let target
for (let i = 0; i < 30; i++) {
  try { target = (await (await fetch('http://127.0.0.1:9339/json')).json()).find((t) => t.type === 'page'); if (target) break } catch {}
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
const read = () => evaluate(`JSON.stringify({
  days: [...document.querySelectorAll('.planner .planner-result .itinerary-day')].map(d => d.querySelector('.itinerary-day-title').textContent + ' :: ' + [...d.querySelectorAll('.itinerary-stop')].map(b => b.textContent).join(' > ') + ' :: ' + (d.querySelector('.itinerary-total')?.textContent ?? '')),
  left: [...document.querySelectorAll('.planner .itinerary-more .itinerary-stop')].map(b => b.textContent).filter(s => s.includes('·')),
  leftCount: document.querySelectorAll('.planner .itinerary-more .itinerary-stop').length,
  actions: [...document.querySelectorAll('.planner .plan-actions > *')].map(b => b.textContent) })`)
const set = (selector, value) => evaluate(`(() => { const el = document.querySelector('${selector}'); const proto = el.tagName === 'SELECT' ? HTMLSelectElement.prototype : HTMLInputElement.prototype; Object.getOwnPropertyDescriptor(proto, 'value').set.call(el, '${value}'); el.dispatchEvent(new Event(el.tagName === 'SELECT' ? 'change' : 'input', { bubbles: true })); el.dispatchEvent(new Event('change', { bubbles: true })) })()`)
const report = {}
try {
  await send('Page.enable')
  await go('/city/paris')
  await evaluate(`localStorage.removeItem('my-trip-v1')`)
  await go('/city/paris')
  report.closed = await evaluate(`document.querySelectorAll('.planner .planner-form').length`)
  await evaluate(`document.querySelector('.planner .plan-btn').click()`)
  await sleep(1500)
  report.default = JSON.parse(await read())
  await set('.planner select', '3')
  await set('.planner input[type=date]', '2026-11-02') // a Monday: the Louvre (closed Tue) must not land on day 2
  await sleep(500)
  report.threeDaysFromMonday = JSON.parse(await read())
  await evaluate(`document.querySelectorAll('.planner .planner-field .itinerary-stop')[0].click()`)
  await sleep(300)
  report.easyPace = JSON.parse(await read())
  await evaluate(`document.querySelector('.planner').scrollIntoView({ block: 'start' })`)
  await sleep(500)
  await shot('planner')
  await evaluate(`[...document.querySelectorAll('.planner .plan-actions .plan-btn')].at(-1).click()`)
  await sleep(500)
  report.afterSave = { actions: JSON.parse(await read()).actions, stored: await evaluate(`JSON.stringify(JSON.parse(localStorage.getItem('my-trip-v1')).plans.paris)`) , myPlanDays: await evaluate(`[...document.querySelectorAll('.itinerary-panel')].find(p => !p.classList.contains('planner') && p.querySelector('.section-label')?.textContent === '내 일정')?.querySelectorAll('.itinerary-day').length ?? 0`) }
  await set('.planner select', '1')
  await sleep(300)
  report.replace = JSON.parse(await read()).actions
  await go('/city/hallstatt')
  await evaluate(`document.querySelector('.planner .plan-btn').click()`)
  await sleep(1500)
  report.smallTown = JSON.parse(await read())
  await evaluate(`document.querySelector('.planner').scrollIntoView({ block: 'start' })`)
  await shot('planner-small')
} finally {
  console.log(JSON.stringify(report, null, 1))
  ws.close()
  chrome.kill()
  try { process.kill(-server.pid) } catch {}
}
process.exit(0)
