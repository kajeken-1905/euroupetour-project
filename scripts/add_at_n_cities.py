#!/usr/bin/env python3
"""Austria new towns (2026-11-22, user picked all four): St. Wolfgang, Melk, Neusiedler See–Eisenstadt, Alpbach.
Facts from English/German Wikipedia: St. Wolfgang pilgrimage church with Michael Pacher's altar (1471–1479), the only
fully preserved Pacher altar; Schafberg Railway, metre-gauge cog railway opened 1893, 5.85 km, up the Schafberg
(1,783 m); Weisses Rössl, hotel since 1878, setting of the play and 1930 operetta The White Horse Inn; Wolfgangsee
shore towns St Gilgen, Strobl, St Wolfgang. Melk Abbey, Benedictine, tomb of St Coloman and Babenberg remains;
Schallaburg 5 km from Melk, Renaissance from c. 1540 (Losenstein); Aggstein ruins, 12th c., 480 m above sea level on
the right bank; Artstetten, resting place of Archduke Franz Ferdinand and Sophie. Schloss Esterházy Eisenstadt, family
seat from 1622, Baroque under Paul I, Haydn worked there; Haydn-Haus, Haydn's home 1766–1778; Bergkirche built early
18th c. by Prince Paul Esterházy; Rust, smallest statutory city, royal free city 1681, Ruster Ausbruch wine; Lake
Neusiedl 315 km², largest endorheic lake in Central Europe, no more than 1.8 m deep. Alpbach, uniform traditional
wooden village, European Forum Alpbach yearly since 1945; parish church of St Oswald; Wiedersberger Horn 2,127 m with
lifts; Rattenberg, smallest town in Austria (0.11 km²); Museum Tiroler Bauernhöfe, Kramsach, ~30 farmsteads.
Transit: Salzburg bus 150 to Strobl, then bus 546; Vienna–Melk and Vienna–Eisenstadt direct trains about 1 h; bus 620
Brixlegg–Alpbach. durnstein-h6 (Melk Abbey) becomes melk-h1 (photo and pin carried over). Run once."""
import json
import os
import re
import add_daytrip_places3 as T
from add_daytrip_places import rd, wr

FREE = '무료입니다.|Free.'
SUMMER = '봄~가을에만 운행합니다. 운행 기간을 확인하세요.|Runs only from spring to autumn; check the season dates.'
INN = "['Innsbruck (INN)', '인스브루크 공항 (INN)', '인스브루크|Innsbruck']"
COMMON = dict(hubs_file='hubs-central.ts', hubs_before='  // —— cz ——\n', itin_file='itinerary-central.ts',
              itin_before='  hallstatt: {', visit_file='visit-central.ts',
              visit_after=r"^  '(?:werfen|st-wolfgang|melk|eisenstadt|alpbach)-h\d+': v\(.*\),\n",
              stay_before='  haarlem: [', transit_before='  // —— li ——\n', places=None, daytrips=[],
              apps="      ta('oebb'),\n")
LAST = r"^  r\('salzburg', 'werfen', 'train', 45\),\n"


def H(ko, en, dko, den, maps, mn, mx, n=None, **vk):
    v = dict(min=mn, max=mx, **vk)
    if n:
        v['n'] = n
    return dict(ko=ko, en=en, dko=dko, den=den, maps=maps, visit=v)


def R(a, b, mode, m, n=None):
    extra = f", {{ n: '{n}' }}" if n else ''
    return ('routes-central.ts', LAST, f"  r('{a}', '{b}', '{mode}', {m}{extra}),\n")


