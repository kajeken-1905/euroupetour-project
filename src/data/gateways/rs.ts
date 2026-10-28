// Airports, stations and ports, with the ways into the centre. Mostly routes and times; figures marked 약/about are estimates.
import type { Gateway } from '../../types'

export const GATEWAYS: Gateway[] = [
  {
    id: 'gw-beg',
    cityId: 'belgrade',
    kind: 'air',
    name: '베오그라드 니콜라 테슬라 공항|Belgrade Nikola Tesla Airport',
    code: 'BEG',
    image: '/gateways/gw-beg.jpg',
    intl: true,
    about: '시내에서 서쪽 약 18km입니다.|About 18 km west of the city.',
    options: [
      {
        mode: 'bus',
        name: '공항 미니버스 A1|Airport minibus A1',
        route: '공항 → 슬라비야 광장|Airport → Slavija Square',
        time: '약 30분|About 30 min',
      },
      {
        mode: 'bus',
        name: '72번 버스|Bus 72',
        route: '공항 → 젤레니 베나츠(시내)|Airport → Zeleni Venac (centre)',
      },
    ],
    maps: 'Belgrade Nikola Tesla Airport',
    site: 'https://beg.aero/en',
    checked: '2026-10',
  },
  {
    id: 'gw-ini',
    cityId: 'nis',
    kind: 'air',
    name: '니시 콘스탄틴 대제 공항|Niš Constantine the Great Airport',
    code: 'INI',
    image: '/gateways/gw-ini.jpg',
    intl: true,
    about: '시내에서 서쪽 약 4km. 저비용 항공이 다닙니다.|About 4 km west of the city, served by low-cost airlines.',
    options: [
      {
        mode: 'bus',
        name: '시내버스|City bus',
        route: '공항 → 니시 시내|Airport → Niš centre',
        time: '약 15분|About 15 min',
      },
      {
        mode: 'taxi',
        name: '택시·차량 호출|Taxi or ride-hailing',
        route: '도착층 승차장 또는 앱 호출|Arrivals rank or app',
      },
    ],
    maps: 'Niš Airport',
    site: 'https://nis-airport.com/en',
    checked: '2026-10',
  },
]
