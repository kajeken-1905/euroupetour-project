#!/usr/bin/env python3
"""Yemen (2026-11-11). Korean Foreign Ministry page (0404.go.kr/ntnSafetyInfo/294/detail): whole-country travel ban,
extended to 2027-01-31; the embassy works from a temporary office in Riyadh. Handled like Belarus/Libya (user decision
2026-11-09): travel-ban notice, basics, cities and sights, no restaurants or stay areas. Cities: Sana'a, Shibam, Socotra, Aden. Run once."""
import add_daytrip_places3 as T
from add_daytrip_places import rd, wr
from add_slovakia_cities import H

DAY = ('근교 당일치기', 'Day trip')
RC = 'routes-central.ts'
R_AFTER = r"^  r\('amman', 'doha', 'flight', 165\),\n"
COMMON = dict(country='ye', group_title=None, hubs_file='hubs-central.ts', hubs_before='  seville: {\n', itin_file='itinerary-iberia.ts',
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
    id: 'ye',
    region: 'mena',
    name: { ko: '예멘', en: 'Yemen' },
    nativeName: 'اليمن · al-Yaman',
    flagImage: '/flags/ye.svg',
    landmarkImage: '/landmarks/landmark-ye.jpg',
    flag: '🇾🇪',
    blurb: {
      ko: '한국 정부 지정 여행금지국. 탑 모양 집이 늘어선 사나 옛 시가, ‘사막의 맨해튼’ 시밤, 용혈수의 섬 소코트라가 있습니다.',
      en: 'A Korean travel-ban country—the tower houses of old Sana’a, Shibam, ‘Manhattan of the desert’, and Socotra, island of dragon’s blood trees.',
    },
    facts: {
      population: { ko: '약 4,000만 명 (2024년)', en: 'Approx. 40 million (2024)' },
      area: { ko: '약 52만 8,000 km²', en: 'Approx. 528,000 km²' },
      capital: { ko: '사나 (Sana’a)', en: 'Sana’a' },
      currency: { ko: '예멘 리알 (YER)', en: 'Yemeni rial (YER)' },
    },
    currencyCode: 'YER',
    currencySymbol: 'YER',
    schengen: false,
    flagColors: {
      primary: '#CE1126',
      secondary: '#FFFFFF',
      accent: '#000000',
      background: '#E8F0FA',
      text: '#0B2A4A',
    },
    cityIds: [],
  },
"""

ESSENTIALS = """  ye: {
    // Korean Foreign Ministry travel-safety page for Yemen (0404.go.kr/ntnSafetyInfo/294/detail), 2026-11.
    emergency: [num('199', '긴급 신고(사건·범죄)', 'Emergency (incidents and crime)'), num('195', '구급', 'Ambulance'), num('191', '민방위', 'Civil defence')],
    embassy: {
      name: T('주예멘 대한민국 대사관 (리야드 임시사무소)', 'Korean Embassy in Yemen (temporary office in Riyadh)'),
      address: 'P.O. Box 94399, Riyadh 11693, Saudi Arabia',
      phone: '+966-11-488-2211',
      afterHours: '+82-2-3210-0404',
      source: 'https://www.0404.go.kr/ntnSafetyInfo/294/detail',
    },
    power: T('220~230V · 50Hz. 콘센트 모양이 여러 가지라 멀티 어댑터를 챙기세요.', '220–230V, 50Hz; socket types vary, so bring a universal adapter.'),
    tipping: T('팁은 의무가 아닙니다.', 'Tipping is not expected.'),
    water: WATER_BOTTLED,
    shops: T('현금 사회입니다.', 'Yemen runs on cash.'),
    toilets: T('호텔·식당 화장실을 이용합니다.', 'Use toilets in hotels and restaurants.'),
    time: T('UTC+3, 서머타임 없음. 한국보다 6시간 늦습니다.', 'UTC+3 with no daylight saving: 6 hours behind Korea.'),
    safety: T('외교부가 예멘 전역을 여행금지국으로 지정했습니다. 무장 부족과 테러 조직의 납치 위험이 크고, 사나–타이즈·아덴·마리브 도로는 특히 위험합니다. 도시 사이는 육로 대신 비행기로 다니라고 권고합니다. 사나 공항은 2025년 공습으로 피해를 입었습니다. 여성은 팔다리를 드러내지 않습니다.', 'Korea has designated all of Yemen a travel-ban country. Kidnapping by armed tribes and terrorist groups is a major risk, especially on the Sana’a–Taiz, Aden and Marib roads; the ministry advises flying between cities rather than going overland. Sana’a airport was damaged by air strikes in 2025. Women should keep arms and legs covered.'),
    entry: T('여행금지국이라 외교부의 예외적 여권 사용 허가가 먼저 있어야 하고, 허가 없이 가면 여권법에 따라 처벌받습니다. 도착 비자는 2012년 말 없어졌고, 입국 뒤 1개월 머물 수 있습니다. 사나 공항으로는 예멘인만 출국할 수 있고, 아덴 공항은 제한이 없습니다.', 'As a travel-ban country, Yemen needs the Korean Foreign Ministry’s exceptional passport-use permission first; going without it is punishable under the Passport Act. Visas on arrival ended in late 2012, and stays are one month. Only Yemenis may depart from Sana’a airport; Aden has no such restriction.'),
    telecom: T('한국 통신사 로밍 가능 여부를 출발 전에 확인하세요.', 'Check roaming with your carrier before you go.'),
  },
