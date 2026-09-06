# Place photos

Photos you took in person go here. Nothing is shown for a place until you add one.

## How to add a photo

1. Put the image file in this folder, e.g. `athens-bakery-1.jpg`
   (square-ish crops look best — cards render 104×104, detail 140×140).
2. Set `image` on that `place()` entry in `src/data/places-*.ts`:

   ```ts
   place('athens-bakery-1', 'athens', 'bakery', 'Takis Bakery', 4.7,
     'Misaraliotou 14, Athens 117 42', '…', '…',
     { reviewCount: 170, image: '/places/athens-bakery-1.jpg' })
   ```

   (`image` is an optional field on `Place`; the path can be anything under
   `/places/…`, it does not have to match the id.)

Place ids follow `<city>-<category>-<n>`, e.g. `salzburg-fine_dining-2`,
`izmir-cafe-1`, `valletta-korean-1`.
