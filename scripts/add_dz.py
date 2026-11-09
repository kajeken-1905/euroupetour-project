#!/usr/bin/env python3
"""Algeria (2026-11-09). Korean Foreign Ministry page (0404.go.kr/ntnSafetyInfo/150/detail): Algiers level 1, Kabylie
mountain wilayas level 2, the Tunisian, Libyan and Sahel borders level 3; no travel-ban areas. Ordinary Korean passports need
a visa from an embassy before travel. Cities: Algiers, Oran, Constantine, Ghardaia. Run once."""
import add_daytrip_places3 as T
from add_daytrip_places import rd, wr
from add_slovakia_cities import H

DAY = ('근교 당일치기', 'Day trip')
RC = 'routes-central.ts'
R_AFTER = r"^  r\('amman', 'doha', 'flight', 165\),\n"
COMMON = dict(country='dz', group_title=None, hubs_file='hubs-central.ts', hubs_before='  seville: {\n', itin_file='itinerary-iberia.ts',
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
    id: 'dz',
    region: 'mena',
    name: { ko: '알제리', en: 'Algeria' },
    nativeName: 'الجزائر · Algérie',
    flagImage: '/flags/dz.svg',
    landmarkImage: '/landmarks/landmark-dz.jpg',
    flag: '🇩🇿',
    blurb: {
      ko: '아프리카에서 가장 넓은 나라. 하얀 수도 알제의 카스바, 협곡 위 다리의 도시 콘스탄틴, 로마 유적 팀가드·제밀라, 사막의 므자브 계곡이 있습니다.',
      en: 'Africa’s largest country—the Casbah of white Algiers, Constantine’s bridges over a gorge, the Roman ruins of Timgad and Djémila, and the desert M’zab Valley.',
    },
    facts: {
      population: { ko: '약 4,700만 명 (2024년)', en: 'Approx. 47 million (2024)' },
      area: { ko: '약 238만 km²', en: 'Approx. 2.38 million km²' },
      capital: { ko: '알제 (Algiers)', en: 'Algiers' },
      currency: { ko: '알제리 디나르 (DZD, DA)', en: 'Algerian dinar (DZD, DA)' },
    },
    currencyCode: 'DZD',
    currencySymbol: 'DA',
    schengen: false,
    flagColors: {
      primary: '#006233',
      secondary: '#FFFFFF',
      accent: '#D21034',
      background: '#E8F0FA',
      text: '#0B2A4A',
    },
    cityIds: [],
  },
"""

ESSENTIALS = """  dz: {
    // Korean Foreign Ministry travel-safety page for Algeria (0404.go.kr/ntnSafetyInfo/150/detail), 2026-11.
    emergency: [num('1548', '경찰', 'Police'), num('14', '소방', 'Fire'), num('115', '구급', 'Ambulance')],
    embassy: {
      name: T('주알제리 대한민국 대사관', 'Korean Embassy in Algeria'),
      address: '5 Chemin Mackley (El Bakri), Ben Aknoun, Alger',
      phone: '+213-23-18-77-17',
      afterHours: '+213-770-11-44-00',
      source: 'https://www.0404.go.kr/ntnSafetyInfo/150/detail',
    },
    power: T('230V · 50Hz, C·F형 콘센트로 한국 플러그를 그대로 씁니다.', '230V, 50Hz, type C and F sockets—Korean plugs fit.'),
    tipping: T('팁은 의무가 아니지만 식당에선 잔돈을 남기거나 5~10%를 둡니다.', 'Tipping is optional; leave small change or 5–10% in restaurants.'),
    water: WATER_BOTTLED,
    shops: T('현금 사회라 카드가 되는 곳이 드뭅니다. 디나르는 현지에서만 바꿀 수 있으니 은행·공항 환전소를 이용하세요.', 'Algeria runs on cash and cards are rarely accepted; dinars can only be obtained locally, at banks and airport exchange counters.'),
    toilets: T('호텔·식당 화장실을 이용합니다.', 'Use toilets in hotels and restaurants.'),
    time: T('UTC+1, 서머타임 없음. 한국보다 8시간 늦습니다.', 'UTC+1 with no daylight saving: 8 hours behind Korea.'),
    safety: T('외교부 여행경보: 알제는 1단계(여행유의), 카빌리 산악 지역(부메르데스·부이라·티지우주·베자이아·보르즈부아레리즈·지젤)은 2단계(여행자제), 튀니지·리비아·니제르·말리·모리타니 접경 지역은 3단계(출국권고)입니다. 2026년 9월 2일 중동 정세 관련 신변 안전 공지가 나와 있습니다.', 'Korean travel alert: Algiers is level 1 (exercise caution), the Kabylie mountain wilayas (Boumerdès, Bouira, Tizi Ouzou, Béjaïa, Bordj Bou Arréridj, Jijel) level 2 (refrain from travel), and the Tunisian, Libyan, Niger, Mali and Mauritania border areas level 3 (leave the country). A personal-safety notice on the Middle East situation was issued on 2 September 2026.'),
    entry: T('한국 일반 여권은 출발 전에 대사관·영사관에서 비자를 받아야 합니다(수수료 현금). 여권은 6개월 이상 남아 있어야 하고 서명란에 서명해야 합니다. 의약품을 가져갈 땐 외교부 2026년 9월 2일 안내를 확인하세요. 모로코와의 육로 국경과 직항은 닫혀 있습니다.', 'Ordinary Korean passports need a visa from an embassy or consulate before travel (cash fee). Passports need six months’ validity and must be signed. Check the ministry’s 2 September 2026 notice before bringing medicines. The land border and direct flights with Morocco are closed.'),
    telecom: T('주요 통신사는 Mobilis·Djezzy·Ooredoo입니다. 공항에서 유심을 살 수 있습니다.', 'Main operators: Mobilis, Djezzy and Ooredoo; SIMs are sold at the airport.'),
  },
