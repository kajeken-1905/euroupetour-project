#!/usr/bin/env python3
"""Lebanon (2026-11-13). Korean Foreign Ministry page (0404.go.kr/ntnSafetyInfo/40/detail): level 3 (leave the country)
nationwide, with travel-ban areas to 2027-01-31: the southern border strip, South and Nabatieh governorates, parts of Dahiyeh
(not the airport or the M51 road), Baalbek-Hermel and West Bekaa/Rashaya. Full guide like Israel, covering only places outside
the ban areas (so no Baalbek, Sidon or Tyre). Cities: Beirut (Jeita, Harissa), Byblos (Batroun), Bsharri (Cedars, Qadisha). Run once."""
import add_daytrip_places3 as T
from add_daytrip_places import rd, wr
from add_slovakia_cities import H

DAY = ('근교 당일치기', 'Day trip')
RC = 'routes-central.ts'
R_AFTER = r"^  r\('amman', 'doha', 'flight', 165\),\n"
COMMON = dict(country='lb', group_title=None, hubs_file='hubs-central.ts', hubs_before='  seville: {\n', itin_file='itinerary-iberia.ts',
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
    id: 'lb',
    region: 'mena',
    name: { ko: '레바논', en: 'Lebanon' },
    nativeName: 'لبنان · Lubnān',
    flagImage: '/flags/lb.svg',
    landmarkImage: '/landmarks/landmark-lb.jpg',
    flag: '🇱🇧',
    blurb: {
      ko: '지중해와 레바논산맥 사이의 작은 나라. 수도 베이루트와 페니키아 항구 비블로스, 세계유산 카디샤 계곡과 백향목 숲이 있습니다.',
      en: 'A small country between the Mediterranean and the Lebanon mountains—Beirut, the Phoenician port of Byblos, and the World Heritage Qadisha Valley and cedar forest.',
    },
    facts: {
      population: { ko: '약 580만 명 (2024년)', en: 'Approx. 5.8 million (2024)' },
      area: { ko: '약 1만 450 km²', en: 'Approx. 10,450 km²' },
      capital: { ko: '베이루트 (Beirut)', en: 'Beirut' },
      currency: { ko: '레바논 파운드 (LBP, LL) · 달러도 널리 통용', en: 'Lebanese pound (LBP, LL); US dollars widely used' },
    },
    currencyCode: 'LBP',
    currencySymbol: 'LL',
    schengen: false,
    flagColors: {
      primary: '#ED1C24',
      secondary: '#FFFFFF',
      accent: '#00A651',
      background: '#E8F0FA',
      text: '#0B2A4A',
    },
    cityIds: [],
  },
