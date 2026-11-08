/**
 * Day trips from a base city to smaller towns that have their own city page. Travel time comes from the onward
 * routes (routes-*.ts); `how` is shown instead when there is no public-transport entry (car or tour only).
 * Text is 'ko|en'. Closures, seasons, booking rules and bus lines in the tips were checked against official
 * sources or the checked visit info in 2026-10; dated closures go in `x` so they drop out by themselves.
 */
import type { RouteMode } from '../types'

export interface RawDayTrip {
  to: string
  tip: string
  /** shown instead of a route, e.g. '차·투어로 약 45분|About 45 min by car or tour' */
  how?: string
  /** icon for `how` when it is not by car */
  mode?: RouteMode
  /** notices that stop being true after a date: ['ko|en', 'YYYY-MM-DD' (last day shown)] */
  x?: [string, string][]
}

export const DAY_TRIPS: Record<string, RawDayTrip[]> = {
  paris: [
    {
      to: 'fontainebleau',
      tip: '왕들의 궁전과 정원을 보고, 시간이 남으면 숲을 걷습니다. 궁전은 화요일 휴관입니다.|The royal palace and gardens, then a walk in the forest; the palace is closed on Tuesdays.',
    },
    {
      to: 'giverny',
      tip: '모네의 집과 정원은 4월 1일~11월 1일에만 엽니다. 베르농역에서 셔틀버스로 갈아탑니다.|Monet’s house and garden open 1 April to 1 November only; change to the shuttle bus at Vernon.',
    },
    {
      to: 'reims',
      tip: '대성당과 샴페인 하우스 견학을 묶습니다. 샴페인 하우스 견학은 예약해야 합니다.|The cathedral plus a champagne-house tour; the cellar tours must be booked.',
    },
    {
      to: 'chartres',
      tip: '스테인드글라스로 유명한 대성당과 구시가 강변을 반나절에 봅니다.|The stained-glass cathedral and the riverside old town in half a day.',
    },
    {
      to: 'rouen',
      tip: '잔 다르크의 도시. 대성당과 대형 시계, 구시가 목조 가옥을 걷습니다.|Joan of Arc’s city: the cathedral, the Gros-Horloge and half-timbered lanes.',
    },
    {
      to: 'amboise',
      tip: '앙부아즈 성과 다빈치가 말년을 보낸 클로뤼세를 봅니다. 왕복 시간이 길어 아침 일찍 출발하세요.|Amboise castle and Clos Lucé, where Leonardo spent his last years; leave early, as the ride is long.',
    },
    {
      to: 'mont-saint-michel',
      tip: '렌까지 TGV, 이어서 직행버스로 편도 약 3시간 45분이라 하루가 아주 깁니다. 수도원을 보고 성벽길에서 갯벌을 내려다봅니다. 기차·버스 연결표나 당일 투어가 편하고, 여유가 있으면 하룻밤 묵는 편이 좋습니다.|TGV to Rennes, then a direct coach: about 3 hr 45 each way, so it is a very long day. See the abbey and look over the bay from the ramparts; a combined rail-and-coach ticket or a day tour is easiest, and staying a night is better if you can.',
    },
    {
      to: 'etretat',
      tip: '생라자르역에서 르아브르까지 기차, 이어서 버스로 편도 약 3시간입니다. 코끼리 바위 절벽 위 길을 걷습니다. 노르망디 당일 투어로 옹플뢰르와 묶기도 합니다.|Train from Saint-Lazare to Le Havre, then a bus: about 3 hours each way. Walk the clifftop paths above the elephant-trunk arch; Normandy day tours often pair it with Honfleur.',
    },
    {
      to: 'honfleur',
      tip: '트루빌-도빌역까지 기차, 이어서 버스로 편도 약 3시간입니다. 인상파 화가들이 그린 비외 바생 항구와 나무로 지은 생트 카트린 성당을 봅니다. 노르망디 투어로 에트르타와 묶기도 합니다.|Train to Trouville-Deauville, then a bus: about 3 hours each way. The Vieux Bassin harbour painted by the Impressionists and the wooden Sainte-Catherine Church; Normandy tours often pair it with Étretat.',
    },
    {
      to: 'bayeux',
      tip: '생라자르역에서 기차로 약 2시간 10분입니다. 대성당과 구시가를 보고 노르망디 상륙 해변(오마하 해변, 미군 묘지)은 현지 투어로 다녀옵니다. 태피스트리 박물관은 2027년 10월 재개관 예정이라 지금은 볼 수 없습니다.|About 2 hr 10 by train from Saint-Lazare. The cathedral and old town, then a local tour to the D-Day beaches (Omaha Beach, the American Cemetery); the Tapestry museum is closed until its planned reopening in October 2027.',
    },
    {
      to: 'lille',
      tip: 'TGV로 약 1시간. 그랑 플라스와 비유 릴, 미술관을 봅니다.|About 1 hr by TGV: the Grand Place, Vieux-Lille and the art museum.',
    },
    {
      to: 'blois',
      tip: '기차로 약 1시간 30분. 블루아 왕성과 마술의 집을 봅니다.|About 1 hr 30 by train: the royal château and the House of Magic.',
    },
  ],
  lyon: [
    {
      to: 'annecy',
      tip: '호수와 운하가 흐르는 구시가를 걷습니다. 왕복 4시간이 걸려 하루가 꽉 찹니다.|Lakeside walks and the canal-side old town; about four hours there and back makes a full day.',
    },
    {
      to: 'grenoble',
      tip: '기차로 약 1시간 20분. 구슬 케이블카로 바스티유 요새에 오릅니다.|About 1 hr 20 by train: ride the bubble cable car to the Bastille.',
    },
  ],
  marseille: [
    {
      to: 'cassis',
      tip: '항구에서 칼랑크 유람선을 타거나 앙보까지 걷습니다. 6~9월엔 산불 위험으로 길이 닫히는 날이 있습니다.|Take a Calanques boat from the port or hike to En-Vau; trails can close on high fire-risk days in June–September.',
    },
    {
      to: 'aix-en-provence',
      tip: '미라보 거리와 분수, 세잔의 아틀리에를 봅니다. 아틀리에는 예약이 필요합니다.|Cours Mirabeau, the fountains and Cézanne’s studio, which needs booking.',
    },
    {
      to: 'arles',
      tip: '원형경기장과 반 고흐의 자취를 하루에 봅니다.|The Roman arena and Van Gogh’s Arles in a day.',
    },
    {
      to: 'avignon',
      tip: '교황궁과 아비뇽 다리를 봅니다. 7월 연극제 때는 매우 붐빕니다.|The Palais des Papes and the famous bridge; very busy during the July festival.',
    },
  ],
  'aix-en-provence': [
    {
      to: 'marseille',
      tip: '구항과 노트르담 드 라 가르드, 뮈셈을 하루에 봅니다.|The Old Port, Notre-Dame de la Garde and the MuCEM in a day.',
    },
    {
      to: 'moustiers-sainte-marie',
      how: '차로 약 1시간 40분|About 1 hr 40 min by car',
      tip: '마을과 생트크루아 호수, 베르동 협곡 전망 도로를 묶습니다. 차가 필요하고 하루가 깁니다.|The village, Lake Sainte-Croix and the Verdon clifftop roads; you need a car and it is a long day.',
    },
  ],
  nice: [
    {
      to: 'monaco',
      tip: '몬테카를로 카지노 광장과 왕궁, 해양 박물관을 봅니다. 기차가 가장 빠릅니다.|Casino Square, the Prince’s Palace and the Oceanographic Museum; the train is quickest.',
    },
    {
      to: 'eze',
      tip: '절벽 위 마을과 이국 정원을 보고, 모나코와 묶어 하루에 다녀오기 좋습니다.|The clifftop village and its exotic garden; easy to pair with Monaco in a day.',
    },
    {
      to: 'menton',
      tip: '레몬 도시의 파스텔빛 구시가와 장 콕토 미술관, 정원을 봅니다.|Pastel old town, the Jean Cocteau museum and gardens in the lemon town.',
    },
    {
      to: 'antibes',
      tip: '피카소 미술관과 성벽 구시가, 아침 시장을 봅니다.|The Picasso museum, the walled old town and the morning market.',
    },
    {
      to: 'cannes',
      tip: '크루아제트 거리와 구시가 쉬케 언덕을 걷습니다. 앙티브와 묶어도 좋습니다.|Walk the Croisette and Le Suquet old town; pairs well with Antibes.',
    },
    {
      to: 'saint-paul-de-vence',
      tip: '성벽 마을과 마그 재단 미술관을 봅니다. 카뉴쉬르메르역에서 Zou! 655번 버스로 갈아타며, 니스 버스표는 쓸 수 없어 기사에게 따로 삽니다.|The walled village and the Fondation Maeght; change at Cagnes-sur-Mer station to Zou! bus 655, which needs its own ticket from the driver.',
    },
    {
      to: 'grasse',
      tip: '향수 공장 견학과 국제 향수 박물관을 봅니다.|Perfume-factory tours and the International Perfume Museum.',
    },
  ],
  cannes: [
    {
      to: 'antibes',
      tip: '피카소 미술관과 성벽 구시가, 캅 당티브 산책로를 걷습니다.|The Picasso museum, the walled old town and the Cap d’Antibes coastal path.',
    },
    {
      to: 'grasse',
      tip: '향수 공장 견학과 향수 박물관을 봅니다.|Perfume-factory tours and the perfume museum.',
    },
    {
      to: 'saint-tropez',
      tip: '봄~가을 일부 요일에 다니는 배로 갑니다(오전 출발, 늦은 오후 귀환). 항구와 시타델을 봅니다.|By the boat that sails on set days from spring to autumn (out in the morning, back late afternoon): the harbour and the citadel.',
    },
    {
      to: 'monaco',
      tip: '몬테카를로와 왕궁, 해양 박물관을 봅니다.|Monte-Carlo, the Prince’s Palace and the Oceanographic Museum.',
    },
  ],
  montpellier: [
    {
      to: 'sete',
      tip: '운하 가 해산물 식당과 생클레르산 전망을 봅니다.|Seafood by the canals and the view from Mont Saint-Clair.',
    },
    {
      to: 'nimes',
      tip: '원형경기장과 메종 카레, 오후엔 버스 터미널에서 liO 121번 버스(약 45분)로 퐁뒤가르에 다녀옵니다.|The arena and Maison Carrée, then liO bus 121 from the bus station to the Pont du Gard (about 45 min).',
    },
    {
      to: 'aigues-mortes',
      how: '차로 약 40분|About 40 min by car',
      tip: '성벽 위를 걷고 분홍 소금밭을 봅니다. 여름엔 그로뒤루아 해변과 묶어도 좋습니다.|Walk the ramparts and see the pink salt pans; in summer add the beaches at Le Grau-du-Roi.',
    },
  ],
  nimes: [
    {
      to: 'arles',
      tip: '원형경기장과 반 고흐의 자취를 봅니다.|The Roman arena and Van Gogh’s Arles.',
    },
    {
      to: 'aigues-mortes',
      tip: '성벽 위를 걷고 분홍 소금밭을 봅니다.|Walk the ramparts and see the pink salt pans.',
    },
  ],
  toulouse: [
    {
      to: 'carcassonne',
      tip: '성벽 안 시테와 콩탈 성을 보고, 아랫마을과 미디 운하를 걷습니다.|The walled Cité and the castle, then the lower town and the Canal du Midi.',
    },
    {
      to: 'albi',
      tip: '기차로 약 1시간. 벽돌 대성당과 툴루즈 로트레크 미술관을 봅니다.|About 1 hr by train: the brick cathedral and the Toulouse-Lautrec museum.',
    },
    {
      to: 'lourdes',
      tip: '기차로 약 1시간 50분. 마사비엘 동굴과 대성당, 밤 촛불 행렬을 봅니다.|About 1 hr 50 by train: the grotto, the basilicas and the evening procession.',
    },
  ],
  perpignan: [
    {
      to: 'collioure',
      tip: '야수파 화가들이 그린 항구와 성당, 왕궁 성을 봅니다.|The harbour the Fauvists painted, the church and the royal castle.',
    },
    {
      to: 'narbonne',
      tip: '짓다 만 대성당과 로마 박물관 나르보 비아, 레 알 시장을 봅니다.|The unfinished cathedral, the Narbo Via museum and Les Halles.',
    },
  ],
  bordeaux: [
    {
      to: 'arcachon',
      tip: '필라 모래 언덕에 오르고 굴 양식장 마을에서 굴을 맛봅니다. 언덕까지는 아르카숑역에서 Baïa 3번 버스로 약 25분이며, 11~4월엔 일요일·공휴일에 다니지 않습니다.|Climb the Dune du Pilat and taste oysters in the oyster villages; Baïa bus 3 from Arcachon station takes about 25 min to the dune and does not run on Sundays and holidays from November to April.',
    },
  ],
  annecy: [
    {
      to: 'chamonix',
      tip: '몽블랑 전망대 에귀 뒤 미디에 오릅니다. 맑은 날 아침에 출발하세요.|Ride up the Aiguille du Midi for Mont Blanc; set off early on a clear day.',
      x: [['에귀 뒤 미디는 2026년 11월 2일~12월 18일 정기 점검으로 운휴합니다.|The Aiguille du Midi is shut for maintenance from 2 November to 18 December 2026.', '2026-12-18']],
    },
  ],
  avignon: [
    {
      to: 'arles',
      tip: '원형경기장과 반 고흐의 자취를 하루에 봅니다. 차가 있으면 레보드프로방스와 묶을 수 있습니다.|The arena and Van Gogh’s Arles in a day; with a car, add Les Baux-de-Provence.',
    },
    {
      to: 'nimes',
      tip: '오전에 원형경기장과 메종 카레를 보고, 오후에 liO 121번 버스(약 45분)로 퐁뒤가르에 다녀옵니다.|The arena and Maison Carrée in the morning, then liO bus 121 out to the Pont du Gard (about 45 min).',
    },
    {
      to: 'isle-sur-la-sorgue',
      tip: '일요일·목요일 오전 장날에 맞춰 가면 좋습니다. 퐁텐드보클뤼즈까지는 버스나 택시로 약 15분입니다.|Best on the Sunday or Thursday morning market; Fontaine-de-Vaucluse is about 15 minutes on by bus or taxi.',
    },
    {
      to: 'gordes',
      how: '차·투어로 약 45분|About 45 min by car or tour',
      tip: '세낭크 수도원과 루시용 오크르 길을 묶는 뤼베롱 투어가 많습니다. 대중교통은 거의 없습니다.|Luberon tours pair it with Sénanque Abbey and the Roussillon ochre trail; there is almost no public transport.',
    },
    {
      to: 'les-baux-de-provence',
      how: '차·투어로 약 30분|About 30 min by car or tour',
      tip: '빛의 채석장과 성을 보고 생레미드프로방스에 들릅니다. 여름엔 아침 일찍 가야 덜 붐빕니다.|The light shows and the castle, then Saint-Rémy-de-Provence; go early in summer to beat the crowds.',
    },
  ],
  rome: [
    {
      to: 'orvieto',
      tip: '절벽 위 마을의 대성당과 지하 동굴, 성 파트리치오 우물을 봅니다. 역 앞 푸니쿨라는 2026년 6월부터 정비로 멈춰 있어, 그동안은 같은 간격(10~15분)으로 다니는 대체 버스로 카헨 광장까지 오릅니다.|The clifftop cathedral, the underground caves and St Patrick’s Well; the funicular from the station has been shut for maintenance since June 2026, so a replacement bus runs up to Piazza Cahen every 10–15 min.',
    },
    {
      to: 'florence',
      tip: '고속열차로 약 1시간 반. 두오모와 우피치, 베키오 다리를 하루에 봅니다. 우피치는 예약하세요.|About 1½ hours by high-speed train: the Duomo, the Uffizi and the Ponte Vecchio in a day; book the Uffizi.',
    },
    {
      to: 'naples',
      tip: '고속열차로 약 1시간 10분. 국립 고고학 박물관과 스파카나폴리 골목을 걷고 피자를 맛봅니다.|About 1 hr 10 min by high-speed train: the Archaeological Museum, the Spaccanapoli lanes and a pizza.',
    },
    {
      to: 'pompeii',
      how: '기차로 나폴리 경유 약 2시간|About 2 hrs by train via Naples',
      mode: 'train',
      tip: '나폴리에서 시르쿰베수비아나 열차로 갈아탑니다. 유적이 넓어 반나절 이상 걸리니 아침 일찍 출발하세요.|Change at Naples to the Circumvesuviana; the site is huge and takes at least half a day, so leave early.',
    },
    {
      to: 'assisi',
      tip: '성 프란치스코 대성당과 언덕 마을을 봅니다. 역에서 마을까지는 버스로 올라갑니다.|The Basilica of St Francis and the hill town; take the bus up from the station.',
    },
  ],
  milan: [
    {
      to: 'como',
      tip: '호숫가를 걷고 브루나테 푸니쿨라에 오르거나 배로 벨라조까지 갑니다.|Walk the lakefront, ride the Brunate funicular or take a boat to Bellagio.',
    },
    {
      to: 'bergamo',
      tip: '언덕 위 성벽 도시 치타 알타를 걷습니다. 아래 마을에서 푸니쿨라로 올라갑니다.|Walk the walled Città Alta on its hill, reached by funicular from the lower town.',
    },
    {
      to: 'stresa',
      tip: '배로 보로메오 섬들(벨라 섬·페스카토리 섬)을 돕니다. 섬 궁전은 봄~가을에만 엽니다.|Boat out to the Borromean Islands; the island palaces open spring to autumn only.',
    },
    {
      to: 'sirmione',
      tip: '가르다 호수 반도 끝 스칼리제라 성과 카툴루스 유적을 봅니다. 데센차노까지 기차, 이후 버스나 배입니다.|The Scaliger castle and the Grotte di Catullo on Lake Garda; train to Desenzano, then bus or boat.',
    },
    {
      to: 'parma',
      tip: '대성당과 세례당을 보고 파르마 햄·치즈를 맛봅니다.|The cathedral and baptistery, plus Parma ham and Parmigiano.',
    },
    {
      to: 'verona',
      tip: '아레나와 줄리엣의 집, 에르베 광장을 봅니다.|The Arena, Juliet’s House and Piazza delle Erbe.',
    },
    {
      to: 'lugano',
      tip: '스위스 루가노 호숫가 구시가와 몬테 브레, 산살바토레 전망을 즐깁니다. 신분증을 챙기세요.|Lugano’s lakeside old town and the Monte Brè or San Salvatore views in Switzerland; bring ID.',
      x: [['산살바토레 푸니쿨라는 정상 레스토랑 공사로 2026년 11월 9일~2027년 3월 12일 운휴합니다.|The San Salvatore funicular is shut from 9 November 2026 to 12 March 2027 while the summit restaurant is rebuilt.', '2027-03-12']],
    },
  ],
  florence: [
    {
      to: 'pisa',
      tip: '사탑과 대성당이 있는 기적의 광장을 봅니다. 루카와 묶으면 하루가 알찹니다.|The Leaning Tower and the Field of Miracles; pair it with Lucca for a full day.',
    },
    {
      to: 'lucca',
      tip: '성벽 위를 자전거로 한 바퀴 돌고 원형 광장을 봅니다.|Cycle the city walls and see the oval Piazza dell’Anfiteatro.',
    },
    {
      to: 'siena',
      tip: '캄포 광장과 대성당을 봅니다. 버스가 기차보다 시내에 가깝습니다.|The Campo and the cathedral; the bus drops you closer to the centre than the train.',
    },
    {
      to: 'san-gimignano',
      tip: '중세 탑 마을. 시에나와 묶는 투어도 많고, 버스는 포지본시에서 갈아탑니다.|The medieval tower town; often toured with Siena, and buses change at Poggibonsi.',
    },
    {
      to: 'bologna',
      tip: '포르티코 거리와 두 탑, 볼로냐 음식을 즐깁니다.|Arcaded streets, the Two Towers and Bologna’s food.',
    },
    {
      to: 'cinque-terre',
      how: '기차로 피사 경유 약 2시간|About 2 hrs by train via Pisa',
      mode: 'train',
      tip: '피사에서 라스페치아로 갈아타 다섯 마을을 기차로 돕니다. 하루가 깁니다.|Change at Pisa for La Spezia and hop the five villages by train; it makes a long day.',
    },
    {
      to: 'montepulciano',
      tip: '와인 비노 노빌레의 언덕 마을. 발도르차 풍경과 묶는 투어가 편합니다.|The hill town of Vino Nobile; tours that add the Val d’Orcia countryside are easiest.',
    },
    {
      to: 'orvieto',
      tip: '절벽 위 도시의 대성당과 지하 동굴을 봅니다. 기차역에서 푸니쿨라(운휴 중엔 대체 버스)로 올라갑니다.|The cliff-top town’s cathedral and underground caves; ride up from the station by funicular (or the replacement bus while it is out of service).',
    },
    {
      to: 'assisi',
      how: '기차로 약 2시간 30분(테론톨라 환승)|About 2 hrs 30 by train (change at Terontola)',
      mode: 'train',
      tip: '성 프란치스코 대성당의 조토 프레스코를 보고 언덕 위 중세 마을을 걷습니다. 하루가 깁니다.|Giotto’s frescoes in the Basilica of St Francis and the medieval hill town; it makes a long day.',
    },
    {
      to: 'ravenna',
      how: '기차로 약 2시간(볼로냐 환승)|About 2 hrs by train (change at Bologna)',
      mode: 'train',
      tip: '산 비탈레 성당과 갈라 플라치디아 영묘의 비잔틴 모자이크를 봅니다.|The Byzantine mosaics of San Vitale and the Mausoleum of Galla Placidia.',
    },
    {
      to: 'arezzo',
      tip: '기차로 약 1시간. 피에로 델라 프란체스카의 프레스코와 그란데 광장을 봅니다.|About 1 hr by train: Piero della Francesca’s frescoes and the Piazza Grande.',
    },
  ],
  venice: [
    {
      to: 'padua',
      tip: '조토의 스크로베니 예배당(예약 필수)과 성 안토니오 성당을 봅니다.|Giotto’s Scrovegni Chapel (booking required) and the Basilica of St Anthony.',
    },
    {
      to: 'vicenza',
      tip: '팔라디오의 건축(올림피코 극장·바실리카)을 봅니다.|Palladio’s buildings, including the Teatro Olimpico and the Basilica.',
    },
    {
      to: 'verona',
      tip: '아레나와 줄리엣의 집, 에르베 광장을 봅니다.|The Arena, Juliet’s House and Piazza delle Erbe.',
    },
    {
      to: 'cortina',
      tip: '돌로미티 산악 마을. 여름엔 케이블카로 전망대에 오릅니다. 편도가 길어 아침 일찍 출발하세요.|The Dolomites resort; ride a cable car up in summer, and leave early as the bus is long.',
    },
  ],
  verona: [
    {
      to: 'sirmione',
      tip: '가르다 호수 반도의 성과 로마 유적, 온천을 즐깁니다.|The lakeside castle, Roman ruins and spa on Lake Garda.',
    },
    {
      to: 'mantua',
      tip: '곤차가 가문의 두칼레 궁전과 테 궁전을 봅니다.|The Gonzaga palaces, Palazzo Ducale and Palazzo Te.',
    },
    {
      to: 'vicenza',
      tip: '팔라디오의 올림피코 극장과 바실리카를 봅니다.|Palladio’s Teatro Olimpico and Basilica.',
    },
    {
      to: 'trento',
      tip: '기차로 약 1시간. 두오모 광장과 부온콘실리오 성을 봅니다.|About 1 hr by train: the cathedral square and the Buonconsiglio Castle.',
    },
  ],
  bologna: [
    {
      to: 'modena',
      tip: '대성당과 광장(세계유산), 발사믹 식초 농가를 봅니다.|The World Heritage cathedral and square, plus a balsamic-vinegar farm.',
    },
    {
      to: 'ferrara',
      tip: '에스테 성과 성벽 위 자전거 길을 즐깁니다.|The Este castle and cycling on the city walls.',
    },
    {
      to: 'parma',
      tip: '대성당과 세례당, 파르마 햄·치즈를 즐깁니다.|The cathedral and baptistery, plus Parma ham and cheese.',
    },
    {
      to: 'ravenna',
      tip: '산 비탈레 성당 등 비잔틴 모자이크 성당들을 봅니다.|The Byzantine mosaics of San Vitale and the other churches.',
    },
  ],
  naples: [
    {
      to: 'pompeii',
      tip: '화산재에 묻힌 로마 도시. 시르쿰베수비아나 열차로 가며 반나절 이상 걸립니다.|The Roman city buried by Vesuvius; take the Circumvesuviana and allow at least half a day.',
    },
    {
      to: 'capri',
      tip: '배로 건너가 푸니쿨라로 마을에 오르고, 파도가 잔잔하면 푸른 동굴에 들어갑니다.|Ferry over, ride the funicular up and, when the sea is calm, visit the Blue Grotto.',
    },
    {
      to: 'sorrento',
      tip: '절벽 위 구시가와 레몬 가게를 걷습니다. 폼페이와 묶을 수 있습니다.|The clifftop old town and lemon shops; can be paired with Pompeii.',
    },
    {
      to: 'positano',
      how: '기차·버스로 소렌토 경유 약 2시간|About 2 hrs by train and bus via Sorrento',
      mode: 'train',
      tip: '아말피 해안 절벽 마을. 여름엔 나폴리에서 직항 배도 다닙니다.|The cliffside Amalfi Coast village; in summer boats also run direct from Naples.',
    },
    {
      to: 'ischia',
      tip: '쾌속선으로 약 1시간. 아라고네세 성과 온천 정원을 봅니다.|About 1 hr by hydrofoil: the Aragonese Castle and the thermal gardens.',
    },
  ],
  sorrento: [
    {
      to: 'capri',
      tip: '배로 약 25분. 푸른 동굴은 파도가 높으면 닫힙니다.|About 25 min by boat; the Blue Grotto closes in rough seas.',
    },
    {
      to: 'pompeii',
      tip: '기차로 30분. 아침 일찍 들어가야 덜 덥고 덜 붐빕니다.|30 min by train; go early to beat the heat and crowds.',
    },
    {
      to: 'positano',
      tip: '버스나 배로 가는 절벽 마을. 아말피와 묶어 하루에 돌 수 있습니다.|The cliffside village by bus or boat; can be combined with Amalfi in a day.',
    },
    {
      to: 'amalfi',
      tip: '대성당과 해안 마을. 여름엔 도로가 막혀 배가 편합니다.|The cathedral and seafront; in summer the boat beats the road traffic.',
    },
  ],
  genoa: [
    {
      to: 'portofino',
      tip: '산타 마르게리타까지 기차, 이후 버스나 배로 갑니다. 브라운 성 전망이 좋습니다.|Train to Santa Margherita, then bus or boat; great views from Castello Brown.',
    },
    {
      to: 'cinque-terre',
      tip: '다섯 마을을 기차로 옮겨 다닙니다. 친퀘테레 카드로 열차와 산책로를 함께 씁니다.|Hop between the five villages by train; the Cinque Terre Card covers trains and trails.',
    },
  ],
  pisa: [
    {
      to: 'lucca',
      tip: '성벽 위 자전거와 원형 광장을 봅니다.|Cycle the walls and see Piazza dell’Anfiteatro.',
    },
    {
      to: 'cinque-terre',
      tip: '라스페치아에서 갈아타 다섯 마을을 기차로 돕니다.|Change at La Spezia and hop between the five villages by train.',
    },
  ],
  bari: [
    {
      to: 'polignano-a-mare',
      tip: '절벽 위 하얀 구시가와 라마 모나킬레 해변을 봅니다.|The white clifftop old town and the Lama Monachile cove.',
    },
    {
      to: 'alberobello',
      tip: '고깔 지붕 집 트룰리 마을을 걷습니다.|Walk among the cone-roofed trulli.',
    },
    {
      to: 'matera',
      tip: '동굴 주거지 사씨를 걷습니다. 버스가 기차보다 빠릅니다.|Walk the cave districts, the Sassi; the bus is faster than the train.',
    },
    {
      to: 'ostuni',
      tip: '기차로 약 50분 뒤 버스. 하얀 구시가와 올리브 평원을 봅니다.|About 50 min by train, then a bus: the white old town and the olive plain.',
    },
  ],
  catania: [
    {
      to: 'taormina',
      tip: '그리스 극장과 이솔라 벨라 해변을 봅니다.|The Greek theatre and the Isola Bella beach.',
    },
    {
      to: 'siracusa',
      tip: '오르티자 섬 구시가와 네아폴리스 고고학 공원을 봅니다.|Ortigia’s old town and the Neapolis archaeological park.',
    },
    {
      to: 'ragusa',
      tip: '버스로 약 2시간. 바로크 옛 마을 라구사 이블라를 봅니다.|About 2 hrs by bus: the Baroque old quarter of Ragusa Ibla.',
    },
  ],
  palermo: [
    {
      to: 'cefalu',
      tip: '바위산 아래 노르만 대성당과 해변을 봅니다.|The Norman cathedral under the rock, and the beach.',
    },
    {
      to: 'trapani',
      tip: '버스로 약 2시간. 케이블카로 산꼭대기 마을 에리체에 오릅니다.|About 2 hrs by bus: take the cable car up to the hilltop town of Erice.',
    },
  ],
  perugia: [
    {
      to: 'assisi',
      tip: '성 프란치스코 대성당과 언덕 마을을 봅니다.|The Basilica of St Francis and the hill town.',
    },
    {
      to: 'gubbio',
      tip: '버스로 약 1시간 10분. 콘솔리 궁전과 바구니 케이블카를 봅니다.|About 1 hr 10 by bus: the Palazzo dei Consoli and the basket cable car.',
    },
    {
      to: 'spoleto',
      tip: '기차로 약 1시간 15분(폴리뇨 환승). 탑의 다리와 대성당을 봅니다.|About 1 hr 15 by train, changing at Foligno: the Ponte delle Torri and the cathedral.',
    },
  ],
  london: [
    {
      to: 'windsor',
      tip: '왕실이 지금도 쓰는 윈저 성을 봅니다. 근위병 교대식 날을 확인하세요.|Windsor Castle, still a royal home; check the guard-change days.',
    },
    {
      to: 'oxford',
      tip: '대학 칼리지들과 보들리 도서관, 래드클리프 카메라를 봅니다.|The colleges, the Bodleian Library and the Radcliffe Camera.',
    },
    {
      to: 'cambridge',
      tip: '킹스 칼리지 예배당을 보고 캠강에서 펀트를 탑니다.|King’s College Chapel and a punt on the Cam.',
    },
    {
      to: 'canterbury',
      tip: '캔터베리 대성당과 중세 골목을 걷습니다.|Canterbury Cathedral and the medieval lanes.',
    },
    {
      to: 'brighton',
      tip: '로열 파빌리온과 바닷가 부두를 봅니다.|The Royal Pavilion and the seafront pier.',
    },
    {
      to: 'bath',
      tip: '로마 목욕탕과 로열 크레센트를 봅니다. 스톤헨지 투어와 묶는 경우가 많습니다.|The Roman Baths and the Royal Crescent; often toured together with Stonehenge.',
    },
    {
      to: 'salisbury',
      tip: '대성당의 마그나 카르타를 보고 버스로 스톤헨지에 다녀옵니다.|Magna Carta in the cathedral, then the bus out to Stonehenge.',
    },
    {
      to: 'cotswolds',
      tip: '꿀빛 돌집 마을들. 마을 사이 버스가 드물어 투어가 편합니다.|Honey-stone villages; buses between them are sparse, so a tour is easiest.',
    },
    {
      to: 'stratford-upon-avon',
      tip: '셰익스피어 생가와 로열 셰익스피어 극장을 봅니다. 저녁 공연을 보면 막차를 확인하세요.|Shakespeare’s Birthplace and the Royal Shakespeare Theatre; check the last train if you stay for a show.',
    },
    {
      to: 'york',
      tip: '고속열차로 약 2시간. 요크 민스터와 성벽, 섐블스 골목을 봅니다.|About 2 hours by fast train: York Minster, the walls and the Shambles.',
    },
    {
      to: 'dover',
      tip: '고속열차로 약 1시간 10분. 도버 성과 하얀 절벽 산책로를 봅니다.|About 1 hr 10 by high-speed train: Dover Castle and the White Cliffs path.',
    },
  ],
  edinburgh: [
    {
      to: 'stirling',
      tip: '스털링 성과 월리스 기념탑을 봅니다.|Stirling Castle and the Wallace Monument.',
    },
    {
      to: 'st-andrews',
      tip: '골프의 고향과 대성당 유적, 바닷가 대학 도시를 걷습니다.|The home of golf, the cathedral ruins and the seaside university town.',
    },
    {
      to: 'glasgow',
      tip: '켈빈그로브 미술관과 매킨토시 건축을 봅니다.|Kelvingrove museum and Mackintosh architecture.',
    },
  ],
  manchester: [
    {
      to: 'liverpool',
      tip: '비틀스 스토리와 앨버트 독, 축구장 투어를 즐깁니다.|The Beatles Story, Albert Dock and a stadium tour.',
    },
    {
      to: 'york',
      tip: '요크 민스터와 성벽, 섐블스 골목을 걷습니다.|York Minster, the city walls and the Shambles.',
    },
    {
      to: 'lake-district',
      tip: '윈더미어 호수 유람선과 피터 래빗 마을을 봅니다. 하루가 깁니다.|A Windermere cruise and Beatrix Potter country; it makes a long day.',
    },
    {
      to: 'conwy',
      tip: '성벽으로 둘러싸인 웨일스의 성과 마을을 봅니다.|The walled Welsh town and its castle.',
    },
    {
      to: 'chester',
      tip: '기차로 약 1시간. 성벽을 한 바퀴 걷고 2층 회랑 상점가 로우스를 봅니다.|About 1 hr by train: walk the city walls and browse the galleried Rows.',
    },
  ],
  bristol: [
    {
      to: 'bath',
      tip: '기차로 12분. 로마 목욕탕과 로열 크레센트를 봅니다.|12 minutes by train: the Roman Baths and the Royal Crescent.',
    },
  ],
  glasgow: [
    {
      to: 'stirling',
      tip: '스털링 성과 월리스 기념탑을 봅니다.|Stirling Castle and the Wallace Monument.',
    },
    {
      to: 'fort-william',
      tip: '버스로 약 3시간 10분이라 1박을 권합니다. 글렌코 계곡을 지나 벤네비스 아래 마을에 닿습니다.|About 3 hr 10 by coach, so an overnight is better: through Glencoe to the town below Ben Nevis.',
    },
  ],
  conwy: [
    {
      to: 'snowdonia',
      tip: '스노든산 등산 열차나 산길로 웨일스 최고봉에 오릅니다.|Climb Wales’s highest peak by the mountain railway or on foot.',
    },
  ],
  belfast: [
    {
      to: 'giants-causeway',
      tip: '육각 기둥 해안과 해안 도로를 봅니다. 대중교통은 갈아타야 해 투어가 편합니다.|The hexagonal basalt coast and the coast road; public transport needs changes, so tours are easiest.',
    },
  ],
  amsterdam: [
    {
      to: 'haarlem',
      tip: '기차로 17분. 그로테 마르크트와 프란스 할스 미술관을 봅니다.|17 min by train: the Grote Markt and the Frans Hals Museum.',
    },
    {
      to: 'utrecht',
      tip: '운하 테라스와 돔 탑에 오릅니다.|Canal-side wharves and the climb up the Dom Tower.',
    },
    {
      to: 'delft',
      tip: '델프트 도자기와 페르메이르의 도시를 걷습니다.|Delftware and Vermeer’s town.',
    },
    {
      to: 'the-hague',
      tip: '마우리츠하위스의 진주 귀걸이 소녀와 바닷가 스헤베닝언을 봅니다.|Girl with a Pearl Earring at the Mauritshuis and the beach at Scheveningen.',
    },
    {
      to: 'giethoorn',
      tip: '운하 마을에서 보트를 빌려 탑니다. 기차와 버스를 갈아타야 합니다.|Rent a boat in the canal village; needs a train and a bus.',
    },
    {
      to: 'rotterdam',
      tip: '큐브 하우스와 마르크탈, 에라스뮈스 다리 같은 현대 건축을 봅니다. 킨더다이크 풍차와 묶기도 합니다.|Modern architecture: the Cube Houses, the Markthal and the Erasmus Bridge; often paired with the Kinderdijk windmills.',
    },
    {
      to: 'antwerp',
      tip: '루벤스의 집과 대성당, 화려한 중앙역을 봅니다.|Rubens House, the cathedral and the grand Central Station.',
    },
    {
      to: 'leiden',
      tip: '기차로 약 35분. 운하 길을 걷고 국립 고대 유물 박물관과 1590년 식물원을 봅니다.|About 35 min by train: the canals, the National Museum of Antiquities and the botanical garden of 1590.',
    },
  ],
  rotterdam: [
    {
      to: 'delft',
      tip: '기차로 12분. 구시가와 델프트 도자기 공방을 봅니다.|12 min by train: the old town and a Delftware workshop.',
    },
    {
      to: 'the-hague',
      tip: '마우리츠하위스와 의회 건물 비넨호프를 봅니다.|The Mauritshuis and the Binnenhof parliament.',
    },
  ],
  brussels: [
    {
      to: 'bruges',
      tip: '운하와 종탑, 마르크트 광장을 봅니다.|The canals, the Belfry and the Markt.',
    },
    {
      to: 'ghent',
      tip: '반 에이크의 제단화와 그라슬레이 강변을 봅니다.|Van Eyck’s altarpiece and the Graslei quays.',
    },
    {
      to: 'antwerp',
      tip: '루벤스의 집과 대성당, 화려한 중앙역을 봅니다.|Rubens House, the cathedral and the grand Central Station.',
    },
    {
      to: 'leuven',
      tip: '대학 도서관과 시청사, 맥주 거리를 즐깁니다.|The university library, the Town Hall and the beer bars.',
    },
    {
      to: 'dinant',
      tip: '절벽 아래 양파 지붕 성당과 성채를 봅니다.|The onion-domed church under the cliff and the citadel.',
    },
    {
      to: 'mechelen',
      tip: '기차로 약 20분. 성 롬바우츠 탑에 오르고 카제르너 도신과 베긴회 수녀원을 봅니다.|About 20 min by train: climb St Rumbold’s Tower, then Kazerne Dossin and the beguinage.',
    },
  ],
  bruges: [
    {
      to: 'ghent',
      tip: '기차로 25분. 그라슬레이 강변과 성 바보 대성당을 봅니다.|25 min by train: the Graslei and St Bavo’s Cathedral.',
    },
  ],
  'luxembourg-city': [
    {
      to: 'vianden',
      tip: '언덕 위 비안덴 성을 보고 체어리프트를 탑니다. 체어리프트는 부활절~10월 중순에만 운행합니다.|Vianden Castle on its hill and the chairlift, which runs from Easter to mid-October only.',
    },
    {
      to: 'echternach',
      tip: '뮐러탈 바위 숲길(뮐러탈 트레일)을 걷습니다.|Walk the rock forests of the Mullerthal Trail.',
    },
    {
      to: 'remich',
      tip: '모젤 강변 포도밭과 와인 저장고를 봅니다.|Moselle vineyards and wine cellars.',
    },
    {
      to: 'clervaux',
      tip: '기차로 약 1시간. 성에서 사진전 ‘인간 가족’을 보고 숲길로 수도원에 오릅니다(월·화요일 휴관).|About an hour by train: The Family of Man in the castle, then the woodland path up to the abbey (closed Mondays and Tuesdays).',
    },
    {
      to: 'trier',
      tip: '기차로 약 50분. 로마 성문 포르타 니그라와 황제 목욕탕, 대성당을 봅니다.|About 50 min by train: the Roman Porta Nigra, the imperial baths and the cathedral.',
    },
  ],
  helsinki: [
    {
      to: 'porvoo',
      tip: '강가 붉은 창고와 나무집 구시가를 걷습니다.|Red riverside storehouses and the wooden old town.',
    },
    {
      to: 'tallinn',
      tip: '배로 건너가 중세 구시가를 봅니다.|Ferry over for the medieval old town.',
    },
  ],
  stockholm: [
    {
      to: 'uppsala',
      tip: '대성당과 대학, 옛 웁살라의 왕릉 언덕을 봅니다.|The cathedral, the university and the royal mounds of Old Uppsala.',
    },
  ],
  copenhagen: [
    {
      to: 'roskilde',
      tip: '덴마크 왕들이 잠든 대성당과 바이킹 선박 박물관을 봅니다.|The cathedral of the Danish kings and the Viking Ship Museum.',
    },
    {
      to: 'malmo',
      tip: '외레순 다리를 건너 스웨덴의 구시가와 터닝 토르소를 봅니다.|Cross the Øresund Bridge to Sweden’s old town and the Turning Torso.',
    },
    {
      to: 'odense',
      tip: '안데르센의 고향과 안데르센 박물관을 봅니다.|Hans Christian Andersen’s birthplace and museum.',
    },
  ],
  vienna: [
    {
      to: 'bratislava',
      tip: '성과 구시가를 반나절에 봅니다. 기차나 도나우강 배로 갑니다.|The castle and old town in half a day, by train or Danube boat.',
    },
    {
      to: 'linz',
      tip: '도나우 강변의 렌토스 미술관과 아르스 일렉트로니카 센터를 보고 산악 트램으로 푀스틀링베르크에 오릅니다.|The Lentos and the Ars Electronica Center on the Danube, then the mountain tram up the Pöstlingberg.',
    },
    {
      to: 'durnstein',
      tip: '크렘스에서 버스로 뒤른슈타인에 가 파란 탑과 성터를 보고, 봄~가을엔 배로 멜크 수도원까지 올라갑니다.|By bus from Krems to Dürnstein for the blue tower and the castle ruins, then in season the boat up to Melk Abbey.',
    },
    {
      to: 'sopron',
      tip: '기차로 약 1시간 30분. 국경 너머 헝가리의 중세 성벽 도시와 불의 탑을 봅니다.|About 1 hr 30 by train: Hungary’s walled medieval border town and its Firewatch Tower.',
    },
  ],
  budapest: [
    {
      to: 'eger',
      tip: '성채와 미나레트, 미녀의 계곡 와인 저장고를 즐깁니다.|The castle, the minaret and the wine cellars of the Valley of Beautiful Women.',
    },
    {
      to: 'szentendre',
      tip: '도나우강 가 예술가 마을의 골목과 정교회 성당, 마르치판 가게를 걷습니다. 스칸젠까지 보면 하루가 꽉 찹니다.|The artists’ town on the Danube: lanes, Orthodox churches and marzipan shops; adding the Skanzen fills the day.',
    },
    {
      to: 'tihany',
      tip: '기차와 버스로 약 2시간 20분. 언덕 위 수도원에서 발라톤 호수를 내려다보고 분화구 호수를 걷습니다.|About 2 hrs 20 by train and bus: Lake Balaton from the abbey on the hill, and a walk round the crater lake.',
      how: '기차·버스로 약 2시간 20분(발라톤퓌레드 환승)|About 2 hrs 20 by train and bus (change at Balatonfüred)',
    },
    {
      to: 'gyor',
      tip: '기차로 약 1시간 20분. 바로크 구시가와 대성당을 보고 판논할마 대수도원까지 다녀옵니다.|About 1 hr 20 by train: the Baroque old town and cathedral, plus Pannonhalma Archabbey.',
    },
    {
      to: 'holloko',
      tip: '버스로 약 2시간 30분(환승). 유네스코 팔로츠 민속 마을과 언덕 위 성을 봅니다.|About 2 hrs 30 by bus with a change: the UNESCO Palóc village and its hilltop castle.',
    },
  ],
  prague: [
    {
      to: 'karlovy-vary',
      tip: '온천 회랑을 걸으며 광천수를 마셔 봅니다.|Walk the spa colonnades and taste the mineral springs.',
    },
    {
      to: 'cesky-krumlov',
      tip: '블타바강이 감싼 구시가와 성을 봅니다. 직행 버스가 기차보다 편합니다.|The old town in the Vltava loop and the castle; the direct bus beats the train.',
    },
    {
      to: 'dresden',
      tip: '츠빙거 궁전과 프라우엔 교회, 엘베 강변을 봅니다. 엘베강 계곡을 따라가는 기차 풍경이 좋습니다.|The Zwinger, the Frauenkirche and the Elbe riverside; the train follows the scenic Elbe valley.',
    },
    {
      to: 'plzen',
      tip: '기차로 약 1시간 35분. 필스너 우르켈 양조장 투어와 구시가 지하도를 봅니다.|About 1 hr 35 by train: the Pilsner Urquell brewery tour and the old-town underground.',
    },
  ],
  'ceske-budejovice': [
    {
      to: 'cesky-krumlov',
      tip: '버스로 35분. 성과 블타바강이 감싼 구시가를 봅니다.|35 min by bus: the castle and the old town in the Vltava loop.',
    },
  ],
  madrid: [
    {
      to: 'toledo',
      tip: '세 문화가 남은 언덕 위 구시가와 대성당을 봅니다.|The hilltop old town of three cultures and the cathedral.',
    },
    {
      to: 'segovia',
      tip: '로마 수도교와 알카사르를 봅니다. 새끼 돼지 요리가 유명합니다.|The Roman aqueduct and the Alcázar; famous for roast suckling pig.',
    },
    {
      to: 'salamanca',
      tip: '마요르 광장과 대학, 두 대성당을 봅니다.|The Plaza Mayor, the university and the two cathedrals.',
    },
    {
      to: 'cordoba',
      tip: '메스키타와 꽃 골목을 봅니다. 고속열차로 당일치기가 가능합니다.|The Mezquita and the flower-filled lanes; doable in a day by high-speed train.',
    },
    {
      to: 'avila',
      tip: '성벽 위를 걷고 대성당과 산 비센테 성당을 봅니다. 해 질 녘 쿠아트로 포스테스 전망대가 좋습니다.|Walk the walls and see the cathedral and San Vicente; the Cuatro Postes viewpoint is best at sunset.',
    },
    {
      to: 'cuenca',
      tip: '협곡 절벽에 매달린 집과 산 파블로 다리, 대성당을 봅니다. 고속열차역이 시내에서 멀어 버스로 구시가까지 오릅니다.|The Hanging Houses over the gorge, the San Pablo Bridge and the cathedral; the high-speed station is out of town, so take a bus up.',
    },
  ],
  barcelona: [
    {
      to: 'montserrat',
      tip: '톱니바퀴 열차나 케이블카로 수도원에 오르고 소년 성가대(에스콜라니아) 노래를 듣습니다. 성가대는 평일 13시·일요일 12시에 부르고, 토요일과 여름방학(6월 말~8월 말)엔 없습니다.|Ride the rack railway or cable car to the monastery and hear the boys’ choir (Escolania): weekdays at 13:00 and Sundays at 12:00, never on Saturdays or in the summer break (late June to late August).',
    },
    {
      to: 'girona',
      tip: '성벽 길과 대성당, 오냐르 강변 색색의 집을 봅니다.|The city walls, the cathedral and the colourful houses on the Onyar.',
    },
    {
      to: 'tarragona',
      tip: '바닷가 로마 원형경기장과 성벽 산책로, 대성당을 봅니다.|The seaside Roman amphitheatre, the wall walk and the cathedral.',
    },
    {
      to: 'sitges',
      tip: '바다 위 곶의 성당과 해변 산책로, 루시뇰의 카우 페라트 미술관을 봅니다. 여름엔 해수욕을 더합니다.|The headland church, the seafront and Rusiñol’s Cau Ferrat Museum; add a swim in summer.',
    },
  ],
  seville: [
    {
      to: 'cordoba',
      tip: '기차로 45분. 메스키타와 꽃 골목을 봅니다.|45 min by train: the Mezquita and the flower lanes.',
    },
    {
      to: 'ronda',
      tip: '협곡 위 누에보 다리와 투우장을 봅니다.|The Puente Nuevo over the gorge and the bullring.',
    },
    {
      to: 'cadiz',
      tip: '바다로 둘러싸인 구시가의 대성당과 타비라 탑, 중앙 시장을 보고 라 칼레타 해변에서 해 지는 풍경을 봅니다.|The sea-ringed old town: the cathedral, Torre Tavira and the market, then sunset at La Caleta.',
    },
    {
      to: 'jerez',
      tip: '기차로 약 1시간. 셰리 보데가와 승마학교 공연(정해진 요일), 알카사르를 봅니다.|About 1 hr by train: a sherry bodega, the equestrian show (set days only) and the Alcázar.',
    },
  ],
  malaga: [
    {
      to: 'nerja',
      tip: '유럽의 발코니 전망대와 네르하 동굴을 봅니다.|The Balcón de Europa and the Nerja caves.',
    },
    {
      to: 'ronda',
      tip: '협곡 위 누에보 다리를 봅니다.|The Puente Nuevo over the gorge.',
    },
    {
      to: 'cordoba',
      tip: '기차로 1시간. 메스키타를 봅니다.|An hour by train to the Mezquita.',
    },
    {
      to: 'granada',
      tip: '알람브라를 봅니다. 입장권은 미리 예약하세요.|The Alhambra; book tickets well ahead.',
    },
  ],
  granada: [
    {
      to: 'cordoba',
      tip: '메스키타와 꽃 골목을 봅니다.|The Mezquita and the flower lanes.',
    },
    {
      to: 'ubeda',
      tip: '버스로 약 2시간 20분. 우베다와 바에사의 르네상스 광장을 보고 올리브유를 맛봅니다.|About 2 hr 20 by bus: the Renaissance squares of Úbeda and Baeza, and an olive-oil tasting.',
    },
  ],
  bilbao: [
    {
      to: 'san-sebastian',
      tip: '구시가 핀초스 바와 라 콘차 해변을 즐깁니다.|Pintxos bars in the old town and La Concha beach.',
    },
    {
      to: 'logrono',
      tip: '버스로 약 1시간 40분. 시내 와이너리를 보고 저녁 라우렐 거리 핀초 바를 돕니다.|About 1 hr 40 by bus: a winery in town, then the pintxo bars of Calle Laurel in the evening.',
    },
    {
      to: 'santander',
      tip: '버스로 약 1시간 30분. 막달레나 궁전과 사르디네로 해변, 보틴 센터를 봅니다.|About 1 hr 30 by bus: the Magdalena Palace, El Sardinero and Centro Botín.',
    },
  ],
  lisbon: [
    {
      to: 'sintra',
      tip: '페나 궁전과 헤갈레이라 별장을 봅니다. 입장권은 시간 예약이 필요합니다.|Pena Palace and Quinta da Regaleira; timed tickets needed.',
    },
    {
      to: 'cascais',
      tip: '바닷가 마을과 지옥의 입, 해안 자전거 길을 즐깁니다.|The seaside town, Boca do Inferno and the coastal cycle path.',
    },
    {
      to: 'obidos',
      tip: '성벽 위를 걷고 진지냐(체리주)를 맛봅니다. 나자레·파티마와 하루에 묶는 투어가 많습니다.|Walk the walls and taste ginjinha cherry liqueur; tours often add Nazaré and Fátima in one day.',
    },
    {
      to: 'evora',
      tip: '로마 신전과 뼈 예배당을 봅니다.|The Roman temple and the Chapel of Bones.',
    },
    {
      to: 'nazare',
      tip: '큰 파도로 유명한 바닷가와 절벽 위 마을을 봅니다.|The giant-wave beach and the clifftop village.',
    },
    {
      to: 'fatima',
      tip: '성모 발현지 성당을 봅니다.|The sanctuary of the Marian apparitions.',
    },
    {
      to: 'coimbra',
      tip: '포르투갈에서 가장 오래된 대학과 조아니나 도서관을 봅니다.|Portugal’s oldest university and the Joanina Library.',
    },
    {
      to: 'aveiro',
      tip: '운하를 도는 몰리세이루 배와 코스타 노바 줄무늬 집을 봅니다. 코임브라와 묶을 수 있습니다.|Moliceiro boats on the canals and the striped houses of Costa Nova; can be paired with Coimbra.',
    },
    {
      to: 'faro',
      tip: '알가르브 해안의 구시가와 리아 포르모사 석호를 봅니다. 편도 3시간이라 하루가 깁니다. 하루 이상 묵으며 라고스까지 보는 편이 좋습니다.|Algarve old town and the Ria Formosa lagoon; three hours each way makes a long day, so staying over and adding Lagos is better.',
    },
    {
      to: 'tomar',
      tip: '템플 기사단의 그리스도 수도원과 둥근 예배당을 보고 강변 구시가를 걷습니다. 편도 2시간이라 아침 일찍 출발하세요.|The Templars’ Convent of Christ and its round church, then the riverside old town; it is 2 hours each way, so leave early.',
    },
    {
      to: 'setubal',
      tip: '기차로 약 1시간. 돌고래 관찰 배를 타거나 아라비다 해변에 갑니다.|About 1 hr by train: a dolphin-watching boat or Arrábida’s beaches.',
    },
    {
      to: 'ericeira',
      tip: '버스로 약 1시간. 서핑 해변과 하얀 어촌을 보고 해산물을 먹습니다. 가는 길에 마프라 궁전을 들러도 됩니다.|About 1 hr by bus: surf beaches, the white village and seafood; stop at Mafra Palace on the way.',
    },
  ],
  porto: [
    {
      to: 'aveiro',
      tip: '몰리세이루 배로 운하를 돌고 코스타 노바 줄무늬 집을 봅니다.|Moliceiro boats on the canals and the striped houses of Costa Nova.',
    },
    {
      to: 'braga',
      tip: '봉 제수스 계단과 대성당을 봅니다.|The Bom Jesus stairway and the cathedral.',
    },
    {
      to: 'guimaraes',
      tip: '포르투갈이 시작된 성과 구시가를 봅니다.|The castle where Portugal began and the old town.',
    },
    {
      to: 'coimbra',
      tip: '대학 조아니나 도서관과 구시가를 봅니다.|The university’s Joanina Library and the old town.',
    },
    {
      to: 'peso-da-regua',
      tip: '도루선 기차로 약 2시간 15분. 강변 포도밭을 보고 킨타에서 포트와인을 맛봅니다.|About 2 hr 15 on the Douro line: riverside vineyards and a port tasting at a quinta.',
    },
    {
      to: 'amarante',
      tip: '버스로 약 1시간. 강변 다리와 수도원을 보고 수녀원 과자를 맛봅니다.|About 1 hr by bus: the bridge, the monastery and convent sweets.',
    },
    {
      to: 'viana-do-castelo',
      tip: '기차로 약 1시간 25분. 푸니쿨라로 산타 루지아 성당에 오르고 구시가 광장을 봅니다.|About 1 hr 25 by train: the funicular to Santa Luzia and the old-town square.',
    },
  ],
  coimbra: [
    {
      to: 'aveiro',
      tip: '기차로 30분. 운하 배와 코스타 노바를 봅니다.|30 min by train: canal boats and Costa Nova.',
    },
  ],
  faro: [
    {
      to: 'lagos',
      tip: '폰타 다 피에다데 절벽과 해변을 봅니다.|The cliffs and coves of Ponta da Piedade.',
    },
  ],
  zurich: [
    {
      to: 'lucerne',
      tip: '카펠 다리와 구시가를 보고, 날이 맑으면 리기산이나 필라투스산에 오릅니다.|The Chapel Bridge and old town, and on a clear day Mount Rigi or Pilatus.',
    },
    {
      to: 'vaduz',
      tip: '작은 나라 리히텐슈타인의 수도. 미술관과 언덕 위 성 전망을 봅니다. 사르간스에서 버스로 갈아탑니다.|Liechtenstein’s capital: the art museum and the castle view; change to a bus at Sargans.',
    },
    {
      to: 'bern',
      tip: '아케이드 구시가와 시계탑, 곰 공원을 봅니다.|The arcaded old town, the clock tower and the bear park.',
    },
    {
      to: 'interlaken',
      tip: '하더쿨름 전망대나 호수 유람선을 즐깁니다. 융프라우요흐까지 가면 하루가 꽉 찹니다.|The Harder Kulm or a lake cruise; going up to the Jungfraujoch fills the whole day.',
    },
    {
      to: 'bregenz',
      tip: '직행 기차로 브레겐츠에 가 호수 무대를 보고 펜더 케이블카에 오릅니다. 시간이 남으면 기차로 독일 린다우 섬까지 갑니다.|Direct train to Bregenz for the lake stage and the Pfänder cable car; with time to spare, hop on the train to Lindau island in Germany.',
    },
    {
      to: 'st-gallen',
      tip: '기차로 장크트갈렌에 가 수도원 도서관과 대성당을 보고 구시가를 걷습니다.|By train to St. Gallen for the Abbey Library, the cathedral and the old town.',
    },
    {
      to: 'chur',
      tip: '기차로 쿠어에 가 구시가와 대성당을 보고, 버스로 플림스에 가 라인 협곡 전망대까지 걷습니다.|By train to Chur for the old town and cathedral, then the bus to Flims and a walk to the Rhine Gorge viewpoint.',
    },
  ],
  geneva: [
    {
      to: 'lausanne',
      tip: '올림픽 박물관과 대성당, 라보 포도밭 테라스를 봅니다.|The Olympic Museum, the cathedral and the Lavaux vineyard terraces.',
    },
    {
      to: 'montreux',
      tip: '레만 호숫가 시용 성과 프레디 머큐리 동상을 봅니다.|Chillon Castle on the lake and the Freddie Mercury statue.',
    },
    {
      to: 'chamonix',
      tip: '에귀 뒤 미디 전망대에서 몽블랑을 봅니다. 맑은 날 아침에 출발하세요.|Mont Blanc from the Aiguille du Midi; leave early on a clear day.',
      x: [['에귀 뒤 미디는 2026년 11월 2일~12월 18일 정기 점검으로 운휴합니다.|The Aiguille du Midi is shut for maintenance from 2 November to 18 December 2026.', '2026-12-18']],
    },
    {
      to: 'annecy',
      tip: '운하가 흐르는 구시가와 호숫가를 걷습니다.|The canal-side old town and the lakefront.',
    },
  ],
  bern: [
    {
      to: 'interlaken',
      tip: '융프라우 지역으로 가는 관문. 하더쿨름 전망대나 호수 유람선을 즐깁니다.|Gateway to the Jungfrau region: the Harder Kulm viewpoint or a lake cruise.',
    },
    {
      to: 'lucerne',
      tip: '카펠 다리와 빈사의 사자상, 호수 유람선을 즐깁니다.|The Chapel Bridge, the Lion Monument and a lake cruise.',
    },
    {
      to: 'grindelwald',
      how: '기차로 인터라켄 경유 약 1시간 25분|About 1 hr 25 min by train via Interlaken',
      mode: 'train',
      tip: '피르스트 클리프 워크와 아이거 북벽 전망을 즐깁니다.|The First Cliff Walk and views of the Eiger north face.',
    },
    {
      to: 'zermatt',
      tip: '마터호른 전망대 고르너그라트에 오릅니다. 맑은 날 아침 일찍 출발하세요.|Ride up the Gornergrat for the Matterhorn; leave early on a clear day.',
      x: [['고르너그라트 열차는 2026년 11월 2~14일 공사로 운휴합니다.|The Gornergrat railway is shut for works from 2 to 14 November 2026.', '2026-11-14']],
    },
    {
      to: 'montreux',
      how: '기차로 로잔 경유 약 1시간 30분|About 1 hr 30 min by train via Lausanne',
      mode: 'train',
      tip: '레만 호숫가 시용 성과 산책로를 봅니다.|Chillon Castle and the lakeside promenade.',
    },
    {
      to: 'gruyeres',
      tip: '성벽 마을과 그뤼에르 성을 보고 치즈 공방에서 퐁뒤를 먹습니다. 시간이 남으면 카이에 초콜릿 공장에 들릅니다.|The walled village and castle, then fondue at the cheese dairy; add the Cailler chocolate factory if there is time.',
    },
    {
      to: 'kandersteg',
      tip: '직행 기차로 칸더슈테크에 가 곤돌라로 외시넨 호수에 오르고, 돌아오는 길에 블라우 호수에 들릅니다.|By direct train to Kandersteg for the gondola up to the Oeschinensee, stopping at the Blausee on the way back.',
    },
  ],
  lucerne: [
    {
      to: 'interlaken',
      tip: '골든패스 노선의 루체른–인터라켄 익스프레스로 브뤼니히 고개와 브리엔츠 호수를 지납니다.|The Luzern–Interlaken Express on the GoldenPass line, over the Brünig Pass and past Lake Brienz.',
    },
    {
      to: 'grindelwald',
      how: '기차로 인터라켄 경유 약 2시간 25분|About 2 hrs 25 min by train via Interlaken',
      mode: 'train',
      tip: '인터라켄에서 갈아타 피르스트 클리프 워크와 아이거 북벽 전망을 즐깁니다. 하루가 깁니다.|Change at Interlaken for the First Cliff Walk and the Eiger north face; it makes a long day.',
    },
    {
      to: 'zurich',
      tip: '구시가와 리마트 강변, 그로스뮌스터와 호숫가를 걷습니다.|The old town, the Limmat riverside, the Grossmünster and the lakefront.',
    },
    {
      to: 'bern',
      tip: '아케이드 구시가와 시계탑, 곰 공원, 아인슈타인 하우스를 봅니다.|The arcaded old town, the clock tower, the bear park and the Einstein House.',
    },
    {
      to: 'lugano',
      tip: '고트하르트 베이스 터널을 지나 이탈리아어권 호숫가 도시로 갑니다. 몬테 브레나 산살바토레 전망이 좋습니다.|Through the Gotthard Base Tunnel to the Italian-speaking lake town; great views from Monte Brè or San Salvatore.',
      x: [['산살바토레 푸니쿨라는 정상 레스토랑 공사로 2026년 11월 9일~2027년 3월 12일 운휴합니다.|The San Salvatore funicular is shut from 9 November 2026 to 12 March 2027 while the summit restaurant is rebuilt.', '2027-03-12']],
    },
  ],
  interlaken: [
    {
      to: 'grindelwald',
      tip: '피르스트 전망대와 클리프 워크, 아이거 북벽 전망을 즐깁니다.|First and its Cliff Walk, with views of the Eiger north face.',
    },
    {
      to: 'lauterbrunnen',
      tip: '기차로 라우터브루넨에 가 슈타우프바흐 폭포를 보고, 케이블카와 산악 열차로 뮈렌에 올라 절벽 위 마을을 걷습니다.|By train to Lauterbrunnen for the Staubbach Falls, then the cable car and mountain railway up to Mürren on its cliff.',
    },
  ],
  lausanne: [
    {
      to: 'montreux',
      tip: '기차로 20분. 시용 성과 호숫가 산책로를 걷습니다.|20 min by train: Chillon Castle and the lakeside promenade.',
    },
  ],
  berlin: [
    {
      to: 'potsdam',
      tip: '상수시 궁전과 정원을 봅니다. 베를린 교통권 ABC 구역으로 갈 수 있습니다.|Sanssouci Palace and park; covered by a Berlin ABC-zone ticket.',
    },
    {
      to: 'leipzig',
      tip: '바흐의 토마스 교회와 동독 시절 월요 시위의 니콜라이 교회를 봅니다.|Bach’s St Thomas Church and St Nicholas, home of the 1989 Monday protests.',
    },
    {
      to: 'dresden',
      tip: '츠빙거 궁전과 프라우엔 교회, 엘베 강변 테라스를 봅니다.|The Zwinger, the Frauenkirche and the Brühl Terrace on the Elbe.',
    },
  ],
  munich: [
    {
      to: 'fussen',
      tip: '노이슈반슈타인 성을 봅니다. 입장권은 시간 예약이 필요하고 성까지 언덕을 걸어 오릅니다.|Neuschwanstein Castle; timed tickets are needed and it is an uphill walk to the gate.',
    },
    {
      to: 'nuremberg',
      tip: '카이저부르크 성과 구시가, 전범 재판 기념관을 봅니다.|The Kaiserburg, the old town and the Nuremberg Trials memorial.',
    },
    {
      to: 'salzburg',
      tip: '모차르트 생가와 호엔잘츠부르크 성을 봅니다.|Mozart’s birthplace and Hohensalzburg Fortress.',
    },
    {
      to: 'regensburg',
      tip: '도나우강 돌다리와 대성당, 세계유산 구시가를 걷습니다. 시간이 남으면 버스로 발할라에 다녀옵니다.|The Danube stone bridge, the cathedral and the World Heritage old town; add the Walhalla by bus if there is time.',
    },
    {
      to: 'berchtesgaden',
      tip: '편도가 길지만 쾨니히스제 호수 배와 오버잘츠베르크 기록관을 묶을 수 있습니다. 아침 일찍 출발하세요.|A long ride, but you can pair the Königssee boat with the Obersalzberg Documentation Centre; leave early.',
    },
    {
      to: 'garmisch-partenkirchen',
      tip: '맑은 날 톱니바퀴 열차와 케이블카로 추크슈피체에 오르고, 내려와 파르트나흐 협곡을 걷습니다.|On a clear day, cogwheel train and cable car up the Zugspitze, then a walk through the Partnach Gorge.',
    },
  ],
  frankfurt: [
    {
      to: 'heidelberg',
      tip: '언덕 위 고성과 철학자의 길, 옛 다리를 걷습니다.|The castle ruins, the Philosophers’ Walk and the Old Bridge.',
    },
    {
      to: 'wurzburg',
      tip: '레지덴츠와 알테 마인 다리, 마리엔베르크 요새를 봅니다.|The Residenz, the Old Main Bridge and Marienberg Fortress.',
    },
    {
      to: 'rudesheim',
      tip: '케이블카로 니더발트 기념비에 오른 뒤 배로 라인 계곡을 내려가 로렐라이를 지나고, 강변 기차로 돌아옵니다. 배는 4~10월이 중심입니다.|Cable car to the Niederwald Monument, a boat down the Rhine Gorge past the Lorelei and the riverside train back; boats run mainly April–October.',
      x: [['2026년 12월 12일까지 뤼데스하임–마인츠 사이 철도 공사로 대체버스가 다녀 프랑크푸르트에서 약 1시간 30분 걸립니다.|Until 12 December 2026, works between Rüdesheim and Mainz mean replacement buses, so it takes about 1 hr 30 from Frankfurt.', '2026-12-12']],
    },
  ],
  stuttgart: [
    {
      to: 'heidelberg',
      tip: '고성과 대학 도시 구시가를 걷습니다.|The castle and the university old town.',
    },
  ],
  nuremberg: [
    {
      to: 'rothenburg',
      tip: '성벽으로 둘러싸인 중세 마을. 슈타이나흐와 안스바흐에서 갈아탑니다.|The walled medieval town; change at Steinach or Ansbach.',
    },
    {
      to: 'bamberg',
      tip: '강 위의 구 시청사와 대성당, 작은 베네치아를 걷고 슐렝케를라에서 훈제 맥주를 맛봅니다.|The town hall on the river, the cathedral and Little Venice, then smoked beer at the Schlenkerla.',
    },
    {
      to: 'wurzburg',
      tip: '레지덴츠의 계단실 천장화를 보고 알테 마인 다리에서 프랑켄 와인을 마십니다. 오후엔 마리엔베르크 요새에 오릅니다.|The Residenz staircase fresco, a glass of Franconian wine on the Old Main Bridge, then up to Marienberg Fortress.',
    },
    {
      to: 'regensburg',
      tip: '돌다리와 대성당, 탑 저택이 늘어선 구시가를 걷고 소시지 주방에서 점심을 먹습니다.|The stone bridge, the cathedral and the old town of tower houses, with lunch at the sausage kitchen.',
    },
  ],
  hamburg: [
    {
      to: 'lubeck',
      tip: '기차로 약 50분. 홀스텐 문과 벽돌 고딕 교회, 마르치판 가게를 봅니다.|About 50 min by train: the Holstentor, Brick Gothic churches and the marzipan shop.',
    },
    {
      to: 'bremen',
      tip: '기차로 약 1시간. 시청과 롤란트 상, 브레멘 음악대 동상, 슈노어 골목을 봅니다.|About 1 hr by train: the town hall and Roland, the Town Musicians statue and the Schnoor lanes.',
    },
  ],
  dresden: [
    {
      to: 'leipzig',
      tip: '토마스 교회와 니콜라이 교회를 봅니다.|St Thomas and St Nicholas churches.',
    },
    {
      to: 'hrensko',
      tip: 'S1 열차와 나룻배로 약 1시간 20분. 프라브치츠카 문과 협곡 보트를 봅니다.|About 1 hr 20 by S1 train and ferry: Pravčická brána and the gorge boats.',
    },
    {
      to: 'gorlitz',
      tip: '기차로 약 1시간 30분. 전쟁 피해가 없는 중세 구시가와 폴란드로 건너가는 다리를 봅니다.|About 1 hr 30 by train: an intact medieval old town and the bridge across to Poland.',
    },
  ],
  athens: [
    {
      to: 'sounion',
      tip: '바다 위 절벽의 포세이돈 신전에서 해 지는 풍경을 봅니다.|Sunset at the Temple of Poseidon on the sea cliff.',
    },
    {
      to: 'delphi',
      tip: '아폴론 신전과 원형 극장, 박물관을 봅니다. 편도 3시간이라 투어 버스로 다녀오는 경우가 많습니다.|The Temple of Apollo, the theatre and the museum; it is three hours each way, so many go on a tour.',
    },
    {
      to: 'nafplio',
      tip: '팔라미디 요새와 바닷가 구시가를 봅니다. 미케네·에피다우로스 유적과 묶는 투어가 많습니다.|The Palamidi fortress and the seaside old town; tours often add Mycenae and Epidaurus.',
    },
    {
      to: 'hydra',
      tip: '피레우스에서 고속선으로 가는 차 없는 섬. 항구와 선장 저택을 보고 바위 해변에서 수영합니다.|The car-free island by fast boat from Piraeus: the harbour, captains’ mansions and a swim off the rocks.',
    },
    {
      to: 'aegina',
      tip: '피레우스에서 배로 건너가 아파이아 신전과 항구 마을을 보고 섬 피스타치오를 맛봅니다.|Over by boat from Piraeus for the Temple of Aphaia and the harbour town, with the island’s pistachios.',
    },
  ],
  split: [
    {
      to: 'trogir',
      tip: '섬 위 중세 구시가와 대성당을 봅니다.|The medieval island old town and its cathedral.',
    },
    {
      to: 'hvar',
      tip: '배로 건너가 요새에 오르고 항구를 걷습니다.|Ferry over, climb to the fortress and stroll the harbour.',
    },
    {
      to: 'sibenik',
      tip: '버스로 약 1시간 30분. 돌로만 지은 대성당을 보고 크르카 폭포까지 묶으면 하루가 꽉 찹니다.|About 1 hr 30 by bus: the all-stone cathedral, and adding the Krka falls fills the day.',
    },
  ],
  dubrovnik: [
    {
      to: 'kotor',
      tip: '만 안쪽 성벽 도시를 걸어 산 위 요새에 오릅니다. 국경 심사 때문에 시간이 더 걸릴 수 있습니다.|Walk the walled town and climb to the fortress; the border can add time.',
    },
    {
      to: 'mostar',
      tip: '스타리 모스트 다리와 오스만 구시가를 봅니다. 국경을 넘으니 여권을 챙기세요.|The Stari Most bridge and the Ottoman old town; it crosses a border, so bring your passport.',
    },
    {
      to: 'korcula',
      tip: '쾌속선으로 약 2시간(봄~가을). 성벽 구시가와 대성당을 보고 돌아옵니다.|About 2 hrs by catamaran (spring to autumn): the walled old town and the cathedral.',
    },
    {
      to: 'trebinje',
      tip: '버스로 약 1시간 15분(국경 포함). 플라타너스 광장과 오스만 다리, 수도원 와인 저장고를 봅니다.|About 1 hr 15 by bus including the border: the plane-tree square, the Ottoman bridge and the monastery wine cellar.',
    },
  ],
  zadar: [
    {
      to: 'plitvice',
      tip: '계단식 호수와 폭포 사이 나무 길을 걷습니다. 입장권은 날짜와 시간대가 정해져 있고, 여름엔 현장 표가 거의 없어 미리 온라인으로 삽니다.|Boardwalks among the terraced lakes and waterfalls; tickets are for a set day and time slot, and in summer buy them online ahead as few are left at the gate.',
    },
    {
      to: 'sibenik',
      tip: '버스로 약 1시간 25분. 대성당과 요새를 보고 크르카 국립공원도 함께 다녀올 수 있습니다.|About 1 hr 25 by bus: the cathedral and fortresses, and you can add Krka National Park.',
    },
  ],
  dublin: [
    {
      to: 'kilkenny',
      tip: '킬케니 성과 중세 골목(미디벌 마일), 성 카니스 대성당을 봅니다.|Kilkenny Castle, the Medieval Mile and St Canice’s Cathedral.',
    },
  ],
  cork: [
    {
      to: 'killarney',
      tip: '킬라니 국립공원과 머크로스 저택을 봅니다.|Killarney National Park and Muckross House.',
    },
    {
      to: 'kinsale',
      tip: '버스로 약 45분. 별 모양 요새 찰스 포트와 항구 마을 골목을 봅니다.|About 45 min by bus: the star-shaped Charles Fort and the harbour lanes.',
    },
  ],
  ljubljana: [
    {
      to: 'bled',
      tip: '호수 섬의 성당까지 나룻배(플레트나)를 타고, 절벽 위 성에 오릅니다.|Row out on a pletna boat to the island church and climb to the castle.',
    },
    {
      to: 'postojna',
      tip: '동굴 열차를 타고 종유석 동굴을 보고 프레드야마 성과 묶습니다.|Ride the cave train through the caverns, then add Predjama Castle.',
    },
    {
      to: 'bohinj',
      tip: '버스로 약 2시간(블레드 경유). 블레드보다 조용한 빙하 호수와 사비차 폭포를 봅니다.|About 2 hrs by bus via Bled: a quieter glacial lake than Bled and the Savica waterfall.',
    },
  ],
  sarajevo: [
    {
      to: 'mostar',
      tip: '스타리 모스트 다리와 오스만 구시가를 봅니다. 열차 풍경이 아름답습니다.|The Stari Most bridge and the Ottoman old town; the train ride is scenic.',
    },
    {
      to: 'travnik',
      tip: '오스만 시대 요새와 색칠한 모스크를 봅니다.|The Ottoman fortress and the painted mosque.',
    },
  ],
  kotor: [
    {
      to: 'budva',
      tip: '성벽 구시가와 해변을 즐깁니다.|The walled old town and the beaches.',
    },
    {
      to: 'herceg-novi',
      tip: '계단 골목과 요새가 있는 만 입구의 마을입니다.|Stepped lanes and fortresses at the mouth of the bay.',
    },
    {
      to: 'perast',
      tip: '버스로 약 25분. 바로크 해안 마을과 바위의 성모 섬을 봅니다.|About 25 min by bus: the Baroque waterfront village and Our Lady of the Rocks.',
    },
  ],
  belgrade: [
    {
      to: 'novi-sad',
      tip: '페트로바라딘 요새와 구시가를 봅니다. 고속열차로 36분입니다.|Petrovaradin Fortress and the old town; 36 min by fast train.',
    },
  ],
  'novi-sad': [
    {
      to: 'subotica',
      tip: '헝가리풍 아르누보 시청과 시나고그를 봅니다.|The Hungarian Art Nouveau town hall and synagogue.',
    },
    {
      to: 'sremski-karlovci',
      tip: '버스로 약 30분. 바로크 광장과 대성당, 베르멧 와인 저장고를 봅니다.|About 30 min by bus: the Baroque square, the cathedral and the Bermet wine cellars.',
    },
  ],
  skopje: [
    {
      to: 'tetovo',
      tip: '색칠한 모스크와 아라바티 데르비시 수도원을 봅니다.|The Painted Mosque and the Arabati Baba Tekke.',
    },
  ],
  ohrid: [
    {
      to: 'bitola',
      tip: '시로크 소카크 거리와 헤라클레아 유적을 봅니다.|Širok Sokak street and the ruins of Heraclea Lyncestis.',
    },
  ],
  limassol: [
    {
      to: 'paphos',
      tip: '고대 모자이크 유적과 왕들의 무덤을 봅니다.|The ancient mosaics and the Tombs of the Kings.',
    },
  ],
  sarande: [
    {
      to: 'gjirokaster',
      tip: '돌지붕 집의 오스만 도시와 성채를 봅니다.|The stone-roofed Ottoman town and its castle.',
    },
    {
      to: 'corfu',
      tip: '배로 건너가 코르푸 구시가와 요새를 봅니다. 여권이 필요합니다.|Ferry over for Corfu’s old town and fortresses; bring your passport.',
    },
  ],
  valletta: [
    {
      to: 'mdina',
      tip: '고요한 성벽 도시와 성채 전망을 봅니다. 라바트 지하 묘지와 묶습니다.|The silent walled city and its bastion views; pair with the Rabat catacombs.',
    },
    {
      to: 'gozo',
      tip: '배로 건너가 치타델라와 해안 절벽을 봅니다.|Ferry over for the Citadella and the coastal cliffs.',
    },
  ],
  tallinn: [
    {
      to: 'helsinki',
      tip: '배로 건너가 대성당과 시장 광장, 수오멘린나 요새를 봅니다.|Ferry over for the cathedral, Market Square and Suomenlinna.',
    },
    {
      to: 'tartu',
      tip: '대학 도시 구시가와 에스토니아 국립 박물관을 봅니다.|The university old town and the Estonian National Museum.',
    },
  ],
  riga: [
    {
      to: 'jurmala',
      tip: '긴 모래 해변과 나무 별장 거리를 걷습니다.|The long sandy beach and streets of wooden villas.',
    },
    {
      to: 'sigulda',
      tip: '가우야 국립공원과 투라이다 성을 봅니다.|Gauja National Park and Turaida Castle.',
    },
  ],
  vilnius: [
    {
      to: 'kaunas',
      tip: '구시가와 성, 전간기 모더니즘 건축을 봅니다. 트라카이 성은 빌뉴스에서 따로 가깝습니다.|The old town, the castle and interwar modernist buildings.',
    },
  ],
  nicosia: [
    {
      to: 'limassol',
      tip: '바닷가 구시가와 성, 해안 산책로를 걷습니다.|The seaside old town, the castle and the promenade.',
    },
  ],
  chisinau: [
    {
      to: 'orheiul-vechi',
      tip: '절벽 동굴 수도원과 강이 굽이치는 계곡을 봅니다.|The cliff cave monastery above the river bend.',
    },
  ],
  tbilisi: [
    {
      to: 'sighnaghi',
      tip: '카헤티 와인 지방의 언덕 마을과 성벽을 봅니다.|The hilltop wine town and walls of Kakheti.',
    },
  ],
  yerevan: [
    {
      to: 'dilijan',
      tip: '숲속 마을과 하가르친·고샤방크 수도원을 봅니다.|The forest town and the Haghartsin and Goshavank monasteries.',
    },
    {
      to: 'gyumri',
      tip: '검은 응회암 건물이 늘어선 옛 시가지를 봅니다.|The old quarter of black tuff-stone buildings.',
    },
  ],
  'north-nicosia': [
    {
      to: 'famagusta',
      tip: '베네치아 성벽과 대성당 모스크를 봅니다.|The Venetian walls and the cathedral-mosque.',
    },
  ],
  salzburg: [
    {
      to: 'hallstatt',
      tip: '호숫가 마을과 소금 광산, 스카이워크 전망대를 봅니다. 버스는 바트이슐에서 갈아타기도 합니다.|The lakeside village, the salt mine and the Skywalk; buses may change at Bad Ischl.',
    },
    {
      to: 'berchtesgaden',
      tip: '840번 버스로 국경을 넘어 쾨니히스제 호수 배를 타고 성 바르톨로메 성당까지 갑니다. 켈슈타인하우스는 2026년 10월 화재로 소실돼 갈 수 없습니다.|Bus 840 across the border to the Königssee and a boat to St Bartholomä; the Kehlsteinhaus burned down in October 2026 and cannot be visited.',
    },
    {
      to: 'linz',
      tip: '중앙 광장과 강변 미술관을 보고 푀스틀링베르크에 오릅니다. 마우트하우젠 추모관을 함께 보면 하루가 꽉 찹니다.|The Hauptplatz, the riverside museums and the Pöstlingberg; adding the Mauthausen Memorial fills the day.',
    },
    {
      to: 'bad-ischl',
      tip: '150번 버스로 볼프강 호수를 지나 황제 별장과 강변 산책로를 보고 옛 제과점에서 케이크를 먹습니다.|Bus 150 past the Wolfgangsee to the Kaiservilla and the riverside promenade, with cake at an old pastry shop.',
    },
    {
      to: 'werfen',
      tip: '오전에 얼음 동굴에 오르고 오후에 호엔베르펜 성의 맹금류 시범을 봅니다. 동굴은 5~10월에만 엽니다.|The ice cave in the morning and the birds-of-prey show at Hohenwerfen in the afternoon; the cave opens May–October only.',
    },
    {
      to: 'zell-am-see',
      tip: '기차로 첼암제에 가 슈미텐회헤 곤돌라에 오르고 호숫가를 걷습니다. 하루 더 있으면 카프룬 빙하나 고산 댐까지 갑니다.|By train to Zell am See for the Schmittenhöhe gondola and the lakeside; with another day, add the Kaprun glacier or reservoirs.',
    },
  ],
  bath: [
    {
      to: 'salisbury',
      tip: '대성당의 마그나 카르타를 보고 버스로 스톤헨지에 다녀옵니다.|Magna Carta in the cathedral, then the bus to Stonehenge.',
    },
    {
      to: 'cardiff',
      how: '기차로 브리스틀 경유 약 1시간|About 1 hr by train via Bristol',
      mode: 'train',
      tip: '카디프 성과 바닷가 카디프 베이를 봅니다.|Cardiff Castle and the waterfront at Cardiff Bay.',
    },
  ],
  oxford: [
    {
      to: 'cotswolds',
      tip: '꿀빛 돌집 마을들. 모턴인마시까지 기차, 마을 사이는 버스나 투어로 다닙니다.|Honey-stone villages; train to Moreton-in-Marsh, then buses or a tour between villages.',
    },
  ],
  york: [
    {
      to: 'manchester',
      tip: '과학산업 박물관과 축구장 투어를 즐깁니다.|The Science and Industry Museum and a football stadium tour.',
    },
    {
      to: 'whitby',
      tip: '노스요크무어스를 넘는 버스로 바닷가에 가서 절벽 위 수도원과 항구를 보고 피시 앤 칩스를 먹습니다.|A bus over the North York Moors to the coast for the clifftop abbey, the harbour and fish and chips.',
    },
    {
      to: 'durham',
      tip: '기차로 약 45분. 언덕 위 노르만 대성당과 성, 위어강 강변 산책로를 봅니다.|About 45 min by train: the hilltop Norman cathedral and castle and the River Wear paths.',
    },
  ],
  'the-hague': [
    {
      to: 'delft',
      tip: '기차로 10분이 안 걸리고, 트램 1번으로도 갑니다. 델프트 도자기와 페르메이르의 도시를 걷습니다.|Under 10 min by train, or take tram 1: Delftware and Vermeer’s town.',
    },
    {
      to: 'rotterdam',
      tip: '큐브 하우스와 마르크탈, 에라스뮈스 다리를 봅니다.|The Cube Houses, the Markthal and the Erasmus Bridge.',
    },
    {
      to: 'leiden',
      tip: '기차로 약 11분. 렘브란트의 도시에서 운하와 박물관을 봅니다.|11 min by train: Rembrandt’s town of canals and museums.',
    },
  ],
  utrecht: [
    {
      to: 'maastricht',
      tip: '성 세르바티우스 성당과 서점이 된 도미니크 성당을 봅니다.|St Servatius and the Dominican church turned bookshop.',
    },
  ],
  ghent: [
    {
      to: 'bruges',
      tip: '운하와 종탑, 마르크트 광장을 봅니다.|The canals, the Belfry and the Markt.',
    },
  ],
  antwerp: [
    {
      to: 'ghent',
      tip: '반 에이크의 제단화와 그라슬레이 강변을 봅니다.|Van Eyck’s altarpiece and the Graslei quays.',
    },
    {
      to: 'mechelen',
      tip: '기차로 약 17분. 대성당 탑과 흐로테 마르크트, 헷 앙커르 양조장을 봅니다.|17 min by train: the cathedral tower, the Grote Markt and the Het Anker brewery.',
    },
  ],
  aarhus: [
    {
      to: 'aalborg',
      tip: '구시가와 바이킹 묘지 린홀름 회예를 봅니다.|The old town and the Viking burial ground at Lindholm Høje.',
    },
  ],
  innsbruck: [
    {
      to: 'salzburg',
      tip: '모차르트 생가와 호엔잘츠부르크 성을 봅니다.|Mozart’s birthplace and Hohensalzburg Fortress.',
    },
    {
      to: 'bolzano',
      tip: '브렌네르 고개를 넘어 이탈리아로. 아이스맨 외치 박물관을 봅니다.|Over the Brenner Pass to Italy for the Ötzi Iceman museum.',
    },
    {
      to: 'garmisch-partenkirchen',
      tip: '미텐발트선 산악 철도로 국경을 넘어 추크슈피체나 파르트나흐 협곡에 갑니다.|Over the border on the Mittenwald Railway for the Zugspitze or the Partnach Gorge.',
    },
    {
      to: 'kitzbuhel',
      tip: '구시가를 걷고 하넨캄 곤돌라로 슈트라이프 출발점까지 올라갑니다.|The old town, then the Hahnenkamm gondola up to the start of the Streif.',
    },
  ],
  graz: [
    {
      to: 'maribor',
      tip: '드라바 강변 구시가와 세계에서 가장 오래된 포도나무를 봅니다.|The Drava riverside old town and the world’s oldest vine.',
    },
    {
      to: 'klagenfurt',
      tip: '새 코랄름 철도로 클라겐푸르트에 가 용 분수와 문장의 방을 보고 뵈르터 호숫가를 걷습니다.|Take the new Koralm line to Klagenfurt for the dragon fountain and the Hall of Arms, then a walk by the Wörthersee.',
    },
  ],
  brno: [
    {
      to: 'bratislava',
      tip: '성과 구시가를 반나절에 봅니다.|The castle and old town in half a day.',
    },
    {
      to: 'telc',
      tip: '르네상스 집들이 늘어선 광장과 성, 연못 산책로를 봅니다.|The square of Renaissance houses, the castle and the pond walk.',
    },
    {
      to: 'mikulov',
      tip: '성과 성스러운 언덕에 오르고 와인 저장고에서 모라비아 와인을 맛봅니다.|The castle and the Holy Hill, then Moravian wine in a cellar.',
    },
    {
      to: 'olomouc',
      tip: '기차로 약 1시간 15분. 성삼위일체 기념주와 바로크 분수, 대성당을 봅니다.|About 1 hr 15 by train: the Holy Trinity Column, the Baroque fountains and the cathedral.',
    },
    {
      to: 'znojmo',
      tip: '버스로 약 1시간 35분. 디이강 협곡 위 구시가와 지하 미로, 와인 저장고를 봅니다.|About 1 hr 35 by bus: the old town above the Dyje gorge, its underground and wine cellars.',
    },
  ],
  bratislava: [
    {
      to: 'vienna',
      tip: '쇤브룬 궁전과 슈테판 대성당을 봅니다.|Schönbrunn Palace and St Stephen’s Cathedral.',
    },
    {
      to: 'trencin',
      tip: '바위 위 트렌친 성과 구시가를 봅니다.|Trenčín Castle on its rock and the old town.',
    },
    {
      to: 'nitra',
      tip: '버스로 약 1시간 15분. 언덕 위 성과 대성당을 보고 구시가를 걷습니다.|About 1 hr 15 by bus: the hilltop castle and cathedral, then the old town.',
    },
  ],
  strasbourg: [
    {
      to: 'basel',
      tip: '라인강 구시가와 바이엘러 재단 미술관을 봅니다.|The Rhine old town and the Fondation Beyeler.',
    },
    {
      to: 'colmar',
      tip: '쁘띠트 베니스 운하와 운터린덴 미술관을 보고, 버스로 에기스하임이나 리크비르 같은 와인 마을에 들릅니다. 미술관은 화요일 휴관입니다.|The Petite Venise canals and the Unterlinden Museum, then a bus to a wine village such as Eguisheim or Riquewihr; the museum is closed on Tuesdays.',
    },
    {
      to: 'nancy',
      tip: '기차로 약 1시간 25분. 스타니슬라스 광장과 아르누보 박물관을 봅니다.|About 1 hr 25 by train: Place Stanislas and the Art Nouveau museum.',
    },
  ],
  basel: [
    {
      to: 'strasbourg',
      tip: '쁘띠 프랑스와 대성당, 유람선을 즐깁니다.|Petite France, the cathedral and a canal boat.',
    },
    {
      to: 'colmar',
      tip: '국경을 넘어 쁘띠트 베니스 운하와 운터린덴 미술관을 봅니다. 미술관은 화요일 휴관입니다.|Across the border for the Petite Venise canals and the Unterlinden Museum; the museum is closed on Tuesdays.',
    },
    {
      to: 'freiburg',
      tip: '기차로 약 40분. 고딕 대성당과 베힐레 물길, 대성당 광장 시장을 봅니다.|About 40 min by train: the Gothic minster, the Bächle channels and the minster market.',
    },
  ],
  heidelberg: [
    {
      to: 'stuttgart',
      tip: '메르세데스-벤츠와 포르쉐 박물관을 봅니다.|The Mercedes-Benz and Porsche museums.',
    },
  ],
  cologne: [
    {
      to: 'frankfurt',
      tip: '뢰머 광장과 박물관 강변을 봅니다.|The Römerberg and the Museum Embankment.',
    },
    {
      to: 'cochem',
      tip: '모젤 강변 마을과 라이히스부르크 성을 봅니다. 엘츠 성까지 보려면 모젤케른역에서 숲길을 걸어 하루가 꽉 찹니다.|The Moselle town and the Reichsburg; adding Eltz Castle, a forest walk from Moselkern, fills the day.',
    },
    {
      to: 'aachen',
      tip: '기차로 약 55분. 샤를마뉴의 대성당과 시청, 온천 분수를 봅니다.|About 55 min by train: Charlemagne’s cathedral, the town hall and the thermal fountain.',
    },
  ],
  gdansk: [
    {
      to: 'malbork',
      tip: '기차로 약 30분. 세계 최대의 벽돌 성인 튜턴 기사단의 말보르크 성을 봅니다.|About 30 min by train: Malbork, the Teutonic Knights’ castle and the world’s largest brick castle.',
    },
  ],
  krakow: [
    {
      to: 'zakopane',
      tip: '타트라산 아래 산악 마을. 구바우프카 언덕 케이블카와 나무 건축을 봅니다.|The mountain town under the Tatras: the Gubałówka funicular and wooden architecture.',
    },
    {
      to: 'czestochowa',
      tip: '기차로 약 1시간 35분. 야스나 구라 수도원의 검은 성모를 봅니다.|About 1 hr 35 by train: the Black Madonna at Jasna Góra.',
    },
  ],
  warsaw: [
    {
      to: 'krakow',
      tip: '고속열차로 약 2시간 20분. 중앙 광장과 바벨 성을 봅니다.|About 2 hrs 20 min by fast train: the Main Square and Wawel Castle.',
    },
    {
      to: 'lublin',
      tip: '기차로 약 1시간 50분. 언덕 위 구시가와 성 삼위일체 예배당의 프레스코를 봅니다(월요일 휴관).|About 1 hr 50 by train: the hilltop old town and the frescoes of the Holy Trinity Chapel (closed Mondays).',
    },
    {
      to: 'lodz',
      tip: '기차로 약 1시간 15분. 표트르코프스카 거리와 옛 방직 공장 마누팍투라를 봅니다.|About 1 hr 15 by train: Piotrkowska Street and the old Manufaktura mills.',
    },
  ],
  zagreb: [
    {
      to: 'plitvice',
      tip: '계단식 호수와 폭포의 국립공원. 입장권은 날짜와 시간대가 정해져 있고, 여름엔 현장 표가 거의 없어 미리 온라인으로 삽니다.|The terraced lakes and waterfalls; tickets are for a set day and time slot, and in summer buy them online ahead as few are left at the gate.',
    },
    {
      to: 'ljubljana',
      tip: '류블랴나성과 트로모스토비예 다리, 용의 다리를 봅니다.|Ljubljana Castle, the Triple Bridge and the Dragon Bridge.',
    },
  ],
  sofia: [
    {
      to: 'plovdiv',
      tip: '로마 원형극장과 부흥기 가옥이 있는 구시가를 봅니다.|The Roman theatre and the Revival-era houses of the old town.',
    },
  ],
  bucharest: [
    {
      to: 'brasov',
      tip: '검은 교회와 구시가를 보고, 브란 성(드라큘라 성)을 버스로 묶습니다.|The Black Church and old town, plus a bus to Bran Castle.',
    },
  ],
  sibiu: [
    {
      to: 'sighisoara',
      tip: '탑이 늘어선 성채 마을과 드라큘라 생가를 봅니다.|The towered citadel town and Vlad the Impaler’s birthplace.',
    },
  ],
  istanbul: [
    {
      to: 'bursa',
      tip: '배로 마르마라해를 건너 녹색 모스크와 울루 자미, 이스켄데르 케밥을 즐깁니다.|Ferry across the Sea of Marmara for the Green Mosque, the Grand Mosque and İskender kebab.',
    },
  ],
  reykjavik: [
    {
      to: 'selfoss',
      tip: '골든 서클과 남부 해안으로 가는 길목. 셀야란드스포스 폭포와 묶는 투어가 많습니다.|Gateway to the Golden Circle and south coast; tours often add Seljalandsfoss.',
    },
  ],
  tirana: [
    {
      to: 'berat',
      tip: '천 개의 창 도시. 언덕 위 성채 안 마을과 오누프리 박물관을 봅니다.|The town of a thousand windows, the citadel village and the Onufri Museum.',
    },
  ],
  pristina: [
    {
      to: 'prizren',
      tip: '오스만 다리와 시난 파샤 모스크, 언덕 위 요새를 봅니다.|The Ottoman bridge, the Sinan Pasha Mosque and the hilltop fortress.',
    },
  ],
  poprad: [
    {
      to: 'levoca',
      tip: '기차와 버스로 약 50분. 세계에서 가장 높은 고딕 목조 제단을 보고 스피시 성까지 묶으면 하루가 꽉 찹니다.|About 50 min by train and bus: the world’s tallest Gothic altar, and adding Spiš Castle fills the day.',
    },
  ],
  kosice: [
    {
      to: 'poprad',
      tip: '높은 타트라산으로 가는 관문. 스트르브스케 플레소 호수까지 산악 전차로 갑니다.|Gateway to the High Tatras; ride the mountain tram to Štrbské Pleso.',
    },
    {
      to: 'bardejov',
      tip: '버스로 약 1시간 15분. 유네스코 시청 광장과 고딕 제단들을 보고 목조 성당까지 둘러봅니다.|About 1 hr 15 by bus: the UNESCO-listed square, the Gothic altars and a wooden church.',
    },
    {
      to: 'levoca',
      tip: '약 1시간 30분. 파볼 장인의 제단과 스피시 성을 묶어 다녀옵니다.|About 1 hr 30: Master Paul’s altar and Spiš Castle.',
    },
  ],
  'san-sebastian': [
    {
      to: 'biarritz',
      tip: '프랑스 바스크 해안의 등대와 바위섬, 서핑 해변을 봅니다.|The lighthouse, the Rocher de la Vierge and the surf beaches of the French Basque coast.',
    },
    {
      to: 'pamplona',
      tip: '버스로 약 1시간 20분. 구시가 성벽과 엔시에로 길을 걷고 카페 이루냐에 들릅니다.|About 1 hr 20 by bus: the walls, the bull-run route and Café Iruña.',
    },
  ],
  cordoba: [
    {
      to: 'seville',
      tip: '기차로 45분. 대성당·히랄다 탑과 알카사르를 봅니다.|45 min by train: the cathedral, the Giralda and the Alcázar.',
    },
  ],
  galway: [
    {
      to: 'limerick',
      tip: '킹 존 성과 강변을 보고, 모허 절벽 투어와 묶기도 합니다.|King John’s Castle and the riverside; often combined with a Cliffs of Moher tour.',
    },
    {
      to: 'doolin',
      tip: '버스로 약 2시간 15분이라 투어가 편합니다. 모허 절벽과 버렌, 둘린 마을을 봅니다.|About 2 hr 15 by bus, so a tour is easier: the Cliffs of Moher, the Burren and Doolin village.',
    },
  ],
  'st-helier': [
    {
      to: 'st-peter-port',
      tip: '배로 건너가 코닛 성과 빅토르 위고의 집을 봅니다.|Ferry over for Castle Cornet and Victor Hugo’s house.',
    },
  ],
  'st-peter-port': [
    {
      to: 'sark',
      tip: '차 없는 섬. 자전거나 마차로 섬을 돌고 라 쿠페 둑길을 봅니다.|The car-free island: tour by bike or carriage and see La Coupée.',
    },
  ],
  douglas: [
    {
      to: 'castletown',
      tip: '옛 수도의 러셴 성을 봅니다. 증기 기관차(3월 중순~11월 초 운행)로 가면 더 좋습니다.|Castle Rushen in the old capital; even better by the steam railway (mid-March to early November).',
    },
    {
      to: 'peel',
      tip: '바닷가 필 성과 일몰, 훈제 청어를 즐깁니다.|Peel Castle by the sea, the sunset and kippers.',
    },
  ],
  'andorra-la-vella': [
    {
      to: 'ordino',
      tip: '돌집 마을과 산길 산책을 즐깁니다.|The stone village and mountain walks.',
    },
  ],
}
