#!/usr/bin/env python3
"""Kosovo step 1 (2026-11-07, all-country plan): the three cities had only three sights each. Rewrite the one-line
descriptions and add sights (UNESCO medieval monasteries Gračanica, Visoki Dečani and Our Lady of Ljeviš; Bear
Sanctuary; Radavc cave), lists in itinerary order. Run once."""
import re
from add_daytrip_places import rd, wr
from sight_order import add_sights, blocks, itinerary_order, read_group, reorder
from review_sk import S

DAY = ('근교 당일치기', 'Day trip')
REWRITE = {
 'pristina-h1': ('뉴본 기념비', 'NEWBORN Monument', '2008년 독립 선언 날 세운 글자 조형물로, 해마다 새 그림으로 다시 칠합니다.', 'The giant lettering unveiled on independence day in 2008, repainted with a new design every year.'),
 'pristina-h2': ('코소보 국립도서관', 'National Library of Kosovo', '돔 99개와 금속 격자로 덮인 1982년 건물로, 독특한 외관으로 유명합니다.', 'The 1982 building of 99 domes wrapped in a metal lattice, famous for its unusual look.'),
 'pristina-h3': ('마더 테레사 대로', 'Mother Teresa Boulevard', '시내 중심을 가로지르는 보행자 거리로, 카페와 광장이 이어집니다.', 'The pedestrian boulevard through the centre, lined with cafés and squares.'),
 'prizren-h1': ('프리즈렌 요새', 'Prizren Fortress', '시내 위 언덕의 요새로, 해 질 녘 붉은 지붕과 첨탑이 내려다보입니다.', 'The hilltop fortress above town, with sunset views over red roofs and minarets.'),
 'prizren-h2': ('시난 파샤 모스크', 'Sinan Pasha Mosque', '1615년에 세운 오스만 모스크로, 강가 구시가의 상징입니다.', 'The Ottoman mosque of 1615, the landmark of the riverside old town.'),
 'prizren-h3': ('프리즈렌 구시가', 'Prizren Old Town', '비스트리차강을 따라 돌다리와 샤드르반 광장, 은세공 가게가 모인 구시가입니다.', 'The old town along the Bistrica, with its stone bridge, Shadervan square and silver-filigree shops.'),
 'peja-h1': ('루고바 협곡', 'Rugova Canyon', '페야 서쪽의 깎아지른 석회암 협곡으로, 산길과 집라인, 산악 도로가 있습니다.', 'The sheer limestone canyon west of Peja, with hiking trails, a zipline and a mountain road.'),
 'peja-h2': ('페치 총대주교좌 수도원', 'Patriarchate of Peć', '13~14세기 세르비아 정교회 총대주교좌 교회 네 곳이 붙어 있는 수도원으로, 유네스코 세계유산입니다.', 'Four joined 13th–14th-century churches that were the seat of the Serbian Patriarchs; a UNESCO World Heritage Site.'),
 'peja-h3': ('페야 구시장', 'Peja Old Bazaar', '오스만 시대 상점가가 남은 시내 중심의 시장 거리입니다.', 'The market streets in the centre where Ottoman-era shops survive.'),
}
ADD = {
 'pristina': [
  (4, S('마더 테레사 대성당', 'Cathedral of Saint Mother Teresa', '2017년 봉헌한 가톨릭 대성당으로, 종탑 전망대에서 시내가 내려다보입니다.', 'The Catholic cathedral consecrated in 2017, with a bell-tower lift giving views over the city.', 'Cathedral of Saint Mother Teresa Pristina', 20, 30)),
  (5, S('민속 박물관 (에민 지쿠 저택)', 'Ethnological Museum (Emin Gjiku)', '18세기 오스만 시대 저택 두 채에 알바니아 전통 생활과 의상을 전시합니다.', 'Two 18th-century Ottoman houses showing traditional Albanian life and costume.', 'Ethnological Museum Pristina', 45, 60)),
  (6, S('황제 모스크', 'Imperial Mosque (Fatih Mosque)', '1461년 메흐메트 2세 때 세운 프리슈티나에서 가장 오래된 모스크입니다.', 'Pristina’s oldest mosque, built in 1461 under Mehmed II.', 'Imperial Mosque Pristina', 15, 20)),
  (7, S('그라차니차 수도원', 'Gračanica Monastery', '1321년 세르비아 왕 밀루틴이 지은 수도원으로, 비잔틴 프레스코가 유명한 유네스코 세계유산입니다.', 'The monastery built by King Milutin in 1321, famous for its Byzantine frescoes; a UNESCO World Heritage Site.', 'Gračanica Monastery', 60, 90, group=DAY,
        n='프리슈티나에서 버스나 택시로 약 20분입니다. 단정한 옷을 입으세요.|About 20 min by bus or taxi from Pristina; dress modestly.')),
  (8, S('곰 보호소 프리슈티나', 'Bear Sanctuary Prishtina', '식당 우리에서 구조한 곰들이 숲속에서 지내는 보호소입니다.', 'A forest sanctuary for bears rescued from restaurant cages.', 'Bear Sanctuary Prishtina', 60, 90, group=DAY,
        n='프리슈티나에서 차로 약 25분입니다.|About 25 min by car from Pristina.')),
 ],
 'prizren': [
  (4, S('돌다리', 'Stone Bridge', '비스트리차강 위 오스만 시대 돌다리로, 구시가 산책의 출발점입니다.', 'The Ottoman stone bridge over the Bistrica, where old-town walks begin.', 'Stone Bridge Prizren', 10, 15)),
  (5, S('료비시의 성모 성당', 'Church of Our Lady of Ljeviš', '14세기 세르비아 정교회 성당으로 프레스코가 남은 유네스코 세계유산입니다.', 'A 14th-century Serbian Orthodox church with surviving frescoes; a UNESCO World Heritage Site.', 'Church of Our Lady of Ljeviš', 20, 30,
        n='내부 관람은 시간이 정해져 있지 않아 문이 닫혀 있을 수 있습니다.|Interior visits are irregular, so it may be closed.')),
  (6, S('프리즈렌 연맹 기념관', 'League of Prizren Complex', '1878년 알바니아 민족 운동이 시작된 회의장을 재현한 박물관입니다.', 'A museum recreating the hall where the 1878 Albanian national movement began.', 'League of Prizren Museum', 30, 45)),
  (7, S('가지 메흐메드 파샤 하맘', 'Gazi Mehmed Pasha Hammam', '16세기 오스만 공중목욕탕을 복원해 전시 공간으로 쓰고 있습니다.', 'A restored 16th-century Ottoman bathhouse now used for exhibitions.', 'Gazi Mehmed Pasha Hammam Prizren', 20, 30)),
 ],
 'peja': [
  (4, S('바이라클리 모스크', 'Bajrakli Mosque', '15세기 오스만 시대 모스크로, 구시장 한가운데에 있습니다.', 'The 15th-century Ottoman mosque in the middle of the old bazaar.', 'Bajrakli Mosque Peja', 15, 20)),
  (5, S('비소키 데차니 수도원', 'Visoki Dečani Monastery', '14세기 세르비아 정교회 수도원으로, 중세 발칸 최대 교회 안에 프레스코 1,000여 장면이 남은 유네스코 세계유산입니다.', 'A 14th-century Serbian Orthodox monastery whose church—the largest medieval church in the Balkans—holds some 1,000 fresco scenes; a UNESCO World Heritage Site.', 'Visoki Dečani Monastery', 60, 90, group=DAY,
        n='페야에서 차로 약 25분입니다. 입구에서 여권을 맡기고 KFOR가 지킵니다.|About 25 min by car from Peja; passports are held at the gate and KFOR guards the site.')),
  (6, S('라다바츠 동굴과 하얀 드린강 샘', 'Radavc Cave & White Drin spring', '종유석 동굴과, 그 옆 하얀 드린강이 솟아 폭포로 떨어지는 곳입니다.', 'A stalactite cave and, beside it, the spring of the White Drin tumbling out as a waterfall.', 'Radavc Cave', 90, 120, group=DAY,
        n='페야에서 차로 약 20분입니다.|About 20 min by car from Peja.')),
 ],
}
IT = [
 ("  pristina: [3, 2, 1],", "  pristina: { days: [['', 3, 4, 2, 1, 6, 5]], trips: [['그라차니차 수도원|Gračanica', 7], ['곰 보호소|Bear Sanctuary', 8]] },"),
 ("  prizren: [3, 2, 1],", "  prizren: [4, 3, 2, 7, 6, 5, 1],"),
 ("  peja: { days: [['', 3, 2]], trips: [['루고바 협곡|Rugova Canyon', 1]] },",
  "  peja: { days: [['', 3, 4, 2]], trips: [['루고바 협곡|Rugova Canyon', 1], ['비소키 데차니|Visoki Dečani', 5], ['라다바츠 동굴|Radavc Cave', 6]] },"),
]


