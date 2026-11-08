#!/usr/bin/env python3
"""Egypt, more cities (2026-11-08, user's route map): Edfu, Kom Ombo and Abu Simbel on the Nile between Luxor and
Aswan and beyond, plus the Luxor–Aswan Nile cruise. Abu Simbel stays as a day trip from Aswan too. Train times are
ENR's usual timings, rounded. Run once."""
import add_daytrip_places3 as T
from add_slovakia_cities import H

DAY = ('근교 당일치기', 'Day trip')
RC = 'routes-central.ts'
R_AFTER = r"^  r\('luxor', 'aswan', 'train', 180\),\n"
FIRST = '처음 가는 여행에 추천|Best for a first visit'
COMMON = dict(country='eg', group_title='나일강 상류', hubs_file='hubs-central.ts', hubs_before='  seville: {\n', itin_file='itinerary-iberia.ts',
              itin_before='  segovia: ', visit_file='visit-iberia.ts', visit_after=r"^  'funchal-h9': v\(.*\),\n", stay_before='  seville: [',
              transit_before='  seville: {', places=None, apps='', daytrips=[])


def C(**k):
    d = dict(COMMON)
    d.update(k)
    return d


def r(a, b, mode, mins, opts=''):
    return (RC, R_AFTER, f"  r('{a}', '{b}', '{mode}', {mins}{', ' + opts if opts else ''}),\n")


