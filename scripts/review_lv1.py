#!/usr/bin/env python3
"""Latvia step 1 (all three cities), 2026-11-14, user approved the plan.
Fixes: every one-line description and blurb; Jūrmala h4 'Majori' (duplicated Jomas Street; its photo is a historic
wooden villa) becomes Jūrmala's wooden villas. New sights: Riga 8, Sigulda 2. Riga gets groups and a 3-day itinerary;
country city groups follow the regions. Run once."""
import re, urllib.parse
from add_daytrip_places import rd, wr
from sight_order import add_sights, blocks, itinerary_order, reorder
from review_sk import S

DAY = ('근교 당일치기', 'Day trip')
R_OLD = ('구시가', 'Old Town')
R_NEW = ('신시가지와 시장', 'New town & market')
R_OUT = ('시내 밖', 'Beyond the centre')

BLURB = {
 'riga': ('발트 3국 최대 도시이자 라트비아의 수도. 한자 동맹 시대의 구시가와 유럽 최대급 아르누보 건축 거리가 함께 세계유산이고, 비행선 격납고를 고친 중앙시장이 있습니다.',
          'The largest city in the Baltics and Latvia’s capital, whose Hanseatic old town and one of Europe’s finest Art Nouveau quarters are a joint World Heritage Site, with a central market in former Zeppelin hangars.'),
 'jurmala': ('리가에서 기차로 약 30분, 약 33km 하얀 모래 해변을 따라 이어진 휴양 도시. 소나무 숲 사이 목조 별장과 보행자 거리, 습지 국립공원이 있습니다.',
             'A resort town about 30 minutes from Riga by train, strung along some 33 km of white sand, with wooden villas among the pines, a pedestrian street and a bog national park.'),
 'sigulda': ('가우야 국립공원의 숲 계곡 마을로 ‘라트비아의 스위스’라 불립니다. 붉은 벽돌 투라이다 성과 중세 성터, 계곡을 건너는 케이블카, 사암 동굴이 있습니다.',
             'A village in the forested valley of Gauja National Park, nicknamed the ‘Switzerland of Latvia’, with the red-brick Turaida Castle, medieval castle ruins, a cable car across the valley and sandstone caves.'),
}

REWRITE = {
 'riga-h1': (None, None, '13세기부터 한자 동맹 무역으로 번성한 구시가로, 자갈길 사이로 교회 첨탑과 길드 회관, 광장이 이어지는 세계유산입니다.', 'The old town that grew rich on Hanseatic trade from the 13th century, a World Heritage maze of cobbled lanes, church spires, guild halls and squares.'),
 'riga-h2': ('검은머리 전당', None, '1334년 독신 상인 길드 ‘검은머리 형제단’이 쓰던 화려한 회관으로, 1941년 파괴된 뒤 1999년 원래 모습으로 다시 지었습니다.', 'The ornate hall of the Brotherhood of Blackheads, a guild of unmarried merchants, from 1334; destroyed in 1941 and rebuilt as it was in 1999.'),
 'riga-h3': (None, None, '알베르타 거리 등에 신화 속 얼굴과 동물 조각으로 꾸민 1900년대 초 아르누보 건물이 늘어선 지구로, 아르누보 박물관도 있습니다.', 'Streets such as Alberta iela lined with early-1900s Art Nouveau buildings decorated with mythical faces and beasts, plus an Art Nouveau museum.'),
 'riga-h4': (None, None, '제1차 세계대전 때 독일군 비행선 격납고 다섯 동을 옮겨 1930년 연 시장으로, 생선·고기·채소관에서 장을 봅니다.', 'The market opened in 1930 in five former German Zeppelin hangars from the First World War, with halls for fish, meat and produce.'),
 'riga-h5': (None, None, '1935년 세운 42m 높이의 독립 기념비로, 꼭대기의 여인상이 세 개의 별을 들고 있고 낮에는 의장대가 지킵니다.', 'The 42 m independence monument of 1935, topped by a woman holding up three stars and guarded by an honour guard by day.'),
 'jurmala-h1': (None, None, '약 33km 이어지는 고운 하얀 모래 해변으로, 수심이 얕아 가족 물놀이에 좋고 여러 구간에 블루 플래그가 붙습니다.', 'Some 33 km of fine white sand with shallow water, good for families, with Blue Flag stretches along the way.'),
 'jurmala-h2': ('요마스 거리', None, '마요리 지구의 보행자 거리로, 식당과 카페, 가게가 모인 유르말라의 중심입니다.', 'The pedestrian street in the Majori district, Jūrmala’s centre of restaurants, cafés and shops.'),
 'jurmala-h3': (None, None, '여름 야외 공연이 열리는 진타리 콘서트홀과 소나무 숲속 전망탑이 있는 지구로, 해변과 가깝습니다.', 'The district of the Dzintari Concert Hall, with open-air summer concerts, and a lookout tower in the pine woods, close to the beach.'),
 'jurmala-h4': ('유르말라 목조 별장', 'Jūrmala wooden villas', '19세기 말~20세기 초 지은 목조 별장 수천 채가 소나무 숲 사이에 남아 있어, 레이스 같은 처마 장식의 아르누보 별장을 보며 걷습니다.', 'Thousands of wooden villas from the late 19th and early 20th centuries survive among the pines; stroll past Art Nouveau dachas with lace-like eaves.'),
 'jurmala-h5': ('케메리 국립공원', None, '큰 케메리 습지를 가로지르는 나무 데크길과 옛 유황 온천 휴양지가 있는 국립공원입니다.', 'A national park with a boardwalk across the Great Ķemeri Bog and an old sulphur-spring spa.'),
 'sigulda-h1': (None, None, '1214년 세운 붉은 벽돌 성으로, 탑에 올라 가우야 계곡을 보고 ‘투라이다의 장미’ 전설이 깃든 박물관 지구를 둘러봅니다.', 'The red-brick castle founded in 1214; climb the tower for views over the Gauja valley and explore the museum reserve tied to the legend of the Rose of Turaida.'),
 'sigulda-h2': (None, None, '1973년 지정한 라트비아 최초·최대 국립공원으로, 사암 절벽과 숲길, 강 카누가 이어집니다.', 'Latvia’s first and largest national park, created in 1973, with sandstone cliffs, forest trails and river canoeing.'),
 'sigulda-h3': (None, None, '1969년 놓인 케이블카로, 강 위 약 40m 높이에서 가우야 계곡을 건너 크리물다로 갑니다.', 'The cable car of 1969, crossing the Gauja valley about 40 m above the river to Krimulda.'),
 'sigulda-h4': ('구트마니스 동굴', None, '발트 지역에서 가장 큰 사암 동굴로, 벽에 17세기부터 새긴 이름과 문양이 남아 있습니다.', 'The largest sandstone cave in the Baltics, its walls carved with names and symbols since the 17th century.'),
 'sigulda-h5': (None, None, '계곡 건너편 언덕의 크리물다 영주 저택과 성터로, 케이블카와 함께 둘러보는 산책 코스입니다.', 'The Krimulda manor house and castle ruins on the hill across the valley, a walk to pair with the cable car.'),
}

