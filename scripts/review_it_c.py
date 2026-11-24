#!/usr/bin/env python3
"""Italy second pass (2026-11-23, user): +17 sights in Rome, Naples, Milan, Siena, Verona, Palermo. Facts from
Wikipedia: Circus Maximus 621 x 118 m, 150,000+ spectators, now a public park; Largo di Torre Argentina four Republican
temples + remains of Pompey's Theatre; St Paul Outside the Walls one of the four papal major basilicas; Galleria Doria
Pamphilj private collection still owned by the Doria Pamphilj family, entrance on Via del Corso; Janiculum west of the
Tiber, not one of the seven hills; Galleria Umberto I 1887-1890 opposite the San Carlo, dome 57 m; Quartieri Spagnoli
grid of ~18 x 12 streets; Toledo metro station Line 1, opened 2012; Catacombs of San Gennaro two levels under Rione
Sanità; San Maurizio church of the Monastero Maggiore, now the Civic Archaeological Museum; Biblioteca Ambrosiana
founded 1609 by Cardinal Federico Borromeo with the Pinacoteca; Santa Maria presso San Satiro (1476-82) Bramante false
apse; Palazzo Pubblico from 1297, Lorenzetti Good and Bad Government; San Domenico = Basilica Cateriniana; Giardino
Giusti 16th-century palace and garden; Martorana and San Cataldo (1154) on Piazza Bellini. Run once."""
from add_daytrip_places import rd, wr
from sight_order import add_sights, reorder
from review_sk import S
import re

