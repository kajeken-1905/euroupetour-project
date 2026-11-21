#!/usr/bin/env python3
"""Faroe Islands step 1, 2026-11-21. Blurbs rewritten. New (English Wikipedia): Tórshavn +5 (Cathedral 1788, seat of the
bishop since 1990; Listasavn Føroya 1989; National Museum; Nólsoy 4 km east; Saksun); Kirkjubøur text (Magnus Cathedral
c. 1300, St Olav's 12th c., farmhouse 11th c.); Vágar +2 (Bøur, Drangarnir with Stóri Drangur's arch) and Gásadalur in
Múlafossur text; Eysturoy +3 (Eysturoy Tunnel 11.24 km with the first undersea roundabout, Funningur, Elduvík). Run once."""
import re
from add_daytrip_places import rd, wr
from sight_order import add_sights, reorder
from review_sk import S

FREE = '무료입니다.|Free.'
WEATHER = '날씨가 급변하니 출발 전에 예보와 도로 상황을 확인하세요.|Conditions change fast—check the forecast and roads before setting out.'
BLURB = {
 'torshavn': ('페로 제도의 수도로, 세계에서 가장 작은 수도 가운데 하나입니다. 바이킹 시대부터 의회가 모이던 틴가네스 반도에 붉은 목조 정부 건물과 잔디 지붕 집이 모여 있고, 1788년 대성당과 국립 미술관·박물관이 걸어서 닿는 거리에 있습니다. 남쪽 키르큐보우르의 중세 유적과 북서쪽 사크순 마을까지 차로 다녀옵니다.',
              'The capital of the Faroe Islands and one of the world’s smallest capitals. Red wooden government buildings and turf-roofed houses crowd the Tinganes peninsula, where the parliament has met since Viking times, and the 1788 cathedral, the national gallery and museum are all within walking distance. Drive out to the medieval ruins at Kirkjubøur in the south and the village of Saksun in the north-west.'),
 'vagar': ('페로 제도의 유일한 공항이 있는 섬입니다. 가사달루르 마을 앞 절벽에서 바다로 곧장 떨어지는 폭포, 바다 절벽 위에 떠 있는 듯한 호수, 아치가 뚫린 바위 기둥 드랑가르니르가 모여 있어 섬에 내리자마자 페로다운 풍경을 만납니다.',
           'The island with the Faroes’ only airport. The waterfall dropping straight off the cliff into the sea at Gásadalur, a lake that seems to float above the ocean and the arched sea stacks of Drangarnir are all here, so the classic Faroese scenery starts as soon as you land.'),
 'eysturoy': ('페로 제도에서 두 번째로 큰 섬으로, 가장 높은 산 슬래타라틴두르(880m)가 있습니다. 바다로 열린 협곡을 항구로 쓰는 고르브, 거인과 마녀 전설의 바위 기둥, 산골짜기 끝의 작은 마을들이 흩어져 있고, 토르스하운에서 해저 로터리가 있는 해저 터널로 바로 이어집니다.',
              'The second-largest of the Faroe Islands, home to the highest peak, Slættaratindur (880 m). Gjógv with its gorge harbour, the legendary sea stacks of the Giant and the Witch and tiny villages at the ends of green valleys are scattered across it, and an undersea tunnel with a roundabout links it directly to Tórshavn.'),
}

REWRITE = {
 'torshavn-h4': (None, None, '토르스하운 남쪽 스트레이모이섬 끝의 마을로, 페로에서 가장 중요한 역사 유적지입니다. 1300년 무렵의 마그누스 대성당 유적, 12세기 성 올라프 교회, 11세기부터 이어진 농가가 있습니다.', 'A village at the southern tip of Streymoy, the most important historic site in the Faroes: the ruins of the Magnus Cathedral from around 1300, the 12th-century St Olav’s Church and a farmhouse dating back to the 11th century.'),
 'vagar-h1': (None, None, '가사달루르 마을 앞 절벽에서 바다로 곧장 떨어지는 폭포입니다. 마을 뒤로 높은 산이 둘러싸고 앞으로 미키네스섬이 보이며, 2004년 터널이 뚫리기 전엔 산길로만 닿던 마을입니다.', 'A waterfall dropping straight off the cliff into the sea in front of the village of Gásadalur, which is ringed by Vágar’s highest mountains and looks across to Mykines; before its tunnel opened in 2004 the village could be reached only over the mountain.'),
}

