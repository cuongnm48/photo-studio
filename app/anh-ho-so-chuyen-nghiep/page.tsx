import { Metadata } from "next";
import Footer from "@/components/footer";
import Header from "@/components/header";
import { Button } from "@/components/ui/button";
import { CameraIcon, MessageCircle, Phone } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Chụp ảnh hồ sơ chuyên nghiệp - Nhật Studio",
  description: "Dịch vụ chụp ảnh hồ sơ, profile chuyên nghiệp tại Đà Nẵng. Tạo ấn tượng với nhà tuyển dụng qua ảnh hồ sơ chất lượng cao.",
  openGraph: {
    title: "Chụp ảnh hồ sơ chuyên nghiệp - Nhật Studio",
    description: "Dịch vụ chụp ảnh profile chuyên nghiệp tại Đà Nẵng",
    type: "website",
    locale: "vi_VN",
  },
};

const galleryImages = [
  {
    id: 1,
    width: 800,
    height: 1000,
    className: "col-span-2 row-span-2", // Large image
    src: "https://picsum.photos/id/1070/800/1000",
    alt: "Mẫu ảnh hồ sơ chuyên nghiệp - Phong cách doanh nhân"
  },
  {
    id: 2,
    width: 400,
    height: 600,
    className: "", // Standard size
    src: "https://picsum.photos/id/1077/400/600",
    alt: "Mẫu ảnh hồ sơ chuyên nghiệp - Nữ doanh nhân"
  },
  {
    id: 3,
    width: 400,
    height: 600,
    className: "", // Standard size
    src: "https://picsum.photos/id/1076/400/600",
    alt: "Mẫu ảnh hồ sơ chuyên nghiệp - Chân dung nghiêm túc"
  },
  {
    id: 4,
    width: 400,
    height: 600,
    className: "", // Standard size
    src: "https://picsum.photos/id/1066/400/600",
    alt: "Mẫu ảnh hồ sơ chuyên nghiệp - Phong cách sáng tạo"
  },
  {
    id: 5,
    width: 400,
    height: 600,
    className: "", // Standard size
    src: "https://picsum.photos/id/1074/400/600",
    alt: "Mẫu ảnh hồ sơ chuyên nghiệp - Doanh nhân thành đạt"
  },
];

