#!/usr/bin/env python3
"""Egypt (2026-11-08). Practical info and alerts from the Korean Foreign Ministry page (0404.go.kr/ntnSafetyInfo/178/
detail): level 1 in Cairo and the Nile-valley cities, the Mediterranean coast, Dahab and Sharm el-Sheikh; level 2 in the
Western Desert and parts of southern Sinai; level 3 in central/northern Sinai and within 30 km of the Libyan border.
No visa waiver for Korean passports: visa on arrival / e-visa, USD 36 since 2026-08-01. Cities: Cairo, Luxor, Aswan,
Alexandria, Hurghada. Rail times are ENR's usual timings, rounded. Run once."""
import add_daytrip_places3 as T
from add_daytrip_places import rd, wr
from add_slovakia_cities import H

DAY = ('근교 당일치기', 'Day trip')
RC = 'routes-central.ts'
R_AFTER = r"^  r\('madrid', 'casablanca', 'flight', 95\),\n"
COMMON = dict(country='eg', group_title=None, hubs_file='hubs-central.ts', hubs_before='  seville: {\n', itin_file='itinerary-iberia.ts',
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
    id: 'eg',
    region: 'mena',
    name: { ko: '이집트', en: 'Egypt' },
    nativeName: 'مصر · Miṣr',
    flagImage: '/flags/eg.svg',
    landmarkImage: '/landmarks/landmark-eg.jpg',
    flag: '🇪🇬',
    blurb: {
      ko: '나일강을 따라 5천 년 문명이 이어지는 나라. 기자 피라미드와 룩소르 신전, 아부심벨, 홍해 바다가 유럽에서 4시간 남짓 비행 거리에 있습니다.',
      en: 'Five thousand years of civilisation along the Nile—the Giza pyramids, Luxor’s temples, Abu Simbel and the Red Sea, about four hours’ flight from Europe.',
    },
    facts: {
      population: { ko: '약 1억 700만 명 (2024년 추계)', en: 'Approx. 107 million (2024 estimate)' },
      area: { ko: '약 100만 1,450 km²', en: 'Approx. 1,001,450 km²' },
      capital: { ko: '카이로 (Cairo)', en: 'Cairo' },
      currency: { ko: '이집트 파운드 (EGP, E£)', en: 'Egyptian pound (EGP, E£)' },
    },
    currencyCode: 'EGP',
    currencySymbol: 'E£',
    schengen: false,
    flagColors: {
      primary: '#CE1126',
      secondary: '#000000',
      accent: '#C09300',
      background: '#E8F0FA',
      text: '#0B2A4A',
    },
    cityIds: [],
  },
