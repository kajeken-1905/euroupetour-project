#!/usr/bin/env python3
"""Tunisia (2026-11-08), second North Africa country. Practical info and alerts from the Korean Foreign Ministry page
(0404.go.kr/ntnSafetyInfo/233/detail): level 1 in Tunis, Bizerte, Nabeul, Sousse, Monastir, Mahdia, Sfax and Djerba,
level 2 elsewhere, level 3 along the Algerian and Libyan borders and the desert south of Ksar Ghilane; notices of
2026-10-06 (refrain from visiting Djerba) and 2026-10-23 (protests). User decisions: Djerba swapped for Monastir &
Mahdia; Kairouan (level 2) kept with the notice. Cities: Tunis, Sousse, Monastir, Kairouan. Run once."""
import add_daytrip_places3 as T
from add_daytrip_places import rd, wr
from add_slovakia_cities import H

DAY = ('근교 당일치기', 'Day trip')
RC = 'routes-central.ts'
R_AFTER = r"^  r\('madrid', 'casablanca', 'flight', 95\),\n"
COMMON = dict(country='tn', group_title=None, hubs_file='hubs-central.ts', hubs_before='  seville: {\n', itin_file='itinerary-iberia.ts',
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
    id: 'tn',
    region: 'mena',
    name: { ko: '튀니지', en: 'Tunisia' },
    nativeName: 'تونس · Tunisie',
    flagImage: '/flags/tn.svg',
    landmarkImage: '/landmarks/landmark-tn.jpg',
    flag: '🇹🇳',
    blurb: {
      ko: '시칠리아 건너편 지중해의 나라. 카르타고와 로마 원형경기장, 이슬람 성지 카이루안, 흰 벽에 파란 문의 시디 부 사이드가 있습니다.',
      en: 'The Mediterranean country across from Sicily—Carthage and a Roman amphitheatre, the holy city of Kairouan, and white-and-blue Sidi Bou Said.',
    },
    facts: {
      population: { ko: '약 1,197만 명 (2024년 인구조사)', en: 'Approx. 11.97 million (2024 census)' },
      area: { ko: '약 16만 3,610 km²', en: 'Approx. 163,610 km²' },
      capital: { ko: '튀니스 (Tunis)', en: 'Tunis' },
      currency: { ko: '튀니지 디나르 (TND, DT)', en: 'Tunisian dinar (TND, DT)' },
    },
    currencyCode: 'TND',
    currencySymbol: 'DT',
    schengen: false,
    flagColors: {
      primary: '#E70013',
      secondary: '#FFFFFF',
      accent: '#E70013',
      background: '#E8F0FA',
      text: '#0B2A4A',
    },
    cityIds: [],
  },
"""

ESSENTIALS = """  tn: {
    // Korean Foreign Ministry travel-safety page for Tunisia (0404.go.kr/ntnSafetyInfo/233/detail), 2026-11.
    emergency: [num('197', '경찰(범죄 신고)', 'Police'), num('190', '응급 의료', 'Ambulance'), num('198', '소방', 'Fire')],
    embassy: {
      name: T('주튀니지 대한민국 대사관', 'Korean Embassy in Tunisia'),
      address: 'Immeuble Blue Square, Avenue de la Bourse, Les Jardins du Lac 2, 1053 Tunis',
      phone: '+216-71-198-595',
      afterHours: '+216-99-567-040',
      source: 'https://www.0404.go.kr/ntnSafetyInfo/233/detail',
    },
    power: T('230V · 50Hz, C·E형 콘센트. 한국 플러그를 대부분 그대로 꽂을 수 있습니다.', '230V, 50Hz, type C/E sockets. Korean plugs usually fit.'),
    tipping: T('식당에선 5~10% 정도를 두는 것이 관례입니다.', 'Around 5–10% is customary in restaurants.'),
    water: WATER_BOTTLED,
    shops: T('수크(시장)에선 값을 흥정합니다. 디나르는 나라 밖으로 가지고 나갈 수 없는 돈이라 출국 전에 다시 바꿔야 합니다. 외화는 입국 때 5,000디나르어치가 넘으면 신고해야 하고, 출국 때는 신고한 만큼만 가지고 나갈 수 있습니다.', 'Bargain in the souks. The dinar can’t be taken out of the country, so change it back before you leave. Declare foreign currency worth over 5,000 dinars on arrival; you can only take out what you declared.'),
    toilets: TOILETS_MIXED,
    time: T('UTC+1, 서머타임 없음. 한국보다 8시간 늦습니다.', 'UTC+1 with no daylight saving: 8 hours behind Korea.'),
    safety: T('외교부 여행경보: 튀니스·수스·모나스티르·마흐디아 등 해안 지역은 1단계(여행유의), 카이루안 등 그 밖의 지역은 2단계(여행자제), 알제리·리비아 접경과 크사르 길란 이남 사막은 3단계(출국권고)입니다. 2026년 10월 시위가 격화돼 신변 안전 유의 공지가 나와 있습니다. 메디나와 하비브 부르기바 거리에선 소매치기를 조심하세요.', 'Korean travel alert: level 1 on the coast (Tunis, Sousse, Monastir, Mahdia and more), level 2 elsewhere including Kairouan, level 3 along the Algerian and Libyan borders and in the desert south of Ksar Ghilane. A personal-safety notice was issued in October 2026 as protests intensified. Watch for pickpockets in the medina and on Avenue Habib Bourguiba.'),
    entry: T('한국 여권은 90일까지 비자 없이 머물 수 있습니다(외교부: 협정상 30일이지만 튀니지 이민법에 따라 90일).', 'Korean passports can stay up to 90 days visa-free (Korean Foreign Ministry: 30 days by treaty, 90 under Tunisian immigration law).'),
    telecom: T('주요 통신사는 Ooredoo·Orange·Tunisie Telecom입니다. 유럽 로밍 요금제에 포함되지 않는 경우가 많아 공항에서 현지 유심을 사는 편이 쌉니다.', 'Main operators: Ooredoo, Orange and Tunisie Telecom. European roaming bundles rarely include Tunisia, so a local SIM from the airport is usually cheaper.'),
  },
