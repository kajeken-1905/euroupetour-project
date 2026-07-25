#!/usr/bin/env python3
"""Fetch Openverse photos for new AT/HU/CZ city signatures + landmarks."""

from __future__ import annotations

import json
import ssl
import time
import urllib.error
import urllib.parse
import urllib.request
from io import BytesIO
from pathlib import Path

import certifi
from PIL import Image

ROOT = Path(__file__).resolve().parents[1]
UA = "MyVacationPlan/1.0 (educational class project)"
CTX = ssl.create_default_context(cafile=certifi.where())

JOBS = [
    ("cities/vienna.jpg", "Vienna skyline"),
    ("cities/salzburg.jpg", "Salzburg old town"),
    ("cities/innsbruck.jpg", "Innsbruck Alps"),
    ("cities/graz.jpg", "Graz Schlossberg"),
    ("cities/hallstatt.jpg", "Hallstatt lake Austria"),
    ("cities/budapest.jpg", "Budapest parliament Danube"),
    ("cities/debrecen.jpg", "Debrecen Great Church"),
    ("cities/pecs.jpg", "Pecs Hungary"),
    ("cities/szeged.jpg", "Szeged Votive Church"),
    ("cities/eger.jpg", "Eger Castle Hungary"),
    ("cities/prague.jpg", "Prague Charles Bridge"),
    ("cities/brno.jpg", "Brno Czech Republic"),
    ("cities/cesky-krumlov.jpg", "Cesky Krumlov castle"),
    ("cities/karlovy-vary.jpg", "Karlovy Vary colonnade"),
    ("cities/ceske-budejovice.jpg", "Ceske Budejovice square"),
    ("landmarks/landmark-at.jpg", "Schönbrunn Palace Vienna"),
    ("landmarks/landmark-hu.jpg", "Hungarian Parliament Budapest"),
    ("landmarks/landmark-cz.jpg", "Prague Castle"),
]


def open_url(url: str) -> bytes:
    req = urllib.request.Request(url, headers={"User-Agent": UA, "Accept": "application/json,image/*"})
    for attempt in range(5):
        try:
            with urllib.request.urlopen(req, timeout=45, context=CTX) as r:
                return r.read()
        except urllib.error.HTTPError as e:
            if e.code in (429, 503):
                time.sleep(min(30, 2 ** attempt))
                continue
            raise
        except Exception:
            time.sleep(1.5 * (attempt + 1))
    raise RuntimeError(url)


def find_image(query: str) -> str | None:
    qs = urllib.parse.urlencode(
        {
            "q": query,
            "page_size": "8",
            "license": "cc0,pdm,by,by-sa,by-nc,by-nd,by-nc-sa,by-nc-nd",
            "category": "photograph",
        }
    )
    data = json.loads(open_url("https://api.openverse.org/v1/images/?" + qs).decode())
    for item in data.get("results") or []:
        src = item.get("url") or item.get("thumbnail")
        if src:
            return src
    return None


def save_cover(url: str, out: Path) -> None:
    raw = open_url(url)
    img = Image.open(BytesIO(raw)).convert("RGB")
    w, h = img.size
    target = 1200 / 800
    if w / h > target:
        nw = int(h * target)
        left = max(0, (w - nw) // 2)
        img = img.crop((left, 0, min(w, left + nw), h))
    else:
        nh = int(w / target)
        top = max(0, (h - nh) // 2)
        img = img.crop((0, top, w, min(h, top + nh)))
    img = img.resize((1200, 800), Image.Resampling.LANCZOS)
    out.parent.mkdir(parents=True, exist_ok=True)
    img.save(out, "JPEG", quality=85, optimize=True)


def main() -> None:
    for rel, query in JOBS:
        out = ROOT / "public" / rel
        if out.exists() and out.stat().st_size > 5000:
            print(f"skip {rel}")
            continue
        try:
            src = find_image(query)
            if not src:
                print(f"FAIL no image {rel} {query!r}")
                continue
            save_cover(src, out)
            print(f"OK {rel} <- {query!r}")
        except Exception as e:
            print(f"FAIL {rel} {type(e).__name__}:{e}")
        time.sleep(0.35)


if __name__ == "__main__":
    main()
