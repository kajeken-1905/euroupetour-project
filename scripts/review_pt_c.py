#!/usr/bin/env python3
"""Portugal 2nd pass (2026-11-26, user approved): +16 sights in 13 existing cities. Facts from Wikipedia (en/pt):
Convent of the Capuchos, Sintra, 16th-c. Franciscan friary with cork-lined cells; Seteais Palace, 18th-c. Neoclassical
palace with a triumphal arch, now a hotel; Guincho beach, windy Atlantic beach with dunes below the Sintra hills; Tróia
peninsula across the Sado by ferry, beaches and the Roman ruins of Tróia (fish-salting works); Palmela Castle on a
hilltop above Setúbal, with a pousada in the old convent; Milreu Roman villa ruins and Estoi Palace (pousada) north of
Faro; Cacela Velha village on a low cliff over the Ria Formosa; Praia da Marinha, cliffs and sea arches on the Seven
Hanging Valleys trail; Livraria de Santiago, bookshop in the church of Santiago, Óbidos UNESCO City of Literature (2015);
Biscainhos Palace, Baroque palace museum with gardens; Raio Palace (Casa do Mexicano), Rococo façade in blue tiles by
André Soares; Penha Garcia fossil trail with trilobites and river pools; Ammaia Roman city ruins and museum at São
Salvador da Aramenha; Cabo Girão skywalk, glass platform on one of Europe's highest sea cliffs (~580 m); Lagoa do Fogo
crater lake nature reserve on São Miguel; Praia da Vitória, town and bay on Terceira. Run once."""
import re
from add_daytrip_places import rd, wr
from sight_order import add_sights, reorder
from review_sk import S

FREE = '무료입니다.|Free.'
DAY = ('근교 당일치기', 'Day trip')
VF = 'visit-iberia.ts'
ADD = {
 'sintra': [
  (7, S('카푸초스 수도원', 'Convent of the Capuchos', '숲속 바위 사이에 지은 16세기 프란치스코회 수도원으로, 작은 방들의 벽과 문을 코르크로 덮었습니다.', 'A 16th-century Franciscan friary tucked among forest boulders, its tiny cells lined with cork.', 'Convento dos Capuchos Sintra', 60, 75)),
  (8, S('세테아이스 궁전', 'Seteais Palace', '개선문이 있는 18세기 신고전주의 궁전으로, 지금은 호텔이며 아치 너머로 페나 궁전이 보입니다.', 'An 18th-century Neoclassical palace with a triumphal arch, now a hotel; Pena Palace is framed through the arch.', 'Palácio de Seteais', 20, 30, b='no', n='정원과 아치 앞은 둘러볼 수 있습니다.|The grounds and arch can be seen.')),
 ],
 'cascais': [
  (7, S('긴슈 해변', 'Guincho Beach', '신트라 산자락 아래 바람 센 대서양 해변으로, 모래 언덕과 서퍼들이 있습니다.', 'A windy Atlantic beach below the Sintra hills, with dunes and surfers.', 'Praia do Guincho', 60, 120, b='no', n='물살이 세니 수영할 땐 조심하세요.|Strong currents: take care swimming.')),
 ],
 'setubal': [
  (6, S('트로이아 반도', 'Tróia Peninsula', '사두강 건너 배로 가는 반도로, 긴 모래 해변과 로마 시대 생선 절임 공장 유적이 있습니다.', 'The peninsula across the Sado by ferry, with long sandy beaches and the ruins of a Roman fish-salting works.', 'Ruínas Romanas de Tróia', 180, 300, group=DAY)),
  (7, S('팔멜라 성', 'Palmela Castle', '세투발 위 언덕의 성으로, 옛 수도원이 포우자다 호텔이 되었고 성벽에서 사두강과 아라비다 산이 보입니다.', 'The hilltop castle above Setúbal, its old convent now a pousada, with views over the Sado and the Arrábida hills.', 'Castelo de Palmela', 60, 90, group=DAY, b='no', n=FREE)),
 ],
 'faro': [
  (7, S('밀레우 로마 유적과 에스토이 궁전', 'Milreu Roman ruins & Estoi Palace', '파루 북쪽의 로마 빌라 유적과, 정원이 아름다운 19세기 궁전(포우자다 호텔)입니다.', 'The Roman villa ruins at Milreu and the 19th-century Estoi Palace, now a pousada, with fine gardens, north of Faro.', 'Ruínas Romanas de Milreu', 90, 120, group=DAY)),
 ],
 'tavira': [
  (5, S('카셀라 벨랴', 'Cacela Velha', '리아 포르모사 석호를 내려다보는 낮은 절벽 위의 작은 하얀 마을입니다.', 'A tiny white village on a low cliff above the Ria Formosa lagoon.', 'Cacela Velha', 60, 90, group=DAY, b='no', n=FREE)),
 ],
 'lagos': [
  (8, S('마리냐 해변', 'Praia da Marinha', '황금빛 절벽과 바다 아치가 어우러진 해변으로, ‘일곱 계곡 절벽길’이 이어집니다.', 'A beach of golden cliffs and sea arches, on the Seven Hanging Valleys clifftop trail.', 'Praia da Marinha', 120, 180, group=DAY, b='no', n=FREE)),
 ],
 'obidos': [
  (6, S('산티아구 서점', 'Livraria de Santiago', '옛 산티아구 교회 안에 들어선 서점으로, 오비두스는 2015년 유네스코 문학 창의 도시가 되었습니다.', 'A bookshop inside the old church of Santiago; Óbidos became a UNESCO City of Literature in 2015.', 'Livraria de Santiago Óbidos', 20, 30, b='no', n=FREE)),
 ],
 'braga': [
  (8, S('비스카이뉴스 궁전', 'Biscainhos Palace', '정원이 딸린 바로크 귀족 저택 박물관입니다.', 'A Baroque noble mansion, now a museum, with formal gardens.', 'Museu dos Biscainhos', 60, 75, c='mon')),
  (9, S('하이우 궁전', 'Raio Palace', '파란 아줄레주 타일로 덮인 로코코 정면이 아름다운 저택으로, 안드레 소아르스가 설계했습니다.', 'A mansion with a Rococo façade clad in blue azulejos, designed by André Soares.', 'Palácio do Raio Braga', 20, 30)),
 ],
 'monsanto': [
  (4, S('페냐 가르시아 화석길', 'Penha Garcia fossil trail', '강 협곡을 따라 삼엽충 화석이 바위에 드러난 산책길로, 물가에 천연 수영장이 있습니다.', 'A gorge walk where trilobite fossils show in the rock, with natural river pools.', 'Rota dos Fósseis Penha Garcia', 90, 150, group=DAY, b='no', n=FREE)),
 ],
 'marvao': [
  (4, S('아마이아 로마 도시 유적', 'Ammaia Roman city', '마르방 아래 골짜기의 로마 도시 유적과 박물관입니다.', 'The ruins and museum of the Roman city of Ammaia in the valley below Marvão.', 'Ammaia Roman City', 60, 90, group=DAY)),
 ],
 'funchal': [
  (10, S('카부 지랑 스카이워크', 'Cabo Girão skywalk', '약 580m 높이 바다 절벽 끝의 유리 바닥 전망대입니다.', 'A glass-floored viewing platform on a sea cliff about 580 m high.', 'Cabo Girão Skywalk', 45, 60, group=DAY)),
 ],
 'ponta-delgada': [
  (6, S('로그아 두 포구', 'Lagoa do Fogo', '산 정상 분화구에 고인 호수로, 자연 보호 구역 안의 전망대와 산책로에서 봅니다.', 'A crater lake high in the mountains, seen from viewpoints and trails in its nature reserve.', 'Lagoa do Fogo', 90, 180, group=DAY, b='no', n=FREE)),
 ],
 'angra-do-heroismo': [
  (5, S('프라이아 다 비토리아', 'Praia da Vitória', '테르세이라섬 동쪽의 만과 모래 해변이 있는 마을로, 언덕 전망대에서 만이 내려다보입니다.', 'The town and sandy bay on Terceira’s east coast, seen from the hilltop viewpoint.', 'Praia da Vitória', 120, 180, group=DAY, b='no', n=FREE)),
 ],
}


