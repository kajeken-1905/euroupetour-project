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
  place('mostar-fine_dining-2', 'mostar', 'fine_dining', 'Tima - Irma', 4.8, 'Onešćukova bb, Mostar 88000', '모스타르에서 손꼽히는 그릴·바비큐 레스토랑.', 'Highly rated grill and barbecue restaurant in Mostar.', { reviewCount: 3756 }),
  place('mostar-fine_dining-3', 'mostar', 'fine_dining', 'MEGI Le Petit Restaurant - Mostar', 4.7, 'Kralja Tomislava 29, Mostar 88000', '모스타르의 인기 레스토랑.', 'Popular restaurant in Mostar.', { reviewCount: 1773 }),
  place('mostar-bakery-1', 'mostar', 'bakery', 'Caffe Slastičarna Aldi 2', 4.5, 'Mostarskog bataljona, Mostar, Bosnia and Herzegovina', '스타리 모스트 다리에서 가까운 모스타르 구시가지의 인기 제과점', 'Popular bakery-café near the Stari Most bridge in Mostar\'s Old Town'),
  place('mostar-bakery-2', 'mostar', 'bakery', 'Pekara Lučki Most', 4.8, 'Maršala Tita, Mostar 88000', '모스타르의 인기 제과점.', 'Popular bakery in Mostar.', { reviewCount: 248 }),
  place('mostar-bakery-3', 'mostar', 'bakery', 'PEKARA stari most', 4.7, 'Maršala Tita 108, Mostar 88000', '모스타르 구시가지 인근 제과점.', 'Bakery near Mostar\'s Old Town.', { reviewCount: 156 }),
  place('mostar-cafe-1', 'mostar', 'cafe', 'Café de Alma', 4.5, 'Stari Most, Mostar, Bosnia and Herzegovina', '네레트바 강변 스타리 모스트 바로 옆에 위치한 모스타르 최고의 카페', 'Widely regarded as Mostar\'s best café, right by the Stari Most on the Neretva River'),
  place('mostar-cafe-2', 'mostar', 'cafe', 'Fabrika Coffee', 4.7, 'Braće Fejića 30, Mostar 88000', '스페셜티 커피 전문점.', 'Specialty coffee shop.', { reviewCount: 1438 }),
  place('mostar-cafe-3', 'mostar', 'cafe', 'Caffe bar Tecó', 4.7, 'Stjepana Radića 39, Mostar 88000', '모스타르의 인기 카페.', 'Popular café in Mostar.', { reviewCount: 1048 }),

  // —— banja-luka ——
  place('banja-luka-fine_dining-1', 'banja-luka', 'fine_dining', 'Cova Buraz', 4.5, 'Kralja Petra I Karađorđevića 97, Banja Luka 78000', '전통 그릴 요리 레스토랑.', 'Traditional grill restaurant.'),
  place('banja-luka-fine_dining-2', 'banja-luka', 'fine_dining', 'Kazamat', 4.6, 'Teodora Kolokotronisa, Banja Luka 78000', '카스텔 요새 내 동유럽 요리 레스토랑.', 'Eastern European restaurant inside the Kastel fortress.', { reviewCount: 3957 }),
  place('banja-luka-fine_dining-3', 'banja-luka', 'fine_dining', 'Rotkvica', 4.7, 'Braće Pantića 6, Banja Luka 78000', '반야루카의 인기 레스토랑.', 'Popular restaurant in Banja Luka.', { reviewCount: 1162 }),
  place('banja-luka-bakery-1', 'banja-luka', 'bakery', 'Slasticarna Manja', 4.5, 'Srpska 111, 78000 Banja Luka, Bosnia and Herzegovina', '훌륭한 케이크와 커피로 유명한 반야루카 중심가의 제과 카페', 'Bakery café in central Banja Luka known for excellent cakes and coffee'),
  place('banja-luka-bakery-2', 'banja-luka', 'bakery', 'Mattino coffee and sweets', 4.7, 'Sime Matavulja 18, Banja Luka 78000', '패스트리 전문점.', 'Pastry specialist.', { reviewCount: 351 }),
  place('banja-luka-bakery-3', 'banja-luka', 'bakery', 'Slatkica', 4.7, 'Majke Jugovića 44, Banja Luka 78000', '디저트 전문점.', 'Dessert specialist.', { reviewCount: 120 }),
  place('banja-luka-cafe-1', 'banja-luka', 'cafe', 'EkLEkTiK', 4.4, 'Kralja Petra I Karađorđevića 65a, Banja Luka, Bosnia and Herzegovina', '페르하디자 모스크 맞은편의 아늑한 반야루카 카페', 'Charming café in Banja Luka across from the Ferhadija Mosque'),
  place('banja-luka-cafe-2', 'banja-luka', 'cafe', 'Hey Joe', 4.9, 'Petra Rađenovića 2a, Banja Luka 78000', '반야루카의 인기 카페.', 'Popular café in Banja Luka.', { reviewCount: 712 }),
  place('banja-luka-cafe-3', 'banja-luka', 'cafe', 'Kafeterija 5', 4.6, 'Slobodana Kusturića 7, Banja Luka 78000', '반야루카의 카페.', 'Café in Banja Luka.', { reviewCount: 1530 }),

  // —— travnik ——
  place('travnik-fine_dining-1', 'travnik', 'fine_dining', 'Ćevabdžinica Hari', 4.5, 'Donja čaršija bb, Travnik 72270', '트라브니크 명물 체바피.', 'Travnik\'s famous ćevapi.'),
  place('travnik-fine_dining-2', 'travnik', 'fine_dining', 'Restoran Konoba "Plava voda"', 4.2, 'Travnik 72270, Bosnia and Herzegovina', '트라브니크의 명소인 플라바 보다 샘 옆의 유서 깊은 레스토랑.', 'Historic restaurant beside Travnik\'s landmark Plava Voda spring.', { reviewCount: 3776 }),
  place('travnik-fine_dining-3', 'travnik', 'fine_dining', 'Gusto Restaurant Travnik', 4.9, 'Bosanska bb, Travnik 72270', '이탈리안 레스토랑.', 'Italian restaurant.', { reviewCount: 527 }),

  place('travnik-bakery-1', 'travnik', 'bakery', 'Konak - Bečka Kafana', 4.3, 'Vezirska bb, 72270 Travnik, Bosnia and Herzegovina', '발칸식 카페 겸 베이커리로 트라브니크에서 오랫동안 사랑받아온 곳', 'Long-loved Balkan café and bakery in Travnik'),
  place('travnik-bakery-2', 'travnik', 'bakery', 'Pekara ABA Travnik', 4.5, 'Bosanska 117, Travnik 72270', '트라브니크의 제과점.', 'Bakery in Travnik.', { reviewCount: 132 }),
  place('travnik-bakery-3', 'travnik', 'bakery', 'Royal Cafe & Patisserie', 4.4, 'Travnik 72270, Bosnia and Herzegovina', '카페 겸 제과점.', 'Café and patisserie.', { reviewCount: 598 }),
  place('travnik-cafe-1', 'travnik', 'cafe', 'Lutvina Kahva', 4.4, 'Travnik, Bosnia and Herzegovina', '트라브니크에서 평가가 높은 전통 커피 전문점', 'Highly rated traditional coffee spot in Travnik'),
  place('travnik-cafe-2', 'travnik', 'cafe', 'My Place Café Travnik', 4.6, 'Bosanska 33, Travnik 72270', '트라브니크의 커피 전문점.', 'Coffee shop in Travnik.', { reviewCount: 912 }),
  place('travnik-cafe-3', 'travnik', 'cafe', 'Cafe Vremeplov', 4.8, 'Varoš 10, Travnik 72270', '바로슈 지구의 커피 전문점.', 'Coffee shop in the Varoš quarter.', { reviewCount: 364 }),
]
