import { useMemo } from 'react'
import { useNavigate } from 'react-router-dom'
import { ComposableMap, Geographies, Geography, Marker, ZoomableGroup } from 'react-simple-maps'
import { feature } from 'topojson-client'
import { geoMercator, geoPath } from 'd3-geo'
import type { Topology } from 'topojson-specification'
import type { FeatureCollection, Geometry } from 'geojson'
import worldTopology from 'world-atlas/countries-50m.json'
import { countries } from '../data/countries'
import { countryIsoMap, KOSOVO_NAME, KOSOVO_COUNTRY_ID, MICRO_STATE_IDS } from '../data/countryIsoMap'
import { useLanguage } from '../contexts/LanguageContext'

const MAP_WIDTH = 800
const MAP_HEIGHT = 485
const ICELAND_ISO = '352'

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

  const geoData = useMemo(() => {
    const topology = worldTopology as unknown as Topology
    return feature(topology, 'countries') as unknown as FeatureCollection<Geometry, { name: string }>
  }, [])

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

  return (
    <div className="europe-map-wrap">
      <ComposableMap
        width={MAP_WIDTH}
        height={MAP_HEIGHT}
        projection="geoMercator"
        projectionConfig={{ center: [20, 52.5], scale: 570 }}
        className="europe-map-svg"
      >
        <ZoomableGroup center={[20, 52.5]} zoom={1} minZoom={1} maxZoom={6}>
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

                  return (
                    <Geography
                      key={geo.rsmKey}
                      geography={geo}
                      onClick={() => country && navigate(`/country/${country.id}`)}
                      className={country ? 'map-country map-country--covered' : 'map-country'}
                      style={{
                        fill: country ? 'var(--map-accent)' : 'var(--map-neutral)',
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
            .map((c) => (
              <Marker
                key={c.id}
                coordinates={MICRO_STATE_COORDS[c.id]}
                onClick={() => navigate(`/country/${c.id}`)}
                className="map-micro-marker"
              >
                <circle r={10} className="map-micro-hit" />
                <circle r={4} className="map-micro-dot" />
                <title>{c.name[lang]}</title>
              </Marker>
            ))}
        </ZoomableGroup>
        {icelandPath && iceland ? (
          <g
            className="map-iceland-inset"
            onClick={() => navigate('/country/is')}
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
              style={{ fill: 'var(--map-accent)', stroke: 'var(--surface)', strokeWidth: 0.5 }}
            />
            <title>{iceland.name[lang]}</title>
          </g>
        ) : null}
      </ComposableMap>
    </div>
  )
}
