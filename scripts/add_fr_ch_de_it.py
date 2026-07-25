#!/usr/bin/env python3
"""Generate France / Switzerland / Germany / Italy catalog data and flag assets."""

from __future__ import annotations

from pathlib import Path
from urllib.parse import quote

ROOT = Path(__file__).resolve().parents[1]
DATA = ROOT / "src" / "data"
FLAGS = ROOT / "public" / "flags"


def esc(s: str) -> str:
    return s.replace("\\", "\\\\").replace("'", "\\'")


def highlight(city: str, n: int, ko: str, en: str, dko: str, den: str, query: str) -> str:
    q = quote(query)
    return f"""      {{
        id: "{city}-h{n}",
        name: {{ ko: "{ko}", en: "{en}" }},
        description: {{ ko: "{dko}", en: "{den}" }},
        image: "/highlights/{city}-{n}.jpg",
        mapsUrl: "https://www.google.com/maps/search/?api=1&query={q}",
      }}"""


CITIES = [
    # —— France ——
    {
        "id": "paris",
        "countryId": "fr",
        "ko": "파리",
        "en": "Paris",
        "native": "Paris",
        "blurb_ko": "예술과 미식의 수도. 박물관·카페·패션이 도시 전체를 채웁니다.",
        "blurb_en": "Capital of art and dining—museums, cafés, and fashion everywhere.",
        "highlights": [
            ("에펠탑", "Eiffel Tower", "파리의 상징인 철제 타워입니다.", "Iron tower and city icon.", "Eiffel Tower Paris"),
            ("루브르 박물관", "Louvre Museum", "모나리자를 포함한 세계적 미술관입니다.", "World museum home to the Mona Lisa.", "Louvre Museum"),
            ("노트르담 대성당", "Notre-Dame", "시테 섬의 고딕 대성당입니다.", "Gothic cathedral on Île de la Cité.", "Notre Dame Paris"),
            ("몽마르트르", "Montmartre", "사크레쾨르와 예술가 거리입니다.", "Sacré-Cœur and artist streets.", "Montmartre Paris"),
            ("센 강 유람", "Seine River", "강변 산책과 유람선 코스입니다.", "Riverside walks and boat cruises.", "Seine River Paris"),
            ("개선문", "Arc de Triomphe", "샹젤리제 끝의 개선문입니다.", "Triumphal arch at the top of the Champs-Élysées.", "Arc de Triomphe Paris"),
        ],
    },
    {
        "id": "lyon",
        "countryId": "fr",
        "ko": "리옹",
        "en": "Lyon",
        "native": "Lyon",
        "blurb_ko": "프랑스 미식의 심장. 구시가와 보퀴즈 전통이 유명합니다.",
        "blurb_en": "France’s gastronomic heart—old town and Bocuse tradition.",
        "highlights": [
            ("비외 리옹", "Vieux Lyon", "르네상스 골목과 트라부일입니다.", "Renaissance lanes and traboules.", "Vieux Lyon"),
            ("푸르비에르 대성당", "Basilica of Notre-Dame de Fourvière", "언덕 위 전망 성당입니다.", "Hilltop basilica with city views.", "Fourvière Lyon"),
            ("프레퀴 광장", "Place Bellecour", "도시 중심의 넓은 광장입니다.", "Vast central square.", "Place Bellecour"),
            ("콩플뤼앙스", "Confluence", "현대 건축과 강 합류 지구입니다.", "Modern architecture at the river confluence.", "Confluence Lyon"),
            ("폴 보퀴즈 시장", "Halles de Lyon Paul Bocuse", "미식 시장 홀입니다.", "Gourmet food market hall.", "Halles de Lyon Paul Bocuse"),
        ],
    },
    {
        "id": "marseille",
        "countryId": "fr",
        "ko": "마르세유",
        "en": "Marseille",
        "native": "Marseille",
        "blurb_ko": "지중해 항구 도시. 부야베스와 카랑크 해안이 매력입니다.",
        "blurb_en": "Mediterranean port city—bouillabaisse and Calanques coast.",
        "highlights": [
            ("구항구", "Vieux-Port", "카페가 늘어선 오래된 항구입니다.", "Historic harbour lined with cafés.", "Vieux-Port Marseille"),
            ("노트르담 드 라 가르드", "Notre-Dame de la Garde", "도시를 내려다보는 성당입니다.", "Basilica overlooking the city.", "Notre-Dame de la Garde"),
            ("뮤셈", "MuCEM", "현대 박물관과 해안 산책로입니다.", "Modern museum and waterfront walks.", "MuCEM Marseille"),
            ("카랑크 국립공원", "Calanques", "석회암 절벽과 터키석 바다입니다.", "Limestone cliffs and turquoise water.", "Calanques Marseille"),
            ("르 파니에", "Le Panier", "알록달록 골목의 구시가입니다.", "Colourful old-town alleys.", "Le Panier Marseille"),
        ],
    },
    {
        "id": "nice",
        "countryId": "fr",
        "ko": "니스",
        "en": "Nice",
        "native": "Nice",
        "blurb_ko": "코트다쥐르의 중심. 프롬나드와 구시가 맛집이 유명합니다.",
        "blurb_en": "Côte d’Azur hub—promenade and old-town dining.",
        "highlights": [
            ("영국인 산책로", "Promenade des Anglais", "바다를 따라 이어지는 산책로입니다.", "Seafront promenade.", "Promenade des Anglais"),
            ("비유 니스", "Vieux Nice", "시장과 좁은 골목 구시가입니다.", "Market streets and old-town lanes.", "Vieux Nice"),
            ("성 언덕", "Colline du Château", "항구·바다가 보이는 전망 언덕입니다.", "Hilltop views over harbour and sea.", "Colline du Château Nice"),
            ("쿠르 살레야", "Cours Saleya", "꽃·먹거리 시장 거리입니다.", "Flower and food market street.", "Cours Saleya Nice"),
            ("니스 미술관", "Musée des Beaux-Arts", "지역 미술 컬렉션입니다.", "Regional fine-art collections.", "Musée des Beaux-Arts Nice"),
        ],
    },
    {
        "id": "bordeaux",
        "countryId": "fr",
        "ko": "보르도",
        "en": "Bordeaux",
        "native": "Bordeaux",
        "blurb_ko": "와인과 석회암 건축의 도시. 가르론 강변 산책이 아름답습니다.",
        "blurb_en": "Wine and limestone architecture along the Garonne.",
        "highlights": [
            ("물거울", "Miroir d'eau", "광장 앞 반사 수면입니다.", "Reflecting water mirror by the square.", "Miroir d'eau Bordeaux"),
            ("대극장", "Grand Théâtre", "신고전주의 오페라 하우스입니다.", "Neoclassical opera house.", "Grand Théâtre Bordeaux"),
            ("생트카트린 거리", "Rue Sainte-Catherine", "긴 보행자 쇼핑 거리입니다.", "Long pedestrian shopping street.", "Rue Sainte-Catherine Bordeaux"),
            ("시테 뒤 뱅", "Cité du Vin", "와인 문화 박물관입니다.", "Wine culture museum.", "Cité du Vin"),
            ("샤르트롱", "Chartrons", "강변 창고·카페 지구입니다.", "Riverside warehouse and café district.", "Chartrons Bordeaux"),
        ],
    },
    # —— Switzerland ——
    {
        "id": "zurich",
        "countryId": "ch",
        "ko": "취리히",
        "en": "Zurich",
        "native": "Zürich",
        "blurb_ko": "스위스 최대 도시. 호수·구시가·박물관이 균형 잡혀 있습니다.",
        "blurb_en": "Switzerland’s largest city—lake, old town, and museums.",
        "highlights": [
            ("리마트 강변", "Limmatquai", "구시가와 이어지는 강변 산책로입니다.", "Old-town riverside promenade.", "Limmatquai Zurich"),
            ("그로스뮌스터", "Grossmünster", "쌍둥이 탑의 로마네스크 성당입니다.", "Twin-tower Romanesque church.", "Grossmünster Zurich"),
            ("린덴호프", "Lindenhof", "구시가를 내려다보는 언덕 공원입니다.", "Hill park overlooking the old town.", "Lindenhof Zurich"),
            ("취리히 호수", "Lake Zurich", "유람선과 호숫가 산책로입니다.", "Boat rides and lakeside walks.", "Lake Zurich"),
            ("미술관", "Kunsthaus Zürich", "스위스 대표 미술관입니다.", "Leading Swiss art museum.", "Kunsthaus Zürich"),
            ("반호프슈트라세", "Bahnhofstrasse", "럭셔리 쇼핑 거리입니다.", "Luxury shopping avenue.", "Bahnhofstrasse Zurich"),
        ],
    },
    {
        "id": "geneva",
        "countryId": "ch",
        "ko": "제네바",
        "en": "Geneva",
        "native": "Genève",
        "blurb_ko": "국제기구와 레만 호수의 도시. 제트도일과 구시가가 상징입니다.",
        "blurb_en": "International city on Lake Geneva—Jet d’Eau and old town.",
        "highlights": [
            ("제트도일", "Jet d'Eau", "호수 위 거대한 분수입니다.", "Iconic water jet on the lake.", "Jet d'Eau Geneva"),
            ("구시가", "Old Town", "대성당과 골목 카페입니다.", "Cathedral lanes and cafés.", "Geneva Old Town"),
            ("생피에르 대성당", "St Pierre Cathedral", "전망 탑이 있는 대성당입니다.", "Cathedral with a view tower.", "St Pierre Cathedral Geneva"),
            ("유엔 유럽본부", "Palais des Nations", "국제기구 단지입니다.", "UN European headquarters.", "Palais des Nations"),
            ("플라주", "Lake Geneva promenade", "호숫가 공원과 산책로입니다.", "Lakeside parks and promenades.", "Quai du Mont-Blanc"),
        ],
    },
    {
        "id": "bern",
        "countryId": "ch",
        "ko": "베른",
        "en": "Bern",
        "native": "Bern",
        "blurb_ko": "스위스 수도. 유네스코 구시가와 아레 강 전망이 인상적입니다.",
        "blurb_en": "Swiss capital—UNESCO old town above the Aare.",
        "highlights": [
            ("시계탑", "Zytglogge", "중세 시계탑과 인형 쇼입니다.", "Medieval clock tower and automaton.", "Zytglogge Bern"),
            ("구시가 아케이드", "Old Town arcades", "지붕 달린 쇼핑 회랑입니다.", "Covered shopping arcades.", "Bern Old Town"),
            ("곰 공원", "Bärengraben", "도시 상징 곰을 볼 수 있는 공원입니다.", "Bear park and city symbol.", "Bärengraben Bern"),
            ("연방의회", "Bundeshaus", "스위스 국회 건물입니다.", "Swiss parliament building.", "Bundeshaus Bern"),
            ("아레 강 산책", "Aare riverside", "에메랄드빛 강변 산책로입니다.", "Emerald riverside walks.", "Aare Bern"),
        ],
    },
    {
        "id": "lucerne",
        "countryId": "ch",
        "ko": "루체른",
        "en": "Lucerne",
        "native": "Luzern",
        "blurb_ko": "호수와 산이 만나는 관광 도시. 카펠교가 상징입니다.",
        "blurb_en": "Lake-and-mountain tourism city—Chapel Bridge is the icon.",
        "highlights": [
            ("카펠교", "Chapel Bridge", "꽃과 벽화가 있는 나무 다리입니다.", "Flowered wooden covered bridge.", "Kapellbrücke Lucerne"),
            ("호수 유람", "Lake Lucerne", "필라투스·리기로 가는 호수 유람입니다.", "Lake cruises toward Pilatus and Rigi.", "Lake Lucerne"),
            ("사자상", "Lion Monument", "바위에 새긴 사자 기념비입니다.", "Lion carved into the cliff.", "Lion Monument Lucerne"),
            ("구시가", "Old Town", "벽화 건물과 광장입니다.", "Painted façades and squares.", "Lucerne Old Town"),
            ("교통박물관", "Swiss Museum of Transport", "기차·자동차 체험 박물관입니다.", "Trains, cars, and interactive exhibits.", "Verkehrshaus Lucerne"),
        ],
    },
    {
        "id": "interlaken",
        "countryId": "ch",
        "ko": "인터라켄",
        "en": "Interlaken",
        "native": "Interlaken",
        "blurb_ko": "두 호수 사이의 알프스 관문. 융프라우 접근의 거점입니다.",
        "blurb_en": "Alpine gateway between two lakes—base for Jungfrau trips.",
        "highlights": [
            ("회에베크", "Höheweg", "호텔과 공원이 늘어선 메인 거리입니다.", "Main avenue of hotels and parks.", "Höheweg Interlaken"),
            ("툰 호수", "Lake Thun", "서쪽 호수 유람·산책입니다.", "Western lake cruises and walks.", "Lake Thun"),
            ("브리엔츠 호수", "Lake Brienz", "터키석빛 동쪽 호수입니다.", "Turquoise eastern lake.", "Lake Brienz"),
            ("하르더 쿨름", "Harder Kulm", "케이블카로 오르는 전망대입니다.", "Cable-car viewpoint above town.", "Harder Kulm"),
            ("융프라우요흐 출발", "Jungfraujoch gateway", "산악열차 투어의 출발 거점입니다.", "Base for Jungfraujoch mountain trains.", "Interlaken Ost"),
        ],
    },
    # —— Germany ——
    {
        "id": "berlin",
        "countryId": "de",
        "ko": "베를린",
        "en": "Berlin",
        "native": "Berlin",
        "blurb_ko": "역사와 현대가 공존하는 수도. 박물관·클럽·거리 문화가 풍부합니다.",
        "blurb_en": "Capital where history meets the present—museums and street culture.",
        "highlights": [
            ("브란덴부르크 문", "Brandenburg Gate", "독일 통일의 상징 문입니다.", "Symbol of German unity.", "Brandenburg Gate"),
            ("박물관 섬", "Museum Island", "세계적 박물관이 모인 섬입니다.", "Cluster of world-class museums.", "Museum Island Berlin"),
            ("베를린 장벽 기념관", "East Side Gallery", "장벽에 그린 야외 갤러리입니다.", "Open-air gallery on the Wall.", "East Side Gallery"),
            ("의회 돔", "Reichstag Dome", "유리 돔 전망대입니다.", "Glass dome viewpoint.", "Reichstag Berlin"),
            ("체크포인트 찰리", "Checkpoint Charlie", "냉전 시대 검문소 유적입니다.", "Cold War checkpoint site.", "Checkpoint Charlie"),
            ("티어가르텐", "Tiergarten", "도심 대형 공원입니다.", "Central city park.", "Tiergarten Berlin"),
        ],
    },
    {
        "id": "munich",
        "countryId": "de",
        "ko": "뮌헨",
        "en": "Munich",
        "native": "München",
        "blurb_ko": "바이에른의 수도. 맥주홀·알프스 접근·미술관이 매력입니다.",
        "blurb_en": "Bavarian capital—beer halls, Alpine access, and museums.",
        "highlights": [
            ("마리엔광장", "Marienplatz", "신시청과 시계인형이 있는 중심 광장입니다.", "New Town Hall and Glockenspiel square.", "Marienplatz Munich"),
            ("영국식 정원", "English Garden", "도심 속 거대한 공원입니다.", "Vast urban park.", "Englischer Garten"),
            ("님펜부르크 궁전", "Nymphenburg Palace", "바로크 궁전과 정원입니다.", "Baroque palace and gardens.", "Nymphenburg Palace"),
            ("피나코테크", "Pinakothek", "세계적 미술 컬렉션입니다.", "World-class art collections.", "Alte Pinakothek"),
            ("호프브로이하우스", "Hofbräuhaus", "상징적인 맥주홀입니다.", "Iconic beer hall.", "Hofbräuhaus Munich"),
        ],
    },
    {
        "id": "hamburg",
        "countryId": "de",
        "ko": "함부르크",
        "en": "Hamburg",
        "native": "Hamburg",
        "blurb_ko": "항구와 창고 지구의 도시. 엘베 강과 현대 건축이 인상적입니다.",
        "blurb_en": "Port city of warehouses—Elbe river and modern architecture.",
        "highlights": [
            ("창고 지구", "Speicherstadt", "유네스코 붉은 벽돌 창고촌입니다.", "UNESCO red-brick warehouse quarter.", "Speicherstadt"),
            ("엘브필하모니", "Elbphilharmonie", "항구 위 콘서트홀입니다.", "Concert hall on the harbour.", "Elbphilharmonie"),
            ("미니아투어 원더랜드", "Miniatur Wunderland", "세계 최대급 미니어처 박물관입니다.", "Huge miniature wonderland.", "Miniatur Wunderland"),
            ("알스터 호수", "Alster Lakes", "도심 호수 유람·산책입니다.", "Inner-city lake walks and boats.", "Binnenalster"),
            ("레퍼반", "Reeperbahn", "성파울리의 밤문화 거리입니다.", "St. Pauli nightlife street.", "Reeperbahn Hamburg"),
        ],
    },
    {
        "id": "cologne",
        "countryId": "de",
        "ko": "쾰른",
        "en": "Cologne",
        "native": "Köln",
        "blurb_ko": "라인 강변의 대성당 도시. 카니발과 박물관이 유명합니다.",
        "blurb_en": "Rhine cathedral city—carnival and museums.",
        "highlights": [
            ("쾰른 대성당", "Cologne Cathedral", "고딕 대성당의 상징입니다.", "Iconic Gothic cathedral.", "Cologne Cathedral"),
            ("구시가", "Old Town", "맥주집과 강변 골목입니다.", "Beer halls and riverside lanes.", "Cologne Altstadt"),
            ("호엔촐레른 다리", "Hohenzollern Bridge", "자물쇠와 열차가 있는 다리입니다.", "Love-lock railway bridge.", "Hohenzollern Bridge"),
            ("로마·게르만 박물관", "Roman-Germanic Museum", "로마 유적 박물관입니다.", "Museum of Roman finds.", "Römisch-Germanisches Museum"),
            ("라인 유람", "Rhine promenade", "강변 산책과 유람선입니다.", "Riverside walks and cruises.", "Rheinpromenade Cologne"),
        ],
    },
    {
        "id": "frankfurt",
        "countryId": "de",
        "ko": "프랑크푸르트",
        "en": "Frankfurt",
        "native": "Frankfurt am Main",
        "blurb_ko": "금융과 스카이라인이 있는 도시. 구시가와 박물관 강변이 공존합니다.",
        "blurb_en": "Finance skyline city—old town and museum embankment.",
        "highlights": [
            ("뢰머베르크", "Römerberg", "반원형 구시가 광장입니다.", "Half-timbered old-town square.", "Römerberg Frankfurt"),
            ("마인탑", "Main Tower", "스카이라인 전망대입니다.", "Skyline observation deck.", "Main Tower Frankfurt"),
            ("박물관 강변", "Museumsufer", "마인 강변 박물관 거리입니다.", "Museums along the Main.", "Museumsufer Frankfurt"),
            ("팔멘가르텐", "Palmengarten", "대형 식물원입니다.", "Large botanical garden.", "Palmengarten Frankfurt"),
            ("작센하우젠", "Sachsenhausen", "아펠바인 선술집 지구입니다.", "Apfelwein tavern district.", "Sachsenhausen Frankfurt"),
        ],
    },
    # —— Italy ——
    {
        "id": "rome",
        "countryId": "it",
        "ko": "로마",
        "en": "Rome",
        "native": "Roma",
        "blurb_ko": "영원한 도시. 고대 유적과 바로크 광장·파스타가 가득합니다.",
        "blurb_en": "The Eternal City—ruins, Baroque piazzas, and pasta.",
        "highlights": [
            ("콜로세움", "Colosseum", "고대 원형 경기장입니다.", "Ancient amphitheatre.", "Colosseum Rome"),
            ("바티칸 박물관", "Vatican Museums", "시스티나 성당을 포함한 박물관입니다.", "Museums including the Sistine Chapel.", "Vatican Museums"),
            ("트레비 분수", "Trevi Fountain", "동전을 던지는 바로크 분수입니다.", "Baroque fountain for coin tosses.", "Trevi Fountain"),
            ("판테온", "Pantheon", "돔이 인상적인 고대 신전입니다.", "Ancient temple with a vast dome.", "Pantheon Rome"),
            ("스페인 광장", "Spanish Steps", "트리니타 데이 몬티로 오르는 계단입니다.", "Steps up to Trinità dei Monti.", "Spanish Steps Rome"),
            ("포로 로마노", "Roman Forum", "고대 로마의 중심 유적입니다.", "Heart of ancient Rome.", "Roman Forum"),
        ],
    },
    {
        "id": "milan",
        "countryId": "it",
        "ko": "밀라노",
        "en": "Milan",
        "native": "Milano",
        "blurb_ko": "패션과 디자인의 수도. 두오모와 아페ritivo 문화가 유명합니다.",
        "blurb_en": "Fashion and design capital—Duomo and aperitivo culture.",
        "highlights": [
            ("두오모", "Duomo di Milano", "고딕 대성당과 옥상 테라스입니다.", "Gothic cathedral and rooftop terraces.", "Duomo Milan"),
            ("갈레리아", "Galleria Vittorio Emanuele II", "유리 아케이드 쇼핑 갤러리입니다.", "Glass shopping arcade.", "Galleria Vittorio Emanuele II"),
            ("스포르체스코 성", "Sforza Castle", "공원과 박물관이 있는 성입니다.", "Castle with museums and park.", "Sforza Castle"),
            ("나비가리 운하", "Navigli", "운하변 아페리티보 지구입니다.", "Canal-side aperitivo district.", "Navigli Milan"),
            ("브레라", "Brera", "미술관과 부티크 골목입니다.", "Art gallery and boutique lanes.", "Brera Milan"),
        ],
    },
    {
        "id": "florence",
        "countryId": "it",
        "ko": "피렌체",
        "en": "Florence",
        "native": "Firenze",
        "blurb_ko": "르네상스의 요람. 우피치와 두오모가 도시 중심입니다.",
        "blurb_en": "Cradle of the Renaissance—Uffizi and the Duomo.",
        "highlights": [
            ("두오모", "Cathedral of Santa Maria del Fiore", "브루넬레스키 돔의 대성당입니다.", "Cathedral with Brunelleschi’s dome.", "Florence Duomo"),
            ("우피치 미술관", "Uffizi Gallery", "르네상스 걸작 컬렉션입니다.", "Renaissance masterpieces.", "Uffizi Gallery"),
            ("폰테 베키오", "Ponte Vecchio", "금은방이 늘어선 다리입니다.", "Bridge lined with goldsmiths.", "Ponte Vecchio"),
            ("미켈란젤로 광장", "Piazzale Michelangelo", "도시 전경 전망 포인트입니다.", "Classic city panorama.", "Piazzale Michelangelo"),
            ("아카데미아", "Accademia Gallery", "다비드 상이 있는 미술관입니다.", "Home of Michelangelo’s David.", "Accademia Gallery Florence"),
        ],
    },
    {
        "id": "venice",
        "countryId": "it",
        "ko": "베네치아",
        "en": "Venice",
        "native": "Venezia",
        "blurb_ko": "운하의 도시. 산마르코와 곤돌라가 상징입니다.",
        "blurb_en": "City of canals—St Mark’s and gondolas.",
        "highlights": [
            ("산마르코 광장", "St Mark's Square", "대성당과 종탑이 있는 광장입니다.", "Basilica and campanile square.", "Piazza San Marco"),
            ("리알토 다리", "Rialto Bridge", "대운하의 상징 다리입니다.", "Iconic Grand Canal bridge.", "Rialto Bridge"),
            ("대운하", "Grand Canal", "곤돌라·바포레토 유람입니다.", "Gondola and vaporetto routes.", "Grand Canal Venice"),
            ("도지 궁전", "Doge's Palace", "베네치아 공화국 궁전입니다.", "Palace of the Venetian Republic.", "Doge's Palace Venice"),
            ("부라노", "Burano", "알록달록 집의 섬입니다.", "Island of colourful houses.", "Burano Venice"),
        ],
    },
    {
        "id": "naples",
        "countryId": "it",
        "ko": "나폴리",
        "en": "Naples",
        "native": "Napoli",
        "blurb_ko": "피자와 베수비오의 도시. 옛 시가지와 해안 전망이 강렬합니다.",
        "blurb_en": "Pizza and Vesuvius—raw historic centre and bay views.",
        "highlights": [
            ("스파카나폴리", "Spaccanapoli", "구시가를 가로지르는 중심 거리입니다.", "Spine street through the historic centre.", "Spaccanapoli"),
            ("나폴리 국립고고학박물관", "National Archaeological Museum", "폼페이 유물 박물관입니다.", "Museum of Pompeii finds.", "Naples Archaeological Museum"),
            ("카스텔 델로보", "Castel dell'Ovo", "해안 성곽과 전망입니다.", "Waterfront castle views.", "Castel dell'Ovo"),
            ("베수비오 전망", "Mount Vesuvius views", "만과 화산이 보이는 포인트입니다.", "Bay and volcano viewpoints.", "Vesuvius Naples"),
            ("산타루치아", "Lungomare", "해안 산책로입니다.", "Seafront promenade.", "Lungomare Naples"),
        ],
    },
]


