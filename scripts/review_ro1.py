#!/usr/bin/env python3
"""Romania step 1 (all six cities), 2026-11-15, user approved the plan.
Fixes: every one-line description and blurb; Brașov h5 odd name becomes Rope Street & Șchei; Timișoara h3 Korean name
fixed (Theresia Bastion) and h5 'Revolution memorials' becomes the Memorial of the 1989 Revolution (matching its photo).
New sights: Bucharest 7, Brașov 4, Sibiu 4, Sighișoara 3, Cluj 4, Timișoara 2 (Huniade Castle left out: reopening after
restoration not confirmed). Bucharest gets groups and a 3-day itinerary; country city groups follow the regions. Run once."""
import re, urllib.parse
from add_daytrip_places import rd, wr
from sight_order import add_sights, blocks, itinerary_order, reorder
from review_sk import S

DAY = ('근교 당일치기', 'Day trip')
B_OLD = ('구시가·의회궁', 'Old Town & Parliament')
B_VIC = ('혁명광장·칼레아 빅토리에이', 'Revolution Square & Calea Victoriei')
B_NOR = ('북부', 'North')

BLURB = {
 'bucharest': ('루마니아의 수도. 차우셰스쿠가 지은 거대한 의회궁과 좁은 골목의 구시가가 있고, 벨 에포크 건물이 늘어선 칼레아 빅토리에이 거리가 ‘작은 파리’라 불리던 시절을 떠올리게 합니다.',
               'Romania’s capital, with Ceaușescu’s colossal Palace of the Parliament and a lane-filled old town, while the Belle Époque buildings of Calea Victoriei recall its days as ‘Little Paris’.'),
 'brasov': ('카르파티아 산자락의 트란실바니아 도시. 작센인이 세운 구시가에 흑교회와 의회광장이 있고, 브란 성과 라슈노프 요새로 가는 거점입니다.',
            'A Transylvanian city at the foot of the Carpathians, its Saxon-built old town home to the Black Church and Council Square, and the base for Bran Castle and Râșnov Fortress.'),
 'sibiu': ('트란실바니아 작센인의 옛 중심 도시. 지붕의 ‘눈’ 창이 광장을 내려다보는 구시가가 있고, 2007년 유럽 문화수도였습니다.',
           'The old centre of the Transylvanian Saxons, whose rooftop ‘eye’ windows look down on the squares of its old town; European Capital of Culture in 2007.'),
 'sighisoara': ('사람이 지금도 사는 중세 성채 마을로 세계유산입니다. 시계탑과 색색 집, 드라큘라의 모델 블라드 3세가 태어났다고 전하는 집이 있습니다.',
                'A lived-in medieval citadel and World Heritage Site, with its clock tower, colourful houses and the house where Vlad III, the model for Dracula, is said to have been born.'),
 'cluj-napoca': ('트란실바니아의 비공식 수도라 불리는 대학 도시. 고딕 성 미하이 성당이 선 광장과 카페 골목이 있고, 근교에 거대한 투르다 소금 광산이 있습니다.',
                 'The university city called Transylvania’s unofficial capital, with the Gothic St Michael’s Church on its main square, café-lined streets and the vast Salina Turda salt mine nearby.'),
 'timisoara': ('바나트 지방의 중심 도시로 ‘작은 빈’이라 불립니다. 1989년 혁명이 시작된 곳이며, 바로크와 분리파 건물이 선 광장들로 2023년 유럽 문화수도였습니다.',
               'The main city of the Banat, nicknamed ‘Little Vienna’, where the 1989 revolution began; its Baroque and Secession squares made it a European Capital of Culture in 2023.'),
}

