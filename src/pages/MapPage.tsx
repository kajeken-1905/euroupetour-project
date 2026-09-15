import { EuropeMap } from '../components/EuropeMap'
import { LanguageToggle } from '../components/LanguageToggle'
import { useLanguage } from '../contexts/LanguageContext'
import { t } from '../i18n/ui'

export function MapPage() {
  const { lang } = useLanguage()

  return (
    <div className="theme-page">
      <header className="top-bar">
        <div>
          <h1>{t('map', lang)}</h1>
          <p>{t('mapSubtitle', lang)}</p>
        </div>
        <LanguageToggle />
      </header>
      <EuropeMap />
      <div className="map-legend">
        <span className="map-legend-item">
          <span className="map-legend-dot map-legend-dot--covered" />
          {t('mapLegendCovered', lang)}
        </span>
        <span className="map-legend-item">
          <span className="map-legend-dot map-legend-dot--micro" />
          {t('mapLegendMicro', lang)}
        </span>
      </div>
    </div>
  )
}
