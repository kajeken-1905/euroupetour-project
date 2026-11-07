#!/usr/bin/env python3
"""France step 1, north (Paris, Île-de-France, Champagne, Normandy, Brittany, Alsace), 2026-11-08.
Fixes: strasbourg-h4 was named '바랑주 광장' for Place Kléber; strasbourg-h5 'Rhine waterfront' (Strasbourg is on the
Ill) → Batorama boat tour; chartres-h2 'Stained glass' duplicated the cathedral → Maison Picassiette; Colmar's in-town
museum and church carried the '근교 마을' header. Thin descriptions rewritten. New sights incl. Paris Catacombs, Picasso,
Carnavalet, Cluny, Canal Saint-Martin, Fondation Louis Vuitton, and themed Calvados (Honfleur) and Cancale oysters.
Run once."""
import re
import urllib.parse
from add_daytrip_places import rd, wr
from sight_order import add_sights, blocks, itinerary_order, read_group, reorder
from review_sk import S

DAY = ('근교 당일치기', 'Day trip')
OLD_NEAR = ('근교', 'Nearby')
P_EIF = ('7·16구 · 에펠탑 · 앵발리드', '7th & 16th arr. · Eiffel Tower & Invalides')
P_MAR = ('4구 · 노트르담 · 마레', '4th arr. · Notre-Dame & Le Marais')
P_LAT = ('5·6·15구 · 라탱 지구 · 생제르맹', '5th, 6th & 15th arr. · Latin Quarter & Saint-Germain')
P_MORE = ('그 외 · 센 강 · 20구 · 라데팡스', 'More · the Seine, 20th arr. & La Défense')
VILL = ('근교 마을', 'Nearby villages')
# (name ko or None, name en or None, desc ko, desc en, new maps query or None)
REWRITE = {
 'paris-h1': (None, None, '1889년 만국박람회 때 세운 330m 철탑으로, 엘리베이터나 계단으로 2층·꼭대기 전망대에 오릅니다. 밤엔 매시 정각 5분간 반짝입니다.', 'The 330 m iron tower built for the 1889 World’s Fair—take the lift or stairs to the second floor and summit; at night it sparkles for five minutes every hour.', None),
 'paris-h11': (None, None, '에펠탑 아래 펼쳐진 긴 잔디 공원으로, 피크닉을 하며 탑을 올려다봅니다.', 'The long lawns below the Eiffel Tower—picnic with the tower overhead.', None),
 'paris-h12': (None, None, '루이 14세가 세운 상이군인 병원으로, 황금 돔 아래 나폴레옹의 묘와 군사 박물관이 있습니다.', 'Louis XIV’s veterans’ hospital, with Napoleon’s tomb under the golden dome and the Army Museum.', None),
 'paris-h13': (None, None, '로댕이 살던 저택과 정원으로, ‘생각하는 사람’과 ‘지옥의 문’이 정원에 놓여 있습니다.', 'Rodin’s former mansion and garden, where The Thinker and The Gates of Hell stand outdoors.', None),
 'paris-h2': (None, None, '옛 왕궁에 자리한 세계 최대급 미술관으로, ‘모나리자’, ‘밀로의 비너스’, ‘사모트라케의 니케’가 있습니다. 유리 피라미드가 입구입니다.', 'One of the world’s largest museums, in the former royal palace—the Mona Lisa, Venus de Milo and Winged Victory, entered through the glass pyramid.', None),
 'paris-h23': (None, None, '나폴레옹 기념 기둥과 리츠 호텔, 고급 보석상이 둘러싼 팔각형 광장입니다.', 'The octagonal square of Napoleon’s column, the Ritz and grand jewellers.', None),
 'paris-h3': (None, None, '2019년 화재 뒤 복원을 마치고 2024년 12월 다시 문을 연 고딕 대성당으로, 장미창과 플라잉 버트레스가 유명합니다.', 'The Gothic cathedral restored after the 2019 fire and reopened in December 2024, famous for its rose windows and flying buttresses.', None),
 'paris-h28': (None, None, '시청 앞 광장이 있는 신르네상스 건물로, 겨울엔 광장에 스케이트장이 서기도 합니다.', 'The neo-Renaissance city hall and its square, sometimes home to a winter ice rink.', None),
 'paris-h8': (None, None, '배관과 철골을 겉으로 드러낸 현대 미술관입니다. 2025년 9월부터 약 5년간 보수 공사로 휴관합니다.', 'The inside-out modern-art centre with its pipes on the outside—closed for about five years of renovation from September 2025.', None),
 'paris-h34': (None, None, '헤밍웨이 등이 드나든 전설적인 영어 서점으로, 노트르담 건너편 센강 가에 있습니다.', 'The legendary English-language bookshop of Hemingway’s Paris, across the Seine from Notre-Dame.', None),
 'paris-h32': (None, None, '뤽상부르 궁전 앞 정원으로, 연못에 장난감 배를 띄우고 철제 의자에 앉아 쉽니다.', 'The garden in front of the Luxembourg Palace—sail toy boats on the pond and rest on the iron chairs.', None),
 'paris-h35': (None, None, '210m 빌딩의 56층과 옥상 전망대로, 에펠탑이 들어간 파리 전경을 봅니다.', 'The 56th floor and rooftop of the 210 m tower, with the Eiffel Tower in the view.', None),
 'paris-h6': (None, None, '나폴레옹이 세운 개선문으로, 꼭대기에 오르면 12갈래 대로가 별처럼 뻗어 나간 모습이 보입니다.', 'Napoleon’s triumphal arch—climb to the top to see twelve avenues radiating like a star.', None),
 'paris-h15': (None, None, '개선문에서 콩코르드 광장까지 2km 가로수 대로로, 상점과 카페가 이어집니다.', 'The 2 km tree-lined avenue from the Arc de Triomphe to Place de la Concorde, lined with shops and cafés.', None),
 'paris-h24': (None, None, '코린트식 기둥 52개가 둘러싼 그리스 신전 모양의 성당입니다.', 'A church built like a Greek temple, ringed by 52 Corinthian columns.', None),
 'paris-h37': (None, None, '1889년 문을 연 빨간 풍차의 카바레로, 캉캉 공연을 봅니다.', 'The red-windmill cabaret opened in 1889, home of the cancan.', None),
 'paris-h5': ('센강 유람선', 'Seine river cruise', '에펠탑부터 노트르담까지 다리 아래를 지나는 1시간 정도의 유람선입니다.', 'An hour-long boat ride under the bridges from the Eiffel Tower to Notre-Dame.', None),
 'paris-h7': (None, None, '루이 14세의 궁전으로, 거울의 방과 왕의 거처, 거대한 정원과 트리아농, 마리 앙투아네트의 마을이 있습니다.', 'Louis XIV’s palace—the Hall of Mirrors, the royal apartments, vast gardens, the Trianons and Marie Antoinette’s hamlet.', None),
 'giverny-h1': (None, None, '모네가 직접 만든 연못 정원으로, 일본식 다리와 수련이 ‘수련’ 연작의 무대입니다.', 'The pond garden Monet created himself—the Japanese bridge and water lilies of his Water Lilies series.', None),
 'giverny-h2': (None, None, '모네가 43년간 산 분홍 집으로, 노란 식당과 일본 판화가 걸린 방을 봅니다.', 'The pink house where Monet lived for 43 years, with its yellow dining room and Japanese prints.', None),
 'giverny-h3': (None, None, '집 앞을 가득 채운 꽃 정원으로, 계절마다 색이 바뀝니다.', 'The flower garden filling the space in front of the house, changing colour with the seasons.', None),
 'giverny-h4': (None, None, '인상주의와 그 영향을 받은 작품을 기획 전시하는 미술관입니다.', 'A museum of temporary exhibitions on Impressionism and its legacy.', None),
 'fontainebleau-h3': (None, None, '사암 바위와 오솔길이 이어지는 2만 ha 숲으로, 볼더링의 성지입니다.', 'A 20,000-hectare forest of sandstone boulders and trails, a mecca for bouldering.', None),
 'fontainebleau-h4': (None, None, '밀레·루소 등 바르비종파 화가들이 살던 숲가 마을입니다.', 'The forest-edge village of Millet, Rousseau and the Barbizon painters.', None),
 'chartres-h2': ('피카시에트의 집', 'Maison Picassiette', '묘지 관리인이 깨진 접시와 유리 조각으로 집 전체를 모자이크로 덮은 집입니다.', 'A cemetery caretaker’s house covered inside and out in mosaics of broken crockery and glass.', 'Maison Picassiette Chartres'),
 'chartres-h3': (None, None, '외르강 가의 옛 빨래터와 돌다리, 목조 가옥이 남은 아래 마을입니다.', 'The lower town on the Eure, with old wash-houses, stone bridges and half-timbered houses.', None),
 'chartres-h4': (None, None, '대성당과 건물들에 밤마다 빛을 비추는 조명 행사입니다.', 'Night-time light projections on the cathedral and buildings.', None),
 'reims-h2': (None, None, '로마 시대 석회암 채석장을 쓴 지하 저장고에서 샴페인 하우스 투어와 시음을 합니다.', 'Champagne-house tours and tastings in cellars cut into Roman chalk quarries.', None),
 'reims-h3': (None, None, '대관식 보물과 대성당의 원본 조각을 전시하는 대주교 궁전입니다.', 'The archbishop’s palace, displaying coronation treasures and the cathedral’s original statues.', None),
 'reims-h4': (None, None, '랭스 첫 주교 성 레미의 유해를 모신 로마네스크 수도원 성당입니다.', 'The Romanesque abbey church holding the relics of St Remi, Reims’s first bishop.', None),
 'rouen-h1': (None, None, '모네가 30여 점의 연작으로 그린 고딕 대성당으로, 첨탑이 프랑스에서 가장 높습니다.', 'The Gothic cathedral Monet painted more than 30 times, with France’s tallest spire.', None),
 'rouen-h2': (None, None, '구시가 거리 위 아치에 걸린 16세기 천문시계로, 시계탑에 오를 수 있습니다.', 'The 16th-century astronomical clock on an arch over the old street; you can climb its belfry.', None),
 'rouen-h4': (None, None, '목조 가옥이 늘어선 구시가 골목으로, 그로 오를로주 거리 주변에 많습니다.', 'Old-town lanes lined with half-timbered houses, many around the Gros-Horloge street.', None),
 'honfleur-h1': (None, None, '좁고 높은 집들이 수면에 비치는 17세기 항구로, 인상파 화가들이 즐겨 그렸습니다.', 'The 17th-century harbour where tall narrow houses reflect in the water, a favourite of the Impressionists.', None),
 'honfleur-h2': (None, None, '배 만드는 목수들이 지은 프랑스에서 가장 큰 목조 성당으로, 종탑이 따로 서 있습니다.', 'France’s largest wooden church, built by shipwrights, with a separate bell tower.', None),
 'honfleur-h3': (None, None, '옹플뢰르 출신 화가 부댕과 노르망디 해안을 그린 그림을 전시합니다.', 'Paintings by Honfleur-born Boudin and others of the Normandy coast.', None),
 'honfleur-h4': (None, None, '센강 하구를 가로지르는 2km 사장교로, 르아브르와 옹플뢰르를 잇습니다.', 'The 2 km cable-stayed bridge across the Seine estuary between Le Havre and Honfleur.', None),
 'etretat-h1': (None, None, '바다로 코를 내민 코끼리 모양 아치 절벽으로, 절벽 위 길에서 내려다봅니다.', 'The cliff arch shaped like an elephant dipping its trunk in the sea, seen from the clifftop path.', None),
 'etretat-h2': (None, None, '아발 절벽 옆 바다에 솟은 51m 바늘 모양 바위입니다.', 'The 51 m needle of rock rising from the sea beside the Falaise d’Aval.', None),
 'etretat-h4': (None, None, '두 절벽 사이의 자갈 해변으로, 모네와 쿠르베가 그렸습니다.', 'The pebble beach between the two cliffs, painted by Monet and Courbet.', None),
 'bayeux-h3': (None, None, '1944년 6월 6일 미군이 가장 큰 피해를 입은 상륙 해변으로, 기념 조형물이 서 있습니다.', 'The landing beach where US troops suffered the heaviest losses on 6 June 1944, with its memorial sculpture.', None),
 'bayeux-h4': (None, None, '오마하 해변 위 언덕에 9,000여 기의 하얀 십자가가 늘어선 미군 묘지입니다.', 'The US cemetery above Omaha Beach, with over 9,000 white crosses.', None),
 'bayeux-h5': (None, None, '미군 레인저 부대가 기어오른 절벽으로, 포탄 구덩이와 벙커가 그대로 남아 있습니다.', 'The cliff scaled by US Rangers, still pitted with shell craters and bunkers.', None),
 'mont-saint-michel-h3': (None, None, '마을을 감싼 요새 성벽 위 길로, 썰물 때 갯벌이 끝없이 펼쳐집니다.', 'The path along the fortified walls, with endless tidal flats at low tide.', None),
 'saint-malo-h1': (None, None, '구시가를 한 바퀴 두르는 성벽 위 길로, 바다와 섬들이 보입니다.', 'The walk around the old town on its ramparts, with views of the sea and islands.', None),
 'saint-malo-h2': (None, None, '썰물 때만 걸어서 건너는 작은 섬으로, 작가 샤토브리앙의 무덤이 있습니다.', 'A tidal island reached on foot only at low tide, with the tomb of the writer Chateaubriand.', None),
 'saint-malo-h3': (None, None, '구시가에서 이어지는 긴 모래 해변으로, 파도를 막는 나무 말뚝이 줄지어 서 있습니다.', 'The long sandy beach running from the old town, lined with wooden breakwater posts.', None),
 'saint-malo-h4': (None, None, '랑스강 위 언덕의 중세 성곽 마을로, 목조 가옥 골목이 이어집니다.', 'The medieval walled town above the Rance, with lanes of half-timbered houses.', None),
 'strasbourg-h1': (None, None, '142m 첨탑의 붉은 사암 고딕 대성당으로, 매일 12시 30분 천문시계 인형이 움직입니다.', 'The red-sandstone Gothic cathedral with its 142 m spire; the astronomical clock’s figures move daily at 12:30.', None),
 'strasbourg-h2': (None, None, '일강이 갈라지는 운하 가에 목조 가옥과 덮개 다리가 모인 옛 동네입니다.', 'The old quarter where the Ill divides into canals, with half-timbered houses and covered bridges.', None),
 'strasbourg-h3': (None, None, '유럽의회 본회의장으로, 방문객 센터와 본회의 견학이 있습니다.', 'The European Parliament’s plenary building, with a visitor centre and debate viewing.', None),
 'strasbourg-h4': ('클레베르 광장', 'Place Kléber', '시내 중심의 큰 광장으로, 겨울엔 큰 크리스마스 트리가 섭니다.', 'The city’s central square, home to a giant Christmas tree in winter.', None),
 'strasbourg-h5': ('바트로라마 유람선', 'Batorama boat tour', '일강을 따라 프티트 프랑스와 유럽 지구를 도는 유람선입니다.', 'A river boat around Petite France and the European Quarter on the Ill.', 'Batorama Strasbourg'),
}
ADD = {
 'paris': [
  (41, S('카타콤브', 'Catacombs of Paris', '600만 명의 유골을 쌓아 올린 지하 납골당 터널을 걷습니다.', 'Walk the underground ossuary tunnels stacked with the bones of six million people.', 'Catacombes de Paris', 60, 75, group=P_LAT, c='mon', b='req',
         n='온라인 시간 지정 예매가 필요하고 계단이 많습니다.|Timed online tickets are required, and there are many steps.')),
  (42, S('피카소 미술관', 'Musée Picasso', '마레의 17세기 저택에 피카소의 작품 5,000점을 모은 미술관입니다.', 'Some 5,000 works by Picasso in a 17th-century Marais mansion.', 'Musée national Picasso-Paris', 90, 120, group=P_MAR, c='mon')),
  (43, S('카르나발레 박물관', 'Musée Carnavalet', '선사 시대부터 오늘날까지 파리의 역사를 보여 주는 무료 박물관입니다.', 'A free museum of Paris’s history from prehistory to today.', 'Musée Carnavalet', 60, 90, group=P_MAR, c='mon')),
  (44, S('생마르탱 운하', 'Canal Saint-Martin', '철제 보도교와 갑문이 이어지는 운하 가로, 카페와 상점이 많습니다.', 'The canal of iron footbridges and locks, lined with cafés and shops.', 'Canal Saint-Martin', 45, 60, group=P_MORE)),
  (45, S('루이 비통 재단', 'Fondation Louis Vuitton', '프랭크 게리가 설계한 유리 돛 모양 미술관으로, 불로뉴 숲에 있습니다.', 'Frank Gehry’s glass-sailed art museum in the Bois de Boulogne.', 'Fondation Louis Vuitton', 90, 120, group=P_MORE, c='tue', b='rec')),
  (46, S('클뤼니 중세 박물관', 'Musée de Cluny', '중세 수도원장 저택과 로마 목욕탕 터에 ‘귀부인과 일각수’ 태피스트리를 전시합니다.', 'The Lady and the Unicorn tapestries in a medieval abbots’ mansion over Roman baths.', 'Musée de Cluny', 60, 90, group=P_LAT, c='mon')),
 ],
 'reims': [
  (6, S('항복 박물관', 'Museum of the Surrender', '1945년 5월 7일 독일이 항복 문서에 서명한 연합군 사령부 방입니다.', 'The Allied HQ room where Germany signed its surrender on 7 May 1945.', 'Musée de la Reddition Reims', 45, 60, c='tue')),
 ],
 'rouen': [
  (5, S('생마클루 납골당 안뜰', 'Aître Saint-Maclou', '흑사병 시대 해골과 뼈 조각으로 꾸민 목조 회랑 안뜰입니다.', 'A half-timbered courtyard carved with skulls and bones from the plague era.', 'Aître Saint-Maclou', 20, 30)),
  (6, S('루앙 미술관', 'Musée des Beaux-Arts de Rouen', '모네의 ‘루앙 대성당’과 카라바조 등 지방 최대급 회화 컬렉션을 무료로 봅니다.', 'One of France’s finest regional collections, free—Monet’s Rouen Cathedral, Caravaggio and more.', 'Musée des Beaux-Arts de Rouen', 90, 120, c='tue')),
 ],
 'honfleur': [
  (5, S('크리스티앙 드루앵 칼바도스 증류소', 'Christian Drouin Calvados', '사과 브랜디 칼바도스를 만드는 가족 증류소로, 저장고 견학과 시음을 합니다.', 'A family distillery of Calvados apple brandy, with cellar visits and tastings.', 'Calvados Christian Drouin', 60, 90, group=DAY,
        n='옹플뢰르에서 차로 약 20분입니다.|About 20 min by car from Honfleur.')),
 ],
 'etretat': [
  (5, S('에트르타 정원', 'Jardins d’Étretat', '아몽 절벽 위의 현대 조각 정원으로, 바다와 아발 절벽이 내려다보입니다.', 'A contemporary sculpture garden on the Amont cliff, overlooking the sea and the Aval cliff.', 'Les Jardins d\'Étretat', 45, 60)),
 ],
 'bayeux': [
  (6, S('아로망슈 인공 항구', 'Arromanches Mulberry harbour', '상륙 작전 때 만든 인공 항구의 콘크리트 잔해가 바다에 남은 해변 마을입니다.', 'The seaside village where concrete remains of the D-Day artificial harbour still sit offshore.', 'Arromanches-les-Bains', 90, 120, group=DAY,
        n='바이외에서 버스로 약 30분입니다.|About 30 min by bus from Bayeux.')),
 ],
 'saint-malo': [
  (5, S('캉칼 굴 시장', 'Cancale oyster market', '바닷가 노점에서 막 깐 굴을 사서 방파제에 앉아 먹는 굴 마을입니다.', 'The oyster village where you buy freshly opened oysters at seafront stalls and eat them on the sea wall.', 'Marché aux huîtres Cancale', 90, 120, group=DAY,
        n='생말로에서 버스로 약 30분입니다.|About 30 min by bus from Saint-Malo.')),
 ],
 'strasbourg': [
  (7, S('로앙 궁전', 'Palais Rohan', '대성당 옆 주교 궁전으로, 장식 미술·고고학·미술 박물관 세 곳이 있습니다.', 'The bishops’ palace beside the cathedral, housing decorative-arts, archaeology and fine-arts museums.', 'Palais Rohan Strasbourg', 90, 120, c='tue')),
  (8, S('보방 댐', 'Barrage Vauban', '17세기 방어용 댐으로, 옥상 테라스에서 프티트 프랑스의 덮개 다리가 내려다보입니다.', 'The 17th-century defensive dam—its rooftop terrace overlooks Petite France’s covered bridges.', 'Barrage Vauban', 15, 20)),
 ],
}
P_AFTER = {41: 35, 46: 31, 43: 29, 42: 29, 44: 39, 45: 38}
IT = [
 ("      ['개선문에서 몽마르트르|Arc de Triomphe to Montmartre', 6, 15, 17, 21, 4, 36],\n    ],",
  "      ['개선문에서 몽마르트르|Arc de Triomphe to Montmartre', 6, 15, 17, 21, 4, 36],\n      ['마레와 라탱 지구|Le Marais & the Latin Quarter', 29, 43, 42, 28, 46, 31, 32, 41],\n    ],"),
 ("  strasbourg: [1, 4, 2, 5, 3],", "  strasbourg: [1, 7, 4, 2, 8, 5, 3],"),
 ("  reims: { days: [['', 1, 4, 2]], trips: [['에페르네|Épernay', 5]] },", "  reims: { days: [['', 1, 3, 6, 4, 2]], trips: [['에페르네|Épernay', 5]] },"),
 ("  rouen: [3, 2, 1, 4],", "  rouen: [3, 2, 1, 5, 4, 6],"),
 ("  honfleur: [1, 2, 3, 4],", "  honfleur: { days: [['', 1, 2, 3, 4]], trips: [['칼바도스 증류소|Calvados distillery', 5]] },"),
 ("  etretat: [4, 1, 2, 3],", "  etretat: [4, 1, 2, 3, 5],"),
 ("  bayeux: { days: [['', 2]], trips: [['노르망디 상륙 해변|D-Day beaches', 4, 3, 5]] },",
  "  bayeux: { days: [['', 2]], trips: [['노르망디 상륙 해변|D-Day beaches', 6, 4, 3, 5]] },"),
 ("  'saint-malo': { days: [['', 1, 3, 2]], trips: [['디낭|Dinan', 4]] },", "  'saint-malo': { days: [['', 1, 3, 2]], trips: [['디낭|Dinan', 4], ['캉칼|Cancale', 5]] },"),
]
VISIT = {
 'chartres-h2': "  'chartres-h2': v(30, 45, { n: '대략 3월 말~10월에 엽니다.|Open roughly late March to October.' }),",
 'strasbourg-h5': "  'strasbourg-h5': v(70, 75, { b: 'rec', s: 'https://www.batorama.com/en/', n: '성수기와 12월엔 표가 일찍 매진되니 예매하는 편이 좋습니다.|Book ahead in high season and December, when boats sell out.' }),",
 'paris-h8': None,
}


