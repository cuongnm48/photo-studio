import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { match as matchLocale } from "@formatjs/intl-localematcher";
import Negotiator from "negotiator";
import { i18n } from "@/lib/i18n/config";

function getLocale(request: NextRequest): string {
  // Check Accept-Language header
  const acceptLanguage = request.headers.get("accept-language");

  if (acceptLanguage) {
    const negotiatorHeaders: Record<string, string> = {
      "accept-language": acceptLanguage,
    };

    const locales = i18n.locales;
    const languages = new Negotiator({ headers: negotiatorHeaders }).languages();

    try {
      const matchedLocale = matchLocale(languages, locales, i18n.defaultLocale);
      return matchedLocale;
    } catch (error) {
      console.error("Language matching error:", error);
      return i18n.defaultLocale;
    }
  }

  // Fallback to default locale
  return i18n.defaultLocale;
}

export function middleware(request: NextRequest) {
  const pathname = request.nextUrl.pathname;
  const currentDomain = request.headers.get("host") || "";

  // Skip for static files and API routes
  if (/\.(.*)$/.test(pathname) || pathname.includes("_next") || pathname.includes("api")) {
    return NextResponse.next();
  }

  // If no language prefix, detect and redirect
  if (!pathname.startsWith("/vi") && !pathname.startsWith("/en")) {
    const detectedLocale = getLocale(request);
    const domain =
      detectedLocale === "vi"
        ? process.env.NEXT_PUBLIC_VI_DOMAIN
        : process.env.NEXT_PUBLIC_EN_DOMAIN;

    return NextResponse.redirect(new URL(`/${detectedLocale}${pathname}`, domain));
  }

  // Handle cross-domain language redirects
  if (pathname.startsWith("/vi") && currentDomain.includes("photoboothdanang.vn")) {
    return NextResponse.redirect(new URL(pathname, process.env.NEXT_PUBLIC_VI_DOMAIN));
  }

  if (pathname.startsWith("/en") && currentDomain.includes("chupanhthedanang.vn")) {
    return NextResponse.redirect(new URL(pathname, process.env.NEXT_PUBLIC_EN_DOMAIN));
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/((?!api|_next/static|_next/image|favicon.ico).*)"],
};
