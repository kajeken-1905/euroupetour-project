import { place } from './placeFactory'
import type { Place } from '../types'

export const placesPTExtra: Place[] = [
  // —— lisbon ——
  place('lisbon-fine_dining-1', 'lisbon', 'fine_dining', 'Belcanto', 'Rua Serpa Pinto 10A, 1200-410 Lisbon, Portugal', '셰프 주제 아빌레즈의 미쉐린 2스타 레스토랑. 일·월요일은 쉽니다.', 'Two-Michelin-star restaurant of chef José Avillez; closed Sundays and Mondays.', { michelin: 'star2' }),
  place('lisbon-fine_dining-2', 'lisbon', 'fine_dining', 'Time Out Market stalls', 'Praça D. Luís I 49, 1200-479 Lisbon, Portugal', '히베이라 시장 안의 푸드홀. 리스본 유명 셰프와 식당의 메뉴를 한곳에서 맛볼 수 있습니다.', 'Food hall in the Mercado da Ribeira bringing together stalls from well-known Lisbon chefs and restaurants.', { image: '/places/lisbon-fine_dining-2.jpg' }),
  place('lisbon-fine_dining-3', 'lisbon', 'fine_dining', 'Cervejaria Ramiro', 'Avenida Almirante Reis 1, 1150-007 Lisbon, Portugal', '1950년대부터 이어온 해산물 맥주집. 마늘 새우와 조개 요리가 유명하고 월요일은 쉽니다.', 'Seafood beer hall since the 1950s, famous for garlic prawns and clams; closed Mondays.', { image: '/places/lisbon-fine_dining-3.jpg' }),
  place('lisbon-fine_dining-4', 'lisbon', 'fine_dining', 'A Cevicheria', 'Rua Dom Pedro V 129, 1250-096 Lisbon, Portugal', '프린시프 헤알의 세비체 전문 레스토랑.', 'Ceviche restaurant in Príncipe Real.', { image: '/places/lisbon-fine_dining-4.jpg' }),
  place('lisbon-fine_dining-5', 'lisbon', 'fine_dining', 'Prado', 'Travessa das Pedras Negras 2, 1100-404 Lisbon, Portugal', '농장에서 식탁까지를 내세운 계절 요리 레스토랑. 나눠 먹는 작은 접시를 내고 미쉐린 가이드에 실려 있습니다.', 'Farm-to-table restaurant with seasonal sharing plates; listed in the MICHELIN Guide.'),
  place('lisbon-bakery-1', 'lisbon', 'bakery', 'Pastéis de Belém', 'Rua de Belém 84-92, 1300-085 Lisbon, Portugal', '1837년부터 수도원 비법으로 파스텔 드 벨렝(에그타르트)을 구워 온 원조 가게.', 'The original home of the pastel de Belém custard tart, baking from a monastery recipe since 1837.', { image: '/places/lisbon-bakery-1.jpg' }),
  place('lisbon-bakery-2', 'lisbon', 'bakery', 'Manteigaria', 'Rua do Loreto 2, 1200-108 Lisboa', '시아두 1호점. 20분마다 갓 구운 나타가 나옵니다.', 'The original Chiado shop, with fresh pastéis de nata every twenty minutes.', { image: '/places/lisbon-bakery-2.jpg' }),
  place('lisbon-bakery-3', 'lisbon', 'bakery', 'A Padaria Portuguesa (Chiado)', 'Rua Garrett 23, 1200-203 Lisboa', '로컬 베이커리 체인.', 'Local bakery chain.', { image: '/places/lisbon-bakery-3.jpg' }),
  place('lisbon-bakery-4', 'lisbon', 'bakery', 'Fábrica da Nata', 'Centro Colombo, Avenida Lusíada (Piso 2, Loja 091), 1500-392 Lisbon, Portugal', '콜롬부 쇼핑센터의 파스텔 드 나타 체인 지점. 따뜻한 나타를 냅니다.', 'Colombo shopping-centre branch of a pastel de nata chain, serving them warm.', { image: '/places/lisbon-bakery-4.jpg' }),
  place('lisbon-bakery-5', 'lisbon', 'bakery', 'Pastelaria O Careca', 'R. Duarte Pacheco Pereira 11D, 1400-139 Lisboa', '1954년부터 헤스텔루에서 영업해 온 빵집. 크루아상이 유명해 번호표를 뽑고 기다리며 화요일은 쉽니다.', 'Restelo bakery open since 1954, famous for croissants with a numbered-ticket queue; closed Tuesdays.', { image: '/places/lisbon-bakery-5.jpg' }),
  place('lisbon-cafe-1', 'lisbon', 'cafe', 'Café A Brasileira', 'Rua Garrett 120/122, 1200-273 Lisbon, Portugal', '1905년 문을 연 시아두의 역사적인 카페. 시인 페소아 동상이 앞에 있습니다.', 'Historic Chiado café opened in 1905, with the statue of poet Fernando Pessoa outside.', { image: '/places/lisbon-cafe-1.jpg' }),
  place('lisbon-cafe-3', 'lisbon', 'cafe', 'Fabrica Coffee Roasters', 'Rua das Portas de Santo Antão 136, 1150-269 Lisbon, Portugal', '리스본 스페셜티 커피 로스터리의 원조로 꼽히는 카페. 헤스타우라도르스 근처에 있습니다.', 'Seen as Lisbon\'s original specialty coffee roaster, near Restauradores.', { image: '/places/lisbon-cafe-3.jpg' }),
  place('lisbon-cafe-4', 'lisbon', 'cafe', 'Dear Breakfast', 'Rua das Gaivotas 17, 1200-336 Lisbon, Portugal', '2017년 문을 연 옛 창고 건물의 아침 식사 전문점. 에그 베네딕트 등 달걀 요리가 중심입니다.', 'Breakfast spot opened in 2017 in a former palace warehouse, centred on eggs Benedict and other egg dishes.'),
  place('lisbon-cafe-5', 'lisbon', 'cafe', 'Buna Specialty Coffee', 'Rua do Poço dos Negros 168, 1200-267 Lisboa', '포르투갈에서 처음 니트로 콜드브루를 낸 스페셜티 커피숍. 28번 트램 옆 모퉁이에 있습니다.', 'Specialty coffee shop that was first in Portugal to serve nitro cold brew, on a corner by the 28 tram.'),
  place('lisbon-korean-1', 'lisbon', 'korean', 'Pabul', 'Rua do Crucifixo 30, Lisboa', '바이샤의 한식당. 채식 메뉴도 있습니다.', 'Korean restaurant in the Baixa, with vegetarian options.'),
  place('lisbon-korean-2', 'lisbon', 'korean', 'Busan Table BBQ', 'Fontes Pereira de Melo 3E, 1050-115 Lisboa', '테이블 숯불에 직접 구워 먹는 한국식 바비큐. 와규가 대표입니다.', 'Korean barbecue with charcoal grills at the table; wagyu is the highlight.'),
  place('lisbon-korean-3', 'lisbon', 'korean', 'King Kimchi', 'Rua Latino Coelho 10A, 1050-136 Lisboa', '숯불 테이블 바비큐 한식당. 불고기와 삼겹살을 냅니다.', 'Korean charcoal table-barbecue restaurant with bulgogi and samgyeopsal.'),
  place('lisbon-korean-4', 'lisbon', 'korean', 'Soju Pocha', 'R. da Rosa 99, 1200-043 Lisboa', '바이후 알투의 한국식 포차. 늦게까지 안주와 술을 냅니다.', 'Korean pocha in Bairro Alto serving late-night food and drinks.'),

  // —— porto ——
  place('porto-fine_dining-1', 'porto', 'fine_dining', 'dop', 'Largo de São Domingos 16, 4050-545 Porto', '리베이라 근처의 미쉐린 1스타 레스토랑. 일·월요일은 쉽니다.', 'One-Michelin-star restaurant near the Ribeira; closed Sundays and Mondays.', { michelin: 'star1' }),
  place('porto-fine_dining-2', 'porto', 'fine_dining', 'Dona Francesinha Porto Coliseu', 'R. de Passos Manuel 245, 4000-385 Porto', '프란세지냐를 내는 포르투의 식당.', 'Porto restaurant serving francesinha.'),
  place('porto-fine_dining-3', 'porto', 'fine_dining', 'Café Santiago', 'Rua Passos Manuel 226, 4000-382 Porto', '1959년부터 프란세지냐를 내는 식당.', 'Restaurant serving francesinha since 1959.'),
  place('porto-fine_dining-4', 'porto', 'fine_dining', 'Bufete Fase', 'R. de Santa Catarina 1147, 4000-457 Porto', '프란세지냐를 내는 작은 식당.', 'Small restaurant serving francesinha.'),
  place('porto-fine_dining-5', 'porto', 'fine_dining', 'Cantina 32', 'R. das Flores 32, 4050-262 Porto', '트렌디한 지중해·포르투갈 퓨전 다이닝.', 'Trendy Mediterranean-Portuguese fusion dining.', { image: '/places/porto-fine_dining-5.jpg' }),
  place('porto-bakery-1', 'porto', 'bakery', 'Manteigaria', 'Rua de Alexandre Braga 24, 4000-049 Porto, Portugal', '파스텔 드 나타를 굽는 포르투의 빵집.', 'Porto bakery baking pastéis de nata.'),
  place('porto-bakery-2', 'porto', 'bakery', 'Castro - Atelier de Pastéis de Nata', 'Rua de Mouzinho da Silveira 61, 4050-420 Porto', '따뜻하게 갓 구운 파스텔 드 나타 전문점.', 'Specialist in warm, freshly baked pastéis de nata.'),
  place('porto-bakery-3', 'porto', 'bakery', 'Confeitaria do Bolhão', 'Rua Formosa 339, 4000-252 Porto', '1919년부터 이어온 역사적 제과점.', 'Historic pastry shop since 1919.', { image: '/places/porto-bakery-3.jpg' }),
  place('porto-bakery-4', 'porto', 'bakery', 'My Green Pastry', 'Praça da República 195, 4050-498 Porto', '비건·글루텐프리 페이스트리 전문점.', 'Vegan and gluten-free pastry specialist.'),
  place('porto-cafe-1', 'porto', 'cafe', 'Combi Coffee', 'Rua do Morgado de Mateus nº29, 4000-334 Porto, Portugal', '봉핑 지구의 스페셜티 커피숍.', 'Specialty coffee shop in the Bonfim neighbourhood.', { image: '/places/porto-cafe-1.jpg' }),
  place('porto-cafe-3', 'porto', 'cafe', "C'Alma Specialty Coffee Room", 'R. de Passos Manuel 44, 4000-381 Porto', '역사적 건물 안 스페셜티 커피룸.', 'Specialty coffee room inside a historic building.'),
  place('porto-cafe-4', 'porto', 'cafe', 'Mesa 325', 'Avenida de Camilo 325, 4300-096 Porto', '봉핑 지구의 초기 스페셜티 커피숍.', "One of Porto's early specialty coffee shops in Bonfim."),
  place('porto-cafe-5', 'porto', 'cafe', 'Kiwa Cafe', 'Rua de Anselmo Braamcamp, 4000-224 Porto, Portugal', '말차와 티, 스페셜티 커피 전문점.', 'Specialist in matcha, tea and specialty coffee.'),
  place('porto-korean-1', 'porto', 'korean', 'Ondo Korean Kitchen', 'Rua de Sao Vitor 148, 4000-512 Porto', '비빔밥·치킨·떡볶이 등 정통·분식 메뉴.', 'Traditional and bunsik menu — bibimbap, fried chicken, tteokbokki.'),
  place('porto-korean-2', 'porto', 'korean', 'Han Table Barbecue', 'Rua do Almada 267, 4000-407 Porto', '합리적 가격의 한국식 바베큐.', 'Reasonably priced Korean barbecue.'),
  place('porto-korean-5', 'porto', 'korean', 'Seoulstice', 'Rua De Miguel Bombarda 319, 4050-381 Porto', '한국식 길거리 음식과 분식.', 'Korean street food and bunsik.'),

  // —— sintra ——
  place('sintra-fine_dining-1', 'sintra', 'fine_dining', 'Taberna Criativa', 'Av. Heliodoro Salgado 26, 2710-335 Sintra', '제철 재료의 촛불 레스토랑.', 'Candle-lit restaurant with seasonal dishes.'),
  place('sintra-fine_dining-2', 'sintra', 'fine_dining', 'Incomum by Luís Santos', 'Rua Dr. Alfredo da Costa 22, 2710-523 Sintra', '셰프 루이스 산투스의 캐주얼 레스토랑. 해산물 창작 요리를 냅니다.', 'Casual restaurant of chef Luís Santos serving creative seafood dishes.'),
  place('sintra-fine_dining-3', 'sintra', 'fine_dining', 'Dom Pipas', 'R. João de Deus 62, 2710-579 Sintra', '신트라역 근처의 가족 운영 포르투갈 식당. 바칼랴우 콩 나타스가 있습니다.', 'Family-run Portuguese restaurant near Sintra station serving bacalhau com natas.'),
  place('sintra-fine_dining-4', 'sintra', 'fine_dining', 'Tacho Real', 'Rua da Ferraria 4, 2710-555 Sintra', '17세기 건물의 구시가 식당. 대구 요리와 스테이크가 있습니다.', 'Old Town restaurant in a 17th-century building with cod dishes and steaks.', { image: '/places/sintra-fine_dining-4.jpg' }),
  place('sintra-bakery-1', 'sintra', 'bakery', 'Casa Piriquita', 'Av. D. Francisco Almeida 31, 2710-562 Sintra, Portugal', '1862년 문을 연 신트라의 제과점. 트라베세이루가 있습니다.', 'Sintra pastry shop founded in 1862, with travesseiros.', { image: '/places/sintra-bakery-1.jpg' }),
  place('sintra-bakery-2', 'sintra', 'bakery', 'Fábrica das Verdadeiras Queijadas da Sapa', 'Volta do Duche 12, 2710-631 Sintra', '1756년부터 손으로 케이자다를 만들어온 신트라의 유서 깊은 제과점 겸 티룸.', 'Historic Sintra bakery and tea room hand-making queijadas since 1756.'),
  place('sintra-bakery-3', 'sintra', 'bakery', 'Casa do Preto', 'Estrada Chão de Meninos 40, 2710-194 Sintra', '1931년 문을 연 제과점. 트라베세이루와 케이자다가 있습니다.', 'Pastry shop open since 1931 with travesseiros and queijadas.'),
  place('sintra-cafe-1', 'sintra', 'cafe', 'Fábrica da Nata', 'Praça da República 6, 2710-616 Sintra', '포르투갈의 파스텔 드 나타 전통을 알리는 신트라의 카페', 'Sintra cafe dedicated to sharing Portugal\'s pastel de nata heritage'),
  place('sintra-cafe-2', 'sintra', 'cafe', 'Café Saudade', 'Av. Dr. Miguel Bombarda 6, 2710-590 Sintra', '1888년 케이자다 공장 건물을 고친 카페. 브런치와 차·커피가 있습니다.', 'Café in a restored 1888 queijada factory, serving brunch, tea and coffee.', { image: '/places/sintra-cafe-2.jpg' }),
  place('sintra-cafe-3', 'sintra', 'cafe', 'Garagem Café', 'Alameda Combatentes da Grande Guerra 12 A, 2710-426 Sintra', '신트라 기차역 인근, 성과 마을 전망을 즐길 수 있는 아늑한 에스프레소 바 겸 브런치 카페.', 'Cozy espresso bar and brunch café near Sintra train station with views of the castle and town.'),

  // —— faro ——
  place('faro-fine_dining-1', 'faro', 'fine_dining', 'Ria Formosa', 'Praça D. Francisco Gomes 2, 4º Andar, 8000-168 Faro', '호텔 파루 4층의 레스토랑. 마리나와 석호가 보이는 테라스에서 지중해·국제 요리를 냅니다.', 'Restaurant on the fourth floor of Hotel Faro, with a terrace over the marina and lagoon and Mediterranean dishes.'),
  place('faro-fine_dining-2', 'faro', 'fine_dining', 'Restaurante XIC', 'Rua Doutor Cândido Guerreiro 44-A, 8000-319 Faro', '시장 근처의 포르투갈 가정식 식당. 프란세지냐가 대표이고 화요일은 쉽니다.', 'Portuguese home-cooking restaurant near the market, best known for its francesinha; closed Tuesdays.'),
  place('faro-fine_dining-3', 'faro', 'fine_dining', 'A Tasca do João', 'Largo do Pé da Cruz 27, 8000-154 Faro', '2015년 구시가 조용한 골목에 문을 연 페티스쿠 식당. 참치 조림과 훈제 대구가 인기입니다.', 'Petiscos tasca opened in 2015 on a quiet old-town square; braised tuna and smoked cod are favourites.'),
  place('faro-bakery-2', 'faro', 'bakery', 'Demo Urban Bakery', 'Rua Conselheiro Bivar 6, 8000-255 Faro', '저온 발효 빵과 프랑스식 페이스트리를 내는 구시가 빵집. 비건 메뉴도 있습니다.', 'Central bakery with slow-fermented bread and French-style pastries, plus vegan options.'),
  place('faro-cafe-2', 'faro', 'cafe', 'Chelsea Coffee & Brunch', 'Rua Dom Francisco Gomes 9, 8000-283 Faro', '구시가의 브런치 카페. 샥슈카와 비건 베이글, 스무디 볼을 내고 매일 엽니다.', 'Old-town brunch café with shakshuka, vegan bagels and smoothie bowls; open daily.'),

  // —— coimbra ——
  place('coimbra-fine_dining-2', 'coimbra', 'fine_dining', 'Zé Manel dos Ossos', 'Beco do Forno 12, 3000-192 Coimbra', '테이블 예닐곱 개의 작은 타스카. 돼지갈비 요리가 대표이고 예약을 받지 않으며 일요일은 쉽니다.', 'Tiny tasca of six or seven tables famous for pork ribs; no reservations, closed Sundays.'),
  place('coimbra-fine_dining-3', 'coimbra', 'fine_dining', 'Dux Taberna Urbana', 'R. Dr. Manuel Rodrigues 39, 3000-229 Coimbra', '바이샤의 타베르나. 다양한 페티스쿠와 오늘의 메뉴로 인기라 점심엔 예약을 권합니다.', 'Baixa tavern popular for its petiscos and dish of the day; book for lunch.'),
  place('coimbra-korean-1', 'coimbra', 'korean', 'Gangnam Korean BBQ', 'Praça do Comércio 12, Coimbra', '테이블 그릴에서 직접 구워 먹는 코임브라의 한국식 바비큐.', 'Korean barbecue in Coimbra where you grill at the table.', { image: '/places/coimbra-korean-1.jpg' }),
  place('coimbra-bakery-2', 'coimbra', 'bakery', 'Pastelaria Briosa', 'R. Ferreira Borges 211, 3000-180 Coimbra', '1955년 문을 연 바이샤의 제과점. 파스텔 드 텐투갈과 파스텔 드 산타 클라라가 대표입니다.', 'Baixa pastry shop opened in 1955, known for pastel de Tentúgal and pastel de Santa Clara.'),
  place('coimbra-cafe-1', 'coimbra', 'cafe', 'Café Santa Cruz', 'Praça 8 de Maio 4, 6, 7, 3000-300 Coimbra, Portugal', '1923년부터 옛 산타 크루즈 교회 건물에서 영업해 온 역사적인 카페. 파두 공연이 열립니다.', 'Historic café open since 1923 in the former Santa Cruz church building, with fado nights.', { image: '/places/coimbra-cafe-1.jpg' }),
  place('coimbra-cafe-2', 'coimbra', 'cafe', 'Nau Coffee - Specialty Coffee', 'Rua Borges Carneiro 64, 3000-079 Coimbra', '2024년 초 문을 연 스페셜티 커피숍. 토스트와 직접 만든 케이크를 냅니다.', 'Specialty coffee shop opened in early 2024, with toasts and homemade cakes.'),

  // —— funchal ——
  place('funchal-fine_dining-1', 'funchal', 'fine_dining', 'Il Gallo D\'Oro', 'Estrada Monumental 147, São Martinho, 9004-532 Funchal', '마데이라의 미쉐린 2스타 레스토랑. 화~토 저녁에 엽니다.', 'Two-Michelin-star restaurant in Madeira; Tuesday to Saturday evenings.', { michelin: 'star2', image: '/places/funchal-fine_dining-1.jpg' }),
  place('funchal-fine_dining-2', 'funchal', 'fine_dining', 'Restaurante Dos Combatentes', 'Rua Ivens 1-2, 9000-046 Funchal', '가족이 운영하는 푼샬 중심가의 전통 식당. 갈치와 에스페타다를 내고 일요일은 쉽니다.', 'Family-run traditional restaurant in central Funchal serving scabbardfish and espetada; closed Sundays.', { image: '/places/funchal-fine_dining-2.jpg' }),
  place('funchal-fine_dining-3', 'funchal', 'fine_dining', 'Marisqueira O Barqueiro', 'Rua Ponta da Cruz - Centro Comercial CentroMar, 9000-103 Funchal', '카보 지랑 쪽 노을이 보이는 해산물 식당. 모둠 해산물과 마늘 버터 삿갓조개가 인기입니다.', 'Seafood restaurant with sunset views towards Cabo Girão; mixed seafood platters and limpets in garlic butter are favourites.'),
  place('funchal-bakery-1', 'funchal', 'bakery', 'Padaria Pastelaria Mariazinha', 'R. Conde Carvalhal 125b, 9060-399 Funchal, Portugal', '1955년 마리아지냐의 이름을 딴 푼샬의 빵집. 파스텔 드 나타와 케이자다가 인기이고 늦게까지 엽니다.', 'Funchal bakery named after the baker Mariazinha (1955), popular for pastéis de nata and queijadas, open late.'),
  place('funchal-bakery-2', 'funchal', 'bakery', 'Fábrica Santo António', 'Travessa do Forno 27-29, 9000-079 Funchal', '1893년 문을 연 마데이라 최초의 비스킷 공장 겸 가게. 사탕수수 꿀 케이크(볼루 드 멜)가 대표입니다.', 'Madeira\'s first biscuit factory and shop, founded in 1893, famous for bolo de mel sugarcane-honey cake.'),
  place('funchal-cafe-1', 'funchal', 'cafe', 'Maia Coffee Shop', 'Zarco N°25, São Martinho, 9000-023 Funchal, Portugal', '모퉁이의 작은 스페셜티 커피숍. 콜드브루와 말차가 인기이고 일요일은 쉽니다.', 'Small corner specialty coffee shop; cold brew and matcha are popular; closed Sundays.'),
  place('funchal-cafe-2', 'funchal', 'cafe', 'Legs Eleven Coffee Co.', 'Rua das Pretas 86, 9000-049 Funchal', '구시가의 아늑한 스페셜티 커피숍.', 'Cosy specialty coffee shop in the centre.'),

  // —— lagos ——
  place('lagos-fine_dining-1', 'lagos', 'fine_dining', 'Don Sebastião', 'Rua 25 de Abril 20-22, 8600 Lagos', '1979년부터 구시가에서 영업해 온 포르투갈 레스토랑. 테이블에서 생선을 골라 요리해 주고 미쉐린 가이드에 실려 있습니다.', 'Portuguese restaurant in the old town since 1979, where fresh fish is shown at the table; listed in the MICHELIN Guide.'),
  place('lagos-fine_dining-2', 'lagos', 'fine_dining', 'Casinha do Petisco', 'R. da Oliveira 51, 8600-700 Lagos', '해산물 카타플라나로 유명한 작은 식당. 현금만 받고 예약을 권합니다.', 'Small restaurant famous for seafood cataplana; cash only, booking advised.'),
  place('lagos-fine_dining-3', 'lagos', 'fine_dining', 'Adega Típica A Forja', 'R. dos Ferreiros 17, 8600-330 Lagos', '\'파란 문\'으로 불리는 가족 운영 식당. 생선을 골라 구워 먹고 조개 카타플라나가 인기입니다.', 'Family-run \'blue door\' restaurant where you pick your fish; the clam cataplana is popular.'),
  place('lagos-bakery-1', 'lagos', 'bakery', 'Pastelaria Algarve', 'Rua da Porta de Portugal 89, 8600-701 Lagos, Portugal', '큼직한 파스텔 드 나타로 알려진 라고스의 전통 제과점. 현금만 받고 일요일은 쉽니다.', 'Traditional Lagos pastry shop known for big pastéis de nata; cash only, closed Sundays.'),
  place('lagos-bakery-2', 'lagos', 'bakery', 'Padaria Central', 'Rua 1º de Maio 27-29, 8600-757 Lagos', '1926년 문을 연 것으로 알려진 구시가 빵집. 빵과 나타, 아몬드 과자를 내고 일요일은 쉽니다.', 'Old-town bakery said to date from 1926, with bread, pastéis de nata and almond biscuits; closed Sundays.'),
  place('lagos-cafe-1', 'lagos', 'cafe', 'The Studio: Coffee Roaster & Brunch Cafe', 'Rua Soeiro da Costa 20, 8600-624 Lagos, Portugal', '직접 원두를 볶는 브런치 카페. 아보카도 토스트와 비건 메뉴가 있고 원격 근무자가 많이 찾습니다.', 'Brunch café roasting its own coffee, with avocado toast and vegan options, popular with remote workers.'),
  place('lagos-cafe-2', 'lagos', 'cafe', 'Coffee & Waves', 'Travessa do Cotovelo 10, 8600-631 Lagos', '서핑 테마의 스페셜티 커피숍. 비건 바나나 브레드와 토스트가 있고 일요일은 쉽니다.', 'Surf-themed specialty coffee shop with vegan banana bread and toasts; closed Sundays.'),

  // —— cascais ——
  place('cascais-fine_dining-1', 'cascais', 'fine_dining', 'Fortaleza do Guincho', 'Estrada do Guincho, 2750-642 Cascais', '기뉴 해안 17세기 요새 호텔의 미쉐린 1스타 레스토랑.', 'Michelin one-star restaurant in a 17th-century fortress hotel on the Guincho coast.', { michelin: 'star1', image: '/places/cascais-fine_dining-1.jpg' }),
  place('cascais-fine_dining-2', 'cascais', 'fine_dining', 'Mar do Inferno', 'Av. Rei Humberto II de Itália, 2750-800 Cascais', '보카 두 인페르누 바위 옆의 가족 운영 해산물 식당. 대서양이 보이는 테라스가 있고 수요일은 쉽니다.', 'Family-run seafood restaurant by the Boca do Inferno cliffs, with an Atlantic-view terrace; closed Wednesdays.'),
  place('cascais-bakery-2', 'cascais', 'bakery', 'Pastelaria A Bijou de Cascais', 'Rua do Regimento 19 de Infantaria 55, 2750-474 Cascais', '카스카이스의 전통 제과점. 지역 과자 아레이아스와 노즈스 드 카스카이스, 파스텔 드 나타를 냅니다.', 'Classic Cascais pastry shop with local areias and nozes de Cascais, plus pastéis de nata.'),
  place('cascais-cafe-1', 'cascais', 'cafe', 'Euphoria Specialty', 'Rua Afonso Sanches 12, 2750-282 Cascais, Portugal', '바닷가 근처의 브런치 카페. 스무디 볼과 토스트, 비건 메뉴가 있습니다.', 'Brunch café near the waterfront with smoothie bowls, toasts and vegan options.'),
  place('cascais-cafe-2', 'cascais', 'cafe', 'Kafeine Cascais', 'Marina de Cascais, Loja 42, 2750-800 Cascais', '카스카이스 마리나의 스페셜티 커피·브런치 카페. 저녁엔 칵테일과 스테이크도 냅니다.', 'Specialty coffee and brunch café at Cascais Marina, with cocktails and steaks in the evening.'),

  // —— aveiro ——
  place('aveiro-fine_dining-1', 'aveiro', 'fine_dining', 'Salpoente', 'Antigo Cais de S. Roque 83, 3800-256 Aveiro', '옛 소금 창고 두 채를 개조한 레스토랑. 셰프 두아르트 에이라가 석호 식재료로 요리하고 미쉐린 가이드에 실려 있습니다.', 'Restaurant in two former salt warehouses where chef Duarte Eira cooks with lagoon produce; listed in the MICHELIN Guide.'),
  place('aveiro-fine_dining-2', 'aveiro', 'fine_dining', 'Restaurante O Bairro', 'Largo da Praça do Peixe 24, 3800-243 Aveiro', '생선 시장 광장 옆의 모던 포르투갈 레스토랑. 해산물 밥과 리소토가 대표입니다.', 'Modern Portuguese restaurant by the old fish-market square, known for seafood rice and risottos.'),
  place('aveiro-bakery-2', 'aveiro', 'bakery', 'Confeitaria Peixinho', 'R. de Coimbra 9, 3810-086 Aveiro', '1856년부터 이어온 아베이루에서 가장 오래된 제과점 중 하나. 명물 오부스 몰레스로 유명합니다.', 'One of Aveiro\'s oldest pastry shops, dating from 1856 and famous for ovos moles.', { image: '/places/aveiro-bakery-2.jpg' }),
  place('aveiro-cafe-2', 'aveiro', 'cafe', 'Porta do Café', 'Rua de Luís Cipriano 23, 3810-128 Aveiro', '주인이 직접 내리는 스페셜티 커피숍. 귀리 우유 갈랑과 파스텔 드 나타가 있고 일요일은 쉽니다.', 'Specialty coffee shop where the owner is the barista; oat-milk galão and pastéis de nata; closed Sundays.'),

  // —— fatima ——
  place('fatima-fine_dining-1', 'fatima', 'fine_dining', 'Tia Alice', 'Avenida Irmã Lúcia de Jesus 152, 2495-557 Fátima', '성지에서 2km 떨어진 옛집의 전통 포르투갈 레스토랑. 바칼라우와 새끼염소 구이가 대표이고 미쉐린 가이드에 실려 있습니다.', 'Traditional Portuguese restaurant in an old house 2 km from the shrine, known for bacalhau and roast kid; listed in the MICHELIN Guide.'),
  place('fatima-fine_dining-2', 'fatima', 'fine_dining', 'A Tasquinha', 'Rua dos Monfortinos 18, 2495-446 Fátima', '푸짐한 포르투갈 가정식을 내는 오래된 식당.', 'Long-standing restaurant serving generous Portuguese home cooking.'),
  place('fatima-cafe-1', 'fatima', 'cafe', 'Apollo Caffé', 'Rua Jacinta Marto 10, 2495-450 Fátima, Portugal', '파티마 성지 근처의 카페 겸 레스토랑. 포르투갈·국제 요리와 젤라토를 냅니다.', 'Café-restaurant near the Fátima shrine with Portuguese and international dishes and gelato.'),

  // —— evora ——
  place('evora-fine_dining-1', 'evora', 'fine_dining', 'Origens Restaurant', 'Rua de Burgos 10, 7000-863 Évora', '구시가 골목의 비스트로. 알렌테주 전통을 현대적으로 풀고 미쉐린 가이드에 실려 있습니다.', 'Bistro on an old-town lane giving Alentejo traditions a modern take; listed in the MICHELIN Guide.'),
  place('evora-fine_dining-2', 'evora', 'fine_dining', 'Restaurante Fialho', 'Travessa das Mascarenhas 14, 7000-557 Évora', '1945년부터 3대째 이어온 알렌테주 요리 식당. 메추라기·자고새 요리와 수도원 디저트가 있고 월요일은 쉽니다.', 'Alentejo restaurant run by the same family since 1945, with partridge dishes and convent desserts; closed Mondays.'),
  place('evora-fine_dining-3', 'evora', 'fine_dining', 'Botequim da Mouraria', 'Rua da Mouraria 16A, 7000-585 Évora', '부부가 운영하는 9석 남짓 카운터 식당. 알렌테주 요리와 와인이 좋고 예약을 받지 않습니다.', 'Couple-run counter restaurant of about nine seats with Alentejo food and good wine; no reservations.'),
  place('evora-fine_dining-4', 'evora', 'fine_dining', 'Dom Joaquim', 'Rua dos Penedos 6, 7000-531 Évora, Portugal', '알렌테주 전통 요리에 현대적 터치를 더한 레스토랑. 수녀원 레시피 푸딩이 있고 미쉐린 가이드에 실려 있습니다.', 'Alentejo cooking with a modern touch and a convent-recipe pudding; listed in the MICHELIN Guide.'),
  place('evora-bakery-1', 'evora', 'bakery', 'Pastelaria Conventual Pão de Rala', 'Rua do Cicioso 47, 7000-658 Évora, Portugal', '에보라의 수도원 과자 전문점. 이름이 된 파웅 드 할라를 내고 좌석은 몇 개뿐입니다.', 'Évora shop for convent sweets, including its namesake pão de rala; only a few tables.'),
  place('evora-bakery-2', 'evora', 'bakery', 'The Bakery Lounge', 'R. de Burgos 6, 7000-863 Évora', '토스트·베이글·볼을 내는 아침·점심 카페. 현금만 받는다는 후기가 있습니다.', 'Breakfast and lunch café with toasts, bagels and bowls; reviews say cash only.'),
  place('evora-cafe-1', 'evora', 'cafe', 'Do Largo', 'Largo de Álvaro Velho 5, 7000-799 Évora, Portugal', '아늑한 지중해풍 카페. 비건·글루텐 프리 메뉴가 있고 월요일은 쉽니다.', 'Cosy Mediterranean-style café with vegan and gluten-free options; closed Mondays.'),

  // —— obidos ——
  place('obidos-fine_dining-2', 'obidos', 'fine_dining', 'A Nova Casa de Ramiro', 'Rua Porta do Vale, 2510-046 Óbidos', '성벽 근처의 포르투갈 전통 식당.', 'Traditional Portuguese restaurant near the town walls.'),
  place('obidos-bakery-1', 'obidos', 'bakery', 'Pastelaria Dom Afonso', 'R. Direita 113, 2510-057 Óbidos, Portugal', '커피와 케이크가 있는 오비두스의 카페.', 'Óbidos café with coffee and cakes.'),

  // —— braga ——
  place('braga-fine_dining-2', 'braga', 'fine_dining', 'Cozinha da Sé', 'Rua D. Frei Caetano Brandão 129, 4700-031 Braga', '대성당 근처의 미뉴 지방 요리 레스토랑. 새끼염소 구이가 대표이고 미쉐린 가이드에 실려 왔습니다.', 'Minho-cooking restaurant near the cathedral, known for roast kid and listed in the MICHELIN Guide.'),
  place('braga-fine_dining-3', 'braga', 'fine_dining', 'Restaurante Cruz Sobral', 'Campo das Hortas 7-8, 4700-210 Braga', '1926년부터 가족이 운영하는 장작 화덕 식당. 바칼라우 아 브라가와 오리밥이 대표입니다.', 'Family-run wood-oven restaurant since 1926, known for bacalhau à Braga and duck rice.'),
  place('braga-fine_dining-4', 'braga', 'fine_dining', 'Félix Taberna', 'Largo da Praça Velha 18, 4700-435 Braga', '포르타 노바 아치 옆의 전통 타베르나. 바칼라우와 오리밥을 냅니다.', 'Traditional tavern by the Porta Nova arch, serving bacalhau and duck rice.'),

  place('braga-bakery-1', 'braga', 'bakery', 'Pastelaria Ferreira Capa', 'R. dos Capelistas 45, 4700-307 Braga, Portugal', '100년 가까운 역사의 빵집 겸 레스토랑. 전통 페이스트리와 브런치를 냅니다.', 'Bakery and restaurant of nearly 100 years, with traditional pastries and brunch.'),
  place('braga-bakery-2', 'braga', 'bakery', 'Frigideiras do Cantinho', 'Largo São João do Souto 1, 4700-326 Braga', '1796년부터 같은 자리에서 영업해 온 브라가에서 가장 오래된 가게. 고기를 넣은 페이스트리 프리지데이라가 대표입니다.', 'Braga\'s oldest business, trading on the same spot since 1796, famous for the meat-filled frigideira pastry.'),
  place('braga-cafe-1', 'braga', 'cafe', 'Nordico Coffee Shop', 'Rua do Anjo 90A, 4700-305 Braga, Portugal', '브라가 스페셜티 커피의 선구자로 꼽히는 북유럽풍 카페. 뒷마당 테라스와 브런치가 있습니다.', 'Scandinavian-style café seen as Braga\'s specialty-coffee pioneer, with a back courtyard and brunch.'),
  place('braga-cafe-2', 'braga', 'cafe', 'Café A Brasileira', 'Largo do Barão de São Martinho, 4700-306 Braga', '1907년 3월 문을 연 브라가의 역사적인 카페. 독재 시절 반정부 인사들의 모임 장소였습니다.', 'Historic café opened in March 1907, once a meeting place of the opposition to the Salazar regime.', { image: '/places/braga-cafe-2.jpg' }),

  // —— nazare ——
  place('nazare-fine_dining-1', 'nazare', 'fine_dining', 'Pangeia Restaurante', 'Rua Abel da Silva 50, 2450-060 Nazaré', '대서양이 보이는 나자레의 레스토랑.', 'Nazaré restaurant with Atlantic views.'),
  place('nazare-fine_dining-2', 'nazare', 'fine_dining', 'Marisqueira O Casalinho', 'Praça Sousa Oliveira 7, 2450-159 Nazaré', '랍스터 해산물 밥을 내는 나자레의 해산물 식당.', 'Nazaré seafood restaurant serving seafood rice with lobster.'),
  place('nazare-bakery-1', 'nazare', 'bakery', 'Pastelaria Arcádia', 'R. Mouzinho de Albuquerque 25, 2450-256 Nazaré, Portugal', '페이스트리를 굽는 나자레의 제과점.', 'Nazaré pastry shop.'),
  place('nazare-cafe-1', 'nazare', 'cafe', 'Village Brunch & Coffee', 'Praça Sousa Oliveira nº25, 2450-159 Nazaré, Portugal', '모던한 실내의 나자레 브런치 커피숍.', 'Nazaré brunch coffee shop with a modern interior.'),

  // —— guimaraes ——
  place('guimaraes-fine_dining-1', 'guimaraes', 'fine_dining', 'A Cozinha por António Loureiro', 'Largo do Serralho 4, 4800-472 Guimarães', '셰프 안토니우 로레이루의 미쉐린 1스타 레스토랑.', 'Chef António Loureiro’s Michelin one-star restaurant.', { michelin: 'star1' }),
  place('guimaraes-fine_dining-2', 'guimaraes', 'fine_dining', 'Taberna Trovador', 'Largo do Trovador 10, 4810-451 Guimarães', '구시가 중심의 소박한 타스카. 바칼라우·로중이스·문어와 비뉴 베르드를 냅니다.', 'Rustic tasca in the centre serving bacalhau, rojões, octopus and vinho verde.'),
  place('guimaraes-fine_dining-3', 'guimaraes', 'fine_dining', 'Le Babachris', 'Largo Condessa do Juncal 19-21, 4800-159 Guimarães', '프랑스인 셰프가 운영하는 비스트로. 미쉐린 가이드에 실려 있습니다.', 'Bistro run by a French chef, listed in the MICHELIN Guide.'),
  place('guimaraes-fine_dining-4', 'guimaraes', 'fine_dining', 'Cor de Tangerina', 'Largo Martins Sarmento 89, 4800-432 Guimarães', '복원한 옛집의 채식 협동조합 레스토랑. 카페와 공정무역 가게를 함께 운영합니다.', 'Vegetarian cooperative restaurant in a restored old house, with a café and fair-trade shop.'),

  place('guimaraes-bakery-1', 'guimaraes', 'bakery', 'Pastelaria Clarinha', 'Rua de Santa Maria 44, 4800-443 Guimarães, Portugal', '1953년 토우랄 광장에서 시작해 2015년부터 산타 마리아 거리로 옮긴 제과점. 토르타 데 기마랑이스가 대표입니다.', 'Pastry shop founded on Largo do Toural in 1953, on Rua de Santa Maria since 2015, known for tortas de Guimarães.'),
  place('guimaraes-bakery-2', 'guimaraes', 'bakery', 'Casa Costinhas', 'Rua de Santa Maria 68, 4800-675 Guimarães', '산타 클라라 수녀원 레시피를 이어온 전통 과자점. 토르타 데 기마랑이스가 대표이고 주말은 쉽니다.', 'Traditional sweet shop keeping Santa Clara convent recipes, known for tortas de Guimarães; closed weekends.'),
]