REWRITE = {
 'bucharest-h1': (None, None, '1980년대 차우셰스쿠 정권이 지은 세계에서 손꼽히게 큰 행정 건물로, 가이드 투어로 대리석 홀과 발코니를 둘러봅니다.', 'One of the world’s largest administrative buildings, built under Ceaușescu in the 1980s; guided tours lead through its marble halls and onto the balcony.'),
 'bucharest-h2': (None, None, '중세 상인의 거리였던 립스카니 일대로, 좁은 골목에 옛 여관과 교회, 은행 건물, 바와 카페가 모여 있습니다.', 'The Lipscani area, once the medieval merchants’ quarter, with old inns, churches, bank buildings, bars and cafés packed into narrow lanes.'),
 'bucharest-h3': (None, None, '1989년 12월 차우셰스쿠가 마지막 연설을 한 옛 공산당 본부 앞 광장으로, 왕궁과 아테네움이 둘러쌉니다.', 'The square below the former Communist Party headquarters where Ceaușescu gave his last speech in December 1989, flanked by the Royal Palace and the Athenaeum.'),
 'bucharest-h4': (None, None, '큰 호수를 둘러싼 시내 최대 공원으로, 보트를 타거나 호숫가를 걷고 마을 박물관이 바로 옆에 있습니다.', 'The city’s largest park around a big lake: take a boat or walk the shore, with the Village Museum right next door.'),
 'bucharest-h5': (None, None, '1888년 문을 연 돔 지붕의 콘서트홀로, 조르제 에네스쿠 필하모닉의 본거지이며 둥근 홀 벽을 따라 역사 프레스코가 이어집니다.', 'The domed concert hall opened in 1888, home of the George Enescu Philharmonic, with a historical fresco running round its circular hall.'),
 'bucharest-h6': (None, None, '혁명광장의 옛 왕궁으로, 지금은 루마니아 국립미술관이 들어 있어 왕실의 방과 유럽·루마니아 미술을 봅니다.', 'The former royal palace on Revolution Square, now the National Museum of Art of Romania, with royal rooms and European and Romanian art.'),
 'brasov-h1': (None, None, '14~15세기 고딕 교회로, 1689년 큰 불에 벽이 그을려 ‘검은 교회’가 됐으며 오스만 양탄자를 많이 모아 두었습니다.', 'A Gothic church of the 14th–15th centuries, blackened by the great fire of 1689, with a large collection of Ottoman carpets.'),
 'brasov-h2': (None, None, '옛 시청 건물(지금 역사 박물관)을 가운데 둔 중앙 광장으로, 색색 상인 집과 카페가 둘러쌉니다.', 'The main square around the old town hall, now the history museum, ringed by colourful merchants’ houses and cafés.'),
 'brasov-h3': (None, None, '구시가 바로 뒤의 산으로, 케이블카나 숲길로 올라 BRAȘOV 글자 옆 전망대에서 시내를 내려다봅니다.', 'The mountain right behind the old town; ride the cable car or hike up through the woods to the viewpoint by the BRAȘOV letters.'),
 'brasov-h4': (None, None, '14세기 산길을 지키던 성으로, 드라큘라 성으로 알려졌고 마리 왕비가 머물던 방들을 둘러봅니다.', 'The 14th-century castle guarding a mountain pass, famed as ‘Dracula’s Castle’, with rooms once used by Queen Marie.'),
 'brasov-h5': ('줄 거리와 스케이 지구', 'Rope Street & Șchei', '폭이 1.3m 남짓해 유럽에서 손꼽히게 좁은 골목인 줄 거리와, 성벽 밖 루마니아인 마을이던 스케이 지구입니다.', 'Rope Street, little more than 1.3 m wide and one of Europe’s narrowest lanes, and the Șchei district outside the walls, once the Romanian quarter.', 'Strada Sforii Brașov', 'v(30, 45)'),
 'sibiu-h1': (None, None, '15세기부터 시장이 서던 큰 광장으로, 브루켄탈 궁전과 바로크 가톨릭 성당, 색색 집들이 둘러쌉니다.', 'The great market square since the 15th century, surrounded by the Brukenthal Palace, a Baroque Catholic church and colourful houses.'),
 'sibiu-h2': (None, None, '대광장 옆 아치 길로 이어지는 작은 광장으로, 옛 길드 건물과 카페가 둥글게 모여 있습니다.', 'The smaller square reached through an archway from the Grand Square, ringed by old guild houses and cafés.'),
 'sibiu-h3': (None, None, '1859년 놓은 루마니아 최초의 주철 다리로, 위에서 거짓말을 하면 다리가 무너진다는 전설이 있습니다.', 'Romania’s first cast-iron bridge, built in 1859; legend says it collapses if someone tells a lie on it.'),
 'sibiu-h4': (None, None, '구시가 남동쪽에 남은 중세 성벽으로, 길드들이 지키던 방어탑을 따라 걷습니다.', 'The medieval walls surviving on the south-east of the old town; walk past the towers once defended by the guilds.'),
 'sibiu-h5': (None, None, '숲과 호수 사이 넓은 땅에 전국의 농가와 풍차, 물레방아 수백 채를 옮겨 놓은 유럽 최대급 야외 박물관입니다.', 'One of Europe’s largest open-air museums, with hundreds of farmhouses, windmills and watermills from across Romania set among woods and lakes.'),
 'sighisoara-h1': (None, None, '14세기 성문 탑으로, 17세기 시계 속 나무 인형이 돌며 꼭대기 전망대와 역사 박물관이 있습니다.', 'The 14th-century gate tower whose 17th-century clock has turning wooden figures, with a lookout at the top and a history museum.'),
 'sighisoara-h2': (None, None, '작센 장인들이 쌓은 언덕 위 성채로, 길드 탑과 파스텔 색 집 사이 자갈길을 걷습니다.', 'The hilltop citadel built by Saxon craftsmen; walk the cobbles between guild towers and pastel houses.'),
 'sighisoara-h3': (None, None, '드라큘라의 모델 블라드 3세가 1431년 무렵 태어났다고 전하는 집으로, 지금은 식당이 들어 있습니다.', 'The house where Vlad III, the model for Dracula, is said to have been born around 1431, now a restaurant.'),
 'sighisoara-h4': (None, None, '1642년 놓은 지붕 덮인 나무 계단으로, 언덕 위 학교와 교회로 이어집니다.', 'A roofed wooden stairway built in 1642, climbing to the school and church on the hill.'),
 'sighisoara-h5': (None, None, '성채에 남은 9개 길드 탑 가운데 하나로, 주석 세공인 길드가 지키던 육중한 방어탑입니다.', 'One of the nine guild towers left on the citadel, a massive defensive tower once manned by the tinsmiths’ guild.'),
 'cluj-napoca-h1': (None, None, '연합광장에 선 14~15세기 고딕 성당으로, 19세기에 덧붙인 약 80m 탑이 시내 어디서나 보입니다.', 'The 14th–15th-century Gothic church on Union Square, its tower of about 80 m, added in the 19th century, visible across the city.'),
 'cluj-napoca-h2': (None, None, '성 미하이 성당 앞 중심 광장으로, 마차시 왕 기마상과 바로크 궁전, 카페가 둘러쌉니다.', 'The main square in front of St Michael’s, with the equestrian statue of King Matthias, Baroque palaces and cafés.'),
 'cluj-napoca-h3': (None, None, '19세기에 꾸민 공원으로, 보트를 타는 호수와 옛 카지노 건물이 있습니다.', 'A 19th-century park with a boating lake and the old casino building.'),
 'cluj-napoca-h4': (None, None, '18세기 요새 터 언덕으로, 계단을 올라 구시가와 성당 탑을 내려다봅니다.', 'The hill of an 18th-century fortress; climb the steps for views over the old town and St Michael’s tower.'),
 'cluj-napoca-h5': (None, None, '1920년 세운 대학 식물원으로, 온실과 일본 정원 등 다양한 정원이 언덕을 따라 이어집니다.', 'The university botanical garden founded in 1920, with glasshouses, a Japanese garden and other gardens down the hillside.'),
 'timisoara-h1': (None, None, '오페라 극장부터 정교회 대성당까지 이어지는 긴 광장으로, 1989년 12월 혁명 시위대가 모였던 곳입니다.', 'The long square running from the opera house to the Orthodox cathedral, where the crowds of the December 1989 revolution gathered.'),
 'timisoara-h2': (None, None, '바로크 가톨릭 대성당과 세르비아 정교회 주교관이 마주 보는 색색 건물의 광장입니다.', 'A square of colourful buildings where the Baroque Catholic cathedral faces the Serbian Orthodox bishop’s palace.'),
 'timisoara-h3': ('테레지아 보루', None, '18세기 합스부르크 요새에서 남은 가장 큰 성벽 부분으로, 안에 박물관과 카페가 들어 있습니다.', 'The largest surviving section of the 18th-century Habsburg fortress, now housing a museum and cafés.'),
 'timisoara-h4': (None, None, '시내를 가로지르는 운하로, 강변 산책길과 자전거 길이 이어집니다.', 'The canal through the city, lined with riverside walks and cycle paths.'),
 'timisoara-h5': ('1989 혁명 기념관', 'Memorial of the 1989 Revolution', '1989년 12월 혁명의 기록과 사진, 영상을 전시하는 기념관으로, 혁명이 시작된 도시의 이야기를 듣습니다.', 'A memorial museum of records, photographs and film from the December 1989 revolution, telling the story of the city where it began.', 'Memorialul Revolutiei Timisoara', 'v(45, 60)'),
}

