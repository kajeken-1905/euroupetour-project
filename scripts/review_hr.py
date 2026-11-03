#!/usr/bin/env python3
"""Sight review step 1, Croatia (2026-11-04, user request): more sights for the eight Croatian cities and every
list in itinerary order (Zagreb by district). Opening facts only where checked; otherwise duration and practical
notes. Run once."""
import re

from add_daytrip_places import rd, wr
from sight_order import add_sights, blocks, itinerary_order, read_group, reorder

K = '2026-11'


def S(ko, en, dko, den, maps, mn, mx, **vk):
    return dict(ko=ko, en=en, dko=dko, den=den, maps=maps, visit=dict(min=mn, max=mx, **vk))


ADD = {
 'zagreb': [
  (6, S('성 마르코 성당', 'St. Mark’s Church', '자그레브와 크로아티아 문장을 타일로 새긴 지붕으로 유명한 윗마을의 성당입니다. 2020년 지진 뒤 복원을 마치고 2023년 다시 문을 열었습니다.', 'The Upper Town church famous for its tiled roof showing the Zagreb and Croatian coats of arms; restored after the 2020 earthquake and reopened in 2023.', 'St. Mark’s Church Zagreb', 10, 20,
        n='내부는 보통 미사 때만 들어갈 수 있습니다. 지붕은 광장에서 언제든 볼 수 있습니다.|The interior is usually open only for Mass; the roof can be seen from the square at any time.')),
  (7, S('자그레브 대성당', 'Zagreb Cathedral', '두 첨탑이 도시를 내려다보는 카프톨 언덕의 고딕 대성당입니다. 2020년 지진으로 크게 부서져 복원 중이며, 첨탑은 예전보다 약 30m 낮아졌습니다.', 'The Gothic cathedral on Kaptol hill; badly damaged in the 2020 earthquake and still under restoration, its towers now about 30 m shorter than before.', 'Zagreb Cathedral', 20, 30,
        n='복원을 마치고 다시 방문객을 받습니다(대체로 매일 8:00~19:00). 첨탑과 외벽 일부는 아직 공사 중입니다.|Open to visitors again after restoration (generally 8:00–19:00 daily); work continues on the towers and parts of the exterior.', k=K)),
  (8, S('로트르슈차크 탑', 'Lotrščak Tower', '윗마을 성벽의 13세기 탑으로, 매일 정오에 그리치 대포를 쏩니다. 꼭대기에서 아랫마을이 내려다보입니다.', 'A 13th-century tower on the Upper Town walls that fires the Grič cannon at noon every day, with views over the Lower Town.', 'Lotrščak Tower Zagreb', 15, 25,
        n='정오 대포 소리를 들으려면 12시 전에 오세요. 바로 옆에 푸니쿨라 윗역이 있습니다.|Come before noon for the cannon; the upper funicular station is next door.')),
  (9, S('돌의 문', 'Stone Gate', '윗마을로 들어가는 옛 성문으로, 1731년 큰불에도 타지 않았다는 성모 그림 앞에서 지금도 사람들이 기도합니다.', 'The old gate into the Upper Town, where people still pray before an image of the Virgin said to have survived the great fire of 1731.', 'Stone Gate Zagreb', 10, 15)),
  (10, S('트칼치체바 거리', 'Tkalčićeva Street', '옛 개울을 메워 만든 길로, 파스텔색 집마다 카페와 바가 늘어선 자그레브의 대표 산책 거리입니다.', 'A street built over an old stream, its pastel houses lined with cafés and bars — Zagreb’s favourite place to stroll.', 'Tkalčićeva Zagreb', 20, 40)),
  (11, S('즈리네바츠 공원', 'Zrinjevac Park', '아랫마을 ‘녹색 말굽’ 공원 띠의 첫 공원으로, 플라타너스 길과 음악당, 기상 관측탑이 있습니다. 겨울에는 대림절 시장이 열립니다.', 'The first park of the Lower Town’s “Green Horseshoe”, with plane-tree walks, a bandstand and a meteorological column; home to an Advent market in winter.', 'Zrinjevac Park Zagreb', 15, 30)),
  (12, S('그리치 터널', 'Grič Tunnel', '제2차 세계 대전 때 윗마을 아래에 판 방공호 터널로, 지금은 아랫마을과 윗마을을 잇는 무료 통로입니다.', 'A World War II air-raid tunnel under the Upper Town, now a free passage between the Lower and Upper Towns.', 'Grič Tunnel Zagreb', 10, 15,
        n='무료입니다.|Free.')),
 ],
 'dubrovnik': [
  (8, S('렉터 궁전', 'Rector’s Palace', '두브로브니크 공화국의 총독이 한 달씩 머물며 다스리던 고딕·르네상스 궁전으로, 지금은 문화사 박물관입니다.', 'The Gothic-Renaissance palace where the Republic of Ragusa’s rector lived for his one-month term; now the Cultural History Museum.', 'Rector’s Palace Dubrovnik', 45, 60,
        s='https://www.dumus.hr/', n='두브로브니크 패스에 입장이 포함됩니다.|Admission is included in the Dubrovnik Pass.')),
  (9, S('프란체스코 수도원', 'Franciscan Monastery', '필레 문 바로 안쪽의 수도원으로, 로마네스크 회랑과 1317년부터 문을 연 유럽에서 손꼽히게 오래된 약국이 있습니다.', 'The monastery just inside the Pile Gate, with a Romanesque cloister and one of Europe’s oldest pharmacies, open since 1317.', 'Franciscan Monastery Dubrovnik', 30, 45,
        n='회랑과 박물관은 유료이고 약국은 지금도 영업합니다.|The cloister and museum are ticketed; the pharmacy still trades.')),
  (10, S('필레 문', 'Pile Gate', '구시가의 서쪽 정문으로, 해자 위 돌다리와 성 블라호 조각을 지나면 스트라둔 거리가 시작됩니다.', 'The old town’s western main gate; over the stone bridge and under the statue of St Blaise, the Stradun begins.', 'Pile Gate Dubrovnik', 10, 15)),
  (11, S('옛 항구', 'Old Port', '성벽 동쪽의 작은 항구로, 로크룸섬과 차브타트로 가는 배와 유리 바닥 배가 떠납니다.', 'The little harbour on the east side of the walls, where boats leave for Lokrum, Cavtat and glass-bottom tours.', 'Old Port Dubrovnik', 15, 30)),
  (12, S('도미니코 수도원', 'Dominican Monastery', '플로체 문 안쪽의 수도원으로, 고딕 회랑과 두브로브니크 화가들의 그림을 모은 박물관이 있습니다.', 'The monastery inside the Ploče Gate, with a Gothic cloister and a museum of Dubrovnik painting.', 'Dominican Monastery Dubrovnik', 30, 45)),
  (13, S('반예 해변', 'Banje Beach', '플로체 문 바로 밖의 자갈 해변으로, 바다 쪽에서 성벽과 옛 항구를 바라볼 수 있습니다.', 'The pebble beach just outside the Ploče Gate, looking back at the walls and the Old Port.', 'Banje Beach Dubrovnik', 60, 120)),
  (14, S('스톤 성벽', 'Walls of Ston', '두브로브니크 공화국이 소금밭을 지키려고 쌓은 길이 5km 남짓의 성벽으로, 마을은 굴과 홍합 양식으로도 유명합니다.', 'The 5-plus-kilometre walls the Republic of Ragusa built to guard its salt pans; the village is also known for its oysters and mussels.', 'Ston Walls', 90, 150,
        n='두브로브니크에서 차나 버스로 약 1시간입니다. 성벽은 유료이고 오르막 계단이 가파릅니다.|About 1 hour from Dubrovnik by car or bus; the walls are ticketed and the climbs are steep.')),
 ],
 'split': [
  (7, S('페리스틸', 'Peristyle', '디오클레티아누스 궁전의 중앙 열주 광장으로, 황제가 모습을 드러내던 자리 앞에서 여름 저녁마다 공연이 열립니다.', 'The colonnaded central court of Diocletian’s Palace, where the emperor once appeared; summer evenings bring performances.', 'Peristyle Split', 15, 20)),
  (8, S('궁전 지하 홀', 'Diocletian’s Cellars', '궁전 윗층을 받치던 거대한 지하 홀로, 로마 시대 구조가 거의 그대로 남아 있습니다.', 'The vast halls that held up the palace’s upper floors, with the Roman layout almost intact.', 'Diocletian’s Cellars Split', 20, 30,
        n='가운데 통로는 무료 상가이고 양쪽 홀은 유료입니다.|The central passage is a free market; the side halls are ticketed.')),
  (9, S('황금 문과 닌의 그레고리우스 상', 'Golden Gate & Gregory of Nin', '궁전 북문인 황금 문 밖에 메슈트로비치가 만든 거대한 그레고리우스 주교상이 서 있습니다. 엄지발가락을 문지르면 행운이 온다고 합니다.', 'Outside the palace’s north Golden Gate stands Meštrović’s giant statue of Bishop Gregory of Nin; rubbing his big toe is said to bring luck.', 'Gregory of Nin statue Split', 10, 15)),
  (10, S('나로드니 광장(피아차)', 'People’s Square (Pjaca)', '궁전 서쪽 밖의 중세 광장으로, 옛 시청과 흰 대리석 바닥이 있는 스플리트 구시가의 중심입니다.', 'The medieval square west of the palace, with the old town hall and a white marble pavement — the heart of the old town.', 'Narodni trg Split', 10, 20)),
  (11, S('메슈트로비치 미술관', 'Meštrović Gallery', '조각가 이반 메슈트로비치가 여름 별장으로 지은 저택에 그의 작품을 모은 미술관입니다.', 'The sculptor Ivan Meštrović’s summer villa, now a gallery of his work.', 'Meštrović Gallery Split', 60, 90,
        s='https://www.mestrovic.hr/', n='마리얀 언덕 남쪽 해안길에 있어 구시가에서 걸어서 약 25분입니다.|On the coast road south of Marjan, about 25 minutes’ walk from the old town.')),
  (12, S('바치비체 해변', 'Bačvice Beach', '구시가에서 걸어서 갈 수 있는 모래 해변으로, 얕은 물에서 공을 치는 ‘피치긴’ 놀이가 이곳에서 시작됐습니다.', 'The sandy beach within walking distance of the old town, birthplace of picigin, the shallow-water ball game.', 'Bačvice Beach Split', 60, 120)),
  (13, S('클리스 요새', 'Klis Fortress', '스플리트 뒤 바위 고개를 지키던 요새로, 오스만 제국과의 전쟁 무대였고 드라마 ‘왕좌의 게임’ 촬영지로도 쓰였습니다.', 'The fortress guarding the rocky pass behind Split, fought over with the Ottomans and later used as a Game of Thrones location.', 'Klis Fortress', 60, 90,
        n='스플리트에서 버스로 약 30분입니다.|About 30 minutes by bus from Split.')),
  (14, S('살로나 유적', 'Salona', '디오클레티아누스의 고향이자 로마 달마티아주의 주도였던 도시 유적으로, 원형 극장과 초기 기독교 묘지가 남아 있습니다.', 'The ruins of Diocletian’s home town and capital of Roman Dalmatia, with an amphitheatre and early Christian cemeteries.', 'Salona Solin', 60, 90,
        n='스플리트에서 버스로 약 20분입니다. 클리스 요새와 함께 다녀오기 좋습니다.|About 20 minutes by bus from Split; easy to combine with Klis Fortress.')),
 ],
 'zadar': [
  (6, S('성 아나스타시아 대성당', 'Cathedral of St. Anastasia', '달마티아에서 가장 큰 로마네스크 대성당으로, 종탑에 오르면 구시가와 바다가 한눈에 보입니다.', 'Dalmatia’s largest Romanesque cathedral; its bell tower looks over the old town and the sea.', 'Cathedral of St. Anastasia Zadar', 20, 40,
        n='종탑은 유료이며 겨울에는 닫을 수 있습니다.|The bell tower is ticketed and may close in winter.')),
  (7, S('육지 문', 'Land Gate', '베네치아 공화국이 1543년에 세운 구시가 정문으로, 날개 달린 사자 부조가 있습니다.', 'The old town’s main gate, built by Venice in 1543 and topped with the winged lion.', 'Land Gate Zadar', 10, 15)),
  (8, S('다섯 우물 광장', 'Five Wells Square', '오스만 포위에 대비해 판 저수조 위의 광장으로, 우물 다섯 개가 한 줄로 서 있습니다.', 'A square over a cistern dug against Ottoman sieges, with five wellheads in a row.', 'Five Wells Square Zadar', 10, 15)),
  (9, S('고대 유리 박물관', 'Museum of Ancient Glass', '달마티아에서 출토된 로마 시대 유리 그릇을 모은 박물관입니다.', 'A museum of Roman glassware found across Dalmatia.', 'Museum of Ancient Glass Zadar', 45, 60)),
  (10, S('닌', 'Nin', '석호 위 작은 섬 마을로, ‘세계에서 가장 작은 대성당’이라 불리는 성 십자가 성당과 소금밭이 있습니다.', 'A tiny island town in a lagoon, with the Church of the Holy Cross, dubbed the world’s smallest cathedral, and salt pans.', 'Nin Croatia', 120, 180,
        n='자다르에서 버스로 약 30분입니다.|About 30 minutes by bus from Zadar.')),
 ],
 'rovinj': [
  (6, S('발비 아치', 'Balbi’s Arch', '옛 성문 자리에 1680년 세운 바로크 아치로, 한쪽에는 베네치아 사자, 다른 쪽에는 튀르크인 얼굴이 새겨져 있습니다.', 'A Baroque arch of 1680 on the site of an old town gate, with the Venetian lion on one side and a Turk’s head on the other.', 'Balbi Arch Rovinj', 5, 10)),
  (7, S('그리시아 거리', 'Grisia Street', '성 에우페미아 성당으로 오르는 돌길로, 화가들의 작업실과 갤러리가 이어집니다.', 'The cobbled lane up to St Euphemia, lined with artists’ studios and galleries.', 'Grisia Rovinj', 20, 30)),
  (8, S('바타나 하우스', 'Batana House', '로빈의 납작한 나무 고깃배 ‘바타나’와 어부들의 생활을 보여 주는 작은 박물관입니다.', 'A small museum of the batana, Rovinj’s flat-bottomed wooden fishing boat, and the fishermen’s life.', 'Batana House Rovinj', 30, 45)),
  (9, S('림 피오르', 'Lim Bay', '바다가 내륙으로 10km 넘게 파고든 좁은 만으로, 굴·홍합 양식장과 해적 동굴이 있습니다.', 'A narrow inlet reaching more than 10 km inland, with oyster and mussel farms and a “pirate cave”.', 'Limski kanal', 120, 180,
        n='로빈에서 보트 투어로 많이 가며 대략 봄부터 가을까지 운항합니다.|Usually visited by boat tour from Rovinj, running roughly spring to autumn.')),
 ],
 'hvar': [
  (6, S('흐바르 대성당', 'Hvar Cathedral', '성 스테판 광장 끝의 르네상스·바로크 대성당으로, 네 층짜리 종탑이 광장을 내려다봅니다.', 'The Renaissance-Baroque cathedral at the end of St Stephen’s Square, overlooked by its four-storey bell tower.', 'Hvar Cathedral', 15, 20)),
  (7, S('흐바르 프란체스코 수도원', 'Franciscan Monastery, Hvar', '바닷가 15세기 수도원으로, 회랑과 박물관에 ‘최후의 만찬’ 대형 그림이 있습니다.', 'A 15th-century monastery by the sea, whose cloister museum holds a large Last Supper painting.', 'Franciscan Monastery Hvar', 30, 45)),
  (8, S('아르세날과 흐바르 극장', 'Arsenal & Hvar Theatre', '베네치아 갤리선을 수리하던 조선소 위에 1612년 공공 극장을 얹은 건물로, 유럽에서 손꼽히게 오래된 공공 극장입니다.', 'The Venetian galley arsenal topped in 1612 by one of Europe’s oldest public theatres.', 'Arsenal Hvar', 20, 30)),
 ],
 'trogir': [
  (5, S('북문(육지 문)', 'North Town Gate', '다리를 건너 구시가로 들어가는 르네상스 성문으로, 위에 트로기르의 수호성인 성 이반 오르시니 상이 있습니다.', 'The Renaissance gate at the end of the bridge into the old town, topped by the town’s patron saint, St John of Trogir.', 'North Town Gate Trogir', 5, 10)),
  (6, S('성 니콜라 수녀원(카이로스)', 'St. Nicholas Convent (Kairos)', '베네딕도회 수녀원의 작은 소장품전으로, 시간의 신 ‘카이로스’를 새긴 그리스 시대 부조가 대표 작품입니다.', 'A Benedictine convent’s small collection, best known for a Greek relief of Kairos, god of the fleeting moment.', 'Kairos St Nicholas Monastery Trogir', 15, 25)),
  (7, S('치피코 궁전', 'Ćipiko Palace', '대성당 맞은편의 15세기 귀족 저택으로, 고딕 창과 르네상스 장식이 섞인 정면이 볼거리입니다.', 'A 15th-century noble palace opposite the cathedral, with a façade mixing Gothic windows and Renaissance carving.', 'Cipiko Palace Trogir', 5, 10)),
 ],
 'plitvice': [
  (5, S('코자크 호수', 'Lake Kozjak', '플리트비체에서 가장 큰 호수로, 전기 배가 아래 호수와 위 호수 구간을 이어 줍니다.', 'The largest of the Plitvice lakes, crossed by electric boats linking the Lower and Upper Lakes.', 'Kozjak Plitvice', 20, 30,
        n='배는 입장권에 포함되며 겨울에는 운항하지 않을 수 있습니다.|The boat is included in the ticket and may not run in winter.')),
  (6, S('위 호수', 'Upper Lakes', '숲속 계단식 호수 12개가 이어지는 구간으로, 나무 데크를 따라 크고 작은 폭포를 지나갑니다.', 'Twelve stepped lakes in the forest, with boardwalks past waterfalls large and small.', 'Upper Lakes Plitvice', 120, 180)),
  (7, S('아래 호수', 'Lower Lakes', '석회암 협곡 안의 호수 네 곳으로, 벨리키 슬라프와 가장 유명한 전망대가 이 구간에 있습니다.', 'Four lakes in a limestone canyon, home to the Veliki Slap and the best-known viewpoints.', 'Lower Lakes Plitvice', 60, 120)),
 ],
}

