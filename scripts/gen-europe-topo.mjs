// Writes src/data/europeTopo.json — the countries of world-atlas's countries-50m.json that reach into the
// part of the world the Europe map can show (with a wide margin for panning), with the arcs they use.
// The whole world file is 740 KB and was most of the map screen's download. Runs before dev and build.
import { readFileSync, writeFileSync } from 'node:fs'
import { fileURLToPath } from 'node:url'
import { createRequire } from 'node:module'

/** Longitude/latitude box kept: the Atlantic to Central Asia, North Africa to the Arctic. */
const BOX = { west: -45, east: 90, south: 15, north: 90 }
/** Kept wherever they are: South and North Korea (ISO 410, 408), drawn as home for Korean travellers. */
const KEEP = new Set(['410', '408'])

const require = createRequire(import.meta.url)
const world = JSON.parse(readFileSync(require.resolve('world-atlas/countries-50m.json'), 'utf8'))
const [sx, sy] = world.transform.scale
const [tx, ty] = world.transform.translate

// Each arc's box, decoding the delta-encoded, quantized points.
const arcBox = world.arcs.map((arc) => {
  let x = 0
  let y = 0
  const box = [Infinity, Infinity, -Infinity, -Infinity]
  for (const [dx, dy] of arc) {
    x += dx
    y += dy
    const lon = x * sx + tx
    const lat = y * sy + ty
    box[0] = Math.min(box[0], lon)
    box[1] = Math.min(box[1], lat)
    box[2] = Math.max(box[2], lon)
    box[3] = Math.max(box[3], lat)
  }
  return box
})

const arcsOf = (geometry) =>
  (geometry.type === 'Polygon' ? [geometry.arcs] : geometry.type === 'MultiPolygon' ? geometry.arcs : [])
    .flat(2)
    .map((i) => (i < 0 ? ~i : i))

const inBox = (geometry) =>
  arcsOf(geometry).some((i) => {
    const [w, s, e, n] = arcBox[i]
    return e >= BOX.west && w <= BOX.east && n >= BOX.south && s <= BOX.north
  })

const geometries = world.objects.countries.geometries.filter((g) => KEEP.has(g.id) || inBox(g))
const used = [...new Set(geometries.flatMap(arcsOf))].sort((a, b) => a - b)
const index = new Map(used.map((old, i) => [old, i]))
const remap = (i) => (i < 0 ? ~index.get(~i) : index.get(i))
const remapGeometry = (g) => ({
  ...g,
  arcs: g.type === 'Polygon' ? g.arcs.map((ring) => ring.map(remap)) : g.arcs.map((p) => p.map((ring) => ring.map(remap))),
})

const out = {
  type: 'Topology',
  transform: world.transform,
  objects: { countries: { type: 'GeometryCollection', geometries: geometries.map(remapGeometry) } },
  arcs: used.map((i) => world.arcs[i]),
}
writeFileSync(fileURLToPath(new URL('../src/data/europeTopo.json', import.meta.url)), JSON.stringify(out))
console.log(`europeTopo.json: ${geometries.length} of ${world.objects.countries.geometries.length} countries, ${used.length} of ${world.arcs.length} arcs`)
