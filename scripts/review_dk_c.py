#!/usr/bin/env python3
"""Batch C Denmark (2026-11-21): Odense, Aalborg, Roskilde rewritten from English Wikipedia (Odense third city, largest on
Funen; St. Canute's Cathedral, Brick Gothic, crypt with Canute IV and Benedict; Funen Village open-air museum; Egeskov,
best-preserved Renaissance water castle. Aalborg fourth city on the Limfjord; Utzon Center, Jørn Utzon's last building,
2008; Aalborghus, half-timbered castle 1539–c.1555; Budolfi cathedral; Kunsten by Alvar and Elissa Aalto 1972;
Lindholm Høje Viking burial site. Roskilde 30 km west of Copenhagen; cathedral completed 1275 with 39 royal tombs,
UNESCO; Viking Ship Museum with the five Skuldelev ships excavated 1962; Sagnlandet Lejre). Aarhus +Moesgaard. Run once."""
import re
from add_daytrip_places import rd, wr
from sight_order import add_sights
from review_sk import S

FREE = '무료입니다.|Free.'
BLURB = {
 'odense': ('덴마크 셋째 도시이자 퓐섬에서 가장 큰 도시로, 동화 작가 한스 크리스티안 안데르센이 태어난 곳입니다. 그의 생가가 있는 옛 시가엔 알록달록한 목조 가옥과 돌길이 이어지고, 벽돌 고딕 양식의 성 크누드 대성당 지하엔 크누드 4세의 유골이 있습니다. 섬 남쪽엔 물 위에 뜬 르네상스 성 에게스코우가 있습니다.',
            'Denmark’s third city and the largest on Funen, birthplace of the fairy-tale writer Hans Christian Andersen. Colourful half-timbered houses and cobbled lanes surround his birthplace in the old quarter, and the crypt of the Brick Gothic St Canute’s Cathedral holds the remains of King Canute IV. To the south of the island stands Egeskov, a Renaissance castle rising from the water.'),
 'aalborg': ('림피오르 해협에 면한 덴마크 넷째 도시로, 북유틀란트의 중심입니다. 시드니 오페라하우스를 설계한 예른 웃손이 자란 곳이라 그의 마지막 건물 웃손 센터가 물가에 있고, 16세기 목조 성 알보르후스와 알바르 알토가 지은 미술관 쿤스텐이 있습니다. 북쪽 언덕엔 바이킹 무덤 유적 린홀름 회예가 있고, 식당과 바가 몰린 거리 욤프루 아네 가데가 밤에 붐빕니다.',
             'Denmark’s fourth city, on the Limfjord, the hub of North Jutland. Jørn Utzon, architect of the Sydney Opera House, grew up here, and his last building, the Utzon Center, stands on the waterfront, along with the 16th-century half-timbered Aalborghus and Alvar Aalto’s Kunsten museum. The Viking burial ground of Lindholm Høje crowns the hill to the north, and Jomfru Ane Gade, lined with bars and restaurants, comes alive at night.'),
 'roskilde': ('코펜하겐 서쪽 30km의 바이킹 시대부터 이어진 도시로, 1275년 완성된 대성당에 덴마크 왕과 왕비 39명이 잠들어 유네스코 세계유산이 됐습니다. 피오르 가의 바이킹선 박물관에선 1962년 인양한 바이킹선 다섯 척을 보고, 가까운 레이레엔 철기 시대를 재현한 야외 고고학 박물관이 있습니다.',
              'A town 30 km west of Copenhagen dating back to the Viking Age, whose cathedral, completed in 1275, holds the tombs of 39 Danish kings and queens and is a UNESCO World Heritage Site. By the fjord the Viking Ship Museum displays five Viking ships raised in 1962, and nearby Lejre has an open-air museum recreating the Iron Age.'),
}
REWRITE = {
 'odense-h1': '안데르센 생가 옆에 세운 박물관으로, 그의 삶과 동화를 정원과 전시로 풀어냅니다.|A museum beside Andersen’s birthplace, telling his life and tales through gardens and exhibits.',
 'odense-h2': '안데르센이 태어난 옛 동네로, 알록달록한 목조 가옥과 돌길이 그대로 남아 있습니다.|The old quarter where Andersen was born, with colourful half-timbered houses and cobbled lanes.',
 'odense-h4': '크누드 4세(성 크누드)의 이름을 딴 벽돌 고딕 양식 대성당으로, 지하 묘실에 크누드와 그의 동생 베네딕트의 유골이 전시돼 있습니다.|A Brick Gothic cathedral named after King Canute IV (St Canute), whose remains and those of his brother Benedict lie on view in the crypt.',
 'aalborg-h1': '시드니 오페라하우스를 설계한 예른 웃손이 마지막으로 설계해 그가 세상을 떠난 2008년 완공된 건물로, 그가 어린 시절을 보낸 림피오르 물가에 있습니다.|The last building designed by Jørn Utzon, architect of the Sydney Opera House, completed in 2008, the year he died, on the Limfjord waterfront of his childhood town.',
 'aalborg-h4': '크리스티안 3세가 1539년부터 1555년 무렵까지 요새로 지은 목조 골조 성입니다.|A half-timbered castle built as a fortress by King Christian III from 1539 to about 1555.',
 'aalborg-h3': '알보르 중심의 짧은 골목으로, 식당과 바가 줄지어 있어 밤에 가장 붐비는 거리입니다.|A short street in central Aalborg packed with restaurants and bars, busiest at night.',
 'roskilde-h2': '1275년 완성된 덴마크 왕실 공식 안치 성당으로, 왕과 왕비 39명의 무덤이 있습니다. 스칸디나비아 초기 벽돌 고딕 성당으로 800년의 건축 양식이 겹쳐 있어 유네스코 세계유산이 됐습니다.|The official burial church of Danish monarchs, completed in 1275, with 39 royal tombs; one of Scandinavia’s earliest Brick Gothic cathedrals, layered with 800 years of architecture, it is a UNESCO World Heritage Site.',
 'roskilde-h1': '1962년 근처 피오르에서 발굴한 바이킹선 다섯 척(스쿨델레우 선)을 전시하는 국립 선박 박물관입니다.|Denmark’s national museum of ancient ships, showing the five Skuldelev Viking ships excavated from the fjord in 1962.',
}
ADD = {
 'odense': [
  (5, S('퓐 마을 야외 박물관', 'The Funen Village', '오덴세 남쪽 프루엔스 뵈게 지역의 야외 박물관으로, 퓐섬의 옛 농가와 마을을 옮겨 와 재현했습니다.', 'An open-air museum in the Fruens Bøge area of southern Odense, with old farmhouses and village buildings from Funen.', 'Den Fynske Landsby', 90, 120)),
  (6, S('에게스코우 성', 'Egeskov Castle', '퓐섬 남쪽 크베른드루프 가까이의 성으로, 덴마크에서 가장 잘 보존된 르네상스 물 위의 성입니다.', 'A castle near Kværndrup in the south of Funen, the best-preserved Renaissance water castle in Denmark.', 'Egeskov Slot', 180, 240)),
 ],
 'aalborg': [
  (5, S('부돌피 대성당', 'Budolfi Cathedral', '알보르 루터교 교구의 대성당으로, 시내 한가운데에 있습니다.', 'The cathedral of the Lutheran diocese of Aalborg, in the heart of the city.', 'Budolfi Kirke Aalborg', 15, 20, b='no', n=FREE)),
  (6, S('쿤스텐 현대 미술관', 'Kunsten Museum of Modern Art', '핀란드 건축가 알바르·엘리사 알토가 설계해 1972년 문을 연 미술관으로, 덴마크와 세계의 20세기 미술을 보여 줍니다.', 'An art museum designed by the Finnish architects Alvar and Elissa Aalto and opened in 1972, showing 20th-century Danish and international art.', 'Kunsten Aalborg', 60, 90)),
  (7, S('린홀름 회예', 'Lindholm Høje', '알보르 북쪽 언덕의 바이킹 무덤 유적과 옛 정착지 터로, 돌을 배 모양으로 둘러 놓은 무덤들이 남아 있습니다.', 'A major Viking burial ground and former settlement on the hill north of Aalborg, with graves marked by stones set in the shape of ships.', 'Lindholm Høje', 60, 90, b='no')),
 ],
 'roskilde': [
  (5, S('레이레 전설의 땅', 'Sagnlandet Lejre', '로스킬레 서쪽 레이레 근처의 야외 고고학 박물관으로, 철기 시대 정치 중심지 감멜 레이레 가까이에서 옛 생활을 재현합니다.', 'An open-air archaeology museum near Lejre, west of Roskilde, recreating ancient life close to Gammel Lejre, a power centre of Iron Age Scandinavia.', 'Sagnlandet Lejre', 120, 180)),
 ],
 'aarhus': [
  (6, S('모에스고르 박물관', 'Moesgaard Museum', '오르후스 남쪽 교외의 고고학·민족학 박물관으로, 덴마크 선사 시대 유물과 세계 각지 민족 유물 약 5만 점을 소장하고 있습니다.', 'An archaeology and ethnography museum in the southern outskirts of Aarhus, with Danish prehistoric finds and nearly 50,000 ethnographic objects from around the world.', 'Moesgaard Museum', 120, 180)),
 ],
}
IT = [("  odense: [4, 3, 2, 1],\n", "  odense: { days: [['', 1, 2, 4, 3, 5]], trips: [['에게스코우 성|Egeskov Castle', 6]] },\n"),
      ("  aalborg: [4, 1, 2, 3],\n", "  aalborg: { days: [['', 4, 5, 1, 2, 6, 3]], trips: [['린홀름 회예|Lindholm Høje', 7]] },\n"),
      ("  roskilde: [4, 2, 1, 3],\n", "  roskilde: { days: [['', 2, 4, 1, 3]], trips: [['레이레|Lejre', 5]] },\n"),
      ("  aarhus: [2, 1, 4, 3, 5],\n", "  aarhus: { days: [['', 2, 1, 4, 3, 5]], trips: [['모에스고르 박물관|Moesgaard Museum', 6]] },\n")]


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
        c = add_sights(c, cid, items, 'visit-nordic.ts')
    wr('cities.ts', c)
    it = rd('itinerary-north.ts')
    for a, b in IT:
        assert it.count(a) == 1, a
        it = it.replace(a, b)
    wr('itinerary-north.ts', it)


if __name__ == '__main__':
    main()
