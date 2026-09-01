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
  place('vienna-bakery-5', 'vienna', 'bakery', 'Kurkonditorei Oberlaa', 4.9, 'Neuer Markt 16, 1010 Wien', '빈 전역의 인기 제과점 체인.', 'Popular confiserie chain with multiple Vienna locations.', { reviewCount: 6000 }),
  place('vienna-cafe-1', 'vienna', 'cafe', 'Café Central', 4.5, 'Herrengasse 14, Vienna', '클래식 카페하우스.', 'Classic coffee house.', { reviewCount: 18000 }),
  place('vienna-cafe-2', 'vienna', 'cafe', 'Café Sacher', 4.4, 'Philharmoniker Str. 4, Vienna', '자허토르테의 본거지.', 'Home of the Sachertorte.', { reviewCount: 14000 }),
  place('vienna-cafe-3', 'vienna', 'cafe', 'Café Hawelka', 4.4, 'Dorotheergasse 6, Vienna', '예술가들의 카페.', 'Artists’ café.', { reviewCount: 6200 }),
  place('vienna-cafe-4', 'vienna', 'cafe', 'Balthasar Kaffee Bar', 4.6, 'Vienna', '스페셜티 커피.', 'Specialty coffee.', { reviewCount: 1800 }),
  place('vienna-cafe-5', 'vienna', 'cafe', 'Kaffemik', 4.8, 'Zollergasse 5, 1070 Wien', '7구의 모던 스페셜티 커피.', "Modern specialty coffee in Vienna's 7th district.", { reviewCount: 800 }),
  place('vienna-korean-1', 'vienna', 'korean', 'Yori', 4.5, 'Wiesingerstraße 8, 1010 Wien', '빈 시내의 정통 한식당.', 'Authentic Korean dining in central Vienna.'),
  place('vienna-korean-2', 'vienna', 'korean', 'Vienna Bunsik', 4.6, 'Fasangasse 15, 1030 Wien', '떡볶이·김밥·라면 등 가족 운영 분식.', 'Family-run bunsik counter — tteokbokki, kimbap, ramyeon.', { reviewCount: 200 }),
  place('vienna-korean-3', 'vienna', 'korean', 'Das Kimchi', 4.4, 'Marxergasse 15, 1030 Wien', '가족 운영 정통 한식당.', 'Family-run authentic Korean restaurant.', { reviewCount: 500 }),
  place('vienna-korean-4', 'vienna', 'korean', 'Sang Sang', 4.6, 'Gumpendorferstraße 14, 1060 Wien', '한국식 바베큐와 스시.', 'Korean BBQ and sushi.', { reviewCount: 600 }),
  place('vienna-korean-5', 'vienna', 'korean', 'Gaon', 4.5, 'Apollogasse 20/1, 1070 Wien', '마리아힐퍼 인근의 정통 한식당.', "Authentic Korean restaurant near Mariahilfer Straße.", { reviewCount: 3300 }),

  // —— salzburg ——
  place('salzburg-fine_dining-1', 'salzburg', 'fine_dining', 'Esszimmer', 4.6, 'Müllner Hauptstraße 33, 5020 Salzburg', '미쉐린 1스타 레스토랑.', 'One-Michelin-star restaurant.'),
  place('salzburg-bakery-1', 'salzburg', 'bakery', 'The Bakery by Didi Maier', 4.5, 'Müllner Hauptstraße 4, 5020 Salzburg, Austria', '모던 감성의 잘츠부르크 인기 베이커리 카페', 'Modern, urban bakery café popular in Salzburg'),
  place('salzburg-cafe-1', 'salzburg', 'cafe', 'Café Tomaselli', 4.4, 'Kapitelplatz 8, 5020 Salzburg, Austria', '1703년부터 이어온 잘츠부르크 구시가지의 유서 깊은 커피하우스', 'Historic coffee house in Salzburg\'s old town, serving since 1703'),

  // —— innsbruck ——
  place('innsbruck-fine_dining-1', 'innsbruck', 'fine_dining', 'Ottoburg', 4.5, 'Herzog-Friedrich-Straße 1, 6020 Innsbruck', '구시가 최고 전망의 레스토랑.', 'Restaurant with the Old Town\'s best views.'),
  place('innsbruck-bakery-1', 'innsbruck', 'bakery', 'Joast', 4.5, 'Maria-Theresien-Straße 57, 6020 Innsbruck, Austria', '유기농 재료를 사용하는 인스브루크의 베이커리 카페', 'Organic bakery café on Innsbruck\'s main street'),
  place('innsbruck-cafe-1', 'innsbruck', 'cafe', 'Katzunghaus', 4.4, 'Herzog-Friedrich-Straße 16, 6020 Innsbruck, Austria', '직접 구운 케이크와 슈트루델로 유명한 구시가지 카페', 'Café in the old town known for its own freshly baked cakes and strudels'),

  // —— graz ——
  place('graz-fine_dining-1', 'graz', 'fine_dining', 'Artis', 4.5, 'Schmiedgasse 20, 8010 Graz', '미쉐린 가이드 등재 레스토랑.', 'Michelin Guide-listed restaurant.'),
  place('graz-bakery-1', 'graz', 'bakery', 'Bäckerei Sorger', 4.4, 'Dietrichsteinplatz 13, 8010 Graz, Austria', '직접 로스팅한 커피와 아침 식사로 유명한 그라츠 베이커리 체인', 'Bakery chain known for fresh breakfast and its own coffee roasting'),
  place('graz-cafe-1', 'graz', 'cafe', 'Martin Auer', 4.5, 'Theodor-Körner-Straße 60, 8010 Graz, Austria', '자체 제과로 만든 데니시 페이스트리가 유명한 그라츠 카페', 'Café known for Danish pastries baked in its own bakery'),

  // —— hallstatt ——
  place('hallstatt-fine_dining-1', 'hallstatt', 'fine_dining', 'Bräugasthof', 4.5, 'Salzbergstraße 1, 4830 Hallstatt', '호수 전망의 전통 오스트리아 요리.', 'Traditional Austrian dishes with lake views.'),

  place('hallstatt-bakery-1', 'hallstatt', 'bakery', 'Maislinger', 4.4, 'Seestraße 156, 4830 Hallstatt, Austria', '할슈타트 호숫가에 위치한 전통 베이커리, 자연 발효 사워도우로 유명', 'Lakeside bakery in Hallstatt known for its own natural sourdough'),
  place('hallstatt-cafe-1', 'hallstatt', 'cafe', 'Café Derbl', 4.3, 'Hallstatt, 4830, Austria', '마을 중심가에서 커피와 홈메이드 케이크를 즐길 수 있는 카페', 'Café in the town center known for coffee and homemade cakes'),
]
