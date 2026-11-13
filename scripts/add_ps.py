#!/usr/bin/env python3
"""Palestinian territories (2026-11-12). Korean Foreign Ministry page (0404.go.kr/ntnSafetyInfo/398/detail): Gaza is a
travel-ban area; the West Bank (Ramallah, Nablus, Hebron, Bethlehem, Jericho, Jenin) is level 3 (leave the country). Full guide for
the West Bank with a notice (user decision 2026-11-09); Gaza is left out. Cities: Bethlehem (Herodium, Mar Saba), Jericho, Hebron,
Ramallah (Taybeh). No airport, station or port of its own—travellers come through Israel or across the Jordan. Run once."""
import add_daytrip_places3 as T
from add_daytrip_places import rd, wr
from add_slovakia_cities import H

DAY = ('근교 당일치기', 'Day trip')
RC = 'routes-central.ts'
R_AFTER = r"^  r\('amman', 'doha', 'flight', 165\),\n"
COMMON = dict(country='ps', group_title=None, hubs_file='hubs-central.ts', hubs_before='  seville: {\n', itin_file='itinerary-iberia.ts',
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
    id: 'ps',
    region: 'mena',
    name: { ko: '팔레스타인 자치지역', en: 'Palestinian Territories' },
    nativeName: 'فلسطين · Filasṭīn',
    flagImage: '/flags/ps.svg',
    landmarkImage: '/landmarks/landmark-ps.jpg',
    flag: '🇵🇸',
    blurb: {
      ko: '요르단강 서안의 자치지역. 예수가 태어났다는 베들레헴의 성탄 교회, 오아시스 도시 예리코, 헤브론의 족장들의 무덤이 있습니다.',
      en: 'The self-governing West Bank—Bethlehem’s Church of the Nativity, the oasis town of Jericho and the Tomb of the Patriarchs in Hebron.',
    },
    facts: {
      population: { ko: '약 550만 명 (서안·가자, 2024년)', en: 'Approx. 5.5 million (West Bank and Gaza, 2024)' },
      area: { ko: '약 6,000 km² (서안·가자)', en: 'Approx. 6,000 km² (West Bank and Gaza)' },
      capital: { ko: '라말라 (자치정부 소재지)', en: 'Ramallah (seat of the Palestinian Authority)' },
      currency: { ko: '이스라엘 셰켈 (ILS, ₪) · 달러·요르단 디나르도 통용', en: 'Israeli shekel (ILS, ₪); dollars and Jordanian dinars are also used' },
    },
    currencyCode: 'ILS',
    currencySymbol: '₪',
    schengen: false,
    flagColors: {
      primary: '#000000',
      secondary: '#007A3D',
      accent: '#CE1126',
      background: '#E8F0FA',
      text: '#0B2A4A',
    },
    cityIds: [],
  },
