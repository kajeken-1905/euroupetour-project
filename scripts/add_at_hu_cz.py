#!/usr/bin/env python3
"""Generate Austria / Hungary / Czechia catalog data and flag assets."""

from __future__ import annotations

from pathlib import Path

ROOT = Path(__file__).resolve().parents[1]
DATA = ROOT / "src" / "data"
FLAGS = ROOT / "public" / "flags"


def esc(s: str) -> str:
    return s.replace("\\", "\\\\").replace("'", "\\'")


def highlight(city: str, n: int, ko: str, en: str, dko: str, den: str, query: str) -> str:
    q = urllib_quote(query)
    return f"""      {{
        id: "{city}-h{n}",
        name: {{ ko: "{ko}", en: "{en}" }},
        description: {{ ko: "{dko}", en: "{den}" }},
        image: "/highlights/{city}-{n}.jpg",
        mapsUrl: "https://www.google.com/maps/search/?api=1&query={q}",
      }}"""


def urllib_quote(s: str) -> str:
    from urllib.parse import quote

    return quote(s)


CITIES = [
    # —— Austria ——
    {
        "id": "vienna",
        "countryId": "at",
        "ko": "빈",
        "en": "Vienna",
        "native": "Wien",
        "blurb_ko": "합스부르크의 수도. 카페하우스·클래식 음악·미식이 공존합니다.",
        "blurb_en": "The Habsburg capital—café houses, classical music, and fine dining.",
        "highlights": [
            ("シェーン브룬 궁전", "Schönbrunn Palace", "합스부르크 여름 궁전과 정원입니다.", "Habsburg summer palace and gardens.", "Schönbrunn Palace Vienna"),
            ("성 슈테판 대성당", "St. Stephen's Cathedral", "빈의 상징인 고딕 대성당입니다.", "Gothic cathedral and city icon.", "St Stephen Cathedral Vienna"),
            ("벨베데레 궁전", "Belvedere Palace", "클림트 컬렉션으로 유명한 바로크 궁전입니다.", "Baroque palace famous for Klimt.", "Belvedere Palace Vienna"),
            ("링슈트라세", "Ringstrasse", "역사주의 건축이 늘어선 순환 대로입니다.", "Grand boulevard of historicist architecture.", "Ringstrasse Vienna"),
            ("호프부르크", "Hofburg", "황실 궁전 단지와 박물관 지구입니다.", "Imperial palace complex and museums.", "Hofburg Vienna"),
            ("프라터", "Prater", "대관람차와 공원이 있는 레저 지구입니다.", "Ferris wheel and park leisure district.", "Wiener Prater"),
        ],
    },
    {
        "id": "salzburg",
        "countryId": "at",
        "ko": "잘츠부르크",
        "en": "Salzburg",
        "native": "Salzburg",
        "blurb_ko": "모차르트의 고향. 바로크 구시가와 알프스 전망이 인상적입니다.",
        "blurb_en": "Mozart’s hometown—Baroque old town and Alpine views.",
        "highlights": [
            ("호엔잘츠부르크 성", "Hohensalzburg Fortress", "도시 전체를 내려다보는 중세 요새입니다.", "Medieval fortress overlooking the city.", "Hohensalzburg Fortress"),
            ("미라벨 정원", "Mirabell Gardens", "사운드 오브 뮤직으로 유명한 바로크 정원입니다.", "Baroque gardens famed from The Sound of Music.", "Mirabell Gardens Salzburg"),
            ("구시가", "Old Town", "유네스코 구시가와 골목 카페입니다.", "UNESCO old town lanes and cafés.", "Salzburg Altstadt"),
            ("모차르트 생가", "Mozart's Birthplace", "모차르트가 태어난 게트라이데가세 집입니다.", "Mozart’s birthplace on Getreidegasse.", "Mozart Geburtshaus Salzburg"),
            ("호엔잘츠부르크 케이블카", "Fortress funicular", "성으로 오르는 푸니쿨라입니다.", "Funicular up to the fortress.", "Festungsbahn Salzburg"),
        ],
    },
    {
        "id": "innsbruck",
        "countryId": "at",
        "ko": "인스브루크",
        "en": "Innsbruck",
        "native": "Innsbruck",
        "blurb_ko": "알프스 한가운데의 티롤 수도. 황금 지붕과 산악 전망이 매력입니다.",
        "blurb_en": "Tyrolean capital in the Alps—Golden Roof and mountain views.",
        "highlights": [
            ("황금 지붕", "Golden Roof", "티롤의 상징인 금빛 발코니입니다.", "Gilded balcony and Tyrolean icon.", "Goldenes Dachl Innsbruck"),
            ("노르드케테 케이블카", "Nordkette Cable Car", "시내에서 알프스 정상으로 바로 오릅니다.", "From city centre straight into the Alps.", "Nordkette Innsbruck"),
            ("호프키르헤", "Hofkirche", "막시밀리안 황제 기념 교회입니다.", "Emperor Maximilian’s court church.", "Hofkirche Innsbruck"),
            ("알트슈타트", "Old Town", "아치형 골목과 카페가 있는 구시가입니다.", "Arcaded lanes and cafés.", "Innsbruck Altstadt"),
            ("암브라스 성", "Ambras Castle", "르네상스 성곽 박물관입니다.", "Renaissance castle museum.", "Schloss Ambras"),
        ],
    },
    {
        "id": "graz",
        "countryId": "at",
        "ko": "그라츠",
        "en": "Graz",
        "native": "Graz",
        "blurb_ko": "유네스코 구시가와 현대 건축이 조화를 이룬 슈타이어마르크 수도입니다.",
        "blurb_en": "Styrian capital blending UNESCO old town and modern architecture.",
        "highlights": [
            ("슐로스베르크", "Schlossberg", "시계탑이 있는 도심 언덕입니다.", "Hilltop clock tower above the centre.", "Schlossberg Graz"),
            ("우르슈프룽", "Kunsthaus Graz", "현대미술 ‘친환경 외계인’ 건축입니다.", "Contemporary art in the ‘Friendly Alien’.", "Kunsthaus Graz"),
            ("구시가", "Old Town", "유네스코 등록 바로크·르네상스 거리입니다.", "UNESCO Baroque and Renaissance streets.", "Graz Altstadt"),
            ("무어 강변", "Mur Riverfront", "무어인셀과 강변 산책로입니다.", "Murinsel and riverside walks.", "Murinsel Graz"),
            ("에그엔베르크 성", "Eggenberg Palace", "바로크 성곽과 정원입니다.", "Baroque palace and gardens.", "Schloss Eggenberg"),
        ],
    },
    {
        "id": "hallstatt",
        "countryId": "at",
        "ko": "할슈타트",
        "en": "Hallstatt",
        "native": "Hallstatt",
        "blurb_ko": "호수와 절벽 사이 유네스코 마을. 알프스 호수 풍경의 상징입니다.",
        "blurb_en": "UNESCO lakeside village between water and cliffs.",
        "highlights": [
            ("할슈타트 호수", "Hallstatt Lake", "거울 같은 호수 전망 포인트입니다.", "Mirror-like lake viewpoints.", "Hallstätter See"),
            ("소금 광산", "Salt Mine", "선사시대부터의 소금 광산 투어입니다.", "Ancient salt-mine tours.", "Hallstatt Salt Mine"),
            ("골고다 예배당", "Bone House", "해골 장식이 유명한 작은 예배당입니다.", "Chapel known for decorated skulls.", "Beinhaus Hallstatt"),
            ("시장 광장", "Market Square", "호수 마을 중심 광장입니다.", "Lakeside village square.", "Hallstatt Marktplatz"),
        ],
    },
    # —— Hungary ——
    {
        "id": "budapest",
        "countryId": "hu",
        "ko": "부다페스트",
        "en": "Budapest",
        "native": "Budapest",
        "blurb_ko": "다뉴브 양안의 쌍둥이 도시. 온천·건축·미식이 풍부합니다.",
        "blurb_en": "Twin cities on the Danube—baths, architecture, and food.",
        "highlights": [
            ("국회의사당", "Parliament Building", "다뉴브 변 네오고딕 국회 건물입니다.", "Neo-Gothic parliament on the Danube.", "Hungarian Parliament Budapest"),
            ("피셔만스 바스티온", "Fisherman's Bastion", "성 마차시 교회 옆 전망 테라스입니다.", "Lookout terraces by Matthias Church.", "Fisherman's Bastion"),
            ("세체니 온천", "Széchenyi Thermal Bath", "황금빛 야외 온천의 상징입니다.", "Iconic outdoor thermal baths.", "Széchenyi Thermal Bath"),
            ("영웅광장", "Heroes' Square", "밀레니엄 기념비와 시티파크 입구입니다.", "Millennium monument and City Park gate.", "Heroes Square Budapest"),
            ("체인 브리지", "Chain Bridge", "부다와 페스트를 잇는 상징 다리입니다.", "Iconic bridge linking Buda and Pest.", "Széchenyi Chain Bridge"),
            ("중앙시장", "Great Market Hall", "파프리카·스트리트푸드 대형 시장입니다.", "Paprika and street-food market hall.", "Great Market Hall Budapest"),
        ],
    },
    {
        "id": "debrecen",
        "countryId": "hu",
        "ko": "데브레첸",
        "en": "Debrecen",
        "native": "Debrecen",
        "blurb_ko": "헝가리 동부의 문화·대학 도시. 대개혁교회가 중심입니다.",
        "blurb_en": "Eastern Hungary’s cultural university city around the Great Church.",
        "highlights": [
            ("대개혁교회", "Great Reformed Church", "도시 상징인 개신교 대성당입니다.", "Landmark Protestant church.", "Great Reformed Church Debrecen"),
            ("데리 박물관", "Déri Museum", "지역 예술·역사 박물관입니다.", "Regional art and history museum.", "Déri Museum Debrecen"),
            ("나지에르되", "Nagyerdő Park", "온천과 공원이 있는 대숲입니다.", "Great Forest park and baths.", "Nagyerdő Debrecen"),
            ("메인 광장", "Kossuth Square", "시청과 카페가 모인 중심 광장입니다.", "Main square with town hall and cafés.", "Kossuth Square Debrecen"),
            ("수성온천", "Aquaticum", "온천·워터파크 단지입니다.", "Thermal spa and water park.", "Aquaticum Debrecen"),
        ],
    },
    {
        "id": "pecs",
        "countryId": "hu",
        "ko": "페치",
        "en": "Pécs",
        "native": "Pécs",
        "blurb_ko": "로마·오스만 흔적이 남은 남부 대학 도시. 지중해 감성이 있습니다.",
        "blurb_en": "Southern university city with Roman and Ottoman traces.",
        "highlights": [
            ("페치 대성당", "Pécs Cathedral", "네 첨탑의 로마네스크·네오 대성당입니다.", "Four-towered cathedral.", "Pécs Cathedral"),
            ("자미 키아베크", "Mosque of Pasha Qasim", "이슬람 사원에서 교회로 바뀐 건물입니다.", "Ottoman mosque turned church.", "Mosque of Pasha Qasim Pécs"),
            ("초기 기독교 묘지", "Early Christian Necropolis", "유네스코 지하 묘지입니다.", "UNESCO early Christian tombs.", "Early Christian Necropolis Pécs"),
            ("젝 거리", "Zsolnay Quarter", "도자기·문화 지구입니다.", "Ceramics and cultural quarter.", "Zsolnay Quarter Pécs"),
            ("서체니 광장", "Széchenyi Square", "카페가 늘어선 메인 광장입니다.", "Main square lined with cafés.", "Széchenyi Square Pécs"),
        ],
    },
    {
        "id": "szeged",
        "countryId": "hu",
        "ko": "세게드",
        "en": "Szeged",
        "native": "Szeged",
        "blurb_ko": "티서 강변의 햇빛 도시. 파프리카와 피시수프의 본고장입니다.",
        "blurb_en": "Sunny Tisza-side city—paprika and fish soup country.",
        "highlights": [
            ("보티브 교회", "Votive Church", "붉은 벽돌의 네오고딕 교회입니다.", "Red-brick neo-Gothic church.", "Votive Church Szeged"),
            ("도모 광장", "Dóm Square", "여름 야외 공연으로 유명한 광장입니다.", "Square famous for open-air festivals.", "Dóm Square Szeged"),
            ("티서 강변", "Tisza Riverfront", "강변 산책과 다리 전망입니다.", "Riverside walks and bridge views.", "Tisza Szeged"),
            ("신나고게", "New Synagogue", "세zession 양식의 아름다운 회당입니다.", "Beautiful Secession-style synagogue.", "New Synagogue Szeged"),
            ("레블 궁전", "Reök Palace", "아르누보 전시 공간입니다.", "Art Nouveau exhibition space.", "Reök Palace Szeged"),
        ],
    },
    {
        "id": "eger",
        "countryId": "hu",
        "ko": "에게르",
        "en": "Eger",
        "native": "Eger",
        "blurb_ko": "성채와 와인(불의 황소)으로 유명한 북부 도시입니다.",
        "blurb_en": "Northern town of castle walls and Bull’s Blood wine.",
        "highlights": [
            ("에게르 성", "Eger Castle", "오스만전 방어로 유명한 성입니다.", "Castle famed for resisting the Ottomans.", "Eger Castle"),
            ("미나렛", "Eger Minaret", "헝가리에 남은 오스만 미나렛입니다.", "Surviving Ottoman minaret.", "Eger Minaret"),
            ("도브고 광장", "Dobó Square", "성당과 카페가 있는 중심 광장입니다.", "Central square with basilica and cafés.", "Dobó Square Eger"),
            ("밸리 오브 더 뷰티풀 우먼", "Valley of the Beautiful Women", "와인 셀러 거리입니다.", "Wine-cellar valley.", "Szépasszonyvölgy Eger"),
            ("리세움", "Lyceum", "천문대와 도서관이 있는 역사 건물입니다.", "Historic lyceum with observatory.", "Lyceum Eger"),
        ],
    },
    # —— Czechia ——
    {
        "id": "prague",
        "countryId": "cz",
        "ko": "프라하",
        "en": "Prague",
        "native": "Praha",
        "blurb_ko": "백탑의 도시. 성·다리·맥주·카페 문화가 밀도 높게 모입니다.",
        "blurb_en": "City of a hundred spires—castle, bridges, beer, and cafés.",
        "highlights": [
            ("프라하 성", "Prague Castle", "세계 최대급 성 단지와 성 비투스 성당입니다.", "Vast castle complex and St Vitus.", "Prague Castle"),
            ("카를교", "Charles Bridge", "성인 조각상이 늘어선 중세 석교입니다.", "Medieval bridge lined with statues.", "Charles Bridge Prague"),
            ("구시가 광장", "Old Town Square", "천문시계와 티인이 있는 광장입니다.", "Square with Astronomical Clock and Týn.", "Old Town Square Prague"),
            ("천문시계", "Astronomical Clock", "매시 인형 쇼로 유명한 시계입니다.", "Hourly automaton clock show.", "Prague Astronomical Clock"),
            ("페트린 탑", "Petřín Tower", "파리 에펠을 본뜬 전망탑입니다.", "Eiffel-inspired lookout tower.", "Petřín Tower"),
            ("유대인 지구", "Jewish Quarter", "구회당과 묘지가 있는 역사 지구입니다.", "Historic synagogues and cemetery.", "Josefov Prague"),
        ],
    },
    {
        "id": "brno",
        "countryId": "cz",
        "ko": "브르노",
        "en": "Brno",
        "native": "Brno",
        "blurb_ko": "모라비아의 수도. 기능주의 건축과 카페·와인 문화가 활발합니다.",
        "blurb_en": "Moravian capital—functionalist architecture, cafés, and wine.",
        "highlights": [
            ("슈필베르크 성", "Špilberk Castle", "도심 언덕의 요새·박물관입니다.", "Hilltop fortress and museum.", "Špilberk Castle"),
            ("빌라 투겐트하트", "Villa Tugendhat", "유네스코 모더니즘 주택입니다.", "UNESCO modernist villa.", "Villa Tugendhat"),
            ("자유광장", "Freedom Square", "카페와 분수 중심 광장입니다.", "Cafés and fountain main square.", "náměstí Svobody Brno"),
            ("성 베드로 바오로 성당", "Cathedral of Sts Peter and Paul", "페트로프 언덕의 쌍둥이 첨탑 성당입니다.", "Twin-spired cathedral on Petrov.", "Cathedral Petrov Brno"),
            ("야채시장", "Zelný trh", "전통 채소·로컬 마켓입니다.", "Traditional vegetable market.", "Zelný trh Brno"),
        ],
    },
    {
        "id": "cesky-krumlov",
        "countryId": "cz",
        "ko": "체스키 크룸로프",
        "en": "Český Krumlov",
        "native": "Český Krumlov",
        "blurb_ko": "블타바 강이 감싼 동화 같은 유네스코 마을입니다.",
        "blurb_en": "Fairy-tale UNESCO town wrapped by the Vltava.",
        "highlights": [
            ("크룸로프 성", "Krumlov Castle", "탑과 바로크 극장이 있는 성입니다.", "Castle with tower and Baroque theatre.", "Český Krumlov Castle"),
            ("구시가", "Old Town", "강변 골목과 광장입니다.", "Riverside lanes and squares.", "Český Krumlov old town"),
            ("성 비투스 교회", "St Vitus Church", "구시가의 고딕 교회입니다.", "Gothic church in the old town.", "St Vitus Church Český Krumlov"),
            ("블타바 강 래프팅", "Vltava rafting", "성 아래를 지나는 강 래프팅입니다.", "Rafting past the castle bends.", "Vltava rafting Krumlov"),
        ],
    },
    {
        "id": "karlovy-vary",
        "countryId": "cz",
        "ko": "카를로비 바리",
        "en": "Karlovy Vary",
        "native": "Karlovy Vary",
        "blurb_ko": "온천과 콜로나데의 스파 타운. 영화제로도 유명합니다.",
        "blurb_en": "Spa town of colonnades and springs—also a film festival host.",
        "highlights": [
            ("밀 콜로나데", "Mill Colonnade", "온천수가 흐르는 대표 콜로나데입니다.", "Main colonnade of thermal springs.", "Mill Colonnade Karlovy Vary"),
            ("온천 산책로", "Spa promenade", "강변 스파 건축물 산책로입니다.", "Riverside spa architecture walk.", "Karlovy Vary promenade"),
            ("디아나 전망탑", "Diana Lookout", "케이블카로 오르는 전망탑입니다.", "Cable-car lookout tower.", "Diana Tower Karlovy Vary"),
            ("시장 콜로나데", "Market Colonnade", "목조 장식의 온천 콜로나데입니다.", "Wooden market colonnade springs.", "Market Colonnade Karlovy Vary"),
            ("베체리 광장", "Theatre Square", "그랜드호텔과 극장 광장입니다.", "Grandhotel and theatre square.", "Theatre Square Karlovy Vary"),
        ],
    },
    {
        "id": "ceske-budejovice",
        "countryId": "cz",
        "ko": "체스케 부데요비체",
        "en": "České Budějovice",
        "native": "České Budějovice",
        "blurb_ko": "부다이저(버드바르)의 고향. 넓은 광장과 맥주 문화가 중심입니다.",
        "blurb_en": "Home of Budweiser Budvar—grand square and beer culture.",
        "highlights": [
            ("프레미슬 오타카르 2세 광장", "Přemysl Otakar II Square", "중부 유럽 최대급 광장 중 하나입니다.", "One of Central Europe’s largest squares.", "náměstí Přemysla Otakara II"),
            ("흑탑", "Black Tower", "광장 옆 전망 탑입니다.", "Lookout tower by the square.", "Black Tower České Budějovice"),
            ("버드바르 양조장", "Budweiser Budvar Brewery", "맥주 투어로 유명한 양조장입니다.", "Brewery famous for tours.", "Budweiser Budvar Brewery"),
            ("성 니콜라스 성당", "Cathedral of St Nicholas", "바로크 성당입니다.", "Baroque cathedral.", "Cathedral St Nicholas České Budějovice"),
            ("강 합류점", "River confluence", "블타바와 말라셰 합류 산책로입니다.", "Vltava–Malše confluence walks.", "Soutok České Budějovice"),
        ],
    },
]


