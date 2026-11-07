#!/usr/bin/env python3
"""Bosnia & Herzegovina step 1 (2026-11-06, all-country plan): fix garbled Korean names and one-line descriptions
(e.g. Gazi Husrev-beg was '세비르 분교 모스크', Blagaj was '블라구시', Banja Luka h2 named for the wrong cathedral), add
sights for Sarajevo, Mostar, Banja Luka and Travnik, lists in itinerary order. Run once.
After the run (user choice): sarajevo-h7 Gallery 11/07/95 → Svrzo House, edited by hand (no Commons photo)."""
import re
import urllib.parse
from add_daytrip_places import rd, wr
from sight_order import add_sights, blocks, itinerary_order, read_group, reorder
from review_sk import S

DAY = ('근교 당일치기', 'Day trip')
REWRITE = {  # id: (ko, en, dko, den, maps query or None to keep)
 'sarajevo-h1': ('바슈차르시야', 'Baščaršija', '15세기 오스만 시대에 생긴 옛 시장 지구로, 세빌 분수와 구리 공예 골목, 체바피 식당이 모여 있습니다.', 'The old Ottoman bazaar quarter founded in the 15th century, with the Sebilj fountain, coppersmiths’ lanes and ćevapi grills.', None),
 'sarajevo-h2': ('가지 후스레브베그 모스크', 'Gazi Husrev-beg Mosque', '1531년에 세운 보스니아에서 가장 중요한 오스만 모스크로, 안뜰의 분수와 시계탑이 볼거리입니다.', 'The most important Ottoman mosque in Bosnia, built in 1531, with its courtyard fountain and clock tower.', None),
 'sarajevo-h3': ('희망의 터널 (전쟁 터널 박물관)', 'Tunnel of Hope (Sarajevo War Tunnel)', '1992~1995년 포위 때 공항 아래로 파서 보급로로 쓴 터널의 일부와 그 시절을 보여 주는 박물관입니다.', 'A surviving stretch of the tunnel dug under the airport as a lifeline during the 1992–95 siege, with a museum of those years.', None),
 'sarajevo-h4': ('라틴 다리', 'Latin Bridge', '1914년 프란츠 페르디난트 대공이 암살된 곳 바로 앞의 오스만 시대 돌다리로, 모퉁이에 사라예보 1878~1918 박물관이 있습니다.', 'The Ottoman stone bridge by the spot where Archduke Franz Ferdinand was assassinated in 1914, with the Sarajevo 1878–1918 museum on the corner.', None),
 'sarajevo-h5': ('트레베비치 케이블카', 'Trebević cable car', '1984년 동계 올림픽 때의 케이블카를 다시 놓은 것으로, 산 위에서 시내가 내려다보이고 버려진 봅슬레이 트랙을 걸을 수 있습니다.', 'The rebuilt cable car from the 1984 Winter Olympics, with city views from the mountain and the abandoned bobsleigh track to walk.', None),
 'mostar-h2': ('쿠윤질루크 옛 시장', 'Kujundžiluk Old Bazaar', '다리 양쪽으로 이어지는 돌길 시장으로, 구리 공예품과 기념품 가게가 늘어서 있습니다.', 'The cobbled bazaar on both sides of the bridge, lined with copperware and souvenir stalls.', 'Kujundžiluk Mostar'),
 'mostar-h3': ('코스키 메흐메드 파샤 모스크', 'Koski Mehmed Pasha Mosque', '17세기 모스크로, 첨탑과 안뜰에서 스타리 모스트가 가장 잘 보입니다.', 'A 17th-century mosque whose minaret and courtyard give the best views of the Stari Most.', None),
 'mostar-h4': ('네레트바 강변', 'Neretva riverbank', '다리 아래 자갈 강변으로 내려가면 다리를 올려다보는 사진을 찍을 수 있습니다.', 'Climb down to the pebbly riverbank below the bridge for the classic view looking up.', None),
 'mostar-h5': ('블라가이 테키예', 'Blagaj Tekke', '부나강 샘이 솟는 절벽 아래 16세기 수피 수도원입니다.', 'A 16th-century Sufi lodge beneath the cliff where the Buna river springs out.', 'Blagaj Tekke'),
 'banja-luka-h2': ('구세주 그리스도 대성당', 'Cathedral of Christ the Saviour', '붉고 노란 돌로 다시 지은 세르비아 정교회 대성당으로, 시내 중심에 있습니다.', 'The Serbian Orthodox cathedral rebuilt in red and yellow stone in the city centre.', None),
 'banja-luka-h3': ('고스포드스카 거리', 'Gospodska Street', '시내 중심의 보행자 거리로, 카페와 상점이 모여 있습니다.', 'The central pedestrian street of cafés and shops.', None),
 'banja-luka-h4': ('브르바스강', 'Vrbas River', '시내를 흐르는 강으로, 강변 산책로와 래프팅, 전통 나룻배 ‘두브로브니크’가 있습니다.', 'The river through the city, with riverside walks, rafting and the traditional dubrovnik boats.', None),
 'banja-luka-h5': ('페르하디야 모스크', 'Ferhadija Mosque', '1579년에 세우고 1993년 전쟁 때 파괴된 뒤 2016년 옛 돌을 모아 다시 지은 모스크입니다.', 'Built in 1579, destroyed in the war in 1993 and rebuilt from its salvaged stones in 2016.', None),
 'travnik-h2': ('술레이마니야 (알록달록 모스크)', 'Sulejmanija (Many-Coloured Mosque)', '벽에 그린 장식 그림으로 ‘알록달록 모스크’라 불리는 18세기 모스크입니다.', 'The 18th-century mosque nicknamed the “Many-Coloured Mosque” for its painted walls.', None),
 'travnik-h3': ('구시가 골목', 'Old town lanes', '오스만 시대 가옥과 시계탑, 플라바 보다 샘으로 이어지는 골목입니다.', 'Lanes of Ottoman houses and clock towers leading to the Plava Voda spring.', None),
 'travnik-h4': ('야이체와 플리바 호수', 'Jajce & the Pliva lakes', '도시 한가운데로 떨어지는 플리바 폭포와 옛 물레방아가 늘어선 호수입니다.', 'The Pliva waterfall plunging into the town and the lakes lined with old watermills.', 'Jajce waterfall'),
 'travnik-h5': ('이보 안드리치 생가', 'Ivo Andrić birthplace', '노벨 문학상 작가 이보 안드리치가 태어난 집을 꾸민 기념관입니다.', 'The house where Nobel laureate Ivo Andrić was born, now a memorial museum.', None),
}
ADD = {
 'sarajevo': [
  (6, S('사라예보 시청 (비예치니차)', 'Sarajevo City Hall (Vijećnica)', '무어 양식의 옛 국립 도서관으로, 1992년 불탄 뒤 복원했습니다.', 'The Moorish-style former national library, burned in 1992 and restored.', 'Vijećnica Sarajevo', 30, 45)),
  (7, S('갤러리 11/07/95', 'Gallery 11/07/95', '스레브레니차 학살을 사진과 증언으로 기록한 추모 전시관입니다.', 'A memorial gallery documenting the Srebrenica genocide through photographs and testimony.', 'Galerija 11/07/95', 45, 60)),
  (8, S('전쟁 속 어린 시절 박물관', 'War Childhood Museum', '포위 속에서 자란 아이들이 기증한 물건과 이야기를 전시합니다.', 'Objects and stories donated by people who grew up during the siege.', 'War Childhood Museum Sarajevo', 60, 75)),
  (9, S('노란 요새', 'Yellow Fortress (Žuta tabija)', '구시가 위 언덕의 옛 포대로, 해 질 녘 시내 전망이 좋습니다.', 'An old bastion above the old town with sunset views over the city.', 'Žuta tabija Sarajevo', 20, 30)),
  (10, S('브렐로 보스네', 'Vrelo Bosne', '보스나강이 솟는 샘과 연못 공원으로, 가로수길을 마차로 갈 수 있습니다.', 'The park around the springs of the Bosna river, reached along a tree-lined avenue by horse cart.', 'Vrelo Bosne', 120, 180, group=DAY,
         n='시내에서 트램과 마차로 약 40분입니다.|About 40 min by tram and horse cart from the centre.')),
 ],
 'mostar': [
  (6, S('굽은 다리', 'Crooked Bridge (Kriva ćuprija)', '스타리 모스트의 축소판이라 불리는 작은 오스만 돌다리입니다.', 'A small Ottoman stone bridge, said to be a model for the Stari Most.', 'Kriva ćuprija Mostar', 10, 15)),
  (7, S('무슬리베고비치 하우스', 'Muslibegović House', '17~19세기 오스만 귀족 저택으로, 방과 안뜰을 둘러봅니다.', 'An Ottoman nobleman’s house of the 17th–19th centuries, its rooms and courtyard open to visit.', 'Muslibegović House', 30, 45)),
  (8, S('크라비차 폭포', 'Kravica Waterfall', '석회암 절벽에서 넓게 떨어지는 폭포로, 여름엔 아래 호수에서 수영합니다.', 'A broad waterfall over limestone cliffs, with swimming in the pool below in summer.', 'Kravica Waterfall', 120, 180, group=DAY,
        n='모스타르에서 차로 약 45분이고 입장료가 있습니다.|About 45 min by car from Mostar; there is an entry fee.')),
  (9, S('포치텔리', 'Počitelj', '네레트바 계곡 비탈에 오스만 시대 돌집과 모스크, 탑이 남은 성채 마을입니다.', 'A fortified village of Ottoman stone houses, mosque and tower on a slope above the Neretva.', 'Počitelj', 60, 90, group=DAY,
        n='모스타르에서 차로 약 30분입니다.|About 30 min by car from Mostar.')),
 ],
 'banja-luka': [
  (6, S('반스키 드보르', 'Banski Dvor', '1930년대 총독 관저로 지은 건물로, 지금은 문화 센터입니다.', 'The 1930s governor’s residence, now a cultural centre.', 'Banski dvor Banja Luka', 15, 20)),
 ],
 'travnik': [
  (6, S('플라바 보다', 'Plava Voda', '구시가 위에서 솟는 맑은 샘과 개울로, 물가에 식당이 모여 있습니다.', 'A clear spring and stream above the old town, lined with restaurants.', 'Plava voda Travnik', 30, 45)),
 ],
}
IT = [
 ("  sarajevo: { days: [['', 2, 1, 4, 5]], trips: [['터널 박물관|Tunnel Museum', 3]] },",
  "  sarajevo: {\n    days: [\n      ['바슈차르시야와 구시가|Baščaršija & old town', 1, 2, 6, 4, 7, 9],\n      ['산과 전쟁의 기억|Mountain & war memory', 5, 8],\n    ],\n    trips: [\n      ['희망의 터널|Tunnel of Hope', 3],\n      ['브렐로 보스네|Vrelo Bosne', 10],\n    ],\n  },"),
 ("  mostar: { days: [['', 3, 2, 1, 4]], trips: [['블라가이|Blagaj', 5]] },",
  "  mostar: { days: [['', 3, 2, 1, 4, 6, 7]], trips: [['블라가이|Blagaj', 5], ['크라비차 폭포|Kravica', 8], ['포치텔리|Počitelj', 9]] },"),
 ("  'banja-luka': [2, 5, 1, 4, 3],", "  'banja-luka': [2, 6, 5, 3, 1, 4],"),
 ("  travnik: { days: [['', 2, 3, 5, 1]], trips: [['플리바 호수와 야이체|Pliva lakes & Jajce', 4]] },",
  "  travnik: { days: [['', 2, 3, 5, 6, 1]], trips: [['플리바 호수와 야이체|Pliva lakes & Jajce', 4]] },"),
]


