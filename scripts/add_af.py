#!/usr/bin/env python3
"""Afghanistan (2026-11-11). Korean Foreign Ministry page (0404.go.kr/ntnSafetyInfo/284/detail): travel-ban country since
2007-08, extended to 2027-01-31 (notice 2026-08-24); the embassy works from a temporary office in Qatar. Handled like Belarus/
Libya (user decision 2026-11-09): travel-ban notice, basics, cities and sights, no restaurants or stay areas.
Cities: Kabul, Bamiyan (Band-e Amir), Mazar-i-Sharif (Balkh), Herat. Run once."""
import add_daytrip_places3 as T
from add_daytrip_places import rd, wr
from add_slovakia_cities import H

DAY = ('근교 당일치기', 'Day trip')
RC = 'routes-central.ts'
R_AFTER = r"^  r\('amman', 'doha', 'flight', 165\),\n"
COMMON = dict(country='af', group_title=None, hubs_file='hubs-central.ts', hubs_before='  seville: {\n', itin_file='itinerary-iberia.ts',
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
    id: 'af',
    region: 'mena',
    name: { ko: '아프가니스탄', en: 'Afghanistan' },
    nativeName: 'افغانستان · Afghānistān',
    flagImage: '/flags/af.svg',
    landmarkImage: '/landmarks/landmark-af.jpg',
    flag: '🇦🇫',
    blurb: {
      ko: '한국 정부 지정 여행금지국. 바미안 석불 터와 반데아미르 호수, 마자르이샤리프의 푸른 모스크, 헤라트의 성채가 있습니다.',
      en: 'A Korean travel-ban country—the Bamiyan Buddha niches and Band-e Amir lakes, Mazar-i-Sharif’s Blue Mosque and Herat’s citadel.',
    },
    facts: {
      population: { ko: '약 4,200만 명 (2024년)', en: 'Approx. 42 million (2024)' },
      area: { ko: '약 65만 2,000 km²', en: 'Approx. 652,000 km²' },
      capital: { ko: '카불 (Kabul)', en: 'Kabul' },
      currency: { ko: '아프가니 (AFN)', en: 'Afghani (AFN)' },
    },
    currencyCode: 'AFN',
    currencySymbol: '؋',
    schengen: false,
    flagColors: {
      primary: '#000000',
      secondary: '#D32011',
      accent: '#007A36',
      background: '#E8F0FA',
      text: '#0B2A4A',
    },
    cityIds: [],
  },
"""

ESSENTIALS = """  af: {
    // Korean Foreign Ministry travel-safety page for Afghanistan (0404.go.kr/ntnSafetyInfo/284/detail), 2026-11. The page shows no embassy address.
    emergency: [num('119', '경찰(범죄)', 'Police (crime)'), num('100', '소방', 'Fire'), num('102', '구급', 'Ambulance')],
    embassy: {
      name: T('주아프가니스탄 대한민국 대사관 (카타르 임시사무소)', 'Korean Embassy in Afghanistan (temporary office in Qatar)'),
      address: 'Doha, Qatar',
      phone: '+974-4463-9555',
      afterHours: '+82-2-3210-0404',
      source: 'https://www.0404.go.kr/ntnSafetyInfo/284/detail',
    },
    power: T('220V · 50Hz. 콘센트 모양이 여러 가지라 멀티 어댑터를 챙기세요.', '220V, 50Hz; socket types vary, so bring a universal adapter.'),
    tipping: T('팁 문화가 없습니다.', 'There is no tipping culture.'),
    water: WATER_BOTTLED,
    shops: T('현금 사회입니다. 미화 5,000달러 이상을 가지고 나갈 땐 미리 신고합니다.', 'Afghanistan runs on cash. Declare US$5,000 or more before taking it out.'),
    toilets: T('호텔 화장실을 이용합니다.', 'Use hotel toilets.'),
    time: T('UTC+4:30, 서머타임 없음. 한국보다 4시간 30분 늦습니다.', 'UTC+4:30 with no daylight saving: 4 hrs 30 behind Korea.'),
    safety: T('외교부가 2007년 8월부터 아프가니스탄 전역을 여행금지국으로 지정했습니다. 외국인은 극단주의 무장 단체의 주요 테러 표적이고, 납치와 폭탄 테러 위험이 큽니다. 운전과 거리 보행 모두 매우 위험하며 대중교통은 쓰지 말라고 권고합니다. 선교 활동은 현지법 위반이자 테러 위협을 부릅니다.', 'Korea has designated all of Afghanistan a travel-ban country since August 2007. Foreigners are prime targets for extremist groups, and the risk of kidnapping and bombings is high. Driving and even walking in the street are very dangerous, and public transport should be avoided. Proselytising breaks local law and invites terrorist threats.'),
    entry: T('여행금지국이라 외교부의 예외적 여권 사용 허가 없이는 입국할 수 없고, 어기면 여권법에 따라 처벌받습니다. 무비자·도착 비자 모두 안 됩니다. 허가를 받아도 경비 업체의 무장 경호와 방탄 차량을 준비하라고 안내합니다.', 'As a travel-ban country, Afghanistan cannot be entered without the Korean Foreign Ministry’s exceptional passport-use permission; violations are punishable under the Passport Act. There is neither visa-free entry nor a visa on arrival. Even with permission, the ministry advises armed security escorts and armoured vehicles.'),
    telecom: T('한국 통신사 로밍 가능 여부를 출발 전에 확인하세요.', 'Check roaming with your carrier before you go.'),
  },
