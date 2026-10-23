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
  geneva: [
    a('파키', 'Pâquis', 'Pâquis, Geneva', '편리함과 가성비|Central and good value', '중앙역과 호수가 가깝고 호숫가 수영장(뱅 데 파키)이 있습니다. 호수에서 멀어진 골목은 밤에 조심하세요.|Near the station and the lake, with the Bains des Pâquis; take care in the back streets away from the lake at night.'),
    a('구시가', 'Old Town', 'Old Town, Geneva', '처음 가는 여행·분위기|First visit and atmosphere', '생피에르 대성당 주변 옛 동네로 호텔이 적어 일찍 예약해야 합니다.|The old quarter around St Pierre Cathedral; few hotels, so book early.'),
    a('오비브', 'Eaux-Vives', 'Eaux-Vives, Geneva', '조용함·가족 여행|Quieter, for families', '구시가와 호숫가 옆으로 큰 공원(파르크 드 라 그랑주)이 있습니다.|Beside the Old Town and the lake, with Parc La Grange.'),
    a('플랭팔레', 'Plainpalais', 'Plainpalais, Geneva', '밤 문화·절약형|Nightlife and budget', '대학가라 활기차고 숙소가 비교적 저렴합니다.|The lively university area, with cheaper rooms.'),
  ],
  marseille: [
    a('구항구 (비외 포르)', 'Vieux-Port', 'Vieux-Port, Marseille', '처음 가는 여행에 추천|Best for a first visit', '중심가라 교통이 좋고 경찰이 자주 다닙니다. 소매치기를 조심하세요.|The centre, with good transport and police about; watch for pickpockets.'),
    a('르 파니에', 'Le Panier', 'Le Panier, Marseille', '옛 동네·먹거리|Old quarter and food', '구항구 위 가장 오래된 동네로 골목 식당이 많습니다.|The oldest quarter above the port, full of small places to eat.'),
    a('쿠르 쥘리앵', 'Cours Julien', 'Cours Julien, Marseille', '밤 문화|Nightlife', '바와 식당이 모인 6구 동네로 밤늦게 시끄럽습니다.|Bars and restaurants in the 6th; noisy late at night.'),
  ],
  cologne: [
    a('구시가 (알트슈타트)', 'Altstadt', 'Altstadt-Nord, Cologne', '처음 가는 여행에 추천|Best for a first visit', '대성당과 중앙역 옆이라 어디든 걸어서 갑니다.|By the cathedral and main station, with everything on foot.'),
    a('벨기에 지구', 'Belgisches Viertel', 'Belgisches Viertel, Cologne', '밤 문화·쇼핑|Nightlife and shopping', '카페와 상점, 바가 많은 멋진 동네입니다.|Cafés, boutiques and bars.'),
    a('도이츠', 'Deutz', 'Deutz, Cologne', '조용함·박람회|Quieter, near the trade fair', '라인강 건너편으로 박람회장 호텔이 많고 유흥가에서 떨어져 있습니다.|Across the Rhine by the trade-fair grounds, away from the nightlife.'),
  ],
  bucharest: [
    a('칼레아 빅토리에이', 'Calea Victoriei / Universitate', 'Calea Victoriei, Bucharest', '처음 가는 여행에 추천|Best for a first visit', '좋은 호텔이 가장 많이 모인 중심 대로입니다.|The central avenue with the most good hotels.'),
    a('구시가 (립스카니)', 'Old Town (Lipscani)', 'Lipscani, Bucharest', '분위기·밤 문화|Atmosphere and nightlife', '관광지가 가깝지만 새벽 3~4시까지 음악이 나와 시끄럽습니다.|Close to the sights but loud with music until 3–4 am.'),
    a('피아차 로마나', 'Piața Romană', 'Piata Romana, Bucharest', '식당·젊은 분위기|Food and a young crowd', '카페와 식당이 많고 구시가까지 걸어서 10~15분입니다.|Cafés and restaurants, 10–15 minutes’ walk to the Old Town.'),
    a('피아차 우니리', 'Piața Unirii', 'Piata Unirii, Bucharest', '교통·절약형|Transport and budget', '지하철 환승역이 있어 어디든 가기 쉽습니다.|The metro interchange makes everywhere easy to reach.'),
  ],
  sofia: [
    a('중심가 (오보리슈테·세르디카)', 'City centre (Oborishte / Serdika)', 'Oborishte, Sofia', '처음 가는 여행에 추천|Best for a first visit', '알렉산더 넵스키 대성당 등 관광지를 거의 다 걸어서 갑니다. 교통량이 많습니다.|Nearly every sight, including Alexander Nevsky Cathedral, on foot; heavy traffic.'),
    a('비토샤 거리 주변', 'Vitosha Boulevard', 'Vitosha Boulevard, Sofia', '쇼핑·편의시설|Shopping and amenities', '중심 보행자 거리라 편하지만 붐비고 시끄러울 때가 있습니다.|The main pedestrian street, handy but sometimes crowded and noisy.'),
    a('로제네츠', 'Lozenets', 'Lozenets, Sofia', '조용한 고급 주거지|Leafy and upscale', '중심에서 조금 떨어진 푸른 동네입니다.|A green, calmer area a little out of the centre.'),
  ],
  belgrade: [
    a('구시가 (스타리 그라드)', 'Stari Grad', 'Stari Grad, Belgrade', '처음 가는 여행에 추천|Best for a first visit', '칼레메그단 요새와 크네즈 미하일로바 거리를 걸어서 갑니다. 비싸고 붐빕니다.|Kalemegdan fortress and Knez Mihailova on foot; pricier and busier.'),
    a('도르촐', 'Dorćol', 'Dorćol, Belgrade', '중심가지만 덜 관광지|Central, less touristy', '강 쪽으로 내려가는 조용한 주거지로 숙소가 비교적 저렴합니다.|Quieter residential blocks sloping to the river, and cheaper.'),
    a('사바말라', 'Savamala', 'Savamala, Belgrade', '밤 문화|Nightlife', '강변 클럽이 새벽까지 열어 시끄럽습니다.|Riverboat clubs open until dawn; noisy.'),
    a('제문', 'Zemun', 'Zemun, Belgrade', '조용한 옛 마을|Quiet old town', '오스트리아-헝가리 시절 동네로 한적합니다. 중심까지 버스·택시로 15~30분입니다.|Austro-Hungarian streets, calm; 15–30 minutes by bus or taxi to the centre.'),
  ],
  frankfurt: [
    a('구시가 (알트슈타트)', 'Altstadt', 'Altstadt, Frankfurt', '짧은 여행·처음 가는 여행|Short and first visits', '관광지를 걸어서 다닙니다. 호텔이 적고 비싼 편입니다.|Sights on foot; few hotels, often expensive.'),
    a('중앙역 지구', 'Bahnhofsviertel', 'Bahnhofsviertel, Frankfurt', '교통·가성비|Transport and value', '공항까지 기차로 15분이고 저가·중가 호텔이 많습니다. 분위기가 거친 편입니다.|Fifteen minutes by train to the airport, with plenty of budget and mid-range hotels; a bit edgy.'),
    a('작센하우젠', 'Sachsenhausen', 'Sachsenhausen, Frankfurt', '사과주 주점·박물관 강변|Cider taverns and museums', '강 남쪽으로 사과주 주점과 박물관 강변이 있습니다.|South of the river, with apple-wine taverns and the museum embankment.'),
    a('베스트엔트', 'Westend', 'Westend, Frankfurt', '조용하고 고급|Quiet and upscale', '빌라가 늘어선 주거지로 박람회장이 가깝습니다.|A villa district close to the trade-fair grounds.'),
  ],
  bratislava: [
    a('구시가', 'Old Town (Staré Mesto)', 'Staré Mesto, Bratislava', '처음 가는 여행에 추천|Best for a first visit', '짧은 관광이라면 구시가가 가장 좋습니다. 아파트형 숙소도 많습니다.|Best for a short sightseeing trip; plenty of apartments too.'),
    a('팔리사디', 'Palisády', 'Palisády, Bratislava', '조용한 중심가|Quieter, near the centre', '구시가 분위기에 관광 상점이 적고 정원과 공원이 있습니다.|Old Town feel without the tourist shops, with gardens and parks.'),
  ],
  yerevan: [
    a('켄트론 (중심가)', 'Kentron', 'Kentron, Yerevan', '처음 가는 여행에 추천|Best for a first visit', '공화국 광장, 북쪽 거리, 캐스케이드를 걸어서 갑니다. 비싸고 주말에는 시끄럽습니다.|Republic Square, Northern Avenue and the Cascade on foot; pricier and noisy at weekends.'),
    a('아랍키르', 'Arabkir', 'Arabkir, Yerevan', '조용한 주거지|Quiet and green', '중심 북쪽으로 공원이 많고 한적합니다.|North of the centre, with parks and quiet streets.'),
  ],
  baku: [
    a('구시가 (이체리셰헤르)', 'Old City (İçərişəhər)', 'Icherisheher, Baku', '역사·걷기 좋음|History on foot', '성벽 안 옛 도시로 메이든 타워 등 유적을 걸어서 봅니다.|The walled old city, with the Maiden Tower and other sights on foot.'),
    a('분수 광장·니자미 거리', 'Fountain Square / Nizami Street', 'Fountain Square, Baku', '쇼핑·교통|Shopping and the metro', '보행자 거리라 식당과 상점이 많고 지하철이 가깝습니다.|Pedestrian streets with shops, restaurants and the metro close by.'),
  ],
  kotor: [
    a('구시가', 'Old Town', 'Kotor Old Town', '처음 가는 여행·차 없이|First visit, no car', '성벽 안 중세 도시입니다. 비싸고 여름 주말 밤에는 음악 소리가 큽니다.|The walled medieval town; pricier, and loud on summer weekend nights.'),
    a('도브로타', 'Dobrota', 'Dobrota, Kotor', '가깝지만 조용함|Close but calmer', '구시가 북쪽 해안 마을로 작은 해변이 있고 해안길로 20~30분입니다.|North along the bay, with small beaches; 20–30 minutes on the coastal path.'),
    a('무오', 'Muo', 'Muo, Kotor', '조용함·절약형|Quiet and cheaper', '만 건너편 마을로 밤에 조용하고 구시가까지 걸어서 갑니다.|Across the inlet, calm at night and walkable to the Old Town.'),
  ],
  bologna: [
    a('역사 지구 (마조레 광장)', 'Centro Storico (Piazza Maggiore)', 'Piazza Maggiore, Bologna', '처음 가는 여행에 추천|Best for a first visit', '주요 명소가 광장에서 걸어서 10분 안이고 기차역까지 15분쯤입니다. 조금 비쌉니다.|The main sights within ten minutes of the piazza, about 15 minutes from the station; a little pricier.'),
    a('유대인 게토', 'Jewish Ghetto', 'Ghetto Ebraico, Bologna', '분위기·식당|Atmosphere and food', '좁은 골목에 식당과 아페리티보 바가 많습니다.|Narrow lanes with restaurants and aperitivo bars.'),
    a('대학가', 'University district', 'University district, Bologna', '젊고 가성비|Young and good value', '성벽 안 역사 지구 옆으로 밤에 활기차 가족 여행에는 맞지 않습니다.|Next to the old centre inside the walls; lively at night, less suited to families.'),
    a('중앙역 주변', 'Near Bologna Centrale', 'Bologna Centrale', '기차 당일치기|For train day trips', '역과 역사 지구 사이에 묵으면 근교 여행과 시내 관광이 모두 편합니다.|Between the station and the old centre is handy for both day trips and sightseeing.'),
  ],
  verona: [
    a('구시가 (치타 안티카)', 'Città Antica', 'Città Antica, Verona', '처음 가는 여행에 추천|Best for a first visit', '대부분 보행자 거리이고 역에서 걸어서 갑니다. 저렴한 숙소는 드뭅니다.|Largely pedestrianised and walkable from the station; budget rooms are rare.'),
    a('브라 광장 주변', 'Piazza Bra', 'Piazza Bra, Verona', '아레나 바로 옆|Next to the Arena', '원형 경기장 주변으로 명소가 모두 가깝습니다. 비싸고 일찍 찹니다.|Around the Roman amphitheatre, close to everything; pricier and books up early.'),
    a('베로네타', 'Veronetta', 'Veronetta, Verona', '현지 분위기·절약형|Local and cheaper', '아디제강 건너 대학가로 숙소가 저렴하고 밤이 활기찹니다.|The university quarter across the Adige, cheaper and lively at night.'),
  ],
  turin: [
    a('역사 지구 (첸트로)', 'Centro Storico', 'Piazza Castello, Turin', '처음 가는 여행에 추천|Best for a first visit', '카스텔로 광장, 왕궁, 산 카를로 광장을 걸어서 다닙니다. 비싼 편입니다.|Piazza Castello, the Royal Palace and Piazza San Carlo on foot; pricier.'),
    a('콰드릴라테로 로마노', 'Quadrilatero Romano', 'Quadrilatero Romano, Turin', '분위기와 가성비|Atmosphere and value', '돌길에 와인 바와 식당이 많고 중심가보다 숙소가 저렴합니다.|Cobbled streets of wine bars and restaurants, cheaper than the centre.'),
    a('산 살바리오', 'San Salvario', 'San Salvario, Turin', '먹거리·밤 문화|Food and nightlife', '중심 남쪽의 젊은 동네입니다. 포르타 누오바역 바로 옆 골목은 밤에 조심하세요.|A young area south of the centre; take care at night in the streets right by Porta Nuova station.'),
  ],
  palermo: [
    a('폴리테아마·리베르타', 'Politeama / Libertà', 'Politeama, Palermo', '가장 안전·가족 여행|Safest, for families', '현대식 중심가로 교통이 좋고 역사 지구까지 걸어서 갑니다.|The modern centre with good connections, walkable to the old town.'),
    a('칼사', 'Kalsa', 'Kalsa, Palermo', '가장 예쁜 옛 동네|The prettiest old quarter', '역사 지구 안 동네로 바와 식당이 많고 부티크 숙소가 있습니다.|Within the old town, full of bars and restaurants, with boutique stays.'),
    a('역사 지구 중심 (콰트로 칸티)', 'Centro Storico (Quattro Canti)', 'Quattro Canti, Palermo', '관광에 편리|Handy for sightseeing', '어디든 걸어서 가지만 밤에 시끄럽고 어두운 골목이 있습니다.|Everything on foot, but noisy at night with some dim side streets.'),
  ],
  bordeaux: [
    a('생피에르 (역사 지구)', 'Saint-Pierre', 'Saint-Pierre, Bordeaux', '처음 가는 여행에 추천|Best for a first visit', '부르스 광장과 옛 골목이 있는 중심입니다. 주말 밤에는 시끄러운 거리가 있습니다.|The heart, by Place de la Bourse; some streets are loud on weekend nights.'),
    a('황금 삼각지', 'Triangle d’Or', 'Triangle d’Or, Bordeaux', '고급스럽고 조용함|Polished and calmer', '가장 세련된 동네로 숙박비가 한 단계 비쌉니다. 생피에르까지 걸어서 갑니다.|The smartest quarter, a step up in price, walkable to Saint-Pierre.'),
    a('샤르트롱', 'Chartrons', 'Chartrons, Bordeaux', '마을 분위기·강변|Village feel by the river', '옛 와인 상인 동네로 저녁이 조용하고 먹거리가 좋습니다.|The old wine-merchant district, quieter in the evening with good food.'),
  ],
  strasbourg: [
    a('그랑딜', 'Grande Île', 'Grande Île, Strasbourg', '관광에 가장 좋음|Best for sightseeing', '대성당이 있는 섬 구시가입니다. 보행자 구역이 많아 택시로 숙소 앞까지 가기 어렵습니다.|The island old town around the cathedral; pedestrian zones make taxi drop-offs awkward.'),
    a('쁘띠 프랑스', 'Petite France', 'Petite France, Strasbourg', '운하 풍경|Canal-side', '운하와 목조 건물이 가장 아름다운 곳입니다.|The most photogenic canals and half-timbered houses.'),
    a('역 주변 (가르·트리뷔날)', 'Gare–Tribunal', 'Gare Tribunal, Strasbourg', '기차·가성비|Trains and value', '역 근처라 알자스 근교를 기차로 다니기 편하고 숙소가 많습니다. 구시가까지 걸어서 갑니다.|Near the station for Alsace day trips, with plenty of hotels and a walk to the old town.'),
  ],
  'san-sebastian': [
    a('구시가 (파르테 비에하)', 'Parte Vieja (Old Town)', 'Parte Vieja, San Sebastián', '핀초스·밤 문화|Pintxos and nightlife', '핀초스 바 한가운데입니다. 시끄럽고 오래된 건물은 에어컨이 없기도 합니다.|In the middle of the pintxo bars; noisy, and older buildings may lack air conditioning.'),
    a('센트로', 'Centro', 'Centro, San Sebastián', '처음 가는 여행에 추천|Best for a first visit', '구시가, 그로스, 라 콘차 해변 사이로 숙소 선택지가 가장 넓습니다.|Between the Old Town, Gros and La Concha, with the widest choice of hotels.'),
    a('그로스', 'Gros', 'Gros, San Sebastián', '서핑·젊은 분위기|Surf and a younger crowd', '수리올라 해변이 있고 비교적 저렴한 숙소가 있습니다.|By Zurriola beach, with some cheaper rooms.'),
  ],
  malaga: [
    a('역사 지구', 'Centro Histórico', 'Centro Histórico, Málaga', '처음 가는 여행에 추천|Best for a first visit', '대성당, 알카사바, 피카소 미술관이 문 앞입니다. 관광객이 많습니다.|The cathedral, Alcazaba and Picasso Museum on the doorstep; touristy.'),
    a('소호', 'Soho', 'Soho, Málaga', '예술 지구·저렴|Arty and cheaper', '현대미술관(CAC)이 있는 동네로 중심가와 가깝고 숙소가 저렴합니다.|Around the CAC contemporary art centre, central and cheaper.'),
    a('라 말라게타', 'La Malagueta', 'La Malagueta, Málaga', '해변|Beach', '해변 옆이고 중심가까지 걸어서 10~15분입니다.|By the beach, 10–15 minutes’ walk from the centre.'),
  ],
  bilbao: [
    a('아반도', 'Abando', 'Abando, Bilbao', '처음 가는 여행에 추천|Best for a first visit', '가장 중심가로 기차·지하철역이 가깝고 구겐하임 쪽으로 걷기 좋습니다.|The most central base, near the rail and metro stations and an easy walk towards the Guggenheim.'),
    a('구시가 (카스코 비에호)', 'Casco Viejo', 'Casco Viejo, Bilbao', '핀초스·옛 거리|Pintxos and old streets', '일곱 거리의 옛 동네로 핀초스 바가 많습니다. 구겐하임까지 걸어서 20분쯤입니다.|The Seven Streets old quarter full of pintxo bars; about 20 minutes’ walk to the Guggenheim.'),
    a('인다우츄', 'Indautxu', 'Indautxu, Bilbao', '현지 분위기·밤 문화|Local feel and nightlife', '상점과 식당이 많고 카스코 비에호보다 느긋합니다.|Shops and restaurants, more relaxed than the Casco Viejo.'),
  ],
  gdansk: [
    a('중앙 시가 (그우브네 미아스토)', 'Main Town (Główne Miasto)', 'Główne Miasto, Gdańsk', '처음 가는 여행에 추천|Best for a first visit', '알록달록한 옛 건물 사이로 명소가 문 앞입니다.|The colourful historic core, with the sights on the doorstep.'),
    a('곡물섬', 'Granary Island', 'Wyspa Spichrzów, Gdańsk', '물가의 조용한 중심|Quieter, by the water', '중심가 바로 옆 섬으로 강 전망 아파트가 많고 가족 여행에 좋습니다.|Next to the centre, with river-view apartments; good for families.'),
    a('브제슈치', 'Wrzeszcz', 'Wrzeszcz, Gdańsk', '가성비·교통|Value and transport', '트램과 근교 열차(SKM)가 편한 현지 동네입니다. 구시가 분위기는 없습니다.|A local area well served by trams and SKM trains; less atmospheric than the centre.'),
  ],
  wroclaw: [
    a('구시가', 'Old Town (Stare Miasto)', 'Stare Miasto, Wrocław', '처음 가는 여행에 추천|Best for a first visit', '시장 광장(리넥) 주변입니다. 광장에서 몇 골목 떨어지면 조용합니다.|Around the Market Square; a few streets back is quieter.'),
    a('오스트루프 툼스키', 'Ostrów Tumski', 'Ostrów Tumski, Wrocław', '조용하고 낭만적|Calm and romantic', '성당 섬으로 중심가까지 걸어서 가지만 호텔이 적습니다.|Cathedral Island, walkable to the centre but with few hotels.'),
    a('나도드제', 'Nadodrze', 'Nadodrze, Wrocław', '예술·저렴|Arty and cheaper', '벽화와 카페, 독립 상점이 많은 젊은 동네입니다.|A young area of murals, cafés and independent shops.'),
  ],
  innsbruck: [
    a('구시가 (알트슈타트)', 'Altstadt', 'Altstadt, Innsbruck', '처음 가는 여행에 추천|Best for a first visit', '어디든 걸어서 갑니다. 붐비고 비싸며 주차비가 따로 듭니다.|Everything on foot; busy, pricier, and parking is extra.'),
    a('중앙역 주변', 'Near the Hauptbahnhof', 'Innsbruck Hauptbahnhof', '기차 여행|For rail travel', '짐 들고 걷는 거리가 짧고 티롤 지역 열차가 바로 연결됩니다. 구시가도 걸어서 갑니다.|Short walks with luggage and direct trains across Tyrol; the old town is still on foot.'),
    a('훙거부르크', 'Hungerburg', 'Hungerburg, Innsbruck', '산 전망·하이킹|Mountain views and hiking', '노르트케테 산 아래로 시내에서 푸니쿨라로 10분쯤입니다.|Below the Nordkette, about ten minutes by funicular from the centre.'),
  ],
  lucerne: [
    a('구시가 (알트슈타트)', 'Old Town (Altstadt)', 'Altstadt, Lucerne', '처음 가는 여행에 추천|Best for a first visit', '카펠교 건너 옛 동네로 어디든 걸어서 갑니다. 방이 좁고 비싸며 거리 소음이 들리기도 합니다.|Across the Chapel Bridge, compact and walkable; rooms are small for the price and can be noisy.'),
    a('역 주변 (신시가)', 'Station area (Neustadt)', 'Luzern Bahnhof', '기차 당일치기|For train day trips', '역 바로 옆이라 근교 여행이 편하고 구시가까지 걸어서 5~15분입니다.|Right by the station for day trips, 5–15 minutes’ walk to the Old Town.'),
    a('호숫가', 'Lakefront', 'Lake Lucerne promenade, Lucerne', '전망·고급 호텔|Views and grand hotels', '유람선 선착장과 산책로가 가깝고 역에서 평지로 10~20분입니다.|Near the boat piers and lakeside walks, 10–20 minutes on the flat from the station.'),
  ],
  bergen: [
    a('시내 중심 (센트룸)', 'Sentrum', 'Sentrum, Bergen', '처음 가는 여행에 추천|Best for a first visit', '관광지와 식당을 걸어서 다니고 기차역이 가까워 당일치기에 편합니다.|Sights and restaurants on foot, with the station handy for day trips.'),
    a('브뤼겐', 'Bryggen', 'Bryggen, Bergen', '역사 지구·피오르 유람선|Historic wharf and fjord cruises', '세계유산 부두 지구로 바가 많고 피오르 유람선이 대부분 여기서 떠납니다.|The UNESCO wharf, lively with bars, where most fjord cruises leave.'),
    a('노르드네스', 'Nordnes', 'Nordnes, Bergen', '조용함·가족 여행|Quiet, for families', '항구 건너편 돌길 동네로 수족관과 공원이 가깝습니다.|Cobbled lanes across the harbour, near the aquarium and park.'),
  ],
  santorini: [
    a('이메로비글리', 'Imerovigli', 'Imerovigli, Santorini', '처음 가는 여행에 추천|Best for a first visit', '칼데라 전망 마을로 피라·이아보다 조용합니다. 칼데라 호텔은 해변 대신 수영장이 있습니다.|A caldera-view village, quieter than Fira and Oia; caldera hotels have pools rather than beaches.'),
    a('피라', 'Fira', 'Fira, Santorini', '교통·밤 문화|Buses and nightlife', '모든 공영 버스가 출발하는 섬의 중심입니다.|The island’s hub, where every public bus starts.'),
    a('이아', 'Oia', 'Oia, Santorini', '일몰과 낭만|Sunsets and romance', '가장 유명하지만 가장 붐비고 주차가 어렵습니다.|The most famous and the most crowded; parking is hard.'),
    a('카마리', 'Kamari', 'Kamari, Santorini', '해변·절약형|Beach and budget', '검은 모래 해변 마을로 버스가 잘 다닙니다.|A black-sand beach village with good bus links.'),
  ],
  thessaloniki: [
    a('중심가 (아리스토텔루스 광장)', 'City centre (Aristotelous Square)', 'Aristotelous Square, Thessaloniki', '처음 가는 여행에 추천|Best for a first visit', '광장과 해안 산책로 주변으로 명소를 걸어서 다닙니다.|Around the square and the waterfront, with the sights on foot.'),
    a('라다디카', 'Ladadika', 'Ladadika, Thessaloniki', '밤 문화·식당|Nightlife and food', '옛 창고 지구로 바와 식당이 많습니다. 밤에 시끄러운 거리가 있습니다.|The old warehouse quarter full of bars and restaurants; some streets are loud at night.'),
    a('아노 폴리 (윗동네)', 'Ano Poli (Upper Town)', 'Ano Poli, Thessaloniki', '조용한 옛 동네·전망|Quiet old town with views', '언덕 위라 전망이 좋지만 걸어서 오르거나 택시를 타야 합니다.|Hilltop views, but you walk up or take a taxi.'),
  ],
  zagreb: [
    a('아랫동네 (도니 그라드)', 'Lower Town (Donji Grad)', 'Donji Grad, Zagreb', '처음 가는 여행에 추천|Best for a first visit', '반 옐라치치 광장이 있는 중심가로 호텔이 가장 많습니다.|The centre around Ban Jelačić Square, with most of the hotels.'),
    a('윗동네 (고르니 그라드)', 'Upper Town (Gornji Grad)', 'Gornji Grad, Zagreb', '옛 시가지·낭만|Historic and romantic', '가장 오래된 동네로 트칼치체바 거리에 바가 많습니다. 숙소가 적고 비쌉니다.|The oldest part, with bars along Tkalčićeva; fewer, pricier rooms.'),
    a('카프톨', 'Kaptol', 'Kaptol, Zagreb', '가깝고 저렴|Close and cheaper', '윗동네 옆으로 명소까지 몇 분이고 숙박비가 낮은 편입니다.|Next to the Upper Town, minutes from the sights and cheaper.'),
  ],
  manchester: [
    a('노던 쿼터', 'Northern Quarter', 'Northern Quarter, Manchester', '처음 가는 여행·밤 문화|First visit and nightlife', '예술적인 분위기의 중심가로 부티크 호텔과 바가 많습니다.|The arty centre, full of boutique hotels and bars.'),
    a('앤코츠', 'Ancoats', 'Ancoats, Manchester', '개조한 방직 공장 동네|Converted mills', '노던 쿼터 옆으로 카페와 수제 맥주집이 많습니다.|Next to the Northern Quarter, known for coffee and craft beer.'),
    a('스피닝필즈·딘스게이트', 'Spinningfields / Deansgate', 'Spinningfields, Manchester', '쇼핑·고급 식당|Shopping and fine dining', '금융가와 쇼핑 거리로 세련된 호텔이 많고 교통이 편합니다.|The business and shopping district, with polished hotels and good transport.'),
  ],
  glasgow: [
    a('머천트 시티', 'Merchant City', 'Merchant City, Glasgow', '처음 가는 여행에 추천|Best for a first visit', '18세기 상인 지구로 극장과 상점이 가깝습니다.|The 18th-century traders’ quarter, near theatres and shops.'),
    a('시내 중심', 'City centre', 'Glasgow city centre', '편리함|Convenience', '중앙역 주변으로 어디든 가기 편합니다.|Around Central Station, handy for everything.'),
    a('웨스트엔드', 'West End', 'West End, Glasgow', '현지 분위기·공원|Local feel and parks', '대학과 켈빈그로브 박물관 근처로 공원과 펍, 공연장이 많습니다.|By the university and Kelvingrove, with parks, pubs and music venues.'),
  ],
  antalya: [
    a('칼레이치 (구시가)', 'Kaleiçi (Old Town)', 'Kaleiçi, Antalya', '역사·걷기 좋음|History on foot', '오스만 시대 집과 옛 항구가 있는 구시가입니다. 돌길이고 밤에 시끄러울 수 있습니다.|Ottoman houses and the old harbour; cobbled and can be noisy at night.'),
    a('콘얄트', 'Konyaaltı', 'Konyaaltı Beach, Antalya', '해변과 도시의 균형|Beach plus city', '7km 해변 산책로가 있고 시내까지 15분쯤입니다. 해변은 자갈입니다.|A 7 km seafront promenade about 15 minutes from the centre; the beach is pebbly.'),
    a('라라', 'Lara', 'Lara Beach, Antalya', '리조트·가족 여행|Resorts and families', '모래 해변의 대형 올인클루시브 리조트 지역으로 시내 관광에는 불편합니다.|Sandy beach and big all-inclusive resorts; out of the way for the city.'),
  ],
  gothenburg: [
    a('구시가 (이놈 발그라벤)', 'Inom Vallgraven', 'Inom Vallgraven, Gothenburg', '처음 가는 여행에 추천|Best for a first visit', '17세기 운하가 둘러싼 중심가로 중앙역과 가깝습니다.|The canal-ringed centre, close to the Central Station.'),
    a('하가·린네', 'Haga / Linné', 'Haga, Gothenburg', '카페와 옛 거리|Cafés and old streets', '아늑한 카페 거리로 걷기 좋습니다. 역에서는 조금 멉니다.|Cosy café streets, good for strolling; a little further from the station.'),
  ],
  tirana: [
    a('중심가 (스칸데르베그 광장 주변)', 'City centre (Skanderbeg Square)', 'Skanderbeg Square, Tirana', '처음 가는 여행에 추천|Best for a first visit', '박물관과 모스크, 벙크아트를 걸어서 갑니다. 광장 주변은 밤에 조심하세요.|Museums, the mosque and BunkArt on foot; take care around the square at night.'),
    a('블로쿠', 'Blloku', 'Blloku, Tirana', '식당·밤 문화|Food and nightlife', '밤낮으로 붐비는 안전한 동네로 식당과 바가 많습니다.|Busy day and night and considered safe, full of restaurants and bars.'),
  ],
  ghent: [
    a('역사 중심가', 'Historic Centre', 'Korenmarkt, Ghent', '처음 가는 여행에 추천|Best for a first visit', '그라슬레이와 코렌마르크트 주변이라 주요 명소를 걸어서 다닙니다. 행사 때는 붐비고 숙박비가 비쌉니다.|Around the Graslei and Korenmarkt, with the main sights on foot; busy during events and pricier.'),
    a('파테르숄', 'Patershol', 'Patershol, Ghent', '식당과 옛 골목|Restaurants and old lanes', '그라벤스테인 성 뒤 중세 골목에 식당과 바가 모여 있습니다. 중심가 북쪽 끝이라 조금 걷습니다.|Medieval lanes behind the Gravensteen, full of restaurants and bars, at the northern edge of the centre.'),
    a('신트피터르스 역 주변', 'Sint-Pieters station area', 'Gent-Sint-Pieters', '당일치기 기차 여행에 편리|Handy for day trips by train', '주요 기차역 옆이라 브뤼헤·브뤼셀 당일치기에 좋습니다. 구시가까지 걸어서 20~30분이라 트램을 탑니다.|Next to the main station for trips to Bruges or Brussels; the old town is a 20–30-minute walk, so take the tram.'),
  ],
  antwerp: [
    a('구시가', 'Old Town', 'Grote Markt, Antwerp', '처음 가는 여행에 추천|Best for a first visit', '대성당과 흐로테 마르크트 주변이라 주요 명소를 걸어서 다닙니다. 관광객이 많고 작은 호텔이 대부분입니다.|Around the cathedral and Grote Markt with the sights on foot; touristy, and most hotels are small.'),
    a('중앙역 주변', 'Central Station area', 'Antwerpen-Centraal', '교통 편리·가성비|Transport and value', '큰 현대식 호텔이 많아 값이 괜찮고 기차 타기 편합니다. 구시가까지 걸어서 20~30분이고 역 주변은 소매치기를 조심해야 합니다.|Big modern hotels at fair prices and easy trains; the old town is a 20–30-minute walk, and watch for pickpockets by the station.'),
    a('극장 지구', 'Theatre District', 'Theaterbuurt, Antwerp', '쇼핑과 공연|Shopping and shows', '역과 구시가 사이라 위치가 좋고 공연장·고급 식당·상점이 많습니다. 숙박비는 비싼 편입니다.|Between the station and the old town, with theatres, smart restaurants and shops; on the pricier side.'),
    a('헷 자위트', 'Het Zuid', 'Het Zuid, Antwerp', '저녁 분위기와 현지 느낌|Evenings out and a local feel', '식당과 바, 왕립미술관(KMSKA)이 있는 동네입니다. 중심가까지 걸어서 15~20분이고 호텔이 적습니다.|Restaurants, bars and the KMSKA art museum; a 15–20-minute walk to the centre, with fewer hotels.'),
  ],
  bern: [
    a('구시가', 'Old Town (Altstadt)', 'Altstadt, Bern', '처음 가는 여행에 추천|Best for a first visit', '주요 명소가 모두 걸어서 가깝고 기차역이 서쪽 끝에 있습니다. 숙박비가 비싸고 주차가 어렵습니다.|All the sights are a short walk and the station is at its western edge; rooms are pricey and parking is hard.'),
    a('브라이텐라인·로렌', 'Breitenrain–Lorraine', 'Breitenrain, Bern', '현지 분위기·숙박비 절약|Local feel, lower prices', '아레강 북쪽 주거지라 조용하고 공원과 강변 산책길이 있습니다. 구시가까지 걸어서 15~30분이고 호텔보다 아파트가 많습니다.|A quiet residential area north of the Aare with parks and river walks; 15–30 minutes on foot to the old town, with more flats than hotels.'),
  ],
  basel: [
    a('그로스바젤 구시가', 'Grossbasel Old Town', 'Altstadt Grossbasel, Basel', '처음 가는 여행에 추천|Best for a first visit', '대성당과 마르크트 광장이 있는 옛 시가지라 걸어서 둘러보기 좋습니다.|The old town around the Minster and Marktplatz, easy to explore on foot.'),
    a('클라인바젤', 'Kleinbasel', 'Kleinbasel, Basel', '저녁 분위기|Evenings out', '라인강 건너편으로 바와 식당, 광장이 많아 활기찹니다. 밤에는 시끄러울 수 있습니다.|Across the Rhine, lively with bars, restaurants and squares; can be noisy at night.'),
    a('군델딩엔', 'Gundeldingen', 'Gundeldingen, Basel', '숙박비 절약|Cheaper', '중앙역 바로 뒤라 교통이 편하고 숙소가 비교적 저렴합니다. 구시가에서는 조금 떨어져 있습니다.|Just behind the main station, well connected and cheaper; a little further from the old town.'),
  ],
  graz: [
    a('구시가', 'Old Town (Innere Stadt)', 'Innere Stadt, Graz', '처음 가는 여행에 추천|Best for a first visit', '주요 명소를 대부분 걸어서 다닙니다. 숙박비가 비싸고 주차가 어렵습니다.|Most sights are on foot; rooms cost more and parking is scarce.'),
    a('렌트', 'Lend', 'Lend, Graz', '카페와 예술 분위기|Cafés and an arty feel', '무어강 건너편으로 미술관과 카페, 바가 많습니다. 저녁에는 시끄러울 수 있습니다.|Across the Mur, with the Kunsthaus, cafés and bars; can be noisy in the evening.'),
    a('그리스', 'Gries', 'Gries, Graz', '숙박비 절약|Cheaper', '숙소가 저렴하고 트램으로 중심가까지 10분 안팎입니다. 관광지와 떨어져 있고 일부 거리는 어수선합니다.|Cheaper rooms, about ten minutes by tram to the centre; away from the sights, and some streets are a bit rough.'),
  ],
  dresden: [
    a('구시가', 'Altstadt', 'Altstadt, Dresden', '처음 가는 여행에 추천|Best for a first visit', '츠빙거 궁전·프라우엔 교회 등 주요 명소가 모여 있어 걸어서 다닙니다. 숙박비가 비싼 편입니다.|The Zwinger, the Frauenkirche and the other sights are close together on foot; rooms cost more.'),
    a('노이슈타트', 'Neustadt', 'Äußere Neustadt, Dresden', '저녁 분위기·숙박비 절약|Evenings out, lower prices', '엘베강 건너편으로 바와 식당, 개성 있는 가게가 많고 숙소가 비교적 저렴합니다. 일부 거리는 밤에 시끄럽습니다.|Across the Elbe, full of bars, restaurants and independent shops, with cheaper rooms; some streets are loud at night.'),
  ],
  leipzig: [
    a('중심가', 'City Centre (Zentrum)', 'Zentrum, Leipzig', '처음 가는 여행에 추천|Best for a first visit', '토마스 교회와 구 시청 등 주요 명소를 걸어서 다닙니다. 낮에는 붐비고 저녁에는 조용해집니다.|St Thomas Church, the Old Town Hall and the other sights on foot; busy by day, quieter in the evening.'),
    a('플라크비츠', 'Plagwitz', 'Plagwitz, Leipzig', '예술·운하 분위기|Art and canals', '옛 공장 지대가 슈피너라이 같은 예술 공간과 운하 산책길로 바뀐 동네입니다. 주요 명소와는 떨어져 있습니다.|A former industrial district with the Spinnerei art centre and canal walks; further from the main sights.'),
  ],
  nuremberg: [
    a('구시가', 'Old Town (Altstadt)', 'Altstadt, Nuremberg', '처음 가는 여행에 추천|Best for a first visit', '성벽 안에 명소와 크리스마스 마켓이 모여 있어 걸어서 다닙니다. 여름과 마켓 시즌에는 빨리 찹니다.|The sights and the Christmas market are inside the walls on foot; it books up fast in summer and market season.'),
    a('쥐트슈타트', 'Südstadt', 'Südstadt, Nuremberg', '숙박비 절약|Cheaper', '중앙역 남쪽이라 교통이 편하고 숙소가 저렴합니다. 구시가에서는 조금 떨어져 있습니다.|South of the main station, well connected and cheaper; a little out of the centre.'),
    a('고스텐호프', 'Gostenhof', 'Gostenhof, Nuremberg', '조용한 동네·가족 여행|Quieter, for families', '구시가 서쪽의 주거지로 비교적 조용합니다. 중심가까지는 대중교통을 탑니다.|A residential area west of the old town, calmer; take public transport to the centre.'),
  ],
  heidelberg: [
    a('구시가', 'Altstadt', 'Altstadt, Heidelberg', '처음 가는 여행에 추천|Best for a first visit', '성 아래 네카어강 변이라 명소를 걸어서 다닙니다. 숙박비가 비싸고 주차가 어렵습니다.|Below the castle on the Neckar, with the sights on foot; rooms are pricey and parking is hard.'),
    a('베르크하임', 'Bergheim', 'Bergheim, Heidelberg', '숙박비 절약·기차역 근처|Cheaper, near the station', '구시가 바로 서쪽이라 중앙역과 트램이 가깝고 숙소가 비교적 저렴합니다.|Just west of the old town, close to the main station and trams, with cheaper rooms.'),
    a('노이엔하임', 'Neuenheim', 'Neuenheim, Heidelberg', '가족 여행·조용한 동네|Families, quieter', '강 건너 북쪽의 푸른 주거지로 강변 공원과 동물원이 가깝습니다. 구시가까지 다리를 건너 걷거나 트램을 탑니다.|A leafy area across the river with riverside parks and the zoo; cross the bridge on foot or take the tram to the old town.'),
  ],
  stuttgart: [
    a('미테', 'Mitte (city centre)', 'Stuttgart-Mitte', '처음 가는 여행에 추천|Best for a first visit', '슐로스 광장과 중앙역 주변이라 쇼핑과 관광에 편합니다. 번화가라 붐빕니다.|Around Schlossplatz and the main station, handy for sights and shopping; busy and commercial.'),
    a('슈투트가르트 서부', 'Stuttgart-West', 'Stuttgart-West', '현지 분위기|Local feel', '카페와 식당이 많은 푸른 주거지입니다. 중심가 바로 옆이지만 명소는 조금 멀어집니다.|A leafy residential area full of cafés and restaurants, next to the centre but further from some sights.'),
    a('바트 칸슈타트', 'Bad Cannstatt', 'Bad Cannstatt, Stuttgart', '온천·메르세데스 박물관 근처|Spas and the Mercedes museum', '온천 마을로 빌헬마 동물원과 메르세데스-벤츠 박물관이 가깝고 숙박비가 비교적 쌉니다. 중심가까지 기차로 15분쯤입니다.|An old spa town near the Wilhelma zoo and the Mercedes-Benz Museum, with lower prices; about 15 minutes by train to the centre.'),
  ],
  cordoba: [
    a('유대인 지구', 'Judería (Jewish Quarter)', 'Judería, Córdoba', '처음 가는 여행에 추천|Best for a first visit', '메스키타와 알카사르가 걸어서 가깝고 식당이 많습니다. 관광객이 많고 숙박비가 비싸며 주차가 어렵습니다.|The Mezquita and the Alcázar are on foot, with plenty of places to eat; touristy, pricier and hard for parking.'),
    a('중심가', 'Centro (Plaza de las Tendillas)', 'Plaza de las Tendillas, Córdoba', '쇼핑·교통 편리|Shopping and transport', '현대적인 번화가라 상점이 많고 기차역이 가깝습니다. 옛 골목 분위기는 덜합니다.|The modern centre, with shops and the train station nearby; less old-town character.'),
  ],
  santiago: [
    a('구시가', 'Old Town', 'Old Town, Santiago de Compostela', '대성당 바로 옆|Next to the cathedral', '대성당과 순례자 사무소가 몇 분 거리이고 보행자 거리에 타파스 바가 많습니다. 여름은 순례객으로 붐비고 바 근처는 밤에 시끄럽습니다.|Minutes from the cathedral and the pilgrim office, with tapas bars on pedestrian streets; packed with pilgrims in summer, and noisy near the bars at night.'),
  ],
  palma: [
    a('구시가', 'Old Town', 'Old Town, Palma', '처음 가는 여행에 추천|Best for a first visit', '대성당과 궁전, 시장이 걸어서 가깝습니다. 관광객이 많고 숙박비가 비싸며 주차가 어렵습니다.|The cathedral, palaces and markets are on foot; crowded, pricey and short on parking.'),
    a('산타 카탈리나', 'Santa Catalina', 'Santa Catalina, Palma', '식당과 저녁 분위기|Food and evenings out', '구시가 서쪽으로 시장과 식당, 바가 많습니다. 여름에 붐비고 밤에 시끄럽습니다.|West of the old town with a market, restaurants and bars; busy in summer and noisy at night.'),
    a('칼라 마요르', 'Cala Major', 'Cala Major, Palma', '해변·가족 여행|Beach and families', '시내 서쪽의 해변 동네로 물이 잔잔합니다. 구시가까지 택시로 5분쯤이고 해변 호텔은 비쌉니다.|A beach area west of the city with calm water; about five minutes by taxi to the old town, and beachfront hotels are pricey.'),
  ],
  girona: [
    a('구시가', 'Barri Vell (Old Town)', 'Barri Vell, Girona', '처음 가는 여행에 추천|Best for a first visit', '대성당과 유대인 지구를 걸어서 다닙니다. 낮에 붐비고 골목이 좁아 택시가 들어가기 어렵습니다.|The cathedral and the Jewish quarter on foot; busy by day, and the lanes are too narrow for taxis.'),
    a('에이삼플레', 'Eixample', 'Eixample, Girona', '기차역 근처·가성비|Near the station, better value', '기차역과 상점이 가깝고 숙소가 비교적 넓고 저렴합니다. 옛 시가지 분위기는 덜합니다.|Close to the station and shops, with roomier, cheaper places; less historic charm.'),
    a('메르카달', 'Mercadal', 'Mercadal, Girona', '현지 분위기|Local feel', '구시가 강 건너편으로 길이 넓고 식당과 상점이 많습니다. 데베사 공원이 가깝습니다.|Across the river from the old town, with wider streets, places to eat and shops, near La Devesa park.'),
  ],
  genoa: [
    a('역사 지구·포르토 안티코', 'Centro Storico & Porto Antico', 'Centro Storico, Genoa', '처음 가는 여행에 추천|Best for a first visit', '두칼레 궁전과 대성당, 옛 항구와 수족관을 걸어서 다닙니다. 골목이 좁고 가파르며 성수기에 붐빕니다.|The Doge’s Palace, the cathedral, the old port and the aquarium on foot; lanes are narrow and steep, and crowded in high season.'),
    a('프린치페 역 주변', 'Piazza Principe', 'Genova Piazza Principe', '기차 여행·숙박비 절약|Trains and lower prices', '중앙역 옆이라 기차와 크루즈 터미널이 가깝고 숙소가 저렴합니다. 역 주변은 번잡하고 식당이 적습니다.|By the main station and the cruise terminal, with cheaper rooms; the station area is hectic with fewer places to eat.'),
    a('네르비·보카다세', 'Nervi & Boccadasse', 'Nervi, Genoa', '조용한 바닷가|Quiet seaside', '해안 산책로와 작은 해변이 있는 한적한 동네입니다. 시내까지 기차나 버스로 15~30분 걸립니다.|Calm seaside areas with promenades and small beaches; 15–30 minutes by train or bus to the sights.'),
  ],
  bari: [
    a('바리 베키아', 'Bari Vecchia (Old Town)', 'Bari Vecchia', '처음 가는 여행에 추천|Best for a first visit', '대부분 보행자 골목이라 조용하고 명소와 바다가 가깝습니다. 숙소가 빨리 차고 저렴한 곳이 적습니다.|Mostly pedestrian lanes near the sights and the sea; rooms book up fast and budget options are few.'),
    a('무라트', 'Murat', 'Murat, Bari', '식당·쇼핑·저녁 분위기|Food, shopping, evenings out', '구시가 바로 뒤 바둑판 시가지로 식당과 바, 호텔이 가장 많습니다. 구시가보다 분위기는 덜합니다.|The grid-plan centre behind the old town, with the most restaurants, bars and hotels; less character than Bari Vecchia.'),
    a('마돈넬라', 'Madonnella', 'Madonnella, Bari', '조용한 바닷가 주거지|Quiet seaside residential', '해안 산책로 옆 주거지라 가족 여행에 좋습니다. 식당과 밤 문화는 적습니다.|A residential area by the seafront, good for families; fewer restaurants and little nightlife.'),
  ],
  catania: [
    a('역사 지구', 'Centro Storico', 'Piazza del Duomo, Catania', '처음 가는 여행에 추천|Best for a first visit', '대성당과 코끼리 분수 등 명소와 식당이 걸어서 가깝습니다. 호텔값이 비싼 편이고 주말 밤에는 북적입니다.|The cathedral, the Elephant Fountain and places to eat on foot; hotels cost more and weekend nights are lively.'),
    a('아치카스텔로', 'Aci Castello', 'Aci Castello', '바닷가 마을|Seaside village', '카타니아 북쪽의 조용한 해안 마을로 버스가 자주 다닙니다. 숙소가 적고 해안은 바위가 많습니다.|A quiet coastal village north of Catania with frequent buses; few places to stay, and the shore is rocky.'),
    a('니콜로시', 'Nicolosi', 'Nicolosi', '에트나 화산 여행|For Mount Etna', '에트나산 아래 마을이라 등산과 투어에 좋습니다. 카타니아 시내까지 30분쯤 걸려 교통편이 필요합니다.|A village at the foot of Etna, good for hikes and tours; about 30 minutes from central Catania, so you need transport.'),
  ],
  siracusa: [
    a('오르티자섬', 'Ortigia', 'Ortigia, Siracusa', '처음 가는 여행에 추천|Best for a first visit', '옛 시가지 섬이라 대성당과 시장, 바닷가 산책길과 식당을 걸어서 다닙니다. 차량 통행이 제한되고, 기차역과 고고학 공원은 꽤 멉니다.|The old island town, with the cathedral, market, sea walks and restaurants on foot; traffic is restricted, and the station and archaeological park are a long walk.'),
  ],
  cagliari: [
    a('라 마리나', 'La Marina', 'Marina, Cagliari', '처음 가는 여행에 추천|Best for a first visit', '항구 옆 평지라 걷기 편하고 식당과 교통이 좋습니다. 밤에 시끄럽고 성수기에 붐빕니다.|Flat streets by the port with plenty of places to eat and good transport; noisy at night and busy in high season.'),
    a('카스텔로', 'Castello', 'Castello, Cagliari', '옛 성채와 전망|Old citadel and views', '언덕 위 옛 시가지라 명소와 전망이 좋습니다. 계단과 비탈이 많고 차로 들어가기 어렵습니다.|The hilltop old quarter with the landmarks and views; steep, stair-heavy streets with little car access.'),
    a('스탐파체', 'Stampace', 'Stampace, Cagliari', '가성비·현지 분위기|Value and a local feel', '중심가에 가까우면서 차분하고 숙소가 비교적 저렴합니다.|Central but calmer, with better-value rooms.'),
    a('포에토 해변', 'Poetto', 'Poetto, Cagliari', '해변 휴양|Beach time', '긴 모래 해변 옆입니다. 시내 명소까지는 버스나 택시를 타야 합니다.|Beside the long sandy beach; take a bus or taxi to the sights.'),
  ],
  bergamo: [
    a('치타 알타', 'Città Alta (Upper Town)', 'Città Alta, Bergamo', '옛 시가지 분위기|Old-town atmosphere', '언덕 위 중세 시가지라 당일치기 손님이 떠난 아침·저녁이 특히 좋습니다. 숙박비가 비싸고 숙소가 적으며 짐 들고 오르기 힘듭니다.|The medieval hilltop town, best in the morning and evening after the day-trippers leave; pricier, fewer rooms, and hard with heavy luggage.'),
    a('치타 바사', 'Città Bassa (Lower Town)', 'Città Bassa, Bergamo', '기차·공항·당일치기에 편리|Trains, airport and day trips', '기차역과 공항버스가 가깝고 숙소가 많고 저렴합니다. 푸니콜라로 치타 알타까지 몇 분입니다. 옛 시가지 분위기는 덜합니다.|Near the station and the airport bus, with more and cheaper rooms, a few minutes from the upper town by funicular; less historic charm.'),
  ],
  padua: [
    a('역사 지구', 'Historic Centre', 'Centro Storico, Padua', '처음 가는 여행에 추천|Best for a first visit', '광장과 대성당, 해부학 극장이 걸어서 가깝고 식당과 바가 많습니다. 광장 바로 앞에는 호텔이 적어 몇 블록 떨어진 곳을 찾게 됩니다.|The squares, the cathedral and the anatomy theatre are on foot, with plenty of restaurants and bars; few hotels face the squares themselves.'),
  ],
  trieste: [
    a('보르고 테레지아노·해안가', 'Borgo Teresiano & the waterfront', 'Borgo Teresiano, Trieste', '처음 가는 여행에 추천|Best for a first visit', '카날 그란데와 통일 광장, 바닷가가 가깝고 기차역까지 걸어갑니다. 중급 이상 호텔이 많아 비싼 편입니다.|Near the Canal Grande, Piazza Unità and the seafront, walking distance from the station; mostly mid-range to upscale.'),
    a('구시가·산 주스토', 'Old Town & San Giusto', 'Città Vecchia, Trieste', '조용한 옛 골목|Quiet old lanes', '대성당과 성, 로마 극장 유적 근처의 중세 골목입니다. 길이 좁고 가팔라 짐이 많으면 불편합니다.|Medieval lanes near the cathedral, the castle and the Roman theatre; narrow and steep, awkward with luggage.'),
    a('중앙역 주변', 'Station area', 'Trieste Centrale', '숙박비 절약·교통 편리|Cheaper, good connections', '기차·버스 타기 편하고 숙소가 저렴합니다. 경치는 덜하고 큰길 옆은 시끄럽습니다.|Easy trains and buses with cheaper rooms; less scenic, and rooms on main roads are noisy.'),
  ],
  lecce: [
    a('역사 지구', 'Historic Centre', 'Centro Storico, Lecce', '처음 가는 여행에 추천|Best for a first visit', '바로크 성당과 식당, 와인 바를 걸어서 다닙니다. 차량 통행 제한(ZTL)이 있어 운전·주차가 어렵고 광장 근처는 저녁에 시끄럽습니다.|Baroque churches, restaurants and wine bars on foot; the restricted-traffic zone (ZTL) makes driving and parking hard, and the main squares are loud in the evening.'),
    a('마치니 광장 주변', 'Piazza Mazzini area', 'Piazza Mazzini, Lecce', '쇼핑·주차 편리|Shopping and easier parking', '구시가 바로 밖 현대 시가지라 상점이 많고 운전하기 쉽습니다. 명소까지 걸어서 10~15분입니다.|The modern district just outside the old town, with shops and easier driving; 10–15 minutes on foot to the sights.'),
  ],
  sorrento: [
    a('타소 광장 주변', 'Centre (Piazza Tasso)', 'Piazza Tasso, Sorrento', '처음 가는 여행에 추천|Best for a first visit', '상점과 식당, 기차역이 가까워 당일치기에 편합니다. 성수기에는 붐비고 시끄러우며 일찍 마감됩니다.|Shops, restaurants and the train station nearby, handy for day trips; noisy and crowded in high season, and books up early.'),
    a('마리나 피콜라', 'Marina Piccola (port)', 'Marina Piccola, Sorrento', '카프리·아말피 배편|Ferries to Capri and Amalfi', '배 타는 항구 바로 앞이라 섬·해안 여행에 좋습니다. 중심가까지는 계단이나 오르막을 올라가야 합니다.|Right by the ferry port for Capri and the coast; steps or an uphill walk to the centre.'),
    a('마리나 그란데', 'Marina Grande', 'Marina Grande, Sorrento', '조용한 어촌 분위기|Quiet fishing-village feel', '바닷가 해산물 식당이 있는 옛 어촌입니다. 중심가까지 꽤 걷고 상점과 숙소가 적습니다.|An old fishing harbour with seafood restaurants; a fair walk to the centre, with few shops or rooms.'),
  ],
  toulouse: [
    a('카피톨 주변', 'Capitole (centre)', 'Place du Capitole, Toulouse', '처음 가는 여행에 추천|Best for a first visit', '주요 명소를 걸어서 다니고 지하철·버스가 편합니다. 인기가 많아 숙박비가 비쌀 수 있습니다.|The main sights on foot with easy metro and bus links; popular, so it can be expensive.'),
    a('카름', 'Carmes', 'Les Carmes, Toulouse', '식당과 저녁 분위기|Food and evenings out', '시장과 빵집, 비스트로, 와인 바가 모여 있습니다. 금요일 밤에는 매우 붐빕니다.|A market, bakeries, bistros and wine bars; very crowded on Friday nights.'),
    a('생시프리앵', 'Saint-Cyprien', 'Saint-Cyprien, Toulouse', '강 건너 현지 분위기|Local feel across the river', '가론강 건너편의 마을 같은 동네로 시장과 강변 산책길이 있습니다.|A village-like area across the Garonne with markets and riverside walks.'),
  ],
  montpellier: [
    a('에퀴송 (역사 지구)', 'L’Écusson (historic centre)', 'Écusson, Montpellier', '처음 가는 여행에 추천|Best for a first visit', '중세 골목과 코메디 광장 주변이라 명소와 카페, 바를 걸어서 다닙니다. 대학가라 밤에 시끄러울 수 있습니다.|Medieval lanes around Place de la Comédie, with the sights, cafés and bars on foot; a student hub, so it can be noisy at night.'),
    a('앙티곤', 'Antigone', 'Antigone, Montpellier', '조용하고 넓은 거리|Calmer, wide streets', '웅장한 현대 건축 지구로 레즈강 변과 가깝습니다. 중심가에서 트램으로 몇 정거장입니다.|A grand modern district near the Lez riverbanks, a few tram stops from the centre.'),
    a('포르 마리안', 'Port Marianne', 'Port Marianne, Montpellier', '현대적인 동네·공원|Modern, with parks', '새로 지은 지구라 공원과 산책·자전거 길이 많고 관광객이 적습니다.|The newest district, with parks and walking and cycling paths, and fewer tourists.'),
  ],
  avignon: [
    a('성벽 안 구시가', 'Inside the walls (Intra Muros)', 'Palais des Papes, Avignon', '처음 가는 여행에 추천|Best for a first visit', '교황청과 시계 광장, 식당을 걸어서 다닙니다. 주차가 어렵고 7월 축제 때는 몇 달 전에 찹니다.|The Palais des Papes, Place de l’Horloge and restaurants on foot; parking is scarce and rooms fill months ahead for the July festival.'),
    a('빌뇌브레자비뇽', 'Villeneuve-lès-Avignon', 'Villeneuve-lès-Avignon', '조용한 강 건너 마을|Quiet village across the river', '론강 건너 성채 마을로 아비뇽 전망이 좋습니다. 시내까지 버스나 차로 건너가야 합니다.|A fortified village across the Rhône with views of Avignon; take a bus or drive across to the city.'),
  ],
  annecy: [
    a('구시가', 'Old Town (Vieille Ville)', 'Vieille Ville, Annecy', '처음 가는 여행에 추천|Best for a first visit', '운하와 골목, 시장과 식당이 모여 있어 걸어서 다닙니다. 관광객이 많고 비싸며 차가 거의 못 들어갑니다.|Canals, lanes, markets and restaurants on foot; touristy, pricey, and mostly closed to cars.'),
    a('안시르비외', 'Annecy-le-Vieux', 'Annecy-le-Vieux', '가족 여행·호숫가|Families and the lake', '호수와 산이 보이는 조용한 주거지라 수영·자전거에 좋습니다. 구시가까지 조금 떨어져 있고 언덕이 있습니다.|Quiet residential streets with lake and mountain views, good for swimming and cycling; not central, and hilly in places.'),
    a('호숫가 마을', 'Lakeside villages (Talloires, Sévrier)', 'Talloires', '조용한 호수 풍경|Quiet lake views', '탈루아르·세브리에 같은 호숫가 마을은 한적하고 경치가 좋습니다. 시내와 떨어져 있고 성수기에는 길이 막힙니다.|Villages such as Talloires and Sévrier are calm and scenic; away from town, with summer traffic jams.'),
  ],
  bath: [
    a('시내 중심', 'City Centre', 'Bath city centre', '처음 가는 여행에 추천|Best for a first visit', '로마 목욕탕과 수도원, 기차역이 걸어서 가깝고 식당과 펍이 많습니다. 일부 거리는 밤에 시끄럽고 숙박비가 비쌉니다.|The Roman Baths, the Abbey and the station on foot, with pubs and restaurants; some streets are loud at night and rooms are pricey.'),
    a('월콧', 'Walcot', 'Walcot, Bath', '개성 있는 가게와 식당|Independent shops and food', '독립 상점과 토요일 벼룩시장, 식당이 많은 동네로 중심가까지 걸어서 가깝습니다. 동네 안에 명소는 적습니다.|Independent shops, a Saturday flea market and good food, a short walk from the centre; few sights of its own.'),
  ],
  liverpool: [
    a('시내 중심', 'City Centre', 'Liverpool city centre', '처음 가는 여행에 추천|Best for a first visit', '캐번 클럽 주변 비틀스 명소와 리버풀 원 쇼핑가, 라임 스트리트역이 가깝습니다. 밤에는 붐비고 시끄럽습니다.|The Cavern Quarter’s Beatles sights, Liverpool ONE and Lime Street station nearby; busy and loud at night.'),
    a('앨버트 독·해안가', 'Royal Albert Dock & Waterfront', 'Royal Albert Dock, Liverpool', '가족 여행·박물관|Families and museums', '강변 부두에 박물관과 비틀스 스토리가 있고 시내 중심보다 조용합니다. 숙박비는 비싼 편입니다.|Riverside docks with museums and The Beatles Story, calmer than the centre; rooms come at a premium.'),
  ],
  brighton: [
    a('해안가·시내 중심', 'Seafront & city centre', 'Brighton seafront', '처음 가는 여행에 추천|Best for a first visit', '해변과 피어, 로열 파빌리온, 기차역이 걸어서 가깝습니다. 활기차서 밤에 시끄러울 수 있습니다.|The beach, the pier, the Royal Pavilion and the station on foot; lively, so it can be noisy at night.'),
    a('더 레인스', 'The Lanes', 'The Lanes, Brighton', '옛 골목과 쇼핑|Old lanes and shopping', '좁은 골목에 골동품점과 상점, 식당이 모인 옛 중심가입니다.|The old heart of town, narrow lanes of antique shops, boutiques and restaurants.'),
    a('켐프타운', 'Kemptown', 'Kemptown, Brighton', '개성 있는 저녁 분위기|Quirky evenings out', '알록달록한 거리와 부티크 호텔, 펍이 많은 동네로 중심가까지 걸어갑니다. 늦게까지 시끄럽습니다.|Colourful streets with boutique hotels and pubs, walkable to the centre; lively into the early hours.'),
    a('호브', 'Hove', 'Hove', '조용한 바닷가|Calmer seaside', '브라이턴 서쪽의 차분한 해안 동네로 자체 기차역이 있습니다. 밤 문화는 적습니다.|A calmer seaside area west of Brighton with its own station; little nightlife.'),
  ],
  bristol: [
    a('하버사이드·올드 시티', 'Harbourside & Old City', 'Harbourside, Bristol', '처음 가는 여행에 추천|Best for a first visit', '박물관과 명소, 바와 식당을 걸어서 다니고 교통이 편합니다. 아주 조용하지는 않습니다.|Museums, sights, bars and restaurants on foot with easy transport; not especially quiet.'),
    a('클리프턴', 'Clifton', 'Clifton, Bristol', '조용한 동네·가족 여행|Quieter, for families', '조지 왕조 건물과 카페, 현수교와 동물원이 있는 주거지입니다. 비싸고 밤 문화와 떨어져 있으며 큰 호텔이 적습니다.|Georgian streets, cafés, the Suspension Bridge and the zoo; pricey, away from the nightlife, with few big hotels.'),
    a('스톡스 크로프트', 'Stokes Croft', 'Stokes Croft, Bristol', '거리 예술·저녁 분위기|Street art and nightlife', '거리 예술과 독립 카페, 바가 많고 비교적 저렴합니다. 밤에 시끄러워 조용한 여행에는 맞지 않습니다.|Street art, independent cafés and bars at lower prices; loud at night, not for a quiet break.'),
  ],
  belfast: [
    a('시내 중심', 'City Centre', 'Belfast City Hall', '처음 가는 여행에 추천|Best for a first visit', '시청과 세인트 조지 시장, 쇼핑가를 걸어서 다니고 더블린행 기차역이 가깝습니다. 수요가 많아 비쌀 때가 있습니다.|City Hall, St George’s Market and the shops on foot, near the station for Dublin trains; demand can push prices up.'),
    a('캐서드럴 쿼터', 'Cathedral Quarter', 'Cathedral Quarter, Belfast', '펍과 저녁 분위기|Pubs and evenings out', '자갈길에 펍과 식당, 벽화와 공연장이 모여 있습니다. 저렴한 숙소는 빨리 찹니다.|Cobbled streets of pubs, restaurants, murals and music venues; cheaper rooms sell out fast.'),
    a('퀸스 쿼터', 'Queen’s Quarter', 'Queen’s Quarter, Belfast', '숙박비 절약|Cheaper', '대학가라 저렴한 숙소와 펍이 많고 식물원이 가깝습니다. 시청까지 걸어서 20분쯤입니다.|The university area, with cheaper rooms, pubs and the Botanic Gardens; about 20 minutes on foot to City Hall.'),
  ],
  chania: [
    a('구시가·베네치아 항구', 'Old Town & Venetian Harbour', 'Old Town, Chania', '처음 가는 여행에 추천|Best for a first visit', '항구와 골목에 식당과 바가 모여 있어 차 없이 지내기 좋습니다. 방이 작고 엘리베이터가 없는 곳이 많으며 주차가 안 되고 바 근처는 시끄럽습니다.|Restaurants and bars around the harbour and lanes, easy without a car; rooms are small, many buildings lack lifts, there is no parking and bars can be noisy.'),
    a('네아 호라', 'Nea Chora', 'Nea Chora, Chania', '해변|Beach', '구시가에서 걸어갈 수 있는 해변 동네라 바다 수영에 좋고, 차가 있으면 지내기 편합니다.|A beach area within walking distance of the old town, good for swimming and easier if you have a car.'),
  ],
  heraklion: [
    a('구시가 (베네치아 성벽 안)', 'Old Town (inside the Venetian walls)', 'Lions Square, Heraklion', '차 없이 지내기 좋음|Best without a car', '볼거리와 식당, 바가 대부분 성벽 안에 있고 크노소스 유적도 가깝습니다. 북적이는 도시 분위기이고, 차가 있다면 주차 가능한지 확인해야 합니다.|Most sights, restaurants and bars are inside the walls, and Knossos is close; it feels like a busy city, and drivers should check for parking.'),
  ],
  rhodes: [
    a('로도스 시내 (구시가·신시가)', 'Rhodes Town (Old & New Town)', 'Rhodes Old Town', '처음 가는 여행에 추천|Best for a first visit', '중세 구시가와 볼거리가 걸어서 가깝고 교통이 가장 편해 차 없이 지내기 좋습니다. 관광객이 많고 구시가는 돌길과 계단이 많으며 비싼 편입니다.|The medieval old town and sights on foot, with the best transport, so easy without a car; crowded, and the old town has cobbles, steps and higher prices.'),
    a('린도스', 'Lindos', 'Lindos', '그림 같은 마을|Picture-postcard village', '언덕 위 성채와 해변이 있는 하얀 마을입니다. 시내에서 50km(1시간쯤) 떨어져 있고 여름에 매우 붐비며 계단이 많습니다.|A white village with a hilltop acropolis and beach; about 50 km (an hour) from town, very crowded in summer, with lots of steps.'),
    a('팔리라키', 'Faliraki', 'Faliraki', '해변과 밤 문화|Beach and nightlife', '해변과 클럽, 바가 많은 휴양지입니다. 중심가는 밤에 시끄럽습니다.|A resort of beaches, clubs and bars; the centre is loud at night.'),
  ],
  corfu: [
    a('코르푸 시내', 'Corfu Town', 'Corfu Old Town', '처음 가는 여행에 추천|Best for a first visit', '유네스코 구시가와 식당, 명소를 걸어서 다닙니다. 바로 앞에 모래 해변은 없습니다.|The UNESCO old town, restaurants and sights on foot; no sandy beach on the doorstep.'),
    a('팔레오카스트리차', 'Paleokastritsa', 'Paleokastritsa', '해변과 풍경|Coves and scenery', '서해안의 맑은 만과 바다 동굴, 언덕 위 수도원이 있는 곳입니다.|West-coast coves, sea caves and a hilltop monastery.'),
    a('카시오피', 'Kassiopi', 'Kassiopi', '조용한 항구 마을|Quiet harbour village', '북동쪽의 아담한 항구 마을로 잔잔한 해변과 식당이 있습니다. 다소 비싼 편입니다.|A compact north-east harbour village with calm beaches and restaurants; on the pricier side.'),
  ],
  mykonos: [
    a('미코노스 타운 (호라)', 'Mykonos Town (Chora)', 'Mykonos Town', '처음 가는 여행에 추천|Best for a first visit', '리틀 베니스와 풍차, 상점과 밤 문화가 모여 있고 버스 터미널이 있습니다. 붐비고 시끄럽습니다.|Little Venice, the windmills, shops and nightlife, plus the bus terminal; crowded and noisy.'),
    a('오르노스', 'Ornos', 'Ornos, Mykonos', '가족 여행·잔잔한 해변|Families, calm beach', '얕고 잔잔한 해변과 식당이 있습니다. 성수기에는 붐빕니다.|A shallow, calm beach with plenty of places to eat; crowded in peak season.'),
    a('플라티스 얄로스', 'Platis Gialos', 'Platis Gialos, Mykonos', '해변·교통 편리|Beach with good buses', '해변 리조트와 수상 스포츠가 있고 대중교통이 좋습니다. 붐빌 수 있습니다.|Beach resorts and water sports with good public transport; can get busy.'),
  ],
  rotterdam: [
    a('중심가', 'Centrum', 'Rotterdam Centrum', '처음 가는 여행에 추천|Best for a first visit', '마르크트할, 큐브 하우스, 박물관 공원과 중앙역을 걸어서 다닙니다. 번잡하고 숙박비가 비싼 편입니다.|The Markthal, the Cube Houses, Museumpark and Centraal station on foot; busy and often pricier.'),
    a('코프 반 자위트', 'Kop van Zuid', 'Kop van Zuid, Rotterdam', '강변 전망·현대 건축|River views, modern architecture', '에라스뮈스 다리 건너 강변 지구로 스카이라인 전망이 좋고 조용합니다. 중심가까지 다리를 걷거나 지하철을 타야 하고 다소 삭막합니다.|Across the Erasmus Bridge, calm with skyline views; walk the bridge or take the metro to the centre, and it can feel impersonal.'),
    a('델프스하븐', 'Delfshaven', 'Delfshaven, Rotterdam', '옛 운하 거리|Historic canals', '전쟁 폭격을 피한 옛 항구 마을로 운하와 카페가 있습니다. 호텔이 적고 중심가까지 트램으로 15분쯤입니다.|An old harbour that escaped the wartime bombing, with canals and cafés; few hotels, about 15 minutes by tram to the centre.'),
  ],
  'the-hague': [
    a('중심가', 'City Centre (Centrum)', 'Binnenhof, The Hague', '처음 가는 여행에 추천|Best for a first visit', '비넨호프와 마우리츠하위스 미술관, 중앙역이 가까워 다른 도시 당일치기에도 편합니다.|Near the Binnenhof, the Mauritshuis and Central station, handy for day trips to other cities.'),
    a('스헤베닝언', 'Scheveningen', 'Scheveningen', '해변|Beach', '시내 서쪽 몇 km의 해변 지구로 해산물 식당과 수상 스포츠가 있습니다. 구시가와는 트램으로 오갑니다.|The beach district a few kilometres west, with seafood and water sports; take the tram to the centre.'),
  ],
  utrecht: [
    a('구시가', 'Old Town (Oudegracht & Dom)', 'Oudegracht, Utrecht', '처음 가는 여행에 추천|Best for a first visit', '운하와 돔 타워, 식당을 걸어서 다닙니다. 비싸고 주말에 붐빕니다.|The canals, the Dom Tower and restaurants on foot; pricier and crowded at weekends.'),
    a('비테브라우언', 'Wittevrouwen', 'Wittevrouwen, Utrecht', '조용한 현지 분위기|Quiet, local feel', '구시가 동쪽의 조용한 주거지로 중심가까지 걸어서 15분쯤입니다. 호텔이 적습니다.|A calm residential area east of the old town, about 15 minutes on foot to the centre; few hotels.'),
  ],
  maastricht: [
    a('구시가', 'Binnenstad', 'Vrijthof, Maastricht', '처음 가는 여행에 추천|Best for a first visit', '프레이트호프 광장과 마르크트 광장, 상점과 식당을 걸어서 다닙니다. 주말에 시끄럽고 비싼 편입니다.|Vrijthof, the Markt, shops and restaurants on foot; noisy at weekends and pricier.'),
    a('바이크', 'Wyck', 'Wyck, Maastricht', '개성 있는 가게·기차역 근처|Boutiques, near the station', '마스강 동쪽으로 부티크와 카페, 식당이 많고 중앙역이 가깝습니다. 큰 호텔은 적습니다.|East of the Maas with boutiques, cafés and restaurants, near the main station; few large hotels.'),
    a('예커 지구', 'Jekerkwartier', 'Jekerkwartier, Maastricht', '조용한 옛 동네|Quiet and historic', '옛 집과 녹지가 있는 조용한 동네로 중심가가 가깝습니다. 식당과 숙소가 적습니다.|Quiet streets of old houses and greenery close to the centre; fewer places to eat and stay.'),
  ],
  funchal: [
    a('구시가·대성당 주변', 'Old Town & Sé', 'Zona Velha, Funchal', '처음 가는 여행에 추천|Best for a first visit', '시장과 카페, 식당이 가깝고 섬 투어 대부분이 이곳에서 출발합니다. 길이 가파르고 주차가 어려우며 해변은 없습니다.|Markets, cafés and restaurants nearby, and most island tours leave from here; steep streets, hard parking, no beach.'),
    a('리도', 'Lido', 'Lido, Funchal', '수영장 있는 호텔·바다 수영|Pool hotels and sea swimming', '서쪽 해안의 호텔 지구로 바다 수영장과 산책로가 있습니다. 관광지 분위기가 강하고 구시가에서 몇 km 떨어져 있습니다.|The hotel strip on the west side with seawater pools and a promenade; very touristy and a few kilometres from the old town.'),
  ],
  coimbra: [
    a('바이샤 (아랫동네)', 'Baixa (downtown)', 'Baixa, Coimbra', '처음 가는 여행에 추천|Best for a first visit', '평지라 걷기 편하고 식당·상점과 기차역(코임브라-A)이 가깝습니다. 거리가 다소 낡았고 조용하지는 않습니다.|Flat and walkable, with places to eat, shops and Coimbra-A station nearby; streets look worn and it is not very quiet.'),
    a('알타 (윗동네)', 'Alta (upper town)', 'Alta, Coimbra', '대학가의 옛 분위기|Old university quarter', '대학과 소피아 거리가 있는 언덕 위 옛 시가지입니다. 가파르고 주차가 어려우며 학기 중에는 밤에 시끄러울 수 있습니다.|The hilltop old town around the university and Rua da Sofia; steep, hard to park, and can be noisy at night in term time.'),
    a('산타 클라라', 'Santa Clara', 'Santa Clara, Coimbra', '조용한 강 건너편|Quiet across the river', '몬데구강 건너편이라 구시가 전망이 좋고 주차가 쉽습니다. 호텔이 적고 중심가와 떨어져 있습니다.|Across the Mondego with views of the old town and easier parking; fewer hotels and further from the centre.'),
  ],
  faro: [
    a('구시가', 'Old Town (Cidade Velha)', 'Cidade Velha, Faro', '처음 가는 여행에 추천|Best for a first visit', '성벽 안 옛 시가지라 대성당과 성당들을 걸어서 다닙니다.|The walled old town, with the cathedral and churches on foot.'),
    a('마리나 주변', 'Marina', 'Marina de Faro', '보트 투어·저녁 분위기|Boat trips and evenings out', '구시가 바로 옆 항구로 리아 포르모자 섬 투어 배가 떠나고 식당이 많습니다. 붐비는 편입니다.|The harbour next to the old town, where boats leave for the Ria Formosa islands, with plenty of restaurants; busy.'),
    a('파루 해변', 'Faro Beach (Praia de Faro)', 'Praia de Faro', '해변 휴양|Beach stay', '섬의 모래 해변으로 다리로 이어집니다. 숙소가 적고 구시가까지 버스로 20분쯤입니다.|The sandy island beach, reached by a bridge; few places to stay, about 20 minutes by bus to the old town.'),
  ],
  brasov: [
    a('구시가', 'Old Town', 'Piața Sfatului, Brașov', '처음 가는 여행에 추천|Best for a first visit', '흑색 교회와 시청 광장이 걸어서 가깝습니다. 가장 비싸고 성수기에 붐비며, 기차역은 북쪽으로 3km쯤 떨어져 있습니다.|The Black Church and Council Square on foot; the priciest area and busy in season, and the station is about 3 km north.'),
  ],
  zadar: [
    a('구시가', 'Old Town', 'Old Town, Zadar', '처음 가는 여행에 추천|Best for a first visit', '로마 광장과 바다 오르간, 식당을 걸어서 다닙니다. 주말 밤에 시끄럽고 주차장이 있는 숙소가 드물며 저렴한 곳이 적습니다.|The Roman Forum, the Sea Organ and restaurants on foot; loud on weekend nights, few places with parking and few bargains.'),
    a('보리크', 'Borik', 'Borik, Zadar', '가족 여행·모래 해변|Families, sandy beach', '크로아티아에서 드문 모래 해변과 리조트가 있습니다. 구시가에서 북쪽으로 4km쯤이고 여름에 붐빕니다.|A rare sandy beach for Croatia, with resorts; about 4 km north of the old town and busy in summer.'),
  ],
  hvar: [
    a('흐바르 타운', 'Hvar Town', 'Hvar Town', '처음 가는 여행에 추천|Best for a first visit', '밤 문화가 활발하고 파클레니 섬 배편이 있어 차 없이 지내기 좋습니다. 여름에 가장 붐비고 비쌉니다.|Lively nightlife and boats to the Pakleni Islands, easy without a car; the busiest and priciest place in summer.'),
    a('스타리 그라드', 'Stari Grad', 'Stari Grad, Hvar', '조용한 옛 항구|Quiet historic harbour', '유네스코 평원 옆의 조용한 옛 항구 마을입니다. 밤 문화가 적고 흐바르 타운까지는 버스로만 오갑니다.|A calm old harbour town by the UNESCO-listed plain; little nightlife, and only a bus to Hvar Town.'),
    a('옐사', 'Jelsa', 'Jelsa, Hvar', '느긋한 항구 마을|Relaxed harbour town', '북쪽 해안의 항구 마을로 식당과 산책길이 있습니다. 흐바르 타운까지 차로 30분쯤이고 비수기에는 교통이 적습니다.|A north-coast harbour town with restaurants and a promenade; about 30 minutes’ drive from Hvar Town, with little transport off-season.'),
  ],
  izmir: [
    a('알산자크', 'Alsancak', 'Alsancak, İzmir', '바닷가 산책로와 저녁 분위기|Seafront and evenings out', '코르돈 해안 산책로 옆으로 카페와 바, 상점이 많습니다.|Next to the Kordon seafront promenade, with cafés, bars and shops.'),
    a('코나크', 'Konak', 'Konak, İzmir', '옛 시가지와 시장|Old town and bazaar', '시계탑 광장과 케메랄트 시장, 아고라 유적이 가깝습니다. 알산자크보다 전통적인 분위기입니다.|Near the clock tower square, the Kemeraltı bazaar and the Agora; more traditional than Alsancak.'),
  ],
  goreme: [
    a('괴레메', 'Göreme', 'Göreme', '처음 가는 여행에 추천|Best for a first visit', '투어 출발지와 식당이 모여 있고 야외 박물관·계곡까지 걸어갑니다. 성수기에 가장 붐비고 비싸며 새벽 열기구 소리가 들립니다.|Tours, restaurants and walks to the Open Air Museum and valleys; busiest and priciest in season, with early balloon noise.'),
    a('우치히사르', 'Uçhisar', 'Uçhisar', '조용한 전망|Quiet with views', '바위 성채 아래 마을로 계곡 전망과 일몰이 좋습니다. 언덕이 가파르고 식당이 적으며 비싼 편입니다.|A village below the rock castle with valley and sunset views; steep, with fewer restaurants and higher prices.'),
    a('위르귑', 'Ürgüp', 'Ürgüp', '고급 호텔과 와인|Upscale hotels and wine', '큰 마을이라 고급 호텔과 식당, 와이너리가 있습니다. 열기구 전망과 일부 명소는 차로 이동해야 합니다.|A proper town with upscale hotels, restaurants and wineries; balloon views and some sights need transport.'),
  ],
  skopje: [
    a('시내 중심', 'City Centre (Macedonia Square)', 'Macedonia Square, Skopje', '처음 가는 여행에 추천|Best for a first visit', '마케도니아 광장과 돌다리, 강변 산책로, 구 바자르까지 걸어서 다닙니다. 관광객이 많아 일찍 예약하는 편이 좋습니다.|Macedonia Square, the Stone Bridge, the river promenade and the Old Bazaar on foot; busy, so book early.'),
  ],
  ohrid: [
    a('구시가 (바로시)', 'Old Town (Varosh)', 'Varosh, Ohrid', '옛 골목과 호수 전망|Old lanes and lake views', '성채와 성 요한 카네오 교회까지 걸어가는 언덕 위 옛 동네입니다. 길이 가파르고 차가 들어가기 어려우며 성수기에 붐빕니다.|The hillside old quarter, walking distance to the fortress and St John at Kaneo; steep, hard for cars and busy in peak season.'),
    a('시내 중심', 'Centre (New Town)', 'Ohrid centre', '평지·식당과 교통|Flat, food and transport', '상점과 식당, 버스가 가까운 평지입니다. 옛 분위기는 덜하고 여름에는 시끄러울 수 있습니다.|Flat streets near shops, restaurants and buses; less historic charm, and noisy in summer.'),
    a('라가딘', 'Lagadin', 'Lagadin', '호숫가 휴양·가족 여행|Lakeside resorts, families', '시내 남쪽 8km쯤의 호숫가로 수영장 있는 리조트가 많습니다. 시내까지 차나 버스를 타야 하고 식당이 적습니다.|About 8 km south on the lake, with resort hotels and pools; take a car or bus to town, and few places to eat.'),
  ],
  plovdiv: [
    a('구시가', 'Old Town', 'Old Town, Plovdiv', '처음 가는 여행에 추천|Best for a first visit', '로마 유적과 19세기 저택, 자갈길을 걸어서 둘러봅니다. 다른 곳보다 비쌉니다.|Roman ruins, 19th-century mansions and cobbled streets on foot; pricier than elsewhere.'),
    a('카파나', 'Kapana', 'Kapana, Plovdiv', '카페와 저녁 분위기|Cafés and evenings out', '예술가 골목에 카페와 갤러리, 바가 모여 있고 중심 거리에서 몇 분입니다.|The artists’ quarter of cafés, galleries and bars, a few minutes from the main street.'),
  ],
  'luxembourg-city': [
    a('빌오트 (구시가)', 'Ville Haute (Old Town)', 'Ville Haute, Luxembourg', '처음 가는 여행에 추천|Best for a first visit', '유네스코 옛 시가지라 명소를 걸어서 다닙니다. 대부분 보행자 거리이고 비탈이 있으며 비쌉니다.|The UNESCO-listed old town with the sights on foot; mostly pedestrian, hilly in places and pricey.'),
    a('가르 (역 주변)', 'Gare (station area)', 'Luxembourg Gare', '기차·가성비|Trains and value', '중앙역 주변이라 당일치기와 교통이 편하고 호텔값이 비교적 괜찮습니다. 구시가까지 걸어서 20분쯤이고 소매치기를 조심해야 합니다.|Around the main station, handy for day trips with better-value hotels; about 20 minutes on foot to the old town, and watch for pickpockets.'),
  ],
  galway: [
    a('시내 중심·라틴 쿼터', 'City Centre & Latin Quarter', 'Latin Quarter, Galway', '처음 가는 여행에 추천|Best for a first visit', '펍과 음악, 식당이 모여 있고 에어 광장과 역이 가깝습니다. 늘 붐비고 숙소가 빨리 찹니다.|Pubs, live music and restaurants, near Eyre Square and the stations; always busy, and rooms sell out.'),
    a('솔트힐', 'Salthill', 'Salthill, Galway', '바닷가·가족 여행|Seaside, families', '골웨이만의 해변 산책로가 있는 조용한 동네입니다. 시내까지 걸어서 20분쯤이고 여름에 붐빕니다.|A calmer seaside area with a promenade on Galway Bay; about 20 minutes’ walk to town and busy in summer.'),
  ],
  cork: [
    a('시내 중심', 'City Centre', 'St Patrick’s Street, Cork', '처음 가는 여행에 추천|Best for a first visit', '명소와 식당, 펍을 걸어서 다닙니다. 가장 번잡한 곳입니다.|The sights, restaurants and pubs on foot; the busiest part of town.'),
    a('빅토리안 쿼터', 'Victorian Quarter', 'Victorian Quarter, Cork', '기차역 근처·저녁 분위기|Near the station, lively', '강 북쪽의 알록달록한 동네로 켄트역과 버스 정류장이 가깝고 호스텔이 있습니다.|A colourful area on the north bank near Kent station and the buses, with hostels.'),
  ],
  tromso: [
    a('항구·시내 중심', 'Harbour & town centre', 'Tromsø harbour', '처음 가는 여행에 추천|Best for a first visit', '작은 도심이라 상점과 식당, 오로라·고래 투어 집결지를 걸어서 다닙니다. 항구 쪽은 가장 비싸고, 도시 불빛 때문에 오로라는 투어로 나가서 보는 편이 낫습니다.|A compact centre with shops, restaurants and tour pick-ups on foot; the harbour is the priciest, and city lights mean auroras are better seen on a tour.'),
  ],
  malmo: [
    a('구시가 (감라 스타덴)', 'Gamla Staden (Old Town)', 'Gamla Staden, Malmö', '처음 가는 여행에 추천|Best for a first visit', '광장과 명소, 식당을 걸어서 다니고 중앙역이 가깝습니다. 중심 광장 주변은 붐빕니다.|The squares, sights and restaurants on foot, near the central station; the main square is busy.'),
    a('베스트라 함넨', 'Västra Hamnen (Western Harbour)', 'Västra Hamnen, Malmö', '바닷가 현대 지구|Modern waterfront', '공원과 바다 수영장이 있는 새 지구로 조용합니다. 구시가까지 걸어서 30분쯤이고 옛 분위기는 없습니다.|A new district with parks and sea swimming, calm and residential; about 30 minutes’ walk to the old town, with no historic feel.'),
  ],
  aarhus: [
    a('시내 중심', 'City Centre (Aarhus C)', 'Aarhus C', '처음 가는 여행에 추천|Best for a first visit', '명소와 상점, 기차역을 걸어서 다니고 호텔이 가장 많습니다. 주차비가 비쌉니다.|The sights, shops and station on foot, with the most hotels; parking is expensive.'),
    a('라틴 지구', 'Latin Quarter', 'Latinerkvarteret, Aarhus', '카페와 옛 골목|Cafés and old streets', '가장 오래된 동네로 카페와 식당, 바가 많아 활기찹니다.|The oldest part of town, lively with cafés, restaurants and bars.'),
  ],
  lausanne: [
    a('중심가·구시가', 'Centre & Old Town (La Cité)', 'La Cité, Lausanne', '처음 가는 여행에 추천|Best for a first visit', '대성당과 박물관, 옛 골목과 카페를 걸어서 다닙니다. 가파른 언덕이라 오르막이 많습니다.|The cathedral, museums, old lanes and cafés on foot; it sits on a steep hill, so expect climbing.'),
    a('우시', 'Ouchy', 'Ouchy, Lausanne', '호숫가 휴식|Lakeside', '레만호 변의 공원과 올림픽 박물관이 있는 동네입니다. 구시가까지는 지하철로 올라갑니다.|Lakeside parks and the Olympic Museum by Lake Geneva; take the metro up to the old town.'),
  ],
  'cinque-terre': [
    a('몬테로소 알 마레', 'Monterosso al Mare', 'Monterosso al Mare', '해변·짐 많을 때|Beach, easier with luggage', '다섯 마을 중 가장 크고 모래 해변과 숙소, 교통편이 가장 많습니다. 성수기에 붐빕니다.|The largest village, with a sandy beach and the most rooms and transport; crowded in peak season.'),
    a('베르나차', 'Vernazza', 'Vernazza', '그림 같은 항구|Picture-perfect harbour', '다섯 마을 가운데쯤이라 사진·하이킹 거점으로 좋습니다. 숙소가 적고 비쌉니다.|Central among the villages, a good base for photos and hikes; few rooms and higher prices.'),
    a('마나롤라', 'Manarola', 'Manarola', '노을과 산책|Sunsets and walks', '노을 전망과 바다 수영, 하이킹 출발점으로 인기입니다. 숙소가 적고 차가 들어가지 못합니다.|Popular for sunsets, sea swimming and hikes; few rooms and no car access.'),
    a('라스페치아', 'La Spezia', 'La Spezia', '숙박비 절약·교통 거점|Cheaper, transport hub', '항구 도시라 숙소가 많고 리오마조레까지 기차로 10분이 안 됩니다. 마을 분위기는 없고 매번 기차나 배를 타야 합니다.|A port city with plenty of rooms, under ten minutes by train to Riomaggiore; no village feel, and you ride the train or boat every day.'),
  ],
  como: [
    a('코모 시내', 'Como town', 'Como centro', '기차 접근·숙박비 절약|Trains and lower prices', '밀라노에서 기차로 오기 쉽고 식당과 밤 문화가 있습니다. 호수 남쪽 끝이라 벨라조 등 주요 명소까지 배로 1~2시간 걸립니다.|Easy by train from Milan, with restaurants and nightlife; at the southern tip, so Bellagio and the main sights are one to two hours by boat.'),
    a('벨라조', 'Bellagio', 'Bellagio', '처음 가는 호수 여행|Classic first visit', '호수 한가운데라 배로 다른 마을에 가기 좋습니다. 작고 언덕이 많아 빨리 차며 최소 숙박일이 있는 곳이 많습니다.|In the middle of the lake for easy ferries; small and hilly, fills up fast, and many hotels have minimum stays.'),
    a('바렌나', 'Varenna', 'Varenna', '조용하고 로맨틱|Quiet and romantic', '작은 마을이라 한적하고 기차역이 있습니다. 호텔이 매우 적습니다.|A small, peaceful village with a train station; very few hotels.'),
  ],
  siena: [
    a('성벽 안 역사 지구', 'Historic centre (inside the walls)', 'Piazza del Campo, Siena', '처음 가는 여행에 추천|Best for a first visit', '캄포 광장과 대성당을 걸어서 다니고 아침·저녁이 한적합니다. 낮에는 붐비고 차량 통행 제한(ZTL)이 있으며 비싸고 빨리 찹니다.|Piazza del Campo and the cathedral on foot, with quiet mornings and evenings; crowded by day, inside the ZTL, pricier and books up fast.'),
    a('성벽 밖 역 주변', 'Outside the walls, near the station', 'Siena railway station', '주차·기차·가성비|Parking, trains and value', '숙소가 넓고 저렴하며 주차가 쉽고 기차역이 가깝습니다. 구시가까지 걸어서 15~20분이거나 에스컬레이터로 올라갑니다.|Roomier, cheaper places with easier parking, near the station; 15–20 minutes on foot or the escalators up to the old town.'),
  ],
  pisa: [
    a('산타 마리아 (역사 지구)', 'Santa Maria (historic centre)', 'Piazza dei Miracoli, Pisa', '처음 가는 여행에 추천|Best for a first visit', '사탑과 대성당, 세례당이 가깝습니다. 관광객이 많고 가장 비쌉니다.|Near the Leaning Tower, the cathedral and the baptistery; touristy and the priciest area.'),
    a('산 프란체스코', 'San Francesco', 'San Francesco, Pisa', '대학가·저녁 분위기|University area, evenings', '교회와 광장, 바가 많은 대학가로 사탑까지 걸어서 10분쯤입니다.|A university quarter of churches, squares and bars, about ten minutes on foot to the tower.'),
    a('산탄토니오', 'Sant’Antonio', 'Sant’Antonio, Pisa', '기차역·공항 근처|Near the station and airport', '아르노강 남쪽이라 중앙역과 공항이 가까워 당일치기에 좋습니다. 사탑까지 걸어서 20분쯤입니다.|South of the Arno, close to the main station and airport for day trips; about 20 minutes’ walk to the tower.'),
  ],
  taormina: [
    a('역사 지구', 'Historic centre', 'Corso Umberto, Taormina', '처음 가는 여행에 추천|Best for a first visit', '움베르토 거리와 그리스 극장, 카페를 걸어서 다닙니다. 호텔보다 B&B가 많고 가장 비쌉니다.|Corso Umberto, the Greek theatre and cafés on foot; more B&Bs than hotels, and the priciest area.'),
    a('마차로 만', 'Mazzarò Bay', 'Mazzarò, Taormina', '해변과 바다 전망|Beach and sea views', '언덕 아래 해변 지구로 케이블카를 타면 시내까지 몇 분입니다.|The beach area below town, minutes from the centre by cable car.'),
    a('자르디니 낙소스', 'Giardini Naxos', 'Giardini Naxos', '해변·숙박비 절약|Beach, lower prices', '남쪽의 해변 마을로 숙소가 저렴하고 에트나 여행에도 좋습니다. 타오르미나까지 차로 15~20분입니다.|A beach town to the south with cheaper rooms, also good for Etna; 15–20 minutes’ drive to Taormina.'),
  ],
  matera: [
    a('사씨 (동굴 지구)', 'The Sassi (cave districts)', 'Sassi di Matera', '동굴 호텔의 특별한 하룻밤|A night in a cave', '당일치기 손님이 떠난 저녁과 아침의 골목이 특히 좋습니다. 계단이 많고 차량 진입이 금지돼 위쪽에 주차해야 합니다(호텔이 짐을 옮겨 주기도 합니다).|The lanes are best in the evening and morning after the day-trippers leave; lots of steps, and no driving, so park above (some hotels ferry your bags).'),
    a('신시가', 'Modern town', 'Piazza Vittorio Veneto, Matera', '짐·차가 있을 때 편리|Easier with a car or luggage', '평지라 주차와 짐, 기차역 이용이 쉽고 사씨까지 걸어서 가깝습니다. 동굴 마을 분위기는 덜합니다.|Flat, with easier parking, luggage and station access, a short walk from the Sassi; less of the cave-town magic.'),
  ],
  capri: [
    a('카프리 타운', 'Capri Town', 'Piazzetta, Capri', '처음 가는 여행에 추천|Best for a first visit', '호텔과 상점, 식당이 가장 많고 활기찹니다. 성수기 피아체타 광장은 매우 붐비고, 해변까지는 가파른 계단이나 버스를 타야 합니다.|The most hotels, shops and restaurants, and lively; the Piazzetta is packed in peak season, and the beaches are down steep steps or a bus ride.'),
    a('아나카프리', 'Anacapri', 'Anacapri', '조용하고 가성비 좋음|Quieter, better value', '관광객이 적고 숙박비가 비교적 저렴하며 솔라로산 등산로가 가깝습니다. 카프리 타운까지는 버스나 택시를 탑니다.|Fewer crowds and better prices, near the Monte Solaro trails; take a bus or taxi to Capri Town.'),
    a('마리나 그란데', 'Marina Grande', 'Marina Grande, Capri', '배편·짐 많을 때 편리|Ferries and luggage', '여객선 항구라 짧은 일정이나 보트 투어에 편합니다. 낮에는 붐비고 언덕 위 숙소는 짐 들고 오르기 힘듭니다.|The ferry port, handy for short stays and boat tours; crowded by day, and hillside places mean a climb with bags.'),
  ],
  lucca: [
    a('성벽 안 역사 지구', 'Historic centre (inside the walls)', 'Centro Storico, Lucca', '처음 가는 여행에 추천|Best for a first visit', '명소를 모두 걸어서 다닙니다. 비싼 편이고 밤에는 시끄러울 수 있으며, 루카 코믹스 축제 기간에는 일찍 예약해야 합니다.|All the sights on foot; pricier and can be noisy at night, and book early for Lucca Comics & Games.'),
  ],
  positano: [
    a('중심가 (스피아자 그란데 주변)', 'Central Positano (near Spiaggia Grande)', 'Spiaggia Grande, Positano', '처음 가는 여행에 추천|Best for a first visit', '상점과 식당이 가장 많고 여객선이 해변 바로 앞에 닿습니다. 성수기에 붐비고 가장 비싸며 계단이 많습니다.|The most shops and restaurants, with ferries docking at the beach; crowded, the priciest, and full of stairs.'),
    a('포르닐로', 'Fornillo', 'Fornillo, Positano', '조용하고 비교적 저렴|Quieter, a bit cheaper', '중심가 서쪽의 한적한 동네로 해변까지 경치 좋은 길을 걷습니다. 언덕이 많아 셔틀버스를 타지 않으면 오르막을 걸어야 합니다.|A calmer area west of the centre with a scenic walk to the beach; hilly, so it’s uphill unless you take the shuttle bus.'),
  ],
  bolzano: [
    a('구시가', 'Old Town', 'Piazza Walther, Bolzano', '처음 가는 여행에 추천|Best for a first visit', '발터 광장과 대성당, 박물관, 상점을 걸어서 다니고 크리스마스 마켓도 이곳에서 열립니다.|Piazza Walther, the cathedral, museums and shops on foot, with the Christmas market here too.'),
  ],
  brno: [
    a('구시가', 'Old Town', 'Náměstí Svobody, Brno', '처음 가는 여행에 추천|Best for a first visit', '슈필베르크 성과 광장, 카페와 식당을 걸어서 다닙니다. 돌니 광장 주변은 늦은 밤 시끄러울 수 있습니다.|Špilberk Castle, the squares, cafés and restaurants on foot; the bars around Dolní náměstí can be rowdy late at night.'),
  ],
  sibiu: [
    a('역사 지구 (윗마을·아랫마을)', 'Historic centre (Upper & Lower Town)', 'Piața Mare, Sibiu', '처음 가는 여행에 추천|Best for a first visit', '대광장과 소광장, 거짓말쟁이 다리, 루터교 대성당을 걸어서 다닙니다. 밤에도 조용하지 않은 편이고 숙박비가 비쌉니다.|The Large and Small Squares, the Bridge of Lies and the Lutheran cathedral on foot; rarely quiet even at night, and pricier.'),
  ],
  oxford: [
    a('시내 중심', 'City Centre', 'Oxford city centre', '처음 가는 여행에 추천|Best for a first visit', '애슈몰린 박물관과 보들리 도서관, 대학 칼리지를 걸어서 다닙니다. 가장 붐비는 곳입니다.|The Ashmolean, the Bodleian and the colleges on foot; the busiest part of town.'),
    a('제리코', 'Jericho', 'Jericho, Oxford', '식당과 저녁 분위기|Food and evenings out', '중심가 북서쪽의 동네로 식당과 칵테일 바, 펍이 많습니다.|North-west of the centre, full of restaurants, cocktail bars and pubs.'),
  ],
}

export function getStayAreas(cityId: string): StayArea[] | undefined {
  return STAY[cityId]
}
