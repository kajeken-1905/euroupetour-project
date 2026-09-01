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
  place('lisbon-bakery-5', 'lisbon', 'bakery', 'Pastelaria O Careca', 4.5, 'R. Duarte Pacheco Pereira 11D, 1400-139 Lisboa', '헤스텔루 지역 현지인 단골 페이스트리 가게.', 'Local favorite pastry shop in Restelo.', { reviewCount: 1200 }),
  place('lisbon-cafe-1', 'lisbon', 'cafe', 'Café A Brasileira', 4.3, 'Lisbon', '역사적 카페.', 'Historic café.', { reviewCount: 9800 }),
  place('lisbon-cafe-2', 'lisbon', 'cafe', 'Copenhagen Coffee Lab', 4.5, 'Lisbon', '스페셜티 커피.', 'Specialty coffee.', { reviewCount: 2100 }),
  place('lisbon-cafe-3', 'lisbon', 'cafe', 'Fabrica Coffee Roasters', 4.5, 'Lisbon', '로스터리 카페.', 'Roastery café.', { reviewCount: 2400 }),
  place('lisbon-cafe-4', 'lisbon', 'cafe', 'Dear Breakfast', 4.4, 'Lisbon', '브런치 카페.', 'Brunch café.', { reviewCount: 2800 }),
  place('lisbon-cafe-5', 'lisbon', 'cafe', 'Buna Specialty Coffee', 4.7, 'Rua do Poço dos Negros 168, 1200-267 Lisboa', '카이스 두 소드레 인근 스페셜티 커피.', 'Specialty coffee near Cais do Sodré.', { reviewCount: 800 }),
  place('lisbon-korean-1', 'lisbon', 'korean', 'Pabul', 4.5, 'Rua do Crucifixo 30, Lisboa', '리스본 최고 평가의 한식당.', 'Top-rated Korean restaurant in Lisbon.'),
  place('lisbon-korean-2', 'lisbon', 'korean', 'Busan Table BBQ', 4.4, 'Fontes Pereira de Melo 3E, 1050-115 Lisboa', '한국식 BBQ 전문점.', 'Korean BBQ specialist.', { reviewCount: 600 }),
  place('lisbon-korean-3', 'lisbon', 'korean', 'King Kimchi', 4.5, 'Rua Latino Coelho 10A, 1050-136 Lisboa', '가정식 한식과 반찬.', 'Home-style Korean dishes and banchan.', { reviewCount: 450 }),
  place('lisbon-korean-4', 'lisbon', 'korean', 'Soju Pocha', 4.5, 'R. da Rosa 99, 1200-043 Lisboa', '바이후 알투의 한국식 포차, 김밥·떡볶이 등 분식.', 'Korean street-food pocha in Bairro Alto — kimbap, tteokbokki and bunsik.', { reviewCount: 900 }),
  place('lisbon-korean-5', 'lisbon', 'korean', 'Tae Dong Gwan', 4.5, 'Alameda dos Oceanos 65F, 1990-203 Lisboa', '비빔밥 등 정통 한식.', 'Authentic Korean dishes including bibimbap.', { reviewCount: 500 }),

  // —— porto ——
  place('porto-fine_dining-1', 'porto', 'fine_dining', 'dop', 4.6, 'Largo de São Domingos 16, 4050-545 Porto', '미쉐린 1스타 레스토랑.', 'One-Michelin-star restaurant.'),
  place('porto-fine_dining-2', 'porto', 'fine_dining', 'Dona Francesinha Porto Coliseu', 4.8, 'R. de Passos Manuel 245, 4000-385 Porto', '포르투 대표 프란세지냐 맛집.', 'Beloved spot for Porto\'s signature francesinha.', { reviewCount: 3000 }),
  place('porto-fine_dining-3', 'porto', 'fine_dining', 'Café Santiago', 4.9, 'Rua Passos Manuel 226, 4000-382 Porto', '1959년부터 이어온 프란세지냐 명가.', 'Iconic francesinha institution since 1959.', { reviewCount: 4500 }),
  place('porto-fine_dining-4', 'porto', 'fine_dining', 'Bufete Fase', 4.8, 'R. de Santa Catarina 1147, 4000-457 Porto', '작지만 유명한 프란세지냐 맛집.', 'Small, famed francesinha spot.', { reviewCount: 2600 }),
  place('porto-fine_dining-5', 'porto', 'fine_dining', 'Cantina 32', 4.8, 'R. das Flores 32, 4050-262 Porto', '트렌디한 지중해·포르투갈 퓨전 다이닝.', 'Trendy Mediterranean-Portuguese fusion dining.', { reviewCount: 1800 }),
  place('porto-bakery-1', 'porto', 'bakery', 'Manteigaria', 4.6, 'Rua de Alexandre Braga 24, 4000-049 Porto, Portugal', '바삭한 페이스트리와 크리미한 필링의 파스텔 드 나타로 유명한 포르투의 인기 베이커리', 'Popular Porto bakery famed for expertly crafted pastéis de nata with flaky crust'),
  place('porto-bakery-2', 'porto', 'bakery', 'Castro - Atelier de Pastéis de Nata', 4.7, 'Rua de Mouzinho da Silveira 61, 4050-420 Porto', '따뜻하게 갓 구운 파스텔 드 나타 전문점.', 'Specialist in warm, freshly baked pastéis de nata.', { reviewCount: 2200 }),
  place('porto-bakery-3', 'porto', 'bakery', 'Confeitaria do Bolhão', 4.3, 'Rua Formosa 339, 4000-252 Porto', '1919년부터 이어온 역사적 제과점.', 'Historic pastry shop since 1919.', { reviewCount: 900 }),
  place('porto-bakery-4', 'porto', 'bakery', 'My Green Pastry', 4.6, 'Praça da República 195, 4050-498 Porto', '비건·글루텐프리 페이스트리 전문점.', 'Vegan and gluten-free pastry specialist.', { reviewCount: 2100 }),
  place('porto-bakery-5', 'porto', 'bakery', 'São Jorge Padaria e Pastelaria', 4.4, 'Porto', '전통 제빵·제과 전문점.', 'Traditional bakery and pastry shop.', { reviewCount: 800 }),
  place('porto-cafe-1', 'porto', 'cafe', 'Combi Coffee', 4.6, 'Rua do Morgado de Mateus nº29, 4000-334 Porto, Portugal', '포르투 봉핑 지구 최초의 스페셜티 커피숍', 'Porto\'s first specialty coffee shop, located in the trendy Bonfim neighborhood'),
  place('porto-cafe-2', 'porto', 'cafe', 'Fábrica Coffee Roasters', 4.6, 'Rua José Falcão 122, 4050-315 Porto', '자체 로스팅 스페셜티 커피와 브런치.', 'In-house roasted specialty coffee and brunch.', { reviewCount: 1500 }),
  place('porto-cafe-3', 'porto', 'cafe', "C'Alma Specialty Coffee Room", 4.7, 'R. de Passos Manuel 44, 4000-381 Porto', '역사적 건물 안 스페셜티 커피룸.', 'Specialty coffee room inside a historic building.', { reviewCount: 700 }),
  place('porto-cafe-4', 'porto', 'cafe', 'Mesa 325', 4.6, 'Avenida de Camilo 325, 4300-096 Porto', '봉핑 지구의 초기 스페셜티 커피숍.', "One of Porto's early specialty coffee shops in Bonfim.", { reviewCount: 600 }),
  place('porto-cafe-5', 'porto', 'cafe', 'Kiwa Cafe', 4.6, 'Porto', '말차와 티, 스페셜티 커피 전문점.', 'Specialist in matcha, tea and specialty coffee.', { reviewCount: 400 }),
  place('porto-korean-1', 'porto', 'korean', 'Ondo Korean Kitchen', 4.3, 'Rua de Sao Vitor 148, 4000-512 Porto', '비빔밥·치킨·떡볶이 등 정통·분식 메뉴.', 'Traditional and bunsik menu — bibimbap, fried chicken, tteokbokki.', { reviewCount: 500 }),
  place('porto-korean-2', 'porto', 'korean', 'Han Table Barbecue', 4.8, 'Rua do Almada 267, 4000-407 Porto', '합리적 가격의 한국식 바베큐.', 'Reasonably priced Korean barbecue.', { reviewCount: 500 }),
  place('porto-korean-3', 'porto', 'korean', 'Suwon.coreana', 4.6, 'R. de Agramonte 353, 4100-128 Porto', '정통 한식 다이닝.', 'Authentic Korean dining.', { reviewCount: 350 }),
  place('porto-korean-4', 'porto', 'korean', 'Bangtan Barbecue', 4.7, 'Praça de Carlos Alberto 105/107, 4050-159 Porto', '한국식 바베큐 전문점.', 'Korean barbecue specialist.', { reviewCount: 400 }),
  place('porto-korean-5', 'porto', 'korean', 'Seoulstice', 4.6, 'Rua De Miguel Bombarda 319, 4050-381 Porto', '한국식 길거리 음식과 분식.', 'Korean street food and bunsik.', { reviewCount: 300 }),

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
