#!/usr/bin/env python3
"""Saudi Arabia (2026-11-09). Korean Foreign Ministry page (0404.go.kr/ntnSafetyInfo/107/detail): level 3 (leave the
country) nationwide since 2026-10-11; notices of 2026-11-04/08 (attacks in the centre and east, airport use in the west and
south-west). User rule: level-3 Gulf countries get the full guide with a notice. Cities: Riyadh, Jeddah, AlUla. Mecca and
Medina are closed to non-Muslims and are left out. Run once."""
import add_daytrip_places3 as T
from add_daytrip_places import rd, wr
from add_slovakia_cities import H

DAY = ('근교 당일치기', 'Day trip')
RC = 'routes-central.ts'
R_AFTER = r"^  r\('amman', 'doha', 'flight', 165\),\n"
COMMON = dict(country='sa', group_title=None, hubs_file='hubs-central.ts', hubs_before='  seville: {\n', itin_file='itinerary-iberia.ts',
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
    id: 'sa',
    region: 'mena',
    name: { ko: '사우디아라비아', en: 'Saudi Arabia' },
    nativeName: 'المملكة العربية السعودية',
    flagImage: '/flags/sa.svg',
    landmarkImage: '/landmarks/landmark-sa.jpg',
    flag: '🇸🇦',
    blurb: {
      ko: '아라비아반도 대부분을 차지하는 왕국. 2019년 관광 비자를 열면서 흙벽 도시 디리야와 수도 리야드, 홍해의 옛 항구 제다, 나바테아 무덤 도시 헤그라가 있는 알울라를 둘러볼 수 있게 됐습니다.',
      en: 'The kingdom covering most of the Arabian Peninsula, opened to tourist visas in 2019—Riyadh and the mud-brick Diriyah, the old Red Sea port of Jeddah, and AlUla with the Nabataean tombs of Hegra.',
    },
    facts: {
      population: { ko: '약 3,500만 명 (2024년)', en: 'Approx. 35 million (2024)' },
      area: { ko: '약 215만 km²', en: 'Approx. 2.15 million km²' },
      capital: { ko: '리야드 (Riyadh)', en: 'Riyadh' },
      currency: { ko: '사우디 리얄 (SAR, SR) · 고정 환율 1달러 ≈ 3.75리얄', en: 'Saudi riyal (SAR, SR), pegged at 3.75 to the US dollar' },
    },
    currencyCode: 'SAR',
    currencySymbol: 'SR',
    schengen: false,
    flagColors: {
      primary: '#006C35',
      secondary: '#FFFFFF',
      accent: '#006C35',
      background: '#E8F0FA',
      text: '#0B2A4A',
    },
    cityIds: [],
  },
