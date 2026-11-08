#!/usr/bin/env python3
"""Qatar (2026-11-08), done before Israel at the user's request because of their own Doha photos. Korean Foreign
Ministry page (0404.go.kr/ntnSafetyInfo/202/detail): level 3 (leave the country) nationwide since the 2026-03-08 raise for
seven Middle East countries; notices of 2026-10-22 and 10-29. User decision: full guide with the notice (like Russia and
Jordan). Visa-free 90 days with compulsory health insurance. City: Doha (with Al Zubarah and the Inland Sea). Run once."""
import add_daytrip_places3 as T
from add_daytrip_places import rd, wr
from add_slovakia_cities import H

DAY = ('근교 당일치기', 'Day trip')
RC = 'routes-central.ts'
R_AFTER = r"^  r\('madrid', 'casablanca', 'flight', 95\),\n"
COMMON = dict(country='qa', group_title=None, hubs_file='hubs-central.ts', hubs_before='  seville: {\n', itin_file='itinerary-iberia.ts',
              itin_before='  segovia: ', visit_file='visit-iberia.ts', visit_after=r"^  'funchal-h9': v\(.*\),\n", stay_before='  seville: [',
              transit_before='  seville: {', places=None, apps='', daytrips=[])
FIRST = '처음 가는 여행에 추천|Best for a first visit'


def C(**k):
    d = dict(COMMON)
    d.update(k)
    return d


def r(a, b, mode, mins, opts=''):
    return (RC, R_AFTER, f"  r('{a}', '{b}', '{mode}', {mins}{', ' + opts if opts else ''}),\n")


COUNTRY = """  {
    id: 'qa',
    region: 'mena',
    name: { ko: '카타르', en: 'Qatar' },
    nativeName: 'قطر · Qaṭar',
    flagImage: '/flags/qa.svg',
    landmarkImage: '/landmarks/landmark-qa.jpg',
    flag: '🇶🇦',
    blurb: {
      ko: '페르시아만에 튀어나온 반도 나라. 수도 도하에 전통 시장 수크 와키프와 이슬람 미술관, 사막의 장미 모양 국립 박물관이 있고, 유럽과 아시아를 잇는 경유지로도 많이 들릅니다.',
      en: 'The peninsula nation in the Persian Gulf—Doha has the Souq Waqif market, the Museum of Islamic Art and the desert-rose National Museum, and is a popular stopover between Europe and Asia.',
    },
    facts: {
      population: { ko: '약 300만 명 (2024년)', en: 'Approx. 3 million (2024)' },
      area: { ko: '약 1만 1,586 km²', en: 'Approx. 11,586 km²' },
      capital: { ko: '도하 (Doha)', en: 'Doha' },
      currency: { ko: '카타르 리얄 (QAR, QR) · 고정 환율 1달러 ≈ 3.64리얄', en: 'Qatari riyal (QAR, QR), pegged at about 3.64 to the US dollar' },
    },
    currencyCode: 'QAR',
    currencySymbol: 'QR',
    schengen: false,
    flagColors: {
      primary: '#8A1538',
      secondary: '#FFFFFF',
      accent: '#8A1538',
      background: '#E8F0FA',
      text: '#0B2A4A',
    },
    cityIds: [],
  },
"""

