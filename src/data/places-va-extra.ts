import { place } from './placeFactory'
import type { Place } from '../types'

// 바티칸 시국 자체에는 대중 음식점이 거의 없어, 성 베드로 광장/바티칸 박물관과
// 바로 맞닿은 로마 보르고 피오(Borgo Pio)·프라티(Prati) 지역의 실제 검증된 곳을 수록.
export const placesVAExtra: Place[] = [
  // —— vatican-city ——
  place('vatican-city-fine_dining-1', 'vatican-city', 'fine_dining', 'Rione XIV Bistrot', 'Borgo Pio, 21, 00193 Roma RM, Italia', '보르고 피오 거리의 작은 비스트로. 로마·라치오 요리를 냅니다.', 'Small bistro on Borgo Pio serving Roman and Lazio dishes.'),
  place('vatican-city-fine_dining-3', 'vatican-city', 'fine_dining', 'Ristorante Arlù', 'Borgo Pio, 135, 00193 Roma RM, Italia', '성 베드로 대성당 근처 보르고 피오의 이탈리아 레스토랑. 파스타와 디저트를 직접 만듭니다.', 'Italian restaurant on Borgo Pio near St Peter\'s, making its own pasta and desserts.'),
  place('vatican-city-fine_dining-4', 'vatican-city', 'fine_dining', 'Ristorante al Passetto di Borgo', 'Borgo Pio, 60-62, 00193 Roma RM, Italia', '보르고 피오의 로마 요리 레스토랑. 바깥 테이블이 있습니다.', 'Roman-cuisine restaurant on Borgo Pio, with outdoor tables.'),
  place('vatican-city-fine_dining-5', 'vatican-city', 'fine_dining', 'Dal Toscano', 'Via Germanico, 58-60, 00192 Roma RM, Italia', '1938년 문을 연 프라티의 토스카나식 숯불구이 레스토랑. 비스테카 알라 피오렌티나를 냅니다.', 'Tuscan grill restaurant in Prati, open since 1938, serving bistecca alla fiorentina.'),

  place('vatican-city-bakery-1', 'vatican-city', 'bakery', 'Old Bridge Gelateria', 'Viale dei Bastioni di Michelangelo, 5, 00192 Roma RM, Italia', '바티칸 성벽 근처의 젤라토 가게.', 'Gelato shop near the Vatican walls.'),
  place('vatican-city-bakery-4', 'vatican-city', 'bakery', 'Panificio Mosca', 'Via Candia, 16, 00192 Roma RM, Italia', '1916년부터 이어온 가족 운영 빵집. 피자 비앙카를 무게로 팝니다. 현금만 받습니다.', 'Family bakery since 1916, selling pizza bianca by weight; cash only.'),

  place('vatican-city-cafe-1', 'vatican-city', 'cafe', 'Sciascia Caffè 1919', 'Via Fabio Massimo, 80/a, 00192 Roma RM, Italia', '1919년 문을 연 프라티의 바. 다크 초콜릿을 입힌 잔에 커피를 냅니다.', 'Prati bar open since 1919, serving coffee in a dark-chocolate-lined cup.'),
  place('vatican-city-cafe-2', 'vatican-city', 'cafe', 'Cafe Risorgimento', 'Piazza del Risorgimento, 63, 00192 Roma RM, Italia', '리소르지멘토 광장의 카페. 아침부터 아페리티보까지 냅니다.', 'Café on Piazza del Risorgimento, open from breakfast to aperitivo.'),
]
