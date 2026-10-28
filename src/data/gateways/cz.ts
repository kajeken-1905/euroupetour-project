// Airports and main stations in Czechia. Figures marked 약/about are estimates from travel guides.
import type { Gateway } from '../../types'

export const GATEWAYS: Gateway[] = [
  {
    id: 'gw-prg',
    cityId: 'prague',
    kind: 'air',
    name: '프라하 바츨라프 하벨 공항|Prague Václav Havel Airport',
    code: 'PRG',
    image: '/gateways/gw-prg.jpg',
    intl: true,
    about: '시내에서 서쪽 약 17km. 철도는 없고 버스와 지하철을 갈아탑니다.|About 17 km west of the centre; no railway, so you combine a bus with the metro.',
    options: [
      {
        mode: 'bus',
        name: '트롤리버스 59번 + 지하철 A선|Trolleybus 59 + Metro A',
        route: '터미널 → 나드라지 벨레슬라빈역(17분) → 지하철 A선으로 무스테크·스타로메스츠카(구시가지)|Terminal → Nádraží Veleslavín (17 min) → Metro A to Můstek, Staroměstská (old town)',
        time: '시내까지 약 35~40분|About 35–40 min to the centre',
        fare: '90분권 약 50코루나 (같은 표로 환승)|90-minute ticket about CZK 50, transfers included',
        ticket: '정류장 자판기·PID Lítačka 앱. 59번은 차내에서 비접촉 카드로도 삽니다. 종이표는 처음 탈 때 각인하세요.|Machines or the PID Lítačka app; contactless on board line 59. Stamp paper tickets on first use.',
      },
      {
        mode: 'bus',
        name: '공항 급행버스 AE|Airport Express (AE)',
        route: '터미널 1 → 프라하 중앙역|Terminal 1 → Praha hlavní nádraží',
        time: '약 35분|About 35 min',
        fare: '약 100코루나, 일반 교통권과 별도|About CZK 100, separate from city tickets',
        ticket: '차내에서 비접촉 카드|Contactless on board',
      },
    ],
    maps: 'Letiště Václava Havla Praha',
    site: 'https://www.prg.aero/en',
    checked: '2026-10',
  },
  {
    id: 'gw-praha-hln',
    cityId: 'prague',
    kind: 'rail',
    name: '프라하 중앙역|Praha hlavní nádraží',
    image: '/gateways/gw-praha-hln.jpg',
    about:
      '빈·베를린·부다페스트·크라쿠프행 국제열차가 출발합니다. 2층 옛 역사에는 아르누보 양식 판타 홀이 남아 있습니다.|International trains to Vienna, Berlin, Budapest and Kraków; the old upper building keeps the Art Nouveau Fanta Hall.',
    options: [
      {
        mode: 'metro',
        name: '지하철 C선|Metro C',
        route: '→ 무제움역(바츨라프 광장 위쪽)|→ Muzeum (top of Wenceslas Square)',
      },
      {
        mode: 'walk',
        name: '걸어서|On foot',
        route: '바츨라프 광장까지 약 10분, 구시가지 광장까지 약 20분|About 10 min to Wenceslas Square, 20 min to Old Town Square',
      },
    ],
    maps: 'Praha hlavní nádraží',
    checked: '2026-10',
  },
]
