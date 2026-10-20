import { place } from './placeFactory'
import type { Place } from '../types'

export const placesROExtra: Place[] = [
  // —— bucharest ——
  place('bucharest-fine_dining-1', 'bucharest', 'fine_dining', 'The Artist', 'Calea Victoriei 147, Sector 1, 010072 Bucharest, Romania', '현대 루마니아 요리 레스토랑.', 'Modern Romanian restaurant.'),
  place('bucharest-fine_dining-2', 'bucharest', 'fine_dining', 'Kaiamo', 'Strada Ermil Pangratti 30A, 011884 Bucharest, Romania', '시즌 창의 코스.', 'Seasonal creative tasting.'),
  place('bucharest-fine_dining-3', 'bucharest', 'fine_dining', 'Casa di David', 'Șoseaua Nordului 1D, 014101 Bucharest, Romania', '클래식 파인 다이닝.', 'Classic fine dining.'),
  place('bucharest-fine_dining-4', 'bucharest', 'fine_dining', 'Caru\' cu Bere', 'Strada Stavropoleos 5, București', '1899년 문을 연 구시가지의 네오고딕 맥주홀 식당.', 'Neo-Gothic beer hall restaurant in the Old Town, open since 1899.', { image: '/places/bucharest-fine_dining-4.jpg' }),
  place('bucharest-fine_dining-5', 'bucharest', 'fine_dining', 'Lacrimi și Sfinți', 'Strada Șepcari 16, 030116 Bucharest, Romania', '전통 재해석.', 'Reimagined tradition.'),
  place('bucharest-bakery-1', 'bucharest', 'bakery', 'French Revolution', 'Splaiul Unirii 165, Timpuri Noi Square, 030133 Bucharest, Romania', '사워도우·페이스트리.', 'Sourdough and pastries.', { image: '/places/bucharest-bakery-1.jpg' }),
  place('bucharest-bakery-3', 'bucharest', 'bakery', 'Grain Trip Bakery', 'Strada Nerva Traian 16, Bucharest', '장인 사워도우 베이커리.', 'Artisan sourdough bakery.'),
  place('bucharest-bakery-4', 'bucharest', 'bakery', 'Piața9 Victoriei', 'Calea Victoriei 145, Bucharest', '베이커리 겸 파티스리.', 'Bakery and pastry shop.'),
  place('bucharest-cafe-1', 'bucharest', 'cafe', 'Origo Coffee', 'Strada Lipscani 9, 050071 Bucharest, Romania', '스페셜티 로스터리.', 'Specialty roastery.'),
  place('bucharest-cafe-2', 'bucharest', 'cafe', 'Steam Coffee', 'Strada Visarion 2, 010421 Bucharest, Romania', '스페셜티 커피.', 'Specialty coffee.'),
  place('bucharest-cafe-3', 'bucharest', 'cafe', 'Cafeneaua Veche 9', 'Strada Covaci 16, 030167 Bucharest, Romania', '구시가 클래식 카페.', 'Old-town classic café.', { image: '/places/bucharest-cafe-3.jpg' }),
  place('bucharest-cafe-4', 'bucharest', 'cafe', 'Grand Café Van Gogh', 'Strada Smârdan 9, Bucharest', '구시가 브런치·조식 카페.', 'Old-town brunch and breakfast café.'),

  // —— brasov ——
  place('brasov-fine_dining-1', 'brasov', 'fine_dining', 'Albert Social Bistro', 'Strada Republicii 38, 500030 Brașov', '구 와인 저장고의 유러피언 비스트로.', 'European bistro in a former wine cellar.'),
  place('brasov-fine_dining-2', 'brasov', 'fine_dining', 'La Ceaun - Piața Sfatului', 'Piața Sfatului 11-12, Brașov, Romania', '브라쇼브 중앙 광장(피아차 스파툴루이)의 루마니아 전통 식당.', 'Traditional Romanian restaurant on Brașov’s Piața Sfatului.'),
  place('brasov-fine_dining-3', 'brasov', 'fine_dining', 'Ograda', 'Piața Sfatului 14, Brașov, Romania', '피아차 스파툴루이 광장의 레스토랑.', 'Restaurant on Piața Sfatului in Brașov.'),
  place('brasov-fine_dining-4', 'brasov', 'fine_dining', 'One Soul', 'Strada Apollonia Hirscher 12, 500015 Brașov, Romania', '아폴로니아 히르셰르 거리의 고급 다이닝 레스토랑', 'Fine-dining restaurant on Strada Apollonia Hirscher in Brașov'),
  place('brasov-fine_dining-5', 'brasov', 'fine_dining', 'Dei Frati', 'Piața George Enescu 16, Brașov, Romania', '피아차 조르제 에네스쿠 광장의 이탈리아 식당.', 'Italian restaurant on Piața George Enescu in Brașov.'),
  place('brasov-bakery-2', 'brasov', 'bakery', 'Brutăria Simplu', 'Strada Bisericii Române, 500068 Brașov, Romania', '비세리치 로머네 거리의 빵집.', 'Bakery on Strada Bisericii Române in Brașov.'),
  place('brasov-bakery-3', 'brasov', 'bakery', 'Transylvania Bakery', 'Strada Republicii 22, Brașov, Romania', '레푸블리치 거리의 베이커리', 'Bakery on Strada Republicii in Brașov'),
  place('brasov-cafe-1', 'brasov', 'cafe', 'Cafeteca Patria', 'Bulevardul 15 Noiembrie 33, 500096 Brașov, Romania', '브라쇼브의 스페셜티 커피숍.', 'Specialty coffee shop in Brașov.'),
  place('brasov-cafe-2', 'brasov', 'cafe', 'Book Coffee Shop', 'Strada Sfântul Ioan 24, Brașov, Romania', '스펀툴 이오안 거리의 커피숍.', 'Coffee shop on Strada Sfântul Ioan in Brașov.'),
  place('brasov-cafe-3', 'brasov', 'cafe', 'Shakespeare Coffee & Poetry', 'Strada Grigoraș Dinicu 1, Brașov, Romania', '그리고라시 디니쿠 거리의 카페.', 'Café on Strada Grigoraș Dinicu in Brașov.'),
  place('brasov-cafe-4', 'brasov', 'cafe', 'Rose Beans Focacceria & Specialty Coffee', 'Strada Michael Weiss 10, Brașov, Romania', '미하엘 바이스 거리의 스페셜티 커피숍 겸 포카체리아', 'Specialty coffee shop and focacceria on Strada Michael Weiss in Brașov'),

  // —— sibiu ——
  place('sibiu-fine_dining-1', 'sibiu', 'fine_dining', 'Syndicat Gourmet', 'Strada Târgului 10, 550195 Sibiu', '루마니아·인도 퓨전 요리.', 'Romanian-Indian fusion cuisine.'),
  place('sibiu-fine_dining-2', 'sibiu', 'fine_dining', 'La Cuptor Restaurant', '9 Mai 7, Sibiu, Romania', '9 마이 거리의 시비우 레스토랑.', 'Restaurant on 9 Mai street in Sibiu.'),
  place('sibiu-fine_dining-3', 'sibiu', 'fine_dining', 'Kombinat Gastro-Brewery', 'Strada Berăriei FN, 550173 Sibiu, Romania', '베러리에이 거리의 레스토랑.', 'Restaurant on Strada Berăriei in Sibiu.'),
  place('sibiu-fine_dining-4', 'sibiu', 'fine_dining', "Hochmeister delikat'essen", 'Strada Timotei Popovici 9 (Piața Schiller), 550164 Sibiu, Romania', '프리드리히 실러 광장의 레스토랑.', 'Restaurant on Piața Friedrich Schiller in Sibiu.'),
  place('sibiu-bakery-2', 'sibiu', 'bakery', 'Gogosh Coffee&Donuts', 'Strada Radu Stanca 1, Sibiu, Romania', '라두 스탄카 거리의 도넛 가게.', 'Doughnut shop on Strada Radu Stanca in Sibiu.'),
  place('sibiu-bakery-3', 'sibiu', 'bakery', 'Petit Patis', 'Strada Turnului 24, Sibiu, Romania', '투르눌루이 거리의 프렌치 제과점', 'French pastry shop on Strada Turnului in Sibiu'),
  place('sibiu-bakery-4', 'sibiu', 'bakery', 'Bakery Warose', 'Bulevardul Victoriei 15, Sibiu, Romania', '불레바르둘 빅토리에이 거리의 베이커리', 'Bakery on Bulevardul Victoriei in Sibiu'),
  place('sibiu-cafe-2', 'sibiu', 'cafe', 'Lumos - Coffee and brunch', 'Strada Mitropoliei 1, Sibiu, Romania', '미트로폴리에이 거리의 커피·브런치 카페.', 'Coffee and brunch café on Strada Mitropoliei in Sibiu.'),
  place('sibiu-cafe-3', 'sibiu', 'cafe', "Charlie's Specialty", 'Strada Turnului 5, Sibiu, Romania', '투르눌루이 거리의 브런치 카페.', 'Brunch café on Strada Turnului in Sibiu.'),
  place('sibiu-cafe-4', 'sibiu', 'cafe', 'Tea And Coffee Archive', 'Strada Arhivelor 2, Sibiu, Romania', '아르히벨로르 거리의 카페.', 'Café on Strada Arhivelor in Sibiu.'),

  // —— sighisoara ——
  place('sighisoara-fine_dining-1', 'sighisoara', 'fine_dining', 'Casa Georgius Krauss', 'Strada Bastionului 11, 545400 Sighișoara', '성벽 안 트란실바니아 요리.', 'Transylvanian cuisine within the citadel walls.'),
  place('sighisoara-fine_dining-2', 'sighisoara', 'fine_dining', 'Restaurant von Graf', 'Strada Tâmplarilor 4, 545400 Sighișoara, Romania', '탐플라릴로르 거리의 레스토랑.', 'Restaurant on Strada Tâmplarilor in Sighișoara.'),
  place('sighisoara-fine_dining-3', 'sighisoara', 'fine_dining', 'Josef T. Restaurant & Wine Bar', 'Piața Hermann Oberth 25, 545400 Sighișoara, Romania', '헤르만 오베르트 광장의 레스토랑 겸 와인바', 'Restaurant and wine bar on Piața Hermann Oberth in Sighișoara'),
  place('sighisoara-cafe-1', 'sighisoara', 'cafe', 'The Bean', 'Piața Hermann Oberth 7, 545400 Sighișoara, Romania', '시기쇼아라 중심가의 스페셜티 커피숍.', 'Specialty coffee shop in central Sighișoara.'),
  place('sighisoara-cafe-2', 'sighisoara', 'cafe', 'Atelier Specialty Coffee', 'Strada Octavian Goga 6, 545400 Sighișoara, Romania', '옥타비안 고가 거리의 스페셜티 커피숍.', 'Specialty coffee shop on Strada Octavian Goga in Sighișoara.'),

  // —— cluj-napoca ——
  place('cluj-napoca-fine_dining-1', 'cluj-napoca', 'fine_dining', 'Samsara Foodhouse', 'Strada Cardinal Iuliu Hossu 3, 400029 Cluj-Napoca', '올리브 나무가 있는 채식·비건 레스토랑.', 'Vegan-friendly restaurant with an olive tree indoors.'),
  place('cluj-napoca-fine_dining-2', 'cluj-napoca', 'fine_dining', 'Roata', 'Strada Alexandru Ciurea 6, 400000 Cluj-Napoca, Romania', '루마니아 전통 요리를 내는 클루지나포카의 식당.', 'Cluj-Napoca restaurant serving traditional Romanian food.'),
  place('cluj-napoca-fine_dining-3', 'cluj-napoca', 'fine_dining', 'Zama', 'Str. Napoca 16, Cluj-Napoca, Romania', '나포카 거리의 루마니아 요리 식당.', 'Romanian restaurant on Str. Napoca in Cluj-Napoca.'),
  place('cluj-napoca-fine_dining-4', 'cluj-napoca', 'fine_dining', 'Kupaj Gourmet', 'Strada Sindicatelor 4, Cluj-Napoca, Romania', '신디카텔로르 거리의 고급 구르메 레스토랑', 'Gourmet fine-dining restaurant on Strada Sindicatelor in Cluj-Napoca'),
  place('cluj-napoca-fine_dining-5', 'cluj-napoca', 'fine_dining', 'Muura Steak House', 'Strada Franklin Delano Roosevelt 2, Cluj-Napoca, Romania', '루스벨트 거리의 스테이크하우스.', 'Steakhouse on Strada Franklin Delano Roosevelt in Cluj-Napoca.'),
  place('cluj-napoca-cafe-1', 'cluj-napoca', 'cafe', 'YUME Coffee Roasters', 'Strada Emil Petrovici 16, 400394 Cluj-Napoca, Romania', '원두를 직접 볶는 클루지나포카의 스페셜티 커피 로스터리.', 'Cluj-Napoca specialty coffee roastery roasting its own beans.'),
  place('cluj-napoca-cafe-3', 'cluj-napoca', 'cafe', 'Olivo Bistro & Caffe', 'Bulevardul Eroilor 7, Cluj-Napoca, Romania', '에로일로르 대로의 커피숍.', 'Coffee shop on Bulevardul Eroilor in Cluj-Napoca.'),
  place('cluj-napoca-cafe-4', 'cluj-napoca', 'cafe', 'Mozart Café', 'Strada Cardinal Iuliu Hossu 7, Cluj-Napoca, Romania', '카르디날 율리우 호수 거리의 커피숍.', 'Coffee shop on Strada Cardinal Iuliu Hossu in Cluj-Napoca.'),

  // —— timisoara ——
  place('timisoara-fine_dining-1', 'timisoara', 'fine_dining', 'La Calul Alb', 'Strada Eugeniu de Savoya 14, 300085 Timișoara, Romania', '구시가의 창작 요리 레스토랑.', 'Creative restaurant in the historic centre.'),
  place('timisoara-fine_dining-3', 'timisoara', 'fine_dining', 'Restaurant Bun Timișoara', 'Strada Eugeniu de Savoya 13, Timișoara, Romania', '에우제니우 데 사보이아 거리의 레스토랑.', 'Restaurant on Strada Eugeniu de Savoya in Timișoara.'),
  place('timisoara-fine_dining-4', 'timisoara', 'fine_dining', 'Restaurant Sabres', 'Strada Craiova nr. 1, Timișoara, Romania', '크라이오바 거리의 지중해 요리 식당.', 'Mediterranean restaurant on Strada Craiova in Timișoara.'),
  place('timisoara-fine_dining-5', 'timisoara', 'fine_dining', 'Dei Frati Timișoara', 'Strada Vasile Alecsandri, Timișoara (historic centre)', '바실레 알렉산드리 거리의 인기 이탈리안 레스토랑', 'Popular Italian restaurant on Strada Vasile Alecsandri in Timișoara'),
  place('timisoara-bakery-1', 'timisoara', 'bakery', 'Cofetăria Trandafirul', 'Strada Francesco Griselini 2, 300054 Timișoara, Romania', '티미쇼아라 중심가의 오래된 전통 제과점. 케이크가 유명합니다.', 'Long-established traditional pastry shop in central Timișoara, known for its cakes.'),
  place('timisoara-cafe-1', 'timisoara', 'cafe', 'Narativ Specialty Coffee', 'Splaiul Nicolae Titulescu 7, 300160 Timișoara, Romania', '베가강 강변 근처의 작은 스페셜티 커피숍.', 'Small specialty coffee shop near the Bega riverbank.'),
  place('timisoara-cafe-2', 'timisoara', 'cafe', 'Garage Café', 'Strada Palanca 2, Timișoara, Romania', '팔란카 거리의 커피숍.', 'Coffee shop on Strada Palanca in Timișoara.'),
  place('timisoara-cafe-3', 'timisoara', 'cafe', 'OVRIDE Coffee Shop', 'Strada Lucian Blaga 6, Timișoara, Romania', '루치안 블라가 거리의 커피숍.', 'Coffee shop on Strada Lucian Blaga in Timișoara.'),
  place('timisoara-cafe-4', 'timisoara', 'cafe', 'acas specialty coffee', 'Strada Ciprian Porumbescu 32, Timișoara, Romania', '치프리안 포룸베스쿠 거리의 스페셜티 커피숍', 'Specialty coffee shop on Strada Ciprian Porumbescu in Timișoara'),
]
