#!/usr/bin/env python3
"""Iraq (2026-11-09). Korean Foreign Ministry page (0404.go.kr/ntnSafetyInfo/174/detail): whole-country travel ban,
extended to 2027-01-31. Handled like Belarus/Libya (user decision 2026-11-09): travel-ban notice, basics, cities and sights,
no restaurants or stay areas. Cities: Baghdad (Babylon, Ctesiphon), Basra (the marshes), Erbil. Run once."""
import add_daytrip_places3 as T
from add_daytrip_places import rd, wr
from add_slovakia_cities import H

DAY = ('근교 당일치기', 'Day trip')
RC = 'routes-central.ts'
R_AFTER = r"^  r\('amman', 'doha', 'flight', 165\),\n"
COMMON = dict(country='iq', group_title=None, hubs_file='hubs-central.ts', hubs_before='  seville: {\n', itin_file='itinerary-iberia.ts',
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
    id: 'iq',
    region: 'mena',
    name: { ko: '이라크', en: 'Iraq' },
    nativeName: 'العراق · al-ʿIrāq',
    flagImage: '/flags/iq.svg',
    landmarkImage: '/landmarks/landmark-iq.jpg',
    flag: '🇮🇶',
    blurb: {
      ko: '한국 정부 지정 여행금지국. 티그리스·유프라테스강의 메소포타미아 문명 땅으로, 바빌론 유적과 에르빌 성채가 있습니다.',
      en: 'A Korean travel-ban country—the Mesopotamian land of the Tigris and Euphrates, with the ruins of Babylon and the Erbil Citadel.',
    },
    facts: {
      population: { ko: '약 4,600만 명 (2024년)', en: 'Approx. 46 million (2024)' },
      area: { ko: '약 43만 8,000 km²', en: 'Approx. 438,000 km²' },
      capital: { ko: '바그다드 (Baghdad)', en: 'Baghdad' },
      currency: { ko: '이라크 디나르 (IQD)', en: 'Iraqi dinar (IQD)' },
    },
    currencyCode: 'IQD',
    currencySymbol: 'IQD',
    schengen: false,
    flagColors: {
      primary: '#CE1126',
      secondary: '#000000',
      accent: '#007A3D',
      background: '#E8F0FA',
      text: '#0B2A4A',
    },
    cityIds: [],
  },
