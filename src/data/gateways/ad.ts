// Airports, stations and ports, with the ways into the centre. Mostly routes and times; figures marked 약/about are estimates.
// Andorra has no airport with regular flights of note and no railway, so the cards are the two airports the Andbus coaches serve.
import type { Gateway } from '../../types'

export const GATEWAYS: Gateway[] = [
  {
    id: 'gw-bcn-ad',
    cityId: 'andorra-la-vella',
    kind: 'air',
    name: '바르셀로나 공항 (스페인)|Barcelona Airport (Spain)',
    code: 'BCN',
    image: '/gateways/gw-bcn.jpg',
    about:
      '안도라엔 철도가 없고 정기편이 많은 공항도 없어, 대부분 바르셀로나 공항에서 직행버스로 들어옵니다.|Andorra has no railway and no airport with many scheduled flights, so most visitors come in by direct coach from Barcelona Airport.',
    options: [
      {
        mode: 'bus',
        name: 'Andbus 직행버스|Andbus coach',
        route: '바르셀로나 공항 T1(1층 7~12번 승강장)·T2(T2B 도착층 밖) → 안도라라베야 등 안도라 곳곳|Barcelona Airport T1 (ground floor, platforms 7–12) and T2 (outside T2B arrivals) → Andorra la Vella and stops across Andorra',
        time: '약 3시간|About 3 hours',
        ticket: '온라인·앱에서 미리 삽니다.|Buy ahead online or in the app.',
      },
      {
        mode: 'taxi',
        name: '택시·전용 차량|Taxi or private transfer',
        route: '바르셀로나 공항 → 안도라 각 마을|Barcelona Airport → any Andorran town',
      },
    ],
    note: '버스는 안도라 안 여러 정류장과 일부 호텔 앞에 섭니다. 솔데우·파스 데 라 카사 쪽 스키 마을도 연결됩니다.|The coaches stop at many points in Andorra and at some hotels, including the ski villages of Soldeu and Pas de la Casa.',
    maps: 'Barcelona–El Prat Airport',
    site: 'https://www.andbus.ad/en',
    checked: '2026-11',
  },
  {
    id: 'gw-tls-ad',
    cityId: 'pas-de-la-casa',
    kind: 'air',
    name: '툴루즈 블라냑 공항 (프랑스)|Toulouse–Blagnac Airport (France)',
    code: 'TLS',
    image: '/gateways/gw-tls.jpg',
    about:
      '프랑스 쪽에서 들어올 땐 툴루즈 공항이 가장 가깝습니다. 파스 데 라 카사가 프랑스 국경 바로 앞 첫 마을입니다.|From the French side Toulouse is the closest airport; Pas de la Casa is the first village over the border.',
    options: [
      {
        mode: 'bus',
        name: 'Andbus 직행버스|Andbus coach',
        route: '툴루즈 공항 도착층 B홀 → 파스 데 라 카사·안도라라베야 등|Toulouse Airport, arrivals Hall B → Pas de la Casa, Andorra la Vella and other stops',
        time: '약 3시간 30분|About 3½ hours',
        ticket: '온라인·앱에서 미리 삽니다.|Buy ahead online or in the app.',
      },
      {
        mode: 'train',
        name: '기차 + 버스|Train and bus',
        route: '툴루즈 → 로스피탈레 프레 랑도르역(프랑스) → 버스로 파스 데 라 카사|Toulouse → L’Hospitalet-près-l’Andorre (France) → bus to Pas de la Casa',
      },
    ],
    maps: 'Aéroport Toulouse-Blagnac',
    site: 'https://www.andbus.ad/en',
    checked: '2026-11',
  },
]
