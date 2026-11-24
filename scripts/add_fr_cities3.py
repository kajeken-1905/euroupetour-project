#!/usr/bin/env python3
"""France 2nd pass new cities (2026-11-24, user picked all eight): Metz, Amiens, Rennes, Carnac, Orange, Bayonne, Uzès,
Vézelay. Facts from Wikipedia (Centre Pompidou-Metz largest temporary exhibition space outside Paris; Metz station
built under German rule, monument historique 1975; Porte des Allemands 13th-c. towers + 15th-c. bastions; Amiens
Cathedral largest Gothic cathedral in France; Jules Verne lived in Amiens; Parc du Thabor 10 ha; Champs Libres houses
the Musée de Bretagne; Carnac 3,000+ standing stones, largest collection in the world; Roman Theatre of Orange early
1st c. AD, home of the Chorégies; Arch of Orange on the via Agrippa; Uzès 25 km NNE of Nîmes; Vézelay basilica
1120-50, UNESCO; Fontenay Abbey founded 1118, UNESCO 1981). Times: Paris–Metz TGV ~1h24, Metz–Luxembourg ~45-55 min,
Paris Bercy–Sermizelles-Vézelay TER ~2h30-2h45, Auray–Carnac BreizhGo 619 ~30 min (web, operators/aggregators);
Biarritz–Bayonne bus 41, Nîmes–Uzès bus 54, Avignon–Uzès bus 65 (Transitous); other rail times rounded usual timings.
Run once."""
import add_daytrip_places3 as T
from add_daytrip_places3 import trip
from add_slovakia_cities import H

DAY = ('근교 당일치기', 'Day trip')
SNCF = "      ta('sncf'),\n"
RF = 'routes-fr.ts'
RA = r"^  \['paris', 'tours', .*\],\n"
MONTP = '파리 몽파르나스역|Paris Montparnasse'
CDG = "['Paris Charles de Gaulle (CDG)', '샤를 드 골 공항 (CDG)', '파리|Paris']"
MRS = "['Marseille Provence (MRS)', '마르세유 공항 (MRS)', '마르세유|Marseille']"
FREE = '무료입니다.|Free.'
VA = lambda h: rf"^  '{h}': v\(.*\),\n"
COMMON = dict(hubs_file='hubs-west.ts', hubs_before='  reims: {\n', itin_file='itinerary-fr.ts', itin_before='  giverny: ',
              visit_file='visit-fr.ts', visit_after=VA('reims-h6'), stay_before='  reims: [', transit_before='  reims: {', places=None)


def C(**k):
    d = dict(COMMON)
    d.update(k)
    return d


