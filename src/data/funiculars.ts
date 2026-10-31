// Funiculars, lifts and city cable cars, checked in 2026-10. `ticket` is only given where the city transit
// ticket is known to be valid (or known not to be); `status` flags closures.
import type { Funicular } from '../types'

export const FUNICULARS: Funicular[] = [
  // —— France ——
  {
    city: 'paris',
    name: 'Funiculaire de Montmartre',
    route: '생피에르 광장–사크레쾨르 대성당. 계단 대신 1분 만에 오릅니다.|Place Saint-Pierre to Sacré-Cœur in about a minute instead of the steps.',
    ticket: '메트로 표·나비고로 탑니다.|Metro tickets and Navigo are valid.',
  },
  {
    city: 'lyon',
    name: 'Funiculaires F1 · F2',
    route: '구시가 비외리옹(생장)에서 F2는 푸르비에르 대성당, F1은 생쥐스트 로마 극장 쪽으로 오릅니다.|From Vieux Lyon (Saint-Jean), F2 climbs to Fourvière basilica and F1 to Saint-Just by the Roman theatres.',
    ticket: 'TCL 교통권으로 탑니다.|TCL tickets are valid.',
  },
  // —— Spain, Portugal ——
  {
    city: 'barcelona',
    name: 'Funicular de Montjuïc',
    route: '지하철 파랄렐역에서 몬주익 언덕으로 오릅니다.|From Paral·lel metro station up Montjuïc hill.',
    ticket: '지하철 표로 갈아탈 수 있습니다.|Covered by the metro ticket as a transfer.',
  },
  {
    city: 'barcelona',
    name: 'Funicular del Tibidabo',
    route: '티비다보 산 정상의 놀이공원과 성당으로 오르는 푸니쿨라입니다.|Up to the amusement park and church on Tibidabo’s summit.',
    ticket: '교통권과 별도 요금입니다.|Separate fare, not covered by transit tickets.',
  },
  {
    city: 'san-sebastian',
    name: 'Funicular de Monte Igueldo',
    route: '1912년 개통, 해변 끝에서 이겔도 산 전망대와 놀이공원으로 오릅니다.|Opened in 1912, from the end of the beach up to the Monte Igueldo viewpoint and funfair.',
  },
  {
    city: 'porto',
    name: 'Funicular dos Guindais',
    route: '강변 히베이라에서 언덕 위 바탈랴 지구로 오릅니다.|From the Ribeira riverfront up to Batalha.',
  },
  {
    city: 'lisbon',
    name: 'Funicular da Graça',
    route: '그라사 언덕 전망대로 오르는 푸니쿨라로, 2026년 4월부터 운행합니다.|Up to the Graça viewpoints; running since April 2026.',
  },
  {
    city: 'lisbon',
    name: 'Bica · Lavra · Glória · Santa Justa',
    route: '리스본의 옛 푸니쿨라 세 곳과 산타 후스타 엘리베이터입니다.|Lisbon’s three historic funiculars and the Santa Justa lift.',
    status: '2025년 9월 글로리아 사고 뒤 모두 운행 중단 (2026년 9월 기준 비카·라브라·산타 후스타는 재개 날짜 없음, 글로리아는 새 차량으로 2029년 상반기 재개 예정)|All closed since the Glória accident in September 2025; as of September 2026 Bica, Lavra and Santa Justa have no restart date, and Glória is due back with new equipment in the first half of 2029',
  },
  {
    city: 'nazare',
    name: 'Ascensor da Nazaré',
    route: '해변 마을에서 절벽 위 시티우 지구로 오릅니다.|From the beach town up to the Sítio clifftop.',
  },
  {
    city: 'montserrat',
    name: 'Funiculars de Sant Joan · Santa Cova',
    route: '수도원에서 산 위 전망 길(산 조안)과 성모 동굴 쪽(산타 코바)으로 갑니다.|From the monastery up to the Sant Joan trails, and down towards the Santa Cova chapel.',
  },
  {
    city: 'funchal',
    name: 'Teleférico do Funchal',
    route: '해안 구시가에서 몬테 언덕까지 케이블카로 오릅니다.|Cable car from the old town seafront up to Monte.',
  },
  {
    city: 'gibraltar',
    name: 'Gibraltar Cable Car',
    route: '시내에서 바위산 꼭대기 전망대까지 오릅니다.|From town to the top of the Rock.',
  },
  // —— Central Europe ——
  {
    city: 'budapest',
    name: 'Budavári Sikló',
    route: '세체니 다리 앞 클라크 아담 광장에서 부다 왕궁 언덕으로 오릅니다.|From Clark Ádám tér by the Chain Bridge up to Buda Castle Hill.',
    ticket: '교통권·여행자 패스로는 탈 수 없고 표를 따로 삽니다.|Not covered by transit tickets or travelcards; buy a separate ticket.',
  },
  {
    city: 'prague',
    name: 'Lanová dráha na Petřín',
    route: '말라 스트라나 우예즈드에서 페트린 언덕(전망탑)으로 오릅니다. 2026년 9월 22일 새 차량으로 운행을 재개했습니다.|From Újezd in Malá Strana up Petřín hill to the lookout tower; back in service with new cars since 22 September 2026.',
    ticket: '24시간·72시간권과 정기권으로 탈 수 있고, 1회 요금은 따로 있습니다.|24- and 72-hour tickets and passes are valid; single rides have their own fare.',
  },
  {
    city: 'karlovy-vary',
    name: 'Lanovka Diana',
    route: '그랜드호텔 푸프 옆에서 숲속 디아나 전망탑으로 오릅니다.|From beside the Grandhotel Pupp up through the forest to the Diana lookout tower.',
  },
  {
    city: 'zagreb',
    name: 'Uspinjača',
    route: '일리차 거리에서 윗마을 그라데츠로 오르는 66m짜리 푸니쿨라입니다. 2026년 5월 보수를 마치고 다시 운행합니다.|A 66 m funicular from Ilica up to the Upper Town, back in daily service after a renovation finished in May 2026.',
    ticket: '시내 교통 1일권·정기권으로 탈 수 있습니다.|Day, multi-day and season transit tickets are valid.',
  },
  {
    city: 'ljubljana',
    name: 'Vzpenjača na Ljubljanski grad',
    route: '구시가에서 류블랴나 성으로 오르는 푸니쿨라입니다.|From the old town up to Ljubljana Castle.',
  },
  {
    city: 'graz',
    name: 'Schlossbergbahn',
    route: '구시가에서 시계탑이 있는 슐로스베르크 언덕으로 오릅니다.|From the old town up the Schlossberg to the clock tower.',
    ticket: '그라츠 시내 교통권으로 탑니다.|Graz transit tickets are valid.',
  },
  {
    city: 'salzburg',
    name: 'FestungsBahn',
    route: '구시가에서 호엔잘츠부르크 요새로 오릅니다.|From the old town up to Hohensalzburg Fortress.',
  },
  {
    city: 'innsbruck',
    name: 'Hungerburgbahn · Nordkette',
    route: '시내 콩그레스역에서 푸니쿨라로 훙거부르크까지, 이어서 케이블카로 노르트케테 산까지 오릅니다.|Funicular from Congress in town to Hungerburg, then cable cars up the Nordkette.',
  },
  {
    city: 'heidelberg',
    name: 'Heidelberger Bergbahn',
    route: '코른마르크트에서 하이델베르크 성을 거쳐 쾨니히슈툴 정상까지 오릅니다.|From Kornmarkt via the castle to the Königstuhl summit.',
    ticket: '성 입장권에 성까지 왕복이 포함됩니다.|The castle ticket includes the return ride to the castle.',
  },
  {
    city: 'dresden',
    name: 'Standseilbahn · Schwebebahn',
    route: '로슈비츠의 푸니쿨라와 세계에서 가장 오래된 현수식 산악 철도로 엘베강 언덕에 오릅니다.|In Loschwitz, a funicular and the world’s oldest suspension mountain railway climb the Elbe slopes.',
  },
  // —— Italy, Switzerland, San Marino ——
  {
    city: 'naples',
    name: 'Funicolari di Napoli',
    route: '센트랄레·키아이아·몬테산토·메르젤리나 네 노선이 보메로 언덕과 시내를 잇습니다.|Four lines—Centrale, Chiaia, Montesanto and Mergellina—link the Vomero hill with the city.',
    ticket: '나폴리 시내 교통권으로 탑니다.|City transit tickets are valid.',
  },
  {
    city: 'genoa',
    name: 'Funicolare Zecca–Righi',
    route: '시내에서 성벽 공원 언덕 리기까지 오릅니다. 시내 곳곳에 공공 엘리베이터도 있습니다.|From the centre up to Righi and the walls park; public lifts also climb the city’s hills.',
    ticket: 'AMT 시내 교통권으로 탑니다.|AMT city tickets are valid.',
  },
  {
    city: 'como',
    name: 'Funicolare Como–Brunate',
    route: '호숫가에서 산 위 마을 브루나테로 오릅니다.|From the lakefront up to the hill village of Brunate.',
  },
  {
    city: 'bergamo',
    name: 'Funicolari Città Alta · San Vigilio',
    route: '아래 시가지에서 성벽 도시 치타 알타로, 다시 산 비질리오 언덕으로 오릅니다.|From the lower town up to the walled Città Alta, then on to San Vigilio.',
  },
  {
    city: 'capri',
    name: 'Funicolare di Capri',
    route: '항구 마리나 그란데에서 카프리 마을 광장으로 오릅니다.|From the Marina Grande harbour up to the Piazzetta in Capri town.',
  },
  {
    city: 'orvieto',
    name: 'Funicolare di Orvieto',
    route: '기차역에서 절벽 위 구시가 카헨 광장으로 오릅니다.|From the station up to Piazza Cahen on the clifftop.',
    status: '2026년 6월부터 정비로 운행 중단, 대체 버스 운행 (2026년 9월 기준 재개 날짜 없음)|Shut for maintenance since June 2026, with a replacement bus and no restart date as of September 2026',
  },
  {
    city: 'lugano',
    name: 'Monte Brè · San Salvatore',
    route: '호수 양쪽 산 정상 전망대로 오르는 푸니쿨라입니다.|Funiculars to the summit viewpoints on either side of the lake.',
  },
  {
    city: 'san-marino-city',
    name: 'Funivia di San Marino',
    route: '보르고 마조레와 산 위 산마리노 시가지를 잇는 케이블카입니다.|Cable car linking Borgo Maggiore with the hilltop city.',
  },
  {
    city: 'borgo-maggiore',
    name: 'Funivia di San Marino',
    route: '보르고 마조레와 산 위 산마리노 시가지를 잇는 케이블카입니다.|Cable car linking Borgo Maggiore with the hilltop city.',
  },
  // —— Nordics, Balkans, Türkiye, East ——
  {
    city: 'bergen',
    name: 'Fløibanen',
    route: '어시장 근처에서 플뢰옌 산 전망대로 오릅니다.|From near the fish market up to the Fløyen viewpoint.',
  },
  {
    city: 'tromso',
    name: 'Fjellheisen',
    route: '시내 건너편에서 스토르스테이넨 전망대로 오르는 케이블카입니다.|Cable car up to the Storsteinen viewpoint across the strait.',
  },
  {
    city: 'dubrovnik',
    name: 'Dubrovnik Cable Car',
    route: '성벽 북쪽에서 스르지 산 전망대로 오릅니다.|From above the walls up to the Srđ viewpoint.',
  },
  {
    city: 'sarajevo',
    name: 'Trebević Cable Car',
    route: '구시가 근처에서 트레베비치 산으로 오르는 케이블카입니다.|Cable car from near the old town up Mount Trebević.',
  },
  {
    city: 'istanbul',
    name: 'Tünel · F1',
    route: '1875년 개통한 튀넬은 카라쾨이에서 이스티클랄 거리 아래쪽, F1은 카바타시에서 탁심 광장으로 오릅니다.|The 1875 Tünel climbs from Karaköy to the foot of İstiklal Avenue; the F1 runs from Kabataş up to Taksim.',
    ticket: '이스탄불카르트로 탑니다.|Istanbulkart is valid.',
  },
  {
    city: 'kyiv',
    name: 'Kyiv Funicular',
    route: '포딜 지구 포슈토바 광장에서 성 미하일 수도원 언덕으로 오릅니다.|From Poshtova Square in Podil up to St Michael’s hill.',
  },
  {
    city: 'tbilisi',
    name: 'Mtatsminda · Narikala',
    route: '므타츠민다 산 공원으로 오르는 푸니쿨라와, 리케 공원에서 나리칼라 요새로 가는 케이블카가 있습니다.|A funicular up to Mtatsminda park and a cable car from Rike Park to Narikala fortress.',
  },
]

export function getCityFuniculars(cityId: string): Funicular[] {
  return FUNICULARS.filter((item) => item.city === cityId)
}
