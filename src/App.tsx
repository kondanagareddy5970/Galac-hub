// src/App.tsx
// Single-page app — only one route needed. Privacy & Terms kept as separate pages.

import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { LenisProvider } from './app/providers/LenisProvider'
import { ThemeSectionProvider } from './app/providers/ThemeSectionProvider'
import RootLayout from './app/RootLayout'
import Home from './pages/Home'
import Privacy from './pages/Privacy'
import Terms from './pages/Terms'
import NotFound from './pages/NotFound'

export default function App() {
  return (
    <BrowserRouter>
      <LenisProvider>
        <ThemeSectionProvider>
          <Routes>
            <Route element={<RootLayout />}>
              <Route path="/" element={<Home />} />
              <Route path="/privacy" element={<Privacy />} />
              <Route path="/terms" element={<Terms />} />
              <Route path="*" element={<NotFound />} />
            </Route>
          </Routes>
        </ThemeSectionProvider>
      </LenisProvider>
    </BrowserRouter>
  )
}
