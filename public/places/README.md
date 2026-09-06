# Place photos

Drop a signature-dish / storefront photo here as `<place.id>.jpg` and it will
appear automatically on the place card (right of the Google rating) and on the
place detail page — no data edits needed.

- Filename must match the place `id` exactly, e.g. `athens-bakery-1.jpg`.
- Square-ish crops look best (cards render at 104×104, detail at 140×140).
- Any place without a matching file shows a category placeholder tile instead.
- To point at a different path/name, set `image: '/places/whatever.jpg'` on that
  `place()` entry.

Place ids follow `<city>-<category>-<n>`, e.g. `salzburg-fine_dining-2`,
`izmir-cafe-1`, `valletta-korean-1`.
