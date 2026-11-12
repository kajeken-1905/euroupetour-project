#!/usr/bin/env python3
"""Syria (2026-11-11). Korean Foreign Ministry page (0404.go.kr/ntnSafetyInfo/131/detail): travel ban everywhere except
part of the Golan Heights (level 3); no Korean embassy — covered from Lebanon. Handled like Belarus/Libya (user decision
2026-11-09): travel-ban notice, basics, cities and sights, no restaurants or stay areas. Cities: Damascus, Homs, Palmyra, Aleppo. Run once."""
import add_daytrip_places3 as T
from add_daytrip_places import rd, wr
from add_slovakia_cities import H

DAY = ('근교 당일치기', 'Day trip')
RC = 'routes-central.ts'
R_AFTER = r"^  r\('amman', 'doha', 'flight', 165\),\n"
COMMON = dict(country='sy', group_title=None, hubs_file='hubs-central.ts', hubs_before='  seville: {\n', itin_file='itinerary-iberia.ts',
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
    id: 'sy',
    region: 'mena',
    name: { ko: '시리아', en: 'Syria' },
    nativeName: 'سوريا · Sūriyā',
    flagImage: '/flags/sy.svg',
    landmarkImage: '/landmarks/landmark-sy.jpg',
    flag: '🇸🇾',
    blurb: {
      ko: '한국 정부 지정 여행금지국. 다마스쿠스 옛 시가와 우마이야 모스크, 사막의 팔미라, 십자군 성채 크라크 데 슈발리에가 있습니다.',
      en: 'A Korean travel-ban country—old Damascus and its Umayyad Mosque, desert Palmyra and the Crusader castle of Krak des Chevaliers.',
    },
    facts: {
      population: { ko: '약 2,400만 명 (2024년)', en: 'Approx. 24 million (2024)' },
      area: { ko: '약 18만 5,000 km²', en: 'Approx. 185,000 km²' },
      capital: { ko: '다마스쿠스 (Damascus)', en: 'Damascus' },
      currency: { ko: '시리아 파운드 (SYP)', en: 'Syrian pound (SYP)' },
    },
    currencyCode: 'SYP',
    currencySymbol: 'SYP',
    schengen: false,
    flagColors: {
      primary: '#007A3D',
      secondary: '#000000',
      accent: '#CE1126',
      background: '#E8F0FA',
      text: '#0B2A4A',
    },
    cityIds: [],
  },
"""

ESSENTIALS = """  sy: {
    // Korean Foreign Ministry travel-safety page for Syria (0404.go.kr/ntnSafetyInfo/131/detail), 2026-11. No Korean embassy in Syria.
    emergency: [num('112', '경찰', 'Police'), num('110', '긴급 신고', 'Emergency'), num('113', '소방', 'Fire')],
    embassy: {
      name: T('주레바논 대한민국 대사관 (시리아 겸임)', 'Korean Embassy in Lebanon (also covers Syria)'),
      address: 'Bldg. 4, Elias Sarkis Road 1209, Yarzeh, Baabda, Lebanon',
      phone: '+961-5-922-846',
      afterHours: '+961-81-007-491',
      source: 'https://www.0404.go.kr/ntnSafetyInfo/131/detail',
    },
    power: T('220V · 50Hz. 콘센트 모양이 여러 가지라 멀티 어댑터를 챙기세요.', '220V, 50Hz; socket types vary, so bring a universal adapter.'),
    tipping: T('팁은 의무가 아닙니다.', 'Tipping is not expected.'),
    water: WATER_BOTTLED,
    shops: T('돈은 은행이나 허가받은 환전소에서만 바꿀 수 있고, 다른 곳의 환전은 불법입니다. 카드는 거의 쓸 수 없습니다.', 'Change money only at banks and licensed exchange offices—changing elsewhere is illegal. Cards are mostly not accepted.'),
    toilets: T('호텔·식당 화장실을 이용합니다.', 'Use toilets in hotels and restaurants.'),
    time: T('UTC+3, 서머타임 없음. 한국보다 6시간 늦습니다.', 'UTC+3 with no daylight saving: 6 hours behind Korea.'),
    safety: T('외교부가 골란고원 일부를 뺀 시리아 전역을 여행금지 지역으로 지정했습니다. 공습이 이어지고 종파 간 충돌과 통행금지가 있었으며, 2025년 6월 다마스쿠스 교회 폭탄 테러가 있었습니다. 군사·정부 시설은 사진을 찍지 말고, 신분증을 늘 지니세요.', 'Korea has designated all of Syria except part of the Golan Heights a travel-ban area. Air strikes continue, there have been sectarian clashes and curfews, and a Damascus church was bombed in June 2025. Don’t photograph military or government sites, and carry ID at all times.'),
    entry: T('여행금지국이라 외교부의 예외적 여권 사용 허가가 먼저 있어야 하고, 허가 없이 가면 처벌받습니다. 도착 비자는 없고, 15일 넘게 머물면 15일째 전에 출입국 사무소에 등록합니다. 나갈 땐 출국세를 냅니다.', 'As a travel-ban country, Syria needs the Korean Foreign Ministry’s exceptional passport-use permission first; going without it is punishable. There is no visa on arrival; for stays over 15 days, register with immigration before day 15. A departure tax is charged.'),
    telecom: T('한국 통신사 로밍 가능 여부를 출발 전에 확인하세요.', 'Check roaming with your carrier before you go.'),
  },
