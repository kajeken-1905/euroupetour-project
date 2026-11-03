#!/usr/bin/env python3
"""2026-11-04 (user request "맛집데이터도 검증해줘"):
1) Google Maps check of the 123 places added after the October re-verification (51 MICHELIN ones were matched to
   their 2026 guide pages): closed / not found -> deleted, moved -> address fixed.
2) Bakeries and cafés for the new cities, taken from Google Maps (open, address read from the place page,
   rating >= 4.4). Clervaux had no well-reviewed bakery or café and stays empty. Run once."""
import re
from add_daytrip_places import rd, wr, js

DELETE = ['sark-cafe-2', 'castletown-fine_dining-1', 'st-peter-port-cafe-2', 'moscow-bakery-1',
          'saint-petersburg-bakery-2', 'vladivostok-fine_dining-1', 'eysturoy-cafe-1', 'gorey-cafe-1']
# id -> {field: (old, new)}
EDIT = {
    'vagar-fine_dining-1': [("'Úti á Gjógv 12, Sandavágur'", "'Úti á Bakka 12, Sandavágur'")],
    'douglas-fine_dining-1': [("'31 North Quay", "'30 North Quay")],
    'douglas-bakery-1': [("'Market Hall, Market Hill, Douglas IM1 2BH', '마켓 홀 안의 사워도우 베이커리. 직접 볶은 커피와 브런치를 냅니다.', 'Sourdough bakery in the Market Hall, with its own roasted coffee and brunch.'",
                          "'Peveril Buildings, Peveril Square, Douglas', '피버릴 광장의 사워도우 베이커리. 커피와 브런치도 냅니다.', 'Sourdough bakery on Peveril Square, also serving coffee and brunch.'")],
    'peel-cafe-1': [("'House of Manannan, Peel IM5 1JH'", "'Station Place, Peel'")],
    'vladivostok-fine_dining-2': [("'GUM courtyard, Svetlanskaya St 35, Vladivostok'", "'Svetlanskaya St 33/2 (GUM courtyard), Vladivostok'")],
    'vagar-cafe-1': [("'Farm café near the Múlafossur waterfall, cooking with produce from the farm.'",
                      "'Farm café near the Múlafossur waterfall, cooking with produce from the farm. Google Maps currently shows it as temporarily closed, so check before you go.'"),
                     ("농장에서 난 재료로 요리합니다.'", "농장에서 난 재료로 요리합니다. 지금은 구글지도에 임시 휴업으로 나오니 가기 전에 확인하세요.'")],
}

