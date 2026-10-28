// Prints the multi-change surface path for city pairs: node (after rolldown) <from> <to> ...
import { getSurfacePath, getRoutesBetween } from '../src/data/routes'
const pairs = process.argv.slice(2)
for (let i = 0; i < pairs.length; i += 2) {
  const [a, b] = [pairs[i], pairs[i + 1]]
  const direct = getRoutesBetween(a, b)
  const p = getSurfacePath(a, b)
  console.log(`${a} → ${b}:`, direct.length ? `direct ${direct[0].mode} ${direct[0].minutes}m` : p ? p.map((l) => `${l.fromCityId}→${l.route.toCityId} (${l.route.mode} ${l.route.minutes}m)`).join(', ') : 'none')
}