IT = {
 "  zagreb: [4, 3, 1, 2, 5],": "  zagreb: [4, 11, 3, 7, 10, 9, 6, 1, 2, 8, 12, 5],",
 "  dubrovnik: { days: [['', 2, 7, 6, 1, 3, 4]], trips: [['로크룸 섬|Lokrum', 5]] },":
 "  dubrovnik: {\n    days: [\n      ['구시가와 성벽|Old town & walls', 10, 9, 2, 7, 8, 6, 12, 11, 1],\n      ['로브리예나츠와 스르지산|Lovrijenac & Mount Srđ', 3, 13, 4],\n    ],\n    trips: [\n      ['로크룸 섬|Lokrum', 5],\n      ['스톤|Ston', 14],\n    ],\n  },",
 "  split: { days: [['', 2, 1, 6, 4, 3]], trips: [['흐바르·브라치|Hvar or Brač', 5]] },":
 "  split: {\n    days: [['', 9, 1, 7, 6, 4, 8, 10, 2, 3, 11, 12]],\n    trips: [\n      ['흐바르·브라치|Hvar or Brač', 5],\n      ['클리스와 살로나|Klis & Salona', 13, 14],\n    ],\n  },",
 "  zadar: [5, 4, 3, 1, 2],": "  zadar: { days: [['', 7, 8, 5, 4, 3, 6, 9, 1, 2]], trips: [['닌|Nin', 10]] },",
 "  rovinj: { days: [['', 3, 2, 1, 4]], trips: [['붉은 섬|Red Island', 5]] },":
 "  rovinj: {\n    days: [['', 3, 8, 6, 2, 7, 1, 4]],\n    trips: [\n      ['붉은 섬|Red Island', 5],\n      ['림 피오르|Lim Bay', 9],\n    ],\n  },",
 "    days: [['', 2, 1]],\n    trips: [\n      ['파클레니 제도|Pakleni Islands', 3],":
 "    days: [['', 2, 6, 8, 7, 1]],\n    trips: [\n      ['파클레니 제도|Pakleni Islands', 3],",
 "  trogir: [4, 1, 3, 2],": "  trogir: [5, 4, 1, 7, 6, 3, 2],",
 "  plitvice: { days: [['', 1, 3, 2]], trips: [['라스토케|Rastoke', 4]] },":
 "  plitvice: { days: [['', 7, 1, 5, 6, 3, 2]], trips: [['라스토케|Rastoke', 4]] },",
}

DAY = ('근교 당일치기', 'Day trip')
ZAGREB = [
    (('윗마을(고르니 그라드)', 'Upper Town (Gornji grad)'), [1, 9, 6, 2, 8, 12]),
    (('카프톨', 'Kaptol'), [7, 3, 10]),
    (('아랫마을(도니 그라드)', 'Lower Town (Donji grad)'), [4, 11]),
    (('미로고이', 'Mirogoj'), [5]),
]


def main():
    cities = rd('cities.ts')
    for cid, items in ADD.items():
        cities = add_sights(cities, cid, items, 'visit-balkan.ts')
    it = rd('itinerary-south.ts')
    for old, new in IT.items():
        assert it.count(old) == 1, old
        it = it.replace(old, new)
    wr('itinerary-south.ts', it)
    cities = reorder(cities, 'zagreb', [(n, g) for g, ns in ZAGREB for n in ns])
    for cid in [c for c in ADD if c != 'zagreb']:
        by = blocks(cities, cid)
        order = itinerary_order(it, cid, set(by))
        cities = reorder(cities, cid, [(n, read_group(by[n])) for n in order])
        print(cid, order)
    wr('cities.ts', cities)


if __name__ == '__main__':
    main()
