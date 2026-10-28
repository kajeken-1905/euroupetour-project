// Airports, stations and ports, with the ways into the centre. Mostly routes and times; figures marked 약/about are estimates.
import type { Gateway } from '../../types'

export const GATEWAYS: Gateway[] = [
  {
    id: 'gw-sjj',
    cityId: 'sarajevo',
    kind: 'air',
    name: '사라예보 국제공항|Sarajevo International Airport',
    code: 'SJJ',
    image: '/gateways/gw-sjj.jpg',
    intl: true,
    about: '시내에서 남서쪽 약 12km입니다.|About 12 km south-west of the city.',
    options: [
      {
        mode: 'bus',
        name: '공항 셔틀버스(Centrotrans)|Airport shuttle (Centrotrans)',
        route: '공항 → 시내·바슈차르시야(구시가지)|Airport → centre, Baščaršija (old town)',
        time: '약 30분|About 30 min',
      },
      {
        mode: 'taxi',
        name: '택시·차량 호출|Taxi or ride-hailing',
        route: '도착층 승차장 또는 앱 호출|Arrivals rank or app',
      },
    ],
    maps: 'Sarajevo International Airport',
    site: 'https://sia.ba',
    checked: '2026-10',
  },
  {
    id: 'gw-bnx',
    cityId: 'banja-luka',
    kind: 'air',
    name: '바냐루카 공항|Banja Luka International Airport',
    code: 'BNX',
    image: '/gateways/gw-bnx.jpg',
    intl: true,
    about: '시내에서 북쪽 약 23km입니다.|About 23 km north of the city.',
    options: [
      {
        mode: 'bus',
        name: '공항버스|Airport bus',
        route: '공항 → 바냐루카 버스터미널(도착편 맞춤)|Airport → Banja Luka bus station (timed with flights)',
      },
      {
        mode: 'taxi',
        name: '택시·차량 호출|Taxi or ride-hailing',
        route: '도착층 승차장 또는 앱 호출|Arrivals rank or app',
      },
    ],
    maps: 'Banja Luka International Airport',
    site: 'https://www.banjaluka-airport.com',
    checked: '2026-10',
  },
]
