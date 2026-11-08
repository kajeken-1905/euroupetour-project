#!/usr/bin/env python3
"""Jordan (2026-11-08), first Middle East country. Practical info and alerts from the Korean Foreign Ministry page
(0404.go.kr/ntnSafetyInfo/165/detail): special travel advisory everywhere except the level-3 area east of Zarqa (last
extended 2026-09-04); notices of 2026-10-22 (Middle East situation), 10-25 (shooting) and 11-05 (police officer killed in
Amman); risk of Iranian missile/drone debris. Handled like Russia (full guide + notice). Visa on arrival JOD 40; Jordan Pass
waives it for stays of 3+ days. Cities: Amman, Petra, Wadi Rum, Aqaba. Run once."""
import add_daytrip_places3 as T
from add_daytrip_places import rd, wr
from add_slovakia_cities import H

DAY = ('근교 당일치기', 'Day trip')
RC = 'routes-central.ts'
R_AFTER = r"^  r\('madrid', 'casablanca', 'flight', 95\),\n"
COMMON = dict(country='jo', group_title=None, hubs_file='hubs-central.ts', hubs_before='  seville: {\n', itin_file='itinerary-iberia.ts',
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
    id: 'jo',
    region: 'mena',
    name: { ko: '요르단', en: 'Jordan' },
    nativeName: 'الأردن · al-Urdun',
    flagImage: '/flags/jo.svg',
    landmarkImage: '/landmarks/landmark-jo.jpg',
    flag: '🇯🇴',
    blurb: {
      ko: '붉은 바위를 깎은 나바테아 도시 페트라와 화성 같은 사막 와디럼, 몸이 뜨는 사해가 있는 중동의 나라입니다.',
      en: 'Home of Petra, the Nabataean city carved from red rock, the Mars-like desert of Wadi Rum and the Dead Sea where you float.',
    },
    facts: {
      population: { ko: '약 1,150만 명 (2024년 추계)', en: 'Approx. 11.5 million (2024 estimate)' },
      area: { ko: '약 8만 9,342 km²', en: 'Approx. 89,342 km²' },
      capital: { ko: '암만 (Amman)', en: 'Amman' },
      currency: { ko: '요르단 디나르 (JOD, JD) · 고정 환율로 1JD ≈ 1.41달러', en: 'Jordanian dinar (JOD, JD), pegged at about USD 1.41' },
    },
    currencyCode: 'JOD',
    currencySymbol: 'JD',
    schengen: false,
    flagColors: {
      primary: '#CE1126',
      secondary: '#007A3D',
      accent: '#000000',
      background: '#E8F0FA',
      text: '#0B2A4A',
    },
    cityIds: [],
  },
