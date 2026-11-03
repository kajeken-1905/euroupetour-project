#!/usr/bin/env python3
"""Car museums across Europe (2026-11-04, user request: Germany, Italy and beyond). Museums outside a covered
city are day trips from the nearest one. Run once."""
from add_daytrip_places import rd, wr
from sight_order import add_sights, blocks, read_group, reorder, itinerary_order
from review_sk import S

DAY = ('근교 당일치기', 'Day trip')
ADD = {
 ('munich', 'visit-benelux.ts'): [
  (8, S('BMW 벨트와 BMW 박물관', 'BMW Welt & BMW Museum', '올림픽 공원 옆 BMW 본사의 전시장 BMW 벨트와, 그릇 모양 건물에 BMW의 차와 오토바이 역사를 모은 박물관입니다.', 'BMW Welt, the showroom beside BMW’s headquarters by the Olympic Park, and the bowl-shaped museum of BMW cars and motorcycles.', 'BMW Welt München', 90, 150,
        c='mon', s='https://www.bmw-welt.com/', n='BMW 벨트는 무료이고 박물관은 유료이며 월요일에 쉽니다. 지하철 U3호선 올림피아첸트룸역 바로 앞입니다.|BMW Welt is free; the museum is ticketed and closed on Mondays. Right by Olympiazentrum on the U3.')),
  (9, S('아우디 무제움 모빌레(잉골슈타트)', 'Audi museum mobile (Ingolstadt)', '잉골슈타트 아우디 본사 ‘아우디 포럼’ 안의 박물관으로, 아우토 우니온 시절부터의 아우디 역사를 보여 줍니다.', 'The museum in the Audi Forum at Audi’s Ingolstadt headquarters, telling Audi’s story from the Auto Union years.', 'Audi museum mobile Ingolstadt', 90, 120, group=DAY,
        n='뮌헨에서 기차로 약 40분 걸리고, 역에서 버스로 아우디 포럼까지 갑니다. 공장 투어는 따로 예약합니다.|About 40 min by train from Munich, then a bus to the Audi Forum; factory tours are booked separately.')),
 ],
 ('berlin', 'visit-benelux.ts'): [
  (8, S('아우토슈타트(볼프스부르크)', 'Autostadt (Wolfsburg)', '폭스바겐 본사 공장 옆의 자동차 테마파크로, 브랜드별 전시관과 자동차 박물관, 신차를 받아 가는 유리 탑 ‘카 타워’가 있습니다.', 'Volkswagen’s car theme park beside its Wolfsburg plant, with brand pavilions, a car museum and the glass Car Towers where new cars are collected.', 'Autostadt Wolfsburg', 240, 300, group=DAY,
        s='https://www.autostadt.de/', n='베를린에서 ICE로 약 1시간이며 볼프스부르크역 바로 건너편입니다.|About 1 hr from Berlin by ICE, directly across from Wolfsburg station.')),
 ],
 ('dresden', 'visit-benelux.ts'): [
  (6, S('폭스바겐 유리 공장', 'Volkswagen Transparent Factory', '벽이 모두 유리로 된 폭스바겐 공장으로, 지금은 전기차 체험관과 견학 투어를 운영합니다.', 'Volkswagen’s all-glass factory, now an electric-mobility showroom with guided tours.', 'Gläserne Manufaktur Dresden', 60, 90,
        s='https://www.glaesernemanufaktur.de/', n='견학 투어는 미리 예약하는 편이 좋습니다.|Guided tours are best booked ahead.')),
 ],
 ('modena', 'visit-it.ts'): [
  (6, S('페라리 박물관(마라넬로)', 'Ferrari Museum (Maranello)', '페라리 공장이 있는 마라넬로의 박물관으로, F1 경주차와 역대 로드카가 전시됩니다.', 'The museum in Maranello, home of the Ferrari factory, displaying F1 cars and road cars through the years.', 'Museo Ferrari Maranello', 90, 120, group=DAY,
        s='https://www.ferrari.com/en-EN/museums', n='모데나에서 약 20km이며 모데나역·엔초 페라리 박물관과 마라넬로를 잇는 셔틀버스가 있습니다. 두 박물관 통합권이 있습니다.|About 20 km from Modena; a shuttle bus links Modena station and the Enzo Ferrari Museum with Maranello, and a combined ticket covers both museums.')),
 ],
 ('bologna', 'visit-it.ts'): [
  (6, S('두카티 박물관', 'Ducati Museum', '보르고 파니갈레의 두카티 공장 안 박물관으로, 레이스 바이크와 브랜드 역사를 보여 줍니다.', 'The museum inside the Ducati factory at Borgo Panigale, showing race bikes and the brand’s history.', 'Museo Ducati Borgo Panigale', 60, 90,
        n='시내에서 버스로 약 25분이며 공장 투어는 따로 예약합니다.|About 25 min by bus from the centre; factory tours are booked separately.')),
  (7, S('람보르기니 박물관', 'Automobili Lamborghini Museum (MUDETEC)', '산타가타 볼로녜세의 람보르기니 본사 박물관으로, 미우라부터 최신 하이퍼카까지 전시합니다.', 'The museum at Lamborghini’s Sant’Agata Bolognese headquarters, from the Miura to the latest hypercars.', 'Museo Lamborghini Sant’Agata Bolognese', 60, 90, group=DAY,
        s='https://www.lamborghini.com/en-en/museum', n='볼로냐에서 약 30km로 차나 투어로 가는 편이 편합니다. 공장 투어는 미리 예약합니다.|About 30 km from Bologna, easiest by car or tour; factory tours must be booked ahead.')),
 ],
 ('turin', 'visit-it.ts'): [
  (6, S('국립 자동차 박물관', 'National Automobile Museum (MAUTO)', '포강 옆 피아트의 도시 토리노에 있는 자동차 박물관으로, 마차 시대부터 현대까지 200여 대를 전시합니다.', 'The car museum in Fiat’s home city by the Po, showing some 200 vehicles from the horseless carriage to today.', 'Museo Nazionale dell’Automobile Torino', 90, 120,
        s='https://www.museoauto.com/')),
  (7, S('링고토와 옥상 트랙', 'Lingotto & La Pista 500', '옥상에 시험 주행 트랙을 얹은 옛 피아트 공장으로, 지금은 쇼핑센터와 피나코테카 아녤리 미술관이 들어섰고 옥상 트랙은 정원이 됐습니다.', 'The former Fiat factory with a test track on its roof, now a shopping centre and the Pinacoteca Agnelli, its rooftop track turned into a garden.', 'Lingotto Torino Pista 500', 60, 90,
        s='https://www.pinacoteca-agnelli.it/', n='옥상 트랙 입장 방식과 시간은 피나코테카 아녤리 사이트에서 확인하세요.|Check how and when to reach the rooftop track on the Pinacoteca Agnelli site.')),
 ],
 ('milan', 'visit-it.ts'): [
  (20, S('알파 로메오 박물관(아레세)', 'Alfa Romeo Museum (Arese)', '밀라노 북서쪽 옛 알파 로메오 공장 터의 박물관으로, 경주차와 역대 명차가 전시됩니다.', 'The museum on the old Alfa Romeo works north-west of Milan, with racing cars and classics from every era.', 'Museo Storico Alfa Romeo Arese', 90, 120, group=DAY,
        s='https://www.museoalfaromeo.com/', n='밀라노 시내에서 차로 약 30분이며 대중교통은 갈아타야 합니다.|About 30 min by car from central Milan; public transport needs a change.')),
 ],
 ('colmar', 'visit-fr.ts'): [
  (7, S('국립 자동차 박물관(뮐루즈)', 'Cité de l’Automobile (Mulhouse)', '슐룸프 형제가 모은 400여 대를 전시하는 세계 최대급 자동차 박물관으로, 부가티 컬렉션이 특히 유명합니다.', 'One of the world’s largest car museums, showing some 400 cars collected by the Schlumpf brothers and famous for its Bugattis.', 'Cité de l’Automobile Mulhouse', 120, 180, group=DAY,
        s='https://www.musee-automobile.fr/', n='콜마르에서 기차로 약 20분이며 뮐루즈역에서 트램으로 갑니다.|About 20 min by train from Colmar, then the tram from Mulhouse station.')),
 ],
 ('the-hague', 'visit-benelux.ts'): [
  (8, S('라우만 박물관', 'Louwman Museum', '세계에서 손꼽히게 오래된 개인 자동차 컬렉션으로, 마차부터 경주차까지 수백 대를 전시합니다.', 'One of the world’s oldest private car collections, with hundreds of vehicles from carriages to racing cars.', 'Louwman Museum Den Haag', 90, 120,
        c='mon', s='https://www.louwmanmuseum.nl/', n='유료이며 월요일에 쉽니다.|Ticketed; closed on Mondays.')),
 ],
 ('prague', 'visit-central.ts'): [
  (21, S('슈코다 박물관(믈라다볼레슬라프)', 'Škoda Museum (Mladá Boleslav)', '체코 자동차 회사 슈코다의 본고장 박물관으로, 라우린 & 클레멘트 시절부터의 차와 공장 견학이 있습니다.', 'The museum in Škoda’s home town, from the Laurin & Klement years onward, with factory tours.', 'Škoda Muzeum Mladá Boleslav', 90, 120, group=DAY,
        n='프라하에서 버스로 약 1시간입니다. 공장 견학은 미리 예약합니다.|About 1 hr by bus from Prague; factory tours must be booked ahead.')),
 ],
 ('gothenburg', 'visit-nordic.ts'): [
  (7, S('월드 오브 볼보', 'World of Volvo', '2024년에 문을 연 볼보의 체험관으로, 나무 구조의 건물 안에서 볼보의 역사와 차, 안전 기술을 보여 줍니다.', 'Volvo’s experience centre opened in 2024, presenting the brand’s history, cars and safety technology in a timber-framed building.', 'World of Volvo Gothenburg', 90, 120,
        s='https://www.worldofvolvo.com/')),
 ],
 ('monaco', 'visit-uk.ts'): [
  (6, S('대공 자동차 컬렉션', 'Prince of Monaco’s Car Collection', '레니에 3세 대공이 모은 클래식카와 F1 경주차 컬렉션으로, 2022년 항구 쪽 새 전시장으로 옮겼습니다.', 'Prince Rainier III’s collection of classic cars and F1 racers, moved to a new hall by the port in 2022.', 'Collection de Voitures de S.A.S. le Prince Monaco', 45, 60)),
 ],
}
IT = {
 'itinerary-central.ts': [
  ("      ['님펜부르크|Nymphenburg', 3],\n    ],\n    trips: [['다하우 추모관|Dachau Memorial', 7]],",
   "      ['님펜부르크와 BMW|Nymphenburg & BMW', 3, 8],\n    ],\n    trips: [['다하우 추모관|Dachau Memorial', 7], ['아우디 박물관|Audi museum', 9]],"),
  ("      ['장벽 기념관과 샤를로텐부르크|Wall Memorial & Charlottenburg', 3, 6, 7],\n    ],\n  },",
   "      ['장벽 기념관과 샤를로텐부르크|Wall Memorial & Charlottenburg', 3, 6, 7],\n    ],\n    trips: [['아우토슈타트|Autostadt', 8]],\n  },"),
  ("  dresden: [1, 3, 2, 4, 5],", "  dresden: [1, 3, 2, 4, 5, 6],"),
  ("      ['마뒤로담과 스헤베닝언|Madurodam & Scheveningen', 6, 4],", "      ['마뒤로담과 스헤베닝언|Madurodam & Scheveningen', 6, 8, 4],"),
 ],
 'itinerary-it.ts': [
  ("  modena: { days: [['', 4, 2, 1, 3]], trips: [['발사믹 식초 양조장|Balsamic vinegar producer', 5]] },",
   "  modena: {\n    days: [['', 4, 2, 1, 3]],\n    trips: [\n      ['발사믹 식초 양조장|Balsamic vinegar producer', 5],\n      ['마라넬로 페라리 박물관|Ferrari Museum, Maranello', 6],\n    ],\n  },"),
  ("  bologna: [3, 5, 1, 2, 4],", "  bologna: { days: [['', 3, 5, 1, 2, 4, 6]], trips: [['람보르기니 박물관|Lamborghini Museum', 7]] },"),
  ("  turin: { days: [['', 3, 1, 2, 4]], trips: [['수페르가|Superga', 5]] },",
   "  turin: { days: [['', 3, 1, 2, 4, 6, 7]], trips: [['수페르가|Superga', 5]] },"),
 ],
 'itinerary-fr.ts': [
  ("  colmar: [1, 3, 4, 2, 5, 6],", "  colmar: [1, 3, 4, 2, 5, 6, 7],"),
  ("  monaco: [4, 1, 2, 5, 3],", "  monaco: [4, 6, 1, 2, 5, 3],"),
 ],
 'itinerary-north.ts': [
  ("    trips: [['쿠트나호라|Kutná Hora', 13], ['카를슈테인 성|Karlštejn Castle', 14]],",
   "    trips: [['쿠트나호라|Kutná Hora', 13], ['카를슈테인 성|Karlštejn Castle', 14], ['슈코다 박물관|Škoda Museum', 21]],"),
  ("      ['리세베리|Liseberg', 2],\n    ],", "      ['리세베리|Liseberg', 2],\n      ['월드 오브 볼보|World of Volvo', 7],\n    ],"),
 ],
}


def main():
    c = rd('cities.ts')
    for (cid, vf), items in ADD.items():
        c = add_sights(c, cid, items, vf)
    for f, subs in IT.items():
        s = rd(f)
        for a, b in subs:
            assert s.count(a) == 1, (f, a)
            s = s.replace(a, b)
        wr(f, s)
    wr('cities.ts', c)
    # milan keeps its district groups; add the Alfa trip at the end with the day-trip header
    by = blocks(c, 'milan')
    c = reorder(c, 'milan', [(n, read_group(x)) for n, x in by.items()])
    wr('cities.ts', c)


if __name__ == '__main__':
    main()