ESSENTIALS = """  qa: {
    // Korean Foreign Ministry travel-safety page for Qatar (0404.go.kr/ntnSafetyInfo/202/detail), 2026-11.
    emergency: [num('999', '경찰·구급·소방', 'Police, ambulance and fire')],
    embassy: {
      name: T('주카타르 대한민국 대사관', 'Korean Embassy in Qatar'),
      address: 'New Diplomatic Area, Al Shabab St., Onaiza-66, Doha',
      phone: '+974-4483-2238',
      afterHours: '+974-5001-1695',
      source: 'https://www.0404.go.kr/ntnSafetyInfo/202/detail',
    },
    power: T('220~240V · 50Hz, G형(영국식 3핀) 콘센트. 한국 플러그는 맞지 않아 어댑터가 필요합니다.', '220–240V, 50Hz, type G (British three-pin) sockets. Korean plugs do not fit; bring an adapter.'),
    tipping: T('팁은 의무가 아니지만 식당에선 10% 안팎을 두기도 합니다.', 'Tipping is optional; around 10% is common in restaurants.'),
    water: WATER_BOTTLED,
    shops: T('리얄은 미국 달러에 고정돼 있고 카드가 거의 어디서나 됩니다. 수크 와키프에선 값을 흥정합니다.', 'The riyal is pegged to the US dollar and cards are accepted almost everywhere; bargain in Souq Waqif.'),
    toilets: T('쇼핑몰·지하철역·박물관 화장실이 깨끗하고 무료입니다.', 'Malls, metro stations and museums have clean, free toilets.'),
    time: T('UTC+3, 서머타임 없음. 한국보다 6시간 늦습니다.', 'UTC+3 with no daylight saving: 6 hours behind Korea.'),
    safety: T('외교부 여행경보: 2026년 3월 8일부터 카타르 전역이 3단계(출국권고)입니다. 10월 22일·29일 중동 정세 악화에 대비한 신변 안전과 행동 요령 공지가 나와 있습니다. 공공장소에선 어깨와 무릎을 가리는 옷이 예의이고, 술은 허가받은 호텔·식당에서만 마십니다.', 'Korean travel alert: level 3 (leave the country) nationwide since 8 March 2026, with notices on 22 and 29 October about the worsening Middle East situation. Cover shoulders and knees in public, and drink alcohol only in licensed hotels and restaurants.'),
    entry: T('한국 여권은 90일까지 비자 없이 들어갈 수 있습니다. 모든 방문객은 도착 전에 카타르 의료보험(30일, 최소 50리얄, 보건부 사이트나 Metrash 앱)에 가입해야 합니다.', 'Korean passports can enter visa-free for up to 90 days. All visitors must buy Qatari health insurance before arrival (30 days, from QR 50, via the Ministry of Public Health site or the Metrash app).'),
    telecom: T('주요 통신사는 Ooredoo·Vodafone입니다. 공항에서 관광객용 유심을 살 수 있습니다.', 'Main operators: Ooredoo and Vodafone; tourist SIMs are sold at the airport.'),
  },
"""

TRANSIT = """  qa: {
    summary: {
      ko: '우측통행. 도하 지하철 3개 노선과 무료 트램(무셰이레브·루사일), 호출 앱으로 다닙니다. 사막과 북부는 차나 투어가 편합니다.',
      en: 'Drive on the right. Use the three Doha Metro lines, the free Msheireb and Lusail trams and ride-hailing apps; a car or tour is easiest for the desert and the north.',
    },
    drivingSide: 'right',
    longDistance: {
      ko: '하마드 국제공항은 유럽–아시아 노선의 큰 환승지로, 지하철 레드 라인으로 시내까지 약 20분입니다.',
      en: 'Hamad International is a major Europe–Asia hub, about 20 min from the city on the Metro Red Line.',
    },
    paymentTip: {
      ko: '지하철은 트래블 카드를 사서 충전하거나 1회권을 삽니다. 골드 클럽(1등 칸)은 요금이 다릅니다.',
      en: 'Buy a rechargeable travel card or single tickets for the Metro; Gold Club carriages cost more.',
    },
    apps: [],
  },
"""

