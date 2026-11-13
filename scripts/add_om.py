#!/usr/bin/env python3
"""Oman (2026-11-12). Korean Foreign Ministry page (0404.go.kr/ntnSafetyInfo/162/detail): level 3 (leave the country)
nationwide after the 2026-03-08 Middle East raise; embassy in Muscat. Full guide with a level-3 notice, like Qatar/Kuwait (user
decision 2026-11-08). Cities: Muscat, Nizwa (Bahla, Jabrin, Jebel Akhdar, Misfat), Sur (Wadi Shab, Bimmah, Ras al Jinz), Salalah. Run once."""
import add_daytrip_places3 as T
from add_daytrip_places import rd, wr
from add_slovakia_cities import H

DAY = ('근교 당일치기', 'Day trip')
RC = 'routes-central.ts'
R_AFTER = r"^  r\('amman', 'doha', 'flight', 165\),\n"
COMMON = dict(country='om', group_title=None, hubs_file='hubs-central.ts', hubs_before='  seville: {\n', itin_file='itinerary-iberia.ts',
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
    id: 'om',
    region: 'mena',
    name: { ko: '오만', en: 'Oman' },
    nativeName: 'عُمان · ʿUmān',
    flagImage: '/flags/om.svg',
    landmarkImage: '/landmarks/landmark-om.jpg',
    flag: '🇴🇲',
    blurb: {
      ko: '아라비아반도 남동쪽의 술탄국. 무스카트의 그랜드 모스크와 수크, 니즈와의 흙벽돌 요새, 협곡 와디와 남쪽 살랄라의 유향 유적이 있습니다.',
      en: 'The sultanate on Arabia’s south-east coast—Muscat’s Grand Mosque and souq, Nizwa’s mud-brick forts, wadi canyons and Salalah’s frankincense sites.',
    },
    facts: {
      population: { ko: '약 520만 명 (2024년)', en: 'Approx. 5.2 million (2024)' },
      area: { ko: '약 31만 km²', en: 'Approx. 310,000 km²' },
      capital: { ko: '무스카트 (Muscat)', en: 'Muscat' },
      currency: { ko: '오만 리알 (OMR, RO) · 1리알 = 1,000바이사', en: 'Omani rial (OMR, RO); 1 rial = 1,000 baisa' },
    },
    currencyCode: 'OMR',
    currencySymbol: 'RO',
    schengen: false,
    flagColors: {
      primary: '#DB161B',
      secondary: '#FFFFFF',
      accent: '#008000',
      background: '#E8F0FA',
      text: '#0B2A4A',
    },
    cityIds: [],
  },