FREE = '무료입니다.|Free.'
DAY = ('근교 당일치기', 'Day trip')
ADD = {
 'rome': [
  (34, S('치르코 마시모', 'Circus Maximus', '팔라티노 언덕과 아벤티노 언덕 사이 골짜기에 있던 고대 로마 최대의 전차 경기장으로, 길이 621m에 15만 명 넘게 수용했습니다. 지금은 넓은 공원이 되어 경기장 윤곽과 팔라티노 궁전 터를 함께 볼 수 있습니다.', 'Ancient Rome’s first and largest chariot-racing stadium, in the valley between the Palatine and Aventine; 621 m long, it held more than 150,000 spectators. Today it is a public park where you can trace the track below the ruins of the Palatine palaces.', 'Circo Massimo Roma', 20, 30, b='no', n=FREE)),
  (35, S('라르고 디 토레 아르젠티나', 'Largo di Torre Argentina', '공화정 시대 신전 네 곳과 폼페이우스 극장 유적이 도로 아래 드러나 있는 광장입니다. 카이사르가 암살된 곳 가까이로, 유적 안에 사는 고양이들과 고양이 보호소로도 유명합니다.', 'A square where four Republican-era temples and remains of Pompey’s Theatre lie below street level, close to where Caesar was killed. It is also known for the cats that live among the ruins and their sanctuary.', 'Largo di Torre Argentina', 15, 30, b='no', n='광장 위에서는 무료로 내려다볼 수 있고, 유적 안 산책로는 유료입니다.|Free to view from street level; the walkways inside the site are ticketed.')),
  (36, S('산 파올로 푸오리 레 무라 대성당', 'Basilica of St Paul Outside the Walls', '로마 4대 대성당 가운데 하나로, 성 바오로의 무덤 위에 세워졌습니다. 거대한 내부와 역대 교황의 초상 메달리온, 중세 회랑이 볼거리입니다.', 'One of Rome’s four papal major basilicas, built over the tomb of St Paul. Its vast nave, the medallion portraits of every pope and the medieval cloister are the highlights.', 'Basilica di San Paolo fuori le Mura', 45, 60, b='no', n='성당은 무료이고 회랑은 유료입니다. 복장 규정이 있습니다.|The basilica is free; the cloister is ticketed. Dress code applies.')),
  (37, S('도리아 팜필리 미술관', 'Galleria Doria Pamphilj', '코르소 거리의 도리아 팜필리 궁전에 있는 개인 미술관으로, 지금도 가문이 소유하고 있습니다. 벨라스케스의 「교황 인노켄티우스 10세」와 카라바조 작품이 화려한 궁전 방들에 걸려 있습니다.', 'A private collection in the Palazzo Doria Pamphilj on Via del Corso, still owned by the family. Velázquez’s Innocent X and works by Caravaggio hang in the palace’s gilded rooms.', 'Galleria Doria Pamphilj', 60, 90)),
  (38, S('자니콜로 언덕', 'Janiculum (Gianicolo) terrace', '트라스테베레 뒤 테베레강 서쪽 언덕으로, 가리발디 광장 테라스에서 로마 시내의 돔들이 한눈에 내려다보입니다.', 'The hill west of the Tiber behind Trastevere; from the terrace on Piazza Garibaldi the domes of Rome spread out below.', 'Terrazza del Gianicolo', 20, 40, b='no', n=FREE)),
 ],
 'naples': [
  (15, S('움베르토 1세 갈레리아', 'Galleria Umberto I', '산카를로 극장 맞은편의 1890년 완공 아케이드로, 높이 57m 유리 돔과 대리석 바닥 모자이크가 있습니다.', 'The arcade opposite the San Carlo opera house, finished in 1890, with a 57 m glass dome and marble mosaic floor.', 'Galleria Umberto I Napoli', 15, 20, b='no', n=FREE)),
  (16, S('스페인 지구와 마라도나 벽화', 'Quartieri Spagnoli & Maradona mural', '톨레도 거리 옆 언덕으로 촘촘히 이어진 좁은 골목 동네로, 빨래가 걸린 골목과 마라도나 벽화가 있는 광장이 명소가 됐습니다.', 'The tight grid of narrow lanes climbing from Via Toledo, with washing strung overhead and the square around the famous Maradona mural.', 'Largo Maradona Napoli', 30, 60, b='no', n=FREE)),
  (17, S('톨레도 지하철역', 'Toledo metro station', '2012년 문을 연 지하철 1호선 역으로, 바닷속처럼 푸른 빛의 모자이크와 지상까지 뚫린 원뿔형 천장으로 유럽에서 손꼽히게 아름다운 역이라는 평을 받습니다.', 'A Line 1 station opened in 2012, its sea-blue mosaics and cone-shaped shaft of light make it one of Europe’s most admired metro stations.', 'Stazione Toledo Metro Napoli', 10, 15, b='no', n='역 안은 지하철 승차권이 있어야 들어갈 수 있습니다.|You need a metro ticket to go through the gates.')),
  (18, S('산 젠나로 카타콤베', 'Catacombs of San Gennaro', '카포디몬테로 오르는 비탈의 응회암을 파서 만든 2층의 초기 그리스도교 지하 묘지로, 초기 벽화가 남아 있습니다. 아래쪽 산니타 지구와 함께 둘러보기 좋습니다.', 'Early Christian burial and worship spaces cut into the tuff on the slope up to Capodimonte, on two levels with early frescoes. Pair them with the Sanità district below.', 'Catacombe di San Gennaro', 60, 75, b='rec', n='가이드 투어로만 들어갈 수 있습니다.|Visits are by guided tour only.')),
 ],
 'milan': [
  (25, S('산 마우리치오 성당', 'San Maurizio al Monastero Maggiore', '옛 베네딕토회 수녀원 성당으로, 벽과 천장 전체를 덮은 16세기 프레스코 덕분에 ‘밀라노의 시스티나 성당’이라 불립니다. 옆 수녀원 건물은 시립 고고학 박물관입니다.', 'The church of a former Benedictine convent, nicknamed “Milan’s Sistine Chapel” for the 16th-century frescoes covering every wall and vault. The convent next door is the Civic Archaeological Museum.', 'San Maurizio al Monastero Maggiore', 20, 30, b='no', n=FREE)),
  (26, S('암브로시아나 미술관', 'Pinacoteca Ambrosiana', '1609년 페데리코 보로메오 추기경이 세운 도서관 겸 미술관으로, 카라바조의 「과일 바구니」와 라파엘로의 「아테네 학당」 밑그림, 레오나르도의 「코덱스 아틀란티쿠스」를 소장하고 있습니다.', 'The library and gallery founded in 1609 by Cardinal Federico Borromeo, home to Caravaggio’s Basket of Fruit, Raphael’s cartoon for the School of Athens and Leonardo’s Codex Atlanticus.', 'Pinacoteca Ambrosiana', 75, 120)),
  (27, S('산타 마리아 프레소 산 사티로', 'Santa Maria presso San Satiro', '두오모 근처 작은 르네상스 성당(1476–82)으로, 브라만테가 깊이 겨우 1m 남짓한 공간에 그린 착시 제단부가 유명합니다.', 'A small Renaissance church (1476–82) near the Duomo, famous for Bramante’s false apse: a painted perspective that fakes a deep choir in barely a metre of space.', 'Santa Maria presso San Satiro', 15, 20, b='no')),
 ],
 'siena': [
  (6, S('시립 박물관(푸블리코 궁전)', 'Museo Civico (Palazzo Pubblico)', '캄포 광장의 시청 궁전 안 박물관으로, 로렌체티의 「좋은 정부와 나쁜 정부의 알레고리」와 시모네 마르티니의 「마에스타」 프레스코가 있습니다.', 'The museum inside the town hall on the Campo, with Ambrogio Lorenzetti’s Allegory of Good and Bad Government and Simone Martini’s Maestà.', 'Museo Civico Siena', 60, 90)),
  (7, S('산 도메니코 대성당', 'Basilica of San Domenico', '시에나의 수호성인 성녀 카타리나와 관련된 고딕 성당으로, 성녀의 유해 일부를 모신 예배당이 있습니다. 앞 광장에서 대성당 쪽 전망이 좋습니다.', 'The Gothic basilica bound up with St Catherine of Siena, with the chapel holding her relics; the terrace outside looks across to the cathedral.', 'Basilica di San Domenico Siena', 20, 30, b='no', n=FREE)),
 ],
 'verona': [
  (10, S('주스티 정원', 'Giardino Giusti', '아디제강 건너편 16세기 궁전에 딸린 정원으로, 이탈리아식 정원의 손꼽히는 본보기입니다. 사이프러스 길과 꼭대기 전망대에서 시내가 보입니다.', 'The garden of a 16th-century palace across the Adige, one of the finest Italian Renaissance gardens, with a cypress avenue and a belvedere over the city.', 'Giardino Giusti Verona', 45, 60)),
  (11, S('산 피에트로 성 전망대', 'Castel San Pietro viewpoint', '로마 극장 뒤 언덕 위 전망대로, 아디제강과 피에트라 다리, 구시가 지붕이 한눈에 보입니다. 걸어 오르거나 푸니쿨라를 타면 됩니다.', 'The hilltop terrace above the Roman Theatre, looking over the Adige, Ponte Pietra and the old town’s rooftops. Walk up or take the funicular.', 'Castel San Pietro Verona', 30, 45, b='no', n='전망대는 무료이고 푸니쿨라는 유료입니다.|The terrace is free; the funicular is ticketed.')),
 ],
 'palermo': [
  (10, S('마르토라나와 산 카탈도', 'La Martorana & San Cataldo', '벨리니 광장에 나란히 선 두 성당으로, 마르토라나는 비잔틴 황금 모자이크로, 1154년의 산 카탈도는 붉은 돔 세 개로 유명한 아랍·노르만 건축입니다.', 'Two churches side by side on Piazza Bellini: the Martorana with its golden Byzantine mosaics, and San Cataldo (1154) with three red domes, both Arab-Norman landmarks.', 'Chiesa della Martorana Palermo', 30, 45)),
 ],
}
IT = [
 ("      ['고대 로마|Ancient Rome', 1, 19, 6, 20, 21, 11, 23, 32],\n", "      ['고대 로마|Ancient Rome', 1, 19, 6, 20, 21, 11, 23, 34, 32],\n"),
 ("      ['바티칸에서 판테온까지|The Vatican to the Pantheon', 2, 25, 8, 10, 9, 26, 31, 4, 27, 24],\n",
  "      ['바티칸에서 판테온까지|The Vatican to the Pantheon', 2, 25, 8, 10, 9, 26, 35, 31, 4, 27, 37],\n      ['트라스테베레와 자니콜로|Trastevere & the Janiculum', 24, 38],\n"),
 ("      ['아피아 가도와 라테라노|Appian Way & the Lateran', 30, 28, 29],\n", "      ['아피아 가도와 라테라노|Appian Way & the Lateran', 30, 28, 29, 36],\n"),
 ("      ['두오모와 브레라|Duomo & Brera', 1, 22, 2, 12, 5, 21, 16, 15],\n", "      ['두오모와 브레라|Duomo & Brera', 1, 27, 26, 22, 2, 12, 5, 21, 16, 15],\n"),
 ("      ['최후의 만찬과 나빌리|Last Supper & the Navigli', 11, 13, 23,", "      ['최후의 만찬과 나빌리|Last Supper & the Navigli', 11, 25, 13, 23,"),
 ("      ['구시가와 박물관|Historic centre & museums', 13, 2, 6, 9, 1, 10, 7],\n      ['왕궁과 해안|Royal Naples & the seafront', 12, 11, 5, 3],\n",
  "      ['구시가와 박물관|Historic centre & museums', 18, 13, 2, 6, 9, 1, 10, 7],\n      ['왕궁과 해안|Royal Naples & the seafront', 12, 16, 17, 15, 11, 5, 3],\n"),
 ("  siena: [1, 3, 4, 2, 5],\n", "  siena: [1, 6, 3, 4, 2, 5, 7],\n"),
 ("  verona: { days: [['', 4, 1, 8, 3, 2, 6, 5, 7]],", "  verona: { days: [['', 4, 1, 8, 3, 2, 11, 10, 6, 5, 7]],"),
 ("['구시가|Old town', 2, 1, 4, 7, 3, 6]", "['구시가|Old town', 2, 1, 4, 7, 10, 3, 6]"),
]