"""

ESSENTIALS = """  iq: {
    // Korean Foreign Ministry travel-safety page for Iraq (0404.go.kr/ntnSafetyInfo/174/detail), 2026-11. The page lists only the traffic police number.
    emergency: [num('104', '교통경찰(교통사고)', 'Traffic police (accidents)'), num('+964-773-036-3689', '주이라크 대사관 긴급 연락처', 'Korean Embassy emergency line')],
    embassy: {
      name: T('주이라크 대한민국 대사관', 'Korean Embassy in Iraq'),
      address: 'Villa W5, Dijla Diplomatic Compound, Green Zone, Baghdad',
      phone: '+964-770-725-2006',
      afterHours: '+964-773-036-3689',
      note: T('아르빌 분관: Rotana Hotel, Gulan Street, Erbil · +964-750-790-1678 (긴급 +964-750-445-6098). 이라크에 들고 날 땐 대사관에 꼭 알려야 합니다.', 'Erbil branch office: Rotana Hotel, Gulan Street, Erbil · +964-750-790-1678 (emergency +964-750-445-6098). Korean nationals must report entering and leaving Iraq to the embassy.'),
      source: 'https://www.0404.go.kr/ntnSafetyInfo/174/detail',
    },
    power: T('220V · 50Hz. 전기 공급이 불안정합니다. 콘센트 모양이 여러 가지라 멀티 어댑터를 챙기세요.', '220V, 50Hz; supply is unreliable. Socket types vary, so bring a universal adapter.'),
    tipping: T('호텔에선 5% 안팎의 팁을 기대합니다.', 'Hotels expect a tip of around 5%.'),
    water: WATER_BOTTLED,
    shops: T('신용카드는 거의 쓸 수 없어 현금을 씁니다. 일부 호텔은 달러를 받습니다. 1만 달러가 넘는 현금과 골동품은 가지고 나갈 수 없습니다.', 'Cards are almost unusable, so use cash; some hotels take dollars. You may not take out more than US$10,000 in cash, or any antiquities.'),
    toilets: T('호텔·식당 화장실을 이용합니다.', 'Use toilets in hotels and restaurants.'),
    time: T('UTC+3, 서머타임 없음. 한국보다 6시간 늦습니다.', 'UTC+3 with no daylight saving: 6 hours behind Korea.'),
    safety: T('외교부가 이라크 전역을 여행금지국으로 지정했습니다. 몸값을 노린 납치와 자살 폭탄 테러 위험이 있어 모스크·시장·쇼핑몰 같은 붐비는 곳을 피하고, 니네베·디얄라·살라후딘·키르쿠크·안바르주와 바그다드 외곽엔 가지 마세요. 대중교통과 택시 대신 경호가 붙은 방탄 차량으로 다니라고 권고합니다.', 'Korea has designated all of Iraq a travel-ban country. Kidnapping for ransom and suicide bombings are risks: avoid crowded places such as mosques, markets and malls, and stay out of Nineveh, Diyala, Salahuddin, Kirkuk and Anbar provinces and Baghdad’s outskirts. The ministry advises armoured vehicles with escorts instead of public transport or taxis.'),
    entry: T('여행금지국이라 외교부의 예외적 여권 사용 허가가 먼저 있어야 하고, 허가 없이 가면 여권법에 따라 처벌받습니다. 비자는 전자 비자(eservice.evisa.iq)로 받습니다. 쿠르디스탄 지역은 도착 비자(1개월, 10만 디나르, 카드 결제)가 있지만, 이때도 외교부 허가가 필요합니다.', 'As a travel-ban country, Iraq needs the Korean Foreign Ministry’s exceptional passport-use permission first; going without it is punishable under the Passport Act. Visas are issued online (eservice.evisa.iq). The Kurdistan Region offers a visa on arrival (one month, 100,000 dinars, card only), but the ministry’s permission is still required.'),
    telecom: T('주요 통신사는 Zain·Asiacell입니다. 유선 인터넷은 거의 쓸 수 없습니다.', 'Main operators: Zain and Asiacell; fixed-line internet is largely unavailable.'),
  },
"""

TRANSIT = """  iq: {
    summary: {
      ko: '우측통행. 대중교통 대신 경호가 붙은 차로 다니라고 외교부가 권고합니다.',
      en: 'Drive on the right. The Korean ministry advises escorted vehicles rather than public transport.',
    },
    drivingSide: 'right',
    longDistance: {
      ko: '바그다드와 에르빌·바스라 사이는 국내선으로 약 1시간입니다.',
      en: 'Domestic flights link Baghdad with Erbil and Basra in about an hour.',
    },
    paymentTip: {
      ko: '현금으로 냅니다.',
      en: 'Pay in cash.',
    },
    apps: [],
  },
"""

NOTICE = """  // 0404.go.kr Iraq page: travel-ban country, extended to 2027-01-31 (2026-07-09 notice).
  iq: {
    icon: '⛔',
    title: { ko: '여행금지국', en: 'Travel ban' },
    lines: [
      {
        ko: '한국 정부가 이라크 전역을 여행금지 지역으로 지정했습니다(2027년 1월 31일까지). 쿠르디스탄 지역도 포함되며, 외교부의 예외적 여권 사용 허가 없이 방문하면 여권법에 따라 처벌받을 수 있습니다.',
        en: 'The Korean government has designated all of Iraq, including the Kurdistan Region, a travel-ban area (until 31 January 2027). Visiting without the Foreign Ministry’s exceptional passport-use permission can be punished under the Passport Act.',
      },
      {
        ko: '납치와 폭탄 테러 위험이 있습니다. 이 앱의 정보는 참고용이며 여행을 권하지 않습니다.',
        en: 'There is a risk of kidnapping and bombings. The information here is for reference only and is not a suggestion to travel.',
      },
    ],
    link: 'https://www.0404.go.kr/ntnSafetyInfo/174/detail',
  },
