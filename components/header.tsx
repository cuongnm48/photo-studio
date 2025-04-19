"use client"

import { Button } from "@/components/ui/button";
import { Facebook, Instagram, Link } from "lucide-react";

export default function Header() {

  return (
    <header className="bg-white sticky top-0 z-50 shadow-sm">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="flex justify-between items-center py-4">
        <Link href="/" className="flex items-center space-x-2">
          <div className="w-10 h-10 rounded-full bg-rose-500 flex items-center justify-center">
            <span className="text-white font-bold text-sm">NS</span>
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
          <Link href="#pricing" className="text-gray-600 hover:text-rose-500 transition-colors">
            Bảng Giá
          </Link>
          <Link href="#about" className="text-gray-600 hover:text-rose-500 transition-colors">
            Về Chúng Tôi
          </Link>
          <Link
            href="#testimonials"
            className="text-gray-600 hover:text-rose-500 transition-colors"
          >
            Đánh Giá
          </Link>
          <Link href="#contact" className="text-gray-600 hover:text-rose-500 transition-colors">
            Liên Hệ
          </Link>
        </nav>

        <div className="flex items-center space-x-4">
          <Link href="#" className="text-gray-600 hover:text-rose-500">
            <Facebook size={20} />
          </Link>
          <Link href="#" className="text-gray-600 hover:text-rose-500">
            <Instagram size={20} />
          </Link>
          <Button className="hidden md:flex bg-rose-500 hover:bg-rose-600">Đặt Lịch</Button>
        </div>
      </div>
    </div>
  </header>
  )
}
