import { useEffect, useMemo, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { ComposableMap, Geographies, Geography, Marker, ZoomableGroup } from 'react-simple-maps'
import { feature } from 'topojson-client'
import { geoArea, geoCentroid, geoMercator, geoPath } from 'd3-geo'
import type { Topology } from 'topojson-specification'
import type { Feature, FeatureCollection, Geometry, MultiPolygon, Polygon, Position } from 'geojson'
import worldTopology from 'world-atlas/countries-50m.json'
import { countries } from '../data/countries'
import { cities } from '../data/cities'
import { countryIsoMap, KOSOVO_NAME, KOSOVO_COUNTRY_ID, MICRO_STATE_IDS } from '../data/countryIsoMap'
import { useLanguage } from '../contexts/LanguageContext'
import { useVisitedPlaces } from '../hooks/useVisitedPlaces'
import { hexToRgba } from '../utils/color'
import { assetUrl } from '../utils/assetUrl'
import { t } from '../i18n/ui'

/** Opacity applied to the selected country's flag-image fill so it reads as a
 * pale tint that the white city pins still stand out against. */
const FLAG_FILL_OPACITY = 0.45

/** How far (in map SVG units) a ring's center may sit outside the mainland
 * ring's own box and still count as "near" it — large enough to reach a
 * representative nearby island (Northern Ireland for the UK, Corsica for
 * France, the Balearics for Spain, Sicily/Sardinia for Italy, ...), small
 * enough to exclude a true distant overseas exclave (French Guiana, the
 * Canaries, ...), which barely reads at mobile size anyway. */
const NEAR_MAINLAND_MARGIN = 35

const MAP_WIDTH = 800
const MAP_HEIGHT = 485
const ICELAND_ISO = '352'
const DEFAULT_CENTER: [number, number] = [20, 52.5]
const SELECTED_ZOOM = 4
const MAX_ZOOM = 6
/** Shrinks the fit-to-screen target box a bit so a selected country isn't flush against the edges. */
const FIT_MARGIN = 0.85
/** Fixed screen position for the selected-country label, in the map's own viewBox units. */
const LABEL_ANCHOR: [number, number] = [MAP_WIDTH / 2, 18]

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

/**
 * The mainland ring plus any other ring that sits within `margin` map units
 * of it — a nearby island (Northern Ireland, Corsica, the Balearics, Sicily,
 * ...) — but not a truly distant exclave. Used to size and clip a single flag
 * image so it covers the mainland and those nearby islands, without either
 * shrinking to fit a stray overseas territory or leaving nearby islands bare.
 */
function nearMainlandFeature(
  geoFeature: Feature<Geometry>,
  boundsPath: ReturnType<typeof geoPath>,
  margin: number,
): { feature: Feature<MultiPolygon>; bounds: { x: number; y: number; width: number; height: number } } {
  const geometry = geoFeature.geometry
  const rings: Position[][][] =
    geometry.type === 'MultiPolygon' ? (geometry as MultiPolygon).coordinates : [(geometry as Polygon).coordinates]

  let mainIdx = 0
  let mainArea = -1
  rings.forEach((ring, i) => {
    const area = geoArea({ type: 'Polygon', coordinates: ring })
    if (area > mainArea) {
      mainArea = area
      mainIdx = i
    }
  })
  const [[mx0, my0], [mx1, my1]] = boundsPath.bounds({ type: 'Polygon', coordinates: rings[mainIdx] })
  const ex0 = mx0 - margin
  const ey0 = my0 - margin
  const ex1 = mx1 + margin
  const ey1 = my1 + margin

  const included: Position[][][] = []
  let bx0 = Infinity
  let by0 = Infinity
  let bx1 = -Infinity
  let by1 = -Infinity
  rings.forEach((ring, i) => {
    const [[rx0, ry0], [rx1, ry1]] = boundsPath.bounds({ type: 'Polygon', coordinates: ring })
    const cx = (rx0 + rx1) / 2
    const cy = (ry0 + ry1) / 2
    const isNear = i === mainIdx || (cx >= ex0 && cx <= ex1 && cy >= ey0 && cy <= ey1)
    if (!isNear) return
    included.push(ring)
    bx0 = Math.min(bx0, rx0)
    by0 = Math.min(by0, ry0)
    bx1 = Math.max(bx1, rx1)
    by1 = Math.max(by1, ry1)
  })

  return {
    feature: { type: 'Feature', geometry: { type: 'MultiPolygon', coordinates: included }, properties: {} },
    bounds: { x: bx0, y: by0, width: Math.max(bx1 - bx0, 1), height: Math.max(by1 - by0, 1) },
  }
}

export function EuropeMap() {
  const navigate = useNavigate()
  const { lang } = useLanguage()
  const { data: visitedData } = useVisitedPlaces()
  const [selectedId, setSelectedId] = useState<string | null>(null)
  const [selectedCityId, setSelectedCityId] = useState<string | null>(null)

  // A country reads as "visited" once it has its own visit record, or any of
  // its cities does — marking a city visited implies its country was too.
  const visitedCountryIds = useMemo(() => {
    const ids = new Set(Object.keys(visitedData.countries))
    for (const cityId of Object.keys(visitedData.cities)) {
      const city = cities.find((c) => c.id === cityId)
      if (city) ids.add(city.countryId)
    }
    return ids
  }, [visitedData])

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
      // Use just the mainland ring's centroid — the raw multi-ring centroid is
      // pulled far off-continent by distant overseas territories (France's
      // French Guiana/Réunion/Martinique, etc.), landing nowhere near the
      // country's actual on-screen position.
      map.set(country.id, geoCentroid(mainlandRing(geoFeature)) as [number, number])
    }
    for (const [id, coords] of Object.entries(MICRO_STATE_COORDS)) {
      map.set(id, coords)
    }
    return map
  }, [geoData])

  const selectedGeoFeature = useMemo(() => {
    if (!selectedId || selectedId === 'is') return null
    return (
      geoData.features.find((f) => {
        if (f.id === ICELAND_ISO) return false
        const isKosovo = f.properties?.name === KOSOVO_NAME
        const c = isKosovo ? countries.find((c) => c.id === KOSOVO_COUNTRY_ID) : isoToCountry.get(String(f.id))
        return c?.id === selectedId
      }) ?? null
    )
  }, [geoData, selectedId])

  // The mainland plus any nearby island (Northern Ireland, Corsica, the
  // Balearics, ...), combined — both its outline (to clip a single flag image
  // to) and its bounds (to size that image, and to pick a zoom level that
  // fits it on screen instead of a fixed zoom that crops long countries like
  // Sweden).
  const selectedNear = useMemo(() => {
    if (!selectedGeoFeature) return null
    return nearMainlandFeature(selectedGeoFeature, boundsPath, NEAR_MAINLAND_MARGIN)
  }, [selectedGeoFeature, boundsPath])
  const selectedBounds = selectedNear?.bounds ?? null
  const selectedPathD = useMemo(() => {
    if (!selectedNear) return null
    return boundsPath(selectedNear.feature)
  }, [selectedNear, boundsPath])

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
  const selectedCountry = selectedId ? countries.find((c) => c.id === selectedId) : undefined

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

  // Iceland has no real position on the main map (it's drawn as a fixed inset
  // instead, see below) so there's nothing on the main map to pan/zoom to for
  // it — selecting it leaves the main map's view exactly as it was, rather
  // than snapping back to the default view.
  const [mapView, setMapView] = useState<{ center: [number, number]; zoom: number }>({
    center: DEFAULT_CENTER,
    zoom: 1,
  })

  useEffect(() => {
    if (selectedId === null) {
      setMapView({ center: DEFAULT_CENTER, zoom: 1 })
      return
    }
    if (selectedId === 'is') return
    const centroid = centroidById.get(selectedId)
    if (!centroid) return
    // Fit the selected country's own bounding box into the map's own fixed
    // viewBox — a flat zoom either crops long countries (Sweden, Norway,
    // Italy) or under-zooms tiny ones, since size varies hugely between them.
    let zoom = SELECTED_ZOOM
    if (selectedBounds) {
      const fitWidth = (MAP_WIDTH * FIT_MARGIN) / selectedBounds.width
      const fitHeight = (MAP_HEIGHT * FIT_MARGIN) / selectedBounds.height
      zoom = Math.min(Math.max(Math.min(fitWidth, fitHeight), 1), MAX_ZOOM)
    }
    setMapView({ center: centroid, zoom })
  }, [selectedId, centroidById, selectedBounds])

  const zoomCenter = mapView.center
  const zoomLevel = mapView.zoom

  return (
    <div className="europe-map-wrap">
      <ComposableMap
        width={MAP_WIDTH}
        height={MAP_HEIGHT}
        projection="geoMercator"
        projectionConfig={{ center: DEFAULT_CENTER, scale: 570 }}
        className="europe-map-svg"
      >
        <ZoomableGroup
          center={zoomCenter}
          zoom={zoomLevel}
          minZoom={1}
          maxZoom={MAX_ZOOM}
          className="europe-map-zoom"
        >
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
                  const isVisited = country ? visitedCountryIds.has(country.id) : false
                  const clipId = country ? `flag-clip-${country.id}` : ''

                  return (
                    <g key={geo.rsmKey}>
                      {isSelected && country && selectedPathD ? (
                        <defs>
                          <clipPath id={clipId}>
                            <path d={selectedPathD} />
                          </clipPath>
                        </defs>
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
                          fill: country
                            ? isVisited
                              ? 'var(--map-visited)'
                              : 'var(--map-default)'
                            : 'var(--map-neutral)',
                          stroke: isSelected ? 'var(--map-selected)' : 'var(--surface)',
                          strokeWidth: isSelected ? 2.5 : 0.5,
                          // Keeps the stroke a constant on-screen thickness regardless of
                          // zoom — without this, a selected (zoomed-in) country's thin
                          // border balloons into a wide pale gap around its edges.
                          vectorEffect: 'non-scaling-stroke',
                          outline: 'none',
                          cursor: country ? 'pointer' : 'default',
                          opacity: isMicroState ? 0.85 : 1,
                        }}
                      />
                      {isSelected && country && selectedPathD && selectedBounds ? (
                        <image
                          href={assetUrl(country.flagImage)}
                          x={selectedBounds.x}
                          y={selectedBounds.y}
                          width={selectedBounds.width}
                          height={selectedBounds.height}
                          preserveAspectRatio="none"
                          clipPath={`url(#${clipId})`}
                          opacity={FLAG_FILL_OPACITY}
                          style={{ pointerEvents: 'none' }}
                        />
                      ) : null}
                    </g>
                  )
                })
            }
          </Geographies>
          {countries
            .filter((c) => MICRO_STATE_IDS.has(c.id) && MICRO_STATE_COORDS[c.id])
            .map((c) => {
              const isSelected = c.id === selectedId
              const isVisited = visitedCountryIds.has(c.id)
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
                    style={{
                      fill: isSelected
                        ? hexToRgba(c.flagColors.primary, 0.55)
                        : isVisited
                          ? 'var(--map-visited)'
                          : 'var(--map-default)',
                    }}
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
                  <text className="map-city-label" textAnchor="middle" y={-4}>
                    {city.name[lang]}
                  </text>
                ) : (
                  <title>{city.name[lang]}</title>
                )}
              </Marker>
            )
          })}
        </ZoomableGroup>
        {selectedCountry ? (
          <g className="map-country-label">
            <text x={LABEL_ANCHOR[0]} y={LABEL_ANCHOR[1]} textAnchor="middle" className="map-country-label-name">
              {selectedCountry.name[lang]}
            </text>
            <text x={LABEL_ANCHOR[0]} y={LABEL_ANCHOR[1] + 12} textAnchor="middle" className="map-country-label-hint">
              {t('mapTapAgainHint', lang)}
            </text>
          </g>
        ) : null}
        {icelandPath && iceland && (!selectedId || selectedId === 'is') ? (
          <g
            className="map-iceland-inset"
            onClick={() => handleSelect('is')}
            role="button"
            aria-label={iceland.name[lang]}
          >
            {selectedId === 'is' ? (
              <defs>
                <clipPath id="flag-clip-is">
                  <path d={icelandPath} />
                </clipPath>
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
                fill: visitedCountryIds.has('is') ? 'var(--map-visited)' : 'var(--map-default)',
                stroke: selectedId === 'is' ? 'var(--map-selected)' : 'var(--surface)',
                strokeWidth: selectedId === 'is' ? 2 : 0.5,
                vectorEffect: 'non-scaling-stroke',
              }}
            />
            {selectedId === 'is' ? (
              <image
                href={assetUrl(iceland.flagImage)}
                x={ICELAND_INSET_BOX.x}
                y={ICELAND_INSET_BOX.y}
                width={ICELAND_INSET_BOX.width}
                height={ICELAND_INSET_BOX.height}
                preserveAspectRatio="none"
                clipPath="url(#flag-clip-is)"
                opacity={FLAG_FILL_OPACITY}
                style={{ pointerEvents: 'none' }}
              />
            ) : null}
            <title>{iceland.name[lang]}</title>
          </g>
        ) : null}
      </ComposableMap>
    </div>
  )
}
