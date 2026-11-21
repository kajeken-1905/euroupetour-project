#!/usr/bin/env python3
"""Isle of Man step 2 (2026-11-21, user picked all three): Laxey, Ramsey, Port Erin.
Facts from English Wikipedia (Laxey: Old Norse 'salmon river', Laxey Wheel 'Lady Isabella' 22.1 m by Robert Casement,
largest working original waterwheel; Snaefell 620.9 m; Great Laxey Mine Railway 19 in gauge with the island's only
working railway tunnel; King Orry's Grave. Ramsey: largest town after Douglas, Queen's Pier under restoration and open
summer Sunday afternoons, Albert Tower for Prince Albert's 1847 climb, Grove Museum of Victorian Life, Milntown,
the Ayres and Point of Ayre reserve. Port Erin: Bradda Head 116 m with Milner's Tower 1871 shaped as key and lock,
Isle of Man Railway Museum, Cregneash living museum 2 km away, Calf of Man by boat from Port Erin or Port St Mary).
douglas-h4 (Laxey Wheel) and douglas-h5 (Snaefell Mountain Railway) move to laxey-h1/h2. Run once."""
import json
import os
import re
import add_daytrip_places3 as T
from add_daytrip_places import rd, wr

FREE = '무료입니다.|Free.'
IOM = "    air: [['Isle of Man (IOM)', '맨섬 공항 (IOM)', '캐슬타운 옆 로널즈웨이|Ronaldsway, by Castletown']],\n"
COMMON = dict(hubs_file='hubs-east.ts', hubs_before='  peel: {\n', itin_file='itinerary-uk.ts',
              itin_before='  peel: {', visit_file='visit-uk.ts',
              visit_after=r"^  '(?:peel|laxey|ramsey|port-erin)-h\d+': v\(.*\),\n",
              stay_before='  peel: [', apps='', transit_before='  peel: {\n', places=None, daytrips=[])
LAST = r"^  r\('douglas', 'peel', 'bus', 40, .*\),\n"
SEASON_RAIL = '계절 운행 · 시간표 확인|seasonal · check the timetable'


def H(ko, en, dko, den, maps, mn, mx, n=None, **vk):
    v = dict(min=mn, max=mx, **vk)
    if n:
        v['n'] = n
    return dict(ko=ko, en=en, dko=dko, den=den, maps=maps, visit=v)


def R(a, b, mode, m, n=None):
    extra = f", {{ n: '{n}' }}" if n else ''
    return ('routes-east.ts', LAST, f"  r('{a}', '{b}', '{mode}', {m}{extra}),\n")


