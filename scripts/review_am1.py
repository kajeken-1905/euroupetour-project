#!/usr/bin/env python3
"""Armenia step 1 (the three existing cities), 2026-11-20, user picked 7 new cities for step 2 (Vagharshapat, Garni,
Sevan, Goris, Alaverdi, Yeghegnadzor, Jermuk), so Etchmiadzin, Garni/Geghard, Sevan and Haghpat are left out here.
Fixes: every blurb and one-line description; Gyumri h3 'Fine Arts Museum' becomes the Dzitoghtsyan museum of national
architecture and urban life; Dilijan h3 'Old Town' is named Sharambeyan Street. New sights: Yerevan 12 (district
groups, 2-day itinerary plus Khor Virap), Gyumri 4, Dilijan 3. Closing days left out (not checked). Run once."""
import re
import urllib.parse
from add_daytrip_places import rd, wr
from sight_order import add_sights, blocks, itinerary_order, reorder
from review_sk import S

DAY = ('근교 당일치기', 'Day trip')
Y_R = ('공화국 광장 주변', 'Around Republic Square')
Y_N = ('캐스케이드·오페라', 'Cascade & Opera')
Y_X = ('외곽', 'Further out')
CHURCH = '입장은 무료입니다. 어깨와 무릎을 가리는 차림이 좋고, 여성은 스카프로 머리를 가리기도 합니다.|Free; cover shoulders and knees, and women often cover their hair with a scarf.'

BLURB = {
 'yerevan': ('아라라트산을 바라보는 아르메니아의 수도. 분홍빛 응회암 건물이 둘러싼 공화국 광장과 캐스케이드 계단, 고대 필사본의 마테나다란이 시내에 있고, 언덕 위 제노사이드 추모관과 에레부니 요새, 아라라트산 아래 호르비라프 수도원으로 다녀옵니다.',
             'Armenia’s capital, facing Mount Ararat: Republic Square ringed by pink tuff buildings, the Cascade steps and the ancient manuscripts of the Matenadaran in the centre, with the Genocide Memorial and Erebuni Fortress on their hills and trips to Khor Virap below Ararat.'),
 'gyumri': ('아르메니아 북서부의 두 번째 도시. 검은 응회암과 붉은 돌로 지은 19세기 건물이 쿠마이리 옛 거리에 남아 있고, 1988년 대지진의 흔적과 다시 세운 교회, 언덕 위 러시아 제국의 검은 요새가 있습니다.',
            'Armenia’s second city, in the north-west: 19th-century houses of black and red tuff line the old Kumayri streets, with traces of the 1988 earthquake, rebuilt churches and the Russian imperial Black Fortress on its hill.'),
 'dilijan': ('숲이 우거진 산골의 휴양 도시. 국립공원 숲속에 하가르친·고샤방크 같은 중세 수도원이 숨어 있고, 시내에는 나무 발코니 집을 복원한 샤람베얀 거리가 있습니다.',
             'A resort town in forested mountains, with medieval monasteries such as Haghartsin and Goshavank hidden in the national park and the restored wooden-balconied houses of Sharambeyan Street in town.'),
}

