import type { City, CityHighlight, ItineraryDay, Lang } from '../types'
import { useLanguage } from '../contexts/LanguageContext'
import { getCityItinerary } from '../data/itinerary'
import { getHighlightVisit } from '../data/visit'
import { t } from '../i18n/ui'
import { DAYS } from './HighlightCard'

const HALF_DAY_MINUTES = 240

function dayMinutes(day: ItineraryDay): [number, number] {
  let min = 0
  let max = 0
  for (const id of day.stops) {
    const m = getHighlightVisit(id)?.minutes
    if (m) {
      min += m[0]
      max += m[1]
    }
  }
  return [min, max]
}

function hours([min, max]: [number, number], lang: Lang) {
  const h = (m: number) => Math.max(0.5, Math.round(m / 30) / 2)
  const a = h(min)
  const b = h(max)
  const unit = lang === 'ko' ? '시간' : ' h'
  return a === b ? `${a}${unit}` : `${a}–${b}${unit}`
}

/** "월요일 휴무: 로댕 미술관" lines for the stops of one day. */
function closures(day: ItineraryDay, byId: Map<string, CityHighlight>, lang: Lang) {
  const byDay = new Map<string, string[]>()
  for (const id of day.stops) {
    const closed = getHighlightVisit(id)?.closed
    const name = byId.get(id)?.name[lang]
    if (!closed || closed === 'daily' || !name) continue
    for (const d of closed.split(',')) byDay.set(d, [...(byDay.get(d) ?? []), name])
  }
  return Object.keys(DAYS)
    .filter((d) => byDay.has(d))
    .map((d) =>
      lang === 'ko'
        ? `${DAYS[d].ko}요일 ${t('visitClosed', lang)}: ${byDay.get(d)!.join(', ')}`
        : `${t('visitClosed', lang)} ${DAYS[d].en}: ${byDay.get(d)!.join(', ')}`,
    )
}

function jump(id: string) {
  document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'center' })
}

export function ItineraryPanel({ city }: { city: City }) {
  const { lang } = useLanguage()
  const itinerary = getCityItinerary(city.id)
  if (!itinerary) return null

  const byId = new Map(city.highlights.map((h) => [h.id, h]))
  const days = itinerary.days
    .map((d) => ({ ...d, stops: d.stops.filter((id) => byId.has(id)) }))
    .filter((d) => d.stops.length > 0)
  const main = days.filter((d) => !d.trip)
  const trips = days.filter((d) => d.trip)
  if (days.length === 0) return null

  const used = new Set(days.flatMap((d) => d.stops))
  const more = city.highlights.filter((h) => !used.has(h.id))

  const [firstMin, firstMax] = main[0] ? dayMinutes(main[0]) : [0, 0]
  const stayParts: string[] = []
  if (main.length === 1) {
    stayParts.push(t((firstMin + firstMax) / 2 <= HALF_DAY_MINUTES ? 'itineraryHalf' : 'itineraryOneDay', lang))
  } else if (main.length > 1) {
    stayParts.push(t('itineraryDays', lang).replace('{n}', String(main.length)))
  }
  if (trips.length > 0) stayParts.push(t('itineraryTrips', lang).replace('{n}', String(trips.length)))

  let dayNo = 0
  return (
    <section className="itinerary-panel" aria-label={t('itineraryTitle', lang)}>
      <p className="section-label">{t('itineraryTitle', lang)}</p>
      <div className="transit-card">
        <p className="transit-summary">
          {t('itineraryStay', lang)}: {stayParts.join(' + ')}
        </p>
        <ol className="itinerary-days">
          {days.map((day, i) => {
            const label = day.trip
              ? t('itineraryTrip', lang)
              : main.length > 1
                ? t('itineraryDayN', lang).replace('{n}', String(++dayNo))
                : trips.length > 0
                  ? t('itineraryInTown', lang)
                  : ''
            const heading = [label, day.title?.[lang]].filter(Boolean).join(' · ')
            const total = dayMinutes(day)
            return (
              <li key={i} className="itinerary-day">
                {heading ? <p className="itinerary-day-title">{heading}</p> : null}
                <div className="itinerary-stops">
                  {day.stops.map((id, n) => (
                    <span key={id} className="itinerary-stop-wrap">
                      {n > 0 ? <span className="itinerary-arrow" aria-hidden="true">→</span> : null}
                      <button type="button" className="itinerary-stop" onClick={() => jump(id)}>
                        {byId.get(id)!.name[lang]}
                      </button>
                    </span>
                  ))}
                </div>
                {total[1] > 0 ? (
                  <p className="itinerary-total">⏱ {t('itineraryTotal', lang).replace('{t}', hours(total, lang))}</p>
                ) : null}
                {closures(day, byId, lang).map((line) => (
                  <p key={line} className="itinerary-closed">🗓 {line}</p>
                ))}
              </li>
            )
          })}
        </ol>
        {more.length > 0 ? (
          <div className="itinerary-more">
            <p className="itinerary-day-title">{t('itineraryMore', lang)}</p>
            <div className="itinerary-stops">
              {more.map((h) => (
                <button key={h.id} type="button" className="itinerary-stop itinerary-stop-more" onClick={() => jump(h.id)}>
                  {h.name[lang]}
                </button>
              ))}
            </div>
          </div>
        ) : null}
        <p className="itinerary-note">{t('itineraryNote', lang)}</p>
      </div>
    </section>
  )
}
