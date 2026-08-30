import { place } from './placeFactory'
import type { Place } from '../types'

export const placesDEExtra: Place[] = [
  // —— berlin ——
  place('berlin-fine_dining-1', 'berlin', 'fine_dining', 'Restaurant Tim Raue', 4.7, 'Berlin', '아시안 인플루언스 파인.', 'Asian-influenced fine dining.', { reviewCount: 2400 }),
  place('berlin-fine_dining-2', 'berlin', 'fine_dining', 'Cordo', 4.6, 'Berlin', '모던 저먼 코스.', 'Modern German tasting.', { reviewCount: 1100 }),
  place('berlin-fine_dining-3', 'berlin', 'fine_dining', 'Nobelhart & Schmutzig', 4.6, 'Berlin', '로컬 재료 코스.', 'Local-ingredient tasting.', { reviewCount: 1600 }),
  place('berlin-fine_dining-4', 'berlin', 'fine_dining', 'Zur letzten Instanz', 4.3, 'Berlin', '역사적 독일 식당.', 'Historic German restaurant.', { reviewCount: 4800 }),
  place('berlin-fine_dining-5', 'berlin', 'fine_dining', 'Mustafa\'s Gemüse Kebap', 4.4, 'Berlin', '베를린 스트리트·캐주얼.', 'Berlin street and casual classics.', { reviewCount: 12000 }),
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
  place('munich-bakery-1', 'munich', 'bakery', 'Rischart am Markt', 4.5, 'Viktualienmarkt 2, 80331 München, Germany', '빅투알리엔 시장에 위치한 뮌헨의 대표 베이커리, 루프탑 테라스가 특징', 'Munich\'s iconic bakery chain at Viktualienmarkt, with a rooftop terrace'),
  place('munich-cafe-1', 'munich', 'cafe', 'Café Frischhut', 4.5, 'Prälat-Zistl-Straße 8, 80331 München, Germany', '구시가지의 유서 깊은 뮌헨 카페, 슈말츠누들로 유명', 'Historic Munich café in the old town, known for its Schmalznudel pastry'),

  // —— hamburg ——
  place('hamburg-fine_dining-1', 'hamburg', 'fine_dining', 'The Table Kevin Fehling', 4.7, 'Shanghaiallee 15, 20457 Hamburg', '미쉐린 3스타 레스토랑.', 'Three-Michelin-star restaurant.'),
  place('hamburg-bakery-1', 'hamburg', 'bakery', 'Die Kleine Konditorei', 4.5, 'Bahrenfelder Str. 231, 22765 Hamburg, Germany', '오텐젠 지역의 사랑받는 함부르크 베이커리', 'Beloved Hamburg bakery in the Ottensen district'),
  place('hamburg-cafe-1', 'hamburg', 'cafe', 'Konditorei Lindtner', 4.5, 'Hamburg, Germany', '전통 독일 카페하우스 문화를 경험할 수 있는 함부르크 카페', 'Hamburg café offering a taste of traditional German coffee-house culture'),

  // —— cologne ——
  place('cologne-fine_dining-1', 'cologne', 'fine_dining', 'Ox & Klee', 4.6, 'Im Zollhafen 18, 50678 Köln', '미쉐린 2스타 레스토랑.', 'Two-Michelin-star restaurant.'),
  place('cologne-bakery-1', 'cologne', 'bakery', 'Bäckerei Zimmermann', 4.5, 'Antwerpener Str. 39, 50672 Köln, Germany', '1875년부터 이어온 쾰른의 사랑받는 베이커리, 호밀빵으로 유명', 'Beloved Cologne bakery since 1875, famous for its dark rye bread'),
  place('cologne-cafe-1', 'cologne', 'cafe', 'Goodchild Café', 4.6, 'Sudermannstraße, 50823 Köln, Germany', '손으로 하나하나 만드는 크루아상으로 유명한 쾰른의 프렌치 카페', 'French café in Cologne known for croissants rolled by hand'),

  // —— frankfurt ——
  place('frankfurt-fine_dining-1', 'frankfurt', 'fine_dining', 'Apfelwein Wagner', 4.5, 'Schweizerstraße 71, 60594 Frankfurt', '작센하우젠의 전통 애플와인 선술집.', 'Traditional Apfelwein tavern in Sachsenhausen.'),
  place('frankfurt-korean-1', 'frankfurt', 'korean', 'Sonamu', 4.5, 'Berger Straße 184, 60385 Frankfurt', '보른하임의 모던 한식당.', 'Modern Korean restaurant in Bornheim.'),
  place('frankfurt-bakery-1', 'frankfurt', 'bakery', 'Bäckerei und Konditorei Huck', 4.4, 'Markt 5, 60311 Frankfurt am Main, Germany', '프랑크푸르트 시내에서 도보 거리에 위치한 다양한 빵과 페이스트리 전문점', 'Bakery and pastry shop within walking distance of central Frankfurt'),
  place('frankfurt-cafe-1', 'frankfurt', 'cafe', 'Kaffeehaus Goldene Waage', 4.5, 'Römerberg, 60311 Frankfurt am Main, Germany', '성 바르톨로메우스 대성당 맞은편의 프랑크푸르트 카페', 'Frankfurt café across from the Cathedral of St. Bartholomew'),

  // —— dresden ——
  place('dresden-fine_dining-1', 'dresden', 'fine_dining', 'Sophienkeller im Taschenbergpalais', 4.5, 'Taschenberg 3, 01067 Dresden', '중세 테마의 작센 요리.', 'Medieval-themed Saxon dining.'),
  place('dresden-bakery-1', 'dresden', 'bakery', 'Bäckerei Emil Reimann', 4.3, 'Altmarkt 25, 01067 Dresden, Germany', '알트마르크트 갤러리 안에 위치한 드레스덴의 베이커리 아이스카페', 'Bakery ice-café inside the Altmarkt Galerie in Dresden'),
  place('dresden-cafe-1', 'dresden', 'cafe', 'Café Sperling', 4.5, 'Äußere Neustadt, 01097 Dresden, Germany', '노이슈타트 지역의 트렌디한 드레스덴 카페, 홈메이드 케이크로 유명', 'Trendy café in Dresden\'s Neustadt district known for homemade cakes'),

  // —— heidelberg ——
  place('heidelberg-fine_dining-1', 'heidelberg', 'fine_dining', 'Scharff\'s Schlossweinstube', 4.5, 'Hauptstraße 217, 69117 Heidelberg', '하이델베르크 성 안의 레스토랑.', 'Restaurant inside Heidelberg Castle.'),
  place('heidelberg-bakery-1', 'heidelberg', 'bakery', 'Cafe Frisch', 4.5, 'Jahnstraße 34, 69120 Heidelberg, Germany', '빵과 페이스트리, 케이크로 정평이 난 하이델베르크의 베이커리', 'Heidelberg bakery unbeatable for its bread, pastries and cakes'),
  place('heidelberg-cafe-1', 'heidelberg', 'cafe', 'Cafe Zimmermann', 4.4, 'Rohrbacher Straße 130, 69126 Heidelberg, Germany', '고풍스러운 조명이 있는 클래식한 분위기의 하이델베르크 카페', 'Classic coffeehouse-style café in Heidelberg with ornate lighting'),

  // —— nuremberg ——
  place('nuremberg-fine_dining-1', 'nuremberg', 'fine_dining', 'Schwarzer Adler', 4.5, 'Zirkelschmiedsgasse 26, 90402 Nürnberg', '모던 프랑코니아 요리.', 'Modern Franconian cuisine.'),
  place('nuremberg-bakery-1', 'nuremberg', 'bakery', 'Düll', 4.6, 'Wilhelm-Marx-Straße 8, 90419 Nürnberg, Germany', '뛰어난 렙쿠헨(생강빵)으로 유명한 뉘른베르크의 전통 제과점', 'Cherished Nuremberg institution renowned for exceptional Lebkuchen gingerbread'),
  place('nuremberg-cafe-1', 'nuremberg', 'cafe', 'Café Mainheim', 4.5, 'Bauerngasse 18, 90443 Nürnberg, Germany', '맛있는 베이커리 제품으로 추천받는 뉘른베르크의 카페', 'Highly recommended Nuremberg café known for delicious baked goods'),

  // —— stuttgart ——
  place('stuttgart-fine_dining-1', 'stuttgart', 'fine_dining', 'Speisemeisterei', 4.6, 'Hohenheimer Straße 28-30, 70599 Stuttgart', '호엔하임 궁전의 미쉐린 레스토랑.', 'Michelin restaurant at Hohenheim Palace.'),
  place('stuttgart-bakery-1', 'stuttgart', 'bakery', 'Café Nast', 4.4, 'Charlottenplatz 2, 70173 Stuttgart, Germany', '샤를로텐광장 지하철역에 위치한 슈투트가르트의 베이커리 카페 체인', 'Bakery café chain at Stuttgart\'s Charlottenplatz U-Bahn station'),
  place('stuttgart-cafe-1', 'stuttgart', 'cafe', 'Trölsch', 4.4, 'Stuttgarter Straße, Stuttgart, Germany', '페이스트리 애호가들의 안식처로 불리는 슈투트가르트의 제과 카페', 'Stuttgart bakery café described as a haven for pastry lovers'),

  // —— leipzig ——
  place('leipzig-fine_dining-1', 'leipzig', 'fine_dining', 'Stadtpfeiffer', 4.6, 'Augustusplatz 8, 04109 Leipzig', '노이에스 게반트하우스의 미식 레스토랑.', 'Fine dining in the Neues Gewandhaus.'),
  place('leipzig-bakery-1', 'leipzig', 'bakery', 'Confectionery & Café Krüsmann', 4.5, 'Willy-Brandt-Platz 7, 04109 Leipzig, Germany', '케이크와 커피로 유명한 라이프치히의 아늑한 베이커리', 'Charming Leipzig bakery renowned for cakes and coffee'),
  place('leipzig-cafe-1', 'leipzig', 'cafe', 'Addis Café', 4.4, 'Brüderstraße 39, 04103 Leipzig, Germany', '라이프치히의 인기 카페', 'Popular café in Leipzig'),

  // —— rothenburg ——
  place('rothenburg-fine_dining-1', 'rothenburg', 'fine_dining', 'Hotel & Restaurant Reichsküchenmeister', 4.4, 'Kirchplatz 8, 91541 Rothenburg ob der Tauber', '구시가의 전통 프랑코니아 요리.', 'Traditional Franconian cuisine in the Old Town.'),
  place('rothenburg-bakery-1', 'rothenburg', 'bakery', 'Bäckerei Striffler', 4.6, 'Schrannenplatz 7, 91541 Rothenburg ob der Tauber, Germany', '고전 레시피로 로텐부르크의 명물 슈니발렌을 만드는 가족 운영 베이커리', 'Family-run bakery using ancient recipes to make Rothenburg\'s signature Schneeball pastry'),
  place('rothenburg-cafe-1', 'rothenburg', 'cafe', 'Bäckerei Café Friedrich Schöbel', 4.5, 'Galgengasse 6, 91541 Rothenburg ob der Tauber, Germany', '정통 독일식 페이스트리와 빵으로 유명한 로텐부르크의 베이커리 카페', 'Rothenburg bakery café known for authentic German pastries and bread'),

  // —— potsdam ——
  place('potsdam-fine_dining-1', 'potsdam', 'fine_dining', 'Juliette', 4.6, 'Jägerstraße 39, 14467 Potsdam', '클래식 프렌치 요리 레스토랑.', 'Classic French cuisine restaurant.'),

  place('potsdam-bakery-1', 'potsdam', 'bakery', 'Bäckerei und Konditorei Schröter', 4.4, 'Brandenburger Straße 4, 14467 Potsdam, Germany', '포츠담 중심가에 위치한 아담한 베이커리 카페', 'Compact bakery café in the heart of Potsdam'),
  place('potsdam-cafe-1', 'potsdam', 'cafe', 'Café Heider', 4.5, 'Friedrich-Ebert-Straße 29, 14467 Potsdam, Germany', '1878년부터 이어온 포츠담에서 가장 오래된 카페', 'Potsdam\'s oldest café, serving since 1878'),
]