"""

ESSENTIALS = """  lb: {
    // Korean Foreign Ministry travel-safety page for Lebanon (0404.go.kr/ntnSafetyInfo/40/detail), 2026-11.
    emergency: [num('112', '경찰', 'Police'), num('140', '구급(적십자)', 'Ambulance (Red Cross)'), num('175', '소방', 'Fire')],
    embassy: {
      name: T('주레바논 대한민국 대사관', 'Korean Embassy in Lebanon'),
      address: 'Bldg. 4, Elias Sarkis Road 1209, Yarzeh, Baabda',
      phone: '+961-5-922-846',
      afterHours: '+961-81-007-491',
      source: 'https://www.0404.go.kr/ntnSafetyInfo/40/detail',
    },
    power: T('220V · 50Hz. 콘센트 모양이 여러 가지라 멀티 어댑터를 챙기세요. 정전이 잦습니다.', '220V, 50Hz; socket types vary, so bring a universal adapter. Power cuts are frequent.'),
    tipping: T('식당에선 5~10%, 호텔 포터에겐 1달러 정도를 줍니다.', 'Leave 5–10% in restaurants and about $1 for hotel porters.'),
    water: WATER_BOTTLED,
    shops: T('달러가 널리 쓰이고, 가게는 시장 환율로 파운드를 받습니다. 공식 환율과 시장 환율 차이가 크니 값을 잘 확인하세요. 1만 5천 달러가 넘는 현금이나 귀중품은 출국 때 신고합니다.', 'US dollars are widely used, and shops take pounds at the market rate—the gap from the official rate is large, so check prices. Declare cash over US$15,000 or valuables when leaving.'),
    toilets: T('식당·호텔 화장실을 이용합니다.', 'Use toilets in restaurants and hotels.'),
    time: T('UTC+2(서머타임 기간 UTC+3). 한국보다 7시간(서머타임 6시간) 늦습니다.', 'UTC+2 (UTC+3 in summer): 7 hours behind Korea (6 in summer).'),
    safety: T('외교부 여행경보: 레바논 전역이 3단계(출국권고)이고, 남부 이스라엘 접경(블루라인 5km 포함)·남부주·나바티예주·다히예 일부(베이루트 공항과 M51 도로 제외)·바알베크헤르멜주·베카주 일부(서베카·라샤야)는 4단계 여행금지(2027년 1월 31일까지)입니다. 산악 도로에선 차량 강도가 있어 렌터카를 직접 몰지 말라고 권고합니다. 군사·헤즈볼라 관련 시설은 사진을 찍지 마세요.', 'Korean travel alert: all of Lebanon is level 3 (leave the country), and the southern Israeli border (including 5 km from the Blue Line), South and Nabatieh governorates, parts of Dahiyeh (not the airport or the M51 road), Baalbek-Hermel and parts of Bekaa (West Bekaa, Rashaya) are level-4 travel-ban areas until 31 January 2027. Car theft and robbery happen on mountain roads, so the ministry advises against driving a rental car yourself. Don’t photograph military or Hezbollah-related sites.'),
    entry: T('한국 일반 여권은 관광 목적이면 공항에서 1개월 도착 비자를 무료로 받습니다(왕복 항공권 필요, 최장 3개월까지 연장). 여권은 6개월 이상 남아 있어야 하고, 이스라엘 비자나 출입국 기록이 있으면 입국이 거부됩니다.', 'Ordinary Korean passports get a free one-month visa on arrival for tourism (return ticket required; extendable to three months). Passports need six months’ validity, and an Israeli visa or entry stamp means refusal.'),
    telecom: T('주요 통신사는 Alfa·touch입니다. 공항에서 유심을 살 수 있습니다.', 'Main operators: Alfa and touch; SIMs are sold at the airport.'),
  },
"""

TRANSIT = """  lb: {
    summary: {
      ko: '우측통행. 철도가 없어 버스·미니버스와 택시, 합승 택시(세르비스)로 다닙니다.',
      en: 'Drive on the right. There is no railway—get around by bus, minibus, taxi and shared taxi (servees).',
    },
    drivingSide: 'right',
    longDistance: {
      ko: '베이루트에서 해안 도로를 따라 비블로스까지 약 1시간, 브샤리까지는 차로 약 2시간 30분입니다.',
      en: 'Byblos is about an hour up the coast road from Beirut, and Bsharri about 2 hrs 30 by car.',
    },
    paymentTip: {
      ko: '택시는 타기 전에 요금을 정하세요. 달러 잔돈을 준비하면 편합니다.',
      en: 'Agree taxi fares before you set off; small-dollar notes are handy.',
    },
    apps: [],
  },
