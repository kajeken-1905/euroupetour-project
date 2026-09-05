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
  place('mdina-bakery-1', 'mdina', 'bakery', 'Is-Serkin (Crystal Palace Bar)', 4.6, 'Mdina Gate, Rabat, Malta', '음디나 성문 바로 앞의 명물 파스티치 바.', 'Iconic pastizzi bar right by the Mdina Gate.', { reviewCount: 814 }),
  place('mdina-cafe-1', 'mdina', 'cafe', 'Fontanella Tea Garden', 4.2, '1 Bastion Street, Mdina, Malta', '몰타 전경이 내려다보이는 음디나의 홈메이드 케이크 카페', 'Mdina café known for homemade cakes and stunning views over Malta'),

  // —— gozo ——
  place('gozo-fine_dining-1', 'gozo', 'fine_dining', 'Tmun', 4.6, 'Triq Martino Garces, Mġarr Harbour, Għajnsielem', '30년 넘게 이어온 가족 운영 레스토랑, 당일 잡은 신선한 생선 요리로 유명한 미쉐린 가이드 등재 시푸드 레스토랑.', 'Family-run for over 30 years, this Michelin Guide-listed restaurant is known for dishes built around the day\'s fresh catch.'),

  place('gozo-bakery-1', 'gozo', 'bakery', 'Ta\' Saminu Bakery', 4.9, 'Triq Tal-Ħamrija, Ix-Xewkija, Gozo, Malta', '장작 오븐으로 고조 전통 프티라를 굽는 가족 운영 베이커리', 'Family-run Gozo bakery baking traditional ftira in a wood-burning oven'),
  place('gozo-cafe-1', 'gozo', 'cafe', 'Cafe Jubilee', 4.3, 'Pjazza l-Indipendenza, Ir-Rabat, Gozo, Malta', '1998년부터 이어온 라바트 중심 광장의 인기 카페 겸 비스트로.', 'Popular café-bistro on Rabat\'s central square, open since 1998.', { reviewCount: 751 }),
]
