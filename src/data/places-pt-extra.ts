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
  place('porto-bakery-1', 'porto', 'bakery', 'Manteigaria', 4.6, 'Rua de Alexandre Braga 24, 4000-049 Porto, Portugal', '바삭한 페이스트리와 크리미한 필링의 파스텔 드 나타로 유명한 포르투의 인기 베이커리', 'Popular Porto bakery famed for expertly crafted pastéis de nata with flaky crust'),
  place('porto-cafe-1', 'porto', 'cafe', 'Combi Coffee', 4.6, 'Rua do Morgado de Mateus nº29, 4000-334 Porto, Portugal', '포르투 봉핑 지구 최초의 스페셜티 커피숍', 'Porto\'s first specialty coffee shop, located in the trendy Bonfim neighborhood'),

  // —— sintra ——
  place('sintra-fine_dining-1', 'sintra', 'fine_dining', 'Taberna Criativa', 4.6, 'Rua Guilherme Gomes Fernandes 19, 2710-721 Sintra', '제철 재료의 촛불 레스토랑.', 'Candle-lit restaurant with seasonal dishes.'),
  place('sintra-bakery-1', 'sintra', 'bakery', 'Casa Piriquita', 4.5, 'Av. D. Francisco Almeida 31, 2710-562 Sintra, Portugal', '1862년 창업한 신트라의 유서 깊은 제과점, 트라베세이루로 유명', 'Historic Sintra bakery founded in 1862, famous for its travesseiros pastry'),
  place('sintra-cafe-1', 'sintra', 'cafe', 'Fábrica da Nata', 4.5, 'R. Tomé de Barros Queirós nº25 A, 2710-624 Sintra, Portugal', '포르투갈의 파스텔 드 나타 전통을 알리는 신트라의 카페', 'Sintra cafe dedicated to sharing Portugal\'s pastel de nata heritage'),

  // —— faro ——
  place('faro-fine_dining-1', 'faro', 'fine_dining', 'Rio Formosa', 4.5, 'Praça D. Francisco Gomes 2, 4º Andar, 8000-168 Faro', '구시가·석호 전망의 모던 요리.', 'Modern cuisine with views of the Old Town and lagoon.'),
  place('faro-bakery-1', 'faro', 'bakery', 'Pastelaria Padaria Centeio', 4.6, 'Av. da República 92, 8005-119 Faro, Portugal', '파루 구시가 인근의 최고 평가 베이커리, 아몬드 페이스트리로 유명', 'Top-rated Faro bakery near the old town, known for its almond pastries'),
  place('faro-cafe-1', 'faro', 'cafe', 'Soho Coffee', 4.5, 'R. do Alportel 29, 8000-502 Faro, Portugal', '공정무역 유기농 원두를 사용하는 파루의 카페', 'Faro cafe committed to fair-trade, organic coffee and homemade products'),

  // —— coimbra ——
  place('coimbra-fine_dining-1', 'coimbra', 'fine_dining', 'MA', 4.6, 'Rua do Norte 13, 3000-295 Coimbra', '미쉐린 가이드 등재 일식 레스토랑.', 'Michelin Guide-listed Japanese restaurant.'),
  place('coimbra-korean-1', 'coimbra', 'korean', 'Gangnam Korean BBQ', 4.5, 'Praça do Comércio 12, Coimbra', '포르투갈 최초의 정통 한식 바비큐.', 'Portugal\'s first authentic Korean BBQ restaurant.'),
  place('coimbra-bakery-1', 'coimbra', 'bakery', 'Pastelaria Penta', 4.5, 'Av. Fernão de Magalhães 22, 3000-171 Coimbra, Portugal', '신선한 페이스트리로 인기 있는 코임브라의 베이커리', 'Popular Coimbra bakery known for wonderfully fresh pastries'),
  place('coimbra-cafe-1', 'coimbra', 'cafe', 'Café Santa Cruz', 4.4, 'Praça 8 de Maio 4, 6, 7, 3000-300 Coimbra, Portugal', '옛 산타 크루즈 수도원 건물에 위치한 1923년부터 이어온 코임브라의 명소 카페', 'Landmark Coimbra cafe since 1923, housed in the former Santa Cruz Monastery hall'),

  // —— funchal ——
  place('funchal-fine_dining-1', 'funchal', 'fine_dining', 'Il Gallo D\'Oro', 4.7, 'Estrada Monumental 147, São Martinho, 9004-532 Funchal', '미쉐린 2스타, 마데이라 최고의 레스토랑.', 'Two-Michelin-star restaurant, the island\'s best.'),
  place('funchal-bakery-1', 'funchal', 'bakery', 'Padaria Pastelaria Mariazinha', 4.6, 'R. Conde Carvalhal 125b, 9060-399 Funchal, Portugal', '푼샬 유일의 장작 오븐 베이커리, 커스터드 페이스트리로 인기', 'Funchal\'s only wood-fired bakery, popular for its custard pastries'),
  place('funchal-cafe-1', 'funchal', 'cafe', 'Maia Coffee Shop', 4.6, 'Zarco N°25, São Martinho, 9000-023 Funchal, Portugal', '다양한 에스프레소와 콜드브루를 선보이는 푼샬의 아늑한 스페셜티 커피숍', 'Cozy Funchal specialty coffee corner shop with a wide range of espresso and cold brew drinks'),

  // —— lagos ——
  place('lagos-fine_dining-1', 'lagos', 'fine_dining', 'Don Sebastião', 4.6, 'Rua 25 de Abril 20-22, 8600 Lagos', '1979년부터 이어온 신선한 생선구이.', 'Fresh grilled fish, serving since 1979.'),
  place('lagos-bakery-1', 'lagos', 'bakery', 'Pastelaria Algarve', 4.6, 'R. Infante de Sagres 64, 8600-743 Lagos, Portugal', '알가르브 최고로 꼽히는 파스텔 드 나타를 선보이는 라고스의 인기 제과점', 'Popular Lagos bakery whose pastel de nata is considered among the best in the Algarve'),
  place('lagos-cafe-1', 'lagos', 'cafe', 'The Studio: Coffee Roaster & Brunch Cafe', 4.6, 'Rua Soeiro da Costa 20, 8600-624 Lagos, Portugal', '자체 로스터리를 갖춘 라고스의 인기 브런치 커피숍', 'Popular Lagos brunch cafe that grew into its own coffee roastery'),

  // —— cascais ——
  place('cascais-fine_dining-1', 'cascais', 'fine_dining', 'Fortaleza do Guincho', 4.6, 'Estrada do Guincho, 2750-642 Cascais', '17세기 요새의 미쉐린 레스토랑.', 'Michelin restaurant in a 17th-century fortress.'),
  place('cascais-bakery-1', 'cascais', 'bakery', 'Panisol Bakery', 4.4, 'Rua Frederico Arouca 23, 2750-642 Cascais, Portugal', '1953년부터 이어온 카스카이스의 정겨운 코너 베이커리, 파스텔 드 나타로 유명', 'Friendly corner bakery in Cascais since 1953, known for its tasty pastel de nata'),
  place('cascais-cafe-1', 'cascais', 'cafe', 'Euphoria Specialty', 4.5, 'Av. 25 de Abril 181, 2750-513 Cascais, Portugal', '해안가 인근에 위치한 카스카이스의 건강식 브런치 & 커피숍', 'Waterfront-area Cascais coffee spot offering smoothie bowls and healthy brunch options'),

  // —— aveiro ——
  place('aveiro-fine_dining-1', 'aveiro', 'fine_dining', 'Salpoente', 4.6, 'Antigo Cais de S. Roque 83, 3800-256 Aveiro', '듀아르트 에이라 셰프의 파인 다이닝.', 'Fine dining by Chef Duarte Eira.'),
  place('aveiro-bakery-1', 'aveiro', 'bakery', 'Pastelaria Confeitaria Ramos', 4.5, 'Av. Dr. Lourenço Peixinho 86 e 88, 3800-159 Aveiro, Portugal', '아베이루 명물 오부스 몰레스로 유명한 전통 제과점', 'Traditional Aveiro pastry shop famous for its ovos moles sweets'),
  place('aveiro-cafe-1', 'aveiro', 'cafe', 'Armazém do Caffè', 4.5, 'Mário Sacramento 97, 3810-106 Aveiro, Portugal', '다양한 커피와 브런치를 제공하는 아베이루의 인기 카페', 'Popular Aveiro cafe offering a wide variety of coffee, cakes and brunch options'),

  // —— fatima ——
  place('fatima-fine_dining-1', 'fatima', 'fine_dining', 'Tia Alice', 4.6, 'Rua Jacinta Marto 100, 2495-450 Fátima', '파티마의 사랑받는 가족 운영 레스토랑.', 'Beloved family-run restaurant in Fátima.'),
  place('fatima-bakery-1', 'fatima', 'bakery', 'Doce Momento Pastelaria', 4.5, 'R. Cónego Manuel Nunes Formigão 50, 2495-457 Fátima, Portugal', '전통 방식의 수제 디저트로 유명한 파티마 중심가의 제과점', 'Fátima town-center bakery known for traditional, handcrafted sweets'),
  place('fatima-cafe-1', 'fatima', 'cafe', 'Apollo Caffé', 4.5, 'Rua Jacinta Marto 10, 2495-450 Fátima, Portugal', '파티마 성지 인근의 인기 카페', 'Popular cafe located near the Sanctuary of Fátima'),

  // —— evora ——
  place('evora-fine_dining-1', 'evora', 'fine_dining', 'Origens Restaurant', 4.6, 'Rua de Burgos 10, 7000-863 Évora', '에보라 최고 평가 레스토랑.', 'Évora\'s top-rated restaurant.'),
  place('evora-bakery-1', 'evora', 'bakery', 'Pastelaria Conventual Pão de Rala', 4.6, 'Rua do Cicioso 47, 7000-658 Évora, Portugal', '대를 이어 운영되는 에보라의 수도원식 전통 디저트 전문점', 'Family-run Évora bakery specializing in traditional convent-style regional sweets'),
  place('evora-cafe-1', 'evora', 'cafe', 'Do Largo', 4.5, 'Largo d\'Alvaro Velho 5, 7000-799 Évora, Portugal', '유기농 허브 농장과 연계된 에보라의 낮 카페, 좋은 와인도 함께', 'Daytime Évora cafe connected to an organic herb farm, also known for quality wine'),

  // —— obidos ——
  place('obidos-fine_dining-1', 'obidos', 'fine_dining', '41 Restaurante', 4.6, 'Rua Direita Nº41, 2510-001 Óbidos', '오비두스 최고 평가 레스토랑.', 'Widely regarded as Óbidos\' best restaurant.'),
  place('obidos-bakery-1', 'obidos', 'bakery', 'Pastelaria Dom Afonso', 4.4, 'R. Direita 113, 2510-057 Óbidos, Portugal', '좋은 커피와 맛있는 케이크로 유명한 오비두스의 매력적인 카페', 'Charming Óbidos cafe known for good coffee and tasty cakes'),
  place('obidos-cafe-1', 'obidos', 'cafe', 'Café Os Filipes', 4.5, 'R. do Arrabalde, 2510-113 Óbidos, Portugal', '친절한 영어 구사 스태프가 있는 오비두스의 아늑한 카페', 'Cozy Óbidos cafe with friendly English-speaking staff and great prices'),

  // —— braga ——
  place('braga-fine_dining-1', 'braga', 'fine_dining', 'Le Brito\'s', 4.5, 'Praça Mouzinho de Albuquerque 49, 4710-301 Braga', '그릴 요리 전문 레스토랑.', 'Restaurant specializing in grilled dishes.'),

  place('braga-bakery-1', 'braga', 'bakery', 'Pastelaria Ferreira Capa', 4.5, 'R. dos Capelistas 45, 4700-307 Braga, Portugal', '거의 100년 역사를 지닌 브라가의 전통 제과점 겸 티룸', 'Braga bakery and tea room with nearly a century of history'),
  place('braga-cafe-1', 'braga', 'cafe', 'Nordico Coffee Shop', 4.7, 'Rua do Anjo 90A, 4700-305 Braga, Portugal', '북유럽풍 인테리어의 브라가 스페셜티 커피 & 브런치 카페', 'Scandinavian-inspired Braga specialty coffee and brunch shop'),

  // —— nazare ——
  place('nazare-fine_dining-1', 'nazare', 'fine_dining', 'Pangeia Restaurante', 4.6, 'Rua Abel da Silva 50, 2450-060 Nazaré', '대서양 전망의 나자레 대표 레스토랑.', 'Nazaré\'s leading restaurant with Atlantic views.'),
  place('nazare-bakery-1', 'nazare', 'bakery', 'Pastelaria Arcádia', 4.5, 'R. Mouzinho de Albuquerque 25-15, 2450-256 Nazaré, Portugal', '포르투갈다운 분위기 속 신선한 페이스트리로 유명한 나자레의 제과점', 'Nazaré bakery with proper Portuguese atmosphere, known for outstanding fresh pastries'),
  place('nazare-cafe-1', 'nazare', 'cafe', 'Village Brunch & Coffee', 4.6, 'Praça Sousa Oliveira nº25, 2450-159 Nazaré, Portugal', '모던한 인테리어가 돋보이는 나자레의 인기 브런치 커피숍', 'Nazaré coffee shop with a modern interior, popular for its excellent brunch'),

  // —— guimaraes ——
  place('guimaraes-fine_dining-1', 'guimaraes', 'fine_dining', 'A Cozinha por António Loureiro', 4.6, 'Rua de Couros 20, 4810-225 Guimarães', '미쉐린 1스타 레스토랑.', 'One-Michelin-star restaurant.'),

  place('guimaraes-bakery-1', 'guimaraes', 'bakery', 'Pastelaria Clarinha', 4.4, 'Largo do Toural 86/88, 4810-427 Guimarães, Portugal', '기마랑이스 명물 토르타 데 기마랑이스로 유명한 전통 제과점', 'Classic Guimarães bakery famous for its signature Tortas de Guimarães'),
  place('guimaraes-cafe-1', 'guimaraes', 'cafe', 'Café A Brasileira', 4.4, 'Av. Conde de Margaride 175 loja a2, 4810-535 Guimarães, Portugal', '합리적인 가격과 친절한 서비스로 인기 있는 기마랑이스의 카페', 'Guimarães cafe popular for good prices, coffee and friendly service'),
]
