#!/usr/bin/env python3
"""Lithuania step 1 (all three cities), 2026-11-15, user approved the plan.
Fixes: every one-line description and blurb; Kaunas h5 'street art' (its photo is the 1932 Central Post Office)
becomes Modernist Kaunas; Klaipėda h5 'Port promenade' (its photo is the Danė swing bridge) becomes the swing bridge.
New sights: Vilnius 8, Kaunas 6, Klaipėda 4. Vilnius gets groups and a 2-day itinerary; country city groups follow
the regions. Run once."""
import re, urllib.parse
from add_daytrip_places import rd, wr
from sight_order import add_sights, blocks, itinerary_order, reorder
from review_sk import S

DAY = ('근교 당일치기', 'Day trip')
V_OLD = ('구시가', 'Old Town')
V_OUT = ('구시가 바깥', 'Beyond the old town')

BLURB = {
 'vilnius': ('리투아니아의 수도. 동유럽에서 손꼽히게 큰 바로크 구시가가 세계유산이고, 예술가들의 ‘공화국’ 우주피스와 호수 위 트라카이 성이 가깝습니다.',
             'Lithuania’s capital, whose Baroque old town, one of the largest in Eastern Europe, is a World Heritage Site, with the artists’ ‘republic’ of Užupis and Trakai’s lake castle close by.'),
 'kaunas': ('두 강이 만나는 리투아니아 제2도시. 1920~1939년 임시 수도 시절 지은 모더니즘 건축이 2023년 세계유산이 됐고, 중세 성과 보행자 거리 자유 거리가 있습니다.',
            'Lithuania’s second city where two rivers meet; the modernist buildings of its years as temporary capital (1920–1939) became a World Heritage Site in 2023, alongside a medieval castle and the pedestrian Laisvės alėja.'),
 'klaipeda': ('리투아니아 유일의 항구 도시로, 옛 독일 이름은 메멜입니다. 목조 골조 창고가 남은 구시가가 있고, 페리로 건너면 쿠로니아 사주 세계유산이 시작됩니다.',
              'Lithuania’s only seaport, once the German town of Memel, with half-timbered warehouses in its old town and a short ferry ride to the Curonian Spit World Heritage Site.'),
}

