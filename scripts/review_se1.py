#!/usr/bin/env python3
"""Sweden step 1 (all five cities), 2026-11-14, user approved the plan.
Fixes: Korean names (Skansen Kronan was '스카넨스 레바탄', Ribersborg was '리보스크스', Öresund '외레순드'), Kiruna Church
(moved to the new town centre in August 2025), the vague Uppsala 'riverside' and 'old lanes' entries, and every one-line
description and blurb. New sights: Stockholm 9, Gothenburg 5, Malmö 5, Uppsala 4, Kiruna 3. Stockholm gets district groups
and a 3-day itinerary; country city groups follow the regions. Run once."""
import re
from add_daytrip_places import rd, wr
from sight_order import add_sights, blocks, itinerary_order, reorder
from review_sk import S

DAY = ('근교 당일치기', 'Day trip')
TOUR = ('투어로 다녀오기', 'On a tour')
S_CEN = ('감라스탄·노르말름', 'Gamla Stan & Norrmalm')
S_DJU = ('유르고르덴', 'Djurgården')
S_SOD = ('쇠데르말름과 남부', 'Södermalm & the south')

BLURB = {
 'stockholm': ('14개 섬 위에 물길로 이어진 스웨덴의 수도. 중세 골목의 감라스탄과 17세기 전함 바사호, 박물관 섬 유르고르덴, 3만 개 섬의 군도가 있습니다.',
               'Sweden’s capital spread over 14 islands, with the medieval lanes of Gamla Stan, the 17th-century warship Vasa, the museum island of Djurgården and an archipelago of some 30,000 islands.'),
 'gothenburg': ('스웨덴 제2의 도시이자 서해안의 항구. 운하와 해산물 시장, 놀이공원 리세베리가 있고, 트램과 배로 차 없는 군도 섬에 갑니다.',
                'Sweden’s second city and west-coast port, with canals, a seafood market and the Liseberg amusement park, plus car-free archipelago islands by tram and ferry.'),
 'malmo': ('외레순 다리 건너 코펜하겐과 마주한 남부 도시. 16세기 광장의 구시가와 비틀린 고층 빌딩 터닝 토르소, 바닷가 냉수욕장이 있습니다.',
           'The southern city facing Copenhagen across the Öresund Bridge, with an old town of 16th-century squares, the twisting Turning Torso tower and a seaside cold-bath house.'),
 'uppsala': ('스칸디나비아에서 가장 오래된 대학(1477년)의 도시. 북유럽 최대의 대성당과 식물학자 린네의 정원, 바이킹 이전 왕들의 무덤 언덕이 있습니다.',
             'Home to Scandinavia’s oldest university (1477), with the largest cathedral in the Nordic countries, the botanist Linnaeus’s garden and the burial mounds of pre-Viking kings.'),
 'kiruna': ('북극권 위 라플란드의 철광 도시. 광산 때문에 도시 전체를 동쪽으로 옮기는 중이며, 오로라와 아이스호텔, 사미 문화를 찾아 겨울에 갑니다.',
            'An iron-mining town in Lapland above the Arctic Circle, moving wholesale eastwards because of the mine; visited in winter for the northern lights, the Icehotel and Sámi culture.'),
}

