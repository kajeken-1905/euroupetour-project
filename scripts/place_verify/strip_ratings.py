"""Remove the estimated rating/reviewCount values from every place in src/data/places*.ts.

place(id, city, cat, name, rating, address, ko, en, opts) -> place(id, city, cat, name, address, ko, en, opts)
Object literals (places-part*.ts): drop the `rating:` and `reviewCount:` lines.
"""
import glob, re

def call_end(s, i):
    depth, q = 0, None
    while i < len(s):
        ch = s[i]
        if q:
            if ch == '\\': i += 2; continue
            if ch == q: q = None
        elif ch in '\'"`': q = ch
        elif ch in '([{': depth += 1
        elif ch in ')]}':
            depth -= 1
            if depth == 0: return i
        i += 1
    raise ValueError('unbalanced')

def split_top(s):
    parts, depth, q, cur, i = [], 0, None, '', 0
    while i < len(s):
        ch = s[i]
        if q:
            cur += ch
            if ch == '\\': cur += s[i + 1]; i += 2; continue
            if ch == q: q = None
        else:
            if ch in '\'"`': q = ch
            elif ch in '([{': depth += 1
            elif ch in ')]}': depth -= 1
            if ch == ',' and depth == 0: parts.append(cur); cur = ''; i += 1; continue
            cur += ch
        i += 1
    if cur.strip(): parts.append(cur)
    return parts

total = 0
for f in sorted(glob.glob('src/data/places*.ts')):
    s = open(f).read(); out, i, n = '', 0, 0
    for m in re.finditer(r'\bplace\(', s):
        if m.start() < i: continue
        start = m.end() - 1; end = call_end(s, start)
        args = split_top(s[start + 1:end])
        assert re.fullmatch(r'\s*\d(\.\d)?\s*', args[4]), (f, args[:5])
        del args[4]
        if len(args) > 7:
            o = args[7]
            o = re.sub(r'\s*reviewCount:\s*\d+\s*,?', '', o)
            o = re.sub(r',\s*\}', ' }', o); o = re.sub(r'\{\s*,\s*', '{ ', o)
            if re.fullmatch(r'\s*\{\s*\}\s*', o): del args[7]
            else: args[7] = o
        out += s[i:start + 1] + ','.join(args) + ')'; i = end + 1; n += 1
    out += s[i:]
    out = re.sub(r'\n[ \t]*(rating|reviewCount): [\d.]+,', '', out)
    if out != s: open(f, 'w').write(out); total += n
print('rewrote', total, 'place() calls')
