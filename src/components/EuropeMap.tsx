import { useEffect, useMemo, useRef, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { ComposableMap, Geographies, Geography, Marker, ZoomableGroup } from 'react-simple-maps'
import { feature } from 'topojson-client'
import { geoArea, geoCentroid, geoMercator, geoPath } from 'd3-geo'
import type { Topology } from 'topojson-specification'
import type { Feature, FeatureCollection, Geometry, MultiPolygon, Polygon } from 'geojson'
import worldTopology from 'world-atlas/countries-50m.json'
import { countries } from '../data/countries'
import { cities } from '../data/cities'
import { countryIsoMap, KOSOVO_NAME, KOSOVO_COUNTRY_ID, MICRO_STATE_IDS } from '../data/countryIsoMap'
import { useLanguage } from '../contexts/LanguageContext'
import { hexToRgba } from '../utils/color'
import { assetUrl } from '../utils/assetUrl'

/** Opacity applied to the selected country's flag-image fill so it reads as a
 * pale tint that the white city pins still stand out against. */
const FLAG_FILL_OPACITY = 0.45

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

/**
 * Some countries' MultiPolygon geometry includes distant overseas exclaves
 * (French Guiana, Dutch Caribbean islands, ...), which would otherwise blow
 * up the bounding box used to size the flag pattern. Returns just the
 * largest ring by area so the flag maps onto the mainland shape only.
 */
function mainlandRing(geoFeature: Feature<Geometry>): Feature<Polygon> {
  const geometry = geoFeature.geometry
  if (geometry.type !== 'MultiPolygon') {
    return { type: 'Feature', geometry: geometry as Polygon, properties: {} }
  }
  const rings = (geometry as MultiPolygon).coordinates
  let largest = rings[0]
  let largestArea = -1
  for (const ring of rings) {
    const area = geoArea({ type: 'Polygon', coordinates: ring })
    if (area > largestArea) {
      largestArea = area
      largest = ring
    }
  }
  return { type: 'Feature', geometry: { type: 'Polygon', coordinates: largest }, properties: {} }
}

export function EuropeMap() {
  const navigate = useNavigate()
  const { lang } = useLanguage()
  const wrapRef = useRef<HTMLDivElement>(null)
  const [containerWidth, setContainerWidth] = useState(360)
  const [selectedId, setSelectedId] = useState<string | null>(null)
  const [selectedCityId, setSelectedCityId] = useState<string | null>(null)

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

  // Matches ComposableMap's own projectionConfig, so bounds computed here line up
  // exactly with where Geography actually draws each country's path.
  const boundsPath = useMemo(
    () => geoPath(geoMercator().center(DEFAULT_CENTER).scale(570).translate([MAP_WIDTH / 2, MAP_HEIGHT / 2])),
    [],
  )

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

  const citiesByCountry = useMemo(() => {
    const map = new Map<string, { id: string; lat: number; lng: number; name: { ko: string; en: string } }[]>()
    for (const city of cities) {
      if (city.lat === undefined || city.lng === undefined) continue
      const list = map.get(city.countryId) ?? []
      list.push({ id: city.id, lat: city.lat, lng: city.lng, name: city.name })
      map.set(city.countryId, list)
    }
    return map
  }, [])

  const selectedCities = selectedId ? (citiesByCountry.get(selectedId) ?? []) : []

  const handleSelect = (countryId: string) => {
    if (selectedId === countryId) {
      navigate(`/country/${countryId}`)
    } else {
      setSelectedId(countryId)
      setSelectedCityId(null)
    }
  }

  const handleSelectCity = (cityId: string) => {
    if (selectedCityId === cityId) {
      navigate(`/city/${cityId}`)
    } else {
      setSelectedCityId(cityId)
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
                    const patternId = country ? `flag-pattern-${country.id}` : ''

                    return (
                      <g key={geo.rsmKey}>
                        {isSelected && country ? (
                          (() => {
                            const [[bx0, by0], [bx1, by1]] = boundsPath.bounds(mainlandRing(geo))
                            const bw = Math.max(bx1 - bx0, 1)
                            const bh = Math.max(by1 - by0, 1)
                            return (
                              <defs>
                                <pattern id={patternId} patternUnits="userSpaceOnUse" x={bx0} y={by0} width={bw} height={bh}>
                                  {/* Counter-rotated + dimension-swapped: an <image> referencing an
                                      external SVG renders sideways when an ancestor has a CSS rotate
                                      (our -90° map wrapper) — this rotate(90) cancels that out. */}
                                  <g transform="rotate(90)">
                                    <image
                                      href={assetUrl(country.flagImage)}
                                      x={0}
                                      y={-bw}
                                      width={bh}
                                      height={bw}
                                      preserveAspectRatio="xMidYMid slice"
                                    />
                                  </g>
                                </pattern>
                              </defs>
                            )
                          })()
                        ) : null}
                        <Geography
                          geography={geo}
                          onClick={() => {
                            if (country) {
                              handleSelect(country.id)
                            } else {
                              setSelectedId(null)
                              setSelectedCityId(null)
                            }
                          }}
                          className={country ? 'map-country map-country--covered' : 'map-country'}
                          style={{
                            fill: country ? (isSelected ? `url(#${patternId})` : 'var(--map-default)') : 'var(--map-neutral)',
                            fillOpacity: isSelected ? FLAG_FILL_OPACITY : 1,
                            stroke: 'var(--surface)',
                            strokeWidth: 0.5,
                            outline: 'none',
                            cursor: country ? 'pointer' : 'default',
                            opacity: isMicroState ? 0.85 : 1,
                          }}
                        />
                      </g>
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
                      style={{ fill: isSelected ? hexToRgba(c.flagColors.primary, 0.55) : 'var(--map-default)' }}
                    />
                    <title>{c.name[lang]}</title>
                  </Marker>
                )
              })}
            {selectedCities.map((city) => {
              const isCitySelected = city.id === selectedCityId
              return (
                <Marker
                  key={city.id}
                  coordinates={[city.lng, city.lat]}
                  onClick={() => handleSelectCity(city.id)}
                  className="map-city-marker"
                >
                  <circle r={6} className="map-city-hit" />
                  <circle r={1.4} className={isCitySelected ? 'map-city-dot map-city-dot--selected' : 'map-city-dot'} />
                  {isCitySelected ? (
                    // Countered against the map's own -90° CSS rotation (internal +x runs to
                    // screen "up") so the label sits above the pin and reads upright on screen.
                    <g transform="translate(3, 0) rotate(90)">
                      <text className="map-city-label" textAnchor="middle" dy="-4">
                        {city.name[lang]}
                      </text>
                    </g>
                  ) : (
                    <title>{city.name[lang]}</title>
                  )}
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
              {selectedId === 'is' ? (
                <defs>
                  <pattern
                    id="flag-pattern-is"
                    patternUnits="userSpaceOnUse"
                    x={ICELAND_INSET_BOX.x}
                    y={ICELAND_INSET_BOX.y}
                    width={ICELAND_INSET_BOX.width}
                    height={ICELAND_INSET_BOX.height}
                  >
                    <g transform="rotate(90)">
                      <image
                        href={assetUrl(iceland.flagImage)}
                        x={0}
                        y={-ICELAND_INSET_BOX.width}
                        width={ICELAND_INSET_BOX.height}
                        height={ICELAND_INSET_BOX.width}
                        preserveAspectRatio="xMidYMid slice"
                      />
                    </g>
                  </pattern>
                </defs>
              ) : null}
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
                  fill: selectedId === 'is' ? 'url(#flag-pattern-is)' : 'var(--map-default)',
                  fillOpacity: selectedId === 'is' ? FLAG_FILL_OPACITY : 1,
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