CITIES = [
    dict(COMMON, country='at', id='st-wolfgang', after='bad-ischl', ko='장크트볼프강', en='St. Wolfgang', native='St. Wolfgang im Salzkammergut', lat=47.7383, lng=13.4481,
         blurb=['잘츠카머구트 볼프강 호숫가의 순례 마을로, 10세기 성 볼프강이 처음 교회를 세웠다는 전설에서 이름이 왔습니다. 미하엘 파허의 후기 고딕 제단이 있는 순례 교회, 샤프베르크 정상으로 오르는 톱니바퀴 열차, 오페레타 〈백마 여관〉의 무대인 호텔이 호숫가에 모여 있습니다. 배를 타고 장크트길겐·스트로블과 오갑니다.',
                'A pilgrimage village on the Wolfgangsee in the Salzkammergut, named after St Wolfgang, who by legend built the first church here in the 10th century. The church with Michael Pacher’s late Gothic altar, the cog railway up the Schafberg and the hotel that set the operetta The White Horse Inn all sit by the lake, and boats link it with St Gilgen and Strobl.'],
         highlights=[
             H('순례 교회와 파허 제단', 'Pilgrimage Church and Pacher Altar', '호숫가의 순례 교회로, 미하엘 파허가 1471~1479년 만든 날개 제단이 있습니다. 파허의 제단 가운데 유일하게 온전히 남은 작품으로, 가운데엔 성모 대관을 금빛 조각으로 새겼습니다.', 'The lakeside pilgrimage church, home to the winged altar Michael Pacher made in 1471–1479 – the only one of his altars to survive complete, with the Coronation of the Virgin carved in gold at its centre.', 'Wallfahrtskirche St. Wolfgang', 30, 45, b='no', n=FREE),
             H('샤프베르크 톱니바퀴 열차', 'Schafberg Railway', '1893년 개통한 톱니바퀴 열차로, 5.85km를 달려 해발 1,783m 샤프베르크 정상까지 약 1,200m를 오릅니다. 정상에서 잘츠카머구트의 호수들이 내려다보입니다.', 'A cog railway opened in 1893 that climbs about 1,200 m over 5.85 km to the 1,783 m summit of the Schafberg, looking out over the Salzkammergut lakes.', 'SchafbergBahn St. Wolfgang', 180, 240, n=SUMMER),
             H('볼프강 호수 유람선', 'Wolfgangsee boats', '장크트볼프강과 장크트길겐·스트로블 등 호숫가 마을을 잇는 배로, 호수를 건너며 마을들을 둘러봅니다.', 'Boats linking St. Wolfgang with St Gilgen, Strobl and the other lakeside villages, a scenic way to hop around the lake.', 'Wolfgangsee Schifffahrt St. Wolfgang', 40, 90, n=SUMMER),
             H('백마 여관 호텔', 'Weisses Rössl', '1878년 문을 연 호숫가 호텔로, 연극과 1930년 오페레타 〈백마 여관〉의 무대가 되며 유명해졌습니다.', 'The lakeside hotel opened in 1878, made famous as the setting of the play and the 1930 operetta The White Horse Inn.', 'Hotel Im Weissen Rössl St. Wolfgang', 15, 20, b='no'),
         ],
         hubs=f"    air: [SZG()],\n    bus: [['St. Wolfgang', '장크트볼프강 버스 정류장', '스트로블·바트 이슐행 546번|bus 546 to Strobl and Bad Ischl']],\n",
         itinerary={'days': [['', 1, 4, 3]], 'trips': [['샤프베르크|Schafberg', 2]]},
         season='열차와 배가 다니는 5~10월이 좋습니다.|May–October, when the railway and boats run.',
         stay=[('장크트볼프강 마을', 'St. Wolfgang village', 'St. Wolfgang', '호숫가 마을|Lakeside village', '교회와 선착장 가까이에 숙소가 모여 있습니다.|Hotels cluster near the church and the boat pier.')],
         routes=[R('salzburg', 'st-wolfgang', 'bus', 105, '스트로블에서 546번 버스로 환승|change at Strobl to bus 546'), R('bad-ischl', 'st-wolfgang', 'bus', 35, '546번 버스|bus 546')],
         transit=dict(modes=['walk', 'bus', 'ferry'], ko='마을은 걸어서 다닙니다. 스트로블·바트 이슐과는 546번 버스로, 호숫가 마을과는 봄~가을 배로 이어집니다.', en='Walk the village; bus 546 runs to Strobl and Bad Ischl, and spring-to-autumn boats link the lakeside villages.')),
    dict(COMMON, country='at', id='melk', after='durnstein', ko='멜크', en='Melk', native='Melk', lat=48.2269, lng=15.3344,
         blurb=['바하우 계곡 서쪽 끝, 도나우강 위 바위 언덕에 선 베네딕토회 멜크 수도원의 도시입니다. 황금빛 바로크 수도원엔 오스트리아 첫 왕조 바벤베르크 가문의 유해가 있습니다. 가까이에 르네상스 성 샬라부르크, 도나우강 위 아그슈타인 성터, 프란츠 페르디난트 대공이 잠든 아르트슈테텐 성이 있습니다.',
                'The town of Melk Abbey, a Benedictine monastery on a rocky outcrop above the Danube at the western end of the Wachau. The golden Baroque abbey holds remains of the Babenbergs, Austria’s first ruling dynasty. Nearby are the Renaissance Schallaburg, the ruins of Aggstein above the Danube and Artstetten, where Archduke Franz Ferdinand is buried.'],
         highlights=[
             H('멜크 수도원', 'Melk Abbey', '도나우강 위 바위 언덕의 베네딕토회 수도원으로, 황금빛 바로크 건물과 도서관이 유명합니다. 성 콜로만의 무덤과 바벤베르크 가문 사람들의 유해가 있습니다.', 'The Benedictine abbey on a rocky outcrop above the Danube, famed for its golden Baroque buildings and library, with the tomb of St Coloman and remains of members of the House of Babenberg.', 'Stift Melk', 90, 120, s='https://www.stiftmelk.at/'),
             H('샬라부르크 성', 'Schallaburg', '멜크에서 5km 떨어진 성으로, 1540년 무렵부터 로젠슈타인 가문이 르네상스 양식으로 지었습니다. 지금은 해마다 기획 전시를 엽니다.', 'A castle 5 km from Melk, built in Renaissance style by the Losenstein family from around 1540, now used for annual exhibitions.', 'Schallaburg', 90, 120, n='봄~가을 전시 기간에 엽니다.|Open during the spring-to-autumn exhibition season.'),
             H('아그슈타인 성터', 'Aggstein Castle', '도나우강 오른쪽 기슭 해발 480m 바위 위의 12세기 성터로, 바하우 계곡이 내려다보입니다.', 'The ruins of a 12th-century castle 480 m above sea level on the right bank of the Danube, looking down the Wachau.', 'Burgruine Aggstein', 60, 90, n=SUMMER.replace('운행합니다', '엽니다').replace('Runs', 'Open')),
             H('아르트슈테텐 성', 'Artstetten Castle', '사라예보에서 암살돼 제1차 세계대전의 계기가 된 프란츠 페르디난트 대공과 부인 조피가 잠든 성입니다.', 'The castle where Archduke Franz Ferdinand and his wife Sophie, whose assassination in Sarajevo sparked the First World War, are buried.', 'Schloss Artstetten', 60, 90, n=SUMMER.replace('운행합니다', '엽니다').replace('Runs', 'Open')),
         ],
         hubs="    air: [VIE()],\n    rail: [['Melk', '멜크역']],\n",
         itinerary={'days': [['', 1]], 'trips': [['샬라부르크|Schallaburg', 2], ['아그슈타인 성터|Aggstein', 3], ['아르트슈테텐 성|Artstetten', 4]]},
         season='수도원 정원과 바하우 유람선을 함께 즐길 수 있는 4~10월이 좋습니다.|April–October, when the abbey garden opens and Wachau boats run.',
         stay=[('빈에서 다녀오기', 'Visit from Vienna', 'Vienna', '당일치기|Day trip', '빈에서 기차로 약 1시간이라 빈에 묵고 다녀오기 좋습니다.|About an hour by train, so it is easy to stay in Vienna and come for the day.')],
         routes=[R('vienna', 'melk', 'train', 65)],
         transit=dict(modes=['walk', 'train', 'ferry'], ko='역에서 수도원까지 걸어서 갑니다. 봄~가을엔 뒤른슈타인·크렘스와 유람선으로 이어집니다.', en='Walk from the station to the abbey; spring-to-autumn boats link Dürnstein and Krems.')),
    dict(COMMON, country='at', id='eisenstadt', after='vienna', ko='아이젠슈타트·노이지들러 호수', en='Eisenstadt & Lake Neusiedl', native='Eisenstadt', lat=47.8456, lng=16.5233,
         blurb=['부르겐란트주의 주도로, 300년 넘게 헝가리 귀족 에스테르하지 가문의 본거지였습니다. 작곡가 요제프 하이든이 일생 대부분 이 가문의 궁전에서 일했고, 그가 살던 집과 묻힌 교회가 있습니다. 동쪽엔 중부 유럽에서 가장 큰 염호인 노이지들러 호수와 와인 마을 루스트가 있습니다.',
                'The capital of Burgenland and for more than 300 years the seat of the Hungarian Esterházy princes. Joseph Haydn worked for most of his life at their palace, and his house and the church where he lies are in town. To the east are Lake Neusiedl, the largest endorheic lake in Central Europe, and the wine town of Rust.'],
         highlights=[
             H('에스테르하지 궁전', 'Esterházy Palace', '1622년 에스테르하지 가문의 소유가 된 뒤 바로크 궁전으로 고쳐 지어 300년 넘게 가문의 본거지가 됐습니다. 하이든이 일생 대부분 이곳에서 일했습니다.', 'Owned by the Esterházy family from 1622 and rebuilt as a Baroque palace, their main residence for over 300 years; Joseph Haydn worked here for most of his life.', 'Schloss Esterházy Eisenstadt', 60, 90),
             H('하이든 하우스', 'Haydn House', '하이든이 1766년부터 1778년까지 살던 집으로, 지금은 하이든 박물관입니다.', 'Haydn’s own home from 1766 to 1778, now the Haydn museum.', 'Haydn-Haus Eisenstadt', 45, 60),
             H('베르크키르헤', 'Bergkirche', '18세기 초 에스테르하지 공작이 궁전 서쪽 언덕에 세운 교회로, 하이든이 묻혀 있습니다.', 'The church built in the early 18th century by Prince Paul Esterházy on the hill west of the palace, where Haydn is buried.', 'Bergkirche Eisenstadt', 30, 45),
             H('루스트', 'Rust', '노이지들러 호수 서쪽 기슭의 와인 마을로, 1681년 자유 도시가 돼 지금도 오스트리아에서 가장 작은 법정 도시입니다. 귀부 와인 ‘루스터 아우스브루흐’로 유명합니다.', 'A wine town on the western shore of Lake Neusiedl, made a royal free city in 1681 and still Austria’s smallest statutory city, famous for its Ruster Ausbruch sweet wine.', 'Rust Burgenland', 90, 120, b='no'),
             H('노이지들러 호수', 'Lake Neusiedl', '오스트리아와 헝가리에 걸친 315km²의 염호로, 깊이가 1.8m를 넘지 않습니다. 갈대밭과 호숫가 마을을 자전거나 배로 둘러봅니다.', 'A 315 km² salt lake shared by Austria and Hungary and no more than 1.8 m deep, explored by bike or boat among reed beds and lakeside villages.', 'Neusiedler See', 120, 240, b='no', n=FREE),
         ],
         hubs="    air: [VIE()],\n    rail: [['Eisenstadt', '아이젠슈타트역'], ['Neusiedl am See', '노이지들암제역']],\n",
         itinerary={'days': [['', 1, 2, 3]], 'trips': [['루스트|Rust', 4], ['노이지들러 호수|Lake Neusiedl', 5]]},
         season='포도밭과 호수가 좋은 5~9월이 알맞습니다.|May–September, for the vineyards and the lake.',
         stay=[('빈에서 다녀오기', 'Visit from Vienna', 'Vienna', '당일치기|Day trip', '빈에서 기차로 약 1시간이라 빈에 묵고 다녀오기 좋습니다.|About an hour by train, so it is easy to stay in Vienna and come for the day.')],
         routes=[R('vienna', 'eisenstadt', 'train', 65)],
         transit=dict(modes=['walk', 'bus', 'train'], ko='아이젠슈타트 시내는 걸어서 다닙니다. 루스트와 호숫가 마을은 버스로 갑니다.', en='Walk around Eisenstadt; buses run to Rust and the lakeside villages.')),
    dict(COMMON, country='at', id='alpbach', after='innsbruck', ko='알프바흐', en='Alpbach', native='Alpbach', lat=47.3985, lng=11.9439,
         blurb=['티롤 키츠뷔엘 알프스 골짜기 끝의 산골 마을로, 전통 목조 건물이 마을 전체에 고르게 남은 것으로 유명합니다. 1945년부터 해마다 유럽 포럼 알프바흐가 열립니다. 여름엔 케이블카로 산에 오르고, 겨울엔 스키장이 됩니다. 골짜기 아래엔 오스트리아에서 가장 작은 도시 라텐베르크가 있습니다.',
                'A mountain village at the head of a valley in the Kitzbühel Alps of Tyrol, known for its remarkably uniform traditional wooden buildings and host of the European Forum Alpbach every year since 1945. Lifts climb the mountains in summer and serve the ski area in winter, and Rattenberg, Austria’s smallest town, lies down the valley.'],
         highlights=[
             H('알프바흐 마을', 'Alpbach village', '꽃 장식 발코니가 달린 전통 티롤 목조 건물이 마을 전체에 고르게 남아 있는 마을입니다.', 'A village whose traditional Tyrolean wooden houses with flower-decked balconies survive uniformly throughout.', 'Alpbach Dorf', 60, 90, b='no', n=FREE),
             H('성 오스발트 교구 교회', 'Parish Church of St Oswald', '마을 한가운데의 교구 교회로, 교회와 묘지가 문화재로 보호받습니다.', 'The parish church at the heart of the village; the church and its graveyard are protected monuments.', 'Pfarrkirche Alpbach', 15, 20, b='no', n=FREE),
             H('비더스베르거호른', 'Wiedersberger Horn', '케이블카로 오르는 해발 2,127m 산으로, 여름엔 산길을 걷고 겨울엔 스키장이 됩니다.', 'A 2,127 m mountain reached by lifts, for hiking in summer and skiing in winter.', 'Alpbacher Bergbahnen', 180, 300, n='여름과 겨울 시즌에만 운행합니다.|Runs only in the summer and winter seasons.'),
             H('라텐베르크', 'Rattenberg', '인강 가의 작은 옛 도시로, 면적 0.11km²로 오스트리아에서 가장 작은 지자체입니다. 유리 공방이 많습니다.', 'A tiny old town on the Inn, at 0.11 km² the smallest municipality in Austria, known for its glass workshops.', 'Rattenberg Tirol', 60, 90, b='no', n=FREE),
             H('티롤 농가 박물관', 'Museum of Tyrolean Farms', '크람자흐의 야외 박물관으로, 티롤 곳곳에서 옮겨 온 옛 농가 30여 채와 헛간·창고가 있습니다.', 'An open-air museum in Kramsach with around 30 historic farmsteads and their barns and stores moved from across Tyrol.', 'Museum Tiroler Bauernhöfe Kramsach', 90, 120, n=SUMMER.replace('운행합니다', '엽니다').replace('Runs', 'Open')),
         ],
         hubs=f"    air: [{INN}, MUC()],\n    rail: [['Brixlegg', '브릭슬레크역', '알프바흐행 620번 버스|bus 620 to Alpbach']],\n",
         itinerary={'days': [['', 1, 2]], 'trips': [['비더스베르거호른|Wiedersberger Horn', 3], ['라텐베르크·크람자흐|Rattenberg & Kramsach', 4, 5]]},
         season='산행은 6~9월, 스키는 12~3월이 좋습니다.|June–September for hiking, December–March for skiing.',
         stay=[('알프바흐 마을', 'Alpbach village', 'Alpbach', '산골 마을|Mountain village', '전통 목조 건물 사이에 펜션과 호텔이 있습니다.|Guesthouses and hotels among the traditional wooden buildings.')],
         routes=[R('innsbruck', 'alpbach', 'mixed', 60, '브릭슬레크역에서 620번 버스|bus 620 from Brixlegg')],
         transit=dict(modes=['walk', 'bus', 'train'], ko='브릭슬레크역에서 620번 버스로 마을까지 옵니다. 마을은 걸어서 다닙니다.', en='Bus 620 runs from Brixlegg station to the village, which is easy to walk.')),
]


