#!/usr/bin/env python3
"""Spain 2nd pass (2026-11-24, user approved all): +48 sights in 16 cities, plus Olite, Roncesvalles and Puente la Reina as
Pamplona day trips (Camino review). Facts from Wikipedia (en): Puerta de Alcalá Neoclassical gate on Plaza de la
Independencia; MAN beside Plaza de Colón sharing the National Library building; CaixaForum in a former power station,
opened 2008; Santa Maria del Mar built 1329-83, Catalan Gothic; Fundació Miró and MNAC on Montjuïc (MNAC Romanesque
church paintings, in the Palau Nacional); Torre del Oro dodecagonal Almohad watchtower on the Guadalquivir; Parque de
María Luisa Seville's main park; Palacio de las Dueñas House of Alba, late 15th c., Antonio Machado born there;
Hospital de los Venerables 17th-c. baroque priests' residence, Velázquez Center; Italica founded 206 BC by Scipio, near
Santiponce; Calahorra tower fortified gate of Islamic origin; Caliphal Baths partly reconstructed, museum; Alcaicería
Nasrid bazaar burnt 1843 and rebuilt; Bañuelo 11th/12th-c. hammam by the Darro; Calle Larios opened 1891; San Martiño
Pinario second-largest monastery in Spain after El Escorial; Cidade da Cultura by Peter Eisenman; Cape Finisterre;
Olite palace of the kings of Navarre, most visited site in Navarre; Roncesvalles ~900 m, ~4 km from France as the crow
flies; Es Baluard opened 2004; Escolania one of Europe's oldest boys' choirs, 14th c. Run once."""
import re
from add_daytrip_places import rd, wr
from sight_order import add_sights, reorder
from review_sk import S

