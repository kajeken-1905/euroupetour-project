#!/usr/bin/env python3
"""Batch C Belgium (2026-11-21): Dinant rewritten and +4 (English/French Wikipedia: citadel site fortified 1051, current
fort 1815; Collégiale Notre-Dame, Mosan Gothic rebuilt after the 1227 collapse; Adolphe Sax born here in 1814, Maison de
Monsieur Sax; Rocher Bayard, a ~40 m needle tied to the Four Sons of Aymon; Leffe Abbey, Premonstratensian, priory 1152,
abbey 1160, still inhabited; Château de Freÿr on the Meuse, held by the same family line since 1410). Run once."""
import re
from add_daytrip_places import rd, wr
from sight_order import add_sights, reorder
from review_sk import S

FREE = '무료입니다.|Free.'
BLURB = ('브뤼셀 남동쪽 약 90km, 아르덴의 뫼즈강 변 도시로, 강가 절벽 위에 시타델이 서 있고 그 아래 양파 모양 탑의 노트르담 성당이 마을의 상징입니다. 색소폰을 만든 아돌프 삭스가 1814년 이곳에서 태어나 다리와 거리 곳곳에 색소폰 조형이 있고, 레프 맥주로 이름난 수도원과 전설의 바위 로셰 바야르도 강가에 있습니다.',
         'A town on the Meuse in the Ardennes, about 90 km south-east of Brussels, where the citadel crowns the cliff and the onion-domed Notre-Dame church below is the town’s emblem. Adolphe Sax, inventor of the saxophone, was born here in 1814, so saxophone sculptures line the bridge and streets, and the abbey behind the Leffe beer name and the legendary Rocher Bayard also stand by the river.')
REWRITE = {
 'dinant-h1': '마을 뒤 절벽 위의 요새로, 1051년부터 요새가 있던 자리에 지금 건물은 1815년에 지었습니다. 케이블카나 408개 계단으로 올라 뫼즈강을 내려다봅니다.|The fortress on the cliff above town; the site was first fortified in 1051 and the present fort dates from 1815. Ride the cable car or climb the steps for the view over the Meuse.',
 'dinant-h2': '절벽 아래 강가에 선 성당으로, 1227년 바위가 떨어져 옛 건물이 무너진 뒤 13세기에 뫼즈 지방 고딕 양식으로 다시 지었습니다. 양파 모양 탑이 마을의 상징입니다.|The church on the riverbank below the cliff, rebuilt in the 13th century in the Mosan Gothic style after a rockfall brought down the old building in 1227; its onion-shaped spire is the town’s emblem.',
 'dinant-h4': '색소폰을 발명한 아돌프 삭스를 기려 나라마다 다른 색으로 칠한 대형 색소폰 조형들이 늘어선 다리입니다.|A bridge lined with giant saxophone sculptures, each painted for a different country, in honour of Adolphe Sax.',
 'dinant-h3': '마을 앞 뫼즈강을 유람선이나 카약으로 따라가며 절벽과 강변 마을을 봅니다.|Follow the Meuse by cruise boat or kayak, past the cliffs and riverside villages.',
}
ADD = {'dinant': [
 (5, S('삭스 씨의 집', 'Maison de Monsieur Sax', '아돌프 삭스(1814~1894)가 태어난 자리의 작은 무료 전시관으로, 색소폰의 탄생 이야기를 보여 줍니다.', 'A small free exhibition on the site of Adolphe Sax’s birthplace (1814–1894), telling the story of the saxophone.', 'Maison de Monsieur Sax Dinant', 15, 20, b='no', n=FREE)),
 (6, S('로셰 바야르', 'Rocher Bayard', '마을 남쪽 강가에 솟은 높이 약 40m의 바위 기둥으로, 아이몬의 네 아들이 탄 명마 바야르가 발굽으로 갈랐다는 전설이 있습니다.', 'A rock needle about 40 m high on the riverbank south of town, said to have been split by the hoof of Bayard, the horse of the Four Sons of Aymon.', 'Rocher Bayard Dinant', 10, 15, b='no', n=FREE)),
 (7, S('레프 수도원', 'Leffe Abbey', '1152년 소수도원으로 시작해 1160년 수도원이 된 프레몽트레회 수도원으로, 지금도 수도사들이 살며 레프 맥주 이름의 유래가 됐습니다.', 'A Premonstratensian abbey, founded as a priory in 1152 and raised to an abbey in 1160, still home to canons and the origin of the Leffe beer name.', 'Abbaye Notre-Dame de Leffe', 20, 30, b='no')),
 (8, S('프레이르 성', 'Château de Freÿr', '디낭 남쪽 뫼즈강 변의 성과 프랑스식 정원으로, 1410년부터 같은 집안 후손이 살고 있습니다. 강 건너편엔 벨기에에서 가장 높은 바위 절벽이 있습니다.', 'A château and formal gardens on the Meuse south of Dinant, lived in by descendants of the same family since 1410; across the river rise the highest cliffs in Belgium.', 'Château de Freÿr', 90, 120, n='봄~가을에 정해진 날만 엽니다.|Open on set days from spring to autumn.')),
]}


def main():
    c = rd('cities.ts')
    i = c.index('id: "dinant",')
    j = c.index('highlights: [', i)
    blk = re.sub(r'blurb: \{\n      ko: "[^"]*",\n      en: "[^"]*",\n    \}', f'blurb: {{\n      ko: "{BLURB[0]}",\n      en: "{BLURB[1]}",\n    }}', c[i:j])
    assert blk != c[i:j]
    c = c[:i] + blk + c[j:]
    for hid, t in REWRITE.items():
        dko, den = t.split('|')
        i = c.index(f'id: "{hid}"')
        j = c.index('\n      }', i)
        c = c[:i] + re.sub(r'description: \{[^\n]*\}', f'description: {{ ko: "{dko}", en: "{den}" }}', c[i:j]) + c[j:]
    for cid, items in ADD.items():
        c = add_sights(c, cid, items, 'visit-benelux.ts')
    c = reorder(c, 'dinant', [(n, None) for n in (2, 1, 4, 5, 3, 7, 6, 8)])
    wr('cities.ts', c)
    it = rd('itinerary-central.ts')
    a = "  dinant: [2, 1, 4, 3],\n"
    assert it.count(a) == 1
    wr('itinerary-central.ts', it.replace(a, "  dinant: { days: [['', 2, 1, 5, 4, 3, 7, 6]], trips: [['프레이르 성|Château de Freÿr', 8]] },\n"))


if __name__ == '__main__':
    main()
