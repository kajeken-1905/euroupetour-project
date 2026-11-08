#!/usr/bin/env python3
"""Spain step 1 (all 24 cities), 2026-11-08.
Fixes: ronda-h4 was named '돈 보스코 하우스' for Casa del Rey Moro; bilbao-h3 '도고나 광장' for Plaza Nueva, h4 '아레나스 다리'
→ Vizcaya Bridge, h5 '리비아 강변'; san-sebastian-h4 '페우스 섬' for Santa Clara; salamanca-h4 '톤메스 강'; santiago-h3 name;
cordoba-h5 was the May patio festival (not a place) → Palacio de Viana; montserrat-h4 Moreneta duplicated the abbey →
Santa Cova path. Thin descriptions rewritten. New sights incl. Reina Sofía, Thyssen, Sant Pau, Mirador de San Nicolás,
Medina Azahara, Caminito del Rey, and themed San Ginés chocolate, Museu de la Xocolata, Codorníu cava, Jerez sherry,
Getaria txakoli and Consuegra windmills (Manchego). Also reorders Spain's region groups and Andalusia (user asked to
review city order in every country). Run once."""
import re
import urllib.parse
from add_daytrip_places import rd, wr
from sight_order import add_sights, blocks, itinerary_order, read_group, reorder
from review_sk import S

DAY = ('근교 당일치기', 'Day trip')
OLD_NEAR = ('근교', 'Nearby')
M_OLD = ('합스부르크 마드리드 (구시가)', 'Habsburg Madrid (old town)')
M_ART = ('예술의 거리 · 대로', 'Art Walk & Boulevards')
M_MORE = ('그 외', 'Further afield')
B_OLD = ('고딕 지구 · 엘 본 · 항구', 'Gothic Quarter, El Born & the Port')
B_GAU = ('가우디 · 모더니즘', 'Gaudí & Modernisme')
B_MORE = ('그 외', 'Further afield')
S_CAT = ('대성당 지구 (산타 크루스)', 'The cathedral quarter (Santa Cruz)')
G_ALB = ('알바이신 · 다로강 · 사크로몬테', 'Albaicín, the Darro & Sacromonte')

