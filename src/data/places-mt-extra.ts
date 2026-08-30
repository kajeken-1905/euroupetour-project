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
  place('mdina-bakery-1', 'mdina', 'bakery', 'Crystal Palace Bar', 4.5, 'Mdina Gate, Mdina, Malta', '24시간 운영하는 음디나의 명물 파스티치 바', '24-hour Mdina institution famous for its always-fresh pastizzi'),
  place('mdina-cafe-1', 'mdina', 'cafe', 'Fontanella Tea Garden', 4.5, '1 Bastion Street, Mdina, Malta', '몰타 전경이 내려다보이는 음디나의 홈메이드 케이크 카페', 'Mdina café known for homemade cakes and stunning views over Malta'),

  // —— gozo ——
  place('gozo-fine_dining-1', 'gozo', 'fine_dining', 'Tmun', 4.6, 'Triq Martino Garces, Mġarr Harbour, Għajnsielem', '미쉐린 가이드 등재 시푸드 레스토랑.', 'Michelin Guide-listed seafood restaurant.'),

  place('gozo-bakery-1', 'gozo', 'bakery', 'Ta\' Saminu Bakery', 4.8, 'Triq Tal-Ħamrija, Ix-Xewkija, Gozo, Malta', '장작 오븐으로 고조 전통 프티라를 굽는 가족 운영 베이커리', 'Family-run Gozo bakery baking traditional ftira in a wood-burning oven'),
  place('gozo-cafe-1', 'gozo', 'cafe', 'Cafe Jubilee', 4.5, 'Pjazza l-Indipendenza, Ir-Rabat, Gozo, Malta', '라바트 중심 광장에 위치한 고조의 인기 카페', 'Popular Gozo café on Rabat\'s central square'),
]
