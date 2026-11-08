#!/usr/bin/env python3
"""Portugal step 1 (all 16 cities), 2026-11-08.
Fixes: porto-h4 was '리버라토리우' for Livraria Lello; sintra-h5 '카브랄 몬세라트'; evora-h5 '아쿠아두쿠아구아'; run-together
names in Lagos, Óbidos, Funchal; cascais-h4 'Carmona' park spelled '카몬스'; nazare-h4 funicular called a cable car.
The small cities carried auto headers like '… 하루 코스' — removed (day trips keep '근교 당일치기'). Thin descriptions
rewritten. New sights incl. Pastéis de Belém, the Fado Museum, A Ginjinha, São Vicente de Fora & Feira da Ladra, Capela
das Almas, WOW, the six-bridges cruise, Conímbriga, Cartuxa winery and Almendres (Évora), Benagil and Sagres (Lagos),
Blandy's Madeira wine, the Monte toboggan and a levada walk. City order: Lisbon's region first, Madeira its own group.
Run once."""
import re
import urllib.parse
from add_daytrip_places import rd, wr
from sight_order import add_sights, blocks, itinerary_order, read_group, reorder
from review_sk import S

DAY = ('근교 당일치기', 'Day trip')
P_RIB = ('히베이라와 대성당', 'Ribeira & the cathedral')
P_BAI = ('바이샤 도심', 'Baixa')
P_GAIA = ('빌라노바드가이아', 'Vila Nova de Gaia')
L_BAI = ('바이샤·호시우', 'Baixa & Rossio')
L_ALF = ('알파마·그라사', 'Alfama & Graça')
L_BEL = ('벨렝', 'Belém')

