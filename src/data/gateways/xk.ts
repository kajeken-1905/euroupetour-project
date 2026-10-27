// Airports, stations and ports, with the ways into the centre. Mostly routes and times; figures marked 약/about are estimates.
import type { Gateway } from '../../types'

export const GATEWAYS: Gateway[] = [
  {
    id: 'gw-prn',
    cityId: 'pristina',
    kind: 'air',
    name: '프리슈티나 아뎀 야샤리 공항|Pristina International Airport Adem Jashari',
    code: 'PRN',
    intl: true,
    about: '시내에서 남서쪽 약 15km입니다.|About 15 km south-west of the city.',
    options: [
      {
        mode: 'bus',
        name: '공항버스|Airport bus',
        route: '공항 → 프리슈티나 버스터미널|Airport → Pristina bus station',
      },
      {
        mode: 'taxi',
        name: '택시·차량 호출|Taxi or ride-hailing',
        route: '도착층 승차장 또는 앱 호출|Arrivals rank or app',
      },
    ],
    maps: 'Pristina International Airport',
    checked: '2026-10',
  },
]
