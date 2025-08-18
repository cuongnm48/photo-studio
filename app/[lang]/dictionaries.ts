import "server-only";
import { ValidLocale } from "@/lib/i18n/config";

const dictionaries = {
  vi: () => import("@/dictionaries/vi.json").then((module) => module.default),
  en: () => import("@/dictionaries/en.json").then((module) => module.default),
};

export const getDictionary = async (locale: ValidLocale) => {
  try {
    if (typeof dictionaries[locale] === "function") {
      return await dictionaries[locale]();
    } else {
      throw new Error(`Invalid locale: ${locale}`);
    }
  } catch (error) {
    console.error(`Dictionary load failed for locale: ${locale}`, error);
    // Fallback to Vietnamese dictionary
    return dictionaries.vi();
  }
};

export const getDomainByLocale = (locale: ValidLocale) => {
  return locale === "vi" ? process.env.NEXT_PUBLIC_VI_DOMAIN : process.env.NEXT_PUBLIC_EN_DOMAIN;
};

export const getCanonicalDomain = (locale: ValidLocale, path: string) => {
  const domain = getDomainByLocale(locale);
  return `${domain}${path}`;
};