ADD = {
 'torshavn': [
  (5, S('토르스하운 대성당', 'Tórshavn Cathedral', '틴가네스 북쪽 끝의 하얀 벽, 슬레이트 지붕 교회로 1788년에 세워졌습니다. 1990년부터 페로 주교좌가 있어 대성당이라 부릅니다.', 'A white-walled, slate-roofed church at the north end of Tinganes, built in 1788; the seat of the Bishop of the Faroes since 1990, hence a cathedral.', 'Tórshavn Cathedral Havnar Kirkja', 10, 15, b='no', n=FREE)),
  (6, S('페로 국립 미술관', 'Listasavn Føroya', '토르스하운 공원 북쪽 끝, 노르딕 하우스 가까이의 미술관으로, 페로 화가들의 작품을 주로 전시합니다.', 'The national art gallery at the north end of Tórshavn’s park near the Nordic House, showing mostly Faroese art.', 'Listasavn Føroya', 60, 90)),
  (7, S('페로 국립박물관', 'National Museum of the Faroe Islands', '토르스하운의 국립박물관으로, 페로의 역사와 문화를 보여 줍니다.', 'The national museum in Tórshavn, on the history and culture of the Faroe Islands.', 'Tjóðsavnið Tórshavn', 60, 90)),
  (8, S('뇔소이섬', 'Nólsoy', '토르스하운 동쪽 4km 앞바다의 섬으로, 항구에서 배로 건너가 하나뿐인 마을과 해안을 걷습니다.', 'An island 4 km east of Tórshavn, reached by ferry from the harbour, with a single village and coastal walks.', 'Nólsoy', 180, 300, b='no', n='배 시간표를 확인하고 가세요.|Check the ferry timetable first.')),
  (9, S('사크순', 'Saksun', '스트레이모이섬 북서쪽 해안 가까이의 작은 마을로, 잔디 지붕 교회와 썰물 때 드러나는 모래 석호 풍경이 유명합니다.', 'A small village near the north-west coast of Streymoy, known for its turf-roofed church and the sandy lagoon revealed at low tide.', 'Saksun Faroe Islands', 60, 90, b='no', n=WEATHER)),
 ],
 'vagar': [
  (4, S('뵈우르 마을', 'Bøur', '쇠르바구르 서쪽 4km의 작은 마을로, 바다 위 뾰족한 섬 틴드횔무르와 바위 기둥 드랑가르니르가 마주 보여 그림과 사진으로 자주 등장합니다.', 'A small village 4 km west of Sørvágur, looking out to the jagged islet of Tindhólmur and the Drangarnir sea stacks, a scene painted and photographed again and again.', 'Bøur Faroe Islands', 30, 45, b='no', n=FREE)),
  (5, S('드랑가르니르', 'Drangarnir', '틴드횔무르와 바가르섬 사이 바다에 선 두 바위 기둥으로, 큰 기둥 스토리 드랑구르엔 바다 아치가 뚫려 있습니다.', 'A pair of sea stacks between Tindhólmur and Vágar; the larger, Stóri Drangur, is pierced by a sea arch.', 'Drangarnir Faroe Islands', 120, 240, b='no', n='보트 투어나 가이드 동행 산행으로 갑니다.|Seen on a boat tour or a guided hike.')),
 ],
 'eysturoy': [
  (4, S('에이스투르오이 해저 터널', 'Eysturoy Tunnel', '스트레이모이와 에이스투르오이를 잇는 총길이 11.24km의 해저 터널로, 바다 밑 한가운데에 세계 첫 해저 로터리가 있고 조명 예술로 꾸며져 있습니다.', 'An 11.24 km undersea tunnel linking Streymoy and Eysturoy, with the world’s first undersea roundabout, lit with an art installation, at its centre.', 'Eysturoyartunnilin', 15, 20, n='통행료가 있습니다.|A toll is charged.')),
  (5, S('푼닝구르 마을', 'Funningur', '에이스투르오이 북서쪽 피오르 안쪽의 마을로, 뒤로 페로 최고봉 슬래타라틴두르가 솟아 있습니다.', 'A village at the head of a fjord on Eysturoy’s north-west coast, with Slættaratindur, the highest peak, rising behind it.', 'Funningur', 20, 30, b='no', n=FREE)),
  (6, S('엘두비크 마을', 'Elduvík', '푼닝스피오르 안쪽의 작은 마을로, 개울을 사이에 두고 알록달록한 옛 집들과 반원으로 둘러선 보트 창고가 마주합니다. 바다 건너 칼소이섬이 보입니다.', 'A tiny village on the Funningsfjørður inlet, split by a stream between colourful old houses and boathouses ringed round the pier, looking across to Kalsoy.', 'Elduvík', 30, 45, b='no', n=FREE)),
 ],
}

IT = [
 ("  torshavn: { days: [['', 1, 2, 3]], trips: [['키르큐보우르|Kirkjubøur', 4]] },\n",
  "  torshavn: { days: [['', 1, 5, 2, 6, 3, 7]], trips: [['키르큐보우르|Kirkjubøur', 4], ['사크순|Saksun', 9], ['뇔소이섬|Nólsoy', 8]] },\n"),
 ("  vagar: { days: [['', 1, 2]], trips: [['미키네스섬|Mykines', 3]] },\n",
  "  vagar: { days: [['', 2, 4, 1]], trips: [['드랑가르니르|Drangarnir', 5], ['미키네스섬|Mykines', 3]] },\n"),
 ("  eysturoy: [2, 3, 1],\n", "  eysturoy: { days: [['', 4, 6, 5, 1, 3]], trips: [['슬래타라틴두르|Slættaratindur', 2]] },\n"),
]


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
        c = add_sights(c, cid, items, 'visit-nordic.ts')
    c = reorder(c, 'torshavn', [(n, None) for n in (1, 5, 2, 3, 6, 7, 4, 9, 8)])
    c = reorder(c, 'vagar', [(n, None) for n in (1, 2, 5, 4, 3)])
    c = reorder(c, 'eysturoy', [(n, None) for n in (1, 3, 2, 6, 5, 4)])
    wr('cities.ts', c)
    it = rd('itinerary-north.ts')
    for a, b in IT:
        assert it.count(a) == 1, a
        it = it.replace(a, b)
    wr('itinerary-north.ts', it)


if __name__ == '__main__':
    main()
