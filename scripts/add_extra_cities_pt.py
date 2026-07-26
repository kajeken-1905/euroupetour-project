#!/usr/bin/env python3
"""Append extra tourist cities to Portugal (pt)."""

from __future__ import annotations

import re
from pathlib import Path
from urllib.parse import quote

ROOT = Path(__file__).resolve().parents[1]
DATA = ROOT / "src" / "data"


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
    {
        "id": "cascais",
        "countryId": "pt",
        "ko": "카스카이스",
        "en": "Cascais",
        "native": "Cascais",
        "blurb_ko": "리스본 근교 해변 휴양 도시. 해안 산책과 보카 도 인페르누가 유명합니다.",
        "blurb_en": "Lisbon-area beach resort—coast walks and Boca do Inferno.",
        "highlights": [
            ("카스카이스 해변", "Cascais Beach", "시내 옆 모래사장과 산책로입니다.", "Town beach and promenade.", "Praia da Ribeira Cascais"),
            ("보카 도 인페르노", "Boca do Inferno", "파도가 들이치는 해식 절벽입니다.", "Sea-carved cliff gorge.", "Boca do Inferno Cascais"),
            ("시타델라", "Cidadela de Cascais", "요새화된 항구 성채입니다.", "Fortified harbour citadel.", "Cidadela de Cascais"),
            ("마레샬 카몬스 공원", "Parque Marechal Carmona", "정원·공작이 있는 공원입니다.", "Garden park with peacocks.", "Parque Marechal Carmona"),
            ("카스카이스 마리나", "Cascais Marina", "요트와 카페가 있는 마리나입니다.", "Yachts and waterfront cafés.", "Cascais Marina"),
        ],
    },
    {
        "id": "aveiro",
        "countryId": "pt",
        "ko": "아베이루",
        "en": "Aveiro",
        "native": "Aveiro",
        "blurb_ko": "포르투갈의 베네치아. 운하·몰레이루 배·소금 염전이 상징입니다.",
        "blurb_en": "Portugal’s Venice—canals, moliceiro boats, and salt pans.",
        "highlights": [
            ("중앙 운하", "Canal Central", "몰레이루가 다니는 중심 운하입니다.", "Main canal for moliceiro boats.", "Canal Central Aveiro"),
            ("몰레이루 투어", "Moliceiro boat tour", "알록달록 전통 배 유람입니다.", "Colourful traditional boat rides.", "Moliceiro Aveiro"),
            ("아베이루 대성당", "Aveiro Cathedral", "구시가의 대성당입니다.", "Old-town cathedral.", "Sé de Aveiro"),
            ("코스타노바", "Costa Nova", "줄무늬 해변 별장 마을입니다.", "Striped beach-house village.", "Costa Nova Aveiro"),
            ("소금 염전", "Salinas de Aveiro", "전통 소금 생산지와 전망입니다.", "Traditional salt pans.", "Salinas de Aveiro"),
        ],
    },
    {
        "id": "fatima",
        "countryId": "pt",
        "ko": "파티마",
        "en": "Fátima",
        "native": "Fátima",
        "blurb_ko": "세계적 가톨릭 성지. 성모 발현과 대성당 순례로 유명합니다.",
        "blurb_en": "Major Catholic pilgrimage site of Marian apparitions.",
        "highlights": [
            ("파티마 성지", "Sanctuary of Fátima", "순례의 중심 성지 광장입니다.", "Central pilgrimage square.", "Santuário de Fátima"),
            ("로사리오 대성당", "Basilica of Our Lady of the Rosary", "성지 내 네오클래식 대성당입니다.", "Neoclassical basilica at the shrine.", "Basílica de Nossa Senhora do Rosário Fátima"),
            ("성삼위일체 성당", "Basilica of the Holy Trinity", "현대식 대형 순례 성당입니다.", "Modern large pilgrimage church.", "Basílica da Santíssima Trindade Fátima"),
            ("발현 소성당", "Chapel of the Apparitions", "성모 발현 장소의 소성당입니다.", "Chapel at the apparition site.", "Capelinha das Aparições"),
            ("파티마 박물관", "Museum of Fátima", "성지·발현 역사 전시입니다.", "Shrine and apparition history.", "Museu de Fátima"),
        ],
    },
    {
        "id": "evora",
        "countryId": "pt",
        "ko": "에보라",
        "en": "Évora",
        "native": "Évora",
        "blurb_ko": "알렌테주의 유네스코 도시. 로마 신전과 중세 골목이 남아 있습니다.",
        "blurb_en": "UNESCO Alentejo city—Roman temple and medieval lanes.",
        "highlights": [
            ("로마 신전", "Roman Temple of Évora", "도심의 로마 신전 유적입니다.", "Roman temple ruins in town.", "Templo Romano Évora"),
            ("에보라 대성당", "Évora Cathedral", "석조 대성당과 전망 테라스입니다.", "Stone cathedral and rooftop views.", "Sé de Évora"),
            ("뼈 예배당", "Capela dos Ossos", "해골로 장식된 예배당입니다.", "Chapel lined with bones.", "Capela dos Ossos Évora"),
            ("지랄두 광장", "Praça do Giraldo", "카페가 모인 중심 광장입니다.", "Main square lined with cafés.", "Praça do Giraldo"),
            ("아쿠아두쿠아구아", "Água de Prata Aqueduct", "시내로 이어지는 중세 수도교입니다.", "Medieval aqueduct into town.", "Aqueduto da Água de Prata"),
        ],
    },
    {
        "id": "obidos",
        "countryId": "pt",
        "ko": "오비두스",
        "en": "Óbidos",
        "native": "Óbidos",
        "blurb_ko": "성벽으로 둘러싸인 동화 마을. 진저 리큐어 진지냐로도 유명합니다.",
        "blurb_en": "Walled fairy-tale town famous for ginjinha liqueur.",
        "highlights": [
            ("오비두스 성", "Óbidos Castle", "성벽 마을을 지키는 성입니다.", "Castle guarding the walled town.", "Castelo de Óbidos"),
            ("성벽 산책", "Town walls walk", "마을을 한 바퀴 도는 성벽길입니다.", "Circuit walk on the ramparts.", "Muralhas de Óbidos"),
            ("산타마리아 교회", "Igreja de Santa Maria", "광장 앞의 타일 장식 교회입니다.", "Azulejo church on the square.", "Igreja de Santa Maria Óbidos"),
            ("루아 디렉타", "Rua Direita", "기념품·진지냐 숍이 있는 메인 거리입니다.", "Main street of shops and ginjinha.", "Rua Direita Óbidos"),
            ("포르타다빌라", "Porta da Vila", "마을 입구 아치 성문입니다.", "Town-gate arch entrance.", "Porta da Vila Óbidos"),
        ],
    },
    {
        "id": "braga",
        "countryId": "pt",
        "ko": "브라가",
        "en": "Braga",
        "native": "Braga",
        "blurb_ko": "포르투갈의 종교 수도. 봄 예수 성지와 바로크 교회가 인상적입니다.",
        "blurb_en": "Portugal’s religious capital—Bom Jesus and baroque churches.",
        "highlights": [
            ("봄 예수 성지", "Bom Jesus do Monte", "계단식 바로크 성지와 전망입니다.", "Baroque hillside sanctuary and views.", "Bom Jesus do Monte"),
            ("브라가 대성당", "Braga Cathedral", "포르투갈 최고령급 대성당입니다.", "One of Portugal’s oldest cathedrals.", "Sé de Braga"),
            ("공화국 광장", "Praça da República", "분수와 카페가 있는 중심 광장입니다.", "Central square with fountain and cafés.", "Praça da República Braga"),
            ("아르코 다 포르타 노바", "Arco da Porta Nova", "구시가 입구의 바로크 아치입니다.", "Baroque arch into the old town.", "Arco da Porta Nova"),
            ("사메이루 성지", "Santuário do Sameiro", "언덕 위 성모 성지입니다.", "Hilltop Marian sanctuary.", "Santuário do Sameiro"),
        ],
    },
]

