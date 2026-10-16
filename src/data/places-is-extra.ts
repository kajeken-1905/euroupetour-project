import { place } from './placeFactory'
import type { Place } from '../types'

export const placesISExtra: Place[] = [
  // —— reykjavik ——
  place('reykjavik-fine_dining-1', 'reykjavik', 'fine_dining', 'Dill Restaurant', 'Laugavegur 59, 101 Reykjavík', '2017년 아이슬란드 최초로 미슐랭 1스타를 받은 뉴 노르딕 레스토랑.', "New Nordic restaurant, Iceland's first to earn a Michelin star, in 2017."),
  place('reykjavik-fine_dining-2', 'reykjavik', 'fine_dining', 'ÓX', 'Laugavegur 55, 101 Reykjavík', '미슐랭 1스타, 16석 규모의 레이캬비크 최고급 셰프스 테이블.', "One-Michelin-star restaurant, Reykjavik's most exclusive chef's table with just 16 seats."),
  place('reykjavik-fine_dining-3', 'reykjavik', 'fine_dining', 'Grillmarkaðurinn', 'Lækjargata 2A, 101 Reykjavík', '현지 농가와 협업하는 그릴 전문 레스토랑, 양갈비로 유명.', 'Grill restaurant working with local farmers, known for its lamb chops.'),
  place('reykjavik-fine_dining-4', 'reykjavik', 'fine_dining', 'Fiskmarkaðurinn (Fish Market)', 'Aðalstræti 12, 101 Reykjavík', '2007년부터 이어온 아시아풍 아이슬란드 퓨전 해산물 레스토랑.', 'Icelandic-Asian fusion seafood restaurant since 2007.'),
  place('reykjavik-fine_dining-5', 'reykjavik', 'fine_dining', 'Matur og Drykkur', 'Grandagarður 2, 101 Reykjavík', '2017년부터 미슐랭 가이드에 오른 전통 재해석 레스토랑.', 'Restaurant reimagining Icelandic tradition, Michelin-recognized since 2017.'),
  place('reykjavik-bakery-1', 'reykjavik', 'bakery', 'Brauð & Co', 'Austurstræti 17, 101 Reykjavík', '갓 구운 시나몬롤로 유명한 인기 베이커리.', 'Popular bakery known for its freshly baked cinnamon rolls.'),
  place('reykjavik-bakery-2', 'reykjavik', 'bakery', 'Sandholt', 'Laugavegur 36, 101 Reykjavík', '1920년부터 4대째 이어온 아이슬란드 최고령 베이커리, 아몬드 크루아상으로 유명.', "One of Iceland's oldest bakeries, run by the fourth generation since 1920, known for its almond croissants."),
  place('reykjavik-bakery-3', 'reykjavik', 'bakery', 'Bernhöftsbakarí', 'Bergstaðastræti 13, 101 Reykjavík', '1834년부터 이어온 레이캬비크에서 가장 오래된 베이커리.', "Reykjavik's oldest bakery, operating since 1834."),
  place('reykjavik-bakery-4', 'reykjavik', 'bakery', 'Café Babalú', 'Skólavörðustígur 22a, 101 Reykjavík', '빈티지 소품으로 꾸며진 개성 넘치는 베이커리 카페, 할그림스키르캬 성당 전망.', 'Quirky bakery café decorated with vintage knick-knacks, with views of Hallgrímskirkja church.', { image: '/places/reykjavik-bakery-4.jpg' }),
  place('reykjavik-cafe-1', 'reykjavik', 'cafe', 'Reykjavík Roasters', 'Brautarholti 2, 105 Reykjavík', '싱글 오리진 원두를 직접 로스팅하는 스페셜티 로스터리.', 'Specialty roastery that sources and roasts single-origin beans in-house.'),
  place('reykjavik-cafe-2', 'reykjavik', 'cafe', 'Kaffitár', 'Bankastræti 8, 101 Reykjavík', '아이슬란드 전역에 매장을 둔 로컬 커피 체인.', 'Local coffee chain with locations across Iceland.'),
  place('reykjavik-cafe-3', 'reykjavik', 'cafe', 'The Laundromat Café', 'Austurstræti 9, 101 Reykjavík', '2011년부터 이어온 레이캬비크의 브런치 명소, 셀프서비스 세탁소를 겸함.', "Reykjavik brunch institution since 2011, doubling as a self-service laundromat."),
  place('reykjavik-cafe-4', 'reykjavik', 'cafe', 'Stofan Café', 'Vesturgata 3, 101 Reykjavík', '1842년 지어진 건물에 자리한 아늑한 카페.', 'Cozy café housed in a building dating back to 1842.', { image: '/places/reykjavik-cafe-4.jpg' }),
  place('reykjavik-korean-1', 'reykjavik', 'korean', 'KORE', 'Grandi Mathöll, Grandagarður 16, 101 Reykjavík', '한국식 프라이드치킨과 타코, 김치로 유명한 한식 스트리트 푸드 레스토랑.', 'Korean street food restaurant known for its fried chicken, tacos and kimchi.'),

  // —— akureyri ——
  place('akureyri-fine_dining-1', 'akureyri', 'fine_dining', 'Aurora Restaurant', 'Hafnarstræti 87-89, 600 Akureyri', '북유럽 퓨전 요리 레스토랑.', 'Contemporary Scandinavian-style fusion cuisine.'),
  place('akureyri-fine_dining-2', 'akureyri', 'fine_dining', 'Strikið', 'Skipagata 14, 600 Akureyri', '피오르 전망의 아쿠레이리 중심가 가스트로펍.', 'Gastropub in central Akureyri with views over the fjord.'),
  place('akureyri-fine_dining-3', 'akureyri', 'fine_dining', 'Rub23', 'Kaupvangsstræti 6, 600 Akureyri, Iceland', '지역 어부·농가의 신선한 재료를 사용하는 해산물·스시 레스토랑.', 'Seafood and sushi restaurant using fresh ingredients from local fishermen and farmers.'),
  place('akureyri-bakery-1', 'akureyri', 'bakery', 'Kristjans Bakari', 'Hafnarstræti 108, Akureyri, Iceland', '1912년부터 이어온 아쿠레이리의 가장 오래된 베이커리 중 하나', 'One of Iceland\'s oldest continuously operating bakeries, founded in Akureyri in 1912'),
  place('akureyri-bakery-2', 'akureyri', 'bakery', 'Axelsbakarí', 'Hvannavellir 14, Akureyri, Iceland', '아쿠레이리의 베이커리.', 'Bakery in Akureyri.'),
  place('akureyri-bakery-3', 'akureyri', 'bakery', 'Bakaríið við Brúna', 'Dalsbraut 1, Akureyri, Iceland', '아쿠레이리의 베이커리.', 'Bakery in Akureyri.'),
  place('akureyri-cafe-1', 'akureyri', 'cafe', 'Blaa Kannan Cafe', 'Hafnarstræti 96, Akureyri, Iceland', '파란 건물이 인상적인 아쿠레이리 중심가의 아늑한 카페', 'Cozy, old-fashioned café in a striking blue building in central Akureyri'),
  place('akureyri-cafe-2', 'akureyri', 'cafe', 'Ketilkaffi', 'Kaupvangsstræti 8, 600 Akureyri', '아쿠레이리 미술관 안의 카페, 고품질 커피와 아침 메뉴로 인기.', 'Café inside the Akureyri Art Museum, popular for high-quality coffee and breakfast items.'),

  // —— vik ——
  place('vik-fine_dining-1', 'vik', 'fine_dining', 'Suður-Vík', 'Suðurvíkurvegur 1, 870 Vík', '언덕 전망의 아이슬란드 가정식.', 'Icelandic comfort food with hillside views.'),
  place('vik-fine_dining-2', 'vik', 'fine_dining', 'The Soup Company', 'Víkurbraut 5, 870 Vík', '비크의 수프 전문점.', 'Soup specialist in Vík.'),
  place('vik-fine_dining-3', 'vik', 'fine_dining', 'Smiðjan Brugghús', 'Sunnubraut 15, 870 Vík', '수제 맥주와 버거로 유명한 비크의 브루하우스.', 'Brewhouse in Vík known for its craft beer and burgers.'),
  place('vik-bakery-1', 'vik', 'bakery', 'Lava Bakery and Coffee', 'Austurvegur 20, 870 Vík, Iceland', '다양한 아르티장 빵과 페이스트리로 유명한 비크의 베이커리 카페', 'Vík bakery café known for artisanal breads, pastries and cakes'),
  place('vik-cafe-1', 'vik', 'cafe', 'Halldorskaffi', 'Víkurbraut 28, 870 Vik, Iceland', '비크에서 가장 오래된 건물 중 하나에 자리한 아늑한 카페 겸 레스토랑', 'Cozy café-restaurant housed in one of the oldest buildings in Vík'),
  place('vik-cafe-2', 'vik', 'cafe', 'Skool Beans', 'Mósastallur, 870 Vík', '비크의 인기 카페.', 'Popular café in Vík.'),

  // —— husavik ——
  place('husavik-fine_dining-1', 'husavik', 'fine_dining', 'Naustið', 'Ásgarðsvegur 1, 640 Húsavík', '신선한 해산물의 가족 운영 레스토랑.', 'Family-run restaurant known for fresh seafood.'),
  place('husavik-fine_dining-2', 'husavik', 'fine_dining', 'Salka Restaurant', 'Garðarsbraut 6, 640 Húsavík', '후사비크의 인기 레스토랑.', 'Popular restaurant in Húsavík.'),
  place('husavik-fine_dining-3', 'husavik', 'fine_dining', 'Gamli Baukur', 'Hafnarstétt 9, 640 Húsavík', '후사비크 항구 근처의 레스토랑.', 'Restaurant near the harbor in Húsavík.'),
  place('husavik-fine_dining-4', 'husavik', 'fine_dining', 'Lókal Bistro', 'Garðarsbraut 7, 640 Húsavík', '후사비크의 비스트로.', 'Bistro in Húsavík.'),
  place('husavik-bakery-1', 'husavik', 'bakery', 'Heimabakarí', 'Garðarsbraut 15, 640 Húsavík, Iceland', '후사비크 명물 시나몬롤 스누두르로 유명한 가족 운영 베이커리', 'Family-run Húsavík bakery famous for its snúður cinnamon roll'),
  place('husavik-bakery-2', 'husavik', 'bakery', 'Dísu Café', 'Vallholtsvegur 3, 640 Húsavík', '후사비크의 베이커리 카페.', 'Bakery café in Húsavík.'),
  place('husavik-cafe-2', 'husavik', 'cafe', 'Hérna Húsavík', 'Stórigarður 11, Húsavík', '홈메이드 케이크와 향긋한 커피로 유명한 후사비크 중심가의 카페.', "Café in central Húsavík known for its homemade cakes and fragrant coffee."),

  // —— selfoss ——
  place('selfoss-fine_dining-1', 'selfoss', 'fine_dining', 'Messinn Selfossi', 'Brúarstræti 12a, 800 Selfoss', '아이슬란드 해산물 전문 레스토랑.', 'Restaurant specializing in Icelandic seafood.'),
  place('selfoss-fine_dining-2', 'selfoss', 'fine_dining', 'Tryggvaskáli', 'Tryggvatorg, 800 Selfoss', '셀포스에서 가장 오래된 건물(1890년)에 자리한 북유럽 요리 레스토랑.', "Scandinavian restaurant in Selfoss's oldest house, dating to 1890."),
  place('selfoss-bakery-1', 'selfoss', 'bakery', 'GK Bakarí', 'Austurvegur 31b, Selfoss, Iceland', '비건 페이스트리와 무유제품 커피를 갖춘 셀포스의 베이커리', 'Selfoss bakery offering vegan pastries and dairy-free coffee options'),
  place('selfoss-bakery-2', 'selfoss', 'bakery', 'Almar Bakari', 'Larsenstræti, 800 Selfoss', '셀포스의 베이커리.', 'Bakery in Selfoss.'),
  place('selfoss-cafe-1', 'selfoss', 'cafe', 'Kaffi Krús', 'Austurvegur 7, 800 Selfoss, Iceland', '아늑한 옛 가옥에 자리한 셀포스의 카페', 'Selfoss café set in a charming old house', { image: '/places/selfoss-cafe-1.jpg' }),
  place('selfoss-cafe-2', 'selfoss', 'cafe', 'Konungskaffi', 'Brúarstræti 2, 800 Selfoss', '셀포스의 인기 커피숍.', 'Popular coffee shop in Selfoss.'),
  place('selfoss-cafe-3', 'selfoss', 'cafe', 'Bókakaffið - Books & Coffee', 'Austurvegur 22, 800 Selfoss', '책과 커피를 함께 즐기는 셀포스의 카페.', 'Café in Selfoss combining books and coffee.'),
  place('selfoss-cafe-4', 'selfoss', 'cafe', 'Byrja', 'Austurvegur 3-5, 800 Selfoss', '셀포스의 인기 브런치 카페.', 'Popular brunch café in Selfoss.'),
]
