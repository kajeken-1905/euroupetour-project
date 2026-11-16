#!/usr/bin/env python3
"""North Macedonia review step 2 (2026-11-15, plan approved): Struga, Prilep, Kruševo and Štip as new cities. Reuses the
batch-3 writer (add_daytrip_places3.main); the country city groups are rewritten afterwards. Times are rounded typical
values. Run once."""
import json
import add_daytrip_places3 as T
from add_daytrip_places import rd, wr

DAY = ('근교 당일치기', 'Day trip')
COMMON = dict(hubs_file='hubs-east.ts', hubs_before='\n  // —— al ——\n', itin_file='itinerary-south.ts',
              itin_before='  nicosia: [', visit_file='visit-balkan.ts', visit_after=r"^  'tetovo-h\d+': v\(.*\),\n",
              stay_before='  soroca: [', apps='', transit_before='  // —— al ——\n  tirana: {', places=None,
              daytrips=[], routes=[])
LAST = r"^  r\('ohrid', 'bitola', 'bus', 75\),\n"
OHD = "['Ohrid St. Paul the Apostle (OHD)', '오흐리드 공항 (OHD)', '오흐리드|Ohrid']"


def C(**k):
    d = dict(COMMON)
    d.update(k)
    d['country'] = 'mk'
    return d


def H(ko, en, dko, den, maps, mn, mx, n=None, group=None):
    v = dict(min=mn, max=mx)
    if n:
        v['n'] = n
    d = dict(ko=ko, en=en, dko=dko, den=den, maps=maps, visit=v)
    if group:
        d['group'] = group
    return d


def R(*lines):
    return [('routes-east.ts', LAST, ''.join(lines))]


