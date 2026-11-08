// Tunisia's airports, stations and ports, with the ways into town (2026-11).
import type { Gateway } from '../../types'

export const GATEWAYS: Gateway[] = [
  {
    id: 'gw-tun',
    cityId: 'tunis',
    kind: 'air',
    name: '튀니스 카르타고 국제공항|Tunis–Carthage International Airport',
    code: 'TUN',
    image: '/gateways/gw-tun.jpg',
    intl: true,
    about: '시내 북동쪽 약 8km의 튀니지 최대 공항입니다.|Tunisia’s main airport, about 8 km north-east of the centre.',
    options: [
      {
        mode: 'taxi',
        name: '택시·호출 앱|Taxi or ride-hailing',
        route: '도착층 택시 승강장|Arrivals taxi rank',
        time: '메디나·시내까지 약 15~20분|About 15–20 min to the medina and centre',
      },
    ],
    note: '노란 택시는 미터기를 켜 달라고 하세요.|Ask yellow taxis to use the meter.',
    maps: 'Tunis–Carthage International Airport',
    checked: '2026-11',
  },
  {
    id: 'gw-la-goulette',
    cityId: 'tunis',
    kind: 'port',
    name: '라 굴레트 항|Port of La Goulette',
    image: '/gateways/gw-la-goulette.jpg',
    about: '튀니스 동쪽 바닷가의 항구로, 이탈리아·프랑스행 페리와 크루즈가 들어옵니다.|The port on the coast east of Tunis, for ferries and cruises to and from Italy and France.',
    options: [
      {
        mode: 'train',
        name: 'TGM 경전철|TGM light rail',
        route: '라 굴레트 → 튀니스 마린(시내)|La Goulette → Tunis Marine (centre)',
        time: '약 20분|About 20 min',
      },
      {
        mode: 'taxi',
        name: '택시|Taxi',
        route: '→ 시내 약 20분|→ centre about 20 min',
      },
    ],
    note: 'TGM은 카르타고·시디 부 사이드로도 이어집니다.|The TGM also runs on to Carthage and Sidi Bou Said.',
    maps: 'Port de La Goulette',
    checked: '2026-11',
  },
  {
    id: 'gw-mir',
    cityId: 'monastir',
    kind: 'air',
    name: '모나스티르 하비브 부르기바 국제공항|Monastir Habib Bourguiba International Airport',
    code: 'MIR',
    image: '/gateways/gw-mir.jpg',
    intl: true,
    about: '모나스티르와 수스 사이의 공항으로, 유럽 휴양객 전세기가 많이 들어옵니다.|The airport between Monastir and Sousse, busy with European holiday flights.',
    options: [
      {
        mode: 'train',
        name: '사헬 메트로 (근교 열차)|Sahel Metro (suburban train)',
        route: '공항역 → 모나스티르 · 수스 밥 제디드 · 마흐디아|Airport stop → Monastir, Sousse Bab Jedid and Mahdia',
      },
      {
        mode: 'taxi',
        name: '택시·호출 앱|Taxi or ride-hailing',
        route: '도착층 택시 승강장|Arrivals taxi rank',
        time: '모나스티르 약 10분 · 수스 약 20~30분|Monastir about 10 min, Sousse about 20–30 min',
      },
    ],
    note: '수스로 가려면 ‘수스 밥 제디드’ 방면 열차를 탑니다.|For Sousse, take trains signed Sousse Bab Jedid.',
    maps: 'Monastir Habib Bourguiba International Airport',
    checked: '2026-11',
  },
  {
    id: 'gw-nbe',
    cityId: 'sousse',
    kind: 'air',
    name: '엔피다 하마메트 국제공항|Enfidha–Hammamet International Airport',
    code: 'NBE',
    image: '/gateways/gw-nbe.jpg',
    intl: true,
    about: '수스 북쪽 약 40km의 공항으로, 수스·하마메트 휴양지 전세기가 들어옵니다.|The airport about 40 km north of Sousse, serving holiday flights to Sousse and Hammamet.',
    options: [
      {
        mode: 'taxi',
        name: '택시·호출 앱|Taxi or ride-hailing',
        route: '도착층 택시 승강장|Arrivals taxi rank',
        time: '수스까지 약 40~50분|About 40–50 min to Sousse',
      },
    ],
    maps: 'Enfidha–Hammamet International Airport',
    checked: '2026-11',
  },
]
