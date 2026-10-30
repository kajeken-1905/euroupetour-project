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
  'aix-en-provence': [
    a('구시가', 'Old Town (Vieil Aix)', 'Vieil Aix, Aix-en-Provence', '처음 가는 여행에 추천|Best for a first visit', '미라보 거리와 대성당, 시장, 식당을 걸어서 다닙니다. 옛 저택을 고친 작은 호텔이 많고 골목은 밤까지 활기찹니다.|The Cours Mirabeau, the cathedral, markets and restaurants on foot, with small hotels in old mansions; the lanes stay lively into the evening.'),
    a('마자랭 지구', 'Quartier Mazarin', 'Quartier Mazarin, Aix-en-Provence', '조용하고 우아한 동네|Quiet and elegant', '미라보 거리 남쪽의 17세기 저택 거리로 그라네·코몽 미술관이 가깝고 구시가보다 조용합니다.|Seventeenth-century streets south of the Cours Mirabeau, near the Granet and Caumont museums and calmer than the old town.'),
    a('로통드 주변', 'La Rotonde', 'La Rotonde, Aix-en-Provence', '기차·버스 이동이 편함|Handy for trains and buses', '버스터미널과 시내 기차역이 가까워 마르세유나 근교 마을로 오가기 좋습니다.|Close to the bus station and the town railway station, handy for Marseille and day trips.'),
  ],
  'saint-tropez': [
    a('항구·구시가', 'Port & old town', 'Vieux Port Saint-Tropez', '처음 가는 여행에 추천|Best for a first visit', '항구와 리스 광장, 식당을 걸어서 다닙니다. 여름에는 숙박비가 매우 비싸고 밤늦게까지 붐빕니다.|The harbour, Place des Lices and restaurants on foot; summer rates are very high and it stays busy late.'),
    a('팡플론·라마튀엘', 'Pampelonne & Ramatuelle', 'Ramatuelle', '해변 휴양|Beach stays', '긴 모래 해변 쪽 호텔과 비치 클럽에 묵습니다. 시내까지 차나 버스로 가야 합니다.|Hotels and beach clubs by the long sandy beach; you need a car or bus to reach town.'),
  ],
  antibes: [
    a('구시가(비유 앙티브)', 'Old Antibes', 'Vieil Antibes', '처음 가는 여행에 추천|Best for a first visit', '성벽 안 골목에 피카소 미술관과 시장, 식당이 모여 있고 기차역도 걸어서 갑니다.|The Picasso museum, the market and restaurants in the walled lanes, with the station on foot.'),
    a('쥐앙레팽', 'Juan-les-Pins', 'Juan-les-Pins', '해변과 밤 문화|Beaches and nightlife', '모래 해변과 바가 많은 동네로 여름밤 재즈 축제가 열립니다. 구시가까지 버스나 기차로 갑니다.|Sandy beaches and bars, home to a summer jazz festival; take a bus or train to the old town.'),
  ],
  grasse: [
    a('구시가', 'Historic centre', 'Grasse historic centre', '처음 가는 여행에 추천|Best for a first visit', '향수 박물관과 공장, 대성당이 걸어서 가깝습니다. 언덕이 가파르고 저녁에는 조용합니다.|Perfume museum, factories and cathedral on foot; steep streets and quiet evenings.'),
    a('칸에서 다녀오기', 'Base in Cannes', 'Cannes', '거점에서 다녀오기|Day trip from a base', '칸에 묵고 기차로 약 30분 올라옵니다. 바닷가 숙소와 식당을 고르기 쉽습니다.|Stay in Cannes and ride the train up in about 30 minutes, with seaside hotels and restaurants to choose from.'),
  ],
  'saint-paul-de-vence': [
    a('마을 안', 'In the village', 'Saint-Paul-de-Vence', '마을에서 묵기|Stay in the village', '낮 관광객이 떠난 뒤 조용한 성벽 마을을 즐길 수 있습니다. 숙소가 적고 비쌉니다.|Enjoy the walled village once day visitors leave; rooms are few and pricey.'),
    a('니스에서 다녀오기', 'Base in Nice', 'Nice', '거점에서 다녀오기|Day trip from a base', '니스에 묵고 400번 버스로 약 1시간 걸려 다녀옵니다.|Stay in Nice and take bus 400, about an hour each way.'),
  ],
  eze: [
    a('마을 안', 'In the village', 'Èze village', '마을에서 묵기|Stay in the village', '고급 호텔 몇 곳이 전부라 비싸지만, 해 질 녘과 아침의 조용한 마을을 볼 수 있습니다.|Only a few luxury hotels, so it is pricey, but you get the quiet village at dusk and dawn.'),
    a('니스에서 다녀오기', 'Base in Nice', 'Nice', '거점에서 다녀오기|Day trip from a base', '니스에 묵고 버스로 약 30분 걸려 다녀옵니다. 모나코와 묶어 하루에 다녀오기 좋습니다.|Stay in Nice and take the bus, about 30 minutes; easy to pair with Monaco in a day.'),
  ],
  menton: [
    a('구시가·해변', 'Old town & seafront', 'Menton seafront', '처음 가는 여행에 추천|Best for a first visit', '해변 산책로와 구시가, 기차역이 걸어서 가깝고 식당이 많습니다.|The promenade, old town and station on foot, with plenty of restaurants.'),
    a('가라방', 'Garavan', 'Garavan Menton', '조용한 항구 동네|Quiet harbour quarter', '이탈리아 쪽 요트 항구 주변의 조용한 주택가로 정원들이 가깝습니다.|A quiet residential quarter around the yacht harbour towards Italy, close to the gardens.'),
  ],
  arles: [
    a('구시가', 'Old town', 'Centre historique', '처음 가는 여행에 추천|Best for a first visit', '원형경기장과 포룸 광장 주변으로 볼거리가 모두 걸어서 닿습니다.|Around the arena and Place du Forum, with every sight on foot.'),
    a('아비뇽에서 다녀오기', 'Base in Avignon', 'Avignon', '거점에서 다녀오기|Day trip from a base', '아비뇽에 묵고 기차로 약 20분 걸려 다녀옵니다.|Stay in Avignon and take the train, about 20 minutes.'),
  ],
  'les-baux-de-provence': [
    a('마을에서 묵기', 'In the village', 'Les Baux-de-Provence', '마을에서 묵기|Stay in the village', '숙소가 적고 비싸지만, 관광객이 빠진 저녁 마을을 볼 수 있습니다.|Few, pricey hotels, but you get the village once the crowds leave.'),
    a('아를이나 생레미에서 다녀오기', 'Base in Arles or Saint-Rémy', 'Arles · Saint-Rémy', '거점에서 다녀오기|Day trip from a base', '버스가 드물어 차로 다녀오는 편이 편합니다. 아를에서 약 25분 걸립니다.|Buses are rare, so a car is easiest; about 25 minutes from Arles.'),
  ],
  gordes: [
    a('마을에서 묵기', 'In the village', 'Gordes', '마을에서 묵기|Stay in the village', '고급 호텔과 민박이 있어 비싸지만, 해 질 녘 마을을 조용히 볼 수 있습니다.|Luxury hotels and guesthouses, pricey, but the village is quiet at dusk.'),
    a('아비뇽에서 다녀오기', 'Base in Avignon', 'Avignon', '거점에서 다녀오기|Day trip from a base', '대중교통이 거의 없어 차를 빌리거나 뤼베롱 투어로 다녀옵니다.|There is almost no public transport, so rent a car or join a Luberon tour.'),
  ],
  'isle-sur-la-sorgue': [
    a('구시가', 'Old town', 'Centre-ville', '처음 가는 여행에 추천|Best for a first visit', '물길로 둘러싸인 섬 같은 구시가로 시장과 식당이 모두 걸어서 닿습니다.|The island-like old town inside the canals, with the market and restaurants on foot.'),
    a('아비뇽에서 다녀오기', 'Base in Avignon', 'Avignon', '거점에서 다녀오기|Day trip from a base', '아비뇽에 묵고 지역 열차로 약 25분 걸려 다녀옵니다.|Stay in Avignon and take the regional train, about 25 minutes.'),
  ],
  cassis: [
    a('항구 주변', 'Around the port', 'Port de Cassis', '마을에서 묵기|Stay in the village', '항구 식당과 유람선 선착장이 바로 앞이지만 여름엔 비쌉니다.|Right by the restaurants and boat departures, but pricey in summer.'),
    a('마르세유에서 다녀오기', 'Base in Marseille', 'Marseille', '거점에서 다녀오기|Day trip from a base', '마르세유에 묵고 기차로 약 20분, 역에서 버스로 항구까지 갑니다.|Stay in Marseille: about 20 minutes by train, then a bus from the station to the port.'),
  ],
  'moustiers-sainte-marie': [
    a('마을에서 묵기', 'In the village', 'Moustiers-Sainte-Marie', '마을에서 묵기|Stay in the village', '협곡과 호수를 함께 보려면 마을이나 주변에 묵는 편이 좋습니다.|To see both the gorge and the lake, stay in or near the village.'),
    a('엑상프로방스에서 다녀오기', 'Base in Aix-en-Provence', 'Aix-en-Provence', '거점에서 다녀오기|Day trip from a base', '차로 약 1시간 40분이라 하루 일정이 깁니다. 대중교통은 거의 없습니다.|About 1 hr 40 min by car, so it makes a long day; there is almost no public transport.'),
  ],
  carcassonne: [
    a('라 시테 안', 'Inside the Cité', 'La Cité', '분위기를 원한다면|For atmosphere', '성벽 안에 묵으면 관광객이 빠진 밤과 아침의 시테를 볼 수 있지만 차로 오가기 불편합니다.|Sleep inside the walls to see the Cité at night and dawn, though access by car is awkward.'),
    a('바스티드 생루이', 'Bastide Saint-Louis', 'Bastide Saint-Louis', '기차로 오는 여행에 추천|Best if arriving by train', '기차역과 가깝고 식당이 많으며 시테까지 걸어서 약 25분입니다.|Close to the station with plenty of restaurants; about 25 minutes on foot to the Cité.'),
  ],
  narbonne: [
    a('구시가', 'Old town', 'Centre historique', '처음 가는 여행에 추천|Best for a first visit', '운하 양쪽 구시가로 대성당과 시장이 모두 걸어서 닿습니다.|The old town on both sides of the canal, with the cathedral and market on foot.'),
  ],
  perpignan: [
    a('구시가', 'Old town', 'Centre historique', '처음 가는 여행에 추천|Best for a first visit', '카스티예와 로주 광장 주변으로 볼거리와 식당이 걸어서 닿습니다.|Around the Castillet and Place de la Loge, with sights and restaurants on foot.'),
  ],
  collioure: [
    a('마을에서 묵기', 'In the village', 'Collioure', '마을에서 묵기|Stay in the village', '숙소가 적고 여름엔 비싸지만, 저녁 항구 풍경을 볼 수 있습니다.|Few, pricey summer rooms, but you get the harbour in the evening.'),
    a('페르피냥에서 다녀오기', 'Base in Perpignan', 'Perpignan', '거점에서 다녀오기|Day trip from a base', '페르피냥에 묵고 지역 열차로 약 25분 걸려 다녀옵니다.|Stay in Perpignan and take the regional train, about 25 minutes.'),
  ],
  sete: [
    a('운하 주변 시내', 'Canal-side centre', 'Centre-ville', '처음 가는 여행에 추천|Best for a first visit', '운하를 따라 식당과 시장이 모여 있고 기차역도 걸어서 갑니다.|Restaurants and the market along the canals, with the station on foot.'),
    a('몽펠리에에서 다녀오기', 'Base in Montpellier', 'Montpellier', '거점에서 다녀오기|Day trip from a base', '몽펠리에에 묵고 기차로 약 20분 걸려 다녀옵니다.|Stay in Montpellier and take the train, about 20 minutes.'),
  ],
  'aigues-mortes': [
    a('성벽 안에서 묵기', 'Inside the walls', 'Aigues-Mortes', '마을에서 묵기|Stay in the village', '성벽 안 작은 호텔에 묵으면 저녁의 조용한 마을을 볼 수 있습니다.|Small hotels inside the walls give you the quiet town in the evening.'),
    a('님이나 몽펠리에에서 다녀오기', 'Base in Nîmes or Montpellier', 'Nîmes · Montpellier', '거점에서 다녀오기|Day trip from a base', '님에서 지역 열차로 약 45분, 몽펠리에에서 버스로 다녀옵니다.|About 45 minutes by regional train from Nîmes, or by bus from Montpellier.'),
  ],
  nimes: [
    a('구시가(에퀴송)', 'Old town (Écusson)', 'L\'Écusson', '처음 가는 여행에 추천|Best for a first visit', '원형경기장과 메종 카레 사이의 구시가로 볼거리와 식당이 걸어서 닿습니다.|The old town between the arena and the Maison Carrée, with sights and restaurants on foot.'),
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
  york: [
    a('시내 중심', 'City Centre', 'York city centre', '처음 가는 여행에 추천|Best for a first visit', '요크 민스터와 섐블스를 걸어서 다닙니다. 성수기에 매우 붐비고 좋은 숙소가 먼저 찹니다.|York Minster and the Shambles on foot; very busy in peak season, and the good hotels sell out first.'),
    a('미클게이트', 'Micklegate', 'Micklegate, York', '펍과 식당|Pubs and food', '강 가까이에 카페와 식당, 펍이 모여 있습니다. 밤에는 시끄러울 수 있습니다.|Cafés, restaurants and pubs near the river; can be noisy at night.'),
  ],
  cambridge: [
    a('시내 중심', 'City Centre', 'Cambridge city centre', '처음 가는 여행에 추천|Best for a first visit', '대학 칼리지와 마켓 광장, 강변(백스)을 걸어서 다니고 숙소 가격대가 다양합니다.|The colleges, Market Square and the Backs on foot, with hotels at every price.'),
    a('롬지·밀 로드', 'Romsey & Mill Road', 'Mill Road, Cambridge', '식당과 개성 있는 가게|Food and independent shops', '다양한 식당과 독립 상점, 펍이 늘어선 동네입니다. 중심가에서 조금 떨어져 버스를 타기도 합니다.|A street of varied restaurants, independent shops and pubs; a little out of the centre, so you may take the bus.'),
  ],
  cardiff: [
    a('시내 중심', 'City Centre', 'Cardiff Castle', '처음 가는 여행에 추천|Best for a first visit', '카디프 성과 국립 박물관, 중앙역이 가깝고 호텔이 가장 많습니다. 역 주변은 밤에 시끄럽고 주차가 비쌉니다.|Cardiff Castle, the National Museum and Central station nearby, with the most hotels; the station area is loud at night and parking is costly.'),
    a('카디프 베이', 'Cardiff Bay', 'Cardiff Bay', '바닷가 식당과 공연장|Waterfront dining and venues', '옛 부두를 새로 꾸민 바닷가 지구로 식당과 밀레니엄 센터가 있습니다. 시내까지 택시로 10분쯤입니다.|The redeveloped docks with restaurants and the Millennium Centre; about ten minutes by taxi to the centre.'),
    a('리버사이드', 'Riverside', 'Riverside, Cardiff', '조용하고 비교적 저렴|Quieter and cheaper', '폰트카나 공원 옆으로 카페가 있고 숙소가 비교적 저렴합니다. 중심가까지 걷거나 택시를 탑니다.|Next to Pontcanna Fields with cafés and cheaper stays; walk or take a taxi to the centre.'),
  ],
  inverness: [
    a('시내 중심', 'City Centre', 'Inverness city centre', '차 없이 지내기 좋음|Best without a car', '성과 박물관, 식당을 걸어서 다니고 숙소가 가장 많습니다. 가장 비싸고 저렴한 곳이 드뭅니다.|The castle, museums and restaurants on foot, with the most places to stay; the priciest area with few bargains.'),
  ],
  'isle-of-skye': [
    a('포트리', 'Portree', 'Portree', '처음 가는 여행에 추천|Best for a first visit', '섬에서 가장 큰 마을이라 숙소와 식당이 가장 많고 버스와 투어가 출발합니다. 마을 자체의 볼거리는 적습니다.|The island’s largest town, with the most rooms and restaurants, and buses and tours leave from here; few sights of its own.'),
    a('브로드퍼드', 'Broadford', 'Broadford, Skye', '스카이 다리 근처|Near the Skye Bridge', '두 번째로 큰 마을로 섬에서 가장 큰 슈퍼마켓과 식당이 있고 버스가 다닙니다.|The second-largest village, with the island’s biggest supermarket, places to eat and buses.'),
  ],
  sintra: [
    a('역사 지구', 'Historic town centre', 'Sintra centro histórico', '차 없이 지내기 좋음|Best without a car', '궁전과 정원까지 걸어가거나 버스를 타기 좋고 기념품점과 과자 가게가 모여 있습니다. 여름에는 숙소가 빨리 찹니다.|Walk or bus to the palaces and gardens, with shops and pastry places around; rooms fill fast in summer.'),
  ],
  lagos: [
    a('구시가·마리나', 'Old Town & Marina', 'Lagos Old Town', '처음 가는 여행에 추천|Best for a first visit', '성벽 안 구시가와 항구라 식당과 밤 문화, 보트 투어 출발지가 가깝고 기차역도 걸어갑니다. 숙소가 단순하고 주차가 어려우며 해변까지 15~20분 걸어야 합니다.|The walled old town and harbour, close to restaurants, nightlife, boat trips and the station; simple rooms, little parking, and a 15–20-minute walk to the beaches.'),
    a('메이아 프라이아', 'Meia Praia', 'Meia Praia, Lagos', '가족 여행·긴 모래 해변|Families, long sandy beach', '6km 가까이 되는 평평한 해변에 리조트와 수상 스포츠가 있습니다. 구시가와 떨어진 곳이 많아 택시나 버스를 탑니다.|Nearly 6 km of flat sand with resorts and water sports; many places are far from the old town, so take a taxi or bus.'),
    a('포르투 드 모스', 'Praia de Porto de Mós', 'Praia de Porto de Mós', '절벽 해변과 노을|Cliffs and sunsets', '절벽으로 둘러싸인 넓은 해변에 중고급 리조트가 있습니다. 구시가까지 언덕길로 30분이라 택시를 타게 됩니다.|A wide cliff-backed beach with mid- to upper-range resorts; a hilly half-hour walk to the old town, so expect taxis.'),
  ],
  toledo: [
    a('구시가 (카스코 이스토리코)', 'Old Town (Casco Histórico)', 'Plaza de Zocodover, Toledo', '하룻밤 묵을 때 추천|Best for an overnight stay', '대성당과 알카사르, 유대인 지구, 소코도베르 광장을 걸어서 다닙니다. 당일치기 손님이 떠난 저녁이 좋지만 숙소 수요가 많습니다.|The cathedral, the Alcázar, the Jewish quarter and Plaza de Zocodover on foot; lovely in the evening after the day-trippers leave, but rooms are in demand.'),
  ],
  braga: [
    a('역사 지구', 'Historic centre', 'Praça da República, Braga', '처음 가는 여행에 추천|Best for a first visit', '걷기 좋은 도시라 대성당과 박물관, 상점과 식당을 대부분 걸어서 다닙니다.|A walkable city: the cathedral, museums, shops and restaurants are mostly on foot.'),
  ],
  interlaken: [
    a('인터라켄 서역 주변 (시내)', 'Interlaken West (town centre)', 'Interlaken West', '식당·상점이 많은 시내|Town centre, restaurants and shops', '회에베크 산책로 주변에 호텔과 식당, 액티비티 업체가 모여 있습니다. 가장 붐비고, 그린델발트·라우터브루넨행 기차는 동역에서 갈아타야 합니다.|Hotels, restaurants and activity operators around the Höheweg; the busiest part, and trains to Grindelwald and Lauterbrunnen leave from Ost.'),
    a('인터라켄 동역 주변', 'Interlaken Ost', 'Interlaken Ost', '융프라우 기차 여행에 편리|Best for Jungfrau trains', '융프라우요흐·그린델발트·라우터브루넨행 산악 열차가 출발하고 브리엔츠 호숫가가 조용합니다. 걸어갈 수 있는 식당은 적습니다.|Mountain trains to the Jungfraujoch, Grindelwald and Lauterbrunnen leave here, by the quiet Lake Brienz shore; fewer restaurants within walking distance.'),
  ],
  zermatt: [
    a('체르마트 마을 중심', 'Village centre (Bahnhofstrasse)', 'Bahnhofstrasse, Zermatt', '처음 가는 여행에 추천|Best for a first visit', '역과 식당, 상점, 리프트가 걸어서 가까운 차 없는 마을입니다. 가장 비싸고 거리 쪽 방은 시끄러울 수 있습니다.|The car-free village with the station, restaurants, shops and lifts on foot; the priciest area, and street-side rooms can be noisy.'),
    a('태슈', 'Täsch', 'Täsch', '숙박비 절약·차를 두는 곳|Cheaper, where you leave the car', '차로 갈 수 있는 마지막 마을로 숙박비가 훨씬 쌉니다. 체르마트까지 매번 셔틀 열차(약 11분)를 타야 합니다.|The last village you can drive to, with much lower prices; take the shuttle train (about 11 minutes) into Zermatt each time.'),
  ],
  rovaniemi: [
    a('시내 중심', 'City Centre', 'Rovaniemi city centre', '처음 가는 여행에 추천|Best for a first visit', '식당과 바, 볼거리를 걸어서 다니고 투어 픽업이 편하며 숙소가 비교적 저렴합니다. 도시 불빛 때문에 오로라는 잘 안 보입니다.|Restaurants, bars and sights on foot, easy tour pick-ups and better prices; city lights make auroras harder to see.'),
    a('산타클로스 마을', 'Santa Claus Village', 'Santa Claus Village, Rovaniemi', '아이와 함께하는 여행|Families with children', '산타 마을 안이라 크리스마스 분위기와 체험을 바로 즐깁니다. 상업적이고 식당이 적으며 시내와 떨어져 있습니다.|Right in the Christmas village for the festive activities; commercial, few restaurants and away from town.'),
    a('오우나스바라', 'Ounasvaara', 'Ounasvaara, Rovaniemi', '자연·오로라|Nature and auroras', '시내에서 3km쯤 떨어진 언덕으로 빛 공해가 적고 스키·하이킹 길이 있습니다. 차가 없으면 외지고 식당이 적습니다.|A hill about 3 km from the centre with less light pollution and ski and hiking trails; secluded without a car and few restaurants.'),
  ],
  chamonix: [
    a('샤모니 시내', 'Town centre', 'Chamonix centre', '처음 가는 여행에 추천|Best for a first visit', '식당과 바, 상점이 모여 있고 리프트와 투어가 가깝습니다. 밤에 거리 소음이 있고 주차가 어렵고 비쌉니다.|Restaurants, bars and shops close to the lifts and tours; street noise at night, and parking is hard and expensive.'),
    a('레 우슈', 'Les Houches', 'Les Houches', '가족 여행·가성비|Families, better value', '자체 스키장이 있는 조용한 마을로 숙박비가 낮고 무료 주차가 많습니다. 주요 명소까지 이동이 길고 밤에는 조용합니다.|A calm village with its own ski area, lower prices and free parking; longer trips to the main sights, and quiet nights.'),
  ],
  meteora: [
    a('칼람바카', 'Kalambaka', 'Kalambaka', '기차역·숙소와 식당이 많음|Station, more hotels and food', '더 큰 마을이라 숙소와 식당이 많고 기차역이 가깝습니다. 수도원과는 조금 멀고 바위 전망이 일부만 보입니다.|The larger town, with more hotels and restaurants near the station; a bit further from the monasteries, with only partial views of the rocks.'),
    a('카스트라키', 'Kastraki', 'Kastraki', '바위 바로 아래 옛 마을|Old village below the rocks', '수도원과 바위에 가장 가까운 조용한 마을이라 일출 전망이 좋습니다. 숙소가 적고 역에서 차로 5~10분입니다.|The quiet village closest to the rocks and monasteries, with better sunrise views; fewer hotels and 5–10 minutes’ drive from the station.'),
  ],
  naxos: [
    a('낙소스 타운 (호라)', 'Naxos Town (Chora)', 'Naxos Chora', '차 없이 지내기 좋음|Best without a car', '항구와 식당, 시장이 모여 있고 버스가 출발합니다. 6~9월에는 시끄럽습니다.|The port, tavernas and markets, and the bus hub; noisy from June to September.'),
    a('아기오스 게오르기오스 해변', 'Agios Georgios beach', 'Agios Georgios beach, Naxos', '해변과 시내를 함께|Beach next to town', '호라 바로 옆의 긴 모래 해변이라 시내를 걸어서 오갑니다.|A long sandy beach right beside Chora, walking distance to town.'),
    a('아기오스 프로코피오스·아기아 안나', 'Agios Prokopios & Agia Anna', 'Agios Prokopios, Naxos', '가족 여행·가성비|Families and value', '해변 숙소가 비교적 저렴하고 성수기에는 호라행 버스가 자주 다닙니다. 비수기에는 버스가 줄어듭니다.|Cheaper beach stays with frequent buses to Chora in season; fewer buses off-season.'),
  ],
  budva: [
    a('구시가', 'Old Town', 'Stari Grad, Budva', '처음 가는 여행에 추천|Best for a first visit', '성벽과 요새, 교회가 있는 옛 시가지로 부티크 호텔과 호스텔이 있습니다.|The walled old town with the citadel and churches, with boutique hotels and hostels.'),
    a('해변 산책로', 'Budva Promenade', 'Slovenska plaža, Budva', '밤 문화와 해변|Nightlife and beaches', '바다 쪽 산책로에 바와 식당, 마리나와 해변이 모여 있습니다. 밤늦게까지 붐빕니다.|Seafront bars, restaurants, the marina and beaches; busy late into the night.'),
    a('베치치', 'Bečići', 'Bečići', '조용한 해변·가족 여행|Quieter beach, families', '시내 바로 밖의 해변 동네로 비교적 한적합니다.|A beach area just outside town, calmer than the centre.'),
  ],
  zakynthos: [
    a('칠리비', 'Tsilivi', 'Tsilivi', '가족·커플 모두 무난|All-rounder for families and couples', '얕고 잔잔한 모래 해변에 식당과 상점이 있습니다. 섬 곳곳을 보려면 렌터카가 필요합니다.|A shallow, calm sandy beach with restaurants and shops; hire a car to explore the island.'),
    a('라가나스', 'Laganas', 'Laganas', '밤 문화|Nightlife', '섬에서 가장 긴 해변과 클럽 거리가 있습니다. 밤에 시끄러워 아이 동반 가족에게는 맞지 않습니다.|The island’s longest beach and the party strip; loud at night, not for families with small children.'),
    a('바실리코스', 'Vasilikos', 'Vasilikos, Zakynthos', '가장 아름다운 해변|The prettiest beaches', '손대지 않은 자연과 아름다운 해변이 있습니다. 대중교통이 거의 없어 렌터카가 필수이고 리조트가 비싼 편입니다.|Unspoilt nature and beautiful beaches; almost no public transport, so a car is essential, and resorts cost more.'),
    a('자킨토스 타운', 'Zakynthos Town', 'Zakynthos Town', '식당·버스 거점|Food and the bus hub', '섬의 중심 도시로 식당과 박물관, 버스 터미널이 있습니다. 시내 해변은 수영에 좋지 않습니다.|The capital, with tavernas, museums and the bus station; the town beach isn’t good for swimming.'),
  ],
  gozo: [
    a('빅토리아 (라바트)', 'Victoria (Rabat)', 'Victoria, Gozo', '차 없이 지내기 좋음|Best without a car', '섬 한가운데라 버스가 모이고 식당과 상점이 가장 많습니다. 바다가 보이지 않고 해변이 없습니다.|The centre of the island where the buses meet, with the most restaurants and shops; no sea views or beach.'),
    a('마르살포른', 'Marsalforn', 'Marsalforn', '바닷가 휴양|Seaside resort', '잔잔한 만과 해변 산책로, 식당이 있습니다. 해안 대부분이 바위이고 여름에는 붐비고 시끄럽습니다.|A sheltered bay with a promenade and places to eat; mostly rocky shore, busy and noisy in summer.'),
    a('슐렌디', 'Xlendi', 'Xlendi', '절벽 만·수영과 다이빙|Cliff bay for swimming and diving', '절벽 사이의 만이라 수영과 스노클링, 노을이 좋습니다. 상점이 적고 해변은 바위입니다.|A bay between cliffs for swimming, snorkelling and sunsets; few shops, and the shore is rocky.'),
  ],
  paphos: [
    a('카토 파포스 (항구 주변)', 'Kato Paphos (harbour)', 'Kato Paphos', '차 없이 지내기 좋음|Best without a car', '식당과 항구, 해변, 고고학 공원(유네스코)을 걸어서 다닙니다. 여름에는 붐비고 활기찹니다.|Restaurants, the harbour, beaches and the UNESCO archaeological park on foot; busy and lively in summer.'),
  ],
  'cesky-krumlov': [
    a('구시가 (성 쪽·광장 쪽)', 'Old Town (castle side & square side)', 'Český Krumlov historic centre', '하룻밤 묵을 때 추천|Best for an overnight stay', '성과 성 비투스 성당, 광장을 걸어서 다니고 강 건너 성 전망이 좋습니다. 고급 게스트하우스가 많아 저렴한 곳이 드물고 차로 들어가기 어렵습니다.|The castle, St Vitus Church and the square on foot, with river views of the castle; mostly upmarket guesthouses with few bargains, and hard to reach by car.'),
  ],
  biarritz: [
    a('그랑드 플라주', 'Grande Plage', 'Grande Plage, Biarritz', '처음 가는 여행에 추천|Best for a first visit', '중심 해변과 카지노, 상점과 식당이 가깝습니다. 여름에는 매우 붐비고 시끄럽습니다.|Next to the main beach, the casino, shops and restaurants; very crowded and noisy in summer.'),
    a('레알·포르 비외', 'Les Halles & Port Vieux', 'Les Halles, Biarritz', '시장과 저녁 분위기|Market and evenings out', '시장과 옛 어항, 작은 해변이 있는 중심가로 바가 많습니다. 밤에는 활기찹니다.|The market hall, the old fishing port and a small beach, with plenty of bars; lively at night.'),
    a('코트 데 바스크·비비 보리바주', 'Côte des Basques & Bibi-Beaurivage', 'Côte des Basques, Biarritz', '서핑·조용한 동네|Surfing, quieter streets', '서핑 해변 위의 조용한 주거지로 카페와 서핑 학교가 있습니다. 언덕이라 시내에서 돌아올 때 오르막입니다.|Quiet streets above the surf beach with cafés and surf schools; on a hill, so it’s uphill back from town.'),
  ],
  cannes: [
    a('라 크루아제트', 'La Croisette', 'La Croisette, Cannes', '해변·밤 문화·고급 호텔|Beaches, nightlife, luxury', '해변과 영화제 궁전, 고급 호텔과 상점이 늘어선 해안 대로입니다. 비싸고 붐비며 해변은 대부분 유료입니다.|The seafront boulevard of beaches, the Palais des Festivals, luxury hotels and shops; expensive, crowded, and most beaches charge for loungers.'),
    a('르 쉬케 (구시가)', 'Le Suquet (Old Town)', 'Le Suquet, Cannes', '옛 골목과 전망|Old lanes and views', '언덕 위 옛 동네로 구항구 전망이 좋고 비교적 저렴합니다. 길이 가파르고 호텔이 적으며 해변과 조금 멉니다.|The hilltop old quarter with views over the Old Port and lower prices; steep lanes, few hotels and further from the beaches.'),
    a('시내 중심', 'Centre-Ville', 'Cannes centre', '기차역·쇼핑 편리|Station and shopping', '기차역과 상점, 시장이 가깝습니다. 번잡하고 바다 앞 호텔은 없습니다.|Near the station, shops and market; busy, with no beachfront hotels.'),
  ],
  rouen: [
    a('구시가 (대성당 주변)', 'Old town (around the cathedral)', 'Cathédrale de Rouen', '처음 가는 여행에 추천|Best for a first visit', '대성당과 대시계, 구시장 광장이 걸어서 가까운 보행자 중심 구역입니다. 차로 들어가기와 주차가 어렵고 시끄러울 수 있습니다.|A largely pedestrian area with the cathedral, the Gros-Horloge and Place du Vieux-Marché on foot; hard to drive and park, and can be noisy.'),
  ],
  reims: [
    a('대성당 주변 (시내 중심)', 'Centre-Ville (near the cathedral)', 'Cathédrale Notre-Dame de Reims', '처음 가는 여행에 추천|Best for a first visit', '대성당과 상점, 식당, 기차역을 걸어서 다닙니다. 가장 붐비는 곳입니다.|The cathedral, shops, restaurants and the station on foot; the busiest area.'),
    a('샴페인 시골 마을', 'Champagne countryside', 'Montagne de Reims', '포도밭과 샴페인 하우스|Vineyards and Champagne houses', '포도밭 전망과 작은 양조장을 즐기며 조용히 지냅니다. 차가 필요하고 마을 식당은 일찍 닫습니다.|Vineyard views and small producers in calm villages; you need a car, and village restaurants close early.'),
  ],
  ajaccio: [
    a('시내 중심·구시가', 'Centre & old town', 'Place Foch, Ajaccio', '처음 가는 여행에 추천|Best for a first visit', '포슈 광장과 항구, 옛 골목, 박물관과 식당을 걸어서 다닙니다. 여름(특히 크루즈 입항일)에 붐비고 주차가 어렵습니다.|Place Foch, the port, the old lanes, museums and restaurants on foot; crowded in summer (especially cruise days), and parking is hard.'),
    a('포르티치오', 'Porticcio', 'Porticcio', '모래 해변·조용한 휴양|Sandy beach, quieter', '만 건너편의 넓은 모래 해변 마을로 주차가 쉽고 아작시오행 배가 다닙니다. 차로 45분쯤 걸리고 옛 분위기는 없습니다.|A broad sandy beach across the bay with easy parking and a boat to Ajaccio; about 45 minutes by road, and little old-town character.'),
  ],
  bruges: [
    a('구시가 중심 (마르크트 주변)', 'City centre (around the Markt)', 'Markt, Bruges', '처음 가는 여행에 추천|Best for a first visit', '작은 도시라 마르크트와 부르크 광장, 운하와 명소를 모두 걸어서 다닙니다. 관광객이 가장 많습니다.|A small city: the Markt, the Burg, the canals and the sights are all on foot; the most crowded area.'),
    a('신트안나 지구', 'Sint-Anna quarter', 'Sint-Anna, Bruges', '조용한 주거지|Quiet and residential', '운하 건너편의 조용한 옛 동네로 마르크트 광장까지 걸어서 10분쯤입니다.|A calm old quarter across the canal, about ten minutes’ walk from the Markt.'),
  ],
  salamanca: [
    a('마요르 광장·구시가', 'Plaza Mayor & Old Town', 'Plaza Mayor, Salamanca', '처음 가는 여행에 추천|Best for a first visit', '대성당과 대학, 로마 다리가 걸어서 가깝고 타파스 바가 많습니다. 시끄럽고 비싸며 주차가 어렵습니다.|The cathedrals, the university and the Roman bridge on foot, with plenty of tapas bars; noisy, pricier and short on parking.'),
    a('반다이크 거리', 'Van Dyck area', 'Calle Van Dyck, Salamanca', '현지 타파스 거리|Local tapas street', '구시가 북쪽의 주거지로 저렴한 타파스 바가 모여 있습니다. 마요르 광장까지 걸어서 15~20분입니다.|A residential area north of the centre full of cheap tapas bars; 15–20 minutes’ walk to the Plaza Mayor.'),
  ],
  zaragoza: [
    a('구시가 (엘 투보 주변)', 'Old Town (around El Tubo)', 'El Tubo, Zaragoza', '처음 가는 여행에 추천|Best for a first visit', '필라르 성당과 대성당, 고야 미술관이 가깝고 엘 투보 골목에 전통 바와 식당이 모여 있습니다. 기차역(델리시아스)은 3km쯤 떨어져 있습니다.|Near the Pilar basilica, the cathedral and the Goya Museum, with traditional bars in the El Tubo lanes; Delicias station is about 3 km away.'),
  ],
  poznan: [
    a('구시가 (스타리 리네크)', 'Old Town (Stary Rynek)', 'Stary Rynek, Poznań', '처음 가는 여행에 추천|Best for a first visit', '구시장 광장과 시청(정오의 염소 인형), 왕궁을 걸어서 다니고 식당과 바가 모여 있습니다.|The Old Market Square, the town hall with its noon goats and the Royal Castle on foot, with restaurants and bars around.'),
  ],
  'cluj-napoca': [
    a('구시가 (중심가)', 'Old Town (Centru)', 'Piața Unirii, Cluj-Napoca', '처음 가는 여행에 추천|Best for a first visit', '통일 광장과 성 미하일 교회, 중앙 공원이 가깝고 숙소와 바가 가장 많습니다. 가장 비싼 곳입니다.|Near Unirii Square, St Michael’s Church and Central Park, with the most rooms and bars; the priciest area.'),
  ],
  kaunas: [
    a('구시가', 'Old Town (Senamiestis)', 'Kaunas Old Town', '옛 거리와 저녁 산책|Old streets and evening walks', '시청 광장과 성, 식당과 카페를 걸어서 다닙니다. 비싼 편이고 광장 주변은 시끄러우며 주차가 어렵습니다.|Town Hall Square, the castle, restaurants and cafés on foot; pricier, noisy around the squares, and hard to park.'),
    a('신시가 (라이스베스 거리)', 'New Town (Laisvės alėja)', 'Laisvės alėja, Kaunas', '현대식 호텔·교통 편리|Modern hotels, good transport', '보행자 대로를 따라 상점과 극장, 모더니즘 건물이 있고 대중교통이 좋습니다. 옛 분위기는 덜합니다.|Shops, theatres and modernist buildings along the pedestrian boulevard, with good transport; less old-town charm.'),
  ],
  limassol: [
    a('구시가', 'Old Town', 'Old Town, Limassol', '식당·밤 문화와 역사 지구|Food, nightlife and history', '리마솔 성과 대모스크 근처로 부티크 호텔과 식당, 바가 많고 해변까지 걸어갑니다.|Near the castle and the Great Mosque, with boutique hotels, restaurants and bars, a short walk to the beach.'),
  ],
  'la-rochelle': [
    a('구항구 (비외 포르)', 'Vieux Port', 'Vieux Port, La Rochelle', '처음 가는 여행에 추천|Best for a first visit', '옛 탑과 식당, 바, 상점이 모인 중심가입니다. 저렴한 곳이 없고 7월에는 부두 쪽 값이 크게 오릅니다.|The centre by the old towers, with restaurants, bars and shops; no bargains, and quayside prices jump in July.'),
  ],
  batumi: [
    a('구시가·해변 대로', 'Old Town & Seaside Boulevard', 'Batumi Boulevard', '처음 가는 여행에 추천|Best for a first visit', '바다와 식당, 피아차 광장 등 명소를 걸어서 다닙니다. 여름 성수기(6~9월)에는 해변 쪽이 시끄럽고 값이 오릅니다.|The sea, restaurants and sights such as Piazza on foot; the seafront is noisy and prices rise in high summer (June–September).'),
  ],
  giverny: [
    a('지베르니 마을', 'Giverny village', 'Giverny', '하룻밤 묵을 때|For an overnight stay', '모네의 집과 인상주의 미술관을 걸어서 갑니다. 숙소가 적고 비쌉니다. 파리에서 당일치기로도 충분합니다(생라자르역→베르농, 1시간 이내).|Monet’s house and the Impressionism museum on foot; few rooms and pricey. A day trip from Paris also works (Saint-Lazare to Vernon, under an hour).'),
    a('베르농', 'Vernon', 'Vernon, Eure', '기차역 앞·가성비|By the station, better value', '기차역과 센강이 가까워 거점으로 좋고 숙소가 비교적 저렴합니다. 지베르니까지 7km라 셔틀버스(계절 운행)나 자전거를 탑니다.|Near the station and the Seine, a handy, cheaper base; Giverny is 7 km away by seasonal shuttle or bike.'),
  ],
  pompeii: [
    a('나폴리에서 다녀오기', 'Base in Naples', 'Napoli Garibaldi', '숙소가 가장 많고 저렴|Most rooms, lowest prices', '치르쿰베수비아나 열차로 35분쯤이고 폼페이 유물이 있는 국립고고학박물관도 함께 봅니다. 시끄럽고 차가 많으며 소지품을 조심해야 합니다.|About 35 minutes on the Circumvesuviana, and you can add the archaeological museum holding Pompeii’s finds; noisy and busy, so watch your belongings.'),
    a('소렌토에서 다녀오기', 'Base in Sorrento', 'Sorrento', '바닷가 휴양과 함께|With a seaside stay', '같은 열차의 종점이라 30분쯤이고 카프리·아말피 배편도 좋습니다. 숙박비가 더 비쌉니다.|The end of the same line, about 30 minutes away, with good ferries to Capri and Amalfi; rooms cost more.'),
  ],
  'mont-saint-michel': [
    a('섬 안', 'On the island', 'Mont-Saint-Michel', '관광객이 떠난 저녁과 아침|Evenings after the crowds', '당일 관광객이 떠난 뒤의 골목과 일출·일몰을 볼 수 있습니다. 숙소가 적고 비싸며 주차장에서 2km 떨어져 있고 계단이 많습니다.|The lanes after the day-trippers leave, plus sunrise and sunset; few, pricey rooms, 2 km from the car park, with steep steps.'),
    a('라 카제른 (주차장 옆 호텔 구역)', 'La Caserne (hotel area by the car parks)', 'La Caserne, Le Mont-Saint-Michel', '가성비·셔틀버스|Value and the shuttle', '섬보다 2~3배 저렴하고 상점과 식당이 있으며 무료 셔틀이 섬까지 갑니다. 분위기는 덜하고 빨리 찹니다.|Two to three times cheaper than the island, with shops, restaurants and a free shuttle across; less charm, and books up early.'),
  ],
  delphi: [
    a('델포이 마을', 'Delphi village', 'Delphi village', '차 없이 지내기 좋음|Best without a car', '식당과 버스 정류장, 유적지(15분)를 걸어서 갑니다. 아테네에서 버스로 3시간쯤이라 당일치기는 긴 하루가 됩니다.|Tavernas, the bus stop and the site (15 minutes) on foot; Athens is about three hours by bus, so a day trip makes a long day.'),
    a('아라호바', 'Arachova', 'Arachova', '산마을 풍경·식당|Mountain views and food', '계곡 전망과 식당이 좋은 산마을로 델포이까지 차로 12분쯤입니다. 차가 있어야 합니다.|A mountain village with valley views and good places to eat, about 12 minutes’ drive from Delphi; you need a car.'),
  ],
  hallstatt: [
    a('할슈타트 마을', 'Hallstatt village', 'Hallstatt', '당일치기 손님이 떠난 저녁|Evenings after the day-trippers', '호숫가 마을의 저녁과 아침을 한적하게 봅니다. 숙소가 적고 호수 전망 방은 더 비쌉니다.|The lakeside village is calm in the evening and morning; few rooms, and lake views cost extra.'),
  ],
  haarlem: [
    a('하를럼 시내 중심', 'Haarlem centre', 'Grote Markt, Haarlem', '하룻밤 묵을 때|For an overnight stay', '당일 관광객이 떠난 저녁이 한적하고 식당과 바가 많으며 기차역까지 걸어갑니다. 여름과 크리스마스 무렵에는 일찍 예약해야 합니다.|Calm in the evening after the day-trippers leave, with plenty of restaurants and bars and the station on foot; book early in summer and before Christmas.'),
    a('암스테르담에서 다녀오기', 'Day trip from Amsterdam', 'Amsterdam Centraal', '당일치기로 충분|Easy day trip', '직행 기차로 15~20분이라 몇 시간 둘러보기에 좋습니다.|Direct trains take 15–20 minutes, fine for a few hours’ visit.'),
  ],
  delft: [
    a('로테르담·헤이그에서 다녀오기', 'Day trip from Rotterdam or The Hague', 'Rotterdam Centraal', '가까워서 당일치기로 편리|Close enough for a day trip', '로테르담에서 기차로 11분쯤이라 두 도시와 묶어 다녀오기 좋습니다.|About 11 minutes by train from Rotterdam, easy to combine with either city.'),
  ],
  giethoorn: [
    a('기트호른 마을', 'Giethoorn village', 'Giethoorn', '관광객이 떠난 저녁|Evenings after the crowds', 'B&B와 게스트하우스가 있고, 낮에는 붐비지만 오후 5시 이후에는 마을이 한적합니다.|B&Bs and guesthouses; busy by day, but the village empties after about 5 pm.'),
    a('암스테르담에서 다녀오기', 'Day trip from Amsterdam', 'Amsterdam Centraal', '당일치기 가능|Doable as a day trip', '기차로 스테인베이크까지 간 뒤 버스로 갈아타며 편도 1시간 반~2시간 반 걸립니다. 투어도 많습니다.|Train to Steenwijk then a bus, 1½–2½ hours each way; plenty of tours too.'),
  ],
  potsdam: [
    a('베를린에서 다녀오기', 'Day trip from Berlin', 'Berlin Hauptbahnhof', '당일치기로 많이 감|The usual day trip', '베를린 중앙역에서 RE1 열차로 25분쯤이라 상수시 궁전 위주라면 하루로 충분합니다.|About 25 minutes on the RE1 from Berlin Hauptbahnhof; a day is enough if Sanssouci is the focus.'),
    a('포츠담 구시가', 'Potsdam old town', 'Holländisches Viertel, Potsdam', '궁전과 정원을 여유 있게|More time for palaces and parks', '네덜란드 지구 주변에 카페와 게스트하우스가 있어 하루 이틀 묵으며 여러 궁전과 공원을 천천히 봅니다.|Cafés and guesthouses around the Dutch Quarter, for a night or two to see more palaces and parks.'),
  ],
  rothenburg: [
    a('성벽 안 구시가', 'Inside the town walls', 'Marktplatz, Rothenburg ob der Tauber', '관광객이 떠난 저녁|Evenings after the crowds', '당일 관광객이 오후 늦게 떠나 저녁의 플뢴라인과 야경꾼 투어를 한적하게 즐깁니다. 하루면 주요 명소는 볼 수 있습니다.|Day visitors leave by late afternoon, so the Plönlein and the Night Watchman tour are quiet in the evening; the main sights fit in a day.'),
  ],
  fussen: [
    a('퓌센 구시가', 'Füssen old town', 'Füssen Altstadt', '기차역·식당이 있는 거점|Base with the station and restaurants', '중세 구시가에 식당이 있고 기차역이 있어 호엔슈반가우까지 78번 버스로 몇 분입니다.|A medieval old town with restaurants and the station; bus 78 reaches Hohenschwangau in minutes.'),
    a('호엔슈반가우', 'Hohenschwangau', 'Hohenschwangau', '성 바로 아래|Right below the castles', '매표소와 셔틀이 있어 이른 아침·늦은 시간 관람에 좋습니다. 숙소가 빨리 차고 저녁에는 상점과 식당이 문을 닫습니다.|The ticket centre and shuttle are here, good for early or late visits; rooms fill fast and shops and restaurants close in the evening.'),
    a('뮌헨에서 다녀오기', 'Day trip from Munich', 'München Hauptbahnhof', '숙소를 옮기기 싫을 때|If you’d rather not change hotels', '기차로 2시간 반~3시간이라 긴 하루가 됩니다. 성 관람은 시간 지정 표라 미리 예약해야 합니다.|2½–3 hours by train, so a long day; castle tickets are timed, so book ahead.'),
  ],
  segovia: [
    a('구시가', 'Old town', 'Plaza Mayor, Segovia', '하룻밤 묵을 때|For an overnight stay', '수도교와 대성당, 알카사르를 걸어서 다니고 저녁 광장 분위기가 좋습니다. 여름에는 일찍 예약해야 합니다.|The aqueduct, cathedral and Alcázar on foot, with lively evening squares; book early in summer.'),
    a('마드리드에서 다녀오기', 'Day trip from Madrid', 'Madrid Moncloa', '당일치기 가능|Doable as a day trip', '몬클로아에서 버스로 1시간 20분쯤입니다. 고속열차는 시내에서 몇 km 떨어진 역에 서서 버스나 택시를 더 타야 합니다.|About 1 hr 20 by bus from Moncloa; the high-speed train stops several kilometres out, so add a bus or taxi.'),
  ],
  ronda: [
    a('론다 시내', 'Ronda town', 'Puente Nuevo, Ronda', '관광객이 떠난 저녁과 아침|Evenings and mornings without crowds', '당일 관광객이 떠난 저녁과 이른 아침이 한적하고 저녁 식사도 즐길 수 있습니다. 중심가는 주차 공간이 적습니다.|Quiet evenings and early mornings once the day-trippers leave, plus dinner in town; parking in the centre is scarce.'),
    a('세비야·말라가에서 다녀오기', 'Day trip from Seville or Málaga', 'Sevilla Santa Justa', '당일치기로 많이 감|A popular day trip', '두 도시에서 당일치기와 투어가 흔합니다. 세비야에서 130km쯤 떨어져 있습니다.|Day trips and tours from both cities are common; about 130 km from Seville.'),
  ],
  montreux: [
    a('몽트뢰 호숫가 중심', 'Montreux lakefront centre', 'Montreux station', '호숫가 산책·산악 열차|Lakeside promenade and mountain trains', '호숫가 산책로와 기차역이 가깝고 로셰 드 네, 골든패스 열차 타기에 편합니다.|Close to the lakeside promenade and the station, handy for Rochers-de-Naye and the GoldenPass trains.'),
    a('로잔에서 다녀오기', 'Base in Lausanne', 'Lausanne gare', '제네바도 함께 다닐 때|If Geneva is also on the list', '더 큰 도시라 활기차고 제네바까지 가깝습니다. 몽트뢰까지 기차로 20~25분쯤입니다.|A livelier city, closer to Geneva; about 20–25 minutes to Montreux by train.'),
  ],
  'st-moritz': [
    a('생모리츠 도르프', 'St. Moritz Dorf', 'St. Moritz Dorf', '처음 가는 여행에 추천|Best for a first visit', '고급 호텔과 식당, 밤 문화가 모여 있고 역과 코르빌리아 케이블카가 가깝습니다. 매우 비쌉니다.|Most of the top hotels, restaurants and nightlife, near the station and the Corviglia funicular; very expensive.'),
    a('생모리츠 바트', 'St. Moritz Bad', 'St. Moritz Bad', '조용한 호숫가|Quieter by the lake', '호숫가 아래쪽 마을이라 조용합니다. 겨울에는 해가 덜 들고 밤 문화가 적으며, 도르프까지 가파른 언덕이 있습니다.|The lower lakeside village, calmer; less winter sun and nightlife, with a steep hill up to Dorf.'),
  ],
  montserrat: [
    a('바르셀로나에서 다녀오기', 'Day trip from Barcelona', 'Plaça d’Espanya, Barcelona', '당일치기로 많이 감|The usual day trip', '편도 1시간쯤이라 반나절·하루 투어나 기차와 산악 열차로 다녀옵니다. 산 위 수도원 숙소는 방이 적고 소박합니다.|About an hour each way by tour or train and rack railway; the monastery’s own rooms on the mountain are few and basic.'),
  ],
  nerja: [
    a('구시가·부리아나 해변', 'Old town & Burriana beach', 'Balcón de Europa, Nerja', '저녁이 좋은 바닷가 마을|Best in the evening', '발콘 데 에우로파와 해변 주변 숙소가 코스타델솔 서쪽보다 대체로 저렴하고 저녁 분위기가 좋습니다.|Rooms around the Balcón de Europa and the beach are usually cheaper than the western Costa del Sol, and evenings are lovely.'),
    a('말라가에서 다녀오기', 'Day trip from Málaga', 'Estación de Autobuses de Málaga', '하루 꼬박 걸림|Takes a full day', '50km쯤이라 버스로 다녀오지만 하루를 거의 다 씁니다. 여름에는 동굴 표를 미리 사세요.|About 50 km by bus, but it takes most of a day; book the caves ahead in summer.'),
  ],
  gibraltar: [
    a('라 리네아 (스페인 쪽)', 'La Línea (Spanish side)', 'La Línea de la Concepción', '숙박비 절약|Much cheaper', '국경 바로 옆 스페인 도시라 숙소가 훨씬 싸고 주차가 쉽습니다. 차는 두고 걸어서 국경을 건너세요(차로는 몇 시간 줄 설 때가 있습니다).|The Spanish town at the border, far cheaper with easy parking; leave the car and walk across (driving can mean hours of queues).'),
    a('지브롤터 안', 'In Gibraltar', 'Main Street, Gibraltar', '바위산 바로 아래|On the Rock itself', '번화가와 케이블카가 가깝습니다. 숙박비가 비쌉니다.|Close to Main Street and the cable car; expensive.'),
  ],
  cascais: [
    a('카스카이스 구시가', 'Cascais historic centre', 'Cascais centro', '해변과 식당이 걸어서|Beaches and restaurants on foot', '작은 해변 마을이라 해변과 식당을 걸어서 다니고 신트라·호카곶 여행 거점으로도 좋습니다. 당일 관광객이 떠난 저녁이 한적합니다.|A small beach town with beaches and restaurants on foot, also a base for Sintra and Cabo da Roca; quiet once the day-trippers leave.'),
    a('리스본에서 다녀오기', 'Day trip from Lisbon', 'Cais do Sodré', '당일치기 쉬움|An easy day trip', '카이스 두 소드레역에서 기차로 35~45분입니다. 에스토릴에서 내려 해안길을 2km 걸어도 좋습니다.|35–45 minutes by train from Cais do Sodré; or get off at Estoril and walk the 2 km coast path.'),
  ],
  evora: [
    a('성벽 안 구시가', 'Inside the old walls', 'Praça do Giraldo, Évora', '하룻밤 묵을 때|For an overnight stay', '로마 신전과 대성당, 광장을 걸어서 다니고 당일 관광객이 떠난 저녁이 좋습니다. 골목이 좁고 주차가 어렵습니다.|The Roman temple, cathedral and main square on foot, best in the evening; narrow lanes and little parking.'),
    a('리스본에서 다녀오기', 'Day trip from Lisbon', 'Lisboa Oriente', '하루면 주요 명소 가능|A day covers the highlights', '기차로 1시간 40분쯤이라 아침 일찍 가면 하루에 주요 명소를 봅니다.|About 1 hr 40 by train; arrive by mid-morning and the main sights fit in a day.'),
  ],
  obidos: [
    a('성벽 안·성문 바로 밖', 'Inside or just outside the walls', 'Porta da Vila, Óbidos', '관광객이 떠난 저녁|Evenings after the crowds', '저녁에 당일 관광객이 떠나면 마을이 고요해집니다. 성벽 안은 방이 적고 돌길이라 짐 끌기가 힘들며, 성문 밖 숙소가 주차가 쉽습니다.|The town falls silent once the day-trippers leave; few rooms inside the cobbled walls, and places just outside the gates have easier parking.'),
    a('리스본에서 다녀오기', 'Day trip from Lisbon', 'Lisboa Campo Grande', '2~3시간이면 충분|2–3 hours is enough', '급행버스로 1시간쯤이고 성문 앞에서 내립니다. 아침 첫 버스나 오후 4시 이후가 한산합니다.|About an hour on the express bus, which stops at the gate; the first morning bus or after 4 pm is quieter.'),
  ],
  aveiro: [
    a('운하 주변 역사 지구', 'Historic centre by the canals', 'Aveiro canals', '하룻밤 묵을 때|For an overnight stay', '카페와 몰리세이루 배 투어가 가깝고 당일 관광객이 떠난 뒤 한적합니다. 차가 있으면 주차를 확인하세요.|Cafés and moliceiro boat trips nearby, calm once the day-trippers leave; check parking if driving.'),
    a('포르투에서 다녀오기', 'Day trip from Porto', 'Porto São Bento', '느긋한 당일치기|An easy-paced day trip', '차로 50분쯤이고 기차도 다닙니다. 큰 명소가 많지 않아 하루면 충분합니다.|About 50 minutes by car, also by train; there are few big sights, so a day is enough.'),
  ],
  fatima: [
    a('성지 주변', 'Around the Sanctuary', 'Santuário de Fátima', '저녁 촛불 행렬을 볼 때|For the evening candlelight procession', '숙소 대부분이 성지 주변에 모여 있어 저녁 예배와 촛불 행렬에 참여하기 좋습니다. 순례 성수기에는 일찍 예약해야 합니다.|Most hotels cluster around the shrine, handy for the evening services and candlelit procession; book early for big pilgrimage dates.'),
  ],
  nazare: [
    a('프라이아 (해변 쪽)', 'Praia (beach side)', 'Praia da Nazaré', '해변과 실버코스트 거점|Beach and a Silver Coast base', '긴 모래 해변 쪽에 묵으며 푸니쿨라로 시티우 언덕에 오르고 알코바사·바탈랴·오비두스로 다녀옵니다.|Stay by the long sandy beach, ride the funicular up to Sítio, and take trips to Alcobaça, Batalha and Óbidos.'),
    a('리스본에서 다녀오기', 'Day trip from Lisbon', 'Lisboa Sete Rios', '차나 투어면 가능|Doable by car or tour', '차로 1시간 반, 버스로 2시간쯤이라 대중교통 당일치기는 빠듯합니다. 투어는 머무는 시간이 짧습니다.|About 1½ hours by car or 2 by bus, so tight by public transport; tours allow little time in town.'),
  ],
  guimaraes: [
    a('역사 지구', 'Historic centre', 'Largo da Oliveira, Guimarães', '하룻밤 묵을 때|For an overnight stay', '유네스코 옛 광장과 골목, 성을 걸어서 다닙니다. 연중 붐벼 좋은 숙소는 일찍 예약해야 합니다.|The UNESCO-listed squares, lanes and castle on foot; busy all year, so book the good places early.'),
  ],
  chartres: [
    a('파리에서 다녀오기', 'Day trip from Paris', 'Gare Montparnasse', '당일치기로 충분|Fine as a day trip', '몽파르나스역에서 기차로 1시간 남짓이고 하루 20편쯤 다닙니다.|A little over an hour by train from Montparnasse, about twenty trains a day.'),
    a('샤르트르 구시가', 'Chartres old town', 'Cathédrale de Chartres', '저녁 조명 쇼를 볼 때|For the evening light show', '파리보다 숙박비가 싸고 저녁에 대성당 조명 쇼를 봅니다. 구시가 일부는 가파른 돌길입니다.|Cheaper than Paris, and you can see the cathedral’s evening illuminations; some old-town streets are steep cobbles.'),
  ],
  fontainebleau: [
    a('파리에서 다녀오기', 'Day trip from Paris', 'Gare de Lyon', '당일치기로 많이 감|The usual day trip', '리옹역에서 기차로 40분쯤(퐁텐블로-아봉역)입니다. 오후에는 파리행 기차가 뜸하고, 성은 화요일에 쉽니다.|About 40 minutes by train from Gare de Lyon to Fontainebleau-Avon; fewer trains back in the afternoon, and the château closes on Tuesdays.'),
  ],
  amboise: [
    a('앙부아즈 구시가', 'Amboise town', 'Château d’Amboise', '차로 고성 여행할 때|For driving to the châteaux', '슈농소·샹보르 등 가운데 고성들과 가깝고 느긋한 분위기입니다. 관광객이 많은 편입니다.|Close to the central châteaux such as Chenonceau and Chambord, with a relaxed feel; touristy.'),
    a('투르', 'Tours', 'Gare de Tours', '기차 여행·숙소와 식당이 많음|Trains, more hotels and food', '숙소와 식당이 훨씬 많고 기차 연결이 좋으며 서쪽 고성으로 가기 편합니다. 역과 플뤼므로 광장 사이가 편합니다.|Far more hotels and restaurants, better trains and easier for the western châteaux; between the station and Place Plumereau is handy.'),
  ],
  bayeux: [
    a('바이외 구시가', 'Bayeux town', 'Cathédrale de Bayeux', '노르망디 상륙 해변 거점|Base for the D-Day beaches', '폭격을 피한 옛 시가지에 식당이 많고 상륙 해변 투어가 역에서 출발합니다. 해변을 오가는 버스는 드물어 렌터카나 투어가 필요합니다.|An old town spared by the bombing, with good restaurants and tours leaving from the station; coast buses are rare, so you need a car or tour.'),
  ],
  honfleur: [
    a('옹플뢰르 (항구 뒤쪽 골목)', 'Honfleur (a few streets back from the harbour)', 'Vieux Bassin, Honfleur', '노르망디 해안 거점|Base for the Normandy coast', '옛 항구 마을이라 묵어 볼 만하고 에트르타(차로 1시간 15분), 도빌(30분)로 다녀오기 좋습니다. 항구 바로 앞은 붐비니 몇 블록 뒤가 조용하고 저렴합니다.|A harbour town worth staying in, with Étretat (1¼ hours by car) and Deauville (30 minutes) nearby; a few streets back from the crowded harbour is quieter and cheaper.'),
  ],
  etretat: [
    a('옹플뢰르·르아브르에서 다녀오기', 'Day trip from Honfleur or Le Havre', 'Le Havre', '기차가 닿지 않는 곳|No train station', '기차역이 없어 르아브르에서 버스나 차(30분)로, 옹플뢰르에서 차로 1시간 15분쯤입니다. 절벽 길은 바람이 세고 위험한 곳이 있습니다.|No train: bus or 30 minutes by car from Le Havre, or about 1¼ hours from Honfleur; the cliff paths are windy with dangerous drops.'),
  ],
  'saint-malo': [
    a('성벽 안 (앵트라 뮈로스)', 'Intra-Muros (walled town)', 'Intra-Muros, Saint-Malo', '처음 가는 여행에 추천|Best for a first visit', '성벽 안 옛 시가지라 대성당과 해변을 걸어서 다닙니다. 가장 붐비고 성수기에는 빨리 차며 차로 들어가기 어렵습니다.|The walled old town with the cathedral and beaches on foot; the busiest area, books up fast in season, and hard to drive into.'),
    a('르 실롱 해변', 'Le Sillon seafront', 'Le Sillon, Saint-Malo', '바다 전망과 해변|Sea views and the beach', '성벽 바로 옆 긴 해변을 따라 바다 전망 호텔과 스파가 있습니다. 인기가 많아 일찍 예약해야 합니다.|Sea-view hotels and spas along the long beach next to the ramparts; popular, so book well ahead.'),
  ],
  arcachon: [
    a('보르도에서 다녀오기', 'Day trip from Bordeaux', 'Bordeaux Saint-Jean', '당일치기로 충분|Fine as a day trip', '보르도에서 50km, 기차로 45분쯤이라 필라 사구와 시내를 하루에 볼 수 있습니다. 만 전체를 보려면 더 머물러야 합니다.|About 50 km and 45 minutes by train from Bordeaux, so the Dune du Pilat and the town fit in a day; seeing the whole bay needs longer.'),
  ],
  bonifacio: [
    a('항구 (마리나)', 'Marina (lower town)', 'Port de Bonifacio', '식당과 보트 투어|Restaurants and boat trips', '요트 항구를 따라 식당과 상점이 있고 해식 동굴 보트 투어가 출발합니다. 걷기 편합니다.|Waterfront restaurants and shops along the yacht harbour, where boats leave for the sea caves; easier walking.'),
    a('오트 빌 (구시가)', 'Haute Ville (old town)', 'Haute Ville, Bonifacio', '절벽 위 옛 시가지|Clifftop old town', '아라곤 왕의 계단과 성벽, 옛 교회가 바로 옆입니다. 가파른 돌길이고 성수기 낮에는 붐빕니다.|Next to the King of Aragon Steps, the ramparts and old churches; steep cobbles, and crowded on peak-season days.'),
  ],
  'san-gimignano': [
    a('피렌체·시에나에서 다녀오기', 'Day trip from Florence or Siena', 'Firenze Santa Maria Novella', '당일치기로 많이 감|The usual day trip', '피렌체에서 60km쯤이라 차나 투어로 시에나와 묶어 다녀오는 경우가 많습니다. 투어는 마을에서 머무는 시간이 2시간 안팎으로 짧습니다.|About 60 km from Florence, often combined with Siena by car or tour; tours leave only about two hours in town.'),
  ],
  assisi: [
    a('아시시 구시가', 'Assisi old town', 'Basilica di San Francesco, Assisi', '관광객이 떠난 저녁|Evenings after the crowds', '낮의 관광객이 떠난 뒤 조용한 순례 도시를 봅니다. 로마 테르미니역에서 직행 기차가 있습니다.|See the quiet pilgrim town after the day crowds leave; direct trains run from Roma Termini.'),
    a('피렌체에서 다녀오기', 'Day trip from Florence', 'Firenze Santa Maria Novella', '시간이 없을 때|When time is short', '투어로 하루에 다녀올 수 있습니다. 기차는 갈아타야 합니다.|Day tours run from Florence; by train you need to change.'),
  ],
  orvieto: [
    a('로마에서 다녀오기', 'Day trip from Rome', 'Roma Termini', '당일치기로 충분|Fine as a day trip', '테르미니역에서 거의 매시간 기차가 있고 1시간 반쯤 걸립니다. 6~7시간이면 대성당과 지하 도시, 전망을 봅니다.|Trains almost hourly from Termini take about 1½ hours; 6–7 hours covers the cathedral, the underground and the views.'),
    a('오르비에토 구시가', 'Orvieto old town', 'Duomo di Orvieto', '관광객이 떠난 저녁|Evenings after the crowds', '당일 관광객이 떠난 저녁에 한적한 골목과 노을을 즐깁니다. 역에서 구시가까지 푸니쿨라로 올라갑니다.|Quiet lanes and sunsets once the day-trippers leave; take the funicular up from the station.'),
  ],
  alberobello: [
    a('트룰리 숙소', 'A night in a trullo', 'Rione Monti, Alberobello', '특별한 하룻밤|A one-off stay', '원뿔 지붕 집 트룰로에서 묵어 볼 수 있습니다. 낮에는 관광객이 많고 식당이 적습니다.|Sleep in one of the cone-roofed trulli; crowded by day, with fewer places to eat.'),
    a('모노폴리에서 다녀오기', 'Base in Monopoli', 'Monopoli', '식당 많은 바닷가 거점|Seaside base with more food', '현지 분위기의 항구 마을로 식당이 많고 알베로벨로까지 차로 40분쯤입니다. 차가 있으면 편합니다.|A lived-in harbour town with more restaurants, about 40 minutes’ drive to Alberobello; easiest with a car.'),
  ],
  'polignano-a-mare': [
    a('폴리냐노 구시가', 'Polignano old town', 'Lama Monachile, Polignano a Mare', '절벽 마을 풍경|The clifftop town', '바리에서 기차로 오기 쉽고 절벽 위 옛 마을에 묵습니다. 보행자 구역이라 거리 소음이 있고 해변 말고 할 거리는 적습니다.|Easy by train from Bari, staying in the clifftop old town; pedestrian streets mean some noise, and there’s little beyond the beaches.'),
    a('모노폴리', 'Monopoli', 'Monopoli', '주차 쉬운 거점|Base with easier parking', '폴리냐노에서 남쪽으로 차로 15분, 바리에서 45분쯤이라 풀리아 여행 거점으로 좋고 주차장이 많습니다.|15 minutes south by car and 45 from Bari, a good central Puglia base with plenty of parking.'),
  ],
  stresa: [
    a('스트레사 호숫가·선착장 주변', 'Stresa lakefront & ferry pier', 'Piazza Marconi, Stresa', '보로메오 섬 배편 거점|Base for the Borromean Islands', '선착장에서 이솔라 벨라 등 섬으로 배가 자주 다니고 구시가 식당까지 걸어갑니다.|Frequent boats to Isola Bella and the other islands leave from the pier, with old-town restaurants on foot.'),
  ],
  sirmione: [
    a('시르미오네 구시가', 'Sirmione old town', 'Castello Scaligero, Sirmione', '관광객이 떠난 저녁과 아침|Evenings and mornings without crowds', '낮에는 매우 붐비지만 해 질 녘부터 다음 날 오전까지 한적합니다. 반도 안에는 차량 통행 제한이 있어 밖에 주차해야 합니다.|Packed by day but quiet from sunset to mid-morning; driving is restricted on the peninsula, so park outside.'),
    a('베로나에서 다녀오기', 'Day trip from Verona', 'Verona Porta Nuova', '당일치기 가능|Doable as a day trip', '데센차노 델 가르다역까지 기차로 26분쯤이고, 역에서 마을까지 10km라 버스나 택시를 탑니다.|About 26 minutes by train to Desenzano del Garda, then 10 km by bus or taxi to the town.'),
  ],
  portofino: [
    a('산타 마르게리타 리구레', 'Santa Margherita Ligure', 'Santa Margherita Ligure', '기차역 있는 거점|Base with a train station', '가장 가까운 기차역이 있고 숙소가 다양하며 포르토피노보다 저렴합니다. 버스가 15분 간격, 배로 15분쯤입니다.|The nearest train station, more choice and cheaper than Portofino; buses every 15 minutes or a 15-minute ferry.'),
    a('포르토피노 마을', 'Portofino village', 'Portofino', '작은 항구에서 묵기|Staying in the harbour', '작은 항구 마을이라 숙소가 매우 적고 비쌉니다.|A tiny harbour village with very few, very expensive rooms.'),
  ],
  modena: [
    a('볼로냐에서 다녀오기', 'Day trip from Bologna', 'Bologna Centrale', '당일치기 쉬움|An easy day trip', '기차로 30분쯤이고 역에서 중심가까지 걸어서 10~15분입니다. 대성당과 그란데 광장은 3~4시간이면 봅니다.|About 30 minutes by train, then 10–15 minutes’ walk; the cathedral and Piazza Grande take 3–4 hours.'),
    a('모데나 역사 지구', 'Modena centro storico', 'Piazza Grande, Modena', '식당과 시장이 걸어서|Food and markets on foot', '대성당과 알비넬리 시장, 트라토리아를 걸어서 다닙니다. 차량 통행 제한(ZTL)이 있어 주차가 어렵습니다.|The cathedral, the Albinelli market and trattorias on foot; inside the ZTL, so parking is hard.'),
  ],
  parma: [
    a('파르마 역사 지구', 'Parma centro storico', 'Piazza Duomo, Parma', '음식 여행으로 묵을 때|For a food-focused stay', '대성당과 세례당, 광장과 식당을 걸어서 다닙니다.|The cathedral, the baptistery, the squares and restaurants on foot.'),
    a('볼로냐에서 다녀오기', 'Day trip from Bologna', 'Bologna Centrale', '당일치기로 충분|Fine as a day trip', '기차로 1시간쯤이라 대성당과 점심, 산책 위주라면 하루로 충분합니다.|About an hour by train; a day is enough for the Duomo, lunch and a stroll.'),
  ],
  montepulciano: [
    a('성벽 안 구시가', 'Inside the walls', 'Montepulciano centro storico', '걸어서 다니기|Walk to everything', '그란데 광장과 와인 저장고, 식당을 걸어서 다닙니다. 차가 들어갈 수 없어 성벽 밖에 주차해야 하고, 언덕이 가파르며 밤에 시끄러울 수 있습니다.|Piazza Grande, the wine cellars and restaurants on foot; cars cannot enter, so park outside the walls, and the streets are steep and can be noisy at night.'),
    a('주변 농가 숙소 (아그리투리스모)', 'Farm stays nearby', 'Montepulciano agriturismo', '조용함·발도르차 전망|Quiet, Val d’Orcia views', '조용하고 전망이 좋으며 대개 더 쌉니다. 차가 꼭 있어야 합니다.|Quiet, with views and usually lower prices; you need a car.'),
  ],
  perugia: [
    a('구시가 (첸트로 스토리코)', 'Centro storico', 'Perugia centro storico', '처음이라면|First visit', '11월 4일 광장과 코르소 반누치를 걸어서 다닙니다. 언덕과 계단이 많고 차로 들어가기 어려우며 값이 더 나갑니다. 7월 움브리아 재즈 기간에는 일찍 예약하세요.|Piazza IV Novembre and Corso Vannucci on foot; hilly with many steps, hard to reach by car and pricier. Book early for Umbria Jazz in July.'),
  ],
  tropea: [
    a('절벽 위 구시가', 'Old town on the cliff', 'Tropea centro storico', '처음·전망|First visit, views', '골목과 전망대를 걸어서 다닙니다. 해변은 계단으로 내려갑니다.|Lanes and viewpoints on foot; the beaches are down a long stairway.'),
    a('절벽 아래 해변', 'Beachfront below', 'Tropea lungomare', '해수욕|Beach days', '바다가 바로 앞입니다. 구시가로 올라가는 계단이 가파릅니다.|The sea on the doorstep; steep stairs back up to the old town.'),
  ],
  cefalu: [
    a('구시가', 'Old town', 'Cefalù centro storico', '차 없이 여행|Travelling without a car', '대성당과 식당이 가깝고 분위기가 좋습니다. 오래된 숙소가 많고 바람이 잘 안 통해 더울 수 있으니 에어컨을 확인하세요. 차량 진입 제한 구역입니다.|Close to the cathedral and restaurants, full of atmosphere; many rooms are old and stuffy, so check for air conditioning. Cars are restricted.'),
    a('신시가·해변 쪽', 'New town by the beach', 'Cefalù lungomare', '해변·주차|Beach and parking', '해변이 가깝고 주차가 쉬우며 구시가까지 10분쯤 걷습니다.|Near the beach and easier to park, about a 10-minute walk to the old town.'),
    a('팔레르모에서 다녀오기', 'Base in Palermo', 'Palermo Centrale', '도시 거점|City base', '기차로 1시간쯤이라 당일치기가 쉽습니다. 볼거리와 밤 문화는 팔레르모가 더 많습니다.|About an hour by train, an easy day trip; Palermo has more sights and nightlife.'),
  ],
  alghero: [
    a('구시가', 'Old town', 'Alghero centro storico', '걸어서 구경·식당|Sights and dining on foot', '차 없는 구역이라 걷기 좋고 항구도 가깝습니다.|Car-free and walkable, close to the marina.'),
    a('리도 산조반니', 'Lido San Giovanni', 'Lido San Giovanni, Alghero', '해변|Beach', '리도 해변과 마리아 피아 해변이 가깝고 해변 산책로가 있습니다. 구시가까지 1.5km쯤이라 걷거나 버스를 탑니다.|Near Lido and Maria Pia beaches with a seafront promenade; the old town is about 1.5 km away on foot or by bus.'),
  ],
  vicenza: [
    a('구시가', 'Centro storico', 'Vicenza centro storico', '걸어서 팔라디오 건축 보기|Palladio on foot', '작은 도시라 주요 건물과 식당을 모두 걸어서 갑니다. 차량 제한으로 조용하지만 값이 더 나갑니다.|A small city where the sights and restaurants are all walkable; quiet thanks to traffic limits but pricier.'),
    a('기차역 주변', 'Near the station', 'Vicenza stazione', '가성비·기차 이동|Value, rail trips', '더 싸고 베네치아(약 50분)·베로나·파도바 기차 여행에 편합니다. 분위기는 덜합니다.|Cheaper and handy for trains to Venice (about 50 minutes), Verona and Padua; less atmosphere.'),
  ],
  ferrara: [
    a('구시가', 'Centro storico', 'Ferrara centro storico', '대성당·에스테 성 걸어서|Cathedral and castle on foot', '대성당과 에스테 성이 가깝고 자전거로 다니기 좋습니다. 주차 되는 숙소는 적습니다.|Close to the cathedral and Castello Estense and great by bike; few hotels have parking.'),
  ],
  mantua: [
    a('구시가', 'Centro storico', 'Mantova centro storico', '처음이라면|First visit', '두칼레 궁전과 광장들을 걸어서 다니고 저녁 분위기가 좋습니다.|The Ducal Palace and squares on foot, with a lively evening scene.'),
    a('호숫가', 'By the lakes', 'Lago di Mezzo, Mantova', '조용함|Quieter', '호수 산책이 좋고 저녁이 조용합니다. 두칼레 궁전까지 10분쯤 걷습니다.|Lakeside walks and quiet evenings, about a 10-minute walk to the Ducal Palace.'),
  ],
  urbino: [
    a('성벽 안 구시가', 'Inside the walls', 'Urbino centro storico', '저녁의 조용한 분위기|Quiet evenings', '두칼레 궁전과 라파엘로의 집이 가깝습니다. 숙소가 적어 일찍 예약해야 하고, 언덕이 가팔라 짐이 많으면 힘듭니다.|Close to the Ducal Palace and Raphael’s house; rooms are few, so book early, and the hills are steep with heavy bags.'),
  ],
  olbia: [
    a('올비아 시내', 'Olbia town', 'Olbia centro', '공항·항구·가격|Airport, port, prices', '공항과 배편이 가깝고 숙소 가격대가 다양합니다. 해변은 차로 다닙니다.|Close to the airport and ferries with rooms at every price; beaches are a drive away.'),
    a('산테오도로', 'San Teodoro', 'San Teodoro, Sardinia', '해변·밤 문화|Beaches and nightlife', '남쪽으로 차로 30분쯤, 라 친타·칼라 브란딘키 해변이 가깝고 코스타 스메랄다보다 쌉니다. 차가 있어야 편합니다.|About 30 minutes south by car, near La Cinta and Cala Brandinchi and cheaper than the Costa Smeralda; best with a car.'),
  ],
  amalfi: [
    a('아말피 마을', 'Amalfi town', 'Amalfi', '해안 한가운데|On the coast itself', '포지타노보다 덜 비싸고 배·버스가 모이는 곳입니다. 폼페이 등 다른 곳으로는 멀어 불편할 수 있습니다.|Less pricey than Positano and a ferry and bus hub, but farther from places like Pompeii.'),
    a('포지타노', 'Positano', 'Positano', '풍경·특별한 여행|Views, special trips', '가장 아름답지만 가장 비싸고 붐비며 계단과 비탈이 많습니다.|The most beautiful and the most expensive and crowded, with many steps.'),
    a('소렌토에서 다녀오기', 'Base in Sorrento', 'Sorrento', '가성비·짧은 일정|Value, short trips', '더 크고 걷기 쉬운 도시로 나폴리·폼페이 기차가 있어 편합니다. 포지타노까지 1시간쯤 걸릴 수 있습니다.|A bigger, walkable town with trains to Naples and Pompeii; Positano can be an hour away.'),
  ],
  cortina: [
    a('시내 중심 (코르소 이탈리아)', 'Town centre (Corso Italia)', 'Corso Italia, Cortina d’Ampezzo', '차 없이 여행|Without a car', '카페·식당·상점이 모여 있습니다. 베네치아에서 직행버스가 옵니다. 값이 비쌉니다.|Cafés, restaurants and shops, with direct buses from Venice; expensive.'),
  ],
  stavanger: [
    a('보겐 항구·시내', 'Vågen harbour and centre', 'Vågen, Stavanger', '처음이라면|First visit', '항구를 따라 식당·바와 옛 창고 건물이 늘어서 있고 걸어서 다 다닙니다. 주말과 행사 때는 시끄러울 수 있습니다.|Restaurants, bars and old warehouses line the harbour and everything is walkable; lively at weekends and during events.'),
    a('옛 스타방에르 (감레 스타방에르)', 'Old Stavanger', 'Gamle Stavanger', '조용함|Quieter', '하얀 목조 주택과 자갈길이 있는 조용한 동네입니다. 숙소가 적습니다.|A quiet area of white wooden houses and cobbled lanes; few places to stay.'),
  ],
  trondheim: [
    a('미드트뷔엔 (시내 중심)', 'Midtbyen (centre)', 'Midtbyen, Trondheim', '처음이라면·교통|First visit, transport', '중앙역과 식당·상점이 가깝고 숙소 종류가 다양합니다. 주말에는 시끄럽고 주차가 비쌉니다.|Close to the station, restaurants and shops with every kind of hotel; noisy at weekends and parking is costly.'),
    a('바클란데트', 'Bakklandet', 'Bakklandet, Trondheim', '분위기·조용함|Character, quieter', '강 건너 알록달록한 목조 주택 동네로 시내까지 몇 분이면 걷습니다. 숙소와 주차 공간이 적습니다.|The colourful wooden-house quarter across the river, a few minutes’ walk from the centre; few rooms and little parking.'),
  ],
  alesund: [
    a('브로순데트 운하 주변 구시가', 'Old centre by Brosundet', 'Brosundet, Ålesund', '걸어서 아르누보 거리 보기|Art Nouveau streets on foot', '주요 볼거리와 악슬라 전망대 오르는 길이 걸어서 닿습니다. 여름에는 몇 달 전에 방이 찹니다.|The main sights and the path up Mt Aksla are walkable; rooms sell out months ahead in summer.'),
  ],
  flam: [
    a('플롬 마을 (항구 앞)', 'Flåm village', 'Flåm', '한적한 저녁·아침|Quiet evenings and mornings', '당일 관광객이 떠난 저녁과 이른 아침을 즐길 수 있고 플롬 철도·피오르 유람선이 바로 앞입니다. 숙소가 적어 6~8월엔 일찍 찹니다.|Enjoy the village once day-trippers leave, with the Flåm Railway and fjord boats on the doorstep; few rooms, so June–August fills early.'),
    a('아울란', 'Aurland', 'Aurland, Norway', '더 조용함·차 여행|Quieter, by car', '대형 크루즈와 관광버스가 서지 않는 조용한 마을로 플롬까지 차로 10분쯤입니다. 차가 있어야 편합니다.|A quiet village without cruise ships or tour buses, about 10 minutes’ drive from Flåm; best with a car.'),
  ],
  turku: [
    a('시내 중심·아우라강 변', 'Centre and the Aura river', 'Turku city centre', '처음이라면|First visit', '식당·카페가 모여 있고 강변 산책로를 따라 대성당과 박물관까지 걷습니다.|Cafés and restaurants close at hand, with the riverside promenade leading to the cathedral and museums.'),
  ],
  tampere: [
    a('시내 중심', 'City centre', 'Tampere keskusta', '교통·쇼핑|Transport and shopping', '기차역이 걸어서 닿고 숙소가 많습니다. 주말에 시끄럽고 값이 더 나갑니다.|The station is walkable and there are many hotels; noisy at weekends and pricier.'),
    a('핀레이손 옛 공장 지구', 'Finlayson', 'Finlayson, Tampere', '박물관·조용한 저녁|Museums, calm evenings', '옛 공장 건물에 박물관과 카페가 있고 시내가 가깝습니다. 숙소가 적습니다.|Museums and cafés in old mill buildings close to the centre; fewer places to stay.'),
  ],
  porvoo: [
    a('헬싱키에서 다녀오기', 'Base in Helsinki', 'Helsinki city centre', '당일치기로 충분|A day is enough', '버스로 1시간쯤이고 여름에는 마켓 광장에서 증기선도 다닙니다. 구시가는 반나절이면 걸어서 봅니다.|About an hour by bus, and in summer a steamship leaves from Market Square; the old town takes half a day on foot.'),
    a('포르보 구시가', 'Porvoo old town', 'Porvoo old town', '느긋한 하룻밤|A slower overnight', '당일 관광객이 떠난 저녁이 조용하고 식당·B&B가 많습니다. 다도해까지 둘러볼 때 좋습니다.|Quiet once day visitors leave, with good restaurants and B&Bs; handy for exploring the archipelago.'),
  ],
  uppsala: [
    a('스톡홀름에서 다녀오기', 'Base in Stockholm', 'Stockholm Central Station', '당일치기|Day trip', '기차로 40~50분입니다. 스톡홀름 교통 구역 밖이라 요금을 더 내야 합니다.|40–50 minutes by train; it lies outside the Stockholm fare zone, so the ticket costs extra.'),
    a('대성당·퓌리스강 주변', 'Around the cathedral and Fyris river', 'Uppsala centrum', '걸어서 대학 도시 구경|The university town on foot', '대성당과 박물관, 정원, 대학 건물을 걸어서 다닙니다.|The cathedral, museums, gardens and university buildings on foot.'),
  ],
  kiruna: [
    a('키루나 시내', 'Kiruna town', 'Kiruna centrum', '투어 출발·식당|Tour pick-ups, restaurants', '투어 대부분이 시내에서 출발하고 식당·상점이 가깝습니다. 숙소가 많지 않아 일찍 예약하세요.|Most tours leave from town and restaurants and shops are close; rooms are limited, so book early.'),
    a('유카스예르비', 'Jukkasjärvi', 'Jukkasjärvi', '아이스호텔·조용한 마을|Ice Hotel, quiet village', '키루나에서 동쪽으로 20분쯤, 아이스호텔과 사미 마을이 있습니다.|About 20 minutes east of Kiruna, home to the Ice Hotel and a Sámi village.'),
    a('아비스코', 'Abisko', 'Abisko', '국립공원·산 풍경|National park, mountains', '국립공원과 산 풍경이 좋습니다. 상점과 편의시설이 적습니다.|National park and mountain scenery; few shops and services.'),
  ],
  odense: [
    a('오덴세 시내 (오덴세 C)', 'Odense C (centre)', 'Odense C', '걸어서 다 보기|Everything on foot', '중앙역과 숙소 대부분, 식당·밤 문화가 모여 있고 안데르센 지구도 가깝습니다.|The station, most hotels, restaurants and nightlife, close to the Hans Christian Andersen quarter.'),
  ],
  roskilde: [
    a('코펜하겐에서 다녀오기', 'Base in Copenhagen', 'København H', '당일치기|Day trip', '중앙역에서 기차로 25~30분, 한 시간에 여러 대 있습니다. 코펜하겐 카드로 기차와 바이킹선 박물관이 됩니다. 여름 음악 축제 기간에는 숙소가 비쌉니다.|25–30 minutes by train from Central Station with several trains an hour; the Copenhagen Card covers the train and the Viking Ship Museum. Rooms get pricey during the summer festival.'),
  ],
  debrecen: [
    a('시내 중심 (코슈트 광장)', 'Centre (Kossuth Square)', 'Kossuth tér, Debrecen', '걸어서 구경|Sights on foot', '대개혁교회와 데리 박물관, 카페·식당을 걸어서 다닙니다.|The Great Reformed Church, Déri Museum, cafés and restaurants on foot.'),
    a('너지에르되 (큰 숲)', 'Nagyerdő (Great Forest)', 'Nagyerdő, Debrecen', '숲·온천|Park and spa', '숲 공원과 온천 시설 근처로 조용합니다. 시내까지 2km쯤입니다.|A quiet area by the park and spa, about 2 km from the centre.'),
  ],
  pecs: [
    a('구시가 (세체니 광장 주변)', 'Old town (Széchenyi Square)', 'Széchenyi tér, Pécs', '걸어서 구경|Sights on foot', '세계유산 초기 기독교 묘지와 대성당, 광장이 걸어서 닿습니다.|The World Heritage early Christian tombs, the cathedral and the square are all walkable.'),
  ],
  szeged: [
    a('시내 중심 (돔 광장·티서강 변)', 'Centre (Dóm Square and the Tisza)', 'Dóm tér, Szeged', '처음이라면|First visit', '봉헌 교회와 보행자 거리, 강변이 가깝고 숙박비가 비교적 저렴합니다.|Close to the Votive Church, the pedestrian street and the river, at fairly modest prices.'),
  ],
  eger: [
    a('구시가 (도보 광장 주변)', 'Old town (Dobó Square)', 'Dobó tér, Eger', '성·광장·식당|Castle, square, restaurants', '에게르 성과 바로크 광장, 식당이 걸어서 닿습니다.|Eger Castle, the Baroque square and restaurants on foot.'),
    a('미녀의 계곡 근처', 'Near the Valley of Beautiful Women', 'Szépasszony-völgy, Eger', '와인 저장고|Wine cellars', '와인 저장고가 바로 앞이라 돌아갈 걱정이 없습니다. 시내까지 걸어서 20~30분이고 숙소가 적습니다.|The wine cellars on your doorstep, so no trip back after tasting; 20–30 minutes’ walk to town and few rooms.'),
  ],
  'karlovy-vary': [
    a('온천 지구 (콜로나다 주변)', 'Spa quarter (the colonnades)', 'Mlýnská kolonáda, Karlovy Vary', '온천 문화|Spa culture', '물레방아·시장 콜로나다와 온천 산책로, 카페가 모여 있습니다. 큰길 쪽보다 계곡 쪽 방이 조용합니다.|The Mill and Market colonnades, spring walks and cafés; rooms facing the valley are quieter than those on the road.'),
  ],
  canterbury: [
    a('시내 중심', 'City centre', 'Canterbury city centre', '저녁까지 느긋하게|A slower evening', '대성당과 옛 골목, 식당을 걸어서 다닙니다.|The cathedral, old lanes and restaurants on foot.'),
    a('런던에서 다녀오기', 'Base in London', 'London St Pancras', '당일치기|Day trip', '세인트판크라스에서 고속열차로 1시간이 안 걸려 하루면 충분히 봅니다.|Under an hour by high-speed train from St Pancras, so a day is plenty.'),
  ],
  windsor: [
    a('런던에서 다녀오기', 'Base in London', 'London Waterloo', '당일치기|Day trip', '워털루에서 직행열차로 55분쯤이고 두 역 모두 윈저성까지 걸어서 5분입니다.|About 55 minutes by direct train from Waterloo; both Windsor stations are a 5-minute walk from the castle.'),
  ],
  salisbury: [
    a('솔즈베리 시내', 'Salisbury centre', 'Salisbury city centre', '스톤헨지 버스 출발지|Stonehenge buses', '스톤헨지에는 숙소가 없고 투어 버스가 기차역과 시내에서 떠납니다. 술집 위층 방은 밤에 시끄러울 수 있습니다.|There is nowhere to stay at the stones; tour buses leave from the station and city centre. Rooms above pubs can be noisy at night.'),
  ],
  cotswolds: [
    a('모턴인마시', 'Moreton-in-Marsh', 'Moreton-in-Marsh', '차 없이 여행|Without a car', '코츠월드 마을 안에 있는 기차역으로 런던 패딩턴에서 직행열차가 오고, 801번 버스로 버턴·스토에 갑니다.|The one station inside a Cotswold town, with direct trains from London Paddington and the 801 bus to Bourton and Stow.'),
    a('버턴온더워터', 'Bourton-on-the-Water', 'Bourton-on-the-Water', '마을 산책|Village walks', '슬로터 마을과 스토까지 걷기 좋습니다. 일요일에는 버스가 적거나 다니지 않습니다.|Good walks to the Slaughters and Stow; buses are sparse or absent on Sundays.'),
  ],
  'stratford-upon-avon': [
    a('시내 중심', 'Town centre', 'Stratford-upon-Avon town centre', '셰익스피어 명소 걸어서|Shakespeare sights on foot', '셰익스피어 생가와 로열 셰익스피어 극장을 걸어서 갑니다.|Shakespeare’s Birthplace and the Royal Shakespeare Theatre on foot.'),
  ],
  'lake-district': [
    a('앰블사이드', 'Ambleside', 'Ambleside', '차 없이·한가운데|Car-free, central', '버스 연결이 좋고 카페·펍·아웃도어 상점이 많으며 산책로가 마을에서 시작합니다.|Good bus links, cafés, pubs and outdoor shops, with walks straight from town.'),
    a('케직', 'Keswick', 'Keswick', '북쪽 산·호수 걷기|Northern fells', '더웬트워터 호수까지 걸어서 15분, 펜리스역에서 버스로 옵니다.|A 15-minute walk to Derwentwater, reached by bus from Penrith station.'),
    a('윈더미어·보네스', 'Windermere and Bowness', 'Bowness-on-Windermere', '호수 위주 느긋한 여행|Relaxed, lake-focused', '기차역이 있고 호수 유람선 타기 좋습니다. 험한 산으로 가기는 조금 멉니다.|Has the rail station and lake cruises; the rugged fells are a bit farther.'),
  ],
  'st-ives': [
    a('항구·시내 중심', 'Harbour and centre', 'St Ives harbour', '처음이라면|First visit', '항구와 식당, 포스미어 해변이 걸어서 닿습니다. 여름에는 매우 붐비고 비쌉니다.|The harbour, restaurants and Porthmeor Beach on foot; very busy and expensive in summer.'),
    a('헤일', 'Hayle', 'Hayle, Cornwall', '더 조용하고 저렴|Quieter and cheaper', '차로 잠깐이거나 기차로 세인트어스에서 갈아타 옵니다.|A short drive away, or by train with a change at St Erth.'),
  ],
  'st-andrews': [
    a('구시가 (노스·사우스 스트리트)', 'Old town (North and South Street)', 'St Andrews town centre', '걸어서 다 보기|Everything on foot', '올드코스, 웨스트샌즈 해변, 대학, 대성당과 성 유적을 차 없이 걸어서 다닙니다.|The Old Course, West Sands, the university, cathedral and castle ruins, all without a car.'),
  ],
  conwy: [
    a('성벽 안 구시가', 'Inside the town walls', 'Conwy town centre', '저녁에도 성과 성벽 산책|Castle and walls in the evening', '성과 부두가 걸어서 몇 분이고 기차역도 있습니다. 숙소가 아주 적어 일찍 예약하세요.|The castle and quay are minutes apart and there is a station; very few rooms, so book early.'),
    a('랜디드노', 'Llandudno', 'Llandudno', '숙소·식당이 많음|More hotels and dining', '해변 산책로와 부두, 식당가가 있고 콘위까지 차로 15분쯤입니다. 걸어서는 못 갑니다.|Seafront promenade, pier and restaurants, about 15 minutes’ drive from Conwy; not walkable.'),
  ],
  snowdonia: [
    a('베투스이코이드', 'Betws-y-Coed', 'Betws-y-Coed', '처음·차 없이|First visit, car-free', '세 계곡이 만나는 가장 인기 있는 마을로 대중교통이 좋고 숙소가 가장 많습니다. 값이 더 나갑니다.|The most popular village, where three valleys meet, with good public transport and the most rooms; pricier.'),
    a('슬란베리스', 'Llanberis', 'Llanberis', '스노든산 오르기|Climbing Snowdon', '스노든 등산로와 산악열차가 마을에서 시작하고 호수와 슬레이트 박물관이 있습니다.|The Snowdon path and mountain railway start here, with a lake and the Slate Museum.'),
    a('베드겔레르트', 'Beddgelert', 'Beddgelert', '걷기·작은 마을|Walking, a small village', '두 강이 만나는 돌집 마을로 산책로가 많습니다. 숙소가 적습니다.|A stone-cottage village where two rivers meet, with many trails; few rooms.'),
  ],
  tenby: [
    a('성벽 안 구시가', 'Inside the walls', 'Tenby town centre', '항구·해변 걸어서|Harbour and beaches on foot', '항구와 해변, 식당이 가깝습니다. 7~8월에는 일찍 예약해야 합니다.|Close to the harbour, beaches and restaurants; book well ahead for July and August.'),
    a('노스클리프·에스플러네이드', 'North Cliff and the Esplanade', 'The Esplanade, Tenby', '바다 전망|Sea views', '성벽 바로 밖 절벽 위로 큰 호텔과 바다가 보이는 숙소가 많습니다.|Just outside the walls on the cliffs, with larger hotels and sea-view rentals.'),
  ],
  'giants-causeway': [
    a('부시밀스', 'Bushmills', 'Bushmills', '가장 가까움|Closest', '자이언츠 코즈웨이 바로 옆 마을입니다. 숙소가 적습니다.|The village right by the Causeway; few rooms.'),
    a('포트러시', 'Portrush', 'Portrush', '해변·식당·골프|Beaches, dining, golf', '코즈웨이에서 10km쯤 떨어진 해변 마을로 식당과 숙소가 더 많습니다.|A seaside town about 10 km from the Causeway with more restaurants and rooms.'),
    a('밸리캐슬', 'Ballycastle', 'Ballycastle, County Antrim', '조용한 해안·라슬린섬|Quiet coast, Rathlin Island', '16km쯤 떨어진 조용한 마을로 라슬린섬 배와 페어헤드가 가깝습니다.|A quieter town about 16 km away, close to the Rathlin ferry and Fair Head.'),
  ],
  derry: [
    a('성벽 안 구시가', 'Inside the walls', 'Walled City, Derry', '걸어서 성벽·식당|Walls and dining on foot', '성벽과 길드홀, 식당이 걸어서 닿습니다.|The walls, the Guildhall and restaurants on foot.'),
  ],
  killarney: [
    a('시내 중심 (마켓 크로스 주변)', 'Town centre (around Market Cross)', 'Killarney town centre', '차 없이·펍|Car-free, pubs', '펍과 식당, 국립공원 입구가 걸어서 닿습니다. 차가 없다면 마켓 크로스에서 걸어서 15분 안쪽으로 고르세요. 7~8월에는 일찍 찹니다.|Pubs, restaurants and the national park on foot; without a car, stay within 15 minutes’ walk of Market Cross. July and August book up early.'),
  ],
  kilkenny: [
    a('시내 중심 (중세 마일)', 'City centre (Medieval Mile)', 'Medieval Mile, Kilkenny', '걸어서 성·대성당|Castle and cathedral on foot', '킬케니 성에서 세인트캐니스 대성당까지 이어지는 옛길이라 걸어서 다 봅니다.|The old street from Kilkenny Castle to St Canice’s Cathedral, all walkable.'),
  ],
  nafplio: [
    a('구시가 (신타그마 광장 주변)', 'Old town (Syntagma Square)', 'Syntagma Square, Nafplio', '처음이라면|First visit', '광장과 팔라미디 요새, 옛 성벽이 걸어서 닿습니다. 방이 작은 편이고 여름에는 일찍 예약해야 합니다.|The square, Palamidi fortress and old walls on foot; rooms are small and summer books up early.'),
  ],
  limerick: [
    a('시내 중심', 'City centre', 'Limerick city centre', '걸어서 성·밤 문화|Castle and nightlife on foot', '킹 존스 성과 오코넬 거리, 펍이 걸어서 닿습니다. 여름에는 일찍 예약하세요.|King John’s Castle, O’Connell Street and the pubs on foot; book early in summer.'),
  ],
  sounion: [
    a('아테네에서 다녀오기', 'Base in Athens', 'Athens city centre', '반나절 여행|Half-day trip', '차로 50~80분입니다. 대중교통이 불편해 차가 없으면 투어가 낫고, 해 질 녘 신전을 보고 돌아오는 버스를 놓치지 않게 조심하세요.|50–80 minutes by car. Buses are unreliable, so take a tour if you have no car, and don’t miss the bus back after sunset at the temple.'),
    a('수니온·라브리오', 'Sounio and Lavrio', 'Lavrio', '바닷가에서 하룻밤|A seaside night', '라브리오는 수니온에서 8km쯤인 항구 마을로 식당과 숙소가 있습니다.|Lavrio, a port town about 8 km away, has restaurants and places to stay.'),
  ],
  olympia: [
    a('고대 올림피아 마을', 'Ancient Olympia village', 'Archaia Olympia', '유적·박물관 걸어서|Site and museum on foot', '숙소 대부분이 유적과 박물관에서 걸어서 몇 분 거리입니다.|Most hotels are a few minutes’ walk from the site and the museum.'),
  ],
  zakopane: [
    a('크루프프키 거리 주변 (시내)', 'Around Krupówki (centre)', 'Krupówki, Zakopane', '걸어서 다니기|Walkable', '버스 터미널, 식당, 구바우프카 푸니쿨라, 등산로행 버스가 걸어서 닿습니다. 주말 밤에는 시끄럽습니다.|The bus station, restaurants, the Gubałówka funicular and buses to the trailheads on foot; noisy on weekend nights.'),
    a('코시치엘리스코', 'Kościelisko', 'Kościelisko', '조용함·산 풍경|Quiet, mountain views', '시내에서 떨어진 조용하고 경치 좋은 동네입니다. 시내까지 버스나 차로 다닙니다.|A calm, scenic area away from the bustle; reach town by bus or car.'),
  ],
  torun: [
    a('구시가 (스타레 미아스토)', 'Old town (Stare Miasto)', 'Stare Miasto, Toruń', '처음이라면|First visit', '구시청과 시장 광장, 튜턴 기사단 성터를 걸어서 다닙니다.|The Old Town Hall, Market Square and the Teutonic castle ruins on foot.'),
  ],
  rovinj: [
    a('구시가', 'Old town', 'Rovinj old town', '처음이라면|First visit', '차 없는 반도 위 구시가로 분위기가 좋습니다. 바·식당·청소차 소리로 밤에 시끄러울 수 있습니다.|The car-free old town on its peninsula, full of atmosphere; bars, restaurants and street cleaning can be noisy at night.'),
    a('물리니·구시가 남쪽 해변', 'Mulini and the south shore', 'Mulini beach, Rovinj', '조용함·해변|Quieter, beaches', '해변 산책로를 따라 구시가까지 15분쯤 걷고 해변과 숲 공원이 가깝습니다.|About 15 minutes’ walk along the shore to the old town, close to beaches and the forest park.'),
  ],
  trogir: [
    a('트로기르 구시가', 'Trogir old town', 'Trogir old town', '조용한 저녁·공항 가까움|Quiet evenings, near the airport', '스플리트 공항에서 가깝고 스플리트보다 대개 쌉니다. 차가 있으면 구시가 밖에 묵는 편이 낫고 주차비가 비쌉니다.|Close to Split Airport and usually cheaper than Split; with a car, stay just outside the old town as parking is expensive.'),
    a('스플리트에서 다녀오기', 'Base in Split', 'Split old town', '당일치기|Day trip', '버스로 30분쯤이라 당일치기가 많습니다. 스플리트는 식당·배편이 더 많습니다.|About 30 minutes by bus, so most visit as a day trip; Split has more restaurants and ferries.'),
  ],
  plitvice: [
    a('2번 입구 옆 공원 호텔', 'Park hotels by Entrance 2', 'Plitvice Lakes Entrance 2', '걸어서 공원 입장|Walk into the park', '공원 안 호텔 몇 곳이 입구 바로 옆이라 아침 일찍 들어가기 좋습니다. 시설이 오래되고 비싸다는 평이 있습니다.|A few park-run hotels sit by the entrance for an early start; often called dated and overpriced.'),
    a('플리트비차 셀로 마을', 'Plitvica Selo village', 'Plitvica Selo', '조용한 마을|A quiet village', '3번 입구까지 걸어서 15~20분입니다. 이 입구에서는 표를 팔지 않으니 온라인으로 미리 사세요.|15–20 minutes’ walk to Entrance 3, which sells no tickets, so buy online in advance.'),
    a('라코비차·라스토케', 'Rakovica and Rastoke', 'Rakovica, Croatia', '차 여행·가성비|By car, better value', '공원 북쪽 마을들로 더 싸고 라스토케 마을이 예쁩니다. 차가 있어야 합니다.|Villages north of the park, cheaper, with pretty Rastoke; you need a car.'),
  ],
  akureyri: [
    a('시내 중심', 'Town centre', 'Akureyri town centre', '걸어서 다니기|Walkable', '작은 도시라 교회와 식당, 상점, 항구를 걸어서 다닙니다.|A compact town where the church, restaurants, shops and harbour are all walkable.'),
  ],
  vik: [
    a('비크 마을', 'Vík village', 'Vík í Mýrdal', '남부 해안 거점|South Coast base', '검은 모래 해변이 걸어서 닿고 남부 해안을 둘러보는 거점으로 좋습니다. 마을 밖 숙소는 차가 있어야 합니다.|The black-sand beach is walkable and the village makes a good South Coast base; places outside need a car.'),
  ],
  husavik: [
    a('시내 중심·항구', 'Town centre and harbour', 'Húsavík harbour', '고래 관찰|Whale watching', '고래 관찰 배가 떠나는 항구와 고래 박물관이 걸어서 닿습니다. 식당이 비싸 부엌 있는 숙소가 편합니다.|The whale-watching harbour and whale museum on foot; eating out is pricey, so a kitchen helps.'),
  ],
  ankara: [
    a('크즐라이', 'Kızılay', 'Kızılay, Ankara', '교통·식당|Transport, dining', '지하철·버스가 모이는 도심으로 상점과 식당이 많습니다.|The central hub of metro and bus lines with shops and restaurants.'),
    a('울루스', 'Ulus', 'Ulus, Ankara', '옛 앙카라·저렴|Old Ankara, budget', '옛 앙카라의 볼거리 대부분을 걸어서 갑니다. 숙소가 소박하고 언덕이 가파릅니다.|Walk to most of old Ankara’s sights; simpler hotels and steep streets.'),
    a('카바클르데레', 'Kavaklıdere', 'Kavaklıdere, Ankara', '편안함·가성비|Comfort and value', '울루스보다 세련되고 밤 문화가 있으며, 찬카야의 고층 호텔보다 값이 낫습니다.|More polished than Ulus with nightlife, and better value than Çankaya’s high-rise hotels.'),
  ],
  bursa: [
    a('구시가·오스만가지 중심', 'Old town and central Osmangazi', 'Osmangazi, Bursa', '걸어서 구경|Sights on foot', '울루 자미와 옛 상관(한), 시장을 걸어서 다니고 지하철이 있습니다.|The Grand Mosque, old hans and bazaars on foot, with metro access.'),
  ],
  trabzon: [
    a('메이단 (시내 중심)', 'Meydan (centre)', 'Meydan, Trabzon', '걸어서 다니기|Walkable', '식당과 볼거리가 가깝습니다. 저녁에는 붐비고 시끄러울 수 있습니다.|Close to restaurants and sights; lively and noisy in the evening.'),
    a('우준괼', 'Uzungöl', 'Uzungöl', '자연·호수|Nature, the lake', '시내에서 차로 1시간 30분쯤인 산속 호수 마을입니다. 차가 있어야 편하고 여름에는 2~3달 전에 예약하세요.|A mountain-lake village about 1.5 hours’ drive from the city; best with a car, and book 2–3 months ahead for summer.'),
  ],
  pamukkale: [
    a('파묵칼레 마을', 'Pamukkale village', 'Pamukkale, Denizli', '석회봉·온천 가까이|By the travertines', '석회봉과 온천 수영장 바로 아래 마을이라 이른 아침에 가기 좋습니다. 시골이라 닭·개 소리가 들릴 수 있습니다.|The village right below the travertines and pools, ideal for an early start; rural, so expect roosters and dogs.'),
    a('데니즐리 시내', 'Denizli city', 'Denizli Merkezefendi', '가성비·식당|Value, restaurants', '17km쯤 떨어져 있고 돌무시(미니버스)로 20분쯤입니다. 값이 싸고 식당이 많습니다.|About 17 km away, 20 minutes by minibus; cheaper with more restaurants.'),
  ],
  varna: [
    a('시내 중심', 'City centre', 'Varna city centre', '구경·식당·밤 문화|Sights, dining, nightlife', '볼거리와 보행자 거리, 식당을 걸어서 다니고 바다 공원이 바로 시작됩니다.|Sights, the pedestrian street and restaurants on foot, with the Sea Garden right at the edge.'),
    a('바다 공원 (모르스카 그라디나) 근처', 'Near the Sea Garden', 'Primorski Park, Varna', '조용함·해변|Calmer, by the beach', '공원과 해변이 가까워 가족·커플에게 좋습니다.|Green space and the beach close by, good for families and couples.'),
    a('골든 샌즈', 'Golden Sands', 'Golden Sands, Bulgaria', '해변 휴양|Beach resort', '바르나 북쪽의 휴양지로 큰 모래 해변과 밤 문화가 있습니다. 시내 구경과는 떨어져 있습니다.|A resort north of Varna with a huge sandy beach and nightlife, away from the city sights.'),
  ],
  'veliko-tarnovo': [
    a('구시가 (사모보드스카 차르시야 주변)', 'Old town (Samovodska Charshia)', 'Samovodska Charshia, Veliko Tarnovo', '걸어서 요새·공예 거리|Fortress and crafts street on foot', '공예 거리와 구시가가 가깝고 차레베츠 요새까지 걸어서 15분쯤입니다. 돌길이 아주 가팔라 차로 다니기 힘듭니다.|Close to the crafts street and old town, about 15 minutes’ walk to Tsarevets fortress; the cobbled lanes are very steep for cars.'),
  ],
  nessebar: [
    a('구시가', 'Old town', 'Nessebar old town', '역사·노을 산책|History, sunset walks', '바다 전망 식당과 옛 교회가 모여 있습니다. 한여름에는 붐비고 방 구하기가 아주 어렵습니다.|Sea-view restaurants and old churches; crowded in midsummer and very hard to book.'),
    a('신시가 (뉴 네세바르)', 'New Nessebar', 'New Nessebar', '가족 여행|Families', '넓은 호텔과 모래 해변, 식당이 많습니다.|Roomier hotels, sandy beaches and plenty of restaurants.'),
    a('선니 비치', 'Sunny Beach', 'Sunny Beach, Bulgaria', '밤 문화|Nightlife', '해변 클럽과 바가 모여 있습니다. 구시가 항구에서 수상 택시로 10분쯤입니다.|Beach clubs and bars; about 10 minutes by water taxi from the old town harbour.'),
  ],
  sighisoara: [
    a('성채 안', 'Inside the citadel', 'Sighișoara Citadel', '조용한 저녁|Quiet evenings', '단체 관광객이 떠난 저녁이 조용하고 중세 건물을 고친 게스트하우스가 많습니다. 주차장이 거의 없어 성벽 밖에 세웁니다. 축제 기간에는 일찍 찹니다.|Peaceful once the coaches leave, in restored medieval guesthouses; most have no parking, so park outside the walls. Books up fast at festival time.'),
    a('아래 시가지', 'Lower town', 'Sighișoara lower town', '가성비·차·기차|Value, car, train', '더 싸고 차로 다니기 쉽습니다. 기차역에서 성채까지 10분쯤 오르막입니다.|Cheaper and easier by car; the station is about a 10-minute climb from the citadel.'),
  ],
  timisoara: [
    a('구시가 (우니리 광장 주변)', 'Old town (Union Square)', 'Piața Unirii, Timișoara', '걸어서 다 보기|Everything on foot', '우니리·빅토리에이·리베르타티 광장과 대성당, 오페라 극장을 걸어서 다닙니다.|Union, Victory and Liberty squares, the cathedral and the opera, all on foot.'),
  ],
  'vatican-city': [
    a('프라티', 'Prati', 'Prati, Rome', '바티칸 걸어서|Walk to the Vatican', '바티칸 박물관과 성 베드로 대성당까지 걸어서 10~15분입니다. 구시가보다 조용하고 콜라 디 리엔초 거리에 식당·상점이 있으며 오타비아노·레판토 지하철역이 있습니다.|10–15 minutes’ walk to the Vatican Museums and St Peter’s; quieter than the historic centre, with shops and restaurants on Via Cola di Rienzo and the Ottaviano and Lepanto metro stops.'),
  ],
  'andorra-la-vella': [
    a('안도라라베야·에스칼데스 중심', 'Andorra la Vella and Escaldes centre', 'Avinguda Meritxell, Andorra la Vella', '쇼핑·차 없이|Shopping, car-free', '메리체이 거리를 따라 상점과 호텔이 모여 있고 칼데아 온천도 가깝습니다. 공항·기차가 없어 바르셀로나·툴루즈에서 버스로 옵니다.|Shops and hotels along Avinguda Meritxell, close to the Caldea spa; no airport or railway, so buses come from Barcelona and Toulouse.'),
  ],
  'pas-de-la-casa': [
    a('파스 데 라 카사 마을', 'Pas de la Casa village', 'Pas de la Casa', '스키|Skiing', '그란발리라 스키장 한쪽 끝 마을로 슬로프가 바로 앞입니다.|A village at one end of Grandvalira with the slopes on the doorstep.'),
  ],
  ordino: [
    a('오르디노 마을', 'Ordino village', 'Ordino, Andorra', '조용한 계곡·발노르드 스키|Quiet valley, Vallnord', '높은 계곡의 조용한 마을로 발노르드 스키장과 산길이 가깝습니다.|A quiet high-valley village close to Vallnord and mountain roads.'),
  ],
  vaduz: [
    a('파두츠·샨', 'Vaduz and Schaan', 'Vaduz', '구경 거점|Sightseeing base', '나라의 중심지로 작아서 걸어 다니기 쉽고, 샨에 유스호스텔이 있습니다.|The country’s hub, compact and walkable, with a youth hostel in Schaan.'),
    a('트리젠베르크', 'Triesenberg', 'Triesenberg', '하이킹·산마을|Hiking, a hillside village', '파두츠 위 산비탈 마을로 발저 문화가 남아 있습니다.|A hillside village above Vaduz with Walser heritage.'),
  ],
  schaan: [
    a('샨·파두츠', 'Schaan and Vaduz', 'Schaan', '구경 거점|Sightseeing base', '파두츠와 붙어 있는 마을로 유스호스텔이 있고 버스·기차로 다닙니다.|Next to Vaduz, with a youth hostel and bus and rail links.'),
  ],
  malbun: [
    a('말분 마을', 'Malbun village', 'Malbun', '스키·알프스|Skiing, the Alps', '리히텐슈타인 유일의 스키장 마을로 산 숙소가 있습니다.|The country’s only ski resort village, with alpine hotels.'),
  ],
  kosice: [
    a('구시가 (흘라브나 거리)', 'Old town (Hlavná)', 'Hlavná, Košice', '걸어서 다니기|Walkable', '중심 거리를 따라 상점·식당·카페가 모여 있고 걸어서 다 다닙니다.|Shops, restaurants and cafés line the main street, all within walking distance.'),
  ],
  poprad: [
    a('포프라트 시내', 'Poprad town', 'Poprad', '가성비·교통|Value, transport', '기차역이 있고 숙소가 싸지만 등산로까지는 멉니다.|Has the main station and cheaper rooms, but farther from the trailheads.'),
    a('스타리 스모코베츠', 'Starý Smokovec', 'Starý Smokovec', '타트라 등산 거점|Tatras hiking base', '타트라 한가운데로 흐레비에노크 케이블카와 등산로, 산악 전철역이 가깝습니다.|In the middle of the Tatras, by the Hrebienok funicular, trailheads and the mountain railway.'),
    a('슈트르바스케 플레소', 'Štrbské Pleso', 'Štrbské Pleso', '호수·높은 산|Lake, high trails', '호수 산책과 높은 산길이 가깝고 고급 호텔이 많아 비쌉니다.|Close to lake walks and high routes, with mostly upscale, pricier hotels.'),
  ],
  bled: [
    a('호숫가', 'Lakeside', 'Lake Bled lakeside', '호수 전망|Lake views', '호수가 보이는 방이 많고 블레드성과 시내가 가깝습니다. 여름에는 빨리 찹니다.|Many lake-view rooms, close to Bled Castle and the centre; fills fast in summer.'),
    a('시내 중심', 'Town centre', 'Bled town centre', '식당·편의|Dining, convenience', '상점·식당이 모여 있습니다. 호수에서 조금 떨어진 큰길 쪽 숙소는 더 싸고 걸어서 닿습니다.|Shops and restaurants; places a little back from the shore are cheaper and still walkable.'),
  ],
  piran: [
    a('피란 구시가', 'Piran old town', 'Tartini Square, Piran', '분위기·식당|Atmosphere, dining', '베네치아풍 건물과 타르티니 광장, 해안 산책로가 있습니다. 모래 해변이 없고 주차가 어려워 시내 밖 주차장에서 셔틀버스를 탑니다. 7~8월은 3~6달 전에 예약하세요.|Venetian buildings, Tartini Square and the seafront; no sandy beach and little parking, so use the garage outside town and the shuttle. Book 3–6 months ahead for July–August.'),
    a('포르토로시', 'Portorož', 'Portorož', '해변·리조트|Beach, resorts', '차로 잠깐 거리의 해변 휴양지로 큰 호텔과 모래 해변이 있습니다. 오래된 호텔이 많다는 평이 있습니다.|A short drive away, a beach resort with big hotels and sand; many hotels are described as dated.'),
  ],
  maribor: [
    a('렌트 (드라바강 변 구시가)', 'Lent (old town on the Drava)', 'Lent, Maribor', '강변 산책·식당|Riverside, dining', '걸어서 다니기 좋고 카페·식당이 많습니다. 밤에 시끄럽고 주차가 어렵습니다.|Walkable with cafés and restaurants; noisy at night and parking is hard.'),
  ],
  postojna: [
    a('류블랴나에서 다녀오기', 'Base in Ljubljana', 'Ljubljana city centre', '당일치기|Day trip', '차나 기차로 45분쯤이고 프레드야마성과 묶은 당일 투어가 많습니다.|About 45 minutes by car or train, with many day tours that add Predjama Castle.'),
  ],
  'banska-bystrica': [
    a('구시가 (SNP 광장 주변)', 'Old town (SNP Square)', 'SNP Square, Banská Bystrica', '걸어서 구경|Sights on foot', '광장과 옛 건물, 식당이 걸어서 닿습니다.|The square, historic buildings and restaurants on foot.'),
  ],
  trencin: [
    a('구시가 (미에로베 광장)', 'Old town (Mierové námestie)', 'Mierové námestie, Trenčín', '성 아래 광장|The square below the castle', '보행자 광장에 카페와 상점이 있고 트렌친성 계단이 바로 이어집니다.|A pedestrian square with cafés and shops leading straight to the castle steps.'),
  ],
  sarajevo: [
    a('바슈차르시야 (구시가)', 'Baščaršija (old town)', 'Baščaršija, Sarajevo', '처음이라면|First visit', '시장과 세빌 분수, 모스크를 걸어서 다닙니다.|The bazaar, Sebilj fountain and mosques on foot.'),
    a('첸타르 남쪽·비스트리크', 'Southern Centar and Bistrik', 'Bistrik, Sarajevo', '조용함·가까움|Quieter, still central', '라틴 다리와 황제 모스크가 걸어서 닿고 구시가보다 조용합니다.|The Latin Bridge and Emperor’s Mosque are walkable, and it is quieter than the bazaar.'),
  ],
  mostar: [
    a('구시가 (스타리 모스트 근처)', 'Old town (near the Old Bridge)', 'Stari Most, Mostar', '다리 걸어서|The bridge on foot', '다리와 시장 거리가 바로 앞입니다. 낮에는 붐비니 조용히 지내려면 시장에서 조금 떨어진 곳을 고르세요.|The bridge and bazaar on your doorstep; busy by day, so pick somewhere a little away from the bazaar for quiet.'),
  ],
  'banja-luka': [
    a('시내 중심', 'City centre', 'Banja Luka city centre', '걸어서 구경·카페|Sights and cafés on foot', '카페·식당·상점이 모여 있고 주요 볼거리와 대중교통이 가깝습니다.|Cafés, restaurants and shops, close to the main sights and public transport.'),
  ],
  travnik: [
    a('구시가 (요새·플라바 보다 주변)', 'Old town (fortress and Plava Voda)', 'Plava Voda, Travnik', '작고 걸어 다니기 좋음|Compact, walkable', '트라브니크 요새와 샘, 박물관이 가깝고 시내 중심까지 5분쯤 걷습니다.|Close to the fortress, the springs and the museum, about five minutes’ walk to the centre.'),
  ],
  neum: [
    a('네움 해변 마을', 'Neum seafront', 'Neum', '해변·가성비|Beach, value', '작아서 걸어 다니기 쉽고 크로아티아보다 싸고 덜 붐빕니다. 두브로브니크까지 차로 1시간쯤이며 국경을 넘으니 여권을 챙기세요.|Small and walkable, cheaper and calmer than Croatia; Dubrovnik is about an hour’s drive across a border, so bring your passport.'),
  ],
  podgorica: [
    a('시내 중심', 'City centre', 'Podgorica city centre', '걸어서 구경·가성비|Walkable, good value', '숙소 대부분이 모여 있고 볼거리가 걸어서 닿으며 값이 싼 편입니다.|Most hotels are here, the sights are walkable and prices are low.'),
  ],
  'novi-sad': [
    a('구시가 (즈마이 요비나 거리·자유 광장)', 'Old town (Zmaj Jovina and Liberty Square)', 'Zmaj Jovina, Novi Sad', '걸어서·카페|On foot, cafés', '보행자 거리에 카페·식당이 늘어서 있고 페트로바라딘 요새는 다리 건너 가깝습니다. 보행자 거리 바로 옆은 밤에 시끄러울 수 있습니다.|A pedestrian street of cafés and restaurants, with Petrovaradin Fortress just over the bridge; right by the street it can be noisy at night.'),
  ],
  nis: [
    a('시내 중심 (밀란 왕 광장·니샤바강 변)', 'Centre (King Milan Square and the Nišava)', 'King Milan Square, Niš', '걸어서 구경|Sights on foot', '작은 도심이라 니시 요새와 식당가가 걸어서 닿습니다.|A compact centre where Niš Fortress and the restaurants are walkable.'),
  ],
  kutaisi: [
    a('구시가 (하얀 다리 주변)', 'Historic centre (by the White Bridge)', 'White Bridge, Kutaisi', '걸어서 구경|Sights on foot', '구시가와 강변 카페가 걸어서 닿습니다.|The old centre and riverside cafés on foot.'),
  ],
  stepantsminda: [
    a('스테판츠민다 마을 (강 동쪽)', 'Stepantsminda village (east bank)', 'Stepantsminda', '식당·편의|Restaurants', '식당과 가게가 모여 있고 게스트하우스가 많습니다.|Restaurants and shops, with plenty of guesthouses.'),
    a('게르게티 마을', 'Gergeti village', 'Gergeti', '트레킹|Trekking', '게르게티 교회 등산로 입구가 가까워 걷는 시간을 30분쯤 줄입니다.|Close to the trail up to Gergeti church, saving about 30 minutes of hiking.'),
  ],
  sighnaghi: [
    a('성벽 안 구시가', 'Old town', 'Sighnaghi old town', '아침 산책·전망|Morning walks, views', '광장과 성벽까지 걸어서 다닙니다. 비탈과 계단이 많으니 숙소 위치를 확인하세요.|The square and walls on foot; there are many slopes and stairs, so check the exact location.'),
  ],
  bitola: [
    a('시로크 소카크 주변', 'Around Širok Sokak', 'Širok Sokak, Bitola', '걸어서 구경|Sights on foot', '보행자 거리 주변이라 대부분의 볼거리와 헤라클레아 유적까지 걸어서 닿습니다.|Around the pedestrian street, with most sights and the ruins of Heraclea within walking distance.'),
  ],
  nicosia: [
    a('성벽 안 구시가', 'Old city inside the walls', 'Ledra Street, Nicosia', '걸어서 구경·식당|Sights and dining on foot', '베네치아 성벽 안에 박물관과 교회, 레드라·오나사고루 거리의 카페·식당이 모여 있습니다.|Museums and churches inside the Venetian walls, with cafés and restaurants on Ledra and Onasagorou streets.'),
  ],
  'ayia-napa': [
    a('시내 중심', 'Town centre', 'Ayia Napa centre', '밤 문화|Nightlife', '광장과 바, 클럽이 모여 있습니다. 밤에는 창문을 닫아도 시끄럽고 모래 해변까지는 버스나 택시를 탑니다.|The main square, bars and clubs; noisy at night even with windows shut, and the sandy beaches need a bus or taxi.'),
    a('니시 해변 쪽', 'Nissi Beach area', 'Nissi Beach', '해변 걸어서|Walk to the beach', '해변이 걸어서 닿고 시내보다 조용합니다. 젊은 여행자와 커플이 많습니다.|The beach on foot and calmer than the centre; popular with young travellers and couples.'),
    a('마크로니소스·란다', 'Makronissos and Landa', 'Makronissos, Ayia Napa', '가장 조용함|Quietest', '가족용·성인 전용 호텔이 있는 조용한 지역으로 니시 해변이 가깝습니다.|A quiet area of family and adults-only hotels, a short trip from Nissi.'),
  ],
  berat: [
    a('망갈렘', 'Mangalem', 'Mangalem, Berat', '성 아래 구시가|Old town below the castle', '성 언덕 아래 가장 중심이 되는 구역으로 볼거리를 걸어서 다닙니다.|The most central quarter at the foot of the castle hill, with the sights on foot.'),
    a('고리차', 'Gorica', 'Gorica, Berat', '조용함·전망|Quieter, views', '강 건너편 조용한 구역으로 망갈렘의 돌지붕 집들이 가장 잘 보입니다.|The quieter quarter across the river, with the best views of Mangalem’s stone-roofed houses.'),
  ],
  gjirokaster: [
    a('옛 시장 (바자르) 주변', 'Around the old bazaar', 'Old Bazaar, Gjirokastër', '구시가 한가운데|Heart of the old town', '상점과 식당이 모여 있고 볼거리가 걸어서 닿습니다. 성 쪽 언덕 위 숙소는 조용하지만 오르막을 걸어 돌아가야 합니다.|Shops and restaurants with the sights on foot; places higher up towards the castle are quieter but mean an uphill walk home.'),
  ],
  sarande: [
    a('시내 중심·해안 산책로', 'Centre and promenade', 'Sarandë promenade', '처음이라면|First visit', '항구와 산책로, 바·카페를 걸어서 다니고 크사밀·부트린트행 버스가 해안에서 떠납니다.|The port, promenade, bars and cafés on foot, with buses to Ksamil and Butrint from the seafront.'),
    a('크사밀', 'Ksamil', 'Ksamil', '해변|Beaches', '남쪽으로 14km쯤 떨어진 하얀 모래 해변 마을입니다.|A white-sand beach village about 14 km south.'),
  ],
  mdina: [
    a('음디나·라바트', 'Mdina and Rabat', 'Rabat, Malta', '조용한 중세 마을|Quiet medieval town', '성벽 안 작은 숙소에서 골목과 궁전을 걸어서 봅니다. 바로 붙은 라바트는 대중교통이 편하고 큰 숙소가 있습니다.|Small boutique stays inside the walls, steps from the lanes and palaces; neighbouring Rabat has easier buses and larger hotels.'),
    a('발레타에서 다녀오기', 'Base in Valletta', 'Valletta', '식당·저녁|Dining, evenings', '식당과 저녁 분위기는 발레타가 낫습니다. 음디나는 당일로 다녀옵니다.|Valletta is livelier for dinner and evenings; visit Mdina as a day trip.'),
  ],
  tartu: [
    a('구시가 (시청 광장 주변)', 'Old town (Town Hall Square)', 'Town Hall Square, Tartu', '걸어서 구경|Sights on foot', '시청 광장과 대학, 토메매기 언덕이 걸어서 닿습니다.|Town Hall Square, the university and Toomemägi hill on foot.'),
  ],
  parnu: [
    a('해변 쪽', 'Beach area', 'Pärnu beach', '바다·스파|Sea and spas', '해변과 해변 공원 옆에 스파 호텔이 많고 시내까지 15분쯤 걷습니다.|Spa hotels by the beach and its park, about 15 minutes’ walk to town.'),
    a('시내 중심', 'Town centre', 'Rüütli, Pärnu', '식당·쇼핑|Dining, shopping', '뤼틀리 보행자 거리와 광장 주변에 식당·상점이 모여 있습니다.|Restaurants and shops around the Rüütli pedestrian street and the square.'),
  ],
  jurmala: [
    a('마요리', 'Majori', 'Majori, Jūrmala', '처음이라면|First visit', '식당·상점·보행자 거리가 가장 많이 모여 있고 기차역이 있습니다.|The most restaurants, shops and pedestrian streets, with a railway station.'),
    a('리가에서 다녀오기', 'Base in Riga', 'Riga Central Station', '당일치기|Day trip', '가까워 당일치기로 쉽게 다녀옵니다.|Close enough for an easy day trip.'),
  ],
  sigulda: [
    a('리가에서 다녀오기', 'Base in Riga', 'Riga Central Station', '당일치기|Day trip', '기차로 45분~1시간입니다. 볼거리 사이를 꽤 많이 걸어야 합니다.|45 minutes to an hour by train; expect a lot of walking between the sights.'),
    a('시굴다 마을', 'Sigulda town', 'Sigulda', '하룻밤·투라이다성|Overnight, Turaida', '투라이다성 등 주변을 느긋하게 둘러보기 좋은 거점입니다.|A good base to explore Turaida Castle and the area at a slower pace.'),
  ],
  klaipeda: [
    a('구시가 (극장 광장 주변)', 'Old town (Theatre Square)', 'Theatre Square, Klaipėda', '걸어서 구경|Sights on foot', '극장 광장과 다네강 변, 성터가 걸어서 닿습니다. 쿠르시우 사주의 니다는 50km 떨어져 따로 묵는 편이 낫습니다.|Theatre Square, the Danė riverside and the castle site on foot; Nida on the Curonian Spit is 50 km away and better as its own stay.'),
  ],
  chisinau: [
    a('시내 중심 (슈테판 첼 마레 거리)', 'Centre (Ștefan cel Mare boulevard)', 'Ștefan cel Mare boulevard, Chișinău', '걸어서 구경|Sights on foot', '대성당과 슈테판 대공 공원, 오페라 극장, 카페·바가 가깝습니다.|Close to the cathedral, Ștefan cel Mare park, the opera and cafés.'),
  ],
  'orheiul-vechi': [
    a('키시너우에서 다녀오기', 'Base in Chișinău', 'Chișinău city centre', '당일치기|Day trip', '50km쯤, 차로 1시간입니다. 북부 버스 터미널에서 미니버스가 다니지만 돌아오는 막차가 이릅니다.|About 50 km, an hour by car; minibuses leave from the North Bus Station, but the last one back is early.'),
    a('부투체니 마을', 'Butuceni village', 'Butuceni', '시골 민박|Village guesthouses', '동굴 수도원 바로 아래 마을로 전통 가옥 민박에서 하룻밤 묵기 좋습니다.|The village right below the cave monastery, good for a night in a traditional guesthouse.'),
  ],
  gyumri: [
    a('쿠마이리 역사 지구', 'Kumayri historic district', 'Kumayri, Gyumri', '옛 건물 거리|Historic streets', '검은 응회암 건물이 늘어선 옛 시가로 볼거리가 걸어서 닿습니다.|The old quarter of black tuff buildings, with the sights on foot.'),
  ],
  sheki: [
    a('구시가 (카라반사라이 주변)', 'Old town (by the caravanserais)', 'Sheki Old Town', '옛 거리 걸어서|Old streets on foot', '옛 대상 숙소(카라반사라이)를 고친 숙소에서 묵을 수 있고 구시가를 걸어서 다닙니다. 방은 소박합니다.|You can sleep in a restored caravanserai and walk the old town; rooms are basic.'),
  ],
  'san-marino-city': [
    a('역사 지구 (시내 중심)', 'Historic centre', 'Città di San Marino', '저녁·이른 아침|Evenings and early mornings', '당일 관광객이 떠난 뒤의 시간을 즐기고 주요 볼거리를 걸어서 갑니다. 값이 더 나가고 시내에 주차할 수 없어 밖의 유료 주차장을 씁니다.|Enjoy the town after day-trippers leave, with the sights on foot; pricier, and no parking in the centre, so use the paid car parks outside.'),
    a('리미니에서 다녀오기', 'Base in Rimini', 'Rimini', '해변·당일치기|Beach and day trip', '바닷가 도시에 묵고 버스로 당일치기합니다.|Stay by the sea and visit by bus for the day.'),
  ],
  'borgo-maggiore': [
    a('보르고 마조레 마을', 'Borgo Maggiore', 'Borgo Maggiore', '차 여행·가성비|By car, better value', '역사 지구보다 조금 싸고 차로 오기 쉽습니다. 케이블카나 걸어서 위로 올라갑니다.|A little cheaper than the historic centre and easier by car; walk or take the cable car up.'),
  ],
  prizren: [
    a('구시가', 'Old town', 'Prizren old town', '걸어서 구경|Sights on foot', '시난 파샤 모스크와 강변 카페가 걸어서 닿습니다.|The Sinan Pasha Mosque and riverside cafés on foot.'),
  ],
  pristina: [
    a('시내 중심 (마더 테레사 대로)', 'Centre (Mother Teresa Boulevard)', 'Mother Teresa Boulevard, Pristina', '걸어서·식당|Walkable, dining', '보행자 대로 주변에 국립극장과 카페·식당이 모여 있습니다.|Around the pedestrian boulevard, near the National Theatre with cafés and restaurants.'),
  ],
  leuven: [
    a('시내 중심 (그로테 마르크트 주변)', 'Centre (around the Grote Markt)', 'Grote Markt, Leuven', '저녁 맥주·식당|Dinner and beer', '볼거리와 식당을 걸어서 다닙니다. 구시가 일부가 보행자 구역이라 주차가 유료입니다.|Sights and restaurants on foot; part of the centre is pedestrianised and parking is paid.'),
    a('브뤼셀에서 다녀오기', 'Base in Brussels', 'Brussels Central Station', '당일치기|Day trip', '기차로 20분쯤이라 하루면 주요 볼거리를 봅니다.|About 20 minutes by train, so a day covers the highlights.'),
  ],
  dinant: [
    a('나뮈르에서 다녀오기', 'Base in Namur', 'Namur station', '당일치기 거점|Day-trip base', '브뤼셀에서 직행열차로 1시간쯤이고 디낭까지 기차로 30분쯤입니다. 디낭은 작아 하루면 충분합니다.|About an hour by direct train from Brussels and 30 minutes on to Dinant; Dinant is small enough for a day.'),
    a('디낭 마을', 'Dinant town', 'Dinant', '뫼즈 계곡 거점|Meuse valley base', '뫼즈 계곡을 둘러보기 좋은 거점이지만 숙박비가 비싼 편입니다.|A good base for the Meuse valley, but rooms are pricey.'),
  ],
  ravenna: [
    a('성벽 안 구시가', 'Inside the old walls', 'Ravenna centro storico', '모자이크 걸어서|Mosaics on foot', '세계유산 모자이크 건물 대부분이 몇 블록 안에 모여 있습니다. 숙소가 적어 일찍 예약하세요.|Most of the World Heritage mosaic monuments lie a few blocks apart; few hotels, so book early.'),
    a('기차역 주변', 'Near the station', 'Ravenna stazione', '가성비·기차|Value, trains', '구시가 안보다 싸고 구시가까지 걸어서 5~10분입니다.|Cheaper than inside the walls and a 5–10-minute walk from the centre.'),
  ],
  monaco: [
    a('몬테카를로', 'Monte Carlo', 'Monte Carlo', '카지노·식당 걸어서|Casino and dining on foot', '가장 화려하고 아주 비쌉니다. 낮에는 단체 관광객으로 붐빕니다.|The glamorous core and very expensive; crowded with tour groups by day.'),
    a('퐁비에유', 'Fontvieille', 'Fontvieille, Monaco', '조용함·바다 전망|Quiet, sea views', '더 새롭고 조용한 동네입니다. 몬테카를로까지 걸어서 25분쯤입니다.|A newer, quieter area, about 25 minutes’ walk from Monte Carlo.'),
    a('니스에서 다녀오기', 'Base in Nice', 'Nice Ville station', '가성비|Value', '기차로 가까워 다양한 가격대 숙소를 고를 수 있습니다. 모나코는 언덕과 계단이 많습니다.|A short train ride, with rooms at every budget; Monaco itself is steep with many stairs.'),
  ],
  'monte-carlo': [
    a('몬테카를로', 'Monte Carlo', 'Monte Carlo', '카지노·식당 걸어서|Casino and dining on foot', '가장 화려하고 아주 비쌉니다. 낮에는 단체 관광객으로 붐빕니다.|The glamorous core and very expensive; crowded with tour groups by day.'),
    a('퐁비에유', 'Fontvieille', 'Fontvieille, Monaco', '조용함·바다 전망|Quiet, sea views', '더 새롭고 조용한 동네입니다. 몬테카를로까지 걸어서 25분쯤입니다.|A newer, quieter area, about 25 minutes’ walk from Monte Carlo.'),
    a('니스에서 다녀오기', 'Base in Nice', 'Nice Ville station', '가성비|Value', '기차로 가까워 다양한 가격대 숙소를 고를 수 있습니다. 모나코는 언덕과 계단이 많습니다.|A short train ride, with rooms at every budget; Monaco itself is steep with many stairs.'),
  ],
  grindelwald: [
    a('그린델발트 마을', 'Grindelwald village', 'Grindelwald', '당일 산행이 편함|Easy day trips', '융프라우요흐·쉴트호른·라우터브루넨으로 다니기 편하고 숙소가 많습니다. 붐비고 차가 다닙니다.|Easy trips to Jungfraujoch, Schilthorn and Lauterbrunnen with plenty of rooms; busy, with car traffic.'),
    a('벵겐', 'Wengen', 'Wengen', '차 없는 산마을·풍경|Car-free village, views', '차가 없고 풍경이 가장 좋다는 평이 많습니다. 상점·식당이 적습니다.|Car-free and often called the most scenic; fewer shops and restaurants.'),
  ],
  selfoss: [
    a('셀포스 시내', 'Selfoss town centre', 'Selfoss', '골든 서클·남부 해안 거점|Golden Circle and South Coast base', '골든 서클까지 30km, 남부 해안까지 70km, 레이캬비크까지 50km쯤이라 차로 다니기 좋은 거점입니다.|About 30 km to the Golden Circle, 70 km to the South Coast and 50 km to Reykjavík, a handy base by car.'),
  ],
  vianden: [
    a('비안덴 구시가 (성 아래)', 'Vianden old town', 'Vianden', '성 야경·조용한 저녁|The lit castle, quiet evenings', '관광객이 떠난 저녁에 불 켜진 성과 계곡을 즐깁니다. 숙소는 구시가에 모여 있고 식당이 많지 않습니다.|Enjoy the lit castle and the valley once visitors leave; rooms cluster in the old town and evenings are low-key.'),
    a('룩셈부르크 시내에서 다녀오기', 'Base in Luxembourg City', 'Luxembourg City', '당일치기|Day trip', '47km쯤으로 차로 45분입니다. 기차역이 없어 에텔브뤼크까지 기차, 거기서 버스를 타며 대중교통은 무료입니다.|About 47 km, 45 minutes by car; no station, so take the train to Ettelbruck and then a bus. Public transport is free.'),
  ],
  echternach: [
    a('에히터나흐 시내·호숫가', 'Echternach centre and lake', 'Echternach', '뮐러탈 트레일 거점|Mullerthal Trail base', '작은 마을이라 시내나 호숫가(유스호스텔)에 묵습니다. 트레일과 버스 정류장이 가깝고 버스는 무료입니다.|A small town; stay in the centre or by the lake (youth hostel), close to the trails and the bus station. Buses are free.'),
  ],
  remich: [
    a('룩셈부르크 시내에서 다녀오기', 'Base in Luxembourg City', 'Luxembourg City', '당일치기|Day trip', '버스로 1시간쯤이고 셍겐·와이너리를 묶은 당일 투어도 있습니다.|About an hour by bus, and day tours combine Schengen and the wineries.'),
  ],
  'ceske-budejovice': [
    a('구시가 (프르셰미슬 오타카르 2세 광장 주변)', 'Old town (Přemysl Otakar II Square)', 'Přemysl Otakar II Square, České Budějovice', '걸어서·당일치기 거점|On foot, day-trip base', '큰 광장 주변에 숙소가 있고 체스키크룸로프·인드르지후프 흐라데츠 당일치기 거점으로 좋습니다.|Hotels around the vast square, a good base for day trips to Český Krumlov and Jindřichův Hradec.'),
  ],
  agrigento: [
    a('구시가 (아테네아 거리 주변)', 'Historic centre (Via Atenea)', 'Via Atenea, Agrigento', '처음이라면·대중교통|First visit, by bus or train', '식당과 버스·기차역이 걸어서 닿습니다. 신전 계곡까지 걸어서 내리막 30분이나 버스로 10분입니다.|Restaurants and the bus and rail stations on foot; the temples are a 30-minute downhill walk or 10 minutes by bus.'),
    a('신전 계곡 언덕', 'Temple ridge', 'Valle dei Templi, Agrigento', '신전 전망|Temple views', '콘코르디아 신전이 보이는 고급 숙소가 있고 입구까지 걸어서 5분이 안 걸립니다. 근처에 식당이 적어 저녁엔 차나 택시가 필요합니다.|Upmarket stays facing the Temple of Concordia, under 5 minutes from the gates; few restaurants nearby, so evenings need a car or taxi.'),
    a('산레오네', 'San Leone', 'San Leone, Agrigento', '해변|Beach', '바닷가 동네로 해변과 스칼라 데이 투르키가 가깝습니다. 신전까지는 매일 차로 오갑니다.|The seaside district near the beach and Scala dei Turchi, with a short drive to the temples each day.'),
  ],
  stirling: [
    a('에든버러·글래스고에서 다녀오기', 'Base in Edinburgh or Glasgow', 'Stirling station', '당일치기|Day trip', '글래스고에서 기차로 30~45분, 에든버러에서 1시간이 안 걸립니다. 성과 월리스 기념탑, 구시가는 하루면 봅니다.|30–45 minutes by train from Glasgow and under an hour from Edinburgh; a day covers the castle, Wallace Monument and old town.'),
    a('스털링 시내', 'Stirling town', 'Stirling Old Town', '느긋하게·하이랜드 거점|Slower pace, Highlands base', '1~2박 하면서 캠버스케네스 수도원, 둔 성, 트로삭스까지 둘러보기 좋습니다.|Stay a night or two to add Cambuskenneth Abbey, Doune Castle or the Trossachs.'),
  ],
  'cala-gonone': [
    a('칼라고노네 마을', 'Cala Gonone village', 'Cala Gonone', '배·해변 거점|Boats and beaches', '보트 투어와 렌털, 식당이 가장 많고 부에 마리노 동굴과 칼라 루나가 가깝습니다. 여름에는 일찍 예약하세요.|The most boat trips, rentals and restaurants, close to Bue Marino and Cala Luna; book early for summer.'),
    a('도르갈리', 'Dorgali', 'Dorgali', '내륙·농가 숙소|Inland, farm stays', '바다 위 내륙 마을로 농가 숙소가 있고 고로푸 협곡·티스칼리와 묶기 좋습니다.|The inland town above the coast, with farm stays, good for adding Gorropu and Tiscali.'),
  ],
  calvi: [
    a('구시가·성채 주변', 'Old town and citadel', 'Citadelle de Calvi', '분위기·전망|Atmosphere, views', '성채와 구시가가 가깝고 해변까지 걸어서 갑니다. 7~8월은 일찍 예약하세요.|Close to the citadel and old town, with the beach walkable; book early for July and August.'),
    a('칼비 해변·항구 쪽', 'Beach and marina', 'Plage de Calvi', '해수욕|Swimming', '만을 따라 이어진 해변 바로 앞이고 항구와 시내까지 걸어서 닿습니다.|Right on the long bay beach, a short walk to the marina and town.'),
  ],
  dijon: [
    a('구시가', 'Old town', 'Dijon centre historique', '처음이라면|First visit', '부르고뉴 공작 궁전, 레알 시장, 올빼미 길, 미술관을 걸어서 다닙니다.|The Palace of the Dukes, Les Halles, the Owl Trail and the fine arts museum on foot.'),
    a('기차역 주변', 'Near the station', 'Dijon Ville station', '기차 이동·가성비|Trains, value', '구시가까지 걸어서 10분이 안 걸립니다.|Under ten minutes’ walk to the old town.'),
  ],
  lugano: [
    a('시내 중심', 'City centre', 'Lugano centro', '처음이라면|First visit', '옛 거리와 상점, 식당, 밤 문화가 모여 있습니다.|Historic streets, shops, restaurants and nightlife.'),
    a('파라디소', 'Paradiso', 'Paradiso, Lugano', '호수 전망|Lake views', '호숫가 호텔이 모여 있고 산살바토레 푸니쿨라가 가깝습니다. 시내까지 걷거나 버스로 잠깐입니다.|Lakeside hotels near the Monte San Salvatore funicular, a short walk or bus ride to the centre.'),
  ],
  'herceg-novi': [
    a('성벽 안 구시가', 'Old town', 'Herceg Novi old town', '분위기|Atmosphere', '볼거리가 걸어서 2분 안에 있습니다. 계단이 많아 짐이 무겁다면 힘들고 성수기에는 자정까지 시끄럽습니다.|Everything within a two-minute walk; lots of steps with luggage and noisy until midnight in season.'),
    a('이갈로', 'Igalo', 'Igalo', '평지·가족 여행|Flat, families', '평지라 아이·짐이 많은 여행에 편하고 중심보다 15~20% 쌉니다.|Flat and easy with children or luggage, and 15–20% cheaper than the centre.'),
  ],
  aalborg: [
    a('시내 중심', 'City centre', 'Aalborg centrum', '처음이라면|First visit', '보행자 거리와 펍·클럽(요므프루 아네 거리), 교통이 모여 있습니다.|Pedestrian streets, pubs and clubs (Jomfru Ane Gade) and good transport links.'),
    a('베스테르브로·중앙역 주변', 'Vesterbro and the station', 'Aalborg Station', '가성비·기차|Value, trains', '시내 서쪽으로 저렴한 호텔·호스텔이 있고 기차 여행에 편합니다.|West of the centre, with budget hotels and hostels, handy for trains.'),
  ],
  subotica: [
    a('시내 중심 (시청·코르소 주변)', 'Centre (City Hall and the Korzo)', 'Subotica City Hall', '걸어서 아르누보 건축|Art Nouveau on foot', '시청과 시나고그 등 주요 볼거리를 걸어서 보고, 해 질 녘 건물이 가장 예쁩니다.|City Hall, the synagogue and the main sights on foot; the buildings glow best at sunset.'),
    a('팔리치 호숫가', 'Lake Palić', 'Palić', '호숫가 휴양|Lakeside', '8~10km 떨어진 호숫가 휴양지로 6번 버스가 30~40분마다 다닙니다.|A lakeside spa resort 8–10 km away, reached by bus 6 every 30–40 minutes.'),
  ],
  tetovo: [
    a('스코페에서 다녀오기', 'Base in Skopje', 'Skopje bus station', '당일치기|Day trip', '50km쯤, 버스로 1시간 조금 넘게 걸려 하루면 채색 모스크와 아라바티 바바 테케를 봅니다.|About 50 km, a little over an hour by bus; a day covers the Painted Mosque and Arabati Baba Teke.'),
    a('테토보 시내 (일린덴스카 거리 주변)', 'Town centre (Ilindenska)', 'Tetovo city centre', '하룻밤·오흐리드 가는 길|Overnight, en route to Ohrid', '시장과 모스크, 식당이 걸어서 닿습니다. 마브로보·오흐리드로 가는 길에 하룻밤 묵기 좋습니다.|The bazaar, mosque and restaurants on foot; a handy overnight on the way to Mavrovo or Ohrid.'),
  ],
  soroca: [
    a('키시너우에서 다녀오기', 'Base in Chișinău', 'Chișinău North Bus Station', '당일치기|Day trip', '북부 버스 터미널에서 버스로 2시간 반~3시간쯤이고, 요새와 집시 언덕은 하루면 봅니다. 버스 정류장에서 요새까지 걸어서 20분쯤입니다.|2.5–3 hours by bus from the North Bus Station; a day covers the fortress and Gypsy Hill. The fortress is about 20 minutes’ walk from the bus stop.'),
  ],
  dilijan: [
    a('옛 거리 (샤람베얀 거리) 주변', 'Around Sharambeyan Street', 'Sharambeyan Street, Dilijan', '옛 마을 분위기|Old-town character', '복원된 옛 거리 근처에 게스트하우스가 모여 있습니다. 비탈이 많아 계단이 있는 숙소도 있습니다.|Guesthouses cluster around the restored old street; hilly, so some rooms are down steps.'),
  ],
  gabala: [
    a('가발라 시내', 'Gabala town', 'Gabala city centre', '가성비·식당|Value, restaurants', '숙소가 싸고 식당이 가깝습니다. 바쿠에서 차로 2~3시간입니다.|Cheaper rooms close to restaurants; 2–3 hours by road from Baku.'),
    a('투판다그 산기슭', 'Tufandag foothills', 'Tufandag, Gabala', '케이블카·스키|Cable car, skiing', '케이블카 역 옆 리조트로 스키·산 풍경에 좋습니다.|Resorts by the cable car, for skiing and mountain views.'),
  ],
  peja: [
    a('시내 중심', 'Town centre', 'Peja city centre', '거점|Base', '강과 산이 보이는 시내 중심에 숙소가 모여 있습니다. 루고바 협곡·데차니 수도원은 차나 택시로 다녀옵니다.|Hotels gather in the centre by the river and mountains; Rugova Canyon and Dečani Monastery need a car or taxi.'),
  ],
  douglas: [
    a('해안 산책로 (로크·센트럴 프롬나드)', 'The Promenade (Loch & Central)', 'Loch Promenade, Douglas', '바다 전망·여객선 터미널 가까움|Sea views, near the ferry', '호텔 대부분이 이 해안 길에 모여 있고 말 트램이 앞을 지납니다.|Most hotels line this seafront, with the horse tram passing outside.'),
  ],
  castletown: [
    a('더글러스에서 다녀오기', 'Base in Douglas', 'Douglas, Isle of Man', '당일치기|Day trip', '증기 철도로 약 35분이라 대부분 더글러스에 묵고 다녀옵니다.|About 35 minutes by steam train, so most visitors stay in Douglas.'),
  ],
  peel: [
    a('필 마을', 'Peel town', 'Peel, Isle of Man', '해변·일몰|Beach and sunsets', '항구 근처에 작은 B&B와 호텔이 있습니다.|Small B&Bs and hotels near the marina.'),
    a('더글러스에서 다녀오기', 'Base in Douglas', 'Douglas, Isle of Man', '숙소 선택이 많음|More choice', '버스로 약 40분이라 당일로 다녀올 수 있습니다.|About 40 minutes by bus, easy as a day trip.'),
  ],
  'st-helier': [
    a('세인트헬리어 시내', 'St Helier town', 'St Helier, Jersey', '선택지·교통|Choice and transport', '숙소가 가장 많고 버스가 모두 여기서 출발합니다. 섬에서 가장 붐비고 시끄럽습니다.|The most places to stay and the hub for every bus; the busiest and noisiest part of the island.'),
    a('세인트오뱅', 'St Aubin', 'St Aubin, Jersey', '항구 마을 분위기·해산물|Harbour village, seafood', '만 건너편의 작은 항구 마을로 카페와 식당이 많습니다.|Little harbour across the bay with cafés and restaurants.'),
    a('세인트브렐라드 만', 'St Brelade’s Bay', 'St Brelade’s Bay, Jersey', '해변|Beach', '섬에서 손꼽히는 해변 앞 숙소들입니다.|Hotels on one of the island’s best beaches.'),
  ],
  gorey: [
    a('고리 항구', 'Gorey Harbour', 'Gorey Pier, Jersey', '성 아래 항구 전망|Harbour views below the castle', '부두를 따라 작은 호텔이 있고 세인트헬리어행 버스가 자주 다닙니다.|Small hotels along the pier, with frequent buses to St Helier.'),
  ],
  'st-peter-port': [
    a('세인트피터포트 시내', 'St Peter Port town', 'St Peter Port, Guernsey', '처음 가는 여행자|First visit', '항구·상점·코넷 성이 가깝고 버스와 배가 모두 여기서 출발합니다. 언덕이 가파릅니다.|Near the harbour, shops and Castle Cornet, and the hub for buses and boats; the streets are steep.'),
  ],
  sark: [
    a('섬 안에서 묵기', 'Stay on Sark', 'Sark', '별빛·고요함|Dark skies and quiet', '숙소가 적어 7~8월에는 일찍 예약해야 합니다.|Few rooms, so book early for July and August.'),
    a('건지에서 다녀오기', 'Base in Guernsey', 'St Peter Port, Guernsey', '당일치기|Day trip', '세인트피터포트에서 배로 35~55분입니다.|35–55 minutes by boat from St Peter Port.'),
  ],
  torshavn: [
    a('토르스하운 시내', 'Central Tórshavn', 'Tórshavn', '거점·식당|Base and restaurants', '식당과 숙소가 가장 많아 섬 곳곳을 다니는 거점으로 좋습니다. 숙소가 적으니 일찍 예약하세요.|The most restaurants and beds, a good base for the islands; book early as rooms are scarce.'),
  ],
  vagar: [
    a('쇠르바구르', 'Sørvágur', 'Sørvágur', '공항 가까움|Near the airport', '공항에서 걸어갈 수 있어 이른 비행기나 늦은 도착에 편합니다.|Walking distance from the airport, handy for early or late flights.'),
  ],
  eysturoy: [
    a('고르브', 'Gjógv', 'Gjógv', '산행·조용한 마을|Hiking, a quiet village', '산행 거점으로 좋지만 토르스하운과 공항에서 차로 약 1시간 걸립니다.|A good hiking base, but about an hour’s drive from Tórshavn and the airport.'),
    a('토르스하운에서 다녀오기', 'Base in Tórshavn', 'Tórshavn', '식당·편의|Dining and convenience', '해저 터널로 이어져 차로 당일에 다녀올 수 있습니다.|Linked by undersea tunnel, easy as a day trip by car.'),
  ],
  nuuk: [
    a('누크 시내', 'Central Nuuk', 'Nuuk centre', '처음 가는 여행자|First visit', '국립 박물관과 옛 항구가 가깝습니다. 와이파이가 비싼 곳이 많습니다.|Close to the National Museum and the old harbour; Wi-Fi is often expensive.'),
  ],
  ilulissat: [
    a('일룰리사트 시내', 'Ilulissat town', 'Ilulissat', '빙산 전망|Iceberg views', '빙하 피오르 쪽을 바라보는 호텔이 많습니다. 성수기에는 일찍 예약하세요.|Many hotels look out over the icefjord; book early in high season.'),
  ],
  kangerlussuaq: [
    a('공항 주변', 'By the airport', 'Kangerlussuaq', '빙상 투어 출발지|Base for ice sheet tours', '마을이 공항 주변에 모여 있고 투어가 여기서 출발합니다. 여름에만 여는 곳이 있습니다.|The settlement clusters round the airport where tours leave; some places open only in summer.'),
  ],
  moscow: [
    a('키타이고로드', 'Kitay-Gorod', 'Kitay-Gorod, Moscow', '처음 가는 여행자|First visit', '붉은 광장과 크렘린 바로 옆이지만 가장 비쌉니다.|Right by Red Square and the Kremlin, but the priciest area.'),
    a('트베르스코이', 'Tverskoy', 'Tverskoy District, Moscow', '활기·식당|Lively, restaurants', '키타이고로드 북쪽의 번화가로 조금 덜 비쌉니다.|The busy, trendy area north of Kitay-Gorod, a little cheaper.'),
    a('아르바트', 'Arbat', 'Arbat, Moscow', '보행자 거리·쇼핑|Pedestrian street, shopping', '크렘린 서쪽, 상점과 식당이 많은 보행자 거리 주변입니다.|West of the Kremlin around the pedestrian street of shops and restaurants.'),
  ],
  'saint-petersburg': [
    a('중앙구 (넵스키 대로)', 'Tsentralny (Nevsky Prospekt)', 'Nevsky Prospekt, Saint Petersburg', '처음 가는 여행자|First visit', '에르미타주와 넵스키 대로가 걸어서 가깝고 식당과 상점이 많습니다.|The Hermitage and Nevsky Prospekt on foot, with plenty of restaurants and shops.'),
    a('아드미랄테이스키', 'Admiralteysky', 'Admiralteysky District, Saint Petersburg', '성 이삭 대성당·마린스키 극장|St Isaac’s and the Mariinsky', '중앙구 바로 옆으로 조금 더 조용합니다.|Next to Tsentralny and a little quieter.'),
  ],
  kazan: [
    a('바우만 거리·크렘린 주변', 'Bauman Street and the Kremlin', 'Bauman Street, Kazan', '걸어서 관광|Sights on foot', '관광지 대부분을 걸어서 갑니다. 주말과 휴일에는 값이 오르니 미리 예약하세요.|Most sights within walking distance; prices rise at weekends and holidays, so book ahead.'),
  ],
  suzdal: [
    a('수즈달 마을에서 묵기', 'Stay in Suzdal', 'Suzdal', '옛 마을 분위기|Old-town atmosphere', '게스트하우스가 많고, 하루 묵으며 블라디미르와 함께 보기를 권합니다. 버스터미널은 중심에서 1.5km 떨어져 있습니다.|Plenty of guesthouses; staying the night, combined with Vladimir, is recommended. The bus station is 1.5 km from the centre.'),
  ],
  vladivostok: [
    a('시내 중심 (기차역·금각만 주변)', 'City centre (station and Golden Horn)', 'Vladivostok railway station', '걸어서 관광·교통|Sights on foot, transport', '기차역과 아르바트 거리, 해안이 가깝습니다. 중심에서 먼 숙소는 식당까지 택시가 필요할 수 있습니다.|Close to the station, the Arbat and the waterfront; places further out may need taxis to restaurants.'),
  ],
  khabarovsk: [
    a('시내 중심 (아무르강 강변 근처)', 'City centre (near the Amur embankment)', 'Muravyov-Amursky Street, Khabarovsk', '강변 산책|Riverside walks', '중심 거리와 강변 공원이 걸어서 가깝습니다.|The main street and riverside park are within walking distance.'),
  ],
  irkutsk: [
    a('이르쿠츠크 시내 (키로프 광장 주변)', 'Central Irkutsk (around Kirov Square)', 'Kirov Square, Irkutsk', '식당·거점|Dining and a base', '시내 관광과 식당이 편하고 바이칼 호수는 당일로 다녀옵니다.|Best for the city and restaurants; Lake Baikal as a day trip.'),
    a('리스트뱐카', 'Listvyanka', 'Listvyanka', '바이칼 호숫가|On Lake Baikal', '호수에서 묵고 싶을 때 좋지만 마을 중심에 걸어갈 수 있는 숙소가 적습니다.|For a night by the lake, though few places are within walking distance of the village centre.'),
  ],
  kyrenia: [
    a('키레니아 항구 주변', 'Around Kyrenia Harbour', 'Kyrenia Harbour', '카페·바다 전망|Cafés and sea views', '옛 시가와 항구가 걸어서 가까워 가장 많이 묵는 곳입니다.|The old town and harbour on foot—the most popular base.'),
  ],
}

export function getStayAreas(cityId: string): StayArea[] | undefined {
  return STAY[cityId]
}