"""

NOTICE = """  // 0404.go.kr Lebanon page: level 3 nationwide with level-4 areas (2026-03-11/03-20 additions, extended to 2027-01-31 on 2026-07-09); notice 2026-10-23.
  lb: {
    icon: '⚠️',
    title: { ko: '외교부 여행경보 · 3단계 출국권고 / 일부 4단계 여행금지', en: 'Korean travel alert · level 3, with level-4 travel-ban areas' },
    lines: [
      {
        ko: '남부 이스라엘 접경(블루라인 5km 포함)·남부주·나바티예주·다히예 일부(베이루트 공항과 M51 도로 제외)·바알베크헤르멜주·베카주 일부(서베카·라샤야)는 4단계 여행금지 지역(2027년 1월 31일까지)으로, 허가 없이 가면 여권법에 따라 처벌받을 수 있습니다. 이 앱은 이 지역(바알베크·시돈·티레 등)을 다루지 않습니다.',
        en: 'The southern Israeli border (including 5 km from the Blue Line), South and Nabatieh governorates, parts of Dahiyeh (not the airport or the M51 road), Baalbek-Hermel and parts of Bekaa (West Bekaa, Rashaya) are level-4 travel-ban areas until 31 January 2027; going without permission can be punished under the Passport Act. This app does not cover them (Baalbek, Sidon, Tyre and others).',
      },
      {
        ko: '나머지 전역은 3단계(출국권고)로, 급한 용무가 아니면 여행을 취소하라고 권고합니다. 외교부가 2026년 10월 23일 안전 공지를 냈으니 출발 전 꼭 확인하세요.',
        en: 'Everywhere else is level 3 (leave the country): cancel travel unless it is urgent. The ministry issued a safety notice on 23 October 2026—check it before you go.',
      },
    ],
    link: 'https://www.0404.go.kr/ntnSafetyInfo/40/detail',
  },
