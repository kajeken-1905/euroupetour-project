import { place } from './placeFactory'
import type { Place } from '../types'

export const placesBGExtra: Place[] = [
  // —— sofia ——
  place('sofia-fine_dining-1', 'sofia', 'fine_dining', 'Made in Blue', 'ul. "Yuri Venelin" 6, Sofia Center', '옛 주택을 고친 레스토랑. 다달이 바뀌는 제철 메뉴와 여름 안뜰.', 'Restaurant in an old townhouse with a monthly seasonal menu and a summer courtyard.'),
  place('sofia-fine_dining-2', 'sofia', 'fine_dining', 'Cosmos Restaurant', 'Lavele St 19, Sofia Center', '불가리아 요리를 새롭게 풀어내는 파인 다이닝.', 'Fine dining giving Bulgarian cuisine an inventive twist.'),
  place('sofia-fine_dining-3', 'sofia', 'fine_dining', 'Raketa Rakia Bar', 'Yanko Sakuzov Blvd 17, Sofia', '사회주의 시대 소품으로 꾸민 라키야 바. 라키야 목록과 든든한 요리.', 'Rakia bar decked out in socialist-era memorabilia, with a long rakia list and hearty dishes.'),
  place('sofia-fine_dining-4', 'sofia', 'fine_dining', 'Moma Bulgarian Food and Wine', 'Solunska Street 28, Sofia Center', '전통과 현대를 섞은 불가리아 요리와 와인. 로도피 지방의 파타트니크 같은 지역 요리, 안뜰 좌석.', 'Bulgarian food and wine mixing tradition and modern touches, with regional dishes like Rhodope patatnik and a courtyard.'),
  place('sofia-fine_dining-5', 'sofia', 'fine_dining', 'Manastirska Magernitsa', 'ul. "Han Asparuh" 67, Sofia Center', '2000년 문을 연 전통 불가리아 요리 레스토랑. 옛 생활 소품 장식과 계절 정원 테라스.', 'Traditional Bulgarian restaurant opened in 2000, decorated with antiques, with a seasonal garden terrace.', { image: '/places/sofia-fine_dining-5.jpg' }),
  place('sofia-cafe-1', 'sofia', 'cafe', 'CoffeeBar', 'Solunska Street 13, Sofia', '커피와 생과일주스·스무디, 샌드위치를 내는 카페.', 'Cafe with coffee blends, fresh juices, smoothies and sandwiches.'),
  place('sofia-cafe-2', 'sofia', 'cafe', 'Better Specialty Coffee', 'Neofit Rilski St 59, Sofia', '좌석이 몇 개뿐인 작은 스페셜티 커피 카페. 에스프레소와 V60 핸드드립.', 'Tiny specialty coffee cafe with a few seats: espresso and V60 pour-overs.'),
  place('sofia-cafe-3', 'sofia', 'cafe', 'Urban Embassy Specialty Coffee', 'ul. Professor Fridtjof Nansen 19, 1142 Sofia', '작은 스페셜티 커피 카페. 직접 만든 식물성 우유와 리필 유리병.', 'Small specialty coffee cafe with homemade plant milks and refillable glass jars.'),

  // —— plovdiv ——
  place('plovdiv-fine_dining-1', 'plovdiv', 'fine_dining', 'Pavaj', 'Zlatarska 7, Kapana District, Plovdiv 4000', '카파나 지구의 모던 불가리아 레스토랑. 주인 아버지 농장 채소로 계절마다 바뀌는 메뉴.', 'Modern Bulgarian restaurant in Kapana, with a seasonal menu using vegetables from the owner’s family farm.'),
  place('plovdiv-fine_dining-2', 'plovdiv', 'fine_dining', 'Aylyakria Restaurant', 'ul. "Kozhuharska" 3, Plovdiv 4000', '100년 된 집을 고친 3층짜리 가스트로 바. 옛 레시피와 불가리아 와인.', 'Gastro-bar on three floors of a restored century-old house, with old recipes and Bulgarian wines.'),
  place('plovdiv-fine_dining-3', 'plovdiv', 'fine_dining', 'Tams House', 'ul. "Zagreb" 4, Plovdiv 4000', '2018년 카파나 지구에 문을 연 모던 불가리아 레스토랑. 지역 소농 재료의 제철 요리.', 'Modern Bulgarian restaurant opened in Kapana in 2018, cooking seasonally with produce from small regional farms.'),
  place('plovdiv-bakery-1', 'plovdiv', 'bakery', 'Bakery Art', 'ul. Sv. Sv. Kiril i Metodiy 16, Plovdiv', '매일 굽는 전통 빵과 바니차, 케이크가 있는 동네 빵집.', 'Local bakery with daily-baked traditional breads, banitsa and cakes.'),
  place('plovdiv-bakery-2', 'plovdiv', 'bakery', 'Novelli - Specialty Coffee & Bakery', 'ul. Karlovska, Plovdiv', '카를로프스카 거리의 카페 겸 빵집·자연식품 가게. 커피와 아침 식사.', 'Cafe, bakery and natural-food shop on Karlovska Street; coffee and breakfast.'),
  place('plovdiv-bakery-3', 'plovdiv', 'bakery', 'Kapana Bakery', 'ul. Yoakim Gruev 20, Plovdiv', '카파나 지구의 가족 빵집. 장작 화덕으로 하루 열 가지 빵과 크루아상을 굽습니다.', 'Family bakery in Kapana baking up to ten breads a day in a wood-fired oven, plus croissants.'),
  place('plovdiv-cafe-1', 'plovdiv', 'cafe', 'El Greco', 'Antim I / Hristo G. Danov corner, Plovdiv', '1930년대 건물 모퉁이의 그리스식 커피·빵집. 뵈렉과 직접 만든 젤라토.', 'Greek coffee-bakery in a 1930s corner building: börek and house-made gelato.'),
  place('plovdiv-cafe-2', 'plovdiv', 'cafe', 'Dwell Coffee House', 'ul. "Prolet" 2, Plovdiv 4000', '로마 경기장 광장 근처 골목의 스페셜티 커피 하우스.', 'Specialty coffee house in a lane near the Roman Stadium square.'),
  place('plovdiv-cafe-3', 'plovdiv', 'cafe', 'The Family Coffee Roasters', 'ul. "Rayko Daskalov" 54, Plovdiv 4000', '원두를 직접 볶는 스페셜티 커피 로스터리. 원두도 판매.', 'Specialty coffee roastery that roasts its own beans and sells them.'),

  // —— varna ——
  place('varna-fine_dining-2', 'varna', 'fine_dining', 'Staria Chinar Cherno More', 'bul. "Slivnitsa" 33, 9000 Varna', '바르나에 여러 지점을 둔 불가리아 요리 레스토랑의 체르노 모레 지점.', 'Cherno More branch of a Bulgarian restaurant with several locations in Varna.'),
  place('varna-fine_dining-3', 'varna', 'fine_dining', 'El Kapan', 'Kraybrezhna Aleya, Severni Morski Bani, 9000 Varna', '북쪽 해수욕장(세베르니 모르스키 바니) 해변 산책로의 카리브풍 레스토랑. 해산물·꼬치 요리와 칵테일을 냅니다.', 'Caribbean-themed restaurant on the North Sea Baths beach promenade, serving seafood, skewers and cocktails.'),
  place('varna-cafe-1', 'varna', 'cafe', 'The Social Teahouse', 'ul. Preslav 53, 9000 Varna', '보호시설을 떠난 청년들을 고용하는 사회적 기업 찻집. 옛 주택 1층에 30여 가지 차와 레모네이드.', 'Social-enterprise teahouse employing young people leaving foster care; 30+ teas and lemonades in a historic house.'),
  place('varna-cafe-2', 'varna', 'cafe', 'Wholehearted Cafe', 'ul. "Tsaribrod" 29, 9000 Varna', '북유럽풍 미니멀 카페. 스페셜티 커피와 채식 메뉴, 노트북 작업하기 좋은 곳.', 'Minimalist Scandinavian-style cafe with specialty coffee, vegetarian options and room for laptops.'),
  place('varna-cafe-3', 'varna', 'cafe', 'Samba Coffee/HQ', 'ul. "Preslav" 25, 9000 Varna', '기차역 근처 보행자 거리의 카페. 테라스와 브라질식 디저트.', 'Cafe on a pedestrian street near the station, with a terrace and Brazilian desserts.'),

  // —— veliko-tarnovo ——
  place('veliko-tarnovo-fine_dining-2', 'veliko-tarnovo', 'fine_dining', 'Shtastliveca', 'ul. "Stefan Stambolov" 79, Veliko Tarnovo 5000', '구시가지 스테판 스탐볼로프 거리의 레스토랑. 강 쪽 테라스석은 예약을 권합니다.', 'Old-town restaurant on Stefan Stambolov Street; book ahead for the terrace.'),
  place('veliko-tarnovo-fine_dining-3', 'veliko-tarnovo', 'fine_dining', 'Restaurant Asenevtsi', 'ul. "Alexander Stamboliyski" 7, Veliko Tarnovo 5000', '벨리코 터르노보의 레스토랑.', 'Restaurant in Veliko Tarnovo.'),
  place('veliko-tarnovo-cafe-2', 'veliko-tarnovo', 'cafe', 'Samurai Coffee Shop', 'ul. "Stefan Stambolov" 38, Veliko Tarnovo 5000', '스테판 스탐볼로프 거리의 스페셜티 커피 전문점.', 'Specialty coffee shop on Stefan Stambolov Street.'),

  // —— nessebar ——
  place('nessebar-fine_dining-1', 'nessebar', 'fine_dining', 'Old Nessebar', 'Ivan Alexander 11, Nessebar 8230', '구시가의 해산물 레스토랑.', 'Seafood restaurant in the old town.'),

  place('nessebar-cafe-2', 'nessebar', 'cafe', 'Retro Cafe', 'ul. "Han Krum" 22, Nessebar 8230', '신시가의 카페. 라테와 편안한 분위기.', 'Cafe in the new town with lattes and a relaxed atmosphere.'),
]
