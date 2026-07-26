#!/usr/bin/env python3
"""Clarify Madrid royal palace and add missing royal palaces in other cities."""

from __future__ import annotations

import re
import sys
import time
from pathlib import Path
from urllib.parse import quote

ROOT = Path(__file__).resolve().parents[1]
CITIES = ROOT / "src" / "data" / "cities.ts"
sys.path.insert(0, str(ROOT / "scripts"))
from fetch_new_country_photos import find_image, save_cover  # noqa: E402


def highlight_block(city: str, n: int, ko: str, en: str, dko: str, den: str, maps_query: str) -> str:
    q = quote(maps_query)
    return f"""      {{
        id: "{city}-h{n}",
        name: {{ ko: "{ko}", en: "{en}" }},
        description: {{ ko: "{dko}", en: "{den}" }},
        image: "/highlights/{city}-{n}.jpg",
        mapsUrl: "https://www.google.com/maps/search/?api=1&query={q}",
      }}"""


def replace_highlight(text: str, city: str, n: int, ko: str, en: str, dko: str, den: str, maps_query: str) -> str:
    pattern = rf'(      \{{\n        id: "{city}-h{n}",\n)([\s\S]*?)(\n      \}})'
    m = re.search(pattern, text)
    if not m:
        raise SystemExit(f"highlight not found: {city}-h{n}")
    new = highlight_block(city, n, ko, en, dko, den, maps_query)
    return text[: m.start()] + new + text[m.end() :]


def append_highlight(text: str, city: str, n: int, ko: str, en: str, dko: str, den: str, maps_query: str) -> str:
    """Insert a new highlight after the last highlight of the city."""
    city_m = re.search(rf'id: "{city}",[\s\S]*?highlights: \[([\s\S]*?)\],\n  \}},', text)
    if not city_m:
        raise SystemExit(f"city not found: {city}")
    if f'id: "{city}-h{n}"' in city_m.group(0):
        print(f"skip append {city}-h{n} (exists)")
        return text
    block = highlight_block(city, n, ko, en, dko, den, maps_query)
    content = city_m.group(1).rstrip()
    if content.endswith(","):
        content = content[:-1].rstrip()
    if not content.endswith("}"):
        raise SystemExit(f"unexpected highlights end for {city}: {content[-40]!r}")
    new_inner = content + ",\n" + block + "\n"
    return text[: city_m.start(1)] + new_inner + text[city_m.end(1) :]

# Replace existing slots (rename / retarget)
REPLACES = [
    (
        "madrid",
        3,
        "마드리드 왕궁",
        "Royal Palace of Madrid",
        "팔라시오 레알. 유럽 최대급 왕궁 단지입니다.",
        "Palacio Real—one of Europe’s largest royal palaces.",
        "Palacio Real Madrid",
        "Palacio Real Madrid Royal Palace exterior facade",
    ),
    (
        "warsaw",
        2,
        "바르샤바 왕궁",
        "Royal Castle of Warsaw",
        "구시가 왕궁광장의 재건된 왕궁입니다.",
        "Rebuilt royal castle on Castle Square.",
        "Royal Castle Warsaw",
        "Royal Castle Warsaw Zamek Krolewski exterior",
    ),
    (
        "tallinn",
        5,
        "카드리오르그 궁전",
        "Kadriorg Palace",
        "표트르 대제가 지은 바로크 궁전과 공원입니다.",
        "Baroque palace and park built for Peter the Great.",
        "Kadriorg Palace Tallinn",
        "Kadriorg Palace Tallinn exterior",
    ),
]

