import { place } from './placeFactory'
import type { Place } from '../types'

export const placesRSExtra: Place[] = [
  // —— belgrade ——
  place('belgrade-fine_dining-1', 'belgrade', 'fine_dining', 'Homa', 4.7, 'Belgrade', '미슐랭 모던 세르비아.', 'Michelin modern Serbian.', { reviewCount: 900 }),
  place('belgrade-fine_dining-2', 'belgrade', 'fine_dining', 'Langouste', 4.6, 'Belgrade', '해산물 파인 다이닝.', 'Seafood fine dining.', { reviewCount: 1100 }),
  place('belgrade-fine_dining-3', 'belgrade', 'fine_dining', 'Salon 1905', 4.5, 'Belgrade', '클래식 파인.', 'Classic fine dining.', { reviewCount: 1200 }),
  place('belgrade-fine_dining-4', 'belgrade', 'fine_dining', 'Skadarlija tavern classics', 4.4, 'Belgrade', '스카다르리야 선술집.', 'Skadarlija tavern classics.', { reviewCount: 4800 }),
  place('belgrade-fine_dining-5', 'belgrade', 'fine_dining', 'Lorenzo & Kakalamba', 4.5, 'Belgrade', '창의 캐주얼 파인.', 'Creative casual fine.', { reviewCount: 2100 }),
  place('belgrade-bakery-1', 'belgrade', 'bakery', 'Pekara local chains', 4.3, 'Belgrade', '로컬 빵집.', 'Local bakery.', { reviewCount: 2800 }),
  place('belgrade-bakery-3', 'belgrade', 'bakery', 'Burek & pastry shops', 4.5, 'Belgrade', '부렉·페이스트리.', 'Burek and pastries.', { reviewCount: 4200 }),
  place('belgrade-bakery-4', 'belgrade', 'bakery', 'Cake shops Centar', 4.4, 'Belgrade', '도심 케이크 숍.', 'Central cake shops.', { reviewCount: 1800 }),
  place('belgrade-cafe-1', 'belgrade', 'cafe', 'Specialty coffee Belgrade', 4.5, 'Belgrade', '스페셜티 커피.', 'Specialty coffee.', { reviewCount: 2100 }),
  place('belgrade-cafe-2', 'belgrade', 'cafe', 'Kafeterija', 4.4, 'Belgrade', '로스터리 카페.', 'Roastery café.', { reviewCount: 1600 }),
  place('belgrade-cafe-3', 'belgrade', 'cafe', 'Dorćol café streets', 4.4, 'Belgrade', '도르촐 카페 거리.', 'Dorćol café streets.', { reviewCount: 2400 }),

  // —— novi-sad ——
  place('novi-sad-fine_dining-1', 'novi-sad', 'fine_dining', 'Plata', 4.6, 'Đorđa Jovanovića 2, 21000 Novi Sad, Serbia', '고풍스러운 저택에 자리한 파인다이닝 레스토랑 겸 와인바로 전통과 혁신 요리를 함께 선보임', 'Fine-dining restaurant and wine bar in an elegant villa serving both traditional and innovative dishes'),
  place('novi-sad-bakery-1', 'novi-sad', 'bakery', 'Bread & Kifle', 4.4, 'Narodnih heroja 5, Novi Sad, Serbia', '언제나 신선한 빵과 페이스트리, 쿠키로 유명한 노비사드의 베이커리 체인', 'Novi Sad bakery chain known for always-fresh bread, pastries and cookies'),
  place('novi-sad-cafe-1', 'novi-sad', 'cafe', 'Coffeedream', 4.6, 'Petra Drapšina 56, Novi Sad, Serbia', '친절한 서비스와 아늑하고 모던한 분위기로 사랑받는 노비사드의 인기 카페', 'Popular Novi Sad cafe loved for its excellent service and cozy, modern atmosphere'),

  // —— nis ——
  place('nis-fine_dining-1', 'nis', 'fine_dining', 'Stambolijski', 4.5, 'Nikole Pašića 36, 18000 Niš, Serbia', '19세기 오스만 시대 저택을 개조한 레스토랑으로 발칸 전통 요리와 훌륭한 와인 리스트를 제공', 'Restaurant in a preserved 19th-century Ottoman-era house serving traditional Balkan cuisine with an excellent wine list'),
  place('nis-bakery-1', 'nis', 'bakery', 'Bakery Anton Plus', 4.5, 'Trg Pavla Stojkovića 17, 18000 Niš, Serbia', '애플롤과 초콜릿 크루아상으로 추천받는 니시의 인기 베이커리', 'Popular Niš bakery recommended for its apple roll and chocolate croissant'),
  place('nis-cafe-1', 'nis', 'cafe', 'ART caffe 018', 4.5, 'Dejana Dinića 2A, 18000 Niš, Serbia', '세련된 인테리어와 넓은 주차 공간을 갖춘 니시의 인기 카페', 'Popular Niš cafe with a stylish interior and ample parking'),

  // —— subotica ——
  place('subotica-fine_dining-1', 'subotica', 'fine_dining', 'Mali Trg', 4.5, 'Branislava Nušića 4a, 24000 Subotica, Serbia', '세련된 인테리어와 정교한 플레이팅으로 알려진 수보티차의 대표 파인다이닝 레스토랑', 'Subotica\'s leading fine-dining restaurant known for elegant interiors and refined plating'),

  place('subotica-bakery-1', 'subotica', 'bakery', 'Kafe Prića', 4.5, 'Ulica Korzo 9, 24000 Subotica, Serbia', '수보티차 중심가 안뜰에 숨겨진 정통 커피와 디저트 명소', 'Authentic Subotica coffee and dessert spot tucked in a courtyard in the city center'),
  place('subotica-cafe-1', 'subotica', 'cafe', 'Hausbrandt Caffe', 4.5, 'Trg Cara Jovana Nenada 9, 24000 Subotica, Serbia', '아르누보 시청 앞 광장에 위치한 수보티차의 인기 카페, 카푸치노로 유명', 'Popular Subotica cafe facing the Art Nouveau city hall square, known for its cappuccino'),
]
