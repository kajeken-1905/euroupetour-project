#!/usr/bin/env python3
"""Cyprus step 1 (all four cities), 2026-11-17, user approved the plan and asked for every suggested sight.
Fixes: every one-line description and blurb; Limassol h5 'Wine museum area' becomes the Cyprus Wine Museum at Erimi.
New sights: Nicosia 9, Limassol 7, Paphos 9, Ayia Napa 5 (the Blue Lagoon is left to Polis in step 2). Nicosia and
Paphos get groups and 2-day itineraries; country city groups follow the regions. Places in the north (Selimiye etc.)
stay with Northern Cyprus. Limassol h5 was swapped afterwards for Agia Napa Cathedral (no free photo of the Wine Museum or the Carob Mill). Antiquities sites are ticketed; hours only where checked. Run once."""
import re, urllib.parse
from add_daytrip_places import rd, wr
from sight_order import add_sights, blocks, itinerary_order, reorder
from review_sk import S

DAY = ('근교 당일치기', 'Day trip')
K_W = ('구시가 서쪽 (레드라 거리)', 'Old town west (Ledra Street)')
K_E = ('구시가 동쪽·성벽 밖', 'Old town east & outside the walls')
K_KATO = ('카토 파포스 (항구·유적)', 'Kato Paphos (harbour & ruins)')
K_UP = ('구시가 (크티마)', 'Old town (Ktima)')
CH = '입장은 무료이고 어깨와 무릎을 가려야 합니다.|Free; cover shoulders and knees.'
ANT = '문화재청이 관리하는 유료 유적으로, 운영 시간은 계절에 따라 바뀌니 방문 전에 확인하세요.|A ticketed Department of Antiquities site; hours change with the season, so check before you go.'


def J2(a, b):
    return a.split('|')[0] + ' ' + b.split('|')[0] + '|' + a.split('|')[1] + ' ' + b.split('|')[1]


BLURB = {
 'nicosia': ('세계에서 마지막으로 나뉜 수도. 둥근 베네치아 성벽 안 구시가에 레드라 거리와 비잔틴 성당, 옛 저택 박물관이 모여 있고, 레드라 거리 검문소를 걸어서 넘으면 북쪽 구시가입니다.',
             'The world’s last divided capital, with Ledra Street, Byzantine churches and mansion museums inside the round Venetian walls; walk through the Ledra Street checkpoint to reach the northern old town.'),
 'limassol': ('남해안의 항구 도시. 올드 포트와 마리나, 해안 산책로 몰로스 사이에 중세 성과 구시가가 있고, 서쪽으로 고대 도시 쿠리온과 콜로시 성, 산 쪽으로 와인 마을 오모도스로 다녀옵니다.',
              'A south-coast port where a medieval castle and old town sit between the Old Port, the marina and the Molos seafront; day trips go west to ancient Kourion and Kolossi Castle and up to the wine village of Omodos.'),
 'paphos': ('도시 전체가 세계유산인 서해안 도시. 항구 옆 카토 파포스에 로마 빌라 모자이크와 왕들의 무덤이 있고, 근교에 아프로디테가 태어났다는 바위와 성역, 아바카스 협곡과 아카마스 해안이 있습니다.',
            'A west-coast town that is a World Heritage Site in its own right, with Roman villa mosaics and the Tombs of the Kings at Kato Paphos by the harbour, and nearby the rock and sanctuary of Aphrodite, the Avakas Gorge and the Akamas coast.'),
 'ayia-napa': ('동해안의 해변 휴양지. 니시 비치와 피그 트리 베이의 맑은 바다, 케이프 그레코의 절벽과 바다 동굴이 있고, 중세 수도원과 바다 박물관이 마을 한가운데 있습니다.',
               'An east-coast beach resort with the clear water of Nissi Beach and Fig Tree Bay, the cliffs and sea caves of Cape Greco, and a medieval monastery and sea museum in the middle of town.'),
}

