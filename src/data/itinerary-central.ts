import type { RawItinerary } from './itinerary-helper'

/** Benelux, Germany, Switzerland, Liechtenstein and Austria. */
export const itineraryCentral: Record<string, RawItinerary> = {
  amsterdam: {
    days: [
      ['담 광장과 요르단|Dam Square & Jordaan', 1, 5, 4, 2],
      ['박물관 광장|Museum Quarter', 7, 6, 3],
    ],
  },
  rotterdam: [3, 1, 4, 2, 5, 6],
  'the-hague': {
    days: [
      ['시내|City centre', 5, 3, 7, 1, 2],
      ['마뒤로담과 스헤베닝언|Madurodam & Scheveningen', 6, 4],
    ],
  },
  utrecht: [3, 4, 2, 1, 5, 6],
  haarlem: [3, 1, 4, 5, 6, 2],
  delft: [3, 1, 5, 4, 6, 2],
  maastricht: [6, 1, 4, 3, 5, 2],
  giethoorn: [1, 2, 3, 4],
  'luxembourg-city': [6, 5, 1, 2, 3, 7, 4],
  vianden: [3, 1, 4, 2],
  echternach: [4, 2, 3, 1],
  remich: [1, 3, 2, 4],
  brussels: [3, 4, 2, 5, 7, 6, 1, 8],
  bruges: [1, 2, 5, 3, 6, 4],
  ghent: [6, 2, 4, 1, 3, 5],
  antwerp: [1, 6, 2, 4, 3, 5],
  leuven: [2, 4, 1, 3, 6, 5],
  dinant: [2, 1, 4, 3],
  vienna: {
    days: [
      ['구시가와 링|Old town & the Ring', 2, 5, 4, 7],
      ['쇤브룬과 벨베데레|Schönbrunn & Belvedere', 1, 3, 6],
    ],
  },
  salzburg: [2, 4, 3, 6, 7, 5, 1],
  innsbruck: [4, 1, 3, 2],
  graz: [3, 2, 1, 4, 5],
  hallstatt: [2, 4, 5, 3, 1],
  zurich: { days: [['', 9, 6, 3, 8, 7, 1, 2, 5, 4]], trips: [['린트 초콜릿 박물관|Lindt Home of Chocolate', 10]] },
  geneva: [8, 3, 2, 7, 1, 5, 6, 4],
  bern: [4, 1, 2, 6, 3, 5],
  lucerne: { days: [['', 6, 7, 1, 4, 3, 5]], trips: [['호수 유람과 리기산|Lake cruise & Rigi', 2, 8]] },
  interlaken: { days: [['', 4, 1, 3]], trips: [['융프라우요흐|Jungfraujoch', 5]] },
  berlin: {
    days: [
      ['미테|Mitte', 4, 1, 5, 2],
      ['장벽 기념관과 샤를로텐부르크|Wall Memorial & Charlottenburg', 3, 6, 7],
    ],
  },
  munich: {
    days: [
      ['시내|City centre', 2, 4, 6, 1, 5],
      ['님펜부르크|Nymphenburg', 3],
    ],
  },
  hamburg: [4, 1, 3, 2, 5],
  cologne: [1, 4, 2, 5, 3],
  frankfurt: [6, 2, 1, 3, 5],
  basel: [5, 2, 1, 3, 4],
  zermatt: [3, 5, 1, 2, 4],
  lausanne: [1, 5, 4, 2, 3],
  dresden: [1, 3, 2, 4, 5],
  heidelberg: [1, 2, 5, 4, 3],
  nuremberg: [1, 5, 2, 3, 4],
  fussen: [2, 3, 1, 4, 5],
  lugano: [2, 5, 1, 4, 3],
  montreux: { days: [['', 4, 3, 2, 1]], trips: [['로셰드네|Rochers-de-Naye', 5]] },
  grindelwald: {
    days: [
      ['피르스트와 마을|First & the village', 2, 5, 4],
      ['멘리헨|Männlichen', 3, 1],
    ],
  },
  'st-moritz': [2, 5, 1, 4, 3],
  stuttgart: {
    days: [
      ['바트 칸슈타트|Bad Cannstatt', 1, 4],
      ['시내와 포르쉐|City centre & Porsche', 3, 5, 2],
    ],
  },
  leipzig: [2, 3, 1, 5, 4],
  rothenburg: [1, 4, 2, 3, 5],
  potsdam: [3, 1, 2, 5],
  vaduz: [6, 2, 3, 4, 1, 5],
  schaan: [2, 1, 3, 4, 5],
  malbun: [5, 3, 2, 4],
}
