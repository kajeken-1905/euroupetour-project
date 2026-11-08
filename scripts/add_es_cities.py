#!/usr/bin/env python3
"""Spain step 2 (2026-11-08, user picked all sixteen options; León and Burgos as two cities, Baeza inside Úbeda):
León, Burgos, Logroño, Pamplona, Santander, Oviedo, Teruel, Cáceres, Mérida, Úbeda, Jerez, Tarifa, Almería, Alicante,
Ibiza, Menorca, Tenerife. Times from Transitous where it had data (Madrid–Oviedo/Pamplona/Alicante/Mérida/Cáceres,
Granada–Almería, Mérida–Cáceres, Valencia–Teruel …), otherwise the operators' usual timings, rounded.
Cities go into existing region groups first; the Spain groups are rewritten at the end. Run once."""
import re
import add_daytrip_places3 as T
from add_daytrip_places3 import trip
from add_daytrip_places import rd, wr
from add_slovakia_cities import H

DAY = ('근교 당일치기', 'Day trip')
RA = "      ta('renfe'),\n      ta('alsa'),\n"
RC = 'routes-central.ts'
R_AFTER = r"^  r\('santiago', 'porto', 'bus', 240\),\n"
VA = r"^  'santiago-h7': v\(.*\),\n"
MAD = 'MAD()'
COMMON = dict(hubs_file='hubs-central.ts', hubs_before='  seville: {\n', itin_file='itinerary-iberia.ts', itin_before='  segovia: ',
              visit_file='visit-iberia.ts', visit_after=VA, stay_before='  seville: [', transit_before='  seville: {', places=None)


def C(**k):
    d = dict(COMMON)
    d.update(k)
    return d


def r(a, b, mode, mins, opts=''):
    return (RC, R_AFTER, f"  r('{a}', '{b}', '{mode}', {mins}{', ' + opts if opts else ''}),\n")


def stay1(ko, en, q, why):
    return [(ko, en, q, '처음 가는 여행에 추천|Best for a first visit', why)]