"""

ESSENTIALS = """  jo: {
    // Korean Foreign Ministry travel-safety page for Jordan (0404.go.kr/ntnSafetyInfo/165/detail), 2026-11.
    emergency: [num('911', '경찰·구급·소방', 'Police, ambulance and fire')],
    embassy: {
      name: T('주요르단 대한민국 대사관', 'Korean Embassy in Jordan'),
      address: 'Bahjat Homsi St. 7, Amman 11181',
      phone: '+962-6-593-0745',
      note: T('근무 시간 밖 긴급 상황은 영사콜센터(+82-2-3210-0404, 24시간)로 연락하세요. 영사콜센터 무료 전화 앱과 카카오톡 채널도 있습니다.', 'Out of hours, call the consular call centre (+82-2-3210-0404, 24 hours); its free-call app and KakaoTalk channel also work.'),
      source: 'https://www.0404.go.kr/ntnSafetyInfo/165/detail',
    },
    power: T('220V · 50Hz. 콘센트 모양이 여러 가지(C·F·G형 등)라 멀티 어댑터가 편합니다.', '220V, 50Hz. Socket types vary (C, F, G and others), so bring a universal adapter.'),
    tipping: T('식당에선 10% 안팎을 두는 것이 관례입니다(봉사료가 포함됐는지 확인).', 'Around 10% is customary in restaurants (check whether service is included).'),
    water: WATER_BOTTLED,
    shops: T('디나르는 미국 달러에 고정돼 있습니다. 공항·은행·시내 환전소에서 바꿀 수 있고, 1만 디나르가 넘는 현금·귀중품은 출입국 때 신고합니다.', 'The dinar is pegged to the US dollar; change money at the airport, banks or exchange offices. Declare cash or valuables over 10,000 dinars when entering or leaving.'),
    toilets: TOILETS_MIXED,
    time: T('UTC+3, 서머타임 없음. 한국보다 6시간 늦습니다.', 'UTC+3 with no daylight saving: 6 hours behind Korea.'),
    safety: T('외교부 여행경보: 자르카 동쪽은 3단계(출국권고), 나머지 전역은 특별여행주의보(여행 취소·연기 권고)입니다. 이란발 미사일·드론의 낙탄 위험이 있어 공습경보가 울리면 실내로 대피하세요. 2026년 10~11월 총격 사건과 암만 경찰관 피살 사건 관련 공지가 나와 있습니다.', 'Korean travel alert: level 3 east of Zarqa, and a special travel advisory (cancel or postpone travel) everywhere else. There is a risk of debris from Iranian missiles and drones—shelter indoors if air-raid sirens sound. Notices were issued after a shooting and the killing of a police officer in Amman in October–November 2026.'),
    entry: T('한국 여권은 비자가 필요합니다. 공항과 육로 국경에서 도착 비자(90일, 40디나르)를 받거나 내무부 앱으로 전자비자를 미리 받습니다. 요르단 패스(70~80디나르, 페트라 입장 포함)를 미리 사면 3일 이상 머물 때 비자 요금이 면제되고, 아카바 공항·국경으로 들어오면 비자 요금이 없습니다.', 'Korean passports need a visa: get a visa on arrival (90 days, JOD 40) at airports and land borders, or an e-visa in advance through the Interior Ministry app. Buying the Jordan Pass (JOD 70–80, Petra included) waives the visa fee for stays of 3 days or more, and entry via Aqaba’s airport or border is fee-free.'),
    telecom: T('주요 통신사는 Zain·Orange·Umniah입니다. 공항에서 현지 유심을 사는 편이 쌉니다.', 'Main operators: Zain, Orange and Umniah. A local SIM from the airport is the cheapest option.'),
  },
"""

TRANSIT = """  jo: {
    summary: {
      ko: '우측통행. 도시 사이는 JETT 관광버스가 다니고, 와디럼·사해처럼 버스가 적은 곳은 택시나 렌터카, 투어가 편합니다. 철도 여객 노선은 없습니다.',
      en: 'Drive on the right. JETT coaches run between cities; for places with few buses, such as Wadi Rum and the Dead Sea, a taxi, rental car or tour is easier. There are no passenger trains.',
    },
    drivingSide: 'right',
    longDistance: {
      ko: '암만–페트라는 JETT 버스로 약 3시간 30분, 암만–아카바는 약 4시간입니다. 암만–아카바는 국내선으로 약 1시간입니다.',
      en: 'Amman to Petra is about 3 hr 30 by JETT bus and Amman to Aqaba about 4 hr, or about 1 hr by domestic flight.',
    },
    paymentTip: {
      ko: '암만 시내는 호출 앱(Careem·Uber)이나 미터 택시를 탑니다. JETT 버스는 웹사이트나 터미널에서 미리 예약합니다.',
      en: 'In Amman use ride-hailing (Careem, Uber) or metered taxis; book JETT buses online or at the terminal in advance.',
    },
    apps: [],
  },
"""

NOTICE = """  // 0404.go.kr Jordan page: special travel advisory (extended 2026-09-04), level 3 east of Zarqa, notices of 2026-10-22, 10-25, 11-05.
  jo: {
    icon: '⚠️',
    title: { ko: '외교부 여행경보 · 특별여행주의보', en: 'Korean travel alert · special travel advisory' },
    lines: [
      {
        ko: '요르단 전역에 특별여행주의보(여행 취소·연기 권고)가 내려져 있고, 자르카시 동쪽 지역은 3단계(출국권고)입니다.',
        en: 'A special travel advisory (cancel or postpone travel) covers Jordan, and the area east of Zarqa is level 3 (leave the country).',
      },
      {
        ko: '미국·이스라엘과 이란 사이 군사 충돌로 이란발 미사일·드론의 낙탄 위험이 있습니다. 공습경보가 울리면 실내로 대피하세요. 외교부는 2026년 10월 22일(중동 상황), 10월 25일(총격 사건), 11월 5일(암만 경찰관 피살 사건) 안전 공지를 냈습니다.',
        en: 'With military conflict between the US, Israel and Iran, debris from Iranian missiles and drones is a risk; shelter indoors if sirens sound. The ministry issued safety notices on 22 October (Middle East situation), 25 October (a shooting) and 5 November 2026 (a police officer killed in Amman).',
      },
      {
        ko: '이 앱의 정보는 참고용입니다. 출발 전 외교부 공지를 꼭 확인하세요.',
        en: 'The information here is for reference; check the ministry’s notices before you go.',
      },
    ],
    link: 'https://www.0404.go.kr/ntnSafetyInfo/165/detail',
  },
