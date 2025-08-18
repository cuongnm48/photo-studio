import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { match as matchLocale } from "@formatjs/intl-localematcher";
import Negotiator from "negotiator";
import { i18n, ValidLocale } from "@/lib/i18n/config";
import { getDomainByLocale } from "./app/[lang]/dictionaries";

function getLocale(request: NextRequest): string {
  const negotiatorHeaders: Record<string, string> = {};
  request.headers.forEach((value, key) => (negotiatorHeaders[key] = value));

  const locales = i18n.locales;
  let languages = new Negotiator({ headers: negotiatorHeaders }).languages();

  return matchLocale(languages, locales, i18n.defaultLocale);
}

export function middleware(request: NextRequest) {
  const pathname = request.nextUrl.pathname;
  const currentDomain = request.headers.get("host") || "";

  // Check if the request is for a public file
  if (/\.(.*)$/.test(pathname) || pathname.includes("_next") || pathname.includes("api")) {
    return NextResponse.next();
  }

  // Redirect based on domain and language
  if (pathname.startsWith("/vi") && currentDomain.includes("photoboothdanang.vn")) {
    const newUrl = new URL(pathname, process.env.NEXT_PUBLIC_VI_DOMAIN);
    return NextResponse.redirect(newUrl);
  }

  if (pathname.startsWith("/en") && currentDomain.includes("chupanhthedanang.vn")) {
    const newUrl = new URL(pathname, process.env.NEXT_PUBLIC_EN_DOMAIN);
    return NextResponse.redirect(newUrl);
  }

  // Handle default language redirects
  if (!pathname.startsWith("/vi") && !pathname.startsWith("/en")) {
    const locale = getLocale(request);
    return NextResponse.redirect(
      new URL(`/${locale}${pathname}`, getDomainByLocale(locale as ValidLocale))
    );
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/((?!api|_next/static|_next/image|favicon.ico).*)"],
};
