import { place } from './placeFactory'
import type { Place } from '../types'

export const placesMDExtra: Place[] = [
  // —— chisinau ——
  place('chisinau-fine_dining-1', 'chisinau', 'fine_dining', 'La Taifas', 4.3, 'Strada București 67, Chișinău', '전통 몰도바 가옥 콘셉트 레스토랑.', 'Restaurant styled after a traditional Moldovan house.'),
  place('chisinau-fine_dining-2', 'chisinau', 'fine_dining', 'Carpe Diem Wine Shop & Bar', 4.6, 'Strada Columna 136, Chișinău', '몰도바산을 포함한 세계 각지의 와인을 갖춘 부티크 와인 바.', 'Boutique wine bar and shop with an eclectic selection of Moldovan and international wines.'),
  place('chisinau-fine_dining-3', 'chisinau', 'fine_dining', 'Vatra Neamului', 4.0, 'Strada Pușkin 20b, Chișinău', '전통 레시피로 요리를 선보이는 레스토랑 겸 박물관, 매일 저녁 라이브 민속 음악 공연.', 'Restaurant-museum serving dishes from old recipes with live traditional folk music every evening.', { reviewCount: 199 }),
  place('chisinau-fine_dining-4', 'chisinau', 'fine_dining', 'La Plăcinte', 4.3, 'Bulevardul Moscova 9/1, Chișinău', '15년 넘게 사랑받아온 몰도바 전통 플러친타(파이) 전문 체인 레스토랑.', 'Beloved Moldovan restaurant chain for over 15 years, specializing in plăcinte (traditional pies).'),

  place('chisinau-bakery-1', 'chisinau', 'bakery', 'Dulcinella', 4.1, 'Strada Albișoara 68, Chișinău, Moldova', '마카롱과 쿠키, 크루아상으로 유명한 키시너우의 제과점', 'Chișinău pastry shop known for macarons, cookies and croissants'),

  place('chisinau-cafe-1', 'chisinau', 'cafe', 'Odélle', 4.8, 'Strada Mihai Eminescu 70, Chișinău', '프렌치 클래식 요리를 선보이는 키시너우 중심가의 베이커리 카페', 'Charming Chișinău bakery café in the city center serving French classics'),
  place('chisinau-cafe-2', 'chisinau', 'cafe', 'Tucano Coffee', 4.5, 'Strada A. Pușkin 15, Chișinău', '몰도바에서 탄생한 스페셜티 커피 브랜드, 다양한 커피 메뉴와 치즈케이크로 인기.', 'Specialty coffee brand born in Moldova, popular for its extensive coffee menu and cheesecakes.'),
  place('chisinau-cafe-3', 'chisinau', 'cafe', 'Crème de la Crème', 4.3, 'Strada Alexandru cel Bun 98A, Chișinău', '재즈 음악이 흐르는 프렌치 카페 겸 디저트숍, 갓 구운 크루아상으로 시작하는 하루.', 'French café and sweet shop with jazz music, opening each day with freshly baked croissants.', { reviewCount: 6265 }),

  place('chisinau-korean-1', 'chisinau', 'korean', 'Gogiya BBQ', 5.0, 'Strada Mitropolit Bănulescu-Bodoni 45, Chișinău', '키시너우 최초의 정통 한국식 바비큐 레스토랑.', 'Chișinău\'s first authentic Korean BBQ restaurant.'),

  // —— orheiul-vechi ——
  place('orheiul-vechi-fine_dining-1', 'orheiul-vechi', 'fine_dining', 'Ellada', 4.6, 'Strada Vasile Lupu 46, Orhei', '오르헤이 중심의 몰도바 요리.', 'Moldovan cuisine in central Orhei.', { reviewCount: 758 }),
  place('orheiul-vechi-bakery-1', 'orheiul-vechi', 'bakery', 'Globa Family Bakery', 4.4, 'Orhei, Moldova', '통밀가루로만 빵을 만드는 오르헤이의 가족 운영 베이커리', 'Family-run Orhei bakery making bread only from whole wheat flour'),
  place('orheiul-vechi-cafe-1', 'orheiul-vechi', 'cafe', 'Le Café', 4.3, 'Vasile Lupu 44, Orhei, Moldova', '아늑한 분위기의 오르헤이 카페', 'Cozy retreat café in Orhei'),

  // —— soroca ——
  place('soroca-fine_dining-1', 'soroca', 'fine_dining', 'Restaurant Apollon', 4.3, 'Strada Vasile Alecsandri 2, Soroca', '드네스트르강 전망의 유러피언 요리.', 'European cuisine with Dniester River views.'),

  place('soroca-bakery-1', 'soroca', 'bakery', 'Brutăria Al-Irina', 4.3, 'Soroca, Moldova', '태양광 에너지로 매일 빵을 굽는 소로카의 베이커리', 'Soroca bakery baking bread daily using solar energy'),
  place('soroca-cafe-1', 'soroca', 'cafe', 'In Vogue Cafe', 4.4, 'Independenței 76, Soroca, Moldova', '드네스트르 강변 소로카 요새 인근의 카페', 'Café near Soroca Fortress on the banks of the Dniester'),
]
