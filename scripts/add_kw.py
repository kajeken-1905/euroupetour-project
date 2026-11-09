#!/usr/bin/env python3
"""Kuwait (2026-11-09). Korean Foreign Ministry page (0404.go.kr/ntnSafetyInfo/216/detail): level 3 (leave the country)
nationwide since 2026-03-08; avoid the Iraqi border and the desert and islands (Gulf War landmines). User rule: level-3
Gulf countries get the full guide with a notice. City: Kuwait City. Run once."""
import add_daytrip_places3 as T
from add_daytrip_places import rd, wr
from add_slovakia_cities import H

DAY = ('근교 당일치기', 'Day trip')
RC = 'routes-central.ts'
R_AFTER = r"^  r\('amman', 'doha', 'flight', 165\),\n"
COMMON = dict(country='kw', group_title=None, hubs_file='hubs-central.ts', hubs_before='  seville: {\n', itin_file='itinerary-iberia.ts',
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
    id: 'kw',
    region: 'mena',
    name: { ko: '쿠웨이트', en: 'Kuwait' },
    nativeName: 'الكويت · al-Kuwayt',
    flagImage: '/flags/kw.svg',
    landmarkImage: '/landmarks/landmark-kw.jpg',
    flag: '🇰🇼',
    blurb: {
      ko: '페르시아만 북쪽 끝의 작은 산유국. 바닷가의 쿠웨이트 타워와 그랜드 모스크, 옛 시장 수크 알 무바라키야가 있는 쿠웨이트시티를 둘러봅니다.',
      en: 'The small oil state at the head of the Gulf—Kuwait City with the seaside Kuwait Towers, the Grand Mosque and the old Souq Al-Mubarakiya.',
    },
    facts: {
      population: { ko: '약 490만 명 (2024년)', en: 'Approx. 4.9 million (2024)' },
      area: { ko: '약 1만 7,800 km²', en: 'Approx. 17,800 km²' },
      capital: { ko: '쿠웨이트시티 (Kuwait City)', en: 'Kuwait City' },
      currency: { ko: '쿠웨이트 디나르 (KWD, KD) · 1디나르 = 1,000필스', en: 'Kuwaiti dinar (KWD, KD); 1 dinar = 1,000 fils' },
    },
    currencyCode: 'KWD',
    currencySymbol: 'KD',
    schengen: false,
    flagColors: {
      primary: '#007A3D',
      secondary: '#FFFFFF',
      accent: '#CE1126',
      background: '#E8F0FA',
      text: '#0B2A4A',
    },
    cityIds: [],
  },
"""

ESSENTIALS = """  kw: {
    // Korean Foreign Ministry travel-safety page for Kuwait (0404.go.kr/ntnSafetyInfo/216/detail), 2026-11.
    emergency: [num('112', '경찰·구급·소방', 'Police, ambulance and fire')],
    embassy: {
      name: T('주쿠웨이트 대한민국 대사관', 'Korean Embassy in Kuwait'),
      address: 'Diplomatic Zone 2, Street 303, Block 7A, Plot 6, Mishref, Kuwait',
      phone: '+965-2537-8621',
      afterHours: '+965-9919-3048',
      source: 'https://www.0404.go.kr/ntnSafetyInfo/216/detail',
    },
    power: T('240V · 50Hz, G형(영국식 3핀) 콘센트가 흔합니다. 한국 플러그는 어댑터가 필요합니다.', '240V, 50Hz, mostly type G (British three-pin) sockets; Korean plugs need an adapter.'),
    tipping: T('팁은 의무가 아니지만 식당에선 10% 안팎을 두기도 합니다.', 'Tipping is optional; around 10% is common in restaurants.'),
    water: WATER_BOTTLED,
    shops: T('카드가 거의 어디서나 됩니다. 디나르는 단위가 큰 통화라 값을 잘 확인하세요.', 'Cards are accepted almost everywhere. The dinar is a high-value currency, so check prices carefully.'),
    toilets: T('쇼핑몰·박물관 화장실을 이용합니다.', 'Use toilets in malls and museums.'),
    time: T('UTC+3, 서머타임 없음. 한국보다 6시간 늦습니다.', 'UTC+3 with no daylight saving: 6 hours behind Korea.'),
    safety: T('외교부 여행경보: 2026년 3월 8일부터 쿠웨이트 전역이 3단계(출국권고)입니다. 이라크 국경 지역은 피하고, 사막과 섬에는 걸프전 때 묻힌 지뢰가 남아 있을 수 있으니 길을 벗어나지 마세요. 술은 전면 금지이고, 공공장소에선 어깨와 무릎을 가립니다.', 'Korean travel alert: level 3 (leave the country) nationwide since 8 March 2026. Avoid the Iraqi border, and don’t stray off roads in the desert or on the islands, where Gulf War landmines may remain. Alcohol is banned outright; cover shoulders and knees in public.'),
    entry: T('한국 일반 여권은 비자가 필요합니다. 입국 3일(근무일) 전까지 내무부 전자 비자(kuwaitvisa.moi.gov.kw, 수수료 10디나르)를 받으면 3개월 머물 수 있고, 같은 조건이면 공항에서 도착 비자도 받을 수 있습니다. 여권은 6개월 이상 남아 있어야 합니다.', 'Ordinary Korean passports need a visa: apply for the Interior Ministry e-visa (kuwaitvisa.moi.gov.kw, KD 10) at least three working days ahead for a three-month stay; eligible travellers can also get a visa on arrival at the airport. Passports need six months’ validity.'),
    telecom: T('주요 통신사는 Zain·Ooredoo·stc입니다. 공항에서 유심·eSIM을 살 수 있습니다.', 'Main operators: Zain, Ooredoo and stc; SIMs and eSIMs are sold at the airport.'),
  },
