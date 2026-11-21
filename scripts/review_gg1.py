#!/usr/bin/env python3
"""Guernsey step 1, 2026-11-21. Blurbs rewritten. St Peter Port +5 (English Wikipedia): Town Church (begun probably in
the 13th century, finished by 1466, chapel recorded 1020); Victoria Tower (for Queen Victoria's 1846 visit); Fort Grey
("cup and saucer" Martello tower on a tidal rock in Rocquaine Bay); Sausmarez Manor (historic house, St Martin); Lihou
(tidal island, Ramsar site). Castle Cornet text updated (former tidal island, joined to the breakwater in 1859). Run once."""
import re
from add_daytrip_places import rd, wr
from sight_order import add_sights, reorder
from review_sk import S

FREE = '무료입니다.|Free.'
BLURB = {
 'st-peter-port': ('영국 왕실령 건지섬의 중심 항구 도시로, 언덕을 따라 화강암 집과 좁은 계단길이 이어집니다. 항구 입구를 지키는 코넷 성, 빅토르 위고가 망명 중 15년을 산 오트빌 하우스, 15세기 타운 교회가 있고, 버스로 섬 남쪽의 작은 예배당과 서해안의 썰물 섬 리우까지 다녀옵니다. 사크·험섬으로 가는 배도 여기서 탑니다.',
                   'The harbour town of Guernsey, a British Crown Dependency, climbing a hillside of granite houses and steep stepped lanes. Castle Cornet guards the harbour mouth, Victor Hugo spent fifteen years of exile at Hauteville House, and the Town Church dates to the 15th century; buses run out to the Little Chapel in the south and the tidal island of Lihou on the west coast. Boats to Sark and Herm leave from here.'),
 'sark': ('건지에서 배로 약 1시간 걸리는 작은 섬으로, 자동차가 다니지 않아 걷거나 자전거·트랙터 버스·마차로 다닙니다. 절벽 위 좁은 길 라 쿠페가 본섬과 리틀 사크를 잇고, 섬 영주 저택의 정원이 있습니다. 빛 공해가 적어 세계 첫 ‘어두운 하늘 섬’으로 지정됐습니다.',
          'A small island about an hour by boat from Guernsey, with no cars: you get around on foot, by bike, tractor bus or horse and cart. The clifftop path of La Coupée links the main island to Little Sark, and the Seigneur’s manor has walled gardens. With so little light pollution it became the world’s first Dark Sky Island.'),
}

REWRITE = {
 'st-peter-port-h1': (None, None, '항구 입구 바위섬에 선 800년 된 성으로, 옛날엔 썰물 때만 이어지던 섬이었지만 1859년 방파제로 육지와 연결됐습니다. 성 안에 박물관 여러 곳이 있고, 매일 정오에 대포를 쏘는 의식이 열립니다.', 'An 800-year-old castle on a rock at the harbour mouth, once a tidal island but joined to the shore by the breakwater in 1859. Inside are several museums, and a cannon is fired every day at noon.'),
}

ADD = {
 'st-peter-port': [
  (6, S('타운 교회', 'Town Church', '세인트피터포트의 교구 교회로, 1020년 기록에 작은 예배당이 처음 나오며 지금 건물은 13세기 무렵 짓기 시작해 1466년에 완성됐습니다. 항구 바로 앞에 있습니다.', 'St Peter Port’s parish church: a small chapel is first recorded in 1020, and the present building, probably begun in the 13th century, was complete by 1466. It stands right by the harbour.', 'Town Church St Peter Port', 15, 20, b='no', n=FREE)),
  (7, S('빅토리아 타워', 'Victoria Tower', '1846년 빅토리아 여왕과 앨버트 공의 건지 방문을 기념해 세운 붉은 화강암 탑으로, 시내 언덕 위에 있습니다.', 'A red granite tower on the hill above town, built to mark Queen Victoria and Prince Albert’s visit to Guernsey in 1846.', 'Victoria Tower Guernsey', 10, 15, b='no')),
  (8, S('포트 그레이', 'Fort Grey', '서해안 로크인 만의 썰물 바위 위에 선 마텔로 탑으로, 모양 때문에 ‘컵과 받침’이라 불립니다.', 'A Martello tower on a tidal rock in Rocquaine Bay on the west coast, nicknamed the “cup and saucer” for its shape.', 'Fort Grey Guernsey', 30, 45)),
  (9, S('소마레즈 장원', 'Sausmarez Manor', '섬 남동쪽 세인트마틴 교구의 오래된 장원 저택으로, 정원과 함께 둘러봅니다.', 'A historic manor house in the parish of St Martin in the south-east of the island, visited together with its grounds.', 'Sausmarez Manor Guernsey', 60, 90)),
  (10, S('리우섬', 'Lihou', '서해안 바로 앞의 작은 썰물 섬으로, 썰물 때 돌길로 걸어 건넙니다. 람사르 습지로 지정된 자연 보호 지역입니다.', 'A small tidal island just off the west coast, reached on foot along a causeway at low tide; a conservation area within a Ramsar wetland site.', 'Lihou Island Guernsey', 60, 120, b='no', n='썰물 때만 건널 수 있으니 물때표와 건너는 시간을 꼭 확인하세요.|It can be crossed only at low tide; check the tide tables and crossing times first.')),
 ],
}

IT = [("  'st-peter-port': { days: [['', 1, 4, 2]], trips: [['섬 남쪽|South of the island', 3, 5]] },\n",
       "  'st-peter-port': { days: [['', 1, 6, 4, 2, 7]], trips: [['섬 남쪽|South of the island', 3, 5, 9], ['서해안|West coast', 8, 10]] },\n")]


def main():
    c = rd('cities.ts')
    for cid, (ko, en) in BLURB.items():
        i = c.index(f'id: "{cid}",')
        j = c.index('highlights: [', i)
        blk = re.sub(r'blurb: \{\n      ko: "[^"]*",\n      en: "[^"]*",\n    \}', f'blurb: {{\n      ko: "{ko}",\n      en: "{en}",\n    }}', c[i:j])
        assert blk != c[i:j], cid
        c = c[:i] + blk + c[j:]
    for hid, (nko, nen, dko, den) in REWRITE.items():
        i = c.index(f'id: "{hid}"')
        j = c.index('\n      }', i)
        b = c[i:j]
        b2 = re.sub(r'description: \{[^\n]*\}', f'description: {{ ko: "{dko}", en: "{den}" }}', b)
        assert b2 != b, hid
        c = c[:i] + b2 + c[j:]
    for cid, items in ADD.items():
        c = add_sights(c, cid, items, 'visit-uk.ts')
    c = reorder(c, 'st-peter-port', [(n, None) for n in (1, 2, 3, 6, 4, 5, 7, 8, 10, 9)])
    wr('cities.ts', c)
    it = rd('itinerary-uk.ts')
    for a, b in IT:
        assert it.count(a) == 1, a
        it = it.replace(a, b)
    wr('itinerary-uk.ts', it)


if __name__ == '__main__':
    main()