def main():
    c = rd('cities.ts')
    for hid, (ko, en, dko, den, q) in REWRITE.items():
        i = c.index(f'id: "{hid}"')
        j = c.index('\n      }', i)
        blk = c[i:j]
        blk = re.sub(r'name: \{[^\n]*\}', f'name: {{ ko: "{ko}", en: "{en}" }}', blk)
        blk = re.sub(r'description: \{[^\n]*\}', f'description: {{ ko: "{dko}", en: "{den}" }}', blk)
        if q:
            blk = re.sub(r'query=[^"]*"', 'query=' + urllib.parse.quote(q) + '"', blk)
        c = c[:i] + blk + c[j:]
    for cid, items in ADD.items():
        c = add_sights(c, cid, items, 'visit-balkan.ts')
    it = rd('itinerary-south.ts')
    for a, b in IT:
        assert it.count(a) == 1, a[:60]
        it = it.replace(a, b)
    wr('itinerary-south.ts', it)
    for cid in ADD:
        by = blocks(c, cid)
        m = re.search(rf"^  '?{cid}'?: (.*?)(?=^  [a-z'])", it, re.M | re.S)
        trips = {int(x) for t in re.findall(r"trips: \[(.*)\]", m.group(1), re.S) for x in re.findall(r", (\d+)\]", t)}
        c = reorder(c, cid, [(n, DAY if n in trips else read_group(by[n])) for n in itinerary_order(it, cid, set(by))])
    wr('cities.ts', c)


if __name__ == '__main__':
    main()
