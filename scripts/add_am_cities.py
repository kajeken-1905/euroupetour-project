#!/usr/bin/env python3
"""Armenia step 2 (2026-11-20, user picked every proposed city): Vagharshapat (Etchmiadzin), Garni (Geghard), Sevan,
Goris (Tatev), Alaverdi (Haghpat), Yeghegnadzor, Jermuk. Reuses the batch-3 writer (add_daytrip_places3.main); the
country city groups are written afterwards.
MOFA (0404.go.kr, notice of 2026-07-30): Ararat, Gegharkunik, Vayots Dzor, Syunik and Tavush provinces are level 2;
within 5 km of the Azerbaijani border (Nakhchivan included) is level 4 (travel ban). Distances measured against the OSM
boundary: Noravank 4.0 km, Areni 3.3 km, Areni-1 cave 4.6 km and Old Khndzoresk 4.7 km are inside the ban zone and left
out (user decision); everything listed here is 6 km or more away. Level-2 cities get the blurb suffix, as do Dilijan
and Khor Virap (existing). Times are rounded typical minibus values. Run once."""
import json
import add_daytrip_places3 as T
from add_daytrip_places import rd, wr

DAY = ('근교 당일치기', 'Day trip')
CHURCH = '입장은 무료입니다. 어깨와 무릎을 가리는 차림이 좋고, 여성은 스카프로 머리를 가리기도 합니다.|Free; cover shoulders and knees, and women often cover their hair with a scarf.'
L2K = ' 외교부 여행경보 2단계(여행자제) 지역입니다.'
L2E = ' A level-2 (refrain from travel) area on the Korean travel alert.'
COMMON = dict(hubs_file='hubs-east.ts', hubs_before='  dilijan: {\n    air: [EVN()]', itin_file='itinerary-south.ts', itin_before='  baku: [3, 2, 1],',
              visit_file='visit-east.ts', visit_after=r"^  'dilijan-h\d+': v\(.*\),\n", stay_before='  dilijan: [', apps='',
              transit_before='  baku: {\n    modes', places=None, daytrips=[])
LAST = r"^  r\('yerevan', 'dilijan', 'bus', 105, .*\),\n"
EVN = "EVN()"
MIN = "n: '미니버스|minibus'"


def C(**k):
    d = dict(COMMON)
    d.update(k)
    d['country'] = 'am'
    return d


def H(ko, en, dko, den, maps, mn, mx, n=None, group=None, **vk):
    v = dict(min=mn, max=mx, **vk)
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


WALK = dict(modes=['walk', 'bus', 'taxi'])

