// Scenic and mountain railways near the app's cities, checked against operator and tourist-board pages in 2026-10.
// `season` is only given where the operator runs part of the year; dates are for 2026.
import type { ScenicTrain } from '../types'

export const SCENIC_TRAINS: ScenicTrain[] = [
  // —— Switzerland ——
  {
    id: 'glacier-express',
    name: '빙하특급|Glacier Express',
    cities: ['zermatt', 'st-moritz'],
    route: '체르마트–생모리츠, 약 8시간. 알프스를 가로지르는 파노라마 열차입니다.|Zermatt–St. Moritz, about 8 hours across the Alps in panorama cars.',
    resv: true,
    url: 'https://www.glacierexpress.ch/en/',
  },
  {
    id: 'bernina-express',
    name: '베르니나 특급|Bernina Express',
    cities: ['st-moritz', 'lugano'],
    alsoIn: ['it'],
    route: '쿠어·생모리츠–티라노(이탈리아). 유네스코 세계유산 베르니나선을 지나고, 티라노–루가노는 전용 버스로 잇습니다.|Chur/St. Moritz–Tirano (Italy) over the UNESCO-listed Bernina line; a dedicated bus links Tirano and Lugano.',
    resv: true,
    url: 'https://www.rhb.ch/en/panoramic-journeys/bernina-express/',
  },
  {
    id: 'goldenpass-express',
    name: '골든패스 익스프레스|GoldenPass Express',
    cities: ['montreux', 'interlaken'],
    route: '몽트뢰–인터라켄, 호수와 알프스 목초지를 지나는 파노라마 열차입니다.|Montreux–Interlaken past lakes and Alpine pastures.',
    resv: false,
    url: 'https://mob.ch/en/',
  },
  {
    id: 'gotthard-panorama',
    name: '고트하르트 파노라마 익스프레스|Gotthard Panorama Express',
    cities: ['lucerne', 'lugano'],
    route: '루체른–루가노. 루체른 호수 유람선과 옛 고트하르트선 열차를 이어 탑니다.|Lucerne–Lugano: a lake steamer, then a train over the old Gotthard line.',
    season: '4월 중순~10월 중순|Mid-April to mid-October',
    resv: true,
    url: 'https://www.gotthard-panorama-express.ch/en/',
  },
  {
    id: 'jungfraubahn',
    name: '융프라우 철도|Jungfraubahn',
    cities: ['interlaken', 'grindelwald'],
    route: '클라이네 샤이데크에서 해발 3,454m 융프라우요흐까지 오르는 톱니 열차입니다.|Cog railway from Kleine Scheidegg to the Jungfraujoch at 3,454 m.',
    resv: false,
    url: 'https://www.jungfrau.ch/en-gb/',
  },
  {
    id: 'gornergrat',
    name: '고르너그라트 철도|Gornergrat Bahn',
    cities: ['zermatt'],
    route: '체르마트에서 마터호른 전망대 고르너그라트(3,089m)까지 오르는 톱니 열차입니다.|Cog railway from Zermatt to the Gornergrat (3,089 m) facing the Matterhorn.',
    resv: false,
    url: 'https://www.gornergrat.ch/en/',
  },
  {
    id: 'pilatus',
    name: '필라투스 철도|Pilatus Bahn',
    cities: ['lucerne'],
    route: '알프나흐슈타트에서 필라투스 정상까지, 세계에서 가장 가파른 톱니 열차입니다.|From Alpnachstad to Pilatus Kulm on the world’s steepest cog railway.',
    season: '5월 11일~11월 29일 (겨울에는 크리엔스 곤돌라만)|11 May–29 November (gondola from Kriens only in winter)',
    resv: false,
    url: 'https://www.pilatus.ch/en/',
  },
  {
    id: 'rigi',
    name: '리기 철도|Rigi Bahnen',
    cities: ['lucerne'],
    route: '비츠나우·골다우에서 리기 쿨름까지 오르는 유럽 최초의 산악 톱니 열차입니다.|Europe’s first mountain cog railway, from Vitznau or Goldau to Rigi Kulm.',
    resv: false,
    url: 'https://www.rigi.ch/en/',
  },
  {
    id: 'brienz-rothorn',
    name: '브리엔츠 로트호른 철도|Brienz Rothorn Bahn',
    cities: ['interlaken'],
    route: '브리엔츠에서 로트호른 정상까지 증기 톱니 열차로 오릅니다.|Steam cog railway from Brienz to the Rothorn summit.',
    season: '6월 6일~10월 25일|6 June–25 October',
    resv: false,
    url: 'https://www.brienz-rothorn-bahn.ch/en/',
  },
  // —— Austria ——
  {
    id: 'semmering',
    name: '젬머링 철도|Semmeringbahn',
    cities: ['vienna', 'graz'],
    route: '빈–그라츠 사이 젬머링 고개를 넘는 1854년 개통 산악 철도로, 유네스코 세계유산입니다. 일반 열차로 탑니다.|The 1854 mountain line over the Semmering Pass between Vienna and Graz, a UNESCO World Heritage Site, ridden on regular trains.',
    resv: false,
    url: 'https://www.oebb.at/en/',
  },
  {
    id: 'schafbergbahn',
    name: '샤프베르크 철도|SchafbergBahn',
    cities: ['salzburg', 'hallstatt'],
    route: '볼프강호수 장크트볼프강에서 샤프베르크 정상까지 오르는 톱니 열차입니다.|Cog railway from St. Wolfgang on the Wolfgangsee to the Schafberg summit.',
    season: '4월 25일~11월 1일|25 April–1 November',
    resv: false,
    url: 'https://www.5schaetze.at/en/schafbergbahn.html',
  },
  // —— Norway, Sweden ——
  {
    id: 'flamsbana',
    name: '플롬 철도|Flåmsbana',
    cities: ['flam', 'bergen', 'oslo'],
    route: '뮈르달–플롬, 피오르 계곡으로 내려가는 가파른 산악 철도입니다. 오슬로–베르겐선 뮈르달역에서 갈아탑니다.|Myrdal–Flåm, a steep descent into a fjord valley; change at Myrdal on the Oslo–Bergen line.',
    resv: false,
    url: 'https://www.norwaysbest.com/en/flamsbana/',
  },
  {
    id: 'bergensbanen',
    name: '베르겐선|Bergensbanen',
    cities: ['oslo', 'bergen'],
    route: '오슬로–베르겐, 하르당에르비다 고원을 넘는 북유럽에서 가장 높은 간선 철도입니다.|Oslo–Bergen across the Hardangervidda plateau, northern Europe’s highest main line.',
    resv: false,
    url: 'https://www.vy.no/en',
  },
  {
    id: 'ofotbanen',
    name: '오포트선|Ofotbanen',
    cities: ['kiruna'],
    alsoIn: ['no'],
    route: '키루나–나르비크(노르웨이), 산과 피오르를 따라가는 국경 철도입니다.|Kiruna–Narvik (Norway), a border line through mountains to the fjord.',
    resv: false,
    url: 'https://www.sj.se/en',
  },
  // —— France ——
  {
    id: 'montenvers',
    name: '몽탕베르 열차|Train du Montenvers',
    cities: ['chamonix'],
    route: '샤모니에서 빙하 메르 드 글라스 전망대까지 오르는 톱니 열차입니다.|Cog railway from Chamonix up to the Mer de Glace glacier.',
    resv: false,
    url: 'https://www.montblancnaturalresort.com/en/montenvers-mer-de-glace',
  },
  {
    id: 'tramway-mont-blanc',
    name: '몽블랑 트램웨이|Tramway du Mont-Blanc',
    cities: ['chamonix'],
    route: '생제르베·르파예에서 몽블랑 등반로 니 데글까지 오르는 프랑스 최고 높이 톱니 열차입니다.|France’s highest cog railway, from Saint-Gervais/Le Fayet up to the Nid d’Aigle on the Mont Blanc route.',
    season: '여름·겨울 시즌 운행 (겨울에는 중간역까지)|Summer and winter seasons (winter to the mid-station only)',
    resv: false,
    url: 'https://www.montblancnaturalresort.com/en/',
  },
  // —— UK, Isle of Man ——
  {
    id: 'west-highland',
    name: '웨스트 하이랜드선|West Highland Line',
    cities: ['glasgow'],
    route: '글래스고–포트윌리엄–말레이그, 호수와 황무지를 지나는 영국 최고의 경치 노선입니다. 여름에는 포트윌리엄에서 증기기관차 자코바이트가 다닙니다.|Glasgow–Fort William–Mallaig across lochs and moorland; in summer the Jacobite steam train runs from Fort William.',
    resv: false,
    url: 'https://www.scotrail.co.uk/',
  },
  {
    id: 'jacobite',
    name: '자코바이트 증기기관차|The Jacobite',
    cities: ['edinburgh', 'glasgow'],
    aliases: ['해리포터', '호그와트', '호그와트 급행', 'Harry Potter', 'Hogwarts Express', '글렌피넌', 'Glenfinnan'],
    route: '포트윌리엄–말레이그 왕복 84마일. 영화 해리포터의 호그와트 급행이 지나던 글렌피넌 고가교를 건너는 증기기관차입니다. 에든버러·글래스고에서는 출발하지 않고, 글래스고에서 웨스트 하이랜드선으로 포트윌리엄까지 약 3시간 50분 걸립니다(에든버러에서는 글래스고를 거쳐 약 5시간).|Fort William–Mallaig and back, 84 miles, by steam over the Glenfinnan Viaduct seen as the Hogwarts Express route in the Harry Potter films. It does not start in Edinburgh or Glasgow: Fort William is about 3 h 50 from Glasgow on the West Highland Line (about 5 h from Edinburgh via Glasgow).',
    season: '오전 편 6월 1일~10월 23일, 오후 편 6월 10일~9월 25일 (매일)|Morning train 1 June–23 October, afternoon train 10 June–25 September (daily)',
    resv: true,
    price:
      '왕복 일반석 어른 £76·어린이 £43, 1등석 어른 £116·어린이 £76 (편도 없음, 예약 수수료 £3.75~)|Return only: Standard adult £76, child £43; First adult £116, child £76 (booking fee from £3.75)',
    url: 'https://westcoastrailways.co.uk/jacobite/',
  },
  {
    id: 'kyle-line',
    name: '카일선|Kyle Line',
    cities: ['inverness', 'isle-of-skye'],
    route: '인버네스–카일 오브 로할시, 하이랜드를 가로질러 스카이섬 다리 앞까지 갑니다.|Inverness–Kyle of Lochalsh across the Highlands to the bridge to Skye.',
    resv: false,
    url: 'https://www.scotrail.co.uk/',
  },
  {
    id: 'snowdon',
    name: '스노든 산악 철도|Snowdon Mountain Railway',
    cities: ['snowdonia'],
    route: '란베리스에서 웨일스 최고봉 스노든 정상까지 오르는 톱니 열차입니다.|Cog railway from Llanberis to the summit of Snowdon, the highest peak in Wales.',
    season: '3월 중순~10월 말 (날씨에 따라)|Mid-March to late October, weather permitting',
    resv: true,
    url: 'https://snowdonrailway.co.uk/',
  },
  {
    id: 'snaefell',
    name: '스나펠 산악 철도|Snaefell Mountain Railway',
    cities: ['douglas'],
    route: '락시에서 섬 최고봉 스나펠까지 오르는 1895년 전기 산악 철도입니다. 더글러스에서 맨섬 전기철도로 갑니다.|The 1895 electric mountain line from Laxey to the island’s highest peak, reached from Douglas on the Manx Electric Railway.',
    season: '봄~가을|Spring to autumn',
    resv: false,
    url: 'https://www.iombusandrail.im/',
  },
  // —— Italy, Spain, Portugal ——
  {
    id: 'cinque-terre-express',
    name: '친퀘테레 익스프레스|Cinque Terre Express',
    cities: ['cinque-terre'],
    route: '레반토–라스페치아 사이 다섯 마을을 잇는 해안 열차로, 마을 사이 이동의 기본 수단입니다.|The coastal shuttle linking the five villages between Levanto and La Spezia.',
    resv: false,
    url: 'https://www.trenitalia.com/en.html',
  },
  {
    id: 'soller',
    name: '소예르 열차|Tren de Sóller',
    cities: ['palma'],
    route: '팔마–소예르 27km를 1912년 개통 목조 전동차로 달리고, 소예르에서 항구까지 트램이 이어집니다.|Wooden 1912 electric trains over 27 km from Palma to Sóller, with a tram on to the port.',
    resv: false,
    url: 'https://trendesoller.com/',
  },
  {
    id: 'montserrat-rack',
    name: '몬세라트 톱니 열차|Cremallera de Montserrat',
    cities: ['montserrat', 'barcelona'],
    route: '모니스트롤 데 몬세라트에서 수도원까지 오르는 톱니 열차입니다. 바르셀로나에서 R5 열차로 갑니다.|Rack railway from Monistrol de Montserrat up to the monastery, reached from Barcelona on the R5 line.',
    resv: false,
    url: 'https://www.cremallerademontserrat.cat/en/',
  },
  {
    id: 'douro-line',
    name: '도루선|Linha do Douro',
    cities: ['porto'],
    route: '포르투–피냥–포시뉴, 포도밭 계곡 도루강을 따라가는 일반 열차 노선입니다.|Porto–Pinhão–Pocinho on regular trains along the vineyard-lined Douro valley.',
    resv: false,
    url: 'https://www.cp.pt/passageiros/en',
  },
  // —— Cross-border ——
  {
    id: 'vsoe-amalfi',
    name: '오리엔트 익스프레스 파리–아말피 해안|Venice Simplon-Orient-Express: Paris to the Amalfi Coast',
    cities: ['paris', 'pompeii', 'amalfi'],
    aliases: ['오리엔트 익스프레스', 'Orient Express', '벨몬드', 'Belmond'],
    route: '파리에서 1920~30년대 객차로 하룻밤을 달려 폼페이에 들른 뒤 라벨로 호텔 카루소에서 2박하는 3박 4일 호화 열차 여행입니다. 해마다 한 번 정도 출발하는 패키지 상품으로 식사·관광이 포함됩니다.|A three-night luxury trip: one night in 1920s–30s carriages from Paris, a stop at Pompeii, then two nights at the Caruso hotel in Ravello. A package with meals and excursions that departs about once a year.',
    season: '다음 출발 2027년 4월 22~25일|Next departure 22–25 April 2027',
    resv: true,
    price:
      '1인 약 £8,600~(2026년 첫 출발, 2인 1실 히스토릭 캐빈), 2027년 출발분은 €9,900~ — 언론 보도 기준, 공식 가격은 문의|From about £8,600 per person (2026, shared Historic Cabin); 2027 from €9,900 — press figures, ask Belmond for prices',
    url: 'https://www.belmond.com/en/villeggiatura-by-train',
  },
  // —— Slovakia ——
  {
    id: 'tatra-electric',
    name: '타트라 전기 철도|Tatranská elektrická železnica',
    cities: ['poprad'],
    route: '포프라트–스타리 스모코베츠–슈트르브스케 플레소, 고타트라 산자락을 잇는 전기 철도입니다.|Poprad–Starý Smokovec–Štrbské Pleso along the foot of the High Tatras.',
    resv: false,
    url: 'https://www.zssk.sk/en/',
  },
]

