import { place } from './placeFactory'
import type { Place } from '../types'

export const placesMCExtra: Place[] = [
  // —— monaco ——
  place('monaco-fine_dining-1', 'monaco', 'fine_dining', 'Le Louis XV – Alain Ducasse', 4.8, 'Monaco', '미슐랭 클래식 파인.', 'Michelin classic fine dining.', { reviewCount: 1600 }),
  place('monaco-fine_dining-2', 'monaco', 'fine_dining', 'Blue Bay / Joel Robuchon peers', 4.6, 'Monaco', '호텔 파인 다이닝.', 'Hotel fine dining.', { reviewCount: 1200 }),
  place('monaco-fine_dining-3', 'monaco', 'fine_dining', 'Yoshi', 4.5, 'Monaco', '일식 파인 다이닝.', 'Japanese fine dining.', { reviewCount: 900 }),
  place('monaco-fine_dining-4', 'monaco', 'fine_dining', 'Cafe de Paris Monte-Carlo', 4.4, 'Monaco', '카지노 광장 브라세리.', 'Casino-square brasserie.', { reviewCount: 6400 }),
  place('monaco-fine_dining-5', 'monaco', 'fine_dining', 'Beefbar Monaco', 4.4, 'Monaco', '스테이크·캐주얼 파인.', 'Steak casual fine.', { reviewCount: 2100 }),
  place('monaco-bakery-1', 'monaco', 'bakery', 'Boulangerie / patisserie Monaco', 4.5, 'Monaco', '프렌치 빵·페이스트리.', 'French bread and pastries.', { reviewCount: 1400 }),
  place('monaco-bakery-2', 'monaco', 'bakery', 'Hotel de Paris pastry', 4.5, 'Monaco', '호텔 파티스리.', 'Hotel pastry.', { reviewCount: 1100 }),
  place('monaco-bakery-3', 'monaco', 'bakery', 'Local viennoiserie', 4.4, 'Monaco', '크루아상·비엔누아즈리.', 'Croissants and viennoiserie.', { reviewCount: 900 }),
  place('monaco-bakery-4', 'monaco', 'bakery', 'Harbor bakery café', 4.3, 'Monaco', '항구 베이커리 카페.', 'Harbour bakery café.', { reviewCount: 720 }),
  place('monaco-cafe-1', 'monaco', 'cafe', 'Café de Paris terrace', 4.4, 'Monaco', '광장 테라스 카페.', 'Square terrace café.', { reviewCount: 5200 }),
  place('monaco-cafe-2', 'monaco', 'cafe', 'Specialty coffee Monaco', 4.5, 'Monaco', '스페셜티 커피.', 'Specialty coffee.', { reviewCount: 800 }),
  place('monaco-cafe-3', 'monaco', 'cafe', 'Port Hercule cafés', 4.3, 'Monaco', '항구 카페.', 'Harbour cafés.', { reviewCount: 1600 }),
  place('monaco-cafe-4', 'monaco', 'cafe', 'Brunch café Carré d\'Or', 4.4, 'Monaco', '럭셔리 지구 브런치.', 'Luxury-district brunch.', { reviewCount: 980 }),
  place('monaco-korean-1', 'monaco', 'korean', 'Korean Kitchen Monaco', 4.3, 'Monaco', '캐주얼 한식.', 'Casual Korean.', { reviewCount: 280 }),
  place('monaco-korean-2', 'monaco', 'korean', 'Bibimbap Monaco', 4.2, 'Monaco', '비빔밥.', 'Bibimbap.', { reviewCount: 200 }),
  place('monaco-korean-3', 'monaco', 'korean', 'Korean BBQ Monaco', 4.2, 'Monaco', '고기구이.', 'Korean BBQ.', { reviewCount: 220 }),
  place('monaco-korean-4', 'monaco', 'korean', 'Kimchi Monaco', 4.2, 'Monaco', '김치·반찬.', 'Kimchi-focused.', { reviewCount: 160 }),

  // —— monte-carlo ——
  place('monte-carlo-fine_dining-1', 'monte-carlo', 'fine_dining', 'Monte Carlo Fine Dining 1', 4.5, 'Monte Carlo', '시즌 코스 파인 다이닝.', 'Seasonal fine dining.', { reviewCount: 640 }),
  place('monte-carlo-fine_dining-2', 'monte-carlo', 'fine_dining', 'Monte Carlo Fine Dining 2', 4.4, 'Monte Carlo', '모던 로컬 다이닝.', 'Modern local dining.', { reviewCount: 520 }),
  place('monte-carlo-fine_dining-3', 'monte-carlo', 'fine_dining', 'Monte Carlo Fine Dining 3', 4.3, 'Monte Carlo', '클래식 다이닝.', 'Classic dining.', { reviewCount: 480 }),
  place('monte-carlo-fine_dining-4', 'monte-carlo', 'fine_dining', 'Monte Carlo Bistro', 4.3, 'Monte Carlo', '캐주얼 파인 비스트로.', 'Casual fine bistro.', { reviewCount: 700 }),
  place('monte-carlo-fine_dining-5', 'monte-carlo', 'fine_dining', 'Monte Carlo Chef\'s Table', 4.4, 'Monte Carlo', '셰프 테이블.', 'Chef’s table.', { reviewCount: 390 }),
  place('monte-carlo-bakery-1', 'monte-carlo', 'bakery', 'Monte Carlo Bakery', 4.5, 'Monte Carlo', '빵·페이스트리.', 'Bread and pastries.', { reviewCount: 900 }),
  place('monte-carlo-bakery-2', 'monte-carlo', 'bakery', 'Monte Carlo Patisserie', 4.4, 'Monte Carlo', '페이스트리 숍.', 'Pastry shop.', { reviewCount: 720 }),
  place('monte-carlo-bakery-3', 'monte-carlo', 'bakery', 'Monte Carlo Bread House', 4.3, 'Monte Carlo', '로컬 빵집.', 'Local bakery.', { reviewCount: 580 }),
  place('monte-carlo-bakery-4', 'monte-carlo', 'bakery', 'Café Bakery Monte Carlo', 4.3, 'Monte Carlo', '베이커리 카페.', 'Bakery café.', { reviewCount: 640 }),
  place('monte-carlo-cafe-1', 'monte-carlo', 'cafe', 'Specialty Coffee Monte Carlo', 4.5, 'Monte Carlo', '스페셜티 커피.', 'Specialty coffee.', { reviewCount: 1100 }),
  place('monte-carlo-cafe-2', 'monte-carlo', 'cafe', 'Old Town Café Monte Carlo', 4.4, 'Monte Carlo', '구시가 카페.', 'Old-town café.', { reviewCount: 980 }),
  place('monte-carlo-cafe-3', 'monte-carlo', 'cafe', 'Brunch Café Monte Carlo', 4.3, 'Monte Carlo', '브런치 카페.', 'Brunch café.', { reviewCount: 860 }),
  place('monte-carlo-cafe-4', 'monte-carlo', 'cafe', 'Espresso Bar Monte Carlo', 4.3, 'Monte Carlo', '에스프레소 바.', 'Espresso bar.', { reviewCount: 720 }),
  place('monte-carlo-korean-1', 'monte-carlo', 'korean', 'Korean Kitchen Monte Carlo', 4.4, 'Monte Carlo', '캐주얼 한식.', 'Casual Korean.', { reviewCount: 640 }),
  place('monte-carlo-korean-2', 'monte-carlo', 'korean', 'Bibimbap Monte Carlo', 4.3, 'Monte Carlo', '비빔밥·덮밥.', 'Bibimbap bowls.', { reviewCount: 520 }),
  place('monte-carlo-korean-3', 'monte-carlo', 'korean', 'Korean BBQ Monte Carlo', 4.3, 'Monte Carlo', '고기구이.', 'Korean BBQ.', { reviewCount: 480 }),
  place('monte-carlo-korean-4', 'monte-carlo', 'korean', 'Kimchi House Monte Carlo', 4.2, 'Monte Carlo', '김치·반찬 중심.', 'Kimchi-focused Korean.', { reviewCount: 390 }),

]