"""

CITIES = [
    C(id='baghdad', after='shiraz', ko='바그다드', en='Baghdad', native='بغداد · Baghdād', lat=33.3152, lng=44.3661,
      blurb=['티그리스강을 끼고 아바스 왕조의 수도로 번성한 도시. 메소포타미아 유물을 모은 이라크 박물관과 옛 책방 거리를 보고, 남쪽 바빌론과 크테시폰 유적에 다녀옵니다.',
             'The city on the Tigris that flourished as the Abbasid capital—see Mesopotamian treasures at the Iraq Museum and the old booksellers’ street, and visit the ruins of Babylon and Ctesiphon.'],
      highlights=[
          H('이라크 박물관', 'Iraq Museum', '수메르·아시리아·바빌로니아 유물을 모은 박물관으로, 아시리아 궁전의 날개 달린 황소 조각이 있습니다.', 'The museum of Sumerian, Assyrian and Babylonian antiquities, including winged bulls from an Assyrian palace.', 'Iraq Museum', 120, 180),
          H('무스탄시리야 학원', 'Al-Mustansiriya School', '1233년 세운 아바스 왕조의 대학 건물로, 티그리스강 옆에 남아 있습니다.', 'The Abbasid college of 1233, still standing beside the Tigris.', 'Al-Mustansiriya School', 30, 45),
          H('아바스 궁전', 'Abbasid Palace', '13세기 벽돌 아치와 무카르나스 장식이 남은 건물입니다.', 'A 13th-century building of brick arches and muqarnas vaulting.', 'Abbasid Palace Baghdad', 30, 45),
          H('무타나비 거리', 'Al-Mutanabbi Street', '책방과 노천 책 시장이 늘어선 옛 거리로, 금요일 아침이 가장 붐빕니다.', 'The old street of bookshops and open-air book stalls, busiest on Friday mornings.', 'Al-Mutanabbi Street', 60, 90),
          H('카디미야 성지', 'Al-Kadhimiya Mosque', '금빛 돔과 미너렛이 선 시아파 성지입니다.', 'A Shia shrine with golden domes and minarets.', 'Al-Kadhimiya Mosque', 45, 60,
            n='여성은 차도르를 입어야 합니다.|Women must wear a chador.'),
          H('타흐리르 광장과 자유 기념비', 'Tahrir Square & Freedom Monument', '이라크 현대사를 새긴 청동 부조 기념비가 선 시내 중심 광장입니다.', 'The central square with the bronze relief monument to modern Iraqi history.', 'Freedom Monument Baghdad', 20, 30),
          H('바빌론', 'Babylon', '함무라비와 네부카드네자르 2세의 수도 유적으로, 세계유산입니다.', 'The ruins of the capital of Hammurabi and Nebuchadnezzar II—a World Heritage site.', 'Babylon Iraq', 180, 240, group=DAY,
            n='바그다드에서 남쪽으로 약 85km입니다.|About 85 km south of Baghdad.'),
          H('크테시폰 (타크 카스라)', 'Ctesiphon (Taq Kasra)', '사산 왕조 궁전의 거대한 벽돌 아치가 남은 유적입니다.', 'The ruins of the Sasanian palace, with its colossal brick arch.', 'Taq Kasra', 60, 90, group=DAY,
            n='바그다드에서 남동쪽으로 약 35km입니다.|About 35 km south-east of Baghdad.'),
      ],
      hubs="    air: [['Baghdad International (BGW)', '바그다드 국제공항 (BGW)', '시내에서 서쪽으로 약 16km|about 16 km west of the centre']],\n",
      itinerary=[1, 4, 2, 3, 6, 5, 7, 8],
      season='11~3월이 좋습니다. 7~9월 낮은 50℃를 넘고, 봄엔 모래바람이 붑니다.|November–March is best; July–September days pass 50 °C, and spring brings sandstorms.',
      stay=[],
      routes=[r('istanbul', 'baghdad', 'flight', 200), r('amman', 'baghdad', 'flight', 110), r('dubai', 'baghdad', 'flight', 150)],
      transit=dict(modes=['taxi'], ko='외교부는 경호가 붙은 차로만 다니라고 권고합니다.', en='The Korean ministry advises travelling only in escorted vehicles.')),
    C(id='basra', after='baghdad', ko='바스라', en='Basra', native='البصرة · al-Baṣra', lat=30.5085, lng=47.7804,
      blurb=['티그리스·유프라테스강이 만난 샤트알아랍 강가의 항구 도시. 강변 산책로와 옛 궁전에 자리한 바스라 박물관이 있고, 북쪽엔 세계유산 메소포타미아 습지가 펼쳐집니다.',
             'The port city on the Shatt al-Arab, where the Tigris and Euphrates meet—with a riverside corniche, the Basrah Museum in a former palace, and the World Heritage Mesopotamian Marshes to the north.'],
      highlights=[
          H('바스라 박물관', 'Basrah Museum', '강가의 옛 궁전 건물에 수메르부터 이슬람 시대까지의 유물을 전시합니다.', 'Antiquities from Sumer to the Islamic era in a former palace by the river.', 'Basrah Museum', 60, 90),
          H('샤트알아랍 강변', 'Shatt al-Arab Corniche', '강을 따라 이어진 산책로로, 저녁에 배를 타는 사람들이 많습니다.', 'The riverside promenade, busy with boat rides in the evening.', 'Basra Corniche', 45, 60),
          H('메소포타미아 습지', 'Mesopotamian Marshes', '갈대 집과 물소가 있는 습지로, 배를 타고 둘러보는 세계유산입니다.', 'The World Heritage wetlands of reed houses and water buffalo, explored by boat.', 'Chibayish marshes', 240, 300, group=DAY,
            n='바스라에서 북서쪽으로 약 100km(치바이시)입니다.|About 100 km north-west of Basra (Chibayish).'),
      ],
      hubs="    air: [['Basra International (BSR)', '바스라 국제공항 (BSR)', '시내까지 차로 약 30분|about 30 min to the city by car']],\n",
      itinerary=[1, 2, 3],
      season='11~3월이 좋습니다. 여름은 매우 덥고 습합니다.|November–March is best; summers are extremely hot and humid.',
      stay=[],
      routes=[r('baghdad', 'basra', 'flight', 70)],
      transit=dict(modes=['taxi'], ko='경호가 붙은 차로 다니라고 권고합니다.', en='Escorted vehicles are advised.')),
    C(id='erbil', after='basra', ko='에르빌', en='Erbil', native='هەولێر · Hewlêr', lat=36.1911, lng=44.0092,
      blurb=['쿠르디스탄 지역의 중심 도시. 수천 년 동안 사람이 살아온 언덕 위 성채가 세계유산이고, 그 아래로 바자르와 공원이 이어집니다.',
             'The capital of the Kurdistan Region—its hilltop citadel, inhabited for millennia, is a World Heritage site, with the bazaar and parks spreading below.'],
      highlights=[
          H('에르빌 성채', 'Erbil Citadel', '흙 언덕 위에 집들이 쌓인 성채로, 세계에서 가장 오래 사람이 산 곳 가운데 하나인 세계유산입니다.', 'The citadel of houses on an earthen mound, one of the world’s longest-inhabited places—a World Heritage site.', 'Erbil Citadel', 90, 120),
          H('쿠르드 직물 박물관', 'Kurdish Textile Museum', '성채 안 옛집에 쿠르드 유목민의 양탄자와 직물을 전시합니다.', 'Kurdish nomads’ rugs and textiles in an old house inside the citadel.', 'Kurdish Textile Museum', 30, 45),
          H('카이사리 바자르', 'Qaysari Bazaar', '성채 아래의 옛 시장으로, 꿀·견과류·향신료와 찻집이 있습니다.', 'The old market below the citadel, with honey, nuts, spices and tea houses.', 'Qaysari Bazaar Erbil', 60, 90),
          H('무다파리아 미너렛', 'Mudhafaria Minaret', '12세기 벽돌 미너렛으로, 미너렛 공원 안에 서 있습니다.', 'A 12th-century brick minaret standing in Minaret Park.', 'Mudhafaria Minaret', 20, 30),
          H('사미 압둘라흐만 공원', 'Sami Abdulrahman Park', '시내 서쪽의 넓은 공원으로, 저녁 산책하는 가족이 많습니다.', 'The large park west of the centre, full of families on evening walks.', 'Sami Abdulrahman Park', 45, 60),
      ],
      hubs="    air: [['Erbil International (EBL)', '에르빌 국제공항 (EBL)', '시내까지 차로 약 15분|about 15 min to the city by car']],\n",
      itinerary=[1, 2, 3, 4, 5],
      season='봄(3~5월)과 가을이 좋습니다. 여름은 덥고, 겨울엔 비가 옵니다.|Spring (March–May) and autumn are best; summers are hot and winters rainy.',
      stay=[],
      routes=[r('baghdad', 'erbil', 'flight', 60), r('istanbul', 'erbil', 'flight', 180)],
      transit=dict(modes=['taxi', 'walk'], ko='성채와 바자르는 걸어서, 나머지는 차로 다닙니다.', en='Walk the citadel and bazaar; go by car elsewhere.')),
]

IQ_ORDER = [('바그다드와 남부', 'Baghdad & the south', ['baghdad', 'basra']), ('쿠르디스탄', 'Kurdistan', ['erbil'])]
TRIPS = {'baghdad': [('바빌론|Babylon', 7), ('크테시폰|Ctesiphon', 8)], 'basra': [('메소포타미아 습지|The marshes', 3)]}


def setup():
    k = rd('countries.ts')
    if "id: 'iq'," not in k:
        i = k.rindex('\n]\n\nexport function getCountry')
        k = k[:i + 1] + COUNTRY + k[i + 1:]
        wr('countries.ts', k)
    for f, block, anchor in [('essentials.ts', ESSENTIALS, '\n  xc: {'), ('transit.ts', TRANSIT, '\n  gi: {')]:
        s = rd(f)
        if '\n  iq: {' not in s:
            i = s.index(anchor)
            wr(f, s[:i + 1] + block + s[i + 1:])
    m = rd('countryIsoMap.ts')
    if "  iq: '368'," not in m:
        wr('countryIsoMap.ts', m.replace("  ir: '364',\n", "  ir: '364',\n  iq: '368',\n", 1))
    p = '../src/components/TravelBanNotice.tsx'
    s = open(p).read()
    if '\n  iq: {' not in s:
        i = s.index("  // 0404.go.kr notice of 2026-08-13")
        open(p, 'w').write(s[:i] + NOTICE + s[i:])


def finish():
    ids = [c['id'] for c in CITIES]
    k = rd('countries.ts')
    old = "cityIds: ['tehran', 'kashan', 'isfahan', 'yazd', 'shiraz', " + ', '.join(f"'{x}'" for x in ids) + "],"
    assert old in k, 'iran list'
    k = k.replace(old, "cityIds: ['tehran', 'kashan', 'isfahan', 'yazd', 'shiraz'],")
    order = [x for g in IQ_ORDER for x in g[2]]
    body = ("cityIds: [" + ', '.join(f"'{x}'" for x in order) + "],\n    cityGroups: [\n"
            + ''.join(f"      {{ title: {{ ko: '{ko}', en: '{en}' }}, cityIds: [{', '.join(repr(x) for x in g)}] }},\n" for ko, en, g in IQ_ORDER) + '    ],')
    i = k.index("    id: 'iq',")
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
