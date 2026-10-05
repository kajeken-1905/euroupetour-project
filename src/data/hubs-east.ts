import type { RawCityHubs } from './hubs'

type Raw = [string, string, string]
const MLA = (note = '루카|Luqa'): Raw => ['Malta International (MLA)', '몰타 국제공항 (MLA)', note]
const ATH = (note = '아테네|Athens'): Raw => ['Athens Eleftherios Venizelos (ATH)', '아테네 국제공항 (ATH)', note]
const LCA = (note = '라르나카|Larnaca'): Raw => ['Larnaca (LCA)', '라르나카 공항 (LCA)', note]
const TLL = (note = '탈린|Tallinn'): Raw => ['Tallinn Lennart Meri (TLL)', '탈린 공항 (TLL)', note]
const RIX = (note = '리가|Riga'): Raw => ['Riga (RIX)', '리가 공항 (RIX)', note]
const ZAG = (note = '자그레브|Zagreb'): Raw => ['Zagreb Franjo Tuđman (ZAG)', '자그레브 공항 (ZAG)', note]
const SPU = (note = '스플리트|Split'): Raw => ['Split (SPU)', '스플리트 공항 (SPU)', note]
const DBV = (note = '크로아티아 두브로브니크|Dubrovnik, Croatia'): Raw => ['Dubrovnik Ruđer Bošković (DBV)', '두브로브니크 공항 (DBV)', note]
const LJU = (note = '류블랴나|Ljubljana'): Raw => ['Ljubljana Jože Pučnik (LJU)', '류블랴나 공항 (LJU)', note]
const SJJ = (note = '사라예보|Sarajevo'): Raw => ['Sarajevo (SJJ)', '사라예보 공항 (SJJ)', note]
const TIV = (note = '티바트|Tivat'): Raw => ['Tivat (TIV)', '티바트 공항 (TIV)', note]
const TGD = (note = '포드고리차|Podgorica'): Raw => ['Podgorica (TGD)', '포드고리차 공항 (TGD)', note]
const BEG = (note = '베오그라드|Belgrade'): Raw => ['Beograd Nikola Tesla (BEG)', '베오그라드 공항 (BEG)', note]
const SKP = (note = '스코페|Skopje'): Raw => ['Skopje International (SKP)', '스코페 공항 (SKP)', note]
const TIA = (note = '티라나|Tirana'): Raw => ['Tirana Nënë Tereza (TIA)', '티라나 공항 (TIA)', note]
const PRN = (note = '프리슈티나|Pristina'): Raw => ['Prishtina Adem Jashari (PRN)', '프리슈티나 공항 (PRN)', note]
const SOF = (note = '소피아|Sofia'): Raw => ['Sofia (SOF)', '소피아 공항 (SOF)', note]
const TBS = (note = '트빌리시|Tbilisi'): Raw => ['Tbilisi Shota Rustaveli (TBS)', '트빌리시 공항 (TBS)', note]
const EVN = (note = '예레반|Yerevan'): Raw => ['Yerevan Zvartnots (EVN)', '예레반 즈바르트노츠 공항 (EVN)', note]
const GYD = (note = '바쿠|Baku'): Raw => ['Baku Heydar Aliyev (GYD)', '바쿠 헤이다르 알리예프 공항 (GYD)', note]
const RMO = (note = '키시너우|Chișinău'): Raw => ['Chișinău Eugen Doga (RMO)', '키시너우 공항 (RMO)', note]
const SUSPENDED = '2022년부터 민항기 운항 중단|civil flights suspended since 2022'

