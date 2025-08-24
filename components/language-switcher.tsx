"use client";

import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { locales } from "@/lib/i18n/config";
import { getAlternateUrl } from "@/lib/utils";
import { Globe } from "lucide-react";
import { usePathname, useRouter } from "next/navigation";

const languageNames: Record<string, string> = {
  en: "English",
  vi: "Tiếng Việt",
};

export default function LanguageSwitcher() {
  const router = useRouter();
  const pathname = usePathname();

  const switchLanguage = (newLocale: string) => {
    const segments = getAlternateUrl(newLocale, pathname);
    const url =
      newLocale === "vi" ? process.env.NEXT_PUBLIC_VI_DOMAIN : process.env.NEXT_PUBLIC_EN_DOMAIN;
    console.log(url + segments);
    router.push(url + segments);
  };

  const currentLocale = pathname.split("/")[1];

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline" size="icon">
          <Globe className="text-cyan-700" />
          <span className="sr-only">Switch language</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        {locales.map((locale) => (
          <DropdownMenuItem
            key={locale}
            className={currentLocale === locale ? "font-bold cursor-pointer" : "cursor-pointer"}
            onClick={() => switchLanguage(locale)}
          >
            {languageNames[locale]}
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
