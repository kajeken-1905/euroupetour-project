import { useLanguage } from '../contexts/LanguageContext'
import { t } from '../i18n/ui'

type Text = { ko: string; en: string }

/** Countries the Korean government has made travel-ban areas (passport use restricted). */
const TRAVEL_BAN = new Set(['ua'])
const MOFA_ALERTS = 'https://www.0404.go.kr/travelAlert/apntStatus/stepTravelAlert'

/**
 * Korean Foreign Ministry notices for countries with high travel-alert levels or no consular help, shown
 * at the top of their pages. Wording follows the ministry's own pages (0404.go.kr) as of the month noted.
 */
const NOTICES: Record<string, { icon: string; title: Text; lines: Text[]; link: string }> = {
  // 0404.go.kr Russia page and the Embassy's 2026-03-20 notice (revised 2026-08-13).
  ru: {
    icon: '⚠️',
    title: { ko: '외교부 여행경보 · 특별여행주의보', en: 'Korean travel alert · special travel advisory' },
    lines: [
      {
        ko: '러시아 전역에 특별여행주의보가 내려져 있습니다. 우크라이나 접경 지역(로스토프·벨고로드·보로네시·브랸스크주, 오룔주 일부)과 북카프카스 7개 공화국은 3단계 출국권고 지역입니다.',
        en: 'A special travel advisory covers all of Russia. The regions bordering Ukraine (Rostov, Belgorod, Voronezh, Bryansk and part of Oryol) and the seven North Caucasus republics are at level 3, “leave the country”.',
      },
      {
        ko: '쿠르스크주 전체와 로스토프·벨고로드·보로네시·브랸스크주의 우크라이나 국경 30km 구간은 4단계 여행금지 지역(2027년 1월 31일까지)으로, 허가 없이 가면 여권법에 따라 처벌받을 수 있습니다.',
        en: 'All of Kursk and a 30 km strip along the Ukrainian border in Rostov, Belgorod, Voronezh and Bryansk are level 4 travel-ban areas (until 31 January 2027); entering without permission is punishable under the Passport Act.',
      },
      {
        ko: '한국과 러시아 사이 직항 항공편은 없습니다(2026년 10월 기준). 이 앱의 정보는 참고용이며, 출발 전 외교부 공지를 꼭 확인하세요.',
        en: 'There are no direct flights between Korea and Russia (as of October 2026). The information here is for reference; check the ministry’s notices before you go.',
      },
    ],
    link: 'https://0404.go.kr/ntnSafetyInfo/39/detail',
  },
  // 0404.go.kr Tunisia page: alert levels (last adjusted 2023-03-07) and notices of 2026-10-06 and 2026-10-23.
  tn: {
    icon: '⚠️',
    title: { ko: '외교부 여행경보 · 지역별 1~3단계', en: 'Korean travel alert · levels 1–3 by region' },
    lines: [
      {
        ko: '튀니스·비제르트·나불·수스·모나스티르·마흐디아·스팍스·제르바는 1단계(여행유의), 카이루안 등 그 밖의 지역은 2단계(여행자제), 알제리·리비아 접경 지역과 크사르 길란 이남 사막은 3단계(출국권고)입니다.',
        en: 'Tunis, Bizerte, Nabeul, Sousse, Monastir, Mahdia, Sfax and Djerba are level 1 (exercise caution); elsewhere, including Kairouan, is level 2 (refrain from travel); the Algerian and Libyan border areas and the desert south of Ksar Ghilane are level 3 (leave the country).',
      },
      {
        ko: '외교부는 2026년 10월 6일 제르바섬 방문 자제를, 10월 23일 시위 격화에 따른 신변 안전 유의를 공지했습니다. 출발 전 최신 공지를 꼭 확인하세요.',
        en: 'On 6 October 2026 the ministry advised against visiting Djerba, and on 23 October it warned of intensifying protests. Check the latest notices before you go.',
      },
    ],
    link: 'https://www.0404.go.kr/ntnSafetyInfo/233/detail',
  },
  // 0404.go.kr Egypt page: alert levels (last adjusted 2023-08-04, Libyan border noted 2026-06) and the 2026-10-25 notice.
  eg: {
    icon: '⚠️',
    title: { ko: '외교부 여행경보 · 지역별 1~3단계', en: 'Korean travel alert · levels 1–3 by region' },
    lines: [
      {
        ko: '카이로 등 나일강 유역 도시, 지중해 연안, 다합·샴엘셰이크는 1단계(여행유의), 서부 사막과 남시나이 일부(성 카테리나·타바)는 2단계(여행자제), 시나이반도 중·북부와 리비아 국경 30km 이내는 3단계(출국권고)입니다.',
        en: 'Cairo and the Nile-valley cities, the Mediterranean coast, Dahab and Sharm el-Sheikh are level 1 (exercise caution); the Western Desert and parts of south Sinai (St Catherine, Taba) are level 2 (refrain from travel); central and northern Sinai and within 30 km of the Libyan border are level 3 (leave the country).',
      },
      {
        ko: '외교부는 2026년 10월 25일 최근 중동 지역 긴장 고조에 따른 안전 유의를 공지했습니다. 출발 전 최신 공지를 꼭 확인하세요.',
        en: 'On 25 October 2026 the ministry issued a safety notice on rising tension in the Middle East. Check the latest notices before you go.',
      },
    ],
    link: 'https://www.0404.go.kr/ntnSafetyInfo/178/detail',
  },
  // 0404.go.kr Jordan page: special travel advisory (extended 2026-09-04), level 3 east of Zarqa, notices of 2026-10-22, 10-25, 11-05.
  jo: {
    icon: '⚠️',
    title: { ko: '외교부 여행경보 · 특별여행주의보', en: 'Korean travel alert · special travel advisory' },
    lines: [
      {
        ko: '요르단 전역에 특별여행주의보(여행 취소·연기 권고)가 내려져 있고, 자르카시 동쪽 지역은 3단계(출국권고)입니다.',
        en: 'A special travel advisory (cancel or postpone travel) covers Jordan, and the area east of Zarqa is level 3 (leave the country).',
      },
      {
        ko: '미국·이스라엘과 이란 사이 군사 충돌로 이란발 미사일·드론의 낙탄 위험이 있습니다. 공습경보가 울리면 실내로 대피하세요. 외교부는 2026년 10월 22일(중동 상황), 10월 25일(총격 사건), 11월 5일(암만 경찰관 피살 사건) 안전 공지를 냈습니다.',
        en: 'With military conflict between the US, Israel and Iran, debris from Iranian missiles and drones is a risk; shelter indoors if sirens sound. The ministry issued safety notices on 22 October (Middle East situation), 25 October (a shooting) and 5 November 2026 (a police officer killed in Amman).',
      },
      {
        ko: '이 앱의 정보는 참고용입니다. 출발 전 외교부 공지를 꼭 확인하세요.',
        en: 'The information here is for reference; check the ministry’s notices before you go.',
      },
    ],
    link: 'https://www.0404.go.kr/ntnSafetyInfo/165/detail',
  },
  // 0404.go.kr notice of 2026-08-13: alert periods extended to 2027-01-31.
  by: {
    icon: '⚠️',
    title: { ko: '외교부 여행경보 · 3단계 출국권고', en: 'Korean travel alert · level 3, leave the country' },
    lines: [
      {
        ko: '벨라루스 전역이 3단계 출국권고 지역입니다. 여행 예정이면 취소하거나 미루고, 머무는 중이면 꼭 필요한 일이 아니면 출국하라는 단계입니다.',
        en: 'All of Belarus is at level 3: cancel or postpone planned trips, and leave unless your stay is essential.',
      },
      {
        ko: '브레스트주·고멜주의 우크라이나 국경 30km 이내는 4단계 여행금지 지역(2027년 1월 31일까지)으로, 방문하면 여권법에 따라 처벌받을 수 있습니다.',
        en: 'Within 30 km of the Ukrainian border in the Brest and Gomel regions is a level 4 travel-ban area (until 31 January 2027); visiting is punishable under the Passport Act.',
      },
      {
        ko: '이 앱의 정보는 참고용이며 여행을 권하지 않습니다.',
        en: 'The information here is for reference only and is not a suggestion to travel.',
      },
    ],
    link: 'https://0404.go.kr/ntnSafetyInfo/333/detail',
  },
  // 0404.go.kr Cyprus page (사이프러스): south level 1, Varosha level 3, everything else (the north) level 2.
  xc: {
    icon: '⚠️',
    title: { ko: '국제적으로 승인되지 않은 지역', en: 'Not an internationally recognised state' },
    lines: [
      {
        ko: '북키프로스는 1983년 독립을 선언했지만 튀르키예만 국가로 인정하고 있습니다. 한국을 포함한 국제사회는 키프로스 공화국의 일부로 봅니다.',
        en: 'Northern Cyprus declared independence in 1983, but only Türkiye recognises it; Korea and the rest of the world regard it as part of the Republic of Cyprus.',
      },
      {
        ko: '한국 공관이 없어 사건·사고가 나도 영사 도움을 받기가 극히 어렵습니다. 외교부는 여행경보 2단계(여행자제)를 내리고 방문 자제를 강력히 권고합니다. 파마구스타의 바로샤 지역은 3단계 출국권고 지역입니다.',
        en: 'There is no Korean mission, so consular help in an emergency is extremely limited. Korea rates the north level 2, “avoid travel”, and strongly advises against visiting; Varosha in Famagusta is at level 3.',
      },
      {
        ko: '남쪽(키프로스 공화국)의 공항이나 항구로 들어와 그린라인 검문소로 넘어가세요. 튀르키예를 거쳐 북쪽으로 바로 들어가면 키프로스 공화국에서 불법 입국으로 보아 추방될 수 있습니다.',
        en: 'Enter through an airport or port in the south (Republic of Cyprus) and cross at a Green Line checkpoint. Flying straight into the north via Türkiye counts as illegal entry for the Republic of Cyprus and can lead to deportation.',
      },
    ],
    link: 'https://0404.go.kr/ntnSafetyInfo/258/detail',
  },
}

