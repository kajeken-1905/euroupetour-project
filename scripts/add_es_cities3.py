#!/usr/bin/env python3
"""Spain 2nd pass new cities (2026-11-24, user picked all 16 candidates plus the Camino towns Astorga, Ponferrada, Sarria,
Santo Domingo de la Calzada and Pontevedra; Saint-Jean-Pied-de-Port was already in the app, see add_sjpdp_sights.py). Rail times from aggregators /
operators (web, 2026-11-24): Madrid–Murcia fastest ~2h45, Madrid–Vitoria fastest ~3h, Madrid–A Coruña ~3h30,
Bayonne–Saint-Jean-Pied-de-Port TER ~1h05, Barcelona–Cadaqués bus ~2h45, León–Astorga ~45 min, Astorga–Ponferrada
~1h10; Alicante–Murcia ~50 min and A Coruña–Lugo bus ~1h40 (Transitous); others rounded usual timings. Run once.
The Region of Murcia group is created after the run (scripts/es_murcia_group.py step inside main)."""
import re
import add_daytrip_places3 as T
from add_daytrip_places import rd, wr
from add_daytrip_places3 import trip
from add_slovakia_cities import H

DAY = ('근교 당일치기', 'Day trip')
FREE = '무료입니다.|Free.'
RC = 'routes-central.ts'
RA = r"^  r\('madrid', 'leon', .*\),\n"
REN = "      ta('renfe'),\n      ta('alsa'),\n"
ALSA = "      ta('alsa'),\n"
SNCF = "      ta('sncf'),\n"
VA = lambda h: rf"^  '{h}': v\(.*\),\n"
COMMON = dict(hubs_file='hubs-central.ts', hubs_before='  logrono: {\n', itin_file='itinerary-iberia.ts', itin_before='  logrono: ',
              visit_file='visit-iberia.ts', visit_after=VA('logrono-h5'), stay_before='  logrono: [', transit_before='  logrono: {', places=None)
FR = dict(hubs_file='hubs-west.ts', hubs_before='  reims: {\n', itin_file='itinerary-fr.ts', itin_before='  giverny: ',
          visit_file='visit-fr.ts', visit_after=VA('reims-h6'), stay_before='  reims: [', transit_before='  reims: {', places=None)


def C(**k):
    d = dict(FR if k.get('country') == 'fr' else COMMON)
    d.update(k)
    d.setdefault('country', 'es')
    d.setdefault('daytrips', [])
    return d


def R(a, b, mode, mins, opts=''):
    return f"  r('{a}', '{b}', '{mode}', {mins}{', { ' + opts + ' }' if opts else ''}),\n"


def ST(ko, en, q, tag, txt):
    return (ko, en, q, tag, txt)


FIRST = '처음 가는 여행에 추천|Best for a first visit'