ADD = {
 'riga': [
  (6, S('성 베드로 교회', 'St Peter’s Church', '높이 약 123m 첨탑의 고딕 교회로, 엘리베이터를 타고 탑 전망대에 올라 구시가와 다우가바강을 내려다봅니다.', 'The Gothic church with a spire of about 123 m; a lift goes up to the tower viewing platform over the old town and the Daugava.', 'St. Peter’s Church Riga', 45, 60)),
  (7, S('리가 대성당', 'Riga Cathedral', '1211년 세운 발트 지역 최대의 중세 교회로, 1884년 설치한 대형 파이프 오르간 음악회가 열립니다.', 'The largest medieval church in the Baltics, founded in 1211, with organ concerts on its great 1884 pipe organ.', 'Riga Cathedral', 30, 60)),
  (8, S('세 형제 건물', 'Three Brothers', '15~17세기 서로 다른 시대에 지은 리가에서 가장 오래된 석조 주택 세 채로, 건축 박물관이 들어 있습니다.', 'Riga’s three oldest stone houses, built in the 15th to 17th centuries, side by side and housing the architecture museum.', 'Three Brothers Riga', 15, 20)),
  (9, S('라트비아 국립미술관', 'Latvian National Museum of Art', '1905년 건물을 2016년 새로 단장한 미술관으로, 18세기부터 20세기까지 라트비아 미술을 봅니다.', 'The 1905 museum building renovated in 2016, showing Latvian art from the 18th to the 20th century.', 'Latvian National Museum of Art', 90, 120)),
  (10, S('라트비아 점령 박물관', 'Museum of the Occupation of Latvia', '1940~1991년 소련과 나치 독일의 점령 시기 라트비아 사람들이 겪은 일을 증언과 유물로 보여 줍니다.', 'Testimony and objects telling what Latvians lived through under Soviet and Nazi German occupation from 1940 to 1991.', 'Museum of the Occupation of Latvia', 60, 90)),
  (11, S('칼른치엠스 지구', 'Kalnciema Quarter', '다우가바강 건너편의 복원한 목조 주택 거리로, 토요일에 장터와 공연이 열립니다.', 'A street of restored wooden houses across the Daugava, with a market and live music on Saturdays.', 'Kalnciema Quarter', 45, 90)),
  (12, S('라트비아 민속 야외 박물관', 'Latvian Ethnographic Open-Air Museum', '유글라 호숫가 숲에 전국의 17~20세기 농가와 풍차, 교회 100여 채를 옮겨 놓았습니다.', 'More than 100 farmhouses, windmills and churches from the 17th to 20th centuries, moved from across Latvia to woods on Lake Jugla.', 'Latvian Ethnographic Open Air Museum', 120, 180)),
  (13, S('룬달레 궁전', 'Rundāle Palace', '러시아 궁정 건축가 라스트렐리가 1730년대 쿠를란트 공작을 위해 설계한 바로크 궁전으로, ‘발트의 베르사유’라 불리며 프랑스식 정원이 있습니다.', 'The Baroque palace designed in the 1730s by the Russian court architect Rastrelli for the Duke of Courland, called the ‘Versailles of the Baltics’, with French-style gardens.', 'Rundāle Palace', 150, 210, group=DAY,
        n='리가에서 남쪽으로 약 80km, 차로 약 1시간 15분입니다. 대중교통은 바우스카에서 갈아타야 해 불편합니다.|About 80 km south of Riga, around 1 hr 15 min by car; by public transport you change in Bauska, which is awkward.')),
 ],
 'sigulda': [
  (6, S('시굴다 중세 성', 'Sigulda Medieval Castle', '13세기 리보니아 기사단 성의 폐허와 1878년 지은 새 성이 함께 있는 언덕으로, 성벽 위에서 계곡을 내려다봅니다.', 'The ruins of a 13th-century Livonian Order castle beside a ‘new castle’ of 1878; look over the valley from the walls.', 'Sigulda Medieval Castle', 45, 60)),
  (7, S('봅슬레이·루지 트랙', 'Bobsleigh & luge track', '국제 대회가 열리는 약 1.4km 트랙으로, 관광객도 겨울엔 봅슬레이, 여름엔 바퀴 달린 썰매를 탑니다.', 'A track of about 1.4 km used for international races, where visitors can ride a bobsleigh in winter or a wheeled bob in summer.', 'Sigulda bobsleigh track', 45, 60)),
 ],
}

