import { useEffect, useState, type ReactNode } from 'react'
import { useLanguage } from '../contexts/LanguageContext'
import { getCityBrief as getCity } from '../data/cityIndex'
import { NIGHT_TRAIN_GROUPS, NIGHT_TRAINS } from '../data/night-trains'
import { SCENIC_TRAIN_GROUPS, SCENIC_TRAINS } from '../data/scenic-trains'
import { t } from '../i18n/ui'
import { NightTrainFoot, NightTrainHead, NightTrainLines, pick } from './NightTrainsPanel'
import { ScenicTrainBody, ScenicTrainHead } from './ScenicTrainsPanel'

/** Key of a train card, as the search index uses it. */
export const trainKey = (kind: 'night' | 'scenic', id: string) => `${kind}:${id}`

function cityNames(ids: string[], lang: 'ko' | 'en'): string {
  return ids
    .map((id) => getCity(id)?.name[lang])
    .filter(Boolean)
    .join(' – ')
}

/**
 * Search screen: every night and scenic train, grouped by region. A card opens in place;
 * `focus` (a trainKey) opens one card and scrolls to it, for a train picked from the results.
 */
export function TrainTripsPanel({ focus }: { focus?: string }) {
  const { lang } = useLanguage()
  const [open, setOpen] = useState<string[]>(() => (focus ? [focus] : []))

  useEffect(() => {
    if (!focus) return
    setOpen((list) => (list.includes(focus) ? list : [...list, focus]))
    document.getElementById(`train-${focus}`)?.scrollIntoView({ block: 'start', behavior: 'smooth' })
  }, [focus])

  const toggle = (key: string) =>
    setOpen((list) => (list.includes(key) ? list.filter((k) => k !== key) : [...list, key]))

  const card = (key: string, head: ReactNode, summary: string, body: ReactNode) => {
    const isOpen = open.includes(key)
    return (
      <li key={key} id={`train-${key}`} className="night-train train-card">
        <button type="button" className="train-card-toggle" aria-expanded={isOpen} onClick={() => toggle(key)}>
          {head}
          {isOpen ? null : <span className="night-train-note">{summary}</span>}
        </button>
        {isOpen ? body : null}
      </li>
    )
  }

  return (
    <section className="popular-cities" aria-label={t('trainTripsTitle', lang)}>
      <p className="section-label">{t('trainTripsTitle', lang)}</p>
      <p className="popular-group-note">{t('trainTripsNote', lang)}</p>

      <p className="popular-kind">🌙 {t('nightTrainsTitle', lang)}</p>
      {NIGHT_TRAIN_GROUPS.map((group) => (
        <section key={group.title} className="popular-group" aria-label={pick(group.title, lang)}>
          <h3 className="popular-group-title">{pick(group.title, lang)}</h3>
          <ul className="night-train-list train-list">
            {group.ids.map((id) => {
              const train = NIGHT_TRAINS.find((n) => n.id === id)
              if (!train) return null
              const more = train.lines.length - 1
              const summary =
                cityNames(train.lines[0], lang) +
                (more > 0 ? ` ${t('trainTripsMore', lang).replace('{n}', String(more))}` : '')
              return card(
                trainKey('night', id),
                <NightTrainHead train={train} />,
                summary,
                <>
                  <NightTrainLines lines={train.lines} />
                  <NightTrainFoot train={train} />
                </>,
              )
            })}
          </ul>
        </section>
      ))}
      <p className="route-hint">{t('nightTrainsHint', lang)}</p>

      <p className="popular-kind">🚞 {t('scenicTrainsTitle', lang)}</p>
      {SCENIC_TRAIN_GROUPS.map((group) => (
        <section key={group.title} className="popular-group" aria-label={pick(group.title, lang)}>
          <h3 className="popular-group-title">{pick(group.title, lang)}</h3>
          <ul className="night-train-list train-list">
            {group.ids.map((id) => {
              const train = SCENIC_TRAINS.find((s) => s.id === id)
              if (!train) return null
              const summary = train.season ? `🗓️ ${pick(train.season, lang)}` : cityNames(train.cities, lang)
              return card(
                trainKey('scenic', id),
                <ScenicTrainHead train={train} />,
                summary,
                <ScenicTrainBody train={train} cities />,
              )
            })}
          </ul>
        </section>
      ))}
    </section>
  )
}
