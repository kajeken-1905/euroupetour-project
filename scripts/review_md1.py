#!/usr/bin/env python3
"""Moldova step 1 (all three cities), 2026-11-16, user approved the plan and asked for every suggested sight.
Fixes: every one-line description and blurb; Orheiul Vechi h2 is the Răut (not 'Raut') viewpoint. New sights:
Chișinău 16 (7 of them day trips), Orheiul Vechi 3, Soroca 4. Chișinău gets groups and a 2-day itinerary; country
city groups follow the regions. Opening facts only where checked; wineries need a booked tour. Château Vartely (h6) was swapped afterwards
for St Demetrius Church in Orhei (no free photo). Distances in the notes were corrected after the run against Wikidata/OSM coordinates. Run once."""
import re
from add_daytrip_places import rd, wr
from sight_order import add_sights, blocks, itinerary_order, reorder
from review_sk import S

DAY = ('근교 당일치기', 'Day trip')
K_CEN = ('중심가', 'City centre')
K_PARK = ('공원·기념지', 'Parks & memorials')
CHURCH = '입장은 무료이고 어깨와 무릎을 가려야 합니다. 여성은 머리를 가립니다.|Free; cover shoulders and knees, and women cover their hair.'
TOUR = '와이너리 투어는 미리 예약해야 하며 시간과 요금은 공식 사이트에서 확인하세요.|Winery tours must be booked ahead; check times and prices on the official site.'

BLURB = {
 'chisinau': ('몰도바의 수도. 넓은 가로수 길과 공원 사이에 성탄 대성당과 개선문, 박물관이 모여 있고, 근교의 거대한 지하 와인 저장고 크리코바·밀레슈티 미치와 수도원으로 다녀옵니다.',
              'Moldova’s capital, with the Nativity Cathedral, the Triumphal Arch and museums among broad tree-lined avenues and parks; day trips go to the vast underground wine cellars of Cricova and Mileștii Mici and to forest monasteries.'),
 'orheiul-vechi': ('레우트강이 휘감아 도는 석회암 절벽의 고고학 보호구역. 절벽을 파서 만든 동굴 수도원과 언덕 위 흰 교회, 전통 가옥이 남은 부투체니 마을이 있습니다.',
                   'An archaeological reserve on limestone cliffs looped by the Răut River, with a cave monastery cut into the rock, a white church on the ridge and the traditional houses of Butuceni village.'),
 'soroca': ('드네스트르강 옆 북부 도시. 15세기 몰다비아의 원형 석조 요새와 언덕 위 로마(집시) 저택들, 절벽 위 ‘감사의 촛불’ 기념탑이 있고, 강을 따라 절벽 수도원들로 다녀옵니다.',
            'A northern town on the Dniester, with a round 15th-century Moldavian stone fortress, the mansions of the Roma hill and the Candle of Gratitude on the cliff; day trips follow the river to cliffside monasteries.'),
}

REWRITE = {
 'chisinau-h1': (None, None, '1840년 러시아-오스만 전쟁 승리를 기념해 세운 개선문으로, 성탄 대성당 앞 광장에 섭니다.', 'An arch of 1840 marking Russia’s victory over the Ottomans, standing on the square in front of the Nativity Cathedral.'),
 'chisinau-h2': (None, None, '19세기 초 만든 시내에서 가장 오래된 공원으로, 입구에 몰다비아 공 슈테판 대공의 동상이 서 있고 작가들의 흉상이 늘어선 산책로가 있습니다.', 'The city’s oldest park, laid out in the early 19th century, with the statue of Stephen the Great of Moldavia at its gate and a walk lined with busts of writers.'),
 'chisinau-h3': (None, None, '시내 한복판의 큰 노천 시장으로, 과일과 치즈, 꿀, 절임 음식을 파는 좌판이 끝없이 이어집니다.', 'The big open-air market in the city centre, its stalls of fruit, cheese, honey and pickles stretching on and on.'),
 'orheiul-vechi-h1': (None, None, '레우트강 위 절벽을 파서 만든 수도원으로, 좁은 굴을 지나면 작은 동굴 성당과 강을 내려다보는 발코니가 나옵니다.', 'A monastery cut into the cliff above the Răut; a narrow tunnel leads to a small cave chapel and a balcony over the river.'),
 'orheiul-vechi-h2': ('레우트강 전망대', 'Răut River viewpoint', '말굽처럼 휘어 흐르는 레우트강 협곡이 한눈에 보이는 능선 위 전망대입니다.', 'A viewpoint on the ridge over the horseshoe bend of the Răut gorge.'),
 'orheiul-vechi-h3': (None, None, '협곡 아래 마을로, 푸른 창틀의 전통 가옥과 민속 박물관, 집밥을 내는 민박이 있습니다.', 'The village below the gorge, with traditional houses with blue window frames, a folk museum and guesthouses serving home cooking.'),
 'soroca-h1': (None, None, '15세기 말 슈테판 대공이 세운 몰다비아 요새로, 같은 간격의 탑 다섯 개가 둥근 성벽을 이룹니다.', 'A Moldavian fortress begun under Stephen the Great in the late 15th century, its round wall set with five evenly spaced towers.'),
 'soroca-h2': (None, None, '로마(집시) 사람들이 지은 화려한 저택이 늘어선 언덕으로, 궁전과 성당을 흉내 낸 집들이 이어집니다.', 'The hill of lavish mansions built by the town’s Roma families, with houses modelled on palaces and cathedrals.'),
 'soroca-h3': (None, None, '요새 앞으로 이어지는 드네스트르 강변 산책로로, 강 건너가 우크라이나입니다.', 'The Dniester riverside walk in front of the fortress, with Ukraine on the far bank.'),
}