"""

ESSENTIALS = """  om: {
    // Korean Foreign Ministry travel-safety page for Oman (0404.go.kr/ntnSafetyInfo/162/detail), 2026-11.
    emergency: [num('9999', '경찰·소방', 'Police and fire')],
    embassy: {
      name: T('주오만 대한민국 대사관', 'Korean Embassy in Oman'),
      address: 'Plot 42, Jamiat Al Duwal Al Arabia Street, Muscat',
      phone: '+968-2469-1490',
      afterHours: '+968-9823-2554',
      source: 'https://www.0404.go.kr/ntnSafetyInfo/162/detail',
    },
    power: T('240V · 50Hz, G형(영국식 3핀) 콘센트가 흔합니다. 한국 플러그는 어댑터가 필요합니다.', '240V, 50Hz, mostly type G (British three-pin) sockets; Korean plugs need an adapter.'),
    tipping: T('호텔과 고급 식당은 봉사료 8%와 세금 9%를 더하므로 따로 팁을 주지 않아도 됩니다.', 'Hotels and upscale restaurants add an 8% service charge and 9% tax, so no extra tip is needed.'),
    water: WATER_BOTTLED,
    shops: T('카드가 널리 쓰이지만 시장과 작은 가게는 현금이 편합니다. 리알은 단위가 큰 통화라 값을 잘 확인하세요.', 'Cards are widely accepted, but cash is easier in souqs and small shops. The rial is a high-value currency, so check prices carefully.'),
    toilets: T('쇼핑몰·박물관·주유소 화장실을 이용합니다.', 'Use toilets in malls, museums and petrol stations.'),
    time: T('UTC+4, 서머타임 없음. 한국보다 5시간 늦습니다.', 'UTC+4 with no daylight saving: 5 hours behind Korea.'),
    safety: T('외교부 여행경보: 2026년 3월 8일 중동 정세로 오만이 3단계(출국권고)로 올랐습니다. 오만은 교통사고 사망률이 높아 운전에 특히 조심하고, 비가 오면 와디가 갑자기 물에 잠기니 건너지 마세요. 거리에서 여성을 촬영하지 마세요. 술·돼지고기·도박은 금기이고, 라마단 기간엔 낮에 공공장소에서 먹고 마시지 않습니다.', 'Korean travel alert: Oman was raised to level 3 (leave the country) on 8 March 2026 because of the Middle East situation. Oman has a high road-death rate, so drive with great care, and don’t cross wadis when it rains—they flood suddenly. Don’t photograph women in the street. Alcohol, pork and gambling are taboo, and during Ramadan don’t eat or drink in public by day.'),
    entry: T('한국 일반 여권은 30일까지 비자 없이 머물 수 있습니다(상호주의). 입국 심사에서 14일만 주는 경우가 있으니 한국인이라 말하고 30일을 확인하세요. 30일 넘게 머물려면 왕립 경찰 전자 비자(evisa.rop.gov.om, 20리알)를 미리 받습니다. 돌아가는 항공권이나 숙소를 물어볼 수 있습니다.', 'Ordinary Korean passports get 30 days visa-free (reciprocity). Officers sometimes stamp only 14 days—say you are Korean and check for 30. For longer stays, get a Royal Oman Police e-visa (evisa.rop.gov.om, RO 20) in advance. Officers may ask for an onward ticket or hotel booking.'),
    telecom: T('주요 통신사는 Omantel·Ooredoo·Vodafone입니다. 공항에서 유심·eSIM을 살 수 있습니다.', 'Main operators: Omantel, Ooredoo and Vodafone; SIMs and eSIMs are sold at the airport.'),
  },
"""

TRANSIT = """  om: {
    summary: {
      ko: '우측통행. 철도가 없어 차를 빌리거나 택시·버스로 다닙니다. 무스카트엔 시내버스(Mwasalat)와 호출 앱이 있습니다.',
      en: 'Drive on the right. There is no railway—rent a car or use taxis and buses; Muscat has city buses (Mwasalat) and ride-hailing apps.',
    },
    drivingSide: 'right',
    longDistance: {
      ko: 'Mwasalat 장거리 버스가 무스카트와 니즈와·수르·살랄라를 잇고, 살랄라는 비행기로 약 1시간 40분입니다. 산과 와디는 사륜구동 차가 필요한 곳이 많습니다.',
      en: 'Mwasalat intercity buses link Muscat with Nizwa, Sur and Salalah; Salalah is about 1 hr 40 by air. Many mountain and wadi roads need a four-wheel drive.',
    },
    paymentTip: {
      ko: '미터기 없는 택시가 많으니 타기 전에 요금을 정하거나 요금이 미리 나오는 호출 앱(Yango 등)을 쓰세요.',
      en: 'Many taxis have no meter—agree the fare first, or use a ride-hailing app that shows it in advance (e.g. Yango).',
    },
    apps: [],
  },
