import { place } from './placeFactory'
import type { Place } from '../types'

export const placesCYExtra: Place[] = [
  // —— nicosia ——
  place('nicosia-fine_dining-1', 'nicosia', 'fine_dining', 'Fisa & Masa Tavern', 'Ledras 55, Nicosia', '전통 키프로스 타베르나.', 'Traditional Cypriot tavern.'),
  place('nicosia-fine_dining-2', 'nicosia', 'fine_dining', 'Paparouna Meze', 'Arrenagogeiou 34, Nicosia', '전통 메제.', 'Classic meze house.'),
  place('nicosia-fine_dining-3', 'nicosia', 'fine_dining', 'Topika Meze Bar', 'Christodoulou Sozou 2, Nicosia', '모던 메제 바.', 'Modern meze bar.'),
  place('nicosia-fine_dining-4', 'nicosia', 'fine_dining', 'Zanettos Cypriot Tavern', 'Trikoupi 65, Nicosia', '오랜 역사의 키프로스 타베르나.', 'Long-standing Cypriot tavern.'),
  place('nicosia-fine_dining-5', 'nicosia', 'fine_dining', 'Piatsa Gourounaki', 'Faneromenis 92, Nicosia', '캐주얼 그릴·메제.', 'Casual grill and meze.'),
  place('nicosia-bakery-1', 'nicosia', 'bakery', 'HONEST BREAD', 'Athalassas Ave 146B, Nicosia', '사워도우 베이커리.', 'Sourdough bakery.'),
  place('nicosia-bakery-2', 'nicosia', 'bakery', 'Seed of Happiness', 'Kritis 5, Nicosia', '베이커리.', 'Bakery.'),
  place('nicosia-bakery-3', 'nicosia', 'bakery', 'Constantinides Bakery Downtown', 'Stasandrou 1, Nicosia', '다운타운 베이커리.', 'Downtown bakery.'),
  place('nicosia-bakery-4', 'nicosia', 'bakery', 'ΜΑΡΩ Cakes & More', 'Stadiou 63, Nicosia', '케이크·페이스트리.', 'Cakes and pastries.'),
  place('nicosia-cafe-1', 'nicosia', 'cafe', 'Coffee Therapy (Old City)', 'Aristokyprou 37, Nicosia', '구시가 스페셜티 커피.', 'Specialty coffee in the Old City.'),
  place('nicosia-cafe-2', 'nicosia', 'cafe', 'Pieto', 'Ledras 207, Nicosia', '레드라 거리 카페.', 'Café on Ledra Street.'),
  place('nicosia-cafe-3', 'nicosia', 'cafe', 'Two Chimp. Coffee & Cake', 'Pindarou 18Δ, Nicosia', '커피·케이크 카페.', 'Coffee and cake café.'),

  // —— limassol ——
  place('limassol-fine_dining-1', 'limassol', 'fine_dining', 'Ousia Soulful Kitchen', '24 Irenes Street, Medieval Castle Square, Limassol 3042', '구시가 캐슬 광장의 레스토랑.', 'Restaurant by the Old Town\'s Castle Square.'),
  place('limassol-fine_dining-2', 'limassol', 'fine_dining', 'MEZE Taverna Restaurant', 'Agiou Andreou 209, Limassol', '그리스 요리 타베르나.', 'Greek cuisine taverna.'),
  place('limassol-fine_dining-3', 'limassol', 'fine_dining', "Terry's place", 'Παναγιώτη Συμεού 2, 3105 Limassol, Cyprus', '리마솔의 인기 레스토랑.', 'Popular restaurant in Limassol.'),
  place('limassol-bakery-1', 'limassol', 'bakery', 'Bakery Kafeneio Healthy Foodbar', 'Archiepiskopou Makariou III 241A, Limassol, Cyprus', '글루텐프리·비건 옵션을 갖춘 리마솔의 건강식 베이커리', 'Health-focused Limassol bakery with gluten-free and vegan options'),
  place('limassol-bakery-2', 'limassol', 'bakery', 'Nomad Bread & Coffee', 'Gladstonos 120, Limassol', '리마솔의 베이커리.', 'Bakery in Limassol.'),
  place('limassol-bakery-3', 'limassol', 'bakery', 'Marios Snacks Bakery', 'Agias Zonis 10, Limassol', '리마솔의 제과점.', 'Bakery in Limassol.'),
  place('limassol-cafe-1', 'limassol', 'cafe', 'Uluwatu', 'Anexartisias 10, 3036 Limassol, Cyprus', '훌륭한 스페셜티 커피와 아이스크림으로 유명한 리마솔의 카페', 'Limassol café famous for excellent specialty coffee and ice cream'),
  place('limassol-cafe-2', 'limassol', 'cafe', 'Dune Coffee', 'Ellados 80, Limassol', '스페셜티 커피 전문점.', 'Specialty coffee shop.'),
  place('limassol-cafe-3', 'limassol', 'cafe', 'Natives Limassol', 'Agiou Andreou 116, Limassol', '리마솔의 카페.', 'Café in Limassol.'),

  // —— paphos ——
  place('paphos-fine_dining-1', 'paphos', 'fine_dining', '7 St. George\'s Tavern', 'Anthipolochagou Georgiou Savva 37, Yeroskipou, Paphos 8201', '유기농 재료의 정통 키프로스 메제.', 'Authentic Cypriot meze from organic, local ingredients.'),
  place('paphos-fine_dining-2', 'paphos', 'fine_dining', 'Dias Zeus Restaurant', 'Tombs of the Kings Ave 47, Paphos', '그리스 요리 레스토랑.', 'Greek cuisine restaurant.'),
  place('paphos-fine_dining-3', 'paphos', 'fine_dining', "Uncle Tony's Taverna", 'Othellou 10, Paphos', '그리스 요리 타베르나.', 'Greek cuisine taverna.'),
  place('paphos-bakery-1', 'paphos', 'bakery', 'Sunfresh Bakery', 'Leoforos Tafon ton Vasileon 7, Paphos, Cyprus', '24시간 운영하는 파포스 최고의 베이커리 겸 카페', 'Paphos\'s top bakery café, open 24 hours'),
  place('paphos-bakery-3', 'paphos', 'bakery', 'Georges Alain Pâtisserie', 'Constantinou Kanari 40, Paphos', '프랑스식 제과점.', 'French-style patisserie.'),
  place('paphos-cafe-1', 'paphos', 'cafe', 'Nest Cafe Snack Bar', 'Poseidonos Avenue 23, Filios Court, 8042 Paphos, Cyprus', '파포스 최고의 라떼로 알려진 아늑한 숨은 카페', 'Cozy hidden-gem café known for the best latte in Paphos'),
  place('paphos-cafe-2', 'paphos', 'cafe', "Campo de'Fiori", 'Petraki Miltriadou 12-Shop 8, Paphos', '스페셜티 커피 전문점.', 'Specialty coffee shop.'),
  place('paphos-cafe-3', 'paphos', 'cafe', 'Grafico Cafe', 'Agoras, 8010 Paphos Municipality, Cyprus', '파포스의 카페.', 'Café in Paphos.'),

  // —— ayia-napa ——
  place('ayia-napa-fine_dining-1', 'ayia-napa', 'fine_dining', 'Old Village Tavern', '48 Nissi Avenue, Ayia Napa 5330', '전통 키프로스 타베르나.', 'Traditional Cypriot taverna.'),
  place('ayia-napa-fine_dining-2', 'ayia-napa', 'fine_dining', 'En Yevo Tavernaki', 'Dionysiou Solomou 16, Ayia Napa', '그리스 요리 타베르나.', 'Greek cuisine taverna.'),

  place('ayia-napa-bakery-1', 'ayia-napa', 'bakery', 'Zorbas Bakery', 'Nissi Avenue 17, 5330 Ayia Napa, Cyprus', '아이아 나파 최고의 베이커리로 꼽히는 인기 빵집', 'Ayia Napa\'s top-ranked bakery'),
  place('ayia-napa-bakery-2', 'ayia-napa', 'bakery', 'Sigma Bakeries Ayia Napa', 'Nissi Avenue 28, 5330 Ayia Napa, Cyprus', '24시간 운영하는 아이아 나파의 제과점.', '24-hour bakery in Ayia Napa.'),
  place('ayia-napa-bakery-3', 'ayia-napa', 'bakery', 'The Bakery Co.', 'Archiepiskopou Makariou III 14, Ayia Napa', '아이아 나파의 제과점.', 'Bakery in Ayia Napa.'),
  place('ayia-napa-cafe-1', 'ayia-napa', 'cafe', 'The Liquid Cafe N Bar', 'Kryou Nerou 8, 5330 Ayia Napa, Cyprus', '아침부터 저녁까지 다양한 메뉴를 즐길 수 있는 아이아 나파 중심가의 카페', 'Central Ayia Napa café offering everything from breakfast to evening drinks'),
  place('ayia-napa-cafe-2', 'ayia-napa', 'cafe', 'Φusis (Fusis) - Coffee shop in Ayia Napa', 'Kryou Nerou 33, Ayia Napa', '스페셜티 커피 전문점.', 'Specialty coffee shop.'),
  place('ayia-napa-cafe-3', 'ayia-napa', 'cafe', 'Zoumpoulias Coffee Roasters', 'Archiepieskopou Makariou III 24, Ayia Napa', '스페셜티 커피 로스터리.', 'Specialty coffee roastery.'),
]
