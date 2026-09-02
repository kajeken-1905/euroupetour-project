import { place } from './placeFactory'
import type { Place } from '../types'

export const placesFIExtra: Place[] = [
  // —— turku ——
  place('turku-fine_dining-1', 'turku', 'fine_dining', 'Restaurant Smör', 4.3, 'Läntinen Rantakatu 3, 20100 Turku', '투르쿠 대성당 맞은편, 북유럽 계절 요리.', 'Nordic seasonal cuisine opposite Turku Cathedral.', { reviewCount: 288 }),
  place('turku-fine_dining-2', 'turku', 'fine_dining', 'Ravintola Kaskis', 4.6, 'Kaskenkatu 6 a, 20700 Turku', '미슐랭 1스타, 야생·채집 핀란드 식재료 코스.', 'One-Michelin-star tasting menu built on wild and foraged Finnish ingredients.', { reviewCount: 424 }),
  place('turku-fine_dining-3', 'turku', 'fine_dining', 'Pinella', 4.0, 'Vanha Suurtori 2, 20500 Turku', '아우라 강변의 역사적 건물 레스토랑·바.', 'Restaurant and bar in a historic riverside building.'),
  place('turku-fine_dining-4', 'turku', 'fine_dining', 'Viikinkiravintola Harald', 4.1, 'Aurakatu 3, 20100 Turku', '바이킹 테마의 북유럽 요리 레스토랑.', 'Viking-themed restaurant serving Nordic cuisine.', { reviewCount: 466 }),
  place('turku-fine_dining-5', 'turku', 'fine_dining', 'Restaurant Kakolanruusu', 4.1, 'Graniittilinnankatu 2, 20100 Turku', '옛 카콜라 교도소 부지의 독특한 레스토랑.', "Unique restaurant set in the former Kakola prison grounds."),
  place('turku-bakery-1', 'turku', 'bakery', 'Fazer Café Aurakatu', 3.9, 'Aurakatu 10, 20100 Turku', '파제르의 케이크·페이스트리 카페.', "Fazer's café for cakes and pastries."),
  place('turku-cafe-1', 'turku', 'cafe', 'Café Art', 4.4, 'Aura riverside, Turku', '아우라 강변의 아트 카페, 시나몬롤로 유명.', 'Riverside art café on the Aura, famous for cinnamon buns.'),
  place('turku-cafe-2', 'turku', 'cafe', 'Frukt Coffee Roasters', 4.8, 'Graniittilinnankatu 2 k, 20100 Turku', '핀란드 최고 수준의 라이트 로스트 스페셜티 커피 로스터리.', "One of Finland's top light-roast specialty coffee roasters.", { reviewCount: 78 }),
  place('turku-korean-1', 'turku', 'korean', 'Seoul Good Skanssi', 4.6, 'Skanssinkatu 10, 20730 Turku', '한국식 프라이드치킨 뷔페.', 'Korean fried chicken buffet.'),
  place('turku-korean-2', 'turku', 'korean', 'Yummy Korean Turku', 4.4, 'Hämeenkatu 10, 20500 Turku', '아우라 강변의 한국식 프라이드치킨 뷔페.', 'Korean fried chicken buffet by the Aura River.', { reviewCount: 52 }),

  // —— tampere ——
  place('tampere-fine_dining-1', 'tampere', 'fine_dining', 'Kajo', 4.5, 'Rautatienkatu 12, Tampere', '미슐랭 가이드 등재, 계절 핀란드 식재료 코스.', "Michelin Guide-listed, seasonal Finnish tasting menu.", { reviewCount: 500 }),
  place('tampere-fine_dining-2', 'tampere', 'fine_dining', 'Bertha', 4.5, 'Rautatienkatu 14, Tampere', '기차역 인근의 아늑한 파인 다이닝.', "Intimate fine dining near the railway station."),
  place('tampere-fine_dining-3', 'tampere', 'fine_dining', 'Tiiliholvi', 4.1, 'Kauppakatu 10, 33210 Tampere', '1968년부터 이어온 아르누보 건물의 핀란드 요리.', "Finnish haute cuisine in an Art Nouveau building since 1968."),
  place('tampere-fine_dining-4', 'tampere', 'fine_dining', 'Restaurant Henriks', 4.4, 'Satamakatu 7, Tampere', '1986년부터 이어온 가족 운영 레스토랑.', "Family-run restaurant operating since 1986."),
  place('tampere-bakery-1', 'tampere', 'bakery', 'Pyynikin Näkötornin Kahvila', 4.4, 'Näkötornintie 20, 33230 Tampere', '퓌니키 전망탑의 명물 도넛 카페.', "Famous doughnut café inside Pyynikki observation tower.", { reviewCount: 2000 }),
  place('tampere-cafe-1', 'tampere', 'cafe', 'Café Europa', 4.2, 'Aleksanterinkatu 29, Tampere', '1996년부터 이어온 남유럽풍 카페.', "South-European-inspired café operating since 1996.", { reviewCount: 70 }),
  place('tampere-korean-1', 'tampere', 'korean', 'Oppa Korean BBQ Tampere', 4.7, 'Kuninkaankatu 14-16, 33210 Tampere', '테이블에서 직접 굽는 한국식 바베큐.', 'Korean BBQ grilled tableside.'),
  place('tampere-korean-2', 'tampere', 'korean', 'Han Guk Tampere', 4.7, 'Puutarhakatu 12, Tampere', '정통 한식당.', 'Authentic Korean restaurant.'),
  place('tampere-korean-3', 'tampere', 'korean', 'Yummy Korean Tampere', 4.4, 'Hämeenkatu 10, Tampere', '한국식 프라이드치킨 뷔페.', 'Korean fried chicken buffet.', { reviewCount: 30 }),

  // —— rovaniemi ——
  place('rovaniemi-fine_dining-1', 'rovaniemi', 'fine_dining', 'Ravintola Roka - Street Bistro', 4.6, 'Ainonkatu 3, 96200 Rovaniemi', '이탈리안·라플란드 퓨전 비스트로.', 'Bistro blending Italian and Lappish influences.'),
  place('rovaniemi-fine_dining-2', 'rovaniemi', 'fine_dining', 'Restaurant Nili', 4.3, 'Valtakatu 20, Rovaniemi', '순록·연어 등 전통 라플란드 요리.', 'Traditional Lapland cuisine — reindeer, salmon and more.'),
  place('rovaniemi-fine_dining-3', 'rovaniemi', 'fine_dining', 'Kauppayhtiö', 4.4, 'Valtakatu 24, 96200 Rovaniemi', '로바니에미 중심가의 버거·바 음식점.', "Bar-food restaurant in central Rovaniemi, known for burgers."),
  place('rovaniemi-bakery-1', 'rovaniemi', 'bakery', 'Kahvila Konditoria Antinkaapo', 4.5, 'Rovakatu 13, 96100 Rovaniemi', '1984년부터 이어온 로바니에미의 전통 제과점.', 'Traditional bakery serving Rovaniemi since 1984.'),
  place('rovaniemi-cafe-1', 'rovaniemi', 'cafe', 'Arktikum Café', 3.9, 'Arktikum, Rovaniemi', '북극 박물관 내 카페, 가성비 점심 뷔페.', 'Café inside the Arktikum museum with a good-value lunch buffet.'),
  place('rovaniemi-korean-1', 'rovaniemi', 'korean', 'Hanki', 4.9, 'Korkalonkatu 2, 96100 Rovaniemi', '한식과 라플란드 식재료를 결합한 독창적인 레스토랑.', 'Restaurant blending Korean cuisine with Lappish ingredients.'),

  // —— porvoo ——
  place('porvoo-fine_dining-1', 'porvoo', 'fine_dining', 'Restaurant VÅR', 4.7, 'Papinkatu 17, 06100 Porvoo', '1920년대 초콜릿 공장 건물의 미슐랭 1스타·그린스타 레스토랑.', 'One-Michelin-star, Green Star restaurant in a 1920s former chocolate factory.', { reviewCount: 141 }),
  place('porvoo-fine_dining-2', 'porvoo', 'fine_dining', 'Bistro Sinne', 4.2, 'Läntinen Aleksanterinkatu 1, 06100 Porvoo', '로컬 식재료를 사용하는 노르딕 비스트로.', 'Nordic bistro using local ingredients.', { reviewCount: 325 }),
  place('porvoo-fine_dining-3', 'porvoo', 'fine_dining', 'Wanha Laamanni', 4.1, 'Vuorikatu 17, 06100 Porvoo', '구시가 18세기 통나무 건물의 30년 전통 레스토랑.', 'Restaurant in an 18th-century log building in the Old Town, operating for 30+ years.'),
  place('porvoo-bakery-1', 'porvoo', 'bakery', 'Brunberg Old Town Shop', 4.1, 'Välikatu 4, 06100 Porvoo', '포르보 대표 초콜릿·사탕 브랜드의 구시가 매장.', "Old Town shop of Porvoo's iconic chocolate and candy brand."),
  place('porvoo-cafe-1', 'porvoo', 'cafe', 'Porvoon Paahtimo Bar & Café', 4.4, 'Mannerheiminkatu 2, 06100 Porvoo', '1902년 건물의 강변 카페, 자체 커피 로스터리.', 'Riverside café in an 1902 building with its own coffee roastery.'),
  place('porvoo-cafe-2', 'porvoo', 'cafe', 'Café Fanny', 4.4, 'Välikatu 13, 06100 Porvoo', '루네베리 케이크로 유명한 구시가 카페.', "Old Town café known for Runeberg's cake."),
  place('porvoo-korean-1', 'porvoo', 'korean', 'Kimchi Korean Kitchen', 4.6, 'Pormestrinkatu 14, 06100 Porvoo', '신선한 재료로 만드는 한식당.', 'Korean restaurant known for fresh, well-made dishes.', { reviewCount: 32 }),

]