"""

TRANSIT = """  tn: {
    summary: {
      ko: '우측통행. 튀니스와 해안 도시는 국철(SNCFT)과 사헬 지역 전철(메트로 뒤 사헬)로, 그 밖은 합승 택시 ‘루아지’로 다닙니다.',
      en: 'Drive on the right. SNCFT trains and the Sahel metro link Tunis and the coast; shared louage taxis cover the rest.',
    },
    drivingSide: 'right',
    longDistance: {
      ko: '이탈리아 팔레르모·제노바·치비타베키아와 프랑스 마르세유에서 튀니스(라 굴레트) 항까지 페리가 다닙니다. 수스–카이루안은 루아지로 약 1시간입니다.',
      en: 'Ferries run to Tunis (La Goulette) from Palermo, Genoa and Civitavecchia in Italy and from Marseille. Sousse to Kairouan is about an hour by louage.',
    },
    paymentTip: {
      ko: '루아지는 다 차면 출발하고 요금은 현금으로 냅니다. 시내 택시는 미터기를 켜 달라고 하세요.',
      en: 'Louages leave when full and take cash; ask city taxis to use the meter.',
    },
    apps: [],
  },
"""

NOTICE = """  // 0404.go.kr Tunisia page: alert levels (last adjusted 2023-03-07) and notices of 2026-10-06 and 2026-10-23.
  tn: {
    icon: '⚠️',
    title: { ko: '외교부 여행경보 · 지역별 1~3단계', en: 'Korean travel alert · levels 1–3 by region' },
    lines: [
      {
        ko: '튀니스·비제르트·나불·수스·모나스티르·마흐디아·스팍스·제르바는 1단계(여행유의), 카이루안 등 그 밖의 지역은 2단계(여행자제), 알제리·리비아 접경 지역과 크사르 길란 이남 사막은 3단계(출국권고)입니다.',
        en: 'Tunis, Bizerte, Nabeul, Sousse, Monastir, Mahdia, Sfax and Djerba are level 1 (exercise caution); elsewhere, including Kairouan, is level 2 (refrain from travel); the Algerian and Libyan border areas and the desert south of Ksar Ghilane are level 3 (leave the country).',
      },
      {
        ko: '외교부는 2026년 10월 6일 제르바섬 방문 자제를, 10월 23일 시위 격화에 따른 신변 안전 유의를 공지했습니다. 출발 전 최신 공지를 꼭 확인하세요.',
        en: 'On 6 October 2026 the ministry advised against visiting Djerba, and on 23 October it warned of intensifying protests. Check the latest notices before you go.',
      },
    ],
    link: 'https://www.0404.go.kr/ntnSafetyInfo/233/detail',
  },
