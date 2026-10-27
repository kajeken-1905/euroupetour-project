// Gateways for small territories and microstates.
import type { Gateway } from '../../types'

export const GATEWAYS: Gateway[] = [
  {
    id: 'gw-gci',
    cityId: 'st-peter-port',
    kind: 'air',
    name: '건지 공항|Guernsey Airport',
    code: 'GCI',
    intl: true,
    about: '세인트피터포트에서 남서쪽 약 5km입니다.|About 5 km south-west of St Peter Port.',
    options: [
      {
        mode: 'bus',
        name: '91·92번 버스|Buses 91, 92',
        route: '공항 → 세인트피터포트|Airport → St Peter Port',
        time: '약 20분|About 20 min',
      },
    ],
    maps: 'Guernsey Airport',
    site: 'https://www.ports.gg/',
    checked: '2026-10',
  },
]