CITIES = [
    C(id='edfu', after='luxor', ko='에드푸', en='Edfu', native='إدفو · Idfū', lat=24.9781, lng=32.8734,
      blurb=['룩소르와 아스완 사이 나일강가 마을로, 고대 이집트 신전 가운데 가장 온전하게 남은 호루스 신전이 있습니다. 나일강 크루즈가 들르는 곳입니다.',
             'A Nile town between Luxor and Aswan, home of the Temple of Horus, the best preserved of all ancient Egyptian temples—a regular Nile-cruise stop.'],
      highlights=[
          H('호루스 신전', 'Temple of Horus', '기원전 3~1세기 프톨레마이오스 왕조가 지은 신전으로, 지붕과 높은 탑문까지 거의 그대로 남아 있습니다.', 'Built by the Ptolemies in the 3rd–1st centuries BC, still almost complete down to its roof and towering pylon.', 'Temple of Edfu', 90, 120),
          H('마차 타고 신전 가기', 'Horse-cart ride to the temple', '크루즈 선착장에서 신전까지 마차를 타고 갑니다. 값을 미리 정하세요.', 'Ride a horse cart from the cruise landing to the temple—agree the price first.', 'Edfu Corniche', 20, 30),
          H('에드푸 나일강변', 'Edfu Nile front', '크루즈 배들이 줄지어 정박하는 강변으로, 해 질 녘 풍경이 좋습니다.', 'The riverside where cruise boats moor side by side, lovely at sunset.', 'Kornish Al Nile Edfu', 20, 30),
      ],
      hubs="    air: [['Aswan International (ASW)', '아스완 공항 (ASW)', '아스완|Aswan'], ['Luxor International (LXR)', '룩소르 공항 (LXR)', '룩소르|Luxor']],\n    rail: [['Edfu', '에드푸역']],\n",
      itinerary=[2, 1, 3],
      season='10~4월이 좋습니다. 크루즈는 대개 아침 일찍 신전을 들릅니다.|October–April is best; cruises usually visit the temple early in the morning.',
      stay=[('나일강 크루즈', 'On a Nile cruise', 'Edfu', '크루즈로 들르기|Visit by cruise', '대부분 룩소르–아스완 크루즈로 들르거나 두 도시 사이 기차·차로 잠깐 내립니다.|Most visit on a Luxor–Aswan cruise or stop briefly by train or car between the two.')],
      routes=[r('luxor', 'edfu', 'train', 100), r('luxor', 'edfu', 'ferry', 960, "{ n: '나일강 크루즈(1박 안팎)|Nile cruise (about a night)' }")],
      transit=dict(modes=['walk', 'taxi'], ko='선착장에서 신전까지 마차나 택시를 탑니다.', en='Take a horse cart or taxi from the landing to the temple.')),
    C(id='kom-ombo', after='edfu', ko='콤옴보', en='Kom Ombo', native='كوم أمبو · Kawm Umbū', lat=24.4521, lng=32.9284,
      blurb=['나일강 굽이에 선 쌍둥이 신전의 마을. 악어 신 소베크와 매 신 호루스를 함께 모신 신전과 악어 미라 박물관이 있습니다.',
             'A village on a bend of the Nile with a twin temple to the crocodile god Sobek and the falcon god Horus, and a museum of mummified crocodiles.'],
      highlights=[
          H('콤옴보 신전', 'Temple of Kom Ombo', '두 신을 함께 모셔 입구와 성소가 둘씩 대칭으로 지어진 강가 신전입니다. 밤 조명이 아름답습니다.', 'The riverside temple built symmetrically with twin entrances and sanctuaries for its two gods—beautiful lit at night.', 'Temple of Kom Ombo', 60, 75),
          H('악어 박물관', 'Crocodile Museum', '신전 옆 박물관으로, 소베크 신에게 바친 악어 미라를 전시합니다.', 'The museum beside the temple, displaying crocodile mummies dedicated to Sobek.', 'Crocodile Museum Kom Ombo', 20, 30),
          H('콤옴보 나일강변', 'Kom Ombo riverfront', '신전 아래 강변으로, 크루즈 배들이 저녁에 정박합니다.', 'The riverbank below the temple where cruise boats moor in the evening.', 'Kom Ombo', 20, 30),
      ],
      hubs="    air: [['Aswan International (ASW)', '아스완 공항 (ASW)', '아스완|Aswan']],\n    rail: [['Kom Ombo', '콤옴보역', '신전까지 택시로 약 15분|about 15 min by taxi to the temple']],\n",
      itinerary=[1, 2, 3],
      season='10~4월이 좋습니다. 크루즈는 대개 저녁에 신전을 들릅니다.|October–April is best; cruises usually visit in the evening.',
      stay=[('나일강 크루즈', 'On a Nile cruise', 'Kom Ombo', '크루즈로 들르기|Visit by cruise', '대부분 크루즈로 들르거나 아스완에서 차로 약 50분 다녀옵니다.|Most visit on a cruise or as a 50-min drive from Aswan.')],
      routes=[r('edfu', 'kom-ombo', 'train', 60), r('kom-ombo', 'aswan', 'train', 50)],
      transit=dict(modes=['walk', 'taxi'], ko='크루즈 선착장에서 신전이 바로 보입니다.', en='The temple is right above the cruise landing.')),
    C(id='abu-simbel', after='aswan', ko='아부심벨', en='Abu Simbel', native='أبو سمبل · Abū Simbel', lat=22.3372, lng=31.6258,
      blurb=['수단 국경 가까이 나세르호 가의 마을. 람세스 2세가 바위를 깎아 만든 대신전과 왕비 네페르타리의 신전을 댐 수몰을 피해 통째로 옮겨 세웠습니다.',
             'A village on Lake Nasser near the Sudanese border—Ramses II’s rock-cut Great Temple and Queen Nefertari’s temple, moved block by block to escape the rising lake.'],
      highlights=[
          H('람세스 2세 대신전', 'Great Temple of Ramses II', '높이 20m의 람세스 2세 좌상 네 개가 지키는 바위 신전으로, 1년에 두 번 햇빛이 성소 안쪽까지 비칩니다.', 'The rock temple guarded by four 20 m seated statues of Ramses II, where the sun reaches the inner sanctuary twice a year.', 'Abu Simbel Great Temple', 60, 90),
          H('네페르타리 신전', 'Temple of Nefertari', '왕비 네페르타리와 하토르 여신에게 바친 작은 신전으로, 정면에 왕과 왕비 조각이 나란히 섭니다.', 'The smaller temple to Queen Nefertari and the goddess Hathor, with king and queen side by side on its front.', 'Small Temple Abu Simbel', 30, 45),
          H('소리와 빛의 쇼', 'Sound & Light Show', '밤마다 신전 정면에 빛을 비추며 이야기를 들려주는 공연입니다.', 'An evening show of lights and narration projected onto the temple fronts.', 'Abu Simbel Sound and Light', 45, 60, b='rec'),
          H('태양 축제', 'Sun Festival', '2월 22일과 10월 22일 새벽 햇빛이 신전 깊숙이 들어가 신상을 비추는 날로, 사람들이 몰려듭니다.', 'On 22 February and 22 October the dawn sun shines deep into the temple onto the statues—crowds gather to watch.', 'Abu Simbel temples', 120, 180,
            n='1년에 두 번뿐이라 숙소가 일찍 찹니다.|Only twice a year, so rooms fill early.'),
      ],
      hubs="    air: [['Abu Simbel (ABS)', '아부심벨 공항 (ABS)', '카이로·아스완 국내선|domestic flights from Cairo and Aswan']],\n",
      itinerary=[1, 2, 3, 4],
      season='10~3월이 좋고, 여름 낮은 45℃ 가까이 오릅니다. 2월·10월 22일 태양 축제가 유명합니다.|October–March is best; summer days near 45 °C. The Sun Festival on 22 February and 22 October is famous.',
      stay=[('아부심벨 마을', 'Abu Simbel village', 'Abu Simbel', FIRST, '마을에 묵으면 소리와 빛의 쇼와 이른 아침 신전을 여유 있게 봅니다. 대부분은 아스완에서 당일로 다녀옵니다.|Staying lets you see the evening show and the temples early; most visit as a day trip from Aswan.')],
      routes=[r('aswan', 'abu-simbel', 'bus', 210, "{ n: '새벽 출발 투어 차량·버스|pre-dawn tour vans and buses' }"), r('aswan', 'abu-simbel', 'flight', 45)],
      transit=dict(modes=['walk', 'taxi'], ko='마을과 신전은 걸어서 다닙니다.', en='Walk between the village and the temples.')),
]
EXTRA_ROUTE = (RC, R_AFTER, "  r('luxor', 'aswan', 'ferry', 4320, { n: '나일강 크루즈 3~4박 · 에드푸·콤옴보에 들릅니다|3–4 night Nile cruise, stopping at Edfu and Kom Ombo' }),\n")

if __name__ == '__main__':
    CITIES[0]['routes'].append(EXTRA_ROUTE)
    T.CITIES = CITIES
    T.main()
