import { place } from './placeFactory'
import type { Place } from '../types'

export const placesFOExtra: Place[] = [
  // —— torshavn ——
  place('torshavn-fine_dining-1', 'torshavn', 'fine_dining', 'PAZ', 'Doktara Jakobsens gøta 18, FO-100 Tórshavn', '미쉐린 2스타(2026) 레스토랑. 화~금 저녁, 토요일 점심에 엽니다.', 'Two-MICHELIN-star restaurant (2026), open Tuesday–Friday evenings and Saturday lunch.', { michelin: 'star2' }),
  place('torshavn-fine_dining-2', 'torshavn', 'fine_dining', 'Ræst', 'Gongin 8, FO-100 Tórshavn', '틴가네스 옆 옛 시가의 레스토랑. 바람에 말려 숙성한 페로 전통 음식(레스트)을 냅니다.', 'Old-town restaurant by Tinganes serving ræst, the Faroese wind-fermented tradition.'),
  place('torshavn-fine_dining-3', 'torshavn', 'fine_dining', 'Áarstova', 'Gongin 1, FO-100 Tórshavn', '옛 시가에서 페로 식재료로 코스 요리를 내는 레스토랑.', 'Old-town restaurant serving set menus of Faroese produce.'),

  place('torshavn-cafe-1', 'torshavn', 'cafe', 'Paname Café', 'Vaglið 4, Tórshavn', '직접 구운 페이스트리와 빵, 유기농 커피와 차를 내는 시내 중심 카페.', 'Central café with homemade pastries and bread, organic coffee and tea.'),

  // —— vagar / eysturoy (Visit Faroe Islands listings) ——
  place('vagar-fine_dining-1', 'vagar', 'fine_dining', 'Fiskastykkið', 'Úti á Bakka 12, Sandavágur', '산다보우구르의 생선 말리는 덕장 옆 생선 카페. 페로 요리를 냅니다.', 'Fish café beside the old fish-drying racks in Sandavágur, serving Faroese dishes.'),
  place('vagar-cafe-1', 'vagar', 'cafe', 'Gásadalsgarður', 'Lækjutún 5, Gásadalur', '뮐라포수르 폭포 가까이 있는 농가 카페. 농장에서 난 재료로 요리합니다. 지금은 구글지도에 임시 휴업으로 나오니 가기 전에 확인하세요.', 'Farm café near the Múlafossur waterfall, cooking with produce from the farm. Google Maps currently shows it as temporarily closed, so check before you go.'),
  place('eysturoy-fine_dining-1', 'eysturoy', 'fine_dining', 'Restaurant Muntra', 'Toftagøta 1, Fuglafjørður', '푸글라피외르뒤르 마을 식당. 근해 생선 같은 페로 요리와 스테이크를 냅니다.', 'Village restaurant in Fuglafjørður for Faroese cooking with local fish, and steaks.'),
  place('eysturoy-cafe-2', 'eysturoy', 'cafe', 'Lúkukaffi', 'Í Støð 14, Fuglafjørður', '푸글라피외르뒤르 갤러리 리바르후스 안의 작은 카페.', 'Small coffee shop inside Gallery Ribarhús in Fuglafjørður.'),

  // —— torshavn: restaurants, bakeries and cafés (2026-11-21) ——
  place('torshavn-fine_dining-4', 'torshavn', 'fine_dining', 'ROKS', 'Gongin 5, FO-100 Tórshavn', '틴가네스 옆 공긴 골목의 해산물 레스토랑으로 미쉐린 가이드에 실려 있습니다.', 'Seafood restaurant in the Gongin lane by Tinganes, listed in the MICHELIN Guide.'),
  place('torshavn-fine_dining-5', 'torshavn', 'fine_dining', 'HAMSA', 'Karlamagnusarbreyt 7a, Tórshavn', '토르스하운의 레스토랑. 구글 지도 평점 4.8.', 'Restaurant in Tórshavn. Rated 4.8 on Google Maps.'),
  place('torshavn-bakery-1', 'torshavn', 'bakery', 'Breyðvirkið', 'Jónas Broncksgøta 44, Tórshavn', '토르스하운의 빵집. 구글 지도 평점 4.9.', 'Bakery in Tórshavn. Rated 4.9 on Google Maps.'),
  place('torshavn-cafe-2', 'torshavn', 'cafe', 'Brell Café', 'Vaglið 9, Tórshavn', '바글리드 광장의 카페. 구글 지도 평점 4.7.', 'Café on Vaglið square. Rated 4.7 on Google Maps.'),
  place('torshavn-cafe-3', 'torshavn', 'cafe', 'Ástaklokkan', 'Bringsnagøta 5, Tórshavn', '옛 시가 골목의 카페. 구글 지도 평점 4.7.', 'Café in an old-town lane. Rated 4.7 on Google Maps.'),
  place('torshavn-cafe-4', 'torshavn', 'cafe', 'Kaffihúsið', 'Undir Bryggjubakka 17, Tórshavn', '항구 앞의 카페. 구글 지도 평점 4.3.', 'Café on the harbour front. Rated 4.3 on Google Maps.'),

  // —— vagar: restaurants, bakeries and cafés (2026-11-21) ——
  place('vagar-fine_dining-2', 'vagar', 'fine_dining', 'Pollastova', 'í Bygdini 4, Sørvágur', '쇠르바구르의 북유럽식 식당. 구글 지도 평점 4.6.', 'Nordic-style restaurant in Sørvágur. Rated 4.6 on Google Maps.'),
  place('vagar-fine_dining-3', 'vagar', 'fine_dining', 'Café Zorva', 'Á Hálsi 1, Sørvágur', '쇠르바구르의 브라스리. 구글 지도 평점 4.4.', 'Brasserie in Sørvágur. Rated 4.4 on Google Maps.'),

  // —— klaksvik: restaurants, bakeries and cafés (2026-11-21) ——
  place('klaksvik-fine_dining-1', 'klaksvik', 'fine_dining', 'Fish & Chips Klaksvík (Nóa)', 'Nólsoyar Pálsgøta 13a, Klaksvík', '항구 가까이의 피시 앤 칩스 가게. 구글 지도 평점 4.8.', 'Fish and chip shop near the harbour. Rated 4.8 on Google Maps.'),
  place('klaksvik-fine_dining-2', 'klaksvik', 'fine_dining', 'Reyðleyk Klaksvík', 'Nólsoyar Pálsgøta 7B, Klaksvík', '클락스비크의 피자 가게. 구글 지도 평점 4.6.', 'Pizza place in Klaksvík. Rated 4.6 on Google Maps.'),
  place('klaksvik-cafe-1', 'klaksvik', 'cafe', 'Kafé Fríða', 'Biskupstorg 5, Klaksvík', '시내 중심 광장의 카페 겸 식당. 구글 지도 평점 4.6.', 'Café and restaurant on the central square. Rated 4.6 on Google Maps.'),
  place('klaksvik-cafe-2', 'klaksvik', 'cafe', 'Amarant', 'Klingrugarður 6, Klaksvík', '클락스비크의 카페. 구글 지도 평점 4.4.', 'Café in Klaksvík. Rated 4.4 on Google Maps.'),

  // —— suduroy: restaurants, bakeries and cafés (2026-11-21) ——
  place('suduroy-fine_dining-1', 'suduroy', 'fine_dining', 'Number 1 Pizza', 'Tvørávegur 25, Tvøroyri', '트뵈로위리의 피자 가게(포장 위주). 구글 지도 평점 4.6.', 'Pizza place in Tvøroyri, mainly takeaway. Rated 4.6 on Google Maps.'),
  place('suduroy-cafe-1', 'suduroy', 'cafe', 'Cafe MorMor', 'Undir Heygnum 38, Tvøroyri', '트뵈로위리의 카페. 구글 지도 평점 4.8.', 'Café in Tvøroyri. Rated 4.8 on Google Maps.'),

  // —— sandoy: restaurants, bakeries and cafés (2026-11-21) ——
  place('sandoy-cafe-1', 'sandoy', 'cafe', 'Caféin á Mølini', 'Á Mølini 3, Húsavík', '섬 동해안 후사비크 마을의 카페 겸 브라스리. 구글 지도 평점 4.8.', 'Café-brasserie in the village of Húsavík on the island’s east coast. Rated 4.8 on Google Maps.'),
]
