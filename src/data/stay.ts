/**
 * Where to stay: neighbourhoods for a base, per city, only for cities big enough that the choice matters.
 * Each area is one that at least two independent travel guides recommend (sources in scripts/stay/sources.md);
 * no hotels are named. `tag` is the one-line reason to pick it, `note` the trade-off.
 */
type Text = { ko: string; en: string }
export interface StayArea {
  name: Text
  /** Search text for Google Maps hotels in the area, e.g. "Malá Strana, Prague". */
  q: string
  tag: Text
  note: Text
}

const a = (ko: string, en: string, q: string, tag: string, note: string): StayArea => {
  const [tagKo, tagEn] = tag.split('|')
  const [noteKo, noteEn] = note.split('|')
  return { name: { ko, en }, q, tag: { ko: tagKo, en: tagEn }, note: { ko: noteKo, en: noteEn } }
}

export const STAY: Record<string, StayArea[]> = {
  prague: [
    a('구시가', 'Old Town (Staré Město)', 'Staré Město, Prague', '처음 가는 여행에 추천|Best for a first visit', '주요 관광지를 걸어서 다닙니다. 가장 붐비고 비싸며 소매치기를 조심해야 합니다.|The main sights are on foot; it is the busiest and priciest area, so watch for pickpockets.'),
    a('말라스트라나', 'Malá Strana', 'Malá Strana, Prague', '조용한 중심가|Quieter but central', '강 건너 프라하 성 아래 동네로 구시가보다 한적합니다. 낮에는 성 주변이 붐빕니다.|Below Prague Castle across the river, calmer than the Old Town; the castle area is crowded by day.'),
    a('비노흐라디', 'Vinohrady', 'Vinohrady, Prague', '현지 분위기|Local feel', '아르누보 건물과 공원, 카페가 많은 주거지입니다. 중심가까지 트램·지하철로 몇 정거장입니다.|A residential area of Art Nouveau streets, parks and cafés, a few tram or metro stops from the centre.'),
    a('지슈코프', 'Žižkov', 'Žižkov, Prague', '숙박비 절약|Cheaper', '중심에서 조금 떨어져 숙소가 저렴합니다.|A little further from the centre, so rooms cost less.'),
  ],
  paris: [
    a('르 마레', 'Le Marais (3rd–4th)', 'Le Marais, Paris', '가장 무난한 선택|An all-round favourite', '상점과 바, 식당이 많아 활기차고 시내 중심이라 걸어 다니기 좋습니다.|Lively with shops, bars and restaurants, and central enough to walk most places.'),
    a('생제르맹데프레', 'Saint-Germain-des-Prés (6th)', 'Saint-Germain-des-Prés, Paris', '카페 거리와 중심가|Cafés and a central base', '센강, 루브르, 노트르담과 가깝습니다. 숙박비는 비싼 편입니다.|Close to the Seine, the Louvre and Notre-Dame; rooms are on the expensive side.'),
    a('라탱 지구', 'Latin Quarter (5th)', 'Latin Quarter, Paris', '활기차고 비교적 저렴|Lively and more affordable', '대학가라 저렴한 숙소와 카페, 식당이 많습니다.|A student district with cheaper rooms, cafés and restaurants.'),
    a('몽마르트르', 'Montmartre (18th)', 'Montmartre, Paris', '분위기와 전망|Atmosphere and views', '언덕 마을 분위기가 좋지만 중심에서 조금 떨어져 있어 지하철을 타야 합니다.|Village feel on the hill, but a little out of the centre, so expect to use the metro.'),
  ],
  rome: [
    a('역사 지구', 'Centro Storico', 'Centro Storico, Rome', '처음 가는 여행에 추천|Best for a first visit', '판테온과 나보나 광장이 걸어서 몇 분입니다. 관광객용 식당이 많습니다.|Steps from the Pantheon and Piazza Navona; tourist-trap restaurants are common.'),
    a('몬티', 'Monti', 'Monti, Rome', '중심가지만 느긋한 분위기|Central but laid-back', '콜로세움에서 몇 분 거리이고 작은 호텔과 식당이 많습니다.|A few minutes from the Colosseum, with small hotels and places to eat.'),
    a('트라스테베레', 'Trastevere', 'Trastevere, Rome', '저녁 분위기와 현지 느낌|Evenings out and a local feel', '골목 식당과 바가 많아 밤에 활기찹니다. 주요 관광지까지는 조금 걷습니다.|Alleys full of trattorie and bars that come alive at night; a longer walk to the main sights.'),
    a('프라티', 'Prati', 'Prati, Rome', '바티칸 근처의 조용한 동네|Quiet, near the Vatican', '정돈된 주거지라 조용하고 지하철로 다니기 편합니다.|An orderly residential area, calm and on the metro.'),
  ],
  barcelona: [
    a('고딕 지구', 'Gothic Quarter', 'Gothic Quarter, Barcelona', '처음 가는 여행에 추천|Best for a first visit', '구시가 한가운데라 대성당과 람블라스를 걸어서 다닙니다. 소매치기를 조심하세요.|In the old town, with the cathedral and La Rambla on foot; watch for pickpockets.'),
    a('에이샴플레', 'Eixample', 'Eixample, Barcelona', '편리한 중심가|Central and practical', '가우디 건물이 모인 넓은 중심가로 교통이 좋습니다. 숙박비는 높은 편입니다.|The grid of Gaudí buildings, well connected; prices run high.'),
    a('엘 보른', 'El Born', 'El Born, Barcelona', '부티크와 밤 분위기|Boutiques and nightlife', '작은 상점과 바가 많고 피카소 미술관이 있습니다.|Small shops, bars and the Picasso Museum.'),
    a('그라시아', 'Gràcia', 'Gràcia, Barcelona', '현지 분위기|Local feel', '광장 카페와 식당이 많은 동네입니다. 주요 관광지까지는 지하철을 탑니다.|Squares lined with cafés and restaurants; the metro takes you to the main sights.'),
  ],
  london: [
    a('코벤트 가든', 'Covent Garden', 'Covent Garden, London', '처음 가는 여행에 추천|Best for a first visit', '극장, 박물관, 식당이 걸어서 닿는 한가운데입니다. 숙박비가 비쌉니다.|Theatres, museums and restaurants on foot; rooms are expensive.'),
    a('사우스 뱅크', 'South Bank', 'South Bank, London', '템스강 전망|Thames views', '런던 아이와 강변 산책로가 가깝습니다.|Near the London Eye and the riverside walk.'),
    a('사우스 켄싱턴', 'South Kensington', 'South Kensington, London', '조용하고 공원이 가까움|Calmer, near the parks', '자연사·V&A 박물관과 하이드 파크가 가깝고 지하철이 편리합니다.|Next to the big museums and Hyde Park, with good Tube links.'),
  ],
  amsterdam: [
    a('운하 지구', 'Canal Ring (Grachtengordel)', 'Grachtengordel, Amsterdam', '처음 가는 여행에 추천|Best for a first visit', '17세기 운하가 둘러싼 한가운데입니다. 가장 붐비고 숙박비가 가장 비쌉니다.|The heart of the 17th-century canals; the busiest area with the priciest rooms.'),
    a('요르단', 'Jordaan', 'Jordaan, Amsterdam', '운하 마을 분위기|Canal-side charm', '좁은 골목과 운하, 갈색 카페가 있는 주거지로 관광지와도 가깝습니다. 일찍 예약하세요.|Narrow lanes, canals and brown cafés, close to the sights; book early.'),
    a('더 페이프', 'De Pijp', 'De Pijp, Amsterdam', '먹거리와 밤 분위기|Food and nightlife', '알버트 카위프 시장과 식당, 바가 많습니다. 운하 풍경은 적습니다.|Around the Albert Cuyp market with plenty of places to eat and drink; fewer canal views.'),
    a('뮤지엄 광장 주변', 'Museumplein area', 'Museumplein, Amsterdam', '미술관 위주 여행|For museum trips', '국립미술관과 반 고흐 미술관이 가깝고 비교적 조용합니다.|Next to the Rijksmuseum and Van Gogh Museum, and quieter.'),
  ],
  vienna: [
    a('1구 인네레 슈타트', 'Innere Stadt (1st)', 'Innere Stadt, Vienna', '처음 가는 여행에 추천|Best for a first visit', '슈테판 대성당, 호프부르크, 오페라하우스를 걸어서 다닙니다. 숙박비가 비싼 편입니다.|St Stephen’s, the Hofburg and the Opera on foot; hotels cost more.'),
    a('7구 노이바우', 'Neubau (7th)', 'Neubau, Vienna', '창의적인 분위기|Creative and arty', '독립 상점과 무제움스콰르티어가 가깝습니다.|Independent shops and the MuseumsQuartier nearby.'),
    a('6구 마리아힐프', 'Mariahilf (6th)', 'Mariahilf, Vienna', '먹거리와 쇼핑|Food and shopping', '나슈마르크트와 쇼핑 거리가 가깝습니다.|Close to the Naschmarkt and the main shopping street.'),
    a('2구 레오폴트슈타트', 'Leopoldstadt (2nd)', 'Leopoldstadt, Vienna', '중심 가까운 절약형|Budget, near the centre', '프라터 공원이 있고 도심까지 가깝습니다.|Home to the Prater and a short hop from the centre.'),
  ],
  budapest: [
    a('5구 (벨바로시)', 'District V (Belváros-Lipótváros)', 'District V, Budapest', '처음 가는 여행에 추천|Best for a first visit', '국회의사당과 성 이슈트반 대성당을 걸어서 다닙니다. 가장 싼 곳은 아닙니다.|Parliament and St Stephen’s Basilica on foot; not the cheapest.'),
    a('7구 (에르제베트바로시)', 'District VII (Erzsébetváros)', 'District VII, Budapest', '밤 문화|Nightlife', '유대인 지구와 폐허 바(심플라 케르트 등)가 모여 있어 밤에 시끄러울 수 있습니다.|The Jewish Quarter and ruin bars such as Szimpla Kert; it can be noisy at night.'),
    a('부다 성 지구', 'Buda Castle District (I)', 'Castle District, Budapest', '조용하고 낭만적|Quiet and romantic', '언덕 위 성 지구라 밤에 조용합니다. 페스트 쪽 관광지까지는 다리를 건너야 합니다.|The hilltop castle quarter, quiet at night; the Pest sights are across the river.'),
  ],
  florence: [
    a('두오모 주변 (역사 지구)', 'Duomo / Centro Storico', 'Duomo, Florence', '처음 가는 여행에 추천|Best for a first visit', '주요 관광지가 몇 걸음이고 숙소가 가장 많습니다. 여름에는 값이 크게 오릅니다.|The sights are steps away and there is the widest choice of rooms; prices soar in summer.'),
    a('산타 크로체', 'Santa Croce', 'Santa Croce, Florence', '조금 조용한 중심가|Central but calmer', '공방과 동네 바가 있고 어디든 걸어서 갑니다.|Artisan shops and local bars, with everything in walking distance.'),
    a('올트라르노', 'Oltrarno', 'Oltrarno, Florence', '현지 분위기|Local feel', '아르노강 남쪽, 산토 스피리토 일대로 관광객이 적습니다.|South of the Arno around Santo Spirito, away from the crowds.'),
    a('산 로렌초', 'San Lorenzo', 'San Lorenzo, Florence', '역과 시장 가까이|Near the station and market', '중앙역과 메르카토 첸트랄레가 가까워 이동이 편합니다.|Close to the main station and Mercato Centrale.'),
  ],
  venice: [
    a('산 마르코', 'San Marco', 'San Marco, Venice', '모든 것의 중심|The centre of it all', '산 마르코 광장 바로 옆입니다. 가장 비싸고 낮에는 매우 붐빕니다.|Next to St Mark’s Square; the most expensive and very crowded by day.'),
    a('산 폴로', 'San Polo', 'San Polo, Venice', '처음 가는 여행에 무난|A good first base', '리알토 다리와 대운하가 있어 어디로든 가기 좋습니다. 관광객이 많습니다.|Home to the Rialto and the Grand Canal, central to everything; busy with visitors.'),
    a('카나레조', 'Cannaregio', 'Cannaregio, Venice', '현지 분위기|Local feel', '유대인 게토가 있는 동네로 상대적으로 조용하고 역과 가깝습니다.|Around the Jewish Ghetto, calmer and near the station.'),
    a('도르소두로', 'Dorsoduro', 'Dorsoduro, Venice', '예술적인 분위기|Artsy', '아카데미아 미술관과 구겐하임이 있는 조용한 동네입니다.|A quieter area with the Accademia and the Guggenheim.'),
  ],
  berlin: [
    a('미테', 'Mitte', 'Mitte, Berlin', '처음 가는 여행에 추천|Best for a first visit', '브란덴부르크 문과 박물관 섬을 걸어서 다닙니다.|The Brandenburg Gate and Museum Island on foot.'),
    a('크로이츠베르크', 'Kreuzberg', 'Kreuzberg, Berlin', '다문화·대안 문화|Multicultural and alternative', '식당과 바가 많고 젊은 분위기입니다.|Young and lively, with plenty to eat and drink.'),
    a('프렌츨라우어 베르크', 'Prenzlauer Berg', 'Prenzlauer Berg, Berlin', '가족 여행·느긋한 분위기|Families and a relaxed pace', '안전하고 조용한 주거지로 카페와 와인 바가 많습니다.|Safe and leafy, with cafés and wine bars.'),
    a('샤를로텐부르크', 'Charlottenburg', 'Charlottenburg, Berlin', '조용하고 고급스러움|Quieter and upscale', '쿠담 거리 쇼핑과 샤를로텐부르크 궁전이 가깝습니다.|Near the Ku’damm shops and Charlottenburg Palace.'),
  ],
  lisbon: [
    a('바이샤', 'Baixa', 'Baixa, Lisbon', '처음 가는 여행에 추천|Best for a first visit', '평지라 짐을 끌고 다니기 쉽고 어디로든 걸어서 갑니다.|Flat, central and walkable, and easy with luggage.'),
    a('시아두', 'Chiado', 'Chiado, Lisbon', '중심가의 멋|Central charm', '카페와 상점이 많은 언덕 동네입니다. 산타 후스타 승강기 주변은 매우 붐빕니다.|Cafés and shops on the slope above Baixa; very crowded around the Santa Justa lift.'),
    a('알파마', 'Alfama', 'Alfama, Lisbon', '옛 동네 분위기|Old-town atmosphere', '구경하기 좋은 골목이지만 언덕과 계단이 많아 짐을 끌기 힘듭니다.|Lovely lanes to explore, but steep and stepped—hard work with luggage.'),
    a('프린시페 헤알', 'Príncipe Real', 'Príncipe Real, Lisbon', '조용하고 세련됨|Quiet and boutique', '부티크 숙소와 정원이 있는 조용한 동네입니다. 언덕이 있습니다.|Boutique stays and gardens away from the bustle; hilly.'),
  ],
  madrid: [
    a('솔 (센트로)', 'Sol / Centro', 'Puerta del Sol, Madrid', '처음 가는 여행에 추천|Best for a first visit', '도시 한가운데라 관광지와 교통이 편합니다.|The very centre, with the sights and transport close by.'),
    a('라 라티나', 'La Latina', 'La Latina, Madrid', '타파스와 옛 동네|Tapas and old streets', '타파스 바가 모여 있고 일요일 라스트로 벼룩시장이 섭니다.|Full of tapas bars, with the Rastro market on Sundays.'),
    a('말라사냐', 'Malasaña', 'Malasaña, Madrid', '젊고 활기찬 분위기|Young and lively', '카페와 바가 많은 동네로 밤에 활기찹니다.|Cafés and bars, busy at night.'),
    a('살라망카', 'Salamanca', 'Barrio de Salamanca, Madrid', '고급·쇼핑|Upscale and shopping', '명품 거리와 고급 호텔이 많고 숙박비가 비쌉니다.|Designer shops and smart hotels; expensive.'),
  ],
  edinburgh: [
    a('올드타운', 'Old Town', 'Old Town, Edinburgh', '관광 중심|For sightseeing', '에든버러성과 로열 마일을 걸어서 다닙니다. 관광객이 가장 많습니다.|The castle and Royal Mile on foot; the busiest part of town.'),
    a('뉴타운', 'New Town', 'New Town, Edinburgh', '처음 가는 여행에 무난|A good first base', '조지언 거리의 중심가로 숙소 선택지가 넓고 어디든 걸어서 갑니다.|Elegant Georgian streets with a wide choice of rooms, a short walk from everything.'),
    a('스톡브리지', 'Stockbridge', 'Stockbridge, Edinburgh', '조용한 마을 분위기|Village feel', '뉴타운에서 내리막 15분쯤의 한적한 동네입니다.|A calmer area about 15 minutes’ walk downhill from the New Town.'),
    a('리스', 'Leith', 'Leith, Edinburgh', '현지 분위기·항구|Local and harbourside', '도심에서 가장 멀지만 버스로 쉽게 오가고 식당이 많습니다.|Furthest out but well served by buses, with good places to eat.'),
  ],
  dublin: [
    a('템플 바 주변', 'Temple Bar', 'Temple Bar, Dublin', '처음 가는 여행에 추천|Best for a first visit', '트리니티 칼리지가 걸어서 5분입니다. 밤늦게까지 시끄럽고 술값이 비쌉니다.|Five minutes from Trinity College; noisy late into the night and drinks cost more.'),
    a('세인트 스티븐스 그린·그래프턴 거리', 'St Stephen’s Green / Grafton Street', 'St Stephen’s Green, Dublin', '중심가지만 덜 붐빔|Central, fewer crowds', '식당과 공원이 가까운 중심가입니다.|Central, with restaurants and green space close by.'),
    a('메리언 스퀘어', 'Merrion Square', 'Merrion Square, Dublin', '조용한 중심가|Quiet but central', '트리니티 칼리지와 템플 바가 가깝지만 한적합니다.|Near Trinity College and Temple Bar, yet calm.'),
  ],
  munich: [
    a('알트슈타트', 'Altstadt-Lehel', 'Altstadt, Munich', '처음 가는 여행에 추천|Best for a first visit', '마리엔 광장과 주요 관광지를 걸어서 다닙니다. 숙박비가 매우 비쌀 때가 있습니다.|Marienplatz and the main sights on foot; prices can be very high.'),
    a('막스포어슈타트', 'Maxvorstadt', 'Maxvorstadt, Munich', '미술관과 대학가|Museums and campus', '피나코테크 미술관 지구와 카페가 있는 대학가입니다.|The university quarter by the Pinakothek museums, with cafés.'),
    a('슈바빙', 'Schwabing', 'Schwabing, Munich', '느긋한 주거지|Relaxed and residential', '도심 북쪽으로 영국 정원이 가깝습니다.|North of the centre, next to the English Garden.'),
    a('중앙역 주변', 'Ludwigsvorstadt (Hauptbahnhof)', 'Ludwigsvorstadt, Munich', '교통·절약형|Transport and budget', '중앙역 근처라 이동이 편하고 숙소가 저렴합니다. 옥토버페스트 장소와 가깝습니다.|By the main station, cheaper and handy for trains; next to the Oktoberfest grounds.'),
  ],
  krakow: [
    a('구시가', 'Old Town (Stare Miasto)', 'Stare Miasto, Kraków', '처음 가는 여행에 추천|Best for a first visit', '관광지를 모두 걸어서 다닙니다. 가장 붐비는 곳입니다.|Everything on foot; the busiest part of the city.'),
    a('카지미에시', 'Kazimierz', 'Kazimierz, Kraków', '분위기와 밤 문화|Atmosphere and nightlife', '옛 유대인 지구로 카페와 바가 많습니다. 밤에 시끄러울 수 있습니다.|The old Jewish quarter, full of cafés and bars; can be noisy at night.'),
    a('포드구제', 'Podgórze', 'Podgórze, Kraków', '조용한 강 건너 동네|Quieter, across the river', '구시가까지 걸어서 20분쯤이고 카페와 갤러리가 있습니다.|About 20 minutes’ walk to the Old Town, with cafés and galleries.'),
  ],
  athens: [
    a('플라카', 'Plaka', 'Plaka, Athens', '처음 가는 여행에 추천|Best for a first visit', '아크로폴리스 아래 옛 동네로 걷기 좋습니다. 숙박비와 식당 값이 높은 편입니다.|The old quarter under the Acropolis, good on foot; rooms and restaurants cost more.'),
    a('모나스티라키', 'Monastiraki', 'Monastiraki, Athens', '짧은 여행에 편리|Handy for a short stay', '시장과 식당, 아크로폴리스가 가깝고 활기찹니다. 잠귀가 밝다면 피하세요.|Markets, food and the Acropolis close by; lively, so not for light sleepers.'),
    a('신타그마', 'Syntagma', 'Syntagma, Athens', '교통 중심|Transport hub', '도심 광장이라 어디로든 이동하기 편합니다.|The central square, easy to get anywhere from.'),
    a('쿠카키', 'Koukaki', 'Koukaki, Athens', '조용한 주거지|Quieter and residential', '아크로폴리스 박물관과 입구가 가깝고 3박 이상 머물 때 좋습니다.|Near the Acropolis Museum and entrance; good for three nights or more.'),
  ],
  istanbul: [
    a('술탄아흐메트', 'Sultanahmet', 'Sultanahmet, Istanbul', '처음 가는 여행에 추천|Best for a first visit', '아야 소피아와 블루 모스크를 걸어서 다닙니다. 저녁에는 조용하고 선택지가 적습니다.|Hagia Sophia and the Blue Mosque on foot; quieter, with fewer options, in the evening.'),
    a('카라쾨이·갈라타', 'Karaköy / Galata', 'Karaköy, Istanbul', '관광과 현지 분위기의 중간|Between sights and local life', '트램과 지하철이 편하고 이스티클랄 거리가 가깝습니다. 언덕이 가파릅니다.|Good tram and metro links near İstiklal Street; the hills are steep.'),
    a('베이올루·지한기르', 'Beyoğlu / Cihangir', 'Cihangir, Istanbul', '카페와 밤 문화|Cafés and nightlife', '카페와 상점, 바가 많은 신시가지입니다.|The newer side of town, busy with cafés, shops and bars.'),
    a('카드쾨이', 'Kadıköy (Asian side)', 'Kadıköy, Istanbul', '현지 분위기|Local feel', '아시아 쪽 동네로 페리를 타고 구시가로 건너갑니다.|On the Asian side, with ferries across to the old city.'),
  ],
  copenhagen: [
    a('인네르 뷔 (구시가)', 'Indre By', 'Indre By, Copenhagen', '처음 가는 여행에 추천|Best for a first visit', '주요 관광지와 교통이 가장 편하고 숙소가 가장 많습니다.|Closest to the sights and transport, with the widest choice of hotels.'),
    a('베스테르브로', 'Vesterbro', 'Vesterbro, Copenhagen', '먹거리와 밤 문화|Food and nightlife', '중앙역과 티볼리 옆이고 쾨드뷔엔 일대에 식당과 바가 많습니다.|Next to Central Station and Tivoli, with Kødbyen’s restaurants and bars.'),
    a('뇌레브로', 'Nørrebro', 'Nørrebro, Copenhagen', '현지 분위기·절약|Local and cheaper', '다양한 식당과 독립 상점이 있는 다문화 동네입니다.|Multicultural, with good restaurants and independent shops.'),
    a('크리스티안스하운', 'Christianshavn', 'Christianshavn, Copenhagen', '운하 분위기|Canal-side', '구시가 맞은편 운하 동네로 다리를 건너면 바로입니다.|The canal quarter just across the bridges from the old town.'),
  ],
  stockholm: [
    a('감라스탄', 'Gamla Stan', 'Gamla Stan, Stockholm', '옛 시가지 분위기|Old-town atmosphere', '왕궁과 노벨 박물관을 걸어서 갑니다. 숙소가 비싸고 관광객이 많습니다.|The Royal Palace and Nobel Museum on foot; rooms are pricey and it gets crowded.'),
    a('노르말름', 'Norrmalm', 'Norrmalm, Stockholm', '교통과 편리함|Transport and convenience', '중앙역이 있어 공항 열차와 모든 지하철 노선이 편합니다.|Around Central Station, with the airport train and every metro line.'),
    a('쇠데르말름', 'Södermalm', 'Södermalm, Stockholm', '트렌디·현지 분위기|Trendy and local', '카페와 바가 많고 시내를 내려다보는 전망 명소가 있습니다.|Cafés, bars and viewpoints over the city.'),
    a('외스테르말름', 'Östermalm', 'Östermalm, Stockholm', '고급스러움|Upscale', '고급 상점과 박물관이 가까운 조용한 동네입니다.|Smart shops and museums nearby, calm and safe.'),
  ],
  seville: [
    a('산타 크루스', 'Santa Cruz', 'Barrio Santa Cruz, Seville', '처음 가는 여행에 추천|Best for a first visit', '대성당과 알카사르를 걸어서 다닙니다. 골목이 좁아 택시가 못 들어가는 곳이 많고 짐 끌기가 힘듭니다.|The cathedral and Alcázar on foot; the lanes are too narrow for taxis in places and hard work with luggage.'),
    a('엘 아레날', 'El Arenal', 'El Arenal, Seville', '중심가·타파스|Central, for tapas', '대성당과 강 사이로 산타 크루스보다 조금 저렴합니다.|Between the cathedral and the river, slightly cheaper than Santa Cruz.'),
    a('트리아나', 'Triana', 'Triana, Seville', '현지 분위기·플라멩코|Local feel and flamenco', '다리를 건너 강 건너편 동네로 시장과 플라멩코 공연장이 있습니다. 중심까지 걸어서 10분쯤입니다.|Across the river, with its market and flamenco venues; about ten minutes’ walk to the centre.'),
    a('알라메다', 'Alameda', 'Alameda de Hércules, Seville', '밤 문화·식당|Nightlife and food', '관광객이 적고 바와 식당이 많은 광장 주변입니다.|Fewer tourists, with bars and restaurants around the square.'),
  ],
  porto: [
    a('히베이라', 'Ribeira', 'Ribeira, Porto', '처음 가는 여행에 추천|Best for a first visit', '강변의 옛 동네로 관광지를 걸어서 다닙니다. 가장 관광객이 많습니다.|The riverside old quarter, walkable to the sights; the most touristy part.'),
    a('바이샤', 'Baixa', 'Baixa, Porto', '중심가·교통|Downtown and transport', '상벤투역이 있는 시내 중심으로 밤에도 활기찹니다.|Downtown around São Bento station, lively at night.'),
    a('세도페이타', 'Cedofeita', 'Cedofeita, Porto', '예술 지구·현지 분위기|Arts district, local feel', '미겔 봄바르다 거리 갤러리가 모인 곳입니다. 주요 관광지와는 조금 떨어져 있습니다.|Galleries along Rua Miguel Bombarda; a little away from the main sights.'),
    a('빌라 노바 드 가이아', 'Vila Nova de Gaia', 'Vila Nova de Gaia riverside', '포트와인 저장고|Port wine cellars', '강 건너 와인 저장고 동네로 숙소는 적습니다. 동 루이스 1세 다리로 건너갑니다.|Across the river by the port lodges, with fewer rooms; over the Dom Luís I bridge.'),
  ],
  milan: [
    a('두오모 주변', 'Duomo / Centro Storico', 'Duomo, Milan', '관광에 가장 편리|Easiest for sightseeing', '걸어서 다니기 좋은 한가운데지만 가장 비쌉니다.|Walkable and central, but the most expensive.'),
    a('브레라', 'Brera', 'Brera, Milan', '중심가지만 분위기 있음|Central with charm', '식당과 갤러리가 많고 두오모까지 걸어서 20분쯤입니다.|Restaurants and galleries, about 20 minutes’ walk to the Duomo.'),
    a('포르타 베네치아', 'Porta Venezia', 'Porta Venezia, Milan', '현지 분위기·가성비|Local feel and value', '식당과 상점이 많고 대중교통이 편합니다.|Good food and shops, with good public transport.'),
    a('중앙역 주변', 'Centrale', 'Milano Centrale', '근교 당일치기|For day trips', '코모 호수·베르가모·베로나로 기차를 자주 탈 때 편합니다.|Handy if you will take the train often to Lake Como, Bergamo or Verona.'),
  ],
  naples: [
    a('역사 지구', 'Centro Storico', 'Centro Storico, Naples', '처음 가는 여행에 추천|Best for a first visit', '관광지가 모여 있지만 시끄럽고 복잡합니다. 숙소가 빨리 차니 일찍 예약하세요.|The sights are here, but it is loud and chaotic; rooms sell out, so book ahead.'),
    a('키아이아', 'Chiaia', 'Chiaia, Naples', '안전하고 조용함|Safe and quiet', '해안 산책로와 상점가가 있는 고급 주거지입니다.|An upscale area by the seafront promenade and shops.'),
    a('플레비시토 광장 주변', 'Piazza del Plebiscito area', 'Piazza del Plebiscito, Naples', '가족 여행·중심가|Families and central', '왕궁 앞 광장 주변으로 관광지까지 걸어서 갑니다.|Around the square by the Royal Palace, walkable to the sights.'),
  ],
  nice: [
    a('구시가 (비외 니스)', 'Vieux Nice (Old Town)', 'Vieux Nice', '처음 가는 여행에 추천|Best for a first visit', '쿠르 살레야 시장과 성 언덕이 가까운 옛 골목입니다.|Old lanes by the Cours Saleya market and Castle Hill.'),
    a('프롬나드 데 장글레', 'Promenade des Anglais', 'Promenade des Anglais, Nice', '해변·가족 여행|Beach and families', '바다 전망과 해변이 바로 앞입니다.|Sea views with the beach right in front.'),
    a('장 메드생·마세나', 'Jean Médecin / Masséna', 'Avenue Jean Médecin, Nice', '쇼핑·교통|Shopping and transport', '트램이 다니는 중심 상점가입니다.|The main shopping street on the tram line.'),
  ],
  zurich: [
    a('구시가 (알트슈타트)', 'Altstadt (Old Town)', 'Altstadt, Zurich', '관광 중심|For sightseeing', '호수, 반호프 거리, 중앙역이 걸어서 15분 안입니다. 숙박비가 가장 비쌉니다.|The lake, Bahnhofstrasse and the main station within about 15 minutes; the priciest area.'),
    a('니더도르프', 'Niederdorf', 'Niederdorf, Zurich', '밤 문화|Nightlife', '리마트강 동쪽 구시가로 바와 중간 가격 호텔이 많고 밤에 시끄럽습니다.|The east-bank old town, with bars and mid-range hotels; loud at night.'),
    a('제펠트', 'Seefeld', 'Seefeld, Zurich', '호숫가의 조용한 동네|Calm by the lake', '호숫가 산책로가 가깝고 트램으로 도심에 쉽게 갑니다.|By the lakeside walk, a short tram ride from the centre.'),
    a('랑슈트라세 (4구)', 'Langstrasse (Kreis 4)', 'Langstrasse, Zurich', '절약형|Cheaper', '숙소가 저렴한 편이고 트램으로 중앙역까지 10분이 안 걸립니다. 밤 문화 거리입니다.|Cheaper rooms, under ten minutes by tram to the main station; a nightlife street.'),
  ],
  dubrovnik: [
    a('구시가', 'Old Town', 'Old Town, Dubrovnik', '처음 가는 여행에 추천|Best for a first visit', '성벽 안이라 관광지를 다 걸어서 봅니다. 여름에는 밤늦게까지 붐빕니다.|Inside the walls with everything on foot; packed and noisy late into summer nights.'),
    a('플로체', 'Ploče', 'Ploče, Dubrovnik', '가깝지만 조용함|Close but quieter', '구시가 바로 동쪽으로 로크룸섬이 보이는 바닷가 호텔이 많습니다.|Just east of the Old Town, with seafront hotels looking at Lokrum.'),
    a('라파드', 'Lapad', 'Lapad, Dubrovnik', '해변·가족 여행|Beaches and families', '해변과 산책로가 있고 구시가까지 버스로 15분쯤입니다.|Beaches and promenades, about 15 minutes by bus from the Old Town.'),
    a('그루시', 'Gruž', 'Gruž, Dubrovnik', '절약형·항구|Budget and the port', '페리·크루즈 항구가 있는 동네로 숙소가 저렴하고 버스가 자주 다닙니다.|By the ferry and cruise port, cheaper and on frequent buses.'),
  ],
  brussels: [
    a('그랑 플라스 주변', 'Grand-Place / city centre', 'Grand-Place, Brussels', '처음 가는 여행에 추천|Best for a first visit', '그랑 플라스, 오줌싸개 동상, 갤러리 생튀베르를 걸어서 갑니다. 관광지라 비싼 편입니다.|The Grand-Place, Manneken Pis and the royal galleries on foot; touristy and pricier.'),
    a('익셀', 'Ixelles', 'Ixelles, Brussels', '먹거리와 예술|Food and the arts', '루이즈 거리와 플라제 광장 주변으로 식당이 많고 오래 머물기 좋습니다.|Around Avenue Louise and Place Flagey, full of places to eat; good for longer stays.'),
    a('생질', 'Saint-Gilles', 'Saint-Gilles, Brussels', '보헤미안 분위기|Bohemian', '예술가와 젊은 여행자가 많은 동네입니다.|Popular with artists and younger travellers.'),
  ],
  valencia: [
    a('구시가 (시우타트 베야)', 'Ciutat Vella (Old Town)', 'Ciutat Vella, Valencia', '처음 가는 여행에 추천|Best for a first visit', '대성당과 시장을 걸어서 다닙니다. 옛 건물을 고친 호텔이 많아 비싼 편입니다.|The cathedral and market on foot; many hotels are converted old buildings and cost more.'),
    a('엘 카르멘', 'El Carmen', 'El Carmen, Valencia', '밤 문화·식당|Nightlife and food', '구시가 안의 바와 식당 골목입니다. 성수기에는 시끄럽습니다.|The bar and restaurant quarter of the old town; noisy in season.'),
    a('루사파', 'Ruzafa', 'Ruzafa, Valencia', '트렌디·가성비|Trendy and good value', '기차역에서 가깝고 관광지보다 현지 분위기가 강합니다.|Close to the station, with more local life than tourist bustle.'),
    a('말바로사 해변', 'Malvarrosa beach', 'Playa de la Malvarrosa, Valencia', '해변|Beach', '해변 바로 옆입니다. 구시가까지는 트램이나 버스를 탑니다.|Right by the beach; the tram or bus takes you to the old town.'),
  ],
  granada: [
    a('중심가 (센트로)', 'Centro', 'Centro, Granada', '처음 가는 여행에 추천|Best for a first visit', '평지라 걷기 쉽고 대성당과 타파스 바가 가깝습니다. 알람브라까지는 오르막입니다.|Flat and walkable near the cathedral and tapas bars; the Alhambra is uphill.'),
    a('레알레호', 'Realejo', 'Realejo, Granada', '알람브라와 가까움|Closest to the Alhambra', '알람브라와 알바이신에 가깝고 식당이 좋은 동네입니다.|Near the Alhambra and the Albaicín, with good places to eat.'),
    a('알바이신', 'Albaicín', 'Albaicín, Granada', '옛 무어 지구의 분위기|Old Moorish quarter', '전망이 좋지만 좁고 가파른 골목이라 짐 끌기가 힘듭니다. 미니버스가 다닙니다.|Great views, but steep, narrow lanes are hard with luggage; minibuses run up.'),
  ],
  hamburg: [
    a('구시가·신시가', 'Altstadt / Neustadt', 'Altstadt, Hamburg', '처음 가는 여행에 추천|Best for a first visit', '관광지를 걸어서 다니고 중앙역이 가까워 당일치기에도 편합니다.|Sights on foot and the main station close by for day trips.'),
    a('하펜시티·슈파이허슈타트', 'HafenCity / Speicherstadt', 'HafenCity, Hamburg', '물가의 현대 지구|Modern waterfront', '엘프필하모니와 미니어처 원더랜드가 가깝습니다.|Near the Elbphilharmonie and Miniatur Wunderland.'),
    a('장크트 게오르크', 'St. Georg', 'St. Georg, Hamburg', '밤 문화·다양성|Nightlife and diversity', '중앙역 뒤편으로 바와 식당이 많습니다.|Behind the main station, full of bars and restaurants.'),
    a('장크트 파울리', 'St. Pauli', 'St. Pauli, Hamburg', '밤 문화|Nightlife', '레퍼반이 있는 유흥가로 밤늦게까지 시끄럽습니다.|Home to the Reeperbahn and loud until late.'),
  ],
  salzburg: [
    a('구시가 (알트슈타트)', 'Altstadt (Old Town)', 'Altstadt, Salzburg', '처음 가는 여행에 추천|Best for a first visit', '관광지와 카페가 문 앞입니다. 기차역에서는 조금 멉니다.|The sights and cafés on the doorstep; a little further from the station.'),
    a('신시가 (노이슈타트)', 'Neustadt', 'Neustadt, Salzburg', '쇼핑·정원|Shopping and gardens', '강 건너 미라벨 정원 쪽으로 구시가까지 걸어서 금방입니다.|Across the river by the Mirabell Gardens, a short walk to the Old Town.'),
    a('중앙역 주변', 'Elisabeth-Vorstadt (station)', 'Salzburg Hauptbahnhof', '기차 당일치기|For train day trips', '기차로 할슈타트 등 근교를 자주 다닐 때 편합니다.|Handy if you will take the train often, e.g. to Hallstatt.'),
  ],
  oslo: [
    a('시내 중심 (센트룸)', 'Sentrum', 'Sentrum, Oslo', '처음 가는 여행에 추천|Best for a first visit', '박물관, 식당, 교통을 걸어서 이용합니다. 시끄럽고 비싼 편입니다.|Museums, food and transport on foot; noisier and pricier.'),
    a('아케르 브뤼게', 'Aker Brygge', 'Aker Brygge, Oslo', '피오르 물가|On the fjord', '피오르 전망과 식당이 있고 섬으로 가는 배가 뜹니다. 호텔이 적습니다.|Fjord views, restaurants and ferries to the islands; few hotels.'),
    a('그뤼네르뢰카', 'Grünerløkka', 'Grünerløkka, Oslo', '트렌디한 동네|Trendy', '카페, 빈티지 상점, 바가 많은 도심 북동쪽 동네입니다.|Cafés, vintage shops and bars north-east of the centre.'),
  ],
  helsinki: [
    a('클루우비 (중심가)', 'Kluuvi', 'Kluuvi, Helsinki', '처음 가는 여행에 추천|Best for a first visit', '중앙역, 에스플라나디 공원, 백화점이 가까운 한가운데입니다.|The very centre, by the railway station, Esplanadi and the department stores.'),
    a('캄피', 'Kamppi', 'Kamppi, Helsinki', '교통·식당|Transport and food', '버스·지하철 중심지로 식당과 바가 가장 많습니다.|The transport hub, with the most restaurants and bars.'),
    a('푸나부오리 (디자인 지구)', 'Punavuori (Design District)', 'Punavuori, Helsinki', '디자인 상점·부티크 호텔|Design shops and boutique stays', '디자인 상점과 갤러리가 모인 동네로 부티크 숙소가 비교적 합리적입니다.|Design shops and galleries, with fairly priced boutique hotels.'),
  ],
  reykjavik: [
    a('도심 (미드보르그)', 'Downtown (Miðborg)', 'Miðborg, Reykjavík', '처음 가는 여행에 추천|Best for a first visit', '관광지와 식당을 걸어서 다닙니다. 주말 밤에는 시끄럽습니다.|Sights and restaurants on foot; noisy on weekend nights.'),
    a('옛 항구', 'Old Harbour (Grandi)', 'Old Harbour, Reykjavík', '조용한 물가|Quieter, by the water', '고래 관찰·퍼핀 투어가 떠나는 곳입니다. 호텔은 적습니다.|Where whale and puffin tours leave; fewer hotels.'),
    a('홀렘뮈르', 'Hlemmur', 'Hlemmur, Reykjavík', '절약형·교통|Budget and transport', '푸드홀과 버스 터미널이 있는 도심 동쪽 끝입니다.|The east end of downtown, with a food hall and bus hub.'),
  ],
  warsaw: [
    a('구시가·중심가', 'Old Town / Śródmieście', 'Old Town, Warsaw', '처음 가는 여행에 추천|Best for a first visit', '왕궁과 구시가 광장을 걸어서 다니고 교통이 좋습니다. 시끄럽고 비싼 편입니다.|The Royal Castle and Market Square on foot, with good transport; busy and pricier.'),
    a('포비실레', 'Powiśle', 'Powiśle, Warsaw', '강변의 활기|Lively riverside', '구시가 바로 옆 강변 동네로 바와 카페가 많고 코페르니쿠스 과학관이 있습니다.|Next to the Old Town on the river, with bars, cafés and the Copernicus Science Centre.'),
    a('프라가', 'Praga', 'Praga, Warsaw', '예술·현지 분위기|Arty and local', '비스와강 건너편 동네로 관광객이 적습니다.|Across the Vistula, with fewer tourists.'),
  ],
  tallinn: [
    a('구시가', 'Old Town', 'Old Town, Tallinn', '처음 가는 여행에 추천|Best for a first visit', '한자 상인 건물에 묵는 분위기가 좋습니다. 주말 밤에는 바 때문에 시끄럽습니다.|Sleep in a Hanseatic merchant house; weekend nights can be loud from the bars.'),
    a('로테르만 지구', 'Rotermann Quarter', 'Rotermann Quarter, Tallinn', '현대적이고 편리|Modern and convenient', '항구와 구시가 사이의 새 건물 지구로 현대식 호텔이 많습니다.|New buildings between the harbour and the Old Town, with modern hotels.'),
    a('칼라마야', 'Kalamaja', 'Kalamaja, Tallinn', '현지 분위기|Local feel', '목조 주택이 있는 조용한 동네로 숙소는 주로 아파트입니다. 구시가까지 걸어서 갑니다.|A quiet area of wooden houses, mostly apartments to rent; walkable to the Old Town.'),
  ],
  riga: [
    a('구시가', 'Old Town (Vecrīga)', 'Old Town, Riga', '중세 구시가 한가운데|In the medieval core', '관광지를 걸어서 다닙니다. 금·토요일 밤에는 새벽까지 시끄러우니 방음이 좋은 곳을 고르세요.|Sights on foot; Friday and Saturday nights are loud until 2–3 am, so pick a well-soundproofed room.'),
    a('중심가·아르누보 지구', 'Centrs / Art Nouveau district', 'Alberta iela, Riga', '조용하고 건축이 볼거리|Quieter, with Art Nouveau streets', '알베르타 거리 아르누보 건물이 있고 구시가보다 조용하고 저렴합니다.|Around the Art Nouveau streets of Alberta and Elizabetes, calmer and cheaper than the Old Town.'),
  ],
  vilnius: [
    a('구시가', 'Old Town (Senamiestis)', 'Old Town, Vilnius', '처음 가는 여행에 추천|Best for a first visit', '대성당과 게디미나스 탑을 걸어서 갑니다. 언덕과 거친 돌길이 많고 여름밤에는 시끄럽습니다.|The cathedral and Gediminas Tower on foot; hilly, rough cobbles and noisy on summer nights.'),
    a('우주피스', 'Užupis', 'Užupis, Vilnius', '예술가 동네|Artists’ quarter', '강 건너 작은 예술가 공화국으로 숙소는 주로 아파트와 작은 게스트하우스입니다.|The self-declared artists’ republic across the river; mostly apartments and small guesthouses.'),
  ],
  tbilisi: [
    a('구시가', 'Old Tbilisi', 'Old Tbilisi', '처음 가는 여행에 추천|Best for a first visit', '관광지가 모여 있습니다. 여름에는 유황 온천 바로 위 숙소는 냄새가 심할 수 있습니다.|The sights are here; rooms right above the sulphur baths can smell in summer.'),
    a('루스타벨리 거리 주변', 'Rustaveli', 'Rustaveli Avenue, Tbilisi', '짧은 여행에 편리|Handy for a short stay', '중심 대로 주변으로 상점과 주요 건물이 모여 있습니다.|Along the main avenue, with shops and landmark buildings.'),
    a('베라', 'Vera', 'Vera, Tbilisi', '조용하고 푸른 동네|Calm and green', '공원과 카페, 와인 바가 있습니다. 언덕이 많고 숙박비가 조금 비쌉니다.|Parks, cafés and wine bars; hilly and a little pricier.'),
  ],
  lyon: [
    a('프레스킬', 'Presqu’île', 'Presqu’île, Lyon', '처음 가는 여행에 추천|Best for a first visit', '두 강 사이 중심가로 교통 중심지이고 어디든 가기 쉽습니다.|The centre between the two rivers, the transport hub, with everything close.'),
    a('비외 리옹', 'Vieux Lyon', 'Vieux Lyon', '옛 시가지 분위기|Old-town atmosphere', '돌길과 전통 식당(부숑)이 있는 구시가로 푸르비에르 언덕 바로 아래입니다.|Cobbled lanes and bouchons below Fourvière hill.'),
    a('크루아루스', 'Croix-Rousse', 'Croix-Rousse, Lyon', '조용하고 전망 좋음|Quiet, with views', '언덕 위 현지 동네로 시내 전망이 좋습니다. 오르막이 힘듭니다.|A local hilltop area with views over the city; the climb is tiring.'),
  ],
  ljubljana: [
    a('구시가·중심가', 'Old Town / centre', 'Old Town, Ljubljana', '처음 가는 여행에 추천|Best for a first visit', '류블랴니차강 변으로 성과 삼중교, 식당을 걸어서 다닙니다.|On the Ljubljanica, with the castle, Triple Bridge and restaurants on foot.'),
    a('트르노보', 'Trnovo', 'Trnovo, Ljubljana', '조용하고 저렴|Quieter and cheaper', '중심 바로 남쪽 주거지로 숙소가 조금 저렴합니다.|A residential area just south of the centre with slightly cheaper rooms.'),
  ],
  split: [
    a('디오클레티아누스 궁전 (구시가)', 'Diocletian’s Palace (Old Town)', 'Diocletian’s Palace, Split', '처음 가는 여행에 추천|Best for a first visit', '궁전 안팎이 관광 중심입니다. 사람이 많습니다.|In and around the palace, the heart of town; busy with visitors.'),
    a('바로시', 'Varoš', 'Varoš, Split', '가깝지만 조용함|Close but quieter', '구시가 서쪽 언덕 동네로 대부분 보행자 거리입니다.|The hillside quarter west of the Old Town, mostly car-free.'),
    a('바치비체', 'Bačvice', 'Bačvice, Split', '해변·밤 문화|Beach and nightlife', '도시 해변이 있고 궁전에서 동쪽으로 걸어서 10분쯤입니다.|The town beach, about ten minutes’ walk east of the palace.'),
  ],
  valletta: [
    a('발레타 안', 'Valletta', 'Valletta', '역사·차 없는 여행|History, no car needed', '성벽 도시 안이라 관광지를 걸어서 봅니다. 옛 건물이라 수영장 있는 호텔은 드뭅니다.|Inside the walled city with the sights on foot; old buildings mean few hotels with pools.'),
    a('슬리마', 'Sliema', 'Sliema, Malta', '가성비·편리함|Value and convenience', '현대식 호텔이 많고 발레타까지 페리로 10분쯤입니다.|Modern hotels, about ten minutes by ferry to Valletta.'),
    a('세인트 줄리언스', 'St Julian’s', 'St Julian’s, Malta', '밤 문화·리조트 호텔|Nightlife and resort hotels', '파체빌 유흥가와 대형 호텔이 있고 발레타까지 버스가 자주 다닙니다.|Paceville’s nightlife and big hotels, with frequent buses to Valletta.'),
  ],
}

export function getStayAreas(cityId: string): StayArea[] | undefined {
  return STAY[cityId]
}
