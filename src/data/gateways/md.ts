// Airports, stations and ports, with the ways into the centre. Mostly routes and times; figures marked 약/about are estimates.
import type { Gateway } from '../../types'

export const GATEWAYS: Gateway[] = [
  {
    id: 'gw-kiv',
    cityId: 'chisinau',
    kind: 'air',
    name: '키시너우 국제공항|Chișinău International Airport',
    code: 'KIV',
    intl: true,
    about: '시내에서 남동쪽 약 13km입니다.|About 13 km south-east of the city.',
    options: [
      {
        mode: 'bus',
        name: '165번 버스·미니버스|Bus 165, minibuses',
        route: '공항 → 시내 중심|Airport → centre',
        time: '약 30분|About 30 min',
      },
      {
        mode: 'taxi',
        name: '택시·차량 호출|Taxi or ride-hailing',
        route: '도착층 승차장 또는 앱 호출|Arrivals rank or app',
      },
    ],
    maps: 'Aeroportul Internațional Chișinău',
    site: 'https://airport.md/en',
    checked: '2026-10',
  },
]