FREE = '무료입니다.|Free.'
DAY = ('근교 당일치기', 'Day trip')
VF = 'visit-iberia.ts'
ADD = {
 'madrid': [
  (29, S('알칼라 문', 'Puerta de Alcalá', '레티로 공원 입구 독립 광장에 선 18세기 신고전주의 개선문으로, 마드리드를 대표하는 풍경입니다.', 'The 18th-century Neoclassical gate on the Plaza de la Independencia by the Retiro, one of Madrid’s signature sights.', 'Puerta de Alcalá Madrid', 10, 15, b='no', n=FREE)),
  (30, S('데스칼사스 레알레스 수도원', 'Monastery of las Descalzas Reales', '솔 광장 바로 옆, 왕실 여성들이 들어가던 16세기 수녀원으로, 지금도 수녀들이 살며 루벤스 밑그림의 태피스트리 등 소장품을 가이드 투어로 보여 줍니다.', 'A 16th-century convent founded for royal women, just off the Puerta del Sol and still home to nuns; guided tours show its treasures, including tapestries after Rubens.', 'Monasterio de las Descalzas Reales', 60, 75, b='rec', c='mon', n='가이드 투어로만 들어가며 인원이 적어 미리 예약하는 것이 좋습니다.|Visits are by guided tour only, in small groups; book ahead.')),
  (31, S('국립 고고학 박물관', 'National Archaeological Museum', '콜론 광장 옆 국립 도서관과 같은 건물에 있는 박물관으로, 이베리아 조각 ‘엘체의 귀부인’과 알타미라 동굴 재현 등을 전시합니다.', 'The museum beside Plaza de Colón, sharing a building with the National Library, home to the Iberian bust of the Lady of Elche and a replica of the Altamira cave.', 'Museo Arqueológico Nacional Madrid', 90, 150, c='mon')),
  (32, S('카이샤포룸 마드리드', 'CaixaForum Madrid', '프라도 미술관 맞은편 옛 발전소를 고쳐 2008년 문을 연 전시관으로, 옆 건물 벽을 덮은 거대한 ‘수직 정원’이 유명합니다.', 'An exhibition centre opened in 2008 in a former power station opposite the Prado, famous for the huge vertical garden on the wall beside it.', 'CaixaForum Madrid', 45, 90)),
  (33, S('문인 거리 (바리오 데 라스 레트라스)', 'Barrio de las Letras', '세르반테스·로페 데 베가 등 황금세기 작가들이 살던 동네로, 길바닥에 작품 구절이 새겨져 있고 타파스 바가 많습니다.', 'The quarter where Cervantes, Lope de Vega and other Golden Age writers lived, with quotations set into the pavements and plenty of tapas bars.', 'Barrio de las Letras Madrid', 45, 60, b='no', n=FREE)),
 ],
 'barcelona': [
  (31, S('산타 마리아 델 마르 성당', 'Santa Maria del Mar', '1329~83년 짧은 기간에 지어 양식이 한결같은 카탈루냐 고딕의 걸작으로, 기둥이 가늘고 높은 넓은 내부가 인상적입니다.', 'A masterpiece of Catalan Gothic built in 1329–83, unusually pure in style, with a vast interior on slender, soaring columns.', 'Basílica de Santa Maria del Mar', 30, 45, n='예배 시간 밖에는 관광 입장이 유료일 수 있습니다. 지붕 투어는 따로 예약합니다.|Outside worship times sightseeing entry may be ticketed; rooftop tours are booked separately.')),
  (32, S('엘 보른 문화 센터', 'El Born Centre de Cultura i Memòria', '19세기 철골 시장 건물 안에 1714년 바르셀로나 포위전 무렵의 거리와 집터 유적이 드러나 있는 문화 센터입니다.', 'A cultural centre in the 19th-century iron market hall, where excavated streets and houses from around the 1714 siege of Barcelona lie open below.', 'El Born Centre de Cultura i Memòria', 30, 60, c='mon', n='유적은 위에서 무료로 볼 수 있고 전시는 유료입니다.|The ruins can be seen free from above; the exhibitions are ticketed.')),
  (33, S('호안 미로 미술관', 'Fundació Joan Miró', '몬주익 언덕의 하얀 건물에 호안 미로의 그림·조각·태피스트리를 모은 미술관입니다.', 'The white museum on Montjuïc devoted to Joan Miró’s paintings, sculpture and tapestries.', 'Fundació Joan Miró', 90, 120, c='mon')),
  (34, S('카탈루냐 국립 미술관 (MNAC)', 'Museu Nacional d’Art de Catalunya (MNAC)', '몬주익 아래 국립 궁전 건물의 미술관으로, 피레네 산골 성당에서 떼어 온 로마네스크 벽화와 모더니즘 미술이 유명합니다. 앞 계단에서 시내가 내려다보입니다.', 'The museum in the Palau Nacional on Montjuïc, famous for Romanesque murals taken from Pyrenean churches and for Modernisme art; the steps in front look over the city.', 'Museu Nacional d’Art de Catalunya', 120, 180, c='mon')),
 ],
 'seville': [
  (15, S('황금의 탑', 'Torre del Oro', '과달키비르강 변의 12각형 탑으로, 알모하드 왕조가 강으로 들어오는 배를 막으려고 세웠습니다. 안에 작은 해양 박물관이 있습니다.', 'The twelve-sided tower on the Guadalquivir, built by the Almohads to control the river approach to the city; it houses a small naval museum.', 'Torre del Oro Sevilla', 20, 30)),
  (16, S('마리아 루이사 공원', 'Parque de María Luisa', '강을 따라 펼쳐진 세비야의 대표 공원으로, 분수와 타일 벤치, 연못 사이로 스페인 광장까지 이어집니다.', 'Seville’s main park, stretching along the river, with fountains, tiled benches and ponds leading to the Plaza de España.', 'Parque de María Luisa', 45, 90, b='no', n=FREE)),
  (17, S('두에냐스 궁전', 'Palacio de las Dueñas', '알바 공작 가문의 15세기 말 궁전으로, 고딕·무데하르 양식이 섞인 안뜰과 정원이 아름답습니다. 시인 안토니오 마차도가 이곳에서 태어났습니다.', 'The House of Alba’s late-15th-century palace, with courtyards and gardens mixing Gothic and Mudéjar styles; the poet Antonio Machado was born here.', 'Palacio de las Dueñas Sevilla', 60, 75)),
  (18, S('오스피탈 데 로스 베네라블레스', 'Hospital de los Venerables', '산타 크루스 지구 한가운데의 17세기 바로크 사제 요양원으로, 지금은 벨라스케스 센터가 되어 그의 작품을 전시합니다.', 'A 17th-century Baroque home for elderly priests in the heart of Santa Cruz, now the Velázquez Center showing his work.', 'Hospital de los Venerables Sevilla', 45, 60)),
  (19, S('이탈리카 로마 유적', 'Itálica', '기원전 206년 스키피오가 세운 로마 도시 유적으로, 거대한 원형 경기장과 모자이크 바닥이 남아 있습니다. 근교 산티폰세에 있습니다.', 'The Roman city founded by Scipio in 206 BC near Santiponce, with a huge amphitheatre and mosaic floors.', 'Itálica Santiponce', 120, 180, group=DAY, c='mon', n='세비야에서 버스로 약 30분입니다.|About 30 min by bus from Seville.')),
 ],
 'cordoba': [
  (8, S('칼라오라 탑', 'Torre de la Calahorra', '로마 다리 남쪽 끝을 지키는 이슬람 시대 성문 탑으로, 안에 알안달루스 시대를 소개하는 박물관이 있습니다.', 'The Islamic-era gate tower guarding the south end of the Roman bridge, with a museum on al-Andalus inside.', 'Torre de la Calahorra Córdoba', 45, 60)),
  (9, S('코레데라 광장', 'Plaza de la Corredera', '사방을 아케이드 건물이 둘러싼 네모난 광장으로, 코르도바에서 드문 카스티야식 큰 광장입니다. 테라스 바가 늘어서 있습니다.', 'A square entirely enclosed by arcaded buildings, a rare Castilian-style main square in Córdoba, lined with terrace bars.', 'Plaza de la Corredera Córdoba', 20, 30, b='no', n=FREE)),
  (10, S('칼리프 시대 목욕탕', 'Caliphal Baths', '옛 칼리프 궁전 옆에서 발굴된 이슬람 목욕탕 유적으로, 일부를 복원해 박물관으로 엽니다.', 'An Islamic bathhouse excavated beside the former caliphs’ palace, partly reconstructed and open as a museum.', 'Baños del Alcázar Califal Córdoba', 30, 45)),
 ],
 'granada': [
  (14, S('알카이세리아', 'Alcaicería', '대성당 옆 나스르 왕조 시대 비단 시장 자리의 좁은 골목 시장으로, 1843년 불탄 뒤 다시 지어 지금은 기념품 가게가 늘어서 있습니다.', 'The narrow market lanes beside the cathedral on the site of the Nasrid silk bazaar, rebuilt after an 1843 fire and now full of souvenir stalls.', 'Alcaicería Granada', 20, 30, b='no', n=FREE)),
  (15, S('엘 바뉴엘로 (아랍 목욕탕)', 'El Bañuelo', '다로강 변에 남은 11~12세기 이슬람 목욕탕으로, 별 모양 채광창이 뚫린 둥근 천장이 그대로 있습니다.', 'An 11th–12th-century hammam on the banks of the Darro, its vaults still pierced by star-shaped skylights.', 'El Bañuelo Granada', 15, 20)),
  (16, S('그라나다 카르투하 수도원', 'Monastery of La Cartuja', '시 북쪽의 카르투시오회 수도원으로, 대리석과 금박으로 가득 찬 성구실이 스페인 바로크 장식의 절정으로 꼽힙니다.', 'The Carthusian monastery north of the centre, whose sacristy, dense with marble and gilding, is counted a high point of Spanish Baroque decoration.', 'Monasterio de la Cartuja Granada', 45, 60)),
 ],
 'malaga': [
  (11, S('라리오스 거리', 'Calle Larios', '1891년에 낸 대리석 바닥의 보행자 거리로, 말라가 구시가의 중심 쇼핑가입니다. 성탄절 조명이 유명합니다.', 'The marble-paved pedestrian street opened in 1891, the main shopping street of the old town, famous for its Christmas lights.', 'Calle Larios Málaga', 20, 30, b='no', n=FREE)),
  (12, S('피카소 생가 박물관', 'Picasso Birthplace Museum', '메르세드 광장의 피카소가 태어난 집으로, 가족의 물건과 판화·도자기를 전시합니다.', 'The house on Plaza de la Merced where Picasso was born, with family belongings, prints and ceramics.', 'Museo Casa Natal Picasso Málaga', 45, 60)),
  (13, S('카르멘 티센 미술관', 'Carmen Thyssen Museum', '16세기 궁전을 고친 미술관으로, 19세기 안달루시아 풍경화와 풍속화를 모았습니다.', 'A museum in a 16th-century palace with 19th-century Andalusian landscape and genre painting.', 'Museo Carmen Thyssen Málaga', 60, 90, c='mon')),
 ],
 'valencia': [
  (9, S('도스 아구아스 후작 궁전 (국립 도자기 박물관)', 'Palace of the Marqués de Dos Aguas', '설화석고 조각이 넘실대는 로코코 정문으로 유명한 궁전으로, 안에 국립 도자기 박물관이 있습니다.', 'The palace famous for its swirling Rococo alabaster doorway, home to the National Ceramics Museum.', 'Palacio del Marqués de Dos Aguas Valencia', 60, 75, c='mon')),
  (10, S('비르헨 광장', 'Plaza de la Virgen', '대성당과 수호성인 성당 사이의 광장으로, 투리아강을 상징하는 분수가 있습니다. 목요일 정오엔 천 년 넘은 물 재판소가 대성당 문 앞에서 열립니다.', 'The square between the cathedral and the basilica of the city’s patroness, with a fountain for the River Turia; at noon on Thursdays the centuries-old Water Tribunal meets at the cathedral door.', 'Plaza de la Virgen Valencia', 20, 30, b='no', n=FREE)),
  (11, S('콜론 시장', 'Mercado de Colón', '타일과 철골로 장식한 모더니즘 시장 건물로, 지금은 카페와 식당이 들어서 있습니다.', 'A Modernisme market hall decorated with tiles and ironwork, now filled with cafés and restaurants.', 'Mercado de Colón Valencia', 30, 45, b='no', n=FREE)),
  (12, S('북역', 'Estació del Nord', '오렌지 모자이크와 타일로 꾸민 20세기 초 모더니즘 기차역으로, 대합실 장식이 아름답습니다.', 'The early-20th-century Modernisme station decorated with orange mosaics and tiles, with a beautiful hall.', 'Estación del Norte Valencia', 15, 20, b='no', n=FREE)),
  (13, S('콰르트 탑', 'Torres de Quart', '중세 성벽의 서쪽 성문 탑으로, 19세기 포격 자국이 남아 있고 꼭대기에 오를 수 있습니다.', 'The western gate towers of the medieval walls, still scarred by 19th-century cannon fire; you can climb to the top.', 'Torres de Quart Valencia', 20, 30)),
 ],
 'toledo': [
  (11, S('산타 마리아 라 블랑카 회당', 'Synagogue of Santa María la Blanca', '말굽 아치와 하얀 기둥이 줄지어 선 중세 유대교 회당으로, 뒤에 성당으로 쓰이며 지금 이름을 얻었습니다.', 'A medieval synagogue of white pillars and horseshoe arches, later used as a church, which gave it its present name.', 'Sinagoga de Santa María la Blanca Toledo', 15, 20)),
  (12, S('트란시토 회당 (세파르디 박물관)', 'Synagogue of El Tránsito (Sephardic Museum)', '정교한 무데하르 석고 장식이 남은 14세기 회당으로, 스페인 유대인의 역사를 보여 주는 세파르디 박물관이 있습니다.', 'A 14th-century synagogue with fine Mudéjar stucco work, home to the Sephardic Museum on the history of Spain’s Jews.', 'Sinagoga del Tránsito Toledo', 45, 60, c='mon')),
  (13, S('크리스토 데 라 루스 모스크', 'Mosque of Cristo de la Luz', '10세기 말 지은 작은 모스크로, 톨레도에 남은 이슬람 시대 건물 가운데 가장 온전합니다.', 'A small mosque built at the end of the 10th century, the best preserved building from Toledo’s Islamic era.', 'Mezquita del Cristo de la Luz Toledo', 15, 20)),
 ],
 'bilbao': [
  (9, S('빌바오 미술관', 'Bilbao Fine Arts Museum', '도냐 카실다 공원 옆 미술관으로, 엘 그레코·고야부터 바스크 화가까지 스페인 미술을 폭넓게 모았습니다.', 'The museum beside Doña Casilda park, with Spanish art from El Greco and Goya to Basque painters.', 'Museo de Bellas Artes de Bilbao', 90, 120, c='tue')),
  (10, S('아스쿠나 센트로아', 'Azkuna Zentroa', '옛 와인 창고를 필리프 스탁이 고친 문화 센터로, 모양이 모두 다른 기둥 43개가 받친 홀과 바닥이 유리인 옥상 수영장이 독특합니다.', 'A former wine warehouse turned cultural centre by Philippe Starck, with a hall of 43 columns each different and a rooftop pool with a glass floor.', 'Azkuna Zentroa Bilbao', 30, 45, b='no', n='건물은 무료로 둘러볼 수 있고 전시는 유료일 수 있습니다.|The building is free to wander; some exhibitions are ticketed.')),
 ],
 'san-sebastian': [
  (9, S('산 텔모 박물관', 'San Telmo Museoa', '구시가 끝 16세기 수도원에 있는 바스크 사회 박물관으로, 회랑과 호세 마리아 세르트의 벽화가 있는 성당이 볼거리입니다.', 'The museum of Basque society in a 16th-century convent at the edge of the old town, with a cloister and a church covered in murals by Josep Maria Sert.', 'San Telmo Museoa', 75, 90, c='mon')),
  (10, S('산타 마리아 델 코로 성당', 'Basilica of Santa María del Coro', '구시가 골목 끝에서 우르굴산을 등지고 선 18세기 바로크 성당으로, 화려한 정면이 맞은편 대성당까지 이어진 거리 끝에 보입니다.', 'The 18th-century Baroque basilica backed against Monte Urgull, its ornate façade closing the view up the old-town street from the cathedral.', 'Basílica de Santa María del Coro San Sebastián', 15, 20)),
 ],
 'santiago': [
  (8, S('산 마르틴 피나리오 수도원', 'Monastery of San Martiño Pinario', '대성당 북쪽의 거대한 베네딕토회 수도원으로, 엘에스코리알 다음으로 스페인에서 큰 수도원이었습니다. 성당과 성가대석, 박물관을 봅니다.', 'The vast Benedictine monastery north of the cathedral, once the second-largest in Spain after El Escorial; see its church, choir stalls and museum.', 'San Martiño Pinario Santiago', 45, 60)),
  (9, S('갈리시아 문화 도시', 'City of Culture of Galicia', '가이아스산 위에 피터 아이젠먼이 설계한 문화 단지로, 산 능선처럼 물결치는 건물에 도서관·박물관이 들어서 있습니다.', 'The cultural complex on Mount Gaiás designed by Peter Eisenman, its buildings rolling like hills, with a library and museum.', 'Cidade da Cultura de Galicia', 60, 90, n='시내에서 버스로 약 15분입니다.|About 15 min by bus from the centre.')),
  (10, S('피니스테레 곶', 'Cape Finisterre', '‘땅끝’이라는 이름의 대서양 곶으로, 많은 순례자가 산티아고에서 이어 걸어와 등대 앞에서 해넘이를 봅니다.', 'The Atlantic cape whose name means “end of the earth”, where many pilgrims continue on from Santiago to watch the sunset by the lighthouse.', 'Cabo Fisterra', 240, 360, group=DAY, b='no', n='산티아고에서 버스로 약 2시간~2시간 30분입니다.|About 2–2½ hr by bus from Santiago.')),
 ],
 'pamplona': [
  (5, S('나바라 박물관', 'Museum of Navarre', '16세기 병원 건물에 로마 모자이크부터 고야의 초상화까지 나바라 지방의 미술과 유물을 모은 박물관입니다.', 'The museum in a 16th-century hospital, with the art and finds of Navarre from Roman mosaics to a portrait by Goya.', 'Museo de Navarra Pamplona', 60, 90, c='mon')),
  (6, S('산 세르닌 성당', 'Church of San Saturnino', '구시가 한가운데 두 탑이 선 고딕 성당으로, 순례자들이 지나는 길목에 있습니다.', 'The twin-towered Gothic church in the heart of the old town, on the pilgrims’ route through the city.', 'Iglesia de San Saturnino Pamplona', 15, 20, b='no', n=FREE)),
  (7, S('올리테 왕궁', 'Royal Palace of Olite', '나바라 왕들이 살던 탑과 성벽이 많은 성 궁전으로, 나바라에서 가장 많은 사람이 찾는 명소입니다.', 'The castle-palace of the kings of Navarre, bristling with towers and battlements; the most visited sight in Navarre.', 'Palacio Real de Olite', 120, 180, group=DAY, n='팜플로나에서 버스로 약 45분입니다.|About 45 min by bus from Pamplona.')),
  (8, S('론세스바예스', 'Roncesvalles', '프랑스 국경에서 몇 km 떨어진 피레네 해발 약 900m의 마을로, 산티아고 순례길 프랑스 길의 스페인 쪽 첫 마을입니다. 중세 순례자 숙소와 왕립 성당이 있습니다.', 'A Pyrenean village at about 900 m, a few kilometres from the French border, the first stop in Spain on the Camino Francés, with a medieval pilgrims’ hospice and royal collegiate church.', 'Roncesvalles', 180, 240, group=DAY, n='팜플로나에서 버스로 약 1시간이며 하루 편수가 적습니다.|About 1 hr by bus from Pamplona, with few buses a day.')),
  (9, S('푸엔테 라 레이나', 'Puente la Reina', '여러 순례길이 하나로 합쳐지는 마을로, 11세기에 놓인 여섯 아치의 로마네스크 다리를 건너 순례자들이 서쪽으로 떠납니다.', 'The town where pilgrim routes merge into one, whose six-arched Romanesque bridge of the 11th century carries walkers west.', 'Puente la Reina', 90, 120, group=DAY, b='no', n='팜플로나에서 버스로 약 30분입니다.|About 30 min by bus from Pamplona.')),
 ],
 'salamanca': [
  (8, S('산 에스테반 수도원', 'Convent of San Esteban', '정면 전체가 조각으로 덮인 플라테레스크 양식의 도미니코회 수도원으로, 회랑과 거대한 금빛 제단이 볼거리입니다.', 'The Dominican convent whose whole front is carved in the Plateresque style, with a cloister and a huge gilded altarpiece.', 'Convento de San Esteban Salamanca', 45, 60)),
  (9, S('칼리스토와 멜리베아 정원', 'Huerto de Calixto y Melibea', '옛 성벽 위 작은 정원으로, 소설 『셀레스티나』의 연인들이 만난 곳이라 전해집니다. 대성당이 가까이 보입니다.', 'A small garden on the old walls, said to be where the lovers of La Celestina met, with close views of the cathedrals.', 'Huerto de Calixto y Melibea Salamanca', 15, 20, b='no', n=FREE)),
 ],
 'zaragoza': [
  (7, S('고야 박물관', 'Museo Goya – Ibercaja', '사라고사 근교 출신 고야의 판화 연작 전체와 회화를 볼 수 있는 미술관입니다.', 'A museum showing paintings by Goya, who was born near Zaragoza, and all his series of prints.', 'Museo Goya Colección Ibercaja Zaragoza', 60, 90)),
 ],
 'palma': [
  (9, S('에스 발루아르드 미술관', 'Es Baluard', '옛 성벽 보루 안에 2004년 문을 연 현대 미술관으로, 성벽 위 테라스에서 항구와 대성당이 보입니다.', 'The modern art museum opened in 2004 inside a bastion of the old walls; its terraces look over the harbour and cathedral.', 'Es Baluard Palma', 60, 90, c='mon')),
  (10, S('팔라우 마르치', 'Palau March', '대성당 맞은편 저택의 미술관으로, 테라스에 로댕·헨리 무어 등의 조각이 놓여 있습니다.', 'The mansion-museum opposite the cathedral, with sculptures by Rodin, Henry Moore and others on its terrace.', 'Palau March Palma', 45, 60)),
 ],
 'montserrat': [
  (5, S('몬세라트 박물관', 'Museu de Montserrat', '수도원 앞 광장의 미술관으로, 엘 그레코·카라바조부터 피카소·달리까지의 작품과 고고학 유물을 전시합니다.', 'The museum on the abbey square, with works from El Greco and Caravaggio to Picasso and Dalí, plus archaeological finds.', 'Museu de Montserrat', 60, 90)),
  (6, S('에스콜라니아 소년 합창단', 'Escolania de Montserrat', '14세기부터 이어진 유럽에서 가장 오래된 소년 합창단 가운데 하나로, 대성당에서 짧은 성가를 부릅니다.', 'One of Europe’s oldest boys’ choirs, dating back to the 14th century, which sings short services in the basilica.', 'Escolania de Montserrat', 20, 30, b='no', n='보통 평일 낮 공연이 있으며 방학과 일부 요일은 쉽니다. 공식 일정을 확인하세요.|Usually sings at midday on weekdays, with breaks in holidays and on some days; check the official schedule.')),
 ],
}


