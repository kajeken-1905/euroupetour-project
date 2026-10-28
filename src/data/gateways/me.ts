// Airports, stations and ports, with the ways into the centre. Mostly routes and times; figures marked 약/about are estimates.
import type { Gateway } from '../../types'

export const GATEWAYS: Gateway[] = [
  {
    id: 'gw-tgd',
    cityId: 'podgorica',
    kind: 'air',
    name: '포드고리차 공항|Podgorica Airport',
    code: 'TGD',
    image: '/gateways/gw-tgd.jpg',
    intl: true,
    about: '시내에서 남쪽 약 11km입니다.|About 11 km south of the city.',
    options: [
      {
        mode: 'taxi',
        name: '택시·차량 호출|Taxi or ride-hailing',
        route: '도착층 승차장 또는 앱 호출|Arrivals rank or app',
      },
    ],
    maps: 'Aerodrom Podgorica',
    site: 'https://montenegroairports.com/en/',
    checked: '2026-10',
  },
]
