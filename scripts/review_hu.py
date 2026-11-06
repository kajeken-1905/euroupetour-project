#!/usr/bin/env python3
"""Hungary step 1 (2026-11-06, all-country plan): more sights for Budapest and the six smaller cities (incl. themed:
Zwack Unicum museum, Villány wine villages, Pick salami & paprika museum, Szentendre marzipan museum), Korean name
fixes, lists in itinerary order (Budapest keeps its district groups). Gellért Baths left out: closed from 2025-10-01
for renovation until about 2028 (Rudas added instead). Run once."""
import re
from add_daytrip_places import rd, wr
from sight_order import add_sights, blocks, itinerary_order, read_group, reorder, city_span
from review_sk import S

DAY = ('근교 당일치기', 'Day trip')
CASTLE = ('부다 · 왕궁 언덕과 겔레르트 언덕', 'Buda · Castle Hill & Gellért Hill')
PEST = ('페스트 도심', 'Pest centre')
JEW = ('유대인 지구', 'Jewish Quarter')
AND = ('안드라시 거리와 시티 파크', 'Andrássy Avenue & City Park')
# (city, old ko, new ko) — replaced only inside that city's block
NAMES = [('debrecen', '메인 광장', '코슈트 광장'), ('debrecen', '수성온천', '아쿠아티쿰 온천'), ('debrecen', '나지에르되', '너지에르되 공원'),
         ('pecs', '서체니 광장', '세체니 광장'), ('pecs', '졸너이 문화 지구', '졸나이 문화 지구'),
         ('szeged', '도모 광장', '돔 광장'), ('szeged', '레블 궁전', '레외크 궁전'), ('szeged', '신나고게', '신 유대교 회당'),
         ('eger', '도브고 광장', '도보 광장'), ('eger', '밸리 오브 더 뷰티풀 우먼', '미녀의 계곡'), ('eger', '리세움', '리체움')]
