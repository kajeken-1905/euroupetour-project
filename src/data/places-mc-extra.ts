import { place } from './placeFactory'
import type { Place } from '../types'

export const placesMCExtra: Place[] = [
  // —— monaco ——
  place('monaco-fine_dining-1', 'monaco', 'fine_dining', 'Le Louis XV – Alain Ducasse', 4.6, 'Place du Casino, Hôtel de Paris, 98000 Monte-Carlo, Monaco', '알랭 뒤카스가 이끄는 미쉐린 3스타 레스토랑, 모나코 최고의 파인 다이닝.', 'Three-Michelin-star restaurant led by Alain Ducasse, Monaco\'s pinnacle of fine dining.', { reviewCount: 1600 }),
  place('monaco-fine_dining-2', 'monaco', 'fine_dining', 'Blue Bay Marcel Ravin', 4.6, '40 Avenue Princesse Grace, Monte-Carlo Bay Hotel & Resort, 98000 Monaco', '카리브해와 지중해 요리를 결합한 미쉐린 2스타 레스토랑.', 'Two-Michelin-star restaurant blending Caribbean and Mediterranean cuisine.', { reviewCount: 309 }),
  place('monaco-fine_dining-3', 'monaco', 'fine_dining', 'Yoshi', 4.5, '4 Avenue de la Madone, Hôtel Métropole, 98000 Monaco', '코트다쥐르 유일의 미쉐린 스타 일식 레스토랑.', 'The only Michelin-starred Japanese restaurant on the Côte d\'Azur.'),
  place('monaco-fine_dining-4', 'monaco', 'fine_dining', 'Café de Paris Monte-Carlo', 4.1, 'Place du Casino, 98000 Monaco', '카지노 광장 옆 벨 에포크 양식의 상징적인 브라세리.', 'Iconic Belle Époque-style brasserie beside the Casino de Monte-Carlo.', { reviewCount: 3900 }),
  place('monaco-fine_dining-5', 'monaco', 'fine_dining', 'Beefbar Monaco', 4.5, '42 Quai Jean-Charles Rey, Port de Fontvieille, 98000 Monaco', '2005년부터 이어온 코트다쥐르 대표 스테이크 레스토랑.', 'The Côte d\'Azur\'s go-to steak restaurant, serving quality beef since 2005.', { reviewCount: 1306 }),

  place('monaco-bakery-1', 'monaco', 'bakery', 'L\'Épi d\'Or', 4.4, '6 Rue Grimaldi, 98000 Monaco', '1958년부터 이어온 모나코의 대표 베이커리, 모네가스크 명물 바르바주앙으로 유명.', 'Monaco\'s beloved bakery since 1958, famous for the Monegasque specialty barbajuan.', { reviewCount: 619 }),
  place('monaco-bakery-2', 'monaco', 'bakery', 'Ladurée Monaco', 4.3, '17 Avenue des Spélugues, Hôtel Métropole, 98000 Monaco', '메트로폴 갤러리에 위치한 프랑스 마카롱 명가 라뒤레의 모나코 매장.', 'Monaco outpost of the famed French macaron house, located in the Métropole gallery.'),

  place('monaco-cafe-1', 'monaco', 'cafe', 'Le Deli Robuchon Monaco', 4.0, 'Avenue Saint-Laurent, 98000 Monaco', '조엘 로부숑의 유산을 이은 캐주얼 델리 겸 카페, 커피와 페이스트리로 인기.', 'Casual deli-café carrying on Joël Robuchon\'s legacy, known for coffee and pastries.'),
  place('monaco-cafe-2', 'monaco', 'cafe', 'Le Limùn', 4.4, 'Square Beaumarchais, Hôtel Hermitage, 98000 Monaco', '에르미타주 호텔 로비의 우아한 티·커피 살롱.', 'Elegant tea and coffee salon in the lobby of Hôtel Hermitage.', { reviewCount: 22 }),

  // —— monte-carlo ——
  place('monte-carlo-fine_dining-1', 'monte-carlo', 'fine_dining', 'Le Louis XV - Alain Ducasse', 4.6, 'Place du Casino, Hôtel de Paris, 98000 Monaco', '미쉐린 3스타 레스토랑.', 'Three-Michelin-star restaurant.'),
  place('monte-carlo-fine_dining-2', 'monte-carlo', 'fine_dining', 'Yoshi', 4.5, '4 Avenue de la Madone, Hôtel Métropole, 98000 Monaco', '코트다쥐르 유일의 미쉐린 스타 일식 레스토랑.', 'The only Michelin-starred Japanese restaurant on the Côte d\'Azur.'),
  place('monte-carlo-fine_dining-3', 'monte-carlo', 'fine_dining', 'Blue Bay Marcel Ravin', 4.6, '40 Avenue Princesse Grace, Monte-Carlo Bay Hotel & Resort, 98000 Monaco', '카리브해와 지중해 요리를 결합한 미쉐린 2스타 레스토랑.', 'Two-Michelin-star restaurant blending Caribbean and Mediterranean cuisine.', { reviewCount: 309 }),

  place('monte-carlo-bakery-1', 'monte-carlo', 'bakery', 'Pâtisserie Riviera', 4.5, '27 Boulevard des Moulins, 98000 Monte-Carlo, Monaco', '1955년부터 이어온 몬테카를로의 대표 제과점', 'Monte Carlo\'s leading pastry shop, beloved since 1955'),
  place('monte-carlo-bakery-2', 'monte-carlo', 'bakery', 'L\'Épi d\'Or', 4.4, '6 Rue Grimaldi, 98000 Monaco', '1958년부터 이어온 모나코의 대표 베이커리, 모네가스크 명물 바르바주앙으로 유명.', 'Monaco\'s beloved bakery since 1958, famous for the Monegasque specialty barbajuan.', { reviewCount: 619 }),

  place('monte-carlo-cafe-1', 'monte-carlo', 'cafe', 'MetCafé Monte Carlo', 4.5, '17 Av. des Spélugues, 98000 Monaco', '유명 셰프가 선보이는 몬테카를로 메트로폴 쇼핑몰의 세련된 카페', 'Chic Monte Carlo café at the Metropole Shopping Center, created by a renowned chef'),
  place('monte-carlo-cafe-2', 'monte-carlo', 'cafe', 'Le Limùn', 4.4, 'Square Beaumarchais, Hôtel Hermitage, 98000 Monaco', '에르미타주 호텔 로비의 우아한 티·커피 살롱.', 'Elegant tea and coffee salon in the lobby of Hôtel Hermitage.', { reviewCount: 22 }),
]
