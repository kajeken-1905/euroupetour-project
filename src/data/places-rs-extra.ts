import { place } from './placeFactory'
import type { Place } from '../types'

export const placesRSExtra: Place[] = [
  // —— belgrade ——
  place('belgrade-fine_dining-1', 'belgrade', 'fine_dining', 'Homa Central Bistro', 'Senjanina Ive 4, Beograd 11000, Serbia', '2026년 3월 홈마 도르촐을 새 이름으로 연 비스트로. 현대 유럽 요리를 냅니다.', 'Bistro that reopened in March 2026 as the new incarnation of Homa Dorćol, serving modern European food.'),
  place('belgrade-fine_dining-2', 'belgrade', 'fine_dining', 'Langouste', 'Kosančićev venac 29, Beograd 11000, Serbia', '사바강이 내려다보이는 구시가 끝자락의 미쉐린 1스타 레스토랑.', 'One-Michelin-star restaurant on the edge of the old town with views over the Sava.', { michelin: 'star1' }),
  place('belgrade-fine_dining-3', 'belgrade', 'fine_dining', 'Salon 1905', 'Karađorđeva 48, Beograd 11000, Serbia', '사바말라의 유서 깊은 게오자보드 건물에 자리한 바로크·아르누보 양식의 파인다이닝', 'Fine-dining restaurant in the historic Geozavod building in Savamala, blending Baroque and Art Nouveau architecture'),
  place('belgrade-fine_dining-4', 'belgrade', 'fine_dining', 'Tri šešira', 'Skadarska 29, Beograd 11000, Serbia', '스카다를리야 거리의 세르비아 전통 식당. 악단 연주가 있습니다.', 'Traditional Serbian restaurant in Skadarlija with live music.', { image: '/places/belgrade-fine_dining-4.jpg' }),
  place('belgrade-fine_dining-5', 'belgrade', 'fine_dining', 'Lorenzo & Kakalamba', 'Cvijićeva 110, Beograd 11000, Serbia', '달리풍 실내의 이탈리아·세르비아 퓨전 식당.', 'Italian-Serbian fusion restaurant with a Dalí-esque interior.'),
  place('belgrade-bakery-1', 'belgrade', 'bakery', 'Trpkovic Bakery', 'Nemanjina 32, Beograd 11000, Serbia', '네마니나 거리의 전통 빵집 체인 매장.', 'Traditional bakery chain outlet on Nemanjina street.'),
  place('belgrade-bakery-4', 'belgrade', 'bakery', 'Mandarina', 'Gračanička 16, Beograd 11000, Serbia', '스타리 그라드 중심가의 케이크·페이스트리 전문점', "Cake and pastry shop in the heart of Belgrade's old town, Stari Grad"),
  place('belgrade-cafe-1', 'belgrade', 'cafe', 'Artist Specialty Coffee', 'Kondina 26, Beograd 11000, Serbia', '스타리 그라드의 스페셜티 커피숍.', 'Specialty coffee shop in Stari Grad.'),
  place('belgrade-cafe-2', 'belgrade', 'cafe', 'Kafeterija Vračar', 'Koče Kapetana 32, Beograd 11000, Serbia', '브라차르 지구의 커피 체인 매장.', 'Coffee chain outlet in the Vračar district.'),
  place('belgrade-cafe-3', 'belgrade', 'cafe', 'DRIP Specialty Coffee', 'Gospodar-Jevremova 46a, Beograd 11000, Serbia', '도르촐 지역 고스포다르 예브레모바 거리의 스페셜티 커피숍', "Specialty coffee shop on Gospodar-Jevremova street in Belgrade's Dorćol district"),

  // —— novi-sad ——
  place('novi-sad-fine_dining-2', 'novi-sad', 'fine_dining', 'Piknik', 'Ribarsko ostrvo bb, 21000 Novi Sad, Serbia', '어부의 섬(리바르스코 오스트르보)의 세르비아 식당. 생선 요리가 있습니다.', 'Serbian restaurant on Fisherman’s Island (Ribarsko ostrvo) serving fish.', { image: '/places/novi-sad-fine_dining-2.jpg' }),
  place('novi-sad-fine_dining-3', 'novi-sad', 'fine_dining', 'Sokače', 'Pavla Papa 11, 21000 Novi Sad, Serbia', '로트크바리야 지구의 세르비아식 그릴 식당.', 'Serbian grill restaurant in the Rotkvarija district.', { image: '/places/novi-sad-fine_dining-3.jpg' }),
  place('novi-sad-bakery-1', 'novi-sad', 'bakery', 'Hleb & Kifle', 'Narodnih heroja 5, Novi Sad, Serbia', '빵·페이스트리·쿠키를 파는 노비사드의 빵집 체인.', 'Novi Sad bakery chain with bread, pastries and cookies.'),
  place('novi-sad-bakery-2', 'novi-sad', 'bakery', 'Skroz Dobra Bakery', 'Bulevar oslobođenja 95, 21101 Novi Sad, Serbia', '노비사드 구시가의 빵집 체인 매장.', 'Bakery chain outlet in Novi Sad’s old town.'),
  place('novi-sad-cafe-1', 'novi-sad', 'cafe', 'Coffeedream', 'Petra Drapšina 56, Novi Sad, Serbia', '모던한 분위기의 노비사드 카페.', 'Novi Sad café with a modern feel.'),
  place('novi-sad-cafe-3', 'novi-sad', 'cafe', 'Petrus Caffe Gallery Bar', 'Trg slobode 4, 21111 Novi Sad, Serbia', '중앙 광장(트르그 슬로보데)의 카페 겸 갤러리 바.', 'Café and gallery bar on Trg slobode, the main square.'),

  // —— nis ——
  place('nis-fine_dining-1', 'nis', 'fine_dining', 'Stambolijski', 'Nikole Pašića 36, 18000 Niš, Serbia', '19세기 오스만 시대 저택을 개조한 레스토랑으로 발칸 전통 요리와 훌륭한 와인 리스트를 제공', 'Restaurant in a preserved 19th-century Ottoman-era house serving traditional Balkan cuisine with an excellent wine list', { image: '/places/nis-fine_dining-1.jpg' }),
  place('nis-fine_dining-2', 'nis', 'fine_dining', 'Kod Rajka', 'Kazandžijsko sokače, 18000 Niš, Serbia', '니시의 옛 장인 골목 카잔지스코 소카체에 위치한 전통 세르비아 레스토랑', 'Traditional Serbian restaurant on Kazandžijsko sokače, Niš\'s historic craftsmen\'s alley'),
  place('nis-fine_dining-3', 'nis', 'fine_dining', 'Nišlijska Mehana', 'Prvomajska 49, 18105 Niš, Serbia', '메디야나 지역의 전통 니시 스타일 선술집 레스토랑', 'Traditional Niš-style tavern restaurant in the Medijana district', { image: '/places/nis-fine_dining-3.jpg' }),
  place('nis-bakery-2', 'nis', 'bakery', 'Pekara Čair', 'Dušana Popovića 16, 18109 Niš, Serbia', '아펠로바츠 지구의 빵집.', 'Bakery in the Apelovac district of Niš.'),
  place('nis-cafe-2', 'nis', 'cafe', 'Kafeterija Biro', 'Koste Stamenkovića 1, 18000 Niš', '세르비아 스페셜티 커피 가이드에 오른 니시 중심가의 브루하우스.', "Brewhouse in central Niš listed in Serbia's Specialty Coffee Guide."),
  place('nis-cafe-3', 'nis', 'cafe', 'Stock Coffee', 'Trg Kralja Aleksandra Ujedinitelja 1a, 18000 Niš', '천장에 커피 자루가 걸린 니시의 모던 스페셜티 커피숍.', 'Modern Niš specialty coffee shop with burlap coffee sacks hanging from the ceiling.'),

  // —— subotica ——
  place('subotica-fine_dining-1', 'subotica', 'fine_dining', 'Mali Trg', 'Branislava Nušića 4a, 24000 Subotica, Serbia', '수보티차의 파인다이닝 레스토랑.', 'Fine-dining restaurant in Subotica.'),
  place('subotica-fine_dining-2', 'subotica', 'fine_dining', 'Basch House 1887', 'Cara Lazara 3, 24000 Subotica, Serbia', '1887년 지은 건물의 수보티차 레스토랑.', 'Subotica restaurant in an 1887 building.'),
  place('subotica-fine_dining-3', 'subotica', 'fine_dining', 'Konoba "Tinel"', 'Huga Badalića 14, 24000 Subotica, Serbia', '유럽·지중해·크로아티아 요리를 내는 코노바 식당.', 'Konoba-style restaurant serving European, Mediterranean and Croatian food.'),

  place('subotica-bakery-1', 'subotica', 'cafe', 'Kafe Priča', 'Korzo 9/2, 24000 Subotica, Serbia', '수보티차 중심가 코르조 거리 안뜰의 카페 겸 바.', 'Café-bar in a courtyard off the Korzo in central Subotica.'),
  place('subotica-bakery-2', 'subotica', 'bakery', 'Artos', 'Zmaj Jovina 7a, 24000 Subotica, Serbia', '비건 옵션을 갖춘 수보티차의 베이커리.', 'Subotica bakery with vegan options.'),
  place('subotica-cafe-1', 'subotica', 'cafe', 'Hausbrandt Caffe', 'Trg Cara Jovana Nenada 9, 24000 Subotica, Serbia', '아르누보 시청 앞 광장의 카페.', 'Café facing the Art Nouveau city hall square.'),
  place('subotica-cafe-2', 'subotica', 'cafe', 'Boss Caffe', 'Matije Korvina 7, 24000 Subotica, Serbia', '1986년 문을 연 수보티차의 이름난 카페 겸 레스토랑. 넓은 정원이 있습니다.', 'Well-known Subotica café-restaurant opened in 1986, with a large garden.'),
]
