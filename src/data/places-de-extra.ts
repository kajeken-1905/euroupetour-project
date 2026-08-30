import { place } from './placeFactory'
import type { Place } from '../types'

export const placesDEExtra: Place[] = [
  // —— berlin ——
  place('berlin-fine_dining-1', 'berlin', 'fine_dining', 'Restaurant Tim Raue', 4.7, 'Berlin', '아시안 인플루언스 파인.', 'Asian-influenced fine dining.', { reviewCount: 2400 }),
  place('berlin-fine_dining-2', 'berlin', 'fine_dining', 'Cordo', 4.6, 'Berlin', '모던 저먼 코스.', 'Modern German tasting.', { reviewCount: 1100 }),
  place('berlin-fine_dining-3', 'berlin', 'fine_dining', 'Nobelhart & Schmutzig', 4.6, 'Berlin', '로컬 재료 코스.', 'Local-ingredient tasting.', { reviewCount: 1600 }),
  place('berlin-fine_dining-4', 'berlin', 'fine_dining', 'Zur letzten Instanz', 4.3, 'Berlin', '역사적 독일 식당.', 'Historic German restaurant.', { reviewCount: 4800 }),
  place('berlin-fine_dining-5', 'berlin', 'fine_dining', 'Mustafa\'s Gemüse Kebap peers / local classics', 4.4, 'Berlin', '베를린 스트리트·캐주얼.', 'Berlin street and casual classics.', { reviewCount: 12000 }),
  place('berlin-bakery-1', 'berlin', 'bakery', 'Zeit für Brot', 4.5, 'Berlin', '시나몬롤·빵.', 'Cinnamon rolls and bread.', { reviewCount: 3600 }),
  place('berlin-bakery-2', 'berlin', 'bakery', 'Soluna Brot und Öl', 4.5, 'Berlin', '사워도우.', 'Sourdough.', { reviewCount: 1800 }),
  place('berlin-bakery-3', 'berlin', 'bakery', 'Café Einstein bakery', 4.3, 'Berlin', '카페 베이커리.', 'Café bakery.', { reviewCount: 2100 }),
  place('berlin-bakery-4', 'berlin', 'bakery', 'Brammibal\'s / local bakers', 4.3, 'Berlin', '로컬 베이커리.', 'Local bakery.', { reviewCount: 1400 }),
  place('berlin-cafe-1', 'berlin', 'cafe', 'The Barn', 4.6, 'Berlin', '스페셜티 로스터리.', 'Specialty roastery.', { reviewCount: 3200 }),
  place('berlin-cafe-2', 'berlin', 'cafe', 'Bonanza Coffee', 4.5, 'Berlin', '스페셜티 커피.', 'Specialty coffee.', { reviewCount: 2800 }),
  place('berlin-cafe-3', 'berlin', 'cafe', 'Café Einstein Stammhaus', 4.4, 'Berlin', '클래식 카페하우스.', 'Classic coffee house.', { reviewCount: 5400 }),
  place('berlin-cafe-4', 'berlin', 'cafe', 'Five Elephant', 4.5, 'Berlin', '커피·치즈케이크.', 'Coffee and cheesecake.', { reviewCount: 2600 }),
  place('berlin-korean-1', 'berlin', 'korean', 'Feel Seoul Good', 4.5, 'Husemannstraße 2, 10405 Berlin', '프렌츠라우어베르크의 한식 맛집.', 'Korean favourite in Prenzlauer Berg.'),

  // —— munich ——
  place('munich-fine_dining-1', 'munich', 'fine_dining', 'Atelier', 4.6, 'Promenadeplatz 2-6, 80333 München', '미쉐린 2스타 레스토랑.', 'Two-Michelin-star restaurant.'),

  // —— hamburg ——
  place('hamburg-fine_dining-1', 'hamburg', 'fine_dining', 'The Table Kevin Fehling', 4.7, 'Shanghaiallee 15, 20457 Hamburg', '미쉐린 3스타 레스토랑.', 'Three-Michelin-star restaurant.'),

  // —— cologne ——
  place('cologne-fine_dining-1', 'cologne', 'fine_dining', 'Ox & Klee', 4.6, 'Im Zollhafen 18, 50678 Köln', '미쉐린 2스타 레스토랑.', 'Two-Michelin-star restaurant.'),

  // —— frankfurt ——
  place('frankfurt-fine_dining-1', 'frankfurt', 'fine_dining', 'Apfelwein Wagner', 4.5, 'Schweizerstraße 71, 60594 Frankfurt', '작센하우젠의 전통 애플와인 선술집.', 'Traditional Apfelwein tavern in Sachsenhausen.'),
  place('frankfurt-korean-1', 'frankfurt', 'korean', 'Sonamu', 4.5, 'Berger Straße 184, 60385 Frankfurt', '보른하임의 모던 한식당.', 'Modern Korean restaurant in Bornheim.'),

  // —— dresden ——
  place('dresden-fine_dining-1', 'dresden', 'fine_dining', 'Sophienkeller im Taschenbergpalais', 4.5, 'Taschenberg 3, 01067 Dresden', '중세 테마의 작센 요리.', 'Medieval-themed Saxon dining.'),

  // —— heidelberg ——
  place('heidelberg-fine_dining-1', 'heidelberg', 'fine_dining', 'Scharff\'s Schlossweinstube', 4.5, 'Hauptstraße 217, 69117 Heidelberg', '하이델베르크 성 안의 레스토랑.', 'Restaurant inside Heidelberg Castle.'),

  // —— nuremberg ——
  place('nuremberg-fine_dining-1', 'nuremberg', 'fine_dining', 'Schwarzer Adler', 4.5, 'Zirkelschmiedsgasse 26, 90402 Nürnberg', '모던 프랑코니아 요리.', 'Modern Franconian cuisine.'),

  // —— stuttgart ——
  place('stuttgart-fine_dining-1', 'stuttgart', 'fine_dining', 'Speisemeisterei', 4.6, 'Hohenheimer Straße 28-30, 70599 Stuttgart', '호엔하임 궁전의 미쉐린 레스토랑.', 'Michelin restaurant at Hohenheim Palace.'),

  // —— leipzig ——
  place('leipzig-fine_dining-1', 'leipzig', 'fine_dining', 'Stadtpfeiffer', 4.6, 'Augustusplatz 8, 04109 Leipzig', '노이에스 게반트하우스의 미식 레스토랑.', 'Fine dining in the Neues Gewandhaus.'),

  // —— rothenburg ——
  place('rothenburg-fine_dining-1', 'rothenburg', 'fine_dining', 'Hotel & Restaurant Reichsküchenmeister', 4.4, 'Kirchplatz 8, 91541 Rothenburg ob der Tauber', '구시가의 전통 프랑코니아 요리.', 'Traditional Franconian cuisine in the Old Town.'),

  // —— potsdam ——
  place('potsdam-fine_dining-1', 'potsdam', 'fine_dining', 'Juliette', 4.6, 'Jägerstraße 39, 14467 Potsdam', '클래식 프렌치 요리 레스토랑.', 'Classic French cuisine restaurant.'),

]