def groups_of(c, cid):
    out = []
    for m in re.finditer(rf'id: "{cid}-h(\d+)"(.*?)\n      \}}', c, re.S):
        g = re.search(r'group: \{ ko: "([^"]*)", en: "([^"]*)" \}', m.group(2))
        out.append((int(m.group(1)), g.groups() if g else None))
    return out


def ins(o, after, new):
    out = []
    for n, gr in o:
        out.append((n, gr))
        if n == after:
            out += [(x, gx if gx != 'same' else gr) for x, gx in new]
    return out


def place(c, cid, steps):
    new = {n for n, _ in ADD[cid]}
    o = [x for x in groups_of(c, cid) if x[0] not in new]
    for after, items in steps:
        o = ins(o, after, items)
    return reorder(c, cid, o)


def main():
    c = rd('cities.ts')
    for cid, items in ADD.items():
        c = add_sights(c, cid, items, VF)
    c = place(c, 'sintra', [(4, [(7, None), (8, None)])])
    c = place(c, 'cascais', [(2, [(7, None)])])
    c = place(c, 'setubal', [(5, [(6, DAY), (7, DAY)])])
    c = place(c, 'faro', [(5, [(7, DAY)])])
    c = place(c, 'tavira', [(4, [(5, DAY)])])
    c = place(c, 'lagos', [(1, [(8, DAY)])])
    c = place(c, 'obidos', [(2, [(6, None)])])
    c = place(c, 'braga', [(3, [(8, None), (9, None)])])
    c = place(c, 'monsanto', [(3, [(4, DAY)])])
    c = place(c, 'marvao', [(3, [(4, DAY)])])
    c = place(c, 'funchal', [(9, [(10, DAY)])])
    c = place(c, 'ponta-delgada', [(5, [(6, DAY)])])
    c = place(c, 'angra-do-heroismo', [(4, [(5, DAY)])])
    wr('cities.ts', c)
    it = rd('itinerary-iberia.ts')
    R = [("sintra: { days: [['', 1, 3, 2, 4]],", "sintra: { days: [['', 1, 3, 2, 4, 8, 7]],")]
    for a, b in R:
        assert it.count(a) == 1, a
        it = it.replace(a, b)
    wr('itinerary-iberia.ts', it)


if __name__ == '__main__':
    main()
