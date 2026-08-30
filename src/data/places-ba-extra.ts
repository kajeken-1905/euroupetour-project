import { place } from './placeFactory'
import type { Place } from '../types'

export const placesBAExtra: Place[] = [
  // —— sarajevo ——
  place('sarajevo-fine_dining-1', 'sarajevo', 'fine_dining', 'Restaurant Park Princeva peers', 4.5, 'Sarajevo', '전망 보스니아 다이닝.', 'Viewpoint Bosnian dining.', { reviewCount: 1800 }),
  place('sarajevo-fine_dining-2', 'sarajevo', 'fine_dining', 'Modern Balkan tasting peers', 4.5, 'Sarajevo', '모던 발칸 코스.', 'Modern Balkan tasting.', { reviewCount: 900 }),
  place('sarajevo-fine_dining-3', 'sarajevo', 'fine_dining', 'Inat Kuća', 4.4, 'Sarajevo', '전통 보스니아 가정식.', 'Traditional Bosnian home cooking.', { reviewCount: 3200 }),
  place('sarajevo-fine_dining-4', 'sarajevo', 'fine_dining', 'Ćevabdžinica Željo / classic peers', 4.5, 'Sarajevo', '체바피 클래식.', 'Ćevapi classic.', { reviewCount: 8600 }),
  place('sarajevo-fine_dining-5', 'sarajevo', 'fine_dining', 'Bistrik fine casual peers', 4.4, 'Sarajevo', '비스트리크 캐주얼 파인.', 'Bistrik casual fine.', { reviewCount: 1200 }),
  place('sarajevo-bakery-1', 'sarajevo', 'bakery', 'Somun / pita bakeries', 4.5, 'Sarajevo', '소문·피타 빵집.', 'Somun and pita bakeries.', { reviewCount: 4200 }),
  place('sarajevo-bakery-2', 'sarajevo', 'bakery', 'Baklava pastry shops', 4.5, 'Sarajevo', '바클라바·과자.', 'Baklava and sweets.', { reviewCount: 2800 }),
  place('sarajevo-bakery-3', 'sarajevo', 'bakery', 'Old Town bakery counters', 4.3, 'Sarajevo', '구시가 빵 카운터.', 'Old-town bakery counters.', { reviewCount: 1600 }),
  place('sarajevo-bakery-4', 'sarajevo', 'bakery', 'Modern sourdough peers', 4.4, 'Sarajevo', '사워도우.', 'Sourdough.', { reviewCount: 700 }),
  place('sarajevo-cafe-1', 'sarajevo', 'cafe', 'Zlatna Ribica / classic cafés', 4.4, 'Sarajevo', '클래식 카페.', 'Classic café.', { reviewCount: 2100 }),
  place('sarajevo-cafe-2', 'sarajevo', 'cafe', 'Specialty coffee Sarajevo', 4.5, 'Sarajevo', '스페셜티 커피.', 'Specialty coffee.', { reviewCount: 1100 }),
  place('sarajevo-cafe-3', 'sarajevo', 'cafe', 'Baščaršija tea & coffee', 4.3, 'Sarajevo', '시장가 차·커피.', 'Bazaar tea and coffee.', { reviewCount: 3600 }),
  place('sarajevo-cafe-4', 'sarajevo', 'cafe', 'Brunch cafés Centar', 4.4, 'Sarajevo', '브런치 카페.', 'Brunch café.', { reviewCount: 1400 }),

  // —— mostar ——
  place('mostar-fine_dining-1', 'mostar', 'fine_dining', 'Mostar Fine Dining 1', 4.5, 'Mostar', '시즌 코스 파인 다이닝.', 'Seasonal fine dining.', { reviewCount: 640 }),
  place('mostar-fine_dining-2', 'mostar', 'fine_dining', 'Mostar Fine Dining 2', 4.4, 'Mostar', '모던 로컬 다이닝.', 'Modern local dining.', { reviewCount: 520 }),
  place('mostar-fine_dining-3', 'mostar', 'fine_dining', 'Mostar Fine Dining 3', 4.3, 'Mostar', '클래식 다이닝.', 'Classic dining.', { reviewCount: 480 }),
  place('mostar-fine_dining-4', 'mostar', 'fine_dining', 'Mostar Bistro', 4.3, 'Mostar', '캐주얼 파인 비스트로.', 'Casual fine bistro.', { reviewCount: 700 }),
  place('mostar-fine_dining-5', 'mostar', 'fine_dining', 'Mostar Chef\'s Table', 4.4, 'Mostar', '셰프 테이블.', 'Chef’s table.', { reviewCount: 390 }),
  place('mostar-bakery-1', 'mostar', 'bakery', 'Mostar Bakery', 4.5, 'Mostar', '빵·페이스트리.', 'Bread and pastries.', { reviewCount: 900 }),
  place('mostar-bakery-2', 'mostar', 'bakery', 'Mostar Patisserie', 4.4, 'Mostar', '페이스트리 숍.', 'Pastry shop.', { reviewCount: 720 }),
  place('mostar-bakery-3', 'mostar', 'bakery', 'Mostar Bread House', 4.3, 'Mostar', '로컬 빵집.', 'Local bakery.', { reviewCount: 580 }),
  place('mostar-bakery-4', 'mostar', 'bakery', 'Café Bakery Mostar', 4.3, 'Mostar', '베이커리 카페.', 'Bakery café.', { reviewCount: 640 }),
  place('mostar-cafe-1', 'mostar', 'cafe', 'Specialty Coffee Mostar', 4.5, 'Mostar', '스페셜티 커피.', 'Specialty coffee.', { reviewCount: 1100 }),
  place('mostar-cafe-2', 'mostar', 'cafe', 'Old Town Café Mostar', 4.4, 'Mostar', '구시가 카페.', 'Old-town café.', { reviewCount: 980 }),
  place('mostar-cafe-3', 'mostar', 'cafe', 'Brunch Café Mostar', 4.3, 'Mostar', '브런치 카페.', 'Brunch café.', { reviewCount: 860 }),
  place('mostar-cafe-4', 'mostar', 'cafe', 'Espresso Bar Mostar', 4.3, 'Mostar', '에스프레소 바.', 'Espresso bar.', { reviewCount: 720 }),

  // —— banja-luka ——
  place('banja-luka-fine_dining-1', 'banja-luka', 'fine_dining', 'Banja Luka Fine Dining 1', 4.5, 'Banja Luka', '시즌 코스 파인 다이닝.', 'Seasonal fine dining.', { reviewCount: 640 }),
  place('banja-luka-fine_dining-2', 'banja-luka', 'fine_dining', 'Banja Luka Fine Dining 2', 4.4, 'Banja Luka', '모던 로컬 다이닝.', 'Modern local dining.', { reviewCount: 520 }),
  place('banja-luka-fine_dining-3', 'banja-luka', 'fine_dining', 'Banja Luka Fine Dining 3', 4.3, 'Banja Luka', '클래식 다이닝.', 'Classic dining.', { reviewCount: 480 }),
  place('banja-luka-fine_dining-4', 'banja-luka', 'fine_dining', 'Banja Luka Bistro', 4.3, 'Banja Luka', '캐주얼 파인 비스트로.', 'Casual fine bistro.', { reviewCount: 700 }),
  place('banja-luka-fine_dining-5', 'banja-luka', 'fine_dining', 'Banja Luka Chef\'s Table', 4.4, 'Banja Luka', '셰프 테이블.', 'Chef’s table.', { reviewCount: 390 }),
  place('banja-luka-bakery-1', 'banja-luka', 'bakery', 'Banja Luka Bakery', 4.5, 'Banja Luka', '빵·페이스트리.', 'Bread and pastries.', { reviewCount: 900 }),
  place('banja-luka-bakery-2', 'banja-luka', 'bakery', 'Banja Luka Patisserie', 4.4, 'Banja Luka', '페이스트리 숍.', 'Pastry shop.', { reviewCount: 720 }),
  place('banja-luka-bakery-3', 'banja-luka', 'bakery', 'Banja Luka Bread House', 4.3, 'Banja Luka', '로컬 빵집.', 'Local bakery.', { reviewCount: 580 }),
  place('banja-luka-bakery-4', 'banja-luka', 'bakery', 'Café Bakery Banja Luka', 4.3, 'Banja Luka', '베이커리 카페.', 'Bakery café.', { reviewCount: 640 }),
  place('banja-luka-cafe-1', 'banja-luka', 'cafe', 'Specialty Coffee Banja Luka', 4.5, 'Banja Luka', '스페셜티 커피.', 'Specialty coffee.', { reviewCount: 1100 }),
  place('banja-luka-cafe-2', 'banja-luka', 'cafe', 'Old Town Café Banja Luka', 4.4, 'Banja Luka', '구시가 카페.', 'Old-town café.', { reviewCount: 980 }),
  place('banja-luka-cafe-3', 'banja-luka', 'cafe', 'Brunch Café Banja Luka', 4.3, 'Banja Luka', '브런치 카페.', 'Brunch café.', { reviewCount: 860 }),
  place('banja-luka-cafe-4', 'banja-luka', 'cafe', 'Espresso Bar Banja Luka', 4.3, 'Banja Luka', '에스프레소 바.', 'Espresso bar.', { reviewCount: 720 }),

  // —— travnik ——
  place('travnik-fine_dining-1', 'travnik', 'fine_dining', 'Travnik Fine Dining 1', 4.5, 'Travnik', '시즌 코스 파인 다이닝.', 'Seasonal fine dining.', { reviewCount: 640 }),
  place('travnik-fine_dining-2', 'travnik', 'fine_dining', 'Travnik Fine Dining 2', 4.4, 'Travnik', '모던 로컬 다이닝.', 'Modern local dining.', { reviewCount: 520 }),
  place('travnik-fine_dining-3', 'travnik', 'fine_dining', 'Travnik Fine Dining 3', 4.3, 'Travnik', '클래식 다이닝.', 'Classic dining.', { reviewCount: 480 }),
  place('travnik-fine_dining-4', 'travnik', 'fine_dining', 'Travnik Bistro', 4.3, 'Travnik', '캐주얼 파인 비스트로.', 'Casual fine bistro.', { reviewCount: 700 }),
  place('travnik-fine_dining-5', 'travnik', 'fine_dining', 'Travnik Chef\'s Table', 4.4, 'Travnik', '셰프 테이블.', 'Chef’s table.', { reviewCount: 390 }),
  place('travnik-bakery-1', 'travnik', 'bakery', 'Travnik Bakery', 4.5, 'Travnik', '빵·페이스트리.', 'Bread and pastries.', { reviewCount: 900 }),
  place('travnik-bakery-2', 'travnik', 'bakery', 'Travnik Patisserie', 4.4, 'Travnik', '페이스트리 숍.', 'Pastry shop.', { reviewCount: 720 }),
  place('travnik-bakery-3', 'travnik', 'bakery', 'Travnik Bread House', 4.3, 'Travnik', '로컬 빵집.', 'Local bakery.', { reviewCount: 580 }),
  place('travnik-bakery-4', 'travnik', 'bakery', 'Café Bakery Travnik', 4.3, 'Travnik', '베이커리 카페.', 'Bakery café.', { reviewCount: 640 }),
  place('travnik-cafe-1', 'travnik', 'cafe', 'Specialty Coffee Travnik', 4.5, 'Travnik', '스페셜티 커피.', 'Specialty coffee.', { reviewCount: 1100 }),
  place('travnik-cafe-2', 'travnik', 'cafe', 'Old Town Café Travnik', 4.4, 'Travnik', '구시가 카페.', 'Old-town café.', { reviewCount: 980 }),
  place('travnik-cafe-3', 'travnik', 'cafe', 'Brunch Café Travnik', 4.3, 'Travnik', '브런치 카페.', 'Brunch café.', { reviewCount: 860 }),
  place('travnik-cafe-4', 'travnik', 'cafe', 'Espresso Bar Travnik', 4.3, 'Travnik', '에스프레소 바.', 'Espresso bar.', { reviewCount: 720 }),

]
