// Night trains that stop in the app's cities, checked against the operators' own pages in 2026-10.
// `lines` lists the app cities a train calls at, in order; stops outside the app are left out, and where
// sources disagree on intermediate stops only the end points are kept.
import type { NightTrain } from '../types'

const NIGHTJET = { operator: 'ÖBB', url: 'https://www.nightjet.com/en' }

export const NIGHT_TRAINS: NightTrain[] = [
  {
    id: 'nightjet',
    name: 'Nightjet',
    ...NIGHTJET,
    lines: [
      ['vienna', 'salzburg', 'innsbruck'],
      ['vienna', 'hamburg'],
      ['vienna', 'berlin'],
      ['vienna', 'dresden'],
      ['vienna', 'florence', 'rome'],
      ['vienna', 'venice'],
      ['vienna', 'zurich'],
      ['vienna', 'amsterdam'],
      ['vienna', 'brussels'],
      ['graz', 'zurich'],
      ['zurich', 'hamburg'],
      ['innsbruck', 'hamburg'],
      ['innsbruck', 'amsterdam'],
      ['munich', 'hamburg'],
      ['munich', 'rome'],
      ['salzburg', 'rome'],
      ['munich', 'milan'],
      ['munich', 'venice'],
      ['munich', 'budapest'],
      ['munich', 'zagreb'],
    ],
    note: '빈·뮌헨·취리히를 중심으로 하는 오스트리아 철도의 야간열차. 노선마다 운행 요일이 다릅니다.|Austrian Railways night trains centred on Vienna, Munich and Zürich; days of operation vary by route.',
  },
  {
    id: 'european-sleeper',
    name: 'European Sleeper',
    operator: 'European Sleeper',
    url: 'https://www.europeansleeper.eu/',
    lines: [
      ['paris', 'brussels', 'berlin'],
      ['brussels', 'amsterdam', 'berlin', 'prague'],
      ['brussels', 'milan'],
    ],
    note: '주 3회 안팎 운행. 브뤼셀–밀라노 노선은 시기에 따라 경유지가 바뀝니다.|Runs about three times a week; the Brussels–Milan route changes its stops by season.',
  },
  {
    id: 'caledonian-sleeper',
    name: 'Caledonian Sleeper',
    operator: 'Caledonian Sleeper',
    url: 'https://www.sleeper.scot/',
    lines: [
      ['london', 'edinburgh'],
      ['london', 'glasgow'],
      ['london', 'inverness'],
    ],
    note: '런던 유스턴역에서 밤에 출발합니다. 애버딘·포트윌리엄 편도 있습니다.|Leaves London Euston at night; there are also cars for Aberdeen and Fort William.',
  },
  {
    id: 'night-riviera',
    name: 'Night Riviera',
    operator: 'GWR',
    url: 'https://www.gwr.com/travelling-with-us/night-riviera-sleeper',
    lines: [['london', 'st-ives']],
    note: '런던 패딩턴–펜잔스. 세인트어스역에서 내려 세인트아이브스선으로 갈아탑니다. 토요일 밤은 운행하지 않습니다.|London Paddington–Penzance; change at St Erth for the St Ives branch. No train on Saturday nights.',
  },
  {
    id: 'intercites-de-nuit',
    name: 'Intercités de nuit',
    operator: 'SNCF',
    url: 'https://www.sncf-connect.com/en-en/intercites',
    lines: [
      ['paris', 'marseille', 'nice'],
      ['paris', 'toulouse'],
      ['paris', 'montpellier'],
    ],
    note: '파리 오스테를리츠역 출발. 노선마다 운행 기간이 정해져 있어 시기를 확인하세요.|From Paris Austerlitz; each line runs for set periods, so check dates.',
  },
  {
    id: 'intercity-notte',
    name: 'Intercity Notte',
    operator: 'Trenitalia',
    url: 'https://www.trenitalia.com/en/connections/intercity-notte.html',
    lines: [
      ['milan', 'lecce'],
      ['turin', 'lecce'],
      ['rome', 'lecce'],
      ['milan', 'palermo'],
      ['milan', 'siracusa'],
      ['rome', 'palermo'],
      ['rome', 'siracusa'],
    ],
    note: '시칠리아행은 메시나 해협을 열차째 배로 건넙니다. 로마–레체는 주말에만 운행합니다.|Sicily trains cross the Strait of Messina on the ferry; Rome–Lecce runs at weekends only.',
  },
  {
    id: 'sj-night',
    name: 'SJ Nattåg',
    operator: 'SJ',
    url: 'https://www.sj.se/en',
    lines: [['stockholm', 'kiruna']],
    note: '지금은 보덴에서 낮 열차로 갈아탑니다. 2026년 12월부터 나르비크까지 직통이 다시 다닐 예정입니다.|For now you change to a day train at Boden; through running to Narvik is due back from December 2026.',
  },
  {
    id: 'snalltaget',
    name: 'Snälltåget',
    operator: 'Snälltåget',
    url: 'https://www.snalltaget.se/en',
    lines: [['berlin', 'hamburg', 'copenhagen', 'malmo', 'stockholm']],
    note: '계절 운행이며 운행 기간은 해마다 달라집니다.|Seasonal; the running period changes every year.',
  },
  {
    id: 'vy-night',
    name: 'Vy nattog',
    operator: 'Vy',
    url: 'https://www.vy.no/en',
    lines: [['oslo', 'bergen']],
    note: '약 7시간. 침대칸은 2인실을 통째로 예약합니다.|About 7 hours; sleeper cabins are booked whole, for two.',
  },
  {
    id: 'sj-nord-night',
    name: 'SJ Nord nattog',
    operator: 'SJ Nord',
    url: 'https://www.sj.no/en',
    lines: [['oslo', 'trondheim']],
    note: '토요일 밤은 운행하지 않습니다. 트론헤임–보되 야간열차도 있습니다.|No train on Saturday nights; a Trondheim–Bodø night train also runs.',
  },
  {
    id: 'vr-night',
    name: 'Santa Claus Express',
    operator: 'VR',
    url: 'https://www.vr.fi/en/night-trains',
    lines: [
      ['helsinki', 'tampere', 'rovaniemi'],
      ['turku', 'tampere', 'rovaniemi'],
    ],
    note: '라플란드행 야간열차. 차를 싣는 칸도 있습니다.|Night trains to Lapland, with car-carrier wagons.',
  },
  {
    id: 'pkp-night',
    name: 'PKP Intercity',
    operator: 'PKP Intercity',
    url: 'https://www.intercity.pl/en/',
    lines: [
      ['gdansk', 'zakopane'],
      ['gdansk', 'krakow'],
    ],
    note: '그디니아 출발 열차가 그단스크에 섭니다. 쿠셋·침대칸은 예약해야 합니다.|Trains from Gdynia call at Gdańsk; couchettes and sleepers need a reservation.',
  },
  {
    id: 'en-chopin',
    name: 'EN Chopin',
    operator: 'ČD · PKP Intercity',
    url: 'https://www.cd.cz/en/',
    lines: [['warsaw', 'krakow', 'prague']],
  },
  {
    id: 'regiojet-night',
    name: 'RegioJet',
    operator: 'RegioJet',
    url: 'https://www.regiojet.com/',
    lines: [['prague', 'kosice']],
    note: '약 8~9시간. 침대칸과 좌석칸이 있습니다.|About 8–9 hours, with sleepers and seats.',
  },
  {
    id: 'budapest-bucharest',
    name: 'Ister',
    operator: 'MÁV · CFR',
    url: 'https://www.mavcsoport.hu/en',
    lines: [['budapest', 'brasov', 'bucharest']],
  },
  {
    id: 'cfr-night',
    name: 'CFR',
    operator: 'CFR Călători',
    url: 'https://www.cfrcalatori.ro/en/',
    lines: [
      ['bucharest', 'cluj-napoca'],
      ['bucharest', 'chisinau'],
    ],
    note: '쿠셋·침대칸이 있습니다. 키시너우행은 몰도바 철도와 함께 운행합니다.|Couchettes and sleepers; the Chișinău train runs with Moldovan Railways.',
  },
  {
    id: 'bdz-night',
    name: 'BDŽ',
    operator: 'BDŽ',
    url: 'https://www.bdz.bg/en',
    lines: [
      ['sofia', 'varna'],
      ['sofia', 'istanbul'],
    ],
    note: '이스탄불행은 국경에서 오래 섭니다. 열차마다 침대칸 유무가 달라 예약할 때 확인하세요.|The Istanbul train stops long at the border; sleeper availability varies, so check when booking.',
  },
  {
    id: 'hzpp-night',
    name: 'HŽPP',
    operator: 'HŽPP',
    url: 'https://www.hzpp.hr/en',
    lines: [['zagreb', 'split']],
    note: '여름 외에는 일부 요일에 운행하지 않습니다.|Outside summer it skips some days of the week.',
  },
  {
    id: 'belgrade-bar',
    name: 'Beograd–Bar',
    operator: 'Srbijavoz · ŽPCG',
    url: 'https://srbijavoz.rs/',
    lines: [['belgrade', 'podgorica']],
    note: '종점은 바르입니다. 산악 구간 경치가 좋습니다.|Ends at Bar; the mountain section is scenic.',
  },
  {
    id: 'caucasus-night',
    name: 'Tbilisi–Yerevan',
    operator: 'Georgian Railway · SCR',
    url: 'https://www.railway.ge/en/',
    lines: [['batumi', 'tbilisi', 'yerevan']],
    note: '하루걸러 운행합니다. 여름에는 바투미에서, 그 밖에는 트빌리시에서 출발합니다.|Runs every other night; from Batumi in summer, otherwise from Tbilisi.',
  },
  {
    id: 'baku-tbilisi',
    name: 'Baku–Tbilisi',
    operator: 'ADY',
    url: 'https://ady.az/en',
    lines: [['baku', 'tbilisi']],
    note: '2026년 5월 운행 재개.|Resumed in May 2026.',
  },
  {
    id: 'uz-night',
    name: 'Ukrzaliznytsia',
    operator: 'Ukrzaliznytsia',
    url: 'https://booking.uz.gov.ua/en',
    lines: [
      ['kyiv', 'lviv'],
      ['kyiv', 'odesa'],
    ],
  },
  {
    id: 'rzd-night',
    name: 'RZD',
    operator: 'RZD',
    url: 'https://www.rzd.ru/',
    lines: [
      ['moscow', 'saint-petersburg'],
      ['moscow', 'kazan'],
      ['khabarovsk', 'vladivostok'],
    ],
  },
]

/** Night trains calling at a city, each with the other app cities it links to (in line order). */
export function getCityNightTrains(cityId: string): { train: NightTrain; to: string[] }[] {
  const out: { train: NightTrain; to: string[] }[] = []
  for (const train of NIGHT_TRAINS) {
    const to: string[] = []
    for (const line of train.lines) {
      if (!line.includes(cityId)) continue
      for (const stop of line) if (stop !== cityId && !to.includes(stop)) to.push(stop)
    }
    if (to.length) out.push({ train, to })
  }
  return out
}

/** Night-train lines that call at any of a country's cities, grouped by train. */
export function getCountryNightTrains(cityIds: string[]): { train: NightTrain; lines: string[][] }[] {
  const out: { train: NightTrain; lines: string[][] }[] = []
  for (const train of NIGHT_TRAINS) {
    const lines = train.lines.filter((line) => line.some((stop) => cityIds.includes(stop)))
    if (lines.length) out.push({ train, lines })
  }
  return out
}
