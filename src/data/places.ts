import type { CategoryId, Place } from '../types'
import { places as part1 } from './places-part1'
import { placesPart2 } from './places-part2'
import { placesPart3 } from './places-part3'
import { placesPart4 } from './places-part4'
import { placesUKExtra } from './places-uk-extra'
import { placesNLExtra } from './places-nl-extra'
import { placesLUExtra } from './places-lu-extra'
import { placesBEExtra } from './places-be-extra'
import { placesNOExtra } from './places-no-extra'
import { placesFIExtra } from './places-fi-extra'
import { placesSEExtra } from './places-se-extra'
import { placesDKExtra } from './places-dk-extra'
import { placesATExtra } from './places-at-extra'
import { placesHUExtra } from './places-hu-extra'
import { placesCZExtra } from './places-cz-extra'
import { placesFRExtra } from './places-fr-extra'
import { placesCHExtra } from './places-ch-extra'
import { placesDEExtra } from './places-de-extra'
import { placesITExtra } from './places-it-extra'
import { placesESExtra } from './places-es-extra'
import { placesPTExtra } from './places-pt-extra'
import { placesGRExtra } from './places-gr-extra'
import { placesPLExtra } from './places-pl-extra'
import { placesHRExtra } from './places-hr-extra'
import { placesIEExtra } from './places-ie-extra'
import { placesISExtra } from './places-is-extra'
import { placesTRExtra } from './places-tr-extra'
import { placesBGExtra } from './places-bg-extra'
import { placesROExtra } from './places-ro-extra'
import { placesMCExtra } from './places-mc-extra'
import { placesVAExtra } from './places-va-extra'
import { placesADExtra } from './places-ad-extra'
import { placesLIExtra } from './places-li-extra'
import { placesSKExtra } from './places-sk-extra'
import { placesSIExtra } from './places-si-extra'
import { placesBAExtra } from './places-ba-extra'
import { placesMEExtra } from './places-me-extra'
import { placesRSExtra } from './places-rs-extra'
import { placesGEExtra } from './places-ge-extra'
import { placesUAExtra } from './places-ua-extra'
import { placesMDExtra } from './places-md-extra'
import { placesAMExtra } from './places-am-extra'
import { placesAZExtra } from './places-az-extra'
import { placesSMExtra } from './places-sm-extra'
import { placesXKExtra } from './places-xk-extra'
import { placesMKExtra } from './places-mk-extra'
import { placesCYExtra } from './places-cy-extra'
import { placesALExtra } from './places-al-extra'
import { placesMTExtra } from './places-mt-extra'
import { placesEEExtra } from './places-ee-extra'
import { placesLVExtra } from './places-lv-extra'
import { placesLTExtra } from './places-lt-extra'
import { placesFashion } from './places-fashion'
import { placesGrocery } from './places-grocery'
import { placesAsian } from './places-asian'
import { sortByRating } from '../utils/sortByRating'

export const places: Place[] = [
  ...part1,
  ...placesPart2,
  ...placesPart3,
  ...placesPart4,
  ...placesUKExtra,
  ...placesNLExtra,
  ...placesLUExtra,
  ...placesBEExtra,
  ...placesNOExtra,
  ...placesFIExtra,
  ...placesSEExtra,
  ...placesDKExtra,
  ...placesATExtra,
  ...placesHUExtra,
  ...placesCZExtra,
  ...placesFRExtra,
  ...placesCHExtra,
  ...placesDEExtra,
  ...placesITExtra,
  ...placesESExtra,
  ...placesPTExtra,
  ...placesGRExtra,
  ...placesPLExtra,
  ...placesHRExtra,
  ...placesIEExtra,
  ...placesISExtra,
  ...placesTRExtra,
  ...placesBGExtra,
  ...placesROExtra,
  ...placesMCExtra,
  ...placesVAExtra,
  ...placesADExtra,
  ...placesLIExtra,
  ...placesSKExtra,
  ...placesSIExtra,
  ...placesBAExtra,
  ...placesMEExtra,
  ...placesRSExtra,
  ...placesGEExtra,
  ...placesMKExtra,
  ...placesCYExtra,
  ...placesALExtra,
  ...placesMTExtra,
  ...placesEEExtra,
  ...placesLVExtra,
  ...placesLTExtra,
  ...placesFashion,
  ...placesGrocery,
  ...placesAsian,
  ...placesUAExtra,
  ...placesMDExtra,
  ...placesAMExtra,
  ...placesAZExtra,
  ...placesSMExtra,
  ...placesXKExtra,
]

export function getPlace(id: string) {
  return places.find((p) => p.id === id)
}

export function getPlacesByCityAndCategory(cityId: string, category: CategoryId) {
  return sortByRating(
    places.filter((p) => p.cityId === cityId && p.category === category),
  )
}