B, C = 'bakery', 'cafe'
NEW = {
    'places-ch-extra.ts': {
        'st-gallen': [
            (B, "g'nuss", 'Lämmlisbrunnenstrasse 4, 9000 St. Gallen', '구시가 동쪽의 파티스리 겸 카페. 크루아상과 케이크를 냅니다.', 'Patisserie and café east of the old town, with croissants and cakes.'),
            (B, 'Confiserie Roggwiller', 'Multergasse 17, 9000 St. Gallen', '구시가 물터가세의 제과점. 장크트갈렌 전통 과자 비버(아몬드 소 생강빵)를 팝니다.', 'Confectioner on the Multergasse selling St. Gallen’s traditional Biber (almond-filled gingerbread).'),
            (C, 'Kafi Franz', 'Linsebühlstrasse 35, 9000 St. Gallen', '린제뷜 거리의 카페 겸 식당. 아침부터 브런치와 커피를 냅니다.', 'Café-restaurant on the Linsebühlstrasse, serving brunch and coffee from the morning.'),
            (C, 'Mano Espresso Bar', 'Brühlgasse 35, 9000 St. Gallen', '구시가 브륄가세의 작은 에스프레소 바.', 'Small espresso bar on the Brühlgasse in the old town.'),
            (C, 'Kaffeehaus', 'Linsebühlstrasse 77, 9000 St. Gallen', '린제뷜 거리의 동네 카페.', 'Neighbourhood café on the Linsebühlstrasse.'),
        ],
        'chur': [
            (B, 'Bühler’s Zuckerbäckerei', 'Untere Gasse 32, 7000 Chur', '구시가 운터레 가세의 제과점.', 'Confectioner on the Untere Gasse in the old town.'),
            (B, 'Chüechli Backstuba & Café', 'Untere Gasse 17, 7000 Chur', '구시가 운터레 가세의 빵집 겸 카페. 케이크와 과자를 굽습니다.', 'Bakery-café on the Untere Gasse in the old town, baking cakes and pastries.'),
            (C, 'Quintacoira Kaffeerösterei', 'Paradiesgasse 4, 7000 Chur', '구시가의 커피 로스터리 카페.', 'Coffee roastery and café in the old town.'),
            (C, 'Café Zschaler', 'Obere Gasse 31, 7000 Chur', '구시가 오베레 가세의 카페.', 'Café on the Obere Gasse in the old town.'),
        ],
        'locarno': [
            (B, "Marnin - Piazza Sant'Antonio", "Piazza Sant'Antonio, 6600 Locarno", '구시가 산탄토니오 광장의 제과점 겸 카페.', 'Pastry shop and café on the Piazza Sant’Antonio in the old town.'),
            (C, 'MUYU Coffee Roasters', 'Via Castelrotto 18A, 6600 Locarno', '직접 원두를 볶는 스페셜티 커피 카페.', 'Speciality coffee café that roasts its own beans.'),
            (C, 'Giannino Cafè 1899', 'Via vecchia Dogana 1, 6600 Locarno', '시내 중심의 카페.', 'Café in the town centre.'),
        ],
        'bellinzona': [
            (B, 'Al Porto Bellinzona', 'Viale Stazione 1, 6500 Bellinzona', '역 앞 거리의 제과점 겸 카페. 티치노의 제과점 체인입니다.', 'Pastry shop and café on the station avenue, part of a Ticino confectioner chain.'),
            (C, 'L’arte del caffè', 'Viale Portone 45, 6500 Bellinzona', '포르토네 거리의 카페.', 'Café on the Viale Portone.'),
        ],
        'lauterbrunnen': [
            (B, 'Airtime Cafe Bakery', 'Fuhren 452D, 3822 Lauterbrunnen', '마을 중심의 빵집 겸 카페.', 'Bakery-café in the village centre.'),
            (C, 'Flavours Cafe', 'Fuhren 452C, 3822 Lauterbrunnen', '마을 중심의 카페.', 'Café in the village centre.'),
            (C, 'Cycling Bean Coffee-Bike', 'Pfrundmatte 419, 3822 Lauterbrunnen', '관광안내소 근처의 자전거 커피 노점.', 'Coffee bike near the tourist office.'),
        ],
        'kandersteg': [
            (B, 'Feinbäckerei Tea Room Marmotte', 'Innere Dorfstrasse 19, 3718 Kandersteg', '마을 중심 도르프슈트라세의 빵집 겸 찻집.', 'Bakery and tea room on the main village street.'),
        ],
    },
    'places-nl-extra.ts': {
        'leiden': [
            (B, 'Stadsbakkerij Water & Bloem', 'Pieterskerk-Choorsteeg 26, 2311 TR Leiden', '피터르스 교회 옆 골목의 빵집.', 'Bakery in the lane beside the Pieterskerk.'),
            (B, 'Mamie Gourmande', 'Gangetje 14, 2311 ER Leiden', '구시가 골목의 빵집 겸 카페.', 'Bakery-café in an old-town lane.'),
            (C, 'Giò Neapolitan Espresso', 'Sint Jorissteeg 13, 2311 JA Leiden', '나폴리식 에스프레소를 내는 카페.', 'Café serving Neapolitan-style espresso.'),
            (C, 'Chummy Coffee Leiden', 'Breestraat 97, 2311 CK Leiden', '중심가 브레이스트라트의 카페.', 'Café on the Breestraat, the main street.'),
        ],
    },
    'places-be-extra.ts': {
        'mechelen': [
            (B, "niki's bakery", 'Guldenstraat 16, 2800 Mechelen', '시내 중심 휠던스트라트의 빵집.', 'Bakery on the Guldenstraat in the centre.'),
            (B, 'De Zotte Morgen', 'Goswin de Stassartstraat 50, 2800 Mechelen', '카제르너 도신 근처의 빵집.', 'Bakery near Kazerne Dossin.'),
            (C, 'Mimi', 'Bruul 131, 2800 Mechelen', '쇼핑 거리 브뤼얼의 커피숍.', 'Coffee shop on the Bruul shopping street.'),
            (C, 'Rosco Coffee & more', 'Bruul 11, 2800 Mechelen', '쇼핑 거리 브뤼얼의 커피숍.', 'Coffee shop on the Bruul shopping street.'),
        ],
    },
    'places-cz-extra.ts': {
        'olomouc': [
            (B, 'Pekařství Sázava', 'Ostružnická 343, 779 00 Olomouc', '구시가 오스트루주니츠카 거리의 빵집.', 'Bakery on Ostružnická street in the old town.'),
            (C, 'Pikola espresso bar', 'Ostružnická 337/30, 779 00 Olomouc', '구시가 오스트루주니츠카 거리의 에스프레소 바.', 'Espresso bar on Ostružnická street in the old town.'),
            (C, 'KAFE JAK LUSK', 'třída Svobody 646/4, 779 00 Olomouc', '구시가 가장자리 스보보디 거리의 카페.', 'Café on třída Svobody at the edge of the old town.'),
        ],
    },
    'places-hu-extra.ts': {
        'tihany': [
            (B, 'Apátsági Rege Cukrászda', 'Kossuth Lajos u. 22, 8237 Tihany', '수도원 언덕의 제과점 겸 카페. 테라스에서 벌러톤 호수가 보입니다.', 'Cake shop and café on the abbey hill, with Lake Balaton views from the terrace.'),
            (C, 'Énidő Specialty Cafe', 'Rév u. 2, 8237 Tihany', '페리 선착장 쪽 레브 거리의 스페셜티 커피 카페.', 'Speciality coffee café on Rév utca by the ferry pier.'),
        ],
    },
}