REWRITE = {
 'yerevan-h1': (None, None, '시내 북쪽 언덕을 오르는 거대한 흰 돌계단으로, 계단 정원의 조각과 꼭대기 전망대에서 시내와 아라라트산이 보입니다.', 'A giant white stone stairway climbing the hill north of the centre, with sculptures in its terraced gardens and views of the city and Ararat from the top.'),
 'yerevan-h2': (None, None, '분홍빛 응회암 정부 청사와 박물관이 둘러싼 타원형 광장으로, 여름 저녁엔 음악 분수가 열립니다.', 'An oval square ringed by government buildings and museums of pink tuff, with a musical fountain on summer evenings.'),
 'yerevan-h3': (None, None, '중세 아르메니아 필사본과 채색 성서를 모은 고문서 박물관으로, 아르메니아 문자를 만든 메스로프 마시토츠 상이 앞에 섭니다.', 'The repository of medieval Armenian manuscripts and illuminated Gospels, fronted by a statue of Mesrop Mashtots, inventor of the Armenian alphabet.'),
 'gyumri-h1': (None, None, '시청과 성모 대성당, 구세주 교회가 둘러싼 귬리의 중앙 광장입니다.', 'Gyumri’s central square, framed by the town hall, the Holy Mother of God Cathedral and the Holy Saviour’s Church.'),
 'gyumri-h2': (None, None, '19세기 러시아 제국이 언덕 위에 쌓은 둥근 검은 돌 요새로, 시내가 내려다보입니다.', 'A round fortress of black stone built by the Russian Empire on a hill in the 19th century, looking over the town.'),
 'gyumri-h3': ('지톡치얀 민속 건축 박물관', 'Dzitoghtsyan Museum of National Architecture', '19세기 상인 저택에 귬리의 옛 생활과 건축, 지역 화가들의 그림을 전시하는 박물관입니다.', 'A 19th-century merchant’s mansion showing Gyumri’s old way of life and architecture, with works by local painters.', 'Dzitoghtsyan Museum Gyumri'),
 'dilijan-h1': (None, None, '참나무와 너도밤나무 숲이 산을 덮은 국립공원으로, 수도원과 파르즈 호수를 잇는 숲길이 있습니다.', 'A national park of oak and beech forest covering the hills, with trails linking monasteries and Lake Parz.'),
 'dilijan-h2': (None, None, '숲속 계곡에 10~13세기 교회와 식당채가 모여 있는 수도원입니다.', 'A monastery of 10th–13th-century churches and a refectory in a wooded valley.'),
 'dilijan-h3': ('샤람베얀 거리', 'Sharambeyan Street', '19세기 나무 발코니 집을 복원한 짧은 옛 거리로, 공방과 작은 박물관이 들어서 있습니다.', 'A short old street of restored 19th-century houses with wooden balconies, now home to craft workshops and a small museum.', 'Sharambeyan Street Dilijan'),
}

