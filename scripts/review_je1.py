#!/usr/bin/env python3
"""Jersey step 1, 2026-11-21. Blurbs rewritten. St Helier +6 (English Wikipedia): Maritime Museum (1997, five 19th-century
warehouses) with the Occupation Tapestry (1988–94); Liberation Square (1990s, 50th anniversary of Liberation, statue of
islanders with the Union Flag); Royal Square (old market square, enclosed by 1550); Fort Regent (19th-century fort on
Mont de la Ville); La Corbière lighthouse (Sir John Coode, built 1873, tidal causeway); Grosnez Castle (14th-century ruin,
Jersey Heritage). Run once."""
import re
from add_daytrip_places import rd, wr
from sight_order import add_sights, reorder
from review_sk import S

FREE = '무료입니다.|Free.'
BLURB = {
 'st-helier': ('영국 왕실령 저지섬의 중심 도시로, 바다 위 바위섬의 엘리자베스 성과 빅토리아 시대 시장, 해양 박물관이 모여 있습니다. 1940~1945년 독일군 점령의 흔적인 전쟁 터널과 해방 광장이 있고, 버스로 섬 서쪽 끝 코르비에르 등대와 북서쪽 그로네 성터까지 다녀올 수 있습니다.',
               'The main town of Jersey, a British Crown Dependency, gathering Elizabeth Castle on its tidal islet, a Victorian market and the Maritime Museum. The War Tunnels and Liberation Square recall the German occupation of 1940–45, and buses run out to La Corbière lighthouse at the island’s south-west tip and the ruins of Grosnez Castle in the north-west.'),
 'gorey': ('저지 동해안의 작은 항구 마을로, 13세기부터 섬을 지킨 몽오르게이 성이 절벽 위에서 알록달록한 항구를 내려다봅니다. 맑은 날엔 바다 건너 프랑스 노르망디 해안이 보이고, 가까운 내륙엔 신석기 무덤 라 우그 비가 있습니다.',
           'A small harbour village on Jersey’s east coast, where Mont Orgueil Castle, guarding the island since the 13th century, looks down from its cliff over the colourful harbour. On clear days the Normandy coast is visible across the sea, and the Neolithic tomb of La Hougue Bie lies a short way inland.'),
}

ADD = {
 'st-helier': [
  (6, S('해양 박물관과 점령 태피스트리', 'Maritime Museum & Occupation Tapestry', '19세기 창고 다섯 채에 1997년 문을 연 박물관으로, 섬의 바다 산업과 해적 이야기를 보여 줍니다. 섬 주민들이 1988~1994년에 수놓아 독일군 점령기의 삶을 그린 점령 태피스트리도 여기 있습니다.', 'A museum opened in 1997 in five 19th-century warehouses, on the island’s seafaring trades and privateers. It also holds the Occupation Tapestry, stitched by islanders in 1988–94 to show life under the German occupation.', 'Maritime Museum Jersey', 60, 90, s='https://www.jerseyheritage.org')),
  (7, S('해방 광장', 'Liberation Square', '1945년 독일군 점령에서 풀려난 지 50주년을 맞아 옛 항구 앞에 만든 광장으로, 영국 국기를 펼쳐 든 섬 주민들의 조각상이 서 있습니다.', 'A square by the old harbour laid out for the 50th anniversary of the island’s liberation from German occupation in 1945, with a statue of islanders holding up the Union Flag.', 'Liberation Square St Helier', 10, 15, b='no', n=FREE)),
  (8, S('로열 스퀘어', 'Royal Square', '세인트헬리어의 옛 시장 광장으로, 1550년 무렵 이미 건물로 둘러싸였습니다. 지금은 저지 의회와 왕립 법원 건물이 광장에 면해 있습니다.', 'St Helier’s old market square, enclosed by buildings by about 1550; Jersey’s parliament and Royal Court now front onto it.', 'Royal Square St Helier', 10, 15, b='no', n=FREE)),
  (9, S('포트 리전트', 'Fort Regent', '시내 동쪽 언덕 몽 드 라 빌 위의 19세기 요새로, 두꺼운 성벽과 해자가 남아 있으며 엘리자베스 성과 항구가 내려다보입니다.', 'A 19th-century fort on Mont de la Ville east of the centre, with massive walls and ditches, looking over Elizabeth Castle and the harbour.', 'Fort Regent Jersey', 30, 45)),
  (10, S('코르비에르 등대', 'La Corbière Lighthouse', '섬 남서쪽 끝 바위섬에 1873년 세운 등대로, 썰물 때만 둑길로 걸어갈 수 있습니다. 해가 지는 풍경으로 유명합니다.', 'A lighthouse built in 1873 on a tidal rock at the island’s south-west tip, reached on foot along a causeway only at low tide; famous for its sunsets.', 'La Corbière Lighthouse Jersey', 30, 60, b='no', n='밀물이 들어오면 둑길이 잠기니 경보가 울리면 바로 돌아오세요.|The causeway floods as the tide comes in; turn back as soon as the warning sounds.')),
  (11, S('그로네 성터', 'Grosnez Castle', '섬 북서쪽 곶 위의 14세기 성터로, 성문과 성벽 일부가 남아 있습니다. 대서양과 다른 채널 제도 섬들, 노르망디 해안이 바라다보입니다.', 'A ruined 14th-century castle on the headland at the island’s north-west corner, with its gatehouse and parts of the walls left; views reach across the Atlantic to the other Channel Islands and Normandy.', 'Grosnez Castle Jersey', 20, 30, b='no', n=FREE)),
 ],
}

IT = [("  'st-helier': { days: [['', 1, 4, 3]], trips: [['섬 안쪽|Inland', 2, 5]] },\n",
       "  'st-helier': { days: [['', 7, 6, 4, 8, 3, 9, 1]], trips: [['섬 안쪽|Inland', 2, 5], ['서쪽 해안|West coast', 10, 11]] },\n")]


def main():
    c = rd('cities.ts')
    for cid, (ko, en) in BLURB.items():
        i = c.index(f'id: "{cid}",')
        j = c.index('highlights: [', i)
        blk = re.sub(r'blurb: \{\n      ko: "[^"]*",\n      en: "[^"]*",\n    \}', f'blurb: {{\n      ko: "{ko}",\n      en: "{en}",\n    }}', c[i:j])
        assert blk != c[i:j], cid
        c = c[:i] + blk + c[j:]
    for cid, items in ADD.items():
        c = add_sights(c, cid, items, 'visit-uk.ts')
    c = reorder(c, 'st-helier', [(n, None) for n in (1, 2, 3, 6, 4, 7, 8, 9, 5, 10, 11)])
    wr('cities.ts', c)
    it = rd('itinerary-uk.ts')
    for a, b in IT:
        assert it.count(a) == 1, a
        it = it.replace(a, b)
    wr('itinerary-uk.ts', it)


if __name__ == '__main__':
    main()