# (name ko or None, name en or None, desc ko, desc en, new maps query or None)
REWRITE = {
 'madrid-h4': (None, None, '붉은 4층 건물이 사방을 둘러싼 17세기 광장으로, 아치 회랑 아래 카페와 오징어 샌드위치 가게가 많습니다.', 'The 17th-century square enclosed by red four-storey buildings, with cafés and calamari-sandwich bars under its arcades.', None),
 'madrid-h3': (None, None, '방이 3,000개가 넘는 서유럽 최대급 왕궁으로, 왕좌의 방과 왕실 무기고를 봅니다. 공식 행사 날엔 문을 닫습니다.', 'One of Western Europe’s largest royal palaces, with over 3,000 rooms—see the Throne Room and Royal Armoury. Closes for state events.', None),
 'madrid-h6': (None, None, '왕궁 맞은편에 1993년에야 봉헌된 마드리드 대성당으로, 네오고딕 내부에 현대 색채의 천장이 있습니다.', 'Madrid’s cathedral opposite the palace, consecrated only in 1993, with a neo-Gothic interior and a colourful modern ceiling.', None),
 'madrid-h1': (None, None, '벨라스케스의 ‘시녀들’, 고야의 ‘1808년 5월 3일’, 보스의 ‘쾌락의 정원’이 있는 세계 3대 미술관 가운데 하나입니다.', 'One of the world’s great art museums—Velázquez’s Las Meninas, Goya’s Third of May 1808 and Bosch’s Garden of Earthly Delights.', None),
 'madrid-h2': (None, None, '옛 왕실 정원이던 큰 공원으로, 호수에서 보트를 타고 유리 궁전을 봅니다. 프라도와 함께 세계유산입니다.', 'The former royal park—row on the lake and visit the Crystal Palace; a World Heritage site with the Prado.', None),
 'madrid-h14': (None, None, '1892년 철골 지붕의 옛 역사 안에 열대 정원을 꾸민 마드리드 중앙역입니다. 역사 리모델링 공사가 진행 중입니다.', 'Madrid’s main station, its 1892 iron-roofed hall planted as a tropical garden; the old hall is being renovated.', None),
 'madrid-h11': (None, None, '1916년 철골 시장을 고친 미식 시장으로, 하몬·굴·타파스를 서서 맛봅니다.', 'A 1916 iron market turned food hall—stand and graze on jamón, oysters and tapas.', None),
 'madrid-h9': (None, None, '아스완 댐 공사로 물에 잠길 뻔한 기원전 2세기 이집트 신전을 옮겨 왔습니다. 해 질 녘 왕궁 쪽 전망이 좋습니다.', 'A 2nd-century BC Egyptian temple saved from the Aswan Dam floods and rebuilt here; lovely at sunset with palace views.', None),
 'segovia-h1': (None, None, '2세기 초 모르타르 없이 화강암을 쌓아 올린 로마 수도교로, 아치 167개가 최고 28m 높이로 도심을 가로지릅니다.', 'The early-2nd-century Roman aqueduct of mortarless granite, its 167 arches up to 28 m high striding across the town.', None),
 'segovia-h3': (None, None, '16세기에 지은 스페인 마지막 고딕 대성당으로, 우아한 모습에 ‘대성당의 귀부인’이라 불립니다.', 'Spain’s last great Gothic cathedral, built in the 16th century and nicknamed the “Lady of Cathedrals”.', None),
 'segovia-h2': (None, None, '두 강이 만나는 바위 끝에 선 뱃머리 모양 성으로, 후안 2세 탑에 오르면 평원과 과다라마 산맥이 보입니다.', 'The ship’s-prow castle on a rock where two rivers meet—climb the Tower of John II for views to the Guadarrama mountains.', None),
 'segovia-h4': (None, None, '15세기 말 추방 전까지 유대인이 살던 골목으로, 옛 회당 자리와 유대인 묘지가 남아 있습니다.', 'The lanes where Segovia’s Jews lived until the 1492 expulsion, with a former synagogue and the old Jewish cemetery.', None),
 'salamanca-h1': (None, None, '18세기 추리게라 양식 건물이 사방을 감싼 광장으로, 밤 조명이 특히 아름답습니다.', 'The 18th-century Churrigueresque square enclosed on all sides, especially beautiful lit up at night.', None),
 'salamanca-h2': (None, None, '1218년 세운 스페인에서 가장 오래된 대학으로, 정문 조각 속 개구리를 찾으면 행운이 온다고 합니다.', 'Spain’s oldest university, founded in 1218—find the frog hidden in the carved façade for luck.', None),
 'salamanca-h3': (None, None, '12세기 로마네스크 옛 대성당과 16세기 고딕 새 대성당이 붙어 있어 한 번에 보고, 탑 위 회랑에 오릅니다.', 'The 12th-century Romanesque Old Cathedral joined to the 16th-century Gothic New one—see both and climb to the tower galleries.', None),
 'salamanca-h4': (None, None, '토르메스강을 건너는 로마 시대 다리로, 강 건너에서 대성당이 서 있는 구시가 전경이 보입니다.', 'The Roman bridge over the Tormes, with the classic view back to the cathedral skyline.', None),
 'salamanca-h5': (None, None, '외벽에 조개 장식 300여 개를 붙인 15세기 저택으로, 지금은 도서관입니다.', 'A 15th-century mansion studded with some 300 scallop shells, now a public library.', None),
 'toledo-h1': (None, None, '13세기부터 짓기 시작한 스페인 고딕 대성당으로, 엘 그레코의 그림과 바로크 제단 ‘트란스파렌테’가 있습니다.', 'The great Gothic cathedral begun in the 13th century, with El Greco paintings and the Baroque Transparente altar.', None),
 'toledo-h2': (None, None, '도시 꼭대기의 네모난 요새로, 지금은 스페인 군사 박물관입니다.', 'The square fortress crowning the city, now Spain’s Army Museum.', None),
 'toledo-h3': (None, None, '엘 그레코의 걸작 ‘오르가스 백작의 매장’이 걸린 교회입니다.', 'The church that holds El Greco’s masterpiece, The Burial of the Count of Orgaz.', None),
 'toledo-h4': (None, None, '가톨릭 공동왕이 세운 15세기 수도원으로, 화려한 이사벨 양식 회랑이 있습니다.', 'The 15th-century monastery founded by the Catholic Monarchs, with a lavish Isabelline cloister.', None),
 'toledo-h5': (None, None, '타호강 건너 순환 도로의 전망대로, 강에 둘러싸인 톨레도 전경을 봅니다. 해 질 녘이 좋습니다.', 'Viewpoints on the road across the Tagus, looking back at the river-wrapped city—best at sunset.', None),
 'barcelona-h1': (None, None, '1882년에 시작해 아직 짓고 있는 가우디의 성당으로, 숲처럼 뻗은 기둥과 스테인드글라스 빛이 압도적입니다.', 'Gaudí’s basilica, under construction since 1882—its forest of columns and stained-glass light are overwhelming.', None),
 'barcelona-h2': (None, None, '가우디가 설계한 언덕 위 공원으로, 모자이크 도마뱀과 구불구불한 벤치 너머로 시내가 보입니다.', 'Gaudí’s hillside park—the mosaic dragon and serpentine bench look out over the city.', None),
 'barcelona-h3': (None, None, '로마 성벽 안쪽에 생긴 중세 골목 미로로, 광장과 고딕 성당이 숨어 있습니다.', 'The medieval maze within the Roman walls, hiding squares and Gothic churches.', None),
 'barcelona-h4': (None, None, '카탈루냐 광장에서 항구까지 1.2km 가로수 길로, 소매치기가 많으니 주의하세요.', 'The 1.2 km tree-lined promenade from Plaça de Catalunya to the port—watch for pickpockets.', None),
 'barcelona-h5': (None, None, '옛 어부 마을 앞 도심 해변으로, 해변 산책로를 따라 해산물 식당이 이어집니다.', 'The city beach in front of the old fishermen’s quarter, with seafood restaurants along the promenade.', None),
 'barcelona-h6': (None, None, '용의 등뼈 같은 지붕과 뼈 모양 발코니의 가우디 저택으로, 바다 속 같은 내부를 봅니다.', 'Gaudí’s house with a dragon’s-back roof and bone-like balconies, its interior like the sea floor.', None),
 'barcelona-h7': (None, None, '물결치는 돌 외벽의 가우디 아파트로, 굴뚝 병사들이 선 옥상이 하이라이트입니다.', 'Gaudí’s apartment block with a rippling stone façade—the rooftop of warrior chimneys is the highlight.', None),
 'barcelona-h8': (None, None, '항구 위 언덕으로, 카탈루냐 미술관, 미로 미술관, 성채, 밤의 마법 분수 쇼가 모여 있습니다.', 'The hill above the port with the National Art Museum of Catalonia, Miró Foundation, castle and evening Magic Fountain.', None),
 'barcelona-h10': (None, None, '람블라스 옆 지붕 덮인 시장으로, 하몬·과일 주스·카운터 바의 해산물을 맛봅니다. 일요일은 휴무입니다.', 'The covered market off La Rambla—jamón, fruit juices and counter-bar seafood; closed Sundays.', None),
 'barcelona-h12': (None, None, '1888년 만국박람회 정문으로 지은 붉은 벽돌 개선문으로, 시우타데야 공원까지 산책로가 이어집니다.', 'The red-brick arch built as the gateway to the 1888 World Fair, leading down a promenade to Ciutadella Park.', None),
 'barcelona-h11': (None, None, 'FC 바르셀로나의 홈구장으로, 2026년 현재 증축 공사 중이라 투어 동선이 바뀔 수 있습니다.', 'FC Barcelona’s stadium—being rebuilt as of 2026, so the tour route may change.', None),
 'montserrat-h1': (None, None, '해발 약 720m 바위산 중턱의 베네딕토 수도원으로, 검은 성모상 ‘라 모레네타’를 모시고 소년 합창단이 노래합니다.', 'The Benedictine abbey high on the mountain, home of the Black Madonna “La Moreneta” and its boys’ choir.', None),
 'montserrat-h4': ('산타 코바 길', 'Santa Cova path', '성모상이 발견됐다는 동굴 예배당까지 절벽을 따라 걷는 순례길로, 길가에 모더니즘 조각이 서 있습니다.', 'The cliffside pilgrim path to the cave chapel where the Madonna was said to be found, lined with Modernista sculptures.', 'Santa Cova Montserrat'),
 'girona-h1': (None, None, '90여 개 계단 위에 선 대성당으로, 고딕 신랑 폭이 세계에서 가장 넓다고 합니다. ‘왕좌의 게임’ 촬영지입니다.', 'The cathedral atop some 90 steps, said to have the widest Gothic nave in the world—a Game of Thrones location.', None),
 'girona-h2': (None, None, '좁은 돌계단 골목이 얽힌 중세 유대인 지구로, 유대 역사 박물관이 있습니다.', 'The medieval Jewish quarter of narrow stepped lanes, with the Museum of Jewish History.', None),
 'girona-h3': (None, None, '구시가를 감싼 중세 성벽 위를 걷는 길로, 탑에서 대성당과 지붕들이 내려다보입니다.', 'A walk along the medieval walls, with towers overlooking the cathedral and rooftops.', None),
 'girona-h4': (None, None, '오냐르강을 따라 노랑·주황 집들이 물에 비치는 지로나 대표 풍경으로, 에펠 다리에서 잘 보입니다.', 'Girona’s signature view of yellow and orange houses reflected in the Onyar, best from the Eiffel bridge.', None),
 'girona-h5': (None, None, '12세기에 이슬람 목욕탕을 본떠 지은 공중목욕탕으로, 기둥 위 팔각 천장이 있습니다.', 'A 12th-century public bath modelled on Islamic baths, with an octagonal lantern on slender columns.', None),
 'zaragoza-h1': (None, None, '에브로강 가에 탑 4개와 타일 돔이 선 바로크 성당으로, 고야의 천장화가 있고 탑에 엘리베이터로 오릅니다.', 'The Baroque basilica on the Ebro with four towers and tiled domes, frescoes by Goya and a lift up one tower.', None),
 'zaragoza-h2': (None, None, '11세기 이슬람 왕국의 궁전으로, 겹겹이 얽힌 아치와 이후 가톨릭 왕의 천장이 함께 남아 있습니다.', 'The 11th-century palace of the Taifa kings, with interlaced arches and later Catholic Monarchs’ ceilings.', None),
 'zaragoza-h3': (None, None, '로마네스크부터 바로크까지 섞인 대성당으로, 무데하르 벽면과 태피스트리 박물관이 있습니다.', 'A cathedral blending Romanesque to Baroque, with a Mudéjar wall and a tapestry museum.', None),
 'zaragoza-h4': (None, None, '필라르 성당과 대성당, 시청 사이로 길게 뻗은 광장입니다.', 'The long square stretching between the basilica, the cathedral and the town hall.', None),
 'valencia-h1': (None, None, '투리아 옛 강바닥에 칼라트라바가 설계한 하얀 건물들로, 과학관·오페라 극장·유럽 최대급 수족관 오세아노그라픽이 있습니다.', 'Calatrava’s white buildings in the old Turia riverbed—science museum, opera house and Oceanogràfic, one of Europe’s largest aquariums.', None),
 'valencia-h2': (None, None, '모더니즘 철골과 돔 아래 가게 1,000여 곳이 모인 유럽 최대급 신선 시장입니다. 일요일은 휴무입니다.', 'One of Europe’s largest fresh markets, with about 1,000 stalls under a Modernista iron dome; closed Sundays.', None),
 'valencia-h3': ('발렌시아 대성당·미겔레테', 'Valencia Cathedral & Miguelete', '‘성배’로 전해지는 잔을 모신 대성당으로, 팔각 종탑 미겔레테에 오르면 시내가 보입니다.', 'The cathedral holding a chalice venerated as the Holy Grail; climb the octagonal Miguelete tower for city views.', None),
 'valencia-h4': (None, None, '나선 기둥이 야자수처럼 천장으로 뻗는 15세기 고딕 실크 거래소로, 세계유산입니다.', 'The 15th-century Gothic silk exchange whose twisted columns rise like palms—a World Heritage site.', None),
 'valencia-h5': (None, None, '시내에서 트램으로 가는 넓은 모래 해변으로, 산책로를 따라 파에야 식당이 줄지어 있습니다.', 'The broad sandy city beach reached by tram, with paella restaurants along the promenade.', None),
 'palma-h4': (None, None, '14세기에 지은 보기 드문 원형 성으로, 성벽 위에서 팔마만이 한눈에 보입니다.', 'A rare 14th-century circular castle, with views over the Bay of Palma from its walls.', None),
 'seville-h1': (None, None, '무데하르 양식 방과 넓은 정원이 있는 왕궁으로, 지금도 왕실이 씁니다. ‘왕좌의 게임’ 촬영지입니다.', 'The royal palace of Mudéjar halls and vast gardens, still used by the royal family—a Game of Thrones location.', None),
 'seville-h2': (None, None, '세계 최대급 고딕 대성당으로, 콜럼버스의 묘가 있습니다.', 'One of the world’s largest Gothic cathedrals, holding Columbus’s tomb.', None),
 'seville-h4': (None, None, '과달키비르강 건너 동네로, 플라멩코 바와 타일 공방, 시장이 있습니다.', 'The neighbourhood across the Guadalquivir, home to flamenco bars, tile workshops and a market.', None),
 'cordoba-h1': (None, None, '붉은·흰 줄무늬 아치 800여 개가 숲처럼 늘어선 이슬람 사원 한가운데 르네상스 성당이 들어선 건축입니다.', 'A forest of some 800 red-and-white striped arches, with a Renaissance cathedral built into the heart of the mosque.', None),
 'cordoba-h2': (None, None, '하얀 벽에 꽃 화분이 걸린 옛 유대인 지구로, 중세 회당과 마이모니데스 동상이 있습니다.', 'The old Jewish quarter of whitewashed lanes and flowerpots, with a medieval synagogue and a statue of Maimonides.', None),
 'cordoba-h3': (None, None, '가톨릭 공동왕이 머문 요새 궁전으로, 계단식 연못과 분수가 있는 정원이 하이라이트입니다.', 'The fortress-palace of the Catholic Monarchs, best for its terraced ponds and fountains.', None),
 'cordoba-h4': (None, None, '과달키비르강을 건너는 16개 아치의 다리로, 메스키타가 보입니다. ‘왕좌의 게임’ 촬영지입니다.', 'The 16-arch bridge over the Guadalquivir with Mezquita views—a Game of Thrones location.', None),
 'cordoba-h5': ('비아나 궁전', 'Palacio de Viana', '꽃으로 꾸민 안뜰 12개가 있는 귀족 저택으로, 5월 파티오 축제가 아니어도 코르도바의 안뜰을 볼 수 있습니다.', 'An aristocratic mansion with twelve flower-filled patios—see Córdoba’s courtyards outside the May festival.', 'Palacio de Viana Córdoba'),
 'granada-h1': (None, None, '나스르 왕조 궁전의 섬세한 회벽 조각과 사자의 안뜰을 봅니다. 나스르 궁전은 시간 지정 예매가 필수입니다.', 'The Nasrid Palaces’ delicate stucco and the Court of the Lions—timed tickets for the palaces are essential.', None),
 'granada-h2': (None, None, '좁은 비탈 골목의 옛 이슬람 지구로, 알함브라가 정면으로 보이는 전망대가 많습니다.', 'The old Moorish quarter of steep lanes, with viewpoints facing the Alhambra.', None),
 'granada-h3': (None, None, '물길과 꽃이 이어지는 왕의 여름 별궁 정원입니다.', 'The kings’ summer palace and gardens of water channels and flowers.', None),
 'granada-h4': (None, None, '이슬람 사원 터에 지은 르네상스 대성당으로, 하얀 내부가 밝습니다.', 'The Renaissance cathedral built on the site of the mosque, with a bright white interior.', None),
 'granada-h5': (None, None, '언덕 동굴집에서 집시 플라멩코 공연을 보는 동네입니다.', 'The hillside of cave houses where gitano flamenco is performed.', None),
 'malaga-h1': (None, None, '11세기 이슬람 요새 궁전으로, 겹겹의 문과 정원을 지나 위로 오릅니다.', 'The 11th-century Moorish fortress-palace, climbing through layered gates and gardens.', None),
 'malaga-h2': (None, None, '피카소가 태어난 도시의 미술관으로, 가족이 기증한 작품 200여 점을 봅니다.', 'The museum in Picasso’s birthplace, with some 200 works donated by his family.', None),
 'malaga-h3': (None, None, '탑 하나가 끝내 완성되지 않아 ‘외팔이 여인’이라 불리는 대성당입니다.', 'The cathedral nicknamed “La Manquita” (the one-armed lady) because one tower was never finished.', None),
 'malaga-h4': (None, None, '야자수와 퐁피두 센터의 유리 큐브가 있는 항구 산책로입니다.', 'The harbour promenade with palms and the Centre Pompidou’s glass cube.', None),
 'malaga-h5': (None, None, '알카사바 위 언덕의 성채로, 성벽 위에서 항구와 투우장이 내려다보입니다.', 'The castle on the hill above the Alcazaba—walk the walls for views over the port and bullring.', None),
 'ronda-h1': (None, None, '98m 깊이 협곡 위에 18세기에 놓은 다리로, 아래 전망로에서 올려다보는 모습이 압권입니다.', 'The 18th-century bridge over the 98 m-deep gorge—best seen from the paths below.', None),
 'ronda-h3': (None, None, '1785년 문을 연 스페인에서 손꼽히게 오래된 투우장으로, 투우 박물관이 있습니다.', 'Opened in 1785, one of Spain’s oldest bullrings, with a bullfighting museum.', None),
 'ronda-h4': ('무어 왕의 집', 'Casa del Rey Moro', '절벽 정원 아래로 바위 속 계단 ‘물의 광산’을 내려가 협곡 바닥 강가에 닿습니다.', 'Cliffside gardens and the “Water Mine”, a stairway carved through the rock down to the river at the gorge floor.', 'Casa del Rey Moro Ronda'),
 'ronda-h5': (None, None, '절벽 끝 공원의 전망 발코니로, 평원과 산이 펼쳐집니다.', 'The clifftop park whose balconies look out over the plains and mountains.', None),
 'nerja-h1': (None, None, '옛 성채 자리의 바다 위 전망 테라스로, 해안 절벽과 작은 만들이 보입니다.', 'The sea terrace on the site of an old fort, overlooking cliffs and coves.', None),
 'nerja-h2': (None, None, '1959년 발견된 거대한 종유 동굴로, 세계 최대급 석주와 선사 시대 벽화가 있습니다.', 'The vast cave discovered in 1959, with one of the world’s largest columns and prehistoric paintings.', None),
 'bilbao-h1': (None, None, '프랭크 게리의 티타늄 곡면 미술관으로, 앞마당의 꽃 강아지 ‘퍼피’와 거미 ‘마망’이 명물입니다.', 'Frank Gehry’s titanium-curved museum, with Puppy the flower dog and Maman the spider outside.', None),
 'bilbao-h2': (None, None, '‘일곱 거리’라 불리는 구시가로, 대성당과 핀초 바가 모여 있습니다.', 'The old town of the “Seven Streets”, with its cathedral and pintxo bars.', None),
 'bilbao-h3': ('누에바 광장', 'Plaza Nueva', '아치 회랑이 둘러싼 19세기 광장으로, 핀초 바가 줄지어 있고 일요일 아침엔 벼룩시장이 섭니다.', 'The arcaded 19th-century square lined with pintxo bars, with a Sunday-morning flea market.', None),
 'bilbao-h4': ('비스카야 다리', 'Vizcaya Bridge', '1893년 세운 세계 최초의 운반교로, 곤돌라가 강을 건너고 위쪽 보도를 걸을 수 있는 세계유산입니다.', 'The world’s first transporter bridge (1893)—a gondola carries people across, and you can walk the top deck; a World Heritage site.', 'Puente Bizkaia'),
 'bilbao-h5': ('빌바오 강변', 'Bilbao Ría waterfront', '구겐하임에서 구시가까지 강변 산책로로, 칼라트라바의 수비수리 다리 등 현대 건축을 지납니다.', 'The riverside walk from the Guggenheim to the old town, past Calatrava’s Zubizuri bridge and other modern architecture.', None),
 'san-sebastian-h1': (None, None, '조개껍데기 모양으로 굽은 시내 해변으로, 철제 난간 산책로를 따라 걷습니다.', 'The shell-shaped city beach with its famous white-railed promenade.', None),
 'san-sebastian-h2': (None, None, '구시가 바 카운터에 차려진 한입 요리 ‘핀초’를 바를 옮겨 다니며 맛봅니다.', 'Hop between old-town bars sampling pintxos, the Basque bites laid out on the counters.', None),
 'san-sebastian-h3': (None, None, '구시가 뒤 언덕의 성채와 예수상으로, 오르면 콘차만이 내려다보입니다.', 'The hill behind the old town with a castle and statue of Christ, overlooking La Concha bay.', None),
 'san-sebastian-h4': ('산타 클라라 섬', 'Santa Clara Island', '콘차만 한가운데의 작은 섬으로, 여름엔 배가 다녀 산책하고 수영합니다.', 'The islet in the middle of La Concha bay, reached by boat in summer for walks and swimming.', None),
 'san-sebastian-h5': (None, None, '콘차 해변 위 언덕의 19세기 왕실 별장으로, 잔디 정원에서 만이 보입니다.', 'The 19th-century royal summer house above La Concha, with lawns overlooking the bay.', None),
 'santiago-h1': (None, None, '사도 야고보의 무덤 위에 세운 순례의 종착지로, 영광의 문과 거대한 향로 보타푸메이로가 유명합니다.', 'The pilgrimage’s end over the tomb of St James, famous for the Portico of Glory and the giant Botafumeiro censer.', None),
 'santiago-h2': (None, None, '대성당 서쪽 파사드 앞 큰 광장으로, 순례자들이 도착해 바닥에 앉아 쉽니다.', 'The great square before the cathedral’s west front, where pilgrims arrive and rest on the stones.', None),
 'santiago-h3': ('오스탈 도스 레이스 카톨리코스', 'Hostal dos Reis Católicos', '1499년 가톨릭 공동왕이 세운 순례자 병원으로, 지금은 파라도르 호텔이며 안뜰 일부를 견학합니다.', 'The pilgrims’ hospital founded by the Catholic Monarchs in 1499, now a Parador hotel with visitable cloisters.', None),
 'santiago-h4': (None, None, '대성당 동쪽의 계단 광장으로, 성년에만 여는 ‘거룩한 문’이 있습니다.', 'The stepped square east of the cathedral, with the Holy Door opened only in Holy Years.', None),
 'santiago-h5': (None, None, '구시가 옆 언덕 공원으로, 산책로에서 대성당 탑이 가장 잘 보입니다.', 'The hilltop park beside the old town, with the best view of the cathedral towers.', None),
}