ADD = {
 'yerevan': [
  (4, S('아르메니아 역사 박물관', 'History Museum of Armenia', '공화국 광장에 있는 국립 박물관으로, 5,500년 된 가죽신과 우라르투 유물 등 선사 시대부터 근대까지 보여 줍니다.', 'The national museum on Republic Square, from a 5,500-year-old leather shoe and Urartian finds to modern times.', 'History Museum of Armenia', 90, 120)),
  (5, S('예레반 오페라 극장', 'Yerevan Opera Theatre', '건축가 타마냔이 설계한 둥근 극장으로, 앞 광장과 백조 호수 공원이 시민들의 쉼터입니다.', 'The round theatre designed by Tamanyan, with its square and Swan Lake park a favourite meeting place.', 'Armenian National Opera and Ballet Theatre', 20, 30)),
  (6, S('북쪽 대로', 'Northern Avenue', '오페라 극장과 공화국 광장을 잇는 보행자 거리로, 카페와 상점이 늘어섭니다.', 'The pedestrian avenue linking the Opera to Republic Square, lined with cafés and shops.', 'Northern Avenue Yerevan', 20, 30)),
  (7, S('베르니사주 시장', 'Vernissage market', '양탄자·목공예·그림·소련 시대 물건 노점이 늘어서는 야외 시장으로, 주말에 가장 큽니다.', 'An open-air market of carpets, woodcarving, paintings and Soviet-era objects, biggest at weekends.', 'Vernissage Yerevan', 45, 60)),
  (8, S('블루 모스크', 'Blue Mosque', '18세기에 지은 예레반의 유일한 이슬람 사원으로, 푸른 타일 돔과 정원이 있습니다.', 'Yerevan’s only working mosque, built in the 18th century, with a blue-tiled dome and a garden courtyard.', 'Blue Mosque Yerevan', 20, 30)),
  (9, S('성 그레고리 계몽자 대성당', 'Saint Gregory the Illuminator Cathedral', '기독교 공인 1,700년을 기념해 2001년에 세운 아르메니아에서 가장 큰 성당입니다.', 'Armenia’s largest church, consecrated in 2001 for 1,700 years of Christianity as the state religion.', 'Saint Gregory the Illuminator Cathedral Yerevan', 15, 20, n=CHURCH)),
  (10, S('세르게이 파라자노프 박물관', 'Sergei Parajanov Museum', '영화감독 파라자노프의 콜라주와 인형, 소품을 모은 박물관으로, 흐라즈단 협곡 가장자리에 있습니다.', 'A museum of the film director Parajanov’s collages, dolls and props, on the edge of the Hrazdan gorge.', 'Sergei Parajanov Museum', 45, 60)),
  (11, S('굼 시장', 'GUM Market', '말린 과일과 견과, 향신료, 치즈를 파는 지붕 덮인 시장입니다.', 'A covered market of dried fruit, nuts, spices and cheese.', 'Gum Market Yerevan', 30, 45)),
  (12, S('치체르나카베르드 제노사이드 추모관', 'Tsitsernakaberd Genocide Memorial', '1915년 아르메니아인 학살 희생자를 기리는 언덕 위 추모비와 영원한 불, 제노사이드 박물관입니다.', 'The hilltop memorial, eternal flame and museum for the victims of the 1915 Armenian Genocide.', 'Armenian Genocide Memorial Complex', 60, 90, n='추모관과 박물관 입장은 무료입니다.|The memorial and museum are free.')),
  (13, S('어머니 아르메니아 상과 승리 공원', 'Mother Armenia & Victory Park', '칼을 든 22m 여성상이 서 있는 언덕 공원으로, 받침대 안에 군사 박물관이 있고 시내가 내려다보입니다.', 'A hilltop park with a 22 m statue of a woman holding a sword, a military museum in its pedestal and views over the city.', 'Mother Armenia Yerevan', 30, 45)),
  (14, S('에레부니 요새', 'Erebuni Fortress', '기원전 782년 우라르투 왕이 세운 요새 유적으로, 예레반의 기원이 되었고 아래에 박물관이 있습니다.', 'The ruins of the fortress founded by an Urartian king in 782 BC, the origin of Yerevan, with a museum below.', 'Erebuni Fortress', 60, 90)),
  (15, S('아라라트 브랜디 공장', 'Ararat Brandy Factory', '1887년부터 브랜디를 빚어 온 공장으로, 숙성 저장고를 보고 시음하는 투어가 있습니다.', 'Making brandy since 1887; tours visit the ageing cellars and end with a tasting.', 'Yerevan Brandy Company', 60, 90, b='req', n='투어는 예약제입니다.|Tours are by reservation.')),
  (16, S('호르비라프 수도원', 'Khor Virap', '성 그레고리가 13년 갇혔던 지하 감옥 위의 수도원으로, 바로 뒤로 아라라트산이 솟는 풍경이 유명합니다.', 'The monastery above the pit where St Gregory was imprisoned for 13 years, famous for the view of Mount Ararat rising right behind it.', 'Khor Virap', 60, 90, group=DAY,
        n='예레반에서 남쪽 약 45km입니다.|About 45 km south of Yerevan.')),
 ],
 'gyumri': [
  (4, S('구세주 교회', 'Holy Saviour’s Church', '1988년 지진으로 무너졌다가 2010년대에 다시 세운 19세기 대성당입니다.', 'The 19th-century cathedral destroyed in the 1988 earthquake and rebuilt in the 2010s.', 'Holy Saviour Church Gyumri', 15, 20, n=CHURCH)),
  (5, S('쿠마이리 옛 거리', 'Kumayri historic district', '검은·붉은 응회암 집과 연철 발코니가 남은 19세기 거리로, 아보뱐·루스타벨리 거리를 따라 걷습니다.', 'Nineteenth-century streets of black and red tuff houses with wrought-iron balconies, walked along Abovyan and Rustaveli streets.', 'Kumayri historic district Gyumri', 45, 60)),
  (6, S('아슬라마잔 자매의 집 박물관', 'Aslamazyan Sisters House-Museum', '화가 자매 마리암과 에라누히 아슬라마잔의 그림과 도자기를 전시하는 옛 저택입니다.', 'An old mansion showing paintings and ceramics by the artist sisters Mariam and Eranuhi Aslamazyan.', 'Aslamazyan Sisters Museum Gyumri', 30, 45)),
  (7, S('마르마셴 수도원', 'Marmashen Monastery', '아후리안 강 협곡의 10~11세기 붉은 응회암 교회들입니다.', 'A group of 10th–11th-century churches of red tuff in the Akhurian river gorge.', 'Marmashen Monastery', 45, 60, group=DAY, n='귬리에서 북서쪽 약 10km입니다.|About 10 km north-west of Gyumri.')),
 ],
 'dilijan': [
  (4, S('고샤방크 수도원', 'Goshavank', '12~13세기 학자 므히타르 고시가 세운 수도원으로, 레이스처럼 새긴 십자가 돌 하치카르가 유명합니다.', 'The monastery founded by the 12th–13th-century scholar Mkhitar Gosh, famous for a khachkar (cross-stone) carved like lace.', 'Goshavank', 45, 60, group=DAY, n=CHURCH)),
  (5, S('파르즈 호수', 'Lake Parz', '숲속의 작은 호수로, 보트를 빌리거나 하가르친·고샤방크까지 숲길을 걷습니다.', 'A small forest lake where you can hire a boat or walk on to Haghartsin and Goshavank.', 'Lake Parz', 60, 90, group=DAY)),
  (6, S('주흐타크 수도원', 'Jukhtak Vank', '시내 가까운 숲속의 작은 두 교회로, 짧게 걸어 다녀옵니다.', 'Two small churches in the forest close to town, a short walk away.', 'Jukhtak Vank', 30, 45)),
 ],
}

