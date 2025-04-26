import 'server-only'
import { ValidLocale } from '@/lib/i18n/config'

const dictionaries = {
  vi: () => import('@/dictionaries/vi.json').then((module) => module.default),
  en: () => import('@/dictionaries/en.json').then((module) => module.default),
}

export const getDictionary = async (locale: ValidLocale) => {
  try {
    return await dictionaries[locale]()
  } catch (error) {
    console.error(`Dictionary load failed for locale: ${locale}`, error)
    // Fallback to Vietnamese dictionary
    return dictionaries.vi()
  }
}