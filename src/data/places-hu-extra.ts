import { place } from './placeFactory'
import type { Place } from '../types'

export const placesHUExtra: Place[] = [
  // —— budapest ——
  place('budapest-fine_dining-1', 'budapest', 'fine_dining', 'Borkonyha Winekitchen', 4.6, 'Budapest', '와인 페어링 파인 다이닝.', 'Wine-pairing fine dining.', { reviewCount: 1600 }),
  place('budapest-fine_dining-2', 'budapest', 'fine_dining', 'Costes Downtown', 4.5, 'Budapest', '미슐랭 모던 헝가리.', 'Michelin modern Hungarian.', { reviewCount: 1200 }),
  place('budapest-fine_dining-3', 'budapest', 'fine_dining', 'Babel Budapest', 4.5, 'Budapest', '창의 코스.', 'Creative courses.', { reviewCount: 860 }),
  place('budapest-fine_dining-4', 'budapest', 'fine_dining', 'Hungarikum Bisztró', 4.4, 'Budapest', '전통 헝가리 요리.', 'Traditional Hungarian.', { reviewCount: 3200 }),
  place('budapest-fine_dining-5', 'budapest', 'fine_dining', 'Kispiac Bisztró', 4.4, 'Budapest', '마켓 감성 비스트로.', 'Market-inspired bistro.', { reviewCount: 1400 }),
  place('budapest-bakery-1', 'budapest', 'bakery', 'Élesztő bakery counters / local bakeries', 4.3, 'Budapest', '로컬 베이커리.', 'Local bakeries.', { reviewCount: 900 }),
  place('budapest-bakery-2', 'budapest', 'bakery', 'Butter Birds', 4.5, 'Budapest', '페이스트리·브런치.', 'Pastries and brunch.', { reviewCount: 1600 }),
  place('budapest-bakery-3', 'budapest', 'bakery', 'Jenői Pékség', 4.4, 'Budapest', '사워도우.', 'Sourdough.', { reviewCount: 1100 }),
  place('budapest-bakery-4', 'budapest', 'bakery', 'Café Gerbeaud bakery', 4.4, 'Vörösmarty tér, Budapest', '클래식 페이스트리.', 'Classic pastries.', { reviewCount: 9800 }),
  place('budapest-cafe-1', 'budapest', 'cafe', 'New York Café', 4.5, 'Budapest', '화려한 카페하우스.', 'Ornate coffee house.', { reviewCount: 22000 }),
  place('budapest-cafe-2', 'budapest', 'cafe', 'Espresso Embassy', 4.6, 'Budapest', '스페셜티 커피.', 'Specialty coffee.', { reviewCount: 2100 }),
  place('budapest-cafe-3', 'budapest', 'cafe', 'My Little Melbourne', 4.5, 'Budapest', '스페셜티·브런치.', 'Specialty and brunch.', { reviewCount: 2800 }),
  place('budapest-cafe-4', 'budapest', 'cafe', 'Café Gerbeaud', 4.4, 'Budapest', '역사적 카페.', 'Historic café.', { reviewCount: 12000 }),
  place('budapest-korean-1', 'budapest', 'korean', 'Arirang', 4.5, 'Ilka utca 22, 1043 Budapest', '조용한 골목의 정통 한식당.', 'Authentic Korean restaurant on a quiet street.'),

  // —— debrecen ——
  place('debrecen-fine_dining-1', 'debrecen', 'fine_dining', 'IKON', 4.6, 'Piac utca 23, 4031 Debrecen', '부다페스트 밖 헝가리 최고 레스토랑.', 'One of Hungary\'s best restaurants outside Budapest.'),
  place('debrecen-bakery-1', 'debrecen', 'bakery', 'Pallag Spájz', 4.6, 'Bethlen u. 46, 4026 Debrecen, Hungary', '피스타치오 크루아상으로 유명한 데브레첸의 인기 베이커리', 'Popular Debrecen bakery known for its pistachio croissant'),
  place('debrecen-cafe-1', 'debrecen', 'cafe', 'Cafe Frei Debrecen Főtér', 4.5, 'Piac u. 39/A, 4025 Debrecen, Hungary', '다양한 커피와 디저트를 갖춘 데브레첸의 커피하우스', 'Debrecen coffee house offering an international array of coffees and desserts'),

  // —— pecs ——
  place('pecs-fine_dining-1', 'pecs', 'fine_dining', 'Bagolyvár', 4.5, 'Felsőhavi dűlő 6, 7627 Pécs', '테티에 언덕의 전망 좋은 레스토랑.', 'Restaurant with panoramic views on Tettye hill.'),
  place('pecs-bakery-1', 'pecs', 'bakery', 'Capri Patisserie', 4.5, 'Pécs, 7621, Hungary', '우체국 궁전 앞에 위치한 페치 현지인들의 숨은 페이스트리 명소', 'Hidden pastry shop favorite of local families, in front of the Palace of the Post Office in Pécs'),
  place('pecs-cafe-1', 'pecs', 'cafe', 'Morzsa', 4.5, 'Király utca 14, 7622 Pécs, Hungary', '스칸디나비아풍 감성의 페치 베이커리 겸 레스토랑', 'Pécs bakery-restaurant with Scandinavian flair'),

  // —— szeged ——
  place('szeged-fine_dining-1', 'szeged', 'fine_dining', 'Régi Híd Vendéglő', 4.5, 'Oskola u. 4, 6720 Szeged', '합리적인 가격의 정통 헝가리 요리.', 'Authentic Hungarian cuisine at fair prices.'),
  place('szeged-bakery-1', 'szeged', 'bakery', 'Emmarozs', 4.6, 'Mérey utca 15/a, 6722 Szeged, Hungary', '세게드에서 가장 잘 알려진 아르티장 베이커리', 'One of the best-known artisan bakeries in Szeged'),
  place('szeged-cafe-1', 'szeged', 'cafe', 'A Cappella Cukrászda', 4.5, 'Kárász utca 6, 6720 Szeged, Hungary', '전통과 현대 케이크를 두루 갖춘 세게드 중심가의 카페', 'Café in central Szeged offering a huge selection of traditional and modern cakes'),

  // —— eger ——
  place('eger-fine_dining-1', 'eger', 'fine_dining', 'Macok Bistro', 4.6, 'Tinódi S. tér 4, 3300 Eger', '헝가리 전역에서 손꼽히는 비스트로.', 'Bistro ranked among the best in Hungary.'),

  place('eger-bakery-1', 'eger', 'bakery', 'Lipóti Bakery & Café', 4.6, 'Eger, 3300, Hungary', '도보 이슈트반 광장 인근의 헝가리식 페이스트리 베이커리 카페', 'Bakery café near Dobó István Square offering Hungarian pastries'),
  place('eger-cafe-1', 'eger', 'cafe', 'Greek Café', 4.5, 'Dobó István u. 22, 3300 Eger, Hungary', '30여 종의 커피와 가장 진한 핫초콜릿으로 유명한 에게르의 카페', 'Eger café serving over 30 coffee specialities and famously rich hot chocolate'),
]