def main():
    c = rd('cities.ts')
    for hid, (ko, en, dko, den, q) in REWRITE.items():
        i = c.index(f'id: "{hid}"')
        j = c.index('\n      }', i)
        blk = c[i:j]
        if ko:
            blk = re.sub(r'name: \{[^\n]*\}', f'name: {{ ko: "{ko}", en: "{en}" }}', blk)
        blk = re.sub(r'description: \{[^\n]*\}', f'description: {{ ko: "{dko}", en: "{den}" }}', blk)
        if q:
            blk = re.sub(r'query=[^"]*"', 'query=' + urllib.parse.quote(q) + '"', blk)
        c = c[:i] + blk + c[j:]
    old = list(blocks(c, 'paris'))
    c = add_sights(c, 'paris', ADD['paris'], 'visit-fr.ts')
    by = blocks(c, 'paris')
    order = []
    for n in old:
        order.append(n)
        order += [k for k, after in P_AFTER.items() if after == n]
    assert sorted(order) == sorted(by), order
    c = reorder(c, 'paris', [(n, DAY if read_group(by[n]) == OLD_NEAR else read_group(by[n])) for n in order])
    for cid, items in ADD.items():
        if cid != 'paris':
            c = add_sights(c, cid, items, 'visit-fr.ts')
    it = rd('itinerary-fr.ts')
    for a, b in IT:
        assert it.count(a) == 1, a[:60]
        it = it.replace(a, b)
    wr('itinerary-fr.ts', it)
    for cid in [k for k in ADD if k != 'paris']:
        by = blocks(c, cid)
        m = re.search(rf"^  '?{cid}'?: (.*?)(?=^  [a-z'/])", it, re.M | re.S)
        trips = {int(x) for t in re.findall(r"trips: \[(.*)\]", m.group(1), re.S) for x in re.findall(r", (\d+)", t)}
        c = reorder(c, cid, [(n, DAY if (n in trips or read_group(by[n]) == OLD_NEAR) else read_group(by[n])) for n in itinerary_order(it, cid, set(by))])
    c = reorder(c, 'colmar', [(1, None), (3, None), (4, None), (2, None), (5, VILL), (6, VILL), (7, DAY)])
    wr('cities.ts', c)
    v = rd('visit-fr.ts')
    for hid, line in VISIT.items():
        if line:
            v, k = re.subn(rf"^  '{hid}': v\(.*\),$", line, v, flags=re.M)
            assert k == 1, hid
    wr('visit-fr.ts', v)


if __name__ == '__main__':
    main()
