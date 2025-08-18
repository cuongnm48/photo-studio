import {
  Sheet,
  SheetContent,
  SheetTrigger,
  SheetClose,
  SheetHeader,
  SheetTitle,
  SheetDescription,
} from "@/components/ui/sheet";
import { Menu } from "lucide-react";
import Link from "next/link";
import { ValidLocale } from "@/lib/i18n/config";
import { Button } from "./ui/button";

interface MobileNavProps {
  lang: ValidLocale;
  dict: any;
}

export function MobileNav({ lang, dict }: MobileNavProps) {
  const navItems = [
    { href: `/${lang}#services`, label: dict.common.navigation.services },
    { href: `/${lang}#about`, label: dict.common.navigation.about },
    { href: `/${lang}#testimonials`, label: dict.common.navigation.testimonials },
    { href: `/${lang}#contact`, label: dict.common.navigation.contact },
  ];

  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button variant="outline" className="md:hidden" size="icon">
          <Menu />
          <span className="sr-only">Open menu</span>
        </Button>
      </SheetTrigger>
      <SheetContent side="left" className="w-[300px] sm:w-[400px]">
        <SheetHeader>
          <SheetTitle className="text-left">
            <span className="text-xl font-bold text-rose-500">Nhật Studio</span>
          </SheetTitle>
          <SheetDescription></SheetDescription>
        </SheetHeader>
        <nav className="flex flex-col gap-4 mt-6">
          {navItems.map((item, index) => (
            <SheetClose asChild key={index}>
              <Link
                href={item.href}
                className="text-lg font-medium hover:text-rose-500 transition-colors"
              >
                {item.label}
              </Link>
            </SheetClose>
          ))}
        </nav>
      </SheetContent>
    </Sheet>
  );
}
