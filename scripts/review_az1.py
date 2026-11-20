#!/usr/bin/env python3
"""Azerbaijan step 1 (the three existing cities), 2026-11-20; user picked 7 new cities for step 2 (Quba, Shamakhi,
Ganja, Lahij, Lankaran, Qakh, Naftalan), so Khinalug and the Shamakhi sights are left for step 2. Fixes: every blurb
and one-line description. New sights: Baku 10 (district groups, 2-day itinerary, Absheron and Gobustan day trips),
Sheki 3, Gabala 2. Closing days left out (not checked). Run once."""
import re
import urllib.parse
from add_daytrip_places import rd, wr
from sight_order import add_sights, blocks, itinerary_order, reorder
from review_sk import S

DAY = ('근교 당일치기', 'Day trip')
B_O = ('구시가 (이체리셰헤르)', 'Old City (Icherisheher)')
B_C = ('해변 불바르·시내', 'Boulevard & centre')
B_X = ('외곽', 'Further out')
MOSQUE = '입장은 무료입니다. 어깨와 무릎을 가리고, 여성은 스카프로 머리를 가립니다. 기도 시간에는 들어가지 않습니다.|Free; cover shoulders and knees, women cover their hair, and avoid prayer times.'
CHURCH = '입장은 무료입니다. 어깨와 무릎을 가리는 차림이 좋고, 여성은 스카프로 머리를 가리기도 합니다.|Free; cover shoulders and knees, and women often cover their hair with a scarf.'

BLURB = {
 'baku': ('카스피해에 면한 아제르바이잔의 수도. 성벽 안 구시가 이체리셰헤르에 처녀의 탑과 시르반샤 궁전이 있고, 해변 불바르와 불꽃 타워, 자하 하디드의 헤이다르 알리예프 센터가 새 바쿠를 보여 주며, 압셰론 반도의 불타는 언덕과 고브스탄 암각화·진흙 화산으로 다녀옵니다.',
          'Azerbaijan’s capital on the Caspian: the walled Old City of Icherisheher holds the Maiden Tower and the Palace of the Shirvanshahs, the seaside Boulevard, the Flame Towers and Zaha Hadid’s Heydar Aliyev Center show the new Baku, and trips go to the burning hillside of the Absheron peninsula and the petroglyphs and mud volcanoes of Gobustan.'),
 'sheki': ('코카서스 산기슭 실크로드의 옛 칸국 도시. 색유리와 벽화로 꾸민 18세기 셰키 칸 궁전과 대상 숙소 카라반사라이가 세계유산이며, 근교 키시 마을의 옛 알바니아 교회로 다녀옵니다. 단 과자 셰키 할바가 유명합니다.',
           'An old khanate town on the Silk Road at the foot of the Caucasus: the 18th-century Palace of the Sheki Khans, decorated with coloured glass and murals, and the caravanserai are World Heritage sites, with a trip to the old Albanian church at Kish. Known for its sweet Sheki halva.'),
 'gabala': ('코카서스 산기슭의 휴양 도시. 투판다그 케이블카로 산에 오르고, 숲속 노후르 호수와 일곱 미녀 폭포를 걸으며, 옛 코카서스 알바니아 왕국의 수도 유적이 있습니다.',
            'A resort town in the Caucasus foothills: ride the Tufandag cable car into the mountains, walk to Nohur Lake and the Seven Beauties waterfall in the forest, and see the ruins of the old capital of Caucasian Albania.'),
}