REWRITE = {
 'porto-h1': (None, None, '도루강을 따라 색색의 좁은 집들이 계단처럼 쌓인 강변 구시가로, 세계유산입니다. 강가 테라스 식당이 늘어서 있습니다.', 'The riverside old town of narrow, colourful houses stacked up the bank of the Douro—a World Heritage site lined with terrace restaurants.', None),
 'porto-h2': (None, None, '에펠의 제자가 설계해 1886년 완공한 2층 철교로, 위층은 지하철과 보행자, 아래층은 차와 보행자가 다닙니다.', 'The two-deck iron bridge of 1886, designed by a disciple of Eiffel—metro and pedestrians on top, cars and pedestrians below.', None),
 'porto-h3': (None, None, '18세기 바로크 성당의 75m 종탑으로, 계단 240개를 올라 시내와 강을 내려다봅니다.', 'The 75 m bell tower of an 18th-century Baroque church—climb some 240 steps for views over the city and river.', None),
 'porto-h4': ('렐루 서점', 'Livraria Lello', '1906년 문을 연 신고딕 서점으로, 가운데 붉은 곡선 계단이 유명합니다. 입장권은 책을 사면 값에서 빼 줍니다.', 'The 1906 neo-Gothic bookshop famous for its curving red staircase; the entry ticket is deducted from any book you buy.', 'Livraria Lello Porto'),
 'porto-h5': (None, None, '강 건너 가이아 쪽에 모인 포트와인 저장고들로, 오크통 사이를 둘러보고 시음합니다.', 'The port-wine lodges across the river in Gaia—tour the barrel halls and taste.', None),
 'porto-h8': (None, None, '2022년 복원을 마치고 다시 문을 연 19세기 시장으로, 생선·과일·치즈 가게와 식당이 있습니다.', 'The 19th-century market, reopened in 2022 after restoration, with fish, fruit and cheese stalls and places to eat.', None),
 'braga-h1': (None, None, '지그재그로 오르는 바로크 계단 끝의 순례 성당으로, 1882년 놓은 물 무게로 움직이는 푸니쿨라가 지금도 다닙니다. 세계유산입니다.', 'The pilgrimage church atop a zigzag Baroque stairway, with a water-counterweight funicular running since 1882—a World Heritage site.', None),
 'braga-h2': (None, None, '포르투갈이 나라가 되기 전인 11세기에 짓기 시작한 대성당으로, 바로크 파이프오르간 두 대가 마주 보고 있습니다.', 'The cathedral begun in the 11th century, before Portugal existed, with two Baroque organs facing each other.', None),
 'braga-h3': (None, None, '분수와 카페가 둘러싼 브라가의 중심 광장입니다.', 'Braga’s central square, ringed by fountains and cafés.', None),
 'braga-h5': (None, None, '봉 제주스보다 더 높은 언덕 위의 성모 성지로, 꼭대기에서 브라가 일대가 내려다보입니다.', 'The Marian shrine on a hill above Bom Jesus, with views over the whole Braga area.', None),
 'guimaraes-h1': (None, None, '포르투갈 첫 왕 아폰수 1세가 태어났다고 전해지는 10세기 성으로, ‘포르투갈이 태어난 곳’이라 불립니다.', 'The 10th-century castle where Portugal’s first king, Afonso I, is said to have been born—the “cradle of the nation”.', None),
 'guimaraes-h2': (None, None, '굴뚝이 줄지어 선 15세기 공작 궁전으로, 태피스트리와 가구를 전시합니다.', 'The 15th-century ducal palace with rows of brick chimneys, displaying tapestries and furniture.', None),
 'guimaraes-h4': (None, None, '화강암 집과 아케이드 광장이 잘 남은 중세 구시가로, 세계유산입니다.', 'A well-preserved medieval old town of granite houses and arcaded squares—a World Heritage site.', None),
 'guimaraes-h3': (None, None, '고딕 아치 기념비와 성당이 선 구시가 한가운데 광장으로, 저녁엔 테라스 카페가 붐빕니다.', 'The square at the heart of the old town, with a Gothic arched monument and church, busy with terrace cafés in the evening.', None),
 'guimaraes-h5': (None, None, '케이블카로 약 10분 올라가는 해발 617m 언덕으로, 성지와 숲길, 시내 전망이 있습니다.', 'The 617 m hill reached by a 10-minute cable car, with a sanctuary, forest paths and views over town.', None),
 'aveiro-h1': (None, None, '아르누보 건물이 늘어선 운하로, 뱃머리를 그림으로 꾸민 몰리세이루 배가 오갑니다.', 'The canal lined with Art Nouveau buildings, plied by moliceiro boats with painted prows.', None),
 'aveiro-h2': (None, None, '해초를 나르던 몰리세이루 배를 타고 운하를 약 45분 돕니다.', 'A roughly 45-minute canal ride in a moliceiro, the boat once used to carry seaweed.', None),
 'aveiro-h3': (None, None, '옛 도미니코 수도원 성당이던 대성당입니다.', 'The cathedral, once the church of a Dominican convent.', None),
 'aveiro-h4': (None, None, '빨강·파랑 줄무늬 나무 집들이 늘어선 해변 마을입니다.', 'The beach village of red- and blue-striped wooden houses.', None),
 'aveiro-h5': (None, None, '지금도 전통 방식으로 소금을 거두는 석호의 염전으로, 염전 사이를 걷거나 체험합니다.', 'Lagoon salt pans still harvested the traditional way—walk among them or join a visit.', None),
 'lisbon-h1': ('벨렝 탑', 'Belém Tower', '대항해시대 테주강 어귀를 지키던 16세기 마누엘 양식 요새로, 세계유산입니다.', 'The 16th-century Manueline fortress that guarded the Tagus in the Age of Discovery—a World Heritage site.', None),
 'lisbon-h2': (None, None, '바스쿠 다 가마의 항해를 기념해 지은 마누엘 양식 수도원으로, 그의 무덤과 레이스 같은 회랑이 있습니다.', 'The Manueline monastery built to mark Vasco da Gama’s voyage, with his tomb and a lace-like cloister.', None),
 'lisbon-h3': (None, None, '1755년 대지진을 견딘 가장 오래된 동네로, 비탈 골목과 파두 식당이 이어집니다.', 'The oldest quarter, which survived the 1755 earthquake—steep lanes and fado restaurants.', None),
 'lisbon-h4': (None, None, '언덕 꼭대기의 이슬람 시대 성으로, 성벽 위에서 시내와 테주강이 내려다보입니다.', 'The Moorish-era castle on the hilltop, with views over the city and the Tagus from its walls.', None),
 'lisbon-h5': (None, None, '리베이라 시장 안의 푸드홀로, 리스본 유명 식당들의 요리를 한자리에서 맛봅니다.', 'The food hall inside the Ribeira market, with dishes from Lisbon’s well-known restaurants under one roof.', None),
 'lisbon-h7': (None, None, '대지진 뒤 다시 지은 테주강 가의 큰 광장으로, 노란 건물이 세 면을 둘러쌉니다.', 'The great riverside square rebuilt after the earthquake, framed on three sides by yellow arcades.', None),
 'lisbon-h9': (None, None, '항해 왕자 엔히크와 탐험가들이 뱃머리에 선 52m 기념비로, 꼭대기 전망대에 오릅니다.', 'The 52 m monument with Henry the Navigator and the explorers on a ship’s prow; there is a lookout on top.', None),
 'lisbon-h11': (None, None, '12세기에 지은 리스본에서 가장 오래된 성당으로, 요새처럼 두 탑이 섰습니다.', 'Lisbon’s oldest church, built in the 12th century with two fortress-like towers.', None),
 'lisbon-h13': (None, None, '알파마 지붕과 테주강, 상 비센트 성당의 흰 돔이 내려다보이는 전망대입니다.', 'The viewpoint over Alfama’s rooftops, the Tagus and the white dome of São Vicente.', None),
 'lisbon-h10': (None, None, '1892년부터 비카 골목의 가파른 언덕을 오르내리는 노란 푸니쿨라입니다.', 'The yellow funicular running up and down the steep Bica lane since 1892.', None),
 'sintra-h1': (None, None, '빨강·노랑으로 칠한 19세기 낭만주의 궁전으로, 산꼭대기에서 대서양까지 보입니다. 세계유산 신트라의 상징입니다.', 'The red-and-yellow 19th-century Romantic palace on the hilltop, with views to the Atlantic—the symbol of World Heritage Sintra.', None),
 'sintra-h2': (None, None, '원뿔 모양 흰 굴뚝 두 개가 솟은 중세 왕궁으로, 아줄레주 방들이 아름답습니다.', 'The medieval royal palace with two white conical chimneys and beautiful tiled rooms.', None),
 'sintra-h3': (None, None, '능선을 따라 이어진 9~10세기 이슬람 성벽으로, 성벽 위에서 페나 궁전과 바다가 보입니다.', 'The 9th–10th-century Moorish walls along the ridge, with views to Pena Palace and the sea.', None),
 'sintra-h4': (None, None, '나선 계단으로 땅속까지 내려가는 ‘입문의 우물’과 동굴, 탑이 있는 신비로운 정원 저택입니다.', 'A mysterious estate whose “Initiation Well” spirals down into the ground, with grottoes and towers.', None),
 'sintra-h5': ('몬세하트 궁전', 'Monserrate Palace', '무어풍 장식의 19세기 별궁과 세계 각지의 식물을 심은 정원입니다.', 'The 19th-century summer palace with Moorish-style decoration and a garden of plants from around the world.', None),
 'sintra-h6': (None, None, '‘땅이 끝나고 바다가 시작되는 곳’이라 새긴 비석과 등대가 선 유럽 대륙 최서단 곶입니다.', 'Mainland Europe’s westernmost cape, with a lighthouse and a stone inscribed “where the land ends and the sea begins”.', None),
 'cascais-h1': (None, None, '어선이 올라온 작은 만의 시내 해변으로, 해변 산책로가 에스토릴까지 이어집니다.', 'The town beach in a small fishing cove, with a seaside promenade to Estoril.', None),
 'cascais-h2': (None, None, '바닷물이 절벽 아래 동굴로 밀려들며 물보라를 뿜는 해식 절벽입니다.', 'Sea cliffs where waves surge into a cave and blast spray—“the Mouth of Hell”.', None),
 'cascais-h3': (None, None, '16~17세기 요새를 고친 문화 공간으로, 호텔과 미술관이 들어 있습니다.', 'A 16th–17th-century fortress turned into a cultural space with a hotel and galleries.', None),
 'cascais-h4': ('마레샬 카르모나 공원', 'Parque Marechal Carmona', '공작과 닭이 돌아다니는 시내 공원으로, 오리 연못과 놀이터가 있습니다.', 'The town park where peacocks and hens roam, with a duck pond and playground.', 'Parque Marechal Carmona Cascais'),
 'cascais-h5': (None, None, '요트가 정박한 마리나로, 카페와 식당이 둘러쌉니다.', 'The yacht marina ringed by cafés and restaurants.', None),
 'obidos-h1': (None, None, '마을 위 언덕의 중세 성으로, 지금은 숙소(포우자다)입니다.', 'The medieval castle above the village, now a pousada hotel.', None),
 'obidos-h2': (None, None, '마을을 한 바퀴 두르는 성벽 위 길로, 난간이 없으니 조심해서 걷습니다.', 'The walk around the village on its walls—there are no railings, so take care.', None),
 'obidos-h3': (None, None, '17세기 아줄레주로 안을 덮은 성당으로, 마을 광장에 있습니다.', 'The church lined inside with 17th-century tiles, on the village square.', None),
 'obidos-h4': ('디레이타 거리', 'Rua Direita', '하얀 집과 꽃이 이어지는 중심 거리로, 초콜릿 잔에 따라 주는 체리주 진지냐를 맛봅니다.', 'The main street of white houses and flowers—try ginjinha cherry liqueur served in a chocolate cup.', 'Rua Direita Óbidos'),
 'obidos-h5': ('포르타 다 빌라', 'Porta da Vila', '아줄레주로 안쪽을 꾸민 마을 정문입니다.', 'The village gate, lined inside with azulejo tiles.', 'Porta da Vila Óbidos'),
 'nazare-h1': (None, None, '전통 일곱 겹 치마를 입은 여인들이 생선을 말리던 어촌 앞의 넓은 모래 해변입니다.', 'The wide sandy beach of the old fishing town, where women in seven-layered skirts once dried fish.', None),
 'nazare-h2': (None, None, '해변 위 절벽 마을 시티우의 전망대로, 해변과 시내가 내려다보입니다.', 'The lookout in Sítio, the clifftop quarter above the beach and town.', None),
 'nazare-h3': (None, None, '세계에서 가장 큰 파도를 타는 서퍼들을 보는 곶의 요새와 등대입니다.', 'The headland fort and lighthouse from which to watch surfers ride the world’s biggest waves.', None),
 'nazare-h4': ('나자레 푸니쿨라', 'Nazaré funicular', '1889년부터 해변과 절벽 위 시티우를 잇는 푸니쿨라입니다.', 'The funicular linking the beach with clifftop Sítio since 1889.', None),
 'nazare-h5': (None, None, '해저 협곡 때문에 겨울에 20m가 넘는 파도가 치는 해변입니다.', 'The beach where an undersea canyon builds winter waves of over 20 m.', None),
 'fatima-h1': (None, None, '1917년 성모 발현 장소에 세운 순례 성지의 큰 광장으로, 5월과 10월 13일에 큰 순례가 있습니다.', 'The vast square of the shrine built where the Virgin was seen in 1917, with major pilgrimages on 13 May and 13 October.', None),
 'fatima-h2': (None, None, '세 목동이 묻힌 네오바로크 성당으로, 65m 종탑이 광장 끝에 섭니다.', 'The neo-Baroque basilica where the three shepherd children are buried, its 65 m tower closing the square.', None),
 'fatima-h3': (None, None, '2007년 봉헌한 9,000석 규모의 현대식 원형 성당입니다.', 'The round modern church for about 9,000 people, consecrated in 2007.', None),
 'fatima-h4': (None, None, '성모가 나타났다는 자리에 지은 작은 소성당으로, 촛불 행렬이 이곳에서 시작합니다.', 'The small chapel on the spot of the apparitions, where candlelight processions begin.', None),
 'tomar-h5': (None, None, '시청과 성당이 마주한 광장에서 나바옹강까지 바둑판 골목이 이어집니다.', 'A grid of lanes runs from the town-hall square down to the Nabão river.', None),
 'coimbra-h1': (None, None, '1290년 세운 포르투갈 최고(最古) 대학으로, 언덕 위 옛 왕궁에 있습니다. 세계유산입니다.', 'Portugal’s oldest university, founded in 1290, in the old royal palace on the hilltop—a World Heritage site.', None),
 'coimbra-h2': (None, None, '금박 서가가 이어지는 18세기 바로크 도서관으로, 박쥐가 밤마다 책벌레를 잡아먹습니다. 시간 지정 입장입니다.', 'The 18th-century Baroque library of gilded shelves, where bats hunt book-eating insects at night; timed entry.', None),
 'coimbra-h3': (None, None, '포르투갈 첫 두 왕이 묻힌 수도원으로, 옆 카페 산타 크루스는 옛 성당 건물입니다.', 'The monastery where Portugal’s first two kings are buried; the Café Santa Cruz next door is in a former chapel.', None),
 'coimbra-h4': (None, None, '12세기 요새 같은 로마네스크 대성당입니다.', 'The fortress-like 12th-century Romanesque cathedral.', None),
 'coimbra-h5': (None, None, '몬데구강 가의 공원과 산책로로, 강 건너에서 언덕 위 대학이 보입니다.', 'Riverside parks and paths along the Mondego, with views back to the university on its hill.', None),
 'evora-h1': (None, None, '구시가 꼭대기에 기둥 14개가 남은 2세기 로마 신전입니다.', 'A 2nd-century Roman temple whose 14 columns still stand atop the old town.', None),
 'evora-h2': (None, None, '12~13세기 고딕 대성당으로, 지붕 테라스에 올라 알렌테주 평원을 봅니다.', 'The 12th–13th-century Gothic cathedral—climb to the roof terrace for views over the Alentejo plain.', None),
 'evora-h3': (None, None, '수도사들이 유골 약 5,000구로 벽을 쌓은 성 프란치스코 성당의 예배당입니다.', 'The chapel of St Francis whose walls monks lined with the bones of some 5,000 people.', None),
 'evora-h4': (None, None, '아케이드와 분수가 있는 중심 광장으로, 카페가 둘러쌉니다.', 'The arcaded main square with its fountain, ringed by cafés.', None),
 'evora-h5': ('아구아 드 프라타 수도교', 'Água de Prata Aqueduct', '16세기 수도교로, 시내로 들어오는 아치 아래에 집들이 끼어 있습니다.', 'The 16th-century aqueduct, with houses built into its arches as it enters town.', None),
 'lagos-h1': ('폰타 다 피에다드', 'Ponta da Piedade', '황금빛 절벽과 바위 아치, 해식 동굴이 모인 곶으로, 계단으로 내려가거나 작은 배로 동굴을 돕니다.', 'A headland of golden cliffs, rock arches and sea caves—walk down the steps or tour the caves by small boat.', None),
 'lagos-h2': ('메이아 프라이아', 'Meia Praia', '시내 동쪽으로 4km 넘게 뻗은 모래 해변입니다.', 'The sandy beach running more than 4 km east of town.', None),
 'lagos-h3': (None, None, '구시가를 감싼 16세기 성벽과 바닷가 요새입니다.', 'The 16th-century walls around the old town and the seaside fort.', None),
 'lagos-h4': (None, None, '1444년 유럽 최초의 노예 시장이 열린 자리의 작은 박물관입니다.', 'A small museum on the site of Europe’s first slave market, held here in 1444.', None),
 'lagos-h5': ('도나 아나 해변', 'Praia Dona Ana', '황금빛 절벽 사이 작은 만의 해변입니다.', 'The small cove beach between golden cliffs.', None),
 'faro-h1': (None, None, '성벽 안 옛 동네로, 자갈길과 대성당 광장이 있습니다.', 'The walled old quarter, with cobbled lanes and the cathedral square.', None),
 'faro-h2': (None, None, '종탑에 오르면 구시가와 리아 포르모사 석호가 내려다보이는 대성당입니다.', 'The cathedral whose bell tower overlooks the old town and the Ria Formosa lagoon.', None),
 'faro-h3': (None, None, '모래섬과 갯벌이 이어지는 석호 자연공원으로, 배를 타고 섬과 새를 보러 갑니다.', 'A lagoon nature park of sandbar islands and mudflats—take a boat to the islands and birdlife.', None),
 'faro-h4': (None, None, '바로크 성당으로, 뒤뜰에 유골로 벽을 쌓은 예배당이 있습니다.', 'A Baroque church with a chapel of bones in its back courtyard.', None),
 'faro-h5': (None, None, '공항 옆 다리로 건너가는 모래섬 해변입니다.', 'The sandbar beach reached by a bridge near the airport.', None),
 'funchal-h1': (None, None, '바다 위로 몬테 마을까지 약 15분 올라가는 케이블카입니다.', 'The cable car rising about 15 minutes over the city to the village of Monte.', None),
 'funchal-h2': (None, None, '언덕 위 열대·아열대 식물원으로, 기하무늬 화단 너머로 항구가 보입니다.', 'The hillside garden of tropical and subtropical plants, with patterned flowerbeds above the harbour.', None),
 'funchal-h3': (None, None, '아르데코 건물 안의 시장으로, 이국 과일과 꽃, 검은 갈치를 팝니다.', 'The Art Deco market of exotic fruit, flowers and black scabbardfish.', None),
 'funchal-h4': (None, None, '15세기 말 지은 대성당으로, 나무에 상아를 박아 넣은 천장이 있습니다.', 'The late-15th-century cathedral with a carved wooden ceiling inlaid with ivory.', None),
 'funchal-h5': ('카마라 드 로부스', 'Câmara de Lobos', '처칠이 그림을 그린 어촌으로, 색색의 배가 작은 만에 떠 있습니다.', 'The fishing village Churchill painted, with colourful boats in its little bay.', None),
}

