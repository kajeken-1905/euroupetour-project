import type { CategoryId, Place } from '../types'

/** 장소 데이터 작성용 짧은 헬퍼 */
export function place(
  id: string,
  cityId: string,
  category: CategoryId,
  name: string,
  address: string,
  ko: string,
  en: string,
  opts: Partial<Omit<Place, 'id' | 'cityId' | 'category' | 'name' | 'address' | 'description'>> = {},
): Place {
  const query = encodeURIComponent(`${name} ${address}`)
  return {
    id,
    cityId,
    category,
    name,
    address,
    description: { ko, en },
    mapsUrl: opts.mapsUrl ?? `https://www.google.com/maps/search/?api=1&query=${query}`,
    ...opts,
  }
}
