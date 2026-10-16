import { place } from './placeFactory'
import type { Place } from '../types'

export const placesHRExtra: Place[] = [
  // —— zagreb ——
  place('zagreb-fine_dining-1', 'zagreb', 'fine_dining', 'Noel', 'Ul. popa Dukljanina 1, 10000 Zagreb', '자그레브 최초의 미슐랭 1스타 레스토랑, 계절별 테이스팅 메뉴.', "Zagreb's first Michelin-star restaurant, with a seasonal tasting menu."),
  place('zagreb-fine_dining-2', 'zagreb', 'fine_dining', 'Dubravkin Put', 'Dubravkin Put 2, 10000 Zagreb', '투슈카나츠 숲속의 미슐랭 1스타 레스토랑, 생선 요리로 유명.', 'One-Michelin-star restaurant in Tuškanac Forest, known for its fish dishes.'),
  place('zagreb-fine_dining-3', 'zagreb', 'fine_dining', 'Mundoaka Street Food', 'Petrinjska Ulica 2, 10000 Zagreb', '반 옐라치치 광장 인근의 창의적인 스트리트 푸드 레스토랑.', 'Creative street food restaurant near Ban Jelačić Square.'),
  place('zagreb-fine_dining-4', 'zagreb', 'fine_dining', 'Vinodol', 'Ulica Nikole Tesle 10, 10000 Zagreb', '자그레브 중심가의 전통 크로아티아 요리 레스토랑, 슈트루클리로 유명.', 'Traditional Croatian restaurant in central Zagreb, known for its štrukli.', { image: '/places/zagreb-fine_dining-4.jpg' }),
  place('zagreb-fine_dining-5', 'zagreb', 'fine_dining', 'Zinfandel\'s', 'Antuna Mihanovića 1, 10000 Zagreb', '에스플러네이드 호텔 내 미슐랭 그린스타 레스토랑.', 'Michelin Green Star restaurant inside the historic Esplanade Hotel.'),
  place('zagreb-bakery-1', 'zagreb', 'bakery', 'Pekara Dubravica', 'Dolac 2, 10000 Zagreb', '자그레브 최고의 베이커리로 꼽히는 곳, 부렉이 유명.', "Widely regarded as Zagreb's best bakery, known for its burek."),
  place('zagreb-bakery-2', 'zagreb', 'bakery', 'Vincek', 'Ilica 18, 10000 Zagreb', '1977년부터 이어온 케이크·아이스크림 전문점.', 'Cake and ice cream specialist since 1977.'),
  place('zagreb-bakery-3', 'zagreb', 'bakery', 'Torte i to', 'Grahorova Ul. 5, 10000 Zagreb', '치즈케이크와 베이글로 유명한 인기 페이스트리숍.', 'Popular pastry shop known for its cheesecake and bagels.'),
  place('zagreb-cafe-1', 'zagreb', 'cafe', 'Cogito Coffee', 'Varšavska Ulica 11, 10000 Zagreb', '크로아티아에 서드웨이브 커피를 처음 소개한 로스터리.', "One of the first to bring third-wave coffee to Croatia."),
  place('zagreb-cafe-2', 'zagreb', 'cafe', 'Eli\'s Caffé', 'Ilica 63, 10000 Zagreb', '도시 최고의 에스프레소로 꼽히는 인기 카페.', "Popular café known for some of the city's best espresso."),
  place('zagreb-cafe-3', 'zagreb', 'cafe', 'Kino Europa Café', 'Varšavska ulica 3, 10000 Zagreb', '1925년 지어진 영화관 내 카페, 예술영화 상영과 함께.', 'Café inside a 1925 cinema, alongside independent and festival film screenings.'),
  place('zagreb-cafe-4', 'zagreb', 'cafe', 'Botaničar', 'Trg Marka Marulića 6, 10000 Zagreb', '식물원 인근의 보태니컬 콘셉트 카페.', 'Botanical-themed café near the Botanical Garden.'),

  // —— dubrovnik ——
  place('dubrovnik-fine_dining-1', 'dubrovnik', 'fine_dining', 'Nautika Restaurant', 'Brsalje 3, 20000 Dubrovnik', '구시가 성벽 옆의 대표 레스토랑.', 'Landmark restaurant by the Old Town walls.'),
  place('dubrovnik-fine_dining-2', 'dubrovnik', 'fine_dining', 'Restaurant Kopun', 'Polj. R. Boškovića 7, 20000 Dubrovnik', '예수회 성당 앞 광장의 전통 크로아티아 요리 레스토랑, 카폰 요리로 유명.', 'Traditional Croatian restaurant on the square in front of the Jesuit Church, known for its capon dish.'),
  place('dubrovnik-fine_dining-3', 'dubrovnik', 'fine_dining', 'Gradska Kavana Arsenal', 'Pred Dvorom 1, 20000 Dubrovnik', '구시가 대표 카페 겸 레스토랑, 크로아티아·지중해 요리.', 'Iconic Old Town café-restaurant serving Croatian and Mediterranean dishes.'),
  place('dubrovnik-fine_dining-4', 'dubrovnik', 'fine_dining', 'Fish Restaurant Proto', 'Široka ul. 1, 20000 Dubrovnik', '1886년부터 이어온 두브로브니크 최고의 해산물 레스토랑.', "Dubrovnik's finest seafood restaurant, operating since 1886."),
  place('dubrovnik-bakery-1', 'dubrovnik', 'bakery', 'Klas Bakery', 'Ul. Iva Dulčića 12, 20000 Dubrovnik, Croatia', '부렉과 애플 슈트루델로 유명한 두브로브니크의 인기 베이커리', 'Popular Dubrovnik bakery known for burek and apple strudel'),
  place('dubrovnik-bakery-2', 'dubrovnik', 'bakery', 'Holy Burek', 'Ul. od Puča 22, 20000 Dubrovnik', '구시가 푸차 거리의 부렉 전문점, 다양한 속재료로 인기.', 'Burek specialist on Puča street in the Old Town, popular for its variety of fillings.'),
  place('dubrovnik-bakery-3', 'dubrovnik', 'bakery', 'Pekarnica Pile', 'Ul. branitelja Dubrovnika 3, 20000 Dubrovnik', '필레 성문 인근의 베이커리, 부렉과 페이스트리로 인기.', 'Bakery near the Pile Gate, popular for burek and pastries.'),
  place('dubrovnik-cafe-1', 'dubrovnik', 'cafe', 'Caffe Bar Mabelle', 'Ul. kralja Tomislava 7, 20000 Dubrovnik, Croatia', '두브로브니크의 인기 카페 바', 'Popular café bar in Dubrovnik'),
  place('dubrovnik-cafe-2', 'dubrovnik', 'cafe', 'Cogito Coffee Shop', 'Stajeva ul. 5, 20000 Dubrovnik', '해양 박물관 인근의 숨은 스페셜티 커피숍, 자가 로스팅 원두.', 'Hidden specialty coffee shop near the Maritime Museum, roasting its own beans.'),
  place('dubrovnik-korean-1', 'dubrovnik', 'korean', 'Bonto Korean Restaurant', 'Masarykov put 3c, 20000 Dubrovnik', '라파드 지구의 한식당, 불고기·우동·매운 프라이드치킨으로 인기.', 'Korean restaurant in the Lapad area, popular for bulgogi, udon and spicy fried chicken.'),
  place('dubrovnik-korean-2', 'dubrovnik', 'korean', 'Dingdong Korean Restaurant', 'Vetranićeva ul. 8, 20000 Dubrovnik', '구시가 유일의 한식당, 프라이드치킨으로 유명.', 'The only Korean restaurant in the Old Town, known for its fried chicken.'),

  // —— split ——
  place('split-fine_dining-1', 'split', 'fine_dining', 'Villa Spiza', 'Kružićeva 3, 21000 Split', '스플리트 최고 평가 레스토랑.', 'Restaurant in Split.'),
  place('split-fine_dining-2', 'split', 'fine_dining', 'Konoba Fetivi', 'Tomica Stine 4, 21000 Split', '미슐랭 셀렉션에 오른 바로슈 지구의 해산물·지중해 요리 코노바.', 'Michelin-selected seafood and Mediterranean konoba in the Varoš district.'),
  place('split-fine_dining-3', 'split', 'fine_dining', 'Portofino', 'Poljana Grgura Ninskog 7, 21000 Split', '디오클레티아누스 궁전 골목의 파인 다이닝 레스토랑.', "Fine dining restaurant tucked in the alleys of Diocletian's Palace."),
  place('split-bakery-1', 'split', 'bakery', 'Kruscic Bakery', 'Split, 21000, Croatia', '생선 시장 근처 스플리트 구시가지의 아르티장 베이커리', 'Artisan bakery near the Fish Market in Split\'s Old Town'),
  place('split-bakery-2', 'split', 'bakery', "BUTTER'S", 'Ul. Matice hrvatske 12, 21000 Split', '스플리트의 인기 베이커리, 버터 향 가득한 페이스트리로 유명.', "Popular Split bakery known for its buttery pastries."),
  place('split-bakery-3', 'split', 'bakery', 'Oš Kolač - Artisan Cakes and Pastries', 'Ćirila i Metoda 4, 21000 Split', '스플리트의 아르티장 케이크·페이스트리 전문점.', 'Artisan cake and pastry shop in Split.'),
  place('split-bakery-4', 'split', 'bakery', 'ST Burek', 'Domaldova ul. 13, 21000 Split', '스플리트 구시가의 인기 부렉 전문점.', "Popular burek specialist in Split's Old Town.", { image: '/places/split-bakery-4.jpg' }),
  place('split-bakery-5', 'split', 'bakery', 'Cookie Lab', 'Put Firula 1, 21000 Split', '스플리트의 인기 쿠키 전문점.', 'Popular cookie shop in Split.'),
  place('split-cafe-1', 'split', 'cafe', 'Bobis-Riva', 'Domovinskog rata 20, 21000 Split, Croatia', '스플리트 리바 산책로에 위치한 인기 카페', 'Popular café on Split\'s Riva promenade'),
  place('split-cafe-2', 'split', 'cafe', 'D16 Coffee', 'Dominisova ul. 16, 21000 Split', '디오클레티아누스 궁전 안에 숨은 스페셜티 커피숍.', "Specialty coffee shop hidden within Diocletian's Palace."),

  // —— zadar ——
  place('zadar-fine_dining-1', 'zadar', 'fine_dining', 'Pet Bunara', 'Stratico ul. 1, 23000 Zadar', '해산물·육류 요리 레스토랑.', 'Restaurant serving seafood and meat dishes.'),
  place('zadar-fine_dining-2', 'zadar', 'fine_dining', 'Restaurant Kornat', 'Obala Kneza Domagoja 9, 23000 Zadar', '자다르 씨오르간 인근 해변 산책로의 해산물 레스토랑.', "Seafood restaurant on the beach promenade near Zadar's Sea Organ."),
  place('zadar-fine_dining-3', 'zadar', 'fine_dining', 'Restaurant Niko', 'Puntamika, 23000 Zadar', '자체 수족관에서 고른 생선·랍스터 요리로 유명한 레스토랑.', 'Restaurant known for fish and lobster dishes chosen from its own aquarium.'),
  place('zadar-bakery-1', 'zadar', 'bakery', 'Pekara Dalmatinka', 'Ul. Špire Brusine 16, 23000 Zadar, Croatia', '구시가지에서 갓 구운 부렉과 치즈 피타로 인기 있는 자다르의 베이커리', 'Popular Old Town Zadar bakery known for fresh burek and cheese pita'),
  place('zadar-bakery-2', 'zadar', 'bakery', 'Bakery Caffe Dalmatinka', 'Poljana Pape Aleksandra III 6, 23000 Zadar', '자다르의 베이커리 카페.', 'Bakery café in Zadar.'),
  place('zadar-bakery-3', 'zadar', 'bakery', 'Pekarnica Pletenica', 'Ul. Vlatka Mačeka 6, 23000 Zadar', '자다르의 인기 베이커리.', 'Popular bakery in Zadar.'),
  place('zadar-bakery-4', 'zadar', 'bakery', 'Pekara Zara', 'Put Bokanjca 64, 23000 Zadar', '자다르 인근의 베이커리.', 'Bakery near Zadar.'),
  place('zadar-cafe-1', 'zadar', 'cafe', 'Coffee & Cake', 'Braće Vranjanina 14, 23000 Zadar, Croatia', '홈메이드 케이크와 비건·글루텐프리 옵션을 갖춘 자다르의 카페', 'Zadar café with homemade cakes and vegan/gluten-free options'),
  place('zadar-cafe-2', 'zadar', 'cafe', 'Art Kavana', 'Bartola Kašića 1, 23000 Zadar', '성벽 바로 바깥의 아트 카페, 케이크와 디저트로 유명.', "Art café just outside the city walls, known for its cakes and desserts."),

  // —— rovinj ——
  place('rovinj-fine_dining-1', 'rovinj', 'fine_dining', 'Monte', 'Šetalište Vijeća Europe 1-2, 52210 Rovinj', '크로아티아를 대표하는 유명 레스토랑.', 'One of Croatia\'s most celebrated restaurants.'),
  place('rovinj-fine_dining-2', 'rovinj', 'fine_dining', 'La Puntulina', 'Ul. Sv. Križa 38, 52210 Rovinj', '바다 전망의 파인 다이닝, 신선한 해산물과 로컬 와인으로 유명.', 'Fine dining with sea views, known for fresh seafood and local wines.'),
  place('rovinj-fine_dining-3', 'rovinj', 'fine_dining', 'Kantinon Tavern', 'Obala Alda Rismonda 13, 52210 Rovinj', '구시가 메인 산책로의 전통 어부 요리 타베르나.', "Traditional fishermen's cuisine taverna on the Old Town's main promenade."),
  place('rovinj-bakery-1', 'rovinj', 'bakery', 'Mlinar', 'Rovinj, 52210, Croatia', '로빈지 최고로 꼽히는 빵·부렉 전문 베이커리 체인', 'Widely regarded as Rovinj\'s best bakery for bread and burek'),
  place('rovinj-bakery-2', 'rovinj', 'bakery', 'Figment Artisan Bakery', 'Ul. Marka Marulića 30, 52210 Rovinj', '로빈지의 아르티장 베이커리, 수제 빵과 페이스트리로 인기.', 'Artisan bakery in Rovinj, popular for handmade bread and pastries.'),
  place('rovinj-bakery-3', 'rovinj', 'bakery', 'Slasticarna-Pasticceria Breski', 'Ul. Ricarda Daveggie 3, 52210 Rovinj', '로빈지의 인기 제과점, 케이크와 디저트로 유명.', 'Popular pastry shop in Rovinj, known for its cakes and desserts.'),
  place('rovinj-bakery-4', 'rovinj', 'bakery', 'Pekara dan i noc', 'Ul. Giosue Carduccia 7, 52210 Rovinj', '24시간 영업하는 로빈지의 베이커리.', '24-hour bakery in Rovinj.'),
  place('rovinj-bakery-5', 'rovinj', 'bakery', 'Tiramisù mio', 'Ul. Grisia 2, 52210 Rovinj', '구시가 그리시아 거리의 티라미수 전문점.', 'Tiramisu specialty shop on Grisia street in the Old Town.'),
  place('rovinj-cafe-1', 'rovinj', 'cafe', 'Augusto Coffee', 'Rovinj, 52210, Croatia', '메인 스트리트 인근의 신선한 로빈지 카페', 'Fresh new café near Rovinj\'s main street'),
  place('rovinj-cafe-2', 'rovinj', 'cafe', 'TUNI GALLERY - specialty coffee shop', 'Ul. Joakima Rakovca 46, 52210 Rovinj', '로빈지의 스페셜티 커피숍, 갤러리 콘셉트의 인테리어.', 'Specialty coffee shop in Rovinj with a gallery-style interior.'),
  place('rovinj-cafe-3', 'rovinj', 'cafe', 'Caffe Bar Chocolato', 'Fontica 3, 52210 Rovinj', '폰티카 거리의 인기 카페 바.', 'Popular café bar on Fontica street.'),
  place('rovinj-cafe-4', 'rovinj', 'cafe', 'Cinema', 'Trg brodogradilišta, 52210 Rovinj', '조선소 광장에 위치한 인기 카페.', 'Popular café on Shipyard Square (Trg brodogradilišta).'),
  place('rovinj-cafe-5', 'rovinj', 'cafe', 'Viecia Batana cafe', 'Trg Maršala Tita, 52210 Rovinj', '티토 광장의 인기 카페, 전통 바타나 보트를 테마로 함.', 'Popular café on Tito Square, themed around the traditional batana boat.'),

  // —— hvar ——
  place('hvar-fine_dining-1', 'hvar', 'fine_dining', 'Mediterraneo Dine & Wine', 'Braće Bibić 15, 21450 Hvar', '미쉐린 가이드 등재 레스토랑.', 'Michelin Guide-listed restaurant.'),
  place('hvar-fine_dining-2', 'hvar', 'fine_dining', 'Konoba Menego', 'Ulica kroz Grodu 26, 21450 Hvar', '14세기 석조 가옥의 정통 달마티아 코노바.', 'Authentic Dalmatian konoba in a restored 14th-century stone house.'),
  place('hvar-fine_dining-3', 'hvar', 'fine_dining', 'Dalmatino', 'Ul. Sveti Marak 1, 21450 Hvar', '1987년부터 이어온 가족 운영 스테이크·생선 레스토랑.', 'Family-run steak and fish house operating since 1987.'),
  place('hvar-bakery-1', 'hvar', 'bakery', 'Nonica Caffe Bar', 'Kroz Burak 23, 21450 Hvar, Croatia', '흐바르 명물 흐바르스키 콜라치로 유명한 구시가지의 베이커리 카페', 'Hvar Old Town bakery café famous for the local Hvarski kolač cake'),
  place('hvar-bakery-2', 'hvar', 'bakery', 'Pastry Shop Sweets', 'Janka Zazjala 33, 21450 Hvar', '흐바르 구시가의 케이크 전문점, 수제 케이크와 타르트로 인기.', 'Cake shop in Hvar Old Town, popular for its handmade cakes and tarts.'),
  place('hvar-cafe-1', 'hvar', 'cafe', 'Kava', 'Ul. Sveti Marak 2, 21450 Hvar, Croatia', '자체 로스팅 에스프레소로 유명한 흐바르 구시가의 스페셜티 커피숍', 'Specialty coffee shop in Hvar\'s Old Town known for freshly roasted espresso'),
  place('hvar-cafe-2', 'hvar', 'cafe', 'kava37', 'Kroz Burak 37, 21450 Hvar', '흐바르 구시가의 스페셜티 커피숍, 자가 로스팅 원두 사용.', 'Specialty coffee shop in Hvar Old Town using its own roasted beans.'),
  place('hvar-cafe-3', 'hvar', 'cafe', 'Coffee Snob - Specialty Coffee', 'Dr. Mate Miličića 13, 21450 Hvar', '흐바르의 스페셜티 커피 전문점.', 'Specialty coffee shop in Hvar.'),
  place('hvar-cafe-4', 'hvar', 'cafe', 'Oasis Specialty Coffee and Juice Bar', 'Trg svetog Stjepana 18, 21450 Hvar', '스테판 광장에 위치한 스페셜티 커피·주스 바.', "Specialty coffee and juice bar on St. Stephen's Square."),
  place('hvar-cafe-5', 'hvar', 'cafe', 'Caffe Bar Domenika', 'Trg svetog Stjepana 25, 21450 Hvar', '스테판 광장의 아늑한 카페 바.', "Cozy café bar on St. Stephen's Square."),
]
