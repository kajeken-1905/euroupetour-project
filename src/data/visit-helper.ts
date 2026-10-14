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
  /** month ('2026-10') the closed days and booking rule were checked against the official site */
  k?: string
  /** shut for a long time (renovation, permanent closure): left out of plans */
  z?: true
  /** notices that stop being true after a date: ['ko|en', 'YYYY-MM-DD' (last day shown)] */
  x?: [string, string][]
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
  if (o.k) out.checked = o.k
  if (o.z) out.shut = true
  if (o.n) {
    const [ko, en] = o.n.split('|')
    out.note = { ko, en: en ?? ko }
  }
  if (o.x) {
    out.notices = o.x.map(([text, until]) => {
      const [ko, en] = text.split('|')
      return { text: { ko, en: en ?? ko }, until }
    })
  }
  return out
}
