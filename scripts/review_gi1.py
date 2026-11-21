#!/usr/bin/env python3
"""Gibraltar step 1, 2026-11-21. Blurb and descriptions rewritten (English Wikipedia: Rock 426 m, ~300 macaques,
Great Siege Tunnels 1779–83, Europa Point lighthouse 1841 and the Ibrahim-al-Ibrahim mosque). New: Main Street & Casemates
(Grand Casemates 1817), Moorish Castle (Marinid, Tower of Homage), National Museum (14th-century Moorish baths),
Trafalgar Cemetery, Alameda Botanic Gardens (6 ha), Windsor Suspension Bridge (71 m over a 50 m gorge, 2016),
Skywalk (340 m, glass floor), Mediterranean Steps, Catalan Bay. Run once."""
import re
from add_daytrip_places import rd, wr
from sight_order import add_sights, reorder
from review_sk import S

FREE = '무료입니다.|Free.'
NR = '자연보호구역 입장권에 포함됩니다.|Included in the Nature Reserve ticket.'
BLURB = ('이베리아반도 남쪽 끝, 높이 426m 석회암 바위산 아래 자리한 영국 해외 영토입니다. 메인 스트리트엔 영국식 펍과 상점이 늘어서 있고, 바위산 위 자연보호구역엔 야생 바르버리 원숭이와 종유석 동굴, 18세기 포위전 때 뚫은 터널, 무어인의 성이 있습니다. 남쪽 끝 유로파 포인트에선 바다 건너 모로코가 보이며, 스페인 라 리네아에서 걸어서 국경을 건너 들어옵니다.',
         'A British Overseas Territory at the southern tip of Iberia, beneath a 426 m limestone rock. Main Street is lined with British pubs and shops, while the nature reserve on the Upper Rock holds wild Barbary macaques, a stalactite cave, tunnels dug during an 18th-century siege and a Moorish castle. From Europa Point at the southern tip you can see Morocco across the strait, and most visitors walk in over the border from La Línea in Spain.')

REWRITE = {
 'gibraltar-h1': (None, None, '지중해 서쪽 입구를 지키는 높이 426m의 석회암 바위산으로, 고대엔 ‘헤라클레스의 기둥’ 북쪽 기둥으로 불렸습니다. 위쪽 대부분이 자연보호구역이며, 걸어서 오르거나 미니버스 투어로 전망대를 돌아봅니다.', 'The 426 m limestone rock guarding the western entrance to the Mediterranean, the northern Pillar of Hercules of antiquity. Most of the upper area is a nature reserve, explored on foot or by minibus tour.'),
 'gibraltar-h3': (None, None, '바위산 속 종유석이 늘어선 석회암 동굴로, 가장 큰 방은 조명을 받는 공연장으로 쓰여 음악회가 열립니다.', 'A limestone cave hung with stalactites inside the Rock; its largest chamber is lit up and used as a concert hall.'),
 'gibraltar-h4': (None, None, '바위산에 사는 약 300마리의 야생 원숭이로, 유럽에서 유일한 야생 원숭이 무리입니다. 에이프스 덴(원숭이 쉼터) 둘레에서 가장 쉽게 만납니다.', 'About 300 wild macaques live on the Rock, the only wild monkey population in Europe; they are easiest to see around the Apes’ Den.'),
 'gibraltar-h5': (None, None, '지브롤터 남쪽 끝 곶으로, 1841년 불을 밝힌 등대와 모로코를 바라보는 이브라힘 알 이브라힘 모스크가 있습니다. 맑은 날엔 바다 건너 아프리카 해안이 보입니다.', 'The southern tip of Gibraltar, with a lighthouse first lit in 1841 and the Ibrahim-al-Ibrahim Mosque facing Morocco; on clear days the African coast is in view across the strait.'),
 'gibraltar-h6': (None, None, '대포위전(1779~1783) 때 영국군이 바위산 북쪽 끝 단단한 석회암을 손으로 뚫어 만든 포대 터널로, 대포 구멍 너머로 스페인 쪽 땅이 내려다보입니다.', 'Gun tunnels dug by hand through solid limestone at the north end of the Rock by the British during the Great Siege (1779–83), with embrasures looking out over Spain.'),
}

