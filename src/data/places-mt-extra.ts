import { place } from './placeFactory'
import type { Place } from '../types'

export const placesMTExtra: Place[] = [
  // —— valletta ——
  place('valletta-fine_dining-1', 'valletta', 'fine_dining', 'Under Grain', 4.6, '167 Merchants Street, Valletta VLT 1174', '로셀리 호텔에 위치한 미쉐린 1스타 레스토랑, 몬타 계절 요리 전문.', 'One-Michelin-star restaurant inside the Rosselli Hotel, specializing in seasonal Maltese cuisine.', { reviewCount: 249 }),

  place('valletta-bakery-1', 'valletta', 'bakery', 'Malta Pastizzi (Manuela)', 4.8, '57 Merchants Street, Valletta VLT 1173', '매일 아침 갓 구워 점심 전에 매진되는 발레타의 인기 파스티치 가게.', 'Popular Valletta pastizzi shop, freshly baked each morning and often sold out by lunch.'),
  place('valletta-bakery-2', 'valletta', 'bakery', 'Grano', 4.4, '26 Triq Santa Lucia, Valletta VLT 1183', '몰타 최고의 프티라로 꼽히는 발레타의 작은 샌드위치 가게.', 'Small Valletta sandwich shop said to serve the best ftira in Malta.'),

  place('valletta-cafe-1', 'valletta', 'cafe', 'Lot Sixty One Coffee Roasters', 4.7, '30 Triq it-Teatru l-Antik, Valletta', '유럽 50대 커피숍에 선정된 발레타의 스페셜티 커피 로스터리.', 'Specialty coffee roastery in Valletta, named one of Europe\'s 50 best coffee shops.'),
  place('valletta-cafe-2', 'valletta', 'cafe', 'Caffe Cordina', 4.0, 'Republic Street, Valletta', '1837년 개업한 발레타의 상징적인 카페, 리퍼블릭 광장에 위치.', 'Iconic Valletta café on Republic Square, open since 1837.'),

  place('valletta-korean-1', 'valletta', 'korean', 'S:UN Fusion Dining', 4.7, '95-96 Strait Street, Valletta VLT 1436', '한국식 프라이드치킨·라멘·스시를 선보이는 발레타의 아시안 퓨전 레스토랑.', 'Asian fusion restaurant in Valletta serving Korean fried chicken, ramen, and sushi.'),
  place('valletta-korean-2', 'valletta', 'korean', 'Seoul Food', 4.0, 'Is-Suq tal-Belt, Triq il-Merkanti, Valletta', '이스숙 탈벨트 푸드마켓에 위치한 정통 한식당, 비빔밥·불고기 전문.', 'Authentic Korean restaurant in the Is-Suq tal-Belt food market, specializing in bibimbap and bulgogi.'),

  // —— mdina ——
  place('mdina-fine_dining-1', 'mdina', 'fine_dining', 'Medina Restaurant', 4.5, '7 Holy Cross Street, Mdina MDN 1231', '구시가 성벽 안의 미식 레스토랑.', 'Fine dining within Mdina\'s historic walls.'),
  place('mdina-fine_dining-2', 'mdina', 'fine_dining', 'The Knights Kitchen', 4.8, 'Triq L-Imhazen, Mdina', '음디나 구시가 성벽 안의 평점 높은 레스토랑.', 'Highly rated restaurant within Mdina\'s historic walls.', { reviewCount: 2936 }),
  place('mdina-fine_dining-3', 'mdina', 'fine_dining', "Coogi's Restaurant & Tea Garden", 4.6, "5 St Agatha's Esplanade, Mdina", '성 아가타 에스플러네이드의 이탈리안 레스토랑 겸 티가든.', 'Italian restaurant and tea garden on St. Agatha\'s Esplanade.', { reviewCount: 9572 }),
  place('mdina-fine_dining-4', 'mdina', 'fine_dining', 'The de Mondion Restaurant', 4.8, 'Misraħ il-Kunsill, Mdina', '자라 팰리스 호텔 옥상에 위치한 파인 다이닝 레스토랑.', 'Rooftop fine-dining restaurant atop the Xara Palace hotel.', { reviewCount: 341 }),
  place('mdina-fine_dining-5', 'mdina', 'fine_dining', 'SCALA', 4.8, '26 Saqqajja Hill, Mdina', '사카야 힐의 평점 높은 파인 다이닝 레스토랑.', 'Highly rated fine-dining restaurant on Saqqajja Hill.', { reviewCount: 437 }),

  place('mdina-bakery-1', 'mdina', 'bakery', 'Is-Serkin (Crystal Palace Bar)', 4.6, 'Mdina Gate, Rabat, Malta', '음디나 성문 바로 앞의 명물 파스티치 바.', 'Iconic pastizzi bar right by the Mdina Gate.', { reviewCount: 814 }),
  place('mdina-bakery-2', 'mdina', 'bakery', 'Marie Boutique Patisserie', 4.7, '6 Wesgħa tal-Mużew, Rabat, Malta', '박물관 광장의 평점 높은 파티스리.', 'Highly rated patisserie on Museum Square in Rabat.', { reviewCount: 492 }),
  place('mdina-bakery-3', 'mdina', 'bakery', 'Falzon Bakery - Rabat', 4.6, '7 Triq Il-Kulleġġ, Rabat, Malta', '24시간 운영하는 라바트의 인기 베이커리.', '24-hour bakery popular in Rabat.', { reviewCount: 215 }),
  place('mdina-bakery-4', 'mdina', 'bakery', 'Dulcissima Pasticceria & Gelateria Italiana', 4.6, '30 Triq San Kataldu, Rabat, Malta', '라바트의 이탈리안 파티스리 겸 젤라테리아.', 'Italian patisserie and gelateria in Rabat.', { reviewCount: 391 }),
  place('mdina-bakery-5', 'mdina', 'bakery', 'St. Catherine Bakery & Pastizzeria', 4.6, '114 Triq Santa Rita, Rabat, Malta', '산타 리타 거리의 평점 높은 파스티치 베이커리.', 'Highly rated pastizzi bakery on Triq Santa Rita.', { reviewCount: 61 }),

  place('mdina-cafe-1', 'mdina', 'cafe', 'Fontanella Tea Garden', 4.2, '1 Bastion Street, Mdina, Malta', '몰타 전경이 내려다보이는 음디나의 홈메이드 케이크 카페', 'Mdina café known for homemade cakes and stunning views over Malta'),
  place('mdina-cafe-2', 'mdina', 'cafe', 'Gustav Café', 4.6, 'Triq Il-Villegaignon, Mdina', '빌레가뇽 거리의 평점 높은 카페.', 'Highly rated café on Triq Il-Villegaignon.', { reviewCount: 279 }),
  place('mdina-cafe-3', 'mdina', 'cafe', "Bar One Café", 4.5, '7 Villegaignon Street, Mdina', '빌레가뇽 거리의 인기 카페.', 'Popular café on Villegaignon Street.', { reviewCount: 264 }),
  place('mdina-cafe-4', 'mdina', 'cafe', 'CHALK cafe eatery wine', 4.6, '36 Triq San Pawl, Mdina', '성 바오로 거리의 평점 높은 카페 겸 와인바.', 'Highly rated café and wine bar on Triq San Pawl.', { reviewCount: 1179 }),
  place('mdina-cafe-5', 'mdina', 'cafe', 'Courtyard Lounge Cafe', 4.4, 'Aragon Alley, Palazzo Bifora, Mdina', '팔라조 비포라 안뜰의 라운지 카페.', 'Courtyard lounge café inside Palazzo Bifora.', { reviewCount: 48 }),

  // —— gozo ——
  place('gozo-fine_dining-1', 'gozo', 'fine_dining', 'Tmun', 4.6, 'Triq Martino Garces, Mġarr Harbour, Għajnsielem', '30년 넘게 이어온 가족 운영 레스토랑, 당일 잡은 신선한 생선 요리로 유명한 미쉐린 가이드 등재 시푸드 레스토랑.', 'Family-run for over 30 years, this Michelin Guide-listed restaurant is known for dishes built around the day\'s fresh catch.'),
  place('gozo-fine_dining-2', 'gozo', 'fine_dining', 'Casa Vostra', 4.9, '62 Republic Street, Rabat, Gozo', '라바트 리퍼블릭 스트리트의 평점 높은 인기 레스토랑.', 'Highly rated, popular restaurant on Republic Street in Rabat.', { reviewCount: 1969 }),
  place('gozo-fine_dining-3', 'gozo', 'fine_dining', 'Ta\' Frenċ Restaurant', 4.7, 'Daħla ta’ Għajn Damma, Xagħra, Gozo', '샤그라 마을의 전통 고조 농가를 개조한 파인 다이닝 레스토랑.', 'Fine-dining restaurant set in a converted traditional Gozitan farmhouse in Xagħra.', { reviewCount: 823 }),
  place('gozo-fine_dining-4', 'gozo', 'fine_dining', 'Roża | Restaurant', 4.7, '20 St George\'s Square, Victoria, Gozo', '빅토리아 성 조지 광장의 평점 높은 레스토랑.', 'Highly rated restaurant on St. George\'s Square in Victoria.', { reviewCount: 3151 }),
  place('gozo-fine_dining-5', 'gozo', 'fine_dining', 'one80, Mgarr Yacht Marina', 4.7, 'Mgarr Yacht Marina, Gozo', '음가르 요트 마리나의 평점 높은 레스토랑.', 'Highly rated restaurant at Mgarr Yacht Marina.', { reviewCount: 1596 }),

  place('gozo-bakery-1', 'gozo', 'bakery', 'Ta\' Saminu Bakery', 4.9, 'Triq Tal-Ħamrija, Ix-Xewkija, Gozo, Malta', '장작 오븐으로 고조 전통 프티라를 굽는 가족 운영 베이커리', 'Family-run Gozo bakery baking traditional ftira in a wood-burning oven'),
  place('gozo-bakery-2', 'gozo', 'bakery', "Mekren's Bakery", 4.6, 'Triq Hanaq, Gozo', '하나크 거리의 평점 높은 인기 베이커리.', 'Highly rated, popular bakery on Triq Hanaq.', { reviewCount: 1391 }),
  place('gozo-bakery-3', 'gozo', 'bakery', "David's Bakery", 4.7, 'Triq il-Madonna tas-Sokkors, Gozo', '평점 높은 고조 베이커리, 배달 서비스도 운영.', 'Highly rated Gozo bakery that also offers delivery.', { reviewCount: 293 }),
  place('gozo-bakery-4', 'gozo', 'bakery', 'Manouche Craft Bakery & Bistro Gozo', 4.5, 'Triq San Ġorġ, Gozo', '성 조지 거리의 베이커리 겸 비스트로.', 'Bakery and bistro on Triq San Ġorġ.', { reviewCount: 524 }),

  place('gozo-cafe-1', 'gozo', 'cafe', 'Cafe Jubilee', 4.3, 'Pjazza l-Indipendenza, Ir-Rabat, Gozo, Malta', '1998년부터 이어온 라바트 중심 광장의 인기 카페 겸 비스트로.', 'Popular café-bistro on Rabat\'s central square, open since 1998.', { reviewCount: 751 }),
  place('gozo-cafe-2', 'gozo', 'cafe', 'Karamelli Brunch Cafe', 4.8, '32 Triq ir-Repubblika, Gozo', '리퍼블릭 거리의 평점 높은 브런치 카페.', 'Highly rated brunch café on Triq ir-Repubblika.', { reviewCount: 1457 }),
  place('gozo-cafe-3', 'gozo', 'cafe', 'Coffee Break Café & Bistro', 4.5, 'Triq Taħt Putirjal, Gozo', '인기 카페 겸 비스트로, 배달도 가능.', 'Popular café and bistro, also offering delivery.', { reviewCount: 2156 }),
  place('gozo-cafe-4', 'gozo', 'cafe', 'Noble Cafe Bistro', 4.7, 'Fortunato Mizzi Street, Gozo', '24시간 운영하는 평점 높은 카페 겸 비스트로.', '24-hour café and bistro, highly rated.', { reviewCount: 625 }),
  place('gozo-cafe-5', 'gozo', 'cafe', 'Black Cat Café', 4.7, '19 Triq Vajrinġa, Gozo', '평점 높은 아늑한 카페.', 'Highly rated, cozy café.', { reviewCount: 573 }),
]
