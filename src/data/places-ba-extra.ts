import { place } from './placeFactory'
import type { Place } from '../types'

export const placesBAExtra: Place[] = [
  // —— sarajevo ——
  place('sarajevo-fine_dining-1', 'sarajevo', 'fine_dining', 'Park Prinčeva', 'Iza Hrida 7, Sarajevo 71000', '전망 보스니아 다이닝.', 'Viewpoint Bosnian dining.'),
  place('sarajevo-fine_dining-3', 'sarajevo', 'fine_dining', 'Inat Kuća (House of Spite)', 'Veliki Alifakovac 1, Sarajevo 71000', '전통 보스니아 가정식.', 'Traditional Bosnian home cooking.'),
  place('sarajevo-fine_dining-4', 'sarajevo', 'fine_dining', 'Ćevabdžinica Željo', 'Kundurdžiluk 19, Sarajevo 71000', '체바피 클래식.', 'Ćevapi classic.', { image: '/places/sarajevo-fine_dining-4.jpg' }),
  place('sarajevo-bakery-1', 'sarajevo', 'bakery', 'Pita Ispod Sača - Kod Seje', 'Koturova, Sarajevo 71000', '사치 화덕 피타.', 'Pita baked under a sač dome.'),
  place('sarajevo-bakery-2', 'sarajevo', 'bakery', 'Baklava Dućan', 'Čizmedžiluk 20, Sarajevo', '바클라바 전문점.', 'Baklava specialist.'),
  place('sarajevo-bakery-3', 'sarajevo', 'bakery', 'Pekara Poričanin', 'Safvet-bega Bašagića 16, Sarajevo', '구시가 인근 베이커리.', 'Bakery near the old town.'),
  place('sarajevo-cafe-1', 'sarajevo', 'cafe', 'Zlatna Ribica', 'Kaptol 5, Sarajevo 71000', '클래식 카페 겸 바.', 'Classic café and bar.', { image: '/places/sarajevo-cafe-1.jpg' }),
  place('sarajevo-cafe-2', 'sarajevo', 'cafe', 'Fabrika Coffee Sarajevo', 'Sarači 32, Sarajevo', '스페셜티 커피.', 'Specialty coffee.'),
  place('sarajevo-cafe-3', 'sarajevo', 'cafe', 'Bašča', 'Baščaršija 18A, Sarajevo', '바슈차르시야 시장가 카페.', 'Café on Baščaršija bazaar street.'),
  place('sarajevo-cafe-4', 'sarajevo', 'cafe', 'Brunch Sa', 'Gazi Husrev-begova 61, Sarajevo', '센타르 브런치 카페.', 'Brunch café in Centar.'),

  // —— mostar ——
  place('mostar-fine_dining-1', 'mostar', 'fine_dining', 'Restoran Hindin Han', 'Jusovina bb, Mostar 88000', '네레트바 강변의 전통 보스니아 요리.', 'Traditional Bosnian cuisine on the Neretva River.'),
  place('mostar-fine_dining-2', 'mostar', 'fine_dining', 'Tima - Irma', 'Onešćukova bb, Mostar 88000', '모스타르에서 손꼽히는 그릴·바비큐 레스토랑.', 'Highly rated grill and barbecue restaurant in Mostar.'),
  place('mostar-fine_dining-3', 'mostar', 'fine_dining', 'MEGI Le Petit Restaurant - Mostar', 'Kralja Tomislava 29, Mostar 88000', '모스타르의 인기 레스토랑.', 'Popular restaurant in Mostar.'),
  place('mostar-bakery-1', 'mostar', 'bakery', 'Caffe Slastičarna Aldi 2', 'Mostarskog bataljona, Mostar, Bosnia and Herzegovina', '스타리 모스트 다리에서 가까운 모스타르 구시가지의 인기 제과점', 'Popular bakery-café near the Stari Most bridge in Mostar\'s Old Town'),
  place('mostar-bakery-2', 'mostar', 'bakery', 'Pekara Lučki Most', 'Maršala Tita, Mostar 88000', '모스타르의 인기 제과점.', 'Popular bakery in Mostar.'),
  place('mostar-bakery-3', 'mostar', 'bakery', 'PEKARA stari most', 'Maršala Tita 108, Mostar 88000', '모스타르 구시가지 인근 제과점.', 'Bakery near Mostar\'s Old Town.'),
  place('mostar-cafe-1', 'mostar', 'cafe', 'Café de Alma', 'Rade Bitange, 88000 Mostar, Bosnia and Herzegovina', '네레트바 강변 스타리 모스트 바로 옆에 위치한 모스타르 최고의 카페', 'Widely regarded as Mostar\'s best café, right by the Stari Most on the Neretva River'),
  place('mostar-cafe-2', 'mostar', 'cafe', 'Fabrika Coffee', 'Braće Fejića 30, Mostar 88000', '스페셜티 커피 전문점.', 'Specialty coffee shop.'),
  place('mostar-cafe-3', 'mostar', 'cafe', 'Caffe bar Tecó', 'Stjepana Radića 39, Mostar 88000', '모스타르의 인기 카페.', 'Popular café in Mostar.'),

  // —— banja-luka ——
  place('banja-luka-fine_dining-1', 'banja-luka', 'fine_dining', 'Cova Buraz', 'Kralja Petra I Karađorđevića 97, Banja Luka 78000', '전통 그릴 요리 레스토랑.', 'Traditional grill restaurant.'),
  place('banja-luka-fine_dining-2', 'banja-luka', 'fine_dining', 'Kazamat', 'Teodora Kolokotronisa, Banja Luka 78000', '카스텔 요새 내 동유럽 요리 레스토랑.', 'Eastern European restaurant inside the Kastel fortress.'),
  place('banja-luka-fine_dining-3', 'banja-luka', 'fine_dining', 'Rotkvica', 'Braće Pantića 6, Banja Luka 78000', '반야루카의 인기 레스토랑.', 'Popular restaurant in Banja Luka.'),
  place('banja-luka-bakery-1', 'banja-luka', 'bakery', 'Slasticarna Manja', 'Srpska 111, 78000 Banja Luka, Bosnia and Herzegovina', '훌륭한 케이크와 커피로 유명한 반야루카 중심가의 제과 카페', 'Bakery café in central Banja Luka known for excellent cakes and coffee'),
  place('banja-luka-bakery-2', 'banja-luka', 'bakery', 'Mattino coffee and sweets', 'Sime Matavulja 18, Banja Luka 78000', '패스트리 전문점.', 'Pastry specialist.'),
  place('banja-luka-bakery-3', 'banja-luka', 'bakery', 'Slatkica', 'Majke Jugovića 44, Banja Luka 78000', '디저트 전문점.', 'Dessert specialist.'),
  place('banja-luka-cafe-1', 'banja-luka', 'cafe', 'EkLEkTiK', 'Kralja Petra I Karađorđevića 65a, Banja Luka, Bosnia and Herzegovina', '페르하디자 모스크 맞은편의 아늑한 반야루카 카페', 'Charming café in Banja Luka across from the Ferhadija Mosque'),
  place('banja-luka-cafe-2', 'banja-luka', 'cafe', 'Hey Joe', 'Petra Rađenovića 2a, Banja Luka 78000', '반야루카의 인기 카페.', 'Popular café in Banja Luka.'),
  place('banja-luka-cafe-3', 'banja-luka', 'cafe', 'Kafeterija 5', 'Slobodana Kusturića 7, Banja Luka 78000', '반야루카의 카페.', 'Café in Banja Luka.'),

  // —— travnik ——
  place('travnik-fine_dining-1', 'travnik', 'fine_dining', 'Ćevabdžinica Hari', 'Donja čaršija bb, Travnik 72270', '트라브니크 명물 체바피.', 'Travnik\'s famous ćevapi.'),
  place('travnik-fine_dining-2', 'travnik', 'fine_dining', 'Restoran Konoba "Plava voda"', 'Travnik 72270, Bosnia and Herzegovina', '트라브니크의 명소인 플라바 보다 샘 옆의 유서 깊은 레스토랑.', 'Historic restaurant beside Travnik\'s landmark Plava Voda spring.'),
  place('travnik-fine_dining-3', 'travnik', 'fine_dining', 'Gusto Restaurant Travnik', 'Bosanska bb, Travnik 72270', '이탈리안 레스토랑.', 'Italian restaurant.'),

  place('travnik-bakery-1', 'travnik', 'bakery', 'Konak - Bečka Kafana', 'Vezirska bb, 72270 Travnik, Bosnia and Herzegovina', '발칸식 카페 겸 베이커리로 트라브니크에서 오랫동안 사랑받아온 곳', 'Long-loved Balkan café and bakery in Travnik'),
  place('travnik-bakery-2', 'travnik', 'bakery', 'Pekara ABA Travnik', 'Bosanska 117, Travnik 72270', '트라브니크의 제과점.', 'Bakery in Travnik.'),
  place('travnik-bakery-3', 'travnik', 'bakery', 'Royal Cafe & Patisserie', 'Travnik 72270, Bosnia and Herzegovina', '카페 겸 제과점.', 'Café and patisserie.'),
  place('travnik-cafe-1', 'travnik', 'cafe', 'Lutvina Kahva', 'Šumeće, 72270 Travnik, Bosnia and Herzegovina', '트라브니크에서 평가가 높은 전통 커피 전문점', 'Highly rated traditional coffee spot in Travnik', { image: '/places/travnik-cafe-1.jpg' }),
  place('travnik-cafe-2', 'travnik', 'cafe', 'My Place Café Travnik', 'Bosanska 33, Travnik 72270', '트라브니크의 커피 전문점.', 'Coffee shop in Travnik.'),
  place('travnik-cafe-3', 'travnik', 'cafe', 'Cafe Vremeplov', 'Varoš 10, Travnik 72270', '바로슈 지구의 커피 전문점.', 'Coffee shop in the Varoš quarter.'),

  // —— neum ——
  place('neum-fine_dining-1', 'neum', 'fine_dining', 'Restoran Laguna', 'Kralja Tomislava 26, Neum 88390', '네움 1위 시푸드 레스토랑. 오징어찜과 리조토가 인기입니다.', "Neum's top-rated seafood restaurant, known for stuffed calamari and risotto."),
  place('neum-fine_dining-2', 'neum', 'fine_dining', 'Villa Dom Restoran Pizzeria', 'Primorska 79, Neum', '해변 전망의 피자·시푸드 레스토랑입니다.', 'Pizza and seafood restaurant with beach views.'),
  place('neum-fine_dining-3', 'neum', 'fine_dining', 'Caffe Grill Adriatic', 'Kamenice bb, Neum 88390', '신선한 해산물과 아드리아식 그릴 요리를 내는 인기 그릴 레스토랑입니다.', 'Popular grill restaurant serving fresh seafood and Adriatic-style grilled dishes.'),
]