ADD = {
 'bucharest': [
  (7, S('스타브로폴레오스 수도원', 'Stavropoleos Monastery', '1724년 지은 작은 교회로, 돌 조각 기둥과 안뜰이 아름다운 브링코베아누 양식의 보석입니다.', 'A small church of 1724, a gem of the Brâncovenesc style with carved stone columns and a lovely courtyard.', 'Stavropoleos Monastery', 15, 20)),
  (8, S('카르투레슈티 카루셀', 'Cărturești Carusel', '19세기 말 건물을 하얀 나선형 서점으로 고친 곳으로, 층마다 둥글게 책장이 이어집니다.', 'A late-19th-century building turned into a white, spiralling bookshop, with shelves curving round every floor.', 'Cărturești Carusel', 20, 30)),
  (9, S('칼레아 빅토리에이', 'Calea Victoriei', '17세기 말 놓인 부쿠레슈티의 옛 큰길로, 저축은행 궁전 등 벨 에포크 건물과 박물관이 이어집니다.', 'Bucharest’s grand old avenue, laid out in the late 17th century, lined with Belle Époque buildings such as the CEC Palace and museums.', 'Calea Victoriei', 45, 60)),
  (10, S('루마니아 개선문', 'Arcul de Triumf', '제1차 세계대전을 기념해 1936년 화강암으로 다시 지은 개선문입니다.', 'The triumphal arch rebuilt in granite in 1936 to commemorate the First World War.', 'Arcul de Triumf Bucharest', 15, 20)),
  (11, S('마을 박물관', 'Village Museum', '1936년 문을 연 야외 박물관으로, 전국에서 옮겨 온 농가와 목조 교회, 풍차 수백 채가 호숫가에 있습니다.', 'An open-air museum opened in 1936, with hundreds of farmhouses, wooden churches and windmills from across Romania by the lake.', 'National Village Museum Dimitrie Gusti', 90, 120)),
  (12, S('총대주교 대성당', 'Patriarchal Cathedral', '17세기 언덕 위에 세운 루마니아 정교회의 중심 성당으로, 종탑과 총대주교 궁전이 함께 있습니다.', 'The 17th-century hilltop cathedral at the heart of the Romanian Orthodox Church, with its bell tower and the Patriarchal Palace.', 'Romanian Patriarchal Cathedral', 20, 30)),
  (13, S('모고쇼아이아 궁전', 'Mogoșoaia Palace', '1702년 콘스탄틴 브링코베아누 공이 지은 호숫가 궁전으로, 붉은 벽돌과 돌 회랑의 브링코베아누 양식입니다.', 'The lakeside palace built in 1702 by Prince Constantin Brâncoveanu, in his style of red brick and stone loggias.', 'Mogoșoaia Palace', 90, 120, group=DAY,
        n='부쿠레슈티 북서쪽 약 15km, 차로 약 30분입니다.|About 15 km north-west of Bucharest, around 30 min by car.')),
 ],
 'brasov': [
  (6, S('흰 탑과 검은 탑', 'White & Black Towers', '15세기 성벽 방어탑으로, 언덕길을 올라 구시가 지붕과 흑교회를 내려다봅니다.', 'Two 15th-century defensive towers; climb the hillside paths for views over the old town’s roofs and the Black Church.', 'White Tower Brașov', 30, 45)),
  (7, S('카타리나 문', 'Catherine’s Gate', '1559년 지은 성문으로, 뾰족한 작은 탑 넷이 달린 모습이 중세 그대로 남아 있습니다.', 'The city gate of 1559, its four little pointed turrets surviving as they were in the Middle Ages.', 'Catherine’s Gate Brașov', 10, 15)),
  (8, S('라슈노프 요새', 'Râșnov Fortress', '13세기 튜턴 기사단이 처음 세운 언덕 위 요새로, 마을 사람들이 피난하던 성벽 안 집터와 우물이 남아 있습니다.', 'A hilltop fortress first built by the Teutonic Knights in the 13th century, with the ruins of villagers’ refuge houses and a well inside its walls.', 'Râșnov Fortress', 60, 90, group=DAY,
        n='브라쇼브에서 남서쪽 약 15km, 브란 가는 길에 있습니다.|About 15 km south-west of Brașov, on the way to Bran.')),
  (9, S('프레지메르 요새 교회', 'Prejmer Fortified Church', '13세기 교회를 두꺼운 원형 성벽이 감싸고 안쪽에 피난용 방 수백 칸이 층층이 붙은 세계유산입니다.', 'A 13th-century church enclosed by a thick ring wall lined inside with tiers of hundreds of refuge rooms; a World Heritage Site.', 'Prejmer Fortified Church', 45, 60, group=DAY,
        n='브라쇼브에서 북동쪽 약 18km입니다.|About 18 km north-east of Brașov.')),
 ],
 'sibiu': [
  (6, S('브루켄탈 국립박물관', 'Brukenthal National Museum', '1817년 문을 연 루마니아에서 가장 오래된 박물관으로, 바로크 궁전에 유럽 회화를 전시합니다.', 'Romania’s oldest museum, opened in 1817, showing European paintings in a Baroque palace.', 'Brukenthal National Museum', 90, 120)),
  (7, S('복음주의 대성당', 'Evangelical Cathedral', '14세기에 짓기 시작한 고딕 교회로, 높은 탑에 올라 붉은 지붕들과 카르파티아 산맥을 봅니다.', 'A Gothic church begun in the 14th century; climb its tall tower for the red roofs and the Carpathians.', 'Evangelical Cathedral Sibiu', 30, 45)),
  (8, S('의회 탑', 'Council Tower', '대광장과 소광장 사이 13세기 탑으로, 꼭대기에서 구시가를 사방으로 내려다봅니다.', 'The 13th-century tower between the Grand and Little Squares, with all-round views of the old town from the top.', 'Council Tower Sibiu', 15, 20)),
  (9, S('트란스퍼거러산 도로', 'Transfăgărășan', '1970년대 만든 산악 도로로, 해발 2,000m가 넘는 발레아 호수까지 구불구불 오르며 카르파티아 절경을 봅니다.', 'A mountain road built in the 1970s, winding up to Bâlea Lake at over 2,000 m through spectacular Carpathian scenery.', 'Bâlea Lake', 300, 480, group=DAY,
        n='보통 여름(7~10월)에만 전 구간이 열리며 차로 갑니다.|The full road is usually open only in summer (July–October); go by car.')),
 ],
 'sighisoara': [
  (6, S('언덕 위 교회', 'Church on the Hill', '덮개 계단 위 언덕 꼭대기의 14~15세기 고딕 교회로, 프레스코와 지하 묘실이 있습니다.', 'The 14th–15th-century Gothic church at the top of the covered stairway, with frescoes and a crypt.', 'Church on the Hill Sighișoara', 30, 45)),
  (7, S('비에르탄 요새 교회', 'Biertan Fortified Church', '세 겹 성벽이 둘러싼 언덕 위 교회로, 트란실바니아 요새 교회 가운데 가장 유명한 세계유산입니다.', 'A hilltop church enclosed by three rings of walls, the best known of Transylvania’s fortified churches and a World Heritage Site.', 'Biertan Fortified Church', 60, 90, group=DAY,
        n='시기쇼아라에서 서쪽으로 약 30km입니다.|About 30 km west of Sighișoara.')),
  (8, S('비스크리 마을', 'Viscri', '하얀 요새 교회와 파스텔 색 농가가 남은 작센인 마을로, 세계유산입니다.', 'A Saxon village of pastel farmhouses around a white fortified church, a World Heritage Site.', 'Viscri Fortified Church', 60, 90, group=DAY,
        n='시기쇼아라에서 남동쪽으로 약 40km입니다.|About 40 km south-east of Sighișoara.')),
 ],
 'cluj-napoca': [
  (6, S('정교회 대성당', 'Orthodox Cathedral', '1923~1933년 지은 거대한 비잔틴풍 대성당으로, 국립 극장과 마주 보는 광장에 있습니다.', 'A huge Byzantine-style cathedral built in 1923–1933, on the square facing the National Theatre.', 'Orthodox Cathedral Cluj-Napoca', 20, 30)),
  (7, S('반피 궁전', 'Bánffy Palace', '18세기 바로크 궁전으로, 지금은 국립 미술관이 들어 있습니다.', 'An 18th-century Baroque palace, now the National Museum of Art.', 'Bánffy Palace Cluj', 60, 90)),
  (8, S('트란실바니아 민속 공원', 'Ethnographic Park', '1929년 문을 연 루마니아 최초의 야외 박물관으로, 호이아 숲에 옛 농가와 목조 교회가 있습니다.', 'Romania’s first open-air museum, opened in 1929, with old farmhouses and wooden churches in the Hoia forest.', 'Romulus Vuia Ethnographic Park', 90, 120)),
  (9, S('투르다 소금 광산', 'Salina Turda', '옛 소금 광산 깊은 곳을 고친 지하 공간으로, 관람차를 타고 지하 호수에서 보트를 젓습니다.', 'An old salt mine turned underground attraction, with a Ferris wheel and boating on an underground lake deep inside.', 'Salina Turda', 120, 180, group=DAY,
        n='클루지에서 남동쪽으로 약 35km, 차로 약 45분입니다.|About 35 km south-east of Cluj, around 45 min by car.')),
 ],
 'timisoara': [
  (6, S('메트로폴리탄 대성당', 'Metropolitan Cathedral', '1936~1946년 지은 정교회 대성당으로, 색 유약 기와를 얹은 지붕과 여러 탑이 승리광장 끝에 섭니다.', 'The Orthodox cathedral built in 1936–1946, its many towers and glazed-tile roofs closing the end of Victory Square.', 'Timișoara Orthodox Cathedral', 20, 30)),
  (7, S('장미 공원', 'Rose Park', '베가 운하 옆 장미 정원으로, 여름엔 장미가 가득하고 야외 공연장이 있습니다.', 'A rose garden beside the Bega Canal, full of roses in summer, with an open-air stage.', 'Parcul Rozelor Timișoara', 30, 45)),
 ],
}

