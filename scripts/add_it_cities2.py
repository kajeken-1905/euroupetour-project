#!/usr/bin/env python3
"""Italy 2nd pass new cities (2026-11-24, user picked): Lipari (Aeolian Islands) and Treviso.
Facts: Wikipedia (Lipari largest of the seven Aeolian Islands, comune of six of them, Metropolitan City of Messina;
Stromboli one of Italy's four active volcanoes; Vulcano gave its name to the word volcano, Nov 2021 evacuation over
gases; Treviso capital of its province, ~3,000 live inside the Venetian walls; Treviso Cathedral = St Peter; Villa
Barbaro at Maser by Palladio with Veronese frescoes, UNESCO 1996; Asolo 'city of a hundred horizons'; Castelfranco
walled town). Stromboli: Lipari ordinance no. 16 of 5 May 2025 — free walking only to 290 m, authorised guides to 400 m.
Times: Transitous Venezia S. Lucia–Treviso 37 min (regional), Padova–Treviso ~46 min (1 change); Liberty Lines
Milazzo–Lipari hydrofoil ~1 h (sources 50–75 min); Giuntabus Catania airport–Milazzo port ~2 h. Run once."""
import add_daytrip_places3 as T
from add_daytrip_places3 import trip
from add_slovakia_cities import H

DAY = ('근교 당일치기', 'Day trip')
TI = "      ta('trenitalia'),\n"
RW = 'routes-west.ts'
VA = lambda h: rf"^  '{h}': v\(.*\),\n"
CTA = "['Catania Fontanarossa (CTA)', '카타니아 공항 (CTA)', '밀라초 항구행 버스 약 2시간|bus to Milazzo port, about 2 hrs']"
VOLC = '화산 활동 경보에 따라 분화구 길이 닫히기도 하니 현지 안내를 확인하세요.|Crater paths can close when the volcanic alert level rises; check locally.'

