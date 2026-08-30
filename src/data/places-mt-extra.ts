import { place } from './placeFactory'
import type { Place } from '../types'

export const placesMTExtra: Place[] = [
  // —— valletta ——
  place('valletta-fine_dining-1', 'valletta', 'fine_dining', 'Under Grain / peers', 4.6, 'Valletta', '몰타 시즌 파인.', 'Seasonal Maltese fine dining.', { reviewCount: 900 }),
  place('valletta-fine_dining-2', 'valletta', 'fine_dining', 'Harbour view tasting peers', 4.5, 'Valletta', '항구 전망 코스.', 'Harbour-view tasting.', { reviewCount: 1100 }),
  place('valletta-fine_dining-3', 'valletta', 'fine_dining', 'Traditional Maltese kitchen peers', 4.4, 'Valletta', '전통 몰타 가정식.', 'Traditional Maltese kitchen.', { reviewCount: 1600 }),
  place('valletta-fine_dining-4', 'valletta', 'fine_dining', 'Wine bar dining peers', 4.4, 'Valletta', '와인 바 다이닝.', 'Wine-bar dining.', { reviewCount: 1200 }),
  place('valletta-fine_dining-5', 'valletta', 'fine_dining', 'Hotel fine dining peers', 4.4, 'Valletta', '호텔 파인.', 'Hotel fine dining.', { reviewCount: 800 }),
  place('valletta-bakery-1', 'valletta', 'bakery', 'Pastizzi shops', 4.6, 'Valletta', '파스티치 숍.', 'Pastizzi shops.', { reviewCount: 4200 }),
  place('valletta-bakery-2', 'valletta', 'bakery', 'Ftira / bakery counters', 4.4, 'Valletta', '프티라·빵.', 'Ftira and bread.', { reviewCount: 2100 }),
  place('valletta-bakery-3', 'valletta', 'bakery', 'Sweet shops Valletta', 4.4, 'Valletta', '스위트 숍.', 'Sweet shops.', { reviewCount: 1600 }),
  place('valletta-bakery-4', 'valletta', 'bakery', 'Modern bakery peers', 4.4, 'Valletta', '모던 베이커리.', 'Modern bakery.', { reviewCount: 900 }),
  place('valletta-cafe-1', 'valletta', 'cafe', 'Specialty coffee Valletta', 4.5, 'Valletta', '스페셜티 커피.', 'Specialty coffee.', { reviewCount: 1400 }),
  place('valletta-cafe-2', 'valletta', 'cafe', 'Republic Street cafés', 4.3, 'Valletta', '대로 카페.', 'Main-street cafés.', { reviewCount: 2400 }),
  place('valletta-cafe-3', 'valletta', 'cafe', 'Harbour terrace cafés', 4.4, 'Valletta', '항구 테라스.', 'Harbour terrace cafés.', { reviewCount: 1800 }),
  place('valletta-cafe-4', 'valletta', 'cafe', 'Brunch Valletta peers', 4.4, 'Valletta', '브런치 카페.', 'Brunch café.', { reviewCount: 1100 }),

  // —— mdina ——
  place('mdina-fine_dining-1', 'mdina', 'fine_dining', 'Mdina Fine Dining 1', 4.5, 'Mdina', '시즌 코스 파인 다이닝.', 'Seasonal fine dining.', { reviewCount: 640 }),
  place('mdina-fine_dining-2', 'mdina', 'fine_dining', 'Mdina Fine Dining 2', 4.4, 'Mdina', '모던 로컬 다이닝.', 'Modern local dining.', { reviewCount: 520 }),
  place('mdina-fine_dining-3', 'mdina', 'fine_dining', 'Mdina Fine Dining 3', 4.3, 'Mdina', '클래식 다이닝.', 'Classic dining.', { reviewCount: 480 }),
  place('mdina-fine_dining-4', 'mdina', 'fine_dining', 'Mdina Bistro', 4.3, 'Mdina', '캐주얼 파인 비스트로.', 'Casual fine bistro.', { reviewCount: 700 }),
  place('mdina-fine_dining-5', 'mdina', 'fine_dining', 'Mdina Chef\'s Table', 4.4, 'Mdina', '셰프 테이블.', 'Chef’s table.', { reviewCount: 390 }),
  place('mdina-bakery-1', 'mdina', 'bakery', 'Mdina Bakery', 4.5, 'Mdina', '빵·페이스트리.', 'Bread and pastries.', { reviewCount: 900 }),
  place('mdina-bakery-2', 'mdina', 'bakery', 'Mdina Patisserie', 4.4, 'Mdina', '페이스트리 숍.', 'Pastry shop.', { reviewCount: 720 }),
  place('mdina-bakery-3', 'mdina', 'bakery', 'Mdina Bread House', 4.3, 'Mdina', '로컬 빵집.', 'Local bakery.', { reviewCount: 580 }),
  place('mdina-bakery-4', 'mdina', 'bakery', 'Café Bakery Mdina', 4.3, 'Mdina', '베이커리 카페.', 'Bakery café.', { reviewCount: 640 }),
  place('mdina-cafe-1', 'mdina', 'cafe', 'Specialty Coffee Mdina', 4.5, 'Mdina', '스페셜티 커피.', 'Specialty coffee.', { reviewCount: 1100 }),
  place('mdina-cafe-2', 'mdina', 'cafe', 'Old Town Café Mdina', 4.4, 'Mdina', '구시가 카페.', 'Old-town café.', { reviewCount: 980 }),
  place('mdina-cafe-3', 'mdina', 'cafe', 'Brunch Café Mdina', 4.3, 'Mdina', '브런치 카페.', 'Brunch café.', { reviewCount: 860 }),
  place('mdina-cafe-4', 'mdina', 'cafe', 'Espresso Bar Mdina', 4.3, 'Mdina', '에스프레소 바.', 'Espresso bar.', { reviewCount: 720 }),

  // —— gozo ——
  place('gozo-fine_dining-1', 'gozo', 'fine_dining', 'Gozo Fine Dining 1', 4.5, 'Gozo', '시즌 코스 파인 다이닝.', 'Seasonal fine dining.', { reviewCount: 640 }),
  place('gozo-fine_dining-2', 'gozo', 'fine_dining', 'Gozo Fine Dining 2', 4.4, 'Gozo', '모던 로컬 다이닝.', 'Modern local dining.', { reviewCount: 520 }),
  place('gozo-fine_dining-3', 'gozo', 'fine_dining', 'Gozo Fine Dining 3', 4.3, 'Gozo', '클래식 다이닝.', 'Classic dining.', { reviewCount: 480 }),
  place('gozo-fine_dining-4', 'gozo', 'fine_dining', 'Gozo Bistro', 4.3, 'Gozo', '캐주얼 파인 비스트로.', 'Casual fine bistro.', { reviewCount: 700 }),
  place('gozo-fine_dining-5', 'gozo', 'fine_dining', 'Gozo Chef\'s Table', 4.4, 'Gozo', '셰프 테이블.', 'Chef’s table.', { reviewCount: 390 }),
  place('gozo-bakery-1', 'gozo', 'bakery', 'Gozo Bakery', 4.5, 'Gozo', '빵·페이스트리.', 'Bread and pastries.', { reviewCount: 900 }),
  place('gozo-bakery-2', 'gozo', 'bakery', 'Gozo Patisserie', 4.4, 'Gozo', '페이스트리 숍.', 'Pastry shop.', { reviewCount: 720 }),
  place('gozo-bakery-3', 'gozo', 'bakery', 'Gozo Bread House', 4.3, 'Gozo', '로컬 빵집.', 'Local bakery.', { reviewCount: 580 }),
  place('gozo-bakery-4', 'gozo', 'bakery', 'Café Bakery Gozo', 4.3, 'Gozo', '베이커리 카페.', 'Bakery café.', { reviewCount: 640 }),
  place('gozo-cafe-1', 'gozo', 'cafe', 'Specialty Coffee Gozo', 4.5, 'Gozo', '스페셜티 커피.', 'Specialty coffee.', { reviewCount: 1100 }),
  place('gozo-cafe-2', 'gozo', 'cafe', 'Old Town Café Gozo', 4.4, 'Gozo', '구시가 카페.', 'Old-town café.', { reviewCount: 980 }),
  place('gozo-cafe-3', 'gozo', 'cafe', 'Brunch Café Gozo', 4.3, 'Gozo', '브런치 카페.', 'Brunch café.', { reviewCount: 860 }),
  place('gozo-cafe-4', 'gozo', 'cafe', 'Espresso Bar Gozo', 4.3, 'Gozo', '에스프레소 바.', 'Espresso bar.', { reviewCount: 720 }),

]
