"use client"

import { ValidLocale } from "@/lib/i18n/config"
import { createContext, useContext } from "react"

const LanguageContext = createContext<ValidLocale>("vi")

export const useLanguage = () => useContext(LanguageContext)

export function LanguageProvider({ 
  children, 
  lang 
}: { 
  children: React.ReactNode
  lang: ValidLocale 
}) {
  return (
    <LanguageContext.Provider value={lang}>
      {children}
    </LanguageContext.Provider>
  )
}
