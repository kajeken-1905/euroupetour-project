// Airports, stations and ports, with the ways into the centre. Mostly routes and times; figures marked 약/about are estimates.
import type { Gateway } from '../../types'

export const GATEWAYS: Gateway[] = [
  {
    id: 'gw-tll',
    cityId: 'tallinn',
    kind: 'air',
    name: '탈린 레나르트 메리 공항|Tallinn Airport (Lennart Meri)',
    code: 'TLL',
    image: '/gateways/gw-tll.jpg',
    intl: true,
    about: '시내에서 약 4km로 아주 가깝습니다.|Very close, about 4 km from the centre.',
    options: [
      {
        mode: 'tram',
        name: '트램 4번|Tram 4',
        route: '공항 → 시내(구시가지 비루 문 근처)|Airport → centre (near the Viru Gate)',
        time: '약 15~20분|About 15–20 min',
      },
      {
        mode: 'bus',
        name: '2번 버스|Bus 2',
        route: '공항 → 시내·항구|Airport → centre, port',
      },
    ],
    maps: 'Tallinn Airport',
    site: 'https://www.tallinn-airport.ee/en/',
    checked: '2026-10',
  },
  {
    id: 'gw-tay',
    cityId: 'tartu',
    kind: 'air',
    name: '타르투 공항|Tartu Airport',
    code: 'TAY',
    image: '/gateways/gw-tay.jpg',
    about: '시내에서 약 10km 떨어진 작은 공항으로, 핀에어 헬싱키 노선(약 50분)이 하루 한두 번 다닙니다.|A small airport about 10 km from the city centre, with Finnair flights to Helsinki (about 50 min) once or twice a day.',
    options: [
      {
        mode: 'taxi',
        name: '택시·호출 앱|Taxi or ride-hailing',
        route: '도착층 택시 승강장|Arrivals taxi rank',
        time: '시내까지 약 15분, 공항 대기 택시는 포루스 택시|About 15 min to the centre; Forus Taxi waits at the rank',
      },
    ],
    maps: 'Tartu Airport',
    site: 'https://airport.ee/tartu-airport/',
    checked: '2026-11',
  },
  {
    id: 'gw-ure',
    cityId: 'kuressaare',
    kind: 'air',
    name: '쿠레사레 공항|Kuressaare Airport',
    code: 'URE',
    image: '/gateways/gw-ure.jpg',
    about: '사레마섬의 공항으로, 탈린 노선(약 40분)이 하루 한두 번 다니고 여름엔 헬싱키 노선도 있습니다.|Saaremaa’s airport, with flights to Tallinn (about 40 min) once or twice a day and to Helsinki in summer.',
    options: [
      {
        mode: 'taxi',
        name: '택시·호출 앱|Taxi or ride-hailing',
        route: '도착층 택시 승강장|Arrivals taxi rank',
        time: '시내까지 약 5~10분|About 5–10 min to town',
      },
    ],
    maps: 'Kuressaare Airport',
    site: 'https://airport.ee/en/kuressaare-airport/',
    checked: '2026-11',
  },
  {
    id: 'gw-tallinn-port',
    cityId: 'tallinn',
    kind: 'port',
    name: '탈린 구시가 항구(여객 터미널 A·D)|Tallinn Old City Harbour (terminals A and D)',
    image: '/gateways/gw-tallinn-port.jpg',
    about: '헬싱키행 페리(A·D 터미널)와 마리에함을 거치는 스톡홀름행 탈링크 야간 페리(D 터미널)가 떠나는 항구로, 구시가 바로 북쪽입니다.|The harbour just north of the old town, with ferries to Helsinki (terminals A and D) and Tallink’s overnight ferry to Stockholm via Mariehamn (terminal D).',
    options: [
      {
        mode: 'tram',
        name: '트램 2번|Tram 2',
        route: '‘바나사담’ 정류장 → A 터미널 약 100m|‘Vanasadam’ stop → terminal A about 100 m',
      },
      {
        mode: 'bus',
        name: '버스 19·25·66번|Buses 19, 25, 66',
        route: '‘레이시사다마 D-터미널’ 정류장 → D 터미널 약 90m|‘Reisisadama D-terminal’ stop → terminal D about 90 m',
      },
      {
        mode: 'walk',
        name: '걷기|Walk',
        route: '구시가 → 항구|Old town → harbour',
      },
    ],
    note: '배편마다 터미널이 다르니 승선권을 확인하세요.|Each line uses its own terminal; check your ticket.',
    maps: 'Tallinn Old City Harbour',
    site: 'https://www.ts.ee/en/',
    checked: '2026-11',
  },
  {
    id: 'gw-virtsu',
    cityId: 'kuressaare',
    kind: 'port',
    name: '비르츠 페리 항구(무후·사레마행)|Virtsu ferry port (to Muhu and Saaremaa)',
    image: '/gateways/gw-virtsu.jpg',
    about: '본토 비르츠와 무후섬 쿠이바스투를 잇는 페리 항구로, 탈린–쿠레사레 장거리 버스도 이 배로 건넙니다. 무후섬과 사레마섬은 둑길로 이어져 있습니다.|The mainland port linking Virtsu with Kuivastu on Muhu; Tallinn–Kuressaare coaches cross on this ferry, and Muhu is joined to Saaremaa by a causeway.',
    options: [
      {
        mode: 'boat',
        name: '비르츠–쿠이바스투 페리|Virtsu–Kuivastu ferry',
        route: '비르츠 → 쿠이바스투(무후섬)|Virtsu → Kuivastu (Muhu)',
      },
      {
        mode: 'bus',
        name: '탈린–쿠레사레 장거리 버스|Tallinn–Kuressaare coach',
        route: '버스째 페리에 타고 건넘|The coach rides the ferry across',
      },
    ],
    note: '차를 가져가면 온라인 표가 우선 승선입니다. 금요일 오후 본토발, 일요일 오후 섬발은 붐빕니다.|With a car, online tickets get priority boarding; mainland departures on Friday afternoons and island departures on Sunday afternoons are busy.',
    maps: 'Virtsu ferry port',
    site: 'https://www.praamid.ee/en/',
    checked: '2026-11',
  },
]
