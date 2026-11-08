#!/usr/bin/env python3
"""UAE (2026-11-08). Korean Foreign Ministry page (0404.go.kr/ntnSafetyInfo/135/detail): level 3 (leave the country)
nationwide since 2026-03-08; notices of 2026-10-23/28 on the Middle East and 2026-11-02 on international driving permits.
User rule: level-3 Gulf countries get the full guide with a notice. Cities: Dubai, Abu Dhabi, Al Ain. Run once."""
import add_daytrip_places3 as T
from add_daytrip_places import rd, wr
from add_slovakia_cities import H

DAY = ('근교 당일치기', 'Day trip')
RC = 'routes-central.ts'
R_AFTER = r"^  r\('amman', 'doha', 'flight', 165\),\n"
COMMON = dict(country='ae', group_title=None, hubs_file='hubs-central.ts', hubs_before='  seville: {\n', itin_file='itinerary-iberia.ts',
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
    id: 'ae',
    region: 'mena',
    name: { ko: '아랍에미리트', en: 'United Arab Emirates' },
    nativeName: 'الإمارات العربية المتحدة',
    flagImage: '/flags/ae.svg',
    landmarkImage: '/landmarks/landmark-ae.jpg',
    flag: '🇦🇪',
    blurb: {
      ko: '일곱 토후국이 모인 걸프 연안의 나라. 세계에서 가장 높은 부르즈 할리파가 선 두바이와 하얀 셰이크 자이드 그랜드 모스크·루브르 아부다비가 있는 수도 아부다비, 오아시스 도시 알아인이 있습니다.',
      en: 'Seven emirates on the Gulf—Dubai with the world’s tallest building, the Burj Khalifa; the capital Abu Dhabi with the white Sheikh Zayed Grand Mosque and the Louvre Abu Dhabi; and the oasis city of Al Ain.',
    },
    facts: {
      population: { ko: '약 1,000만 명 (2024년)', en: 'Approx. 10 million (2024)' },
      area: { ko: '약 8만 3,600 km²', en: 'Approx. 83,600 km²' },
      capital: { ko: '아부다비 (Abu Dhabi)', en: 'Abu Dhabi' },
      currency: { ko: '아랍에미리트 디르함 (AED, Dh) · 고정 환율 1달러 ≈ 3.67디르함', en: 'UAE dirham (AED, Dh), pegged at about 3.67 to the US dollar' },
    },
    currencyCode: 'AED',
    currencySymbol: 'Dh',
    schengen: false,
    flagColors: {
      primary: '#00843D',
      secondary: '#FFFFFF',
      accent: '#C8102E',
      background: '#E8F0FA',
      text: '#0B2A4A',
    },
    cityIds: [],
  },
