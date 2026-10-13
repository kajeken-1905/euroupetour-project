import L from 'leaflet'
import 'leaflet/dist/leaflet.css'
import { useEffect, useRef } from 'react'

export interface MapPin {
  id: string
  name: string
  at: [number, number]
  /** Order within the selected day; pins without one are plain dots. */
  n?: number
  /** Drawn, but left out when framing the map. */
  far?: boolean
}

/** Street map of one city's highlights. Loaded on demand so Leaflet stays out of the main bundle. */
export default function CityMapView({ pins, onPick }: { pins: MapPin[]; onPick: (id: string) => void }) {
  const el = useRef<HTMLDivElement>(null)
  const map = useRef<L.Map | null>(null)
  const layer = useRef<L.LayerGroup | null>(null)
  const pick = useRef(onPick)
  pick.current = onPick

  useEffect(() => {
    const m = L.map(el.current!, { scrollWheelZoom: false, attributionControl: true })
    L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
      maxZoom: 19,
      attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>',
    }).addTo(m)
    layer.current = L.layerGroup().addTo(m)
    map.current = m
    return () => {
      m.remove()
      map.current = null
    }
  }, [])

  useEffect(() => {
    const m = map.current
    const group = layer.current
    if (!m || !group) return
    group.clearLayers()
    const ordered = pins.filter((p) => p.n).sort((a, b) => a.n! - b.n!)
    if (ordered.length > 1) {
      L.polyline(ordered.map((p) => p.at), { color: '#14110f', weight: 2, dashArray: '5 6', opacity: 0.7 }).addTo(group)
    }
    for (const p of pins) {
      const icon = L.divIcon({
        className: '',
        html: `<span class="city-map-pin${p.n ? '' : ' city-map-dot'}">${p.n ?? ''}</span>`,
        iconSize: p.n ? [26, 26] : [14, 14],
        iconAnchor: p.n ? [13, 13] : [7, 7],
      })
      const link = document.createElement('button')
      link.type = 'button'
      link.className = 'city-map-popup'
      link.textContent = p.name
      link.onclick = () => pick.current(p.id)
      L.marker(p.at, { icon, title: p.name, zIndexOffset: p.n ? 500 : 0 }).bindPopup(link).addTo(group)
    }
    const near = pins.filter((p) => !p.far)
    const frame = near.length > 0 ? near : pins
    if (frame.length > 0) m.fitBounds(L.latLngBounds(frame.map((p) => p.at)), { padding: [28, 28], maxZoom: 16 })
  }, [pins])

  return <div ref={el} className="city-map-canvas" />
}