def city_block(c: dict) -> str:
    hs = [highlight(c["id"], i, *h) for i, h in enumerate(c["highlights"], 1)]
    return f"""  {{
    id: "{c['id']}",
    countryId: "{c['countryId']}",
    signatureImage: "/cities/{c['id']}.jpg",
    name: {{ ko: "{c['ko']}", en: "{c['en']}" }},
    nativeName: "{c['native']}",
    blurb: {{
      ko: "{c['blurb_ko']}",
      en: "{c['blurb_en']}",
    }},
    highlights: [
{",\n".join(hs)}
    ],
  }}"""


def write_cities_append() -> None:
    path = DATA / "cities.ts"
    text = path.read_text(encoding="utf-8")
    if 'countryId: "fr"' in text:
        print("cities already contain fr — skip")
        return
    marker = "\n]\n\nexport function getCity"
    blocks = ",\n".join(city_block(c) for c in CITIES)
    if marker not in text:
        raise SystemExit("cities.ts marker not found")
    # last city ends with `}` (no trailing comma) — insert `,\n` + blocks before `]`
    text = text.replace(marker, ",\n" + blocks + marker, 1)
    path.write_text(text, encoding="utf-8")
    print(f"appended {len(CITIES)} cities")


def place_line(city: str, cat: str, i: int, name: str, rating: float, addr: str, ko: str, en: str, reviews: int) -> str:
    return (
        f"  place('{city}-{cat}-{i}', '{city}', '{cat}', '{esc(name)}', {rating}, "
        f"'{esc(addr)}', '{esc(ko)}', '{esc(en)}', {{ reviewCount: {reviews} }}),"
    )


