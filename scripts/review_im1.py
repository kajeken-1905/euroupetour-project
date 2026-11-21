#!/usr/bin/env python3
"""Isle of Man step 1, 2026-11-21. Blurbs rewritten. New (English Wikipedia): Douglas +4 (Manx Electric Railway, Great
Union Camera Obscura 1890s on Douglas Head, TT Grandstand & Mountain Course 60.7 km lap, Groudle Glen Railway summer
Sundays); Castletown +2 (Isle of Man Railway steam line 25 km Douglas–Castletown–Port Erin, Rushen Abbey at Ballasalla);
Peel +3 (Peel Cathedral 1879–84, cathedral 1980; Tynwald Hill at St John's, Tynwald Day 5 July; Niarbyl). Run once."""
import re
from add_daytrip_places import rd, wr
from sight_order import add_sights, reorder
from review_sk import S

FREE = '무료입니다.|Free.'
BLURB = {
 'douglas': ('영국 왕실령 맨섬의 수도로, 해안 산책로를 따라 1876년부터 말이 끄는 트램이 다닙니다. 산책로 북쪽 끝에서 19세기 전기 철도가 락시·램지로, 남쪽 기차역에선 증기 기관차가 캐슬타운·포트에린으로 떠나 섬 전체가 살아 있는 철도 박물관 같습니다. 해마다 5~6월엔 공도 오토바이 경주 TT 레이스로 섬이 들썩입니다.',
             'The capital of the Isle of Man, a British Crown Dependency, where horse-drawn trams have run along the seafront promenade since 1876. From its northern end a 19th-century electric railway heads for Laxey and Ramsey, and from the station in the south steam trains leave for Castletown and Port Erin, so the whole island feels like a working railway museum. Each May–June the island fills up for the TT road races.'),
 'castletown': ('맨섬의 옛 수도로, 작은 항구 옆에 중세 러셴 성과 옛 하원 의사당, 18세기 배 창고 박물관이 모여 있습니다. 더글러스에서 증기 기관차를 타고 오는 것이 가장 즐거운 방법이며, 가까운 발라살라엔 시토회 수도원 유적이 있습니다.',
                'The old capital of the Isle of Man, where medieval Castle Rushen, the Old House of Keys and an 18th-century boathouse museum cluster round a small harbour. The best way in is by steam train from Douglas, and the ruins of a Cistercian abbey lie close by at Ballasalla.'),
 'peel': ('맨섬 서해안의 항구 마을로, 항구 앞 세인트패트릭섬에 바이킹이 처음 세운 필 성과 성당 유적이 있습니다. 훈제 청어 키퍼로 유명하고, 해 지는 서쪽 바다가 아름답습니다. 가까운 세인트존스엔 해마다 7월 5일 맨섬 의회가 야외에서 열리는 틴월드 언덕이 있습니다.',
          'A harbour town on the Isle of Man’s west coast, where Peel Castle and its ruined cathedral, first founded by the Vikings, stand on St Patrick’s Isle. It is known for its kippers and its sunsets over the western sea, and nearby St John’s has Tynwald Hill, where the island’s parliament meets in the open air every 5 July.'),
}

