import { place } from './placeFactory'
import type { Place } from '../types'

export const placesSKExtra: Place[] = [
  // —— bratislava ——
  place('bratislava-fine_dining-1', 'bratislava', 'fine_dining', 'Albrecht', 'Mudroňova 4237/82, 811 03 Bratislava, Slovakia', '호텔 알브레히트 내에 위치한 브라티슬라바의 파인다이닝, 계절 메뉴를 선보임', 'Fine-dining restaurant inside Hotel Albrecht in Bratislava, serving a seasonal menu', { image: '/places/bratislava-fine_dining-1.jpg' }),
  place('bratislava-fine_dining-2', 'bratislava', 'fine_dining', 'UFO Restaurant', 'Most SNP, 851 01 Bratislava, Slovakia', 'SNP 다리 위 전망대(UFO)의 레스토랑. 도시 전경이 보입니다.', 'Restaurant in the UFO observation deck on the SNP Bridge, with city views.', { image: '/places/bratislava-fine_dining-2.jpg' }),
  place('bratislava-fine_dining-4', 'bratislava', 'fine_dining', 'Slovak Pub', 'Obchodná 62, 811 06 Bratislava, Slovakia', '오브호드나 거리의 슬로바키아 전통 요리 가스트로펍. 마늘 수프가 있습니다.', 'Traditional Slovak gastropub on Obchodná street serving garlic soup.', { image: '/places/bratislava-fine_dining-4.jpg' }),
  place('bratislava-bakery-1', 'bratislava', 'bakery', 'Fleur bakery', 'Štúrova 14/8, 811 02 Bratislava, Slovakia', '슈투로바 거리의 빵집.', 'Bakery on Štúrova street.'),
  place('bratislava-bakery-2', 'bratislava', 'bakery', 'KRUH remeselná pekáreň', 'Vajnorská 21, 831 03 Bratislava, Slovakia', '사워도우를 굽는 바이노르스카 거리의 수제 빵집.', 'Artisan bakery on Vajnorská street baking sourdough.'),
  place('bratislava-bakery-3', 'bratislava', 'bakery', 'Pasteleria', 'Panská 246, 811 01 Bratislava, Slovakia', '구시가 판스카 거리의 디저트 가게. 케이크와 페이스트리가 있습니다.', 'Dessert shop on Panská street in the Old Town with cakes and pastries.'),
  place('bratislava-cafe-1', 'bratislava', 'cafe', 'Kauka', 'Veterná 642/8, 811 03 Bratislava, Slovakia', '베테르나 거리의 커피숍.', 'Coffee shop on Veterná street in the Old Town.'),
  place('bratislava-cafe-2', 'bratislava', 'cafe', 'DRAK&FINCH Winebar Coffeeshop', 'Mikulášska 6652/1b, 811 01 Bratislava, Slovakia', '미쿨라시스카 거리의 와인바 겸 커피숍', 'Wine bar and coffeeshop on Mikulášska street in the Old Town'),

  // —— kosice ——
  place('kosice-fine_dining-1', 'kosice', 'fine_dining', 'Villa Regia', 'Dominikánske námestie 3, 040 01 Košice, Slovakia', '코시체 도미니칸 광장에 위치한 동슬로바키아 전통 요리 전문 레스토랑', 'Restaurant on Dominican Square serving traditional Eastern Slovak dishes in the heart of Košice'),
  place('kosice-fine_dining-2', 'kosice', 'fine_dining', 'La Hacienda', 'Mäsiarska 430/8, 040 01 Košice, Slovakia', '마시아르스카 거리의 레스토랑.', 'Restaurant on Mäsiarska street.'),
  place('kosice-fine_dining-3', 'kosice', 'fine_dining', 'Republika Východu', 'Hlavná 108/31, 040 01 Košice, Slovakia', '흘라브나 거리의 레스토랑.', 'Restaurant on Hlavná street in Košice.'),
  place('kosice-fine_dining-4', 'kosice', 'fine_dining', 'Contro Restaurant & Café', 'Hlavná 45, 040 01 Košice, Slovakia', '흘라브나 거리의 레스토랑 겸 카페', 'Restaurant and cafe on Hlavná street in Košice'),
  place('kosice-fine_dining-5', 'kosice', 'fine_dining', 'karczma MLYN', 'Hlavná 46/86, 040 01 Košice, Slovakia', '흘라브나 거리의 전통 폴란드·동유럽식 선술집 레스토랑', 'Traditional Polish/Eastern European-style tavern restaurant on Hlavná street'),
  place('kosice-bakery-1', 'kosice', 'bakery', 'Domáca Pekáreň', 'Alvinczyho 6, 040 01 Košice, Slovakia', '장작 오븐으로 빵과 페이스트리를 굽는 코시체의 빵집.', 'Košice bakery with wood-fired bread and pastries.'),
  place('kosice-bakery-2', 'kosice', 'bakery', 'BENZE Košice', 'Františkánska 1, 040 01 Košice, Slovakia', '프란티슈칸스카 거리의 브런치·베이커리 카페', 'Breakfast and bakery cafe on Františkánska street in Košice'),
  place('kosice-bakery-3', 'kosice', 'bakery', 'Cinnamon Dream Bakery', 'Poštová 39/2, 040 01 Košice, Slovakia', '포슈토바 거리의 베이커리', 'Bakery on Poštová street in Košice'),
  place('kosice-bakery-4', 'kosice', 'bakery', "Jacob's bakery", 'Mlynská 872/25, 040 01 Košice, Slovakia', '믈린스카 거리의 베이커리', 'Bakery on Mlynská street in Košice'),
  place('kosice-cafe-1', 'kosice', 'cafe', 'Slavia', 'Hlavná 63, 040 01 Košice, Slovakia', '1900년 문을 연 코시체의 아르누보 카페.', 'Košice Art Nouveau café founded in 1900.', { image: '/places/kosice-cafe-1.jpg' }),
  place('kosice-cafe-2', 'kosice', 'cafe', 'Caffé TRIESTE', 'Uršulínska 2, 040 01 Košice, Slovakia', '우르술린스카 거리의 커피 가게.', 'Coffee shop on Uršulínska street.'),
  place('kosice-cafe-3', 'kosice', 'cafe', 'Šálka Kávy', 'Hviezdoslavova 1003/2, 040 01 Košice, Slovakia', '타자기·피아노 같은 옛 소품으로 꾸민 코시체 중심가의 카페. 아침 메뉴가 있습니다.', 'Café in central Košice decorated with vintage typewriters and pianos, serving breakfast.'),
  place('kosice-cafe-4', 'kosice', 'cafe', 'Melody - fine roastery', 'Zvonárska 149/12, 040 01 Košice, Slovakia', '즈보나르스카 거리의 스페셜티 에스프레소 바', 'Specialty espresso bar on Zvonárska street in Košice'),
  place('kosice-korean-1', 'kosice', 'korean', 'K-Wave Korean Bistro', 'Žižkova 1873/4, 040 01 Košice, Slovakia', '지슈코바 거리의 한식 비스트로.', 'Korean bistro on Žižkova street.'),

  // —— poprad ——
  place('poprad-fine_dining-2', 'poprad', 'fine_dining', 'Dobré časy', 'Levočská 211/2, 058 01 Poprad, Slovakia', '슬로바키아 전통 요리를 내는 맥줏집 식당. 야외 비어 가든이 넓습니다.', 'Beer house serving Slovak classics, with a big outdoor beer garden.'),
  place('poprad-fine_dining-3', 'poprad', 'fine_dining', 'U Septima', 'Velické námestie 1189, 058 01 Poprad, Slovakia', '루이 드 퓌네스 영화 속 인물에서 이름을 딴 1930년대풍 레스토랑. 프랑스풍 요리와 피자를 냅니다.', '1930s-style restaurant named after a Louis de Funès film character, serving French-inflected dishes and pizza.'),
  place('poprad-bakery-1', 'poprad', 'bakery', 'Betka\'s Bakery', 'Námestie sv. Egídia 124, Forum Poprad, 058 01 Poprad, Slovakia', '포룸 쇼핑센터 안의 빵집. 케이크와 페이스트리가 있습니다.', 'Bakery inside the Forum shopping centre with cakes and pastries.'),
  place('poprad-cafe-1', 'poprad', 'cafe', 'Café La Fée', 'Námestie sv. Egídia 114, 058 01 Poprad, Slovakia', '프랑스풍 빈티지 카페 겸 디저트 공방. 저녁에는 프랑스 와인을 내고 여름 테라스가 있습니다.', 'French-style vintage café and pastry workshop; French wine in the evening and a summer terrace.'),
  place('poprad-cafe-2', 'poprad', 'cafe', 'FELKA café & brew bar', 'Na letisko 2089/19, 058 01 Poprad, Slovakia', '나 레티스코 거리의 카페 겸 브루 바.', 'Café and brew bar on Na letisko street.'),
  place('poprad-cafe-3', 'poprad', 'cafe', 'Espresso Bar PP - Speciality Coffee', 'Sobotské námestie 1734/14, 058 01 Poprad, Slovakia', '소보트스케 광장의 스페셜티 에스프레소 바', 'Specialty espresso bar on Sobotské námestie square in Poprad'),

  // —— banska-bystrica ——
  place('banska-bystrica-fine_dining-2', 'banska-bystrica', 'fine_dining', 'Bernardov Dvor', 'Dolná 169/36, 974 01 Banská Bystrica, Slovakia', '돌나 거리의 레스토랑.', 'Restaurant on Dolná street in Banská Bystrica.'),
  place('banska-bystrica-fine_dining-3', 'banska-bystrica', 'fine_dining', 'STREET FOODIE Banská Bystrica', 'Dolná 52, 974 01 Banská Bystrica, Slovakia', '돌나 거리의 레스토랑.', 'Restaurant on Dolná street in Banská Bystrica.'),
  place('banska-bystrica-bakery-2', 'banska-bystrica', 'bakery', 'Chlieb a láska - Stará tržnica BB', 'Námestie Š. Moysesa 29, 974 01 Banská Bystrica, Slovakia', '옛 시장 건물의 베이커리·브런치 카페. 사워도우와 에그 베네딕트가 인기입니다.', 'Bakery and breakfast café in the old market hall, known for sourdough and eggs Benedict.'),
  place('banska-bystrica-cafe-1', 'banska-bystrica', 'cafe', 'Beniczky Cafe & Wine Bar', 'Námestie SNP 16, 974 01 Banská Bystrica, Slovakia', '훌륭한 커피와 케이크, 다양한 음료로 호평받는 반스카 비스트리차의 카페 겸 와인바', 'Banská Bystrica cafe and wine bar praised for excellent coffee, cakes and drink selection'),
  place('banska-bystrica-cafe-2', 'banska-bystrica', 'cafe', 'VÝKLAD | káva & viac', 'Národná ulica 6, 974 01 Banská Bystrica, Slovakia', '나로드나 거리의 커피숍.', 'Coffee shop on Národná ulica.'),
  place('banska-bystrica-cafe-3', 'banska-bystrica', 'cafe', 'The Fleck coffee roasters', 'Martina Rázusa 1509/22, 974 01 Banská Bystrica, Slovakia', '마르티나 라주사 거리의 로스터리 카페.', 'Roastery café on Martina Rázusa street.'),

  // —— trencin ——
  place('trencin-fine_dining-1', 'trencin', 'fine_dining', 'Pod hradom', 'Matúšova 12/68, 911 01 Trenčín, Slovakia', '호텔 포드 흐라돔 안의 레스토랑. 와인과 위스키 목록이 좋습니다.', 'Restaurant inside Hotel Pod Hradom with a strong wine and whisky list.'),
  place('trencin-fine_dining-2', 'trencin', 'fine_dining', 'Restaurant and brewery Lanius', 'Mierové námestie 20, 911 01 Trenčín, Slovakia', '미에로베 광장의 레스토랑 겸 양조장.', 'Restaurant and brewery on Mierové námestie in Trenčín.'),
  place('trencin-fine_dining-3', 'trencin', 'fine_dining', 'Mestsky hostinec', 'Hviezdoslavova 137/8, 911 01 Trenčín, Slovakia', '흐비에즈도슬라보바 거리의 전통 선술집 레스토랑', 'Traditional tavern-style restaurant on Hviezdoslavova street in Trenčín'),

  place('trencin-bakery-2', 'trencin', 'bakery', 'Mgusto Cukráreň', 'Mierové námestie 28/28, 911 01 Trenčín, Slovakia', '미에로베 광장의 케이크 전문점', 'Cake specialty shop on Mierové námestie square in Trenčín'),
  place('trencin-cafe-1', 'trencin', 'cafe', 'Café Sládkovič', 'Mierové námestie 33/33, 911 01 Trenčín, Slovakia', '시인 얀 슬라드코비치를 기리는 방들로 꾸민 박물관 같은 카페. 커피와 케이크가 좋습니다.', 'Museum-like café with rooms honouring the poet Ján Sládkovič, known for its coffee and cakes.'),
  place('trencin-cafe-2', 'trencin', 'cafe', 'Coffee Lab - Coffee Shop & Roastery', 'Štúrovo námestie 5, 911 01 Trenčín, Slovakia', '슈투로보 광장의 스페셜티 에스프레소 바 겸 로스터리', 'Specialty espresso bar and roastery on Štúrovo námestie square in Trenčín'),
  place('trencin-cafe-3', 'trencin', 'cafe', 'CoffeeSheep', 'Matúšova 22, 911 01 Trenčín, Slovakia', '마투쇼바 거리의 카페.', 'Café on Matúšova street in Trenčín.'),
]
