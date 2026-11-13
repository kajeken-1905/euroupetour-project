#!/usr/bin/env python3
"""Greece step 1 (all 17 cities), 2026-11-13.
Fixes: misspelt Korean names (Navagio '나바요', Bourtzi '부츠르지', Syntagma '신탁그마', Akronafplia '아크로나플루아', Liston
'리스트온', Mandraki '만드락키', Tsambika '츠암피카', Koules '쿠레스', the Bond film title) and many one-line descriptions.
heraklion-h5 'Moros beach' (no such beach) becomes the Morosini Fountain. New sights: Athens 13 (Olympian Zeus, Panathenaic
Stadium, National Archaeological Museum, Lycabettus, Anafiotika, Roman Agora, Benaki, Kerameikos, Philopappos, National Garden,
Cycladic Art, Central Market, SNFCC), Thessaloniki 5, Rhodes 3, Heraklion 2, Santorini 3, Corfu 4, Chania 1, Mykonos 1,
Meteora 1, Nafplio (Nemea wine) 1, Zakynthos 1, Sounion (Lavrio) 1. Athens and Thessaloniki get district groups and 2–3 day
itineraries. City groups now follow the regions: Athens & around, Peloponnese, mainland, Ionian, Cyclades, Crete, Dodecanese.
Run once."""
import re
import urllib.parse
from add_daytrip_places import rd, wr
from sight_order import add_sights, blocks, itinerary_order, read_group, reorder
from review_sk import S

DAY = ('근교 당일치기', 'Day trip')
A_ACR = ('아크로폴리스 일대', 'The Acropolis area')
A_PLA = ('플라카·모나스티라키', 'Plaka & Monastiraki')
A_SYN = ('신타그마·콜로나키', 'Syntagma & Kolonaki')
A_CEN = ('오모니아·시내 북쪽', 'Omonia & the north')
A_OUT = ('시내 밖', 'Farther out')
T_SEA = ('해안과 시내 중심', 'Seafront & centre')
T_UP = ('로마 유적과 윗마을', 'Roman sites & the Upper Town')

