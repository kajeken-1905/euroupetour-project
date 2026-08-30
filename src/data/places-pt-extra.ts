import { place } from './placeFactory'
import type { Place } from '../types'

export const placesPTExtra: Place[] = [
  // —— lisbon ——
  place('lisbon-fine_dining-1', 'lisbon', 'fine_dining', 'Belcanto', 4.7, 'Lisbon', '미슐랭 포르투갈 코스.', 'Michelin Portuguese tasting.', { reviewCount: 1600 }),
  place('lisbon-fine_dining-2', 'lisbon', 'fine_dining', 'Time Out Market stalls', 4.5, 'Lisbon', '미식 푸드홀.', 'Gourmet food hall.', { reviewCount: 18000 }),
  place('lisbon-fine_dining-3', 'lisbon', 'fine_dining', 'Cervejaria Ramiro', 4.6, 'Lisbon', '해산물 클래식.', 'Seafood classic.', { reviewCount: 12000 }),
  place('lisbon-fine_dining-4', 'lisbon', 'fine_dining', 'A Cevicheria', 4.5, 'Lisbon', '세비체·창의 다이닝.', 'Ceviche and creative dining.', { reviewCount: 4200 }),
  place('lisbon-fine_dining-5', 'lisbon', 'fine_dining', 'Prado', 4.5, 'Lisbon', '시즌 로컬 다이닝.', 'Seasonal local dining.', { reviewCount: 1800 }),
  place('lisbon-bakery-1', 'lisbon', 'bakery', 'Pastéis de Belém', 4.6, 'Lisbon', '에그타르트 원조.', 'Original egg tarts.', { reviewCount: 42000 }),
  place('lisbon-bakery-2', 'lisbon', 'bakery', 'Manteigaria', 4.6, 'Lisbon', '나타 전문.', 'Nata specialists.', { reviewCount: 12000 }),
  place('lisbon-bakery-3', 'lisbon', 'bakery', 'Padaria Portuguesa', 4.3, 'Lisbon', '로컬 베이커리 체인.', 'Local bakery chain.', { reviewCount: 4800 }),
  place('lisbon-bakery-4', 'lisbon', 'bakery', 'Fábrica da Nata', 4.4, 'Lisbon', '따뜻한 나타.', 'Warm natas.', { reviewCount: 3600 }),
  place('lisbon-cafe-1', 'lisbon', 'cafe', 'Café A Brasileira', 4.3, 'Lisbon', '역사적 카페.', 'Historic café.', { reviewCount: 9800 }),
  place('lisbon-cafe-2', 'lisbon', 'cafe', 'Copenhagen Coffee Lab', 4.5, 'Lisbon', '스페셜티 커피.', 'Specialty coffee.', { reviewCount: 2100 }),
  place('lisbon-cafe-3', 'lisbon', 'cafe', 'Fabrica Coffee Roasters', 4.5, 'Lisbon', '로스터리 카페.', 'Roastery café.', { reviewCount: 2400 }),
  place('lisbon-cafe-4', 'lisbon', 'cafe', 'Dear Breakfast', 4.4, 'Lisbon', '브런치 카페.', 'Brunch café.', { reviewCount: 2800 }),
  place('lisbon-korean-1', 'lisbon', 'korean', 'Pabul', 4.5, 'Rua do Crucifixo 30, Lisboa', '리스본 최고 평가의 한식당.', 'Top-rated Korean restaurant in Lisbon.'),

  // —— porto ——
  place('porto-fine_dining-1', 'porto', 'fine_dining', 'dop', 4.6, 'Largo de São Domingos 16, 4050-545 Porto', '미쉐린 1스타 레스토랑.', 'One-Michelin-star restaurant.'),

  // —— sintra ——
  place('sintra-fine_dining-1', 'sintra', 'fine_dining', 'Taberna Criativa', 4.6, 'Rua Guilherme Gomes Fernandes 19, 2710-721 Sintra', '제철 재료의 촛불 레스토랑.', 'Candle-lit restaurant with seasonal dishes.'),

  // —— faro ——
  place('faro-fine_dining-1', 'faro', 'fine_dining', 'Rio Formosa', 4.5, 'Praça D. Francisco Gomes 2, 4º Andar, 8000-168 Faro', '구시가·석호 전망의 모던 요리.', 'Modern cuisine with views of the Old Town and lagoon.'),

  // —— coimbra ——
  place('coimbra-fine_dining-1', 'coimbra', 'fine_dining', 'MA', 4.6, 'Rua do Norte 13, 3000-295 Coimbra', '미쉐린 가이드 등재 일식 레스토랑.', 'Michelin Guide-listed Japanese restaurant.'),
  place('coimbra-korean-1', 'coimbra', 'korean', 'Gangnam Korean BBQ', 4.5, 'Praça do Comércio 12, Coimbra', '포르투갈 최초의 정통 한식 바비큐.', 'Portugal\'s first authentic Korean BBQ restaurant.'),

  // —— funchal ——
  place('funchal-fine_dining-1', 'funchal', 'fine_dining', 'Il Gallo D\'Oro', 4.7, 'Estrada Monumental 147, São Martinho, 9004-532 Funchal', '미쉐린 2스타, 마데이라 최고의 레스토랑.', 'Two-Michelin-star restaurant, the island\'s best.'),

  // —— lagos ——
  place('lagos-fine_dining-1', 'lagos', 'fine_dining', 'Don Sebastião', 4.6, 'Rua 25 de Abril 20-22, 8600 Lagos', '1979년부터 이어온 신선한 생선구이.', 'Fresh grilled fish, serving since 1979.'),

  // —— cascais ——
  place('cascais-fine_dining-1', 'cascais', 'fine_dining', 'Fortaleza do Guincho', 4.6, 'Estrada do Guincho, 2750-642 Cascais', '17세기 요새의 미쉐린 레스토랑.', 'Michelin restaurant in a 17th-century fortress.'),

  // —— aveiro ——
  place('aveiro-fine_dining-1', 'aveiro', 'fine_dining', 'Salpoente', 4.6, 'Antigo Cais de S. Roque 83, 3800-256 Aveiro', '듀아르트 에이라 셰프의 파인 다이닝.', 'Fine dining by Chef Duarte Eira.'),

  // —— fatima ——
  place('fatima-fine_dining-1', 'fatima', 'fine_dining', 'Tia Alice', 4.6, 'Rua Jacinta Marto 100, 2495-450 Fátima', '파티마의 사랑받는 가족 운영 레스토랑.', 'Beloved family-run restaurant in Fátima.'),

  // —— evora ——
  place('evora-fine_dining-1', 'evora', 'fine_dining', 'Origens Restaurant', 4.6, 'Rua de Burgos 10, 7000-863 Évora', '에보라 최고 평가 레스토랑.', 'Évora\'s top-rated restaurant.'),

  // —— obidos ——
  place('obidos-fine_dining-1', 'obidos', 'fine_dining', '41 Restaurante', 4.6, 'Rua Direita Nº41, 2510-001 Óbidos', '오비두스 최고 평가 레스토랑.', 'Widely regarded as Óbidos\' best restaurant.'),

  // —— braga ——
  place('braga-fine_dining-1', 'braga', 'fine_dining', 'Le Brito\'s', 4.5, 'Praça Mouzinho de Albuquerque 49, 4710-301 Braga', '그릴 요리 전문 레스토랑.', 'Restaurant specializing in grilled dishes.'),


  // —— nazare ——
  place('nazare-fine_dining-1', 'nazare', 'fine_dining', 'Pangeia Restaurante', 4.6, 'Rua Abel da Silva 50, 2450-060 Nazaré', '대서양 전망의 나자레 대표 레스토랑.', 'Nazaré\'s leading restaurant with Atlantic views.'),

  // —— guimaraes ——
  place('guimaraes-fine_dining-1', 'guimaraes', 'fine_dining', 'A Cozinha por António Loureiro', 4.6, 'Rua de Couros 20, 4810-225 Guimarães', '미쉐린 1스타 레스토랑.', 'One-Michelin-star restaurant.'),

]