REWRITE = {
 'baku-h1': (None, None, '언덕 위 불꽃 모양 세 고층 건물로, 밤이면 외벽 전체에 불꽃 영상이 켜져 바쿠 어디서나 보입니다.', 'Three flame-shaped towers on the hill whose façades light up with moving flames at night, visible across the city.'),
 'baku-h2': (None, None, '성벽 안 옛 바쿠로, 좁은 골목에 모스크와 대상 숙소, 목욕탕이 남아 있는 세계유산입니다.', 'Old Baku inside its walls, a World Heritage site of narrow lanes with mosques, caravanserais and bathhouses.'),
 'baku-h3': (None, None, '구시가 바닷가 쪽에 선 12세기 원통형 석탑으로, 꼭대기에서 구시가와 바다가 보입니다.', 'A 12th-century cylindrical stone tower on the sea side of the Old City, with views over the old town and the bay from the top.'),
 'sheki-h1': (None, None, '18세기 칸의 여름 궁전으로, 못 하나 없이 짜 맞춘 나무 창살 색유리(셰베케)와 사냥·전투 벽화가 눈부십니다.', 'The khans’ 18th-century summer palace, dazzling with coloured-glass shebeke windows set in nail-free wooden lattices and murals of hunts and battles.'),
 'sheki-h2': (None, None, '두 층의 아치 회랑이 안뜰을 둘러싼 18~19세기 대상 숙소로, 지금도 호텔로 쓰입니다.', 'An 18th–19th-century caravan inn with two storeys of arcades around a courtyard, still used as a hotel.'),
 'sheki-h3': (None, None, '기와지붕 집과 공방, 할바 가게가 늘어선 비탈길 옛 동네로, 칸 궁전이 있는 성채까지 이어집니다.', 'Sloping streets of tiled houses, workshops and halva shops leading up to the fortress walls around the khans’ palace.'),
 'gabala-h1': (None, None, '케이블카로 해발 1,900m대 산마루까지 오르는 산악 리조트로, 겨울엔 스키, 여름엔 산책과 짚라인을 즐깁니다.', 'A mountain resort where cable cars climb to ridges at around 1,900 m: skiing in winter, walks and zip lines in summer.'),
 'gabala-h2': (None, None, '숲에 둘러싸인 산속 호수로, 호숫가를 걷거나 보트를 탑니다.', 'A forest-ringed lake in the hills, for lakeside walks and boating.'),
 'gabala-h3': (None, None, '기원전부터 코카서스 알바니아 왕국의 수도였던 옛 가발라의 성벽과 성문 터입니다.', 'The walls and gate of ancient Gabala, capital of Caucasian Albania from before Christ.'),
}

