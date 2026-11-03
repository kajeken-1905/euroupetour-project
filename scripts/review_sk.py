#!/usr/bin/env python3
"""Slovakia step 1 (2026-11-04, user request): more sights for the five Slovak cities and every list in itinerary
order. Opening facts only where checked; otherwise duration and practical notes. Run once."""
from add_daytrip_places import rd, wr
from sight_order import add_sights, blocks, itinerary_order, read_group, reorder
from review_hr import S as _S


def S(*a, group=None, **k):
    d = _S(*a, **k)
    if group:
        d['group'] = group
    return d

DAY = ('근교 당일치기', 'Day trip')
ADD = {
 'bratislava': [
  (6, S('블루 처치(성 엘리자베스 성당)', 'Blue Church (St Elizabeth’s)', '외벽부터 지붕까지 하늘색으로 칠한 1913년의 아르누보 성당으로, 동화 속 건물 같은 모습으로 유명합니다.', 'The 1913 Art Nouveau church painted sky-blue from walls to roof, famous for its fairy-tale look.', 'Blue Church Bratislava', 15, 20,
        n='내부는 미사 시간 앞뒤에만 열리는 경우가 많습니다. 외관은 언제든 볼 수 있습니다.|The interior is often open only around Mass; the exterior can be seen any time.')),
  (7, S('대주교 궁전', 'Primate’s Palace', '구시가의 분홍빛 신고전주의 궁전으로, 1805년 프레스부르크 조약이 맺어진 거울의 방과 17세기 영국 태피스트리 연작이 있습니다.', 'The pink Neoclassical palace in the old town, with the Hall of Mirrors where the 1805 Peace of Pressburg was signed and a set of 17th-century English tapestries.', 'Primate’s Palace Bratislava', 30, 45,
        s='https://www.muzeum.bratislava.sk/', n='시립 박물관이 운영하며 유료입니다. 운영 시간은 공식 사이트에서 확인하세요.|Run by the City Museum and ticketed; check opening times on its site.')),
  (8, S('UFO 다리(SNP 다리)', 'UFO Bridge (Most SNP)', '다뉴브강을 가로지르는 사장교로, 85m 높이 기둥 꼭대기의 비행접시 모양 전망대에서 구시가와 성이 내려다보입니다.', 'The cable-stayed bridge over the Danube, topped by a flying-saucer observation deck 85 m up, looking over the old town and castle.', 'UFO Bridge Bratislava', 30, 45,
        n='전망대는 유료이며 레스토랑 손님은 입장권 값을 식사비에서 빼 주기도 합니다.|The observation deck is ticketed; the restaurant up top sometimes credits the ticket against a meal.')),
  (9, S('중앙 광장과 추밀 동상', 'Main Square & Čumil', '옛 시청과 롤란트 분수가 선 구시가 중앙 광장으로, 근처 골목 맨홀에서 고개를 내민 청동상 ‘추밀’이 명물입니다.', 'The old town’s main square with the Old Town Hall and Roland Fountain; nearby, the bronze “Čumil” peering out of a manhole is a favourite.', 'Hlavné námestie Bratislava', 20, 30)),
  (10, S('슬라빈 전쟁 기념비', 'Slavín War Memorial', '제2차 세계 대전 때 숨진 소련군 병사들의 묘지와 기념탑으로, 언덕 위에서 시내와 다뉴브강이 한눈에 보입니다.', 'The cemetery and monument to Soviet soldiers who died in World War II, on a hill with views over the city and the Danube.', 'Slavín Bratislava', 30, 45,
        n='무료입니다. 구시가에서 오르막길로 걸어서 약 25분입니다.|Free; about 25 minutes uphill on foot from the old town.')),
 ],
 'kosice': [
  (6, S('노래하는 분수', 'Singing Fountain', '대성당과 국립 극장 사이 광장의 분수로, 저녁마다 음악에 맞춰 물줄기와 조명이 춤춥니다.', 'The fountain between the cathedral and the theatre, whose jets and lights dance to music in the evenings.', 'Singing Fountain Košice', 10, 20,
        n='대체로 따뜻한 계절에 운영합니다.|Runs mainly in the warmer months.')),
  (7, S('코시체 국립 극장', 'State Theatre Košice', '중앙 거리 한가운데의 1899년 네오바로크 극장으로, 오페라·발레·연극을 올립니다.', 'The neo-Baroque theatre of 1899 at the heart of the main street, staging opera, ballet and drama.', 'State Theatre Košice', 10, 15)),
  (8, S('우르바노바 탑', 'Urban’s Tower', '대성당 옆 14세기 종탑으로, 안에 큰 종 ‘우르반’이 있었고 지금은 탑 둘레에 옛 묘비가 둘러져 있습니다.', 'The 14th-century bell tower beside the cathedral, named after its great bell, now ringed by old gravestones.', 'Urbanova veža Košice', 10, 15)),
  (9, S('아래 문 지하 박물관', 'Lower Gate Underground Museum', '중앙 거리 아래에서 발굴한 중세 성문과 해자, 다리 유적을 보여 주는 지하 전시입니다.', 'An underground display of the medieval gate, moat and bridge excavated beneath the main street.', 'Lower Gate Underground Museum Košice', 20, 30,
        n='대체로 봄~가을에 엽니다.|Usually open spring to autumn.')),
 ],
 'poprad': [
  (6, S('스피시스카 소보타', 'Spišská Sobota', '포프라트 안의 옛 스피시 마을로, 르네상스 시민 가옥이 둘러싼 광장과 고딕 제단이 있는 성 유리 성당이 남아 있습니다.', 'An old Spiš town now within Poprad, with a square of Renaissance burghers’ houses and St George’s Church with its Gothic altar.', 'Spišská Sobota', 30, 45,
        n='시내 중심에서 걸어서 약 20분입니다.|About 20 minutes’ walk from the centre.')),
  (7, S('슬로바키아 파라다이스', 'Slovak Paradise', '협곡 속 사다리와 철 계단, 외나무다리를 따라 폭포를 오르는 국립공원으로, 호르나트강 협곡 길이 유명합니다.', 'The national park where ladders, steel steps and footbridges climb past waterfalls in narrow gorges; the Hornád gorge trail is the best known.', 'Slovenský raj', 240, 360, group=DAY,
        n='포프라트에서 차로 약 30분이며 일부 협곡 길은 한 방향으로만 오를 수 있습니다. 탐방로 입장료가 있습니다.|About 30 min by car from Poprad; some gorge trails are one-way uphill only, and there is a trail fee.')),
  (8, S('롬니츠키 봉우리', 'Lomnický štít', '타트란스카 롬니차에서 케이블카를 갈아타고 오르는 해발 2,634m 봉우리로, 고타트라 산맥이 발아래 펼쳐집니다.', 'The 2,634 m peak reached by cable cars from Tatranská Lomnica, with the High Tatras spread below.', 'Lomnický štít', 180, 240, group=DAY,
        b='rec', n='꼭대기 구간은 인원이 제한돼 미리 예약하는 편이 좋고 날씨에 따라 운행이 멈춥니다.|The top section has limited capacity, so book ahead; it stops in bad weather.')),
 ],
 'banska-bystrica': [
  (6, S('슬로바키아 민족 봉기 박물관', 'Museum of the Slovak National Uprising', '1944년 나치에 맞선 슬로바키아 민족 봉기를 기리는 박물관으로, 둘로 갈라진 독특한 건물과 야외 무기 전시가 있습니다.', 'The museum of the 1944 Slovak National Uprising against the Nazis, in a striking split building with an open-air display of weapons.', 'Museum of the Slovak National Uprising', 60, 90)),
  (7, S('기울어진 시계탑', 'Clock Tower', 'SNP 광장의 1552년 시계탑으로, 조금 기울어 ‘슬로바키아의 피사의 사탑’이라 불리며 꼭대기에서 광장이 내려다보입니다.', 'The 1552 clock tower on SNP Square, slightly leaning and nicknamed Slovakia’s Pisa, with a view over the square from the top.', 'Hodinová veža Banská Bystrica', 15, 20)),
  (8, S('마티아스 하우스', 'Matthias House', '헝가리 왕 마차시 1세가 머물렀다고 전하는 광장의 15세기 고딕 저택입니다.', 'The 15th-century Gothic house on the square where King Matthias Corvinus is said to have stayed.', 'Matejov dom Banská Bystrica', 5, 10)),
 ],
 'trencin': [
  (6, S('트렌친 회당', 'Trenčín Synagogue', '1913년에 지은 돔 지붕의 비잔틴·무어 양식 회당으로, 지금은 전시와 공연장으로 쓰입니다.', 'The domed Byzantine-Moorish synagogue of 1913, now used for exhibitions and concerts.', 'Trenčín Synagogue', 15, 30)),
  (7, S('보이니체 성', 'Bojnice Castle', '첨탑이 숲처럼 솟은 동화 같은 성으로, 19세기 낭만주의 양식으로 다시 지었습니다. 봄에는 유령 축제가 열립니다.', 'A fairy-tale castle bristling with turrets, rebuilt in 19th-century Romantic style; a ghost festival is held in spring.', 'Bojnice Castle', 120, 180, group=DAY,
        n='트렌친에서 차로 약 1시간 15분입니다. 성 안은 안내 투어로만 볼 수 있습니다.|About 1 hr 15 by car from Trenčín; the interior is seen on guided tours only.')),
 ],
}
IT = {
 "  bratislava: { days: [['', 2, 4, 3, 1]], trips: [['데빈 성|Devín Castle', 5]] },":
 "  bratislava: { days: [['', 2, 9, 7, 4, 6, 3, 1, 8, 10]], trips: [['데빈 성|Devín Castle', 5]] },",
 "  kosice: [5, 3, 2, 1, 4],": "  kosice: [5, 9, 1, 8, 4, 6, 7, 2, 3],",
 "  poprad: { days: [['', 3, 2]], trips: [['고타트라|High Tatras', 1, 5, 4]] },":
 "  poprad: {\n    days: [['', 3, 6, 2]],\n    trips: [\n      ['고타트라|High Tatras', 1, 5, 4, 8],\n      ['슬로바키아 파라다이스|Slovak Paradise', 7],\n    ],\n  },",
 "  'banska-bystrica': [1, 3, 2, 4, 5],": "  'banska-bystrica': [1, 7, 8, 2, 3, 4, 6, 5],",
 "  trencin: [3, 4, 2, 1, 5],": "  trencin: { days: [['', 3, 6, 4, 2, 1, 5]], trips: [['보이니체 성|Bojnice Castle', 7]] },",
}


def main():
    c = rd('cities.ts')
    for cid, items in ADD.items():
        c = add_sights(c, cid, items, 'visit-central.ts')
    it = rd('itinerary-north.ts')
    for a, b in IT.items():
        assert it.count(a) == 1, a
        it = it.replace(a, b)
    wr('itinerary-north.ts', it)
    for cid in ADD:
        by = blocks(c, cid)
        order = itinerary_order(it, cid, set(by))
        c = reorder(c, cid, [(n, read_group(by[n])) for n in order])
        print(cid, order)
    wr('cities.ts', c)


if __name__ == '__main__':
    main()