EXTRA_IDS = [c["id"] for c in CITIES]
NEW_CITY_IDS = (
    "['lisbon', 'porto', 'sintra', 'faro', 'coimbra', 'funchal', 'lagos', "
    "'cascais', 'aveiro', 'fatima', 'evora', 'obidos', 'braga']"
)


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


def place_line(city: str, cat: str, i: int, name: str, rating: float, addr: str, ko: str, en: str, reviews: int) -> str:
    return (
        f"  place('{city}-{cat}-{i}', '{city}', '{cat}', '{esc(name)}', {rating}, "
        f"'{esc(addr)}', '{esc(ko)}', '{esc(en)}', {{ reviewCount: {reviews} }}),"
    )


def generic_dining(label: str) -> dict:
    return {
        "fine_dining": [
            (f"{label} Fine Dining 1", 4.5, label, "시즌 코스 파인 다이닝.", "Seasonal fine dining.", 640),
            (f"{label} Fine Dining 2", 4.4, label, "모던 로컬 다이닝.", "Modern local dining.", 520),
            (f"{label} Fine Dining 3", 4.3, label, "클래식 다이닝.", "Classic dining.", 480),
            (f"{label} Bistro", 4.3, label, "캐주얼 파인 비스트로.", "Casual fine bistro.", 700),
            (f"{label} Chef's Table", 4.4, label, "셰프 테이블.", "Chef’s table.", 390),
        ],
        "bakery": [
            (f"{label} Bakery", 4.5, label, "빵·페이스트리.", "Bread and pastries.", 900),
            (f"{label} Patisserie", 4.4, label, "페이스트리 숍.", "Pastry shop.", 720),
            (f"{label} Bread House", 4.3, label, "로컬 빵집.", "Local bakery.", 580),
            (f"Café Bakery {label}", 4.3, label, "베이커리 카페.", "Bakery café.", 640),
        ],
        "cafe": [
            (f"Specialty Coffee {label}", 4.5, label, "스페셜티 커피.", "Specialty coffee.", 1100),
            (f"Old Town Café {label}", 4.4, label, "구시가 카페.", "Old-town café.", 980),
            (f"Brunch Café {label}", 4.3, label, "브런치 카페.", "Brunch café.", 860),
            (f"Espresso Bar {label}", 4.3, label, "에스프레소 바.", "Espresso bar.", 720),
        ],
        "korean": [
            (f"Korean Kitchen {label}", 4.4, label, "캐주얼 한식.", "Casual Korean.", 640),
            (f"Bibimbap {label}", 4.3, label, "비빔밥·덮밥.", "Bibimbap bowls.", 520),
            (f"Korean BBQ {label}", 4.3, label, "고기구이.", "Korean BBQ.", 480),
            (f"Kimchi House {label}", 4.2, label, "김치·반찬 중심.", "Kimchi-focused Korean.", 390),
        ],
    }


