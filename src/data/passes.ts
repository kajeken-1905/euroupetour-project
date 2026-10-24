/**
 * Travel passes and city cards: what each covers, its kinds and prices, and the official place to buy it.
 * Prices come from the seller's own page (or two independent sources agreeing) and carry the month they were checked;
 * where no source gave a clear current price the row keeps the kind and leaves the price to the official site.
 * Only official sellers are linked, as resale sites often charge more. Re-check every year.
 */
type Text = { ko: string; en: string }
export interface PassRow {
  name: Text
  /** Empty when the price could not be confirmed; the panel then points to the official site. */
  price: string
}
export interface Pass {
  name: Text
  covers: Text
  rows: PassRow[]
  tips: Text[]
  /** The official seller's page. */
  buy: string
  /** When the details were checked, YYYY-MM. */
  checked: string
}

const r = (ko: string, en: string, price = ''): PassRow => ({ name: { ko, en }, price })
const tx = (ko: string, en: string): Text => ({ ko, en })

/** Passes that work across a whole country, shown on the country and on each of its cities. */
export const COUNTRY_PASSES: Record<string, Pass[]> = {
  ch: [
    {
      name: tx('스위스 트래블 패스', 'Swiss Travel Pass'),
      covers: tx(
        '기차·버스·유람선과 90여 개 도시의 대중교통 무제한, 박물관 500곳 이상 무료, 리기·슈탄저호른·슈토스 산악열차 무료, 다른 산악열차 대부분 최대 50% 할인',
        'Unlimited trains, buses, boats and city transport in about 90 towns; free entry to 500+ museums; free Rigi, Stanserhorn and Stoos; up to 50% off most other mountain railways',
      ),
      rows: [
        r('연속 3일 / 4일 / 6일 (2등석 성인)', 'Consecutive 3 / 4 / 6 days (2nd class adult)', 'CHF 254 / 309 / 399'),
        r('연속 8일 / 15일', 'Consecutive 8 / 15 days', 'CHF 439 / 499'),
        r('플렉스 3일 / 4일 / 6일 (한 달 안에 고른 날)', 'Flex 3 / 4 / 6 days (chosen within a month)', 'CHF 289 / 349 / 424'),
        r('플렉스 8일 / 15일', 'Flex 8 / 15 days', 'CHF 459 / 519'),
      ],
      tips: [
        tx('스위스·리히텐슈타인 밖에 사는 사람만 살 수 있습니다. 16~24세는 유스 요금으로 더 쌉니다.', 'Only for people living outside Switzerland and Liechtenstein. Ages 16–24 pay a lower youth price.'),
        tx('6~16세 아이는 부모 한 명이 패스가 있으면 무료 스위스 패밀리 카드로 함께 탑니다.', 'Children aged 6–16 travel free with a parent who holds a pass, on the free Swiss Family Card.'),
        tx('플렉스 패스는 박물관 무료·산악열차 할인도 사용하는 날에만 됩니다. 파노라마 열차 좌석 예약비는 따로 냅니다.', 'With the Flex pass, museum and mountain benefits apply only on travel days. Panorama train seat reservations cost extra.'),
        tx('기차를 덜 탄다면 한 달 동안 대부분 50% 할인되는 하프 페어 카드(CHF 150)가 더 쌀 수 있습니다.', 'If you will ride less, the Half Fare Card (CHF 150, 50% off for a month) may work out cheaper.'),
      ],
      buy: 'https://www.sbb.ch/en/offers/buy-swiss-travel-pass',
      checked: '2026-10',
    },
  ],
  de: [
    {
      name: tx('도이칠란트티켓', 'Deutschlandticket'),
      covers: tx(
        '독일 전국의 지역 열차(RE·RB·S반), 지하철, 트램, 버스 한 달 무제한. ICE·IC·EC 같은 장거리 열차는 안 됩니다.',
        'A month of unlimited regional trains (RE, RB, S-Bahn), U-Bahn, trams and buses across Germany. Long-distance ICE, IC and EC trains are not included.',
      ),
      rows: [r('한 달 (달력 기준 월)', 'One calendar month', '€63')],
      tips: [
        tx('매달 자동으로 갱신되는 정기권입니다. 그달 10일까지 해지해야 그달 말에 끝납니다.', 'It is a subscription that renews every month; cancel by the 10th for it to end that month.'),
        tx('휴대폰 앱의 디지털 승차권으로 받습니다.', 'It comes as a digital ticket in a phone app.'),
      ],
      buy: 'https://www.bahn.de/angebot/regio/deutschland-ticket',
      checked: '2026-10',
    },
  ],
}

