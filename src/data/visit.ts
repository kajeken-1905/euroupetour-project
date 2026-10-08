import type { HighlightVisit } from '../types'
import { visitFr } from './visit-fr'
import { visitUk } from './visit-uk'
import { visitCh } from './visit-ch'
import { visitIt } from './visit-it'

const VISIT: Record<string, HighlightVisit> = {
  ...visitFr,
  ...visitUk,
  ...visitCh,
  ...visitIt,
}

export function getHighlightVisit(highlightId: string): HighlightVisit | undefined {
  return VISIT[highlightId]
}
