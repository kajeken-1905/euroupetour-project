export type Lang = 'ko' | 'en'

export type CategoryId =
  | 'fine_dining'
  | 'korean'
  | 'cafe'
  | 'bakery'

/** City / country transit guide modes */
export type TransitModeId =
  | 'metro'
  | 'bus'
  | 'tram'
  | 'train'
  | 'taxi'
  | 'rideshare'
  | 'ferry'
  | 'bike'
  | 'walk'

export interface TransitApp {
  name: string
  url: string
  /** App icon under /public, e.g. `/transit-apps/uber.png` */
  icon?: string
  note?: { ko: string; en: string }
}

/** Country-level common transit rules (shown once per country). */
export interface CountryTransit {
  summary: { ko: string; en: string }
  drivingSide: 'left' | 'right'
  longDistance: { ko: string; en: string }
  nationalPasses?: { ko: string; en: string }
  paymentTip?: { ko: string; en: string }
  apps?: TransitApp[]
}

/** City-level how-to (modes, airport, tickets, apps). */
export interface CityTransit {
  modes: TransitModeId[]
  airportToCity?: { ko: string; en: string }
  howTo: { ko: string; en: string }
  apps: TransitApp[]
  tip?: { ko: string; en: string }
}

/** Airport / railway station / coach station serving a city. */
export interface TransitHub {
  /** Official local name (used for the English UI and the map search). */
  name: string
  ko: string
  /** Where it is when not in the city itself, or a short remark. */
  note?: { ko: string; en: string }
}

export interface CityHubs {
  air?: TransitHub[]
  rail?: TransitHub[]
  bus?: TransitHub[]
  port?: TransitHub[]
}

export type RouteMode = 'train' | 'bus' | 'ferry' | 'mixed' | 'flight'

/** A direct onward connection from one city to another, as seen from one end. */
export interface CityRoute {
  toCityId: string
  mode: RouteMode
  /** Typical fastest journey time in minutes. */
  minutes: number
  /** Seat reservation is compulsory (matters for rail pass holders). */
  reservation: boolean
  /** Departure station/port on this city's side. */
  from?: { ko: string; en: string }
  note?: { ko: string; en: string }
}

export interface Country {
  id: string
  name: { ko: string; en: string }
  /** 해당 나라 공식/공용어로 쓴 국명 */
  nativeName: string
  flag: string
  /** 국기 이미지(SVG) 경로 — 상세 히어로 배경 */
  flagImage: string
  /** 랜드마크 일러스트 배경 이미지 경로 */
  landmarkImage: string
  blurb: { ko: string; en: string }
  /** 인구·면적·수도·화폐 */
  facts: {
    population: { ko: string; en: string }
    area: { ko: string; en: string }
    capital: { ko: string; en: string }
    currency: { ko: string; en: string }
  }
  /** 환율 조회용 ISO 코드 */
  currencyCode: 'GBP' | 'EUR' | 'NOK' | 'SEK' | 'DKK' | 'HUF' | 'CZK' | 'CHF' | 'PLN' | 'ISK' | 'TRY' | 'RON' | 'BAM' | 'RSD' | 'GEL' | 'MKD' | 'ALL' | 'UAH' | 'MDL' | 'AMD' | 'AZN'
  currencySymbol: string
  /** 솅겐 지역 가입 여부 */
  schengen: boolean
  flagColors: {
    primary: string
    secondary: string
    accent: string
    background: string
    text: string
  }
  cityIds: string[]
  /** Optional regional grouping of cities (shown with headings on the country page, in this order). */
  cityGroups?: { title: { ko: string; en: string }; cityIds: string[] }[]
}

export interface CityHighlight {
  id: string
  name: { ko: string; en: string }
  description: { ko: string; en: string }
  image: string
  mapsUrl: string
  /** Optional tour-course grouping; a heading is shown when it changes. */
  group?: { ko: string; en: string }
}

export interface City {
  id: string
  countryId: string
  name: { ko: string; en: string }
  /** 해당 나라 언어(또는 현지 공식 표기) 도시명 */
  nativeName: string
  blurb: { ko: string; en: string }
  highlights: CityHighlight[]
  /** 도시 목록 카드의 한 줄 소개 (없으면 첫 번째 하이라이트 이름) */
  cardTagline?: { ko: string; en: string }
  /** 도시 시그니처(랜드마크) 배경 이미지 */
  signatureImage: string
  /** 지도 핀 좌표 (선택) */
  lat?: number
  lng?: number
}

export interface Place {
  id: string
  cityId: string
  category: CategoryId
  name: string
  description: { ko: string; en: string }
  rating: number
  reviewCount?: number
  address: string
  mapsUrl: string
  lat?: number
  lng?: number
  priceLevel?: string
  /**
   * Optional visited-in-person photo, e.g. `/places/<id>.jpg`. Shown to the
   * right of the rating on the card and on the detail page. When unset, no
   * image is shown.
   */
  image?: string
}

export const CATEGORIES: {
  id: CategoryId
  ko: string
  en: string
}[] = [
  { id: 'fine_dining', ko: '로컬푸드', en: 'Local Food' },
  { id: 'korean', ko: '한국음식점', en: 'Korean Food' },
  { id: 'cafe', ko: '카페', en: 'Café' },
  { id: 'bakery', ko: '베이커리', en: 'Bakery' },
]
