import { place } from './placeFactory'
import type { Place } from '../types'

export const placesMKExtra: Place[] = [
  // —— skopje ——
  place('skopje-fine_dining-1', 'skopje', 'fine_dining', 'Destan', 4.2, 'Bulevar Partizanski odredi 35, Skopje', '1913년부터 이어온 구시장의 대표 케밥 레스토랑.', 'Old Bazaar institution serving traditional finger-kebab since 1913.', { reviewCount: 1100 }),
  place('skopje-fine_dining-2', 'skopje', 'fine_dining', 'Pivnica An', 3.8, 'Old Bazaar, Skopje', '오스만 시대 여관 건물의 구시장 레스토랑, 무츠칼리차·굴라시가 유명.', 'Restaurant in a former Ottoman-era inn in the Old Bazaar, known for mućkalica stew and goulash.'),
  place('skopje-fine_dining-3', 'skopje', 'fine_dining', 'Soul Kitchen - Macedonian Wine & Cuisine', 4.3, 'Kej 13-ti Noemvri, Skopje', '바르다르 강변에서 전통 마케도니아 요리와 인터내셔널 퓨전을 선보이는 레스토랑.', 'Vardar riverside restaurant blending traditional Macedonian dishes with international fusion.', { reviewCount: 3684 }),

  place('skopje-bakery-1', 'skopje', 'bakery', 'Silbo Furna', 4.3, 'Majakovski 2, Skopje', '24시간 운영하는 스코페 최고 인기의 부렉 베이커리.', 'Skopje\'s most popular 24-hour bakery, known for its burek.'),
  place('skopje-bakery-2', 'skopje', 'bakery', 'Bakery La Delicious', 4.4, 'Leninova 44, Skopje', '24시간 운영하는 인기 베이커리, 부렉과 페이스트리로 유명.', '24-hour bakery popular for its burek and pastries.', { reviewCount: 1207 }),
  place('skopje-bakery-3', 'skopje', 'bakery', 'Delice Patisserie Skopje', 4.9, 'Kurchiska, Skopje', '프랑스식 디저트를 선보이는 스코페의 평점 높은 파티스리.', 'Highly rated French-style patisserie in Skopje.', { reviewCount: 271 }),
  place('skopje-bakery-4', 'skopje', 'bakery', 'Pan Pan Kapistec - Bakery & Specialty Coffee', 4.8, 'Vasil Gjorgov 33, Skopje 1000', '베이커리와 스페셜티 커피를 함께 선보이는 카피스텍 지구의 인기 가게.', 'Popular bakery and specialty coffee spot in the Kapishtec neighborhood.', { reviewCount: 55 }),
  place('skopje-bakery-5', 'skopje', 'bakery', 'Oriolo Skopje', 4.5, 'Naum Naumovski Borche 40, Skopje', '나움 나우모프스키 보르체 거리의 인기 베이커리.', 'Popular bakery on Naum Naumovski Borche street.', { reviewCount: 213 }),

  place('skopje-cafe-1', 'skopje', 'cafe', 'Cafe Bar Vinyl', 4.5, 'Partizanski Odredi 14, Skopje', '시내 중심가와 데바르 말로 사이에 위치한 인더스트리얼 감성의 카페.', 'Industrial-feel café located between the city center and Debar Maalo.'),
  place('skopje-cafe-2', 'skopje', 'cafe', 'The Dude Specialty Coffee', 4.9, 'Apostle Guslarot 16, Skopje', '아포스톨 구슬라롯 거리의 평점 높은 스페셜티 커피숍.', 'Highly rated specialty coffee shop on Apostol Guslarot street.', { reviewCount: 623 }),
  place('skopje-cafe-3', 'skopje', 'cafe', 'Central Park', 4.3, 'Gradski Park, Skopje 1000', '그라드스키 공원 안에 위치한 인기 카페.', 'Popular café located inside Gradski Park (City Park).', { reviewCount: 821 }),
  place('skopje-cafe-4', 'skopje', 'cafe', 'Central Coffee', 4.6, 'Mitropolit Teodosij Gologanov 96, Skopje', '미트로폴리트 테오도시 골로가노프 거리의 평점 높은 커피숍.', 'Highly rated coffee shop on Mitropolit Teodosij Gologanov street.', { reviewCount: 294 }),
  place('skopje-cafe-5', 'skopje', 'cafe', 'Café Metanoja', 4.9, 'Maksim Gorki 19, Skopje', '막심 고르키 거리의 평점 높은 아늑한 카페.', 'Highly rated, cozy café on Maksim Gorki street.', { reviewCount: 177 }),

  // —— ohrid ——
  place('ohrid-fine_dining-1', 'ohrid', 'fine_dining', 'Gladiator', 4.5, 'Braka Miladinovi br. 14, Ohrid', '고대 원형극장 옆, 450년 된 전통 가옥에서 즐기는 마케도니아 가정식.', 'Macedonian home cooking served in a 450-year-old traditional house beside the ancient amphitheatre.'),
  place('ohrid-fine_dining-2', 'ohrid', 'fine_dining', 'Plate Bistro', 4.9, 'Dimitar Vlahov 20, Ohrid', '디미타르 블라호프 거리의 평점 높은 인기 비스트로.', 'Highly rated, popular bistro on Dimitar Vlahov street.', { reviewCount: 701 }),
  place('ohrid-fine_dining-3', 'ohrid', 'fine_dining', 'Restaurant Kajche', 4.5, 'Ilindenska 22, Ohrid', '오흐리드 호수에서 잡은 신선한 생선 요리로 유명한 인기 생선 전문 레스토랑.', 'Popular fish restaurant known for dishes built on fresh Lake Ohrid catch.', { reviewCount: 2083 }),
  place('ohrid-fine_dining-4', 'ohrid', 'fine_dining', 'The Lion Ohrid', 4.4, 'Kej Makedonija 81, Ohrid', '오흐리드 호숫가 산책로에 위치한 인기 레스토랑.', 'Popular restaurant on Ohrid\'s lakeside promenade.', { reviewCount: 1265 }),
  place('ohrid-fine_dining-5', 'ohrid', 'fine_dining', 'Frogche', 4.9, 'Dimitar Vlahov 44/4, Ohrid', '디미타르 블라호프 거리의 평점 높은 레스토랑.', 'Highly rated restaurant on Dimitar Vlahov street.', { reviewCount: 249 }),

  place('ohrid-bakery-1', 'ohrid', 'bakery', 'Ohrid City Bakery', 4.1, 'Bulevar Turistichka 47, Ohrid, North Macedonia', '오흐리드에서 가장 오래된 제과점, 부렉으로 유명', 'Ohrid\'s oldest bakery institution, famous for burek'),
  place('ohrid-bakery-2', 'ohrid', 'bakery', 'Wake & Bake', 4.8, 'Lazo Trposki 5, Ohrid', '라조 트르포스키 거리의 평점 높은 베이커리.', 'Highly rated bakery on Lazo Trposki street.', { reviewCount: 326 }),
  place('ohrid-bakery-3', 'ohrid', 'bakery', 'Bakery Lihnida', 4.3, 'Bulevar Makedonski Prosvetiteli, Ohrid', '마케돈스키 프로스비텔리 대로의 24시간 베이커리.', '24-hour bakery on Bulevar Makedonski Prosvetiteli.', { reviewCount: 753 }),
  place('ohrid-bakery-4', 'ohrid', 'bakery', 'Feniks Bakery', 4.5, '7-mi Noemvri 106, Ohrid', '7미 노엠브리 거리의 인기 베이커리.', 'Popular bakery on 7-mi Noemvri street.', { reviewCount: 209 }),
  place('ohrid-bakery-5', 'ohrid', 'bakery', 'Bakery Sofra', 4.7, 'Goce Delchev 258, Ohrid', '고체 델체프 거리의 평점 높은 베이커리.', 'Highly rated bakery on Goce Delchev street.', { reviewCount: 67 }),

  place('ohrid-cafe-1', 'ohrid', 'cafe', 'Roastery (Artisan Coffee House)', 4.4, 'Kosta Abrash 19, Ohrid, North Macedonia', '90년 전통의 가족 로스터리, 구시가 자갈길에서 즐기는 커피.', 'Family coffee roastery with a 90-year tradition, served on a cobblestone street in the Old Town.'),
  place('ohrid-cafe-2', 'ohrid', 'cafe', 'Retro 45 Café', 4.9, 'Kosta Abrash 45, Ohrid', '코스타 아브라쉬 거리의 평점 높은 레트로풍 카페.', 'Highly rated, retro-styled café on Kosta Abrash street.', { reviewCount: 144 }),
  place('ohrid-cafe-3', 'ohrid', 'cafe', 'Dabov Specialty Coffee Ohrid', 4.9, 'Kej Makedonija 58, Ohrid', '호숫가 산책로에 위치한 불가리아 로스터리 다보브의 오흐리드 지점.', 'Ohrid outpost of Bulgarian specialty roastery Dabov, on the lakeside promenade.', { reviewCount: 118 }),
  place('ohrid-cafe-4', 'ohrid', 'cafe', 'Fort Cafe - Samoilova Tvrdina Ohrid', 4.6, 'Kuzman Kapidan 94A, Ohrid', '사모일 요새 옆에 위치한 전망 좋은 카페.', 'Café with great views next to Samuel\'s Fortress.', { reviewCount: 686 }),
  place('ohrid-cafe-5', 'ohrid', 'cafe', 'Cafe Galerija', 4.4, 'St Clement of Ohrid 118, Ohrid', '성 클레멘트 거리의 인기 커피숍.', 'Popular coffee shop on St. Clement of Ohrid street.', { reviewCount: 153 }),

  // —— bitola ——
  place('bitola-fine_dining-1', 'bitola', 'fine_dining', 'Gradska Kefeana', 4.1, 'Shirok Sokak, Bitola', '비톨라 중심 보행자거리의 고급 레스토랑, 현지에서는 "호텔 에피날"로도 불림.', 'Upscale restaurant on Bitola\'s pedestrian main street, locally known as "Hotel Epinal".'),
  place('bitola-fine_dining-2', 'bitola', 'fine_dining', 'Restoran Adriatik', 4.6, 'Ilco Stojanovski b.b, Bitola', '일코 스토야놉스키 거리의 인기 레스토랑.', 'Popular restaurant on Ilco Stojanovski street.', { reviewCount: 452 }),
  place('bitola-fine_dining-3', 'bitola', 'fine_dining', 'Lounge Bar Manaki', 4.5, 'Roosevelt 17, Bitola', '루즈벨트 거리의 인기 라운지바 겸 레스토랑.', 'Popular lounge bar and restaurant on Roosevelt street.', { reviewCount: 715 }),
  place('bitola-fine_dining-4', 'bitola', 'fine_dining', 'Meze Bar Dionis', 4.8, 'Vlatko Milenkoski 7, Bitola', '블라트코 밀렌콥스키 거리의 평점 높은 발칸 메제(전채) 전문 레스토랑.', 'Highly rated restaurant on Vlatko Milenkoski street specializing in Balkan meze.', { reviewCount: 146 }),
  place('bitola-fine_dining-5', 'bitola', 'fine_dining', 'Gostilnica Sokak', 4.6, 'Kopanki 6, Bitola', '코판키 거리의 전통 가정식 레스토랑.', 'Traditional home-style restaurant on Kopanki street.', { reviewCount: 141 }),

  place('bitola-bakery-1', 'bitola', 'bakery', 'Bakery Boulevard', 4.5, 'Bulevar 1vi Maj, Bitola', '24시간 운영하는 비톨라의 인기 베이커리', 'Popular 24-hour bakery in Bitola'),
  place('bitola-bakery-2', 'bitola', 'bakery', 'Fresh', 4.7, 'Petar Petrovikj Njegosh 13, Bitola', '페타르 페트로비치 네고쉬 거리의 평점 높은 베이커리.', 'Highly rated bakery on Petar Petrovikj Njegosh street.', { reviewCount: 220 }),
  place('bitola-bakery-3', 'bitola', 'bakery', 'Vekna', 4.6, '1-vi Maj Boulevard 4, Bitola', '1일 5월 대로의 인기 베이커리.', 'Popular bakery on 1-vi Maj Boulevard.', { reviewCount: 58 }),
  place('bitola-bakery-4', 'bitola', 'bakery', 'Marieli Cakes', 4.8, 'Marsal Tito 88, Bitola', '마르샬 티토 거리의 평점 높은 케이크 전문점.', 'Highly rated cake shop on Marshal Tito street.', { reviewCount: 61 }),
  place('bitola-bakery-5', 'bitola', 'bakery', 'Bakery Alexander', 4.5, 'Karposh 16, Bitola', '카르포쉬 거리의 인기 베이커리.', 'Popular bakery on Karposh street.', { reviewCount: 65 }),

  place('bitola-cafe-1', 'bitola', 'cafe', 'Cafe Pajton', 4.7, 'Shirok Sokak 87, Bitola, North Macedonia', '시로크 소칵 거리의 에스프레소와 사람 구경으로 유명한 비톨라의 카페', 'Bustling Bitola café on Shirok Sokak, perfect for espresso and people-watching'),
  place('bitola-cafe-2', 'bitola', 'cafe', 'Coffee Aero', 4.7, 'Shirok Sokak 143, Bitola', '시로크 소칵 거리의 평점 높은 인기 카페.', 'Highly rated, popular café on Shirok Sokak street.', { reviewCount: 1295 }),
  place('bitola-cafe-3', 'bitola', 'cafe', 'Portal Cafe 2', 4.5, 'Shirok Sokak 67, Bitola', '시로크 소칵 거리의 인기 카페.', 'Popular café on Shirok Sokak street.', { reviewCount: 514 }),
  place('bitola-cafe-4', 'bitola', 'cafe', 'Deus', 4.6, 'Shirok Sokak 94, Bitola', '시로크 소칵 거리의 평점 높은 카페.', 'Highly rated café on Shirok Sokak street.', { reviewCount: 240 }),
  place('bitola-cafe-5', 'bitola', 'cafe', 'GT Caffe', 4.5, 'Marsal Tito 55, Bitola', '마르샬 티토 거리의 인기 카페.', 'Popular café on Marshal Tito street.', { reviewCount: 815 }),

  // —— tetovo ——
  place('tetovo-fine_dining-1', 'tetovo', 'fine_dining', 'Restaurant Bakal', 4.7, 'Marshal Tito, Brvenica, Tetovo', '테토보 최고 평가의 파인 레스토랑, 인터내셔널·바비큐 요리와 버섯 요리로 유명.', 'Tetovo\'s top-rated fine restaurant, known for international/barbecue cuisine and mushroom dishes.'),
  place('tetovo-fine_dining-2', 'tetovo', 'fine_dining', 'Restoran Belamia', 4.8, 'Goce Delchev 108, Tetovo', '고체 델체프 거리의 평점 높은 레스토랑.', 'Highly rated restaurant on Goce Delchev street.', { reviewCount: 559 }),
  place('tetovo-fine_dining-3', 'tetovo', 'fine_dining', 'Restaurant Dubrovnik', 4.7, 'Jane Sandanski 116, Tetovo', '야네 산단스키 거리의 평점 높은 레스토랑.', 'Highly rated restaurant on Jane Sandanski street.', { reviewCount: 250 }),
  place('tetovo-fine_dining-4', 'tetovo', 'fine_dining', 'Bocata', 4.6, 'Marshal Tito 46, Tetovo', '마르샬 티토 거리의 인기 레스토랑.', 'Popular restaurant on Marshal Tito street.', { reviewCount: 392 }),
  place('tetovo-fine_dining-5', 'tetovo', 'fine_dining', 'Paradox', 4.7, 'Ljubo Bozinovski - Pish 101-97, Tetovo', '류보 보지놉스키 거리의 평점 높은 레스토랑.', 'Highly rated restaurant on Ljubo Bozinovski street.', { reviewCount: 197 }),

  place('tetovo-bakery-1', 'tetovo', 'bakery', 'Bakal Bakery', 4.5, 'Иво Лола Рибар 137, 1200 Tetovo, North Macedonia', '테토보의 평이 좋은 베이커리', 'Well-reviewed bakery in Tetovo'),
  place('tetovo-bakery-2', 'tetovo', 'bakery', 'Burek Adriana', 4.9, 'Jane Sandanski 62, Tetovo', '야네 산단스키 거리의 평점 높은 부렉 전문점.', 'Highly rated burek specialist on Jane Sandanski street.', { reviewCount: 118 }),
  place('tetovo-bakery-3', 'tetovo', 'bakery', 'Garden Juice & Cake', 4.5, 'Dervish Cara 35, Tetovo', '데르비쉬 차라 거리의 인기 베이커리 겸 주스바.', 'Popular bakery and juice bar on Dervish Cara street.', { reviewCount: 284 }),
  place('tetovo-bakery-4', 'tetovo', 'bakery', 'Pekon Bakery 2', 4.9, 'Jane Sandanski 57, Tetovo', '야네 산단스키 거리의 평점 높은 베이커리.', 'Highly rated bakery on Jane Sandanski street.', { reviewCount: 43 }),

  place('tetovo-cafe-1', 'tetovo', 'cafe', 'Simple Cafe', 4.6, 'Boris Kidrich 29, Tetovo', '보리스 키드리치 거리의 인기 카페.', 'Popular café on Boris Kidrich street.', { reviewCount: 367 }),
  place('tetovo-cafe-2', 'tetovo', 'cafe', 'Maestro Cafe', 4.4, 'ul 133 bb, Tetovo', '테토보의 인기 카페.', 'Popular café in Tetovo.', { reviewCount: 353 }),
  place('tetovo-cafe-3', 'tetovo', 'cafe', 'Lokal Coffee Shop', 4.9, 'JNA 85, Tetovo', 'JNA 거리의 평점 높은 커피숍.', 'Highly rated coffee shop on JNA street.', { reviewCount: 59 }),
]
