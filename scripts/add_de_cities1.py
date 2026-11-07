#!/usr/bin/env python3
"""Germany step 2, batch 1 (2026-11-07, user picked eight; this is the north/east four): Lübeck, Bremen, Weimar (with
Erfurt) and Görlitz. Train times from Transitous. Hamburg gets a day-trip list (Lübeck, Bremen) added after the run.
Reuses the batch-3 writer. Run once.
After the run: a Hamburg day-trip list (Lübeck, Bremen) was inserted into day-trips.ts by hand."""
import add_daytrip_places3 as T
from add_daytrip_places3 import trip
from add_slovakia_cities import H

DB = "      ta('db'),\n"
DAY = ('근교 당일치기', 'Day trip')

CITIES = [
    dict(id='lubeck', country='de', group_title='북부', after='hamburg', ko='뤼베크', en='Lübeck', native='Lübeck', lat=53.8655, lng=10.6866,
         blurb=['한자 동맹의 여왕이라 불린 발트해의 붉은 벽돌 도시. 섬 모양 구시가 전체가 유네스코 세계유산이고, 마르치판으로 유명합니다.',
                'The red-brick Baltic city once called the Queen of the Hanseatic League—its island old town is a UNESCO World Heritage Site, and it is famous for marzipan.'],
         highlights=[
             H('홀스텐 문', 'Holstentor', '1478년에 세운 쌍둥이 탑 성문으로, 안에 한자 도시 역사 박물관이 있습니다. 옆 강가에 옛 소금 창고가 늘어서 있습니다.', 'The twin-towered city gate of 1478, with a museum of Hanseatic history inside and the old salt warehouses beside it on the river.', 'Holstentor Lübeck', 30, 45),
             H('성모 교회', 'St. Mary’s Church', '발트해 연안 벽돌 고딕 교회의 본보기로, 폭격으로 떨어진 종이 그대로 남아 있습니다.', 'The model for Brick Gothic churches around the Baltic, where bells that crashed down in the bombing still lie.', 'Marienkirche Lübeck', 30, 45),
             H('니더에거 마르치판 살롱', 'Niederegger Marzipan Salon', '1806년부터 이어진 마르치판 가게 위층의 작은 박물관으로, 마르치판 조각상과 역사를 보여 줍니다.', 'A small museum above the marzipan shop founded in 1806, with marzipan figures and history.', 'Niederegger Lübeck', 30, 45),
             H('성령 양로원', 'Heiligen-Geist-Hospital', '13세기에 세운 유럽에서 손꼽히게 오래된 사회 복지 시설입니다.', 'Founded in the 13th century, one of Europe’s oldest social-welfare institutions.', 'Heiligen-Geist-Hospital Lübeck', 20, 30),
             H('유럽 한자 박물관', 'European Hansemuseum', '중세 상인 동맹 한자의 역사를 무대처럼 재현한 대형 박물관입니다.', 'A large museum staging the history of the Hanseatic merchant league.', 'Europäisches Hansemuseum', 120, 150),
             H('트라베뮌데', 'Travemünde', '뤼베크의 바닷가 휴양지로, 해변과 옛 범선 ‘파사트’가 있습니다.', 'Lübeck’s Baltic seaside resort, with its beach and the old sailing ship Passat.', 'Travemünde Strand', 180, 240, group=DAY,
               n='뤼베크에서 기차로 약 25분입니다.|About 25 min by train from Lübeck.'),
         ],
         hubs="    air: [['Hamburg (HAM)', '함부르크 공항 (HAM)', '함부르크|Hamburg']],\n    rail: [['Lübeck Hbf', '뤼베크 중앙역']],\n",
         hubs_file='hubs-central.ts', hubs_before='  berlin: {\n', itin_file='itinerary-central.ts', itin_before='  hamburg: ',
         itinerary=[1, 2, 3, 4, 5, 6],
         season='12월 크리스마스 마켓이 유명합니다. 여름엔 트라베뮌데 해변이 붐빕니다.|Its December Christmas markets are famous; Travemünde’s beach is busy in summer.',
         visit_file='visit-benelux.ts', visit_after=r"^  'hamburg-h11': v\(.*\),\n",
         stay=[('구시가 섬', 'Old town island', 'Lübeck Altstadt', '처음 가는 여행에 추천|Best for a first visit', '성문과 교회, 박물관이 걸어서 닿고 중앙역까지 걸어서 약 10분입니다.|The gate, churches and museums on foot, about 10 min’s walk from the station.')],
         stay_before='  berlin: [',
         routes=[('routes-central.ts', r"^  r\('berlin', 'hamburg', .*\),\n",
                  "  r('hamburg', 'lubeck', 'train', 50),\n  r('berlin', 'lubeck', 'train', 175, { n: '함부르크에서 환승|change at Hamburg' }),\n")],
         transit=dict(modes=['walk', 'bus', 'train'], ko='구시가 섬은 걸어서 다닙니다. 트라베뮌데는 기차나 버스로 갑니다.', en='Walk the old-town island; trains or buses go to Travemünde.'),
         apps=DB, transit_before='  hamburg: {', places=None, daytrips=[]),
    dict(id='bremen', country='de', group_title='북부', after='lubeck', ko='브레멘', en='Bremen', native='Bremen', lat=53.0758, lng=8.8072,
         blurb=['그림 동화 ‘브레멘 음악대’의 도시. 시청과 롤란트 상이 선 마르크트 광장(유네스코)과 좁은 골목 동네 슈노어가 있습니다.',
                'The city of the Grimms’ Town Musicians, with its UNESCO-listed Market Square of town hall and Roland statue, and the narrow lanes of the Schnoor.'],
         highlights=[
             H('마르크트 광장과 시청·롤란트', 'Market Square, Town Hall & Roland', '고딕·르네상스 시청과 자유 도시의 상징 롤란트 상이 선 광장으로, 유네스코 세계유산입니다.', 'The square with the Gothic-Renaissance town hall and the Roland statue, symbol of civic freedom; a UNESCO World Heritage Site.', 'Bremer Marktplatz', 30, 45),
             H('브레멘 음악대 동상', 'Town Musicians of Bremen statue', '시청 옆의 당나귀·개·고양이·수탉 청동상으로, 당나귀 앞발을 만지면 행운이 온다고 합니다.', 'The bronze donkey, dog, cat and rooster beside the town hall—touching the donkey’s legs is said to bring luck.', 'Bremer Stadtmusikanten Statue', 10, 15),
             H('브레멘 대성당', 'St. Peter’s Cathedral', '광장에 선 두 탑의 대성당으로, 탑 전망대에 오를 수 있습니다.', 'The twin-towered cathedral on the square, with a tower lookout.', 'St. Petri Dom Bremen', 30, 45),
             H('뵈트허 거리', 'Böttcherstraße', '1920년대 표현주의 벽돌 건물이 늘어선 짧은 골목으로, 도자기 종 연주가 울립니다.', 'A short lane of 1920s Expressionist brick buildings, with a carillon of porcelain bells.', 'Böttcherstraße Bremen', 20, 30),
             H('슈노어 지구', 'Schnoor quarter', '15~18세기 작은 집들이 좁은 골목에 다닥다닥 붙은 가장 오래된 동네입니다.', 'The oldest quarter, its tiny 15th–18th-century houses crammed along narrow lanes.', 'Schnoor Bremen', 45, 60),
             H('벡스 양조장 투어', 'Beck’s Brewery tour', '브레멘 맥주 벡스의 양조장 견학과 시음입니다.', 'Tours and tastings at the brewery of Bremen’s Beck’s beer.', 'Brauerei Beck Bremen', 120, 150,
               b='req', n='투어는 미리 예약해야 하고 만 18세 이상만 시음합니다.|Tours must be booked ahead; tastings are 18+ only.'),
         ],
         hubs="    air: [['Bremen (BRE)', '브레멘 공항 (BRE)']],\n    rail: [['Bremen Hbf', '브레멘 중앙역']],\n",
         hubs_file='hubs-central.ts', hubs_before='  berlin: {\n', itin_file='itinerary-central.ts', itin_before='  hamburg: ',
         itinerary=[1, 2, 3, 4, 5, 6],
         season='12월 크리스마스 마켓과 10월 프라이마르크트 축제가 열립니다.|The Christmas market in December and the Freimarkt fair in October.',
         visit_file='visit-benelux.ts', visit_after=r"^  'hamburg-h11': v\(.*\),\n",
         stay=[('구시가', 'Old town', 'Bremen Altstadt', '처음 가는 여행에 추천|Best for a first visit', '광장과 슈노어, 강변이 걸어서 닿습니다.|The square, the Schnoor and the riverside on foot.')],
         stay_before='  berlin: [',
         routes=[('routes-central.ts', r"^  r\('berlin', 'hamburg', .*\),\n",
                  "  r('hamburg', 'bremen', 'train', 60),\n")],
         transit=dict(modes=['walk', 'tram', 'bus'], ko='구시가는 걸어서 다닙니다. 중앙역에서 광장까지 걸어서 약 15분이고 트램도 있습니다.', en='Walk the old town; the square is about 15 min on foot or a short tram ride from the station.'),
         apps=DB, transit_before='  hamburg: {', places=None, daytrips=[]),
    dict(id='weimar', country='de', group_title='중부', after='leipzig', ko='바이마르', en='Weimar', native='Weimar', lat=50.9795, lng=11.3235,
         blurb=['괴테와 실러가 살고 바우하우스가 태어난 독일 고전주의의 도시. 근처 에르푸르트의 크레머 다리와 부헨발트 기념관도 함께 봅니다.',
                'The city of Goethe and Schiller and the birthplace of the Bauhaus—the heart of German Classicism, with Erfurt’s Merchants’ Bridge and the Buchenwald memorial nearby.'],
         highlights=[
             H('괴테 하우스', 'Goethe’s House', '괴테가 50년 가까이 살던 집과 괴테 국립 박물관입니다.', 'The house Goethe lived in for nearly 50 years, with the Goethe National Museum.', 'Goethes Wohnhaus Weimar', 90, 120, c='mon'),
             H('실러 하우스', 'Schiller’s House', '실러가 말년을 보내며 ‘빌헬름 텔’을 쓴 집입니다.', 'The house where Schiller spent his last years and wrote William Tell.', 'Schillers Wohnhaus', 45, 60, c='mon'),
             H('안나 아말리아 도서관', 'Duchess Anna Amalia Library', '로코코 양식 ‘로코코 홀’로 유명한 도서관으로, 유네스코 세계유산입니다.', 'The library famed for its Rococo Hall; a UNESCO World Heritage Site.', 'Herzogin Anna Amalia Bibliothek', 45, 60,
               b='req', n='로코코 홀은 하루 입장 인원이 정해져 있어 온라인 예약이 필요합니다.|Rococo Hall admission is limited daily—book online.'),
             H('일름 공원과 괴테의 정원 집', 'Park an der Ilm & Goethe’s Garden House', '일름강 가의 영국식 공원과, 괴테가 처음 살던 작은 정원 집입니다.', 'The English landscape park on the Ilm, with the little garden house where Goethe first lived.', 'Goethes Gartenhaus', 60, 90),
             H('바우하우스 박물관', 'Bauhaus Museum Weimar', '1919년 바이마르에서 시작된 바우하우스의 초기 작품을 전시합니다.', 'Early work of the Bauhaus, founded in Weimar in 1919.', 'Bauhaus-Museum Weimar', 90, 120),
             H('부헨발트 기념관', 'Buchenwald Memorial', '나치 강제수용소 터에 세운 기념관과 박물관입니다.', 'The memorial and museum on the site of the Nazi concentration camp.', 'Gedenkstätte Buchenwald', 180, 240, group=DAY,
               n='바이마르에서 버스로 약 20분입니다. 입장은 무료입니다.|About 20 min by bus from Weimar; free entry.'),
             H('에르푸르트 크레머 다리', 'Erfurt & the Merchants’ Bridge', '집과 가게가 다리 위에 늘어선 중세 크레머 다리와 대성당 광장이 있는 튀링겐의 주도입니다.', 'Thuringia’s capital, with the medieval Merchants’ Bridge lined with houses and shops, and its cathedral square.', 'Krämerbrücke Erfurt', 180, 240, group=DAY,
               n='바이마르에서 기차로 약 15분입니다.|About 15 min by train from Weimar.'),
         ],
         hubs="    air: [['Erfurt-Weimar (ERF)', '에르푸르트-바이마르 공항 (ERF)'], ['Leipzig/Halle (LEJ)', '라이프치히/할레 공항 (LEJ)', '라이프치히|Leipzig']],\n    rail: [['Weimar', '바이마르역']],\n",
         hubs_file='hubs-central.ts', hubs_before='  dresden: {\n', itin_file='itinerary-central.ts', itin_before='  leipzig: ',
         itinerary=[1, 2, 3, 4, 5, 6, 7],
         season='10월 둘째 주말 양파 축제(Zwiebelmarkt)가 열리고, 12월엔 크리스마스 마켓이 섭니다.|The Onion Market fair takes over the town in October; Christmas markets in December.',
         visit_file='visit-benelux.ts', visit_after=r"^  'leipzig-h8': v\(.*\),\n",
         stay=[('구시가', 'Old town', 'Weimar Altstadt', '처음 가는 여행에 추천|Best for a first visit', '괴테·실러 하우스와 공원이 걸어서 닿습니다. 역에서 시내까지 걸어서 약 20분입니다.|The Goethe and Schiller houses and the park on foot; about 20 min’s walk from the station.')],
         stay_before='  dresden: [',
         routes=[('routes-central.ts', r"^  r\('berlin', 'leipzig', .*\),\n",
                  "  r('leipzig', 'weimar', 'train', 65),\n  r('berlin', 'weimar', 'train', 120, { n: '1회 환승|one change' }),\n  r('frankfurt', 'weimar', 'train', 160, { n: '에르푸르트에서 환승|change at Erfurt' }),\n")],
         transit=dict(modes=['walk', 'bus', 'train'], ko='시내는 걸어서 다닙니다. 부헨발트는 버스로, 에르푸르트는 기차로 갑니다.', en='Walk the town; buses go to Buchenwald and trains to Erfurt.'),
         apps=DB, transit_before='  leipzig: {', places=None, daytrips=[]),
    dict(id='gorlitz', country='de', group_title='중부', after='dresden', ko='괴를리츠', en='Görlitz', native='Görlitz', lat=51.1528, lng=14.9870,
         blurb=['폴란드와 강 하나를 사이에 둔 독일 동쪽 끝 도시. 전쟁 피해가 거의 없어 중세·르네상스·아르누보 건물이 그대로 남아, 수많은 영화의 촬영지가 되었습니다.',
                'Germany’s easternmost city, across the river from Poland—barely touched by the war, its medieval, Renaissance and Art Nouveau buildings survive intact and have starred in countless films.'],
         highlights=[
             H('운터마르크트와 오버마르크트', 'Untermarkt & Obermarkt', '르네상스 상인 저택과 시청 탑이 둘러싼 구시가의 두 광장입니다.', 'The old town’s two squares, framed by Renaissance merchants’ houses and the town-hall tower.', 'Untermarkt Görlitz', 45, 60),
             H('괴를리츠 백화점', 'Kaufhaus Görlitz', '1913년 아르누보 백화점으로, 영화 ‘그랜드 부다페스트 호텔’의 로비로 쓰였습니다.', 'The 1913 Art Nouveau department store used as the lobby in The Grand Budapest Hotel.', 'Kaufhaus Görlitz', 10, 15,
               n='내부는 공개하지 않을 때가 많아 겉에서 봅니다.|The interior is often closed, so it is usually seen from outside.'),
             H('성 베드로 바오로 교회', 'St. Peter and Paul Church', '네이세강 위 언덕의 고딕 교회로, ‘태양 오르간’이 유명합니다.', 'The Gothic church above the Neisse, known for its Sun Organ.', 'Peterskirche Görlitz', 30, 45),
             H('구시가 다리와 즈고젤레츠', 'Old Town Bridge & Zgorzelec', '네이세강 다리를 걸어서 건너면 폴란드 즈고젤레츠입니다.', 'Walk across the Neisse bridge into Zgorzelec, Poland.', 'Altstadtbrücke Görlitz', 30, 45),
             H('슐레지엔 박물관', 'Silesian Museum', '르네상스 저택 쇤호프에 슐레지엔 지방의 역사와 문화를 전시합니다.', 'The history and culture of Silesia in the Renaissance Schönhof mansion.', 'Schlesisches Museum zu Görlitz', 60, 90, c='mon'),
             H('성묘 정원', 'Holy Sepulchre', '예루살렘 성묘를 본떠 15세기에 만든 순례 정원입니다.', 'A 15th-century pilgrimage garden modelled on the Holy Sepulchre in Jerusalem.', 'Heiliges Grab Görlitz', 30, 45),
         ],
         hubs="    air: [['Dresden (DRS)', '드레스덴 공항 (DRS)', '드레스덴|Dresden']],\n    rail: [['Görlitz', '괴를리츠역']],\n",
         hubs_file='hubs-central.ts', hubs_before='  heidelberg: {\n', itin_file='itinerary-central.ts', itin_before='  heidelberg: ',
         itinerary=[1, 2, 3, 4, 5, 6],
         season='12월 실레지아 크리스마스 마켓이 열립니다. 국경 다리는 언제든 걸어서 건널 수 있습니다.|The Silesian Christmas market is held in December; the border bridge is open to walk across at any time.',
         visit_file='visit-benelux.ts', visit_after=r"^  'dresden-h11': v\(.*\),\n",
         stay=[('구시가', 'Old town', 'Görlitz Altstadt', '처음 가는 여행에 추천|Best for a first visit', '광장과 교회, 국경 다리가 걸어서 닿습니다.|The squares, church and border bridge on foot.')],
         stay_before='  heidelberg: [',
         routes=[('routes-central.ts', r"^  r\('berlin', 'dresden', .*\),\n",
                  "  r('dresden', 'gorlitz', 'train', 90),\n  r('berlin', 'gorlitz', 'train', 195, { n: '1회 환승|one change' }),\n")],
         transit=dict(modes=['walk', 'tram'], ko='구시가는 걸어서 다닙니다. 역에서 구시가까지 트램이나 걸어서 약 20분입니다.', en='Walk the old town; it is about 20 min on foot or a short tram ride from the station.'),
         apps=DB, transit_before='  heidelberg: {', places=None,
         daytrips=[('dresden', trip('gorlitz', '기차로 약 1시간 30분. 전쟁 피해가 없는 중세 구시가와 폴란드로 건너가는 다리를 봅니다.|About 1 hr 30 by train: an intact medieval old town and the bridge across to Poland.'))]),
]

if __name__ == '__main__':
    T.CITIES = CITIES
    T.main()
