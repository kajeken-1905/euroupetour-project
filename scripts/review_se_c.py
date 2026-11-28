#!/usr/bin/env python3
"""Sweden 2nd pass (2026-11-27, user approved): +4 sights in existing cities. Facts (Wikipedia en/sv): Storkyrkan,
Stockholm Cathedral in Gamla Stan, with Bernt Notke's St George and the Dragon (1489) and the Vädersolstavlan sun-dog
painting; Riddarholmen Church, the burial church of Swedish monarchs, from a 13th-century Franciscan friary;
Gothenburg Botanical Garden, opened 1923, one of Europe's larger botanical gardens; Skissernas Museum in Lund, a
museum of sketches and models for public art founded in 1934. Run once."""
import re
from add_daytrip_places import rd, wr
from sight_order import add_sights, reorder
from review_sk import S

VF = 'visit-nordic.ts'
ADD = {
 'stockholm': [
  (17, S('스톡홀름 대성당(스토르키르칸)', 'Stockholm Cathedral (Storkyrkan)', '감라스탄에서 가장 오래된 교회로, 1489년 베른트 노트케의 ‘성 게오르기우스와 용’ 목조상과 하늘에 해무리가 뜬 모습을 그린 ‘베데르솔스타블란’이 있습니다.', 'The oldest church in Gamla Stan, home to Bernt Notke’s carved St George and the Dragon (1489) and the Vädersolstavlan painting of sun dogs over the city.', 'Storkyrkan Stockholm', 20, 30)),
  (18, S('리다르홀멘 교회', 'Riddarholmen Church', '13세기 프란치스코회 수도원에서 시작된 교회로, 스웨덴 왕들이 묻힌 왕실 묘소입니다.', 'A church that grew out of a 13th-century Franciscan friary, now the burial church of Sweden’s monarchs.', 'Riddarholmskyrkan', 20, 30,
        n='주로 여름철에만 문을 엽니다. 운영 기간은 왕실 공식 사이트에서 확인하세요.|Open mainly in summer; check the season on the Royal Court’s site.')),
 ],
 'gothenburg': [
  (13, S('예테보리 식물원', 'Gothenburg Botanical Garden', '1923년에 문을 연 식물원으로, 바위 정원과 온실, 숲길이 슬로츠스코겐 옆으로 넓게 이어집니다.', 'A botanical garden opened in 1923, with a rock garden, glasshouses and woodland paths spreading out beside Slottsskogen.', 'Göteborgs botaniska trädgård', 60, 120, b='no',
        n='정원 입장은 무료이며 자율 기부를 받습니다. 온실은 별도로 운영 시간이 짧을 수 있습니다.|Entry to the garden is free with a voluntary donation; the glasshouses may keep shorter hours.')),
 ],
 'lund': [
  (5, S('스키세르나스 박물관', 'Skissernas Museum', '1934년에 세운 공공미술 스케치·모형 박물관으로, 마티스·미로·레제 등의 벽화 초안과 조각 모형을 볼 수 있습니다.', 'A museum of sketches and models for public art, founded in 1934, with studies by Matisse, Miró, Léger and others.', 'Skissernas Museum Lund', 45, 60)),
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
    c = place(c, 'stockholm', [(2, [(17, 'same')]), (1, [(18, 'same')])])
    c = place(c, 'gothenburg', [(9, [(13, 'same')])])
    c = place(c, 'lund', [(3, [(5, None)])])
    wr('cities.ts', c)
    it = rd('itinerary-north.ts')
    R = [
     ("['감라스탄과 노르말름|Gamla Stan & Norrmalm', 2, 1, 5, 13, 10, 11],", "['감라스탄과 노르말름|Gamla Stan & Norrmalm', 2, 17, 1, 18, 5, 13, 10, 11],"),
     ("['시내|City centre', 1, 4, 3, 6, 9, 8],", "['시내|City centre', 1, 4, 3, 6, 9, 13, 8],"),
     ("lund: { days: [['', 1, 2, 3, 4]] },", "lund: { days: [['', 1, 2, 3, 5, 4]] },"),
    ]
    for a, b in R:
        assert it.count(a) == 1, a
        it = it.replace(a, b)
    wr('itinerary-north.ts', it)


if __name__ == '__main__':
    main()
