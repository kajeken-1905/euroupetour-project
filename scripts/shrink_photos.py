"""Shrink the photos in public/ to the size the app actually displays.

  python3 scripts/shrink_photos.py            # dry run: report what would change
  python3 scripts/shrink_photos.py --apply    # overwrite the files in place
  python3 scripts/shrink_photos.py --sample DIR   # write a before/after sheet for the most detailed photos

File names and the JPEG format are kept, so no data file needs editing. A photo is left alone when it
is already small enough and re-encoding would not save at least 10%.
"""
import io, os, sys
from PIL import Image, ImageOps

ROOT = os.path.join(os.path.dirname(os.path.abspath(__file__)), '..', 'public')
# Folder → longest side in pixels. Highlight cards are ~400 px wide; city and landmark photos also fill heroes.
TARGETS = {'highlights': 800, 'cities': 960, 'landmarks': 960}
QUALITY = 78


def shrink(path, side):
    """Return the re-encoded bytes, or None when the file should stay as it is."""
    size = os.path.getsize(path)
    im = ImageOps.exif_transpose(Image.open(path)).convert('RGB')
    im.thumbnail((side, side), Image.LANCZOS)
    out = io.BytesIO()
    im.save(out, 'JPEG', quality=QUALITY, optimize=True, progressive=True)
    return out.getvalue() if out.tell() <= size * 0.9 else None


def files():
    for folder, side in TARGETS.items():
        d = os.path.join(ROOT, folder)
        for f in sorted(os.listdir(d)):
            if f.lower().endswith(('.jpg', '.jpeg')):
                yield folder, os.path.join(d, f), side


def sample(out):
    os.makedirs(out, exist_ok=True)
    scored = []
    for folder, path, side in files():
        w, h = Image.open(path).size
        scored.append((os.path.getsize(path) / (w * h), folder, path, side))
    scored.sort(reverse=True)
    picks = [s for s in scored if s[1] == 'highlights'][:6] + [s for s in scored if s[1] == 'cities'][:2]
    rows = []
    for i, (_, folder, path, side) in enumerate(picks):
        data = shrink(path, side) or open(path, 'rb').read()
        name = f'{i}.jpg'
        open(os.path.join(out, name), 'wb').write(data)
        w, h = Image.open(path).size
        nw, nh = Image.open(io.BytesIO(data)).size
        rows.append(
            f'<h2>{folder}/{os.path.basename(path)}</h2><div class="pair">'
            f'<figure><img src="file://{os.path.abspath(path)}"><figcaption>원본 · {w}×{h} · {os.path.getsize(path) // 1000}KB</figcaption></figure>'
            f'<figure><img src="{name}"><figcaption>축소 · {nw}×{nh} · {len(data) // 1000}KB</figcaption></figure></div>'
        )
    html = (
        '<!doctype html><meta charset="utf-8"><title>사진 축소 비교</title><style>'
        'body{font-family:-apple-system,sans-serif;margin:24px;background:#f4f1ee}h1{font-size:20px}h2{font-size:14px;margin:28px 0 8px}'
        '.pair{display:flex;gap:16px;flex-wrap:wrap}figure{margin:0}img{width:400px;display:block;border-radius:10px}'
        'body.zoom img{width:800px}figcaption{font-size:13px;color:#555;margin-top:6px}button{font-size:14px;padding:8px 14px}'
        '</style><h1>사진 축소 비교 — 왼쪽 원본, 오른쪽 축소본</h1>'
        '<p>앱에서 보이는 크기(폭 400)입니다. 세부가 가장 많은 사진만 골랐습니다. '
        '<button onclick="document.body.classList.toggle(\'zoom\')">2배로 확대해 보기</button></p>' + ''.join(rows)
    )
    open(os.path.join(out, 'index.html'), 'w').write(html)
    print(os.path.join(out, 'index.html'))


def main():
    if '--sample' in sys.argv:
        return sample(sys.argv[sys.argv.index('--sample') + 1])
    apply = '--apply' in sys.argv
    totals = {}
    for folder, path, side in files():
        before = os.path.getsize(path)
        data = shrink(path, side)
        if data and apply:
            open(path, 'wb').write(data)
        t = totals.setdefault(folder, [0, 0, 0, 0])
        t[0] += 1
        t[1] += data is not None
        t[2] += before
        t[3] += len(data) if data else before
    for folder, (n, changed, before, after) in totals.items():
        print(f'{folder:12}{changed}/{n} files  {before / 1e6:.1f}MB -> {after / 1e6:.1f}MB')
    print('applied' if apply else 'dry run (use --apply to write)')


main()
