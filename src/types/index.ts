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
  /** Not listed in the Korean App Store (needs a local store account). */
  noKrStore?: boolean
}

/** Country-level common transit rules (shown once per country). */
export interface CountryTransit {
  summary: { ko: string; en: string }
  drivingSide: 'left' | 'right'
  longDistance: { ko: string; en: string }
  nationalPasses?: { ko: string; en: string }
  paymentTip?: { ko: string; en: string }
  apps?: TransitApp[]
  /** Step-by-step how-to for the country's main transport app, from the operator's help pages. */
  appGuide?: { title: { ko: string; en: string }; steps: { ko: string; en: string }[]; source: string }
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

type Text = { ko: string; en: string }

/** Practical, country-wide information a visitor needs on the ground. */
export interface CountryEssentials {
  /** Emergency numbers, most important first. */
  emergency: { number: string; label: Text }[]
  /** Korean embassy covering this country (may sit in a neighbouring country). */
  embassy?: {
    name: Text
    address: string
    phone: string
    /** Duty phone outside office hours. */
    afterHours?: string
    note?: Text
    /** Official site the contact details were taken from. */
    source: string
  }
  power: Text
  tipping: Text
  water: Text
  shops: Text
  toilets: Text
  time: Text
  safety: Text
  entry: Text
  telecom: Text
}

export type RouteMode = 'train' | 'bus' | 'ferry' | 'mixed' | 'flight'

/** A funicular, lift or city cable car. */
export interface Funicular {
  city: string
  name: string
  /** 'ko|en' */
  route: string
  /** 'ko|en'; whether the city transit ticket is valid */
  ticket?: string
  /** 'ko|en'; closures */
  status?: string
}

/** A scenic or mountain railway shown on the cities it starts from or is reached from. */
export interface ScenicTrain {
  id: string
  name: string
  cities: string[]
  /** Other countries the line runs into, beyond those of its app cities */
  alsoIn?: string[]
  /** Extra words the search screen matches, e.g. a film the line appears in */
  aliases?: string[]
  /** 'ko|en' */
  route: string
  /** 'ko|en'; only for lines that run part of the year */
  season?: string
  /** 'ko|en'; rough fare, with its source when not the operator's own */
  price?: string
  /** 'ko|en'; Interrail/Eurail and Swiss Travel Pass terms */
  pass?: string
  /** Seat reservation (or a timed ticket) is required */
  resv: boolean
  url: string
}

/** A night-train service; `lines` are the app cities it calls at, in order. */
export interface NightTrain {
  id: string
  name: string
  operator: string
  url: string
  lines: string[][]
  /** 'ko|en' */
  note?: string
  /** 'ko|en'; rough fares, which move with date and demand */
  price?: string
  /** 'ko|en'; what Interrail/Eurail holders pay */
  pass?: string
}

/** One way between an airport, station or port and the city centre. All text is 'ko|en'. */
export interface GatewayOption {
  mode: 'metro' | 'train' | 'bus' | 'tram' | 'taxi' | 'walk' | 'boat'
  name: string
  route: string
  /** Journey time, frequency and hours */
  time?: string
  fare?: string
  /** How and where to buy or pay */
  ticket?: string
}

/** An airport, main railway station or ferry port, shown with the city's sights. Text is 'ko|en'. */
export interface Gateway {
  id: string
  cityId: string
  kind: 'air' | 'rail' | 'port'
  name: string
  /** IATA code for airports */
  code?: string
  /** Photo for the card (public/gateways); an icon is shown without one */
  image?: string
  /** International airport, listed on the country screen */
  intl?: boolean
  about: string
  options: GatewayOption[]
  note?: string
  /** Search words for Google Maps */
  maps: string
  /** Existing sight card for the same place; the ways in are shown on that card instead of a card of their own */
  highlightId?: string
  site?: string
  /** Month (YYYY-MM) the fares were checked */
  checked: string
}

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
  currencyCode: 'GBP' | 'EUR' | 'NOK' | 'SEK' | 'DKK' | 'HUF' | 'CZK' | 'CHF' | 'PLN' | 'ISK' | 'TRY' | 'RON' | 'BAM' | 'RSD' | 'GEL' | 'MKD' | 'ALL' | 'UAH' | 'MDL' | 'AMD' | 'AZN' | 'RUB' | 'BYN'
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
  /** A small sight added before the bigger ones: planned after every other sight, whatever its id number. */
  minor?: true
}

