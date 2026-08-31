import { place } from './placeFactory'
import type { Place } from '../types'

export const placesUAExtra: Place[] = [
  // —— kyiv ——
  place('kyiv-fine_dining-1', 'kyiv', 'fine_dining', 'Mirali', 4.6, 'Tarasa Shevchenko Blvd 1, Kyiv, 01004, Ukraine', '포딜 지구에 위치한 우크라이나 계절 식재료를 활용한 창의적인 파인다이닝', 'Fine-dining restaurant in the Podil district celebrating Ukrainian seasonal and local ingredients with innovative gastronomy'),
  place('kyiv-bakery-1', 'kyiv', 'bakery', 'Wolkonsky', 4.5, '26б Velyka Zhytomyrska St, Kyiv, Ukraine, 04053', '프랑스와 우크라이나 제과 전통을 결합한 키이우의 대표 파티스리 카페', 'Kyiv\'s leading patisserie cafe blending French and Ukrainian pastry traditions'),
  place('kyiv-cafe-1', 'kyiv', 'cafe', 'Come and Stay', 4.6, 'Velyka Vasylkivska St 23B, Kyiv, Ukraine, 02000', '다양한 필터 커피와 에스프레소로 사랑받는 키이우 최고의 커피숍 중 하나', 'One of Kyiv\'s most consistently top-rated coffee shops, known for its filter coffee and espresso drinks'),

  // —— lviv ——
  place('lviv-fine_dining-1', 'lviv', 'fine_dining', 'Amadeus', 4.5, 'Yana Mateika St 6, Lviv, 79000, Ukraine', '리비우 중심가의 옛 오스트리아풍 인테리어가 돋보이는 유서 깊은 레스토랑', 'Renowned restaurant in the heart of Lviv with an atmospheric Old Austrian-style interior'),
  place('lviv-bakery-1', 'lviv', 'bakery', 'Cheese Bakery', 4.5, '120 Shevchenka St, Lviv, Ukraine', '우크라이나식 치즈케이크 시르니크로 유명한 리비우의 베이커리', 'Lviv bakery known for syrnyk, a Ukrainian cheesecake-like specialty'),
  place('lviv-cafe-1', 'lviv', 'cafe', 'Svit Kavy', 4.6, 'Katedralna Square 6, 79029 Lviv, Ukraine', '대성당 광장에 위치한 3층 규모의 리비우 대표 커피하우스', 'Three-story landmark Lviv coffee house overlooking the cathedral square'),

  // —— odesa ——
  place('odesa-fine_dining-1', 'odesa', 'fine_dining', 'Bernardazzi', 4.7, 'Deribasivska St 20, Odesa, 65026, Ukraine', '오데사 최고급 레스토랑으로 꼽히는 아르누보 양식의 이탈리안 레스토랑', 'Widely regarded as Odesa\'s finest restaurant, an upscale Italian dining room in an authentic Art Nouveau setting'),

  place('odesa-bakery-1', 'odesa', 'bakery', 'FAB Bakery', 4.6, 'Kiry Muratovoi St 3, Odesa, Ukraine, 65000', '2020년부터 사랑받아 온 오데사의 인기 베이커리, 치즈케이크로 유명', 'Beloved Odesa bakery since 2020, known for its heavenly cheesecakes'),
  place('odesa-cafe-1', 'odesa', 'cafe', 'Foundation Coffee Roasters', 4.7, 'Zhukovskogo St 19, Odesa, Ukraine, 65026', '우크라이나 최고의 로스터리 중 하나로 꼽히는 오데사의 커피숍', 'Odesa coffee shop widely regarded as one of the best coffee roasters in Ukraine'),
]