"""

TRANSIT = """  af: {
    summary: {
      ko: '우측통행. 외교부는 대중교통을 쓰지 말고 현지 운전기사와 경호원을 두라고 권고합니다.',
      en: 'Drive on the right. The Korean ministry advises against public transport—use a local driver and guards.',
    },
    drivingSide: 'right',
    longDistance: {
      ko: '카불에서 헤라트·마자르이샤리프로 국내선(아리아나 항공·캄 에어)이 다닙니다.',
      en: 'Domestic flights (Ariana, Kam Air) link Kabul with Herat and Mazar-i-Sharif.',
    },
    paymentTip: {
      ko: '현금으로 냅니다.',
      en: 'Pay in cash.',
    },
    apps: [],
  },
"""

NOTICE = """  // 0404.go.kr Afghanistan page: travel-ban country since 2007-08, extended to 2027-01-31 (2026-08-24 notice).
  af: {
    icon: '⛔',
    title: { ko: '여행금지국', en: 'Travel ban' },
    lines: [
      {
        ko: '한국 정부가 2007년 8월부터 아프가니스탄 전역을 여행금지 지역으로 지정했습니다(2027년 1월 31일까지). 외교부의 예외적 여권 사용 허가 없이 입국하면 여권법에 따라 처벌받을 수 있습니다.',
        en: 'The Korean government has designated all of Afghanistan a travel-ban area since August 2007 (now until 31 January 2027). Entering without the Foreign Ministry’s exceptional passport-use permission can be punished under the Passport Act.',
      },
      {
        ko: '외국인을 노린 테러와 납치 위험이 큽니다. 주아프가니스탄 대사관은 카타르의 임시사무소에서 일합니다. 이 앱의 정보는 참고용이며 여행을 권하지 않습니다.',
        en: 'The risk of terrorism and kidnapping aimed at foreigners is high. The Korean Embassy works from a temporary office in Qatar. The information here is for reference only and is not a suggestion to travel.',
      },
    ],
    link: 'https://www.0404.go.kr/ntnSafetyInfo/284/detail',
  },
