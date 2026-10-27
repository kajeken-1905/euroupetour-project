// Gateways for small territories and microstates.
import type { Gateway } from '../../types'

export const GATEWAYS: Gateway[] = [
  {
    id: 'gw-jer',
    cityId: 'st-helier',
    kind: 'air',
    name: '저지 공항|Jersey Airport',
    code: 'JER',
    intl: true,
    about: '세인트헬리어에서 서쪽 약 8km입니다.|About 8 km west of St Helier.',
    options: [
      {
        mode: 'bus',
        name: '15번 버스|Bus 15',
        route: '공항 → 세인트헬리어 리버레이션 스테이션|Airport → Liberation Station, St Helier',
        time: '약 25분|About 25 min',
      },
    ],
    maps: 'Jersey Airport',
    site: 'https://www.ports.je/',
    checked: '2026-10',
  },
]