"""

ESSENTIALS = """  ae: {
    // Korean Foreign Ministry travel-safety page for the UAE (0404.go.kr/ntnSafetyInfo/135/detail), 2026-11.
    emergency: [num('999', '경찰 (두바이에선 구급도)', 'Police (also ambulance in Dubai)'), num('998', '구급 (아부다비)', 'Ambulance (Abu Dhabi)'), num('997', '소방', 'Fire')],
    embassy: {
      name: T('주아랍에미리트 대한민국 대사관', 'Korean Embassy in the UAE'),
      address: 'Embassies District, 33rd Airport Road, Abu Dhabi (P.O. Box 3270)',
      phone: '+971-2-441-1520',
      afterHours: '+971-50-133-7362',
      note: T('두바이·샤르자·아즈만·라스알카이마·움알카이와인·푸자이라는 주두바이 총영사관(Villa 39, Street 24b, Jumeirah 2, +971-4-344-9200, 24시간 +971-50-553-2816)이 맡습니다.', 'Dubai, Sharjah, Ajman, Ras Al Khaimah, Umm Al Quwain and Fujairah are covered by the Consulate General in Dubai (Villa 39, Street 24b, Jumeirah 2, +971-4-344-9200; 24 h +971-50-553-2816).'),
      source: 'https://www.0404.go.kr/ntnSafetyInfo/135/detail',
    },
    power: T('220~240V · 50Hz, G형(영국식 3핀) 콘센트. 한국 플러그는 맞지 않아 어댑터가 필요합니다.', '220–240V, 50Hz, type G (British three-pin) sockets. Korean plugs do not fit; bring an adapter.'),
    tipping: T('팁은 의무가 아니지만 식당에선 10% 안팎을 두기도 합니다.', 'Tipping is optional; around 10% is common in restaurants.'),
    water: WATER_BOTTLED,
    shops: T('디르함은 미국 달러에 고정돼 있고 카드가 거의 어디서나 됩니다. 수크(전통 시장)에선 값을 흥정합니다.', 'The dirham is pegged to the US dollar and cards are accepted almost everywhere; bargain in the souks.'),
    toilets: T('쇼핑몰·지하철역·박물관 화장실이 깨끗하고 무료입니다.', 'Malls, metro stations and museums have clean, free toilets.'),
    time: T('UTC+4, 서머타임 없음. 한국보다 5시간 늦습니다.', 'UTC+4 with no daylight saving: 5 hours behind Korea.'),
    safety: T('외교부 여행경보: 2026년 3월 8일부터 아랍에미리트 전역이 3단계(출국권고)입니다. 10월 23일·28일 중동 정세 관련 안전 공지가 나와 있습니다. 사우디 국경 지역과 군사 시설 주변은 사진만 찍어도 체포될 수 있습니다. 공공장소에선 어깨와 무릎을 가리고, 술은 허가받은 호텔·식당에서만 마십니다.', 'Korean travel alert: level 3 (leave the country) nationwide since 8 March 2026, with Middle East safety notices on 23 and 28 October. Near the Saudi border and military sites even taking photos can lead to arrest. Cover shoulders and knees in public, and drink alcohol only in licensed hotels and restaurants.'),
    entry: T('한국 여권은 180일 중 90일까지 비자 없이 들어갈 수 있습니다. 여권은 입·출국일 기준 6개월 이상 남아 있어야 하고, 훼손된 여권으론 입국할 수 없습니다. 6만 디르함 넘는 현금은 세관에 신고합니다. 차를 빌리려면 외교부 2026년 11월 2일 국제운전면허증 유의 공지를 확인하세요.', 'Korean passports are visa-free for 90 days in any 180. Passports must be valid for six months beyond entry and exit, and damaged passports are refused. Declare cash over 60,000 dirhams. If renting a car, read the ministry’s 2 November 2026 notice on international driving permits.'),
    telecom: T('주요 통신사는 e&(옛 Etisalat)·du입니다. 공항에서 관광객용 유심·eSIM을 살 수 있습니다.', 'Main operators: e& (formerly Etisalat) and du; tourist SIMs and eSIMs are sold at the airport.'),
  },
"""

TRANSIT = """  ae: {
    summary: {
      ko: '우측통행. 두바이는 무인 지하철·트램·아브라(수상 택시)가 잘 갖춰져 있고, 아부다비·알아인은 버스와 택시·호출 앱으로 다닙니다. 도시 사이는 시외버스로 이어집니다.',
      en: 'Drive on the right. Dubai has a driverless metro, a tram and abra water taxis; Abu Dhabi and Al Ain rely on buses, taxis and ride-hailing, and intercity buses link the cities.',
    },
    drivingSide: 'right',
    longDistance: {
      ko: '두바이–아부다비는 시외버스로 약 2시간, 아부다비–알아인도 버스로 약 2시간입니다. 두바이 국제공항(DXB)은 큰 환승지입니다.',
      en: 'Dubai to Abu Dhabi is about 2 hrs by intercity bus, as is Abu Dhabi to Al Ain. Dubai International (DXB) is a major hub.',
    },
    paymentTip: {
      ko: '두바이는 교통카드 놀(Nol)로 지하철·버스·트램을 타고, 아부다비 버스는 하파라트(Hafilat) 카드를 씁니다.',
      en: 'Dubai uses the Nol card for the metro, buses and tram; Abu Dhabi buses take the Hafilat card.',
    },
    apps: [],
  },
