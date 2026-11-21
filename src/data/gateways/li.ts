// Airports, stations and ports, with the ways into the centre. Mostly routes and times; figures marked 약/about are estimates.
// Liechtenstein has no airport, and few trains stop on its one line, so the card is Zurich Airport with the Swiss rail-and-bus links.
import type { Gateway } from '../../types'

export const GATEWAYS: Gateway[] = [
  {
    id: 'gw-zrh-li',
    cityId: 'vaduz',
    kind: 'air',
    name: '취리히 공항 (스위스)|Zurich Airport (Switzerland)',
    code: 'ZRH',
    image: '/gateways/gw-zrh.jpg',
    about:
      '리히텐슈타인엔 공항이 없어 대부분 취리히 공항에서 스위스 기차로 국경 역까지 간 뒤 버스로 들어옵니다.|Liechtenstein has no airport, so most visitors take a Swiss train from Zurich Airport to a border station and continue by bus.',
    options: [
      {
        mode: 'train',
        name: '기차 + 버스 (자르간스 경유)|Train and bus via Sargans',
        route: '취리히 공항 → 자르간스역(스위스) → LIEmobil 버스로 발처스·파두츠·샨|Zurich Airport → Sargans (Switzerland) → LIEmobil bus to Balzers, Vaduz and Schaan',
        time: '약 1시간 30분|About 1½ hours',
      },
      {
        mode: 'train',
        name: '기차 + 버스 (북스 경유)|Train and bus via Buchs',
        route: '취리히 공항 → 북스 SG역(스위스) → LIEmobil 버스로 샨·파두츠·에셴|Zurich Airport → Buchs SG (Switzerland) → LIEmobil bus to Schaan, Vaduz and Eschen',
      },
    ],
    note: '말분·트리젠베르크는 파두츠에서 버스를 갈아탑니다. 오스트리아 쪽에선 펠트키르히역에서 버스로 운터란트(에셴·셸렌베르크)에 닿습니다.|For Malbun and Triesenberg change buses in Vaduz. From Austria, buses run from Feldkirch station into the Unterland (Eschen, Schellenberg).',
    maps: 'Zurich Airport',
    site: 'https://www.sbb.ch/en',
    checked: '2026-11',
  },
]
