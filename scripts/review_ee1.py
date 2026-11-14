#!/usr/bin/env python3
"""Estonia step 1 (all three cities), 2026-11-14, user approved the plan.
Fixes: every one-line description and blurb; Tartu h4 'street art' (its photo was the Estonian National Museum) becomes
the Estonian National Museum; Pärnu h4 'coastal park' and h5 'yacht club' become the Tallinn Gate and St Elisabeth's
Church. New sights: Tallinn 8, Tartu 2, Pärnu 1. Tallinn gets groups and a 3-day itinerary; country city groups follow
the regions. Run once."""
import re, urllib.parse
from add_daytrip_places import rd, wr
from sight_order import add_sights, blocks, itinerary_order, reorder
from review_sk import S

DAY = ('근교 당일치기', 'Day trip')
T_OLD = ('구시가', 'Old Town')
T_KAL = ('칼라마야와 항구', 'Kalamaja & harbour')
T_KAD = ('카드리오르그와 시내 밖', 'Kadriorg & beyond')

BLURB = {
 'tallinn': ('에스토니아의 수도. 성벽과 탑이 거의 그대로 남은 중세 한자 도시의 구시가가 세계유산이고, 언덕 위 툼페아와 옛 공장 지구 텔리스키비, 바닷가 카드리오르그 궁전이 이어집니다.',
             'Estonia’s capital, whose medieval Hanseatic old town, its walls and towers largely intact, is a World Heritage Site, joined by the Toompea hill, the old factory quarter of Telliskivi and the seaside Kadriorg Palace.'),
 'tartu': ('1632년 세운 대학이 있는 에스토니아 제2의 도시. 분홍빛 시청 광장과 언덕 위 대성당 폐허, 국립박물관이 있고 학생들로 활기찹니다.',
           'Estonia’s second city, home to a university founded in 1632, with a pink town-hall square, cathedral ruins on the hill and the national museum, and lively with students.'),
 'parnu': ('에스토니아의 ‘여름 수도’로 불리는 바닷가 휴양 도시. 얕은 모래 해변과 1920년대 머드 배스 건물, 목조 집이 남은 구시가가 있습니다.',
           'Estonia’s ‘summer capital’, a seaside resort with a shallow sandy beach, a 1920s mud-baths building and an old town of wooden houses.'),
}

