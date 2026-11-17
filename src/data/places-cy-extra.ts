import { place } from './placeFactory'
import type { Place } from '../types'

export const placesCYExtra: Place[] = [
  // —— nicosia ——
  place('nicosia-fine_dining-4', 'nicosia', 'fine_dining', 'Zanettos Cypriot Tavern', 'Trikoupi 65, Nicosia', '1938년부터 이어온 구시가지의 메제 타베르나. 키프로스 전통 메제를 코스로 냅니다. 주말 저녁은 예약을 권합니다.', 'Old-town meze tavern dating to 1938, serving traditional Cypriot meze; book ahead on weekend evenings.'),
  place('nicosia-fine_dining-5', 'nicosia', 'fine_dining', 'Piatsa Gourounaki', 'Faneromenis 92, 1011 Nicosia', '구시가지의 수블라키·그릴 요리 식당. 메제와 생선도 있습니다.', 'Old-town grill restaurant known for souvlaki, also serving meze and fish.'),
  place('nicosia-bakery-1', 'nicosia', 'bakery', 'HONEST BREAD', 'Athalassas Ave 146B, Strovolos, Nicosia', '사워도우 빵과 타히니 파이·할루미 포카치아를 파는 빵집. 일찍 매진되는 날이 많고 일·월요일은 쉽니다.', 'Sourdough bakery with tahini pie and halloumi focaccia that often sells out early; closed Sundays and Mondays.'),
  place('nicosia-bakery-2', 'nicosia', 'bakery', 'Seed of Happiness', 'Kritis 5, 1060 Nicosia', '글루텐·유제품·정제당 없이 굽는 건강식 빵집. 일요일은 쉽니다.', 'Healthy bakery free of gluten, dairy and refined sugar; closed Sundays.'),
  place('nicosia-cafe-2', 'nicosia', 'cafe', 'Pieto', 'Ledras 207, 1011 Nicosia', '레드라 거리의 빈티지풍 카페. 디저트와 커피·핫초콜릿이 있고 앞 테라스가 있습니다.', 'Vintage-style café on Ledra Street with desserts, coffee and hot chocolate, and a front terrace.'),

  // —— limassol ——
  place('limassol-fine_dining-1', 'limassol', 'fine_dining', 'Ousia Soulful Kitchen', '24 Irenes Street, Medieval Castle Square, Limassol 3042', '중세 성 광장 맞은편의 지중해·레바논풍 레스토랑. 채식·비건 메뉴가 많습니다.', 'Mediterranean restaurant with Lebanese touches facing the medieval castle, with many vegetarian and vegan dishes.'),
  place('limassol-fine_dining-2', 'limassol', 'fine_dining', 'MEZE Taverna Restaurant', 'Agiou Andreou 209, 3036 Limassol', '구시가지의 가족 운영 타베르나. 그리스·키프로스 메제와 무사카를 냅니다. 예약을 권합니다.', 'Family-run old-town taverna serving Greek and Cypriot meze and moussaka; booking advised.'),
  place('limassol-fine_dining-3', 'limassol', 'fine_dining', "Terry's place", 'Panagioti Symeou, 3105 Limassol', '그리스·키프로스 요리 식당. 문어 구이가 알려져 있고 화요일은 쉽니다.', 'Greek and Cypriot restaurant known for grilled octopus; closed Tuesdays.'),
  place('limassol-bakery-1', 'limassol', 'cafe', 'Bakery Kafeneio Healthy Foodbar', 'Archiepiskopou Makariou III 241A, Limassol, Cyprus', '에나에리오스 지구의 브런치 카페. 건강식 메뉴와 글루텐프리 메뉴가 있습니다.', 'Brunch café in the Enaerios area with healthy dishes and a gluten-free menu.'),
  place('limassol-bakery-2', 'limassol', 'bakery', 'Nomad Bread & Coffee', 'Gladstonos 120, 3032 Limassol', '사워도우 빵과 스페셜티 커피를 파는 시내 빵집. 주로 테이크아웃입니다.', 'City-centre bakery for sourdough and specialty coffee, mostly takeaway.'),
  place('limassol-bakery-3', 'limassol', 'bakery', 'Marios Snacks Bakery', 'Agias Zonis 10, Limassol', '할루미와 산 허브를 넣은 치즈 파이로 알려진 오래된 스낵 빵집.', 'Long-running snack bakery known for its cheese pie with halloumi and wild mountain herbs.'),
  place('limassol-cafe-1', 'limassol', 'cafe', 'Uluwatu', 'Anexartisias 10, 3036 Limassol, Cyprus', '런던 로스터리 원두를 쓰는 스페셜티 커피 카페. 디저트와 아이스크림도 있습니다.', 'Specialty coffee café using beans from a London roaster, with sweets and ice cream.'),
  place('limassol-cafe-2', 'limassol', 'cafe', 'Dune Coffee', 'Ellados 78, 3041 Limassol', '에스프레소·필터 커피와 크레페·샌드위치를 내는 카페.', 'Café serving espresso, filter coffee, crêpes and sandwiches.'),
  place('limassol-cafe-3', 'limassol', 'cafe', 'Natives Limassol', 'Agiou Andreou 116, 3036 Limassol', '아기우 안드레우 거리의 커피숍.', 'Coffee shop on Agiou Andreou Street.'),

  // —— paphos ——
  place('paphos-fine_dining-1', 'paphos', 'fine_dining', '7 St. George\'s Tavern', 'Anthipolochagou Georgiou Savva 37, Yeroskipou, Paphos 8201', '예로스키푸의 가족 운영 타베르나. 메뉴 없이 집 농장 채소로 만든 메제를 계속 내줍니다. 예약 필수.', 'Family taverna in Yeroskipou serving a no-menu meze largely from the family farm; booking required.'),
  place('paphos-fine_dining-2', 'paphos', 'fine_dining', 'Dias Zeus Restaurant', 'Tombs of the Kings Ave 47, Paphos', '그리스·키프로스 요리 식당. 해산물 플래터와 칼라마리 등을 내며 화요일은 쉽니다.', 'Greek and Cypriot restaurant with seafood platters and calamari; closed Tuesdays.'),
  place('paphos-bakery-1', 'paphos', 'bakery', 'Sunfresh Bakery', 'Tombs of the Kings Ave 7, Paphos', '킹스 애비뉴 몰 근처의 24시간 빵집 겸 카페. 치즈 파이와 케이크가 있습니다.', '24-hour bakery café near Kings Avenue Mall, with cheese pies and cakes.'),
  place('paphos-bakery-3', 'paphos', 'bakery', 'Georges Alain Pâtisserie', 'Constantinou Kanari 40, 8010 Paphos', '파포스 구시가지의 프랑스식 파티스리. 글루텐프리·무설탕·비건 과자와 아이스크림이 있습니다.', 'French pâtisserie in Paphos old town with gluten-free, sugar-free and vegan pastries and ice cream.'),
  place('paphos-cafe-1', 'paphos', 'cafe', 'Nest Cafe Snack Bar', 'Poseidonos Avenue 23, 8042 Paphos', '가족이 운영하는 스낵 카페. 라떼·오믈렛과 키프로스식 간식을 냅니다.', 'Family-run snack café with lattes, omelettes and Cypriot snacks.'),
  place('paphos-cafe-2', 'paphos', 'cafe', "Campo de'Fiori", 'Petraki Miltiadou 12, Shop 8, 8015 Paphos', '구시가지의 카페 겸 레스토랑. 아침 메뉴와 커피가 있고 바다가 보이는 야외석이 있습니다.', 'Old-town café-restaurant with breakfast, coffee and sea-view outdoor seating.'),

  // —— ayia-napa ——
  place('ayia-napa-fine_dining-1', 'ayia-napa', 'fine_dining', 'Old Village Tavern', '48 Nissi Avenue, Ayia Napa 5330', '시내 초입의 키프로스 전통 타베르나. 메제와 클레프티코·아펠리아 등을 냅니다.', 'Traditional Cypriot taverna at the edge of town, serving meze, kleftiko and afelia.'),
  place('ayia-napa-fine_dining-2', 'ayia-napa', 'fine_dining', 'En Yevo Tavernaki', 'Dionysiou Solomou 16, Ayia Napa', '번화가에서 조금 떨어진 가족 운영 타베르나. 할루미 구이·클레프티코·수블라키를 냅니다.', 'Family taverna a little away from the main strip, serving grilled halloumi, kleftiko and souvlaki.'),

  place('ayia-napa-bakery-1', 'ayia-napa', 'bakery', 'Zorbas Bakery', 'Nissi Avenue 17, 5330 Ayia Napa, Cyprus', '키프로스 체인 빵집의 니시 거리 지점. 24시간 열며 빵·케이크·샌드위치를 팝니다.', 'Nissi Avenue branch of a Cypriot bakery chain, open 24 hours with breads, cakes and sandwiches.'),
  place('ayia-napa-bakery-2', 'ayia-napa', 'bakery', 'Sigma Bakeries Ayia Napa', 'Nissi Avenue, 5330 Ayia Napa', '1922년 리마솔에서 시작한 빵집 체인의 아이아 나파 지점(2023년 개점). 케이크·샌드위치와 글루텐프리·비건 제품이 있습니다.', 'Ayia Napa branch (opened 2023) of a bakery chain founded in Limassol in 1922, with cakes, sandwiches and gluten-free and vegan options.'),
  place('ayia-napa-bakery-3', 'ayia-napa', 'bakery', 'The Bakery Co.', 'Archiepiskopou Makariou III 14, Ayia Napa', '젤라토·과일 타르트·시금치 파이와 커피가 있는 빵집 카페.', 'Bakery café with gelato, fruit tarts, spinach pies and coffee.'),
  place('ayia-napa-cafe-1', 'ayia-napa', 'cafe', 'The Liquid Cafe N Bar', 'Kryou Nerou 8, 5330 Ayia Napa, Cyprus', '낮엔 카페, 밤엔 칵테일 바로 운영하는 곳. 아침 식사·버거와 물담배가 있습니다.', 'Café by day and cocktail bar by night, with breakfast, burgers and shisha.'),
  place('ayia-napa-cafe-3', 'ayia-napa', 'cafe', 'Zoumpoulias', 'Archiepiskopou Makariou III, 5330 Ayia Napa', '주인이 직접 원두를 볶는 카페 겸 식료품점. 키프로스 커피와 올리브유·향신료 등 지역 상품을 팝니다.', 'Café and shop where the owner roasts the coffee, also selling Cypriot coffee, olive oil and spices.'),

  // —— larnaca: restaurants, bakeries and cafés (2026-11-18) ——
  place('larnaca-fine_dining-1', 'larnaca', 'fine_dining', 'To Kazani', '28th October No5, Larnaca', '키프로스 메제를 내는 타베르나. 구글 지도 평점 4.8.', 'Taverna serving Cypriot meze. Rated 4.8 on Google Maps.'),
  place('larnaca-fine_dining-2', 'larnaca', 'fine_dining', 'Edesma Cyprus Taverna - Souvlaki Place', 'Lordou Vyrona 50, Larnaca', '수블라키와 키프로스 가정식을 내는 저렴한 타베르나. 구글 지도 평점 4.7.', 'Inexpensive taverna for souvlaki and Cypriot home cooking. Rated 4.7 on Google Maps.'),
  place('larnaca-fine_dining-3', 'larnaca', 'fine_dining', 'Ithaki Garden Restaurant', 'Zinonos Kitieos 64, Larnaca', '정원 자리가 있는 식당. 구글 지도 평점 4.6.', 'Restaurant with garden seating. Rated 4.6 on Google Maps.'),
  place('larnaca-fine_dining-4', 'larnaca', 'fine_dining', 'Elia Backyard Restaurant', 'Vasileos Pavlou Square 11, Larnaca', '시내 광장 근처 뒤뜰 자리가 있는 식당. 구글 지도 평점 4.7.', 'Restaurant with a backyard terrace near the town square. Rated 4.7 on Google Maps.'),
  place('larnaca-fine_dining-5', 'larnaca', 'fine_dining', 'Famelia', 'Istiklal 10, Larnaca', '옛 튀르키예인 구역의 식당. 구글 지도 평점 4.7.', 'Restaurant in the old Turkish quarter. Rated 4.7 on Google Maps.'),
  place('larnaca-bakery-1', 'larnaca', 'bakery', 'StoArtos Coffee Bakery', 'Ayiou Lazarou 11, Larnaca', '성 라자로 교회 근처의 빵집 겸 카페. 구글 지도 평점 4.8.', 'Bakery café near the Church of St Lazarus. Rated 4.8 on Google Maps.'),
  place('larnaca-bakery-2', 'larnaca', 'bakery', 'Fahrenheit Bakery', 'Stadiou 5, Larnaca', '시내의 작은 빵집. 구글 지도 평점 5.0.', 'Small bakery in town. Rated 5.0 on Google Maps.'),
  place('larnaca-bakery-3', 'larnaca', 'bakery', 'Arax | Armenian & Lebanese Bakery', 'Ermou 186, Larnaca', '아르메니아·레바논식 빵과 라흐마준을 굽는 빵집. 구글 지도 평점 4.9.', 'Armenian and Lebanese bakery for flatbreads and lahmajun. Rated 4.9 on Google Maps.'),
  place('larnaca-bakery-4', 'larnaca', 'bakery', 'Lokmakos', 'Pavlou Valsamaki 30-32, Larnaca', '루쿠마데스(꿀 도넛) 디저트 가게. 구글 지도 평점 4.9.', 'Dessert shop for loukoumades (honey doughnuts). Rated 4.9 on Google Maps.'),
  place('larnaca-cafe-1', 'larnaca', 'cafe', 'To Kafe Tis Chrysanthi\'s', 'Nikolaou Rossou, Larnaca', '구시가의 카페. 구글 지도 평점 4.6.', 'Café in the old town. Rated 4.6 on Google Maps.'),
  place('larnaca-cafe-2', 'larnaca', 'cafe', 'Paul\'s Coffee Roasters', 'Armenian Church Street 35A, Larnaca', '원두를 직접 볶는 카페. 구글 지도 평점 4.8.', 'Café roasting its own coffee. Rated 4.8 on Google Maps.'),
  place('larnaca-cafe-3', 'larnaca', 'cafe', 'Bardo', 'Constantinou Kalogera 72, Larnaca', '작은 커피 가게. 구글 지도 평점 4.9.', 'Small coffee shop. Rated 4.9 on Google Maps.'),
  place('larnaca-cafe-4', 'larnaca', 'cafe', 'Art Cafe 1900', 'Stasinou 6, Larnaca', '옛 집을 고친 카페 겸 식당. 구글 지도 평점 4.8.', 'Café-restaurant in an old house. Rated 4.8 on Google Maps.'),
  place('larnaca-cafe-5', 'larnaca', 'cafe', 'Menta Speciality CoffeeShop', 'Zouhouri Square, Larnaca', '주후리 광장의 스페셜티 커피 가게. 구글 지도 평점 4.6.', 'Speciality coffee shop on Zouhouri Square. Rated 4.6 on Google Maps.'),

  // —— troodos: restaurants, bakeries and cafés (2026-11-18) ——
  place('troodos-fine_dining-1', 'troodos', 'fine_dining', 'Podji Poda', 'Makariou III Ave, Kakopetria', '카코페트리아의 식당. 구글 지도 평점 4.6.', 'Restaurant in Kakopetria. Rated 4.6 on Google Maps.'),
  place('troodos-fine_dining-2', 'troodos', 'fine_dining', 'Ais Giwrkis Kakopetria', 'Agiou Georgiou, Kakopetria', '카코페트리아의 식당. 구글 지도 평점 4.5.', 'Restaurant in Kakopetria. Rated 4.5 on Google Maps.'),
  place('troodos-fine_dining-3', 'troodos', 'fine_dining', 'The Village Pub & Restaurant', 'Mariou Ioannou 2, Kakopetria', '카코페트리아의 펍 겸 식당. 구글 지도 평점 4.4.', 'Pub and restaurant in Kakopetria. Rated 4.4 on Google Maps.'),
  place('troodos-fine_dining-4', 'troodos', 'fine_dining', 'The Village Restaurant (Tavern)', 'Makariou III, Platres', '플라트레스의 그리스·키프로스 타베르나. 구글 지도 평점 4.6.', 'Greek and Cypriot taverna in Platres. Rated 4.6 on Google Maps.'),
  place('troodos-bakery-1', 'troodos', 'bakery', 'Galatas Traditional Bakery', 'B9, Galata', '카코페트리아 옆 갈라타 마을의 전통 빵집. 구글 지도 평점 4.7.', 'Traditional bakery in Galata, next to Kakopetria. Rated 4.7 on Google Maps.'),
  place('troodos-cafe-1', 'troodos', 'cafe', 'Eariko Kakopetria', 'Archiepiskopou Makareiou III 20, Kakopetria', '카코페트리아의 카페. 구글 지도 평점 4.8.', 'Café in Kakopetria. Rated 4.8 on Google Maps.'),
  place('troodos-cafe-2', 'troodos', 'cafe', 'Colours Crêperie', 'Kakopetria', '카코페트리아의 크레프 가게. 구글 지도 평점 4.4.', 'Crêperie in Kakopetria. Rated 4.4 on Google Maps.'),
  place('troodos-cafe-3', 'troodos', 'cafe', 'Orosimo Cafe Platres', 'Olympou 13, Platres', '플라트레스의 카페. 구글 지도 평점 4.4.', 'Café in Platres. Rated 4.4 on Google Maps.'),

  // —— polis: restaurants, bakeries and cafés (2026-11-18) ——
  place('polis-fine_dining-1', 'polis', 'fine_dining', 'Moustakallis Tavern', '9is Iouliou 10, Polis Chrysochous', '폴리스의 키프로스 타베르나. 구글 지도 평점 4.7.', 'Cypriot taverna in Polis. Rated 4.7 on Google Maps.'),
  place('polis-fine_dining-2', 'polis', 'fine_dining', 'Parea Taverna', 'Ayiou Nikolaou 6, Polis Chrysochous', '폴리스의 타베르나. 구글 지도 평점 4.9.', 'Taverna in Polis. Rated 4.9 on Google Maps.'),
  place('polis-fine_dining-3', 'polis', 'fine_dining', 'Old Town Restaurant, Polis', '13 Georgiadou Kyproleondos, Polis Chrysochous', '구시가의 정원 식당. 구글 지도 평점 4.7.', 'Old-town restaurant with a garden. Rated 4.7 on Google Maps.'),
  place('polis-fine_dining-4', 'polis', 'fine_dining', 'Finikas', 'Polis Sq., Ayiou Andronikou, Polis Chrysochous', '폴리스 광장의 식당. 구글 지도 평점 4.7.', 'Restaurant on Polis square. Rated 4.7 on Google Maps.'),
  place('polis-fine_dining-5', 'polis', 'fine_dining', 'Noma Latchi', 'Chrysakama Beach, Latchi', '라치 해변의 식당. 구글 지도 평점 4.8.', 'Beach restaurant in Latchi. Rated 4.8 on Google Maps.'),
  place('polis-bakery-1', 'polis', 'bakery', 'Artopiotis Bakery', 'Vasileos Stasioikou, Polis Chrysochous', '폴리스의 빵집. 구글 지도 평점 4.5.', 'Bakery in Polis. Rated 4.5 on Google Maps.'),
  place('polis-bakery-2', 'polis', 'bakery', 'Artopoiēsis', 'Griva Digeni 21, Polis Chrysochous', '폴리스의 빵집. 구글 지도 평점 4.9.', 'Bakery in Polis. Rated 4.9 on Google Maps.'),
  place('polis-cafe-1', 'polis', 'cafe', 'Saddles Café & Bar', 'Griva Digeni 5, Polis Chrysochous', '폴리스의 카페 겸 바. 구글 지도 평점 4.8.', 'Café-bar in Polis. Rated 4.8 on Google Maps.'),
  place('polis-cafe-2', 'polis', 'cafe', 'La Terrasse 4 U', 'Griva Digeni, Polis Chrysochous', '테라스 자리가 있는 카페. 구글 지도 평점 4.7.', 'Café with a terrace. Rated 4.7 on Google Maps.'),
  place('polis-cafe-3', 'polis', 'cafe', 'Art Cafe Kivotos 3000', 'Polis Chrysochous', '폴리스의 카페. 구글 지도 평점 4.8.', 'Café in Polis. Rated 4.8 on Google Maps.'),
  place('polis-cafe-4', 'polis', 'cafe', 'Oasis Unspoken Gem', 'Chrysakama Beach, Latchi', '라치 해변의 커피 가게. 구글 지도 평점 4.8.', 'Coffee shop on the beach at Latchi. Rated 4.8 on Google Maps.'),

  // —— nicosia: restaurants, bakeries and cafés (2026-11-18) ——
  place('nicosia-fine_dining-6', 'nicosia', 'fine_dining', 'Fisa & Masa Tavern', 'Ledras 55, Nicosia', '레드라 거리의 그리스·키프로스 타베르나. 구글 지도 평점 4.8.', 'Greek and Cypriot taverna on Ledra Street. Rated 4.8 on Google Maps.'),
  place('nicosia-fine_dining-7', 'nicosia', 'fine_dining', 'Tsipouraki Mezedaki', 'Othellou 1, Nicosia', '메제를 내는 그리스식 타베르나. 구글 지도 평점 4.5.', 'Greek taverna serving meze. Rated 4.5 on Google Maps.'),
  place('nicosia-bakery-3', 'nicosia', 'bakery', 'Constantinides Bakery Downtown', 'Stasandrou 1, Nicosia', '시내의 빵집. 구글 지도 평점 4.5.', 'Bakery in the city centre. Rated 4.5 on Google Maps.'),
  place('nicosia-bakery-4', 'nicosia', 'bakery', 'To Biscotto', 'Themistokli Dervi 22, Nicosia', '시내의 작은 빵집. 구글 지도 평점 4.9.', 'Small bakery in the city centre. Rated 4.9 on Google Maps.'),
  place('nicosia-cafe-3', 'nicosia', 'cafe', 'Coffee Therapy (Old City)', 'Aristokyprou 37, Nicosia', '구시가의 작은 커피 가게. 구글 지도 평점 5.0.', 'Small coffee shop in the old town. Rated 5.0 on Google Maps.'),
  place('nicosia-cafe-4', 'nicosia', 'cafe', 'Kafenio 11', 'Pyreos, Nicosia', '구시가의 카페. 구글 지도 평점 4.6.', 'Café in the old town. Rated 4.6 on Google Maps.'),
  place('nicosia-cafe-5', 'nicosia', 'cafe', 'Βιβλιοπωλείο Καφεαναγνωστήριο Έρμα', 'Ektoros 43, Nicosia', '책방을 겸한 카페(에르마). 구글 지도 평점 4.9.', 'Bookshop café (Erma). Rated 4.9 on Google Maps.'),
  place('nicosia-cafe-6', 'nicosia', 'cafe', 'Giagia Victoria', 'Ledras, Nicosia', '레드라 거리의 카페. 구글 지도 평점 4.6.', 'Café on Ledra Street. Rated 4.6 on Google Maps.'),

  // —— paphos: restaurants, bakeries and cafés (2026-11-18) ——
  place('paphos-fine_dining-3', 'paphos', 'fine_dining', 'Agora Tavern', 'Talat Paşa 1, Paphos', '옛 튀르키예인 구역의 그리스·키프로스 타베르나. 구글 지도 평점 4.7.', 'Greek and Cypriot taverna in the old Turkish quarter. Rated 4.7 on Google Maps.'),
  place('paphos-fine_dining-4', 'paphos', 'fine_dining', 'Gourmet Taverna Restaurant', 'Dionysou 1-2, Paphos', '카토 파포스의 타베르나. 구글 지도 평점 4.8.', 'Taverna in Kato Paphos. Rated 4.8 on Google Maps.'),
  place('paphos-bakery-4', 'paphos', 'bakery', 'Papantoniou Bakeries', 'Apostolou Pavlou Ave 41, Paphos', '사도 바울 거리의 빵집. 구글 지도 평점 4.5.', 'Bakery on Apostolou Pavlou Avenue. Rated 4.5 on Google Maps.'),
  place('paphos-bakery-5', 'paphos', 'bakery', 'Stephanie Rose', 'Dimitraki Papamiltiadou 10-14, Paphos', '구시가의 과자점. 구글 지도 평점 4.5.', 'Confectioner in the old town. Rated 4.5 on Google Maps.'),
  place('paphos-cafe-3', 'paphos', 'cafe', 'Piedra All Day Cafe Lounge Bar.', 'Petraki Miltiadous 3, Paphos', '하루 종일 여는 카페 겸 바. 구글 지도 평점 4.8.', 'All-day café and bar. Rated 4.8 on Google Maps.'),
  place('paphos-cafe-4', 'paphos', 'cafe', 'Sykaminia Cafe', 'Nikodimou Mylona 23, Paphos', '구시가의 카페. 구글 지도 평점 4.7.', 'Café in the old town. Rated 4.7 on Google Maps.'),

  // —— ayia-napa: restaurants, bakeries and cafés (2026-11-18) ——
  place('ayia-napa-fine_dining-3', 'ayia-napa', 'fine_dining', 'STAMNA TAVERN', 'Dimokratias, Ayia Napa', '그리스·키프로스 타베르나. 구글 지도 평점 4.7.', 'Greek and Cypriot taverna. Rated 4.7 on Google Maps.'),
  place('ayia-napa-fine_dining-4', 'ayia-napa', 'fine_dining', 'AVRA authentic cypriot kitchen', '2 Nissi Avenue, Ayia Napa', '키프로스 가정식 식당. 구글 지도 평점 4.5.', 'Cypriot home-cooking restaurant. Rated 4.5 on Google Maps.'),
  place('ayia-napa-cafe-4', 'ayia-napa', 'cafe', 'Φusis (Fusis) - Coffee shop in Ayia Napa', 'Kryou Nerou 33, Ayia Napa', '작은 커피 가게. 구글 지도 평점 4.9.', 'Small coffee shop. Rated 4.9 on Google Maps.'),
  place('ayia-napa-cafe-5', 'ayia-napa', 'cafe', 'COFFEEHOUSE TasteHabitat', 'Nissi Ave 37, Ayia Napa', '니시 거리의 커피 가게. 구글 지도 평점 4.6.', 'Coffee shop on Nissi Avenue. Rated 4.6 on Google Maps.'),
]