def city_block(c: dict) -> str:
    hs = []
    for i, (ko, en, dko, den, query) in enumerate(c["highlights"], 1):
        hs.append(highlight(c["id"], i, ko, en, dko, den, query))
    highlights = ",\n".join(hs)
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
{highlights}
    ],
  }}"""


def write_cities_append() -> None:
    path = DATA / "cities.ts"
    text = path.read_text(encoding="utf-8")
    marker = "\n]\n\nexport function getCity"
    if "countryId: \"at\"" in text:
        print("cities already contain at — skip append")
        return
    blocks = ",\n".join(city_block(c) for c in CITIES)
    text = text.replace(marker, ",\n" + blocks + marker, 1)
    path.write_text(text, encoding="utf-8")
    print(f"appended {len(CITIES)} cities")


def place_line(city: str, cat: str, i: int, name: str, rating: float, addr: str, ko: str, en: str, reviews: int) -> str:
    return (
        f"  place('{city}-{cat}-{i}', '{city}', '{cat}', '{esc(name)}', {rating}, "
        f"'{esc(addr)}', '{esc(ko)}', '{esc(en)}', {{ reviewCount: {reviews} }}),"
    )


def write_country_extra(country: str, cities: list[str], dining: dict) -> None:
    """dining[city] = list of (name, rating, addr, ko, en, reviews) for fd/bakery/cafe/korean"""
    lines = [
        "import { place } from './placeFactory'",
        "import type { Place } from '../types'",
        "",
        f"export const places{country.upper()}Extra: Place[] = [",
    ]
    # Fix export name: AT -> placesATExtra - use explicit
    export_names = {"at": "placesATExtra", "hu": "placesHUExtra", "cz": "placesCZExtra"}
    lines[3] = f"export const {export_names[country]}: Place[] = ["

    for city in cities:
        lines.append(f"  // —— {city} ——")
        for cat in ("fine_dining", "bakery", "cafe", "korean"):
            items = dining[city][cat]
            for i, (name, rating, addr, ko, en, reviews) in enumerate(items, 1):
                lines.append(place_line(city, cat, i, name, rating, addr, ko, en, reviews))
        lines.append("")
    lines.append("]")
    lines.append("")
    (DATA / f"places-{country}-extra.ts").write_text("\n".join(lines), encoding="utf-8")
    print(f"wrote places-{country}-extra.ts")


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
            (f"{city_label} Bakery", 4.5, city_label, "사워도우·페이스트리.", "Sourdough and pastries.", 900),
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


# Curated overrides for capitals + a few famous spots
CURATED = {
    "vienna": {
        "fine_dining": [
            ("Steirereck", 4.7, "Am Heumarkt 2A, Vienna", "도나우 운하변 미슐랭 파인 다이닝.", "Canal-side Michelin fine dining.", 2100),
            ("Restaurant TIAN", 4.6, "Himmelpfortgasse 23, Vienna", "채식 파인 다이닝.", "Vegetarian fine dining.", 980),
            ("Mraz & Sohn", 4.6, "Wachstumsgasse, Vienna", "창의 코스 다이닝.", "Creative tasting menus.", 720),
            ("Plachutta Wollzeile", 4.5, "Wollzeile 38, Vienna", "타펠슈피츠 클래식.", "Classic Tafelspitz.", 4800),
            ("Figlmüller", 4.4, "Wollzeile 5, Vienna", "슈니첼의 대명사.", "Iconic Wiener Schnitzel.", 12000),
        ],
        "bakery": [
            ("Ströck", 4.4, "Vienna", "비엔나 빵·페이스트리 체인.", "Vienna bread and pastry chain.", 3200),
            ("Der Mann", 4.3, "Vienna", "로컬 베이커리.", "Local bakery.", 2100),
            ("Demel", 4.5, "Kohlmarkt 14, Vienna", "황실 페이스트리 숍.", "Imperial pastry shop.", 8600),
            ("Gragger & Cie", 4.5, "Vienna", "사워도우 베이커리.", "Sourdough bakery.", 1400),
        ],
        "cafe": [
            ("Café Central", 4.5, "Herrengasse 14, Vienna", "클래식 카페하우스.", "Classic coffee house.", 18000),
            ("Café Sacher", 4.4, "Philharmoniker Str. 4, Vienna", "자허토르테의 본거지.", "Home of the Sachertorte.", 14000),
            ("Café Hawelka", 4.4, "Dorotheergasse 6, Vienna", "예술가들의 카페.", "Artists’ café.", 6200),
            ("Balthasar Kaffee Bar", 4.6, "Vienna", "스페셜티 커피.", "Specialty coffee.", 1800),
        ],
        "korean": [
            ("Kimchi Restaurant Vienna", 4.4, "Vienna", "캐주얼 한식.", "Casual Korean.", 900),
            ("Seoul Kitchen Vienna", 4.3, "Vienna", "비빔밥·불고기.", "Bibimbap and bulgogi.", 720),
            ("Korean BBQ Vienna", 4.3, "Vienna", "고기구이.", "Korean BBQ.", 640),
            ("Bibimbap Bowl Vienna", 4.2, "Vienna", "덮밥·볼.", "Rice bowls.", 480),
        ],
    },
    "budapest": {
        "fine_dining": [
            ("Borkonyha Winekitchen", 4.6, "Budapest", "와인 페어링 파인 다이닝.", "Wine-pairing fine dining.", 1600),
            ("Costes Downtown", 4.5, "Budapest", "미슐랭 모던 헝가리.", "Michelin modern Hungarian.", 1200),
            ("Babel Budapest", 4.5, "Budapest", "창의 코스.", "Creative courses.", 860),
            ("Hungarikum Bisztró", 4.4, "Budapest", "전통 헝가리 요리.", "Traditional Hungarian.", 3200),
            ("Kispiac Bisztró", 4.4, "Budapest", "마켓 감성 비스트로.", "Market-inspired bistro.", 1400),
        ],
        "bakery": [
            ("Élesztő bakery counters / local bakeries", 4.3, "Budapest", "로컬 베이커리.", "Local bakeries.", 900),
            ("Butter Birds", 4.5, "Budapest", "페이스트리·브런치.", "Pastries and brunch.", 1600),
            ("Jenői Pékség", 4.4, "Budapest", "사워도우.", "Sourdough.", 1100),
            ("Café Gerbeaud bakery", 4.4, "Vörösmarty tér, Budapest", "클래식 페이스트리.", "Classic pastries.", 9800),
        ],
        "cafe": [
            ("New York Café", 4.5, "Budapest", "화려한 카페하우스.", "Ornate coffee house.", 22000),
            ("Espresso Embassy", 4.6, "Budapest", "스페셜티 커피.", "Specialty coffee.", 2100),
            ("My Little Melbourne", 4.5, "Budapest", "스페셜티·브런치.", "Specialty and brunch.", 2800),
            ("Café Gerbeaud", 4.4, "Budapest", "역사적 카페.", "Historic café.", 12000),
        ],
        "korean": [
            ("Korean Kitchen Budapest", 4.4, "Budapest", "캐주얼 한식.", "Casual Korean.", 800),
            ("Seoul Restaurant Budapest", 4.3, "Budapest", "한식 정식.", "Korean set meals.", 640),
            ("Kimchi Budapest", 4.3, "Budapest", "김치·반찬.", "Kimchi-focused.", 520),
            ("Korean BBQ Budapest", 4.2, "Budapest", "고기구이.", "Korean BBQ.", 480),
        ],
    },
    "prague": {
        "fine_dining": [
            ("La Degustation Bohême Bourgeoise", 4.7, "Prague", "미슐랭 보헤미안 코스.", "Michelin Bohemian tasting.", 1400),
            ("Field", 4.6, "Prague", "시즌 체코 파인 다이닝.", "Seasonal Czech fine dining.", 1100),
            ("Ambiente Czechasek / Lokal peers", 4.4, "Prague", "모던 체코 다이닝.", "Modern Czech dining.", 2800),
            ("Kantýna", 4.5, "Prague", "정육점 감성 다이닝.", "Butchery-style dining.", 3600),
            ("U Modré Kachničky", 4.4, "Prague", "클래식 체코 요리.", "Classic Czech cuisine.", 4200),
        ],
        "bakery": [
            ("Antonínovo pekařství", 4.5, "Prague", "사워도우 베이커리.", "Sourdough bakery.", 1800),
            ("Pekařství Kabát", 4.4, "Prague", "로컬 빵집.", "Local bakery.", 1200),
            ("Café Savoy bakery counter", 4.4, "Prague", "페이스트리 카운터.", "Pastry counter.", 2100),
            ("Good Food Coffee & Bakery", 4.3, "Prague", "베이커리 카페.", "Bakery café.", 980),
        ],
        "cafe": [
            ("Café Louvre", 4.5, "Prague", "클래식 카페하우스.", "Classic coffee house.", 8600),
            ("The Miners / EMA espresso", 4.6, "Prague", "스페셜티 커피.", "Specialty coffee.", 2400),
            ("Café Savoy", 4.5, "Prague", "그랜드 카페.", "Grand café.", 7200),
            ("Můj šálek kávy", 4.5, "Prague", "로스터리 카페.", "Roastery café.", 3100),
        ],
        "korean": [
            ("Korean House Prague", 4.4, "Prague", "캐주얼 한식.", "Casual Korean.", 900),
            ("Seoul Prague", 4.3, "Prague", "한식 정식.", "Korean meals.", 700),
            ("Bibimbap Prague", 4.3, "Prague", "비빔밥.", "Bibimbap.", 560),
            ("Korean BBQ Prague", 4.2, "Prague", "고기구이.", "Korean BBQ.", 480),
        ],
    },
}


def build_dining_for_city(city_id: str, label: str) -> dict:
    return CURATED.get(city_id, generic_dining(label))


def write_extras() -> None:
    groups = {
        "at": ["vienna", "salzburg", "innsbruck", "graz", "hallstatt"],
        "hu": ["budapest", "debrecen", "pecs", "szeged", "eger"],
        "cz": ["prague", "brno", "cesky-krumlov", "karlovy-vary", "ceske-budejovice"],
    }
    labels = {c["id"]: c["en"] for c in CITIES}
    for cc, city_ids in groups.items():
        dining = {cid: build_dining_for_city(cid, labels[cid]) for cid in city_ids}
        write_country_extra(cc, city_ids, dining)


def append_category_file(path: Path, export_const: str, category: str, rows: list[str]) -> None:
    text = path.read_text(encoding="utf-8")
    if f"{rows[0].split(',')[0]}" in text and category in rows[0]:
        # crude skip if first id exists
        first_id = rows[0].split("'")[1]
        if first_id in text:
            print(f"skip {path.name} — already has {first_id}")
            return
    if not text.rstrip().endswith("]"):
        raise SystemExit(f"unexpected end of {path}")
    text = text.rstrip()[:-1].rstrip() + "\n\n  // —— at / hu / cz ——\n" + "\n".join(rows) + "\n]\n"
    path.write_text(text, encoding="utf-8")
    print(f"appended {len(rows)} to {path.name}")


def fashion_grocery_asian_rows() -> tuple[list[str], list[str], list[str]]:
    fashion, grocery, asian = [], [], []
    meta = {
        "vienna": ("Vienna", "at"),
        "salzburg": ("Salzburg", "at"),
        "innsbruck": ("Innsbruck", "at"),
        "graz": ("Graz", "at"),
        "hallstatt": ("Hallstatt", "at"),
        "budapest": ("Budapest", "hu"),
        "debrecen": ("Debrecen", "hu"),
        "pecs": ("Pécs", "hu"),
        "szeged": ("Szeged", "hu"),
        "eger": ("Eger", "hu"),
        "prague": ("Prague", "cz"),
        "brno": ("Brno", "cz"),
        "cesky-krumlov": ("Český Krumlov", "cz"),
        "karlovy-vary": ("Karlovy Vary", "cz"),
        "ceske-budejovice": ("České Budějovice", "cz"),
    }
    fashion_spots = {
        "vienna": [
            ("Mariahilfer Straße", "Vienna", "[패션] 빈 메인 패션 거리.", "[Fashion] Vienna’s main fashion street.", 4.4, 8900),
            ("Designer Outlet Parndorf", "Parndorf", "[아울렛] 빈 근교 대형 아울렛.", "[Outlet] Major outlet near Vienna.", 4.4, 16000),
            ("Goldenes Quartier", "Vienna", "[패션] 럭셔리 패션 지구.", "[Fashion] Luxury fashion quarter.", 4.5, 3200),
        ],
        "salzburg": [
            ("Getreidegasse boutiques", "Salzburg", "[패션] 게트라이데가세 부티크.", "[Fashion] Getreidegasse boutiques.", 4.4, 2800),
            ("Designer Outlet Salzburg", "Salzburg", "[아울렛] 잘츠부르크 아울렛.", "[Outlet] Salzburg designer outlet.", 4.3, 5400),
            ("Europark fashion mall", "Salzburg", "[패션] 유로파크 패션 몰.", "[Fashion] Europark fashion mall.", 4.2, 3100),
        ],
        "innsbruck": [
            ("Maria-Theresien-Straße", "Innsbruck", "[패션] 메인 패션 거리.", "[Fashion] Main fashion street.", 4.3, 2100),
            ("Designer Outlet Brenner day trip", "Brenner area", "[아울렛] 근교 아울렛.", "[Outlet] Nearby outlet.", 4.2, 1800),
            ("Rathausgalerien fashion", "Innsbruck", "[패션] 시청 갤러리 패션.", "[Fashion] City hall galleries fashion.", 4.2, 1400),
        ],
        "graz": [
            ("Herrengasse fashion", "Graz", "[패션] 헤렌가세 패션.", "[Fashion] Herrengasse fashion.", 4.3, 1600),
            ("Designer Outlet Graz / regional", "Styria", "[아울렛] 권역 아울렛.", "[Outlet] Regional outlet.", 4.2, 1200),
            ("Citypark Graz fashion", "Graz", "[패션] 시티파크 몰.", "[Fashion] Citypark mall.", 4.2, 1900),
        ],
        "hallstatt": [
            ("Village boutiques", "Hallstatt", "[패션] 마을 부티크·소품.", "[Fashion] Village boutiques.", 4.2, 600),
            ("Salzburg outlet day trip", "Salzburg", "[아울렛] 잘츠부르크 아울렛 데이트립.", "[Outlet] Salzburg outlet day trip.", 4.3, 2000),
            ("Gmunden / regional fashion", "Gmunden", "[패션] 권역 패션.", "[Fashion] Regional fashion.", 4.1, 400),
        ],
        "budapest": [
            ("Andrássy / Fashion Street", "Budapest", "[패션] 안드라시·패션 스트리트.", "[Fashion] Andrássy and Fashion Street.", 4.4, 5600),
            ("Designer Outlet Premier Budapest", "Biatorbágy", "[아울렛] 부다페스트 근교 아울렛.", "[Outlet] Outlet near Budapest.", 4.3, 7200),
            ("Váci Street fashion", "Budapest", "[패션] 바치 거리 패션.", "[Fashion] Váci Street fashion.", 4.3, 9800),
        ],
        "debrecen": [
            ("Piac utca fashion", "Debrecen", "[패션] 피아츠 거리 패션.", "[Fashion] Piac Street fashion.", 4.2, 1100),
            ("Budapest outlet day trip", "Budapest region", "[아울렛] 수도 아울렛 데이트립.", "[Outlet] Capital outlet day trip.", 4.3, 2500),
            ("Fórum Debrecen fashion", "Debrecen", "[패션] 포럼 몰 패션.", "[Fashion] Forum mall fashion.", 4.2, 1600),
        ],
        "pecs": [
            ("Király utca boutiques", "Pécs", "[패션] 키라이 거리 부티크.", "[Fashion] Király Street boutiques.", 4.3, 900),
            ("Regional outlet / Budapest day trip", "Hungary", "[아울렛] 권역·수도 아울렛.", "[Outlet] Regional/capital outlet.", 4.2, 1200),
            ("Árkád Pécs fashion", "Pécs", "[패션] 아르카드 몰.", "[Fashion] Árkád mall.", 4.2, 1300),
        ],
        "szeged": [
            ("Kárász utca fashion", "Szeged", "[패션] 카라스 거리 패션.", "[Fashion] Kárász Street fashion.", 4.2, 1000),
            ("Budapest outlet day trip", "Budapest region", "[아울렛] 수도 아울렛.", "[Outlet] Capital outlet.", 4.3, 2000),
            ("Plaza Szeged fashion", "Szeged", "[패션] 플라자 몰.", "[Fashion] Plaza mall.", 4.1, 1100),
        ],
        "eger": [
            ("Dobó Square boutiques", "Eger", "[패션] 광장 부티크.", "[Fashion] Square boutiques.", 4.2, 700),
            ("Budapest outlet day trip", "Budapest region", "[아울렛] 수도 아울렛.", "[Outlet] Capital outlet.", 4.3, 1800),
            ("Agria Park fashion", "Eger", "[패션] 아그리아 파크 몰.", "[Fashion] Agria Park mall.", 4.1, 900),
        ],
        "prague": [
            ("Pařížská / Na Příkopě fashion", "Prague", "[패션] 파리슈카·나프르지코페.", "[Fashion] Pařížská and Na Příkopě.", 4.5, 7800),
            ("Fashion Arena Prague Outlet", "Štěrboholy", "[아울렛] 프라하 패션 아레나.", "[Outlet] Prague Fashion Arena.", 4.3, 9100),
            ("Palladium Prague fashion", "Prague", "[패션] 팔라디움 몰.", "[Fashion] Palladium mall.", 4.3, 6500),
        ],
        "brno": [
            ("Masarykova fashion street", "Brno", "[패션] 마사리코바 패션.", "[Fashion] Masarykova fashion.", 4.3, 1800),
            ("Olympia Brno / outlet-style", "Brno", "[아울렛] 올림피아 몰·아울렛 감성.", "[Outlet] Olympia mall/outlet-style.", 4.2, 3200),
            ("Vaňkovka fashion", "Brno", "[패션] 반코프카 몰.", "[Fashion] Vaňkovka mall.", 4.2, 2400),
        ],
        "cesky-krumlov": [
            ("Old town boutiques", "Český Krumlov", "[패션] 구시가 부티크.", "[Fashion] Old-town boutiques.", 4.3, 1100),
            ("Prague outlet day trip", "Prague", "[아울렛] 프라하 아울렛 데이트립.", "[Outlet] Prague outlet day trip.", 4.3, 2500),
            ("České Budějovice fashion day trip", "České Budějovice", "[패션] 근교 도시 패션.", "[Fashion] Nearby city fashion.", 4.2, 800),
        ],
        "karlovy-vary": [
            ("Spa boulevard boutiques", "Karlovy Vary", "[패션] 스파 거리 부티크.", "[Fashion] Spa boulevard boutiques.", 4.3, 1200),
            ("Prague outlet day trip", "Prague", "[아울렛] 프라하 아울렛.", "[Outlet] Prague outlet.", 4.3, 2200),
            ("Varyáda fashion mall", "Karlovy Vary", "[패션] 바랴다 몰.", "[Fashion] Varyáda mall.", 4.1, 900),
        ],
        "ceske-budejovice": [
            ("Piaristické Square fashion", "České Budějovice", "[패션] 광장 권역 패션.", "[Fashion] Square-area fashion.", 4.2, 1000),
            ("Igy Centrum / outlet-style", "České Budějovice", "[아울렛] IGY 몰.", "[Outlet] IGY mall.", 4.2, 1600),
            ("Mercury shopping fashion", "České Budějovice", "[패션] 머큐리 몰.", "[Fashion] Mercury mall.", 4.1, 1200),
        ],
    }
    grocery_spots = {
        "vienna": [
            ("Naschmarkt", "Vienna", "[식료품] 나슈마르크트 식료품 마켓.", "[Grocery] Naschmarkt food market.", 4.5, 22000),
            ("Billa Plus / Spar hypermarket", "Vienna", "[대형마트] 빌라·스파.", "[Hypermarket] Billa and Spar.", 4.1, 4800),
            ("Merkur / Hofer supermarket", "Vienna", "[슈퍼] 메르쿠르·호퍼.", "[Supermarket] Merkur and Hofer.", 4.0, 3600),
            ("Bio Company / organic groceries", "Vienna", "[식료품점] 유기농 식료품.", "[Grocery] Organic groceries.", 4.3, 1400),
        ],
        "salzburg": [
            ("Grünmarkt", "Salzburg", "[식료품] 녹생시장.", "[Grocery] Green market.", 4.4, 2800),
            ("Spar / Billa Salzburg", "Salzburg", "[대형마트] 스파·빌라.", "[Hypermarket] Spar and Billa.", 4.1, 2100),
            ("Hofer supermarket", "Salzburg", "[슈퍼] 호퍼.", "[Supermarket] Hofer.", 4.0, 1600),
            ("Local deli groceries", "Salzburg", "[식료품점] 로컬 델리.", "[Grocery] Local delis.", 4.3, 800),
        ],
        "innsbruck": [
            ("Markthalle Innsbruck", "Innsbruck", "[식료품] 마켓홀.", "[Grocery] Market hall.", 4.4, 1900),
            ("MPreis / Spar", "Innsbruck", "[대형마트] M프라이스·스파.", "[Hypermarket] MPreis and Spar.", 4.1, 1500),
            ("Hofer Innsbruck", "Innsbruck", "[슈퍼] 호퍼.", "[Supermarket] Hofer.", 4.0, 1200),
            ("Local alpine specialty groceries", "Innsbruck", "[식료품점] 알파인 특산.", "[Grocery] Alpine specialties.", 4.3, 600),
        ],
        "graz": [
            ("Kaiser-Josef-Markt", "Graz", "[식료품] 카이저 요제프 마켓.", "[Grocery] Kaiser Josef Market.", 4.4, 1600),
            ("Spar / Billa Graz", "Graz", "[대형마트] 스파·빌라.", "[Hypermarket] Spar and Billa.", 4.1, 1400),
            ("Hofer Graz", "Graz", "[슈퍼] 호퍼.", "[Supermarket] Hofer.", 4.0, 1100),
            ("Local Styrian groceries", "Graz", "[식료품점] 슈타이어마르크 특산.", "[Grocery] Styrian specialties.", 4.3, 700),
        ],
        "hallstatt": [
            ("Local grocery store", "Hallstatt", "[식료품] 마을 식료품점.", "[Grocery] Village grocery.", 4.2, 400),
            ("Spar / Billa nearby", "Hallstatt area", "[대형마트] 근교 슈퍼.", "[Hypermarket] Nearby supermarket.", 4.1, 500),
            ("Farm shop groceries", "Hallstatt", "[슈퍼] 농장 식료품.", "[Supermarket] Farm shop.", 4.3, 350),
            ("Salzburg grocery day trip", "Salzburg", "[식료품점] 잘츠부르크 대형마트.", "[Grocery] Salzburg hypermarket.", 4.2, 800),
        ],
        "budapest": [
            ("Great Market Hall", "Budapest", "[식료품] 중앙시장.", "[Grocery] Great Market Hall.", 4.5, 28000),
            ("Tesco Extra / Auchan", "Budapest", "[대형마트] 테스코·오샹.", "[Hypermarket] Tesco and Auchan.", 4.1, 5400),
            ("Spar / CBA supermarket", "Budapest", "[슈퍼] 스파·CBA.", "[Supermarket] Spar and CBA.", 4.0, 3200),
            ("Asian / specialty groceries", "Budapest", "[식료품점] 아시안·특산 식료품.", "[Grocery] Asian specialty groceries.", 4.3, 1800),
        ],
        "debrecen": [
            ("Local market Debrecen", "Debrecen", "[식료품] 로컬 마켓.", "[Grocery] Local market.", 4.3, 900),
            ("Tesco / Auchan Debrecen", "Debrecen", "[대형마트] 테스코·오샹.", "[Hypermarket] Tesco and Auchan.", 4.1, 1600),
            ("Spar Debrecen", "Debrecen", "[슈퍼] 스파.", "[Supermarket] Spar.", 4.0, 1100),
            ("Specialty paprika & groceries", "Debrecen", "[식료품점] 파프리카·특산.", "[Grocery] Paprika specialties.", 4.3, 500),
        ],
        "pecs": [
            ("Local market Pécs", "Pécs", "[식료품] 로컬 마켓.", "[Grocery] Local market.", 4.3, 700),
            ("Tesco / Spar Pécs", "Pécs", "[대형마트] 테스코·스파.", "[Hypermarket] Tesco and Spar.", 4.1, 1200),
            ("CBA supermarket", "Pécs", "[슈퍼] CBA.", "[Supermarket] CBA.", 4.0, 800),
            ("Local wine & grocery shops", "Pécs", "[식료품점] 와인·식료품.", "[Grocery] Wine and groceries.", 4.3, 450),
        ],
        "szeged": [
            ("Szeged market hall", "Szeged", "[식료품] 마켓홀.", "[Grocery] Market hall.", 4.3, 800),
            ("Tesco / Auchan Szeged", "Szeged", "[대형마트] 테스코·오샹.", "[Hypermarket] Tesco and Auchan.", 4.1, 1300),
            ("Spar Szeged", "Szeged", "[슈퍼] 스파.", "[Supermarket] Spar.", 4.0, 900),
            ("Paprika specialty shops", "Szeged", "[식료품점] 파프리카 특산점.", "[Grocery] Paprika specialty shops.", 4.4, 600),
        ],
        "eger": [
            ("Local market Eger", "Eger", "[식료품] 로컬 마켓.", "[Grocery] Local market.", 4.3, 500),
            ("Tesco / Spar Eger", "Eger", "[대형마트] 테스코·스파.", "[Hypermarket] Tesco and Spar.", 4.1, 900),
            ("CBA Eger", "Eger", "[슈퍼] CBA.", "[Supermarket] CBA.", 4.0, 600),
            ("Wine valley grocery & tasting shops", "Eger", "[식료품점] 와인·식료품.", "[Grocery] Wine and grocery shops.", 4.3, 700),
        ],
        "prague": [
            ("Havelské tržiště / farmers markets", "Prague", "[식료품] 하벨 마켓·파머스.", "[Grocery] Havel market and farmers’ markets.", 4.4, 6200),
            ("Albert Hyper / Tesco", "Prague", "[대형마트] 알베르트·테스코.", "[Hypermarket] Albert and Tesco.", 4.1, 4800),
            ("Billa / Lidl supermarket", "Prague", "[슈퍼] 빌라·리들.", "[Supermarket] Billa and Lidl.", 4.0, 3600),
            ("Asian grocery shops (IP Pavlova area)", "Prague", "[식료품점] 아시안 식료품점.", "[Grocery] Asian grocery shops.", 4.3, 1600),
        ],
        "brno": [
            ("Zelný trh groceries", "Brno", "[식료품] 젤니 트르흐.", "[Grocery] Cabbage Market.", 4.4, 2100),
            ("Albert / Tesco Brno", "Brno", "[대형마트] 알베르트·테스코.", "[Hypermarket] Albert and Tesco.", 4.1, 1900),
            ("Billa Brno", "Brno", "[슈퍼] 빌라.", "[Supermarket] Billa.", 4.0, 1400),
            ("Local specialty groceries", "Brno", "[식료품점] 로컬 특산.", "[Grocery] Local specialties.", 4.3, 700),
        ],
        "cesky-krumlov": [
            ("Town grocery store", "Český Krumlov", "[식료품] 마을 식료품점.", "[Grocery] Town grocery.", 4.2, 500),
            ("Billa / Albert nearby", "Český Krumlov area", "[대형마트] 근교 슈퍼.", "[Hypermarket] Nearby supermarket.", 4.1, 600),
            ("Local deli groceries", "Český Krumlov", "[슈퍼] 로컬 델리.", "[Supermarket] Local deli.", 4.3, 400),
            ("České Budějovice hypermarket day trip", "České Budějovice", "[식료품점] 근교 대형마트.", "[Grocery] Nearby hypermarket.", 4.2, 700),
        ],
        "karlovy-vary": [
            ("Local spa-town market", "Karlovy Vary", "[식료품] 스파 타운 마켓.", "[Grocery] Spa-town market.", 4.3, 700),
            ("Albert / Billa Karlovy Vary", "Karlovy Vary", "[대형마트] 알베르트·빌라.", "[Hypermarket] Albert and Billa.", 4.1, 1100),
            ("Lidl Karlovy Vary", "Karlovy Vary", "[슈퍼] 리들.", "[Supermarket] Lidl.", 4.0, 800),
            ("Wafer & specialty grocery shops", "Karlovy Vary", "[식료품점] 웨이퍼·특산 식료품.", "[Grocery] Wafer specialty shops.", 4.3, 900),
        ],
        "ceske-budejovice": [
            ("Local market České Budějovice", "České Budějovice", "[식료품] 로컬 마켓.", "[Grocery] Local market.", 4.3, 800),
            ("Albert / Tesco", "České Budějovice", "[대형마트] 알베르트·테스코.", "[Hypermarket] Albert and Tesco.", 4.1, 1300),
            ("Billa supermarket", "České Budějovice", "[슈퍼] 빌라.", "[Supermarket] Billa.", 4.0, 900),
            ("Beer & specialty groceries", "České Budějovice", "[식료품점] 맥주·특산 식료품.", "[Grocery] Beer specialty groceries.", 4.3, 600),
        ],
    }
    asian_spots = {
        "vienna": [
            ("Tian Bistro / Asian peers", "Vienna", "아시안 인플루언스 다이닝.", "Asian-influenced dining.", 4.4, 900),
            ("Takumi / ramen Vienna", "Vienna", "라멘.", "Ramen.", 4.5, 1600),
            ("Thai / Vietnamese Vienna", "Vienna", "태국·베트남.", "Thai and Vietnamese.", 4.3, 1200),
        ],
        "salzburg": [
            ("Asian / Thai Salzburg", "Salzburg", "태국·아시안.", "Thai and Asian.", 4.3, 700),
            ("Sushi Salzburg", "Salzburg", "스시·일식.", "Sushi and Japanese.", 4.2, 600),
            ("Chinese Salzburg", "Salzburg", "중식.", "Chinese.", 4.2, 550),
        ],
        "innsbruck": [
            ("Asian / Thai Innsbruck", "Innsbruck", "태국·아시안.", "Thai and Asian.", 4.3, 600),
            ("Sushi Innsbruck", "Innsbruck", "스시.", "Sushi.", 4.2, 500),
            ("Indian / Chinese Innsbruck", "Innsbruck", "인디안·중식.", "Indian and Chinese.", 4.2, 480),
        ],
        "graz": [
            ("Asian / Thai Graz", "Graz", "태국·아시안.", "Thai and Asian.", 4.3, 650),
            ("Sushi Graz", "Graz", "스시.", "Sushi.", 4.2, 520),
            ("Vietnamese Graz", "Graz", "베트남.", "Vietnamese.", 4.3, 580),
        ],
        "hallstatt": [
            ("Hotel restaurants Asian options", "Hallstatt", "호텔 아시안 메뉴.", "Hotel Asian options.", 4.1, 250),
            ("Salzburg Asian day trip", "Salzburg", "잘츠부르크 아시안.", "Salzburg Asian day trip.", 4.2, 500),
            ("Thai / sushi regional", "Salzkammergut", "권역 태국·스시.", "Regional Thai and sushi.", 4.1, 220),
        ],
        "budapest": [
            ("Kishoi / Asian Budapest", "Budapest", "아시안 다이닝.", "Asian dining.", 4.4, 1100),
            ("Sushisamba peers / sushi Budapest", "Budapest", "스시·일식.", "Sushi and Japanese.", 4.3, 1400),
            ("Thai / Vietnamese Budapest", "Budapest", "태국·베트남.", "Thai and Vietnamese.", 4.3, 1200),
        ],
        "debrecen": [
            ("Asian / Chinese Debrecen", "Debrecen", "중식·아시안.", "Chinese and Asian.", 4.2, 450),
            ("Sushi Debrecen", "Debrecen", "스시.", "Sushi.", 4.2, 380),
            ("Thai Debrecen", "Debrecen", "태국.", "Thai.", 4.2, 360),
        ],
        "pecs": [
            ("Asian / Chinese Pécs", "Pécs", "중식·아시안.", "Chinese and Asian.", 4.2, 400),
            ("Sushi Pécs", "Pécs", "스시.", "Sushi.", 4.2, 340),
            ("Thai Pécs", "Pécs", "태국.", "Thai.", 4.2, 320),
        ],
        "szeged": [
            ("Asian / Chinese Szeged", "Szeged", "중식·아시안.", "Chinese and Asian.", 4.2, 420),
            ("Sushi Szeged", "Szeged", "스시.", "Sushi.", 4.2, 350),
            ("Thai Szeged", "Szeged", "태국.", "Thai.", 4.2, 330),
        ],
        "eger": [
            ("Asian menu restaurants Eger", "Eger", "아시안 메뉴.", "Asian menus.", 4.1, 280),
            ("Sushi / Chinese Eger", "Eger", "스시·중식.", "Sushi and Chinese.", 4.2, 300),
            ("Budapest Asian day trip", "Budapest", "수도 아시안 데이트립.", "Capital Asian day trip.", 4.3, 600),
        ],
        "prague": [
            ("Sansho / Asian Prague", "Prague", "아시안 퓨전.", "Asian fusion.", 4.5, 1600),
            ("Nasushi / ramen Prague", "Prague", "스시·라멘.", "Sushi and ramen.", 4.4, 1800),
            ("Thai / Vietnamese Prague", "Prague", "태국·베트남.", "Thai and Vietnamese.", 4.3, 1400),
        ],
        "brno": [
            ("Asian / Thai Brno", "Brno", "태국·아시안.", "Thai and Asian.", 4.3, 700),
            ("Sushi Brno", "Brno", "스시.", "Sushi.", 4.2, 600),
            ("Vietnamese Brno", "Brno", "베트남.", "Vietnamese.", 4.3, 750),
        ],
        "cesky-krumlov": [
            ("Asian menu restaurants", "Český Krumlov", "아시안 메뉴.", "Asian menus.", 4.1, 300),
            ("Thai / Chinese Krumlov", "Český Krumlov", "태국·중식.", "Thai and Chinese.", 4.2, 320),
            ("Prague Asian day trip", "Prague", "프라하 아시안.", "Prague Asian day trip.", 4.3, 700),
        ],
        "karlovy-vary": [
            ("Asian / Chinese Karlovy Vary", "Karlovy Vary", "중식·아시안.", "Chinese and Asian.", 4.2, 450),
            ("Sushi Karlovy Vary", "Karlovy Vary", "스시.", "Sushi.", 4.2, 380),
            ("Thai Karlovy Vary", "Karlovy Vary", "태국.", "Thai.", 4.2, 360),
        ],
        "ceske-budejovice": [
            ("Asian / Chinese České Budějovice", "České Budějovice", "중식·아시안.", "Chinese and Asian.", 4.2, 420),
            ("Sushi České Budějovice", "České Budějovice", "스시.", "Sushi.", 4.2, 360),
            ("Thai / Vietnamese", "České Budějovice", "태국·베트남.", "Thai and Vietnamese.", 4.2, 340),
        ],
    }

    for city, spots in fashion_spots.items():
        for i, (name, addr, ko, en, rating, reviews) in enumerate(spots, 1):
            fashion.append(place_line(city, "fashion", i, name, rating, addr, ko, en, reviews))
    for city, spots in grocery_spots.items():
        for i, (name, addr, ko, en, rating, reviews) in enumerate(spots, 1):
            grocery.append(place_line(city, "grocery", i, name, rating, addr, ko, en, reviews))
    for city, spots in asian_spots.items():
        for i, (name, addr, ko, en, rating, reviews) in enumerate(spots, 1):
            asian.append(place_line(city, "asian", i, name, rating, addr, ko, en, reviews))
    return fashion, grocery, asian


def write_flags() -> None:
    flags = {
        "at": """<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 37 28">
  <rect width="37" height="28" fill="#ED2939"/>
  <rect y="9.333" width="37" height="9.334" fill="#FFFFFF"/>