/** Countries for the search screen's train list, in display order. */
export const SCENIC_TRAIN_GROUPS: { title: string; ids: string[] }[] = [
  {
    title: '스위스|Switzerland',
    ids: [
      'glacier-express',
      'bernina-express',
      'goldenpass-express',
      'gotthard-panorama',
      'jungfraubahn',
      'gornergrat',
      'pilatus',
      'rigi',
      'brienz-rothorn',
    ],
  },
  { title: '오스트리아|Austria', ids: ['semmering', 'schafbergbahn'] },
  { title: '노르웨이·스웨덴|Norway & Sweden', ids: ['flamsbana', 'bergensbanen', 'ofotbanen'] },
  { title: '프랑스|France', ids: ['montenvers', 'tramway-mont-blanc'] },
  { title: '영국·맨섬|Great Britain & Isle of Man', ids: ['west-highland', 'jacobite', 'kyle-line', 'snowdon', 'snaefell'] },
  {
    title: '이탈리아·스페인·포르투갈|Italy, Spain & Portugal',
    ids: ['cinque-terre-express', 'soller', 'montserrat-rack', 'douro-line'],
  },
  { title: '슬로바키아|Slovakia', ids: ['tatra-electric'] },
  { title: '국경을 넘는 호화 열차|Cross-border luxury trains', ids: ['vsoe-amalfi'] },
]

export function getCityScenicTrains(cityId: string): ScenicTrain[] {
  return SCENIC_TRAINS.filter((train) => train.cities.includes(cityId))
}

/** Scenic trains based in a country's cities, plus those that run into it from a neighbour (`alsoIn`). */
export function getCountryScenicTrains(countryId: string, cityIds: string[]): ScenicTrain[] {
  return SCENIC_TRAINS.filter(
    (train) => train.alsoIn?.includes(countryId) || train.cities.some((id) => cityIds.includes(id)),
  )
}
