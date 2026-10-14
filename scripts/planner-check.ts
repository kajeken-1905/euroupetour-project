// Runs the planner over every city and a spread of conditions and checks its promises:
//   npx rolldown scripts/planner-check.ts --file <scratch>/planner-check.mjs && node <scratch>/planner-check.mjs [city]
import { cities } from '../src/data/cities'
import { getCityItinerary } from '../src/data/itinerary'
import { getHighlightVisit } from '../src/data/visit'
import { HIGHLIGHT_GEO } from '../src/data/geo'
import { buildPlan, WEEKDAYS } from '../src/trip/planner'

const show = process.argv[2]
let runs = 0
let problems = 0
let empty = 0
const fail = (...a: unknown[]) => {
  problems += 1
  if (problems <= 20) console.log('PROBLEM', ...a)
}
for (const city of cities) {
  const ids = new Set(city.highlights.map((h) => h.id))
  const suggested = (getCityItinerary(city.id)?.days ?? [])
    .map((d) => ({ ...d, stops: d.stops.filter((id) => ids.has(id)) }))
    .filter((d) => d.stops.length > 0)
  for (const days of [1, 2, 3, 5, 7])
    for (const startWeekday of [undefined, 0, 1, 6])
      for (const budget of [240, 360, 480])
        for (const trips of [false, true]) {
          const favourites = new Set(startWeekday === 1 ? city.highlights.slice(-2).map((h) => h.id) : [])
          const r = buildPlan({ city, suggested, days, startWeekday, budget, favourites, trips, geo: HIGHLIGHT_GEO })
          runs += 1
          const tag = `${city.id} d${days} w${startWeekday} b${budget} t${trips}`
          if (r.days.length !== days) fail(tag, 'day count')
          const all = r.days.flatMap((d) => d.stops)
          if (new Set(all).size !== all.length) fail(tag, 'duplicate stop')
          if (all.some((id) => !ids.has(id))) fail(tag, 'unknown stop')
          const left = r.left.map((l) => l.id)
          if (all.length + left.length !== ids.size || left.some((id) => all.includes(id))) fail(tag, 'a sight is neither planned nor left')
          r.days.forEach((d, i) => {
            if (!d.trip && d.stops.length > 1 && d.minutes > budget * 1.05 + 1) fail(tag, 'day', i + 1, 'too long', d.minutes)
            if (startWeekday !== undefined)
              for (const id of d.stops)
                if ((getHighlightVisit(id)?.closed ?? '').split(',').includes(WEEKDAYS[(startWeekday + i) % 7])) fail(tag, id, 'on a closed day')
          })
          if (all.length === 0) empty += 1
          if (show === city.id && budget === 360 && !trips && startWeekday === undefined) {
            const name = (id: string) => city.highlights.find((h) => h.id === id)!.name.ko + (favourites.has(id) ? '♥' : '')
            console.log(`\n${city.name.ko} ${days}일 (날짜 없음, 보통)`)
            r.days.forEach((d, i) => console.log(` ${i + 1}일차 ${(d.minutes / 60).toFixed(1)}h:`, d.stops.map(name).join(' → ')))
            console.log('  빠진 곳:', r.left.map((l) => `${name(l.id)}(${l.reason})`).join(', '))
          }
        }
}
console.log(`${runs} runs over ${cities.length} cities, ${problems} problems, ${empty} empty plans`)