CITIES = [
    dict(COMMON, country='im', id='laxey', after='douglas', ko='락시', en='Laxey', native='Laxey', lat=54.2278, lng=-4.4019,
         blurb=['맨섬 동해안의 마을로, 이름은 고대 노르드어로 ‘연어 강’이라는 뜻입니다. 언덕 위엔 지금도 도는 원형 물레방아로는 세계에서 가장 큰 락시 휠이 있고, 옛 철도 세 개가 마을에서 만납니다. 더글러스에서 전기 철도로 와서, 산악철도로 섬 최고봉 스나펠에 오르는 것이 일반적인 코스입니다.',
                'A village on the Isle of Man’s east coast whose name comes from the Old Norse for ‘salmon river’. On the hillside turns the Laxey Wheel, the largest original working waterwheel in the world, and three vintage railways meet in the village. The usual day is to come up from Douglas by electric tram and ride the mountain railway to Snaefell, the island’s highest peak.'],
         highlights=[
             H('오리 왕의 무덤', 'King Orry’s Grave', '락시 마을 북쪽의 신석기 시대 돌방 무덤으로, 맨섬 전설 속 왕 오리의 이름이 붙어 있습니다.', 'A Neolithic chambered tomb just north of Laxey village, named after King Orry of Manx legend.', "King Orry's Grave Laxey", 15, 20, b='no', n=FREE),
             H('그레이트 락시 광산 철도', 'Great Laxey Mine Railway', '옛 납 광산 입구에서 선광장까지 달리는 아주 좁은(483mm) 궤도의 광산 철도로, 맨섬에 하나 남은 운행 철도 터널로 전기 철도와 큰길 아래를 지납니다.', 'A tiny 483 mm-gauge railway from the old lead-mine entrance to the washing floors, passing under the electric railway and the main road through the island’s only working railway tunnel.', 'Great Laxey Mine Railway', 30, 45, n='여름철 주말 위주로 다닙니다. 운행일을 확인하세요.|Runs mainly on summer weekends; check the operating days.'),
         ],
         hubs=IOM + "    rail: [['Laxey', '락시역', '전기 철도·스나펠 산악철도|electric railway and Snaefell Mountain Railway']],\n",
         itinerary={'days': [['', 3, 4, 1, 2]]},
         season='산악철도와 광산 철도는 대략 4~10월에 다닙니다.|The mountain and mine railways run roughly April–October.',
         stay=[('더글러스에서 다녀오기', 'Visit from Douglas', 'Douglas, Isle of Man', '당일치기|Day trip', '전기 철도로 30분 남짓이라 더글러스에 묵고 다녀오는 사람이 많습니다.|Just over half an hour by electric tram, so most people stay in Douglas.')],
         routes=[R('douglas', 'laxey', 'train', 30, '맨크스 전기 철도 · ' + SEASON_RAIL)],
         transit=dict(modes=['train', 'bus', 'walk'], ko='더글러스 더비 캐슬에서 맨크스 전기 철도로 오고, 버스도 다닙니다. 마을 안은 걸어서 다닙니다.', en='Come from Derby Castle in Douglas on the Manx Electric Railway, or by bus; walk around the village.')),
    dict(COMMON, country='im', id='ramsey', after='laxey', ko='램지', en='Ramsey', native='Ramsey', lat=54.3211, lng=-4.3844,
         blurb=['맨섬 북쪽의 항구 도시로, 더글러스 다음으로 큰 마을입니다. 섬에서 가장 해가 많이 드는 곳으로, 1847년 빅토리아 여왕과 앨버트 공이 찾아와 ‘로열 램지’라 불립니다. 복원 중인 옛 부두와 앨버트 타워, 빅토리아 시대 생활 박물관이 있고, 북쪽 끝 포인트 오브 에어의 모래 언덕 보호구역까지 다녀옵니다. 맨크스 전기 철도의 종점입니다.',
                'The harbour town of the north, the island’s largest after Douglas. It is the sunniest part of the Isle of Man and is called ‘Royal Ramsey’ after Queen Victoria and Prince Albert’s visit in 1847. It has an old pier under restoration, the Albert Tower and a museum of Victorian life, with the dune reserves of the Ayres and the Point of Ayre to the north. It is the terminus of the Manx Electric Railway.'],
         highlights=[
             H('램지 항구와 퀸스 부두', 'Ramsey Harbour & Queen’s Pier', '섬에서 손꼽히는 큰 항구로, 바다로 길게 뻗은 옛 퀸스 부두는 지금 복원 중입니다.', 'One of the island’s biggest harbours; the long Queen’s Pier reaching out to sea is being restored.', "Queen's Pier Ramsey", 30, 45, b='no', n='부두는 복원 중이라 여름 일요일 오후 등 정해진 때만 걸어 볼 수 있습니다.|The pier is under restoration and open only at set times, such as summer Sunday afternoons.'),
             H('앨버트 타워', 'Albert Tower', '1847년 바다가 거칠어 여왕의 배가 램지 앞바다에 머물 때 앨버트 공이 뭍에 올라 걸어 오른 언덕에 그 방문을 기념해 세운 탑입니다.', 'A tower on the hill Prince Albert climbed in 1847 when rough seas kept the royal yacht off Ramsey, built to mark his visit.', 'Albert Tower Ramsey', 30, 45, b='no', n=FREE),
             H('그로브 박물관', 'Grove Museum of Victorian Life', '램지 북쪽 교외의 빅토리아 시대 저택을 당시 가족의 살림 그대로 보여 주는 맨섬 국립유산 박물관입니다.', 'A Victorian house in Ramsey’s northern suburbs, shown as a family home of the period by Manx National Heritage.', 'Grove Museum Ramsey', 45, 60),
             H('밀른타운 하우스', 'Milntown House', '램지 서쪽 끝의 옛 저택으로, 정원과 함께 둘러봅니다.', 'A historic house and gardens on the western edge of Ramsey.', 'Milntown House Ramsey', 60, 90),
             H('에어스와 포인트 오브 에어', 'The Ayres & Point of Ayre', '섬 북쪽 끝의 모래 언덕과 이끼 황야 보호구역으로, 제비갈매기와 물범, 철새를 볼 수 있습니다.', 'Dunes and lichen heath at the island’s northern tip, protected as nature reserves, with terns, seals and migrating birds.', 'Point of Ayre Isle of Man', 60, 120, b='no', n=FREE),
         ],
         hubs=IOM + "    rail: [['Ramsey', '램지역', '맨크스 전기 철도 종점|Manx Electric Railway terminus']],\n",
         itinerary={'days': [['', 1, 2, 3, 4]], 'trips': [['포인트 오브 에어|Point of Ayre', 5]]},
         season='해가 많이 드는 곳이지만 철도와 부두 개방은 4~10월 위주입니다.|Sunny, but the railway and pier openings are mostly April–October.',
         stay=[('램지 시내', 'Ramsey town', 'Ramsey, Isle of Man', '섬 북쪽 거점|Base for the north', '항구 둘레에 숙소와 식당이 있고, 전기 철도·버스로 더글러스와 이어집니다.|Hotels and restaurants around the harbour, with the electric railway and buses to Douglas.')],
         routes=[R('laxey', 'ramsey', 'train', 45, '맨크스 전기 철도 · ' + SEASON_RAIL), R('douglas', 'ramsey', 'bus', 50)],
         transit=dict(modes=['bus', 'train', 'walk'], ko='시내는 걸어서 다니고, 더글러스까지는 버스나 계절 운행 전기 철도로 갑니다.', en='Walk the town; buses and the seasonal electric railway run to Douglas.')),
    dict(COMMON, country='im', id='port-erin', after='castletown', ko='포트에린', en='Port Erin', native='Port Erin', lat=54.0860, lng=-4.7560,
         blurb=['맨섬 남서쪽의 해변 마을로, 더글러스에서 오는 증기 철도의 종점입니다. 둥근 만을 따라 모래 해변이 펼쳐지고, 북쪽 브래다 곶 위엔 열쇠 모양의 밀너 타워가 서 있습니다. 가까운 크레그니시 민속 마을과, 배로 건너는 무인도 카프 오브 맨까지 함께 둘러봅니다.',
                'A seaside village in the south-west of the Isle of Man and the terminus of the steam railway from Douglas. A sandy beach curves round its bay, and Milner’s Tower, shaped like a key, stands on Bradda Head to the north. The living-museum village of Cregneash and the Calf of Man, reached by boat, are close by.'],
         highlights=[
             H('포트에린 해변', 'Port Erin beach', '둥근 만 안쪽의 잔잔한 모래 해변으로, 해변 산책로를 따라 마을이 이어집니다.', 'A sheltered sandy beach at the head of the round bay, with the village along the promenade.', 'Port Erin beach', 45, 90, b='no', n=FREE),
             H('브래다 곶과 밀너 타워', 'Bradda Head & Milner’s Tower', '마을 북쪽 높이 116m의 곶으로, 꼭대기에 금고 회사 밀너를 기려 1871년 세운, 위에서 보면 열쇠와 자물쇠 모양인 탑이 있습니다. 해안 산책로로 오릅니다.', 'A 116 m headland north of the village, topped by Milner’s Tower, built in 1871 in memory of the safe-maker William Milner and shaped like a key and lock from above; reached on the coastal path.', "Milner's Tower Bradda Head", 60, 90, b='no', n=FREE),
             H('맨섬 철도 박물관', 'Isle of Man Railway Museum', '포트에린역 옆의 작은 박물관으로, 1873년 개통 이후 맨섬 철도의 역사와 지금은 사라진 노선들을 보여 줍니다.', 'A small museum by Port Erin station on the history of the Isle of Man Railway since 1873, including its long-closed lines.', 'Isle of Man Railway Museum Port Erin', 30, 45),
             H('크레그니시 민속 마을', 'Cregneash', '포트에린에서 약 2km 떨어진 섬 남서쪽 끝 마을로, 대부분이 옛 맨섬 농촌 생활을 보여 주는 살아 있는 박물관입니다.', 'A village at the island’s south-west tip, about 2 km from Port Erin, most of it a living museum of old Manx rural life.', 'Cregneash Village Folk Museum', 60, 90),
             H('카프 오브 맨', 'Calf of Man', '섬 남서쪽 끝 바다 건너의 작은 섬으로, 사람이 거의 살지 않는 자연 보호 섬입니다. 포트에린이나 포트세인트메리에서 배로 갑니다.', 'A small, all-but-uninhabited island across the sound off the south-west tip, a nature reserve reached by boat from Port Erin or Port St Mary.', 'Calf of Man', 180, 300, b='no', n='배는 날씨가 좋은 여름철에 다닙니다.|Boats run in summer, weather permitting.'),
         ],
         hubs=IOM + "    rail: [['Port Erin', '포트에린역', '증기 철도 종점|steam railway terminus']],\n",
         itinerary={'days': [['', 1, 3, 2]], 'trips': [['크레그니시와 카프 오브 맨|Cregneash & the Calf of Man', 4, 5]]},
         season='증기 철도와 카프 오브 맨 배가 다니는 4~9월이 좋습니다.|April–September, when the steam railway and Calf of Man boats run.',
         stay=[('포트에린 해변', 'Port Erin seafront', 'Port Erin, Isle of Man', '해변·남쪽 거점|Beach, base for the south', '해변 산책로를 따라 숙소가 있고, 버스·증기 철도로 캐슬타운·더글러스와 이어집니다.|Places to stay along the promenade, with buses and the steam railway to Castletown and Douglas.')],
         routes=[R('castletown', 'port-erin', 'train', 25, '증기 철도 · ' + SEASON_RAIL)],
         transit=dict(modes=['bus', 'train', 'walk'], ko='마을은 걸어서 다니고, 캐슬타운·더글러스까지 버스와 계절 운행 증기 철도가 다닙니다.', en='Walk the village; buses and the seasonal steam railway run to Castletown and Douglas.')),
]


