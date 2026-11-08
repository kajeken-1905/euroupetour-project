import { place } from './placeFactory'
import type { Place } from '../types'

export const placesESExtra: Place[] = [
  // —— madrid ——
  place('madrid-fine_dining-1', 'madrid', 'fine_dining', 'DiverXO', 'Calle del Padre Damián 23, 28036 Madrid', '셰프 다비드 무뇨스의 미쉐린 3스타 창작 요리 레스토랑. 화~금요일에 엽니다.', 'Three-Michelin-star creative restaurant of chef David Muñoz; Tuesday to Friday.', { michelin: 'star3', image: '/places/madrid-fine_dining-1.jpg' }),
  place('madrid-fine_dining-2', 'madrid', 'fine_dining', 'Botín', 'Calle de Cuchilleros 17, 28005 Madrid, Spain', '마요르 광장 옆의 오래된 식당. 장작 화덕에서 구운 새끼 돼지와 양고기를 냅니다.', 'Long-established restaurant by the Plaza Mayor serving suckling pig and lamb roasted in a wood-fired oven.', { image: '/places/madrid-fine_dining-2.jpg' }),
  place('madrid-fine_dining-3', 'madrid', 'fine_dining', 'StreetXO', 'Calle de Serrano 47, 28001 Madrid, Spain', '엘 코르테 잉글레스 세라노점 꼭대기 층의 다비드 무뇨스 캐주얼 레스토랑. 아시아 퓨전 요리를 냅니다.', 'David Muñoz’s casual restaurant on the top floor of El Corte Inglés Serrano, serving Asian fusion.', { image: '/places/madrid-fine_dining-3.jpg' }),
  place('madrid-fine_dining-4', 'madrid', 'fine_dining', 'Lakasa', 'Plaza del Descubridor Diego de Ordás 1, 28003 Madrid', '참베리의 계절 스페인 요리 레스토랑. 하프 사이즈 주문이 되고 미쉐린 가이드에 실려 있습니다.', 'Seasonal Spanish restaurant in Chamberí with half portions, listed in the Michelin Guide.'),
  place('madrid-fine_dining-5', 'madrid', 'fine_dining', 'Casa Lucio', 'Calle de la Cava Baja 35, 28005 Madrid, Spain', '라 라티나 카바 바하 거리의 마드리드 전통 식당. 우에보스 로토스(깨뜨린 달걀 감자 요리)로 알려져 있습니다.', 'Traditional Madrid restaurant on Cava Baja in La Latina, known for huevos rotos.', { image: '/places/madrid-fine_dining-5.jpg' }),
  place('madrid-bakery-2', 'madrid', 'bakery', 'Moulin Chocolat', 'Calle de Alcalá 77, 28009 Madrid', '레티로 근처의 파티스리. 셰프 리카르도 벨레스가 만드는 마카롱과 케이크가 있습니다.', 'Pâtisserie near the Retiro with macarons and cakes by chef Ricardo Vélez.'),
  place('madrid-bakery-3', 'madrid', 'bakery', 'Panic', 'Calle del Conde Duque 13, 28015 Madrid, Spain', '콘데 두케의 장인 빵집. 천천히 발효한 유기농 빵을 굽고 오후엔 일찍 떨어집니다.', 'Artisan bakery in Conde Duque baking slow-fermented organic loaves that often sell out by early afternoon.'),
  place('madrid-bakery-4', 'madrid', 'bakery', 'La Duquesita', 'Calle de Fernando VI 2, 28004 Madrid, Spain', '1914년 문을 연 살레사스 지구의 파티스리. 옛 진열장이 남아 있고 크루아상과 로스콘이 있습니다.', 'Salesas pâtisserie opened in 1914, with original counters and mirrors, croissants and roscón.'),
  place('madrid-bakery-5', 'madrid', 'bakery', 'Alma Nomad Bakery', 'Calle de Santa Feliciana 10, 28010 Madrid, Spain', '참베리 지구의 유기농 사워도우 빵집. 속을 채운 크루아상과 데니시가 있고 월요일은 쉽니다.', 'Organic sourdough bakery in Chamberí with filled croissants and danishes; closed Mondays.'),
  place('madrid-bakery-6', 'madrid', 'bakery', 'La Mallorquina', 'Puerta del Sol 8, 28013 Madrid, Spain', '1894년 마요르카 출신 세 사람이 연 솔 광장의 제과점. 크림이나 초콜릿을 채운 나폴리타나와 엔사이마다가 유명합니다.', 'Puerta del Sol pastry shop founded in 1894 by three Majorcans, famous for cream- or chocolate-filled napolitanas and ensaïmadas.', { image: '/places/madrid-bakery-6.jpg' }),
  place('madrid-cafe-1', 'madrid', 'cafe', 'Café Federal', 'Plaza del Conde de Barajas 3, 28005 Madrid, Spain', '라 라티나 지구의 브런치 카페. 그늘진 테라스가 있고 노트북 작업하기 좋습니다.', 'Brunch café in La Latina with a shaded terrace, good for laptop work.'),
  place('madrid-cafe-2', 'madrid', 'cafe', 'HanSo Café', 'Corredera Baja de San Pablo 51, 28004 Madrid', '말라사냐의 카페. 스페셜티 필터 커피와 브런치가 있습니다.', 'Malasaña café with specialty filter coffee and brunch.'),
  place('madrid-cafe-3', 'madrid', 'cafe', 'Café Comercial', 'Glorieta de Bilbao 7, 28004 Madrid, Spain', '1887년 문을 연 빌바오 광장의 카페 레스토랑. 2017년 다시 열었고 아침부터 밤까지 엽니다.', 'Café-restaurant on the Glorieta de Bilbao, opened in 1887 and reopened in 2017; open from breakfast to late.', { image: '/places/madrid-cafe-3.jpg' }),
  place('madrid-cafe-4', 'madrid', 'cafe', 'Toma Café', 'Calle de la Palma 49, 28004 Madrid, Spain', '말라사냐의 작은 스페셜티 커피숍. 원두를 직접 볶고 홈메이드 케이크가 있습니다.', 'Small Malasaña specialty coffee shop roasting its own beans, with homemade cakes.'),
  place('madrid-cafe-5', 'madrid', 'cafe', 'Wilko', 'Calle de Fernández de los Ríos 40, 28015 Madrid, Spain', '참베리 지구의 스페셜티 커피 카페(2022년 개업). 디저트와 아침 메뉴가 있습니다.', 'Specialty coffee café in Chamberí (opened 2022) with desserts and breakfast.'),
  place('madrid-korean-1', 'madrid', 'korean', 'Maru', 'Calle de la Reina 37, 28004 Madrid', '추에카의 한식당. 불고기·돌솥비빔밥·잡채가 있습니다.', 'Korean restaurant in Chueca with bulgogi, dolsot bibimbap and japchae.'),
  place('madrid-korean-3', 'madrid', 'korean', 'Qiqihary Chueca Korean BBQ', 'Calle de la Reina 27, 28004 Madrid, Spain', '그란비아 근처의 한국식 바비큐 뷔페. 테이블마다 그릴이 있습니다.', 'Korean barbecue buffet near Gran Vía with a grill at every table.'),
  place('madrid-korean-5', 'madrid', 'korean', 'Izakaya Han', 'Calle de San Bartolomé 10, 28004 Madrid, Spain', '추에카 근처의 한식·일식 이자카야. 불고기와 스시가 있고 예약하는 편이 좋습니다.', 'Korean-Japanese izakaya near Chueca with bulgogi and sushi; booking advised.'),

  // —— barcelona ——
  place('barcelona-fine_dining-1', 'barcelona', 'fine_dining', 'Alkimia', 'Ronda de Sant Antoni 41, 08011 Barcelona', '바르셀로나의 미쉐린 1스타 카탈루냐 요리 레스토랑. 주말은 쉽니다.', 'One-Michelin-star Catalan restaurant in Barcelona; closed at weekends.', { michelin: 'star1', image: '/places/barcelona-fine_dining-1.jpg' }),
  place('barcelona-fine_dining-2', 'barcelona', 'fine_dining', 'Cal Pep', 'Plaça de les Olles 8, 08003 Barcelona, Spain', '보른 지구의 타파스 바. 카운터에서 해산물 타파스를 내고 일찍 찹니다.', 'Born tapas bar serving seafood tapas at the counter; fills up early.', { image: '/places/barcelona-fine_dining-2.jpg' }),
  place('barcelona-fine_dining-3', 'barcelona', 'fine_dining', 'Can Culleretes', "Carrer d'en Quintana 5, 08002 Barcelona, Spain", '고딕 지구의 카탈루냐 전통 식당(1786년 개업). 카넬로니·부티파라·크레마 카탈라나가 있습니다.', 'Traditional Catalan restaurant in the Gothic Quarter (opened 1786) with cannelloni, butifarra and crema catalana.', { image: '/places/barcelona-fine_dining-3.jpg' }),
  place('barcelona-fine_dining-4', 'barcelona', 'fine_dining', 'Els Quatre Gats', 'Carrer de Montsió 3, 08002 Barcelona, Spain', '퓌츠 이 카다팔크가 설계한 카사 마르티의 카페 레스토랑. 피카소가 1900년 첫 전시를 연 곳입니다.', 'Café-restaurant in Puig i Cadafalch’s Casa Martí, where Picasso held his first exhibition in 1900.', { image: '/places/barcelona-fine_dining-4.jpg' }),
  place('barcelona-fine_dining-5', 'barcelona', 'fine_dining', 'Quimet & Quimet', 'Carrer del Poeta Cabanyes 25, 08004 Barcelona, Spain', '포블레섹의 서서 먹는 작은 보데가(1914년부터). 통조림 해산물 몬타디토와 수제 베르무트가 있습니다.', 'Tiny standing-room bodega in Poble Sec (since 1914) with conserva montaditos and house vermouth.', { image: '/places/barcelona-fine_dining-5.jpg' }),
  place('barcelona-korean-1', 'barcelona', 'korean', 'Shingané', 'Carrer de Calàbria 232, 08029 Barcelona', '에이샴플레의 한식당. 테이블 바비큐와 돌솥비빔밥·김치찌개가 있습니다.', 'Korean restaurant in the Eixample with tabletop barbecue, dolsot bibimbap and kimchi stew.'),
  place('barcelona-korean-2', 'barcelona', 'korean', 'Kim BBQ', 'Carrer d’Aribau 146 bis, 08036 Barcelona', '에이샴플레의 한국식 바비큐 식당.', 'Korean barbecue restaurant in the Eixample.'),
  place('barcelona-korean-3', 'barcelona', 'korean', 'Kimchi Mama', 'Carrer del Callao 12, 08014 Barcelona, Spain', '오스타프랑크스 지구의 작은 한식당. 비빔밥·만두·김치찌개가 있고 주말엔 예약하는 편이 좋습니다.', 'Small Korean restaurant in Hostafrancs with bibimbap, mandu and kimchi stew; book at weekends.'),
  place('barcelona-korean-5', 'barcelona', 'korean', 'Kamasot', 'Carrer del Consell de Cent 465, 08013 Barcelona', '에이샴플레의 한식당. 양이 넉넉하고 예약하는 편이 좋습니다.', 'Korean restaurant in the Eixample with generous portions; booking advised.'),
  place('barcelona-bakery-2', 'barcelona', 'bakery', 'Hofmann', 'Carrer dels Flassaders 44, 08003 Barcelona, Spain', '보른 지구의 파티스리. 마스카르포네 크루아상이 있고 주말엔 일찍 떨어집니다.', 'Born-district pâtisserie with a mascarpone-filled croissant that sells out early at weekends.', { image: '/places/barcelona-bakery-2.jpg' }),
  place('barcelona-bakery-3', 'barcelona', 'bakery', 'Escribà', 'La Rambla 83, 08002 Barcelona, Spain', '람블라스 거리 모더니즘 건물의 파티스리(1906년부터). 빨간 입술 모양 케이크가 있습니다.', 'Pâtisserie in a modernist building on La Rambla (since 1906), known for its red-lips cake.', { image: '/places/barcelona-bakery-3.jpg' }),
  place('barcelona-cafe-1', 'barcelona', 'cafe', 'Mauri', 'Rambla de Catalunya 102, 08008 Barcelona', '람블라 데 카탈루냐의 오래된 제과 카페. 페이스트리와 짭짤한 간식이 있습니다.', 'Long-established pâtisserie café on Rambla de Catalunya with pastries and savoury bites.', { image: '/places/barcelona-cafe-1.jpg' }),
  place('barcelona-cafe-2', 'barcelona', 'cafe', 'Nomad Frutas Selectas', 'Carrer de Pujades 95, 08005 Barcelona, Spain', '포블레노우에 있는 노마드 커피의 커피 코너. 현금은 받지 않습니다.', 'Nomad Coffee’s coffee corner in Poblenou; card only.'),
  place('barcelona-cafe-5', 'barcelona', 'cafe', 'Three Marks Coffee', "Carrer d'Ausiàs Marc 151, 08013 Barcelona, Spain", '원두를 직접 볶는 에이샴플레의 스페셜티 커피숍. 카다멈 번이 있습니다.', 'Eixample specialty coffee shop roasting its own beans, with cardamom buns.'),
  place('barcelona-cafe-6', 'barcelona', 'cafe', 'Granja La Pallaresa', 'Carrer de Petritxol 11, 08002 Barcelona', '페트리촐 거리의 그란하(1947년부터). 진한 핫초콜릿과 추로스, 휘핑크림 얹은 수이스가 있습니다.', 'Granja on Carrer Petritxol (since 1947) with thick hot chocolate, churros and suís.', { image: '/places/barcelona-cafe-6.jpg' }),

  // —— seville ——
  place('seville-fine_dining-1', 'seville', 'fine_dining', 'Lalola de Javi Abascal', 'Marco Sancho 1, 41003 Sevilla', '미쉐린 가이드에 실린 세비야의 레스토랑. 일·월요일은 쉽니다.', 'Seville restaurant listed in the Michelin Guide; closed Sundays and Mondays.'),
  place('seville-fine_dining-2', 'seville', 'fine_dining', 'Bodeguita Romero', 'Calle Harinas 10, 41001 Sevilla', '아레날 지구의 타파스 바(1939년부터). 프링가 몬타디토와 감자 샐러드가 있고 일찍 붐빕니다.', 'Tapas bar in El Arenal (since 1939) with pringá montaditos and papas aliñás; fills up early.', { image: '/places/seville-fine_dining-2.jpg' }),
  place('seville-fine_dining-3', 'seville', 'fine_dining', 'Casa Morales', 'C. García de Vinuesa 11, 41001 Sevilla', '대성당 근처의 오래된 보데가(1850년 개업). 술통에 분필로 쓴 메뉴가 있고 일요일은 쉽니다.', 'Long-established bodega near the cathedral (founded 1850) with the menu chalked on wine vats; closed Sundays.', { image: '/places/seville-fine_dining-3.jpg' }),
  place('seville-fine_dining-4', 'seville', 'fine_dining', 'Taberna Coloniales', 'Calle Fernandez y González 36, 41001 Sevilla', '3층짜리 타파스 식당. 대구 튀김(파비아)과 메추리알 요리가 있습니다.', 'Three-floor tapas restaurant with fried hake (pavía) and quail eggs.'),
  place('seville-fine_dining-5', 'seville', 'fine_dining', 'Las Teresas', 'C. Santa Teresa 2, 41004 Sevilla', '산타 크루스 지구의 타파스 바(1870년부터). 천장에 하몬이 걸려 있고 이베리코 햄이 있습니다.', 'Tapas bar in Santa Cruz (since 1870) with hams hanging from the ceiling and Iberian ham.', { image: '/places/seville-fine_dining-5.jpg' }),
  place('seville-fine_dining-6', 'seville', 'fine_dining', 'Realcázar', 'Calle San Fernando 27, 41004 Sevilla', '산 페르난도 거리의 바 겸 레스토랑. 스페인·지중해 요리가 있고 일요일은 쉽니다.', 'Bar-restaurant on Calle San Fernando serving Spanish and Mediterranean dishes; closed Sundays.', { image: '/places/seville-fine_dining-6.jpg' }),
  place('seville-bakery-2', 'seville', 'bakery', 'Ofelia Bakery', 'Calle Huelva 5, 41004 Sevilla', '구시가 우엘바 거리의 빵집 겸 카페. 시나몬롤·누텔라 매듭빵과 비건 메뉴가 있습니다.', 'Old-town bakery café on Calle Huelva with cinnamon rolls, Nutella knots and vegan options.'),
  place('seville-bakery-3', 'seville', 'bakery', 'Lalita Café', 'Calle José Luis de Casso 38, 41005 Sevilla', '네르비온 지구의 카페. 직접 만든 케이크와 팔메라, 스페셜티 커피가 있고 월요일은 쉽니다.', 'Café in the Nervión district with homemade cakes, palmeras and specialty coffee; closed Mondays.'),
  place('seville-cafe-2', 'seville', 'cafe', 'East Crema Coffee Santa María', 'C. Sta. María de Gracia 1, 41002 Sevilla', '캄파나 근처의 일본풍 스페셜티 커피 카페. 핸드드립과 브런치가 있습니다.', 'Japanese-inspired specialty coffee café near La Campana with pour-overs and brunch.'),
  place('seville-korean-1', 'seville', 'korean', 'Restaurante Coreano Moon', 'Avenida de Menéndez Pelayo 8, 41004 Sevilla', '메넨데스 펠라요 거리의 한식당. 순두부찌개·잡채·떡볶이와 비건 메뉴가 있습니다.', 'Korean restaurant on Avenida de Menéndez Pelayo with sundubu stew, japchae, tteokbokki and vegan options.'),
  place('seville-korean-2', 'seville', 'korean', "Han's Korean Restaurant", 'Calle Alfonso XII 23, 41001 Sevilla', '구시가의 한식당. 찌개·국수·밥·김치 요리가 있고 자주 차서 예약하는 편이 좋습니다.', 'Old-town Korean restaurant with stews, noodles, rice and kimchi dishes; often full, so book ahead.'),

  // —— granada ——
  place('granada-fine_dining-1', 'granada', 'fine_dining', 'Damasqueros', 'Calle Damasqueros 3, 18009 Granada', '셰프 롤라 마린의 레스토랑. 그라나다·안달루시아 요리로 매주 바뀌는 테이스팅 메뉴를 냅니다.', 'Chef Lola Marín’s restaurant serving a weekly-changing tasting menu of Granada and Andalusian cooking.'),
  place('granada-fine_dining-2', 'granada', 'fine_dining', 'Bar Los Diamantes', 'Calle Navas 28, 18009 Granada', '나바스 거리의 서서 먹는 타파스 바. 생선튀김이 있고 예약은 받지 않습니다.', 'Standing tapas bar on Calle Navas known for fried fish; no reservations.', { image: '/places/granada-fine_dining-2.jpg' }),
  place('granada-fine_dining-3', 'granada', 'fine_dining', 'Bodegas Castañeda', 'Calle Almireceros 1-3, 18010 Granada', '시내 중심의 전통 타파스 바. 하몬과 차가운·따뜻한 모둠 요리, 베르무트가 있습니다.', 'Traditional tapas bar in the centre with ham, cold and hot platters and vermouth.', { image: '/places/granada-fine_dining-3.jpg' }),
  place('granada-fine_dining-4', 'granada', 'fine_dining', 'Chikito', 'Plaza del Campillo 9, 18009 Granada', '캄피요 광장의 그라나다 전통 식당. 1920년대 로르카와 문인들이 모이던 카페 자리에 있습니다.', 'Traditional Granada restaurant on Plaza del Campillo, on the site of the café where Lorca’s circle met in the 1920s.'),
  place('granada-fine_dining-5', 'granada', 'fine_dining', 'Mirador de Morayma', 'Calle del Pianista García Carrillo 2, 18010 Granada', '알바이신의 정원 저택(카르멘) 레스토랑. 알함브라가 보이고 지역 요리를 냅니다.', 'Restaurant in an Albaicín carmen villa with Alhambra views, serving local cooking.'),
  place('granada-korean-2', 'granada', 'korean', 'Miso Restaurant Coreano', 'Calle Azorín 8, 18004 Granada', '카미노 데 론다 지구의 한식당. 매운 요리와 김치찌개·치킨이 있고 예약하는 편이 좋습니다.', 'Korean restaurant in the Camino de Ronda area with spicy dishes, kimchi stew and fried chicken; booking advised.', { image: '/places/granada-korean-2.jpg' }),
  place('granada-bakery-2', 'granada', 'bakery', 'Barrio Specialty Coffee & Bakery', 'Plaza de San Isidro 1, 18012 Granada', '알바이신 산 이시드로 광장의 스페셜티 커피 빵집. 오전에만 열고 일요일은 쉽니다.', 'Specialty coffee bakery on Plaza de San Isidro in the Albaicín; mornings only, closed Sundays.'),
  place('granada-cafe-1', 'granada', 'cafe', 'Malamiga', 'Calle San Antón 16, 18005 Granada', '빵과 페이스트리를 굽고 원두도 직접 볶는 빵집 겸 카페.', 'Bakery café baking its own bread and pastries and roasting its own coffee.'),
  place('granada-cafe-2', 'granada', 'cafe', 'La Finca Coffee', 'Calle Colegio Catalino 3, 18001 Granada', '대성당 근처의 작은 스페셜티 커피 카페. 원두를 직접 볶고 자리가 적습니다.', 'Small specialty coffee café near the cathedral that roasts its own beans; few seats.'),
  place('granada-cafe-3', 'granada', 'cafe', 'Minuit Pan y Café', 'Calle Colcha 6, 18009 Granada', '누에바 광장 근처의 빵집 겸 카페. 크루아상·빵과 커피가 있습니다.', 'Bakery café near Plaza Nueva with croissants, bread and coffee.'),

  // —— valencia ——
  place('valencia-fine_dining-1', 'valencia', 'fine_dining', 'Ricard Camarena Restaurant', 'Avenida Burjassot 54, 46009 València', '셰프 리카르드 카마레나의 미쉐린 2스타 레스토랑. 일·월요일은 쉽니다.', 'Two-Michelin-star restaurant of chef Ricard Camarena; closed Sundays and Mondays.', { michelin: 'star2', image: '/places/valencia-fine_dining-1.jpg' }),
  place('valencia-fine_dining-2', 'valencia', 'fine_dining', 'El Poblet', 'Carrer dels Correus 8, 46002 València', '발렌시아 시내의 미쉐린 2스타 레스토랑. 일·월요일은 쉽니다.', 'Two-Michelin-star restaurant in central Valencia; closed Sundays and Mondays.', { michelin: 'star2', image: '/places/valencia-fine_dining-2.jpg' }),
  place('valencia-fine_dining-3', 'valencia', 'fine_dining', 'Fierro', 'Carrer Dr. Serrano 4, 46006 València', '발렌시아의 작은 미쉐린 1스타 레스토랑. 일·월요일은 쉽니다.', 'Small one-Michelin-star restaurant in Valencia; closed Sundays and Mondays.', { michelin: 'star1' }),
  place('valencia-fine_dining-4', 'valencia', 'fine_dining', 'Casa Carmela', "Calle d'Isabel de Villena 155, 46011 València", '1922년에 문을 연 말바로사 해변 근처의 파에야 식당. 오렌지 나무 장작불에 굽고, 파에야 발렌시아나는 예약할 때 미리 주문하세요.', 'Paella restaurant near Malvarrosa beach, open since 1922 and cooking over orange-wood fires; order paella valenciana when booking.', { image: '/places/valencia-fine_dining-4.jpg' }),
  place('valencia-fine_dining-5', 'valencia', 'fine_dining', 'Casa Roberto', 'Calle del Maestro Gozalbo 19, 46005 València', '1986년부터 파에야를 내는 에이샴플레 식당. 파에야는 48시간 전에 예약하는 것이 좋고 월요일은 쉽니다.', 'Eixample restaurant serving paella since 1986; book paella 48 hours ahead; closed Mondays.', { image: '/places/valencia-fine_dining-5.jpg' }),
  place('valencia-bakery-1', 'valencia', 'bakery', 'La Más Bonita Ruzafa', 'Carrer de Cádiz 61, 46006 València', '루사파의 카페 겸 빵집. 직접 구운 케이크가 있습니다.', 'Café-bakery in Ruzafa with homemade cakes.'),
  place('valencia-bakery-2', 'valencia', 'bakery', 'Blackbird', 'Carrer de la Reina Na Maria 7, 46006 València', '루사파의 카페 겸 브런치 가게. 시나몬롤과 아보카도 토스트가 있습니다.', 'Café and brunch spot in Ruzafa with cinnamon rolls and avocado toast.'),
  place('valencia-cafe-1', 'valencia', 'cafe', 'Bluebell Coffee Co.', 'Carrer de Buenos Aires 3, 46006 València', '루사파의 스페셜티 커피 카페. 화요일은 쉽니다.', 'Specialty coffee café in Ruzafa; closed Tuesdays.'),
  place('valencia-cafe-3', 'valencia', 'cafe', 'Café ArtySana - Ruzafa', 'Calle Denia 49, 46004 València', '루사파의 카페. 비건·채식 메뉴와 미술 작품이 있고 노트북 작업하기 좋습니다.', 'Ruzafa café with vegan and vegetarian food and art on the walls, good for laptop work.'),
  place('valencia-cafe-4', 'valencia', 'cafe', 'Los Picos Café', 'Plaça de Manuel Granero 20, 46006 València', '루사파 마누엘 그라네로 공원 앞의 스페셜티 커피 카페. 토스트와 쿠바 샌드위치가 있습니다.', 'Specialty coffee café facing Manuel Granero park in Ruzafa, with toasts and a Cubano sandwich.'),
  place('valencia-korean-1', 'valencia', 'korean', 'La Taula de Yoon', 'Calle del Doctor Serrano 19, 46006 València', '루사파의 작은 한식당. 메인 요리에 반찬이 바뀌어 나오고 저녁에만 엽니다. 자리가 자주 차니 예약하세요.', 'Small Korean restaurant in Ruzafa; mains come with rotating side dishes; evenings only, often full so book ahead.'),
  place('valencia-korean-2', 'valencia', 'korean', 'Jalasán', "Carrer de Ciscar 43, 46005 València", '20년 넘게 영업한 에이샴플레의 한식당. 평일 점심 세트가 있고 떡볶이가 있습니다.', 'Korean restaurant in Eixample open for over 20 years, with a weekday lunch set and tteokbokki.'),
  place('valencia-korean-3', 'valencia', 'korean', 'Kim Chi', "Carrer d'Alberic 13, 46008 València", '엑스트라무르스의 작은 한식당 겸 발효식품 가게. 김치·잡채·비빔밥·보쌈이 있고 포장도 됩니다.', 'Small Korean restaurant and fermented-food shop in Extramurs with kimchi, japchae, bibimbap and bossam; takeaway available.'),

  // —— malaga ——
  place('malaga-fine_dining-1', 'malaga', 'fine_dining', 'José Carlos García Restaurante', 'Calle Vélez Málaga 8, 29016 Málaga', '셰프 호세 카를로스 가르시아의 미쉐린 1스타 레스토랑. 일·월요일은 쉽니다.', 'One-Michelin-star restaurant of chef José Carlos García; closed Sundays and Mondays.', { michelin: 'star1' }),
  place('malaga-fine_dining-2', 'malaga', 'fine_dining', 'La Tranca', 'Calle Carretería 92, 29008 Málaga', '카레테리아 거리의 안달루시아식 타파스 바. 생 베르무트와 말라가 와인이 있습니다.', 'Andalusian-style tapas bar on Calle Carretería with vermouth on tap and Málaga wine.'),
  place('malaga-fine_dining-3', 'malaga', 'fine_dining', 'Mesón Mariano', 'Calle Granados 2, 29008 Málaga', '1988년 문을 연 안달루시아 식당. 아티초크 요리와 가스파추엘로가 있고 일요일은 쉽니다.', 'Andalusian restaurant open since 1988 known for artichokes and gazpachuelo; closed Sundays.', { image: '/places/malaga-fine_dining-3.jpg' }),
  place('malaga-fine_dining-4', 'malaga', 'fine_dining', 'Cortijo de Pepe', 'Plaza de la Merced 2, 29012 Málaga', '메르세드 광장의 타파스 바(1971년부터). 문어 요리와 꿀 가지튀김이 있습니다.', 'Tapas bar on Plaza de la Merced (since 1971) with octopus and aubergine with honey.', { image: '/places/malaga-fine_dining-4.jpg' }),
  place('malaga-fine_dining-5', 'malaga', 'fine_dining', 'Bodegas Quitapenas', 'Calle Marín García 4, 29005 Málaga', '구시가의 와인 바. 말라가 와인·베르무트와 멸치 요리를 냅니다.', 'Old-town wine bar serving Málaga wine and vermouth with anchovies.'),
  place('malaga-bakery-2', 'malaga', 'bakery', 'Ana La Fantástica', 'Calle Castillo de Sohail 5, 29005 Málaga', '아타라사나스 시장 근처의 빵집 겸 카페. 갈리시아식 사워도우 빵과 시나몬롤·크루아상이 있습니다.', 'Bakery café near the Atarazanas market with Galician-style sourdough, cinnamon rolls and croissants.'),
  place('malaga-cafe-2', 'malaga', 'cafe', 'Mia Coffee House', 'Calle Vendeja 9, 29001 Málaga', '구시가지의 작은 스페셜티 커피숍. 직접 만든 케이크가 인기입니다.', 'Small specialty coffee shop in the old town, known for its homemade cakes.'),
  place('malaga-cafe-3', 'malaga', 'cafe', 'Bertani Café', 'Calle San Juan 40, 29005 Málaga, Spain', '2012년 문을 연 말라가의 스페셜티 커피숍. 원두도 팔고 일요일은 쉽니다.', 'Málaga specialty coffee shop opened in 2012, also selling beans; closed Sundays.'),
  place('malaga-korean-1', 'malaga', 'korean', 'WOOCOCO', 'Calle de Ramón Franquelo 10, 29008 Málaga', '시내 중심의 작은 한식당 우꼬꼬. 불고기·찜닭·김치찌개·떡볶이가 있습니다.', 'Small Korean restaurant in the centre with bulgogi, jjimdak, kimchi stew and tteokbokki.'),

  // —— bilbao ——
  place('bilbao-fine_dining-1', 'bilbao', 'fine_dining', 'Nerua Guggenheim Bilbao', 'Avenida de Abandoibarra 2, 48009 Bilbao', '구겐하임 미술관 건물 안의 미쉐린 1스타 레스토랑. 여는 날이 적으니 미리 확인하세요.', 'One-Michelin-star restaurant inside the Guggenheim Museum; open only a few days, so check ahead.', { michelin: 'star1' }),
  place('bilbao-fine_dining-2', 'bilbao', 'fine_dining', 'Gure Toki', 'Plaza Nueva 12, 48005 Bilbao', '누에바 광장의 핀초스 바. 주문하면 만드는 따뜻한 핀초스가 있고 2016년 바스크 핀초 대회에서 우승했습니다.', 'Pintxos bar on Plaza Nueva with hot pintxos made to order; won the 2016 Basque Country pintxo championship.', { image: '/places/bilbao-fine_dining-2.jpg' }),
  place('bilbao-fine_dining-3', 'bilbao', 'fine_dining', 'Rio-Oja', 'Calle del Perro 4, 48005 Bilbao', '카스코 비에호의 바스크 전통 식당(1959년부터). 카수엘라 요리와 대구 필필이 있고 예약하는 편이 좋습니다.', 'Traditional Basque restaurant in the Casco Viejo (since 1959) with cazuelitas and bacalao al pil-pil; booking advised.'),
  place('bilbao-fine_dining-4', 'bilbao', 'fine_dining', 'La Viña del Ensanche', 'Diputación 10, 48008 Bilbao', '1927년 문을 연 하몬 핀초스 바 겸 레스토랑. 모유아 역 근처에 있고 옆에 식료품 가게가 있습니다.', 'Ham-focused pintxos bar and restaurant opened in 1927, near Moyua metro, with a deli shop next door.', { image: '/places/bilbao-fine_dining-4.jpg' }),
  place('bilbao-fine_dining-5', 'bilbao', 'fine_dining', 'Restaurante Enol', 'Calle Licenciado Poza 73, 48013 Bilbao', '인다우추의 해산물 식당. 주말 저녁엔 붐벼 예약하는 편이 좋습니다.', 'Seafood restaurant in Indautxu; book for weekend dinners.'),
  place('bilbao-bakery-2', 'bilbao', 'bakery', 'Pastelería Martina de Zuricalday', 'Doctor Areilza 38, 48010 Bilbao', '1830년 시작한 바스크의 제과점 마르티나 데 수리칼다이의 지점. 볼로 수이소가 있습니다.', 'Branch of Martina de Zuricalday, a Basque pâtisserie founded in 1830, with bollo suizo.'),
  place('bilbao-bakery-3', 'bilbao', 'bakery', 'Pastelería Suiza', 'Marqués del Puerto 4, 48009 Bilbao', '아반도 지구의 제과점. 버터 번·수이소·크루아상과 트러플이 있습니다.', 'Pâtisserie in the Abando district with butter buns, suizos, croissants and truffles.'),
  place('bilbao-bakery-4', 'bilbao', 'bakery', 'Arrese', 'Foru kalea 2, 48005 Bilbao, Spain', '1852년 시작한 가족 경영 제과점 아레세의 지점. 초콜릿 팔미에와 트러플이 있습니다.', 'Branch of Arrese, a family-run pâtisserie founded in 1852, with chocolate palmiers and truffles.', { image: '/places/bilbao-bakery-4.jpg' }),
  place('bilbao-cafe-2', 'bilbao', 'cafe', 'ARVO Specialty Coffee', 'Barraincúa 9, 48009 Bilbao', '구겐하임 근처의 스페셜티 커피·브런치 카페(2021년 개업).', 'Specialty coffee and brunch café near the Guggenheim, opened in 2021.'),
  place('bilbao-cafe-3', 'bilbao', 'cafe', 'East Crema Coffee', 'Rodríguez Arias 22, 48009 Bilbao', '스페인 스페셜티 커피 체인의 빌바오 매장. 필터 커피와 브런치가 있습니다.', 'Bilbao branch of a Spanish specialty coffee chain with filter coffee and brunch.'),
  place('bilbao-cafe-4', 'bilbao', 'cafe', 'Café Bertiz', 'Colón de Larreátegui 31, 48011 Bilbao', '빵집 겸 카페 체인 베르티스의 매장. 페이스트리와 커피가 있습니다.', 'Outlet of the Bertiz bakery-café chain with pastries and coffee.'),

  // —— toledo ——
  place('toledo-fine_dining-1', 'toledo', 'fine_dining', 'Adolfo', 'Calle Hombre de Palo 7, 45001 Toledo', '구시가 12세기 안뜰 건물의 레스토랑. 자체 농장 채소로 계절 테이스팅 메뉴를 내고 미쉐린 가이드에 실려 있습니다.', 'Restaurant around a 12th-century patio in the old town, serving a seasonal tasting menu with vegetables from its own estate; listed in the Michelin Guide.'),
  place('toledo-fine_dining-2', 'toledo', 'fine_dining', 'El Albero', 'Calle Diputacion 6, 45004 Toledo', '관광지에서 조금 떨어진 작은 전통 식당. 톨레도식 자고새 요리 같은 스튜를 내고 미쉐린 가이드에 실려 있습니다.', 'Small traditional restaurant away from the tourist centre, serving stews such as Toledo-style partridge; listed in the Michelin Guide.'),
  place('toledo-fine_dining-3', 'toledo', 'fine_dining', 'Restaurante Iván Cerdeño', 'Cigarral del Ángel, 45004 Toledo', '타호 강 건너 시가랄(옛 별장)의 미쉐린 2스타 레스토랑. 월·화요일은 쉽니다.', 'Two-Michelin-star restaurant in a cigarral estate across the Tagus; closed Mondays and Tuesdays.', { michelin: 'star2' }),
  place('toledo-fine_dining-4', 'toledo', 'fine_dining', 'Lo Nuestro - Tapería & Restaurante', 'Calle San Juan de Dios 7, 45002 Toledo', '유대인 지구의 가족 운영 식당(1989년부터). 자고새·카르카무사스·사슴 스튜가 있습니다.', 'Family-run restaurant in the Jewish quarter (since 1989) with partridge, carcamusas and venison stew.'),
  place('toledo-fine_dining-5', 'toledo', 'fine_dining', 'Bar Ludeña', 'Plaza de la Magdalena 10, 45001 Toledo', '소코도베르 근처의 가정식 바. 카르카무사스와 톨레도식 자고새 요리가 있고 예약은 받지 않습니다.', 'Home-cooking bar near Zocodover with carcamusas and Toledo-style partridge; no reservations.'),
  place('toledo-cafe-1', 'toledo', 'cafe', 'El Café de las Monjas', 'Calle de Santo Tomé 2, 45002 Toledo', '구시가의 카페. 근처 수녀원의 수녀들이 만든 마지팬과 과자를 팝니다.', 'Old-town café selling marzipan and sweets made by nuns from a nearby convent.'),
  place('toledo-cafe-2', 'toledo', 'cafe', 'IL CAPPUCCINO Specialty coffee', 'Pl. de la Magdalena 4, Toledo, Spain', '2014년 문을 연 톨레도의 스페셜티 커피숍. 포장 위주이고 주말은 쉽니다.', 'Toledo specialty coffee shop opened in 2014, mostly takeaway; closed at weekends.'),
  place('toledo-cafe-3', 'toledo', 'cafe', 'Cafetería Restaurante La Villa', 'Paseo de Bachilleres 2, 45003 Toledo, Spain', '바치예레스 산책로의 카페 겸 레스토랑.', 'Café-restaurant on the Paseo de Bachilleres.'),
  place('toledo-cafe-4', 'toledo', 'cafe', 'Naturalmente Italian Coffee & Bakery', 'Pl. de San Juan de los Reyes 2, Toledo, Spain', '산 후안 데 로스 레예스 광장의 이탈리아식 커피·디저트 카페.', 'Italian-style coffee and dessert café on the Plaza de San Juan de los Reyes.'),
  place('toledo-cafe-5', 'toledo', 'cafe', 'Cañas y Tapas', 'Plaza de Zocodover 11, 45001 Toledo', '소코도베르 광장의 타파스 체인 매장. 테라스가 있습니다.', 'Tapas chain outlet on the Plaza de Zocodover with a terrace.', { image: '/places/toledo-cafe-5.jpg' }),

  // —— cordoba ——
  place('cordoba-fine_dining-1', 'cordoba', 'fine_dining', 'Noor', 'Calle Pablo Ruiz Picasso 8, 14014 Córdoba', '셰프 파코 모랄레스의 미쉐린 3스타 레스토랑. 안달루시아 역사 요리를 재해석합니다.', 'Three-Michelin-star restaurant of chef Paco Morales, reinterpreting Andalusian historical cuisine.', { michelin: 'star3', image: '/places/cordoba-fine_dining-1.jpg' }),
  place('cordoba-fine_dining-2', 'cordoba', 'fine_dining', 'Taberna Salinas', 'Calle Tundidores 3, 14002 Córdoba', '코레데라 광장 근처의 타베르나. 살모레호·플라멩킨·가지튀김을 내고 안달루시아식 안뜰이 있습니다. 일요일은 쉽니다.', 'Tavern near the Plaza de la Corredera serving salmorejo, flamenquín and fried aubergine, with an Andalusian patio; closed Sundays.'),
  place('cordoba-fine_dining-4', 'cordoba', 'fine_dining', 'Bodegas Mezquita', 'C. Corregidor Luis de la Cerda 45, 14003 Córdoba', '메스키타 근처 유대인 지구의 안달루시아 요리 식당. 살모레호 같은 타파스가 있습니다.', 'Andalusian restaurant in the Jewish Quarter near the Mezquita, with tapas such as salmorejo.'),
  place('cordoba-fine_dining-5', 'cordoba', 'fine_dining', 'Garum 2.1', 'Calle San Fernando 122, 14003 Córdoba', '미쉐린 가이드에 실린 코르도바의 레스토랑. 코르도바 요리를 현대적으로 냅니다. 일요일은 쉽니다.', 'Córdoba restaurant listed in the Michelin Guide, serving modern takes on local dishes; closed Sundays.'),
  place('cordoba-cafe-2', 'cordoba', 'cafe', 'Arábiga Specialty Coffee', 'Calle Lucano 15, 14003 Córdoba', '오전에 여는 스페셜티 커피숍. V60 핸드드립과 홈메이드 쿠키가 있습니다.', 'Morning specialty coffee shop with V60 pour-overs and homemade cookies.'),

  // —— san-sebastian ——
  place('san-sebastian-fine_dining-1', 'san-sebastian', 'fine_dining', 'Arzak', 'Avenida Alcalde José Elosegi 273, 20015 Donostia', '1974년 첫 별을 받은 산세바스티안의 미쉐린 3스타 레스토랑. 일·월요일은 쉽니다.', 'Three-Michelin-star San Sebastián restaurant, first starred in 1974; closed Sundays and Mondays.', { michelin: 'star3', image: '/places/san-sebastian-fine_dining-1.jpg' }),
  place('san-sebastian-fine_dining-2', 'san-sebastian', 'fine_dining', 'Borda Berri', 'Fermin Calbeton Kalea 12, 20003 Donostia', '구시가의 핀초스 바. 진열 대신 주방에서 바로 만든 핀초스를 내고 이디아사발 치즈 리소토·볼살 찜이 있습니다.', 'Old-town pintxos bar cooking to order rather than from a display, with Idiazabal risotto and braised cheek.'),
  place('san-sebastian-fine_dining-3', 'san-sebastian', 'fine_dining', 'La Cuchara de San Telmo', 'C/ 31 de Agosto 28, 20003 Donostia', '구시가의 작은 핀초스 바(1999년 개업). 칠판 메뉴에서 골라 주문하고 예약은 받지 않습니다.', 'Small old-town pintxos bar (opened 1999) with a blackboard menu cooked to order; no reservations.'),
  place('san-sebastian-fine_dining-4', 'san-sebastian', 'fine_dining', 'Gandarias Jatetxea', '31 de Agosto Kalea 23, 20003 Donostia', '구시가의 바스크 핀초스·그릴 식당. 게살 타르트와 이베리코 햄이 있고 일찍 붐빕니다.', 'Basque pintxos and grill bar in the old town with crab tart and Iberian ham; fills up early.'),
  place('san-sebastian-fine_dining-5', 'san-sebastian', 'fine_dining', 'Casa Urola', 'Fermin Calbeton Kalea 20, 20003 Donostia', '1층은 핀초스 바, 2층은 식당인 구시가 레스토랑. 바스크 요리와 숯불 생선을 내고 미쉐린 가이드에 실려 있습니다. 화·수요일은 쉽니다.', 'Old-town restaurant with a pintxos bar downstairs and a dining room upstairs, serving Basque food and grilled fish; listed in the Michelin Guide, closed Tuesdays and Wednesdays.'),
  place('san-sebastian-bakery-1', 'san-sebastian', 'bakery', 'Casa Otaegui', 'Narrika Kalea, 20003 Donostia / San Sebastián', '1886년 문을 연 산세바스티안의 제과점. 구시가 나리카 거리 매장에서 판치네타를 팝니다.', 'San Sebastián pastry shop founded in 1886; its Narrika street shop in the old town sells pantxineta.'),
  place('san-sebastian-bakery-3', 'san-sebastian', 'bakery', 'Somos - Coffee & Bakery', 'Antonio Gaztañeta Kalea 4, 20018 Donostia', '안티구오 지구의 아침 식사 빵집 겸 카페.', 'Breakfast bakery café in the Antiguo district.'),
  place('san-sebastian-cafe-2', 'san-sebastian', 'cafe', 'Koh Tao', 'Calle Bengoetxea 2, 20004 Donostia', '기푸스코아 광장 근처의 스페셜티 커피 카페. 플랫화이트와 홈메이드 케이크가 있습니다.', 'Specialty coffee café near Plaza Gipuzkoa with flat whites and homemade cakes.'),

  // —— zaragoza ——
  place('zaragoza-fine_dining-1', 'zaragoza', 'fine_dining', 'La Prensa', 'Calle José Nebra 3, 50007 Zaragoza', '사라고사의 미쉐린 1스타 레스토랑. 수~토요일에 엽니다.', 'One-Michelin-star restaurant in Zaragoza; Wednesday to Saturday.', { michelin: 'star1' }),
  place('zaragoza-fine_dining-2', 'zaragoza', 'fine_dining', 'Méli Melo', 'Calle Mayor 45, 50001 Zaragoza', '구시가 마요르 거리의 창작 타파스 바. 아귀 버거로 사라고사 타파스 대회에서 상을 받았습니다.', 'Creative tapas bar on Calle Mayor in the old town; its monkfish burger won a Zaragoza tapas contest.'),
  place('zaragoza-fine_dining-3', 'zaragoza', 'fine_dining', 'Casa Domino', 'Plaza Santa Marta s/n, 50001 Zaragoza', '산타 마르타 광장의 30년 넘은 바. 하몬 바티도 몬타디토와 치즈 모둠이 있습니다.', 'Bar on Plaza Santa Marta for over 30 years, known for its jamón batido montadito and cheese boards.'),
  place('zaragoza-fine_dining-4', 'zaragoza', 'fine_dining', 'La Papa Arrugá', 'Calle San Lorenzo 1, Casco Antiguo, 50001 Zaragoza', '구시가의 작은 타파스 바. 하몬 크로케타와 초리세타를 올린 우에보스 로토스가 있습니다.', 'Small old-town tapas tavern with ham croquettes and huevos rotos with chistorra.', { image: '/places/zaragoza-fine_dining-4.jpg' }),
  place('zaragoza-fine_dining-5', 'zaragoza', 'fine_dining', 'Tragantua', 'Plaza Santa Marta, 50001 Zaragoza', '산타 마르타 광장의 타파스 식당. 하몬 크로케타와 해산물 요리가 있고 점심은 예약하는 것이 좋습니다.', 'Tapas restaurant on Plaza Santa Marta with ham croquettes and seafood; book for lunch.'),
  place('zaragoza-bakery-2', 'zaragoza', 'bakery', 'Pistacho Bakery & Coffee', 'Av. de San Juan de la Peña 7, 50015 Zaragoza', '아라발 지구의 파스텔 톤 베이커리 카페. 피스타치오 치즈케이크와 속을 채운 크루아상이 있습니다.', 'Pastel-toned bakery café in Arrabal with pistachio cheesecake and filled croissants.'),
  place('zaragoza-cafe-2', 'zaragoza', 'cafe', 'Café Botánico', 'C. de Santiago 5, 50003 Zaragoza', '필라르 광장 근처 시클론 골목의 꽃집 겸 카페. 직접 만든 케이크가 있고 반려동물 동반이 됩니다.', 'Florist-café in the Pasaje del Ciclón near Plaza del Pilar, with homemade cakes; pets welcome.'),

  // —— salamanca ——
  place('salamanca-fine_dining-1', 'salamanca', 'fine_dining', 'Restaurante Víctor Gutiérrez', 'Calle Empedrada 4, 37007 Salamanca', '살라망카 구시가지의 미쉐린 1스타 레스토랑. 화요일은 쉽니다.', 'One-Michelin-star restaurant in Salamanca’s old town; closed Tuesdays.', { michelin: 'star1' }),
  place('salamanca-fine_dining-2', 'salamanca', 'fine_dining', 'Río de la Plata', 'Plaza del Peso 1, 37001 Salamanca', '1958년 문을 연 지하의 카스티야 요리 식당. 아몬드 새끼 염소 스튜와 코시도가 있고 예약하는 편이 좋습니다.', 'Basement Castilian restaurant opened in 1958 with kid stewed with almonds and cocido; booking advised.'),
  place('salamanca-fine_dining-4', 'salamanca', 'fine_dining', 'Casa de Comidas Montero', 'Plaza del Corrillo 12, 37002 Salamanca', '마요르 광장 옆 코리요 광장의 핀초스 식당. 소꼬리 쌀 요리 같은 핀초스가 있고 월·화요일은 쉽니다.', 'Pintxos restaurant on the Plaza del Corrillo by the Plaza Mayor, with dishes such as oxtail rice; closed Mondays and Tuesdays.'),
  place('salamanca-fine_dining-5', 'salamanca', 'fine_dining', 'Casa Paca', 'Plaza del Peso 10, 37001 Salamanca', '페소 광장의 카스티야 요리 레스토랑(1928년부터). 고기 요리가 중심이고 예약하는 편이 좋습니다.', 'Castilian restaurant on the Plaza del Peso (since 1928), focused on meat dishes; booking advised.'),
  place('salamanca-bakery-2', 'salamanca', 'bakery', 'Confitería la Industrial', 'Calle Rúa Mayor 8, 37002 Salamanca', '루아 마요르 거리의 전통 제과점(1948년 개업). 오르나소(고기 파이)와 과자가 있습니다.', 'Traditional pastry shop on the Rúa Mayor (opened 1948) with hornazo and sweets.'),
  place('salamanca-bakery-3', 'salamanca', 'bakery', "Toni's Cupcakes", 'Calle Pozo Amarillo 28, 37001 Salamanca', '미국식 컵케이크·케이크·쿠키를 굽는 작은 빵집.', 'Small bakery making American-style cupcakes, cakes and cookies.'),
  place('salamanca-bakery-4', 'salamanca', 'bakery', 'Celi&Co Gluten Free Bakery', 'C. Pozo Amarillo 8, 37001 Salamanca', '글루텐 프리 전문 빵집. 페이스트리·케이크·추로스와 아침 메뉴가 있습니다.', 'Dedicated gluten-free bakery with pastries, cakes, churros and breakfast.'),
  place('salamanca-cafe-1', 'salamanca', 'cafe', 'Santagloria Coffee & Bakery', 'C. José Jáuregui 37, 37002 Salamanca, Spain', '에스파냐 광장 근처의 빵집 카페 체인 산타글로리아 매장. 테라스가 있습니다.', 'Outlet of the Santagloria bakery-café chain near the Plaza de España, with a terrace.'),
  place('salamanca-cafe-3', 'salamanca', 'cafe', 'Café Novelty', 'Plaza Mayor 2 Bajo, 37002 Salamanca', '1905년 문을 연 마요르 광장의 카페. 우나무노 같은 문인들이 모였고 토렌테 바예스테르 동상이 있습니다.', 'Café on the Plaza Mayor opened in 1905, once frequented by writers such as Unamuno, with a statue of Torrente Ballester.', { image: '/places/salamanca-cafe-3.jpg' }),

  // —— santiago ——
  place('santiago-fine_dining-1', 'santiago', 'fine_dining', 'Abastos 2.0', 'Praza de Abastos, Rúa das Ameas 13-18, 15703 Santiago de Compostela', '아바스토스 시장의 갈리시아 요리.', 'Galician cuisine at the Abastos market.'),
  place('santiago-fine_dining-2', 'santiago', 'fine_dining', 'O Sendeiro', 'Rua do Olvido 22, 15703 Santiago de Compostela', '19세기 무두질 공장 건물의 갈리시아 요리 식당. 포도 덩굴 안뜰이 있고 예약하는 편이 좋습니다.', 'Galician restaurant in a 19th-century former tannery with a vine-covered patio; booking advised.'),
  place('santiago-fine_dining-3', 'santiago', 'fine_dining', 'Casa Marcelo', 'Rúa das Hortas 1, 15705 Santiago de Compostela', '갈리시아-아시아 퓨전, 미슐랭 가이드 등재.', 'Galician-Asian fusion, listed in the Michelin Guide.'),
  place('santiago-fine_dining-4', 'santiago', 'fine_dining', 'O Curro da Parra', 'Rúa Travesa 20, 15704 Santiago de Compostela', '아바스토스 시장 근처의 갈리시아 시장 요리 식당. 타파스 공간과 정찬 공간이 따로 있고 예약하는 편이 좋습니다.', 'Galician market-cooking restaurant near the Mercado de Abastos, with separate tapas and dining areas; booking advised.'),
  place('santiago-fine_dining-5', 'santiago', 'fine_dining', 'Los Caracoles', 'Rúa da Raíña 14, 15705 Santiago de Compostela', '구시가 라이냐 거리의 갈리시아 식당(1986년부터). 달팽이 요리와 고기·생선 요리가 있습니다.', 'Galician restaurant on Rúa da Raíña in the old town (since 1986) with snails, meat and fish dishes.'),
  place('santiago-bakery-2', 'santiago', 'bakery', 'Lusco & Fusco Bakery Café', 'Campo de San Clemente 11, 15705 Santiago de Compostela', '알라메다 공원 근처의 미국식 빵집 겸 카페. 시나몬번·스콘·케이크가 있습니다.', 'American-style bakery café near the Alameda park with cinnamon buns, scones and cakes.'),
  place('santiago-cafe-3', 'santiago', 'cafe', 'Café Iacobus', 'Rúa da Senra 24, Santiago de Compostela', '산티아고의 카페 체인 이아코부스의 지점. 추로스와 타르타 데 산티아고가 있습니다.', 'Branch of the local Iacobus café chain with churros and tarta de Santiago.'),
  place('santiago-korean-1', 'santiago', 'korean', 'NuMaru', 'Rua de Vista Alegre 58, Santiago de Compostela', '비스타 알레그레 거리의 한식당. 라면·짜장·불닭 같은 메뉴가 있고 일·월요일은 쉽니다.', 'Korean restaurant on Rúa de Vista Alegre with ramyeon, jjajang and buldak chicken; closed Sundays and Mondays.'),
  place('santiago-korean-2', 'santiago', 'korean', 'Korean BBQ Fafa Buffet', 'Rúa de Frei Rosendo Salvado 16, 15701 Santiago de Compostela', '한국식 바비큐 뷔페. 고기와 해산물을 테이블에서 굽습니다.', 'Korean barbecue buffet where meat and seafood are grilled at the table.'),

  // —— avila ——
  place('avila-fine_dining-1', 'avila', 'fine_dining', 'Barro', 'Carretera de Salamanca 4, 05002 Ávila', '아빌라 출신 셰프 카를로스 카시야스의 미쉐린 1스타 창작 요리 레스토랑입니다.', 'Michelin one-star restaurant of creative cooking by Ávila-born chef Carlos Casillas.', { michelin: 'star1' }),
  // —— cadiz ——
  place('cadiz-fine_dining-1', 'cadiz', 'fine_dining', 'Código de Barra', 'Calle San Francisco 7, 11004 Cádiz', '네덜란드 출신 셰프 레온 흐리피윤의 미쉐린 1스타 레스토랑입니다.', 'Michelin one-star restaurant of Dutch-born chef Léon Griffioen.', { michelin: 'star1' }),
  // —— segovia ——
  place('segovia-fine_dining-1', 'segovia', 'fine_dining', 'José María', 'Cronista Lecea 11, 40001 Segovia', '구시가의 카스티야 요리 식당. 자체 농장의 새끼 돼지 구이(코치니요)를 내고 미쉐린 가이드에 실려 있습니다.', 'Old-town Castilian restaurant serving roast suckling pig from its own farm, listed in the Michelin Guide.'),
  place('segovia-fine_dining-2', 'segovia', 'fine_dining', 'Mesón Don Jimeno', 'Calle de Daoiz 15, 40003 Segovia', '알카사르와 마요르 광장 사이의 식당. 그릴 고기와 새끼 돼지 구이가 있고 예약하는 편이 좋습니다.', 'Restaurant between the Alcázar and the Plaza Mayor with grilled meats and roast suckling pig; booking advised.'),
  place('segovia-fine_dining-3', 'segovia', 'fine_dining', 'El Fogón Sefardí', 'Calle Isabel la Católica 8, 40001 Segovia', '옛 유대인 지구, 15세기 무데하르 저택 호텔 안의 식당. 세파르디 요리를 냅니다.', 'Restaurant in a 15th-century Mudéjar mansion hotel in the old Jewish quarter, serving Sephardic dishes.'),
  place('segovia-fine_dining-4', 'segovia', 'fine_dining', 'Mesón de Cándido', 'Plaza Azoguejo 5, 40001 Segovia', '수도교 바로 옆의 식당. 1905년부터 칸디도 가족이 운영하고 장작 화덕 새끼 돼지 구이가 있습니다.', 'Restaurant right by the aqueduct, run by the Cándido family since 1905, serving suckling pig from a wood-fired oven.', { image: '/places/segovia-fine_dining-4.jpg' }),
  place('segovia-fine_dining-5', 'segovia', 'fine_dining', 'Casa Duque', 'Calle Cervantes 12, 40001 Segovia', '1895년 문을 연 가족 경영 식당. 새끼 돼지 구이와 양고기 구이를 냅니다.', 'Family-run restaurant opened in 1895, serving roast suckling pig and lamb.', { image: '/places/segovia-fine_dining-5.jpg' }),
  place('segovia-cafe-2', 'segovia', 'cafe', 'Kofe Lab - Specialty Coffee', 'Bajada de la Canaleja 5, 40001 Segovia', '세고비아의 스페셜티 커피숍. 핸드드립·콜드브루와 아침·점심이 있고 야외석이 있습니다.', 'Segovia specialty coffee shop with filter coffee, cold brew, breakfast and lunch, plus outdoor seating.'),
  place('segovia-cafe-3', 'segovia', 'cafe', "Cafetería Paloma's", 'Travesía Dr. Sancho 5, Segovia, Spain', '수도교 근처의 작은 카페. 채식 메뉴가 있습니다.', 'Small café near the aqueduct with vegetarian options.'),

  // —— ronda ——
  place('ronda-fine_dining-1', 'ronda', 'fine_dining', 'Bardal', 'Calle José Aparicio 1, 29400 Ronda', '론다의 미쉐린 2스타 레스토랑. 수~토요일에 엽니다.', 'Two-Michelin-star restaurant in Ronda; Wednesday to Saturday.', { michelin: 'star2', image: '/places/ronda-fine_dining-1.jpg' }),
  place('ronda-fine_dining-3', 'ronda', 'fine_dining', 'Terraza Bar El Barrio', 'Calle de San Francisco de Asís 111, 29400 Ronda', '산 프란시스코 지구의 동네 식당. 사슴 스튜·버섯 요리와 이베리코 돼지 바비큐가 있습니다.', 'Neighbourhood restaurant in the San Francisco quarter with venison stew, mushroom dishes and barbecued Iberian pork.'),
  place('ronda-fine_dining-4', 'ronda', 'fine_dining', 'Mesón El Sacristán', 'Plaza Duquesa de Parcent 14, 29400 Ronda', '산타 마리아 라 마요르 성당 옆의 식당. 참나무 화덕에 구운 새끼 염소·새끼 돼지 요리가 있습니다.', 'Restaurant beside the Santa María la Mayor church serving kid and suckling pig from an oak-fired oven.'),
  place('ronda-fine_dining-5', 'ronda', 'fine_dining', 'De Locos Tapas', 'Plazuela Arquitecto Francisco Pons Sorolla 7, 29400 Ronda', '알모카바르 문 근처의 작은 타파스 식당(테이블 6개). 스페인·바스크풍 현대 타파스가 있고 예약하는 편이 좋습니다.', 'Tiny tapas restaurant near the Almocabar gate (six tables) with modern Spanish and Basque-style tapas; booking advised.', { image: '/places/ronda-fine_dining-5.jpg' }),
  place('ronda-cafe-2', 'ronda', 'cafe', 'Confitería Daver', 'Calle Virgen de los Remedios 6, 29400 Ronda', '론다의 빵집 겸 카페. 피스타치오 투론·만테카도·바나나 팔메라가 있습니다.', 'Ronda bakery café with pistachio turrón, mantecados and banana palmeras.'),

  // —— girona ——
  place('girona-fine_dining-1', 'girona', 'fine_dining', 'El Celler de Can Roca', 'Can Sunyer 48, 17007 Girona', '로카 삼형제의 미쉐린 3스타 레스토랑. 일·월요일은 쉬고 예약이 꼭 필요합니다.', 'Three-Michelin-star restaurant of the Roca brothers; closed Sundays and Mondays, booking essential.', { michelin: 'star3', image: '/places/girona-fine_dining-1.jpg' }),
  place('girona-fine_dining-2', 'girona', 'fine_dining', 'Casa Marieta', 'Plaça Independència 5-6, 17001 Girona', '독립 광장의 카탈루냐 전통 식당(1892년부터). 배를 곁들인 오리 요리와 갑오징어 완두콩 요리가 있습니다.', 'Traditional Catalan restaurant on Plaça Independència (since 1892) with duck with pears and cuttlefish with peas.'),
  place('girona-fine_dining-5', 'girona', 'fine_dining', 'El Cul de Món', 'Disseminat de Sant Daniel 3, 17007 Girona', '성벽 밖 산트 다니엘 계곡의 돌집 식당. 모로코풍을 더한 카탈루냐 요리를 내고 예약하는 편이 좋습니다.', 'Stone-house restaurant in the Sant Daniel valley outside the walls, serving Catalan food with a Moroccan touch; booking advised.'),
  place('girona-bakery-2', 'girona', 'bakery', 'Antiga Casa Bellsolà 1892', 'Plaça del Vi 12, Girona, Spain', '비 광장의 장인 빵집. 바라 플로렌티나 같은 빵을 굽습니다.', 'Artisan bakery on the Plaça del Vi baking breads such as the barra florentina.'),
  place('girona-bakery-4', 'girona', 'bakery', 'La Puntual (Pa i Brioixeria)', 'Carrer Ramon Turró i Darder 33, Girona, Spain', '케이크·크루아상·치즈케이크와 커피가 있는 빵집.', 'Bakery with cakes, croissants, cheesecake and coffee.'),
  place('girona-cafe-1', 'girona', 'cafe', 'La Comuna Café', 'Carrer del Bellaire 7, 17004 Girona', '프로 사이클리스트 부부가 운영하는 지로나의 스페셜티 커피 카페', 'Girona specialty coffee café founded by a professional cyclist and his wife'),
  place('girona-cafe-2', 'girona', 'cafe', 'Oniria Cafè', 'Carrer del Nord 11, 17001 Girona', '스페셜티 커피 카페. 원두가 다양하고 자전거 여행자가 많이 찾습니다.', 'Specialty coffee café with a range of beans, popular with cyclists.'),
  place('girona-cafe-3', 'girona', 'cafe', 'Espresso Mafia Coffee', 'Carrer de la Cort Reial 5, 17004 Girona, Spain', '지로나 중심가의 인기 커피숍.', 'Popular coffee shop in central Girona.'),
  place('girona-cafe-4', 'girona', 'cafe', 'Syra Coffee', 'Carrer de Santa Clara 26, 17001 Girona, Spain', '바르셀로나에서 시작한 스페셜티 커피 체인의 지로나 매장. 포장 위주입니다.', 'Girona branch of a Barcelona specialty coffee chain; mostly takeaway.'),
  place('girona-korean-1', 'girona', 'korean', 'Restaurant A4MANS', 'Plaça Pompeu Fabra 9, 17001 Girona', '폼페우 파브라 광장의 한식당. 채식 메뉴와 야외석이 있습니다.', 'Korean restaurant on Plaça Pompeu Fabra with vegetarian dishes and outdoor seating.'),

  // —— palma ——
  place('palma-fine_dining-1', 'palma', 'fine_dining', 'Marc Fosh Restaurant', 'Carrer de la Missió 7, 07003 Palma', '영국 출신 셰프 마크 포시의 미쉐린 1스타 지중해 요리 레스토랑. 일·월요일은 쉽니다.', 'One-Michelin-star Mediterranean restaurant of British chef Marc Fosh; closed Sundays and Mondays.', { michelin: 'star1' }),
  place('palma-fine_dining-2', 'palma', 'fine_dining', 'Adrián Quetglas', 'Passeig de Mallorca 20, 07012 Palma de Mallorca', '미쉐린 가이드에 실린 팔마의 현대 지중해 요리 레스토랑. 일·월요일은 쉽니다.', 'Palma restaurant listed in the Michelin Guide, serving modern Mediterranean food; closed Sundays and Mondays.'),
  place('palma-fine_dining-3', 'palma', 'fine_dining', 'DINS Santi Taura', 'Plaça de Llorenç Villalonga 4, 07001 Palma de Mallorca', '마요르카 옛 요리를 재해석하는 미쉐린 1스타 레스토랑. 일·월요일은 쉽니다.', 'One-Michelin-star restaurant reinterpreting historical Majorcan cooking; closed Sundays and Mondays.', { michelin: 'star1' }),
  place('palma-fine_dining-4', 'palma', 'fine_dining', 'Casa Maruka', 'Carrer de la Reina Maria Cristina 7, 07004 Palma de Mallorca', '에스파냐 광장 근처의 마요르카 요리 식당. 새끼 돼지 구이와 와인이 있고 예약하는 편이 좋습니다.', 'Majorcan restaurant near the Plaça d’Espanya with roast suckling pig and a strong wine list; booking advised.'),
  place('palma-fine_dining-5', 'palma', 'fine_dining', 'La Rosa Vermutería & Colmado', 'Carrer de la Rosa 5, 07003 Palma de Mallorca', '구시가의 베르무트 바 겸 식료품점. 통조림 안주와 타파스가 있고 매일 정오부터 자정까지 엽니다.', 'Old-town vermouth bar and grocery with tinned specialities and tapas, open daily noon to midnight.'),

  place('palma-bakery-1', 'palma', 'bakery', 'Forn del Santo Cristo', 'Carrer de Sant Miquel 47, 07002 Palma de Mallorca, Spain', '1910년 시작한 팔마의 빵집 산토 크리스토의 지점. 여러 맛의 엔사이마다가 있습니다.', 'Branch of Santo Cristo, a Palma bakery founded in 1910, with ensaïmadas in many flavours.', { image: '/places/palma-bakery-1.jpg' }),
  place('palma-bakery-2', 'palma', 'bakery', 'Fornet de la Soca', 'Plaça del General Weyler 9, 07001 Palma', '모더니즘 양식 옛 빵집 건물의 가게. 집과 수도원에서 모은 마요르카 옛 레시피로 빵과 과자를 굽습니다.', 'Bakery in a Modernista former bakery building, baking old Majorcan recipes collected from homes and convents.', { image: '/places/palma-bakery-2.jpg' }),
  place('palma-bakery-3', 'palma', 'bakery', 'Lluís Perez Pastisser', 'Carrer de Bonaire 14, 07012 Palma de Mallorca', '팔마 시내의 파티스리(2015년 개업). 크루아상과 케이크, 스페셜티 커피가 있습니다.', 'Pâtisserie in central Palma (opened 2015) with croissants, cakes and specialty coffee.'),
  place('palma-cafe-1', 'palma', 'cafe', 'Ca\'n Joan de s\'Aigo', 'Carrer de Can Sanç 10, 07001 Palma', '팔마에서 가장 오래된 페이스트리 숍 중 하나', 'One of Palma\'s oldest and best-known pastry shops'),
  place('palma-cafe-2', 'palma', 'cafe', 'Mistral Coffee Roasters', 'Carrer del Banc 4, 07001 Palma de Mallorca', '마요르카에서 원두를 볶는 미스트랄 커피의 작은 서서 마시는 카운터. 일요일은 쉽니다.', 'Small standing counter of Mistral, a Majorcan coffee roaster; closed Sundays.'),
  place('palma-cafe-3', 'palma', 'cafe', 'Cafè Riutort', 'Carrer del Carme 25, 07003 Palma', '람블라스 근처의 작은 커피·브런치 카페. 채식 메뉴가 있고 노트북은 쓸 수 없습니다. 일·월요일은 쉽니다.', 'Small coffee and brunch café near the Ramblas with vegetarian dishes; no laptops, closed Sundays and Mondays.'),
  place('palma-cafe-4', 'palma', 'cafe', 'La Molienda', 'Carrer del Bisbe Campins 11, 07012 Palma', '원두를 직접 볶는 구시가의 카페. 작은 광장 테라스가 있고 글루텐 프리 빵도 굽습니다.', 'Old-town café roasting its own coffee, with a terrace on a small square and its own gluten-free bread.'),
  place('palma-cafe-5', 'palma', 'cafe', 'Arabay Coffee', 'Carrer del Sindicat 5, 07002 Palma', '마요르 광장 근처, 마요르카 로스터 아라바이의 플래그십 카페. 원두도 팝니다.', 'Flagship café of the Majorcan roaster Arabay near the Plaça Major, also selling beans.'),
  place('palma-korean-2', 'palma', 'korean', 'Hanok Corea BBQ', 'Carrer del Bisbe Maura 6, 07003 Palma', '레반트 지구의 한국식 바비큐 식당. 테이블에서 굽고 QR 코드로 주문합니다.', 'Korean barbecue in the Llevant district with tableside grilling and QR-code ordering.'),
  place('palma-korean-3', 'palma', 'korean', 'Bi Bap', 'Plaça del Mercat 3, 07001 Palma de Mallorca', '메르카트 광장의 아시아 식당. 비빔밥 같은 한식과 다른 아시아 요리를 내고 일요일은 쉽니다.', 'Asian restaurant on the Plaça del Mercat serving bibimbap and other Korean and Asian dishes; closed Sundays.'),

  // —— nerja ——
  place('nerja-fine_dining-1', 'nerja', 'fine_dining', 'Oliva', 'Plaza de España 2, 29780 Nerja', '에스파냐 광장의 지중해 요리 레스토랑. 테라스가 있고 미쉐린 가이드에 실려 있습니다.', 'Mediterranean restaurant on the Plaza de España with a terrace, listed in the Michelin Guide.', { image: '/places/nerja-fine_dining-1.jpg' }),
  place('nerja-fine_dining-2', 'nerja', 'fine_dining', 'Bar Dolores "El Chispa"', 'Calle San Pedro 12, 29780 Nerja', '산 페드로 거리의 해산물 타파스 바. 문어·마늘 새우·생선튀김이 있고 늘 붐빕니다.', 'Seafood tapas bar on Calle San Pedro with octopus, garlic prawns and fried fish; always busy.'),
  place('nerja-fine_dining-3', 'nerja', 'fine_dining', 'Bar El Pulguilla', 'Calle Almirante Ferrándiz 26, 29780 Nerja', '발콘 데 에우로파 근처 식당 거리의 타파스 바. 생선튀김이 있고 음료에 타파를 골라 받을 수 있습니다. 월요일은 쉽니다.', 'Tapas bar on the restaurant street near the Balcón de Europa, known for fried fish, with a free tapa of your choice per drink; closed Mondays.'),
  place('nerja-fine_dining-4', 'nerja', 'fine_dining', 'La Puntilla', 'Calle Bolivia 1, 29780 Nerja', '해산물 식당과 타파스 바를 함께 하는 가게. 생선구이와 해산물 밥이 있습니다.', 'Seafood restaurant with a separate tapas bar, serving grilled fish and seafood rice.', { image: '/places/nerja-fine_dining-4.jpg' }),
  place('nerja-bakery-2', 'nerja', 'bakery', 'Nybakat Café & Bakery', 'Camino de Burriana s/n, 29780 Nerja', '부리아나 해변 가는 길의 북유럽식 빵집. 시나몬·카다멈 번이 대표 메뉴입니다.', 'Scandinavian-style bakery on the road to Burriana beach, known for cinnamon and cardamom buns.'),
  place('nerja-bakery-3', 'nerja', 'bakery', 'Panadería Confitería Salvador', 'Calle Granada 92, 29780 Nerja', '그라나다 거리의 빵집 겸 제과점. 장인 빵과 페이스트리가 있고 커피도 마실 수 있습니다.', 'Bakery and pastry shop on Calle Granada with artisan bread and pastries, plus coffee.', { image: '/places/nerja-bakery-3.jpg' }),
  place('nerja-cafe-1', 'nerja', 'cafe', 'Cafetería Pastelería Tiramisu', 'Calle Jaén 5, 29780 Nerja, Spain', '발콘 데 에우로파에서 걸어서 10~15분 거리의 제과 카페. 티라미수와 포카치아 샌드위치가 있습니다.', 'Pâtisserie café 10–15 minutes’ walk from the Balcón de Europa, with tiramisu and focaccia sandwiches.'),

  // —— gibraltar ——
  place('gibraltar-fine_dining-2', 'gibraltar', 'fine_dining', 'AquaTerra', 'Unit G8, ICC, 2 Main Street, Casemates Square, Gibraltar GX11 1AA', '케이스메이츠 광장의 작은 스페인·지중해 식당. 하몬·스테이크·해산물이 있고 예약하는 편이 좋습니다.', 'Small Spanish-Mediterranean restaurant on Casemates Square with ham, steaks and seafood; booking advised.'),
  place('gibraltar-fine_dining-4', 'gibraltar', 'fine_dining', "Charlie's Steak House and Grill", '4/5 Britannia House, Marina Bay, Gibraltar GX11 1AA', '마리나 베이의 스테이크하우스. 립아이·필레 스테이크와 양갈비가 있고 예약하는 편이 좋습니다.', 'Steakhouse at Marina Bay with rib-eye and fillet steaks and rack of lamb; booking advised.'),
  place('gibraltar-fine_dining-5', 'gibraltar', 'fine_dining', 'Casa Pepe', 'Unit 18, Queensway Quay Marina, Gibraltar', '퀸스웨이 키 마리나의 스페인 식당. 타파스·생선·파에야가 있습니다.', 'Spanish restaurant at Queensway Quay Marina with tapas, fish and paella.'),

  place('gibraltar-bakery-2', 'gibraltar', 'bakery', 'Piece of Cake Boutique Bakery', 'The Residence, 29-35 Engineer Ln, Gibraltar', '케이크·컵케이크·브라우니를 만드는 부티크 빵집. 일요일은 쉽니다.', 'Boutique bakery making cakes, cupcakes and brownies; closed Sundays.'),
  place('gibraltar-cafe-1', 'gibraltar', 'cafe', 'Amar’s Kosher Bakery & Restaurant', '1 Convent Place, Gibraltar GX11 1AA', '컨벤트 플레이스의 코셔 빵집 겸 식당.', 'Kosher bakery and restaurant on Convent Place.'),

  // —— cuenca ——
  place('cuenca-fine_dining-1', 'cuenca', 'fine_dining', 'Raff San Pedro', 'C. San Pedro 58, 16001 Cuenca', '구시가 산 페드로 거리의 레스토랑.', 'Restaurant on Calle San Pedro in the old town.'),
  place('cuenca-fine_dining-2', 'cuenca', 'fine_dining', 'Romera Bistrót', 'C. de los Tintes 19, 16002 Cuenca', '우에카르강 근처의 비스트로.', 'Bistro near the Huécar river.'),
  place('cuenca-bakery-1', 'cuenca', 'bakery', 'Pastelería Marisol', 'C. Diego Jiménez 4, 16004 Cuenca', '신시가의 제과점.', 'Pastry shop in the new town.'),
  place('cuenca-cafe-1', 'cuenca', 'cafe', 'Hope Coffee', 'C. Hurtado de Mendoza 1, 16004 Cuenca', '신시가의 커피숍.', 'Coffee shop in the new town.'),

  // —— tarragona ——
  place('tarragona-fine_dining-1', 'tarragona', 'fine_dining', 'El Pòsit', 'Moll de Pescadors 25, 43004 Tarragona', '세라요 어항의 해산물 식당.', 'Seafood restaurant at the El Serrallo fishing port.'),
  place('tarragona-fine_dining-2', 'tarragona', 'fine_dining', 'Casa Balcells', 'Pla de la Seu 5, 43003 Tarragona', '대성당 앞 광장의 지중해 요리 식당.', 'Mediterranean restaurant on the cathedral square.'),
  place('tarragona-fine_dining-3', 'tarragona', 'fine_dining', 'La Xarxa', 'Carrer de Sant Pere 38, 43004 Tarragona', '세라요 지구의 해산물 레스토랑. 미쉐린 가이드 선정.', 'Seafood restaurant in the Serrallo district. In the MICHELIN Guide.'),
  place('tarragona-bakery-1', 'tarragona', 'bakery', 'Dolce Pastis', 'Rambla Vella 3, 43003 Tarragona', '람블라 베야의 빵집.', 'Bakery on the Rambla Vella.'),
  place('tarragona-cafe-1', 'tarragona', 'cafe', 'Petit Café Tarragona', 'Carrer d\'en Salinas 8, 43003 Tarragona', '구시가의 에스프레소 바.', 'Espresso bar in the old town.'),
  place('tarragona-cafe-2', 'tarragona', 'cafe', 'Jardí Cafè', 'Carrer dels Caputxins 35, 43001 Tarragona', '신시가의 카페.', 'Café in the new town.'),

  // —— sitges ——
  place('sitges-fine_dining-1', 'sitges', 'fine_dining', 'Bar Tomeu', 'Carrer Jesús 8, 08870 Sitges', '시내 중심의 타파스 바.', 'Tapas bar in the centre.'),
  place('sitges-fine_dining-2', 'sitges', 'fine_dining', 'Sitges Bon Estar', 'Carrer de les Parellades 63, 08870 Sitges', '시내 중심의 지중해 요리 식당.', 'Mediterranean restaurant in the centre.'),
  place('sitges-bakery-1', 'sitges', 'bakery', 'Modo Boulangerie', 'Carrer de Rafael Llopart 22, 08870 Sitges', '시내의 빵집.', 'Bakery in the town.'),
  place('sitges-bakery-2', 'sitges', 'bakery', 'St Pierre', 'Carrer de la Creu Roja 1, 08870 Sitges', '시내의 빵집.', 'Bakery in the town.'),
  place('sitges-cafe-1', 'sitges', 'cafe', 'La Butaca Cafetería', 'Carrer de Santiago Rusiñol 36, 08870 Sitges', '시내의 커피숍.', 'Coffee shop in the town.'),
  place('sitges-cafe-2', 'sitges', 'cafe', 'Bloom Coffee', 'Av. Camí de la Fita 10, 08870 Sitges', '시내 북쪽의 카페.', 'Café north of the centre.'),

  // —— cadiz: bakeries and cafés (2026-11-04) ——
  place('cadiz-bakery-1', 'cadiz', 'bakery', 'Pastelería Casa Hidalgo', 'Plaza Catedral 8, 11005 Cádiz', '대성당 광장의 제과점.', 'Pastry shop on the cathedral square.'),
  place('cadiz-bakery-2', 'cadiz', 'bakery', 'Le Poème', 'C. Alcalá Galiano 3, 11001 Cádiz', '구시가의 파티스리.', 'Pâtisserie in the old town.'),
  place('cadiz-cafe-1', 'cadiz', 'cafe', 'Café de Levante', 'C. Rosario 35, 11004 Cádiz', '구시가의 에스프레소 바.', 'Espresso bar in the old town.'),
  place('cadiz-cafe-2', 'cadiz', 'cafe', 'Clandestine Library', 'C. José del Toro 23, 11004 Cádiz', '구시가의 책 카페.', 'Book café in the old town.'),

  // —— avila: bakeries and cafés (2026-11-04) ——
  place('avila-bakery-1', 'avila', 'bakery', 'Chuchi Pasteles', 'C. de San Segundo 24, 05001 Ávila', '성벽 동쪽 산 세군도 거리의 제과점.', 'Pastry shop on Calle San Segundo by the east walls.'),
  place('avila-cafe-1', 'avila', 'cafe', 'Picco Café', 'C. Caballeros 2, 05001 Ávila', '성벽 안의 스페셜티 커피 카페.', 'Speciality coffee café inside the walls.'),
  place('avila-cafe-2', 'avila', 'cafe', 'Catacafé', 'C. Hornos Caleros 3, 05001 Ávila', '스페셜티 커피 카페.', 'Speciality coffee café.'),

  // —— leon: restaurants, bakeries and cafés (2026-11-08) ——
  place('leon-fine_dining-1', 'leon', 'fine_dining', 'Pablo', 'Avenida Los Cubos 8, 24007 León, Spain', '대성당 옆 성벽 아래의 현대 요리 레스토랑. 미쉐린 1스타.', 'Contemporary cuisine below the walls by the cathedral. One MICHELIN star.', { michelin: 'star1' }),
  place('leon-fine_dining-2', 'leon', 'fine_dining', 'Cocinandos', 'Plaza de San Marcos 5, 24001 León, Spain', '산 마르코스 수도원 안의 현대 요리 레스토랑. 미쉐린 1스타.', 'Modern cuisine inside the San Marcos monastery. One MICHELIN star.', { michelin: 'star1' }),
  place('leon-fine_dining-3', 'leon', 'fine_dining', 'Cocina con MiMo', 'La Rúa 33, 24003 León, Spain', '구시가의 현대 요리 비스트로. 미쉐린 빕 구르망.', 'Contemporary bistro in the old town. MICHELIN Bib Gourmand.', { michelin: 'bib' }),
  place('leon-cafe-1', 'leon', 'cafe', 'Funky Coffee', 'Plaza de Puerta Obispo 14, León, Spain', '대성당 옆 광장의 스페셜티 커피 바.', 'Specialty coffee bar on the square beside the cathedral.'),
  place('leon-bakery-1', 'leon', 'bakery', 'Pastelería Flor de Lis', 'Calle Cervantes 11, León, Spain', '구시가의 케이크·과자 가게.', 'Cake and pastry shop in the old town.'),
  place('leon-bakery-2', 'leon', 'bakery', 'Nazaré Hojaldrería', 'Calle las Varillas 5, León, Spain', '바삭한 페이스트리(오할드레) 전문 과자점.', 'Pastry shop specialising in flaky hojaldre.'),

  // —— burgos: restaurants, bakeries and cafés (2026-11-08) ——
  place('burgos-fine_dining-1', 'burgos', 'fine_dining', 'Cobo Evolución', 'Plaza de la Libertad 9, 09004 Burgos, Spain', '카사 코르돈 옆의 현대 요리 레스토랑. 미쉐린 1스타.', 'Modern cuisine beside the Casa del Cordón. One MICHELIN star.', { michelin: 'star1' }),
  place('burgos-fine_dining-2', 'burgos', 'fine_dining', 'Ricardo Temiño', 'Calle San Juan 3, 09003 Burgos, Spain', '카스티야 지방 요리를 현대적으로 내는 레스토랑. 미쉐린 1스타.', 'Castilian regional cooking with a contemporary touch. One MICHELIN star.', { michelin: 'star1' }),
  place('burgos-fine_dining-3', 'burgos', 'fine_dining', 'Cobo Tradición', 'Plaza de la Libertad 9, 09004 Burgos, Spain', '같은 셰프의 전통 요리 식당. 미쉐린 가이드 선정.', 'The same chef’s traditional-cuisine dining room. In the MICHELIN Guide.'),
  place('burgos-cafe-1', 'burgos', 'cafe', 'Juay Specialty Coffee', 'Calle Compostela 5, Burgos, Spain', '구시가의 스페셜티 커피 바.', 'Specialty coffee bar in the old town.'),
  place('burgos-bakery-1', 'burgos', 'bakery', 'Pastelería Silma', 'Calle San Pablo 7, Burgos, Spain', '케이크와 과자를 파는 동네 제과점.', 'Neighbourhood cake and pastry shop.'),
  place('burgos-bakery-2', 'burgos', 'bakery', 'Brownie Burgos', 'Calle Nuestra Señora de Fátima 5, Burgos, Spain', '브라우니와 쿠키 전문 제과점.', 'Bakery specialising in brownies and cookies.'),

  // —— logrono: restaurants, bakeries and cafés (2026-11-08) ——
  place('logrono-fine_dining-1', 'logrono', 'fine_dining', 'Ikaro', 'Avenida de Portugal 3, 26001 Logroño, Spain', '창의 요리 레스토랑. 미쉐린 1스타.', 'Creative cuisine. One MICHELIN star.', { michelin: 'star1' }),
  place('logrono-fine_dining-2', 'logrono', 'fine_dining', 'Ajonegro', 'Calle Hermanos Moroy 1, 26001 Logroño, Spain', '멕시코 요리를 섞은 퓨전 레스토랑. 미쉐린 1스타.', 'Fusion cooking with Mexican influences. One MICHELIN star.', { michelin: 'star1' }),
  place('logrono-fine_dining-3', 'logrono', 'fine_dining', 'Kiro Sushi', 'Calle Emilia Pardo Bazán 5, 26009 Logroño, Spain', '카운터 스시 오마카세. 미쉐린 1스타.', 'Counter-seat sushi omakase. One MICHELIN star.', { michelin: 'star1' }),
  place('logrono-fine_dining-4', 'logrono', 'fine_dining', 'La Cocina de Ramón', 'Calle Portales 24, 26001 Logroño, Spain', '구시가의 리오하 가정식 레스토랑. 미쉐린 빕 구르망.', 'Riojan home cooking in the old town. MICHELIN Bib Gourmand.', { michelin: 'bib' }),
  place('logrono-cafe-1', 'logrono', 'cafe', 'Cafés El Pato', 'Calle Hermanos Moroy 26, Logroño, Spain', '직접 볶은 원두를 파는 오래된 커피 가게.', 'Long-standing coffee roaster and café.'),
  place('logrono-cafe-2', 'logrono', 'cafe', 'Café Victoriano Ninette', 'Calle de la Merced 4, Logroño, Spain', '구시가의 아침·브런치 카페.', 'Old-town café for breakfast and brunch.'),
  place('logrono-bakery-1', 'logrono', 'bakery', 'Deli Pastelería', 'Calle Portales 69, Logroño, Spain', '포르탈레스 거리의 제과점.', 'Pastry shop on Calle Portales.'),
  place('logrono-bakery-2', 'logrono', 'bakery', 'Papín Gastronomía Dulce', 'Travesía San Juan 2, Logroño, Spain', '과자와 디저트를 파는 가게.', 'Sweets and dessert shop.'),

  // —— pamplona: restaurants, bakeries and cafés (2026-11-08) ——
  place('pamplona-fine_dining-1', 'pamplona', 'fine_dining', 'Europa', 'Calle Espoz y Mina 11, 31002 Pamplona, Spain', '카스티요 광장 옆의 현대 요리 레스토랑. 미쉐린 1스타.', 'Contemporary cuisine off Plaza del Castillo. One MICHELIN star.', { michelin: 'star1' }),
  place('pamplona-fine_dining-2', 'pamplona', 'fine_dining', 'Rodero', 'Calle Emilio Arrieta 3, 31002 Pamplona, Spain', '나바라 채소를 살린 현대 요리 레스토랑. 미쉐린 1스타.', 'Modern cuisine built on Navarrese vegetables. One MICHELIN star.', { michelin: 'star1' }),
  place('pamplona-fine_dining-3', 'pamplona', 'fine_dining', 'Kabo', 'Avenida de Zaragoza 10, 31003 Pamplona, Spain', '현대 요리 레스토랑. 미쉐린 1스타.', 'Contemporary cuisine. One MICHELIN star.', { michelin: 'star1' }),
  place('pamplona-fine_dining-4', 'pamplona', 'fine_dining', 'El Merca\'o', 'Calle Tafalla 5-7, 31004 Pamplona, Spain', '전통 요리 식당. 미쉐린 빕 구르망.', 'Traditional cooking. MICHELIN Bib Gourmand.', { michelin: 'bib' }),
  place('pamplona-cafe-1', 'pamplona', 'cafe', 'Compañía Café', 'Calle de la Compañía 1, Pamplona, Spain', '구시가의 스페셜티 카페.', 'Specialty café in the old town.'),
  place('pamplona-cafe-2', 'pamplona', 'cafe', 'Blüm Café de Especialidad', 'Plaza del Castillo 6, Pamplona, Spain', '카스티요 광장의 스페셜티 커피 바.', 'Specialty coffee bar on Plaza del Castillo.'),
  place('pamplona-bakery-1', 'pamplona', 'bakery', 'Confitería Layana', 'Calle Calceteros 12, Pamplona, Spain', '구시가의 오래된 과자점.', 'Long-established confectioner in the old town.'),

  // —— santander: restaurants, bakeries and cafés (2026-11-08) ——
  place('santander-fine_dining-1', 'santander', 'fine_dining', 'Casona del Judío', 'Calle Repuente 20, 39012 Santander, Spain', '19세기 저택의 현대 요리 레스토랑. 미쉐린 1스타.', 'Modern cuisine in a 19th-century mansion. One MICHELIN star.', { michelin: 'star1' }),
  place('santander-fine_dining-2', 'santander', 'fine_dining', 'El Serbal', 'Avenida de Manuel García Lago 1, 39005 Santander, Spain', '현대 요리 레스토랑. 미쉐린 1스타.', 'Modern cuisine. One MICHELIN star.', { michelin: 'star1' }),
  place('santander-fine_dining-3', 'santander', 'fine_dining', 'Agua Salada', 'Calle San Simón 2, 39003 Santander, Spain', '시내의 작은 현대 요리 식당. 미쉐린 빕 구르망.', 'Small contemporary restaurant in the centre. MICHELIN Bib Gourmand.', { michelin: 'bib' }),
  place('santander-cafe-1', 'santander', 'cafe', 'MOOD Specialty Coffee', 'Calle Juan de Herrera 24, Santander, Spain', '시내 중심의 스페셜티 커피 바.', 'Specialty coffee bar in the centre.'),
  place('santander-cafe-2', 'santander', 'cafe', 'Kafeteros', 'Mercado de la Esperanza (planta alta), Plaza de la Esperanza, Santander, Spain', '라 에스페란사 시장 2층의 커피 바.', 'Coffee bar upstairs in the Esperanza market.'),
  place('santander-bakery-1', 'santander', 'bakery', 'Tombo', 'Calle Santa Lucía 51, Santander, Spain', '페이스트리 가게.', 'Pastry shop.'),
  place('santander-bakery-2', 'santander', 'bakery', 'La Balanza', 'Calle Valliciergo 7, Santander, Spain', '빵과 과자를 굽는 제과점.', 'Bakery for bread and pastries.'),

  // —— oviedo: restaurants, bakeries and cafés (2026-11-08) ——
  place('oviedo-fine_dining-1', 'oviedo', 'fine_dining', 'Ca\'Suso', 'Calle Marqués de Gastañaga 13, 33009 Oviedo, Spain', '현대 요리 레스토랑. 미쉐린 가이드 선정.', 'Contemporary cuisine. In the MICHELIN Guide.'),
  place('oviedo-fine_dining-2', 'oviedo', 'fine_dining', 'Casa Fermín', 'Calle San Francisco 8, 33003 Oviedo, Spain', '1924년부터 이어진 아스투리아스 전통 요리 레스토랑. 미쉐린 가이드 선정.', 'Asturian traditional restaurant running since 1924. In the MICHELIN Guide.'),
  place('oviedo-fine_dining-3', 'oviedo', 'fine_dining', 'Gloria', 'Calle Cervantes 24, 33004 Oviedo, Spain', '아시아 풍미를 더한 아스투리아스 요리. 미쉐린 가이드 선정.', 'Asturian cooking with Asian touches. In the MICHELIN Guide.'),
  place('oviedo-cafe-1', 'oviedo', 'cafe', 'Radical Café de Especialidad', 'Calle Fray Ceferino 5, Oviedo, Spain', '스페셜티 커피와 말차 바.', 'Specialty coffee and matcha bar.'),
  place('oviedo-cafe-2', 'oviedo', 'cafe', 'Pionero Coffee Roasters', 'Calle Marqués de Pidal 21, Oviedo, Spain', '직접 볶는 로스터리 카페.', 'Roastery café.'),
  place('oviedo-bakery-1', 'oviedo', 'bakery', 'Confitería Rialto', 'Calle San Francisco 12, Oviedo, Spain', '초콜릿 과자 ‘모스코비타’로 유명한 과자점.', 'Confectioner famous for its chocolate-almond moscovitas.'),
  place('oviedo-bakery-2', 'oviedo', 'bakery', 'Camilo de Blas', 'Calle Jovellanos 7, Oviedo, Spain', '1914년 문을 연 과자점으로 아몬드 과자 ‘카르바욘’이 명물입니다.', 'Confectioner opened in 1914, famous for its almond carbayones.'),

  // —— teruel: restaurants, bakeries and cafés (2026-11-08) ——
  place('teruel-fine_dining-1', 'teruel', 'fine_dining', 'Método', 'Calle Francisco Piquer 6, 44001 Teruel, Spain', '현대 요리 레스토랑. 미쉐린 가이드 선정.', 'Contemporary cuisine. In the MICHELIN Guide.'),
  place('teruel-fine_dining-2', 'teruel', 'fine_dining', 'Yain', 'Plaza de la Judería 9, 44001 Teruel, Spain', '옛 유대인 지구 광장의 전통 요리 식당. 미쉐린 가이드 선정.', 'Traditional cooking on the old Jewish-quarter square. In the MICHELIN Guide.'),
  place('teruel-cafe-1', 'teruel', 'cafe', 'Luma Specialty Coffee', 'Carretera Alcañiz 39, Teruel, Spain', '스페셜티 커피 바.', 'Specialty coffee bar.'),
  place('teruel-cafe-2', 'teruel', 'cafe', 'CaffèMilano', 'Calle El Salvador 20, Teruel, Spain', '엘 살바도르 탑 근처의 이탈리아식 커피 가게.', 'Italian-style coffee house near the El Salvador tower.'),
  place('teruel-bakery-1', 'teruel', 'bakery', 'Pastelería Muñoz', 'Plaza Carlos Castel 23, Teruel, Spain', '토리코 광장의 오래된 제과점.', 'Long-standing pastry shop on Plaza del Torico.'),
  place('teruel-bakery-2', 'teruel', 'bakery', 'Dolce Artisanal Bakery', 'Plaza de la Catedral 10, Teruel, Spain', '대성당 광장의 수제 쿠키·과자 가게.', 'Handmade cookies and pastries on the cathedral square.'),

  // —— caceres: restaurants, bakeries and cafés (2026-11-08) ——
  place('caceres-fine_dining-1', 'caceres', 'fine_dining', 'Atrio', 'Plaza San Mateo 1, 10003 Cáceres, Spain', '구시가 안 호텔의 창의 요리 레스토랑으로, 와인 셀러가 유명합니다. 미쉐린 3스타.', 'Creative cuisine in an old-town hotel, famous for its wine cellar. Three MICHELIN stars.', { michelin: 'star3' }),
  place('caceres-fine_dining-2', 'caceres', 'fine_dining', 'Madruelo', 'Calle Camberos 2, 10003 Cáceres, Spain', '엑스트레마두라 지방 요리 레스토랑. 미쉐린 가이드 선정.', 'Extremaduran regional cooking. In the MICHELIN Guide.'),
  place('caceres-fine_dining-3', 'caceres', 'fine_dining', 'Torre de Sande', 'Calle Condes 3, 10003 Cáceres, Spain', '구시가 탑 저택의 전통 요리 레스토랑. 미쉐린 가이드 선정.', 'Traditional cooking in a towered old-town mansion. In the MICHELIN Guide.'),
  place('caceres-cafe-1', 'caceres', 'cafe', 'Zeri\'s Specialty Coffee', 'Calle Gil Cordero 7, Cáceres, Spain', '스페셜티 커피 바.', 'Specialty coffee bar.'),
  place('caceres-bakery-1', 'caceres', 'bakery', 'Pastelería La Guinda', 'Avenida Virgen de la Montaña 11, Cáceres, Spain', '케이크와 과자 가게.', 'Cake and pastry shop.'),

  // —— merida: restaurants, bakeries and cafés (2026-11-08) ——
  place('merida-fine_dining-1', 'merida', 'fine_dining', 'Tuétano', 'Calle John Lennon 26, 06800 Mérida, Spain', '숯불 고기와 지방 요리 식당. 미쉐린 가이드 선정.', 'Grilled meats and regional dishes. In the MICHELIN Guide.'),
  place('merida-cafe-1', 'merida', 'cafe', 'La Piel del Oso', 'Calle Bartolomé Torres Naharro 7, Mérida, Spain', '시내의 커피 바.', 'Coffee bar in the centre.'),
  place('merida-bakery-1', 'merida', 'bakery', 'Pastelería Artesanos Roco', 'Calle José Ramón Mélida 13, Mérida, Spain', '수제 과자 가게.', 'Artisan pastry shop.'),
  place('merida-bakery-2', 'merida', 'bakery', 'Pastelería Marquesa de Pinares', 'Calle Marquesa de Pinares 20, Mérida, Spain', '케이크와 과자 가게.', 'Cake and pastry shop.'),

  // —— ubeda: restaurants, bakeries and cafés (2026-11-08) ——
  place('ubeda-fine_dining-1', 'ubeda', 'fine_dining', 'Cantina La Estación', 'Cuesta Rodadera 1, 23400 Úbeda, Spain', '옛 기차 객차처럼 꾸민 현대 요리 식당. 미쉐린 빕 구르망.', 'Contemporary cooking in a dining room styled like a railway carriage. MICHELIN Bib Gourmand.', { michelin: 'bib' }),
  place('ubeda-fine_dining-2', 'ubeda', 'fine_dining', 'Cibus', 'Plaza Primero de Mayo 13, 23400 Úbeda, Spain', '현대 요리 레스토랑. 미쉐린 가이드 선정.', 'Contemporary cuisine. In the MICHELIN Guide.'),
  place('ubeda-fine_dining-3', 'ubeda', 'fine_dining', 'Vandelvira', 'Plaza de San Francisco, 23440 Baeza, Spain', '바에사의 옛 수도원 안 현대 요리 레스토랑. 미쉐린 1스타.', 'Modern cuisine inside a former convent in Baeza. One MICHELIN star.', { michelin: 'star1' }),
  place('ubeda-cafe-1', 'ubeda', 'cafe', 'Cafetería Mágina', 'Calle Real 26, Úbeda, Spain', '구시가의 작은 커피 바.', 'Small coffee bar in the old town.'),
  place('ubeda-bakery-1', 'ubeda', 'bakery', 'Doña Rosita Dulces y Tartas', 'Calle María de Molina 20, Úbeda, Spain', '케이크와 과자 가게.', 'Cake and sweet shop.'),

  // —— jerez: restaurants, bakeries and cafés (2026-11-08) ——
  place('jerez-fine_dining-1', 'jerez', 'fine_dining', 'LÚ Cocina y Alma', 'Calle Zaragoza 2, 11402 Jerez de la Frontera, Spain', '프랑스 기법과 안달루시아 재료를 섞은 현대 요리. 미쉐린 2스타.', 'Modern cuisine blending French technique and Andalusian produce. Two MICHELIN stars.', { michelin: 'star2' }),
  place('jerez-fine_dining-2', 'jerez', 'fine_dining', 'Mantúa', 'Plaza Aladro 7, 11402 Jerez de la Frontera, Spain', '셰리와 함께하는 현대 요리 레스토랑. 미쉐린 1스타.', 'Modern cuisine paired with sherry. One MICHELIN star.', { michelin: 'star1' }),
  place('jerez-fine_dining-3', 'jerez', 'fine_dining', 'Albalá', 'Calle Divina Pastora, 11403 Jerez de la Frontera, Spain', '현대 요리 식당. 미쉐린 가이드 선정.', 'Contemporary restaurant. In the MICHELIN Guide.'),
  place('jerez-cafe-1', 'jerez', 'cafe', 'Nüra Food & Coffee', 'Calle Ventura Núñez Venturita 15, Jerez de la Frontera, Spain', '스페셜티 커피와 브런치.', 'Specialty coffee and brunch.'),
  place('jerez-bakery-1', 'jerez', 'bakery', 'Pastelería Jesús', 'Calle Bizcocheros 28, Jerez de la Frontera, Spain', '동네 제과점.', 'Neighbourhood pastry shop.'),
  place('jerez-bakery-2', 'jerez', 'bakery', 'La Rosa de Oro', 'Calle San Francisco de Paula 14, Jerez de la Frontera, Spain', '오래된 과자점.', 'Long-standing confectioner.'),

  // —— tarifa: restaurants, bakeries and cafés (2026-11-08) ——
  place('tarifa-fine_dining-1', 'tarifa', 'fine_dining', 'El Guapo Tarifa', 'Calle Guzmán el Bueno 10, Tarifa, Spain', '구시가의 작은 식당. 구글 지도 평점 4.9.', 'Small old-town restaurant; rated 4.9 on Google Maps.'),
  place('tarifa-fine_dining-2', 'tarifa', 'fine_dining', 'Casatarifa', 'Calle Silos 3, Tarifa, Spain', '구시가의 지중해 요리 식당. 구글 지도 평점 4.7.', 'Mediterranean restaurant in the old town; rated 4.7 on Google Maps.'),
  place('tarifa-cafe-1', 'tarifa', 'cafe', 'Color Café Tarifa', 'Calle Batalla del Salado 52, Tarifa, Spain', '아침과 브런치를 먹는 카페.', 'Café for breakfast and brunch.'),
  place('tarifa-cafe-2', 'tarifa', 'cafe', 'Café 10', 'Calle Nuestra Señora de la Luz 10, Tarifa, Spain', '구시가의 카페.', 'Old-town café.'),

  // —— almeria: restaurants, bakeries and cafés (2026-11-08) ——
  place('almeria-fine_dining-1', 'almeria', 'fine_dining', 'Tony García Espacio Gastronómico', 'Avenida del Mediterráneo 281, 04009 Almería, Spain', '현대 요리 레스토랑. 미쉐린 가이드 선정.', 'Contemporary cuisine. In the MICHELIN Guide.'),
  place('almeria-fine_dining-2', 'almeria', 'fine_dining', 'Asador Marino Tinta Negra', 'Calle Fructuoso Pérez 12, 04001 Almería, Spain', '해산물 숯불구이 식당. 미쉐린 가이드 선정.', 'Grilled seafood. In the MICHELIN Guide.'),
  place('almeria-fine_dining-3', 'almeria', 'fine_dining', 'Ginés Peregrín', 'Calle Méndez 6, 04003 Almería, Spain', '현대 요리 레스토랑. 미쉐린 가이드 선정.', 'Contemporary cuisine. In the MICHELIN Guide.'),
  place('almeria-cafe-1', 'almeria', 'cafe', 'Collage Café', 'Calle Sagunto 6, Almería, Spain', '시내 카페.', 'Café in the centre.'),
  place('almeria-cafe-2', 'almeria', 'cafe', 'Conquista Café', 'Calle General Tamayo 12, Almería, Spain', '콜롬비아 원두를 쓰는 커피 바.', 'Coffee bar using Colombian beans.'),
  place('almeria-bakery-1', 'almeria', 'bakery', 'Confitería Virgen del Carmen', 'Calle Inglés 27, Almería, Spain', '오래된 과자점.', 'Long-established confectioner.'),
  place('almeria-bakery-2', 'almeria', 'bakery', 'Days Cakes', 'Calle Canónigo Molina Alonso 5, Almería, Spain', '케이크 가게.', 'Cake shop.'),

  // —— alicante: restaurants, bakeries and cafés (2026-11-08) ——
  place('alicante-fine_dining-1', 'alicante', 'fine_dining', 'Alba', 'Calle Virgen del Socorro 68, 03002 Alicante, Spain', '지중해 요리 식당. 미쉐린 빕 구르망.', 'Mediterranean cooking. MICHELIN Bib Gourmand.', { michelin: 'bib' }),
  place('alicante-fine_dining-2', 'alicante', 'fine_dining', 'Nou Manolín', 'Calle Villegas 3, 03001 Alicante, Spain', '긴 바 카운터로 유명한 지방 요리 레스토랑. 미쉐린 가이드 선정.', 'Regional cooking, famous for its long tapas bar. In the MICHELIN Guide.'),
  place('alicante-fine_dining-3', 'alicante', 'fine_dining', 'La Ereta', 'Parque de la Ereta, 03001 Alicante, Spain', '산타 바르바라 성 아래 언덕 공원의 현대 지중해 요리. 미쉐린 가이드 선정.', 'Modern Mediterranean cuisine in the park below Santa Bárbara Castle. In the MICHELIN Guide.'),
  place('alicante-fine_dining-4', 'alicante', 'fine_dining', 'Monastrell', 'Avenida del Almirante Julio Guillén Tato 1, 03001 Alicante, Spain', '항구 앞 현대 요리 레스토랑. 미쉐린 가이드 선정.', 'Modern cuisine on the harbourfront. In the MICHELIN Guide.'),
  place('alicante-cafe-1', 'alicante', 'cafe', 'Point Bianco Specialty Caffè', 'Carrer del Teatre 25, Alicante, Spain', '시내의 스페셜티 커피 바.', 'Specialty coffee bar in the centre.'),
  place('alicante-cafe-2', 'alicante', 'cafe', 'MO Specialty Coffee', 'Calle General Primo de Rivera 3, Alicante, Spain', '스페셜티 커피 가게.', 'Specialty coffee shop.'),
  place('alicante-bakery-1', 'alicante', 'bakery', 'Espigas Alicante', 'Calle del Capitán Segarra 29, Alicante, Spain', '아르헨티나식 과자점.', 'Argentine-style pastry shop.'),
  place('alicante-bakery-2', 'alicante', 'bakery', 'Salt in Cake', 'Calle San Francisco 61, Alicante, Spain', '시내 중심의 케이크 가게.', 'Cake shop in the centre.'),

  // —— ibiza: restaurants, bakeries and cafés (2026-11-08) ——
  place('ibiza-fine_dining-1', 'ibiza', 'fine_dining', 'Omakase by Walt', 'Calle Canonge Joan Planells 8, 07800 Eivissa, Spain', '카운터 오마카세 일식. 미쉐린 1스타.', 'Counter-seat Japanese omakase. One MICHELIN star.', { michelin: 'star1' }),
  place('ibiza-fine_dining-2', 'ibiza', 'fine_dining', 'Brula', 'Paseo Juan Carlos I 17, 07800 Eivissa, Spain', '창의 요리 레스토랑. 미쉐린 1스타.', 'Creative cuisine. One MICHELIN star.', { michelin: 'star1' }),
  place('ibiza-fine_dining-3', 'ibiza', 'fine_dining', 'Can Font', 'Plaza de España 4, 07800 Eivissa, Spain', '달트 빌라 안의 이비사 지방 요리. 미쉐린 가이드 선정.', 'Ibizan regional cooking inside Dalt Vila. In the MICHELIN Guide.'),
  place('ibiza-cafe-1', 'ibiza', 'cafe', 'One Cup Coffee IBZ', 'Carrer de Vicent Serra i Orvay 10, Eivissa, Spain', '스페셜티 커피 바.', 'Specialty coffee bar.'),
  place('ibiza-cafe-2', 'ibiza', 'cafe', 'Ronda Specialty Coffee', 'Passatge de Castaví 1, Eivissa, Spain', '스페셜티 커피 바.', 'Specialty coffee bar.'),

  // —— menorca: restaurants, bakeries and cafés (2026-11-08) ——
  place('menorca-fine_dining-1', 'menorca', 'fine_dining', 'Smoix', 'Ronda Nord, 07760 Ciutadella de Menorca, Spain', '시우타데야의 현대 요리 레스토랑. 미쉐린 가이드 선정.', 'Contemporary restaurant in Ciutadella. In the MICHELIN Guide.'),
  place('menorca-fine_dining-2', 'menorca', 'fine_dining', 'Aquiara', 'Camí de Macarella, 07750 Ciutadella de Menorca, Spain', '시골 농가의 메노르카 요리. 미쉐린 가이드 선정.', 'Menorcan cooking in a country farmhouse. In the MICHELIN Guide.'),
  place('menorca-fine_dining-3', 'menorca', 'fine_dining', 'Es Cranc', 'Carrer Escoles 31, 07748 Fornells, Spain', '랍스터 스튜 ‘칼데레타’로 유명한 포르넬스의 해산물 식당. 미쉐린 가이드 선정.', 'Fornells seafood restaurant known for its lobster caldereta. In the MICHELIN Guide.'),
  place('menorca-cafe-1', 'menorca', 'cafe', 'Sa Petita', 'Mercat des Claustre, Maó, Spain', '마온 회랑 시장 안의 커피 바.', 'Coffee bar inside Mahón’s cloister market.'),
  place('menorca-bakery-1', 'menorca', 'bakery', 'Es Llonguet Forn Artesà', 'Carrer del Rosari 12, Maó, Spain', '엔사이마다를 굽는 마온의 빵집 겸 카페.', 'Mahón bakery-café baking ensaïmadas.'),
  place('menorca-bakery-2', 'menorca', 'bakery', 'Pastelería Sandra', 'Carrer de Sant Jordi 15, Maó, Spain', '마온의 과자점.', 'Pastry shop in Mahón.'),

  // —— tenerife: restaurants, bakeries and cafés (2026-11-08) ——
  place('tenerife-fine_dining-1', 'tenerife', 'fine_dining', 'Silbo Gomero', 'Calle Volcán Elena 9, 38108 San Cristóbal de La Laguna, Spain', '카나리아 재료를 쓰는 현대 요리 식당. 미쉐린 빕 구르망.', 'Contemporary cooking with Canarian produce. MICHELIN Bib Gourmand.', { michelin: 'bib' }),
  place('tenerife-cafe-1', 'tenerife', 'cafe', 'AHUL Coffee', 'Calle Bencomo 20, San Cristóbal de La Laguna, Spain', '라 라구나 구시가의 스페셜티 커피 바.', 'Specialty coffee bar in La Laguna’s old town.'),
  place('tenerife-cafe-2', 'tenerife', 'cafe', 'coffeeURBANroasters', 'Calle San Agustín 65, San Cristóbal de La Laguna, Spain', '직접 볶는 로스터리 카페.', 'Roastery café.'),
  place('tenerife-bakery-1', 'tenerife', 'bakery', 'Varguita Cheesecake', 'Calle Herradores 86, San Cristóbal de La Laguna, Spain', '치즈케이크 전문점.', 'Cheesecake shop.'),
  place('tenerife-bakery-2', 'tenerife', 'bakery', 'Makika&Co', 'Calle San Juan 15, San Cristóbal de La Laguna, Spain', '구시가의 파티스리 카페.', 'Patisserie-café in the old town.'),
]
