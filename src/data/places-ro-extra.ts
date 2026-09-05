import { place } from './placeFactory'
import type { Place } from '../types'

export const placesROExtra: Place[] = [
  // —— bucharest ——
  place('bucharest-fine_dining-1', 'bucharest', 'fine_dining', 'The Artist', 4.6, 'Bucharest', '미슐랭 모던 루마니아.', 'Michelin modern Romanian.', { reviewCount: 1200 }),
  place('bucharest-fine_dining-2', 'bucharest', 'fine_dining', 'Kaiamo', 4.5, 'Bucharest', '시즌 창의 코스.', 'Seasonal creative tasting.', { reviewCount: 900 }),
  place('bucharest-fine_dining-3', 'bucharest', 'fine_dining', 'Casa di David', 4.4, 'Bucharest', '클래식 파인 다이닝.', 'Classic fine dining.', { reviewCount: 1600 }),
  place('bucharest-fine_dining-4', 'bucharest', 'fine_dining', 'Caru\' cu Bere', 4.4, 'Bucharest', '역사적 맥주홀 다이닝.', 'Historic beer-hall dining.', { reviewCount: 8600 }),
  place('bucharest-fine_dining-5', 'bucharest', 'fine_dining', 'Lacrimi și Sfinți', 4.5, 'Bucharest', '전통 재해석.', 'Reimagined tradition.', { reviewCount: 2100 }),
  place('bucharest-bakery-1', 'bucharest', 'bakery', 'French Revolution', 4.5, 'Bucharest', '사워도우·페이스트리.', 'Sourdough and pastries.', { reviewCount: 1800 }),
  place('bucharest-bakery-2', 'bucharest', 'bakery', 'Grace Bakery', 4.4, 'Bucharest', '로컬 베이커리.', 'Local bakery.', { reviewCount: 1200 }),
  place('bucharest-bakery-3', 'bucharest', 'bakery', 'Grain Trip Bakery', 4.6, 'Strada Nerva Traian 16, Bucharest', '장인 사워도우 베이커리.', 'Artisan sourdough bakery.', { reviewCount: 1447 }),
  place('bucharest-bakery-4', 'bucharest', 'bakery', 'Piața9 Victoriei', 4.6, 'Calea Victoriei 145, Bucharest', '베이커리 겸 파티스리.', 'Bakery and pastry shop.', { reviewCount: 1128 }),
  place('bucharest-cafe-1', 'bucharest', 'cafe', 'Origo Coffee', 4.6, 'Bucharest', '스페셜티 로스터리.', 'Specialty roastery.', { reviewCount: 2100 }),
  place('bucharest-cafe-2', 'bucharest', 'cafe', 'Steam Coffee', 4.5, 'Bucharest', '스페셜티 커피.', 'Specialty coffee.', { reviewCount: 1400 }),
  place('bucharest-cafe-3', 'bucharest', 'cafe', 'Cafeneaua Veche', 4.3, 'Bucharest', '구시가 클래식 카페.', 'Old-town classic café.', { reviewCount: 2800 }),
  place('bucharest-cafe-4', 'bucharest', 'cafe', 'Grand Café Van Gogh', 4.2, 'Strada Smârdan 9, Bucharest', '구시가 브런치·조식 카페.', 'Old-town brunch and breakfast café.', { reviewCount: 12991 }),

  // —— brasov ——
  place('brasov-fine_dining-1', 'brasov', 'fine_dining', 'Albert Social Bistro', 4.6, 'Strada Apollonia Hirscher 12, 500015 Brașov', '구 와인 저장고의 유러피언 비스트로.', 'European bistro in a former wine cellar.'),
  place('brasov-bakery-1', 'brasov', 'bakery', 'Good Food Coffee & Bakery', 4.6, 'Str Gheorghe Bariţiu 13, 500025 Brașov, Romania', '따뜻하고 아늑한 분위기로 사랑받는 브라쇼브의 인기 베이커리 카페', 'Popular Brasov bakery cafe loved for its warm and welcoming atmosphere'),
  place('brasov-cafe-1', 'brasov', 'cafe', 'Cafeteca Patria', 4.6, 'Bulevardul 15 Noiembrie 33, 500096 Brașov, Romania', '브라쇼브 최고로 꼽히는 스페셜티 커피숍', 'Widely regarded as the best specialty coffee shop in Brasov'),

  // —— sibiu ——
  place('sibiu-fine_dining-1', 'sibiu', 'fine_dining', 'Syndicat Gourmet', 4.5, 'Strada Târgului 10, 550195 Sibiu', '루마니아·인도 퓨전 요리.', 'Romanian-Indian fusion cuisine.'),
  place('sibiu-bakery-1', 'sibiu', 'bakery', 'Voila Sweets & Treats', 4.6, 'Bloc 16, Calea Dumbrăvii, 550324 Sibiu, Romania', '고품질 디저트와 친절한 서비스로 인기가 높아지는 시비우의 제과점', 'Growing-popularity Sibiu bakery known for extraordinary sweets and friendly service'),
  place('sibiu-cafe-1', 'sibiu', 'cafe', 'Geea', 4.5, 'Etaj I, Str. Avram Iancu 4, Sibiu, Romania', '시비우 중심가에 위치한 인기 카페, 작업하기 좋은 분위기', 'Popular central Sibiu cafe with great atmosphere, food and service'),

  // —— sighisoara ——
  place('sighisoara-fine_dining-1', 'sighisoara', 'fine_dining', 'Casa Georgius Krauss', 4.6, 'Strada Bastionului 11, 545400 Sighișoara', '성벽 안 트란실바니아 요리.', 'Transylvanian cuisine within the citadel walls.'),
  place('sighisoara-bakery-1', 'sighisoara', 'bakery', 'Cofetăria La Angela', 4.5, 'Piața Hermann Oberth 10, 545400 Sighișoara, Romania', '시기쇼아라 성벽 밖에 위치한 정갈한 케이크와 페이스트리로 유명한 제과점', 'Bakery cafe just outside Sighișoara\'s citadel walls, known for beautifully decorated cakes and pastries'),
  place('sighisoara-cafe-1', 'sighisoara', 'cafe', 'The Bean Specialty Coffee', 4.8, 'Str. Octavian Goga 4, Sighișoara, Romania', '시기쇼아라 중심가의 수상 경력이 있는 스페셜티 커피숍', 'Award-winning specialty coffee shop in the heart of Sighișoara, serving freshly roasted coffee'),

  // —— cluj-napoca ——
  place('cluj-napoca-fine_dining-1', 'cluj-napoca', 'fine_dining', 'Samsara Foodhouse', 4.5, 'Strada Alexandru Ciurea 6, 400000 Cluj-Napoca', '올리브 나무가 있는 채식·비건 레스토랑.', 'Vegan-friendly restaurant with an olive tree indoors.'),
  place('cluj-napoca-bakery-1', 'cluj-napoca', 'bakery', 'Panemar', 4.6, 'Strada Octavian Goga 1, 400698 Cluj-Napoca, Romania', '신선한 빵과 슈트루델, 크루아상으로 유명한 클루지나포카 최고의 베이커리', 'Cluj-Napoca\'s top bakery, known for its always-fresh bread, strudels and croissants'),
  place('cluj-napoca-cafe-1', 'cluj-napoca', 'cafe', 'YUME Coffee Roasters', 4.6, 'Strada Emil Petrovici 16, 400394 Cluj-Napoca, Romania', '직접 로스팅한 원두로 유명한 클루지나포카의 스페셜티 커피 로스터리', 'Cluj-Napoca specialty coffee roastery known for its own house-roasted beans'),

  // —— timisoara ——
  place('timisoara-fine_dining-1', 'timisoara', 'fine_dining', 'La Calul Alb', 4.6, 'Strada Mărășești 10, 300070 Timișoara, Romania', '구시가지에 위치한 창의적인 요리와 세심한 디테일로 유명한 파인다이닝 레스토랑', 'Creative fine-dining restaurant in the historic center known for attention to detail'),

  place('timisoara-bakery-1', 'timisoara', 'bakery', 'Cofetăria Trandafirul', 4.6, 'Str. Proclamația de la Timișoara, nr. 5, Timișoara, Romania', '마카롱으로 유명한 티미쇼아라 최고의 제과점', 'Timișoara\'s top bakery, famous for its excellent macarons'),
  place('timisoara-cafe-1', 'timisoara', 'cafe', 'Narativ Specialty Coffee', 4.6, 'Piața Victoriei nr. 6, Timișoara, Romania', '맛있는 커피와 페이스트리, 친근한 분위기의 티미쇼아라 카페', 'Timișoara cafe offering delicious coffee drinks and pastries in a friendly atmosphere'),
]