# hid: (ko or None, en or None, dko, den)
REWRITE = {
 'stockholm-h1': (None, None, '감라스탄 북쪽 끝의 18세기 바로크 궁전으로, 600개 넘는 방 중 연회장과 보물관, 무기고를 둘러보고 한낮엔 근위병 교대식이 열립니다.', 'The 18th-century Baroque palace at the north end of Gamla Stan; tour the state rooms, the Treasury and the Armoury, with the changing of the guard around midday.'),
 'stockholm-h2': (None, None, '13세기에 생긴 구시가 섬으로, 대광장 스토르토리에트의 색색 건물과 좁은 골목, 노벨 박물관이 있습니다.', 'The island old town founded in the 13th century, with the coloured façades of Stortorget square, narrow lanes and the Nobel Prize Museum.'),
 'stockholm-h3': (None, None, '1628년 첫 항해에서 침몰했다가 333년 만에 건져 올린 전함 바사호를 거의 원형 그대로 전시합니다.', 'The warship Vasa, which sank on her maiden voyage in 1628 and was raised 333 years later, displayed almost intact.'),
 'stockholm-h4': (None, None, '쇠데르말름 물가의 옛 세관 건물에 든 사진 미술관으로, 꼭대기 층 카페에서 감라스탄이 보입니다.', 'A photography museum in an old customs building on the Södermalm waterfront, with a top-floor café looking across to Gamla Stan.'),
 'stockholm-h5': (None, None, '해마다 노벨상 만찬이 열리는 붉은 벽돌 시청으로, 가이드 투어로 황금의 방을 보고 탑에 올라 전망을 봅니다.', 'The red-brick city hall that hosts the Nobel Prize banquet; see the Golden Hall on a guided tour and climb the tower for the view.'),
 'stockholm-h6': (None, None, '1891년 문을 연 세계 최초의 야외 박물관으로, 전국에서 옮겨 온 옛집과 북유럽 동물을 봅니다.', 'The world’s first open-air museum, opened in 1891, with old buildings moved from across Sweden and Nordic animals.'),
 'stockholm-h7': (None, None, '남쪽 섬 지구로, 모텔리우스 길 전망대에서 시청과 리다르홀멘을 내려다보고 SoFo 골목의 가게와 카페를 걷습니다.', 'The southern island district: look over City Hall and Riddarholmen from the Monteliusvägen path, then browse the shops and cafés of SoFo.'),
 'gothenburg-h1': (None, None, '고딕 교회처럼 지은 1874년 해산물 시장으로, 새우와 생선을 사거나 안의 식당에서 먹습니다.', 'The 1874 fish market built to look like a Gothic church; buy prawns and fish or eat in its restaurants.'),
 'gothenburg-h2': (None, None, '1923년 문을 연 북유럽 최대급 놀이공원으로, 여름과 크리스마스 시장 때 엽니다.', 'One of the Nordic region’s biggest amusement parks, opened in 1923, open in summer and for its Christmas market.'),
 'gothenburg-h3': (None, None, '19세기 노동자 목조 집이 남은 거리로, 손바닥만 한 시나몬 롤을 내는 카페가 모여 있습니다.', 'A street of 19th-century workers’ wooden houses, lined with cafés famous for hand-sized cinnamon buns.'),
 'gothenburg-h4': (None, None, '낮은 배 파단을 타고 17세기 운하와 항구를 도는 50분 유람으로, 다리 밑을 지날 땐 고개를 숙입니다.', 'A 50-minute ride on the low Paddan boats round the 17th-century canals and harbour—duck under the bridges.'),
 'gothenburg-h5': (None, None, '열대우림 온실과 상어 수족관이 있는 과학관으로, 리세베리 바로 옆입니다.', 'A science centre with a rainforest hall and shark aquarium, next door to Liseberg.'),
 'gothenburg-h6': ('스칸센 크로난', None, '하가 뒤 언덕 위의 17세기 요새 탑으로, 계단을 올라 시내와 항구를 내려다봅니다.', 'The 17th-century fortress tower on the hill behind Haga; climb the steps for views over the city and harbour.'),
 'malmo-h1': (None, None, '몸을 비트는 사람을 본떠 90도 비틀어 올린 190m 주거 빌딩으로, 스웨덴에서 손꼽히게 높습니다.', 'A 190 m apartment tower twisting through 90 degrees, modelled on a turning human body, and among Sweden’s tallest buildings.'),
 'malmo-h2': (None, None, '16세기 대광장 스토르토리에트와 시청, 약국 건물이 있는 구시가로, 운하에 둘러싸여 있습니다.', 'The canal-ringed old town around the 16th-century main square, Stortorget, with its town hall and old pharmacy.'),
 'malmo-h3': ('외레순 다리 전망', 'Öresund Bridge views', '말뫼와 코펜하겐을 잇는 약 8km의 다리로, 리베르스보리 해변과 서항구에서 바다 위로 뻗은 모습이 보입니다.', 'The bridge of about 8 km linking Malmö and Copenhagen, seen stretching over the sea from Ribersborg beach and the Western Harbour.'),
 'malmo-h4': (None, None, '1530년대 덴마크 왕이 지은 성으로, 지금은 미술·자연사 박물관과 수족관이 들어 있습니다.', 'The castle built by a Danish king in the 1530s, now home to art and natural-history museums and an aquarium.'),
 'malmo-h5': ('리베르스보리 해변', 'Ribersborg beach', '시내 서쪽의 모래 해변으로, 바다 위 1898년 냉수욕장에서 사우나 뒤 바다에 뛰어듭니다.', 'The sandy beach west of the centre, where the 1898 cold-bath house out on the pier pairs a sauna with a dip in the sea.'),
 'uppsala-h1': (None, None, '높이 119m의 쌍둥이 탑을 가진 북유럽 최대의 대성당으로, 구스타브 1세 바사와 린네가 묻혀 있습니다.', 'The largest cathedral in the Nordic countries, with twin 119 m towers; Gustav Vasa and Linnaeus are buried here.'),
 'uppsala-h2': (None, None, '웁살라 성 아래의 대학 식물원으로, 1787년 왕이 기증한 바로크 정원과 열대 온실이 있습니다.', 'The university botanic garden below the castle, with a Baroque garden donated by the king in 1787 and a tropical greenhouse.'),
 'uppsala-h3': ('퓌리스강 산책로', 'Fyris river walk', '시내를 가로지르는 퓌리스강 둑을 따라 카페와 대성당 풍경이 이어지는 산책로입니다.', 'The path along the Fyris river through the centre, lined with cafés and views of the cathedral.'),
 'uppsala-h4': (None, None, '1540년대 구스타브 1세 바사가 세운 분홍빛 성으로, 언덕 위에서 시내가 내려다보입니다. 안에 미술관이 있습니다.', 'The pink castle founded by Gustav Vasa in the 1540s, looking over the town from its hill, with an art museum inside.'),
 'uppsala-h5': ('대학 지구', 'University quarter', '대성당 옆 대학 본관과 학생 단체 ‘네이션’의 옛 건물이 모인 구역으로, 학생 도시 분위기를 느낍니다.', 'The quarter by the cathedral around the University Hall and the old houses of the student ‘nations’, the heart of student life.'),
 'kiruna-h1': (None, None, '1912년 사미족 천막 모양으로 지은 붉은 목조 교회로, 광산 때문에 2025년 8월 이틀에 걸쳐 새 시가지로 통째로 옮겼습니다.', 'The red wooden church built in 1912 in the shape of a Sámi tent, moved in one piece to the new town centre over two days in August 2025 because of the mine.'),
 'kiruna-h2': (None, None, '해마다 겨울 토르네강 얼음으로 새로 짓는 호텔로, 예술가들이 꾸민 얼음 객실과 얼음 교회를 둘러봅니다.', 'The hotel rebuilt each winter from Torne River ice; tour the artist-designed ice rooms and the ice church.'),
 'kiruna-h3': (None, None, '9월~3월 맑은 밤, 시내 불빛을 벗어나 오로라를 찾아가는 투어가 매일 밤 출발합니다.', 'On clear nights from September to March, tours leave nightly to look for the aurora away from the town lights.'),
 'kiruna-h4': (None, None, '세계 최대 지하 철광산 LKAB의 땅속 540m 견학 시설에 버스로 내려가, 철광석 채굴과 도시 이전 이야기를 듣습니다.', 'Descend by bus to the visitor centre 540 m underground in LKAB’s mine, the world’s largest underground iron mine, to hear about mining and the town move.'),
}

