import { place } from './placeFactory'
import type { Place } from '../types'

export const placesATExtra: Place[] = [
  // —— vienna ——
  place('vienna-fine_dining-1', 'vienna', 'fine_dining', 'Steirereck', 4.7, 'Am Heumarkt 2A, Vienna', '도나우 운하변 미슐랭 파인 다이닝.', 'Canal-side Michelin fine dining.', { reviewCount: 2100 }),
  place('vienna-fine_dining-2', 'vienna', 'fine_dining', 'Restaurant TIAN', 4.6, 'Himmelpfortgasse 23, Vienna', '채식 파인 다이닝.', 'Vegetarian fine dining.', { reviewCount: 980 }),
  place('vienna-fine_dining-3', 'vienna', 'fine_dining', 'Mraz & Sohn', 4.6, 'Wachstumsgasse, Vienna', '창의 코스 다이닝.', 'Creative tasting menus.', { reviewCount: 720 }),
  place('vienna-fine_dining-4', 'vienna', 'fine_dining', 'Plachutta Wollzeile', 4.5, 'Wollzeile 38, Vienna', '타펠슈피츠 클래식.', 'Classic Tafelspitz.', { reviewCount: 4800 }),
  place('vienna-fine_dining-5', 'vienna', 'fine_dining', 'Figlmüller', 4.4, 'Wollzeile 5, Vienna', '슈니첼의 대명사.', 'Iconic Wiener Schnitzel.', { reviewCount: 12000 }),
  place('vienna-bakery-1', 'vienna', 'bakery', 'Ströck', 4.4, 'Vienna', '비엔나 빵·페이스트리 체인.', 'Vienna bread and pastry chain.', { reviewCount: 3200 }),
  place('vienna-bakery-2', 'vienna', 'bakery', 'Der Mann', 4.3, 'Vienna', '로컬 베이커리.', 'Local bakery.', { reviewCount: 2100 }),
  place('vienna-bakery-3', 'vienna', 'bakery', 'Demel', 4.5, 'Kohlmarkt 14, Vienna', '황실 페이스트리 숍.', 'Imperial pastry shop.', { reviewCount: 8600 }),
  place('vienna-bakery-4', 'vienna', 'bakery', 'Gragger & Cie', 4.5, 'Vienna', '사워도우 베이커리.', 'Sourdough bakery.', { reviewCount: 1400 }),
  place('vienna-cafe-1', 'vienna', 'cafe', 'Café Central', 4.5, 'Herrengasse 14, Vienna', '클래식 카페하우스.', 'Classic coffee house.', { reviewCount: 18000 }),
  place('vienna-cafe-2', 'vienna', 'cafe', 'Café Sacher', 4.4, 'Philharmoniker Str. 4, Vienna', '자허토르테의 본거지.', 'Home of the Sachertorte.', { reviewCount: 14000 }),
  place('vienna-cafe-3', 'vienna', 'cafe', 'Café Hawelka', 4.4, 'Dorotheergasse 6, Vienna', '예술가들의 카페.', 'Artists’ café.', { reviewCount: 6200 }),
  place('vienna-cafe-4', 'vienna', 'cafe', 'Balthasar Kaffee Bar', 4.6, 'Vienna', '스페셜티 커피.', 'Specialty coffee.', { reviewCount: 1800 }),
  place('vienna-korean-1', 'vienna', 'korean', 'Yori', 4.5, 'Wiesingerstraße 8, 1010 Wien', '빈 시내의 정통 한식당.', 'Authentic Korean dining in central Vienna.'),

  // —— salzburg ——
  place('salzburg-fine_dining-1', 'salzburg', 'fine_dining', 'Esszimmer', 4.6, 'Müllner Hauptstraße 33, 5020 Salzburg', '미쉐린 1스타 레스토랑.', 'One-Michelin-star restaurant.'),

  // —— innsbruck ——
  place('innsbruck-fine_dining-1', 'innsbruck', 'fine_dining', 'Ottoburg', 4.5, 'Herzog-Friedrich-Straße 1, 6020 Innsbruck', '구시가 최고 전망의 레스토랑.', 'Restaurant with the Old Town\'s best views.'),

  // —— graz ——
  place('graz-fine_dining-1', 'graz', 'fine_dining', 'Artis', 4.5, 'Schmiedgasse 20, 8010 Graz', '미쉐린 가이드 등재 레스토랑.', 'Michelin Guide-listed restaurant.'),

  // —— hallstatt ——
  place('hallstatt-fine_dining-1', 'hallstatt', 'fine_dining', 'Bräugasthof', 4.5, 'Salzbergstraße 1, 4830 Hallstatt', '호수 전망의 전통 오스트리아 요리.', 'Traditional Austrian dishes with lake views.'),

]
