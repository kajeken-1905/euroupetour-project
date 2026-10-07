import type { RouteMode } from '../types'
import type { RawRoute } from './routes'

/** Compact builder: stations and note are 'ko|en' strings. */
export function r(
  a: string,
  b: string,
  mode: RouteMode,
  minutes: number,
  opts: { resv?: boolean; fa?: string; fb?: string; n?: string } = {},
): RawRoute {
  return [a, b, mode, minutes, opts.resv ?? false, opts.fa, opts.fb, opts.n]
}