</svg>
""",
        "hu": """<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 37 28">
  <rect width="37" height="28" fill="#436F4D"/>
  <rect width="37" height="18.667" fill="#FFFFFF"/>
  <rect width="37" height="9.333" fill="#CD2A3E"/>
</svg>
""",
        "cz": """<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 37 28">
  <rect width="37" height="28" fill="#D7141A"/>
  <rect width="37" height="14" fill="#FFFFFF"/>
  <path d="M0 0 L18.5 14 L0 28 Z" fill="#11457E"/>
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
    if "placesATExtra" in text:
        print("places.ts already patched")
        return
    text = text.replace(
        "import { placesDKExtra } from './places-dk-extra'\n",
        "import { placesDKExtra } from './places-dk-extra'\n"
        "import { placesATExtra } from './places-at-extra'\n"
        "import { placesHUExtra } from './places-hu-extra'\n"
        "import { placesCZExtra } from './places-cz-extra'\n",
    )
    text = text.replace(
        "  ...placesDKExtra,\n  ...placesFashion,",
        "  ...placesDKExtra,\n  ...placesATExtra,\n  ...placesHUExtra,\n  ...placesCZExtra,\n  ...placesFashion,",
    )
    path.write_text(text, encoding="utf-8")
    print("patched places.ts")


