import { place } from './placeFactory'
import type { Place } from '../types'

export const placesBGExtra: Place[] = [
  // —— sofia ——
  place('sofia-fine_dining-1', 'sofia', 'fine_dining', 'Made in Blue', 4.2, 'ul. "Yuri Venelin" 6, Sofia Center', '모던 불가리아 다이닝.', 'Modern Bulgarian dining.', { reviewCount: 2418 }),
  place('sofia-fine_dining-2', 'sofia', 'fine_dining', 'Cosmos Restaurant', 4.6, 'Lavele St 19, Sofia Center', '창의 코스 파인.', 'Creative tasting fine dining.', { reviewCount: 3993 }),
  place('sofia-fine_dining-3', 'sofia', 'fine_dining', 'Raketa Rakia Bar', 4.5, 'Yanko Sakuzov Blvd 17, Sofia', '로컬 라키아·캐주얼.', 'Local rakia and casual dining.', { reviewCount: 7685 }),
  place('sofia-fine_dining-4', 'sofia', 'fine_dining', 'Moma Bulgarian Food and Wine', 4.2, 'Solunska Street 28, Sofia Center', '불가리아 요리·와인.', 'Bulgarian cuisine and wine.', { reviewCount: 5488 }),
  place('sofia-fine_dining-5', 'sofia', 'fine_dining', 'Manastirska Magernitsa', 4.3, 'ul. "Han Asparuh" 67, Sofia Center', '전통 불가리아 요리.', 'Traditional Bulgarian cuisine.', { reviewCount: 4739 }),
  place('sofia-bakery-1', 'sofia', 'bakery', 'Фурна НадЕжко', 4.7, 'ul. "Beethoven L. V." 12, Sofia', '바니차·사워도우 빵집.', 'Banitsa and sourdough bakery.', { reviewCount: 335 }),
  place('sofia-bakery-2', 'sofia', 'bakery', 'Sweet and Salty Bakery/Cafe', 4.3, 'Vitosha Blvd 62a, Sofia', '케이크·페이스트리.', 'Cakes and pastries.', { reviewCount: 807 }),
  place('sofia-bakery-3', 'sofia', 'bakery', 'Black Label Coffee House and Bakery', 4.8, 'ul. "Han Asparuh" 13, Sofia', '커피 로스터리 겸 베이커리.', 'Coffee roastery and bakery.', { reviewCount: 799 }),
  place('sofia-bakery-4', 'sofia', 'bakery', 'Bread Box Bakery', 4.8, 'ul. "Krum Popov" 64, Sofia', '사워도우 베이커리.', 'Sourdough bakery.', { reviewCount: 164 }),
  place('sofia-cafe-1', 'sofia', 'cafe', 'CoffeeBar', 4.7, 'Solunska Street 13, Sofia', '스페셜티 커피.', 'Specialty coffee.', { reviewCount: 317 }),
  place('sofia-cafe-2', 'sofia', 'cafe', 'Better Specialty Coffee', 4.9, 'Neofit Rilski St 59, Sofia', '스페셜티 커피.', 'Specialty coffee.', { reviewCount: 297 }),
  place('sofia-cafe-3', 'sofia', 'cafe', 'Urban Embassy Specialty Coffee', 5.0, 'Slavyanska St 3А, Sofia', '스페셜티 커피.', 'Specialty coffee.', { reviewCount: 85 }),
  place('sofia-cafe-4', 'sofia', 'cafe', 'Café Ma Baker', 4.4, 'Vitosha Blvd 44, Sofia', '비토샤 대로 카페.', 'Café on Vitosha Boulevard.', { reviewCount: 998 }),

  // —— plovdiv ——
  place('plovdiv-fine_dining-1', 'plovdiv', 'fine_dining', 'Pavaj', 4.5, 'Zlatarska 7, Kapana District, Plovdiv 4000', '카파나 지구의 대표 불가리아 요리.', 'Leading Bulgarian restaurant in the Kapana District.'),
  place('plovdiv-fine_dining-2', 'plovdiv', 'fine_dining', 'Aylyakria Restaurant', 4.7, 'ul. "Kozhuharska" 3, Plovdiv 4000', '플로브디프의 인기 레스토랑.', 'Popular restaurant in Plovdiv.', { reviewCount: 3587 }),
  place('plovdiv-fine_dining-3', 'plovdiv', 'fine_dining', 'Tams House', 4.6, 'ul. "Zagreb" 4, Plovdiv 4000', '플로브디프의 레스토랑.', 'Restaurant in Plovdiv.', { reviewCount: 1147 }),
  place('plovdiv-bakery-1', 'plovdiv', 'bakery', 'Bakery Art', 4.5, 'Kiril i Metodiy St 16, 4000 Plovdiv, Bulgaria', '플로브디프에서 가장 오래된 빵집 중 하나로 다양한 페이스트리로 유명', 'One of Plovdiv\'s oldest bakeries, known for its wide variety of pastries'),
  place('plovdiv-bakery-2', 'plovdiv', 'bakery', 'Novelli - Specialty Coffee & Bakery', 4.9, 'ul. "Karlovska" 35, Plovdiv 4000', '스페셜티 커피·베이커리.', 'Specialty coffee and bakery.', { reviewCount: 75 }),
  place('plovdiv-bakery-3', 'plovdiv', 'bakery', 'Kapana Bakery', 4.6, 'pl. "Kapana" 6, Plovdiv 4000', '카파나 지구의 베이커리.', 'Bakery in the Kapana District.', { reviewCount: 553 }),
  place('plovdiv-cafe-1', 'plovdiv', 'cafe', 'El Greco', 4.4, 'Plovdiv, Bulgaria', '플로브디프 중심가의 인기 베이커리 카페', 'Popular bakery café in central Plovdiv'),
  place('plovdiv-cafe-2', 'plovdiv', 'cafe', 'Dwell Coffee House', 4.9, 'ul. "Prolet" 2, Plovdiv 4000', '스페셜티 커피.', 'Specialty coffee.', { reviewCount: 523 }),
  place('plovdiv-cafe-3', 'plovdiv', 'cafe', 'The Family Coffee Roasters', 4.7, 'ul. "Rayko Daskalov" 54, Plovdiv 4000', '스페셜티 커피 로스터리.', 'Specialty coffee roastery.', { reviewCount: 655 }),

  // —— varna ——
  place('varna-fine_dining-1', 'varna', 'fine_dining', 'Mehana Kashtata', 4.4, 'Makedonia 154, 9000 Varna', '전통 불가리아 가정식.', 'Traditional Bulgarian home cooking.'),
  place('varna-fine_dining-2', 'varna', 'fine_dining', 'Staria Chinar Cherno More', 4.7, 'bul. "Slivnitsa" 33, 9000 Varna', '바르나의 인기 레스토랑.', 'Popular restaurant in Varna.', { reviewCount: 5096 }),
  place('varna-fine_dining-3', 'varna', 'fine_dining', 'El Kapan', 4.5, 'Severni Plazh, 9000 Varna', '북쪽 해변가의 레스토랑.', 'Restaurant on Varna\'s northern beach.', { reviewCount: 4719 }),
  place('varna-bakery-1', 'varna', 'bakery', 'Bakery Parmaksazov', 4.5, 'ul. Dragoman 28, 9000 Varna, Bulgaria', '코주낙(부활절 빵)으로 유명한 바르나의 전통 빵집', 'Traditional Varna bakery famous for its kozunak (Easter bread)'),
  place('varna-bakery-2', 'varna', 'bakery', 'Twistie Buns', 4.8, 'ul. "Preslav", pl. "Nezavisimost" 46, 9000 Varna', '바르나의 베이커리.', 'Bakery in Varna.', { reviewCount: 443 }),
  place('varna-bakery-3', 'varna', 'bakery', 'Cakery à la Bakery, Pastry & Coffee shop', 4.8, 'ul. "Lyuben Karavelov" 57, 9000 Varna', '베이커리 겸 커피숍.', 'Bakery and coffee shop.', { reviewCount: 67 }),
  place('varna-cafe-1', 'varna', 'cafe', 'The Social Teahouse', 4.5, 'ul. Slivnitsa 5, 9000 Varna, Bulgaria', '코워킹 공간을 갖춘 세련된 분위기의 바르나 카페', 'Stylish Varna café with a coworking area, great for breakfast'),
  place('varna-cafe-2', 'varna', 'cafe', 'Wholehearted Cafe', 4.7, 'ul. "Tsaribrod" 29, 9000 Varna', '바르나의 카페.', 'Café in Varna.', { reviewCount: 648 }),
  place('varna-cafe-3', 'varna', 'cafe', 'Samba Coffee/HQ', 4.9, 'ul. "Preslav" 25, 9000 Varna', '스페셜티 커피.', 'Specialty coffee.', { reviewCount: 468 }),

  // —— veliko-tarnovo ——
  place('veliko-tarnovo-fine_dining-1', 'veliko-tarnovo', 'fine_dining', 'Kolyo Ficheto Complex', 4.5, 'Georgi S. Rakovski 19, Veliko Tarnovo 5000', '19세기 건물의 역사적인 레스토랑.', 'Historic restaurant in a 19th-century inn.'),
  place('veliko-tarnovo-fine_dining-2', 'veliko-tarnovo', 'fine_dining', 'Shtastliveca', 4.6, 'ul. "Stefan Stambolov" 79, Veliko Tarnovo 5000', '벨리코 터르노보의 인기 레스토랑.', 'Popular restaurant in Veliko Tarnovo.', { reviewCount: 14052 }),
  place('veliko-tarnovo-fine_dining-3', 'veliko-tarnovo', 'fine_dining', 'Restaurant Asenevtsi', 4.7, 'ul. "Alexander Stamboliyski" 7, Veliko Tarnovo 5000', '벨리코 터르노보의 레스토랑.', 'Restaurant in Veliko Tarnovo.', { reviewCount: 2260 }),
  place('veliko-tarnovo-bakery-1', 'veliko-tarnovo', 'bakery', 'Kozunacheni Komincheta', 4.4, 'Veliko Tarnovo, Bulgaria', '달콤한 코주낙 빵으로 유명한 벨리코 터르노보의 인기 베이커리', 'Popular Veliko Tarnovo bakery known for its sweet kozunak bread'),
  place('veliko-tarnovo-bakery-2', 'veliko-tarnovo', 'bakery', 'Пекарна & Сладкарница Асеневци', 4.7, 'ul. "Narodni buditeli" 21, Veliko Tarnovo 5000', '벨리코 터르노보의 제과점.', 'Bakery in Veliko Tarnovo.', { reviewCount: 656 }),
  place('veliko-tarnovo-cafe-1', 'veliko-tarnovo', 'cafe', 'Amaretto', 4.4, 'bul. Nezavisimost 39, 5000 Veliko Tarnovo, Bulgaria', '셀프 서비스 방식의 인기 커피숍, 페이스트리로 유명', 'Popular self-service coffee shop known for its pastries'),
  place('veliko-tarnovo-cafe-2', 'veliko-tarnovo', 'cafe', 'Samurai Coffee Shop', 4.9, 'ul. "Stefan Stambolov" 38, Veliko Tarnovo 5000', '스페셜티 커피 전문점.', 'Specialty coffee shop.', { reviewCount: 1388 }),
  place('veliko-tarnovo-cafe-3', 'veliko-tarnovo', 'cafe', 'FIKA Coffee and Pastries', 5.0, 'ul. "Nezavisimost" 9, Veliko Tarnovo 5000', '커피·페이스트리 전문점.', 'Coffee and pastry shop.', { reviewCount: 41 }),

  // —— nessebar ——
  place('nessebar-fine_dining-1', 'nessebar', 'fine_dining', 'Old Nessebar', 4.5, 'Ivan Alexander 11, Nessebar 8230', '바다 전망의 시푸드 레스토랑.', 'Seafood restaurant with sea views.'),
  place('nessebar-fine_dining-2', 'nessebar', 'fine_dining', 'Familia Fish & Grill', 4.8, 'ul. "Krajbrezhna" 7, Nessebar 8230', '네세바르의 인기 시푸드 그릴.', 'Popular seafood grill in Nessebar.', { reviewCount: 3615 }),
  place('nessebar-fine_dining-3', 'nessebar', 'fine_dining', 'Old Robinson Sea & Grill', 4.9, 'ul. "Mesembrija" 38, Nessebar 8230', '네세바르 구시가의 시푸드 그릴.', 'Seafood grill in Nessebar\'s Old Town.', { reviewCount: 421 }),

  place('nessebar-bakery-1', 'nessebar', 'bakery', 'Foyer Café & Bakery', 4.6, 'str. Perla 55, Nessebar, Bulgaria', '네세바르 신시가지에서 연중 운영되는 인기 베이커리 카페', 'Popular year-round bakery café in Nessebar\'s New Town'),
  place('nessebar-bakery-2', 'nessebar', 'bakery', 'Кафе сладкарница Захаро - Несебър', 4.6, 'ul. "Struma" 23, Nessebar 8230', '네세바르 신시가지의 제과점.', 'Bakery-café in Nessebar\'s New Town.', { reviewCount: 698 }),
  place('nessebar-bakery-3', 'nessebar', 'bakery', 'Dumi68', 4.7, 'ul. "Mladost" 85, Nessebar 8230', '네세바르 신시가지의 제과점.', 'Bakery in Nessebar\'s New Town.', { reviewCount: 204 }),
  place('nessebar-cafe-1', 'nessebar', 'cafe', '221B Baker Street', 4.6, 'Nessebar, Bulgaria', '네세바르에서 최고의 페이스트리와 홈메이드 케이크로 알려진 카페', 'Café known for the best pastry and homemade cakes in Nessebar'),
  place('nessebar-cafe-2', 'nessebar', 'cafe', 'Retro Cafe', 4.9, 'ul. "Han Krum" 22, Nessebar 8230', '네세바르 신시가지의 스페셜티 커피.', 'Specialty coffee in Nessebar\'s New Town.', { reviewCount: 177 }),
  place('nessebar-cafe-3', 'nessebar', 'cafe', 'Кафе Арт Дворът', 4.8, 'ul. "Mesembrija" 24, Nessebar 8230', '네세바르 구시가의 카페.', 'Café in Nessebar\'s Old Town.', { reviewCount: 186 }),
]
