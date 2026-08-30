import { place } from './placeFactory'
import type { Place } from '../types'

export const placesRSExtra: Place[] = [
  // —— belgrade ——
  place('belgrade-fine_dining-1', 'belgrade', 'fine_dining', 'Homa', 4.7, 'Belgrade', '미슐랭 모던 세르비아.', 'Michelin modern Serbian.', { reviewCount: 900 }),
  place('belgrade-fine_dining-2', 'belgrade', 'fine_dining', 'Langouste', 4.6, 'Belgrade', '해산물 파인 다이닝.', 'Seafood fine dining.', { reviewCount: 1100 }),
  place('belgrade-fine_dining-3', 'belgrade', 'fine_dining', 'Salon 1905 / classic peers', 4.5, 'Belgrade', '클래식 파인.', 'Classic fine dining.', { reviewCount: 1200 }),
  place('belgrade-fine_dining-4', 'belgrade', 'fine_dining', 'Skadarlija tavern classics', 4.4, 'Belgrade', '스카다르리야 선술집.', 'Skadarlija tavern classics.', { reviewCount: 4800 }),
  place('belgrade-fine_dining-5', 'belgrade', 'fine_dining', 'Lorenzo & Kakalamba peers', 4.5, 'Belgrade', '창의 캐주얼 파인.', 'Creative casual fine.', { reviewCount: 2100 }),
  place('belgrade-bakery-1', 'belgrade', 'bakery', 'Pekara local chains', 4.3, 'Belgrade', '로컬 빵집.', 'Local bakery.', { reviewCount: 2800 }),
  place('belgrade-bakery-2', 'belgrade', 'bakery', 'Sourdough Belgrade peers', 4.5, 'Belgrade', '사워도우.', 'Sourdough.', { reviewCount: 1100 }),
  place('belgrade-bakery-3', 'belgrade', 'bakery', 'Burek & pastry shops', 4.5, 'Belgrade', '부렉·페이스트리.', 'Burek and pastries.', { reviewCount: 4200 }),
  place('belgrade-bakery-4', 'belgrade', 'bakery', 'Cake shops Centar', 4.4, 'Belgrade', '도심 케이크 숍.', 'Central cake shops.', { reviewCount: 1800 }),
  place('belgrade-cafe-1', 'belgrade', 'cafe', 'Specialty coffee Belgrade', 4.5, 'Belgrade', '스페셜티 커피.', 'Specialty coffee.', { reviewCount: 2100 }),
  place('belgrade-cafe-2', 'belgrade', 'cafe', 'Kafeterija / peers', 4.4, 'Belgrade', '로스터리 카페.', 'Roastery café.', { reviewCount: 1600 }),
  place('belgrade-cafe-3', 'belgrade', 'cafe', 'Dorćol café streets', 4.4, 'Belgrade', '도르촐 카페 거리.', 'Dorćol café streets.', { reviewCount: 2400 }),
  place('belgrade-cafe-4', 'belgrade', 'cafe', 'Brunch Belgrade peers', 4.4, 'Belgrade', '브런치 카페.', 'Brunch café.', { reviewCount: 1800 }),

  // —— novi-sad ——
  place('novi-sad-fine_dining-1', 'novi-sad', 'fine_dining', 'Plata', 4.6, 'Đorđa Jovanovića 2, 21000 Novi Sad, Serbia', '고풍스러운 저택에 자리한 파인다이닝 레스토랑 겸 와인바로 전통과 혁신 요리를 함께 선보임', 'Fine-dining restaurant and wine bar in an elegant villa serving both traditional and innovative dishes'),

  // —— nis ——
  place('nis-fine_dining-1', 'nis', 'fine_dining', 'Stambolijski', 4.5, 'Nikole Pašića 36, 18000 Niš, Serbia', '19세기 오스만 시대 저택을 개조한 레스토랑으로 발칸 전통 요리와 훌륭한 와인 리스트를 제공', 'Restaurant in a preserved 19th-century Ottoman-era house serving traditional Balkan cuisine with an excellent wine list'),

  // —— subotica ——
  place('subotica-fine_dining-1', 'subotica', 'fine_dining', 'Mali Trg', 4.5, 'Branislava Nušića 4a, 24000 Subotica, Serbia', '세련된 인테리어와 정교한 플레이팅으로 알려진 수보티차의 대표 파인다이닝 레스토랑', 'Subotica\'s leading fine-dining restaurant known for elegant interiors and refined plating'),

]
