import { place } from './placeFactory'
import type { Place } from '../types'

export const placesDKExtra: Place[] = [
  // —— aarhus ——
  place('aarhus-fine_dining-1', 'aarhus', 'fine_dining', 'Domestic', 'Mejlgade 35B, 8000 Aarhus C', '라틴 쿼터의 미쉐린 1스타 레스토랑. 덴마크 식재료만 씁니다.', 'One-Michelin-star restaurant in the Latin Quarter cooking with Danish produce.', { michelin: 'star1', image: '/places/aarhus-fine_dining-1.jpg' }),
  place('aarhus-fine_dining-2', 'aarhus', 'fine_dining', 'Frederikshøj', 'Oddervej 19-21, 8000 Aarhus C', '마르셀리스보 숲 가장자리의 미쉐린 2스타 레스토랑.', 'Two-Michelin-star restaurant on the edge of the Marselisborg woods.', { michelin: 'star2', image: '/places/aarhus-fine_dining-2.jpg' }),
  place('aarhus-fine_dining-3', 'aarhus', 'fine_dining', 'Substans', 'Marianne Thomsens Gade 2F, 8000 Aarhus C', '오르후스 항구 지구의 미쉐린 1스타 레스토랑. 창의적인 코스를 냅니다.', 'One-Michelin-star restaurant in Aarhus’ harbour district serving creative tasting menus.', { michelin: 'star1', image: '/places/aarhus-fine_dining-3.jpg' }),
  place('aarhus-fine_dining-4', 'aarhus', 'fine_dining', 'Gastromé', 'Grenåvej 127, 8240 Risskov', '리스코우의 미쉐린 1스타 레스토랑. 월·화요일은 쉽니다.', 'One-Michelin-star restaurant in Risskov; closed Mondays and Tuesdays.', { michelin: 'star1', image: '/places/aarhus-fine_dining-4.jpg' }),
  place('aarhus-bakery-2', 'aarhus', 'bakery', 'La Cabra Bakery', 'Borggade 4F, 8000 Aarhus C', '라틴 쿼터의 사워도우 빵집. 라 카브라 첫 카페 근처에 있고 매일 엽니다.', 'Sourdough bakery in the Latin Quarter, round the corner from La Cabra’s original café; open daily.'),
  place('aarhus-bakery-4', 'aarhus', 'bakery', 'Strandvejens Bageri', 'Nordre Strandvej 11A, 8240 Risskov', '리스코우 해안 도로의 동네 빵집.', 'Neighbourhood bakery on the coast road in Risskov.'),
  place('aarhus-cafe-1', 'aarhus', 'cafe', 'La Cabra Coffee', 'Graven 20, 8000 Aarhus C', '2012년 라 카브라가 시작된 라틴 쿼터의 스페셜티 커피 카페. 카다멈번이 유명합니다.', 'Latin Quarter specialty coffee café where La Cabra started in 2012, known for its cardamom buns.'),
  place('aarhus-cafe-2', 'aarhus', 'cafe', 'Café Faust', 'Åboulevarden 38, 8000 Aarhus C', '오르후스 강변의 카페 겸 바. 버거·샌드위치·저녁 코스가 있습니다.', 'Riverside café and bar in central Aarhus with burgers, sandwiches and an evening set menu.'),
  place('aarhus-cafe-3', 'aarhus', 'cafe', 'ARoS café', 'ARoS Allé 2, 8000 Aarhus C', '아로스 미술관 4층의 카페. 카페만 이용하면 입장료가 없습니다.', 'Café on the fourth floor of the ARoS art museum; free to enter for the café alone.'),
  place('aarhus-cafe-4', 'aarhus', 'cafe', "Stiller's Coffee", 'Klostergade 32E, 8000 Aarhus C', '라틴 쿼터 뒷골목의 커피 바 겸 로스터리. 덴마크 바리스타 챔피언이 운영합니다. 일·월요일은 쉽니다.', 'Coffee bar and roastery in a Latin Quarter back alley, run by a Danish barista champion; closed Sundays and Mondays.'),
  place('aarhus-cafe-5', 'aarhus', 'cafe', 'Bådcafé', 'Marselisborg Havnevej 54, 8000 Aarhus C', '마르셀리스보 요트 항구 입구에 정박한 1950년 옛 페리 위의 카페. 여름철 위주로 엽니다.', 'Café aboard a 1950 former ferry moored at the entrance to Marselisborg marina; mainly open in summer.'),
  place('aarhus-korean-1', 'aarhus', 'korean', 'Gogi The Korean Grillhouse', 'Skt. Knuds Torv 25, 8000 Aarhus C', '시내 중심의 한식당. 비빔밥·떡볶이·도시락이 있고 월요일은 쉽니다.', 'Korean restaurant in the centre with bibimbap, tteokbokki and bento boxes; closed Mondays.'),

  // —— odense ——
  place('odense-fine_dining-1', 'odense', 'fine_dining', 'Under Lindetræet', 'Ramsherred 2, 5000 Odense C', '안데르센 생가 뒤 1771년 건물의 스칸디나비아 레스토랑. 1965년부터 식당으로 쓰였습니다.', 'Scandinavian restaurant in a 1771 building behind Hans Christian Andersen’s House, a restaurant since 1965.'),
  place('odense-fine_dining-2', 'odense', 'fine_dining', 'ARO', 'Østerbro 32, 5000 Odense C', '오덴세 외곽의 옛 공장 건물에 있는 미쉐린 1스타 레스토랑. 수~토 저녁에 엽니다.', 'One-Michelin-star restaurant in a former factory on the edge of Odense; Wednesday to Saturday evenings.', { michelin: 'star1' }),
  place('odense-fine_dining-3', 'odense', 'fine_dining', 'Pasfall', 'Brandts Passage 31, 5000 Odense C', '브란츠 파사주의 현대 덴마크 식당. 오픈 키친이 있고 수~토요일에 엽니다.', 'Modern Danish restaurant in Brandts Passage with an open kitchen; Wednesday to Saturday.'),
  place('odense-fine_dining-4', 'odense', 'fine_dining', 'Den Gamle Kro', 'Overgade 23, 5000 Odense C', '1683년 건물의 덴마크 식당. 두 집 사이 유리 지붕 안뜰이 있고 스뫼레브뢰드를 냅니다.', 'Danish restaurant in a 1683 building with a glass-roofed courtyard between two houses, serving smørrebrød.', { image: '/places/odense-fine_dining-4.jpg' }),
  place('odense-bakery-2', 'odense', 'bakery', 'Smörbagt', 'Vestergade 44, 5000 Odense C', '시내의 사워도우 빵집. 여러 맛의 시나몬 스윌과 크루아상이 있고 일요일은 쉽니다.', 'Sourdough bakery in the centre with cinnamon swirls in several flavours and croissants; closed Sundays.'),
  place('odense-cafe-1', 'odense', 'cafe', 'Café Sølle', 'Nedergade 18, 5000 Odense C', '작고 아늑한 라이트 로스트 커피 카페. 직접 구운 빵과 내추럴 와인도 있습니다.', 'Small, cosy light-roast coffee café with homemade baked goods and natural wine.'),
  place('odense-cafe-2', 'odense', 'cafe', 'Café Biografen', 'Brandts Passage 39-41, 5000 Odense C', '1983년 문을 연 브란츠 지구의 카페 겸 예술 영화관. 상영관 3개와 야외석이 있습니다.', 'Café and art-house cinema in the Brandts quarter, open since 1983, with three screens and outdoor seating.', { image: '/places/odense-cafe-2.jpg' }),
  place('odense-cafe-3', 'odense', 'cafe', "Nelle's Coffee & Wine", 'Overgade 21B, 5000 Odense C', '안데르센 생가 근처 구시가지의 커피·와인 바. 빵·케이크와 야외석이 있습니다.', 'Coffee and wine bar on the edge of the old town near Hans Christian Andersen’s House, with bread, cake and outdoor seating.', { image: '/places/odense-cafe-3.jpg' }),

  // —— aalborg ——
  place('aalborg-fine_dining-1', 'aalborg', 'fine_dining', 'Restaurant Fusion', 'Strandvejen 4, 9000 Aalborg', '림피오르 강변 유리 건물의 레스토랑. 유럽·아시아 요리와 스시 바가 있습니다.', 'Glass-fronted restaurant on the Limfjord waterfront with European-Asian cooking and a sushi bar.'),
  place('aalborg-fine_dining-2', 'aalborg', 'fine_dining', 'Mortens Kro', 'Mølleå 2-6, 9000 Aalborg', '번화가 알가데 뒤편 묄레오 지구의 레스토랑. 1997년 셰프 모르텐 닐센이 열었고 계절마다 메뉴가 바뀝니다.', 'Restaurant in the Mølleå area behind Algade, opened in 1997 by chef Morten Nielsen, with menus that change through the year.'),
  place('aalborg-fine_dining-3', 'aalborg', 'fine_dining', 'Alimentum', 'Løkkegade 23, 9000 Aalborg', '올보르의 미쉐린 1스타 레스토랑. 농장 직송 재료로 현대 요리를 냅니다.', 'One-Michelin-star restaurant in Aalborg serving modern farm-to-table cooking.', { michelin: 'star1' }),
  place('aalborg-bakery-2', 'aalborg', 'bakery', 'Othello Bageriet', 'Christiansgade 35, 9000 Aalborg', '올보르 시내의 동네 빵집. 시나몬번·초콜릿 코코넛 케이크·포카치아가 있고 앉을 자리도 있습니다.', 'Neighbourhood bakery in central Aalborg with cinnamon buns, chocolate-coconut cake and focaccia, plus seating.'),
  place('aalborg-cafe-1', 'aalborg', 'cafe', 'Behag Din Smag', 'Slotsgade 16A, 9000 Aalborg', '2004년 문을 연 올보르 시내의 커피 로스터리 카페. 직접 만든 케이크와 차가 있고 일·월요일은 쉽니다.', 'Coffee roaster café in central Aalborg, opened 2004, with homemade cakes and teas; closed Sundays and Mondays.'),
  place('aalborg-cafe-2', 'aalborg', 'cafe', "Koch's Kaffebar", 'Algade 23, 9000 Aalborg', '알가데 거리의 가족 운영 카페(2013년 개업). 커피 메뉴가 많고 시내가 보이는 옥상 테라스가 있습니다.', 'Family-run café on Algade, opened 2013, with a long coffee menu and a rooftop terrace overlooking the city.'),

  // —— roskilde ——
  place('roskilde-fine_dining-1', 'roskilde', 'fine_dining', 'Restaurant Store Børs', 'Havnevej 43, 4000 Roskilde', '로스킬레 항구의 계절 덴마크 레스토랑. 피오르가 보입니다.', 'Seasonal Danish restaurant on Roskilde harbour with fjord views.'),
  place('roskilde-fine_dining-2', 'roskilde', 'fine_dining', 'Raadhuskælderen', 'Fondens Bro 3, 4000 Roskilde', '대성당에서 50m 거리, 옛 시청 지하의 덴마크 식당. 점심엔 스뫼레브뢰드, 저녁엔 그릴 요리를 내고 여름엔 안뜰 좌석이 있습니다.', 'Danish cellar restaurant under the old town hall, 50 m from the cathedral, with smørrebrød at lunch, grill dishes at dinner and a summer courtyard.'),
  place('roskilde-fine_dining-3', 'roskilde', 'fine_dining', 'Gusto Giusto', 'Jernbanegade 19, 4000 Roskilde', '덴마크·이탈리아 부부가 운영하는 작은 북부 이탈리아 식당. 유기농 재료를 쓰고 화~토 저녁에 엽니다.', 'Small northern Italian restaurant run by a Danish-Italian couple, using mostly organic produce; Tuesday to Saturday evenings.'),
  place('roskilde-bakery-1', 'roskilde', 'bakery', 'Bakkegårdens Bageri', 'Køgevej 39, 4000 Roskilde', '로스킬레의 동네 빵집. 빵·페이스트리·케이크가 다양하고 아침 일찍 붐빕니다.', 'Neighbourhood bakery in Roskilde with a wide range of bread, pastries and cakes; busy early in the morning.'),
  place('roskilde-bakery-2', 'roskilde', 'bakery', 'Rustik Bageriet', 'Støden 1, 4000 Roskilde', '시내 중심의 빵집 겸 카페. 저온 발효 사워도우와 케이크, 브런치·스뫼레브뢰드가 있습니다.', 'Bakery café in the centre with slow-fermented sourdough, cakes, brunch and smørrebrød.'),
  place('roskilde-cafe-1', 'roskilde', 'cafe', 'MØRK', 'Penselstrøget 44, 4000 Roskilde', '뮤지콘 지구 컨테이너의 유기농 커피 로스터리 카페. 로스킬레 페스티벌 커피도 볶습니다.', 'Organic coffee roastery café in a converted container in Musicon, which also roasts the Roskilde Festival coffee.'),
  place('roskilde-cafe-3', 'roskilde', 'cafe', 'Café 48', 'Algade 48, 4000 Roskilde', '역 근처 알가데 거리의 덴마크식 카페. 점심에 스뫼레브뢰드를 냅니다.', 'Danish café on Algade near the station, serving smørrebrød at lunch.'),
  place('roskilde-korean-1', 'roskilde', 'korean', 'Seoul Koreansk BBQ', "Ro's Torv 1, 4000 Roskilde", '로스토브의 한국식 셀프 그릴.', 'Korean grill-it-yourself BBQ at Ro’s Torv.'),

]
