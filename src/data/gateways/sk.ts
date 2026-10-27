// Airports, stations and ports, with the ways into the centre. Mostly routes and times; figures marked 약/about are estimates.
import type { Gateway } from '../../types'

export const GATEWAYS: Gateway[] = [
  {
    id: 'gw-bts',
    cityId: 'bratislava',
    kind: 'air',
    name: '브라티슬라바 공항|Bratislava Airport',
    code: 'BTS',
    intl: true,
    about: '시내에서 북동쪽 약 9km. 빈 공항까지도 버스로 1시간 안팎입니다.|About 9 km north-east of the centre; Vienna Airport is about an hour away by bus.',
    options: [
      {
        mode: 'bus',
        name: '61번 버스|Bus 61',
        route: '공항 → 브라티슬라바 중앙역|Airport → Bratislava main station',
        time: '약 25분|About 25 min',
      },
    ],
    maps: 'Letisko Bratislava',
    site: 'https://www.bts.aero/en/',
    checked: '2026-10',
  },
  {
    id: 'gw-ksc',
    cityId: 'kosice',
    kind: 'air',
    name: '코시체 공항|Košice International Airport',
    code: 'KSC',
    intl: true,
    about: '시내에서 남쪽 약 6km입니다.|About 6 km south of the city.',
    options: [
      {
        mode: 'bus',
        name: '시내버스|City bus',
        route: '공항 → 코시체 중앙역·시내|Airport → main station, centre',
        time: '약 20분|About 20 min',
      },
      {
        mode: 'taxi',
        name: '택시·차량 호출|Taxi or ride-hailing',
        route: '도착층 승차장 또는 앱 호출|Arrivals rank or app',
      },
    ],
    maps: 'Letisko Košice',
    site: 'https://www.airportkosice.sk/en/',
    checked: '2026-10',
  },
]