REWRITE = {
 'nicosia-h1': (None, None, '1567년 베네치아가 쌓은 둥근 성벽으로, 11개의 화살촉 모양 보루가 구시가를 감싸고 해자 자리는 공원과 주차장이 됐습니다.', 'The round walls built by Venice in 1567, with eleven arrowhead bastions ringing the old town and the former moat now parks and car parks.'),
 'nicosia-h3': (None, None, '구시가를 남북으로 가로지르는 보행자 쇼핑 거리로, 끝의 검문소에서 여권을 보이고 북쪽으로 건너갈 수 있습니다.', 'The pedestrian shopping street running north through the old town; at its end, show your passport at the checkpoint to cross to the north.'),
 'nicosia-h4': (None, None, '키프로스 최대의 고고학 박물관으로, 신석기 유물부터 아기아 이리니의 테라코타 인형 수백 개까지 섬의 고대사를 보여 줍니다.', 'Cyprus’s largest archaeological museum, covering the island’s ancient past from Neolithic finds to the hundreds of terracotta figures from Agia Irini.'),
 'nicosia-h5': (None, None, '구시가 한가운데 광장의 1872년 성당으로, 옆에 대리석 기념비와 옛 학교 건물이 섭니다.', 'A church of 1872 on the square at the heart of the old town, beside a marble memorial and an old school building.'),
 'limassol-h1': (None, None, '옛 항구를 고친 산책 구역으로, 어선과 요트 사이에 해산물 식당과 카페가 늘어섭니다.', 'The old harbour turned into a promenade, with seafood restaurants and cafés between the fishing boats and yachts.'),
 'limassol-h2': (None, None, '구시가 한가운데의 14세기 성으로, 안에 중세 박물관이 있고 옥상에서 시내가 보입니다.', 'A 14th-century castle in the middle of the old town, housing the medieval museum, with views from the roof.'),
 'limassol-h3': (None, None, '올드 포트에서 이어지는 해안 공원과 산책로로, 야자수 사이에 조각 작품이 서 있습니다.', 'The seafront park and promenade running from the Old Port, with sculptures among the palm trees.'),
 'limassol-h4': (None, None, '옛 시장 건물을 둘러싼 광장으로, 저녁이면 바와 식당이 붐빕니다.', 'The square around the old market hall, busy with bars and restaurants in the evening.'),
 'limassol-h5': ('키프로스 와인 박물관', 'Cyprus Wine Museum', '에리미 마을의 작은 박물관으로, 5천 년 키프로스 와인 역사와 디저트 와인 코만다리아를 소개하고 시음할 수 있습니다.', 'A small museum in Erimi village telling five thousand years of Cypriot winemaking, including the dessert wine Commandaria, with tastings.', 'Cyprus Wine Museum Erimi'),
 'paphos-h1': (None, None, '항구 입구의 작은 요새로, 비잔틴 성채 자리에 오스만 시대에 다시 지었고 옥상에서 항구가 보입니다.', 'A small fort at the harbour entrance, rebuilt in Ottoman times on the site of a Byzantine castle, with views from the roof.'),
 'paphos-h2': (None, None, '고고학 공원 안 로마 귀족 저택들의 바닥 모자이크로, 디오니소스의 집과 테세우스의 집에 신화 장면이 생생하게 남아 있습니다.', 'The floor mosaics of Roman villas in the archaeological park, with vivid mythological scenes in the Houses of Dionysos and Theseus.'),
 'paphos-h3': (None, None, '바닷가 바위를 파서 만든 헬레니즘·로마 시대 무덤군으로, 기둥 늘어선 안뜰을 가진 무덤도 있습니다.', 'Hellenistic and Roman tombs cut into the seaside rock, some with columned courtyards.'),
 'paphos-h4': (None, None, '항구와 해안 산책로, 유적이 모인 아랫마을로, 식당과 호텔이 해변을 따라 이어집니다.', 'The lower town of the harbour, seafront promenade and ruins, with restaurants and hotels along the shore.'),
 'paphos-h5': (None, None, '아프로디테가 바다 거품에서 태어났다는 전설의 해안 바위로, 해 질 녘 풍경이 특히 아름답습니다.', 'The sea stack where Aphrodite is said to have risen from the foam, loveliest at sunset.'),
 'ayia-napa-h1': (None, None, '얕고 맑은 바다와 작은 모래섬이 있는 해변으로, 여름엔 비치 바와 파티로 붐빕니다.', 'A beach of shallow clear water with a little sandy islet, busy with beach bars and parties in summer.'),
 'ayia-napa-h2': (None, None, '마을 동쪽 해안 절벽에 파도가 판 동굴들로, 절벽 위를 걷거나 보트로 둘러봅니다.', 'Caves carved by the waves into the cliffs east of town, seen from the clifftop path or by boat.'),
 'ayia-napa-h3': (None, None, '마을 한가운데의 16세기 베네치아 시대 수도원으로, 바위를 파서 만든 교회와 안뜰의 오래된 나무가 있습니다.', 'A 16th-century Venetian-era monastery in the middle of town, with a church cut into the rock and an ancient tree in the courtyard.'),
 'ayia-napa-h4': (None, None, '바다를 내려다보는 언덕에 조각가들의 작품 수백 점을 세워 둔 야외 공원입니다.', 'An open-air park on a hill above the sea with hundreds of works by sculptors.'),
 'ayia-napa-h5': (None, None, '섬 남동쪽 끝의 국립공원으로, 석회암 절벽과 바다 아치, 다이빙하는 바위 사이로 산책로가 이어집니다.', 'The national park at the island’s south-eastern tip, with paths among limestone cliffs, sea arches and diving rocks.'),
}

