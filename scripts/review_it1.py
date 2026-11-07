#!/usr/bin/env python3
"""Italy step 1, part 1 (north: Lombardy lakes, Piedmont, Liguria), 2026-11-07. Name fixes in Genoa (h2 carruggi,
h4 Palazzo Reale), thin descriptions rewritten, more sights incl. themed Caffè Al Bicerin (chocolate) and Barolo
(wine). Lists in itinerary order. Run once."""
import re
from add_daytrip_places import rd, wr
from sight_order import add_sights, blocks, itinerary_order, read_group, reorder
from review_sk import S

DAY = ('근교 당일치기', 'Day trip')
OLD_NEAR = ('근교', 'Nearby')
REWRITE = {
 'genoa-h2': ('카루지 골목 (구시가)', 'The caruggi (old town alleys)', '유럽에서 손꼽히게 큰 중세 구시가로, 햇빛이 겨우 드는 좁은 골목에 가게와 포카치아 빵집이 이어집니다.', 'One of Europe’s largest medieval old towns, its narrow sunless alleys lined with shops and focaccia bakeries.'),
 'genoa-h3': ('페라리 광장', 'Piazza De Ferrari', '큰 청동 분수와 오페라 극장, 공작 궁전이 둘러싼 제노바의 중심 광장입니다.', 'Genoa’s central square, with its great bronze fountain, the opera house and the Doge’s Palace.'),
 'genoa-h4': ('레알레 궁전', 'Palazzo Reale', '사보이 왕가가 쓴 바로크 궁전으로, 거울의 방과 항구가 보이는 정원이 있습니다.', 'The Baroque palace used by the House of Savoy, with its Hall of Mirrors and a garden overlooking the port.'),
 'genoa-h5': ('란테르나 등대', 'Lanterna lighthouse', '1543년에 세운 117m 등대로, 지금도 쓰이는 등대 가운데 손꼽히게 오래되었습니다.', 'The 117 m lighthouse of 1543, one of the oldest still working.'),
 'turin-h3': ('산 카를로 광장', 'Piazza San Carlo', '쌍둥이 성당과 아케이드 카페가 둘러싼 바로크 광장으로, ‘토리노의 응접실’이라 불립니다.', 'The Baroque square of twin churches and arcaded cafés, called “Turin’s drawing room”.'),
 'turin-h1': ('이집트 박물관', 'Egyptian Museum', '카이로 다음으로 큰 이집트 유물 컬렉션을 갖춘 박물관입니다.', 'Home to the largest collection of Egyptian antiquities outside Cairo.'),
 'turin-h2': ('몰레 안토넬리아나', 'Mole Antonelliana', '도시의 상징인 167m 탑으로, 안에 국립 영화 박물관이 있고 유리 엘리베이터로 전망대에 오릅니다.', 'The city’s 167 m landmark, housing the National Cinema Museum, with a glass lift to the viewing deck.'),
 'turin-h4': ('포강 강변과 발렌티노 공원', 'Po riverside & Valentino Park', '포강을 따라 이어지는 공원과 산책로로, 중세 마을을 재현한 보르고 메디오발레가 있습니다.', 'The park and promenade along the Po, with the mock-medieval Borgo Medievale.'),
 'turin-h5': ('수페르가 대성당', 'Basilica of Superga', '언덕 위 바로크 성당으로, 알프스와 시내가 내려다보이고 등산 열차로 오릅니다.', 'The hilltop Baroque basilica overlooking the Alps and the city, reached by rack railway.'),
 'como-h1': ('코모 대성당', 'Como Cathedral', '고딕에서 르네상스, 바로크까지 350년에 걸쳐 지은 대리석 대성당입니다.', 'The marble cathedral built over 350 years, from Gothic to Renaissance and Baroque.'),
 'como-h2': ('브루나테 푸니콜라레', 'Brunate funicular', '1894년부터 다닌 산악 열차로 브루나테 마을에 올라 호수와 알프스를 내려다봅니다.', 'The funicular running since 1894 up to Brunate, with views over the lake and Alps.'),
 'portofino-h1': ('포르토피노 항구', 'Portofino harbour', '파스텔 색 집들이 둘러싼 작은 항구로, 요트와 카페가 모여 있습니다.', 'The little harbour ringed by pastel houses, full of yachts and cafés.'),
}
ADD = {
 'genoa': [
  (6, S('가리발디 거리와 롤리 궁전', 'Via Garibaldi & the Palazzi dei Rolli', '16세기 귀족 궁전이 늘어선 거리로, 붉은 궁전·하얀 궁전 등이 미술관으로 열려 있습니다. 유네스코 세계유산입니다.', 'The street of 16th-century noble palaces—the Red and White Palaces among them are open as galleries; a UNESCO World Heritage Site.', 'Via Garibaldi Genova', 90, 120, c='mon')),
  (7, S('산 로렌초 대성당', 'Cathedral of San Lorenzo', '흑백 줄무늬 대리석의 고딕 대성당입니다.', 'The Gothic cathedral striped in black and white marble.', 'Cattedrale di San Lorenzo Genova', 20, 30)),
  (8, S('보카다세', 'Boccadasse', '시내 동쪽 끝의 알록달록한 작은 어촌으로, 자갈 해변에서 해 질 녘을 봅니다.', 'A colourful little fishing village at the city’s eastern edge, with a pebble beach for sunsets.', 'Boccadasse', 60, 90)),
 ],
 'turin': [
  (8, S('토리노 왕궁', 'Royal Palace of Turin', '사보이 왕가의 궁전으로, 왕실 무기고와 사보이 미술관이 함께 있습니다.', 'The palace of the House of Savoy, with the royal armoury and the Galleria Sabauda.', 'Palazzo Reale di Torino', 120, 180, c='mon')),
  (9, S('토리노 대성당과 성의 예배당', 'Turin Cathedral & Chapel of the Holy Shroud', '예수의 수의로 전해지는 ‘토리노의 성의’를 모신 대성당입니다(성의는 특별 전시 때만 공개).', 'The cathedral that keeps the Shroud of Turin (shown only at special exhibitions).', 'Duomo di Torino', 20, 30)),
  (10, S('카페 알 비체린', 'Caffè Al Bicerin', '1763년에 문을 연 카페로, 에스프레소·초콜릿·크림을 층층이 담은 토리노 음료 ‘비체린’의 원조입니다.', 'The café opened in 1763, home of the bicerin—Turin’s layered drink of espresso, chocolate and cream.', 'Caffè Al Bicerin', 20, 30)),
  (11, S('베나리아 레알레', 'Reggia di Venaria Reale', '베르사유에 견주는 사보이 왕가의 거대한 사냥 궁전과 정원으로, 유네스코 세계유산입니다.', 'The Savoy kings’ vast hunting palace and gardens, rivalling Versailles; a UNESCO World Heritage Site.', 'Reggia di Venaria Reale', 180, 240, group=DAY, c='mon',
         n='토리노에서 버스나 기차로 약 30~40분입니다.|About 30–40 min by bus or train from Turin.')),
  (12, S('바롤로와 랑게 와인 언덕', 'Barolo & the Langhe wine hills', '바롤로 와인의 고향으로, 바롤로 성 안 와인 박물관(WiMu)과 포도밭 언덕 마을이 있습니다. 유네스코 세계유산입니다.', 'The home of Barolo wine, with the WiMu wine museum in Barolo castle and hilltop villages among the vineyards; a UNESCO World Heritage Site.', 'WiMu Museo del Vino Barolo', 300, 480, group=DAY,
         n='토리노에서 차로 약 1시간 15분이고, 대중교통이 불편해 차나 투어가 편합니다.|About 1 hr 15 by car from Turin; public transport is poor, so a car or tour is easiest.')),
 ],
 'como': [
  (5, S('빌라 카를로타', 'Villa Carlotta', '트레메초의 호숫가 빌라로, 신고전주의 조각과 봄 진달래 정원으로 유명합니다.', 'The lakeside villa at Tremezzo, famous for its neoclassical sculpture and spring azaleas.', 'Villa Carlotta', 90, 120, group=DAY,
        n='코모에서 배로 약 2시간, 벨라조 맞은편입니다. 대략 3~11월에 엽니다.|About 2 hrs by boat from Como, opposite Bellagio; open roughly March to November.')),
 ],
 'bergamo': [
  (6, S('산타 마리아 마조레 대성당', 'Basilica of Santa Maria Maggiore', '수수한 겉모습과 달리 안이 금박 장식과 태피스트리로 화려한 로마네스크 성당입니다.', 'A Romanesque basilica plain outside but lavish within, with gilded stucco and tapestries.', 'Basilica di Santa Maria Maggiore Bergamo', 20, 30)),
 ],
 'stresa': [
  (4, None),
  (5, S('빌라 타란토 식물원', 'Villa Taranto Botanical Gardens', '호수 건너 베르바니아의 대형 식물원으로, 봄 튤립과 여름 연꽃이 유명합니다.', 'Large botanical gardens across the lake at Verbania, famous for spring tulips and summer lotus.', 'Giardini Botanici Villa Taranto', 90, 120, group=DAY,
        n='스트레사에서 배로 약 30분입니다. 대략 3~11월에 엽니다.|About 30 min by boat from Stresa; open roughly March to November.')),
 ],
}
ADD['stresa'] = [x for x in ADD['stresa'] if x[1]]
IT = [
 ("  genoa: [3, 2, 1, 4, 5],", "  genoa: [3, 7, 2, 6, 4, 1, 5, 8],"),
 ("  turin: { days: [['', 3, 1, 2, 4, 6, 7]], trips: [['수페르가|Superga', 5]] },",
  "  turin: { days: [['', 3, 10, 9, 8, 1, 2, 4], ['자동차와 수페르가|Cars & Superga', 6, 7, 5]], trips: [['베나리아 레알레|Venaria Reale', 11], ['바롤로|Barolo', 12]] },"),
 ("  como: { days: [['', 1, 2]], trips: [['발비아넬로와 벨라조|Balbianello & Bellagio', 4, 3]] },",
  "  como: { days: [['', 1, 2]], trips: [['발비아넬로와 벨라조|Balbianello & Bellagio', 4, 3], ['빌라 카를로타|Villa Carlotta', 5]] },"),
 ("  bergamo: [5, 2, 3, 1, 4],", "  bergamo: [5, 2, 3, 6, 1, 4],"),
 ("  stresa: [1, 2, 3],", "  stresa: { days: [['', 1, 2, 3, 4]], trips: [['빌라 타란토|Villa Taranto', 5]] },"),
]


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
        c = add_sights(c, cid, items, 'visit-it.ts')
    it = rd('itinerary-it.ts')
    for a, b in IT:
        assert it.count(a) == 1, a[:60]
        it = it.replace(a, b)
    wr('itinerary-it.ts', it)
    for cid in ADD:
        by = blocks(c, cid)
        m = re.search(rf"^  '?{cid}'?: (.*?)(?=^  [a-z'/])", it, re.M | re.S)
        trips = {int(x) for t in re.findall(r"trips: \[(.*)\]", m.group(1), re.S) for x in re.findall(r", (\d+)", t)}
        c = reorder(c, cid, [(n, DAY if (n in trips or read_group(by[n]) == OLD_NEAR) else read_group(by[n])) for n in itinerary_order(it, cid, set(by))])
    wr('cities.ts', c)


if __name__ == '__main__':
    main()
