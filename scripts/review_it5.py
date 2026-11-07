#!/usr/bin/env python3
"""Italy step 1, centre (Tuscany, Umbria, Marche) apart from Florence/Rome, 2026-11-07. Siena name fixes (h2 '시엔나'
→'시에나', h3 '망자 탑'→'만자 탑'); siena-h5 'Views to countryside' replaced by Santa Maria della Scala (new photo).
More sights incl. themed Perugina chocolate house and Montalcino (Brunello wine). Run once."""
import re
import urllib.parse
from add_daytrip_places import rd, wr
from sight_order import add_sights, blocks, itinerary_order, read_group, reorder
from review_sk import S

DAY = ('근교 당일치기', 'Day trip')
OLD_NEAR = ('근교', 'Nearby')
REWRITE = {
 'siena-h2': ('시에나 대성당', 'Siena Cathedral', '흑백 줄무늬 대리석의 고딕 대성당으로, 상감 대리석 바닥과 피콜로미니 도서관이 유명합니다.', 'The black-and-white striped Gothic cathedral, famous for its inlaid marble floor and the Piccolomini Library.', None),
 'siena-h3': ('만자 탑', 'Torre del Mangia', '캄포 광장 시청 옆 88m 탑으로, 계단 400여 개를 올라 붉은 지붕을 내려다봅니다.', 'The 88 m tower beside the town hall on the Campo—climb some 400 steps over the red roofs.', None),
 'siena-h4': ('콘트라다 골목', 'Contrada lanes', '팔리오 경마를 겨루는 17개 동네 ‘콘트라다’의 깃발과 상징이 걸린 중세 골목입니다.', 'Medieval lanes hung with the flags and emblems of the 17 contrade that compete in the Palio horse race.', None),
 'siena-h5': ('산타 마리아 델라 스칼라', 'Santa Maria della Scala', '대성당 맞은편의 중세 병원 건물로, 프레스코 홀과 지하 전시실을 둘러봅니다.', 'The medieval hospital opposite the cathedral, with frescoed halls and underground galleries.', 'Santa Maria della Scala Siena'),
}
ADD = {
 'pisa': [
  (5, S('캄포산토', 'Camposanto', '기적의 광장 북쪽의 회랑 묘지로, ‘죽음의 승리’ 프레스코가 있습니다.', 'The cloistered cemetery on the north side of the Piazza dei Miracoli, with the Triumph of Death fresco.', 'Camposanto Monumentale Pisa', 30, 45)),
  (6, S('기사의 광장', 'Piazza dei Cavalieri', '바사리가 꾸민 르네상스 광장으로, 지금은 스쿠올라 노르말레 대학이 있습니다.', 'The Renaissance square redesigned by Vasari, now home to the Scuola Normale university.', 'Piazza dei Cavalieri Pisa', 15, 20)),
 ],
 'lucca': [
  (6, S('푸치니 생가 박물관', 'Puccini Museum', '오페라 작곡가 푸치니가 태어난 집으로, 그의 피아노와 악보를 전시합니다.', 'The house where the opera composer Puccini was born, with his piano and scores.', 'Puccini Museum Lucca', 45, 60)),
 ],
 'assisi': [
  (5, S('산 다미아노 수도원', 'San Damiano', '성 프란치스코가 십자가의 목소리를 들었다는 언덕 아래 작은 수도원입니다.', 'The small convent below the town where St Francis is said to have heard the crucifix speak.', 'Santuario di San Damiano', 30, 45)),
 ],
 'orvieto': [
  (5, S('치비타 디 바뇨레조', 'Civita di Bagnoregio', '무너져 가는 응회암 언덕 위 ‘죽어가는 마을’로, 긴 보행자 다리로만 들어갑니다.', 'The “dying town” on a crumbling tufa hill, reached only by a long footbridge.', 'Civita di Bagnoregio', 120, 180, group=DAY,
        n='오르비에토에서 버스로 약 50분이고 입장료가 있습니다.|About 50 min by bus from Orvieto; there is an entry fee.')),
 ],
 'perugia': [
  (6, S('페루지나 초콜릿의 집', 'Casa del Cioccolato Perugina', '‘바치’ 초콜릿으로 유명한 페루지나 공장의 박물관과 공장 견학, 시식입니다.', 'The museum, factory tour and tasting at Perugina, maker of Baci chocolates.', 'Casa del Cioccolato Perugina', 90, 120, group=DAY, b='rec',
        n='시내에서 버스나 택시로 약 20분이고 투어는 예약하는 편이 좋습니다.|About 20 min by bus or taxi from the centre; book the tour ahead.')),
 ],
 'montepulciano': [
  (6, S('몬탈치노', 'Montalcino', '브루넬로 디 몬탈치노 와인의 언덕 마을로, 요새 안 에노테카에서 시음합니다.', 'The hill town of Brunello di Montalcino wine, with tastings in the wine bar inside its fortress.', 'Fortezza di Montalcino', 180, 240, group=DAY,
        n='몬테풀차노에서 차로 약 45분입니다.|About 45 min by car from Montepulciano.')),
 ],
}
IT = [
 ("  pisa: [4, 1, 2, 3],", "  pisa: [4, 1, 2, 3, 5, 6],"),
 ("  lucca: [4, 5, 3, 2, 1],", "  lucca: [4, 5, 6, 3, 2, 1],"),
 ("  montepulciano: { days: [['', 1, 3, 2]], trips: [['피엔차와 발도르차|Pienza & Val d’Orcia', 4, 5]] },",
  "  montepulciano: { days: [['', 1, 3, 2]], trips: [['피엔차와 발도르차|Pienza & Val d’Orcia', 4, 5], ['몬탈치노|Montalcino', 6]] },"),
 ("  assisi: [2, 3, 4, 1],", "  assisi: [2, 3, 4, 1, 5],"),
 ("  perugia: [3, 1, 2, 4, 5],", "  perugia: { days: [['', 3, 1, 2, 4, 5]], trips: [['페루지나 초콜릿|Perugina chocolate', 6]] },"),
 ("  orvieto: [2, 4, 1, 3],", "  orvieto: { days: [['', 2, 4, 1, 3]], trips: [['치비타 디 바뇨레조|Civita di Bagnoregio', 5]] },"),
 ("  siena: [1, 3, 5, 4, 2],", "  siena: [1, 3, 4, 2, 5],"),
]


