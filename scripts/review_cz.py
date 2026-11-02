#!/usr/bin/env python3
"""Sight review step 1, Czechia (2026-11-03, user request): five more sights for Prague and a third day, every Czech
list in itinerary order. Hours from the official sites where they could be read, checked that day. Run once."""
import re

from add_daytrip_places import rd, wr
from sight_order import add_sights, blocks, itinerary_order, read_group, reorder
from review_hu_dk import big_order, itin_text

K = '2026-11'
PRAGUE = [
    (15, dict(ko='비셰흐라드', en='Vyšehrad', dko='블타바강 위 바위 언덕의 옛 성채로, 스메타나·드보르자크가 잠든 묘지와 강 너머 프라하성 전망이 있습니다.', den='The old fortress on a rock above the Vltava, with the cemetery of Smetana and Dvořák and a view across to Prague Castle.', maps='Vyšehrad',
              visit=dict(min=90, max=120, s='https://praha-vysehrad.cz/en/', n='성채 공원은 무료로 일 년 내내 엽니다. 지하 포대와 고를리체 홀은 가이드 투어로만 봅니다(유료). 지하철 C선 비셰흐라드역에서 걸어서 약 10분.|The fortress park is free and open all year; the casemates and Gorlice Hall are by paid guided tour only. About 10 min on foot from Vyšehrad metro (line C).', k=K))),
    (16, dict(ko='바츨라프 광장', en='Wenceslas Square', dko='신시가 한가운데 750m 길이의 대로 광장으로, 성 바츨라프 기마상과 국립 박물관이 끝에 서 있고 1989년 벨벳 혁명의 무대였습니다.', den='The 750 m boulevard at the heart of the New Town, closed by the St Wenceslas statue and the National Museum; stage of the 1989 Velvet Revolution.', maps='Wenceslas Square',
              visit=dict(min=30, max=45, n='무료이며 언제든 볼 수 있습니다.|Free and always open.'))),
    (17, dict(ko='스트라호프 수도원 도서관', en='Strahov Library', dko='프레스코 천장 아래 고서가 가득한 신학의 방과 철학의 방이 있는 수도원 도서관입니다.', den='The monastery library of the Theological and Philosophical Halls, old books beneath painted ceilings.', maps='Strahov Library',
              visit=dict(min=30, max=45, s='https://www.strahovskyklaster.cz/en/for-visitors', n='매일 9:00~17:00(매표 16:15까지)에 열고 부활절 일요일, 12월 24·25일에 쉽니다. 일반 입장권(성인 220코루나)은 두 방을 문 앞에서 들여다보는 방식입니다.|Open daily 9:00–17:00 (tickets until 16:15); closed Easter Sunday and 24–25 December. The standard ticket (220 CZK) views the two halls from the doorway.', k=K))),
    (18, dict(ko='시민회관', en='Municipal House', dko='화약탑 옆에 선 1912년 아르누보 건물로, 무하가 꾸민 시장 홀과 스메타나 홀을 가이드 투어로 봅니다.', den='The 1912 Art Nouveau landmark beside the Powder Tower, whose Mucha-decorated Mayor’s Hall and Smetana Hall you see on a guided tour.', maps='Obecní dům',
              visit=dict(min=60, max=75, s='https://www.obecnidum.cz/en/visits/', n='내부는 약 1시간짜리 가이드 투어로만 봅니다. 매표소는 매일 10:00~19:00에 열고, 투어 시간은 날마다 달라 공식 사이트에서 확인하세요. 1층 카페는 투어 없이 들어갈 수 있습니다.|The interior is by guided tour only, about an hour. The box office opens daily 10:00–19:00; tour times vary by day, so check the official site. The ground-floor café needs no tour.', k=K))),
    (19, dict(ko='클레멘티눔', en='Clementinum', dko='옛 예수회 학교 건물로, 화려한 바로크 도서관을 들여다보고 천문탑에 올라 구시가 지붕을 내려다봅니다.', den='The former Jesuit college: look into its Baroque library and climb the Astronomical Tower over the Old Town roofs.', maps='Klementinum',
              visit=dict(min=45, max=60, b='rec', s='https://www.prague.eu/clementinum', n='약 45분짜리 가이드 투어로만 봅니다. 엘리베이터 없이 계단 172개를 오르고, 도서관은 문턱에서 들여다봅니다.|Guided tour only, about 45 min; 172 steps with no lift, and the library is viewed from the threshold.', k=K))),
]
PRAGUE_IT = ("""  prague: {
    days: [
      ['프라하 성과 말라스트라나|Prague Castle & Malá Strana', 1, 9, 12, 5, 10, 2],
      ['구시가와 유대인 지구|Old Town & Jewish Quarter', 8, 7, 3, 4, 6, 11],
    ],
    trips: [['쿠트나호라|Kutná Hora', 13], ['카를슈테인 성|Karlštejn Castle', 14]],
  },""", [
    ('프라하 성과 말라스트라나|Prague Castle & Malá Strana', [1, 9, 12, 17, 5, 10, 2]),
    ('구시가와 유대인 지구|Old Town & Jewish Quarter', [19, 3, 4, 7, 6, 8, 18]),
    ('신시가와 비셰흐라드|New Town & Vyšehrad', [16, 11, 15]),
], [('쿠트나호라|Kutná Hora', [13]), ('카를슈테인 성|Karlštejn Castle', [14])])


def main():
    cities = rd('cities.ts')
    cities = add_sights(cities, 'prague', PRAGUE, 'visit-central.ts')
    it = rd('itinerary-north.ts')
    old, days, trips = PRAGUE_IT
    assert old in it
    it = it.replace(old, itin_text('prague', days, trips))
    wr('itinerary-north.ts', it)
    cities = reorder(cities, 'prague', big_order('prague', days, trips))
    for cid in re.findall(r'\n  \{\n    id: "([a-z-]+)",\n    countryId: "cz"', cities):
        if cid == 'prague':
            continue
        by = blocks(cities, cid)
        order = itinerary_order(it, cid, set(by))
        cities = reorder(cities, cid, [(n, read_group(by[n])) for n in order])
        print(cid, order)
    wr('cities.ts', cities)


if __name__ == '__main__':
    main()
