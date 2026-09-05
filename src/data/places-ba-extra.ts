import { place } from './placeFactory'
import type { Place } from '../types'

export const placesBAExtra: Place[] = [
  // —— sarajevo ——
  place('sarajevo-fine_dining-1', 'sarajevo', 'fine_dining', 'Park Prinčeva', 4.0, 'Iza Hrida 7, Sarajevo 71000', '전망 보스니아 다이닝.', 'Viewpoint Bosnian dining.', { reviewCount: 2630 }),
  place('sarajevo-fine_dining-3', 'sarajevo', 'fine_dining', 'Inat Kuća (House of Spite)', 4.4, 'Veliki Alifakovac 1, Sarajevo 71000', '전통 보스니아 가정식.', 'Traditional Bosnian home cooking.', { reviewCount: 2561 }),
  place('sarajevo-fine_dining-4', 'sarajevo', 'fine_dining', 'Ćevabdžinica Željo', 4.5, 'Kundurdžiluk 19, Sarajevo 71000', '체바피 클래식.', 'Ćevapi classic.', { reviewCount: 12416 }),
  place('sarajevo-bakery-1', 'sarajevo', 'bakery', 'Pita Ispod Sača - Kod Seje', 4.8, 'Koturova, Sarajevo 71000', '사치 화덕 피타.', 'Pita baked under a sač dome.', { reviewCount: 201 }),
  place('sarajevo-bakery-2', 'sarajevo', 'bakery', 'Baklava Dućan', 4.7, 'Čizmedžiluk 20, Sarajevo', '바클라바 전문점.', 'Baklava specialist.', { reviewCount: 616 }),
  place('sarajevo-bakery-3', 'sarajevo', 'bakery', 'Pekara Poričanin', 4.8, 'Safvet-bega Bašagića 16, Sarajevo', '구시가 인근 베이커리.', 'Bakery near the old town.', { reviewCount: 644 }),
  place('sarajevo-cafe-1', 'sarajevo', 'cafe', 'Zlatna Ribica', 4.7, 'Kaptol 5, Sarajevo 71000', '클래식 카페 겸 바.', 'Classic café and bar.', { reviewCount: 1777 }),
  place('sarajevo-cafe-2', 'sarajevo', 'cafe', 'Fabrika Coffee Sarajevo', 4.6, 'Sarači 32, Sarajevo', '스페셜티 커피.', 'Specialty coffee.', { reviewCount: 828 }),
  place('sarajevo-cafe-3', 'sarajevo', 'cafe', 'Bašča', 4.1, 'Baščaršija 18A, Sarajevo', '바슈차르시야 시장가 카페.', 'Café on Baščaršija bazaar street.', { reviewCount: 785 }),
  place('sarajevo-cafe-4', 'sarajevo', 'cafe', 'Brunch Sa', 4.7, 'Gazi Husrev-begova 61, Sarajevo', '센타르 브런치 카페.', 'Brunch café in Centar.', { reviewCount: 2278 }),

  // —— mostar ——
  place('mostar-fine_dining-1', 'mostar', 'fine_dining', 'Restoran Hindin Han', 4.5, 'Jusovina bb, Mostar 88000', '네레트바 강변의 전통 보스니아 요리.', 'Traditional Bosnian cuisine on the Neretva River.'),
  place('mostar-bakery-1', 'mostar', 'bakery', 'Caffe Slastičarna Aldi 2', 4.5, 'Mostarskog bataljona, Mostar, Bosnia and Herzegovina', '스타리 모스트 다리에서 가까운 모스타르 구시가지의 인기 제과점', 'Popular bakery-café near the Stari Most bridge in Mostar\'s Old Town'),
  place('mostar-cafe-1', 'mostar', 'cafe', 'Café de Alma', 4.5, 'Stari Most, Mostar, Bosnia and Herzegovina', '네레트바 강변 스타리 모스트 바로 옆에 위치한 모스타르 최고의 카페', 'Widely regarded as Mostar\'s best café, right by the Stari Most on the Neretva River'),

  // —— banja-luka ——
  place('banja-luka-fine_dining-1', 'banja-luka', 'fine_dining', 'Cova Buraz', 4.5, 'Kralja Petra I Karađorđevića 97, Banja Luka 78000', '전통 그릴 요리 레스토랑.', 'Traditional grill restaurant.'),
  place('banja-luka-bakery-1', 'banja-luka', 'bakery', 'Slasticarna Manja', 4.5, 'Srpska 111, 78000 Banja Luka, Bosnia and Herzegovina', '훌륭한 케이크와 커피로 유명한 반야루카 중심가의 제과 카페', 'Bakery café in central Banja Luka known for excellent cakes and coffee'),
  place('banja-luka-cafe-1', 'banja-luka', 'cafe', 'EkLEkTiK', 4.4, 'Kralja Petra I Karađorđevića 65a, Banja Luka, Bosnia and Herzegovina', '페르하디자 모스크 맞은편의 아늑한 반야루카 카페', 'Charming café in Banja Luka across from the Ferhadija Mosque'),

  // —— travnik ——
  place('travnik-fine_dining-1', 'travnik', 'fine_dining', 'Ćevabdžinica Hari', 4.5, 'Donja čaršija bb, Travnik 72270', '트라브니크 명물 체바피.', 'Travnik\'s famous ćevapi.'),

  place('travnik-bakery-1', 'travnik', 'bakery', 'Konak - Bečka Kafana', 4.3, 'Vezirska bb, 72270 Travnik, Bosnia and Herzegovina', '발칸식 카페 겸 베이커리로 트라브니크에서 오랫동안 사랑받아온 곳', 'Long-loved Balkan café and bakery in Travnik'),
  place('travnik-cafe-1', 'travnik', 'cafe', 'Lutvina Kahva', 4.4, 'Travnik, Bosnia and Herzegovina', '트라브니크에서 평가가 높은 전통 커피 전문점', 'Highly rated traditional coffee spot in Travnik'),
]