ADD = {
 'lisbon': [
  (35, S('파스테이스 드 벨렝', 'Pastéis de Belém', '1837년부터 수도원의 비법으로 에그타르트를 구워 온 가게로, 계피와 슈거파우더를 뿌려 먹습니다.', 'Baking custard tarts to the monastery’s secret recipe since 1837—dust them with cinnamon and sugar.', 'Pastéis de Belém', 30, 45, group=L_BEL,
         n='포장 줄은 길어도 빨리 줄고, 안쪽 좌석은 따로 기다립니다.|The takeaway queue moves fast; seats inside have their own wait.')),
  (36, S('파두 박물관', 'Fado Museum', '리스본 서민의 노래 파두의 역사와 가수들, 포르투갈 기타를 소개합니다.', 'The story of fado, Lisbon’s song of the streets—its singers and the Portuguese guitar.', 'Museu do Fado', 60, 75, group=L_ALF, c='mon')),
  (37, S('아 진지냐', 'A Ginjinha', '1840년부터 체리주 진지냐를 잔술로 파는 작은 가게로, 길에 서서 마십니다.', 'A tiny bar selling shots of ginjinha cherry liqueur since 1840—drink it standing in the street.', 'A Ginjinha Espinheira', 10, 15, group=L_BAI)),
  (38, S('상 비센트 드 포라 수도원과 도둑 시장', 'São Vicente de Fora & Feira da Ladra', '아줄레주 회랑과 왕실 묘소가 있는 수도원으로, 옆 광장에서 화요일과 토요일에 벼룩시장이 열립니다.', 'The monastery of tiled cloisters and royal tombs; the flea market fills the square beside it on Tuesdays and Saturdays.', 'Mosteiro de São Vicente de Fora', 60, 90, group=L_ALF)),
 ],
 'porto': [
  (23, S('알마스 예배당', 'Capela das Almas', '바깥 벽 전체를 파란 아줄레주 약 1만 6천 장으로 덮은 예배당입니다.', 'The chapel whose outer walls are covered in some 16,000 blue azulejo tiles.', 'Capela das Almas Porto', 10, 15, group=P_BAI)),
  (24, S('WOW 와인 지구', 'WOW (World of Wine)', '옛 포트와인 저장고를 고친 문화 지구로, 와인·코르크·초콜릿 박물관과 식당이 있습니다.', 'Former port lodges turned into a cultural quarter with wine, cork and chocolate museums and restaurants.', 'WOW World of Wine Porto', 120, 180, group=P_GAIA)),
  (25, S('여섯 다리 유람선', 'Six bridges cruise', '전통 화물선 하벨루 모양 배로 도루강의 다리 여섯 개 아래를 지나는 약 50분 유람선입니다.', 'A roughly 50-minute cruise under the Douro’s six bridges in a boat styled like a rabelo cargo boat.', 'Cais da Ribeira Porto', 50, 60, group=P_RIB)),
 ],
 'braga': [
  (7, S('산타 바르바라 정원', 'Jardim de Santa Bárbara', '중세 대주교 궁전 벽 아래의 꽃 정원입니다.', 'The flower garden below the walls of the medieval archbishops’ palace.', 'Jardim de Santa Bárbara Braga', 15, 20)),
 ],
 'coimbra': [
  (8, S('코임브라 파두', 'Coimbra fado', '대학생들이 검은 망토를 입고 부르던 남성 파두를 작은 공연장에서 듣습니다.', 'Hear Coimbra’s fado, sung by men in black student capes, in a small concert hall.', 'Fado ao Centro Coimbra', 50, 60)),
  (9, S('코님브리가', 'Conímbriga', '모자이크 바닥과 성벽이 잘 남은 포르투갈 최대급 로마 도시 유적입니다.', 'One of Portugal’s largest Roman towns, with well-preserved mosaic floors and walls.', 'Conímbriga', 120, 150, group=DAY,
        n='코임브라에서 버스나 차로 약 30분입니다.|About 30 min from Coimbra by bus or car.')),
 ],
 'evora': [
  (6, S('카르투샤 와이너리', 'Adega Cartuxa', '에보라 외곽의 알렌테주 와이너리로, 옛 수도회 땅에서 와인과 올리브유를 만듭니다.', 'An Alentejo winery just outside Évora on former monastic land, making wine and olive oil.', 'Adega Cartuxa Évora', 90, 120, b='req')),
  (7, S('알멘드레스 열석', 'Almendres Cromlech', '약 7,000년 전 세운 거석 약 95개가 코르크나무 숲 속에 둥글게 선 이베리아 최대급 열석입니다.', 'Some 95 standing stones raised about 7,000 years ago in a cork-oak grove—one of Iberia’s largest stone circles.', 'Cromeleque dos Almendres', 45, 60, group=DAY,
        n='에보라에서 차로 약 25분이며 마지막 길은 비포장입니다.|About 25 min by car from Évora, the last stretch on a dirt road.')),
  (8, S('몬사라즈', 'Monsaraz', '알케바 호수를 내려다보는 언덕 위 하얀 성벽 마을입니다.', 'A white walled village on a hill above the Alqueva lake.', 'Monsaraz', 120, 180, group=DAY,
        n='에보라에서 차로 약 50분입니다.|About 50 min by car from Évora.')),
 ],
 'cascais': [
  (6, S('파울라 레구 미술관', 'Casa das Histórias Paula Rego', '붉은 피라미드 굴뚝 건물에 화가 파울라 레구의 작품을 전시합니다.', 'Paula Rego’s paintings in a building topped by red pyramid towers.', 'Casa das Histórias Paula Rego', 60, 75, c='mon')),
 ],
 'fatima': [
  (7, S('알주스트렐 목동들의 집', 'Aljustrel (the shepherd children’s houses)', '세 목동이 살던 마을로, 그들의 집이 그대로 남아 있습니다.', 'The hamlet where the three shepherd children lived, with their houses preserved.', 'Aljustrel Fátima', 45, 60,
        n='성지에서 걸어서 약 25분입니다.|About 25 min’s walk from the sanctuary.')),
 ],
 'lagos': [
  (6, S('베나질 동굴', 'Benagil Cave', '천장에 구멍이 뚫린 해식 동굴로, 배나 카약을 타고 들어가 안을 봅니다.', 'The sea cave with a hole in its roof, seen from a boat or kayak.', 'Algar de Benagil', 120, 180, group=DAY,
        n='2024년부터 동굴 안 해변에 내리는 것은 금지되었습니다. 라구스·포르티망에서 배가 다닙니다.|Landing on the cave beach has been banned since 2024; boats run from Lagos and Portimão.')),
  (7, S('사그레스와 상 비센트 곶', 'Sagres & Cabo de São Vicente', '항해 왕자 엔히크의 요새와 유럽 남서쪽 끝 절벽 위 등대로, 노을이 유명합니다.', 'Henry the Navigator’s fortress and the lighthouse on the cliffs at Europe’s south-western tip—famous at sunset.', 'Cabo de São Vicente', 180, 240, group=DAY,
        n='라구스에서 버스로 약 1시간이며 곶까지는 차가 편합니다.|About 1 hr by bus from Lagos; a car is easiest for the cape.')),
 ],
 'faro': [
  (6, S('빌라 문', 'Arco da Vila', '구시가로 들어가는 19세기 신고전주의 성문으로, 위에 황새 둥지가 있습니다.', 'The 19th-century Neoclassical gate into the old town, with storks nesting on top.', 'Arco da Vila Faro', 10, 15)),
 ],
 'funchal': [
  (6, S('몬테 썰매', 'Monte toboggan', '흰 옷의 운전사 두 명이 버들 바구니 썰매를 몰고 언덕길을 약 2km 미끄러져 내려갑니다.', 'Two drivers in white steer a wicker basket sledge about 2 km down the hill road.', 'Carreiros do Monte', 20, 30,
        n='몬테 케이블카 윗역 근처에서 탑니다.|Board near the top station of the Monte cable car.')),
  (7, S('블랜디스 와인 로지', 'Blandy’s Wine Lodge', '200년 넘은 가문의 저장고에서 마데이라 와인을 배우고 시음합니다.', 'Learn about and taste Madeira wine in a family lodge over 200 years old.', 'Blandy\'s Wine Lodge Funchal', 60, 75, b='rec')),
  (8, S('레바다 걷기', 'Levada walk', '산비탈을 따라 놓은 옛 물길 레바다를 따라 숲과 폭포까지 걷습니다(25 폰테스 등).', 'Walk beside the island’s old irrigation channels, the levadas, through forest to waterfalls (25 Fontes and others).', 'Levada das 25 Fontes', 240, 300, group=DAY,
        n='푼샬에서 차나 투어 버스로 약 1시간이며 일부 코스는 사전 예약이 필요합니다.|About 1 hr from Funchal by car or tour bus; some routes need advance booking.')),
  (9, S('피쿠 두 아리에이루', 'Pico do Arieiro', '해발 1,818m 봉우리 전망대로, 구름 위 일출과 능선길이 유명합니다.', 'The 1,818 m summit viewpoint, famous for sunrises above the clouds and its ridge trail.', 'Pico do Arieiro', 120, 180, group=DAY,
        n='푼샬에서 차로 약 40분입니다.|About 40 min by car from Funchal.')),
 ],
}

