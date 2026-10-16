import { place } from './placeFactory'
import type { Place } from '../types'

export const placesBGExtra: Place[] = [
  // —— sofia ——
  place('sofia-fine_dining-1', 'sofia', 'fine_dining', 'Made in Blue', 'ul. "Yuri Venelin" 6, Sofia Center', '모던 불가리아 다이닝.', 'Modern Bulgarian dining.'),
  place('sofia-fine_dining-2', 'sofia', 'fine_dining', 'Cosmos Restaurant', 'Lavele St 19, Sofia Center', '창의 코스 파인.', 'Creative tasting fine dining.'),
  place('sofia-fine_dining-3', 'sofia', 'fine_dining', 'Raketa Rakia Bar', 'Yanko Sakuzov Blvd 17, Sofia', '로컬 라키아·캐주얼.', 'Local rakia and casual dining.'),
  place('sofia-fine_dining-4', 'sofia', 'fine_dining', 'Moma Bulgarian Food and Wine', 'Solunska Street 28, Sofia Center', '불가리아 요리·와인.', 'Bulgarian cuisine and wine.'),
  place('sofia-fine_dining-5', 'sofia', 'fine_dining', 'Manastirska Magernitsa', 'ul. "Han Asparuh" 67, Sofia Center', '전통 불가리아 요리.', 'Traditional Bulgarian cuisine.', { image: '/places/sofia-fine_dining-5.jpg' }),
  place('sofia-bakery-1', 'sofia', 'bakery', 'Фурна НадЕжко', 'ul. "Beethoven L. V." 12, Sofia', '바니차·사워도우 빵집.', 'Banitsa and sourdough bakery.'),
  place('sofia-bakery-2', 'sofia', 'bakery', 'Sweet and Salty Bakery/Cafe', 'Vitosha Blvd 62a, Sofia', '케이크·페이스트리.', 'Cakes and pastries.'),
  place('sofia-bakery-3', 'sofia', 'bakery', 'Black Label Coffee House and Bakery', 'ul. "Han Asparuh" 13, Sofia', '커피 로스터리 겸 베이커리.', 'Coffee roastery and bakery.'),
  place('sofia-bakery-4', 'sofia', 'bakery', 'Bread Box Bakery', 'ul. "Krum Popov" 64, Sofia', '사워도우 베이커리.', 'Sourdough bakery.'),
  place('sofia-cafe-1', 'sofia', 'cafe', 'CoffeeBar', 'Solunska Street 13, Sofia', '스페셜티 커피.', 'Specialty coffee.'),
  place('sofia-cafe-2', 'sofia', 'cafe', 'Better Specialty Coffee', 'Neofit Rilski St 59, Sofia', '스페셜티 커피.', 'Specialty coffee.'),
  place('sofia-cafe-3', 'sofia', 'cafe', 'Urban Embassy Specialty Coffee', 'Slavyanska St 3А, Sofia', '스페셜티 커피.', 'Specialty coffee.'),
  place('sofia-cafe-4', 'sofia', 'cafe', 'Café Ma Baker', 'Vitosha Blvd 44, Sofia', '비토샤 대로 카페.', 'Café on Vitosha Boulevard.'),

  // —— plovdiv ——
  place('plovdiv-fine_dining-1', 'plovdiv', 'fine_dining', 'Pavaj', 'Zlatarska 7, Kapana District, Plovdiv 4000', '카파나 지구의 대표 불가리아 요리.', 'Leading Bulgarian restaurant in the Kapana District.'),
  place('plovdiv-fine_dining-2', 'plovdiv', 'fine_dining', 'Aylyakria Restaurant', 'ul. "Kozhuharska" 3, Plovdiv 4000', '플로브디프의 인기 레스토랑.', 'Popular restaurant in Plovdiv.'),
  place('plovdiv-fine_dining-3', 'plovdiv', 'fine_dining', 'Tams House', 'ul. "Zagreb" 4, Plovdiv 4000', '플로브디프의 레스토랑.', 'Restaurant in Plovdiv.'),
  place('plovdiv-bakery-1', 'plovdiv', 'bakery', 'Bakery Art', 'Kiril i Metodiy St 16, 4000 Plovdiv, Bulgaria', '플로브디프에서 가장 오래된 빵집 중 하나로 다양한 페이스트리로 유명', 'One of Plovdiv\'s oldest bakeries, known for its wide variety of pastries'),
  place('plovdiv-bakery-2', 'plovdiv', 'bakery', 'Novelli - Specialty Coffee & Bakery', 'ul. "Karlovska" 35, Plovdiv 4000', '스페셜티 커피·베이커리.', 'Specialty coffee and bakery.'),
  place('plovdiv-bakery-3', 'plovdiv', 'bakery', 'Kapana Bakery', 'pl. "Kapana" 6, Plovdiv 4000', '카파나 지구의 베이커리.', 'Bakery in the Kapana District.'),
  place('plovdiv-cafe-1', 'plovdiv', 'cafe', 'El Greco', 'Antim 1-vi 7, 4000 Plovdiv, Bulgaria', '플로브디프 중심가의 인기 베이커리 카페', 'Popular bakery café in central Plovdiv'),
  place('plovdiv-cafe-2', 'plovdiv', 'cafe', 'Dwell Coffee House', 'ul. "Prolet" 2, Plovdiv 4000', '스페셜티 커피.', 'Specialty coffee.'),
  place('plovdiv-cafe-3', 'plovdiv', 'cafe', 'The Family Coffee Roasters', 'ul. "Rayko Daskalov" 54, Plovdiv 4000', '스페셜티 커피 로스터리.', 'Specialty coffee roastery.'),

  // —— varna ——
  place('varna-fine_dining-1', 'varna', 'fine_dining', 'Mehana Kashtata', 'Makedonia 154, 9000 Varna', '전통 불가리아 가정식.', 'Traditional Bulgarian home cooking.'),
  place('varna-fine_dining-2', 'varna', 'fine_dining', 'Staria Chinar Cherno More', 'bul. "Slivnitsa" 33, 9000 Varna', '바르나의 인기 레스토랑.', 'Popular restaurant in Varna.'),
  place('varna-fine_dining-3', 'varna', 'fine_dining', 'El Kapan', 'Severni Plazh, 9000 Varna', '북쪽 해변가의 레스토랑.', 'Restaurant on Varna\'s northern beach.'),
  place('varna-bakery-1', 'varna', 'bakery', 'Bakery Parmaksazov', 'ul. Dragoman 28, 9000 Varna, Bulgaria', '코주낙(부활절 빵)으로 유명한 바르나의 전통 빵집', 'Traditional Varna bakery famous for its kozunak (Easter bread)'),
  place('varna-bakery-2', 'varna', 'bakery', 'Twistie Buns', 'ul. "Preslav", pl. "Nezavisimost" 46, 9000 Varna', '바르나의 베이커리.', 'Bakery in Varna.'),
  place('varna-bakery-3', 'varna', 'bakery', 'Cakery à la Bakery, Pastry & Coffee shop', 'ul. "Lyuben Karavelov" 57, 9000 Varna', '베이커리 겸 커피숍.', 'Bakery and coffee shop.'),
  place('varna-cafe-1', 'varna', 'cafe', 'The Social Teahouse', 'ul. Slivnitsa 5, 9000 Varna, Bulgaria', '코워킹 공간을 갖춘 세련된 분위기의 바르나 카페', 'Stylish Varna café with a coworking area, great for breakfast'),
  place('varna-cafe-2', 'varna', 'cafe', 'Wholehearted Cafe', 'ul. "Tsaribrod" 29, 9000 Varna', '바르나의 카페.', 'Café in Varna.'),
  place('varna-cafe-3', 'varna', 'cafe', 'Samba Coffee/HQ', 'ul. "Preslav" 25, 9000 Varna', '스페셜티 커피.', 'Specialty coffee.'),

  // —— veliko-tarnovo ——
  place('veliko-tarnovo-fine_dining-1', 'veliko-tarnovo', 'fine_dining', 'Kolyo Ficheto Complex', 'Georgi S. Rakovski 19, Veliko Tarnovo 5000', '19세기 건물의 역사적인 레스토랑.', 'Historic restaurant in a 19th-century inn.'),
  place('veliko-tarnovo-fine_dining-2', 'veliko-tarnovo', 'fine_dining', 'Shtastliveca', 'ul. "Stefan Stambolov" 79, Veliko Tarnovo 5000', '벨리코 터르노보의 인기 레스토랑.', 'Popular restaurant in Veliko Tarnovo.'),
  place('veliko-tarnovo-fine_dining-3', 'veliko-tarnovo', 'fine_dining', 'Restaurant Asenevtsi', 'ul. "Alexander Stamboliyski" 7, Veliko Tarnovo 5000', '벨리코 터르노보의 레스토랑.', 'Restaurant in Veliko Tarnovo.'),
  place('veliko-tarnovo-bakery-1', 'veliko-tarnovo', 'bakery', 'Kozunacheni Komincheta', 'Vastanicheska 46, 5000 Veliko Tarnovo, Bulgaria', '달콤한 코주낙 빵으로 유명한 벨리코 터르노보의 인기 베이커리', 'Popular Veliko Tarnovo bakery known for its sweet kozunak bread'),
  place('veliko-tarnovo-bakery-2', 'veliko-tarnovo', 'bakery', 'Пекарна & Сладкарница Асеневци', 'ul. "Narodni buditeli" 21, Veliko Tarnovo 5000', '벨리코 터르노보의 제과점.', 'Bakery in Veliko Tarnovo.'),
  place('veliko-tarnovo-cafe-1', 'veliko-tarnovo', 'cafe', 'Amaretto', 'bul. Nezavisimost 39, 5000 Veliko Tarnovo, Bulgaria', '셀프 서비스 방식의 인기 커피숍, 페이스트리로 유명', 'Popular self-service coffee shop known for its pastries'),
  place('veliko-tarnovo-cafe-2', 'veliko-tarnovo', 'cafe', 'Samurai Coffee Shop', 'ul. "Stefan Stambolov" 38, Veliko Tarnovo 5000', '스페셜티 커피 전문점.', 'Specialty coffee shop.'),
  place('veliko-tarnovo-cafe-3', 'veliko-tarnovo', 'cafe', 'FIKA Coffee and Pastries', 'ul. "Nezavisimost" 9, Veliko Tarnovo 5000', '커피·페이스트리 전문점.', 'Coffee and pastry shop.'),

  // —— nessebar ——
  place('nessebar-fine_dining-1', 'nessebar', 'fine_dining', 'Old Nessebar', 'Ivan Alexander 11, Nessebar 8230', '바다 전망의 시푸드 레스토랑.', 'Seafood restaurant with sea views.'),
  place('nessebar-fine_dining-2', 'nessebar', 'fine_dining', 'Familia Fish & Grill', 'ul. "Krajbrezhna" 7, Nessebar 8230', '네세바르의 인기 시푸드 그릴.', 'Popular seafood grill in Nessebar.'),
  place('nessebar-fine_dining-3', 'nessebar', 'fine_dining', 'Old Robinson Sea & Grill', 'ul. "Mesembrija" 38, Nessebar 8230', '네세바르 구시가의 시푸드 그릴.', 'Seafood grill in Nessebar\'s Old Town.'),

  place('nessebar-bakery-1', 'nessebar', 'bakery', 'Foyer Café & Bakery', 'str. Perla 55, Nessebar, Bulgaria', '네세바르 신시가지에서 연중 운영되는 인기 베이커리 카페', 'Popular year-round bakery café in Nessebar\'s New Town'),
  place('nessebar-bakery-2', 'nessebar', 'bakery', 'Кафе сладкарница Захаро - Несебър', 'ul. "Struma" 23, Nessebar 8230', '네세바르 신시가지의 제과점.', 'Bakery-café in Nessebar\'s New Town.'),
  place('nessebar-bakery-3', 'nessebar', 'bakery', 'Dumi68', 'ul. "Mladost" 85, Nessebar 8230', '네세바르 신시가지의 제과점.', 'Bakery in Nessebar\'s New Town.'),
  place('nessebar-cafe-1', 'nessebar', 'cafe', '221B Baker Street', 'Han Krum 16, 8231 Nessebar, Bulgaria', '네세바르에서 최고의 페이스트리와 홈메이드 케이크로 알려진 카페', 'Café known for the best pastry and homemade cakes in Nessebar'),
  place('nessebar-cafe-2', 'nessebar', 'cafe', 'Retro Cafe', 'ul. "Han Krum" 22, Nessebar 8230', '네세바르 신시가지의 스페셜티 커피.', 'Specialty coffee in Nessebar\'s New Town.'),
  place('nessebar-cafe-3', 'nessebar', 'cafe', 'Кафе Арт Дворът', 'ul. "Mesembrija" 24, Nessebar 8230', '네세바르 구시가의 카페.', 'Café in Nessebar\'s Old Town.'),
]
