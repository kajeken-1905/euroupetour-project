import { place } from './placeFactory'
import type { Place } from '../types'

export const placesADExtra: Place[] = [
  // —— andorra-la-vella ——
  place('andorra-la-vella-fine_dining-2', 'andorra-la-vella', 'fine_dining', 'Restaurant Celler d\'En Toni', 'Carrer Verge del Pilar, 4, AD500 Andorra la Vella', '60년 넘게 이어온 카탈루냐 요리 식당. 카넬로니가 대표 메뉴입니다.', 'Catalan restaurant running for over sixty years; the cannelloni is its signature.'),
  place('andorra-la-vella-fine_dining-3', 'andorra-la-vella', 'fine_dining', 'Restaurant Eric Marty', 'C/ Mossèn Tremosa, 6, Andorra la Vella', '푸아그라·스테이크 타르타르 등 지중해식 요리를 내는 식당.', 'Mediterranean cooking such as foie gras and steak tartare.'),
  place('andorra-la-vella-fine_dining-4', 'andorra-la-vella', 'fine_dining', 'Restaurant el Crostó', 'Cap del Carrer, 7, Andorra la Vella', '테이블이 여섯 개 남짓한 작은 안도라 요리 식당. 예약을 권합니다.', 'Tiny Andorran restaurant with about six tables; book ahead.'),
  place('andorra-la-vella-fine_dining-5', 'andorra-la-vella', 'fine_dining', 'Alta Taberna Aires Gourmet', 'Andorra la Vella (centre)', '카탈루냐·마드리드·안달루시아 요리를 가정식으로 내는 스페인 식당.', 'Spanish restaurant cooking Catalan, Madrid and Andalusian dishes home-style.'),
  place('andorra-la-vella-bakery-1', 'andorra-la-vella', 'bakery', 'Art i Pa', 'Carrer Bonaventura Riberaygua, Andorra la Vella', '버스 터미널 근처의 빵집 겸 카페. 샌드위치와 속을 채운 크루아상이 인기입니다.', 'Bakery-café near the bus station, popular for sandwiches and filled croissants.'),
  place('andorra-la-vella-bakery-2', 'andorra-la-vella', 'bakery', 'Levaduramadre', 'Carrer Bonaventura Riberaygua, 18, Andorra la Vella', '스페인 사워도우 빵집 체인의 첫 해외 매장.', 'First store outside Spain of the Spanish sourdough bakery chain.'),
  place('andorra-la-vella-cafe-1', 'andorra-la-vella', 'cafe', 'Kofi - Specialty Coffee Roasters & Brunch', 'Av. Dr. Mitjavila, 45, Local 2, Andorra la Vella', '스페셜티 로스터리·브런치.', 'Specialty coffee roastery and brunch.'),
  place('andorra-la-vella-cafe-2', 'andorra-la-vella', 'cafe', 'Coffee To Be (Co.Be)', 'Carrer Prat de la Creu, 29, Andorra la Vella', '스페셜티 커피·브런치.', 'Specialty coffee and brunch.'),
  place('andorra-la-vella-cafe-3', 'andorra-la-vella', 'cafe', 'Riverside', 'Av. Dr. Mitjavila (near Pont de París), Andorra la Vella', '브런치·스페셜티 커피.', 'Brunch and specialty coffee.'),

  // —— pas-de-la-casa ——
  place('pas-de-la-casa-fine_dining-1', 'pas-de-la-casa', 'fine_dining', 'El Provençal', 'Carrer Catalunya 13, AD200 Pas de la Casa', '프랑스 요리 전문 레스토랑.', 'Restaurant specializing in French cuisine.'),

  // —— ordino ——
  place('ordino-fine_dining-1', 'ordino', 'fine_dining', 'Restaurant Tòpic', 'Carrer Major (entrance), AD300 Ordino', '오르디노 중심가 3층 건물의 레스토랑. 1층은 카페, 테라스가 있습니다.', 'Restaurant in a three-storey building on Ordino’s main street, with a ground-floor café and terrace.'),
  place('ordino-fine_dining-2', 'ordino', 'fine_dining', 'Vertical Ordino', 'Ordino, AD300, Andorra', '크레프·갈레트가 인기인 오르디노의 레스토랑. 테라스가 있고 글루텐·유당 없는 메뉴가 많습니다.', 'Ordino restaurant known for crêpes and galettes, with a terrace and many gluten- and lactose-free options.'),
  place('ordino-fine_dining-3', 'ordino', 'fine_dining', 'Restaurant Hotel Gaspà', 'Ordino, AD300, Andorra', '오르디노 가스파 호텔의 레스토랑·바.', 'Restaurant and bar of Hotel Gaspà in Ordino.'),

  place('ordino-bakery-1', 'ordino', 'bakery', 'Fleca Font', 'Ordino (near Hotel La Planada), AD300', '오르디노 마을 중심의 빵집.', 'Bakery in the centre of Ordino village.'),

  // —— escaldes-engordany: restaurants, bakeries and cafés (2026-11-21) ——
  place('escaldes-engordany-fine_dining-1', 'escaldes-engordany', 'fine_dining', 'Beç', 'Carrer Copríncep François Mitterrand 2, AD700 Escaldes-Engordany', '미쉐린 가이드에 실린 에스칼데스 중심가의 현대 요리 식당. 구글 지도 평점 4.5.', 'Contemporary restaurant in central Escaldes, listed in the MICHELIN Guide. Rated 4.5 on Google Maps.'),
  place('escaldes-engordany-fine_dining-2', 'escaldes-engordany', 'fine_dining', 'Restaurant Odetti Bistro Escaldes', 'Carrer Santa Anna 14, AD700 Escaldes-Engordany', '카를레마니 거리 뒤편의 카탈루냐 요리 비스트로. 구글 지도 평점 4.7.', 'Catalan bistro just off Avinguda Carlemany. Rated 4.7 on Google Maps.'),
  place('escaldes-engordany-fine_dining-3', 'escaldes-engordany', 'fine_dining', 'L\'Enoteca Andorra', 'Carrer del Parnal 4, AD700 Escaldes-Engordany', '에스칼데스 중심의 카탈루냐 요리 식당 겸 와인 바. 구글 지도 평점 4.5.', 'Catalan restaurant and wine bar in central Escaldes. Rated 4.5 on Google Maps.'),
  place('escaldes-engordany-fine_dining-4', 'escaldes-engordany', 'fine_dining', 'El Cachirulo', 'Carrer de les Boïgues, AD700 Escaldes-Engordany', '에스칼데스의 타파스 식당. 구글 지도 평점 4.6.', 'Tapas restaurant in Escaldes. Rated 4.6 on Google Maps.'),
  place('escaldes-engordany-fine_dining-5', 'escaldes-engordany', 'fine_dining', 'Cheese\'s Art Andorra', 'Carrer Copríncep François Mitterrand 4, AD700 Escaldes-Engordany', '퐁뒤 등 치즈 요리를 내는 식당. 구글 지도 평점 4.4.', 'Restaurant serving fondue and other cheese dishes. Rated 4.4 on Google Maps.'),
  place('escaldes-engordany-bakery-1', 'escaldes-engordany', 'bakery', 'La Coquette', 'Plaça Coprínceps 6, AD700 Escaldes-Engordany', '코프린셉스 광장의 파티스리. 구글 지도 평점 4.5.', 'Patisserie on Plaça Coprínceps. Rated 4.5 on Google Maps.'),
  place('escaldes-engordany-cafe-1', 'escaldes-engordany', 'cafe', 'TWO SHOTS - Specialty Coffee & Matcha', 'Avinguda Carlemany 17, AD700 Escaldes-Engordany', '카를레마니 거리의 스페셜티 커피·말차 카페. 구글 지도 평점 4.8.', 'Specialty coffee and matcha bar on Avinguda Carlemany. Rated 4.8 on Google Maps.'),
  place('escaldes-engordany-cafe-2', 'escaldes-engordany', 'cafe', 'Alt Benestar Cafe', 'Carrer Copríncep François Mitterrand 4, AD700 Escaldes-Engordany', '에스칼데스 중심가의 셀프서비스 카페. 구글 지도 평점 4.8.', 'Self-service café in central Escaldes. Rated 4.8 on Google Maps.'),

  // —— la-massana: restaurants, bakeries and cafés (2026-11-21) ——
  place('la-massana-fine_dining-1', 'la-massana', 'fine_dining', 'Malandra', 'Camí Ral, AD400 La Massana', '라 마사나 중심의 그릴 식당. 구글 지도 평점 4.8.', 'Grill restaurant in the centre of La Massana. Rated 4.8 on Google Maps.'),
  place('la-massana-fine_dining-2', 'la-massana', 'fine_dining', 'Babek restaurant', 'Avinguda del Ravell 5, AD400 La Massana', '라 마사나 마을 안의 식당. 구글 지도 평점 4.7.', 'Restaurant in La Massana village. Rated 4.7 on Google Maps.'),
  place('la-massana-fine_dining-3', 'la-massana', 'fine_dining', 'Sentro \'20', 'Avinguda de Sant Antoni 27, AD400 La Massana', '라 마사나 큰길의 필리핀 요리 식당. 구글 지도 평점 4.8.', 'Filipino restaurant on La Massana’s main road. Rated 4.8 on Google Maps.'),
  place('la-massana-fine_dining-4', 'la-massana', 'fine_dining', 'Jou La Borda', 'Avinguda de les Comes 3, AD400 La Massana', '라 마사나 남쪽 언덕의 식당. 구글 지도 평점 4.8.', 'Restaurant on the hillside south of La Massana. Rated 4.8 on Google Maps.'),
  place('la-massana-fine_dining-5', 'la-massana', 'fine_dining', 'Restaurant Cal Silvino', 'Avinguda el Través 21, AD400 La Massana', '라 마사나 중심의 식당. 구글 지도 평점 4.4.', 'Restaurant in the centre of La Massana. Rated 4.4 on Google Maps.'),
  place('la-massana-bakery-1', 'la-massana', 'bakery', 'Forn Xamba', 'Carretera de l\'Aldosa 13, Local 3, AD400 La Massana', '알도사 길가의 빵집. 구글 지도 평점 4.8.', 'Bakery on the road to l’Aldosa. Rated 4.8 on Google Maps.'),
  place('la-massana-cafe-1', 'la-massana', 'cafe', 'Grupetta', 'Avinguda de Sant Antoni 45, AD400 La Massana', '라 마사나 큰길의 브런치 카페. 구글 지도 평점 4.5.', 'Brunch café on La Massana’s main road. Rated 4.5 on Google Maps.'),

  // —— canillo: restaurants, bakeries and cafés (2026-11-21) ——
  place('canillo-fine_dining-1', 'canillo', 'fine_dining', 'Restaurant Borda l\'Era del Rossell', 'CS-230, Meritxell, AD100 Canillo', '메리체이 성모 성당 아래의 그릴 식당. 구글 지도 평점 4.6.', 'Grill restaurant below the Sanctuary of Meritxell. Rated 4.6 on Google Maps.'),
  place('canillo-fine_dining-2', 'canillo', 'fine_dining', 'El Racó del Simó', 'Carretera de Prats 5, AD100 Canillo', '카니요 마을 위쪽의 현대 유럽 요리 식당. 구글 지도 평점 4.8.', 'Modern European restaurant above Canillo village. Rated 4.8 on Google Maps.'),
  place('canillo-fine_dining-3', 'canillo', 'fine_dining', 'Blót Canillo', 'Carrer Perdut 8, AD100 Canillo', '카니요 중심의 브루펍. 구글 지도 평점 4.6.', 'Brewpub in the centre of Canillo. Rated 4.6 on Google Maps.'),
  place('canillo-fine_dining-4', 'canillo', 'fine_dining', 'La Cabana', 'Urbanització la Ribagrossa 13, AD100 Canillo', '카니요 남쪽 끝의 뷔페식 식당. 구글 지도 평점 4.6.', 'Buffet restaurant at the southern end of Canillo. Rated 4.6 on Google Maps.'),
  place('canillo-cafe-1', 'canillo', 'cafe', 'Les delícies del Jimmy', 'Avinguda de Sant Joan de Caselles 30, AD100 Canillo', '카니요 큰길의 찻집 겸 카페. 구글 지도 평점 4.3.', 'Tea room and café on Canillo’s main road. Rated 4.3 on Google Maps.'),

  // —— soldeu: restaurants, bakeries and cafés (2026-11-21) ——
  place('soldeu-fine_dining-1', 'soldeu', 'fine_dining', 'Ibaya', 'Carretera General 2, AD100 Soldeu', '스포트 호텔 에르미타주 안의 창작 요리 레스토랑. 미쉐린 1스타. 구글 지도 평점 4.4.', 'Creative fine-dining restaurant in the Sport Hotel Hermitage; one MICHELIN star. Rated 4.4 on Google Maps.', { michelin: 'star1' }),
  place('soldeu-fine_dining-2', 'soldeu', 'fine_dining', 'Koy Hermitage', 'Carretera General 2, AD100 Soldeu', '미쉐린 가이드에 실린 일식 레스토랑. 구글 지도 평점 4.6.', 'Japanese restaurant listed in the MICHELIN Guide. Rated 4.6 on Google Maps.'),
  place('soldeu-fine_dining-3', 'soldeu', 'fine_dining', 'Restaurant La Cort de Popaire', 'Plaça del Piol 3, AD100 Soldeu', '솔데우 마을 광장의 그릴 식당. 구글 지도 평점 4.6.', 'Grill restaurant on Soldeu’s village square. Rated 4.6 on Google Maps.'),
  place('soldeu-fine_dining-4', 'soldeu', 'fine_dining', 'Don Giovanni Restaurant Soldeu', 'Carretera General 2, 19 (Lodge Park Hotel), AD100 Soldeu', '솔데우 서쪽 호텔 안의 이탈리아 요리 식당. 구글 지도 평점 4.6.', 'Italian restaurant in a hotel at the western end of Soldeu. Rated 4.6 on Google Maps.'),
  place('soldeu-cafe-1', 'soldeu', 'cafe', 'La brasserie', 'Carretera General 2, AD100 Soldeu', '솔데우 큰길의 브런치 카페. 구글 지도 평점 4.8.', 'Brunch café on Soldeu’s main road. Rated 4.8 on Google Maps.'),

  // —— pas-de-la-casa: restaurants, bakeries and cafés (2026-11-21) ——
  place('pas-de-la-casa-fine_dining-2', 'pas-de-la-casa', 'fine_dining', 'Cava Roca Grill Bar', 'Plaça dels Coprínceps 16, AD200 Pas de la Casa', '코프린셉스 광장의 그릴 식당. 구글 지도 평점 4.8.', 'Grill restaurant on Plaça dels Coprínceps. Rated 4.8 on Google Maps.'),
  place('pas-de-la-casa-fine_dining-3', 'pas-de-la-casa', 'fine_dining', 'Los Calvi (La Familia)', 'Carrer Major 21, AD200 Pas de la Casa', '파스 데 라 카사 큰길의 식당. 구글 지도 평점 4.9.', 'Restaurant on Pas de la Casa’s main street. Rated 4.9 on Google Maps.'),
  place('pas-de-la-casa-fine_dining-4', 'pas-de-la-casa', 'fine_dining', 'Chez Paulo Pas', 'Carrer Major 18, AD200 Pas de la Casa', '파스 데 라 카사 큰길의 식당. 구글 지도 평점 4.5.', 'Restaurant on Pas de la Casa’s main street. Rated 4.5 on Google Maps.'),
  place('pas-de-la-casa-fine_dining-5', 'pas-de-la-casa', 'fine_dining', 'Restaurant El Marselles', 'Carrer Bearn 10, AD200 Pas de la Casa', '파스 데 라 카사 중심의 식당. 구글 지도 평점 4.5.', 'Restaurant in the centre of Pas de la Casa. Rated 4.5 on Google Maps.'),
  place('pas-de-la-casa-bakery-1', 'pas-de-la-casa', 'bakery', 'Santagloria Coffee & Bakery', 'Carrer de Sant Jordi 17, AD200 Pas de la Casa', '빵집 겸 카페 체인 매장. 구글 지도 평점 4.5.', 'Branch of a bakery-café chain. Rated 4.5 on Google Maps.'),
  place('pas-de-la-casa-bakery-2', 'pas-de-la-casa', 'bakery', 'La Camarguaise', 'Avinguda d\'Encamp 31, AD200 Pas de la Casa', '엔캄프 길가의 빵집. 구글 지도 평점 4.6.', 'Bakery on Avinguda d’Encamp. Rated 4.6 on Google Maps.'),
  place('pas-de-la-casa-cafe-1', 'pas-de-la-casa', 'cafe', 'Granier', 'Carrer Catalunya 8, AD200 Pas de la Casa', '빵집 겸 카페 체인 매장. 구글 지도 평점 4.3.', 'Branch of a bakery-café chain. Rated 4.3 on Google Maps.'),

  // —— ordino: restaurants, bakeries and cafés (2026-11-21) ——
  place('ordino-fine_dining-4', 'ordino', 'fine_dining', 'La Clota', 'Edifici Prat del Pomer, Avinguda del Casamanya, AD300 Ordino', '오르디노 마을 아래쪽의 식당. 구글 지도 평점 4.7.', 'Restaurant at the lower end of Ordino village. Rated 4.7 on Google Maps.'),
]
