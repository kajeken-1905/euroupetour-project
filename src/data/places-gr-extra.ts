import { place } from './placeFactory'
import type { Place } from '../types'

export const placesGRExtra: Place[] = [
  // —— athens ——
  place('athens-fine_dining-1', 'athens', 'fine_dining', 'Hytra', '1 Petrou Kokkali Street, 115 21 Athens', '아테네의 미쉐린 1스타 레스토랑. 월·화요일은 쉽니다.', 'One-Michelin-star restaurant in Athens; closed Mondays and Tuesdays.', { michelin: 'star1', image: '/places/athens-fine_dining-1.jpg' }),
  place('athens-fine_dining-2', 'athens', 'fine_dining', 'Cookoovaya', '2a Mexi Chatzigianni, Athens 115 28', '현대 그리스 요리를 내는 레스토랑.', 'Restaurant serving contemporary Greek cuisine.'),
  place('athens-fine_dining-3', 'athens', 'fine_dining', 'Funky Gourmet', '13 Paramithias St & Salaminos, Kerameikos, Athens 10435', '예술적인 플레이팅의 아테네 레스토랑.', 'Athens restaurant with artistic presentation.'),
  place('athens-fine_dining-4', 'athens', 'fine_dining', 'Klimataria', 'Plateia Theatrou 2, Athina 105 52', '1927년부터 이어온 프시리 지구의 전통 타베르나.', 'Traditional taverna in Psirri, operating since 1927.'),
  place('athens-fine_dining-5', 'athens', 'fine_dining', 'Seychelles', 'Keramikou 49, Athina 104 36', '전통 타베르나의 감성을 유지하면서 현대적 요리를 선보이는 레스토랑.', 'Restaurant keeping the charm of an old-school taverna while serving modern cuisine.'),
  place('athens-bakery-1', 'athens', 'bakery', 'Ariston', 'Μιχαήλ Βόδα, 104 40 Athens, Greece', '1910년부터 파이를 파는 아테네의 가게. 쿠루 치즈파이가 있습니다.', 'Athens pie shop since 1910 with kourou cheese pie.'),
  place('athens-bakery-2', 'athens', 'bakery', 'Takis Bakery', 'Misaraliotou 14, Athens 117 42', '1961년부터 이어진 쿠카키 지구의 빵집. 티로피타가 있습니다.', 'Koukaki bakery since 1961 with tiropita.'),
  place('athens-bakery-3', 'athens', 'bakery', 'Choureal', 'Panagiotou Anagnostopoulou 44, Athina 106 73', '프로피테롤을 파는 슈 페이스트리 가게.', 'Choux pastry shop selling profiteroles.'),
  place('athens-bakery-4', 'athens', 'bakery', 'To Koulouri tou Psyrri', '23 Karaiskaki St, Psyrri, Athens', '프시리의 쿨루리(참깨 링 빵) 가게.', 'Koulouri (sesame bread ring) shop in Psyrri.'),
  place('athens-cafe-1', 'athens', 'cafe', 'Tailor Made Coffee Roasters', 'Perikleous 37, 105 63 Athens, Greece', '모나스티라키 인근의 스페셜티 커피 로스터리.', 'Specialty coffee roastery near Monastiraki.'),
  place('athens-cafe-2', 'athens', 'cafe', 'TAF Coffee', '7 Emmanouil Benaki, Exarchia, Athens', '2009년 문을 연 아테네의 스페셜티 커피숍.', 'Athens specialty coffee shop, opened in 2009.', { image: '/places/athens-cafe-2.jpg' }),
  place('athens-cafe-3', 'athens', 'cafe', 'Café Avissinia', '7 Kynetou, Monastiraki, Athens 105 55', '아크로폴리스가 보이는 옥상 테라스가 있는 모나스티라키의 카페.', 'Monastiraki café with a rooftop terrace facing the Acropolis.'),
  place('athens-cafe-4', 'athens', 'cafe', 'Little Tree Books & Coffee', 'Καβαλλότι 2, 117 42 Athens, Greece', '아크로폴리스 박물관 뒤편의 아늑한 북카페.', 'Cozy book café located behind the Acropolis Museum.'),
  place('athens-korean-1', 'athens', 'korean', 'Dosirak', '33 Voulis, Syntagma, Athens', '신타그마의 일식·한식 레스토랑.', 'Japanese-Korean restaurant in Syntagma.'),
  place('athens-korean-2', 'athens', 'korean', 'Seoul House', 'Zisimopoulou 40, Palaio Faliro, Athens 17564', '팔레오 팔리로의 한식당. 한국식 바비큐가 있습니다.', 'Korean restaurant in Palaio Faliro with Korean barbecue.'),

  // —— santorini ——
  place('santorini-fine_dining-1', 'santorini', 'fine_dining', 'Selene', 'Pyrgos, Santorini 84700', '산토리니의 레스토랑.', 'Restaurant on Santorini.', { image: '/places/santorini-fine_dining-1.jpg' }),
  place('santorini-fine_dining-2', 'santorini', 'fine_dining', 'Argo Restaurant', 'Main footpath, Fira, Santorini 847 00', '피라 중심가의 칼데라 전망 레스토랑, 현대적으로 재해석한 산토리니 요리.', 'Restaurant in central Fira with caldera views, offering a contemporary take on Santorinian cuisine.'),
  place('santorini-fine_dining-3', 'santorini', 'fine_dining', 'Parea Tavern', 'Fira, Santorini 847 00', '2005년부터 이어온 그리스·지중해 요리 타베르나, 무사카로 유명.', 'Greek-Mediterranean taverna since 2005, known for its moussaka.', { image: '/places/santorini-fine_dining-3.jpg' }),
  place('santorini-bakery-1', 'santorini', 'bakery', 'Furnissimo Bakery', 'Mesarias-Archeas Thiras, Mesaria 490 83, Greece', '크루아상과 커피가 있는 산토리니의 빵집.', 'Santorini bakery with croissants and coffee.'),
  place('santorini-bakery-2', 'santorini', 'bakery', 'The Family Bakery', 'Eparchiaki Odos Firon-Ormou Perissis, Megalochori 84700', '그리스 파이·빵·크루아상·바클라바가 있는 아늑한 빵집.', 'Cosy bakery with Greek pies, bread, croissants and baklava.'),
  place('santorini-cafe-1', 'santorini', 'cafe', 'Milopetra', 'Fira, Santorini 847 00, Greece', '전통과 서양식 케이크를 두루 갖춘 산토리니의 베이커리 카페', 'Santorini bakery café offering a wide variety of traditional and continental cakes'),

  // —— heraklion ——
  place('heraklion-fine_dining-1', 'heraklion', 'fine_dining', 'Thigaterra', 'Leof. Andrea Papandreou 109, Heraklion 71414', '모던하게 재해석한 크레타 요리.', 'Cretan cuisine reimagined in a modern style.'),
  place('heraklion-fine_dining-2', 'heraklion', 'fine_dining', 'Peskesi', 'Kapetan Haralampi 6-8, Heraklion 71202', '복원된 저택에서 선보이는 정통 크레타 요리, 자체 농장 식재료 사용.', 'Authentic Cretan cuisine in a restored mansion, using ingredients from its own farm.', { image: '/places/heraklion-fine_dining-2.jpg' }),
  place('heraklion-fine_dining-3', 'heraklion', 'fine_dining', 'Antipodas', 'Korai 13, Iraklio 71202', '넉넉한 양과 친절한 서비스로 호평받는 전통 크레타 요리 레스토랑.', 'Traditional Cretan restaurant praised for generous portions and friendly service.'),
  place('heraklion-bakery-1', 'heraklion', 'bakery', 'Kritikos Fournos Daily Bakery', 'Leoforos Ikarou 32, 71306 Heraklion, Greece', '이라클리오의 빵집.', 'Bakery in Heraklion.'),
  place('heraklion-bakery-2', 'heraklion', 'bakery', 'Phyllosophies (Liontaria)', 'Plateia Liontarion 33, Heraklion 71202', '리온다리아 광장의 부가차 가게.', 'Bougatsa shop on Lion Square.'),
  place('heraklion-bakery-3', 'heraklion', 'bakery', 'La Maison Du Pain', 'Leoforos Dimokratias, Heraklion 71306', '이라클리오의 프랑스식 빵집.', 'French-style bakery in Heraklion.'),
  place('heraklion-bakery-4', 'heraklion', 'bakery', 'Zimoto', 'Plateia Kallergon, Heraklion 71202', '칼레르곤 광장의 페이스트리 가게.', 'Pastry shop on Plateia Kallergon.'),
  place('heraklion-cafe-1', 'heraklion', 'cafe', 'Crumb Cafe', 'Kallergon Square 11, 712 02 Heraklion, Greece', '비건·글루텐프리 옵션을 갖춘 이라클리오의 브런치 카페', 'Heraklion brunch café with vegan and gluten-free options'),
  place('heraklion-cafe-2', 'heraklion', 'cafe', 'Utopia Cafe', 'Chandakos 51, Heraklion 71202', '초콜릿과 여러 맥주가 있는 카페.', 'Café with chocolate and a range of beers.'),

  // —— mykonos ——
  place('mykonos-fine_dining-1', 'mykonos', 'fine_dining', 'M-Eating', 'Kouzi Georgouli 53, Mykonos 84600', '미코노스 타운의 레스토랑.', 'Restaurant in Mykonos Town.'),
  place('mykonos-fine_dining-2', 'mykonos', 'fine_dining', 'Baboulas Ouzeri', 'Old Port, Mykonos Town 84600', '미코노스 구항구의 가족 운영 그리스 해산물 레스토랑.', 'Family-run Greek seafood restaurant at the Old Port of Mykonos.'),
  place('mykonos-fine_dining-3', 'mykonos', 'fine_dining', 'Karavaki', 'Agios Eleftherios, Vencia Boutique Hotel, Mykonos Town 84600', '미코노스 타운 전경이 내려다보이는 테라스 레스토랑.', 'Restaurant with a terrace overlooking Mykonos Town.'),
  place('mykonos-bakery-1', 'mykonos', 'bakery', 'Il Forno di Gerasimo', 'Ignatiou Basoula 21, Mykonos 846 00, Greece', '미코노스 초라에서 24시간 운영하는 베이커리 겸 카페', '24-hour bakery and café in Mykonos\'s Chora district'),
  place('mykonos-bakery-2', 'mykonos', 'bakery', 'Anamnisis Mykonos Pastry Shop', 'Agiou Vlasiou, Mykonos 846 00', '미코노스에서 제과점.', 'Pastry shop in Mykonos.'),
  place('mykonos-bakery-3', 'mykonos', 'bakery', 'Gioras Wood Medieval Mykonian Bakery', 'Agiou Efthimiou, Mykonos 846 00', '전통 장작 화덕으로 굽는 미코노스의 빵집.', 'Mykonos bakery with a traditional wood-fired oven.'),
  place('mykonos-bakery-4', 'mykonos', 'bakery', 'Bakery Psilos', 'Kalogera 31, Mykonos 846 00', '초라 중심가의 빵집.', 'Bakery in central Chora.'),
  place('mykonos-cafe-1', 'mykonos', 'cafe', 'Kastro\'s Restaurant', 'Agion Anargyron 1, Little Venice, Mykonos 846 00, Greece', '리틀 베니스의 바다 전망 테라스가 있는 카페 겸 레스토랑.', 'Café-restaurant in Little Venice with a seaside terrace.'),
  place('mykonos-cafe-2', 'mykonos', 'cafe', 'SiaMo Cafe', 'Riga Feraiou & Papachrantou corner, Mykonos 846 00', '미코노스에서 커피숍.', 'Coffee shop in Mykonos.'),
  place('mykonos-cafe-3', 'mykonos', 'cafe', 'Cafe Vero', 'Kaminaki, Mykonos 846 00', '미코노스 커피숍.', 'Coffee shop in Mykonos.'),
  place('mykonos-cafe-4', 'mykonos', 'cafe', 'Feel Good Cafe', 'Eparchiaki Odos Mikonou Argyrania, Mykonos 846 00', '아르기라이나 지역의 카페.', 'Café in the Argyraina area.'),

  // —— rhodes ——
  place('rhodes-fine_dining-1', 'rhodes', 'fine_dining', 'Marco Polo Mansion', 'Agiou Fanouriou 40-42, Rhodes 85100', '구시가의 레스토랑.', 'Restaurant in the Old Town.'),
  place('rhodes-fine_dining-2', 'rhodes', 'fine_dining', 'Alexis 4 Seasons', 'Old Town, Rhodes 85100', '로도스 구시가의 아늑한 안뜰 해산물 레스토랑.', 'Seafood restaurant with a charming courtyard in the Old Town of Rhodes.'),
  place('rhodes-fine_dining-3', 'rhodes', 'fine_dining', 'Romeo Restaurant', '7-9 Menekleous St, Old Town, Rhodes', '중세 도시 한가운데의 그리스·지중해 요리 레스토랑, 라이브 음악 공연.', 'Greek-Mediterranean restaurant in the heart of the Medieval City, with live music.'),
  place('rhodes-bakery-1', 'rhodes', 'bakery', 'Stani Bakery & Pastry Shop', 'Agias Anastasias 28, Rodos 851 00, Greece', '로도스의 빵집 겸 페이스트리 가게.', 'Bakery and pastry shop in Rhodes.'),
  place('rhodes-bakery-2', 'rhodes', 'bakery', 'Fournariko Bakery', 'Sokratous, Old Town, Rhodes 851 00', '중세 구시가 옛 시장통의 24시간 전통 베이커리, 장작 화덕으로 구운 빵과 파이.', 'Traditional 24-hour bakery in the Old Market of the medieval town, with wood-fired breads and pies.'),
  place('rhodes-bakery-3', 'rhodes', 'bakery', 'Old Town Corner Bakery Shop', 'Old Town, Rhodes 851 00', '케이크·브리오슈 번·커피가 있는 구시가의 빵집 겸 카페.', 'Old Town bakery café with cakes, brioche buns and coffee.'),
  place('rhodes-cafe-1', 'rhodes', 'cafe', 'Bon Bonheur', 'Agias Anastasias & Paleon Patron Germanou, Rodos 851 00, Greece', '도넛·와플·샌드위치가 있는 로도스의 아침 카페.', 'Rhodes breakfast café with doughnuts, waffles and sandwiches.'),
  place('rhodes-cafe-2', 'rhodes', 'cafe', 'Monk Coffee / The Pure Roasters', 'Ethnarchou Makariou 14, Rodos 85131', '로도스의 스페셜티 커피 로스터리.', 'Specialty coffee roastery in Rhodes.'),

  // —— thessaloniki ——
  place('thessaloniki-fine_dining-1', 'thessaloniki', 'fine_dining', 'Ergon Agora', 'P. Mela 42, Thessaloniki 54622', '팜투테이블 콘셉트의 레스토랑.', 'Farm-to-table concept restaurant.'),
  place('thessaloniki-fine_dining-2', 'thessaloniki', 'fine_dining', 'Massalia', '6 Manousogiannaki Emmanouil St & 23 Filikis Etaireias St, Thessaloniki 54621', '넉넉한 양과 합리적인 가격으로 호평받는 그리스 요리 레스토랑.', 'Greek restaurant praised for generous portions and reasonable prices.'),
  place('thessaloniki-fine_dining-3', 'thessaloniki', 'fine_dining', 'Omikron', 'Ζεύξιδος, 546 22 Thessaloniki Municipal Unit, Greece', '프랑스에서 요리를 배운 셰프의 그리스·지중해 요리 레스토랑, 10여 개 테이블의 아담한 공간.', 'Intimate Greek-Mediterranean restaurant with only about ten tables, run by a France-trained chef.'),
  place('thessaloniki-bakery-1', 'thessaloniki', 'bakery', 'Bougatsa Bantis', 'Panagias Faneromenis 33, 546 32 Thessaloniki, Greece', '부가차를 파는 테살로니키의 전통 제과점.', 'Traditional Thessaloniki pastry shop selling bougatsa.'),
  place('thessaloniki-bakery-2', 'thessaloniki', 'bakery', 'Terkenlis', 'Tsimiski 30 & Aristotelous, Thessaloniki 546 36', '1948년 문을 연 테살로니키의 제과점. 초콜릿 추레키가 있습니다.', 'Thessaloniki pâtisserie founded in 1948, with chocolate tsoureki.'),
  place('thessaloniki-bakery-3', 'thessaloniki', 'bakery', 'Trigona Elenidi', 'Dimitriou Gounari 13, Thessaloniki 546 22', '소아시아 난민의 레시피에서 시작된 트리고나 파노라마토스(크림 채운 필로 삼각과자) 전문점.', 'Specialist in trigona panoramatos — syrup-soaked phyllo triangles filled with custard, from a recipe brought by Asia Minor refugees.'),
  place('thessaloniki-cafe-1', 'thessaloniki', 'cafe', 'Blé Taste Gallery', 'P. Mela 37, 546 22 Thessaloniki, Greece', '페이스트리와 수제 아이스크림이 있는 테살로니키의 카페.', 'Thessaloniki café with pastries and handmade ice cream.'),
  place('thessaloniki-cafe-2', 'thessaloniki', 'cafe', 'Father Coffee & Vinyl', 'Paleon Patron Germanou 17, Thessaloniki 54622', '2020년 문을 연 커피숍 겸 바이닐 레코드숍.', 'Coffee shop with an upstairs vinyl record store, established in 2020.'),
  place('thessaloniki-korean-1', 'thessaloniki', 'korean', 'Moonkiz Café', 'Geor. Stavrou 8, Thessaloniki 54623', '버블티와 한국식 핫도그를 파는 한국풍 카페.', 'Korean-style café with bubble tea and Korean corn dogs.'),

  // —— corfu ——
  place('corfu-fine_dining-1', 'corfu', 'fine_dining', 'The Venetian Well', '1 Lilli Desylla Square, Kerkyra 49100', '구시가 광장의 분위기 있는 레스토랑.', 'Atmospheric restaurant on the Old Town square.'),
  place('corfu-fine_dining-2', 'corfu', 'fine_dining', 'Rex Restaurant', 'Kapodistriou 66, Kerkyra 49100', '1932년부터 이어온 리스톤 인근의 케르키라 요리 레스토랑.', 'Corfiot cuisine restaurant near the Liston, operating since 1932.'),
  place('corfu-bakery-1', 'corfu', 'bakery', 'Starenio Bakery', 'Themistokleous Kotardou 42, 491 00 Kerkyra, Greece', '1994년부터 이어온 케르키라 시청 광장의 베이커리', 'Corfu Town Hall Square bakery serving delightful treats since 1994'),
  place('corfu-bakery-2', 'corfu', 'bakery', 'Panetteria', 'Old Town, Kerkyra 491 00', '구시가 골목의 빵집. 샌드위치와 페이스트리가 있습니다.', 'Bakery in an Old Town alley with sandwiches and pastries.'),
  place('corfu-bakery-3', 'corfu', 'bakery', "Rosy's Bakery", 'Paleologou 71, Kerkyra 491 00', '30여 종의 바클라바를 갖춘 구시가의 작은 비건 베이커리.', 'Tiny all-vegan bakery in the Old Town with some 30 kinds of baklava.'),
  place('corfu-cafe-1', 'corfu', 'cafe', 'Bristol Café', 'Kapodistriou Street, 491 00 Kerkyra, Greece', '베네치아 양식 건물에 자리한 케르키라 구시가지의 레트로 카페', 'Retro café in a Venetian building in Corfu\'s old town'),
  place('corfu-cafe-2', 'corfu', 'cafe', 'Cafetierra', 'Kapodistriou 8, Kerkyra 49100', '항구 인근의 자가 로스팅 에스프레소 바.', 'Self-roasting espresso bar near the harbor.'),

  // —— nafplio ——
  place('nafplio-fine_dining-1', 'nafplio', 'fine_dining', 'Byzantio', 'Vas. Alexandrou 15, Nafplio 21100', '그리스·세르비아 요리 레스토랑, 1998년부터 이어온 구시가 타베르나.', 'Old Town taverna serving Greek and Serbian cuisine since 1998.'),
  place('nafplio-fine_dining-2', 'nafplio', 'fine_dining', 'Karima Kastro', 'Papanikolaou 32, Nafplio 21100', '나프플리오 구시가의 그리스·지중해 요리 레스토랑.', 'Greek-Mediterranean restaurant in the Old Town of Nafplio.'),

  place('nafplio-bakery-1', 'nafplio', 'bakery', 'Kosmos Bakery', 'Nafplio, 211 00, Greece', '빵과 디저트, 아이스크림을 두루 갖춘 나프플리오 초입의 베이커리', 'Bakery at the entrance of Nafplio offering pastries, breads and desserts'),
  place('nafplio-bakery-2', 'nafplio', 'bakery', 'Central Bakery Old Town', 'Leof. Vasilisis Amalias 19, Nafplio 211 00', '아침 식사와 페이스트리가 있는 나프플리오 구시가의 빵집 겸 카페.', 'Old Town bakery café in Nafplio with breakfast and pastries.'),
  place('nafplio-cafe-1', 'nafplio', 'cafe', 'Sokaki Cafe', 'Plateia Syndagmatos 3, 211 00 Nafplio, Greece', '신타그마 광장에 위치한 나프플리오의 카페', 'Nafplio café on Constitution Square'),
  place('nafplio-cafe-2', 'nafplio', 'cafe', 'Coffee Style', 'Bouboulinas 81 & Othonos, Nafplio 21100', '아침부터 자정까지 여는 나프플리오의 커피숍.', 'Nafplio coffee shop open from morning to midnight.'),

  // —— meteora ——
  place('meteora-fine_dining-1', 'meteora', 'fine_dining', 'Meteora Restaurant (Gkertsou)', 'Trikalon 2, 422 00 Kalambaka, Greece', '1925년부터 가족이 운영, 할머니 레시피의 무사카·가지 사가나키.', 'Family-run since 1925; grandmother\'s moussaka and eggplant saganaki.'),
  place('meteora-fine_dining-2', 'meteora', 'fine_dining', 'Taverna Xarama', 'Patriarchou Dimitriou 39, Kastraki, 422 00 Kalambaka, Greece', '1982년부터 바위 아래에서 양고기 구이를 내는 가족 타베르나.', 'Family taverna under the rocks since 1982, known for grilled lamb.'),
  place('meteora-fine_dining-3', 'meteora', 'fine_dining', 'Taverna Gardenia', 'Αγίων Αποστόλων, 422 00 Kalambaka, Greece', '카스트라키 중심가의 가정식 그리스 타베르나.', 'Home-style Greek taverna on Kastraki\'s main street.'),
  place('meteora-fine_dining-4', 'meteora', 'fine_dining', 'Panellinio', 'Plateia Dimarcheiou, 422 00 Kalambaka, Greece', '칼람바카 중앙 광장의 그리스 가정식 식당.', 'Greek classics on Kalambaka\'s central square.'),

  // —— delphi ——
  place('delphi-fine_dining-1', 'delphi', 'fine_dining', 'Epikouros', '33 V. Pavlou & Friderikis, Delphi 330 54', '델포이 계곡과 올리브 숲이 보이는 타베르나.', 'Taverna with views over the Delphi gorge and olive groves.'),
  place('delphi-fine_dining-2', 'delphi', 'fine_dining', 'Taverna Vakhos', 'Apollonos 31, 330 54 Delphi, Greece', '계곡 전망 테라스의 가족 운영 타베르나.', 'Family-run taverna with a valley-view terrace.'),

  // —— sounion ——
  place('sounion-fine_dining-1', 'sounion', 'fine_dining', 'Ilias (Elias)', 'Below the Temple of Poseidon, Sounio', '포세이돈 신전에서 가장 가까운 바다 전망 해산물 식당.', 'Sea-view seafood taverna closest to the temple.'),
  place('sounion-fine_dining-2', 'sounion', 'fine_dining', 'Theodoros & Eleni', 'Legrena, Greece', '레그레나의 해산물 타베르나. 페타 소스 홍합찜이 유명합니다.', 'Seafood taverna in Legrena, famous for mussels steamed in feta sauce.'),
  place('sounion-fine_dining-3', 'sounion', 'fine_dining', 'Taverna Syrtaki', 'Leoforos Souniou 114, Kato Sounio 195 00, Greece', '카바치 해변 옆 도로변의 타베르나.', 'Roadside taverna by Kavatsi beach.'),

  // —— olympia ——
  place('olympia-fine_dining-1', 'olympia', 'fine_dining', 'Taverna Bacchus', 'Miraka (Ancient Pisa) 10, 270 65 Ancient Olympia, Greece', '들판 속 가족 운영 타베르나 겸 여관.', 'Family-run taverna and inn among the fields.'),
  place('olympia-fine_dining-2', 'olympia', 'fine_dining', 'Aegean Restaurant', 'Georgiou Douma 4, 270 65 Ancient Olympia, Greece', '지역 식재료로 채식 메뉴가 다양한 광장의 식당.', 'Main-square restaurant with many vegetarian dishes from local produce.', { image: '/places/olympia-fine_dining-2.jpg' }),
  place('olympia-fine_dining-3', 'olympia', 'fine_dining', 'Taverna Orestis', 'Π. Σπηλιοπούλου, 270 65 Municipal Unit of Archea Olympia, Greece', '유적지에서 걸어갈 수 있는 현지 분위기 타베르나.', 'Local-feeling taverna a short walk from the site.'),

  // —— chania ——
  place('chania-fine_dining-1', 'chania', 'fine_dining', 'Tamam', 'Zampeliou 49, Chania 731 31', '옛 오스만 목욕탕을 개조한 크레타·지중해 요리 식당.', 'Cretan-Mediterranean cooking in a former Ottoman bathhouse.', { image: '/places/chania-fine_dining-1.jpg' }),
  place('chania-fine_dining-2', 'chania', 'fine_dining', 'Chrisostomos', 'Defkalionos & Ikarou, 731 32 Chania, Greece', '스파키아 향토 요리와 장작 화덕 요리의 크레타 전통 식당.', 'Traditional Cretan food from Sfakia, much of it wood-fired.'),
  place('chania-bakery-1', 'chania', 'bakery', 'Bougatsa Iordanis', 'Apokoronou 24, Chania 731 34', '1924년 문을 연 하니아의 부가차 가게.', 'Chania bougatsa shop, open since 1924.'),

  // —— naxos ——
  place('naxos-fine_dining-1', 'naxos', 'fine_dining', 'Scirocco', 'Αμοργού, 843 00 Naxos, Greece', '20년 가까이 이어온 가족 운영 그리스 타베르나.', 'Family-run Greek taverna going for nearly 20 years.'),
  place('naxos-fine_dining-2', 'naxos', 'fine_dining', 'Taverna Axiotissa', 'ΠΥΡΓΑΚΙ ΑΓΙΑΣΟΣ, 843 02 Municipality of Naxos and the Lesser Cyclades, Greece', '유기농 재료로 창작 요리를 내는 타베르나.', 'Taverna serving creative dishes from organic produce.'),

  // —— zakynthos ——
  place('zakynthos-fine_dining-1', 'zakynthos', 'fine_dining', 'Spartakos Tavern', 'Lomvardou 74, 291 00 Zakynthos, Greece', '자킨토스 타운의 타베르나.', 'Taverna in Zakynthos Town.'),
  place('zakynthos-fine_dining-2', 'zakynthos', 'fine_dining', 'Porto Limnionas Tavern', 'Porto Limnionas, Agios Leon, 290 92 Zakynthos, Greece', '만이 내려다보이는 절벽 위 타베르나.', 'Clifftop taverna overlooking a cove.'),
  place('zakynthos-fine_dining-3', 'zakynthos', 'fine_dining', 'Taverna Apelati', 'Zakynthos–Keri Road, Apelati, 290 92 Keri, Greece', '직접 기른 채소로 요리하는 산속 농장 타베르나.', 'Mountain farm taverna cooking its own produce.'),
]