ADD = {
 'chisinau': [
  (4, S('성탄 대성당', 'Nativity Cathedral', '1830년대에 지은 신고전 양식의 정교회 대성당으로, 개선문 뒤 대성당 공원 한가운데에 섭니다. 종탑은 1990년대에 다시 지었습니다.', 'The neoclassical Orthodox cathedral of the 1830s at the heart of Cathedral Park behind the Triumphal Arch; its bell tower was rebuilt in the 1990s.', 'Nativity Cathedral Chisinau', 20, 30, n=CHURCH)),
  (5, S('국립 역사박물관', 'National Museum of History of Moldova', '옛 남자 고등학교 건물의 박물관으로, 선사 시대 유물부터 근현대까지 몰도바 역사를 보여 줍니다. 앞마당에 카피톨리노 늑대상 복제품이 있습니다.', 'A museum in a former boys’ lyceum covering Moldova’s history from prehistory to modern times, with a copy of the Capitoline Wolf in the forecourt.', 'National Museum of History of Moldova', 60, 90)),
  (6, S('국립 민속·자연사 박물관', 'National Museum of Ethnography and Natural History', '1889년 문을 연 몰도바에서 가장 오래된 박물관으로, 무어 양식 건물에 민속 의상과 생활 도구, 거대한 고대 코끼리 데이노테리움의 뼈가 있습니다.', 'Moldova’s oldest museum, opened in 1889, in a Moorish-style building with folk costume, household objects and the skeleton of the giant prehistoric elephant Deinotherium.', 'National Museum of Ethnography and Natural History Chisinau', 60, 90)),
  (7, S('발레아 모릴로르 공원', 'Valea Morilor Park', '호수를 둘러싼 넓은 공원으로, 큰 계단식 분수와 호숫가 산책로가 있어 시민들이 주말을 보냅니다.', 'A large park around a lake, with a grand cascade stairway and lakeside walks where locals spend their weekends.', 'Valea Morilor Park', 60, 90)),
  (8, S('치우플레아 수도원', 'Ciuflea Monastery', '1858년 지은 성 테오도르 티론 교회로, 하늘색 돔과 금빛 십자가가 시내에서 가장 눈에 띄는 교회입니다.', 'The Church of St Theodore Tiron of 1858, whose sky-blue domes and gilded crosses make it the most striking church in the city.', 'Ciuflea Monastery Chisinau', 15, 20, n=CHURCH)),
  (9, S('영원 기념 단지', 'Eternity Memorial Complex', '제2차 세계 대전 전사자를 기리는 1975년 기념 단지로, 소총 다섯 자루를 세운 듯한 붉은 돌 탑 아래 꺼지지 않는 불이 타오릅니다.', 'The 1975 memorial to the dead of World War II, where an eternal flame burns beneath a red-stone pyramid shaped like five rifles leaning together.', 'Eternity Memorial Complex Chisinau', 20, 30)),
  (10, S('급수탑 (시립 역사박물관)', 'Water Tower (City History Museum)', '1892년 지은 붉은 벽돌 급수탑으로, 지금은 키시너우 역사를 보여 주는 작은 박물관이며 꼭대기에서 시내가 보입니다.', 'A red-brick water tower of 1892, now a small museum of Chișinău’s history with views over the city from the top.', 'Chisinau Water Tower', 30, 45)),
  (11, S('푸시킨 기념관', 'Pushkin House Museum', '러시아 시인 푸시킨이 1820~1823년 유배 시절 머문 작은 집으로, 그의 방과 원고, 당시 키시너우 모습을 보여 줍니다.', 'The small house where the Russian poet Pushkin lived in exile in 1820–1823, showing his room, manuscripts and the Chișinău of his day.', 'Pushkin House Museum Chisinau', 30, 45)),
  (12, S('국립 미술관', 'National Art Museum of Moldova', '옛 저택과 여학교 건물에 든 미술관으로, 몰도바의 성화와 근현대 회화, 유럽 미술을 전시합니다.', 'An art museum in a former mansion and girls’ school, showing Moldovan icons, modern painting and European art.', 'National Art Museum of Moldova', 60, 90)),
  (13, S('식물원', 'Botanical Garden', '시내 남동쪽의 넓은 식물원으로, 장미 정원과 연못, 숲길이 있어 조용히 걷기 좋습니다.', 'The large botanical garden in the south-east of the city, with rose gardens, ponds and woodland paths for a quiet walk.', 'Botanical Garden Chisinau', 60, 120)),
  (14, S('크리코바 와이너리', 'Cricova Winery', '석회암을 캐낸 땅굴에 만든 지하 와인 도시로, 120km 넘는 터널 길을 차를 타고 돌며 저장고와 시음실을 봅니다.', 'An underground wine city in former limestone quarries, with more than 120 km of tunnels toured by vehicle past cellars and tasting rooms.', 'Cricova Winery', 120, 150, group=DAY, s='https://cricova.md/',
        n='키시너우에서 북쪽 약 15km, 택시나 미니버스로 갑니다. ' + TOUR.split('|')[0] + '|About 15 km north of Chișinău by taxi or minibus. ' + TOUR.split('|')[1])),
  (15, S('밀레슈티 미치 와이너리', 'Mileștii Mici Winery', '세계에서 가장 많은 와인을 보관한 곳으로 기네스에 오른 지하 저장고로, 200km에 이르는 터널에 병이 빼곡합니다.', 'Underground cellars listed by Guinness as the world’s largest wine collection, with bottles lining tunnels up to 200 km long.', 'Milestii Mici Winery', 120, 150, group=DAY, s='https://milestii-mici.md/',
        n='키시너우에서 남쪽 약 15km, 택시로 갑니다. ' + TOUR.split('|')[0] + '|About 15 km south of Chișinău by taxi. ' + TOUR.split('|')[1])),
  (16, S('카프리아나 수도원', 'Căpriana Monastery', '15세기 기록에 처음 나오는 몰도바에서 손꼽히게 오래된 수도원으로, 코드리 숲 속에 16세기 성모 안식 교회가 섭니다.', 'One of Moldova’s oldest monasteries, first recorded in the 15th century, with a 16th-century Church of the Dormition in the Codri forest.', 'Capriana Monastery', 60, 90, group=DAY,
        n='키시너우에서 북서쪽 약 30km, 버스나 택시로 갑니다. ' + CHURCH.split('|')[0] + '|About 30 km north-west of Chișinău by bus or taxi. ' + CHURCH.split('|')[1])),
  (17, S('카스텔 미미', 'Castel Mimi', '1893년 지은 와인 성을 2016년 복원한 와이너리로, 성 모양의 건물과 정원, 지하 저장고를 둘러보고 시음합니다.', 'A wine château of 1893 restored in 2016, with a castle-like building, gardens and cellars to tour and taste in.', 'Castel Mimi', 120, 180, group=DAY, s='https://castelmimi.md/',
        n='키시너우에서 남동쪽 약 35km 불보아카 마을에 있고 택시로 갑니다. ' + TOUR.split('|')[0] + '|In Bulboaca village, about 35 km south-east of Chișinău, by taxi. ' + TOUR.split('|')[1])),
  (18, S('마누크 베이 저택', 'Manuc Bey Mansion', '19세기 아르메니아 상인 마누크 베이 가문의 저택 단지로, 복원한 궁전과 사냥 별장, 정원을 박물관으로 공개합니다.', 'The 19th-century estate of the Armenian merchant Manuc Bey’s family, its restored palace, hunting lodge and grounds open as a museum.', 'Manuc Bey Mansion Hincesti', 60, 90, group=DAY,
        n='키시너우에서 남서쪽 약 35km 힌체슈티에 있고 버스나 택시로 갑니다.|In Hîncești, about 35 km south-west of Chișinău, by bus or taxi.')),
  (19, S('한쿠 수도원', 'Hâncu Monastery', '1678년 세운 숲 속 수녀원으로, 샘물과 연못 사이에 교회 여러 채가 흩어져 있습니다.', 'A convent founded in 1678 deep in the forest, with several churches scattered among springs and ponds.', 'Hancu Monastery', 60, 90, group=DAY,
        n='키시너우에서 서쪽 약 45km, 차나 택시로 갑니다. ' + CHURCH.split('|')[0] + '|About 45 km west of Chișinău by car or taxi. ' + CHURCH.split('|')[1])),
 ],
 'orheiul-vechi': [
  (4, S('언덕 위 교회와 종탑', 'Hilltop church & bell tower', '부투체니 위 능선에 선 흰 교회와 종탑으로, 협곡과 강굽이를 배경으로 오르헤이울 베키를 대표하는 풍경입니다.', 'The white church and bell tower on the ridge above Butuceni, Orheiul Vechi’s signature view against the gorge and the river bend.', 'Orheiul Vechi church', 20, 30, n=CHURCH)),
  (5, S('쿠르키 수도원', 'Curchi Monastery', '18세기에 세운 수도원으로, 19세기 초 지은 큰 성모 탄생 대성당과 정원이 복원되어 있습니다.', 'An 18th-century monastery with a large early-19th-century Cathedral of the Nativity of the Virgin and restored gardens.', 'Curchi Monastery', 45, 60, group=DAY,
        n='오르헤이 시내에서 서쪽 약 15km, 택시로 갑니다. ' + CHURCH.split('|')[0] + '|About 15 km west of Orhei town by taxi. ' + CHURCH.split('|')[1])),
  (6, S('샤토 바르텔리', 'Château Vartely', '오르헤이 시내의 와이너리로, 저장고 투어와 시음, 식당과 숙소가 있습니다.', 'A winery in Orhei town with cellar tours, tastings, a restaurant and rooms.', 'Chateau Vartely', 90, 120, group=DAY, s='https://vartely.md/',
        n='오르헤이울 베키에서 북서쪽 약 15km 오르헤이 시내에 있습니다. ' + TOUR.split('|')[0] + '|In Orhei town, about 15 km north-west of Orheiul Vechi. ' + TOUR.split('|')[1])),
 ],
 'soroca': [
  (4, S('감사의 촛불', 'Candle of Gratitude', '드네스트르강 위 절벽에 선 2004년 기념탑으로, 몰도바의 역사와 문화를 지킨 이들을 기리며 계단 길을 올라가면 강과 도시가 내려다보입니다.', 'A 2004 monument on the cliff above the Dniester honouring those who preserved Moldova’s history and culture; climb the steps for views over the river and town.', 'Candle of Gratitude Soroca', 45, 60)),
  (5, S('코사우치 수도원', 'Cosăuți Monastery', '드네스트르 강변 숲 속의 18세기 수도원으로, 절벽 아래 조용한 강가에 섭니다.', 'An 18th-century monastery in the woods on the Dniester bank, below the cliffs by a quiet stretch of river.', 'Cosauti Monastery', 45, 60, group=DAY,
        n='소로카에서 북쪽 약 6km, 택시로 갑니다. ' + CHURCH.split('|')[0] + '|About 6 km north of Soroca by taxi. ' + CHURCH.split('|')[1])),
  (6, S('루디 수도원', 'Rudi Monastery', '18세기 후반 세운 수도원으로, 둥근 돔의 교회가 드네스트르강 근처 숲 골짜기에 숨어 있습니다.', 'A late-18th-century monastery whose domed church lies hidden in a wooded valley near the Dniester.', 'Rudi Monastery', 45, 60, group=DAY,
        n='소로카에서 북서쪽 약 40km, 차로 갑니다. ' + CHURCH.split('|')[0] + '|About 40 km north-west of Soroca by car. ' + CHURCH.split('|')[1])),
  (7, S('자프카 수도원', 'Japca Monastery', '드네스트르강 절벽 아래의 수녀원으로, 소련 시절에도 문을 닫지 않은 몰도바의 유일한 수도원으로 알려져 있습니다.', 'A convent below the Dniester cliffs, known as the only monastery in Moldova that never closed under Soviet rule.', 'Japca Monastery', 45, 60, group=DAY,
        n='소로카에서 남동쪽 약 40km, 차로 갑니다. ' + CHURCH.split('|')[0] + '|About 40 km south-east of Soroca by car. ' + CHURCH.split('|')[1])),
 ],
}

