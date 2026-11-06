#!/usr/bin/env python3
"""Czechia step 1 of the all-country plan (2026-11-06): more sights for the seven smaller cities (Prague was done in
review_cz.py), incl. themed: Eggenberg brewery, Becherovka museum, Valtice national wine salon, Olomouc tvarůžky
cheese museum, Moser glass. Korean name fixes; lists in itinerary order; old '근교' headers become '근교 당일치기'.
Run once.
After the run: cesky-krumlov-h8 renamed by hand to the Historic Brewery (Eggenberg now trades as Historický pivovar,
Google Maps 2026-11-06); telc-h5 Telč Underground → Roštejn Castle (user choice, no photo of the underground)."""
from add_daytrip_places import rd, wr
from sight_order import add_sights, blocks, itinerary_order, read_group, reorder, city_span
from review_sk import S

DAY = ('근교 당일치기', 'Day trip')
OLD_NEAR = ('근교', 'Nearby')
NAMES = [('brno', '야채시장', '채소 시장 (젤니 트르흐)'), ('karlovy-vary', '베체리 광장', '극장 광장'),
         ('ceske-budejovice', '버드바르 양조장', '부드바르 양조장'), ('ceske-budejovice', '흑탑', '검은 탑'),
         ('cesky-krumlov', '성 곰 해자', '성의 곰 해자')]
