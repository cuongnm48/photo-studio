"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";

export default function Header() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <>
      <header className="bg-white sticky top-0 z-50 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <Link href="/" className="flex items-center space-x-2">
              <div className="w-10 h-10 rounded-full overflow-hidden">
                <Image src="/logo.jpg" alt="Nhật Studio Logo" width={40} height={40} />
              </div>
              <span className="font-bold text-xl text-gray-800">Nhật Studio</span>
            </Link>

            <nav className="hidden md:flex items-center space-x-8">
              <Link
                href="#services"
                className="text-gray-600 hover:text-rose-500 transition-colors"
              >
                Dịch Vụ
              </Link>
              <Link
                href="#about"
                className="text-gray-600 hover:text-rose-500 transition-colors"
              >
                Về Chúng Tôi
              </Link>
              <Link
                href="#testimonials"
                className="text-gray-600 hover:text-rose-500 transition-colors"
              >
                Đánh Giá
              </Link>
              <Link
                href="#contact"
                className="text-gray-600 hover:text-rose-500 transition-colors"
              >
                Liên Hệ
              </Link>
            </nav>

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
        </div>
      </header>

      {/* Fixed Zalo and Messenger Icons */}
      <div className="fixed bottom-4 right-4 flex flex-col space-y-3 z-50">
        <Link
          href="https://zalo.me/0909939351"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center"
        >
          <Image src="/zalo-logo.png" alt="Zalo Logo" width={48} height={48} />
        </Link>
        <Link
          href="https://www.facebook.com/messages/t/116514626424223"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center"
        >
          <Image src="/facebook-messenger.png" alt="Messenger Logo" width={36} height={36} />
        </Link>
      </div>
    </>
  );
}