REWRITE = {
 'vilnius-h1': (None, None, '14세기부터 이어진 구시가로, 고딕·르네상스·바로크 성당 수십 곳과 안뜰, 굽은 골목이 남아 1994년 세계유산이 됐습니다.', 'The old town grown since the 14th century, with dozens of Gothic, Renaissance and Baroque churches, courtyards and winding lanes; a World Heritage Site since 1994.'),
 'vilnius-h2': (None, None, '빌뉴스 윗성에 남은 15세기 벽돌 탑으로, 걸어서나 푸니쿨라로 언덕에 올라 구시가 지붕을 내려다봅니다.', 'The 15th-century brick tower left of Vilnius’s Upper Castle; walk or take the funicular up the hill for views over the old town’s roofs.'),
 'vilnius-h3': (None, None, '18세기 말 신고전주의로 다시 지은 대성당과 약 57m 종탑이 선 광장으로, 1989년 ‘발트의 길’ 인간 사슬이 시작된 곳에 ‘기적’ 타일이 있습니다.', 'The square of the Neoclassical cathedral rebuilt in the late 18th century and its belfry of about 57 m; a ‘miracle’ tile marks where the 1989 Baltic Way human chain began.'),
 'vilnius-h4': (None, None, '빌넬레강 건너 예술가 지구로, 1997년 스스로 ‘공화국’을 선언했고 여러 언어로 쓴 헌법 판이 골목 벽에 걸려 있습니다.', 'The artists’ quarter across the Vilnelė, which declared itself a ‘republic’ in 1997; its constitution hangs on a lane wall in many languages.'),
 'vilnius-h5': (None, None, '옛 성벽에서 유일하게 남은 성문으로, 위층 예배당에 모신 성모 이콘을 보려는 순례자가 끊이지 않습니다.', 'The only surviving gate of the old city wall, its upper chapel holding an icon of the Virgin that draws a steady stream of pilgrims.'),
 'kaunas-h1': (None, None, '네무나스강과 네리스강이 만나는 곳의 구시가로, ‘하얀 백조’라 불리는 18세기 시청과 고딕 성당이 광장을 둘러쌉니다.', 'The old town where the Nemunas and Neris meet, its square ringed by the 18th-century town hall known as the ‘White Swan’ and Gothic churches.'),
 'kaunas-h2': (None, None, '보리수가 늘어선 약 1.7km 보행자 거리로, 끝에 푸른 돔의 성 미카엘 대천사 성당이 있습니다.', 'A linden-lined pedestrian boulevard of about 1.7 km, ending at the blue-domed Church of St Michael the Archangel.'),
 'kaunas-h3': (None, None, '두 강이 만나는 곳을 지키던 14세기 성으로, 리투아니아에서 가장 오래된 석조 성 가운데 하나이며 탑 안에 전시가 있습니다.', 'The 14th-century castle guarding the meeting of the rivers, one of the oldest stone castles in Lithuania, with exhibits in its tower.'),
 'kaunas-h4': (None, None, '19세기 러시아 요새로, 제2차 세계대전 중 나치가 유대인을 비롯한 수만 명을 학살한 곳이며 거대한 추모비와 박물관이 있습니다.', 'A 19th-century Russian fort where the Nazis murdered tens of thousands of people, most of them Jews, during the Second World War; now a huge memorial and museum.'),
 'kaunas-h5': ('모더니즘 카우나스', 'Modernist Kaunas', '임시 수도 시절 지은 1930년대 건물들로, 중앙 우체국 같은 둥근 모서리 건축을 따라 걷습니다. 2023년 세계유산이 됐습니다.', 'Buildings from the 1930s temporary-capital years; walk past rounded corners such as the Central Post Office. A World Heritage Site since 2023.', 'Kaunas Central Post Office', 'v(60, 90)'),
 'klaipeda-h1': (None, None, '옛 독일 도시 메멜의 구시가로, 목조 골조 창고와 자갈길 사이로 굴뚝 청소부·유령 같은 작은 조각을 찾아다닙니다.', 'The old town of the former German town of Memel: half-timbered warehouses and cobbles, with small sculptures such as a chimney sweep and a ghost to hunt for.'),
 'klaipeda-h2': (None, None, '극장 앞 광장으로, 독일 민요 속 소녀 ‘타라우의 엔헨’ 동상이 분수 위에 서 있습니다.', 'The square in front of the theatre, where a statue of Ännchen von Tharau, the girl of the German folk song, stands on a fountain.'),
 'klaipeda-h3': (None, None, '리투아니아와 러시아가 나눠 가진 약 98km 모래톱으로, 높은 사구와 소나무 숲, 어촌 마을이 이어지는 세계유산입니다.', 'A sand spit of about 98 km shared by Lithuania and Russia, a World Heritage Site of high dunes, pine forest and fishing villages.'),
 'klaipeda-h4': (None, None, '구시가에서 페리로 몇 분 건너는 사주 끝으로, 소나무 숲과 해변이 있고 해양 박물관이 있습니다.', 'The tip of the spit a few minutes’ ferry ride from the old town, with pine woods, beaches and the Sea Museum.'),
 'klaipeda-h5': ('다네강 회전 다리', 'Danė swing bridge', '1855년 놓은 보행자 다리로, 배가 지나갈 때 사람이 손으로 돌려 엽니다. 옛 창고를 고친 건물과 강변 산책길이 이어집니다.', 'A footbridge of 1855 still swung open by hand to let boats through, beside converted warehouses and a riverside walk.', 'Klaipėda swing bridge', 'v(10, 15)'),
}

