import type { CityHubs, TransitHub } from '../types'
import { hubsWest } from './hubs-west'
import { hubsCentral } from './hubs-central'
import { hubsEast } from './hubs-east'

/** [official name, Korean name, optional note as 'ko|en'] */
export type RawHub = [name: string, ko: string, note?: string]
export type RawCityHubs = { air?: RawHub[]; rail?: RawHub[]; bus?: RawHub[] }

const RAW: Record<string, RawCityHubs> = {
  ...hubsWest,
  ...hubsCentral,
  ...hubsEast,
}

function hub([name, ko, note]: RawHub): TransitHub {
  if (!note) return { name, ko }
  const [noteKo, noteEn] = note.split('|')
  return { name, ko, note: { ko: noteKo, en: noteEn ?? noteKo } }
}

export function getCityHubs(cityId: string): CityHubs | undefined {
  const raw = RAW[cityId]
  if (!raw) return undefined
  return {
    air: raw.air?.map(hub),
    rail: raw.rail?.map(hub),
    bus: raw.bus?.map(hub),
  }
}