"""

CITIES = [
    C(id='beirut', after='ramallah', ko='베이루트', en='Beirut', native='بيروت · Bayrūt', lat=33.8938, lng=35.5018,
      blurb=['지중해에 면한 수도로, 페니키아·로마·오스만 시대가 겹친 도시입니다. 국립 박물관과 시내 중심의 모스크·성당, 바닷가 비둘기 바위, 젬마이제 거리를 걷고, 근교 제이타 동굴과 하리사에 다녀옵니다.',
             'The Mediterranean capital, layered with Phoenician, Roman and Ottoman pasts—see the National Museum, the mosque and cathedral downtown, the Pigeon Rocks by the sea and the streets of Gemmayzeh, with trips to the Jeita Grotto and Harissa.'],
      highlights=[
          H('베이루트 국립 박물관', 'National Museum of Beirut', '페니키아 석관과 모자이크 등 레바논의 고대 유물을 모은 박물관으로, 내전의 상처를 지나 다시 문을 열었습니다.', 'Lebanon’s ancient treasures—Phoenician sarcophagi, mosaics and more—in a museum reopened after the scars of the civil war.', 'National Museum of Beirut', 90, 120),
          H('무함마드 알아민 모스크와 순교자 광장', 'Mohammad Al-Amin Mosque & Martyrs’ Square', '푸른 돔의 대모스크와 그 앞 순교자 광장으로, 시내 중심입니다.', 'The great blue-domed mosque and Martyrs’ Square before it, in the heart of downtown.', 'Mohammad Al-Amin Mosque', 30, 45),
          H('성 조지 마론파 대성당', 'Saint George Maronite Cathedral', '모스크 바로 옆의 19세기 마론파 대성당입니다.', 'The 19th-century Maronite cathedral right beside the mosque.', 'Saint George Maronite Cathedral Beirut', 15, 20),
          H('로마 목욕탕 유적', 'Roman Baths', '시내 정부 청사 아래 비탈에 남은 로마 시대 목욕탕 유적입니다.', 'The Roman bath ruins on the slope below the government buildings downtown.', 'Roman Baths Beirut', 15, 20),
          H('코니시와 비둘기 바위', 'Corniche & Pigeon Rocks', '바닷가 산책로 코니시를 따라 라우셰 앞바다의 아치 바위까지 걷습니다.', 'Walk the seaside Corniche to the arched Pigeon Rocks off Raouché.', 'Raouche Rocks', 60, 90),
          H('젬마이제와 마르 미하일', 'Gemmayzeh & Mar Mikhael', '옛 건물에 카페와 바, 갤러리가 들어선 거리로, 저녁이 가장 활기찹니다.', 'Streets of old buildings filled with cafés, bars and galleries, liveliest in the evening.', 'Gemmayzeh Beirut', 60, 90),
          H('수르소크 박물관', 'Sursock Museum', '하얀 저택에 근현대 레바논 미술을 전시하는 미술관입니다.', 'Modern and contemporary Lebanese art in a white mansion.', 'Sursock Museum', 60, 90),
          H('제이타 동굴', 'Jeita Grotto', '배를 타고 지하 강을 지나는 아래 동굴과 걸어서 보는 위 동굴로 이뤄진 석회암 동굴입니다.', 'A limestone cave of two levels—a boat ride along an underground river below and a walkway through the upper gallery.', 'Jeita Grotto', 120, 150, group=DAY,
            n='베이루트에서 북쪽으로 차로 약 30분입니다. 동굴 안은 사진 촬영이 금지입니다.|About 30 min north of Beirut by car; no photography inside.'),
          H('하리사 레바논의 성모', 'Our Lady of Lebanon, Harissa', '주니에만이 내려다보이는 산 위의 하얀 성모상으로, 주니에에서 케이블카(텔레페리크)로 오릅니다.', 'The white statue of the Virgin on a hill above the Bay of Jounieh, reached by cable car (téléphérique) from Jounieh.', 'Our Lady of Lebanon Harissa', 90, 120, group=DAY,
            n='베이루트에서 차로 약 30분 걸리는 주니에에서 케이블카를 탑니다.|Take the cable car from Jounieh, about 30 min from Beirut by car.'),
      ],
      hubs="    air: [['Beirut–Rafic Hariri International (BEY)', '베이루트 라피크 하리리 국제공항 (BEY)', '시내까지 차로 약 20분|about 20 min to the city by car']],\n",
      itinerary=[1, 2, 3, 4, 6, 7, 5, 8, 9],
      season='봄(4~6월)과 가을(9~11월)이 좋습니다. 여름은 덥고 습하며, 겨울엔 비가 오고 산에는 눈이 옵니다.|Spring (April–June) and autumn (September–November) are best; summers are hot and humid, and winters bring rain and mountain snow.',
      stay=[('젬마이제·마르 미하일', 'Gemmayzeh & Mar Mikhael', 'Gemmayzeh Beirut', FIRST, '식당·바가 모여 있고 시내 중심이 가깝습니다.|Restaurants and bars, close to downtown.'),
            ('함라', 'Hamra', 'Hamra Street Beirut', '현지 분위기|Local feel', '대학가 상점가로, 코니시까지 걸어갑니다.|The university shopping district, within walking distance of the Corniche.')],
      routes=[r('istanbul', 'beirut', 'flight', 120), r('cairo', 'beirut', 'flight', 90), r('amman', 'beirut', 'flight', 70), r('dubai', 'beirut', 'flight', 240), r('doha', 'beirut', 'flight', 210)],
      transit=dict(modes=['taxi', 'bus', 'walk'], ko='시내는 택시와 세르비스로 다니고, 젬마이제와 시내 중심은 걸을 만합니다.', en='Use taxis and servees; Gemmayzeh and downtown are walkable.')),
    C(id='byblos', after='beirut', ko='비블로스', en='Byblos', native='جبيل · Jbeil', lat=34.1230, lng=35.6519,
      blurb=['7,000년 넘게 사람이 살아온 페니키아 항구 도시로, 알파벳과 ‘바이블’이라는 말의 유래와 얽힌 곳입니다. 십자군 성과 신전 유적, 옛 시장과 작은 항구가 세계유산이고, 북쪽 바트룬에 다녀옵니다.',
             'A Phoenician port inhabited for over 7,000 years, linked to the alphabet and the word ‘Bible’—its Crusader castle, temple ruins, old souq and little harbour are a World Heritage site, with a trip north to Batroun.'],
      highlights=[
          H('비블로스 성과 유적', 'Byblos Castle & ruins', '12세기 십자군 성과 그 아래 청동기·페니키아·로마 시대 신전 유적이 겹친 세계유산입니다.', 'The 12th-century Crusader castle above layers of Bronze Age, Phoenician and Roman temple ruins—a World Heritage site.', 'Byblos Castle', 90, 120),
          H('비블로스 옛 시장', 'Byblos Old Souq', '돌길을 따라 공예품과 화석, 카페가 이어진 옛 시장입니다.', 'The stone-paved old market of crafts, fossils and cafés.', 'Byblos Old Souk', 45, 60),
          H('비블로스 항구', 'Byblos Harbour', '고깃배가 정박한 작은 옛 항구로, 해 질 녘 해산물 식당이 붐빕니다.', 'The small old harbour of fishing boats, busy with seafood restaurants at sunset.', 'Byblos Port', 30, 45),
          H('성 요한 마르코 성당', 'Church of St John-Mark', '12세기 십자군이 지은 로마네스크 성당입니다.', 'The 12th-century Romanesque church built by the Crusaders.', 'Saint John Mark Church Byblos', 15, 20),
          H('바트룬', 'Batroun', '페니키아 해벽과 옛 시장, 레몬에이드와 바닷가 식당으로 알려진 해안 마을입니다.', 'The seaside town known for its Phoenician sea wall, old souq, lemonade and waterfront restaurants.', 'Batroun Phoenician Wall', 120, 180, group=DAY,
            n='비블로스에서 북쪽으로 차로 약 20분입니다.|About 20 min north of Byblos by car.'),
      ],
      hubs="",
      itinerary=[1, 4, 2, 3, 5],
      season='봄·가을이 좋습니다. 여름엔 바닷가가 붐비고 축제가 열립니다.|Spring and autumn are best; summer brings beach crowds and festivals.',
      stay=[('비블로스 구시가', 'Byblos old town', 'Byblos', FIRST, '유적·시장·항구를 걸어서 봅니다.|Walk to the ruins, souq and harbour.')],
      routes=[r('beirut', 'byblos', 'bus', 60)],
      transit=dict(modes=['walk', 'taxi'], ko='구시가는 걸어서, 바트룬은 버스나 택시로 갑니다.', en='Walk the old town; take a bus or taxi to Batroun.')),
    C(id='bsharri', after='byblos', ko='브샤리', en='Bsharri', native='بشري · Bsharrī', lat=34.2508, lng=36.0117,
      blurb=['레바논산맥 높은 곳의 마을로, 시인 칼릴 지브란의 고향입니다. 수도원이 절벽에 붙은 카디샤 계곡과 천 년 넘은 백향목 숲 ‘신의 백향목’이 세계유산입니다.',
             'The high mountain village where the poet Khalil Gibran was born—the cliff monasteries of the Qadisha Valley and the age-old Cedars of God are a World Heritage site.'],
      highlights=[
          H('신의 백향목 숲', 'Cedars of God', '국기에 그려진 레바논 백향목이 남은 숲으로, 수천 년 된 나무도 있습니다.', 'The grove of the Lebanon cedar shown on the flag, some trees thousands of years old.', 'Cedars of God', 60, 90,
            n='브샤리에서 차로 약 15분입니다.|About 15 min by car from Bsharri.'),
          H('지브란 박물관', 'Gibran Museum', '‘예언자’의 작가 칼릴 지브란이 묻힌 옛 수도원으로, 그의 그림과 유품을 전시합니다.', 'The old hermitage where Khalil Gibran, author of The Prophet, is buried, with his paintings and belongings.', 'Gibran Museum', 45, 60),
          H('카디샤 계곡', 'Qadisha Valley', '마론파 수도사들이 숨어 살던 절벽 동굴 수도원이 이어진 깊은 계곡으로, 카누빈 수도원까지 걷습니다.', 'The deep valley of cliff-cave monasteries where Maronite monks took refuge—hike down to Qannoubine monastery.', 'Qadisha Valley', 180, 240),
          H('성 안토니우스 쿠자야 수도원', 'Monastery of St Anthony of Qozhaya', '계곡 절벽 아래의 수도원으로, 중동 최초의 인쇄기가 남아 있습니다.', 'The monastery beneath the valley cliffs, home to the first printing press in the Middle East.', 'Monastery of Qozhaya', 45, 60),
      ],
      hubs="",
      itinerary=[2, 1, 3, 4],
      season='5~10월이 좋습니다. 겨울엔 눈이 많이 와 백향목 숲 근처 스키장이 문을 엽니다.|May–October is best; winter brings heavy snow, and the ski slopes by the Cedars open.',
      stay=[('브샤리 마을', 'Bsharri village', 'Bsharri', FIRST, '지브란 박물관과 계곡 입구가 가깝습니다.|Close to the Gibran Museum and the valley trails.')],
      routes=[r('byblos', 'bsharri', 'mixed', 100)],
      transit=dict(modes=['taxi'], ko='차를 빌리기보다 기사 딸린 차나 택시로 다니는 것이 안전합니다.', en='A car with a driver or a taxi is safer than renting a car.')),
]

LB_ORDER = [('베이루트와 해안', 'Beirut & the coast', ['beirut', 'byblos']), ('북부 산악 지대', 'The northern mountains', ['bsharri'])]
TRIPS = {'beirut': [('제이타 동굴|Jeita Grotto', 8), ('하리사|Harissa', 9)], 'byblos': [('바트룬|Batroun', 5)]}


def setup():
    k = rd('countries.ts')
    if "id: 'lb'," not in k:
        i = k.rindex('\n]\n\nexport function getCountry')
        k = k[:i + 1] + COUNTRY + k[i + 1:]
        wr('countries.ts', k)
    for f, block, anchor in [('essentials.ts', ESSENTIALS, '\n  xc: {'), ('transit.ts', TRANSIT, '\n  gi: {')]:
        s = rd(f)
        if '\n  lb: {' not in s:
            i = s.index(anchor)
            wr(f, s[:i + 1] + block + s[i + 1:])
    m = rd('countryIsoMap.ts')
    if "  lb: '422'," not in m:
        wr('countryIsoMap.ts', m.replace("  ps: '275',\n", "  ps: '275',\n  lb: '422',\n", 1))
    p = '../src/components/TravelBanNotice.tsx'
    s = open(p).read()
    if '\n  lb: {' not in s:
        i = s.index("  // 0404.go.kr notice of 2026-08-13")
        open(p, 'w').write(s[:i] + NOTICE + s[i:])


def finish():
    ids = [c['id'] for c in CITIES]
    k = rd('countries.ts')
    old = "cityIds: ['bethlehem', 'hebron', 'jericho', 'ramallah', " + ', '.join(f"'{x}'" for x in ids) + "],"
    assert old in k, 'palestine list'
    k = k.replace(old, "cityIds: ['bethlehem', 'hebron', 'jericho', 'ramallah'],")
    order = [x for g in LB_ORDER for x in g[2]]
    body = ("cityIds: [" + ', '.join(f"'{x}'" for x in order) + "],\n    cityGroups: [\n"
            + ''.join(f"      {{ title: {{ ko: '{ko}', en: '{en}' }}, cityIds: [{', '.join(repr(x) for x in g)}] }},\n" for ko, en, g in LB_ORDER) + '    ],')
    i = k.index("    id: 'lb',")
    j = k.index('cityIds: [],', i)
    wr('countries.ts', k[:j] + body + k[j + len('cityIds: [],'):])
    it = rd('itinerary-iberia.ts')
    for cid, trips in TRIPS.items():
        lst = next(c['itinerary'] for c in CITIES if c['id'] == cid)
        key = f"'{cid}'" if '-' in cid else cid
        old = f"  {key}: [{', '.join(map(str, lst))}],\n"
        assert it.count(old) == 1, cid
        days = [n for n in lst if not any(n in t[1:] for t in trips)]
        tr = ', '.join(f"['{t[0]}', {', '.join(map(str, t[1:]))}]" for t in trips)
        it = it.replace(old, f"  {key}: {{ days: [['', {', '.join(map(str, days))}]], trips: [{tr}] }},\n")
    wr('itinerary-iberia.ts', it)


if __name__ == '__main__':
    setup()
    T.CITIES = CITIES
    T.main()
    finish()