EXPORT = {"fr": "placesFRExtra", "ch": "placesCHExtra", "de": "placesDEExtra", "it": "placesITExtra"}


def generic_dining(city_label: str) -> dict:
    return {
        "fine_dining": [
            (f"{city_label} Fine Dining 1", 4.5, city_label, "시즌 코스 파인 다이닝.", "Seasonal fine dining.", 640),
            (f"{city_label} Fine Dining 2", 4.4, city_label, "모던 로컬 다이닝.", "Modern local dining.", 520),
            (f"{city_label} Fine Dining 3", 4.3, city_label, "클래식 다이닝.", "Classic dining.", 480),
            (f"{city_label} Bistro", 4.3, city_label, "캐주얼 파인 비스트로.", "Casual fine bistro.", 700),
            (f"{city_label} Chef's Table", 4.4, city_label, "셰프 테이블.", "Chef’s table.", 390),
        ],
        "bakery": [
            (f"{city_label} Bakery", 4.5, city_label, "빵·페이스트리.", "Bread and pastries.", 900),
            (f"{city_label} Patisserie", 4.4, city_label, "페이스트리 숍.", "Pastry shop.", 720),
            (f"{city_label} Bread House", 4.3, city_label, "로컬 빵집.", "Local bakery.", 580),
            (f"Café Bakery {city_label}", 4.3, city_label, "베이커리 카페.", "Bakery café.", 640),
        ],
        "cafe": [
            (f"Specialty Coffee {city_label}", 4.5, city_label, "스페셜티 커피.", "Specialty coffee.", 1100),
            (f"Old Town Café {city_label}", 4.4, city_label, "구시가 카페.", "Old-town café.", 980),
            (f"Brunch Café {city_label}", 4.3, city_label, "브런치 카페.", "Brunch café.", 860),
            (f"Espresso Bar {city_label}", 4.3, city_label, "에스프레소 바.", "Espresso bar.", 720),
        ],
        "korean": [
            (f"Korean Kitchen {city_label}", 4.4, city_label, "캐주얼 한식.", "Casual Korean.", 640),
            (f"Bibimbap {city_label}", 4.3, city_label, "비빔밥·덮밥.", "Bibimbap bowls.", 520),
            (f"Korean BBQ {city_label}", 4.3, city_label, "고기구이.", "Korean BBQ.", 480),
            (f"Kimchi House {city_label}", 4.2, city_label, "김치·반찬 중심.", "Kimchi-focused Korean.", 390),
        ],
    }


