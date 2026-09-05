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
  place('kosice-bakery-1', 'kosice', 'bakery', 'Domáca Pekáreň', 4.6, 'Alvinczyho 6, 040 01 Košice, Slovakia', '장작 오븐에서 구운 정직한 빵과 페이스트리로 유명한 코시체의 가정식 베이커리', 'Cozy Košice home-style bakery known for its wood-fired oven bread and honest pastries'),
  place('kosice-cafe-1', 'kosice', 'cafe', 'Slavia', 4.5, 'Hlavná 63, 040 01 Košice, Slovakia', '1900년 창업한 아르누보 양식의 코시체 명소 카페', 'Košice landmark art-nouveau cafe founded in 1900'),

  // —— poprad ——
  place('poprad-fine_dining-1', 'poprad', 'fine_dining', 'PREZO Restaurant', 4.5, 'Levočská 211/2, 058 01 Poprad, Slovakia', '전통과 혁신이 조화를 이루는 포프라드 최고의 슬로바키아 요리 레스토랑', 'Poprad\'s leading Slovak restaurant where tradition meets innovation in every dish'),
  place('poprad-bakery-1', 'poprad', 'bakery', 'Betka\'s Bakery', 4.3, 'Námestie sv. Egídia 124, Forum Poprad, 058 01 Poprad, Slovakia', '포프라드 포룸 쇼핑몰 내에 위치한 인기 베이커리, 케이크와 페이스트리로 유명', 'Popular Poprad bakery inside the Forum shopping center, known for its cakes and pastries'),
  place('poprad-cafe-1', 'poprad', 'cafe', 'LA FEE', 4.5, 'Námestie sv. Egídia 114, 058 01 Poprad, Slovakia', '포프라드 중심가의 인기 커피숍', 'Popular coffee shop in the heart of Poprad'),

  // —— banska-bystrica ——
  place('banska-bystrica-fine_dining-1', 'banska-bystrica', 'fine_dining', 'Mamma Mia Steak', 4.5, 'Námestie Š. Moysesa 29, 974 01 Banská Bystrica, Slovakia', '정교한 요리와 인상적인 와인 셀렉션으로 유명한 반스카비스트리차의 이탈리안 파인다이닝', 'Italian fine-dining restaurant known for its carefully crafted menu and impressive wine selection'),
  place('banska-bystrica-bakery-1', 'banska-bystrica', 'bakery', 'La Donuteria', 4.6, 'Námestie Š. Moysesa 29, 974 01 Banská Bystrica, Slovakia', '수제 도넛 전문점으로 인기가 높은 반스카 비스트리차의 베이커리', 'Popular Banská Bystrica bakery specializing in handcrafted donuts'),
  place('banska-bystrica-cafe-1', 'banska-bystrica', 'cafe', 'Beniczky Cafe & Wine Bar', 4.6, 'Námestie SNP 16, 974 01 Banská Bystrica, Slovakia', '훌륭한 커피와 케이크, 다양한 음료로 호평받는 반스카 비스트리차의 카페 겸 와인바', 'Banská Bystrica cafe and wine bar praised for excellent coffee, cakes and drink selection'),

  // —— trencin ——
  place('trencin-fine_dining-1', 'trencin', 'fine_dining', 'Pod hradom', 4.6, 'Matúšova 12/68, 911 01 Trenčín, Slovakia', '트렌친 성이 바로 보이는 구시가지에 위치한 아늑한 레스토랑', 'Charming restaurant in the historic center with a direct view of Trenčín Castle'),

  place('trencin-bakery-1', 'trencin', 'bakery', 'Kaviareň Pacas', 4.6, 'Mierové námestie 15, 911 01 Trenčín, Slovakia', '베테르니크, 메도비 크레메시 등 다양한 케이크로 사랑받는 트렌친 중앙 광장의 카페', 'Cafe on Trenčín\'s main square loved for its wide selection of cakes like veternik and medovy kremes'),
  place('trencin-cafe-1', 'trencin', 'cafe', 'Café Sládkovič', 4.8, 'Mierové námestie 33, 911 01 Trenčín, Slovakia', '슬로바키아 최고의 카페 중 하나로 꼽히는 트렌친의 작지만 뛰어난 카페', 'Small but outstanding Trenčín cafe considered one of the best in Slovakia'),
]
