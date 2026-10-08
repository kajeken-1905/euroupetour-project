#!/bin/sh
# Rebuild scripts/itinerary/cities.json from the app data.
cd "$(dirname "$0")" || exit 1
npx esbuild dump.ts --bundle --platform=node --format=esm --outfile=.dump.mjs --log-level=error && node .dump.mjs > cities.json
rm -f .dump.mjs
