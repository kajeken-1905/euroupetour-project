// Airports, stations and ports, with the ways into the centre. Mostly routes and times; figures marked 약/about are estimates.
import type { Gateway } from '../../types'

export const GATEWAYS: Gateway[] = [
  {
    id: 'gw-pfo',
    cityId: 'paphos',
    kind: 'air',
    name: '파포스 국제공항|Paphos International Airport',
    code: 'PFO',
    image: '/gateways/gw-pfo.jpg',
    intl: true,
    about: '파포스에서 동쪽 약 15km입니다.|About 15 km east of Paphos.',
    options: [
      {
        mode: 'bus',
        name: '612·613번 버스|Buses 612, 613',
        route: '공항 → 카토 파포스(항구, 612)·파포스 시내(613)|Airport → Kato Paphos harbour (612), Paphos town (613)',
        time: '약 30분|About 30 min',
      },
    ],
    maps: 'Paphos International Airport',
    site: 'https://www.hermesairports.com/',
    checked: '2026-10',
  },
]
