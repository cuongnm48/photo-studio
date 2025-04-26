import Link from "next/link";
import Image from "next/image";

const navigationLinks = [
  { href: "/#service", label: "Dịch Vụ" },
  { href: "/#about", label: "Về Chúng Tôi" },
  { href: "/#testimonials", label: "Đánh Giá" },
  { href: "/#contact", label: "Liên hệ" },
];

export default function Header() {
  return (
    <>
      <header className="bg-white shadow-sm  lg:sticky lg:top-0 lg:z-50">
        <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" role="navigation" aria-label="Main navigation">
          <div className="flex justify-between items-center py-4">
            <Link href="/" className="flex items-center space-x-2" aria-label="Nhật Studio - Trang chủ">
              <div className="w-10 h-10 rounded-full overflow-hidden">
                <Image src="/logo.jpg" alt="Nhật Studio Logo" width={40} height={40} priority />
              </div>
              <span className="font-bold text-xl text-gray-800">Nhật Studio</span>
            </Link>

            <div className="hidden md:flex items-center space-x-8">
              {navigationLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-gray-600 hover:text-rose-500 transition-colors"
                >
                  {link.label}
                </Link>
              ))}
            </div>

            <div className="flex items-center space-x-4">
              <Link
                href="https://www.facebook.com/messages/t/116514626424223"
                target="_blank"
                rel="noopener noreferrer"
                className="hidden md:flex bg-rose-500 hover:bg-rose-600 text-white px-4 py-2 rounded-md"
              >
                Đặt Lịch
              </Link>
            </div>
          </div>
        </nav>
      </header>

      {/* Social Media Links */}
      <div className="fixed bottom-4 right-4 flex flex-col space-y-3 z-50">
        <Link
          href="https://zalo.me/0909939351"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center"
        >
          <Image 
            src="/zalo-logo.png" 
            alt="Zalo Logo" 
            width={48} 
            height={48}
            priority
          />
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