ADD = {
 'baku': [
  (4, S('시르반샤 궁전', 'Palace of the Shirvanshahs', '15세기 시르반샤 왕조의 궁전으로, 모스크와 영묘, 목욕탕이 계단식으로 모여 있습니다.', 'The 15th-century palace of the Shirvanshah dynasty, a terraced complex with a mosque, mausoleums and a bathhouse.', 'Palace of the Shirvanshahs', 60, 90, n='유료입니다.|Ticketed.')),
  (5, S('바쿠 불바르', 'Baku Boulevard', '카스피해를 따라 이어지는 해변 공원 산책로로, 저녁이면 시민들이 산책을 나옵니다.', 'The seaside park promenade along the Caspian, where the city strolls in the evening.', 'Baku Boulevard', 45, 60)),
  (6, S('양탄자 박물관', 'Azerbaijan Carpet Museum', '돌돌 만 양탄자 모양 건물에 아제르바이잔 각 지방의 양탄자를 모은 박물관입니다.', 'A museum shaped like a rolled carpet, holding carpets from every region of Azerbaijan.', 'Azerbaijan National Carpet Museum', 60, 90)),
  (7, S('분수 광장과 니자미 거리', 'Fountain Square & Nizami Street', '구시가 바로 밖 분수 광장에서 상점과 카페가 늘어선 보행자 거리가 이어집니다.', 'The square of fountains just outside the Old City, leading into a pedestrian street of shops and cafés.', 'Fountain Square Baku', 30, 45)),
  (8, S('하이랜드 공원', 'Highland Park', '언덕 위 공원으로, 순교자 묘역과 함께 불꽃 타워와 바쿠만 전경이 펼쳐집니다. 푸니쿨라로 오릅니다.', 'A hilltop park with the Martyrs’ Lane memorial and views over the Flame Towers and Baku Bay, reached by funicular.', 'Highland Park Baku', 30, 45)),
  (9, S('헤이다르 알리예프 센터', 'Heydar Aliyev Center', '자하 하디드가 설계한 흰 물결 모양 건물로, 안에 박물관과 전시장이 있습니다.', 'Zaha Hadid’s flowing white building, housing a museum and exhibition halls.', 'Heydar Aliyev Center', 60, 90)),
  (10, S('비비헤이바트 모스크', 'Bibi-Heybat Mosque', '바닷가에 다시 지은 모스크로, 예언자의 후손이 잠든 성지입니다.', 'A rebuilt seaside mosque over the shrine of a descendant of the Prophet.', 'Bibi-Heybat Mosque', 20, 30, n=MOSQUE)),
  (11, S('아테시가 불의 사원', 'Ateshgah Fire Temple', '천연가스가 새어 나와 불이 타던 자리에 세운 17~18세기 사원으로, 인도 상인 순례자들이 머물렀습니다.', 'A 17th–18th-century temple built over natural gas vents, where Indian merchant pilgrims once stayed.', 'Ateshgah of Baku', 45, 60, group=DAY, n='시내에서 북동쪽 약 30km입니다.|About 30 km north-east of the centre.')),
  (12, S('야나르다그', 'Yanar Dag', '언덕 비탈에서 새어 나온 천연가스가 쉬지 않고 타오르는 ‘불타는 산’으로, 해 진 뒤가 볼 만합니다.', 'The “burning mountain”, where natural gas seeping from a hillside burns without stopping; best after dark.', 'Yanar Dag', 30, 45, group=DAY, n='시내에서 북쪽 약 25km입니다.|About 25 km north of the centre.')),
  (13, S('고브스탄 암각화', 'Gobustan petroglyphs', '바위에 새긴 수천 점의 선사 시대 암각화가 남은 세계유산 국립공원으로, 입구에 박물관이 있습니다.', 'A World Heritage national park of thousands of prehistoric rock carvings, with a museum at the entrance.', 'Gobustan National Park', 90, 120, group=DAY, n='바쿠에서 남서쪽 약 60km로, 진흙 화산과 함께 다녀옵니다. 유료입니다.|About 60 km south-west of Baku, paired with the mud volcanoes; ticketed.')),
  (14, S('진흙 화산', 'Mud volcanoes', '고브스탄 근처 언덕에서 차가운 진흙이 보글보글 솟는 작은 화산들입니다.', 'Small volcanoes bubbling with cold mud on the hills near Gobustan.', 'Gobustan mud volcanoes', 45, 60, group=DAY, n='비포장길이라 현지 택시나 투어로 갑니다.|An unpaved track; go by local taxi or tour.')),
 ],
 'sheki': [
  (4, S('셰키한로프 가옥', 'Shekikhanovs’ House', '칸 가문이 살던 18세기 저택으로, 궁전처럼 색유리와 벽화가 남아 있습니다.', 'An 18th-century house of the khans’ family, with coloured glass and murals like the palace.', 'Shekikhanovs House', 20, 30)),
  (5, S('키시 알바니아 교회', 'Kish Albanian church', '키시 마을의 옛 코카서스 알바니아 교회로, 지금은 박물관입니다.', 'An old Caucasian Albanian church in Kish village, now a museum.', 'Church of Kish', 45, 60, group=DAY, n='셰키에서 북쪽 약 5km입니다.|About 5 km north of Sheki.')),
  (6, S('겔레르센-괴뢰르센 요새', 'Gelersen-Gorersen fortress', '숲 속 언덕 위 중세 요새 성벽으로, 걸어서 오르면 계곡이 내려다보입니다.', 'Medieval fortress walls on a forested hilltop, a walk up with valley views.', 'Gelersen-Gorersen', 90, 120, group=DAY)),
 ],
 'gabala': [
  (4, S('일곱 미녀 폭포', 'Seven Beauties waterfall', '숲속 계단을 따라 오르면 여러 단으로 떨어지는 폭포가 나옵니다.', 'Climb the forest steps to a waterfall dropping in several tiers.', 'Yeddi Gozel waterfall', 45, 60)),
  (5, S('니지 마을', 'Nij village', '고대 알바니아인의 후손인 우디족이 사는 마을로, 옛 교회가 남아 있습니다.', 'A village of the Udi people, descendants of the ancient Albanians, with old churches.', 'Nij Azerbaijan', 60, 90, group=DAY, n='가발라에서 남쪽 약 25km입니다.|About 25 km south of Gabala.')),
 ],
}