"""

TRANSIT = """  ye: {
    summary: {
      ko: '우측통행. 육로 납치 위험이 커서 도시 사이는 비행기로 다니라고 외교부가 권고합니다.',
      en: 'Drive on the right. Because of the kidnapping risk on the roads, the Korean ministry advises flying between cities.',
    },
    drivingSide: 'right',
    longDistance: {
      ko: '아덴·세이윤·소코트라 공항 사이에 국내선이 다닙니다. 사나에서 도시 밖으로 나갈 땐 관광 경찰의 허가와 호송이 필요합니다.',
      en: 'Domestic flights link the Aden, Seiyun and Socotra airports. Leaving Sana’a by road requires tourist-police permission and an escort.',
    },
    paymentTip: {
      ko: '현금으로 냅니다.',
      en: 'Pay in cash.',
    },
    apps: [],
  },
"""

NOTICE = """  // 0404.go.kr Yemen page: travel-ban country, extended to 2027-01-31 (2026-07-09 notice); 2026-10-28 notice on the worsening situation.
  ye: {
    icon: '⛔',
    title: { ko: '여행금지국', en: 'Travel ban' },
    lines: [
      {
        ko: '한국 정부가 예멘 전역을 여행금지 지역으로 지정했습니다(2027년 1월 31일까지). 외교부의 예외적 여권 사용 허가 없이 방문하면 여권법에 따라 처벌받을 수 있습니다.',
        en: 'The Korean government has designated all of Yemen a travel-ban area (until 31 January 2027). Visiting without the Foreign Ministry’s exceptional passport-use permission can be punished under the Passport Act.',
      },
      {
        ko: '내전과 납치 위험이 있고, 외교부는 2026년 10월 28일 정세 악화를 공지했습니다. 주예멘 대사관은 사우디 리야드의 임시사무소에서 일합니다. 이 앱의 정보는 참고용이며 여행을 권하지 않습니다.',
        en: 'There is civil war and a risk of kidnapping; on 28 October 2026 the ministry warned of a worsening situation. The Korean Embassy works from a temporary office in Riyadh. The information here is for reference only and is not a suggestion to travel.',
      },
    ],
    link: 'https://www.0404.go.kr/ntnSafetyInfo/294/detail',
  },