CITIES = [
    # —— Region of Murcia ——
    C(id='murcia', group_title=None, after='alicante', ko='무르시아', en='Murcia', native='Murcia', lat=37.9861, lng=-1.1303,
      blurb=['세구라강 가의 무르시아 지방 주도로, 바로크 정면이 화려한 대성당과 19세기 사교 클럽 ‘레알 카지노’, 성주간 행렬 조각으로 유명한 살시요 박물관이 있습니다. 광장마다 타파스 바가 많습니다.',
             'The capital of the Region of Murcia on the River Segura, with a cathedral of dazzling Baroque façade, the 19th-century Real Casino club and the Salzillo Museum of Holy Week sculpture; its squares are full of tapas bars.'],
      highlights=[
          H('무르시아 대성당', 'Murcia Cathedral', '고딕 성당에 18세기 바로크 정면과 높은 종탑을 더한 대성당으로, 정면 조각이 스페인 바로크의 대표작으로 꼽힙니다.', 'A Gothic cathedral given an 18th-century Baroque façade and a tall bell tower; the façade is counted among the great works of Spanish Baroque.', 'Catedral de Murcia', 30, 45, b='no', n='성당은 무료이고 박물관·종탑은 유료입니다.|The cathedral is free; the museum and tower are ticketed.'),
          H('레알 카지노', 'Real Casino de Murcia', '1847년 문을 연 사교 클럽 건물로, 아랍풍 안뜰과 화려한 무도회장, 도서실을 둘러봅니다.', 'The gentlemen’s club opened in 1847, with a Moorish-style patio, an opulent ballroom and a library to tour.', 'Real Casino de Murcia', 30, 45),
          H('살시요 박물관', 'Museo Salzillo', '18세기 조각가 프란시스코 살시요가 만든 성주간 행렬 조각상과 수백 개 인형으로 된 성탄 구유를 전시합니다.', 'The museum of the 18th-century sculptor Francisco Salzillo, with his Holy Week processional figures and a nativity scene of hundreds of figures.', 'Museo Salzillo Murcia', 45, 60),
          H('플로레스 광장', 'Plaza de las Flores', '꽃집과 타파스 바가 모인 광장으로, 저녁이면 테라스가 사람으로 가득합니다.', 'A square of flower stalls and tapas bars whose terraces fill up in the evenings.', 'Plaza de las Flores Murcia', 30, 60, b='no', n=FREE),
          H('세구라 강변', 'Segura riverside', '구시가 남쪽 강을 따라 이어진 산책길로, 위험의 다리 등 옛 다리를 건너며 걷습니다.', 'The riverside walk south of the old town, crossing old bridges such as the Puente de los Peligros.', 'Puente de los Peligros Murcia', 30, 45, b='no', n=FREE),
      ],
      hubs="    air: [['Región de Murcia (RMU)', '무르시아 공항 (RMU)'], ['Alicante–Elche (ALC)', '알리칸테 공항 (ALC)', '알리칸테|Alicante']],\n    rail: [['Murcia del Carmen', '무르시아 델 카르멘역']],\n    bus: [['Estación de Autobuses de Murcia', '무르시아 버스터미널']],\n",
      itinerary=[1, 4, 2, 3, 5],
      season='봄 축제(성주간과 그 뒤 ‘봄 축제’) 때가 가장 활기차고, 한여름은 매우 덥습니다.|Holy Week and the spring fiestas that follow are the liveliest time; midsummer is very hot.',
      stay=[ST('대성당 주변', 'Around the cathedral', 'Plaza Cardenal Belluga Murcia', FIRST, '대성당과 카지노, 광장들이 걸어서 닿습니다. 역까지는 버스나 택시가 편합니다.|The cathedral, casino and squares on foot; take a bus or taxi to the station.')],
      routes=[(RC, RA, R('madrid', 'murcia', 'train', 165, "...R, n: '빠른 직행 기준|fastest direct trains'") + R('alicante', 'murcia', 'train', 50) + R('valencia', 'murcia', 'train', 165))],
      transit=dict(modes=['walk', 'bus', 'tram'], ko='구시가는 걸어서 다닙니다. 트램은 북쪽 신시가지로 갑니다.', en='Walk the old town; the tram serves the northern districts.'),
      apps=REN),
    C(id='cartagena', group_title=None, after='murcia', ko='카르타헤나', en='Cartagena', native='Cartagena', lat=37.6000, lng=-0.9819,
      blurb=['카르타고 사람들이 세운 지중해의 항구 도시로, 1988년에 발견된 로마 극장과 모더니즘 건물이 늘어선 중심가, 언덕 위 성과 군항의 요새들이 볼거리입니다.',
             'A Mediterranean port founded by the Carthaginians, with a Roman theatre rediscovered in 1988, a main street of Modernisme buildings, a hilltop castle and the forts of its naval harbour.'],
      highlights=[
          H('카르타헤나 로마 극장', 'Roman Theatre of Cartagena', '기원전 1세기 말의 로마 극장으로, 1988년 옛 성당 아래에서 발견됐습니다. 라파엘 모네오가 설계한 박물관을 지나 객석으로 나옵니다.', 'A Roman theatre of the late 1st century BC, found beneath an old cathedral in 1988; you reach the seating through a museum designed by Rafael Moneo.', 'Teatro Romano de Cartagena', 75, 90),
          H('콘셉시온 성과 전망 엘리베이터', 'Concepción Castle & panoramic lift', '항구를 내려다보는 언덕 위 성으로, 유리 엘리베이터로 오르면 시내와 군항이 한눈에 보입니다.', 'The hilltop castle above the harbour, reached by a glass panoramic lift, with views over the city and naval port.', 'Castillo de la Concepción Cartagena', 45, 60),
          H('국립 수중 고고학 박물관 (ARQUA)', 'ARQUA – National Museum of Underwater Archaeology', '항구 앞 박물관으로, 지중해 바닷속에서 건진 페니키아 난파선과 암포라를 전시합니다.', 'The harbourfront museum of finds raised from the Mediterranean, including a Phoenician shipwreck and amphorae.', 'Museo Nacional de Arqueología Subacuática ARQUA', 60, 90, c='mon'),
          H('마요르 거리와 모더니즘 건물', 'Calle Mayor & Modernisme buildings', '20세기 초 광산 붐 때 지은 모더니즘 저택과 카지노가 늘어선 보행자 중심가입니다.', 'The pedestrian main street lined with Modernisme mansions and a casino from the early-20th-century mining boom.', 'Calle Mayor Cartagena', 30, 45, b='no', n=FREE),
          H('카르타고 성벽 해설 센터', 'Muralla Púnica', '기원전 3세기 카르타고 사람들이 쌓은 성벽 유적 위에 지은 해설 센터입니다.', 'An interpretation centre built over a stretch of the 3rd-century BC Carthaginian city wall.', 'Muralla Púnica Cartagena', 30, 45),
      ],
      hubs="    air: [['Región de Murcia (RMU)', '무르시아 공항 (RMU)'], ['Alicante–Elche (ALC)', '알리칸테 공항 (ALC)', '알리칸테|Alicante']],\n    rail: [['Cartagena', '카르타헤나역']],\n    bus: [['Estación de Autobuses de Cartagena', '카르타헤나 버스터미널']],\n",
      itinerary=[4, 1, 5, 2, 3],
      season='봄·가을이 걷기 좋고, 9월엔 카르타고 사람과 로마 사람으로 분장하는 축제가 열립니다.|Spring and autumn are best for walking; in September the Carthaginians and Romans festival fills the streets.',
      stay=[ST('구시가와 항구', 'Old town & harbour', 'Calle Mayor Cartagena', FIRST, '로마 극장과 항구, 중심가가 모두 걸어서 닿습니다.|The Roman theatre, harbour and main street all on foot.')],
      routes=[(RC, RA, R('murcia', 'cartagena', 'train', 50) + R('alicante', 'cartagena', 'bus', 120))],
      transit=dict(modes=['walk', 'bus'], ko='구시가는 걸어서 다닙니다.', en='Walk the old town.'),
      apps=REN),
    # —— Basque Country ——
    C(id='vitoria-gasteiz', group_title='바스크 지방', after='san-sebastian', ko='비토리아가스테이스', en='Vitoria-Gasteiz', native='Vitoria-Gasteiz', lat=42.8467, lng=-2.6716,
      blurb=['바스크 지방 정부가 있는 도시로, 언덕 위 아몬드 모양의 중세 구시가와 복원 공사를 공개하는 산타 마리아 대성당, 도시를 둘러싼 녹지 고리로 유명합니다.',
             'The seat of the Basque government, known for its almond-shaped medieval old town on a hill, the Santa María Cathedral whose restoration is open to visitors, and the green ring of parks around the city.'],
      highlights=[
          H('산타 마리아 대성당', 'Santa María Cathedral', '복원 공사 현장을 안전모를 쓰고 둘러보는 ‘공사 중 개방’ 가이드 투어로 유명한 고딕 대성당입니다.', 'The Gothic cathedral famous for its “Open for Works” guided tours, which take visitors in hard hats through the restoration site.', 'Catedral de Santa María Vitoria', 60, 75, b='rec', n='가이드 투어로만 들어가며 미리 예약하는 것이 좋습니다.|Visits are by guided tour only; book ahead.'),
          H('비르헨 블랑카 광장', 'Plaza de la Virgen Blanca', '하얀 유리 발코니 집들이 둘러싼 중심 광장으로, 8월 축제가 시작되는 곳입니다.', 'The main square, ringed by houses with white glazed balconies, where the August fiestas begin.', 'Plaza de la Virgen Blanca Vitoria', 20, 30, b='no', n=FREE),
          H('중세 구시가', 'Medieval old town', '언덕을 따라 동심원처럼 골목이 이어진 아몬드 모양의 구시가로, 오르막엔 에스컬레이터가 있습니다.', 'The almond-shaped old town of concentric lanes on the hill, with outdoor escalators on the climbs.', 'Casco Medieval Vitoria-Gasteiz', 60, 90, b='no', n=FREE),
          H('아르티움 현대 미술관', 'Artium Museoa', '바스크와 스페인 현대 미술을 모은 미술관입니다.', 'The museum of Basque and Spanish contemporary art.', 'Artium Museoa Vitoria', 60, 90, c='mon'),
          H('비바트 (고고학·트럼프 카드 박물관)', 'BIBAT', '르네상스 궁전과 현대 건물을 이은 박물관으로, 고고학 유물과 세계의 트럼프 카드 컬렉션을 전시합니다.', 'A museum joining a Renaissance palace to a modern building, with archaeology and a collection of playing cards from around the world.', 'BIBAT Vitoria', 60, 75, c='mon'),
          H('살부루아 습지', 'Salburua wetlands', '도시를 둘러싼 녹지 고리의 습지 공원으로, 새를 관찰하며 걷기 좋습니다.', 'Wetland park on the city’s green ring, good for walks and birdwatching.', 'Salburua Vitoria', 60, 90, b='no', n=FREE),
      ],
      hubs="    air: [['Bilbao (BIO)', '빌바오 공항 (BIO)', '빌바오|Bilbao'], ['Vitoria (VIT)', '비토리아 공항 (VIT)', '운항편 적음|few flights']],\n    rail: [['Vitoria-Gasteiz', '비토리아가스테이스역']],\n    bus: [['Estación de Autobuses de Vitoria-Gasteiz', '비토리아 버스터미널']],\n",
      itinerary=[2, 3, 1, 5, 4, 6],
      season='7월 재즈 축제와 8월 초 비르헨 블랑카 축제 때가 가장 활기찹니다.|The July jazz festival and the Virgen Blanca fiestas in early August are the liveliest times.',
      stay=[ST('구시가 아래 중심가', 'Centre below the old town', 'Calle Dato Vitoria', FIRST, '광장과 구시가가 걸어서 닿고 기차역까지 걸어서 약 10분입니다.|The square and old town on foot, about 10 min’s walk from the station.')],
      routes=[(RC, RA, R('madrid', 'vitoria-gasteiz', 'train', 190, "...R, fa: CHAMARTIN, n: '빠른 직행 기준|fastest direct trains'") + R('bilbao', 'vitoria-gasteiz', 'bus', 60) + R('san-sebastian', 'vitoria-gasteiz', 'bus', 90))],
      transit=dict(modes=['walk', 'tram', 'bus'], ko='중심가는 걸어서 다니고, 트램이 시내를 가로지릅니다.', en='Walk the centre; the tram crosses the city.'),
      apps=REN),
    # —— Galicia ——
    C(id='a-coruna', group_title='갈리시아', after='santiago', ko='아코루냐', en='A Coruña', native='A Coruña', lat=43.3623, lng=-8.4115,
      blurb=['대서양으로 튀어나온 반도의 항구 도시로, 지금도 불을 밝히는 로마 등대 ‘헤라클레스의 탑’이 세계유산입니다. 유리 발코니 집들이 늘어선 항구와 긴 해변 산책로가 있습니다.',
             'A port on a peninsula jutting into the Atlantic, whose Roman lighthouse, the Tower of Hercules, still in use, is a World Heritage Site. Its harbour is lined with glass-balconied houses and a long seafront promenade.'],
      highlights=[
          H('헤라클레스의 탑', 'Tower of Hercules', '지금도 쓰이는 로마 시대 등대로, 2009년 유네스코 세계유산이 됐습니다. 꼭대기에 올라 대서양을 봅니다.', 'The Roman lighthouse still in use, a UNESCO World Heritage Site since 2009; climb to the top for the Atlantic.', 'Torre de Hércules A Coruña', 60, 75),
          H('마리나 거리 유리 발코니', 'Avenida da Mariña galleries', '항구를 따라 하얀 틀의 유리 발코니가 이어진 건물들로, ‘유리의 도시’라는 별명이 여기서 나왔습니다.', 'The harbourfront row of white-framed glazed balconies that gave the city its nickname, “city of glass”.', 'Avenida da Mariña A Coruña', 20, 30, b='no', n=FREE),
          H('마리아 피타 광장', 'Praza de María Pita', '16세기 영국 함대에 맞선 여성 영웅의 이름을 딴 시청 앞 광장입니다.', 'The square before the city hall, named for the heroine who fought off the English fleet in the 16th century.', 'Praza de María Pita A Coruña', 20, 30, b='no', n=FREE),
          H('해변 산책로와 리아소르·오르산 해변', 'Paseo Marítimo & Riazor-Orzán beaches', '반도를 따라 이어진 긴 해변 산책로로, 시내 바로 옆에 큰 모래 해변이 있습니다.', 'The long seafront promenade around the peninsula, with big sandy beaches right in town.', 'Playa de Riazor A Coruña', 60, 120, b='no', n=FREE),
          H('도무스 (인간 박물관)', 'Domus – House of Mankind', '이소자키 아라타가 설계한 바닷가 건물의 인체 과학 박물관입니다.', 'A museum of the human body in a seafront building designed by Arata Isozaki.', 'Domus A Coruña', 60, 90),
      ],
      hubs="    air: [['A Coruña (LCG)', '아코루냐 공항 (LCG)'], ['Santiago (SCQ)', '산티아고 공항 (SCQ)', '산티아고|Santiago']],\n    rail: [['A Coruña', '아코루냐역']],\n    bus: [['Estación de Autobuses de A Coruña', '아코루냐 버스터미널']],\n",
      itinerary=[3, 2, 1, 4, 5],
      season='7~8월이 해변 철이고, 비가 잦은 대서양 기후라 우산을 챙기세요.|July–August is beach season; it is a rainy Atlantic climate, so pack an umbrella.',
      stay=[ST('항구와 구시가', 'Harbour & old town', 'Praza de María Pita A Coruña', FIRST, '광장과 항구, 해변 산책로가 걸어서 닿습니다. 역까지는 버스나 택시를 탑니다.|The square, harbour and promenade on foot; take a bus or taxi to the station.')],
      routes=[(RC, RA, R('santiago', 'a-coruna', 'train', 35) + R('madrid', 'a-coruna', 'train', 215, "...R, fa: CHAMARTIN, n: AVE"))],
      transit=dict(modes=['walk', 'bus'], ko='중심가는 걸어서 다니고, 헤라클레스의 탑까지는 버스나 해변 산책로로 갑니다.', en='Walk the centre; reach the Tower of Hercules by bus or along the promenade.'),
      apps=REN, daytrips=[]),
    C(id='lugo', group_title='갈리시아', after='a-coruna', ko='루고', en='Lugo', native='Lugo', lat=43.0097, lng=-7.5567,
      blurb=['구시가 전체를 둘러싼 로마 성벽이 온전히 남은 도시로, 성벽 위를 한 바퀴 걸을 수 있습니다. 산티아고 순례길 ‘원시의 길’이 지나가고, 음료를 시키면 타파스가 함께 나오는 바 골목이 유명합니다.',
             'A city still completely ringed by its Roman walls, which you can walk all the way round. The Camino Primitivo passes through, and its bar lanes are known for free tapas with every drink.'],
      highlights=[
          H('루고 로마 성벽', 'Roman Walls of Lugo', '3세기 말에 쌓은 로마 성벽이 구시가를 한 바퀴 온전히 둘러싸고 있어 2000년 세계유산이 됐습니다. 성벽 위 산책로는 약 2km입니다.', 'Late-3rd-century Roman walls that still ring the whole old town, a World Heritage Site since 2000; the walkway on top is about 2 km.', 'Muralla romana de Lugo', 45, 60, b='no', n=FREE),
          H('루고 대성당', 'Lugo Cathedral', '로마네스크로 시작해 고딕·바로크가 더해진 대성당으로, 성체를 늘 모셔 두는 특권으로 알려져 있습니다.', 'A cathedral begun in Romanesque and added to in Gothic and Baroque, known for its privilege of perpetual exposition of the Eucharist.', 'Catedral de Lugo', 30, 45, b='no'),
          H('마요르 광장', 'Praza Maior', '시청 앞 구시가 중심 광장으로, 카페 테라스가 둘러싸고 있습니다.', 'The old town’s main square before the city hall, ringed by café terraces.', 'Praza Maior Lugo', 20, 30, b='no', n=FREE),
          H('타파스 골목', 'Tapas lanes (Rúa Nova)', '음료를 시키면 작은 타파스가 함께 나오는 바가 모인 구시가 골목입니다.', 'Old-town lanes of bars where a small tapa comes free with each drink.', 'Rúa Nova Lugo', 60, 90, b='no'),
          H('루고 지방 박물관', 'Museo Provincial de Lugo', '옛 수도원 건물에 로마 유물과 갈리시아 미술을 전시하는 박물관입니다.', 'A museum in a former convent showing Roman finds and Galician art.', 'Museo Provincial de Lugo', 45, 60),
      ],
      hubs="    air: [['Santiago (SCQ)', '산티아고 공항 (SCQ)', '산티아고|Santiago'], ['A Coruña (LCG)', '아코루냐 공항 (LCG)', '아코루냐|A Coruña']],\n    rail: [['Lugo', '루고역']],\n    bus: [['Estación de Autobuses de Lugo', '루고 버스터미널']],\n",
      itinerary=[1, 3, 2, 5, 4],
      season='10월 산 프로일란 축제 때 문어 요리 노점이 늘어서고, 6월엔 로마 시대로 분장하는 ‘아르데 루쿠스’ 축제가 열립니다.|The San Froilán fiestas in October bring octopus stalls; in June the Arde Lucus festival dresses the city as Roman.',
      stay=[ST('성벽 안 구시가', 'Inside the walls', 'Praza Maior Lugo', FIRST, '성벽과 대성당, 타파스 골목이 모두 걸어서 닿습니다.|The walls, cathedral and tapas lanes all on foot.')],
      routes=[(RC, RA, R('a-coruna', 'lugo', 'bus', 100) + R('santiago', 'lugo', 'bus', 105))],
      transit=dict(modes=['walk', 'bus'], ko='성벽 안 구시가는 걸어서 다닙니다.', en='Walk the old town inside the walls.'),
      apps=ALSA),
    C(id='sarria', group_title='갈리시아', after='lugo', ko='사리아', en='Sarria', native='Sarria', lat=42.7810, lng=-7.4144,
      blurb=['산티아고까지 약 115km 떨어진 순례길 마을로, 순례 증명서를 받는 데 필요한 ‘마지막 100km’를 걷기 위해 가장 많은 순례자가 출발하는 곳입니다. 언덕 위 옛 거리에 순례자 숙소가 늘어서 있습니다.',
             'A Camino town about 115 km from Santiago, the most popular starting point for pilgrims walking the “last 100 km” needed for the Compostela certificate; its hilltop old street is lined with pilgrim hostels.'],
      highlights=[
          H('마요르 거리', 'Rúa Maior', '언덕을 오르는 순례길 옛 거리로, 순례자 숙소와 카페가 늘어서 있습니다.', 'The old Camino street climbing the hill, lined with pilgrim hostels and cafés.', 'Rúa Maior Sarria', 30, 45, b='no', n=FREE),
          H('엘 살바도르 성당', 'Church of El Salvador', '마요르 거리 위쪽의 로마네스크·고딕 성당입니다.', 'A Romanesque-Gothic church at the top of the Rúa Maior.', 'Igrexa do Salvador Sarria', 15, 20, b='no', n=FREE),
          H('막달레나 수도원', 'Monastery of La Magdalena', '마을 위 순례길 옆 수도원으로, 순례자에게 문을 여는 곳입니다.', 'A monastery beside the Camino above the town, which welcomes pilgrims.', 'Mosteiro da Madalena Sarria', 20, 30, b='no'),
          H('사리아 요새 탑', 'Fortaleza de Sarria', '마을 꼭대기에 남은 중세 요새의 탑으로, 주변 들판이 내려다보입니다.', 'The surviving tower of the medieval fortress at the top of town, looking over the countryside.', 'Fortaleza de Sarria', 15, 20, b='no', n=FREE),
          H('사모스 수도원', 'Samos Monastery', '순례길 대체 구간에 있는 베네딕토회 수도원으로, 스페인에서 가장 오래된 수도원 가운데 하나입니다. 가이드 투어로 회랑을 봅니다.', 'A Benedictine monastery on an alternative route of the Camino, one of the oldest in Spain; guided tours show its cloisters.', 'Mosteiro de Samos', 90, 120, group=DAY, n='사리아에서 차로 약 20분입니다.|About 20 min by car from Sarria.'),
      ],
      hubs="    air: [['Santiago (SCQ)', '산티아고 공항 (SCQ)', '산티아고|Santiago']],\n    rail: [['Sarria', '사리아역']],\n    bus: [['Sarria bus stop', '사리아 버스 정류장', '루고·산티아고행|to Lugo, Santiago']],\n",
      itinerary={'days': [['', 1, 2, 4, 3]], 'trips': [['사모스 수도원|Samos', 5]]},
      season='5~6월과 9월이 걷기 좋습니다. 7~8월과 성년(산티아고 축일이 일요일인 해)엔 순례자가 매우 많아 숙소를 미리 잡으세요.|May–June and September are best for walking; July–August and Holy Years (when St James’s Day falls on a Sunday) are very crowded, so book beds ahead.',
      stay=[ST('마요르 거리 주변', 'Around the Rúa Maior', 'Rúa Maior Sarria', '순례 출발에 추천|Best for starting the Camino', '순례자 숙소와 호텔이 모여 있고, 순례길이 바로 앞을 지납니다.|Pilgrim hostels and hotels cluster here, right on the Camino.')],
      routes=[(RC, RA, R('lugo', 'sarria', 'train', 30) + R('santiago', 'sarria', 'bus', 120))],
      transit=dict(modes=['walk', 'bus', 'taxi'], ko='마을은 걸어서 다닙니다. 사모스는 택시나 차가 편합니다.', en='Walk the town; a taxi or car is easiest for Samos.'),
      apps=REN),
    C(id='vigo', group_title='갈리시아', after='sarria', ko='비고', en='Vigo', native='Vigo', lat=42.2406, lng=-8.7207,
      blurb=['갈리시아에서 가장 큰 도시이자 어항으로, 앞바다의 시에스 제도 해변이 유명합니다. 옛 어부 동네에서 굴을 맛보고, 언덕 위 요새에서 만을 내려다봅니다. 성탄 조명 장식도 유명합니다.',
             'Galicia’s largest city and fishing port, famous for the beaches of the Cíes Islands offshore. Taste oysters in the old fishermen’s quarter and look over the bay from the hilltop fort; its Christmas lights are famous too.'],
      highlights=[
          H('시에스 제도', 'Cíes Islands', '대서양 섬 국립공원에 속한 섬들로, 하얀 모래의 로다스 해변과 등대 산책로가 있습니다.', 'Islands in the Atlantic Islands National Park, with the white sands of Rodas beach and lighthouse trails.', 'Illas Cíes', 300, 480, group=DAY, b='req', n='배는 대략 봄~가을에 다니고, 성수기엔 갈리시아 정부 방문 허가와 배표를 함께 예약해야 합니다.|Boats run roughly spring to autumn; in high season you need a visit permit from the Galician government as well as a boat ticket.'),
          H('구시가와 굴 거리', 'Casco Vello & oyster street', '항구 위 옛 어부 동네로, 페드라 시장 옆 거리에서 굴 파는 아주머니들이 즉석에서 굴을 까 줍니다.', 'The old fishermen’s quarter above the port, where oyster sellers shuck them for you on the street by the Pedra market.', 'Rúa da Pescadería Vigo', 60, 90, b='no', n=FREE),
          H('카스트로 요새', 'Monte do Castro', '도심 언덕 위 17세기 요새 공원으로, 비고 만과 시에스 제도가 보입니다.', 'The 17th-century fort park on the hill in the centre, with views over the Vigo estuary to the Cíes Islands.', 'Monte do Castro Vigo', 45, 60, b='no', n=FREE),
          H('마르코 현대 미술관', 'MARCO Vigo', '옛 법원·감옥 건물에 있는 현대 미술관입니다.', 'The contemporary art museum in the former courthouse and prison.', 'MARCO Vigo', 45, 60, c='mon'),
          H('사모일 해변', 'Samil beach', '시내 남쪽의 긴 모래 해변으로, 해변 산책로가 이어집니다.', 'The long sandy beach south of the centre, with a seafront promenade.', 'Praia de Samil Vigo', 60, 120, b='no', n=FREE),
      ],
      hubs="    air: [['Vigo (VGO)', '비고 공항 (VGO)'], ['Santiago (SCQ)', '산티아고 공항 (SCQ)', '산티아고|Santiago']],\n    rail: [['Vigo-Urzáiz', '비고 우르사이스역', '고속열차|high-speed trains'], ['Vigo-Guixar', '비고 기샤르역', '포르투행 열차|trains to Porto']],\n    port: [['Estación Marítima de Vigo', '비고 여객 터미널', '시에스 제도행 배|boats to the Cíes Islands']],\n",
      itinerary={'days': [['', 3, 2, 4, 5]], 'trips': [['시에스 제도|Cíes Islands', 1]]},
      season='시에스 제도 배가 다니는 6~9월이 가장 좋고, 11~1월엔 성탄 조명이 시내를 밝힙니다.|June–September, when the Cíes boats run, is best; from November to January the Christmas lights fill the centre.',
      stay=[ST('구시가와 중심가', 'Old town & centre', 'Porta do Sol Vigo', FIRST, '항구와 굴 거리, 우르사이스역이 걸어서 닿습니다.|The port, oyster street and Urzáiz station on foot.')],
      routes=[(RC, RA, R('santiago', 'vigo', 'train', 55) + R('vigo', 'porto', 'train', 140, "n: '셀타 열차|Celta train'"))],
      transit=dict(modes=['walk', 'bus'], ko='중심가는 걸어서 다니고, 해변과 공항엔 버스가 갑니다. 가파른 거리엔 야외 에스컬레이터가 있습니다.', en='Walk the centre; buses run to the beaches and airport, and outdoor escalators help on the steep streets.'),
      apps=REN),
    C(id='pontevedra', group_title='갈리시아', after='vigo', ko='폰테베드라', en='Pontevedra', native='Pontevedra', lat=42.4310, lng=-8.6444,
      blurb=['산티아고 순례길 ‘포르투갈 길’이 지나는 도시로, 차 없는 화강암 구시가와 가리비 모양 평면의 순례자 성모 성당이 있습니다. 작은 광장마다 테라스가 이어집니다.',
             'A city on the Portuguese Way to Santiago, with a car-free granite old town and the scallop-shell-shaped Sanctuary of the Pilgrim Virgin; café terraces fill its small squares.'],
      highlights=[
          H('순례자 성모 성당', 'Sanctuary of the Pilgrim Virgin', '가리비 껍데기 모양 평면으로 지은 18세기 바로크 성당으로, 순례자의 수호 성모를 모십니다.', 'The 18th-century Baroque church built on a scallop-shell plan, dedicated to the Virgin as patroness of pilgrims.', 'Santuario da Peregrina Pontevedra', 15, 20, b='no', n=FREE),
          H('차 없는 구시가', 'Car-free old town', '차를 없앤 화강암 골목과 레냐 광장 등 작은 광장들이 이어진 구시가입니다.', 'The granite lanes of the car-free old town, linking little squares such as the Praza da Leña.', 'Praza da Leña Pontevedra', 60, 90, b='no', n=FREE),
          H('산타 마리아 라 마요르 성당', 'Basilica of Santa María la Mayor', '뱃사람 조합이 지은 16세기 성당으로, 플라테레스크 양식 정면이 화려합니다.', 'The 16th-century church built by the sailors’ guild, with an ornate Plateresque façade.', 'Basílica de Santa María a Maior Pontevedra', 20, 30, b='no'),
          H('폰테베드라 박물관', 'Museo de Pontevedra', '여러 건물로 이뤄진 박물관으로, 산토 도밍고 수도원 폐허와 갈리시아 미술을 봅니다.', 'A museum spread over several buildings, including the ruins of the Santo Domingo convent and Galician art.', 'Museo de Pontevedra', 60, 90, c='mon'),
          H('부르고 다리', 'Ponte do Burgo', '레레스강을 건너는 중세 다리로, 포르투갈 길 순례자들이 이 다리로 시내에 들어옵니다.', 'The medieval bridge over the Lérez, by which pilgrims on the Portuguese Way enter the city.', 'Ponte do Burgo Pontevedra', 15, 20, b='no', n=FREE),
      ],
      hubs="    air: [['Vigo (VGO)', '비고 공항 (VGO)', '비고|Vigo'], ['Santiago (SCQ)', '산티아고 공항 (SCQ)', '산티아고|Santiago']],\n    rail: [['Pontevedra', '폰테베드라역']],\n    bus: [['Estación de Autobuses de Pontevedra', '폰테베드라 버스터미널']],\n",
      itinerary=[5, 1, 2, 3, 4],
      season='봄·가을이 걷기 좋고, 8월엔 페레그리나 축제가 열립니다.|Spring and autumn are best for walking; the Peregrina fiestas are in August.',
      stay=[ST('구시가', 'Old town', 'Praza da Ferrería Pontevedra', FIRST, '광장과 성당이 걸어서 닿고, 역까지 걸어서 약 15분입니다.|The squares and churches on foot, about 15 min’s walk from the station.')],
      routes=[(RC, RA, R('santiago', 'pontevedra', 'train', 35) + R('vigo', 'pontevedra', 'train', 20))],
      transit=dict(modes=['walk', 'bus'], ko='구시가는 차가 없어 걸어서 다닙니다.', en='The old town is car-free; walk everywhere.'),
      apps=REN),
    # —— Canary Islands ——
    C(id='las-palmas', group_title='카나리아 제도', after='tenerife', ko='라스팔마스 데 그란카나리아', en='Las Palmas de Gran Canaria', native='Las Palmas de Gran Canaria', lat=28.1235, lng=-15.4363,
      blurb=['그란카나리아섬의 중심 도시로, 콜럼버스가 들렀던 구시가 베게타와 도심의 긴 라스 칸테라스 해변이 있습니다. 섬 안쪽의 바위산 로케 누블로와 남쪽 마스팔로마스 모래 언덕으로 당일치기를 떠납니다.',
             'The main city of Gran Canaria, with the old quarter of Vegueta where Columbus called and the long urban beach of Las Canteras; day trips go to the rock pinnacle of Roque Nublo inland and the Maspalomas dunes in the south.'],
      highlights=[
          H('베게타 구시가', 'Vegueta old town', '15세기 말 도시가 시작된 구시가로, 발코니가 달린 식민지풍 집과 광장이 이어집니다.', 'The old town where the city began in the late 15th century, with colonial-style balconied houses and squares.', 'Vegueta Las Palmas', 60, 90, b='no', n=FREE),
          H('콜럼버스의 집', 'Casa de Colón', '콜럼버스가 항해 중 머물렀다고 전하는 총독 저택 박물관으로, 대항해 시대와 카나리아의 관계를 보여 줍니다.', 'The governor’s house museum where Columbus is said to have stayed on his voyages, on the Canaries and the age of exploration.', 'Casa de Colón Las Palmas', 45, 60),
          H('산타 아나 대성당', 'Santa Ana Cathedral', '베게타의 대성당으로, 엘리베이터로 탑에 오르면 시내와 바다가 보입니다.', 'Vegueta’s cathedral; take the lift up the tower for views over the city and sea.', 'Catedral de Santa Ana Las Palmas', 30, 45),
          H('라스 칸테라스 해변', 'Las Canteras beach', '시내에 있는 약 3km의 모래 해변으로, 앞바다 암초가 파도를 막아 물이 잔잔합니다.', 'A city beach of about 3 km, sheltered by an offshore reef that calms the water.', 'Playa de Las Canteras', 120, 180, b='no', n=FREE),
          H('로케 누블로', 'Roque Nublo', '섬 한가운데 높이 솟은 화산 바위 기둥으로, 짧은 산길을 걸어 밑까지 갑니다.', 'The volcanic rock pinnacle at the centre of the island, reached by a short mountain trail.', 'Roque Nublo', 240, 360, group=DAY, b='no', n='대중교통이 드물어 차나 투어가 편합니다.|Public transport is sparse; a car or tour is easiest.'),
          H('마스팔로마스 모래 언덕', 'Maspalomas Dunes', '섬 남쪽 해변의 넓은 모래 언덕 자연보호구역으로, 등대와 해변이 이어집니다.', 'The broad sand-dune nature reserve on the southern beaches, beside the lighthouse.', 'Dunas de Maspalomas', 180, 240, group=DAY, b='no', n='라스팔마스에서 버스로 약 1시간입니다.|About 1 hr by bus from Las Palmas.'),
      ],
      hubs="    air: [['Gran Canaria (LPA)', '그란카나리아 공항 (LPA)']],\n    port: [['Puerto de La Luz', '라 루스 항구', '테네리페·란사로테 등 섬 사이 페리|inter-island ferries']],\n",
      itinerary={'days': [['', 1, 3, 2], ['', 4]], 'trips': [['로케 누블로|Roque Nublo', 5], ['마스팔로마스|Maspalomas', 6]]},
      season='1년 내내 온화하고, 2월 카니발이 큽니다.|Mild all year; the February carnival is a big one.',
      stay=[ST('라스 칸테라스 해변', 'Las Canteras', 'Playa de Las Canteras', '해변 휴양|Beach stay', '해변 앞에 호텔과 식당이 모여 있고, 베게타까지 버스로 약 20분입니다.|Hotels and restaurants on the beach, about 20 min by bus from Vegueta.'),
            ST('베게타·트리아나', 'Vegueta & Triana', 'Triana Las Palmas', FIRST, '구시가와 쇼핑 거리, 버스터미널이 가깝습니다.|Close to the old town, shopping street and bus station.')],
      routes=[(RC, RA, R('madrid', 'las-palmas', 'flight', 175) + R('tenerife', 'las-palmas', 'flight', 35))],
      transit=dict(modes=['walk', 'bus'], ko='시내는 시내버스로 다니고, 섬 곳곳은 글로벌 버스가 잇습니다.', en='Use city buses in town; Global buses cover the island.'),
      apps=''),
    C(id='lanzarote', group_title='카나리아 제도', after='las-palmas', ko='란사로테', en='Lanzarote', native='Lanzarote', lat=28.9630, lng=-13.5477,
      blurb=['18세기 화산 폭발이 만든 검은 용암 들판의 섬으로, 티만파야 국립공원과 예술가 세사르 만리케가 용암 동굴과 절벽 위에 만든 건축물이 볼거리입니다. 화산재 구덩이마다 포도나무를 심은 라 헤리아 와인 마을도 독특합니다.',
             'An island of black lava fields left by 18th-century eruptions, known for Timanfaya National Park and the works the artist César Manrique built into lava tubes and clifftops; La Geria’s vines, each planted in a pit of volcanic ash, are unique too.'],
      highlights=[
          H('티만파야 국립공원', 'Timanfaya National Park', '1730~36년 화산 폭발로 생긴 용암 들판으로, 공원 버스를 타고 ‘화산의 길’을 돌며 땅의 열기를 이용한 시범을 봅니다.', 'Lava fields from the eruptions of 1730–36, toured by park bus along the Route of the Volcanoes, with demonstrations of the heat just below the ground.', 'Parque Nacional de Timanfaya', 120, 180),
          H('하메오스 델 아구아', 'Jameos del Agua', '세사르 만리케가 용암 동굴 안에 만든 연못·정원·공연장으로, 연못에 사는 작은 하얀 게가 명물입니다.', 'César Manrique’s pool, gardens and auditorium built inside a lava tube, home to tiny white crabs in the lagoon.', 'Jameos del Agua', 60, 90),
          H('리오 전망대', 'Mirador del Río', '섬 북쪽 절벽에 만리케가 숨겨 지은 전망대로, 바다 건너 라 그라시오사섬이 보입니다.', 'Manrique’s viewpoint hidden in the northern cliffs, looking across the strait to La Graciosa.', 'Mirador del Río Lanzarote', 30, 45),
          H('라 헤리아 포도밭', 'La Geria', '검은 화산재 구덩이에 포도나무를 한 그루씩 심고 반달 모양 돌담을 두른 와인 지대입니다.', 'The wine country where each vine grows in its own pit of black volcanic ash behind a crescent stone wall.', 'La Geria Lanzarote', 60, 120, b='no', n='와이너리 시음은 곳마다 따로 운영합니다.|Each bodega runs its own tastings.'),
          H('세사르 만리케 재단', 'Fundación César Manrique', '용암 거품 다섯 개 위에 지은 만리케의 옛 집으로, 지금은 그의 작품을 전시하는 재단입니다.', 'Manrique’s former home built over five lava bubbles, now a foundation showing his work.', 'Fundación César Manrique', 60, 90),
          H('선인장 정원', 'Jardín de Cactus', '옛 채석장에 만리케가 만든 정원으로, 수천 그루의 선인장이 계단식으로 자랍니다.', 'Manrique’s garden in a former quarry, with thousands of cacti on terraces.', 'Jardín de Cactus Lanzarote', 45, 60),
      ],
      hubs="    air: [['Lanzarote (ACE)', '란사로테 공항 (ACE)']],\n    port: [['Puerto de Arrecife', '아레시페 항구', '섬 사이 페리|inter-island ferries']],\n",
      itinerary={'days': [['', 1, 4], ['', 5, 6, 2, 3]]},
      season='1년 내내 온화하고 비가 적습니다. 바람이 강한 날이 많습니다.|Mild and dry all year, but often windy.',
      stay=[ST('푸에르토 델 카르멘', 'Puerto del Carmen', 'Puerto del Carmen', '해변 휴양|Beach stay', '해변 호텔과 식당이 가장 많고 공항이 가깝습니다.|The most beach hotels and restaurants, close to the airport.'),
            ST('아레시페', 'Arrecife', 'Arrecife', '버스 이동에 편리|Handy for buses', '섬의 중심 도시로, 버스 노선이 모입니다.|The island capital, where bus routes meet.')],
      routes=[(RC, RA, R('madrid', 'lanzarote', 'flight', 165) + R('las-palmas', 'lanzarote', 'flight', 45))],
      transit=dict(modes=['bus', 'taxi'], ko='명소가 섬 곳곳에 흩어져 있고 버스가 드물어, 렌터카나 투어가 편합니다.', en='The sights are spread around the island and buses are infrequent; a hire car or tour is easiest.'),
      apps=''),
    # —— Asturias ——
    C(id='gijon', group_title='아스투리아스', after='oviedo', ko='히혼', en='Gijón', native='Gijón / Xixón', lat=43.5453, lng=-5.6615,
      blurb=['아스투리아스 해안의 가장 큰 도시로, 곶 위 옛 어부 동네 시마데비야와 도심 해변 산 로렌소, 바다를 향한 칠리다의 조각이 있습니다. 시드라(사과주)를 높이 들어 따르는 술집이 많습니다.',
             'The largest city on the Asturian coast, with the old fishermen’s quarter of Cimadevilla on its headland, the city beach of San Lorenzo and Chillida’s sculpture facing the sea; its cider bars pour sidra from on high.'],
      highlights=[
          H('시마데비야', 'Cimadevilla', '곶 위 옛 어부 동네로, 좁은 골목과 시드라 술집, 로마 목욕탕 유적이 있습니다.', 'The old fishermen’s quarter on the headland, with narrow lanes, cider bars and Roman baths.', 'Cimadevilla Gijón', 60, 90, b='no', n=FREE),
          H('수평선 찬가', 'Elogio del Horizonte', '산타 카탈리나 언덕 위에 선 에두아르도 칠리다의 거대한 콘크리트 조각으로, 안에 서면 파도 소리가 울립니다.', 'Eduardo Chillida’s huge concrete sculpture on the Santa Catalina hill; stand inside to hear the sea echo.', 'Elogio del Horizonte Gijón', 20, 30, b='no', n=FREE),
          H('산 로렌소 해변', 'San Lorenzo beach', '도심을 따라 휘어진 긴 모래 해변으로, 해변 산책로가 이어집니다.', 'The long curve of sand along the city centre, with a seafront promenade.', 'Playa de San Lorenzo Gijón', 60, 120, b='no', n=FREE),
          H('라보랄 문화 도시', 'Laboral Ciudad de la Cultura', '20세기 중반에 지은 거대한 옛 노동 대학 건물로, 높은 탑에 올라 시내를 내려다봅니다.', 'The vast mid-20th-century former workers’ university, with a tall tower to climb for views.', 'Laboral Ciudad de la Cultura Gijón', 60, 90),
          H('캄포 발데스 로마 목욕탕', 'Roman Baths of Campo Valdés', '산 로렌소 해변 끝 광장 아래 남은 로마 시대 공중목욕탕 유적입니다.', 'The remains of Roman public baths beneath the square at the end of San Lorenzo beach.', 'Termas Romanas de Campo Valdés', 30, 45, c='mon'),
      ],
      hubs="    air: [['Asturias (OVD)', '아스투리아스 공항 (OVD)']],\n    rail: [['Gijón', '히혼역']],\n    bus: [['Estación de Autobuses de Gijón', '히혼 버스터미널']],\n",
      itinerary=[3, 5, 1, 2, 4],
      season='여름 해변 철과 8월 시드라 축제가 좋습니다. 비가 잦으니 우산을 챙기세요.|Summer beach season and the August cider festival are best; it rains often, so pack an umbrella.',
      stay=[ST('중심가와 해변', 'Centre & beach', 'Plaza Mayor Gijón', FIRST, '시마데비야와 해변이 걸어서 닿습니다.|Cimadevilla and the beach on foot.')],
      routes=[(RC, RA, R('oviedo', 'gijon', 'train', 35))],
      transit=dict(modes=['walk', 'bus'], ko='중심가는 걸어서 다니고, 라보랄까지는 버스를 탑니다.', en='Walk the centre; take a bus to the Laboral.'),
      apps=REN),
    # —— Castile and León ——
    C(id='valladolid', group_title='카스티야이레온', after='burgos', ko='바야돌리드', en='Valladolid', native='Valladolid', lat=41.6523, lng=-4.7245,
      blurb=['카스티야이레온 지방 정부가 있는 도시로, 한때 스페인 왕궁이 있었습니다. 국립 조각 박물관의 성주간 목조 조각과 이사벨 양식 정면, 큰 마요르 광장, 세르반테스가 살던 집이 있습니다.',
             'The seat of the Castile and León government and once briefly Spain’s royal capital, with the National Museum of Sculpture’s Holy Week woodcarvings behind an Isabelline façade, a grand Plaza Mayor and the house where Cervantes lived.'],
      highlights=[
          H('국립 조각 박물관', 'National Museum of Sculpture', '이사벨 양식 정면이 화려한 산 그레고리오 학교 건물에 스페인 목조 조각을 모은 박물관입니다.', 'Spain’s museum of polychrome wood sculpture in the Colegio de San Gregorio, behind its ornate Isabelline façade.', 'Museo Nacional de Escultura Valladolid', 90, 120, c='mon'),
          H('산 파블로 성당', 'Church of San Pablo', '조각 박물관 옆, 정면이 조각으로 가득 찬 이사벨 양식 성당입니다.', 'Beside the sculpture museum, the Isabelline church whose façade is covered in carving.', 'Iglesia de San Pablo Valladolid', 15, 20, b='no'),
          H('마요르 광장', 'Plaza Mayor', '붉은 건물이 둘러싼 큰 네모 광장으로, 스페인 여러 마요르 광장의 본보기가 됐다고 합니다.', 'The great square of red buildings, said to have served as a model for other Spanish main squares.', 'Plaza Mayor Valladolid', 20, 30, b='no', n=FREE),
          H('바야돌리드 대성당', 'Valladolid Cathedral', '후안 데 에레라가 설계했으나 끝내 완성되지 못한 르네상스 대성당입니다.', 'The Renaissance cathedral designed by Juan de Herrera and never finished.', 'Catedral de Valladolid', 30, 45),
          H('세르반테스의 집', 'Casa de Cervantes', '세르반테스가 『돈키호테』를 펴낼 무렵 살던 집으로, 당시 생활을 보여 줍니다.', 'The house where Cervantes lived around the time Don Quixote was published, furnished in period style.', 'Casa de Cervantes Valladolid', 30, 45, c='mon'),
          H('캄포 그란데 공원', 'Campo Grande', '도심의 큰 삼각형 공원으로, 공작이 돌아다니는 산책로와 연못이 있습니다.', 'The big triangular park in the centre, with peacocks wandering its paths and a pond.', 'Campo Grande Valladolid', 30, 60, b='no', n=FREE),
      ],
      hubs="    air: [MAD()],\n    rail: [['Valladolid Campo Grande', '바야돌리드 캄포 그란데역']],\n    bus: [['Estación de Autobuses de Valladolid', '바야돌리드 버스터미널']],\n",
      itinerary=[6, 3, 4, 2, 1, 5],
      season='성주간 행렬이 스페인에서 손꼽히게 장엄합니다. 겨울은 춥습니다.|Its Holy Week processions are among Spain’s most solemn; winters are cold.',
      stay=[ST('마요르 광장 주변', 'Around the Plaza Mayor', 'Plaza Mayor Valladolid', FIRST, '광장과 박물관, 대성당이 걸어서 닿고 역까지 걸어서 약 15분입니다.|The square, museums and cathedral on foot, about 15 min’s walk from the station.')],
      routes=[(RC, RA, R('madrid', 'valladolid', 'train', 60, "...R, fa: CHAMARTIN, n: AVE") + R('valladolid', 'leon', 'train', 70, "...R, n: AVE"))],
      transit=dict(modes=['walk', 'bus'], ko='중심가는 걸어서 다닙니다.', en='Walk the centre.'),
      apps=REN),
    C(id='astorga', group_title='카스티야이레온', after='leon', ko='아스토르가', en='Astorga', native='Astorga', lat=42.4589, lng=-6.0563,
      blurb=['프랑스 길과 은의 길이 만나는 순례길 도시로, 가우디가 설계한 동화 같은 주교관과 대성당이 나란히 서 있습니다. 로마 시대 아스투리카 아우구스타의 유적과 초콜릿 박물관도 있습니다.',
             'A Camino town where the French Way meets the Vía de la Plata, with Gaudí’s fairy-tale Episcopal Palace beside the cathedral, remains of Roman Asturica Augusta and a chocolate museum.'],
      highlights=[
          H('가우디 주교관', 'Episcopal Palace (Gaudí)', '가우디가 설계한 하얀 화강암의 신고딕 궁전으로, 지금은 순례길 박물관입니다.', 'Gaudí’s Neo-Gothic palace of white granite, now a museum of the pilgrim routes.', 'Palacio de Gaudí Astorga', 45, 60),
          H('아스토르가 대성당', 'Astorga Cathedral', '고딕으로 시작해 바로크 정면을 더한 대성당으로, 주교관 바로 옆에 있습니다.', 'A Gothic cathedral with a Baroque façade, right beside the Episcopal Palace.', 'Catedral de Astorga', 45, 60),
          H('초콜릿 박물관', 'Chocolate Museum', '18~19세기 초콜릿 공장이 많았던 아스토르가의 초콜릿 역사를 보여 주는 박물관입니다.', 'A museum of Astorga’s chocolate-making history, a big local trade in the 18th and 19th centuries.', 'Museo del Chocolate Astorga', 30, 45),
          H('로마 유적 길', 'Roman Route', '로마 도시 아스투리카 아우구스타의 성벽·하수도·집터를 잇는 유적 길입니다.', 'A trail linking the walls, sewers and house remains of the Roman city of Asturica Augusta.', 'Ergástula Astorga', 60, 90),
          H('마요르 광장', 'Plaza Mayor', '시청 시계탑에서 마라가토 전통 의상 인형 둘이 종을 치는 광장입니다.', 'The main square, where two figures in traditional Maragato dress strike the bell on the town-hall clock.', 'Plaza Mayor Astorga', 15, 20, b='no', n=FREE),
      ],
      hubs="    air: [MAD()],\n    rail: [['Astorga', '아스토르가역', '시내까지 걸어서 약 15분|about 15 min’s walk to the centre']],\n    bus: [['Estación de Autobuses de Astorga', '아스토르가 버스터미널']],\n",
      itinerary=[5, 1, 2, 4, 3],
      season='봄·가을이 걷기 좋습니다. 마라가토 전통 스튜 ‘코시도 마라가토’를 맛보세요.|Spring and autumn are best for walking; try the local cocido maragato stew.',
      stay=[ST('대성당 주변', 'Around the cathedral', 'Plaza Mayor Astorga', FIRST, '주교관과 광장이 걸어서 닿고, 순례자 숙소도 모여 있습니다.|The palace and square on foot, with pilgrim hostels nearby.')],
      routes=[(RC, RA, R('leon', 'astorga', 'train', 45))],
      transit=dict(modes=['walk'], ko='마을은 걸어서 다닙니다.', en='Walk the town.'),
      apps=REN),
    C(id='ponferrada', group_title='카스티야이레온', after='astorga', ko='폰페라다', en='Ponferrada', native='Ponferrada', lat=42.5466, lng=-6.5962,
      blurb=['엘 비에르소 지방의 순례길 도시로, 템플 기사단이 지킨 성이 강가 언덕 위에 서 있습니다. 로마 시대 금광이 만든 붉은 봉우리 라스 메둘라스로 가는 거점입니다.',
             'A Camino town in El Bierzo, crowned by the Templar castle on a hill above the river, and the base for Las Médulas, the red peaks left by Roman gold mining.'],
      highlights=[
          H('템플 기사단 성', 'Templar Castle', '12세기 템플 기사단이 맡았던 성으로, 성벽과 탑이 잘 남아 있고 안에 템플 기사단 도서관 전시가 있습니다.', 'The castle held by the Knights Templar from the 12th century, with well-preserved walls and towers and a Templar library display.', 'Castillo de los Templarios Ponferrada', 60, 90),
          H('엔시나 성당', 'Basilica of La Encina', '구시가 광장의 성당으로, 엘 비에르소의 수호 성모를 모십니다.', 'The old-town basilica of the patroness of El Bierzo.', 'Basílica de la Encina Ponferrada', 15, 20, b='no', n=FREE),
          H('시계탑과 구시가', 'Clock tower & old town', '옛 성문 위 시계탑 아래로 이어진 구시가 골목입니다.', 'The old-town lanes running beneath the clock tower over the old gate.', 'Torre del Reloj Ponferrada', 30, 45, b='no', n=FREE),
          H('라스 메둘라스', 'Las Médulas', '로마 시대 금광 채굴로 산을 허물어 생긴 붉은 봉우리와 굴로, 유네스코 세계유산입니다. 오렐란 전망대에서 내려다봅니다.', 'Red pinnacles and tunnels left when Roman gold mining tore down the mountains, a UNESCO World Heritage Site; see them from the Orellán viewpoint.', 'Las Médulas', 240, 300, group=DAY, b='no', n='폰페라다에서 차로 약 40분이고 대중교통이 드뭅니다.|About 40 min by car from Ponferrada; public transport is sparse.'),
      ],
      hubs="    air: [MAD()],\n    rail: [['Ponferrada', '폰페라다역']],\n    bus: [['Estación de Autobuses de Ponferrada', '폰페라다 버스터미널']],\n",
      itinerary={'days': [['', 1, 3, 2]], 'trips': [['라스 메둘라스|Las Médulas', 4]]},
      season='봄·가을이 걷기 좋고, 7월 보름날 무렵엔 템플 기사단 축제가 열립니다.|Spring and autumn are best; a Templar festival is held around the July full moon.',
      stay=[ST('구시가', 'Old town', 'Plaza del Ayuntamiento Ponferrada', FIRST, '성과 광장이 걸어서 닿습니다.|The castle and square on foot.')],
      routes=[(RC, RA, R('leon', 'ponferrada', 'train', 115) + R('astorga', 'ponferrada', 'train', 70))],
      transit=dict(modes=['walk', 'taxi'], ko='구시가는 걸어서 다닙니다. 라스 메둘라스는 차나 택시가 편합니다.', en='Walk the old town; a car or taxi is easiest for Las Médulas.'),
      apps=REN),
    # —— Castile–La Mancha ——
    C(id='almagro', group_title='카스티야라만차', after='cuenca', ko='알마그로', en='Almagro', native='Almagro', lat=38.8885, lng=-3.7117,
      blurb=['라만차의 작은 도시로, 17세기 극장 ‘코랄 데 코메디아스’가 지금도 공연을 올립니다. 초록 창틀의 유리 회랑이 둘러싼 마요르 광장이 아름답고, 7월엔 국제 고전 연극 축제가 열립니다.',
             'A small town in La Mancha whose 17th-century Corral de Comedias still stages plays, with a Plaza Mayor ringed by green-framed glazed galleries; the International Classical Theatre Festival is held in July.'],
      highlights=[
          H('코랄 데 코메디아스', 'Corral de Comedias', '17세기에 지은 안뜰형 극장으로, 스페인 황금세기 극장 가운데 거의 온전히 남은 곳입니다. 지금도 공연이 열립니다.', 'The 17th-century courtyard theatre, a Golden Age playhouse surviving almost intact and still in use.', 'Corral de Comedias Almagro', 30, 45),
          H('마요르 광장', 'Plaza Mayor', '초록 창틀의 유리 회랑 건물이 양쪽으로 늘어선 길쭉한 광장입니다.', 'The long square lined on both sides by buildings with green-framed glazed galleries.', 'Plaza Mayor Almagro', 20, 30, b='no', n=FREE),
          H('국립 연극 박물관', 'National Theatre Museum', '스페인 연극의 역사를 의상·무대 모형으로 보여 주는 박물관입니다.', 'A museum of Spanish theatre history in costumes and stage models.', 'Museo Nacional del Teatro Almagro', 45, 60, c='mon'),
          H('칼라트라바 라 누에바 성', 'Calatrava la Nueva', '언덕 위 칼라트라바 기사단의 성채 수도원 유적입니다.', 'The hilltop castle-monastery of the Order of Calatrava.', 'Castillo de Calatrava la Nueva', 90, 120, group=DAY, n='알마그로에서 차로 약 30분입니다.|About 30 min by car from Almagro.'),
      ],
      hubs="    air: [MAD()],\n    rail: [['Ciudad Real', '시우다드레알역', '마드리드행 AVE, 알마그로까지 약 25km|AVE to Madrid; about 25 km to Almagro'], ['Almagro', '알마그로역', '지역 열차|regional trains']],\n",
      itinerary={'days': [['', 2, 1, 3]], 'trips': [['칼라트라바 라 누에바|Calatrava la Nueva', 4]]},
      season='7월 고전 연극 축제 때 숙소가 빨리 찹니다. 여름 낮은 매우 덥습니다.|Rooms go fast during the July theatre festival; summer days are very hot.',
      stay=[ST('마요르 광장 주변', 'Around the Plaza Mayor', 'Plaza Mayor Almagro', FIRST, '광장과 극장이 걸어서 닿습니다.|The square and theatre on foot.')],
      routes=[(RC, RA, R('madrid', 'almagro', 'mixed', 120, "fa: ATOCHA, n: '시우다드레알까지 AVE 후 지역 열차나 버스|AVE to Ciudad Real, then regional train or bus'"))],
      transit=dict(modes=['walk', 'taxi'], ko='마을은 걸어서 다닙니다.', en='Walk the town.'),
      apps=REN),
    C(id='siguenza', group_title='카스티야라만차', after='almagro', ko='시구엔사', en='Sigüenza', native='Sigüenza', lat=41.0683, lng=-2.6430,
      blurb=['마드리드 북동쪽 언덕 위 중세 도시로, 요새 같은 대성당과 언덕 꼭대기 성(지금은 국영 호텔 파라도르)이 마주 봅니다. 대성당 안의 젊은 기사 조각 ‘엘 돈셀’이 유명합니다.',
             'A medieval hill town north-east of Madrid, where a fortress-like cathedral faces the castle (now a Parador hotel) at the top of town; the cathedral’s reclining young knight, El Doncel, is famous.'],
      highlights=[
          H('시구엔사 대성당', 'Sigüenza Cathedral', '요새처럼 육중한 로마네스크·고딕 대성당으로, 책을 읽으며 누운 젊은 기사의 무덤 조각 ‘엘 돈셀’이 있습니다.', 'A massive, fortress-like Romanesque-Gothic cathedral holding the tomb of El Doncel, a young knight shown reclining with a book.', 'Catedral de Sigüenza', 60, 75),
          H('시구엔사 성 (파라도르)', 'Sigüenza Castle (Parador)', '언덕 꼭대기 주교들의 옛 성으로, 지금은 국영 호텔 파라도르입니다.', 'The bishops’ old castle at the top of town, now a state-run Parador hotel.', 'Parador de Sigüenza', 20, 30, b='no'),
          H('마요르 광장', 'Plaza Mayor', '대성당 옆 르네상스 아케이드 광장입니다.', 'The Renaissance arcaded square beside the cathedral.', 'Plaza Mayor Sigüenza', 15, 20, b='no', n=FREE),
          H('중세 골목 (트라베사냐 알타)', 'Travesaña Alta', '대성당과 성을 잇는 비탈길로, 중세 집과 로마네스크 성당이 늘어서 있습니다.', 'The sloping street linking cathedral and castle, lined with medieval houses and Romanesque churches.', 'Travesaña Alta Sigüenza', 30, 45, b='no', n=FREE),
      ],
      hubs="    air: [MAD()],\n    rail: [['Sigüenza', '시구엔사역']],\n",
      itinerary=[1, 3, 4, 2],
      season='봄·가을이 좋고, 봄·가을 주말엔 마드리드에서 오는 관광 열차 ‘중세 열차’가 운행하기도 합니다.|Spring and autumn are best; on some weekends in those seasons a themed “Medieval Train” runs from Madrid.',
      stay=[ST('구시가', 'Old town', 'Plaza Mayor Sigüenza', FIRST, '대성당과 성 사이 작은 구시가로, 역까지 걸어서 약 10분입니다.|The small old town between cathedral and castle, about 10 min’s walk from the station.')],
      routes=[(RC, RA, R('madrid', 'siguenza', 'train', 100, "fa: CHAMARTIN, n: '지역 열차|regional train'"))],
      transit=dict(modes=['walk'], ko='마을은 걸어서 다닙니다.', en='Walk the town.'),
      apps=REN, daytrips=[('madrid', trip('siguenza', '기차로 약 1시간 40분. 요새 같은 대성당과 언덕 위 성이 있는 중세 도시입니다.|About 1 hr 40 by train: a medieval hill town with a fortress-like cathedral and castle.'))]),
    # —— Andalusia ——
    C(id='antequera', group_title='안달루시아', after='malaga', ko='안테케라', en='Antequera', native='Antequera', lat=37.0194, lng=-4.5612,
      blurb=['안달루시아 한가운데의 도시로, 5천 년 넘은 거대한 고인돌과 기묘한 석회암 바위 들판 엘 토르칼이 함께 유네스코 세계유산입니다. 언덕 위 알카사바에서 ‘연인의 바위’가 보입니다.',
             'A town at the heart of Andalusia whose giant dolmens, more than 5,000 years old, and the strange limestone landscape of El Torcal form a UNESCO World Heritage Site; from the hilltop Alcazaba you see the Lovers’ Rock.'],
      highlights=[
          H('안테케라 고인돌 유적', 'Antequera Dolmens', '메냐·비에라 고인돌과 엘 로메랄 무덤으로 이뤄진 거석 유적으로, 2016년 세계유산이 됐습니다.', 'The megalithic site of the Menga and Viera dolmens and the El Romeral tomb, a World Heritage Site since 2016.', 'Dólmenes de Antequera', 60, 90, b='no', c='mon', n='무료입니다. 엘 로메랄은 조금 떨어져 있습니다.|Free; El Romeral is a short way off.'),
          H('엘 토르칼', 'El Torcal', '석회암이 깎여 쌓인 접시처럼 기묘하게 솟은 바위 들판으로, 표시된 산책로를 걷습니다.', 'A field of limestone weathered into strange stacked shapes, explored on waymarked trails.', 'El Torcal de Antequera', 120, 180, group=DAY, b='no', n='시내에서 차로 약 20분이고 대중교통이 거의 없습니다.|About 20 min by car; there is almost no public transport.'),
          H('안테케라 알카사바', 'Alcazaba of Antequera', '언덕 위 이슬람 시대 성채로, 탑에서 시내와 연인의 바위가 보입니다.', 'The hilltop Islamic-era fortress; its tower looks over the town to the Lovers’ Rock.', 'Alcazaba de Antequera', 45, 60),
          H('산타 마리아 라 마요르 성당', 'Royal Collegiate Church of Santa María la Mayor', '알카사바 바로 아래의 16세기 르네상스 성당입니다.', 'The 16th-century Renaissance church just below the Alcazaba.', 'Real Colegiata de Santa María la Mayor Antequera', 20, 30),
          H('카미니토 델 레이', 'Caminito del Rey', '협곡 절벽에 매단 보행로로, 안테케라에서 가깝습니다.', 'The walkway pinned to the walls of a gorge, close to Antequera.', 'Caminito del Rey', 240, 300, group=DAY, b='req', n='입장 시간 지정 예약제입니다. 안테케라에서 차로 약 40분입니다.|Timed tickets must be booked; about 40 min by car from Antequera.'),
      ],
      hubs="    air: [AGP()],\n    rail: [['Antequera-Santa Ana', '안테케라 산타아나역', 'AVE, 시내까지 택시 약 15분|AVE; about 15 min by taxi to town'], ['Antequera', '안테케라역', '지역 열차|regional trains']],\n    bus: [['Estación de Autobuses de Antequera', '안테케라 버스터미널']],\n",
      itinerary={'days': [['', 1, 3, 4]], 'trips': [['엘 토르칼|El Torcal', 2], ['카미니토 델 레이|Caminito del Rey', 5]]},
      season='봄·가을이 걷기 좋고, 한여름 낮은 매우 덥습니다.|Spring and autumn are best; midsummer days are very hot.',
      stay=[ST('구시가', 'Old town', 'Calle Infante Don Fernando Antequera', FIRST, '알카사바와 성당이 걸어서 닿고 버스터미널이 가깝습니다.|The Alcazaba and churches on foot, close to the bus station.')],
      routes=[(RC, RA, R('malaga', 'antequera', 'train', 30, "fb: '안테케라 산타아나역|Antequera-Santa Ana', n: AVE") + R('granada', 'antequera', 'train', 45, "fb: '안테케라 산타아나역|Antequera-Santa Ana', n: AVE"))],
      transit=dict(modes=['walk', 'taxi'], ko='시내는 걸어서 다닙니다. 엘 토르칼은 차나 택시가 편합니다.', en='Walk the town; a car or taxi is easiest for El Torcal.'),
      apps=REN, daytrips=[('malaga', trip('antequera', '버스로 약 1시간. 세계유산 고인돌과 알카사바를 보고, 차가 있으면 엘 토르칼에 들릅니다.|About 1 hr by bus: the World Heritage dolmens and the Alcazaba, plus El Torcal if you have a car.'))]),
    # —— Aragon ——
    C(id='huesca', group_title='아라곤', after='zaragoza', ko='우에스카', en='Huesca', native='Huesca', lat=42.1361, lng=-0.4087,
      blurb=['피레네산맥 남쪽 기슭의 도시로, 고딕 대성당과 로마네스크 회랑이 있습니다. 근교의 로아레 성, 중세 마을 아인사, 오르데사 국립공원으로 가는 거점입니다.',
             'A city in the southern foothills of the Pyrenees with a Gothic cathedral and a Romanesque cloister, and the base for Loarre Castle, the medieval village of Aínsa and the Ordesa National Park.'],
      highlights=[
          H('우에스카 대성당', 'Huesca Cathedral', '구시가 언덕 위 고딕 대성당으로, 설화석고 제단 장식과 탑 전망이 볼거리입니다.', 'The Gothic cathedral on the old-town hill, with an alabaster altarpiece and views from the tower.', 'Catedral de Huesca', 45, 60),
          H('산 페드로 엘 비에호', 'San Pedro el Viejo', '로마네스크 회랑이 남은 옛 수도원 성당으로, 아라곤 왕 두 명이 묻혀 있습니다.', 'A former monastery church with a Romanesque cloister, burial place of two kings of Aragon.', 'San Pedro el Viejo Huesca', 30, 45),
          H('로아레 성', 'Loarre Castle', '11세기 로마네스크 성으로, 스페인에서 가장 잘 남은 로마네스크 성 가운데 하나입니다.', 'An 11th-century Romanesque castle, one of the best preserved in Spain.', 'Castillo de Loarre', 120, 180, group=DAY, n='우에스카에서 차로 약 40분입니다.|About 40 min by car from Huesca.'),
          H('아인사', 'Aínsa', '언덕 위 성과 아케이드 광장이 남은 중세 마을로, 피레네 산맥이 보입니다.', 'A hilltop medieval village with a castle and arcaded square, looking out to the Pyrenees.', 'Aínsa', 180, 240, group=DAY, b='no', n='우에스카에서 차로 약 1시간 30분입니다.|About 1 hr 30 by car from Huesca.'),
          H('오르데사 이 몬테 페르디도 국립공원', 'Ordesa y Monte Perdido National Park', '피레네의 깊은 빙하 계곡 국립공원으로, 프랑스 쪽과 함께 세계유산입니다. 폭포를 따라 걷는 계곡 길이 인기입니다.', 'The Pyrenean national park of deep glacial valleys, a World Heritage Site together with the French side; the valley path past its waterfalls is popular.', 'Pradera de Ordesa', 360, 480, group=DAY, b='no', n='우에스카에서 차로 약 2시간이고 여름엔 토를라에서 셔틀버스로만 들어갑니다.|About 2 hr by car from Huesca; in summer access is by shuttle bus from Torla.'),
      ],
      hubs="    air: [['Zaragoza (ZAZ)', '사라고사 공항 (ZAZ)', '사라고사|Zaragoza'], MAD()],\n    rail: [['Huesca', '우에스카역']],\n    bus: [['Estación Intermodal de Huesca', '우에스카 버스터미널']],\n",
      itinerary={'days': [['', 1, 2]], 'trips': [['로아레 성|Loarre', 3], ['아인사|Aínsa', 4], ['오르데사 국립공원|Ordesa', 5]]},
      season='오르데사 산행은 6~9월이 좋고, 8월엔 산 로렌소 축제가 열립니다.|June–September is best for Ordesa; the San Lorenzo fiestas are in August.',
      stay=[ST('구시가 아래 중심가', 'Centre', 'Coso Alto Huesca', FIRST, '대성당과 기차·버스역이 걸어서 닿습니다. 산과 마을은 차로 다닙니다.|The cathedral and the rail and bus station on foot; drive to the mountains and villages.')],
      routes=[(RC, RA, R('zaragoza', 'huesca', 'train', 60))],
      transit=dict(modes=['walk', 'bus', 'taxi'], ko='시내는 걸어서 다니고, 근교 성과 산은 차가 편합니다.', en='Walk the town; a car is easiest for the castles and mountains.'),
      apps=REN),
    # —— Catalonia ——
    C(id='cadaques', group_title='카탈루냐', after='girona', ko='카다케스', en='Cadaqués', native='Cadaqués', lat=42.2886, lng=3.2779,
      blurb=['코스타 브라바 끝 크레우스곶 반도의 하얀 어촌 마을로, 바로 옆 포르트이가트에 살바도르 달리의 집이 있습니다. 바다 위 언덕에 하얀 성당이 서 있고, 피카소 등 많은 화가가 머물렀습니다.',
             'A whitewashed fishing village on the Cap de Creus peninsula at the end of the Costa Brava, with Salvador Dalí’s house at neighbouring Portlligat, a white church above the bay and a long line of painters who stayed, Picasso among them.'],
      highlights=[
          H('포르트이가트 달리의 집', 'Salvador Dalí House-Museum, Portlligat', '달리가 어부 오두막 여러 채를 이어 만든 집으로, 작업실과 달걀 조각이 올라간 정원을 소규모 그룹으로 봅니다.', 'The home Dalí built by joining fishermen’s huts, with his studio and the egg-topped garden, visited in small groups.', 'Casa-Museu Salvador Dalí Portlligat', 60, 75, b='req', n='시간 지정 예약이 필수이며 겨울 일부 기간은 쉽니다.|Timed booking is required; closed for part of the winter.'),
          H('산타 마리아 성당', 'Church of Santa Maria', '마을 꼭대기의 하얀 성당으로, 안에 화려한 바로크 제단이 있습니다.', 'The white church at the top of the village, with an elaborate Baroque altarpiece.', 'Església de Santa Maria Cadaqués', 15, 20, b='no'),
          H('구시가와 만', 'Old town & bay', '하얀 집과 자갈 골목이 바닷가로 내려가는 마을로, 해안 산책로가 이어집니다.', 'Whitewashed houses and cobbled lanes running down to the bay, with a coastal path.', 'Cadaqués', 60, 90, b='no', n=FREE),
          H('크레우스곶', 'Cap de Creus', '스페인 본토 가장 동쪽 끝의 바위 곶 자연공원으로, 등대에서 해돋이를 봅니다.', 'The rocky cape at the easternmost point of mainland Spain, a natural park; watch the sunrise from the lighthouse.', 'Cap de Creus', 90, 120, b='no', n='마을에서 차로 약 15분이고, 여름엔 차량 통행을 제한하기도 합니다.|About 15 min by car; car access may be restricted in summer.'),
          H('산 페레 데 로데스 수도원', 'Sant Pere de Rodes', '바다를 내려다보는 산비탈의 로마네스크 수도원입니다.', 'A Romanesque monastery on a mountainside high above the sea.', 'Monestir de Sant Pere de Rodes', 90, 120, group=DAY, c='mon', n='카다케스에서 차로 약 30분입니다.|About 30 min by car from Cadaqués.'),
      ],
      hubs="    air: [['Girona (GRO)', '지로나 공항 (GRO)', '지로나|Girona'], BCN()],\n    bus: [['Cadaqués bus station', '카다케스 버스 정류장', '바르셀로나·피게레스행|to Barcelona, Figueres']],\n",
      itinerary={'days': [['', 3, 2, 1, 4]], 'trips': [['산 페레 데 로데스|Sant Pere de Rodes', 5]]},
      season='6~9월이 바다 철이지만 7~8월은 몹시 붐빕니다. 봄·가을이 한적합니다.|June–September is sea season, but July–August is very crowded; spring and autumn are quieter.',
      stay=[ST('마을 중심', 'Village centre', 'Cadaqués', FIRST, '바닷가와 골목이 걸어서 닿고, 포르트이가트까지 걸어서 약 20분입니다.|The seafront and lanes on foot, about 20 min’s walk to Portlligat.')],
      routes=[(RC, RA, R('barcelona', 'cadaques', 'bus', 165, "n: '모벤티스 사르파 버스|Moventis Sarfa bus'") + R('girona', 'cadaques', 'bus', 110))],
      transit=dict(modes=['walk', 'bus'], ko='마을은 걸어서 다닙니다. 크레우스곶은 차나 여름 꼬마 기차를 이용합니다.', en='Walk the village; use a car or the summer road train for Cap de Creus.'),
      apps=''),
    # —— Valencian Community ——
    C(id='peniscola', group_title='발렌시아 지방', after='valencia', ko='페니스콜라', en='Peñíscola', native='Peníscola', lat=40.3593, lng=0.4057,
      blurb=['바다로 튀어나온 바위 위 성채 마을로, 템플 기사단이 지은 성에 대립 교황 베네딕토 13세가 머물렀습니다. 성벽 안 하얀 골목과 양쪽의 긴 해변이 있습니다.',
             'A walled village on a rock jutting into the sea, whose Templar castle was home to the antipope Benedict XIII; white lanes fill the walls, with long beaches on either side.'],
      highlights=[
          H('파파 루나 성', 'Papa Luna Castle', '템플 기사단이 지은 성으로, 대립 교황 베네딕토 13세(파파 루나)가 말년을 보냈습니다. 성벽 위에서 지중해가 펼쳐집니다.', 'The castle built by the Templars, where the antipope Benedict XIII (Papa Luna) spent his last years; the walls look over the Mediterranean.', 'Castillo de Peñíscola', 60, 90),
          H('성벽 안 구시가', 'Old town inside the walls', '바위 위 하얀 집과 계단 골목이 성까지 이어지는 성채 마을입니다.', 'White houses and stepped lanes climbing the rock to the castle.', 'Casco Antiguo Peñíscola', 45, 60, b='no', n=FREE),
          H('부파도르', 'El Bufador', '파도가 칠 때 바위틈으로 물이 솟구치는 해식 동굴입니다.', 'A sea cave where waves spout up through a gap in the rock.', 'El Bufador Peñíscola', 10, 15, b='no', n=FREE),
          H('북쪽 해변', 'Playa Norte', '성채 마을 북쪽으로 길게 이어진 모래 해변입니다.', 'The long sandy beach running north from the walled village.', 'Playa Norte Peñíscola', 60, 180, b='no', n=FREE),
          H('이르타 산맥 자연공원', 'Serra d’Irta Natural Park', '개발되지 않은 해안 산책로가 이어진 자연공원으로, 작은 만과 망루가 있습니다.', 'A natural park with an undeveloped coastal path, small coves and watchtowers.', 'Serra d’Irta', 120, 180, b='no', n=FREE),
      ],
      hubs="    air: [['Castellón (CDT)', '카스테욘 공항 (CDT)', '운항편 적음|few flights'], ['Valencia (VLC)', '발렌시아 공항 (VLC)', '발렌시아|Valencia']],\n    rail: [['Benicarló-Peñíscola', '베니카를로-페니스콜라역', '마을까지 약 7km, 버스나 택시|about 7 km to the village, bus or taxi']],\n",
      itinerary=[2, 1, 3, 4, 5],
      season='6~9월이 해변 철이고, 봄·가을이 한적합니다.|June–September is beach season; spring and autumn are quieter.',
      stay=[ST('북쪽 해변', 'Playa Norte', 'Playa Norte Peñíscola', FIRST, '해변 앞 호텔이 많고 성채 마을까지 걸어서 닿습니다.|Plenty of beachfront hotels, with the walled village on foot.')],
      routes=[(RC, RA, R('valencia', 'peniscola', 'train', 90, "fb: '베니카를로-페니스콜라역|Benicarló-Peñíscola'") + R('barcelona', 'peniscola', 'train', 150, "...R, fa: SANTS, fb: '베니카를로-페니스콜라역|Benicarló-Peñíscola'"))],
      transit=dict(modes=['walk', 'bus', 'taxi'], ko='마을과 해변은 걸어서 다닙니다. 역까지는 버스나 택시를 탑니다.', en='Walk the village and beach; take a bus or taxi to the station.'),
      apps=REN),
    # —— La Rioja ——
    C(id='santo-domingo-de-la-calzada', group_title='라리오하', after='logrono', ko='산토도밍고 데 라 칼사다', en='Santo Domingo de la Calzada', native='Santo Domingo de la Calzada', lat=42.4407, lng=-2.9533,
      blurb=['순례자를 위해 길과 다리를 놓은 성인 도밍고의 이름을 딴 순례길 마을로, 대성당 안에 산 닭 한 쌍을 기르는 ‘닭의 기적’ 전설로 유명합니다. 근교의 유소·수소 수도원은 스페인어의 요람으로 불립니다.',
             'A Camino town named after St Dominic, who built roads and bridges for pilgrims, famous for the legend of the cockerel and hen still kept alive inside its cathedral; nearby, the monasteries of Yuso and Suso are called the cradle of the Spanish language.'],
      highlights=[
          H('산토도밍고 대성당과 닭장', 'Cathedral & hen coop', '대성당 안 고딕 닭장에 살아 있는 닭 한 쌍을 기르는데, 억울하게 교수형을 당한 순례자를 살린 전설에서 비롯됐습니다. 성인의 무덤과 따로 선 종탑도 있습니다.', 'Inside the cathedral a Gothic coop houses a live cockerel and hen, recalling the legend of a hanged pilgrim saved by a miracle; see too the saint’s tomb and the free-standing bell tower.', 'Catedral de Santo Domingo de la Calzada', 45, 60),
          H('구시가와 성벽', 'Old town & walls', '순례길이 가로지르는 중세 마을로, 성벽 일부와 순례자 숙소가 남아 있습니다.', 'The medieval town crossed by the Camino, with stretches of wall and pilgrim hostels.', 'Calle Mayor Santo Domingo de la Calzada', 30, 45, b='no', n=FREE),
          H('유소·수소 수도원', 'Monasteries of Yuso and Suso', '산 미얀 데 라 코고야의 두 수도원으로, 스페인어로 쓴 가장 오래된 글이 이곳에서 나와 ‘스페인어의 요람’이라 불립니다. 유네스코 세계유산입니다.', 'The twin monasteries of San Millán de la Cogolla, where some of the earliest written Spanish was found, hence “the cradle of Spanish”; a UNESCO World Heritage Site.', 'Monasterio de Yuso', 150, 180, group=DAY, b='rec', c='mon', n='가이드 투어로 들어가며, 차로 약 25분입니다.|Visits are by guided tour; about 25 min by car.'),
      ],
      hubs="    air: [['Bilbao (BIO)', '빌바오 공항 (BIO)', '빌바오|Bilbao']],\n    bus: [['Santo Domingo bus stop', '산토도밍고 버스 정류장', '로그로뇨·부르고스행|to Logroño, Burgos']],\n",
      itinerary={'days': [['', 1, 2]], 'trips': [['유소·수소 수도원|Yuso & Suso', 3]]},
      season='봄·가을이 걷기 좋고, 5월 중순엔 성인 축제가 열립니다.|Spring and autumn are best for walking; the saint’s fiestas are in mid-May.',
      stay=[ST('대성당 주변', 'Around the cathedral', 'Plaza del Santo Santo Domingo de la Calzada', FIRST, '대성당과 순례자 숙소가 모여 있고, 성당 앞에 파라도르가 있습니다.|The cathedral and pilgrim hostels, with a Parador facing the church.')],
      routes=[(RC, RA, R('logrono', 'santo-domingo-de-la-calzada', 'bus', 45) + R('burgos', 'santo-domingo-de-la-calzada', 'bus', 60))],
      transit=dict(modes=['walk', 'bus'], ko='마을은 걸어서 다닙니다. 수도원은 차가 편합니다.', en='Walk the town; a car is easiest for the monasteries.'),
      apps=ALSA),
]


def murcia_group():
    s = rd('countries.ts')
    for cid in ('murcia', 'cartagena'):
        s = re.sub(rf"(\{{ title: \{{ ko: '발렌시아 지방'[^\]]*?), '{cid}'", r'\1', s)
    anchor = "      { title: { ko: '나바라', en: 'Navarre' }"
    assert s.count(anchor) == 1
    s = s.replace(anchor, "      { title: { ko: '무르시아', en: 'Region of Murcia' }, cityIds: ['murcia', 'cartagena'] },\n" + anchor)
    wr('countries.ts', s)


if __name__ == '__main__':
    T.CITIES = CITIES
    T.main()
    murcia_group()
