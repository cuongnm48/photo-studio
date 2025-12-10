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

/**
 * Generate alternate URLs for hreflang tags
 * Returns object with language codes as keys and full URLs as values
 */
export function getAlternateUrls(currentLang: ValidLocale, currentPath: string = "/") {
  const alternates: Record<string, string> = {};
  
  // Remove locale prefix from path if exists (e.g., /vi/blog -> /blog, /en -> /)
  let pathWithoutLang = currentPath.replace(/^\/(vi|en)(\/|$)/, "/");
  if (pathWithoutLang === "/") {
    pathWithoutLang = "";
  }
  
  // Generate alternate URL for each locale
  const locales: ValidLocale[] = ["vi", "en"];
  for (const locale of locales) {
    const domain = getDomainByLocale(locale);
    const alternatePath = pathWithoutLang ? `/${locale}${pathWithoutLang}` : `/${locale}`;
    alternates[locale === "vi" ? "vi-VN" : "en-US"] = `${domain}${alternatePath}`;
  }
  
  return alternates;
}