export const hubsEast: Record<string, RawCityHubs> = {
  // —— mt ——
  valletta: {
    air: [MLA()],
    bus: [['Valletta Bus Terminus', '발레타 버스터미널', '몰타엔 철도 없음|no railways in Malta']],
    port: [['Valletta Ferry Landing (Lascaris)', '발레타 페리 선착장', '스리 시티즈·고조행 배|boats to the Three Cities and Gozo']],
  },
  mdina: {
    air: [MLA()],
    bus: [['Valletta Bus Terminus', '발레타 버스터미널', '발레타 · 므디나행 버스 출발|Valletta · buses to Mdina leave from here']],
  },
  gozo: {
    air: [MLA('몰타 본섬 · 페리 연결|main island · ferry link')],
    bus: [['Victoria Bus Terminus', '빅토리아 버스터미널']],
    port: [['Mġarr Harbour', '므자르 항구', '몰타 본섬 치르케와행 페리|ferry to Ċirkewwa on the main island']],
  },

  // —— gr ——
  thessaloniki: {
    air: [['Thessaloniki Makedonia (SKG)', '테살로니키 마케도니아 공항 (SKG)']],
    rail: [['Thessaloniki', '테살로니키역']],
    bus: [['KTEL Makedonia', 'KTEL 마케도니아 버스터미널']],
  },
  meteora: {
    air: [['Thessaloniki Makedonia (SKG)', '테살로니키 마케도니아 공항 (SKG)', '테살로니키|Thessaloniki'], ATH()],
    rail: [['Kalambaka', '칼람바카역']],
    bus: [['KTEL Kalambaka', '칼람바카 KTEL 버스터미널']],
  },
  corfu: {
    air: [['Corfu Ioannis Kapodistrias (CFU)', '코르푸 공항 (CFU)']],
    bus: [['KTEL Kerkyra (Green Buses)', '코르푸 KTEL 버스터미널']],
    port: [['Port of Corfu', '코르푸 항구', '이구메니차·이탈리아·알바니아행|ferries to Igoumenitsa, Italy and Albania']],
  },
  athens: {
    air: [['Athens Eleftherios Venizelos (ATH)', '아테네 국제공항 (ATH)']],
    rail: [['Athens Railway Station (Larissa)', '아테네역 (라리사역)']],
    bus: [
      ['KTEL Kifissos', '키피소스 버스터미널'],
      ['KTEL Liosion', '리오시온 버스터미널'],
    ],
    port: [
      ['Port of Piraeus', '피레우스 항구', '에게해 섬행 페리|ferries to the Aegean islands'],
      ['Port of Rafina', '라피나 항구', '키클라데스행 · 공항에서 가까움|Cyclades ferries · close to the airport'],
    ],
  },
  sounion: {
    air: [ATH()],
  },
  delphi: {
    air: [ATH()],
  },
  zakynthos: {
    air: [['Zakynthos Dionysios Solomos (ZTH)', '자킨토스 공항 (ZTH)']],
    bus: [['KTEL Zakynthos', '자킨토스 KTEL 버스터미널']],
    port: [['Port of Zakynthos', '자킨토스 항구', '본토 킬리니행 페리|ferry to Kyllini on the mainland']],
  },
  nafplio: {
    air: [ATH()],
    bus: [['KTEL Argolida (Nafplio)', '나플리오 KTEL 버스터미널']],
  },
  olympia: {
    air: [
      ['Kalamata (KLX)', '칼라마타 공항 (KLX)', '칼라마타|Kalamata'],
      ATH(),
    ],
    rail: [['Olympia', '올림피아역', '카타콜로–피르고스 지선|Katakolo–Pyrgos branch line']],
  },
  mykonos: {
    air: [['Mykonos (JMK)', '미코노스 공항 (JMK)']],
    bus: [['Fabrika Bus Station', '파브리카 버스터미널']],
    port: [['Mykonos New Port (Tourlos)', '미코노스 신항 (투를로스)']],
  },
  naxos: {
    air: [['Naxos (JNX)', '낙소스 공항 (JNX)']],
    port: [['Port of Naxos', '낙소스 항구']],
  },
  santorini: {
    air: [['Santorini Thira (JTR)', '산토리니 공항 (JTR)']],
    bus: [['Fira Bus Station', '피라 버스터미널']],
    port: [['Athinios Port', '아티니오스 항구']],
  },
  heraklion: {
    air: [['Heraklion Nikos Kazantzakis (HER)', '이라클리온 공항 (HER)']],
    bus: [['KTEL Heraklion (Bus Station A)', '이라클리온 KTEL 버스터미널 A']],
    port: [['Port of Heraklion', '이라클리온 항구', '피레우스·산토리니행 페리|ferries to Piraeus and Santorini']],
  },
  chania: {
    air: [['Chania Ioannis Daskalogiannis (CHQ)', '하니아 공항 (CHQ)']],
    bus: [['KTEL Chania', '하니아 KTEL 버스터미널']],
    port: [['Port of Souda', '수다 항구', '수다 · 피레우스행 페리|Souda · ferry to Piraeus']],
  },
  rhodes: {
    air: [['Rhodes Diagoras (RHO)', '로도스 공항 (RHO)']],
    port: [['Port of Rhodes', '로도스 항구', '피레우스·도데카네스 제도·튀르키예행|ferries to Piraeus, the Dodecanese and Türkiye']],
  },

  // —— cy ——
  nicosia: {
    air: [LCA()],
    bus: [['Solomos Square Bus Station', '솔로모스 광장 버스터미널', '키프로스엔 철도 없음|no railways in Cyprus']],
  },
  limassol: {
    air: [LCA(), ['Paphos (PFO)', '파포스 공항 (PFO)', '파포스|Paphos']],
  },
  paphos: {
    air: [['Paphos (PFO)', '파포스 공항 (PFO)']],
    bus: [['Karavella Bus Station', '카라벨라 버스터미널']],
  },
  'ayia-napa': {
    air: [LCA()],
  },

  // —— ee ——
  tallinn: {
    air: [['Tallinn Lennart Meri (TLL)', '탈린 공항 (TLL)']],
    rail: [['Balti jaam', '발티역 (탈린 중앙역)']],
    bus: [['Tallinna bussijaam', '탈린 버스터미널']],
    port: [['Vanasadam (Old City Harbour)', '탈린 구시가지 항구', '헬싱키·스톡홀름행 페리|ferries to Helsinki and Stockholm']],
  },
  tartu: {
    air: [['Tartu (TAY)', '타르투 공항 (TAY)', '운항편 적음|few flights'], TLL()],
    rail: [['Tartu', '타르투역']],
    bus: [['Tartu bussijaam', '타르투 버스터미널']],
  },
  parnu: {
    air: [TLL()],
    bus: [['Pärnu bussijaam', '패르누 버스터미널']],
  },

  // —— lv ——
  riga: {
    air: [['Riga (RIX)', '리가 공항 (RIX)']],
    rail: [['Rīgas Centrālā stacija', '리가 중앙역']],
    bus: [['Rīgas starptautiskā autoosta', '리가 국제 버스터미널']],
  },
  jurmala: {
    air: [RIX()],
    rail: [
      ['Majori', '마요리역'],
      ['Dubulti', '두불티역'],
    ],
  },
  sigulda: {
    air: [RIX()],
    rail: [['Sigulda', '시굴다역']],
    bus: [['Siguldas autoosta', '시굴다 버스터미널', '기차역 옆|next to the rail station']],
  },

  // —— lt ——
  vilnius: {
    air: [['Vilnius (VNO)', '빌뉴스 공항 (VNO)']],
    rail: [['Vilniaus geležinkelio stotis', '빌뉴스역']],
    bus: [['Vilniaus autobusų stotis', '빌뉴스 버스터미널']],
  },
  kaunas: {
    air: [['Kaunas (KUN)', '카우나스 공항 (KUN)']],
    rail: [['Kauno geležinkelio stotis', '카우나스역']],
    bus: [['Kauno autobusų stotis', '카우나스 버스터미널']],
  },
  klaipeda: {
    air: [['Palanga (PLQ)', '팔랑가 공항 (PLQ)', '팔랑가|Palanga']],
    rail: [['Klaipėdos geležinkelio stotis', '클라이페다역']],
    bus: [['Klaipėdos autobusų stotis', '클라이페다 버스터미널']],
    port: [['Senoji perkėla (Old Ferry Terminal)', '구 페리터미널', '쿠로니아 사주행 배|ferry to the Curonian Spit']],
  },

  // —— hr ——
  zagreb: {
    air: [['Zagreb Franjo Tuđman (ZAG)', '자그레브 공항 (ZAG)']],
    rail: [['Zagreb Glavni kolodvor', '자그레브 중앙역']],
    bus: [['Autobusni kolodvor Zagreb', '자그레브 버스터미널']],
  },
  dubrovnik: {
    air: [['Dubrovnik Ruđer Bošković (DBV)', '두브로브니크 공항 (DBV)']],
    bus: [['Autobusni kolodvor Dubrovnik', '두브로브니크 버스터미널', '그루즈 항구 옆 · 철도 없음|by Gruž port · no railway']],
    port: [['Luka Gruž', '그루즈 항구', '섬·이탈리아 바리행 페리|ferries to the islands and Bari, Italy']],
  },
  split: {
    air: [['Split (SPU)', '스플리트 공항 (SPU)']],
    rail: [['Split', '스플리트역']],
    bus: [['Autobusni kolodvor Split', '스플리트 버스터미널']],
    port: [['Trajektna luka Split', '스플리트 페리항', '흐바르·브라치 등 섬·이탈리아행|ferries to Hvar, Brač and Italy']],
  },
  zadar: {
    air: [['Zadar (ZAD)', '자다르 공항 (ZAD)']],
    bus: [['Autobusni kolodvor Zadar', '자다르 버스터미널']],
    port: [['Luka Gaženica', '가제니차 항구', '섬·이탈리아행 카페리|car ferries to the islands and Italy']],
  },
  rovinj: {
    air: [['Pula (PUY)', '풀라 공항 (PUY)', '풀라|Pula']],
    bus: [['Autobusni kolodvor Rovinj', '로비니 버스터미널', '철도 없음|no railway']],
  },
  hvar: {
    air: [SPU('스플리트 · 페리 연결|Split · ferry link')],
    bus: [['Autobusni kolodvor Hvar', '흐바르 버스 정류장', '스타리그라드 페리항 연결 버스|buses to the Stari Grad ferry port']],
    port: [
      ['Luka Hvar', '흐바르 타운 항구', '스플리트행 쾌속선|catamarans to Split'],
      ['Trajektna luka Stari Grad', '스타리그라드 페리항', '스플리트행 카페리|car ferry to Split'],
    ],
  },
  plitvice: {
    air: [ZAG(), ['Zadar (ZAD)', '자다르 공항 (ZAD)', '자다르|Zadar']],
  },
  trogir: {
    air: [SPU('트로기르에서 가까움|close to Trogir')],
    bus: [['Autobusni kolodvor Trogir', '트로기르 버스터미널']],
  },

  // —— si ——
  ljubljana: {
    air: [['Ljubljana Jože Pučnik (LJU)', '류블랴나 공항 (LJU)']],
    rail: [['Ljubljana', '류블랴나역']],
    bus: [['Avtobusna postaja Ljubljana', '류블랴나 버스터미널']],
  },
  bled: {
    air: [LJU()],
    rail: [
      ['Lesce-Bled', '레스체-블레드역', '본선 · 버스 연결|main line · bus link'],
      ['Bled Jezero', '블레드 예제로역', '호숫가 지선|lakeside branch line'],
    ],
    bus: [['Avtobusna postaja Bled', '블레드 버스터미널']],
    port: [['Pletna boats (Mlino)', '플레트나 나룻배 선착장 (믈리노)', '블레드섬행 전통 나룻배|traditional boats to Bled Island']],
  },
  piran: {
    air: [
      ['Trieste Airport (TRS)', '트리에스테 공항 (TRS)', '이탈리아 트리에스테|Trieste, Italy'],
      LJU(),
    ],
    rail: [['Koper', '코페르역', '코페르 · 피란엔 역 없음|Koper · no station in Piran']],
    bus: [['Avtobusna postaja Piran', '피란 버스터미널']],
  },
  maribor: {
    air: [['Graz (GRZ)', '그라츠 공항 (GRZ)', '오스트리아 그라츠|Graz, Austria'], LJU()],
    rail: [['Maribor', '마리보르역']],
    bus: [['Avtobusna postaja Maribor', '마리보르 버스터미널']],
  },
  postojna: {
    air: [LJU()],
    rail: [['Postojna', '포스토이나역']],
    bus: [['Avtobusna postaja Postojna', '포스토이나 버스터미널']],
  },

  // —— ba ——
  sarajevo: {
    air: [['Sarajevo (SJJ)', '사라예보 공항 (SJJ)']],
    rail: [['Sarajevo', '사라예보역']],
    bus: [
      ['Autobuska stanica Sarajevo', '사라예보 버스터미널'],
      ['Autobuska stanica Istočno Sarajevo', '동사라예보 버스터미널', '세르비아·몬테네그로행|buses to Serbia and Montenegro'],
    ],
  },
  mostar: {
    air: [['Mostar (OMO)', '모스타르 공항 (OMO)', '운항편 적음|few flights'], SJJ()],
    rail: [['Mostar', '모스타르역']],
    bus: [['Autobuska stanica Mostar', '모스타르 버스터미널', '기차역 옆|next to the rail station']],
  },
  'banja-luka': {
    air: [['Banja Luka (BNX)', '바냐루카 공항 (BNX)']],
    rail: [['Banja Luka', '바냐루카역']],
    bus: [['Autobuska stanica Banja Luka', '바냐루카 버스터미널']],
  },
  travnik: {
    air: [SJJ()],
    bus: [['Autobuska stanica Travnik', '트라브니크 버스터미널']],
  },
  neum: {
    air: [DBV(), ['Mostar (OMO)', '모스타르 공항 (OMO)', '모스타르 · 운항편 적음|Mostar · few flights']],
  },

  // —— me ——
  kotor: {
    air: [TIV(), TGD()],
    bus: [['Autobuska stanica Kotor', '코토르 버스터미널']],
  },
  budva: {
    air: [TIV(), TGD()],
    bus: [['Autobuska stanica Budva', '부드바 버스터미널']],
  },
  podgorica: {
    air: [['Podgorica (TGD)', '포드고리차 공항 (TGD)']],
    rail: [['Podgorica', '포드고리차역']],
    bus: [['Autobuska stanica Podgorica', '포드고리차 버스터미널', '기차역 옆|next to the rail station']],
  },
  'herceg-novi': {
    air: [TIV(), DBV()],
    bus: [['Autobuska stanica Herceg Novi', '헤르체그노비 버스터미널']],
  },

  // —— rs ——
  belgrade: {
    air: [['Beograd Nikola Tesla (BEG)', '베오그라드 공항 (BEG)']],
    rail: [['Beograd Centar', '베오그라드 중앙역 (프로코프)']],
    bus: [['Beogradska autobuska stanica (BAS)', '베오그라드 버스터미널 (BAS)']],
  },
  'novi-sad': {
    air: [BEG()],
    rail: [['Novi Sad', '노비사드역']],
    bus: [['Međumesna autobuska stanica Novi Sad', '노비사드 시외버스터미널', '기차역 옆|next to the rail station']],
  },
  nis: {
    air: [['Niš Constantine the Great (INI)', '니시 공항 (INI)']],
    rail: [['Niš', '니시역']],
    bus: [['Autobuska stanica Niš', '니시 버스터미널']],
  },
  subotica: {
    air: [BEG()],
    rail: [['Subotica', '수보티차역']],
    bus: [['Autobuska stanica Subotica', '수보티차 버스터미널']],
  },

  // —— mk ——
  skopje: {
    air: [['Skopje International (SKP)', '스코페 공항 (SKP)']],
    rail: [['Skopje', '스코페역']],
    bus: [['Skopje Bus Station', '스코페 버스터미널', '기차역과 같은 건물|same building as the rail station']],
  },
  ohrid: {
    air: [['Ohrid St. Paul the Apostle (OHD)', '오흐리드 공항 (OHD)'], SKP()],
    bus: [['Ohrid Bus Station', '오흐리드 버스터미널', '철도 없음|no railway']],
    port: [['Ohrid Port', '오흐리드 항구', '성 나움행 호수 배 · 여름철|lake boats to Sveti Naum · summer']],
  },
  bitola: {
    air: [['Ohrid St. Paul the Apostle (OHD)', '오흐리드 공항 (OHD)', '오흐리드|Ohrid'], SKP()],
    rail: [['Bitola', '비톨라역', '스코페행 하루 1~2회|one or two trains a day to Skopje']],
    bus: [['Bitola Bus Station', '비톨라 버스터미널']],
  },
  tetovo: {
    air: [SKP()],
    bus: [['Tetovo Bus Station', '테토보 버스터미널']],
  },

  // —— al ——
  tirana: {
    air: [['Tirana Nënë Tereza (TIA)', '티라나 공항 (TIA)']],
    bus: [['Terminali i Autobusëve të Veriut dhe Jugut', '티라나 남북부 버스터미널', '여객 철도는 사실상 없음|practically no passenger rail']],
  },
  berat: {
    air: [TIA()],
    bus: [['Terminali i Autobusëve Berat', '베라트 버스터미널']],
  },
  gjirokaster: {
    air: [TIA()],
  },
  sarande: {
    air: [
      ['Corfu Ioannis Kapodistrias (CFU)', '코르푸 공항 (CFU)', '그리스 코르푸 · 페리 연결|Corfu, Greece · ferry link'],
      TIA(),
    ],
    port: [['Porti i Sarandës', '사란더 항구', '그리스 코르푸행 페리|ferries to Corfu, Greece']],
  },

  // —— xk ——
  pristina: {
    air: [['Prishtina Adem Jashari (PRN)', '프리슈티나 공항 (PRN)']],
    rail: [['Prishtinë', '프리슈티나역', '페야행 하루 2회|two trains a day to Peja']],
    bus: [['Stacioni i Autobusëve Prishtinë', '프리슈티나 버스터미널']],
  },
  prizren: {
    air: [PRN()],
    bus: [['Stacioni i Autobusëve Prizren', '프리즈렌 버스터미널']],
  },
  peja: {
    air: [PRN()],
    rail: [['Pejë', '페야역', '프리슈티나행 하루 2회|two trains a day to Pristina']],
    bus: [['Stacioni i Autobusëve Pejë', '페야 버스터미널']],
  },

  // —— bg ——
  sofia: {
    air: [['Sofia (SOF)', '소피아 공항 (SOF)']],
    rail: [['Sofia Central Station', '소피아 중앙역']],
    bus: [['Central Bus Station Sofia', '소피아 중앙 버스터미널', '중앙역 옆|next to the rail station']],
  },
  plovdiv: {
    air: [['Plovdiv (PDV)', '플로브디프 공항 (PDV)', '운항편 적음|few flights'], SOF()],
    rail: [['Plovdiv Central Station', '플로브디프 중앙역']],
    bus: [
      ['Avtogara Yug', '유그(남부) 버스터미널'],
      ['Avtogara Rodopi', '로도피 버스터미널'],
    ],
  },
  varna: {
    air: [['Varna (VAR)', '바르나 공항 (VAR)']],
    rail: [['Varna', '바르나역']],
    bus: [['Avtogara Varna', '바르나 버스터미널']],
  },
  'veliko-tarnovo': {
    air: [SOF()],
    rail: [
      ['Veliko Tarnovo', '벨리코터르노보역'],
      ['Gorna Oryahovitsa', '고르나오랴호비차역', '본선 환승역|main-line junction'],
    ],
    bus: [['Avtogara Yug', '유그(남부) 버스터미널']],
  },
  nessebar: {
    air: [['Burgas (BOJ)', '부르가스 공항 (BOJ)', '부르가스|Burgas']],
    rail: [['Burgas', '부르가스역', '부르가스 · 네세바르엔 역 없음|Burgas · no station in Nesebar']],
  },

  // —— ro ——
  bucharest: {
    air: [['București Henri Coandă (OTP)', '부쿠레슈티 오토페니 공항 (OTP)']],
    rail: [['București Nord', '부쿠레슈티 북역']],
  },
  brasov: {
    air: [
      ['Brașov-Ghimbav (GHV)', '브라쇼브 김바브 공항 (GHV)'],
      ['București Henri Coandă (OTP)', '부쿠레슈티 오토페니 공항 (OTP)', '부쿠레슈티|Bucharest'],
    ],
    rail: [['Brașov', '브라쇼브역']],
    bus: [['Autogara 1 Brașov', '브라쇼브 제1 버스터미널', '기차역 옆|next to the rail station']],
  },
  sibiu: {
    air: [['Sibiu (SBZ)', '시비우 공항 (SBZ)']],
    rail: [['Sibiu', '시비우역']],
  },
  sighisoara: {
    air: [
      ['Târgu Mureș Transilvania (TGM)', '트르구무레슈 공항 (TGM)', '트르구무레슈|Târgu Mureș'],
      ['Sibiu (SBZ)', '시비우 공항 (SBZ)', '시비우|Sibiu'],
    ],
    rail: [['Sighișoara', '시기쇼아라역']],
  },
  'cluj-napoca': {
    air: [['Cluj Avram Iancu (CLJ)', '클루지 공항 (CLJ)']],
    rail: [['Cluj-Napoca', '클루지나포카역']],
  },
  timisoara: {
    air: [['Timișoara Traian Vuia (TSR)', '티미쇼아라 공항 (TSR)']],
    rail: [['Timișoara Nord', '티미쇼아라 북역']],
  },

  // —— tr ——
  istanbul: {
    air: [
      ['İstanbul Havalimanı (IST)', '이스탄불 공항 (IST)'],
      ['Sabiha Gökçen (SAW)', '사비하 괵첸 공항 (SAW)', '아시아 지구|Asian side'],
    ],
    rail: [
      ['Halkalı', '할칼르역', '유럽행 국제열차|international trains to Europe'],
      ['Söğütlüçeşme', '쇠위틀뤼체슈메역', '앙카라행 고속철|high-speed trains to Ankara'],
      ['Sirkeci', '시르케지역', '마르마라이 통근선|Marmaray commuter line'],
    ],
    bus: [['Esenler Otogarı', '에센레르 버스터미널']],
    port: [
      ['Eminönü', '에미뇌뉘 선착장', '보스포루스 페리|Bosphorus ferries'],
      ['Kadıköy', '카드쾨이 선착장', '아시아 지구|Asian side'],
      ['Yenikapı İDO', '예니카프 페리터미널', '부르사·얄로바행 쾌속선|fast ferries to Bursa and Yalova'],
    ],
  },
  goreme: {
    air: [
      ['Nevşehir Kapadokya (NAV)', '네브셰히르 카파도키아 공항 (NAV)', '네브셰히르|Nevşehir'],
      ['Kayseri Erkilet (ASR)', '카이세리 공항 (ASR)', '카이세리|Kayseri'],
    ],
    bus: [['Göreme Otogarı', '괴레메 버스터미널']],
  },
  ankara: {
    air: [['Ankara Esenboğa (ESB)', '앙카라 에센보아 공항 (ESB)']],
    rail: [['Ankara Garı', '앙카라역']],
    bus: [['AŞTİ', '앙카라 시외버스터미널 (AŞTİ)']],
  },
  izmir: {
    air: [['İzmir Adnan Menderes (ADB)', '이즈미르 아드난 멘데레스 공항 (ADB)']],
    rail: [
      ['İzmir Basmane', '바스마네역'],
      ['İzmir Alsancak', '알산작역'],
    ],
    bus: [['İzmir Otogarı', '이즈미르 버스터미널']],
  },
  antalya: {
    air: [['Antalya (AYT)', '안탈리아 공항 (AYT)']],
    bus: [['Antalya Otogarı', '안탈리아 버스터미널', '철도 없음|no railway']],
  },
  bursa: {
    air: [
      ['Sabiha Gökçen (SAW)', '사비하 괵첸 공항 (SAW)', '이스탄불|Istanbul'],
      ['Bursa Yenişehir (YEI)', '부르사 예니셰히르 공항 (YEI)', '운항편 적음|few flights'],
    ],
    bus: [['Bursa Şehirlerarası Otobüs Terminali', '부르사 시외버스터미널', '철도 없음|no railway']],
    port: [['Mudanya BUDO İskelesi', '무다니아 선착장', '무다니아 · 이스탄불행 쾌속선|Mudanya · fast ferry to Istanbul']],
  },
  trabzon: {
    air: [['Trabzon (TZX)', '트라브존 공항 (TZX)']],
    bus: [['Trabzon Otogarı', '트라브존 버스터미널', '철도 없음|no railway']],
  },
  pamukkale: {
    air: [['Denizli Çardak (DNZ)', '데니즐리 차르닥 공항 (DNZ)', '데니즐리|Denizli']],
    rail: [['Denizli', '데니즐리역', '데니즐리 · 미니버스 연결|Denizli · minibus link']],
    bus: [['Denizli Otogarı', '데니즐리 버스터미널', '데니즐리|Denizli']],
  },

  // —— ge ——
  tbilisi: {
    air: [['Tbilisi Shota Rustaveli (TBS)', '트빌리시 공항 (TBS)']],
    rail: [['Tbilisi Central', '트빌리시 중앙역']],
    bus: [
      ['Didube Bus Station', '디두베 버스터미널'],
      ['Ortachala Bus Station', '오르타찰라 버스터미널', '국제 노선|international routes'],
    ],
  },
  batumi: {
    air: [['Batumi (BUS)', '바투미 공항 (BUS)']],
    rail: [['Batumi Central', '바투미 중앙역']],
    bus: [['Batumi Bus Station', '바투미 버스터미널']],
  },
  kutaisi: {
    air: [['Kutaisi David the Builder (KUT)', '쿠타이시 공항 (KUT)']],
    rail: [['Kutaisi I', '쿠타이시 1역']],
    bus: [['Kutaisi Central Bus Station', '쿠타이시 중앙 버스터미널']],
  },
  stepantsminda: {
    air: [TBS()],
    bus: [['Didube Bus Station Tbilisi', '디두베 버스터미널', '트빌리시 · 마르슈루트카 출발|Tbilisi · marshrutkas leave from here']],
  },
  sighnaghi: {
    air: [TBS()],
    bus: [['Samgori Bus Station Tbilisi', '삼고리 버스터미널', '트빌리시 · 마르슈루트카 출발|Tbilisi · marshrutkas leave from here']],
  },

  // —— am ——
  yerevan: {
    air: [['Yerevan Zvartnots (EVN)', '즈바르트노츠 공항 (EVN)']],
    rail: [['Yerevan', '예레반역']],
    bus: [['Kilikia Central Bus Station', '킬리키아 중앙 버스터미널']],
  },
  gyumri: {
    air: [['Gyumri Shirak (LWN)', '귬리 시라크 공항 (LWN)'], EVN()],
    rail: [['Gyumri', '귬리역']],
    bus: [['Gyumri Central Bus Station', '귬리 중앙 버스터미널']],
  },
  dilijan: {
    air: [EVN()],
    bus: [['Northern Bus Station Yerevan', '예레반 북부 버스터미널', '예레반 · 딜리잔행 미니버스 출발|Yerevan · minibuses to Dilijan leave from here']],
  },

  // —— az ——
  baku: {
    air: [['Baku Heydar Aliyev (GYD)', '헤이다르 알리예프 공항 (GYD)']],
    rail: [['Bakı Dəmir Yolu Vağzalı', '바쿠 중앙역']],
    bus: [['Bakı Beynəlxalq Avtovağzalı', '바쿠 국제 버스터미널']],
  },
  sheki: {
    air: [GYD(), ['Gabala (GBB)', '가발라 공항 (GBB)', '가발라|Gabala']],
    rail: [['Şəki', '셰키역', '시내에서 멀리 떨어짐|far from the town centre']],
    bus: [['Şəki Avtovağzalı', '셰키 버스터미널']],
  },
  gabala: {
    air: [['Gabala (GBB)', '가발라 공항 (GBB)'], GYD()],
    rail: [['Qəbələ', '가발라역']],
    bus: [['Qəbələ Avtovağzalı', '가발라 버스터미널']],
  },

  // —— ua ——
  kyiv: {
    air: [['Kyiv Boryspil (KBP)', '키이우 보리스필 공항 (KBP)', SUSPENDED]],
    rail: [['Kyiv-Pasazhyrskyi', '키이우 여객역']],
    bus: [['Kyiv Central Bus Station', '키이우 중앙 버스터미널']],
  },
  lviv: {
    air: [['Lviv Danylo Halytskyi (LWO)', '리비우 공항 (LWO)', SUSPENDED]],
    rail: [['Lviv', '리비우역']],
    bus: [['Lviv Bus Station (Stryiska)', '리비우 버스터미널 (스트리스카)']],
  },
  odesa: {
    air: [['Odesa (ODS)', '오데사 공항 (ODS)', SUSPENDED]],
    rail: [['Odesa-Holovna', '오데사 중앙역']],
    bus: [['Odesa Central Bus Station', '오데사 중앙 버스터미널']],
  },

  // —— md ——
  chisinau: {
    air: [['Chișinău Eugen Doga (RMO)', '키시너우 공항 (RMO)']],
    rail: [['Chișinău', '키시너우역']],
    bus: [
      ['Gara Centrală', '키시너우 중앙 버스터미널'],
      ['Gara de Nord', '키시너우 북부 버스터미널'],
    ],
  },
  'orheiul-vechi': {
    air: [RMO()],
    bus: [['Gara Centrală Chișinău', '키시너우 중앙 버스터미널', '키시너우 · 미니버스 출발|Chișinău · minibuses leave from here']],
  },
  soroca: {
    air: [RMO()],
    bus: [['Gara Auto Soroca', '소로카 버스터미널']],
  },
}