CITIES = [
    C(id='vagharshapat', after='yerevan', ko='바가르샤파트 (에치미아진)', en='Vagharshapat (Etchmiadzin)', native='Վաղարշապատ', lat=40.1617, lng=44.2914,
      blurb=['아르메니아 사도 교회의 총본산이 있는 성스러운 도시. 4세기에 처음 세운 에치미아진 대성당과 성 흐립시메·가야네 교회, 7세기 즈바르트노츠 대성당 유적이 세계유산이며, 예레반에서 30분 거리입니다.',
             'The holy city at the heart of the Armenian Apostolic Church: Etchmiadzin Cathedral, first built in the 4th century, the churches of St Hripsime and St Gayane, and the ruins of 7th-century Zvartnots Cathedral are World Heritage sites, 30 minutes from Yerevan.'],
      highlights=[
          H('에치미아진 대성당', 'Etchmiadzin Cathedral', '301년 기독교를 국교로 삼은 직후 세운 세계에서 손꼽히게 오래된 대성당으로, 가톨리코스가 머무는 총본산입니다.', 'Among the oldest cathedrals in the world, founded soon after Armenia adopted Christianity in 301, and the seat of the Catholicos.', 'Etchmiadzin Cathedral', 60, 90, n=CHURCH),
          H('성 흐립시메 교회', 'St Hripsime Church', '618년에 지은 교회로, 순교한 성녀 흐립시메를 기리며 초기 아르메니아 건축의 걸작으로 꼽힙니다.', 'A church of 618 honouring the martyred St Hripsime, regarded as a masterpiece of early Armenian architecture.', 'Saint Hripsime Church', 20, 30, n=CHURCH),
          H('성 가야네 교회', 'St Gayane Church', '630년에 지은 교회로, 흐립시메와 함께 순교한 원장 가야네를 기립니다.', 'A church of 630 honouring the abbess Gayane, martyred with Hripsime.', 'Saint Gayane Church', 15, 20, n=CHURCH),
          H('즈바르트노츠 대성당 유적', 'Zvartnots Cathedral ruins', '7세기 원형 3층 대성당의 기둥과 터가 남은 유적으로, 맑은 날엔 뒤로 아라라트산이 보입니다.', 'The columns and foundations of a 7th-century three-tiered round cathedral, with Mount Ararat behind on clear days.', 'Zvartnots Cathedral', 45, 60,
            n='예레반과 바가르샤파트 사이, 공항 가까이에 있습니다. 유료입니다.|Between Yerevan and Vagharshapat, near the airport; ticketed.'),
      ],
      hubs=f"    air: [{EVN}],\n",
      itinerary={'days': [['', 1, 3, 2, 4]]},
      season='4~6월과 9~10월이 좋습니다. 일요일 오전 대성당 미사에 가 볼 만합니다.|April–June and September–October are best; Sunday morning liturgy at the cathedral is worth attending.',
      stay=[('대성당 주변', 'Around the cathedral', 'Etchmiadzin Cathedral', '조용한 저녁|Quiet evenings', '대부분 예레반에서 당일치기로 다녀오지만, 대성당 근처에 작은 숙소가 있습니다.|Most visit as a day trip from Yerevan, but there are small hotels near the cathedral.')],
      routes=R(f"  r('yerevan', 'vagharshapat', 'bus', 35, {{ {MIN} }}),\n"),
      transit=dict(WALK, ko='대성당과 교회들은 걸어서 다니고, 즈바르트노츠는 택시나 예레반행 미니버스로 들릅니다.', en='Walk between the cathedral and churches; take a taxi or a Yerevan minibus to Zvartnots.')),

    C(id='garni', after='vagharshapat', ko='가르니 (게하르트)', en='Garni (Geghard)', native='Գառնի', lat=40.1194, lng=44.7300,
      blurb=['아자트 강 협곡 위의 마을. 1세기 그리스·로마식 가르니 신전과 협곡의 육각 현무암 기둥 ‘돌의 교향곡’이 있고, 근처에 바위를 파서 지은 세계유산 게하르트 수도원이 있어 예레반에서 함께 다녀옵니다.',
             'A village above the Azat river gorge, with the 1st-century Greco-Roman Temple of Garni and the hexagonal basalt columns of the “Symphony of Stones” in the gorge; nearby is Geghard, a World Heritage monastery carved into the rock, and the two are visited together from Yerevan.'],
      highlights=[
          H('가르니 신전', 'Temple of Garni', '1세기에 지은 이오니아식 신전으로, 옛 소련 지역에 남은 유일한 그리스·로마식 신전입니다. 옆에 왕궁 목욕탕 모자이크가 있습니다.', 'An Ionic temple of the 1st century, the only Greco-Roman colonnaded temple in the former Soviet Union, with a mosaic in the royal bath beside it.', 'Temple of Garni', 45, 60,
            n='유료입니다.|Ticketed.'),
          H('돌의 교향곡', 'Symphony of Stones', '협곡 벽을 따라 육각형 현무암 기둥이 파이프오르간처럼 늘어선 곳으로, 신전 아래 협곡 길로 내려갑니다.', 'Hexagonal basalt columns lining the gorge wall like organ pipes, reached by the road down into the gorge below the temple.', 'Symphony of Stones', 60, 90),
          H('게하르트 수도원', 'Geghard Monastery', '바위를 파고 들어가 지은 13세기 수도원으로, 동굴 성당 안에서 울리는 소리가 신비롭습니다.', 'A 13th-century monastery partly carved into the rock, with cave chapels of remarkable acoustics.', 'Geghard Monastery', 60, 90, group=DAY,
            n=J2('가르니에서 동쪽 약 10km, 택시로 갑니다.|About 10 km east of Garni by taxi.', CHURCH)),
      ],
      hubs=f"    air: [{EVN}],\n",
      itinerary={'days': [['', 1, 2]], 'trips': [['게하르트 수도원|Geghard', 3]]},
      season='5~10월이 좋습니다. 협곡 길은 비 온 뒤 미끄럽습니다.|May–October is best; the gorge road is slippery after rain.',
      stay=[('가르니 마을', 'Garni village', 'Garni', '마을 민박|Village guesthouses', '대부분 예레반에서 당일치기로 다녀오지만, 신전 근처 민박에서 묵을 수도 있습니다.|Most visit from Yerevan, but guesthouses near the temple make a quiet overnight.')],
      routes=R(f"  r('yerevan', 'garni', 'bus', 45, {{ {MIN} }}),\n"),
      transit=dict(WALK, ko='신전과 협곡은 걸어서 다니고, 게하르트는 택시를 탑니다. 예레반에서 택시나 투어로 함께 도는 경우가 많습니다.', en='Walk the temple and gorge; take a taxi to Geghard. Many combine both by taxi or tour from Yerevan.')),

    C(id='sevan', after='dilijan', ko='세반', en='Sevan', native='Սևան', lat=40.5481, lng=44.9483,
      blurb=['해발 1,900m 세반 호수 북서쪽 기슭의 도시. 반도 위 9세기 세바나방크 수도원에서 푸른 호수를 내려다보고, 여름엔 호숫가에서 수영하며, 남쪽 기슭의 하치카르(십자가 돌) 묘지 노라투스로 다녀옵니다.' + L2K,
             'A town on the north-west shore of Lake Sevan at 1,900 m: look over the blue lake from the 9th-century Sevanavank Monastery on its peninsula, swim from the beaches in summer, and visit the khachkar (cross-stone) cemetery of Noratus on the southern shore.' + L2E],
      highlights=[
          H('세바나방크 수도원', 'Sevanavank Monastery', '반도 언덕 위 9세기 두 교회로, 계단을 오르면 호수와 산이 한눈에 보입니다.', 'Two 9th-century churches on the hill of a peninsula; climb the steps for views over the lake and mountains.', 'Sevanavank', 45, 60, n=CHURCH),
          H('세반 호숫가', 'Lake Sevan shore', '반도 양쪽에 모래 해변과 호숫가 식당이 늘어서고, 여름엔 물이 차갑지만 수영을 합니다.', 'Sand beaches and lakeside restaurants on both sides of the peninsula; the water is cold, but people swim in summer.', 'Sevan peninsula beach', 60, 120),
          H('하야라방크 수도원', 'Hayravank Monastery', '호숫가 바위 위의 9~12세기 작은 수도원입니다.', 'A small 9th–12th-century monastery on a rocky shore of the lake.', 'Hayravank', 20, 30, group=DAY, n=CHURCH),
          H('노라투스 하치카르 묘지', 'Noratus cemetery', '중세 하치카르(십자가 돌) 수백 기가 서 있는 들판 묘지로, 아르메니아에서 가장 큰 하치카르 숲입니다.', 'A field cemetery of hundreds of medieval khachkars (cross-stones), the largest collection in Armenia.', 'Noratus cemetery', 45, 60, group=DAY,
            n='세반에서 남동쪽 약 25km입니다.|About 25 km south-east of Sevan.'),
      ],
      hubs=f"    air: [{EVN}],\n    bus: [['Northern Bus Station Yerevan', '예레반 북부 버스터미널', '예레반 · 세반행 미니버스 출발|Yerevan · minibuses to Sevan leave from here']],\n",
      itinerary={'days': [['', 1, 2]], 'trips': [['하야라방크·노라투스|Hayravank & Noratus', 3, 4]]},
      season='6~9월이 좋습니다. 호수 물은 7~8월에야 수영할 만해지고, 겨울엔 춥습니다.|June–September is best; the lake is swimmable only in July–August, and winters are cold.',
      stay=[('세반 반도 주변', 'Around the peninsula', 'Sevan peninsula', '호수 전망|Lake views', '수도원 아래 호숫가 호텔과 리조트가 모여 있습니다. 여름 주말엔 일찍 찹니다.|Lakeside hotels and resorts below the monastery; book early for summer weekends.')],
      routes=R(f"  r('yerevan', 'sevan', 'bus', 75, {{ fa: '북부 버스터미널|Northern Bus Station', {MIN} }}),\n  r('sevan', 'dilijan', 'bus', 40, {{ {MIN} }}),\n"),
      transit=dict(WALK, ko='시내에서 반도까지는 택시가 편하고, 노라투스는 택시로 다녀옵니다.', en='A taxi is easiest from town to the peninsula and to Noratus.')),

    C(id='alaverdi', after='gyumri', ko='알라베르디 (하흐파트)', en='Alaverdi (Haghpat)', native='Ալավերդի', lat=41.0975, lng=44.6556,
      blurb=['북부 데베드 강 협곡의 광산 도시. 협곡 양쪽 언덕에 10~13세기 하흐파트·사나힌 수도원이 세계유산으로 남아 있고, 벽화가 아름다운 아흐탈라 수도원과 오준 교회로 다녀옵니다.',
             'A mining town in the Debed river gorge in the north: on the hills either side stand the 10th–13th-century monasteries of Haghpat and Sanahin, a World Heritage site, with trips to the frescoed Akhtala Monastery and Odzun church.'],
      highlights=[
          H('사나힌 수도원', 'Sanahin Monastery', '협곡 언덕 위 10세기 수도원으로, 이끼 낀 돌 회랑과 바닥에 묘비가 깔린 교회들이 있습니다.', 'A 10th-century monastery on the gorge rim, with mossy stone halls and churches floored with gravestones.', 'Sanahin Monastery', 45, 60, n=CHURCH),
          H('하흐파트 수도원', 'Haghpat Monastery', '976년에 세운 수도원으로, 산을 배경으로 교회와 종탑, 도서관이 모여 있습니다.', 'A monastery founded in 976, a cluster of churches, a bell tower and a library against the mountains.', 'Haghpat Monastery', 45, 60, n=CHURCH),
          H('오준 교회', 'Odzun Church', '협곡 위 고원의 6~7세기 교회로, 옆에 독특한 쌍아치 기념비가 있습니다.', 'A 6th–7th-century church on a plateau above the gorge, with an unusual twin-arched monument beside it.', 'Odzun Church', 30, 45, group=DAY, n=CHURCH),
          H('아흐탈라 수도원', 'Akhtala Monastery', '요새 성벽 안의 13세기 성당으로, 안쪽 벽을 가득 채운 벽화가 잘 남아 있습니다.', 'A 13th-century church inside fortress walls, its interior covered in well-preserved frescoes.', 'Akhtala Monastery', 45, 60, group=DAY,
            n='알라베르디에서 북쪽 약 20km입니다.|About 20 km north of Alaverdi.'),
      ],
      hubs=f"    air: [{EVN}],\n    rail: [['Alaverdi', '알라베르디역', '예레반–트빌리시 열차가 섭니다|on the Yerevan–Tbilisi line']],\n",
      itinerary={'days': [['', 1, 2]], 'trips': [['오준 교회|Odzun', 3], ['아흐탈라 수도원|Akhtala', 4]]},
      season='5~10월이 좋습니다. 가을 단풍 때 협곡이 아름답습니다.|May–October is best; the gorge is lovely in autumn colour.',
      stay=[('하흐파트·사나힌 마을', 'Haghpat or Sanahin village', 'Haghpat', '수도원 옆 민박|Guesthouses by the monasteries', '광산 도시 시내보다 수도원 마을의 민박이 조용합니다.|Guesthouses in the monastery villages are quieter than the mining town.')],
      routes=R(f"  r('yerevan', 'alaverdi', 'bus', 180, {{ {MIN} }}),\n  r('tbilisi', 'alaverdi', 'bus', 120, {{ n: MARSH }}),\n"),
      transit=dict(WALK, ko='수도원과 마을 사이는 택시를 타는 것이 편합니다.', en='Taxis are easiest between the monasteries and villages.')),

    C(id='yeghegnadzor', after='garni', ko='예게그나조르', en='Yeghegnadzor', native='Եղեգնաձոր', lat=39.7611, lng=45.3333,
      blurb=['남부 바요츠조르 지방의 중심 도시로, 남쪽 고원으로 가는 길목입니다. 산속 14세기 셀림 카라반사라이와 언덕 위 스밧타베르드 요새로 다녀옵니다. 노라방크 수도원과 아레니 마을·동굴은 아제르바이잔(나히체반) 국경 5km 안의 여행금지 구간입니다.' + L2K,
             'The main town of Vayots Dzor in the south, on the way to the southern highlands, with trips to the 14th-century Selim Caravanserai in the mountains and the hilltop Smbataberd fortress. Noravank Monastery and Areni village and cave lie within 5 km of the Azerbaijani (Nakhchivan) border, in the travel-ban zone.' + L2E],
      highlights=[
          H('셀림 카라반사라이', 'Selim Caravanserai', '해발 2,400m 고갯길에 1332년 지은 대상(隊商) 숙소로, 돌 지붕 아래 긴 회랑이 남아 있습니다.', 'A caravan inn built in 1332 on a 2,410 m mountain pass, its long stone-roofed hall still intact.', 'Selim Caravanserai', 30, 45, group=DAY,
            n='예게그나조르에서 북쪽 약 25km, 겨울엔 눈으로 길이 막힐 수 있습니다.|About 25 km north of Yeghegnadzor; snow can close the pass in winter.'),
          H('스밧타베르드 요새', 'Smbataberd', '두 협곡 사이 능선을 따라 쌓은 중세 요새 성벽으로, 걸어서 오릅니다.', 'Medieval fortress walls running along a ridge between two gorges, reached on foot.', 'Smbataberd', 120, 180, group=DAY),
      ],
      hubs=f"    air: [{EVN}],\n",
      itinerary={'days': [['셀림 카라반사라이|Selim Caravanserai', 1], ['스밧타베르드|Smbataberd', 2]]},
      season='5~10월이 좋습니다. 셀림 고개는 겨울에 눈이 옵니다.|May–October is best; the Selim pass gets snow in winter.',
      stay=[('시내 중심', 'Town centre', 'Yeghegnadzor', '교통 거점|Transport hub', '남쪽으로 가는 미니버스가 서는 거리 근처에 숙소가 있습니다.|Hotels near the main road where southbound minibuses stop.')],
      routes=R(f"  r('yerevan', 'yeghegnadzor', 'bus', 120, {{ {MIN} }}),\n"),
      transit=dict(WALK, ko='근교는 택시를 하루 빌려 도는 것이 편합니다.', en='Hiring a taxi for the day is easiest for the surroundings.')),

    C(id='jermuk', after='yeghegnadzor', ko='제르무크', en='Jermuk', native='Ջերմուկ', lat=39.8417, lng=45.6722,
      blurb=['남부 산속 협곡 위의 온천 휴양 도시. 광천수가 나오는 갤러리에서 온도별로 물을 마시고, 협곡으로 떨어지는 ‘인어의 머리카락’ 폭포와 숲속 산책길을 걷습니다.' + L2K,
             'A spa town on a gorge in the southern mountains: sip mineral water at different temperatures in the drinking gallery, see the “Mermaid’s Hair” waterfall tumbling into the gorge and walk the forest paths.' + L2E],
      highlights=[
          H('광천수 갤러리', 'Mineral water gallery', '돌 회랑의 꼭지마다 온도가 다른 제르무크 광천수가 나와 직접 마셔 봅니다.', 'A stone colonnade where each tap pours Jermuk mineral water at a different temperature.', 'Jermuk mineral water gallery', 20, 30),
          H('제르무크 폭포', 'Jermuk waterfall', '협곡 벽을 따라 70m를 흘러내리는 폭포로, ‘인어의 머리카락’이라 불립니다.', 'A 70 m waterfall streaming down the gorge wall, known as the “Mermaid’s Hair”.', 'Jermuk waterfall', 30, 45),
          H('그네방크 수도원', 'Gndevank', '아르파 강 협곡 속 10세기 수도원으로, 제르무크로 오는 길에 들릅니다.', 'A 10th-century monastery in the Arpa river gorge, on the road to Jermuk.', 'Gndevank', 30, 45, group=DAY, n=CHURCH),
      ],
      hubs=f"    air: [{EVN}],\n",
      itinerary={'days': [['', 1, 2]], 'trips': [['그네방크|Gndevank', 3]]},
      season='5~10월이 좋고, 겨울엔 작은 스키장이 엽니다.|May–October is best; a small ski area opens in winter.',
      stay=[('시내 중심', 'Town centre', 'Jermuk', '온천 호텔|Spa hotels', '광천수 갤러리 주변에 온천 호텔이 모여 있습니다.|Spa hotels cluster around the mineral water gallery.')],
      routes=R(f"  r('yerevan', 'jermuk', 'bus', 180, {{ {MIN} }}),\n  r('yeghegnadzor', 'jermuk', 'bus', 60, {{ {MIN} }}),\n"),
      transit=dict(WALK, ko='작은 도시라 걸어서 다니고, 그네방크는 택시로 다녀옵니다.', en='A small town on foot; take a taxi to Gndevank.')),

    C(id='goris', after='jermuk', ko='고리스 (타테브)', en='Goris (Tatev)', native='Գորիս', lat=39.5111, lng=46.3383,
      blurb=['남부 슈니크 지방 산골의 돌집 도시. 언덕의 옛 동굴 주거지를 걷고, 세계 최장 왕복 케이블카 ‘타테브의 날개’를 타고 협곡 건너 9세기 타테브 수도원으로 갑니다. 흔조레스크 동굴 마을은 아제르바이잔 국경 5km 안의 여행금지 구간입니다.' + L2K,
             'A stone-built town in the mountains of Syunik in the south: walk the old cave dwellings on its hillside and ride the “Wings of Tatev”, among the world’s longest reversible cable cars, across a gorge to the 9th-century Tatev Monastery. The cave village of Khndzoresk lies within 5 km of the Azerbaijani border, in the travel-ban zone.' + L2E],
      highlights=[
          H('옛 고리스 동굴 주거지', 'Old Goris cave dwellings', '시내 동쪽 언덕의 뾰족한 바위에 판 옛 동굴 집들로, 산책길로 오릅니다.', 'Old cave homes cut into the pointed rocks on the hill east of town, reached by a walking path.', 'Old Goris', 60, 90),
          H('타테브의 날개 케이블카', 'Wings of Tatev', '협곡 위 5.7km를 건너는 케이블카로, 할리조르 역에서 타테브 수도원까지 약 12분 걸립니다.', 'A 5.7 km cable car across a gorge, about 12 minutes from Halidzor station to Tatev Monastery.', 'Wings of Tatev', 60, 90, group=DAY,
            n='바람이 강하면 멈출 수 있고, 겨울엔 운행을 줄입니다.|It can stop in strong wind and runs less in winter.'),
          H('타테브 수도원', 'Tatev Monastery', '협곡 절벽 위의 9세기 수도원으로, 중세에 대학이 있던 학문의 중심이었습니다.', 'A 9th-century monastery on a clifftop above the gorge, a medieval centre of learning with its own university.', 'Tatev Monastery', 60, 90, group=DAY, n=CHURCH),
      ],
      hubs=f"    air: [{EVN}],\n",
      itinerary={'days': [['', 1]], 'trips': [['타테브의 날개와 타테브 수도원|Wings of Tatev & Tatev Monastery', 2, 3]]},
      season='5~10월이 좋습니다. 겨울엔 고갯길에 눈이 옵니다.|May–October is best; mountain passes get snow in winter.',
      stay=[('시내 중심', 'Town centre', 'Goris', '타테브 거점|Base for Tatev', '돌집 게스트하우스가 많고, 타테브의 날개 할리조르 역까지 차로 약 20분입니다.|Plenty of stone-house guesthouses, about 20 minutes by car from the Halidzor station of the Wings of Tatev.')],
      routes=R(f"  r('yerevan', 'goris', 'bus', 300, {{ {MIN} }}),\n  r('jermuk', 'goris', 'bus', 150, {{ {MIN} }}),\n"),
      transit=dict(WALK, ko='시내는 걸어서 다니고, 타테브의 날개 할리조르 역까지는 택시를 탑니다.', en='Walk the town; take a taxi to the Halidzor station of the Wings of Tatev.')),
]