"""

ESSENTIALS = """  sa: {
    // Korean Foreign Ministry travel-safety page for Saudi Arabia (0404.go.kr/ntnSafetyInfo/107/detail), 2026-11.
    emergency: [num('999', '경찰 (교통사고)', 'Police (traffic accidents)'), num('997', '구급', 'Ambulance'), num('998', '소방', 'Fire')],
    embassy: {
      name: T('주사우디아라비아 대한민국 대사관', 'Korean Embassy in Saudi Arabia'),
      address: 'Diplomatic Quarter, Riyadh (P.O. Box 94399)',
      phone: '+966-11-488-2211',
      afterHours: '+966-50-080-1065',
      note: T('제다·서부 지역은 주제다 총영사관(+966-12-668-1990, 24시간 +966-55-668-3432)이 맡습니다.', 'Jeddah and the west are covered by the Consulate General in Jeddah (+966-12-668-1990; 24 h +966-55-668-3432).'),
      source: 'https://www.0404.go.kr/ntnSafetyInfo/107/detail',
    },
    power: T('220V, 영국식(G형) 콘센트. 한국 플러그는 맞지 않아 어댑터가 필요합니다.', '220V with British-style (type G) sockets. Korean plugs do not fit; bring an adapter.'),
    tipping: T('팁은 의무가 아니지만 식당에선 10% 안팎을 두기도 합니다.', 'Tipping is optional; around 10% is common in restaurants.'),
    water: WATER_BOTTLED,
    shops: T('리얄은 미국 달러에 고정돼 있고 카드가 거의 어디서나 됩니다. 기도 시간엔 가게가 잠시 문을 닫기도 합니다.', 'The riyal is pegged to the US dollar and cards are accepted almost everywhere; some shops close briefly at prayer times.'),
    toilets: T('쇼핑몰·박물관·주유소 화장실을 이용합니다.', 'Use toilets in malls, museums and petrol stations.'),
    time: T('UTC+3, 서머타임 없음. 한국보다 6시간 늦습니다.', 'UTC+3 with no daylight saving: 6 hours behind Korea.'),
    safety: T('외교부 여행경보: 2026년 10월 11일부터 사우디 전역이 3단계(출국권고)입니다. 11월 8일 중부·동부 지역 공격 관련 안전 공지와, 11월 4일·8일 서부·서남부 공항 이용 주의 공지가 나와 있습니다. 예멘 국경 지역(지잔·아시르·나지란)과 동부 알아흐사·카티프는 피하세요. 술은 전면 금지이고, 공공장소에선 어깨와 무릎을 가립니다.', 'Korean travel alert: level 3 (leave the country) nationwide since 11 October 2026, with a notice on 8 November about attacks in the centre and east and notices on 4 and 8 November about airports in the west and south-west. Avoid the Yemen border regions (Jizan, Asir, Najran) and Al-Ahsa and Qatif in the east. Alcohol is banned outright; cover shoulders and knees in public.'),
    entry: T('한국 일반 여권은 비자가 필요합니다. 외교부 안내에 따르면 도착 비자(수수료 480리얄, 1년 동안 총 90일 체류)를 받을 수 있고, 전자 비자는 visitsaudi.com에서 안내합니다. 메카와 메디나 성역에는 무슬림만 들어갈 수 있습니다.', 'Ordinary Korean passports need a visa. The Korean ministry says a visa on arrival is issued (SR 480, up to 90 days in total within a year); e-visa details are at visitsaudi.com. Only Muslims may enter Mecca and the holy area of Medina.'),
    telecom: T('주요 통신사는 STC·Mobily·Zain입니다. 공항에서 관광객용 유심·eSIM을 살 수 있습니다.', 'Main operators: STC, Mobily and Zain; tourist SIMs and eSIMs are sold at the airport.'),
  },
"""

TRANSIT = """  sa: {
    summary: {
      ko: '우측통행. 리야드엔 2024년 말 개통한 리야드 메트로가 있고, 도시 사이는 국내선이 가장 편합니다. 하라메인 고속철도가 제다와 메디나를 잇습니다.',
      en: 'Drive on the right. Riyadh has the Riyadh Metro, opened in late 2024; domestic flights are the easiest way between cities, and the Haramain high-speed railway links Jeddah and Medina.',
    },
    drivingSide: 'right',
    longDistance: {
      ko: '리야드–제다는 비행기로 약 2시간, 알울라는 리야드·제다에서 국내선으로 갑니다.',
      en: 'Riyadh to Jeddah is about 2 hrs by air; AlUla is reached on domestic flights from Riyadh and Jeddah.',
    },
    paymentTip: {
      ko: '호출 앱(Uber·Careem)이 널리 쓰입니다. 리야드 메트로는 역 자판기나 앱으로 표를 삽니다.',
      en: 'Ride-hailing (Uber, Careem) is widely used; buy Riyadh Metro tickets from station machines or the app.',
    },
    apps: [],
  },
