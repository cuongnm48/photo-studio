"use client"

import { useState } from "react"
import Link from "next/link"
import { Menu, X } from "lucide-react"

export default function MobileMenu() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div className="md:hidden">
      <button onClick={() => setIsOpen(!isOpen)} className="text-gray-700 hover:text-teal-500">
        {isOpen ? <X size={24} /> : <Menu size={24} />}
      </button>

      {isOpen && (
        <div className="absolute top-16 left-0 right-0 bg-white shadow-md z-50 p-4">
          <div className="flex flex-col space-y-4">
            <Link
              href="#about"
              className="text-gray-700 hover:text-teal-500 py-2 border-b border-gray-100"
              onClick={() => setIsOpen(false)}
            >
              VỀ NHẬT STUDIO
            </Link>
            <Link
              href="#news"
              className="text-gray-700 hover:text-teal-500 py-2 border-b border-gray-100"
              onClick={() => setIsOpen(false)}
            >
              TIN TỨC
            </Link>
            <Link
              href="#contact"
              className="text-gray-700 hover:text-teal-500 py-2 border-b border-gray-100"
              onClick={() => setIsOpen(false)}
            >
              LIÊN HỆ
            </Link>
            <Link href="#faq" className="text-gray-700 hover:text-teal-500 py-2" onClick={() => setIsOpen(false)}>
              CÂU HỎI THƯỜNG GẶP
            </Link>
          </div>
        </div>
      )}
    </div>
  )
}