IT = [
 ("  bucharest: [1, 2, 3, 6, 5, 4],\n",
  "  bucharest: {\n    days: [\n      ['구시가·의회궁|Old Town & Parliament', 1, 12, 2, 7, 8],\n      ['혁명광장·칼레아 빅토리에이|Revolution Square & Calea Victoriei', 9, 3, 6, 5],\n      ['북부|North', 10, 11, 4],\n    ],\n    trips: [['모고쇼아이아 궁전|Mogoșoaia Palace', 13]],\n  },\n"),
 ("  brasov: { days: [['', 2, 1, 5, 3]], trips: [['브란 성|Bran Castle', 4]] },\n",
  "  brasov: {\n    days: [['', 2, 1, 5, 7, 6, 3]],\n    trips: [\n      ['브란 성·라슈노프 요새|Bran & Râșnov', 8, 4],\n      ['프레지메르|Prejmer', 9],\n    ],\n  },\n"),
 ("  sibiu: { days: [['', 1, 2, 3, 4]], trips: [['아스트라 박물관|ASTRA Museum', 5]] },\n",
  "  sibiu: {\n    days: [['', 1, 8, 2, 3, 7, 6, 4]],\n    trips: [\n      ['아스트라 박물관|ASTRA Museum', 5],\n      ['트란스퍼거러산 도로|Transfăgărășan', 9],\n    ],\n  },\n"),
 ("  sighisoara: [1, 3, 2, 5, 4],\n",
  "  sighisoara: {\n    days: [['', 1, 2, 3, 4, 6, 5]],\n    trips: [\n      ['비에르탄|Biertan', 7],\n      ['비스크리|Viscri', 8],\n    ],\n  },\n"),
 ("  'cluj-napoca': [5, 2, 1, 3, 4],\n",
  "  'cluj-napoca': {\n    days: [\n      ['', 2, 1, 7, 6, 3, 4],\n      ['', 5, 8],\n    ],\n    trips: [['투르다 소금 광산|Salina Turda', 9]],\n  },\n"),
 ("  timisoara: [1, 5, 2, 3, 4],\n", "  timisoara: { days: [['', 1, 6, 2, 3, 5, 4, 7]] },\n"),
]

