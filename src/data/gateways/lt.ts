// Airports, stations and ports, with the ways into the centre. Mostly routes and times; figures marked 약/about are estimates.
import type { Gateway } from '../../types'

export const GATEWAYS: Gateway[] = [
  {
    id: 'gw-vno',
    cityId: 'vilnius',
    kind: 'air',
    name: '빌뉴스 공항|Vilnius Airport',
    code: 'VNO',
    image: '/gateways/gw-vno.jpg',
    intl: true,
    about: '시내에서 남쪽 약 6km로 가깝습니다.|Close in, about 6 km south of the centre.',
    options: [
      {
        mode: 'train',
        name: '기차|Train',
        route: '공항역 → 빌뉴스역(구시가지 걸어서 10분)|Airport → Vilnius station (10 min walk to the old town)',
        time: '약 8분|About 8 min',
      },
      {
        mode: 'bus',
        name: '1·2번 버스|Buses 1, 2',
        route: '공항 → 기차역·시내|Airport → station, centre',
      },
    ],
    maps: 'Vilnius Airport',
    site: 'https://www.vilnius-airport.lt/en',
    checked: '2026-10',
  },
  {
    id: 'gw-kun',
    cityId: 'kaunas',
    kind: 'air',
    name: '카우나스 공항|Kaunas Airport',
    code: 'KUN',
    image: '/gateways/gw-kun.jpg',
    intl: true,
    about: '시내에서 북동쪽 약 14km. 라이언에어 노선이 많습니다.|About 14 km north-east of the city, with many Ryanair routes.',
    options: [
      {
        mode: 'bus',
        name: '29G번 버스|Bus 29G',
        route: '공항 → 카우나스 시내|Airport → Kaunas centre',
        time: '약 30분|About 30 min',
      },
    ],
    maps: 'Kaunas Airport',
    site: 'https://www.kaunas-airport.lt/en',
    checked: '2026-10',
  },
]
