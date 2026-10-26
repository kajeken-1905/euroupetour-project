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
  // Hand-drawn like gi: the Great Laxey Wheel (im), Mont Orgueil on its headland (je), Castle Cornet's tower (gg).
  im: { kind: 'svg', width: 150, height: 150, markup: `<circle cx="75" cy="62" r="52" fill="none" stroke="#8a8a8a" stroke-width="6"/>
<circle cx="75" cy="62" r="8" fill="#8a8a8a"/>
<g stroke="#8a8a8a" stroke-width="3"><line x1="75" y1="10" x2="75" y2="114"/><line x1="23" y1="62" x2="127" y2="62"/><line x1="38" y1="25" x2="112" y2="99"/><line x1="112" y1="25" x2="38" y2="99"/></g>
<path d="M30,146 L42,96 L108,96 L120,146 Z" fill="#8a8a8a"/>
<path d="M66,146 L66,124 Q75,112 84,124 L84,146 Z" fill="#c9c9c9"/>` },
  je: { kind: 'svg', width: 200, height: 130, markup: `<path d="M0,126 L30,112 L60,100 L80,92 L150,92 L176,104 L200,116 L200,126 Z" fill="#a3a3a3"/>
<path d="M66,92 L66,52 L74,52 L74,44 L82,44 L82,52 L92,52 L92,30 L100,30 L100,22 L108,22 L108,30 L116,30 L116,52 L126,52 L126,44 L134,44 L134,52 L142,52 L142,92 Z" fill="#8a8a8a"/>
<rect x="100" y="60" width="6" height="12" fill="#c9c9c9"/><rect x="78" y="66" width="5" height="9" fill="#c9c9c9"/>` },
  gg: { kind: 'svg', width: 180, height: 140, markup: `<path d="M0,136 L20,118 L160,118 L180,136 Z" fill="#a3a3a3"/>
<path d="M30,118 L30,84 L150,84 L150,118 Z" fill="#8a8a8a"/>
<path d="M30,84 L30,76 L38,76 L38,84 M50,84 L50,76 L58,76 L58,84 M122,84 L122,76 L130,76 L130,84 M142,84 L142,76 L150,76 L150,84" fill="#8a8a8a" stroke="#8a8a8a" stroke-width="2"/>
<path d="M72,84 L72,36 L108,36 L108,84 Z" fill="#8a8a8a"/>
<path d="M68,36 L68,28 L76,28 L76,36 M86,36 L86,28 L94,28 L94,36 M104,36 L104,28 L112,28 L112,36" fill="#8a8a8a" stroke="#8a8a8a" stroke-width="2"/>
<rect x="86" y="50" width="8" height="14" fill="#c9c9c9"/>` },
  // Hand-drawn: Múlafossur falling from the cliff into the sea (fo); an iceberg on the water (gl).
  fo: { kind: 'svg', width: 200, height: 130, markup: `<path d="M0,130 L0,40 L40,30 L80,36 L110,50 L110,130 Z" fill="#8a8a8a"/>
<path d="M34,32 L50,22 L62,28 L54,34 Z" fill="#a3a3a3"/>
<rect x="104" y="50" width="8" height="66" fill="#c9c9c9"/>
<path d="M96,116 Q108,106 120,116 L200,116 L200,130 L96,130 Z" fill="#a3a3a3"/>` },
  gl: { kind: 'svg', width: 200, height: 130, markup: `<path d="M30,96 L58,40 L78,54 L98,14 L124,46 L140,36 L172,96 Z" fill="#8a8a8a"/>
<path d="M98,14 L106,60 L92,96 L72,96 L84,60 Z" fill="#a3a3a3"/>
<path d="M0,96 L200,96 L200,104 L0,104 Z" fill="#8a8a8a"/>
<path d="M50,104 L150,104 L128,126 L74,126 Z" fill="#c9c9c9"/>` },
  // Hand-drawn: St Basil's onion domes (ru), Mir Castle's towers (by), Selimiye's twin minarets (xc).
  ru: { kind: 'svg', width: 180, height: 170, markup: `<rect x="20" y="110" width="140" height="56" fill="#8a8a8a"/>
<path d="M90,20 Q112,48 90,62 Q68,48 90,20 Z" fill="#8a8a8a"/><rect x="82" y="62" width="16" height="48" fill="#8a8a8a"/><line x1="90" y1="6" x2="90" y2="20" stroke="#8a8a8a" stroke-width="3"/>
<path d="M44,56 Q62,78 44,90 Q26,78 44,56 Z" fill="#a3a3a3"/><rect x="38" y="90" width="12" height="20" fill="#a3a3a3"/>
<path d="M136,56 Q154,78 136,90 Q118,78 136,56 Z" fill="#a3a3a3"/><rect x="130" y="90" width="12" height="20" fill="#a3a3a3"/>
<path d="M90,126 Q98,130 98,140 L98,166 L82,166 L82,140 Q82,130 90,126 Z" fill="#c9c9c9"/>` },
  by: { kind: 'svg', width: 190, height: 150, markup: `<rect x="40" y="70" width="110" height="76" fill="#8a8a8a"/>
<rect x="14" y="40" width="34" height="106" fill="#8a8a8a"/><rect x="142" y="40" width="34" height="106" fill="#8a8a8a"/>
<path d="M14,40 L31,14 L48,40 Z M142,40 L159,14 L176,40 Z" fill="#a3a3a3"/>
<rect x="78" y="30" width="34" height="40" fill="#8a8a8a"/><path d="M78,30 L95,6 L112,30 Z" fill="#a3a3a3"/>
<path d="M86,146 L86,116 Q95,104 104,116 L104,146 Z" fill="#c9c9c9"/>` },
  xc: { kind: 'svg', width: 190, height: 160, markup: `<path d="M40,156 L40,84 L60,60 L72,70 L95,40 L118,70 L130,60 L150,84 L150,156 Z" fill="#8a8a8a"/>
<rect x="14" y="20" width="12" height="136" fill="#a3a3a3"/><path d="M14,20 L20,4 L26,20 Z" fill="#a3a3a3"/>
<rect x="164" y="20" width="12" height="136" fill="#a3a3a3"/><path d="M164,20 L170,4 L176,20 Z" fill="#a3a3a3"/>
<path d="M82,156 L82,112 Q95,96 108,112 L108,156 Z" fill="#c9c9c9"/>` },
  // The Rock of Gibraltar in its familiar profile, drawn by hand (no reference stamp exists).
  gi: { kind: 'svg', width: 200, height: 112, markup: `<path d="M4,108 L4,100 L18,98 L30,92 L38,70 L44,40 L50,22 L58,12 L66,8 L74,12 L84,22 L98,30 L114,38 L132,48 L150,60 L168,74 L184,88 L196,100 L196,108 Z" fill="#8a8a8a"/>
<path d="M44,40 L50,22 L58,12 L66,8 L62,30 L56,52 L48,74 L40,92 Z" fill="#a3a3a3"/>
<path d="M4,108 L196,108" stroke="#8a8a8a" stroke-width="4"/>` },
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
