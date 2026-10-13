// First-load check: node scripts/load-test.mjs <out-dir>   (out-dir must NOT be dist/)
// Serves dist/ with `vite preview` and lists the scripts each screen fetches, so a list screen that starts
// pulling in every city's sights again (the places chunk) shows up. Needs Node 22+.
import { spawn } from 'node:child_process'
import { writeFileSync, rmSync, mkdirSync } from 'node:fs'

const out = process.argv[2] ?? '/tmp/load-test'
if (/(^|\/)(dist|docs)\/?$/.test(out)) throw new Error('out-dir must not be dist/ or docs/')
mkdirSync(out, { recursive: true })
const PORT = 4182
const URL = `http://127.0.0.1:${PORT}/euroupetour-project`
const CHROME = '/Applications/Google Chrome.app/Contents/MacOS/Google Chrome'
const sleep = (ms) => new Promise((r) => setTimeout(r, ms))

const server = spawn('npx', ['vite', 'preview', '--port', String(PORT), '--host', '127.0.0.1'], { stdio: 'ignore', detached: true })
for (let i = 0; i < 30; i++) {
  try { await fetch(URL + '/'); break } catch { await sleep(500) }
}
rmSync(`${out}/profile`, { recursive: true, force: true })
const chrome = spawn(CHROME, ['--headless=new', '--disable-gpu', '--remote-debugging-port=9338', `--user-data-dir=${out}/profile`, '--window-size=430,1100', 'about:blank'], { stdio: 'ignore' })
let target
for (let i = 0; i < 30; i++) {
  try { target = (await (await fetch('http://127.0.0.1:9338/json')).json()).find((t) => t.type === 'page'); if (target) break } catch {}
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
const scripts = () => evaluate(`JSON.stringify(performance.getEntriesByType('resource').map(e => e.name.split('/').pop()).filter(n => n.endsWith('.js')).map(n => n.slice(0, -12)))`)
const report = {}
try {
  await send('Page.enable')
  await go('/')
  report.home = { scripts: JSON.parse(await scripts()), countries: await evaluate(`document.querySelectorAll('select option').length`) }
  await shot('home')
  await go('/country/fr')
  await sleep(2500)
  report.country = {
    scripts: JSON.parse(await scripts()),
    cards: await evaluate(`document.querySelectorAll('.city-item').length`),
    emptyTaglines: await evaluate(`[...document.querySelectorAll('.city-highlight')].filter(e => !e.textContent.trim()).length`),
    firstCards: await evaluate(`[...document.querySelectorAll('.city-item')].slice(0, 3).map(e => e.innerText.replace(/\\n/g, ' / ')).join(' | ')`),
    offline: await evaluate(`document.querySelector('.offline-button')?.textContent ?? null`),
  }
  await shot('country')
  await go('/map')
  await sleep(2500)
  report.map = { scripts: JSON.parse(await scripts()), shapes: await evaluate(`document.querySelectorAll('svg path').length`) }
  await go('/city/paris')
  report.city = { scripts: JSON.parse(await scripts()), sights: await evaluate(`document.querySelectorAll('.highlight-card, .highlight-item, [class*=highlight]').length`) }
} finally {
  console.log(JSON.stringify(report, null, 1))
  ws.close()
  chrome.kill()
  try { process.kill(-server.pid) } catch {}
}
process.exit(0)
