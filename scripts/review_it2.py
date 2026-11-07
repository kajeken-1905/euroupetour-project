#!/usr/bin/env python3
"""Italy re-review of Milan and Venice (user request 2026-11-07). Milan: Pinacoteca di Brera split out of the Brera
district entry, Museo del Novecento, Leonardo science museum, Certosa di Pavia; Venice: St Mark's Campanile and the
Arsenale/Biennale. Thin descriptions rewritten; new items slotted into the existing district groups. Run once.
Also fixed by hand: milan-h4 '나비가리 운하' → '나빌리 운하'."""
import re
from add_daytrip_places import rd, wr
from sight_order import add_sights, blocks, read_group, reorder
from review_sk import S

DAY = ('근교 당일치기', 'Day trip')
M_DUOMO = ('두오모 주변', 'Around the Duomo')
M_BRERA = ('브레라와 포르타 누오바', 'Brera & Porta Nuova')
M_SA = ('산탐브로조와 최후의 만찬', 'Sant’Ambrogio & the Last Supper')
V_SM = ('기차역에서 산마르코 광장까지', 'From the station to St Mark’s')
REWRITE = {
 'milan-h1': ('두오모', 'Duomo di Milano', '600년 가까이 걸려 완성한 고딕 대성당으로, 첨탑 숲 사이 대리석 옥상 테라스를 걸을 수 있습니다.', 'The Gothic cathedral that took nearly 600 years to finish—walk its marble rooftop terraces among a forest of spires.'),
 'milan-h2': ('갈레리아 비토리오 에마누엘레 2세', 'Galleria Vittorio Emanuele II', '유리 돔을 얹은 19세기 쇼핑 아케이드로, 바닥 황소 모자이크에서 뒤꿈치를 돌리면 행운이 온다고 합니다.', 'The glass-domed 19th-century shopping arcade—spin on your heel on the bull mosaic for luck.'),
 'milan-h5': ('브레라 지구', 'Brera district', '자갈길에 갤러리와 부티크, 카페가 모인 예술가 동네입니다.', 'The cobbled artists’ quarter of galleries, boutiques and cafés.'),
 'venice-h1': ('산마르코 광장', 'St Mark’s Square', '대성당과 종탑, 회랑 건물이 둘러싼 베네치아의 중심 광장으로, 나폴레옹이 ‘유럽의 응접실’이라 불렀습니다.', 'Venice’s great square framed by the basilica, campanile and arcaded buildings—Napoleon’s “drawing room of Europe”.'),
}
ADD = {
 'milan': [
  (21, S('브레라 미술관', 'Pinacoteca di Brera', '라파엘로·만테냐·카라바조 등 이탈리아 회화 걸작을 모은 미술관입니다.', 'A gallery of Italian masterpieces by Raphael, Mantegna, Caravaggio and more.', 'Pinacoteca di Brera', 120, 150, group=M_BRERA, c='mon')),
  (22, S('20세기 미술관', 'Museo del Novecento', '두오모 광장 옆의 20세기 이탈리아 미술관으로, 꼭대기 창에서 대성당이 정면으로 보입니다.', 'Twentieth-century Italian art beside the Duomo square, with a top-floor window facing the cathedral.', 'Museo del Novecento', 60, 90, group=M_DUOMO, c='mon')),
  (23, S('레오나르도 다빈치 과학 기술 박물관', 'Leonardo da Vinci Museum of Science and Technology', '다빈치 발명 모형과 잠수함·기차 등을 전시한 이탈리아 최대 과학 박물관입니다.', 'Italy’s largest science museum, with models of Leonardo’s inventions, a submarine and trains.', 'Museo Nazionale Scienza e Tecnologia Leonardo da Vinci', 120, 180, group=M_SA, c='mon')),
  (24, S('파비아 수도원', 'Certosa di Pavia', '대리석 파사드가 화려한 15세기 카르투시오회 수도원입니다.', 'A 15th-century Carthusian monastery with a dazzling marble façade.', 'Certosa di Pavia', 120, 180, group=DAY, c='mon',
         n='밀라노에서 기차로 약 30분 뒤 걸어서 약 20분입니다.|About 30 min by train from Milan, then a 20-minute walk.')),
 ],
 'venice': [
  (25, S('산마르코 종탑', 'St Mark’s Campanile', '광장에 선 98.6m 종탑으로, 엘리베이터로 올라 석호와 섬들을 내려다봅니다.', 'The 98.6 m bell tower on the square—take the lift up for views over the lagoon and islands.', 'Campanile di San Marco', 30, 45, group=V_SM)),
  (26, S('아르세날레와 비엔날레', 'Arsenale & the Biennale', '베네치아 공화국의 옛 조선소로, 미술·건축 비엔날레의 전시장으로 쓰입니다.', 'The Venetian Republic’s old shipyard, now a main venue of the art and architecture Biennale.', 'Arsenale di Venezia', 60, 180, group=V_SM,
         n='비엔날레는 대략 4/5월~11월에 열립니다(미술은 홀수 해, 건축은 짝수 해).|The Biennale runs roughly April/May to November—art in odd years, architecture in even years.')),
 ],
}
IT = [
 ("      ['두오모와 브레라|Duomo & Brera', 1, 2, 12, 5, 16, 15],\n      ['최후의 만찬과 나빌리|Last Supper & the Navigli', 11, 13, 3, 7, 14, 10, 9, 4],\n      ['현대 밀라노|Modern Milan', 18, 17, 19],\n    ],\n  },",
  "      ['두오모와 브레라|Duomo & Brera', 1, 22, 2, 12, 5, 21, 16, 15],\n      ['최후의 만찬과 나빌리|Last Supper & the Navigli', 11, 13, 23, 3, 7, 14, 10, 9, 4],\n      ['현대 밀라노|Modern Milan', 18, 17, 19],\n    ],\n    trips: [['파비아 수도원|Certosa di Pavia', 24], ['알파 로메오 박물관|Alfa Romeo Museum', 20]],\n  },"),
 ("      ['산마르코 일대|Around St Mark’s', 3, 1, 10, 4, 23, 20, 14],",
  "      ['산마르코 일대|Around St Mark’s', 3, 1, 10, 25, 4, 23, 20, 26, 14],"),
]
AFTER = {'milan': {22: 1, 21: 5, 23: 13, 24: 19}, 'venice': {25: 10, 26: 24}}


def main():
    c = rd('cities.ts')
    for hid, (ko, en, dko, den) in REWRITE.items():
        i = c.index(f'id: "{hid}"')
        j = c.index('\n      }', i)
        blk = c[i:j]
        blk = re.sub(r'name: \{[^\n]*\}', f'name: {{ ko: "{ko}", en: "{en}" }}', blk)
        blk = re.sub(r'description: \{[^\n]*\}', f'description: {{ ko: "{dko}", en: "{den}" }}', blk)
        c = c[:i] + blk + c[j:]
    for cid, items in ADD.items():
        old = list(blocks(c, cid))
        c = add_sights(c, cid, items, 'visit-it.ts')
        by = blocks(c, cid)
        order = []
        for n in old:
            order.append(n)
            order += [k for k, after in AFTER[cid].items() if after == n]
        assert sorted(order) == sorted(by), (cid, order)
        c = reorder(c, cid, [(n, read_group(by[n])) for n in order])
    it = rd('itinerary-it.ts')
    for a, b in IT:
        assert it.count(a) == 1, a[:60]
        it = it.replace(a, b)
    wr('itinerary-it.ts', it)
    wr('cities.ts', c)


if __name__ == '__main__':
    main()
