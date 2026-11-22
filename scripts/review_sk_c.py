#!/usr/bin/env python3
"""Batch C Slovakia (2026-11-23): Bratislava +2 sights, country city groups. Facts from Wikipedia: Kamzík TV Tower 196 m,
built 1975, on Kamzík hill (437 m) in the Little Carpathians within the Bratislava Forest Park, public observation
deck, Austria/Hungary/Czechia visible in good weather. Modra: Little Carpathian foothills, famous blue-and-white
pottery, one of the most important viticulture centres of the Little Carpathians; ~25 km NE of Bratislava by coords.
Run once."""
from add_daytrip_places import rd, wr
from sight_order import add_sights, reorder
from review_sk import S
import re

ADD = {'bratislava': [
  (11, S('캄지크 TV 타워', 'Kamzík TV Tower', '1975년 소카르파티아산맥의 캄지크 언덕(해발 437m)에 세운 196m 방송탑으로, 브라티슬라바 숲 공원 안에 있습니다. 전망대에서 날씨가 좋으면 오스트리아·헝가리·체코까지 보입니다.', 'A 196 m television tower built in 1975 on Kamzík hill (437 m) in the Little Carpathians, inside the Bratislava Forest Park. Its observation deck looks as far as Austria, Hungary and Czechia on a clear day.', 'Kamzík TV Tower', 60, 90)),
  (12, S('모드라와 소카르파티아 와인 길', 'Modra & the Little Carpathian wine route', '브라티슬라바에서 북동쪽으로 약 25km, 소카르파티아산맥 기슭의 와인 마을로 이 지역에서 손꼽히는 포도 재배 중심지입니다. 푸른색과 흰색의 도자기로도 유명합니다.', 'A wine town in the Little Carpathian foothills about 25 km north-east of Bratislava, one of the region’s most important wine-growing centres and famous for its blue-and-white pottery.', 'Modra Slovakia', 180, 300, b='no')),
]}


def main():
    c = rd('cities.ts')
    c = add_sights(c, 'bratislava', ADD['bratislava'], 'visit-central.ts')
    def grp(n):
        m = re.search(rf'id: "bratislava-h{n}".*?group: \{{ ko: "([^"]*)", en: "([^"]*)" \}}', c, re.S)
        return (m.group(1), m.group(2))
    old = re.findall(r'id: "bratislava-h(\d+)"', c)
    order = []
    for n in map(int, old):
        if n in (11, 12):
            continue
        order.append((n, grp(n)))
        if grp(n)[1] == 'Across the Danube':
            order.append((11, ('북쪽 숲 공원', 'Forest Park (north)')))
    day = [x for x in order if x[1][1] == 'Day trip']
    order = [x for x in order if x[1][1] != 'Day trip'] + day + [(12, ('근교 당일치기', 'Day trip'))]
    c = reorder(c, 'bratislava', order)
    wr('cities.ts', c)
    it = rd('itinerary-north.ts')
    a = "  bratislava: { days: [['', 2, 9, 7, 4, 6, 3, 1, 8, 10]], trips: [['데빈 성|Devín Castle', 5]] },\n"
    assert it.count(a) == 1
    wr('itinerary-north.ts', it.replace(a, "  bratislava: { days: [['', 2, 9, 7, 4, 6, 3, 1, 8, 10, 11]], trips: [['데빈 성|Devín Castle', 5], ['모드라|Modra', 12]] },\n"))
    co = rd('countries.ts')
    old = "    cityIds: ['bratislava', 'kosice', 'bardejov', 'poprad', 'levoca', 'banska-bystrica', 'banska-stiavnica', 'trencin', 'nitra'],\n"
    assert co.count(old) == 1
    G = [('서부', 'Western Slovakia', ['bratislava', 'nitra', 'trencin']),
         ('중부', 'Central Slovakia', ['banska-bystrica', 'banska-stiavnica']),
         ('동부·타트라', 'Eastern Slovakia & the Tatras', ['kosice', 'poprad', 'levoca', 'bardejov'])]
    ids = ', '.join(repr(x) for _, _, l in G for x in l)
    groups = ''.join(f"      {{ title: {{ ko: '{k}', en: '{e}' }}, cityIds: [{', '.join(repr(x) for x in l)}] }},\n" for k, e, l in G)
    wr('countries.ts', co.replace(old, f"    cityIds: [{ids}],\n    cityGroups: [\n{groups}    ],\n"))


if __name__ == '__main__':
    main()
