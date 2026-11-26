#!/usr/bin/env python3
"""Greece 2nd pass (2026-11-26, user approved): +13 sights in 10 existing cities. Facts from Wikipedia (en/el):
Hadrian's Library (AD 132) north of the Acropolis; Byzantine and Christian Museum in the Villa Ilissia; Hagia Sophia of
Thessaloniki, 8th-c. church with the Ascension dome mosaic (UNESCO Paleochristian & Byzantine monuments); Aigai (Vergina)
royal tombs incl. Philip II, museum inside the tumulus (UNESCO 1996); Dodona, oracle of Zeus and large 3rd-c. BC theatre
SW of Ioannina; St Nicholas Anapafsas, Meteora, frescoes by Theophanes the Cretan (1527); Hosios Loukas, 11th-c. mosaics
(UNESCO 1990); Tiryns, Mycenaean citadel with Cyclopean walls (UNESCO 1999 with Mycenae); Apeiranthos, marble-paved
village on Naxos; Kallithea Springs, 1929 Italian-era spa on Rhodes; Historical Museum of Crete with two El Greco
paintings; Phaistos Minoan palace on the Mesara plain; Splantzia quarter of Chania with Agios Nikolaos (minaret and
bell tower). Run once."""
import re
from add_daytrip_places import rd, wr
from sight_order import add_sights, reorder
from review_sk import S

FREE = '무료입니다.|Free.'
DAY = ('근교 당일치기', 'Day trip')
VF = 'visit-med.ts'
ADD = {
 'athens': [
  (20, S('하드리아누스 도서관', "Hadrian's Library", '서기 132년 하드리아누스 황제가 지은 도서관 유적으로, 모나스티라키 광장 바로 옆에 열주 벽이 남아 있습니다.', 'The ruins of the library built by Emperor Hadrian in AD 132, its colonnaded wall right beside Monastiraki Square.', "Hadrian's Library Athens", 30, 45)),
  (21, S('비잔틴·기독교 박물관', 'Byzantine and Christian Museum', '일리시아 저택에 자리한 박물관으로, 비잔틴 시대의 성상화·모자이크·필사본을 모았습니다.', 'A museum in the Villa Ilissia with Byzantine icons, mosaics and manuscripts.', 'Byzantine and Christian Museum Athens', 90, 120)),
 ],
 'thessaloniki': [
  (11, S('아야 소피아 성당', 'Hagia Sophia', '8세기 성당으로, 둥근 지붕의 승천 모자이크가 유명하며 유네스코 세계유산(초기 기독교·비잔틴 기념물)입니다.', 'An 8th-century church famed for its Ascension dome mosaic, part of a UNESCO World Heritage Site.', 'Hagia Sophia Thessaloniki', 20, 30, b='no', n=FREE)),
  (12, S('베르기나 왕릉(아이가이)', 'Royal Tombs of Aigai (Vergina)', '필리포스 2세의 무덤 등 마케도니아 왕릉을 봉분 안 박물관에서 보는 유네스코 세계유산입니다.', 'The Macedonian royal tombs, including that of Philip II, seen in a museum built inside the burial mound; a UNESCO site.', 'Museum of the Royal Tombs of Aigai', 90, 120, group=DAY)),
 ],
 'ioannina': [
  (6, S('도도나 유적', 'Ancient Dodona', '제우스 신탁소가 있던 곳으로, 기원전 3세기의 큰 원형 극장이 남아 있습니다.', 'The site of the oracle of Zeus, with a large 3rd-century BC theatre.', 'Ancient Theatre of Dodona', 60, 90)),
 ],
 'meteora': [
  (7, S('성 니콜라오스 아나파브사스 수도원', 'Monastery of St Nicholas Anapafsas', '바위 위 작은 수도원으로, 크레타의 테오파니스가 1527년에 그린 프레스코가 남아 있습니다.', 'A small monastery on a rock pillar with frescoes painted by Theophanes the Cretan in 1527.', 'Monastery of St. Nicholas Anapausas', 30, 45)),
 ],
 'delphi': [
  (6, S('호시오스 루카스 수도원', 'Hosios Loukas Monastery', '11세기 금빛 모자이크가 남은 비잔틴 수도원으로, 유네스코 세계유산입니다.', 'A Byzantine monastery with golden 11th-century mosaics; a UNESCO World Heritage Site.', 'Monastery of Hosios Loukas', 60, 90)),
 ],
 'nafplio': [
  (9, S('티린스 유적', 'Tiryns', '거대한 돌로 쌓은 성벽이 남은 미케네 시대 성채로, 미케네와 함께 유네스코 세계유산입니다.', 'A Mycenaean citadel with Cyclopean walls, a UNESCO site together with Mycenae.', 'Archaeological Site of Tiryns', 45, 60)),
 ],
 'naxos': [
  (6, S('아피란토스 마을', 'Apeiranthos', '대리석으로 포장한 골목이 이어지는 산마을입니다.', 'A mountain village of marble-paved lanes.', 'Apeiranthos Naxos', 60, 90, b='no', n=FREE)),
 ],
 'rhodes': [
  (9, S('칼리테아 온천', 'Kallithea Springs', '1929년 이탈리아 시절에 지은 옛 온천 건물과 바닷가 수영 터입니다.', 'A 1929 Italian-era spa complex by the sea, with a swimming cove.', 'Kallithea Springs Rhodes', 60, 120)),
 ],
 'heraklion': [
  (8, S('크레타 역사 박물관', 'Historical Museum of Crete', '비잔틴 시대부터 현대까지의 크레타 역사를 다루며, 엘 그레코의 그림 두 점이 있습니다.', 'Cretan history from Byzantine times to the present, including two paintings by El Greco.', 'Historical Museum of Crete', 60, 90)),
  (9, S('파이스토스 궁전 유적', 'Palace of Phaistos', '메사라 평야를 내려다보는 미노아 궁전 유적으로, 파이스토스 원반이 발견된 곳입니다.', 'Minoan palace ruins above the Mesara plain, where the Phaistos Disc was found.', 'Phaistos Palace', 60, 90, group=DAY)),
 ],
 'chania': [
  (7, S('스플란지아 구역', 'Splantzia', '플라타너스 광장이 있는 옛 오스만 구역으로, 아요스 니콜라오스 교회엔 첨탑과 종탑이 함께 있습니다.', 'The old Ottoman quarter around a plane-tree square; Agios Nikolaos church has both a minaret and a bell tower.', 'Splantzia Square Chania', 30, 45, b='no', n=FREE)),
 ],
}