IT = [
 ("  yerevan: [2, 3, 1],\n",
  "  yerevan: {\n    days: [\n      ['공화국 광장과 캐스케이드|Republic Square & Cascade', 2, 4, 11, 8, 6, 5, 1, 3],\n      ['추모관과 언덕|Memorial & hills', 12, 15, 10, 7, 9, 13],\n    ],\n    trips: [\n      ['에레부니 요새|Erebuni Fortress', 14],\n      ['호르비라프|Khor Virap', 16],\n    ],\n  },\n"),
 ("  gyumri: [1, 3, 2],\n",
  "  gyumri: { days: [['', 1, 4, 5, 3, 6, 2]], trips: [['마르마셴 수도원|Marmashen', 7]] },\n"),
 ("  dilijan: [3, 2, 1],\n",
  "  dilijan: {\n    days: [['', 3, 6, 1]],\n    trips: [['하가르친·파르즈 호수·고샤방크|Haghartsin, Lake Parz & Goshavank', 2, 5, 4]],\n  },\n"),
]

YRV = [(2, Y_R), (4, Y_R), (11, Y_R), (8, Y_R), (7, Y_R), (9, Y_R),
       (6, Y_N), (5, Y_N), (1, Y_N), (3, Y_N), (10, Y_N),
       (12, Y_X), (15, Y_X), (13, Y_X), (14, Y_X),
       (16, DAY)]
SMALL = ['gyumri', 'dilijan']


def main():
    c = rd('cities.ts')
    for cid, (ko, en) in BLURB.items():
        i = c.index(f'id: "{cid}",')
        j = c.index('highlights: [', i)
        blk = re.sub(r'blurb: \{\n      ko: "[^"]*",\n      en: "[^"]*",\n    \}',
                     f'blurb: {{\n      ko: "{ko}",\n      en: "{en}",\n    }}', c[i:j], flags=re.S)
        assert blk != c[i:j], cid
        c = c[:i] + blk + c[j:]
    for hid, t in REWRITE.items():
        ko, en, dko, den = t[:4]
        i = c.index(f'id: "{hid}"')
        j = c.index('\n      }', i)
        blk = c[i:j]
        if ko or en:
            m = re.search(r'name: \{ ko: "([^"]*)", en: "([^"]*)" \}', blk)
            blk = blk.replace(m.group(0), f'name: {{ ko: "{ko or m.group(1)}", en: "{en or m.group(2)}" }}')
        blk2 = re.sub(r'description: \{[^\n]*\}', f'description: {{ ko: "{dko}", en: "{den}" }}', blk)
        assert blk2 != blk, hid
        if len(t) > 4:
            blk2 = re.sub(r'mapsUrl: "[^"]*"', 'mapsUrl: "https://www.google.com/maps/search/?api=1&query=' + urllib.parse.quote(t[4]) + '"', blk2)
        c = c[:i] + blk2 + c[j:]
    it = rd('itinerary-south.ts')
    for a, b in IT:
        assert it.count(a) == 1, a[:70]
        it = it.replace(a, b)
    wr('itinerary-south.ts', it)
    for cid, items in ADD.items():
        c = add_sights(c, cid, items, 'visit-east.ts')
    c = reorder(c, 'yerevan', YRV)
    for cid in SMALL:
        by = blocks(c, cid)
        m = re.search(rf"^  {cid}: (.*?)(?=^  [a-z'/])", it, re.M | re.S)
        trips = {int(x) for t in re.findall(r"trips: \[(.*)\]", m.group(1), re.S) for x in re.findall(r", (\d+)", t)}
        order = itinerary_order(it, cid, set(by))
        c = reorder(c, cid, [(n, DAY if n in trips else None) for n in order])
    wr('cities.ts', c)


if __name__ == '__main__':
    main()