ADD = {
 'vilnius': [
  (7, S('리투아니아 대공 궁전', 'Palace of the Grand Dukes of Lithuania', '대성당 뒤 옛 대공들의 궁전 터에 2018년 다시 지은 궁전으로, 발굴 유적과 복원한 방을 둘러봅니다.', 'The palace of the grand dukes behind the cathedral, rebuilt on its site in 2018, with excavated ruins and restored rooms.', 'Palace of the Grand Dukes of Lithuania', 90, 120)),
  (8, S('성 안나 성당', 'St Anne’s Church', '1500년 무렵 지은 붉은 벽돌 고딕 성당으로, 33종의 벽돌로 쌓은 섬세한 정면이 유명합니다.', 'A red-brick Gothic church from around 1500, famous for its delicate façade built from 33 kinds of brick.', 'St. Anne’s Church Vilnius', 15, 20)),
  (9, S('빌뉴스 대학교', 'Vilnius University', '1579년 세운 동유럽에서 가장 오래된 대학 가운데 하나로, 안뜰 여러 곳과 성 요한 성당, 종탑 전망대가 있습니다.', 'Founded in 1579, one of the oldest universities in Eastern Europe, with a string of courtyards, St John’s Church and a bell-tower lookout.', 'Vilnius University', 45, 60)),
  (10, S('점령·자유투쟁 박물관', 'Museum of Occupations and Freedom Fights', '옛 KGB 본부 건물로, 지하 감방과 처형실을 그대로 보여 주며 소련 점령기 탄압과 저항을 다룹니다.', 'The former KGB headquarters, its basement cells and execution room left as they were, telling of repression and resistance under Soviet occupation.', 'Museum of Occupations and Freedom Fights', 90, 120)),
  (11, S('세 십자가 언덕', 'Hill of Three Crosses', '구시가 동쪽 언덕의 흰 십자가 기념비로, 1989년 다시 세웠고 빌뉴스에서 손꼽히는 전망 명소입니다.', 'The white monument of three crosses on a hill east of the old town, re-erected in 1989 and one of Vilnius’s best viewpoints.', 'Hill of Three Crosses', 30, 45)),
  (12, S('성 베드로·바오로 성당', 'Church of St Peter and St Paul', '17세기 바로크 성당으로, 내부를 2,000점이 넘는 흰 회반죽 조각이 빈틈없이 덮고 있습니다.', 'A 17th-century Baroque church whose interior is covered with more than 2,000 white stucco figures.', 'Church of St. Peter and St. Paul Vilnius', 30, 45)),
  (13, S('MO 미술관', 'MO Museum', '대니얼 리버스킨드가 설계해 2018년 연 현대 미술관으로, 1960년대 이후 리투아니아 미술을 봅니다.', 'A modern art museum designed by Daniel Libeskind and opened in 2018, showing Lithuanian art from the 1960s on.', 'MO Museum Vilnius', 90, 120)),
  (14, S('케르나베 고고 유적', 'Kernavė Archaeological Site', '네리스강 계곡의 언덕 요새 다섯 곳이 남은 리투아니아 옛 수도 터로, 세계유산입니다.', 'The site of an early Lithuanian capital in the Neris valley, with five hill forts, a World Heritage Site.', 'Kernavė Archaeological Site', 120, 180, group=DAY,
        n='빌뉴스에서 북서쪽으로 약 35km입니다. 버스는 편수가 적어 차로 가는 편이 편합니다.|About 35 km north-west of Vilnius; buses are infrequent, so driving is easier.')),
 ],
 'kaunas': [
  (6, S('그리스도 부활 성당', 'Christ’s Resurrection Church', '1930년대 지은 하얀 모더니즘 성당으로, 엘리베이터로 지붕 테라스에 올라 시내를 내려다봅니다.', 'A white modernist church from the 1930s; a lift goes up to its roof terrace for views over the city.', 'Christ’s Resurrection Church Kaunas', 30, 45)),
  (7, S('치우를료니스 국립미술관', 'M. K. Čiurlionis National Museum of Art', '작곡가이자 화가인 치우를료니스의 신비로운 그림을 가장 많이 모은 미술관입니다.', 'The museum with the largest collection of the mystical paintings of the composer and painter Čiurlionis.', 'M. K. Čiurlionis National Museum of Art', 60, 90)),
  (8, S('악마 박물관', 'Devil’s Museum', '화가 즈무이진나비치우스가 모으기 시작한 세계 곳곳의 악마 조각과 가면 3,000점이 넘게 있습니다.', 'More than 3,000 devil figures and masks from around the world, a collection started by the painter Žmuidzinavičius.', 'Devil’s Museum Kaunas', 45, 60)),
  (9, S('알렉소타스 푸니쿨라', 'Aleksotas Funicular', '1935년부터 다니는 푸니쿨라로, 강 건너 언덕에 올라 구시가와 두 강을 내려다봅니다.', 'A funicular running since 1935, up the hill across the river for views over the old town and the two rivers.', 'Aleksotas Funicular', 20, 30)),
  (10, S('파자이슬리스 수도원', 'Pažaislis Monastery', '카우나스 저수지 옆 17세기 바로크 수도원으로, 돔 안을 덮은 프레스코가 화려합니다.', 'A 17th-century Baroque monastery beside the Kaunas Reservoir, its dome richly covered in frescoes.', 'Pažaislis Monastery', 60, 90)),
  (11, S('리투아니아 야외 민속 박물관', 'Open-Air Museum of Lithuania', '룸시슈케스 숲에 전국의 옛 농가와 풍차, 교회를 옮겨 지역별 마을로 꾸민 큰 야외 박물관입니다.', 'A large open-air museum in the woods at Rumšiškės, with old farmhouses, windmills and churches from across the country arranged as regional villages.', 'Open-Air Museum of Lithuania Rumšiškės', 180, 240, group=DAY,
        n='카우나스에서 동쪽으로 약 20km, 차로 약 25분입니다. 주로 5~10월에 엽니다.|About 20 km east of Kaunas, around 25 min by car; mainly open May to October.')),
 ],
 'klaipeda': [
  (6, S('클라이페다 성 박물관', 'Klaipėda Castle Museum', '13세기 튜턴 기사단이 세운 메멜 성의 터로, 복원한 보루 안에 발굴 유물을 전시합니다.', 'The site of Memel Castle, founded by the Teutonic Order in the 13th century, with finds from the digs inside a restored bastion.', 'Klaipėda Castle Museum', 45, 60)),
  (7, S('시계 박물관', 'Clock and Watch Museum', '해시계부터 원자시계까지 시간을 재는 도구의 역사를 보여 주는 박물관으로, 안뜰에 해시계 정원이 있습니다.', 'A museum of timekeeping from sundials to atomic clocks, with a sundial garden in the courtyard.', 'Klaipėda Clock Museum', 45, 60)),
  (8, S('메리디아나스 범선', 'Meridianas', '1948년 핀란드에서 만든 훈련용 범선으로, 다네강에 정박해 클라이페다의 상징이 됐습니다.', 'A training sailing ship built in Finland in 1948, moored on the Danė and now a symbol of Klaipėda.', 'Meridianas Klaipėda', 10, 15)),
  (9, S('리투아니아 해양 박물관', 'Lithuanian Sea Museum', '스밀티네의 19세기 요새에 들어선 수족관과 해양 박물관으로, 물개와 펭귄을 봅니다.', 'An aquarium and maritime museum in a 19th-century fort at Smiltynė, with seals and penguins.', 'Lithuanian Sea Museum', 120, 180)),
 ],
}

