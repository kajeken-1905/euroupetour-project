import type { HighlightVisit } from '../types'

interface Opts {
  /** closed: 'daily' or weekdays such as 'mon' / 'mon,tue' */
  c?: string
  /** booking: req | rec | no */
  b?: 'req' | 'rec' | 'no'
  /** official site */
  s?: string
  /** official ticket page */
  t?: string
  /** note as 'ko|en' */
  n?: string
}

const BOOKING = { req: 'required', rec: 'recommended', no: 'none' } as const

/** v(minMinutes, maxMinutes, opts) — pass 0, 0 to omit the suggested time. */
export function v(min: number, max: number, o: Opts = {}): HighlightVisit {
  const out: HighlightVisit = {}
  if (max > 0) out.minutes = [min, max]
  if (o.c) out.closed = o.c
  if (o.b) out.booking = BOOKING[o.b]
  if (o.s) out.site = o.s
  if (o.t) out.tickets = o.t
  if (o.n) {
    const [ko, en] = o.n.split('|')
    out.note = { ko, en: en ?? ko }
  }
  return out
}