"""

TRANSIT = """  sy: {
    summary: {
      ko: '우측통행. 시내는 노란 택시와 미니버스로 다닙니다.',
      en: 'Drive on the right. Yellow taxis and minibuses run in the cities.',
    },
    drivingSide: 'right',
    longDistance: {
      ko: '다마스쿠스–홈스–알레포는 장거리 버스로 이어집니다. 국경 택시로 암만·베이루트까지 국경 통과를 포함해 약 3시간 30분입니다.',
      en: 'Long-distance buses link Damascus, Homs and Aleppo. Border taxis reach Amman or Beirut in about 3 hrs 30 including the crossing.',
    },
    paymentTip: {
      ko: '택시는 미터기를 켜 달라고 하세요. 외국인에겐 켜지 않으려는 기사가 많습니다.',
      en: 'Insist on the taxi meter—many drivers won’t use it for foreigners.',
    },
    apps: [],
  },
"""

NOTICE = """  // 0404.go.kr Syria page: travel ban everywhere except part of the Golan Heights (level 3); ban items extended to 2027-01-31.
  sy: {
    icon: '⛔',
    title: { ko: '여행금지국', en: 'Travel ban' },
    lines: [
      {
        ko: '한국 정부가 골란고원 일부(3단계 출국권고)를 뺀 시리아 전역을 여행금지 지역으로 지정했습니다. 외교부의 예외적 여권 사용 허가 없이 방문하면 여권법에 따라 처벌받을 수 있습니다.',
        en: 'The Korean government has designated all of Syria except part of the Golan Heights (level 3, leave the country) a travel-ban area. Visiting without the Foreign Ministry’s exceptional passport-use permission can be punished under the Passport Act.',
      },
      {
        ko: '공습과 테러, 무력 충돌 위험이 있습니다. 시리아엔 한국 대사관이 없어 주레바논 대사관이 맡습니다. 이 앱의 정보는 참고용이며 여행을 권하지 않습니다.',
        en: 'There is a risk of air strikes, terrorism and armed clashes. Korea has no embassy in Syria; the embassy in Lebanon covers it. The information here is for reference only and is not a suggestion to travel.',
      },
    ],
    link: 'https://www.0404.go.kr/ntnSafetyInfo/131/detail',
  },
