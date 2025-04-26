import Link from "next/link";
import { Mail, MapPin, Phone } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer id="contact" className="bg-gray-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-8">
          {/* About Section */}
          <div>
            <h3 className="text-xl font-bold mb-4">Nhật Studio</h3>
            <p className="text-gray-300 mb-4">
              Dịch vụ chụp ảnh chuyên nghiệp cho mọi nhu cầu của bạn. Ảnh chất lượng với giá cả
              phải chăng.
            </p>
          </div>

          {/* Services Section */}
          <div>
            <h3 className="text-lg font-bold mb-4">Dịch Vụ</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/anh-the-ho-chieu" className="text-gray-300 hover:text-white">
                  Ảnh Thẻ
                </Link>
              </li>
              <li>
                <Link href="/anh-ho-so-chuyen-nghiep" className="text-gray-300 hover:text-white">
                  Chụp Ảnh Chân Dung
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-300 hover:text-white">
                  Chỉnh Sửa Ảnh
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-300 hover:text-white">
                  Phục Hồi Ảnh Cũ
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-300 hover:text-white">
                  Giao Hàng Tận Nơi
                </Link>
              </li>
            </ul>
          </div>

          {/* Quick Links Section */}
          <div>
            <h3 className="text-lg font-bold mb-4">Liên Kết Nhanh</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-gray-300 hover:text-white">
                  Trang Chủ
                </Link>
              </li>
              <li>
                <Link href="#about" className="text-gray-300 hover:text-white">
                  Về Chúng Tôi
                </Link>
              </li>
              <li>
                <Link href="#services" className="text-gray-300 hover:text-white">
                  Dịch Vụ
                </Link>
              </li>
              <li>
                <Link href="#testimonials" className="text-gray-300 hover:text-white">
                  Đánh Giá
                </Link>
              </li>
              <li>
                <Link href="#contact" className="text-gray-300 hover:text-white">
                  Liên Hệ
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Section */}
          <div>
            <h3 className="text-lg font-bold mb-4">Liên Hệ Chúng Tôi</h3>
            <ul className="space-y-2">
              <li className="flex items-start space-x-3">
                <MapPin className="text-rose-400 mt-1 flex-shrink-0" size={18} />
                <a 
                  href="https://maps.google.com/?q=254/9+Hoàng+Diệu,+Đà+Nẵng" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-300 hover:text-white"
                >
                  254/9 Hoàng Diệu, Đà Nẵng, Việt Nam
                </a>
              </li>
              <li className="flex items-center space-x-3">
                <Phone className="text-rose-400 flex-shrink-0" size={18} />
                <a href="tel:0909939351" className="text-gray-300 hover:text-white">
                  0909939351
                </a>
                {" | "}
                <a href="tel:0905098084" className="text-gray-300 hover:text-white">
                  0905098084
                </a>
              </li>
              <li className="flex items-center space-x-3">
                <Mail className="text-rose-400 flex-shrink-0" size={18} />
                <a 
                  href="mailto:nhatstudio.0909939351@gmail.com"
                  className="text-gray-300 hover:text-white"
                >
                  nhatstudio.0909939351@gmail.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400">
          <p>&copy; Copyright {currentYear} Nhật Studio. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