"""

NOTICE = """  // 0404.go.kr Oman page: level 3 (leave the country) since the 2026-03-08 Middle East raise; notices 2026-09-24, 2026-10-26.
  om: {
    icon: '⚠️',
    title: { ko: '외교부 여행경보 · 3단계 출국권고', en: 'Korean travel alert · level 3, leave the country' },
    lines: [
      {
        ko: '중동 정세로 2026년 3월 8일부터 오만이 3단계(출국권고) 지역입니다. 여행 예정이면 취소하거나 미루고, 머무는 중이면 꼭 필요한 일이 아니면 출국하라는 단계입니다.',
        en: 'Because of the Middle East situation, Oman has been at level 3 (leave the country) since 8 March 2026: cancel or postpone planned trips, and leave unless your stay is essential.',
      },
      {
        ko: '외교부는 2026년 9월 24일과 10월 26일 중동 정세에 따른 신변 안전 유의를 공지했습니다. 출발 전 최신 공지를 꼭 확인하세요.',
        en: 'On 24 September and 26 October 2026 the ministry advised caution because of the Middle East situation. Check the latest notices before you go.',
      },
    ],
    link: 'https://www.0404.go.kr/ntnSafetyInfo/162/detail',
  },
"""

CITIES = [
    C(id='muscat', after='herat', ko='무스카트', en='Muscat', native='مسقط · Masqaṭ', lat=23.5880, lng=58.3829,
      blurb=['바위산과 바다 사이에 길게 펼쳐진 수도. 대리석 그랜드 모스크와 오페라 하우스, 무트라 해안의 수크와 산책로, 요새가 지키는 옛 무스카트 항구를 둘러봅니다.',
             'The capital strung out between rocky mountains and the sea—see the marble Grand Mosque and opera house, the souq and corniche of Mutrah, and old Muscat’s harbour guarded by forts.'],
      highlights=[
          H('술탄 카부스 그랜드 모스크', 'Sultan Qaboos Grand Mosque', '대리석 마당과 거대한 페르시아 양탄자·샹들리에가 있는 오만 최대의 모스크입니다.', 'Oman’s largest mosque, with marble courtyards, a vast Persian carpet and a giant chandelier.', 'Sultan Qaboos Grand Mosque', 60, 90,
            n='비무슬림은 토~목요일 아침에만 들어갈 수 있습니다. 팔다리를 가리고, 여성은 머리도 가립니다.|Non-Muslims may visit only on Saturday–Thursday mornings. Cover arms and legs, and women cover their hair.'),
          H('무스카트 왕립 오페라 하우스', 'Royal Opera House Muscat', '아라비아 궁전 양식의 하얀 오페라 하우스로, 공연이 없는 날엔 건물 투어가 있습니다.', 'The white opera house in Arabian-palace style, with building tours on non-performance days.', 'Royal Opera House Muscat', 60, 90),
          H('무트라 수크', 'Mutrah Souq', '유향·은 공예·향수·스카프 가게가 미로처럼 이어진 옛 시장입니다.', 'The old market’s maze of frankincense, silverwork, perfume and scarf shops.', 'Mutrah Souq', 60, 90),
          H('무트라 코니시', 'Mutrah Corniche', '산을 등지고 항구를 따라 이어진 해안 산책로로, 해 질 녘이 아름답습니다.', 'The harbour-front promenade backed by mountains, loveliest at sunset.', 'Mutrah Corniche', 45, 60),
          H('알 알람 궁전', 'Al Alam Palace', '파랗고 금빛 기둥이 선 술탄의 의전 궁전입니다(외관만).', 'The sultan’s ceremonial palace with its blue and gold columns (exterior only).', 'Al Alam Palace', 15, 20),
          H('잘랄리·미라니 요새', 'Al Jalali & Al Mirani Forts', '16세기 포르투갈인이 옛 무스카트 항구 양쪽에 세운 쌍둥이 요새입니다(외관만).', 'The twin 16th-century Portuguese forts flanking old Muscat’s harbour (exterior only).', 'Al Jalali Fort', 15, 20),
          H('오만 국립 박물관', 'National Museum of Oman', '선사 시대부터 해양 교역·유향까지 오만의 역사를 다룬 박물관입니다.', 'Oman’s story from prehistory to maritime trade and frankincense.', 'National Museum of Oman', 90, 120),
          H('바이트 알 주바이르', 'Bait Al Zubair', '옛 저택에 오만 전통 의상·무기·생활 도구를 전시한 개인 박물관입니다.', 'A private museum of Omani dress, weapons and household objects in an old family house.', 'Bait Al Zubair', 45, 60),
      ],
      hubs="    air: [['Muscat International (MCT)', '무스카트 국제공항 (MCT)', '무트라까지 차로 약 30분|about 30 min to Mutrah by car']],\n    bus: [['Mwasalat Ruwi bus station', '루위 버스 터미널', '니즈와·수르·살랄라행|to Nizwa, Sur and Salalah']],\n",
      itinerary=[1, 7, 6, 5, 8, 3, 4, 2],
      season='10~4월이 좋습니다. 5~9월은 40℃를 넘고 습합니다. 그랜드 모스크는 비무슬림이 오전에만 들어갈 수 있습니다.|October–April is best; May–September passes 40 °C and is humid. Non-Muslims can enter the Grand Mosque only in the morning.',
      stay=[('무트라', 'Mutrah', 'Mutrah Muscat', FIRST, '수크·코니시·옛 무스카트가 가깝습니다.|Close to the souq, the corniche and old Muscat.'),
            ('쿠룸·샤티 알 쿠룸', 'Qurum & Shatti Al Qurum', 'Shatti Al Qurum', '바닷가 호텔|Beach hotels', '해변 호텔과 식당이 모여 있고 오페라 하우스가 가깝습니다.|Beach hotels and restaurants, close to the opera house.')],
      routes=[r('dubai', 'muscat', 'flight', 70), r('doha', 'muscat', 'flight', 90), r('istanbul', 'muscat', 'flight', 285), r('riyadh', 'muscat', 'flight', 120)],
      transit=dict(modes=['bus', 'rideshare', 'taxi'], ko='도시가 길게 퍼져 있어 호출 앱이나 택시로 다닙니다. 무트라와 옛 무스카트는 걸을 만합니다.', en='The city sprawls, so use ride-hailing or taxis; Mutrah and old Muscat are walkable.')),
    C(id='nizwa', after='muscat', ko='니즈와', en='Nizwa', native='نزوى · Nizwā', lat=22.9333, lng=57.5333,
      blurb=['하자르 산맥 기슭의 옛 수도. 둥근 망루의 니즈와 요새와 금요일 가축 시장이 유명하고, 세계유산 바흘라 요새와 자브린 성, 산 위 마을 미스파트와 제벨 아크다르에 다녀옵니다.',
             'The old capital at the foot of the Hajar mountains—famous for Nizwa Fort’s round tower and the Friday livestock market, with trips to the World Heritage Bahla Fort, Jabrin Castle, the mountain village of Misfat and Jebel Akhdar.'],
      highlights=[
          H('니즈와 요새', 'Nizwa Fort', '17세기에 지은 거대한 둥근 망루의 요새로, 꼭대기에서 야자수 오아시스가 보입니다.', 'The 17th-century fort with a huge round tower, looking over the palm oasis.', 'Nizwa Fort', 60, 90),
          H('니즈와 수크', 'Nizwa Souq', '은 공예·도자기·대추야자 가게가 있는 시장으로, 금요일 아침엔 염소·소 경매가 열립니다.', 'The souq of silverwork, pottery and dates, with a goat and cattle auction on Friday mornings.', 'Nizwa Souq', 60, 90),
          H('바흘라 요새', 'Bahla Fort', '흙벽돌로 지은 거대한 요새로, 오아시스 마을과 함께 세계유산입니다.', 'The vast mud-brick fort, a World Heritage site with its oasis town.', 'Bahla Fort', 60, 90, group=DAY,
            n='니즈와에서 서쪽으로 차로 약 40분입니다.|About 40 min west of Nizwa by car.'),
          H('자브린 성', 'Jabrin Castle', '화려하게 그린 천장이 남은 17세기 궁전 같은 성입니다.', 'The palace-like 17th-century castle with beautifully painted ceilings.', 'Jabrin Castle', 60, 90, group=DAY,
            n='바흘라에서 남쪽으로 약 15분입니다.|About 15 min south of Bahla.'),
          H('미스파트 알 아브리옌', 'Misfat al Abriyeen', '절벽에 붙은 흙집 마을로, 팔라즈 수로를 따라 계단식 밭 사이를 걷습니다.', 'The cliffside mud-house village, where you walk the falaj water channels through terraced gardens.', 'Misfat al Abriyeen', 90, 120, group=DAY,
            n='니즈와에서 차로 약 1시간입니다.|About an hour from Nizwa by car.'),
          H('제벨 아크다르', 'Jebel Akhdar', '해발 2,000m 고원의 장미 마을과 계단식 밭으로, 여름에도 선선합니다.', 'Rose villages and terraces on a 2,000 m plateau, cool even in summer.', 'Jebel Akhdar', 240, 300, group=DAY,
            n='검문소에서 사륜구동 차만 올라갈 수 있습니다.|Only four-wheel drives are allowed past the checkpoint.'),
      ],
      hubs="    bus: [['Nizwa bus stop', '니즈와 버스 정류장', '무스카트행|to Muscat']],\n",
      itinerary=[1, 2, 3, 4, 5, 6],
      season='10~4월이 좋습니다. 제벨 아크다르는 3~4월 장미 철이 아름답고 여름에도 선선합니다.|October–April is best; Jebel Akhdar is lovely in the March–April rose season and stays cool in summer.',
      stay=[('니즈와 시내', 'Nizwa town', 'Nizwa', FIRST, '요새와 수크를 걸어서 보고, 근교는 차로 다녀옵니다.|Walk to the fort and souq; drive to the sights around.')],
      routes=[r('muscat', 'nizwa', 'bus', 120)],
      transit=dict(modes=['taxi', 'walk'], ko='요새와 수크는 걸어서, 근교는 차를 빌려 다닙니다.', en='Walk the fort and souq; rent a car for the sights around.')),
    C(id='sur', after='nizwa', ko='수르', en='Sur', native='صور · Ṣūr', lat=22.5667, lng=59.5289,
      blurb=['인도양 바닷가의 옛 항구 도시로, 지금도 나무 배 다우를 손으로 짓습니다. 근처 협곡 와디 샤브의 에메랄드 물웅덩이와 비마 싱크홀, 바다거북이 알을 낳는 라스 알 진즈에 다녀옵니다.',
             'The old Indian Ocean port where wooden dhows are still built by hand—with trips to the emerald pools of Wadi Shab, the Bimmah sinkhole and the turtle beaches of Ras al Jinz.'],
      highlights=[
          H('수르 다우 조선소', 'Sur Dhow Yard', '전통 목선 다우를 손으로 짓는 조선소와 다우 박물관입니다.', 'The yard where traditional wooden dhows are built by hand, with a dhow museum.', 'Sur dhow factory', 45, 60),
          H('와디 샤브', 'Wadi Shab', '배로 개울을 건너 협곡을 걸어 들어가 에메랄드 물웅덩이에서 헤엄치는 와디입니다.', 'Cross the stream by boat, hike up the canyon and swim in its emerald pools.', 'Wadi Shab', 240, 300, group=DAY,
            n='수르에서 북쪽으로 차로 약 45분입니다. 비가 오면 들어가지 마세요.|About 45 min north of Sur by car; don’t go in when it rains.'),
          H('비마 싱크홀', 'Bimmah Sinkhole', '바닷물이 섞인 청록색 물이 고인 석회암 구덩이로, 계단으로 내려가 헤엄칩니다.', 'A limestone sinkhole of turquoise brackish water, with steps down for a swim.', 'Bimmah Sinkhole', 45, 60, group=DAY,
            n='와디 샤브 가는 길에 있습니다.|On the way to Wadi Shab.'),
          H('라스 알 진즈 거북 보호구역', 'Ras al Jinz Turtle Reserve', '푸른바다거북이 알을 낳는 해변으로, 밤과 새벽에 안내원과 함께 봅니다.', 'The beach where green turtles nest, visited with a guide at night or dawn.', 'Ras al Jinz Turtle Reserve', 120, 180, group=DAY,
            n='수르에서 남동쪽으로 차로 약 45분입니다. 관찰 투어는 예약하세요.|About 45 min south-east of Sur; book the turtle-watching tour.'),
      ],
      hubs="    bus: [['Sur bus stop', '수르 버스 정류장', '무스카트행|to Muscat']],\n",
      itinerary=[1, 3, 2, 4],
      season='10~4월이 좋습니다. 거북은 일 년 내내 오지만 7~10월에 가장 많습니다.|October–April is best; turtles nest all year, most of all in July–October.',
      stay=[('수르 시내', 'Sur town', 'Sur Oman', FIRST, '다우 조선소와 바닷가가 가깝고, 와디와 거북 해변은 차로 다녀옵니다.|Close to the dhow yard and the seafront; drive to the wadis and turtle beach.')],
      routes=[r('muscat', 'sur', 'bus', 240)],
      transit=dict(modes=['taxi'], ko='차를 빌려 다니는 것이 편합니다.', en='A rental car is easiest.')),
    C(id='salalah', after='sur', ko='살랄라', en='Salalah', native='صلالة · Ṣalālah', lat=17.0151, lng=54.0924,
      blurb=['오만 남쪽 도파르 지방의 중심 도시. 여름 계절풍(카리프) 때 산과 와디가 초록으로 덮이고, 세계유산 ‘유향의 땅’ 유적과 유향 시장이 있습니다.',
             'The main city of southern Dhofar—its mountains and wadis turn green in the summer monsoon (khareef), with the World Heritage ‘Land of Frankincense’ sites and a frankincense souq.'],
      highlights=[
          H('알 발리드 유적·유향의 땅 박물관', 'Al Baleed & Museum of the Frankincense Land', '바닷가의 중세 항구 유적과 유향 교역 박물관으로, 세계유산 ‘유향의 땅’의 일부입니다.', 'The medieval harbour ruins by the sea and the frankincense-trade museum, part of the World Heritage ‘Land of Frankincense’.', 'Museum of the Frankincense Land', 90, 120),
          H('알 하파 수크', 'Al Haffa Souq', '유향과 향로, 향수를 파는 시장입니다.', 'The market of frankincense, burners and perfumes.', 'Al Haffa Souq', 45, 60),
          H('수므후람 (코르 로리)', 'Sumhuram (Khor Rori)', '석호를 내려다보는 고대 유향 항구 유적으로, 세계유산입니다.', 'The ruins of an ancient frankincense port above a lagoon—a World Heritage site.', 'Sumhuram Archaeological Park', 60, 90, group=DAY,
            n='살랄라에서 동쪽으로 약 40km입니다.|About 40 km east of Salalah.'),
          H('와디 다르바트', 'Wadi Darbat', '카리프 철에 폭포와 초원이 생기는 계곡입니다.', 'The valley of waterfalls and meadows in the khareef season.', 'Wadi Darbat', 90, 120, group=DAY,
            n='살랄라에서 동쪽으로 약 40km입니다.|About 40 km east of Salalah.'),
          H('무그사일 해변', 'Mughsail Beach', '절벽 아래 바위 구멍에서 파도가 물기둥으로 솟구치는 해변입니다.', 'The beach below the cliffs where waves spout up through blowholes.', 'Mughsail Beach', 60, 90, group=DAY,
            n='살랄라에서 서쪽으로 약 45km입니다.|About 45 km west of Salalah.'),
      ],
      hubs="    air: [['Salalah International (SLL)', '살랄라 국제공항 (SLL)', '시내까지 차로 약 10분|about 10 min to the city by car']],\n",
      itinerary=[1, 2, 3, 4, 5],
      season='6월 말~9월 카리프 철엔 안개와 이슬비 속에 산이 초록으로 변해 걸프 지역 사람들이 몰립니다. 10~4월은 맑고 따뜻합니다.|In the khareef season (late June–September) mist and drizzle turn the hills green and Gulf visitors flock in; October–April is sunny and warm.',
      stay=[('살랄라 시내·알 하파', 'Salalah centre & Al Haffa', 'Al Haffa Salalah', FIRST, '유향 시장과 알 발리드가 가깝습니다.|Close to the frankincense souq and Al Baleed.')],
      routes=[r('muscat', 'salalah', 'flight', 100)],
      transit=dict(modes=['taxi'], ko='차를 빌려 다니는 것이 편합니다.', en='A rental car is easiest.')),
]

OM_ORDER = [('무스카트와 북부', 'Muscat & the north', ['muscat', 'nizwa', 'sur']), ('도파르', 'Dhofar', ['salalah'])]
TRIPS = {'nizwa': [('바흘라·자브린|Bahla & Jabrin', 3, 4), ('미스파트|Misfat', 5), ('제벨 아크다르|Jebel Akhdar', 6)], 'sur': [('와디 샤브·비마|Wadi Shab & Bimmah', 2, 3), ('라스 알 진즈|Ras al Jinz', 4)], 'salalah': [('동쪽: 수므후람·와디 다르바트|East: Sumhuram & Wadi Darbat', 3, 4), ('무그사일|Mughsail', 5)]}


def setup():
    k = rd('countries.ts')
    if "id: 'om'," not in k:
        i = k.rindex('\n]\n\nexport function getCountry')
        k = k[:i + 1] + COUNTRY + k[i + 1:]
        wr('countries.ts', k)
    for f, block, anchor in [('essentials.ts', ESSENTIALS, '\n  xc: {'), ('transit.ts', TRANSIT, '\n  gi: {')]:
        s = rd(f)
        if '\n  om: {' not in s:
            i = s.index(anchor)
            wr(f, s[:i + 1] + block + s[i + 1:])
    m = rd('countryIsoMap.ts')
    if "  om: '512'," not in m:
        wr('countryIsoMap.ts', m.replace("  af: '004',\n", "  af: '004',\n  om: '512',\n", 1))
    p = '../src/components/TravelBanNotice.tsx'
    s = open(p).read()
    if '\n  om: {' not in s:
        i = s.index("  // 0404.go.kr notice of 2026-08-13")
        open(p, 'w').write(s[:i] + NOTICE + s[i:])


def finish():
    ids = [c['id'] for c in CITIES]
    k = rd('countries.ts')
    old = "cityIds: ['kabul', 'bamiyan', 'mazar-i-sharif', 'herat', " + ', '.join(f"'{x}'" for x in ids) + "],"
    assert old in k, 'afghanistan list'
    k = k.replace(old, "cityIds: ['kabul', 'bamiyan', 'mazar-i-sharif', 'herat'],")
    order = [x for g in OM_ORDER for x in g[2]]
    body = ("cityIds: [" + ', '.join(f"'{x}'" for x in order) + "],\n    cityGroups: [\n"
            + ''.join(f"      {{ title: {{ ko: '{ko}', en: '{en}' }}, cityIds: [{', '.join(repr(x) for x in g)}] }},\n" for ko, en, g in OM_ORDER) + '    ],')
    i = k.index("    id: 'om',")
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
