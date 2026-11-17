#!/usr/bin/env python3
"""Moldova review step 2 (2026-11-16, plan approved): Saharna, Purcari and Comrat as new cities (all west of the
Dniester; Transnistria left out). Lake Beleu is a Comrat day trip (car only). Reuses the batch-3 writer
(add_daytrip_places3.main); the country city groups are rewritten afterwards. Times are rounded typical values. Run once. Comrat h1 (the Gagauz history museum) was swapped afterwards for the
central market (no free photo of the museum), and Saharna h3 renamed to include the cliff cave cells shown in the
chosen photo."""
import json
import add_daytrip_places3 as T
from add_daytrip_places import rd, wr

DAY = ('근교 당일치기', 'Day trip')
CH = '입장은 무료이고 어깨와 무릎을 가려야 합니다. 여성은 머리를 가립니다.|Free; cover shoulders and knees, and women cover their hair.'
TOUR = '와이너리 투어는 미리 예약해야 하며 시간과 요금은 공식 사이트에서 확인하세요.|Winery tours must be booked ahead; check times and prices on the official site.'
COMMON = dict(hubs_file='hubs-east.ts', hubs_before='  // —— im, je, gg (Crown Dependencies) ——\n', itin_file='itinerary-south.ts',
              itin_before='  yerevan: [', visit_file='visit-east.ts', visit_after=r"^  'soroca-h\d+': v\(.*\),\n",
              stay_before='  dilijan: [', apps='', transit_before='  yerevan: {', places=None, daytrips=[], routes=[])
LAST = r"^  r\('chisinau', 'soroca', 'bus', 165.*\),\n"


def C(**k):
    d = dict(COMMON)
    d.update(k)
    d['country'] = 'md'
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


def J2(a, b):
    return a.split('|')[0] + ' ' + b.split('|')[0] + '|' + a.split('|')[1] + ' ' + b.split('|')[1]