AFTER = {
 'lisbon': {37: 15, 38: 23, 36: 3, 35: 2},
 'porto': {25: 1, 23: 18, 24: 5},
}

IT = [
 ("      ['호시우에서 바이샤·알파마|Rossio, Baixa & Alfama', 15, 8, 24, 7, 11, 13, 4, 23, 3],",
  "      ['호시우에서 바이샤·알파마|Rossio, Baixa & Alfama', 15, 37, 8, 24, 7, 11, 13, 4, 23, 38, 3, 36],"),
 ("      ['벨렝과 강변|Belém & the riverfront', 2, 9, 1,", "      ['벨렝과 강변|Belém & the riverfront', 2, 35, 9, 1,"),
 ("      ['볼량에서 대성당·히베이라|Bolhão, the cathedral & Ribeira', 8, 18, 19, 17, 6, 11, 12, 13, 1],",
  "      ['볼량에서 대성당·히베이라|Bolhão, the cathedral & Ribeira', 8, 18, 23, 19, 17, 6, 11, 12, 13, 1, 25],"),
 ("      ['다리 건너 가이아와 클레리구스|Across the bridge to Gaia, then Clérigos', 2, 20, 5, 3,",
  "      ['다리 건너 가이아와 클레리구스|Across the bridge to Gaia, then Clérigos', 2, 20, 5, 24, 3,"),
 ("  braga: { days: [['', 4, 2, 6, 3]],", "  braga: { days: [['', 4, 2, 7, 6, 3]],"),
 ("  coimbra: [6, 1, 2, 7, 4, 3, 5],", "  coimbra: { days: [['', 6, 1, 2, 7, 4, 3, 5, 8]], trips: [['코님브리가|Conímbriga', 9]] },"),
 ("  evora: [4, 3, 2, 1, 5],", "  evora: { days: [['', 4, 3, 2, 1, 5, 6]], trips: [['알멘드레스 열석|Almendres Cromlech', 7], ['몬사라즈|Monsaraz', 8]] },"),
 ("  cascais: [1, 5, 3, 4, 2],", "  cascais: [1, 5, 3, 4, 6, 2],"),
 ("  fatima: { days: [['', 3, 4, 1, 2, 5]],", "  fatima: { days: [['', 3, 4, 1, 2, 5, 7]],"),
 ("  lagos: [2, 3, 4, 5, 1],", "  lagos: { days: [['', 2, 3, 4, 5, 1]], trips: [['베나질 동굴|Benagil Cave', 6], ['사그레스|Sagres', 7]] },"),
 ("    days: [['', 4, 1, 2]],\n    trips: [\n      ['리아 포르모사|Ria Formosa', 3],", "    days: [['', 6, 4, 1, 2]],\n    trips: [\n      ['리아 포르모사|Ria Formosa', 3],"),
 ("  funchal: { days: [['', 3, 4, 1, 2]], trips: [['카마라 드 로부스|Câmara de Lobos', 5]] },",
  "  funchal: { days: [['', 3, 4, 7, 1, 6, 2]], trips: [['카마라 드 로부스|Câmara de Lobos', 5], ['레바다 걷기|Levada walk', 8], ['피쿠 두 아리에이루|Pico do Arieiro', 9]] },"),
]
# small cities whose '… 하루 코스' headers are dropped (list order follows the itinerary)
SMALL = ['braga', 'guimaraes', 'aveiro', 'sintra', 'cascais', 'obidos', 'nazare', 'fatima', 'tomar', 'coimbra', 'evora', 'lagos', 'faro', 'funchal']