NOTICE = """  // 0404.go.kr Qatar page: level 3 nationwide since 2026-03-08; notices of 2026-10-22 and 10-29.
  qa: {
    icon: '⚠️',
    title: { ko: '외교부 여행경보 · 3단계 출국권고', en: 'Korean travel alert · level 3, leave the country' },
    lines: [
      {
        ko: '중동 정세로 2026년 3월 8일부터 카타르 전역이 3단계(출국권고) 지역입니다. 여행 예정이면 취소하거나 미루고, 머무는 중이면 꼭 필요한 일이 아니면 출국하라는 단계입니다.',
        en: 'Because of the Middle East situation, all of Qatar has been at level 3 (leave the country) since 8 March 2026: cancel or postpone planned trips, and leave unless your stay is essential.',
      },
      {
        ko: '외교부는 2026년 10월 22일과 29일 중동 정세 악화에 대비한 신변 안전·행동 요령 공지를 냈습니다. 하마드 공항을 경유할 때도 출발 전 최신 공지를 꼭 확인하세요.',
        en: 'The ministry issued personal-safety and conduct notices on 22 and 29 October 2026; check the latest notices before you go, even when only transiting Hamad Airport.',
      },
    ],
    link: 'https://www.0404.go.kr/ntnSafetyInfo/202/detail',
  },
"""