ADD = {
 'madrid': [
  (18, S('레이나 소피아 미술관', 'Museo Reina Sofía', '피카소의 ‘게르니카’와 달리·미로를 볼 수 있는 국립 현대 미술관입니다.', 'Spain’s national modern-art museum, home of Picasso’s Guernica plus Dalí and Miró.', 'Museo Reina Sofía', 120, 150, group=M_ART, c='tue',
         n='화요일 휴관입니다. 저녁 마지막 시간대는 무료입니다.|Closed Tuesdays; free in the last evening hours.')),
  (19, S('티센 보르네미사 미술관', 'Thyssen-Bornemisza Museum', '중세부터 팝아트까지 서양 미술사를 한 건물에서 훑는 개인 컬렉션 미술관입니다.', 'A private collection that runs through Western art from the Middle Ages to Pop Art in one building.', 'Museo Nacional Thyssen-Bornemisza', 90, 150, group=M_ART,
         n='월요일은 낮 동안만 무료로 상설전을 엽니다.|On Mondays the permanent collection opens free around midday only.')),
  (20, S('그란비아', 'Gran Vía', '20세기 초에 낸 대로로, 극장과 백화점, 고층 건물 옥상 테라스가 이어집니다.', 'The early-20th-century boulevard of theatres, department stores and rooftop terraces.', 'Gran Vía Madrid', 30, 60, group=M_ART)),
  (21, S('산히네스 초콜라테리아', 'Chocolatería San Ginés', '1894년부터 영업한 가게로, 진한 핫초코에 추로스를 찍어 먹습니다.', 'Serving since 1894—dunk churros into thick hot chocolate.', 'Chocolatería San Ginés', 20, 30, group=M_OLD,
         n='24시간에 가깝게 영업하지만 오후엔 줄이 깁니다.|Open almost round the clock, but expect a queue in the afternoon.')),
  (22, S('엘 라스트로 벼룩시장', 'El Rastro', '라 라티나 비탈길에 노점 1,000여 개가 서는 마드리드 최대 벼룩시장입니다.', 'Madrid’s biggest flea market, with around 1,000 stalls down the slopes of La Latina.', 'El Rastro Madrid', 60, 90, group=M_OLD,
         n='일요일과 공휴일 오전에만 열립니다. 소매치기를 조심하세요.|Sunday and holiday mornings only; mind your pockets.')),
  (23, S('소로야 미술관', 'Museo Sorolla', '빛의 화가 소로야가 살던 집과 정원에 그의 그림을 전시합니다.', 'The painter of light Joaquín Sorolla’s house and garden, hung with his work.', 'Museo Sorolla', 60, 75, group=M_MORE, c='mon')),
 ],
 'segovia': [
  (9, S('라 그랑하 왕궁', 'Royal Palace of La Granja', '펠리페 5세가 베르사유를 본떠 지은 여름 궁전으로, 정원 분수가 유명합니다.', 'Philip V’s Versailles-inspired summer palace, famous for its garden fountains.', 'Palacio Real de La Granja de San Ildefonso', 120, 180, group=DAY, c='mon',
        n='세고비아에서 버스로 약 20분입니다. 분수는 정해진 날에만 틉니다.|About 20 min by bus from Segovia; the fountains run only on set days.')),
 ],
 'salamanca': [
  (6, S('클레레시아 탑', 'Scala Coeli (La Clerecía)', '예수회 학교 바로크 성당의 탑에 올라 대성당과 시내를 내려다봅니다.', 'Climb the towers of the Jesuit Clerecía church for views over the cathedrals and city.', 'Scala Coeli Salamanca', 45, 60)),
  (7, S('카사 리스', 'Casa Lis', '스테인드글라스 외벽의 저택에 아르누보·아르데코 장식 미술을 전시합니다.', 'A stained-glass-fronted mansion showing Art Nouveau and Art Deco decorative arts.', 'Museo Casa Lis Salamanca', 60, 90)),
 ],
 'toledo': [
  (10, S('콘수에그라 풍차', 'Consuegra windmills', '돈키호테의 라만차 들판 언덕에 하얀 풍차 12개가 늘어선 마을로, 만체고 치즈의 고장입니다.', 'Twelve white windmills on a La Mancha ridge straight out of Don Quixote, in Manchego cheese country.', 'Molinos de Consuegra', 90, 150, group=DAY,
         n='톨레도에서 버스로 약 1시간이며, 차가 편합니다.|About 1 hour by bus from Toledo; easier by car.')),
 ],
 'barcelona': [
  (26, S('산트 파우 모더니즘 단지', 'Sant Pau Recinte Modernista', '도메네크 이 몬타네르가 지은 옛 병원 단지로, 타일 돔 건물들이 정원에 흩어진 세계유산입니다.', 'Domènech i Montaner’s former hospital complex of tiled pavilions in gardens—a World Heritage site.', 'Recinte Modernista de Sant Pau', 60, 90, group=B_GAU)),
  (27, S('초콜릿 박물관', 'Museu de la Xocolata', '초콜릿의 역사와 초콜릿으로 만든 조각을 보는 작은 박물관으로, 입장권이 초콜릿입니다.', 'A small museum of chocolate history and chocolate sculptures—your ticket is a chocolate bar.', 'Museu de la Xocolata Barcelona', 45, 60, group=B_OLD)),
  (28, S('카르멜 벙커', 'Bunkers del Carmel', '스페인 내전 때 대공포 진지였던 언덕으로, 바르셀로나 전경이 360도로 보입니다.', 'A Civil War anti-aircraft battery on a hilltop, with a 360° view of Barcelona.', 'Bunkers del Carmel', 45, 60, group=B_GAU,
         n='무료이며 밤에는 출입을 막습니다. 동네 주민을 위해 조용히 다녀오세요.|Free and closed at night; please keep the noise down for the neighbours.')),
  (29, S('티비다보', 'Tibidabo', '시내 뒤 가장 높은 산으로, 100년 넘은 놀이공원과 성당 위에서 시내와 바다가 보입니다.', 'The highest hill behind the city, with a century-old funfair and a basilica overlooking the city and sea.', 'Tibidabo', 120, 180, group=B_MORE)),
  (30, S('코도르니우 카바 셀러', 'Codorníu cava cellars', '스페인 스파클링 와인 카바의 본고장 산트 사두르니에서 모더니즘 셀러를 둘러보고 시음합니다.', 'Tour the Modernista cellars in Sant Sadurní, home of Spanish sparkling cava, and taste.', 'Codorníu Sant Sadurní d\'Anoia', 120, 150, group=DAY, b='req',
         n='바르셀로나에서 R4 근교 열차로 약 1시간입니다. 투어는 예약제입니다.|About 1 hour by R4 commuter train from Barcelona; tours by reservation.')),
 ],
 'montserrat': [],
 'girona': [
  (6, S('베살루', 'Besalú', '로마네스크 요새 다리가 강을 건너는 중세 마을로, 유대인 목욕탕 미크베가 남아 있습니다.', 'A medieval village entered over a fortified Romanesque bridge, with a surviving Jewish mikveh.', 'Besalú', 90, 120, group=DAY,
        n='지로나에서 버스로 약 40분입니다.|About 40 min by bus from Girona.')),
 ],
 'zaragoza': [
  (6, S('카이사르아우구스타 극장 박물관', 'Caesaraugusta Theatre Museum', '1세기 로마 극장 유적 위에 지은 박물관으로, 객석 위 통로를 걸으며 봅니다.', 'A museum over the 1st-century Roman theatre, viewed from walkways above the seating.', 'Museo del Teatro de Caesaraugusta', 45, 60, c='mon')),
 ],
 'valencia': [
  (6, S('투리아 정원', 'Turia Gardens', '홍수를 피해 옮긴 강의 옛 바닥을 9km 공원으로 바꿔, 자전거와 산책로가 예술과학도시까지 이어집니다.', 'The old bed of the diverted Turia turned into a 9 km park, with cycle paths running to the City of Arts and Sciences.', 'Jardín del Turia', 60, 120)),
  (7, S('세라노스 탑', 'Torres de Serranos', '14세기 성문 탑으로, 꼭대기에 오르면 구시가와 투리아 정원이 보입니다.', 'The 14th-century gate towers—climb them for views over the old town and Turia Gardens.', 'Torres de Serranos', 20, 30, c='mon')),
  (8, S('알부페라', 'L’Albufera', '논과 석호가 펼쳐진 파에야의 고향으로, 엘팔마르 마을에서 배를 타고 노을을 본 뒤 파에야를 먹습니다.', 'The lagoon and rice fields where paella was born—take a boat at El Palmar at sunset, then eat paella.', 'El Palmar Valencia', 180, 240, group=DAY,
        n='발렌시아에서 버스로 약 40분입니다.|About 40 min by bus from Valencia.')),
 ],
 'palma': [
  (7, S('발데모사', 'Valldemossa', '쇼팽과 조르주 상드가 겨울을 보낸 카르투시오 수도원이 있는 산골 마을입니다.', 'The mountain village of the Carthusian monastery where Chopin and George Sand spent a winter.', 'Valldemossa', 120, 180, group=DAY,
        n='팔마에서 버스로 약 30분입니다.|About 30 min by bus from Palma.')),
  (8, S('소예르 기차', 'Sóller train', '1912년부터 다니는 나무 객차 기차로 산을 넘어 오렌지 마을 소예르에 가고, 트램으로 항구까지 갑니다.', 'The wooden train running since 1912 over the mountains to orange-growing Sóller, then a tram to the port.', 'Ferrocarril de Sóller', 240, 360, group=DAY,
        n='편도 약 1시간이며 성수기엔 미리 표를 사세요.|About 1 hour each way; buy ahead in high season.')),
 ],
 'seville': [
  (11, S('필라토의 집', 'Casa de Pilatos', '무데하르와 르네상스가 섞인 귀족 저택으로, 타일로 덮인 안뜰이 아름답습니다.', 'An aristocratic palace mixing Mudéjar and Renaissance, with beautiful tiled patios.', 'Casa de Pilatos', 60, 75, group=S_CAT)),
  (12, S('산타 크루스 골목', 'Barrio de Santa Cruz', '알카사르 옆 옛 유대인 지구로, 오렌지 나무 광장과 좁은 하얀 골목이 이어집니다.', 'The old Jewish quarter beside the Alcázar, with orange-tree squares and narrow white lanes.', 'Barrio de Santa Cruz Sevilla', 45, 60, group=S_CAT)),
  (13, S('플라멩코 무용 박물관', 'Museo del Baile Flamenco', '플라멩코의 역사를 전시하고 저녁마다 공연을 엽니다.', 'A museum of flamenco history with shows every evening.', 'Museo del Baile Flamenco', 60, 90, group=S_CAT, b='rec')),
  (14, S('헤레스 셰리 와이너리', 'Jerez sherry bodegas', '셰리 와인의 고장 헤레스에서 곤살레스 비아스(티오 페페) 같은 보데가를 둘러보고 시음합니다.', 'Tour and taste at a sherry bodega such as González Byass (Tío Pepe) in Jerez, home of sherry.', 'Bodegas Tío Pepe Jerez', 120, 180, group=DAY, b='rec',
         n='세비야에서 기차로 약 1시간입니다.|About 1 hour by train from Seville.')),
 ],
 'cordoba': [
  (6, S('꽃길 골목', 'Calleja de las Flores', '꽃 화분이 걸린 좁은 골목 끝에 메스키타 종탑이 액자처럼 보입니다.', 'A narrow flower-pot lane framing the Mezquita’s bell tower at its end.', 'Calleja de las Flores Córdoba', 10, 15)),
  (7, S('메디나 아사아라', 'Medina Azahara', '10세기 칼리프가 세운 궁전 도시 유적으로, 세계유산입니다.', 'The ruins of the 10th-century caliphs’ palace city, a World Heritage site.', 'Medina Azahara', 120, 150, group=DAY, c='mon',
        n='시내에서 관광버스로 약 20분입니다.|About 20 min from town by tourist bus.')),
 ],
 'granada': [
  (13, S('산 니콜라스 전망대', 'Mirador de San Nicolás', '알바이신 꼭대기 교회 앞 광장으로, 시에라 네바다를 배경으로 한 알함브라가 정면으로 보입니다. 해 질 녘이 유명합니다.', 'The square by the church atop the Albaicín, facing the Alhambra with the Sierra Nevada behind—famous at sunset.', 'Mirador de San Nicolás', 20, 40, group=G_ALB)),
 ],
 'malaga': [
  (8, S('로마 극장', 'Roman Theatre', '알카사바 바로 아래에 남은 1세기 로마 극장으로, 무료로 둘러봅니다.', 'The 1st-century Roman theatre right below the Alcazaba, free to visit.', 'Teatro Romano de Málaga', 15, 20)),
  (9, S('아타라사나스 시장', 'Mercado de Atarazanas', '옛 조선소 문을 입구로 쓴 철골 시장으로, 스테인드글라스 아래에서 해산물을 맛봅니다.', 'An iron market behind an old shipyard gate, with seafood under a stained-glass window.', 'Mercado Central de Atarazanas', 30, 45, c='sun')),
  (10, S('카미니토 델 레이', 'Caminito del Rey', '협곡 절벽에 붙여 만든 길 약 8km를 걷는 트레킹으로, 100m 아래로 강이 흐릅니다.', 'A roughly 8 km walk on boardwalks pinned to gorge cliffs, with the river 100 m below.', 'Caminito del Rey', 240, 300, group=DAY, c='mon', b='req',
         n='시간 지정 예매가 필요하고 월요일은 닫습니다. 말라가에서 기차로 엘초로역까지 약 45분입니다.|Timed tickets required, closed Mondays; about 45 min by train from Málaga to El Chorro.')),
 ],
 'ronda': [
  (6, S('세테닐 데 라스 보데가스', 'Setenil de las Bodegas', '집들이 바위 처마 아래 파고들어 지어진 하얀 마을입니다.', 'The white village whose houses are built into overhanging rock.', 'Setenil de las Bodegas', 90, 120, group=DAY,
        n='버스가 적어 차가 편합니다(약 20분).|Few buses—easier by car (about 20 min).')),
 ],
 'bilbao': [
  (6, S('라 리베라 시장', 'Mercado de la Ribera', '강가의 1929년 아르데코 시장으로, 위층 핀초 바에서 먹고 마십니다.', 'The 1929 Art Deco riverside market, with a pintxo food hall upstairs.', 'Mercado de la Ribera Bilbao', 30, 60, c='sun')),
  (7, S('아르찬다 푸니쿨라', 'Artxanda Funicular', '1915년부터 다니는 푸니쿨라로 언덕에 올라 빌바오 시내와 구겐하임을 내려다봅니다.', 'The funicular running since 1915 up to a hilltop view over Bilbao and the Guggenheim.', 'Funicular de Artxanda', 45, 60)),
  (8, S('산 후안 데 가스텔루가체', 'San Juan de Gaztelugatxe', '돌다리와 241개 계단으로 이어진 바위섬 위의 작은 예배당으로, ‘왕좌의 게임’ 촬영지입니다.', 'A tiny hermitage on a rock islet reached by a stone causeway and 241 steps—a Game of Thrones location.', 'San Juan de Gaztelugatxe', 120, 180, group=DAY, b='req',
        n='성수기엔 무료 사전 예약이 필요합니다. 빌바오에서 버스로 약 1시간입니다.|Free advance booking needed in high season; about 1 hour by bus from Bilbao.')),
 ],
 'san-sebastian': [
  (6, S('이겔도 산', 'Monte Igueldo', '1912년 개통한 푸니쿨라로 올라 콘차만 전경을 보는 산으로, 옛 놀이공원이 있습니다.', 'Ride the 1912 funicular up for the classic view of La Concha bay, with a vintage funfair at the top.', 'Monte Igueldo', 60, 90)),
  (7, S('바람의 빗', 'Peine del Viento', '해안 바위에 박힌 칠리다의 철 조각으로, 파도가 치면 바닥 구멍에서 바닷물이 솟습니다.', 'Chillida’s iron sculptures embedded in the seaside rocks, where waves blast spray through blowholes.', 'Peine del Viento', 20, 30)),
  (8, S('게타리아', 'Getaria', '바스크 화이트 와인 차콜리 포도밭이 바다 언덕에 펼쳐진 어촌으로, 숯불 생선구이와 발렌시아가 박물관이 있습니다.', 'A fishing village amid seaside txakoli vineyards, known for grilled fish and the Balenciaga Museum.', 'Getaria', 180, 240, group=DAY,
        n='산세바스티안에서 버스로 약 30분입니다.|About 30 min by bus from San Sebastián.')),
 ],
 'santiago': [
  (6, S('아바스토스 시장', 'Mercado de Abastos', '돌로 지은 시장으로, 해산물을 사면 옆 식당에서 바로 요리해 줍니다.', 'The stone market where you can buy seafood and have it cooked at the stalls next door.', 'Mercado de Abastos Santiago de Compostela', 30, 60, c='sun')),
  (7, S('대성당 지붕 투어', 'Cathedral rooftops', '가이드와 함께 대성당 돌지붕 위를 걸으며 구시가를 내려다봅니다.', 'A guided walk over the cathedral’s stone roofs, looking down on the old town.', 'Cubiertas Catedral de Santiago', 60, 60, b='req')),
 ],
}