REWRITE = {
 'athens-h1': (None, None, '파르테논 신전과 에레크테이온, 아테나 니케 신전이 선 언덕으로, 기원전 5세기 아테네 황금기의 상징이자 세계유산입니다.', 'The rock crowned by the Parthenon, the Erechtheion and the Temple of Athena Nike—the symbol of 5th-century-BC Athens and a World Heritage site.', None),
 'athens-h2': (None, None, '아크로폴리스 기슭의 유리 건물 박물관으로, 파르테논 조각과 에레크테이온의 카리아티드 원작을 전시합니다. 꼭대기 층에서 파르테논이 보입니다.', 'The glass museum at the foot of the Acropolis, with the Parthenon sculptures and the original Caryatids; its top floor looks straight at the Parthenon.', None),
 'athens-h3': (None, None, '아크로폴리스 북쪽 기슭의 옛 동네로, 신고전주의 집과 좁은 골목에 기념품 가게와 타베르나가 이어집니다.', 'The old quarter on the Acropolis’s northern slope, with neoclassical houses and lanes of shops and tavernas.', None),
 'athens-h4': (None, None, '소크라테스가 거닐던 고대 아테네의 광장 유적으로, 잘 남은 헤파이스토스 신전과 복원한 아탈로스 주랑(박물관)이 있습니다.', 'The marketplace of ancient Athens where Socrates walked, with the well-preserved Temple of Hephaestus and the rebuilt Stoa of Attalos (a museum).', None),
 'athens-h5': (None, None, '벼룩시장과 기념품 가게가 모인 광장과 골목으로, 주변 옥상 바에서 아크로폴리스가 보입니다.', 'The square and lanes of flea-market stalls and souvenir shops, with rooftop bars looking up at the Acropolis.', None),
 'athens-h6': ('구왕궁 (의회)과 근위병 교대식', 'Old Royal Palace (Parliament) & the changing of the guard', '신타그마 광장의 옛 왕궁으로 지금은 의회입니다. 앞의 무명용사비에서 전통 복장 근위병(에브조네스)이 매시 정각 교대하고, 일요일 오전 11시엔 큰 교대식이 열립니다.', 'The former royal palace on Syntagma Square, now the parliament. Evzones guards in traditional dress change on the hour at the Tomb of the Unknown Soldier, with a grand ceremony on Sundays at 11:00.', 'Tomb of the Unknown Soldier Athens'),
 'sounion-h2': (None, None, '포세이돈 신전 기둥 너머로 에게해에 해가 지는 풍경으로, 해 질 녘에 가장 붐빕니다.', 'The sun setting over the Aegean behind the columns of the Temple of Poseidon—busiest at dusk.', None),
 'sounion-h3': (None, None, '석회암 절벽 아래 바닷물과 샘물이 섞인 호수로, 일 년 내내 따뜻해 수영을 즐깁니다(유료).', 'A lake of mixed sea and spring water beneath limestone cliffs, warm enough to swim in all year (paid entry).', None),
 'sounion-h4': (None, None, '아테네 남쪽 해변 마을들을 지나 수니온까지 이어진 해안 도로로, 해변과 바닷가 카페가 줄지어 있습니다.', 'The coast road from Athens past beach towns to Sounion, lined with beaches and seaside cafés.', None),
 'delphi-h1': (None, None, '세상의 중심이라 여겨진 성역에서 아폴론의 신탁이 내려지던 신전 터로, 파르나소스산 비탈에 있는 세계유산입니다.', 'The temple where Apollo’s oracle spoke, at a sanctuary once thought the centre of the world, on the slopes of Mount Parnassus—a World Heritage site.', None),
 'delphi-h2': (None, None, '아폴론 성역 아래 올리브 숲 속의 아테나 성역으로, 기둥 세 개가 선 원형 신전 톨로스가 유명합니다.', 'Athena’s sanctuary in the olive groves below Apollo’s, famous for the round Tholos with three standing columns.', None),
 'delphi-h3': (None, None, '아폴론 신전 위의 기원전 4세기 극장으로, 5,000명이 앉던 객석에서 계곡이 내려다보입니다.', 'The 4th-century-BC theatre above the temple, whose 5,000 seats look down the valley.', None),
 'delphi-h4': (None, None, '청동 마부상과 낙소스 스핑크스 등 성역 출토품을 전시합니다.', 'Finds from the sanctuary, including the bronze Charioteer and the Sphinx of Naxos.', None),
 'delphi-h5': (None, None, '파르나소스산 자락의 돌집 산악 마을로, 겨울엔 스키 리조트 거점이 됩니다.', 'A stone mountain village on the slopes of Parnassus, a ski base in winter.', None),
 'meteora-h1': (None, None, '14세기에 세운 메테오라에서 가장 크고 높은 수도원으로, 옛 부엌과 박물관이 있습니다.', 'The largest and highest monastery at Meteora, founded in the 14th century, with its old kitchen and a museum.', None),
 'meteora-h2': (None, None, '사람과 짐을 끌어올리던 그물 도르래 탑과 16세기 프레스코가 남은 수도원입니다.', 'The monastery with its winch tower once used to haul up people and goods, and 16th-century frescoes.', None),
 'meteora-h3': (None, None, '좁은 바위 꼭대기에 꽉 들어찬 수녀원으로, 다리를 건너 들어갑니다.', 'The convent squeezed onto a narrow rock summit, reached by a bridge.', None),
 'meteora-h4': (None, None, '계단 140여 개를 올라가는 외딴 바위 위 수도원으로, 영화 ‘007 유어 아이즈 온리’에 나왔습니다.', 'The remote rock-top monastery up some 140 steps, featured in the Bond film For Your Eyes Only.', None),
 'meteora-h5': (None, None, '해 질 녘 바위 기둥과 수도원이 붉게 물드는 전망대입니다.', 'The lookout where the rock pillars and monasteries glow red at sunset.', None),
 'thessaloniki-h1': ('화이트 타워', 'White Tower', '15세기 오스만 시대 해안 요새 탑으로, 지금은 도시 역사 박물관이고 꼭대기에서 바다가 보입니다.', 'The 15th-century Ottoman seafront tower, now a museum of the city’s history with sea views from the top.', None),
 'thessaloniki-h2': (None, None, '바다를 향해 열린 큰 광장으로, 주변에 카페와 아케이드가 모여 있습니다.', 'The great square opening onto the sea, ringed by cafés and arcades.', None),
 'thessaloniki-h3': ('아노폴리 (윗마을)', 'Ano Poli (Upper Town)', '오스만 시대 목조 집과 비잔틴 성벽이 남은 언덕 위 동네로, 시내와 바다가 내려다보입니다.', 'The hilltop quarter of Ottoman wooden houses and Byzantine walls, with views over the city and sea.', None),
 'thessaloniki-h4': (None, None, '4세기 로마 황제 갈레리우스가 지은 원형 건물로, 성당·모스크로 쓰였고 모자이크가 남아 있습니다. 세계유산입니다.', 'The round 4th-century building of Emperor Galerius, later a church and a mosque, with surviving mosaics—a World Heritage site.', None),
 'thessaloniki-h5': (None, None, '화이트 타워에서 이어지는 해안 산책로로, 조각 공원과 ‘우산’ 조형물이 있습니다.', 'The seafront promenade from the White Tower, with sculpture gardens and the ‘Umbrellas’ installation.', None),
 'corfu-h1': (None, None, '베네치아·프랑스·영국 지배의 흔적이 겹친 구시가로, 좁은 골목(칸투니아)이 이어지는 세계유산입니다.', 'The old town layered with Venetian, French and British rule, a maze of narrow kantounia lanes—a World Heritage site.', None),
 'corfu-h2': ('구 요새 (팔레오 프루리오)', 'Old Fortress (Palaio Frourio)', '바다로 튀어나온 곶 위의 베네치아 요새로, 꼭대기에서 구시가와 바다가 보입니다.', 'The Venetian fortress on a headland jutting into the sea, with views over the old town from the top.', None),
 'corfu-h3': ('리스톤', 'Liston', '프랑스 지배 때 파리 리볼리 거리를 본떠 지은 아치 회랑으로, 카페가 늘어서 있습니다.', 'The arcade built under French rule after Paris’s Rue de Rivoli, lined with cafés.', None),
 'corfu-h4': (None, None, '수도원이 선 곶과 푸른 만들이 모인 해변으로, 배를 타고 해식 동굴을 둘러봅니다.', 'Bays and beaches around a monastery headland—take a boat into the sea caves.', None),
 'corfu-h5': (None, None, '오스트리아의 엘리자베트 황후(시시)가 지은 별궁으로, 아킬레우스 조각이 선 정원에서 바다가 보입니다.', 'The palace built by Empress Elisabeth (Sisi) of Austria, its gardens of Achilles statues overlooking the sea.', None),
 'zakynthos-h1': ('나바지오 해변 (난파선 해변)', 'Navagio (Shipwreck) Beach', '하얀 절벽에 둘러싸인 만에 녹슨 난파선이 놓인 해변으로, 배나 위쪽 전망대에서 봅니다.', 'The cove ringed by white cliffs with a rusting wreck on the sand, seen from a boat or the clifftop lookout.', None),
 'zakynthos-h2': (None, None, '섬 북쪽 해안 절벽의 바다 동굴들로, 작은 배로 들어가면 물빛이 새파랗게 빛납니다.', 'The sea caves in the northern cliffs, where the water glows bright blue when you enter by small boat.', None),
 'zakynthos-h3': (None, None, '라가나스만의 작은 섬으로, 붉은바다거북이 알을 낳는 보호구역입니다.', 'The islet in Laganas Bay, a protected nesting site for loggerhead turtles.', None),
 'zakynthos-h4': (None, None, '1953년 지진 뒤 다시 지은 섬의 항구 도시로, 솔로모스 광장과 성 디오니시오스 성당이 있습니다.', 'The island’s port town, rebuilt after the 1953 earthquake, with Solomos Square and the church of St Dionysios.', None),
 'nafplio-h1': (None, None, '18세기 베네치아가 지은 언덕 위 요새로, 계단 약 900개를 오르면 만과 구시가가 내려다보입니다.', 'The 18th-century Venetian hilltop fortress—climb some 900 steps for views over the bay and old town.', None),
 'nafplio-h2': ('부르치', 'Bourtzi', '항구 앞 작은 섬 위의 15세기 베네치아 요새로, 해 질 녘 모습이 아름답습니다.', 'The 15th-century Venetian castle on an islet off the harbour, lovely at sunset.', None),
 'nafplio-h3': ('신타그마 광장', 'Syntagma Square', '대리석 바닥의 구시가 중심 광장으로, 카페와 옛 모스크 건물이 둘러쌉니다.', 'The marble-paved square at the heart of the old town, ringed by cafés and old mosque buildings.', None),
 'nafplio-h4': ('아크로나플리아', 'Akronafplia', '구시가 바로 위 바위 곶의 옛 성벽 터로, 바다 전망이 좋습니다.', 'The old fortifications on the rocky headland above the old town, with sea views.', None),
 'nafplio-h5': (None, None, '구시가에서 걸어갈 수 있는 자갈 해변으로, 절벽 아래 바닷가 산책길로 이어집니다.', 'The pebble beach within walking distance of the old town, linked to a cliffside seaside path.', None),
 'olympia-h1': (None, None, '기원전 776년부터 고대 올림픽이 열린 제우스 성역으로, 신전과 운동장 유적이 소나무 숲에 흩어진 세계유산입니다.', 'Zeus’s sanctuary where the ancient Olympic Games were held from 776 BC, its temples and athletic grounds scattered among pines—a World Heritage site.', None),
 'olympia-h2': (None, None, '아치 터널을 지나 들어가는 고대 달리기 경기장으로, 192m 직선 트랙이 남아 있습니다.', 'The ancient running stadium entered through an arched tunnel, with its 192 m straight track.', None),
 'olympia-h3': (None, None, '올림피아에서 가장 오래된 신전으로, 지금도 올림픽 성화를 이 앞에서 채화합니다.', 'Olympia’s oldest temple, in front of which the Olympic flame is still lit.', None),
 'olympia-h4': (None, None, '고대 7대 불가사의인 거대한 제우스상이 있던 신전 터로, 쓰러진 기둥이 남아 있습니다.', 'The site of the temple that held the giant statue of Zeus, one of the Seven Wonders, with its fallen columns.', None),
 'olympia-h5': (None, None, '프락시텔레스의 헤르메스상과 제우스 신전 박공 조각 등 성역 출토품을 전시합니다.', 'Finds from the sanctuary, including Praxiteles’ Hermes and the pediment sculptures of the Temple of Zeus.', None),
 'mykonos-h1': (None, None, '바다 바로 위에 발코니를 낸 옛 선장 집들이 늘어선 동네로, 해 질 녘 바가 붐빕니다.', 'The row of old captains’ houses with balconies right over the sea, busy with sunset bars.', None),
 'mykonos-h2': (None, None, '항구 위 언덕에 줄지어 선 16세기 하얀 풍차들입니다.', 'The row of white 16th-century windmills on the hill above the harbour.', None),
 'mykonos-h3': (None, None, '하얀 집과 파란 문이 미로처럼 얽힌 항구 마을(호라)로, 골목에 부티크와 식당이 이어집니다.', 'The harbour town (Chora), a maze of white houses and blue doors with boutiques and restaurants.', None),
 'mykonos-h4': (None, None, '비치 클럽과 파티로 유명한 남쪽 해변입니다.', 'The south-coast beach famous for its beach clubs and parties.', None),
 'mykonos-h5': ('델로스', 'Delos', '아폴론이 태어났다는 섬 전체가 고대 성역 유적인 세계유산으로, 사자상 테라스가 유명합니다. 미코노스에서 배로 약 30분입니다.', 'The island where Apollo was born, entirely an ancient sanctuary and a World Heritage site, famous for its Terrace of the Lions; about 30 min by boat from Mykonos.', None),
 'santorini-h1': ('오이아', 'Oia', '칼데라 절벽에 하얀 집과 파란 돔 성당이 층층이 붙은 마을로, 해 질 녘 전망으로 유명합니다.', 'The village of white houses and blue-domed churches stacked on the caldera cliff, famous for its sunset views.', None),
 'santorini-h2': (None, None, '칼데라 절벽 위의 섬 중심 마을로, 옛 항구까지 케이블카나 계단으로 내려갑니다.', 'The island’s main village on the caldera rim, linked to the old port by cable car or steps.', None),
 'santorini-h3': (None, None, '붉은 화산암 절벽 아래의 작은 해변으로, 낙석 위험 때문에 들어가지 못할 때가 있습니다.', 'The small beach below red volcanic cliffs, sometimes closed because of rockfall.', None),
 'santorini-h4': (None, None, '기원전 17세기 화산 폭발로 화산재에 묻힌 청동기 도시 유적으로, 지붕 아래 2~3층 건물이 남아 있습니다.', 'The Bronze Age town buried by the 17th-century-BC eruption, its two- and three-storey buildings preserved under a roof.', None),
 'santorini-h5': ('와이너리', 'Wineries', '바구니처럼 둥글게 감아 키우는 포도나무로 아시르티코와 빈산토 와인을 만드는 와이너리에서 시음합니다.', 'Taste Assyrtiko and Vinsanto at wineries whose vines are trained into low basket-shaped coils.', 'Santo Wines Santorini'),
 'heraklion-h1': (None, None, '미노아 문명의 가장 큰 궁전 유적으로, 미로 전설의 무대이며 일부 벽화와 기둥을 복원해 두었습니다.', 'The largest palace of the Minoan civilisation, setting of the Labyrinth legend, with some frescoes and columns reconstructed.', None),
 'heraklion-h2': (None, None, '크노소스 벽화와 파이스토스 원반 등 미노아 유물을 세계에서 가장 많이 모은 박물관입니다.', 'The world’s greatest collection of Minoan finds, including the Knossos frescoes and the Phaistos Disc.', None),
 'heraklion-h3': ('쿨레스 요새', 'Koules Fortress', '옛 항구 방파제 끝의 16세기 베네치아 요새입니다.', 'The 16th-century Venetian fortress at the end of the old harbour mole.', None),
 'heraklion-h4': ('1866 거리 시장', '1866 Street market', '올리브유·치즈·허브·라키 가게가 늘어선 시장 거리입니다.', 'The market street of olive oil, cheese, herbs and raki shops.', '1866 Street Heraklion'),
 'heraklion-h5': ('모로시니 분수 (사자 광장)', 'Morosini Fountain (Lions Square)', '1628년 베네치아가 세운 사자 네 마리 분수로, 주변이 시내의 만남의 장소입니다.', 'The four-lion fountain the Venetians built in 1628, at the meeting point in the heart of town.', 'Morosini Fountain Heraklion'),
 'chania-h1': (None, None, '베네치아·오스만 시대 건물이 둘러싼 반달 모양 옛 항구로, 저녁 산책과 식당으로 붐빕니다.', 'The crescent-shaped old harbour ringed by Venetian and Ottoman buildings, busy with evening strolls and restaurants.', None),
 'chania-h2': (None, None, '방파제 끝의 16세기 베네치아 등대로, 항구를 따라 걸어갑니다.', 'The 16th-century Venetian lighthouse at the end of the breakwater, reached on foot along the harbour.', None),
 'chania-h3': (None, None, '그람부사 반도 끝의 얕은 석호로, 배나 비포장도로를 따라 차로 갑니다.', 'The shallow lagoon at the tip of the Gramvousa peninsula, reached by boat or by car on a dirt road.', None),
 'chania-h4': (None, None, '조개 부스러기로 분홍빛을 띤 모래와 얕은 바다로 유명한 남서쪽 해변입니다.', 'The south-western beach famous for its shell-pink sand and shallow water.', None),
 'chania-h5': (None, None, '국립공원 안의 약 16km 협곡 트레킹으로, 5~10월에만 열리고 바닷가 마을에서 배를 타고 돌아옵니다.', 'The roughly 16 km gorge hike in a national park, open May–October, ending at a seaside village from which you return by boat.', None),
 'rhodes-h1': (None, None, '성 요한 기사단이 쌓은 성벽으로 둘러싸인 중세 구시가로, 세계유산입니다.', 'The medieval old town ringed by the walls of the Knights of St John—a World Heritage site.', None),
 'rhodes-h2': ('기사단장의 궁전', 'Palace of the Grand Master', '기사단장이 살던 14세기 궁전으로, 이탈리아 지배 때 복원했고 모자이크 바닥이 있습니다.', 'The 14th-century palace of the Grand Masters, restored under Italian rule, with mosaic floors.', None),
 'rhodes-h3': (None, None, '하얀 마을 위 언덕에 아테나 신전이 선 아크로폴리스로, 바다 전망이 뛰어납니다.', 'The white village below an acropolis with a temple of Athena and sweeping sea views.', None),
 'rhodes-h4': ('만드라키 항구', 'Mandraki Harbour', '거상이 서 있었다고 전해지는 항구로, 입구 양쪽 기둥 위에 사슴 동상이 섰습니다.', 'The harbour where the Colossus is said to have stood, with deer statues on columns at its mouth.', None),
 'rhodes-h5': ('참비카 해변', 'Tsambika Beach', '언덕 위 수도원 아래의 넓은 모래 해변입니다.', 'The wide sandy beach below a hilltop monastery.', None),
}

