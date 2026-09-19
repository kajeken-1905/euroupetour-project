import { useId, useState } from 'react'
import { CountryStamp } from './CountryStamp'
import { cities } from '../data/cities'
import { countries } from '../data/countries'
import { useLanguage } from '../contexts/LanguageContext'
import { useVisitedPlaces } from '../hooks/useVisitedPlaces'
import { t } from '../i18n/ui'
import type { VisitKind } from '../types/visits'

function stampRotation(index: number): number {
  return (index % 2 === 0 ? -1 : 1) * (5 + ((index * 7) % 11))
}

const CURRENT_YEAR = new Date().getFullYear()
const YEAR_OPTIONS = Array.from({ length: CURRENT_YEAR - 1989 }, (_, i) => CURRENT_YEAR - i)
const MONTH_OPTIONS = Array.from({ length: 12 }, (_, i) => i + 1)

/** A city's stamp is its parent country's — cities have no illustration of their own. */
function stampCountryFor(kind: VisitKind, placeId: string) {
  if (kind === 'countries') return countries.find((c) => c.id === placeId)
  const city = cities.find((c) => c.id === placeId)
  return city ? countries.find((c) => c.id === city.countryId) : undefined
}

export function VisitStamps({ kind, placeId }: { kind: VisitKind; placeId: string }) {
  const { lang } = useLanguage()
  const { getVisits, addVisit, removeVisit } = useVisitedPlaces()
  const visits = getVisits(kind, placeId)
  const [adding, setAdding] = useState(false)
  const [draftYear, setDraftYear] = useState('')
  const [draftMonth, setDraftMonth] = useState('')
  const yearId = useId()
  const monthId = useId()

  const confirmAdd = () => {
    if (!draftYear || !draftMonth) return
    addVisit(kind, placeId, { year: Number(draftYear), month: Number(draftMonth) })
    setDraftYear('')
    setDraftMonth('')
    setAdding(false)
  }

  const country = stampCountryFor(kind, placeId)

  return (
    <section className="visit-section">
      <p className="section-label">{t('visitStamps', lang)}</p>

      {visits.length > 0 && country ? (
        <div className="visit-stamp-row">
          {visits.map((visit, i) => (
            <CountryStamp
              key={`${visit.year}-${visit.month}-${i}`}
              id={country.id}
              nameEn={country.name.en}
              date={`${visit.year} · ${String(visit.month).padStart(2, '0')}`}
              className="visit-stamp-badge visit-stamp-badge--postage"
              style={{
                marginLeft: i > 0 ? -20 : 0,
                zIndex: i,
                transform: `rotate(${stampRotation(i)}deg)`,
              }}
            />
          ))}
        </div>
      ) : (
        <p className="visit-empty">{t('noVisitsYet', lang)}</p>
      )}

      <div className="visit-manage">
        {visits.map((visit, i) => (
          <span className="visit-chip" key={`${visit.year}-${visit.month}-${i}`}>
            {visit.year}.{String(visit.month).padStart(2, '0')}
            <button
              type="button"
              className="visit-chip-remove"
              onClick={() => removeVisit(kind, placeId, i)}
              aria-label={t('removeVisit', lang)}
            >
              ×
            </button>
          </span>
        ))}

        {adding ? (
          <span className="visit-add-inline">
            <label className="sr-only" htmlFor={yearId}>
              {t('addVisit', lang)}
            </label>
            <select
              id={yearId}
              className="checklist-select visit-select"
              value={draftYear}
              onChange={(e) => setDraftYear(e.target.value)}
              autoFocus
            >
              <option value="">{t('selectPlaceholder', lang)}</option>
              {YEAR_OPTIONS.map((y) => (
                <option key={y} value={y}>
                  {y}
                </option>
              ))}
            </select>
            <label className="sr-only" htmlFor={monthId}>
              {t('addVisit', lang)}
            </label>
            <select
              id={monthId}
              className="checklist-select visit-select visit-select--month"
              value={draftMonth}
              onChange={(e) => setDraftMonth(e.target.value)}
            >
              <option value="">{t('selectPlaceholder', lang)}</option>
              {MONTH_OPTIONS.map((m) => (
                <option key={m} value={m}>
                  {lang === 'ko' ? `${m}월` : new Date(2000, m - 1).toLocaleString('en', { month: 'short' })}
                </option>
              ))}
            </select>
            <button
              type="button"
              className="visit-add-confirm"
              onClick={confirmAdd}
              disabled={!draftYear || !draftMonth}
            >
              {t('addVisit', lang)}
            </button>
          </span>
        ) : (
          <button type="button" className="visit-add-btn" onClick={() => setAdding(true)}>
            + {t('addVisit', lang)}
          </button>
        )}
      </div>
    </section>
  )
}
