// Iceland's international airport. Figures marked 약/about are estimates.
import type { Gateway } from '../../types'

export const GATEWAYS: Gateway[] = [
  {
    id: 'gw-kef',
    cityId: 'reykjavik',
    kind: 'air',
    name: '케플라비크 국제공항|Keflavík International Airport',
    code: 'KEF',
    image: '/gateways/gw-kef.jpg',
    intl: true,
    about: '레이캬비크에서 남서쪽 약 50km 레이캬네스반도에 있습니다. 블루 라군이 가는 길에 있습니다.|About 50 km south-west of Reykjavík on the Reykjanes peninsula; the Blue Lagoon is on the way.',
    options: [
      {
        mode: 'bus',
        name: '공항버스 플라이버스|Flybus',
        route: '터미널 → 레이캬비크 BSÍ 버스터미널 (호텔까지 가는 Flybus+도 있음)|Terminal → BSÍ bus terminal in Reykjavík (Flybus+ continues to hotels)',
        time: '약 45분, 도착편마다 운행|About 45 min, meets every arrival',
        fare: '어른 약 4,000크로나, 6~15세 약 2,000크로나|About ISK 4,000 adults, ISK 2,000 ages 6–15',
      },
      {
        mode: 'bus',
        name: '시내버스 55번(Strætó)|Strætó bus 55',
        route: '공항 → 레이캬비크|Airport → Reykjavík',
        time: '약 1시간, 배차가 적음|About 1 hour, few departures',
        fare: '약 2,400크로나|About ISK 2,400',
      },
    ],
    maps: 'Keflavík International Airport',
    site: 'https://www.isavia.is/en/keflavik-airport',
    checked: '2026-10',
  },
]
