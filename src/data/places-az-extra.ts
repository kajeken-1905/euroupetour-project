import { place } from './placeFactory'
import type { Place } from '../types'

export const placesAZExtra: Place[] = [
  // —— baku ——
  place('baku-fine_dining-1', 'baku', 'fine_dining', 'Nergiz Restaurant', 4.5, 'Fountain Square, 9 Tərlan Əliyarbəyov, Bakı 1000', '정통 아제르바이잔 요리.', 'Authentic Azerbaijani cuisine.'),
  place('baku-fine_dining-2', 'baku', 'fine_dining', 'Sumakh', 5.0, '22 Khojaly Avenue, Baku', '오래된 아제르바이잔 전통 요리 레스토랑, 현지 유명 인사들의 단골집', 'Long-established Azerbaijani national cuisine restaurant, a favorite gathering spot in Baku', { reviewCount: 153 }),
  place('baku-fine_dining-3', 'baku', 'fine_dining', 'Dolma Restaurant', 5.0, '12F Mammad Amin Rasulzade Street, Baku', '올드 바쿠풍 인테리어의 가족 운영 아제르바이잔·유럽 레스토랑', 'Family-run Azerbaijani-European restaurant with an old-Baku-themed interior', { reviewCount: 879 }),
  place('baku-fine_dining-4', 'baku', 'fine_dining', 'Mugam Club & Restaurant', 4.9, '46 Asef Zeynalli Street, Baku', '옛 대상 숙소(카라반사라이)를 개조한 곳, 전통 무감 음악 공연과 아제르바이잔 요리', 'Azerbaijani restaurant in a converted historic caravanserai with live traditional mugam music', { reviewCount: 55 }),

  place('baku-bakery-1', 'baku', 'bakery', 'Entrée', 4.5, 'Dilara Aliyeva küçəsi, Baku, Azerbaijan', '바쿠 전역에 지점을 둔 인기 베이커리 카페 체인, 크루아상으로 유명', 'Popular bakery café chain across Baku, known for its croissants'),
  place('baku-bakery-2', 'baku', 'bakery', 'AZZA Cake House', 4.7, '53F Resid Behbudov Street, Baku', '케이크와 디저트 전문 베이커리', 'Confectionery specializing in cakes and desserts', { reviewCount: 19 }),
  place('baku-bakery-3', 'baku', 'bakery', 'Paul Bakery', 4.9, '151 Neftchilar Avenue, Baku', '포트 바쿠 인근의 프랑스 베이커리 체인, 크루아상·에클레어로 유명', 'French bakery chain branch near Port Baku, known for croissants and éclairs', { reviewCount: 39 }),

  place('baku-cafe-1', 'baku', 'cafe', 'Bubu Cafe', 4.4, '30 Sahib Zeynalov Street, Baku', '한국인 셰프가 매일 신선한 디저트를 만드는 바쿠의 카페 겸 베이커리', 'Cozy café and bakery in Baku where a Korean chef crafts fresh desserts daily'),
  place('baku-cafe-2', 'baku', 'cafe', 'CafeCity Ağ Şəhər', 4.6, '7C Xaqani Rustəmov Street, White City, Baku', '화이트 시티 지구의 카페 겸 레스토랑', 'Café and restaurant in the White City district', { reviewCount: 39 }),
  place('baku-cafe-3', 'baku', 'cafe', 'Baku Cafe', 4.4, '153 Neftchilar Avenue, Baku', '포트 바쿠 인근의 카페 겸 레스토랑', 'Café and restaurant near Port Baku', { reviewCount: 47 }),

  place('baku-korean-1', 'baku', 'korean', 'Wooga Korean Steakhouse', 4.8, '50G 2nd Street Yashyl Ada, Baku', '바쿠의 한식 스테이크하우스', 'Korean steakhouse restaurant in Baku', { reviewCount: 22 }),

  // —— sheki ——
  place('sheki-fine_dining-1', 'sheki', 'fine_dining', 'M.E. Restaurant', 4.4, 'Rasulzade Street 187, Sheki 5500', '셰키의 대표 레스토랑.', 'Leading restaurant in Sheki.'),
  place('sheki-fine_dining-2', 'sheki', 'fine_dining', 'Serin Restoranı', 4.8, 'İzzət Həmidov küçəsi, Sheki', '셰키에서 가장 평이 좋은 레스토랑', "Sheki's top-rated restaurant", { reviewCount: 112 }),

  place('sheki-bakery-1', 'sheki', 'bakery', 'Karbala\'I Sadiq\'s Bakery', 4.4, 'Sheki, Azerbaijan', '셰키 칸 궁전으로 향하는 길목의 전통 빵집', 'Traditional bread bakery on the main street toward the Khan\'s Palace'),

  place('sheki-cafe-1', 'sheki', 'cafe', 'Espresso House', 4.9, 'Mirza Fatali Akhundzade Avenue, Sheki', '셰키 구시가지 인근의 커피 전문 카페', 'Coffee-focused café near Sheki\'s old town', { reviewCount: 20 }),
  place('sheki-cafe-2', 'sheki', 'cafe', 'Nuran Cafe', 4.7, 'Mikayil Mushfig Street, Sheki', '아제르바이잔 가정식을 선보이는 정원이 있는 카페', 'Café with a garden serving home-style Azerbaijani dishes', { reviewCount: 3 }),

  // —— gabala ——
  place('gabala-fine_dining-1', 'gabala', 'fine_dining', 'Caspian Baliq Evi', 4.4, '2120 Demiraparan Chai Gabala, Qəbələ', '가발란드 인근 해산물 레스토랑.', 'Seafood restaurant near Gabaland.'),

  place('gabala-bakery-1', 'gabala', 'bakery', 'Pakhlava Boutique', 4.4, 'Near Nohur Lake, Gabala, Azerbaijan', '전통 아제르바이잔 파클라바를 전문으로 하는 가발라의 디저트 숍', 'Dessert shop in Gabala specializing in traditional Azerbaijani pakhlava'),
  place('gabala-cafe-1', 'gabala', 'cafe', 'Gabala Cafe', 4.3, 'Qafqaz Tufandag Cable Car Upper Station (1600m), Tufandag Mountain Resort, Gabala, Azerbaijan', '해발 1600m 케이블카 정상역에서 즐기는 가발라의 전망 카페', 'Mountain-top café at the 1,600m cable car upper station, with coffee and desserts'),
]
