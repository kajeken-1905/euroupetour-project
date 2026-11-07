#!/usr/bin/env python3
"""Italy step 1, south (Campania, Puglia, Basilicata, Calabria), 2026-11-07. Thin descriptions rewritten; naples-h4
'Mount Vesuvius views' becomes the Vesuvius crater trail (day trip, new photo); amalfi-h5 'Positano day views' renamed.
More sights: Naples (Sansevero, Napoli Sotterranea, Plebiscito & Royal Palace, San Martino, Capodimonte, Caserta), Pompeii
(House of the Vettii), Sorrento, Amalfi (Atrani), Capri, Bari, Lecce, Matera. Run once."""
import re
import urllib.parse
from add_daytrip_places import rd, wr
from sight_order import add_sights, blocks, itinerary_order, read_group, reorder
from review_sk import S

DAY = ('근교 당일치기', 'Day trip')
OLD_NEAR = ('근교', 'Nearby')
REWRITE = {
 'naples-h1': ('스파카나폴리', 'Spaccanapoli', '구시가를 일직선으로 가르는 좁은 옛길로, 성당과 빨래 걸린 골목, 크리스마스 인형 공방 거리(산 그레고리오 아르메노)가 이어집니다.', 'The narrow old street slicing straight through the historic centre, past churches, laundry-hung lanes and the nativity-workshop street of San Gregorio Armeno.', None),
 'naples-h2': ('나폴리 국립고고학박물관', 'National Archaeological Museum', '폼페이·헤르쿨라네움에서 옮겨 온 모자이크와 프레스코, 파르네세 가문의 고대 조각을 모은 박물관입니다.', 'Mosaics and frescoes moved from Pompeii and Herculaneum, and the Farnese collection of ancient sculpture.', None),
 'naples-h3': ('카스텔 델로보', 'Castel dell’Ovo', '바다로 튀어나온 작은 섬 위의 옛 성으로, 성벽 위에서 나폴리만과 베수비오가 보입니다.', 'The old castle on an islet jutting into the bay, with views of the gulf and Vesuvius from its ramparts.', None),
 'naples-h4': ('베수비오 화산', 'Mount Vesuvius', '폼페이를 묻은 활화산으로, 정상 부근 주차장에서 30분쯤 걸어 올라 분화구 가장자리를 봅니다.', 'The active volcano that buried Pompeii—a 30-minute walk from the upper car park to the crater rim.', 'Gran Cono del Vesuvio'),
 'naples-h5': ('나폴리 해안 산책로', 'Lungomare', '카스텔 델로보에서 키아이아까지 차 없는 해안길로, 해 질 녘 산책하기 좋습니다.', 'The car-free seafront from Castel dell’Ovo to Chiaia, best for a sunset stroll.', None),
 'pompeii-h5': ('헤르쿨라네움', 'Herculaneum', '화산재가 아닌 화산 진흙에 묻혀 나무 구조물과 2층 집까지 남은, 폼페이보다 작고 보존 상태가 좋은 유적입니다.', 'Buried in volcanic mud rather than ash, so wooden beams and upper floors survive—smaller and better preserved than Pompeii.', None),
 'amalfi-h2': ('아말피 항구와 해변', 'Amalfi harbour & beach', '배가 드나드는 항구와 마을 앞 해변으로, 절벽에 층층이 붙은 마을이 한눈에 보입니다.', 'The ferry harbour and town beach, with the whole cliff-clinging town in view.', None),
 'amalfi-h4': ('방앗간 계곡', 'Valle dei Mulini', '아말피 종이를 만들던 옛 물방앗간 폐허가 남은 계곡 산책로입니다.', 'A valley walk past the ruined water mills that once made Amalfi paper.', None),
 'amalfi-h5': ('포지타노', 'Positano', '파스텔 색 집들이 절벽을 따라 바다로 쏟아지는 해안 마을로, 아말피에서 배로 약 25분입니다.', 'The coastal village of pastel houses tumbling down the cliffs to the sea, about 25 min by boat from Amalfi.', None),
 'positano-h5': ('포지타노 전망 포인트', 'Positano viewpoint', '크리스토포로 콜롬보 거리 위쪽 굽잇길에서 마을 전체가 바다로 흘러내리는 모습을 봅니다.', 'From the bends of Via Cristoforo Colombo above town, the whole village spills down to the sea.', 'Via Cristoforo Colombo Positano'),
 'bari-h2': ('바리 베키아', 'Bari Vecchia', '성당과 작은 광장이 숨은 구시가 미로 골목으로, 저녁이면 주민들이 골목에 의자를 내놓고 앉습니다.', 'The old-town maze of lanes hiding churches and little squares, where residents set chairs out in the evening.', None),
}
ADD = {
 'naples': [
  (9, S('산세베로 예배당', 'Cappella Sansevero', '대리석을 투명한 베일처럼 깎은 조각 ‘베일에 싸인 그리스도’가 있는 예배당입니다.', 'The chapel holding the Veiled Christ, marble carved to look like a transparent shroud.', 'Cappella Sansevero', 30, 45, b='rec')),
  (10, S('나폴리 지하 세계', 'Napoli Sotterranea', '그리스·로마 시대 채석장과 수로, 2차 대전 방공호로 쓰인 지하 40m를 안내 투어로 걷습니다.', 'A guided walk 40 m below the streets through Greek and Roman quarries, aqueducts and WWII shelters.', 'Napoli Sotterranea', 75, 90)),
  (11, S('플레비시토 광장과 왕궁', 'Piazza del Plebiscito & Royal Palace', '반원 회랑이 둘러싼 큰 광장과 부르봉 왕가의 궁전, 옆 산 카를로 극장입니다.', 'The vast square with its curved colonnade, the Bourbon royal palace and the San Carlo opera house beside it.', 'Palazzo Reale di Napoli', 60, 90)),
  (12, S('산 마르티노 수도원과 산텔모 성', 'Certosa di San Martino & Castel Sant’Elmo', '보메로 언덕 위 수도원 박물관과 별 모양 성채로, 나폴리만 전체가 내려다보입니다.', 'The monastery museum and star-shaped fortress on the Vomero hill, overlooking the whole bay.', 'Certosa di San Martino', 90, 120)),
  (13, S('카포디몬테 미술관', 'Museo di Capodimonte', '언덕 위 부르봉 왕궁에 카라바조·티치아노 등 회화를 모은 미술관과 넓은 공원입니다.', 'A Bourbon hilltop palace of paintings by Caravaggio, Titian and others, set in a large park.', 'Museo di Capodimonte', 120, 150, c='wed')),
  (14, S('카세르타 왕궁', 'Royal Palace of Caserta', '베르사유를 본뜬 부르봉 왕가의 거대한 궁전과 3km 폭포 정원으로, 유네스코 세계유산입니다.', 'The Bourbon kings’ colossal palace modelled on Versailles, with a 3 km cascade garden; a UNESCO World Heritage Site.', 'Reggia di Caserta', 180, 240, group=DAY, c='tue',
        n='나폴리에서 기차로 약 40분이고, 궁전 정면이 카세르타역 바로 앞입니다.|About 40 min by train from Naples; the palace faces Caserta station.')),
 ],
 'pompeii': [
  (6, S('베티의 집', 'House of the Vettii', '부유한 해방 노예 형제의 저택으로, 붉은 벽화와 정원이 20년 복원 끝에 다시 열렸습니다.', 'The mansion of two wealthy freedmen brothers, its red frescoes and garden reopened after a 20-year restoration.', 'Casa dei Vettii Pompei', 20, 30)),
 ],
 'sorrento': [
  (5, S('레지나 조반나 해수 풀', 'Bagni della Regina Giovanna', '로마 빌라 유적 아래 바위로 둘러싸인 천연 해수 풀로, 수영하러 많이 갑니다.', 'A natural rock-ringed sea pool below the ruins of a Roman villa, popular for swimming.', 'Bagni della Regina Giovanna', 90, 180,
        n='시내에서 걸어서 약 40분이거나 버스 뒤 걷습니다. 여름엔 붐빕니다.|About 40 min on foot from town, or bus then walk; crowded in summer.')),
 ],
 'amalfi': [
  (7, S('아트라니', 'Atrani', '아말피에서 해안길로 걸어서 10분인 작은 마을로, 광장과 해변이 조용합니다.', 'A tiny village a 10-minute walk along the coast from Amalfi, with a quiet square and beach.', 'Atrani', 45, 60)),
 ],
 'capri': [
  (6, S('빌라 산 미켈레', 'Villa San Michele', '아나카프리 절벽 위 스웨덴 의사의 저택으로, 스핑크스 테라스에서 만이 내려다보입니다.', 'A Swedish doctor’s clifftop villa at Anacapri, with a sphinx-guarded terrace above the bay.', 'Villa San Michele Anacapri', 45, 60)),
  (7, S('빌라 요비스', 'Villa Jovis', '티베리우스 황제가 말년을 보낸 섬 동쪽 끝 절벽 위 궁전 유적입니다.', 'The ruined clifftop palace at the island’s eastern tip where Emperor Tiberius spent his last years.', 'Villa Jovis', 90, 120,
        n='피아체타에서 오르막길로 걸어서 약 45분입니다.|About 45 min uphill on foot from the Piazzetta.')),
 ],
 'bari': [
  (6, S('산 사비노 대성당', 'Bari Cathedral', '바리 베키아 안의 로마네스크 대성당으로, 지하에 비잔틴 시대 유적이 있습니다.', 'The Romanesque cathedral inside Bari Vecchia, with Byzantine remains beneath it.', 'Cattedrale di San Sabino Bari', 20, 30)),
 ],
 'lecce': [
  (5, S('파자노 박물관', 'Museo Faggiano', '하수관을 고치려다 집 밑에서 메사피족부터 중세까지의 유적이 쏟아져 나온 개인 박물관입니다.', 'A private museum born when a family digging for a sewer pipe found layers from the Messapians to the Middle Ages under their house.', 'Museo Faggiano Lecce', 45, 60)),
  (6, S('오트란토', 'Otranto', '이탈리아 동쪽 끝 바닷가 성곽 마을로, 대성당 바닥의 12세기 생명의 나무 모자이크가 유명합니다.', 'The walled seaside town at Italy’s eastern tip, famous for the 12th-century Tree of Life mosaic floor in its cathedral.', 'Cattedrale di Otranto', 240, 360, group=DAY,
        n='레체에서 기차로 약 1시간 10분입니다.|About 1 hr 10 by train from Lecce.')),
 ],
 'matera': [
  (6, S('팔롬바로 룽고', 'Palombaro Lungo', '광장 아래 숨은 거대한 빗물 저장고로, 사시 사람들이 물을 모으던 지하 성당 같은 공간입니다.', 'A huge rainwater cistern hidden under the main square, the cathedral-like vault that supplied the Sassi.', 'Palombaro Lungo Matera', 30, 30)),
 ],
}
IT = [
 ("  naples: { days: [['', 2, 6, 1, 7, 5, 3, 4]], trips: [['파에스툼|Paestum', 8]] },",
  "  naples: {\n    days: [\n      ['구시가와 박물관|Historic centre & museums', 13, 2, 6, 9, 1, 10, 7],\n      ['왕궁과 해안|Royal Naples & the seafront', 12, 11, 5, 3],\n    ],\n    trips: [['베수비오|Vesuvius', 4], ['파에스툼|Paestum', 8], ['카세르타 왕궁|Caserta', 14]],\n  },"),
 ("  pompeii: { days: [['폼페이 유적|Pompeii ruins', 2, 1, 3, 4]], trips: [['헤르쿨라네움|Herculaneum', 5]] },",
  "  pompeii: { days: [['폼페이 유적|Pompeii ruins', 2, 1, 6, 3, 4]], trips: [['헤르쿨라네움|Herculaneum', 5]] },"),
 ("  sorrento: [1, 4, 3, 2],", "  sorrento: [1, 4, 3, 2, 5],"),
 ("  amalfi: { days: [['', 1, 3, 4, 2]], trips: [['포지타노|Positano', 5], ['라벨로|Ravello', 6]] },",
  "  amalfi: { days: [['', 1, 3, 4, 2, 7]], trips: [['포지타노|Positano', 5], ['라벨로|Ravello', 6]] },"),
 ("  capri: [1, 4, 3, 5, 2],", "  capri: { days: [['', 1, 4, 6, 3, 5, 2], ['빌라 요비스|Villa Jovis', 7]] },"),
 ("  bari: [4, 3, 2, 1, 5],", "  bari: [4, 3, 2, 1, 6, 5],"),
 ("  lecce: [4, 1, 3, 2],", "  lecce: { days: [['', 4, 1, 5, 3, 2]], trips: [['오트란토|Otranto', 6]] },"),
 ("  matera: [3, 1, 2, 5, 4],", "  matera: [6, 3, 1, 2, 5, 4],"),
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
        c = add_sights(c, cid, items, 'visit-it.ts')
    it = rd('itinerary-it.ts')
    for a, b in IT:
        assert it.count(a) == 1, a[:60]
        it = it.replace(a, b)
    wr('itinerary-it.ts', it)
    for cid in list(ADD):
        by = blocks(c, cid)
        m = re.search(rf"^  '?{cid}'?: (.*?)(?=^  [a-z'/])", it, re.M | re.S)
        trips = {int(x) for t in re.findall(r"trips: \[(.*)\]", m.group(1), re.S) for x in re.findall(r", (\d+)", t)}
        c = reorder(c, cid, [(n, DAY if (n in trips or read_group(by[n]) == OLD_NEAR) else read_group(by[n])) for n in itinerary_order(it, cid, set(by))])
    wr('cities.ts', c)
    v = rd('visit-it.ts')
    v = re.sub(r"  'naples-h4': v\(.*\),", "  'naples-h4': v(120, 180, { n: '분화구 길은 입장 시간 지정 표를 온라인으로 미리 사야 하고, 바람이 세면 닫습니다.|Crater-trail tickets are timed and must be bought online in advance; the trail closes in high wind.' }),", v)
    wr('visit-it.ts', v)


if __name__ == '__main__':
    main()
