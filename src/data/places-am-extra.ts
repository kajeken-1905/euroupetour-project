import { place } from './placeFactory'
import type { Place } from '../types'

export const placesAMExtra: Place[] = [
  // —— yerevan ——
  place('yerevan-fine_dining-1', 'yerevan', 'fine_dining', 'Lavash', '21 Tumanyan St, Yerevan 0001', '탄두르(토니르)에서 굽는 라바시와 아르메니아 요리로 유명한 식당. 예약을 권합니다.', 'Armenian restaurant known for lavash baked in a tonir; book ahead.', { image: '/places/yerevan-fine_dining-1.jpg' }),
  place('yerevan-fine_dining-2', 'yerevan', 'fine_dining', 'Dolmama', '10 Pushkin Street, Yerevan', '푸시킨 거리의 오래된 아르메니아 요리 식당. 돌마가 대표 메뉴이고 안뜰 테라스가 있습니다.', 'Long-running Armenian restaurant on Pushkin Street, famous for dolma, with a courtyard terrace.', { image: '/places/yerevan-fine_dining-2.jpg' }),
  place('yerevan-fine_dining-3', 'yerevan', 'fine_dining', 'Tavern Yerevan', '29/2 Khorenatsi Street, Yerevan', '전통 아르메니아 가정식과 라이브 음악을 즐길 수 있는 타번 레스토랑', 'Tavern-style restaurant known for traditional Armenian home cooking (khorovats, ghapama) and live music', { image: '/places/yerevan-fine_dining-3.jpg' }),
  place('yerevan-fine_dining-4', 'yerevan', 'fine_dining', 'Sherep', '1 Amiryan Street, Yerevan', '공화국 광장 근처의 오픈 키친 식당. 아르메니아·유럽 요리를 내고 라이브 음악이 있습니다.', 'Open-kitchen restaurant near Republic Square serving Armenian and European dishes, with live music.', { image: '/places/yerevan-fine_dining-4.jpg' }),
  place('yerevan-fine_dining-5', 'yerevan', 'fine_dining', 'Ararat Tavern', '15 Sayat-Nova Avenue, Yerevan', '아르메니아·조지아 요리 식당. 매일 저녁 7시부터 민속 음악 공연이 있습니다.', 'Armenian and Georgian restaurant with folk music every evening from 7 pm.'),

  place('yerevan-bakery-2', 'yerevan', 'bakery', 'Crumbs Bread Factory & Cafe', '37 Mashtots Ave, Yerevan 0002', '직접 굽는 사워도우와 페이스트리가 있는 예레반 중심가의 베이커리 카페.', 'Central Yerevan bakery-café baking its own sourdough and pastries.'),
  place('yerevan-bakery-3', 'yerevan', 'bakery', 'Paul Armenia', 'Abovyan Street, Yerevan', '1884년 지어진 옛 저택에 들어선 프랑스 베이커리 체인 폴의 아르메니아 첫 매장.', 'The French chain PAUL’s first Armenian shop, in an 1884 mansion on Abovyan Street.'),

  place('yerevan-cafe-1', 'yerevan', 'cafe', 'Coffeeshop Company', 'Hin Yerevantsu St 2/6, Yerevan 0001', '빈에서 시작한 커피 체인의 예레반 지점. 밤늦게까지 엽니다.', 'Yerevan branch of the Vienna-born coffee chain, open late.'),
  place('yerevan-cafe-2', 'yerevan', 'cafe', 'The Green Bean', '38 Isahakyan Street, Yerevan', '캐스케이드 근처의 금연·친환경 카페. 와이파이가 좋아 노트북 작업에 알맞습니다.', 'Non-smoking, eco-minded café near the Cascade, with reliable Wi-Fi for laptop work.'),

  place('yerevan-korean-1', 'yerevan', 'korean', 'Kim Yum', 'Dalma Garden Mall, Tsitsernakaberd Highway 3, Yerevan', '예레반에 여러 지점을 둔 한식당(달마 가든 몰 지점).', 'Korean restaurant with several branches in Yerevan (Dalma Garden Mall branch).'),

  // —— gyumri ——
  place('gyumri-fine_dining-1', 'gyumri', 'fine_dining', 'Gwoog Gastrohouse', 'Tigran Mets Avenue 11/3, Gyumri', '2019년 문을 연 가족 운영 식당. 아르메니아 가정식을 냅니다.', 'Family-run restaurant opened in 2019, serving Armenian home cooking.'),
  place('gyumri-fine_dining-2', 'gyumri', 'fine_dining', 'KumKuma', 'Garegin Nzhdeh Avenue 26/10, Gyumri', '쿠마 호텔의 레스토랑. 아르메니아 요리를 현대적으로 냅니다.', 'KUMA Hotel’s restaurant, serving Armenian food with a modern twist.'),

  place('gyumri-bakery-1', 'gyumri', 'bakery', 'Aregak Bakery & Cafe', 'Abovyan 242, Gyumri', '장애가 있는 청년들이 일하는 아르메니아 첫 포용 베이커리 카페.', 'Armenia’s first inclusive bakery-café, staffed by young people with disabilities.'),
  place('gyumri-cafe-1', 'gyumri', 'cafe', 'Lemon (Old Avenue Hotel)', 'Abovyan 139, Gyumri', '올드 애비뉴 호텔의 레스토랑. 아침부터 저녁까지 아르메니아·인터내셔널 요리를 냅니다.', 'Restaurant of the Old Avenue Hotel, serving Armenian and international dishes from breakfast to dinner.'),

  // —— dilijan ——
  place('dilijan-fine_dining-1', 'dilijan', 'fine_dining', 'Tava Restaurant', 'Sayat-Nova 6, Dilijan 3901', '장작 벽돌 오븐에서 굽고 무쇠 팬에 내는 딜리잔 식당.', 'Dilijan restaurant cooking everything in a wood-fired brick oven, served in cast-iron pans.'),

  place('dilijan-bakery-1', 'dilijan', 'bakery', 'Darchin Pastry & Cafe', 'Kalinin St 202, Dilijan 3904, Armenia', '딜리잔의 작은 제과점 겸 카페.', 'Small pastry shop and café in Dilijan.'),
  place('dilijan-cafe-1', 'dilijan', 'cafe', 'Cafe #2', 'Gorky Street 17/1, Dilijan, Armenia', '딜리잔 중심의 카페. 지역 학생들이 실습하며 운영하고 호수 쪽 발코니가 있습니다.', 'Central Dilijan café run as a training venue for local hospitality students, with a lake-view balcony.'),
]
