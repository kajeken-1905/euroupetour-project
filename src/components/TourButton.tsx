import { Link } from 'react-router-dom'
import { useLanguage } from '../contexts/LanguageContext'
import { t } from '../i18n/ui'
import { setRoute, useTrip } from '../trip/store'

/** Adds the city to the multi-city route kept on the My trip tab. */
export function TourButton({ cityId }: { cityId: string }) {
  const { lang } = useLanguage()
  const trip = useTrip()
  return (
    <div className="plan-actions tour-button">
      {trip.route.includes(cityId) ? (
        <Link className="plan-btn" to="/trip">
          ✓ {t('tourInRoute', lang)}
        </Link>
      ) : (
        <button type="button" className="plan-btn" onClick={() => setRoute([...trip.route, cityId])}>
          + {t('tourAddCity', lang)}
        </button>
      )}
    </div>
  )
}