def groups_of(c, cid):
    out = []
    for m in re.finditer(rf'id: "{cid}-h(\d+)"(.*?)\n      \}}', c, re.S):
        g = re.search(r'group: \{ ko: "([^"]*)", en: "([^"]*)" \}', m.group(2))
        out.append((int(m.group(1)), g.groups() if g else None))
    return out


def ins(o, after, new):
    out = []
    for n, gr in o:
        out.append((n, gr))
        if n == after:
            out += [(x, gx if gx != 'same' else gr) for x, gx in new]
    return out


def flat(cid, nums, trips=()):
    return [(n, None) for n in nums] + [(n, DAY) for n in trips]


IT = [
 ("      ['구시가와 왕궁|Old town & Royal Palace', 5, 26, 21, 4, 11, 24, 13, 3, 6, 10, 9],\n",
  "      ['구시가와 왕궁|Old town & Royal Palace', 5, 30, 26, 21, 4, 11, 24, 13, 3, 6, 10, 9],\n"),
 ("      ['그란비아와 프라도, 레티로|Gran Vía, Prado & Retiro', 28, 20, 8, 25, 27, 7, 19, 1, 2],\n",
  "      ['그란비아와 프라도, 레티로|Gran Vía, Prado & Retiro', 28, 20, 8, 25, 27, 7, 29, 2, 1, 32, 19, 33],\n"),
 ("      ['레이나 소피아와 소로야|Reina Sofía & Sorolla', 14, 18, 23, 12],\n",
  "      ['레이나 소피아와 소로야|Reina Sofía & Sorolla', 14, 18, 31, 23, 12],\n"),
 ("      ['람블라스와 고딕 지구|La Rambla & Gothic Quarter', 9, 4, 10, 17, 15, 3, 13, 27],\n",
  "      ['람블라스와 고딕 지구|La Rambla & Gothic Quarter', 9, 4, 10, 17, 15, 3, 13, 31, 32, 27],\n"),
 ("      ['몬주익과 바다|Montjuïc & the waterfront', 20, 8, 19, 5],\n",
  "      ['몬주익과 바다|Montjuïc & the waterfront', 20, 34, 33, 8, 19, 5],\n"),
 ("      ['대성당과 알카사르|Cathedral & Alcázar', 2, 6, 7, 1, 12, 3],\n",
  "      ['대성당과 알카사르|Cathedral & Alcázar', 2, 6, 7, 1, 12, 18, 15, 16, 3],\n"),
 ("      ['시내와 트리아나|City centre & Triana', 11, 13, 5, 9, 8, 4],\n    ],\n    trips: [['헤레스 셰리 와이너리|Jerez sherry bodegas', 14]],\n",
  "      ['시내와 트리아나|City centre & Triana', 11, 17, 13, 5, 9, 8, 4],\n    ],\n    trips: [['이탈리카|Itálica', 19], ['헤레스 셰리 와이너리|Jerez sherry bodegas', 14]],\n"),
 ("      ['시내와 알바이신|City centre & Albaicín', 4, 6, 10, 9, 8, 2, 13, 5],\n",
  "      ['시내와 알바이신|City centre & Albaicín', 4, 6, 14, 10, 9, 8, 15, 2, 13, 5],\n"),
 ("  cordoba: { days: [['', 4, 1, 6, 2, 3, 5]],", "  cordoba: { days: [['', 8, 4, 1, 6, 2, 10, 3, 5, 9]],"),
 ("  zaragoza: [2, 4, 1, 3, 6, 5],\n", "  zaragoza: [2, 4, 1, 3, 7, 6, 5],\n"),
 ("  salamanca: [1, 5, 6, 2, 3, 7, 4],\n", "  salamanca: [1, 5, 6, 2, 3, 9, 8, 7, 4],\n"),
 ("  santiago: [5, 2, 1, 7, 3, 4, 6],\n", "  santiago: { days: [['', 5, 2, 1, 7, 3, 8, 4, 6, 9]], trips: [['피니스테레 곶|Cape Finisterre', 10]] },\n"),
 ("  pamplona: [1, 2, 3, 4],\n", "  pamplona: { days: [['', 1, 2, 6, 3, 5, 4]], trips: [['올리테 왕궁|Olite', 7], ['론세스바예스|Roncesvalles', 8], ['푸엔테 라 레이나|Puente la Reina', 9]] },\n"),
 ("  valencia: { days: [['', 7, 3, 2, 4, 6, 1, 5]],", "  valencia: { days: [['', 7, 10, 3, 9, 4, 2, 13, 12, 11, 6, 1, 5]],"),
 ("  malaga: { days: [['', 3, 2, 8, 1, 5, 9, 4]],", "  malaga: { days: [['', 3, 11, 13, 2, 12, 8, 1, 5, 9, 4]],"),
 ("  bilbao: { days: [['', 1, 5, 6, 2, 3, 7]],", "  bilbao: { days: [['', 1, 9, 10, 5, 6, 2, 3, 7]],"),
 ("  toledo: { days: [['', 8, 2, 7, 1, 3, 4, 6, 5]],", "  toledo: { days: [['', 8, 13, 2, 7, 1, 3, 12, 11, 4, 6, 5]],"),
 ("  'san-sebastian': { days: [['', 5, 7, 6, 1, 3, 2, 4]],", "  'san-sebastian': { days: [['', 5, 7, 6, 1, 3, 2, 10, 9, 4]],"),
 ("  montserrat: [1, 4, 3, 2],\n", "  montserrat: [1, 6, 5, 4, 3, 2],\n"),
 ("  palma: { days: [['', 1, 3, 5, 2, 4, 6]],", "  palma: { days: [['', 1, 10, 3, 5, 2, 9, 4, 6]],"),
]