REWRITE = {
 'tallinn-h1': (None, None, '약 2km 성벽과 탑 20여 개가 남은 중세 한자 도시로, 자갈길과 상인 길드 건물이 이어지는 세계유산입니다.', 'A medieval Hanseatic town with about 2 km of walls and some 20 towers still standing, and cobbled lanes of merchants’ guild houses; a World Heritage Site.'),
 'tallinn-h2': (None, None, '구시가 위 석회암 언덕으로, 국회가 쓰는 툼페아 성과 코투오차·파트쿨리 전망대에서 붉은 지붕들이 내려다보입니다.', 'The limestone hill above the lower town, with Toompea Castle, now the parliament, and the Kohtuotsa and Patkuli viewing platforms over the red roofs.'),
 'tallinn-h3': ('알렉산드르 넵스키 대성당', None, '1900년 완공한 양파 돔의 러시아 정교회 성당으로, 툼페아 성 바로 맞은편에 섭니다.', 'The onion-domed Russian Orthodox cathedral completed in 1900, facing Toompea Castle.'),
 'tallinn-h4': (None, None, '옛 공장 건물을 고친 창작 지구로, 카페와 디자인 가게, 사진 박물관이 있고 토요일엔 벼룩시장이 열립니다.', 'A creative quarter in converted factory buildings, with cafés, design shops and a photography museum, and a flea market on Saturdays.'),
 'tallinn-h5': (None, None, '1718년 표트르 대제가 아내 예카테리나 1세를 위해 지은 바로크 궁전으로, 지금은 외국 미술관이며 둘레 공원이 넓습니다.', 'The Baroque palace Peter the Great began in 1718 for his wife Catherine I, now a museum of foreign art set in a large park.'),
 'tartu-h1': (None, None, '1632년 스웨덴 왕이 세운 대학으로, 1809년 하얀 기둥의 본관에 옛 강당과 학생 감옥이 남아 있습니다.', 'The university founded by the Swedish king in 1632; its white-columned main building of 1809 keeps the old assembly hall and student lock-up.'),
 'tartu-h2': (None, None, '비스듬한 광장 끝에 분홍빛 1789년 시청이 서고, 앞의 ‘키스하는 학생들’ 분수가 도시의 상징입니다.', 'The sloping square topped by the pink town hall of 1789, with the ‘Kissing Students’ fountain in front, the symbol of the city.'),
 'tartu-h3': (None, None, '돔 모양 건물의 체험형 과학관으로, 천문관과 수백 가지 실험 전시가 있어 아이들과 가기 좋습니다.', 'A hands-on science centre in a domed building, with a planetarium and hundreds of experiments; great with children.'),
 'tartu-h4': ('에스토니아 국립박물관', 'Estonian National Museum', '옛 소련 군 비행장 활주로 위에 2016년 지은 긴 건물로, 에스토니아와 핀우그리아 민족의 생활 문화를 보여 줍니다.', 'The long building opened in 2016 on the runway of a former Soviet military airfield, showing the folk life of Estonians and the Finno-Ugric peoples.', 'Eesti Rahva Muuseum'),
 'tartu-h5': (None, None, '시내를 흐르는 강으로, 아치 다리와 강변 산책로, 여름엔 강변 해변과 카페가 이어집니다.', 'The river through the city, with the Arch Bridge, a riverside promenade and in summer a city beach and cafés.'),
 'parnu-h1': (None, None, '수심이 얕은 넓은 모래 해변으로, 1838년 해수욕장이 생긴 뒤 휴양지가 되었고 긴 산책로가 이어집니다.', 'A broad, shallow sandy beach, a resort since the first bathing establishment opened in 1838, with a long promenade.'),
 'parnu-h2': (None, None, '1927년 신고전주의 머드 배스 건물로, 지금은 스파 호텔이 되어 전통 머드 치료를 이어 갑니다.', 'The neoclassical mud-baths building of 1927, now a spa hotel continuing the tradition of mud treatments.'),
 'parnu-h3': (None, None, '보행자 거리 뤼틀리를 중심으로 18~19세기 집과 카페가 늘어선 구시가입니다.', 'The old town around the pedestrian Rüütli street, lined with 18th- and 19th-century houses and cafés.'),
 'parnu-h4': ('탈린 성문', 'Tallinn Gate', '17세기 스웨덴 시대 성벽에 남은 성문으로, 둑과 해자 일부가 함께 남아 산책로가 됩니다.', 'A gate in the 17th-century Swedish-era ramparts, surviving with part of the earthworks and moat, now a walking path.', 'Tallinna värav Pärnu'),
 'parnu-h5': ('성 엘리자베스 교회', 'St Elisabeth’s Church', '1747년 지은 바로크 양식 루터교 교회로, 러시아 여제 엘리자베타의 이름을 땄고 오르간 음악회가 열립니다.', 'A Baroque Lutheran church of 1747 named after Empress Elizabeth of Russia, with organ concerts.', 'Eliisabeti kirik Pärnu'),
}

