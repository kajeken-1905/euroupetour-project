import { place } from './placeFactory'
import type { Place } from '../types'

// 바티칸 시국 자체에는 대중 음식점이 거의 없어, 성 베드로 광장/바티칸 박물관과
// 바로 맞닿은 로마 보르고 피오(Borgo Pio)·프라티(Prati) 지역의 실제 검증된 곳을 수록.
export const placesVAExtra: Place[] = [
  // —— vatican-city ——
  place('vatican-city-fine_dining-1', 'vatican-city', 'fine_dining', 'Rione XIV Bistrot', 'Borgo Pio, 21, 00193 Roma RM, Italia', '보르고 피오의 가족 운영 비스트로. 카르보나라가 있습니다.', 'Family-run bistro in Borgo Pio serving carbonara.'),
  place('vatican-city-fine_dining-2', 'vatican-city', 'fine_dining', 'Roberto Cucina 3.0', 'Borgo Pio, 170, 00193 Roma RM, Italia', '보르고 피오의 레스토랑.', 'Restaurant in Borgo Pio.'),
  place('vatican-city-fine_dining-3', 'vatican-city', 'fine_dining', 'Ristorante Arlù', 'Borgo Pio, 135, 00193 Roma RM, Italia', '보르고 피오의 가족 운영 레스토랑, 로마식 제철 요리 전문.', 'Family-run restaurant in Borgo Pio serving seasonal Roman dishes.'),
  place('vatican-city-fine_dining-4', 'vatican-city', 'fine_dining', 'Ristorante al Passetto di Borgo', 'Borgo Pio, 62, 00193 Roma RM, Italia', '보르고 피오의 로마 트라토리아. 리가토니 알라 노르치나가 있습니다.', 'Roman trattoria in Borgo Pio serving rigatoni alla norcina.'),
  place('vatican-city-fine_dining-5', 'vatican-city', 'fine_dining', 'Dal Toscano', 'Via Germanico, 58-60, 00192 Roma RM, Italia', '비스테카 피오렌티나를 내는 프라티의 토스카나 트라토리아.', 'Tuscan trattoria in Prati serving bistecca fiorentina.'),

  place('vatican-city-bakery-1', 'vatican-city', 'bakery', 'Old Bridge Gelateria', 'Viale dei Bastioni di Michelangelo, 5, 00192 Roma RM, Italia', '바티칸 박물관 입구 옆의 젤라토 가게.', 'Gelato shop beside the Vatican Museums entrance.'),
  place('vatican-city-bakery-2', 'vatican-city', 'bakery', 'Sfizio pane pizza e dolci', 'Via Vespasiano, 47, 00192 Roma RM, Italia', '포카치아와 피자를 파는 바티칸 근처의 작은 빵집.', 'Small bakery near the Vatican with focaccia and pizza.'),
  place('vatican-city-bakery-3', 'vatican-city', 'bakery', 'Panificio Brugnaletti Alessandro', 'Via Vespasiano, 55, 00192 Roma RM, Italia', '바티칸 근처 가족 운영 빵집, 빵과 조각 피자를 판매.', 'Family-run bakery near the Vatican selling bread and pizza al taglio.'),
  place('vatican-city-bakery-4', 'vatican-city', 'bakery', 'Panificio Mosca', 'Via Candia, 16, 00192 Roma RM, Italia', '바티칸 박물관 근처의 동네 빵집. 피자 로사와 포카치아가 있습니다.', 'Neighbourhood bakery near the Vatican Museums with pizza rossa and focaccia.'),

  place('vatican-city-cafe-1', 'vatican-city', 'cafe', 'Sciascia Caffè 1919', 'Via Fabio Massimo, 80/a, 00192 Roma RM, Italia', '1919년부터 이어온 프라티의 역사적인 커피 로스터리 카페.', 'Historic coffee roastery cafe in Prati, open since 1919.'),
  place('vatican-city-cafe-2', 'vatican-city', 'cafe', 'Cafe Risorgimento', 'Piazza del Risorgimento, 63, 00192 Roma RM, Italia', '바티칸 성벽 바로 앞 광장에 위치한 비스트로 카페.', 'Bistro cafe right on the piazza facing the Vatican walls.'),
  place('vatican-city-cafe-3', 'vatican-city', 'cafe', 'Caffetteria di Borgo', 'Borgo Pio, 136a/137, 00193 Roma RM, Italia', '보르고 피오의 에스프레소 바. 카푸치노와 젤라토가 있습니다.', 'Espresso bar in Borgo Pio with cappuccino and gelato.'),
  place('vatican-city-cafe-4', 'vatican-city', 'cafe', 'Caffè Vergnano - Via Crescenzio', 'Via Crescenzio, 86, 00193 Roma RM, Italia', '바티칸 인근의 스페셜티 커피·베이커리 카페.', 'Specialty coffee and bakery cafe near the Vatican.'),
]