IT = [
 ("  chisinau: [1, 2, 3],\n",
  "  chisinau: {\n    days: [\n      ['중심가|City centre', 4, 1, 2, 12, 11, 10, 3],\n      ['박물관과 공원|Museums & parks', 6, 5, 8, 9, 7],\n    ],\n    trips: [\n      ['크리코바 와이너리|Cricova', 14],\n      ['밀레슈티 미치 와이너리|Mileștii Mici', 15],\n      ['카스텔 미미|Castel Mimi', 17],\n      ['카프리아나·한쿠 수도원|Căpriana & Hâncu', 16, 19],\n      ['마누크 베이 저택|Manuc Bey Mansion', 18],\n    ],\n  },\n"),
 ("  'orheiul-vechi': [3, 1, 2],\n",
  "  'orheiul-vechi': {\n    days: [['', 3, 1, 4, 2]],\n    trips: [['쿠르키 수도원과 샤토 바르텔리|Curchi & Château Vartely', 5, 6]],\n  },\n"),
 ("  soroca: [1, 3, 2],\n",
  "  soroca: {\n    days: [['', 1, 3, 2, 4]],\n    trips: [\n      ['코사우치 수도원|Cosăuți', 5],\n      ['루디 수도원|Rudi', 6],\n      ['자프카 수도원|Japca', 7],\n    ],\n  },\n"),
]

