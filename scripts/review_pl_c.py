#!/usr/bin/env python3
"""Batch C Poland (2026-11-23): +8 big-city sights, list order, country city groups. Facts from Wikipedia:
Saxon Garden 15.5 ha, oldest public park in Warsaw, opened to the public 1727, faces Piłsudski Square; Tomb of the
Unknown Soldier on Piłsudski Square, only surviving part of the Saxon Palace, unknown soldier interred 2 Nov 1925.
Polish Vodka Museum (pl): Praga-Północ, rectification building at plac Konesera 1 in the former Koneser vodka works,
600+ years of Polish vodka making. Vistula Boulevards (pl): left-bank boulevards. Kościuszko's Mound: artificial mound
for Tadeusz Kościuszko modelled on the prehistoric Krak and Wanda mounds, serpentine path, top ~326 m, view over the
Vistula and city. Nowa Huta: easternmost district, one of the largest planned socialist-realist settlements in the
world. Golden Gate, Gdańsk: Renaissance city gate on the Royal Route. Hydropolis: Poland's only science centre
devoted to water. Run once."""
import re
from add_daytrip_places import rd, wr
from sight_order import add_sights, reorder
from review_sk import S

FREE = '무료입니다.|Free.'
ADD = {
 'warsaw': [
  (13, S('작센 정원과 무명용사의 묘', 'Saxon Garden & Tomb of the Unknown Soldier', '1727년 시민에게 문을 연 바르샤바에서 가장 오래된 공원(15.5ha)으로, 세계 초기의 공공 공원 가운데 하나입니다. 피우수트스키 광장 쪽엔 전쟁으로 무너진 작센 궁전의 유일하게 남은 부분인 무명용사의 묘가 있습니다.', 'Warsaw’s oldest public park (15.5 ha), opened to the public in 1727 as one of the first public parks in the world. On Piłsudski Square stands the Tomb of the Unknown Soldier, the only surviving part of the war-destroyed Saxon Palace.', 'Grób Nieznanego Żołnierza Warszawa', 30, 45, b='no', n=FREE)),
  (14, S('폴란드 보드카 박물관', 'Polish Vodka Museum', '비스와강 건너 프라가 지구의 옛 코네세르 보드카 공장 건물에 있는 박물관으로, 600년이 넘는 폴란드 보드카 제조의 역사를 보여 줍니다.', 'A museum in the former Koneser vodka works in the Praga district across the Vistula, telling more than 600 years of Polish vodka making.', 'Muzeum Polskiej Wódki', 60, 90, b='rec')),
  (15, S('비스와강 산책로', 'Vistula Boulevards', '구시가 아래 비스와강 왼쪽 강변을 따라 이어진 산책로로, 강변 카페와 쉼터가 있습니다.', 'The promenade along the left bank of the Vistula below the Old Town, with riverside cafés and places to sit.', 'Bulwary Wiślane Warszawa', 45, 60, b='no', n=FREE)),
 ],
 'krakow': [
  (13, S('코시치우슈코 언덕', 'Kościuszko Mound', '국민 영웅 타데우시 코시치우슈코를 기려 크라쿠프 시민들이 선사 시대 언덕을 본떠 쌓은 인공 언덕입니다. 구불구불한 길을 따라 해발 약 326m 꼭대기에 오르면 비스와강과 시내가 내려다보입니다.', 'An artificial mound raised by the people of Kraków in honour of national hero Tadeusz Kościuszko, modelled on the city’s prehistoric mounds. A spiral path climbs to the top at about 326 m, with views over the Vistula and the city.', 'Kopiec Kościuszki', 60, 90)),
  (14, S('노바 후타', 'Nowa Huta', '크라쿠프 가장 동쪽 지구로, 세계에서 손꼽히게 큰 사회주의 리얼리즘 계획 도시입니다. 넓은 대로와 광장, 당시 건축이 그대로 남아 있습니다.', 'Kraków’s easternmost district and one of the largest planned socialist-realist towns ever built, with its broad avenues, squares and period architecture intact.', 'Plac Centralny Nowa Huta', 90, 150, b='no')),
 ],
 'gdansk': [
  (11, S('황금 문', 'Golden Gate', '왕의 길 위에 선 르네상스 양식의 성문으로, 이 문을 지나 들루가 거리와 들루기 타르크로 이어집니다.', 'A Renaissance city gate on the Royal Route, leading through to Długa Street and Długi Targ.', 'Złota Brama Gdańsk', 10, 15, b='no', n=FREE)),
 ],
 'wroclaw': [
  (10, S('히드로폴리스', 'Hydropolis', '물을 주제로 한 폴란드 유일의 과학관으로, 자연 속 물의 역할과 사람과 물의 역사를 체험형 전시로 보여 줍니다.', 'Poland’s only science centre devoted to water, with hands-on exhibits on water in nature and its history with people.', 'Hydropolis Wrocław', 90, 120)),
 ],
}
IT = [("      ['구시가와 왕의 길|Old Town & the Royal Route', 10, 1, 2, 9, 8, 11],\n      ['봉기 박물관과 도심|Rising Museum & the centre', 7, 5, 4, 12],\n",
       "      ['구시가와 왕의 길|Old Town & the Royal Route', 10, 1, 2, 9, 8, 13],\n      ['봉기 박물관과 도심|Rising Museum & the centre', 7, 5, 4, 12],\n      ['비스와강과 프라가|The Vistula & Praga', 15, 11, 14],\n"),
      ("      ['카지미에시와 포드구지|Kazimierz & Podgórze', 4, 12, 8],\n    ],\n",
       "      ['카지미에시와 포드구지|Kazimierz & Podgórze', 4, 12, 8],\n      ['코시치우슈코 언덕과 노바 후타|Kościuszko Mound & Nowa Huta', 13, 14],\n    ],\n"),
      ("    days: [['', 1, 10, 2, 9, 6, 3, 7, 4]],\n", "    days: [['', 11, 1, 10, 2, 9, 6, 3, 7, 4]],\n"),
      ("  wroclaw: [1, 4, 7, 5, 6, 2, 3, 8, 9],\n", "  wroclaw: [1, 4, 7, 5, 6, 2, 3, 8, 9, 10],\n")]


