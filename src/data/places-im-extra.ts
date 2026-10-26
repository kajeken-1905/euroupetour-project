import { place } from './placeFactory'
import type { Place } from '../types'

export const placesIMExtra: Place[] = [
  // —— douglas ——
  place('douglas-fine_dining-1', 'douglas', 'fine_dining', 'Little Fish Café', '31 North Quay, Douglas IM1 4LB', '항구 앞 해산물·섬 식재료 레스토랑. 브런치부터 저녁까지 엽니다.', 'Harbourside restaurant for seafood and island produce, open from brunch to dinner.'),
  place('douglas-bakery-1', 'douglas', 'bakery', 'Noa Bakehouse', 'Market Hall, Market Hill, Douglas IM1 2BH', '마켓 홀 안의 사워도우 베이커리. 직접 볶은 커피와 브런치를 냅니다.', 'Sourdough bakery in the Market Hall, with its own roasted coffee and brunch.'),

  // —— peel ——
  place('peel-fine_dining-1', 'peel', 'fine_dining', 'The Boatyard', 'Mariners Wharf, East Quay, Peel IM5 1AR', '2013년부터 영업한 필 항구 앞 레스토랑.', 'Restaurant on Peel harbour, open since 2013.'),

  // —— castletown / peel (Visit Isle of Man listings) ——
  place('castletown-fine_dining-1', 'castletown', 'fine_dining', 'Victoria Grill', '13 Malew Street, Castletown IM9 1DQ', '캐슬타운 맬루 거리의 그릴 레스토랑.', 'Grill restaurant on Malew Street in Castletown.'),
  place('peel-cafe-1', 'peel', 'cafe', 'The Coffee Station', 'House of Manannan, Peel IM5 1JH', '필 부두 하우스 오브 마나난 바로 옆 커피숍.', 'Coffee shop beside the House of Manannan on Peel quayside.'),
]