ADD = {
 'stockholm': [
  (8, S('드로트닝홀름 궁전', 'Drottningholm Palace', '왕실 가족이 사는 17세기 궁전으로 세계유산입니다. 1766년 무대 장치가 그대로 남은 궁정 극장과 중국관, 바로크 정원이 있습니다.', 'The 17th-century palace where the royal family lives, a World Heritage Site, with a court theatre whose 1766 stage machinery still works, a Chinese Pavilion and Baroque gardens.', 'Drottningholm Palace', 120, 180, group=DAY,
        n='여름엔 시청 앞 선착장에서 배로 약 1시간, 1년 내내 지하철과 버스로 갑니다. 겨울엔 여는 날이 줄어듭니다.|About an hour by boat from the City Hall pier in summer, or by metro and bus year-round; fewer opening days in winter.')),
  (9, S('ABBA 박물관', 'ABBA The Museum', '유르고르덴의 ABBA 박물관으로, 무대 의상과 기록을 보고 홀로그램 멤버와 함께 노래하는 체험이 있습니다.', 'The ABBA museum on Djurgården: costumes and memorabilia, plus singing on stage alongside the band in hologram form.', 'ABBA The Museum', 60, 120,
        n='현금은 받지 않습니다. 시간대별 입장이라 미리 예매하면 편합니다.|Cashless; entry is by time slot, so booking ahead helps.')),
  (10, S('국립 미술관', 'Nationalmuseum', '2018년 새로 단장해 연 스웨덴 국립 미술관으로, 렘브란트와 스웨덴 회화, 디자인을 전시합니다.', 'Sweden’s national gallery, reopened in 2018 after renovation, with Rembrandt, Swedish painting and design.', 'Nationalmuseum Stockholm', 90, 150)),
  (11, S('현대 미술관', 'Moderna Museet', '셰프스홀멘섬의 현대 미술관으로, 피카소·달리·뒤샹 등 20세기 거장 작품을 모았습니다.', 'The modern art museum on Skeppsholmen island, with 20th-century masters such as Picasso, Dalí and Duchamp.', 'Moderna Museet Stockholm', 90, 120,
        n='상설 전시는 무료이고 특별전은 유료입니다.|The permanent collection is free; special exhibitions are ticketed.')),
  (12, S('북유럽 박물관', 'Nordic Museum', '성처럼 생긴 거대한 건물에 스웨덴 사람들의 500년 생활과 패션, 디자인을 전시합니다.', 'A castle-like building showing five centuries of Swedish daily life, fashion and design.', 'Nordiska museet', 90, 120)),
  (13, S('지하철역 예술', 'Metro station art', '100개 남짓한 지하철역 대부분을 예술가들이 꾸며, 바위를 그대로 드러낸 T-센트랄렌·쿵스트레드고르덴역 등이 미술관 같습니다.', 'Artists have decorated most of the metro’s 100-odd stations; bare-rock caverns such as T-Centralen and Kungsträdgården feel like galleries.', 'Kungsträdgården metro station', 60, 90,
        n='일반 대중교통 표로 볼 수 있습니다. 여름엔 무료 영어 미술 투어가 열리기도 합니다.|Seen on an ordinary transit ticket; free guided art tours run at times in summer.')),
  (14, S('스코그쉬르코고르덴', 'Skogskyrkogården', '건축가 아스플룬드와 레버렌츠가 숲속에 설계한 20세기 묘지로 세계유산입니다. 그레타 가르보가 묻혀 있습니다.', 'The 20th-century Woodland Cemetery designed by the architects Asplund and Lewerentz, a World Heritage Site; Greta Garbo is buried here.', 'Skogskyrkogården', 60, 90,
        n='지하철 초록 노선 스코그쉬르코고르덴역 바로 앞이며, 묘지라 조용히 둘러보세요.|Right by Skogskyrkogården station on the green metro line; it is a working cemetery, so keep it quiet.')),
  (15, S('스톡홀름 군도와 박스홀름', 'Archipelago & Vaxholm', '3만 개 섬이 이어지는 군도로, 배를 타고 요새와 목조 별장이 있는 섬마을 박스홀름에 다녀옵니다.', 'The archipelago of some 30,000 islands; take a boat to Vaxholm, an island town with a fortress and wooden summer houses.', 'Vaxholm', 240, 360, group=DAY,
        n='시내 스트룀칸옌 선착장에서 배로 약 1시간이며, 1년 내내 다니고 여름에 가장 자주 있습니다.|About an hour by boat from Strömkajen in the centre, year-round and most often in summer.')),
  (16, S('시그투나', 'Sigtuna', '980년경 세워진 스웨덴에서 가장 오래된 도시로, 중세 교회 폐허와 룬 돌, 목조 집이 늘어선 거리가 있습니다.', 'Sweden’s oldest town, founded around 980, with medieval church ruins, rune stones and a street of wooden houses.', 'Sigtuna', 180, 300, group=DAY,
        n='통근 열차로 메르스타까지 간 뒤 버스로 갈아타 약 1시간입니다.|About an hour by commuter train to Märsta and then a bus.')),
 ],
 'gothenburg': [
  (8, S('예타광장과 미술관', 'Götaplatsen & Art Museum', '중심가 아베닌 끝의 광장으로, 밀레스의 포세이돈 상 뒤 미술관에 칼 라르손·소른·뭉크 등 북유럽 회화가 있습니다.', 'The square at the top of the Avenyn boulevard; behind Carl Milles’s Poseidon statue, the art museum holds Nordic painting by Larsson, Zorn and Munch.', 'Göteborgs konstmuseum', 60, 120)),
  (9, S('슬로츠스코겐 공원', 'Slottsskogen', '시내 서쪽의 큰 숲 공원으로, 물개와 엘크·순록을 볼 수 있는 무료 동물원과 자연사 박물관이 있습니다.', 'The big wooded park west of the centre, with a free zoo of seals, elk and reindeer, and the natural history museum.', 'Slottsskogen', 60, 120,
        n='공원과 동물원은 무료입니다.|The park and zoo are free.')),
  (10, S('남쪽 군도', 'Southern archipelago', '차가 다니지 않는 바위섬들로, 트램으로 살트홀멘까지 간 뒤 배를 타고 스튀르쇠·브랑엔 섬 등에 다녀옵니다.', 'Car-free rocky islands: take the tram to Saltholmen, then a ferry to islands such as Styrsö and Vrångö.', 'Saltholmen', 240, 360, group=DAY,
        n='배는 시내 교통(베스트트라피크) 표로 탈 수 있습니다.|The ferries take ordinary Västtrafik transit tickets.')),
  (11, S('뉘엘브스보리 요새', 'Nya Älvsborg Fortress', '예타강 어귀 바위섬의 17세기 요새로, 배를 타고 가서 성벽과 감옥을 둘러봅니다.', 'The 17th-century fortress on a rocky islet at the mouth of the Göta River, reached by boat to explore its walls and cells.', 'Nya Älvsborg Fortress', 150, 210, group=DAY,
        n='여름에만 시내에서 배가 다닙니다.|Boats from the centre run in summer only.')),
  (12, S('마르스트란드', 'Marstrand', '17세기 카를스텐 요새가 내려다보는 섬마을로, 하얀 목조 집과 요트 항구가 있습니다.', 'An island village under the 17th-century Carlsten Fortress, with white wooden houses and a yacht harbour.', 'Marstrand', 300, 420, group=DAY,
        n='버스로 약 1시간 거리이고, 마지막에 짧게 배를 탑니다.|About an hour by bus, finishing with a short ferry crossing.')),
 ],
 'malmo': [
  (6, S('릴라 광장', 'Lilla Torg', '16세기 반목조 집에 둘러싸인 작은 광장으로, 식당과 바의 바깥 자리가 가득합니다.', 'A small square ringed by 16th-century half-timbered houses, full of restaurant and bar terraces.', 'Lilla Torg Malmö', 20, 45)),
  (7, S('서항구', 'Western Harbour', '옛 조선소 자리에 2001년 주택 박람회 ‘보01’로 지은 친환경 주거 지구로, 바닷가 산책로에서 다리와 노을이 보입니다.', 'An eco-district built on the old shipyard for the Bo01 housing expo in 2001, with a seaside promenade facing the bridge and the sunset.', 'Västra Hamnen Malmö', 60, 120)),
  (8, S('말뫼 현대 미술관', 'Moderna Museet Malmö', '1900년대 초 발전소 건물에 들어선 스톡홀름 현대 미술관의 분관으로, 현대 미술 전시를 엽니다.', 'The Malmö branch of Stockholm’s Moderna Museet, showing contemporary art in an early-1900s power station.', 'Moderna Museet Malmö', 60, 90)),
  (9, S('성 베드로 교회', 'St Peter’s Church', '14세기 발트해 양식의 벽돌 고딕 교회로, 말뫼에서 가장 오래된 건물입니다.', 'A 14th-century brick Gothic church in the Baltic style, Malmö’s oldest building.', 'Sankt Petri kyrka Malmö', 20, 30)),
  (10, S('왕궁 공원과 쿵스파르켄', 'Castle parks', '말뫼 성을 둘러싼 두 공원으로, 풍차와 연못, 정원이 이어지는 산책로입니다.', 'The two parks around Malmö Castle, with a windmill, ponds and gardens along the paths.', 'Slottsparken Malmö', 30, 60)),
 ],
 'uppsala': [
  (6, S('감라 웁살라', 'Gamla Uppsala', '5~6세기 왕들이 묻힌 거대한 무덤 언덕 셋과 중세 교회, 박물관이 있는 바이킹 이전 시대의 중심지입니다.', 'The pre-Viking centre of power, with three great royal burial mounds of the 5th–6th centuries, a medieval church and a museum.', 'Gamla Uppsala', 90, 120, group=DAY,
        n='시내에서 버스로 약 15분입니다. 무덤 언덕은 무료입니다.|About 15 min from the centre by bus; the mounds are free.')),
  (7, S('구스타비아눔', 'Gustavianum', '1620년대 대학 건물의 박물관으로, 꼭대기의 17세기 해부학 강당과 아우크스부르크 미술 진열장, 바이킹 유물이 있습니다.', 'The university museum in a 1620s building, with a 17th-century anatomical theatre under the dome, the Augsburg Art Cabinet and Viking finds.', 'Gustavianum', 60, 90)),
  (8, S('린네 정원', 'Linnaeus Garden', '식물학자 린네가 가꾸던 대학 정원을 1745년 설계대로 되살린 곳으로, 그가 살던 집이 박물관입니다.', 'The university garden Carl Linnaeus tended, restored to his 1745 plan, with his house now a museum.', 'Linnéträdgården', 45, 60,
        n='대체로 5월~9월에 엽니다.|Usually open May to September.')),
  (9, S('카롤리나 레디비바 도서관', 'Carolina Rediviva', '대학 도서관으로, 6세기에 은빛 글씨로 쓴 고트어 성경 ‘은 성경’을 전시실에서 봅니다.', 'The university library, whose exhibition hall shows the Silver Bible, a 6th-century Gothic gospel book written in silver ink.', 'Carolina Rediviva', 30, 45)),
 ],
 'kiruna': [
  (5, S('새 시가지와 시청', 'New town centre', '광산 때문에 동쪽으로 옮겨 짓는 새 시가지로, 2018년 문을 연 시청 ‘크리스탈렌’과 옮겨 온 교회가 있습니다.', 'The new town centre being built to the east because of the mine, with the town hall, Kristallen, opened in 2018, and the relocated church.', 'Kiruna Stadshus', 30, 60)),
  (6, S('사미 순록 체험', 'Sámi reindeer visit', '유카스예르비의 사미족 순록 농장에서 순록에게 먹이를 주고 썰매를 타며, 사미 문화 이야기를 듣습니다.', 'At a Sámi reindeer farm in Jukkasjärvi, feed the reindeer, ride a sled and hear about Sámi culture.', 'Nutti Sámi Siida', 90, 180, group=TOUR,
        n='아이스호텔 근처라 함께 다녀오기 좋습니다. 미리 예약하세요.|Close to the Icehotel, so easy to combine; book ahead.')),
  (7, S('개썰매 투어', 'Dog sledding', '허스키가 끄는 썰매로 눈 덮인 숲과 얼어붙은 강 위를 달립니다.', 'Race across snowy forest and frozen rivers on a husky-drawn sled.', 'Kiruna dog sledding', 180, 300, group=TOUR,
        n='대체로 11월~4월에 운영하며 시내에서 픽업해 줍니다. 미리 예약하세요.|Mostly November to April, with pick-up in town; book ahead.')),
 ],
}

