/**
 * Public transport fares for a handful of big cities, from the operators' own price pages only.
 * Fares change most years (usually in January), so each city carries the date it was checked and its source;
 * anything a source left unclear is left out rather than guessed. Re-check every year.
 */
type Text = { ko: string; en: string }
export interface FareRow {
  name: Text
  price: string
}
export interface CityFares {
  /** When the prices were checked against the source, YYYY-MM. */
  checked: string
  source: string
  rows: FareRow[]
  tips: Text[]
}

const r = (ko: string, en: string, price: string): FareRow => ({ name: { ko, en }, price })
const tip = (ko: string, en: string): Text => ({ ko, en })

export const FARES: Record<string, CityFares> = {
  paris: {
    checked: '2026-10',
    source: 'https://www.iledefrance-mobilites.fr/tarifs-titre-de-transport-en-commun-2026',
    rows: [
      r('메트로·RER·기차 1회권', 'Metro–train–RER single', '€2.55'),
      r('공항 ↔ 파리 1회권 (CDG·오를리)', 'Paris region ↔ airports single (CDG, Orly)', '€14.00'),
    ],
    tips: [
      tip('1회권으로는 공항에 갈 수 없고 공항권을 따로 사야 합니다. 두 표를 한 교통카드에 함께 담을 수 없습니다.', 'The ordinary single does not cover the airports; you need the airport ticket, and the two cannot sit on the same card.'),
    ],
  },
  london: {
    checked: '2026-10',
    source: 'https://tfl.gov.uk/fares/new-fares',
    rows: [
      r('지하철 1존 (비접촉 카드·오이스터) 출퇴근 시간', 'Tube, Zone 1 (contactless/Oyster), peak', '£3.10'),
      r('지하철 1존 그 외 시간', 'Tube, Zone 1, off-peak', '£3.00'),
      r('1존 하루 상한', 'Zone 1 daily cap', '£8.90'),
      r('버스 1회 (1시간 안 환승 무료)', 'Bus, Hopper fare (1 hour)', '£1.75 → 11월 1일부터 £1.85|£1.75 → £1.85 from 1 Nov'),
      r('버스 하루 상한', 'Bus daily cap', '£5.25 → 11월 1일부터 £5.55|£5.25 → £5.55 from 1 Nov'),
      r('엘리자베스선 1존 ↔ 히드로', 'Elizabeth line, Zone 1 ↔ Heathrow', '£15.50'),
    ],
    tips: [
      tip('비접촉 결제 카드나 휴대폰을 그대로 찍으면 되고, 하루 상한을 넘으면 더 내지 않습니다. 하루 내내 같은 카드를 쓰세요.', 'Just tap a contactless card or phone; you never pay more than the daily cap. Use the same card all day.'),
    ],
  },
  rome: {
    checked: '2026-10',
    source: 'https://www.atac.roma.it/en/tickets-and-passes',
    rows: [
      r('BIT 100분권 (버스·트램 무제한, 지하철 1회)', 'BIT, 100 minutes (buses and trams, one metro entry)', '€1.50'),
      r('24시간권', 'Roma 24h', '€8.50'),
      r('48시간권', 'Roma 48h', '€15.00'),
      r('72시간권', 'Roma 72h', '€22.00'),
      r('7일권 (CIS)', 'CIS weekly', '€29.00'),
    ],
    tips: [
      tip('버스·트램·지하철 개찰구에서 비접촉 카드를 찍어 바로 탈 수도 있습니다.', 'You can also tap a contactless card on buses, trams and metro gates.'),
    ],
  },
  barcelona: {
    checked: '2026-10',
    source: 'https://www.tmb.cat/en/barcelona-fares-metro-bus',
    rows: [
      r('1회권', 'Single ticket', '€2.90'),
      r('T-casual (10회, 1존부터)', 'T-casual (10 journeys, from zone 1)', '€13.00~|from €13.00'),
      r('T-dia (24시간)', 'T-dia (24 hours)', '€12.00~|from €12.00'),
      r('올라 바르셀로나 (최대 5일)', 'Hola Barcelona (up to 5 days)', '€12.50~|from €12.50'),
      r('공항 메트로 1회권 (T1·T2역)', 'Airport metro ticket (T1/T2 stations)', '€5.90'),
    ],
    tips: [
      tip('1회권과 T-casual로는 공항 메트로역을 나갈 수 없습니다. 공항 메트로권이나 올라 바르셀로나를 쓰세요.', 'Singles and the T-casual do not open the airport metro gates; use the airport ticket or Hola Barcelona.'),
    ],
  },
  prague: {
    checked: '2026-10',
    source: 'https://pid.cz/en/new-pid-tariff-from-1-january-2026-dont-pay-more-than-you-have-to/',
    rows: [
      r('30분권 (앱 / 종이)', '30 minutes (app / paper)', '36 / 39 CZK'),
      r('90분권 (앱 / 종이)', '90 minutes (app / paper)', '46 / 50 CZK'),
      r('24시간권 (앱 / 종이)', '24 hours (app / paper)', '140 / 150 CZK'),
      r('72시간권 (앱 / 종이)', '72 hours (app / paper)', '340 / 350 CZK'),
    ],
    tips: [
      tip('PID 리타치카(Lítačka) 앱으로 사면 종이표보다 쌉니다. 종이표는 처음 탈 때 펀칭해야 합니다.', 'The PID Lítačka app is cheaper than paper; validate paper tickets when you first board.'),
      tip('공항 급행버스(AE)는 일반 교통권과 요금이 따로입니다.', 'The Airport Express (AE) bus has its own fare.'),
    ],
  },
  amsterdam: {
    checked: '2026-10',
    source: 'https://www.gvb.nl/en/prices',
    rows: [
      r('GVB 1시간권', 'GVB 1-hour ticket', '€3.40'),
      r('GVB 1일권 (24시간)', 'GVB day ticket (24 hours)', '€10.00'),
      r('암스테르담 여행권 1일 (공항 열차 포함)', 'Amsterdam Travel Ticket, 1 day (incl. airport train)', '€20.00'),
      r('암스테르담 & 주변 지역 여행권 1일', 'Amsterdam & Region Travel Ticket, 1 day', '€23.00'),
    ],
    tips: [
      tip('1시간권은 심야 버스에 쓸 수 없습니다. 비접촉 카드로 찍고 탈 때와 내릴 때 모두 찍으세요.', 'The 1-hour ticket is not valid on night buses. With a contactless card, check in and out every ride.'),
    ],
  },
  berlin: {
    checked: '2026-10',
    source: 'https://www.vbb.de/news/neue-fahrpreise-im-vbb-ab-1-januar-2026/',
    rows: [
      r('1회권 AB (2시간, 한 방향)', 'Single AB (2 hours, one direction)', '€4.00'),
      r('단거리권 (지하철 3정거장·버스 6정거장)', 'Short trip (3 rail / 6 bus stops)', '€2.80'),
      r('24시간권 AB', '24-hour ticket AB', '€11.20'),
      r('1회권 ABC (BER 공항 포함)', 'Single ABC (incl. BER airport)', '€5.00'),
    ],
    tips: [
      tip('BER 공항은 C존이라 AB권으로는 안 됩니다. ABC권은 2027년 1월부터 €5.20로 오릅니다.', 'BER airport is in zone C, so AB tickets do not cover it; the ABC single rises to €5.20 in January 2027.'),
    ],
  },
  vienna: {
    checked: '2026-10',
    source: 'https://www.wienerlinien.at/einzelfahrten',
    rows: [
      r('1회권 (앱 / 종이)', 'Single (app / paper)', '€3.00 / €3.20'),
      r('24시간권 (앱 / 종이)', '24 hours Vienna (app / paper)', '€9.70 / €10.20'),
    ],
    tips: [
      tip('2026년부터 48·72시간권이 없어졌습니다. 오래 머물면 7일권을 보세요.', '48- and 72-hour tickets were dropped in 2026; for longer stays look at the 7-day ticket.'),
      tip('시내 구역 표로는 공항(슈베하트)까지 갈 수 없어 구간 추가표가 필요합니다.', 'City-zone tickets do not reach the airport at Schwechat; you need an extension.'),
    ],
  },
  madrid: {
    checked: '2026-10',
    source: 'https://www.crtm.es/billetes-transporte-publico-aeropuerto-madrid',
    rows: [
      r('메트로 1회권 A존 (거리에 따라)', 'Metro single, zone A (by distance)', '€1.50–2.00'),
      r('공항역 추가 요금 (1회권·10회권)', 'Airport supplement (single or 10-trip)', '€3.00'),
    ],
    tips: [
      tip('관광 교통권(1~7일)이 있으면 공항 추가 요금을 내지 않습니다. 2026년 6월부터 개찰구에서 비접촉 카드로 탈 수 있습니다.', 'The Tourist Travel Pass (1–7 days) skips the airport supplement; since June 2026 you can tap a bank card at metro gates.'),
    ],
  },
  budapest: {
    checked: '2026-10',
    source: 'https://bkk.hu/en/tickets-and-passes/prices/',
    rows: [
      r('1회권 (미리 구입)', 'Single ticket (bought in advance)', '500 HUF'),
      r('1회권 (차내·현장 구입)', 'Single bought on the spot', '700 HUF'),
      r('24시간 부다페스트 교통권', '24-hour Budapest travelcard', '2,750 HUF'),
      r('공항버스 100E 1회권', 'Airport bus 100E single', '2,500 HUF'),
    ],
    tips: [
      tip('일반 교통권으로는 공항버스 100E를 탈 수 없습니다. 차내 카드 결제기나 BudapestGO 앱으로 사세요.', 'Ordinary tickets and travelcards are not valid on the 100E; buy its ticket on board by card or in the BudapestGO app.'),
    ],
  },
}

export function getCityFares(cityId: string): CityFares | undefined {
  return FARES[cityId]
}
