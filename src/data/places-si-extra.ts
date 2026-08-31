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
  place('bled-bakery-1', 'bled', 'bakery', 'Slaščičarna Zima', 4.4, 'Grajska cesta 3, 4260 Bled, Slovenia', '블레드에서 가장 오래된 전통을 지닌 제과점, 명물 크렘나 레지나(크림 케이크)로 유명', 'Bled\'s longest-standing confectionery, famous for the town\'s signature kremna rezina cream cake'),
  place('bled-cafe-1', 'bled', 'cafe', 'Kavarna Belvedere', 4.4, 'Cesta svobode 18, 4260 Bled, Slovenia', '건축가 요제 플레치니크가 설계한 파빌리온에서 블레드 호수와 섬 전망을 즐기는 카페', 'Cafe in a pavilion designed by architect Jože Plečnik, offering views of Lake Bled and its island'),

  // —— piran ——
  place('piran-fine_dining-1', 'piran', 'fine_dining', 'Pri Mari', 4.6, 'Dantejeva ulica 17, 6330 Piran, Slovenia', '지역 어부에게서 공수한 신선한 해산물로 유명한 피란의 가족 운영 레스토랑', 'Family-run restaurant in Piran known for fresh seafood sourced from local fishermen'),
  place('piran-bakery-1', 'piran', 'bakery', 'Naša Pekarna', 4.4, 'Via Fran Levstik 1, 6330 Piran, Slovenia', '타르티니 광장 인근 시장가의 정겨운 피란 베이커리, 신선한 빵과 페이스트리로 인기', 'Cozy Piran bakery near the market by Tartini Square, popular for fresh bread and pastries'),
  place('piran-cafe-1', 'piran', 'cafe', 'Caffe Neptun', 4.6, 'Dantejeva ulica 4, 6330 Piran, Slovenia', '지속가능성과 품질을 함께 추구하는 피란의 스페셜티 커피숍', 'Piran specialty coffee shop focused equally on sustainability and quality'),

  // —— maribor ——
  place('maribor-fine_dining-1', 'maribor', 'fine_dining', 'Pri Starem Mostu', 4.4, 'Dravska ulica 9, 2000 Maribor, Slovenia', '마리보르 옛 다리 옆에 위치해 드라바 강 전망을 즐길 수 있는 우아한 레스토랑', 'Elegant restaurant next to Maribor\'s Old Bridge with gorgeous views over the Drava River'),
  place('maribor-bakery-1', 'maribor', 'bakery', 'Slovenka', 4.4, 'Gosposka 9, 2000 Maribor, Slovenia', '슬로베니아 가정식과 건강 디저트, 다양한 베이커리류를 선보이는 마리보르의 인기 베이커리 카페', 'Popular Maribor bakery cafe offering homestyle Slovenian dishes, healthy desserts and a wide baked-goods selection'),
  place('maribor-cafe-1', 'maribor', 'cafe', 'HiKoFi', 4.7, 'Tyrševa 13, 2000 Maribor, Slovenia', '숙련된 바리스타가 내리는 마리보르 최고의 커피로 꼽히는 아담한 스페셜티 커피숍', 'Small specialty coffee shop widely regarded as serving the best coffee in Maribor'),

  // —— postojna ——
  place('postojna-fine_dining-1', 'postojna', 'fine_dining', 'Bistro Štorja', 4.5, 'Ulica 1. maja 1, 6230 Postojna, Slovenia', '전통과 현대적 감각을 조화시킨 포스토이나의 대표 비스트로, 미쉐린 가이드에도 소개됨', 'Postojna\'s leading bistro blending tradition with a modern touch, featured in the Michelin Guide'),

  place('postojna-bakery-1', 'postojna', 'bakery', 'Brilliant Bakery (Pekarna Briljant)', 4.5, 'Titov trg 3, 6230 Postojna, Slovenia', '포스토이나 중심가의 향토 베이커리, 신선한 빵과 페이스트리, 전통 디저트로 유명', 'Postojna\'s local treasure for fresh bread, pastries and traditional desserts, on the main square'),
  place('postojna-cafe-1', 'postojna', 'cafe', 'Kavarna Siesta', 4.4, 'Novi trg 8, TPC Primorka, 6230 Postojna, Slovenia', '직접 만든 케이크와 아이스크림을 선보이는 포스토이나의 카페 겸 페이스트리숍', 'Postojna cafe and pastry shop offering selected coffee, cakes and house-made ice cream'),
]
