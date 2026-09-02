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
  place('madrid-bakery-5', 'madrid', 'bakery', 'Alma Nomad Bakery', 4.6, 'Calle de Santa Feliciana 10, 28010 Madrid, Spain', '사워도우 빵과 페이스트리로 유명한 챔버리 지구의 인기 베이커리', 'Popular Chamberí-district bakery known for its sourdough bread and pastries', { reviewCount: 1800 }),
  place('madrid-cafe-1', 'madrid', 'cafe', 'Café Federal', 4.5, 'Madrid', '브런치·스페셜티.', 'Brunch and specialty.', { reviewCount: 2800 }),
  place('madrid-cafe-2', 'madrid', 'cafe', 'HanSo Café', 4.5, 'Madrid', '스페셜티 커피.', 'Specialty coffee.', { reviewCount: 1600 }),
  place('madrid-cafe-3', 'madrid', 'cafe', 'Café Comercial', 4.3, 'Madrid', '클래식 카페.', 'Classic café.', { reviewCount: 5400 }),
  place('madrid-cafe-4', 'madrid', 'cafe', 'Toma Café', 4.5, 'Madrid', '로스터리 카페.', 'Roastery café.', { reviewCount: 2100 }),
  place('madrid-cafe-5', 'madrid', 'cafe', 'Wilko', 4.6, 'Calle de Fernández de los Ríos 40, 28015 Madrid, Spain', '챔버리 지구의 인기 스페셜티 커피숍', 'Popular specialty coffee shop in the Chamberí district'),
  place('madrid-korean-1', 'madrid', 'korean', 'Maru', 4.5, 'Calle de la Reina 37, 28004 Madrid', '마드리드의 대표 한식당.', 'Well-known Korean restaurant in Madrid.'),
  place('madrid-korean-2', 'madrid', 'korean', 'Hanok Korean Street Food', 4.5, 'Calle de Leganitos 10, 28013 Madrid, Spain', '떡볶이·김밥·K-도그 등 한국식 길거리 분식을 선보이는 마드리드의 캐주얼 한식당', 'Casual Madrid Korean eatery serving street-food bunsik like tteokbokki, kimbap and K-dogs'),
  place('madrid-korean-3', 'madrid', 'korean', 'Qiqihary Chueca Korean BBQ', 4.6, 'Calle de la Reina 27, 28004 Madrid, Spain', '추에카 지구의 인기 한식 바비큐 레스토랑', 'Popular Korean BBQ restaurant in the Chueca district', { reviewCount: 7300 }),
  place('madrid-korean-4', 'madrid', 'korean', 'Dimibang', 4.5, 'Calle de Rodríguez San Pedro 67, 28015 Madrid, Spain', '다양한 사이드 반찬과 함께 즐기는 챔버리 지구의 한식 바비큐 레스토랑', 'Chamberí-district Korean BBQ restaurant known for its array of side dishes'),
  place('madrid-korean-5', 'madrid', 'korean', 'Izakaya Han', 4.4, 'Calle de San Bartolomé 10, 28004 Madrid, Spain', '추에카 인근의 정통 한식당', 'Authentic Korean restaurant near Chueca'),

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
  place('granada-fine_dining-2', 'granada', 'fine_dining', 'Bar Los Diamantes', 4.4, 'Calle Navas 28, 18009 Granada', '1942년부터 이어온 신선한 해산물 타파스.', 'Fresh seafood tapas since 1942.', { reviewCount: 3000 }),
  place('granada-fine_dining-3', 'granada', 'fine_dining', 'Bodegas Castañeda', 3.9, 'Calle Almireceros 1-3, 18010 Granada', '1953년부터 이어온 그라나다 대표 타베르나.', "Granada's iconic tavern since 1953.", { reviewCount: 4000 }),
  place('granada-fine_dining-4', 'granada', 'fine_dining', 'Chikito', 3.8, 'Plaza del Campillo 9, 18009 Granada', '가르시아 로르카가 사랑한 그라나다 전통 식당.', "Traditional restaurant beloved by García Lorca.", { reviewCount: 1500 }),
  place('granada-fine_dining-5', 'granada', 'fine_dining', 'Mirador de Morayma', 4.1, 'Calle del Pianista García Carrillo 2, 18010 Granada', '알바이신에서 알함브라 전망을 즐기는 안달루시아 요리.', 'Andalusian cuisine with Alhambra views from the Albaicín.', { reviewCount: 700 }),
  place('granada-korean-1', 'granada', 'korean', 'CoreOlé Korean Food Bar', 4.5, 'C. Elvira, 114, 18010 Granada', '알바이신 지구의 한식당.', 'Korean restaurant in the Albaicín district.'),
  place('granada-korean-2', 'granada', 'korean', 'Miso Restaurant Coreano', 4.3, 'Camino de Ronda, 18004 Granada', '갈비·프라이드치킨·라면 등 다양한 한식.', 'Varied Korean menu — ribs, fried chicken, ramyeon.', { reviewCount: 1900 }),
  place('granada-bakery-1', 'granada', 'bakery', 'Casa Ysla Pastelería-Cafetería', 4.6, 'C. Recogidas 36, 18002 Granada, Spain', '그라나다 명물 피오노노 케이크를 처음 만든 곳', 'Birthplace of Granada\'s famous Piononos cake'),
  place('granada-bakery-2', 'granada', 'bakery', 'Barrio Specialty Coffee & Bakery', 4.7, 'Plaza de San Isidro 1, 18012 Granada', '알바이신의 가족 운영 스페셜티 커피·베이커리.', 'Family-run specialty coffee and bakery in the Albaicín.', { reviewCount: 150 }),
  place('granada-bakery-3', 'granada', 'bakery', 'Café Pastelería López-Mezquita', 4.5, 'Calle Trinidad 2, 18001 Granada', '그라나다의 명물 피오노노로 유명한 역사적 제과점.', "Historic pastry shop famed for Granada's signature pionono.", { reviewCount: 800 }),
  place('granada-cafe-1', 'granada', 'cafe', 'Malamiga', 4.6, 'Granada, Spain', '천연 발효 사워도우 빵으로 유명한 그라나다의 모던 베이커리 카페', 'Modern Granada bakery café known for slow-fermented natural sourdough'),
  place('granada-cafe-2', 'granada', 'cafe', 'La Finca Coffee', 4.6, 'Calle Colegio Catalino 3, 18001 Granada', '대성당 인근, 자체 로스팅 스페셜티 커피.', "In-house roasted specialty coffee near the Cathedral.", { reviewCount: 400 }),
  place('granada-cafe-3', 'granada', 'cafe', 'Minuit Pan y Café', 4.2, 'Calle Colcha 6, 18009 Granada', '레예스 카톨리코스 인근 스페셜티 커피와 베이커리.', 'Specialty coffee and bakery near Reyes Católicos street.', { reviewCount: 1100 }),

  // —— valencia ——
  place('valencia-fine_dining-1', 'valencia', 'fine_dining', 'Ricard Camarena Restaurant', 4.5, 'Carrer del Dr. Sumsi 4, 46005 València', '미쉐린 2스타 파인 다이닝.', 'Two-Michelin-star fine dining.'),
  place('valencia-fine_dining-2', 'valencia', 'fine_dining', 'El Poblet', 4.5, 'Carrer dels Correus 8, 46002 València', '미쉐린 2스타 발렌시아 요리.', 'Two-Michelin-star Valencian cuisine.'),
  place('valencia-fine_dining-3', 'valencia', 'fine_dining', 'Fierro', 4.5, 'Carrer Dr. Serrano 4, 46006 València', '미쉐린 1스타 지중해 요리.', 'One-Michelin-star Mediterranean cuisine.'),
  place('valencia-bakery-1', 'valencia', 'bakery', 'La Más Bonita Ruzafa', 4.4, 'Pujada del Toledà 8, 46001 València', '루사파의 인기 베이커리 카페.', 'Popular bakery café in Ruzafa.'),
  place('valencia-cafe-1', 'valencia', 'cafe', 'Bluebell Coffee Co.', 4.4, 'Mercat Central, 46001 València', '발렌시아 최초의 스페셜티 커피.', "Valencia's first specialty coffee shop."),

  // —— malaga ——
  place('malaga-fine_dining-1', 'malaga', 'fine_dining', 'José Carlos García Restaurante', 4.6, 'Puerto de Málaga, Plaza de la Capilla 1, 29016 Málaga', '말라가 유일의 미쉐린 스타 레스토랑.', 'Málaga\'s only Michelin-starred restaurant.'),
  place('malaga-fine_dining-2', 'malaga', 'fine_dining', 'La Tranca', 4.6, 'Calle Carretería 92, 29008 Málaga', '전통 타파스로 줄 서는 인기 타베르나.', 'Popular tavern with queues for traditional tapas.', { reviewCount: 12800 }),
  place('malaga-fine_dining-3', 'malaga', 'fine_dining', 'Mesón Mariano', 4.5, 'Calle Granados 2, 29008 Málaga', '아티초크와 말라가식 가스파추엘로로 유명.', "Known for artichokes and Málaga-style gazpachuelo.", { reviewCount: 4000 }),
  place('malaga-fine_dining-4', 'malaga', 'fine_dining', 'Cortijo de Pepe', 4.0, 'Plaza de la Merced 2, 29012 Málaga', '1971년부터 이어온 활기찬 타파스 바.', 'Lively tapas bar since 1971.', { reviewCount: 8400 }),
  place('malaga-fine_dining-5', 'malaga', 'fine_dining', 'Bodegas Quitapenas', 3.3, 'Calle Marín García 4, 29005 Málaga', '1880년부터 이어온 말라가의 전통 타베르나.', "Málaga's traditional tavern since 1880.", { reviewCount: 1500 }),
  place('malaga-bakery-1', 'malaga', 'bakery', 'La Mallorquina', 4.5, 'Avenida Carlos Haya 1, 29010 Málaga, Spain', '말라가의 명절 디저트로 유명한 가족 운영 제과점', 'Family-run Málaga institution known for holiday sweets and pastries'),
  place('malaga-bakery-2', 'malaga', 'bakery', 'Ana La Fantástica', 4.6, 'Calle Castillo de Sohail 5, 29005 Málaga', '갈리시아식 사워도우 빵과 크루아상.', 'Galician-style sourdough bread and croissants.', { reviewCount: 300 }),
  place('malaga-bakery-3', 'malaga', 'bakery', 'Mia Coffee House', 4.9, 'Calle Vendeja 9, 29001 Málaga', '스페셜티 커피와 홈메이드 페이스트리, 작은 베이커리.', 'Specialty coffee with homemade pastries and a small bakery.', { reviewCount: 1200 }),
  place('malaga-cafe-1', 'malaga', 'cafe', 'La Canasta', 4.4, 'C. Herrería del Rey 2, 29005 Málaga, Spain', '맛있는 커피와 아침 식사로 유명한 말라가의 카페', 'Málaga café known for delicious coffee and breakfast'),
  place('malaga-cafe-2', 'malaga', 'cafe', 'Mia Coffee House', 4.9, 'Calle Vendeja 9, 29001 Málaga', '안달루시아 최고로 꼽히는 스페셜티 커피.', 'Regarded as some of the best specialty coffee in Andalusia.', { reviewCount: 1200 }),
  place('malaga-cafe-3', 'malaga', 'cafe', 'Bertani Café', 4.5, 'Málaga', '말라가 최초의 스페셜티 커피숍.', "Málaga's first specialty coffee shop.", { reviewCount: 400 }),
  place('malaga-korean-1', 'malaga', 'korean', 'WOOCOCO 우꼬꼬', 5.0, 'Calle de Ramón Franquelo 10, 29008 Málaga', '불고기와 한국식 치킨으로 유명한 소규모 정통 한식당.', 'Small authentic Korean restaurant known for bulgogi and fried chicken.', { reviewCount: 700 }),
  place('malaga-korean-2', 'malaga', 'korean', 'Konan Korean BBQ', 5.0, 'Calle José Denis Belgrano 17, 29008 Málaga', '테이블 그릴 한국식 바베큐 뷔페.', 'Table-grill Korean BBQ buffet.', { reviewCount: 100 }),
  place('malaga-korean-3', 'malaga', 'korean', 'Restaurante Han Wei JU', 4.3, 'Calle Porcelana 2, 29591 Málaga', '바베큐 고기와 한국식 찌개 전문점.', 'Specialist in BBQ meats and Korean stews.', { reviewCount: 150 }),

  // —— bilbao ——
  place('bilbao-fine_dining-1', 'bilbao', 'fine_dining', 'Nerua Guggenheim Bilbao', 4.6, 'Abandoibarra Etorbidea 2, 48001 Bilbao', '구겐하임 미술관 안의 미쉐린 레스토랑.', 'Michelin restaurant inside the Guggenheim Museum.'),
  place('bilbao-fine_dining-2', 'bilbao', 'fine_dining', 'Gure Toki', 4.9, 'Plaza Nueva 12, 48005 Bilbao', '수많은 핀초 대회 수상 경력의 명소.', 'Award-winning pintxos bar with many competition wins.', { reviewCount: 1000 }),
  place('bilbao-fine_dining-3', 'bilbao', 'fine_dining', 'Rio-Oja', 4.2, 'Calle del Perro 4, 48005 Bilbao', '1959년부터 3대째 이어온 바스크 전통 요리.', 'Third-generation family-run traditional Basque cuisine since 1959.', { reviewCount: 4700 }),
  place('bilbao-fine_dining-4', 'bilbao', 'fine_dining', 'La Viña del Ensanche', 4.4, 'Diputación 10, 48008 Bilbao', '1927년부터 이어온 하몬 전문 핀초스 바.', 'Pintxos bar known for Iberian ham, since 1927.', { reviewCount: 1200 }),
  place('bilbao-fine_dining-5', 'bilbao', 'fine_dining', 'Restaurante Enol', 4.6, 'Calle Licenciado Poza 73, 48013 Bilbao', '신선한 해산물과 핀초스로 유명한 바스크 요리.', 'Basque cuisine known for fresh seafood and pintxos.', { reviewCount: 644 }),
  place('bilbao-bakery-1', 'bilbao', 'bakery', 'Pastelería Don Manuel', 4.5, 'Mazarredo Zumarkalea 79, 48009 Bilbao, Spain', '빌바오 전통 페이스트리와 카롤리나 케이크로 유명한 제과점', 'Bilbao pastry shop famous for traditional treats and its Carolina cake'),
  place('bilbao-bakery-2', 'bilbao', 'bakery', 'Pastelería Martina de Zuricalday', 4.3, 'Areilza Doktorearen Zumarkalea 38, 48010 Bilbao', '1830년부터 이어온 바스크 지방 최고령 제과점.', "Basque Country's oldest artisan pastry shop, since 1830.", { reviewCount: 350 }),
  place('bilbao-bakery-3', 'bilbao', 'bakery', 'Pastelería Suiza', 4.5, 'Portuko Markesaren Kalea 4, 48009 Bilbao', '60년 넘게 이어온 아몬드 크루아상 명가.', 'Beloved for almond croissants for over 60 years.', { reviewCount: 640 }),
  place('bilbao-bakery-4', 'bilbao', 'bakery', 'Arrese', 4.4, 'Bilbao', '1852년부터 이어온 트러플·케이크 전문점.', 'Truffle and cake specialist since 1852.', { reviewCount: 800 }),
  place('bilbao-cafe-1', 'bilbao', 'cafe', 'Cokooncafé', 4.5, 'Poza Lizentziatuaren Kalea 55, 48013 Bilbao, Spain', '구겐하임 미술관 인근의 스페셜티 커피 베이커리', 'Specialty coffee bakery café near the Guggenheim Museum Bilbao'),
  place('bilbao-cafe-2', 'bilbao', 'cafe', 'ARVO Specialty Coffee', 4.7, 'Barraincúa Kalea 9, 48001 Bilbao', '구겐하임 인근, 스페인 최고 커피숍으로 3년 연속 선정.', "Named one of Spain's best coffee shops three years running.", { reviewCount: 1600 }),
  place('bilbao-cafe-3', 'bilbao', 'cafe', 'East Crema Coffee', 4.5, 'Bilbao', '도쿄 카페 감성의 스페셜티 커피 체인.', 'Specialty coffee chain inspired by Tokyo café culture.', { reviewCount: 900 }),
  place('bilbao-cafe-4', 'bilbao', 'cafe', 'Café Bertiz', 4.4, 'Bilbao', '다양한 페이스트리와 스페셜티 음료.', 'Wide selection of pastries and specialty drinks.', { reviewCount: 500 }),
  place('bilbao-korean-1', 'bilbao', 'korean', 'Gangnam Korean BBQ', 4.7, 'Alameda San Mamés 43, 48010 Bilbao', '바스크 지방 유일의 한국식 바베큐 뷔페.', 'The only Korean BBQ buffet in the Basque Country.', { reviewCount: 1000 }),

  // —— toledo ——
  place('toledo-fine_dining-1', 'toledo', 'fine_dining', 'Adolfo', 4.6, 'Calle Hombre de Palo 7, 45001 Toledo', '14세기 건물의 톨레도 미식.', 'Toledo fine dining in a 14th-century house.'),
  place('toledo-bakery-1', 'toledo', 'bakery', 'Panadería MasaMadre', 4.6, 'C. de Santo Tomé 3, 45002 Toledo, Spain', '초콜릿 크루아상과 향긋한 커피로 유명한 톨레도의 베이커리 카페', 'Toledo bakery café known for chocolate-filled croissants and aromatic coffee'),
  place('toledo-cafe-1', 'toledo', 'cafe', 'El Café de las Monjas', 4.5, 'C. Cadenas 6, 45001 Toledo, Spain', '인근 수녀원의 수녀들이 만든 수제 과자로 유명한 대성당 옆 카페', 'Café near the cathedral known for handmade sweets baked by nuns'),

  // —— cordoba ——
  place('cordoba-fine_dining-1', 'cordoba', 'fine_dining', 'Noor', 4.6, 'Paseo de la Victoria s/n, 14004 Córdoba', '미쉐린 2스타 레스토랑.', 'Two-Michelin-star restaurant.'),
  place('cordoba-fine_dining-2', 'cordoba', 'fine_dining', 'Taberna Salinas', 4.4, 'Calle Tundidores 3, 14002 Córdoba', '100년 넘은 미쉐린 추천 전통 타베르나.', 'Century-old, Michelin-recommended traditional tavern.', { reviewCount: 3100 }),
  place('cordoba-fine_dining-3', 'cordoba', 'fine_dining', 'Casa Pedro Ximénez', 4.8, 'Calle Deanes 10, 14003 Córdoba', '유대인 지구의 안달루시아 전통 요리, 메스키타 전망 루프탑.', 'Traditional Andalusian cuisine in the Jewish Quarter with a Mezquita-view rooftop.', { reviewCount: 3000 }),
  place('cordoba-fine_dining-4', 'cordoba', 'fine_dining', 'Bodegas Mezquita', 4.6, 'C. Corregidor Luis de la Cerda 45, 14003 Córdoba', '메스키타 인근의 전통 안달루시아 와인 타베르나.', 'Traditional Andalusian wine tavern near the Mezquita.', { reviewCount: 2000 }),
  place('cordoba-fine_dining-5', 'cordoba', 'fine_dining', 'Garum 2.1', 4.5, 'Córdoba', '미쉐린 추천, 코르도바 전통 요리의 창의적 재해석.', 'Michelin-recommended creative take on Cordoban classics.', { reviewCount: 900 }),
  place('cordoba-bakery-1', 'cordoba', 'bakery', 'La Tarterie', 4.6, 'P.º de la Ribera 1, 14002 Córdoba, Spain', '코르도바 구시가지 최고의 홈메이드 타르트와 케이크 전문점', 'Córdoba old-town bakery serving the city\'s best homemade tarts and cakes'),
  place('cordoba-bakery-2', 'cordoba', 'bakery', 'Pastelería Ángel Salazar', 4.0, 'Calle Juan de Gortz 1, 14011 Córdoba', '빵과 페이스트리를 함께 파는 동네 제과점.', 'Neighborhood bakery selling bread and pastries.', { reviewCount: 125 }),
  place('cordoba-bakery-3', 'cordoba', 'bakery', 'Maddness Coffee', 4.6, 'Córdoba', '코르도바 최고의 스페셜티 로스터리 겸 베이커리.', "The city's top specialty coffee roastery, also strong on pastries.", { reviewCount: 400 }),
  place('cordoba-bakery-4', 'cordoba', 'bakery', 'Deluca', 4.5, 'Córdoba', '크루아상과 초콜릿 알파호르로 유명한 카페 겸 베이커리.', 'Café-bakery known for croissants and chocolate alfajores.', { reviewCount: 300 }),
  place('cordoba-cafe-1', 'cordoba', 'cafe', 'Café Viena', 4.4, 'C. Claudio Marcelo 13, 14002 Córdoba, Spain', '환상적인 아이스크림으로 유명한 코르도바 구시가 중심의 카페', 'Café in the heart of old Córdoba known for its fabulous ice cream'),
  place('cordoba-cafe-2', 'cordoba', 'cafe', 'Arábiga Specialty Coffee', 5.0, 'C. Lucano 15, 14003 Córdoba', '섬세한 스페셜티 커피와 홈메이드 쿠키.', 'Meticulous specialty coffee and homemade cookies.', { reviewCount: 200 }),
  place('cordoba-cafe-3', 'cordoba', 'cafe', 'Maddness Coffee Roasters', 4.6, 'Córdoba', '코르도바 최고의 스페셜티 로스터리.', "The city's top specialty coffee roaster.", { reviewCount: 400 }),
  place('cordoba-cafe-4', 'cordoba', 'cafe', 'Deluca Café', 4.5, 'Córdoba', '커피와 크루아상으로 사랑받는 카페.', 'Beloved café for coffee and croissants.', { reviewCount: 300 }),

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
  place('ronda-fine_dining-2', 'ronda', 'fine_dining', 'Restaurante Almocabar', 4.5, 'Plaza Ruedo Alameda 5, 29400 Ronda', '구시가 남쪽 모로 지구의 로컬 맛집, 육류 요리로 유명.', 'Local favorite in the old Moorish quarter, known for meat dishes.', { reviewCount: 900 }),
  place('ronda-fine_dining-3', 'ronda', 'fine_dining', 'Bar El Barrio', 5.0, 'Calle de San Francisco de Asís 111, 29400 Ronda', '정육점을 겸하는 주인이 굽는 바비큐 맛집.', 'BBQ favorite run by an owner who is also a butcher.', { reviewCount: 200 }),
  place('ronda-fine_dining-4', 'ronda', 'fine_dining', 'Mesón El Sacristán', 4.5, 'Plaza Duquesa de Parcent 14, 29400 Ronda', '장작 화덕에 구운 육류 요리로 유명한 구시가 레스토랑.', 'Old-town restaurant known for meats grilled in a wood-burning oven.', { reviewCount: 600 }),
  place('ronda-fine_dining-5', 'ronda', 'fine_dining', 'De Locos Tapas', 4.5, 'Plazuela Arquitecto Francisco Pons Sorolla 7, 29400 Ronda', '안달루시아·바스크 퓨전 타파스 맛집.', 'Andalusian-Basque fusion tapas favorite.', { reviewCount: 2100 }),
  place('ronda-bakery-1', 'ronda', 'bakery', 'Confitería Las Campanas', 4.4, 'Carrera Espinel 64, 29400 Ronda, Spain', '론다 중심가의 전통 제과점', 'Traditional confectionery on Ronda\'s main street'),
  place('ronda-bakery-2', 'ronda', 'bakery', 'Panadería Alba, Obrador de Pan', 4.5, 'C. Padre Francisco Piquer 18, 29400 Ronda', '장인 정신이 담긴 빵과 페이스트리 전문점.', 'Artisan bread and pastry shop.'),
  place('ronda-cafe-1', 'ronda', 'cafe', 'Confitería Pastelería Patricia', 4.5, 'C. de Espinillos 4, 29400 Ronda, Spain', '30년 넘게 사랑받아온 론다의 페이스트리·홈메이드 아이스크림 전문점', 'Beloved Ronda pastry shop for over thirty years, known for homemade ice cream'),
  place('ronda-cafe-2', 'ronda', 'cafe', 'Confitería Daver', 4.3, 'Calle Virgen de los Remedios 6, 29400 Ronda', '전통·모던 케이크와 커피로 유명한 론다 최고의 제과 카페.', "Ronda's top confectionery café, known for traditional and modern cakes.", { reviewCount: 300 }),
  place('ronda-cafe-3', 'ronda', 'cafe', 'La Sastrería', 3.5, 'Carrera Espinel 77, 29400 Ronda', '츄러스와 커피로 유명한 쇼핑가의 브런치 카페.', 'Brunch café on the main shopping street, known for churros and coffee.', { reviewCount: 130 }),

  // —— girona ——
  place('girona-fine_dining-1', 'girona', 'fine_dining', 'El Celler de Can Roca', 4.7, 'Can Sunyer 48, 17007 Girona', '미쉐린 3스타, 세계 최고 레스토랑 중 하나.', 'Three-Michelin-star restaurant, among the world\'s best.'),
  place('girona-fine_dining-2', 'girona', 'fine_dining', 'Casa Marieta', 4.0, 'Plaça Independència 5-6, 17001 Girona', '1892년부터 5대째 이어온 카탈루냐 전통 요리.', 'Traditional Catalan cuisine run by five generations since 1892.', { reviewCount: 300 }),
  place('girona-fine_dining-3', 'girona', 'fine_dining', "L'Alqueria", 4.4, 'Girona', '카탈루냐식 파에야와 아로스 네그레 전문.', 'Specialist in Catalan paella and arròs negre.', { reviewCount: 500 }),
  place('girona-fine_dining-4', 'girona', 'fine_dining', 'Can Vidal', 4.3, 'Girona', '달팽이·버섯 등 지로나 향토 요리.', "Girona regional dishes — snails, seasonal mushrooms.", { reviewCount: 400 }),
  place('girona-fine_dining-5', 'girona', 'fine_dining', 'El Cul de Món', 4.4, 'Girona', '성벽 옆, 모로코풍을 더한 카탈루냐 요리.', 'Catalan food with a Moroccan twist beside the city wall.', { reviewCount: 350 }),
  place('girona-bakery-1', 'girona', 'bakery', 'Casamoner', 4.6, 'Carrer de Joan Maragall 36, 17002 Girona, Spain', '1892년부터 이어온 지로나의 인기 베이커리, 츄이쇼로 유명', 'Popular Girona bakery since 1892, known for its xuixo pastry'),
  place('girona-cafe-1', 'girona', 'cafe', 'La Comuna Café', 4.6, 'Carrer de la Cort Reial 5, 17004 Girona, Spain', '프로 사이클리스트 부부가 운영하는 지로나의 스페셜티 커피 카페', 'Girona specialty coffee café founded by a professional cyclist and his wife'),
  place('girona-cafe-2', 'girona', 'cafe', 'Oniria Cafè', 4.9, 'Carrer del Nord 11, 17001 Girona', '카탈루냐-독일 듀오가 운영하는 스페셜티 커피.', 'Specialty coffee run by a Catalan-German duo.', { reviewCount: 260 }),
  place('girona-cafe-3', 'girona', 'cafe', 'Espresso Mafia Coffee', 4.6, 'Girona', '지로나 중심가의 인기 커피숍.', 'Popular coffee shop in central Girona.', { reviewCount: 300 }),
  place('girona-cafe-4', 'girona', 'cafe', 'Syra Coffee', 4.5, 'Girona', '페드렛 다리 인근의 세련된 에스프레소 바.', 'Sleek espresso bar near Pont de Pedret.', { reviewCount: 250 }),
  place('girona-korean-1', 'girona', 'korean', 'Restaurant A4MANS', 4.6, 'Plaça Pompeu Fabra 9, 17001 Girona', '카탈루냐-한국 커플이 운영하는 퓨전 다이닝.', 'Catalan-Korean fusion dining run by a Catalan-Korean couple.', { reviewCount: 235 }),
  place('girona-korean-2', 'girona', 'korean', 'Yooki Ramen Korean Fried Chicken', 5.0, 'Av. 20 de Juny 1, 17001 Girona', '정통 라멘과 바삭한 한국식 치킨.', 'Authentic ramen and crispy Korean fried chicken.', { reviewCount: 50 }),

  // —— palma ——
  place('palma-fine_dining-1', 'palma', 'fine_dining', 'Marc Fosh Restaurant', 4.6, 'Carrer de la Missió 7, 07003 Palma', '미쉐린 1스타 지중해 요리.', 'One-Michelin-star Mediterranean cuisine.'),
  place('palma-fine_dining-2', 'palma', 'fine_dining', 'Adrián Quetglas', 4.6, 'Passeig de Mallorca 20, 07012 Palma de Mallorca', '운하변 미쉐린 셀렉션 모던 지중해 요리.', 'Michelin-selected modern Mediterranean cuisine beside the canal.', { reviewCount: 2000 }),
  place('palma-fine_dining-3', 'palma', 'fine_dining', 'DINS Santi Taura', 4.5, 'Plaça de Llorenç Villalonga 4, 07001 Palma de Mallorca', '미쉐린 1스타, 마요르카 역사 요리 재해석 코스.', 'One-Michelin-star tasting menu reinterpreting historic Mallorcan cuisine.', { reviewCount: 400 }),
  place('palma-fine_dining-4', 'palma', 'fine_dining', 'Casa Maruka', 4.4, 'Carrer de la Reina Maria Cristina 7, 07004 Palma de Mallorca', '전통 마요르카 가정식으로 유명한 로컬 맛집.', 'Local favorite known for traditional Mallorcan home cooking.', { reviewCount: 700 }),
  place('palma-fine_dining-5', 'palma', 'fine_dining', 'La Rosa Vermutería & Colmado', 4.1, 'Carrer de la Rosa 5, 07003 Palma de Mallorca', '구시가의 활기찬 베르무트 바 겸 타파스 식당.', 'Lively vermouth bar and tapas spot in the old town.', { reviewCount: 1400 }),

  place('palma-bakery-1', 'palma', 'bakery', 'Forn del Santo Cristo', 4.5, 'Carrer d\'Anníbal 24, 07013 Palma, Spain', '1910년부터 이어온 팔마의 대표 엔사이마다 전문점', 'Palma\'s leading ensaimada bakery, operating since 1910'),
  place('palma-bakery-2', 'palma', 'bakery', 'Fornet de la Soca', 4.1, 'Plaça de Weyler 9, 07001 Palma', '잊혀진 마요르카 전통 레시피를 되살린 베이커리.', 'Bakery reviving forgotten traditional Mallorcan recipes.', { reviewCount: 300 }),
  place('palma-bakery-3', 'palma', 'bakery', 'Lluís Perez Pastisser', 4.5, 'Carrer de Bonaire 14, 07012 Palma de Mallorca', '크루아상·케이크로 유명한 팔마 중심가의 제과점.', 'Central Palma patisserie known for croissants and cakes.', { reviewCount: 780 }),
  place('palma-bakery-4', 'palma', 'bakery', 'Panadería Forn Sa Plaça', 4.4, 'Carrer Bartomeu Castell 7, Palma', '콜 덴 라바사 지역의 인기 동네 빵집.', 'Popular neighborhood bakery in the Coll d\'en Rabassa district.'),
  place('palma-bakery-5', 'palma', 'bakery', 'Forn San Agustin', 3.7, 'Avinguda Joan Miró 354, 07015 Palma de Mallorca', '1968년부터 이어온 전통 마요르카 베이커리.', 'Traditional Mallorcan bakery operating since 1968.'),
  place('palma-cafe-1', 'palma', 'cafe', 'Ca\'n Joan de s\'Aigo', 4.5, 'Palma de Mallorca, Spain', '팔마에서 가장 오래된 페이스트리 숍 중 하나', 'One of Palma\'s oldest and best-known pastry shops'),
  place('palma-cafe-2', 'palma', 'cafe', 'Mistral Coffee Roasters', 4.7, 'Carrer del Banc 4, 07001 Palma de Mallorca', '마요르카 최초의 스페셜티 커피 로스터리.', 'Mallorca\'s pioneering specialty coffee roastery.', { reviewCount: 880 }),
  place('palma-cafe-3', 'palma', 'cafe', 'Cafè Riutort', 4.8, 'Carrer del Carme 25, 07003 Palma', '아늑한 분위기의 스페셜티 커피·브런치 카페.', 'Cozy specialty coffee and brunch café.', { reviewCount: 870 }),
  place('palma-cafe-4', 'palma', 'cafe', 'La Molienda', 4.2, 'Calle Obispo Campins 11, 07001 Palma de Mallorca', '테라스가 있는 스페셜티 커피·브런치 카페.', 'Specialty coffee and brunch café with a terrace.'),
  place('palma-cafe-5', 'palma', 'cafe', 'Arabay Coffee', 4.0, 'Carrer del Sindicat 5, 07002 Palma', '싱글 오리진 스페셜티 커피 전문점.', 'Specialty coffee shop focused on single-origin beans.', { reviewCount: 200 }),
  place('palma-korean-1', 'palma', 'korean', 'Seoul Korean Cuisine & Bar', 4.7, 'Carrer de Catalunya 4, 07011 Palma de Mallorca', '산타 카탈리나 인근 정통 한식·바베큐.', 'Authentic Korean cuisine and BBQ near Santa Catalina.', { reviewCount: 300 }),
  place('palma-korean-2', 'palma', 'korean', 'Hanok Corea BBQ', 4.5, 'Carrer del Bisbe Maura 6, 07003 Palma', '테이블에서 직접 굽는 한국식 바베큐.', 'Korean BBQ grilled tableside.', { reviewCount: 100 }),
  place('palma-korean-3', 'palma', 'korean', 'Bi Bap', 4.3, 'Plaça del Mercat 3, 07001 Palma de Mallorca', '비빔밥 등 한식과 아시아 요리를 함께 선보이는 인기 맛집.', 'Popular spot serving bibimbap and Korean-Asian fusion dishes.', { reviewCount: 479 }),

  // —— nerja ——
  place('nerja-fine_dining-1', 'nerja', 'fine_dining', 'Oliva', 4.6, 'Plaza de España 2, 29780 Nerja', '지중해·스페인 요리의 미식 레스토랑.', 'Gourmet Mediterranean and Spanish cuisine.'),
  place('nerja-fine_dining-2', 'nerja', 'fine_dining', 'Bar Dolores "El Chispa"', 4.1, 'Calle San Pedro 12, 29780 Nerja', '해산물 타파스로 유명한 로컬 바.', "Local's bar known for seafood tapas.", { reviewCount: 6100 }),
  place('nerja-fine_dining-3', 'nerja', 'fine_dining', 'Bar El Pulguilla', 4.1, 'Calle Almirante Ferrándiz 26, 29780 Nerja', '발콘 데 에우로파 인근의 신선한 해산물 타파스.', "Fresh seafood tapas near the Balcón de Europa.", { reviewCount: 500 }),
  place('nerja-fine_dining-4', 'nerja', 'fine_dining', 'La Puntilla', 4.3, 'Calle Bolivia 1, 29780 Nerja', '현지인이 찾는 생선 타파스 바.', 'Local favorite fish tapas bar.', { reviewCount: 5700 }),
  place('nerja-fine_dining-5', 'nerja', 'fine_dining', 'Atipiko Nerja', 4.8, 'Plaza Balcón de Europa 11, 29780 Nerja', '지중해·퓨전 요리, 발콘 데 에우로파 전망.', 'Mediterranean-fusion cuisine with Balcón de Europa views.', { reviewCount: 260 }),
  place('nerja-bakery-1', 'nerja', 'bakery', 'Panadería minimarket Salvana', 4.5, 'C. Rodríguez Acosta 5, 29780 Nerja, Spain', '정통 프랑스식 크루아상으로 유명한 네르하 최고의 베이커리', 'Widely regarded as Nerja\'s best bakery, known for authentic French-style croissants'),
  place('nerja-bakery-2', 'nerja', 'bakery', 'Nybakat Café & Bakery', 4.8, 'Camino de Burriana, Ed. Burriana Playa local 5, 29780 Nerja', '부리아나 해변의 스웨덴식 베이커리, 사워도우와 시나몬롤.', 'Swedish bakery at Burriana Beach — sourdough and cinnamon rolls.', { reviewCount: 400 }),
  place('nerja-bakery-3', 'nerja', 'bakery', 'Panadería Salvador', 4.6, 'Calle Granada 92, 29780 Nerja', '신선한 페이스트리와 다양한 빵으로 인기.', 'Popular for fresh pastries and a wide bread selection.', { reviewCount: 685 }),
  place('nerja-cafe-1', 'nerja', 'cafe', 'Cafetería Pastelería Tiramisu', 4.4, 'Calle Jaén 5, 29780 Nerja, Spain', '갓 구운 페이스트리와 향긋한 커피로 유명한 네르하의 카페', 'Cozy Nerja café known for freshly baked pastries and aromatic coffee'),
  place('nerja-cafe-2', 'nerja', 'cafe', 'Nybakat Café & Bakery', 4.8, 'Camino de Burriana, Ed. Burriana Playa local 5, 29780 Nerja', '부리아나 해변의 인기 브런치·커피 카페.', 'Popular brunch and coffee café at Burriana Beach.', { reviewCount: 400 }),

  // —— gibraltar ——
  place('gibraltar-fine_dining-1', 'gibraltar', 'fine_dining', 'Rock Salt', 4.5, 'Unit 2, Chatham Counterguard, GX11 1AA Gibraltar', '지브롤터 해협 전망 레스토랑.', 'Restaurant with views over the Strait of Gibraltar.'),
  place('gibraltar-fine_dining-2', 'gibraltar', 'fine_dining', 'AquaTerra', 4.9, '2 Main Street Unit G8, Casemates Square, Gibraltar GX11 1AA', '지중해·이베리아식 그릴과 해산물.', 'Mediterranean and Iberian-style grills and seafood.', { reviewCount: 1057 }),
  place('gibraltar-fine_dining-3', 'gibraltar', 'fine_dining', "Sacarello's Cafe-Restaurant", 4.0, '57 Irish Town, Gibraltar', '샐러드바와 스콘으로 유명한 오랜 전통의 카페 레스토랑.', 'Long-standing café-restaurant known for its salad bar and scones.', { reviewCount: 900 }),
  place('gibraltar-fine_dining-4', 'gibraltar', 'fine_dining', "Charlie's Steak House and Grill", 4.4, '4/5 Britannia House, Marina Bay, Gibraltar GX11 1AA', '두툼한 스테이크로 현지인들에게 인기.', 'Popular with locals for its hearty steaks.', { reviewCount: 1795 }),
  place('gibraltar-fine_dining-5', 'gibraltar', 'fine_dining', 'Casa Pepe', 4.0, 'Unit 18, Queensway Quay Marina, Gibraltar', '퀸스웨이 퀘이의 정통 스페인·해산물 레스토랑.', 'Authentic Spanish-seafood restaurant at Queensway Quay.', { reviewCount: 400 }),

  place('gibraltar-bakery-1', 'gibraltar', 'bakery', 'The Gibraltar Bakery', 4.3, 'Unit G10 ICC, Casemates Square, Gibraltar GX11 1AA', '케이스메이츠 광장에 위치한 지브롤터의 베이커리 카페', 'Bakery café on Casemates Square in Gibraltar'),
  place('gibraltar-cafe-1', 'gibraltar', 'cafe', 'Amar\'s', 4.3, '1A Convent Place, Gibraltar', '아침 식사와 점심 메뉴로 유명한 지브롤터의 카페', 'Gibraltar café known for its breakfast and lunch menu'),
  place('gibraltar-cafe-2', 'gibraltar', 'cafe', 'The Kasbar', 4.7, '5 Castle Street, Gibraltar GX11 1AA', '지브롤터 유일의 100% 비건 카페 겸 아트카페.', "Gibraltar's only 100% vegan arts café.", { reviewCount: 200 }),
]