# big cities with district groups: new number -> existing number it follows
AFTER = {
 'madrid': {21: 5, 22: 6, 20: 8, 18: 1, 19: 18, 23: 12},
 'barcelona': {27: 13, 26: 1, 28: 2, 29: 11, 30: 25},
 'seville': {12: 1, 11: 12, 13: 11, 14: 10},
 'granada': {13: 2},
 'toledo': {10: 9},
 'segovia': {9: 2},
}

IT = [
 ("      ['구시가와 왕궁|Old town & Royal Palace', 5, 4, 11, 13, 3, 6, 10, 9],\n      ['프라도와 레티로|Prado & Retiro', 8, 7, 1, 2, 14],\n    ],",
  "      ['구시가와 왕궁|Old town & Royal Palace', 5, 21, 4, 11, 13, 3, 6, 10, 9],\n      ['그란비아와 프라도, 레티로|Gran Vía, Prado & Retiro', 20, 8, 7, 19, 1, 2],\n      ['레이나 소피아와 소로야|Reina Sofía & Sorolla', 14, 18, 23, 12],\n    ],"),
 ("  segovia: [1, 5, 6, 7, 3, 4, 8, 2],", "  segovia: { days: [['', 1, 5, 6, 7, 3, 4, 8, 2]], trips: [['라 그랑하|La Granja', 9]] },"),
 ("  salamanca: [1, 5, 2, 3, 4],", "  salamanca: [1, 5, 6, 2, 3, 7, 4],"),
 ("  toledo: [8, 2, 7, 1, 3, 4, 6, 5],", "  toledo: { days: [['', 8, 2, 7, 1, 3, 4, 6, 5]], trips: [['콘수에그라 풍차|Consuegra windmills', 10]] },"),
 ("  cuenca: [1, 2, 4, 3, 5, 6],", "  cuenca: { days: [['', 1, 2, 4, 3, 5]], trips: [['시우다드 엔칸타다|Ciudad Encantada', 6]] },"),
 ("      ['람블라스와 고딕 지구|La Rambla & Gothic Quarter', 9, 4, 10, 17, 15, 3, 13],\n      ['가우디|Gaudí', 6, 7, 1, 2],",
  "      ['람블라스와 고딕 지구|La Rambla & Gothic Quarter', 9, 4, 10, 17, 15, 3, 13, 27],\n      ['가우디|Gaudí', 6, 7, 1, 26, 2, 28],"),
 ("    trips: [['피게레스 달리 극장 박물관|Figueres Dalí Museum', 25]],",
  "    trips: [['피게레스 달리 극장 박물관|Figueres Dalí Museum', 25], ['카바 와이너리|Cava cellars', 30]],"),
 ("  girona: [4, 2, 1, 5, 3],", "  girona: { days: [['', 4, 2, 1, 5, 3]], trips: [['베살루|Besalú', 6]] },"),
 ("  tarragona: [1, 3, 4, 2, 5, 6],", "  tarragona: { days: [['', 1, 3, 4, 2, 5]], trips: [['악마의 다리|Devil’s Bridge', 6]] },"),
 ("  zaragoza: [2, 4, 1, 3, 5],", "  zaragoza: [2, 4, 1, 3, 6, 5],"),
 ("  valencia: [2, 4, 3, 1, 5],", "  valencia: { days: [['', 7, 3, 2, 4, 6, 1, 5]], trips: [['알부페라|L’Albufera', 8]] },"),
 ("  palma: [1, 3, 5, 2, 4, 6],", "  palma: { days: [['', 1, 3, 5, 2, 4, 6]], trips: [['발데모사|Valldemossa', 7], ['소예르 기차|Sóller train', 8]] },"),
 ("      ['대성당과 알카사르|Cathedral & Alcázar', 2, 6, 7, 1, 3],\n      ['시내와 트리아나|City centre & Triana', 5, 9, 8, 4],\n    ],",
  "      ['대성당과 알카사르|Cathedral & Alcázar', 2, 6, 7, 1, 12, 3],\n      ['시내와 트리아나|City centre & Triana', 11, 13, 5, 9, 8, 4],\n    ],\n    trips: [['헤레스 셰리 와이너리|Jerez sherry bodegas', 14]],"),
 ("  cordoba: [4, 1, 2, 3, 5],", "  cordoba: { days: [['', 4, 1, 6, 2, 3, 5]], trips: [['메디나 아사아라|Medina Azahara', 7]] },"),
 ("      ['시내와 알바이신|City centre & Albaicín', 4, 6, 10, 9, 8, 2, 5],",
  "      ['시내와 알바이신|City centre & Albaicín', 4, 6, 10, 9, 8, 2, 13, 5],"),
 ("  malaga: { days: [['', 3, 2, 1, 5, 4]], trips: [['미하스|Mijas', 6], ['프리힐리아나|Frigiliana', 7]] },",
  "  malaga: { days: [['', 3, 2, 8, 1, 5, 9, 4]], trips: [['미하스|Mijas', 6], ['프리힐리아나|Frigiliana', 7], ['카미니토 델 레이|Caminito del Rey', 10]] },"),
 ("  ronda: [5, 3, 1, 2, 4],", "  ronda: { days: [['', 5, 3, 1, 2, 4]], trips: [['세테닐 데 라스 보데가스|Setenil de las Bodegas', 6]] },"),
 ("  bilbao: { days: [['', 1, 5, 3, 2]], trips: [['비스카야 다리|Vizcaya Bridge', 4]] },",
  "  bilbao: { days: [['', 1, 5, 6, 2, 3, 7]], trips: [['비스카야 다리|Vizcaya Bridge', 4], ['산 후안 데 가스텔루가체|San Juan de Gaztelugatxe', 8]] },"),
 ("  'san-sebastian': [5, 1, 3, 2],", "  'san-sebastian': { days: [['', 5, 7, 6, 1, 3, 2, 4]], trips: [['게타리아|Getaria', 8]] },"),
 ("  santiago: [5, 2, 3, 1, 4],", "  santiago: [5, 2, 1, 7, 3, 4, 6],"),
]
# cities without ADD whose list is re-sorted by the new itinerary (old '근교' → day trip)
RESORT = ['cuenca', 'tarragona']

