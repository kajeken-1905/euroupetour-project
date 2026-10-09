import { useState } from 'react'
import type { City, SeasonRating } from '../types'
import { useLanguage } from '../contexts/LanguageContext'
import { CLIMATE_YEARS } from '../data/climate'
import { getCitySeason } from '../data/season'
import { t } from '../i18n/ui'

const MONTHS_EN = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
const RATINGS: SeasonRating[] = ['best', 'ok', 'avoid']

export function SeasonPanel({ city }: { city: City }) {
  const { lang } = useLanguage()
  const [selected, setSelected] = useState(() => new Date().getMonth())
  const season = getCitySeason(city)
  if (!season) return null

  const monthName = (m: number) => (lang === 'ko' ? `${m + 1}월` : MONTHS_EN[m])
  const month = season.months[selected]

  return (
    <section className="season-panel" aria-label={t('seasonTitle', lang)}>
      <p className="section-label">{t('seasonTitle', lang)}</p>
      <div className="transit-card">
        <div className="season-grid" role="group">
          {season.months.map((m, i) => (
            <button
              key={i}
              type="button"
              className={`season-cell season-${m.rating}${i === selected ? ' is-selected' : ''}`}
              aria-pressed={i === selected}
              aria-label={`${monthName(i)} ${t(`seasonRating_${m.rating}`, lang)}`}
              onClick={() => setSelected(i)}
            >
              <span className="season-month">{lang === 'ko' ? i + 1 : MONTHS_EN[i][0]}</span>
              <span className="season-high">{m.high}°</span>
              <span className="season-low">{m.low}°</span>
            </button>
          ))}
        </div>
        <p className="season-detail">
          <strong>
            {monthName(selected)} · {t(`seasonRating_${month.rating}`, lang)}
          </strong>
          {t('seasonHigh', lang)} {month.high}° / {t('seasonLow', lang)} {month.low}° ·{' '}
          {t('seasonWet', lang).replace('{n}', String(month.wetDays))} ·{' '}
          {t('seasonDaylight', lang).replace('{n}', String(month.daylight))}
        </p>
        <div className="season-legend">
          {RATINGS.map((r) => (
            <span key={r}>
              <i className={`season-dot season-${r}`} />
              {t(`seasonRating_${r}`, lang)}
            </span>
          ))}
        </div>
        {season.note ? <p className="season-note">{season.note[lang]}</p> : null}
        <p className="itinerary-note">{t('seasonSource', lang).replace('{y}', CLIMATE_YEARS)}</p>
      </div>
    </section>
  )
}
