#!/usr/bin/env python3
"""UK thin cities +2 each (2026-11-22, six-country review). Facts from English Wikipedia: Windsor Great Park 2,020 ha
royal park south of Windsor, former hunting ground of the castle; Windsor Guildhall begun 1687, Grade I, on the High
Street ~100 m from Castle Hill (Wren story doubtful – not used). St Martin's, Canterbury, oldest existing church in the
English-speaking world, part of the World Heritage Site; the Beaney, museum, library and gallery, opened 1899, Tudor
Revival. South Foreland Upper Lighthouse 1843, first lighthouse to use electric light, Marconi radio experiments, now
National Trust; Roman Painted House, Roman mansio found in the 1970s. Mompesson House in the Cathedral Close, completed
1701, National Trust since 1975; Wilton House, seat of the Earls of Pembroke for over 400 years, on the site of Wilton
Abbey. St Salvator's Chapel founded 1450 by Bishop James Kennedy, University of St Andrews; R&A World Golf Museum
(formerly British Golf Museum), opened 1990 opposite the R&A clubhouse. Tudor Merchant's House, late 15th c., three
storeys; St Mary's Church, Tenby, mostly 15th c. with a 15th-c. spire. Conwy Suspension Bridge, Thomas Telford,
1822–1826, 99.5 m, now foot only, National Trust; Bodnant Garden, founded 1874, 80 acres, National Trust since 1949.
St Columb's Cathedral, first Anglican cathedral built after the Reformation in Britain and Ireland; Tower Museum opened
1992, The Story of Derry and the Armada wreck La Trinidad Valencera. Run once."""
from add_daytrip_places import rd, wr
from sight_order import add_sights
from review_sk import S

