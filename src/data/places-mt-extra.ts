import { place } from './placeFactory'
import type { Place } from '../types'

export const placesMTExtra: Place[] = [
  // —— valletta ——
  place('valletta-fine_dining-1', 'valletta', 'fine_dining', 'Under Grain', '167 Merchants Street, Valletta VLT 1174', '로셀리 호텔 안의 미쉐린 1스타 레스토랑. 일·월요일은 쉽니다.', 'One-Michelin-star restaurant in the Rosselli hotel; closed Sundays and Mondays.', { michelin: 'star1' }),
  place('valletta-fine_dining-2', 'valletta', 'fine_dining', 'ION Harbour by Simon Rogan', '11 Saint Barbara Bastion, VLT 1232 Valletta, Malta', '이니알라 하버 하우스 꼭대기 층의 사이먼 로건 레스토랑. 미쉐린 2스타(2026)입니다.', 'Simon Rogan\'s restaurant on the top floor of Iniala Harbour House; two MICHELIN stars (2026).', { michelin: 'star2' }),
  place('valletta-fine_dining-3', 'valletta', 'fine_dining', 'Noni', '211 Republic Street, Valletta VLT 1116', '리퍼블릭 거리 타운하우스의 미쉐린 1스타 레스토랑. 일·월요일은 쉽니다.', 'One-Michelin-star restaurant in a townhouse on Republic Street; closed Sundays and Mondays.', { michelin: 'star1', image: '/places/valletta-fine_dining-3.jpg' }),
  place('valletta-fine_dining-4', 'valletta', 'fine_dining', 'Rubino', '53 Old Bakery Street, Valletta VLT 1454', '1906년 제과점이던 공간에 자리한, 매일 바뀌는 흑판 메뉴의 전통 몰타 요리 레스토랑.', 'Traditional Maltese restaurant in a former 1906 confectionery, with a daily blackboard menu.', { michelin: 'bib', image: '/places/valletta-fine_dining-4.jpg' }),

  place('valletta-bakery-1', 'valletta', 'bakery', 'Malta Pastizzi (Manuela)', '57 Merchants Street, Valletta VLT 1173', '1940년대 가족 레시피로 매일 아침 굽는 파스티치 가게. 오후 1시쯤 일찍 닫기도 합니다.', 'Pastizzi shop baking daily from a 1940s family recipe; sometimes closes early, around 1pm.'),
  place('valletta-bakery-2', 'valletta', 'bakery', 'Grano', '26 Triq Santa Lucia, Valletta VLT 1183', '몰타 빵 프티라 샌드위치 가게. 밤에는 칵테일 바로 바뀌고 일요일은 쉽니다.', 'Ftira sandwich bar that turns into a cocktail bar at night; closed Sundays.', { image: '/places/valletta-bakery-2.jpg' }),

  place('valletta-cafe-1', 'valletta', 'cafe', 'Lot Sixty One Coffee Roasters', '30 Triq it-Teatru l-Antik, Valletta', '2017년 문을 연 스페셜티 커피 로스터리. 일주일에 두 번 매장에서 원두를 볶습니다.', 'Specialty coffee roastery opened in 2017, roasting on site twice a week.'),
  place('valletta-cafe-2', 'valletta', 'cafe', 'Caffe Cordina', '244/245 Republic Street, VLT 0004 Valletta, Malta', '1837년 문을 연 리퍼블릭 광장의 카페.', 'Café on Republic Square, open since 1837.'),

  place('valletta-korean-1', 'valletta', 'korean', 'S:UN Fusion Dining', '95-96 Strait Street, Valletta VLT 1436', '이재 셰프의 한국 퓨전 레스토랑. 김치·잡채와 스시, 칵테일을 냅니다.', 'Chef Jay Lee\'s Korean fusion restaurant with kimchi, japchae, sushi and cocktails.'),

  // —— mdina ——
  place('mdina-fine_dining-1', 'mdina', 'fine_dining', 'Medina Restaurant', '7 Holy Cross Street, Mdina MDN 1231', '노르만 시대 저택의 레스토랑. 아시아 풍미를 더한 지중해 요리를 내고 미쉐린 가이드에 실려 있습니다.', 'Restaurant in a Norman-era residence serving Mediterranean food with Asian touches; listed in the MICHELIN Guide.'),
  place('mdina-fine_dining-3', 'mdina', 'fine_dining', "Coogi's Restaurant & Tea Garden", "5 St Agatha's Esplanade, Mdina", '포도덩굴 안뜰과 옥상 테라스가 있는 이탈리아·지중해 레스토랑. 비건·글루텐 프리 메뉴가 있습니다.', 'Italian and Mediterranean restaurant with vine-covered courtyards and a roof terrace; vegan and gluten-free options.', { image: '/places/mdina-fine_dining-3.jpg' }),
  place('mdina-fine_dining-4', 'mdina', 'fine_dining', 'The de Mondion Restaurant', 'The Xara Palace, Misraħ il-Kunsill, Mdina MDN 1050, Malta', '자라 팰리스 호텔 옥상의 레스토랑. 미쉐린 1스타(2026)입니다.', 'Rooftop restaurant at the Xara Palace hotel; one MICHELIN star (2026).', { michelin: 'star1' }),
  place('mdina-fine_dining-5', 'mdina', 'fine_dining', 'SCALA', '26 Saqqajja Hill, Mdina', '음디나 입구의 바다 전망 테라스 레스토랑. 2026년 미쉐린 가이드에 새로 실렸고 화요일은 쉽니다.', 'Restaurant at the entrance to Mdina with a sea-view terrace; newly listed in the 2026 MICHELIN Guide, closed Tuesdays.'),

  place('mdina-bakery-1', 'mdina', 'bakery', 'Is-Serkin (Crystal Palace Bar)', 'Triq San Pawl, Rabat, Malta', '1945년 무렵부터 이어온 라바트의 파스티치 바.', 'Rabat pastizzi bar running since the mid-1940s.'),
  place('mdina-bakery-2', 'mdina', 'bakery', 'Marie Boutique Patisserie', '6 Wesgħa tal-Mużew, Rabat, Malta', '라바트 부티크 호텔 로비의 제과점 겸 비스트로.', 'Patisserie and bistro in the lobby of a Rabat boutique hotel.'),
  place('mdina-bakery-3', 'mdina', 'bakery', 'Falzon Bakery - Rabat', '7 Triq Il-Kulleġġ, Rabat, Malta', '성 바울 성당 옆 골목의 100년 넘은 장작 화덕 빵집. 몰타 빵 호브자와 프티라를 굽습니다.', 'Wood-fired bakery of over 100 years in a lane by St Paul\'s Church, baking Maltese hobża and ftira.'),
  place('mdina-bakery-4', 'mdina', 'bakery', 'Dulcissima Pasticceria & Gelateria Italiana', '30 Triq San Kataldu, Rabat, Malta', '가족이 운영하는 이탈리아식 제과점 겸 젤라테리아. 월요일은 쉽니다.', 'Family-run Italian pastry shop and gelateria; closed Mondays.'),

  place('mdina-cafe-1', 'mdina', 'cafe', 'Fontanella Tea Garden', '1 Bastion Street, Mdina, Malta', '1975년부터 가족이 운영하는 성벽 위 카페. 수제 초콜릿 케이크가 유명하고 테라스에서 섬 전경이 보입니다.', 'Family-run café on the bastion walls since 1975, famous for its homemade chocolate cake, with terraces looking across the island.', { image: '/places/mdina-cafe-1.jpg' }),
  place('mdina-cafe-2', 'mdina', 'cafe', 'Gustav Café', 'Palazzo Falson, Villegaignon Street, Mdina MDN 1191, Malta', '팔라초 팔손 박물관 옥상의 카페. 화~일요일 오전 10시 30분~오후 4시에 엽니다.', 'Rooftop café at the Palazzo Falson museum, open Tuesday to Sunday 10:30am to 4pm.'),
  place('mdina-cafe-3', 'mdina', 'cafe', "Bar One Café", '7 Villegaignon Street, Mdina', '음디나 골목의 작은 카페. 티라미수 같은 케이크와 커피를 냅니다.', 'Small café in Mdina\'s lanes with cakes such as tiramisu and coffee.'),
  place('mdina-cafe-4', 'mdina', 'cafe', 'CHALK cafe eatery wine', '36 Triq San Pawl, Mdina', '음디나 정문 근처 라바트의 아늑한 카페 겸 와인 바. 몰타식 플래터와 프티라를 냅니다.', 'Cosy café and wine bar in Rabat near Mdina\'s main gate, serving Maltese platters and ftira.'),
  place('mdina-cafe-5', 'mdina', 'cafe', 'Courtyard Lounge Cafe', 'Sqaq Aragona, MDN 1260 Mdina, Malta', '팔라초 비포라 호텔 돌 안뜰의 카페. 아침과 가벼운 점심을 냅니다.', 'Café in the stone courtyard of the Palazzo Bifora hotel, serving breakfast and light lunches.'),

  // —— gozo ——
  place('gozo-fine_dining-1', 'gozo', 'fine_dining', 'Tmun', 'Triq Martino Garces, Mġarr Harbour, Għajnsielem GSM 2413, Malta', '음가르 항구의 지중해 해산물 레스토랑. 셸렌디에서 시작해 2009년 이곳으로 옮겼고 미쉐린 가이드에 실려 있습니다.', 'Mediterranean seafood restaurant at Mġarr Harbour; started in Xlendi, here since 2009, listed in the MICHELIN Guide.'),
  place('gozo-fine_dining-2', 'gozo', 'fine_dining', 'Casa Vostra', '62 Republic Street, Rabat, Gozo', '빅토리아 리퍼블릭 거리의 레스토랑. 채식 메뉴가 있습니다.', 'Restaurant on Republic Street in Victoria, with vegetarian options.', { image: '/places/gozo-fine_dining-2.jpg' }),
  place('gozo-fine_dining-3', 'gozo', 'fine_dining', 'Ta\' Frenċ Restaurant', 'Daħla ta’ Għajn Damma, Xagħra, Gozo', '샤그라 마을의 옛 농가 레스토랑(1982년 개업). 와인 리스트가 깁니다.', 'Farmhouse restaurant in Xagħra, open since 1982, with a long wine list.'),
  place('gozo-fine_dining-4', 'gozo', 'fine_dining', 'Roża | Restaurant', '20 St George\'s Square, Victoria, Gozo', '성 조지 광장의 전통 고조 건물에 있는 레스토랑. 파스타가 추천됩니다.', 'Restaurant in a traditional Gozitan building on St George\'s Square; the pasta is recommended.'),
  place('gozo-fine_dining-5', 'gozo', 'fine_dining', 'one80, Mgarr Yacht Marina', 'Triq Martino Garces, Mġarr Yacht Marina, Għajnsielem GSM 2413, Malta', '음가르 요트 마리나의 레스토랑. 나눠 먹는 작은 접시와 수제 파스타를 아침부터 늦게까지 냅니다.', 'Restaurant at Mġarr Yacht Marina with sharing plates and homemade pasta, open from breakfast until late.'),

  place('gozo-bakery-1', 'gozo', 'bakery', 'Ta\' Saminu Bakery', 'Triq Tal-Ħamrija, Ix-Xewkija, Gozo, Malta', '장작 오븐으로 고조 전통 프티라를 굽는 가족 운영 베이커리', 'Family-run Gozo bakery baking traditional ftira in a wood-burning oven'),
  place('gozo-bakery-2', 'gozo', 'bakery', "Mekren's Bakery", 'Hanaq Street, Nadur, Gozo, Malta', '하나크 거리의 장작 오븐 빵집. 프티라가 유명하고 앉을 자리는 없습니다.', 'Wood-fired bakery on Hanaq Street, famous for ftira; takeaway only.'),
  place('gozo-bakery-4', 'gozo', 'bakery', 'Manouche Craft Bakery & Bistro Gozo', 'Victoria (Rabat), Gozo, Malta', '몰타의 크래프트 베이커리 체인 마누슈의 고조 지점. 페이스트리와 샥슈카를 냅니다.', 'Gozo branch of Malta\'s Manouche craft bakery, with pastries and shakshuka.'),

  place('gozo-cafe-1', 'gozo', 'cafe', 'Cafe Jubilee', 'Pjazza l-Indipendenza, Victoria, Gozo, Malta', '1998년 문을 연 빅토리아 독립 광장의 카페. 파이와 몰타 간식을 저렴하게 냅니다.', 'Café on Victoria\'s Independence Square, opened in 1998, with pies and Maltese snacks at low prices.'),
  place('gozo-cafe-2', 'gozo', 'cafe', 'Karamelli Brunch Cafe', 'The Duke Shopping Mall, Republic Street, Victoria, Gozo', '더 듀크 쇼핑몰 1층의 브런치 카페. 아침부터 점심까지 식사와 구움 과자를 냅니다.', 'Brunch café on the ground floor of The Duke mall, serving meals and bakes all day.'),
  place('gozo-cafe-3', 'gozo', 'cafe', 'Coffee Break Café & Bistro', 'Triq Taħt Putirjal, Victoria, Gozo, Malta', '넓은 테라스가 있는 카페 겸 비스트로. 영국식 아침 식사가 푸짐합니다.', 'Café-bistro with a large terrace; the full English breakfast is generous.'),
  place('gozo-cafe-4', 'gozo', 'cafe', 'Noble Cafe Bistro', 'Triq Fortunato Mizzi, VCT 2591 Victoria, Malta', '빅토리아의 카페 겸 비스트로. 버거·피자·아침 메뉴와 수제 레모네이드를 냅니다.', 'Victoria café-bistro serving burgers, pizzas, breakfast and homemade lemonade.'),
  place('gozo-cafe-5', 'gozo', 'cafe', 'Black Cat Café', '19 Triq Vajrinġa, Gozo', '빅토리아 중심의 아늑한 카페. 당근 케이크가 유명하고 채식 메뉴가 있습니다.', 'Cosy café in central Victoria known for its carrot cake, with vegetarian options.'),
]
