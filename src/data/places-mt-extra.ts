import { place } from './placeFactory'
import type { Place } from '../types'

export const placesMTExtra: Place[] = [
  // —— valletta ——
  place('valletta-fine_dining-1', 'valletta', 'fine_dining', 'Under Grain', '167 Merchants Street, Valletta VLT 1174', '로셀리 호텔 안의 미쉐린 1스타 레스토랑. 일·월요일은 쉽니다.', 'One-Michelin-star restaurant in the Rosselli hotel; closed Sundays and Mondays.', { michelin: 'star1' }),
  place('valletta-fine_dining-2', 'valletta', 'fine_dining', 'ION Harbour by Simon Rogan', '11 Saint Barbara Bastion, VLT 1232 Valletta, Malta', '이니알라 하버 하우스 4층의 고급 레스토랑.', 'Fine-dining restaurant on the top floor of Iniala Harbour House.'),
  place('valletta-fine_dining-3', 'valletta', 'fine_dining', 'Noni', '211 Republic Street, Valletta VLT 1116', '리퍼블릭 거리 타운하우스의 미쉐린 1스타 레스토랑. 일·월요일은 쉽니다.', 'One-Michelin-star restaurant in a townhouse on Republic Street; closed Sundays and Mondays.', { michelin: 'star1', image: '/places/valletta-fine_dining-3.jpg' }),
  place('valletta-fine_dining-4', 'valletta', 'fine_dining', 'Rubino', '53 Old Bakery Street, Valletta VLT 1454', '1906년 제과점이던 공간에 자리한, 매일 바뀌는 흑판 메뉴의 전통 몰타 요리 레스토랑.', 'Traditional Maltese restaurant in a former 1906 confectionery, with a daily blackboard menu.', { image: '/places/valletta-fine_dining-4.jpg' }),

  place('valletta-bakery-1', 'valletta', 'bakery', 'Malta Pastizzi (Manuela)', '57 Merchants Street, Valletta VLT 1173', '매일 아침 파스티치를 굽는 발레타의 가게. 점심 전에 다 팔릴 때가 많습니다.', 'Valletta pastizzi shop baking every morning; often sold out by lunch.'),
  place('valletta-bakery-2', 'valletta', 'bakery', 'Grano', '26 Triq Santa Lucia, Valletta VLT 1183', '프티라(몰타 빵 샌드위치)를 파는 발레타의 작은 가게.', 'Small Valletta shop selling ftira sandwiches.', { image: '/places/valletta-bakery-2.jpg' }),

  place('valletta-cafe-1', 'valletta', 'cafe', 'Lot Sixty One Coffee Roasters', '30 Triq it-Teatru l-Antik, Valletta', '발레타의 스페셜티 커피 로스터리.', 'Specialty coffee roastery in Valletta.'),
  place('valletta-cafe-2', 'valletta', 'cafe', 'Caffe Cordina', '244/245 Republic Street, VLT 0004 Valletta, Malta', '1837년 문을 연 리퍼블릭 광장의 카페.', 'Café on Republic Square, open since 1837.'),

  place('valletta-korean-1', 'valletta', 'korean', 'S:UN Fusion Dining', '95-96 Strait Street, Valletta VLT 1436', '한국식 프라이드치킨·라멘·스시를 선보이는 발레타의 아시안 퓨전 레스토랑.', 'Asian fusion restaurant in Valletta serving Korean fried chicken, ramen, and sushi.'),

  // —— mdina ——
  place('mdina-fine_dining-1', 'mdina', 'fine_dining', 'Medina Restaurant', '7 Holy Cross Street, Mdina MDN 1231', '구시가 성벽 안의 미식 레스토랑.', 'Fine dining within Mdina\'s historic walls.'),
  place('mdina-fine_dining-2', 'mdina', 'fine_dining', 'The Knights Kitchen', 'Triq l-Imħażen, MDN 1201 Mdina, Malta', '음디나 구시가 성벽 안의 레스토랑.', 'Restaurant within Mdina\'s historic walls.'),
  place('mdina-fine_dining-3', 'mdina', 'fine_dining', "Coogi's Restaurant & Tea Garden", "5 St Agatha's Esplanade, Mdina", '성 아가타 에스플러네이드의 이탈리안 레스토랑 겸 티가든.', 'Italian restaurant and tea garden on St. Agatha\'s Esplanade.', { image: '/places/mdina-fine_dining-3.jpg' }),
  place('mdina-fine_dining-4', 'mdina', 'fine_dining', 'The de Mondion Restaurant', 'The Xara Palace, Misraħ il-Kunsill, Mdina MDN 1050, Malta', '사라 팰리스 호텔 옥상의 파인다이닝 레스토랑.', 'Rooftop fine-dining restaurant at the Xara Palace hotel.'),
  place('mdina-fine_dining-5', 'mdina', 'fine_dining', 'SCALA', '26 Saqqajja Hill, Mdina', '사카야 힐의 파인 다이닝 레스토랑.', 'Fine-dining restaurant on Saqqajja Hill.'),

  place('mdina-bakery-1', 'mdina', 'bakery', 'Is-Serkin (Crystal Palace Bar)', 'Triq San Pawl, Rabat, Malta', '1945년 무렵부터 이어온 라바트의 파스티치 바.', 'Rabat pastizzi bar running since the mid-1940s.'),
  place('mdina-bakery-2', 'mdina', 'bakery', 'Marie Boutique Patisserie', '6 Wesgħa tal-Mużew, Rabat, Malta', '박물관 광장의 파티스리.', 'Patisserie on Museum Square in Rabat.'),
  place('mdina-bakery-3', 'mdina', 'bakery', 'Falzon Bakery - Rabat', '7 Triq Il-Kulleġġ, Rabat, Malta', '24시간 여는 라바트의 빵집.', '24-hour bakery in Rabat.'),
  place('mdina-bakery-4', 'mdina', 'bakery', 'Dulcissima Pasticceria & Gelateria Italiana', '30 Triq San Kataldu, Rabat, Malta', '라바트의 이탈리안 파티스리 겸 젤라테리아.', 'Italian patisserie and gelateria in Rabat.'),
  place('mdina-bakery-5', 'mdina', 'bakery', 'St. Catherine Bakery & Pastizzeria', '114 Triq Santa Rita, Rabat, Malta', '산타 리타 거리의 파스티치 베이커리.', 'Pastizzi bakery on Triq Santa Rita.'),

  place('mdina-cafe-1', 'mdina', 'cafe', 'Fontanella Tea Garden', '1 Bastion Street, Mdina, Malta', '몰타 전경이 내려다보이는 음디나의 홈메이드 케이크 카페', 'Mdina café known for homemade cakes and stunning views over Malta', { image: '/places/mdina-cafe-1.jpg' }),
  place('mdina-cafe-2', 'mdina', 'cafe', 'Gustav Café', 'Palazzo Falson, Villegaignon Street, Mdina MDN 1191, Malta', '빌레가뇽 거리의 카페.', 'Café on Triq Il-Villegaignon.'),
  place('mdina-cafe-3', 'mdina', 'cafe', "Bar One Café", '7 Villegaignon Street, Mdina', '빌레가뇽 거리의 카페.', 'Café on Villegaignon Street.'),
  place('mdina-cafe-4', 'mdina', 'cafe', 'CHALK cafe eatery wine', '36 Triq San Pawl, Mdina', '성 바오로 거리의 카페 겸 와인바.', 'Café and wine bar on Triq San Pawl.'),
  place('mdina-cafe-5', 'mdina', 'cafe', 'Courtyard Lounge Cafe', 'Sqaq Aragona, MDN 1260 Mdina, Malta', '팔라조 비포라 안뜰의 라운지 카페.', 'Courtyard lounge café inside Palazzo Bifora.'),

  // —— gozo ——
  place('gozo-fine_dining-1', 'gozo', 'fine_dining', 'Tmun', 'Triq Martino Garces, Mġarr Harbour, Għajnsielem GSM 2413, Malta', '그날 잡은 생선으로 요리하는 가족 운영 해산물 레스토랑.', 'Family-run seafood restaurant cooking the day’s catch.'),
  place('gozo-fine_dining-2', 'gozo', 'fine_dining', 'Casa Vostra', '62 Republic Street, Rabat, Gozo', '라바트 리퍼블릭 거리의 레스토랑.', 'Restaurant on Republic Street in Rabat.', { image: '/places/gozo-fine_dining-2.jpg' }),
  place('gozo-fine_dining-3', 'gozo', 'fine_dining', 'Ta\' Frenċ Restaurant', 'Daħla ta’ Għajn Damma, Xagħra, Gozo', '샤그라 마을의 옛 농가 레스토랑(1982년 개업). 와인 리스트가 깁니다.', 'Farmhouse restaurant in Xagħra, open since 1982, with a long wine list.'),
  place('gozo-fine_dining-4', 'gozo', 'fine_dining', 'Roża | Restaurant', '20 St George\'s Square, Victoria, Gozo', '빅토리아 성 조지 광장의 레스토랑.', 'Restaurant on St. George\'s Square in Victoria.'),
  place('gozo-fine_dining-5', 'gozo', 'fine_dining', 'one80, Mgarr Yacht Marina', 'Triq Martino Garces, Mġarr Yacht Marina, Għajnsielem GSM 2413, Malta', '음가르 요트 마리나의 레스토랑.', 'Restaurant at Mgarr Yacht Marina.'),

  place('gozo-bakery-1', 'gozo', 'bakery', 'Ta\' Saminu Bakery', 'Triq Tal-Ħamrija, Ix-Xewkija, Gozo, Malta', '장작 오븐으로 고조 전통 프티라를 굽는 가족 운영 베이커리', 'Family-run Gozo bakery baking traditional ftira in a wood-burning oven'),
  place('gozo-bakery-2', 'gozo', 'bakery', "Mekren's Bakery", 'Hanaq Street, Nadur, Gozo, Malta', '하나크 거리의 장작 오븐 빵집. 프티라가 유명하고 앉을 자리는 없습니다.', 'Wood-fired bakery on Hanaq Street, famous for ftira; takeaway only.'),
  place('gozo-bakery-4', 'gozo', 'bakery', 'Manouche Craft Bakery & Bistro Gozo', 'Triq San Ġorġ, VCT 1103 Victoria, Malta', '성 조지 거리의 베이커리 겸 비스트로.', 'Bakery and bistro on Triq San Ġorġ.'),

  place('gozo-cafe-1', 'gozo', 'cafe', 'Cafe Jubilee', 'Republic Street, VCT 1103 Victoria, Malta', '라바트 중앙 광장의 카페 겸 비스트로(1998년부터).', 'Café-bistro on Rabat’s central square (since 1998).'),
  place('gozo-cafe-2', 'gozo', 'cafe', 'Karamelli Brunch Cafe', '32 Triq ir-Repubblika, Gozo', '리퍼블릭 거리의 브런치 카페.', 'Brunch café on Triq ir-Repubblika.'),
  place('gozo-cafe-3', 'gozo', 'cafe', 'Coffee Break Café & Bistro', 'Main Gate Street, VCT 1012 Victoria, Malta', '배달도 하는 카페 겸 비스트로.', 'Café and bistro that also delivers.'),
  place('gozo-cafe-4', 'gozo', 'cafe', 'Noble Cafe Bistro', 'Triq Fortunato Mizzi, VCT 2591 Victoria, Malta', '24시간 운영하는 카페 겸 비스트로.', '24-hour café and bistro.'),
  place('gozo-cafe-5', 'gozo', 'cafe', 'Black Cat Café', '19 Triq Vajrinġa, Gozo', '아늑한 카페.', 'Cozy café.'),
]
