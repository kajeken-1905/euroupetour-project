# Flag images (public/flags/*.svg)

Replaced 2026-10-24 with the national flags from Wikimedia Commons,
`https://commons.wikimedia.org/wiki/Special:FilePath/Flag_of_<Country>.svg`
(e.g. Flag_of_Spain.svg, Flag_of_the_United_Kingdom.svg, Flag_of_the_Vatican_City.svg).
National flags on Commons are in the public domain.

Two edits on each file's root <svg>:
- `viewBox="0 0 W H"` added where the file only had width/height, so it scales.
- `preserveAspectRatio="xMidYMid slice"` so the flag fills the box on the map (country outline clip)
  instead of sitting letterboxed in the middle.
- gi.svg — File:Flag_of_Gibraltar.svg (public domain), added 2026-10-26
- im.svg — File:Flag_of_the_Isle_of_Man.svg (CC0), added 2026-10-26
- je.svg — File:Flag_of_Jersey.svg (public domain), added 2026-10-26
- gg.svg — File:Flag_of_Guernsey.svg (CC0), added 2026-10-26
