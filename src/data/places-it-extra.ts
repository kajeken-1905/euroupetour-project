import { place } from './placeFactory'
import type { Place } from '../types'

export const placesITExtra: Place[] = [
  // —— rome ——
  place('rome-fine_dining-1', 'rome', 'fine_dining', 'La Pergola', 4.7, 'Rome', '미슐랭 로마 파인 다이닝.', 'Michelin Rome fine dining.', { reviewCount: 1800 }),
  place('rome-fine_dining-2', 'rome', 'fine_dining', 'Roscioli Salumeria', 4.6, 'Rome', '살루메리아·파스타.', 'Salumeria and pasta.', { reviewCount: 6200 }),
  place('rome-fine_dining-3', 'rome', 'fine_dining', 'Armando al Pantheon', 4.5, 'Rome', '클래식 로마 트라토리아.', 'Classic Roman trattoria.', { reviewCount: 4800 }),
  place('rome-fine_dining-4', 'rome', 'fine_dining', 'Da Enzo al 29', 4.5, 'Rome', '트라스테베레 트라토리아.', 'Trastevere trattoria.', { reviewCount: 7200 }),
  place('rome-fine_dining-5', 'rome', 'fine_dining', 'Felice a Testaccio', 4.5, 'Rome', '카르보나라·로컬 클래식.', 'Carbonara and local classics.', { reviewCount: 5600 }),
  place('rome-bakery-1', 'rome', 'bakery', 'Roscioli Forno', 4.6, 'Rome', '피자 비안카·빵.', 'Pizza bianca and bread.', { reviewCount: 4800 }),
  place('rome-bakery-2', 'rome', 'bakery', 'Pasticceria Boccione', 4.5, 'Rome', '유대인 게토 페이스트리.', 'Jewish Ghetto pastries.', { reviewCount: 3200 }),
  place('rome-bakery-3', 'rome', 'bakery', 'Antico Forno', 4.4, 'Rome', '전통 빵집.', 'Traditional bakery.', { reviewCount: 2100 }),
  place('rome-bakery-4', 'rome', 'bakery', 'Regoli', 4.5, 'Rome', '클래식 파티스리.', 'Classic pasticceria.', { reviewCount: 2800 }),
  place('rome-cafe-1', 'rome', 'cafe', 'Sant\'Eustachio Il Caffè', 4.5, 'Rome', '로마 에스프레소 클래식.', 'Classic Roman espresso.', { reviewCount: 9800 }),
  place('rome-cafe-2', 'rome', 'cafe', 'Tazza d\'Oro', 4.4, 'Rome', '판테온 근처 커피.', 'Coffee near the Pantheon.', { reviewCount: 7600 }),
  place('rome-cafe-3', 'rome', 'cafe', 'Sciascia Caffè', 4.5, 'Rome', '역사적 카페.', 'Historic café.', { reviewCount: 2400 }),
  place('rome-cafe-4', 'rome', 'cafe', 'Faroe', 4.5, 'Rome', '스페셜티 커피.', 'Specialty coffee.', { reviewCount: 1100 }),
  place('rome-korean-1', 'rome', 'korean', 'Gainn', 4.5, 'Via dei Mille 18, 00185 Roma', '미쉐린 가이드 등재 한식당.', 'Michelin Guide-listed Korean restaurant.'),

  // —— milan ——
  place('milan-korean-1', 'milan', 'korean', 'Ginmi', 4.5, 'Via Giovanni Paisiello 7, 20131 Milano', '돌솥비빔밥이 유명한 한식당.', 'Korean restaurant known for dolsot bibimbap.'),
  place('milan-bakery-1', 'milan', 'bakery', 'Marchesi 1824', 4.6, 'Via Santa Maria alla Porta, 20123 Milano, Italy', '1824년부터 이어온 밀라노의 전설적인 제과점, 스포르체스코 성 인근에 위치', 'Legendary Milan bakery since 1824, near Castello Sforzesco'),
  place('milan-cafe-1', 'milan', 'cafe', 'Cova Montenapoleone', 4.5, 'Via Montenapoleone, 20121 Milano, Italy', '몬테나폴레오네 거리의 유명 케이크숍이자 카페', 'Well-known cake shop and café on Via Montenapoleone'),

  // —— florence ——
  place('florence-fine_dining-1', 'florence', 'fine_dining', 'Enoteca Pinchiorri', 4.6, 'Via Ghibellina 87, 50122 Firenze', '미쉐린 3스타 레스토랑.', 'Three-Michelin-star restaurant.'),
  place('florence-fine_dining-2', 'florence', 'fine_dining', "All'Antico Vinaio", 4.6, 'Via dei Neri 65r, 50122 Firenze, Italy', '항상 긴 줄이 늘어서는 피렌체의 상징적인 파니니 맛집', "Florence's iconic panini shop, famous for its ever-present line", { reviewCount: 24000 }),
  place('florence-fine_dining-3', 'florence', 'fine_dining', 'Trattoria Sostanza', 4.5, 'Via del Porcellana 25/R, 50123 Firenze, Italy', "버터에 익힌 치킨(폴로 알 부로)으로 유명한 피렌체의 역사적인 트라토리아", 'Historic Florence trattoria famous for its butter-cooked chicken (pollo al burro)', { reviewCount: 5600 }),
  place('florence-fine_dining-4', 'florence', 'fine_dining', 'Trattoria Cammillo', 4.5, 'Borgo San Jacopo 57/r, 50125 Firenze, Italy', '1945년부터 이어온 가족 운영 트라토리아, 아티초크 튀김이 인기', 'Family-run trattoria since 1945, known for its legendary fried artichokes', { reviewCount: 3200 }),
  place('florence-fine_dining-5', 'florence', 'fine_dining', 'Trattoria Da Mario', 4.4, 'Via Rosina 2, 50123 Firenze, Italy', '산 로렌초 시장 인근의 로컬들이 즐겨 찾는 인기 트라토리아', 'Popular San Lorenzo-market-area trattoria beloved by locals', { reviewCount: 8400 }),
  place('florence-korean-1', 'florence', 'korean', 'Goong', 4.4, 'Borgo Ognissanti 68R, 50123 Firenze, Italy', '오니산티 지구의 정통 한식당', 'Authentic Korean restaurant in the Ognissanti district'),
  place('florence-korean-2', 'florence', 'korean', 'Gangnam', 4.4, 'Via Guelfa 46, 50123 Firenze, Italy', '피렌체 중심가의 인기 한식 바비큐 레스토랑', 'Popular Korean barbecue restaurant in central Florence'),
  place('florence-korean-3', 'florence', 'korean', 'Han Korean Barbecue', 4.5, 'Piazza Ugo di Toscana 21, 50144 Firenze, Italy', '푸짐한 한식 바비큐로 인기 있는 피렌체의 한식당', 'Florence Korean BBQ restaurant popular for its generous portions'),
  place('florence-korean-4', 'florence', 'korean', 'Sapori di Korea', 4.5, 'Via dei Magazzini 27R, 50122 Firenze, Italy', '김밥·분식 메뉴와 한국 식료품까지 함께 갖춘 부부 운영 한식당', 'Husband-and-wife-run Korean eatery serving kimbap and bunsik alongside a small Korean grocery'),
  place('florence-korean-5', 'florence', 'korean', 'Hallasan', 4.6, 'Via Guelfa 98R, 50129 Firenze, Italy', '피렌체 중심가에서 고베규를 취급하는 몇 안 되는 고급 한식 바비큐 레스토랑', 'Upscale Korean BBQ restaurant, one of the few in central Florence licensed to serve Kobe beef'),
  place('florence-bakery-1', 'florence', 'bakery', 'Pugi Forno', 4.6, 'Piazza San Marco 9B, 50121 Firenze, Italy', '1925년부터 이어온 피렌체의 대표 베이커리', 'Florentine baking institution since 1925'),
  place('florence-bakery-2', 'florence', 'bakery', 'Dolci e Dolcezze', 4.6, 'Via Pietra Piana 24, 50121 Firenze, Italy', '무설탕 초콜릿 케이크로 유명한 피렌체의 정교한 파티스리', 'Refined Florence patisserie known for its flourless chocolate cake', { reviewCount: 1400 }),
  place('florence-bakery-3', 'florence', 'bakery', 'Cantinetta dei Verrazzano', 4.5, 'Via dei Tavolini 18 Rosso, 50122 Firenze, Italy', '베이커리·와인바·카페를 겸하는 피렌체의 인기 명소, 매장에서 직접 구운 포카치아로 유명', 'Popular Florence bakery, wine bar and café known for its fresh in-house focaccia', { reviewCount: 3600 }),
  place('florence-bakery-4', 'florence', 'bakery', 'Pasticceria Buonamici', 4.6, "Via dell'Orto 27R, 50124 Firenze, Italy", '산 프레디아노 지구의 장인 파티스리, 브리오슈와 봄볼로니로 유명', 'Artisan patisserie in San Frediano known for its brioche and bomboloni'),
  place('florence-bakery-5', 'florence', 'bakery', 'Forno Becagli', 4.5, 'Borgo Ognissanti 92 Rosso, 50123 Firenze, Italy', '항상 줄이 늘어서는 피렌체의 인기 포르노, 샌드위치로 유명', 'Popular Florence forno known for its sandwiches, with a line out the door'),
  place('florence-cafe-1', 'florence', 'cafe', 'Rivoire', 4.4, 'Piazza della Signoria 5r, 50122 Firenze, Italy', '1872년부터 이어온 전설적인 핫초콜릿으로 유명한 피렌체의 카페', 'Historic Florence café since 1872, famous for its legendary hot chocolate'),
  place('florence-cafe-2', 'florence', 'cafe', 'Ditta Artigianale', 4.5, 'Via dei Neri 30/32R, 50122 Firenze, Italy', '2013년 챔피언 바리스타가 설립한 피렌체 스페셜티 커피의 선구자', "Florence's specialty coffee pioneer, founded in 2013 by a champion barista", { reviewCount: 4200 }),
  place('florence-cafe-3', 'florence', 'cafe', 'Coffee Mantra', 4.6, 'Borgo La Croce 71r, 50121 Firenze, Italy', '산타 크로체 지구의 피렌체 초기 서드웨이브 커피숍 중 하나', "One of Florence's earliest third-wave coffee shops, in the Santa Croce district"),
  place('florence-cafe-4', 'florence', 'cafe', 'Melaleuca', 4.6, 'Lungarno delle Grazie 18, 50122 Firenze, Italy', '아르노 강변에 위치한 호주인 운영 베이커리 겸 카페', 'Australian-run bakery and café overlooking the Arno river', { reviewCount: 1200 }),
  place('florence-cafe-5', 'florence', 'cafe', 'SimBIOsi Organic Cafè', 4.5, "Via de' Ginori 64r, 50123 Firenze, Italy", '유기농 브런치와 훌륭한 커피로 유명한 피렌체 구시가의 카페', "Old-town Florence café known for its organic brunch and great coffee"),

  // —— venice ——
  place('venice-fine_dining-1', 'venice', 'fine_dining', 'Antiche Carampane', 4.6, 'Rio Terà de le Carampane 1911, 30125 Venezia', '정통 베네치아 해산물 요리.', 'Authentic Venetian seafood cuisine.'),
  place('venice-bakery-1', 'venice', 'bakery', 'Pasticceria Tonolo', 4.6, 'Calle San Pantalon 3764, 30123 Venezia, Italy', '베네치아 현지인들이 아침마다 즐겨 찾는 유명 베이커리', 'Beloved Venice bakery famous among locals for breakfast'),
  place('venice-cafe-1', 'venice', 'cafe', 'Rosa Salva', 4.4, 'San Marco 950, Calle Fiubera, 30124 Venezia, Italy', '1870년부터 이어온 베네치아의 가족 운영 카페 겸 제과점', 'Family-owned Venice café and pasticceria since 1870'),

  // —— naples ——
  place('naples-fine_dining-1', 'naples', 'fine_dining', 'Palazzo Petrucci', 4.6, 'Via Posillipo 16C, 80123 Napoli', '나폴리 최초의 미쉐린 스타 레스토랑.', 'Naples\' first Michelin-starred restaurant.'),
  place('naples-bakery-1', 'naples', 'bakery', 'Scaturchio', 4.5, 'Piazza San Domenico Maggiore 19, 80134 Napoli, Italy', '1910년부터 이어온 나폴리 구시가지의 유서 깊은 베이커리', 'Historic Naples bakery in the old town dating back to 1910'),
  place('naples-cafe-1', 'naples', 'cafe', 'Gran Caffè Gambrinus', 4.5, 'Via Chiaia 1, 80132 Napoli, Italy', '1860년부터 이어온 나폴리의 문학 카페, 여러 유명 인사들이 찾던 곳', 'Historic literary café in Naples since 1860, once a haunt of famous visitors'),

  // —— bologna ——
  place('bologna-fine_dining-1', 'bologna', 'fine_dining', 'All\'Osteria Bottega', 4.6, 'Via Santa Caterina 51, 40123 Bologna', '미쉐린 가이드 등재, 정통 에밀리아 요리.', 'Michelin Guide-listed, authentic Emilian cooking.'),
  place('bologna-bakery-1', 'bologna', 'bakery', 'Impero Bakery & Cafe', 4.5, 'Strada Maggiore 51c, 40125 Bologna, Italy', '장인정신이 담긴 페이스트리와 디저트로 유명한 볼로냐의 베이커리 카페', 'Bologna bakery café known for its artisan pastries and delectable desserts'),
  place('bologna-cafe-1', 'bologna', 'cafe', 'Caffè Terzi', 4.6, 'Via Guglielmo Oberdan 31b, 40126 Bologna, Italy', '볼로냐 최고로 꼽히는 스페셜티 커피 전문점', 'Widely regarded as Bologna\'s best specialty coffee spot'),

  // —— verona ——
  place('verona-fine_dining-1', 'verona', 'fine_dining', 'Ristorante il Desco', 4.6, 'Via Dietro San Sebastiano 5-7, 37121 Verona', '미쉐린 스타 레스토랑.', 'Michelin-starred restaurant.'),
  place('verona-bakery-1', 'verona', 'bakery', 'Elk Bakery', 4.5, 'Corso Porta Borsari 15D, 37121 Verona, Italy', '홈메이드 브런치 메뉴로 유명한 베로나의 베이커리 카페', 'Verona bakery café known for its homemade brunch menu'),
  place('verona-cafe-1', 'verona', 'cafe', 'Antica Pasticceria Piazza Isolo', 4.5, 'Piazza Isolo, 37121 Verona, Italy', '베로나 최고의 코르네토로 유명한 아늑한 제과점', 'Cozy Verona pastry shop known for some of the city\'s best cornetti'),

  // —— turin ——
  place('turin-fine_dining-1', 'turin', 'fine_dining', 'Al Gatto Nero', 4.5, 'Piazza Vittorio Veneto 2, 10123 Torino', '토리노의 전통 피에몬테 요리.', 'Traditional Piedmontese cuisine in Turin.'),
  place('turin-bakery-1', 'turin', 'bakery', 'Perino Vesco', 4.5, 'Piazza San Carlo 191, 10123 Torino, Italy', '오븐 옆 좌석과 다양한 파니니로 유명한 토리노의 베이커리', 'Turin bakery with oven-side seating, known for its panini'),
  place('turin-cafe-1', 'turin', 'cafe', 'Roma già Talmone', 4.5, 'Corso Vittorio Emanuele II 72, 10121 Torino, Italy', '페이스트리와 트라메지니로 유명한 토리노의 역사적 카페', 'Historic Turin café known for pastries and tramezzini'),

  // —— amalfi ——
  place('amalfi-fine_dining-1', 'amalfi', 'fine_dining', 'Da Gemma', 4.6, 'Via Fra Gerardo Sasso 9, 84011 Amalfi', '아말피의 역사적인 시푸드 레스토랑.', 'Historic seafood restaurant in Amalfi.'),
  place('amalfi-bakery-1', 'amalfi', 'bakery', 'Pasticceria Andrea Pansa', 4.6, 'Piazza Duomo, 84011 Amalfi, Italy', '1830년부터 이어온 아말피의 역사적인 제과점, 두오모 광장 바로 옆에 위치', 'Historic Amalfi pastry shop since 1830, right next to the Duomo square'),
  place('amalfi-cafe-1', 'amalfi', 'cafe', 'Gran Caffè Canasta', 4.5, 'Amalfi, 84011, Italy', '훌륭한 커피와 카놀로로 유명한 아말피의 카페', 'Amalfi café known for top-notch coffee and some of the best cannoli'),

  // —— siena ——
  place('siena-fine_dining-1', 'siena', 'fine_dining', 'Particolare di Siena', 4.6, 'Via Baldassarre Peruzzi 26, 53100 Siena', '미쉐린 스타 레스토랑.', 'Michelin-starred restaurant.'),
  place('siena-bakery-1', 'siena', 'bakery', 'Pasticceria Le Campane', 4.5, 'Via Caduti di Vicobello 37, 53100 Siena, Italy', '가족이 운영하는 시에나의 전통 제과점', 'Family-run traditional pastry shop in Siena'),
  place('siena-cafe-1', 'siena', 'cafe', 'Bar Pasticceria Nannini', 4.4, 'Piazza Giacomo Matteotti 28, 53100 Siena, Italy', '100년 넘게 이어온 시에나의 대표 제과 카페', 'Siena institution for over 100 years, serving pastries and gelato'),

  // —— genoa ——
  place('genoa-fine_dining-1', 'genoa', 'fine_dining', 'Hostaria Ducale', 4.6, 'Salita di S. Matteo 29R, 16123 Genova', '미쉐린 가이드 등재 리구리아 요리.', 'Michelin Guide-listed Ligurian cuisine.'),
  place('genoa-bakery-1', 'genoa', 'bakery', 'Antico Forno della Casana', 4.5, 'Via San Vincenzo 59, 16121 Genova, Italy', '포카차로 유명한 제노바 구시가지의 전통 베이커리', 'Traditional Genoa Old Town bakery known for its focaccia'),
  place('genoa-cafe-1', 'genoa', 'cafe', 'Fratelli Klainguti', 4.5, 'Genova, 16123, Italy', '1828년 스위스 형제가 문을 연 제노바의 역사적 카페', 'Historic Genoa café opened by four Swiss brothers in 1828'),

  // —— palermo ——
  place('palermo-fine_dining-1', 'palermo', 'fine_dining', 'Gagini Restaurant', 4.6, 'Via dei Cassari 35, 90133 Palermo', '미쉐린 1스타 레스토랑.', 'One-Michelin-star restaurant.'),

  place('palermo-bakery-1', 'palermo', 'bakery', 'Pasticceria Oscar 1965', 4.5, 'Via Principe di Belmonte 107, 90139 Palermo, Italy', '코르네토 리코타로 유명한 팔레르모의 인기 제과점', 'Popular Palermo pastry shop known for its cornetto ricotta'),
  place('palermo-cafe-1', 'palermo', 'cafe', 'Bakery Cafe', 4.4, 'Via Giuseppe La Masa 3/A, 90144 Palermo, Italy', '팔레르모의 베이커리 카페', 'Bakery café in Palermo'),
]
