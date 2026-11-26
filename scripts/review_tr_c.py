#!/usr/bin/env python3
"""Turkey 2nd pass (2026-11-26, user approved): +10 sights in 8 existing cities. Facts from Wikipedia (en/tr):
Beylerbeyi Palace, built 1861-65 for Sultan Abdülaziz on the Asian shore; Mihrimah Sultan Mosque at Edirnekapı by Mimar
Sinan beside the Theodosian walls; Gordion, Phrygian capital with the Midas Mound (UNESCO 2023) near Polatlı; Sardis, Lydian
capital at Sart with the Temple of Artemis, the restored bath-gymnasium and synagogue; Priene (Temple of Athena), Miletus
(theatre) and Didyma (Temple of Apollo); Termessos, mountain city in Güllük Dağı national park; Tlos, Lycian city with the
rock tomb of Bellerophon; Myra at Demre with rock-cut tombs, theatre and the Church of St Nicholas; Sille village NW of Konya
with the Byzantine church of Aya Elena. Run once."""
import re
from add_daytrip_places import rd, wr
from sight_order import add_sights, reorder
from review_sk import S

FREE = '무료입니다.|Free.'
DAY = ('근교 당일치기', 'Day trip')
VF = 'visit-east.ts'
ADD = {
 'istanbul': [
  (28, S('베일레르베이 궁전', 'Beylerbeyi Palace', '1861~1865년 술탄 압뒬아지즈를 위해 아시아 쪽 해안에 지은 여름 궁전으로, 보스포루스 대교 바로 아래에 있습니다.', 'The summer palace built in 1861–65 for Sultan Abdülaziz on the Asian shore, right below the Bosphorus Bridge.', 'Beylerbeyi Palace', 60, 90)),
  (29, S('미흐리마흐 술탄 모스크 (에디르네카프)', 'Mihrimah Sultan Mosque (Edirnekapı)', '미마르 시난이 술레이만 대제의 딸 미흐리마흐를 위해 테오도시우스 성벽 옆에 지은 모스크로, 수많은 창으로 빛이 가득 들어옵니다.', 'The mosque Mimar Sinan built for Mihrimah, daughter of Suleiman the Magnificent, beside the Theodosian walls; its many windows flood it with light.', 'Mihrimah Sultan Mosque Edirnekapı', 20, 30, b='no', n=FREE)),
 ],
 'ankara': [
  (9, S('고르디온 유적', 'Gordion', '프리기아 왕국의 수도 유적으로, 미다스 왕의 무덤으로 알려진 큰 봉분과 박물관이 있으며 유네스코 세계유산입니다. 앙카라에서 남서쪽으로 약 100km.', 'The capital of the Phrygian kingdom, with the great Midas Mound tomb and a museum; a UNESCO World Heritage Site about 100 km south-west of Ankara.', 'Gordion Museum', 90, 120, group=DAY)),
 ],
 'izmir': [
  (10, S('사르디스 유적', 'Sardis', '리디아 왕국의 수도 유적으로, 아르테미스 신전 기둥과 복원한 로마 목욕장·체육관, 고대 유대교 회당이 남아 있습니다.', 'The capital of ancient Lydia, with the columns of the Temple of Artemis, a restored Roman bath-gymnasium and an ancient synagogue.', 'Sardis Ancient City', 90, 120, group=DAY)),
 ],
 'selcuk': [
  (8, S('프리에네·밀레토스·디디마', 'Priene, Miletus & Didyma', '언덕 위 아테나 신전의 프리에네, 큰 원형 극장의 밀레토스, 거대한 아폴론 신전의 디디마를 하루에 도는 고대 도시 코스입니다.', 'A day circuit of three ancient sites: hillside Priene with its Temple of Athena, Miletus with its great theatre, and Didyma’s colossal Temple of Apollo.', 'Priene Ancient City', 300, 420, group=DAY)),
 ],
 'antalya': [
  (11, S('테르메소스 유적', 'Termessos', '해발 1,000m가 넘는 산 위의 고대 도시로, 알렉산드로스 대왕도 함락하지 못했다고 합니다. 국립공원 숲속에 극장이 남아 있습니다.', 'An ancient city over 1,000 m up a mountain, said to have resisted Alexander the Great, with a theatre in the woods of a national park.', 'Termessos Ancient City', 120, 180, group=DAY)),
 ],
 'fethiye': [
  (7, S('틀로스 유적', 'Tlos', '리키아의 고대 도시로, 언덕 절벽에 벨레로폰의 무덤 등 바위 무덤이 있습니다. 사클르켄트 협곡 가는 길에 들르기 좋습니다.', 'An ancient Lycian city with rock tombs, including the Tomb of Bellerophon, in the cliff below its acropolis—an easy stop on the way to Saklıkent Gorge.', 'Tlos Ancient City', 60, 90, group=DAY)),
 ],
 'kas': [
  (7, S('미라 유적과 성 니콜라스 교회 (뎀레)', 'Myra & St Nicholas Church (Demre)', '절벽을 깎은 리키아 바위 무덤과 로마 극장, 그리고 산타클로스로 알려진 성 니콜라스가 주교로 있던 교회가 있습니다.', 'Lycian rock-cut tombs and a Roman theatre, plus the church of St Nicholas—the bishop of Myra who became Santa Claus.', 'Myra Ancient City', 120, 150, group=DAY)),
 ],
 'konya': [
  (7, S('실레 마을', 'Sille', '콘야 북서쪽 골짜기의 옛 마을로, 비잔틴 시대의 아야 엘레나 교회와 바위 동굴 집이 남아 있습니다.', 'An old village in a valley north-west of Konya, with the Byzantine church of Aya Elena and rock-cut cave dwellings.', 'Sille Konya', 90, 120, group=DAY)),
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
    c = place(c, 'istanbul', [(15, [(29, 'same')]), (25, [(28, 'same')])])
    c = place(c, 'ankara', [(4, [(9, DAY)])])
    c = place(c, 'izmir', [(9, [(10, 'same')])])
    c = place(c, 'selcuk', [(7, [(8, 'same')])])
    c = place(c, 'antalya', [(10, [(11, 'same')])])
    c = place(c, 'fethiye', [(6, [(7, 'same')])])
    c = place(c, 'kas', [(6, [(7, 'same')])])
    c = place(c, 'konya', [(6, [(7, 'same')])])
    wr('cities.ts', c)
    it = rd('itinerary-south.ts')
    R = [
     ("['골든혼 서쪽|Golden Horn west', 15, 16, 17],", "['골든혼 서쪽|Golden Horn west', 15, 29, 16, 17],"),
     ("['아시아 쪽|Asian side', 26, 25],", "['아시아 쪽|Asian side', 26, 25, 28],"),
     ("      ['아느트카비르|Anıtkabir', 1, 4],\n    ],\n  },", "      ['아느트카비르|Anıtkabir', 1, 4],\n    ],\n    trips: [['고르디온|Gordion', 9]],\n  },"),
     ("      ['체슈메·알라차트|Çeşme & Alaçatı', 8],\n", "      ['체슈메·알라차트|Çeşme & Alaçatı', 8],\n      ['사르디스|Sardis', 10],\n"),
     ('["쉬린제|Şirince", 7]]}', '["쉬린제|Şirince", 7], ["프리에네·밀레토스·디디마|Priene, Miletus & Didyma", 8]]}'),
     ("      ['페르게|Perge', 9],\n", "      ['페르게|Perge', 9],\n      ['테르메소스|Termessos', 11],\n"),
     ('["사클르켄트 협곡|Saklıkent Gorge", 6]]}', '["사클르켄트 협곡과 틀로스|Saklıkent Gorge & Tlos", 6, 7]]}'),
     ('["파타라|Patara", 6]]}', '["파타라|Patara", 6], ["뎀레(미라)|Demre (Myra)", 7]]}'),
     ('["차탈회위크|Çatalhöyük", 6]]}', '["차탈회위크|Çatalhöyük", 6], ["실레|Sille", 7]]}'),
    ]
    for a, b in R:
        assert it.count(a) == 1, a
        it = it.replace(a, b)
    wr('itinerary-south.ts', it)


if __name__ == '__main__':
    main()