AM_NEW = """    cityIds: ['yerevan', 'vagharshapat', 'garni', 'gyumri', 'alaverdi', 'dilijan', 'sevan', 'yeghegnadzor', 'jermuk', 'goris'],
    cityGroups: [
      { title: { ko: '예레반·아라랏 평원', en: 'Yerevan & Ararat plain' }, cityIds: ['yerevan', 'vagharshapat', 'garni'] },
      { title: { ko: '북부', en: 'North' }, cityIds: ['gyumri', 'alaverdi', 'dilijan', 'sevan'] },
      { title: { ko: '남부', en: 'South' }, cityIds: ['yeghegnadzor', 'jermuk', 'goris'] },
    ],
"""


class Jx:
    @staticmethod
    def dumps(o, **k):
        return json.dumps(o, **{**k, 'ensure_ascii': False})


if __name__ == '__main__':
    T.json = Jx
    T.CITIES = CITIES
    T.main()
    k = rd('countries.ts')
    i = k.index("    id: 'am',")
    s = k.index('    cityIds: [', i)
    e = k.index('\n', s) + 1
    assert 'cityGroups' not in k[e:k.index("\n  },", e)]
    wr('countries.ts', k[:s] + AM_NEW + k[e:])
    # Level-2 notes for existing places
    c = rd('cities.ts')
    i = c.index('id: "dilijan",')
    j = c.index('highlights: [', i)
    blk = c[i:j]
    blk2 = blk.replace('있습니다.",\n      en:', '있습니다.' + L2K + '",\n      en:', 1)
    blk2 = blk2.replace('in town.",\n    }', 'in town.' + L2E + '",\n    }', 1)
    assert blk2.count('2단계') == 1 and blk2.count('level-2') == 1, blk2
    c = c[:i] + blk2 + c[j:]
    wr('cities.ts', c)
    v = rd('visit-east.ts')
    old = "  'yerevan-h16': v(60, 90, { n: '예레반에서 남쪽 약 45km입니다.|About 45 km south of Yerevan.' }),\n"
    assert v.count(old) == 1
    v = v.replace(old, "  'yerevan-h16': v(60, 90, { n: '예레반에서 남쪽 약 45km입니다. 아라라트주는 외교부 여행경보 2단계(여행자제) 지역입니다.|About 45 km south of Yerevan; Ararat province is level 2 (refrain from travel) on the Korean travel alert.' }),\n")
    wr('visit-east.ts', v)
