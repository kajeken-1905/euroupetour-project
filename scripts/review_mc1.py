#!/usr/bin/env python3
"""Monaco step 1 (Monaco and Monte-Carlo), 2026-11-20. Fixes: both blurbs and every one-line description; the palace is
the Prince’s (대공) palace, not a royal one. New sights: Monaco 4 (Rose Garden, Stamps & Coins Museum, Condamine market,
Monaco-Ville lanes), Monte-Carlo 2 (Japanese Garden, Grimaldi Forum). The Jardin Exotique and Villa Sauber are left out
(reopening not confirmed). No step 2: no other towns in Monaco. Run once."""
import re
import urllib.parse
from add_daytrip_places import rd, wr
from sight_order import add_sights, blocks, itinerary_order, reorder
from review_sk import S

DAY = ('근교 당일치기', 'Day trip')
FREE = '무료입니다.|Free.'

BLURB = {
 'monaco': ('지중해 바위 반도 위, 세계에서 두 번째로 작은 나라. 구시가 모나코빌(르 로셰)에 대공 궁전과 대성당, 절벽 위 해양박물관이 있고, 요트 항구 포르 에르퀼과 시장이 있는 라 콘다민, 바다를 메워 만든 퐁비에유로 이어집니다.',
            'The world’s second-smallest country, on a rocky Mediterranean headland. The old town of Monaco-Ville (Le Rocher) holds the Prince’s Palace, the cathedral and the clifftop Oceanographic Museum, above the yacht harbour of Port Hercule, the market quarter of La Condamine and Fontvieille, built on land reclaimed from the sea.'),
 'monte-carlo': ('카지노와 벨에포크 호텔, 오페라 하우스가 모인 모나코의 화려한 지구. F1 그랑프리 시가지 코스가 지나가고, 해안을 따라 일본 정원과 동쪽 라르보토 해변까지 걸어갑니다.',
                 'Monaco’s glamorous quarter of the casino, Belle Époque hotels and the opera house, crossed by the Formula 1 street circuit; walk along the shore past the Japanese Garden to Larvotto beach in the east.'),
}

REWRITE = {
 'monaco-h1': ('대공 궁전', None, '13세기 요새에서 시작한 그리말디 가문의 궁전으로, 여름엔 화려한 공식 방들을 공개하고 광장에서 매일 근위병 교대식이 열립니다.', 'The Grimaldi family’s palace, begun as a 13th-century fortress: the state apartments open in season, and the guard changes on the square every day.'),
 'monaco-h2': (None, None, '19세기 말 하얀 돌로 지은 대성당으로, 그레이스 켈리 대공비와 레니에 3세 대공이 이곳에 잠들어 있습니다.', 'A white-stone cathedral of the late 19th century where Princess Grace and Prince Rainier III are buried.'),
 'monaco-h3': (None, None, '바다 절벽 위에 1910년 문을 연 해양박물관으로, 지하 수족관과 옥상 테라스 전망이 유명합니다.', 'The Oceanographic Museum, opened in 1910 on a sea cliff, known for its aquarium below and the view from its roof terrace.'),
 'monaco-h4': (None, None, '모나코빌 바위와 몬테카를로 사이의 항구로, 대형 요트가 늘어서고 여름엔 바닷가 수영장이 열립니다.', 'The harbour between the Rock and Monte-Carlo, lined with superyachts, with a seaside pool open in summer.'),
 'monaco-h5': (None, None, '모나코빌 절벽을 따라 이어지는 그늘진 정원 산책로로, 바다와 퐁비에유가 내려다보입니다.', 'Shady gardens along the cliffs of Monaco-Ville, looking down to the sea and Fontvieille.'),
 'monte-carlo-h1': (None, None, '1863년 문을 연 벨에포크 카지노로, 오전엔 관광객이 화려한 홀을 둘러보고 오후부터 게임장이 열립니다. 같은 건물에 오페라 극장이 있습니다.', 'The Belle Époque casino opened in 1863: visitors tour its gilded halls in the morning, and gaming starts in the afternoon. The opera house is in the same building.'),
 'monte-carlo-h2': (None, None, '카지노 앞 정원 광장으로, 오텔 드 파리와 카페 드 파리, 고급 차들이 모여듭니다.', 'The garden square in front of the casino, flanked by the Hôtel de Paris and the Café de Paris and busy with supercars.'),
 'monte-carlo-h3': (None, None, '평소엔 일반 도로인 F1 모나코 그랑프리 코스로, 카지노 광장과 페어몬트 헤어핀, 터널, 항구를 따라 걸어 볼 수 있습니다.', 'The Monaco Grand Prix circuit, ordinary streets most of the year: walk it past Casino Square, the Fairmont hairpin, the tunnel and the harbour.'),
 'monte-carlo-h4': (None, None, '동쪽 해안의 공공 해변으로, 새로 단장한 산책로를 따라 식당과 비치 클럽이 이어집니다.', 'The public beach on the east shore, with restaurants and beach clubs along its renovated promenade.'),
 'monte-carlo-h5': (None, None, '카지노 뒤쪽 거리와 쇼핑센터에 명품 부티크가 모여 있는 고급 쇼핑가입니다.', 'The luxury shopping streets and mall behind the casino, packed with designer boutiques.'),
}

