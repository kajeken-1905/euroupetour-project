import { place } from './placeFactory'
import type { Place } from '../types'

export const placesQAExtra: Place[] = [

  // —— doha: restaurants, bakeries and cafés (2026-11-08) ——
  place('doha-fine_dining-1', 'doha', 'fine_dining', 'IDAM by Alain Ducasse', '5th Floor, Museum of Islamic Art, Corniche Promenade, Doha, Qatar', '이슬람 미술관 꼭대기 층의 프랑스 요리 레스토랑으로, 만 너머 웨스트베이가 보입니다. 미쉐린 1스타.', 'French restaurant on the top floor of the Museum of Islamic Art, looking across the bay to West Bay. One MICHELIN star.', { michelin: 'star1' }),
  place('doha-fine_dining-2', 'doha', 'fine_dining', 'Jamavar', 'Al Corniche Street, West Bay, Doha, Qatar', '웨스트베이의 인도 요리 레스토랑. 미쉐린 1스타.', 'Indian restaurant in West Bay. One MICHELIN star.', { michelin: 'star1' }),
  place('doha-fine_dining-3', 'doha', 'fine_dining', 'Alba', '1st Floor, Katara Towers, Raffles Doha, Marina District, Lusail, Qatar', '루사일 카타라 타워 호텔의 이탈리아 요리 레스토랑. 미쉐린 1스타.', 'Italian restaurant in the Katara Towers hotel, Lusail. One MICHELIN star.', { michelin: 'star1' }),
  place('doha-fine_dining-4', 'doha', 'fine_dining', 'Jiwan', '4th Floor, National Museum of Qatar, Museum Park Street, Doha, Qatar', '카타르 국립 박물관 꼭대기의 중동 요리 레스토랑. 미쉐린 빕 구르망.', 'Middle Eastern restaurant atop the National Museum of Qatar. MICHELIN Bib Gourmand.', { michelin: 'bib' }),
  place('doha-fine_dining-5', 'doha', 'fine_dining', 'Argan', 'Al Jasra Street, Souq Waqif, Doha, Qatar', '수크 와키프의 모로코 요리 식당. 미쉐린 빕 구르망.', 'Moroccan restaurant in Souq Waqif. MICHELIN Bib Gourmand.', { michelin: 'bib' }),
  place('doha-fine_dining-6', 'doha', 'fine_dining', 'Baron', 'Unit 46, Mina District, Doha Port, Doha, Qatar', '올드 도하 포트의 중동 퓨전 식당. 미쉐린 빕 구르망.', 'Middle Eastern fusion restaurant in the Old Doha Port. MICHELIN Bib Gourmand.', { michelin: 'bib' }),
  place('doha-fine_dining-7', 'doha', 'fine_dining', 'Isaan', 'Grand Hyatt Doha Hotel & Villas, West Bay Lagoon Street, Doha, Qatar', '호텔 안 태국 요리 식당. 미쉐린 빕 구르망.', 'Thai restaurant in a hotel. MICHELIN Bib Gourmand.', { michelin: 'bib' }),
  place('doha-fine_dining-8', 'doha', 'fine_dining', 'Al Khaima Restaurant', 'Al Sadd Street, Doha, Qatar', '알 사드 거리의 아랍 요리 식당으로, 숯불에 구운 양갈비와 화덕 빵을 냅니다. 구글 지도 평점 4.3.', 'Arab restaurant on Al Sadd Street, serving charcoal-grilled lamb chops and oven-baked bread. Rated 4.3 on Google Maps.', { image: '/places/doha-fine_dining-8.jpg' }),
  place('doha-cafe-1', 'doha', 'cafe', 'Savant Cafe', 'Al Kahraba Street, Msheireb Downtown, Doha, Qatar', '무셰이레브의 스페셜티 커피 가게.', 'Specialty coffee shop in Msheireb.'),
  place('doha-cafe-2', 'doha', 'cafe', 'TeaTime - Souq Waqif', 'Souq Waqif, Doha, Qatar', '수크 와키프의 카라크(향신료 밀크티) 가게.', 'Karak (spiced milk tea) shop in Souq Waqif.'),
  place('doha-bakery-1', 'doha', 'bakery', 'Al Doha Modern Bakery', 'Furousiya Street, Doha, Qatar', '아랍식 빵과 과자를 굽는 빵집.', 'Bakery for Arabic breads and pastries.'),
  place('doha-bakery-2', 'doha', 'bakery', 'La Parisienne Doha', 'InterContinental Doha The City, Doha, Qatar', '호텔 안의 파티스리.', 'Pâtisserie in a hotel.'),
]
