import { place } from './placeFactory'
import type { Place } from '../types'

export const placesHRExtra: Place[] = [
  // —— zagreb ——
  place('zagreb-fine_dining-1', 'zagreb', 'fine_dining', 'Noel', 4.6, 'Zagreb', '미슐랭 모던 크로아티아.', 'Michelin modern Croatian.', { reviewCount: 900 }),
  place('zagreb-fine_dining-2', 'zagreb', 'fine_dining', 'Dubravkin Put', 4.5, 'Zagreb', '시즌 파인 다이닝.', 'Seasonal fine dining.', { reviewCount: 1100 }),
  place('zagreb-fine_dining-3', 'zagreb', 'fine_dining', 'Mundoaka Street Food', 4.4, 'Zagreb', '창의 캐주얼.', 'Creative casual.', { reviewCount: 1600 }),
  place('zagreb-fine_dining-4', 'zagreb', 'fine_dining', 'Vinodol', 4.4, 'Zagreb', '전통 크로아티아.', 'Traditional Croatian.', { reviewCount: 2800 }),
  place('zagreb-fine_dining-5', 'zagreb', 'fine_dining', 'Zinfandel\'s', 4.5, 'Zagreb', '호텔 파인 다이닝.', 'Hotel fine dining.', { reviewCount: 1200 }),
  place('zagreb-bakery-1', 'zagreb', 'bakery', 'Pecivo bakery counters', 4.3, 'Zagreb', '로컬 베이커리.', 'Local bakery.', { reviewCount: 1400 }),
  place('zagreb-bakery-2', 'zagreb', 'bakery', 'Vincek', 4.5, 'Zagreb', '케이크·페이스트리.', 'Cakes and pastries.', { reviewCount: 3200 }),
  place('zagreb-bakery-3', 'zagreb', 'bakery', 'Torte i to', 4.4, 'Zagreb', '토르트 전문.', 'Torte specialists.', { reviewCount: 1800 }),
  place('zagreb-cafe-1', 'zagreb', 'cafe', 'Cogito Coffee', 4.5, 'Zagreb', '스페셜티 커피.', 'Specialty coffee.', { reviewCount: 1600 }),
  place('zagreb-cafe-2', 'zagreb', 'cafe', 'Eli\'s Caffé', 4.4, 'Zagreb', '로스터리 카페.', 'Roastery café.', { reviewCount: 1200 }),
  place('zagreb-cafe-3', 'zagreb', 'cafe', 'Kino Europa Café', 4.3, 'Zagreb', '클래식 카페.', 'Classic café.', { reviewCount: 900 }),
  place('zagreb-cafe-4', 'zagreb', 'cafe', 'Botaničar', 4.4, 'Zagreb', '브런치 카페.', 'Brunch café.', { reviewCount: 1400 }),

  // —— dubrovnik ——
  place('dubrovnik-fine_dining-1', 'dubrovnik', 'fine_dining', 'Nautika Restaurant', 4.6, 'Brsalje 3, 20000 Dubrovnik', '구시가 성벽 옆의 대표 레스토랑.', 'Landmark restaurant by the Old Town walls.'),

  // —— split ——
  place('split-fine_dining-1', 'split', 'fine_dining', 'Villa Spiza', 4.6, 'Kružićeva 3, 21000 Split', '스플리트 최고 평가 레스토랑.', 'Top-rated restaurant in Split.'),

  // —— zadar ——
  place('zadar-fine_dining-1', 'zadar', 'fine_dining', 'Pet Bunara', 4.6, 'Stratico ul. 1, 23000 Zadar', '해산물·육류 요리 레스토랑.', 'Restaurant serving seafood and meat dishes.'),

  // —— rovinj ——
  place('rovinj-fine_dining-1', 'rovinj', 'fine_dining', 'Monte', 4.7, 'Šetalište Vijeća Europe 1-2, 52210 Rovinj', '크로아티아를 대표하는 유명 레스토랑.', 'One of Croatia\'s most celebrated restaurants.'),

  // —— hvar ——
  place('hvar-fine_dining-1', 'hvar', 'fine_dining', 'Mediterraneo Dine & Wine', 4.6, 'Braće Bibić 15, 21450 Hvar', '미쉐린 가이드 등재 레스토랑.', 'Michelin Guide-listed restaurant.'),

]