"""

CITIES = [
    C(id='kabul', after='aleppo', ko='카불', en='Kabul', native='کابل · Kābul', lat=34.5553, lng=69.2075,
      blurb=['힌두쿠시 산맥에 둘러싸인 해발 1,800m의 수도. 무굴 제국을 세운 바부르가 잠든 정원과, 아프가니스탄의 역사를 모은 국립 박물관이 있습니다.',
             'The capital at 1,800 m, ringed by the Hindu Kush—with the garden where Babur, founder of the Mughal Empire, lies buried, and the National Museum of Afghan history.'],
      highlights=[
          H('바부르 정원', 'Babur’s Garden', '무굴 제국 첫 황제 바부르의 무덤이 있는 계단식 정원입니다.', 'The terraced garden holding the tomb of Babur, first Mughal emperor.', 'Bagh-e Babur', 60, 90),
          H('아프가니스탄 국립 박물관', 'National Museum of Afghanistan', '내전 때 약탈과 파괴를 견딘 유물을 모은 박물관입니다.', 'The museum of treasures that survived looting and destruction during the wars.', 'National Museum of Afghanistan', 60, 90),
          H('다룰 아만 궁전', 'Darul Aman Palace', '1920년대 지은 유럽식 궁전으로, 내전으로 부서졌다 복원됐습니다.', 'The European-style palace of the 1920s, ruined in the wars and since restored.', 'Darul Aman Palace', 30, 45),
          H('무라드 하니 옛 시가', 'Murad Khani (Old City)', '흙벽돌과 나무 조각 저택이 남은 옛 동네로, 공예 학교가 있습니다.', 'The old quarter of mud-brick and carved-wood houses, with a crafts school.', 'Murad Khani Kabul', 60, 90),
          H('샤도 샴시라 모스크', 'Shah-Do Shamshira Mosque', '카불강 옆의 노란색 바로크풍 2층 모스크입니다.', 'The yellow two-storey baroque-style mosque beside the Kabul River.', 'Shah-Do Shamshira Mosque', 15, 20),
      ],
      hubs="    air: [['Kabul International (KBL)', '카불 국제공항 (KBL)', '시내에서 북동쪽으로 약 5km|about 5 km north-east of the centre']],\n",
      itinerary=[1, 3, 2, 5, 4],
      season='봄(4~6월)과 가을(9~10월)이 좋습니다. 겨울은 춥고 눈이 오며, 여름 낮은 덥습니다.|Spring (April–June) and autumn (September–October) are best; winters are cold and snowy, summer days hot.',
      stay=[],
      routes=[r('dubai', 'kabul', 'flight', 180), r('istanbul', 'kabul', 'flight', 330)],
      transit=dict(modes=['taxi'], ko='현지 운전기사와 경호원을 두고 차로만 다니라고 권고합니다.', en='The ministry advises moving only by car with a local driver and guards.')),
    C(id='bamiyan', after='kabul', ko='바미안', en='Bamiyan', native='بامیان · Bāmiyān', lat=34.8213, lng=67.8273,
      blurb=['힌두쿠시 산속 실크로드의 불교 성지. 2001년 탈레반이 파괴한 거대 석불의 빈 감실이 절벽에 남은 세계유산이고, 서쪽엔 푸른 호수가 이어진 반데아미르 국립공원이 있습니다.',
             'A Buddhist centre of the Silk Road high in the Hindu Kush—the cliff niches of the giant Buddhas destroyed by the Taliban in 2001 are a World Heritage site, with the blue lakes of Band-e Amir National Park to the west.'],
      highlights=[
          H('바미안 석불 터', 'Buddhas of Bamiyan (niches)', '높이 55m·38m 석불이 서 있던 절벽 감실과, 벽화가 남은 석굴들입니다.', 'The cliff niches where the 55 m and 38 m Buddhas stood, and caves with surviving murals.', 'Buddhas of Bamiyan', 90, 120),
          H('샤레 골골라', 'Shahr-e Gholghola', '13세기 칭기즈칸 군대가 무너뜨렸다는 ‘비명의 도시’ 언덕 유적입니다.', 'The hilltop ‘City of Screams’, said to have been razed by Genghis Khan’s army in the 13th century.', 'Shahr-e Gholghola', 45, 60),
          H('샤레 조하크', 'Shahr-e Zuhak', '계곡 입구 붉은 절벽 위의 옛 성채 유적입니다.', 'The ruined fortress on red cliffs at the valley’s entrance.', 'Shahr-e Zuhak', 45, 60),
          H('반데아미르 국립공원', 'Band-e Amir National Park', '석회 둑으로 이어진 짙푸른 호수 여섯 개가 펼쳐진 아프가니스탄 첫 국립공원입니다.', 'Afghanistan’s first national park, a chain of six deep-blue lakes held back by travertine dams.', 'Band-e Amir National Park', 240, 300, group=DAY,
            n='바미안에서 서쪽으로 약 75km입니다.|About 75 km west of Bamiyan.'),
      ],
      hubs="    air: [['Bamyan (BIN)', '바미안 공항 (BIN)', '국내선|domestic flights']],\n",
      itinerary=[1, 2, 3, 4],
      season='5~10월이 좋습니다. 해발 2,500m라 겨울은 매우 춥고 눈이 많습니다.|May–October is best; at 2,500 m, winters are bitterly cold and snowy.',
      stay=[],
      routes=[r('kabul', 'bamiyan', 'mixed', 300)],
      transit=dict(modes=['taxi'], ko='차와 현지 가이드를 구해 다닙니다.', en='Get around with a car and a local guide.')),
    C(id='mazar-i-sharif', after='bamiyan', ko='마자르이샤리프', en='Mazar-i-Sharif', native='مزار شریف · Mazār-i Sharīf', lat=36.7090, lng=67.1100,
      blurb=['북부의 중심 도시로, 푸른 타일로 덮인 ‘블루 모스크’가 도시 한가운데 있습니다. 서쪽엔 ‘도시의 어머니’라 불린 고대 도시 발흐가 있습니다.',
             'The main city of the north, centred on the turquoise-tiled ‘Blue Mosque’—with ancient Balkh, the ‘Mother of Cities’, to the west.'],
      highlights=[
          H('블루 모스크 (하즈라트 알리 성묘)', 'Blue Mosque (Shrine of Ali)', '푸른 타일로 뒤덮인 성묘로, 하얀 비둘기 떼로 유명합니다.', 'The shrine covered in blue tiles, famous for its flocks of white doves.', 'Blue Mosque Mazar-i-Sharif', 60, 90),
          H('발흐', 'Balkh', '조로아스터교와 불교, 이슬람이 거쳐 간 고대 도시로, 그린 모스크와 노 곤바드 모스크 유적이 있습니다.', 'The ancient city of Zoroastrian, Buddhist and Islamic eras, with the Green Mosque and the ruined Noh Gonbad mosque.', 'Balkh Afghanistan', 180, 240, group=DAY,
            n='마자르이샤리프에서 서쪽으로 약 20km입니다.|About 20 km west of Mazar-i-Sharif.'),
      ],
      hubs="    air: [['Mazar-i-Sharif International (MZR)', '마자르이샤리프 국제공항 (MZR)', '시내에서 동쪽으로 약 9km|about 9 km east of the centre']],\n",
      itinerary=[1, 2],
      season='봄·가을이 좋습니다. 3월 노루즈(새해)엔 모스크에서 깃발을 올리는 축제가 열립니다.|Spring and autumn are best; at Nowruz in March, a flag-raising festival is held at the mosque.',
      stay=[],
      routes=[r('kabul', 'mazar-i-sharif', 'flight', 60)],
      transit=dict(modes=['taxi'], ko='차로 다닙니다.', en='Get around by car.')),
    C(id='herat', after='mazar-i-sharif', ko='헤라트', en='Herat', native='هرات · Herāt', lat=34.3529, lng=62.2040,
      blurb=['이란 국경 가까운 서부의 오아시스 도시로, 티무르 제국 때 페르시아 문화의 중심이었습니다. 알렉산드로스 시대부터 이어진 성채와 타일이 화려한 금요 모스크가 있습니다.',
             'The oasis city of the west near the Iranian border, a centre of Persian culture under the Timurids—with a citadel dating back to Alexander’s time and the richly tiled Friday Mosque.'],
      highlights=[
          H('헤라트 성채', 'Citadel of Herat', '알렉산드로스 대왕 시대에 처음 세웠다는 성채로, 복원 뒤 박물관이 되었습니다.', 'The citadel said to have been founded in Alexander the Great’s time, restored and now a museum.', 'Citadel of Herat', 60, 90),
          H('헤라트 금요 모스크', 'Friday Mosque of Herat', '푸른 타일 장식이 화려한 대모스크로, 지금도 타일 공방이 있습니다.', 'The great mosque of brilliant blue tilework, with a tile workshop still at work.', 'Friday Mosque Herat', 45, 60),
          H('무살라 미너렛', 'Musalla Minarets', '티무르 시대 건물 단지에서 남은 기울어진 미너렛들입니다.', 'The leaning minarets left from the Timurid Musalla complex.', 'Musalla Complex Herat', 30, 45),
          H('가우하르 샤드 영묘', 'Gawhar Shad Mausoleum', '티무르 왕조의 왕비 가우하르 샤드가 잠든 골이 진 돔의 영묘입니다.', 'The ribbed-dome tomb of the Timurid queen Gawhar Shad.', 'Gawhar Shad Mausoleum', 20, 30),
      ],
      hubs="    air: [['Herat International (HEA)', '헤라트 국제공항 (HEA)', '시내에서 남쪽으로 약 15km|about 15 km south of the centre']],\n",
      itinerary=[1, 2, 3, 4],
      season='봄·가을이 좋습니다. 여름엔 ‘120일 바람’이라 불리는 강한 바람이 붑니다.|Spring and autumn are best; summer brings the strong ‘wind of 120 days’.',
      stay=[],
      routes=[r('kabul', 'herat', 'flight', 75)],
      transit=dict(modes=['taxi'], ko='차로 다닙니다.', en='Get around by car.')),
]

AF_ORDER = [('카불과 중부', 'Kabul & the centre', ['kabul', 'bamiyan']), ('북부', 'The north', ['mazar-i-sharif']), ('서부', 'The west', ['herat'])]
TRIPS = {'bamiyan': [('반데아미르|Band-e Amir', 4)], 'mazar-i-sharif': [('발흐|Balkh', 2)]}


def setup():
    k = rd('countries.ts')
    if "id: 'af'," not in k:
        i = k.rindex('\n]\n\nexport function getCountry')
        k = k[:i + 1] + COUNTRY + k[i + 1:]
        wr('countries.ts', k)
    for f, block, anchor in [('essentials.ts', ESSENTIALS, '\n  xc: {'), ('transit.ts', TRANSIT, '\n  gi: {')]:
        s = rd(f)
        if '\n  af: {' not in s:
            i = s.index(anchor)
            wr(f, s[:i + 1] + block + s[i + 1:])
    m = rd('countryIsoMap.ts')
    if "  af: '004'," not in m:
        wr('countryIsoMap.ts', m.replace("  sy: '760',\n", "  sy: '760',\n  af: '004',\n", 1))
    p = '../src/components/TravelBanNotice.tsx'
    s = open(p).read()
    if '\n  af: {' not in s:
        i = s.index("  // 0404.go.kr notice of 2026-08-13")
        open(p, 'w').write(s[:i] + NOTICE + s[i:])


def finish():
    ids = [c['id'] for c in CITIES]
    k = rd('countries.ts')
    old = "cityIds: ['damascus', 'homs', 'palmyra', 'aleppo', " + ', '.join(f"'{x}'" for x in ids) + "],"
    assert old in k, 'syria list'
    k = k.replace(old, "cityIds: ['damascus', 'homs', 'palmyra', 'aleppo'],")
    order = [x for g in AF_ORDER for x in g[2]]
    body = ("cityIds: [" + ', '.join(f"'{x}'" for x in order) + "],\n    cityGroups: [\n"
            + ''.join(f"      {{ title: {{ ko: '{ko}', en: '{en}' }}, cityIds: [{', '.join(repr(x) for x in g)}] }},\n" for ko, en, g in AF_ORDER) + '    ],')
    i = k.index("    id: 'af',")
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
