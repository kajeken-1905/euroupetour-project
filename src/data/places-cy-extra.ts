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
]
