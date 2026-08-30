import { place } from './placeFactory'
import type { Place } from '../types'

export const placesAMExtra: Place[] = [
  // —— yerevan ——
  place('yerevan-fine_dining-1', 'yerevan', 'fine_dining', 'Lavash', 4.5, '21 Tumanyan St, Yerevan 0001', '예레반의 인기 아르메니아 레스토랑.', 'Popular Armenian restaurant in Yerevan.'),
  place('yerevan-bakery-1', 'yerevan', 'bakery', 'Bakery Yerevan', 4.5, 'Tumanyan St 18, Yerevan, Armenia', '예레반 중심가의 인기 베이커리 카페', 'Popular bakery café in central Yerevan'),
  place('yerevan-cafe-1', 'yerevan', 'cafe', 'Coffeeshop Company', 4.4, 'Northern Avenue, Yerevan, Armenia', '노던 애비뉴에 위치한 인기 커피 체인', 'Popular coffee chain on Northern Avenue'),

  // —— gyumri ——
  place('gyumri-fine_dining-1', 'gyumri', 'fine_dining', 'Gwoog Gastrohouse', 4.6, 'Tigran Mets Avenue 11/3, Gyumri', '귬리의 대표 로컬 레스토랑.', 'Well-loved local restaurant in Gyumri.'),
  place('gyumri-bakery-1', 'gyumri', 'bakery', 'Aregak Bakery & Cafe', 4.6, 'Abovyan St 242, Gyumri 3101, Armenia', '특별한 필요를 가진 청년들이 함께 일하는 귬리의 포용적인 베이커리 카페', 'Inclusive bakery café in Gyumri employing youth with special needs'),
  place('gyumri-cafe-1', 'gyumri', 'cafe', 'Nazuk Cafe And Bakery', 4.4, 'Gyumri, Armenia', '다양한 케이크와 자체 제작 초콜릿으로 유명한 귬리의 카페', 'Café in Gyumri known for its wide selection of cakes and house-made chocolate'),

  // —— dilijan ——
  place('dilijan-fine_dining-1', 'dilijan', 'fine_dining', 'Tava Restaurant', 4.5, 'Myasnikyan 37/4, Dilijan', '딜리잔의 대표 레스토랑.', 'Leading restaurant in Dilijan.'),

  place('dilijan-bakery-1', 'dilijan', 'bakery', 'Darchin Bakery & Cafe', 4.7, 'Kalinin St 202, Dilijan 3904, Armenia', '말린 과일 바클라바 등 수제 디저트로 유명한 딜리잔의 여성 운영 베이커리', 'Woman-owned bakery in Dilijan known for handmade desserts like dried-fruit baklava'),
  place('dilijan-cafe-1', 'dilijan', 'cafe', 'Cafe #2', 4.6, 'Gorky Street 17/1, Dilijan, Armenia', '딜리잔에서 가장 평이 좋은 카페', 'Dilijan\'s best-reviewed café'),
]
