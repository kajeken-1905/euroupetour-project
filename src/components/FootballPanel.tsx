import { useEffect, useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { useLanguage } from '../contexts/LanguageContext'
import { cityIndex } from '../data/cityIndex'
import { t } from '../i18n/ui'
import { assetUrl } from '../utils/assetUrl'
import type { FootballClub, FootballLeague, Lang } from '../types'

type FootballData = typeof import('../data/football')

/** The football data is loaded on its own, after the page, so neither screen carries it up front. */
function useFootball() {
  const [data, setData] = useState<FootballData>()
  useEffect(() => {
    let live = true
    import('../data/football').then((m) => {
      if (live) setData(m)
    })
    return () => {
      live = false
    }
  }, [])
  return data
}

/** `2026-08-21` → "2026년 8월 21일" / "21 Aug 2026". */
function day(value: string, lang: Lang) {
  const [y, m, d] = value.split('-').map(Number)
  if (lang === 'ko') return `${y}년 ${m}월 ${d}일`
  return `${d} ${new Date(y, m - 1, d).toLocaleString('en', { month: 'short' })} ${y}`
}

/** 48000 → "4만 8천" / "48,000". */
function seats(n: number, lang: Lang) {
  if (lang === 'en') return n.toLocaleString('en')
  if (n < 10000) return n.toLocaleString('ko')
  const man = Math.floor(n / 10000)
  const cheon = Math.round((n % 10000) / 1000)
  return (cheon ? `${man}만 ${cheon}천` : `${man}만`) + ' '
}

function season(league: FootballLeague, lang: Lang) {
  if (league.start && league.end) return `${day(league.start, lang)}${lang === 'ko' ? ' ~ ' : ' – '}${day(league.end, lang)}`
  if (league.start) return t('footballSeasonFrom', lang).replace('{d}', day(league.start, lang))
  return undefined
}

/** The country's top league (or why it has none), with the cities whose clubs play in it. */
export function FootballLeaguePanel({ countryId }: { countryId: string }) {
  const { lang } = useLanguage()
  const data = useFootball()
  const leagues = data?.FOOTBALL_LEAGUES[countryId]
  if (!data || !leagues) return null
  const cities = cityIndex.filter((c) => c.countryId === countryId && data.FOOTBALL_CLUBS[c.id]?.length)

  return (
    <section className="transit-panel football-panel" aria-label={t('footballLeagueTitle', lang)}>
      <p className="section-label">{t('footballLeagueTitle', lang)}</p>
      <div className="transit-card">
        <dl className="transit-facts">
          {leagues.map((league, i) => {
            const when = season(league, lang)
            return (
              <div key={league.key ?? i} className={i === 0 ? 'ess-first' : undefined}>
                <dt>{league.region ? league.region[lang] : t('footballTopDivision', lang)}</dt>
                <dd>
                  <strong>{league.name[lang]}</strong>
                  {league.name.en !== '—' && lang === 'ko' ? (
                    <span className="fb-native"> {league.name.en}</span>
                  ) : null}
                  {league.clubs ? (
                    <span className="fb-meta"> · {t('footballClubsN', lang).replace('{n}', String(league.clubs))}</span>
                  ) : null}
                  {when ? (
                    <>
                      <br />
                      <span className="fb-meta">
                        {t('footballSeason', lang)} {when}
                      </span>
                    </>
                  ) : null}
                  {league.calendarYear ? (
                    <>
                      <br />
                      <span className="fb-meta">{t('footballCalendarYear', lang)}</span>
                    </>
                  ) : null}
                  {league.note ? (
                    <>
                      <br />
                      <span className="fb-meta">{league.note[lang]}</span>
                    </>
                  ) : null}
                  {league.site ? (
                    <>
                      <br />
                      <a href={league.site} target="_blank" rel="noreferrer">
                        {t('footballOfficial', lang)} ↗
                      </a>
                    </>
                  ) : null}
                </dd>
              </div>
            )
          })}
          {cities.length > 0 ? (
            <div>
              <dt>{t('footballCities', lang)}</dt>
              <dd className="fb-cities">
                {cities.map((c) => (
                  <Link key={c.id} to={`/city/${c.id}`} state={{ highlightId: 'football' }} className="itinerary-stop">
                    {c.name[lang]} {data.FOOTBALL_CLUBS[c.id].length}
                  </Link>
                ))}
              </dd>
            </div>
          ) : null}
        </dl>
        <p className="itinerary-note">{t('footballLeagueNote', lang)}</p>
      </div>
    </section>
  )
}

/** Words that say what kind of club it is rather than which one. */
const GENERIC =
  /^(f\.?c\.?|a\.?f\.?c\.?|c\.?f\.?|s\.?c\.?|a\.?c\.?|f\.?k\.?|k\.?f\.?|n\.?k\.?|s\.?k\.?|p\.?f\.?c\.?|i\.?f\.?|b\.?k\.?|club|de|del|the|1\.|calcio|fotboll|football|ud|cd|rcd|gnk|hnk|hšk|ofk|ks|ss|ssc|us|acf|bsc|ofc|jk|fci|sl|gd|cs|vfb|rb|sv|tsg|as|ogc|rc|kv|ksv|kaa|rsc|if|ik|bk|sk|fk|pfk|psk)$/i

/** "Real Madrid CF" → "RM", "Liverpool F.C." → "L", for clubs without a free crest. */
function initials(name: string) {
  // A club known by its letters (PAOK, AEK, FCSB, CSKA) keeps them.
  const acronym = name.split(/\s+/).find((w) => /^[A-ZÀ-Ž]{3,5}$/.test(w) && !GENERIC.test(w))
  if (acronym) return acronym
  const words = name
    .replace(/[()]/g, '')
    .split(/[\s-]+/)
    .filter((w) => w && !GENERIC.test(w) && !/^\d+$/.test(w))
  const letters = (words.length ? words : name.split(/\s+/)).slice(0, 3).map((w) => w[0])
  return letters.join('').toUpperCase()
}

function Crest({ club }: { club: FootballClub }) {
  const [broken, setBroken] = useState(false)
  if (club.crest && !broken) {
    return (
      <img
        className="fb-crest"
        src={assetUrl(`/crests/${club.id.toLowerCase()}.png`)}
        alt=""
        loading="lazy"
        onError={() => setBroken(true)}
      />
    )
  }
  return (
    <span className="fb-crest fb-crest-initials" aria-hidden="true">
      {initials(club.name.en)}
    </span>
  )
}

function ClubCard({ club, league }: { club: FootballClub; league?: FootballLeague }) {
  const { lang } = useLanguage()
  const { stadium } = club
  return (
    <li className="fb-club">
      <Crest club={club} />
      <div className="fb-club-body">
        <p className="fb-club-name">
          <strong>{club.name[lang]}</strong>
          {lang === 'ko' ? <span className="fb-native"> {club.name.en}</span> : null}
        </p>
        <p className="fb-meta">
          {[
            club.founded ? t('footballFounded', lang).replace('{y}', String(club.founded)) : undefined,
            league?.name[lang],
          ]
            .filter(Boolean)
            .join(' · ')}
        </p>
        {stadium ? (
          <p className="fb-stadium">
            🏟 {stadium.name[lang]}
            {stadium.capacity ? ` · ${t('footballSeats', lang).replace('{n}', seats(stadium.capacity, lang))}` : ''}
            {club.suburb ? (
              <span className="fb-suburb">{t('footballSuburb', lang).replace('{t}', club.suburb[lang])}</span>
            ) : null}
          </p>
        ) : null}
        {club.note ? <p className="fb-meta">{club.note[lang]}</p> : null}
        <div className="fb-links">
          {stadium ? (
            <a
              href={`https://www.google.com/maps/search/?api=1&query=${stadium.lat},${stadium.lng}`}
              target="_blank"
              rel="noreferrer"
            >
              📍 {t('footballMap', lang)}
            </a>
          ) : null}
          {club.site ? (
            <a href={club.site} target="_blank" rel="noreferrer">
              🌐 {t('footballHome', lang)}
            </a>
          ) : null}
          {club.tour ? (
            <a href={club.tour.url} target="_blank" rel="noreferrer">
              🎟 {t(club.tour.kind === 'tour' ? 'footballTour' : 'footballMuseum', lang)}
            </a>
          ) : null}
        </div>
        {club.tour?.note ? <p className="fb-meta">{club.tour.note[lang]}</p> : null}
        {club.crest ? (
          <p className="fb-credit">
            {t('footballCrestCredit', lang)}:{' '}
            <a href={club.crest.source} target="_blank" rel="noreferrer">
              {club.crest.license === 'permission'
                ? t('footballCrestPermission', lang)
                : [
                    club.crest.author,
                    club.crest.license === 'Public domain' && lang === 'ko' ? '퍼블릭 도메인' : club.crest.license,
                    'Wikimedia Commons',
                  ]
                    .filter(Boolean)
                    .join(', ')}
            </a>
          </p>
        ) : null}
      </div>
    </li>
  )
}

/** The top-division clubs at home in or beside the city, with their stadiums, websites and tours. */
export function FootballClubsPanel({ cityId }: { cityId: string }) {
  const { lang } = useLanguage()
  const data = useFootball()
  const clubs = data?.FOOTBALL_CLUBS[cityId]
  // Arriving from a country's list of cities: the panel appears only once the data is in, so scroll then.
  const wanted = (useLocation().state as { highlightId?: string } | null)?.highlightId === 'football'
  useEffect(() => {
    if (wanted && clubs?.length) document.getElementById('football')?.scrollIntoView({ block: 'start' })
  }, [wanted, clubs])
  if (!data || !clubs?.length) return null
  const leagues = Object.values(data.FOOTBALL_LEAGUES).flat()

  return (
    <section id="football" className="transit-panel football-panel" aria-label={t('footballClubsTitle', lang)}>
      <p className="section-label" style={{ marginTop: 22 }}>
        {t('footballClubsTitle', lang)}
      </p>
      <div className="transit-card">
        <ul className="fb-clubs">
          {clubs.map((club) => (
            <ClubCard key={club.id} club={club} league={leagues.find((l) => l.key === club.league)} />
          ))}
        </ul>
        <p className="itinerary-note">{t('footballNote', lang)}</p>
      </div>
    </section>
  )
}
