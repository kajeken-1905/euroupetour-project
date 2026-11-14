#!/usr/bin/env python3
"""Iceland step 1 follow-up (2026-11-14): the Christmas Garden near Akureyri and the Secret Lagoon have no free-licence
photos on Commons, so akureyri-h7 becomes the Laufás turf farm and selfoss-h6 becomes Skálholt. Run once."""
import re, json, urllib.parse
from add_daytrip_places import rd, wr

SWAP = {
 'akureyri-h7': ('라우바스 잔디 지붕 농가', 'Laufás', '피오르 동쪽 기슭의 19세기 잔디 지붕 목사관 농가와 교회를 그대로 둔 박물관으로, 옛 농가 생활을 봅니다.', 'A 19th-century turf-roofed parsonage farm and church on the eastern shore of the fjord, kept as a museum of old rural life.', 'Laufás', 45, 60,
                 '아쿠레이리에서 북쪽으로 약 30km이며 주로 여름에 엽니다.|About 30 km north of Akureyri, mainly open in summer.'),
 'selfoss-h6': ('스칼홀트', 'Skálholt', '1056년부터 700여 년 동안 아이슬란드 남부의 주교좌였던 곳으로, 1963년 지은 대성당과 옛 터 발굴지가 있습니다.', 'For some 700 years from 1056 the seat of the bishops of southern Iceland, with a cathedral built in 1963 and an excavated medieval site.', 'Skálholt', 30, 60, None),
}


def main():
    c = rd('cities.ts')
    for hid, (ko, en, dko, den, maps, mn, mx, n) in SWAP.items():
        i = c.index(f'id: "{hid}"'); j = c.index('\n      }', i); b = c[i:j]
        b = re.sub(r'name: \{[^\n]*\}', f'name: {{ ko: "{ko}", en: "{en}" }}', b)
        b = re.sub(r'description: \{[^\n]*\}', f'description: {{ ko: "{dko}", en: "{den}" }}', b)
        b = re.sub(r'mapsUrl: "[^"]*"', 'mapsUrl: "https://www.google.com/maps/search/?api=1&query=' + urllib.parse.quote(maps) + '"', b)
        c = c[:i] + b + c[j:]
    wr('cities.ts', c)
    v = rd('visit-nordic.ts')
    for hid, t in SWAP.items():
        n = t[7]
        new = f"  '{hid}': v({t[5]}, {t[6]}" + (f", {{ n: '{n}' }}" if n else '') + "),\n"
        v, k = re.subn(rf"^  '{hid}': v\(.*\),\n", new, v, flags=re.M)
        assert k == 1, hid
    wr('visit-nordic.ts', v)
    it = rd('itinerary-north.ts')
    a = "      ['크리스마스 하우스|Christmas Garden', 7],\n"
    assert it.count(a) == 1
    wr('itinerary-north.ts', it.replace(a, "      ['라우바스|Laufás', 7],\n"))


if __name__ == '__main__':
    main()
