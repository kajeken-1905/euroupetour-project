import { place } from './placeFactory'
import type { Place } from '../types'

export const placesXKExtra: Place[] = [
  // —— pristina ——
  place('pristina-fine_dining-1', 'pristina', 'fine_dining', 'Sospiro Restaurant', 4.6, 'Rruga California 52, Marigona Residence, Prishtina, Kosovo', '코소보 최초의 이탈리안 파인다이닝 레스토랑', 'Kosovo\'s first exclusive Italian fine-dining restaurant'),
  place('pristina-fine_dining-2', 'pristina', 'fine_dining', 'Liburnia', 4.4, 'Meto Bajraktari 21, Prishtina, Kosovo', '1992년부터 이어온 프리슈티나의 대표 레스토랑, 그릴 요리와 전통 스튜로 유명', "Prishtina institution open since 1992, known for grilled meats and traditional stews"),
  place('pristina-fine_dining-3', 'pristina', 'fine_dining', 'Home Restaurant & Lounge Bar', 4.5, 'Rruga Migjeni, Prishtina 10000, Kosovo', '스테이크와 해산물 등 다양한 월드 요리를 선보이는 프리슈티나의 인기 레스토랑', 'Popular Prishtina restaurant serving a range of world cuisine including steaks and seafood'),
  place('pristina-fine_dining-4', 'pristina', 'fine_dining', "Tiffany's", 4.2, 'Rruga Fehmi Agani, Prishtina, Kosovo', '고정 메뉴 없이 그날그날 시장에서 구한 신선한 재료로 요리하는 프리슈티나의 오래된 알바니아 전통 레스토랑', "Long-running Prishtina institution serving traditional Albanian dishes made from the day's fresh market ingredients, with no fixed menu"),
  place('pristina-fine_dining-5', 'pristina', 'fine_dining', "Lisa's Restaurant", 4.7, 'Rruga Fehmi Agani 34/2, Prishtina, Kosovo', '스테이크로 유명한 프리슈티나의 트렌디한 지중해 레스토랑', "Trendy Prishtina Mediterranean restaurant known for its steaks"),
  place('pristina-bakery-1', 'pristina', 'bakery', 'Mulli Buke & Kafe', 4.5, 'St. Enver Maloku, 10000 Prishtina, Kosovo', '깔끔한 화이트 인테리어와 전통 베이커리 감성을 결합한 프리슈티나의 인기 베이커리', 'Popular Prishtina bakery combining a clean white interior with a traditional bakery feel'),
  place('pristina-bakery-2', 'pristina', 'bakery', 'Destan Burektore', 4.6, 'Bulevardi Bill Clinton 208, Prishtina 10000, Kosovo', '바삭한 부렉으로 유명한 프리슈티나의 인기 베이커리', 'Popular Prishtina bakery known for its crispy burek'),
  place('pristina-bakery-3', 'pristina', 'bakery', 'Bake&Cake Coffee Shop', 4.1, 'Bulevardi Nënë Tereza 59A, Prishtina 10000, Kosovo', '아늑한 분위기와 좋은 커피로 알려진 프리슈티나의 베이커리 카페', 'Prishtina bakery cafe known for its cozy atmosphere and good coffee'),
  place('pristina-cafe-1', 'pristina', 'cafe', 'Prince Coffee Shop', 4.5, 'Sheshi Zahir Pajaziti, Prishtina, Kosovo', '전통 방식 터키식 커피로 유명한 프리슈티나 중심가의 카페', 'Central Prishtina cafe known for its traditional Turkish coffee served in copper pots'),
  place('pristina-cafe-2', 'pristina', 'cafe', 'Soma Book Station', 4.4, 'Rruga Fazli Grajqevci 32, Prishtina, Kosovo', '서점과 카페, 바가 결합된 프리슈티나의 개성 있는 복합 공간', 'Distinctive Prishtina venue blending a bookstore, cafe, and bar'),
  place('pristina-cafe-3', 'pristina', 'cafe', 'Half & Half Café', 4.3, 'Bulevardi Nënë Tereza, Prishtina 10000, Kosovo', '네네 테레자 대로에 위치한 마키아토로 유명한 프리슈티나의 인기 카페', "Popular Prishtina cafe on Nënë Tereza Boulevard known for its macchiatos"),
  place('pristina-korean-1', 'pristina', 'korean', 'Sojubar', 5.0, 'Prime Group Residence, Prishtina 10000, Kosovo', '한국식 프라이드치킨과 소주를 즐길 수 있는 프리슈티나의 한식당', 'Korean restaurant in Prishtina serving Korean fried chicken and soju'),

  // —— prizren ——
  place('prizren-fine_dining-1', 'prizren', 'fine_dining', 'Te Syla', 4.5, 'Rruga Sejdi Begu, Prizren 20000, Kosovo', '샤데르반 광장 인근 비스트리차 강이 내려다보이는 테라스로 유명한 프리즈렌의 대표 레스토랑', 'Prizren\'s best-known restaurant, near Shadërvan Square with a terrace overlooking the Bistrica River'),
  place('prizren-fine_dining-2', 'prizren', 'fine_dining', 'Marashi', 4.6, 'Rruga Vatrat Shqiptare 25, Prizren, Kosovo', '작은 정원 안에 자리한 프리즈렌 최고 평가의 모던 유럽 레스토랑', "Prizren's top-rated modern European restaurant, tucked into a quiet garden"),
  place('prizren-fine_dining-3', 'prizren', 'fine_dining', 'Hani i Vjetër', 4.2, 'Rruga Farkëtarët, between the Stone Bridge and the main square, Prizren, Kosovo', '돌다리와 중앙 광장 사이에 위치한 프리즈렌의 전통 알바니아 레스토랑', 'Traditional Albanian restaurant in Prizren, between the Stone Bridge and the main square'),
  place('prizren-bakery-1', 'prizren', 'bakery', 'GIGO Bakery & Coffee', 4.5, 'Kastriotët, Prizren 20000, Kosovo', '갓 구운 페이스트리와 좋은 커피를 함께 즐길 수 있는 프리즈렌의 인기 베이커리 카페', 'Welcoming Prizren bakery cafe offering freshly baked pastries alongside quality coffee'),
  place('prizren-bakery-2', 'prizren', 'bakery', 'Missini Sweets', 4.8, 'Rruga Mon Çollaku, Prizren 20000, Kosovo', '바클라바와 케이크로 유명한 프리즈렌의 인기 디저트 전문점', 'Popular Prizren dessert shop known for its baklava and cakes'),
  place('prizren-cafe-1', 'prizren', 'cafe', 'Prince Coffee House', 4.5, 'Along the Bistrica River near the Stone Bridge, Prizren, Kosovo', '2009년부터 이어온 비스트리차 강변의 아늑한 프리즈렌 카페, 트릴레체 케이크로 유명', 'Cozy Prizren cafe on the Bistrica River since 2009, known for its trileqe cake'),
  place('prizren-cafe-2', 'prizren', 'cafe', 'ARRA Cafe & Bar', 5.0, 'Sheshi Shadërvanit 35, Prizren, Kosovo', '샤데르반 광장 인근에 위치한 프리즈렌의 카페 겸 바', 'Cafe and bar near Shadërvan Square in Prizren'),

  // —— peja ——
  place('peja-fine_dining-1', 'peja', 'fine_dining', 'Kulla e Zenel Beut', 4.5, '51 William Walker Street, Pejë, Kosovo', '페야 중심가에 위치한 문화유산 저택을 개조한 레스토랑으로 두카기니 지역 전통 요리를 선보임', 'Restaurant in a historic tower house in central Peja serving traditional dishes of the Dukagjini region'),
  place('peja-fine_dining-2', 'peja', 'fine_dining', "Flo's Restaurant", 4.6, 'Near Mete Bajraktari Plaza, city center, Pejë, Kosovo', '메테 바이락타리 광장 인근 페야 중심가의 인기 레스토랑, 우드파이어 오븐 요리로 유명', "Popular restaurant in central Peja near Mete Bajraktari Plaza, known for its wood-fired oven dishes"),

  place('peja-bakery-1', 'peja', 'bakery', 'Pekara Sofra', 4.4, 'Çarshia e Gjatë (Old Bazaar), Pejë, Kosovo', '페야 구시장 인근에 위치한 향토 베이커리, 전통 피타로 유명', 'Local Peja bakery near the Old Bazaar, known for its traditional pita pastries'),
  place('peja-cafe-1', 'peja', 'cafe', 'Radio Caffe', 4.5, 'Rruga Mbreti Pirro, Pec 30000, Kosovo', '루고바 강변에 위치한 페야의 인기 카페 겸 라운지', 'Popular Peja cafe and lounge situated along the river that flows from Rugova'),
]
