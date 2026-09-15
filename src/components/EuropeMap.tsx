import { useEffect, useMemo, useRef, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { ComposableMap, Geographies, Geography, Marker, ZoomableGroup } from 'react-simple-maps'
import { feature } from 'topojson-client'
import { geoCentroid, geoMercator, geoPath } from 'd3-geo'
import type { Topology } from 'topojson-specification'
import type { FeatureCollection, Geometry } from 'geojson'
import worldTopology from 'world-atlas/countries-50m.json'
import { countries } from '../data/countries'
import { countryIsoMap, KOSOVO_NAME, KOSOVO_COUNTRY_ID, MICRO_STATE_IDS } from '../data/countryIsoMap'
import { useLanguage } from '../contexts/LanguageContext'

const MAP_WIDTH = 800
const MAP_HEIGHT = 485
const ICELAND_ISO = '352'
const DEFAULT_CENTER: [number, number] = [20, 52.5]
const SELECTED_ZOOM = 4

/** Iceland is rendered as a boxed inset above the UK instead of in its true
 * far-northwest position, so the main map isn't zoomed out to accommodate it. */
const ICELAND_INSET_BOX = { x: 40, y: 8, width: 108, height: 78 }

/** Known centers for micro-states whose true polygon is imperceptible at this zoom. */
const MICRO_STATE_COORDS: Record<string, [number, number]> = {
  ad: [1.5218, 42.5063],
  mc: [7.4246, 43.7384],
  li: [9.5554, 47.166],
  sm: [12.4578, 43.9424],
  va: [12.4534, 41.9029],
}

const isoToCountry = new Map(countries.map((c) => [countryIsoMap[c.id], c]))

export function EuropeMap() {
  const navigate = useNavigate()
  const { lang } = useLanguage()
  const wrapRef = useRef<HTMLDivElement>(null)
  const [containerWidth, setContainerWidth] = useState(360)
  const [selectedId, setSelectedId] = useState<string | null>(null)

  useEffect(() => {
    const el = wrapRef.current
    if (!el) return
    const observer = new ResizeObserver((entries) => {
      const width = entries[0]?.contentRect.width
      if (width) setContainerWidth(width)
    })
    observer.observe(el)
    return () => observer.disconnect()
  }, [])

  // The map is rotated 90° so its wide (Iceland–Turkey) axis runs along the
  // phone's scrollable height instead of its cramped width — swap width/height
  // for the pre-rotation box so the rotated footprint exactly fills the container.
  const rotatedHeight = containerWidth * (MAP_WIDTH / MAP_HEIGHT)
  const preRotateWidth = rotatedHeight
  const preRotateHeight = containerWidth

  const geoData = useMemo(() => {
    const topology = worldTopology as unknown as Topology
    return feature(topology, 'countries') as unknown as FeatureCollection<Geometry, { name: string }>
  }, [])

  const centroidById = useMemo(() => {
    const map = new Map<string, [number, number]>()
    for (const geoFeature of geoData.features) {
      if (geoFeature.id === ICELAND_ISO) continue
      const isKosovo = geoFeature.properties?.name === KOSOVO_NAME
      const country = isKosovo
        ? countries.find((c) => c.id === KOSOVO_COUNTRY_ID)
        : isoToCountry.get(String(geoFeature.id))
      if (!country) continue
      map.set(country.id, geoCentroid(geoFeature) as [number, number])
    }
    for (const [id, coords] of Object.entries(MICRO_STATE_COORDS)) {
      map.set(id, coords)
    }
    return map
  }, [geoData])

  const icelandPath = useMemo(() => {
    const icelandFeature = geoData.features.find((f) => f.id === ICELAND_ISO)
    if (!icelandFeature) return null
    const projection = geoMercator().fitExtent(
      [
        [ICELAND_INSET_BOX.x + 4, ICELAND_INSET_BOX.y + 4],
        [ICELAND_INSET_BOX.x + ICELAND_INSET_BOX.width - 4, ICELAND_INSET_BOX.y + ICELAND_INSET_BOX.height - 4],
      ],
      icelandFeature,
    )
    return geoPath(projection)(icelandFeature)
  }, [geoData])

  const iceland = countries.find((c) => c.id === 'is')

  const handleSelect = (countryId: string) => {
    if (selectedId === countryId) {
      navigate(`/country/${countryId}`)
    } else {
      setSelectedId(countryId)
    }
  }

  const selectedCentroid = selectedId ? centroidById.get(selectedId) : undefined
  const zoomCenter = selectedCentroid ?? DEFAULT_CENTER
  const zoomLevel = selectedCentroid ? SELECTED_ZOOM : 1

  return (
    <div className="europe-map-wrap" ref={wrapRef} style={{ height: rotatedHeight }}>
      <div className="europe-map-rotate" style={{ width: preRotateWidth, height: preRotateHeight }}>
        <ComposableMap
          width={MAP_WIDTH}
          height={MAP_HEIGHT}
          projection="geoMercator"
          projectionConfig={{ center: DEFAULT_CENTER, scale: 570 }}
          className="europe-map-svg"
        >
          <ZoomableGroup center={zoomCenter} zoom={zoomLevel} minZoom={1} maxZoom={6} className="europe-map-zoom">
            <Geographies geography={geoData}>
              {({ geographies }) =>
                geographies
                  .filter((geo) => geo.id !== ICELAND_ISO)
                  .map((geo) => {
                    const isKosovo = geo.properties?.name === KOSOVO_NAME
                    const country = isKosovo
                      ? countries.find((c) => c.id === KOSOVO_COUNTRY_ID)
                      : isoToCountry.get(String(geo.id))
                    const isMicroState = country ? MICRO_STATE_IDS.has(country.id) : false
                    const isSelected = country ? country.id === selectedId : false

                    return (
                      <Geography
                        key={geo.rsmKey}
                        geography={geo}
                        onClick={() => (country ? handleSelect(country.id) : setSelectedId(null))}
                        className={country ? 'map-country map-country--covered' : 'map-country'}
                        style={{
                          fill: country ? (isSelected ? 'var(--map-selected)' : 'var(--map-default)') : 'var(--map-neutral)',
                          stroke: 'var(--surface)',
                          strokeWidth: 0.5,
                          outline: 'none',
                          cursor: country ? 'pointer' : 'default',
                          opacity: isMicroState ? 0.85 : 1,
                        }}
                      />
                    )
                  })
              }
            </Geographies>
            {countries
              .filter((c) => MICRO_STATE_IDS.has(c.id) && MICRO_STATE_COORDS[c.id])
              .map((c) => {
                const isSelected = c.id === selectedId
                return (
                  <Marker
                    key={c.id}
                    coordinates={MICRO_STATE_COORDS[c.id]}
                    onClick={() => handleSelect(c.id)}
                    className="map-micro-marker"
                  >
                    <circle r={10} className="map-micro-hit" />
                    <circle
                      r={4}
                      className="map-micro-dot"
                      style={{ fill: isSelected ? 'var(--map-selected)' : 'var(--map-default)' }}
                    />
                    <title>{c.name[lang]}</title>
                  </Marker>
                )
              })}
          </ZoomableGroup>
          {icelandPath && iceland ? (
            <g
              className="map-iceland-inset"
              onClick={() => handleSelect('is')}
              role="button"
              aria-label={iceland.name[lang]}
            >
              <rect
                x={ICELAND_INSET_BOX.x - 2}
                y={ICELAND_INSET_BOX.y - 2}
                width={ICELAND_INSET_BOX.width + 4}
                height={ICELAND_INSET_BOX.height + 4}
                className="map-iceland-inset-box"
              />
              <path
                d={icelandPath}
                className="map-country map-country--covered"
                style={{
                  fill: selectedId === 'is' ? 'var(--map-selected)' : 'var(--map-default)',
                  stroke: 'var(--surface)',
                  strokeWidth: 0.5,
                }}
              />
              <title>{iceland.name[lang]}</title>
            </g>
          ) : null}
        </ComposableMap>
      </div>
    </div>
  )
}