"""

TRANSIT = """  dz: {
    summary: {
      ko: '우측통행. 알제엔 지하철과 트램, 언덕을 오르는 케이블카가 있고, 알제–오랑·콘스탄틴은 기차로, 사막 도시는 국내선으로 갑니다.',
      en: 'Drive on the right. Algiers has a metro, trams and cable cars up its hills; trains link Algiers with Oran and Constantine, and domestic flights reach the desert towns.',
    },
    drivingSide: 'right',
    longDistance: {
      ko: '알제–오랑은 기차로 약 4시간, 알제–콘스탄틴은 기차로 6시간 안팎이거나 비행기로 약 1시간, 가르다이아는 비행기로 약 1시간 15분입니다.',
      en: 'Algiers to Oran is about 4 hrs by train; Algiers to Constantine about 6 hrs by train or 1 hr by air; Ghardaïa about 1 hr 15 by air.',
    },
    paymentTip: {
      ko: '기차표는 SNTF 역 창구에서 현금으로 삽니다. 택시는 미터기를 켜는지 확인하세요.',
      en: 'Buy SNTF train tickets with cash at the station; make sure taxis use the meter.',
    },
    apps: [],
  },
"""

NOTICE = """  // 0404.go.kr Algeria page: alert levels (last regular review 2025-06-30) and the 2026-09-02 notices.
  dz: {
    icon: '⚠️',
    title: { ko: '외교부 여행경보 · 지역별 1~3단계', en: 'Korean travel alert · levels 1–3 by region' },
    lines: [
      {
        ko: '알제는 1단계(여행유의), 카빌리 산악 지역(부메르데스·부이라·티지우주·베자이아·보르즈부아레리즈·지젤)은 2단계(여행자제), 튀니지·리비아 접경과 남부 니제르·말리·모리타니 접경 지역은 3단계(출국권고)입니다.',
        en: 'Algiers is level 1 (exercise caution); the Kabylie mountain wilayas (Boumerdès, Bouira, Tizi Ouzou, Béjaïa, Bordj Bou Arréridj, Jijel) are level 2 (refrain from travel); the Tunisian and Libyan borders and the southern borders with Niger, Mali and Mauritania are level 3 (leave the country).',
      },
      {
        ko: '외교부는 2026년 9월 2일 중동 정세에 따른 신변 안전 유의를 공지했습니다. 출발 전 최신 공지를 꼭 확인하세요.',
        en: 'On 2 September 2026 the ministry advised caution because of the Middle East situation. Check the latest notices before you go.',
      },
    ],
    link: 'https://www.0404.go.kr/ntnSafetyInfo/150/detail',
  },