ES_OLD_GROUPS = """      { title: { ko: '마드리드 지방', en: 'Community of Madrid' }, cityIds: ['madrid'] },
      { title: { ko: '카스티야 이 레온', en: 'Castile and León' }, cityIds: ['segovia', 'avila', 'salamanca'] },
      { title: { ko: '카스티야 라 만차', en: 'Castile–La Mancha' }, cityIds: ['toledo', 'cuenca'] },
      { title: { ko: '카탈루냐', en: 'Catalonia' }, cityIds: ['barcelona', 'montserrat', 'girona', 'tarragona', 'sitges'] },
      { title: { ko: '아라곤', en: 'Aragon' }, cityIds: ['zaragoza'] },
      { title: { ko: '발렌시아 지방', en: 'Valencian Community' }, cityIds: ['valencia'] },
      { title: { ko: '발레아레스 제도', en: 'Balearic Islands' }, cityIds: ['palma'] },
      { title: { ko: '안달루시아', en: 'Andalusia' }, cityIds: ['seville', 'cadiz', 'cordoba', 'granada', 'malaga', 'ronda', 'nerja'] },
      { title: { ko: '바스크', en: 'Basque Country' }, cityIds: ['bilbao', 'san-sebastian'] },
      { title: { ko: '갈리시아', en: 'Galicia' }, cityIds: ['santiago'] },
"""
# Madrid first, its neighbours, then round the country: Andalusia, the east coast, Catalonia, the north.
ES_NEW_GROUPS = """      { title: { ko: '마드리드 지방', en: 'Community of Madrid' }, cityIds: ['madrid'] },
      { title: { ko: '카스티야 라 만차', en: 'Castile–La Mancha' }, cityIds: ['toledo', 'cuenca'] },
      { title: { ko: '카스티야 이 레온', en: 'Castile and León' }, cityIds: ['segovia', 'avila', 'salamanca'] },
      { title: { ko: '안달루시아', en: 'Andalusia' }, cityIds: ['seville', 'cordoba', 'granada', 'nerja', 'malaga', 'ronda', 'cadiz'] },
      { title: { ko: '발렌시아 지방', en: 'Valencian Community' }, cityIds: ['valencia'] },
      { title: { ko: '발레아레스 제도', en: 'Balearic Islands' }, cityIds: ['palma'] },
      { title: { ko: '카탈루냐', en: 'Catalonia' }, cityIds: ['barcelona', 'montserrat', 'girona', 'sitges', 'tarragona'] },
      { title: { ko: '아라곤', en: 'Aragon' }, cityIds: ['zaragoza'] },
      { title: { ko: '바스크', en: 'Basque Country' }, cityIds: ['bilbao', 'san-sebastian'] },
      { title: { ko: '갈리시아', en: 'Galicia' }, cityIds: ['santiago'] },
"""


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
    it = rd('itinerary-iberia.ts')
    for a, b in IT:
        assert it.count(a) == 1, a[:60]
        it = it.replace(a, b)
    wr('itinerary-iberia.ts', it)
    for cid, items in ADD.items():
        if not items:
            continue
        if cid in AFTER:
            old = list(blocks(c, cid))
            c = add_sights(c, cid, items, 'visit-iberia.ts')
            by = blocks(c, cid)
            order = []
            for n in old:
                order.append(n)
                k = n
                while True:
                    nxt = [m for m, a in AFTER[cid].items() if a == k]
                    if not nxt:
                        break
                    order += nxt
                    k = nxt[-1]
            assert sorted(order) == sorted(by), (cid, order)
            c = reorder(c, cid, [(n, DAY if read_group(by[n]) == OLD_NEAR else read_group(by[n])) for n in order])
        else:
            c = add_sights(c, cid, items, 'visit-iberia.ts')
    for cid in [k for k, v in ADD.items() if v and k not in AFTER] + RESORT:
        by = blocks(c, cid)
        m = re.search(rf"^  '?{cid}'?: (.*?)(?=^  [a-z'/])", it, re.M | re.S)
        trips = {int(x) for t in re.findall(r"trips: \[(.*)\]", m.group(1), re.S) for x in re.findall(r", (\d+)", t)}
        c = reorder(c, cid, [(n, DAY if (n in trips or read_group(by[n]) == OLD_NEAR) else read_group(by[n])) for n in itinerary_order(it, cid, set(by))])
    wr('cities.ts', c)
    k = rd('countries.ts')
    assert k.count(ES_OLD_GROUPS) == 1
    k = k.replace(ES_OLD_GROUPS, ES_NEW_GROUPS)
    old_ids = "cityIds: ['madrid', 'segovia', 'avila', 'salamanca', 'toledo', 'cuenca', 'barcelona', 'montserrat', 'girona', 'tarragona', 'sitges', 'zaragoza', 'valencia', 'palma', 'seville', 'cadiz', 'cordoba', 'granada', 'malaga', 'ronda', 'nerja', 'bilbao', 'san-sebastian', 'santiago'],"
    ids = [x for g in re.findall(r"cityIds: \[([^\]]*)\] \}", ES_NEW_GROUPS) for x in re.findall(r"'([a-z-]+)'", g)]
    assert k.count(old_ids) == 1 and len(ids) == 24
    k = k.replace(old_ids, 'cityIds: [' + ', '.join(f"'{x}'" for x in ids) + '],')
    wr('countries.ts', k)


if __name__ == '__main__':
    main()