# Append as new highlight (keep existing landmarks)
APPENDS = [
    (
        "budapest",
        7,
        "부다 왕궁",
        "Buda Castle Palace",
        "다뉴브가 내려다보이는 부다 언덕의 왕궁입니다.",
        "Royal palace complex overlooking the Danube.",
        "Buda Castle Palace Budapest",
        "Buda Castle Palace Budapest exterior",
    ),
    (
        "paris",
        7,
        "베르사유 궁전",
        "Palace of Versailles",
        "태양왕의 바로크 궁전과 정원입니다.",
        "Sun King’s baroque palace and gardens.",
        "Palace of Versailles",
        "Palace of Versailles exterior facade France",
    ),
    (
        "berlin",
        7,
        "샤를로텐부르크 궁전",
        "Charlottenburg Palace",
        "프로이센 왕실의 바로크 궁전과 정원입니다.",
        "Prussian royal baroque palace and gardens.",
        "Charlottenburg Palace Berlin",
        "Charlottenburg Palace Berlin exterior",
    ),
    (
        "rome",
        7,
        "퀴리날레 궁전",
        "Quirinal Palace",
        "이탈리아 대통령 관저이자 옛 왕궁입니다.",
        "Presidential residence and former royal palace.",
        "Palazzo del Quirinale Rome",
        "Quirinal Palace Rome exterior",
    ),
    (
        "lisbon",
        6,
        "아주다 왕궁",
        "Ajuda National Palace",
        "리스본의 네오클래식 왕실 궁전입니다.",
        "Neoclassical royal palace of Lisbon.",
        "Palácio Nacional da Ajuda Lisbon",
        "Ajuda National Palace Lisbon exterior",
    ),
    (
        "athens",
        6,
        "구왕궁",
        "Old Royal Palace",
        "신타그마 광장의 옛 왕궁(현 의회의사당)입니다.",
        "Former royal palace on Syntagma—now Parliament.",
        "Hellenic Parliament Athens Old Royal Palace",
        "Hellenic Parliament Athens Old Royal Palace exterior",
    ),
    (
        "istanbul",
        6,
        "톱카프 궁전",
        "Topkapi Palace",
        "오스만 제국의 상징 왕궁과 하렘입니다.",
        "Ottoman imperial palace and harem.",
        "Topkapi Palace Istanbul",
        "Topkapi Palace Istanbul exterior",
    ),
    (
        "sofia",
        6,
        "왕궁",
        "Former Royal Palace",
        "도심의 옛 불가리아 왕궁 건물입니다.",
        "Former Bulgarian royal palace in the centre.",
        "Royal Palace Sofia Bulgaria",
        "Former Royal Palace Sofia Bulgaria",
    ),
    (
        "bucharest",
        6,
        "왕궁",
        "Royal Palace of Bucharest",
        "혁명광장의 옛 왕궁(국립미술관)입니다.",
        "Former royal palace on Revolution Square.",
        "Royal Palace Bucharest National Museum of Art",
        "Royal Palace Bucharest Revolution Square",
    ),
    (
        "helsinki",
        7,
        "대통령궁",
        "Presidential Palace",
        "항구 옆의 옛 제국·왕실 궁전입니다.",
        "Waterfront former imperial palace, now presidential.",
        "Presidential Palace Helsinki",
        "Presidential Palace Helsinki exterior",
    ),
    (
        "belgrade",
        6,
        "구왕궁",
        "Old Palace",
        "도심의 세르비아 왕실 구왕궁입니다.",
        "Former Serbian royal Old Palace in the centre.",
        "Stari Dvor Belgrade Old Palace",
        "Stari Dvor Belgrade Old Palace exterior",
    ),
]


def main() -> None:
    text = CITIES.read_text(encoding="utf-8")

    for city, n, ko, en, dko, den, maps_q, _ in REPLACES:
        if f'name: {{ ko: "{ko}"' in text and f'id: "{city}-h{n}"' in text:
            # still refresh text block for description/maps consistency
            pass
        text = replace_highlight(text, city, n, ko, en, dko, den, maps_q)
        print(f"replaced {city}-h{n} -> {ko}")

    for city, n, ko, en, dko, den, maps_q, _ in APPENDS:
        text = append_highlight(text, city, n, ko, en, dko, den, maps_q)
        print(f"appended {city}-h{n} -> {ko}")

    CITIES.write_text(text, encoding="utf-8")
    print("wrote cities.ts")

    photo_jobs = [(c, n, pq) for c, n, *_, pq in (REPLACES + APPENDS)]
    ok = fail = 0
    for city, n, photo_q in photo_jobs:
        out = ROOT / "public" / "highlights" / f"{city}-{n}.jpg"
        try:
            src = find_image(photo_q)
            if not src:
                print(f"FAIL photo {city}-{n}")
                fail += 1
                continue
            save_cover(src, out)
            print(f"OK photo {out.name} ({out.stat().st_size // 1024}KB)")
            ok += 1
        except Exception as e:
            print(f"FAIL photo {city}-{n} {e}")
            fail += 1
        time.sleep(0.35)
    print(f"DONE photos ok={ok} fail={fail}")


if __name__ == "__main__":
    main()
