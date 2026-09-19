// Per-country visit-stamp icon data, extracted from the postage-stamp gallery design.
// Raster entries reference PNGs in public/stamps/{id}.png; svg entries are inline path markup
// for the 3 countries with no usable reference photo (Netherlands, Switzerland, Iceland).
export type StampIcon =
  | { kind: 'raster'; width: number; height: number }
  | { kind: 'svg'; markup: string; width: number; height: number }

export const countryStamps: Record<string, StampIcon> = {
  ad: { kind: 'raster', width: 210, height: 150 },
  al: { kind: 'raster', width: 148, height: 180 },
  am: { kind: 'raster', width: 194, height: 179 },
  at: { kind: 'raster', width: 88, height: 144 },
  az: { kind: 'raster', width: 203, height: 173 },
  ba: { kind: 'raster', width: 177, height: 128 },
  be: { kind: 'raster', width: 132, height: 146 },
  bg: { kind: 'raster', width: 145, height: 125 },
  cy: { kind: 'raster', width: 116, height: 121 },
  cz: { kind: 'raster', width: 155, height: 77 },
  de: { kind: 'raster', width: 105, height: 86 },
  dk: { kind: 'raster', width: 89, height: 128 },
  ee: { kind: 'raster', width: 107, height: 115 },
  es: { kind: 'raster', width: 83, height: 122 },
  fi: { kind: 'raster', width: 136, height: 119 },
  fr: { kind: 'raster', width: 62, height: 128 },
  ge: { kind: 'raster', width: 220, height: 183 },
  gr: { kind: 'raster', width: 149, height: 106 },
  hr: { kind: 'raster', width: 65, height: 84 },
  hu: { kind: 'raster', width: 164, height: 104 },
  ie: { kind: 'raster', width: 121, height: 100 },
  it: { kind: 'raster', width: 169, height: 100 },
  li: { kind: 'raster', width: 164, height: 102 },
  lt: { kind: 'raster', width: 164, height: 95 },
  lu: { kind: 'raster', width: 177, height: 104 },
  lv: { kind: 'raster', width: 52, height: 115 },
  mc: { kind: 'raster', width: 157, height: 96 },
  md: { kind: 'raster', width: 185, height: 179 },
  me: { kind: 'raster', width: 108, height: 117 },
  mk: { kind: 'raster', width: 177, height: 92 },
  mt: { kind: 'raster', width: 173, height: 171 },
  no: { kind: 'raster', width: 145, height: 128 },
  pl: { kind: 'raster', width: 122, height: 108 },
  pt: { kind: 'raster', width: 91, height: 125 },
  ro: { kind: 'raster', width: 133, height: 125 },
  rs: { kind: 'raster', width: 146, height: 125 },
  se: { kind: 'raster', width: 136, height: 121 },
  si: { kind: 'raster', width: 177, height: 94 },
  sk: { kind: 'raster', width: 155, height: 92 },
  sm: { kind: 'raster', width: 153, height: 359 },
  tr: { kind: 'raster', width: 147, height: 107 },
  ua: { kind: 'raster', width: 221, height: 240 },
  uk: { kind: 'raster', width: 48, height: 124 },
  va: { kind: 'raster', width: 226, height: 234 },
  xk: { kind: 'raster', width: 191, height: 168 },
  nl: { kind: 'svg', width: 80, height: 116, markup: `<path d="M32,108 L36,52 L44,52 L48,108 Z" fill="#8a8a8a"/>
<path d="M35,52 L40,42 L45,52 Z" fill="#8a8a8a"/>
<circle cx="40" cy="48" r="4" fill="#8a8a8a"/>
<g stroke="#8a8a8a" stroke-width="5" stroke-linecap="round">
<line x1="40" y1="48" x2="66" y2="22"/>
<line x1="40" y1="48" x2="66" y2="74"/>
<line x1="40" y1="48" x2="14" y2="74"/>
<line x1="40" y1="48" x2="14" y2="22"/>
</g>
<rect x="26" y="104" width="28" height="4" fill="#8a8a8a"/>` },
  ch: { kind: 'svg', width: 80, height: 116, markup: `<path d="M52,20 L34,70 L10,108 L74,108 Z" fill="#8a8a8a"/>
<path d="M52,20 L44,42 L52,50 L58,40 Z" fill="#f1e9d3" opacity="0.55"/>` },
  is: { kind: 'svg', width: 80, height: 116, markup: `<path d="M10.0,108 L10.0,64.0 L14.3,54.0 L18.6,64.0 L18.6,108 Z" fill="#8a8a8a"/><path d="M18.6,108 L18.6,54.0 L22.9,44.0 L27.2,54.0 L27.2,108 Z" fill="#8a8a8a"/><path d="M27.2,108 L27.2,44.0 L31.5,34.0 L35.8,44.0 L35.8,108 Z" fill="#8a8a8a"/><path d="M35.8,108 L35.8,34.0 L40.1,24.0 L44.4,34.0 L44.4,108 Z" fill="#8a8a8a"/><path d="M44.4,108 L44.4,44.0 L48.7,34.0 L53.0,44.0 L53.0,108 Z" fill="#8a8a8a"/><path d="M53.0,108 L53.0,54.0 L57.3,44.0 L61.6,54.0 L61.6,108 Z" fill="#8a8a8a"/><path d="M61.6,108 L61.6,64.0 L65.9,54.0 L70.2,64.0 L70.2,108 Z" fill="#8a8a8a"/>` },
}