"""

TRANSIT = """  kw: {
    summary: {
      ko: '우측통행. 철도와 지하철이 없어 택시·호출 앱과 시내버스로 다닙니다.',
      en: 'Drive on the right. There is no rail or metro—use taxis, ride-hailing and city buses.',
    },
    drivingSide: 'right',
    longDistance: {
      ko: '쿠웨이트 국제공항에서 시내까지 차로 약 20~30분입니다. 주변국은 비행기로 이어집니다.',
      en: 'Kuwait International Airport is about 20–30 min from the city by car; neighbouring countries are reached by air.',
    },
    paymentTip: {
      ko: '호출 앱(Uber·Careem)이 편하고, 택시는 타기 전에 요금을 정하세요.',
      en: 'Ride-hailing (Uber, Careem) is easiest; agree taxi fares before you set off.',
    },
    apps: [],
  },
"""

NOTICE = """  // 0404.go.kr Kuwait page: level 3 nationwide since 2026-03-08; no notices in the last two months.
  kw: {
    icon: '⚠️',
    title: { ko: '외교부 여행경보 · 3단계 출국권고', en: 'Korean travel alert · level 3, leave the country' },
    lines: [
      {
        ko: '중동 정세로 2026년 3월 8일부터 쿠웨이트 전역이 3단계(출국권고) 지역입니다. 여행 예정이면 취소하거나 미루고, 머무는 중이면 꼭 필요한 일이 아니면 출국하라는 단계입니다.',
        en: 'Because of the Middle East situation, all of Kuwait has been at level 3 (leave the country) since 8 March 2026: cancel or postpone planned trips, and leave unless your stay is essential.',
      },
      {
        ko: '이라크 국경 지역은 가지 말고, 사막과 섬에선 걸프전 지뢰가 남아 있을 수 있으니 정해진 길을 벗어나지 마세요. 출발 전 최신 공지를 꼭 확인하세요.',
        en: 'Stay away from the Iraqi border, and keep to roads in the desert and on the islands, where Gulf War landmines may remain. Check the latest notices before you go.',
      },
    ],
    link: 'https://www.0404.go.kr/ntnSafetyInfo/216/detail',
  },
