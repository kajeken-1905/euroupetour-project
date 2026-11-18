#!/usr/bin/env python3
"""Georgia step 1 (the five existing cities), 2026-11-18, plan approved by the user (7 new cities in step 2).
Fixes: every blurb and one-line description; Sighnaghi h3 'Wine cellars' becomes the Sighnaghi Museum (Pirosmani) and
Stepantsminda h5 'Rooms Hotel viewpoint' becomes the Juta valley (both were not real single sights). New sights:
Tbilisi 14 (district groups, 3-day itinerary), Batumi 4, Kutaisi 5, Stepantsminda 3. Mtskheta is left for step 2.
Hours only where checked. Run once."""
import re
import urllib.parse
from add_daytrip_places import rd, wr
from sight_order import add_sights, blocks, itinerary_order, reorder
from review_sk import S

DAY = ('근교 당일치기', 'Day trip')
K_O = ('구시가·나리칼라', 'Old Town & Narikala')
K_A = ('강 건너 (메테히·아블라바리)', 'Across the river (Metekhi & Avlabari)')
K_R = ('루스타벨리 거리·므타츠민다', 'Rustaveli Avenue & Mtatsminda')
K_X = ('외곽', 'Further out')
CHURCH = '입장은 무료입니다. 여성은 머리를 가리고 치마를 두르며, 남성은 반바지 차림을 피합니다(입구에 스카프가 있는 곳이 많습니다).|Free; women cover their hair and wear a skirt, men avoid shorts (wraps are often provided at the door).'

BLURB = {
 'tbilisi': ('쿠라강 협곡을 따라 자리한 조지아의 수도. 나리칼라 요새 아래 유황 온천 돔과 발코니 집이 늘어선 구시가, 강 건너 메테히 교회와 사메바 대성당, 루스타벨리 거리의 박물관과 극장, 므타츠민다 언덕의 전망이 이어집니다.',
             'Georgia’s capital along the gorge of the Kura: the old town of sulphur-bath domes and balconied houses below Narikala Fortress, Metekhi Church and Sameba Cathedral across the river, the museums and theatres of Rustaveli Avenue, and the views from Mtatsminda hill.'),
 'batumi': ('흑해 연안의 휴양 항구 도시. 7km 바닷가 산책로 불바르와 알파벳 타워, 유럽 광장의 구시가가 있고, 언덕 위 식물원과 로마 시대 고니오 요새, 산속 마훈체티 폭포로 다녀옵니다.',
            'A Black Sea resort port with the 7 km Boulevard seafront, the Alphabet Tower and the old town around Europe Square, plus trips to the hillside Botanical Garden, the Roman fortress of Gonio and the Makhuntseti waterfall in the hills.'),
 'kutaisi': ('서부 조지아의 옛 왕국 수도. 언덕 위 바그라티 대성당과 세계유산 겔라티 수도원이 있고, 근교의 프로메테우스 동굴과 공룡 발자국의 사타플리아, 마르트빌리·오카체 협곡으로 다녀옵니다.',
             'The old royal capital of western Georgia, with Bagrati Cathedral on its hill and the World Heritage Gelati Monastery, and trips to Prometheus Cave, the dinosaur footprints of Sataplia and the Martvili and Okatse canyons.'),
 'stepantsminda': ('카즈베기산 아래 군용 도로 끝의 산마을. 언덕 위 게르게티 삼위일체 교회 뒤로 해발 5,047m 설산이 솟고, 다리알리 협곡과 유타·트루소 계곡을 걸으며, 오는 길에 아나누리 요새에 들릅니다.',
                   'A mountain village at the end of the Georgian Military Road below Mount Kazbek: the 5,047 m peak rises behind Gergeti Trinity Church on its hill; walk the Dariali Gorge and the Juta and Truso valleys, and stop at Ananuri fortress on the way.'),
 'sighnaghi': ('카헤티 포도밭 언덕 위의 성벽 마을. 18세기 성벽과 탑 너머로 알라자니 계곡과 코카서스산맥이 펼쳐지고, 화가 피로스마니의 그림이 있는 박물관과 성 니노가 잠든 보드베 수도원이 있습니다.',
               'A walled hill town above the vineyards of Kakheti: beyond its 18th-century walls and towers lie the Alazani valley and the Caucasus; it has a museum of the painter Pirosmani and the Bodbe Monastery where St Nino is buried.'),
}

