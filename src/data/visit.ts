import type { HighlightVisit } from '../types'
import { visitFr } from './visit-fr'
import { visitUk } from './visit-uk'
import { visitCh } from './visit-ch'
import { visitIt } from './visit-it'
import { visitBenelux } from './visit-benelux'
import { visitIberia } from './visit-iberia'
import { visitNordic } from './visit-nordic'
import { visitCentral } from './visit-central'
import { visitMed } from './visit-med'

const VISIT: Record<string, HighlightVisit> = {
  ...visitFr,
  ...visitUk,
  ...visitCh,
  ...visitIt,
  ...visitBenelux,
  ...visitIberia,
  ...visitNordic,
  ...visitCentral,
  ...visitMed,
}

export function getHighlightVisit(highlightId: string): HighlightVisit | undefined {
  return VISIT[highlightId]
}
