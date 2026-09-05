import { place } from './placeFactory'
import type { Place } from '../types'

// 바티칸 시국 자체에는 대중 음식점이 거의 없어, 성 베드로 광장/바티칸 박물관과
// 바로 맞닿은 로마 보르고 피오(Borgo Pio)·프라티(Prati) 지역의 실제 검증된 곳을 수록.
export const placesVAExtra: Place[] = [
  // —— vatican-city ——
  place('vatican-city-fine_dining-1', 'vatican-city', 'fine_dining', 'Rione XIV Bistrot', 4.8, 'Borgo Pio, 21, 00193 Roma RM, Italia', '보르고 피오의 인기 가정식 비스트로, 카르보나라로 유명.', 'Popular family-run bistro in Borgo Pio, known for its carbonara.', { reviewCount: 2269 }),
  place('vatican-city-fine_dining-2', 'vatican-city', 'fine_dining', 'Roberto Cucina 3.0', 4.8, 'Borgo Pio, 170, 00193 Roma RM, Italia', '바티칸 관람 후 찾는 보르고 피오의 인기 로컬 레스토랑.', 'Popular local restaurant in Borgo Pio, a favorite after visiting the Vatican.', { reviewCount: 2080 }),
  place('vatican-city-fine_dining-3', 'vatican-city', 'fine_dining', 'Ristorante Arlù', 4.6, 'Borgo Pio, 135, 00193 Roma RM, Italia', '보르고 피오의 가족 운영 레스토랑, 로마식 제철 요리 전문.', 'Family-run restaurant in Borgo Pio serving seasonal Roman dishes.', { reviewCount: 2982 }),
  place('vatican-city-fine_dining-4', 'vatican-city', 'fine_dining', 'Ristorante al Passetto di Borgo', 4.5, 'Borgo Pio, 62, 00193 Roma RM, Italia', '보르고 피오의 전통 로마 트라토리아, 리가토니 알라 노르치나로 유명.', 'Traditional Roman trattoria in Borgo Pio, known for rigatoni alla norcina.', { reviewCount: 1213 }),
  place('vatican-city-fine_dining-5', 'vatican-city', 'fine_dining', 'Dal Toscano', 4.2, 'Via Germanico, 58-60, 00192 Roma RM, Italia', '비스테카 피오렌티나로 유명한 프라티의 유서 깊은 토스카나 트라토리아.', 'Historic Tuscan trattoria in Prati, famous for bistecca fiorentina.', { reviewCount: 1808 }),

  place('vatican-city-bakery-1', 'vatican-city', 'bakery', 'Old Bridge Gelateria', 4.6, 'Viale dei Bastioni di Michelangelo, 5, 00192 Roma RM, Italia', '바티칸 박물관 바로 옆, 로마의 대표 젤라토 본점.', 'Flagship gelato shop right next to the Vatican Museums entrance.', { reviewCount: 6692 }),
  place('vatican-city-bakery-2', 'vatican-city', 'bakery', 'Sfizio pane pizza e dolci', 4.9, 'Via Vespasiano, 47, 00192 Roma RM, Italia', '바티칸 인근의 작은 베이커리, 포카치아와 피자로 인기.', 'Small bakery near the Vatican, popular for focaccia and pizza.', { reviewCount: 130 }),
  place('vatican-city-bakery-3', 'vatican-city', 'bakery', 'Panificio Brugnaletti Alessandro', 4.8, 'Via Vespasiano, 55, 00192 Roma RM, Italia', '바티칸 근처 가족 운영 빵집, 빵과 조각 피자를 판매.', 'Family-run bakery near the Vatican selling bread and pizza al taglio.', { reviewCount: 151 }),
  place('vatican-city-bakery-4', 'vatican-city', 'bakery', 'Panificio Mosca', 4.6, 'Via Candia, 16, 00192 Roma RM, Italia', '바티칸 박물관 인근의 동네 빵집, 피자 로사와 포카치아로 유명.', 'Neighborhood bakery near the Vatican Museums, known for pizza rossa and focaccia.', { reviewCount: 337 }),

  place('vatican-city-cafe-1', 'vatican-city', 'cafe', 'Sciascia Caffè 1919', 4.5, 'Via Fabio Massimo, 80/a, 00192 Roma RM, Italia', '1919년부터 이어온 프라티의 역사적인 커피 로스터리 카페.', 'Historic coffee roastery cafe in Prati, open since 1919.', { reviewCount: 4773 }),
  place('vatican-city-cafe-2', 'vatican-city', 'cafe', 'Cafe Risorgimento', 4.4, 'Piazza del Risorgimento, 63, 00192 Roma RM, Italia', '바티칸 성벽 바로 앞 광장에 위치한 비스트로 카페.', 'Bistro cafe right on the piazza facing the Vatican walls.', { reviewCount: 4170 }),
  place('vatican-city-cafe-3', 'vatican-city', 'cafe', 'Caffetteria di Borgo', 4.2, 'Borgo Pio, 136a/137, 00193 Roma RM, Italia', '보르고 피오의 에스프레소 바, 카푸치노와 젤라토로 인기.', 'Espresso bar in Borgo Pio, popular for cappuccino and gelato.', { reviewCount: 805 }),
  place('vatican-city-cafe-4', 'vatican-city', 'cafe', 'Caffè Vergnano - Via Crescenzio', 4.6, 'Via Crescenzio, 86, 00193 Roma RM, Italia', '바티칸 인근의 스페셜티 커피·베이커리 카페.', 'Specialty coffee and bakery cafe near the Vatican.', { reviewCount: 876 }),
]
