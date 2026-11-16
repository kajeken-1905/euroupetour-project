import { place } from './placeFactory'
import type { Place } from '../types'

export const placesALExtra: Place[] = [
  // —— tirana ——
  place('tirana-fine_dining-1', 'tirana', 'fine_dining', 'Mullixhiu', 'Shëtitore Lasgush Poradeci, 1019 Tirana, Albania', '노마 출신 셰프 블레다르 콜라가 이끄는 그랜드 파크 쪽 지하 식당. 알바니아 시골 요리를 코스로 재해석합니다.', 'Basement restaurant by Grand Park led by ex-Noma chef Bledar Kola, reinventing Albanian village cooking as tasting menus.'),
  place('tirana-fine_dining-2', 'tirana', 'fine_dining', 'Oda Garden', 'Rruga Shenasi Dishnica, 1001 Tirana, Albania', '파자르 이 리 시장 옆 오스만 시대 집과 정원에서 내는 전통 알바니아 요리. 예약을 권합니다.', 'Traditional Albanian food in an Ottoman-era house and garden beside Pazari i Ri; book ahead.'),
  place('tirana-fine_dining-3', 'tirana', 'fine_dining', 'Artigiano Restaurant', 'Rruga Abdyl Frashëri, 1017 Tirana, Albania', '블로쿠의 이탈리아 식당.', 'Italian restaurant in Blloku.'),
  place('tirana-fine_dining-4', 'tirana', 'fine_dining', 'Restaurant Kripë Dhe Piper (Salt and Pepper)', 'Rruga Sami Frashëri 44, 1001 Tirana, Albania', '인공호수 근처의 해산물·숙성 고기 식당.', 'Seafood and dry-aged meat restaurant near the Artificial Lake.'),
  place('tirana-fine_dining-5', 'tirana', 'fine_dining', 'EJAA Mediterranean', 'Rruga Mustafa Qosja, Vasil Shanto, Tirana', '알바니아·이탈리아식 지중해 요리 식당.', 'Albanian and Italian Mediterranean restaurant.'),
  place('tirana-cafe-2', 'tirana', 'cafe', 'Frut’za Specialty Coffee & Brunch', 'Rruga Andon Zako Çajupi, 1001 Tirana, Albania', '블로쿠 스페셜티 커피·브런치.', 'Blloku specialty coffee and brunch.'),
  place('tirana-cafe-3', 'tirana', 'cafe', 'SECA Coffee', 'Rruga Janos Hunyadi, 1001 Tirana, Albania', '스페셜티 커피.', 'Specialty coffee.'),

  // —— berat ——
  place('berat-fine_dining-1', 'berat', 'fine_dining', 'Homemade Food Lili', 'Mangalem, Berat', '망갈렘 지구 가정집에서 직접 만든 알바니아 가정식을 냅니다. 자리가 적어 예약을 권합니다.', 'Albanian home cooking served in a family house in Mangalem; few seats, so book ahead.'),
  place('berat-fine_dining-2', 'berat', 'fine_dining', 'Zonja Gjenë', 'Rruga Antipatrea, Mangalem, Berat 5001', '전통 알바니아 요리 식당. 저녁에 라이브 음악이 있고 현금만 받습니다.', 'Traditional Albanian restaurant with live music some evenings; cash only.'),
  place('berat-cafe-1', 'berat', 'cafe', 'Shtepia e Kafes Gimi', 'Bulevardi Republika, 5012 Berat, Albania', '레푸블리카 대로의 셀프서비스 카페. 크레프와 불에 끓인 튀르키예식 커피가 인기입니다.', 'Self-service café on Republic Boulevard, popular for crêpes and Turkish coffee brewed over a flame.'),

  // —— gjirokaster ——
  place('gjirokaster-fine_dining-1', 'gjirokaster', 'fine_dining', 'Te Kalaja Restaurant', 'Rruga Bule Naipi, Gjirokastër', '성 가까이의 가족 운영 식당. 테라스에서 성과 구시가가 보입니다.', 'Family-run restaurant near the castle, with a terrace overlooking the castle and old town.'),
  place('gjirokaster-bakery-1', 'gjirokaster', 'bakery', 'Antigonea 2000', 'Rruga 18 Shtatori, 6001 Gjirokastra, Albania', '케이크·페이스트리·젤라토를 파는 지로카스터 중심가의 카페 겸 빵집.', 'Café-bakery in central Gjirokastër with cakes, pastries and gelato.'),
  place('gjirokaster-cafe-1', 'gjirokaster', 'cafe', 'Te Kubé', 'Rr. Ismail Kadare (below the Bazaar Mosque), Gjirokastër', '바자르 모스크 아래의 작은 카페 겸 서점. 알바니아 관련 영어 책이 많습니다.', 'Small café-bookshop below the Bazaar Mosque, with many English books on Albania.'),

  // —— sarande ——
  place('sarande-fine_dining-1', 'sarande', 'fine_dining', 'Observatory Restaurant', 'Godine Nr. 75, Lagja Nr.1, Saranda 9702', '사란데 언덕 꼭대기의 해산물·지중해 요리 식당. 만과 이오니아해가 내려다보입니다.', 'Hilltop seafood and Mediterranean restaurant overlooking Saranda bay and the Ionian Sea.'),

  // —— sarande: bakeries and cafés (2026-11-04) ——
  place('sarande-bakery-1', 'sarande', 'bakery', 'Pastiçeri Amanda', 'Rruga Lefter Talo, Sarandë', '시내의 제과점.', 'Pastry shop in the town.'),
  place('sarande-cafe-1', 'sarande', 'cafe', 'ZUM cafe', 'Rruga Onhezmi, Sarandë 9701', '시내의 카페.', 'Café in the town.'),
  place('sarande-cafe-2', 'sarande', 'cafe', 'Caffe Italia', 'Rruga Butrinti, Sarandë 9701', '부트린트 거리의 카페 바.', 'Café-bar on Rruga Butrinti.'),

  // —— durres: restaurants, bakeries and cafés (2026-11-16) ——
  place('durres-fine_dining-1', 'durres', 'fine_dining', 'Aragosta Restaurant', 'Rruga Taulantia 1, Durrës', '두러스의 해산물 식당. 구글 지도 평점 4.8.', 'Seafood restaurant in Durrës. Rated 4.8 on Google Maps.'),
  place('durres-fine_dining-2', 'durres', 'fine_dining', 'Idua Restaurant', 'Rruga Taulantia, Durrës', '두러스의 전통 음식 식당. 구글 지도 평점 4.8.', 'Traditional restaurant in Durrës. Rated 4.8 on Google Maps.'),
  place('durres-fine_dining-3', 'durres', 'fine_dining', 'Vila Brais', 'Rruga Xhamia 1, Durrës', '두러스의 알바니아·이탈리아 음식 식당. 구글 지도 평점 4.9.', 'Albanian and Italian restaurant in Durrës. Rated 4.9 on Google Maps.'),
  place('durres-fine_dining-4', 'durres', 'fine_dining', 'Ënda Restaurant', 'Bulevardi Dyrrah, Durrës', '두러스의 식당. 구글 지도 평점 4.9.', 'Restaurant in Durrës. Rated 4.9 on Google Maps.'),
  place('durres-fine_dining-5', 'durres', 'fine_dining', 'Saly Restaurant', 'Rruga Pavaresia, Plazh, Durrës', '두러스의 해변 지구의 이탈리아 음식 식당. 구글 지도 평점 4.8.', 'Italian restaurant in the beach district in Durrës. Rated 4.8 on Google Maps.'),
  place('durres-bakery-1', 'durres', 'bakery', 'Flair Bakery', 'Rruga Fetah Bllaca, Durrës', '두러스의 빵집 겸 아침 식사 카페. 구글 지도 평점 4.7.', 'Bakery and breakfast café in Durrës. Rated 4.7 on Google Maps.'),
  place('durres-bakery-2', 'durres', 'bakery', 'Pastiçeri Pelikan Plazh', 'Rruga Pavaresia, Durrës', '두러스의 해변 지구의 제과점. 구글 지도 평점 4.6.', 'Pastry shop in the beach district in Durrës. Rated 4.6 on Google Maps.'),
  place('durres-cafe-1', 'durres', 'cafe', 'mana.', 'Rruga Filonid Durrsaku, Durrës', '두러스의 커피숍. 구글 지도 평점 5.0.', 'Coffee shop in Durrës. Rated 5.0 on Google Maps.'),

  // —— kruje: restaurants, bakeries and cafés (2026-11-16) ——
  place('kruje-fine_dining-1', 'kruje', 'fine_dining', 'Restaurant KROI', 'Rruga Kala, Krujë', '크루야의 성 아래 식당. 구글 지도 평점 4.6.', 'Restaurant below the castle in Krujë. Rated 4.6 on Google Maps.'),
  place('kruje-fine_dining-2', 'kruje', 'fine_dining', 'Garden Organic Restaurant', 'Rruga Abaze, SH38, Krujë', '크루야의 유기농 재료 식당. 구글 지도 평점 4.7.', 'Organic restaurant in Krujë. Rated 4.7 on Google Maps.'),
  place('kruje-fine_dining-3', 'kruje', 'fine_dining', 'Bar Restaurant Horizont', 'Rruga e Malit, Krujë', '크루야의 전망 식당. 구글 지도 평점 4.7.', 'Restaurant with a view in Krujë. Rated 4.7 on Google Maps.'),
  place('kruje-fine_dining-4', 'kruje', 'fine_dining', 'Restorant Bardhi', 'Rruga Kala, Krujë', '크루야의 성 아래 전통 식당. 구글 지도 평점 4.7.', 'Traditional restaurant below the castle in Krujë. Rated 4.7 on Google Maps.'),
  place('kruje-fine_dining-5', 'kruje', 'fine_dining', 'Fabiani Restaurant & Bar', 'Rruga Kala, Krujë', '크루야의 성 아래 식당 겸 바. 구글 지도 평점 4.6.', 'Restaurant and bar below the castle in Krujë. Rated 4.6 on Google Maps.'),

  // —— shkoder: restaurants, bakeries and cafés (2026-11-16) ——
  place('shkoder-fine_dining-1', 'shkoder', 'fine_dining', 'Arkapi Restorant Tradicional', 'Rruga Vilson, Shkodër', '슈코더르의 전통 음식 식당. 구글 지도 평점 4.8.', 'Traditional restaurant in Shkodër. Rated 4.8 on Google Maps.'),
  place('shkoder-fine_dining-2', 'shkoder', 'fine_dining', 'Te Nana', 'Rruga Edith Durham, Shkodër', '슈코더르의 전통 음식 식당. 구글 지도 평점 4.9.', 'Traditional restaurant in Shkodër. Rated 4.9 on Google Maps.'),
  place('shkoder-fine_dining-3', 'shkoder', 'fine_dining', 'Trattoria Venezia', 'Rruga Studenti, Shkodër', '슈코더르의 이탈리아 음식 식당. 구글 지도 평점 4.8.', 'Italian restaurant in Shkodër. Rated 4.8 on Google Maps.'),
  place('shkoder-fine_dining-4', 'shkoder', 'fine_dining', 'Barbs Restaurant by Baku', 'Rruga Kolë Idromeno, Shkodër', '슈코더르의 파인다이닝 식당. 구글 지도 평점 4.7.', 'Fine-dining restaurant in Shkodër. Rated 4.7 on Google Maps.'),
  place('shkoder-fine_dining-5', 'shkoder', 'fine_dining', 'Fisi Restaurant', 'Bulevardi Skënderbeu, Shkodër', '슈코더르의 전통 음식 식당. 구글 지도 평점 4.7.', 'Traditional restaurant in Shkodër. Rated 4.7 on Google Maps.'),
  place('shkoder-bakery-1', 'shkoder', 'bakery', 'N Mjalte', 'Rruga Oso Kuka, Shkodër', '슈코더르의 제과점. 구글 지도 평점 5.0.', 'Pastry shop in Shkodër. Rated 5.0 on Google Maps.'),
  place('shkoder-bakery-2', 'shkoder', 'bakery', 'Hyri Bakllava', 'Rruga Don Bosko, Shkodër', '슈코더르의 바클라바 전문 제과점. 구글 지도 평점 4.9.', 'Baklava pastry shop in Shkodër. Rated 4.9 on Google Maps.'),
  place('shkoder-bakery-3', 'shkoder', 'bakery', 'La Maison du Croissant', 'Bulevardi Skënderbeu 37, Shkodër', '슈코더르의 빵집. 구글 지도 평점 4.8.', 'Bakery in Shkodër. Rated 4.8 on Google Maps.'),
  place('shkoder-bakery-4', 'shkoder', 'bakery', 'Arishta Bakery Shirokë', 'Shirokë, Shkodër', '슈코더르의 호숫가 마을의 빵집. 구글 지도 평점 4.8.', 'Bakery in the lakeside village in Shkodër. Rated 4.8 on Google Maps.'),
  place('shkoder-cafe-1', 'shkoder', 'cafe', 'Stolia Coffeehouse & Brunch', 'Rruga At Gjergj Fishta, Shkodër', '슈코더르의 카페 겸 브런치. 구글 지도 평점 4.7.', 'Café and brunch in Shkodër. Rated 4.7 on Google Maps.'),
  place('shkoder-cafe-2', 'shkoder', 'cafe', 'Skuta', 'Rruga Hasan Riza Pasha, Shkodër', '슈코더르의 카페. 구글 지도 평점 5.0.', 'Café in Shkodër. Rated 5.0 on Google Maps.'),
  place('shkoder-cafe-3', 'shkoder', 'cafe', 'Genti Breakfast Restaurant', 'Bulevardi Skënderbeu, Shkodër', '슈코더르의 전통 아침 식사 식당. 구글 지도 평점 4.9.', 'Traditional breakfast restaurant in Shkodër. Rated 4.9 on Google Maps.'),
  place('shkoder-cafe-4', 'shkoder', 'cafe', 'Dredhëza', 'Rruga Don Bosko, Shkodër', '슈코더르의 브런치 카페. 구글 지도 평점 4.8.', 'Brunch café in Shkodër. Rated 4.8 on Google Maps.'),

  // —— korce: restaurants, bakeries and cafés (2026-11-16) ——
  place('korce-fine_dining-1', 'korce', 'fine_dining', 'Ebel Restaurant', 'Bulevardi Republika 40, Korçë', '코르처의 식당. 구글 지도 평점 4.9.', 'Restaurant in Korçë. Rated 4.9 on Google Maps.'),
  place('korce-fine_dining-2', 'korce', 'fine_dining', 'Le Paris', 'Rruga Gavril Pepo, Korçë', '코르처의 프랑스 음식 식당. 구글 지도 평점 4.9.', 'French restaurant in Korçë. Rated 4.9 on Google Maps.'),
  place('korce-fine_dining-3', 'korce', 'fine_dining', 'Bar Restorant Mësonjëtorja', 'Bulevardi Shën Gjergji, Korçë', '코르처의 식당. 구글 지도 평점 4.8.', 'Restaurant in Korçë. Rated 4.8 on Google Maps.'),
  place('korce-fine_dining-4', 'korce', 'fine_dining', 'Avenue Restaurant & Sushi', 'Bulevardi Republika, Korçë', '코르처의 식당 겸 스시 바. 구글 지도 평점 5.0.', 'Restaurant and sushi bar in Korçë. Rated 5.0 on Google Maps.'),
  place('korce-fine_dining-5', 'korce', 'fine_dining', 'Antik', 'Bulevardi Republika, Korçë', '코르처의 식당. 구글 지도 평점 4.5.', 'Restaurant in Korçë. Rated 4.5 on Google Maps.'),
  place('korce-bakery-1', 'korce', 'bakery', 'Pastiçeri Dajana', 'Rruga Shoqëria Lira, Korçë', '코르처의 제과점. 구글 지도 평점 4.7.', 'Pastry shop in Korçë. Rated 4.7 on Google Maps.'),
  place('korce-cafe-1', 'korce', 'cafe', 'Bruno Coffee Store', 'Rruga Gjenovefa Leshenja, Korçë', '코르처의 커피숍. 구글 지도 평점 5.0.', 'Coffee shop in Korçë. Rated 5.0 on Google Maps.'),

  // —— vlore: restaurants, bakeries and cafés (2026-11-16) ——
  place('vlore-fine_dining-1', 'vlore', 'fine_dining', 'Paradise Beach Restaurant', 'Rruga Murat Tërbaçi, Vlorë', '블로러의 해변 식당. 구글 지도 평점 4.7.', 'Beach restaurant in Vlorë. Rated 4.7 on Google Maps.'),
  place('vlore-fine_dining-2', 'vlore', 'fine_dining', 'Novus Traditional Food Restaurant', 'Rruga Çamëria, Vlorë', '블로러의 전통 음식 식당. 구글 지도 평점 4.7.', 'Traditional restaurant in Vlorë. Rated 4.7 on Google Maps.'),
  place('vlore-fine_dining-3', 'vlore', 'fine_dining', 'Adriatik Restaurant', 'Rruga Çamëria, Vlorë', '블로러의 전통 음식 식당. 구글 지도 평점 4.8.', 'Traditional restaurant in Vlorë. Rated 4.8 on Google Maps.'),
  place('vlore-fine_dining-4', 'vlore', 'fine_dining', 'MURRA Traditional Albanian Restaurant', 'Rruga Gjergj Arianit, Vlorë', '블로러의 전통 음식 식당. 구글 지도 평점 4.6.', 'Traditional restaurant in Vlorë. Rated 4.6 on Google Maps.'),
  place('vlore-fine_dining-5', 'vlore', 'fine_dining', 'Beluga Restaurant & Bar', 'Rruga Sazani, Vlorë', '블로러의 식당 겸 바. 구글 지도 평점 4.6.', 'Restaurant and bar in Vlorë. Rated 4.6 on Google Maps.'),
  place('vlore-bakery-1', 'vlore', 'bakery', 'Koa', 'Rruga Rushit Gurishova, Vlorë', '블로러의 빵집. 구글 지도 평점 4.9.', 'Bakery in Vlorë. Rated 4.9 on Google Maps.'),
  place('vlore-cafe-1', 'vlore', 'cafe', '11 Brunch Coffee Culture', 'Rruga Çajupi, Vlorë', '블로러의 커피숍 겸 브런치. 구글 지도 평점 4.9.', 'Coffee shop and brunch in Vlorë. Rated 4.9 on Google Maps.'),
  place('vlore-cafe-2', 'vlore', 'cafe', 'Arabica Coffee', 'Rruga Gjergj Kastrioti, Vlorë', '블로러의 커피숍. 구글 지도 평점 4.8.', 'Coffee shop in Vlorë. Rated 4.8 on Google Maps.'),
  place('vlore-cafe-3', 'vlore', 'cafe', 'Kafe 1912', 'Bulevardi Ismail Qemali, Vlorë', '블로러의 커피숍. 구글 지도 평점 5.0.', 'Coffee shop in Vlorë. Rated 5.0 on Google Maps.'),
  place('vlore-cafe-4', 'vlore', 'cafe', 'URA Specialty Coffee & Kuvend', 'Rruga Çajupi 33, Vlorë', '블로러의 스페셜티 커피숍. 구글 지도 평점 4.9.', 'Specialty coffee shop in Vlorë. Rated 4.9 on Google Maps.'),

  // —— himare: restaurants, bakeries and cafés (2026-11-16) ——
  place('himare-fine_dining-1', 'himare', 'fine_dining', 'The Jester’s Taverna', 'Himarë–Livadh road, Himarë', '히마러의 지중해 음식 식당. 구글 지도 평점 4.8.', 'Mediterranean restaurant in Himarë. Rated 4.8 on Google Maps.'),
  place('himare-fine_dining-2', 'himare', 'fine_dining', 'Cafe Kanda', 'Rruga Qendrore, SH8, Himarë', '히마러의 해산물 식당. 구글 지도 평점 4.8.', 'Seafood restaurant in Himarë. Rated 4.8 on Google Maps.'),
  place('himare-fine_dining-3', 'himare', 'fine_dining', 'Ionian Restaurant', 'Spile, SH8, Himarë', '히마러의 해변 식당. 구글 지도 평점 4.6.', 'Beachfront restaurant in Himarë. Rated 4.6 on Google Maps.'),
  place('himare-fine_dining-4', 'himare', 'fine_dining', 'To Steki sti Gonia', 'Rruga Kaonet, Spile, Himarë', '히마러의 그리스 음식 식당. 구글 지도 평점 4.6.', 'Greek restaurant in Himarë. Rated 4.6 on Google Maps.'),
  place('himare-fine_dining-5', 'himare', 'fine_dining', 'Hercules Restaurant', 'SH8, Himarë', '히마러의 지중해 음식 식당. 구글 지도 평점 4.6.', 'Mediterranean restaurant in Himarë. Rated 4.6 on Google Maps.'),
  place('himare-cafe-1', 'himare', 'cafe', 'Kafe Pasticceria Himara 1928', 'SH8, Himarë', '히마러의 카페 겸 제과점. 구글 지도 평점 4.4.', 'Café and pastry shop in Himarë. Rated 4.4 on Google Maps.'),
  place('himare-cafe-2', 'himare', 'cafe', 'Café Butterfly', 'SH8, Himarë', '히마러의 채식 메뉴가 있는 카페. 구글 지도 평점 4.7.', 'Café with vegetarian dishes in Himarë. Rated 4.7 on Google Maps.'),

  // —— tirana: restaurants, bakeries and cafés (2026-11-16) ——
  place('tirana-bakery-1', 'tirana', 'bakery', 'Le Bon Tirana', 'Rruga Dervish Hatixhe, Tirana', '티라나의 제과점. 구글 지도 평점 4.5.', 'Pastry shop in Tirana. Rated 4.5 on Google Maps.'),
  place('tirana-bakery-2', 'tirana', 'bakery', 'Oazi i Ëmbëlsisë', 'Rruga Vaso Pasha, Tirana', '티라나의 제과점 겸 빵집. 구글 지도 평점 4.8.', 'Pastry shop and bakery in Tirana. Rated 4.8 on Google Maps.'),
  place('tirana-bakery-3', 'tirana', 'bakery', 'Nefeli Pastry Shop', 'Rruga Asdreni, Tirana', '티라나의 제과점. 구글 지도 평점 4.6.', 'Pastry shop in Tirana. Rated 4.6 on Google Maps.'),
  place('tirana-cafe-4', 'tirana', 'cafe', 'The Back Room Specialty Coffee', 'Rruga Sulejman Delvina, Sheshi Wilson, Tirana', '티라나의 스페셜티 커피숍. 구글 지도 평점 4.9.', 'Specialty coffee shop in Tirana. Rated 4.9 on Google Maps.'),
  place('tirana-cafe-5', 'tirana', 'cafe', 'Komiteti Bar', 'Rruga Papa Gjon Pali II, Tirana', '티라나의 공산 시대 물건으로 꾸민 카페 겸 바. 구글 지도 평점 4.5.', 'Café-bar decorated with communist-era objects in Tirana. Rated 4.5 on Google Maps.'),
  place('tirana-cafe-6', 'tirana', 'cafe', 'HANA Corner Café', 'Rruga Gjin Bue Shpata 4, Tirana', '티라나의 커피숍. 구글 지도 평점 4.5.', 'Coffee shop in Tirana. Rated 4.5 on Google Maps.'),

  // —— berat: restaurants, bakeries and cafés (2026-11-16) ——
  place('berat-fine_dining-3', 'berat', 'fine_dining', 'Eni Traditional Food Berat', 'Rruga Nikolla Buhuri, Berat', '베라트의 전통 음식 식당. 구글 지도 평점 4.9.', 'Traditional restaurant in Berat. Rated 4.9 on Google Maps.'),
  place('berat-fine_dining-4', 'berat', 'fine_dining', 'Lorenc Secret Garden Restaurant & Bar', 'Rruga Stiliano Bandilli, Berat', '베라트의 정원 식당 겸 바. 구글 지도 평점 4.6.', 'Garden restaurant and bar in Berat. Rated 4.6 on Google Maps.'),
  place('berat-bakery-1', 'berat', 'bakery', 'Hanna Pastry', 'Sheshi Teodor Muzaka, Berat', '베라트의 제과점. 구글 지도 평점 4.6.', 'Pastry shop in Berat. Rated 4.6 on Google Maps.'),
  place('berat-bakery-2', 'berat', 'bakery', 'Pastiçeri Tori', 'Rruga Antipatrea, Berat', '베라트의 케이크 가게. 구글 지도 평점 4.6.', 'Cake shop in Berat. Rated 4.6 on Google Maps.'),
  place('berat-bakery-3', 'berat', 'bakery', 'Pastiçeri Landi', 'Rruga Antipatrea, Berat', '베라트의 제과점. 구글 지도 평점 4.5.', 'Patisserie in Berat. Rated 4.5 on Google Maps.'),
  place('berat-cafe-2', 'berat', 'cafe', 'n’Pedonale', 'Bulevardi Republika, Berat', '베라트의 보행자 거리의 커피숍. 구글 지도 평점 4.5.', 'Coffee shop on the pedestrian street in Berat. Rated 4.5 on Google Maps.'),

  // —— gjirokaster: restaurants, bakeries and cafés (2026-11-16) ——
  place('gjirokaster-fine_dining-2', 'gjirokaster', 'fine_dining', 'Taverna Lani', 'Rruga Evlia Celebi, Gjirokastër', '지로카스트라의 전통 음식 식당. 구글 지도 평점 4.7.', 'Traditional restaurant in Gjirokastër. Rated 4.7 on Google Maps.'),
  place('gjirokaster-fine_dining-3', 'gjirokaster', 'fine_dining', 'Furra Restaurant', 'Rruga Gjin Bue Shpata, Gjirokastër', '지로카스트라의 식당. 구글 지도 평점 4.8.', 'Restaurant in Gjirokastër. Rated 4.8 on Google Maps.'),
  place('gjirokaster-fine_dining-4', 'gjirokaster', 'fine_dining', 'Taverna Tradicionale Sokolli', 'Rruga Jace Hormova, Gjirokastër', '지로카스트라의 전통 음식 식당. 구글 지도 평점 4.9.', 'Traditional restaurant in Gjirokastër. Rated 4.9 on Google Maps.'),
  place('gjirokaster-fine_dining-5', 'gjirokaster', 'fine_dining', 'Castle View Restaurant', 'Rruga Bule Naipi, Gjirokastër', '지로카스트라의 성이 보이는 전통 음식 식당. 구글 지도 평점 4.9.', 'Traditional restaurant with castle views in Gjirokastër. Rated 4.9 on Google Maps.'),
  place('gjirokaster-bakery-2', 'gjirokaster', 'bakery', 'Kalimera Patisserie Old Town', 'Sheshi Çerçiz Topulli, Gjirokastër', '지로카스트라의 구시가의 제과점. 구글 지도 평점 4.7.', 'Pastry shop in the old town in Gjirokastër. Rated 4.7 on Google Maps.'),
  place('gjirokaster-bakery-3', 'gjirokaster', 'bakery', 'D’Albero', 'Rruga Alqi Kondi, Gjirokastër', '지로카스트라의 제과점. 구글 지도 평점 4.5.', 'Pastry shop in Gjirokastër. Rated 4.5 on Google Maps.'),
  place('gjirokaster-bakery-4', 'gjirokaster', 'bakery', 'Festival Patisserie', 'Rruga Gjin Zenebisi, Gjirokastër', '지로카스트라의 제과점 겸 식당. 구글 지도 평점 4.7.', 'Patisserie and restaurant in Gjirokastër. Rated 4.7 on Google Maps.'),
  place('gjirokaster-bakery-5', 'gjirokaster', 'bakery', 'Altini Pastiçeri', 'Bulevardi 18 Shtatori, Gjirokastër', '지로카스트라의 제과점. 구글 지도 평점 4.9.', 'Pastry shop in Gjirokastër. Rated 4.9 on Google Maps.'),
  place('gjirokaster-cafe-2', 'gjirokaster', 'cafe', 'R C Coffee & More', 'Bulevardi 18 Shtatori, Gjirokastër', '지로카스트라의 카페. 구글 지도 평점 5.0.', 'Café in Gjirokastër. Rated 5.0 on Google Maps.'),
  place('gjirokaster-cafe-3', 'gjirokaster', 'cafe', 'Bar Café Kotoni', 'Rruga Ismail Kadare, Gjirokastër', '지로카스트라의 카페 겸 바. 구글 지도 평점 4.8.', 'Café-bar in Gjirokastër. Rated 4.8 on Google Maps.'),

  // —— sarande: restaurants, bakeries and cafés (2026-11-16) ——
  place('sarande-fine_dining-2', 'sarande', 'fine_dining', 'Oda e Babës', 'Rruga Skënderbeu, Sarandë', '사란다의 전통 음식 식당. 구글 지도 평점 4.7.', 'Traditional restaurant in Sarandë. Rated 4.7 on Google Maps.'),
  place('sarande-fine_dining-3', 'sarande', 'fine_dining', 'Hera Restaurant', 'Rruga Butrinti, Sarandë', '사란다의 식당. 구글 지도 평점 4.8.', 'Restaurant in Sarandë. Rated 4.8 on Google Maps.'),
  place('sarande-fine_dining-4', 'sarande', 'fine_dining', 'Bonsai Restaurant', 'Rruga Gjergj Araniti, Sarandë', '사란다의 식당. 구글 지도 평점 4.9.', 'Restaurant in Sarandë. Rated 4.9 on Google Maps.'),
  place('sarande-fine_dining-5', 'sarande', 'fine_dining', 'Balcony Restaurant', 'Rruga Flamurit, Sarandë', '사란다의 바다가 보이는 식당. 구글 지도 평점 4.7.', 'Restaurant with sea views in Sarandë. Rated 4.7 on Google Maps.'),
  place('sarande-bakery-2', 'sarande', 'bakery', 'Peta Jon', 'Rruga Katina Papa, Sarandë', '사란다의 빵집. 구글 지도 평점 4.8.', 'Bakery in Sarandë. Rated 4.8 on Google Maps.'),
  place('sarande-bakery-3', 'sarande', 'bakery', 'Byrek Traditional', 'Rruga Onhezmi 139, Sarandë', '사란다의 뷔렉 전문 빵집. 구글 지도 평점 4.8.', 'Byrek bakery in Sarandë. Rated 4.8 on Google Maps.'),
  place('sarande-cafe-3', 'sarande', 'cafe', 'Balux Coffee Bar', 'Rruga Onhezmi, Sarandë', '사란다의 커피숍. 구글 지도 평점 4.9.', 'Coffee shop in Sarandë. Rated 4.9 on Google Maps.'),
  place('sarande-cafe-4', 'sarande', 'cafe', 'SALA Lounge Café', 'Rruga Skënderbeu, Sarandë', '사란다의 브런치 카페. 구글 지도 평점 5.0.', 'Brunch café in Sarandë. Rated 5.0 on Google Maps.'),
  place('sarande-cafe-5', 'sarande', 'cafe', 'Cafe Bar Relax', 'Rruga Gjergj Araniti, Sarandë', '사란다의 카페. 구글 지도 평점 4.9.', 'Café in Sarandë. Rated 4.9 on Google Maps.'),
]