"""

CITIES = [
    C(id='tunis', after='casablanca', ko='튀니스', en='Tunis', native='تونس · Tunis', lat=36.7998, lng=10.1706,
      blurb=['튀니지의 수도. 세계유산 메디나와 세계 최대급 로마 모자이크를 모은 바르도 박물관이 있고, 근교 열차로 카르타고 유적과 흰 벽·파란 문의 시디 부 사이드에 갑니다.',
             'Tunisia’s capital—a World Heritage medina and the Bardo, one of the world’s great collections of Roman mosaics, with a suburban train out to the ruins of Carthage and blue-and-white Sidi Bou Said.'],
      highlights=[
          H('튀니스 메디나', 'Medina of Tunis', '수크와 모스크, 옛 저택이 얽힌 세계유산 구시가로, 바다의 문(밥 엘 바르)으로 들어갑니다.', 'The World Heritage old town of souks, mosques and old mansions, entered through the Bab el Bhar gate.', 'Medina of Tunis', 120, 180),
          H('지투나 모스크', 'Zitouna Mosque', '메디나 한가운데의 9세기 대모스크로, 무슬림이 아니면 정해진 시간에 안뜰만 들여다봅니다.', 'The 9th-century great mosque at the heart of the medina; non-Muslims may look into the courtyard at set hours.', 'Zitouna Mosque', 15, 20),
          H('바르도 국립 박물관', 'Bardo National Museum', '옛 왕궁에 로마 시대 모자이크를 세계 최대급으로 모은 박물관입니다. 2023년 9월 다시 문을 열었고 일부 방은 아직 공사 중입니다.', 'One of the world’s largest collections of Roman mosaics, in a former palace; reopened in September 2023, with some rooms still under renovation.', 'Musée national du Bardo', 120, 150, c='mon'),
          H('하비브 부르기바 거리', 'Avenue Habib Bourguiba', '시계탑에서 메디나 입구까지 이어지는 가로수 대로로, 카페와 시립 극장이 있습니다.', 'The tree-lined boulevard from the clock tower to the medina gate, with cafés and the municipal theatre.', 'Avenue Habib Bourguiba Tunis', 30, 45),
          H('카르타고 유적', 'Carthage', '로마에 맞섰던 고대 도시의 유적으로, 안토니누스 욕장과 비르사 언덕이 세계유산입니다.', 'The ruins of Rome’s great rival, with the World Heritage Antonine Baths and Byrsa Hill.', 'Antonine Baths Carthage', 180, 240, group=DAY,
            n='튀니스에서 TGM 근교 열차로 약 25분입니다. 유적이 흩어져 있어 공통 입장권으로 여러 곳을 봅니다.|About 25 min from Tunis on the TGM train; the sites are spread out and share one ticket.'),
          H('시디 부 사이드', 'Sidi Bou Said', '흰 벽에 파란 문과 창을 단 언덕 마을로, 카페 데 나트에서 바다를 내려다봅니다.', 'The hillside village of white walls and blue doors—look over the sea from the Café des Nattes.', 'Sidi Bou Said', 120, 180, group=DAY,
            n='튀니스에서 TGM 근교 열차로 약 35분입니다.|About 35 min from Tunis on the TGM train.'),
      ],
      hubs="    air: [['Tunis–Carthage (TUN)', '튀니스 카르타고 공항 (TUN)']],\n    rail: [['Tunis Ville', '튀니스 역 (SNCFT)'], ['Tunis Marine', '튀니스 마린역', '카르타고·시디 부 사이드행 TGM|TGM to Carthage and Sidi Bou Said']],\n    port: [['La Goulette', '라 굴레트 항', '이탈리아·프랑스행 페리|ferries to Italy and France']],\n",
      itinerary=[4, 1, 2, 3, 5, 6],
      season='3~5월과 9~11월이 좋고, 7~8월은 덥습니다. 라마단 기간엔 낮에 문을 닫는 식당이 많습니다.|March–May and September–November are best; July and August are hot. During Ramadan many restaurants close by day.',
      stay=[('메디나 근처 시내', 'City centre by the medina', 'Avenue Habib Bourguiba Tunis', FIRST, '메디나와 대로가 걸어서 닿고 TGM 역이 가깝습니다.|The medina and boulevard on foot, near the TGM station.'),
            ('시디 부 사이드', 'Sidi Bou Said', 'Sidi Bou Said', '조용히 머물기|For a quiet stay', '바다를 내려다보는 언덕 마을로, 시내까지 TGM으로 약 35분입니다.|The hillside village above the sea, about 35 min to the city by TGM.')],
      routes=[r('rome', 'tunis', 'flight', 80), r('paris', 'tunis', 'flight', 140), r('marseille', 'tunis', 'flight', 100),
              r('palermo', 'tunis', 'ferry', 600, "{ fb: '라 굴레트 항|La Goulette', n: '주로 야간 페리|mostly overnight' }")],
      transit=dict(modes=['walk', 'tram', 'train', 'taxi'], ko='메디나는 걸어서, 시내는 경전철(메트로 레제르)과 택시로, 카르타고·시디 부 사이드는 TGM 근교 열차로 갑니다.', en='Walk the medina, use the light rail (métro léger) and taxis in town, and the TGM suburban train to Carthage and Sidi Bou Said.')),
    C(id='sousse', after='tunis', ko='수스', en='Sousse', native='سوسة · Sousse', lat=35.8256, lng=10.6411,
      blurb=['사헬 해안의 항구 도시. 성벽 메디나와 이슬람 요새 리바트가 세계유산이고, 로마 원형경기장이 있는 엘젬에 다녀오기 좋습니다.',
             'A port on the Sahel coast—its walled medina and ribat fortress are World Heritage, and it is the base for El Jem’s Roman amphitheatre.'],
      highlights=[
          H('수스 메디나', 'Medina of Sousse', '9세기 성벽에 둘러싸인 세계유산 구시가로, 수크가 이어집니다.', 'The World Heritage old town within 9th-century walls, full of souks.', 'Medina of Sousse', 90, 120),
          H('리바트', 'Ribat of Sousse', '8~9세기 이슬람 수도원 요새로, 망루에 오르면 메디나와 바다가 보입니다.', 'The 8th–9th-century fortified Islamic monastery—climb its watchtower for views over the medina and sea.', 'Ribat of Sousse', 30, 45),
          H('대모스크', 'Great Mosque of Sousse', '851년에 세운 요새 같은 모스크로, 무슬림이 아니면 안뜰까지 들어갑니다.', 'The fortress-like mosque built in 851; non-Muslims may enter the courtyard.', 'Great Mosque of Sousse', 20, 30),
          H('수스 고고학 박물관', 'Sousse Archaeological Museum', '메디나 꼭대기 카스바에 로마 모자이크를 전시합니다.', 'Roman mosaics displayed in the kasbah at the top of the medina.', 'Musée archéologique de Sousse', 60, 90, c='mon'),
          H('엘젬 원형경기장', 'El Jem Amphitheatre', '3세기에 지은 약 3만 5천 석 규모의 로마 원형경기장으로, 세계유산입니다.', 'The 3rd-century Roman amphitheatre for about 35,000 spectators, a World Heritage site.', 'Amphitheatre of El Jem', 120, 150, group=DAY,
            n='수스에서 기차로 약 1시간입니다.|About 1 hr by train from Sousse.'),
      ],
      hubs="    air: [['Monastir Habib Bourguiba (MIR)', '모나스티르 공항 (MIR)', '모나스티르|Monastir'], ['Enfidha–Hammamet (NBE)', '엔피다 하마메트 공항 (NBE)']],\n    rail: [['Sousse Voyageurs', '수스역'], ['Sousse Bab Jedid', '수스 밥 즈디드역', '모나스티르·마흐디아행 사헬 전철|Sahel metro to Monastir and Mahdia']],\n",
      itinerary=[1, 3, 2, 4, 5],
      season='5~10월이 해변 철이고 한여름은 덥습니다.|May–October is beach season; midsummer is hot.',
      stay=[('메디나 근처 시내', 'Centre by the medina', 'Medina of Sousse', FIRST, '메디나와 항구, 역이 걸어서 닿습니다.|The medina, port and station on foot.')],
      routes=[r('tunis', 'sousse', 'train', 135, "{ fa: '튀니스역|Tunis Ville' }")],
      transit=dict(modes=['walk', 'train', 'taxi'], ko='시내는 걸어서, 모나스티르·마흐디아는 사헬 전철로, 카이루안은 루아지로 갑니다.', en='Walk the town; take the Sahel metro to Monastir and Mahdia and a louage to Kairouan.')),
    C(id='monastir', after='sousse', ko='모나스티르·마흐디아', en='Monastir & Mahdia', native='المنستير · Monastir', lat=35.7643, lng=10.8113,
      blurb=['사헬 해안의 리바트 도시와 이웃 어항 마흐디아. 바닷가 요새와 건국 대통령 부르기바의 영묘, 고운 모래 해변이 있습니다.',
             'The ribat town of the Sahel coast and its neighbouring fishing port Mahdia—seaside fortresses, the mausoleum of founding president Bourguiba and fine sandy beaches.'],
      highlights=[
          H('모나스티르 리바트', 'Ribat of Monastir', '바닷가에 선 8세기 이슬람 요새로, 성벽과 망루에서 항구가 내려다보입니다.', 'The 8th-century Islamic seaside fortress, with views over the harbour from its walls and tower.', 'Ribat of Monastir', 45, 60),
          H('부르기바 영묘', 'Bourguiba Mausoleum', '튀니지 초대 대통령 하비브 부르기바가 잠든 금빛 돔의 영묘입니다.', 'The gold-domed mausoleum of Habib Bourguiba, Tunisia’s first president.', 'Mausoleum of Habib Bourguiba', 30, 45),
          H('모나스티르 해변과 마리나', 'Monastir beaches & marina', '리바트 옆 해변과 요트 마리나를 따라 산책로가 이어집니다.', 'Beaches beside the ribat and a promenade along the yacht marina.', 'Marina de Monastir', 60, 120),
          H('마흐디아 구시가', 'Mahdia old town', '10세기 파티마 왕조 수도였던 곶의 하얀 구시가로, 성문 스키파 엘 카흘라와 바닷가 묘지가 있습니다.', 'The white old town on a headland, once the 10th-century Fatimid capital, with the Skifa el Kahla gate and a seaside cemetery.', 'Skifa el Kahla Mahdia', 120, 180, group=DAY,
            n='모나스티르에서 사헬 전철로 약 1시간입니다.|About 1 hr from Monastir on the Sahel metro.'),
      ],
      hubs="    air: [['Monastir Habib Bourguiba (MIR)', '모나스티르 하비브 부르기바 공항 (MIR)']],\n    rail: [['Monastir', '모나스티르역', '수스·마흐디아행 사헬 전철|Sahel metro to Sousse and Mahdia']],\n",
      itinerary=[1, 2, 3, 4],
      season='5~10월이 해변 철입니다. 한여름엔 휴양객으로 붐빕니다.|May–October is beach season; busy with holidaymakers in midsummer.',
      stay=[('리바트 주변', 'Around the ribat', 'Ribat of Monastir', FIRST, '리바트와 영묘, 해변이 걸어서 닿고 공항이 가깝습니다.|The ribat, mausoleum and beach on foot, close to the airport.')],
      routes=[r('sousse', 'monastir', 'train', 30, "{ n: '사헬 전철|Sahel metro' }")],
      transit=dict(modes=['walk', 'train', 'taxi'], ko='시내는 걸어서, 수스·마흐디아는 사헬 전철로 갑니다.', en='Walk the town; take the Sahel metro to Sousse and Mahdia.')),
    C(id='kairouan', after='monastir', ko='카이루안', en='Kairouan', native='القيروان · Kairouan', lat=35.6781, lng=10.0963,
      blurb=['북아프리카 이슬람의 첫 성지로 꼽히는 세계유산 도시. 7세기 대모스크와 아글라브 왕조의 저수조, 대추야자 과자 마크루드가 유명합니다. 외교부 여행경보 2단계(여행자제) 지역입니다.',
             'A World Heritage city counted among the first holy places of Islam in North Africa—the 7th-century Great Mosque, the Aghlabid basins and makroud date pastries. A level-2 (refrain from travel) area on the Korean travel alert.'],
      highlights=[
          H('카이루안 대모스크', 'Great Mosque of Kairouan', '670년 처음 세운 북아프리카 최고(最古)급 모스크로, 무슬림이 아니면 안뜰까지 들어갑니다.', 'Founded in 670, one of North Africa’s oldest mosques; non-Muslims may enter the courtyard.', 'Great Mosque of Kairouan', 45, 60,
            n='금요일과 기도 시간엔 들어갈 수 없습니다. 어깨와 무릎을 가리세요.|Closed to visitors on Fridays and at prayer times; cover shoulders and knees.'),
          H('아글라브 저수조', 'Aghlabid Basins', '9세기에 만든 거대한 원형 저수조로, 도시에 물을 대던 시설입니다.', 'Vast 9th-century circular reservoirs that supplied the city with water.', 'Aghlabid Basins', 20, 30),
          H('이발사의 모스크', 'Mosque of the Barber', '예언자의 동반자 시디 사합의 영묘로, 타일과 회벽 조각이 아름답습니다.', 'The shrine of Sidi Sahab, a companion of the Prophet, with beautiful tiles and stucco.', 'Zaouia of Sidi Sahab', 30, 45),
          H('메디나와 마크루드', 'Medina & makroud', '성벽 메디나의 카펫 가게를 둘러보고, 대추야자를 넣은 과자 마크루드를 맛봅니다.', 'Browse carpet shops in the walled medina and taste makroud, the date-filled pastry.', 'Medina of Kairouan', 60, 90),
      ],
      hubs="    air: [['Monastir Habib Bourguiba (MIR)', '모나스티르 공항 (MIR)', '모나스티르|Monastir'], ['Enfidha–Hammamet (NBE)', '엔피다 하마메트 공항 (NBE)']],\n    bus: [['Kairouan louage station', '카이루안 루아지 정류장', '수스·튀니스행|to Sousse and Tunis']],\n",
      itinerary=[2, 1, 4, 3],
      season='봄·가을이 좋고 여름 낮은 40℃ 가까이 덥습니다.|Spring and autumn are best; summer days approach 40 °C.',
      stay=[('수스에서 다녀오기', 'Base in Sousse', 'Sousse', '거점에서 다녀오기|Day trip from a base', '수스에서 루아지로 약 1시간이라 당일로 많이 다녀옵니다.|About 1 hr by louage from Sousse, so most visit as a day trip.')],
      routes=[r('sousse', 'kairouan', 'bus', 60, "{ n: '루아지(합승 택시)|louage (shared taxi)' }")],
      transit=dict(modes=['walk', 'taxi'], ko='메디나와 대모스크는 걸어서 다닙니다.', en='Walk between the medina and the Great Mosque.')),
]

TN_ORDER = [('튀니스', 'Tunis', ['tunis']), ('사헬 해안', 'Sahel coast', ['sousse', 'monastir']), ('내륙', 'Inland', ['kairouan'])]
TRIPS = {'tunis': [('카르타고|Carthage', 5), ('시디 부 사이드|Sidi Bou Said', 6)], 'sousse': [('엘젬|El Jem', 5)], 'monastir': [('마흐디아|Mahdia', 4)]}


def setup():
    k = rd('countries.ts')
    if "id: 'tn'," not in k:
        i = k.rindex('\n]\n\nexport function getCountry')
        k = k[:i + 1] + COUNTRY + k[i + 1:]
        wr('countries.ts', k)
    for f, block, anchor in [('essentials.ts', ESSENTIALS, '\n  xc: {'), ('transit.ts', TRANSIT, '\n  gi: {')]:
        s = rd(f)
        if '\n  tn: {' not in s:
            i = s.index(anchor)
            wr(f, s[:i + 1] + block + s[i + 1:])
    m = rd('countryIsoMap.ts')
    if "  tn: '788'," not in m:
        wr('countryIsoMap.ts', m.replace("  ma: '504',\n", "  ma: '504',\n  tn: '788',\n", 1))
    p = '../src/components/TravelBanNotice.tsx'
    s = open(p).read()
    if '\n  tn: {' not in s:
        i = s.index("  // 0404.go.kr notice of 2026-08-13")
        open(p, 'w').write(s[:i] + NOTICE + s[i:])


def finish():
    ids = [c['id'] for c in CITIES]
    k = rd('countries.ts')
    old = "cityIds: ['marrakech', 'essaouira', 'merzouga', 'fez', 'chefchaouen', 'tangier', 'rabat', 'casablanca', " + ', '.join(f"'{x}'" for x in ids) + "],"
    assert old in k, 'morocco list'
    k = k.replace(old, "cityIds: ['marrakech', 'essaouira', 'merzouga', 'fez', 'chefchaouen', 'tangier', 'rabat', 'casablanca'],")
    order = [x for g in TN_ORDER for x in g[2]]
    body = ("cityIds: [" + ', '.join(f"'{x}'" for x in order) + "],\n    cityGroups: [\n"
            + ''.join(f"      {{ title: {{ ko: '{ko}', en: '{en}' }}, cityIds: [{', '.join(repr(x) for x in g)}] }},\n" for ko, en, g in TN_ORDER) + '    ],')
    i = k.index("    id: 'tn',")
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
