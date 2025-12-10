import type React from "react";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { getDictionary, getAlternateUrls } from "./dictionaries";
import { ValidLocale, defaultLocale, isValidLocale } from "@/lib/i18n/config";
import { headers } from "next/headers";
import "./globals.css";
import { LanguageProvider } from "@/contexts/language-provider";

const inter = Inter({ subsets: ["latin", "vietnamese"] });

export async function generateMetadata({
  params,
}: {
  params: { lang: string };
}): Promise<Metadata> {
  const { lang } = await params;
  const isValidLang = isValidLocale(lang) ? lang : defaultLocale;
  const dict = await getDictionary(isValidLang as ValidLocale);
  
  // Lấy pathname hiện tại từ headers (được set bởi middleware)
  const headersList = await headers();
  const pathname = headersList.get("x-pathname") || `/${isValidLang}`;
  
  // Generate alternate URLs cho các ngôn ngữ
  const alternates = getAlternateUrls(isValidLang as ValidLocale, pathname);

  return {
    title: {
      template: "%s | Nhật Studio",
      default: dict.metadata.title,
    },
    description: dict.metadata.description,
    generator: "Nhật Studio",
    icons: {
      icon: "/favicon.svg", // SVG
      shortcut: "/favicon.svg", // fallback cho Safari/IE cũ
      apple: "/favicon.svg", // cho iOS
    },
    alternates: {
      languages: alternates,
    },
  };
}

export const dynamic = "force-static";

export default async function RootLayout({
  children,
  params,
}: Readonly<{
  children: React.ReactNode;
  params: { lang: string };
}>) {
  const { lang } = await params;
  const isValidLang = isValidLocale(lang) ? lang : defaultLocale;

  return (
    <html lang={isValidLang} suppressHydrationWarning>
      <body className={inter.className}>
        <LanguageProvider lang={isValidLang as ValidLocale}>{children}</LanguageProvider>
      </body>
    </html>
  );
}