CITIES = [
    C(id='doha', after='aqaba', ko='도하', en='Doha', native='الدوحة · ad-Dawḥa', lat=25.2854, lng=51.5310,
      blurb=['페르시아만의 반달 모양 해안에 고층 빌딩과 옛 시장이 함께 있는 카타르의 수도. 수크 와키프와 이슬람 미술관, 해안 산책로 코르니시를 걷고, 무료 트램이 다니는 무셰이레브를 둘러봅니다.',
             'Qatar’s capital on a crescent of the Gulf, where towers meet an old market—walk Souq Waqif, the Museum of Islamic Art and the Corniche, and ride the free tram around Msheireb.'],
      highlights=[
          H('수크 와키프', 'Souq Waqif', '흙벽 골목에 향신료·직물·매 가게와 식당이 모인 전통 시장으로, 밤이 되면 더 붐빕니다. 광장에 거대한 황금 엄지 조각이 있습니다.', 'The mud-walled market of spices, textiles, falcons and restaurants, busiest at night, with a giant golden thumb sculpture on its square.', 'Souq Waqif', 120, 180),
          H('이슬람 미술관', 'Museum of Islamic Art', 'I. M. 페이가 바다 위 인공 섬에 지은 미술관으로, 1,400년에 걸친 이슬람 미술품을 전시합니다.', 'I. M. Pei’s museum on its own island in the bay, with 1,400 years of Islamic art.', 'Museum of Islamic Art Doha', 120, 150),
          H('MIA 공원', 'MIA Park', '이슬람 미술관 옆 바닷가 공원으로, 야자수 산책로 너머로 웨스트베이 빌딩 숲이 보입니다.', 'The seaside park beside the museum, with palm-lined walks and views across to the West Bay towers.', 'MIA Park', 60, 90),
          H('카타르 국립 박물관', 'National Museum of Qatar', '장 누벨이 사막의 장미 결정을 본떠 지은 박물관으로, 카타르의 자연과 역사를 보여 줍니다.', 'Jean Nouvel’s museum shaped like a desert-rose crystal, telling Qatar’s natural history and story.', 'National Museum of Qatar', 120, 150),
          H('코르니시와 국기 광장', 'Corniche & Flag Plaza', '도하만을 따라 7km 이어지는 해안 산책로로, 세계 여러 나라 국기가 둥글게 선 광장이 있습니다.', 'The 7 km bayside promenade, with a plaza of flags from around the world.', 'Doha Corniche Flag Plaza', 60, 120),
          H('무셰이레브 다운타운', 'Msheireb Downtown Doha', '전통 건축을 현대식으로 다시 지은 동네로, 무료 트램과 옛 집을 고친 무셰이레브 박물관이 있습니다.', 'A neighbourhood rebuilt in modern-traditional style, with a free tram and the Msheireb Museums in restored heritage houses.', 'Msheireb Downtown Doha', 60, 90),
          H('알 파나르 나선 모스크', 'Abdulla Bin Zaid Al Mahmoud Islamic Cultural Center', '수크 와키프 옆 나선형 미너렛이 선 이슬람 문화 센터로, 도하의 상징 가운데 하나입니다.', 'The Islamic cultural centre with a spiral minaret beside Souq Waqif, one of Doha’s landmarks.', 'Abdulla Bin Zaid Al Mahmoud Islamic Cultural Center', 20, 30),
          H('더 펄 카타르', 'The Pearl-Qatar', '바다를 메워 만든 인공 섬으로, 요트 마리나 포르토 아라비아와 베네치아풍 카나트 쿼터가 있습니다.', 'The man-made island of the Porto Arabia yacht marina and the Venice-style Qanat Quartier.', 'Porto Arabia The Pearl Qatar', 90, 120),
          H('카타라 문화 마을', 'Katara Cultural Village', '원형 극장과 모스크, 갤러리, 해변이 모인 문화 지구입니다.', 'The cultural quarter of an amphitheatre, mosques, galleries and a beach.', 'Katara Cultural Village', 90, 120),
          H('빌라지오 몰', 'Villaggio Mall', '천장에 하늘을 그리고 실내 운하에 곤돌라가 다니는 베네치아풍 쇼핑몰입니다.', 'A Venice-style mall with a painted-sky ceiling and gondolas on an indoor canal.', 'Villaggio Mall', 60, 120),
          H('올드 도하 포트 (미나 지구)', 'Old Doha Port (Mina District)', '옛 항구를 고친 지구로, 알록달록한 건물 사이에 카페와 크루즈 터미널이 있습니다.', 'The old port turned district of colourful buildings, cafés and the cruise terminal.', 'Mina District Old Doha Port', 45, 60),
          H('카타르 국립 도서관', 'Qatar National Library', '렘 콜하스가 설계한 에듀케이션 시티의 도서관으로, 계단식 서가가 거대한 한 공간에 펼쳐집니다.', 'Rem Koolhaas’s library in Education City, its terraced shelves spread through one vast hall.', 'Qatar National Library', 45, 60),
          H('알 주바라 요새', 'Al Zubarah Fort', '북서쪽 해안의 18세기 진주 교역 도시 유적과 요새로, 세계유산입니다.', 'The fort and ruins of an 18th-century pearl-trading town on the north-west coast, a World Heritage site.', 'Al Zubarah Fort', 120, 180, group=DAY,
            n='도하에서 차로 약 1시간 20분입니다.|About 1 hr 20 by car from Doha.'),
          H('내해 (호르 알 아다이드)', 'Inland Sea (Khor Al Adaid)', '모래언덕이 바다와 만나는 남동쪽 끝의 자연보호구역으로, 사륜구동 사막 투어로 갑니다.', 'The nature reserve in the south-east where dunes meet the sea, reached on a 4×4 desert tour.', 'Khor Al Adaid', 300, 420, group=DAY,
            n='도하에서 차로 약 1시간 30분이며 모래언덕은 투어 차량으로만 들어갑니다.|About 1 hr 30 by car from Doha; the dunes are crossed only by tour 4×4s.'),
      ],
      hubs="    air: [['Hamad International (DOH)', '하마드 국제공항 (DOH)', '지하철 레드 라인으로 시내까지 약 20분|about 20 min to the city on the Metro Red Line']],\n    rail: [['Msheireb', '무셰이레브역', '도하 지하철 세 노선 환승역|interchange of all three Metro lines']],\n",
      itinerary=[6, 1, 7, 2, 3, 5, 4, 11, 8, 9, 10, 12, 13, 14],
      season='11~3월이 선선해 좋고, 6~9월은 40℃를 훌쩍 넘습니다. 라마단 기간엔 낮에 식당이 문을 닫습니다.|November–March is pleasantly cool; June–September soars past 40 °C. During Ramadan restaurants close by day.',
      stay=[('무셰이레브·수크 와키프', 'Msheireb & Souq Waqif', 'Msheireb Downtown Doha', FIRST, '시장과 박물관, 지하철 환승역이 걸어서 닿습니다.|The souq, museums and the Metro interchange on foot.'),
            ('웨스트베이', 'West Bay', 'West Bay Doha', '전망 좋은 호텔|Hotels with views', '고층 호텔이 모인 신도심으로, 코르니시와 지하철이 가깝습니다.|The high-rise hotel district near the Corniche and the Metro.')],
      routes=[r('istanbul', 'doha', 'flight', 245), r('athens', 'doha', 'flight', 255), r('rome', 'doha', 'flight', 330), r('paris', 'doha', 'flight', 375), r('cairo', 'doha', 'flight', 195), r('amman', 'doha', 'flight', 165)],
      transit=dict(modes=['metro', 'tram', 'rideshare', 'taxi', 'walk'], ko='도하 지하철과 무료 트램, 호출 앱(Uber·Careem·Karwa)으로 다닙니다. 한낮엔 걷기 어려울 만큼 덥습니다.', en='Use the Doha Metro, free trams and ride-hailing (Uber, Careem, Karwa); midday is too hot to walk far.')),
]