REWRITE = {
 'tbilisi-h1': ('나리칼라 요새', None, '4세기부터 쌓아 올린 언덕 위 요새로, 성벽에 오르면 구시가와 쿠라강, 온천 지구가 한눈에 보입니다.', 'A hilltop fortress begun in the 4th century, whose walls look over the old town, the Kura and the bath district.'),
 'tbilisi-h2': ('아바노투바니 유황 온천', None, '벽돌 돔 지붕 아래 유황 온천수가 솟는 목욕탕 지구로, 개인실을 빌려 목욕하고 때밀이를 받습니다.', 'The bath district where sulphur springs rise under brick domes; rent a private room and add a traditional scrub.'),
 'tbilisi-h3': (None, None, '2010년 쿠라강 위에 놓은 유리 지붕 보행교로, 밤에는 LED 조명이 반짝입니다.', 'A glass-roofed footbridge over the Kura opened in 2010, lit with LEDs at night.'),
 'tbilisi-h4': (None, None, '2004년 완공한 조지아 정교회의 대성당으로, 아블라바리 언덕 위에서 금빛 돔이 도시를 내려다봅니다.', 'The Georgian Orthodox cathedral completed in 2004, its gilded dome looking over the city from Avlabari hill.'),
 'tbilisi-h5': ('구시가 골목', 'Old Town lanes', '나무 발코니 집과 와인 바가 늘어선 골목으로, 메이다니 광장에서 시오니 대성당 쪽으로 걷습니다.', 'Lanes of houses with carved wooden balconies and wine bars, walked from Meidan square towards Sioni Cathedral.'),
 'batumi-h1': (None, None, '흑해를 따라 7km 이어지는 산책로로, 자전거 길과 공원, 조형물이 늘어섭니다.', 'A 7 km seafront promenade with cycle paths, parks and sculptures.'),
 'batumi-h2': (None, None, '조지아 문자 33자를 나선형으로 새긴 130m 탑으로, 꼭대기 전망대에 오를 수 있습니다.', 'A 130 m tower spiralled with the 33 letters of the Georgian alphabet, with a viewing deck at the top.'),
 'batumi-h3': (None, None, '바다를 내려다보는 언덕에 세계 여러 기후대 식물을 모은 1912년 식물원입니다.', 'A botanical garden of 1912 on hills above the sea, with plants from many climate zones.'),
 'batumi-h4': (None, None, '소설 ‘알리와 니노’의 연인을 표현한 강철 조각으로, 두 인물이 천천히 다가갔다 멀어집니다.', 'Steel sculptures of the lovers from the novel “Ali and Nino”, which slowly glide together and apart.'),
 'batumi-h5': (None, None, '모자이크 바닥과 카페, 시계탑이 있는 이탈리아풍 광장입니다.', 'An Italian-style square with a mosaic floor, cafés and a clock tower.'),
 'kutaisi-h1': (None, None, '11세기 바그라트 3세가 세운 대성당으로, 언덕 위에서 시내와 강을 내려다봅니다.', 'The cathedral built by Bagrat III in the 11th century, overlooking the town and river from its hill.'),
 'kutaisi-h2': (None, None, '1106년 다비트 건설왕이 세운 수도원 겸 학문의 중심지로, 금빛 모자이크와 벽화가 남은 세계유산입니다.', 'The monastery and centre of learning founded by David the Builder in 1106, a World Heritage Site with golden mosaics and frescoes.'),
 'kutaisi-h3': (None, None, '종유석과 지하 강이 이어지는 1.4km 동굴로, 조명을 받은 동굴 속을 가이드와 함께 걷습니다.', 'A 1.4 km cave of stalactites and underground rivers, walked with a guide under coloured lights.'),
 'kutaisi-h4': (None, None, '중앙 광장에 콜키스 왕국의 황금 유물을 본뜬 조각 30여 개를 세운 분수입니다.', 'A fountain on the central square with some thirty sculptures copied from the gold treasures of ancient Colchis.'),
 'kutaisi-h5': ('사타플리아 자연보호구', 'Sataplia Nature Reserve', '공룡 발자국 화석과 종유석 동굴, 숲 위로 내민 유리 전망대가 있는 보호구입니다.', 'A reserve with fossilised dinosaur footprints, a stalactite cave and a glass viewing platform over the forest.'),
 'stepantsminda-h1': (None, None, '해발 2,170m 언덕 위의 14세기 교회로, 뒤로 카즈베기 설산이 솟는 조지아의 대표 풍경입니다.', 'A 14th-century church on a 2,170 m hill with snowy Mount Kazbek behind it, Georgia’s signature view.'),
 'stepantsminda-h2': ('카즈베기산', None, '해발 5,047m의 휴화산으로, 마을과 교회에서 정상이 보이고 등반은 전문 장비가 필요합니다.', 'A dormant 5,047 m volcano, visible from the village and church; climbing it needs mountaineering gear.'),
 'stepantsminda-h3': (None, None, '러시아 국경 쪽으로 이어지는 깊은 화강암 협곡으로, 협곡 안 수도원과 폭포를 차로 봅니다.', 'A deep granite gorge running towards the Russian border, with a monastery and waterfalls seen by car.'),
 'stepantsminda-h4': (None, None, '마을 북쪽 협곡 안 폭포로, 주차장에서 30분쯤 걸어 오릅니다.', 'A waterfall in a side gorge north of the village, about 30 minutes’ walk up from the car park.'),
 'stepantsminda-h5': ('유타 계곡', 'Juta valley', '차우히 봉우리 아래 고원 계곡으로, 유타 마을에서 걸어 들어가 초원과 바위산을 봅니다.', 'A high valley beneath the Chaukhi peaks; walk in from Juta village to meadows and rock spires.', 'Juta Georgia'),
 'sighnaghi-h1': (None, None, '18세기 에레클레 2세가 쌓은 성벽으로, 탑 23개가 남아 있고 성벽 위를 걸을 수 있습니다.', 'The walls built by King Erekle II in the 18th century, with 23 surviving towers and a walk along the top.'),
 'sighnaghi-h2': (None, None, '조지아에 기독교를 전한 성 니노가 잠든 수도원으로, 언덕 정원에서 알라자니 계곡이 보입니다.', 'The convent where St Nino, who brought Christianity to Georgia, is buried, with valley views from its hillside gardens.'),
 'sighnaghi-h3': ('시그나기 박물관', 'Sighnaghi Museum', '화가 니코 피로스마니의 그림을 모은 전시실이 있는 지역 박물관입니다.', 'The local museum, with a gallery of paintings by Niko Pirosmani.', 'Sighnaghi Museum'),
 'sighnaghi-h4': ('마을 광장과 골목', 'Town square & lanes', '붉은 지붕과 나무 발코니 집이 늘어선 비탈 골목과 광장으로, 결혼 신고소가 24시간 여는 ‘사랑의 도시’로 알려졌습니다.', 'Sloping lanes and squares of red roofs and wooden balconies; known as the “city of love” for its round-the-clock wedding registry.'),
 'sighnaghi-h5': ('알라자니 계곡 전망대', 'Alazani valley viewpoint', '마을 끝에서 포도밭이 펼쳐진 알라자니 계곡과 코카서스산맥을 내려다봅니다.', 'From the edge of town, look over the vineyards of the Alazani valley to the Caucasus.'),
}