ADD = {
 'athens': [
  (7, S('올림피아 제우스 신전', 'Temple of Olympian Zeus', '완공까지 600년 넘게 걸린 그리스 최대의 신전 터로, 높이 17m 기둥 15개가 남아 있습니다.', 'The ruins of Greece’s largest temple, which took over 600 years to finish; 15 of its 17 m columns still stand.', 'Temple of Olympian Zeus Athens', 30, 45, group=A_ACR)),
  (8, S('파나티나이코 경기장', 'Panathenaic Stadium', '대리석으로 지은 고대 경기장으로, 1896년 첫 근대 올림픽이 열렸습니다.', 'The all-marble ancient stadium where the first modern Olympics were held in 1896.', 'Panathenaic Stadium', 30, 45, group=A_SYN)),
  (9, S('국립 고고학 박물관', 'National Archaeological Museum', '아가멤논의 황금 가면과 안티키테라 기계 등 그리스 고대 유물을 가장 많이 모은 박물관입니다.', 'Greece’s greatest collection of antiquities, including the Mask of Agamemnon and the Antikythera mechanism.', 'National Archaeological Museum Athens', 150, 180, group=A_CEN)),
  (10, S('리카베투스 언덕', 'Mount Lycabettus', '시내에서 가장 높은 언덕으로, 푸니쿨라나 걸어서 올라 아크로폴리스와 바다를 내려다봅니다.', 'The city’s highest hill—ride the funicular or walk up for views over the Acropolis to the sea.', 'Mount Lycabettus', 60, 90, group=A_SYN)),
  (11, S('아나피오티카', 'Anafiotika', '아크로폴리스 바로 아래 하얀 집들이 붙은 작은 동네로, 키클라데스 섬 마을 같은 골목입니다.', 'The tiny quarter of white houses just below the Acropolis, with lanes like a Cycladic island village.', 'Anafiotika', 20, 30, group=A_PLA)),
  (12, S('로마 아고라와 바람의 탑', 'Roman Agora & Tower of the Winds', '로마 시대 시장 유적으로, 여덟 바람의 신을 새긴 1세기 대리석 시계탑이 있습니다.', 'The Roman-era marketplace with the 1st-century marble Tower of the Winds, carved with the eight wind gods.', 'Roman Agora Athens', 30, 45, group=A_PLA)),
  (13, S('베나키 박물관', 'Benaki Museum', '선사 시대부터 근대까지 그리스 미술과 생활 유물을 모은 저택 박물관으로, 옥상 카페가 있습니다.', 'A mansion museum of Greek art and daily life from prehistory to modern times, with a rooftop café.', 'Benaki Museum', 90, 120, group=A_SYN)),
  (14, S('케라메이코스', 'Kerameikos', '고대 아테네의 공동묘지와 성문 터로, 조각 묘비가 남아 있고 관광객이 적어 조용합니다.', 'The cemetery and city-gate ruins of ancient Athens, with carved grave markers and few crowds.', 'Kerameikos', 45, 60, group=A_PLA)),
  (15, S('필로파포스 언덕', 'Philopappos Hill', '아크로폴리스 맞은편의 소나무 언덕으로, 파르테논을 정면에서 보는 전망 산책길입니다.', 'The pine-covered hill facing the Acropolis, with walking paths and a head-on view of the Parthenon.', 'Philopappos Hill', 45, 60, group=A_ACR)),
  (16, S('국립 정원과 자피온', 'National Garden & Zappeion', '의회 뒤의 그늘진 정원과 신고전주의 전시관 자피온입니다.', 'The shady garden behind the parliament and the neoclassical Zappeion hall.', 'National Garden Athens', 30, 45, group=A_SYN)),
  (17, S('키클라데스 미술관', 'Museum of Cycladic Art', '단순한 형태로 유명한 키클라데스 대리석 조각상을 모은 박물관입니다.', 'The museum of the strikingly simple marble figurines of the Cycladic islands.', 'Museum of Cycladic Art', 60, 90, group=A_SYN)),
  (18, S('바르바키오스 중앙 시장', 'Varvakios Central Market', '고기·생선·채소 가게가 모인 활기찬 시장으로, 주변에 향신료와 올리브 가게가 있습니다.', 'The bustling market of meat, fish and produce, surrounded by spice and olive shops.', 'Varvakios Central Market Athens', 30, 45, group=A_CEN,
        n='일요일엔 쉽니다.|Closed on Sundays.')),
  (19, S('스타브로스 니아르코스 재단 문화 센터', 'Stavros Niarchos Foundation Cultural Center', '렌초 피아노가 설계한 국립 오페라·도서관 단지로, 공원과 운하, 옥상 전망대가 있습니다.', 'Renzo Piano’s national opera and library complex, with a park, a canal and a rooftop lookout.', 'Stavros Niarchos Foundation Cultural Center', 60, 90, group=A_OUT,
        n='시내에서 무료 셔틀버스나 트램으로 갑니다.|Reach it from the centre by free shuttle bus or tram.')),
 ],
 'thessaloniki': [
  (6, S('갈레리우스 개선문', 'Arch of Galerius', '4세기 로마 황제 갈레리우스의 승리를 새긴 개선문으로, 로툰다로 이어지는 길목에 있습니다.', 'The 4th-century triumphal arch carved with Emperor Galerius’s victories, on the way up to the Rotunda.', 'Arch of Galerius', 15, 20)),
  (7, S('성 디미트리오스 성당', 'Church of Saint Demetrius', '도시의 수호성인을 모신 비잔틴 성당으로, 지하 납골당과 모자이크가 있는 세계유산입니다.', 'The Byzantine church of the city’s patron saint, with its crypt and mosaics—a World Heritage site.', 'Hagios Demetrios Thessaloniki', 45, 60)),
  (8, S('테살로니키 고고학 박물관', 'Archaeological Museum of Thessaloniki', '마케도니아 왕국의 황금 장신구와 데르베니 크라테르 등을 전시합니다.', 'Macedonian gold and the Derveni Krater are among its treasures.', 'Archaeological Museum of Thessaloniki', 90, 120)),
  (9, S('비잔틴 문화 박물관', 'Museum of Byzantine Culture', '이콘과 모자이크, 생활 유물로 비잔틴 제국의 문화를 보여 주는 박물관입니다.', 'Icons, mosaics and everyday objects showing the culture of the Byzantine Empire.', 'Museum of Byzantine Culture', 60, 90)),
  (10, S('카파니 시장', 'Kapani Market', '올리브·치즈·향신료·생선 가게가 모인 옛 시장 골목입니다.', 'The old market lanes of olives, cheese, spices and fish.', 'Kapani Market Thessaloniki', 30, 45)),
 ],
 'rhodes': [
  (6, S('기사의 거리', 'Street of the Knights', '기사단 출신 지역별 숙소(오베르주)가 늘어선 중세 돌길입니다.', 'The medieval cobbled street lined with the inns of the knights from each homeland.', 'Street of the Knights Rhodes', 20, 30)),
  (7, S('로도스 고고학 박물관', 'Archaeological Museum of Rhodes', '기사단 병원 건물에 들어선 박물관으로, ‘로도스의 아프로디테’ 조각이 있습니다.', 'The museum in the Knights’ hospital, home to the Aphrodite of Rhodes.', 'Archaeological Museum of Rhodes', 60, 90)),
  (8, S('로도스 아크로폴리스 (몬테 스미스)', 'Acropolis of Rhodes (Monte Smith)', '아폴론 신전 기둥과 경기장이 남은 언덕으로, 해 질 녘 바다 전망이 좋습니다.', 'The hill with columns of a temple of Apollo and a stadium, with sea views at sunset.', 'Acropolis of Rhodes', 45, 60)),
 ],
 'heraklion': [
  (6, S('베네치아 성벽과 카잔차키스 묘', 'Venetian walls & Kazantzakis’s grave', '시내를 둘러싼 베네치아 성벽 보루 위에 ‘그리스인 조르바’의 작가 카잔차키스가 묻혀 있습니다.', 'The Venetian walls around the town, on whose Martinengo bastion lies Nikos Kazantzakis, author of Zorba the Greek.', 'Tomb of Nikos Kazantzakis', 30, 45)),
  (7, S('성 티투스 성당', 'Church of Saint Titus', '크레타의 첫 주교 성 티투스를 모신 성당으로, 오스만 시대엔 모스크였습니다.', 'The church of St Titus, Crete’s first bishop, a mosque in Ottoman times.', 'Agios Titos Heraklion', 15, 20)),
 ],
 'santorini': [
  (6, S('스카로스 바위', 'Skaros Rock', '이메로비글리 앞 칼데라로 튀어나온 바위 곶으로, 옛 성채 터까지 걸어갑니다.', 'The rocky headland jutting into the caldera at Imerovigli, with a walk out to the site of an old castle.', 'Skaros Rock', 60, 90)),
  (7, S('고대 티라', 'Ancient Thera', '메사 부노 산꼭대기의 고대 도시 유적으로, 양쪽 바다가 내려다보입니다.', 'The ruins of an ancient city on the summit of Mesa Vouno, with views down to the sea on both sides.', 'Ancient Thera', 90, 120)),
  (8, S('피르고스', 'Pyrgos', '섬 한가운데 언덕 위 성채 마을로, 관광객이 적고 골목이 조용합니다.', 'The fortified hilltop village in the middle of the island, with quiet lanes and few crowds.', 'Pyrgos Santorini', 45, 60)),
 ],
 'corfu': [
  (6, S('성 스피리돈 성당', 'Church of Saint Spyridon', '섬의 수호성인 성 스피리돈의 유해를 모신 성당으로, 붉은 돔 종탑이 구시가 어디서나 보입니다.', 'The church holding the relics of St Spyridon, the island’s patron, its red-domed bell tower visible across the old town.', 'Saint Spyridon Church Corfu', 15, 20)),
  (7, S('카노니와 생쥐섬', 'Kanoni & Mouse Island', '석호 위 수도원과 작은 섬 폰티코니시가 내려다보이는 전망 지점으로, 머리 위로 비행기가 착륙합니다.', 'The lookout over a lagoon monastery and the islet of Pontikonisi, with planes landing just overhead.', 'Kanoni Corfu', 45, 60)),
  (8, S('신 요새', 'New Fortress', '16세기 베네치아가 구시가 서쪽에 쌓은 요새로, 성벽 위에서 항구가 보입니다.', 'The 16th-century Venetian fortress west of the old town, with views over the port from its walls.', 'New Fortress Corfu', 45, 60)),
  (9, S('스피아나다 광장', 'Spianada Square', '구시가와 구 요새 사이의 큰 광장으로, 영국 지배 때부터 크리켓 경기가 열립니다.', 'The great square between the old town and the Old Fortress, where cricket has been played since British rule.', 'Spianada Square Corfu', 20, 30)),
 ],
 'chania': [
  (6, S('피르카스 요새와 해양 박물관', 'Firkas Fortress & Maritime Museum', '항구 입구의 베네치아 요새로, 안에 크레타 해양 박물관이 있습니다.', 'The Venetian fort at the harbour mouth, housing the Maritime Museum of Crete.', 'Maritime Museum of Crete', 45, 60)),
 ],
 'mykonos': [
  (6, S('파나기아 파라포르티아니', 'Panagia Paraportiani', '다섯 예배당이 하나로 붙은 하얀 성당으로, 섬에서 가장 사진이 많이 찍히는 건물입니다.', 'The white church of five chapels fused into one, the island’s most photographed building.', 'Panagia Paraportiani', 10, 15)),
 ],
 'meteora': [
  (6, S('성 스테파노스 수녀원', 'Monastery of St Stephen', '칼람바카 쪽 바위 위의 수녀원으로, 다리를 건너 계단 없이 들어갈 수 있습니다.', 'The convent on the rock above Kalambaka, entered by a bridge with no stairs to climb.', 'Holy Monastery of St. Stephen Meteora', 30, 45)),
 ],
 'nafplio': [
  (8, S('네메아', 'Nemea', '고대 네메아 경기 유적과 제우스 신전이 있고, 주변은 아기오르기티코 포도로 유명한 와인 산지여서 와이너리에서 시음합니다.', 'Home to the ancient Nemean Games stadium and a temple of Zeus, in a wine region famous for its Agiorgitiko grapes—taste at the wineries.', 'Ancient Nemea', 180, 240, group=DAY,
        n='나플리오에서 차로 약 40분입니다.|About 40 min by car from Nafplio.')),
 ],
 'zakynthos': [
  (5, S('케리 절벽', 'Keri cliffs', '섬 남서쪽 끝의 높은 석회암 절벽과 등대로, 해 질 녘 전망이 유명합니다.', 'The tall limestone cliffs and lighthouse at the island’s south-western tip, famous for sunset views.', 'Keri Lighthouse Zakynthos', 45, 60, group=DAY,
        n='자킨토스 타운에서 차로 약 30분입니다.|About 30 min by car from Zakynthos Town.')),
 ],
 'sounion': [
  (5, S('라브리오', 'Lavrio', '고대 아테네의 은광이 있던 항구 마을로, 광물 박물관과 옛 광산 터가 있습니다.', 'The port town of ancient Athens’s silver mines, with a mineral museum and old mine workings.', 'Lavrio Mineralogical Museum', 60, 90)),
 ],
}

