import { place } from './placeFactory'
import type { Place } from '../types'

export const placesMTExtra: Place[] = [
  // —— valletta ——
  place('valletta-fine_dining-1', 'valletta', 'fine_dining', 'Under Grain', 4.6, 'Valletta', '몰타 시즌 파인.', 'Seasonal Maltese fine dining.', { reviewCount: 900 }),
  place('valletta-bakery-1', 'valletta', 'bakery', 'Pastizzi shops', 4.6, 'Valletta', '파스티치 숍.', 'Pastizzi shops.', { reviewCount: 4200 }),
  place('valletta-bakery-2', 'valletta', 'bakery', 'Ftira / bakery counters', 4.4, 'Valletta', '프티라·빵.', 'Ftira and bread.', { reviewCount: 2100 }),
  place('valletta-bakery-3', 'valletta', 'bakery', 'Sweet shops Valletta', 4.4, 'Valletta', '스위트 숍.', 'Sweet shops.', { reviewCount: 1600 }),
  place('valletta-cafe-1', 'valletta', 'cafe', 'Specialty coffee Valletta', 4.5, 'Valletta', '스페셜티 커피.', 'Specialty coffee.', { reviewCount: 1400 }),
  place('valletta-cafe-2', 'valletta', 'cafe', 'Republic Street cafés', 4.3, 'Valletta', '대로 카페.', 'Main-street cafés.', { reviewCount: 2400 }),
  place('valletta-cafe-3', 'valletta', 'cafe', 'Harbour terrace cafés', 4.4, 'Valletta', '항구 테라스.', 'Harbour terrace cafés.', { reviewCount: 1800 }),

  // —— mdina ——
  place('mdina-fine_dining-1', 'mdina', 'fine_dining', 'Medina Restaurant', 4.5, '7 Holy Cross Street, Mdina MDN 1231', '구시가 성벽 안의 미식 레스토랑.', 'Fine dining within Mdina\'s historic walls.'),

  // —— gozo ——
  place('gozo-fine_dining-1', 'gozo', 'fine_dining', 'Tmun', 4.6, 'Triq Martino Garces, Mġarr Harbour, Għajnsielem', '미쉐린 가이드 등재 시푸드 레스토랑.', 'Michelin Guide-listed seafood restaurant.'),

]
