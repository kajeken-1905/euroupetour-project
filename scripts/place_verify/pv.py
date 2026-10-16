"""Place re-verification log and applier (2026-10 campaign).

python3 scripts/place_verify/pv.py add '{"id": {...}}'   record decisions
  {"ok": 1}                          exists, details right
  {"ok": 1, "addr": "...", "name": "...", "ko": "...", "en": "...", "cat": "cafe", "mi": "star1|star2|star3|bib"}
  {"del": "reason"}                  closed / not found / not this kind of place
python3 scripts/place_verify/pv.py apply                 write decisions into src/data/places*.ts
python3 scripts/place_verify/pv.py next N                print the next N unchecked places
"""
import glob, json, os, re, sys, urllib.parse

D = os.path.dirname(os.path.abspath(__file__))
DEC = D + '/decisions.json'
ROOT = os.path.abspath(D + '/../..')


def load():
    return json.load(open(DEC))


def lit(v):
    return "'" + v.replace('\\', '\\\\').replace("'", "\\'") + "'"


def call_end(s, i):
    depth, q = 0, None
    while i < len(s):
        ch = s[i]
        if q:
            if ch == '\\':
                i += 2
                continue
            if ch == q:
                q = None
        elif ch in '\'"`':
            q = ch
        elif ch in '([{':
            depth += 1
        elif ch in ')]}':
            depth -= 1
            if depth == 0:
                return i
        i += 1
    raise ValueError('unbalanced')


def split_top(s):
    parts, depth, q, cur, i = [], 0, None, '', 0
    while i < len(s):
        ch = s[i]
        if q:
            cur += ch
            if ch == '\\':
                cur += s[i + 1]
                i += 2
                continue
            if ch == q:
                q = None
        else:
            if ch in '\'"`':
                q = ch
            elif ch in '([{':
                depth += 1
            elif ch in ')]}':
                depth -= 1
            if ch == ',' and depth == 0:
                parts.append(cur)
                cur = ''
                i += 1
                continue
            cur += ch
        i += 1
    if cur.strip():
        parts.append(cur)
    return parts


def set_opt(o, key, val):
    o = (o or '').strip()
    body = o[1:-1].strip() if o.startswith('{') else ''
    items = [x.strip() for x in split_top(body)] if body else []
    items = [x for x in items if not x.startswith(key + ':')]
    if val is not None:
        items.insert(0, f'{key}: {lit(val)}')
    return '{ ' + ', '.join(items) + ' }' if items else None


def apply():
    dec = load()
    done, deleted = set(), []
    for f in sorted(glob.glob(ROOT + '/src/data/places*.ts')):
        s = open(f).read()
        orig = s
        # place('id', ...) calls, one per line
        out, i = '', 0
        for m in re.finditer(r"\n([ \t]*)place\('([^']+)'", s):
            pid = m.group(2)
            if pid not in dec or m.start() < i:
                continue
            start = s.index('(', m.start())
            end = call_end(s, start)
            tail = end + 1
            if s[tail:tail + 1] == ',':
                tail += 1
            d = dec[pid]
            done.add(pid)
            if 'del' in d:
                out += s[i:m.start()]
                i = tail
                deleted.append(pid)
                continue
            args = [a.strip() for a in split_top(s[start + 1:end])]
            if d.get('name'):
                args[3] = lit(d['name'])
            if d.get('cat'):
                args[2] = lit(d['cat'])
            if d.get('addr'):
                args[4] = lit(d['addr'])
            if d.get('ko'):
                args[5] = lit(d['ko'])
            if d.get('en'):
                args[6] = lit(d['en'])
            if 'mi' in d:
                o = set_opt(args[7] if len(args) > 7 else None, 'michelin', d['mi'] or None)
                args = args[:7] + ([o] if o else [])
            out += s[i:start + 1] + ', '.join(args) + ')'
            i = end + 1
        out += s[i:]
        s = out
        # object literals in places-part*.ts
        for pid, d in dec.items():
            m = re.search(r"\n([ \t]*)\{\n[ \t]*id: '" + re.escape(pid) + r"',", s)
            if not m:
                continue
            start = m.start() + 1 + len(m.group(1))
            end = call_end(s, start)
            tail = end + 1 + (1 if s[end + 1:end + 2] == ',' else 0)
            done.add(pid)
            if 'del' in d:
                s = s[:m.start()] + s[tail:]
                deleted.append(pid)
                continue
            block = s[start:end + 1]
            ind = m.group(1) + '  '
            if d.get('addr'):
                block = re.sub(r"\n[ \t]*address: .*,", '\n' + ind + 'address: ' + lit(d['addr']) + ',', block, count=1)
            if d.get('name'):
                block = re.sub(r"\n[ \t]*name: .*,", '\n' + ind + 'name: ' + lit(d['name']) + ',', block, count=1)
            if d.get('ko'):
                block = re.sub(r"\n([ \t]*)ko: .*,", lambda m: '\n' + m.group(1) + 'ko: ' + lit(d['ko']) + ',', block, count=1)
            if d.get('en'):
                block = re.sub(r"\n([ \t]*)en: .*,", lambda m: '\n' + m.group(1) + 'en: ' + lit(d['en']) + ',', block, count=1)
            if d.get('cat'):
                block = re.sub(r"\n[ \t]*category: .*,", '\n' + ind + 'category: ' + lit(d['cat']) + ',', block, count=1)
            if d.get('addr') or d.get('name'):
                nm = d.get('name') or re.search(r"\n[ \t]*name: '(.*)',", block).group(1)
                ad = d.get('addr') or re.search(r"\n[ \t]*address: '(.*)',", block).group(1)
                q = urllib.parse.quote(f'{nm} {ad}')
                block = re.sub(r"\n([ \t]*)mapsUrl: .*,", lambda m: '\n' + m.group(1) + "mapsUrl: 'https://www.google.com/maps/search/?api=1&query=" + q + "',", block, count=1)
            if 'mi' in d:
                block = re.sub(r"\n[ \t]*michelin: .*,", '', block)
                if d['mi']:
                    block = re.sub(r"(\n[ \t]*address: .*,)", '\n' + ind + 'michelin: ' + lit(d['mi']) + r',\1', block, count=1)
            s = s[:start] + block + s[end + 1:]
        if s != orig:
            open(f, 'w').write(s)
    for pid in deleted:
        for ext in ('jpg', 'webp', 'png'):
            p = f'{ROOT}/public/places/{pid}.{ext}'
            if os.path.exists(p):
                os.remove(p)
    missing = sorted(set(dec) - done)
    print('applied', len(done), 'deleted', len(deleted), 'not found', missing[:20])


def main():
    cmd = sys.argv[1]
    if cmd == 'add':
        dec = load()
        dec.update(json.loads(sys.argv[2]))
        json.dump(dec, open(DEC, 'w'), ensure_ascii=False, indent=0, sort_keys=True)
        print(len(dec), 'decisions')
    elif cmd == 'apply':
        apply()
    elif cmd == 'next':
        dec = load()
        w = [x for x in json.load(open(D + '/worklist.json')) if x['id'] not in dec]
        for x in w[:int(sys.argv[2])]:
            print(f"{x['id']} | {x['name']} | {x['addr']} | {x['city']} | {x.get('ko','')[:40]}")
        print('left', len(w))


main()