def groups_of(c, cid):
    out = []
    for m in re.finditer(rf'id: "{cid}-h(\d+)"(.*?)\n      \}}', c, re.S):
        g = re.search(r'group: \{ ko: "([^"]*)", en: "([^"]*)" \}', m.group(2))
        out.append((int(m.group(1)), g.groups() if g else None))
    return out


def insert_after(o, after, new):
    g = dict(o)
    out = []
    for n, gr in o:
        out.append((n, gr))
        if n == after:
            out += [(x, gx if gx != 'same' else gr) for x, gx in new]
    return out


def main():
    c = rd('cities.ts')
    for cid, items in ADD.items():
        c = add_sights(c, cid, items, 'visit-it.ts')
    # Rome
    o = [x for x in groups_of(c, 'rome') if x[0] < 34]
    o = insert_after(o, 23, [(34, 'same')])
    o = insert_after(o, 26, [(35, 'same')])
    o = insert_after(o, 27, [(37, 'same')])
    o = insert_after(o, 24, [(38, 'same')])
    o = insert_after(o, 29, [(36, ('산 파올로 대성당', 'St Paul Outside the Walls'))])
    c = reorder(c, 'rome', o)
    # Naples
    o = [x for x in groups_of(c, 'naples') if x[0] < 15]
    SAN = ('산니타와 카포디몬테', 'Sanità & Capodimonte')
    TOL = ('톨레도 거리와 스페인 지구', 'Via Toledo & Quartieri Spagnoli')
    hist = [x for x in o if x[1][1] == 'Historic centre' and x[0] != 13]
    royal = [x for x in o if x[1][1] == 'Royal Palace & seafront']
    rest = [x for x in o if x[1][1] not in ('Historic centre', 'Royal Palace & seafront')]
    c = reorder(c, 'naples', [(18, SAN), (13, SAN)] + hist + [(17, TOL), (16, TOL), (15, royal[0][1])] + royal + rest)
    # Milan
    o = [x for x in groups_of(c, 'milan') if x[0] < 25]
    o = insert_after(o, 1, [(27, 'same'), (26, 'same')])
    o = insert_after(o, 11, [(25, 'same')])
    c = reorder(c, 'milan', o)
    # small cities
    c = reorder(c, 'siena', [(n, None) for n in (1, 6, 3, 4, 2, 5, 7)])
    c = reorder(c, 'verona', [(n, None) for n in (4, 1, 8, 3, 2, 11, 10, 6, 5, 7)] + [(9, DAY)])
    c = reorder(c, 'palermo', [(n, None) for n in (2, 1, 4, 7, 10, 3, 6, 8, 9)] + [(5, DAY)])
    wr('cities.ts', c)
    it = rd('itinerary-it.ts')
    for a, b in IT:
        assert it.count(a) == 1, a
        it = it.replace(a, b)
    wr('itinerary-it.ts', it)


if __name__ == '__main__':
    main()
