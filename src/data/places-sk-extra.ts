import { place } from './placeFactory'
import type { Place } from '../types'

export const placesSKExtra: Place[] = [
  // —— bratislava ——
  place('bratislava-fine_dining-1', 'bratislava', 'fine_dining', 'Albrecht', 4.6, 'Bratislava', '슬로바키아 시즌 파인.', 'Seasonal Slovak fine dining.', { reviewCount: 900 }),
  place('bratislava-fine_dining-2', 'bratislava', 'fine_dining', 'UFO Restaurant', 4.5, 'Bratislava', '다리 탑 전망 다이닝.', 'Bridge-tower view dining.', { reviewCount: 2800 }),
  place('bratislava-fine_dining-4', 'bratislava', 'fine_dining', 'Slovak Pub', 4.4, 'Bratislava', '전통 슬로바키아 가정식.', 'Traditional Slovak home cooking.', { reviewCount: 3200 }),
  place('bratislava-bakery-1', 'bratislava', 'bakery', 'Kübler Bakery', 4.5, 'Bratislava', '로컬 빵·페이스트리.', 'Local bread and pastries.', { reviewCount: 1800 }),
  place('bratislava-bakery-2', 'bratislava', 'bakery', 'Urban bakery Bratislava', 4.4, 'Bratislava', '사워도우 베이커리.', 'Sourdough bakery.', { reviewCount: 1100 }),
  place('bratislava-bakery-3', 'bratislava', 'bakery', 'Cake & pastry shops Old Town', 4.4, 'Bratislava', '구시가 케이크 숍.', 'Old-town cake shops.', { reviewCount: 2100 }),
  place('bratislava-bakery-4', 'bratislava', 'bakery', 'Trdelník / sweet stalls', 4.3, 'Bratislava', '트르델니크·스위트.', 'Trdelník and sweets.', { reviewCount: 2800 }),
  place('bratislava-cafe-1', 'bratislava', 'cafe', 'Štúr Café', 4.5, 'Bratislava', '스페셜티 커피.', 'Specialty coffee.', { reviewCount: 1600 }),
  place('bratislava-cafe-2', 'bratislava', 'cafe', 'Café Trafačka', 4.4, 'Bratislava', '로스터리 카페.', 'Roastery café.', { reviewCount: 1200 }),
  place('bratislava-cafe-3', 'bratislava', 'cafe', 'Old Town café terraces', 4.3, 'Bratislava', '구시가 테라스 카페.', 'Old-town terrace cafés.', { reviewCount: 2400 }),
  place('bratislava-cafe-4', 'bratislava', 'cafe', 'Brunch spots Bratislava', 4.4, 'Bratislava', '브런치 카페.', 'Brunch café.', { reviewCount: 1400 }),

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