"""

CITIES = [
    C(id='sanaa', after='erbil', ko='사나', en='Sana’a', native='صنعاء · Ṣanʿāʾ', lat=15.3694, lng=44.1910,
      blurb=['해발 2,200m 고원의 수도. 하얀 석고 무늬로 꾸민 흙벽돌 탑 집들이 빽빽한 옛 시가가 세계유산이고, 북쪽 계곡엔 바위 위에 올린 궁전 다르 알 하자르가 있습니다.',
             'The capital on a 2,200 m plateau—its old city of mud-brick tower houses trimmed with white gypsum is a World Heritage site, and in a valley to the north stands Dar al-Hajar, the palace on a rock.'],
      highlights=[
          H('사나 옛 시가', 'Old City of Sana’a', '수백 년 된 탑 모양 흙벽돌 집이 빽빽한 옛 시가로, 세계유산입니다.', 'The old city packed with centuries-old mud-brick tower houses—a World Heritage site.', 'Old City of Sanaa', 120, 180),
          H('바브 알 야만', 'Bab al-Yemen', '옛 시가로 들어가는 남쪽 성문입니다.', 'The southern gate into the old city.', 'Bab al-Yemen', 15, 20),
          H('사나 대모스크', 'Great Mosque of Sana’a', '7세기에 처음 세운, 이슬람에서 가장 오래된 모스크 가운데 하나입니다.', 'First built in the 7th century, one of the oldest mosques in Islam.', 'Great Mosque of Sanaa', 20, 30),
          H('수크 알 밀흐', 'Souq al-Milh', '옛 시가 안의 큰 시장으로, 향신료·건포도·카트·잠비야(단검) 가게가 모여 있습니다.', 'The great market inside the old city, with spices, raisins, qat and jambiya daggers.', 'Souq al-Milh', 60, 90),
          H('다르 알 하자르', 'Dar al-Hajar', '와디 다르의 바위 위에 지은 5층 궁전입니다.', 'The five-storey palace built on top of a rock in Wadi Dhahr.', 'Dar al-Hajar', 60, 90, group=DAY,
            n='사나에서 북서쪽으로 약 15km입니다.|About 15 km north-west of Sana’a.'),
      ],
      hubs="    air: [['Sana’a International (SAH)', '사나 국제공항 (SAH)', '2025년 공습 피해 · 예멘인만 출국 가능|damaged by air strikes in 2025; departures for Yemenis only']],\n",
      itinerary=[2, 1, 3, 4, 5],
      season='고원이라 일 년 내내 온화하고, 10~3월이 맑습니다. 여름엔 소나기가 옵니다.|On the plateau it is mild all year; October–March is clear, and summer brings showers.',
      stay=[],
      routes=[],
      transit=dict(modes=['taxi', 'walk'], ko='옛 시가는 걸어서 봅니다.', en='Explore the old city on foot.')),
    C(id='shibam', after='sanaa', ko='시밤', en='Shibam', native='شبام · Shibām', lat=15.9265, lng=48.6265,
      blurb=['하드라마우트 계곡의 성벽 도시로, 16세기 흙벽돌 고층 집들이 모여 ‘사막의 맨해튼’이라 불리는 세계유산입니다. 근처 세이윤과 타림엔 술탄 궁전과 모스크가 있습니다.',
             'The walled town of the Hadhramaut valley, its 16th-century mud-brick high-rises earning it the name ‘Manhattan of the desert’—a World Heritage site, with sultans’ palaces and mosques in nearby Seiyun and Tarim.'],
      highlights=[
          H('시밤 성벽 도시', 'Old Walled City of Shibam', '5~8층 흙벽돌 집 수백 채가 성벽 안에 빽빽한 세계유산 도시입니다.', 'Hundreds of five- to eight-storey mud-brick houses packed within the walls—a World Heritage site.', 'Shibam Hadramawt', 90, 120),
          H('세이윤 궁전', 'Seiyun Palace', '하얀 흙벽돌로 지은 카시리 술탄의 궁전으로, 지금은 박물관입니다.', 'The Kathiri sultans’ white mud-brick palace, now a museum.', 'Seiyun Palace', 45, 60,
            n='시밤에서 동쪽으로 약 20km입니다.|About 20 km east of Shibam.'),
          H('타림 알 미흐다르 모스크', 'Al-Mihdhar Mosque, Tarim', '높이 약 50m의 흙벽돌 미너렛이 선 모스크로, 이슬람 학문의 도시 타림에 있습니다.', 'The mosque with a mud-brick minaret about 50 m high, in Tarim, a town of Islamic learning.', 'Al-Mihdhar Mosque Tarim', 30, 45,
            n='시밤에서 동쪽으로 약 35km입니다.|About 35 km east of Shibam.'),
      ],
      hubs="    air: [['Seiyun (GXF)', '세이윤 공항 (GXF)', '시밤까지 차로 약 30분|about 30 min to Shibam by car']],\n",
      itinerary=[1, 2, 3],
      season='10~3월이 좋습니다. 여름은 매우 덥습니다.|October–March is best; summers are extremely hot.',
      stay=[],
      routes=[r('aden', 'shibam', 'flight', 60)],
      transit=dict(modes=['taxi'], ko='세 마을 사이는 차로 다닙니다.', en='Travel between the three towns by car.')),
    C(id='socotra', after='shibam', ko='소코트라', en='Socotra', native='سقطرى · Suquṭrā', lat=12.6500, lng=54.0200,
      blurb=['아라비아해의 외딴 섬으로, 우산 모양 용혈수 등 이곳에만 사는 식물이 많아 ‘인도양의 갈라파고스’라 불리는 세계유산입니다.',
             'A remote island in the Arabian Sea, called the ‘Galápagos of the Indian Ocean’ for its endemic plants such as the umbrella-shaped dragon’s blood tree—a World Heritage site.'],
      highlights=[
          H('디크삼 고원', 'Dixam Plateau', '용혈수 숲이 펼쳐진 고원으로, 소코트라의 상징 같은 풍경입니다.', 'The plateau of dragon’s blood tree forests, Socotra’s signature landscape.', 'Dixam Plateau', 120, 180),
          H('홈힐 보호구역', 'Homhil Protected Area', '병 모양 나무와 용혈수, 바다가 보이는 천연 수영장이 있는 보호구역입니다.', 'A reserve of bottle trees and dragon’s blood trees, with a natural pool overlooking the sea.', 'Homhil Protected Area', 120, 180),
          H('데트와 석호', 'Detwah Lagoon', '하얀 모래와 맑은 물이 이어진 서쪽 끝의 석호입니다.', 'The lagoon of white sand and clear water at the island’s western tip.', 'Detwah Lagoon', 90, 120),
      ],
      hubs="    air: [['Socotra (SCT)', '소코트라 공항 (SCT)', '하디부까지 차로 약 20분|about 20 min to Hadibu by car']],\n",
      itinerary=[1, 2, 3],
      season='10~4월이 좋습니다. 6~9월엔 계절풍이 거세 비행기와 배가 끊기기도 합니다.|October–April is best; from June to September strong monsoon winds can halt flights and boats.',
      stay=[],
      routes=[r('aden', 'socotra', 'flight', 90)],
      transit=dict(modes=['taxi'], ko='사륜구동 차와 현지 가이드를 구해 다닙니다.', en='Get around with a four-wheel-drive vehicle and a local guide.')),
    C(id='aden', after='socotra', ko='아덴', en='Aden', native='عدن · ʿAdan', lat=12.7855, lng=45.0187,
      blurb=['사화산 분화구 안에 자리한 항구 도시로, 지금은 예멘 정부가 머무는 임시 수도입니다. 산비탈의 옛 저수조와 바닷가 요새가 남아 있습니다.',
             'The port city set inside an extinct volcano’s crater, now the government’s temporary capital—with ancient cisterns on the hillside and a seaside fortress.'],
      highlights=[
          H('타윌라 저수조', 'Cisterns of Tawila', '산비탈의 빗물을 모으려고 만든 옛 돌 저수조들입니다.', 'Ancient stone cisterns built to catch rain running off the hillside.', 'Cisterns of Tawila', 45, 60),
          H('시라 요새', 'Sira Fortress', '크레이터 지구 앞바다 섬 위의 옛 요새로, 항구가 내려다보입니다.', 'The old fortress on an island off the Crater district, looking over the harbour.', 'Sira Fortress', 45, 60),
          H('아덴 미너렛', 'Aden Minaret', '크레이터 지구에 홀로 남은 옛 모스크의 미너렛입니다.', 'The lone minaret of a vanished mosque in the Crater district.', 'Aden Minaret', 15, 20),
      ],
      hubs="    air: [['Aden International (ADE)', '아덴 국제공항 (ADE)', '시내까지 차로 약 15분|about 15 min to the city by car']],\n",
      itinerary=[1, 3, 2],
      season='11~3월이 좋습니다. 여름은 덥고 습합니다.|November–March is best; summers are hot and humid.',
      stay=[],
      routes=[r('cairo', 'aden', 'flight', 210), r('amman', 'aden', 'flight', 200)],
      transit=dict(modes=['taxi'], ko='차로 다닙니다.', en='Get around by car.')),
]

YE_ORDER = [('사나와 서부', 'Sana’a & the west', ['sanaa', 'aden']), ('하드라마우트', 'Hadhramaut', ['shibam']), ('소코트라섬', 'Socotra', ['socotra'])]
TRIPS = {'sanaa': [('다르 알 하자르|Dar al-Hajar', 5)]}


def setup():
    k = rd('countries.ts')
    if "id: 'ye'," not in k:
        i = k.rindex('\n]\n\nexport function getCountry')
        k = k[:i + 1] + COUNTRY + k[i + 1:]
        wr('countries.ts', k)
    for f, block, anchor in [('essentials.ts', ESSENTIALS, '\n  xc: {'), ('transit.ts', TRANSIT, '\n  gi: {')]:
        s = rd(f)
        if '\n  ye: {' not in s:
            i = s.index(anchor)
            wr(f, s[:i + 1] + block + s[i + 1:])
    m = rd('countryIsoMap.ts')
    if "  ye: '887'," not in m:
        wr('countryIsoMap.ts', m.replace("  iq: '368',\n", "  iq: '368',\n  ye: '887',\n", 1))
    p = '../src/components/TravelBanNotice.tsx'
    s = open(p).read()
    if '\n  ye: {' not in s:
        i = s.index("  // 0404.go.kr notice of 2026-08-13")
        open(p, 'w').write(s[:i] + NOTICE + s[i:])


def finish():
    ids = [c['id'] for c in CITIES]
    k = rd('countries.ts')
    old = "cityIds: ['baghdad', 'basra', 'erbil', " + ', '.join(f"'{x}'" for x in ids) + "],"
    assert old in k, 'iraq list'
    k = k.replace(old, "cityIds: ['baghdad', 'basra', 'erbil'],")
    order = [x for g in YE_ORDER for x in g[2]]
    body = ("cityIds: [" + ', '.join(f"'{x}'" for x in order) + "],\n    cityGroups: [\n"
            + ''.join(f"      {{ title: {{ ko: '{ko}', en: '{en}' }}, cityIds: [{', '.join(repr(x) for x in g)}] }},\n" for ko, en, g in YE_ORDER) + '    ],')
    i = k.index("    id: 'ye',")
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