# also applied by hand after the run: szeged-h6 became the Lower Town Franciscan Church (Pick museum shown temporarily
# closed on Google Maps 2026-11-06); szentendre-h6 is the Szamos marzipan museum (Szabó not found); budapest '피셔만스 바스티온' → '어부의 요새'
ADD = {
 'budapest': [
  (18, S('루더시 온천', 'Rudas Baths', '16세기 오스만 시대 돔 아래 팔각 탕이 남은 온천으로, 옥상 온수 풀에서 다뉴브강이 내려다보입니다.', 'A 16th-century Ottoman bath with its octagonal pool under the original dome, and a rooftop hot pool over the Danube.', 'Rudas Thermal Bath', 120, 180, group=CASTLE,
         s='https://en.rudasfurdo.hu/', n='오스만 시대 탕은 요일에 따라 남녀가 나뉘어 들어가는 날이 있으니 공식 사이트를 확인하세요. 겔레르트 온천은 2028년 무렵까지 공사로 닫혀 있습니다.|The Ottoman pool has men-only and women-only days—check the official site. The Gellért Baths are closed for renovation until about 2028.')),
  (19, S('바위 속 병원', 'Hospital in the Rock', '왕궁 언덕 아래 동굴에 만든 제2차 세계 대전 비밀 병원이자 냉전 시대 핵 벙커로, 안내 투어로 봅니다.', 'A secret WWII hospital and Cold War nuclear bunker in the caves beneath Castle Hill, seen on guided tours.', 'Hospital in the Rock Budapest', 60, 75, group=CASTLE,
         b='rec', s='https://www.sziklakorhaz.eu/en', n='안내 투어로만 들어갑니다.|Guided tours only.')),
  (20, S('헝가리 국립 박물관', 'Hungarian National Museum', '1848년 혁명이 시작된 계단으로 유명한 신고전주의 건물로, 헝가리 역사와 대관식 망토를 전시합니다.', 'The neoclassical building whose steps saw the start of the 1848 revolution, telling Hungarian history and holding the coronation mantle.', 'Hungarian National Museum', 90, 120, group=PEST,
         c='mon', s='https://mnm.hu/en', n='2025년 12월부터 일부 전시실이 공사로 닫혀 있으니 공식 사이트를 확인하세요.|Some halls have been closed for renovation since December 2025—check the official site.')),
  (21, S('심플러 케르트', 'Szimpla Kert', '버려진 공장 건물을 낡은 가구로 채워 만든 부다페스트 최초의 ‘폐허 술집’으로, 일요일 오전엔 농산물 장이 섭니다.', 'Budapest’s first “ruin bar”, a derelict building filled with mismatched junk furniture, with a farmers’ market on Sunday mornings.', 'Szimpla Kert', 45, 90, group=JEW)),
  (22, S('버이더후녀드 성', 'Vajdahunyad Castle', '1896년 건국 1000년 박람회 때 헝가리 각지의 건축 양식을 모아 지은 성으로, 안에 농업 박물관이 있습니다.', 'A castle built for the 1896 millennium exhibition from copies of buildings across Hungary, housing the Museum of Agriculture.', 'Vajdahunyad Castle', 30, 60, group=AND)),
  (23, S('츠바크 우니쿰 박물관', 'Zwack Unicum Museum', '약초 40여 가지로 만드는 헝가리 국민 술 우니쿰의 양조장 박물관으로, 숙성 지하실을 보고 시음합니다.', 'The distillery museum of Unicum, Hungary’s herbal liqueur of 40-odd herbs, with its ageing cellars and a tasting.', 'Zwack Unicum Museum', 60, 90, group=PEST)),
  (24, S('괴될뢰 왕궁', 'Gödöllő Royal Palace', '엘리자베트(시시) 왕비가 가장 사랑한 바로크 궁전으로, 왕비의 방과 넓은 정원이 있습니다.', 'The Baroque palace that was Empress Elisabeth (Sisi)’s favourite retreat, with her rooms and large gardens.', 'Gödöllő Royal Palace', 120, 180, group=DAY,
         s='https://kiralyikastely.hu/en', n='부다페스트에서 교외 전철 HÉV로 약 1시간입니다.|About 1 hr on the HÉV suburban train from Budapest.')),
 ],
 'szentendre': [
  (6, S('서모시 마르치판 박물관', 'Szamos Marzipan Museum', '마르치판으로 만든 인형과 조형물을 전시하는 박물관으로, 만드는 모습을 볼 수 있는 공방과 과자점이 함께 있습니다.', 'A museum of marzipan figures and sculptures, with a workshop where you can watch them being made and a confectionery shop.', 'Szamos Marcipán Múzeum Szentendre', 20, 30)),
  (7, S('세르비아 정교회 대성당', 'Belgrade Cathedral (Serbian Orthodox)', '18세기 세르비아 이주민이 세운 바로크 정교회 대성당으로, 옆에 교회 보물 전시관이 있습니다.', 'The Baroque Serbian Orthodox cathedral built by 18th-century Serbian settlers, with a church art collection beside it.', 'Belgrade Cathedral Szentendre', 20, 30)),
  (8, S('비셰그라드 성채와 왕궁 터', 'Visegrád Citadel & Royal Palace', '다뉴브 굽이를 내려다보는 산 위 성채와, 마차시 왕의 르네상스 왕궁 터입니다.', 'The hilltop citadel above the Danube Bend and the ruins of King Matthias’s Renaissance palace.', 'Visegrád Citadel', 180, 240, group=DAY,
        n='센텐드레에서 880번 버스로 약 45분입니다.|About 45 min on bus 880 from Szentendre.')),
 ],
 'debrecen': [
  (6, S('개혁파 대학', 'Reformed College of Debrecen', '1538년 세운 학교로, 1849년 헝가리 독립 선언이 이곳 기도실에서 이뤄졌습니다. 옛 도서관을 볼 수 있습니다.', 'The college founded in 1538, where Hungary’s 1849 Declaration of Independence was made in its oratory; its historic library can be visited.', 'Reformed College of Debrecen', 45, 60)),
  (7, S('호르토바지 국립공원', 'Hortobágy National Park', '헝가리 대평원의 초원 지대로, 아홉 아치 다리와 목동 문화, 회색 소가 남아 있습니다. 유네스코 세계유산입니다.', 'The Great Plain’s grassland puszta, with the Nine-Arch Bridge, herding traditions and grey cattle; a UNESCO World Heritage Site.', 'Nine-hole Bridge Hortobágy', 240, 360, group=DAY,
        n='데브레첸에서 기차로 약 1시간입니다.|About 1 hr by train from Debrecen.')),
 ],
 'pecs': [
  (6, S('촌트바리 박물관', 'Csontváry Museum', '헝가리 화가 촌트바리 코스트커 티버더르의 대형 풍경화를 모은 미술관입니다.', 'A gallery of the large visionary landscapes of the Hungarian painter Tivadar Csontváry Kosztka.', 'Csontváry Museum Pécs', 45, 60)),
  (7, S('빌라니 와인 마을', 'Villány wine villages', '헝가리 남부 대표 레드 와인 산지로, 와인 저장고가 줄지은 거리에서 시음합니다.', 'Southern Hungary’s leading red-wine region, with streets of wine cellars offering tastings.', 'Villány', 240, 360, group=DAY,
        n='페치에서 기차로 약 1시간입니다.|About 1 hr by train from Pécs.')),
 ],
 'szeged': [
  (6, S('피크 살라미·파프리카 박물관', 'Pick Salami & Paprika Museum', '세게드의 명물 겨울 살라미와 파프리카를 만드는 과정을 보여 주는 박물관입니다.', 'A museum on how Szeged’s famous winter salami and paprika are made.', 'Pick Salami and Szeged Paprika Museum', 45, 60)),
  (7, S('모러 페렌츠 박물관', 'Móra Ferenc Museum', '티서 강변의 신고전주의 건물에 있는 지역 박물관으로, 고고학과 민속 전시가 있습니다.', 'The regional museum in a neoclassical building on the Tisza, with archaeology and folk collections.', 'Móra Ferenc Museum', 60, 90)),
  (8, S('오푸스터세르 국립 역사 공원', 'Ópusztaszer National Heritage Park', '마자르인의 정착을 그린 거대한 원형 파노라마 그림 ‘페슈티 파노라마’와 야외 민속 마을이 있습니다.', 'Home of the Feszty Panorama—a vast circular painting of the Magyar arrival—and an open-air village museum.', 'Ópusztaszer National Heritage Park', 180, 240, group=DAY,
        n='세게드에서 차로 약 40분입니다.|About 40 min by car from Szeged.')),
 ],
 'eger': [
  (6, S('에게르 대성당', 'Eger Cathedral', '헝가리에서 두 번째로 큰 성당으로, 신고전주의 기둥 현관이 있습니다.', 'Hungary’s second-largest church, with a neoclassical columned portico.', 'Eger Cathedral', 20, 30)),
  (7, S('튀르키예 목욕탕', 'Turkish Bath Eger', '17세기 오스만 시대 돔 탕을 되살린 온천으로, 시내 온천 공원 옆에 있습니다.', 'A restored 17th-century Ottoman domed bath beside the town’s thermal park.', 'Turkish Bath Eger', 120, 180)),
 ],
}
IT = [
 ("      ['부다 왕궁 언덕|Castle Hill', 5, 7, 9, 2, 10],\n      ['국회의사당과 다뉴브|Parliament & the Danube', 14, 1, 13, 8, 17, 6],\n      ['안드라시 거리와 시티 파크|Andrássy Avenue & City Park', 12, 11, 15, 4, 3],\n    ],\n    trips: [['에스테르곰|Esztergom', 16]],",
  "      ['부다 왕궁 언덕|Castle Hill', 5, 7, 9, 2, 19, 10, 18],\n      ['국회의사당과 다뉴브|Parliament & the Danube', 14, 1, 13, 8, 17, 20, 6, 23],\n      ['안드라시 거리와 시티 파크|Andrássy Avenue & City Park', 12, 21, 11, 15, 4, 22, 3],\n    ],\n    trips: [\n      ['에스테르곰|Esztergom', 16],\n      ['괴될뢰 왕궁|Gödöllő Palace', 24],\n    ],"),
 ("  szentendre: [1, 2, 4, 3, 5],", "  szentendre: { days: [['', 1, 6, 2, 7, 4, 3, 5]], trips: [['비셰그라드|Visegrád', 8]] },"),
 ("  debrecen: [4, 1, 2, 3, 5],", "  debrecen: { days: [['', 4, 1, 6, 2, 3, 5]], trips: [['호르토바지|Hortobágy', 7]] },"),
 ("  pecs: [5, 2, 1, 3, 4],", "  pecs: { days: [['', 5, 2, 1, 3, 6, 4]], trips: [['빌라니|Villány', 7]] },"),
 ("  szeged: [2, 1, 3, 5, 4],", "  szeged: { days: [['', 2, 1, 7, 3, 6, 5, 4]], trips: [['오푸스터세르|Ópusztaszer', 8]] },"),
 ("  eger: [1, 2, 3, 5, 4],", "  eger: [1, 2, 3, 6, 5, 7, 4],"),
]


def main():
    c = rd('cities.ts')
    for cid, a, b in NAMES:
        i, j = city_span(c, cid)
        blk = c[i:j]
        assert blk.count(f'"{a}"') == 1, (cid, a)
        c = c[:i] + blk.replace(f'"{a}"', f'"{b}"') + c[j:]
    for cid, items in ADD.items():
        c = add_sights(c, cid, items, 'visit-central.ts')
    it = rd('itinerary-north.ts')
    for a, b in IT:
        assert it.count(a) == 1, a[:60]
        it = it.replace(a, b)
    wr('itinerary-north.ts', it)
    for cid in ADD:
        by = blocks(c, cid)
        if cid == 'budapest':
            order = [n for n in itinerary_order(it, cid, set(by))]
            order = sorted(order, key=lambda n: [CASTLE[0], PEST[0], JEW[0], AND[0], '머르기트 섬', DAY[0]].index(read_group(by[n])[0]))
            c = reorder(c, cid, [(n, read_group(by[n])) for n in order])
        else:
            c = reorder(c, cid, [(n, read_group(by[n])) for n in itinerary_order(it, cid, set(by))])
    wr('cities.ts', c)


if __name__ == '__main__':
    main()