ADD = {
 'monaco': [
  (7, S('그레이스 대공비 장미 정원', 'Princess Grace Rose Garden', '퐁비에유 공원 안의 장미 정원으로, 그레이스 대공비를 기려 수천 그루를 심었습니다.', 'A rose garden in Fontvieille Park planted with thousands of roses in memory of Princess Grace.', 'Princess Grace Rose Garden', 20, 30, b='no', n=FREE)),
  (8, S('우표·주화 박물관', 'Stamps & Coins Museum', '퐁비에유에 있는 박물관으로, 모나코의 우표와 주화를 전시합니다.', 'A museum in Fontvieille showing Monaco’s stamps and coins.', 'Musée des Timbres et des Monnaies Monaco', 30, 45)),
  (9, S('라 콘다민 시장', 'La Condamine market', '항구 뒤 다름 광장의 시장으로, 아침 노천 시장과 지붕 덮인 식당가가 있습니다.', 'The market on Place d’Armes behind the harbour, with a morning open-air market and a covered food hall.', 'Marché de la Condamine', 30, 45)),
  (10, S('모나코빌 구시가 (르 로셰)', 'Monaco-Ville (Le Rocher)', '대공 궁전 뒤로 이어지는 바위 위 옛 마을로, 좁은 골목에 작은 성당과 기념품 가게가 있습니다.', 'The old town on the Rock behind the palace, with narrow lanes, small chapels and souvenir shops.', 'Monaco-Ville', 45, 60)),
 ],
 'monte-carlo': [
  (6, S('일본 정원', 'Japanese Garden', '해안 산책로 옆의 일본식 정원으로, 연못과 다리, 다실이 있습니다.', 'A Japanese-style garden by the seafront promenade, with ponds, bridges and a tea house.', 'Japanese Garden Monaco', 20, 30, b='no', n=FREE)),
  (7, S('그리말디 포럼', 'Grimaldi Forum', '바닷가 유리 건물의 공연·전시장으로, 여름마다 큰 기획 전시가 열립니다.', 'A glass-fronted venue on the shore for shows and exhibitions, with a major exhibition every summer.', 'Grimaldi Forum', 60, 90)),
 ],
}

IT = [
 ("  monaco: [4, 6, 1, 2, 5, 3],\n",
  "  monaco: { days: [['모나코빌|Monaco-Ville', 10, 1, 2, 5, 3], ['항구와 퐁비에유|Port & Fontvieille', 9, 4, 6, 7, 8]] },\n"),
 ("  'monte-carlo': [3, 2, 1, 5, 4],\n",
  "  'monte-carlo': { days: [['', 2, 1, 5, 3, 6, 7, 4]] },\n"),
]


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
    it = rd('itinerary-fr.ts')
    for a, b in IT:
        assert it.count(a) == 1, a[:70]
        it = it.replace(a, b)
    wr('itinerary-fr.ts', it)
    for cid, items in ADD.items():
        c = add_sights(c, cid, items, 'visit-uk.ts')
    # explicit orders (Monte-Carlo is the last itinerary entry, which itinerary_order cannot read)
    c = reorder(c, 'monaco', [(n, None) for n in (10, 1, 2, 5, 3, 9, 4, 6, 7, 8)])
    c = reorder(c, 'monte-carlo', [(n, None) for n in (2, 1, 5, 3, 6, 7, 4)])
    wr('cities.ts', c)


if __name__ == '__main__':
    main()