CITIES = [
    C(id='saharna', after='orheiul-vechi', ko='사하르나', en='Saharna', native='Saharna', lat=47.6930, lng=28.9660,
      blurb=['드네스트르강 절벽 아래 숲 속의 수도원 마을. 18세기 성 삼위일체 수도원과 폭포가 이어지는 협곡이 있고, 남쪽 티포바에는 몰도바에서 가장 큰 절벽 동굴 수도원이 있습니다.',
             'A monastery village in the woods below the Dniester cliffs, with the 18th-century Holy Trinity Monastery and a gorge of waterfalls; to the south, Țipova has the largest cliff cave monastery in Moldova.'],
      highlights=[
          H('성 삼위일체 수도원', 'Holy Trinity Monastery', '18세기에 세운 수도원으로, 협곡 바닥에 금빛 돔의 교회들이 모여 있고 순례자가 많이 찾습니다.', 'An 18th-century monastery whose gold-domed churches cluster on the floor of the gorge, a major pilgrimage site.', 'Saharna Monastery', 45, 60, n=CH),
          H('사하르나 폭포 협곡', 'Saharna waterfalls', '수도원 옆 개울을 따라 작은 폭포가 줄지어 떨어지는 협곡으로, 숲길을 따라 걸어 오릅니다.', 'A gorge beside the monastery where a stream drops over a string of small waterfalls, followed by a woodland path.', 'Saharna waterfalls', 60, 90),
          H('성모 발자국 바위', 'Rock of the Virgin’s footprint', '수도원 위 절벽 꼭대기의 바위로, 성모의 발자국이 남았다는 전설이 있고 작은 교회와 협곡 전망이 있습니다.', 'The rock on the cliff top above the monastery said to bear the Virgin’s footprint, with a small church and views over the gorge.', 'Saharna Virgin footprint', 45, 60),
          H('티포바 동굴 수도원', 'Țipova Cave Monastery', '드네스트르강 위 절벽에 판 동굴 교회와 수도실들로, 몰도바에서 가장 큰 동굴 수도원입니다.', 'Cave churches and cells cut into the cliffs above the Dniester, the largest cave monastery in Moldova.', 'Tipova Monastery', 90, 120,
            n=J2('사하르나에서 남쪽으로 차로 약 30분이고, 절벽 계단이 가파릅니다.|About 30 min south of Saharna by car; the cliff steps are steep.', CH), group=DAY),
          H('티포바 폭포와 협곡', 'Țipova waterfall & gorge', '동굴 수도원 옆 골짜기로 내려가는 길에 폭포와 바위 협곡이 이어집니다.', 'Beside the cave monastery a path drops into a rocky valley with a waterfall.', 'Tipova waterfall', 45, 60, group=DAY),
      ],
      hubs="    air: [RMO()],\n    bus: [['Gara Auto Rezina', '레지나 버스터미널', '사하르나까지 택시 약 15분|about 15 min by taxi to Saharna']],\n",
      itinerary={'days': [['', 1, 2, 3]], 'trips': [['티포바 동굴 수도원|Țipova', 4, 5]]},
      season='5~10월이 협곡을 걷기 좋습니다. 8월 28일 성모 안식 축일에는 순례자가 몰립니다.|May to October is best for the gorge; pilgrims crowd in for the Dormition feast on 28 August.',
      stay=[('수도원 근처 민박', 'Guesthouses near the monastery', 'Saharna', '조용한 하룻밤|A quiet night', '마을에 민박이 몇 곳 있습니다. 대부분은 키시너우나 오르헤이에서 당일치기로 옵니다.|The village has a few guesthouses; most visitors come on a day trip from Chișinău or Orhei.')],
      routes=R("  r('chisinau', 'saharna', 'bus', 150, { fa: '북부 버스터미널|Gara de Nord', n: '레지나까지 버스 뒤 택시|bus to Rezina, then taxi' }),\n"),
      transit=dict(modes=['walk', 'bus', 'taxi'], ko='마을과 협곡은 걸어서 다니고, 티포바는 택시나 차로 갑니다.', en='Walk the village and gorge; reach Țipova by taxi or car.')),
    C(id='purcari', after='saharna', ko='푸르카리', en='Purcari', native='Purcari', lat=46.5240, lng=29.8650,
      blurb=['드네스트르강 하류의 와인 마을. 1827년 문을 연 몰도바에서 손꼽히게 오래된 와이너리 샤토 푸르카리가 있고, 근처에 다른 와이너리와 강변 습지 국립공원, 반쯤 땅에 묻힌 중세 교회가 있습니다.',
             'A wine village on the lower Dniester, home to Château Purcari, opened in 1827 and among Moldova’s oldest wineries, with other wineries, a riverside wetland national park and a half-sunken medieval church nearby.'],
      highlights=[
          H('샤토 푸르카리', 'Château Purcari', '1827년 문을 연 와이너리로, 호숫가의 성 같은 저택과 저장고를 둘러보고 시음하며 숙소와 식당도 있습니다.', 'A winery founded in 1827, with a castle-like manor by a lake and cellars to tour and taste in, plus rooms and a restaurant.', 'Chateau Purcari', 120, 180, n=TOUR),
          H('에트체테라 와이너리', 'Et Cetera Winery', '크로크마즈 마을의 가족 와이너리로, 포도밭 사이 테라스 식당과 시음이 있습니다.', 'A family winery in Crocmaz village with tastings and a terrace restaurant among the vines.', 'Et Cetera Winery Crocmaz', 90, 120, n=TOUR),
          H('니스트루 데 조스 국립공원', 'Lower Dniester National Park', '드네스트르강 하류의 습지와 숲을 지키는 국립공원으로, 강변 산책로와 새 관찰 장소가 있습니다.', 'A national park protecting the wetlands and woods of the lower Dniester, with riverside walks and birdwatching spots.', 'Lower Dniester National Park', 90, 180),
          H('카우셰니 성모 안식 교회', 'Church of the Dormition, Căușeni', '오스만 시대 규정 때문에 반쯤 땅속에 지은 18세기 교회로, 안쪽 벽과 천장이 벽화로 덮여 있습니다.', 'An 18th-century church built half below ground under Ottoman-era rules, its walls and ceiling covered in frescoes inside.', 'Church of the Dormition Causeni', 30, 45,
            n=J2('푸르카리에서 서쪽으로 차로 약 1시간입니다.|About 1 hour west of Purcari by car.', CH), group=DAY),
      ],
      hubs="    air: [RMO()],\n    bus: [['Gara Auto Ștefan Vodă', '슈테판 보더 버스터미널']],\n",
      itinerary={'days': [['', 1, 2, 3]], 'trips': [['카우셰니 교회|Căușeni church', 4]]},
      season='9~10월 수확철이 가장 좋고, 여름엔 덥습니다. 겨울엔 와이너리 투어가 줄어듭니다.|September–October harvest time is best; summers are hot, and winery tours thin out in winter.',
      stay=[('와이너리 숙소', 'Winery stay', 'Chateau Purcari', '와인 여행|Wine trip', '샤토 푸르카리 안에 객실이 있어 시음 뒤 그대로 묵을 수 있습니다.|Château Purcari has rooms on the estate, so you can stay after the tasting.')],
      routes=R("  r('chisinau', 'purcari', 'bus', 150, { fa: '중앙 버스터미널|Gara Centrală', n: '슈테판 보더까지 버스 뒤 택시|bus to Ștefan Vodă, then taxi' }),\n"),
      transit=dict(modes=['bus', 'taxi', 'walk'], ko='대중교통이 드물어 키시너우에서 차나 택시, 와이너리 투어로 많이 갑니다.', en='Public transport is sparse; most people come from Chișinău by car, taxi or a winery tour.')),
    C(id='comrat', after='purcari', ko='코므라트', en='Comrat', native='Comrat', lat=46.2950, lng=28.6560,
      blurb=['튀르크계 정교회 신자인 가가우즈 사람들의 자치 지역 가가우지아의 중심 도시. 가가우즈 민속 박물관과 대성당, 자치 의회가 있고, 근교 베살마 마을 박물관과 남쪽 끝 베레우 호수로 다녀옵니다.',
             'The main town of Gagauzia, the autonomous region of the Turkic-speaking Orthodox Gagauz, with a Gagauz folk museum, a cathedral and the regional assembly; day trips go to the Besalma village museum and Lake Beleu in the far south.'],
      highlights=[
          H('가가우즈 민속·역사 박물관', 'Gagauz History & Ethnography Museum', '가가우즈 사람들의 전통 의상과 생활 도구, 역사를 보여 주는 박물관입니다.', 'A museum of the costume, household objects and history of the Gagauz people.', 'Comrat museum of history and ethnography', 45, 60),
          H('성 요한 대성당', 'Cathedral of St John the Baptist', '시내 중심의 큰 정교회 대성당으로, 하얀 벽과 금빛 돔이 섭니다.', 'The large Orthodox cathedral in the town centre, with white walls and gilded domes.', 'Comrat Cathedral', 15, 20, n=CH),
          H('중앙 광장과 자치 의회', 'Main square & People’s Assembly', '가가우지아 자치 의회 건물과 동상이 선 중앙 광장으로, 주변에 식당과 시장이 모여 있습니다.', 'The central square with the Gagauz People’s Assembly building and statues, surrounded by restaurants and the market.', 'Comrat Lenin Square', 20, 30),
          H('베살마 가가우즈 박물관', 'Besalma Gagauz Museum', '베살마 마을의 민속 박물관으로, 가가우즈 전통 가옥과 공예품, 민속학자 드미트리 카라 초반의 자료가 있습니다.', 'A folk museum in Besalma village with a traditional Gagauz house, crafts and the collection of the folklorist Dmitri Kara Çoban.', 'Besalma museum', 45, 60,
            n='코므라트에서 남쪽 약 15km, 택시로 갑니다.|About 15 km south of Comrat by taxi.', group=DAY),
          H('베레우 호수', 'Lake Beleu', '프루트강 하류 자연보호구역의 호수와 습지로, 철새와 펠리컨을 볼 수 있습니다.', 'A lake and wetland in the Lower Prut nature reserve, with migrating birds and pelicans.', 'Lake Beleu', 120, 180,
            n='코므라트에서 남서쪽으로 차로 약 1시간 30분이고 대중교통이 거의 없습니다. 보호구역 방문 규칙을 미리 확인하세요.|About 1½ hours south-west of Comrat by car, with almost no public transport; check the reserve’s visiting rules first.', group=DAY),
      ],
      hubs="    air: [RMO()],\n    bus: [['Gara Auto Comrat', '코므라트 버스터미널']],\n",
      itinerary={'days': [['', 3, 2, 1]], 'trips': [['베살마 박물관|Besalma', 4], ['베레우 호수|Lake Beleu', 5]]},
      season='5~6월과 9월이 좋고, 여름엔 덥습니다. 9월엔 와인 축제가 열리기도 합니다.|May–June and September are best; summers are hot, and wine festivals sometimes run in September.',
      stay=[('시내 중심', 'Town centre', 'Comrat', '구경 거점|Sightseeing base', '박물관과 대성당, 광장이 모두 걸어서 가깝습니다.|The museum, cathedral and square are all on foot.')],
      routes=R("  r('chisinau', 'comrat', 'bus', 120, { fa: '남부 버스터미널|Gara de Sud' }),\n"),
      transit=dict(modes=['walk', 'bus', 'taxi'], ko='시내는 걸어서 다니고, 근교는 택시나 차로 갑니다.', en='Walk the town; take a taxi or car for the surroundings.')),
]

MD_NEW = """    cityIds: ['chisinau', 'orheiul-vechi', 'saharna', 'soroca', 'purcari', 'comrat'],
    cityGroups: [
      { title: { ko: '키시너우·중부', en: 'Chișinău & centre' }, cityIds: ['chisinau', 'orheiul-vechi', 'saharna'] },
      { title: { ko: '북부', en: 'North' }, cityIds: ['soroca'] },
      { title: { ko: '남부', en: 'South' }, cityIds: ['purcari', 'comrat'] },
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
    i = k.index("    id: 'md',")
    j = k.index('    cityGroups: [', i)
    e = k.index('    ],\n', j) + len('    ],\n')
    s = k.index('    cityIds: [', i)
    assert s < j
    k = k[:s] + MD_NEW + k[e:]
    wr('countries.ts', k)