IT = [
 ("  athens: [1, 2, 3, 6, 5, 4],\n",
  "  athens: {\n    days: [\n      ['아크로폴리스와 플라카|Acropolis & Plaka', 1, 2, 11, 3, 12, 4, 5, 14],\n      ['신타그마와 콜로나키|Syntagma & Kolonaki', 6, 16, 7, 8, 13, 17, 10],\n      ['박물관과 시장|Museums & market', 9, 18, 15],\n    ],\n    trips: [['스타브로스 니아르코스 센터|SNF Cultural Center', 19]],\n  },\n"),
 ("  thessaloniki: [2, 1, 5, 4, 3],\n",
  "  thessaloniki: { days: [['해안과 시장|Seafront & markets', 2, 10, 1, 5, 8, 9], ['로마 유적과 윗마을|Roman sites & the Upper Town', 6, 4, 7, 3]] },\n"),
 ("  rhodes: { days: [['', 4, 2, 1]], trips: [['참비카 해변과 린도스|Tsambika & Lindos', 5, 3]] },\n",
  "  rhodes: { days: [['', 4, 1, 6, 2, 7, 8]], trips: [['참비카 해변과 린도스|Tsambika & Lindos', 5, 3]] },\n"),
 ("  heraklion: [1, 2, 4, 3],\n", "  heraklion: { days: [['', 2, 5, 7, 4, 3, 6]], trips: [['크노소스|Knossos', 1]] },\n"),
 ("  santorini: [4, 3, 5, 2, 1],\n", "  santorini: { days: [['피라·이메로비글리와 오이아|Fira, Imerovigli & Oia', 2, 6, 1], ['남쪽: 유적과 와이너리|The south: ruins & wineries', 4, 3, 7, 8, 5]] },\n"),
 ("  mykonos: { days: [['', 3, 1, 2, 4]], trips: [['델로스|Delos', 5]] },\n",
  "  mykonos: { days: [['', 3, 6, 1, 2, 4]], trips: [['델로스|Delos', 5]] },\n"),
 ("  meteora: [1, 2, 3, 4, 5],\n", "  meteora: [1, 2, 3, 4, 6, 5],\n"),
 ("  nafplio: { days: [['', 3, 4, 1, 5, 2]], trips: [['미케네와 에피다우로스|Mycenae & Epidaurus', 6, 7]] },\n",
  "  nafplio: { days: [['', 3, 4, 1, 5, 2]], trips: [['미케네와 에피다우로스|Mycenae & Epidaurus', 6, 7], ['네메아|Nemea', 8]] },\n"),
 ("      ['블루 케이브와 나바요|Blue Caves & Navagio', 2, 1],\n      ['마라토니시|Marathonisi', 3],\n",
  "      ['블루 케이브와 나바지오|Blue Caves & Navagio', 2, 1],\n      ['마라토니시|Marathonisi', 3],\n      ['케리 절벽|Keri cliffs', 5],\n"),
 ("  sounion: [4, 3, 1, 2],\n", "  sounion: [4, 3, 5, 1, 2],\n"),
 ("    days: [['', 3, 2, 1]],\n    trips: [\n      ['아킬레이온|Achilleion', 5],",
  "    days: [['', 9, 3, 6, 1, 2, 8, 7]],\n    trips: [\n      ['아킬레이온|Achilleion', 5],"),
 ("  chania: {\n    days: [['', 1, 2]],", "  chania: {\n    days: [['', 1, 6, 2]],"),
]