def main():
    c = rd('cities.ts')
    for cid, items in ADD.items():
        c = add_sights(c, cid, items, VF)
    o = [x for x in groups_of(c, 'madrid') if x[0] < 29]
    o = ins(o, 5, [(30, 'same')]); o = ins(o, 7, [(29, 'same')]); o = ins(o, 1, [(32, 'same')]); o = ins(o, 19, [(33, 'same')]); o = ins(o, 23, [(31, 'same')])
    c = reorder(c, 'madrid', o)
    o = [x for x in groups_of(c, 'barcelona') if x[0] < 31]
    o = ins(o, 13, [(31, 'same'), (32, 'same')]); o = ins(o, 20, [(34, 'same'), (33, 'same')])
    c = reorder(c, 'barcelona', o)
    o = [x for x in groups_of(c, 'seville') if x[0] < 15]
    o = ins(o, 12, [(18, 'same')]); o = ins(o, 5, [(17, 'same')]); o = ins(o, 8, [(15, 'same')]); o = ins(o, 3, [(16, 'same')])
    o = [x for x in o if x[0] != 14] + [(19, DAY), (14, DAY)]
    c = reorder(c, 'seville', o)
    o = [x for x in groups_of(c, 'granada') if x[0] < 14]
    o = ins(o, 6, [(14, 'same')]); o = ins(o, 9, [(16, 'same')]); o = ins(o, 8, [(15, 'same')])
    c = reorder(c, 'granada', o)
    o = [x for x in groups_of(c, 'toledo') if x[0] < 11]
    o = ins(o, 2, [(13, 'same')]); o = ins(o, 3, [(12, 'same'), (11, 'same')])
    c = reorder(c, 'toledo', o)
    c = reorder(c, 'cordoba', flat('cordoba', (8, 4, 1, 6, 2, 10, 3, 5, 9), (7,)))
    c = reorder(c, 'malaga', flat('malaga', (3, 11, 13, 2, 12, 8, 1, 5, 9, 4), (6, 7, 10)))
    c = reorder(c, 'valencia', flat('valencia', (7, 10, 3, 9, 4, 2, 13, 12, 11, 6, 1, 5), (8,)))
    c = reorder(c, 'bilbao', flat('bilbao', (1, 9, 10, 5, 6, 2, 3, 7), (4, 8)))
    c = reorder(c, 'san-sebastian', flat('san-sebastian', (5, 7, 6, 1, 3, 2, 10, 9, 4), (8,)))
    c = reorder(c, 'santiago', flat('santiago', (5, 2, 1, 7, 3, 8, 4, 6, 9), (10,)))
    c = reorder(c, 'pamplona', flat('pamplona', (1, 2, 6, 3, 5, 4), (7, 8, 9)))
    c = reorder(c, 'salamanca', flat('salamanca', (1, 5, 6, 2, 3, 9, 8, 7, 4)))
    c = reorder(c, 'zaragoza', flat('zaragoza', (2, 4, 1, 3, 7, 6, 5)))
    c = reorder(c, 'palma', flat('palma', (1, 10, 3, 5, 2, 9, 4, 6), (7, 8)))
    c = reorder(c, 'montserrat', flat('montserrat', (1, 6, 5, 4, 3, 2)))
    wr('cities.ts', c)
    it = rd('itinerary-iberia.ts')
    for a, b in IT:
        assert it.count(a) == 1, a
        it = it.replace(a, b)
    wr('itinerary-iberia.ts', it)


if __name__ == '__main__':
    main()
