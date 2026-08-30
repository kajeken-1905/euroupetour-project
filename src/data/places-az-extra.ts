import { place } from './placeFactory'
import type { Place } from '../types'

export const placesAZExtra: Place[] = [
  // —— baku ——
  place('baku-fine_dining-1', 'baku', 'fine_dining', 'Nergiz Restaurant', 4.5, 'Fountain Square, 9 Tərlan Əliyarbəyov, Bakı 1000', '정통 아제르바이잔 요리.', 'Authentic Azerbaijani cuisine.'),
  place('baku-bakery-1', 'baku', 'bakery', 'Entrée', 4.5, 'Dilara Aliyeva küçəsi, Baku, Azerbaijan', '바쿠 전역에 지점을 둔 인기 베이커리 카페 체인, 크루아상으로 유명', 'Popular bakery café chain across Baku, known for its croissants'),
  place('baku-cafe-1', 'baku', 'cafe', 'Bubu Cafe', 4.4, 'Baku, Azerbaijan', '한국인 셰프가 매일 신선한 디저트를 만드는 바쿠의 카페', 'Cozy café in Baku where a Korean chef crafts fresh desserts daily'),

  // —— sheki ——
  place('sheki-fine_dining-1', 'sheki', 'fine_dining', 'M.E. Restaurant', 4.4, 'Rasulzade Street 187, Sheki 5500', '셰키의 대표 레스토랑.', 'Leading restaurant in Sheki.'),
  place('sheki-bakery-1', 'sheki', 'bakery', 'Karbala\'I Sadiq\'s Bakery', 4.4, 'Sheki, Azerbaijan', '셰키 칸 궁전으로 향하는 길목의 전통 빵집', 'Traditional bread bakery on the main street toward the Khan\'s Palace'),
  place('sheki-cafe-1', 'sheki', 'cafe', 'Café Sheki', 4.4, 'Sheki, Azerbaijan', '지역 재료로 만든 홈메이드 페이스트리가 유명한 셰키의 카페', 'Café in central Sheki known for homemade pastries made from local ingredients'),

  // —— gabala ——
  place('gabala-fine_dining-1', 'gabala', 'fine_dining', 'Caspian Baliq Evi', 4.4, '2120 Demiraparan Chai Gabala, Qəbələ', '가발란드 인근 해산물 레스토랑.', 'Seafood restaurant near Gabaland.'),

  place('gabala-bakery-1', 'gabala', 'bakery', 'Pakhlava Boutique', 4.4, 'Gabala, Azerbaijan', '전통 아제르바이잔 파클라바를 전문으로 하는 가발라의 디저트 숍', 'Dessert shop in Gabala specializing in traditional Azerbaijani pakhlava'),
  place('gabala-cafe-1', 'gabala', 'cafe', 'Gabala Cafe', 4.3, 'Qafqaz Tufandag Mountain Resort Hotel, Gabala 3600, Azerbaijan', '해발 1600m 케이블카 정상에서 즐기는 가발라의 전망 카페', 'Mountain-top café at 1,600m reached by cable car, with coffee and desserts'),
]