CURATED = {
    "paris": {
        "fine_dining": [
            ("Arpège", 4.7, "Paris", "미슐랭 채소 중심 파인 다이닝.", "Michelin vegetable-focused fine dining.", 1800),
            ("Le Comptoir du Relais", 4.5, "Paris", "비스트로 클래식.", "Classic bistro.", 4200),
            ("Septime", 4.6, "Paris", "모던 프렌치 코스.", "Modern French tasting.", 2100),
            ("Bouillon Chartier", 4.3, "Paris", "전통 부용 식당.", "Historic bouillon canteen.", 18000),
            ("L'Ami Jean", 4.5, "Paris", "바스크 감성 비스트로.", "Basque-spirited bistro.", 3200),
        ],
        "bakery": [
            ("Du Pain et des Idées", 4.6, "Paris", "유명 사워도우·페이스트리.", "Famous sourdough and pastries.", 4800),
            ("Poilâne", 4.5, "Paris", "상징적 빵집.", "Iconic bakery.", 5600),
            ("Stohrer", 4.5, "Paris", "역사적 파티스리.", "Historic pâtisserie.", 3900),
            ("Blé Sucré", 4.6, "Paris", "크루아상·타르트.", "Croissants and tarts.", 2800),
        ],
        "cafe": [
            ("Café de Flore", 4.3, "Paris", "생제르맹 클래식 카페.", "Classic Saint-Germain café.", 16000),
            ("Beans on Fire", 4.5, "Paris", "스페셜티 커피.", "Specialty coffee.", 1400),
            ("Coutume Café", 4.5, "Paris", "로스터리 카페.", "Roastery café.", 2100),
            ("Café Kitsuné", 4.4, "Paris", "트렌디 카페.", "Trendy café.", 2600),
        ],
        "korean": [
            ("Restaurant Coreén Paris", 4.4, "Paris", "캐주얼 한식.", "Casual Korean.", 1200),
            ("Bibimbap Paris", 4.3, "Paris", "비빔밥.", "Bibimbap.", 900),
            ("Korean BBQ Paris", 4.3, "Paris", "고기구이.", "Korean BBQ.", 1100),
            ("Kimchi Paris", 4.2, "Paris", "김치·반찬.", "Kimchi-focused.", 700),
        ],
    },
    "zurich": {
        "fine_dining": [
            ("Restaurant Bindella", 4.5, "Zurich", "이탈리안·스위스 파인.", "Italian-Swiss fine dining.", 1600),
            ("Kronenhalle", 4.5, "Zurich", "클래식 취리히 다이닝.", "Classic Zurich dining.", 4200),
            ("Maison Manesse", 4.6, "Zurich", "모던 시즌 코스.", "Modern seasonal tasting.", 980),
            ("Zeughauskeller", 4.4, "Zurich", "전통 스위스 요리.", "Traditional Swiss.", 6800),
            ("Hiltl", 4.4, "Zurich", "채식 다이닝 클래식.", "Classic vegetarian dining.", 5200),
        ],
        "bakery": [
            ("Confiserie Sprüngli", 4.5, "Zurich", "초콜릿·페이스트리.", "Chocolate and pastries.", 8600),
            ("Bachmann", 4.4, "Zurich", "빵·페이스트리.", "Bread and pastries.", 2100),
            ("Markthalle bakery counters", 4.3, "Zurich", "마켓 베이커리.", "Market bakeries.", 1200),
            ("Bäckerei Conditorei local", 4.3, "Zurich", "로컬 빵집.", "Local bakery.", 900),
        ],
        "cafe": [
            ("Café Schober", 4.4, "Zurich", "클래식 카페.", "Classic café.", 3200),
            ("Milchbar", 4.5, "Zurich", "스페셜티 커피.", "Specialty coffee.", 1800),
            ("Balthasar / specialty peers", 4.5, "Zurich", "스페셜티.", "Specialty coffee.", 1400),
            ("Café Sprüngli", 4.4, "Zurich", "페이스트리 카페.", "Pastry café.", 5400),
        ],
        "korean": [
            ("Korean Kitchen Zurich", 4.4, "Zurich", "캐주얼 한식.", "Casual Korean.", 800),
            ("Bibimbap Zurich", 4.3, "Zurich", "비빔밥.", "Bibimbap.", 620),
            ("Korean BBQ Zurich", 4.3, "Zurich", "고기구이.", "Korean BBQ.", 700),
            ("Kimchi Zurich", 4.2, "Zurich", "김치·반찬.", "Kimchi-focused.", 480),
        ],
    },
    "berlin": {
        "fine_dining": [
            ("Restaurant Tim Raue", 4.7, "Berlin", "아시안 인플루언스 파인.", "Asian-influenced fine dining.", 2400),
            ("Cordo", 4.6, "Berlin", "모던 저먼 코스.", "Modern German tasting.", 1100),
            ("Nobelhart & Schmutzig", 4.6, "Berlin", "로컬 재료 코스.", "Local-ingredient tasting.", 1600),
            ("Zur letzten Instanz", 4.3, "Berlin", "역사적 독일 식당.", "Historic German restaurant.", 4800),
            ("Mustafa's Gemüse Kebap peers / local classics", 4.4, "Berlin", "베를린 스트리트·캐주얼.", "Berlin street and casual classics.", 12000),
        ],
        "bakery": [
            ("Zeit für Brot", 4.5, "Berlin", "시나몬롤·빵.", "Cinnamon rolls and bread.", 3600),
            ("Soluna Brot und Öl", 4.5, "Berlin", "사워도우.", "Sourdough.", 1800),
            ("Café Einstein bakery", 4.3, "Berlin", "카페 베이커리.", "Café bakery.", 2100),
            ("Brammibal's / local bakers", 4.3, "Berlin", "로컬 베이커리.", "Local bakery.", 1400),
        ],
        "cafe": [
            ("The Barn", 4.6, "Berlin", "스페셜티 로스터리.", "Specialty roastery.", 3200),
            ("Bonanza Coffee", 4.5, "Berlin", "스페셜티 커피.", "Specialty coffee.", 2800),
            ("Café Einstein Stammhaus", 4.4, "Berlin", "클래식 카페하우스.", "Classic coffee house.", 5400),
            ("Five Elephant", 4.5, "Berlin", "커피·치즈케이크.", "Coffee and cheesecake.", 2600),
        ],
        "korean": [
            ("Kimchi Princess", 4.4, "Berlin", "캐주얼 한식.", "Casual Korean.", 2100),
            ("Seoulkitchen Berlin", 4.3, "Berlin", "한식 정식.", "Korean meals.", 1200),
            ("Korean BBQ Berlin", 4.3, "Berlin", "고기구이.", "Korean BBQ.", 1600),
            ("Bibimbap Berlin", 4.2, "Berlin", "비빔밥.", "Bibimbap.", 900),
        ],
    },
    "rome": {
        "fine_dining": [
            ("La Pergola", 4.7, "Rome", "미슐랭 로마 파인 다이닝.", "Michelin Rome fine dining.", 1800),
            ("Roscioli Salumeria", 4.6, "Rome", "살루메리아·파스타.", "Salumeria and pasta.", 6200),
            ("Armando al Pantheon", 4.5, "Rome", "클래식 로마 트라토리아.", "Classic Roman trattoria.", 4800),
            ("Da Enzo al 29", 4.5, "Rome", "트라스테베레 트라토리아.", "Trastevere trattoria.", 7200),
            ("Felice a Testaccio", 4.5, "Rome", "카르보나라·로컬 클래식.", "Carbonara and local classics.", 5600),
        ],
        "bakery": [
            ("Roscioli Forno", 4.6, "Rome", "피자 비안카·빵.", "Pizza bianca and bread.", 4800),
            ("Pasticceria Boccione", 4.5, "Rome", "유대인 게토 페이스트리.", "Jewish Ghetto pastries.", 3200),
            ("Antico Forno", 4.4, "Rome", "전통 빵집.", "Traditional bakery.", 2100),
            ("Regoli", 4.5, "Rome", "클래식 파티스리.", "Classic pasticceria.", 2800),
        ],
        "cafe": [
            ("Sant'Eustachio Il Caffè", 4.5, "Rome", "로마 에스프레소 클래식.", "Classic Roman espresso.", 9800),
            ("Tazza d'Oro", 4.4, "Rome", "판테온 근처 커피.", "Coffee near the Pantheon.", 7600),
            ("Sciascia Caffè", 4.5, "Rome", "역사적 카페.", "Historic café.", 2400),
            ("Faroe / specialty peers", 4.5, "Rome", "스페셜티 커피.", "Specialty coffee.", 1100),
        ],
        "korean": [
            ("Korean Kitchen Rome", 4.3, "Rome", "캐주얼 한식.", "Casual Korean.", 700),
            ("Bibimbap Rome", 4.2, "Rome", "비빔밥.", "Bibimbap.", 520),
            ("Korean BBQ Rome", 4.3, "Rome", "고기구이.", "Korean BBQ.", 640),
            ("Kimchi Rome", 4.2, "Rome", "김치·반찬.", "Kimchi-focused.", 400),
        ],
    },
}


