import { place } from './placeFactory'
import type { Place } from '../types'

export const placesSMExtra: Place[] = [
  // —— san-marino-city ——
  place('san-marino-city-fine_dining-2', 'san-marino-city', 'fine_dining', 'La Terrazza', 'Contrada del Collegio 31, 47890 San Marino City, San Marino', '호텔 티타노 안의 레스토랑. 중앙 광장이 내려다보입니다.', 'Restaurant in the Hotel Titano overlooking the main square.'),
  place('san-marino-city-cafe-1', 'san-marino-city', 'cafe', 'Caffè Titano', 'Piazzetta del Titano 4, 47890 San Marino Città, San Marino', '산마리노 구시가 중심의 카페 겸 스낵 바.', 'Café and snack bar in the heart of San Marino’s old town.'),

  // —— borgo-maggiore ——

  place('borgo-maggiore-cafe-1', 'borgo-maggiore', 'cafe', 'Funivia Caffè', 'Piazzale Campo della Fiera 2, 47893 Borgo Maggiore, San Marino', '케이블카 정류장 옆에 위치한 보르고 마조레의 아늑한 카페', 'Cozy Borgo Maggiore cafe right next to the cable car station'),

  // —— san-marino-city: restaurants, bakeries and cafés (2026-11-20) ——
  place('san-marino-city-fine_dining-3', 'san-marino-city', 'fine_dining', 'Ristorante Bolognese', 'Via Basilicius 28, 47890 Città di San Marino, San Marino', '구시가 산 프란체스코 문 근처의 북부 이탈리아 요리 식당. 구글 지도 평점 4.5.', 'Northern Italian restaurant near the San Francesco gate in the old town. Rated 4.5 on Google Maps.'),
  place('san-marino-city-fine_dining-4', 'san-marino-city', 'fine_dining', 'Ristorante del Ghetto da Ottavio', 'Contrada Santa Croce 29, 47890 Città di San Marino, San Marino', '구시가 골목 안의 북부 이탈리아 요리 식당. 구글 지도 평점 4.5.', 'Northern Italian restaurant in an old-town lane. Rated 4.5 on Google Maps.'),
  place('san-marino-city-fine_dining-5', 'san-marino-city', 'fine_dining', 'Ristorante Il Beccafico', 'Salita alla Rocca 19, 47890 Città di San Marino, San Marino', '제1탑으로 오르는 길가의 북부 이탈리아 요리 식당. 구글 지도 평점 4.4.', 'Northern Italian restaurant on the lane up to the First Tower. Rated 4.4 on Google Maps.'),
  place('san-marino-city-fine_dining-6', 'san-marino-city', 'fine_dining', 'Ritrovo dei Lavoratori XXVIII Luglio', 'Via Androne dei Bastioni 4, 47890 Città di San Marino, San Marino', '구시가 성벽 쪽의 북부 이탈리아 요리 식당. 구글 지도 평점 4.4.', 'Northern Italian restaurant by the old-town walls. Rated 4.4 on Google Maps.'),
  place('san-marino-city-cafe-2', 'san-marino-city', 'cafe', 'Caffetteria Gelateria Janice', 'Via Gino Giacomini 122, 47890 Città di San Marino, San Marino', '구시가 아래 무라타 쪽의 카페 겸 젤라테리아. 구글 지도 평점 4.5.', 'Café and gelateria below the old town towards Murata. Rated 4.5 on Google Maps.'),
  place('san-marino-city-cafe-3', 'san-marino-city', 'cafe', 'DoDà Caffè', 'Salita alla Rocca 35, 47890 Città di San Marino, San Marino', '제1탑으로 오르는 길가의 카페. 구글 지도 평점 4.4.', 'Café on the lane up to the First Tower. Rated 4.4 on Google Maps.'),

  // —— borgo-maggiore: restaurants, bakeries and cafés (2026-11-20) ——
  place('borgo-maggiore-fine_dining-1', 'borgo-maggiore', 'fine_dining', 'Hostaria Da Lino', 'Piazza Grande 47, 47893 Borgo Maggiore, San Marino', '그란데 광장의 객실을 갖춘 식당. 구글 지도 평점 4.4.', 'Restaurant with rooms on Piazza Grande. Rated 4.4 on Google Maps.'),
  place('borgo-maggiore-fine_dining-2', 'borgo-maggiore', 'fine_dining', 'Da Giulio Osteria', 'Via Decima Gualdaria 124, 47893 Borgo Maggiore, San Marino', '보르고 마조레 북쪽 소르보의 오스테리아. 구글 지도 평점 4.7.', 'Osteria in Sorbo, north of Borgo Maggiore. Rated 4.7 on Google Maps.'),
  place('borgo-maggiore-fine_dining-3', 'borgo-maggiore', 'fine_dining', 'La Vecchia Fonte', 'Via Brandolina 67, 47893 Borgo Maggiore, San Marino', '보르고 마조레 브란돌리나의 식당. 구글 지도 평점 4.3.', 'Restaurant in Brandolina, Borgo Maggiore. Rated 4.3 on Google Maps.'),
  place('borgo-maggiore-fine_dining-4', 'borgo-maggiore', 'fine_dining', 'Antica Trattoria Ugolini dal 1960', 'Strada Sottomontana 37, 47893 Borgo Maggiore, San Marino', '1960년부터 이어 온 티타노산 기슭의 북부 이탈리아 요리 트라토리아. 구글 지도 평점 4.3.', 'Northern Italian trattoria at the foot of Mount Titano, running since 1960. Rated 4.3 on Google Maps.'),
  place('borgo-maggiore-bakery-1', 'borgo-maggiore', 'bakery', 'Lyuke Bakery', 'Via Ca\' Carlo 6, 47893 Borgo Maggiore, San Marino', '보르고 마조레 카이룬고의 빵·과자 가게. 구글 지도 평점 4.5.', 'Bakery and pastry shop in Cailungo, Borgo Maggiore. Rated 4.5 on Google Maps.'),
  place('borgo-maggiore-bakery-2', 'borgo-maggiore', 'bakery', 'Pasticceria Patrizia dal 1980', 'Via Ca\' dei Lunghi 14, 47893 Borgo Maggiore, San Marino', '1980년 문을 연 카이룬고의 과자점. 구글 지도 평점 4.5.', 'Pastry shop in Cailungo, open since 1980. Rated 4.5 on Google Maps.'),

  // —— serravalle: restaurants, bakeries and cafés (2026-11-20) ——
  place('serravalle-fine_dining-1', 'serravalle', 'fine_dining', 'Il Castello - Osteria Gourmet', 'Via Elisabetta da Montefeltro 7, 47899 Serravalle, San Marino', '세라발레 옛 마을 안의 오스테리아. 구글 지도 평점 4.9.', 'Osteria in Serravalle’s old hilltop village. Rated 4.9 on Google Maps.'),
  place('serravalle-fine_dining-2', 'serravalle', 'fine_dining', 'Il Matterello', 'Via Consiglio dei Sessanta 150, 47891 Dogana, San Marino', '도가나의 식당. 구글 지도 평점 4.7.', 'Restaurant in Dogana. Rated 4.7 on Google Maps.'),
  place('serravalle-fine_dining-3', 'serravalle', 'fine_dining', 'Ristorante Terrablu', 'Via Tre Settembre 65, 47891 Dogana, San Marino', '도가나 큰길가 호텔 도가나 안의 식당. 구글 지도 평점 4.6.', 'Restaurant in the Hotel Dogana on the main road. Rated 4.6 on Google Maps.'),
  place('serravalle-fine_dining-4', 'serravalle', 'fine_dining', 'La Salumeria - Bottega, Cucina e Cocktail', 'Piazza Enriquez 14, 47891 Dogana, San Marino', '도가나 엔리케스 광장의 식료품점 겸 식당·칵테일 바. 구글 지도 평점 4.4.', 'Deli, kitchen and cocktail bar on Piazza Enriquez in Dogana. Rated 4.4 on Google Maps.'),
  place('serravalle-bakery-1', 'serravalle', 'bakery', 'Bar Pasticceria Pan di Zucchero', 'Via Antonio Canova 1, 47891 Dogana, San Marino', '도가나의 바 겸 과자점. 구글 지도 평점 4.7.', 'Bar and pastry shop in Dogana. Rated 4.7 on Google Maps.'),
  place('serravalle-bakery-2', 'serravalle', 'bakery', 'La Baguette', 'Via Lorenzo de\' Medici 4, 47899 Serravalle, San Marino', '세라발레 옛 마을 근처의 과자점. 구글 지도 평점 4.7.', 'Pastry shop near Serravalle’s old village. Rated 4.7 on Google Maps.'),
  place('serravalle-cafe-1', 'serravalle', 'cafe', 'SEM Share Eat Meet', 'Via Cesare Cantù 104, 47891 Dogana, San Marino', '도가나의 카페. 구글 지도 평점 4.6.', 'Café in Dogana. Rated 4.6 on Google Maps.'),
  place('serravalle-cafe-2', 'serravalle', 'cafe', 'Bar Cappuccino', 'Via IV Giugno 106, 47899 Serravalle, San Marino', '세라발레의 카페 바. 구글 지도 평점 4.5.', 'Café-bar in Serravalle. Rated 4.5 on Google Maps.'),
]
