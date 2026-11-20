#!/usr/bin/env python3
"""Vatican step 1 (Vatican City), 2026-11-20. Blurb and descriptions rewritten. New sights: the Dome, the Necropolis
(Scavi), the Vatican Grottoes, the Treasury Museum (all listed on basilicasanpietro.va) and the papal general audience.
No step 2: no other towns. Run once."""
import re
from add_daytrip_places import rd, wr
from sight_order import add_sights, reorder
from review_sk import S

BAS = 'https://www.basilicasanpietro.va/en'
DRESS = '어깨와 무릎을 가리는 차림이어야 합니다.|Shoulders and knees must be covered.'

BLURB = ('로마 시내 한가운데의 세계에서 가장 작은 나라이자 가톨릭의 중심. 성 베드로 대성당과 광장, 시스티나 성당을 품은 바티칸 박물관이 있고, 대성당 아래에는 베드로의 무덤으로 이어지는 옛 묘지가, 위에는 미켈란젤로의 돔이 있습니다.',
         'The world’s smallest country and the heart of the Catholic Church, in the middle of Rome: St Peter’s Basilica and Square and the Vatican Museums with the Sistine Chapel, with an ancient necropolis leading to St Peter’s tomb below the basilica and Michelangelo’s dome above.')

REWRITE = {
 'vatican-city-h1': ('성 베드로 대성당', None, '베드로의 무덤 위에 16~17세기에 다시 지은 세계 최대급 성당으로, 미켈란젤로의 피에타와 베르니니의 청동 발다키노가 있습니다.', 'One of the world’s largest churches, rebuilt in the 16th–17th centuries over St Peter’s tomb, with Michelangelo’s Pietà and Bernini’s bronze baldacchino.'),
 'vatican-city-h2': (None, None, '베르니니가 설계한 284개 기둥의 열주가 두 팔처럼 감싸는 타원형 광장으로, 가운데에 이집트 오벨리스크가 서 있습니다.', 'Bernini’s oval square, embraced like two arms by a colonnade of 284 columns, with an Egyptian obelisk at its centre.'),
 'vatican-city-h3': (None, None, '역대 교황이 모은 고대 조각과 르네상스 회화를 전시하는 박물관 단지로, 라오콘 군상과 라파엘로의 방, 지도의 회랑을 지나 시스티나 성당으로 이어집니다.', 'The museum complex of the popes’ collections of ancient sculpture and Renaissance painting, leading past the Laocoön, the Raphael Rooms and the Gallery of Maps to the Sistine Chapel.'),
 'vatican-city-h4': (None, None, '미켈란젤로가 천장에 창세기를, 제단 벽에 최후의 심판을 그린 성당으로, 교황 선출 회의(콘클라베)가 열리는 곳입니다.', 'The chapel where Michelangelo painted Genesis on the ceiling and the Last Judgement on the altar wall, and where conclaves elect the pope.'),
 'vatican-city-h5': (None, None, '바티칸 영토의 절반 가까이를 차지하는 정원으로, 분수와 작은 건물 사이를 가이드 투어로만 걸을 수 있습니다.', 'Gardens covering nearly half of Vatican territory, with fountains and small buildings, open only on guided tours.'),
}