def write_country_extra(country: str, cities: list[str]) -> None:
    labels = {c["id"]: c["en"] for c in CITIES}
    lines = [
        "import { place } from './placeFactory'",
        "import type { Place } from '../types'",
        "",
        f"export const {EXPORT[country]}: Place[] = [",
    ]
    for city in cities:
        dining = CURATED.get(city, generic_dining(labels[city]))
        lines.append(f"  // —— {city} ——")
        for cat in ("fine_dining", "bakery", "cafe", "korean"):
            for i, (name, rating, addr, ko, en, reviews) in enumerate(dining[cat], 1):
                lines.append(place_line(city, cat, i, name, rating, addr, ko, en, reviews))
        lines.append("")
    lines.append("]")
    lines.append("")
    (DATA / f"places-{country}-extra.ts").write_text("\n".join(lines), encoding="utf-8")
    print(f"wrote places-{country}-extra.ts")


def append_category_file(path: Path, rows: list[str]) -> None:
    text = path.read_text(encoding="utf-8")
    first_id = rows[0].split("'")[1]
    if first_id in text:
        print(f"skip {path.name} — already has {first_id}")
        return
    text = text.rstrip()
    if not text.endswith("]"):
        raise SystemExit(f"unexpected end of {path}")
    text = text[:-1].rstrip() + "\n\n  // —— fr / ch / de / it ——\n" + "\n".join(rows) + "\n]\n"
    path.write_text(text, encoding="utf-8")
    print(f"appended {len(rows)} to {path.name}")