CITIES = [
    C(id='leon', country='es', group_title='카스티야 이 레온', after='salamanca', ko='레온', en='León', native='León', lat=42.5987, lng=-5.5671,
      blurb=['산티아고 순례길의 큰 거점 도시. 스테인드글라스가 벽을 대신한 고딕 대성당과 로마네스크 벽화의 산 이시도로, 가우디의 카사 보티네스가 있고, 바리오 우메도에선 술을 시키면 타파스가 따라 나옵니다.',
             'A major stop on the Camino de Santiago—a Gothic cathedral whose walls are mostly stained glass, the Romanesque frescoes of San Isidoro and Gaudí’s Casa Botines; in the Barrio Húmedo, tapas come free with a drink.'],
      highlights=[
          H('레온 대성당', 'León Cathedral', '약 1,800㎡의 중세 스테인드글라스가 벽을 채운 13세기 고딕 대성당으로, ‘빛의 집’이라 불립니다.', 'The 13th-century Gothic cathedral whose walls are filled with some 1,800 m² of medieval stained glass—the “House of Light”.', 'Catedral de León', 60, 90),
          H('산 이시도로 성당과 왕실 판테온', 'Basilica of San Isidoro & Royal Pantheon', '레온 왕들의 묘소 천장을 12세기 로마네스크 벽화가 덮어 ‘로마네스크의 시스티나 성당’이라 불립니다.', 'The tombs of León’s kings under 12th-century Romanesque frescoes, called the “Sistine Chapel of Romanesque art”.', 'Real Colegiata de San Isidoro León', 60, 75),
          H('카사 보티네스', 'Casa Botines', '가우디가 지은 네오고딕 저택으로, 안에 가우디 박물관이 있습니다.', 'Gaudí’s neo-Gothic mansion, now a museum about him.', 'Casa Botines León', 45, 60),
          H('바리오 우메도', 'Barrio Húmedo', '마요르 광장 주변 술집 골목으로, 술 한 잔에 타파스를 공짜로 얹어 주는 곳이 많습니다.', 'The bar quarter around Plaza Mayor, where many places give a free tapa with each drink.', 'Barrio Húmedo León', 60, 120),
          H('산 마르코스', 'San Marcos', '순례자 병원이던 16세기 수도원으로, 100m 길이의 플라테레스크 정면이 강가에 펼쳐집니다.', 'The 16th-century monastery and former pilgrims’ hospital, with a 100 m Plateresque façade by the river.', 'Parador de San Marcos León', 20, 30),
      ],
      hubs="    air: [" + MAD + "],\n    rail: [['León', '레온역']],\n    bus: [['Estación de Autobuses de León', '레온 버스터미널']],\n",
      itinerary=[1, 3, 2, 4, 5],
      season='6월 말 산 후안·산 페드로 축제와 성주간 행렬이 유명합니다. 겨울은 춥고 건조합니다.|Known for its Holy Week processions and the San Juan and San Pedro fiestas in late June; winters are cold and dry.',
      stay=stay1('구시가', 'Old town', 'Barrio Húmedo León', '대성당과 바리오 우메도가 걸어서 닿고 역까지 걸어서 약 20분입니다.|The cathedral and the Barrio Húmedo on foot, about 20 min’s walk from the station.'),
      routes=[r('madrid', 'leon', 'train', 125, "{ ...R, fa: CHAMARTIN, n: AVE }")],
      transit=dict(modes=['walk', 'bus'], ko='구시가는 걸어서 다닙니다.', en='Walk the old town.'), apps=RA, daytrips=[]),
    C(id='burgos', country='es', group_title='카스티야 이 레온', after='leon', ko='부르고스', en='Burgos', native='Burgos', lat=42.3439, lng=-3.6969,
      blurb=['카스티야 왕국의 옛 수도이자 순례길 도시. 세계유산 고딕 대성당과 엘 시드의 무덤, 근처 아타푸에르카에서 나온 인류 화석을 보여 주는 인류 진화 박물관이 있습니다.',
             'The old capital of Castile on the Camino—its World Heritage Gothic cathedral holds El Cid’s tomb, and the Museum of Human Evolution shows fossils from nearby Atapuerca.'],
      highlights=[
          H('부르고스 대성당', 'Burgos Cathedral', '레이스처럼 뚫린 첨탑과 화려한 예배당들이 있는 고딕 대성당으로, 엘 시드가 묻혀 있는 세계유산입니다.', 'The Gothic cathedral of lace-like spires and lavish chapels, burial place of El Cid—a World Heritage site.', 'Catedral de Burgos', 90, 120),
          H('산타 마리아 문', 'Arco de Santa María', '카를로스 5세를 기리는 조각으로 꾸민 옛 성문으로, 강가에서 대성당으로 들어가는 입구입니다.', 'The old city gate decorated with statues honouring Charles V, the riverside entrance to the cathedral quarter.', 'Arco de Santa María Burgos', 15, 20),
          H('인류 진화 박물관', 'Museum of Human Evolution', '근처 아타푸에르카 유적에서 나온 유럽 최고(最古)급 인류 화석과 진화 과정을 보여 줍니다.', 'Fossils from the nearby Atapuerca sites—among Europe’s oldest humans—and the story of evolution.', 'Museo de la Evolución Humana Burgos', 90, 120, c='mon'),
          H('미라플로레스 수도원', 'Cartuja de Miraflores', '시 외곽의 카르투시오 수도원으로, 금박 제단과 왕실 묘가 있습니다.', 'The Carthusian monastery outside town, with a gilded altarpiece and royal tombs.', 'Cartuja de Miraflores', 45, 60,
            n='시내에서 걸어서 약 45분입니다.|About 45 min’s walk from the centre.'),
          H('성 전망대', 'Castle viewpoint', '성터 언덕의 전망대로, 대성당 첨탑과 시내가 내려다보입니다.', 'The viewpoint on the castle hill, looking down on the cathedral spires and town.', 'Mirador del Castillo Burgos', 30, 45),
      ],
      hubs="    air: [" + MAD + "],\n    rail: [['Burgos Rosa de Lima', '부르고스 로사 데 리마역', '시내까지 버스로 약 15분|about 15 min by bus to the centre']],\n    bus: [['Estación de Autobuses de Burgos', '부르고스 버스터미널']],\n",
      itinerary=[2, 1, 5, 3, 4],
      season='여름에도 저녁엔 선선하고 겨울은 매우 춥습니다. 6월 말 산 페드로 축제가 큽니다.|Evenings are cool even in summer and winters are very cold; the San Pedro fiesta in late June is the biggest.',
      stay=stay1('대성당 주변 구시가', 'Old town by the cathedral', 'Plaza Mayor Burgos', '대성당과 강변이 걸어서 닿습니다. 기차역은 시 외곽이라 버스나 택시를 탑니다.|The cathedral and riverside on foot; the station is out of town, so take a bus or taxi.'),
      routes=[r('madrid', 'burgos', 'train', 95, "{ ...R, fa: CHAMARTIN, fb: '부르고스 로사 데 리마역|Burgos Rosa de Lima', n: AVE }"),
              r('leon', 'burgos', 'train', 115, "{ fb: '부르고스 로사 데 리마역|Burgos Rosa de Lima' }"),
              r('burgos', 'bilbao', 'bus', 120)],
      transit=dict(modes=['walk', 'bus'], ko='구시가는 걸어서 다닙니다. 역에서 시내는 버스로 갑니다.', en='Walk the old town; buses link the station to the centre.'), apps=RA, daytrips=[]),
    C(id='logrono', country='es', group_title='아라곤', after='zaragoza', ko='로그로뇨', en='Logroño', native='Logroño', lat=42.4627, lng=-2.4450,
      blurb=['스페인 대표 와인 산지 라 리오하의 중심 도시. 라우렐 거리의 핀초 바를 돌고, 시내와 하로·엘시에고의 와이너리에서 리오하 와인을 맛봅니다.',
             'The capital of La Rioja, Spain’s best-known wine region—hop between the pintxo bars of Calle Laurel and taste Rioja at wineries in town and in Haro and Elciego.'],
      highlights=[
          H('라우렐 거리', 'Calle Laurel', '좁은 골목에 핀초 바가 빽빽하고, 가게마다 대표 메뉴 하나씩을 리오하 와인과 곁들여 먹습니다.', 'A narrow lane packed with pintxo bars, each with its signature bite to go with a glass of Rioja.', 'Calle Laurel Logroño', 90, 150),
          H('산타 마리아 데 라 레돈다 공동 대성당', 'Co-Cathedral of Santa María de la Redonda', '쌍둥이 바로크 탑이 선 대성당으로, 미켈란젤로 작품으로 전해지는 십자가 그림이 있습니다.', 'The twin-towered Baroque co-cathedral, holding a Crucifixion attributed to Michelangelo.', 'Concatedral de Santa María de la Redonda', 20, 30),
          H('프랑코 에스파뇰라스 와이너리', 'Bodegas Franco-Españolas', '에브로강 건너 시내에 있는 1890년 와이너리로, 셀러 투어 뒤 리오하 와인을 시음합니다.', 'An 1890 winery just across the Ebro in town—cellar tour, then a Rioja tasting.', 'Bodegas Franco-Españolas Logroño', 75, 90, b='rec'),
          H('하로 역 지구 와이너리', 'Haro’s Barrio de la Estación', '기차역 주변에 100년 넘은 와이너리들이 모인 리오하 와인의 중심지입니다.', 'Rioja’s heartland, where century-old wineries cluster around the railway station.', 'Barrio de la Estación Haro', 180, 240, group=DAY, b='req',
            n='로그로뇨에서 기차나 버스로 약 40분이며, 와이너리 투어는 예약제입니다.|About 40 min from Logroño by train or bus; winery tours are by reservation.'),
          H('마르케스 데 리스칼', 'Marqués de Riscal', '프랭크 게리의 티타늄 호텔이 포도밭 위에 선 엘시에고의 와이너리입니다.', 'The Elciego winery crowned by Frank Gehry’s titanium hotel above the vines.', 'Marqués de Riscal Elciego', 120, 150, group=DAY, b='req',
            n='로그로뇨에서 차로 약 30분입니다.|About 30 min by car from Logroño.'),
      ],
      hubs="    air: [['Bilbao (BIO)', '빌바오 공항 (BIO)', '빌바오|Bilbao']],\n    rail: [['Logroño', '로그로뇨역']],\n    bus: [['Estación de Autobuses de Logroño', '로그로뇨 버스터미널']],\n",
      itinerary=[2, 3, 1, 4, 5],
      season='9월 하순 포도 수확 축제(산 마테오)가 가장 큽니다. 라우렐 거리는 저녁 8시 이후에 붐빕니다.|The San Mateo grape-harvest fiesta in late September is the biggest; Calle Laurel fills up after 8 pm.',
      stay=stay1('구시가', 'Old town', 'Calle Laurel Logroño', '라우렐 거리와 대성당이 걸어서 닿고 역까지 걸어서 약 15분입니다.|Calle Laurel and the cathedral on foot, about 15 min’s walk from the station.'),
      routes=[r('bilbao', 'logrono', 'bus', 100), r('madrid', 'logrono', 'train', 200, "{ n: '직통 열차는 하루 몇 편뿐입니다|only a few direct trains a day' }")],
      transit=dict(modes=['walk', 'bus', 'train'], ko='시내는 걸어서 다닙니다. 하로까지는 기차나 버스, 엘시에고는 차가 편합니다.', en='Walk the town; take a train or bus to Haro, and a car is easiest for Elciego.'), apps=RA,
      daytrips=[('bilbao', trip('logrono', '버스로 약 1시간 40분. 시내 와이너리를 보고 저녁 라우렐 거리 핀초 바를 돕니다.|About 1 hr 40 by bus: a winery in town, then the pintxo bars of Calle Laurel in the evening.'))]),
    C(id='pamplona', country='es', group_title='바스크', after='san-sebastian', ko='팜플로나', en='Pamplona', native='Pamplona / Iruña', lat=42.8125, lng=-1.6458,
      blurb=['나바라의 중심 도시. 7월 산 페르민 축제 때 황소가 골목을 달리고, 헤밍웨이가 사랑한 카페와 성벽, 별 모양 성채가 남아 있습니다.',
             'Navarre’s capital—bulls run through the streets during July’s San Fermín, and Hemingway’s favourite café, the city walls and a star-shaped citadel remain.'],
      highlights=[
          H('카스티요 광장과 카페 이루냐', 'Plaza del Castillo & Café Iruña', '도시의 거실 같은 광장으로, 헤밍웨이가 드나든 1888년 카페 이루냐가 있습니다.', 'The city’s living-room square, home to the 1888 Café Iruña that Hemingway frequented.', 'Café Iruña Pamplona', 30, 45),
          H('엔시에로 길', 'Encierro route', '산 페르민 때 황소가 달리는 약 850m 길로, 에스타페타 거리를 지나 투우장까지 이어집니다.', 'The roughly 850 m bull-run route of San Fermín, along Calle Estafeta to the bullring.', 'Calle Estafeta Pamplona', 30, 45),
          H('팜플로나 대성당', 'Pamplona Cathedral', '신고전주의 정면 뒤에 고딕 회랑과 나바라 왕의 묘가 있는 대성당입니다.', 'Behind a Neoclassical front, a Gothic cloister and the tombs of Navarre’s kings.', 'Catedral de Pamplona', 45, 60, c='sun'),
          H('성채와 성벽 길', 'Citadel & city walls', '16세기 별 모양 성채 공원과 구시가를 감싼 성벽 위 산책로입니다.', 'The 16th-century star-shaped citadel park and the walk along the old-town walls.', 'Ciudadela de Pamplona', 60, 90),
      ],
      hubs="    air: [['Pamplona (PNA)', '팜플로나 공항 (PNA)'], ['Bilbao (BIO)', '빌바오 공항 (BIO)', '빌바오|Bilbao']],\n    rail: [['Pamplona-Iruña', '팜플로나역', '시내까지 버스로 약 15분|about 15 min by bus to the centre']],\n    bus: [['Estación de Autobuses de Pamplona', '팜플로나 버스터미널']],\n",
      itinerary=[1, 2, 3, 4],
      season='7월 6~14일 산 페르민 축제 때는 숙소값이 몇 배로 뛰고 일찍 동납니다.|During San Fermín (6–14 July) hotel prices multiply and rooms sell out early.',
      stay=stay1('구시가', 'Old town', 'Casco Antiguo Pamplona', '광장과 성벽이 걸어서 닿고 버스터미널까지 걸어서 약 10분입니다.|The square and walls on foot, about 10 min’s walk from the bus station.'),
      routes=[r('madrid', 'pamplona', 'train', 195, "{ ...R, fa: ATOCHA, fb: '팜플로나역|Pamplona-Iruña' }"), r('san-sebastian', 'pamplona', 'bus', 85)],
      transit=dict(modes=['walk', 'bus'], ko='구시가는 걸어서 다닙니다. 역은 강 건너라 버스를 탑니다.', en='Walk the old town; the station is across the river, so take a bus.'), apps=RA,
      daytrips=[("'san-sebastian'", trip('pamplona', '버스로 약 1시간 20분. 구시가 성벽과 엔시에로 길을 걷고 카페 이루냐에 들릅니다.|About 1 hr 20 by bus: the walls, the bull-run route and Café Iruña.'))]),
    C(id='santander', country='es', group_title='바스크', after='pamplona', ko='산탄데르', en='Santander', native='Santander', lat=43.4623, lng=-3.8099,
      blurb=['칸타브리아 해안의 우아한 휴양 도시. 왕실 여름 별궁 막달레나 궁전과 사르디네로 해변이 있고, 근처 산티야나 델 마르에서 알타미라 동굴 벽화의 복제 동굴을 봅니다.',
             'Cantabria’s elegant seaside city—the royal summer palace of La Magdalena and El Sardinero beach, with the Altamira cave-painting replica near Santillana del Mar.'],
      highlights=[
          H('막달레나 궁전', 'Magdalena Palace', '반도 끝 언덕에 선 20세기 초 왕실 여름 별궁으로, 둘레 공원에서 바다가 보입니다.', 'The early-20th-century royal summer palace on a headland, its park looking out to sea.', 'Palacio de la Magdalena', 60, 90),
          H('사르디네로 해변', 'El Sardinero', '벨 에포크 카지노와 호텔이 늘어선 넓은 모래 해변입니다.', 'The broad sandy beach lined with a Belle Époque casino and hotels.', 'Playa del Sardinero', 60, 120),
          H('보틴 센터', 'Centro Botín', '렌초 피아노가 바다 위에 띄운 듯 지은 미술관으로, 옥상 테라스에서 만이 보입니다.', 'Renzo Piano’s art centre seemingly floating over the bay, with rooftop views.', 'Centro Botín', 60, 90, c='mon'),
          H('산탄데르 대성당', 'Santander Cathedral', '고딕 위층 성당 아래에 로마 목욕탕 유적이 있는 지하 성당이 있습니다.', 'A Gothic upper church above a crypt church built over Roman baths.', 'Catedral de Santander', 30, 45),
          H('알타미라 박물관과 산티야나 델 마르', 'Altamira Museum & Santillana del Mar', '들소 벽화로 유명한 구석기 동굴을 그대로 재현한 동굴과, 돌집이 이어지는 중세 마을입니다.', 'A faithful replica of the Palaeolithic cave famous for its bison paintings, and the medieval stone village next to it.', 'Museo de Altamira', 180, 240, group=DAY, c='mon',
            n='산탄데르에서 버스로 약 40분입니다. 원래 동굴은 보존을 위해 닫혀 있습니다.|About 40 min by bus from Santander; the original cave is closed for conservation.'),
      ],
      hubs="    air: [['Santander Seve Ballesteros (SDR)', '산탄데르 공항 (SDR)']],\n    rail: [['Santander', '산탄데르역']],\n    port: [['Puerto de Santander', '산탄데르 항구', '영국 포츠머스·플리머스행 페리|ferries to Portsmouth and Plymouth']],\n",
      itinerary=[4, 3, 1, 2, 5],
      season='여름에도 선선해 해변 휴가지로 인기입니다. 비가 잦으니 우산을 챙기세요.|Cool even in summer and popular for beach holidays; rain is frequent, so pack an umbrella.',
      stay=stay1('시내 중심과 항구', 'Centre & waterfront', 'Paseo de Pereda Santander', '보틴 센터와 대성당, 역이 걸어서 닿고 사르디네로까지 버스로 약 15분입니다.|Centro Botín, the cathedral and the station on foot; about 15 min by bus to El Sardinero.'),
      routes=[r('bilbao', 'santander', 'bus', 85), r('madrid', 'santander', 'train', 255, "{ ...R, fa: CHAMARTIN }")],
      transit=dict(modes=['walk', 'bus'], ko='중심가는 걸어서, 사르디네로와 막달레나는 시내버스로 갑니다.', en='Walk the centre; city buses go to El Sardinero and La Magdalena.'), apps=RA,
      daytrips=[('bilbao', trip('santander', '버스로 약 1시간 30분. 막달레나 궁전과 사르디네로 해변, 보틴 센터를 봅니다.|About 1 hr 30 by bus: the Magdalena Palace, El Sardinero and Centro Botín.'))]),
    C(id='oviedo', country='es', group_title='갈리시아', after='santiago', ko='오비에도', en='Oviedo', native='Oviedo / Uviéu', lat=43.3614, lng=-5.8494,
      blurb=['아스투리아스의 깔끔한 옛 수도. 세계유산 프레로마네스크 성당들과 대성당의 성유물실이 있고, 사과주 시드라를 머리 위에서 따라 주는 시드레리아 거리가 유명합니다.',
             'Asturias’s tidy old capital—World Heritage pre-Romanesque churches, the cathedral’s Holy Chamber, and cider bars where sidra is poured from above the head.'],
      highlights=[
          H('오비에도 대성당', 'Oviedo Cathedral', '고딕 대성당으로, 9세기 성유물실 ‘카마라 산타’에 순례자들이 찾는 보물이 있습니다.', 'The Gothic cathedral whose 9th-century Cámara Santa holds treasures that drew pilgrims.', 'Catedral de Oviedo', 60, 75),
          H('산타 마리아 델 나랑코', 'Santa María del Naranco', '9세기 왕의 별궁이던 프레로마네스크 건물로, 옆 산 미겔 데 리요와 함께 세계유산입니다.', 'A 9th-century pre-Romanesque royal hall on the hillside, a World Heritage site with neighbouring San Miguel de Lillo.', 'Santa María del Naranco', 45, 60, c='mon'),
          H('가스코나 거리 시드레리아', 'Calle Gascona cider bars', '‘시드라 거리’라 불리는 길로, 종업원이 병을 머리 위로 들어 사과주를 따라 줍니다.', 'The “Cider Boulevard”, where waiters pour sidra from a bottle held high above their heads.', 'Calle Gascona Oviedo', 60, 120),
          H('아스투리아스 미술관', 'Museum of Fine Arts of Asturias', '엘 그레코·고야·피카소 등을 무료로 보는 미술관입니다.', 'A free museum with El Greco, Goya, Picasso and more.', 'Museo de Bellas Artes de Asturias', 60, 90, c='mon'),
          H('코바동가와 피코스 데 에우로파', 'Covadonga & Picos de Europa', '동굴 속 성모 성지와 산정 호수 두 곳이 있는 국립공원으로, 카브랄레스 블루치즈의 고장입니다.', 'The cave shrine and two mountain lakes in the national park—also home of Cabrales blue cheese.', 'Lagos de Covadonga', 300, 480, group=DAY,
            n='오비에도에서 차로 약 1시간 20분입니다. 성수기엔 호수 길에 차가 못 들어가 셔틀버스를 탑니다.|About 1 hr 20 by car from Oviedo; in peak season the lakes road closes to cars and shuttle buses run.'),
      ],
      hubs="    air: [['Asturias (OVD)', '아스투리아스 공항 (OVD)']],\n    rail: [['Oviedo', '오비에도역']],\n    bus: [['Estación de Autobuses de Oviedo', '오비에도 버스터미널']],\n",
      itinerary=[1, 4, 3, 2, 5],
      season='비가 잦은 초록의 지방입니다. 9월 산 마테오 축제와 여름 사과주 축제가 열립니다.|A green, rainy region; the San Mateo fiesta is in September and cider festivals run in summer.',
      stay=stay1('구시가', 'Old town', 'Casco Antiguo Oviedo', '대성당과 시드레리아 거리가 걸어서 닿고 역까지 걸어서 약 15분입니다.|The cathedral and cider bars on foot, about 15 min’s walk from the station.'),
      routes=[r('madrid', 'oviedo', 'train', 215, "{ ...R, fa: CHAMARTIN, n: AVE }"), r('leon', 'oviedo', 'train', 65, "{ n: AVE }"), r('oviedo', 'santander', 'bus', 165)],
      transit=dict(modes=['walk', 'bus'], ko='구시가는 걸어서 다닙니다. 나랑코 성당은 버스나 걸어서 약 30분입니다.', en='Walk the old town; Naranco is a bus ride or about 30 min uphill on foot.'), apps=RA, daytrips=[]),
    C(id='teruel', country='es', group_title='아라곤', after='logrono', ko='테루엘', en='Teruel', native='Teruel', lat=40.3456, lng=-1.1065,
      blurb=['세계유산 무데하르 탑들이 솟은 아라곤 남부의 작은 도시. 이루지 못한 사랑의 ‘테루엘의 연인’ 전설이 전해지고, 근처 알바라신은 스페인에서 손꼽히게 아름다운 마을입니다.',
             'A small southern Aragonese city of World Heritage Mudéjar towers and the tragic legend of the Lovers of Teruel; nearby Albarracín is one of Spain’s loveliest villages.'],
      highlights=[
          H('엘 살바도르 탑', 'Torre de El Salvador', '도자기 타일로 장식한 13세기 무데하르 탑으로, 안의 계단으로 꼭대기까지 오릅니다.', 'A 13th-century Mudéjar tower studded with glazed tiles—climb its inner stairs to the top.', 'Torre de El Salvador Teruel', 30, 45),
          H('테루엘 대성당', 'Teruel Cathedral', '무데하르 탑과, 중세 그림으로 가득한 목조 천장이 있는 세계유산 대성당입니다.', 'A World Heritage cathedral with a Mudéjar tower and a wooden ceiling covered in medieval paintings.', 'Catedral de Teruel', 30, 45),
          H('연인들의 묘당', 'Mausoleum of the Lovers', '전설 속 연인 이사벨과 디에고가 손을 뻗은 모습의 대리석 무덤을 봅니다.', 'The alabaster tomb of the legendary lovers Isabel and Diego, their hands reaching towards each other.', 'Mausoleo de los Amantes Teruel', 30, 45),
          H('토리코 광장', 'Plaza del Torico', '기둥 위 작은 황소 동상이 선 중심 광장입니다.', 'The main square, topped by a tiny bull statue on a column.', 'Plaza del Torico', 15, 20),
          H('알바라신', 'Albarracín', '분홍빛 집들이 절벽 위에 매달린 중세 마을로, 마을을 감싼 성벽 위를 걷습니다.', 'A medieval village of rose-coloured houses clinging to a cliff, ringed by walls you can climb.', 'Albarracín', 180, 240, group=DAY,
            n='테루엘에서 버스(하루 1~2편)나 차로 약 40분입니다.|About 40 min from Teruel by car or by the once- or twice-daily bus.'),
      ],
      hubs="    air: [['Valencia (VLC)', '발렌시아 공항 (VLC)', '발렌시아|Valencia']],\n    rail: [['Teruel', '테루엘역']],\n    bus: [['Estación de Autobuses de Teruel', '테루엘 버스터미널']],\n",
      itinerary=[4, 1, 3, 2, 5],
      season='고원이라 겨울은 매우 춥습니다. 2월 ‘연인들의 축제’에 중세 재현 행사가 열립니다.|High and very cold in winter; the Lovers’ festival in February brings medieval re-enactments.',
      stay=stay1('구시가', 'Old town', 'Plaza del Torico Teruel', '탑과 대성당이 걸어서 닿고 역에서 계단 ‘에스칼리나타’로 올라옵니다.|The towers and cathedral on foot; climb up from the station by the grand staircase.'),
      routes=[r('valencia', 'teruel', 'train', 160), r('zaragoza', 'teruel', 'bus', 140)],
      transit=dict(modes=['walk', 'bus'], ko='구시가는 걸어서 다닙니다. 알바라신은 차가 편합니다.', en='Walk the old town; a car is easiest for Albarracín.'), apps=RA, daytrips=[]),
    C(id='caceres', country='es', group_title='카스티야 이 레온', after='burgos', ko='카세레스', en='Cáceres', native='Cáceres', lat=39.4753, lng=-6.3724,
      blurb=['엑스트레마두라의 성벽 도시. 중세 귀족 저택과 탑이 그대로 남은 구시가는 세계유산이고, ‘왕좌의 게임’ 촬영지이기도 합니다.',
             'Extremadura’s walled city—its old town of medieval noble mansions and towers is a World Heritage site and a Game of Thrones location.'],
      highlights=[
          H('마요르 광장과 별의 문', 'Plaza Mayor & Arco de la Estrella', '성벽 아래 넓은 광장에서 별의 문을 지나 구시가로 들어갑니다.', 'The wide square below the walls, entered into the old town through the Star Arch.', 'Arco de la Estrella Cáceres', 20, 30),
          H('부하코 탑', 'Torre de Bujaco', '이슬람 시대 성벽 탑으로, 위에 오르면 광장과 지붕들이 내려다보입니다.', 'A Moorish-era wall tower; climb it for views over the square and rooftops.', 'Torre de Bujaco', 20, 30),
          H('구시가 골목', 'Old town lanes', '귀족 가문 문장이 새겨진 저택과 성당이 이어지는 돌골목입니다.', 'Stone lanes of mansions bearing noble coats of arms, and churches.', 'Ciudad Monumental Cáceres', 90, 120),
          H('카세레스 박물관', 'Museum of Cáceres', '르네상스 저택 아래에 이슬람 시대 지하 저수조가 남은 박물관입니다.', 'A museum in a Renaissance mansion above a Moorish-era underground cistern.', 'Museo de Cáceres', 45, 60, c='mon'),
          H('트루히요', 'Trujillo', '정복자 피사로의 고향으로, 언덕 위 성과 큰 광장이 있는 마을입니다.', 'The hometown of the conquistador Pizarro, with a hilltop castle and grand square.', 'Plaza Mayor Trujillo', 180, 240, group=DAY,
            n='카세레스에서 버스로 약 45분입니다.|About 45 min by bus from Cáceres.'),
      ],
      hubs="    air: [" + MAD + ", ['Badajoz (BJZ)', '바다호스 공항 (BJZ)', '바다호스|Badajoz']],\n    rail: [['Cáceres', '카세레스역']],\n    bus: [['Estación de Autobuses de Cáceres', '카세레스 버스터미널']],\n",
      itinerary=[1, 2, 3, 4, 5],
      season='7~8월은 40℃ 가까이 덥습니다. 봄과 가을이 걷기에 좋습니다.|July and August can approach 40 °C; spring and autumn are best for walking.',
      stay=stay1('구시가 아래 마요르 광장', 'Plaza Mayor', 'Plaza Mayor Cáceres', '구시가가 걸어서 닿고 역에서는 버스나 택시로 약 10분입니다.|The old town on foot; about 10 min from the station by bus or taxi.'),
      routes=[r('madrid', 'caceres', 'train', 220, "{ fa: ATOCHA }")],
      transit=dict(modes=['walk', 'bus'], ko='구시가는 걸어서 다닙니다.', en='Walk the old town.'), apps=RA, daytrips=[]),
    C(id='merida', country='es', group_title='카스티야 이 레온', after='caceres', ko='메리다', en='Mérida', native='Mérida', lat=38.9161, lng=-6.3437,
      blurb=['로마 시대 루시타니아 속주의 수도. 극장과 원형경기장, 다리, 수도교가 시내 곳곳에 남은 스페인 최대의 로마 유적 도시로, 세계유산입니다.',
             'Capital of Roman Lusitania—Spain’s largest ensemble of Roman ruins, with a theatre, amphitheatre, bridge and aqueduct across town; a World Heritage site.'],
      highlights=[
          H('로마 극장과 원형경기장', 'Roman Theatre & Amphitheatre', '기둥 무대가 남은 1세기 극장으로, 여름엔 고전극 축제가 열립니다. 옆에 검투사 경기장이 있습니다.', 'The 1st-century theatre with its columned stage, still used for a classical drama festival in summer, beside the gladiators’ amphitheatre.', 'Teatro Romano de Mérida', 90, 120),
          H('국립 로마 미술관', 'National Museum of Roman Art', '라파엘 모네오가 벽돌 아치로 지은 박물관에 모자이크와 조각을 전시합니다.', 'Rafael Moneo’s brick-arched museum of mosaics and sculpture.', 'Museo Nacional de Arte Romano', 90, 120, c='mon'),
          H('로마 다리', 'Roman Bridge', '과디아나강을 건너는 약 800m 길이의 로마 다리로, 걸어서 건넙니다.', 'The roughly 800 m Roman bridge over the Guadiana, open to walkers.', 'Puente Romano Mérida', 20, 30),
          H('디아나 신전', 'Temple of Diana', '시내 한복판에 기둥이 그대로 선 로마 신전입니다.', 'A Roman temple whose columns still stand in the middle of town.', 'Templo de Diana Mérida', 15, 20),
          H('로스 밀라그로스 수도교', 'Los Milagros Aqueduct', '화강암과 벽돌 아치가 줄지어 선 로마 수도교입니다.', 'A Roman aqueduct of granite-and-brick arches.', 'Acueducto de los Milagros', 20, 30),
      ],
      hubs="    air: [['Badajoz (BJZ)', '바다호스 공항 (BJZ)', '바다호스|Badajoz'], ['Sevilla (SVQ)', '세비야 공항 (SVQ)', '세비야|Seville']],\n    rail: [['Mérida', '메리다역']],\n    bus: [['Estación de Autobuses de Mérida', '메리다 버스터미널']],\n",
      itinerary=[1, 2, 4, 3, 5],
      season='여름 밤 로마 극장에서 고전극 축제(7~8월)가 열리지만 낮엔 매우 덥습니다.|The classical drama festival fills the Roman theatre on summer nights (July–August), but days are very hot.',
      stay=stay1('시내 중심', 'Town centre', 'Plaza de España Mérida', '극장과 신전, 다리가 모두 걸어서 닿습니다.|The theatre, temple and bridge all on foot.'),
      routes=[r('madrid', 'merida', 'train', 270, "{ fa: ATOCHA }"), r('seville', 'merida', 'bus', 145), r('merida', 'caceres', 'train', 55)],
      transit=dict(modes=['walk', 'bus'], ko='유적들이 시내에 모여 있어 걸어서 다닙니다.', en='The ruins are close together, so walk.'), apps=RA, daytrips=[]),
    C(id='ubeda', country='es', group_title='안달루시아', after='cordoba', ko='우베다·바에사', en='Úbeda & Baeza', native='Úbeda', lat=38.0133, lng=-3.3705,
      blurb=['끝없는 올리브 숲 위 언덕에 선 르네상스 쌍둥이 도시. 우베다와 이웃 바에사의 궁전과 성당이 세계유산이고, 하엔 지방은 세계 최대의 올리브유 산지입니다.',
             'Twin Renaissance towns on hills above endless olive groves—Úbeda and neighbouring Baeza are World Heritage, and the Jaén province is the world’s largest olive-oil producer.'],
      highlights=[
          H('바스케스 데 몰리나 광장', 'Plaza Vázquez de Molina', '르네상스 궁전과 성당이 둘러싼 우베다의 중심 광장입니다.', 'Úbeda’s centrepiece, ringed by Renaissance palaces and churches.', 'Plaza Vázquez de Molina Úbeda', 30, 45),
          H('엘 살바도르 성당', 'Sacra Capilla del Salvador', '르네상스 건축가 반델비라가 지은 귀족 가문 예배당으로, 조각 정면이 화려합니다.', 'The noble family chapel by the Renaissance architect Vandelvira, with a richly carved front.', 'Sacra Capilla del Salvador Úbeda', 30, 45),
          H('물의 시나고그', 'Sinagoga del Agua', '집 아래에서 발견된 중세 유대교 회당과 정결 목욕탕입니다.', 'A medieval synagogue and ritual bath discovered beneath a house.', 'Sinagoga del Agua Úbeda', 30, 45),
          H('올리브유 해설 센터', 'Olive Oil Interpretation Centre', '올리브 재배와 기름 짜는 과정을 배우고 엑스트라 버진 올리브유를 맛봅니다.', 'Learn how olives are grown and pressed, then taste extra-virgin olive oil.', 'Centro de Interpretación Olivar y Aceite Úbeda', 45, 60),
          H('바에사', 'Baeza', '대성당과 포풀로 광장, 옛 대학이 있는 이웃 르네상스 마을로, 시인 마차도가 살았습니다.', 'The neighbouring Renaissance town of the cathedral, Plaza del Pópulo and the old university, where the poet Machado lived.', 'Plaza del Pópulo Baeza', 120, 180, group=DAY,
            n='우베다에서 버스로 약 15분입니다.|About 15 min by bus from Úbeda.'),
      ],
      hubs="    air: [['Granada (GRX)', '그라나다 공항 (GRX)', '그라나다|Granada'], AGP()],\n    rail: [['Linares-Baeza', '리나레스 바에사역', '우베다까지 버스·택시로 약 30분|about 30 min to Úbeda by bus or taxi']],\n    bus: [['Estación de Autobuses de Úbeda', '우베다 버스터미널']],\n",
      itinerary=[1, 2, 3, 4, 5],
      season='11~1월 올리브 수확철엔 방앗간이 바쁘게 돌아갑니다. 한여름은 매우 덥습니다.|The olive harvest (November–January) keeps the mills busy; midsummer is very hot.',
      stay=stay1('우베다 구시가', 'Úbeda old town', 'Plaza Vázquez de Molina Úbeda', '광장과 성당이 걸어서 닿고 버스터미널까지 걸어서 약 15분입니다.|The square and churches on foot, about 15 min’s walk from the bus station.'),
      routes=[r('cordoba', 'ubeda', 'bus', 165), r('granada', 'ubeda', 'bus', 140)],
      transit=dict(modes=['walk', 'bus'], ko='구시가는 걸어서 다니고, 바에사는 버스로 갑니다.', en='Walk the old town; take the bus to Baeza.'), apps=RA,
      daytrips=[('granada', trip('ubeda', '버스로 약 2시간 20분. 우베다와 바에사의 르네상스 광장을 보고 올리브유를 맛봅니다.|About 2 hr 20 by bus: the Renaissance squares of Úbeda and Baeza, and an olive-oil tasting.'))]),
    C(id='jerez', country='es', group_title='안달루시아', after='cadiz', ko='헤레스 데 라 프론테라', en='Jerez de la Frontera', native='Jerez de la Frontera', lat=36.6866, lng=-6.1361,
      blurb=['셰리 와인과 안달루시아 말, 플라멩코의 도시. 시내 곳곳의 보데가에서 셰리를 맛보고, 왕립 승마학교에서 말들의 춤을 봅니다.',
             'The city of sherry, Andalusian horses and flamenco—taste sherry at bodegas all over town and watch the horses dance at the Royal School of Equestrian Art.'],
      highlights=[
          H('곤살레스 비아스 (티오 페페)', 'González Byass (Tío Pepe)', '1835년 세운 셰리 보데가로, 오크통 저장고를 돌아본 뒤 시음합니다.', 'The sherry bodega founded in 1835—tour the barrel cellars, then taste.', 'Bodegas Tío Pepe Jerez', 90, 120, b='rec'),
          H('왕립 안달루시아 승마학교', 'Royal Andalusian School of Equestrian Art', '음악에 맞춰 안달루시아 말이 춤추는 공연 ‘말들은 어떻게 춤추는가’를 봅니다.', 'Watch Andalusian horses dance to music in the show “How the Andalusian Horses Dance”.', 'Real Escuela Andaluza del Arte Ecuestre', 120, 150, b='rec',
            n='공연은 정해진 요일에만 열립니다. 다른 날은 훈련과 시설을 봅니다.|Shows run only on set days; on other days you see training and the grounds.'),
          H('헤레스 알카사르', 'Alcázar of Jerez', '12세기 이슬람 요새로, 모스크와 아랍 목욕탕, 카메라 옵스큐라가 있습니다.', 'A 12th-century Moorish fortress with a mosque, Arab baths and a camera obscura.', 'Alcázar de Jerez', 60, 75),
          H('헤레스 대성당', 'Jerez Cathedral', '돔과 따로 선 종탑이 있는 바로크 대성당입니다.', 'The Baroque cathedral with its dome and separate bell tower.', 'Catedral de Jerez', 30, 45),
          H('산티아고 지구 플라멩코', 'Barrio de Santiago flamenco', '플라멩코 명인들이 난 집시 지구로, 저녁 페냐(동호회)와 타반코(선술집)에서 공연을 봅니다.', 'The gitano quarter that produced flamenco greats, with evening shows at peñas and tabancos.', 'Barrio de Santiago Jerez', 90, 120),
      ],
      hubs="    air: [['Jerez (XRY)', '헤레스 공항 (XRY)'], ['Sevilla (SVQ)', '세비야 공항 (SVQ)', '세비야|Seville']],\n    rail: [['Jerez de la Frontera', '헤레스역']],\n    bus: [['Estación de Autobuses de Jerez', '헤레스 버스터미널']],\n",
      itinerary=[3, 4, 1, 2, 5],
      season='5월 말 말 축제(페리아 델 카바요)와 9월 포도 수확 축제가 큽니다.|The Horse Fair (late May) and the September grape-harvest fiesta are the big events.',
      stay=stay1('시내 중심', 'Town centre', 'Plaza del Arenal Jerez', '보데가와 알카사르가 걸어서 닿고 역까지 걸어서 약 15분입니다.|Bodegas and the Alcázar on foot, about 15 min’s walk from the station.'),
      routes=[r('seville', 'jerez', 'train', 65), r('cadiz', 'jerez', 'train', 40)],
      transit=dict(modes=['walk', 'bus', 'train'], ko='시내는 걸어서 다닙니다. 카디스·세비야와 근교 열차로 이어집니다.', en='Walk the centre; trains link it to Cádiz and Seville.'), apps=RA,
      daytrips=[('seville', trip('jerez', '기차로 약 1시간. 셰리 보데가와 승마학교 공연(정해진 요일), 알카사르를 봅니다.|About 1 hr by train: a sherry bodega, the equestrian show (set days only) and the Alcázar.'))]),
    C(id='tarifa', country='es', group_title='안달루시아', after='jerez', ko='타리파', en='Tarifa', native='Tarifa', lat=36.0127, lng=-5.6025,
      blurb=['유럽 대륙 최남단의 바람의 마을. 해협 너머 아프리카가 보이고, 카이트서핑과 고래 관찰, 모로코 탕헤르행 페리, 해변 위 로마 도시 유적이 있습니다.',
             'The windswept town at mainland Europe’s southern tip—Africa across the strait, kitesurfing, whale watching, ferries to Tangier and a Roman town by the beach.'],
      highlights=[
          H('구시가와 헤레스 문', 'Old town & Puerta de Jerez', '성벽 문을 지나 하얀 골목과 광장이 이어지는 작은 구시가입니다.', 'Through the old gate into a small old town of white lanes and squares.', 'Puerta de Jerez Tarifa', 45, 60),
          H('구스만 엘 부에노 성', 'Castle of Guzmán el Bueno', '10세기 이슬람 성으로, 성벽 위에서 해협 너머 모로코가 보입니다.', 'A 10th-century Moorish castle; Morocco is visible across the strait from its walls.', 'Castillo de Guzmán el Bueno', 45, 60, c='mon'),
          H('로스 란세스 해변', 'Playa de Los Lances', '바람이 센 긴 모래 해변으로, 카이트서핑과 윈드서핑의 성지입니다.', 'A long, windy sandy beach and a mecca for kite- and windsurfing.', 'Playa de Los Lances', 60, 180),
          H('지브롤터 해협 고래 관찰', 'Strait whale watching', '배를 타고 해협에서 돌고래와 고래를 봅니다.', 'Boat trips into the strait to see dolphins and whales.', 'Puerto de Tarifa', 120, 180, b='rec',
            n='고래는 대체로 4~10월에 잘 보입니다. 바람이 세면 배가 뜨지 않습니다.|Whales are seen mostly April–October; boats stay in port when the wind is strong.'),
          H('바엘로 클라우디아', 'Baelo Claudia', '해변 모래언덕 옆에 남은 로마 시대 생선 소스 생산 도시 유적입니다.', 'The ruins of a Roman fish-sauce town beside the beach dunes.', 'Baelo Claudia', 90, 120, group=DAY, c='mon',
            n='타리파에서 차로 약 25분이며 대중교통은 거의 없습니다.|About 25 min by car from Tarifa; there is hardly any public transport.'),
      ],
      hubs="    air: [['Gibraltar (GIB)', '지브롤터 공항 (GIB)', '지브롤터|Gibraltar'], AGP()],\n    bus: [['Estación de Autobuses de Tarifa', '타리파 버스 정류장']],\n    port: [['Puerto de Tarifa', '타리파 항구', '모로코 탕헤르행 페리|ferries to Tangier, Morocco']],\n",
      itinerary=[1, 2, 3, 4, 5],
      season='동풍 ‘레반테’가 불면 며칠씩 바람이 거셉니다. 6~9월이 해변 철이고 고래는 4~10월입니다.|The easterly levante can blow hard for days; June–September is beach season and whales come April–October.',
      stay=stay1('구시가', 'Old town', 'Tarifa old town', '성과 항구가 걸어서 닿고 버스 정류장까지 걸어서 약 10분입니다.|The castle and port on foot, about 10 min’s walk from the bus stop.'),
      routes=[r('cadiz', 'tarifa', 'bus', 100), r('seville', 'tarifa', 'bus', 180), r('malaga', 'tarifa', 'bus', 210, "{ n: '알헤시라스에서 환승|change at Algeciras' }"),
              r('gibraltar', 'tarifa', 'bus', 60, "{ n: '라 리네아에서 출발|from La Línea' }")],
      transit=dict(modes=['walk', 'bus', 'ferry'], ko='마을은 걸어서 다닙니다. 해변과 바엘로 클라우디아는 차가 편합니다.', en='Walk the town; a car is easiest for the beaches and Baelo Claudia.'), apps=RA, daytrips=[]),
    C(id='almeria', country='es', group_title='안달루시아', after='granada', ko='알메리아', en='Almería', native='Almería', lat=36.8381, lng=-2.4597,
      blurb=['유럽에서 가장 건조한 해안의 햇빛 도시. 거대한 이슬람 요새 알카사바와 내전 때의 지하 방공호, 화산 해안 카보 데 가타와 서부 영화 세트장이 있습니다.',
             'A sun-drenched city on Europe’s driest coast—the vast Moorish Alcazaba, Civil War air-raid tunnels, the volcanic Cabo de Gata coast and spaghetti-western film sets.'],
      highlights=[
          H('알메리아 알카사바', 'Alcazaba of Almería', '10세기에 지은 안달루시아 최대급 이슬람 요새로, 성벽 위에서 항구와 시내가 보입니다.', 'One of Andalusia’s largest Moorish fortresses, begun in the 10th century, with views over the port and city.', 'Alcazaba de Almería', 90, 120, c='mon'),
          H('알메리아 대성당', 'Almería Cathedral', '해적 습격에 대비해 요새처럼 지은 16세기 대성당입니다.', 'The 16th-century cathedral built like a fortress against pirate raids.', 'Catedral de Almería', 30, 45),
          H('내전 방공호', 'Civil War shelters', '스페인 내전 때 시민 수만 명이 피하던 약 4.5km 지하 터널을 가이드와 걷습니다.', 'A guided walk through some 4.5 km of tunnels where tens of thousands sheltered in the Civil War.', 'Refugios de la Guerra Civil Almería', 60, 75, b='rec', c='mon'),
          H('카보 데 가타', 'Cabo de Gata', '화산암 절벽과 한적한 만, 등대가 있는 자연공원으로, 해변 산 호세와 몬술이 유명합니다.', 'A natural park of volcanic cliffs, quiet coves and a lighthouse, with the beaches of San José and Mónsul.', 'Cabo de Gata', 300, 480, group=DAY,
            n='알메리아에서 차로 약 40분이며 버스는 적습니다.|About 40 min by car from Almería; buses are few.'),
          H('타베르나스 사막 서부 영화 세트장', 'Tabernas western film sets', '유럽 유일의 사막에 남은 마카로니 웨스턴 촬영 세트로, 총잡이 쇼를 봅니다.', 'Spaghetti-western sets in Europe’s only desert, with gunslinger shows.', 'Oasys MiniHollywood Tabernas', 180, 240, group=DAY,
            n='알메리아에서 차로 약 30분입니다.|About 30 min by car from Almería.'),
      ],
      hubs="    air: [['Almería (LEI)', '알메리아 공항 (LEI)']],\n    rail: [['Almería', '알메리아 역(버스·기차 통합)']],\n    port: [['Puerto de Almería', '알메리아 항구', '모로코·알제리행 페리|ferries to Morocco and Algeria']],\n",
      itinerary=[1, 2, 3, 4, 5],
      season='1년 내내 맑고 건조해 겨울에도 따뜻합니다. 한여름엔 매우 덥습니다.|Sunny and dry all year, mild even in winter; midsummer is very hot.',
      stay=stay1('시내 중심', 'City centre', 'Paseo de Almería', '알카사바와 대성당이 걸어서 닿고 통합 역까지 걸어서 약 15분입니다.|The Alcazaba and cathedral on foot, about 15 min’s walk from the combined station.'),
      routes=[r('granada', 'almeria', 'bus', 140), r('malaga', 'almeria', 'bus', 200), r('madrid', 'almeria', 'flight', 65)],
      transit=dict(modes=['walk', 'bus'], ko='시내는 걸어서 다닙니다. 카보 데 가타와 타베르나스는 차가 편합니다.', en='Walk the centre; a car is easiest for Cabo de Gata and Tabernas.'), apps=RA, daytrips=[]),
    C(id='alicante', country='es', group_title='발렌시아 지방', after='valencia', ko='알리칸테', en='Alicante', native='Alicante / Alacant', lat=38.3452, lng=-0.4810,
      blurb=['코스타 블랑카의 중심 해변 도시. 바다 위 바위산의 산타 바르바라 성, 야자수와 물결무늬 타일의 에스플라나다, 시내 해변이 이어집니다.',
             'The beach city at the heart of the Costa Blanca—Santa Bárbara Castle on its rock above the sea, the palm-lined, wave-tiled Explanada and a city beach.'],
      highlights=[
          H('산타 바르바라 성', 'Santa Bárbara Castle', '해발 166m 바위산 꼭대기의 성으로, 해변 쪽 터널 엘리베이터로 오릅니다.', 'The castle atop a 166 m rock, reached by a lift through the mountain from the beach side.', 'Castillo de Santa Bárbara', 90, 120),
          H('에스플라나다 데 에스파냐', 'Explanada de España', '650만 개 대리석 타일이 물결무늬를 이루는 야자수 해변 산책로입니다.', 'The palm-lined promenade paved with some 6.5 million marble tiles in a wave pattern.', 'Explanada de España', 30, 45),
          H('포스티게트 해변', 'Postiguet Beach', '성 바로 아래 시내 모래 해변입니다.', 'The city’s sandy beach right below the castle.', 'Playa del Postiguet', 60, 120),
          H('산타 크루스 지구', 'Barrio de Santa Cruz', '성 아래 비탈의 하얀 집과 꽃 화분이 늘어선 옛 동네입니다.', 'The old neighbourhood of white houses and flowerpots on the slope below the castle.', 'Barrio de Santa Cruz Alicante', 30, 45),
          H('알리칸테 고고학 박물관', 'MARQ Archaeological Museum', '선사 시대부터 중세까지 발렌시아 지방 유물을 영상과 함께 보여 줍니다.', 'Finds from prehistory to the Middle Ages, displayed with multimedia.', 'MARQ Alicante', 90, 120, c='mon'),
          H('타바르카 섬', 'Tabarca Island', '성벽 마을과 맑은 바다가 있는 작은 섬으로, 배를 타고 갑니다.', 'A small island with a walled village and clear water, reached by boat.', 'Isla de Tabarca', 240, 360, group=DAY,
            n='알리칸테 항구에서 배로 약 1시간이며, 주로 봄~가을에 다닙니다.|About 1 hr by boat from Alicante port, mainly spring to autumn.'),
      ],
      hubs="    air: [['Alicante–Elche (ALC)', '알리칸테 엘체 공항 (ALC)']],\n    rail: [['Alicante-Terminal', '알리칸테 테르미날역']],\n    bus: [['Estación de Autobuses de Alicante', '알리칸테 버스터미널']],\n",
      itinerary=[2, 4, 1, 3, 5, 6],
      season='6월 23~24일 산 후안 불꽃 축제(오게라스)가 가장 큽니다. 겨울에도 온화합니다.|The Hogueras bonfire festival on 23–24 June is the biggest; winters are mild.',
      stay=stay1('구시가와 에스플라나다', 'Old town & Explanada', 'Explanada de España', '해변과 성 엘리베이터가 걸어서 닿고 역까지 걸어서 약 15분입니다.|The beach and castle lift on foot, about 15 min’s walk from the station.'),
      routes=[r('madrid', 'alicante', 'train', 140, "{ ...R, fa: ATOCHA, n: AVE }"), r('valencia', 'alicante', 'train', 120, "{ ...R }")],
      transit=dict(modes=['walk', 'tram', 'bus'], ko='시내는 걸어서 다니고, 해안 트램이 북쪽 해변 마을로 이어집니다.', en='Walk the centre; the coastal tram runs to beach towns to the north.'), apps=RA, daytrips=[]),
    C(id='ibiza', country='es', group_title='발레아레스 제도', after='palma', ko='이비사', en='Ibiza', native='Eivissa / Ibiza', lat=38.9067, lng=1.4206,
      blurb=['클럽 섬으로 유명하지만, 세계유산 성벽 도시 달트 빌라와 맑은 만, 노을 명소가 있는 지중해 섬입니다.',
             'Famous for its clubs, but also a Mediterranean island of the World Heritage walled Dalt Vila, clear coves and sunset spots.'],
      highlights=[
          H('달트 빌라', 'Dalt Vila', '르네상스 성벽에 둘러싸인 언덕 위 옛 도시로, 세계유산입니다.', 'The hilltop old town inside Renaissance walls, a World Heritage site.', 'Dalt Vila', 90, 120),
          H('이비사 대성당', 'Ibiza Cathedral', '달트 빌라 꼭대기의 대성당으로, 항구와 바다가 내려다보입니다.', 'The cathedral at the top of Dalt Vila, overlooking the harbour and sea.', 'Catedral de Ibiza', 20, 30),
          H('세스 살리네스 자연공원', 'Ses Salines Natural Park', '분홍빛 염전과 플라밍고, 섬 남쪽 끝의 모래 해변이 있는 자연공원입니다.', 'A natural park of pink salt pans, flamingos and the island’s southern beaches.', 'Ses Salines Ibiza', 180, 300),
          H('칼라 콘타 노을', 'Cala Comte sunset', '맑은 물과 작은 섬들 너머로 해가 지는 서쪽 해안의 노을 명소입니다.', 'A west-coast sunset spot of clear water and islets.', 'Cala Comte', 120, 180),
          H('에스 베드라 전망', 'Es Vedrà viewpoint', '바다에 솟은 신비로운 바위섬 에스 베드라를 칼라 도르트 위에서 봅니다.', 'View the mysterious rock islet of Es Vedrà from above Cala d’Hort.', 'Mirador Es Vedrà', 60, 90, group=DAY,
            n='이비사 시내에서 차로 약 30분입니다.|About 30 min by car from Ibiza Town.'),
      ],
      hubs="    air: [['Ibiza (IBZ)', '이비사 공항 (IBZ)']],\n    port: [['Puerto de Ibiza', '이비사 항구', '바르셀로나·발렌시아·팔마·포르멘테라행 페리|ferries to Barcelona, Valencia, Palma and Formentera']],\n",
      itinerary=[1, 2, 3, 4, 5],
      season='6~9월이 해변 철이고 클럽은 대체로 5~10월에만 엽니다. 겨울엔 문을 닫는 곳이 많습니다.|June–September is beach season and the clubs open roughly May–October; much closes in winter.',
      stay=stay1('이비사 시내 항구', 'Ibiza Town harbour', 'Marina Ibiza', '달트 빌라와 항구가 걸어서 닿고 공항버스가 다닙니다.|Dalt Vila and the harbour on foot, with the airport bus nearby.'),
      routes=[r('barcelona', 'ibiza', 'flight', 60), r('valencia', 'ibiza', 'flight', 50), r('palma', 'ibiza', 'ferry', 150, "{ n: '고속 페리 기준|fast ferry' }"), r('madrid', 'ibiza', 'flight', 70)],
      transit=dict(modes=['walk', 'bus', 'taxi'], ko='시내는 걸어서 다닙니다. 해변은 버스로 가고, 섬 서쪽은 차가 편합니다.', en='Walk the town; buses reach the beaches, and a car is easiest for the west coast.'), apps='', daytrips=[]),
    C(id='menorca', country='es', group_title='발레아레스 제도', after='ibiza', ko='메노르카 (마온)', en='Menorca (Mahón)', native='Menorca / Maó', lat=39.8885, lng=4.2658,
      blurb=['조용한 만과 선사 유적의 섬. 중심 도시 마온은 유럽 최대급 천연 항구 위에 있고, 영국 지배 때 들어온 진과 마온 치즈가 유명합니다. 서쪽 끝엔 옛 수도 시우타데야가 있습니다.',
             'An island of quiet coves and prehistoric monuments—Mahón sits above one of Europe’s largest natural harbours and is known for gin from British rule and Mahón cheese; the old capital Ciutadella is at the western end.'],
      highlights=[
          H('마온 항구 유람선', 'Mahón harbour boat trip', '약 5km 길이의 천연 항구를 배로 돌며 요새와 섬들을 봅니다.', 'A boat trip round the 5 km natural harbour, past forts and islets.', 'Port de Maó', 60, 90),
          H('수리게르 진 증류소', 'Xoriguer Gin Distillery', '영국 지배 시절부터 이어진 메노르카 진을 항구 앞 증류소에서 맛봅니다.', 'Taste Menorcan gin, a legacy of British rule, at the harbourfront distillery.', 'Destilerías Xoriguer Mahón', 30, 45),
          H('시우타데야', 'Ciutadella', '대성당과 귀족 저택, 작은 항구가 있는 섬 서쪽 끝의 옛 수도입니다.', 'The old capital at the island’s western tip, with its cathedral, palaces and little harbour.', 'Ciutadella de Menorca', 180, 240, group=DAY,
            n='마온에서 버스로 약 1시간입니다.|About 1 hr by bus from Mahón.'),
          H('나베타 데스 투돈스', 'Naveta d’Es Tudons', '뒤집힌 배 모양의 약 3,000년 전 돌무덤으로, 섬의 탈라요트 유적은 세계유산입니다.', 'A 3,000-year-old stone tomb shaped like an upturned boat; Menorca’s Talayotic sites are World Heritage.', 'Naveta des Tudons', 30, 45, group=DAY,
            n='시우타데야에서 차로 약 10분입니다.|About 10 min by car from Ciutadella.'),
          H('마카레야·투르케타 만', 'Cala Macarella & Cala Turqueta', '소나무 숲 사이 청록빛 물의 남쪽 해안 만입니다.', 'Turquoise coves framed by pine woods on the south coast.', 'Cala Macarella', 240, 360, group=DAY,
            n='여름엔 차량 진입을 막고 시우타데야에서 버스가 다닙니다.|In summer the road is closed to cars and buses run from Ciutadella.'),
      ],
      hubs="    air: [['Menorca (MAH)', '메노르카 공항 (MAH)']],\n    port: [['Port de Maó', '마온 항구', '바르셀로나·팔마행 페리|ferries to Barcelona and Palma'], ['Port de Ciutadella', '시우타데야 항구', '마요르카 알쿠디아행 페리|ferries to Alcúdia, Mallorca']],\n",
      itinerary=[1, 2, 3, 4, 5],
      season='6~9월이 해변 철입니다. 6월 말 시우타데야의 산 조안 축제에선 말들이 군중 사이로 뛰어오릅니다.|June–September is beach season; at Ciutadella’s Sant Joan fiesta in late June, horses rear up among the crowds.',
      stay=stay1('마온 시내와 항구', 'Mahón centre & harbour', 'Maó centre', '항구와 구시가가 걸어서 닿고 공항까지 차로 약 10분입니다.|The harbour and old town on foot, about 10 min by car from the airport.'),
      routes=[r('barcelona', 'menorca', 'flight', 55), r('palma', 'menorca', 'flight', 35)],
      transit=dict(modes=['walk', 'bus', 'taxi'], ko='마온과 시우타데야는 걸어서 다니고, 두 도시는 버스로 이어집니다. 만은 여름 버스나 차로 갑니다.', en='Walk Mahón and Ciutadella, linked by bus; reach the coves by summer bus or car.'), apps='', daytrips=[]),
    C(id='tenerife', country='es', group_title='발레아레스 제도', after='menorca', ko='테네리페', en='Tenerife', native='Tenerife', lat=28.4874, lng=-16.3159,
      blurb=['대서양 카나리아 제도에서 가장 큰 섬. 스페인 최고봉 테이데 화산 국립공원과 세계유산 옛 수도 라 라구나가 있고, 1년 내내 봄 날씨입니다.',
             'The largest of the Atlantic Canary Islands—home to Spain’s highest peak in Teide National Park and the World Heritage old capital of La Laguna, with spring-like weather all year.'],
      highlights=[
          H('테이데 국립공원', 'Teide National Park', '스페인 최고봉(3,715m) 테이데 화산과 달 표면 같은 용암 평원으로, 케이블카로 높이 3,555m까지 오릅니다.', 'Spain’s highest peak (3,715 m) and its moonscape of lava fields; the cable car climbs to 3,555 m.', 'Teleférico del Teide', 300, 420, b='rec',
            n='케이블카는 바람이 세면 멈춥니다. 정상까지 오르려면 국립공원 허가를 미리 받아야 합니다.|The cable car stops in high winds; the summit path needs a park permit booked in advance.'),
          H('라 라구나 구시가', 'La Laguna old town', '아메리카 식민 도시의 본보기가 된 격자형 옛 수도로, 세계유산입니다.', 'The grid-planned old capital that became a model for colonial cities in the Americas—a World Heritage site.', 'San Cristóbal de La Laguna', 90, 120),
          H('아나가 농촌 공원', 'Anaga Rural Park', '섬 북동쪽 끝 원시 월계수 숲과 산길, 검은 모래 해변입니다.', 'Ancient laurel forest, trails and black-sand beaches at the island’s north-eastern tip.', 'Parque Rural de Anaga', 180, 300),
          H('마스카 협곡 마을', 'Masca', '깎아지른 협곡 끝에 매달린 산골 마을입니다.', 'A hamlet perched at the head of a sheer ravine.', 'Masca Tenerife', 120, 180, group=DAY,
            n='라 라구나에서 차로 약 1시간 20분이며 산길이 좁고 굽습니다.|About 1 hr 20 by car from La Laguna on a narrow, winding road.'),
          H('로스 히간테스 절벽', 'Los Gigantes cliffs', '바다에서 수백 m 솟은 절벽으로, 배를 타고 고래와 돌고래도 봅니다.', 'Cliffs rising hundreds of metres from the sea, with boat trips to see whales and dolphins.', 'Acantilados de Los Gigantes', 120, 180, group=DAY,
            n='라 라구나에서 차로 약 1시간 10분입니다.|About 1 hr 10 by car from La Laguna.'),
      ],
      hubs="    air: [['Tenerife Norte (TFN)', '테네리페 북부 공항 (TFN)'], ['Tenerife Sur (TFS)', '테네리페 남부 공항 (TFS)']],\n    port: [['Puerto de Santa Cruz de Tenerife', '산타 크루스 항구', '다른 카나리아 섬행 페리|ferries to the other Canary Islands']],\n",
      itinerary=[2, 3, 1, 4, 5],
      season='1년 내내 18~28℃로 온화합니다. 테이데 정상 부근은 겨울에 눈이 오고 매우 춥습니다.|Mild all year at 18–28 °C; around the summit of Teide it snows in winter and is very cold.',
      stay=stay1('라 라구나', 'La Laguna', 'San Cristóbal de La Laguna', '구시가와 트램이 있고 북부 공항이 가깝습니다. 해변 휴가는 남부 해안이 편합니다.|The old town and tram, close to the north airport; for a beach holiday the south coast is easier.'),
      routes=[r('madrid', 'tenerife', 'flight', 170), r('barcelona', 'tenerife', 'flight', 200)],
      transit=dict(modes=['tram', 'bus', 'taxi'], ko='라 라구나와 산타 크루스는 트램으로 이어집니다. 섬 일주와 테이데는 차가 편합니다.', en='A tram links La Laguna and Santa Cruz; a car is easiest for Teide and the rest of the island.'), apps='', daytrips=[]),
]

