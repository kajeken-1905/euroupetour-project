import { lazy, Suspense } from 'react'
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'
import { LanguageProvider } from './contexts/LanguageContext'
import { AppShell } from './components/AppShell'
import { HomePage } from './pages/HomePage'
import { CountriesPage } from './pages/CountriesPage'
import { CountryPage } from './pages/CountryPage'
import { CityPage } from './pages/CityPage'
import { PlacePage } from './pages/PlacePage'
import './styles/tokens.css'
import './styles/app.css'

const MapPage = lazy(() => import('./pages/MapPage').then((m) => ({ default: m.MapPage })))

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
            <Route path="country/:countryId" element={<CountryPage />} />
            <Route path="city/:cityId" element={<CityPage />} />
            <Route path="place/:placeId" element={<PlacePage />} />
            <Route path="*" element={<Navigate to="/" replace />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </LanguageProvider>
  )
}