FREE = '무료입니다.|Free.'
NT = '내셔널 트러스트 소유로, 겨울엔 닫거나 운영 시간이 줄어듭니다.|National Trust; closed or on shorter hours in winter.'
ADD = {
 'windsor': [
  (5, S('윈저 그레이트 파크', 'Windsor Great Park', '윈저 남쪽의 2,020ha 왕실 공원으로, 오랫동안 윈저성의 사냥터였습니다. 성에서 이어지는 롱 워크 끝으로 숲과 호수가 펼쳐집니다.', 'A 2,020-hectare royal park south of Windsor, for centuries the castle’s hunting ground, with woods and lakes beyond the end of the Long Walk.', 'Windsor Great Park', 90, 180, b='no', n=FREE)),
  (6, S('윈저 길드홀', 'Windsor Guildhall', '1687년 짓기 시작한 윈저 시청으로, 윈저성 입구로 오르는 캐슬 힐에서 약 100m 떨어진 하이 스트리트에 있습니다.', 'Windsor’s town hall, begun in 1687, on the High Street about 100 m from Castle Hill and the castle entrance.', 'Windsor Guildhall', 10, 15, b='no')),
 ],
 'canterbury': [
  (5, S('성 마틴 교회', 'St Martin’s Church', '영어권에서 가장 오래된 교회로, 지금도 예배를 드리는 잉글랜드에서 가장 오래된 교회 건물입니다. 대성당·성 아우구스티누스 수도원과 함께 세계유산입니다.', 'The oldest existing church in the English-speaking world and the oldest English church building still in use, part of the World Heritage Site with the cathedral and St Augustine’s Abbey.', 'St Martin\'s Church Canterbury', 20, 30, b='no', n=FREE)),
  (6, S('비니 하우스', 'The Beaney', '1899년 문을 연 튜더 리바이벌 양식 건물의 캔터베리 시립 박물관·도서관·미술관입니다.', 'Canterbury’s museum, library and art gallery, in a Tudor Revival building opened in 1899.', 'The Beaney Canterbury', 45, 60, b='no', n=FREE)),
 ],
 'dover': [
  (4, S('사우스 포어랜드 등대', 'South Foreland Lighthouse', '1843년 지은 흰 절벽 위 등대로, 세계 최초로 전기 불빛을 쓴 등대이자 마르코니가 무선 통신 실험을 한 곳입니다. 지금은 내셔널 트러스트 소유입니다.', 'An 1843 lighthouse on the White Cliffs, the first to use electric light and the site of Marconi’s pioneering radio experiments, now owned by the National Trust.', 'South Foreland Lighthouse', 60, 90, n=NT)),
  (5, S('로마 채색 저택', 'Roman Painted House', '1970년대 도로 공사 중 발견된 로마 시대 숙박 시설 유적으로, 벽화와 바닥 난방 시설이 남아 있습니다.', 'The remains of a Roman mansio found during road building in the 1970s, with painted walls and an underfloor heating system.', 'Roman Painted House Dover', 30, 45, n='여름철 위주로 엽니다.|Open mainly in summer.')),
 ],
 'salisbury': [
  (5, S('몸페슨 하우스', 'Mompesson House', '대성당 경내 클로스에 1701년 완성된 저택으로, 1975년부터 내셔널 트러스트 소유입니다.', 'A house in the Cathedral Close completed in 1701, owned by the National Trust since 1975.', 'Mompesson House Salisbury', 45, 60, n=NT)),
  (6, S('윌턴 하우스', 'Wilton House', '솔즈베리 근처 윌턴의 저택으로, 400년 넘게 펨브로크 백작 가문의 본거지입니다. 중세 윌턴 수도원 자리에 지었습니다.', 'A country house at Wilton near Salisbury, seat of the Earls of Pembroke for over 400 years, built on the site of medieval Wilton Abbey.', 'Wilton House', 90, 120, n='여름철에만 엽니다.|Open in summer only.')),
 ],
 'st-andrews': [
  (5, S('성 살바토르 예배당', 'St Salvator’s Chapel', '1450년 케네디 주교가 세운 세인트앤드루스 대학교의 후기 고딕 예배당입니다.', 'The Late Gothic chapel of the University of St Andrews, founded in 1450 by Bishop James Kennedy.', 'St Salvator\'s Chapel St Andrews', 15, 20, b='no')),
  (6, S('R&A 세계 골프 박물관', 'R&A World Golf Museum', 'R&A 클럽하우스 맞은편의 박물관으로, 중세부터 오늘날까지 골프의 역사를 보여 줍니다. 1990년 문을 열었습니다.', 'The museum opposite the R&A clubhouse, telling the history of golf from medieval times to the present; opened in 1990.', 'R&A World Golf Museum', 60, 90)),
 ],
 'tenby': [
  (5, S('튜더 상인의 집', 'Tudor Merchant’s House', '15세기 말 돌로 지은 3층 상인의 집으로, 1층 가게와 2층 살림집, 3층 침실을 당시 모습으로 꾸몄습니다.', 'A three-storey stone merchant’s house from the late 15th century, with the shop, living quarters and bedrooms furnished as they were.', 'Tudor Merchant\'s House Tenby', 30, 45, n=NT)),
  (6, S('성모 마리아 교회', 'St Mary’s Church', '구시가 한가운데의 교회로, 대부분 15세기에 지었고 첨탑도 15세기에 더해졌습니다.', 'The church at the heart of the old town, mostly 15th-century, with a 15th-century spire.', 'St Mary\'s Church Tenby', 15, 20, b='no', n=FREE)),
 ],
 'conwy': [
  (5, S('콘위 현수교', 'Conwy Suspension Bridge', '토머스 텔퍼드가 1822~1826년 성 옆에 놓은 99.5m 현수교로, 세계 초기의 도로 현수교입니다. 지금은 걸어서만 건넙니다.', 'Thomas Telford’s 99.5 m suspension bridge beside the castle, built in 1822–1826 and one of the world’s first road suspension bridges; now foot traffic only.', 'Conwy Suspension Bridge', 15, 30, n=NT)),
  (6, S('보드넌트 정원', 'Bodnant Garden', '콘위 계곡을 내려다보는 80에이커 정원으로, 1874년 시작해 5대에 걸쳐 가꿨고 1949년 내셔널 트러스트에 기증됐습니다.', 'An 80-acre garden overlooking the Conwy valley, begun in 1874 and developed by five generations of one family before passing to the National Trust in 1949.', 'Bodnant Garden', 120, 180)),
 ],
 'derry': [
  (5, S('성 콜럼 대성당', 'St Columb’s Cathedral', '성벽 안의 성공회 대성당으로, 종교 개혁 뒤 영국·아일랜드에서 처음 지은 성공회 대성당입니다.', 'The Anglican cathedral inside the walls, the first built in Britain and Ireland after the Reformation.', 'St Columb\'s Cathedral Derry', 30, 45)),
  (6, S('타워 박물관', 'Tower Museum', '1992년 문을 연 박물관으로, 선사 시대부터 오늘날까지의 데리 역사와 근처에서 난파한 스페인 무적함대 배 라 트리니다드 발렌세라를 보여 줍니다.', 'A museum opened in 1992 with the story of Derry from prehistory to today and the local Spanish Armada wreck La Trinidad Valencera.', 'Tower Museum Derry', 60, 90)),
 ],
}
IT = [("  canterbury: [3, 2, 1, 4],\n", "  canterbury: [1, 3, 6, 2, 4, 5],\n"),
      ("  dover: [1, 2, 3],\n", "  dover: { days: [['', 1, 5, 3, 2]], trips: [['사우스 포어랜드 등대|South Foreland Lighthouse', 4]] },\n"),
      ("  windsor: [4, 1, 2, 3],\n", "  windsor: { days: [['', 1, 2, 6, 4, 3]], trips: [['윈저 그레이트 파크|Windsor Great Park', 5]] },\n"),
      ("    days: [['', 2]],\n    trips: [\n      ['올드 새럼과 스톤헨지|Old Sarum & Stonehenge', 3, 1],\n      ['에이브버리|Avebury', 4],\n",
       "    days: [['', 2, 5]],\n    trips: [\n      ['올드 새럼과 스톤헨지|Old Sarum & Stonehenge', 3, 1],\n      ['에이브버리|Avebury', 4],\n      ['윌턴 하우스|Wilton House', 6],\n"),
      ("  'st-andrews': [2, 4, 1, 3],\n", "  'st-andrews': [2, 4, 5, 6, 1, 3],\n"),
      ("  conwy: [1, 2, 4, 3],\n", "  conwy: { days: [['', 1, 5, 2, 4, 3]], trips: [['보드넌트 정원|Bodnant Garden', 6]] },\n"),
      ("  tenby: { days: [['', 4, 1, 2]], trips: [['칼디 섬|Caldey Island', 3]] },\n", "  tenby: { days: [['', 4, 6, 5, 1, 2]], trips: [['칼디 섬|Caldey Island', 3]] },\n"),
      ("  derry: [3, 2, 1, 4],\n", "  derry: [1, 5, 6, 3, 2, 4],\n")]


def main():
    c = rd('cities.ts')
    for cid, items in ADD.items():
        c = add_sights(c, cid, items, 'visit-uk.ts')
    wr('cities.ts', c)
    it = rd('itinerary-uk.ts')
    for a, b in IT:
        assert it.count(a) == 1, a
        it = it.replace(a, b)
    wr('itinerary-uk.ts', it)


if __name__ == '__main__':
    main()
