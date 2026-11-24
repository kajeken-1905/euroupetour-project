"""City groups = official first-level divisions, in each country's official/statistical order (2026-11-24, user).
Hungary uses its 8 statistical regions (not 19 counties); Türkiye its 7 geographical regions."""
import re
SCO = ('스코틀랜드', 'Scotland', ['edinburgh', 'glasgow', 'stirling', 'st-andrews', 'oban', 'inverness', 'fort-william', 'isle-of-skye'])
WAL = ('웨일스', 'Wales', ['cardiff', 'tenby', 'snowdonia', 'conwy', 'llangollen'])
NI = ('북아일랜드', 'Northern Ireland', ['belfast', 'giants-causeway', 'derry'])
C = {
 'es': [
  ('안달루시아', 'Andalusia', ['seville', 'cordoba', 'granada', 'malaga', 'ronda', 'nerja', 'cadiz', 'jerez', 'tarifa', 'almeria', 'ubeda']),
  ('아라곤', 'Aragon', ['zaragoza', 'teruel']),
  ('아스투리아스', 'Asturias', ['oviedo']),
  ('발레아레스 제도', 'Balearic Islands', ['palma', 'ibiza', 'menorca']),
  ('카나리아 제도', 'Canary Islands', ['tenerife']),
  ('칸타브리아', 'Cantabria', ['santander']),
  ('카스티야이레온', 'Castile and León', ['salamanca', 'segovia', 'avila', 'leon', 'burgos']),
  ('카스티야라만차', 'Castile–La Mancha', ['toledo', 'cuenca']),
  ('카탈루냐', 'Catalonia', ['barcelona', 'montserrat', 'sitges', 'girona', 'tarragona']),
  ('발렌시아 지방', 'Valencian Community', ['valencia', 'alicante']),
  ('에스트레마두라', 'Extremadura', ['caceres', 'merida']),
  ('갈리시아', 'Galicia', ['santiago']),
  ('마드리드 지방', 'Community of Madrid', ['madrid']),
  ('나바라', 'Navarre', ['pamplona']),
  ('바스크 지방', 'Basque Country', ['bilbao', 'san-sebastian']),
  ('라리오하', 'La Rioja', ['logrono'])],
 'at': [
  ('부르겐란트', 'Burgenland', ['eisenstadt']),
  ('케른텐', 'Carinthia', ['klagenfurt']),
  ('니더외스터라이히', 'Lower Austria', ['melk', 'durnstein']),
  ('오버외스터라이히', 'Upper Austria', ['linz', 'hallstatt', 'bad-ischl', 'st-wolfgang']),
  ('잘츠부르크', 'Salzburg', ['salzburg', 'werfen', 'zell-am-see']),
  ('슈타이어마르크', 'Styria', ['graz']),
  ('티롤', 'Tyrol', ['innsbruck', 'alpbach', 'kitzbuhel']),
  ('포어아를베르크', 'Vorarlberg', ['bregenz']),
  ('빈', 'Vienna', ['vienna'])],
 'pl': [
  ('돌누실롱스키에', 'Lower Silesian', ['wroclaw']),
  ('쿠야비포모제', 'Kuyavian-Pomeranian', ['torun']),
  ('루벨스키에', 'Lublin', ['lublin']),
  ('우치', 'Łódź', ['lodz']),
  ('마워폴스키에', 'Lesser Poland', ['krakow', 'zakopane']),
  ('마조프셰', 'Masovian', ['warsaw']),
  ('포모제', 'Pomeranian', ['gdansk', 'malbork']),
  ('실롱스크', 'Silesian', ['czestochowa']),
  ('비엘코폴스카', 'Greater Poland', ['poznan'])],
 'pt': [
  ('노르트', 'Norte', ['porto', 'braga', 'guimaraes', 'viana-do-castelo', 'amarante', 'peso-da-regua', 'lamego']),
  ('센트루', 'Centro', ['coimbra', 'aveiro', 'manteigas', 'monsanto']),
  ('오에스트 이 발레 두 테주', 'Oeste e Vale do Tejo', ['obidos', 'nazare', 'alcobaca', 'fatima', 'tomar']),
  ('그란드 리스보아', 'Grande Lisboa', ['lisbon', 'sintra', 'cascais', 'ericeira']),
  ('세투발 반도', 'Península de Setúbal', ['setubal']),
  ('알렌테주', 'Alentejo', ['evora', 'marvao', 'elvas']),
  ('알가르브', 'Algarve', ['faro', 'lagos', 'tavira']),
  ('아소르스 제도', 'Azores', ['ponta-delgada', 'angra-do-heroismo']),
  ('마데이라', 'Madeira', ['funchal'])],
 'be': [
  ('브뤼셀 수도권', 'Brussels-Capital Region', ['brussels']),
  ('플랑드르', 'Flanders', ['bruges', 'ghent', 'antwerp', 'leuven', 'mechelen']),
  ('왈롱', 'Wallonia', ['dinant'])],
 'ie': [
  ('렌스터', 'Leinster', ['dublin', 'kilkenny']),
  ('먼스터', 'Munster', ['cork', 'kinsale', 'killarney', 'dingle', 'limerick', 'doolin']),
  ('코노트', 'Connacht', ['galway', 'westport'])],
 'uk': [
  ('잉글랜드 북동부', 'North East England', ['durham']),
  ('잉글랜드 북서부', 'North West England', ['manchester', 'liverpool', 'chester', 'lake-district']),
  ('요크셔 험버', 'Yorkshire and the Humber', ['york', 'whitby']),
  ('이스트미들랜즈', 'East Midlands', ['lincoln']),
  ('웨스트미들랜즈', 'West Midlands', ['stratford-upon-avon']),
  ('잉글랜드 동부', 'East of England', ['cambridge']),
  ('런던', 'London', ['london']),
  ('잉글랜드 남동부', 'South East England', ['oxford', 'windsor', 'canterbury', 'dover', 'brighton', 'portsmouth']),
  ('잉글랜드 남서부', 'South West England', ['bristol', 'bath', 'salisbury', 'cotswolds', 'st-ives', 'penzance']),
  SCO, WAL, NI],
 'cz': [
  ('프라하', 'Prague', ['prague']),
  ('중앙보헤미아', 'Central Bohemian Region', ['kutna-hora']),
  ('남보헤미아', 'South Bohemian Region', ['cesky-krumlov', 'ceske-budejovice']),
  ('플젠', 'Plzeň Region', ['plzen']),
  ('카를로비바리', 'Karlovy Vary Region', ['karlovy-vary']),
  ('우스티', 'Ústí nad Labem Region', ['hrensko']),
  ('리베레츠', 'Liberec Region', ['cesky-raj']),
  ('파르두비체', 'Pardubice Region', ['litomysl']),
  ('비소치나', 'Vysočina Region', ['telc']),
  ('남모라바', 'South Moravian Region', ['brno', 'mikulov', 'lednice', 'znojmo']),
  ('올로모우츠', 'Olomouc Region', ['olomouc']),
  ('즐린', 'Zlín Region', ['kromeriz'])],
 'ch': [
  ('취리히주', 'Canton of Zurich', ['zurich']),
  ('베른주', 'Canton of Bern', ['bern', 'interlaken', 'grindelwald', 'lauterbrunnen', 'kandersteg']),
  ('루체른주', 'Canton of Lucerne', ['lucerne']),
  ('프리부르주', 'Canton of Fribourg', ['gruyeres']),
  ('바젤슈타트주', 'Basel-Stadt', ['basel']),
  ('장크트갈렌주', 'Canton of St. Gallen', ['st-gallen']),
  ('그라우뷘덴주', 'Graubünden', ['chur', 'st-moritz']),
  ('티치노주', 'Ticino', ['lugano', 'locarno', 'bellinzona']),
  ('보주', 'Vaud', ['lausanne', 'montreux']),
  ('발레주', 'Valais', ['zermatt']),
  ('제네바주', 'Canton of Geneva', ['geneva'])],
 'hr': [
  ('리카센', 'Lika-Senj County', ['plitvice']),
  ('자다르', 'Zadar County', ['zadar']),
  ('시베니크크닌', 'Šibenik-Knin County', ['sibenik']),
  ('스플리트달마티아', 'Split-Dalmatia County', ['split', 'trogir', 'hvar']),
  ('이스트라', 'Istria County', ['pula', 'rovinj', 'porec']),
  ('두브로브니크네레트바', 'Dubrovnik-Neretva County', ['dubrovnik', 'korcula']),
  ('자그레브시', 'City of Zagreb', ['zagreb'])],
 'sk': [
  ('브라티슬라바주', 'Bratislava Region', ['bratislava']),
  ('트렌친주', 'Trenčín Region', ['trencin']),
  ('니트라주', 'Nitra Region', ['nitra']),
  ('반스카비스트리차주', 'Banská Bystrica Region', ['banska-bystrica', 'banska-stiavnica']),
  ('프레쇼우주', 'Prešov Region', ['poprad', 'levoca', 'bardejov']),
  ('코시체주', 'Košice Region', ['kosice'])],
 'hu': [
  ('부다페스트', 'Budapest', ['budapest']),
  ('페스트', 'Pest', ['szentendre']),
  ('중부 트란스다누비아', 'Central Transdanubia', ['tihany']),
  ('서부 트란스다누비아', 'Western Transdanubia', ['gyor', 'sopron', 'keszthely']),
  ('남부 트란스다누비아', 'Southern Transdanubia', ['pecs']),
  ('북부 헝가리', 'Northern Hungary', ['eger', 'holloko', 'tokaj']),
  ('북부 대평원', 'Northern Great Plain', ['debrecen']),
  ('남부 대평원', 'Southern Great Plain', ['szeged'])],
 'nl': [
  ('오버레이설', 'Overijssel', ['giethoorn']),
  ('위트레흐트주', 'Utrecht', ['utrecht']),
  ('노르트홀란트', 'North Holland', ['amsterdam', 'haarlem']),
  ('자위트홀란트', 'South Holland', ['rotterdam', 'the-hague', 'delft', 'leiden']),
  ('림뷔르흐', 'Limburg', ['maastricht'])],
 'gr': [
  ('동마케도니아 트라키', 'Eastern Macedonia and Thrace', ['kavala']),
  ('중앙마케도니아', 'Central Macedonia', ['thessaloniki']),
  ('이피로스', 'Epirus', ['ioannina']),
  ('테살리아', 'Thessaly', ['meteora']),
  ('이오니아 제도', 'Ionian Islands', ['corfu', 'kefalonia', 'zakynthos']),
  ('서부 그리스', 'Western Greece', ['olympia']),
  ('중부 그리스', 'Central Greece', ['delphi']),
  ('아티키', 'Attica', ['athens', 'sounion', 'aegina', 'hydra']),
  ('펠로폰네소스', 'Peloponnese', ['nafplio', 'kalamata', 'monemvasia']),
  ('남에게해', 'South Aegean', ['santorini', 'mykonos', 'naxos', 'paros', 'milos', 'rhodes', 'kos', 'symi', 'patmos']),
  ('크레타', 'Crete', ['heraklion', 'chania', 'rethymno', 'agios-nikolaos'])],
 'se': [
  ('스톡홀름주', 'Stockholm County', ['stockholm']),
  ('웁살라주', 'Uppsala County', ['uppsala']),
  ('칼마르주', 'Kalmar County', ['kalmar']),
  ('고틀란드주', 'Gotland', ['visby']),
  ('블레킹에주', 'Blekinge', ['karlskrona']),
  ('스코네주', 'Skåne', ['malmo', 'lund', 'ystad']),
  ('베스트라예탈란드주', 'Västra Götaland', ['gothenburg']),
  ('달라르나주', 'Dalarna', ['falun']),
  ('베스테르노를란드주', 'Västernorrland', ['hoga-kusten']),
  ('옘틀란드주', 'Jämtland', ['are']),
  ('노르보텐주', 'Norrbotten', ['lulea', 'kiruna', 'abisko'])],
 'no': [
  ('오슬로', 'Oslo', ['oslo']),
  ('로갈란', 'Rogaland', ['stavanger']),
  ('뫼레오그롬스달', 'Møre og Romsdal', ['alesund', 'geiranger']),
  ('노를란', 'Nordland', ['bodo', 'lofoten']),
  ('외스트폴', 'Østfold', ['fredrikstad']),
  ('인란데트', 'Innlandet', ['lillehammer']),
  ('아그데르', 'Agder', ['kristiansand']),
  ('베스틀란', 'Vestland', ['bergen', 'voss', 'odda', 'flam']),
  ('트뢴델라그', 'Trøndelag', ['trondheim', 'roros']),
  ('트롬스', 'Troms', ['tromso']),
  ('핀마르크', 'Finnmark', ['honningsvag'])],
 'fi': [
  ('우시마', 'Uusimaa', ['helsinki', 'porvoo']),
  ('바르시나이스수오미', 'Southwest Finland', ['turku', 'naantali']),
  ('사타쿤타', 'Satakunta', ['rauma']),
  ('피르칸마', 'Pirkanmaa', ['tampere']),
  ('남사보', 'South Savo', ['savonlinna']),
  ('북사보', 'North Savo', ['kuopio']),
  ('중부 핀란드', 'Central Finland', ['jyvaskyla']),
  ('북포흐얀마', 'North Ostrobothnia', ['oulu']),
  ('라플란드', 'Lapland', ['rovaniemi', 'kemi', 'levi', 'inari']),
  ('올란드', 'Åland', ['mariehamn'])],
 'tr': [
  ('마르마라', 'Marmara', ['istanbul', 'edirne', 'bursa', 'canakkale']),
  ('에게해', 'Aegean', ['izmir', 'ayvalik', 'selcuk', 'pamukkale', 'bodrum']),
  ('지중해', 'Mediterranean', ['antalya', 'fethiye', 'kas', 'olympos', 'alanya']),
  ('중앙아나톨리아', 'Central Anatolia', ['ankara', 'goreme', 'konya']),
  ('흑해', 'Black Sea', ['trabzon', 'safranbolu', 'amasra']),
  ('동아나톨리아', 'Eastern Anatolia', ['kars']),
  ('남동아나톨리아', 'Southeastern Anatolia', ['gaziantep', 'sanliurfa', 'mardin'])],
 'dk': [
  ('수도 지역', 'Capital Region', ['copenhagen', 'bornholm']),
  ('셸란 지역', 'Region Zealand', ['roskilde']),
  ('남덴마크 지역', 'Region of Southern Denmark', ['odense', 'ribe', 'billund']),
  ('중앙 유틀란트 지역', 'Central Denmark Region', ['aarhus']),
  ('북유틀란트 지역', 'North Denmark Region', ['aalborg', 'skagen'])],
}
p = 'src/data/countries.ts'
s = open(p).read()
q = lambda l: ', '.join(f"'{c}'" for c in l)
starts = [(m.start(), m.group(1)) for m in re.finditer(r"\n  \{\n    id: '([a-z]+)',", s)]
for cid, G in C.items():
    k = [i for i, (_, c) in enumerate(starts) if c == cid][0]
    i = starts[k][0]; j = starts[k + 1][0] if k + 1 < len(starts) else len(s)
    blk = s[i:j]
    m = re.search(r"\n    cityIds: \[([^\]]*)\],\n", blk)
    ids = re.findall(r"'([a-z-]+)'", m.group(1))
    allg = [c for *_, cs in G for c in cs]
    assert sorted(ids) == sorted(allg) and len(allg) == len(set(allg)), (cid, set(ids) ^ set(allg))
    g = re.search(r"    cityGroups: \[\n.*?\n    \],\n", blk, re.S)
    if g:
        blk = blk.replace(g.group(0), '')
    new = f"\n    cityIds: [{q(allg)}],\n    cityGroups: [\n" + ''.join(
        f"      {{ title: {{ ko: '{a}', en: '{b}' }}, cityIds: [{q(cs)}] }},\n" for a, b, cs in G) + "    ],\n"
    blk = blk.replace(m.group(0), new, 1)
    s = s[:i] + blk + s[j:]
    starts = [(mm.start(), mm.group(1)) for mm in re.finditer(r"\n  \{\n    id: '([a-z]+)',", s)]
    print(cid, len(allg), len(G))
open(p, 'w').write(s)