ADD = {
 'nicosia': [
  (6, S('대주교 궁전과 비잔틴 박물관', 'Archbishop’s Palace & Byzantine Museum', '1950년대 지은 신비잔틴 양식 궁전으로, 안의 비잔틴 박물관에 9~18세기 성화와 교회 벽화가 모여 있습니다.', 'A neo-Byzantine palace of the 1950s; the Byzantine Museum inside holds icons and church frescoes from the 9th to 18th centuries.', 'Byzantine Museum Nicosia', 60, 90)),
  (7, S('성 요한 대성당', 'St John’s Cathedral', '1662년 지은 작은 성당으로, 18세기에 그린 벽화가 벽과 천장을 빈틈없이 덮고 있습니다.', 'A small cathedral of 1662 whose walls and ceiling are covered edge to edge with 18th-century frescoes.', 'St John Cathedral Nicosia', 15, 20, n=CH)),
  (8, S('라이키 게이토니아', 'Laiki Geitonia', '19세기 집들을 고친 보행자 골목으로, 공예품 가게와 선술집이 모여 있습니다.', 'A pedestrian quarter of restored 19th-century houses with craft shops and tavernas.', 'Laiki Geitonia Nicosia', 30, 45)),
  (9, S('레벤티스 시립 박물관', 'Leventis Municipal Museum', '니코시아의 역사를 선사 시대부터 현대까지 보여 주는 시립 박물관으로, 옛 지도와 의상, 생활 도구가 있습니다.', 'The city museum telling Nicosia’s story from prehistory to today, with old maps, costumes and household objects.', 'Leventis Municipal Museum', 45, 60)),
  (10, S('파마구스타 문', 'Famagusta Gate', '1567년 베네치아 성벽의 동쪽 문으로, 긴 아치 통로 안이 지금은 문화 센터입니다.', 'The eastern gate of the 1567 Venetian walls, whose long vaulted passage is now a cultural centre.', 'Famagusta Gate Nicosia', 15, 20)),
  (11, S('하지게오르가키스 코르네시오스 저택', 'Hadjigeorgakis Kornesios Mansion', '18세기 오스만 시대 통역관의 저택으로, 지금은 민속 박물관이며 나무 발코니와 손님방이 아름답습니다.', 'The 18th-century mansion of an Ottoman-era interpreter, now an ethnological museum with a fine wooden balcony and reception room.', 'Hadjigeorgakis Kornesios Mansion', 30, 45)),
  (12, S('엘레프테리아 광장', 'Eleftheria Square', '자하 하디드 건축사무소가 설계해 새로 단장한 광장으로, 베네치아 성벽과 해자를 흰 곡선 다리로 잇습니다.', 'The square redesigned by Zaha Hadid Architects, whose white curving walkways link the Venetian walls and moat.', 'Eleftheria Square Nicosia', 15, 20)),
  (13, S('샤콜라스 타워 전망대', 'Shacolas Tower Observatory', '레드라 거리 건물 꼭대기의 전망대로, 성벽 안 구시가와 남북으로 나뉜 도시가 한눈에 보입니다.', 'An observatory at the top of a building on Ledra Street, looking over the walled old town and the divided city.', 'Shacolas Tower Ledra Observatory', 20, 30,
        n='유료이며 운영 여부와 시간이 자주 바뀌니 현지에서 확인하세요.|Ticketed; opening often changes, so check locally.')),
  (14, S('마하이라스 수도원', 'Machairas Monastery', '12세기에 세운 산 속 수도원으로, 소나무 숲과 계곡 전망이 있습니다.', 'A mountain monastery founded in the 12th century, among pine forest with valley views.', 'Machairas Monastery', 60, 90, group=DAY,
        n=J2('니코시아에서 남서쪽 약 40km, 차로 갑니다.|About 40 km south-west of Nicosia by car.', CH))),
 ],
 'limassol': [
  (6, S('쿠리온 고대 도시', 'Kourion', '바다 위 절벽에 선 그리스·로마 도시 유적으로, 복원한 원형 극장과 에우스톨리오스 저택의 모자이크가 있습니다.', 'The Greco-Roman city on cliffs above the sea, with a restored theatre and the mosaics of the House of Eustolios.', 'Kourion archaeological site', 90, 120, group=DAY,
        n=J2('리마솔에서 서쪽 약 17km, 버스나 차로 갑니다.|About 17 km west of Limassol by bus or car.', ANT))),
  (7, S('콜로시 성', 'Kolossi Castle', '15세기 구호 기사단이 지은 3층 탑 성으로, 디저트 와인 코만다리아가 여기서 이름을 얻었습니다.', 'A three-storey keep built by the Knights Hospitaller in the 15th century, which gave its name to the dessert wine Commandaria.', 'Kolossi Castle', 30, 45, group=DAY,
        n=J2('리마솔에서 서쪽 약 14km입니다.|About 14 km west of Limassol.', ANT))),
  (8, S('아마투스 유적', 'Amathus', '고대 키프로스 도시 왕국의 유적으로, 해안 언덕에 신전과 아고라, 성벽 자리가 남아 있습니다.', 'The ruins of an ancient Cypriot city-kingdom, with a temple, agora and walls on a seaside hill.', 'Amathus archaeological site', 45, 60, group=DAY,
        n=J2('리마솔에서 동쪽 약 11km, 해안 버스로 갑니다.|About 11 km east of Limassol by the coastal bus.', ANT))),
  (9, S('리마솔 마리나', 'Limassol Marina', '구시가 옆의 요트 항구로, 물가에 식당과 상점이 늘어서 있습니다.', 'The yacht marina beside the old town, with restaurants and shops along the water.', 'Limassol Marina', 30, 45)),
  (10, S('아크로티리 소금 호수와 레이디스 마일', 'Akrotiri Salt Lake & Lady’s Mile', '겨울이면 홍학 무리가 찾는 소금 호수와 그 옆의 긴 모래 해변입니다.', 'A salt lake visited by flocks of flamingos in winter, beside a long sandy beach.', 'Akrotiri Salt Lake', 60, 120, group=DAY,
        n='리마솔에서 남서쪽 약 10km, 차로 갑니다. 홍학은 대체로 11~3월에 옵니다.|About 10 km south-west of Limassol by car; flamingos usually come November to March.')),
  (11, S('오모도스 마을', 'Omodos', '트로도스 산기슭의 와인 마을로, 돌길 광장 한가운데 성 십자가 수도원이 있습니다.', 'A wine village in the Troodos foothills with the Monastery of the Holy Cross in its cobbled square.', 'Omodos', 90, 120, group=DAY,
        n='리마솔에서 북서쪽 약 40km, 차로 갑니다.|About 40 km north-west of Limassol by car.')),
  (12, S('거버너스 비치', 'Governor’s Beach', '흰 석회암 절벽과 검은 모래가 대비되는 해변입니다.', 'A beach where white chalk cliffs meet dark sand.', 'Governors Beach Cyprus', 90, 180, group=DAY,
        n='리마솔에서 동쪽 약 30km, 차로 갑니다.|About 30 km east of Limassol by car.')),
 ],
 'paphos': [
  (6, S('아기오스 네오피토스 수도원', 'Agios Neophytos Monastery', '12세기 수도자 네오피토스가 절벽을 파서 만든 은둔처와 수도원으로, 동굴 안 벽화가 뛰어납니다.', 'The monastery and rock-cut hermitage of the 12th-century monk Neophytos, with outstanding frescoes inside the caves.', 'Agios Neophytos Monastery', 60, 75, group=DAY,
        n=J2('파포스에서 북쪽 약 9km, 버스나 차로 갑니다.|About 9 km north of Paphos by bus or car.', CH))),
  (7, S('사란타 콜로네스', 'Saranta Kolones', '고고학 공원 안의 비잔틴·중세 성채 터로, 13세기 지진으로 무너진 성벽과 기둥이 남아 있습니다.', 'The ruins of a Byzantine and medieval castle in the archaeological park, its walls and columns felled by a 13th-century earthquake.', 'Saranta Kolones Paphos', 20, 30)),
  (8, S('성 바울 기둥과 크리소폴리티사 교회', 'St Paul’s Pillar & Chrysopolitissa', '초기 기독교 대성당 터 위에 지은 13세기 교회로, 사도 바울이 매질을 당했다는 기둥이 있습니다.', 'A 13th-century church on the site of an early Christian basilica, with the pillar where St Paul is said to have been flogged.', 'St Pauls Pillar Paphos', 20, 30)),
  (9, S('구시가와 시립 시장', 'Old town & municipal market', '언덕 위 구시가 크티마의 광장과 상점가로, 다시 꾸민 시립 시장에 공예품과 먹거리 가게가 있습니다.', 'The squares and shopping streets of the hilltop old town, Ktima, with craft and food stalls in the renovated municipal market.', 'Paphos Municipal Market', 45, 60)),
  (10, S('코랄 베이', 'Coral Bay', '파포스 북쪽의 넓은 모래 해변으로, 바다가 얕고 잔잔합니다.', 'A wide sandy beach north of Paphos with shallow, calm water.', 'Coral Bay Cyprus', 120, 240, group=DAY,
        n='파포스에서 북쪽 약 12km, 시내버스로 갑니다.|About 12 km north of Paphos by city bus.')),
  (11, S('쿠클리아 아프로디테 성역', 'Sanctuary of Aphrodite, Kouklia', '고대 팔라이파포스의 아프로디테 신전 터로 세계유산이며, 중세 영주 저택의 박물관이 있습니다.', 'The site of Aphrodite’s temple at ancient Palaepaphos, a World Heritage Site, with a museum in a medieval manor house.', 'Sanctuary of Aphrodite Kouklia', 60, 75, group=DAY,
        n=J2('파포스에서 남동쪽 약 16km로, 아프로디테 바위와 함께 보기 좋습니다.|About 16 km south-east of Paphos, easily combined with Aphrodite’s Rock.', ANT))),
  (12, S('아바카스 협곡', 'Avakas Gorge', '석회암 절벽이 양쪽에서 좁아지는 협곡으로, 개울을 따라 약 2km를 걸어 들어갑니다.', 'A limestone gorge whose cliffs close in on both sides; walk about 2 km in along the stream.', 'Avakas Gorge', 120, 180, group=DAY,
        n='파포스에서 북쪽 약 30km, 차로 갑니다. 비 온 뒤에는 물이 불어 닫기도 합니다.|About 30 km north of Paphos by car; it may close after rain.')),
  (13, S('페야 바다 동굴과 에드로 III 난파선', 'Peyia Sea Caves & Edro III wreck', '해안 절벽에 파도가 판 동굴들과, 2011년 좌초한 화물선이 바로 앞 바다에 서 있는 풍경입니다.', 'Wave-cut caves in the coastal cliffs, with a cargo ship that ran aground in 2011 standing just offshore.', 'Sea Caves Peyia', 45, 60, group=DAY,
        n='파포스에서 북쪽 약 15km, 차로 갑니다.|About 15 km north of Paphos by car.')),
  (14, S('라라 베이', 'Lara Bay', '바다거북이 알을 낳는 보호 해변으로, 개발되지 않은 아카마스 해안이 이어집니다.', 'A protected beach where sea turtles nest, on the undeveloped Akamas coast.', 'Lara Bay Cyprus', 120, 180, group=DAY,
        n='파포스에서 북쪽 약 30km이며 마지막 구간이 비포장길이라 사륜구동차가 낫습니다. 거북 둥지 구역에는 들어가지 마세요.|About 30 km north of Paphos; the last stretch is unpaved, so a 4×4 is better. Keep out of the marked nesting areas.')),
 ],
 'ayia-napa': [
  (6, S('탈라사 해양 박물관', 'Thalassa Municipal Museum', '바다를 주제로 한 시립 박물관으로, 기원전 4세기 키레니아 난파선을 실물 크기로 복원한 배가 있습니다.', 'The town’s museum of the sea, with a full-size replica of the 4th-century BC Kyrenia shipwreck.', 'Thalassa Museum Ayia Napa', 45, 60)),
  (7, S('코노스 베이', 'Konnos Bay', '케이프 그레코 옆 절벽 사이에 숨은 작은 모래 만으로, 물이 맑고 잔잔합니다.', 'A small sandy cove hidden between cliffs beside Cape Greco, with clear, calm water.', 'Konnos Bay', 120, 180, group=DAY)),
  (8, S('피그 트리 베이 (프로타라스)', 'Fig Tree Bay (Protaras)', '프로타라스의 대표 해변으로, 고운 모래와 바로 앞 작은 섬까지 헤엄쳐 갈 수 있는 얕은 바다가 있습니다.', 'Protaras’s best-known beach, with fine sand and shallow water out to a little islet you can swim to.', 'Fig Tree Bay', 120, 240, group=DAY,
        n='아야나파에서 북쪽 약 10km, 버스로 갑니다.|About 10 km north of Ayia Napa by bus.')),
  (9, S('아기오이 아나르기로이 예배당', 'Agioi Anargyroi Chapel', '케이프 그레코의 바다 절벽 위에 선 하얀 작은 예배당으로, 아래에 바다 동굴이 있습니다.', 'A small white chapel on the sea cliffs of Cape Greco, with sea caves below.', 'Agioi Anargyroi Chapel Cape Greco', 20, 30, group=DAY)),
  (10, S('마크로니소스 무덤과 아기아 테클라', 'Makronissos Tombs & Ayia Thekla', '해안 바위를 파서 만든 헬레니즘·로마 시대 무덤들과, 근처 바닷가의 작은 아기아 테클라 예배당입니다.', 'Hellenistic and Roman tombs cut into the coastal rock, and the small seaside chapel of Ayia Thekla nearby.', 'Makronissos Tombs', 30, 45, group=DAY,
        n='아야나파에서 서쪽 약 4km입니다.|About 4 km west of Ayia Napa.')),
 ],
}

