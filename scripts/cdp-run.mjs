// Headless check runner: node scripts/cdp-run.mjs <out-dir> <width> <steps.js>
// Serves dist/ with `vite preview`, opens headless Chrome and runs steps.js with nav(path, waitMs), ev(expr),
// shot(name), send(method, params) and sleep(ms) in scope. out-dir must not be dist/ or docs/.
import { spawn } from 'node:child_process'
import fs from 'node:fs'

const sleep = (ms) => new Promise((r) => setTimeout(r, ms))
const [out, width = '430', file] = process.argv.slice(2)
if (!out || !file || /(^|\/)(dist|docs)\/?$/.test(out)) throw new Error('usage: cdp-run.mjs <out-dir> <width> <steps.js>')
fs.mkdirSync(out, { recursive: true })
const PORT = 4188
const URL = `http://127.0.0.1:${PORT}/euroupetour-project`
const server = spawn('npx', ['vite', 'preview', '--port', String(PORT), '--host', '127.0.0.1'], { stdio: 'ignore', detached: true })
for (let i = 0; i < 40; i++) {
  try { await fetch(URL + '/'); break } catch { await sleep(500) }
}
const chrome = spawn('/Applications/Google Chrome.app/Contents/MacOS/Google Chrome', [
  '--headless=new', '--disable-gpu', '--remote-debugging-port=9344', `--user-data-dir=${out}/profile`, `--window-size=${width},1100`, 'about:blank',
], { stdio: 'ignore' })
let tabs
for (let i = 0; i < 80; i++) {
  try { tabs = await (await fetch('http://127.0.0.1:9344/json')).json(); if (tabs.length) break } catch {}
  await sleep(300)
}
const ws = new WebSocket(tabs.find((t) => t.type === 'page').webSocketDebuggerUrl)
await new Promise((r) => (ws.onopen = r))
let id = 0
const pending = new Map()
ws.onmessage = (m) => {
  const d = JSON.parse(m.data)
  if (d.id && pending.has(d.id)) { pending.get(d.id)(d.result); pending.delete(d.id) }
}
const send = (method, params = {}) => new Promise((r) => { const i = ++id; pending.set(i, r); ws.send(JSON.stringify({ id: i, method, params })) })
const ev = async (expr) => {
  const r = await send('Runtime.evaluate', { expression: expr, awaitPromise: true, returnByValue: true })
  return r.exceptionDetails ? 'ERR ' + r.exceptionDetails.text : r.result?.value
}
const nav = async (path, wait = 3500) => { await send('Page.navigate', { url: URL + path }); await sleep(wait) }
const shot = async (name) => fs.writeFileSync(`${out}/${name}.png`, Buffer.from((await send('Page.captureScreenshot', { format: 'png' })).data, 'base64'))
try {
  const steps = new Function('nav', 'ev', 'shot', 'send', 'sleep', `return (async () => { ${fs.readFileSync(file, 'utf8')} })()`)
  await steps(nav, ev, shot, send, sleep)
} finally {
  chrome.kill()
  process.kill(-server.pid)
  process.exit(0)
}