# Spain's region groups after the new cities (loop from Madrid; islands last)
ES_GROUPS = [
    ('마드리드 지방', 'Community of Madrid', ['madrid']),
    ('카스티야 라 만차', 'Castile–La Mancha', ['toledo', 'cuenca']),
    ('카스티야 이 레온', 'Castile and León', ['segovia', 'avila', 'salamanca', 'leon', 'burgos']),
    ('엑스트레마두라', 'Extremadura', ['caceres', 'merida']),
    ('안달루시아', 'Andalusia', ['seville', 'cordoba', 'ubeda', 'granada', 'almeria', 'nerja', 'malaga', 'ronda', 'tarifa', 'cadiz', 'jerez']),
    ('발렌시아 지방', 'Valencian Community', ['valencia', 'alicante']),
    ('카탈루냐', 'Catalonia', ['barcelona', 'montserrat', 'girona', 'sitges', 'tarragona']),
    ('아라곤', 'Aragon', ['zaragoza', 'teruel']),
    ('나바라·라 리오하', 'Navarre & La Rioja', ['pamplona', 'logrono']),
    ('바스크', 'Basque Country', ['bilbao', 'san-sebastian']),
    ('칸타브리아·아스투리아스', 'Cantabria & Asturias', ['santander', 'oviedo']),
    ('갈리시아', 'Galicia', ['santiago']),
    ('발레아레스 제도', 'Balearic Islands', ['palma', 'ibiza', 'menorca']),
    ('카나리아 제도', 'Canary Islands', ['tenerife']),
]
TRIPS = {
    'logrono': [('하로|Haro', 4), ('엘시에고|Elciego', 5)], 'santander': [('알타미라와 산티야나 델 마르|Altamira & Santillana del Mar', 5)],
    'oviedo': [('코바동가|Covadonga', 5)], 'teruel': [('알바라신|Albarracín', 5)], 'caceres': [('트루히요|Trujillo', 5)],
    'ubeda': [('바에사|Baeza', 5)], 'tarifa': [('바엘로 클라우디아|Baelo Claudia', 5)],
    'almeria': [('카보 데 가타|Cabo de Gata', 4), ('타베르나스|Tabernas', 5)], 'alicante': [('타바르카 섬|Tabarca Island', 6)],
    'ibiza': [('에스 베드라|Es Vedrà', 5)], 'menorca': [('시우타데야와 나베타|Ciutadella & the Naveta', 3, 4), ('남쪽 만|South-coast coves', 5)],
    'tenerife': [('마스카|Masca', 4), ('로스 히간테스|Los Gigantes', 5)],
}