ADD = {
 'tbilisi': [
  (6, S('메테히 교회와 바흐탕 고르가살리 기마상', 'Metekhi Church & King Vakhtang statue', '쿠라강 절벽 위의 13세기 교회로, 트빌리시를 세운 왕의 기마상이 구시가를 바라봅니다.', 'A 13th-century church on a cliff above the Kura, with the equestrian statue of the city’s founder king facing the old town.', 'Metekhi Church Tbilisi', 20, 30, n=CHURCH)),
  (7, S('리케 공원과 나리칼라 케이블카', 'Rike Park & Narikala cable car', '강변 공원에서 케이블카를 타고 나리칼라 요새 쪽으로 오릅니다.', 'Ride the cable car from the riverside park up towards Narikala Fortress.', 'Rike Park Tbilisi', 30, 45)),
  (8, S('조지아 어머니상', 'Mother of Georgia', '한 손엔 손님을 위한 와인 잔, 다른 손엔 적을 위한 칼을 든 20m 알루미늄 상입니다.', 'A 20 m aluminium statue holding a cup of wine for guests in one hand and a sword for enemies in the other.', 'Kartlis Deda', 15, 20)),
  (9, S('시오니 대성당', 'Sioni Cathedral', '구시가 한가운데의 대성당으로, 성 니노가 포도나무 가지로 만들었다는 십자가를 모십니다.', 'The cathedral in the heart of the old town, keeping the cross said to have been made by St Nino from grapevines.', 'Sioni Cathedral Tbilisi', 15, 20, n=CHURCH)),
  (10, S('안치스하티 성당', 'Anchiskhati Basilica', '6세기에 지은 트빌리시에서 가장 오래된 교회입니다.', 'Tbilisi’s oldest surviving church, built in the 6th century.', 'Anchiskhati Basilica', 15, 20, n=CHURCH)),
  (11, S('가브리아제 극장 시계탑', 'Gabriadze Theatre clock tower', '인형극 연출가 가브리아제가 지은 기울어진 시계탑으로, 정시마다 천사가 나와 종을 칩니다.', 'The leaning clock tower built by the puppeteer Rezo Gabriadze, where an angel comes out to ring the bell on the hour.', 'Gabriadze Theatre clock tower', 10, 15)),
  (12, S('루스타벨리 거리', 'Rustaveli Avenue', '의사당과 오페라 극장, 국립 미술관이 늘어선 트빌리시의 중심 대로입니다.', 'Tbilisi’s main avenue, lined with the old parliament, the opera house and the National Gallery.', 'Rustaveli Avenue', 45, 60)),
  (13, S('조지아 국립 박물관', 'Georgian National Museum', '고대 콜키스의 황금 장신구를 모은 보물관과 소련 점령 전시실이 있는 국립 박물관입니다.', 'The national museum, with a treasury of gold jewellery from ancient Colchis and a hall on the Soviet occupation.', 'Simon Janashia Museum of Georgia', 90, 120, c='mon')),
  (14, S('드라이 브리지 벼룩시장', 'Dry Bridge Market', '다리 위와 공원에 소련 시대 물건과 그림, 골동품 노점이 서는 벼룩시장입니다.', 'A flea market on a bridge and in the park beside it, with stalls of Soviet memorabilia, paintings and antiques.', 'Dry Bridge Market Tbilisi', 45, 60)),
  (15, S('므타츠민다 공원과 푸니쿨라', 'Mtatsminda Park & funicular', '1905년 푸니쿨라로 오르는 산 위 놀이공원으로, 시내 전체가 내려다보입니다.', 'A hilltop amusement park reached by a funicular of 1905, with views over the whole city.', 'Mtatsminda Park', 90, 120)),
  (16, S('조지아 연대기 기념비', 'Chronicle of Georgia', '트빌리시 바다 호숫가 언덕에 조지아 역사와 성경 장면을 새긴 거대한 청동 기둥들입니다.', 'Giant bronze pillars carved with Georgian history and Bible scenes, on a hill above the Tbilisi Sea.', 'Chronicle of Georgia', 30, 45)),
  (17, S('파브리카', 'Fabrika', '소련 시대 재봉 공장을 고친 호스텔 겸 복합 문화 공간으로, 안뜰에 카페와 바가 모여 있습니다.', 'A Soviet sewing factory turned hostel and creative hub, with cafés and bars around its courtyard.', 'Fabrika Tbilisi', 45, 60)),
  (18, S('국립 식물원', 'National Botanical Garden', '나리칼라 요새 뒤 협곡의 식물원으로, 숲길 끝에 폭포가 있습니다.', 'A botanical garden in the gorge behind Narikala Fortress, with a waterfall at the end of its woodland paths.', 'National Botanical Garden of Georgia', 60, 90)),
  (19, S('조지아 민속 야외 박물관', 'Open Air Museum of Ethnography', '조지아 각 지방의 전통 가옥과 와인 저장고를 옮겨 놓은 언덕 위 야외 박물관입니다.', 'A hillside open-air museum of traditional houses and wine cellars brought from every region of Georgia.', 'Open Air Museum of Ethnography Tbilisi', 90, 120)),
 ],
 'batumi': [
  (6, S('유럽 광장과 구시가', 'Europe Square & old town', '황금 양털을 든 메데이아 상이 서 있는 광장과, 19세기 건물이 늘어선 주변 골목입니다.', 'The square with a statue of Medea holding the Golden Fleece, and the surrounding lanes of 19th-century buildings.', 'Europe Square Batumi', 30, 45)),
  (7, S('아르고 케이블카', 'Argo cable car', '시내에서 언덕 위 전망대까지 오르는 케이블카로, 항구와 해안선이 내려다보입니다.', 'A cable car from town up to a hilltop viewpoint over the port and coastline.', 'Argo Cable Car Batumi', 45, 60)),
  (8, S('고니오 요새', 'Gonio Fortress', '로마 시대부터 이어진 사각형 성채로, 사도 마티아의 무덤이 있다고 전합니다.', 'A square fortress dating back to Roman times, said to hold the tomb of the Apostle Matthias.', 'Gonio Fortress', 60, 90, group=DAY,
        n='시내에서 남쪽 약 12km, 시내버스나 미니버스로 갑니다.|About 12 km south of town by city bus or minibus.')),
  (9, S('마훈체티 폭포와 타마르 여왕 다리', 'Makhuntseti waterfall & Queen Tamar bridge', '산속 협곡의 높은 폭포와, 강 위에 남은 12세기 아치 돌다리입니다.', 'A tall waterfall in a mountain gorge and a 12th-century stone arch bridge over the river nearby.', 'Makhuntseti Waterfall', 90, 120, group=DAY,
        n='시내에서 동쪽 약 30km, 미니버스로 갑니다.|About 30 km east of town by minibus.')),
 ],
 'kutaisi': [
  (6, S('모차메타 수도원', 'Motsameta Monastery', '강 위 절벽 끝에 선 작은 수도원으로, 겔라티와 함께 들르기 좋습니다.', 'A small monastery on a clifftop above a river bend, easily combined with Gelati.', 'Motsameta Monastery', 30, 45, group=DAY, n=CHURCH)),
  (7, S('쿠타이시 중앙 시장', 'Kutaisi Green Bazaar', '치즈와 향신료, 츄르츠헬라(호두 과자)를 파는 지붕 덮인 시장입니다.', 'A covered market selling cheese, spices and churchkhela (walnut sweets).', 'Kutaisi Green Bazaar', 30, 45)),
  (8, S('하얀 다리', 'White Bridge', '리오니강 위의 19세기 다리로, 난간에 앉은 소년 조각과 유리 바닥이 있습니다.', 'A 19th-century bridge over the Rioni with a sculpture of a boy sitting on the rail and a glass floor panel.', 'White Bridge Kutaisi', 10, 15)),
  (9, S('마르트빌리 협곡', 'Martvili Canyon', '맑은 물이 흐르는 좁은 석회암 협곡으로, 보트를 타고 들어갑니다.', 'A narrow limestone canyon with clear water, entered by boat.', 'Martvili Canyon', 90, 120, group=DAY,
        n='쿠타이시에서 북서쪽 약 45km입니다.|About 45 km north-west of Kutaisi.')),
  (10, S('오카체 협곡', 'Okatse Canyon', '협곡 절벽에 매단 철제 보행로를 걸어 깊은 계곡을 내려다봅니다.', 'Walk a steel walkway bolted to the canyon wall above a deep gorge.', 'Okatse Canyon', 120, 150, group=DAY,
        n='쿠타이시에서 북서쪽 약 45km로, 마르트빌리와 함께 다녀오기 좋습니다.|About 45 km north-west of Kutaisi, easily paired with Martvili.')),
 ],
 'stepantsminda': [
  (6, S('트루소 계곡', 'Truso valley', '광천수가 솟는 붉은 바위와 버려진 마을, 옛 탑이 있는 계곡 산책길입니다.', 'A valley walk past mineral springs over red travertine, abandoned villages and old towers.', 'Truso Valley', 240, 360, group=DAY,
        n='코비 마을에서 걸어 들어가며, 눈이 녹는 6~10월에 갑니다.|Walk in from Kobi village; best June–October once the snow has gone.')),
  (7, S('러시아-조지아 우호 기념비', 'Russia–Georgia Friendship Monument', '구다우리 고개 절벽 끝의 둥근 모자이크 전망대로, 깊은 계곡이 내려다보입니다.', 'A semicircular mosaic viewpoint on a clifftop near Gudauri, looking down into a deep valley.', 'Russia-Georgia Friendship Monument', 20, 30, group=DAY)),
  (8, S('아나누리 요새', 'Ananuri Fortress', '진발리 호숫가의 17세기 요새로, 성벽 안에 조각이 아름다운 두 교회가 있습니다.', 'A 17th-century fortress on the Zhinvali reservoir, with two finely carved churches inside its walls.', 'Ananuri Fortress', 45, 60, group=DAY,
        n='트빌리시에서 오는 군용 도로 중간, 스테판츠민다에서 남쪽 약 90km입니다.|Halfway along the Military Road from Tbilisi, about 90 km south of Stepantsminda.')),
 ],
}

