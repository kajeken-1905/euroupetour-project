#!/usr/bin/env python3
"""Download real App Store artwork thumbnails into public/transit-apps/."""

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
from PIL import Image, ImageDraw, ImageFont

ROOT = Path(__file__).resolve().parents[1]
OUT = ROOT / "public" / "transit-apps"
UA = "MyVacationPlan/1.0 (educational class project)"
CTX = ssl.create_default_context(cafile=certifi.where())

# slug -> (itunes search term, country code)
APPS: dict[str, tuple[str, str]] = {
    "uber": ("Uber - Request a ride", "us"),
    "citymapper": ("Citymapper", "us"),
    "free-now": ("FREE NOW", "de"),
    "cabify": ("Cabify", "es"),
    "renfe": ("Renfe", "es"),
    "alsa": ("ALSA", "es"),
    "cp": ("CP Oficiais", "pt"),
    "rede-expressos": ("Rede Expressos", "pt"),
    "carris": ("Carris", "pt"),
    "metro-lisboa": ("Metro Lisboa", "pt"),
    "metro-madrid": ("Metro de Madrid", "es"),
    "tmb": ("TMB App", "es"),
    "tussam": ("TUSSAM", "es"),
    "metrovalencia": ("Metrovalencia", "es"),
    "gibraltar": ("Visit Gibraltar", "gb"),
}

COLORS = {
    "uber": ("#000000", "#FFFFFF"),
    "citymapper": ("#37B34A", "#FFFFFF"),
    "free-now": ("#F5C518", "#14110F"),
    "cabify": ("#7145D6", "#FFFFFF"),
    "renfe": ("#8B1A1A", "#FFFFFF"),
    "alsa": ("#0B6E4F", "#FFFFFF"),
    "cp": ("#0A4D8C", "#FFFFFF"),
    "rede-expressos": ("#C8102E", "#FFFFFF"),
    "carris": ("#F5C400", "#14110F"),
    "metro-lisboa": ("#D4002A", "#FFFFFF"),
    "metro-madrid": ("#0055A5", "#FFFFFF"),
    "tmb": ("#E30613", "#FFFFFF"),
    "tussam": ("#E87722", "#FFFFFF"),
    "metrovalencia": ("#C8102E", "#FFFFFF"),
    "gibraltar": ("#C8102E", "#FFFFFF"),
}


def open_url(url: str) -> bytes:
    req = urllib.request.Request(url, headers={"User-Agent": UA, "Accept": "*/*"})
    for attempt in range(5):
        try:
            with urllib.request.urlopen(req, timeout=40, context=CTX) as r:
                return r.read()
        except urllib.error.HTTPError as e:
            if e.code in (429, 503):
                time.sleep(min(20, 2**attempt))
                continue
            raise
        except Exception:
            time.sleep(1.2 * (attempt + 1))
    raise RuntimeError(url)


def itunes_icon(term: str, country: str) -> str | None:
    qs = urllib.parse.urlencode(
        {"term": term, "entity": "software", "country": country, "limit": "5"}
    )
    data = json.loads(open_url("https://itunes.apple.com/search?" + qs).decode())
    results = data.get("results") or []
    # Prefer exact-ish name match, else first with artwork
    term_l = term.lower()
    ranked = sorted(
        results,
        key=lambda r: (
            0 if term_l.split()[0] in (r.get("trackName") or "").lower() else 1,
            -(r.get("averageUserRatingCount") or 0),
        ),
    )
    for item in ranked:
        art = item.get("artworkUrl512") or item.get("artworkUrl100")
        if art:
            # bump resolution if possible
            return art.replace("100x100bb", "512x512bb").replace("512x512bb", "512x512bb")
    return None


def initials_icon(slug: str, label: str) -> Image.Image:
    bg, fg = COLORS.get(slug, ("#14110F", "#FFFFFF"))
    img = Image.new("RGB", (512, 512), bg)
    draw = ImageDraw.Draw(img)
    text = "".join(ch for ch in label if ch.isalnum())[:2].upper() or slug[:2].upper()
    try:
        font = ImageFont.truetype("/System/Library/Fonts/Supplemental/Arial Bold.ttf", 180)
    except Exception:
        font = ImageFont.load_default()
    bbox = draw.textbbox((0, 0), text, font=font)
    tw, th = bbox[2] - bbox[0], bbox[3] - bbox[1]
    draw.text(((512 - tw) / 2, (512 - th) / 2 - 10), text, fill=fg, font=font)
    return img


def save_png(path: Path, img: Image.Image) -> None:
    path.parent.mkdir(parents=True, exist_ok=True)
    img = img.convert("RGB").resize((256, 256), Image.Resampling.LANCZOS)
    # rounded-ish by slight corner overlay not needed; CSS will round
    img.save(path, "PNG", optimize=True)


def main() -> None:
    OUT.mkdir(parents=True, exist_ok=True)
    for slug, (term, country) in APPS.items():
        out = OUT / f"{slug}.png"
        try:
            icon_url = itunes_icon(term, country)
            if icon_url:
                raw = open_url(icon_url)
                img = Image.open(BytesIO(raw)).convert("RGB")
                save_png(out, img)
                print(f"OK {slug} <- itunes")
            else:
                save_png(out, initials_icon(slug, term))
                print(f"FALLBACK {slug} (no itunes hit)")
        except Exception as e:
            save_png(out, initials_icon(slug, term))
            print(f"FALLBACK {slug}: {e}")
        time.sleep(0.35)
    print("DONE", OUT)


if __name__ == "__main__":
    main()