PT_OLD = """    cityIds: ['porto', 'braga', 'guimaraes', 'aveiro', 'lisbon', 'sintra', 'cascais', 'obidos', 'nazare', 'fatima', 'tomar', 'coimbra', 'evora', 'lagos', 'faro', 'funchal'],
    cityGroups: [
      { title: { ko: '북부', en: 'Northern Portugal' }, cityIds: ['porto', 'braga', 'guimaraes', 'aveiro'] },
      { title: { ko: '중부', en: 'Central Portugal' }, cityIds: ['lisbon', 'sintra', 'cascais', 'obidos', 'nazare', 'fatima', 'tomar', 'coimbra'] },
      { title: { ko: '남부', en: 'Southern Portugal' }, cityIds: ['evora', 'lagos', 'faro', 'funchal'] },
    ],
"""
# Lisbon's region first (the capital), then north, then south by the road from Lisbon; Madeira is an island
PT_NEW = """    cityIds: ['lisbon', 'sintra', 'cascais', 'obidos', 'nazare', 'fatima', 'tomar', 'coimbra', 'porto', 'braga', 'guimaraes', 'aveiro', 'evora', 'faro', 'lagos', 'funchal'],
    cityGroups: [
      { title: { ko: '중부', en: 'Central Portugal' }, cityIds: ['lisbon', 'sintra', 'cascais', 'obidos', 'nazare', 'fatima', 'tomar', 'coimbra'] },
      { title: { ko: '북부', en: 'Northern Portugal' }, cityIds: ['porto', 'braga', 'guimaraes', 'aveiro'] },
      { title: { ko: '남부', en: 'Southern Portugal' }, cityIds: ['evora', 'faro', 'lagos'] },
      { title: { ko: '마데이라', en: 'Madeira' }, cityIds: ['funchal'] },
    ],
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
        if cid in AFTER:
            old = list(blocks(c, cid))
            c = add_sights(c, cid, items, 'visit-iberia.ts')
            by = blocks(c, cid)
            order = []
            for n in old:
                order.append(n)
                order += [m for m, a in AFTER[cid].items() if a == n]
            assert sorted(order) == sorted(by), (cid, order)
            c = reorder(c, cid, [(n, read_group(by[n])) for n in order])
        else:
            c = add_sights(c, cid, items, 'visit-iberia.ts')
    for cid in SMALL:
        by = blocks(c, cid)
        m = re.search(rf"^  '?{cid}'?: (.*?)(?=^  [a-z'/])", it, re.M | re.S)
        trips = {int(x) for t in re.findall(r"trips: \[(.*)\]", m.group(1), re.S) for x in re.findall(r", (\d+)", t)}
        c = reorder(c, cid, [(n, DAY if n in trips else None) for n in itinerary_order(it, cid, set(by))])
    wr('cities.ts', c)
    k = rd('countries.ts')
    assert k.count(PT_OLD) == 1
    wr('countries.ts', k.replace(PT_OLD, PT_NEW))


if __name__ == '__main__':
    main()