def groups_of(c, cid):
    out = []
    for m in re.finditer(rf'id: "{cid}-h(\d+)"(.*?)\n      \}}', c, re.S):
        g = re.search(r'group: \{ ko: "([^"]*)", en: "([^"]*)" \}', m.group(2))
        out.append((int(m.group(1)), g.groups() if g else None))
    return out


def main():
    c = rd('cities.ts')
    for cid, items in ADD.items():
        c = add_sights(c, cid, items, 'visit-central.ts')
    # Warsaw
    o = [x for x in groups_of(c, 'warsaw') if x[0] not in (13, 14, 15)]
    w = []
    for n, g in o:
        w.append((n, g))
        if n == 8:
            w.append((13, g))
        if n == 11:
            w += [(15, g), (14, ('프라가', 'Praga'))]
    c = reorder(c, 'warsaw', w)
    # Kraków
    o = [x for x in groups_of(c, 'krakow') if x[0] not in (13, 14)]
    day = [x for x in o if x[1][1] == 'Day trip']
    k = [x for x in o if x[1][1] != 'Day trip'] + [(13, ('즈비에지니에츠', 'Zwierzyniec')), (14, ('노바 후타', 'Nowa Huta'))] + day
    c = reorder(c, 'krakow', k)
    # Gdańsk: Golden Gate first in Main Town
    o = [x for x in groups_of(c, 'gdansk') if x[0] != 11]
    c = reorder(c, 'gdansk', [(11, o[0][1])] + o)
    wr('cities.ts', c)
    it = rd('itinerary-north.ts')
    for a, b in IT:
        assert it.count(a) == 1, a
        it = it.replace(a, b)
    wr('itinerary-north.ts', it)
    co = rd('countries.ts')
    old = "    cityIds: ['warsaw', 'lodz', 'krakow', 'czestochowa', 'gdansk', 'malbork', 'wroclaw', 'poznan', 'zakopane', 'torun', 'lublin'],\n"
    assert co.count(old) == 1
    G = [('중부·동부', 'Central & Eastern Poland', ['warsaw', 'lodz', 'lublin']),
         ('남부', 'Southern Poland', ['krakow', 'zakopane', 'czestochowa']),
         ('북부', 'Northern Poland', ['gdansk', 'malbork', 'torun']),
         ('서부', 'Western Poland', ['wroclaw', 'poznan'])]
    ids = ', '.join(repr(x) for _, _, l in G for x in l)
    groups = ''.join(f"      {{ title: {{ ko: '{k}', en: '{e}' }}, cityIds: [{', '.join(repr(x) for x in l)}] }},\n" for k, e, l in G)
    wr('countries.ts', co.replace(old, f"    cityIds: [{ids}],\n    cityGroups: [\n{groups}    ],\n"))


if __name__ == '__main__':
    main()
