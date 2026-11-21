import { place } from './placeFactory'
import type { Place } from '../types'

export const placesGGExtra: Place[] = [
  // —— st-peter-port ——
  place('st-peter-port-fine_dining-1', 'st-peter-port', 'fine_dining', 'Alba', '6-7 Market Street, St Peter Port GY1 1HE', '19세기 시장 건물(레 아르카드)의 장작 그릴 레스토랑. 2026년 미쉐린 빕 구르망을 받았습니다.', 'Wood-fired grill restaurant in the 19th-century Les Arcades market building; MICHELIN Bib Gourmand in 2026.', { michelin: 'bib' }),

  place('st-peter-port-cafe-1', 'st-peter-port', 'cafe', 'Mocca Coffee House', '21A Contrée Mansell, St Peter Port GY1 1HR', '옛 시가의 커피숍. 케이크와 페이스트리, 샌드위치를 냅니다.', 'Old-quarter coffee house with cakes, pastries and sandwiches.'),

  // —— sark (Sark Tourism eat & drink list; hotel websites) ——
  place('sark-fine_dining-1', 'sark', 'fine_dining', "Hugo's Restaurant & Bar", 'Dixcart Hotel, Sark GY10 1SD', '딕스카트 호텔 레스토랑. 섬에서 기른 고기·채소와 랍스터·가리비 같은 근해 해산물을 프랑스식으로 냅니다.', 'Dixcart Hotel restaurant cooking island-reared meat and vegetables and local lobster and scallops in a classic French style.'),
  place('sark-fine_dining-2', 'sark', 'fine_dining', 'Stocks Hotel Restaurant', 'Stocks Hotel, Sark GY10 1SD', '참나무 패널 방의 저녁 전용 레스토랑. 제철 메뉴로 하루 두 번 손님을 받아 예약이 꼭 필요합니다.', 'Evening-only restaurant in an oak-panelled room with a seasonal menu and two sittings a night; booking is essential.'),
  place('sark-cafe-1', 'sark', 'cafe', 'Bon Marin Cafe', 'Island Hall, Sark', '섬 한가운데 아일랜드 홀의 카페. 샌드위치와 화덕 피자, 아이스크림을 팝니다.', 'Café in the Island Hall at the centre of the island, with sandwiches, stone-baked pizza and ice cream.'),

  // —— st-peter-port: restaurants, bakeries and cafés (2026-11-21) ——
  place('st-peter-port-fine_dining-2', 'st-peter-port', 'fine_dining', 'Vraic', 'Mont Cuet Road, Chouet Bay, Vale GY3 5AT', '섬 북쪽 베일 교구 슈에 만의 미쉐린 1스타 레스토랑. 세인트피터포트에서 차로 약 15분.', 'One-MICHELIN-star restaurant at Chouet Bay in Vale, in the north of the island, about 15 minutes’ drive from St Peter Port.', { michelin: 'star1' }),
  place('st-peter-port-fine_dining-3', 'st-peter-port', 'fine_dining', 'Le Nautique', 'Quay Steps, St Peter Port GY1 2LE', '항구 앞 해산물 레스토랑으로 미쉐린 가이드에 실려 있습니다. 구글 지도 평점 4.8.', 'Harbourside seafood restaurant, listed in the MICHELIN Guide. Rated 4.8 on Google Maps.'),
  place('st-peter-port-fine_dining-4', 'st-peter-port', 'fine_dining', 'Hook', 'North Plantation, St Peter Port GY1 2LQ', '노스 플랜테이션의 레스토랑으로 미쉐린 가이드에 실려 있습니다.', 'Restaurant on North Plantation, listed in the MICHELIN Guide.'),
  place('st-peter-port-fine_dining-5', 'st-peter-port', 'fine_dining', 'Fukku', '16-18 Smith Street, St Peter Port GY1 2JQ', '스미스 스트리트의 레스토랑으로 미쉐린 가이드에 실려 있습니다.', 'Restaurant on Smith Street, listed in the MICHELIN Guide.'),
  place('st-peter-port-cafe-2', 'st-peter-port', 'cafe', 'Café Emilia', 'The Pollet, St Peter Port', '더 폴렛 거리의 카페. 구글 지도 평점 4.6.', 'Café on The Pollet. Rated 4.6 on Google Maps.'),
  place('st-peter-port-cafe-3', 'st-peter-port', 'cafe', 'The Terrace Garden Cafe', 'Cornet Street, St Peter Port', '코넷 스트리트 언덕의 테라스 정원 카페. 구글 지도 평점 4.4.', 'Terrace garden café on Cornet Street. Rated 4.4 on Google Maps.'),
  place('st-peter-port-cafe-4', 'st-peter-port', 'cafe', 'Dix Neuf', '19 Commercial Arcade, St Peter Port', '커머셜 아케이드의 카페. 구글 지도 평점 4.4.', 'Café in the Commercial Arcade. Rated 4.4 on Google Maps.'),
  place('st-peter-port-cafe-5', 'st-peter-port', 'cafe', 'Coco', 'South Esplanade, St Peter Port', '사우스 에스플러네이드의 아침 식사 카페. 구글 지도 평점 4.6.', 'Breakfast café on the South Esplanade. Rated 4.6 on Google Maps.'),

  // —— alderney: restaurants, bakeries and cafés (2026-11-21) ——
  place('alderney-fine_dining-1', 'alderney', 'fine_dining', 'Jack\'s Alderney', 'Victoria Street, St Anne, Alderney', '세인트앤 빅토리아 스트리트의 식당. 구글 지도 평점 4.7.', 'Restaurant on Victoria Street in St Anne. Rated 4.7 on Google Maps.'),
  place('alderney-fine_dining-2', 'alderney', 'fine_dining', 'The Moorings', 'Braye Street, Alderney', '브레이 항구 앞의 바 겸 식당. 구글 지도 평점 4.6.', 'Bar and restaurant by Braye Harbour. Rated 4.6 on Google Maps.'),
  place('alderney-fine_dining-3', 'alderney', 'fine_dining', 'Nellie Gray\'s', 'Victoria Street, St Anne, Alderney', '세인트앤의 인도 요리 식당. 구글 지도 평점 4.5.', 'Indian restaurant in St Anne. Rated 4.5 on Google Maps.'),
  place('alderney-fine_dining-4', 'alderney', 'fine_dining', 'Mai Thai', '6 Val Road, St Anne, Alderney', '세인트앤의 태국 요리 식당. 구글 지도 평점 4.7.', 'Thai restaurant in St Anne. Rated 4.7 on Google Maps.'),
  place('alderney-fine_dining-5', 'alderney', 'fine_dining', 'Braye Chippy', 'Braye Harbour, Alderney GY9 3XX', '브레이 항구의 피시 앤 칩스 가게. 구글 지도 평점 4.3.', 'Fish and chip shop at Braye Harbour. Rated 4.3 on Google Maps.'),
]
