import { place } from './placeFactory'
import type { Place } from '../types'

export const placesMDExtra: Place[] = [
  // —— chisinau ——
  place('chisinau-fine_dining-1', 'chisinau', 'fine_dining', 'La Taifas', 'Strada București 67, Chișinău', '전통 몰도바 가옥 콘셉트 레스토랑.', 'Restaurant styled after a traditional Moldovan house.'),
  place('chisinau-fine_dining-2', 'chisinau', 'fine_dining', 'Carpe Diem Wine Shop & Bar', 'Strada Columna 136, Chișinău', '몰도바산을 포함한 세계 각지의 와인을 갖춘 부티크 와인 바.', 'Boutique wine bar and shop with an eclectic selection of Moldovan and international wines.'),
  place('chisinau-fine_dining-3', 'chisinau', 'fine_dining', 'Vatra Neamului', 'Strada Pușkin 20b, Chișinău', '전통 레시피로 요리를 선보이는 레스토랑 겸 박물관, 매일 저녁 라이브 민속 음악 공연.', 'Restaurant-museum serving dishes from old recipes with live traditional folk music every evening.'),
  place('chisinau-fine_dining-4', 'chisinau', 'fine_dining', 'La Plăcinte', 'Bulevardul Moscova 9/1, Chișinău', '15년 넘게 사랑받아온 몰도바 전통 플러친타(파이) 전문 체인 레스토랑.', 'Beloved Moldovan restaurant chain for over 15 years, specializing in plăcinte (traditional pies).', { image: '/places/chisinau-fine_dining-4.jpg' }),

  place('chisinau-bakery-1', 'chisinau', 'bakery', 'Dulcinella', 'Strada Albișoara 68, Chișinău, Moldova', '마카롱과 쿠키, 크루아상으로 유명한 키시너우의 제과점', 'Chișinău pastry shop known for macarons, cookies and croissants'),
  place('chisinau-bakery-2', 'chisinau', 'bakery', 'Vanille', 'Bulevardul Dacia 31, Chișinău', '키시너우의 패스트리숍.', 'Pastry shop in Chișinău.'),
  place('chisinau-bakery-3', 'chisinau', 'bakery', 'Dulce Hanna', 'Strada Alexei Șciusev 86, Chișinău', '키시너우 프랑스식 제과점.', 'French-style pastry shop in Chișinău.'),
  place('chisinau-bakery-4', 'chisinau', 'bakery', 'Caramel', 'Strada Mitropolit Gavriil Bănulescu-Bodoni 4, Chișinău', '키시너우의 패스트리숍.', 'Pastry shop in Chișinău.'),
  place('chisinau-bakery-5', 'chisinau', 'bakery', "Julia's Sweets Coffee House", 'Strada Calea Ieșilor 9, Chișinău', '키시너우 패스트리 카페.', 'Pastry café in Chișinău.'),

  place('chisinau-cafe-1', 'chisinau', 'cafe', 'Odélle', 'Strada Mihai Eminescu 70, Chișinău', '프렌치 클래식 요리를 선보이는 키시너우 중심가의 베이커리 카페', 'Charming Chișinău bakery café in the city center serving French classics'),
  place('chisinau-cafe-2', 'chisinau', 'cafe', 'Tucano Coffee', 'Strada A. Pușkin 15, Chișinău', '몰도바에서 탄생한 스페셜티 커피 브랜드, 다양한 커피 메뉴와 치즈케이크로 인기.', 'Specialty coffee brand born in Moldova, popular for its extensive coffee menu and cheesecakes.'),
  place('chisinau-cafe-3', 'chisinau', 'cafe', 'Crème de la Crème', 'Strada Alexandru cel Bun 98A, Chișinău', '재즈 음악이 흐르는 프렌치 카페 겸 디저트숍, 갓 구운 크루아상으로 시작하는 하루.', 'French café and sweet shop with jazz music, opening each day with freshly baked croissants.'),

  place('chisinau-korean-1', 'chisinau', 'korean', 'Gogiya BBQ', 'Strada Mitropolit Bănulescu-Bodoni 45, Chișinău', '키시너우 최초의 정통 한국식 바비큐 레스토랑.', 'Chișinău\'s first authentic Korean BBQ restaurant.'),

  // —— orheiul-vechi ——
  place('orheiul-vechi-fine_dining-1', 'orheiul-vechi', 'fine_dining', 'Ellada', 'Strada Vasile Lupu 46, Orhei', '오르헤이 중심의 몰도바 요리.', 'Moldovan cuisine in central Orhei.'),
  place('orheiul-vechi-fine_dining-2', 'orheiul-vechi', 'fine_dining', 'LA STRADA', 'Strada Mihai Eminescu 10, Orhei', '오르헤이의 음식점.', 'Restaurant in Orhei.'),
  place('orheiul-vechi-bakery-2', 'orheiul-vechi', 'bakery', 'Marcu Bakery', 'Peresecina, MD-3505, Orhei District, Moldova', '오르헤이-키시너우 간선도로변의 인기 베이커리, 플러친타로 유명.', 'Popular roadside bakery on the Orhei-Chișinău highway, known for its plăcintă pies.'),
  place('orheiul-vechi-cafe-1', 'orheiul-vechi', 'cafe', 'Le Café', 'Vasile Lupu 44, Orhei, Moldova', '아늑한 분위기의 오르헤이 카페', 'Cozy retreat café in Orhei'),
  place('orheiul-vechi-cafe-2', 'orheiul-vechi', 'cafe', 'Cafenea Orhei', 'Strada Vasile Lupu 160, Orhei', '오르헤이의 카페.', 'Café in Orhei.'),

  // —— soroca ——
  place('soroca-fine_dining-1', 'soroca', 'fine_dining', 'Restaurant Apollon', 'Strada Vasile Alecsandri 2, Soroca', '드네스트르강 전망의 유러피언 요리.', 'European cuisine with Dniester River views.'),

  place('soroca-bakery-2', 'soroca', 'bakery', 'DaviDan Bakery', 'Alexandru cel Bun 2, Soroca', '프랑스식 소로카 제과점.', 'French-style bakery in Soroca.'),
  place('soroca-cafe-1', 'soroca', 'cafe', 'In Vogue Cafe', 'Independenței 76, Soroca, Moldova', '드네스트르 강변 소로카 요새 인근의 카페', 'Café near Soroca Fortress on the banks of the Dniester'),
  place('soroca-cafe-2', 'soroca', 'cafe', 'COFFEEIN', 'Alhionia 8, Soroca', '소로카의 에스프레소 바.', 'Espresso bar in Soroca.'),
]