IT = [
 ("  nicosia: [4, 1, 5, 3],\n",
  "  nicosia: {\n    days: [\n      ['구시가 서쪽|Old town west', 12, 1, 8, 9, 3, 13, 5],\n      ['구시가 동쪽·박물관|Old town east & museums', 6, 7, 11, 10, 4],\n    ],\n    trips: [['마하이라스 수도원|Machairas', 14]],\n  },\n"),
 ("  limassol: { days: [['', 3, 1, 2, 4]], trips: [['와인 박물관|Wine Museum', 5]] },\n",
  "  limassol: {\n    days: [['', 3, 9, 1, 2, 4]],\n    trips: [\n      ['쿠리온·콜로시 성·와인 박물관|Kourion, Kolossi & Wine Museum', 6, 7, 5],\n      ['아마투스|Amathus', 8],\n      ['아크로티리 소금 호수|Akrotiri', 10],\n      ['오모도스|Omodos', 11],\n      ['거버너스 비치|Governor’s Beach', 12],\n    ],\n  },\n"),
 ("  paphos: { days: [['', 3, 2, 1, 4]], trips: [['아프로디테 바위|Aphrodite’s Rock', 5]] },\n",
  "  paphos: {\n    days: [\n      ['카토 파포스|Kato Paphos', 2, 7, 1, 4, 8],\n      ['구시가와 왕들의 무덤|Old town & Tombs', 9, 3],\n    ],\n    trips: [\n      ['아프로디테 바위와 쿠클리아|Aphrodite’s Rock & Kouklia', 5, 11],\n      ['아기오스 네오피토스|Agios Neophytos', 6],\n      ['페야 바다 동굴과 코랄 베이|Peyia & Coral Bay', 13, 10],\n      ['아바카스 협곡과 라라 베이|Avakas & Lara', 12, 14],\n    ],\n  },\n"),
 ("  'ayia-napa': [1, 3, 4, 2, 5],\n",
  "  'ayia-napa': {\n    days: [['', 1, 3, 6, 4, 2]],\n    trips: [\n      ['케이프 그레코와 코노스 베이|Cape Greco & Konnos', 5, 9, 7],\n      ['피그 트리 베이|Fig Tree Bay', 8],\n      ['마크로니소스와 아기아 테클라|Makronissos', 10],\n    ],\n  },\n"),
]