IT = [
 ("  stockholm: {\n    days: [\n      ['감라스탄과 쇠데르말름|Gamla Stan & Södermalm', 5, 1, 2, 7, 4],\n      ['유르고르덴|Djurgården', 3, 6],\n    ],\n  },\n",
  "  stockholm: {\n    days: [\n      ['감라스탄과 노르말름|Gamla Stan & Norrmalm', 2, 1, 5, 13, 10, 11],\n      ['유르고르덴|Djurgården', 3, 12, 9, 6],\n      ['쇠데르말름|Södermalm', 7, 4, 14],\n    ],\n    trips: [\n      ['드로트닝홀름 궁전|Drottningholm Palace', 8],\n      ['군도와 박스홀름|Archipelago & Vaxholm', 15],\n      ['시그투나|Sigtuna', 16],\n    ],\n  },\n"),
 ("      ['시내|City centre', 1, 3, 6, 4, 5],\n      ['리세베리|Liseberg', 2],\n      ['월드 오브 볼보|World of Volvo', 7],\n    ],\n",
  "      ['시내|City centre', 1, 4, 3, 6, 9, 8],\n      ['리세베리와 우주과학관|Liseberg & Universeum', 5, 7, 2],\n    ],\n    trips: [\n      ['남쪽 군도|Southern archipelago', 10],\n      ['뉘엘브스보리 요새|Nya Älvsborg Fortress', 11],\n      ['마르스트란드|Marstrand', 12],\n    ],\n"),
 ("  malmo: [2, 4, 5, 1, 3],\n", "  malmo: { days: [['', 2, 6, 9, 4, 10, 8], ['', 7, 1, 5, 3]] },\n"),
 ("  uppsala: [5, 3, 1, 4, 2],\n", "  uppsala: { days: [['', 1, 5, 7, 9, 3, 8, 4, 2]], trips: [['감라 웁살라|Gamla Uppsala', 6]] },\n"),
 ("  kiruna: { days: [['', 4, 3]], trips: [['아이스호텔|Icehotel', 2]] },\n",
  "  kiruna: {\n    days: [['', 5, 1, 4]],\n    trips: [\n      ['아이스호텔|Icehotel', 2],\n      ['오로라 투어|Northern lights tour', 3],\n      ['사미 순록 체험|Sámi reindeer visit', 6],\n      ['개썰매|Dog sledding', 7],\n    ],\n  },\n"),
]