"""

NOTICE = """  // 0404.go.kr Saudi Arabia page: level 3 nationwide since 2026-10-11; notices of 2026-11-04 and 11-08.
  sa: {
    icon: '⚠️',
    title: { ko: '외교부 여행경보 · 3단계 출국권고', en: 'Korean travel alert · level 3, leave the country' },
    lines: [
      {
        ko: '2026년 10월 11일부터 사우디아라비아 전역이 3단계(출국권고) 지역입니다. 여행 예정이면 취소하거나 미루고, 머무는 중이면 꼭 필요한 일이 아니면 출국하라는 단계입니다.',
        en: 'All of Saudi Arabia has been at level 3 (leave the country) since 11 October 2026: cancel or postpone planned trips, and leave unless your stay is essential.',
      },
      {
        ko: '외교부는 11월 8일 중부·동부 지역 공격 관련 안전 공지와, 11월 4일·8일 서부·서남부 지역 공항 이용 주의 공지를 냈습니다. 예멘 국경 지역은 미사일 공격이 있어 가지 마세요. 출발 전 최신 공지를 꼭 확인하세요.',
        en: 'The ministry issued a notice on 8 November about attacks in the centre and east, and notices on 4 and 8 November about using airports in the west and south-west. Stay away from the Yemen border, which has seen missile attacks. Check the latest notices before you go.',
      },
    ],
    link: 'https://www.0404.go.kr/ntnSafetyInfo/107/detail',
  },