IT = [
 ("  tbilisi: [4, 3, 5, 1, 2],\n",
  "  tbilisi: {\n    days: [\n      ['구시가와 나리칼라|Old Town & Narikala', 5, 9, 10, 11, 2, 18, 1, 8],\n      ['강 건너와 루스타벨리|Across the river & Rustaveli', 6, 4, 3, 7, 12, 13, 14],\n      ['므타츠민다와 외곽|Mtatsminda & further out', 15, 19, 16, 17],\n    ],\n  },\n"),
 ("  batumi: { days: [['', 5, 2, 4, 1]], trips: [['바투미 식물원|Batumi Botanical Garden', 3]] },\n",
  "  batumi: {\n    days: [['', 6, 5, 2, 4, 1, 7]],\n    trips: [\n      ['바투미 식물원|Batumi Botanical Garden', 3],\n      ['고니오 요새|Gonio Fortress', 8],\n      ['마훈체티 폭포|Makhuntseti', 9],\n    ],\n  },\n"),
 ("    days: [['', 4, 1]],\n    trips: [\n      ['겔라티 수도원|Gelati Monastery', 2],\n",
  "    days: [['', 4, 8, 7, 1]],\n    trips: [\n      ['겔라티·모차메타 수도원|Gelati & Motsameta', 2, 6],\n      ['마르트빌리·오카체 협곡|Martvili & Okatse', 9, 10],\n"),
 ("  stepantsminda: { days: [['', 5, 1, 2]], trips: [['그벨레티 폭포와 다리알리 협곡|Gveleti & Dariali Gorge', 4, 3]] },\n",
  "  stepantsminda: {\n    days: [['', 1, 2]],\n    trips: [\n      ['그벨레티 폭포와 다리알리 협곡|Gveleti & Dariali Gorge', 4, 3],\n      ['유타 계곡|Juta valley', 5],\n      ['트루소 계곡|Truso valley', 6],\n      ['아나누리와 구다우리|Ananuri & Gudauri', 8, 7],\n    ],\n  },\n"),
 ("  sighnaghi: [2, 4, 1, 5, 3],\n", "  sighnaghi: [4, 1, 3, 5, 2],\n"),
]