def fashion_grocery_asian_rows() -> tuple[list[str], list[str], list[str]]:
    fashion, grocery, asian = [], [], []
    cities = [(c["id"], c["en"]) for c in CITIES]

    def frows(city: str, label: str, spots: list[tuple]) -> None:
        for i, (name, addr, ko, en, rating, reviews) in enumerate(spots, 1):
            fashion.append(place_line(city, "fashion", i, name, rating, addr, ko, en, reviews))

    def grows(city: str, spots: list[tuple]) -> None:
        for i, (name, addr, ko, en, rating, reviews) in enumerate(spots, 1):
            grocery.append(place_line(city, "grocery", i, name, rating, addr, ko, en, reviews))

    def arows(city: str, spots: list[tuple]) -> None:
        for i, (name, addr, ko, en, rating, reviews) in enumerate(spots, 1):
            asian.append(place_line(city, "asian", i, name, rating, addr, ko, en, reviews))

    special_f = {
        "paris": [
            ("Champs-Élysées / Rue Saint-Honoré", "Paris", "[패션] 샹젤리제·생토노레.", "[Fashion] Champs-Élysées and Saint-Honoré.", 4.5, 18000),
            ("La Vallée Village", "Marne-la-Vallée", "[아울렛] 파리 근교 아울렛.", "[Outlet] Outlet near Paris.", 4.4, 14000),
            ("Le Marais boutiques", "Paris", "[패션] 마레 부티크.", "[Fashion] Marais boutiques.", 4.5, 9200),
        ],
        "zurich": [
            ("Bahnhofstrasse", "Zurich", "[패션] 반호프슈트라세 럭셔리.", "[Fashion] Bahnhofstrasse luxury.", 4.5, 8600),
            ("FoxTown / outlet day trip", "Mendrisio", "[아울렛] 폭스타운 아울렛.", "[Outlet] FoxTown outlet.", 4.3, 7200),
            ("Niederdorf boutiques", "Zurich", "[패션] 니더도르프 부티크.", "[Fashion] Niederdorf boutiques.", 4.3, 2400),
        ],
        "berlin": [
            ("Kurfürstendamm / Friedrichstraße", "Berlin", "[패션] 쿠담·프리드리히슈트라세.", "[Fashion] Ku'damm and Friedrichstraße.", 4.4, 9800),
            ("Outlet Berlin / Designer Outlets", "Berlin region", "[아울렛] 베를린 권역 아울렛.", "[Outlet] Berlin-area outlets.", 4.3, 6400),
            ("Hackescher Markt boutiques", "Berlin", "[패션] 하케셔 마르크트 부티크.", "[Fashion] Hackescher Markt boutiques.", 4.4, 4200),
        ],
        "rome": [
            ("Via Condotti / Via del Corso", "Rome", "[패션] 콘도티·델 코르소.", "[Fashion] Condotti and Del Corso.", 4.5, 12000),
            ("Castel Romano Designer Outlet", "Rome", "[아울렛] 카스텔 로마노 아울렛.", "[Outlet] Castel Romano outlet.", 4.3, 8600),
            ("Via del Governo Vecchio boutiques", "Rome", "[패션] 구시가 부티크.", "[Fashion] Old-town boutiques.", 4.4, 3100),
        ],
        "milan": [
            ("Quadrilatero della Moda", "Milan", "[패션] 패션 사각형 지구.", "[Fashion] Fashion Quadrilatero.", 4.6, 15000),
            ("Serravalle Designer Outlet", "Serravalle", "[아울렛] 세라발레 아울렛.", "[Outlet] Serravalle outlet.", 4.4, 12000),
            ("Corso Buenos Aires", "Milan", "[패션] 부에노스아이레스 거리.", "[Fashion] Corso Buenos Aires.", 4.3, 7800),
        ],
    }

    for city, label in cities:
        if city in special_f:
            frows(city, label, special_f[city])
        else:
            frows(
                city,
                label,
                [
                    (f"{label} fashion street", label, f"[패션] {label} 메인 패션 거리.", f"[Fashion] {label} fashion street.", 4.3, 1600),
                    (f"{label} designer outlet / day trip", label, f"[아울렛] {label} 권역 아울렛.", f"[Outlet] {label}-area outlet.", 4.2, 1400),
                    (f"{label} shopping mall fashion", label, f"[패션] {label} 몰 패션.", f"[Fashion] {label} mall fashion.", 4.2, 1200),
                ],
            )

        grows(
            city,
            [
                (f"{label} food market", label, f"[식료품] {label} 식료품 마켓.", f"[Grocery] {label} food market.", 4.4, 2800),
                (f"Hypermarket near {label}", label, f"[대형마트] {label} 근교 대형마트.", f"[Hypermarket] Near {label}.", 4.1, 1800),
                (f"Supermarket {label}", label, f"[슈퍼] {label} 슈퍼마켓.", f"[Supermarket] {label} supermarket.", 4.0, 1400),
                (f"Specialty / organic groceries {label}", label, f"[식료품점] 유기농·특산 식료품.", f"[Grocery] Organic specialty groceries.", 4.3, 900),
            ],
        )
        arows(
            city,
            [
                (f"Asian dining {label}", label, "아시안 다이닝.", "Asian dining.", 4.3, 800),
                (f"Sushi / ramen {label}", label, "스시·라멘.", "Sushi and ramen.", 4.3, 700),
                (f"Thai / Vietnamese {label}", label, "태국·베트남.", "Thai and Vietnamese.", 4.2, 650),
            ],
        )

    # Capitals: better grocery names
    overrides_g = {
        "paris": [
            ("Marché des Enfants Rouges", "Paris", "[식료품] 앙팡 루주 마켓.", "[Grocery] Marché des Enfants Rouges.", 4.5, 6200),
            ("Carrefour / Monoprix", "Paris", "[대형마트] 카르푸·모노프리.", "[Hypermarket] Carrefour and Monoprix.", 4.1, 5400),
            ("Franprix / Casino supermarket", "Paris", "[슈퍼] 프랑프리·카지노.", "[Supermarket] Franprix and Casino.", 4.0, 3200),
            ("Bio c'Bon / organic", "Paris", "[식료품점] 유기농 식료품.", "[Grocery] Organic groceries.", 4.3, 1800),
        ],
        "zurich": [
            ("Markthalle Im Viadukt", "Zurich", "[식료품] 비아덕트 마켓홀.", "[Grocery] Viadukt market hall.", 4.5, 3200),
            ("Migros / Coop megastore", "Zurich", "[대형마트] 미그로스·쿱.", "[Hypermarket] Migros and Coop.", 4.2, 4800),
            ("Coop Pronto / supermarket", "Zurich", "[슈퍼] 쿱 슈퍼.", "[Supermarket] Coop supermarket.", 4.1, 2600),
            ("Organic / Globus Food Hall", "Zurich", "[식료품점] 유기농·식품홀.", "[Grocery] Organic and food hall.", 4.4, 2100),
        ],
        "berlin": [
            ("Markthalle Neun", "Berlin", "[식료품] 마르크트할레 노인.", "[Grocery] Markthalle Neun.", 4.5, 8600),
            ("REWE Center / Kaufland", "Berlin", "[대형마트] 레베·카우플란트.", "[Hypermarket] REWE and Kaufland.", 4.1, 4200),
            ("Aldi / Lidl supermarket", "Berlin", "[슈퍼] 알디·리들.", "[Supermarket] Aldi and Lidl.", 4.0, 3600),
            ("Bio Company / organic", "Berlin", "[식료품점] 유기농 식료품.", "[Grocery] Organic groceries.", 4.3, 1900),
        ],
        "rome": [
            ("Mercato di Testaccio", "Rome", "[식료품] 테스타초 마켓.", "[Grocery] Testaccio market.", 4.5, 5400),
            ("Esselunga / Carrefour", "Rome", "[대형마트] 에셀룽가·카르푸.", "[Hypermarket] Esselunga and Carrefour.", 4.1, 3200),
            ("Conad / Eurospin supermarket", "Rome", "[슈퍼] 코나드·유로스핀.", "[Supermarket] Conad and Eurospin.", 4.0, 2400),
            ("Specialty deli / organic Rome", "Rome", "[식료품점] 델리·유기농.", "[Grocery] Deli and organic.", 4.3, 1600),
        ],
    }
    # rebuild grocery for override cities
    grocery = [g for g in grocery if not any(g.startswith(f"  place('{c}-grocery-") for c in overrides_g)]
    for city, spots in overrides_g.items():
        grows(city, spots)

    return fashion, grocery, asian


