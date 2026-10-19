import { place } from './placeFactory'
import type { Place } from '../types'

export const placesMCExtra: Place[] = [
  // —— monaco ——
  place('monaco-fine_dining-1', 'monaco', 'fine_dining', 'Le Louis XV – Alain Ducasse', 'Place du Casino, Hôtel de Paris, 98000 Monte-Carlo, Monaco', '오텔 드 파리 안의 미쉐린 3스타 레스토랑. 알랭 뒤카스가 이끕니다.', 'Three-Michelin-star restaurant in the Hôtel de Paris, led by Alain Ducasse.', { michelin: 'star3' }),
  place('monaco-fine_dining-2', 'monaco', 'fine_dining', 'Blue Bay Marcel Ravin', '40 Avenue Princesse Grace, Monte-Carlo Bay Hotel & Resort, 98000 Monaco', '몬테카를로 베이 호텔의 미쉐린 2스타 레스토랑. 카리브와 지중해 요리를 엮습니다.', 'Two-Michelin-star restaurant in the Monte-Carlo Bay Hotel, blending Caribbean and Mediterranean cooking.', { michelin: 'star2' }),
  place('monaco-fine_dining-3', 'monaco', 'fine_dining', 'Yoshi', '4 Avenue de la Madone, Hôtel Métropole, 98000 Monaco', '오텔 메트로폴 안의 일식 레스토랑. 미쉐린 가이드에 실려 있습니다.', 'Japanese restaurant in the Hôtel Métropole, listed in the Michelin Guide.'),
  place('monaco-fine_dining-4', 'monaco', 'fine_dining', 'Café de Paris Monte-Carlo', 'Place du Casino, 98000 Monaco', '1868년 문을 연 카지노 광장의 브라세리. 2023년 새 단장 후 위층 테라스가 생겼습니다.', 'Casino Square brasserie founded in 1868, reopened in 2023 with a new upstairs terrace.', { image: '/places/monaco-fine_dining-4.jpg' }),
  place('monaco-fine_dining-5', 'monaco', 'fine_dining', 'Beefbar Monaco', '42 Quai Jean-Charles Rey, Port de Fontvieille, 98000 Monaco', '퐁비에유 항구의 고기 전문 레스토랑. 와규·블랙 앵거스 등 여러 산지 소고기를 냅니다.', 'Meat restaurant on Fontvieille port serving beef from several origins, including Wagyu and Black Angus.'),

  place('monaco-bakery-1', 'monaco', 'bakery', 'L\'Épi d\'Or', '6 Rue Grimaldi, 98000 Monaco', '1957년부터 콩다민에 자리한 빵집. 모나코 명물 바르바주앙과 크루아상이 인기입니다.', 'Bakery in La Condamine since 1957, popular for the Monegasque barbajuan and croissants.'),
  place('monaco-bakery-2', 'monaco', 'bakery', 'Ladurée Monaco', 'Galerie du Métropole, 17 Avenue des Spélugues, 98000 Monaco', '메트로폴 갤러리에 위치한 프랑스 마카롱 명가 라뒤레의 모나코 매장.', 'Monaco outpost of the famed French macaron house, located in the Métropole gallery.'),

  place('monaco-cafe-1', 'monaco', 'cafe', 'Le Deli Robuchon Monaco', '3 Avenue Saint-Laurent, 98000 Monaco', '로부숑 그룹의 캐주얼 델리. 커피·페이스트리·샐러드·샌드위치를 오전 8시~오후 8시에 냅니다.', 'Robuchon group\'s casual deli with coffee, pastries, salads and sandwiches, open 8am to 8pm.'),
  place('monaco-cafe-2', 'monaco', 'cafe', 'Le Limùn', 'Square Beaumarchais, Hôtel Hermitage, 98000 Monaco', '에르미타주 호텔 겨울 정원의 올데이 레스토랑 겸 티룸. 애프터눈 티와 직접 만든 페이스트리를 냅니다.', 'All-day restaurant and tea room in the Hôtel Hermitage winter garden, with afternoon tea and house-made pastries.'),

  // —— monte-carlo ——

  place('monte-carlo-bakery-1', 'monte-carlo', 'bakery', 'Pâtisserie Riviera', '27 Boulevard des Moulins, 98000 Monte-Carlo, Monaco', '1955년부터 이어온 살롱 드 테. 모든 것을 직접 만들고 글루텐 프리 제품도 있습니다.', 'Tea salon open since 1955, making everything in-house, including a gluten-free range.'),

  place('monte-carlo-cafe-1', 'monte-carlo', 'cafe', 'MetCafé Monte Carlo', '17 Av. des Spélugues, 98000 Monaco', '메트로폴 갤러리의 카페. 조엘 로부숑 요리와 케이크를 아침부터 저녁까지 냅니다.', 'Café in the Métropole gallery serving Joël Robuchon dishes and cakes from breakfast to dinner.'),
]