ADD = {'vatican-city': [
 (6, S('성 베드로 대성당 돔', 'St Peter’s Dome', '미켈란젤로가 설계한 돔으로, 안쪽 난간에서 성당 내부를 내려다보고 꼭대기 전망대에서 로마 시내를 한눈에 봅니다.', 'Michelangelo’s dome: look down into the basilica from the inner gallery, then out over Rome from the lantern at the top.', 'St. Peter’s Dome', 60, 90,
       s=BAS, n='유료이며 엘리베이터로 중간까지 올라가도 꼭대기까지는 계단 320여 개를 걸어야 합니다. 좁은 계단이라 폐소공포증이 있으면 힘듭니다.|Ticketed; even with the lift part-way, the last 320-odd steps are on foot, up narrow stairs that are hard going for the claustrophobic.')),
 (7, S('바티칸 네크로폴리스 (스카비)', 'Vatican Necropolis (Scavi)', '대성당 중앙 신랑 아래의 고대 로마 묘지로, 옛 길을 따라 베드로의 무덤까지 갑니다.', 'The ancient Roman cemetery under the basilica’s nave, where an old street leads to St Peter’s tomb.', 'Vatican Necropolis', 90, 90,
       b='req', s=BAS, n='소규모 가이드 투어로만 들어가며 일찍 예약이 차므로 미리 신청해야 합니다.|Small guided tours only, which fill up early; book well ahead.')),
 (8, S('바티칸 그로토', 'Vatican Grottoes', '대성당 바닥 아래 층으로, 요한 바오로 2세를 비롯한 역대 교황들의 무덤이 모여 있습니다.', 'The level beneath the basilica floor, holding the tombs of many popes.', 'Vatican Grottoes', 20, 30, b='no', n='대성당 관람 중에 무료로 내려갑니다.|Free, reached during a basilica visit.')),
 (9, S('성 베드로 대성당 보물관', 'Treasury Museum of St Peter’s', '대성당 안의 박물관으로, 역대 교황과 성당이 쓰던 전례 도구·성물·예술품을 전시합니다.', 'A museum inside the basilica showing the liturgical objects, relics and artworks of the popes and the basilica.', 'Museo del Tesoro di San Pietro', 30, 45, s=BAS, n='유료입니다.|Ticketed.')),
 (10, S('교황 일반 알현', 'Papal General Audience', '교황이 성 베드로 광장(겨울엔 바오로 6세 홀)에서 신자들을 만나는 행사로, 보통 수요일 오전에 열립니다.', 'The pope’s weekly meeting with the faithful, in St Peter’s Square (or the Paul VI Hall in winter), usually on Wednesday mornings.', 'Papal Audience St Peter’s Square', 120, 180,
       b='req', n='입장권은 무료이며 교황청 궁내원에 미리 신청합니다. 교황 일정에 따라 없는 주가 있습니다.|Tickets are free, requested in advance from the Prefecture of the Papal Household; some weeks there is none, depending on the pope’s schedule.')),
]}

IT = ("  'vatican-city': [3, 4, 1, 2],\n", "  'vatican-city': { days: [['', 3, 4, 1, 8, 6, 2]] },\n")


def main():
    c = rd('cities.ts')
    i = c.index('id: "vatican-city",')
    j = c.index('highlights: [', i)
    ko, en = BLURB
    blk = re.sub(r'blurb: \{\n      ko: "[^"]*",\n      en: "[^"]*",\n    \}', f'blurb: {{\n      ko: "{ko}",\n      en: "{en}",\n    }}', c[i:j])
    assert blk != c[i:j]
    c = c[:i] + blk + c[j:]
    for hid, (nko, nen, dko, den) in REWRITE.items():
        i = c.index(f'id: "{hid}"')
        j = c.index('\n      }', i)
        b = c[i:j]
        if nko:
            m = re.search(r'name: \{ ko: "([^"]*)", en: "([^"]*)" \}', b)
            b = b.replace(m.group(0), f'name: {{ ko: "{nko}", en: "{nen or m.group(2)}" }}')
        b2 = re.sub(r'description: \{[^\n]*\}', f'description: {{ ko: "{dko}", en: "{den}" }}', b)
        assert b2 != b, hid
        c = c[:i] + b2 + c[j:]
    it = rd('itinerary-it.ts')
    assert it.count(IT[0]) == 1
    wr('itinerary-it.ts', it.replace(*IT))
    vi = rd('visit-it.ts')
    a = "  'vatican-city-h2': v(20, 30),"
    assert vi.count(a) == 1
    wr('visit-it.ts', vi.replace(a, "  'vatican-city-h2': v(20, 30, { b: 'no', n: '무료입니다. 행사 날엔 보안 검색을 거쳐 들어갑니다.|Free; on event days entry is through security checks.' }),"))
    c = add_sights(c, 'vatican-city', ADD['vatican-city'], 'visit-it.ts')
    c = reorder(c, 'vatican-city', [(n, None) for n in (3, 4, 1, 8, 6, 9, 2, 7, 5, 10)])
    wr('cities.ts', c)


if __name__ == '__main__':
    main()