GROUPED = {'athens': {1: A_ACR, 2: A_ACR, 7: A_ACR, 15: A_ACR, 3: A_PLA, 11: A_PLA, 12: A_PLA, 4: A_PLA, 5: A_PLA, 14: A_PLA,
                      6: A_SYN, 16: A_SYN, 8: A_SYN, 13: A_SYN, 17: A_SYN, 10: A_SYN, 9: A_CEN, 18: A_CEN, 19: A_OUT},
           'thessaloniki': {2: T_SEA, 10: T_SEA, 1: T_SEA, 5: T_SEA, 8: T_SEA, 9: T_SEA, 6: T_UP, 4: T_UP, 7: T_UP, 3: T_UP}}
ORDER = {'athens': [1, 2, 7, 15, 3, 11, 12, 4, 5, 14, 6, 16, 8, 13, 17, 10, 9, 18, 19],
         'thessaloniki': [2, 10, 1, 5, 8, 9, 6, 4, 7, 3]}
SMALL = ['meteora', 'delphi', 'sounion', 'hydra', 'aegina', 'zakynthos', 'olympia', 'chania', 'naxos', 'santorini', 'heraklion',
         'mykonos', 'rhodes', 'corfu', 'nafplio']

GR_OLD = """    cityIds: ['thessaloniki', 'meteora', 'corfu', 'athens', 'sounion', 'hydra', 'aegina', 'delphi', 'zakynthos', 'nafplio', 'olympia', 'mykonos', 'naxos', 'santorini', 'heraklion', 'chania', 'rhodes'],
    cityGroups: [
      { title: { ko: '북부', en: 'Northern Greece' }, cityIds: ['thessaloniki', 'meteora', 'corfu'] },
      { title: { ko: '중부', en: 'Central Greece' }, cityIds: ['athens', 'sounion', 'hydra', 'aegina', 'delphi', 'zakynthos'] },
      { title: { ko: '남부', en: 'Southern Greece' }, cityIds: ['nafplio', 'olympia', 'mykonos', 'naxos', 'santorini', 'heraklion', 'chania', 'rhodes'] },
    ],
"""
GR_NEW = """    cityIds: ['athens', 'sounion', 'aegina', 'hydra', 'nafplio', 'olympia', 'delphi', 'meteora', 'thessaloniki', 'corfu', 'zakynthos', 'mykonos', 'naxos', 'santorini', 'heraklion', 'chania', 'rhodes'],
    cityGroups: [
      { title: { ko: '아테네와 근교', en: 'Athens & around' }, cityIds: ['athens', 'sounion', 'aegina', 'hydra'] },
      { title: { ko: '펠로폰네소스', en: 'Peloponnese' }, cityIds: ['nafplio', 'olympia'] },
      { title: { ko: '중부·북부 본토', en: 'Central & northern mainland' }, cityIds: ['delphi', 'meteora', 'thessaloniki'] },
      { title: { ko: '이오니아 제도', en: 'Ionian Islands' }, cityIds: ['corfu', 'zakynthos'] },
      { title: { ko: '키클라데스 제도', en: 'Cyclades' }, cityIds: ['mykonos', 'naxos', 'santorini'] },
      { title: { ko: '크레타', en: 'Crete' }, cityIds: ['heraklion', 'chania'] },
      { title: { ko: '도데카니사 제도', en: 'Dodecanese' }, cityIds: ['rhodes'] },
    ],
"""


