// Qatar's airport, with the ways into Doha. Photo: the user's own (2025-11).
import type { Gateway } from '../../types'

export const GATEWAYS: Gateway[] = [
  {
    id: 'gw-doh',
    cityId: 'doha',
    kind: 'air',
    name: '하마드 국제공항|Hamad International Airport',
    code: 'DOH',
    image: '/gateways/gw-doh.jpg',
    intl: true,
    about:
      '도하 동쪽 바닷가의 공항으로, 유럽과 아시아를 잇는 카타르항공의 허브입니다. 출국장 가운데 노란 ‘램프 곰’ 조형물이 명물입니다.|The airport on Doha’s eastern shore and Qatar Airways’ hub between Europe and Asia; the giant yellow Lamp Bear in the departures hall is its landmark.',
    options: [
      {
        mode: 'metro',
        name: '도하 지하철 레드 라인|Doha Metro Red Line',
        route: '공항 터미널역 → 무셰이레브(환승역)·웨스트베이|Airport T1 → Msheireb (interchange) and West Bay',
        time: '시내까지 약 20분|About 20 min to the city',
        ticket: '역 자판기에서 트래블 카드를 사거나 1회권을 삽니다.|Buy a travel card or single ticket from the station machines.',
      },
      {
        mode: 'taxi',
        name: '택시·호출 앱|Taxi or ride-hailing',
        route: '도착층 택시 승강장(카르와) 또는 Uber·Careem|Arrivals taxi rank (Karwa), or Uber and Careem',
        time: '시내까지 약 20~30분|About 20–30 min to the city',
      },
    ],
    note: '환승객은 비자 없이 공항 안에 머물 수 있습니다. 시내로 나가려면 입국 심사를 받고 카타르 의료보험이 필요합니다.|Transit passengers can stay airside without a visa; leaving the airport means immigration and the compulsory Qatari health insurance.',
    maps: 'Hamad International Airport',
    site: 'https://dohahamadairport.com/',
    checked: '2026-11',
  },
]
