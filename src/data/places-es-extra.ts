import { place } from './placeFactory'
import type { Place } from '../types'

export const placesESExtra: Place[] = [
  // —— madrid ——
  place('madrid-fine_dining-1', 'madrid', 'fine_dining', 'DiverXO', 4.7, 'Madrid', '창의 미슐랭 코스.', 'Creative Michelin tasting.', { reviewCount: 1800 }),
  place('madrid-fine_dining-2', 'madrid', 'fine_dining', 'Botín', 4.5, 'Madrid', '세계 최고령 식당 클래식.', 'World’s oldest restaurant classic.', { reviewCount: 12000 }),
  place('madrid-fine_dining-3', 'madrid', 'fine_dining', 'StreetXO', 4.5, 'Madrid', '아시안 퓨전 캐주얼 파인.', 'Asian-fusion casual fine.', { reviewCount: 4200 }),
  place('madrid-fine_dining-4', 'madrid', 'fine_dining', 'Lakasa', 4.5, 'Madrid', '시즌 스페인 다이닝.', 'Seasonal Spanish dining.', { reviewCount: 2100 }),
  place('madrid-fine_dining-5', 'madrid', 'fine_dining', 'Casa Lucio', 4.4, 'Madrid', '휴보스 로토스 클래식.', 'Classic huevos rotos.', { reviewCount: 8600 }),
  place('madrid-bakery-1', 'madrid', 'bakery', 'Panadería Reliquiae', 4.5, 'Madrid', '사워도우 베이커리.', 'Sourdough bakery.', { reviewCount: 1600 }),
  place('madrid-bakery-2', 'madrid', 'bakery', 'Moulin Chocolat', 4.5, 'Madrid', '페이스트리·초콜릿.', 'Pastries and chocolate.', { reviewCount: 2400 }),
  place('madrid-bakery-3', 'madrid', 'bakery', 'Panic', 4.4, 'Madrid', '장인 빵집.', 'Artisan bakery.', { reviewCount: 1800 }),
  place('madrid-bakery-4', 'madrid', 'bakery', 'La Duquesita', 4.4, 'Madrid', '역사적 파티스리.', 'Historic pastry shop.', { reviewCount: 3200 }),
  place('madrid-cafe-1', 'madrid', 'cafe', 'Café Federal', 4.5, 'Madrid', '브런치·스페셜티.', 'Brunch and specialty.', { reviewCount: 2800 }),
  place('madrid-cafe-2', 'madrid', 'cafe', 'HanSo Café', 4.5, 'Madrid', '스페셜티 커피.', 'Specialty coffee.', { reviewCount: 1600 }),
  place('madrid-cafe-3', 'madrid', 'cafe', 'Café Comercial', 4.3, 'Madrid', '클래식 카페.', 'Classic café.', { reviewCount: 5400 }),
  place('madrid-cafe-4', 'madrid', 'cafe', 'Toma Café', 4.5, 'Madrid', '로스터리 카페.', 'Roastery café.', { reviewCount: 2100 }),
  place('madrid-korean-1', 'madrid', 'korean', 'Maru', 4.5, 'Calle de la Reina 37, 28004 Madrid', '마드리드의 대표 한식당.', 'Well-known Korean restaurant in Madrid.'),

  // —— barcelona ——
  place('barcelona-fine_dining-1', 'barcelona', 'fine_dining', 'Alkimia', 4.6, 'Ronda de Sant Antoni 41, 08011 Barcelona', '미쉐린 1스타 레스토랑.', 'One-Michelin-star restaurant.'),
  place('barcelona-fine_dining-2', 'barcelona', 'fine_dining', 'Cal Pep', 4.6, 'Plaça de les Olles 8, 08003 Barcelona, Spain', '엘본 지구에서 70여 가지 타파스를 선보이는 바르셀로나의 상징적인 타파스 바', "Iconic Barcelona tapas bar in El Born serving over 70 fresh, seasonal tapas"),
  place('barcelona-fine_dining-3', 'barcelona', 'fine_dining', 'Can Culleretes', 4.5, "Carrer d'en Quintana 5, 08002 Barcelona, Spain", '1786년 문을 연 바르셀로나에서 가장 오래된 레스토랑, 전통 카탈루냐 요리 전문', "Barcelona's oldest restaurant, open since 1786, serving traditional Catalan cuisine", { reviewCount: 6800 }),
  place('barcelona-fine_dining-4', 'barcelona', 'fine_dining', 'Els Quatre Gats', 4.3, 'Carrer de Montsió 3, 08002 Barcelona, Spain', '피카소가 즐겨 찾던 유서 깊은 모더니즘 양식의 레스토랑', "Historic modernist restaurant that was one of Picasso's favorite haunts", { reviewCount: 5200 }),
  place('barcelona-fine_dining-5', 'barcelona', 'fine_dining', 'Quimet & Quimet', 4.6, 'Carrer del Poeta Cabanyes 25, 08004 Barcelona, Spain', '4대째 이어온 포블레섹의 전설적인 스탠딩 타파스 바, 콘세르바 몬타디토로 유명', 'Legendary fourth-generation standing tapas bar in Poble Sec, known for its conserva montaditos', { reviewCount: 4200 }),
  place('barcelona-korean-1', 'barcelona', 'korean', 'Shingané', 4.5, 'Carrer de Calàbria 232, 08029 Barcelona', '에이샴플레 지구의 정통 한식당.', 'Authentic Korean restaurant in Eixample.'),
  place('barcelona-korean-2', 'barcelona', 'korean', 'Kim BBQ', 4.5, "Carrer d'Aribau 146, 08036 Barcelona, Spain", '떡볶이와 새우튀김 김밥 등 분식 메뉴도 함께 즐길 수 있는 바르셀로나의 한식당', 'Barcelona Korean restaurant also serving bunsik-style dishes like tteokbokki and shrimp tempura kimbap'),
  place('barcelona-korean-3', 'barcelona', 'korean', 'Kimchi Mama', 4.4, 'Carrer del Callao 12, 08014 Barcelona, Spain', '매콤한 떡볶이 등 한국식 길거리 분식을 선보이는 바르셀로나의 캐주얼 한식당', 'Casual Barcelona Korean eatery serving Korean street-food classics like spicy tteokbokki'),
  place('barcelona-korean-4', 'barcelona', 'korean', 'Gyojasang', 4.5, 'Carrer de Mallorca 182, 08036 Barcelona, Spain', '비빔밥과 다양한 한식 셰어 요리를 선보이는 에이샴플레 지구의 한식당', 'Eixample Korean restaurant featuring bibimbap and a range of shareable Korean dishes'),
  place('barcelona-korean-5', 'barcelona', 'korean', 'Kamasot', 4.4, 'Carrer del Consell de Cent 465, 08013 Barcelona, Spain', '김밥 등 분식 메뉴도 갖춘 바르셀로나의 정통 한식당', 'Authentic Barcelona Korean restaurant that also serves bunsik dishes like kimbap'),
  place('barcelona-bakery-1', 'barcelona', 'bakery', 'Baluard', 4.5, 'Carrer de Muntaner 566, 08022 Barcelona, Spain', '바르셀로나 곳곳에 지점을 둔 인기 아르티장 베이커리', 'Popular artisanal bakery with several locations across Barcelona'),
  place('barcelona-bakery-2', 'barcelona', 'bakery', 'Hofmann', 4.6, 'Carrer dels Flassaders 44, 08003 Barcelona, Spain', '마스카포네 크루아상으로 유명한 보른 지구의 전설적인 파티스리', 'Legendary Born-district patisserie famous for its mascarpone-filled croissant', { reviewCount: 2100 }),
  place('barcelona-bakery-3', 'barcelona', 'bakery', 'Escribà', 4.4, 'La Rambla 83, 08002 Barcelona, Spain', '크리스티안 에스크리바가 이끄는 바르셀로나의 유서 깊은 파티스리', "Historic Barcelona patisserie helmed by renowned pastry chef Christian Escribà", { reviewCount: 3400 }),
  place('barcelona-bakery-4', 'barcelona', 'bakery', 'Forn Mistral', 4.5, 'Carrer del Doctor Dou 12, 08001 Barcelona, Spain', '1879년부터 우니베르시타트 광장 인근에서 이어온 전통 베이커리', 'Traditional bakery near Plaça Universitat, baking since 1879'),
  place('barcelona-bakery-5', 'barcelona', 'bakery', 'La Besneta', 4.6, 'Carrer de Torrijos 37, 08012 Barcelona, Spain', '속을 채운 크루아상과 케이크로 유명한 그라시아 지구의 비건 베이커리', 'Vegan bakery in the Gràcia neighborhood known for its filled croissants and cakes'),
  place('barcelona-cafe-1', 'barcelona', 'cafe', 'Mauri', 4.5, 'Rambla de Catalunya, 08007 Barcelona, Spain', '화려한 페이스트리로 유명한 바르셀로나의 전통 베이커리 카페', 'Traditional Barcelona bakery café known for elaborate festive pastries'),
  place('barcelona-cafe-2', 'barcelona', 'cafe', 'Nomad Frutas Selectas', 4.6, 'Carrer de Pujades 95, 08005 Barcelona, Spain', '바르셀로나 스페셜티 커피 신을 대표하는 포블레노우의 로스터리 카페', "Roastery cafe in Poblenou widely seen as the face of Barcelona's specialty coffee scene", { reviewCount: 1800 }),
  place('barcelona-cafe-3', 'barcelona', 'cafe', 'Balzac Café', 4.6, 'Passeig de Sant Joan 127, 08037 Barcelona, Spain', '엄선된 재료로 만든 개성 있는 음료로 인기 있는 에이샴플레의 카페', "Eixample cafe popular for its creative drinks made from scratch with top-notch ingredients"),
  place('barcelona-cafe-4', "barcelona", 'cafe', "Satan's Coffee Corner", 4.5, "Carrer de l'Arc de Sant Ramon del Call 11, 08002 Barcelona, Spain", '고딕 지구에 위치한 바르셀로나의 대표 스페셜티 커피숍', "Barcelona's landmark specialty coffee shop in the Gothic Quarter", { reviewCount: 2600 }),
  place('barcelona-cafe-5', 'barcelona', 'cafe', 'Three Marks Coffee', 4.6, "Carrer d'Ausiàs Marc 151, 08013 Barcelona, Spain", '엘 포르트 피엔크 지역의 첫 스페셜티 커피숍이자 자체 로스터리', "El Fort Pienc's first specialty coffee shop, also operating as its own roastery"),

  // —— seville ——
  place('seville-fine_dining-1', 'seville', 'fine_dining', 'Lalola de Javi Abascal', 4.6, 'Marco Sancho 1, 41003 Sevilla', '미쉐린 빕 구르망 레스토랑.', 'Michelin Bib Gourmand restaurant.'),
  place('seville-bakery-1', 'seville', 'bakery', 'Cafetería Pastelería La Canasta', 4.4, 'C. Regina 14, 41003 Sevilla, Spain', '다양한 빵과 페이스트리를 갖춘 세비야의 인기 베이커리 카페', 'Popular Seville bakery café with a wide range of bread and pastries'),
  place('seville-cafe-1', 'seville', 'cafe', 'Horno San Ginés', 4.5, 'Pl. Jesús de la Pasión 8, 41004 Sevilla, Spain', '현지인들이 즐겨찾는 세비야의 카페콘레체 명소', 'Popular Seville spot where locals gather over café con leche'),

  // —— granada ——
  place('granada-fine_dining-1', 'granada', 'fine_dining', 'Damasqueros', 4.6, 'Calle Damasqueros 3, 18009 Granada', '미쉐린 추천 창의적 테이스팅 메뉴.', 'Michelin-recommended creative tasting menus.'),
  place('granada-korean-1', 'granada', 'korean', 'CoreOlé Korean Food Bar', 4.5, 'C. Elvira, 114, 18010 Granada', '알바이신 지구의 한식당.', 'Korean restaurant in the Albaicín district.'),
  place('granada-bakery-1', 'granada', 'bakery', 'Casa Ysla Pastelería-Cafetería', 4.6, 'C. Recogidas 36, 18002 Granada, Spain', '그라나다 명물 피오노노 케이크를 처음 만든 곳', 'Birthplace of Granada\'s famous Piononos cake'),
  place('granada-cafe-1', 'granada', 'cafe', 'Malamiga', 4.6, 'Granada, Spain', '천연 발효 사워도우 빵으로 유명한 그라나다의 모던 베이커리 카페', 'Modern Granada bakery café known for slow-fermented natural sourdough'),

  // —— valencia ——
  place('valencia-fine_dining-1', 'valencia', 'fine_dining', 'Ricard Camarena Restaurant', 4.5, 'Carrer del Dr. Sumsi 4, 46005 València', '미쉐린 2스타 파인 다이닝.', 'Two-Michelin-star fine dining.'),
  place('valencia-fine_dining-2', 'valencia', 'fine_dining', 'El Poblet', 4.5, 'Carrer dels Correus 8, 46002 València', '미쉐린 2스타 발렌시아 요리.', 'Two-Michelin-star Valencian cuisine.'),
  place('valencia-fine_dining-3', 'valencia', 'fine_dining', 'Fierro', 4.5, 'Carrer Dr. Serrano 4, 46006 València', '미쉐린 1스타 지중해 요리.', 'One-Michelin-star Mediterranean cuisine.'),
  place('valencia-bakery-1', 'valencia', 'bakery', 'La Más Bonita Ruzafa', 4.4, 'Pujada del Toledà 8, 46001 València', '루사파의 인기 베이커리 카페.', 'Popular bakery café in Ruzafa.'),
  place('valencia-cafe-1', 'valencia', 'cafe', 'Bluebell Coffee Co.', 4.4, 'Mercat Central, 46001 València', '발렌시아 최초의 스페셜티 커피.', "Valencia's first specialty coffee shop."),

  // —— malaga ——
  place('malaga-fine_dining-1', 'malaga', 'fine_dining', 'José Carlos García Restaurante', 4.6, 'Puerto de Málaga, Plaza de la Capilla 1, 29016 Málaga', '말라가 유일의 미쉐린 스타 레스토랑.', 'Málaga\'s only Michelin-starred restaurant.'),
  place('malaga-bakery-1', 'malaga', 'bakery', 'La Mallorquina', 4.5, 'Avenida Carlos Haya 1, 29010 Málaga, Spain', '말라가의 명절 디저트로 유명한 가족 운영 제과점', 'Family-run Málaga institution known for holiday sweets and pastries'),
  place('malaga-cafe-1', 'malaga', 'cafe', 'La Canasta', 4.4, 'C. Herrería del Rey 2, 29005 Málaga, Spain', '맛있는 커피와 아침 식사로 유명한 말라가의 카페', 'Málaga café known for delicious coffee and breakfast'),

  // —— bilbao ——
  place('bilbao-fine_dining-1', 'bilbao', 'fine_dining', 'Nerua Guggenheim Bilbao', 4.6, 'Abandoibarra Etorbidea 2, 48001 Bilbao', '구겐하임 미술관 안의 미쉐린 레스토랑.', 'Michelin restaurant inside the Guggenheim Museum.'),
  place('bilbao-bakery-1', 'bilbao', 'bakery', 'Pastelería Don Manuel', 4.5, 'Mazarredo Zumarkalea 79, 48009 Bilbao, Spain', '빌바오 전통 페이스트리와 카롤리나 케이크로 유명한 제과점', 'Bilbao pastry shop famous for traditional treats and its Carolina cake'),
  place('bilbao-cafe-1', 'bilbao', 'cafe', 'Cokooncafé', 4.5, 'Poza Lizentziatuaren Kalea 55, 48013 Bilbao, Spain', '구겐하임 미술관 인근의 스페셜티 커피 베이커리', 'Specialty coffee bakery café near the Guggenheim Museum Bilbao'),

  // —— toledo ——
  place('toledo-fine_dining-1', 'toledo', 'fine_dining', 'Adolfo', 4.6, 'Calle Hombre de Palo 7, 45001 Toledo', '14세기 건물의 톨레도 미식.', 'Toledo fine dining in a 14th-century house.'),
  place('toledo-bakery-1', 'toledo', 'bakery', 'Panadería MasaMadre', 4.6, 'C. de Santo Tomé 3, 45002 Toledo, Spain', '초콜릿 크루아상과 향긋한 커피로 유명한 톨레도의 베이커리 카페', 'Toledo bakery café known for chocolate-filled croissants and aromatic coffee'),
  place('toledo-cafe-1', 'toledo', 'cafe', 'El Café de las Monjas', 4.5, 'C. Cadenas 6, 45001 Toledo, Spain', '인근 수녀원의 수녀들이 만든 수제 과자로 유명한 대성당 옆 카페', 'Café near the cathedral known for handmade sweets baked by nuns'),

  // —— cordoba ——
  place('cordoba-fine_dining-1', 'cordoba', 'fine_dining', 'Noor', 4.6, 'Paseo de la Victoria s/n, 14004 Córdoba', '미쉐린 2스타 레스토랑.', 'Two-Michelin-star restaurant.'),
  place('cordoba-bakery-1', 'cordoba', 'bakery', 'La Tarterie', 4.6, 'P.º de la Ribera 1, 14002 Córdoba, Spain', '코르도바 구시가지 최고의 홈메이드 타르트와 케이크 전문점', 'Córdoba old-town bakery serving the city\'s best homemade tarts and cakes'),
  place('cordoba-cafe-1', 'cordoba', 'cafe', 'Café Viena', 4.4, 'C. Claudio Marcelo 13, 14002 Córdoba, Spain', '환상적인 아이스크림으로 유명한 코르도바 구시가 중심의 카페', 'Café in the heart of old Córdoba known for its fabulous ice cream'),

  // —— san-sebastian ——
  place('san-sebastian-fine_dining-1', 'san-sebastian', 'fine_dining', 'Arzak', 4.7, 'Alcalde J. Elosegi Hiribidea 273, 20015 Donostia', '미쉐린 3스타 레스토랑.', 'Three-Michelin-star restaurant.'),
  place('san-sebastian-bakery-1', 'san-sebastian', 'bakery', 'Casa Otaegui', 4.6, 'Parte Vieja, 20003 Donostia / San Sebastián, Spain', '1886년부터 이어온 산세바스티안에서 가장 오래된 제과점', 'San Sebastián\'s oldest pastry shop, producing confectionery since 1886'),
  place('san-sebastian-cafe-1', 'san-sebastian', 'cafe', 'Sweet Roma', 4.5, 'Sánchez Toca 3, 20003 Donostia / San Sebastián, Spain', '부엔 파스토르 대성당 바로 뒤에 위치한 산세바스티안의 카페', 'San Sebastián café just behind the Buen Pastor Cathedral'),

  // —— zaragoza ——
  place('zaragoza-fine_dining-1', 'zaragoza', 'fine_dining', 'La Prensa', 4.6, 'Calle de los Estébanes 10, 50003 Zaragoza', '미쉐린 1스타 아라곤 요리.', 'One-Michelin-star Aragonese cuisine.'),
  place('zaragoza-bakery-1', 'zaragoza', 'bakery', 'Panishop Bakery', 4.4, 'C. de Canfranc 5, 50004 Zaragoza, Spain', '빵과 페이스트리를 다양하게 갖춘 사라고사의 인기 베이커리', 'Popular Zaragoza bakery with a wide range of bread and pastries'),
  place('zaragoza-cafe-1', 'zaragoza', 'cafe', 'Doña Hipólita', 4.4, 'C. de Pedro Cerbuna 3, 50009 Zaragoza, Spain', '빈티지한 분위기의 사라고사 구시가지 카페', 'Charming vintage-style café in Zaragoza\'s historic center'),

  // —— salamanca ——
  place('salamanca-fine_dining-1', 'salamanca', 'fine_dining', 'Restaurante Víctor Gutiérrez', 4.6, 'Calle Empedrada 4, 37001 Salamanca', '미쉐린 1스타 레스토랑.', 'One-Michelin-star restaurant.'),
  place('salamanca-bakery-1', 'salamanca', 'bakery', 'Confitería Pastelería Santa Lucía', 4.5, 'C. del Prior 11, 37002 Salamanca, Spain', '마요르 광장 인근에서 플로레타 등 전통 과자로 유명한 살라망카의 제과점', 'Salamanca confectionery near Plaza Mayor known for traditional sweets like the Floreta'),
  place('salamanca-cafe-1', 'salamanca', 'cafe', 'Santagloria Coffee & Bakery', 4.4, 'C. José Jáuregui 37, 37002 Salamanca, Spain', '다양한 케이크와 페이스트리로 유명한 살라망카 최고의 커피 명소', 'Salamanca\'s top coffee destination, known for its array of cakes and pastries'),

  // —— santiago ——
  place('santiago-fine_dining-1', 'santiago', 'fine_dining', 'Abastos 2.0', 4.6, 'Rúa das Hortas 1, 15705 Santiago de Compostela', '아바스토스 시장의 갈리시아 요리.', 'Galician cuisine at the Abastos market.'),
  place('santiago-bakery-1', 'santiago', 'bakery', 'Panadería A Tafona', 4.6, 'R. de Frei Rosendo Salvado 11, 15701 Santiago de Compostela, Spain', '중세풍의 매력을 간직한 산티아고데콤포스텔라의 베이커리', 'Santiago de Compostela bakery with medieval charm and an open kitchen'),
  place('santiago-cafe-1', 'santiago', 'cafe', 'Confeitaría Caylo', 4.6, 'Rúa do Xeneral Pardiñas 6, 15701 Santiago de Compostela, Spain', '타르타 데 산티아고로 유명한 유서 깊은 제과점', 'Historic confectionery famous for the iconic Tarta de Santiago almond cake'),

  // —— segovia ——
  place('segovia-fine_dining-1', 'segovia', 'fine_dining', 'José María', 4.6, 'Cronista Lecea 11, 40001 Segovia', '세고비아 명물 코치니요 아사도.', 'Segovia\'s classic roast suckling pig.'),
  place('segovia-bakery-1', 'segovia', 'bakery', 'Granier Panes Artesanos', 4.4, 'Pz. Corpus Christi 3, 40001 Segovia, Spain', '장인이 구운 빵으로 유명한 세고비아의 베이커리 체인', 'Segovia branch of the artisan bread bakery chain'),
  place('segovia-cafe-1', 'segovia', 'cafe', 'La Colonial', 4.4, 'Segovia, Spain', '붉은 인테리어가 인상적인 세고비아 구시가지 중심의 카페', 'Segovia café in the heart of the old town, known for its vibrant red interior'),

  // —— ronda ——
  place('ronda-fine_dining-1', 'ronda', 'fine_dining', 'Bardal', 4.7, 'Calle José Aparicio 1, 29400 Ronda', '미쉐린 2스타 레스토랑.', 'Two-Michelin-star restaurant.'),
  place('ronda-bakery-1', 'ronda', 'bakery', 'Confitería Las Campanas', 4.4, 'Carrera Espinel 64, 29400 Ronda, Spain', '론다 중심가의 전통 제과점', 'Traditional confectionery on Ronda\'s main street'),
  place('ronda-cafe-1', 'ronda', 'cafe', 'Confitería Pastelería Patricia', 4.5, 'C. de Espinillos 4, 29400 Ronda, Spain', '30년 넘게 사랑받아온 론다의 페이스트리·홈메이드 아이스크림 전문점', 'Beloved Ronda pastry shop for over thirty years, known for homemade ice cream'),

  // —— girona ——
  place('girona-fine_dining-1', 'girona', 'fine_dining', 'El Celler de Can Roca', 4.7, 'Can Sunyer 48, 17007 Girona', '미쉐린 3스타, 세계 최고 레스토랑 중 하나.', 'Three-Michelin-star restaurant, among the world\'s best.'),
  place('girona-bakery-1', 'girona', 'bakery', 'Casamoner', 4.6, 'Carrer de Joan Maragall 36, 17002 Girona, Spain', '1892년부터 이어온 지로나의 인기 베이커리, 츄이쇼로 유명', 'Popular Girona bakery since 1892, known for its xuixo pastry'),
  place('girona-cafe-1', 'girona', 'cafe', 'La Comuna Café', 4.6, 'Carrer de la Cort Reial 5, 17004 Girona, Spain', '프로 사이클리스트 부부가 운영하는 지로나의 스페셜티 커피 카페', 'Girona specialty coffee café founded by a professional cyclist and his wife'),

  // —— palma ——
  place('palma-fine_dining-1', 'palma', 'fine_dining', 'Marc Fosh Restaurant', 4.6, 'Carrer de la Missió 7, 07003 Palma', '미쉐린 1스타 지중해 요리.', 'One-Michelin-star Mediterranean cuisine.'),

  place('palma-bakery-1', 'palma', 'bakery', 'Forn del Santo Cristo', 4.5, 'Carrer d\'Anníbal 24, 07013 Palma, Spain', '1910년부터 이어온 팔마의 대표 엔사이마다 전문점', 'Palma\'s leading ensaimada bakery, operating since 1910'),
  place('palma-cafe-1', 'palma', 'cafe', 'Ca\'n Joan de s\'Aigo', 4.5, 'Palma de Mallorca, Spain', '팔마에서 가장 오래된 페이스트리 숍 중 하나', 'One of Palma\'s oldest and best-known pastry shops'),

  // —— nerja ——
  place('nerja-fine_dining-1', 'nerja', 'fine_dining', 'Oliva', 4.6, 'Plaza de España 2, 29780 Nerja', '지중해·스페인 요리의 미식 레스토랑.', 'Gourmet Mediterranean and Spanish cuisine.'),
  place('nerja-bakery-1', 'nerja', 'bakery', 'Panadería minimarket Salvana', 4.5, 'C. Rodríguez Acosta 5, 29780 Nerja, Spain', '정통 프랑스식 크루아상으로 유명한 네르하 최고의 베이커리', 'Widely regarded as Nerja\'s best bakery, known for authentic French-style croissants'),
  place('nerja-cafe-1', 'nerja', 'cafe', 'Cafetería Pastelería Tiramisu', 4.4, 'Calle Jaén 5, 29780 Nerja, Spain', '갓 구운 페이스트리와 향긋한 커피로 유명한 네르하의 카페', 'Cozy Nerja café known for freshly baked pastries and aromatic coffee'),

  // —— gibraltar ——
  place('gibraltar-fine_dining-1', 'gibraltar', 'fine_dining', 'Rock Salt', 4.5, 'Unit 2, Chatham Counterguard, GX11 1AA Gibraltar', '지브롤터 해협 전망 레스토랑.', 'Restaurant with views over the Strait of Gibraltar.'),

  place('gibraltar-bakery-1', 'gibraltar', 'bakery', 'The Gibraltar Bakery', 4.3, 'Unit G10 ICC, Casemates Square, Gibraltar GX11 1AA', '케이스메이츠 광장에 위치한 지브롤터의 베이커리 카페', 'Bakery café on Casemates Square in Gibraltar'),
  place('gibraltar-cafe-1', 'gibraltar', 'cafe', 'Amar\'s', 4.3, '1A Convent Place, Gibraltar', '아침 식사와 점심 메뉴로 유명한 지브롤터의 카페', 'Gibraltar café known for its breakfast and lunch menu'),
]