IT = [
 ("  baku: [3, 2, 1],\n",
  "  baku: {\n    days: [\n      ['구시가와 불바르|Old City & Boulevard', 2, 3, 4, 7, 6, 5],\n      ['새 바쿠|Modern Baku', 8, 1, 10, 9],\n    ],\n    trips: [\n      ['압셰론 반도|Absheron peninsula', 11, 12],\n      ['고브스탄과 진흙 화산|Gobustan & mud volcanoes', 13, 14],\n    ],\n  },\n"),
 ("  sheki: [3, 2, 1],\n",
  "  sheki: { days: [['', 1, 4, 3, 2]], trips: [['키시 교회|Kish', 5], ['겔레르센-괴뢰르센|Gelersen-Gorersen', 6]] },\n"),
 ("  gabala: [1, 2, 3],\n",
  "  gabala: { days: [['', 3, 1], ['', 2, 4]], trips: [['니지 마을|Nij', 5]] },\n"),
]

BAK = [(2, B_O), (3, B_O), (4, B_O),
       (7, B_C), (6, B_C), (5, B_C), (8, B_C), (1, B_C),
       (9, B_X), (10, B_X),
       (11, DAY), (12, DAY), (13, DAY), (14, DAY)]
SMALL = ['sheki', 'gabala']



def main():
    c = rd('cities.ts')
    for cid, (ko, en) in BLURB.items():
        i = c.index(f'id: "{cid}",')
        j = c.index('highlights: [', i)
        blk = re.sub(r'blurb: \{\n      ko: "[^"]*",\n      en: "[^"]*",\n    \}',
                     f'blurb: {{\n      ko: "{ko}",\n      en: "{en}",\n    }}', c[i:j], flags=re.S)
        assert blk != c[i:j], cid
        c = c[:i] + blk + c[j:]
    for hid, t in REWRITE.items():
        ko, en, dko, den = t[:4]
        i = c.index(f'id: "{hid}"')
        j = c.index('\n      }', i)
        blk = c[i:j]
        if ko or en:
            m = re.search(r'name: \{ ko: "([^"]*)", en: "([^"]*)" \}', blk)
            blk = blk.replace(m.group(0), f'name: {{ ko: "{ko or m.group(1)}", en: "{en or m.group(2)}" }}')
        blk2 = re.sub(r'description: \{[^\n]*\}', f'description: {{ ko: "{dko}", en: "{den}" }}', blk)
        assert blk2 != blk, hid
        if len(t) > 4:
            blk2 = re.sub(r'mapsUrl: "[^"]*"', 'mapsUrl: "https://www.google.com/maps/search/?api=1&query=' + urllib.parse.quote(t[4]) + '"', blk2)
        c = c[:i] + blk2 + c[j:]
    it = rd('itinerary-south.ts')
    for a, b in IT:
        assert it.count(a) == 1, a[:70]
        it = it.replace(a, b)
    wr('itinerary-south.ts', it)
    for cid, items in ADD.items():
        c = add_sights(c, cid, items, 'visit-east.ts')
    c = reorder(c, 'baku', BAK)
    for cid in SMALL:
        by = blocks(c, cid)
        m = re.search(rf"^  {cid}: (.*?)(?=^  [a-z'/])", it, re.M | re.S)
        trips = {int(x) for t in re.findall(r"trips: \[(.*)\]", m.group(1), re.S) for x in re.findall(r", (\d+)", t)}
        order = itinerary_order(it, cid, set(by))
        c = reorder(c, cid, [(n, DAY if n in trips else None) for n in order])
    wr('cities.ts', c)


if __name__ == '__main__':
    main()