IT = [
 ("  riga: [4, 2, 1, 5, 3],\n",
  "  riga: {\n    days: [\n      ['구시가|Old Town', 2, 10, 6, 8, 7, 1],\n      ['신시가지와 시장|New town & market', 5, 3, 9, 4],\n      ['시내 밖|Beyond the centre', 11, 12],\n    ],\n    trips: [['룬달레 궁전|Rundāle Palace', 13]],\n  },\n"),
 ("  sigulda: [3, 5, 4, 1, 2],\n", "  sigulda: { days: [['', 6, 7, 3, 5, 4, 1], ['', 2]] },\n"),
]

RIGA = [(2, R_OLD), (10, R_OLD), (6, R_OLD), (8, R_OLD), (7, R_OLD), (1, R_OLD),
        (5, R_NEW), (3, R_NEW), (9, R_NEW), (4, R_NEW), (11, R_OUT), (12, R_OUT), (13, DAY)]
SMALL = ['jurmala', 'sigulda']

LV_OLD = "    cityIds: ['riga', 'jurmala', 'sigulda'],\n"
LV_NEW = """    cityIds: ['riga', 'jurmala', 'sigulda'],
    cityGroups: [
      { title: { ko: '리가·해안', en: 'Riga & coast' }, cityIds: ['riga', 'jurmala'] },
      { title: { ko: '비드제메', en: 'Vidzeme' }, cityIds: ['sigulda'] },
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
        c = c[:i] + blk + c[j:]
    it = rd('itinerary-north.ts')
    for a, b in IT:
        assert it.count(a) == 1, a[:70]
        it = it.replace(a, b)
    wr('itinerary-north.ts', it)
    for cid, items in ADD.items():
        c = add_sights(c, cid, items, 'visit-med.ts')
    c = reorder(c, 'riga', RIGA)
    for cid in SMALL:
        by = blocks(c, cid)
        m = re.search(rf"^  '?{cid}'?: (.*?)(?=^  [a-z'/])", it, re.M | re.S)
        trips = {int(x) for t in re.findall(r"trips: \[(.*)\]", m.group(1), re.S) for x in re.findall(r", (\d+)", t)}
        order = itinerary_order(it, cid, set(by))
        c = reorder(c, cid, [(n, DAY if n in trips else None) for n in order])
    wr('cities.ts', c)
    k = rd('countries.ts')
    assert k.count(LV_OLD) == 1
    wr('countries.ts', k.replace(LV_OLD, LV_NEW))


if __name__ == '__main__':
    main()
