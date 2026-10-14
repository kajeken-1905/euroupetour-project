import type { Lang } from '../types'

/**
 * Big and small title for a country or city: in Korean the Korean name with the English and local names
 * beneath; in English the English name with the local name beneath (no Korean).
 */
export function titleNames(name: { ko: string; en: string }, nativeName: string, lang: Lang) {
  const main = name[lang]
  const rest = lang === 'ko' ? [name.en, nativeName] : [nativeName]
  const alt = rest.filter((v, i, arr) => v && v !== main && arr.indexOf(v) === i).join(' · ')
  return { main, alt }
}

/** "프랑스 · France" in Korean, "France" in English. */
export function bilingualName(name: { ko: string; en: string }, lang: Lang) {
  return lang === 'ko' && name.en !== name.ko ? `${name.ko} · ${name.en}` : name[lang]
}