BUCHAREST = [(1, B_OLD), (12, B_OLD), (2, B_OLD), (7, B_OLD), (8, B_OLD),
             (9, B_VIC), (3, B_VIC), (6, B_VIC), (5, B_VIC), (10, B_NOR), (11, B_NOR), (4, B_NOR), (13, DAY)]
SMALL = ['brasov', 'sibiu', 'sighisoara', 'cluj-napoca', 'timisoara']

RO_OLD = "    cityIds: ['bucharest', 'brasov', 'sibiu', 'sighisoara', 'cluj-napoca', 'timisoara'],\n"
RO_NEW = """    cityIds: ['bucharest', 'brasov', 'sibiu', 'sighisoara', 'cluj-napoca', 'timisoara'],
    cityGroups: [
      { title: { ko: '부쿠레슈티·흑해', en: 'Bucharest & Black Sea' }, cityIds: ['bucharest'] },
      { title: { ko: '트란실바니아', en: 'Transylvania' }, cityIds: ['brasov', 'sibiu', 'sighisoara', 'cluj-napoca'] },
      { title: { ko: '서부', en: 'West' }, cityIds: ['timisoara'] },
    ],
"""


def main():
    c = rd('cities.ts')
    for cid, (ko, en) in BLURB.items():
        i = c.index(f'    id: "{cid}",')
        j = c.index('    highlights: [', i)
        blk = re.sub(r'blurb: \{\n      ko: ".*?",\n      en: ".*?",\n    \}',
                     f'blurb: {{\n      ko: "{ko}",\n      en: "{en}",\n    }}', c[i:j], flags=re.S)
        assert blk != c[i:j], cid
        c = c[:i] + blk + c[j:]
    vf = rd('visit-east.ts')
    for hid, t in REWRITE.items():
        ko, en, dko, den = t[:4]
        i = c.index(f'id: "{hid}"')
        j = c.index('\n      }', i)
        blk = c[i:j]
        if ko or en:
            m = re.search(r'name: \{ ko: "([^"]*)", en: "([^"]*)" \}', blk)
            blk = blk.replace(m.group(0), f'name: {{ ko: "{ko or m.group(1)}", en: "{en or m.group(2)}" }}')
        blk = re.sub(r'description: \{[^\n]*\}', f'description: {{ ko: "{dko}", en: "{den}" }}', blk)
        if len(t) > 4:
            blk = re.sub(r'mapsUrl: "[^"]*"', 'mapsUrl: "https://www.google.com/maps/search/?api=1&query=' + urllib.parse.quote(t[4]) + '"', blk)
            vf, k = re.subn(rf"^  '{hid}': v\(.*\),\n", f"  '{hid}': {t[5]},\n", vf, flags=re.M)
            assert k == 1, hid
        c = c[:i] + blk + c[j:]
    wr('visit-east.ts', vf)
    it = rd('itinerary-south.ts')
    for a, b in IT:
        assert it.count(a) == 1, a[:70]
        it = it.replace(a, b)
    wr('itinerary-south.ts', it)
    for cid, items in ADD.items():
        c = add_sights(c, cid, items, 'visit-east.ts')
    c = reorder(c, 'bucharest', BUCHAREST)
    for cid in SMALL:
        by = blocks(c, cid)
        m = re.search(rf"^  '?{cid}'?: (.*?)(?=^  [a-z'/])", it, re.M | re.S)
        trips = {int(x) for t in re.findall(r"trips: \[(.*)\]", m.group(1), re.S) for x in re.findall(r", (\d+)", t)}
        order = itinerary_order(it, cid, set(by))
        c = reorder(c, cid, [(n, DAY if n in trips else None) for n in order])
    wr('cities.ts', c)
    k = rd('countries.ts')
    assert k.count(RO_OLD) == 1
    wr('countries.ts', k.replace(RO_OLD, RO_NEW))


if __name__ == '__main__':
    main()
