import { place } from './placeFactory'
import type { Place } from '../types'

export const placesSKExtra: Place[] = [
  // —— bratislava ——
  place('bratislava-fine_dining-1', 'bratislava', 'fine_dining', 'Albrecht', 4.7, 'Mudroňova 4237/82, 811 03 Bratislava, Slovakia', '호텔 알브레히트 내에 위치한 브라티슬라바의 파인다이닝, 계절 메뉴를 선보임', 'Fine-dining restaurant inside Hotel Albrecht in Bratislava, serving a seasonal menu', { reviewCount: 278 }),
  place('bratislava-fine_dining-2', 'bratislava', 'fine_dining', 'UFO Restaurant', 4.4, 'Most SNP, 851 01 Bratislava, Slovakia', 'SNP 다리 전망대에 위치한 브라티슬라바의 명물 레스토랑, 도시 전경을 감상할 수 있음', 'Bratislava landmark restaurant atop the UFO observation deck on the SNP Bridge, with panoramic city views', { reviewCount: 5371 }),
  place('bratislava-fine_dining-4', 'bratislava', 'fine_dining', 'Slovak Pub', 4.2, 'Obchodná 62, 811 06 Bratislava, Slovakia', '옵호드나 거리의 전통 슬로바키아 요리 전문 가스트로펍, 마늘 수프로 유명', 'Traditional Slovak gastropub on Obchodná street known for its garlic soup', { reviewCount: 15903 }),
  place('bratislava-bakery-1', 'bratislava', 'bakery', 'Fleur bakery', 4.8, 'Štúrova 14/8, 811 02 Bratislava, Slovakia', '슈투로바 거리의 인기 베이커리, 신선한 빵과 페이스트리로 알려짐', 'Popular bakery on Štúrova street known for fresh bread and pastries', { reviewCount: 574 }),
  place('bratislava-bakery-2', 'bratislava', 'bakery', 'KRUH remeselná pekáreň', 4.7, 'Vajnorská 21, 831 03 Bratislava, Slovakia', '바이노르스카 거리의 수제 베이커리, 사워도우 빵으로 유명', 'Artisan bakery on Vajnorská street known for its sourdough bread', { reviewCount: 1273 }),
  place('bratislava-bakery-3', 'bratislava', 'bakery', 'Pasteleria', 4.8, 'Panská 246, 811 01 Bratislava, Slovakia', '구시가지 판스카 거리의 디저트 전문점, 케이크와 페이스트리로 인기', 'Dessert specialty shop on Panská street in the Old Town, popular for its cakes and pastries', { reviewCount: 666 }),
  place('bratislava-bakery-4', 'bratislava', 'bakery', 'Bratislava Chimney Cake', 4.6, 'Laurinská 2, 811 01 Bratislava, Slovakia', '라우린스카 거리의 트르델니크(굴뚝빵) 전문점', "Trdelník (chimney cake) specialty shop on Laurinská street in the Old Town", { reviewCount: 168 }),
  place('bratislava-cafe-1', 'bratislava', 'cafe', 'Kauka', 4.8, 'Veterná 642/8, 811 03 Bratislava, Slovakia', '베테르나 거리의 인기 커피숍', "Popular coffee shop on Veterná street in Bratislava's Old Town", { reviewCount: 394 }),
  place('bratislava-cafe-2', 'bratislava', 'cafe', 'DRAK&FINCH Winebar Coffeeshop', 4.7, 'Mikulášska 6652/1b, 811 01 Bratislava, Slovakia', '미쿨라시스카 거리의 와인바 겸 커피숍', 'Wine bar and coffeeshop on Mikulášska street in the Old Town', { reviewCount: 438 }),
  place('bratislava-cafe-3', 'bratislava', 'cafe', 'Matsu premium matcha & coffee', 4.7, 'Hlavné námestie 2, 811 01 Bratislava, Slovakia', '흘라브네 광장(중앙광장)에 위치한 말차·커피 전문 카페', "Matcha and coffee specialty cafe on Hlavné námestie, Bratislava's main square", { reviewCount: 166 }),
  place('bratislava-cafe-4', 'bratislava', 'cafe', 'Mimosa', 4.7, 'Biela 2, 811 01 Bratislava, Slovakia', '비엘라 거리의 브런치·와인·커피 전문 카페', 'Brunch, wine and coffee cafe on Biela street in the Old Town', { reviewCount: 167 }),
  place('bratislava-korean-1', 'bratislava', 'korean', 'HanCook Korean Restaurant', 4.7, 'Obchodná 531/54, 811 06 Bratislava, Slovakia', '옵호드나 거리의 인기 한식당', 'Popular Korean restaurant on Obchodná street in Bratislava', { reviewCount: 1782 }),

  // —— kosice ——
  place('kosice-fine_dining-1', 'kosice', 'fine_dining', 'Villa Regia', 4.5, 'Dominikánske námestie 3, 040 01 Košice, Slovakia', '코시체 도미니칸 광장에 위치한 동슬로바키아 전통 요리 전문 레스토랑', 'Restaurant on Dominican Square serving traditional Eastern Slovak dishes in the heart of Košice'),
  place('kosice-fine_dining-2', 'kosice', 'fine_dining', 'La Hacienda', 4.8, 'Mäsiarska 430/8, 040 01 Košice, Slovakia', '먀시아르스카 거리의 코시체 최고 인기 레스토랑', "Košice's most popular restaurant on Mäsiarska street", { reviewCount: 2346 }),
  place('kosice-fine_dining-3', 'kosice', 'fine_dining', 'Republika Východu', 4.5, 'Hlavná 108/31, 040 01 Košice, Slovakia', '흘라브나 거리의 인기 레스토랑', 'Popular restaurant on Hlavná street in Košice', { reviewCount: 2144 }),
  place('kosice-fine_dining-4', 'kosice', 'fine_dining', 'Contro Restaurant & Café', 4.6, 'Hlavná 45, 040 01 Košice, Slovakia', '흘라브나 거리의 레스토랑 겸 카페', 'Restaurant and cafe on Hlavná street in Košice', { reviewCount: 725 }),
  place('kosice-fine_dining-5', 'kosice', 'fine_dining', 'karczma MLYN', 4.4, 'Hlavná 46/86, 040 01 Košice, Slovakia', '흘라브나 거리의 전통 폴란드·동유럽식 선술집 레스토랑', 'Traditional Polish/Eastern European-style tavern restaurant on Hlavná street', { reviewCount: 2132 }),
  place('kosice-bakery-1', 'kosice', 'bakery', 'Domáca Pekáreň', 4.6, 'Alvinczyho 6, 040 01 Košice, Slovakia', '장작 오븐에서 구운 정직한 빵과 페이스트리로 유명한 코시체의 가정식 베이커리', 'Cozy Košice home-style bakery known for its wood-fired oven bread and honest pastries'),
  place('kosice-bakery-2', 'kosice', 'bakery', 'BENZE Košice', 4.6, 'Františkánska 1, 040 01 Košice, Slovakia', '프란티슈칸스카 거리의 브런치·베이커리 카페', 'Breakfast and bakery cafe on Františkánska street in Košice', { reviewCount: 261 }),
  place('kosice-bakery-3', 'kosice', 'bakery', 'Cinnamon Dream Bakery', 4.4, 'Poštová 39/2, 040 01 Košice, Slovakia', '포슈토바 거리의 베이커리', 'Bakery on Poštová street in Košice', { reviewCount: 128 }),
  place('kosice-bakery-4', 'kosice', 'bakery', "Jacob's bakery", 4.5, 'Mlynská 872/25, 040 01 Košice, Slovakia', '믈린스카 거리의 베이커리', 'Bakery on Mlynská street in Košice', { reviewCount: 83 }),
  place('kosice-cafe-1', 'kosice', 'cafe', 'Slavia', 4.5, 'Hlavná 63, 040 01 Košice, Slovakia', '1900년 창업한 아르누보 양식의 코시체 명소 카페', 'Košice landmark art-nouveau cafe founded in 1900'),
  place('kosice-cafe-2', 'kosice', 'cafe', 'Caffé TRIESTE', 4.6, 'Uršulínska 2, 040 01 Košice, Slovakia', '우르슐린스카 거리의 인기 커피 전문점', 'Popular coffee specialty shop on Uršulínska street in Košice', { reviewCount: 763 }),
  place('kosice-cafe-3', 'kosice', 'cafe', 'Cup of coffee', 4.6, 'Hviezdoslavova 1003/2, 040 01 Košice, Slovakia', '흐비에즈도슬라보바 거리의 인기 카페', 'Popular cafe on Hviezdoslavova street in Košice', { reviewCount: 722 }),
  place('kosice-cafe-4', 'kosice', 'cafe', 'Melody - fine roastery', 4.9, 'Zvonárska 149/12, 040 01 Košice, Slovakia', '즈보나르스카 거리의 스페셜티 에스프레소 바', 'Specialty espresso bar on Zvonárska street in Košice', { reviewCount: 204 }),
  place('kosice-korean-1', 'kosice', 'korean', 'K-Wave Korean Bistro', 4.7, 'Žižkova 1873/4, 040 01 Košice, Slovakia', '지슈코바 거리의 코시체 최초 한식 비스트로', "Košice's first Korean bistro, on Žižkova street", { reviewCount: 73 }),

  // —— poprad ——
  place('poprad-fine_dining-1', 'poprad', 'fine_dining', 'PREZO Restaurant', 4.5, 'Levočská 211/2, 058 01 Poprad, Slovakia', '전통과 혁신이 조화를 이루는 포프라드 최고의 슬로바키아 요리 레스토랑', 'Poprad\'s leading Slovak restaurant where tradition meets innovation in every dish'),
  place('poprad-fine_dining-2', 'poprad', 'fine_dining', 'Dobré časy', 4.5, 'Levočská 211/2, 058 01 Poprad, Slovakia', '레보차 거리의 인기 레스토랑', 'Popular restaurant on Levočská street in Poprad', { reviewCount: 3386 }),
  place('poprad-fine_dining-3', 'poprad', 'fine_dining', 'U Septima', 4.6, 'Velické námestie, 058 01 Poprad, Slovakia', '벨리츠케 광장의 인기 레스토랑', 'Popular restaurant on Velické námestie square in Poprad', { reviewCount: 1722 }),
  place('poprad-bakery-1', 'poprad', 'bakery', 'Betka\'s Bakery', 4.3, 'Námestie sv. Egídia 124, Forum Poprad, 058 01 Poprad, Slovakia', '포프라드 포룸 쇼핑몰 내에 위치한 인기 베이커리, 케이크와 페이스트리로 유명', 'Popular Poprad bakery inside the Forum shopping center, known for its cakes and pastries'),
  place('poprad-bakery-2', 'poprad', 'bakery', 'Remeselná Pekáreň LA Buchta', 4.9, 'Velické námestie 1172/3, 058 01 Poprad, Slovakia', '벨리츠케 광장의 수제 베이커리', 'Artisan bakery on Velické námestie square in Poprad', { reviewCount: 83 }),
  place('poprad-bakery-3', 'poprad', 'bakery', 'Remeselná Pekáreň Limba', 4.8, 'Podtatranská 1, 058 01 Poprad, Slovakia', '포드타트란스카 거리의 수제 베이커리', 'Artisan bakery on Podtatranská street in Poprad', { reviewCount: 69 }),
  place('poprad-cafe-1', 'poprad', 'cafe', 'LA FEE', 4.5, 'Námestie sv. Egídia 114, 058 01 Poprad, Slovakia', '포프라드 중심가의 인기 커피숍', 'Popular coffee shop in the heart of Poprad'),
  place('poprad-cafe-2', 'poprad', 'cafe', 'FELKA café & brew bar', 4.9, 'Na letisko 2089/19, 058 01 Poprad, Slovakia', '나 레티스코 거리의 인기 카페 겸 브루바', 'Popular cafe and brew bar on Na letisko street in Poprad', { reviewCount: 931 }),
  place('poprad-cafe-3', 'poprad', 'cafe', 'Espresso Bar PP - Speciality Coffee', 4.9, 'Sobotské námestie 1734/14, 058 01 Poprad, Slovakia', '소보트스케 광장의 스페셜티 에스프레소 바', 'Specialty espresso bar on Sobotské námestie square in Poprad', { reviewCount: 776 }),

  // —— banska-bystrica ——
  place('banska-bystrica-fine_dining-1', 'banska-bystrica', 'fine_dining', 'Mamma Mia Steak', 4.5, 'Námestie Š. Moysesa 29, 974 01 Banská Bystrica, Slovakia', '정교한 요리와 인상적인 와인 셀렉션으로 유명한 반스카비스트리차의 이탈리안 파인다이닝', 'Italian fine-dining restaurant known for its carefully crafted menu and impressive wine selection'),
  place('banska-bystrica-fine_dining-2', 'banska-bystrica', 'fine_dining', 'Bernardov Dvor', 4.6, 'Dolná 169/36, 974 01 Banská Bystrica, Slovakia', '돌나 거리의 인기 레스토랑', 'Popular restaurant on Dolná street in Banská Bystrica', { reviewCount: 1250 }),
  place('banska-bystrica-fine_dining-3', 'banska-bystrica', 'fine_dining', 'STREET FOODIE Banská Bystrica', 4.6, 'Dolná 52, 974 01 Banská Bystrica, Slovakia', '돌나 거리의 인기 레스토랑', 'Popular restaurant on Dolná street in Banská Bystrica', { reviewCount: 1673 }),
  place('banska-bystrica-bakery-1', 'banska-bystrica', 'bakery', 'La Donuteria', 4.6, 'Námestie Š. Moysesa 29, 974 01 Banská Bystrica, Slovakia', '수제 도넛 전문점으로 인기가 높은 반스카 비스트리차의 베이커리', 'Popular Banská Bystrica bakery specializing in handcrafted donuts'),
  place('banska-bystrica-bakery-2', 'banska-bystrica', 'bakery', 'Chlieb a láska - Stará tržnica BB', 4.8, 'Námestie Š. Moysesa 29, 974 01 Banská Bystrica, Slovakia', '스타라 트르주니차(옛 시장) 건물 내 파이 전문점', "Pie specialty shop inside the Stará tržnica (Old Market Hall) building in Banská Bystrica", { reviewCount: 244 }),
  place('banska-bystrica-bakery-3', 'banska-bystrica', 'bakery', 'Cukráreň Michaela Dessert Art', 4.9, 'Kyjevské námestie 6243/5, 974 01 Banská Bystrica, Slovakia', '키예프스케 광장의 케이크 전문점', 'Cake specialty shop on Kyjevské námestie square in Banská Bystrica', { reviewCount: 63 }),
  place('banska-bystrica-cafe-1', 'banska-bystrica', 'cafe', 'Beniczky Cafe & Wine Bar', 4.6, 'Námestie SNP 16, 974 01 Banská Bystrica, Slovakia', '훌륭한 커피와 케이크, 다양한 음료로 호평받는 반스카 비스트리차의 카페 겸 와인바', 'Banská Bystrica cafe and wine bar praised for excellent coffee, cakes and drink selection'),
  place('banska-bystrica-cafe-2', 'banska-bystrica', 'cafe', 'VÝKLAD | káva & viac', 4.9, 'Národná ulica 6, 974 01 Banská Bystrica, Slovakia', '나로드나 거리의 인기 커피숍', 'Popular coffee shop on Národná ulica in Banská Bystrica', { reviewCount: 527 }),
  place('banska-bystrica-cafe-3', 'banska-bystrica', 'cafe', 'The Fleck coffee roasters', 4.9, 'Martina Rázusa 1509/22, 974 01 Banská Bystrica, Slovakia', '마르티나 라주사 거리의 인기 로스터리 카페', 'Popular roastery cafe on Martina Rázusa street in Banská Bystrica', { reviewCount: 441 }),

  // —— trencin ——
  place('trencin-fine_dining-1', 'trencin', 'fine_dining', 'Pod hradom', 4.6, 'Matúšova 12/68, 911 01 Trenčín, Slovakia', '트렌친 성이 바로 보이는 구시가지에 위치한 아늑한 레스토랑', 'Charming restaurant in the historic center with a direct view of Trenčín Castle'),
  place('trencin-fine_dining-2', 'trencin', 'fine_dining', 'Restaurant and brewery Lanius', 4.5, 'Mierové námestie 20, 911 01 Trenčín, Slovakia', '미에로베 광장의 인기 레스토랑 겸 양조장', 'Popular restaurant and brewery on Mierové námestie square in Trenčín', { reviewCount: 2555 }),
  place('trencin-fine_dining-3', 'trencin', 'fine_dining', 'Mestsky hostinec', 4.5, 'Hviezdoslavova 137/8, 911 01 Trenčín, Slovakia', '흐비에즈도슬라보바 거리의 전통 선술집 레스토랑', 'Traditional tavern-style restaurant on Hviezdoslavova street in Trenčín', { reviewCount: 1364 }),

  place('trencin-bakery-1', 'trencin', 'bakery', 'Kaviareň Pacas', 4.6, 'Mierové námestie 15, 911 01 Trenčín, Slovakia', '베테르니크, 메도비 크레메시 등 다양한 케이크로 사랑받는 트렌친 중앙 광장의 카페', 'Cafe on Trenčín\'s main square loved for its wide selection of cakes like veternik and medovy kremes'),
  place('trencin-bakery-2', 'trencin', 'bakery', 'Mgusto Cukráreň', 4.7, 'Mierové námestie 28/28, 911 01 Trenčín, Slovakia', '미에로베 광장의 케이크 전문점', 'Cake specialty shop on Mierové námestie square in Trenčín', { reviewCount: 201 }),
  place('trencin-bakery-3', 'trencin', 'bakery', 'Mood bakery', 4.9, 'Mierové námestie, 911 01 Trenčín, Slovakia', '미에로베 광장의 베이커리', 'Bakery on Mierové námestie square in Trenčín', { reviewCount: 70 }),
  place('trencin-cafe-1', 'trencin', 'cafe', 'Café Sládkovič', 4.8, 'Mierové námestie 33, 911 01 Trenčín, Slovakia', '슬로바키아 최고의 카페 중 하나로 꼽히는 트렌친의 작지만 뛰어난 카페', 'Small but outstanding Trenčín cafe considered one of the best in Slovakia'),
  place('trencin-cafe-2', 'trencin', 'cafe', 'Coffee Lab - Coffee Shop & Roastery', 4.9, 'Štúrovo námestie 5, 911 01 Trenčín, Slovakia', '슈투로보 광장의 스페셜티 에스프레소 바 겸 로스터리', 'Specialty espresso bar and roastery on Štúrovo námestie square in Trenčín', { reviewCount: 271 }),
  place('trencin-cafe-3', 'trencin', 'cafe', 'CoffeeSheep', 4.7, 'Matúšova 22, 911 01 Trenčín, Slovakia', '마투쇼바 거리의 인기 카페', 'Popular cafe on Matúšova street in Trenčín', { reviewCount: 571 }),
]
