import { place } from './placeFactory'
import type { Place } from '../types'

export const placesLUExtra: Place[] = [
  // —— vianden ——
  place('vianden-fine_dining-1', 'vianden', 'fine_dining', 'Restaurant Victor Hugo', '1 Rue Victor Hugo, Vianden', '1870년 빅토르 위고가 묵었던 호텔의 레스토랑. 벽난로가 있고 프랑스·국제 요리를 냅니다.', 'Restaurant of the hotel where Victor Hugo stayed in 1870, with an open fireplace and French and international cooking.'),
  place('vianden-fine_dining-2', 'vianden', 'fine_dining', 'Auberge Aal Veinen "Beim Hunn"', '114 Grand-rue, L-9411 Vianden', '비앙덴 성 아래 옛 대장간 건물의 오베르주. 숯불구이 요리로 알려졌고 화요일은 쉽니다.', 'Inn in the castle\'s former forge below Vianden Castle, known for charcoal-grilled meat; closed Tuesdays.'),
  place('vianden-bakery-1', 'vianden', 'bakery', "Au Croissant D'Or", '31 Grand-Rue, 9410 Vianden, Luxembourg', '구시가의 작은 아르티장 빵집. 사워도우 빵과 크루아상, 점심 샌드위치를 내고 월요일은 쉽니다.', 'Small artisan bakery in the old town with sourdough bread, croissants and lunch sandwiches; closed Mondays.'),
  place('vianden-cafe-1', 'vianden', 'cafe', 'Café du Pont', '1 Grand-Rue, Vianden', '강변 전망의 카페 겸 레스토랑. 아침 메뉴와 양파 수프가 호평을 받고 화요일은 쉽니다.', 'Riverside café-restaurant praised for breakfast and onion soup; closed Tuesdays.', { image: '/places/vianden-cafe-1.jpg' }),
  place('vianden-cafe-2', 'vianden', 'cafe', 'Collette Coffee Craft - Café & Roastery', '70 Grand-Rue, Vianden', '직접 원두를 볶는 카페 겸 로스터리. 매일 굽는 비건 베이커리를 내고 목~일요일만 엽니다.', 'Café and roastery roasting its own beans, with daily vegan bakes; open Thursday to Sunday.'),

  // —— echternach ——
  place('echternach-fine_dining-1', 'echternach', 'fine_dining', 'Café de la Poste "Beim Wohli"', '3 Place du Marché, 6460 Echternach, Luxembourg', '에히터나흐 중앙 광장의 카페 겸 레스토랑. 오전 11시부터 늦게까지 엽니다.', 'Café-restaurant on Echternach\'s market square, open from 11am until late.'),
  place('echternach-bakery-2', 'echternach', 'bakery', 'Fischer', '38 Rue de la Gare, L-6440 Echternach', '에히터나흐의 베이커리 체인점.', 'Bakery chain location in Echternach.'),
  place('echternach-bakery-3', 'echternach', 'bakery', 'DIETZ', 'Bitburger Str. 1b, 54668 Echternacherbrück, Germany', '국경 다리 바로 건너 독일 쪽 에히터나허브뤼크의 빵집. 넓은 야외 테라스가 있습니다.', 'Bakery just across the border bridge in Echternacherbrück, Germany, with a large outdoor terrace.'),

  // —— remich ——
  place('remich-fine_dining-1', 'remich', 'fine_dining', 'Café De L\'Europe Bofferding', 'Quai de la Moselle, 5553 Remich', '모젤강변의 카페 겸 레스토랑, 차분한 분위기와 친절한 서비스로 호평.', "Café-restaurant on the Moselle riverbank, praised for its calm atmosphere and friendly service."),
  place('remich-fine_dining-2', 'remich', 'fine_dining', 'Café de la Poste', '16 Place du Marché, Remich', '레미히 시장 광장의 카페 겸 펍. 지역·국제 요리를 내고 밤늦게까지 엽니다.', 'Café-pub on Remich\'s market square with local and international food, open late.'),
  place('remich-bakery-2', 'remich', 'bakery', 'Mosella', '21 Place du Marché, Remich', '레미히 시장 광장의 빵집 겸 제과점.', 'Bakery and pastry shop on Remich\'s market square.'),

  // —— clervaux: restaurants, bakeries and cafés (2026-11-21) ——
  place('clervaux-fine_dining-1', 'clervaux', 'fine_dining', 'Murmure du Château', '4 Montée du Château, L-9712 Clervaux', '성 오르는 길의 비스트로. 구글 지도 평점 4.6.', 'Bistro on the way up to the castle. Rated 4.6 on Google Maps.'),
  place('clervaux-fine_dining-2', 'clervaux', 'fine_dining', 'Restaurant Les Ecuries du Parc', '4 Rue du Parc, L-9708 Clervaux', '공원 옆 옛 마구간 건물의 레스토랑. 구글 지도 평점 4.4.', 'Restaurant in former stables by the park. Rated 4.4 on Google Maps.'),
  place('clervaux-fine_dining-3', 'clervaux', 'fine_dining', 'Restaurant Yama', '15 Rue de la Gare, L-9707 Clervaux', '역 가까이의 아시아 요리 식당. 구글 지도 평점 4.8.', 'Asian restaurant near the station. Rated 4.8 on Google Maps.'),
  place('clervaux-fine_dining-4', 'clervaux', 'fine_dining', 'Dos Gringos', '27 Grand-Rue, L-9710 Clervaux', '그랑 뤼의 타파스 식당. 구글 지도 평점 4.5.', 'Tapas restaurant on the Grand-Rue. Rated 4.5 on Google Maps.'),
  place('clervaux-fine_dining-5', 'clervaux', 'fine_dining', 'Restaurant Openrice 2', '26 Grand-Rue, L-9710 Clervaux', '그랑 뤼의 아시아 요리 식당. 구글 지도 평점 4.6.', 'Asian restaurant on the Grand-Rue. Rated 4.6 on Google Maps.'),

  // —— echternach: restaurants, bakeries and cafés (2026-11-21) ——
  place('echternach-fine_dining-2', 'echternach', 'fine_dining', 'Brasserie-Restaurant Beim Laange Veit', '39 Place du Marché, L-6460 Echternach', '마르크트 광장의 브라스리. 구글 지도 평점 4.3.', 'Brasserie on the market square. Rated 4.3 on Google Maps.'),
  place('echternach-cafe-1', 'echternach', 'cafe', 'Carli\'s Coffee', '31 Route de Luxembourg, L-6450 Echternach', '에히터나흐의 커피집. 구글 지도 평점 4.9.', 'Coffee shop in Echternach. Rated 4.9 on Google Maps.'),
  place('echternach-cafe-2', 'echternach', 'cafe', 'Café beim Cyrille', '49 Rue de la Gare, L-6440 Echternach', '역 거리의 카페. 구글 지도 평점 4.6.', 'Café on the Rue de la Gare. Rated 4.6 on Google Maps.'),
  place('echternach-cafe-3', 'echternach', 'cafe', 'Chouchouthé', '2 Rue de la Montagne, L-6470 Echternach', '구시가의 찻집. 구글 지도 평점 4.9.', 'Tea house in the old town. Rated 4.9 on Google Maps.'),

  // —— remich: restaurants, bakeries and cafés (2026-11-21) ——
  place('remich-fine_dining-3', 'remich', 'fine_dining', 'Pizzeria Um Moart', '27 Rue Foascht, L-5541 Remich', '시장 광장 가까이의 이탈리아 식당. 구글 지도 평점 4.5.', 'Italian restaurant near the market square. Rated 4.5 on Google Maps.'),
  place('remich-fine_dining-4', 'remich', 'fine_dining', 'D\'Brutzel Schëff', '10 Quai de la Moselle, L-5553 Remich', '모젤 강변의 식당. 구글 지도 평점 4.6.', 'Restaurant on the Moselle quay. Rated 4.6 on Google Maps.'),
  place('remich-cafe-1', 'remich', 'cafe', 'Gelateria Valentino', '28 Quai de la Moselle, L-5553 Remich', '강변 산책로의 젤라토 가게. 구글 지도 평점 4.3.', 'Gelato shop on the riverside promenade. Rated 4.3 on Google Maps.'),
]