QA_ORDER = [('도하', 'Doha', ['doha'])]
TRIPS = {'doha': [('알 주바라 요새|Al Zubarah Fort', 13), ('내해 사막 투어|Inland Sea desert tour', 14)]}


def setup():
    k = rd('countries.ts')
    if "id: 'qa'," not in k:
        i = k.rindex('\n]\n\nexport function getCountry')
        k = k[:i + 1] + COUNTRY + k[i + 1:]
        wr('countries.ts', k)
    for f, block, anchor in [('essentials.ts', ESSENTIALS, '\n  xc: {'), ('transit.ts', TRANSIT, '\n  gi: {')]:
        s = rd(f)
        if '\n  qa: {' not in s:
            i = s.index(anchor)
            wr(f, s[:i + 1] + block + s[i + 1:])
    m = rd('countryIsoMap.ts')
    if "  qa: '634'," not in m:
        wr('countryIsoMap.ts', m.replace("  jo: '400',\n", "  jo: '400',\n  qa: '634',\n", 1))
    p = '../src/components/TravelBanNotice.tsx'
    s = open(p).read()
    if '\n  qa: {' not in s:
        i = s.index("  // 0404.go.kr notice of 2026-08-13")
        open(p, 'w').write(s[:i] + NOTICE + s[i:])


def finish():
    ids = [c['id'] for c in CITIES]
    k = rd('countries.ts')
    old = "cityIds: ['amman', 'petra', 'wadi-rum', 'aqaba', " + ', '.join(f"'{x}'" for x in ids) + "],"
    assert old in k, 'jordan list'
    k = k.replace(old, "cityIds: ['amman', 'petra', 'wadi-rum', 'aqaba'],")
    order = [x for g in QA_ORDER for x in g[2]]
    body = ("cityIds: [" + ', '.join(f"'{x}'" for x in order) + "],\n    cityGroups: [\n"
            + ''.join(f"      {{ title: {{ ko: '{ko}', en: '{en}' }}, cityIds: [{', '.join(repr(x) for x in g)}] }},\n" for ko, en, g in QA_ORDER) + '    ],')
    i = k.index("    id: 'qa',")
    j = k.index('cityIds: [],', i)
    wr('countries.ts', k[:j] + body + k[j + len('cityIds: [],'):])
    it = rd('itinerary-iberia.ts')
    for cid, trips in TRIPS.items():
        lst = next(c['itinerary'] for c in CITIES if c['id'] == cid)
        old = f"  {cid}: [{', '.join(map(str, lst))}],\n"
        assert it.count(old) == 1, cid
        days = [n for n in lst if not any(n in t[1:] for t in trips)]
        tr = ', '.join(f"['{t[0]}', {', '.join(map(str, t[1:]))}]" for t in trips)
        it = it.replace(old, f"  {cid}: {{ days: [['', {', '.join(map(str, days))}]], trips: [{tr}] }},\n")
    wr('itinerary-iberia.ts', it)


if __name__ == '__main__':
    setup()
    T.CITIES = CITIES
    T.main()
    finish()
