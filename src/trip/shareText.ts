import type { City, Lang } from '../types'
import { getPlace } from '../data/countryData'
import { t } from '../i18n/ui'
import { directionsUrl } from '../utils/directions'
import type { PlanDay } from './store'

const APP = 'My Vacation Plan'

/** Name and map link of a plan stop: one of the city's sights, or a place to eat. */
export function stopInfo(city: City, id: string, lang: Lang) {
  const highlight = city.highlights.find((h) => h.id === id)
  if (highlight) return { name: highlight.name[lang], mapsUrl: highlight.mapsUrl, place: false }
  const place = getPlace(id)
  return place ? { name: place.name, mapsUrl: place.mapsUrl, place: true } : undefined
}

/** A plan as plain text for a chat: day headings, stops in order and each day's directions link. */
export function planText(city: City, days: PlanDay[], lang: Lang) {
  const lines = [`📍 ${t('sharePlanHeading', lang).replace('{city}', city.name[lang]).replace('{n}', String(days.length))} — ${APP}`]
  days.forEach((day, d) => {
    const stops = day.stops.map((id) => stopInfo(city, id, lang)).filter((s) => !!s)
    lines.push('', [t('itineraryDayN', lang).replace('{n}', String(d + 1)), day.title?.[lang]].filter(Boolean).join(' · '))
    lines.push(stops.length ? `  ${stops.map((s) => s.name).join(' → ')}` : `  ${t('planEmptyDay', lang)}`)
    const directions = directionsUrl(stops.map((s) => s.mapsUrl))
    if (directions) lines.push(`  🗺 ${t('planDirections', lang)}: ${directions}`)
  })
  return lines.join('\n')
}

/** A visit date ('2026-11-03') as a short day for the reader: "11월 3일 (화)" or "Tue 3 Nov". */
export function visitDay(iso: string, lang: Lang) {
  const [y, m, d] = iso.split('-').map(Number)
  const day = new Date(Date.UTC(y, m - 1, d))
  const weekday = day.toLocaleDateString(lang === 'ko' ? 'ko-KR' : 'en-GB', { weekday: 'short', timeZone: 'UTC' })
  return lang === 'ko'
    ? `${m}월 ${d}일 (${weekday})`
    : `${weekday} ${d} ${day.toLocaleDateString('en-GB', { month: 'short', timeZone: 'UTC' })}`
}

/** A multi-city route as plain text; with visit dates, one city per line. */
export function routeText(cities: City[], lang: Lang, dates: string[] = []) {
  const heading = `🧭 ${t('shareRouteHeading', lang).replace('{n}', String(cities.length))} — ${APP}`
  if (!dates.some(Boolean)) return [heading, cities.map((c) => c.name[lang]).join(' → ')].join('\n')
  return [heading, ...cities.map((c, i) => `${i + 1}. ${dates[i] ? `${visitDay(dates[i], lang)} · ` : ''}${c.name[lang]}`)].join('\n')
}