TBS = [(5, K_O), (9, K_O), (10, K_O), (11, K_O), (2, K_O), (18, K_O), (1, K_O), (8, K_O),
       (6, K_A), (4, K_A), (3, K_A), (7, K_A), (17, K_A),
       (12, K_R), (13, K_R), (14, K_R), (15, K_R),
       (19, K_X), (16, K_X)]
SMALL = ['batumi', 'kutaisi', 'stepantsminda', 'sighnaghi']
VISIT = [("  'sighnaghi-h3': v(60, 90),\n", "  'sighnaghi-h3': v(45, 60),\n"),
         ("  'stepantsminda-h5': v(20, 30),\n", "  'stepantsminda-h5': v(180, 300, { n: '유타 마을까지 차로 가서 걷습니다. 눈이 녹는 6~10월에 갑니다.|Drive to Juta village, then walk; best June–October once the snow has gone.' }),\n")]


def main():
    c = rd('cities.ts')
    for cid, (ko, en) in BLURB.items():
        i = c.index(f'id: "{cid}",')
        j = c.index('highlights: [', i)
        blk = re.sub(r'blurb: \{\n      ko: "[^"]*",\n      en: "[^"]*",\n    \}',
                     f'blurb: {{\n      ko: "{ko}",\n      en: "{en}",\n    }}', c[i:j], flags=re.S)
        assert blk != c[i:j], cid
        c = c[:i] + blk + c[j:]
    for hid, t in REWRITE.items():
        ko, en, dko, den = t[:4]
        i = c.index(f'id: "{hid}"')
        j = c.index('\n      }', i)
        blk = c[i:j]
        if ko or en:
            m = re.search(r'name: \{ ko: "([^"]*)", en: "([^"]*)" \}', blk)
            blk = blk.replace(m.group(0), f'name: {{ ko: "{ko or m.group(1)}", en: "{en or m.group(2)}" }}')
        blk2 = re.sub(r'description: \{[^\n]*\}', f'description: {{ ko: "{dko}", en: "{den}" }}', blk)
        assert blk2 != blk, hid
        if len(t) > 4:
            blk2 = re.sub(r'mapsUrl: "[^"]*"', 'mapsUrl: "https://www.google.com/maps/search/?api=1&query=' + urllib.parse.quote(t[4]) + '"', blk2)
        c = c[:i] + blk2 + c[j:]
    it = rd('itinerary-south.ts')
    for a, b in IT:
        assert it.count(a) == 1, a[:70]
        it = it.replace(a, b)
    wr('itinerary-south.ts', it)
    vs = rd('visit-east.ts')
    for a, b in VISIT:
        assert vs.count(a) == 1, a
        vs = vs.replace(a, b)
    wr('visit-east.ts', vs)
    for cid, items in ADD.items():
        c = add_sights(c, cid, items, 'visit-east.ts')
    c = reorder(c, 'tbilisi', TBS)
    for cid in SMALL:
        by = blocks(c, cid)
        m = re.search(rf"^  {cid}: (.*?)(?=^  [a-z'/])", it, re.M | re.S)
        trips = {int(x) for t in re.findall(r"trips: \[(.*)\]", m.group(1), re.S) for x in re.findall(r", (\d+)", t)}
        order = itinerary_order(it, cid, set(by))
        c = reorder(c, cid, [(n, DAY if n in trips else None) for n in order])
    wr('cities.ts', c)


if __name__ == '__main__':
    main()
