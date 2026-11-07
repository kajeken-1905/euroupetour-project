#!/usr/bin/env python3
"""Italy step 1, part 2 (north: Veneto, Friuli, South Tyrol/Dolomites, Emilia-Romagna), 2026-11-07. bologna-h5 name fixed
('쿠아트로 피우트'→'콰드릴라테로'), thin descriptions rewritten, more sights incl. themed Valpolicella wine, Caffè San Marco,
Prosciutto di Parma museum. Lists in itinerary order. Run once."""
import re
from add_daytrip_places import rd, wr
from sight_order import add_sights, blocks, itinerary_order, read_group, reorder
from review_sk import S

DAY = ('근교 당일치기', 'Day trip')
OLD_NEAR = ('근교', 'Nearby')
REWRITE = {
 'verona-h1': ('베로나 아레나', 'Verona Arena', '1세기 로마 원형 경기장으로, 여름엔 야외 오페라 축제가 열립니다.', 'The 1st-century Roman amphitheatre, home to an open-air opera festival every summer.'),
 'verona-h2': ('줄리엣의 집', 'Juliet’s House', '‘로미오와 줄리엣’의 줄리엣 집으로 꾸민 중세 저택으로, 발코니와 줄리엣 동상이 있습니다.', 'A medieval house dressed up as Juliet’s from Romeo and Juliet, with the famous balcony and her statue.'),
 'verona-h3': ('에르베 광장', 'Piazza delle Erbe', '옛 로마 광장 자리에 시장과 카페, 프레스코 벽 건물이 둘러싼 광장입니다.', 'The old Roman forum, now a square of market stalls, cafés and frescoed façades.'),
 'verona-h4': ('브라 광장', 'Piazza Bra', '아레나 앞의 넓은 광장으로, 카페가 늘어선 리스톤 산책로가 있습니다.', 'The broad square in front of the Arena, with the café-lined Liston promenade.'),
 'verona-h5': ('스칼리제로 다리', 'Ponte Scaligero', '카스텔베키오 성과 이어진 14세기 붉은 벽돌 요새 다리입니다.', 'The 14th-century red-brick fortified bridge joined to Castelvecchio.'),
 'bologna-h1': ('두 탑', 'Two Towers', '중세 귀족이 세운 기울어진 쌍둥이 탑으로, 가리센다 탑 보강 공사로 아시넬리 탑 오르기는 중단되어 있습니다.', 'The leaning twin medieval towers; climbing the Asinelli has been suspended while the Garisenda is shored up.'),
 'bologna-h2': ('산토 스테파노 성당군', 'Santo Stefano', '‘일곱 교회’라 불리는 서로 이어진 중세 성당들입니다.', 'The interlinked medieval churches known as the Seven Churches.'),
 'bologna-h3': ('마조레 광장', 'Piazza Maggiore', '산 페트로니오 대성당과 시청, 넵튠 분수가 둘러싼 중심 광장입니다.', 'The main square, framed by San Petronio, the town hall and the Neptune Fountain.'),
 'bologna-h4': ('포르티코 거리', 'Porticoes', '시내에 40km 가까이 이어진 아케이드로, 유네스코 세계유산입니다.', 'Nearly 40 km of arcades across the city; a UNESCO World Heritage Site.'),
 'bologna-h5': ('콰드릴라테로', 'Quadrilatero', '중세 시장 골목에 모르타델라·파르미자노·생면 가게가 늘어선 먹거리 거리입니다.', 'The medieval market lanes lined with shops selling mortadella, Parmigiano and fresh pasta.'),
 'parma-h4': ('두칼레 공원', 'Parco Ducale', '파르마강 건너편 공작 궁전의 정원입니다.', 'The ducal palace gardens across the Parma river.'),
 'parma-h5': ('파르미자노 레자노 치즈 공방', 'Parmigiano Reggiano dairy', '아침마다 우유를 끓여 치즈를 만드는 공방을 견학하고 숙성 창고를 봅니다.', 'Tour a dairy where cheese is made each morning and see the ageing rooms.'),
 'trieste-h3': ('대운하', 'Canal Grande', '18세기 합스부르크 시절 판 운하로, 카페와 성당이 늘어서 있습니다.', 'The 18th-century Habsburg-era canal, lined with cafés and a church.'),
}
ADD = {
 'verona': [
  (6, S('카스텔베키오 박물관', 'Castelvecchio Museum', '14세기 스칼리제르 가문의 성에 중세·르네상스 미술을 전시한 박물관으로, 카를로 스카르파의 설계로 유명합니다.', 'Medieval and Renaissance art in the 14th-century Scaliger castle, famous for Carlo Scarpa’s redesign.', 'Museo di Castelvecchio', 90, 120, c='mon')),
  (7, S('산 제노 대성당', 'Basilica of San Zeno', '청동 문과 장미창이 있는 로마네스크 걸작 성당입니다.', 'A Romanesque masterpiece with bronze doors and a rose window.', 'Basilica di San Zeno Verona', 30, 45)),
  (8, S('람베르티 탑', 'Torre dei Lamberti', '에르베 광장 옆 84m 탑으로, 엘리베이터로 올라 붉은 지붕을 내려다봅니다.', 'The 84 m tower by Piazza delle Erbe, with a lift up for views over the red roofs.', 'Torre dei Lamberti', 30, 45)),
  (9, S('발폴리첼라 와인 마을', 'Valpolicella wine country', '아마로네 와인을 만드는 베로나 북쪽 언덕의 포도밭 마을들로, 와이너리 시음이 있습니다.', 'The vineyard hills north of Verona where Amarone is made, with winery tastings.', 'Valpolicella', 240, 360, group=DAY,
        n='베로나에서 차로 약 30분이고 와이너리는 예약하는 편이 좋습니다.|About 30 min by car from Verona; book wineries ahead.')),
 ],
 'trieste': [
  (6, S('카페 산 마르코', 'Caffè San Marco', '1914년에 문을 연 빈풍 카페로, 작가들이 드나들던 서점 겸 카페입니다.', 'A Viennese-style café opened in 1914, a writers’ haunt that doubles as a bookshop.', 'Antico Caffè San Marco', 30, 45)),
  (7, S('그로타 자이간테', 'Grotta Gigante', '세계에서 손꼽히게 큰 관광 동굴로, 거대한 동굴 홀을 안내 투어로 걷습니다.', 'One of the largest show caves in the world, its vast chamber visited on guided tours.', 'Grotta Gigante', 60, 90, group=DAY,
        n='트리에스테에서 버스로 약 40분입니다.|About 40 min by bus from Trieste.')),
 ],
 'bologna': [
  (8, S('아르키진나시오와 해부학 극장', 'Archiginnasio & Anatomical Theatre', '옛 볼로냐 대학 건물로, 문장으로 덮인 벽과 나무로 된 17세기 해부학 강의실이 있습니다.', 'The old university building, its walls covered in coats of arms, with a wooden 17th-century anatomy theatre.', 'Archiginnasio di Bologna', 30, 45)),
  (9, S('산 루카 성소', 'Sanctuary of San Luca', '언덕 위 성소까지 666개의 아치가 이어진 세계에서 가장 긴 포르티코를 따라 걸어 오릅니다.', 'Walk up to the hilltop sanctuary along the world’s longest portico, 666 arches long.', 'Santuario di San Luca', 120, 180)),
 ],
 'padua': [
  (6, S('파도바 식물원', 'Botanical Garden of Padua', '1545년에 세운 세계에서 가장 오래된 대학 식물원으로, 유네스코 세계유산입니다.', 'The world’s oldest university botanical garden, founded in 1545; a UNESCO World Heritage Site.', 'Orto Botanico di Padova', 60, 90)),
 ],
 'bolzano': [
  (6, S('룽켈슈타인 성', 'Runkelstein Castle', '중세 세속 프레스코가 가득한 ‘그림의 성’입니다.', 'The “picture castle”, full of medieval secular frescoes.', 'Castel Roncolo', 60, 90, c='mon')),
 ],
 'cortina': [
  (5, S('코르소 이탈리아', 'Corso Italia', '코르티나 담페초 마을의 보행자 거리로, 교회 종탑과 상점이 있습니다.', 'The pedestrian main street of Cortina d’Ampezzo, with its bell tower and shops.', 'Corso Italia Cortina', 30, 60)),
  (6, S('토파나 케이블카', 'Tofana – Freccia nel Cielo', '해발 3,244m 토파나 디 메초 정상 부근까지 오르는 케이블카입니다.', 'The cable car climbing to near the 3,244 m summit of Tofana di Mezzo.', 'Freccia nel Cielo Cortina', 120, 180,
        n='계절에 따라 운행하고 날씨가 나쁘면 멈춥니다.|Runs seasonally and stops in bad weather.')),
 ],
 'parma': [
  (6, S('파르마 햄 박물관', 'Prosciutto di Parma Museum', '랑기라노의 햄 박물관으로, 파르마 햄의 역사와 숙성 과정을 보여 주고 시식합니다.', 'The ham museum in Langhirano, showing the history and curing of Parma ham, with a tasting.', 'Museo del Prosciutto di Parma', 60, 90, group=DAY,
        n='파르마에서 버스로 약 45분입니다. 여는 날이 정해져 있으니 공식 일정을 확인하세요.|About 45 min by bus from Parma; opening days are limited, so check the official schedule.')),
 ],
 'ravenna': [
  (6, S('네오니아노 세례당', 'Neonian Baptistery', '5세기 팔각형 세례당으로, 돔에 그리스도 세례 모자이크가 있습니다. 유네스코 세계유산입니다.', 'The 5th-century octagonal baptistery with a mosaic of Christ’s baptism in its dome; a UNESCO World Heritage Site.', 'Battistero Neoniano', 15, 20)),
 ],
}
IT = [
 ("  verona: [4, 1, 5, 3, 2],", "  verona: { days: [['', 4, 1, 8, 3, 2, 6, 5, 7]], trips: [['발폴리첼라|Valpolicella', 9]] },"),
 ("  trieste: { days: [['', 3, 1, 5, 4]], trips: [['미라마레 성|Miramare Castle', 2]] },",
  "  trieste: { days: [['', 3, 6, 1, 5, 4]], trips: [['미라마레 성|Miramare Castle', 2], ['그로타 자이간테|Grotta Gigante', 7]] },"),
 ("  bologna: { days: [['', 3, 5, 1, 2, 4, 6]], trips: [['람보르기니 박물관|Lamborghini Museum', 7]] },",
  "  bologna: { days: [['', 3, 8, 5, 1, 2, 4], ['산 루카와 두카티|San Luca & Ducati', 9, 6]], trips: [['람보르기니 박물관|Lamborghini Museum', 7]] },"),
 ("  padua: [1, 4, 5, 2, 3],", "  padua: [1, 4, 5, 2, 6, 3],"),
 ("  bolzano: [5, 1, 3, 2, 4],", "  bolzano: [5, 1, 3, 2, 6, 4],"),
 ("      ['소라피스 호수|Lago di Sorapis', 4],\n    ],\n  },", "      ['소라피스 호수|Lago di Sorapis', 4],\n      ['코르티나 마을과 토파나|Cortina & Tofana', 5, 6],\n    ],\n  },"),
 ("  parma: { days: [['', 1, 2, 3, 4]], trips: [['파르미자노 치즈 공방|Parmigiano dairy', 5]] },",
  "  parma: { days: [['', 1, 2, 3, 4]], trips: [['파르미자노 치즈 공방|Parmigiano dairy', 5], ['파르마 햄 박물관|Prosciutto Museum', 6]] },"),
 ("  ravenna: [3, 4, 1, 2, 5],", "  ravenna: [3, 6, 4, 1, 2, 5],"),
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
        c = add_sights(c, cid, items, 'visit-it.ts')
    it = rd('itinerary-it.ts')
    for a, b in IT:
        assert it.count(a) == 1, a[:60]
        it = it.replace(a, b)
    wr('itinerary-it.ts', it)
    for cid in ADD:
        by = blocks(c, cid)
        m = re.search(rf"^  '?{cid}'?: (.*?)(?=^  [a-z'/])", it, re.M | re.S)
        trips = {int(x) for t in re.findall(r"trips: \[(.*)\]", m.group(1), re.S) for x in re.findall(r", (\d+)", t)}
        c = reorder(c, cid, [(n, DAY if (n in trips or read_group(by[n]) == OLD_NEAR) else read_group(by[n])) for n in itinerary_order(it, cid, set(by))])
    wr('cities.ts', c)


if __name__ == '__main__':
    main()