"""

ESSENTIALS = """  eg: {
    // Korean Foreign Ministry travel-safety page for Egypt (0404.go.kr/ntnSafetyInfo/178/detail), 2026-11.
    emergency: [num('122', '경찰', 'Police'), num('123', '구급', 'Ambulance'), num('126', '관광 경찰', 'Tourist police'), num('180', '소방', 'Fire')],
    embassy: {
      name: T('주이집트 대한민국 대사관', 'Korean Embassy in Egypt'),
      address: '3 Boulos Hanna St., Dokki, Cairo',
      phone: '+20-2-3761-1234',
      afterHours: '+20-12-8333-3236',
      source: 'https://www.0404.go.kr/ntnSafetyInfo/178/detail',
    },
    power: T('220V · 50Hz, C·F형 콘센트. 한국 플러그를 대부분 그대로 꽂을 수 있습니다.', '220V, 50Hz, type C/F sockets. Korean plugs usually fit.'),
    tipping: T('팁(박시시) 문화가 강해 식당에선 10% 안팎, 화장실·짐·안내를 도와준 사람에겐 몇 파운드를 줍니다. 잔돈을 넉넉히 준비하세요.', 'Tipping (baksheesh) is expected: around 10% in restaurants and a few pounds for toilets, porters and helpers—carry plenty of small notes.'),
    water: WATER_BOTTLED,
    shops: T('시장에선 값을 흥정합니다. 외화는 1만 달러 이상이면 입국 때 신고하고, 이집트 파운드는 5,000파운드까지만 가지고 나갈 수 있습니다.', 'Bargain in the markets. Declare foreign currency over USD 10,000 on arrival; you may take out no more than 5,000 Egyptian pounds.'),
    toilets: T('유적지 화장실은 관리인이 팁을 받는 경우가 많습니다. 휴지를 챙기세요.', 'Attendants at sites often expect a tip; carry tissues.'),
    time: T('UTC+2로 한국보다 7시간 늦습니다. 서머타임 기간(2026년은 4월 24일~10월 30일)엔 6시간 늦습니다.', 'UTC+2, 7 hours behind Korea; during daylight saving (24 April–30 October in 2026) 6 hours behind.'),
    safety: T('외교부 여행경보: 카이로 등 나일강 유역 도시와 지중해 연안, 다합·샴엘셰이크는 1단계(여행유의), 서부 사막과 남시나이 일부는 2단계(여행자제), 시나이반도 중·북부와 리비아 국경 30km 이내는 3단계(출국권고)입니다. 유적지 주변 호객과 사진 요금 요구가 많으니 조심하세요.', 'Korean travel alert: level 1 for Cairo and the Nile-valley cities, the Mediterranean coast, Dahab and Sharm el-Sheikh; level 2 for the Western Desert and parts of south Sinai; level 3 for central and northern Sinai and within 30 km of the Libyan border. Expect touts and photo fees around the sites.'),
    entry: T('한국 여권은 비자가 필요합니다. 공항에서 도착 비자(QR 비자, 2026년 8월 1일부터 36달러)를 사거나 전자비자를 미리 받습니다. 여권은 입국일 기준 6개월 이상 남아 있어야 합니다. 샴엘셰이크 등 시나이 남부만 갈 때는 14일 무료 비자가 나오지만, 시나이 밖으로 가려면 따로 비자를 사야 합니다.', 'Korean passports need a visa: buy a visa on arrival (QR visa, USD 36 from 1 August 2026) or get an e-visa in advance. Passports need 6 months’ validity from entry. A free 14-day stamp covers south Sinai resorts such as Sharm el-Sheikh only; going beyond Sinai needs a full visa.'),
    telecom: T('주요 통신사는 Vodafone·Orange·e&(Etisalat)·WE입니다. 공항에서 현지 유심을 사는 편이 쌉니다.', 'Main operators: Vodafone, Orange, e& (Etisalat) and WE. A local SIM from the airport is the cheapest option.'),
  },
"""

TRANSIT = """  eg: {
    summary: {
      ko: '우측통행. 카이로–룩소르–아스완과 카이로–알렉산드리아는 국철(ENR) 기차가, 먼 거리는 국내선이 편하고, 시내에선 우버·카림 같은 호출 앱이 흔합니다.',
      en: 'Drive on the right. ENR trains run Cairo–Luxor–Aswan and Cairo–Alexandria, domestic flights save time over long distances, and ride-hailing (Uber, Careem) is common in the cities.',
    },
    drivingSide: 'right',
    longDistance: {
      ko: '카이로–룩소르는 비행기로 약 1시간, 침대 열차로 약 10시간입니다. 룩소르–아스완은 기차나 나일강 크루즈로 갑니다.',
      en: 'Cairo to Luxor is about 1 hr by air or about 10 hrs by sleeper train; Luxor to Aswan by train or Nile cruise.',
    },
    paymentTip: {
      ko: '택시는 호출 앱이 값을 정해 줘 편합니다. 카이로 지하철은 1회권을 역에서 삽니다.',
      en: 'Ride-hailing apps fix the fare in advance; buy single Cairo metro tickets at the station.',
    },
    apps: [],
  },