"""

NOTICE = """  // 0404.go.kr UAE page: level 3 nationwide since 2026-03-08; notices of 2026-10-23, 10-28 and 11-02.
  ae: {
    icon: '⚠️',
    title: { ko: '외교부 여행경보 · 3단계 출국권고', en: 'Korean travel alert · level 3, leave the country' },
    lines: [
      {
        ko: '중동 정세로 2026년 3월 8일부터 아랍에미리트 전역이 3단계(출국권고) 지역입니다. 여행 예정이면 취소하거나 미루고, 머무는 중이면 꼭 필요한 일이 아니면 출국하라는 단계입니다.',
        en: 'Because of the Middle East situation, all of the UAE has been at level 3 (leave the country) since 8 March 2026: cancel or postpone planned trips, and leave unless your stay is essential.',
      },
      {
        ko: '외교부는 2026년 10월 23일과 28일 중동 정세 관련 재외국민 안전 공지를 냈습니다. 두바이·아부다비 공항을 경유할 때도 출발 전 최신 공지를 꼭 확인하세요.',
        en: 'The ministry issued safety notices on 23 and 28 October 2026; check the latest notices before you go, even when only transiting Dubai or Abu Dhabi airports.',
      },
    ],
    link: 'https://www.0404.go.kr/ntnSafetyInfo/135/detail',
  },
