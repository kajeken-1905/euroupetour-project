import { place } from './placeFactory'
import type { Place } from '../types'

export const placesSMExtra: Place[] = [
  // —— san-marino-city ——
  place('san-marino-city-fine_dining-1', 'san-marino-city', 'fine_dining', 'Righi la Taverna', 4.4, 'Piazza della Libertà, 47890 San Marino City, San Marino', '산마리노 자유광장에 위치한 인기 이탈리안 레스토랑', 'Popular Italian restaurant on Piazza della Libertà in the historic center of San Marino City'),
  place('san-marino-city-fine_dining-2', 'san-marino-city', 'fine_dining', 'La Terrazza', 4.4, 'Contrada del Collegio 31, 47890 San Marino City, San Marino', '호텔 티타노 내 레스토랑, 중앙 광장이 내려다보이는 전망으로 유명', 'Restaurant inside Hotel Titano, known for its view overlooking the main square', { reviewCount: 1380 }),
  place('san-marino-city-bakery-1', 'san-marino-city', 'bakery', 'Pasticceria Patrizia dal 1980', 4.5, 'Via Ca\' dei Lunghi 16, 47890 San Marino Città, San Marino', '1980년부터 이어온 산마리노 시티의 전통 파티스리, 다양한 이탈리안 페이스트리로 유명', 'San Marino City patisserie serving since 1980, known for its wide range of Italian pastries'),
  place('san-marino-city-cafe-1', 'san-marino-city', 'cafe', 'Caffè Titano', 4.4, 'Piazzetta del Titano 4, 47890 San Marino Città, San Marino', '산마리노 구시가지 중심에 위치한 명소 카페 겸 스낵바', 'Landmark cafe and snack bar in the heart of San Marino\'s historic center'),

  // —— borgo-maggiore ——
  place('borgo-maggiore-fine_dining-1', 'borgo-maggiore', 'fine_dining', 'L\'Arzdora', 4.3, 'Via XXVIII Luglio, 47895 Borgo Maggiore, San Marino', '정통 이탈리아 요리를 선보이는 보르고 마조레의 신뢰받는 레스토랑', 'Trusted dining venue in Borgo Maggiore serving delectable Italian dishes'),

  place('borgo-maggiore-bakery-1', 'borgo-maggiore', 'bakery', 'Lyuke Bakery', 4.4, 'Via Ca\' Carlo 6, 47890 Cailungo, San Marino', '정교한 웨딩 케이크와 전통·현대 페이스트리로 유명한 보르고 마조레 인근의 모던 베이커리', 'Modern bakery near Borgo Maggiore known for elaborate wedding cakes and traditional and modern pastries'),
  place('borgo-maggiore-cafe-1', 'borgo-maggiore', 'cafe', 'Bar Funivia', 4.3, 'Piazzale Campo della Fiera 2, 47893 Borgo Maggiore, San Marino', '케이블카 정류장 옆에 위치한 보르고 마조레의 아늑한 카페', 'Cozy Borgo Maggiore cafe right next to the cable car station'),
]