"""

ESSENTIALS = """  ps: {
    // Korean Foreign Ministry travel-safety page for the Palestinian territories (0404.go.kr/ntnSafetyInfo/398/detail), 2026-11.
    emergency: [num('100', '경찰', 'Police'), num('101', '구급', 'Ambulance'), num('102', '소방', 'Fire')],
    embassy: {
      name: T('주팔레스타인 대한민국 대표사무소', 'Korean Representative Office to Palestine'),
      address: 'Al-Quds St. 17, PADICO Building 5F, Al-Masyoun, Ramallah',
      phone: '+972-2-240-2846',
      afterHours: '+972-50-528-8345',
      note: T('근무 시간 밖 사건·사고는 주이스라엘 대사관의 담당 영사가 받습니다(위 번호).', 'Out of hours, the duty consul at the Korean Embassy in Israel answers (the number above).'),
      source: 'https://www.0404.go.kr/ntnSafetyInfo/398/detail',
    },
    power: T('230V · 50Hz, C·H형 콘센트로 한국 플러그는 대부분 맞지만 H형엔 어댑터가 필요합니다.', '230V, 50Hz, type C and H sockets; Korean plugs fit type C, but type H needs an adapter.'),
    tipping: T('봉사료가 없으면 식당에선 10% 안팎, 호텔 객실엔 5셰켈 정도를 둡니다. 택시는 팁이 없습니다.', 'If service isn’t included, leave about 10% in restaurants and about ₪5 for hotel housekeeping; no tip for taxis.'),
    water: WATER_BOTTLED,
    shops: T('이스라엘 셰켈을 쓰고 달러·요르단 디나르도 받습니다. 금요일엔 오후 2시까지 대부분 가게가 닫습니다.', 'Shekels are used, and dollars and Jordanian dinars are accepted. Most shops close on Friday until 2 pm.'),
    toilets: T('식당·호텔 화장실을 이용합니다.', 'Use toilets in restaurants and hotels.'),
    time: T('UTC+2(서머타임 기간 UTC+3). 한국보다 7시간(서머타임 6시간) 늦습니다.', 'UTC+2 (UTC+3 in summer): 7 hours behind Korea (6 in summer).'),
    safety: T('외교부 여행경보: 가자지구는 4단계(여행금지), 라말라·베들레헴·헤브론·예리코 등 서안 지역은 3단계(출국권고)입니다. 이스라엘에서 들어올 때 검문소를 지나므로 여권과 이스라엘 입국 서류를 늘 지니세요. 이스라엘 번호판 렌터카 도난이 잦고 대부분의 렌터카 회사가 서안 진입을 막습니다. 되도록 2명 이상 함께 다니고, 주택가에선 단정하게 입으세요.', 'Korean travel alert: Gaza is level 4 (travel ban), and the West Bank—Ramallah, Bethlehem, Hebron, Jericho and others—level 3 (leave the country). Entering from Israel means passing checkpoints, so always carry your passport and Israeli entry document. Israeli-plated rental cars are often stolen, and most rental firms don’t allow them into the West Bank. Travel in twos or more where possible, and dress modestly in residential areas.'),
    entry: T('서안은 이스라엘(벤구리온 공항)이나 요르단에서 들어갑니다. 아랍 국가 출입국 도장이 많거나 팔레스타인 방문이 목적이라고 말하면 이스라엘 입국 심사가 길어지거나 거부되기도 한다고 외교부가 안내합니다.', 'The West Bank is reached through Israel (Ben Gurion Airport) or from Jordan. The Korean ministry notes that many Arab-country stamps, or stating a Palestine visit as your purpose, can mean long questioning or refusal at Israeli immigration.'),
    telecom: T('팔레스타인 통신사(Jawwal·Ooredoo)와 이스라엘 통신사가 함께 잡힙니다. 한국 로밍 요금을 출발 전에 확인하세요.', 'Both Palestinian (Jawwal, Ooredoo) and Israeli networks are available; check roaming rates before you go.'),
  },
"""

TRANSIT = """  ps: {
    summary: {
      ko: '우측통행. 예루살렘 다마스쿠스 문 근처에서 베들레헴·라말라행 아랍 버스가 다니고, 도시 사이는 합승 택시(세르비스)로 다닙니다.',
      en: 'Drive on the right. Arab buses to Bethlehem and Ramallah leave from near Jerusalem’s Damascus Gate, and shared taxis (servees) link the towns.',
    },
    drivingSide: 'right',
    longDistance: {
      ko: '예루살렘에서 베들레헴·라말라까지 버스로 약 30~45분입니다. 이스라엘과 서안 사이엔 검문소가 있어 시간이 더 걸릴 수 있습니다.',
      en: 'Buses take about 30–45 min from Jerusalem to Bethlehem or Ramallah; checkpoints between Israel and the West Bank can add time.',
    },
    paymentTip: {
      ko: '버스와 세르비스는 현금(셰켈)으로 냅니다. 택시는 타기 전에 요금을 정하세요.',
      en: 'Pay buses and servees in cash (shekels); agree taxi fares before you set off.',
    },
    apps: [],
  },
