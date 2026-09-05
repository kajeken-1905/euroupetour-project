import { place } from './placeFactory'
import type { Place } from '../types'

export const placesMKExtra: Place[] = [
  // —— skopje ——
  place('skopje-fine_dining-1', 'skopje', 'fine_dining', 'Destan', 4.2, 'Bulevar Partizanski odredi 35, Skopje', '1913년부터 이어온 구시장의 대표 케밥 레스토랑.', 'Old Bazaar institution serving traditional finger-kebab since 1913.', { reviewCount: 1100 }),
  place('skopje-fine_dining-2', 'skopje', 'fine_dining', 'Pivnica An', 3.8, 'Old Bazaar, Skopje', '오스만 시대 여관 건물의 구시장 레스토랑, 무츠칼리차·굴라시가 유명.', 'Restaurant in a former Ottoman-era inn in the Old Bazaar, known for mućkalica stew and goulash.'),
  place('skopje-fine_dining-3', 'skopje', 'fine_dining', 'Soul Kitchen - Macedonian Wine & Cuisine', 4.3, 'Kej 13-ti Noemvri, Skopje', '바르다르 강변에서 전통 마케도니아 요리와 인터내셔널 퓨전을 선보이는 레스토랑.', 'Vardar riverside restaurant blending traditional Macedonian dishes with international fusion.', { reviewCount: 3684 }),

  place('skopje-bakery-1', 'skopje', 'bakery', 'Silbo Furna', 4.3, 'Majakovski 2, Skopje', '24시간 운영하는 스코페 최고 인기의 부렉 베이커리.', 'Skopje\'s most popular 24-hour bakery, known for its burek.'),

  place('skopje-cafe-1', 'skopje', 'cafe', 'Cafe Bar Vinyl', 4.5, 'Partizanski Odredi 14, Skopje', '시내 중심가와 데바르 말로 사이에 위치한 인더스트리얼 감성의 카페.', 'Industrial-feel café located between the city center and Debar Maalo.'),

  // —— ohrid ——
  place('ohrid-fine_dining-1', 'ohrid', 'fine_dining', 'Gladiator', 4.5, 'Braka Miladinovi br. 14, Ohrid', '고대 원형극장 옆, 450년 된 전통 가옥에서 즐기는 마케도니아 가정식.', 'Macedonian home cooking served in a 450-year-old traditional house beside the ancient amphitheatre.'),
  place('ohrid-bakery-1', 'ohrid', 'bakery', 'Ohrid City Bakery', 4.1, 'Bulevar Turistichka 47, Ohrid, North Macedonia', '오흐리드에서 가장 오래된 제과점, 부렉으로 유명', 'Ohrid\'s oldest bakery institution, famous for burek'),
  place('ohrid-cafe-1', 'ohrid', 'cafe', 'Roastery (Artisan Coffee House)', 4.4, 'Kosta Abrash 19, Ohrid, North Macedonia', '90년 전통의 가족 로스터리, 구시가 자갈길에서 즐기는 커피.', 'Family coffee roastery with a 90-year tradition, served on a cobblestone street in the Old Town.'),

  // —— bitola ——
  place('bitola-fine_dining-1', 'bitola', 'fine_dining', 'Gradska Kefeana', 4.1, 'Shirok Sokak, Bitola', '비톨라 중심 보행자거리의 고급 레스토랑, 현지에서는 "호텔 에피날"로도 불림.', 'Upscale restaurant on Bitola\'s pedestrian main street, locally known as "Hotel Epinal".'),
  place('bitola-bakery-1', 'bitola', 'bakery', 'Bakery Boulevard', 4.5, 'Bulevar 1vi Maj, Bitola', '24시간 운영하는 비톨라의 인기 베이커리', 'Popular 24-hour bakery in Bitola'),
  place('bitola-cafe-1', 'bitola', 'cafe', 'Cafe Pajton', 4.7, 'Shirok Sokak 87, Bitola, North Macedonia', '시로크 소칵 거리의 에스프레소와 사람 구경으로 유명한 비톨라의 카페', 'Bustling Bitola café on Shirok Sokak, perfect for espresso and people-watching'),

  // —— tetovo ——
  place('tetovo-fine_dining-1', 'tetovo', 'fine_dining', 'Restaurant Bakal', 4.7, 'Marshal Tito, Brvenica, Tetovo', '테토보 최고 평가의 파인 레스토랑, 인터내셔널·바비큐 요리와 버섯 요리로 유명.', 'Tetovo\'s top-rated fine restaurant, known for international/barbecue cuisine and mushroom dishes.'),

  place('tetovo-bakery-1', 'tetovo', 'bakery', 'Bakal Bakery', 4.5, 'Иво Лола Рибар 137, 1200 Tetovo, North Macedonia', '테토보의 평이 좋은 베이커리', 'Well-reviewed bakery in Tetovo'),
]
