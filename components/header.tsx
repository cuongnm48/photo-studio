import { getDictionary } from "@/app/[lang]/dictionaries";
import { ValidLocale } from "@/lib/i18n/config";
import Link from "next/link";
import LanguageSwitcher from "./language-switcher";
import Image from "next/image";
import { MobileNav } from "./MobileMenu";

export default async function Header({ lang }: { lang: string }) {
  const dict = await getDictionary(lang as ValidLocale);

  const navItems = [
    { href: `/${lang}#services`, label: dict.common.navigation.services },
    { href: `/${lang}#about`, label: dict.common.navigation.about },
    { href: `/${lang}#testimonials`, label: dict.common.navigation.testimonials },
    { href: `/${lang}#contact`, label: dict.common.navigation.contact },
  ];

  return (
    <>
      <header className="bg-white shadow-sm sticky top-0 z-50">
        <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" role="navigation">
          <div className="flex justify-between items-center py-3">
            {/* Logo */}
            <Link href={`/${lang}`} className="flex items-center space-x-2">
              <span className="text-xl font-bold text-rose-500">Nhật Studio</span>
            </Link>

            {/* Navigation Links */}
            <div className="hidden md:flex items-center space-x-8">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="text-gray-600 hover:text-rose-500"
                >
                  {item.label}
                </Link>
              ))}
            </div>

            {/* Actions */}
            <div className="flex items-center space-x-4">
              <LanguageSwitcher />
              <Link
                href="https://www.facebook.com/messages/t/116514626424223"
                target="_blank"
                rel="noopener noreferrer"
                className="hidden md:flex bg-rose-500 hover:bg-rose-600 text-white px-4 py-2 rounded-md"
              >
                {dict.common.book_now}
              </Link>
              <MobileNav lang={lang as ValidLocale} dict={dict} />
            </div>
          </div>
        </nav>
      </header>

      <div className="fixed bottom-4 right-4 flex flex-col space-y-3 z-50">
        <Link
          href="https://zalo.me/0909939351"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center"
        >
          <Image src="/zalo-logo.png" alt="Zalo Logo" width={48} height={48} priority />
        </Link>
        <Link
          href="https://www.facebook.com/messages/t/116514626424223"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center"
        >
          <Image
            src="/facebook-messenger.png"
            alt="Messenger Logo"
            width={36}
            height={36}
            priority
          />
        </Link>
      </div>
    </>
  );
}