CITIES = [
    C(id='struga', after='ohrid', ko='스트루가', en='Struga', native='Струга', lat=41.1775, lng=20.6783,
      blurb=['오흐리드호 북쪽 끝, 검은 드림강이 호수를 떠나는 자리의 작은 도시. 강 위 ‘시의 다리’에서 해마다 국제 시 축제가 열리고, 호숫가 모래 해변과 근교 샘물 마을 베브차니가 있습니다.',
             'A small town at the northern end of Lake Ohrid where the Black Drin leaves the lake, with the Bridge of Poetry that hosts an international poetry festival, lakeside sandy beaches and the spring village of Vevčani nearby.'],
      highlights=[
          H('검은 드림강과 시의 다리', 'Black Drin & Bridge of Poetry', '호수에서 흘러나오는 검은 드림강을 따라 산책로가 이어지고, 다리 위에서 매년 8월 ‘스트루가 시의 저녁’ 축제가 열립니다.', 'A promenade runs along the Black Drin as it leaves the lake; the Struga Poetry Evenings festival takes place on the bridge every August.', 'Bridge of Poetry Struga', 30, 45),
          H('성 게오르기 교회', 'Church of St George', '1835년 지은 교회로, 13~14세기 성화 등 오흐리드 지방의 귀한 성화 컬렉션이 있습니다.', 'A church of 1835 holding a valuable collection of icons from the Ohrid region, some from the 13th–14th centuries.', 'Church of St George Struga', 15, 20),
          H('스트루가 해변', 'Struga beach', '호수 북쪽 끝의 모래 해변으로, 오흐리드보다 한적하게 수영을 즐깁니다.', 'The sandy beach at the northern end of the lake, quieter for swimming than Ohrid.', 'Struga city beach', 60, 180),
          H('칼리슈타 수도원', 'Kališta Monastery', '호숫가 바위에 지은 수도원으로, 절벽에 판 14세기 동굴 교회에 벽화가 남아 있습니다.', 'A lakeside monastery with a 14th-century cave church cut into the cliff, its frescoes still in place.', 'Kalishta Monastery', 45, 60,
            n='스트루가에서 남서쪽 약 5km, 택시로 10분입니다.|About 5 km south-west of Struga, 10 min by taxi.'),
          H('베브차니 샘', 'Vevčani Springs', '산기슭 바위틈에서 솟는 샘물이 나무 다리 아래로 흐르는 마을로, 1월의 가장행렬 축제로도 유명합니다.', 'A village where spring water gushes from the rocks under wooden footbridges, also known for its January carnival.', 'Vevčani Springs', 60, 90,
            n='스트루가에서 북서쪽 약 14km, 버스나 택시로 갑니다.|About 14 km north-west of Struga by bus or taxi.', group=DAY),
      ],
      hubs=f"    air: [{OHD}],\n    bus: [['Struga Bus Station', '스트루가 버스터미널']],\n",
      itinerary={'days': [['', 1, 2, 3, 4]], 'trips': [['베브차니 샘|Vevčani Springs', 5]]},
      season='6~9월이 호수에서 놀기 좋고, 8월 말 시 축제 때 붐빕니다.|June to September is best for the lake; busy during the poetry festival in late August.',
      stay=[('강변·호숫가 중심', 'Riverside centre', 'Struga centre', '걸어서 다 보기|Everything on foot', '시의 다리와 해변, 식당이 걸어서 가깝습니다. 오흐리드 공항이 10km쯤입니다.|The bridge, beach and restaurants are all on foot; Ohrid airport is about 10 km away.')],
      routes=R("  r('ohrid', 'struga', 'bus', 20),\n  r('skopje', 'struga', 'bus', 180),\n"),
      transit=dict(modes=['walk', 'bus', 'taxi'], ko='작은 도시라 걸어서 다니고, 오흐리드와는 버스가 자주 오갑니다.', en='A small town best on foot; buses run often to Ohrid.')),
    C(id='prilep', after='bitola', ko='프릴레프', en='Prilep', native='Прилеп', lat=41.3464, lng=21.5542,
      blurb=['담배 산업으로 알려진 펠라고니아 평야의 도시. 시내 뒤 바위 봉우리에 중세 왕 마르코의 요새 탑이 서 있고, 산 위 트레스카베츠 수도원과 오스만 구시장이 있습니다.',
             'A town on the Pelagonia plain known for tobacco, with the fortress towers of the medieval King Marko on the rocky peaks behind it, the Treskavec monastery on the mountain and an Ottoman old bazaar.'],
      highlights=[
          H('마르코의 탑', 'Markovi Kuli', '시내 북쪽 바위 봉우리에 남은 중세 요새 터로, 14세기 왕 마르코의 이름이 붙었고 기묘한 바위 사이로 길이 오릅니다.', 'The ruins of a medieval fortress on the rocky peaks north of town, named after the 14th-century King Marko; paths climb between strange rock formations.', 'Markovi Kuli Prilep', 90, 120),
          H('바로슈 성 대천사 미카엘 수도원', 'Monastery of St Archangel Michael, Varoš', '마르코의 탑 아래 옛 마을 바로슈의 12세기 수도원으로, 중세 벽화와 바위에 기댄 교회가 있습니다.', 'A 12th-century monastery in the old village of Varoš below Markovi Kuli, with medieval frescoes and a church built against the rock.', 'Monastery of St Archangel Michael Varos Prilep', 30, 45),
          H('구시장과 시계탑', 'Old Bazaar & Clock Tower', '오스만 시대 상점 골목이 남은 시장 지구로, 19세기 시계탑과 카페가 있습니다.', 'The bazaar quarter with its lanes of Ottoman-era shops, a 19th-century clock tower and cafés.', 'Prilep Clock Tower', 30, 45),
          H('담배 박물관', 'Tobacco Museum', '프릴레프 담배 산업의 역사와 세계 각국의 파이프·담뱃갑을 모은 박물관입니다.', 'A museum of Prilep’s tobacco industry, with pipes and tobacco boxes from around the world.', 'Tobacco Museum Prilep', 30, 45),
          H('트레스카베츠 수도원', 'Treskavec Monastery', '해발 1,280m 즐라토브르브산 바위 아래 12세기 수도원으로, 벽화와 펠라고니아 평야 전망이 있습니다.', 'A 12th-century monastery below the rocks of Mount Zlatovrv at 1,280 m, with frescoes and views over the Pelagonia plain.', 'Treskavec Monastery', 120, 180,
            n='프릴레프에서 약 8km, 비포장길이라 차로 가거나 2시간쯤 걸어 오릅니다.|About 8 km from Prilep on a rough road; drive or walk up in about 2 hours.', group=DAY),
      ],
      hubs="    air: [SKP()],\n    rail: [['Prilep', '프릴레프역']],\n    bus: [['Prilep Bus Station', '프릴레프 버스터미널']],\n",
      itinerary={'days': [['', 3, 4, 2, 1]], 'trips': [['트레스카베츠 수도원|Treskavec Monastery', 5]]},
      season='4~6월과 9~10월이 바위산을 걷기 좋습니다. 한여름엔 아주 덥습니다.|April to June and September to October are best for the rocky hills; midsummer is very hot.',
      stay=[('시내 중심', 'Town centre', 'Prilep centre', '구경 거점|Sightseeing base', '구시장과 박물관이 걸어서 가깝고 마르코의 탑까지 30분쯤 걷습니다.|The bazaar and museum are on foot, with Markovi Kuli about a 30-minute walk.')],
      routes=R("  r('bitola', 'prilep', 'bus', 50),\n  r('skopje', 'prilep', 'bus', 150),\n"),
      transit=dict(modes=['walk', 'bus', 'taxi', 'train'], ko='시내는 걸어서 다니고, 수도원은 차나 택시로 갑니다.', en='Walk the town; reach the monasteries by car or taxi.')),
    C(id='krusevo', after='prilep', ko='크루셰보', en='Kruševo', native='Крушево', lat=41.3697, lng=21.2486,
      blurb=['해발 1,350m의 발칸에서 가장 높은 도시. 1903년 일린덴 봉기의 ‘크루셰보 공화국’이 선포된 곳으로, 하얀 구조물 마케도니움과 19세기 집들이 늘어선 비탈 거리, 가수 토셰 프로에스키의 기념관이 있습니다.',
             'The highest town in the Balkans at 1,350 m, where the Kruševo Republic was proclaimed in the Ilinden Uprising of 1903; its white Makedonium monument, hillside streets of 19th-century houses and the memorial to the singer Toše Proeski are the sights.'],
      highlights=[
          H('마케도니움', 'Makedonium', '1974년 세운 둥근 흰 기념물로, 1903년 일린덴 봉기를 기리며 안에 색 유리와 봉기 지도자의 무덤이 있습니다.', 'A round white monument of 1974 commemorating the 1903 Ilinden Uprising, with stained glass and the tomb of an uprising leader inside.', 'Makedonium Krusevo', 30, 45),
          H('토셰 프로에스키 기념관', 'Toše Proeski Memorial House', '2007년 사고로 숨진 마케도니아 국민 가수의 삶과 무대 의상을 전시하는 기념관입니다.', 'A memorial museum of the life and stage costumes of Macedonia’s best-loved singer, killed in a crash in 2007.', 'Tose Proeski Memorial House', 45, 60),
          H('메치킨 카멘', 'Mečkin Kamen', '1903년 봉기군이 마지막까지 싸운 바위 언덕으로, 기념 조각과 마을 전망이 있습니다.', 'The rocky hill where the 1903 insurgents made their last stand, with a memorial sculpture and views over the town.', 'Meckin Kamen Krusevo', 30, 45),
          H('성 니콜라 교회', 'Church of St Nicholas', '봉기 때 불탄 뒤 1905년 다시 지은 교회로, 19세기 성화벽이 복원되어 있습니다.', 'A church rebuilt in 1905 after burning in the uprising, with its 19th-century iconostasis restored.', 'Church of St Nicholas Krusevo', 15, 20),
          H('크루셰보 구시가', 'Kruševo old town', '비탈을 따라 19세기 흰 집과 돌 골목이 이어지는 구시가로, 화가 니콜라 마르티노스키의 생가 미술관이 있습니다.', 'The old town of 19th-century white houses and stone lanes climbing the slope, with the gallery in the painter Nikola Martinoski’s birthplace.', 'Nikola Martinoski Gallery Krusevo', 45, 60),
      ],
      hubs="    air: [SKP()],\n    bus: [['Kruševo Bus Station', '크루셰보 버스터미널']],\n",
      itinerary={'days': [['', 5, 4, 2, 1, 3]]},
      season='5~10월이 걷기 좋고, 8월 2일 일린덴 기념일엔 행사가 열립니다. 겨울엔 작은 스키장이 엽니다.|May to October is best for walking; events mark Ilinden Day on 2 August, and a small ski slope opens in winter.',
      stay=[('구시가', 'Old town', 'Krusevo', '분위기|Atmosphere', '옛 집을 고친 숙소에서 묵으며 비탈 골목을 걷습니다. 마케도니움까지 걸어서 20분쯤입니다.|Stay in a restored old house and walk the hillside lanes; the Makedonium is about 20 minutes on foot.')],
      routes=R("  r('prilep', 'krusevo', 'bus', 50),\n  r('skopje', 'krusevo', 'bus', 180),\n"),
      transit=dict(modes=['walk', 'bus', 'taxi'], ko='작은 도시라 걸어서 다니고, 프릴레프에서 버스가 들어옵니다.', en='A small town best on foot; buses come in from Prilep.')),
    C(id='stip', after='krusevo', ko='슈티프', en='Štip', native='Штип', lat=41.7358, lng=22.1914,
      blurb=['동부 마케도니아의 중심 도시. 시내 위 이사르 언덕의 요새와 오스만 시대 베즈이스텐, 대학가 분위기가 있고, 근교에 고대 도시 바르갈라 유적이 있습니다.',
             'The main city of eastern Macedonia, with the fortress on the Isar hill above town, an Ottoman bezisten, a lively university scene and the ruins of the ancient city of Bargala nearby.'],
      highlights=[
          H('이사르 요새', 'Isar Fortress', '시내 위 언덕의 중세 요새 터로, 성벽과 큰 십자가가 서 있고 브레갈니차강과 시내가 내려다보입니다.', 'The ruins of a medieval fortress on the hill above town, with walls and a large cross, looking over the Bregalnica River and the city.', 'Isar Fortress Stip', 45, 60),
          H('베즈이스텐', 'Bezisten', '16~17세기 오스만 지붕 덮인 시장으로, 지금은 미술 전시관으로 씁니다.', 'A 16th–17th-century covered Ottoman market, now used as an art gallery.', 'Bezisten Stip', 15, 20),
          H('성 니콜라 교회', 'Church of St Nicholas', '1867년 지은 시내 중심 교회로, 성화 전시관이 딸려 있습니다.', 'The town’s main church of 1867, with an icon gallery attached.', 'Church of St Nicholas Stip', 15, 20),
          H('후사 메딘 파샤 모스크', 'Husa Medin Pasha Mosque', '이사르 언덕 기슭의 15세기 모스크로, 돔과 미너렛이 강 건너에서 잘 보입니다.', 'A 15th-century mosque at the foot of the Isar hill, its dome and minaret seen well from across the river.', 'Husa Medin Pasha Mosque Stip', 10, 15),
          H('바르갈라 유적', 'Bargala', '4~6세기 후기 로마 도시 유적으로, 성문과 바실리카, 목욕탕 터가 남아 있습니다.', 'The ruins of a late Roman city of the 4th–6th centuries, with a gate, a basilica and baths.', 'Bargala archaeological site', 45, 60,
            n='슈티프에서 북동쪽 약 20km, 차로 갑니다.|About 20 km north-east of Štip; go by car.', group=DAY),
      ],
      hubs="    air: [SKP()],\n    bus: [['Štip Bus Station', '슈티프 버스터미널']],\n",
      itinerary={'days': [['', 2, 3, 4, 1]], 'trips': [['바르갈라 유적|Bargala', 5]]},
      season='4~6월과 9~10월이 걷기 좋습니다. 한여름엔 매우 덥습니다.|April to June and September to October are best for walking; midsummer is very hot.',
      stay=[('시내 중심', 'City centre', 'Štip centre', '구경 거점|Sightseeing base', '베즈이스텐과 교회, 이사르 언덕 오르는 길이 걸어서 가깝습니다.|The bezisten, the church and the path up the Isar are all on foot.')],
      routes=R("  r('skopje', 'stip', 'bus', 100),\n"),
      transit=dict(modes=['walk', 'bus', 'taxi'], ko='시내는 걸어서 다니고, 바르갈라는 차나 택시로 갑니다.', en='Walk the town; reach Bargala by car or taxi.')),
]

MK_NEW = """    cityIds: ['skopje', 'tetovo', 'ohrid', 'struga', 'bitola', 'prilep', 'krusevo', 'stip'],
    cityGroups: [
      { title: { ko: '스코페·북부', en: 'Skopje & north' }, cityIds: ['skopje', 'tetovo'] },
      { title: { ko: '남서부', en: 'South-west' }, cityIds: ['ohrid', 'struga'] },
      { title: { ko: '남부', en: 'South' }, cityIds: ['bitola', 'prilep', 'krusevo'] },
      { title: { ko: '동부', en: 'East' }, cityIds: ['stip'] },
    ],
"""


class J:
    @staticmethod
    def dumps(o, **k):
        return json.dumps(o, **{**k, 'ensure_ascii': False})


if __name__ == '__main__':
    T.json = J
    T.CITIES = CITIES
    T.main()
    k = rd('countries.ts')
    i = k.index("    id: 'mk',")
    j = k.index('    cityGroups: [', i)
    e = k.index('    ],\n', j) + len('    ],\n')
    s = k.index('    cityIds: [', i)
    assert s < j
    k = k[:s] + MK_NEW + k[e:]
    wr('countries.ts', k)
