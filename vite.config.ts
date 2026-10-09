import { createHash } from 'node:crypto'
import { readdirSync, readFileSync, statSync, writeFileSync } from 'node:fs'
import { join, relative, sep } from 'node:path'
import { defineConfig, type Plugin } from 'vite'
import react from '@vitejs/plugin-react'

/** Folders saved on first visit (app shell). Photos are cached on demand instead. */
const PRECACHE_DIRS = ['assets', 'flags', 'stamps', 'transit-apps', 'phrases', 'icons']
const PRECACHE_FILES = ['index.html', 'favicon.svg', 'icons.svg', 'manifest.webmanifest', 'image-sizes.json']
/** Photo folders whose file sizes are published so the app can show download sizes. */
const IMAGE_DIRS = ['cities', 'highlights', 'places', 'landmarks']

function walk(dir: string): string[] {
  return readdirSync(dir, { withFileTypes: true }).flatMap((entry) =>
    entry.isDirectory() ? walk(join(dir, entry.name)) : [join(dir, entry.name)],
  )
}

/** Writes `image-sizes.json` and the service worker (`sw.js`) into the build output. */
function offlinePlugin(): Plugin {
  let outDir = 'dist'
  return {
    name: 'offline',
    apply: 'build',
    configResolved(config) {
      outDir = config.build.outDir
    },
    closeBundle() {
      const rel = (file: string) => relative(outDir, file).split(sep).join('/')
      const files = (dirs: string[]) =>
        dirs.flatMap((dir) => {
          try {
            return walk(join(outDir, dir))
          } catch {
            return []
          }
        })

      const sizes: Record<string, number> = {}
      for (const file of files(IMAGE_DIRS)) sizes[rel(file)] = statSync(file).size
      writeFileSync(join(outDir, 'image-sizes.json'), JSON.stringify(sizes))

      const precache = [...PRECACHE_FILES, ...files(PRECACHE_DIRS).map(rel)].filter((path) => !path.endsWith('.DS_Store'))
      const hash = createHash('sha256')
      for (const path of precache) hash.update(path).update(readFileSync(join(outDir, path)))
      const sw = readFileSync('src/offline/sw.template.js', 'utf8')
        .replace('__VERSION__', hash.digest('hex').slice(0, 12))
        .replace('__PRECACHE__', JSON.stringify(precache))
      writeFileSync(join(outDir, 'sw.js'), sw)
    },
  }
}

// GitHub Pages project site: https://kajeken-1905.github.io/euroupetour-project/
export default defineConfig({
  base: '/euroupetour-project/',
  plugins: [react(), offlinePlugin()],
})