class Jx:
    @staticmethod
    def dumps(o, **k):
        return json.dumps(o, **{**k, 'ensure_ascii': False})


WHEEL = ('지름 22.1m의 물레방아로, 1854년 로버트 케이스먼트가 광산 물을 퍼내려고 설계했으며 ‘레이디 이자벨라’라는 이름이 있습니다. 지금도 도는 원형 물레방아로는 세계에서 가장 큽니다.',
         'A waterwheel 22.1 m across, designed by Robert Casement in 1854 to pump water from the mines and named Lady Isabella; the largest original working waterwheel in the world.')
SNAEFELL = ('락시에서 섬 최고봉 스나펠(620.9m) 정상까지 오르는 1895년 개통 산악 전기 철도입니다.',
            'An electric mountain railway opened in 1895, climbing from Laxey to the summit of Snaefell (620.9 m), the island’s highest point.')


def move():
    c = rd('cities.ts')
    vi = rd('visit-uk.ts')
    pub = os.path.join(os.path.dirname(__file__), '..', 'public', 'highlights')
    for sn, dn, (dko, den) in [(4, 3, WHEEL), (5, 4, SNAEFELL)]:
        i = c.index(f'id: "douglas-h{sn}"')
        s = c.rindex(',\n      {', 0, i)
        e = c.index('\n      }', i) + len('\n      }')
        blk = c[s:e]
        c = c[:s] + c[e:]
        blk = blk.replace(f'id: "douglas-h{sn}"', f'id: "laxey-h{dn}"').replace(f'/highlights/douglas-{sn}.jpg', f'/highlights/laxey-{dn}.jpg')
        blk = re.sub(r'description: \{[^\n]*\}', f'description: {{ ko: "{dko}", en: "{den}" }}', blk)
        k = c.index('id: "laxey",')
        j = c.index('\n    ],\n', k)
        c = c[:j] + blk + c[j:]
        m = re.search(rf"^  'douglas-h{sn}': (v\(.*\)),\n", vi, re.M)
        vi = vi.replace(m.group(0), '')
        a = re.search(rf"^  'laxey-h{dn - 1}': v\(.*\),\n", vi, re.M)
        vi = vi[:a.end()] + f"  'laxey-h{dn}': {m.group(1)},\n" + vi[a.end():]
        os.replace(os.path.join(pub, f'douglas-{sn}.jpg'), os.path.join(pub, f'laxey-{dn}.jpg'))
    wr('cities.ts', c)
    wr('visit-uk.ts', vi)
    it = rd('itinerary-uk.ts')
    a = "trips: [['락시와 스나펠|Laxey & Snaefell', 6, 4, 5], ['그라우들 글렌|Groudle Glen', 9]]"
    assert it.count(a) == 1
    wr('itinerary-uk.ts', it.replace(a, "trips: [['맨크스 전기 철도|Manx Electric Railway', 6], ['그라우들 글렌|Groudle Glen', 9]]"))


if __name__ == '__main__':
    T.json = Jx
    T.CITIES = CITIES
    T.main()
    move()
    s = rd('countries.ts')
    s, n = re.subn(r"cityIds: \[[^\]]*'douglas'[^\]]*\]", "cityIds: ['douglas', 'laxey', 'ramsey', 'castletown', 'port-erin', 'peel']", s)
    assert n == 1
    wr('countries.ts', s)
