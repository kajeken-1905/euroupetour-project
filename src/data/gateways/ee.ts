// Airports, stations and ports, with the ways into the centre. Mostly routes and times; figures marked 약/about are estimates.
import type { Gateway } from '../../types'

export const GATEWAYS: Gateway[] = [
  {
    id: 'gw-tll',
    cityId: 'tallinn',
    kind: 'air',
    name: '탈린 레나르트 메리 공항|Tallinn Airport (Lennart Meri)',
    code: 'TLL',
    image: '/gateways/gw-tll.jpg',
    intl: true,
    about: '시내에서 약 4km로 아주 가깝습니다.|Very close, about 4 km from the centre.',
    options: [
      {
        mode: 'tram',
        name: '트램 4번|Tram 4',
        route: '공항 → 시내(구시가지 비루 문 근처)|Airport → centre (near the Viru Gate)',
        time: '약 15~20분|About 15–20 min',
      },
      {
        mode: 'bus',
        name: '2번 버스|Bus 2',
        route: '공항 → 시내·항구|Airport → centre, port',
      },
    ],
    maps: 'Tallinn Airport',
    site: 'https://www.tallinn-airport.ee/en/',
    checked: '2026-10',
  },
]
