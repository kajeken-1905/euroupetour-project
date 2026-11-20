// Airports, stations and ports, with the ways into the centre. Mostly routes and times; figures marked 약/about are estimates.
import type { Gateway } from '../../types'

export const GATEWAYS: Gateway[] = [
  {
    id: 'gw-mla',
    cityId: 'valletta',
    kind: 'air',
    name: '몰타 국제공항|Malta International Airport',
    code: 'MLA',
    image: '/gateways/gw-mla.jpg',
    intl: true,
    about: '몰타의 하나뿐인 공항으로, 루아에 있고 발레타에서 남쪽 약 8km입니다. 몰타엔 철도가 없어 버스나 택시로 갑니다.|Malta’s only airport, at Luqa about 8 km south of Valletta; there are no railways, so go by bus or taxi.',
    options: [
      {
        mode: 'bus',
        name: '공항 직행버스 TD4|Airport Direct TD4',
        route: '공항 → 발레타 · 고조 쾌속선 선착장|Airport → Valletta · Gozo Fast Ferry',
      },
      {
        mode: 'bus',
        name: '공항 직행버스 TD2·TD3|Airport Direct TD2, TD3',
        route: '공항 → 세인트줄리언스 (TD3은 슬리마·그지라·음시다 경유)|Airport → St Julian’s (TD3 via Sliema, Gżira and Msida)',
      },
      {
        mode: 'bus',
        name: '공항 직행버스 TD1|Airport Direct TD1',
        route: '공항 → 라바트 → 부지바 → 멜리하 → 치르케와(고조행 페리)|Airport → Rabat → Buġibba → Mellieħa → Ċirkewwa (Gozo ferry)',
      },
      {
        mode: 'taxi',
        name: '택시·차량 호출|Taxi or ride-hailing',
        route: '공식 택시는 몰타 택시(Malta Taxi)이고, 도착층에서 탑니다.|Malta Taxi is the official service, from arrivals',
      },
    ],
    maps: 'Malta International Airport',
    site: 'https://maltairport.com/transport/',
    checked: '2026-11',
  },
  {
    id: 'gw-cirkewwa',
    cityId: 'mellieha',
    kind: 'port',
    name: '치르케와 페리 터미널|Ċirkewwa Ferry Terminal',
    image: '/gateways/gw-cirkewwa.jpg',
    about: '몰타 본섬 북서쪽 끝의 항구로, 고조 채널 페리가 고조 음자르 항까지 약 25분에 건넙니다. 코미노행 작은 배도 이곳에서 뜹니다.|The port at the north-west tip of Malta, where Gozo Channel ferries cross to Mġarr on Gozo in about 25 minutes; small boats for Comino also leave from here.',
    options: [
      {
        mode: 'bus',
        name: '공항 직행버스 TD1|Airport Direct TD1',
        route: '공항 → 라바트 → 부지바 → 멜리하 → 치르케와|Airport → Rabat → Buġibba → Mellieħa → Ċirkewwa',
      },
      {
        mode: 'taxi',
        name: '택시|Taxi',
        route: '멜리하에서 차로 약 10분|About 10 minutes by road from Mellieħa',
      },
    ],
    note: '고조 채널 페리 표는 고조에서 돌아올 때 음자르에서 확인합니다. 몰타에서 출발할 땐 안내에 따라 탑니다.|Gozo Channel tickets are checked at Mġarr when you leave Gozo; from Malta, board as the staff direct you.',
    maps: 'Cirkewwa Ferry Terminal',
    site: 'https://www.gozochannel.com/ferry/fares/',
    checked: '2026-11',
  },
  {
    id: 'gw-mgarr',
    cityId: 'gozo',
    kind: 'port',
    name: '음자르 항구 (고조)|Mġarr Harbour (Gozo)',
    image: '/gateways/gw-mgarr.jpg',
    about: '고조 섬의 관문 항구로, 몰타 치르케와에서 오는 고조 채널 페리와 발레타에서 오는 쾌속선이 닿습니다.|Gozo’s gateway harbour, served by Gozo Channel ferries from Ċirkewwa and the fast ferry from Valletta.',
    options: [
      {
        mode: 'bus',
        name: '버스|Bus',
        route: '항구 → 빅토리아 버스터미널|Harbour → Victoria bus terminus',
      },
      {
        mode: 'taxi',
        name: '택시|Taxi',
        route: '항구 앞 승차장|Rank at the harbour',
      },
    ],
    note: '고조 채널 페리 표는 고조를 떠날 때 이곳 매표소나 온라인에서 사서 확인합니다.|Gozo Channel tickets are bought here or online and validated when you leave Gozo.',
    maps: 'Mgarr Harbour Gozo',
    site: 'https://www.gozochannel.com/ferry/fares/',
    checked: '2026-11',
  },
]