def write_flags() -> None:
    flags = {
        "fr": """<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 37 28">
  <rect width="37" height="28" fill="#E1000F"/>
  <rect width="24.667" height="28" fill="#FFFFFF"/>
  <rect width="12.333" height="28" fill="#000091"/>
</svg>
""",
        "ch": """<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 37 28">
  <rect width="37" height="28" fill="#FF0000"/>
  <rect x="15.5" y="6" width="6" height="16" fill="#FFFFFF"/>
  <rect x="10.5" y="11" width="16" height="6" fill="#FFFFFF"/>
</svg>
""",
        "de": """<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 37 28">
  <rect width="37" height="28" fill="#FFCC00"/>
  <rect width="37" height="18.667" fill="#DD0000"/>
  <rect width="37" height="9.333" fill="#000000"/>
</svg>
""",
        "it": """<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 37 28">
  <rect width="37" height="28" fill="#CE2B37"/>
  <rect width="24.667" height="28" fill="#FFFFFF"/>
  <rect width="12.333" height="28" fill="#009246"/>
</svg>
""",
    }
    FLAGS.mkdir(parents=True, exist_ok=True)
    for cid, svg in flags.items():
        (FLAGS / f"{cid}.svg").write_text(svg, encoding="utf-8")
        print(f"wrote flag {cid}.svg")