def main():
    c = rd('cities.ts')
    for hid, (ko, en, dko, den) in REWRITE.items():
        i = c.index(f'id: "{hid}"')
        j = c.index('\n      }', i)
        blk = c[i:j]
        blk = re.sub(r'name: \{[^\n]*\}', f'name: {{ ko: "{ko}", en: "{en}" }}', blk)
        blk = re.sub(r'description: \{[^\n]*\}', f'description: {{ ko: "{dko}", en: "{den}" }}', blk)
        c = c[:i] + blk + c[j:]
    for cid, items in ADD.items():
        c = add_sights(c, cid, items, 'visit-balkan.ts')
    it = rd('itinerary-south.ts')
    for a, b in IT:
        assert it.count(a) == 1, a[:60]
        it = it.replace(a, b)
    wr('itinerary-south.ts', it)
    for cid in ADD:
        by = blocks(c, cid)
        m = re.search(rf"^  '?{cid}'?: (.*?)(?=^  [a-z'/])", it, re.M | re.S)
        trips = {int(x) for t in re.findall(r"trips: \[(.*)\]", m.group(1), re.S) for x in re.findall(r", (\d+)\]", t)}
        c = reorder(c, cid, [(n, DAY if n in trips else read_group(by[n])) for n in itinerary_order(it, cid, set(by))])
    wr('cities.ts', c)


if __name__ == '__main__':
    main()
