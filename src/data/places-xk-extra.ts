import { place } from './placeFactory'
import type { Place } from '../types'

export const placesXKExtra: Place[] = [
  // —— pristina ——
  place('pristina-fine_dining-1', 'pristina', 'fine_dining', 'Sospiro Restaurant', 'Rruga California 52, Marigona Residence, Prishtina, Kosovo', '프리슈티나의 이탈리아 파인다이닝 레스토랑.', 'Italian fine-dining restaurant in Prishtina.'),
  place('pristina-fine_dining-2', 'pristina', 'fine_dining', 'Liburnia', 'Meto Bajraktari 21, Prishtina, Kosovo', '그릴 요리와 전통 스튜를 내는 프리슈티나의 식당(1992년부터).', 'Prishtina restaurant serving grilled meats and traditional stews (since 1992).', { image: '/places/pristina-fine_dining-2.jpg' }),
  place('pristina-fine_dining-3', 'pristina', 'fine_dining', 'Home Restaurant & Lounge Bar', 'Rruga Migjeni, Prishtina 10000, Kosovo', '스테이크와 해산물을 내는 프리슈티나의 레스토랑.', 'Prishtina restaurant serving steaks and seafood.'),
  place('pristina-fine_dining-4', 'pristina', 'fine_dining', "Tiffany's", 'Enver Zymberi 55, 10000 Pristina, Kosovo', '고정 메뉴 없이 그날그날 시장에서 구한 신선한 재료로 요리하는 프리슈티나의 오래된 알바니아 전통 레스토랑', "Long-running Prishtina institution serving traditional Albanian dishes made from the day's fresh market ingredients, with no fixed menu"),
  place('pristina-fine_dining-5', 'pristina', 'fine_dining', "Lisa's Restaurant", 'Rruga Fehmi Agani 34/2, Prishtina, Kosovo', '스테이크가 있는 프리슈티나의 지중해 레스토랑.', 'Prishtina Mediterranean restaurant with steaks.'),
  place('pristina-bakery-1', 'pristina', 'bakery', 'Mulli Buke & Kafe', 'St. Enver Maloku, 10000 Prishtina, Kosovo', '흰 인테리어의 프리슈티나 빵집.', 'Prishtina bakery with a white interior.'),
  place('pristina-bakery-2', 'pristina', 'bakery', 'Destan Burektore', 'Bulevardi Bill Clinton 208, Prishtina 10000, Kosovo', '부렉을 굽는 프리슈티나의 빵집.', 'Prishtina bakery baking burek.'),
  place('pristina-bakery-3', 'pristina', 'bakery', 'Bake&Cake Coffee Shop', 'Bulevardi Nënë Tereza 59A, Prishtina 10000, Kosovo', '아늑한 분위기와 좋은 커피로 알려진 프리슈티나의 베이커리 카페', 'Prishtina bakery cafe known for its cozy atmosphere and good coffee'),
  place('pristina-cafe-2', 'pristina', 'cafe', 'Soma Book Station', 'Rruga Fazli Grajqevci 32, Prishtina, Kosovo', '서점과 카페, 바가 결합된 프리슈티나의 개성 있는 복합 공간', 'Distinctive Prishtina venue blending a bookstore, cafe, and bar'),
  place('pristina-cafe-3', 'pristina', 'cafe', 'Half & Half Café', 'Bulevardi Nënë Tereza, Prishtina 10000, Kosovo', '마더 테레사 대로의 카페. 마키아토가 있습니다.', 'Café on Nënë Tereza Boulevard serving macchiato.'),
  place('pristina-korean-1', 'pristina', 'korean', 'Sojubar', 'Prime Group Residence, Prishtina 10000, Kosovo', '한국식 프라이드치킨과 소주를 즐길 수 있는 프리슈티나의 한식당', 'Korean restaurant in Prishtina serving Korean fried chicken and soju'),

  // —— prizren ——
  place('prizren-fine_dining-1', 'prizren', 'fine_dining', 'Te Syla', 'Rruga Sejdi Begu, Prizren 20000, Kosovo', '샤데르반 광장 근처의 레스토랑. 비스트리차 강이 보이는 테라스가 있습니다.', 'Restaurant near Shadërvan Square with a terrace over the Bistrica River.'),
  place('prizren-fine_dining-2', 'prizren', 'fine_dining', 'Marashi', 'Rruga Vatrat Shqiptare 25, Prizren, Kosovo', '작은 정원 안의 현대 유럽 요리 레스토랑.', 'Modern European restaurant in a small garden.'),
  place('prizren-fine_dining-3', 'prizren', 'fine_dining', 'Hani i Vjetër', 'Teqeja Halveti, 20080 Prizren, Kosovo', '돌다리와 중앙 광장 사이에 위치한 프리즈렌의 전통 알바니아 레스토랑', 'Traditional Albanian restaurant in Prizren, between the Stone Bridge and the main square'),
  place('prizren-bakery-1', 'prizren', 'bakery', 'GIGO Bakery & Coffee', 'Kastriotët, Prizren 20000, Kosovo', '페이스트리와 커피가 있는 프리즈렌의 빵집 겸 카페.', 'Prizren bakery café with pastries and coffee.'),
  place('prizren-bakery-2', 'prizren', 'bakery', 'Missini Sweets', 'Rruga Mon Çollaku, Prizren 20000, Kosovo', '바클라바와 케이크를 파는 프리즈렌의 디저트 가게.', 'Prizren dessert shop with baklava and cakes.'),
  place('prizren-cafe-1', 'prizren', 'cafe', 'Prince Coffee House', 'Rruga Rrasat e Koshares, Shadërvan, 20000 Prizren, Kosovo', '비스트리차 강변의 카페(2009년부터). 트릴레체 케이크가 있습니다.', 'Café on the Bistrica River (since 2009) with trileçe cake.'),
  place('prizren-cafe-2', 'prizren', 'cafe', 'ARRA Cafe & Bar', 'Sheshi Shadërvanit 35, Prizren, Kosovo', '샤데르반 광장 인근에 위치한 프리즈렌의 카페 겸 바', 'Cafe and bar near Shadërvan Square in Prizren'),

  // —— peja ——
  place('peja-fine_dining-1', 'peja', 'fine_dining', 'Kulla e Zenel Beut', '51 William Walker Street, Pejë, Kosovo', '페야 중심가에 위치한 문화유산 저택을 개조한 레스토랑으로 두카기니 지역 전통 요리를 선보임', 'Restaurant in a historic tower house in central Peja serving traditional dishes of the Dukagjini region', { image: '/places/peja-fine_dining-1.jpg' }),
  place('peja-fine_dining-2', 'peja', 'fine_dining', "Flo's Restaurant", 'Sheshi Haxhi Zeka, 30000 Peja, Kosovo', '메테 바이락타리 광장 근처의 레스토랑. 장작 화덕 요리가 있습니다.', 'Restaurant near Mete Bajraktari Plaza with wood-fired dishes.'),

  place('peja-cafe-1', 'peja', 'cafe', 'Radio Caffe', 'Rruga Mbreti Pirro, Pec 30000, Kosovo', '루고바에서 흘러오는 강변의 카페 겸 라운지.', 'Café and lounge by the river flowing down from Rugova.'),
]