NIC = [(12, K_W), (1, K_W), (8, K_W), (9, K_W), (3, K_W), (13, K_W), (5, K_W), (6, K_E), (7, K_E), (11, K_E), (10, K_E), (4, K_E), (14, DAY)]
PAF = [(2, K_KATO), (7, K_KATO), (1, K_KATO), (4, K_KATO), (8, K_KATO), (9, K_UP), (3, K_UP), (5, DAY), (11, DAY), (6, DAY), (13, DAY), (10, DAY), (12, DAY), (14, DAY)]
SMALL = ['limassol', 'ayia-napa']

CY_OLD = "    cityIds: ['nicosia', 'limassol', 'paphos', 'ayia-napa'],\n"
CY_NEW = """    cityIds: ['nicosia', 'limassol', 'paphos', 'ayia-napa'],
    cityGroups: [
      { title: { ko: '니코시아·내륙', en: 'Nicosia & inland' }, cityIds: ['nicosia'] },
      { title: { ko: '남·서부 해안', en: 'South & west coast' }, cityIds: ['limassol', 'paphos'] },
      { title: { ko: '동부 해안', en: 'East coast' }, cityIds: ['ayia-napa'] },
    ],
"""


def main():
    c = rd('cities.ts')
    for cid, (ko, en) in BLURB.items():
        i = c.index(f'    id: "{cid}",')
        j = c.index('    highlights: [', i)
        blk = re.sub(r'blurb: \{\n      ko: ".*?",\n      en: ".*?",\n    \}',
                     f'blurb: {{\n      ko: "{ko}",\n      en: "{en}",\n    }}', c[i:j], flags=re.S)
        assert blk != c[i:j], cid
        c = c[:i] + blk + c[j:]
    for hid, t in REWRITE.items():
        ko, en, dko, den = t[:4]
        i = c.index(f'id: "{hid}"')
        j = c.index('\n      }', i)
        blk = c[i:j]
        if ko or en:
            m = re.search(r'name: \{ ko: "([^"]*)", en: "([^"]*)" \}', blk)
            blk = blk.replace(m.group(0), f'name: {{ ko: "{ko or m.group(1)}", en: "{en or m.group(2)}" }}')
        blk2 = re.sub(r'description: \{[^\n]*\}', f'description: {{ ko: "{dko}", en: "{den}" }}', blk)
        assert blk2 != blk, hid
        if len(t) > 4:
            blk2 = re.sub(r'mapsUrl: "[^"]*"', 'mapsUrl: "https://www.google.com/maps/search/?api=1&query=' + urllib.parse.quote(t[4]) + '"', blk2)
        c = c[:i] + blk2 + c[j:]
    it = rd('itinerary-south.ts')
    for a, b in IT:
        assert it.count(a) == 1, a[:70]
        it = it.replace(a, b)
    wr('itinerary-south.ts', it)
    for cid, items in ADD.items():
        c = add_sights(c, cid, items, 'visit-med.ts')
    c = reorder(c, 'nicosia', NIC)
    c = reorder(c, 'paphos', PAF)
    for cid in SMALL:
        by = blocks(c, cid)
        key = f"'{cid}'" if '-' in cid else cid
        m = re.search(rf"^  {re.escape(key)}: (.*?)(?=^  [a-z'/])", it, re.M | re.S)
        trips = {int(x) for t in re.findall(r"trips: \[(.*)\]", m.group(1), re.S) for x in re.findall(r", (\d+)", t)}
        order = itinerary_order(it, cid, set(by))
        c = reorder(c, cid, [(n, DAY if n in trips else None) for n in order])
    wr('cities.ts', c)
    k = rd('countries.ts')
    assert k.count(CY_OLD) == 1
    wr('countries.ts', k.replace(CY_OLD, CY_NEW))


if __name__ == '__main__':
    main()
