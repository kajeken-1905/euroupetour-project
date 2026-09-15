/**
 * Maps this app's `Country.id` to the numeric ISO 3166-1 country code used
 * as the feature `id` in `world-atlas`'s TopoJSON (countries-50m.json).
 * Kosovo ('xk') has no ISO numeric code — matched separately by name in
 * EuropeMap.tsx via KOSOVO_NAME.
 */
export const countryIsoMap: Record<string, string> = {
  fr: '250',
  uk: '826',
  ie: '372',
  be: '056',
  nl: '528',
  lu: '442',
  mc: '492',
  de: '276',
  ch: '756',
  at: '040',
  li: '438',
  cz: '203',
  sk: '703',
  hu: '348',
  pl: '616',
  es: '724',
  pt: '620',
  ad: '020',
  it: '380',
  va: '336',
  mt: '470',
  gr: '300',
  cy: '196',
  dk: '208',
  se: '752',
  no: '578',
  fi: '246',
  is: '352',
  ee: '233',
  lv: '428',
  lt: '440',
  hr: '191',
  si: '705',
  ba: '070',
  me: '499',
  rs: '688',
  mk: '807',
  al: '008',
  bg: '100',
  ro: '642',
  tr: '792',
  ge: '268',
  ua: '804',
  md: '498',
  am: '051',
  az: '031',
  sm: '674',
}

/** world-atlas has no ISO id for Kosovo; its TopoJSON feature is matched by this name instead. */
export const KOSOVO_NAME = 'Kosovo'
export const KOSOVO_COUNTRY_ID = 'xk'

/**
 * Countries whose true polygon renders as only a few pixels at this map's
 * default zoom — shown as a labeled dot marker instead of a fill so they
 * stay tappable. Confirmed by visual inspection of the rendered map.
 */
export const MICRO_STATE_IDS = new Set(['va', 'mc', 'sm', 'li', 'ad'])