"""

NOTICE = """  // 0404.go.kr Egypt page: alert levels (last adjusted 2023-08-04, Libyan border noted 2026-06) and the 2026-10-25 notice.
  eg: {
    icon: '⚠️',
    title: { ko: '외교부 여행경보 · 지역별 1~3단계', en: 'Korean travel alert · levels 1–3 by region' },
    lines: [
      {
        ko: '카이로 등 나일강 유역 도시, 지중해 연안, 다합·샴엘셰이크는 1단계(여행유의), 서부 사막과 남시나이 일부(성 카테리나·타바)는 2단계(여행자제), 시나이반도 중·북부와 리비아 국경 30km 이내는 3단계(출국권고)입니다.',
        en: 'Cairo and the Nile-valley cities, the Mediterranean coast, Dahab and Sharm el-Sheikh are level 1 (exercise caution); the Western Desert and parts of south Sinai (St Catherine, Taba) are level 2 (refrain from travel); central and northern Sinai and within 30 km of the Libyan border are level 3 (leave the country).',
      },
      {
        ko: '외교부는 2026년 10월 25일 최근 중동 지역 긴장 고조에 따른 안전 유의를 공지했습니다. 출발 전 최신 공지를 꼭 확인하세요.',
        en: 'On 25 October 2026 the ministry issued a safety notice on rising tension in the Middle East. Check the latest notices before you go.',
      },
    ],
    link: 'https://www.0404.go.kr/ntnSafetyInfo/178/detail',
  },