CITIES = [
    dict(id='lipari', country='it', group_title='시칠리아', after='taormina', ko='리파리 (에올리에 제도)', en='Lipari (Aeolian Islands)', native='Lipari', lat=38.4669, lng=14.9549,
         blurb=['시칠리아 북쪽 티레니아해에 떠 있는 화산 제도 에올리에의 가장 큰 섬으로, 제도 여행의 거점입니다. 성채 언덕 위 대성당과 고고학 박물관, 항구 마을을 둘러보고, 배로 연기를 뿜는 스트롬볼리와 불칸섬, 와인 섬 살리나에 다녀옵니다. 에올리에 제도는 유네스코 세계유산입니다.',
                'The largest of the Aeolian Islands, the volcanic archipelago in the Tyrrhenian Sea north of Sicily, and the base for exploring them. See the cathedral and archaeological museum on the castle hill and the harbour town, then take boats to smoking Stromboli, Vulcano and the wine island of Salina. The Aeolian Islands are a UNESCO World Heritage Site.'],
         highlights=[
             H('리파리 성채', 'Lipari Castle (acropolis)', '항구 위 바위 언덕을 16세기 스페인 성벽이 둘러싼 옛 아크로폴리스로, 안에 대성당과 박물관, 고대 유적이 모여 있습니다.', 'The old acropolis on the rock above the harbour, ringed by 16th-century Spanish walls, with the cathedral, the museum and ancient remains inside.', 'Castello di Lipari', 45, 60, b='no', n='성채 안을 걷는 건 무료입니다.|Walking around the castle hill is free.'),
             H('에올리에 고고학 박물관', 'Aeolian Archaeological Museum', '성채 안 여러 건물에 나뉜 박물관으로, 신석기 시대 흑요석 도구부터 그리스 연극 가면 조각까지 제도의 역사를 보여 줍니다.', 'A museum spread over several buildings on the castle hill, telling the islands’ story from Neolithic obsidian tools to Greek theatre-mask figurines.', 'Museo Archeologico Regionale Eoliano Luigi Bernabò Brea', 90, 120),
             H('산 바르톨로메오 대성당', 'Lipari Cathedral (San Bartolomeo)', '성채 꼭대기의 대성당으로, 옆에 노르만 시대 수도원 회랑이 남아 있습니다.', 'The cathedral at the top of the castle hill, with a Norman-era cloister beside it.', 'Cattedrale di San Bartolomeo Lipari', 20, 30),
             H('마리나 코르타', 'Marina Corta', '성채 아래 작은 옛 항구로, 바다 쪽으로 튀어나온 작은 성당과 광장의 카페, 섬 일주 배 매표소가 모여 있습니다.', 'The small old harbour below the castle, with a little church on the jetty, café-lined square and the booths for island boat trips.', 'Marina Corta Lipari', 30, 45, b='no', n='무료입니다.|Free.'),
             H('콰트로키 전망대', 'Quattrocchi viewpoint', '섬 남서쪽 언덕길의 전망대로, 바다 위 바위 기둥들과 건너편 불칸섬이 한눈에 보입니다.', 'A roadside viewpoint in the island’s south-west, looking over sea stacks to Vulcano across the strait.', 'Belvedere Quattrocchi Lipari', 20, 30, b='no', n='섬 버스나 스쿠터로 갑니다.|Reach it by island bus or scooter.'),
             H('부석 해안', 'Pumice coast (Porticello)', '섬 북동쪽 옛 부석 채석장 일대로, 하얀 비탈과 맑은 바다가 대비를 이룹니다.', 'The former pumice quarries in the island’s north-east, where white slopes drop into clear water.', 'Porticello Lipari', 60, 120, b='no'),
             H('불칸섬', 'Vulcano', '리파리 바로 남쪽의 섬으로, ‘화산(volcano)’이라는 말이 이 섬 이름에서 왔습니다. 유황 냄새가 나는 분화구 언덕과 검은 모래 해변이 있습니다.', 'The island just south of Lipari that gave the word “volcano” its name, with a sulphur-scented crater cone and black-sand beaches.', 'Porto di Levante Vulcano', 240, 360, group=DAY, n='리파리에서 쾌속선으로 약 10분입니다. ' + VOLC.split('|')[0] + '|About 10 min by fast boat from Lipari. ' + VOLC.split('|')[1]),
             H('스트롬볼리', 'Stromboli', '이탈리아에 넷뿐인 활화산 섬 가운데 하나로, 지금도 쉬지 않고 분출합니다. 해 질 녘 배를 타고 용암이 흘러내리는 ‘불의 비탈’을 바다에서 봅니다.', 'One of Italy’s four active volcanoes, still erupting almost constantly. Take an evening boat to watch the Sciara del Fuoco glow from the sea.', 'Stromboli', 360, 480, group=DAY, b='rec',
               n='정상 등반은 금지돼 있고, 2025년 규정으로는 290m까지만 혼자 걸을 수 있으며 400m까지는 공인 가이드와 함께 오릅니다. 규정은 화산 활동에 따라 바뀝니다.|The summit is closed; under the 2025 rules you may walk alone only to 290 m, and to 400 m with an authorised guide. Rules change with volcanic activity.'),
             H('살리나', 'Salina', '두 화산 봉우리가 솟은 초록빛 섬으로, 달콤한 말바시아 와인과 케이퍼로 유명합니다.', 'The green island of twin volcanic peaks, known for sweet Malvasia wine and capers.', 'Santa Marina Salina', 300, 420, group=DAY, n='리파리에서 쾌속선으로 약 20~30분입니다.|About 20–30 min by fast boat from Lipari.'),
         ],
         hubs=f"    air: [{CTA}, ['Palermo Falcone Borsellino (PMO)', '팔레르모 공항 (PMO)', '팔레르모|Palermo']],\n    port: [['Porto di Lipari', '리파리 항구', '밀라초·메시나행 쾌속선|hydrofoils to Milazzo, Messina']],\n",
         hubs_file='hubs-west.ts', hubs_before='  taormina: {\n', itin_file='itinerary-it.ts', itin_before='  portofino: ',
         itinerary={'days': [['성채와 항구|Castle & harbour', 1, 3, 2, 4], ['섬 한 바퀴|Around the island', 5, 6]],
                    'trips': [['불칸섬|Vulcano', 7], ['스트롬볼리|Stromboli', 8], ['살리나|Salina', 9]]},
         season='배편이 많고 바다가 잔잔한 5~10월이 알맞고, 겨울엔 배가 줄고 바람에 결항이 잦습니다.|May–October, when boats are frequent and seas calm; in winter there are fewer sailings and wind often cancels them.',
         visit_file='visit-it.ts', visit_after=VA('taormina-h7'),
         stay=[('리파리 시내', 'Lipari town', 'Lipari', '처음 가는 여행에 추천|Best for a first visit', '배가 닿는 마리나 룽가와 마리나 코르타 사이로, 섬 투어 배와 식당이 모두 걸어서 닿습니다.|Between the Marina Lunga and Marina Corta harbours, with island boats and restaurants on foot.')],
         stay_before='  taormina: [',
         routes=[(RW, r"^  r\('catania', 'taormina', .*\),\n", "  r('catania', 'lipari', 'mixed', 200, { n: '밀라초 항구까지 버스 약 2시간 후 쾌속선 약 1시간|bus to Milazzo port (about 2 hrs), then hydrofoil (about 1 hr)' }),\n")],
         transit=dict(modes=['walk', 'bus', 'ferry', 'taxi'], ko='시내는 걸어서 다니고, 섬 버스가 마을과 전망대를 잇습니다. 다른 섬은 항구에서 쾌속선이나 투어 배를 탑니다.', en='Walk around town; island buses link the villages and viewpoints, and fast boats and tour boats leave the harbour for the other islands.'),
         apps='', transit_before='  taormina: {', places=None, daytrips=[]),
    dict(id='treviso', country='it', group_title='베네토', after='padua', ko='트레비소', en='Treviso', native='Treviso', lat=45.6667, lng=12.2430,
         blurb=['베네치아에서 기차로 40분 거리의 운하 도시로, 베네치아 시대 성벽 안 구시가에 물레방아 도는 수로가 흐릅니다. 프로세코 와인 언덕이 가깝고 티라미수의 고향으로 알려졌으며, 저가항공이 닿는 트레비소 공항이 있어 베네치아의 관문이 되기도 합니다.',
                'A canal town 40 minutes by train from Venice, its old town inside Venetian-era walls threaded with millstreams. The Prosecco hills are close, it is known as the home of tiramisù, and its low-cost airport makes it a gateway to Venice.'],
         highlights=[
             H('시뇨리 광장과 트레첸토 궁전', 'Piazza dei Signori & Palazzo dei Trecento', '구시가 중심 광장으로, 중세 시의회 건물인 트레첸토 궁전과 시계탑, 회랑 카페가 둘러싸고 있습니다.', 'The old town’s main square, framed by the medieval council hall of the Palazzo dei Trecento, the clock tower and arcaded cafés.', 'Piazza dei Signori Treviso', 30, 45, b='no', n='무료입니다.|Free.'),
             H('부라넬리 운하', 'Canale dei Buranelli', '옛 집들이 물가에 바짝 붙어 선 구시가 운하로, 트레비소에서 가장 사진이 많이 찍히는 곳입니다.', 'The old-town canal where houses stand right at the water’s edge, Treviso’s most photographed corner.', 'Canale dei Buranelli Treviso', 20, 30, b='no', n='무료입니다.|Free.'),
             H('페스케리아 섬', 'Isola della Pescheria', '시레강 운하 가운데 작은 섬에 선 생선 시장으로, 아침에 시장이 열리고 주변에 바카로(와인 바)가 모여 있습니다.', 'The fish market on a small island in the middle of the Cagnan canal, busy in the morning and ringed by bàcari (wine bars).', 'Isola della Pescheria Treviso', 20, 30, b='no', n='시장은 아침에 열고 월요일엔 쉬는 경우가 많습니다.|The market runs in the morning and is often closed on Mondays.'),
             H('트레비소 대성당', 'Treviso Cathedral', '성 베드로에게 바친 대성당으로, 말키오스트로 예배당에 티치아노의 「수태고지」가 있습니다.', 'The cathedral of St Peter, with Titian’s Annunciation in the Malchiostro Chapel.', 'Duomo di Treviso', 20, 30, b='no'),
             H('산 니콜로 성당', 'San Nicolò', '도미니코회의 큰 고딕 성당으로, 옆 신학교 참사회실엔 안경을 쓴 사람을 그린 가장 오래된 그림으로 알려진 토마소 다 모데나의 프레스코가 있습니다.', 'The great Gothic Dominican church; in the chapter house of the seminary next door, Tommaso da Modena’s frescoes include what is known as the earliest painting of a man wearing spectacles.', 'Chiesa di San Nicolò Treviso', 30, 45, b='no'),
             H('성벽과 산 토마소 문', 'City walls & Porta San Tomaso', '16세기 베네치아 공화국이 쌓은 성벽으로, 사자 조각이 있는 산 토마소 문과 성벽 위 산책로가 남아 있습니다.', 'The 16th-century walls built by the Venetian Republic, with the lion-carved Porta San Tomaso and a promenade along the ramparts.', 'Porta San Tomaso Treviso', 30, 45, b='no', n='무료입니다.|Free.'),
             H('프로세코 언덕', 'Prosecco Hills (Conegliano–Valdobbiadene)', '코넬리아노와 발도비아데네 사이 가파른 포도밭 언덕으로, 유네스코 세계유산입니다. 와이너리에서 프로세코를 시음합니다.', 'The steep vineyard hills between Conegliano and Valdobbiadene, a UNESCO World Heritage Site; taste Prosecco at the wineries.', 'Valdobbiadene', 240, 360, group=DAY, b='rec',
               n='코넬리아노까지 기차로 약 20분이고, 언덕 안쪽은 차나 투어가 편합니다.|About 20 min by train to Conegliano; a car or tour is easiest in the hills.'),
             H('빌라 바르바로와 아솔로', 'Villa Barbaro & Asolo', '팔라디오가 지은 마세르의 빌라 바르바로(유네스코 세계유산)는 베로네세의 프레스코로 유명하고, 가까운 언덕 마을 아솔로는 ‘백 개의 지평선의 도시’로 불립니다.', 'Palladio’s Villa Barbaro at Maser (UNESCO World Heritage), famous for Veronese’s frescoes, and the nearby hill town of Asolo, “the city of a hundred horizons”.', 'Villa di Maser', 240, 300, group=DAY,
               n='대중교통이 드물어 차로 다니는 편이 좋습니다.|Public transport is sparse; a car is easiest.'),
         ],
         hubs="    air: [['Treviso Canova (TSF)', '트레비소 공항 (TSF)'], ['Venezia Marco Polo (VCE)', '베네치아 공항 (VCE)', '베네치아|Venice']],\n    rail: [['Treviso Centrale', '트레비소 중앙역']],\n",
         hubs_file='hubs-west.ts', hubs_before='  padua: {\n', itin_file='itinerary-it.ts', itin_before='  portofino: ',
         itinerary={'days': [['', 1, 3, 2, 4, 5, 6]], 'trips': [['프로세코 언덕|Prosecco Hills', 7], ['빌라 바르바로와 아솔로|Villa Barbaro & Asolo', 8]]},
         season='포도 수확철인 9~10월에 프로세코 언덕이 가장 아름답고, 봄도 걷기 좋습니다.|September–October harvest time is the best for the Prosecco hills; spring is good for walking too.',
         visit_file='visit-it.ts', visit_after=VA('padua-h6'),
         stay=[('구시가', 'Old town', 'Treviso centro storico', '처음 가는 여행에 추천|Best for a first visit', '성벽 안 구시가로, 운하와 광장이 모두 걸어서 닿고 역까지도 걸어갑니다.|Inside the walls, with the canals and squares on foot and the station within walking distance.')],
         stay_before='  padua: [',
         routes=[(RW, r"^  r\('venice', 'padua', .*\),\n", "  r('venice', 'treviso', 'train', 37),\n"),
                 (RW, r"^  r\('venice', 'treviso', .*\),\n", "  r('treviso', 'padua', 'train', 46, { n: '환승 1회|one change' }),\n")],
         transit=dict(modes=['walk', 'bus', 'train'], ko='구시가는 걸어서 다닙니다. 공항은 시내버스로 가깝고, 베네치아는 기차로 오갑니다.', en='Walk the old town; a city bus serves the airport and trains run to Venice.'),
         apps=TI, transit_before='  padua: {', places=None,
         daytrips=[('venice', trip('treviso', '기차로 약 40분. 운하 마을 구시가와 생선 시장 섬을 봅니다.|About 40 min by train: the canal-side old town and the fish-market island.'))]),
]

if __name__ == '__main__':
    T.CITIES = CITIES
    T.main()
