// Airports, stations and ports, with the ways into the centre. Mostly routes and times; figures marked 약/about are estimates.
import type { Gateway } from '../../types'

export const GATEWAYS: Gateway[] = [
  {
    id: 'gw-rix',
    cityId: 'riga',
    kind: 'air',
    name: '리가 국제공항|Riga International Airport',
    code: 'RIX',
    image: '/gateways/gw-rix.jpg',
    intl: true,
    about: '발트 3국 최대 공항, 시내에서 서쪽 약 10km입니다.|The Baltics’ busiest airport, about 10 km west of the centre.',
    options: [
      {
        mode: 'bus',
        name: '22번 버스|Bus 22',
        route: '공항 → 시내(구시가지 근처)|Airport → city centre (near the old town)',
        time: '약 30분|About 30 min',
      },
      {
        mode: 'taxi',
        name: '택시·차량 호출|Taxi or ride-hailing',
        route: '도착층 승차장 또는 앱 호출|Arrivals rank or app',
      },
    ],
    maps: 'Riga International Airport',
    site: 'https://www.riga-airport.com/en',
    checked: '2026-10',
  },
]