"""

CITIES = [
    C(id='cairo', after='kairouan', ko='카이로', en='Cairo', native='القاهرة · al-Qāhira', lat=30.0444, lng=31.2357,
      blurb=['나일강가의 아프리카 최대 도시. 기자 피라미드와 스핑크스, 투탕카멘 유물을 모은 대이집트 박물관, 천 개의 미너렛이 솟은 이슬람 카이로가 있습니다.',
             'Africa’s largest city on the Nile—the Giza pyramids and Sphinx, the Grand Egyptian Museum with Tutankhamun’s treasures, and the thousand minarets of Islamic Cairo.'],
      highlights=[
          H('기자 피라미드와 스핑크스', 'Giza Pyramids & Sphinx', '쿠푸·카프레·멘카우레 왕의 피라미드와 스핑크스가 선 고원으로, 세계 7대 불가사의 가운데 유일하게 남아 있습니다.', 'The plateau of the Khufu, Khafre and Menkaure pyramids and the Sphinx—the only surviving Wonder of the Ancient World.', 'Giza Pyramids', 180, 240, b='rec',
            n='이른 아침에 가면 덜 덥고 덜 붐빕니다. 피라미드 안 입장은 따로 표를 삽니다.|Go early to beat the heat and crowds; entry inside a pyramid is a separate ticket.'),
          H('대이집트 박물관', 'Grand Egyptian Museum', '기자 피라미드 옆에 2025년 전면 개관한 세계 최대의 고고학 박물관으로, 투탕카멘 유물 전체를 한자리에서 봅니다.', 'The world’s largest archaeological museum, fully opened beside the Giza pyramids in 2025, showing Tutankhamun’s whole treasure together.', 'Grand Egyptian Museum', 180, 240, b='rec'),
          H('이집트 박물관 (타흐리르)', 'Egyptian Museum (Tahrir)', '1902년 문을 연 붉은 건물의 박물관으로, 미라와 고대 유물이 빽빽합니다.', 'The red 1902 museum on Tahrir Square, packed with mummies and antiquities.', 'Egyptian Museum Cairo', 120, 150),
          H('칸 엘 칼릴리 시장', 'Khan el-Khalili', '14세기부터 이어진 시장 골목으로, 향신료·램프·은세공 가게와 1773년 문을 연 카페 엘 피샤위가 있습니다.', 'The bazaar lanes trading since the 14th century—spices, lamps and silverwork, and El Fishawy café, open since 1773.', 'Khan el-Khalili', 90, 120),
          H('알 무이즈 거리 (이슬람 카이로)', 'Al-Muizz Street (Islamic Cairo)', '파티마·맘루크 시대 모스크와 학교가 늘어선 세계유산 옛 거리입니다.', 'The World Heritage street of Fatimid and Mamluk mosques and colleges.', 'Al-Muizz Street', 90, 120),
          H('살라딘 성채와 무함마드 알리 모스크', 'Citadel of Saladin & Muhammad Ali Mosque', '12세기 성채 언덕 위 오스만 양식 대모스크로, 테라스에서 카이로 시내가 내려다보입니다.', 'The Ottoman-style great mosque on the 12th-century citadel hill, with city views from its terrace.', 'Cairo Citadel', 90, 120),
          H('콥트 카이로', 'Coptic Cairo', '로마 성채 위에 지은 ‘매달린 교회’ 등 초기 기독교 교회와 회당이 모인 옛 동네입니다.', 'The old quarter of early churches and a synagogue, including the Hanging Church built over a Roman fortress gate.', 'Hanging Church Cairo', 60, 90),
          H('사카라와 다슈르', 'Saqqara & Dahshur', '가장 오래된 계단 피라미드와 굴절 피라미드·붉은 피라미드가 있는 사막 유적입니다.', 'The desert necropolis of the oldest step pyramid and the Bent and Red Pyramids.', 'Pyramid of Djoser', 240, 300, group=DAY,
            n='카이로에서 차로 약 1시간이며 기사나 투어를 많이 씁니다.|About 1 hr by car from Cairo; most go with a driver or tour.'),
      ],
      hubs="    air: [['Cairo International (CAI)', '카이로 국제공항 (CAI)'], ['Sphinx International (SPX)', '스핑크스 국제공항 (SPX)', '기자 서쪽|west of Giza']],\n    rail: [['Ramses (Cairo Station)', '람세스역']],\n",
      itinerary=[1, 2, 3, 6, 5, 4, 7, 8],
      season='10~4월이 여행하기 좋고, 6~8월은 40℃를 넘기도 합니다. 라마단 기간엔 영업시간이 바뀝니다.|October–April is the best time; June–August can exceed 40 °C. Opening hours change during Ramadan.',
      stay=[('자말렉', 'Zamalek', 'Zamalek Cairo', FIRST, '나일강 섬의 조용한 동네로, 카페와 호텔이 많고 시내 중심이 가깝습니다.|A calm Nile-island neighbourhood of cafés and hotels close to downtown.'),
            ('기자 피라미드 근처', 'Near the Giza pyramids', 'Giza', '피라미드 보기|For the pyramids', '피라미드가 보이는 호텔이 많고 대이집트 박물관이 가깝습니다. 시내까지는 차로 40분 이상 걸립니다.|Many hotels with pyramid views, near the Grand Egyptian Museum; downtown is 40+ min by car.')],
      routes=[r('athens', 'cairo', 'flight', 120), r('istanbul', 'cairo', 'flight', 125), r('rome', 'cairo', 'flight', 205), r('paris', 'cairo', 'flight', 270), r('frankfurt', 'cairo', 'flight', 250)],
      transit=dict(modes=['metro', 'taxi', 'rideshare', 'walk'], ko='지하철 3개 노선과 호출 앱(우버·카림)으로 다닙니다. 피라미드·박물관은 차로 갑니다.', en='Use the three metro lines and ride-hailing (Uber, Careem); the pyramids and museum are reached by car.')),
    C(id='luxor', after='cairo', ko='룩소르', en='Luxor', native='الأقصر · al-Uqṣur', lat=25.6872, lng=32.6396,
      blurb=['고대 수도 테베가 있던 나일강가 도시로, ‘세계에서 가장 큰 야외 박물관’이라 불립니다. 강 동쪽엔 카르나크·룩소르 신전, 서쪽엔 왕가의 계곡과 하트셉수트 신전이 있습니다.',
             'Ancient Thebes on the Nile, called the world’s greatest open-air museum—Karnak and Luxor temples on the east bank, the Valley of the Kings and Hatshepsut’s temple on the west.'],
      highlights=[
          H('카르나크 신전', 'Karnak Temple', '134개의 거대한 기둥이 선 대열주실이 있는 고대 이집트 최대의 신전 단지입니다.', 'Ancient Egypt’s largest temple complex, with the Great Hypostyle Hall of 134 colossal columns.', 'Karnak Temple', 120, 180),
          H('룩소르 신전', 'Luxor Temple', '스핑크스 길로 카르나크와 이어진 시내 한복판 신전으로, 해 진 뒤 조명이 아름답습니다.', 'The temple in the heart of town, linked to Karnak by an avenue of sphinxes—beautiful when lit after dark.', 'Luxor Temple', 60, 90),
          H('왕가의 계곡', 'Valley of the Kings', '파라오 60여 명이 묻힌 서안의 골짜기로, 기본 표로 무덤 세 곳을 보고 투탕카멘 무덤은 따로 표를 삽니다.', 'The west-bank valley of some 60 royal tombs; a standard ticket covers three, with Tutankhamun’s tomb extra.', 'Valley of the Kings', 150, 180),
          H('하트셉수트 장제전', 'Temple of Hatshepsut', '절벽 아래 계단식으로 지은 여왕 하트셉수트의 장제전입니다.', 'Queen Hatshepsut’s terraced mortuary temple at the foot of the cliffs.', 'Mortuary Temple of Hatshepsut', 60, 90),
          H('멤논의 거상', 'Colossi of Memnon', '서안 들판에 선 18m 높이의 아멘호테프 3세 좌상 두 개입니다.', 'Two 18 m seated statues of Amenhotep III on the west-bank plain.', 'Colossi of Memnon', 15, 20),
          H('열기구 투어', 'Hot-air balloon ride', '해 뜰 무렵 열기구를 타고 서안의 신전과 나일강을 내려다봅니다.', 'A sunrise balloon flight over the west-bank temples and the Nile.', 'Luxor hot air balloon', 180, 240, b='req',
            n='새벽 5시 무렵 출발하며 바람이 세면 취소됩니다.|Departs around 5 am and is cancelled in strong wind.'),
      ],
      hubs="    air: [['Luxor International (LXR)', '룩소르 공항 (LXR)']],\n    rail: [['Luxor', '룩소르역']],\n",
      itinerary=[2, 1, 6, 3, 4, 5],
      season='10~4월이 좋습니다. 여름 낮은 40℃를 훌쩍 넘어 아침 일찍 다니세요.|October–April is best; summer days soar past 40 °C, so start early.',
      stay=[('동안 시내', 'East bank', 'Luxor Corniche', FIRST, '신전과 역, 식당이 걸어서 닿습니다. 서안은 배나 다리로 건넙니다.|Temples, station and restaurants on foot; cross to the west bank by ferry or bridge.')],
      routes=[r('cairo', 'luxor', 'flight', 60), r('cairo', 'luxor', 'train', 600, "{ fa: '람세스역|Ramses', n: '침대 열차·주간 열차|sleeper and day trains' }")],
      transit=dict(modes=['walk', 'taxi', 'ferry', 'bike'], ko='동안은 걸어서, 서안 유적은 택시를 하루 빌려 다닙니다. 강은 공공 페리로 건넙니다.', en='Walk the east bank; hire a taxi for the day for the west bank, crossing the river by public ferry.')),
    C(id='aswan', after='luxor', ko='아스완', en='Aswan', native='أسوان · Aswān', lat=24.0889, lng=32.8998,
      blurb=['누비아 땅의 나일강 남쪽 도시. 돛단배 펠루카가 오가는 강과 섬 위의 필레 신전이 있고, 람세스 2세의 아부심벨 신전에 다녀옵니다.',
             'The Nile’s southern town in Nubian country—feluccas on the river, Philae Temple on its island, and the trip to Ramses II’s Abu Simbel.'],
      highlights=[
          H('필레 신전', 'Philae Temple', '댐 건설로 옮겨 지은 섬 위의 이시스 신전으로, 배를 타고 들어갑니다.', 'The temple of Isis rebuilt on an island after the dams were built, reached by boat.', 'Philae Temple', 90, 120),
          H('펠루카와 누비아 마을', 'Felucca & Nubian village', '전통 돛단배 펠루카를 타고 나일강을 건너 색색의 누비아 마을(가르브 소헤일)을 찾습니다.', 'Sail a felucca across the Nile to the colourful Nubian village of Gharb Soheil.', 'Gharb Soheil', 120, 180),
          H('미완성 오벨리스크', 'Unfinished Obelisk', '채석장 바위에 금이 가 버려진 길이 약 42m의 오벨리스크입니다.', 'An obelisk of about 42 m abandoned in its quarry when the rock cracked.', 'Unfinished Obelisk', 30, 45),
          H('아스완 하이 댐', 'Aswan High Dam', '나세르호를 만든 거대한 댐으로, 위에서 호수와 강을 봅니다.', 'The vast dam that created Lake Nasser, with views over the lake and river.', 'Aswan High Dam', 30, 45),
          H('아부심벨 신전', 'Abu Simbel', '람세스 2세의 거대한 좌상 네 개가 지키는 바위 신전으로, 수몰을 피해 통째로 옮겨 세웠습니다.', 'The rock temple guarded by four colossal statues of Ramses II, moved block by block to escape the rising lake.', 'Abu Simbel temples', 600, 720, group=DAY,
            n='아스완에서 차로 약 3시간 30분(새벽 출발)이며, 비행기로도 갑니다.|About 3 hr 30 by road from Aswan (pre-dawn departure), or by plane.'),
      ],
      hubs="    air: [['Aswan International (ASW)', '아스완 공항 (ASW)'], ['Abu Simbel (ABS)', '아부심벨 공항 (ABS)']],\n    rail: [['Aswan', '아스완역']],\n",
      itinerary=[1, 3, 4, 2, 5],
      season='10~3월이 좋습니다. 여름엔 이집트에서 가장 덥습니다.|October–March is best; summer here is the hottest in Egypt.',
      stay=[('나일강변', 'Nile corniche', 'Aswan Corniche', FIRST, '강변 호텔에서 펠루카를 보고, 역과 시장이 걸어서 닿습니다.|Riverside hotels with felucca views, near the station and souk.')],
      routes=[r('luxor', 'aswan', 'train', 180), r('cairo', 'aswan', 'flight', 80)],
      transit=dict(modes=['walk', 'taxi', 'ferry'], ko='강변은 걸어서, 섬과 서안은 배로, 필레·댐은 택시로 갑니다.', en='Walk the corniche; boats go to the islands and west bank, taxis to Philae and the dam.')),
    C(id='alexandria', after='aswan', ko='알렉산드리아', en='Alexandria', native='الإسكندرية · al-Iskandariyya', lat=31.2001, lng=29.9187,
      blurb=['알렉산드로스 대왕이 세운 지중해의 항구 도시. 고대 도서관을 되살린 비블리오테카와 등대 자리의 콰이트베이 요새, 해안로 코르니시가 있습니다.',
             'The Mediterranean port founded by Alexander the Great—the Bibliotheca reviving the ancient library, Qaitbay Fort on the lighthouse site, and the seafront Corniche.'],
      highlights=[
          H('비블리오테카 알렉산드리나', 'Bibliotheca Alexandrina', '고대 알렉산드리아 도서관을 기리며 2002년 문을 연 원반 모양 도서관으로, 박물관과 전시가 있습니다.', 'The disc-shaped library opened in 2002 in memory of the ancient one, with museums and exhibitions.', 'Bibliotheca Alexandrina', 90, 120, c='fri'),
          H('콰이트베이 요새', 'Citadel of Qaitbay', '고대 파로스 등대 자리에 15세기에 지은 바닷가 요새입니다.', 'The 15th-century seaside fort on the site of the ancient Pharos lighthouse.', 'Citadel of Qaitbay', 60, 75),
          H('콤 엘 쇼카파 지하 묘지', 'Catacombs of Kom el Shoqafa', '이집트와 그리스·로마 양식이 섞인 2세기 지하 묘지입니다.', 'Second-century underground tombs mixing Egyptian and Greco-Roman styles.', 'Catacombs of Kom El Shoqafa', 45, 60),
          H('몬타자 궁전 정원', 'Montaza Palace Gardens', '바닷가 왕실 별궁 둘레의 넓은 정원과 해변입니다.', 'The broad gardens and beaches around the seaside royal palace.', 'Montaza Palace', 60, 90),
          H('코르니시', 'The Corniche', '항구를 따라 수 km 이어지는 해안 산책로로, 해산물 식당과 카페가 늘어서 있습니다.', 'The seafront promenade running for kilometres around the harbour, lined with seafood restaurants and cafés.', 'Corniche Alexandria', 60, 90),
      ],
      hubs="    air: [['Borg El Arab (HBE)', '보르그 엘 아랍 공항 (HBE)']],\n    rail: [['Misr Station', '미스르역']],\n",
      itinerary=[2, 5, 1, 3, 4],
      season='여름에도 바닷바람에 카이로보다 선선해 이집트 사람들의 피서지입니다. 겨울엔 비가 오기도 합니다.|Cooler than Cairo in summer thanks to the sea breeze—Egyptians’ summer resort; winter brings some rain.',
      stay=[('코르니시', 'The Corniche', 'Corniche Alexandria', FIRST, '바다가 보이는 호텔이 많고 요새와 도서관이 가깝습니다.|Many sea-view hotels near the fort and library.')],
      routes=[r('cairo', 'alexandria', 'train', 150, "{ fa: '람세스역|Ramses', fb: '미스르역|Misr Station' }")],
      transit=dict(modes=['walk', 'tram', 'taxi', 'rideshare'], ko='코르니시는 걸어서, 그 밖은 택시·호출 앱이나 옛 트램으로 다닙니다.', en='Walk the Corniche; use taxis, ride-hailing or the old trams elsewhere.')),
    C(id='hurghada', after='alexandria', ko='후르가다', en='Hurghada', native='الغردقة · al-Ghardaqa', lat=27.2579, lng=33.8116,
      blurb=['홍해 서쪽 해안의 휴양 도시. 산호초 사이로 스노클링과 다이빙을 하러 배가 나가고, 룩소르까지 차로 4시간 남짓이라 함께 묶어 여행합니다.',
             'A resort town on the Red Sea coast—boats head out to snorkel and dive the coral reefs, and Luxor is about four hours away by road.'],
      highlights=[
          H('기프툰 섬 스노클링', 'Giftun Island snorkelling', '맑은 물과 산호초가 있는 국립공원 섬으로, 배를 타고 가서 스노클링과 다이빙을 합니다.', 'A national-park island of clear water and reefs, reached by boat for snorkelling and diving.', 'Giftun Island', 360, 480, b='rec'),
          H('후르가다 마리나', 'Hurghada Marina', '요트가 정박한 산책로로, 식당과 카페가 늘어서 있습니다.', 'The yacht-lined promenade of restaurants and cafés.', 'Hurghada Marina', 60, 90),
          H('사막 사파리', 'Desert safari', '사륜구동차나 사막 버기를 타고 동부 사막의 베두인 마을을 찾습니다.', 'A 4×4 or buggy trip into the Eastern Desert to a Bedouin village.', 'Hurghada desert safari', 240, 300),
          H('엘 구나', 'El Gouna', '석호와 운하 사이에 지은 휴양 마을로, 카이트서핑과 마리나가 있습니다.', 'A resort town built among lagoons and canals, with kitesurfing and a marina.', 'El Gouna', 180, 240, group=DAY,
            n='후르가다에서 차로 약 30분입니다.|About 30 min by car from Hurghada.'),
      ],
      hubs="    air: [['Hurghada International (HRG)', '후르가다 공항 (HRG)']],\n    bus: [['Go Bus Hurghada', '고버스 터미널', '룩소르·카이로행|to Luxor and Cairo']],\n",
      itinerary=[2, 1, 3, 4],
      season='1년 내내 바다에 들어갈 수 있고, 여름 낮은 덥습니다. 겨울 바다는 조금 차갑습니다.|Swimmable all year; summer days are hot and the winter sea a little cool.',
      stay=[('시내 남쪽 해변 리조트', 'Beach resorts', 'Hurghada', FIRST, '해변 리조트가 길게 이어지고 공항이 가깝습니다.|A long strip of beach resorts close to the airport.')],
      routes=[r('cairo', 'hurghada', 'flight', 60), r('luxor', 'hurghada', 'bus', 270, "{ n: '고버스 등|Go Bus and others' }")],
      transit=dict(modes=['taxi', 'rideshare', 'bus'], ko='리조트와 시내는 택시나 호출 앱으로 다닙니다.', en='Use taxis or ride-hailing between the resorts and town.')),
]

EG_ORDER = [('카이로와 나일강 하류', 'Cairo & Lower Egypt', ['cairo', 'alexandria']), ('나일강 상류', 'Upper Egypt (Nile valley)', ['luxor', 'aswan']), ('홍해', 'Red Sea', ['hurghada'])]
TRIPS = {'cairo': [('사카라와 다슈르|Saqqara & Dahshur', 8)], 'aswan': [('아부심벨|Abu Simbel', 5)], 'hurghada': [('엘 구나|El Gouna', 4)]}


def setup():
    k = rd('countries.ts')
    if "id: 'eg'," not in k:
        i = k.rindex('\n]\n\nexport function getCountry')
        k = k[:i + 1] + COUNTRY + k[i + 1:]
        wr('countries.ts', k)
    for f, block, anchor in [('essentials.ts', ESSENTIALS, '\n  xc: {'), ('transit.ts', TRANSIT, '\n  gi: {')]:
        s = rd(f)
        if '\n  eg: {' not in s:
            i = s.index(anchor)
            wr(f, s[:i + 1] + block + s[i + 1:])
    m = rd('countryIsoMap.ts')
    if "  eg: '818'," not in m:
        wr('countryIsoMap.ts', m.replace("  tn: '788',\n", "  tn: '788',\n  eg: '818',\n", 1))
    p = '../src/components/TravelBanNotice.tsx'
    s = open(p).read()
    if '\n  eg: {' not in s:
        i = s.index("  // 0404.go.kr notice of 2026-08-13")
        open(p, 'w').write(s[:i] + NOTICE + s[i:])


def finish():
    ids = [c['id'] for c in CITIES]
    k = rd('countries.ts')
    old = "cityIds: ['tunis', 'sousse', 'monastir', 'kairouan', " + ', '.join(f"'{x}'" for x in ids) + "],"
    assert old in k, 'tunisia list'
    k = k.replace(old, "cityIds: ['tunis', 'sousse', 'monastir', 'kairouan'],")
    order = [x for g in EG_ORDER for x in g[2]]
    body = ("cityIds: [" + ', '.join(f"'{x}'" for x in order) + "],\n    cityGroups: [\n"
            + ''.join(f"      {{ title: {{ ko: '{ko}', en: '{en}' }}, cityIds: [{', '.join(repr(x) for x in g)}] }},\n" for ko, en, g in EG_ORDER) + '    ],')
    i = k.index("    id: 'eg',")
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