export type SeasonRating = 'best' | 'ok' | 'avoid'

/** One month of a city's travel-season summary. */
export interface SeasonMonth {
  high: number
  low: number
  wetDays: number
  daylight: number
  rating: SeasonRating
}

export interface CitySeason {
  months: SeasonMonth[]
  note?: { ko: string; en: string }
}

/** One day (or side trip) of a suggested city itinerary. */
export interface ItineraryDay {
  title?: { ko: string; en: string }
  /** Highlight ids in walking order. */
  stops: string[]
  /** Out-of-town trip that needs its own transport. */
  trip?: boolean
}

export interface CityItinerary {
  days: ItineraryDay[]
}

/** Practical visiting info for a highlight (shown under its card). */
export interface HighlightVisit {
  /** Suggested time on site in minutes, [min, max]. */
  minutes?: [number, number]
  /** 'daily', or comma-separated closed weekdays such as 'mon' or 'mon,tue'. */
  closed?: string
  booking?: 'required' | 'recommended' | 'none'
  /** Official website. */
  site?: string
  /** Official ticket / reservation page. */
  tickets?: string
  note?: { ko: string; en: string }
  /** Month (YYYY-MM) the closed days and booking rule were last checked against the official site. */
  checked?: string
  /** Closed for a long time (renovation or for good), so plans leave it out. */
  shut?: boolean
  /** Temporary notices (closures, works, special hours), shown up to and including `until` (YYYY-MM-DD). */
  notices?: { text: { ko: string; en: string }; until: string }[]
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

/** What lists, the map and the checklist need of a city — see `data/cityIndex.ts`. */
export type CityBrief = Omit<City, 'blurb' | 'highlights' | 'cardTagline'> & {
  cardTagline: { ko: string; en: string }
}

export interface Place {
  id: string
  cityId: string
  category: CategoryId
  name: string
  description: { ko: string; en: string }
  /** Michelin Guide distinction, set only when the guide's own site confirms it. */
  michelin?: Michelin
  address: string
  mapsUrl: string
  lat?: number
  lng?: number
  priceLevel?: string
  /**
   * Optional visited-in-person photo, e.g. `/places/<id>.jpg`. Shown to the
   * right of the badge on the card and on the detail page. When unset, no
   * image is shown.
   */
  image?: string
}

export type Michelin = 'star3' | 'star2' | 'star1' | 'bib'

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

/** A country's top football league (or a note when it has none), from the league's official site. */
export interface FootballLeague {
  /** Key shared with FootballClub.league; absent for a country without a league of its own. */
  key?: string
  name: { ko: string; en: string }
  /** Part of the country it covers (the UK's four leagues). */
  region?: { ko: string; en: string }
  /** Clubs this season, when the official site states it. */
  clubs?: number
  /** First and last matchday (YYYY-MM-DD), when published. */
  start?: string
  end?: string
  /** Played within a calendar year (spring to autumn) rather than August to May. */
  calendarYear?: boolean
  site?: string
  note?: { ko: string; en: string }
}

/** A top-division club whose home ground is in or beside a city. */
export interface FootballClub {
  /** Wikidata item. */
  id: string
  name: { ko: string; en: string }
  league: string
  founded?: number
  /**
   * Crest served from /crests/<id>.png: a public-domain or freely licensed file from Wikimedia Commons, or
   * (license 'permission') one the club allowed us to use, with `source` pointing at the club's site.
   */
  crest?: { license: string; author?: string; source: string }
  stadium?: { name: { ko: string; en: string }; capacity?: number; lat: number; lng: number }
  /** Official website. */
  site?: string
  /** Stadium tour, or the club museum, on an official page. */
  tour?: { kind: 'tour' | 'museum'; url: string; note?: { ko: string; en: string } }
  /** The neighbouring town the ground is in, when it is not the city itself. */
  suburb?: { ko: string; en: string }
  note?: { ko: string; en: string }
}
