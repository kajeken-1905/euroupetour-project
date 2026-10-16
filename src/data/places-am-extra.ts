import { place } from './placeFactory'
import type { Place } from '../types'

export const placesAMExtra: Place[] = [
  // —— yerevan ——
  place('yerevan-fine_dining-1', 'yerevan', 'fine_dining', 'Lavash', '21 Tumanyan St, Yerevan 0001', '예레반의 인기 아르메니아 레스토랑.', 'Popular Armenian restaurant in Yerevan.', { image: '/places/yerevan-fine_dining-1.jpg' }),
  place('yerevan-fine_dining-2', 'yerevan', 'fine_dining', 'Dolmama', '10 Pushkin Street, Yerevan', '1998년부터 이어온 아르메니아 파인다이닝, 돌마(포도잎쌈)로 유명', 'Armenian fine-dining restaurant open since 1998, known for its dolma (stuffed grape leaves)', { image: '/places/yerevan-fine_dining-2.jpg' }),
  place('yerevan-fine_dining-3', 'yerevan', 'fine_dining', 'Tavern Yerevan', '29/2 Khorenatsi Street, Yerevan', '전통 아르메니아 가정식과 라이브 음악을 즐길 수 있는 타번 레스토랑', 'Tavern-style restaurant known for traditional Armenian home cooking (khorovats, ghapama) and live music', { image: '/places/yerevan-fine_dining-3.jpg' }),
  place('yerevan-fine_dining-4', 'yerevan', 'fine_dining', 'Sherep', '1 Amiryan Street, Yerevan', '공화국 광장 인근의 오픈 키친 레스토랑, 코카서스·인터내셔널 요리', 'Open-kitchen restaurant near Republic Square serving Caucasian and international cuisine', { image: '/places/yerevan-fine_dining-4.jpg' }),
  place('yerevan-fine_dining-5', 'yerevan', 'fine_dining', 'Ararat Tavern', '15 Sayat-Nova Avenue, Yerevan', '전통 아르메니아 요리를 선보이는 인기 타번 레스토랑', 'Popular tavern restaurant serving traditional Armenian cuisine'),

  place('yerevan-bakery-1', 'yerevan', 'bakery', 'Bakery Yerevan', 'Tumanyan St 18, Yerevan, Armenia', '예레반 중심가의 인기 베이커리·파티세리', 'Popular bakery and patisserie in central Yerevan'),
  place('yerevan-bakery-2', 'yerevan', 'bakery', 'Crumbs Cafe', '37 Mashtots Ave, Yerevan 0002', '유럽식 빵과 페이스트리로 유명한 예레반의 인기 베이커리 카페', 'Popular bakery café in Yerevan known for European-style bread and pastries'),
  place('yerevan-bakery-3', 'yerevan', 'bakery', 'Paul Armenia', '8 Abovyan Street, Yerevan', '프랑스 베이커리 체인 Paul의 예레반 지점', 'Yerevan branch of the French bakery-café chain Paul'),

  place('yerevan-cafe-1', 'yerevan', 'cafe', 'Coffeeshop Company', 'Hin Yerevantsi St 2, Yerevan 0001, Armenia', '노던 애비뉴 인근에 위치한 인기 커피 체인', 'Popular coffee chain branch near Northern Avenue'),
  place('yerevan-cafe-2', 'yerevan', 'cafe', 'The Green Bean', '38 Isahakyan Street, Yerevan', '캐스케이드 인근, 노트북 작업하기 좋은 커피·브런치 카페', 'Coffee and breakfast café near the Cascade, popular with remote workers'),
  place('yerevan-cafe-3', 'yerevan', 'cafe', 'Epicure', '40 Pushkin Street, Yerevan 0010', '유럽식 메뉴와 테라스를 갖춘 카페 겸 레스토랑', 'European-style café-restaurant with a summer terrace'),
  place('yerevan-cafe-4', 'yerevan', 'cafe', 'Garage Ara Specialty Coffee', '16/3 Saryan Street, Yerevan', '사리안 거리의 스페셜티 커피 전문점', 'Specialty coffee shop on Saryan Street'),

  place('yerevan-korean-1', 'yerevan', 'korean', 'Kim Yum', '3 Tsitsernakaberd Highway, Yerevan', '예레반의 한식당', 'Korean restaurant in Yerevan'),

  // —— gyumri ——
  place('gyumri-fine_dining-1', 'gyumri', 'fine_dining', 'Gwoog Gastrohouse', 'Tigran Mets Avenue 11/3, Gyumri', '귬리의 대표 로컬 레스토랑.', 'Well-loved local restaurant in Gyumri.'),
  place('gyumri-fine_dining-2', 'gyumri', 'fine_dining', 'KumKuma', 'Garegin Nzhdeh Avenue 26/10, Gyumri', '아르메니아 가정식을 선보이는 귬리의 인기 레스토랑', 'Popular Gyumri restaurant serving Armenian home-style cuisine'),

  place('gyumri-bakery-1', 'gyumri', 'bakery', 'Aregak Bakery & Cafe', 'Gai Street 17/1, Gyumri, Armenia', '특별한 필요를 가진 청년들이 함께 일하는 귬리의 포용적인 베이커리 카페', 'Inclusive bakery café in Gyumri employing youth with special needs'),
  place('gyumri-cafe-1', 'gyumri', 'cafe', 'Lemon Cafe Restaurant', 'Khachatur Abovyan Street 135, Gyumri', '귬리의 인기 카페 겸 레스토랑', 'Popular café and restaurant in Gyumri'),

  // —— dilijan ——
  place('dilijan-fine_dining-1', 'dilijan', 'fine_dining', 'Tava Restaurant', 'Myasnikyan 37/4, Dilijan', '딜리잔의 대표 레스토랑.', 'Leading restaurant in Dilijan.'),

  place('dilijan-bakery-1', 'dilijan', 'bakery', 'Darchin Bakery & Cafe', 'Kalinin St 202, Dilijan 3904, Armenia', '말린 과일 바클라바 등 수제 디저트로 유명한 딜리잔의 여성 운영 베이커리', 'Woman-owned bakery in Dilijan known for handmade desserts like dried-fruit baklava'),
  place('dilijan-cafe-1', 'dilijan', 'cafe', 'Cafe #2', 'Gorky Street 17/1, Dilijan, Armenia', '딜리잔에서 가장 평이 좋은 카페', 'Dilijan\'s best-reviewed café'),
]
