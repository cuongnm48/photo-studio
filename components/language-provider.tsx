'use client'

import { createContext, useContext, useState } from 'react'
import type { ValidLocale } from '@/lib/i18n/config'

type LanguageContextType = {
  locale: ValidLocale
  setLocale: (locale: ValidLocale) => void
}

const LanguageContext = createContext<LanguageContextType | null>(null)

export function LanguageProvider({
  children,
  initialLocale
}: {
  children: React.ReactNode
  initialLocale: ValidLocale
}) {
  const [locale, setLocale] = useState<ValidLocale>(initialLocale)

  return (
    <LanguageContext.Provider value={{ locale, setLocale }}>
      {children}
    </LanguageContext.Provider>
  )
}

export function useLanguage() {
  const context = useContext(LanguageContext)
  if (!context) throw new Error('useLanguage must be used within a LanguageProvider')
  return context
}