def append_cities() -> None:
    path = DATA / "cities.ts"
    text = path.read_text(encoding="utf-8")
    if 'id: "cascais"' in text:
        print("extra PT cities already present — skip cities")
        return
    blocks = ",\n".join(city_block(c) for c in CITIES)
    # Keep PT cities together: insert after lagos, before athens
    marker = '    id: "athens",'
    if marker not in text:
        raise SystemExit("athens marker not found")
    # Find the closing of lagos block: the `  },\n  {\n    id: "athens"`
    needle = '  },\n  {\n    id: "athens",'
    if needle not in text:
        # try with different spacing
        m = re.search(r'(  \},\n  \{\n    id: "athens",)', text)
        if not m:
            raise SystemExit("could not find lagos→athens boundary")
        needle = m.group(1)
    text = text.replace(needle, "  },\n" + blocks + ",\n  {\n    id: \"athens\",", 1)
    path.write_text(text, encoding="utf-8")
    print(f"appended {len(CITIES)} PT cities before athens")


def patch_country_city_ids() -> None:
    path = DATA / "countries.ts"
    text = path.read_text(encoding="utf-8")
    pattern = r"(id: 'pt'[\s\S]*?cityIds: )(\[[^\]]+\])"
    m = re.search(pattern, text)
    if not m:
        raise SystemExit("pt country not found")
    if "cascais" in m.group(2):
        print("cityIds for pt already expanded")
        return
    text = text[: m.start(2)] + NEW_CITY_IDS + text[m.end(2) :]
    path.write_text(text, encoding="utf-8")
    print("updated cityIds for pt")


