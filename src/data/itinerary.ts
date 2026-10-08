import type { CityItinerary } from '../types'
import { buildItineraries } from './itinerary-helper'
import { itineraryFr } from './itinerary-fr'
import { itineraryUk } from './itinerary-uk'
import { itineraryCentral } from './itinerary-central'
import { itineraryIt } from './itinerary-it'
import { itineraryIberia } from './itinerary-iberia'
import { itineraryNorth } from './itinerary-north'
import { itinerarySouth } from './itinerary-south'

const ITINERARY: Record<string, CityItinerary> = buildItineraries({
  ...itineraryFr,
  ...itineraryUk,
  ...itineraryCentral,
  ...itineraryIt,
  ...itineraryIberia,
  ...itineraryNorth,
  ...itinerarySouth,
})

export function getCityItinerary(cityId: string): CityItinerary | undefined {
  return ITINERARY[cityId]
}