def main():
    import glob
    files = {f.split('/')[-1]: rd(f.split('/')[-1]) for f in glob.glob(__import__('os').path.join(__import__('os').path.dirname(__file__), '../src/data/places*.ts'))}
    for pid in DELETE:
        for f, s in files.items():
            m = re.search(r"\n  place\('%s',[^\n]*" % re.escape(pid), s)
            if m:
                assert 'image:' not in m.group(0), pid
                files[f] = s[:m.start()] + s[m.end():]
                break
        else:
            raise SystemExit('missing ' + pid)
    for pid, subs in EDIT.items():
        for f, s in files.items():
            i = s.find("place('%s'" % pid)
            if i < 0:
                continue
            j = s.find('\n', i)
            line = s[i:j]
            for old, new in subs:
                assert old in line, (pid, old)
                line = line.replace(old, new)
            files[f] = s[:i] + line + s[j:]
            break
        else:
            raise SystemExit('missing ' + pid)
    for f, cities in NEW.items():
        s = files[f]
        block = ''
        for cid, rows in cities.items():
            n = {B: 0, C: 0}
            for cat, name, addr, ko, en in rows:
                n[cat] += 1
                pid = f'{cid}-{cat}-{n[cat]}'
                assert f"'{pid}'" not in s, pid
                block += f"  place('{pid}', '{cid}', '{cat}', {js(name)}, {js(addr)}, {js(ko)}, {js(en)}),\n"
        k = s.rstrip().rindex(']')
        files[f] = s[:k].rstrip('\n') + '\n' + block + s[k:]
    for f, s in files.items():
        if s != rd(f):
            wr(f, s)
            print('wrote', f)


if __name__ == '__main__':
    main()
