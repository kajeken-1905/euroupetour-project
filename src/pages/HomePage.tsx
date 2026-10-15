import { lazy, Suspense, useEffect, useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { LanguageToggle } from '../components/LanguageToggle'
import { ChecklistSection, Field } from '../components/ChecklistSection'
import { useLanguage } from '../contexts/LanguageContext'
import { useTravelChecklist } from '../hooks/useTravelChecklist'
import { cityIndex as cities } from '../data/cityIndex'
import { countries } from '../data/countries'
import { t } from '../i18n/ui'
import { bilingualName } from '../utils/placeNames'
import { useTrip } from '../trip/store'

// Route, plans and favourites need every city's data, so they load on their own and only when there is something saved.
const TripSections = lazy(() => import('../components/TripSections'))
import { MAX_COUNTRIES, MAX_CITIES_PER_COUNTRY, type CityTrip, type CountryTrip } from '../types/checklist'

function cityLabel(ko: string, en: string, native: string): string {
  const parts: string[] = []
  for (const part of [ko, en, native]) {
    if (part && !parts.includes(part)) parts.push(part)
  }
  return parts.join(' · ')
}

function CityTripFields({
  trip,
  index,
  countryId,
  cityOptions,
  canRemove,
  onChange,
  onRemove,
}: {
  trip: CityTrip
  index: number
  countryId: string
  cityOptions: { id: string; label: string }[]
  canRemove: boolean
  onChange: (patch: Partial<CityTrip>) => void
  onRemove: () => void
}) {
  const { lang } = useLanguage()
  const n = index + 1
  const selected = cityOptions.find((o) => o.id === trip.cityId)
  const baseTitle = `${t('city', lang)} ${n}`
  const title = trip.cityName.trim()
    ? `${baseTitle}  ${trip.cityName.trim()}`
    : selected
      ? `${baseTitle}  ${selected.label.split(' · ')[0]}`
      : baseTitle
  const summaryParts = [trip.fromDate, trip.toDate].filter(Boolean)
  const summary =
    summaryParts.length > 0
      ? summaryParts.join(' → ')
      : trip.cityName.trim() || undefined

  return (
    <ChecklistSection
      step={n}
      title={title}
      nested
      collapsible
      defaultOpen={false}
      summary={summary}
    >
      <div className="checklist-grid">
        <Field label={t('city', lang)}>
          <select
            className="checklist-select"
            value={trip.cityId}
            disabled={!countryId}
            onChange={(e) => {
              const cityId = e.target.value
              const found = cities.find((c) => c.id === cityId)
              onChange({
                cityId,
                cityName: found ? found.name[lang] : '',
              })
            }}
          >
            <option value="">
              {countryId ? t('selectCity', lang) : t('selectCountryFirst', lang)}
            </option>
            {cityOptions.map((opt) => (
              <option key={opt.id} value={opt.id}>
                {opt.label}
              </option>
            ))}
          </select>
        </Field>
        {trip.cityId ? (
          <Link
            to={`/city/${trip.cityId}`}
            className="checklist-shortcut checklist-shortcut--inline"
            aria-label={t('shortcutCity', lang)}
          >
            {t('shortcut', lang)}
          </Link>
        ) : null}
        <Field label={t('fromDate', lang)}>
          <input
            type="date"
            className="checklist-input"
            value={trip.fromDate}
            onChange={(e) => onChange({ fromDate: e.target.value })}
          />
        </Field>
        <Field label={t('toDate', lang)}>
          <input
            type="date"
            className="checklist-input"
            value={trip.toDate}
            onChange={(e) => onChange({ toDate: e.target.value })}
          />
        </Field>
        <Field label={t('lodging', lang)}>
          <input
            className="checklist-input"
            value={trip.lodging}
            onChange={(e) => onChange({ lodging: e.target.value })}
            placeholder={lang === 'ko' ? '호텔 / 에어비앤비' : 'Hotel / Airbnb'}
          />
        </Field>
        <Field label={t('cityTransport', lang)}>
          <input
            className="checklist-input"
            value={trip.transport}
            onChange={(e) => onChange({ transport: e.target.value })}
            placeholder={
              lang === 'ko' ? '기차 / 항공 / 버스' : 'Train / flight / bus'
            }
          />
        </Field>
      </div>
      {canRemove ? (
        <button type="button" className="checklist-remove" onClick={onRemove}>
          {t('removeCity', lang)}
        </button>
      ) : null}
    </ChecklistSection>
  )
}

function CountryTripBlock({
  trip,
  index,
  onSelectCountry,
  onUpdateCity,
  onAddCity,
  onRemoveCity,
  onRemoveCountry,
  canRemoveCountry,
}: {
  trip: CountryTrip
  index: number
  onSelectCountry: (countryId: string, countryName: string) => void
  onUpdateCity: (cityTripId: string, patch: Partial<CityTrip>) => void
  onAddCity: () => void
  onRemoveCity: (cityTripId: string) => void
  onRemoveCountry: () => void
  canRemoveCountry: boolean
}) {
  const { lang } = useLanguage()
  const step = index + 1
  const baseTitle = `${t('travelCountry', lang)} ${index + 1}`
  // The name is stored in the language it was picked in; show it in the current one when the country is known.
  const countryName = countries.find((c) => c.id === trip.countryId)?.name[lang] ?? trip.countryName.trim()
  const title = countryName ? `${baseTitle}  ${countryName}` : baseTitle
  const cityOptions = cities
    .filter((c) => c.countryId === trip.countryId)
    .map((c) => ({
      id: c.id,
      label: lang === 'ko' ? cityLabel(c.name.ko, c.name.en, c.nativeName) : cityLabel(c.name.en, c.nativeName, ''),
    }))
  const citySummary = trip.cities
    .map((c) => c.cityName.trim())
    .filter(Boolean)
    .join(', ')

  return (
    <ChecklistSection
      step={step}
      title={title}
      collapsible
      defaultOpen={false}
      summary={citySummary || trip.countryName.trim() || undefined}
    >
      <div className="checklist-grid">
        <Field label={t('country', lang)}>
          <select
            className="checklist-select"
            value={trip.countryId}
            onChange={(e) => {
              const countryId = e.target.value
              const found = countries.find((c) => c.id === countryId)
              onSelectCountry(countryId, found ? found.name[lang] : '')
            }}
          >
            <option value="">{t('selectCountry', lang)}</option>
            {countries.map((c) => (
              <option key={c.id} value={c.id}>
                {bilingualName(c.name, lang)}
              </option>
            ))}
          </select>
        </Field>
        {trip.countryId ? (
          <Link
            to={`/country/${trip.countryId}`}
            className="checklist-shortcut checklist-shortcut--inline"
            aria-label={t('shortcutCountry', lang)}
          >
            {t('shortcut', lang)}
          </Link>
        ) : null}
      </div>

      <div className="country-city-tree">
        {trip.cities.map((cityTrip, cityIndex) => (
          <CityTripFields
            key={cityTrip.id}
            trip={cityTrip}
            index={cityIndex}
            countryId={trip.countryId}
            cityOptions={cityOptions}
            canRemove={trip.cities.length > 1}
            onChange={(patch) => onUpdateCity(cityTrip.id, patch)}
            onRemove={() => onRemoveCity(cityTrip.id)}
          />
        ))}
      </div>

      <button
        type="button"
        className="checklist-add checklist-add--ghost"
        onClick={onAddCity}
        disabled={!trip.countryId || trip.cities.length >= MAX_CITIES_PER_COUNTRY}
      >
        + {t('addCityUnderCountry', lang)}
      </button>

      {canRemoveCountry ? (
        <button type="button" className="checklist-remove" onClick={onRemoveCountry}>
          {t('removeCountry', lang)}
        </button>
      ) : null}
    </ChecklistSection>
  )
}

/** "My trip" on the home screen: loads the route, plans and favourites when any are saved, or on request. */
function HomeTrip() {
  const { lang } = useLanguage()
  const trip = useTrip()
  const [start, setStart] = useState(false)
  const saved =
    trip.route.length > 0 || Object.keys(trip.plans).length > 0 || trip.highlights.length > 0 || trip.places.length > 0
  // Arriving from a city's "in your route" button: bring this section into view once it is there.
  const scrollTo = (useLocation().state as { scrollTo?: string } | null)?.scrollTo
  useEffect(() => {
    if (scrollTo !== 'my-trip') return
    const timer = setTimeout(() => document.getElementById('my-trip')?.scrollIntoView({ block: 'start' }), 400)
    return () => clearTimeout(timer)
  }, [scrollTo])
  return (
    <section id="my-trip" className="home-trip" aria-label={t('homeTripTitle', lang)}>
      <p className="section-label">{t('homeTripTitle', lang)}</p>
      {saved || start ? (
        <Suspense fallback={<p className="route-hint">…</p>}>
          <TripSections />
        </Suspense>
      ) : (
        <div className="transit-card">
          <p className="route-hint" style={{ marginTop: 0 }}>
            {t('homeTripIntro', lang)}
          </p>
          <p className="route-hint">{t('tripEmpty', lang)}</p>
          <div className="plan-actions">
            <button type="button" className="plan-btn" onClick={() => setStart(true)}>
              {t('homeTripStart', lang)}
            </button>
          </div>
        </div>
      )}
    </section>
  )
}

export function HomePage() {
  const { lang } = useLanguage()
  const {
    data,
    setCountrySelection,
    updateCityInCountry,
    addCountry,
    removeCountry,
    addCityToCountry,
    removeCityFromCountry,
    resetCountries,
  } = useTravelChecklist()

  return (
    <div className="home-neon">
      <header className="top-bar">
        <div>
          <span className="home-kicker">EUROPE TOUR</span>
          <h1>{t('appTitle', lang)}</h1>
          <p>{t('checklistSubtitle', lang)}</p>
        </div>
        <LanguageToggle />
      </header>

      <p className="phase-note">{t('checklistHint', lang)}</p>

      <div className="checklist">
        {data.countries.map((countryTrip, index) => (
          <CountryTripBlock
            key={countryTrip.id}
            trip={countryTrip}
            index={index}
            onSelectCountry={(countryId, countryName) =>
              setCountrySelection(countryTrip.id, countryId, countryName)
            }
            onUpdateCity={(cityTripId, patch) =>
              updateCityInCountry(countryTrip.id, cityTripId, patch)
            }
            onAddCity={() => addCityToCountry(countryTrip.id)}
            onRemoveCity={(cityTripId) =>
              removeCityFromCountry(countryTrip.id, cityTripId)
            }
            onRemoveCountry={() => removeCountry(countryTrip.id)}
            canRemoveCountry={data.countries.length > 1}
          />
        ))}

        <div className="checklist-actions">
          <button
            type="button"
            className="checklist-add"
            onClick={addCountry}
            disabled={data.countries.length >= MAX_COUNTRIES}
          >
            + {t('addCountry', lang)}
          </button>
          <button type="button" className="checklist-reset" onClick={resetCountries}>
            {t('resetCountries', lang)}
          </button>
        </div>
      </div>

      <HomeTrip />
    </div>
  )
}
