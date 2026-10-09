// Offline smoke test: node scripts/offline-test.mjs <out-dir>
// Serves dist/ with `vite preview`, lets the service worker install, saves France's photos,
// then stops the server and checks that pages still render. Needs Google Chrome and Node 22+.
import { spawn, execSync } from 'node:child_process'
import { writeFileSync, rmSync, mkdirSync } from 'node:fs'

const out = process.argv[2] ?? '/tmp/offline-test'
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
const chrome = spawn(CHROME, ['--headless=new', '--disable-gpu', '--remote-debugging-port=9333', `--user-data-dir=${out}/profile`, '--window-size=600,1400', 'about:blank'], { stdio: 'ignore' })
let target
for (let i = 0; i < 30; i++) {
  try { target = (await (await fetch('http://127.0.0.1:9333/json')).json()).find((t) => t.type === 'page'); if (target) break } catch {}
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
const report = {}
try {
  await send('Page.enable')
  await go('/country/fr')
  report.swReady = await evaluate(`navigator.serviceWorker.ready.then(r => new Promise(res => { const t = setInterval(() => { if (r.active && r.active.state === 'activated') { clearInterval(t); res(r.active.state) } }, 200) }))`)
  report.shellFiles = await evaluate(`caches.keys().then(async ks => { const k = ks.find(n => n.startsWith('shell-')); return (await (await caches.open(k)).keys()).length })`)
  await go('/country/fr') // now controlled by the worker
  report.controlled = await evaluate(`!!navigator.serviceWorker.controller`)
  report.button = await evaluate(`document.querySelector('.offline-button')?.textContent ?? null`)
  await evaluate(`document.querySelector('.offline-button').scrollIntoView({block:'center'})`)
  await shot('1-online-country')
  await evaluate(`document.querySelector('.offline-button').click()`)
  await sleep(1000)
  report.progress = await evaluate(`document.querySelector('.offline-progress')?.textContent ?? null`)
  report.saved = await evaluate(`new Promise(res => { const t = setInterval(() => { const e = document.querySelector('.offline-saved, .offline-failed'); if (e) { clearInterval(t); res(e.textContent) } }, 300) })`)
  report.imageCache = await evaluate(`caches.open('images-v1').then(c => c.keys()).then(k => k.length)`)
  await shot('2-saved')

  process.kill(-server.pid)
  await sleep(1500)
  report.serverDown = await fetch(URL + '/').then(() => false, () => true)

  const check = async (path, name) => {
    await go(path)
    await sleep(1500)
    await shot(name)
    return evaluate(`(async () => { const imgs = [...document.querySelectorAll('.highlight-card-media')].map(e => e.style.backgroundImage.slice(5, -2)); let ok = 0; for (const u of imgs) { try { if ((await fetch(u)).ok) ok++ } catch {} } return { title: document.querySelector('h2')?.textContent, itinerary: !!document.querySelector('.itinerary-panel'), photos: imgs.length, photosAvailable: ok } })()`)
  }
  report.offlineParis = await check('/city/paris', '3-offline-paris')
  report.offlineRome = await check('/city/rome', '4-offline-rome')
  await go('/map'); await sleep(1500); await shot('5-offline-map')
  report.offlineMap = await evaluate(`document.querySelectorAll('svg path').length`)
} finally {
  console.log(JSON.stringify(report, null, 1))
  ws.close(); chrome.kill()
  try { process.kill(-server.pid) } catch {}
  try { execSync('pkill -f "vite preview"') } catch {}
}
