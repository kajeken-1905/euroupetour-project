import { place } from './placeFactory'
import type { Place } from '../types'

export const placesXKExtra: Place[] = [
  // —— pristina ——
  place('pristina-fine_dining-1', 'pristina', 'fine_dining', 'Sospiro Restaurant', 'Rruga California 52, Marigona Residence (Four Points by Sheraton), Prishtina, Kosovo', '포포인츠 바이 쉐라톤 호텔의 이탈리안 레스토랑.', 'Italian restaurant in the Four Points by Sheraton hotel.'),
  place('pristina-fine_dining-2', 'pristina', 'fine_dining', 'Liburnia', 'Meto Bajraktari 10, Prishtina 10000, Kosovo', '1992년 문을 연 오스만 가옥의 전통 요리 레스토랑. 안뜰 정원이 있습니다.', 'Traditional restaurant in an Ottoman house, open since 1992, with an inner garden.', { image: '/places/pristina-fine_dining-2.jpg' }),
  place('pristina-fine_dining-3', 'pristina', 'fine_dining', 'Home Restaurant & Lounge Bar', 'Rruga Migjeni, Prishtina 10000, Kosovo', '미제니 거리의 레스토랑 겸 바. 정원 좌석이 있습니다.', 'Restaurant and bar on Migjeni street, with garden seating.'),
  place('pristina-fine_dining-4', 'pristina', 'fine_dining', "Tiffany's", 'Enver Zymberi 55, 10000 Pristina, Kosovo', '프리슈티나의 오래된 알바니아 요리 레스토랑. 엘바산 타바를 냅니다.', 'Long-standing Albanian restaurant in Prishtina, serving Elbasan tava.'),
  place('pristina-fine_dining-5', 'pristina', 'fine_dining', "Lisa's Restaurant", 'Rruga Fehmi Agani 34/2, Prishtina, Kosovo', '페흐미 아가니 거리의 레스토랑. 고기구이와 스튜를 냅니다.', 'Restaurant on Fehmi Agani street serving grilled meats and stews.'),
  place('pristina-cafe-2', 'pristina', 'cafe', 'Soma Book Station', 'Rruga Fazli Grajqevci 32, Prishtina, Kosovo', '옛 적십자 건물의 서점 겸 카페. 정원이 있고 저녁엔 공연이 열립니다.', 'Bookshop café in a former Red Cross building, with a garden and evening events.'),
  place('pristina-cafe-3', 'pristina', 'cafe', 'Half & Half Café', 'Bulevardi Nënë Tereza, Prishtina 10000, Kosovo', '넨에 테레자 대로의 카페 겸 바.', 'Café-bar on Mother Teresa Boulevard.'),

  // —— prizren ——
  place('prizren-fine_dining-1', 'prizren', 'fine_dining', 'Te Syla', 'Rruga Sejdi Begu, Prizren 20000, Kosovo', '프리즈렌의 알바니아 요리 식당.', 'Albanian restaurant in Prizren.'),
  place('prizren-fine_dining-2', 'prizren', 'fine_dining', 'Marashi', 'Rruga Vatrat Shqiptare 25, Prizren, Kosovo', '프리즈렌의 유럽·알바니아 요리 레스토랑.', 'European and Albanian restaurant in Prizren.'),
  place('prizren-fine_dining-3', 'prizren', 'fine_dining', 'Hani i Vjetër', 'Teqeja Halveti, 20080 Prizren, Kosovo', '옛 건물을 꾸민 전통 요리 식당. 고기구이를 냅니다.', 'Traditional restaurant in a historic, colourful building, serving grilled meats.'),
  place('prizren-bakery-2', 'prizren', 'bakery', 'Missini Sweets', 'Rruga Mon Çollaku, Prizren 20000, Kosovo', '바클라바와 푸딩 등 디저트를 파는 가게. 간단한 식사도 됩니다.', 'Dessert shop selling baklava and puddings, with light meals too.'),
  place('prizren-cafe-1', 'prizren', 'cafe', 'Prince Coffee House', 'Rruga Rrasat e Koshares, Shadërvan, 20000 Prizren, Kosovo', '시난 파샤 모스크 앞 강가의 큰 카페. 원두를 직접 볶고 트릴레체를 냅니다.', 'Large riverside café in front of the Sinan Pasha Mosque, roasting its own beans and serving trileçe.'),

  // —— peja ——
  place('peja-fine_dining-1', 'peja', 'fine_dining', 'Kulla e Zenel Beut', '51 William Walker Street, Pejë, Kosovo', '19세기 석탑 건물(쿨라)을 고친 호텔 레스토랑. 루고바 치즈와 타바 요리를 냅니다.', 'Hotel restaurant in a converted 19th-century stone tower house, serving Rugova cheese and tava dishes.', { image: '/places/peja-fine_dining-1.jpg' }),
  place('peja-fine_dining-2', 'peja', 'fine_dining', "Flo's Restaurant", 'Sheshi Haxhi Zeka, 30000 Peja, Kosovo', '하지 제카 광장의 레스토랑. 지역 요리와 서양 요리를 냅니다.', 'Restaurant on Haxhi Zeka square serving local and international dishes.'),

  place('peja-cafe-1', 'peja', 'cafe', 'Radio Caffe', 'Rruga Mbreti Pirro, Pec 30000, Kosovo', '페야 시내 음브레티 피로 거리의 카페 겸 바.', 'Café-bar on Mbreti Pirro street in central Peja.'),
]