ADD = {
 'tallinn': [
  (6, S('시청 광장', 'Town Hall Square', '1404년 고딕 시청이 선 구시가 중심 광장으로, 600년 넘게 영업한 약국이 있고 겨울엔 크리스마스 시장이 열립니다.', 'The old town’s main square under the Gothic town hall of 1404, with a pharmacy in business for over 600 years and a Christmas market in winter.', 'Tallinn Town Hall Square', 30, 45)),
  (7, S('성 올라프 교회', 'St Olaf’s Church', '16세기엔 세계에서 가장 높은 건물로 꼽혔던 교회로, 좁은 계단을 올라 탑 전망대에서 구시가와 바다를 봅니다.', 'Once counted among the world’s tallest buildings in the 16th century; climb the narrow stairs to the tower deck for views over the old town and sea.', 'St. Olaf’s Church Tallinn', 30, 45,
        n='탑 전망대는 대체로 4월~10월에만 엽니다.|The tower deck is usually open April to October only.')),
  (8, S('키에크 인 데 쾩과 지하 통로', 'Kiek in de Kök & bastion tunnels', '‘부엌을 들여다보라’는 이름의 15세기 대포 탑과, 17~18세기 성채 아래 지하 통로를 함께 둘러봅니다.', 'The 15th-century cannon tower whose name means ‘peek into the kitchen’, and the tunnels beneath the 17th–18th-century bastions.', 'Kiek in de Kök', 60, 90)),
  (9, S('수상비행기 항구 박물관', 'Seaplane Harbour', '1917년 콘크리트 돔 격납고에 든 해양 박물관으로, 1936년 잠수함 렘비트와 쇄빙선을 들어가 봅니다.', 'A maritime museum in concrete-domed seaplane hangars of 1917, where you can board the 1936 submarine Lembit and an icebreaker.', 'Lennusadam Seaplane Harbour', 90, 150)),
  (10, S('쿠무 미술관', 'Kumu Art Museum', '카드리오르그 공원 언덕에 2006년 문을 연 에스토니아 국립 미술관으로, 18세기부터 오늘날까지 에스토니아 미술을 봅니다.', 'Estonia’s national art museum, opened in 2006 on the edge of Kadriorg Park, with Estonian art from the 18th century to today.', 'Kumu Art Museum', 90, 120)),
  (11, S('에스토니아 야외 박물관', 'Estonian Open Air Museum', '바닷가 숲속에 전국의 18~20세기 농가와 풍차, 목조 교회를 옮겨 놓은 야외 박물관입니다.', 'Farmhouses, windmills and a wooden church from across Estonia, dating from the 18th to 20th centuries, set in seaside woods.', 'Estonian Open Air Museum', 120, 180)),
  (12, S('탈린 TV 타워', 'Tallinn TV Tower', '1980년 모스크바 올림픽 요트 경기에 맞춰 세운 314m 탑으로, 170m 높이 전망대에서 바깥 난간 걷기 체험도 합니다.', 'The 314 m tower built for the 1980 Moscow Olympics sailing events, with a viewing deck 170 m up and an outdoor edge walk.', 'Tallinn TV Tower', 60, 90)),
  (13, S('라헤마 국립공원', 'Lahemaa National Park', '탈린 동쪽의 숲과 습지 국립공원으로, 비루 습지 나무 데크길을 걷고 18세기 팜세 영주 저택을 봅니다.', 'A national park of forest and bog east of Tallinn: walk the Viru Bog boardwalk and visit the 18th-century Palmse manor.', 'Palmse Manor', 300, 480, group=DAY,
        n='탈린에서 차로 약 1시간입니다. 대중교통이 불편해 차나 투어가 편합니다.|About an hour from Tallinn by car; public transport is awkward, so a car or tour is easier.')),
 ],
 'tartu': [
  (6, S('토메매기 언덕', 'Toome Hill', '시내 언덕 공원으로, 13세기 대성당 폐허와 그 안의 대학 역사 박물관, 천사의 다리와 악마의 다리가 있습니다.', 'The hill park in the centre, with the ruins of a 13th-century cathedral housing the University History Museum, plus the Angel’s and Devil’s Bridges.', 'Toomemägi Tartu', 60, 90)),
  (7, S('타르투 장난감 박물관', 'Tartu Toy Museum', '구시가 목조 집에 옛 장난감과 인형을 모은 박물관으로, 아이들이 직접 놀 수 있는 방이 있습니다.', 'A museum of old toys and dolls in wooden houses in the old town, with rooms where children can play.', 'Tartu Toy Museum', 45, 60)),
 ],
 'parnu': [
  (6, S('소오마 국립공원', 'Soomaa National Park', '습지와 강의 국립공원으로, 나무 데크길로 습지를 걷고 봄 홍수 때는 ‘다섯 번째 계절’이라 부르며 카누를 탑니다.', 'A national park of bogs and rivers: walk the bog boardwalks, and in the spring floods, known as the ‘fifth season’, paddle a canoe.', 'Soomaa National Park', 240, 360, group=DAY,
        n='패르누에서 차로 약 1시간이며 대중교통은 거의 없습니다.|About an hour from Pärnu by car, with almost no public transport.')),
 ],
}

