// Airports, stations and ports, with the ways into the centre. Mostly routes and times; figures marked 약/about are estimates.
import type { Gateway } from '../../types'

export const GATEWAYS: Gateway[] = [
  {
    id: 'gw-lca',
    cityId: 'larnaca',
    kind: 'air',
    name: '라르나카 국제공항|Larnaca International Airport',
    code: 'LCA',
    image: '/gateways/gw-lca.jpg',
    intl: true,
    about: '키프로스의 주 관문 공항으로, 라르나카 시내에서 남서쪽 약 5km입니다.|Cyprus’s main airport, about 5 km south-west of Larnaca town.',
    options: [
      {
        mode: 'bus',
        name: '425번 버스|Bus 425',
        route: '공항 → 맥켄지 해변 → 피니쿠데스 → 라르나카 역|Airport → Mackenzie → Finikoudes → Larnaca Station',
      },
      {
        mode: 'bus',
        name: '429·430·432번 버스|Buses 429, 430, 432',
        route: '공항 → 라르나카 역|Airport → Larnaca Station',
      },
      {
        mode: 'bus',
        name: '공항 셔틀|Airport shuttles',
        route: '니코시아행 카프노스 공항 셔틀, 리마솔행 리마솔 공항 익스프레스(예약제)|Kapnos Airport Shuttle to Nicosia and Limassol Airport Express to Limassol (bookable)',
      },
      {
        mode: 'taxi',
        name: '택시|Taxi',
        route: '도착층(0층)으로 나와 오른쪽 승차장, 24시간|Rank to the right of the arrivals hall exit (level 0), 24 hours',
      },
    ],
    maps: 'Larnaca International Airport',
    site: 'https://www.hermesairports.com/',
    checked: '2026-11',
  },
  {
    id: 'gw-pfo',
    cityId: 'paphos',
    kind: 'air',
    name: '파포스 국제공항|Paphos International Airport',
    code: 'PFO',
    image: '/gateways/gw-pfo.jpg',
    intl: true,
    about: '파포스에서 동쪽 약 15km입니다.|About 15 km east of Paphos.',
    options: [
      {
        mode: 'bus',
        name: '612·613번 버스|Buses 612, 613',
        route: '공항 → 카토 파포스(항구, 612)·파포스 시내(613)|Airport → Kato Paphos harbour (612), Paphos town (613)',
        time: '약 30분|About 30 min',
      },
    ],
    maps: 'Paphos International Airport',
    site: 'https://www.hermesairports.com/',
    checked: '2026-10',
  },
]