export default function AnhHoSoChuyenNghiep() {
  return (
    <main className="min-h-screen">
      <Header />
      
      {/* Hero Section */}
      <section 
        className="relative h-[300px] md:h-[400px]"
        aria-label="Hero banner"
      >
        <div className="absolute inset-0 bg-gradient-to-r from-slate-900/90 to-slate-900/60 z-10" />
        <Image
          src="https://picsum.photos/id/1070/1920/600"
          alt="Chụp ảnh Profile cá nhân chuyên nghiệp"
          fill
          priority
          className="object-cover"
          sizes="100vw"
        />
        <div className="relative z-20 container mx-auto px-4 h-full flex flex-col justify-center">
          <h1 className="text-3xl md:text-5xl font-bold text-white mb-4">
            Chụp ảnh Profile cá nhân chuyên nghiệp
          </h1>
          <p className="text-xl md:text-2xl text-white/90 mb-8 max-w-2xl">
            Tạo ấn tượng trong mắt nhà tuyển dụng với ảnh hồ sơ chất lượng cao
          </p>
        </div>
      </section>

      {/* Introduction Section */}
      <section
        className="container mx-auto lg:px-4"
        aria-label="Giới thiệu dịch vụ"
      >
        <div className="relative bg-gray-100 py-16">
          <div className="container mx-auto px-4 relative z-10">
            <div className="flex items-center justify-center mb-4">
              <CameraIcon className="h-10 w-10 mr-4 text-gray-700" />
              <h1 className="text-3xl font-bold text-gray-900">
                Dịch vụ chụp ảnh hồ sơ chuyên nghiệp
              </h1>
            </div>
            <p className="text-center max-w-2xl mx-auto text-gray-600">
              Nhật Studio cung cấp dịch vụ chụp ảnh hồ sơ chuyên nghiệp, giúp bạn tạo ấn tượng tốt
              nhất trong môi trường công sở và kinh doanh. Chúng tôi hiểu rằng một tấm ảnh hồ sơ
              chuyên nghiệp có thể mang lại nhiều cơ hội cho sự nghiệp của bạn.
            </p>
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section 
        className="container mx-auto px-4"
        aria-label="Bộ sưu tập ảnh mẫu"
      >
        <div className="mb-16 mt-10">
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        
              {galleryImages.map((img, index) => (
              <div
                key={img.id}
                className={index === 0 ? "relative aspect-[3/4] col-span-2 row-span-2 rounded-lg overflow-hidden shadow-lg" : "relative aspect-[3/4] rounded-lg overflow-hidden shadow-lg"}
                role="gridcell"
              >
                <Image
                  src={img.src}
                  alt={img.alt}
                  fill
                  className="object-cover"
                  quality={85}
                  priority={img.id === 1} // Priority load for hero image
                />
              </div>
            ))}
            </div>
          </div>

        {/* Tips */}
        <div className="mb-16">
          <h2 className="text-2xl font-bold mb-8 text-center">Mẹo chụp ảnh hồ sơ chuyên nghiệp</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-slate-50 p-6 rounded-lg">
              <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="lucide lucide-shirt text-slate-700"
                >
                  <path d="M20.38 3.46 16 2a4 4 0 0 1-8 0L3.62 3.46a2 2 0 0 0-1.34 2.23l.58 3.47a1 1 0 0 0 .99.84H6v10c0 1.1.9 2 2 2h8a2 2 0 0 0 2-2V10h2.15a1 1 0 0 0 .99-.84l.58-3.47a2 2 0 0 0-1.34-2.23z" />
                </svg>
                Trang phục
              </h3>
              <ul className="space-y-2 text-slate-600">
                <li className="flex items-center gap-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="18"
                    height="18"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="lucide lucide-check text-slate-700"
                  >
                    <path d="M20 6 9 17l-5-5" />
                  </svg>
                  Chọn trang phục công sở lịch sự, phù hợp với ngành nghề
                </li>
                <li className="flex items-center gap-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="18"
                    height="18"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="lucide lucide-check text-slate-700"
                  >
                    <path d="M20 6 9 17l-5-5" />
                  </svg>
                  Ưu tiên màu sắc trung tính, tránh họa tiết quá rực rỡ
                </li>
                <li className="flex items-center gap-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="18"
                    height="18"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="lucide lucide-check text-slate-700"
                  >
                    <path d="M20 6 9 17l-5-5" />
                  </svg>
                  Nam giới nên mặc áo sơ mi, vest; nữ giới có thể mặc áo sơ mi, áo blazer
                </li>
              </ul>
            </div>
            <div className="bg-slate-50 p-6 rounded-lg">
              <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="lucide lucide-smile text-slate-700"
                >
                  <circle cx="12" cy="12" r="10" />
                  <path d="M8 14s1.5 2 4 2 4-2 4-2" />
                  <line x1="9" x2="9.01" y1="9" y2="9" />
                  <line x1="15" x2="15.01" y1="9" y2="9" />
                </svg>
                Biểu cảm
              </h3>
              <ul className="space-y-2 text-slate-600">
                <li className="flex items-center gap-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="18"
                    height="18"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="lucide lucide-check text-slate-700"
                  >
                    <path d="M20 6 9 17l-5-5" />
                  </svg>
                  Nụ cười tự nhiên, thân thiện nhưng không quá rộng
                </li>
                <li className="flex items-center gap-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="18"
                    height="18"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="lucide lucide-check text-slate-700"
                  >
                    <path d="M20 6 9 17l-5-5" />
                  </svg>
                  Giữ ánh mắt tự tin, nhìn thẳng vào camera
                </li>
                <li className="flex items-center gap-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="18"
                    height="18"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="lucide lucide-check text-slate-700"
                  >
                    <path d="M20 6 9 17l-5-5" />
                  </svg>
                  Tư thế thẳng lưng, vai thả lỏng, thể hiện sự tự tin
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="bg-slate-100 p-8 rounded-xl text-center" role="complementary">
          <h2 className="text-2xl font-bold mb-4">
            Đặt lịch chụp ảnh hồ sơ chuyên nghiệp ngay hôm nay
          </h2>
          <p className="text-slate-600 mb-6 max-w-2xl mx-auto">
            Hãy để Nhật Studio giúp bạn tạo ấn tượng chuyên nghiệp với ảnh hồ sơ chất lượng cao. Đặt
            lịch ngay hôm nay để được phục vụ tốt nhất!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="tel:0909939351">
              <Button className="bg-slate-800 hover:bg-slate-900 w-full sm:w-auto flex items-center gap-2">
                <Phone size={16} />
                Đặt lịch ngay
              </Button>
            </Link>
            <Link href="https://zalo.me/0909939351" target="_blank" rel="noopener noreferrer">
              <Button 
                variant="outline" 
                className="border-slate-800 text-slate-800 hover:bg-slate-100 w-full sm:w-auto flex items-center gap-2"
              >
                <MessageCircle size={16} />
                Liên hệ tư vấn
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
