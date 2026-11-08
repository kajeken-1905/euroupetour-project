import { place } from './placeFactory'
import type { Place } from '../types'

export const placesSAExtra: Place[] = [

  // —— riyadh: restaurants, bakeries and cafés (2026-11-09) ——
  place('riyadh-fine_dining-1', 'riyadh', 'fine_dining', 'Najd Village', 'Al-Takhassusi, Al-Ulaya, Riyadh, 12331, Saudi Arabia', '나즈드 지방 옛집처럼 꾸민 사우디 전통 요리 식당. 미쉐린 빕 구르망.', 'Saudi restaurant styled like an old Najdi house. MICHELIN Bib Gourmand.', { michelin: 'bib' }),
  place('riyadh-fine_dining-2', 'riyadh', 'fine_dining', 'Tameesa', 'King Abdul Aziz Branch Road, Alyasmin, Riyadh, 13326, Saudi Arabia', '사우디 요리 식당. 미쉐린 빕 구르망.', 'Saudi restaurant. MICHELIN Bib Gourmand.', { michelin: 'bib' }),
  place('riyadh-fine_dining-3', 'riyadh', 'fine_dining', 'Mirzam', 'Takamul Plaza, Altakhassusi Street, Alnakheel District, Riyadh, Saudi Arabia', '사우디 요리 식당. 미쉐린 빕 구르망.', 'Saudi restaurant. MICHELIN Bib Gourmand.', { michelin: 'bib' }),
  place('riyadh-fine_dining-4', 'riyadh', 'fine_dining', 'Fi Glbak', '3058 Prince Turki Bin Abdulaziz Al Awal Rd, Al Mohammadiyyah, Riyadh, 12362, Saudi Arabia', '사우디 요리 식당. 미쉐린 빕 구르망.', 'Saudi restaurant. MICHELIN Bib Gourmand.', { michelin: 'bib' }),
  place('riyadh-fine_dining-5', 'riyadh', 'fine_dining', 'Em Sherif Café', 'The Zone, 7236 Al Takhassousi, Al Mohammadiyyah, Riyadh, 12362, Saudi Arabia', '레바논 요리 카페 겸 식당. 미쉐린 빕 구르망.', 'Lebanese café-restaurant. MICHELIN Bib Gourmand.', { michelin: 'bib' }),
  place('riyadh-fine_dining-6', 'riyadh', 'fine_dining', 'Sasani', '3340 Suwayd Ibn Harithah, Hittin, Riyadh, 13516, Saudi Arabia', '페르시아 요리 식당. 미쉐린 빕 구르망.', 'Persian restaurant. MICHELIN Bib Gourmand.', { michelin: 'bib' }),
  place('riyadh-fine_dining-7', 'riyadh', 'fine_dining', 'KAYZŌ', '2752 Prince Musaid bin Abdulaziz bin Jalawi Street, As Sulimaniyah, Riyadh, 12234, Saudi Arabia', '일본풍 창작 요리 식당. 미쉐린 빕 구르망.', 'Contemporary Japanese restaurant. MICHELIN Bib Gourmand.', { michelin: 'bib' }),

  // —— jeddah: restaurants, bakeries and cafés (2026-11-09) ——
  place('jeddah-fine_dining-1', 'jeddah', 'fine_dining', 'The Lucky Llama', '4056 Ibrahim Al-Anqari, Al Mohammadiyyah, Jeddah, 23617, Saudi Arabia', '제다의 식당. 미쉐린 빕 구르망.', 'Restaurant in Jeddah. MICHELIN Bib Gourmand.', { michelin: 'bib' }),

  // —— alula: restaurants, bakeries and cafés (2026-11-09) ——
  place('alula-fine_dining-1', 'alula', 'fine_dining', 'Joontos', 'Dar Tantora The House Hotel, 375 Old Town, AlUla, 43562, Saudi Arabia', '구시가의 흙벽 호텔 다르 탄토라 안 식당. 미쉐린 빕 구르망.', 'Restaurant in the mud-brick Dar Tantora hotel in the Old Town. MICHELIN Bib Gourmand.', { michelin: 'bib' }),
  place('alula-fine_dining-2', 'alula', 'fine_dining', 'Tofareya', 'Old Town, AlUla, 41921, Saudi Arabia', '알울라 구시가의 식당. 미쉐린 빕 구르망.', 'Restaurant in AlUla Old Town. MICHELIN Bib Gourmand.', { michelin: 'bib' }),

  // —— riyadh: restaurants, bakeries and cafés (2026-11-09) ——
  place('riyadh-cafe-1', 'riyadh', 'cafe', 'Hjeen Roasters', '3718 Khalifah Ibn Badi Road, Riyadh, Saudi Arabia', '스페셜티 커피 로스터리 카페. 구글 지도 평점 4.6.', 'Specialty coffee roastery café. Rated 4.6 on Google Maps.'),
  place('riyadh-cafe-2', 'riyadh', 'cafe', 'Y97 Specialty Coffee', 'Prince Nasir Bin Saud Bin Farhan Al Saud Street, Riyadh, Saudi Arabia', '스페셜티 커피 카페. 구글 지도 평점 4.7.', 'Specialty coffee café. Rated 4.7 on Google Maps.'),
  place('riyadh-bakery-1', 'riyadh', 'bakery', 'The Rustic Bakery', '2619 Prince Saud Ibn Abdul Aziz Al Saud Al Kabir Road, Riyadh, Saudi Arabia', '천연 발효 빵집. 구글 지도 평점 4.7.', 'Artisan bakery. Rated 4.7 on Google Maps.'),
  place('riyadh-bakery-2', 'riyadh', 'bakery', 'Bread Ahead Bakery & School (Tahlia)', 'Tahliah Street, Riyadh, Saudi Arabia', '런던 버러 마켓에서 시작한 빵집 겸 베이킹 학교. 구글 지도 평점 4.8.', 'Bakery and baking school that began at London’s Borough Market. Rated 4.8 on Google Maps.'),

  // —— jeddah: restaurants, bakeries and cafés (2026-11-09) ——
  place('jeddah-fine_dining-2', 'jeddah', 'fine_dining', 'Albasali Seafood Restaurant', 'Suq Bab Makkah, Al-Balad, Jeddah, Saudi Arabia', '알발라드 바브 메카 시장 뒤편의 해산물 식당. 구글 지도 평점 4.6.', 'Seafood restaurant behind the Bab Makkah market in Al-Balad. Rated 4.6 on Google Maps.'),
  place('jeddah-cafe-1', 'jeddah', 'cafe', 'NOIR', 'Badeeb Lane, Al-Balad, Jeddah, Saudi Arabia', '알발라드 골목의 카페. 구글 지도 평점 4.6.', 'Café in an Al-Balad lane. Rated 4.6 on Google Maps.'),
  place('jeddah-bakery-1', 'jeddah', 'bakery', 'Bread Ahead Bakery & School', 'King Abdulaziz Service Road, Jeddah, Saudi Arabia', '런던 버러 마켓에서 시작한 빵집 겸 베이킹 학교. 구글 지도 평점 4.6.', 'Bakery and baking school that began at London’s Borough Market. Rated 4.6 on Google Maps.'),

  // —— alula: restaurants, bakeries and cafés (2026-11-09) ——
  place('alula-cafe-1', 'alula', 'cafe', 'Wacafe Old Town', 'Old Town, AlUla, Saudi Arabia', '알울라 구시가의 카페. 구글 지도 평점 4.6.', 'Café in AlUla Old Town. Rated 4.6 on Google Maps.'),
  place('alula-fine_dining-3', 'alula', 'fine_dining', 'Entrecôte Café de Paris', 'The Old Town, AlUla, Saudi Arabia', '구시가의 프랑스식 스테이크 식당. 구글 지도 평점 4.7.', 'French steak restaurant in the Old Town. Rated 4.7 on Google Maps.'),
]