def main():
    c = rd('cities.ts')
    for hid, v in REWRITE.items():
        if v is None:
            continue
        ko, en, dko, den, q = v
        i = c.index(f'id: "{hid}"')
        j = c.index('\n      }', i)
        blk = c[i:j]
        if ko:
            blk = re.sub(r'name: \{[^\n]*\}', f'name: {{ ko: "{ko}", en: "{en}" }}', blk)
        blk = re.sub(r'description: \{[^\n]*\}', f'description: {{ ko: "{dko}", en: "{den}" }}', blk)
        if q:
            blk = re.sub(r'query=[^"]*"', 'query=' + urllib.parse.quote(q) + '"', blk)
        c = c[:i] + blk + c[j:]
    it = rd('itinerary-south.ts')
    for a, b in IT:
        assert it.count(a) == 1, a[:70]
        it = it.replace(a, b)
    wr('itinerary-south.ts', it)
    for cid, items in ADD.items():
        c = add_sights(c, cid, items, 'visit-med.ts')
    for cid, order in ORDER.items():
        by = blocks(c, cid)
        assert sorted(order) == sorted(by), (cid, sorted(by))
        c = reorder(c, cid, [(n, GROUPED[cid][n]) for n in order])
    for cid in SMALL:
        by = blocks(c, cid)
        m = re.search(rf"^  '?{cid}'?: (.*?)(?=^  [a-z'/])", it, re.M | re.S)
        trips = {int(x) for t in re.findall(r"trips: \[(.*)\]", m.group(1), re.S) for x in re.findall(r", (\d+)", t)}
        c = reorder(c, cid, [(n, DAY if n in trips else None) for n in itinerary_order(it, cid, set(by))])
    wr('cities.ts', c)
    k = rd('countries.ts')
    assert k.count(GR_OLD) == 1
    wr('countries.ts', k.replace(GR_OLD, GR_NEW))


if __name__ == '__main__':
    main()
