import { place } from './placeFactory'
import type { Place } from '../types'

export const placesMCExtra: Place[] = [
  // —— monaco ——
  place('monaco-fine_dining-1', 'monaco', 'fine_dining', 'Le Louis XV – Alain Ducasse', 'Place du Casino, Hôtel de Paris, 98000 Monte-Carlo, Monaco', '오텔 드 파리 안의 미쉐린 3스타 레스토랑. 알랭 뒤카스가 이끕니다.', 'Three-Michelin-star restaurant in the Hôtel de Paris, led by Alain Ducasse.', { michelin: 'star3' }),
  place('monaco-fine_dining-2', 'monaco', 'fine_dining', 'Blue Bay Marcel Ravin', '40 Avenue Princesse Grace, Monte-Carlo Bay Hotel & Resort, 98000 Monaco', '몬테카를로 베이 호텔의 미쉐린 2스타 레스토랑. 카리브와 지중해 요리를 엮습니다.', 'Two-Michelin-star restaurant in the Monte-Carlo Bay Hotel, blending Caribbean and Mediterranean cooking.', { michelin: 'star2' }),
  place('monaco-fine_dining-3', 'monaco', 'fine_dining', 'Yoshi', '4 Avenue de la Madone, Hôtel Métropole, 98000 Monaco', '오텔 메트로폴 안의 일식 레스토랑. 미쉐린 가이드에 실려 있습니다.', 'Japanese restaurant in the Hôtel Métropole, listed in the Michelin Guide.'),
  place('monaco-fine_dining-4', 'monaco', 'fine_dining', 'Café de Paris Monte-Carlo', 'Place du Casino, 98000 Monaco', '카지노 광장 옆 벨 에포크풍 브라스리.', 'Belle Époque-style brasserie beside the Casino square.', { image: '/places/monaco-fine_dining-4.jpg' }),
  place('monaco-fine_dining-5', 'monaco', 'fine_dining', 'Beefbar Monaco', '42 Quai Jean-Charles Rey, Port de Fontvieille, 98000 Monaco', '2005년 문을 연 스테이크 레스토랑.', 'Steak restaurant open since 2005.'),

  place('monaco-bakery-1', 'monaco', 'bakery', 'L\'Épi d\'Or', '6 Rue Grimaldi, 98000 Monaco', '1958년 문을 연 모나코의 빵집. 모나코 튀김 만두 바르바주앙이 있습니다.', 'Monaco bakery open since 1958, with barbajuans.'),
  place('monaco-bakery-2', 'monaco', 'bakery', 'Ladurée Monaco', '17 Avenue des Spélugues, Hôtel Métropole, 98000 Monaco', '메트로폴 갤러리에 위치한 프랑스 마카롱 명가 라뒤레의 모나코 매장.', 'Monaco outpost of the famed French macaron house, located in the Métropole gallery.'),

  place('monaco-cafe-1', 'monaco', 'cafe', 'Le Deli Robuchon Monaco', 'Avenue Saint-Laurent, 98000 Monaco', '커피와 페이스트리가 있는 로부숑 이름의 델리 겸 카페.', 'Robuchon-branded deli-café with coffee and pastries.'),
  place('monaco-cafe-2', 'monaco', 'cafe', 'Le Limùn', 'Square Beaumarchais, Hôtel Hermitage, 98000 Monaco', '에르미타주 호텔 로비의 우아한 티·커피 살롱.', 'Elegant tea and coffee salon in the lobby of Hôtel Hermitage.'),

  // —— monte-carlo ——

  place('monte-carlo-bakery-1', 'monte-carlo', 'bakery', 'Pâtisserie Riviera', '27 Boulevard des Moulins, 98000 Monte-Carlo, Monaco', '1955년부터 이어진 몬테카를로의 제과점.', 'Monte Carlo pastry shop operating since 1955.'),

  place('monte-carlo-cafe-1', 'monte-carlo', 'cafe', 'MetCafé Monte Carlo', '17 Av. des Spélugues, 98000 Monaco', '메트로폴 쇼핑센터 안의 카페.', 'Café in the Metropole Shopping Center.'),
]
