import { place } from './placeFactory'
import type { Place } from '../types'

export const placesMKExtra: Place[] = [
  // —— skopje ——
  place('skopje-fine_dining-1', 'skopje', 'fine_dining', 'Destan', 'Bulevar Partizanski odredi 35, Skopje', '1913년부터 이어온 구시장의 대표 케밥 레스토랑.', 'Old Bazaar institution serving traditional finger-kebab since 1913.'),
  place('skopje-fine_dining-2', 'skopje', 'fine_dining', 'Pivnica An', 'Kapan An, Old Bazaar, 1000 Skopje, North Macedonia', '오스만 시대 여관 건물의 구시장 레스토랑, 무츠칼리차·굴라시가 유명.', 'Restaurant in a former Ottoman-era inn in the Old Bazaar, known for mućkalica stew and goulash.'),
  place('skopje-fine_dining-3', 'skopje', 'fine_dining', 'Soul Kitchen - Macedonian Wine & Cuisine', 'Kej 13-ti Noemvri, Skopje', '바르다르 강변에서 전통 마케도니아 요리와 인터내셔널 퓨전을 선보이는 레스토랑.', 'Vardar riverside restaurant blending traditional Macedonian dishes with international fusion.'),

  place('skopje-bakery-1', 'skopje', 'bakery', 'Silbo Furna', 'Majakovski 2, Skopje', '24시간 운영하는 스코페 최고 인기의 부렉 베이커리.', 'Skopje\'s most popular 24-hour bakery, known for its burek.'),
  place('skopje-bakery-2', 'skopje', 'bakery', 'Bakery La Delicious', 'Leninova 44, Skopje', '24시간 운영하는 인기 베이커리, 부렉과 페이스트리로 유명.', '24-hour bakery popular for its burek and pastries.'),
  place('skopje-bakery-4', 'skopje', 'bakery', 'Pan Pan Kapistec - Bakery & Specialty Coffee', 'Vasil Gjorgov 33, Skopje 1000', '베이커리와 스페셜티 커피를 함께 선보이는 카피스텍 지구의 인기 가게.', 'Popular bakery and specialty coffee spot in the Kapishtec neighborhood.'),
  place('skopje-bakery-5', 'skopje', 'bakery', 'Oriolo Skopje', 'Naum Naumovski Borche 40, Skopje', '나움 나우모프스키 보르체 거리의 인기 베이커리.', 'Popular bakery on Naum Naumovski Borche street.'),

  place('skopje-cafe-1', 'skopje', 'cafe', 'Cafe Bar Vinyl', 'Partizanski Odredi 14, Skopje', '시내 중심가와 데바르 말로 사이에 위치한 인더스트리얼 감성의 카페.', 'Industrial-feel café located between the city center and Debar Maalo.'),
  place('skopje-cafe-2', 'skopje', 'cafe', 'The Dude Specialty Coffee', 'Apostle Guslarot 16, Skopje', '아포스톨 구슬라롯 거리의 스페셜티 커피숍.', 'Specialty coffee shop on Apostol Guslarot street.'),
  place('skopje-cafe-3', 'skopje', 'cafe', 'Central Park', 'Gradski Park, Skopje 1000', '그라드스키 공원 안에 위치한 인기 카페.', 'Popular café located inside Gradski Park (City Park).'),
  place('skopje-cafe-4', 'skopje', 'cafe', 'Central Coffee', 'Mitropolit Teodosij Gologanov 96, Skopje', '미트로폴리트 테오도시 골로가노프 거리의 커피숍.', 'Coffee shop on Mitropolit Teodosij Gologanov street.'),
  place('skopje-cafe-5', 'skopje', 'cafe', 'Café Metanoja', 'Maksim Gorki 19, Skopje', '막심 고르키 거리의 아늑한 카페.', 'Cozy café on Maksim Gorki street.'),

  // —— ohrid ——
  place('ohrid-fine_dining-1', 'ohrid', 'fine_dining', 'Gladiator', 'Braka Miladinovi br. 14, Ohrid', '고대 원형극장 옆, 450년 된 전통 가옥에서 즐기는 마케도니아 가정식.', 'Macedonian home cooking served in a 450-year-old traditional house beside the ancient amphitheatre.'),
  place('ohrid-fine_dining-2', 'ohrid', 'fine_dining', 'Plate Bistro', 'Dimitar Vlahov 20, Ohrid', '디미타르 블라호프 거리의 인기 비스트로.', 'Popular bistro on Dimitar Vlahov street.'),
  place('ohrid-fine_dining-3', 'ohrid', 'fine_dining', 'Restaurant Kajche', 'Ilindenska 22, Ohrid', '오흐리드 호수에서 잡은 신선한 생선 요리로 유명한 인기 생선 전문 레스토랑.', 'Popular fish restaurant known for dishes built on fresh Lake Ohrid catch.'),
  place('ohrid-fine_dining-4', 'ohrid', 'fine_dining', 'The Lion Ohrid', 'Kej Makedonija 81, Ohrid', '오흐리드 호숫가 산책로에 위치한 인기 레스토랑.', 'Popular restaurant on Ohrid\'s lakeside promenade.'),
  place('ohrid-fine_dining-5', 'ohrid', 'fine_dining', 'Frogche', 'Dimitar Vlahov 44/4, Ohrid', '디미타르 블라호프 거리의 레스토랑.', 'Restaurant on Dimitar Vlahov street.'),

  place('ohrid-bakery-1', 'ohrid', 'bakery', 'Ohrid City Bakery', 'Bulevar Turistichka 47, Ohrid, North Macedonia', '오흐리드에서 가장 오래된 제과점, 부렉으로 유명', 'Ohrid\'s oldest bakery institution, famous for burek'),
  place('ohrid-bakery-2', 'ohrid', 'bakery', 'Wake & Bake', 'Lazo Trposki 5, Ohrid', '라조 트르포스키 거리의 베이커리.', 'Bakery on Lazo Trposki street.'),
  place('ohrid-bakery-3', 'ohrid', 'bakery', 'Bakery Lihnida', 'Makedonski Prosvetiteli, 6000 Ohrid, North Macedonia', '마케돈스키 프로스비텔리 대로의 24시간 베이커리.', '24-hour bakery on Bulevar Makedonski Prosvetiteli.'),
  place('ohrid-bakery-4', 'ohrid', 'bakery', 'Feniks Bakery', '7-mi Noemvri 106, Ohrid', '7미 노엠브리 거리의 인기 베이커리.', 'Popular bakery on 7-mi Noemvri street.'),
  place('ohrid-bakery-5', 'ohrid', 'bakery', 'Bakery Sofra', 'Goce Delchev 258, Ohrid', '고체 델체프 거리의 베이커리.', 'Bakery on Goce Delchev street.'),

  place('ohrid-cafe-1', 'ohrid', 'cafe', 'Roastery (Artisan Coffee House)', 'Kosta Abrash 19, Ohrid, North Macedonia', '90년 전통의 가족 로스터리, 구시가 자갈길에서 즐기는 커피.', 'Family coffee roastery with a 90-year tradition, served on a cobblestone street in the Old Town.'),
  place('ohrid-cafe-2', 'ohrid', 'cafe', 'Retro 45 Café', 'Kosta Abrash 45, Ohrid', '코스타 아브라쉬 거리의 레트로풍 카페.', 'Retro-styled café on Kosta Abrash street.'),
  place('ohrid-cafe-3', 'ohrid', 'cafe', 'Dabov Specialty Coffee Ohrid', 'Kej Makedonija 58, Ohrid', '호숫가 산책로에 위치한 불가리아 로스터리 다보브의 오흐리드 지점.', 'Ohrid outpost of Bulgarian specialty roastery Dabov, on the lakeside promenade.'),
  place('ohrid-cafe-4', 'ohrid', 'cafe', 'Fort Cafe - Samoilova Tvrdina Ohrid', 'Kuzman Kapidan 94A, Ohrid', '사모일 요새 옆에 위치한 전망 좋은 카페.', 'Café with great views next to Samuel\'s Fortress.'),
  place('ohrid-cafe-5', 'ohrid', 'cafe', 'Cafe Galerija', 'St Clement of Ohrid 118, Ohrid', '성 클레멘트 거리의 인기 커피숍.', 'Popular coffee shop on St. Clement of Ohrid street.'),

  // —— bitola ——
  place('bitola-fine_dining-1', 'bitola', 'fine_dining', 'Gradska Kefeana', 'Marshal Tito 85, 7000 Bitola, North Macedonia', '비톨라 중심 보행자거리의 고급 레스토랑, 현지에서는 "호텔 에피날"로도 불림.', 'Upscale restaurant on Bitola\'s pedestrian main street, locally known as "Hotel Epinal".'),
  place('bitola-fine_dining-2', 'bitola', 'fine_dining', 'Restoran Adriatik', 'Kumrovec b.b., Bukovski Livadi, 7000 Bitola, North Macedonia', '일코 스토야놉스키 거리의 인기 레스토랑.', 'Popular restaurant on Ilco Stojanovski street.'),
  place('bitola-fine_dining-3', 'bitola', 'fine_dining', 'Lounge Bar Manaki', 'Roosevelt 17, Bitola', '루즈벨트 거리의 인기 라운지바 겸 레스토랑.', 'Popular lounge bar and restaurant on Roosevelt street.'),
  place('bitola-fine_dining-4', 'bitola', 'fine_dining', 'Meze Bar Dionis', 'Vlatko Milenkoski 7, Bitola', '블라트코 밀렌콥스키 거리의 발칸 메제(전채) 전문 레스토랑.', 'Restaurant on Vlatko Milenkoski street specializing in Balkan meze.'),
  place('bitola-fine_dining-5', 'bitola', 'fine_dining', 'Gostilnica Sokak', 'Kopanki 6, Bitola', '코판키 거리의 전통 가정식 레스토랑.', 'Traditional home-style restaurant on Kopanki street.'),

  place('bitola-bakery-1', 'bitola', 'bakery', 'Bakery Boulevard', 'Bulevar 1vi Maj, Bitola', '24시간 운영하는 비톨라의 인기 베이커리', 'Popular 24-hour bakery in Bitola'),
  place('bitola-bakery-2', 'bitola', 'bakery', 'Fresh', 'Petar Petrovikj Njegosh 13, Bitola', '페타르 페트로비치 네고쉬 거리의 베이커리.', 'Bakery on Petar Petrovikj Njegosh street.'),
  place('bitola-bakery-3', 'bitola', 'bakery', 'Vekna', '1-vi Maj Boulevard 4, Bitola', '1일 5월 대로의 인기 베이커리.', 'Popular bakery on 1-vi Maj Boulevard.'),
  place('bitola-bakery-4', 'bitola', 'bakery', 'Marieli Cakes', 'Marsal Tito 88, Bitola', '마르샬 티토 거리의 케이크 전문점.', 'Cake shop on Marshal Tito street.'),
  place('bitola-bakery-5', 'bitola', 'bakery', 'Bakery Alexander', 'Karposh 16, Bitola', '카르포쉬 거리의 인기 베이커리.', 'Popular bakery on Karposh street.'),

  place('bitola-cafe-1', 'bitola', 'cafe', 'Cafe Pajton', 'Shirok Sokak 87, Bitola, North Macedonia', '시로크 소칵 거리의 에스프레소와 사람 구경으로 유명한 비톨라의 카페', 'Bustling Bitola café on Shirok Sokak, perfect for espresso and people-watching'),
  place('bitola-cafe-2', 'bitola', 'cafe', 'Coffee Aero', 'Shirok Sokak 143, Bitola', '시로크 소칵 거리의 인기 카페.', 'Popular café on Shirok Sokak street.'),
  place('bitola-cafe-3', 'bitola', 'cafe', 'Portal Cafe 2', 'Shirok Sokak 67, Bitola', '시로크 소칵 거리의 인기 카페.', 'Popular café on Shirok Sokak street.'),
  place('bitola-cafe-4', 'bitola', 'cafe', 'Deus', 'Shirok Sokak 94, Bitola', '시로크 소칵 거리의 카페.', 'Café on Shirok Sokak street.'),
  place('bitola-cafe-5', 'bitola', 'cafe', 'GT Caffe', 'Marsal Tito 55, Bitola', '마르샬 티토 거리의 인기 카페.', 'Popular café on Marshal Tito street.'),

  // —— tetovo ——
  place('tetovo-fine_dining-1', 'tetovo', 'fine_dining', 'Restaurant Bakal', 'Marshal Tito, Brvenica 1216, North Macedonia', '테토보 최고 평가의 파인 레스토랑, 인터내셔널·바비큐 요리와 버섯 요리로 유명.', 'Tetovo\'s fine restaurant, known for international/barbecue cuisine and mushroom dishes.', { image: '/places/tetovo-fine_dining-1.jpg' }),
  place('tetovo-fine_dining-2', 'tetovo', 'fine_dining', 'Restoran Belamia', 'Goce Delchev 108, Tetovo', '고체 델체프 거리의 레스토랑.', 'Restaurant on Goce Delchev street.'),
  place('tetovo-fine_dining-3', 'tetovo', 'fine_dining', 'Restaurant Dubrovnik', 'Jane Sandanski 116, Tetovo', '야네 산단스키 거리의 레스토랑.', 'Restaurant on Jane Sandanski street.'),
  place('tetovo-fine_dining-4', 'tetovo', 'fine_dining', 'Bocata', 'Marshal Tito 46, Tetovo', '마르샬 티토 거리의 인기 레스토랑.', 'Popular restaurant on Marshal Tito street.'),
  place('tetovo-fine_dining-5', 'tetovo', 'fine_dining', 'Paradox', 'Ljubo Bozinovski - Pish 101-97, Tetovo', '류보 보지놉스키 거리의 레스토랑.', 'Restaurant on Ljubo Bozinovski street.'),

  place('tetovo-bakery-1', 'tetovo', 'bakery', 'Bakal Bakery', 'Иво Лола Рибар 137, 1200 Tetovo, North Macedonia', '테토보의 평이 좋은 베이커리', 'Well-reviewed bakery in Tetovo'),
  place('tetovo-bakery-2', 'tetovo', 'bakery', 'Burek Adriana', 'Jane Sandanski 62, Tetovo', '야네 산단스키 거리의 부렉 전문점.', 'Burek specialist on Jane Sandanski street.'),
  place('tetovo-bakery-3', 'tetovo', 'bakery', 'Garden Juice & Cake', 'Dervish Cara 35, Tetovo', '데르비쉬 차라 거리의 인기 베이커리 겸 주스바.', 'Popular bakery and juice bar on Dervish Cara street.'),
  place('tetovo-bakery-4', 'tetovo', 'bakery', 'Pekon Bakery 2', 'Jane Sandanski 57, Tetovo', '야네 산단스키 거리의 베이커리.', 'Bakery on Jane Sandanski street.'),

  place('tetovo-cafe-1', 'tetovo', 'cafe', 'Simple Cafe', 'Boris Kidrich 29, Tetovo', '보리스 키드리치 거리의 인기 카페.', 'Popular café on Boris Kidrich street.'),
  place('tetovo-cafe-2', 'tetovo', 'cafe', 'Maestro Cafe', 'ul 133 bb, Tetovo', '테토보의 인기 카페.', 'Popular café in Tetovo.'),
  place('tetovo-cafe-3', 'tetovo', 'cafe', 'Lokal Coffee Shop', 'JNA 85, Tetovo', 'JNA 거리의 커피숍.', 'Coffee shop on JNA street.'),
]