"""

NOTICE = """  // 0404.go.kr Palestinian territories page: Gaza travel ban (to 2027-01-31 per the 2026-07-09 notice), the rest level 3; notices 2026-09-22, 2026-10-26.
  ps: {
    icon: '⚠️',
    title: { ko: '외교부 여행경보 · 3단계 출국권고 / 가자지구 4단계 여행금지', en: 'Korean travel alert · level 3, with Gaza a level-4 travel-ban area' },
    lines: [
      {
        ko: '가자지구는 4단계(여행금지) 지역으로, 허가 없이 가면 여권법에 따라 처벌받을 수 있습니다. 이 앱은 가자지구를 다루지 않습니다.',
        en: 'Gaza is a level-4 travel-ban area; going without permission can be punished under the Passport Act. This app does not cover Gaza.',
      },
      {
        ko: '라말라·베들레헴·헤브론·예리코 등 서안 지역은 3단계(출국권고)로, 외교부는 되도록 출입을 자제하라고 권고합니다. 2026년 9월 22일과 10월 26일 중동 정세 관련 긴급 안전 공지가 나왔으니 출발 전 꼭 확인하세요.',
        en: 'The West Bank—Ramallah, Bethlehem, Hebron, Jericho and others—is level 3 (leave the country), and the ministry advises staying away where possible. Urgent safety notices on the Middle East were issued on 22 September and 26 October 2026—check them before you go.',
      },
    ],
    link: 'https://www.0404.go.kr/ntnSafetyInfo/398/detail',
  },