/** City cards and museum passes, shown on that city. */
export const CITY_PASSES: Record<string, Pass[]> = {
  paris: [
    {
      name: tx('파리 뮤지엄 패스', 'Paris Museum Pass'),
      covers: tx('루브르·오르세·베르사유 궁전 등 박물관·기념물 50곳 이상 입장. 대중교통은 포함되지 않습니다.', 'Entry to 50+ museums and monuments, including the Louvre, Orsay and Versailles. Public transport is not included.'),
      rows: [r('2일 (48시간)', '2 days (48 hours)', '€85'), r('4일 (96시간)', '4 days (96 hours)', '€105'), r('6일 (144시간)', '6 days (144 hours)', '€125')],
      tips: [
        tx('패스가 있어도 시간 지정 예약이 필요한 곳이 있습니다(루브르 등).', 'Some places still need a timed reservation, such as the Louvre.'),
        tx('공식 사이트(이메일 전자 티켓), 주요 박물관 매표소, 샤를드골·오를리 공항 안내소에서 삽니다. 웃돈을 받는 가짜 판매 사이트를 조심하세요.', 'Buy on the official site (e-ticket by email), at main museum desks or the CDG and Orly information desks; beware of copycat resale sites.'),
      ],
      buy: 'https://www.parismuseumpass.fr/en',
      checked: '2026-10',
    },
  ],
  rome: [
    {
      name: tx('로마 패스', 'Roma Pass'),
      covers: tx('대중교통 무제한, 처음 들어가는 박물관·유적 1곳(48시간) 또는 2곳(72시간) 무료, 그다음은 할인. 바티칸 박물관은 포함되지 않습니다.', 'Unlimited public transport, free entry to the first 1 (48h) or 2 (72h) museums or sites and discounts after that. The Vatican Museums are not included.'),
      rows: [r('48시간 (1곳 무료)', '48 hours (1 free entry)', '€38.00'), r('72시간 (2곳 무료)', '72 hours (2 free entries)', '€62.90')],
      tips: [tx('지금은 휴대폰 앱의 디지털 카드로 팝니다. 콜로세움은 따로 시간 예약이 필요합니다.', 'It is now sold as a digital card in the Roma Pass app. The Colosseum still needs a timed booking.')],
      buy: 'https://www.romapass.it/',
      checked: '2026-10',
    },
  ],
  florence: [
    {
      name: tx('피렌체 카드', 'Firenzecard'),
      covers: tx('72시간 동안 우피치 미술관을 포함한 박물관 60곳 이상 입장. 처음 입장할 때 시작됩니다.', 'Entry to 60+ museums including the Uffizi for 72 hours from the first visit.'),
      rows: [r('72시간', '72 hours', '€85')],
      tips: [tx('우피치는 카드로 무료 예약을 해 두면 줄을 덜 섭니다. 실물 카드나 앱의 디지털 카드로 받습니다.', 'Book the Uffizi with the card at no extra cost to skip the queue. Comes as a physical card or in the app.')],
      buy: 'https://www.firenzecard.it/en/',
      checked: '2026-10',
    },
  ],
  vienna: [
    {
      name: tx('비엔나 시티 카드', 'Vienna City Card'),
      covers: tx('빈 시내 대중교통 무제한과 박물관·명소·투어 할인. 무료 입장 카드는 아닙니다.', 'Unlimited Vienna public transport plus discounts at museums, sights and tours. It does not give free entry.'),
      rows: [
        r('24시간 / 48시간', '24 / 48 hours', '€19 / €31'),
        r('72시간 / 7일', '72 hours / 7 days', '€37 / €39'),
        r('공항 교통 추가', 'Airport transfer add-on', '+€22'),
      ],
      tips: [tx('15세 미만 아이 한 명은 카드 한 장에 함께 무료로 탑니다. 공항 구간은 추가하지 않으면 표를 따로 사야 합니다.', 'One child under 15 rides free with each card. Without the add-on, the airport stretch needs its own ticket.')],
      buy: 'https://www.wien.info/en/travel-info/vienna-city-card',
      checked: '2026-10',
    },
  ],
  prague: [
    {
      name: tx('프라하 비지터 패스', 'Prague Visitor Pass'),
      covers: tx('공항 오가는 길을 포함한 프라하 대중교통 무제한, 명소 70곳 이상 무료·할인(곳마다 1회), 블타바강 유람선', 'Unlimited Prague transport including the airport, 70+ sights free or discounted (once each), Vltava river cruises'),
      rows: [r('48시간 (성인)', '48 hours (adult)', '2,700 CZK'), r('72시간', '72 hours', '3,300 CZK'), r('120시간', '120 hours', '3,900 CZK')],
      tips: [tx('15~25세 학생과 어린이는 더 쌉니다. 사는 날이 아니라 처음 쓰는 때부터 시간이 갑니다.', 'Students aged 15–25 and children pay less. The clock starts at first use, not at purchase.')],
      buy: 'https://praguevisitorpass.eu/',
      checked: '2026-10',
    },
  ],
  budapest: [
    {
      name: tx('부다페스트 카드', 'Budapest Card'),
      covers: tx('대중교통 무제한, 박물관 30여 곳 무료, 루카치 온천 1회, 도보 투어·다뉴브 유람선 등. 다른 온천은 할인입니다.', 'Unlimited public transport, free entry to about 30 museums, one Lukács Baths visit, walking tours and a Danube cruise; other baths are discounted.'),
      rows: [r('24시간 / 48시간', '24 / 48 hours', '17,990 / 23,990 HUF'), r('72시간 / 96시간', '72 / 96 hours', '29,990 / 38,990 HUF')],
      tips: [tx('공항버스 100E는 기본 카드에 포함되지 않고 72시간 PLUS·FLEXI 카드에만 들어 있습니다.', 'The 100E airport bus is not in the standard card, only in the 72-hour PLUS and FLEXI versions.')],
      buy: 'https://www.budapestinfo.hu/budapest-card',
      checked: '2026-10',
    },
  ],
  amsterdam: [
    {
      name: tx('아이 암스테르담 시티 카드', 'I amsterdam City Card'),
      covers: tx('GVB 트램·버스·지하철 무제한, 박물관·명소 70곳 이상, 운하 유람선 1회, 자전거 24시간. 반 고흐 미술관·안네 프랑크의 집은 빠집니다.', 'Unlimited GVB trams, buses and metro, 70+ museums and sights, a canal cruise and 24-hour bike hire. The Van Gogh Museum and Anne Frank House are not included.'),
      rows: [r('24시간 / 48시간', '24 / 48 hours', '€67 / €94'), r('72시간', '72 hours', '€115'), r('96시간 / 120시간', '96 / 120 hours')],
      tips: [tx('NS 기차와 공항버스는 포함되지 않습니다. 어린이 요금은 따로 없습니다.', 'NS trains and the airport bus are not covered, and there is no child price.')],
      buy: 'https://www.iamsterdam.com/en/tickets/i-amsterdam-city-card',
      checked: '2026-10',
    },
  ],
  copenhagen: [
    {
      name: tx('코펜하겐 카드 디스커버', 'Copenhagen Card Discover'),
      covers: tx('명소 80곳 이상 입장과 공항을 포함한 수도권 대중교통(1~99존) 무제한', 'Entry to 80+ attractions and unlimited Capital Region transport (zones 1–99), airport included'),
      rows: [
        r('24시간 / 48시간 (성인)', '24 / 48 hours (adult)', '589 / 859 DKK'),
        r('72시간 / 96시간', '72 / 96 hours', '1,039 / 1,219 DKK'),
        r('120시간', '120 hours', '1,419 DKK'),
      ],
      tips: [tx('12~15세 주니어와 3~11세 어린이 요금은 훨씬 쌉니다.', 'Junior (12–15) and kids (3–11) prices are much lower.')],
      buy: 'https://copenhagencard.com/',
      checked: '2026-10',
    },
  ],
  berlin: [
    {
      name: tx('베를린 웰컴카드', 'Berlin WelcomeCard'),
      covers: tx('대중교통 무제한(AB존, ABC존은 BER 공항·포츠담까지)과 170곳 이상 할인. 박물관섬 판은 박물관섬 5곳 무료가 더해집니다.', 'Unlimited transport (zones AB; ABC adds BER airport and Potsdam) and 170+ discounts. The Museum Island version adds free entry to its five museums.'),
      rows: [
        r('기본 48시간~6일', 'Classic, 48 hours to 6 days', '€28.50~'),
        r('+ 박물관섬', '+ Museum Island', '€62.00~'),
        r('올인클루시브 (무료 입장 25곳 이상)', 'All inclusive (25+ free entries)', '€99.00~'),
      ],
      tips: [tx('카드 한 장에 6~14세 아이 3명까지 무료로 탑니다. 가격은 기간과 존에 따라 올라갑니다.', 'Up to three children aged 6–14 ride free with each card. The price rises with the length and zones.')],
      buy: 'https://www.berlin-welcomecard.de/en',
      checked: '2026-10',
    },
  ],
  lisbon: [
    {
      name: tx('리스보아 카드', 'Lisboa Card'),
      covers: tx('리스본 대중교통 무료와 박물관·기념물 51곳 무료, 12곳 빠른 입장', 'Free Lisbon public transport, free entry to 51 museums and monuments, and fast-track entry at 12'),
      rows: [r('24시간 / 48시간 (성인)', '24 / 48 hours (adult)', '€31 / €51'), r('72시간', '72 hours', '€62')],
      tips: [tx('공식 사이트에서 사면 5% 싸고, 처음 쓸 때부터 시간이 갑니다. 4~15세 어린이 요금이 따로 있습니다.', 'Buying on the official site saves 5%, and the clock starts at first use. There is a lower price for ages 4–15.')],
      buy: 'https://www.visitlisboa.com/en/p/lisboa-card',
      checked: '2026-10',
    },
  ],
  salzburg: [
    {
      name: tx('잘츠부르크 카드', 'Salzburg Card'),
      covers: tx('시내 명소·박물관 무료 입장(곳마다 1회)과 시내 대중교통 무료', 'Free entry to the city’s sights and museums (once each) and free city public transport'),
      rows: [
        r('24 / 48 / 72시간 (4~10월, 성인)', '24 / 48 / 72 hours (Apr–Oct, adult)', '€38 / €45 / €49'),
        r('24 / 48 / 72시간 (11~3월)', '24 / 48 / 72 hours (Nov–Mar)', '€35 / €41 / €44'),
      ],
      tips: [tx('6~15세는 반값입니다. 온라인, 관광안내소, 호텔 프런트, 공항에서 삽니다.', 'Ages 6–15 pay half. Sold online, at tourist offices, hotel receptions and the airport.')],
      buy: 'https://www.salzburg.info/en/hotels-offers/salzburg-card',
      checked: '2026-10',
    },
  ],
  brussels: [
    {
      name: tx('브뤼셀 카드', 'Brussels Card'),
      covers: tx('박물관·명소 40곳 무료 입장. 대중교통·시티투어 버스·아토미움은 따로 더할 수 있습니다.', 'Free entry to 40 museums and attractions; public transport, the hop-on hop-off bus and the Atomium can be added.'),
      rows: [
        r('24 / 48 / 72시간', '24 / 48 / 72 hours', '€41 / €53 / €59'),
        r('+ 대중교통 (STIB)', '+ public transport (STIB)', '+€9 / €16.95 / €21.50'),
        r('+ 아토미움', '+ Atomium', '+€14'),
      ],
      tips: [tx('산 뒤 1년 안에 처음 쓰면 그때부터 시간이 갑니다. 환불은 되지 않습니다.', 'The clock starts at first use, any time within a year of buying. It is not refundable.')],
      buy: 'https://www.visit.brussels/en/visitors/what-to-do/brussels-card',
      checked: '2026-10',
    },
  ],
  reykjavik: [
    {
      name: tx('레이캬비크 시티 카드', 'Reykjavík City Card'),
      covers: tx('박물관·명소 17곳과 지열 수영장 8곳 무료, 수도권 버스 무제한, 비데이섬 배', 'Free entry to 17 museums and sights and 8 geothermal pools, unlimited capital-area buses, the Viðey ferry'),
      rows: [r('24시간 / 48시간', '24 / 48 hours', 'ISK 6,100 / 8,500'), r('72시간', '72 hours', 'ISK 10,500')],
      tips: [tx('공항 가는 55번 버스는 포함되지 않습니다. 온라인으로 산 바우처를 시내 박물관 등에서 실물 카드로 바꿉니다.', 'Bus 55 to Keflavík Airport is not included. Buy online and swap the emailed voucher for a card at a city museum.')],
      buy: 'https://visitreykjavik.is/reykjavik-city-card',
      checked: '2026-10',
    },
  ],
  oslo: [
    {
      name: tx('오슬로 패스', 'Oslo Pass'),
      covers: tx('박물관·명소 30곳 이상 무료, 루테르 대중교통(1·2·3·4존)과 가르데르모엔 공항 오가는 길 무료', 'Free entry to 30+ museums and sights, and free Ruter transport (zones 1–4) including to and from Gardermoen Airport'),
      rows: [r('24시간 / 48시간 (성인)', '24 / 48 hours (adult)', '580 / 845 NOK'), r('72시간', '72 hours', '995 NOK')],
      tips: [tx('6~17세와 67세 이상은 더 쌉니다. 오슬로 패스 앱으로 삽니다.', 'Ages 6–17 and 67+ pay less. Buy it in the Oslo Pass app.')],
      buy: 'https://www.visitoslo.com/en/activities-and-attractions/oslo-pass/buy-the-oslo-pass/',
      checked: '2026-10',
    },
  ],
  helsinki: [
    {
      name: tx('헬싱키 카드', 'Helsinki Card'),
      covers: tx('주요 박물관·명소 입장, 시티투어 버스·운하 유람선, 대중교통(CITY는 AB존, REGION은 공항 기차 포함 ABC존). 디지털 판은 교통이 빠집니다.', 'Entry to top museums and sights, the hop-on hop-off bus and a canal cruise, plus transport (CITY: zones AB; REGION: ABC with the airport train). The digital card has no transport.'),
      rows: [
        r('CITY 24 / 48 / 72시간 (성인)', 'CITY 24 / 48 / 72 hours (adult)', '€62 / €78 / €94'),
        r('REGION 24 / 48 / 72시간', 'REGION 24 / 48 / 72 hours', '€64 / €81 / €99'),
        r('디지털 (교통 없음)', 'Digital (no transport)', '€51 / €62 / €73'),
      ],
      tips: [tx('CITY·REGION은 대중교통에 쓰려면 인쇄해 가야 합니다. 7~16세는 반값 정도입니다.', 'CITY and REGION cards must be printed to use on transport. Ages 7–16 pay about half.')],
      buy: 'https://www.helsinkicard.com/',
      checked: '2026-10',
    },
  ],
  tallinn: [
    {
      name: tx('탈린 카드', 'Tallinn Card'),
      covers: tx('박물관·명소 50곳 이상 무료(수상비행기 항구·TV 타워 등)와 공항을 포함한 버스·트롤리버스·트램 무제한', 'Free entry to 50+ museums and sights (Seaplane Harbour, TV Tower and more) and unlimited buses, trolleybuses and trams, airport included'),
      rows: [r('24 / 48 / 72시간', '24 / 48 / 72 hours')],
      tips: [tx('탈 때마다 카드를 찍어야 합니다. 앱이나 공식 온라인 상점, 관광안내소·공항·항구에서 삽니다.', 'Validate the card each time you board. Buy in the app, the official online shop, or at the tourist office, airport or port.')],
      buy: 'https://www.visittallinn.ee/eng/visitor/tallinn-card/tallinn-card/online-shop',
      checked: '2026-10',
    },
  ],
  munich: [
    {
      name: tx('뮌헨 시티 패스', 'München City Pass'),
      covers: tx('명소 40곳 이상 무료 입장. 대중교통(S·U반, 버스, 트램)은 M존 또는 공항을 포함한 전체 구간으로 고르거나 빼고 살 수 있습니다.', 'Free entry to 40+ attractions; public transport (S-Bahn, U-Bahn, buses, trams) can be added for zone M or the whole network including the airport, or left out.'),
      rows: [
        r('1 / 2 / 3일, 교통 없음 (성인)', '1 / 2 / 3 days, no transport (adult)', '€39.90 / 53.90 / 59.90'),
        r('1 / 2 / 3일 + M존', '1 / 2 / 3 days + zone M', '€55.90 / 76.90 / 91.90'),
        r('1 / 2 / 3일 + 공항 포함 전체', '1 / 2 / 3 days + whole network', '€66.90 / 91.90 / 115.90'),
      ],
      tips: [tx('고른 날 새벽 6시(다음 날)까지 쓸 수 있습니다. 무료 입장 없이 할인만 되는 더 싼 뮌헨 카드도 있습니다.', 'Valid on the chosen days until 6 am the next morning. The cheaper München Card gives discounts only, not free entry.')],
      buy: 'https://www.muenchen.travel/angebote/muenchen-city-pass',
      checked: '2026-10',
    },
  ],
  hamburg: [
    {
      name: tx('함부르크 카드', 'Hamburg CARD'),
      covers: tx('공항을 포함한 함부르크 AB 구역의 버스·기차·항구 페리 무제한과 명소 150곳 이상 최대 50% 할인', 'Unlimited buses, trains and harbour ferries in Hamburg AB including the airport, and up to 50% off at 150+ attractions'),
      rows: [
        r('1 / 2 / 3일 (1인)', '1 / 2 / 3 days (single)', '€12.90 / 24.90 / 35.90'),
        r('4 / 5일', '4 / 5 days', '€46.90 / 54.90'),
        r('그룹 (5명까지) 1 / 2 / 3일', 'Group (up to 5) 1 / 2 / 3 days', '€24.90 / 43.90 / 60.90'),
      ],
      tips: [tx('1인 카드에 6~14세 아이 3명까지 함께 탑니다. 입장료는 무료가 아니라 할인입니다.', 'A single card also covers up to three children aged 6–14. Entry is discounted, not free.')],
      buy: 'https://www.hamburg-tourism.de/buchen/hamburg-card-1/',
      checked: '2026-10',
    },
  ],
  zurich: [
    {
      name: tx('취리히 카드', 'Zürich Card'),
      covers: tx('취리히와 주변 지역의 트램·버스·기차·배·케이블카 무제한(공항 포함), 위틀리베르크, 쿤스트하우스·스위스 국립박물관 등 여러 박물관 무료', 'Unlimited trams, buses, trains, boats and cable cars in Zurich and the region (airport included), the Uetliberg, and free entry to many museums such as the Kunsthaus and the National Museum'),
      rows: [r('24시간 (성인 / 6~15세)', '24 hours (adult / 6–15)', 'CHF 29 / 19'), r('72시간', '72 hours', 'CHF 56 / 37')],
      tips: [
        tx('2026년 12월 13일부터 새 가격이 적용됩니다. 박물관은 대부분 월요일에 닫습니다.', 'New prices apply from 13 December 2026. Most museums close on Mondays.'),
        tx('스위스 트래블 패스가 있으면 교통과 많은 박물관이 이미 포함되니 따로 살 필요가 적습니다.', 'With a Swiss Travel Pass, transport and many museums are already covered.'),
      ],
      buy: 'https://www.zuerich.com/en/zurichcard',
      checked: '2026-10',
    },
  ],
  geneva: [
    {
      name: tx('제네바 교통 카드 (숙박객 무료)', 'Geneva Transport Card (free for guests)'),
      covers: tx('제네바 숙소에 묵는 동안 제네바주(10존) 버스·트램·기차·노란 배(무에트)를 무료로 탑니다.', 'Free buses, trams, trains and Mouettes boats across the Canton of Geneva (zone 10) for the length of your stay.'),
      rows: [r('숙박 기간 내내', 'Whole stay', '무료|Free')],
      tips: [tx('도착 3일 전쯤 숙소가 보내는 이메일 양식을 작성하면 휴대폰으로 받습니다. 스팸함도 확인하세요. 등록된 숙소에서만 됩니다.', 'About three days before arrival your accommodation emails a form; fill it in and the card comes to your phone. Check your spam folder. Only registered accommodation can issue it.')],
      buy: 'https://www.geneve.com/en/plan-stay/getting-around/free-geneva-transport-card',
      checked: '2026-10',
    },
  ],
  stockholm: [
    {
      name: tx('스톡홀름 패스 (Go City)', 'Stockholm Pass (Go City)'),
      covers: tx('바사 박물관·왕궁·스칸센·노벨상 박물관·드로트닝홀름 궁전 등 60곳 이상(올인클루시브). 에센셜은 3곳을 골라 30일 안에 씁니다.', 'All-Inclusive covers 60+ sights such as the Vasa Museum, Royal Palace, Skansen, Nobel Prize Museum and Drottningholm; Essentials lets you pick 3 to use within 30 days.'),
      rows: [r('올인클루시브 (기간 선택)', 'All-Inclusive (choose days)', 'SEK 949~'), r('에센셜 (3곳)', 'Essentials (3 sights)', 'SEK 649~')],
      tips: [tx('대중교통이 포함된다는 안내는 없으니 SL 교통권을 따로 준비하세요. 스톡홀름 관광청이 아닌 민간 회사 상품입니다.', 'Public transport is not listed as included, so plan an SL ticket separately. It is a private company product, not the tourist board’s.')],
      buy: 'https://gocity.com/en/stockholm',
      checked: '2026-10',
    },
  ],
  ljubljana: [
    {
      name: tx('류블랴나 카드', 'Ljubljana Card'),
      covers: tx('시내버스(LPP) 무제한과 류블랴나성·강 유람선·시내 가이드 투어·국립미술관 등 30곳 이상(곳마다 1회)', 'Unlimited LPP city buses and 30+ attractions (once each) such as Ljubljana Castle, a river cruise, a guided city tour and the National Gallery'),
      rows: [r('24 / 48 / 72시간 (성인)', '24 / 48 / 72 hours (adult)', '€41 / 49 / 54'), r('6~14세', 'Ages 6–14', '€26 / 31 / 35')],
      tips: [tx('버스에 탈 때마다 카드나 QR을 찍어야 합니다. 시내 가이드 투어는 이메일로 미리 예약합니다.', 'Validate the card or QR code each time you board. Book the guided city tour by email in advance.')],
      buy: 'https://www.visitljubljana.com/en/visitors/travel-information/ljubljana-card/',
      checked: '2026-10',
    },
  ],
  dubrovnik: [
    {
      name: tx('두브로브니크 패스', 'Dubrovnik Pass'),
      covers: tx('성벽과 로브리예나츠 요새, 렉터 궁전 등 박물관·미술관(곳마다 1회), 시내버스 무료', 'The city walls and Fort Lovrijenac, museums and galleries such as the Rector’s Palace (once each), and free city buses'),
      rows: [r('1일 / 3일 / 7일', '1 / 3 / 7 days', '€40 / 50 / 60')],
      tips: [tx('성벽 입장권만으로도 비슷한 값이라 성벽을 걸을 거면 패스가 낫습니다. 7세 미만은 필요 없습니다.', 'It costs about the same as a walls ticket alone, so it pays off if you walk the walls. Under-7s do not need one.')],
      buy: 'https://www.dubrovnikpass.com/en/',
      checked: '2026-10',
    },
  ],
  valencia: [
    {
      name: tx('발렌시아 투어리스트 카드', 'Valencia Tourist Card'),
      covers: tx('공항 오가는 지하철(3·5호선)을 포함한 시내버스·지하철·트램 무료(AB존), 시립 박물관·기념물 무료, 그 밖의 할인', 'Free buses, metro and trams in zones AB including the airport metro (lines 3 and 5), free municipal museums and monuments, and other discounts'),
      rows: [r('24 / 48 / 72시간', '24 / 48 / 72 hours', '€17 / 24 / 30')],
      tips: [tx('공식 사이트에서 사면 10% 쌉니다. 처음 쓸 때부터 시간이 갑니다.', 'Buying on the official site saves 10%. The clock starts at first use.')],
      buy: 'https://www.visitvalencia.com/en/product/285',
      checked: '2026-10',
    },
  ],
  bergen: [
    {
      name: tx('베르겐 카드', 'Bergen Card'),
      covers: tx('공항 오가는 경전철 1호선을 포함한 베르겐 일대 버스·경전철 무료, 박물관·명소 무료 또는 할인', 'Free buses and light rail in and around Bergen, including light rail line 1 to the airport, and free or discounted museums and sights'),
      rows: [r('24 / 48시간 (성인)', '24 / 48 hours (adult)', 'NOK 400 / 500'), r('72 / 96시간', '72 / 96 hours', 'NOK 600 / 700')],
      tips: [tx('Vy 기차와 피오르 배는 포함되지 않습니다. 10~5월에는 월요일에 닫는 박물관이 많습니다. 환불되지 않습니다.', 'Vy trains and fjord boats are not included. Many museums close on Mondays from October to May. Not refundable.')],
      buy: 'https://shop.visitbergendigital.com/',
      checked: '2026-10',
    },
  ],
  lyon: [
    {
      name: tx('리옹 시티 카드', 'Lyon City Card'),
      covers: tx('대중교통 무제한과 박물관 30곳 정도, 가이드 투어. 공항 열차(론익스프레스)를 더한 판도 있습니다.', 'Unlimited public transport, about 30 museums and guided tours; a version with the Rhônexpress airport tram also exists.'),
      rows: [r('1 / 2 / 3 / 4일', '1 / 2 / 3 / 4 days')],
      tips: [tx('2026년 가격을 공식 출처에서 확인하지 못해 가격은 넣지 않았습니다.', 'No 2026 price could be confirmed from an official source, so none is shown.')],
      buy: 'https://www.visiterlyon.com/',
      checked: '2026-10',
    },
  ],
  barcelona: [
    {
      name: tx('바르셀로나 카드', 'Barcelona Card'),
      covers: tx('공항 열차를 포함한 대중교통 무제한과 박물관 25곳 이상 무료, 그 밖의 할인', 'Unlimited public transport including the airport train, free entry to 25+ museums and other discounts'),
      rows: [r('3일 / 4일 / 5일', '3 / 4 / 5 days'), r('익스프레스 2일 (교통 + 할인)', 'Express, 2 days (transport + discounts)')],
      tips: [tx('판매처마다 가격이 달라서 가격은 넣지 않았습니다. 공식 판매처에서 확인하세요.', 'Prices differ between sellers, so none is shown here; check the official store.')],
      buy: 'https://bcnshop.barcelonaturisme.com/shopv3/en/product/29001/barcelona-card.html',
      checked: '2026-10',
    },
  ],
}

export function getCountryPasses(countryId: string): Pass[] {
  return COUNTRY_PASSES[countryId] ?? []
}

export function getCityPasses(cityId: string, countryId: string): Pass[] {
  return [...(CITY_PASSES[cityId] ?? []), ...getCountryPasses(countryId)]
}
