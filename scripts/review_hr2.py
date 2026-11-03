#!/usr/bin/env python3
"""Croatia step 3 (2026-11-04, user request): sights the user photographed on their own 2023 trip, picked by the
user: six for Dubrovnik and St Mary's for Zadar. Run once."""
from add_daytrip_places import rd, wr
from sight_order import add_sights, blocks, itinerary_order, read_group, reorder
from review_hr import S

ADD = {
 'dubrovnik': [
  (15, S('성 블라호 성당', 'Church of St. Blaise', '도시 수호성인 성 블라호(블레즈)에게 바친 루자 광장의 바로크 성당으로, 제단에 도시 모형을 든 은제 성인상이 있고 이보 둘치치의 스테인드글라스가 빛납니다.', 'The Baroque church of the city’s patron, St Blaise, on Luža Square, with a silver statue of the saint holding a model of the city and stained glass by Ivo Dulčić.', 'Church of St. Blaise Dubrovnik', 10, 15,
        n='무료입니다. 2월 3일 성 블라호 축일에 큰 행렬이 열립니다.|Free; a big procession marks the saint’s feast on 3 February.')),
  (16, S('스폰자 궁전', 'Sponza Palace', '옛 세관이자 조폐소였던 16세기 고딕·르네상스 궁전으로, 1667년 대지진에도 무너지지 않았습니다. 지금은 국가 기록 보관소와 두브로브니크 수비대 추모관이 있습니다.', 'The 16th-century Gothic-Renaissance palace that served as customs house and mint and survived the 1667 earthquake; now the State Archives and a memorial to the city’s defenders.', 'Sponza Palace Dubrovnik', 15, 30,
        n='아치 안뜰은 대개 들어가 볼 수 있고 전시는 때마다 바뀝니다.|The arcaded courtyard is usually open to look round; exhibitions change.')),
  (17, S('오노프리오 대분수', 'Large Onofrio’s Fountain', '필레 문 바로 안쪽의 1438년 원형 분수로, 12km 수로로 끌어온 물이 16개의 석조 얼굴 입에서 흘러나옵니다.', 'The round fountain of 1438 just inside the Pile Gate, where water brought by a 12 km aqueduct pours from 16 carved masks.', 'Onofrio’s Fountain Dubrovnik', 5, 10)),
  (18, S('레벨린 요새', 'Fort Revelin', '플로체 문을 지키는 16세기 요새로, 넓은 옥상 테라스의 대포 너머로 옛 항구와 로크룸섬이 보입니다.', 'The 16th-century fort guarding the Ploče Gate; past the cannons on its broad roof terrace lie the Old Port and Lokrum.', 'Fort Revelin Dubrovnik', 20, 30,
        n='안에 고고학 전시가 있고 여름엔 공연장으로 쓰입니다. 개방 시간은 계절마다 다릅니다.|It houses an archaeological display and hosts summer events; opening hours vary by season.')),
  (19, S('군둘리치 광장', 'Gundulić Square', '시인 이반 군둘리치 동상이 선 구시가 광장으로, 오전마다 과일·라벤더·말린 무화과를 파는 노점 시장이 섭니다.', 'The old-town square with a statue of the poet Ivan Gundulić, where a morning stall market sells fruit, lavender and dried figs.', 'Gundulić Square Dubrovnik', 15, 20,
        n='시장은 오전에 열고 점심 무렵 정리합니다.|The market runs in the morning and packs up around lunchtime.')),
  (20, S('펠예샤츠 대교', 'Pelješac Bridge', '2022년에 개통한 길이 2.4km의 다리로, 보스니아 네움을 거치지 않고 두브로브니크 쪽 남부 달마티아와 크로아티아 본토를 잇습니다. 스톤 가는 길에 지납니다.', 'The 2.4 km bridge opened in 2022, linking southern Dalmatia and Dubrovnik with the rest of mainland Croatia without crossing Bosnia at Neum; you cross it on the way to Ston.', 'Pelješac Bridge', 10, 20,
        n='다리 위에서는 멈출 수 없고, 본토 쪽 코마르나 언덕에서 다리가 내려다보입니다.|You can’t stop on the bridge; the hillside above Komarna on the mainland side looks down on it.')),
 ],
 'zadar': [
  (11, S('성 마리아 성당과 보물관', 'St. Mary’s Church & Treasury', '포룸 옆 베네딕도회 수녀원의 성당으로, 수녀원 안 ‘자다르의 금과 은’ 상설 전시에 중세 금은 성유물함이 모여 있습니다.', 'The Benedictine convent church beside the Forum, whose “Gold and Silver of Zadar” exhibition gathers medieval gold and silver reliquaries.', 'St. Mary’s Church Zadar', 30, 45,
        n='보물관은 유료입니다.|The treasury is ticketed.')),
 ],
}
IT = {
 "      ['구시가와 성벽|Old town & walls', 10, 9, 2, 7, 8, 6, 12, 11, 1],\n      ['로브리예나츠와 스르지산|Lovrijenac & Mount Srđ', 3, 13, 4],":
 "      ['구시가|Old town', 10, 17, 9, 2, 7, 15, 16, 8, 6, 19, 12, 11],\n      ['성벽과 로브리예나츠|Walls & Lovrijenac', 1, 3, 18, 13, 4],",
 "      ['스톤|Ston', 14],": "      ['스톤|Ston', 20, 14],",
 "  zadar: { days: [['', 7, 8, 5, 4, 3, 6, 9, 1, 2]], trips: [['닌|Nin', 10]] },":
 "  zadar: { days: [['', 7, 8, 5, 4, 3, 11, 6, 9, 1, 2]], trips: [['닌|Nin', 10]] },",
}


def main():
    cities = rd('cities.ts')
    for cid, items in ADD.items():
        cities = add_sights(cities, cid, items, 'visit-balkan.ts')
    it = rd('itinerary-south.ts')
    for a, b in IT.items():
        assert it.count(a) == 1, a
        it = it.replace(a, b)
    wr('itinerary-south.ts', it)
    for cid in ADD:
        by = blocks(cities, cid)
        order = itinerary_order(it, cid, set(by))
        cities = reorder(cities, cid, [(n, read_group(by[n])) for n in order])
        print(cid, order)
    wr('cities.ts', cities)


if __name__ == '__main__':
    main()
