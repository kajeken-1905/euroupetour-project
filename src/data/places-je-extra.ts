import { place } from './placeFactory'
import type { Place } from '../types'

// Restaurants from the MICHELIN Guide's Jersey list (updated 27 March 2026) and their own websites.
export const placesJEExtra: Place[] = [
  // —— st-helier ——
  place('st-helier-fine_dining-1', 'st-helier', 'fine_dining', 'Bohemia', 'The Club Hotel & Spa, Green Street, St Helier JE2 4UH', '클럽 호텔 안의 미쉐린 1스타 레스토랑. 20년 가까이 별을 지켜 왔습니다.', 'One-Michelin-star restaurant in The Club Hotel, which has held its star for some twenty years.', { michelin: 'star1' }),
  place('st-helier-fine_dining-2', 'st-helier', 'fine_dining', 'Samphire', '7-11 Don Street, St Helier JE2 4TQ', '저지 식재료로 요리하는 레스토랑으로 미쉐린 가이드에 실려 있습니다. 일·월요일은 쉽니다.', 'Restaurant cooking with Jersey produce, listed in the MICHELIN Guide; closed Sundays and Mondays.'),
  place('st-helier-fine_dining-3', 'st-helier', 'fine_dining', 'Tassili', 'Esplanade, St Helier JE2 3QA', '에스플러네이드의 레스토랑으로 미쉐린 가이드에 실려 있습니다.', 'Restaurant on the Esplanade, listed in the MICHELIN Guide.'),

  // —— gorey ——
  place('gorey-fine_dining-1', 'gorey', 'fine_dining', 'Bass and Lobster', 'Gorey Coast Road, St Martin JE3 6EU', '고리 해안 도로의 비스트로식 해산물 레스토랑으로 미쉐린 가이드에 실려 있습니다.', 'Bistro-style seafood restaurant on the Gorey coast road, listed in the MICHELIN Guide.'),

  place('st-helier-cafe-1', 'st-helier', 'cafe', 'Tavola', 'Central Market, Halkett Place, St Helier', '빅토리아 시대 중앙 시장 안의 이탈리아식 카페로 미쉐린 가이드에 실려 있습니다. 브런치를 냅니다.', 'Italian café inside the Victorian Central Market, listed in the MICHELIN Guide; serves brunch.'),

  // —— gorey: bakeries and cafés (2026-11-04) ——
  place('gorey-cafe-1', 'gorey', 'cafe', 'Ransoms Tearoom', 'Grasford Lane, Grande Route de Faldouet, St Martin JE3 6UD', '고리 북쪽 정원 가게의 찻집.', 'Tea room at a garden shop north of Gorey.'),

  // —— st-helier: restaurants, bakeries and cafés (2026-11-21) ——
  place('st-helier-fine_dining-4', 'st-helier', 'fine_dining', 'Sage', '51-53 King Street, St Helier JE2 4WE', '킹 스트리트의 레스토랑으로 미쉐린 가이드에 실려 있습니다.', 'Restaurant on King Street, listed in the MICHELIN Guide.'),
  place('st-helier-fine_dining-5', 'st-helier', 'fine_dining', 'Arroz', '41 The Parade, St Helier JE2 3QQ', '더 퍼레이드의 레스토랑으로 미쉐린 가이드에 실려 있습니다.', 'Restaurant on The Parade, listed in the MICHELIN Guide.'),
  place('st-helier-bakery-1', 'st-helier', 'bakery', 'Bruno\'s Bakery - La Baguette Chaude', '5 York Street, St Helier', '시청 가까운 요크 스트리트의 빵집. 구글 지도 평점 4.6.', 'Bakery on York Street near the town hall. Rated 4.6 on Google Maps.'),
  place('st-helier-cafe-2', 'st-helier', 'cafe', 'Locke\'s', '5 Pitt Street, Charing Cross, St Helier', '차링 크로스의 카페. 구글 지도 평점 4.7.', 'Café at Charing Cross. Rated 4.7 on Google Maps.'),
  place('st-helier-cafe-3', 'st-helier', 'cafe', 'Bean Around The World', '73 Halkett Place, St Helier', '중앙 시장 옆 핼킷 플레이스의 커피집. 구글 지도 평점 4.6.', 'Coffee shop on Halkett Place by the Central Market. Rated 4.6 on Google Maps.'),
  place('st-helier-cafe-4', 'st-helier', 'cafe', 'Curiosity Coffee Shop', '14 Sand Street, St Helier', '샌드 스트리트의 작은 커피집. 구글 지도 평점 4.7.', 'Small coffee shop on Sand Street. Rated 4.7 on Google Maps.'),
  place('st-helier-cafe-5', 'st-helier', 'cafe', 'Rosie\'s Tea Shop', '8 Market Street, St Helier', '중앙 시장 앞 찻집. 구글 지도 평점 4.5.', 'Tea shop opposite the Central Market. Rated 4.5 on Google Maps.'),

  // —— st-aubin: restaurants, bakeries and cafés (2026-11-21) ——
  place('st-aubin-fine_dining-1', 'st-aubin', 'fine_dining', 'enotèca', 'Charing Cross, St Aubin JE3 8AA', '세인트오뱅의 레스토랑으로 미쉐린 가이드에 실려 있습니다.', 'Restaurant in St Aubin, listed in the MICHELIN Guide.'),
  place('st-aubin-fine_dining-2', 'st-aubin', 'fine_dining', 'Ob Mizi at The Table', 'Le Boulevard, St Aubin JE3 8AB', '항구 앞 르 불바르의 레스토랑으로 미쉐린 가이드에 실려 있습니다.', 'Restaurant on Le Boulevard by the harbour, listed in the MICHELIN Guide.'),
  place('st-aubin-fine_dining-3', 'st-aubin', 'fine_dining', 'Mark Jordan at the Beach', 'La Plage, La Route de la Haule, Beaumont JE3 7YD', '세인트오뱅 만 해변 앞 보몽의 레스토랑으로 미쉐린 가이드에 실려 있습니다.', 'Beachfront restaurant at Beaumont on St Aubin’s Bay, listed in the MICHELIN Guide.'),
  place('st-aubin-fine_dining-4', 'st-aubin', 'fine_dining', 'The Muddy Duck', 'Le Boulevard, St Aubin', '항구 앞의 해산물 레스토랑. 구글 지도 평점 4.6.', 'Seafood restaurant on the harbour front. Rated 4.6 on Google Maps.'),
  place('st-aubin-fine_dining-5', 'st-aubin', 'fine_dining', 'Kyoto Prefecture', '2 Bank Place, Charing Cross, St Aubin', '세인트오뱅의 일본 요리 식당. 구글 지도 평점 4.9.', 'Japanese restaurant in St Aubin. Rated 4.9 on Google Maps.'),
  place('st-aubin-cafe-1', 'st-aubin', 'cafe', 'Gallery Cafe & Bistro', 'Le Boulevard, St Aubin', '항구 앞의 카페 겸 비스트로. 구글 지도 평점 4.6.', 'Café-bistro on the harbour front. Rated 4.6 on Google Maps.'),

  // —— st-brelade: restaurants, bakeries and cafés (2026-11-21) ——
  place('st-brelade-fine_dining-1', 'st-brelade', 'fine_dining', 'Oyster Box', 'La Route de la Baie, St Brelade JE3 8EF', '해변 앞 해산물 레스토랑으로 미쉐린 가이드에 실려 있습니다. 구글 지도 평점 4.6.', 'Beachfront seafood restaurant, listed in the MICHELIN Guide. Rated 4.6 on Google Maps.'),
  place('st-brelade-fine_dining-2', 'st-brelade', 'fine_dining', 'Jersey Crab Shack St Brelade', 'La Route de la Baie, St Brelade', '해변 앞의 캐주얼 해산물 식당. 구글 지도 평점 4.5.', 'Casual seafood place on the beach front. Rated 4.5 on Google Maps.'),
  place('st-brelade-fine_dining-3', 'st-brelade', 'fine_dining', 'The Beach Club', 'St Brelade\'s Bay, St Brelade', '해변 동쪽 끝의 레스토랑 겸 바. 구글 지도 평점 4.4.', 'Restaurant and bar at the east end of the beach. Rated 4.4 on Google Maps.'),
  place('st-brelade-fine_dining-4', 'st-brelade', 'fine_dining', 'Old Smugglers Inn', 'Le Mont du Ouaisné, St Brelade', '이웃한 우에네 만의 오래된 펍 식당. 구글 지도 평점 4.6.', 'Old pub-restaurant on neighbouring Ouaisné Bay. Rated 4.6 on Google Maps.'),
  place('st-brelade-cafe-1', 'st-brelade', 'cafe', 'Midbay Cafe', 'La Rue de la Baie, St Brelade', '해변 한가운데의 카페. 구글 지도 평점 4.4.', 'Café in the middle of the beach. Rated 4.4 on Google Maps.'),

  // —— st-ouen: restaurants, bakeries and cafés (2026-11-21) ——
  place('st-ouen-fine_dining-1', 'st-ouen', 'fine_dining', 'Ocean', 'Le Mont de la Pulente, La Pulente JE3 8HE', '해변 남쪽 끝 라 퓔랑트 호텔 안의 레스토랑으로 미쉐린 가이드에 실려 있습니다.', 'Hotel restaurant at La Pulente at the south end of the bay, listed in the MICHELIN Guide.'),
  place('st-ouen-fine_dining-2', 'st-ouen', 'fine_dining', 'Le Braye Cafe', 'La Grande Route des Mielles, St Ouen\'s Bay', '해변 남쪽 해안 도로의 식당. 구글 지도 평점 4.4.', 'Restaurant on the coast road at the south end of the bay. Rated 4.4 on Google Maps.'),
  place('st-ouen-fine_dining-3', 'st-ouen', 'fine_dining', 'Le Moulin de Lecq', 'Le Mont de la Grève de Lecq, St Ouen', '북쪽 해안 그레브 드 렉의 옛 물레방앗간 펍 식당. 구글 지도 평점 4.4.', 'Pub-restaurant in an old watermill at Grève de Lecq on the north coast. Rated 4.4 on Google Maps.'),

  // —— gorey: restaurants, bakeries and cafés (2026-11-22) ——
  place('gorey-fine_dining-2', 'gorey', 'fine_dining', 'Sumas Restaurant', 'Gorey Pier, Gorey JE3 6ET', '고리 부두의 해산물 레스토랑. 구글 지도 평점 4.7.', 'Seafood restaurant on Gorey Pier. Rated 4.7 on Google Maps.'),
  place('gorey-fine_dining-3', 'gorey', 'fine_dining', 'The Moorings Hotel & Restaurant', 'Gorey Pier, Gorey JE3 6EW', '고리 부두 호텔의 레스토랑. 구글 지도 평점 4.6.', 'Hotel restaurant on Gorey Pier. Rated 4.6 on Google Maps.'),
  place('gorey-fine_dining-4', 'gorey', 'fine_dining', 'Veranda Jersey', 'Gouray Main Road, St Martin JE3 9EP', '고리 위쪽 언덕길의 레스토랑. 구글 지도 평점 4.8.', 'Restaurant on the hill above Gorey. Rated 4.8 on Google Maps.'),
  place('gorey-fine_dining-5', 'gorey', 'fine_dining', 'Spice View Restaurant', 'La Route de la Côte, Gorey JE3 6DR', '방글라데시·인도 요리 식당. 구글 지도 평점 4.6.', 'Bangladeshi and Indian restaurant. Rated 4.6 on Google Maps.'),
  place('gorey-cafe-2', 'gorey', 'cafe', 'Rhona\'s at the Beach', 'Gorey Coast Road, St Martin', '고리 해안 도로 해변의 카페. 구글 지도 평점 4.5.', 'Beach café on the Gorey coast road. Rated 4.5 on Google Maps.'),
  place('gorey-cafe-3', 'gorey', 'cafe', 'Eastside Coffee Shop', 'Mont de Gouray, Gorey JE3 6ET', '고리 부두 옆 커피숍. 구글 지도 평점 4.4.', 'Coffee shop by Gorey harbour. Rated 4.4 on Google Maps.'),
]
