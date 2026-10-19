import { createContext, useContext, useState, type ReactNode } from 'react'

type SectionTheme = 'light' | 'dark'

interface ThemeSectionContextValue {
  currentTheme: SectionTheme
  setCurrentTheme: (theme: SectionTheme) => void
}

const ThemeSectionContext = createContext<ThemeSectionContextValue>({
  currentTheme: 'light',
  setCurrentTheme: () => {},
})

export function ThemeSectionProvider({ children }: { children: ReactNode }) {
  const [currentTheme, setCurrentTheme] = useState<SectionTheme>('light')

  return (
    <ThemeSectionContext.Provider value={{ currentTheme, setCurrentTheme }}>
      {children}
    </ThemeSectionContext.Provider>
  )
}

export function useSectionTheme() {
  return useContext(ThemeSectionContext)
}
