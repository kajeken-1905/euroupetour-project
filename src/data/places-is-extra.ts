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

  // —— vik ——
  place('vik-fine_dining-1', 'vik', 'fine_dining', 'Suður-Vík', 4.5, 'Suðurvíkurvegur 1, 870 Vík', '언덕 전망의 아이슬란드 가정식.', 'Icelandic comfort food with hillside views.'),

  // —— husavik ——
  place('husavik-fine_dining-1', 'husavik', 'fine_dining', 'Naustið', 4.6, 'Ásgarðsvegur 1, 640 Húsavík', '신선한 해산물의 가족 운영 레스토랑.', 'Family-run restaurant known for fresh seafood.'),

  // —— selfoss ——
  place('selfoss-fine_dining-1', 'selfoss', 'fine_dining', 'Messinn Selfossi', 4.5, 'Brúarstræti 12a, 800 Selfoss', '아이슬란드 해산물 전문 레스토랑.', 'Restaurant specializing in Icelandic seafood.'),

]