"""

CITIES = [
    C(id='damascus', after='aden', ko='다마스쿠스', en='Damascus', native='دمشق · Dimashq', lat=33.5138, lng=36.2765,
      blurb=['세계에서 가장 오래 사람이 살아온 도시 가운데 하나. 성벽 안 옛 시가에 우마이야 모스크와 지붕 덮인 하미디야 시장, 오스만 시대 저택이 있고, 남쪽 보스라의 로마 극장에 다녀옵니다.',
             'One of the world’s oldest continuously inhabited cities—the walled old city holds the Umayyad Mosque, the covered Hamidiyya souq and Ottoman mansions, with a trip south to Bosra’s Roman theatre.'],
      highlights=[
          H('우마이야 모스크', 'Umayyad Mosque', '8세기 초 세운 대모스크로, 황금빛 모자이크와 세례 요한의 성묘가 있습니다.', 'The great mosque of the early 8th century, with golden mosaics and the shrine of John the Baptist.', 'Umayyad Mosque Damascus', 60, 90,
            n='여성은 입구에서 겉옷을 빌려 입습니다.|Women borrow a robe at the entrance.'),
          H('다마스쿠스 옛 시가', 'Ancient City of Damascus', '성경에 나오는 ‘곧은 길’이 지나는 성벽 안 옛 시가로, 세계유산입니다.', 'The walled old city crossed by the biblical Straight Street—a World Heritage site.', 'Straight Street Damascus', 120, 180),
          H('하미디야 시장', 'Souq al-Hamidiyya', '철제 아치 지붕이 덮인 큰 시장으로, 우마이야 모스크로 이어집니다.', 'The great market under an iron-arched roof, leading to the Umayyad Mosque.', 'Al-Hamidiyah Souq', 60, 90),
          H('아즘 궁전', 'Azm Palace', '18세기 오스만 총독의 저택으로, 줄무늬 돌 안뜰이 아름답습니다.', 'The 18th-century Ottoman governor’s residence, with a lovely striped-stone courtyard.', 'Azm Palace', 45, 60),
          H('다마스쿠스 국립 박물관', 'National Museum of Damascus', '두라 에우로포스 회당 벽화 등 시리아 고대 유물을 모은 박물관입니다.', 'Syria’s ancient treasures, including the painted synagogue of Dura-Europos.', 'National Museum of Damascus', 90, 120),
          H('다마스쿠스 성채', 'Citadel of Damascus', '옛 시가 북서쪽 모퉁이의 중세 성채입니다.', 'The medieval citadel at the old city’s north-west corner.', 'Citadel of Damascus', 30, 45),
          H('보스라', 'Bosra', '검은 현무암으로 지은 로마 극장이 성채 안에 온전히 남은 세계유산입니다.', 'The World Heritage site where a black-basalt Roman theatre survives intact inside a fortress.', 'Bosra Roman theatre', 180, 240, group=DAY,
            n='다마스쿠스에서 남쪽으로 약 140km입니다.|About 140 km south of Damascus.'),
          H('말룰라', 'Maaloula', '절벽에 붙은 마을로, 지금도 예수가 썼다는 아람어를 쓰는 사람들이 삽니다.', 'The cliffside village where people still speak Aramaic, the language of Jesus.', 'Maaloula', 120, 180, group=DAY,
            n='다마스쿠스에서 북쪽으로 약 55km입니다.|About 55 km north of Damascus.'),
      ],
      hubs="    air: [['Damascus International (DAM)', '다마스쿠스 국제공항 (DAM)', '시내에서 남동쪽으로 약 25km|about 25 km south-east of the centre']],\n",
      itinerary=[2, 3, 1, 4, 6, 5, 7, 8],
      season='봄(3~5월)과 가을(9~11월)이 좋습니다. 여름은 덥고 건조하며, 겨울엔 비와 눈이 오기도 합니다.|Spring (March–May) and autumn (September–November) are best; summers are hot and dry, and winters bring rain and occasional snow.',
      stay=[],
      routes=[r('amman', 'damascus', 'mixed', 210), r('istanbul', 'damascus', 'flight', 140), r('dubai', 'damascus', 'flight', 210)],
      transit=dict(modes=['taxi', 'bus', 'walk'], ko='옛 시가는 걸어서, 나머지는 택시로 다닙니다.', en='Walk the old city and take taxis elsewhere.')),
    C(id='homs', after='damascus', ko='홈스', en='Homs', native='حمص · Ḥimṣ', lat=34.7324, lng=36.7137,
      blurb=['시리아 중부의 도시로, 서쪽 산 위에 십자군 시대의 대표 성채 크라크 데 슈발리에가 있습니다.',
             'The city of central Syria, with Krak des Chevaliers—the great Crusader castle—on a hilltop to the west.'],
      highlights=[
          H('크라크 데 슈발리에', 'Krak des Chevaliers', '구호기사단이 넓힌 12~13세기 성채로, 십자군 성의 가장 완벽한 본보기로 꼽히는 세계유산입니다.', 'The 12th–13th-century castle enlarged by the Knights Hospitaller, often called the finest Crusader castle—a World Heritage site.', 'Krak des Chevaliers', 120, 180, group=DAY,
            n='홈스에서 서쪽으로 약 60km입니다.|About 60 km west of Homs.'),
          H('할리드 이븐 알왈리드 모스크', 'Khalid ibn al-Walid Mosque', '흑백 줄무늬 돌과 은빛 돔의 오스만 양식 모스크입니다.', 'An Ottoman-style mosque of black-and-white striped stone and silver domes.', 'Khalid ibn al-Walid Mosque', 30, 45),
          H('성모 마리아 허리띠 교회', 'Church of Saint Mary of the Holy Belt', '성모의 허리띠를 모셨다는 오래된 교회입니다.', 'The old church said to keep the girdle of the Virgin Mary.', 'Church of Saint Mary of the Holy Belt', 20, 30),
      ],
      hubs="",
      itinerary=[2, 3, 1],
      season='봄·가을이 좋습니다.|Spring and autumn are best.',
      stay=[],
      routes=[r('damascus', 'homs', 'bus', 120)],
      transit=dict(modes=['taxi', 'bus'], ko='크라크 데 슈발리에는 차를 빌려 다녀옵니다.', en='Hire a car to visit Krak des Chevaliers.')),
    C(id='palmyra', after='homs', ko='팔미라', en='Palmyra', native='تدمر · Tadmur', lat=34.5510, lng=38.2690,
      blurb=['시리아 사막 한가운데의 오아시스 대상 도시 유적. 1~2세기 실크로드 교역으로 번성한 열주 거리와 극장이 남은 세계유산으로, 2015년 전투 때 벨 신전 등이 파괴됐습니다.',
             'The ruins of an oasis caravan city in the middle of the Syrian desert—its colonnaded street and theatre, from its Silk Road heyday in the 1st–2nd centuries, are a World Heritage site; the Temple of Bel and other monuments were destroyed in the 2015 fighting.'],
      highlights=[
          H('팔미라 열주 거리', 'Great Colonnade of Palmyra', '1km 넘게 기둥이 이어진 도시의 중심 거리입니다.', 'The city’s main street, lined with columns for over a kilometre.', 'Palmyra Great Colonnade', 90, 120),
          H('팔미라 로마 극장', 'Theatre of Palmyra', '열주 거리 옆의 2세기 극장입니다.', 'The 2nd-century theatre beside the colonnade.', 'Roman Theatre Palmyra', 30, 45),
          H('벨 신전 터', 'Temple of Bel (ruins)', '1세기 신전으로, 2015년 파괴되고 정문만 남았습니다.', 'The 1st-century temple, destroyed in 2015 except for its gateway.', 'Temple of Bel', 30, 45),
          H('팔미라 성', 'Palmyra Castle', '유적을 내려다보는 언덕 위의 17세기 성으로, 해 질 녘 전망이 좋습니다.', 'The 17th-century hilltop castle overlooking the ruins, best at sunset.', 'Fakhr-al-Din al-Maani Castle', 45, 60),
      ],
      hubs="",
      itinerary=[1, 2, 3, 4],
      season='10~4월이 좋습니다. 여름 사막은 매우 덥습니다.|October–April is best; the desert summer is extremely hot.',
      stay=[],
      routes=[r('homs', 'palmyra', 'mixed', 150)],
      transit=dict(modes=['taxi', 'walk'], ko='유적은 걸어서, 성은 차로 오릅니다.', en='Walk the ruins and drive up to the castle.')),
    C(id='aleppo', after='palmyra', ko='알레포', en='Aleppo', native='حلب · Ḥalab', lat=36.2021, lng=37.1343,
      blurb=['언덕 위 거대한 성채를 중심으로 수천 년 이어진 교역 도시. 옛 시가와 지붕 덮인 시장은 내전으로 크게 부서져 복원 중인 세계유산입니다.',
             'A trading city of millennia, centred on its colossal hilltop citadel—the old city and covered souqs, badly damaged in the civil war, are a World Heritage site under restoration.'],
      highlights=[
          H('알레포 성채', 'Citadel of Aleppo', '해자와 다리로 들어가는 언덕 위 중세 성채로, 세계에서 손꼽히게 크고 오래된 성입니다.', 'The medieval hilltop citadel entered over a moat and bridge, one of the world’s oldest and largest castles.', 'Citadel of Aleppo', 90, 120),
          H('알레포 대모스크', 'Great Mosque of Aleppo', '11세기 미너렛이 내전 때 무너져 복원된 우마이야 시대 모스크입니다.', 'The Umayyad-era mosque whose 11th-century minaret fell in the war and has been restored.', 'Great Mosque of Aleppo', 30, 45),
          H('알 마디나 수크', 'Al-Madina Souq', '13km에 이르던 지붕 덮인 옛 시장으로, 일부가 복원돼 다시 문을 열었습니다.', 'The old covered market that once ran for 13 km; restored sections have reopened.', 'Al-Madina Souq', 60, 90),
          H('성 시메온 교회', 'Church of Saint Simeon Stylites', '기둥 위에서 수행한 성 시메온을 기려 5세기에 세운 교회 유적입니다.', 'The 5th-century church ruins built around the pillar of the ascetic Saint Simeon.', 'Church of Saint Simeon Stylites', 90, 120, group=DAY,
            n='알레포에서 북서쪽으로 약 40km입니다.|About 40 km north-west of Aleppo.'),
      ],
      hubs="    air: [['Aleppo International (ALP)', '알레포 국제공항 (ALP)', '시내에서 동쪽으로 약 10km|about 10 km east of the centre']],\n",
      itinerary=[1, 2, 3, 4],
      season='봄·가을이 좋습니다. 여름은 덥고 겨울은 춥습니다.|Spring and autumn are best; summers are hot and winters cold.',
      stay=[],
      routes=[r('homs', 'aleppo', 'bus', 180)],
      transit=dict(modes=['taxi', 'walk'], ko='옛 시가는 걸어서 봅니다.', en='Explore the old city on foot.')),
]

SY_ORDER = [('다마스쿠스', 'Damascus', ['damascus']), ('중부', 'Central Syria', ['homs', 'palmyra']), ('북부', 'The north', ['aleppo'])]
TRIPS = {'damascus': [('보스라|Bosra', 7), ('말룰라|Maaloula', 8)], 'homs': [('크라크 데 슈발리에|Krak des Chevaliers', 1)], 'aleppo': [('성 시메온 교회|Saint Simeon', 4)]}


def setup():
    k = rd('countries.ts')
    if "id: 'sy'," not in k:
        i = k.rindex('\n]\n\nexport function getCountry')
        k = k[:i + 1] + COUNTRY + k[i + 1:]
        wr('countries.ts', k)
    for f, block, anchor in [('essentials.ts', ESSENTIALS, '\n  xc: {'), ('transit.ts', TRANSIT, '\n  gi: {')]:
        s = rd(f)
        if '\n  sy: {' not in s:
            i = s.index(anchor)
            wr(f, s[:i + 1] + block + s[i + 1:])
    m = rd('countryIsoMap.ts')
    if "  sy: '760'," not in m:
        wr('countryIsoMap.ts', m.replace("  ye: '887',\n", "  ye: '887',\n  sy: '760',\n", 1))
    p = '../src/components/TravelBanNotice.tsx'
    s = open(p).read()
    if '\n  sy: {' not in s:
        i = s.index("  // 0404.go.kr notice of 2026-08-13")
        open(p, 'w').write(s[:i] + NOTICE + s[i:])


def finish():
    ids = [c['id'] for c in CITIES]
    k = rd('countries.ts')
    old = "cityIds: ['sanaa', 'aden', " + ', '.join(f"'{x}'" for x in ids) + ", 'shibam', 'socotra'],"
    assert old in k, 'yemen list'
    k = k.replace(old, "cityIds: ['sanaa', 'aden', 'shibam', 'socotra'],")
    order = [x for g in SY_ORDER for x in g[2]]
    body = ("cityIds: [" + ', '.join(f"'{x}'" for x in order) + "],\n    cityGroups: [\n"
            + ''.join(f"      {{ title: {{ ko: '{ko}', en: '{en}' }}, cityIds: [{', '.join(repr(x) for x in g)}] }},\n" for ko, en, g in SY_ORDER) + '    ],')
    i = k.index("    id: 'sy',")
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
