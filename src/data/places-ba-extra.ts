import { place } from './placeFactory'
import type { Place } from '../types'

export const placesBAExtra: Place[] = [
  // —— sarajevo ——
  place('sarajevo-fine_dining-1', 'sarajevo', 'fine_dining', 'Park Prinčeva', 'Iza Hrida 7, Sarajevo 71000', '바슈차르시야 위 언덕의 보스니아 요리 레스토랑. 구시가 전망과 탐부리차 연주.', 'Bosnian restaurant on the hill above Baščaršija with old-town views and live tamburica music.'),
  place('sarajevo-fine_dining-3', 'sarajevo', 'fine_dining', 'Inat Kuća (House of Spite)', 'Veliki Alifakovac 1, Sarajevo 71000', '1895년 강 건너로 옮겨 온 ‘고집의 집’ 레스토랑. 사라예보 사한·보산스키 로나츠.', 'The ‘House of Spite’, moved across the river in 1895; serves sarajevski sahan and Bosnian pot.'),
  place('sarajevo-fine_dining-4', 'sarajevo', 'fine_dining', 'Ćevabdžinica Željo', 'Kundurdžiluk 19, Sarajevo 71000', '구시가의 유명 체바피 집. 솜운 빵·양파·카이마크와 함께.', 'Famous Old Town ćevapi grill, served with somun bread, onions and kajmak.', { image: '/places/sarajevo-fine_dining-4.jpg' }),
  place('sarajevo-bakery-2', 'sarajevo', 'bakery', 'Baklava Dućan', 'Čizmedžiluk 20, Sarajevo', '가지 후스레브 베그 모스크 근처의 바클라바 가게. 사흘 걸려 만드는 잔다르 바클라바가 대표.', 'Baklava shop near the Gazi Husrev-beg Mosque; known for džandar baklava, which takes three days to make.'),
  place('sarajevo-cafe-1', 'sarajevo', 'cafe', 'Zlatna Ribica', 'Kaptol 5, Sarajevo 71000', '동전·사진·엽서로 빼곡히 꾸민 작은 카페 겸 바. 블루스와 초기 로큰롤.', 'Small cafe-bar crammed with coins, photos and postcards, playing blues and early rock’n’roll.', { image: '/places/sarajevo-cafe-1.jpg' }),
  place('sarajevo-cafe-2', 'sarajevo', 'cafe', 'Fabrika Coffee Sarajevo', 'Sarači 32, Sarajevo', '사라예보 로스터리 체인 파브리카의 구시가 지점. 스페셜티 커피.', 'Old Town branch of the Sarajevo roastery chain Fabrika, serving specialty coffee.'),
  place('sarajevo-cafe-4', 'sarajevo', 'cafe', 'Brunch Sa', 'Gazi Husrev-begova 61, Sarajevo', '구시가 중심의 브런치 카페. 에그 로열과 보스니아식 훈제 고기 브런치 접시.', 'Brunch cafe in the Old Town with eggs royale and a Bosnian smoked-meat brunch plate.'),

  // —— mostar ——
  place('mostar-fine_dining-1', 'mostar', 'fine_dining', 'Restoran Hindin Han', 'Jusovina bb, Mostar 88000', '라도볼랴강 변 옛 가옥을 고친 레스토랑. 그릴 고기와 송어 등 보스니아 요리.', 'Restaurant in a restored house on the Radobolja river, serving Bosnian grills and trout.'),
  place('mostar-fine_dining-2', 'mostar', 'fine_dining', 'Tima - Irma', 'Onešćukova bb, Mostar 88000', '구시가의 가족 운영 그릴집. 체바피와 바클라바.', 'Family-run grill house in the Old Town: ćevapi and baklava.'),
  place('mostar-fine_dining-3', 'mostar', 'fine_dining', 'MEGI Le Petit Restaurant - Mostar', 'Kralja Tomislava 29, Mostar 88000', '피자·파스타 등 이탈리아 요리와 고기 요리를 내는 오래된 레스토랑.', 'Long-running restaurant serving pizza, pasta and meat dishes.'),
  place('mostar-bakery-1', 'mostar', 'bakery', 'Aldi 2', 'Mostarskog bataljona (next to Hotel Bristol), Mostar', '호텔 브리스톨 옆의 디저트 카페. 여름 테라스가 넓습니다.', 'Dessert café next to Hotel Bristol with a big summer terrace.'),
  place('mostar-cafe-1', 'mostar', 'cafe', 'Café de Alma', 'Rade Bitange, 88000 Mostar, Bosnia and Herzegovina', '구시가의 작은 로스터리 카페. 원두를 직접 볶아 보스니아 커피를 내리는 법을 보여 줍니다.', 'Small roastery cafe in the Old Town that roasts its own beans and shows how Bosnian coffee is made.'),
  place('mostar-cafe-2', 'mostar', 'cafe', 'Fabrika Coffee', 'Braće Fejića 30, Mostar 88000', '스페셜티 커피 전문점.', 'Specialty coffee shop.'),
  place('mostar-cafe-3', 'mostar', 'cafe', 'Caffe bar Tecó', 'Stjepana Radića 39, Mostar 88000', '대학 캠퍼스와 시립 경기장 근처의 카페 바. 채식 메뉴도 있습니다.', 'Cafe-bar near the university campus and city stadium, with vegetarian options.'),

  // —— banja-luka ——
  place('banja-luka-fine_dining-1', 'banja-luka', 'fine_dining', 'Cova Buraz', 'Krajiških brigada 1, Banja Luka 78000', '그릴 요리 중심의 바 겸 레스토랑. 아침 메뉴도 있습니다.', 'Bar and grill focused on grilled dishes; also serves breakfast.'),
  place('banja-luka-fine_dining-2', 'banja-luka', 'fine_dining', 'Kazamat', 'Teodora Kolokotronisa, Banja Luka 78000', '카스텔 요새 옛 성벽 돌 아치 아래의 레스토랑. 세르비아 전통 그릴 요리와 강 전망 테라스.', 'Restaurant under the stone arches of the Kastel fortress walls, with Serbian grills and a river-view terrace.'),
  place('banja-luka-fine_dining-3', 'banja-luka', 'fine_dining', 'Rotkvica', 'Braće Pantića 6, Banja Luka 78000', '페타르 코치치 공원 근처의 아늑한 레스토랑. 매일 바뀌는 메뉴와 채식 메뉴.', 'Cosy restaurant near Petar Kočić Park with a daily changing menu and vegan options.'),
  place('banja-luka-bakery-1', 'banja-luka', 'bakery', 'Slasticarna Manja', 'Kralja Petra I Karađorđevića 73, Banja Luka', '반야루카 중심가의 오래된 아이스크림·케이크 카페.', 'Long-standing ice cream and cake cafe in central Banja Luka.'),
  place('banja-luka-bakery-2', 'banja-luka', 'bakery', 'Mattino coffee and sweets', 'Sime Matavulja 18, Banja Luka 78000', '케이크와 수제 아이스크림, 커피를 내는 카페 겸 제과점.', 'Cafe and patisserie with cakes, artisanal ice cream and coffee.'),
  place('banja-luka-cafe-1', 'banja-luka', 'cafe', 'EkLEkTiK', 'Kralja Petra I Karađorđevića 65a, Banja Luka, Bosnia and Herzegovina', '페르하디자 모스크 맞은편의 아늑한 반야루카 카페', 'Charming café in Banja Luka across from the Ferhadija Mosque'),
  place('banja-luka-cafe-2', 'banja-luka', 'cafe', 'Hey Joe', 'Petra Rađenovića 2a, Banja Luka 78000', '엠포리움 쇼핑센터 근처 주택가의 바이커 카페 겸 바. 커피·맥주·라키야.', 'Biker-friendly cafe-bar in a residential street near the Emporium centre: coffee, beer and rakija.'),
  place('banja-luka-cafe-3', 'banja-luka', 'cafe', 'Kafeterija 5', 'Slobodana Kusturića 7, Banja Luka 78000', '브르바스강 건너 조용한 주택가의 커피숍. 커피·차·과일 음료.', 'Coffee shop on a quiet street across the Vrbas, with coffee, teas and fruit drinks.'),

  // —— travnik ——
  place('travnik-fine_dining-1', 'travnik', 'fine_dining', 'Ćevabdžinica Hari', 'Donja čaršija bb, Travnik 72270', '40년 가까이 체바피를 구워 온 주인 하리의 집. 트라브니크식 체바피로 유명.', 'Grill run by owner Hari, who has made ćevapi for about 40 years; famous for Travnik-style ćevapi.'),
  place('travnik-fine_dining-2', 'travnik', 'fine_dining', 'Restoran Konoba "Plava voda"', 'Šumeće, Travnik (by the Plava Voda spring)', '플라바 보다 샘 옆 강가의 보스니아 요리 식당. 체바피·케밥·생선을 냅니다.', 'Riverside Bosnian restaurant by the Plava Voda spring, serving ćevapi, kebabs and fish.'),

  place('travnik-bakery-3', 'travnik', 'bakery', 'Royal Cafe & Patisserie', 'Travnik 72270, Bosnia and Herzegovina', '트라브니크의 카페 겸 제과점.', 'Café and pastry shop in Travnik.'),
  place('travnik-cafe-1', 'travnik', 'cafe', 'Lutvina Kahva', 'Šumeće, 72270 Travnik, Bosnia and Herzegovina', '플라바 보다 샘 옆 시냇가의 트라브니크에서 가장 유명한 옛 커피집. 이보 안드리치가 글에 남긴 곳.', 'Travnik’s most famous old coffeehouse, by the stream at the Plava Voda spring; Ivo Andrić wrote about it.', { image: '/places/travnik-cafe-1.jpg' }),
  place('travnik-cafe-2', 'travnik', 'cafe', 'My Place Café Travnik', 'Bosanska 33, Travnik 72270', '트라브니크의 커피 전문점.', 'Coffee shop in Travnik.'),
  place('travnik-cafe-3', 'travnik', 'cafe', 'Cafe Vremeplov', 'Varoš 10, Travnik 72270', '바로슈 지구의 커피 전문점.', 'Coffee shop in the Varoš quarter.'),

  // —— neum ——
  place('neum-fine_dining-1', 'neum', 'fine_dining', 'Restoran Laguna', 'Kralja Tomislava 26, Neum 88390', '바다 가까운 해산물 레스토랑. 굴·해산물 리조토·생선 모둠.', 'Seafood restaurant near the sea: oysters, seafood risotto and fish platters.'),
  place('neum-fine_dining-2', 'neum', 'fine_dining', 'Villa Dom Restoran Pizzeria', 'Primorska 79, Neum', '해변 쪽 지중해식 피자·해산물 레스토랑.', 'Mediterranean pizza and seafood restaurant by the sea.'),
  place('neum-fine_dining-3', 'neum', 'fine_dining', 'Caffe Grill Adriatic', 'Kamenice bb, Neum 88390', '도로변 그릴 레스토랑. 그릴 고기와 생선.', 'Roadside grill restaurant with grilled meat and fish.'),
]
