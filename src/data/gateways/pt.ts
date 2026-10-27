// Airports and main stations in Portugal. Figures marked 약/about are estimates.
import type { Gateway } from '../../types'

export const GATEWAYS: Gateway[] = [
  {
    id: 'gw-lis',
    cityId: 'lisbon',
    kind: 'air',
    name: '리스본 움베르투 델가두 공항|Lisbon Humberto Delgado Airport',
    code: 'LIS',
    intl: true,
    about: '시내에서 북쪽 약 7km로 도심과 아주 가깝습니다. 저비용 항공은 터미널 2를 씁니다(무료 셔틀).|Only about 7 km north of the centre; low-cost flights use Terminal 2 (free shuttle).',
    options: [
      {
        mode: 'metro',
        name: '지하철 빨간선|Metro Red line',
        route: '아에로포르투역(터미널 1) → 알라메다(초록선)·사우 세바스티앙(파란선)에서 환승해 바이샤·호시우|Aeroporto (Terminal 1) → change at Alameda (Green) or São Sebastião (Blue) for Baixa and Rossio',
        time: '시내까지 약 25~30분|About 25–30 min to the centre',
        fare: '나베간트 카드(€0.50)에 충전한 재핑으로 1회 약 €1.70~1.90|About €1.70–1.90 a ride with Zapping on a navegante card (€0.50)',
        ticket: '역 자판기에서 카드를 사서 충전합니다.|Buy and top up the card at station machines.',
      },
      {
        mode: 'taxi',
        name: '택시·차량 호출|Taxi or ride-hailing',
        route: '도착층 승차장|Arrivals ranks',
        fare: '시내까지 약 €15~20|About €15–20 to the centre',
      },
    ],
    maps: 'Aeroporto Humberto Delgado',
    site: 'https://www.lisbon-airport.com/en/lisbon',
    checked: '2026-10',
  },
  {
    id: 'gw-lisboa-oriente',
    cityId: 'lisbon',
    kind: 'rail',
    name: '오리엔트역|Lisboa Oriente',
    about:
      '1998년 엑스포 때 산티아고 칼라트라바가 설계한 역. 포르투행 고속열차 알파 펜둘라르와 장거리 버스가 출발합니다.|Designed by Santiago Calatrava for Expo ’98; Alfa Pendular trains to Porto and long-distance coaches leave here.',
    options: [
      {
        mode: 'metro',
        name: '지하철 빨간선|Metro Red line',
        route: '→ 공항 3정거장, 시내는 알라메다 환승|→ Airport in three stops; change at Alameda for the centre',
      },
      {
        mode: 'train',
        name: '기차|Trains',
        route: '→ 산타 아폴로니아(알파마 아래) 약 7분|→ Santa Apolónia (below Alfama), about 7 min',
      },
    ],
    maps: 'Gare do Oriente Lisboa',
    checked: '2026-10',
  },
  {
    id: 'gw-opo',
    cityId: 'porto',
    kind: 'air',
    name: '포르투 프란시스쿠 사 카르네이루 공항|Porto Francisco Sá Carneiro Airport',
    code: 'OPO',
    intl: true,
    about: '시내에서 북서쪽 약 11km. 터미널 앞에 지하철역이 있습니다.|About 11 km north-west of the centre, with a metro station in front of the terminal.',
    options: [
      {
        mode: 'metro',
        name: '지하철 E선(보라)|Metro line E (Violet)',
        route: '아에로포르투역 → 트린다드(시내 중심, 상 벤투까지 D선 1정거장)|Aeroporto → Trindade (centre; São Bento is one stop on line D)',
        time: '약 30분|About 30 min',
        fare: 'Z4 구간권 약 €2.30 + 안단테 카드 €0.60|Z4 ticket about €2.30 + Andante card €0.60',
        ticket: '역 자판기에서 안단테 카드를 사서 충전하고, 탈 때마다 단말기에 댑니다.|Buy and load an Andante card at the machines and tap it each time you board.',
      },
      {
        mode: 'taxi',
        name: '택시·차량 호출|Taxi or ride-hailing',
        route: '도착층 승차장|Arrivals ranks',
        fare: '시내까지 약 €25~30|About €25–30 to the centre',
      },
    ],
    maps: 'Aeroporto Francisco Sá Carneiro',
    site: 'https://www.portoairport.pt/en',
    checked: '2026-10',
  },
  {
    id: 'gw-porto-sao-bento',
    cityId: 'porto',
    kind: 'rail',
    highlightId: 'porto-h6',
    name: '포르투 상 벤투역|Porto São Bento',
    about: '도루 강변 열차와 근교선이 출발합니다. 리스본행 장거리 열차는 캄파냐역에서 탑니다.|Douro valley and suburban trains; long-distance trains to Lisbon leave from Campanhã.',
    options: [
      {
        mode: 'metro',
        name: '지하철 D선|Metro line D',
        route: '→ 트린다드(공항행 E선 환승)·동 루이스 1세 다리 위층|→ Trindade (change for the airport line E) and across the top of the Dom Luís I bridge',
      },
      {
        mode: 'train',
        name: '기차|Trains',
        route: '→ 캄파냐역 약 5분(리스본행 환승)|→ Campanhã about 5 min (change for Lisbon)',
      },
    ],
    maps: 'Estação de São Bento Porto',
    checked: '2026-10',
  },
]
