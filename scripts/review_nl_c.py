#!/usr/bin/env python3
"""Batch C Netherlands (2026-11-21): Giethoorn rewritten and +2 (English Wikipedia: 'Venice of the Netherlands', lakes
from peat digging, 176 bridges, Fanfare 1958; Weerribben-Wieden National Park, largest bog in north-west Europe, about
100 km², founded 1992, thatching reed; Blokzijl, 1580s peat trading post, 17th-century harbour houses, storm cannon,
1825 flood mark). Run once."""
import re
from add_daytrip_places import rd, wr
from sight_order import add_sights
from review_sk import S

FREE = '무료입니다.|Free.'
BLURB = ('오버레이설주의 운하 마을로, ‘네덜란드의 베네치아’라 불립니다. 이탄을 캐낸 자리에 생긴 호수와 운하가 마을을 가르고, 다리가 176개나 되며 옛 마을엔 찻길이 없어 배와 자전거로 다닙니다. 갈대 지붕 농가가 물가에 늘어서 있고, 북서유럽 최대의 습지 국립공원 베리번-비던이 마을을 둘러쌉니다.',
         'A canal village in Overijssel known as the ‘Venice of the Netherlands’. Lakes and canals left by peat digging cut through it, crossed by 176 bridges, and the old village has no roads, so you get around by boat or bike. Reed-thatched farmhouses line the water, and the Weerribben-Wieden National Park, the largest bog in north-west Europe, surrounds the village.')
REWRITE = {
 'giethoorn-h1': '마을의 대표 체험으로, 작은 전기 보트를 빌려 직접 몰거나 투어 보트를 타고 운하를 누빕니다.|The village’s signature experience: hire a small electric boat to steer yourself, or join a tour boat along the canals.',
 'giethoorn-h2': '176개의 작은 나무다리가 놓인 운하를 따라 옛 마을을 걷는 산책입니다.|A walk through the old village along canals crossed by 176 little wooden bridges.',
 'giethoorn-h3': '국립공원에서 베어 낸 갈대로 지붕을 얹은 농가들이 운하 가에 그림처럼 이어집니다.|Farmhouses roofed with reed cut in the national park line the canals like a picture.',
}
ADD = {'giethoorn': [
 (5, S('베리번-비던 국립공원', 'Weerribben-Wieden National Park', '마을을 둘러싼 약 100km²의 습지 국립공원으로, 북서유럽 최대의 이탄 습지입니다. 지금도 지붕용 갈대를 베며, 수달과 검은제비갈매기가 삽니다. 오센제일에 방문자 센터가 있습니다.', 'A national park of about 100 km² around the village, the largest bog in north-west Europe, where thatching reed is still cut and otters and black terns live; the visitor centre is at Ossenzijl.', 'Nationaal Park Weerribben-Wieden', 120, 240, b='no', n=FREE)),
 (6, S('블록제일', 'Blokzijl', '1580년대 이탄 교역소로 생긴 작은 도시로, 항구 둘레에 17세기 집들이 남아 있습니다. 폭풍과 만조를 알리던 대포와 1825년 홍수 높이를 표시한 집이 있습니다.', 'A little town founded in the 1580s as a peat trading post, with 17th-century houses round its harbour, a cannon once fired to warn of storms and high tides, and a house marking the height of the 1825 flood.', 'Blokzijl haven', 45, 60, b='no', n=FREE)),
]}


def main():
    c = rd('cities.ts')
    i = c.index('id: "giethoorn",')
    j = c.index('highlights: [', i)
    blk = re.sub(r'blurb: \{\n      ko: "[^"]*",\n      en: "[^"]*",\n    \}', f'blurb: {{\n      ko: "{BLURB[0]}",\n      en: "{BLURB[1]}",\n    }}', c[i:j])
    assert blk != c[i:j]
    c = c[:i] + blk + c[j:]
    for hid, t in REWRITE.items():
        dko, den = t.split('|')
        i = c.index(f'id: "{hid}"')
        j = c.index('\n      }', i)
        b2 = re.sub(r'description: \{[^\n]*\}', f'description: {{ ko: "{dko}", en: "{den}" }}', c[i:j])
        c = c[:i] + b2 + c[j:]
    for cid, items in ADD.items():
        c = add_sights(c, cid, items, 'visit-benelux.ts')
    wr('cities.ts', c)
    it = rd('itinerary-central.ts')
    a = "  giethoorn: [1, 2, 3, 4],\n"
    assert it.count(a) == 1
    wr('itinerary-central.ts', it.replace(a, "  giethoorn: { days: [['', 1, 2, 3, 4]], trips: [['베리번-비던 국립공원|Weerribben-Wieden', 5], ['블록제일|Blokzijl', 6]] },\n"))


if __name__ == '__main__':
    main()