ADD = {
 'brno': [
  (6, S('카푸친 지하 납골당', 'Capuchin Crypt', '18세기 수도사와 후원자들의 유해가 자연 건조된 미라로 남은 지하 납골당입니다.', 'A crypt where the bodies of 18th-century friars and benefactors lie naturally mummified.', 'Kapucínská hrobka Brno', 20, 30)),
  (7, S('구시청사와 브르노 용', 'Old Town Hall & the Brno Dragon', '입구 천장에 매달린 ‘용’(실은 악어 박제)과 휘어진 고딕 첨탑으로 유명한 옛 시청으로, 탑에 오를 수 있습니다.', 'The old town hall known for the “dragon” (really a stuffed crocodile) hanging in its gateway and its crooked Gothic pinnacle; the tower can be climbed.', 'Stará radnice Brno', 20, 30)),
  (8, S('성 야고보 성당 납골당', 'Brno Ossuary at St James', '성당 아래에서 발견된 유럽에서 두 번째로 큰 납골당으로, 5만 명 넘는 유골이 있습니다.', 'Discovered beneath the church, Europe’s second-largest ossuary, holding the remains of more than 50,000 people.', 'Kostnice u svatého Jakuba Brno', 30, 45,
         b='rec', n='입장 시간대가 정해져 있어 온라인 예매를 권합니다.|Entry is by time slot—booking online is recommended.')),
  (9, S('채소 시장 지하 미로', 'Labyrinth under the Cabbage Market', '젤니 트르흐 광장 아래 옛 지하 저장고와 통로를 안내 투어로 걷습니다.', 'Guided tours of the old cellars and passages beneath the Zelný trh square.', 'Labyrint pod Zelným trhem', 45, 60,
         b='rec', n='안내 투어로만 들어갑니다.|Guided tours only.')),
  (10, S('모라비아 카르스트와 푼크바 동굴', 'Moravian Karst & Punkva Caves', '종유석 동굴을 걷고 지하 강에서 배를 탄 뒤, 138m 깊이 마초하 협곡을 내려다봅니다.', 'Walk through stalactite caves, take a boat along an underground river and look into the 138 m Macocha Abyss.', 'Punkevní jeskyně', 240, 360, group=DAY,
          b='req', n='여름엔 표가 일찍 매진되니 온라인으로 예매하세요. 브르노에서 기차와 버스로 약 1시간입니다.|Tickets sell out early in summer—book online. About 1 hr by train and bus from Brno.')),
  (11, S('멘델 박물관', 'Mendel Museum', '유전학의 아버지 그레고어 멘델이 완두콩 실험을 한 아우구스티노회 수도원에 있는 박물관입니다.', 'The museum in the Augustinian abbey where Gregor Mendel, father of genetics, carried out his pea experiments.', 'Mendelovo muzeum Brno', 45, 60)),
 ],
 'telc': [
  (5, S('텔치 지하 통로', 'Telč Underground', '광장 아래 옛 저장고와 통로를 따라 걷는 짧은 지하 탐방로입니다.', 'A short route through the old cellars and passages under the square.', 'Telčské podzemí', 30, 45)),
  (6, S('성령 탑', 'Holy Spirit Tower', '시내에서 가장 오래된 건물인 로마네스크 탑으로, 꼭대기에서 광장과 연못이 내려다보입니다.', 'The Romanesque tower, the town’s oldest building, with views of the square and ponds from the top.', 'Věž sv. Ducha Telč', 20, 30,
         n='대략 봄~가을에만 엽니다.|Open roughly spring to autumn.')),
 ],
 'mikulov': [
  (6, S('디트리히슈타인 가문 묘당', 'Dietrichstein Tomb', '광장의 옛 성당을 디트리히슈타인 가문 묘당으로 꾸민 곳으로, 관 40여 개가 안치되어 있습니다.', 'The former church on the square turned into the Dietrichstein family tomb, with some 40 coffins.', 'Dietrichštejnská hrobka Mikulov', 20, 30)),
  (7, S('발티체 국립 와인 살롱', 'National Wine Salon, Valtice', '해마다 체코 최고의 와인 100가지를 고르는 국립 와인 살롱으로, 발티체 성 지하 저장고에서 시음합니다.', 'The national wine salon that picks the Czech Republic’s 100 best wines each year, with tastings in the cellars of Valtice Castle.', 'Národní salon vín Valtice', 60, 90, group=DAY,
         b='rec', n='미쿨로프에서 기차나 버스로 약 15분입니다.|About 15 min by train or bus from Mikulov.')),
 ],
 'cesky-krumlov': [
  (6, S('성탑', 'Castle Tower', '분홍과 초록으로 그림을 그린 성의 둥근 탑으로, 꼭대기에서 구시가와 블타바강 굽이가 내려다보입니다.', 'The castle’s painted round tower, with views over the old town and the bends of the Vltava.', 'Zámecká věž Český Krumlov', 20, 30)),
  (7, S('에곤 실레 아트 센터', 'Egon Schiele Art Centrum', '실레가 머물렀던 어머니의 고향에 있는 미술관으로, 그의 작품과 현대 미술을 전시합니다.', 'A gallery in the home town of Egon Schiele’s mother, where he stayed, showing his work and modern art.', 'Egon Schiele Art Centrum', 45, 60)),
  (8, S('에겐베르크 양조장', 'Eggenberg Brewery', '성의 옛 양조장에서 지금도 맥주를 만드는 곳으로, 양조 투어와 시음이 있습니다.', 'The castle’s former brewery, still brewing, with brewery tours and tastings.', 'Pivovar Eggenberg', 60, 75, b='rec')),
 ],
 'karlovy-vary': [
  (6, S('온천 콜로나데 (브르지들로)', 'Hot Spring Colonnade (Vřídlo)', '72도 온천수가 12m 높이로 솟구치는 가장 센 원천으로, 실내 회랑에서 마셔 볼 수 있습니다.', 'The strongest spring, shooting 72°C water up to 12 m, with an indoor hall where you can taste it.', 'Vřídelní kolonáda', 20, 30)),
  (7, S('베헤로프카 박물관', 'Becherovka Museum (Jan Becher Museum)', '약초술 베헤로프카의 옛 공장에서 역사와 지하 저장고를 보고 시음합니다.', 'The original Becherovka herbal-liqueur factory, with its history, cellars and a tasting.', 'Jan Becher Museum', 45, 60, b='rec')),
  (8, S('모제르 유리 박물관과 공장', 'Moser Glass Museum & Factory', '1857년부터 이어 온 크리스털 유리 브랜드 모제르의 박물관과 공장 견학입니다.', 'The museum and factory tour of Moser, the crystal-glass maker since 1857.', 'Moser Glass Museum Karlovy Vary', 60, 90)),
  (9, S('로켓 성', 'Loket Castle', '오흐르제강이 휘감은 바위 위의 고딕 성과 작은 마을입니다.', 'A Gothic castle and little town on a rock wrapped by the Ohře river.', 'Hrad Loket', 120, 180, group=DAY,
         n='카를로비바리에서 버스로 약 30분입니다.|About 30 min by bus from Karlovy Vary.')),
 ],
 'ceske-budejovice': [
  (6, S('흘루보카 성', 'Hluboká Castle', '윈저성을 본떠 하얗게 고친 네오고딕 성으로, 화려한 실내를 안내 투어로 봅니다.', 'The white neo-Gothic castle remodelled after Windsor, its lavish interiors seen on guided tours.', 'Zámek Hluboká', 120, 180, group=DAY,
         b='rec', n='체스케부데요비체에서 버스나 기차로 약 20분입니다.|About 20 min by bus or train from České Budějovice.')),
  (7, S('홀라쇼비체 마을', 'Holašovice', '남보헤미아 농촌 바로크 양식 농가가 광장을 둘러싼 마을로, 유네스코 세계유산입니다.', 'A village of South Bohemian folk-Baroque farmhouses round a green; a UNESCO World Heritage Site.', 'Holašovice', 60, 90, group=DAY,
         n='버스가 드물어 차로 가는 편이 편합니다(약 20분).|Buses are rare, so it is easier by car (about 20 min).')),
 ],
 'olomouc': [
  (7, S('올로모우츠 치즈 박물관 (로슈티체)', 'Olomouc Tvarůžky Museum (Loštice)', '냄새가 강한 숙성 치즈 ‘올로모우츠 트바루슈키’를 만드는 회사의 박물관과 가게입니다.', 'The museum and shop of the maker of Olomouc tvarůžky, the pungent ripened cheese.', 'Muzeum olomouckých tvarůžků Loštice', 45, 60, group=DAY,
         n='올로모우츠에서 기차로 약 40분입니다.|About 40 min by train from Olomouc.')),
  (8, S('부조프 성', 'Bouzov Castle', '20세기 초 튜턴 기사단이 동화 속 성처럼 다시 지은 성으로, 안내 투어로 봅니다.', 'The castle rebuilt like a fairy-tale fortress by the Teutonic Order in the early 20th century, seen on guided tours.', 'Hrad Bouzov', 90, 120, group=DAY,
         n='올로모우츠에서 차로 약 45분입니다.|About 45 min by car from Olomouc.')),
 ],
}
IT = [
 ("  telc: [1, 2, 3, 4],", "  telc: [1, 5, 6, 2, 3, 4],"),
 ("  mikulov: [1, 4, 3, 2, 5],", "  mikulov: { days: [['', 1, 6, 4, 3, 2]], trips: [['레드니체·발티체|Lednice–Valtice', 5], ['발티체 와인 살롱|Valtice Wine Salon', 7]] },"),
 ("  brno: [5, 4, 3, 1, 2],", "  brno: {\n    days: [\n      ['구시가|Old town', 5, 9, 7, 6, 4, 8, 3],\n      ['슈필베르크와 투겐트하트|Špilberk & Tugendhat', 1, 11, 2],\n    ],\n    trips: [['모라비아 카르스트|Moravian Karst', 10]],\n  },"),
 ("  'cesky-krumlov': [2, 3, 5, 1],", "  'cesky-krumlov': [2, 3, 7, 8, 5, 1, 6],"),
 ("  'karlovy-vary': [5, 1, 4, 2, 3],", "  'karlovy-vary': { days: [['', 5, 1, 4, 6, 7, 2, 8, 3]], trips: [['로켓 성|Loket Castle', 9]] },"),
 ("  olomouc: [1, 2, 3, 4, 5, 6],", "  olomouc: { days: [['', 1, 2, 3, 4, 5]], trips: [['스바티 코페체크|Svatý Kopeček', 6], ['부조프 성|Bouzov Castle', 8], ['로슈티체 치즈 박물관|Loštice', 7]] },"),
 ("  'ceske-budejovice': [1, 2, 4, 5, 3],", "  'ceske-budejovice': { days: [['', 1, 2, 4, 5, 3]], trips: [['흘루보카 성|Hluboká Castle', 6], ['홀라쇼비체|Holašovice', 7]] },"),
]


def main():
    c = rd('cities.ts')
    for cid, a, b in NAMES:
        i, j = city_span(c, cid)
        blk = c[i:j]
        assert blk.count(f'"{a}"') == 1, (cid, a)
        c = c[:i] + blk.replace(f'"{a}"', f'"{b}"') + c[j:]
    for cid, items in ADD.items():
        c = add_sights(c, cid, items, 'visit-central.ts')
    it = rd('itinerary-north.ts')
    for a, b in IT:
        assert it.count(a) == 1, a[:60]
        it = it.replace(a, b)
    wr('itinerary-north.ts', it)
    for cid in ADD:
        by = blocks(c, cid)
        order = itinerary_order(it, cid, set(by))
        trips = set()
        for n in order:
            g = read_group(by[n])
            if g == OLD_NEAR:
                trips.add(n)
        c = reorder(c, cid, [(n, DAY if (n in trips or read_group(by[n]) == DAY) else read_group(by[n])) for n in order])
    wr('cities.ts', c)


if __name__ == '__main__':
    main()
