// Per-country visit-stamp icon data, extracted from the postage-stamp gallery design.
// Raster entries reference PNGs in public/stamps/{id}.png; svg entries are inline path markup
// for the 3 countries with no usable reference photo (Netherlands, Switzerland, Iceland).
export type StampIcon =
  | { kind: 'raster'; width: number; height: number }
  | { kind: 'svg'; markup: string; width: number; height: number }

export const countryStamps: Record<string, StampIcon> = {
  // North Africa & Middle East: cut from the user's stamp sheet (2026-11-08).
  // The Museum of Islamic Art's stepped block, drawn by hand (no stamp for Qatar on the sheet).
  qa: { kind: 'svg', width: 160, height: 120, markup: `<path d="M30,112 L130,112 L130,92 L30,92 Z M42,92 L118,92 L118,70 L42,70 Z M54,70 L106,70 L106,46 L54,46 Z M64,46 L96,46 L96,26 L64,26 Z M72,26 L88,26 L88,14 L72,14 Z" fill="#8a8a8a"/><path d="M74,88 L74,76 Q80,70 86,76 L86,88 Z M70,40 L70,32 L90,32 L90,40 Z" fill="#f6f2ea"/><path d="M4,114 L156,114" stroke="#8a8a8a" stroke-width="3"/>` },
  // Petra's Treasury between its cliffs, drawn by hand (no usable stamp on the sheet).
  jo: { kind: 'svg', width: 160, height: 120, markup: `<path d="M4,116 L4,8 L30,8 L30,116 Z M130,116 L130,8 L156,8 L156,116 Z M36,116 L36,64 L124,64 L124,116 Z M32,64 L80,48 L128,64 Z M44,48 L44,14 L116,14 L116,48 Z M42,112 L42,70 L46,70 L46,112 Z M56,112 L56,70 L60,70 L60,112 Z M100,112 L100,70 L104,70 L104,112 Z M114,112 L114,70 L118,70 L118,112 Z M72,112 L72,76 Q80,70 88,76 L88,112 Z M50,44 L50,20 L53,20 L53,44 Z  M60,44 L60,20 L63,20 L63,44 Z  M97,44 L97,20 L100,20 L100,44 Z  M107,44 L107,20 L110,20 L110,44 Z M70,44 L70,24 Q80,16 90,24 L90,44 Z" fill="#8a8a8a" fill-rule="evenodd"/><path d="M80,10 L80,4" stroke="#8a8a8a" stroke-width="3"/>` },
  // The Giza pyramids, drawn by hand (the sheet's stamp was too blurry).
  eg: { kind: 'svg', width: 200, height: 110, markup: `<path d="M8,104 L62,30 L116,104 Z M94,104 L134,48 L174,104 Z M168,104 L182,84 L196,104 Z" fill="#8a8a8a"/><path d="M62,30 L50,104 L8,104 Z M134,48 L125,104 L94,104 Z M182,84 L179,104 L168,104 Z" fill="#6f6f6f"/><path d="M2,104 L198,104" stroke="#8a8a8a" stroke-width="3"/>` },
  // El Jem's three tiers of arches, drawn by hand (the sheet's stamp was too blurry).
  tn: { kind: 'svg', width: 200, height: 110, markup: `<path d="M6,104 L6,44 Q100,14 194,44 L194,104 Z M15.5,50.0 L15.5,47.3 A3.0,3.0 0 0 1 21.5,47.3 L21.5,50.0 Z M30.7,49.5 L30.7,43.5 A3.0,3.0 0 0 1 36.7,43.5 L36.7,49.5 Z M45.9,46.4 L45.9,40.4 A3.0,3.0 0 0 1 51.9,40.4 L51.9,46.4 Z M61.1,44.2 L61.1,38.2 A3.0,3.0 0 0 1 67.1,38.2 L67.1,44.2 Z M76.3,42.7 L76.3,36.7 A3.0,3.0 0 0 1 82.3,36.7 L82.3,42.7 Z M91.5,42.1 L91.5,36.1 A3.0,3.0 0 0 1 97.5,36.1 L97.5,42.1 Z M106.7,42.2 L106.7,36.2 A3.0,3.0 0 0 1 112.7,36.2 L112.7,42.2 Z M121.9,43.1 L121.9,37.1 A3.0,3.0 0 0 1 127.9,37.1 L127.9,43.1 Z M137.1,44.7 L137.1,38.7 A3.0,3.0 0 0 1 143.1,38.7 L143.1,44.7 Z M152.3,47.2 L152.3,41.2 A3.0,3.0 0 0 1 158.3,41.2 L158.3,47.2 Z M167.5,50.0 L167.5,44.4 A3.0,3.0 0 0 1 173.5,44.4 L173.5,50.0 Z M182.7,50.0 L182.7,48.5 A3.0,3.0 0 0 1 188.7,48.5 L188.7,50.0 Z M12.0,75.0 L12.0,59.5 A4.5,4.5 0 0 1 21.0,59.5 L21.0,75.0 Z M27.2,75.0 L27.2,59.5 A4.5,4.5 0 0 1 36.2,59.5 L36.2,75.0 Z M42.4,75.0 L42.4,59.5 A4.5,4.5 0 0 1 51.4,59.5 L51.4,75.0 Z M57.6,75.0 L57.6,59.5 A4.5,4.5 0 0 1 66.6,59.5 L66.6,75.0 Z M72.8,75.0 L72.8,59.5 A4.5,4.5 0 0 1 81.8,59.5 L81.8,75.0 Z M88.0,75.0 L88.0,59.5 A4.5,4.5 0 0 1 97.0,59.5 L97.0,75.0 Z M103.2,75.0 L103.2,59.5 A4.5,4.5 0 0 1 112.2,59.5 L112.2,75.0 Z M118.4,75.0 L118.4,59.5 A4.5,4.5 0 0 1 127.4,59.5 L127.4,75.0 Z M133.6,75.0 L133.6,59.5 A4.5,4.5 0 0 1 142.6,59.5 L142.6,75.0 Z M148.8,75.0 L148.8,59.5 A4.5,4.5 0 0 1 157.8,59.5 L157.8,75.0 Z M164.0,75.0 L164.0,59.5 A4.5,4.5 0 0 1 173.0,59.5 L173.0,75.0 Z M179.2,75.0 L179.2,59.5 A4.5,4.5 0 0 1 188.2,59.5 L188.2,75.0 Z M12.0,100.0 L12.0,85.5 A4.5,4.5 0 0 1 21.0,85.5 L21.0,100.0 Z M27.2,100.0 L27.2,85.5 A4.5,4.5 0 0 1 36.2,85.5 L36.2,100.0 Z M42.4,100.0 L42.4,85.5 A4.5,4.5 0 0 1 51.4,85.5 L51.4,100.0 Z M57.6,100.0 L57.6,85.5 A4.5,4.5 0 0 1 66.6,85.5 L66.6,100.0 Z M72.8,100.0 L72.8,85.5 A4.5,4.5 0 0 1 81.8,85.5 L81.8,100.0 Z M88.0,100.0 L88.0,85.5 A4.5,4.5 0 0 1 97.0,85.5 L97.0,100.0 Z M103.2,100.0 L103.2,85.5 A4.5,4.5 0 0 1 112.2,85.5 L112.2,100.0 Z M118.4,100.0 L118.4,85.5 A4.5,4.5 0 0 1 127.4,85.5 L127.4,100.0 Z M133.6,100.0 L133.6,85.5 A4.5,4.5 0 0 1 142.6,85.5 L142.6,100.0 Z M148.8,100.0 L148.8,85.5 A4.5,4.5 0 0 1 157.8,85.5 L157.8,100.0 Z M164.0,100.0 L164.0,85.5 A4.5,4.5 0 0 1 173.0,85.5 L173.0,100.0 Z M179.2,100.0 L179.2,85.5 A4.5,4.5 0 0 1 188.2,85.5 L188.2,100.0 Z" fill="#8a8a8a" fill-rule="evenodd"/>` },
  ma: { kind: 'raster', width: 58, height: 150 },
  il: { kind: 'raster', width: 215, height: 150 },
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
