import { place } from './placeFactory'
import type { Place } from '../types'

export const placesISExtra: Place[] = [
  // —— reykjavik ——
  place('reykjavik-fine_dining-1', 'reykjavik', 'fine_dining', 'Dill Restaurant', 4.7, 'Reykjavík', '뉴 노르딕 미슐랭.', 'New Nordic Michelin.', { reviewCount: 1100 }),
  place('reykjavik-fine_dining-2', 'reykjavik', 'fine_dining', 'ÓX', 4.6, 'Reykjavík', '셰프스 테이블.', 'Chef’s table.', { reviewCount: 600 }),
  place('reykjavik-fine_dining-3', 'reykjavik', 'fine_dining', 'Grillmarkaðurinn', 4.5, 'Reykjavík', '그릴·로컬 재료.', 'Grill and local produce.', { reviewCount: 2800 }),
  place('reykjavik-fine_dining-4', 'reykjavik', 'fine_dining', 'Fish Market', 4.5, 'Reykjavík', '아이슬란드 해산물.', 'Icelandic seafood.', { reviewCount: 2400 }),
  place('reykjavik-fine_dining-5', 'reykjavik', 'fine_dining', 'Matur og Drykkur', 4.4, 'Reykjavík', '전통 재해석.', 'Reimagined tradition.', { reviewCount: 1600 }),
  place('reykjavik-bakery-1', 'reykjavik', 'bakery', 'Brauð & Co', 4.6, 'Reykjavík', '시나몬롤·사워도우.', 'Cinnamon rolls and sourdough.', { reviewCount: 4200 }),
  place('reykjavik-bakery-2', 'reykjavik', 'bakery', 'Sandholt', 4.5, 'Reykjavík', '장인 베이커리.', 'Artisan bakery.', { reviewCount: 2800 }),
  place('reykjavik-bakery-3', 'reykjavik', 'bakery', 'Bernhöftsbakarí', 4.3, 'Reykjavík', '역사적 빵집.', 'Historic bakery.', { reviewCount: 1800 }),
  place('reykjavik-bakery-4', 'reykjavik', 'bakery', 'Café Babalú', 4.3, 'Reykjavík', '베이커리 카페.', 'Bakery café.', { reviewCount: 1200 }),
  place('reykjavik-cafe-1', 'reykjavik', 'cafe', 'Reykjavík Roasters', 4.6, 'Reykjavík', '스페셜티 로스터리.', 'Specialty roastery.', { reviewCount: 2400 }),
  place('reykjavik-cafe-2', 'reykjavik', 'cafe', 'Kaffitár', 4.3, 'Reykjavík', '로컬 커피 체인.', 'Local coffee chain.', { reviewCount: 2100 }),
  place('reykjavik-cafe-3', 'reykjavik', 'cafe', 'The Coocoo\'s Nest', 4.4, 'Reykjavík', '브런치 카페.', 'Brunch café.', { reviewCount: 1600 }),
  place('reykjavik-cafe-4', 'reykjavik', 'cafe', 'Stofan Café', 4.4, 'Reykjavík', '아늑한 카페.', 'Cosy café.', { reviewCount: 1800 }),

  // —— akureyri ——
  place('akureyri-fine_dining-1', 'akureyri', 'fine_dining', 'Aurora Restaurant', 4.5, 'Hafnarstræti 87-89, 600 Akureyri', '북유럽 퓨전 요리 레스토랑.', 'Contemporary Scandinavian-style fusion cuisine.'),
  place('akureyri-bakery-1', 'akureyri', 'bakery', 'Kristjans Bakari', 4.5, 'Hafnarstræti 108, Akureyri, Iceland', '1912년부터 이어온 아쿠레이리의 가장 오래된 베이커리 중 하나', 'One of Iceland\'s oldest continuously operating bakeries, founded in Akureyri in 1912'),
  place('akureyri-cafe-1', 'akureyri', 'cafe', 'Blaa Kannan Cafe', 4.5, 'Hafnarstræti 96, Akureyri, Iceland', '파란 건물이 인상적인 아쿠레이리 중심가의 아늑한 카페', 'Cozy, old-fashioned café in a striking blue building in central Akureyri'),

  // —— vik ——
  place('vik-fine_dining-1', 'vik', 'fine_dining', 'Suður-Vík', 4.5, 'Suðurvíkurvegur 1, 870 Vík', '언덕 전망의 아이슬란드 가정식.', 'Icelandic comfort food with hillside views.'),
  place('vik-bakery-1', 'vik', 'bakery', 'Lava Bakery and Coffee', 4.4, 'Vík í Mýrdal, Iceland', '다양한 아르티장 빵과 페이스트리로 유명한 비크의 베이커리 카페', 'Vík bakery café known for artisanal breads, pastries and cakes'),
  place('vik-cafe-1', 'vik', 'cafe', 'Halldorskaffi', 4.3, 'Vík í Mýrdal, Iceland', '비크에서 가장 오래된 건물 중 하나에 자리한 아늑한 카페 겸 레스토랑', 'Cozy café-restaurant housed in one of the oldest buildings in Vík'),

  // —— husavik ——
  place('husavik-fine_dining-1', 'husavik', 'fine_dining', 'Naustið', 4.6, 'Ásgarðsvegur 1, 640 Húsavík', '신선한 해산물의 가족 운영 레스토랑.', 'Family-run restaurant known for fresh seafood.'),
  place('husavik-bakery-1', 'husavik', 'bakery', 'Heimabakarí', 4.6, 'Garðarsbraut, Húsavík, Iceland', '후사비크 명물 시나몬롤 스누두르로 유명한 가족 운영 베이커리', 'Family-run Húsavík bakery famous for its snúður cinnamon roll'),
  place('husavik-cafe-1', 'husavik', 'cafe', 'Bákari', 4.3, 'Garðarsbraut, Húsavík, Iceland', '빵과 샌드위치를 함께 즐길 수 있는 후사비크의 베이커리', 'Húsavík bakery offering both baked goods and sandwiches'),

  // —— selfoss ——
  place('selfoss-fine_dining-1', 'selfoss', 'fine_dining', 'Messinn Selfossi', 4.5, 'Brúarstræti 12a, 800 Selfoss', '아이슬란드 해산물 전문 레스토랑.', 'Restaurant specializing in Icelandic seafood.'),

  place('selfoss-bakery-1', 'selfoss', 'bakery', 'GK Bakarí', 4.4, 'Austurvegur 31b, Selfoss, Iceland', '비건 페이스트리와 무유제품 커피를 갖춘 셀포스의 베이커리', 'Selfoss bakery offering vegan pastries and dairy-free coffee options'),
  place('selfoss-cafe-1', 'selfoss', 'cafe', 'Kaffi Krús', 4.4, 'Selfoss, Iceland', '아늑한 옛 가옥에 자리한 셀포스의 카페', 'Selfoss café set in a charming old house'),
]