STOCKHOLM = [(2, S_CEN), (1, S_CEN), (5, S_CEN), (13, S_CEN), (10, S_CEN), (11, S_CEN),
             (3, S_DJU), (12, S_DJU), (9, S_DJU), (6, S_DJU), (7, S_SOD), (4, S_SOD), (14, S_SOD),
             (8, DAY), (15, DAY), (16, DAY)]
SMALL = ['gothenburg', 'malmo', 'uppsala', 'kiruna']

SE_OLD = "    cityIds: ['stockholm', 'gothenburg', 'malmo', 'uppsala', 'kiruna'],\n"
SE_NEW = """    cityIds: ['stockholm', 'uppsala', 'gothenburg', 'malmo', 'kiruna'],
    cityGroups: [
      { title: { ko: '스톡홀름·중부', en: 'Stockholm & central Sweden' }, cityIds: ['stockholm', 'uppsala'] },
      { title: { ko: '서해안', en: 'West coast' }, cityIds: ['gothenburg'] },
      { title: { ko: '스코네', en: 'Skåne' }, cityIds: ['malmo'] },
      { title: { ko: '북부', en: 'Northern Sweden' }, cityIds: ['kiruna'] },
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
    for hid, (ko, en, dko, den) in REWRITE.items():
        i = c.index(f'id: "{hid}"')
        j = c.index('\n      }', i)
        blk = c[i:j]
        if ko or en:
            m = re.search(r'name: \{ ko: "([^"]*)", en: "([^"]*)" \}', blk)
            blk = blk.replace(m.group(0), f'name: {{ ko: "{ko or m.group(1)}", en: "{en or m.group(2)}" }}')
        blk = re.sub(r'description: \{[^\n]*\}', f'description: {{ ko: "{dko}", en: "{den}" }}', blk)
        c = c[:i] + blk + c[j:]
    it = rd('itinerary-north.ts')
    for a, b in IT:
        assert it.count(a) == 1, a[:70]
        it = it.replace(a, b)
    wr('itinerary-north.ts', it)
    for cid, items in ADD.items():
        c = add_sights(c, cid, items, 'visit-nordic.ts')
    c = reorder(c, 'stockholm', STOCKHOLM)
    for cid in SMALL:
        by = blocks(c, cid)
        m = re.search(rf"^  '?{cid}'?: (.*?)(?=^  [a-z'/])", it, re.M | re.S)
        trips = {int(x) for t in re.findall(r"trips: \[(.*)\]", m.group(1), re.S) for x in re.findall(r", (\d+)", t)}
        order = itinerary_order(it, cid, set(by))
        def g(n):
            if cid == 'kiruna' and n in (3, 6, 7):
                return TOUR
            return DAY if n in trips else None
        c = reorder(c, cid, [(n, g(n)) for n in order])
    wr('cities.ts', c)
    k = rd('countries.ts')
    assert k.count(SE_OLD) == 1
    wr('countries.ts', k.replace(SE_OLD, SE_NEW))


if __name__ == '__main__':
    main()