"""

CITIES = [
    C(id='algiers', after='kuwait-city', ko='알제', en='Algiers', native='الجزائر · Alger', lat=36.7538, lng=3.0588,
      blurb=['지중해를 향해 언덕을 따라 하얀 건물이 쌓인 ‘하얀 알제’. 오스만 시대 골목이 미로처럼 이어진 카스바가 세계유산이고, 언덕 위 순교자 기념탑과 바다를 내려다보는 아프리카 성모 성당이 있습니다.',
             '‘Alger la Blanche’, its white buildings stacked up the hills above the Mediterranean—the maze-like Ottoman Casbah is a World Heritage site, with the Martyrs’ Memorial on its hill and Notre-Dame d’Afrique over the sea.'],
      highlights=[
          H('알제 카스바', 'Casbah of Algiers', '오스만 시대 궁전과 모스크, 좁은 계단 골목이 언덕을 따라 이어진 옛 시가로, 세계유산입니다.', 'The old town of Ottoman palaces, mosques and narrow stepped lanes climbing the hill—a World Heritage site.', 'Casbah of Algiers', 120, 180,
            n='골목이 복잡해 현지 가이드와 다니는 것이 좋습니다.|The lanes are a maze—go with a local guide.'),
          H('순교자 기념탑 (마캄 에차히드)', 'Martyrs’ Memorial (Maqam Echahid)', '독립 20주년인 1982년 세운 높이 92m의 콘크리트 기념탑으로, 야자잎 세 장이 모인 모양입니다. 아래에 독립 전쟁 박물관이 있습니다.', 'The 92 m concrete memorial raised in 1982 for the 20th anniversary of independence, shaped like three palm fronds, with a museum of the independence war below.', 'Maqam Echahid', 60, 90),
          H('아프리카 성모 성당', 'Notre-Dame d’Afrique', '바닷가 절벽 위의 19세기 바실리카로, 알제만이 내려다보입니다.', 'The 19th-century basilica on a clifftop over the sea, looking across the Bay of Algiers.', 'Notre-Dame d’Afrique', 45, 60),
          H('알제 대모스크 (자마 엘 자자이르)', 'Great Mosque of Algiers (Djamaa El Djazaïr)', '높이 265m의 세계에서 가장 높은 미너렛이 선 대모스크입니다.', 'The great mosque with the world’s tallest minaret, 265 m high.', 'Djamaa El Djazaïr', 60, 90,
            n='긴 옷으로 팔다리를 가리고, 여성은 머리도 가립니다.|Cover arms and legs, and women cover their hair.'),
          H('함마 시험 정원', 'Jardin d’Essai du Hamma', '1832년 문을 연 바닷가 식물원으로, 야자수 길과 프랑스식 정원이 있습니다.', 'The seaside botanical garden opened in 1832, with palm avenues and a French formal garden.', 'Jardin d’Essai du Hamma', 60, 90),
          H('그랑드 포스트', 'Grande Poste d’Alger', '1910년 지은 네오무어 양식의 하얀 옛 중앙우체국으로, 지금은 우편 박물관입니다.', 'The white neo-Moorish former main post office of 1910, now a postal museum.', 'Grande Poste Alger', 20, 30),
          H('바르도 국립 박물관', 'Bardo National Museum', '오스만 시대 저택에 선사 시대와 민속 유물을 전시한 박물관입니다.', 'A museum of prehistory and ethnography in an Ottoman-era villa.', 'Musée national du Bardo Alger', 60, 90),
          H('티파자', 'Tipaza', '바다를 따라 로마 시대 극장·바실리카·묘지가 남은 세계유산 유적으로, 근처에 마우레타니아 왕릉이 있습니다.', 'The World Heritage Roman ruins of theatre, basilicas and cemeteries along the sea, near the Royal Mausoleum of Mauretania.', 'Tipasa archaeological park', 240, 300, group=DAY,
            n='알제에서 서쪽으로 차로 약 1시간 30분입니다.|About 1 hr 30 west of Algiers by car.'),
      ],
      hubs="    air: [['Houari Boumediene (ALG)', '우아리 부메디엔 공항 (ALG)', '시내까지 차로 약 30분|about 30 min to the city by car']],\n    rail: [['Alger Agha', '알제 아가역', '오랑·콘스탄틴행|to Oran and Constantine']],\n",
      itinerary=[1, 6, 2, 5, 3, 4, 7, 8],
      season='봄(3~5월)과 가을(9~11월)이 좋습니다. 여름은 덥고 습하고, 겨울엔 비가 잦습니다. 라마단 기간엔 낮에 식당이 문을 닫습니다.|Spring (March–May) and autumn (September–November) are best; summer is hot and humid and winter rainy. Restaurants close by day during Ramadan.',
      stay=[('알제 중심가 (디두슈 무라드 거리)', 'Central Algiers (Rue Didouche Mourad)', 'Rue Didouche Mourad Alger', FIRST, '그랑드 포스트와 카스바가 가깝고 지하철이 다닙니다.|Close to the Grande Poste and the Casbah, on the metro.')],
      routes=[r('paris', 'algiers', 'flight', 140), r('istanbul', 'algiers', 'flight', 210), r('rome', 'algiers', 'flight', 115), r('tunis', 'algiers', 'flight', 75), r('cairo', 'algiers', 'flight', 270), r('barcelona', 'algiers', 'flight', 80)],
      transit=dict(modes=['metro', 'tram', 'bus', 'taxi', 'walk'], ko='지하철 1호선과 트램, 언덕을 잇는 케이블카, 택시로 다닙니다. 카스바는 걸어서 봅니다.', en='Use metro line 1, the tram, the hillside cable cars and taxis; explore the Casbah on foot.')),
    C(id='oran', after='algiers', ko='오랑', en='Oran', native='وهران · Wahrān', lat=35.6969, lng=-0.6331,
      blurb=['알제리 서부의 항구 도시로, 라이 음악의 고향입니다. 무르자조산 꼭대기의 산타크루즈 요새에서 항구와 시내가 내려다보입니다.',
             'The port city of western Algeria and home of raï music—the Santa Cruz fort atop Mount Murdjadjo looks down over the harbour and city.'],
      highlights=[
          H('산타크루즈 요새와 예배당', 'Santa Cruz Fort & Chapel', '16세기 스페인이 무르자조산 꼭대기에 지은 요새와 성모 예배당으로, 오랑만이 내려다보입니다.', 'The 16th-century Spanish fort and chapel atop Mount Murdjadjo, looking over the Bay of Oran.', 'Santa Cruz Fort Oran', 60, 90),
          H('11월 1일 광장', 'Place du 1er Novembre', '옛 시청과 극장이 둘러싼 오랑의 중앙 광장입니다.', 'Oran’s main square, framed by the old town hall and the theatre.', 'Place du 1er Novembre Oran', 30, 45),
          H('프롱 드 메르', 'Front de Mer', '항구를 내려다보는 절벽 위 해안 산책로입니다.', 'The clifftop seafront promenade above the harbour.', 'Front de Mer Oran', 45, 60),
          H('파샤 모스크', 'Pasha Mosque', '1796년 스페인 철수를 기념해 지은 오스만 양식 모스크입니다(외관).', 'The Ottoman-style mosque built in 1796 to mark the Spanish departure (exterior).', 'Mosquée du Pacha Oran', 15, 20),
          H('아흐메드 자바나 국립 박물관', 'Ahmed Zabana National Museum', '고고학·자연사·미술 전시를 갖춘 오랑의 박물관입니다.', 'Oran’s museum of archaeology, natural history and fine art.', 'Musée Ahmed Zabana Oran', 60, 90),
      ],
      hubs="    air: [['Ahmed Ben Bella (ORN)', '아흐메드 벤 벨라 공항 (ORN)', '시내까지 차로 약 20분|about 20 min to the city by car']],\n    rail: [['Oran station', '오랑역', '알제행|to Algiers']],\n",
      itinerary=[2, 4, 3, 5, 1],
      season='봄·가을이 좋고, 여름은 해변 철입니다.|Spring and autumn are best; summer is beach season.',
      stay=[('시내 중심 (11월 1일 광장 주변)', 'City centre (around Place du 1er Novembre)', 'Place du 1er Novembre Oran', FIRST, '광장과 해안 산책로가 걸어서 닿습니다.|The square and the seafront are within walking distance.')],
      routes=[r('algiers', 'oran', 'train', 240), r('paris', 'oran', 'flight', 135), r('barcelona', 'oran', 'flight', 80)],
      transit=dict(modes=['tram', 'bus', 'taxi', 'walk'], ko='트램과 택시로 다니고, 산타크루즈 요새는 택시로 오릅니다.', en='Use the tram and taxis; take a taxi up to the Santa Cruz fort.')),
    C(id='constantine', after='oran', ko='콘스탄틴', en='Constantine', native='قسنطينة · Qusanṭīna', lat=36.3650, lng=6.6147,
      blurb=['깊은 루멜 협곡 위 바위 고원에 세운 ‘다리의 도시’. 협곡을 가로지르는 현수교와 아흐메드 베이 궁전을 보고, 로마 유적 제밀라·팀가드에 다녀옵니다.',
             'The ‘city of bridges’ on a rock plateau above the deep Rhumel gorge—cross its suspension bridges, see the Palace of Ahmed Bey and visit the Roman ruins of Djémila and Timgad.'],
      highlights=[
          H('시디 음시드 다리', 'Sidi M’Cid Bridge', '1912년 루멜 협곡 위 약 175m 높이에 놓은 현수교로, 아찔한 협곡이 내려다보입니다.', 'The 1912 suspension bridge about 175 m above the Rhumel gorge, with a dizzying view down.', 'Sidi M’Cid Bridge', 30, 45),
          H('아흐메드 베이 궁전', 'Palace of Ahmed Bey', '19세기 초 마지막 콘스탄틴 총독이 지은 궁전으로, 타일과 정원이 아름답습니다.', 'The early 19th-century palace of Constantine’s last bey, with beautiful tiles and gardens.', 'Palais Ahmed Bey Constantine', 60, 90),
          H('에미르 압델카데르 모스크', 'Emir Abdelkader Mosque', '1994년 완공한 거대한 모스크로, 두 미너렛이 시내 어디서나 보입니다.', 'The vast mosque completed in 1994, its twin minarets visible across the city.', 'Mosquée Émir Abdelkader Constantine', 30, 45),
          H('전몰자 기념비', 'Monument aux Morts', '협곡 위 언덕에 선 개선문 모양 기념비로, 다리와 시내가 내려다보이는 전망지입니다.', 'The triumphal-arch memorial on a hill above the gorge, a lookout over the bridges and city.', 'Monument aux Morts Constantine', 30, 45),
          H('제밀라', 'Djémila', '산속 능선에 포룸·신전·개선문이 남은 로마 도시 유적으로, 세계유산입니다.', 'The Roman town of forums, temples and a triumphal arch on a mountain ridge—a World Heritage site.', 'Djémila', 180, 240, group=DAY,
            n='콘스탄틴에서 차로 약 1시간 30분~2시간입니다.|About 1 hr 30–2 hrs by car from Constantine.'),
          H('팀가드', 'Timgad', '트라야누스 황제가 세운 바둑판 모양 로마 군사 식민 도시 유적으로, 세계유산입니다.', 'The grid-planned Roman military colony founded by Emperor Trajan—a World Heritage site.', 'Timgad', 180, 240, group=DAY,
            n='콘스탄틴에서 차로 2시간 30분 안팎입니다.|About 2 hrs 30 by car from Constantine.'),
      ],
      hubs="    air: [['Mohamed Boudiaf (CZL)', '모하메드 부디아프 공항 (CZL)', '시내까지 차로 약 20~30분|about 20–30 min to the city by car']],\n    rail: [['Constantine station', '콘스탄틴역', '알제행|to Algiers']],\n",
      itinerary=[1, 4, 2, 3, 5, 6],
      season='봄·가을이 좋습니다. 고원이라 겨울은 춥고 눈이 오기도 합니다.|Spring and autumn are best; on the plateau, winters are cold and can bring snow.',
      stay=[('시내 중심', 'City centre', 'Constantine centre ville', FIRST, '다리와 궁전이 걸어서 닿습니다. 유적은 차를 빌리거나 기사를 구해 다녀옵니다.|The bridges and palace on foot; hire a car or driver for the ruins.')],
      routes=[r('algiers', 'constantine', 'flight', 60), r('algiers', 'constantine', 'train', 360), r('paris', 'constantine', 'flight', 160)],
      transit=dict(modes=['tram', 'taxi', 'walk'], ko='시내는 걷거나 트램·택시로, 협곡을 건너는 케이블카도 있습니다.', en='Walk the centre or use the tram and taxis; a cable car crosses the gorge.')),
    C(id='ghardaia', after='constantine', ko='가르다이아', en='Ghardaïa', native='غرداية · Ghardaïa', lat=32.4900, lng=3.6730,
      blurb=['사하라 북쪽 므자브 계곡의 오아시스 도시. 11세기부터 이바드파 공동체가 언덕 위에 쌓아 올린 다섯 요새 마을이 세계유산으로, 피라미드 같은 미너렛과 흙빛 집들이 독특합니다.',
             'The oasis town of the M’zab Valley on the northern Sahara—the five hilltop ksour built by the Ibadi community since the 11th century are a World Heritage site, with pyramid-like minarets and earth-coloured houses.'],
      highlights=[
          H('가르다이아 구시가와 시장 광장', 'Old Ghardaïa & market square', '언덕 꼭대기 모스크를 중심으로 집들이 동심원처럼 쌓인 옛 마을로, 아래 광장에서 양탄자 시장이 열립니다.', 'The old town of houses stacked in rings around its hilltop mosque, with a carpet market on the square below.', 'Ghardaïa market square', 90, 120,
            n='공동체 규칙상 현지 가이드와 함께 둘러봅니다.|By community rule, visit with a local guide.'),
          H('베니 이스겐', 'Beni Isguen', '므자브 계곡에서 가장 보수적인 성스러운 마을로, 해 질 녘 경매 시장이 유명합니다.', 'The most traditional, sacred ksar of the valley, known for its sunset auction market.', 'Beni Isguen', 90, 120,
            n='공식 가이드와만 들어갈 수 있고 사람 사진은 찍지 않습니다.|Entry with an official guide only; don’t photograph people.'),
          H('멜리카', 'Melika', '가르다이아 맞은편 언덕 위의 마을로, 하얀 묘지와 계곡 전망이 있습니다.', 'The hilltop ksar opposite Ghardaïa, with a white cemetery and views over the valley.', 'Melika Ghardaïa', 45, 60),
          H('엘 아테프', 'El Atteuf', '므자브 계곡에서 가장 오래된 마을로, 르코르뷔지에가 감탄했다는 시디 브라힘 모스크가 있습니다.', 'The oldest ksar in the valley, home to the Sidi Brahim mosque admired by Le Corbusier.', 'El Atteuf', 60, 90),
      ],
      hubs="    air: [['Noumérat – Moufdi Zakaria (GHA)', '누메라트 공항 (GHA)', '시내까지 차로 약 20분|about 20 min to town by car']],\n",
      itinerary=[1, 3, 2, 4],
      season='10~4월이 좋습니다. 여름 낮은 45℃에 이르고, 겨울밤은 쌀쌀합니다.|October–April is best; summer days reach 45 °C, and winter nights are chilly.',
      stay=[('가르다이아 시내', 'Ghardaïa town', 'Ghardaïa', FIRST, '시장 광장과 가이드 사무소가 가깝습니다.|Close to the market square and the guide offices.')],
      routes=[r('algiers', 'ghardaia', 'flight', 75)],
      transit=dict(modes=['taxi', 'walk'], ko='마을 사이는 택시로, 마을 안은 가이드와 걸어서 다닙니다.', en='Take taxis between the ksour and walk within them with a guide.')),
]

DZ_ORDER = [('알제와 서부', 'Algiers & the west', ['algiers', 'oran']), ('동부', 'The east', ['constantine']), ('사하라', 'The Sahara', ['ghardaia'])]
TRIPS = {'algiers': [('티파자|Tipaza', 8)], 'constantine': [('제밀라|Djémila', 5), ('팀가드|Timgad', 6)]}


def setup():
    k = rd('countries.ts')
    if "id: 'dz'," not in k:
        i = k.rindex('\n]\n\nexport function getCountry')
        k = k[:i + 1] + COUNTRY + k[i + 1:]
        wr('countries.ts', k)
    for f, block, anchor in [('essentials.ts', ESSENTIALS, '\n  xc: {'), ('transit.ts', TRANSIT, '\n  gi: {')]:
        s = rd(f)
        if '\n  dz: {' not in s:
            i = s.index(anchor)
            wr(f, s[:i + 1] + block + s[i + 1:])
    m = rd('countryIsoMap.ts')
    if "  dz: '012'," not in m:
        wr('countryIsoMap.ts', m.replace("  kw: '414',\n", "  kw: '414',\n  dz: '012',\n", 1))
    p = '../src/components/TravelBanNotice.tsx'
    s = open(p).read()
    if '\n  dz: {' not in s:
        i = s.index("  // 0404.go.kr notice of 2026-08-13")
        open(p, 'w').write(s[:i] + NOTICE + s[i:])


def finish():
    ids = [c['id'] for c in CITIES]
    k = rd('countries.ts')
    old = "cityIds: ['kuwait-city', " + ', '.join(f"'{x}'" for x in ids) + "],"
    assert old in k, 'kuwait list'
    k = k.replace(old, "cityIds: ['kuwait-city'],")
    order = [x for g in DZ_ORDER for x in g[2]]
    body = ("cityIds: [" + ', '.join(f"'{x}'" for x in order) + "],\n    cityGroups: [\n"
            + ''.join(f"      {{ title: {{ ko: '{ko}', en: '{en}' }}, cityIds: [{', '.join(repr(x) for x in g)}] }},\n" for ko, en, g in DZ_ORDER) + '    ],')
    i = k.index("    id: 'dz',")
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