"""

CITIES = [
    C(id='dubai', after='haifa', ko='두바이', en='Dubai', native='دبي · Dubai', lat=25.2048, lng=55.2708,
      blurb=['사막 위에 세계 최고층 빌딩과 인공 섬을 세운 걸프의 대도시. 부르즈 할리파와 두바이 몰, 미래 박물관이 있는 신도심과, 아브라를 타고 건너는 두바이 크리크·옛 시장이 함께 있습니다.',
             'The Gulf metropolis that raised the world’s tallest tower and man-made islands from the desert—Downtown’s Burj Khalifa, Dubai Mall and Museum of the Future, and the old souks across Dubai Creek by abra.'],
      highlights=[
          H('부르즈 할리파', 'Burj Khalifa', '높이 828m로 세계에서 가장 높은 빌딩입니다. 124·125층 전망대 ‘앳 더 톱’에서 사막과 바다가 내려다보입니다.', 'At 828 m the world’s tallest building; the At the Top decks on floors 124–125 look out over desert and sea.', 'Burj Khalifa', 90, 120,
            n='해 질 녘 시간대 표는 일찍 매진되니 미리 예약하세요.|Sunset slots sell out early—book ahead.'),
          H('두바이 몰과 두바이 분수', 'Dubai Mall & Dubai Fountain', '수족관과 아이스링크가 있는 거대한 쇼핑몰로, 저녁마다 부르즈 할리파 앞 호수에서 음악 분수 쇼가 열립니다.', 'The vast mall with an aquarium and ice rink; every evening the musical fountain plays on the lake below the Burj Khalifa.', 'Dubai Fountain', 120, 180),
          H('알 파히디 역사 지구', 'Al Fahidi Historical District', '바람탑이 선 산호석 집들이 골목을 이룬 옛 동네로, 갤러리와 카페가 있습니다.', 'The old quarter of coral-stone houses with wind towers, home to galleries and cafés.', 'Al Fahidi Historical Neighbourhood', 60, 90),
          H('두바이 크리크와 데이라 수크', 'Dubai Creek & Deira souks', '1디르함짜리 나무배 아브라로 크리크를 건너 금 시장과 향신료 시장을 걷습니다.', 'Cross the creek on a one-dirham wooden abra to the Gold Souk and Spice Souk.', 'Dubai Gold Souk', 60, 120),
          H('미래 박물관', 'Museum of the Future', '아랍어 서예로 덮인 타원형 건물에 미래 기술 전시가 있는 박물관입니다.', 'The torus-shaped museum clad in Arabic calligraphy, with exhibitions on future technology.', 'Museum of the Future', 90, 120),
          H('두바이 프레임', 'Dubai Frame', '높이 150m의 거대한 액자 모양 전망대로, 한쪽엔 옛 두바이, 다른 쪽엔 신도심이 보입니다.', 'A 150 m picture-frame lookout, with old Dubai on one side and the new city on the other.', 'Dubai Frame', 60, 90),
          H('팜 주메이라', 'Palm Jumeirah', '야자수 모양 인공 섬으로, 끝에 아틀란티스 호텔이 있고 전망대 ‘더 뷰 앳 더 팜’에서 섬 전체가 보입니다.', 'The palm-shaped man-made island, with the Atlantis hotel at its tip and The View at The Palm lookout over the whole island.', 'The View at The Palm', 90, 120),
          H('부르즈 알 아랍과 주메이라 해변', 'Burj Al Arab & Jumeirah Beach', '돛 모양 호텔 부르즈 알 아랍을 바라보는 공영 해변입니다.', 'The public beach facing the sail-shaped Burj Al Arab hotel.', 'Jumeirah Public Beach Burj Al Arab', 45, 90),
          H('수크 마디낫 주메이라', 'Souk Madinat Jumeirah', '운하와 바람탑이 있는 옛 시장풍 쇼핑 단지로, 부르즈 알 아랍이 보이는 식당이 모여 있습니다.', 'A souk-style complex of canals and wind towers, with restaurants looking out to the Burj Al Arab.', 'Souk Madinat Jumeirah', 60, 90),
          H('두바이 마리나와 JBR', 'Dubai Marina & JBR', '고층 빌딩이 둘러싼 요트 마리나와 해변 산책로 더 워크(JBR)입니다.', 'The yacht marina ringed by towers and The Walk beachfront at JBR.', 'Dubai Marina Walk', 60, 120),
          H('사막 사파리', 'Desert safari', '사륜구동으로 모래언덕을 달리고 사막 캠프에서 저녁을 먹는 반나절 투어입니다.', 'A half-day 4×4 tour over the dunes with dinner at a desert camp.', 'Dubai Desert Conservation Reserve', 360, 420, group=DAY,
            n='오후에 호텔에서 출발해 밤에 돌아오는 투어가 일반적입니다.|Tours usually leave hotels in the afternoon and return at night.'),
          H('샤르자', 'Sharjah', '이웃 토후국 샤르자의 이슬람 문명 박물관과 옛 시가 ‘하트 오브 샤르자’를 둘러봅니다. 샤르자는 술이 금지된 곳입니다.', 'The neighbouring emirate’s Museum of Islamic Civilization and the restored Heart of Sharjah; alcohol is banned in Sharjah.', 'Sharjah Museum of Islamic Civilization', 180, 240, group=DAY,
            n='두바이에서 차로 약 30분~1시간(교통 체증에 따라)입니다.|About 30 min–1 hr by car from Dubai, depending on traffic.'),
      ],
      hubs="    air: [['Dubai International (DXB)', '두바이 국제공항 (DXB)', '지하철 레드 라인으로 시내까지 약 20~30분|about 20–30 min to the city on the Metro Red Line']],\n    rail: [['BurJuman', '버주만역', '레드·그린 라인 환승역|Red and Green Line interchange']],\n    bus: [['Al Ghubaiba Bus Station', '알 구바이바 버스터미널', '아부다비·샤르자행|to Abu Dhabi and Sharjah']],\n",
      itinerary=[3, 4, 6, 5, 2, 1, 8, 9, 7, 10, 11, 12],
      season='11~3월이 선선해 좋고, 6~9월은 40℃를 훌쩍 넘습니다. 라마단 기간엔 낮에 식당이 문을 닫거나 가려서 엽니다.|November–March is pleasantly cool; June–September soars past 40 °C. During Ramadan many restaurants close or screen off by day.',
      stay=[('다운타운 두바이', 'Downtown Dubai', 'Downtown Dubai', FIRST, '부르즈 할리파·두바이 몰이 걸어서 닿고 지하철역이 가깝습니다.|The Burj Khalifa and Dubai Mall on foot, near the Metro.'),
            ('두바이 마리나', 'Dubai Marina', 'Dubai Marina', '해변 휴양|Beach stay', '해변과 마리나 산책로가 가깝고 트램·지하철이 다닙니다.|Close to the beach and marina walk, with the tram and Metro.'),
            ('데이라·버 두바이', 'Deira & Bur Dubai', 'Bur Dubai', '실속 여행|Budget stays', '옛 시장과 크리크가 가깝고 숙소 값이 저렴한 편입니다.|Near the old souks and creek, with cheaper hotels.')],
      routes=[r('istanbul', 'dubai', 'flight', 270), r('athens', 'dubai', 'flight', 290), r('rome', 'dubai', 'flight', 350), r('paris', 'dubai', 'flight', 400), r('cairo', 'dubai', 'flight', 210), r('doha', 'dubai', 'flight', 70), r('tel-aviv', 'dubai', 'flight', 200)],
      transit=dict(modes=['metro', 'tram', 'bus', 'ferry', 'rideshare', 'taxi'], ko='무인 지하철 레드·그린 라인과 트램, 크리크를 건너는 아브라, 호출 앱(Uber·Careem)으로 다닙니다. 한낮엔 걷기 어려울 만큼 덥습니다.', en='Use the driverless Red and Green Metro lines, the tram, abras across the creek and ride-hailing (Uber, Careem); midday is too hot to walk far.')),
    C(id='abu-dhabi', after='dubai', ko='아부다비', en='Abu Dhabi', native='أبو ظبي · Abu Dhabi', lat=24.4539, lng=54.3773,
      blurb=['아랍에미리트의 수도. 하얀 대리석의 셰이크 자이드 그랜드 모스크와 바다 위 돔 아래 전시실이 펼쳐진 루브르 아부다비, 대통령궁 카스르 알 와탄이 있습니다.',
             'The UAE’s capital—the white-marble Sheikh Zayed Grand Mosque, the Louvre Abu Dhabi under its dome on the sea, and the Qasr Al Watan presidential palace.'],
      highlights=[
          H('셰이크 자이드 그랜드 모스크', 'Sheikh Zayed Grand Mosque', '흰 대리석 돔 82개가 선 거대한 모스크로, 세계 최대급 카펫과 샹들리에가 있습니다. 입장은 무료(사전 예약)입니다.', 'The vast mosque of 82 white-marble domes, with one of the world’s largest carpets and chandeliers; entry is free with advance booking.', 'Sheikh Zayed Grand Mosque', 90, 120,
            n='긴 옷으로 팔다리를 가리고, 여성은 머리도 가립니다. 금요일 오전엔 관광객이 들어가지 못합니다.|Cover arms and legs, and women cover their hair; closed to visitors on Friday mornings.'),
          H('루브르 아부다비', 'Louvre Abu Dhabi', '장 누벨이 설계한 그물 돔 아래 바닷가 전시실에서 인류 문명을 시대순으로 보여 주는 미술관입니다.', 'Jean Nouvel’s museum beneath a latticed dome by the sea, telling the story of human civilisation through time.', 'Louvre Abu Dhabi', 150, 180),
          H('카스르 알 와탄', 'Qasr Al Watan', '흰 화강암과 금빛 장식의 대통령궁으로, 대연회장과 도서관을 둘러봅니다.', 'The presidential palace of white granite and gold, with its great hall and library open to visitors.', 'Qasr Al Watan', 90, 120),
          H('카스르 알 호슨', 'Qasr Al Hosn', '아부다비에서 가장 오래된 석조 건물인 18세기 망루 요새로, 도시의 역사를 보여 줍니다.', 'Abu Dhabi’s oldest stone building, an 18th-century watchtower fort that tells the city’s story.', 'Qasr Al Hosn', 60, 90),
          H('코르니시', 'Corniche', '해변과 공원이 8km 이어지는 바닷가 산책로입니다.', 'The 8 km seafront promenade of beaches and parks.', 'Abu Dhabi Corniche', 60, 90),
          H('에미리츠 팰리스', 'Emirates Palace', '금빛 돔이 덮인 궁전 같은 호텔로, 카페에서 금박 커피를 마셔 봅니다.', 'The palace-like hotel under golden domes, whose café serves gold-flaked coffee.', 'Emirates Palace Mandarin Oriental', 30, 60),
          H('맹그로브 국립공원', 'Mangrove National Park', '도심 바로 옆 맹그로브 숲을 카약이나 산책로로 둘러봅니다.', 'Explore the mangroves right beside the city by kayak or boardwalk.', 'Mangrove National Park Abu Dhabi', 90, 120),
          H('야스섬 페라리 월드', 'Ferrari World Yas Island', '빨간 지붕 아래 세계에서 가장 빠른 롤러코스터가 있는 실내 테마파크입니다.', 'The indoor theme park under a red roof, home to one of the world’s fastest roller coasters.', 'Ferrari World Abu Dhabi', 240, 360),
      ],
      hubs="    air: [['Zayed International (AUH)', '자이드 국제공항 (AUH)', '택시·버스로 시내까지 약 30~40분|about 30–40 min to the city by taxi or bus']],\n    bus: [['Abu Dhabi Central Bus Station', '아부다비 중앙 버스터미널', '두바이·알아인행|to Dubai and Al Ain']],\n",
      itinerary=[1, 3, 6, 5, 4, 2, 7, 8],
      season='11~3월이 좋고, 한여름은 45℃에 이릅니다.|November–March is best; midsummer reaches 45 °C.',
      stay=[('코르니시', 'Corniche', 'Abu Dhabi Corniche', FIRST, '바닷가 산책로와 카스르 알 호슨이 가깝습니다.|Near the seafront and Qasr Al Hosn.'),
            ('사디야트·야스섬', 'Saadiyat & Yas Island', 'Saadiyat Island', '해변 리조트|Beach resorts', '루브르 아부다비와 해변 리조트, 테마파크가 가깝습니다.|Near the Louvre Abu Dhabi, beach resorts and the theme parks.')],
      routes=[r('dubai', 'abu-dhabi', 'bus', 120, "{ fa: '알 구바이바|Al Ghubaiba', n: 'E101번 시외버스|intercity bus E101' }"),
              r('istanbul', 'abu-dhabi', 'flight', 270), r('paris', 'abu-dhabi', 'flight', 400), r('cairo', 'abu-dhabi', 'flight', 210)],
      transit=dict(modes=['bus', 'taxi', 'rideshare'], ko='명소가 흩어져 있어 택시·호출 앱이 편하고, 시내버스는 하파라트 카드로 탑니다.', en='Sights are spread out—taxis and ride-hailing are easiest; city buses take the Hafilat card.')),
    C(id='al-ain', after='abu-dhabi', ko='알아인', en='Al Ain', native='العين · Al Ain', lat=24.2075, lng=55.7447,
      blurb=['오만 국경 가까이 대추야자 오아시스가 펼쳐진 ‘정원 도시’. 오아시스와 흙벽 요새, 청동기 유적이 세계유산이고, 하피트산에 올라 사막을 내려다봅니다.',
             'The ‘garden city’ of palm oases near the Omani border—its oases, mud-brick forts and Bronze Age sites are a World Heritage site, and Jebel Hafeet looks out over the desert.'],
      highlights=[
          H('알아인 오아시스', 'Al Ain Oasis', '대추야자 14만여 그루 사이로 옛 수로 팔라지가 흐르는 오아시스로, 그늘진 길을 걷습니다.', 'An oasis of some 140,000 date palms watered by ancient falaj channels, crossed by shady paths.', 'Al Ain Oasis', 60, 90),
          H('알 자힐리 요새', 'Al Jahili Fort', '1890년대에 세운 흙벽 요새로, 탐험가 윌프레드 세시저 사진전이 있습니다.', 'The 1890s mud-brick fort, with an exhibition of explorer Wilfred Thesiger’s photographs.', 'Al Jahili Fort', 45, 60),
          H('알아인 궁전 박물관', 'Al Ain Palace Museum', '건국 대통령 셰이크 자이드가 살던 궁전을 고친 박물관입니다.', 'The museum in the former palace of the founding president, Sheikh Zayed.', 'Al Ain Palace Museum', 60, 90),
          H('힐리 고고학 공원', 'Hili Archaeological Park', '기원전 3천 년기 무덤과 마을 유적이 남은 공원입니다.', 'A park of tombs and settlement remains from the third millennium BC.', 'Hili Archaeological Park', 45, 60),
          H('하피트산', 'Jebel Hafeet', '구불구불한 도로로 오르는 해발 약 1,240m의 산으로, 정상에서 사막과 도시가 내려다보입니다.', 'The 1,240 m mountain climbed by a winding road, with views over desert and city from the top.', 'Jebel Hafeet', 90, 120,
            n='대중교통이 없어 택시나 차로 갑니다.|No public transport—go by taxi or car.'),
      ],
      hubs="    air: [['Zayed International (AUH)', '자이드 국제공항 (AUH)', '아부다비|Abu Dhabi']],\n    bus: [['Al Ain Central Bus Station', '알아인 중앙 버스터미널', '아부다비·두바이행|to Abu Dhabi and Dubai']],\n",
      itinerary=[1, 3, 2, 4, 5],
      season='11~3월이 좋습니다. 내륙이라 해안보다 건조하고 여름 낮엔 45℃를 넘습니다.|November–March is best; inland, it is drier than the coast and summer days pass 45 °C.',
      stay=[('오아시스 주변 시내', 'Centre near the Oasis', 'Al Ain Oasis', FIRST, '오아시스와 궁전 박물관이 걸어서 닿습니다. 아부다비·두바이에서 당일로도 다녀옵니다.|The oasis and palace museum on foot; also a day trip from Abu Dhabi or Dubai.')],
      routes=[r('abu-dhabi', 'al-ain', 'bus', 150), r('dubai', 'al-ain', 'bus', 120)],
      transit=dict(modes=['bus', 'taxi', 'rideshare'], ko='시내는 택시가 편하고, 하피트산은 차로만 오릅니다.', en='Taxis are easiest in town; Jebel Hafeet is reached only by road.')),
]

AE_ORDER = [('두바이와 북부', 'Dubai & the north', ['dubai']), ('아부다비', 'Abu Dhabi', ['abu-dhabi', 'al-ain'])]
TRIPS = {'dubai': [('사막 사파리|Desert safari', 11), ('샤르자|Sharjah', 12)]}


def setup():
    k = rd('countries.ts')
    if "id: 'ae'," not in k:
        i = k.rindex('\n]\n\nexport function getCountry')
        k = k[:i + 1] + COUNTRY + k[i + 1:]
        wr('countries.ts', k)
    for f, block, anchor in [('essentials.ts', ESSENTIALS, '\n  xc: {'), ('transit.ts', TRANSIT, '\n  gi: {')]:
        s = rd(f)
        if '\n  ae: {' not in s:
            i = s.index(anchor)
            wr(f, s[:i + 1] + block + s[i + 1:])
    m = rd('countryIsoMap.ts')
    if "  ae: '784'," not in m:
        wr('countryIsoMap.ts', m.replace("  il: '376',\n", "  il: '376',\n  ae: '784',\n", 1))
    p = '../src/components/TravelBanNotice.tsx'
    s = open(p).read()
    if '\n  ae: {' not in s:
        i = s.index("  // 0404.go.kr notice of 2026-08-13")
        open(p, 'w').write(s[:i] + NOTICE + s[i:])


def finish():
    ids = [c['id'] for c in CITIES]
    k = rd('countries.ts')
    old = "cityIds: ['jerusalem', 'dead-sea', 'tel-aviv', 'haifa', " + ', '.join(f"'{x}'" for x in ids) + "],"
    assert old in k, 'israel list'
    k = k.replace(old, "cityIds: ['jerusalem', 'dead-sea', 'tel-aviv', 'haifa'],")
    order = [x for g in AE_ORDER for x in g[2]]
    body = ("cityIds: [" + ', '.join(f"'{x}'" for x in order) + "],\n    cityGroups: [\n"
            + ''.join(f"      {{ title: {{ ko: '{ko}', en: '{en}' }}, cityIds: [{', '.join(repr(x) for x in g)}] }},\n" for ko, en, g in AE_ORDER) + '    ],')
    i = k.index("    id: 'ae',")
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
