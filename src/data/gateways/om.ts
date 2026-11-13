// Oman's airports, with the ways into the city (2026-11).
import type { Gateway } from '../../types'

export const GATEWAYS: Gateway[] = [
  {
    id: 'gw-mct',
    cityId: 'muscat',
    kind: 'air',
    name: '무스카트 국제공항|Muscat International Airport',
    code: 'MCT',
    image: '/gateways/gw-mct.jpg',
    intl: true,
    about: '시내 서쪽의 공항으로, 2018년 문을 연 큰 터미널을 씁니다.|The airport west of the city, using the large terminal opened in 2018.',
    options: [
      {
        mode: 'bus',
        name: 'Mwasalat 공항 버스|Mwasalat airport bus',
        route: '도착층 앞 → 루위·무트라|Arrivals → Ruwi and Mutrah',
        time: '무트라까지 약 1시간|About an hour to Mutrah',
      },
      {
        mode: 'taxi',
        name: '택시·호출 앱|Taxi or ride-hailing',
        route: '도착층 택시 승강장|Arrivals taxi rank',
        time: '무트라까지 약 30분|About 30 min to Mutrah',
      },
    ],
    maps: 'Muscat International Airport',
    checked: '2026-11',
  },
  {
    id: 'gw-sll',
    cityId: 'salalah',
    kind: 'air',
    name: '살랄라 국제공항|Salalah International Airport',
    code: 'SLL',
    image: '/gateways/gw-sll.jpg',
    about: '시내 북쪽 가까이의 공항입니다.|The airport just north of the city.',
    options: [
      {
        mode: 'taxi',
        name: '택시·호출 앱|Taxi or ride-hailing',
        route: '도착층 택시 승강장|Arrivals taxi rank',
        time: '시내까지 약 10분|About 10 min to the city',
      },
    ],
    maps: 'Salalah International Airport',
    checked: '2026-11',
  },
]
