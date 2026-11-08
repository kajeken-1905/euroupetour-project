import { place } from './placeFactory'
import type { Place } from '../types'

export const placesMAExtra: Place[] = [

  // —— marrakech: restaurants, bakeries and cafés (2026-11-08) ——
  place('marrakech-fine_dining-1', 'marrakech', 'fine_dining', 'Kui-Zin', '12 Rue Amsefah, Route Sidi Abdelaziz, Medina, Marrakech, Morocco', '메디나의 모로코 요리 식당으로, 타진과 쿠스쿠스를 냅니다. 구글 지도 평점 4.6.', 'Moroccan restaurant in the medina serving tagines and couscous. Rated 4.6 on Google Maps.'),
  place('marrakech-fine_dining-2', 'marrakech', 'fine_dining', 'L\'mida Marrakech', '78 Derb Nkhal, Rahba Lakdima, Medina, Marrakech, Morocco', '향신료 광장 옆 루프톱 식당으로, 현대식 모로코 요리를 냅니다. 구글 지도 평점 4.6.', 'Rooftop restaurant by the spice square, serving modern Moroccan food. Rated 4.6 on Google Maps.'),
  place('marrakech-cafe-1', 'marrakech', 'cafe', 'Café des Épices', '75 Derb Rahba Lakdima, Medina, Marrakech, Morocco', '향신료 광장을 내려다보는 테라스 카페로, 민트 차가 유명합니다.', 'Terrace café above the spice square, known for its mint tea.'),
  place('marrakech-cafe-2', 'marrakech', 'cafe', 'Pezzo Coffee', '91 Avenue Hommane Fetouaki, Marrakech, Morocco', '쿠투비아 근처의 스페셜티 커피 가게.', 'Specialty coffee shop near the Koutoubia.'),
  place('marrakech-bakery-1', 'marrakech', 'bakery', 'Pâtisserie Corne de Gazelle', '137 Rue Riad Zitoun el Jadid, Medina, Marrakech, Morocco', '가젤 뿔 모양 아몬드 과자 ‘코른 드 가젤’ 같은 모로코 전통 과자를 파는 가게.', 'Moroccan sweets shop known for its almond “gazelle horn” pastries.'),
  place('marrakech-bakery-2', 'marrakech', 'bakery', 'Pâtisserie des Princes', 'Passage Prince Moulay Rachid, Medina, Marrakech, Morocco', '제마 엘 프나 광장 옆의 오래된 제과점.', 'Long-standing pastry shop just off Jemaa el-Fnaa.'),

  // —— fez: restaurants, bakeries and cafés (2026-11-08) ——
  place('fez-fine_dining-1', 'fez', 'fine_dining', 'Restaurant Dar Tresor', '1 Derb Mokri, Medina, Fez, Morocco', '메디나 옛 저택의 모로코 요리 식당. 구글 지도 평점 4.8.', 'Moroccan restaurant in an old medina house. Rated 4.8 on Google Maps.'),
  place('fez-fine_dining-2', 'fez', 'fine_dining', 'Fez & Friends', '31 Rue Issescou, Boujloud, Fez, Morocco', '블루 게이트 근처의 모로코 가정식 식당. 구글 지도 평점 4.6.', 'Moroccan home cooking near the Blue Gate. Rated 4.6 on Google Maps.'),
  place('fez-cafe-1', 'fez', 'cafe', 'Garden Fès', '11 Akibet El Firane, Hamia, Derb Ziat, Fez, Morocco', '메디나 안 정원 카페.', 'Garden café inside the medina.'),

  // —— chefchaouen: restaurants, bakeries and cafés (2026-11-08) ——
  place('chefchaouen-fine_dining-1', 'chefchaouen', 'fine_dining', 'El Cielo', 'Rue Raouachid, Chefchaouen, Morocco', '파란 마을이 내려다보이는 테라스 식당. 구글 지도 평점 4.7.', 'Terrace restaurant overlooking the blue town. Rated 4.7 on Google Maps.'),
  place('chefchaouen-fine_dining-2', 'chefchaouen', 'fine_dining', 'Bacha Rouge', 'Derb Chorfa, Chefchaouen, Morocco', '메디나 안의 모로코 요리 식당. 구글 지도 평점 4.7.', 'Moroccan restaurant in the medina. Rated 4.7 on Google Maps.'),
  place('chefchaouen-fine_dining-3', 'chefchaouen', 'fine_dining', 'Bilmos', 'Place Outa el Hammam, Chefchaouen, Morocco', '중심 광장의 식당. 구글 지도 평점 4.6.', 'Restaurant on the main square. Rated 4.6 on Google Maps.'),

  // —— tangier: restaurants, bakeries and cafés (2026-11-08) ——
  place('tangier-fine_dining-1', 'tangier', 'fine_dining', 'Dar Harruch', '35 Rue Hadj Mohammed Torres, Medina, Tangier, Morocco', '메디나의 카페 겸 모로코 요리 식당. 구글 지도 평점 4.8.', 'Café and Moroccan restaurant in the medina. Rated 4.8 on Google Maps.'),
  place('tangier-fine_dining-2', 'tangier', 'fine_dining', 'Dada Restaurant', '51 Rue Almohades, Tangier, Morocco', '구시가의 모로코 요리 식당. 구글 지도 평점 4.8.', 'Moroccan restaurant in the old town. Rated 4.8 on Google Maps.'),
  place('tangier-fine_dining-3', 'tangier', 'fine_dining', 'Kebdani', 'Rue Dar Baroud, Tangier, Morocco', '메디나의 해산물·모로코 요리 식당. 구글 지도 평점 4.7.', 'Seafood and Moroccan restaurant in the medina. Rated 4.7 on Google Maps.'),
  place('tangier-bakery-1', 'tangier', 'bakery', 'Boulangerie & Pâtisserie El Fath', '92 Avenue Anfa, Tangier, Morocco', '신시가지의 빵집 겸 제과점.', 'Bakery and pastry shop in the new town.'),

  // —— rabat: restaurants, bakeries and cafés (2026-11-08) ——
  place('rabat-fine_dining-1', 'rabat', 'fine_dining', 'Dar Al Fawakih Medina', 'Avenue Al Maghrib Al Arabi, Medina, Rabat, Morocco', '메디나 입구의 모로코 요리 식당. 구글 지도 평점 4.7.', 'Moroccan restaurant at the edge of the medina. Rated 4.7 on Google Maps.'),
  place('rabat-fine_dining-2', 'rabat', 'fine_dining', 'Dar Rbatia', '6 Rue Farane Khachane, Medina, Rabat, Morocco', '메디나 옛 저택의 라바트 전통 요리 식당. 구글 지도 평점 4.5.', 'Traditional Rabat cooking in an old medina house. Rated 4.5 on Google Maps.'),
  place('rabat-cafe-1', 'rabat', 'cafe', 'Café Crème', '16 Rue Aguelmane Sidi Ali, Agdal, Rabat, Morocco', '아그달의 커피 가게.', 'Coffee shop in Agdal.'),
  place('rabat-cafe-2', 'rabat', 'cafe', 'Boho Café', '10 Rue El Yamama, Rabat, Morocco', '브런치 카페.', 'Brunch café.'),

  // —— casablanca: restaurants, bakeries and cafés (2026-11-08) ——
  place('casablanca-fine_dining-1', 'casablanca', 'fine_dining', 'La Sqala', 'Boulevard des Almohades, Casablanca, Morocco', '18세기 성채 안 정원에서 모로코 요리를 먹는 식당. 구글 지도 평점 4.2.', 'Moroccan food in the garden of an 18th-century bastion. Rated 4.2 on Google Maps.'),
  place('casablanca-fine_dining-2', 'casablanca', 'fine_dining', 'Moods Café-Restaurant', 'Rue Mourabitine, Casablanca, Morocco', '카페 겸 식당. 구글 지도 평점 4.8.', 'Café-restaurant. Rated 4.8 on Google Maps.'),
  place('casablanca-fine_dining-3', 'casablanca', 'fine_dining', 'Olive Tree Café-Restaurant', 'Marina Shopping Center, Casablanca, Morocco', '하산 2세 모스크 근처 마리나 상가의 식당. 구글 지도 평점 4.9.', 'Restaurant in the marina shopping centre near the Hassan II Mosque. Rated 4.9 on Google Maps.'),
  place('casablanca-bakery-1', 'casablanca', 'bakery', 'L\'atelier Rayan Néhmé', 'Avenue Abderrahim Bouabid, Casablanca, Morocco', '파티스리.', 'Pâtisserie.'),

  // —— essaouira: restaurants, bakeries and cafés (2026-11-08) ——
  place('essaouira-fine_dining-1', 'essaouira', 'fine_dining', 'Khmissa Restaurant', '1 Rue Zayan, Essaouira, Morocco', '메디나의 모로코 요리 식당. 구글 지도 평점 4.9.', 'Moroccan restaurant in the medina. Rated 4.9 on Google Maps.'),
  place('essaouira-fine_dining-2', 'essaouira', 'fine_dining', 'The Loft', '5 Rue Hajjali, Essaouira, Morocco', '메디나의 퓨전 식당. 구글 지도 평점 4.7.', 'Fusion restaurant in the medina. Rated 4.7 on Google Maps.'),
  place('essaouira-fine_dining-3', 'essaouira', 'fine_dining', 'Retro Corner', '5 Rue Abdelaziz Al Fachtali, Essaouira, Morocco', '작은 식당. 구글 지도 평점 4.8.', 'Small restaurant. Rated 4.8 on Google Maps.'),

  // —— merzouga: restaurants, bakeries and cafés (2026-11-08) ——
  place('merzouga-fine_dining-1', 'merzouga', 'fine_dining', 'Restaurant Merzouga', 'Avenue Mohamed V, Merzouga, Morocco', '마을 중심의 모로코 요리 식당. 구글 지도 평점 4.8.', 'Moroccan restaurant in the village centre. Rated 4.8 on Google Maps.'),
  place('merzouga-fine_dining-2', 'merzouga', 'fine_dining', 'Nomad', 'Ksar Tabomiat, Merzouga, Morocco', '메르주가 근처 마을의 모로코 요리 식당으로, 베르베르 피자 ‘메드푸나’가 대표 메뉴입니다. 구글 지도 평점 4.9.', 'Moroccan restaurant in a village near Merzouga, known for medfouna Berber pizza. Rated 4.9 on Google Maps.'),
]
