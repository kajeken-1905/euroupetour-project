# Football data (src/data/football.ts)

Top-division clubs of the 2026-27 season (2026 for spring-to-autumn leagues) whose home ground is in or beside
one of the app's cities, and each country's league. Built 2026-10-14.

How it was made (run from a scratch folder; Wikimedia requests need the UA in `parse.py`):
1. `leagues.py` lists each league's Wikipedia season article; `parse.py` reads its clubs/venues table.
2. Wikidata (`wd.py`) adds founding year, current home ground (no end date), capacity, coordinates, website;
   `build.py` matches grounds to the nearest city (≤ 15 km, nearby towns tagged as suburbs, hand-reviewed).
3. Membership was checked league by league on the official league sites (`leagues_verified.json`, with sources);
   grounds were cross-checked against the club article infobox and, where they disagreed, the club's own site.
4. Homepages were opened with curl; tours/museums come from links on the club sites (`crawl.py`) or a search
   restricted to the club's domain — only official pages are kept.
5. `names.py` holds Korean names written by hand and the per-club decisions; `gen_ts.py keep.json → football.ts`.

`keep.json` is the reviewed club list the generator reads. Next season: redo steps 1–3 (promotion/relegation).