"""

CITIES = [
    C(id='kuwait-city', after='alula', ko='쿠웨이트시티', en='Kuwait City', native='مدينة الكويت · Madīnat al-Kuwayt', lat=29.3759, lng=47.9774,
      blurb=['페르시아만 쿠웨이트만에 자리한 수도. 바닷가에 선 쿠웨이트 타워와 그랜드 모스크, 옛 시장 수크 알 무바라키야를 걷고, 문화 센터와 박물관을 둘러봅니다.',
             'The capital on Kuwait Bay—walk from the seaside Kuwait Towers to the Grand Mosque and the old Souq Al-Mubarakiya, and visit the cultural centres and museums.'],
      highlights=[
          H('쿠웨이트 타워', 'Kuwait Towers', '푸른 타일 구슬을 꿴 세 탑으로, 가장 높은 탑 전망대에서 걸프 바다와 시내가 보입니다.', 'Three towers strung with blue-tiled spheres; the tallest has a viewing deck over the Gulf and the city.', 'Kuwait Towers', 60, 90),
          H('그랜드 모스크', 'Grand Mosque', '쿠웨이트에서 가장 큰 모스크로, 정해진 시간에 무료 안내 투어를 합니다.', 'Kuwait’s largest mosque, with free guided tours at set times.', 'Grand Mosque Kuwait', 45, 60,
            n='긴 옷으로 팔다리를 가리고, 여성은 머리도 가립니다.|Cover arms and legs, and women cover their hair.'),
          H('수크 알 무바라키야', 'Souq Al-Mubarakiya', '대추야자·향신료·향과 전통 옷 가게가 모인 옛 시장으로, 시장 안 식당에서 쿠웨이트 요리를 먹어 봅니다.', 'The old market of dates, spices, incense and traditional dress, with restaurants serving Kuwaiti food.', 'Souq Al-Mubarakiya', 90, 120),
          H('셰이크 압둘라 알 살렘 문화 센터', 'Sheikh Abdullah Al Salem Cultural Centre', '자연사·과학·우주·이슬람 문명 전시관이 모인 대규모 박물관 단지입니다.', 'A vast museum complex of natural history, science, space and Islamic civilisation galleries.', 'Sheikh Abdullah Al Salem Cultural Centre', 150, 240),
          H('셰이크 자베르 알 아흐마드 문화 센터', 'Sheikh Jaber Al-Ahmad Cultural Centre', '보석함 같은 건물들로 이뤄진 오페라 하우스로, 공연이 없는 날엔 건물 투어가 있습니다.', 'The opera house of jewel-box buildings, with building tours on non-performance days.', 'Sheikh Jaber Al-Ahmad Cultural Centre', 60, 90),
          H('알 샤히드 공원', 'Al Shaheed Park', '도심 한가운데의 넓은 공원으로, 걸프전과 쿠웨이트 역사를 다룬 작은 박물관이 있습니다.', 'The large park in the heart of the city, with small museums on the Gulf War and Kuwaiti history.', 'Al Shaheed Park', 60, 90),
          H('타레크 라자브 박물관', 'Tareq Rajab Museum', '이슬람 서예·도자기·보석과 의상을 모은 개인 박물관입니다.', 'A private museum of Islamic calligraphy, ceramics, jewellery and costume.', 'Tareq Rajab Museum', 60, 90),
          H('리버레이션 타워', 'Liberation Tower', '1990년 이라크 침공에서 해방된 것을 기념해 이름 붙인 시내의 통신탑입니다(외관만).', 'The city’s telecom tower, named to mark liberation from the 1990 Iraqi invasion (exterior only).', 'Liberation Tower Kuwait', 15, 20),
      ],
      hubs="    air: [['Kuwait International (KWI)', '쿠웨이트 국제공항 (KWI)', '시내까지 차로 약 20~30분|about 20–30 min to the city by car']],\n",
      itinerary=[1, 3, 2, 8, 6, 4, 5, 7],
      season='11~3월이 좋습니다. 6~8월 낮은 50℃에 가까울 만큼 덥고, 봄엔 모래바람이 붑니다.|November–March is best; June–August days approach 50 °C, and spring brings sandstorms.',
      stay=[('샤르크·시내', 'Sharq & the centre', 'Sharq Kuwait City', FIRST, '수크·그랜드 모스크·바닷가가 가깝습니다.|Close to the souq, the Grand Mosque and the seafront.')],
      routes=[r('dubai', 'kuwait-city', 'flight', 110), r('doha', 'kuwait-city', 'flight', 80), r('riyadh', 'kuwait-city', 'flight', 95), r('istanbul', 'kuwait-city', 'flight', 240), r('cairo', 'kuwait-city', 'flight', 170), r('amman', 'kuwait-city', 'flight', 140)],
      transit=dict(modes=['bus', 'rideshare', 'taxi'], ko='호출 앱(Uber·Careem)과 택시로 다닙니다. 한낮엔 걷기 어려울 만큼 덥습니다.', en='Get around by ride-hailing (Uber, Careem) and taxi; midday is too hot to walk far.')),
]

KW_ORDER = [('쿠웨이트시티', 'Kuwait City', ['kuwait-city'])]
TRIPS = {}


def setup():
    k = rd('countries.ts')
    if "id: 'kw'," not in k:
        i = k.rindex('\n]\n\nexport function getCountry')
        k = k[:i + 1] + COUNTRY + k[i + 1:]
        wr('countries.ts', k)
    for f, block, anchor in [('essentials.ts', ESSENTIALS, '\n  xc: {'), ('transit.ts', TRANSIT, '\n  gi: {')]:
        s = rd(f)
        if '\n  kw: {' not in s:
            i = s.index(anchor)
            wr(f, s[:i + 1] + block + s[i + 1:])
    m = rd('countryIsoMap.ts')
    if "  kw: '414'," not in m:
        wr('countryIsoMap.ts', m.replace("  sa: '682',\n", "  sa: '682',\n  kw: '414',\n", 1))
    p = '../src/components/TravelBanNotice.tsx'
    s = open(p).read()
    if '\n  kw: {' not in s:
        i = s.index("  // 0404.go.kr notice of 2026-08-13")
        open(p, 'w').write(s[:i] + NOTICE + s[i:])


def finish():
    ids = [c['id'] for c in CITIES]
    k = rd('countries.ts')
    old = "cityIds: ['riyadh', 'jeddah', 'alula', " + ', '.join(f"'{x}'" for x in ids) + "],"
    assert old in k, 'saudi list'
    k = k.replace(old, "cityIds: ['riyadh', 'jeddah', 'alula'],")
    order = [x for g in KW_ORDER for x in g[2]]
    body = ("cityIds: [" + ', '.join(f"'{x}'" for x in order) + "],\n    cityGroups: [\n"
            + ''.join(f"      {{ title: {{ ko: '{ko}', en: '{en}' }}, cityIds: [{', '.join(repr(x) for x in g)}] }},\n" for ko, en, g in KW_ORDER) + '    ],')
    i = k.index("    id: 'kw',")
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
