import { lazy, Suspense } from 'react'
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'
import { LanguageProvider } from './contexts/LanguageContext'
import { AppShell } from './components/AppShell'
import { HomePage } from './pages/HomePage'
import { CountriesPage } from './pages/CountriesPage'
import './styles/tokens.css'
import './styles/app.css'

const MapPage = lazy(() => import('./pages/MapPage').then((m) => ({ default: m.MapPage })))
// Pages below pull in the heavy per-city data (places, transit, itineraries…), so they load on demand.
const CountryPage = lazy(() => import('./pages/CountryPage').then((m) => ({ default: m.CountryPage })))
const CityPage = lazy(() => import('./pages/CityPage').then((m) => ({ default: m.CityPage })))
const PlacePage = lazy(() => import('./pages/PlacePage').then((m) => ({ default: m.PlacePage })))
const MyTripPage = lazy(() => import('./pages/MyTripPage').then((m) => ({ default: m.MyTripPage })))
const SearchPage = lazy(() => import('./pages/SearchPage').then((m) => ({ default: m.SearchPage })))

export default function App() {
  return (
    <LanguageProvider>
      <BrowserRouter basename="/euroupetour-project">
        <Routes>
          <Route element={<AppShell />}>
            <Route index element={<HomePage />} />
            <Route path="countries" element={<CountriesPage />} />
            <Route
              path="map"
              element={
                <Suspense fallback={null}>
                  <MapPage />
                </Suspense>
              }
            />
            <Route path="search" element={<Suspense fallback={null}><SearchPage /></Suspense>} />
            <Route path="trip" element={<Suspense fallback={null}><MyTripPage /></Suspense>} />
            <Route path="country/:countryId" element={<Suspense fallback={null}><CountryPage /></Suspense>} />
            <Route path="city/:cityId" element={<Suspense fallback={null}><CityPage /></Suspense>} />
            <Route path="place/:placeId" element={<Suspense fallback={null}><PlacePage /></Suspense>} />
            <Route path="*" element={<Navigate to="/" replace />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </LanguageProvider>
  )
}