export const isTravelBan = (countryId: string) => TRAVEL_BAN.has(countryId)

/** Warning at the top of a travel-ban or high-alert country's pages. */
export function TravelBanNotice({ countryId }: { countryId: string }) {
  const { lang } = useLanguage()
  const notice = NOTICES[countryId]
  if (notice) {
    return (
      <section className="ban-notice" role="note" aria-label={notice.title[lang]}>
        <p className="ban-notice-title">
          {notice.icon} {notice.title[lang]}
        </p>
        {notice.lines.map((line) => (
          <p key={line.en} className="ban-notice-text">
            {line[lang]}
          </p>
        ))}
        <a className="plan-map-link" href={notice.link} target="_blank" rel="noopener noreferrer">
          {t('travelBanLink', lang)} ↗
        </a>
      </section>
    )
  }
  if (!isTravelBan(countryId)) return null
  return (
    <section className="ban-notice" role="note" aria-label={t('travelBanTitle', lang)}>
      <p className="ban-notice-title">⛔ {t('travelBanTitle', lang)}</p>
      <p className="ban-notice-text">{t('travelBanText', lang)}</p>
      <a className="plan-map-link" href={MOFA_ALERTS} target="_blank" rel="noopener noreferrer">
        {t('travelBanLink', lang)} ↗
      </a>
    </section>
  )
}