"""

CITIES = [
    C(id='amman', after='hurghada', ko='암만', en='Amman', native='عمّان · ʿAmmān', lat=31.9539, lng=35.9106,
      blurb=['일곱 언덕에 하얀 돌집이 층층이 쌓인 요르단의 수도. 언덕 위 성채와 로마 극장이 있고, 로마 도시 제라시와 사해, 느보산에 다녀옵니다.',
             'Jordan’s capital of white stone houses stacked over seven hills—a hilltop citadel and Roman theatre, with day trips to Roman Jerash, the Dead Sea and Mount Nebo.'],
      highlights=[
          H('암만 성채', 'Amman Citadel', '시내 한가운데 언덕의 유적으로, 헤라클레스 신전 기둥과 우마이야 궁전 너머로 시내가 내려다보입니다.', 'The hilltop ruins in the middle of the city—the columns of the Temple of Hercules and an Umayyad palace, with views over Amman.', 'Amman Citadel', 60, 90),
          H('로마 극장', 'Roman Theatre', '2세기에 언덕을 파서 지은 약 6천 석의 로마 극장입니다.', 'The 2nd-century Roman theatre cut into the hillside, seating about 6,000.', 'Roman Theatre Amman', 30, 45),
          H('레인보 거리', 'Rainbow Street', '옛 동네 제벨 암만의 카페와 상점 거리로, 저녁에 붐빕니다.', 'The café and shop street of old Jabal Amman, busy in the evening.', 'Rainbow Street Amman', 45, 60),
          H('요르단 박물관', 'Jordan Museum', '사해 문서 조각과 약 9천 년 전 석회 조각상 아인 가잘을 전시하는 국립 박물관입니다.', 'The national museum, showing Dead Sea Scroll fragments and the 9,000-year-old ʿAin Ghazal plaster statues.', 'The Jordan Museum', 90, 120, c='tue'),
          H('압둘라 1세 모스크', 'King Abdullah I Mosque', '파란 모자이크 돔의 모스크로, 무슬림이 아닌 방문객도 들어갈 수 있습니다.', 'The mosque with a blue mosaic dome, open to non-Muslim visitors.', 'King Abdullah I Mosque', 30, 45,
            n='여성은 입구에서 빌려주는 겉옷을 입습니다. 금요일 정오 예배 시간엔 들어갈 수 없습니다.|Women borrow a robe at the entrance; closed to visitors during Friday midday prayers.'),
          H('제라시', 'Jerash', '열주 거리와 원형 광장, 극장이 잘 남은 로마 도시 유적입니다.', 'Remarkably complete Roman city ruins—colonnaded streets, an oval plaza and theatres.', 'Jerash', 180, 240, group=DAY,
            n='암만에서 차로 약 50분입니다. 요르단 패스로 입장합니다.|About 50 min by car from Amman; covered by the Jordan Pass.'),
          H('사해', 'Dead Sea', '해수면보다 약 430m 낮은 소금 호수로, 몸이 저절로 뜹니다.', 'The salt lake about 430 m below sea level, where you float effortlessly.', 'Amman Beach Dead Sea', 240, 360, group=DAY,
            n='암만에서 차로 약 1시간입니다. 호텔 해변이나 공영 해변(유료)을 이용합니다.|About 1 hr by car from Amman; use a hotel beach or the paid public beach.'),
          H('마다바와 느보산', 'Madaba & Mount Nebo', '6세기 성지 모자이크 지도가 있는 성 조지 성당과, 모세가 약속의 땅을 바라봤다는 산입니다.', 'St George’s Church with its 6th-century mosaic map of the Holy Land, and the mountain where Moses is said to have viewed the Promised Land.', 'Mount Nebo', 180, 240, group=DAY,
            n='암만에서 차로 약 40분이며 사해 가는 길에 들르기 좋습니다.|About 40 min by car from Amman, easily combined with the Dead Sea.'),
      ],
      hubs="    air: [['Queen Alia International (AMM)', '퀸 알리아 국제공항 (AMM)']],\n    bus: [['JETT Abdali', 'JETT 압달리 터미널', '페트라·아카바행|to Petra and Aqaba']],\n",
      itinerary=[1, 2, 3, 5, 4, 6, 7, 8],
      season='3~5월과 9~11월이 좋습니다. 여름 낮은 덥고 겨울엔 눈이 오기도 합니다.|March–May and September–November are best; summer days are hot and it can snow in winter.',
      stay=[('제벨 암만 (레인보 거리)', 'Jabal Amman (Rainbow Street)', 'Rainbow Street Amman', FIRST, '카페 거리와 시내 유적이 가깝고 분위기가 좋습니다.|Close to the café street and the downtown sights, with a pleasant atmosphere.')],
      routes=[r('istanbul', 'amman', 'flight', 135), r('athens', 'amman', 'flight', 125), r('cairo', 'amman', 'flight', 75), r('paris', 'amman', 'flight', 285)],
      transit=dict(modes=['taxi', 'rideshare', 'bus', 'walk'], ko='언덕이 많아 택시와 호출 앱(Careem·Uber)으로 다닙니다.', en='The city is hilly—get around by taxi or ride-hailing (Careem, Uber).')),
    C(id='petra', after='amman', ko='페트라 (와디 무사)', en='Petra (Wadi Musa)', native='البتراء · al-Batrāʾ', lat=30.3285, lng=35.4444,
      blurb=['2천 년 전 나바테아인이 붉은 사암 절벽을 깎아 만든 도시로, 세계유산이자 신 7대 불가사의입니다. 좁은 협곡 시크를 지나면 알 카즈네(보물창고)가 나타납니다.',
             'The city the Nabataeans carved from red sandstone cliffs 2,000 years ago—a World Heritage site and one of the New Seven Wonders. Walk the narrow Siq and the Treasury appears.'],
      highlights=[
          H('시크', 'The Siq', '높이 80m에 이르는 절벽 사이로 1.2km 이어지는 좁은 협곡 길입니다.', 'The narrow 1.2 km gorge path between cliffs up to 80 m high.', 'Siq Petra', 30, 45),
          H('알 카즈네 (보물창고)', 'Al-Khazneh (the Treasury)', '시크 끝에서 나타나는 높이 약 40m의 바위 신전 정면입니다.', 'The rock-cut temple façade about 40 m high that appears at the end of the Siq.', 'Al-Khazneh', 30, 45),
          H('왕들의 무덤', 'Royal Tombs', '절벽에 나란히 새긴 거대한 무덤 정면들로, 해 질 녘 바위가 붉게 빛납니다.', 'A row of great tomb façades carved into the cliff, glowing red at sunset.', 'Royal Tombs Petra', 60, 90),
          H('알 데이르 (수도원)', 'Ad Deir (the Monastery)', '계단 약 800개를 올라가는 산 위의 거대한 바위 신전입니다.', 'The huge rock-cut monument on the mountain, reached by about 800 steps.', 'Ad Deir Petra', 150, 180,
            n='왕복 2~3시간 걸리니 물을 넉넉히 챙기세요.|Allow 2–3 hours for the round trip and carry plenty of water.'),
          H('페트라 나이트', 'Petra by Night', '시크와 보물창고 앞을 촛불 1,500여 개로 밝히고 베두인 음악을 들려줍니다.', 'The Siq and the Treasury lit by some 1,500 candles, with Bedouin music.', 'Petra by Night', 120, 150, b='rec',
            n='월·수·목요일 밤에만 열리며 표를 따로 삽니다.|Monday, Wednesday and Thursday nights only; a separate ticket.'),
          H('리틀 페트라', 'Little Petra', '페트라 북쪽의 작은 바위 도시로, 대상들이 묵던 곳입니다.', 'The small rock-cut town north of Petra where caravans once rested.', 'Little Petra', 60, 90, group=DAY,
            n='와디 무사에서 차로 약 15분이며 입장료가 없습니다.|About 15 min by car from Wadi Musa; free entry.'),
      ],
      hubs="    air: [['Queen Alia International (AMM)', '퀸 알리아 공항 (AMM)', '암만|Amman'], ['King Hussein International (AQJ)', '아카바 공항 (AQJ)', '아카바|Aqaba']],\n    bus: [['JETT Wadi Musa', 'JETT 와디 무사 정류장', '암만행|to Amman']],\n",
      itinerary=[1, 2, 3, 4, 5, 6],
      season='3~5월과 10~11월이 걷기 좋습니다. 한여름엔 그늘이 없어 매우 덥고 겨울 아침은 춥습니다.|March–May and October–November are best for walking; summer is very hot with no shade, and winter mornings are cold.',
      stay=[('와디 무사', 'Wadi Musa', 'Wadi Musa', FIRST, '페트라 입구 마을로, 이틀 이상 묵으며 이른 아침에 들어가면 덜 붐빕니다.|The town at the gate of Petra; stay two nights or more and go in early to beat the crowds.')],
      routes=[r('amman', 'petra', 'bus', 210, "{ fa: 'JETT 압달리|JETT Abdali', n: 'JETT 관광버스|JETT coach' }")],
      transit=dict(modes=['walk', 'taxi'], ko='유적 안은 걸어서 다닙니다(하루 10~20km).', en='Inside the site you walk (10–20 km a day).')),
    C(id='wadi-rum', after='petra', ko='와디럼', en='Wadi Rum', native='وادي رم · Wādī Ramm', lat=29.5759, lng=35.4209,
      blurb=['붉은 모래와 사암 봉우리가 펼쳐진 사막 보호구역으로, 영화 ‘마션’과 ‘아라비아의 로렌스’ 촬영지입니다. 베두인 캠프에서 하룻밤 묵으며 별을 봅니다.',
             'A protected desert of red sand and sandstone peaks, filming location of The Martian and Lawrence of Arabia—spend a night at a Bedouin camp under the stars.'],
      highlights=[
          H('지프 투어', 'Jeep tour', '베두인 운전사의 사륜구동차로 협곡과 바위 다리, 모래언덕을 돕니다.', 'A Bedouin-driven 4×4 tour of canyons, rock bridges and dunes.', 'Wadi Rum Visitor Centre', 240, 360, b='rec'),
          H('베두인 캠프', 'Bedouin camp', '사막 텐트에서 땅속에 익히는 요리 자르브를 먹고 별을 보며 묵습니다.', 'Stay in a desert tent, eat zarb cooked underground and watch the stars.', 'Wadi Rum camp', 720, 900, b='req'),
          H('사막 노을', 'Desert sunset', '모래언덕이나 바위 위에서 붉게 물드는 사막을 봅니다.', 'Watch the desert turn red from a dune or rock.', 'Wadi Rum', 60, 60),
          H('카잘리 협곡', 'Khazali Canyon', '바위 벽에 나바테아 시대 암각화가 새겨진 좁은 협곡입니다.', 'A narrow canyon with Nabataean rock carvings on its walls.', 'Khazali Canyon', 30, 45),
      ],
      hubs="    air: [['King Hussein International (AQJ)', '아카바 공항 (AQJ)', '아카바|Aqaba']],\n",
      itinerary=[1, 4, 3, 2],
      season='10~4월이 좋습니다. 사막의 겨울밤은 영하 가까이 내려가니 따뜻한 옷을 챙기세요.|October–April is best; winter nights in the desert near freezing, so bring warm clothes.',
      stay=[('사막 캠프', 'Desert camp', 'Wadi Rum', FIRST, '캠프에서 마을이나 방문자 센터로 마중을 나옵니다.|Camps pick you up from the village or visitor centre.')],
      routes=[r('petra', 'wadi-rum', 'mixed', 90, "{ n: '택시·캠프 픽업이 편합니다|taxi or camp pick-up is easiest' }"), r('aqaba', 'wadi-rum', 'mixed', 60, "{ n: '택시·캠프 픽업|taxi or camp pick-up' }")],
      transit=dict(modes=['taxi'], ko='사막 안은 지프로만 다닙니다.', en='Inside the desert you travel by 4×4 only.')),
    C(id='aqaba', after='wadi-rum', ko='아카바', en='Aqaba', native='العقبة · al-ʿAqaba', lat=29.5267, lng=35.0078,
      blurb=['요르단 유일의 항구가 있는 홍해 휴양 도시. 산호초 스노클링을 하고, 와디럼과 페트라로 가는 남쪽 관문입니다.',
             'Jordan’s only port, a Red Sea resort for coral-reef snorkelling and the southern gateway to Wadi Rum and Petra.'],
      highlights=[
          H('홍해 스노클링', 'Red Sea snorkelling', '해안 바로 앞 산호초(재패니즈 가든 등)에서 스노클링과 다이빙을 합니다.', 'Snorkel and dive the reefs just off the shore, such as the Japanese Garden.', 'Japanese Garden Aqaba', 120, 180),
          H('아카바 요새', 'Aqaba Fort', '16세기 맘루크 요새로, 아랍 반란 때의 전장입니다.', 'The 16th-century Mamluk fort, a battleground of the Arab Revolt.', 'Aqaba Fort', 30, 45),
          H('남쪽 해변', 'South Beach', '시내 남쪽의 해변과 리조트가 이어지는 해안입니다.', 'The beaches and resorts south of town.', 'South Beach Aqaba', 120, 180),
          H('유리 바닥 배', 'Glass-bottom boat', '배 밑 유리창으로 산호와 물고기를 봅니다.', 'See coral and fish through the glass floor of a boat.', 'Aqaba marina', 60, 90),
      ],
      hubs="    air: [['King Hussein International (AQJ)', '킹 후세인 국제공항 (AQJ)']],\n    bus: [['JETT Aqaba', 'JETT 아카바 터미널', '암만행|to Amman']],\n",
      itinerary=[2, 1, 4, 3],
      season='겨울에도 따뜻해 1년 내내 바다에 들어갑니다. 여름은 매우 덥습니다.|Warm enough to swim all year; summer is very hot.',
      stay=[('시내와 해변', 'Town & beach', 'Aqaba', FIRST, '요새와 식당이 걸어서 닿고, 남쪽 해변은 택시로 갑니다.|The fort and restaurants on foot; take a taxi to South Beach.')],
      routes=[r('amman', 'aqaba', 'bus', 240, "{ n: 'JETT 관광버스|JETT coach' }"), r('amman', 'aqaba', 'flight', 60)],
      transit=dict(modes=['walk', 'taxi'], ko='시내는 걸어서, 해변과 와디럼은 택시로 갑니다.', en='Walk the town; taxis go to the beaches and Wadi Rum.')),
]

JO_ORDER = [('암만과 북부', 'Amman & the north', ['amman']), ('남부', 'The south', ['petra', 'wadi-rum', 'aqaba'])]
TRIPS = {'amman': [('제라시|Jerash', 6), ('사해|Dead Sea', 7), ('마다바와 느보산|Madaba & Mount Nebo', 8)], 'petra': [('리틀 페트라|Little Petra', 6)]}


def setup():
    k = rd('countries.ts')
    if "id: 'jo'," not in k:
        i = k.rindex('\n]\n\nexport function getCountry')
        k = k[:i + 1] + COUNTRY + k[i + 1:]
        wr('countries.ts', k)
    for f, block, anchor in [('essentials.ts', ESSENTIALS, '\n  xc: {'), ('transit.ts', TRANSIT, '\n  gi: {')]:
        s = rd(f)
        if '\n  jo: {' not in s:
            i = s.index(anchor)
            wr(f, s[:i + 1] + block + s[i + 1:])
    m = rd('countryIsoMap.ts')
    if "  jo: '400'," not in m:
        wr('countryIsoMap.ts', m.replace("  eg: '818',\n", "  eg: '818',\n  jo: '400',\n", 1))
    p = '../src/components/TravelBanNotice.tsx'
    s = open(p).read()
    if '\n  jo: {' not in s:
        i = s.index("  // 0404.go.kr notice of 2026-08-13")
        open(p, 'w').write(s[:i] + NOTICE + s[i:])


def finish():
    ids = [c['id'] for c in CITIES]
    k = rd('countries.ts')
    old = "cityIds: ['cairo', 'alexandria', 'luxor', 'aswan', 'hurghada', " + ', '.join(f"'{x}'" for x in ids) + "],"
    assert old in k, 'egypt list'
    k = k.replace(old, "cityIds: ['cairo', 'alexandria', 'luxor', 'aswan', 'hurghada'],")
    order = [x for g in JO_ORDER for x in g[2]]
    body = ("cityIds: [" + ', '.join(f"'{x}'" for x in order) + "],\n    cityGroups: [\n"
            + ''.join(f"      {{ title: {{ ko: '{ko}', en: '{en}' }}, cityIds: [{', '.join(repr(x) for x in g)}] }},\n" for ko, en, g in JO_ORDER) + '    ],')
    i = k.index("    id: 'jo',")
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