"""

CITIES = [
    C(id='riyadh', after='al-ain', ko='리야드', en='Riyadh', native='الرياض · ar-Riyāḍ', lat=24.7136, lng=46.6753,
      blurb=['아라비아반도 한가운데의 사우디 수도. 왕국이 시작된 마스마크 요새와 국립 박물관, 사우드 왕가의 옛 수도인 흙벽 도시 디리야(세계유산)를 둘러보고, 킹덤 센터 전망 다리에 오릅니다.',
             'The Saudi capital in the heart of the peninsula—the Masmak Fortress where the kingdom began, the National Museum, the mud-brick old Saudi capital of Diriyah (a World Heritage site) and the Kingdom Centre Sky Bridge.'],
      highlights=[
          H('마스마크 요새', 'Masmak Fortress', '1902년 압둘아지즈 이븐 사우드가 되찾으며 왕국 통일이 시작된 흙벽 요새로, 지금은 박물관입니다.', 'The mud-brick fort whose capture by Abdulaziz Ibn Saud in 1902 began the unification of the kingdom, now a museum.', 'Masmak Fortress', 45, 60),
          H('사우디 국립 박물관', 'National Museum of Saudi Arabia', '아라비아의 선사 시대부터 이슬람과 왕국 건국까지를 보여 주는 박물관입니다.', 'The museum of Arabia from prehistory through Islam to the founding of the kingdom.', 'National Museum of Saudi Arabia', 120, 150),
          H('무라바 궁전', 'Murabba Palace', '압둘아지즈 국왕이 살던 흙벽 궁전으로, 국립 박물관 옆 킹 압둘아지즈 역사 센터에 있습니다.', 'King Abdulaziz’s mud-brick palace, in the King Abdulaziz Historical Center beside the National Museum.', 'Murabba Palace Riyadh', 45, 60),
          H('수크 알 잘', 'Souq Al Zal', '마스마크 요새 근처의 옛 시장으로, 양탄자·향·골동품 가게가 모여 있습니다.', 'The old market near the Masmak Fortress, full of carpets, incense and antiques.', 'Souq Al Zal', 60, 90),
          H('킹덤 센터 스카이 브리지', 'Kingdom Centre Sky Bridge', '병따개 모양 고층 빌딩 꼭대기를 잇는 유리 다리 전망대입니다.', 'The glass-walled bridge lookout across the top of the bottle-opener-shaped tower.', 'Kingdom Centre Tower', 45, 60),
          H('디리야 앗투라이프', 'Diriyah – At-Turaif', '18세기 첫 사우디 왕국의 수도였던 흙벽 도시 유적(세계유산)으로, 건너편 부자이리 테라스에 식당이 모여 있습니다.', 'The mud-brick ruins of the first Saudi state’s 18th-century capital, a World Heritage site, with the Bujairi Terrace restaurants opposite.', 'At-Turaif District Diriyah', 120, 180,
            n='해 질 녘부터 저녁이 선선해 다니기 좋습니다.|Late afternoon into the evening is coolest.'),
          H('세상의 끝 (지발 피흐라인)', 'Edge of the World (Jebel Fihrayn)', '사막 위로 수직 절벽이 끝없이 이어지는 투와이크 절벽 전망지로, 사륜구동 투어로 갑니다.', 'The Tuwaiq escarpment lookout where sheer cliffs drop to the desert plain, reached by 4×4 tour.', 'Edge of the World Riyadh', 360, 480, group=DAY,
            n='리야드에서 북서쪽으로 차로 약 2시간이며 마지막 길은 비포장입니다.|About 2 hrs north-west of Riyadh by car, the last stretch off-road.'),
      ],
      hubs="    air: [['King Khalid International (RUH)', '킹 칼리드 국제공항 (RUH)', '시내까지 차로 약 30~40분|about 30–40 min to the city by car']],\n    rail: [['Riyadh station (SAR)', '리야드역 (SAR)', '담맘·북부선|to Dammam and the north']],\n",
      itinerary=[1, 4, 3, 2, 5, 6, 7],
      season='11~2월이 선선해 좋고, 5~9월은 45℃에 이릅니다. 라마단 기간엔 낮에 식당이 문을 닫습니다.|November–February is pleasantly cool; May–September reaches 45 °C. Restaurants close by day during Ramadan.',
      stay=[('올라야', 'Olaya', 'Olaya Riyadh', FIRST, '킹덤 센터 주변 상업 지구로 호텔과 식당이 많고 메트로가 다닙니다.|The business district around the Kingdom Centre, with many hotels and restaurants on the Metro.')],
      routes=[r('dubai', 'riyadh', 'flight', 105), r('doha', 'riyadh', 'flight', 80), r('cairo', 'riyadh', 'flight', 150), r('amman', 'riyadh', 'flight', 140), r('istanbul', 'riyadh', 'flight', 250), r('paris', 'riyadh', 'flight', 380)],
      transit=dict(modes=['metro', 'bus', 'rideshare', 'taxi'], ko='리야드 메트로 6개 노선과 호출 앱(Uber·Careem)으로 다닙니다. 도시가 넓어 걷기는 어렵습니다.', en='Use the six-line Riyadh Metro and ride-hailing (Uber, Careem); the city is too spread out to walk.')),
    C(id='jeddah', after='riyadh', ko='제다', en='Jeddah', native='جدة · Jidda', lat=21.4858, lng=39.1925,
      blurb=['홍해 연안의 옛 무역항이자 메카 순례의 관문. 산호석 집들이 늘어선 구시가 알발라드가 세계유산이고, 해안 산책로 코르니시에서 세계에서 가장 높이 솟는 킹 파흐드 분수가 보입니다.',
             'The old Red Sea trading port and gateway for pilgrims to Mecca—its coral-stone old town, Al-Balad, is a World Heritage site, and the Corniche looks out to King Fahd’s Fountain, the world’s tallest.'],
      highlights=[
          H('알발라드 (역사 지구)', 'Al-Balad (Historic Jeddah)', '나무 격자창 ‘로샨’을 단 산호석 집들이 골목을 이룬 옛 시가로, 세계유산입니다.', 'The old town of coral-stone houses with carved wooden roshan screens—a World Heritage site.', 'Al-Balad Jeddah', 90, 120),
          H('나시프 하우스', 'Nasseef House', '알발라드의 19세기 상인 저택으로, 압둘아지즈 국왕이 머물렀던 곳입니다.', 'The 19th-century merchant’s house in Al-Balad where King Abdulaziz stayed.', 'Nasseef House Jeddah', 30, 45),
          H('수크 알 알라위', 'Souq Al Alawi', '알발라드를 가로지르는 시장 골목으로, 향신료·향·직물 가게가 이어집니다.', 'The market lane through Al-Balad, lined with spices, incense and textiles.', 'Souq Al Alawi Jeddah', 45, 60),
          H('킹 파흐드 분수', 'King Fahd’s Fountain', '바다에서 물줄기를 최고 약 300m까지 뿜어 올리는 세계에서 가장 높은 분수로, 밤엔 조명을 비춥니다.', 'The world’s tallest fountain, shooting seawater up to around 300 m high and lit up at night.', 'King Fahd Fountain Jeddah', 30, 45),
          H('제다 코르니시', 'Jeddah Corniche', '조각 작품과 공원이 이어지는 홍해 해안 산책로입니다.', 'The Red Sea promenade of parks and sculptures.', 'Jeddah Corniche', 60, 90),
          H('알라흐마 모스크 (떠 있는 모스크)', 'Al-Rahma Mosque (Floating Mosque)', '바다 위 기둥에 세워 물에 떠 있는 듯 보이는 모스크입니다.', 'The mosque built on stilts over the sea, so it seems to float.', 'Al Rahma Mosque Jeddah', 20, 30),
      ],
      hubs="    air: [['King Abdulaziz International (JED)', '킹 압둘아지즈 국제공항 (JED)', '시내까지 차로 약 30분|about 30 min to the city by car']],\n    rail: [['Jeddah Al-Sulaimaniyah (Haramain)', '제다 알술라이마니야역 (하라메인 고속철도)', '메디나행|to Medina']],\n",
      itinerary=[1, 3, 2, 5, 6, 4],
      season='11~3월이 좋습니다. 해안이라 습하고, 여름엔 덥고 끈적입니다.|November–March is best; the coast is humid, and summers are hot and sticky.',
      stay=[('알 하므라·코르니시', 'Al Hamra & the Corniche', 'Al Hamra Jeddah', FIRST, '해안 산책로와 분수가 가깝고 알발라드까지 차로 15분 남짓입니다.|Close to the seafront and the fountain, about 15 min by car from Al-Balad.')],
      routes=[r('riyadh', 'jeddah', 'flight', 120), r('cairo', 'jeddah', 'flight', 135), r('istanbul', 'jeddah', 'flight', 240), r('dubai', 'jeddah', 'flight', 170), r('amman', 'jeddah', 'flight', 135)],
      transit=dict(modes=['bus', 'rideshare', 'taxi'], ko='호출 앱(Uber·Careem)이 가장 편합니다. 알발라드 안은 걸어서 다닙니다.', en='Ride-hailing (Uber, Careem) is easiest; explore Al-Balad on foot.')),
    C(id='alula', after='jeddah', ko='알울라', en='AlUla', native='العلا · al-ʿUlā', lat=26.6086, lng=37.9232,
      blurb=['붉은 사암 협곡 사이의 오아시스 마을. 페트라를 만든 나바테아인의 바위 무덤 110여 기가 남은 헤그라가 사우디 첫 세계유산이고, 코끼리 바위와 거울 건물 마라야가 있습니다.',
             'An oasis among red sandstone canyons—Hegra, with over 110 rock-cut tombs of the Nabataeans who built Petra, is Saudi Arabia’s first World Heritage site, alongside Elephant Rock and the mirrored Maraya.'],
      highlights=[
          H('헤그라 (마다인 살레)', 'Hegra (Mada’in Salih)', '1세기 나바테아인이 바위를 깎아 만든 무덤들이 사막에 흩어진 유적으로, 사우디 첫 세계유산입니다.', 'The 1st-century Nabataean tombs carved into outcrops across the desert—Saudi Arabia’s first World Heritage site.', 'Hegra AlUla', 180, 240,
            n='정해진 시간의 가이드 투어로만 들어가니 미리 예약하세요.|Entry is by timed guided tour only—book ahead.'),
          H('코끼리 바위', 'Elephant Rock', '코끼리가 코를 늘어뜨린 모양의 높이 약 50m 사암 바위로, 해 질 녘에 붉게 빛납니다.', 'A sandstone rock about 50 m tall shaped like an elephant with its trunk down, glowing red at sunset.', 'Elephant Rock AlUla', 45, 60),
          H('알울라 구시가', 'AlUla Old Town', '흙벽 집 900여 채가 미로처럼 이어진 옛 마을로, 언덕 위 성채에서 오아시스가 내려다보입니다.', 'A maze of some 900 mud-brick houses, with a hilltop castle looking over the oasis.', 'AlUla Old Town', 60, 90),
          H('마라야', 'Maraya', '사막 협곡에 선 거울 외벽의 공연장으로, 세계에서 가장 큰 거울 건물입니다.', 'The mirror-clad concert hall in a desert canyon, the world’s largest mirrored building.', 'Maraya AlUla', 30, 45),
          H('다단과 자발 이크마', 'Dadan & Jabal Ikmah', '고대 다단 왕국의 사자 무덤과, 바위에 새긴 옛 비문이 모인 ‘야외 도서관’ 자발 이크마입니다.', 'The lion tombs of the ancient kingdom of Dadan and Jabal Ikmah, an ‘open-air library’ of rock inscriptions.', 'Dadan AlUla', 120, 150),
      ],
      hubs="    air: [['AlUla International (ULH)', '알울라 국제공항 (ULH)', '구시가까지 차로 약 30분|about 30 min to the old town by car']],\n",
      itinerary=[1, 5, 3, 2, 4],
      season='10~3월이 좋고, 겨울밤은 쌀쌀합니다. 여름 낮은 40℃를 넘습니다.|October–March is best, with chilly winter nights; summer days pass 40 °C.',
      stay=[('알울라 구시가 주변', 'Around AlUla Old Town', 'AlUla Old Town', FIRST, '구시가와 식당가가 가깝습니다. 사막 리조트도 많습니다.|Near the old town and restaurants; there are many desert resorts too.')],
      routes=[r('riyadh', 'alula', 'flight', 110), r('jeddah', 'alula', 'flight', 75)],
      transit=dict(modes=['bus', 'taxi'], ko='명소가 수십 km씩 떨어져 있어 차를 빌리거나 알울라 관광 셔틀·투어를 이용합니다.', en='Sights lie tens of kilometres apart—rent a car or use AlUla’s tourist shuttles and tours.')),
]

SA_ORDER = [('리야드', 'Riyadh', ['riyadh']), ('홍해 연안과 알울라', 'Red Sea coast & AlUla', ['jeddah', 'alula'])]
TRIPS = {'riyadh': [('세상의 끝|Edge of the World', 7)]}


def setup():
    k = rd('countries.ts')
    if "id: 'sa'," not in k:
        i = k.rindex('\n]\n\nexport function getCountry')
        k = k[:i + 1] + COUNTRY + k[i + 1:]
        wr('countries.ts', k)
    for f, block, anchor in [('essentials.ts', ESSENTIALS, '\n  xc: {'), ('transit.ts', TRANSIT, '\n  gi: {')]:
        s = rd(f)
        if '\n  sa: {' not in s:
            i = s.index(anchor)
            wr(f, s[:i + 1] + block + s[i + 1:])
    m = rd('countryIsoMap.ts')
    if "  sa: '682'," not in m:
        wr('countryIsoMap.ts', m.replace("  ae: '784',\n", "  ae: '784',\n  sa: '682',\n", 1))
    p = '../src/components/TravelBanNotice.tsx'
    s = open(p).read()
    if '\n  sa: {' not in s:
        i = s.index("  // 0404.go.kr notice of 2026-08-13")
        open(p, 'w').write(s[:i] + NOTICE + s[i:])


def finish():
    ids = [c['id'] for c in CITIES]
    k = rd('countries.ts')
    old = "cityIds: ['dubai', 'abu-dhabi', 'al-ain', " + ', '.join(f"'{x}'" for x in ids) + "],"
    assert old in k, 'uae list'
    k = k.replace(old, "cityIds: ['dubai', 'abu-dhabi', 'al-ain'],")
    order = [x for g in SA_ORDER for x in g[2]]
    body = ("cityIds: [" + ', '.join(f"'{x}'" for x in order) + "],\n    cityGroups: [\n"
            + ''.join(f"      {{ title: {{ ko: '{ko}', en: '{en}' }}, cityIds: [{', '.join(repr(x) for x in g)}] }},\n" for ko, en, g in SA_ORDER) + '    ],')
    i = k.index("    id: 'sa',")
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
