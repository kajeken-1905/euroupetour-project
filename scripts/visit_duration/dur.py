"""Record and apply suggested-visit-time checks for highlights.

  python3 scripts/visit_duration/dur.py add '{"id": [min, max] | "ok" | "nodata", ...}'
  python3 scripts/visit_duration/dur.py apply
"""
import glob
import json
import re
import sys

LOG = 'scripts/visit_duration/checked.json'


def load():
    try:
        return json.load(open(LOG))
    except FileNotFoundError:
        return {}


def apply():
    log = load()
    for f in glob.glob('src/data/visit-*.ts'):
        s = o = open(f).read()
        for k, val in log.items():
            if not isinstance(val, list):
                continue
            s = re.sub(r"('%s': v\()\d+, \d+" % re.escape(k), r'\g<1>%d, %d' % tuple(val), s)
        if s != o:
            open(f, 'w').write(s)
            print('edited', f)


if __name__ == '__main__':
    if sys.argv[1] == 'add':
        log = load()
        log.update(json.loads(sys.argv[2]))
        json.dump(log, open(LOG, 'w'), ensure_ascii=False, indent=0, sort_keys=True)
        print(len(log), 'checked')
    elif sys.argv[1] == 'apply':
        apply()
