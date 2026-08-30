import { place } from './placeFactory'
import type { Place } from '../types'

export const placesSIExtra: Place[] = [
  // —— ljubljana ——
  place('ljubljana-fine_dining-1', 'ljubljana', 'fine_dining', 'Strelec', 4.7, 'Ljubljana', '성 안 미슐랭 다이닝.', 'Castle Michelin dining.', { reviewCount: 1100 }),
  place('ljubljana-fine_dining-2', 'ljubljana', 'fine_dining', 'JB Restaurant', 4.6, 'Ljubljana', '클래식 파인 다이닝.', 'Classic fine dining.', { reviewCount: 900 }),
  place('ljubljana-fine_dining-3', 'ljubljana', 'fine_dining', 'AS', 4.5, 'Ljubljana', '모던 슬로베니아.', 'Modern Slovenian.', { reviewCount: 1200 }),
  place('ljubljana-fine_dining-4', 'ljubljana', 'fine_dining', 'Gostilna local classics', 4.4, 'Ljubljana', '전통 고스틸나.', 'Traditional gostilna.', { reviewCount: 2100 }),
  place('ljubljana-bakery-1', 'ljubljana', 'bakery', 'Žito / local bakery counters', 4.3, 'Ljubljana', '로컬 베이커리.', 'Local bakery.', { reviewCount: 1800 }),
  place('ljubljana-bakery-3', 'ljubljana', 'bakery', 'Potica & pastry shops', 4.4, 'Ljubljana', '포티차·페이스트리.', 'Potica and pastries.', { reviewCount: 1400 }),
  place('ljubljana-bakery-4', 'ljubljana', 'bakery', 'Market bakery stalls', 4.3, 'Ljubljana', '시장 빵 가판.', 'Market bread stalls.', { reviewCount: 1200 }),
  place('ljubljana-cafe-1', 'ljubljana', 'cafe', 'Čokl', 4.5, 'Ljubljana', '스페셜티 커피.', 'Specialty coffee.', { reviewCount: 1600 }),
  place('ljubljana-cafe-2', 'ljubljana', 'cafe', 'Tozd / riverside cafés', 4.4, 'Ljubljana', '강변 카페.', 'Riverside café.', { reviewCount: 2100 }),
  place('ljubljana-cafe-3', 'ljubljana', 'cafe', 'Slovenska / centre cafés', 4.3, 'Ljubljana', '도심 클래식 카페.', 'Central classic café.', { reviewCount: 1800 }),

  // —— bled ——
  place('bled-fine_dining-1', 'bled', 'fine_dining', 'Restaurant Julijana', 4.6, 'Cesta Svobode 12, 4260 Bled, Slovenia', '그랜드 호텔 토플리체 내 위치한 블레드 호수 전망 파인다이닝, 슬로베니아 미쉐린 가이드 등재', 'Elegant lake-view restaurant at the Grand Hotel Toplice, one of the few Slovenian restaurants featured in the Michelin Guide'),

  // —— piran ——
  place('piran-fine_dining-1', 'piran', 'fine_dining', 'Pri Mari', 4.6, 'Dantejeva ulica 17, 6330 Piran, Slovenia', '지역 어부에게서 공수한 신선한 해산물로 유명한 피란의 가족 운영 레스토랑', 'Family-run restaurant in Piran known for fresh seafood sourced from local fishermen'),

  // —— maribor ——
  place('maribor-fine_dining-1', 'maribor', 'fine_dining', 'Pri Starem Mostu', 4.4, 'Dravska ulica 9, 2000 Maribor, Slovenia', '마리보르 옛 다리 옆에 위치해 드라바 강 전망을 즐길 수 있는 우아한 레스토랑', 'Elegant restaurant next to Maribor\'s Old Bridge with gorgeous views over the Drava River'),

  // —— postojna ——
  place('postojna-fine_dining-1', 'postojna', 'fine_dining', 'Bistro Štorja', 4.5, 'Ulica 1. maja 1, 6230 Postojna, Slovenia', '전통과 현대적 감각을 조화시킨 포스토이나의 대표 비스트로, 미쉐린 가이드에도 소개됨', 'Postojna\'s leading bistro blending tradition with a modern touch, featured in the Michelin Guide'),

]
