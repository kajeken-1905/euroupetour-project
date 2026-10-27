// Airports and main stations in Switzerland. The Swiss Travel Pass covers the trains and city transport
// below. Figures marked 약/about are estimates.
import type { Gateway } from '../../types'

export const GATEWAYS: Gateway[] = [
  {
    id: 'gw-zrh',
    cityId: 'zurich',
    kind: 'air',
    name: '취리히 공항|Zurich Airport',
    code: 'ZRH',
    intl: true,
    about: '시내에서 북쪽 약 10km. 터미널 아래 기차역에서 스위스 각지로 바로 갑니다.|About 10 km north of the centre, with a station under the terminal for trains all over Switzerland.',
    options: [
      {
        mode: 'train',
        name: '기차(SBB)|Train (SBB)',
        route: '공항역 → 취리히 중앙역. 루체른·베른·바젤행 직행도 있습니다.|Airport → Zürich HB; direct trains also run to Lucerne, Bern and Basel',
        time: '약 10~13분, 몇 분 간격|About 10–13 min, every few minutes',
        fare: '약 CHF 7, 스위스 트래블 패스로 무료|About CHF 7; free with a Swiss Travel Pass',
        ticket: 'SBB 앱·자판기. 스위스는 개찰구가 없으니 타기 전에 표를 사세요.|SBB app or machines; there are no gates, so buy before boarding.',
      },
      {
        mode: 'tram',
        name: '트램 10번|Tram 10',
        route: '공항 → 중앙역, 경치 보며 느리게|Airport → Hauptbahnhof, slower but scenic',
        time: '약 35분|About 35 min',
      },
    ],
    maps: 'Zurich Airport',
    site: 'https://www.flughafen-zuerich.ch/en/passengers',
    checked: '2026-10',
  },
  {
    id: 'gw-zurich-hb',
    cityId: 'zurich',
    kind: 'rail',
    highlightId: 'zurich-h9',
    name: '취리히 중앙역|Zürich Hauptbahnhof',
    about: '스위스 최대의 역. 루체른·베른·인터라켄·밀라노·뮌헨·파리행 열차가 출발합니다.|Switzerland’s largest station, with trains to Lucerne, Bern, Interlaken, Milan, Munich and Paris.',
    options: [
      {
        mode: 'walk',
        name: '걸어서|On foot',
        route: '반호프슈트라세를 따라 구시가지·취리히 호수까지 약 10~15분|Down the Bahnhofstrasse to the old town and the lake, about 10–15 min',
      },
      {
        mode: 'tram',
        name: '트램|Trams',
        route: '역 앞 반호프플라츠에서 파라데플라츠·벨뷰 방면|From Bahnhofplatz to Paradeplatz and Bellevue',
      },
    ],
    maps: 'Zürich HB',
    checked: '2026-10',
  },
  {
    id: 'gw-gva',
    cityId: 'geneva',
    kind: 'air',
    name: '제네바 공항|Geneva Airport',
    code: 'GVA',
    intl: true,
    about: '시내에서 북서쪽 약 5km, 프랑스 국경에 붙어 있습니다.|About 5 km north-west of the centre, right on the French border.',
    options: [
      {
        mode: 'train',
        name: '기차|Train',
        route: '공항역 → 제네바 코르나뱅역(시내 중심)|Airport → Genève-Cornavin (city centre)',
        time: '약 6~7분|About 6–7 min',
        fare: '수하물 찾는 곳 자판기에서 80분짜리 무료 교통권을 받을 수 있습니다.|Free 80-minute public transport ticket from the machine in the baggage hall',
      },
      {
        mode: 'bus',
        name: '시내버스 5·10번|Buses 5, 10',
        route: '공항 → 코르나뱅역·시내|Airport → Cornavin and the centre',
        fare: '같은 무료 교통권으로 탑니다.|Covered by the same free ticket',
      },
    ],
    maps: 'Geneva Airport',
    site: 'https://www.gva.ch/en',
    checked: '2026-10',
  },
  {
    id: 'gw-bsl',
    cityId: 'basel',
    kind: 'air',
    name: '바젤 뮐루즈 유로에어포트|EuroAirport Basel Mulhouse Freiburg',
    code: 'BSL',
    intl: true,
    about: '프랑스 땅에 있지만 스위스 쪽 출구가 따로 있는 공항입니다. 스위스로 가려면 스위스 쪽 출구로 나가세요.|On French soil with a separate Swiss exit; use the Swiss side for Basel.',
    options: [
      {
        mode: 'bus',
        name: '50번 버스|Bus 50',
        route: '스위스 쪽 출구 → 바젤 SBB역|Swiss exit → Basel SBB station',
        time: '약 20분|About 20 min',
        fare: '스위스 트래블 패스로 무료|Free with a Swiss Travel Pass',
      },
    ],
    maps: 'EuroAirport Basel Mulhouse Freiburg',
    site: 'https://www.euroairport.com/en/',
    checked: '2026-10',
  },
  {
    id: 'gw-geneve-cornavin',
    cityId: 'geneva',
    kind: 'rail',
    name: '제네바 코르나뱅역|Genève-Cornavin',
    image: '/gateways/gw-geneve-cornavin.jpg',
    about: '로잔·베른·취리히행 열차와 파리행 TGV 리리아가 출발하는 제네바 중앙역입니다.|Geneva’s main station, with trains to Lausanne, Bern and Zürich and TGV Lyria to Paris.',
    options: [
      {
        mode: 'walk',
        name: '걸어서|On foot',
        route: '레만 호수(몽블랑 다리)까지 약 5~10분|About 5–10 min to the lake (Pont du Mont-Blanc)',
      },
      {
        mode: 'tram',
        name: '트램·버스|Trams and buses',
        route: '역 앞 광장 → 구시가지·플랭팔레 방면|Station square → old town, Plainpalais',
      },
    ],
    maps: 'Genève-Cornavin',
    checked: '2026-10',
  },
]