CHI = [(4, K_CEN), (1, K_CEN), (2, K_CEN), (12, K_CEN), (11, K_CEN), (10, K_CEN), (3, K_CEN), (6, K_CEN), (5, K_CEN), (8, K_CEN),
       (9, K_PARK), (7, K_PARK), (13, K_PARK), (14, DAY), (15, DAY), (17, DAY), (16, DAY), (19, DAY), (18, DAY)]
SMALL = ['orheiul-vechi', 'soroca']

MD_OLD = "    cityIds: ['chisinau', 'orheiul-vechi', 'soroca'],\n"
MD_NEW = """    cityIds: ['chisinau', 'orheiul-vechi', 'soroca'],
    cityGroups: [
      { title: { ko: '키시너우·중부', en: 'Chișinău & centre' }, cityIds: ['chisinau', 'orheiul-vechi'] },
      { title: { ko: '북부', en: 'North' }, cityIds: ['soroca'] },
    ],
"""


def main():
    c = rd('cities.ts')
    for cid, (ko, en) in BLURB.items():
        i = c.index(f'    id: "{cid}",')
        j = c.index('    highlights: [', i)
        blk = re.sub(r'blurb: \{\n      ko: ".*?",\n      en: ".*?",\n    \}',
                     f'blurb: {{\n      ko: "{ko}",\n      en: "{en}",\n    }}', c[i:j], flags=re.S)
        assert blk != c[i:j], cid
        c = c[:i] + blk + c[j:]
    for hid, (ko, en, dko, den) in REWRITE.items():
        i = c.index(f'id: "{hid}"')
        j = c.index('\n      }', i)
        blk = c[i:j]
        if ko or en:
            m = re.search(r'name: \{ ko: "([^"]*)", en: "([^"]*)" \}', blk)
            blk = blk.replace(m.group(0), f'name: {{ ko: "{ko or m.group(1)}", en: "{en or m.group(2)}" }}')
        blk2 = re.sub(r'description: \{[^\n]*\}', f'description: {{ ko: "{dko}", en: "{den}" }}', blk)
        assert blk2 != blk, hid
        c = c[:i] + blk2 + c[j:]
    it = rd('itinerary-south.ts')
    for a, b in IT:
        assert it.count(a) == 1, a[:70]
        it = it.replace(a, b)
    wr('itinerary-south.ts', it)
    for cid, items in ADD.items():
        c = add_sights(c, cid, items, 'visit-east.ts')
    c = reorder(c, 'chisinau', CHI)
    for cid in SMALL:
        by = blocks(c, cid)
        key = f"'{cid}'" if '-' in cid else cid
        m = re.search(rf"^  {re.escape(key)}: (.*?)(?=^  [a-z'/])", it, re.M | re.S)
        trips = {int(x) for t in re.findall(r"trips: \[(.*)\]", m.group(1), re.S) for x in re.findall(r", (\d+)", t)}
        order = itinerary_order(it, cid, set(by))
        c = reorder(c, cid, [(n, DAY if n in trips else None) for n in order])
    wr('cities.ts', c)
    k = rd('countries.ts')
    assert k.count(MD_OLD) == 1
    wr('countries.ts', k.replace(MD_OLD, MD_NEW))


if __name__ == '__main__':
    main()
