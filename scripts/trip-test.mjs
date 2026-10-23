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
  await click('.highlight-card .fav-btn:not(.been-btn)', 0)
  await click('.highlight-card .fav-btn:not(.been-btn)', 19)
  await click('.place-card .fav-btn:not(.been-btn)', 0)
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
  await go('/'); await sleep(1500)
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
  await go('/'); await sleep(1500)
  await shot('5-trip-favs-only')
  // "Been there" marks: yes/no only, counted beside the list headings.
  await go('/city/paris')
  await click('.highlight-card .been-btn', 0)
  await click('.highlight-card .been-btn', 2)
  await click('.place-card .been-btn', 0)
  await sleep(200)
  report.beenCounts = await evaluate(`[...document.querySelectorAll('.been-count')].map(e => e.textContent).join('|')`)
  report.beenPressed = await evaluate(`[...document.querySelectorAll('.been-btn.is-been')].length`)
  await evaluate(`document.querySelector('.highlight-card').scrollIntoView()`)
  await shot('6-been-highlight')
  await evaluate(`document.querySelector('.place-card').scrollIntoView({ block: 'center' })`)
  await shot('7-been-place')
  await click('.highlight-card .been-btn', 2) // unmark again
  report.beenStored = await evaluate(`(() => { const d = JSON.parse(localStorage.getItem('my-trip-v1')); return JSON.stringify([d.beenHighlights, d.beenPlaces.length]) })()`)
  // Backup: export carries marks and stamps; import merges both.
  await go('/'); await sleep(1500)
  report.beenSummary = await evaluate(`[...document.querySelectorAll('.route-hint')].map(e => e.textContent).find(t => t.includes('✓')) ?? ''`)
  report.exported = await evaluate(`(async () => {
    let blob
    URL.createObjectURL = (b) => ((blob = b), 'blob:test')
    URL.revokeObjectURL = () => {}
    HTMLAnchorElement.prototype.click = () => {}
    ;[...document.querySelectorAll('.plan-btn')].find(b => b.textContent.includes('내보내기')).click()
    const d = JSON.parse(await blob.text())
    return JSON.stringify({ been: d.beenHighlights.length + d.beenPlaces.length, visits: Object.keys(d.visits ?? {}) })
  })()`)
  await evaluate(`(() => {
    const file = new File([JSON.stringify({ app: 'europe-tour', version: 1, highlights: [], places: [], plans: {}, route: [],
      beenHighlights: ['paris-h3'], beenPlaces: [],
      visits: { countries: { france: [{ year: 2024, month: 5 }] }, cities: { paris: [{ year: 2024, month: 5 }] } } })], 'b.json')
    const input = document.querySelector('input[type=file]')
    const dt = new DataTransfer(); dt.items.add(file); input.files = dt.files
    input.dispatchEvent(new Event('change', { bubbles: true }))
  })()`)
  await sleep(500)
  report.importedBeen = await evaluate(`JSON.parse(localStorage.getItem('my-trip-v1')).beenHighlights.join(',')`)
  report.importedVisits = await evaluate(`localStorage.getItem('mvp-visited-places-v1')`)
  await go('/city/paris')
  report.stampAfterImport = await evaluate(`document.querySelectorAll('.visit-stamp, .stamp, [class*=stamp]').length`)
  // Sharing: the copied text carries a link; opening it elsewhere shows the plan and can take it in.
  await evaluate(`localStorage.setItem('my-trip-v1', JSON.stringify({ highlights: [], places: [], route: ['paris', 'lyon', 'nice'], beenHighlights: [], beenPlaces: [],
    plans: { paris: [{ title: { ko: '첫날', en: 'Day one' }, stops: ['paris-h1', 'paris-h3', 'paris-fine_dining-1'] }, { stops: ['paris-h2'] }] } }))`)
  await go('/city/paris')
  const copied = async () => evaluate(`(async () => {
    let text = ''
    Object.defineProperty(navigator, 'clipboard', { configurable: true, value: { writeText: async (t) => { text = t } } })
    ;[...document.querySelectorAll('.plan-btn')].find(b => b.textContent.includes('텍스트 복사')).click()
    await new Promise(r => setTimeout(r, 200))
    return text
  })()`)
  const planShare = await copied()
  report.shareText = planShare.split('\n').slice(0, 5).join(' / ')
  const planLink = planShare.match(/https?:\/\/\S+\/share#\S+/)?.[0]
  report.shareLinkLength = planLink?.length
  await evaluate(`localStorage.setItem('my-trip-v1', JSON.stringify({ highlights: [], places: [], route: [], plans: {}, beenHighlights: [], beenPlaces: [] }))`)
  await send('Page.navigate', { url: planLink }); await sleep(3000)
  report.sharedPlanView = await evaluate(`[...document.querySelectorAll('.itinerary-day')].map(d => d.textContent.slice(0, 60)).join(' | ')`)
  await evaluate(`[...document.querySelectorAll('.plan-btn')].find(b => b.textContent.includes('가져오기')).click()`)
  await sleep(1500)
  report.sharedPlanTaken = await evaluate(`JSON.stringify(JSON.parse(localStorage.getItem('my-trip-v1')).plans.paris)`)
  report.afterTakeUrl = await evaluate(`location.pathname`)
  // Route link, then a broken link.
  await evaluate(`localStorage.setItem('my-trip-v1', JSON.stringify({ highlights: [], places: [], plans: {}, beenHighlights: [], beenPlaces: [], route: ['paris', 'lyon', 'nice'] }))`)
  await go('/'); await sleep(1500)
  const routeShare = await copied()
  report.routeText = routeShare.split('\n').slice(0, 2).join(' / ')
  await evaluate(`localStorage.setItem('my-trip-v1', JSON.stringify({ highlights: [], places: [], plans: {}, beenHighlights: [], beenPlaces: [], route: ['rome'] }))`)
  await send('Page.navigate', { url: routeShare.match(/https?:\/\/\S+\/share#\S+/)[0] }); await sleep(2500)
  await shot('8-shared-route')
  await evaluate(`[...document.querySelectorAll('.plan-btn')].find(b => b.textContent.includes('가져오기')).click()`)
  await sleep(200)
  report.routeConfirm = await evaluate(`document.querySelector('.plan-btn-danger')?.textContent ?? ''`)
  await evaluate(`document.querySelector('.plan-btn-danger').click()`)
  await sleep(1500)
  report.routeTaken = await evaluate(`JSON.parse(localStorage.getItem('my-trip-v1')).route.join(',')`)
  await go('/share#garbage'); report.brokenLink = await evaluate(`document.querySelector('.empty-state')?.textContent ?? ''`)
} finally {
  console.log(JSON.stringify(report, null, 1))
  ws.close()
  chrome.kill()
  process.kill(-server.pid)
}
