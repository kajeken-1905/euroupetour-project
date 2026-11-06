#!/usr/bin/env python3
"""Ireland step 1 (2026-11-06, all-country plan): more sights for the six Irish cities (incl. whiskey distilleries:
Teeling, Jameson Bow St, Jameson Midleton), Dublin grouped by district, others in itinerary order, and fixes for
mistranslated Korean names. Run once."""
from add_daytrip_places import rd, wr
from sight_order import add_sights, blocks, itinerary_order, read_group, reorder
from review_sk import S

DAY = ('근교 당일치기', 'Day trip')
FREE = '무료입니다.|Free.'
NAMES = [('"샤논 성"', '"섄던 종탑"'), ('"로스가 성"', '"로스 성"'), ('"토리즈 호수"', '"토크 폭포"'), ('"아라 제도"', '"아란 제도"'),
         ('"갈웨이만"', '"골웨이만"'), ('"조지가"', '"조지안 쿼터"'), ('"클리프스오브모허 투어"', '"서부 해안 당일 투어"'),
         ('"클리프스오브모허"', '"모허 절벽"'), ('"링오브케리"', '"링 오브 케리"'), ('"미디벌마일"', '"메디벌 마일"'), ('"잉글리시마켓"', '"잉글리시 마켓"')]
ADD = {
 'dublin': [
  (6, S('킬메인햄 교도소', 'Kilmainham Gaol', '1916년 부활절 봉기 지도자들이 처형된 옛 교도소로, 아일랜드 독립 투쟁사를 안내 투어로 봅니다.', 'The former prison where leaders of the 1916 Easter Rising were executed, toured with a guide through Ireland’s fight for independence.', 'Kilmainham Gaol', 75, 90, b='req', n='안내 투어로만 들어가고 자주 매진되니 온라인으로 미리 예매하세요.|Guided tours only and they often sell out—book online ahead.')),
  (7, S('더블린 성과 체스터 비티', 'Dublin Castle & Chester Beatty', '700여 년 영국 통치의 중심이던 성과, 성 안 정원에 있는 체스터 비티 도서관(동서양 필사본·미술품, 무료)입니다.', 'The seat of British rule for some 700 years, and in its garden the Chester Beatty library of manuscripts and art from East and West (free).', 'Dublin Castle', 60, 120)),
  (8, S('크라이스트 처치 대성당', 'Christ Church Cathedral', '11세기에 세운 더블린 최고(最古) 성당으로, 넓은 중세 지하 납골당이 있습니다.', 'Dublin’s oldest cathedral, founded in the 11th century, with a large medieval crypt.', 'Christ Church Cathedral Dublin', 45, 60)),
  (9, S('성 패트릭 대성당', 'St Patrick’s Cathedral', '아일랜드 최대 성당으로, ‘걸리버 여행기’의 조너선 스위프트가 주임 사제였습니다.', 'Ireland’s largest church, where Gulliver’s Travels author Jonathan Swift was dean.', 'St Patrick’s Cathedral Dublin', 45, 60)),
  (10, S('티링 위스키 증류소', 'Teeling Whiskey Distillery', '리버티스 지구에서 125년 만에 더블린에 다시 문을 연 위스키 증류소로, 투어 뒤 시음합니다.', 'The whiskey distillery that brought distilling back to Dublin’s Liberties after 125 years, with tours and tastings.', 'Teeling Whiskey Distillery', 60, 75, b='rec')),
  (11, S('제임슨 증류소 보 스트리트', 'Jameson Distillery Bow St.', '스미스필드의 옛 제임슨 증류소 건물에서 아이리시 위스키 이야기를 듣고 시음하는 투어입니다.', 'Tours and tastings telling the Irish whiskey story in the original Jameson distillery at Smithfield.', 'Jameson Distillery Bow St', 60, 90, b='rec')),
  (12, S('아일랜드 국립 박물관(고고학관)', 'National Museum of Ireland – Archaeology', '켈트 금 세공품과 습지 미라, 중세 보물을 모은 박물관입니다.', 'Celtic gold, bog bodies and medieval treasures.', 'National Museum of Ireland Archaeology', 60, 120, n=FREE)),
  (13, S('아일랜드 국립 미술관', 'National Gallery of Ireland', '카라바조 ‘그리스도의 체포’와 잭 B. 예이츠 등 유럽·아일랜드 회화를 모은 미술관입니다.', 'European and Irish painting, from Caravaggio’s Taking of Christ to Jack B. Yeats.', 'National Gallery of Ireland', 60, 120, n=FREE)),
  (14, S('세인트 스티븐스 그린과 그래프턴 스트리트', 'St Stephen’s Green & Grafton Street', '조지 시대 광장 공원과, 거리 공연이 이어지는 보행자 쇼핑 거리입니다.', 'The Georgian square park and the pedestrian shopping street of buskers.', 'St Stephen’s Green', 45, 60)),
  (15, S('하페니 다리', 'Ha’penny Bridge', '1816년에 놓은 리피강의 주철 보행자 다리로, 건너는 데 반 페니 통행료를 받던 데서 이름이 왔습니다.', 'The 1816 cast-iron footbridge over the Liffey, named for its old half-penny toll.', 'Ha’penny Bridge', 10, 15)),
  (16, S('EPIC 아일랜드 이민 박물관', 'EPIC The Irish Emigration Museum', '세계로 흩어진 아일랜드 이민자들의 이야기를 체험형으로 보여 주는 독랜즈의 박물관입니다.', 'An interactive museum in the Docklands on the Irish who emigrated around the world.', 'EPIC The Irish Emigration Museum', 90, 120)),
  (17, S('글래스네빈 묘지', 'Glasnevin Cemetery', '마이클 콜린스 등 아일랜드 역사 인물이 잠든 국립 묘지로, 박물관과 안내 투어가 있습니다.', 'The national cemetery where Michael Collins and other figures of Irish history lie, with a museum and guided tours.', 'Glasnevin Cemetery', 60, 90)),
  (18, S('호스', 'Howth', '바닷가 절벽 산책로와 항구 해산물 식당이 있는 반도 마을입니다.', 'A peninsula fishing village with a clifftop walk and harbour seafood.', 'Howth', 180, 240, group=DAY, n='DART 전철로 약 30분입니다.|About 30 min on the DART.')),
  (19, S('글렌달록', 'Glendalough', '위클로 산지 호숫가에 6세기 성 케빈의 수도원 터와 원탑이 남은 계곡입니다.', 'A Wicklow Mountains valley of lakes and St Kevin’s 6th-century monastic site with its round tower.', 'Glendalough', 240, 360, group=DAY, n='더블린에서 버스나 투어로 약 1시간 반입니다.|About 1 hr 30 by bus or tour from Dublin.')),
  (20, S('브루 너 보너(뉴그레인지)', 'Brú na Bóinne (Newgrange)', '피라미드보다 오래된 5천 년 전 신석기 고분군으로, 동지 아침 햇빛이 무덤 안까지 들어옵니다. 유네스코 세계유산입니다.', 'Neolithic passage tombs older than the pyramids, where the winter-solstice sunrise reaches the inner chamber; a UNESCO World Heritage Site.', 'Brú na Bóinne Visitor Centre', 180, 240, group=DAY, b='rec', n='방문자 센터에서 셔틀버스 투어로만 들어갑니다.|Access is only by shuttle tour from the visitor centre.')),
 ],
 'galway': [
  (6, S('골웨이 대성당', 'Galway Cathedral', '1965년에 완공된 석조 대성당으로, 코리브강 변에 큰 돔이 솟아 있습니다.', 'The stone cathedral completed in 1965, its dome rising by the River Corrib.', 'Galway Cathedral', 30, 45)),
  (7, S('스페인 아치와 골웨이 시립 박물관', 'Spanish Arch & Galway City Museum', '16세기 성벽 아치와 그 옆의 시립 박물관(무료)입니다.', 'The 16th-century arch in the old walls and the free city museum beside it.', 'Galway City Museum', 45, 60)),
  (8, S('코네마라와 카일모어 수도원', 'Connemara & Kylemore Abbey', '황무지와 호수가 펼쳐진 코네마라 지역과, 호숫가의 성 같은 베네딕도회 수도원입니다.', 'The bog-and-lake country of Connemara and the castle-like Benedictine abbey on its lake.', 'Kylemore Abbey', 360, 480, group=DAY, n='골웨이에서 버스나 투어로 약 1시간 30분입니다.|About 1 hr 30 by bus or tour from Galway.')),
 ],
 'cork': [
  (6, S('엘리자베스 요새', 'Elizabeth Fort', '17세기 별 모양 요새로, 성벽 위에서 시내가 보입니다.', 'The 17th-century star fort, with views over the city from its walls.', 'Elizabeth Fort Cork', 30, 45)),
  (7, S('코크 시립 교도소', 'Cork City Gaol', '성처럼 생긴 19세기 교도소로, 수감자 인형과 이야기로 꾸며져 있습니다.', 'The castle-like 19th-century prison, brought to life with figures and stories of its inmates.', 'Cork City Gaol', 60, 90)),
  (8, S('코브와 타이태닉 익스피리언스', 'Cobh & Titanic Experience Cobh', '타이태닉호가 마지막으로 들른 항구 마을로, 옛 화이트 스타 라인 사무소에 체험관이 있습니다.', 'The harbour town that was the Titanic’s last port of call, with an exhibition in the old White Star Line office.', 'Titanic Experience Cobh', 180, 240, group=DAY, n='코크에서 기차로 약 25분입니다.|About 25 min by train from Cork.')),
  (9, S('제임슨 증류소 미들턴', 'Jameson Distillery Midleton', '제임슨 위스키를 만드는 증류소 단지로, 옛 증류소 건물 투어와 시음이 있습니다.', 'The distillery complex where Jameson is made, with tours of the old distillery and tastings.', 'Jameson Distillery Midleton', 90, 120, group=DAY, b='rec', n='코크에서 기차로 약 25분입니다.|About 25 min by train from Cork.')),
 ],
 'killarney': [
  (6, S('던로 협곡', 'Gap of Dunloe', '두 산 사이의 좁은 빙하 협곡 길로, 걷거나 자전거·마차로 지나고 배를 타고 돌아올 수 있습니다.', 'A narrow glacial pass between mountains, walked, cycled or done by jaunting car, with a boat back across the lakes.', 'Gap of Dunloe', 240, 360, group=DAY)),
 ],
 'kilkenny': [
  (6, S('로스 하우스', 'Rothe House', '17세기 상인의 저택과 정원입니다.', 'A 17th-century merchant’s townhouse and garden.', 'Rothe House Kilkenny', 45, 60)),
  (7, S('캐셜 바위', 'Rock of Cashel', '석회암 언덕 위에 대성당·원탑·코맥 예배당이 모인 중세 유적으로, 먼스터 왕들의 거처였습니다.', 'The medieval complex of cathedral, round tower and Cormac’s Chapel on a limestone hill, once the seat of the kings of Munster.', 'Rock of Cashel', 90, 120, group=DAY, n='킬케니에서 차로 약 1시간입니다.|About 1 hr by car from Kilkenny.')),
 ],
 'limerick': [
  (6, S('성 메리 대성당', 'St Mary’s Cathedral', '1168년에 세운 리머릭에서 가장 오래된 건물입니다.', 'Founded in 1168, the oldest building in Limerick still in use.', 'St Mary’s Cathedral Limerick', 30, 45)),
  (7, S('밀크 마켓', 'Milk Market', '1852년부터 이어 온 지붕 덮인 시장으로, 주말에 먹거리 장이 섭니다.', 'The covered market trading since 1852, busiest with food stalls at weekends.', 'Milk Market Limerick', 45, 60)),
  (8, S('번래티 성과 민속 공원', 'Bunratty Castle & Folk Park', '15세기 탑 성과 19세기 아일랜드 마을을 재현한 민속 공원입니다.', 'A 15th-century tower house and a folk park recreating 19th-century Irish village life.', 'Bunratty Castle and Folk Park', 150, 180, group=DAY, n='리머릭에서 버스로 약 25분입니다.|About 25 min by bus from Limerick.')),
 ],
}
IT = [
 ("  dublin: { days: [['', 1, 2, 3, 4]], trips: [['모허 절벽|Cliffs of Moher', 5]] },",
  "  dublin: {\n    days: [\n      ['트리니티와 조지 시대 더블린|Trinity & Georgian Dublin', 1, 12, 13, 14],\n      ['구시가와 템플 바|Old city & Temple Bar', 7, 8, 9, 15, 2],\n      ['리버티스와 서쪽|The Liberties & west', 10, 3, 6, 11, 4],\n      ['독랜즈와 북쪽|Docklands & north', 16, 17],\n    ],\n    trips: [\n      ['호스|Howth', 18],\n      ['글렌달록|Glendalough', 19],\n      ['뉴그레인지|Newgrange', 20],\n      ['모허 절벽|Cliffs of Moher', 5],\n    ],\n  },"),
 ("    days: [['', 2, 1, 3]],\n    trips: [\n      ['모허 절벽|Cliffs of Moher', 4],\n      ['아란 제도|Aran Islands', 5],\n",
  "    days: [['', 2, 1, 7, 6, 3]],\n    trips: [\n      ['모허 절벽|Cliffs of Moher', 4],\n      ['아란 제도|Aran Islands', 5],\n      ['코네마라|Connemara', 8],\n"),
 ("  cork: { days: [['', 3, 1, 2, 4]], trips: [['블라니성|Blarney Castle', 5]] },",
  "  cork: {\n    days: [['', 3, 1, 2, 6, 4, 7]],\n    trips: [\n      ['블라니성|Blarney Castle', 5],\n      ['코브|Cobh', 8],\n      ['미들턴 제임슨 증류소|Jameson Midleton', 9],\n    ],\n  },"),
 ("trips: [['링 오브 케리|Ring of Kerry', 4]] },", "trips: [['링 오브 케리|Ring of Kerry', 4], ['던로 협곡|Gap of Dunloe', 6]] },"),
 ("  kilkenny: [1, 5, 2, 3],", "  kilkenny: { days: [['', 1, 5, 2, 6, 3]], trips: [['캐셜 바위|Rock of Cashel', 7]] },"),
 ("  limerick: [4, 3, 1, 2, 5],", "  limerick: { days: [['', 4, 3, 7, 1, 6, 2, 5]], trips: [['번래티 성|Bunratty Castle', 8]] },"),
]
G = {'dublin': [(('트리니티와 조지 시대 더블린', 'Trinity & Georgian Dublin'), [1, 12, 13, 14]), (('구시가와 템플 바', 'Old city & Temple Bar'), [7, 8, 9, 15, 2]),
                (('리버티스와 서쪽', 'The Liberties & west'), [10, 3, 6, 11, 4]), (('독랜즈와 북쪽', 'Docklands & north'), [16, 17]), (DAY, [18, 19, 20, 5])]}


def main():
    c = rd('cities.ts')
    for a, b in NAMES:
        assert c.count(a) == 1, a
        c = c.replace(a, b)
    for cid, items in ADD.items():
        c = add_sights(c, cid, items, 'visit-uk.ts')
    it = rd('itinerary-uk.ts')
    for a, b in IT:
        assert it.count(a) == 1, a[:60]
        it = it.replace(a, b)
    wr('itinerary-uk.ts', it)
    for cid in ADD:
        if cid in G:
            c = reorder(c, cid, [(n, g) for g, ns in G[cid] for n in ns])
        else:
            by = blocks(c, cid)
            c = reorder(c, cid, [(n, read_group(by[n])) for n in itinerary_order(it, cid, set(by))])
    wr('cities.ts', c)


if __name__ == '__main__':
    main()