def finish():
    it = rd('itinerary-iberia.ts')
    for cid, trips in TRIPS.items():
        days = [n for n in next(c['itinerary'] for c in CITIES if c['id'] == cid) if not any(n in t[1:] for t in trips)]
        old = f"  {cid}: {next(c['itinerary'] for c in CITIES if c['id'] == cid)},\n".replace('[', '[').replace(', ', ', ')
        old = f"  {cid}: [{', '.join(map(str, next(c['itinerary'] for c in CITIES if c['id'] == cid)))}],\n"
        assert it.count(old) == 1, cid
        tr = ', '.join(f"['{t[0]}', {', '.join(map(str, t[1:]))}]" for t in trips)
        it = it.replace(old, f"  {cid}: {{ days: [['', {', '.join(map(str, days))}]], trips: [{tr}] }},\n")
    wr('itinerary-iberia.ts', it)
    k = rd('countries.ts')
    i = k.index("    id: 'es',")
    a = k.index('    cityIds: [', i)
    b = k.index('    ],\n  },', a) + len('    ],\n')
    ids = [x for g in ES_GROUPS for x in g[2]]
    old_ids = re.findall(r"'([a-z-]+)'", k[a:k.index('\n', a)])
    assert sorted(ids) == sorted(old_ids), (set(ids) ^ set(old_ids))
    body = ('    cityIds: [' + ', '.join(f"'{x}'" for x in ids) + '],\n    cityGroups: [\n'
            + ''.join(f"      {{ title: {{ ko: '{ko}', en: '{en}' }}, cityIds: [{', '.join(repr(x) for x in g)}] }},\n" for ko, en, g in ES_GROUPS)
            + '    ],\n')
    wr('countries.ts', k[:a] + body + k[b:])


if __name__ == '__main__':
    T.CITIES = CITIES
    T.main()
    finish()
