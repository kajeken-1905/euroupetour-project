import { place } from './placeFactory'
import type { Place } from '../types'

export const placesMDExtra: Place[] = [
  // —— chisinau ——
  place('chisinau-fine_dining-1', 'chisinau', 'fine_dining', 'La Taifas', 4.6, 'Strada Pușkin 20B, Chișinău', '전통 몰도바 가옥 콘셉트 레스토랑.', 'Restaurant styled after a traditional Moldovan house.'),
  place('chisinau-bakery-1', 'chisinau', 'bakery', 'Dulcinella', 4.5, 'Bulevardul Ștefan cel Mare și Sfânt 69, Chișinău, Moldova', '마카롱과 쿠키, 크루아상으로 유명한 키시너우의 제과점', 'Chișinău pastry shop known for macarons, cookies and croissants'),
  place('chisinau-cafe-1', 'chisinau', 'cafe', 'Odélle', 4.5, 'Chișinău, Moldova', '프렌치 클래식 요리를 선보이는 키시너우 중심가의 베이커리 카페', 'Charming Chișinău bakery café in the city center serving French classics'),

  // —— orheiul-vechi ——
  place('orheiul-vechi-fine_dining-1', 'orheiul-vechi', 'fine_dining', 'Ellada', 4.5, 'Strada Vasile Lupu 46, Orhei', '오르헤이 중심의 몰도바 요리.', 'Moldovan cuisine in central Orhei.'),
  place('orheiul-vechi-bakery-1', 'orheiul-vechi', 'bakery', 'Globa Family Bakery', 4.4, 'Orhei, Moldova', '통밀가루로만 빵을 만드는 오르헤이의 가족 운영 베이커리', 'Family-run Orhei bakery making bread only from whole wheat flour'),
  place('orheiul-vechi-cafe-1', 'orheiul-vechi', 'cafe', 'Le Café', 4.3, 'Vasile Lupu 44, Orhei, Moldova', '아늑한 분위기의 오르헤이 카페', 'Cozy retreat café in Orhei'),

  // —— soroca ——
  place('soroca-fine_dining-1', 'soroca', 'fine_dining', 'Restaurant Apollon', 4.5, 'Strada A. Cosmescu 1, Soroca', '드네스트르강 전망의 유러피언 요리.', 'European cuisine with Dniester River views.'),

  place('soroca-bakery-1', 'soroca', 'bakery', 'Brutăria Al-Irina', 4.3, 'Soroca, Moldova', '태양광 에너지로 매일 빵을 굽는 소로카의 베이커리', 'Soroca bakery baking bread daily using solar energy'),
  place('soroca-cafe-1', 'soroca', 'cafe', 'In Vogue Cafe', 4.4, 'Independenței 76, Soroca, Moldova', '드네스트르 강변 소로카 요새 인근의 카페', 'Café near Soroca Fortress on the banks of the Dniester'),
]
