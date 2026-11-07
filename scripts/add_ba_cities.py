#!/usr/bin/env python3
"""Bosnia & Herzegovina step 2 (2026-11-07, user picked all four): Jajce, Višegrad, Trebinje and Srebrenica.
Transitous has no BiH buses, so times come from operator/aggregator pages (Sarajevo–Jajce ~3h30, Dubrovnik–Trebinje
1–1h30, Sarajevo–Trebinje ~4h30, Sarajevo–Srebrenica ~3h50, few buses); Sarajevo–Višegrad is an estimate flagged in
the route note. Reuses the batch-3 writer. Run once.
After the run: trebinje-h5 Vukoje Winery → Museum of Herzegovina by hand (no Commons photo; the user picked the Perović
Bridge, but that is the same bridge as h2 Arslanagić)."""
import add_daytrip_places3 as T
from add_daytrip_places3 import trip
from add_slovakia_cities import H

DAY = ('근교 당일치기', 'Day trip')
FLIX = "      ta('flixbus'),\n"

CITIES = [
    dict(id='jajce', country='ba', after='travnik', ko='야이체', en='Jajce', native='Jajce', lat=44.3420, lng=17.2700,
         blurb=['보스니아 중세 왕국의 마지막 수도. 플리바강이 도시 한가운데서 22m 폭포로 떨어지고, 언덕 위 요새와 호숫가 물레방아 마을이 있습니다.',
                'The last capital of the medieval Bosnian kingdom, where the Pliva drops 22 m in a waterfall right in town, below a hilltop fortress and lakes lined with watermills.'],
         highlights=[
             H('플리바 폭포', 'Pliva Waterfall', '플리바강이 브르바스강으로 떨어지는 22m 폭포로, 시내 전망대와 아래쪽 계단에서 봅니다.', 'The 22 m waterfall where the Pliva drops into the Vrbas, seen from viewpoints in town and the steps below.', 'Pliva Waterfall Jajce', 30, 45,
               n='폭포 아래 전망대는 입장료가 있습니다.|The viewing area below the falls is ticketed.'),
             H('야이체 요새', 'Jajce Fortress', '보스니아 왕들이 머물던 언덕 위 중세 요새로, 성벽에서 시내와 강이 내려다보입니다.', 'The hilltop medieval fortress of the Bosnian kings, with views of the town and rivers from its walls.', 'Jajce Fortress', 30, 45),
             H('지하 묘지', 'Jajce Catacombs', '15세기 보스니아 귀족이 바위를 파서 만든 지하 교회 겸 묘지입니다.', 'An underground church and tomb cut into the rock by a 15th-century Bosnian noble.', 'Katakombe Jajce', 15, 20),
             H('미트라스 신전', 'Temple of Mithras', '로마 시대 미트라스 신을 새긴 부조가 남은 작은 신전 터입니다.', 'A small Roman-era shrine with a relief of the god Mithras.', 'Mitrasov hram Jajce', 15, 20),
             H('아브노이 박물관', 'AVNOJ Museum', '1943년 유고슬라비아 연방 수립을 결정한 회의장을 보여 주는 박물관입니다.', 'The hall where the 1943 session that founded federal Yugoslavia met, now a museum.', 'Muzej AVNOJ-a Jajce', 30, 45),
             H('플리바 호수와 물레방아', 'Pliva lakes & watermills', '호수 사이 물길에 나무 물레방아 오두막 20여 채가 늘어선 곳입니다.', 'Some twenty wooden watermill huts lined up along the channels between the Pliva lakes.', 'Mlinčići Jajce', 60, 90,
               n='시내에서 걸어서 약 1시간, 차로 약 10분입니다.|About an hour on foot or 10 min by car from town.'),
         ],
         hubs="    air: [SJJ('버스로 약 3시간 30분|About 3 hrs 30 by bus'), ['Banja Luka (BNX)', '바냐루카 공항 (BNX)', '바냐루카|Banja Luka']],\n    bus: [['Autobuska stanica Jajce', '야이체 버스터미널']],\n",
         hubs_file='hubs-east.ts', hubs_before='  neum: {\n', itin_file='itinerary-south.ts', itin_before='  neum: ',
         itinerary=[1, 2, 3, 4, 5, 6],
         season='봄에 물이 많아 폭포가 가장 웅장합니다. 8월엔 폭포 다이빙 대회가 열립니다.|The falls are fullest in spring; a waterfall-diving contest is held in August.',
         visit_file='visit-balkan.ts', visit_after=r"^  'travnik-h6': v\(.*\),\n",
         stay=[('구시가', 'Old town', 'Jajce old town', '처음 가는 여행에 추천|Best for a first visit', '폭포와 요새가 걸어서 닿습니다.|The waterfall and fortress on foot.')],
         stay_before='  neum: [',
         routes=[('routes-east.ts', r"^  r\('sarajevo', 'travnik', .*\),\n",
                  "  r('sarajevo', 'jajce', 'bus', 210, { n: '하루 몇 편 · 트라브니크 경유|a few a day · via Travnik' }),\n")],
         transit=dict(modes=['walk', 'bus', 'taxi'], ko='구시가는 걸어서 다닙니다. 물레방아까지는 걷거나 택시를 탑니다.', en='Walk the old town; walk or take a taxi to the watermills.'),
         apps=FLIX, transit_before='  // —— me ——\n', places=None, daytrips=[]),
    dict(id='visegrad', country='ba', after='sarajevo', ko='비셰그라드', en='Višegrad', native='Višegrad', lat=43.7825, lng=19.2900,
         blurb=['드리나강 위 16세기 메흐메드 파샤 소콜로비치 다리의 도시. 이보 안드리치의 소설 ‘드리나강의 다리’ 무대이며, 다리는 유네스코 세계유산입니다.',
                'The town of the 16th-century Mehmed Paša Sokolović Bridge over the Drina—the setting of Ivo Andrić’s novel The Bridge on the Drina, and a UNESCO World Heritage Site.'],
         highlights=[
             H('메흐메드 파샤 소콜로비치 다리', 'Mehmed Paša Sokolović Bridge', '1577년 오스만 건축가 시난이 지은 아치 11개의 돌다리입니다.', 'The eleven-arch stone bridge built in 1577 by the Ottoman architect Sinan.', 'Mehmed Paša Sokolović Bridge', 30, 45),
             H('안드리치그라드', 'Andrićgrad', '영화감독 쿠스투리차가 다리 옆에 지은 돌 마을로, 안드리치를 기리는 거리와 교회, 식당이 있습니다.', 'The stone town built by director Kusturica beside the bridge, with streets, a church and restaurants honouring Andrić.', 'Andrićgrad', 45, 60),
             H('드리나강 유람선', 'Drina river boat trip', '다리 아래에서 출발해 드리나 협곡을 따라가는 유람선입니다.', 'A boat trip from below the bridge along the Drina canyon.', 'Višegrad Drina boat', 120, 180,
               n='대략 여름철에만 운항합니다.|Runs mainly in summer.'),
             H('도브룬 수도원', 'Dobrun Monastery', '14세기에 세운 세르비아 정교회 수도원으로, 프레스코가 남아 있습니다.', 'A 14th-century Serbian Orthodox monastery with surviving frescoes.', 'Manastir Dobrun', 45, 60, group=DAY,
               n='비셰그라드에서 차로 약 15분입니다.|About 15 min by car from Višegrad.'),
         ],
         hubs="    air: [SJJ()],\n    bus: [['Autobuska stanica Višegrad', '비셰그라드 버스터미널']],\n",
         hubs_file='hubs-east.ts', hubs_before='  mostar: {\n', itin_file='itinerary-south.ts', itin_before='  mostar: ',
         itinerary=[1, 2, 3, 4],
         season='여름에 강 유람선이 다니고, 6월엔 안드리치그라드에서 행사가 열립니다.|River boats run in summer, and Andrićgrad hosts events in June.',
         visit_file='visit-balkan.ts', visit_after=r"^  'sarajevo-h10': v\(.*\),\n",
         stay=[('다리 주변', 'By the bridge', 'Višegrad centre', '처음 가는 여행에 추천|Best for a first visit', '다리와 안드리치그라드가 걸어서 닿습니다.|The bridge and Andrićgrad on foot.')],
         stay_before='  mostar: [',
         routes=[('routes-east.ts', r"^  r\('sarajevo', 'travnik', .*\),\n",
                  "  r('sarajevo', 'visegrad', 'bus', 165, { n: '추정 시간 · 운행편 적어 시간표 확인|estimated time · few buses, check the timetable' }),\n")],
         transit=dict(modes=['walk', 'bus', 'taxi'], ko='다리와 안드리치그라드는 걸어서 다닙니다. 수도원은 차나 택시로 갑니다.', en='Walk to the bridge and Andrićgrad; take a car or taxi to the monastery.'),
         apps=FLIX, transit_before='  mostar: {', places=None, daytrips=[]),
    dict(id='trebinje', country='ba', after='mostar', ko='트레비네', en='Trebinje', native='Trebinje', lat=42.7110, lng=18.3440,
         blurb=['두브로브니크에서 산 하나 넘은 헤르체고비나 남쪽 끝 도시. 플라타너스 광장과 오스만 다리가 있고, 수도원 와인 저장고가 있는 와인 산지입니다.',
                'The southernmost town of Herzegovina, one ridge inland from Dubrovnik, with its plane-tree square and Ottoman bridge, and a wine region with a monastery cellar.'],
         highlights=[
             H('구시가와 플라타너스 광장', 'Old town & Plane Tree Square', '성벽 안 구시가와, 오래된 플라타너스 아래 장이 서는 광장입니다.', 'The walled old town and the square where a market is held beneath old plane trees.', 'Trg slobode Trebinje', 30, 60),
             H('아르슬라나기치 다리', 'Arslanagić Bridge', '16세기 오스만 시대 돌다리로, 트레비슈니차강 위에 다시 옮겨 세웠습니다.', 'A 16th-century Ottoman stone bridge, rebuilt over the Trebišnjica.', 'Arslanagić Bridge', 15, 20),
             H('헤르체고비나 그라차니차', 'Hercegovačka Gračanica', '시내 위 언덕의 정교회 교회로, 주변 전망이 좋습니다.', 'An Orthodox church on the hill above town, with wide views.', 'Hercegovačka Gračanica', 30, 45),
             H('트브르도시 수도원', 'Tvrdoš Monastery', '15세기부터 이어진 수도원으로, 지하 와인 저장고에서 수도원 와인을 시음합니다.', 'A monastery dating from the 15th century, with tastings of its own wine in the cellar.', 'Manastir Tvrdoš', 45, 60),
             H('부코예 와이너리', 'Vukoje Winery', '트레비네의 대표 와이너리로, 저장고 투어와 시음이 있습니다.', 'Trebinje’s best-known winery, with cellar tours and tastings.', 'Vinarija Vukoje Trebinje', 60, 90, b='rec'),
         ],
         hubs="    air: [DBV(), SJJ()],\n    bus: [['Autobuska stanica Trebinje', '트레비네 버스터미널']],\n",
         hubs_file='hubs-east.ts', hubs_before="  'banja-luka': {\n", itin_file='itinerary-south.ts', itin_before="  'banja-luka': ",
         itinerary=[1, 2, 3, 4, 5],
         season='여름이 덥고 건조하며, 가을엔 포도 수확철입니다. 두브로브니크가 붐비는 여름에 조용히 다녀오기 좋습니다.|Summers are hot and dry and autumn is the harvest; a quiet escape from busy summer Dubrovnik.',
         visit_file='visit-balkan.ts', visit_after=r"^  'mostar-h9': v\(.*\),\n",
         stay=[('구시가 주변', 'Around the old town', 'Trebinje old town', '처음 가는 여행에 추천|Best for a first visit', '광장과 다리, 식당이 걸어서 닿습니다.|The square, bridge and restaurants on foot.')],
         stay_before="  'banja-luka': [",
         routes=[('routes-east.ts', r"^  r\('sarajevo', 'dubrovnik', .*\),\n",
                  "  r('dubrovnik', 'trebinje', 'bus', 75, { n: '하루 2~3편 · 국경 통과 포함|2–3 a day · border included' }),\n  r('sarajevo', 'trebinje', 'bus', 270),\n")],
         transit=dict(modes=['walk', 'bus', 'taxi'], ko='시내는 걸어서 다닙니다. 수도원과 와이너리는 택시나 차가 편합니다.', en='Walk the centre; a taxi or car is easiest for the monastery and winery.'),
         apps=FLIX, transit_before="  'banja-luka': {", places=None,
         daytrips=[('dubrovnik', trip('trebinje', '버스로 약 1시간 15분(국경 포함). 플라타너스 광장과 오스만 다리, 수도원 와인 저장고를 봅니다.|About 1 hr 15 by bus including the border: the plane-tree square, the Ottoman bridge and the monastery wine cellar.'))]),
    dict(id='srebrenica', country='ba', after='visegrad', ko='스레브레니차', en='Srebrenica', native='Srebrenica', lat=44.1050, lng=19.2970,
         blurb=['1995년 7월 8,000명 넘는 보스니아 무슬림이 학살된 곳. 포토차리 추모관과 묘지에서 그 기억을 마주하는, 은광과 온천으로 알려졌던 산골 마을입니다.',
                'Where more than 8,000 Bosniak men and boys were massacred in July 1995—a valley town once known for silver mines and springs, where the Potočari memorial keeps that memory.'],
         highlights=[
             H('스레브레니차-포토차리 추모관과 묘지', 'Srebrenica–Potočari Memorial and Cemetery', '1995년 학살 희생자들이 묻힌 묘지와, 옛 유엔군 기지에 마련된 추모 전시관입니다.', 'The cemetery of the 1995 genocide victims and the memorial exhibition in the former UN base.', 'Srebrenica-Potočari Memorial', 120, 180,
               s='https://srebrenicamemorial.org/en', n='입장은 무료입니다. 해마다 7월 11일에 추모식이 열립니다.|Free entry; a commemoration is held every 11 July.'),
             H('스레브레니차 옛 요새', 'Srebrenica old fortress', '은광 도시를 지키던 중세 요새 터로, 마을 위 언덕에 있습니다.', 'The ruins of the medieval fortress that guarded the silver-mining town, on the hill above.', 'Stari grad Srebrenica', 45, 60),
             H('구베르 광천', 'Guber springs', '철분이 많은 광천수로 이름난 옛 온천 휴양지입니다.', 'The old spa known for its iron-rich mineral springs.', 'Guber Srebrenica', 30, 45),
         ],
         hubs="    air: [SJJ('버스로 약 3시간 50분|About 3 hrs 50 by bus')],\n    bus: [['Autobuska stanica Srebrenica', '스레브레니차 버스 정류장']],\n",
         hubs_file='hubs-east.ts', hubs_before='  mostar: {\n', itin_file='itinerary-south.ts', itin_before='  mostar: ',
         itinerary=[1, 2, 3],
         season='7월 11일 추모식 때는 많은 사람이 찾습니다. 버스가 드물어 사라예보나 투즐라에서 투어로 오는 경우가 많습니다.|Many come for the 11 July commemoration; buses are rare, so visits are often by tour from Sarajevo or Tuzla.',
         visit_file='visit-balkan.ts', visit_after=r"^  'sarajevo-h10': v\(.*\),\n",
         stay=[('사라예보에서 다녀오기', 'Base in Sarajevo', 'Sarajevo', '거점에서 다녀오기|Day trip from a base', '차나 투어로 약 2시간 30분입니다. 마을에는 숙소가 거의 없습니다.|About 2 hrs 30 by car or tour; there are very few places to stay in town.')],
         stay_before='  mostar: [',
         routes=[('routes-east.ts', r"^  r\('sarajevo', 'travnik', .*\),\n",
                  "  r('sarajevo', 'srebrenica', 'bus', 230, { n: '주 몇 편뿐 · 투어나 차가 편함|only a few buses a week · a tour or car is easier' }),\n")],
         transit=dict(modes=['walk', 'bus', 'taxi'], ko='추모관은 마을에서 약 6km 떨어져 있어 택시나 차로 갑니다.', en='The memorial is about 6 km from town—go by taxi or car.'),
         apps='', transit_before='  mostar: {', places=None, daytrips=[]),
]

if __name__ == '__main__':
    T.CITIES = CITIES
    T.main()