class Jx:
    @staticmethod
    def dumps(o, **k):
        return json.dumps(o, **{**k, 'ensure_ascii': False})


def move_melk():
    c = rd('cities.ts')
    i = c.index('id: "durnstein-h6"')
    s = c.rindex(',\n      {', 0, i)
    e = c.index('\n      }', i) + len('\n      }')
    c = c[:s] + c[e:]
    wr('cities.ts', c)
    vi = rd('visit-central.ts')
    a = "  'durnstein-h6': v(90, 120, { s: 'https://www.stiftmelk.at/' }),\n"
    assert vi.count(a) == 1
    wr('visit-central.ts', vi.replace(a, ''))
    it = rd('itinerary-central.ts')
    a = "  durnstein: { days: [['', 1, 3, 2, 4]], trips: [['크렘스|Krems', 5], ['멜크 수도원|Melk Abbey', 6]] },\n"
    assert it.count(a) == 1
    wr('itinerary-central.ts', it.replace(a, "  durnstein: { days: [['', 1, 3, 2, 4]], trips: [['크렘스|Krems', 5]] },\n"))
    root = os.path.join(os.path.dirname(os.path.abspath(__file__)), '..')
    gm_p = os.path.join(root, 'scripts', 'itinerary', 'geo-manual.json')
    gm = json.load(open(gm_p))
    if 'durnstein-h6' in gm:
        gm['melk-h1'] = gm.pop('durnstein-h6')
    json.dump(gm, open(gm_p, 'w'), ensure_ascii=False, indent=2)
    open(gm_p, 'a').write('\n')
    pub = os.path.join(root, 'public', 'highlights')
    os.replace(os.path.join(pub, 'durnstein-6.jpg'), os.path.join(pub, 'melk-1.jpg'))
    co = rd('countries.ts')
    old = re.search(r"    cityIds: \['vienna', [^\]]*\],\n    cityGroups: \[\n(?:      \{.*\n)+?    \],\n", co)
    assert old and "'werfen'" in old.group(0)
    new = ("    cityIds: ['vienna', 'eisenstadt', 'durnstein', 'melk', 'linz', 'salzburg', 'hallstatt', 'bad-ischl', 'st-wolfgang', 'werfen', 'zell-am-see', 'innsbruck', 'alpbach', 'kitzbuhel', 'bregenz', 'graz', 'klagenfurt'],\n"
           "    cityGroups: [\n"
           "      { title: { ko: '빈·도나우강·부르겐란트', en: 'Vienna, the Danube & Burgenland' }, cityIds: ['vienna', 'eisenstadt', 'durnstein', 'melk', 'linz'] },\n"
           "      { title: { ko: '잘츠부르크와 잘츠카머구트', en: 'Salzburg & the Salzkammergut' }, cityIds: ['salzburg', 'hallstatt', 'bad-ischl', 'st-wolfgang', 'werfen', 'zell-am-see'] },\n"
           "      { title: { ko: '티롤과 서부', en: 'Tyrol & the west' }, cityIds: ['innsbruck', 'alpbach', 'kitzbuhel', 'bregenz'] },\n"
           "      { title: { ko: '남부', en: 'Southern Austria' }, cityIds: ['graz', 'klagenfurt'] },\n"
           "    ],\n")
    wr('countries.ts', co.replace(old.group(0), new))


if __name__ == '__main__':
    T.json = Jx
    T.CITIES = CITIES
    T.main()
    move_melk()
