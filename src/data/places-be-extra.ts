import { place } from './placeFactory'
import type { Place } from '../types'

export const placesBEExtra: Place[] = [
  // —— bruges ——
  place('bruges-fine_dining-1', 'bruges', 'fine_dining', 'Sans Cravate', 4.1, 'Langestraat 159, 8000 Brugge', '미쉐린 1스타 레스토랑.', 'One-Michelin-star restaurant.', { reviewCount: 1545 }),
  place('bruges-fine_dining-2', 'bruges', 'fine_dining', 'Seafoodbar Belge', 4.6, 'Eiermarkt 14, 8000 Brugge', '시푸드 레스토랑.', 'Seafood restaurant.', { reviewCount: 569 }),
  place('bruges-fine_dining-3', 'bruges', 'fine_dining', 'Restaurant Couvert', 4.7, 'Eekhoutstraat 17, 8000 Brugge', '가족이 운영하는 파인 다이닝.', 'Family-run fine dining.', { reviewCount: 433 }),
  place('bruges-fine_dining-4', 'bruges', 'fine_dining', 'Bistro Zwart Huis', 4.3, 'Kuipersstraat 23, 8000 Brugge', '15세기 건물의 비스트로.', '15th-century building bistro.', { reviewCount: 1125 }),
  place('bruges-fine_dining-5', 'bruges', 'fine_dining', 'Poules Moules', 4.3, 'Simon Stevinplein 9, 8000 Brugge', '홍합 요리 전문점.', 'Mussels specialist.', { reviewCount: 2825 }),
  place('bruges-bakery-1', 'bruges', 'bakery', 'Oud Huis Deman', 4.0, 'Vuldersstraat 42, 8000 Brugge', '5대째 이어온 전통 베이커리.', 'Bakery run by five generations.', { reviewCount: 10 }),
  place('bruges-bakery-2', 'bruges', 'bakery', 'Patisserie Servaas Van Mullem', 4.6, 'Vlamingstraat 56, 8000 Brugge', '가족이 운영하는 파티스리.', 'Family-run patisserie.', { reviewCount: 455 }),
  place('bruges-bakery-3', 'bruges', 'bakery', 'The Chocolate Line', 4.6, 'Vaartstraat 75, 8000 Brugge', '유명 초콜릿 전문점.', 'Renowned chocolate shop.', { reviewCount: 52 }),
  place('bruges-bakery-4', 'bruges', 'bakery', 'Carpe Diem Bakery & Tea-room', 4.5, 'Wijngaardstraat 8, 8000 Brugge', '베이커리 겸 티룸.', 'Bakery and tea-room.', { reviewCount: 2969 }),
  place('bruges-bakery-5', 'bruges', 'bakery', 'Otto Waffle Atelier', 4.7, 'Katelijnestraat 1, 8000 Brugge', '와플 전문점.', 'Waffle specialist.', { reviewCount: 436 }),
  place('bruges-cafe-1', 'bruges', 'cafe', 'Vero Caffè', 4.4, 'Sint-Jansplein 9, 8000 Brugge', '스페셜티 커피.', 'Specialty coffee.', { reviewCount: 822 }),
  place('bruges-cafe-2', 'bruges', 'cafe', 'Café Vlissinghe', 4.8, 'Blekersstraat 2, 8000 Brugge', '브루게에서 가장 오래된 카페.', 'The oldest café in Bruges.', { reviewCount: 4956 }),
  place('bruges-cafe-3', 'bruges', 'cafe', 'Coffeebar Adriaan', 4.8, 'Adriaan Willaertstraat 7, 8000 Brugge', '아늑한 커피바.', 'Cozy coffee bar.', { reviewCount: 842 }),
  place('bruges-cafe-4', 'bruges', 'cafe', 'Kottee Kaffee', 4.8, 'Korte Zilverstraat 8, 8000 Brugge', '브런치 카페.', 'Brunch café.', { reviewCount: 1281 }),
  place('bruges-korean-1', 'bruges', 'korean', 'Jinga Korean BBQ', 5.0, 'Vrijdagmarkt 7, 8000 Brugge', '한국식 바비큐 레스토랑.', 'Korean BBQ restaurant.', { reviewCount: 3 }),

  // —— ghent ——
  place('ghent-fine_dining-1', 'ghent', 'fine_dining', 'OAK', 4.8, 'Ottergemsesteenweg Zuid 808, 9000 Gent', '미쉐린 1스타 레스토랑.', 'One-Michelin-star restaurant.', { reviewCount: 1828 }),
  place('ghent-fine_dining-2', 'ghent', 'fine_dining', 'Publiek', 4.7, 'Ham 39, 9000 Gent', '미쉐린 1스타 레스토랑.', 'One-Michelin-star restaurant.', { reviewCount: 674 }),
  place('ghent-fine_dining-3', 'ghent', 'fine_dining', 'Vrijmoed', 4.7, 'Vlaanderenstraat 22, 9000 Gent', '미쉐린 2스타 레스토랑.', 'Two-Michelin-star restaurant.', { reviewCount: 2244 }),
  place('ghent-fine_dining-4', 'ghent', 'fine_dining', 'Mosquito Coast', 3.8, 'Hoogpoort 28, 9000 Gent', '여행 테마의 인터내셔널 레스토랑.', 'Travel-themed international restaurant.', { reviewCount: 591 }),
  place('ghent-fine_dining-5', 'ghent', 'fine_dining', 'Pakhuis', 4.2, 'Schuurkenstraat 4, 9000 Gent', '이탈리아·프랑스식 브라세리.', 'Italian-French brasserie.', { reviewCount: 7861 }),
  place('ghent-bakery-1', 'ghent', 'bakery', 'Himschoot', 4.2, 'Groentenmarkt 1, 9000 Gent', '400년 역사의 베이커리.', 'Bakery with 400 years of history.', { reviewCount: 627 }),
  place('ghent-bakery-2', 'ghent', 'bakery', 'Joost Arijs Patisserie & Chocolaterie', 4.7, 'Vlaanderenstraat 24, 9000 Gent', '미쉐린 레스토랑 출신 파티시에의 디저트 전문점.', 'Desserts by a pâtissier formerly of a Michelin restaurant.', { reviewCount: 650 }),
  place('ghent-bakery-3', 'ghent', 'bakery', 'Mokabon', 4.8, 'Donkersteeg 35, 9000 Gent', '헨트 최초의 커피바.', "Ghent's first coffee bar.", { reviewCount: 1303 }),
  place('ghent-bakery-4', 'ghent', 'bakery', 'Madam Bakster', 4.6, 'Brabantdam 142, 9000 Gent', '비건 베이커리 카페.', 'Plant-based bakery café.', { reviewCount: 67 }),
  place('ghent-cafe-1', 'ghent', 'cafe', 'WAY Specialty Coffee Roasters', 4.7, 'Dok Noord 4E/001, 9000 Gent', '스페셜티 커피 로스터리.', 'Specialty coffee roastery.', { reviewCount: 368 }),
  place('ghent-cafe-2', 'ghent', 'cafe', 'OR Coffee Lab', 4.7, 'Sint-Pietersnieuwstraat 126A, 9000 Gent', '자가 로스팅 커피랩.', 'Self-roasting coffee lab.', { reviewCount: 781 }),
  place('ghent-cafe-3', 'ghent', 'cafe', 'Vandekerckhove & Bar', 4.7, 'Brabantdam 55, 9000 Gent', '1854년부터 이어온 커피 로스터리.', 'Coffee roastery operating since 1854.'),
  place('ghent-cafe-4', 'ghent', 'cafe', 'Café Vooruit', 4.2, 'Sint-Pietersnieuwstraat 23, 9000 Gent', '문화센터 부아루트 내 카페.', 'Café inside the Vooruit arts centre.', { reviewCount: 1243 }),
  place('ghent-cafe-5', 'ghent', 'cafe', 'Café Theatre', 4.1, 'Schouwburgstraat 7, 9000 Gent', '오페라하우스 옆 브라세리 카페.', 'Brasserie café next to the opera house.', { reviewCount: 2185 }),
  place('ghent-korean-1', 'ghent', 'korean', "Kim's Kitchen", 4.5, 'Oudburg 23, 9000 Gent', '가정식 한식당.', 'Home-style Korean restaurant.', { reviewCount: 530 }),

  // —— antwerp ——
  place('antwerp-fine_dining-1', 'antwerp', 'fine_dining', 'Dôme', 4.2, 'Grotehondstraat 2, 2018 Antwerpen', '미쉐린 1스타 레스토랑.', 'One-Michelin-star restaurant.', { reviewCount: 237 }),
  place('antwerp-fine_dining-2', 'antwerp', 'fine_dining', 'The Jane', 4.6, 'Paradeplein 1, 2018 Antwerpen', '미쉐린 2스타 레스토랑.', 'Two-Michelin-star restaurant.', { reviewCount: 6359 }),
  place('antwerp-fine_dining-3', 'antwerp', 'fine_dining', 'Nathan', 4.7, 'Lange Koepoortstraat 13, 2000 Antwerpen', '미쉐린 1스타 레스토랑.', 'One-Michelin-star restaurant.', { reviewCount: 951 }),
  place('antwerp-fine_dining-4', 'antwerp', 'fine_dining', 'Zilte', 4.7, 'Hanzestedenplaats 5, 2000 Antwerpen', '미쉐린 3스타, MAS 뮤지엄 9층 레스토랑.', 'Three-Michelin-star restaurant on the 9th floor of the MAS museum.', { reviewCount: 613 }),
  place('antwerp-fine_dining-5', 'antwerp', 'fine_dining', 'RAS', 4.8, 'Ernest Van Dijckkaai 37, 2000 Antwerpen', '스헬더 강변 전망 레스토랑.', 'Restaurant with Scheldt riverfront views.', { reviewCount: 1988 }),
  place('antwerp-bakery-1', 'antwerp', 'bakery', 'Domestic Bakkerij & High Tea', 4.6, 'Lange Gasthuisstraat 5, 2000 Antwerpen', '인기 베이커리 겸 하이티.', 'Popular bakery and high-tea spot.', { reviewCount: 325 }),
  place('antwerp-bakery-2', 'antwerp', 'bakery', 'Goossens Bakkerij', 4.5, 'Korte Gasthuisstraat 31, 2000 Antwerpen', '1884년부터 이어온 전통 베이커리.', 'Traditional bakery operating since 1884.', { reviewCount: 487 }),
  place('antwerp-bakery-3', 'antwerp', 'bakery', 'Patisserie Lints', 4.0, 'Vleminckveld 68, 2000 Antwerpen', '파티스리 겸 티룸.', 'Patisserie and tea room.'),
  place('antwerp-bakery-4', 'antwerp', 'bakery', 'Bakery Dellafaille', 4.3, 'Museumstraat 2, 2000 Antwerpen', '사워도우·크루아상 베이커리.', 'Sourdough and croissant bakery.', { reviewCount: 651 }),
  place('antwerp-cafe-1', 'antwerp', 'cafe', 'Normo Coffee Roasters', 4.6, 'Minderbroedersrui 30, 2000 Antwerpen', '자가 로스팅 스페셜티 커피.', 'Specialty coffee with in-house roasting.'),
  place('antwerp-cafe-2', 'antwerp', 'cafe', 'Caffènation', 4.5, 'Mechelsesteenweg 16, 2018 Antwerpen', '로스터리 카페.', 'Roastery café.', { reviewCount: 2092 }),
  place('antwerp-cafe-3', 'antwerp', 'cafe', 'Buchbar', 4.3, 'Scheldestraat 79, 2000 Antwerpen', '서점 겸 카페.', 'Bookstore café.' ),
  place('antwerp-cafe-4', 'antwerp', 'cafe', 'Vitrin', 3.5, 'Marnixplaats 14, 2000 Antwerpen', '인기 있는 모던 카페 겸 바.', 'Popular modern café and bar.'),
  place('antwerp-korean-1', 'antwerp', 'korean', 'Chingu Antwerp', 4.8, 'Oude Beurs 52, 2000 Antwerpen', '가족이 운영하는 한식당.', 'Family-run Korean restaurant.', { reviewCount: 18 }),

  // —— leuven ——
  place('leuven-fine_dining-1', 'leuven', 'fine_dining', 'EED', 4.6, 'Vaartstraat 14, 3000 Leuven', '미쉐린 1스타 레스토랑.', 'One-Michelin-star restaurant.'),
  place('leuven-fine_dining-2', 'leuven', 'fine_dining', 'EssenCiel', 4.6, 'Naamsestraat 47, 3000 Leuven', '미쉐린 1스타 레스토랑.', 'One-Michelin-star restaurant.', { reviewCount: 486 }),
  place('leuven-fine_dining-3', 'leuven', 'fine_dining', 'Zarza', 4.8, 'Bondgenotenlaan 92, 3000 Leuven', '로컬에서 사랑받는 파인 다이닝.', 'Local favourite fine dining.', { reviewCount: 1261 }),
  place('leuven-fine_dining-4', 'leuven', 'fine_dining', 'Domus', 3.9, 'Tiensestraat 8, 3000 Leuven', '브루어리 겸 레스토랑.', 'Brewery and restaurant.', { reviewCount: 5549 }),
  place('leuven-fine_dining-5', 'leuven', 'fine_dining', 'Mykene', 4.1, 'Muntstraat 44, 3000 Leuven', '벨기에 전통 요리 레스토랑.', 'Traditional Belgian cuisine restaurant.', { reviewCount: 2332 }),
  place('leuven-bakery-1', 'leuven', 'bakery', 'Patisserie Zuut', 4.6, 'Vismarkt 2, 3000 Leuven', '파티스리 겸 쇼콜라티에.', 'Patisserie and chocolatier.', { reviewCount: 331 }),
  place('leuven-bakery-2', 'leuven', 'bakery', 'Bakkerij Julius', 4.4, 'Bondgenotenlaan 78, 3000 Leuven', '동네 베이커리.', 'Neighborhood bakery.', { reviewCount: 66 }),
  place('leuven-cafe-1', 'leuven', 'cafe', 'MOK', 4.4, 'Diestsestraat 165, 3000 Leuven', '스페셜티 커피 로스터리.', 'Specialty coffee roastery.', { reviewCount: 930 }),
  place('leuven-cafe-2', 'leuven', 'cafe', 'Madmum', 4.2, 'Tiensestraat 38, 3000 Leuven', '커피 로스터리 겸 브런치 카페.', 'Coffee roastery and brunch café.'),
  place('leuven-cafe-3', 'leuven', 'cafe', 'Café Commerce', 4.4, 'Herbert Hooverplein 16, 3000 Leuven', '구도서관 전망의 클래식 카페.', 'Classic café with a view of the old library.', { reviewCount: 1139 }),
  place('leuven-cafe-4', 'leuven', 'cafe', 'De Blauwe Kater', 3.6, 'Mechelsestraat 51, 3000 Leuven', '수제 맥주와 라이브 음악의 브루인 카페.', 'Brown café with craft beer and live music.'),
  place('leuven-korean-1', 'leuven', 'korean', 'Oh, My Kimchi!', 4.7, 'Busleidengang 6D, 3000 Leuven', '한국식 숯불구이 전문점.', 'Korean charcoal-grill BBQ restaurant.', { reviewCount: 374 }),

  // —— dinant ——
  place('dinant-fine_dining-1', 'dinant', 'fine_dining', 'Le Confessionnal', 4.5, 'Rue Rémy Himmer 4, 5500 Dinant', '18세기 수녀원 건물의 프랑스 레스토랑.', 'French restaurant in an 18th-century former convent.', { reviewCount: 257 }),
  place('dinant-fine_dining-2', 'dinant', 'fine_dining', 'La Broche', 4.5, 'Rue Grande 22, 5500 Dinant', '미쉐린 빕 구르망 수상 레스토랑.', 'Michelin Bib Gourmand-awarded restaurant.', { reviewCount: 691 }),
  place('dinant-fine_dining-3', 'dinant', 'fine_dining', 'Le Wiertz', 3.6, 'Place Albert Ier 1, 5500 Dinant', '전통 벨기에 비스트로.', 'Traditional Belgian bistro.', { reviewCount: 1018 }),
  place('dinant-bakery-1', 'dinant', 'bakery', 'Patisserie Jacobs', 4.5, 'Rue Grande 147, 5500 Dinant', '1860년부터 이어온 쿠크 드 디낭 전문점.', 'Couque de Dinant specialist since 1860.', { reviewCount: 67 }),
  place('dinant-cafe-1', 'dinant', 'cafe', 'Le Cerf Vert', 4.4, 'Avenue Winston Churchill 32, 5500 Dinant', '뫼즈 강변의 바 겸 비스트로.', 'Bar and bistro on the Meuse riverside.', { reviewCount: 747 }),
  place('dinant-cafe-2', 'dinant', 'cafe', 'Café Leffe', 3.5, 'Rue Adolphe Sax 2, 5500 Dinant', '강 전망 테라스가 있는 카페.', 'Café with a river-view terrace.', { reviewCount: 2376 }),

]