IT = [
 ("  tallinn: [4, 2, 3, 1, 5],\n",
  "  tallinn: {\n    days: [\n      ['구시가|Old Town', 6, 1, 7, 3, 2, 8],\n      ['칼라마야와 카드리오르그|Kalamaja & Kadriorg', 4, 9, 5, 10],\n      ['시내 밖|Beyond the centre', 11, 12],\n    ],\n    trips: [['라헤마 국립공원|Lahemaa National Park', 13]],\n  },\n"),
 ("  tartu: [2, 1, 4, 5, 3],\n", "  tartu: { days: [['', 2, 1, 6, 7, 5], ['', 4, 3]] },\n"),
 ("  parnu: [3, 4, 2, 1, 5],\n", "  parnu: { days: [['', 3, 4, 5, 2, 1]], trips: [['소오마 국립공원|Soomaa National Park', 6]] },\n"),
]
VISIT = {'parnu-h4': "v(20, 30)", 'parnu-h5': "v(20, 30)", 'tartu-h4': "v(120, 180)"}

TALLINN = [(6, T_OLD), (1, T_OLD), (7, T_OLD), (3, T_OLD), (2, T_OLD), (8, T_OLD),
           (4, T_KAL), (9, T_KAL), (5, T_KAD), (10, T_KAD), (12, T_KAD), (11, T_KAD), (13, DAY)]
SMALL = ['tartu', 'parnu']

EE_OLD = "    cityIds: ['tallinn', 'tartu', 'parnu'],\n"
EE_NEW = """    cityIds: ['tallinn', 'tartu', 'parnu'],
    cityGroups: [
      { title: { ko: '북부', en: 'North Estonia' }, cityIds: ['tallinn'] },
      { title: { ko: '남부', en: 'South Estonia' }, cityIds: ['tartu'] },
      { title: { ko: '서부·섬', en: 'West coast & islands' }, cityIds: ['parnu'] },
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
        blk = re.sub(r'description: \{[^\n]*\}', f'description: {{ ko: "{dko}", en: "{den}" }}', blk)
        if len(t) > 4:
            blk = re.sub(r'mapsUrl: "[^"]*"', 'mapsUrl: "https://www.google.com/maps/search/?api=1&query=' + urllib.parse.quote(t[4]) + '"', blk)
        c = c[:i] + blk + c[j:]
    it = rd('itinerary-north.ts')
    for a, b in IT:
        assert it.count(a) == 1, a[:70]
        it = it.replace(a, b)
    wr('itinerary-north.ts', it)
    vf = rd('visit-med.ts')
    for hid, v in VISIT.items():
        vf, k = re.subn(rf"^  '{hid}': v\(.*\),\n", f"  '{hid}': {v},\n", vf, flags=re.M)
        assert k == 1, hid
    wr('visit-med.ts', vf)
    for cid, items in ADD.items():
        c = add_sights(c, cid, items, 'visit-med.ts')
    c = reorder(c, 'tallinn', TALLINN)
    for cid in SMALL:
        by = blocks(c, cid)
        m = re.search(rf"^  '?{cid}'?: (.*?)(?=^  [a-z'/])", it, re.M | re.S)
        trips = {int(x) for t in re.findall(r"trips: \[(.*)\]", m.group(1), re.S) for x in re.findall(r", (\d+)", t)}
        order = itinerary_order(it, cid, set(by))
        c = reorder(c, cid, [(n, DAY if n in trips else None) for n in order])
    wr('cities.ts', c)
    k = rd('countries.ts')
    assert k.count(EE_OLD) == 1
    wr('countries.ts', k.replace(EE_OLD, EE_NEW))


if __name__ == '__main__':
    main()
