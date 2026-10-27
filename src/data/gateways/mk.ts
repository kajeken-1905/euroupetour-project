// Airports, stations and ports, with the ways into the centre. Mostly routes and times; figures marked 약/about are estimates.
import type { Gateway } from '../../types'

export const GATEWAYS: Gateway[] = [
  {
    id: 'gw-skp',
    cityId: 'skopje',
    kind: 'air',
    name: '스코페 국제공항|Skopje International Airport',
    code: 'SKP',
    intl: true,
    about: '시내에서 동쪽 약 20km입니다.|About 20 km east of the city.',
    options: [
      {
        mode: 'bus',
        name: '공항 셔틀버스(Vardar Express)|Airport shuttle (Vardar Express)',
        route: '공항 → 스코페 시내|Airport → Skopje centre',
        time: '약 25분|About 25 min',
      },
      {
        mode: 'taxi',
        name: '택시·차량 호출|Taxi or ride-hailing',
        route: '도착층 승차장 또는 앱 호출|Arrivals rank or app',
      },
    ],
    maps: 'Skopje International Airport',
    site: 'https://skp.airports.com.mk/en-EN',
    checked: '2026-10',
  },
  {
    id: 'gw-ohd',
    cityId: 'ohrid',
    kind: 'air',
    name: '오흐리드 공항|Ohrid St. Paul the Apostle Airport',
    code: 'OHD',
    intl: true,
    about: '오흐리드 시내에서 북쪽 약 9km, 여름에 노선이 많습니다.|About 9 km north of Ohrid, busiest in summer.',
    options: [
      {
        mode: 'taxi',
        name: '택시·차량 호출|Taxi or ride-hailing',
        route: '도착층 승차장 또는 앱 호출|Arrivals rank or app',
      },
    ],
    maps: 'Ohrid Airport',
    site: 'https://ohd.airports.com.mk/en-EN',
    checked: '2026-10',
  },
]