CITIES = [
    C(id='metz', country='fr', group_title='그랑테스트', after='nancy', ko='메스', en='Metz', native='Metz', lat=49.1197, lng=6.1764,
      blurb=['모젤강과 세유강이 만나는 로렌의 옛 수도로, 독일·룩셈부르크 국경이 가깝습니다. 노란 석회암 대성당의 거대한 스테인드글라스, 지붕이 물결치는 퐁피두 센터 메스, 독일 제국 시대에 지은 웅장한 기차역이 볼거리입니다.',
             'The old capital of Lorraine where the Moselle meets the Seille, close to the German and Luxembourg borders. See the vast stained glass of its yellow-stone cathedral, the wave-roofed Centre Pompidou-Metz and the grand station built under German rule.'],
      highlights=[
          H('메스 대성당', 'Metz Cathedral (Saint-Étienne)', '13세기에 짓기 시작해 1520년 완성된 고딕 대성당으로, 벽면을 가득 채운 스테인드글라스 덕에 ‘신의 등불’이라 불립니다. 샤갈의 창도 있습니다.', 'The Gothic cathedral begun in the 13th century and finished in 1520, called “the Good Lord’s lantern” for its walls of stained glass, including windows by Chagall.', 'Cathédrale Saint-Étienne de Metz', 45, 60, b='no', n='성당은 무료이고 보물실·탑은 유료입니다.|The cathedral is free; the treasury and tower are ticketed.'),
          H('퐁피두 센터 메스', 'Centre Pompidou-Metz', '파리 퐁피두 센터의 분관으로, 하얀 천막 같은 지붕 아래 국립 현대 미술관 소장품 전시가 열립니다. 파리 밖 프랑스 최대의 기획 전시 공간입니다.', 'The Paris Pompidou Centre’s branch, holding exhibitions from the national modern-art collection under a white tent-like roof; the largest temporary exhibition space in France outside Paris.', 'Centre Pompidou-Metz', 90, 150, c='tue'),
          H('메스 기차역', 'Metz-Ville station', '독일 제국 시대에 지은 로마네스크 리바이벌 양식의 거대한 역으로, 황제 빌헬름 2세의 방이 있어 ‘역 궁전’이라고도 부릅니다.', 'The huge Romanesque Revival station built under German rule, sometimes called the Station Palace for its apartments of Kaiser Wilhelm II.', 'Gare de Metz-Ville', 15, 20, b='no', n=FREE),
          H('독일인의 문', 'Porte des Allemands', '세유강을 건너는 다리 위 성문으로, 13세기 둥근 탑 두 개와 15세기 포대가 남은 중세 성벽의 일부입니다.', 'A fortified gate on a bridge over the Seille, with two 13th-century round towers and 15th-century gun bastions from the medieval walls.', 'Porte des Allemands Metz', 15, 20, b='no', n=FREE),
          H('생루이 광장', 'Place Saint-Louis', '중세 아케이드 집들이 늘어선 구시가 광장으로, 카페 테라스가 이어집니다.', 'The old-town square lined with medieval arcaded houses and café terraces.', 'Place Saint-Louis Metz', 20, 30, b='no', n=FREE),
          H('탕플 뇌프와 모젤 강변', 'Temple Neuf & the Moselle islands', '모젤강 섬 위에 선 신교 교회와, 그 둘레 강변 정원 ‘연인의 정원’을 따라 걷는 산책길입니다.', 'The Protestant church on an island in the Moselle and the riverside walk through the Jardin des Amoureux around it.', 'Temple Neuf Metz', 30, 45, b='no', n=FREE),
      ],
      hubs="    air: [['Luxembourg (LUX)', '룩셈부르크 공항 (LUX)', '룩셈부르크|Luxembourg'], " + CDG + "],\n    rail: [['Metz-Ville', '메스역', '파리행 TGV·룩셈부르크행 열차|TGVs to Paris, trains to Luxembourg']],\n",
      itinerary=[3, 2, 5, 1, 6, 4],
      season='봄·가을이 걷기 좋고, 겨울엔 크리스마스 마켓이 열립니다.|Spring and autumn are best for walking; there is a Christmas market in winter.',
      stay=[('구시가', 'Old town', 'Metz centre', '처음 가는 여행에 추천|Best for a first visit', '대성당과 생루이 광장 사이로, 기차역과 퐁피두 센터까지 걸어서 약 15분입니다.|Between the cathedral and Place Saint-Louis, about 15 min’s walk from the station and the Pompidou.')],
      routes=[(RF, RA, "  ['paris', 'metz', 'train', 85, true, '파리 동역|Paris Gare de l\\'Est', '메스역|Metz-Ville', 'TGV'],\n"
               "  ['nancy', 'metz', 'train', 40, false, '낭시역|Nancy', '메스역|Metz-Ville'],\n"
               "  ['luxembourg-city', 'metz', 'train', 50, false, '룩셈부르크역|Luxembourg', '메스역|Metz-Ville'],\n")],
      transit=dict(modes=['walk', 'bus'], ko='구시가는 걸어서 다니고, 굴절 버스 메틱스가 역과 시내를 잇습니다.', en='Walk the old town; the Mettis bus rapid transit links the station and the centre.'),
      apps=SNCF, daytrips=[]),
    C(id='amiens', country='fr', group_title='오드프랑스', after='lille', ko='아미앵', en='Amiens', native='Amiens', lat=49.8941, lng=2.2958,
      blurb=['파리 북쪽 120km 솜강 가의 도시로, 프랑스에서 가장 큰 고딕 대성당이 있습니다. 운하 사이 수상 정원 오르티요나주를 배로 둘러보고, 쥘 베른이 살던 집을 찾아갑니다.',
             'A city on the Somme 120 km north of Paris, home to France’s largest Gothic cathedral. Take a boat through the hortillonnages, the floating market gardens between the canals, and visit the house where Jules Verne lived.'],
      highlights=[
          H('아미앵 대성당', 'Amiens Cathedral', '프랑스에서 가장 큰 고딕 대성당으로, 유네스코 세계유산입니다. 서쪽 정면을 가득 메운 조각과 높이 솟은 신랑이 볼거리입니다.', 'France’s largest Gothic cathedral and a UNESCO World Heritage Site, with a west front crowded with sculpture and a soaring nave.', 'Cathédrale Notre-Dame d\'Amiens', 45, 60, b='no', n=FREE),
          H('오르티요나주 수상 정원', 'Hortillonnages (floating gardens)', '솜강 운하 사이로 이어진 채소밭과 정원 섬들로, 바닥이 평평한 전통 배를 타고 둘러봅니다.', 'Market-garden and garden islets between the canals of the Somme, toured in traditional flat-bottomed boats.', 'Hortillonnages Amiens', 60, 90, n='배 투어는 대략 봄부터 가을까지 운행합니다.|Boat tours run roughly from spring to autumn.'),
          H('쥘 베른의 집', 'Maison de Jules Verne', '쥘 베른이 살며 작품을 쓴 집으로, 탑이 있는 저택 안에 그의 서재와 소설 자료가 있습니다.', 'The house where Jules Verne lived and wrote, a turreted mansion with his study and material on his novels.', 'Maison de Jules Verne Amiens', 60, 75),
          H('생뢰 지구', 'Quartier Saint-Leu', '대성당 아래 운하를 따라 알록달록한 옛 집과 강변 카페가 늘어선 동네입니다.', 'The canal-side quarter below the cathedral, with colourful old houses and riverside cafés.', 'Quartier Saint-Leu Amiens', 45, 60, b='no', n=FREE),
          H('피카르디 박물관', 'Musée de Picardie', '19세기 궁전 건물의 미술·고고학 박물관으로, 리모델링을 마치고 다시 문을 열었습니다.', 'The art and archaeology museum in a 19th-century palace, reopened after a major renovation.', 'Musée de Picardie', 75, 90),
          H('솜 전투 기념지', 'Somme battlefields', '제1차 세계대전 솜 전투의 격전지로, 티에발 기념비와 연합군 묘지들이 흩어져 있습니다.', 'The First World War battlefields of the Somme, with the Thiepval Memorial and Allied cemeteries scattered across the countryside.', 'Thiepval Memorial', 240, 360, group=DAY, n='대중교통이 드물어 차나 투어가 편합니다.|Public transport is sparse; a car or tour is easiest.'),
      ],
      hubs="    air: [" + CDG + ", ['Paris Beauvais (BVA)', '보베 공항 (BVA)', '저가항공|low-cost flights']],\n    rail: [['Amiens', '아미앵역']],\n",
      itinerary={'days': [['', 1, 4, 2, 3, 5]], 'trips': [['솜 전투 기념지|Somme battlefields', 6]]},
      season='수상 정원 배가 다니는 4~10월이 좋고, 12월엔 북부 프랑스에서 손꼽히게 큰 크리스마스 마켓이 열립니다.|April–October, when the garden boats run; in December a big Christmas market fills the centre.',
      stay=[('대성당·생뢰 주변', 'Cathedral & Saint-Leu', 'Saint-Leu Amiens', '처음 가는 여행에 추천|Best for a first visit', '대성당과 운하 동네가 걸어서 닿고, 역까지 걸어서 약 15분입니다.|The cathedral and canal quarter on foot, about 15 min’s walk from the station.')],
      routes=[(RF, RA, "  ['paris', 'amiens', 'train', 70, false, '파리 북역|Paris Gare du Nord', '아미앵역|Amiens'],\n"
               "  ['lille', 'amiens', 'train', 80, false, '릴 플랑드르역|Lille-Flandres', '아미앵역|Amiens'],\n")],
      transit=dict(modes=['walk', 'bus'], ko='중심가는 걸어서 다닙니다. 수상 정원 배 선착장도 걸어서 닿습니다.', en='Walk the centre; the floating-garden boat landing is within walking distance.'),
      apps=SNCF, daytrips=[('paris', trip('amiens', '기차로 약 1시간 10분. 프랑스 최대 고딕 대성당과 수상 정원을 봅니다.|About 1 hr 10 by train: France’s largest Gothic cathedral and the floating gardens.'))]),
    C(id='rennes', country='fr', group_title='브르타뉴', after='saint-malo', ko='렌', en='Rennes', native='Rennes', lat=48.1113, lng=-1.6800,
      blurb=['브르타뉴 지방의 주도로, 일레강과 빌렌강이 만나는 대학 도시입니다. 기울어진 목조 가옥이 늘어선 구시가와 브르타뉴 의회 궁전, 토요일 아침의 큰 시장이 있고, 몽생미셸과 생말로로 가는 거점이 됩니다.',
             'Brittany’s regional capital, a university city where the Ille meets the Vilaine. It has an old town of leaning half-timbered houses, the Parliament of Brittany and a big Saturday-morning market, and is a base for Mont-Saint-Michel and Saint-Malo.'],
      highlights=[
          H('브르타뉴 의회 궁전', 'Parlement de Bretagne', '옛 브르타뉴 고등법원 건물로, 지금은 항소 법원입니다. 금박 천장의 대법정은 관광 안내소 가이드 투어로 봅니다.', 'The former Parliament of Brittany, now the Court of Appeal; its gilded Grand Chamber is visited on tourist-office guided tours.', 'Parlement de Bretagne Rennes', 60, 75, b='rec'),
          H('목조 가옥 구시가', 'Old town half-timbered houses', '생탄 광장과 샤피트르 거리 주변으로 15~17세기 목조 가옥이 기울어진 채 늘어서 있습니다.', 'Around Place Sainte-Anne and Rue du Chapitre, 15th–17th-century half-timbered houses lean over the lanes.', 'Place Sainte-Anne Rennes', 45, 60, b='no', n=FREE),
          H('리스 시장', 'Marché des Lices', '토요일 아침 목조 가옥 광장에 열리는 큰 시장으로, 브르타뉴 버터·굴·갈레트 소시지를 맛봅니다.', 'The big Saturday-morning market on the half-timbered Place des Lices, for Breton butter, oysters and galette-saucisse.', 'Marché des Lices Rennes', 60, 90, b='no', n='토요일 아침에만 열립니다.|Saturday mornings only.'),
          H('타보르 공원', 'Parc du Thabor', '프랑스식·영국식 정원과 식물원을 아우르는 10ha의 공원입니다.', 'A 10-hectare park mixing French and English gardens with a botanical garden.', 'Parc du Thabor', 45, 60, b='no', n=FREE),
          H('샹 리브르 (브르타뉴 박물관)', 'Les Champs Libres (Musée de Bretagne)', '도서관과 과학관이 함께 있는 문화 센터로, 브르타뉴 박물관에서 지방의 역사를 봅니다.', 'A cultural centre with a library and science centre, where the Musée de Bretagne tells the region’s history.', 'Les Champs Libres Rennes', 75, 90),
          H('렌 대성당', 'Rennes Cathedral (Saint-Pierre)', '구시가 서쪽의 대성당으로, 신고전주의 외관 안에 금빛 장식의 신랑이 있습니다.', 'The cathedral on the west side of the old town, with a gilded nave behind its Neoclassical front.', 'Cathédrale Saint-Pierre de Rennes', 20, 30, b='no', n=FREE),
      ],
      hubs="    air: [['Rennes Bretagne (RNS)', '렌 공항 (RNS)'], " + CDG + "],\n    rail: [['Rennes', '렌역', '파리행 TGV·생말로행 열차|TGVs to Paris, trains to Saint-Malo']],\n    bus: [['Rennes gare routière', '렌 버스터미널', '몽생미셸행 버스|buses to Mont-Saint-Michel']],\n",
      itinerary=[6, 2, 3, 1, 4, 5],
      season='토요일 시장에 맞춰 가면 좋고, 12월엔 록 축제 ‘트랑스 뮈지칼’이 열립니다.|Time a visit for the Saturday market; in December the Transmusicales rock festival takes over.',
      stay=[('구시가', 'Old town', 'Rennes centre', '처음 가는 여행에 추천|Best for a first visit', '목조 가옥 골목과 시장 광장이 걸어서 닿고, 역까지 지하철로 몇 정거장입니다.|Half-timbered lanes and the market square on foot, a few metro stops from the station.')],
      routes=[(RF, RA, "  ['paris', 'rennes', 'train', 90, true, '" + MONTP + "', '렌역|Rennes', 'TGV'],\n"
               "  ['rennes', 'saint-malo', 'train', 55, false, '렌역|Rennes', '생말로역|Saint-Malo'],\n"
               "  ['rennes', 'mont-saint-michel', 'bus', 70, false, '렌 버스터미널|Rennes bus station', '몽생미셸|Mont-Saint-Michel'],\n")],
      transit=dict(modes=['walk', 'metro', 'bus'], ko='구시가는 걸어서 다니고, 무인 지하철 2개 노선이 역과 시내를 잇습니다.', en='Walk the old town; two driverless metro lines link the station and the centre.'),
      apps=SNCF, daytrips=[]),
    C(id='carnac', country='fr', group_title='브르타뉴', after='quimper', ko='카르나크', en='Carnac', native='Carnac', lat=47.5847, lng=-3.0794,
      blurb=['브르타뉴 남쪽 해안의 마을로, 들판을 따라 3,000개 넘는 선사 시대 선돌이 줄지어 서 있습니다. 세계에서 가장 큰 거석 유적지이며, 바닷가 휴양지 카르나크플라주와 키브롱 반도의 거친 해안이 가깝습니다.',
             'A village on Brittany’s south coast where more than 3,000 prehistoric standing stones march across the fields, the largest collection of megaliths in the world, close to the beaches of Carnac-Plage and the wild coast of the Quiberon peninsula.'],
      highlights=[
          H('카르나크 열석', 'Carnac stones (alignments)', '메네크·케르마리오·케를레스캉 세 곳에 화강암 선돌이 수 km에 걸쳐 줄지어 선 세계 최대의 거석 유적입니다.', 'The world’s largest megalithic site, with rows of granite standing stones stretching for kilometres at Le Ménec, Kermario and Kerlescan.', 'Alignements de Kermario', 60, 120, n='보호를 위해 철에 따라 울타리 안은 가이드 투어로만 들어갑니다. 길가에서는 언제든 볼 수 있습니다.|To protect the stones, the enclosures are open only on guided tours in some seasons; you can always see them from the roadside.'),
          H('거석 안내 센터', 'Maison des Mégalithes', '메네크 열석 옆 안내 센터로, 가이드 투어를 신청하고 유적 설명을 듣습니다.', 'The visitor centre beside the Le Ménec alignments, where guided tours start.', 'Maison des Mégalithes Carnac', 30, 45),
          H('카르나크 선사 박물관', 'Musée de Préhistoire de Carnac', '열석과 고인돌에서 나온 도끼·장신구로 거석 시대 사람들의 삶을 보여 주는 박물관입니다.', 'A museum using axes and jewellery found at the stones and dolmens to show the lives of the megalith builders.', 'Musée de Préhistoire de Carnac', 60, 90),
          H('생미셸 고분', 'Tumulus Saint-Michel', '마을 위 거대한 선사 시대 무덤 언덕으로, 꼭대기 예배당 옆에서 열석 들판과 바다가 보입니다.', 'A huge prehistoric burial mound above the village; from the chapel on top you see the stone fields and the sea.', 'Tumulus Saint-Michel Carnac', 20, 30, b='no', n=FREE),
          H('카르나크플라주', 'Carnac-Plage', '마을 남쪽 소나무 숲 뒤로 이어진 모래 해변 휴양지입니다.', 'The resort of sandy beaches behind the pine woods south of the village.', 'Grande Plage Carnac', 60, 180, b='no', n=FREE),
          H('키브롱 반도 거친 해안', 'Quiberon Côte Sauvage', '좁은 반도 서쪽으로 이어진 바위 절벽 해안으로, 파도가 거세 수영은 금지된 곳이 많습니다.', 'The rocky cliff coast along the west side of the narrow Quiberon peninsula; the surf is strong and swimming is banned in many places.', 'Côte Sauvage Quiberon', 120, 180, group=DAY, b='no', n='카르나크에서 차로 약 20분이고 여름엔 버스가 다닙니다.|About 20 min by car from Carnac; buses run in summer.'),
      ],
      hubs="    air: [['Nantes Atlantique (NTE)', '낭트 공항 (NTE)', '낭트|Nantes'], ['Lorient Bretagne Sud (LRT)', '로리앙 공항 (LRT)', '운항편 적음|few flights']],\n    rail: [['Auray', '오레역', '619번 버스로 카르나크 약 30분|bus 619 to Carnac, about 30 min']],\n",
      itinerary={'days': [['', 2, 1, 4, 3, 5]], 'trips': [['키브롱 반도|Quiberon', 6]]},
      season='해변 철인 6~9월이 좋고, 겨울엔 열석 사이를 자유롭게 걷는 기간도 있습니다.|June–September is beach season; in winter there are periods when you can walk freely among the stones.',
      stay=[('카르나크 마을', 'Carnac village', 'Carnac', '열석 가까이|Near the stones', '선사 박물관과 열석이 가깝고 조용합니다.|Quiet, close to the museum and the stones.'),
            ('카르나크플라주', 'Carnac-Plage', 'Carnac-Plage', '해변 휴양|Beach stay', '해변 앞 호텔과 식당이 모여 있습니다.|Beachfront hotels and restaurants.')],
      routes=[(RF, RA, "  ['rennes', 'carnac', 'mixed', 110, false, '렌역|Rennes', undefined, '오레역까지 기차 후 619번 버스 약 30분|train to Auray, then bus 619 (about 30 min)'],\n")],
      transit=dict(modes=['walk', 'bus', 'taxi'], ko='마을과 열석 사이는 걷거나 자전거로 다니고, 오레역과는 619번 버스가 잇습니다.', en='Walk or cycle between the village and the stones; bus 619 links Auray station.'),
      apps='', daytrips=[]),
    C(id='orange', country='fr', group_title='프로방스알프코트다쥐르', after='avignon', ko='오랑주', en='Orange', native='Orange', lat=44.1381, lng=4.8075,
      blurb=['아비뇽 북쪽 21km의 프로방스 도시로, 1세기 초에 지은 로마 극장과 개선문이 유네스코 세계유산입니다. 무대 벽이 거의 온전히 남은 극장에서는 여름마다 오페라 축제가 열립니다.',
             'A Provençal town 21 km north of Avignon whose early-1st-century Roman theatre and triumphal arch are a UNESCO World Heritage Site; the theatre, its stage wall almost intact, hosts an opera festival every summer.'],
      highlights=[
          H('오랑주 고대 극장', 'Roman Theatre of Orange', '1세기 초에 지은 로마 극장으로, 높이 37m의 무대 벽과 아우구스투스 황제상이 거의 그대로 남았습니다. 여름 오페라 축제 ‘코레지’의 무대입니다.', 'The early-1st-century Roman theatre, with its 37 m stage wall and statue of Augustus almost intact; home of the summer Chorégies opera festival.', 'Théâtre antique d\'Orange', 60, 90),
          H('오랑주 개선문', 'Triumphal Arch of Orange', '옛 아그리파 가도 위에 세운 로마 개선문으로, 갈리아 전쟁 참전 용사를 기리는 전투 부조가 남아 있습니다.', 'The Roman arch on the old Via Agrippa, honouring veterans of the Gallic Wars, with battle reliefs still visible.', 'Arc de triomphe d\'Orange', 15, 20, b='no', n=FREE),
          H('생퇴트로프 언덕', 'Colline Saint-Eutrope', '극장 뒤 언덕 공원으로, 위에서 극장 무대와 오랑주 지붕들이 내려다보입니다.', 'The hilltop park behind the theatre, looking down into the stage and over the town’s rooftops.', 'Colline Saint-Eutrope Orange', 30, 45, b='no', n=FREE),
          H('오랑주 미술·역사 박물관', 'Musée d’Art et d’Histoire', '극장 맞은편 박물관으로, 로마 시대 토지 대장 석판 등을 전시합니다. 극장 표로 함께 들어갑니다.', 'The museum opposite the theatre, with Roman land-survey tablets among its finds; entry is included with the theatre ticket.', 'Musée d\'Art et d\'Histoire Orange', 30, 45),
          H('베종라로맹', 'Vaison-la-Romaine', '강을 사이에 두고 로마 시대 유적 지구와 언덕 위 중세 마을이 마주 보는 마을입니다.', 'A town where Roman ruins and a hilltop medieval village face each other across the river.', 'Vaison-la-Romaine', 180, 240, group=DAY, n='오랑주에서 차로 약 30분입니다.|About 30 min by car from Orange.'),
      ],
      hubs="    air: [" + MRS + "],\n    rail: [['Orange', '오랑주역', '아비뇽 약 15분|about 15 min to Avignon']],\n",
      itinerary={'days': [['', 1, 4, 3, 2]], 'trips': [['베종라로맹|Vaison-la-Romaine', 5]]},
      season='6~8월 고대 극장 오페라 축제 ‘코레지 도랑주’ 때가 특별하고, 봄·가을이 걷기 좋습니다.|The Chorégies opera festival in the ancient theatre (June–August) is special; spring and autumn are best for walking.',
      stay=[('구시가', 'Old town', 'Orange centre', '처음 가는 여행에 추천|Best for a first visit', '극장과 개선문이 걸어서 닿고 역까지도 걸어갑니다.|The theatre and arch on foot, the station within walking distance.')],
      routes=[(RF, RA, "  ['avignon', 'orange', 'train', 15, false, '아비뇽 상트르역|Avignon-Centre', '오랑주역|Orange'],\n")],
      transit=dict(modes=['walk', 'train'], ko='시내는 걸어서 다닙니다. 아비뇽과는 기차로 15분입니다.', en='Walk around town; Avignon is 15 min by train.'),
      apps=SNCF, daytrips=[('avignon', trip('orange', '기차로 약 15분. 무대 벽이 남은 로마 극장과 개선문을 봅니다.|About 15 min by train: the Roman theatre with its stage wall and the triumphal arch.'))]),
    C(id='bayonne', country='fr', group_title='누벨아키텐', after='biarritz', ko='바욘', en='Bayonne', native='Bayonne', lat=43.4929, lng=-1.4748,
      blurb=['프랑스 바스크 지방의 중심 도시로, 니브강과 아두르강이 만나는 곳에 고딕 대성당과 붉고 초록빛 덧창의 목조 가옥이 늘어서 있습니다. 초콜릿과 바욘 햄으로 유명하고, 7월 말엔 흰 옷에 빨간 스카프를 두르는 ‘바욘 축제’가 열립니다.',
             'The main town of the French Basque Country, where the Nive meets the Adour, with a Gothic cathedral and half-timbered houses with red and green shutters. It is famous for chocolate and Bayonne ham, and in late July the Fêtes de Bayonne fill the streets with white and red.'],
      highlights=[
          H('바욘 대성당', 'Bayonne Cathedral (Sainte-Marie)', '두 첨탑이 솟은 고딕 대성당으로, 산티아고 순례길의 일부로 유네스코 세계유산에 올랐습니다. 옆에 회랑이 있습니다.', 'The twin-spired Gothic cathedral, a UNESCO World Heritage Site as part of the routes to Santiago, with a cloister beside it.', 'Cathédrale Sainte-Marie de Bayonne', 30, 45, b='no', n=FREE),
          H('니브 강변과 그랑 바욘', 'Nive quays & Grand Bayonne', '니브강 양쪽으로 붉고 초록빛 덧창의 목조 가옥이 늘어선 구시가로, 강변 카페가 이어집니다.', 'The old town along both banks of the Nive, lined with half-timbered houses with red and green shutters and riverside cafés.', 'Quai Galuperie Bayonne', 45, 60, b='no', n=FREE),
          H('바스크 박물관', 'Musée Basque', '프티 바욘 지구의 박물관으로, 바스크 사람들의 생활·축제·펠로타 경기를 보여 줍니다.', 'The museum in Petit Bayonne on Basque life, festivals and the pelota game.', 'Musée Basque et de l\'histoire de Bayonne', 75, 90, c='mon'),
          H('초콜릿 가게 거리', 'Rue du Port-Neuf chocolatiers', '프랑스 초콜릿의 발상지로 알려진 바욘의 아케이드 거리로, 오래된 초콜릿 가게에서 진한 핫초콜릿을 마십니다.', 'The arcaded street of Bayonne, known as the birthplace of French chocolate, where historic chocolatiers serve thick hot chocolate.', 'Rue du Port-Neuf Bayonne', 30, 45, b='no'),
          H('에스플레트', 'Espelette', '처마 밑에 붉은 고추를 엮어 말리는 바스크 마을로, 에스플레트 고추의 고향입니다.', 'The Basque village where strings of red peppers dry under the eaves, home of the Espelette pepper.', 'Espelette', 120, 180, group=DAY, n='바욘에서 버스나 차로 약 30분입니다.|About 30 min from Bayonne by bus or car.'),
          H('라룬 산악열차', 'La Rhune rack railway', '프랑스·스페인 국경의 905m 라룬산 꼭대기까지 오르는 톱니바퀴 열차로, 바스크 해안과 피레네 산맥이 보입니다.', 'The rack railway climbing La Rhune (905 m) on the French–Spanish border, with views over the Basque coast and the Pyrenees.', 'Petit Train de la Rhune', 180, 240, group=DAY, b='rec', n='대략 봄부터 가을까지 운행합니다.|Runs roughly from spring to autumn.'),
      ],
      hubs="    air: [['Biarritz Pays Basque (BIQ)', '비아리츠 공항 (BIQ)']],\n    rail: [['Bayonne', '바욘역', '보르도·파리행 TGV|TGVs to Bordeaux, Paris']],\n",
      itinerary={'days': [['', 1, 2, 4, 3]], 'trips': [['에스플레트|Espelette', 5], ['라룬산|La Rhune', 6]]},
      season='7월 말 닷새 동안 열리는 ‘바욘 축제’가 가장 붐비고, 봄·가을이 걷기 좋습니다.|The five-day Fêtes de Bayonne in late July are the busiest time; spring and autumn are best for walking.',
      stay=[('그랑 바욘', 'Grand Bayonne', 'Grand Bayonne', '처음 가는 여행에 추천|Best for a first visit', '대성당과 강변이 걸어서 닿고, 역은 다리 건너 약 10분입니다.|The cathedral and quays on foot; the station is about 10 min across the bridge.')],
      routes=[(RF, RA, "  ['bordeaux', 'bayonne', 'train', 105, true, '보르도 생장역|Bordeaux-Saint-Jean', '바욘역|Bayonne', 'TGV'],\n"
               "  ['biarritz', 'bayonne', 'bus', 40, false],\n")],
      transit=dict(modes=['walk', 'bus'], ko='구시가는 걸어서 다니고, 버스가 비아리츠·앙글레로 이어집니다.', en='Walk the old town; buses run to Biarritz and Anglet.'),
      apps=SNCF, daytrips=[]),
    C(id='uzes', country='fr', group_title='옥시타니', after='nimes', ko='위제스', en='Uzès', native='Uzès', lat=44.0125, lng=4.4197,
      blurb=['님에서 북북동쪽 25km, 가르강 언덕 위의 작은 도시로, 공작 성과 아케이드 광장, 둥근 종탑이 남은 ‘프랑스 최초의 공작령’입니다. 토요일 시장이 유명하고 퐁뒤가르가 가깝습니다.',
             'A small hilltop town 25 km north-north-east of Nîmes, France’s first duchy, with its ducal castle, arcaded square and round bell tower. Its Saturday market is famous and the Pont du Gard is close by.'],
      highlights=[
          H('위제스 공작 성', 'Duché d’Uzès', '천 년 동안 위제스 공작 가문이 살아온 성으로, 탑에 올라 도시의 지붕들을 내려다봅니다.', 'The castle of the Dukes of Uzès, home to the family for a thousand years; climb its tower for views over the rooftops.', 'Duché d\'Uzès', 60, 75),
          H('에르브 광장', 'Place aux Herbes', '아케이드 집들이 둘러싼 광장으로, 토요일엔 프로방스 최고로 꼽히는 시장이 열립니다.', 'The arcaded square where one of Provence’s best-loved markets is held on Saturdays.', 'Place aux Herbes Uzès', 30, 60, b='no', n='큰 시장은 토요일 오전에 열립니다.|The big market is on Saturday mornings.'),
          H('페네스트렐 탑', 'Tour Fenestrelle', '생테오도리 대성당 옆 12세기 원통형 종탑으로, 창이 층층이 뚫려 있습니다.', 'The 12th-century cylindrical bell tower beside the cathedral of Saint-Théodorit, pierced with tiers of windows.', 'Tour Fenestrelle Uzès', 15, 20, b='no', n=FREE),
          H('중세 정원', 'Jardin médiéval', '중세 탑 안뜰에 약초와 식용 식물을 기르는 작은 정원입니다.', 'A small garden of medicinal and kitchen plants in the courtyard of medieval towers.', 'Jardin Médiéval Uzès', 30, 45),
          H('하리보 사탕 박물관', 'Musée du Bonbon Haribo', '젤리 회사 하리보의 사탕 박물관으로, 사탕 만드는 기계와 옛 광고를 보여 줍니다.', 'Haribo’s sweet museum, showing the machines and old advertising.', 'Musée du Bonbon Haribo Uzès', 60, 90),
          H('퐁뒤가르', 'Pont du Gard', '님까지 물을 대던 1세기 로마 수도교로, 3층 아치가 가르강을 건넙니다. 유네스코 세계유산입니다.', 'The 1st-century Roman aqueduct bridge that carried water to Nîmes, crossing the Gardon on three tiers of arches; a UNESCO World Heritage Site.', 'Pont du Gard', 120, 180, group=DAY, n='위제스에서 차로 약 20분입니다.|About 20 min by car from Uzès.'),
      ],
      hubs="    air: [['Nîmes Garons (FNI)', '님 공항 (FNI)', '운항편 적음|few flights'], " + MRS + "],\n    bus: [['Uzès gare routière', '위제스 버스터미널', '님·아비뇽행 버스|buses to Nîmes, Avignon']],\n",
      itinerary={'days': [['', 1, 2, 3, 4, 5]], 'trips': [['퐁뒤가르|Pont du Gard', 6]]},
      season='토요일 시장에 맞춰 가면 좋고, 늦봄과 가을이 걷기 좋습니다.|Go for the Saturday market; late spring and autumn are best for walking.',
      stay=[('구시가', 'Old town', 'Uzès centre', '처음 가는 여행에 추천|Best for a first visit', '성과 광장이 모두 걸어서 닿는 작은 구시가입니다.|A compact old town with the castle and squares on foot.')],
      routes=[(RF, RA, "  ['nimes', 'uzes', 'bus', 55, false],\n"
               "  ['avignon', 'uzes', 'bus', 65, false],\n")],
      transit=dict(modes=['walk', 'bus'], ko='마을은 걸어서 다닙니다. 님·아비뇽과는 버스로 오가고, 퐁뒤가르는 차가 편합니다.', en='Walk the town; buses run to Nîmes and Avignon, and a car is easiest for the Pont du Gard.'),
      apps='', daytrips=[('nimes', trip('uzes', '버스로 약 1시간. 공작 성과 에르브 광장의 토요일 시장을 봅니다.|About 1 hr by bus: the ducal castle and the Saturday market on the Place aux Herbes.'))]),
    C(id='vezelay', country='fr', group_title='부르고뉴프랑슈콩테', after='dijon', ko='베즐레', en='Vézelay', native='Vézelay', lat=47.4664, lng=3.7483,
      blurb=['부르고뉴 북쪽 언덕 위 마을로, 꼭대기에 12세기 로마네스크 걸작 생트마들렌 대성당이 서 있습니다. 마을과 대성당이 유네스코 세계유산이며, 산티아고 순례길의 출발지 가운데 하나입니다.',
             'A hilltop village in northern Burgundy crowned by the 12th-century Romanesque Basilica of Sainte-Marie-Madeleine. The village and basilica are a UNESCO World Heritage Site and one of the starting points of the pilgrim routes to Santiago.'],
      highlights=[
          H('생트마들렌 대성당', 'Basilica of Sainte-Marie-Madeleine', '1120~50년에 지은 부르고뉴 로마네스크의 걸작으로, 현관 안쪽 팀파눔 조각과 기둥머리 조각, 흑백 줄무늬 아치가 유명합니다.', 'A masterpiece of Burgundian Romanesque built in 1120–50, famous for the sculpted tympanum inside the narthex, its carved capitals and black-and-white striped arches.', 'Basilique Sainte-Marie-Madeleine de Vézelay', 60, 90, b='no', n='무료입니다. 미사 중엔 관람을 삼가 주세요.|Free; please avoid visiting during services.'),
          H('그랑 거리', 'Grande Rue', '언덕 아래에서 대성당까지 오르는 마을 중심 거리로, 옛 집과 화랑, 와인 가게가 늘어서 있습니다.', 'The main street climbing from the foot of the hill to the basilica, lined with old houses, galleries and wine shops.', 'Grande Rue Vézelay', 30, 45, b='no', n=FREE),
          H('대성당 뒤 테라스', 'Basilica terrace', '대성당 뒤 옛 수도원 터 테라스로, 퀴르 계곡과 부르고뉴 언덕이 한눈에 보입니다.', 'The terrace behind the basilica on the site of the old abbey, looking out over the Cure valley and the Burgundy hills.', 'Terrasse de la Basilique Vézelay', 15, 30, b='no', n=FREE),
          H('성벽 산책로', 'Ramparts walk', '마을을 둘러싼 옛 성벽 아래로 이어진 산책길입니다.', 'The path around the village below its old walls.', 'Promenade des Fossés Vézelay', 30, 45, b='no', n=FREE),
          H('퐁트네 수도원', 'Fontenay Abbey', '1118년 세워진 시토회 수도원으로, 유럽에서 가장 오래되고 온전한 시토회 수도원 가운데 하나입니다. 유네스코 세계유산입니다.', 'The Cistercian abbey founded in 1118, one of the oldest and most complete in Europe and a UNESCO World Heritage Site.', 'Abbaye de Fontenay', 90, 120, group=DAY, n='베즐레에서 차로 약 1시간입니다.|About 1 hr by car from Vézelay.'),
          H('샤블리', 'Chablis', '같은 이름의 화이트 와인으로 유명한 마을로, 와인 저장고에서 시음합니다.', 'The village of the famous white wine, for tastings in its cellars.', 'Chablis', 180, 240, group=DAY, n='베즐레에서 차로 약 50분입니다.|About 50 min by car from Vézelay.'),
      ],
      hubs="    air: [" + CDG + ", ['Paris Orly (ORY)', '파리 오를리 공항 (ORY)', '파리|Paris']],\n    rail: [['Sermizelles-Vézelay', '세르미젤-베즐레역', '마을까지 약 10km, 택시|about 10 km to the village, taxi']],\n",
      itinerary={'days': [['', 2, 1, 3, 4]], 'trips': [['퐁트네 수도원|Fontenay Abbey', 5], ['샤블리|Chablis', 6]]},
      season='봄부터 가을까지가 좋고, 7월 22일 막달라 마리아 축일 무렵 순례객이 많습니다.|Spring to autumn is best; pilgrims gather around the feast of Mary Magdalene on 22 July.',
      stay=[('베즐레 마을', 'Vézelay village', 'Vézelay', '처음 가는 여행에 추천|Best for a first visit', '대성당 아래 마을 안에 작은 호텔과 민박이 있습니다. 대중교통이 드물어 차가 편합니다.|Small hotels and B&Bs below the basilica; public transport is sparse, so a car is easiest.')],
      routes=[(RF, RA, "  ['paris', 'vezelay', 'mixed', 180, false, '파리 베르시역|Paris Bercy', '세르미젤-베즐레역|Sermizelles-Vézelay', '기차 약 2시간 30분 후 택시(약 10km)|train about 2 hr 30, then taxi (about 10 km)'],\n")],
      transit=dict(modes=['walk', 'taxi'], ko='마을은 걸어서 다닙니다. 역과 주변 마을은 택시나 차로 갑니다.', en='Walk the village; use a taxi or car for the station and nearby villages.'),
      apps='', daytrips=[]),
]

if __name__ == '__main__':
    T.CITIES = CITIES
    T.main()