def groups_of(c, cid):
    out = []
    for m in re.finditer(rf'id: "{cid}-h(\d+)"(.*?)\n      \}}', c, re.S):
        g = re.search(r'group: \{ ko: "([^"]*)", en: "([^"]*)" \}', m.group(2))
        out.append((int(m.group(1)), g.groups() if g else None))
    return out


def ins(o, after, new):
    out = []
    for n, gr in o:
        out.append((n, gr))
        if n == after:
            out += [(x, gx if gx != 'same' else gr) for x, gx in new]
    return out


def place(c, cid, steps):
    new = {n for n, _ in ADD[cid]}
    o = [x for x in groups_of(c, cid) if x[0] not in new]
    for after, items in steps:
        o = ins(o, after, items)
    return reorder(c, cid, o)


def main():
    c = rd('cities.ts')
    for cid, items in ADD.items():
        c = add_sights(c, cid, items, VF)
    c = place(c, 'athens', [(12, [(20, 'same')]), (13, [(21, 'same')])])
    c = place(c, 'thessaloniki', [(10, [(11, 'same')]), (3, [(12, DAY)])])
    c = place(c, 'ioannina', [(5, [(6, None)])])
    c = place(c, 'meteora', [(6, [(7, None)])])
    c = place(c, 'delphi', [(5, [(6, None)])])
    c = place(c, 'nafplio', [(2, [(9, DAY)])])
    c = place(c, 'naxos', [(4, [(6, None)])])
    c = place(c, 'rhodes', [(8, [(9, None)])])
    c = place(c, 'heraklion', [(3, [(8, 'same')]), (1, [(9, DAY)])])
    c = place(c, 'chania', [(2, [(7, 'same')])])
    wr('cities.ts', c)
    it = rd('itinerary-south.ts')
    R = [
     ("['아크로폴리스와 플라카|Acropolis & Plaka', 1, 2, 11, 3, 12, 4, 5, 14]", "['아크로폴리스와 플라카|Acropolis & Plaka', 1, 2, 11, 3, 12, 20, 4, 5, 14]"),
     ("['신타그마와 콜로나키|Syntagma & Kolonaki', 6, 16, 7, 8, 13, 17, 10]", "['신타그마와 콜로나키|Syntagma & Kolonaki', 6, 16, 7, 8, 13, 21, 17, 10]"),
     ("thessaloniki: { days: [['해안과 시장|Seafront & markets', 2, 10, 1, 5, 8, 9], ['로마 유적과 윗마을|Roman sites & the Upper Town', 6, 4, 7, 3]] },",
      "thessaloniki: { days: [['해안과 시장|Seafront & markets', 2, 10, 11, 1, 5, 8, 9], ['로마 유적과 윗마을|Roman sites & the Upper Town', 6, 4, 7, 3]], trips: [['베르기나|Vergina', 12]] },"),
     ("ioannina: { days: [['', 1, 2, 3, 4]], trips: [['자고리와 비코스 협곡|Zagori & the Vikos Gorge', 5]] },", "ioannina: { days: [['', 1, 2, 3, 4]], trips: [['자고리와 비코스 협곡|Zagori & the Vikos Gorge', 5], ['도도나|Dodona', 6]] },"),
     ("meteora: [1, 2, 3, 4, 6, 5],", "meteora: [1, 2, 3, 4, 6, 7, 5],"),
     ("delphi: { days: [['', 4, 1, 3, 2]], trips: [['아라호바|Arachova', 5]] },", "delphi: { days: [['', 4, 1, 3, 2]], trips: [['아라호바|Arachova', 5], ['호시오스 루카스|Hosios Loukas', 6]] },"),
     ("trips: [['미케네와 에피다우로스|Mycenae & Epidaurus', 6, 7], ['네메아|Nemea', 8]] },", "trips: [['티린스와 미케네|Tiryns & Mycenae', 9, 6], ['에피다우로스|Epidaurus', 7], ['네메아|Nemea', 8]] },"),
     ("trips: [['데메테르 신전과 할키|Temple of Demeter & Chalki', 5, 4]] },", "trips: [['데메테르 신전·할키·아피란토스|Temple of Demeter, Chalki & Apeiranthos', 5, 4, 6]] },"),
     ("rhodes: { days: [['', 4, 1, 6, 2, 7, 8]], trips: [['참비카 해변과 린도스|Tsambika & Lindos', 5, 3]] },", "rhodes: { days: [['', 4, 1, 6, 2, 7, 8]], trips: [['칼리테아 온천|Kallithea Springs', 9], ['참비카 해변과 린도스|Tsambika & Lindos', 5, 3]] },"),
     ("heraklion: { days: [['', 2, 5, 7, 4, 3, 6]], trips: [['크노소스|Knossos', 1]] },", "heraklion: { days: [['', 2, 5, 7, 4, 3, 8, 6]], trips: [['크노소스|Knossos', 1], ['파이스토스|Phaistos', 9]] },"),
     ("days: [['', 1, 6, 2]],\n    trips: [\n      ['발로스 석호|Balos Lagoon', 3],", "days: [['', 1, 6, 2, 7]],\n    trips: [\n      ['발로스 석호|Balos Lagoon', 3],"),
    ]
    for a, b in R:
        assert it.count(a) == 1, a
        it = it.replace(a, b)
    wr('itinerary-south.ts', it)


if __name__ == '__main__':
    main()