def append_to_extra_files() -> None:
    path = DATA / "places-pt-extra.ts"
    text = path.read_text(encoding="utf-8")
    if "// —— cascais ——" in text:
        print("skip extra dining pt")
        return
    labels = {c["id"]: c["en"] for c in CITIES}
    lines = []
    for city in EXTRA_IDS:
        dining = generic_dining(labels[city])
        lines.append(f"  // —— {city} ——")
        for cat in ("fine_dining", "bakery", "cafe", "korean"):
            for i, (name, rating, addr, ko, en, reviews) in enumerate(dining[cat], 1):
                lines.append(place_line(city, cat, i, name, rating, addr, ko, en, reviews))
        lines.append("")
    text = text.rstrip()
    if not text.endswith("]"):
        raise SystemExit(path)
    text = text[:-1].rstrip() + "\n\n" + "\n".join(lines) + "\n]\n"
    path.write_text(text, encoding="utf-8")
    print(f"appended dining places to {path.name}")


def append_category_rows() -> None:
    fashion, grocery, asian = [], [], []
    for c in CITIES:
        city, label = c["id"], c["en"]
        for i, (name, addr, ko, en, rating, reviews) in enumerate(
            [
                (f"{label} fashion street", label, f"[패션] {label} 메인 패션 거리.", f"[Fashion] {label} fashion street.", 4.3, 1400),
                (f"{label} outlet / day trip", label, f"[아울렛] {label} 권역 아울렛.", f"[Outlet] {label}-area outlet.", 4.2, 1200),
                (f"{label} mall fashion", label, f"[패션] {label} 몰 패션.", f"[Fashion] {label} mall fashion.", 4.2, 1000),
            ],
            1,
        ):
            fashion.append(place_line(city, "fashion", i, name, rating, addr, ko, en, reviews))
        for i, (name, addr, ko, en, rating, reviews) in enumerate(
            [
                (f"{label} food market", label, f"[식료품] {label} 식료품 마켓.", f"[Grocery] {label} food market.", 4.4, 2200),
                (f"Hypermarket near {label}", label, f"[대형마트] {label} 근교 대형마트.", f"[Hypermarket] Near {label}.", 4.1, 1600),
                (f"Supermarket {label}", label, f"[슈퍼] {label} 슈퍼마켓.", f"[Supermarket] {label} supermarket.", 4.0, 1200),
                (f"Specialty groceries {label}", label, f"[식료품점] 특산·유기농 식료품.", f"[Grocery] Specialty groceries.", 4.3, 800),
            ],
            1,
        ):
            grocery.append(place_line(city, "grocery", i, name, rating, addr, ko, en, reviews))
        for i, (name, addr, ko, en, rating, reviews) in enumerate(
            [
                (f"Asian dining {label}", label, "아시안 다이닝.", "Asian dining.", 4.3, 700),
                (f"Sushi / ramen {label}", label, "스시·라멘.", "Sushi and ramen.", 4.3, 600),
                (f"Thai / Vietnamese {label}", label, "태국·베트남.", "Thai and Vietnamese.", 4.2, 550),
            ],
            1,
        ):
            asian.append(place_line(city, "asian", i, name, rating, addr, ko, en, reviews))

    for path, rows in (
        (DATA / "places-fashion.ts", fashion),
        (DATA / "places-grocery.ts", grocery),
        (DATA / "places-asian.ts", asian),
    ):
        text = path.read_text(encoding="utf-8")
        first_id = rows[0].split("'")[1]
        if first_id in text:
            print(f"skip {path.name}")
            continue
        text = text.rstrip()
        text = text[:-1].rstrip() + "\n\n  // —— pt city extras ——\n" + "\n".join(rows) + "\n]\n"
        path.write_text(text, encoding="utf-8")
        print(f"appended {len(rows)} to {path.name}")


def main() -> None:
    append_cities()
    patch_country_city_ids()
    append_to_extra_files()
    append_category_rows()


if __name__ == "__main__":
    main()