ADD = {
 'gibraltar': [
  (7, S('메인 스트리트와 캐즈메이츠 광장', 'Main Street & Casemates Square', '시내를 남북으로 가로지르는 중심 거리와 그 북쪽 끝 광장으로, 광장 이름은 1817년 완공된 영국군 포대 막사에서 왔습니다. 펍·식당·면세 상점이 늘어서 있습니다.', 'The main street running through town and the square at its north end, named after the British casemates completed in 1817; lined with pubs, restaurants and duty-free shops.', 'Grand Casemates Square Gibraltar', 45, 90, b='no', n=FREE)),
  (8, S('무어인의 성', 'Moorish Castle', '시내 위 언덕의 중세 요새로, 마린 왕조가 지은 성이며 우뚝한 ‘오마주 탑’이 시내 어디서나 보입니다.', 'A medieval fortress on the hill above town built by the Marinid dynasty, its massive Tower of Homage visible from all over Gibraltar.', 'Moorish Castle Gibraltar', 30, 45, n=NR)),
  (9, S('지브롤터 국립박물관', 'Gibraltar National Museum', '1930년 문을 연 박물관으로, 바위산의 오랜 역사와 자연을 보여 주며 14세기 무어인 목욕탕 유적이 건물 안에 남아 있습니다.', 'A museum founded in 1930 on the Rock’s long history and natural history, with the remains of a 14th-century Moorish bathhouse inside.', 'Gibraltar National Museum', 45, 60)),
  (10, S('트라팔가르 묘지', 'Trafalgar Cemetery', '옛 성벽 남쪽 해자 자리에 있는 묘지로, 1805년 트라팔가르 해전 전사자 두 명과 다른 해전 전사자, 1804~1814년 황열병 희생자들이 묻혀 있습니다.', 'A cemetery in a former defensive ditch south of the city walls, holding two men killed at Trafalgar in 1805 along with casualties of other sea battles and the yellow-fever epidemics of 1804–14.', 'Trafalgar Cemetery Gibraltar', 15, 20, b='no', n=FREE)),
  (11, S('알라메다 식물원', 'Alameda Botanic Gardens', '바위산 기슭 약 6ha의 식물원으로, 시내에서 바위산 위로 오르는 길목에 있습니다.', 'A botanic garden of about 6 hectares at the foot of the Rock, on the way up from town.', 'Gibraltar Botanic Gardens Alameda', 30, 60, b='no', n=FREE)),
  (12, S('윈저 현수교', 'Windsor Suspension Bridge', '깊이 50m 협곡 위로 걸린 길이 71m의 보행 현수교로, 2016년 바위산 자연보호구역 안에 놓였습니다.', 'A 71 m pedestrian suspension bridge over a 50 m-deep gorge, opened in 2016 in the Upper Rock Nature Reserve.', 'Windsor Suspension Bridge Gibraltar', 15, 20, b='no', n=NR)),
  (13, S('스카이워크', 'Skywalk', '해발 340m 바위 끝에 매단 유리 바닥 전망대로, 발아래로 지중해와 해협이 내려다보입니다.', 'A glass-floored viewing platform at 340 m above sea level, with the Mediterranean and the strait beneath your feet.', 'Gibraltar Skywalk', 15, 20, b='no', n=NR)),
  (14, S('지중해 계단', 'Mediterranean Steps', '바위산 동쪽 절벽을 따라 정상 부근 포대까지 오르는 옛 군사용 가파른 산길로, 해협과 코스타 델 솔이 내려다보입니다.', 'A steep former military path climbing the Rock’s eastern cliffs to a battery near the summit, with views over the strait and the Costa del Sol.', 'Mediterranean Steps Gibraltar', 90, 150, b='no', n='가파르고 그늘이 없으니 서늘한 아침에 물을 넉넉히 챙겨 오르세요.|Steep and unshaded: start in the cool of the morning with plenty of water.')),
  (15, S('카탈란 베이', 'Catalan Bay', '바위산 동쪽, 시내 반대편의 작은 어촌 마을과 모래 해변입니다.', 'A small fishing village and sandy beach on the eastern side of the Rock, away from town.', 'Catalan Bay Gibraltar', 60, 120, b='no', n=FREE)),
 ],
}

IT = [("  gibraltar: [5, 1, 3, 4, 6],\n",
       "  gibraltar: { days: [['시내와 남쪽 끝|Town & the southern tip', 7, 9, 10, 11, 5], ['바위산|The Upper Rock', 8, 6, 4, 12, 13, 3, 1, 14]], trips: [['카탈란 베이|Catalan Bay', 15]] },\n")]


def main():
    c = rd('cities.ts')
    i = c.index('id: "gibraltar",')
    j = c.index('highlights: [', i)
    blk = re.sub(r'blurb: \{\n      ko: "[^"]*",\n      en: "[^"]*",\n    \}', f'blurb: {{\n      ko: "{BLURB[0]}",\n      en: "{BLURB[1]}",\n    }}', c[i:j])
    assert blk != c[i:j]
    c = c[:i] + blk + c[j:]
    for hid, (nko, nen, dko, den) in REWRITE.items():
        i = c.index(f'id: "{hid}"')
        j = c.index('\n      }', i)
        b = c[i:j]
        b2 = re.sub(r'description: \{[^\n]*\}', f'description: {{ ko: "{dko}", en: "{den}" }}', b)
        assert b2 != b, hid
        c = c[:i] + b2 + c[j:]
    for cid, items in ADD.items():
        c = add_sights(c, cid, items, 'visit-iberia.ts')
    c = reorder(c, 'gibraltar', [(n, None) for n in (1, 4, 3, 6, 8, 5, 7, 9, 12, 13, 10, 11, 14, 15, 2)])
    wr('cities.ts', c)
    it = rd('itinerary-iberia.ts')
    for a, b in IT:
        assert it.count(a) == 1, a
        it = it.replace(a, b)
    wr('itinerary-iberia.ts', it)


if __name__ == '__main__':
    main()
