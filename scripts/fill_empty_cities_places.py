#!/usr/bin/env python3
"""2026-11-04: places for the 31 cities that had none (Belarus skipped at the user's request — travel ban).
Restaurants: MICHELIN Guide 2026 entries (read from each guide page) first, then Google Maps places rated >= 4.5
with many reviews; bakeries/cafés from Google Maps (>= 4.4). Every row's name, address and open status was read
from its Google Maps place page on 2026-11-04 (temporarily closed / moved ones left out). Run once."""
import glob, os
from add_daytrip_places import rd, wr, js

R, B, C = 'fine_dining', 'bakery', 'cafe'
SK, SE = '미쉐린 가이드 선정.', 'In the MICHELIN Guide.'
# file -> city -> [(cat, name, address, ko, en, michelin)]
DATA = {
 'uk': {'whitby': [
  (R, 'Magpie Café', '14 Pier Road, Whitby YO21 3PU', '항구 앞의 피시앤칩스·해산물 식당.', 'Fish-and-chips and seafood restaurant facing the harbour.', None),
  (R, 'Trenchers', 'New Quay Road, Whitby YO21 1DH', '역 근처의 피시앤칩스·해산물 식당.', 'Fish-and-chips and seafood restaurant near the station.', None),
  (R, 'The Brasserie at Saltmoore', 'Saltmoore, Sandsend Road, Whitby YO21 3ST', f'샌즈엔드 길 호텔의 모던 브리티시 레스토랑. {SK}', f'Modern British restaurant in a hotel on the Sandsend road. {SE}', None),
  (B, "Botham's of Whitby", '35/39 Skinner Street, Whitby YO21 3AH', '스키너 거리의 오래된 빵집 겸 찻집.', 'Long-established bakery and tea room on Skinner Street.', None),
  (C, 'Sherlocks Coffee Shop', 'Rose and Crown Yard, 10 Flowergate, Whitby YO21 3BA', '플라워게이트 골목 안쪽의 커피숍.', 'Coffee shop in a yard off Flowergate.', None),
  (C, 'Mr Cooper’s Coffee House', '72 Church Street, Whitby YO22 4AS', '수도원 쪽 처치 거리의 커피하우스.', 'Coffee house on Church Street, on the abbey side.', None)]},
 'at': {
  'durnstein': [
  (R, 'Loibnerhof', 'Unterloiben 7, 3601 Dürnstein', f'운터로이벤 마을의 바하우 향토 요리 식당. {SK}', f'Wachau country cooking in Unterloiben. {SE}', None),
  (B, 'Bäckerei Schmidl', 'Dürnstein 21, 3601 Dürnstein', '마을 중심 거리의 빵집. 바하우 전통 빵 라벨을 굽습니다.', 'Bakery on the main street, baking the Wachau’s traditional Laberl rolls.', None)],
  'bad-ischl': [
  (R, 'Spoarherd Gastropub', 'Leitenbergerstraße 2, 4820 Bad Ischl', '시내의 가스트로펍.', 'Gastropub in the town.', None),
  (B, 'Konditorei Zauner', 'Pfarrgasse 7, 4820 Bad Ischl', '1832년에 문을 연 제과점. 츠아우너슈톨렌이 대표 과자입니다.', 'Confectioner founded in 1832, known for its Zaunerstollen.', None),
  (C, 'Rührwerk Bad Ischl', 'Kaiser-Franz-Josef-Straße 3-5, 4820 Bad Ischl', '시내 중심의 카페.', 'Café in the town centre.', None),
  (C, 'Café Bar Johann', 'Schröpferplatz 2, 4820 Bad Ischl', '슈뢰퍼 광장의 카페.', 'Café on the Schröpferplatz.', None)],
  'werfen': [
  (R, 'Obauer', 'Markt 46, 5450 Werfen', '오바우어 형제의 레스토랑. 미쉐린 2스타.', 'The Obauer brothers’ restaurant. Two Michelin stars.', 'star2'),
  (R, 'Stiege No1', 'Markt 10, 5450 Werfen', '마르크트 거리의 레스토랑.', 'Restaurant on the Markt.', None)],
  'zell-am-see': [
  (R, 'Erlhof', 'Erlhofweg 11, 5700 Zell am See', f'호수 동쪽 호텔의 잘츠부르크 향토 요리 식당. {SK}', f'Regional cooking at a hotel on the east shore of the lake. {SE}', None),
  (R, 'Seecamp Restaurant by Rudi Eder', 'Thumersbacher Straße 34, 5700 Zell am See', '호숫가 캠핑장의 오스트리아 요리 식당.', 'Austrian restaurant at the lakeside campsite.', None),
  (B, 'Bäckerei Unterberger', 'Postplatz 4, 5700 Zell am See', '시내 우체국 광장의 빵집.', 'Bakery on the Postplatz in the centre.', None),
  (C, 'Bella Bean Coffee Roastery', 'Schloßplatz 2a, 5700 Zell am See', '시내 중심의 스페셜티 커피 로스터리.', 'Speciality coffee roastery in the centre.', None)],
  'klagenfurt': [
  (R, 'Gasthaus im Landhaushof', 'Landhaushof 1, 9020 Klagenfurt', '주 의사당 안뜰의 오스트리아 요리 식당.', 'Austrian restaurant in the courtyard of the Landhaus.', None),
  (R, 'Zum Heiligen Josef', 'Osterwitzgasse 7, 9020 Klagenfurt', '구시가의 오스트리아 요리 식당.', 'Austrian restaurant in the old town.', None),
  (R, 'Das Vogelhaus', 'Domgasse 22, 9020 Klagenfurt', f'대성당 근처의 케른텐 향토 요리 식당. {SK}', f'Carinthian cooking near the cathedral. {SE}', None),
  (B, 'Fahrnberger Cafe Konditorei', 'St. Veiter Straße 144, 9020 Klagenfurt', '시내 북쪽의 제과점 겸 카페.', 'Pastry shop and café north of the centre.', None),
  (C, 'Phoenix Book Café', 'Alter Platz 24, 9020 Klagenfurt', '알터 플라츠의 책 카페.', 'Book café on the Alter Platz.', None),
  (C, 'Zero Gravity Specialty Coffee', 'Pernhartgasse 12, 9020 Klagenfurt', '구시가의 스페셜티 커피 카페.', 'Speciality coffee café in the old town.', None)]},
 'hu': {'szentendre': [
  (R, 'Teyföl', 'Városház tér 2, 2000 Szentendre', f'시청 광장의 헝가리 요리 식당. {SK}', f'Hungarian restaurant on the town-hall square. {SE}', None),
  (C, 'Café Lex', 'Alkotmány u. 5, 2000 Szentendre', '구시가 골목의 카페.', 'Café in an old-town lane.', None),
  (C, 'Parti Medve Könyvesbolt és Kávézó', 'Ignatovity Jakov u. 2, 2000 Szentendre', '서점 겸 카페.', 'Bookshop and café.', None)]},
 'cz': {
  'telc': [
  (B, 'Cukrárna-Kavárna Haas', 'nám. Zachariáše z Hradce 2, 588 56 Telč', '중앙 광장의 제과점 겸 카페.', 'Cake shop and café on the main square.', None),
  (C, 'Café Telč', 'Na Můstku 37, 588 56 Telč', '구시가의 에스프레소 바.', 'Espresso bar in the old town.', None)],
  'mikulov': [
  (R, 'Bistro Drogérka', 'Náměstí 28/23, 692 01 Mikulov', '중앙 광장의 비스트로.', 'Bistro on the main square.', None),
  (R, 'Bistro W Kodiak', 'Jiráskova 2, 692 01 Mikulov', '시내의 비스트로.', 'Bistro in the town.', None),
  (B, 'Pekařství a bistro Křižákovi', 'Náměstí 207, 692 01 Mikulov', '중앙 광장의 빵집 겸 비스트로.', 'Bakery and bistro on the main square.', None),
  (C, 'moji', 'Svobody 240/4, 692 01 Mikulov', '시내의 커피숍.', 'Coffee shop in the town.', None)]},
 'de': {
  'garmisch-partenkirchen': [
  (R, 'Gasthaus zur Schranne', 'Griesstraße 4, 82467 Garmisch-Partenkirchen', '바이에른 요리를 내는 식당.', 'Bavarian restaurant.', None),
  (R, 'Zum Wildschütz', 'Bankgasse 9, 82467 Garmisch-Partenkirchen', '가르미슈 중심의 바이에른 요리 식당.', 'Bavarian restaurant in central Garmisch.', None),
  (R, 'Husar', 'Fürstenstraße 25, 82467 Garmisch-Partenkirchen', f'벽화가 그려진 집의 클래식 요리 레스토랑. {SK}', f'Classic cooking in a house with a painted façade. {SE}', None),
  (B, 'Bäckerei Benedict Sieß', 'Ludwigstraße 7, 82467 Garmisch-Partenkirchen', '파르텐키르헨 루트비히 거리의 빵집.', 'Bakery on the Ludwigstraße in Partenkirchen.', None),
  (C, 'Café Max', 'Griesstraße 10A, 82467 Garmisch-Partenkirchen', '가르미슈 중심의 카페.', 'Café in central Garmisch.', None),
  (C, 'Wildkaffee Café', 'Bahnhofstraße 40+42, 82467 Garmisch-Partenkirchen', '커피 로스터리의 카페.', 'Café of a local coffee roaster.', None)],
  'cochem': [
  (R, 'Zom Stüffje', 'Oberbachstraße 14, 56812 Cochem', '구시가의 독일 요리 식당.', 'German restaurant in the old town.', None),
  (B, 'Bäckerei Gebr. Lutz', 'Ravenestraße 18, 56812 Cochem', '구시가의 빵집.', 'Bakery in the old town.', None),
  (C, 'Cochemer Kaffeerösterei', 'Markt 6, 56812 Cochem', '마르크트 광장의 커피 로스터리 카페.', 'Coffee roastery café on the market square.', None)],
  'rudesheim': [
  (R, 'BEES Restaurant', 'Am Rottland 6, 65385 Rüdesheim am Rhein', f'농장 식재료로 요리하는 레스토랑. {SK}', f'Farm-to-table restaurant. {SE}', None),
  (R, 'Café-Restaurant Stadt Frankfurt', 'Marktstraße 30, 65385 Rüdesheim am Rhein', '구시가의 독일 요리 식당.', 'German restaurant in the old town.', None),
  (B, 'Bäckerei Aulmann', 'Langstraße 15, 65385 Rüdesheim am Rhein', '구시가 랑 거리의 빵집.', 'Bakery on the Langstraße in the old town.', None),
  (C, 'Art Cafe', 'Drosselgasse 5, 65385 Rüdesheim am Rhein', '드로셀가세 골목의 카페.', 'Café in the Drosselgasse.', None)],
  'bamberg': [
  (R, 'Schlenkerla', 'Dominikanerstraße 6, 96049 Bamberg', '훈제 맥주(라우흐비어) 양조장의 프랑켄 요리 식당.', 'Rauchbier (smoked beer) brewery tavern serving Franconian food.', None),
  (R, 'Brüderla', 'Obstmarkt 1, 96047 Bamberg', '구시가의 프랑켄 요리 식당.', 'Franconian restaurant in the old town.', None),
  (R, 'HENRII', 'Untere Mühlbrücke 5, 96047 Bamberg', f'레그니츠강 다리 옆의 인터내셔널 요리 레스토랑. {SK}', f'International cooking by the Regnitz bridges. {SE}', None),
  (B, 'Kapuzinerbeck', 'Kapuzinerstraße 6, 96047 Bamberg', '구시가의 빵집.', 'Bakery in the old town.', None),
  (B, 'Alfred Seel', 'Lugbank 8, 96049 Bamberg', '구시가 산 쪽의 빵집 겸 제과점.', 'Bakery and pastry shop in the hill town.', None),
  (C, 'Zuckerstück', 'Obere Sandstraße 4, 96049 Bamberg', '잔트 지구의 카페.', 'Café in the Sand quarter.', None),
  (C, 'Hofcafé', 'Austraße 14, 96047 Bamberg', '안뜰 건물 2층의 카페.', 'Café on the first floor of a courtyard building.', None)]},
 'fr': {
  'gordes': [
  (R, 'Les Bories', "Route de l'Abbaye de Sénanque, 84220 Gordes", f'세낭크 수도원 가는 길 호텔의 모던 요리 레스토랑. {SK}', f'Modern cooking at a hotel on the road to Sénanque Abbey. {SE}', None),
  (R, 'Le Teston', '19 impasse de la Tour Sarrazine, 84220 Gordes', '마을 안의 모던 프렌치 레스토랑.', 'Modern French restaurant in the village.', None),
  (B, 'Le Fournil de Mamie Jeanne', 'Route Neuve, 84220 Gordes', '마을의 빵집.', 'Village bakery.', None)],
  'aigues-mortes': [
  (R, "L'Atelier de Nicolas", '28 rue Alsace-Lorraine, 30220 Aigues-Mortes', f'성벽 안의 모던 요리 레스토랑. {SK}', f'Modern cooking inside the walls. {SE}', None),
  (R, 'Le Paiou', '1 rue du 4 Septembre, 30220 Aigues-Mortes', '성벽 안의 모던 프렌치 레스토랑.', 'Modern French restaurant inside the walls.', None),
  (B, 'Délices des Anges', '23 Grand Rue Jean Jaurès, 30220 Aigues-Mortes', '중심가의 과자점.', 'Sweet shop on the main street.', None),
  (C, 'Les Fées Café', '4 rue Émile Zola, 30220 Aigues-Mortes', '성벽 안의 카페.', 'Café inside the walls.', None)],
  'cannes': [
  (R, 'La Cantine Provençale', '9 rue Bivouac Napoléon, 06400 Cannes', '프로방스 요리를 내는 식당.', 'Provençal restaurant.', None),
  (R, "L'Assiette Provençale", '9 quai Saint-Pierre, 06400 Cannes', '옛 항구 앞의 프로방스 요리 식당.', 'Provençal restaurant on the old port.', None),
  (B, 'Le Pain Paillasse', '49 rue Georges Clemenceau, 06400 Cannes', '르 쉬케 언덕 아래의 빵집.', 'Bakery below the Le Suquet hill.', None),
  (C, 'AMAMO Speciality Coffee', '74 rue Meynadier, 06400 Cannes', '메나디에 거리의 스페셜티 커피 카페.', 'Speciality coffee café on the Rue Meynadier.', None),
  (C, 'Cafés Sauvage', '12 rue Hélène Vagliano, 06400 Cannes', '시내 중심의 커피숍.', 'Coffee shop in the centre.', None)]},
 'it': {
  'pisa': [
  (R, 'Erbaluigia', 'Via San Frediano 10/12, 56126 Pisa', f'구시가의 컨템퍼러리 토스카나 요리 레스토랑. {SK}', f'Contemporary Tuscan cooking in the old town. {SE}', None),
  (R, 'Osteria I Santi', 'Via Santa Maria 71, 56126 Pisa', '사탑 가는 길의 이탈리아 요리 식당.', 'Italian restaurant on the street to the Leaning Tower.', None),
  (R, 'Il Peperoncino', 'Via Santa Maria 95, 56126 Pisa', '사탑 가는 길의 이탈리아 요리 식당.', 'Italian restaurant on the street to the Leaning Tower.', None),
  (B, 'Bombolove Pisa', 'Piazza Garibaldi 14, 56126 Pisa', '가리발디 광장의 봄볼로네(이탈리아 도넛) 가게.', 'Bomboloni (Italian doughnut) shop on the Piazza Garibaldi.', None),
  (C, 'Filter Coffee Lab', 'Via Santa Maria 30, 56126 Pisa', '스페셜티 커피 카페.', 'Speciality coffee café.', None),
  (C, 'Caffè Letterario Volta Pagina', 'Via San Martino 71, 56125 Pisa', '아르노강 남쪽의 책 카페.', 'Literary café south of the Arno.', None)],
  'san-gimignano': [
  (R, 'Linfa', "Piazza Sant'Agostino 19/A, 53037 San Gimignano", f'산타고스티노 광장의 창의 요리 레스토랑. {SK}', f'Creative cooking on the Piazza Sant’Agostino. {SE}', None),
  (R, 'San Martino 26', 'Via San Martino 26, 53037 San Gimignano', f'성벽 안의 토스카나 요리 레스토랑. {SK}', f'Tuscan cooking inside the walls. {SE}', None),
  (R, 'Le Vecchie Mura', 'Via Piandornella 15, 53037 San Gimignano', '옛 성벽 아래 공간의 토스카나 요리 식당.', 'Tuscan restaurant in a space under the old walls.', None),
  (B, 'Forno Boboli', 'Via San Matteo 92, 53037 San Gimignano', '1909년부터 이어온 산 마테오 거리의 빵집.', 'Bakery on Via San Matteo, going since 1909.', None),
  (B, 'Pasticceria Il Criollo', 'Via dei Fossi 3A, 53037 San Gimignano', '성벽 밖의 제과점.', 'Pastry shop outside the walls.', None)]},
 'gr': {
  'hydra': [
  (R, 'Paradosiakó', 'Tompazi 8, Hydra 180 40', '항구 뒤편의 그리스 가정식 식당.', 'Greek home-style restaurant behind the harbour.', None),
  (R, 'Veranda Restaurant', 'Sahini 4, Hydra 180 40', '항구가 내려다보이는 테라스 식당.', 'Terrace restaurant overlooking the harbour.', None),
  (B, 'Tsagkaris Pastries', 'Ikonomou, Hydra 180 40', '이드라 아몬드 과자를 파는 제과점.', 'Pastry shop selling Hydra’s almond sweets.', None)],
  'aegina': [
  (R, 'Ouzeri o Skotadis', 'Leof. Dimokratias 46, Aegina 180 10', '항구 앞 해안길의 우제리.', 'Ouzeri on the harbour-front avenue.', None),
  (R, 'Maistrali Restaurant', 'Leof. N. Kazantzaki 3, Aegina 180 10', '항구 근처의 그리스 요리 식당.', 'Greek restaurant near the harbour.', None),
  (B, 'Mourtzis Pistachio', 'Leof. Dimokratias 6, Aegina 180 10', '에기나 특산 피스타치오와 전통 과자를 파는 가게.', 'Shop selling Aegina’s pistachios and traditional sweets.', None),
  (B, 'Melenio', 'Mitropoleos 4, Aegina 180 10', '시내의 파티스리.', 'Patisserie in the town.', None),
  (C, 'Remvi', 'Leof. Dimokratias 51, Aegina 180 10', '항구 앞 해안길의 커피숍.', 'Coffee shop on the harbour-front avenue.', None)]},
 'ch': {'gruyeres': [
  (R, 'Chalet de Gruyères', 'Rue du Bourg 53, 1663 Gruyères', '퐁뒤와 라클레트를 내는 스위스 요리 식당.', 'Swiss restaurant for fondue and raclette.', None),
  (R, 'Auberge de la Halle', 'Rue du Bourg 24, 1663 Gruyères', '마을 중심 거리의 식당.', 'Restaurant on the village’s main street.', None)]},
 'es': {
  'cuenca': [
  (R, 'Raff San Pedro', 'C. San Pedro 58, 16001 Cuenca', '구시가 산 페드로 거리의 레스토랑.', 'Restaurant on Calle San Pedro in the old town.', None),
  (R, 'Romera Bistrót', 'C. de los Tintes 19, 16002 Cuenca', '우에카르강 근처의 비스트로.', 'Bistro near the Huécar river.', None),
  (B, 'Pastelería Marisol', 'C. Diego Jiménez 4, 16004 Cuenca', '신시가의 제과점.', 'Pastry shop in the new town.', None),
  (C, 'Hope Coffee', 'C. Hurtado de Mendoza 1, 16004 Cuenca', '신시가의 커피숍.', 'Coffee shop in the new town.', None)],
  'tarragona': [
  (R, 'El Pòsit', 'Moll de Pescadors 25, 43004 Tarragona', '세라요 어항의 해산물 식당.', 'Seafood restaurant at the El Serrallo fishing port.', None),
  (R, 'Casa Balcells', 'Pla de la Seu 5, 43003 Tarragona', '대성당 앞 광장의 지중해 요리 식당.', 'Mediterranean restaurant on the cathedral square.', None),
  (R, 'La Xarxa', 'Carrer de Sant Pere 38, 43004 Tarragona', f'세라요 지구의 해산물 레스토랑. {SK}', f'Seafood restaurant in the Serrallo district. {SE}', None),
  (B, 'Dolce Pastis', 'Rambla Vella 3, 43003 Tarragona', '람블라 베야의 빵집.', 'Bakery on the Rambla Vella.', None),
  (C, 'Petit Café Tarragona', "Carrer d'en Salinas 8, 43003 Tarragona", '구시가의 에스프레소 바.', 'Espresso bar in the old town.', None),
  (C, 'Jardí Cafè', 'Carrer dels Caputxins 35, 43001 Tarragona', '신시가의 카페.', 'Café in the new town.', None)],
  'sitges': [
  (R, 'Bar Tomeu', 'Carrer Jesús 8, 08870 Sitges', '시내 중심의 타파스 바.', 'Tapas bar in the centre.', None),
  (R, 'Sitges Bon Estar', 'Carrer de les Parellades 63, 08870 Sitges', '시내 중심의 지중해 요리 식당.', 'Mediterranean restaurant in the centre.', None),
  (B, 'Modo Boulangerie', 'Carrer de Rafael Llopart 22, 08870 Sitges', '시내의 빵집.', 'Bakery in the town.', None),
  (B, 'St Pierre', 'Carrer de la Creu Roja 1, 08870 Sitges', '시내의 빵집.', 'Bakery in the town.', None),
  (C, 'La Butaca Cafetería', 'Carrer de Santiago Rusiñol 36, 08870 Sitges', '시내의 커피숍.', 'Coffee shop in the town.', None),
  (C, 'Bloom Coffee', 'Av. Camí de la Fita 10, 08870 Sitges', '시내 북쪽의 카페.', 'Café north of the centre.', None)]},
 'pt': {'tomar': [
  (R, 'O Tabuleiro', 'R. Serpa Pinto 146, 2300 Tomar', '중심가의 포르투갈 요리 식당.', 'Portuguese restaurant on the main street.', None),
  (R, 'Tabernáculo do Rio', 'R. Marquês de Pombal 60, 2300-510 Tomar', '나방강 건너편의 식당.', 'Restaurant across the Nabão river.', None),
  (B, "P'tit Français", 'R. da Silva Magalhães 111, 2300-593 Tomar', '시내의 프랑스식 제과점.', 'French-style pastry shop in the town.', None),
  (C, 'Hanne Café', 'R. Serpa Pinto 57, 2300-592 Tomar', '중심가의 카페.', 'Café on the main street.', None)]},
 'hr': {
  'trogir': [
  (R, 'Il Ponte', 'Kardinala Alojza Stepinca 15a, 21220 Trogir', f'구시가 맞은편 치오보섬 쪽 다리 옆의 컨템퍼러리 레스토랑. {SK}', f'Contemporary restaurant by the bridge to Čiovo, across from the old town. {SE}', None),
  (R, 'Konoba Škrapa', 'Ul. Hrvatskih mučenika 13, 21220 Trogir', '구시가의 달마티아 요리 식당.', 'Dalmatian restaurant in the old town.', None),
  (B, 'Balina Trogir', 'Šubićeva ul. 18, 21220 Trogir', '달마티아 튀김 과자 프리툴레 가게.', 'Shop for fritule, Dalmatian fried doughnuts.', None),
  (C, 'CHI Specialty Coffee Roasters', 'Budislavićeva ul. 3A, 21220 Trogir', '구시가의 스페셜티 커피 로스터리.', 'Speciality coffee roaster in the old town.', None),
  (C, 'Cafe Smokvica', 'Radovanov trg 9, 21220 Trogir', '구시가 라도반 광장의 카페.', 'Café on Radovan Square in the old town.', None)],
  'plitvice': [
  (R, 'Restaurant Petar', 'Rastovača 4, 53231 Plitvička Jezera', '국립공원 1번 입구 근처 라스토바차 마을의 식당.', 'Restaurant in Rastovača village near Entrance 1.', None),
  (R, 'Degenija', 'Selište Drežničko bb, 47245 Rakovica', '공원 북쪽 국도변의 크로아티아 요리 식당.', 'Croatian restaurant on the main road north of the park.', None)]},
 'im': {'castletown': [
  (R, 'The Castle Arms', 'The Quayside, Castletown IM9 1LD', '러셴 성 앞 부두의 오래된 펍.', 'Old pub on the quayside facing Castle Rushen.', None)]},
}


def main():
    d = os.path.dirname(os.path.abspath(__file__))
    for cc, cities in DATA.items():
        f = f'places-{cc}-extra.ts'
        s = rd(f)
        block = ''
        for cid, rows in cities.items():
            assert f"'{cid}'" not in s, cid
            n = {R: 0, B: 0, C: 0}
            block += f'\n  // —— {cid} ——\n'
            for cat, name, addr, ko, en, m in rows:
                n[cat] += 1
                opts = f", {{ michelin: '{m}' }}" if m else ''
                block += f"  place('{cid}-{cat}-{n[cat]}', '{cid}', '{cat}', {js(name)}, {js(addr)}, {js(ko)}, {js(en)}{opts}),\n"
        k = s.rstrip().rindex(']')
        wr(f, s[:k].rstrip('\n') + '\n' + block + s[k:])
        print(f, sum(len(r) for r in cities.values()))


if __name__ == '__main__':
    main()