def patch_places_ts() -> None:
    path = DATA / "places.ts"
    text = path.read_text(encoding="utf-8")
    if "placesFRExtra" in text:
        print("places.ts already patched")
        return
    text = text.replace(
        "import { placesCZExtra } from './places-cz-extra'\n",
        "import { placesCZExtra } from './places-cz-extra'\n"
        "import { placesFRExtra } from './places-fr-extra'\n"
        "import { placesCHExtra } from './places-ch-extra'\n"
        "import { placesDEExtra } from './places-de-extra'\n"
        "import { placesITExtra } from './places-it-extra'\n",
    )
    text = text.replace(
        "  ...placesCZExtra,\n  ...placesFashion,",
        "  ...placesCZExtra,\n  ...placesFRExtra,\n  ...placesCHExtra,\n  ...placesDEExtra,\n  ...placesITExtra,\n  ...placesFashion,",
    )
    path.write_text(text, encoding="utf-8")
    print("patched places.ts")


def patch_countries() -> None:
    path = DATA / "countries.ts"
    text = path.read_text(encoding="utf-8")
    if "id: 'fr'" in text:
        print("countries already has fr")
        return
    block = """,
  {
    id: 'fr',
    name: { ko: '프랑스', en: 'France' },
    nativeName: 'France',
    flagImage: '/flags/fr.svg',
    landmarkImage: '/landmarks/landmark-fr.jpg',
    flag: '🇫🇷',
    blurb: {
      ko: '미식과 예술의 나라. 파리·리옹·코트다쥐르가 여행의 중심입니다.',
      en: 'Cuisine and art—Paris, Lyon, and the Côte d’Azur lead the way.',
    },
    facts: {
      population: { ko: '약 6,800만 명', en: 'Approx. 68 million' },
      area: { ko: '543,940 km²', en: '543,940 km²' },
      capital: { ko: '파리 (Paris)', en: 'Paris' },
      currency: { ko: '유로 (EUR, €)', en: 'Euro (EUR, €)' },
    },
    currencyCode: 'EUR',
    currencySymbol: '€',
    schengen: true,
    flagColors: {
      primary: '#000091',
      secondary: '#E1000F',
      accent: '#FFFFFF',
      background: '#EEF0F8',
      text: '#0A0A30',
    },
    cityIds: ['paris', 'lyon', 'marseille', 'nice', 'bordeaux'],
  },
  {
    id: 'ch',
    name: { ko: '스위스', en: 'Switzerland' },
    nativeName: 'Schweiz / Suisse / Svizzera',
    flagImage: '/flags/ch.svg',
    landmarkImage: '/landmarks/landmark-ch.jpg',
    flag: '🇨🇭',
    blurb: {
      ko: '알프스와 호수의 나라. 취리히·루체른·인터라켄이 대표적입니다.',
      en: 'Alps and lakes—Zurich, Lucerne, and Interlaken are classics.',
    },
    facts: {
      population: { ko: '약 890만 명', en: 'Approx. 8.9 million' },
      area: { ko: '41,285 km²', en: '41,285 km²' },
      capital: { ko: '베른 (Bern)', en: 'Bern' },
      currency: { ko: '스위스 프랑 (CHF, Fr.)', en: 'Swiss franc (CHF, Fr.)' },
    },
    currencyCode: 'CHF',
    currencySymbol: 'Fr.',
    schengen: true,
    flagColors: {
      primary: '#FF0000',
      secondary: '#FFFFFF',
      accent: '#FF0000',
      background: '#FCE8E8',
      text: '#3A0000',
    },
    cityIds: ['zurich', 'geneva', 'bern', 'lucerne', 'interlaken'],
  },
  {
    id: 'de',
    name: { ko: '독일', en: 'Germany' },
    nativeName: 'Deutschland',
    flagImage: '/flags/de.svg',
    landmarkImage: '/landmarks/landmark-de.jpg',
    flag: '🇩🇪',
    blurb: {
      ko: '역사와 현대가 공존하는 나라. 베를린·뮌헨·함부르크가 핵심입니다.',
      en: 'History meets the modern—Berlin, Munich, and Hamburg lead.',
    },
    facts: {
      population: { ko: '약 8,400만 명', en: 'Approx. 84 million' },
      area: { ko: '357,588 km²', en: '357,588 km²' },
      capital: { ko: '베를린 (Berlin)', en: 'Berlin' },
      currency: { ko: '유로 (EUR, €)', en: 'Euro (EUR, €)' },
    },
    currencyCode: 'EUR',
    currencySymbol: '€',
    schengen: true,
    flagColors: {
      primary: '#000000',
      secondary: '#DD0000',
      accent: '#FFCC00',
      background: '#F5F5F5',
      text: '#1A1A1A',
    },
    cityIds: ['berlin', 'munich', 'hamburg', 'cologne', 'frankfurt'],
  },
  {
    id: 'it',
    name: { ko: '이탈리아', en: 'Italy' },
    nativeName: 'Italia',
    flagImage: '/flags/it.svg',
    landmarkImage: '/landmarks/landmark-it.jpg',
    flag: '🇮🇹',
    blurb: {
      ko: '예술과 미식의 반도. 로마·피렌체·베네치아가 대표적입니다.',
      en: 'Art and cuisine peninsula—Rome, Florence, and Venice star.',
    },
    facts: {
      population: { ko: '약 5,900만 명', en: 'Approx. 59 million' },
      area: { ko: '302,073 km²', en: '302,073 km²' },
      capital: { ko: '로마 (Rome)', en: 'Rome' },
      currency: { ko: '유로 (EUR, €)', en: 'Euro (EUR, €)' },
    },
    currencyCode: 'EUR',
    currencySymbol: '€',
    schengen: true,
    flagColors: {
      primary: '#009246',
      secondary: '#CE2B37',
      accent: '#FFFFFF',
      background: '#E8F5EE',
      text: '#0A2A18',
    },
    cityIds: ['rome', 'milan', 'florence', 'venice', 'naples'],
  },
]"""
    text = text.replace("\n]\n\nexport function getCountry", block + "\n\nexport function getCountry", 1)
    path.write_text(text, encoding="utf-8")
    print("appended countries fr/ch/de/it")


def main() -> None:
    write_flags()
    patch_countries()
    write_cities_append()
    for cc, cities in {
        "fr": ["paris", "lyon", "marseille", "nice", "bordeaux"],
        "ch": ["zurich", "geneva", "bern", "lucerne", "interlaken"],
        "de": ["berlin", "munich", "hamburg", "cologne", "frankfurt"],
        "it": ["rome", "milan", "florence", "venice", "naples"],
    }.items():
        write_country_extra(cc, cities)
    patch_places_ts()
    fashion, grocery, asian = fashion_grocery_asian_rows()
    append_category_file(DATA / "places-fashion.ts", fashion)
    append_category_file(DATA / "places-grocery.ts", grocery)
    append_category_file(DATA / "places-asian.ts", asian)


if __name__ == "__main__":
    main()