IT = [
 ("  vilnius: { days: [['', 5, 1, 3, 2, 4]], trips: [['트라카이|Trakai', 6]] },\n",
  "  vilnius: {\n    days: [\n      ['구시가|Old Town', 3, 7, 2, 9, 8, 1, 5],\n      ['구시가 바깥|Beyond the old town', 13, 10, 4, 11, 12],\n    ],\n    trips: [\n      ['트라카이|Trakai', 6],\n      ['케르나베|Kernavė', 14],\n    ],\n  },\n"),
 ("  kaunas: { days: [['', 3, 1, 2, 5]], trips: [['제9요새|Ninth Fort', 4]] },\n",
  "  kaunas: {\n    days: [\n      ['', 3, 1, 9, 2, 5],\n      ['', 8, 7, 6],\n    ],\n    trips: [\n      ['제9요새|Ninth Fort', 4],\n      ['파자이슬리스 수도원|Pažaislis Monastery', 10],\n      ['룸시슈케스|Rumšiškės', 11],\n    ],\n  },\n"),
 ("  klaipeda: { days: [['', 2, 1, 5]], trips: [['쿠로니아 사주|Curonian Spit', 4, 3]] },\n",
  "  klaipeda: {\n    days: [['', 2, 1, 7, 6, 5, 8]],\n    trips: [['스밀티네·쿠로니아 사주|Smiltynė & Curonian Spit', 4, 9, 3]],\n  },\n"),
]

VILNIUS = [(3, V_OLD), (7, V_OLD), (2, V_OLD), (9, V_OLD), (8, V_OLD), (1, V_OLD), (5, V_OLD),
           (13, V_OUT), (10, V_OUT), (4, V_OUT), (11, V_OUT), (12, V_OUT), (6, DAY), (14, DAY)]
SMALL = ['kaunas', 'klaipeda']

LT_OLD = "    cityIds: ['vilnius', 'kaunas', 'klaipeda'],\n"
LT_NEW = """    cityIds: ['vilnius', 'kaunas', 'klaipeda'],
    cityGroups: [
      { title: { ko: '빌뉴스·남동부', en: 'Vilnius & south-east' }, cityIds: ['vilnius'] },
      { title: { ko: '중부·북부', en: 'Centre & north' }, cityIds: ['kaunas'] },
      { title: { ko: '해안', en: 'Coast' }, cityIds: ['klaipeda'] },
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
    vf = rd('visit-med.ts')
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
            vf, k = re.subn(rf"^  '{hid}': v\(.*\),\n", f"  '{hid}': {t[5]},\n", vf, flags=re.M)
            assert k == 1, hid
        c = c[:i] + blk + c[j:]
    wr('visit-med.ts', vf)
    it = rd('itinerary-north.ts')
    for a, b in IT:
        assert it.count(a) == 1, a[:70]
        it = it.replace(a, b)
    wr('itinerary-north.ts', it)
    for cid, items in ADD.items():
        c = add_sights(c, cid, items, 'visit-med.ts')
    c = reorder(c, 'vilnius', VILNIUS)
    for cid in SMALL:
        by = blocks(c, cid)
        m = re.search(rf"^  '?{cid}'?: (.*?)(?=^  [a-z'/])", it, re.M | re.S)
        trips = {int(x) for t in re.findall(r"trips: \[(.*)\]", m.group(1), re.S) for x in re.findall(r", (\d+)", t)}
        order = itinerary_order(it, cid, set(by))
        c = reorder(c, cid, [(n, DAY if n in trips else None) for n in order])
    wr('cities.ts', c)
    k = rd('countries.ts')
    assert k.count(LT_OLD) == 1
    wr('countries.ts', k.replace(LT_OLD, LT_NEW))


if __name__ == '__main__':
    main()