def main():
    c = rd('cities.ts')
    for hid, (ko, en, dko, den, q) in REWRITE.items():
        i = c.index(f'id: "{hid}"')
        j = c.index('\n      }', i)
        blk = c[i:j]
        blk = re.sub(r'name: \{[^\n]*\}', f'name: {{ ko: "{ko}", en: "{en}" }}', blk)
        blk = re.sub(r'description: \{[^\n]*\}', f'description: {{ ko: "{dko}", en: "{den}" }}', blk)
        if q:
            blk = re.sub(r'query=[^"]*"', 'query=' + urllib.parse.quote(q) + '"', blk)
        c = c[:i] + blk + c[j:]
    for cid, items in ADD.items():
        c = add_sights(c, cid, items, 'visit-it.ts')
    it = rd('itinerary-it.ts')
    for a, b in IT:
        assert it.count(a) == 1, a[:60]
        it = it.replace(a, b)
    wr('itinerary-it.ts', it)
    for cid in list(ADD) + ['siena']:
        by = blocks(c, cid)
        m = re.search(rf"^  '?{cid}'?: (.*?)(?=^  [a-z'/])", it, re.M | re.S)
        trips = {int(x) for t in re.findall(r"trips: \[(.*)\]", m.group(1), re.S) for x in re.findall(r", (\d+)", t)}
        c = reorder(c, cid, [(n, DAY if (n in trips or read_group(by[n]) == OLD_NEAR) else read_group(by[n])) for n in itinerary_order(it, cid, set(by))])
    wr('cities.ts', c)
    v = rd('visit-it.ts')
    v = re.sub(r"  'siena-h5': v\(.*\),", "  'siena-h5': v(60, 90),", v)
    wr('visit-it.ts', v)


if __name__ == '__main__':
    main()
