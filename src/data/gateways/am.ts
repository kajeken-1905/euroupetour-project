// Airports, stations and ports, with the ways into the centre. Mostly routes and times; figures marked 약/about are estimates.
import type { Gateway } from '../../types'

export const GATEWAYS: Gateway[] = [
  {
    id: 'gw-evn',
    cityId: 'yerevan',
    kind: 'air',
    name: '예레반 즈바르트노츠 공항|Yerevan Zvartnots International Airport',
    code: 'EVN',
    intl: true,
    about: '시내에서 서쪽 약 12km입니다.|About 12 km west of the city.',
    options: [
      {
        mode: 'bus',
        name: '201번 버스|Bus 201',
        route: '공항 → 시내|Airport → city centre',
        time: '약 30분|About 30 min',
      },
      {
        mode: 'taxi',
        name: '택시·차량 호출|Taxi or ride-hailing',
        route: '도착층 승차장 또는 앱 호출|Arrivals rank or app',
      },
    ],
    maps: 'Zvartnots International Airport',
    site: 'https://zvartnots.aero',
    checked: '2026-10',
  },
  {
    id: 'gw-lwn',
    cityId: 'gyumri',
    kind: 'air',
    name: '귬리 시라크 공항|Gyumri Shirak International Airport',
    code: 'LWN',
    intl: true,
    about: '귬리 시내에서 남쪽 약 5km의 작은 공항입니다.|A small airport about 5 km south of Gyumri.',
    options: [
      {
        mode: 'taxi',
        name: '택시·차량 호출|Taxi or ride-hailing',
        route: '도착층 승차장 또는 앱 호출|Arrivals rank or app',
      },
    ],
    maps: 'Shirak International Airport',
    checked: '2026-10',
  },
]
