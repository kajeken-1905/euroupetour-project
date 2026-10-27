// Gateways for small territories and microstates.
import type { Gateway } from '../../types'

export const GATEWAYS: Gateway[] = [
  {
    id: 'gw-fae',
    cityId: 'vagar',
    kind: 'air',
    name: '바가르 공항|Vágar Airport',
    code: 'FAE',
    intl: true,
    about: '페로 제도의 유일한 공항. 수도 토르스하운까지 해저 터널로 이어집니다.|The Faroes’ only airport, linked to Tórshavn by an undersea tunnel.',
    options: [
      {
        mode: 'bus',
        name: '300번 버스|Bus 300',
        route: '공항 → 토르스하운|Airport → Tórshavn',
        time: '약 45분|About 45 min',
      },
    ],
    maps: 'Vágar Airport',
    site: 'https://www.fae.fo/en',
    checked: '2026-10',
  },
]
