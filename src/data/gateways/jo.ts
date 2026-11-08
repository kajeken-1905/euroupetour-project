// Jordan's airports, stations and ports, with the ways into town (2026-11).
import type { Gateway } from '../../types'

export const GATEWAYS: Gateway[] = [
  {
    id: 'gw-amm',
    cityId: 'amman',
    kind: 'air',
    name: '퀸 알리아 국제공항|Queen Alia International Airport',
    code: 'AMM',
    image: '/gateways/gw-amm.jpg',
    intl: true,
    about: '암만 남쪽 약 35km의 요르단 최대 공항입니다.|Jordan’s main airport, about 35 km south of Amman.',
    options: [
      {
        mode: 'bus',
        name: '공항 급행버스 (사리야)|Airport Express bus (Sariyah)',
        route: '공항 → 4·5·6·7번 서클 → 북부 버스터미널(투바르부르)|Airport → 4th, 5th, 6th and 7th Circles → North Bus Station (Tabarbour)',
        time: '약 45분~1시간, 낮엔 30분마다|About 45 min–1 hr, every 30 min by day',
        ticket: '공항 매표소나 운전기사에게 냅니다(카드 가능).|Pay at the kiosk or the driver; cards accepted.',
      },
      {
        mode: 'taxi',
        name: '택시·호출 앱|Taxi or ride-hailing',
        route: '도착층 택시 승강장|Arrivals taxi rank',
        time: '시내까지 약 40~50분|About 40–50 min to the city',
      },
    ],
    maps: 'Queen Alia International Airport',
    site: 'https://www.qaiairport.com/',
    checked: '2026-11',
  },
  {
    id: 'gw-aqj',
    cityId: 'aqaba',
    kind: 'air',
    name: '아카바 킹 후세인 국제공항|King Hussein International Airport',
    code: 'AQJ',
    image: '/gateways/gw-aqj.jpg',
    intl: true,
    about: '아카바 시내 북쪽 약 10km의 공항으로, 유럽 저가 항공도 들어옵니다.|The airport about 10 km north of Aqaba, with some European low-cost flights.',
    options: [
      {
        mode: 'taxi',
        name: '택시·호출 앱|Taxi or ride-hailing',
        route: '도착층 택시 승강장|Arrivals taxi rank',
        time: '시내까지 약 15분|About 15 min to town',
      },
    ],
    maps: 'King Hussein International Airport Aqaba',
    checked: '2026-11',
  },
]
