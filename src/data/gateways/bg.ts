// Airports, stations and ports, with the ways into the centre. Mostly routes and times; figures marked 약/about are estimates.
import type { Gateway } from '../../types'

export const GATEWAYS: Gateway[] = [
  {
    id: 'gw-sof',
    cityId: 'sofia',
    kind: 'air',
    name: '소피아 공항|Sofia Airport',
    code: 'SOF',
    intl: true,
    about: '시내에서 동쪽 약 10km. 터미널 2에서 지하철이 출발합니다.|About 10 km east of the city, with the metro leaving from Terminal 2.',
    options: [
      {
        mode: 'metro',
        name: '지하철 M4|Metro M4',
        route: '터미널 2 → 세르디카(시내 중심)|Terminal 2 → Serdika (centre)',
        time: '약 25분|About 25 min',
      },
      {
        mode: 'taxi',
        name: '택시·차량 호출|Taxi or ride-hailing',
        route: '도착층 승차장 또는 앱 호출|Arrivals rank or app',
      },
    ],
    maps: 'Sofia Airport',
    site: 'https://www.sofia-airport.eu',
    checked: '2026-10',
  },
  {
    id: 'gw-var',
    cityId: 'varna',
    kind: 'air',
    name: '바르나 공항|Varna Airport',
    code: 'VAR',
    intl: true,
    about: '흑해 해변 도시 바르나에서 서쪽 약 8km입니다.|About 8 km west of the Black Sea city.',
    options: [
      {
        mode: 'bus',
        name: '409번 버스|Bus 409',
        route: '공항 → 바르나 시내·해변(골든 샌즈)|Airport → Varna centre, Golden Sands',
        time: '시내까지 약 30분|About 30 min to the centre',
      },
    ],
    maps: 'Varna Airport',
    site: 'https://www.varna-airport.bg/en',
    checked: '2026-10',
  },
]
