import { place } from './placeFactory'
import type { Place } from '../types'

export const placesRSExtra: Place[] = [
  // —— belgrade ——
  place('belgrade-fine_dining-1', 'belgrade', 'fine_dining', 'Homa Central Bistrot', 4.5, 'Senjanina Ive 4, Beograd 11000, Serbia', '모던 유럽 요리를 선보이는 베오그라드의 인기 비스트로', 'Popular Belgrade bistro serving modern European cuisine', { reviewCount: 915 }),
  place('belgrade-fine_dining-2', 'belgrade', 'fine_dining', 'Langouste', 4.7, 'Kosančićev venac 29, Beograd 11000, Serbia', '다뉴브 강이 보이는 구시가지의 대표 해산물 파인다이닝, 테이스팅 메뉴로 호평', "Belgrade's leading seafood fine-dining restaurant in the old town with Danube river views, praised for its tasting menu", { reviewCount: 753 }),
  place('belgrade-fine_dining-3', 'belgrade', 'fine_dining', 'Salon 1905', 4.5, 'Karađorđeva 48, Beograd 11000, Serbia', '사바말라의 유서 깊은 게오자보드 건물에 자리한 바로크·아르누보 양식의 파인다이닝', 'Fine-dining restaurant in the historic Geozavod building in Savamala, blending Baroque and Art Nouveau architecture', { reviewCount: 858 }),
  place('belgrade-fine_dining-4', 'belgrade', 'fine_dining', 'Tri šešira', 4.5, 'Skadarska 29, Beograd 11000, Serbia', '스카다르리야 거리의 대표 전통 세르비아 레스토랑, 라이브 악단 연주로 유명', "Skadarlija's landmark traditional Serbian restaurant, known for live band performances", { reviewCount: 13846 }),
  place('belgrade-fine_dining-5', 'belgrade', 'fine_dining', 'Lorenzo & Kakalamba', 4.6, 'Cvijićeva 110, Beograd 11000, Serbia', '달리풍의 독특한 인테리어와 이탈리아·세르비아 퓨전 요리로 유명한 베오그라드의 명물 레스토랑', "Belgrade landmark restaurant known for its eccentric Dalí-esque interior and Italian-Serbian fusion cuisine", { reviewCount: 6389 }),
  place('belgrade-bakery-1', 'belgrade', 'bakery', 'Trpkovic Bakery', 4.6, 'Nemanjina 32, Beograd 11000, Serbia', '네마니나 거리에 위치한 베오그라드의 대표적인 전통 베이커리 체인', "Well-known traditional bakery chain on Nemanjina street in Belgrade", { reviewCount: 6419 }),
  place('belgrade-bakery-3', 'belgrade', 'bakery', 'GOGA buregdžinica', 4.9, 'Kralja Milana 47, Beograd 11000, Serbia', '카랄랴 밀라나 거리의 부렉 전문점, 신선한 부렉으로 현지인들에게 인기', 'Popular burek specialty shop on Kralja Milana street loved by locals for fresh burek', { reviewCount: 238 }),
  place('belgrade-bakery-4', 'belgrade', 'bakery', 'Mandarina', 4.6, 'Gračanička 16, Beograd 11000, Serbia', '스타리 그라드 중심가의 케이크·페이스트리 전문점', "Cake and pastry shop in the heart of Belgrade's old town, Stari Grad", { reviewCount: 1473 }),
  place('belgrade-cafe-1', 'belgrade', 'cafe', 'Artist Specialty Coffee', 4.9, 'Kondina 26, Beograd 11000, Serbia', '스타리 그라드에 위치한 베오그라드의 인기 스페셜티 커피숍', "Popular specialty coffee shop in Belgrade's Stari Grad old town", { reviewCount: 1104 }),
  place('belgrade-cafe-2', 'belgrade', 'cafe', 'Kafeterija Vračar', 4.4, 'Koče Kapetana 32, Beograd 11000, Serbia', '브라차르 지역의 인기 커피 체인점', 'Popular Belgrade coffee chain location in the Vračar district', { reviewCount: 1552 }),
  place('belgrade-cafe-3', 'belgrade', 'cafe', 'DRIP Specialty Coffee', 4.8, 'Gospodar-Jevremova 46a, Beograd 11000, Serbia', '도르촐 지역 고스포다르 예브레모바 거리의 스페셜티 커피숍', "Specialty coffee shop on Gospodar-Jevremova street in Belgrade's Dorćol district", { reviewCount: 767 }),
  place('belgrade-korean-1', 'belgrade', 'korean', 'Aigo Mashisoyo', 4.9, 'Svetozara Markovića 27, Beograd 11000, Serbia', '스베토자라 마르코비차 거리의 인기 한식당', 'Popular Korean restaurant on Svetozara Markovića street in Belgrade', { reviewCount: 559 }),

  // —— novi-sad ——
  place('novi-sad-fine_dining-1', 'novi-sad', 'fine_dining', 'Plata', 4.6, 'Đorđa Jovanovića 2, 21000 Novi Sad, Serbia', '고풍스러운 저택에 자리한 파인다이닝 레스토랑 겸 와인바로 전통과 혁신 요리를 함께 선보임', 'Fine-dining restaurant and wine bar in an elegant villa serving both traditional and innovative dishes'),
  place('novi-sad-fine_dining-2', 'novi-sad', 'fine_dining', 'Piknik', 4.9, 'Ribarsko ostrvo 5a, 21000 Novi Sad, Serbia', '리바르스코 오스트르보(어부의 섬)에 위치한 노비사드의 대표 세르비아 전통 레스토랑, 생선 요리로 유명', "Novi Sad landmark Serbian restaurant on Ribarsko ostrvo (Fisherman's Island), known for its fish dishes", { reviewCount: 6822 }),
  place('novi-sad-fine_dining-3', 'novi-sad', 'fine_dining', 'Sokače', 4.9, 'Pavla Papa 11, 21000 Novi Sad, Serbia', '로트크바리야 지역의 인기 그릴 레스토랑, 세르비아식 바비큐로 유명', 'Popular grill restaurant in the Rotkvarija district known for Serbian-style barbecue', { reviewCount: 4570 }),
  place('novi-sad-fine_dining-4', 'novi-sad', 'fine_dining', 'Bata Pežo', 5.0, 'Kamenjar 5, 21000 Novi Sad, Serbia', '다뉴브 강변 카메냐르 지역의 명물 생선 요리 전문 레스토랑', 'Landmark fish restaurant on the Danube riverbank in the Kamenjar district', { reviewCount: 2996 }),
  place('novi-sad-fine_dining-5', 'novi-sad', 'fine_dining', 'Nucleus', 4.9, 'Preradovićeva 2a, 21131 Petrovaradin, Novi Sad, Serbia', '페트로바라딘 지역의 모던한 컨템포러리 다이닝 레스토랑', 'Modern contemporary dining restaurant in the Petrovaradin district', { reviewCount: 318 }),
  place('novi-sad-bakery-1', 'novi-sad', 'bakery', 'Bread & Kifle', 4.4, 'Narodnih heroja 5, Novi Sad, Serbia', '언제나 신선한 빵과 페이스트리, 쿠키로 유명한 노비사드의 베이커리 체인', 'Novi Sad bakery chain known for always-fresh bread, pastries and cookies'),
  place('novi-sad-bakery-2', 'novi-sad', 'bakery', 'Skroz Dobra Bakery', 4.8, 'Bulevar oslobođenja 95, 21101 Novi Sad, Serbia', '노비사드 스타리 그라드 지역의 인기 베이커리 체인', "Popular bakery chain location in Novi Sad's Stari Grad district", { reviewCount: 2338 }),
  place('novi-sad-cafe-1', 'novi-sad', 'cafe', 'Coffeedream', 4.6, 'Petra Drapšina 56, Novi Sad, Serbia', '친절한 서비스와 아늑하고 모던한 분위기로 사랑받는 노비사드의 인기 카페', 'Popular Novi Sad cafe loved for its excellent service and cozy, modern atmosphere'),
  place('novi-sad-cafe-2', 'novi-sad', 'cafe', 'Milky', 4.9, 'Bulevar cara Lazara, 21002 Novi Sad, Serbia', '차라 라자라 대로에 위치한 노비사드의 인기 카페 겸 디저트숍', "Popular cafe and dessert shop on Bulevar cara Lazara in Novi Sad", { reviewCount: 714 }),
  place('novi-sad-cafe-3', 'novi-sad', 'cafe', 'Petrus Caffe Gallery Bar', 4.9, 'Trg slobode 4, 21111 Novi Sad, Serbia', '노비사드 중심 광장 트르그 슬로보데에 위치한 인기 카페 겸 갤러리 바', "Popular cafe and gallery bar on Trg slobode, Novi Sad's main square", { reviewCount: 10336 }),

  // —— nis ——
  place('nis-fine_dining-1', 'nis', 'fine_dining', 'Stambolijski', 4.5, 'Nikole Pašića 36, 18000 Niš, Serbia', '19세기 오스만 시대 저택을 개조한 레스토랑으로 발칸 전통 요리와 훌륭한 와인 리스트를 제공', 'Restaurant in a preserved 19th-century Ottoman-era house serving traditional Balkan cuisine with an excellent wine list'),
  place('nis-fine_dining-2', 'nis', 'fine_dining', 'Kod Rajka', 5.0, 'Kazandžijsko sokače, 18000 Niš, Serbia', '니시의 옛 장인 골목 카잔지스코 소카체에 위치한 전통 세르비아 레스토랑', 'Traditional Serbian restaurant on Kazandžijsko sokače, Niš\'s historic craftsmen\'s alley', { reviewCount: 5360 }),
  place('nis-fine_dining-3', 'nis', 'fine_dining', 'Nišlijska Mehana', 4.9, 'Prvomajska 49, 18105 Niš, Serbia', '메디야나 지역의 전통 니시 스타일 선술집 레스토랑', 'Traditional Niš-style tavern restaurant in the Medijana district', { reviewCount: 4383 }),
  place('nis-bakery-1', 'nis', 'bakery', 'Bakery Anton Plus', 4.5, 'Trg Pavla Stojkovića 17, 18000 Niš, Serbia', '애플롤과 초콜릿 크루아상으로 추천받는 니시의 인기 베이커리', 'Popular Niš bakery recommended for its apple roll and chocolate croissant'),
  place('nis-bakery-2', 'nis', 'bakery', 'Pekara Čair', 4.8, 'Dušana Popovića 16, 18109 Niš, Serbia', '아펠로바츠 지역의 인기 베이커리', 'Popular bakery in the Apelovac district of Niš', { reviewCount: 574 }),
  place('nis-cafe-1', 'nis', 'cafe', 'ART caffe 018', 4.5, 'Dejana Dinića 2A, 18000 Niš, Serbia', '세련된 인테리어와 넓은 주차 공간을 갖춘 니시의 인기 카페', 'Popular Niš cafe with a stylish interior and ample parking'),

  // —— subotica ——
  place('subotica-fine_dining-1', 'subotica', 'fine_dining', 'Mali Trg', 4.5, 'Branislava Nušića 4a, 24000 Subotica, Serbia', '세련된 인테리어와 정교한 플레이팅으로 알려진 수보티차의 대표 파인다이닝 레스토랑', 'Subotica\'s leading fine-dining restaurant known for elegant interiors and refined plating'),
  place('subotica-fine_dining-2', 'subotica', 'fine_dining', 'Basch House 1887', 5.0, 'Cara Lazara 3, 24000 Subotica, Serbia', '1887년 지어진 건물에 자리한 수보티차의 인기 인터내셔널 레스토랑', 'Popular international restaurant in Subotica housed in a building dating to 1887', { reviewCount: 11377 }),
  place('subotica-fine_dining-3', 'subotica', 'fine_dining', 'Konoba "Tinel"', 4.8, 'Huga Badalića 14, 24000 Subotica, Serbia', '유러피언·지중해·크로아티아 요리를 선보이는 수보티차의 인기 코노바(선술집) 레스토랑', 'Popular konoba-style restaurant in Subotica serving European, Mediterranean and Croatian cuisine', { reviewCount: 1446 }),

  place('subotica-bakery-1', 'subotica', 'bakery', 'Kafe Prića', 4.5, 'Ulica Korzo 9, 24000 Subotica, Serbia', '수보티차 중심가 안뜰에 숨겨진 정통 커피와 디저트 명소', 'Authentic Subotica coffee and dessert spot tucked in a courtyard in the city center'),
  place('subotica-cafe-1', 'subotica', 'cafe', 'Hausbrandt Caffe', 4.5, 'Trg Cara Jovana Nenada 9, 24000 Subotica, Serbia', '아르누보 시청 앞 광장에 위치한 수보티차의 인기 카페, 카푸치노로 유명', 'Popular Subotica cafe facing the Art Nouveau city hall square, known for its cappuccino'),
]
