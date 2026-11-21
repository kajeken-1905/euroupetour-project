#!/usr/bin/env python3
"""Batch C Luxembourg (2026-11-21): Vianden, Echternach, Remich rewritten from English Wikipedia (Vianden on the Our,
castle 11th–14th c., one of the largest west of the Rhine, state-owned and restored since 1977, Victor Hugo stayed
three months in 1871, summer chairlift, Trinitarian church 1248; Echternach the oldest town, abbey founded 698 by
St Willibrord, basilica with his tomb in the 8th-century crypt, minor basilica 1939, rebuilt after 1944, dancing
procession on Whit Tuesday, charter 1236, Roman villa traces found 1975; Remich on the Moselle, smallest commune,
Roman Remacum; Schengen, Agreement signed 1985, castle 1390). +1 each. Run once."""
import re
from add_daytrip_places import rd, wr
from sight_order import add_sights
from review_sk import S

FREE = '무료입니다.|Free.'
BLURB = {
 'vianden': ('독일 국경을 이루는 우르강 변, 높이 310m 바위 위에 라인강 서쪽에서 손꼽히게 큰 성이 우뚝한 마을입니다. 1308년 받은 오래된 도시 헌장이 있고, 1871년 빅토르 위고가 석 달을 머문 집이 박물관이 됐습니다. 여름엔 강가에서 성 위까지 체어리프트가 오릅니다.',
             'A town on the Our, which forms the German border, below one of the largest castles west of the Rhine on a 310 m rock. It holds one of Europe’s oldest town charters (1308), and the house where Victor Hugo spent three months in 1871 is now a museum. In summer a chairlift climbs from the riverbank to above the castle.'),
 'echternach': ('룩셈부르크에서 가장 오래된 도시로, 698년 성 빌리브로르드가 세운 수도원을 중심으로 자랐습니다. 독일과 국경을 이루는 자우어강 변에 있고, 해마다 성령 강림 화요일엔 수만 명이 모이는 춤추는 행렬이 열립니다. 사암 바위 숲 뮐러탈(‘작은 스위스’)로 들어가는 관문이기도 합니다.',
                'Luxembourg’s oldest town, which grew around the abbey founded in 698 by St Willibrord. It lies on the Sauer, the border with Germany, and every Whit Tuesday tens of thousands gather for its dancing procession. It is also the gateway to the sandstone forests of the Mullerthal, ‘Little Switzerland’.'),
 'remich': ('독일과 국경을 이루는 모젤강 왼쪽 기슭의 와인 마을로, 룩셈부르크에서 가장 작은 지자체입니다. 로마 시대 정착지 ‘레마쿰’에서 이름이 왔고, 강변 산책로와 와이너리, 유람선이 모젤 와인 지방 여행의 거점이 됩니다. 남쪽으로 솅겐 협정이 맺어진 솅겐 마을이 가깝습니다.',
            'A wine town on the left bank of the Moselle, the border with Germany, and Luxembourg’s smallest commune by area; its name comes from the Roman settlement of Remacum. Its riverside promenade, wineries and cruise boats make it a base for the Moselle wine country, and Schengen, where the Schengen Agreement was signed, is just to the south.'),
}
REWRITE = {
 'vianden-h1': '높이 310m 바위 위에 11~14세기 로마네스크 양식으로 지은 성으로, 라인강 서쪽에서 손꼽히게 큰 요새 성입니다. 오래 폐허였다가 1977년 나라 소유가 된 뒤 복원돼 룩셈부르크에서 가장 볼 만한 성으로 꼽힙니다.|A Romanesque castle built in the 11th–14th centuries on a 310 m rock, one of the largest fortified castles west of the Rhine. Long a ruin, it was restored after passing to the state in 1977 and is reckoned the finest castle to visit in Luxembourg.',
 'vianden-h2': '마을을 가로지르는 우르강은 독일과의 국경으로, 다리를 건너면 바로 독일입니다. 강변 산책로에서 성이 올려다보입니다.|The Our running through town is the border with Germany, which begins across the bridge; the castle towers above the riverside path.',
 'vianden-h3': '여름철에 강가 아랫마을에서 성보다 높은 언덕까지 오르는 체어리프트로, 위에서 성과 계곡이 내려다보입니다.|A summer chairlift from the riverbank in the lower town to a hilltop above the castle, looking down on the castle and the valley.',
 'vianden-h4': '1871년 빅토르 위고가 석 달 동안 머문 강가 집을 박물관으로 꾸민 곳으로, 그의 편지와 그림이 전시돼 있습니다.|The riverside house where Victor Hugo stayed for three months in 1871, now a museum with his letters and drawings.',
 'echternach-h2': '698년 성 빌리브로르드가 세운 수도원의 성당으로, 8세기 지하 묘실에 그의 무덤이 있습니다. 1939년 준대성당이 됐고, 1944년 파괴된 뒤 옛 로마네스크 모습대로 다시 지었습니다.|The church of the abbey founded by St Willibrord in 698, with his tomb in the 8th-century crypt; made a minor basilica in 1939, it was rebuilt in its Romanesque form after being blown up in 1944.',
 'echternach-h3': '마을 서쪽으로 이어지는 뮐러탈 지역은 이끼 낀 사암 바위와 협곡이 많아 ‘작은 스위스’라 불리며, 장거리 산길 뮐러탈 트레일이 지나갑니다.|West of town the Mullerthal, nicknamed ‘Little Switzerland’ for its mossy sandstone rocks and gorges, is crossed by the long-distance Mullerthal Trail.',
 'echternach-h4': '1236년 도시 헌장을 받은 옛 시가로, 마르크트 광장을 중심으로 중세 골목과 시청 건물이 이어집니다.|The old town, chartered in 1236, with medieval lanes and the old town hall around the market square.',
}
ADD = {
 'vianden': [(5, S('삼위일체회 성당', 'Church of the Trinitarians', '1248년 지은 고딕 성당으로, 신랑 두 개가 나란히 있는 독특한 구조이며 옆에 회랑이 붙어 있습니다.', 'A Gothic church of 1248 with two parallel naves and an adjoining cloister.', 'Trinitarierkirche Vianden', 10, 15, b='no', n=FREE))],
 'echternach': [(5, S('에히터나흐 로마 저택 터', 'Roman villa of Echternach', '1975년 다시 발견된 로마 시대 대저택 터로, 알프스 북쪽에서 가장 큰 로마 저택이었다고 전해집니다.', 'The remains of a Roman villa rediscovered in 1975, reputed to have been the largest north of the Alps.', 'Villa romaine Echternach', 30, 45, b='no'))],
 'remich': [(5, S('솅겐 마을', 'Schengen', '레미히 남쪽 모젤강 변의 와인 마을로, 1985년 이곳 앞 강 위의 배에서 솅겐 협정이 맺어졌습니다. 독일·프랑스·룩셈부르크 국경이 만나는 곳이며 1390년의 성(19세기 재건)이 있습니다.', 'A wine village on the Moselle south of Remich where the Schengen Agreement was signed in 1985, near the point where Germany, France and Luxembourg meet; its castle dates from 1390, though largely rebuilt in the 19th century.', 'Schengen Luxembourg', 45, 60, b='no', n=FREE))],
}
IT = [("  vianden: [3, 1, 4, 2],\n", "  vianden: { days: [['', 1, 3, 5, 4, 2]] },\n"),
      ("  echternach: [4, 2, 3, 1],\n", "  echternach: { days: [['', 4, 2, 5, 1]], trips: [['뮐러탈|Mullerthal', 3]] },\n"),
      ("  remich: [1, 3, 2, 4],\n", "  remich: { days: [['', 1, 3, 2]], trips: [['솅겐|Schengen', 5], ['그레벤마허 나비 정원|Grevenmacher Butterfly Garden', 4]] },\n")]


def main():
    c = rd('cities.ts')
    for cid, (ko, en) in BLURB.items():
        i = c.index(f'id: "{cid}",')
        j = c.index('highlights: [', i)
        blk = re.sub(r'blurb: \{\n      ko: "[^"]*",\n      en: "[^"]*",\n    \}', f'blurb: {{\n      ko: "{ko}",\n      en: "{en}",\n    }}', c[i:j])
        assert blk != c[i:j], cid
        c = c[:i] + blk + c[j:]
    for hid, t in REWRITE.items():
        dko, den = t.split('|')
        i = c.index(f'id: "{hid}"')
        j = c.index('\n      }', i)
        c = c[:i] + re.sub(r'description: \{[^\n]*\}', f'description: {{ ko: "{dko}", en: "{den}" }}', c[i:j]) + c[j:]
    for cid, items in ADD.items():
        c = add_sights(c, cid, items, 'visit-benelux.ts')
    wr('cities.ts', c)
    it = rd('itinerary-central.ts')
    for a, b in IT:
        assert it.count(a) == 1, a
        it = it.replace(a, b)
    wr('itinerary-central.ts', it)


if __name__ == '__main__':
    main()