ADD = {
 'douglas': [
  (6, S('맨크스 전기 철도', 'Manx Electric Railway', '산책로 북쪽 끝 더비 캐슬에서 락시를 거쳐 램지까지 가는 전기 궤도로, 처음 쓰던 차량이 지금도 다니는 세계에서 가장 오래된 전기 트램 노선입니다.', 'An electric interurban line from Derby Castle at the north end of the promenade via Laxey to Ramsey, the oldest electric tramway in the world still running its original cars.', 'Manx Electric Railway Derby Castle', 75, 120, s='https://www.iombusandrail.im')),
  (7, S('그레이트 유니언 카메라 옵스큐라', 'Great Union Camera Obscura', '1890년대 더글러스 헤드 등대 옆에 지은 카메라 옵스큐라로, 렌즈와 거울로 바깥 풍경을 어두운 방 안 하얀 화면에 비춥니다.', 'An 1890s camera obscura by the lighthouse on Douglas Head, whose lenses and mirrors project a panorama of the surroundings onto white screens in a darkened room.', 'Great Union Camera Obscura Douglas Head', 20, 30)),
  (8, S('TT 그랜드스탠드와 마운틴 코스', 'TT Grandstand & Mountain Course', '공도 오토바이 경주 TT 레이스의 출발점으로, 한 바퀴 60.7km의 마운틴 코스가 여기서 시작됩니다. 경주가 없을 땐 일반 도로라 차로 코스를 따라 달려 볼 수 있습니다.', 'The start of the TT motorcycle road races, where the 60.7 km Mountain Course begins. Outside race time the course is ordinary public road, so you can drive it.', 'TT Grandstand Glencrutchery Road Douglas', 30, 60, b='no', n='TT 레이스는 해마다 5월 말~6월 초에 열립니다.|The TT races are held each year from late May to early June.')),
  (9, S('그라우들 글렌 철도', 'Groudle Glen Railway', '온컨 근처 그라우들 글렌 계곡을 따라 달리는 작은 협궤 철도로, 자원봉사자들이 운영합니다.', 'A little narrow-gauge railway through Groudle Glen near Onchan, run by volunteers.', 'Groudle Glen Railway', 45, 60, n='5~9월 일요일과 7~8월 수요일 저녁에 다닙니다.|Runs on Sundays May–September and Wednesday evenings in July and August.')),
 ],
 'castletown': [
  (4, S('맨섬 증기 철도', 'Isle of Man Steam Railway', '더글러스에서 캐슬타운을 거쳐 포트에린까지 25km를 달리는 협궤 증기 철도로, 처음 쓰던 기관차와 객차를 그대로 씁니다.', 'A narrow-gauge steam railway running 25 km from Douglas via Castletown to Port Erin, still using its original locomotives and carriages.', 'Castletown railway station Isle of Man', 60, 120, s='https://www.iombusandrail.im')),
  (5, S('러셴 수도원', 'Rushen Abbey', '캐슬타운에서 약 3km 떨어진 발라살라의 수도원 유적으로, 중세 내내 시토회 수도사들이 살았습니다.', 'The remains of an abbey at Ballasalla, about 3 km from Castletown, home to Cistercian monks through the Middle Ages.', 'Rushen Abbey Ballasalla', 45, 60)),
 ],
 'peel': [
  (3, S('필 대성당', 'Peel Cathedral', '1879~1884년에 지은 성 저먼 교회로, 1980년 맨섬 성공회 교구의 대성당이 됐습니다.', 'The church of St German, built in 1879–84, which became the cathedral of the Anglican diocese of Sodor and Man in 1980.', 'Cathedral Isle of Man Peel', 15, 20, b='no', n=FREE)),
  (4, S('틴월드 언덕', 'Tynwald Hill', '필 동쪽 세인트존스 마을의 작은 인공 언덕으로, 10세기부터 이어진 맨섬 의회의 야외 회의가 해마다 7월 5일 국경일에 열립니다.', 'A small artificial mound in the village of St John’s east of Peel, where the island’s parliament has met in the open air since the 10th century, now every 5 July, the national day.', "Tynwald Hill St John's", 20, 30, b='no', n=FREE)),
  (5, S('니아빌', 'Niarbyl', '필 남쪽 서해안의 바위 곶으로, 바다 건너 카프 오브 맨과 맑은 날엔 아일랜드 산이 보입니다. 바닷가 어부 오두막이 영화에 나왔습니다.', 'A rocky headland on the west coast south of Peel, looking across to the Calf of Man and, on clear days, the mountains of Ireland; its fishermen’s cottage has appeared on film.', 'Niarbyl Bay', 45, 60, b='no', n=FREE)),
 ],
}

IT = [
 ("  douglas: { days: [['', 2, 3, 1]], trips: [['락시와 스나펠|Laxey & Snaefell', 4, 5]] },\n",
  "  douglas: { days: [['', 2, 3, 7, 1, 8]], trips: [['락시와 스나펠|Laxey & Snaefell', 6, 4, 5], ['그라우들 글렌|Groudle Glen', 9]] },\n"),
 ("  castletown: [1, 2, 3],\n", "  castletown: { days: [['', 4, 1, 2, 3]], trips: [['러셴 수도원|Rushen Abbey', 5]] },\n"),
 ("  peel: [1, 2],\n", "  peel: { days: [['', 1, 2, 3]], trips: [['세인트존스|St John’s', 4], ['니아빌|Niarbyl', 5]] },\n"),
]


def main():
    c = rd('cities.ts')
    for cid, (ko, en) in BLURB.items():
        i = c.index(f'id: "{cid}",')
        j = c.index('highlights: [', i)
        blk = re.sub(r'blurb: \{\n      ko: "[^"]*",\n      en: "[^"]*",\n    \}', f'blurb: {{\n      ko: "{ko}",\n      en: "{en}",\n    }}', c[i:j])
        assert blk != c[i:j], cid
        c = c[:i] + blk + c[j:]
    for cid, items in ADD.items():
        c = add_sights(c, cid, items, 'visit-uk.ts')
    c = reorder(c, 'douglas', [(n, None) for n in (2, 1, 3, 6, 4, 5, 7, 8, 9)])
    c = reorder(c, 'castletown', [(n, None) for n in (1, 2, 4, 3, 5)])
    c = reorder(c, 'peel', [(n, None) for n in (1, 2, 3, 4, 5)])
    wr('cities.ts', c)
    it = rd('itinerary-uk.ts')
    for a, b in IT:
        assert it.count(a) == 1, a
        it = it.replace(a, b)
    wr('itinerary-uk.ts', it)


if __name__ == '__main__':
    main()