def patch_countries() -> None:
    path = DATA / "countries.ts"
    text = path.read_text(encoding="utf-8")
    if "id: 'at'" in text:
        print("countries already has at")
        return
    block = """,
  {
    id: 'at',
    name: { ko: '오스트리아', en: 'Austria' },
    nativeName: 'Österreich',
    flagImage: '/flags/at.svg',
    landmarkImage: '/landmarks/landmark-at.jpg',
    flag: '🇦🇹',
    blurb: {
      ko: '알프스와 합스부르크 유산의 나라. 빈·잘츠부르크의 카페·미식이 유명합니다.',
      en: 'Alps and Habsburg heritage—Vienna and Salzburg shine for cafés and dining.',
    },
    facts: {
      population: { ko: '약 910만 명', en: 'Approx. 9.1 million' },
      area: { ko: '83,879 km²', en: '83,879 km²' },
      capital: { ko: '빈 (Vienna)', en: 'Vienna' },
      currency: { ko: '유로 (EUR, €)', en: 'Euro (EUR, €)' },
    },
    currencyCode: 'EUR',
    currencySymbol: '€',
    schengen: true,
    flagColors: {
      primary: '#ED2939',
      secondary: '#FFFFFF',
      accent: '#ED2939',
      background: '#FCEBEC',
      text: '#3A0A10',
    },
    cityIds: ['vienna', 'salzburg', 'innsbruck', 'graz', 'hallstatt'],
  },
  {
    id: 'hu',
    name: { ko: '헝가리', en: 'Hungary' },
    nativeName: 'Magyarország',
    flagImage: '/flags/hu.svg',
    landmarkImage: '/landmarks/landmark-hu.jpg',
    flag: '🇭🇺',
    blurb: {
      ko: '다뉴브와 온천의 나라. 부다페스트는 온천·파프리카·와인으로 유명합니다.',
      en: 'Land of the Danube and baths—Budapest for spas, paprika, and wine.',
    },
    facts: {
      population: { ko: '약 960만 명', en: 'Approx. 9.6 million' },
      area: { ko: '93,030 km²', en: '93,030 km²' },
      capital: { ko: '부다페스트 (Budapest)', en: 'Budapest' },
      currency: { ko: '포린트 (HUF, Ft)', en: 'Forint (HUF, Ft)' },
    },
    currencyCode: 'HUF',
    currencySymbol: 'Ft',
    schengen: true,
    flagColors: {
      primary: '#CD2A3E',
      secondary: '#436F4D',
      accent: '#FFFFFF',
      background: '#F8ECEE',
      text: '#2A0A10',
    },
    cityIds: ['budapest', 'debrecen', 'pecs', 'szeged', 'eger'],
  },
  {
    id: 'cz',
    name: { ko: '체코', en: 'Czechia' },
    nativeName: 'Česko',
    flagImage: '/flags/cz.svg',
    landmarkImage: '/landmarks/landmark-cz.jpg',
    flag: '🇨🇿',
    blurb: {
      ko: '맥주와 성의 나라. 프라하·크룸로프의 구시가와 카페 문화가 매력적입니다.',
      en: 'Beer and castles—Prague and Krumlov for old towns and café culture.',
    },
    facts: {
      population: { ko: '약 1,090만 명', en: 'Approx. 10.9 million' },
      area: { ko: '78,871 km²', en: '78,871 km²' },
      capital: { ko: '프라하 (Prague)', en: 'Prague' },
      currency: { ko: '체코 코루나 (CZK, Kč)', en: 'Czech koruna (CZK, Kč)' },
    },
    currencyCode: 'CZK',
    currencySymbol: 'Kč',
    schengen: true,
    flagColors: {
      primary: '#11457E',
      secondary: '#D7141A',
      accent: '#FFFFFF',
      background: '#E8EEF6',
      text: '#0A1A30',
    },
    cityIds: ['prague', 'brno', 'cesky-krumlov', 'karlovy-vary', 'ceske-budejovice'],
  },
]"""
    text = text.replace("\n]\n\nexport function getCountry", block + "\n\nexport function getCountry", 1)
    path.write_text(text, encoding="utf-8")
    print("appended countries at/hu/cz")


def main() -> None:
    write_flags()
    patch_countries()
    write_cities_append()
    write_extras()
    patch_places_ts()
    fashion, grocery, asian = fashion_grocery_asian_rows()
    append_category_file(DATA / "places-fashion.ts", "placesFashion", "fashion", fashion)
    append_category_file(DATA / "places-grocery.ts", "placesGrocery", "grocery", grocery)
    append_category_file(DATA / "places-asian.ts", "placesAsian", "asian", asian)


if __name__ == "__main__":
    main()
