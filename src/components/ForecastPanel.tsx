import { useEffect, useState } from 'react'
import type { City } from '../types'
import { useLanguage } from '../contexts/LanguageContext'
import { t } from '../i18n/ui'

/** A 7-day forecast from Open-Meteo (free, no key; CC BY 4.0). Hidden offline or if it fails. */
interface Day {
  date: string
  code: number
  high: number
  low: number
  rain: number | null
}

const WEEKDAYS = { ko: ['일', '월', '화', '수', '목', '금', '토'], en: ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'] }

/** WMO weather code → icon and words. */
function describe(code: number): { icon: string; ko: string; en: string } {
  if (code === 0) return { icon: '☀️', ko: '맑음', en: 'Clear' }
  if (code <= 2) return { icon: '⛅', ko: '구름 조금', en: 'Partly cloudy' }
  if (code === 3) return { icon: '☁️', ko: '흐림', en: 'Cloudy' }
  if (code === 45 || code === 48) return { icon: '🌫️', ko: '안개', en: 'Fog' }
  if (code >= 51 && code <= 57) return { icon: '🌦️', ko: '이슬비', en: 'Drizzle' }
  if (code >= 61 && code <= 67) return { icon: '🌧️', ko: '비', en: 'Rain' }
  if (code >= 71 && code <= 77) return { icon: '🌨️', ko: '눈', en: 'Snow' }
  if (code >= 80 && code <= 82) return { icon: '🌦️', ko: '소나기', en: 'Showers' }
  if (code === 85 || code === 86) return { icon: '🌨️', ko: '눈 소나기', en: 'Snow showers' }
  if (code >= 95) return { icon: '⛈️', ko: '뇌우', en: 'Thunderstorm' }
  return { icon: '🌡️', ko: '', en: '' }
}

export function ForecastPanel({ city }: { city: City }) {
  const { lang } = useLanguage()
  const [days, setDays] = useState<Day[] | undefined>(undefined)

  useEffect(() => {
    if (city.lat == null || city.lng == null) return
    let live = true
    setDays(undefined)
    const url =
      'https://api.open-meteo.com/v1/forecast' +
      `?latitude=${city.lat}&longitude=${city.lng}` +
      '&daily=weather_code,temperature_2m_max,temperature_2m_min,precipitation_probability_max&timezone=auto&forecast_days=7'
    fetch(url)
      .then((r) => (r.ok ? r.json() : Promise.reject()))
      .then((data) => {
        const d = data.daily
        if (!live || !d?.time) return
        setDays(
          d.time.map((date: string, i: number) => ({
            date,
            code: d.weather_code[i],
            high: Math.round(d.temperature_2m_max[i]),
            low: Math.round(d.temperature_2m_min[i]),
            rain: d.precipitation_probability_max?.[i] ?? null,
          })),
        )
      })
      .catch(() => {})
    return () => {
      live = false
    }
  }, [city.lat, city.lng])

  if (!days?.length) return null

  return (
    <section className="itinerary-panel" aria-label={t('forecastTitle', lang)}>
      <p className="section-label">{t('forecastTitle', lang)}</p>
      <div className="transit-card">
        <ol className="forecast-row">
          {days.map((day, i) => {
            const [y, m, dd] = day.date.split('-').map(Number)
            const w = describe(day.code)
            const name = i === 0 ? t('forecastToday', lang) : WEEKDAYS[lang][new Date(y, m - 1, dd).getDay()]
            return (
              <li key={day.date} className="forecast-day" aria-label={`${name} ${w[lang]} ${day.high}° ${day.low}°`}>
                <span className="forecast-name">{name}</span>
                <span className="forecast-date">
                  {m}/{dd}
                </span>
                <span className="forecast-icon" aria-hidden>
                  {w.icon}
                </span>
                <span className="forecast-high">{day.high}°</span>
                <span className="forecast-low">{day.low}°</span>
                {day.rain != null ? <span className="forecast-rain">💧{day.rain}%</span> : null}
              </li>
            )
          })}
        </ol>
        <p className="itinerary-note">
          {t('forecastSource', lang)}{' '}
          <a href="https://open-meteo.com" target="_blank" rel="noopener noreferrer">
            Open-Meteo ↗
          </a>
        </p>
      </div>
    </section>
  )
}
