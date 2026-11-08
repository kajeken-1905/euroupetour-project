import { place } from './placeFactory'
import type { Place } from '../types'

export const placesAEExtra: Place[] = [

  // —— dubai: restaurants, bakeries and cafés (2026-11-08) ——
  place('dubai-fine_dining-1', 'dubai', 'fine_dining', 'FZN by Björn Frantzén', 'Atlantis The Palm Jumeirah, Crescent Road, Dubai', '아틀란티스 더 팜의 비에른 프란첸 레스토랑. 미쉐린 3스타.', 'Björn Frantzén’s restaurant at Atlantis The Palm. Three MICHELIN stars.', { michelin: 'star3' }),
  place('dubai-fine_dining-2', 'dubai', 'fine_dining', 'Trèsind Studio', 'St. Regis Gardens, The Palm Jumeirah, Dubai', '팜 주메이라의 창작 인도 요리 레스토랑. 미쉐린 3스타.', 'Creative Indian restaurant on Palm Jumeirah. Three MICHELIN stars.', { michelin: 'star3' }),
  place('dubai-fine_dining-3', 'dubai', 'fine_dining', 'Orfali Bros', 'Wasl 51 Mall, Jumeirah 1, Dubai', '시리아 출신 삼형제가 운영하는 중동 요리 비스트로. 미쉐린 2스타.', 'Middle Eastern bistro run by three Syrian-born brothers. Two MICHELIN stars.', { michelin: 'star2' }),
  place('dubai-fine_dining-4', 'dubai', 'fine_dining', 'Il Ristorante - Niko Romito', 'Bulgari Resort Dubai Hotel, Jumeirah Bay Island, Jumeirah 2, Dubai', '불가리 리조트의 이탈리아 요리 레스토랑. 미쉐린 2스타.', 'Italian restaurant in the Bulgari Resort. Two MICHELIN stars.', { michelin: 'star2' }),
  place('dubai-fine_dining-5', 'dubai', 'fine_dining', 'Al Muntaha', 'Burj Al Arab Jumeirah, Dubai', '부르즈 알 아랍 꼭대기 층 레스토랑으로, 걸프 바다가 내려다보입니다. 미쉐린 1스타.', 'Restaurant at the top of the Burj Al Arab, looking over the Gulf. One MICHELIN star.', { michelin: 'star1' }),
  place('dubai-fine_dining-6', 'dubai', 'fine_dining', 'Ossiano', 'Atlantis The Palm, Crescent Road, The Palm, Dubai', '거대한 수족관 창 옆에서 먹는 해산물 레스토랑. 미쉐린 1스타.', 'Seafood restaurant beside a giant aquarium window. One MICHELIN star.', { michelin: 'star1' }),
  place('dubai-fine_dining-7', 'dubai', 'fine_dining', 'Jamavar', 'Address Residences, Opera District, Downtown Dubai, Dubai', '다운타운 오페라 지구의 인도 요리 레스토랑. 미쉐린 1스타.', 'Indian restaurant in Downtown’s Opera District. One MICHELIN star.', { michelin: 'star1' }),
  place('dubai-fine_dining-8', 'dubai', 'fine_dining', 'Hōseki', 'Bulgari Resort Dubai Hotel, 4th Floor, Jumeirah Bay Island, Jumeirah 2, Dubai', '불가리 리조트의 일본 요리 카운터 레스토랑. 미쉐린 1스타.', 'Japanese counter restaurant in the Bulgari Resort. One MICHELIN star.', { michelin: 'star1' }),
  place('dubai-fine_dining-9', 'dubai', 'fine_dining', 'Al Khayma Heritage Restaurant', 'Villa 54-44, Al Fahidi Historical District, Dubai', '알 파히디 역사 지구 옛집의 에미리트 요리 식당. 미쉐린 빕 구르망.', 'Emirati restaurant in an old house of the Al Fahidi district. MICHELIN Bib Gourmand.', { michelin: 'bib' }),
  place('dubai-fine_dining-10', 'dubai', 'fine_dining', '3Fils', 'Shop 02, Jumeirah Fishing Harbour 1, Al Urouba Street, Dubai', '주메이라 어항의 아시아 요리 식당. 미쉐린 빕 구르망.', 'Asian restaurant at Jumeirah Fishing Harbour. MICHELIN Bib Gourmand.', { michelin: 'bib' }),
  place('dubai-fine_dining-11', 'dubai', 'fine_dining', 'Berenjak', 'Dar Wasl Mall, Shop 01, Al Wasl Road, Al Wasl, Dubai', '페르시아 요리 식당. 미쉐린 빕 구르망.', 'Persian restaurant. MICHELIN Bib Gourmand.', { michelin: 'bib' }),
  place('dubai-fine_dining-12', 'dubai', 'fine_dining', 'Bait Maryam', 'Cluster D, Jumeirah Lakes Towers, Dubai', '중동 가정식 식당. 미쉐린 빕 구르망.', 'Middle Eastern home-style restaurant. MICHELIN Bib Gourmand.', { michelin: 'bib' }),

  // —— abu-dhabi: restaurants, bakeries and cafés (2026-11-08) ——
  place('abu-dhabi-fine_dining-1', 'abu-dhabi', 'fine_dining', 'Erth', 'North Parking, Al Hosn, Abu Dhabi', '카스르 알 호슨 옆의 현대 에미리트 요리 레스토랑. 미쉐린 1스타.', 'Modern Emirati restaurant beside Qasr Al Hosn. One MICHELIN star.', { michelin: 'star1' }),
  place('abu-dhabi-fine_dining-2', 'abu-dhabi', 'fine_dining', 'Hakkasan', 'Emirates Palace Mandarin Oriental Hotel, West Corniche Road, Al Ras Al Akhdar, Abu Dhabi', '에미리츠 팰리스의 중국 요리 레스토랑. 미쉐린 1스타.', 'Chinese restaurant in the Emirates Palace. One MICHELIN star.', { michelin: 'star1' }),
  place('abu-dhabi-fine_dining-3', 'abu-dhabi', 'fine_dining', 'Talea by Antonio Guida', 'Emirates Palace Mandarin Oriental Hotel, West Corniche Road, Al Ras Al Akhdar, Abu Dhabi', '에미리츠 팰리스의 이탈리아 요리 레스토랑. 미쉐린 1스타.', 'Italian restaurant in the Emirates Palace. One MICHELIN star.', { michelin: 'star1' }),
  place('abu-dhabi-fine_dining-4', 'abu-dhabi', 'fine_dining', 'Al Mrzab', 'Airport Road, Abu Dhabi', '에미리트 요리 식당. 미쉐린 빕 구르망.', 'Emirati restaurant. MICHELIN Bib Gourmand.', { michelin: 'bib' }),
  place('abu-dhabi-fine_dining-5', 'abu-dhabi', 'fine_dining', 'Almayass', 'Level 1, The Galleria Mall, Al Maryah Island, Abu Dhabi', '레바논·아르메니아 요리 식당. 미쉐린 빕 구르망.', 'Lebanese-Armenian restaurant. MICHELIN Bib Gourmand.', { michelin: 'bib' }),
  place('abu-dhabi-fine_dining-6', 'abu-dhabi', 'fine_dining', 'Beirut Sur Mer', 'Jacques Chirac Street, Saadiyat Cultural District, Al Saadiyat Island, Abu Dhabi', '사디야트 문화 지구 해변의 레바논 요리 식당. 미쉐린 빕 구르망.', 'Lebanese restaurant on the beach of the Saadiyat Cultural District. MICHELIN Bib Gourmand.', { michelin: 'bib' }),
  place('abu-dhabi-fine_dining-7', 'abu-dhabi', 'fine_dining', '3Fils Abu Dhabi', 'The Abu Dhabi EDITION, Al Bateen, Abu Dhabi', '알 바틴 호텔의 일본풍 창작 요리 식당. 미쉐린 빕 구르망.', 'Contemporary Japanese restaurant in an Al Bateen hotel. MICHELIN Bib Gourmand.', { michelin: 'bib' }),

  // —— dubai: restaurants, bakeries and cafés (2026-11-08) ——
  place('dubai-bakery-1', 'dubai', 'bakery', 'Bakerist', 'Al Khail Road, Hadaeq Sheikh Mohammed Bin Rashid, Dubai', '알 카일 로드의 빵집 겸 카페. 구글 지도 평점 4.8.', 'Bakery-café on Al Khail Road. Rated 4.8 on Google Maps.'),
  place('dubai-bakery-2', 'dubai', 'bakery', 'Yamanote Atelier The Dubai Mall', 'Lower Ground Floor, The Dubai Mall, Financial Centre Street, Dubai', '두바이 몰 안의 일본식 빵집. 구글 지도 평점 4.7.', 'Japanese-style bakery inside The Dubai Mall. Rated 4.7 on Google Maps.'),
  place('dubai-cafe-1', 'dubai', 'cafe', 'Arabian Tea House', 'Al Fahidi Street, Al Fahidi, Bur Dubai, Dubai', '알 파히디 역사 지구 안뜰의 아랍식 찻집 겸 식당. 구글 지도 평점 4.8.', 'Arabian tea house and restaurant in a courtyard of the Al Fahidi district. Rated 4.8 on Google Maps.'),
  place('dubai-cafe-2', 'dubai', 'cafe', 'Kulture House', '106 Jumeira Street, Jumeira First, Dubai', '주메이라 거리의 카페. 구글 지도 평점 4.5.', 'Café on Jumeira Street. Rated 4.5 on Google Maps.'),

  // —— abu-dhabi: restaurants, bakeries and cafés (2026-11-08) ——
  place('abu-dhabi-bakery-1', 'abu-dhabi', 'bakery', 'Knead Bakery & Patisserie', 'Villa 10, Sheikha Fatima bint Mubarak Street, Abu Dhabi', '빵집 겸 파티스리. 구글 지도 평점 4.7.', 'Bakery and pâtisserie. Rated 4.7 on Google Maps.'),
  place('abu-dhabi-bakery-2', 'abu-dhabi', 'bakery', 'Al Khabbaz Bakeries', 'Al Ahmadiyyah Street, Al Danah, Abu Dhabi', '아랍식 빵과 마나키시를 굽는 빵집. 구글 지도 평점 4.6.', 'Bakery for Arabic breads and manakish. Rated 4.6 on Google Maps.'),
  place('abu-dhabi-cafe-1', 'abu-dhabi', 'cafe', 'Art House Cafe', 'Villa 15, Al Bateen, Abu Dhabi', '예술 작품으로 꾸민 빌라 카페. 구글 지도 평점 4.6.', 'Café in a villa decorated with artwork. Rated 4.6 on Google Maps.'),
  place('abu-dhabi-cafe-2', 'abu-dhabi', 'cafe', 'Café 302', '302 Saeed Bin Ahmed Al Otaiba Street, Al Danah, Abu Dhabi', '시내 카페. 구글 지도 평점 4.7.', 'Downtown café. Rated 4.7 on Google Maps.'),

  // —— al-ain: restaurants, bakeries and cafés (2026-11-08) ——
  place('al-ain-fine_dining-1', 'al-ain', 'fine_dining', 'Al Fanar Restaurant & Cafe', 'Souq Al Zafarana, Al Jimi, Al Ain', '에미리트 전통 요리 식당. 구글 지도 평점 4.8.', 'Traditional Emirati restaurant. Rated 4.8 on Google Maps.'),
  place('al-ain-fine_dining-2', 'al-ain', 'fine_dining', 'Wood House Restaurant', 'Al Ain Mall, Ground Floor, Othman Bin Affan Street, Al Ain', '알아인 몰의 식당. 구글 지도 평점 4.7.', 'Restaurant in Al Ain Mall. Rated 4.7 on Google Maps.'),
]
