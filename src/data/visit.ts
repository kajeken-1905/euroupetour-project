import type { HighlightVisit } from '../types'
import { visitFr } from './visit-fr'

const VISIT: Record<string, HighlightVisit> = {
  ...visitFr,
}

export function getHighlightVisit(highlightId: string): HighlightVisit | undefined {
  return VISIT[highlightId]
}