"""

CITIES = [
    C(id='bethlehem', after='salalah', ko='베들레헴', en='Bethlehem', native='بيت لحم · Bayt Laḥm', lat=31.7054, lng=35.2024,
      blurb=['예루살렘 남쪽 언덕의 도시로, 예수가 태어났다는 자리에 선 성탄 교회가 세계유산입니다. 구유 광장과 우유 동굴, 분리 장벽의 거리 그림을 보고, 헤로디움과 마르 사바 수도원에 다녀옵니다.',
             'The hilltop town south of Jerusalem whose Church of the Nativity, over the traditional birthplace of Jesus, is a World Heritage site—see Manger Square, the Milk Grotto and the street art on the separation wall, with trips to Herodium and Mar Saba monastery.'],
      highlights=[
          H('성탄 교회', 'Church of the Nativity', '4세기에 처음 세운 교회로, 예수 탄생 자리라는 동굴이 제단 아래 있습니다. 세계유산입니다.', 'First built in the 4th century, with the grotto of the Nativity beneath the altar—a World Heritage site.', 'Church of the Nativity', 60, 90,
            n='성탄 동굴은 줄이 길 수 있으니 아침 일찍 가세요.|Lines for the grotto can be long—go early.'),
          H('구유 광장', 'Manger Square', '성탄 교회와 오마르 모스크가 마주한 시내 중심 광장입니다.', 'The central square between the Church of the Nativity and the Mosque of Omar.', 'Manger Square', 20, 30),
          H('우유 동굴', 'Milk Grotto', '성가족이 피신하며 머물렀다는 하얀 석회 동굴 위의 예배당입니다.', 'The chapel over the white chalk grotto where the Holy Family is said to have sheltered.', 'Milk Grotto', 20, 30),
          H('목자들의 들판', 'Shepherds’ Field', '천사가 목자들에게 탄생을 알렸다는 벳사후르의 들판과 예배당입니다.', 'The fields and chapel in Beit Sahour where angels are said to have announced the birth to shepherds.', 'Shepherds Field Beit Sahour', 45, 60),
          H('분리 장벽 거리 그림', 'Separation wall art', '도시를 가르는 장벽에 뱅크시 등 여러 작가가 그린 그림이 이어집니다.', 'Murals by Banksy and many others along the wall that divides the town.', 'Walled Off Hotel Bethlehem', 45, 60),
          H('헤로디움', 'Herodium', '헤롯 왕이 원뿔 모양 언덕 위에 지은 요새 궁전 유적입니다.', 'King Herod’s fortress-palace built on a cone-shaped hill.', 'Herodium', 90, 120, group=DAY,
            n='베들레헴에서 남동쪽으로 약 12km입니다.|About 12 km south-east of Bethlehem.'),
          H('마르 사바 수도원', 'Mar Saba Monastery', '키드론 골짜기 절벽에 붙은 5세기 그리스 정교회 수도원으로, 여성은 들어갈 수 없습니다.', 'The 5th-century Greek Orthodox monastery clinging to the Kidron Valley cliffs; women may not enter.', 'Mar Saba', 60, 90, group=DAY,
            n='베들레헴에서 동쪽으로 약 15km입니다.|About 15 km east of Bethlehem.'),
      ],
      hubs="    bus: [['Bab al-Zqaq bus stop', '바브 알 즈칵 정류장', '예루살렘행 231번 버스|bus 231 to Jerusalem']],\n",
      itinerary=[1, 2, 3, 5, 4, 6, 7],
      season='봄(3~5월)과 가을(9~11월)이 좋습니다. 크리스마스와 부활절엔 순례객으로 매우 붐빕니다.|Spring (March–May) and autumn (September–November) are best; Christmas and Easter are very crowded with pilgrims.',
      stay=[('구유 광장 주변', 'Around Manger Square', 'Manger Square Bethlehem', FIRST, '성탄 교회와 옛 시가를 걸어서 봅니다.|Walk to the Church of the Nativity and the old town.')],
      routes=[r('jerusalem', 'bethlehem', 'bus', 30)],
      transit=dict(modes=['bus', 'taxi', 'walk'], ko='옛 시가는 걸어서, 목자들의 들판과 근교는 택시로 다닙니다.', en='Walk the old town; take taxis to Shepherds’ Field and the sights around.')),
    C(id='jericho', after='bethlehem', ko='예리코', en='Jericho', native='أريحا · Arīḥā', lat=31.8667, lng=35.4500,
      blurb=['해발 -250m 요르단 계곡의 오아시스 도시로, 세상에서 가장 오래된 도시 가운데 하나입니다. 1만 년 전 유적 텔 에스술탄과 케이블카로 오르는 시험산 수도원, 히샴 궁전이 있습니다.',
             'The oasis town 250 m below sea level in the Jordan Valley, one of the oldest cities on earth—with the 10,000-year-old mound of Tell es-Sultan, the Mount of Temptation monastery reached by cable car, and Hisham’s Palace.'],
      highlights=[
          H('텔 에스술탄 (옛 예리코)', 'Tell es-Sultan (Ancient Jericho)', '1만 년 전 정착지와 돌탑이 발굴된 언덕으로, 세계유산입니다.', 'The mound where a 10,000-year-old settlement and stone tower were excavated—a World Heritage site.', 'Tell es-Sultan', 45, 60),
          H('시험산 수도원', 'Mount of Temptation', '예수가 시험받았다는 산 절벽의 그리스 정교회 수도원으로, 케이블카로 오릅니다.', 'The Greek Orthodox monastery on the cliff where Jesus is said to have been tempted, reached by cable car.', 'Mount of Temptation Jericho', 90, 120),
          H('히샴 궁전', 'Hisham’s Palace', '8세기 우마이야 왕조의 겨울 궁전 유적으로, ‘생명의 나무’ 모자이크가 유명합니다.', 'The ruins of an 8th-century Umayyad winter palace, famous for its ‘Tree of Life’ mosaic.', 'Hisham Palace Jericho', 60, 90),
          H('와디 켈트·성 게오르기오스 수도원', 'Wadi Qelt & St George’s Monastery', '협곡 절벽에 붙은 5세기 수도원으로, 전망대에서 내려다봅니다.', 'The 5th-century monastery hanging on the canyon cliff, seen from a lookout.', 'St George Monastery Wadi Qelt', 90, 120),
      ],
      hubs="",
      itinerary=[1, 2, 3, 4],
      season='11~4월이 좋습니다. 여름엔 45℃에 이를 만큼 덥습니다.|November–April is best; summer heat can reach 45 °C.',
      stay=[('예리코 시내', 'Jericho town', 'Jericho', FIRST, '유적과 케이블카가 차로 몇 분 거리입니다.|The sites and the cable car are a few minutes away by car.')],
      routes=[r('jerusalem', 'jericho', 'mixed', 60), r('amman', 'jericho', 'mixed', 180)],
      transit=dict(modes=['taxi'], ko='유적 사이는 택시로 다닙니다.', en='Take taxis between the sites.')),
    C(id='hebron', after='jericho', ko='헤브론', en='Hebron', native='الخليل · al-Khalīl', lat=31.5326, lng=35.0998,
      blurb=['아브라함과 족장들이 묻혔다는 막벨라 굴 위의 이브라힘 모스크가 있는 도시로, 옛 시가가 세계유산입니다. 유리·도자기 공방으로도 유명합니다.',
             'The city of the Ibrahimi Mosque over the Cave of Machpelah, where Abraham and the patriarchs are said to be buried—its old town is a World Heritage site, and it is known for its glass and ceramics workshops.'],
      highlights=[
          H('이브라힘 모스크 (족장들의 무덤)', 'Ibrahimi Mosque (Tomb of the Patriarchs)', '헤롯 시대 벽 안에 아브라함과 사라 등의 무덤이 있다는 성지로, 무슬림·유대인 구역이 나뉘어 있습니다.', 'The shrine within Herodian walls said to hold the tombs of Abraham, Sarah and others, divided into Muslim and Jewish sections.', 'Ibrahimi Mosque', 45, 60,
            n='검문소를 지나 들어갑니다. 여권을 꼭 지니세요.|Entry is through a checkpoint—carry your passport.'),
          H('헤브론 옛 시가', 'Hebron Old City', '석조 아치 골목에 시장이 이어진 옛 시가로, 세계유산입니다.', 'The old town of stone-arched market lanes—a World Heritage site.', 'Hebron Old City', 60, 90),
          H('헤브론 유리·도자기 공방', 'Hebron glass & ceramics workshops', '입으로 불어 만드는 유리와 푸른 무늬 도자기를 만드는 공방들입니다.', 'Workshops making hand-blown glass and blue-patterned ceramics.', 'Hebron Glass and Ceramics', 45, 60),
      ],
      hubs="",
      itinerary=[1, 2, 3],
      season='봄·가을이 좋습니다. 겨울엔 쌀쌀하고 비가 옵니다.|Spring and autumn are best; winters are chilly and rainy.',
      stay=[('베들레헴', 'Bethlehem', 'Bethlehem', '거점에서 다녀오기|Day trip from a base', '베들레헴에서 버스로 약 45분입니다.|About 45 min by bus from Bethlehem.')],
      routes=[r('bethlehem', 'hebron', 'bus', 45)],
      transit=dict(modes=['taxi', 'walk'], ko='옛 시가는 걸어서 봅니다.', en='Explore the old town on foot.')),
    C(id='ramallah', after='hebron', ko='라말라', en='Ramallah', native='رام الله · Rām Allāh', lat=31.9038, lng=35.2034,
      blurb=['팔레스타인 자치정부가 있는 언덕 위 도시로, 카페와 식당이 많은 활기찬 곳입니다. 아라파트 묘소와 박물관, 시인 마흐무드 다르위시 박물관이 있고, 근처 타이베 마을엔 맥주 양조장이 있습니다.',
             'The lively hilltop city that houses the Palestinian Authority, full of cafés and restaurants—with Yasser Arafat’s mausoleum and museum, the museum of the poet Mahmoud Darwish, and a brewery in the nearby village of Taybeh.'],
      highlights=[
          H('야세르 아라파트 묘소·박물관', 'Yasser Arafat Mausoleum & Museum', '자치정부 청사 안의 아라파트 묘소와 그의 생애를 다룬 박물관입니다.', 'Arafat’s tomb in the government compound, and the museum of his life.', 'Yasser Arafat Museum', 60, 90),
          H('마흐무드 다르위시 박물관', 'Mahmoud Darwish Museum', '팔레스타인을 대표하는 시인의 묘소와 정원, 기념관입니다.', 'The tomb, garden and memorial museum of Palestine’s best-known poet.', 'Mahmoud Darwish Museum', 45, 60),
          H('알 마나라 광장', 'Al-Manara Square', '사자상이 둘러싼 시내 중심 광장으로, 주변에 시장과 가게가 모여 있습니다.', 'The central square ringed by lion statues, surrounded by markets and shops.', 'Al-Manara Square', 20, 30),
          H('타이베 양조장', 'Taybeh Brewing Company', '1994년 문을 연 팔레스타인 첫 맥주 양조장으로, 가을엔 맥주 축제가 열립니다.', 'Palestine’s first brewery, opened in 1994, with a beer festival in autumn.', 'Taybeh Brewing Company', 60, 90, group=DAY,
            n='라말라에서 북동쪽으로 약 15km입니다. 견학은 미리 연락하세요.|About 15 km north-east of Ramallah; contact them ahead for a tour.'),
      ],
      hubs="    bus: [['Ramallah central bus station', '라말라 중앙 버스 터미널', '예루살렘·서안 각 도시행|to Jerusalem and other West Bank towns']],\n",
      itinerary=[3, 1, 2, 4],
      season='봄·가을이 좋습니다. 해발 800m 넘는 고지라 여름 저녁은 선선합니다.|Spring and autumn are best; at over 800 m, summer evenings are cool.',
      stay=[('알 마나라 광장 주변', 'Around Al-Manara Square', 'Al-Manara Square Ramallah', FIRST, '시내 카페·식당과 버스 터미널이 가깝습니다.|Close to the cafés, restaurants and bus station.')],
      routes=[r('jerusalem', 'ramallah', 'bus', 45)],
      transit=dict(modes=['bus', 'taxi', 'walk'], ko='시내는 걸어서, 근교는 택시나 세르비스로 다닙니다.', en='Walk the centre; take taxis or servees farther out.')),
]

PS_ORDER = [('서안 남부', 'Southern West Bank', ['bethlehem', 'hebron']), ('요르단 계곡', 'Jordan Valley', ['jericho']), ('서안 중부', 'Central West Bank', ['ramallah'])]
TRIPS = {'bethlehem': [('헤로디움|Herodium', 6), ('마르 사바|Mar Saba', 7)], 'ramallah': [('타이베|Taybeh', 4)]}


def setup():
    k = rd('countries.ts')
    if "id: 'ps'," not in k:
        i = k.rindex('\n]\n\nexport function getCountry')
        k = k[:i + 1] + COUNTRY + k[i + 1:]
        wr('countries.ts', k)
    for f, block, anchor in [('essentials.ts', ESSENTIALS, '\n  xc: {'), ('transit.ts', TRANSIT, '\n  gi: {')]:
        s = rd(f)
        if '\n  ps: {' not in s:
            i = s.index(anchor)
            wr(f, s[:i + 1] + block + s[i + 1:])
    m = rd('countryIsoMap.ts')
    if "  ps: '275'," not in m:
        wr('countryIsoMap.ts', m.replace("  om: '512',\n", "  om: '512',\n  ps: '275',\n", 1))
    p = '../src/components/TravelBanNotice.tsx'
    s = open(p).read()
    if '\n  ps: {' not in s:
        i = s.index("  // 0404.go.kr notice of 2026-08-13")
        open(p, 'w').write(s[:i] + NOTICE + s[i:])


def finish():
    ids = [c['id'] for c in CITIES]
    k = rd('countries.ts')
    old = "cityIds: ['muscat', 'nizwa', 'sur', 'salalah', " + ', '.join(f"'{x}'" for x in ids) + "],"
    assert old in k, 'oman list'
    k = k.replace(old, "cityIds: ['muscat', 'nizwa', 'sur', 'salalah'],")
    order = [x for g in PS_ORDER for x in g[2]]
    body = ("cityIds: [" + ', '.join(f"'{x}'" for x in order) + "],\n    cityGroups: [\n"
            + ''.join(f"      {{ title: {{ ko: '{ko}', en: '{en}' }}, cityIds: [{', '.join(repr(x) for x in g)}] }},\n" for ko, en, g in PS_ORDER) + '    ],')
    i = k.index("    id: 'ps',")
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
