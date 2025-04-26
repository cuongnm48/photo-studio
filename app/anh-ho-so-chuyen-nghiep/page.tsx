import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { CameraIcon, Facebook, Instagram } from "lucide-react";
import Header from "@/components/header";
import Footer from "@/components/footer";

export default function AnhHoSoChuyenNghiep() {
  // Các mẫu ảnh hồ sơ chuyên nghiệp
  const professionalPhotos = [
    {
      title: "Ảnh hồ sơ doanh nhân",
      description: "Phù hợp cho CEO, quản lý cấp cao",
      image: "/card_1.jpg",
    },
    {
      title: "Ảnh hồ sơ chuyên gia",
      description: "Phù hợp cho chuyên gia, tư vấn viên",
      image: "",
    },
    {
      title: "Ảnh hồ sơ nhân viên văn phòng",
      description: "Phù hợp cho nhân viên văn phòng, hành chính",
      image: "",
    },
    {
      title: "Ảnh hồ sơ LinkedIn",
      description: "Tối ưu cho mạng xã hội chuyên nghiệp",
      image: "",
    },
  ];

  // Các phong cách chụp
  const photoStyles = [
    {
      name: "Phong cách cổ điển",
      description: "Trang phục trang trọng, phông nền đơn sắc, ánh sáng mềm mại",
      image: "https://picsum.photos/id/1062/600/400",
    },
    {
      name: "Phong cách hiện đại",
      description: "Trang phục hiện đại, phông nền sáng tạo, ánh sáng tương phản",
      image: "https://picsum.photos/id/1012/600/400",
    },
    {
      name: "Phong cách tự nhiên",
      description: "Trang phục lịch sự, phông nền văn phòng hoặc ngoài trời, ánh sáng tự nhiên",
      image: "https://picsum.photos/id/1005/600/400",
    },
  ];

  // Các lợi ích
  const benefits = [
    {
      title: "Tạo ấn tượng chuyên nghiệp",
      description: "Ảnh hồ sơ chuyên nghiệp giúp bạn tạo ấn tượng tốt với nhà tuyển dụng",
      icon: (
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
          className="lucide lucide-briefcase"
        >
          <rect width="20" height="14" x="2" y="7" rx="2" ry="2" />
          <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" />
        </svg>
      ),
    },
    {
      title: "Nâng cao hồ sơ trực tuyến",
      description: "Ảnh chuyên nghiệp giúp hồ sơ LinkedIn và CV của bạn nổi bật",
      icon: (
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
          className="lucide lucide-globe"
        >
          <circle cx="12" cy="12" r="10" />
          <line x1="2" x2="22" y1="12" y2="12" />
          <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
        </svg>
      ),
    },
    {
      title: "Thể hiện cá tính",
      description: "Ảnh chuyên nghiệp vẫn có thể thể hiện cá tính và phong cách riêng của bạn",
      icon: (
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
          className="lucide lucide-sparkles"
        >
          <path d="m12 3-1.912 5.813a2 2 0 0 1-1.275 1.275L3 12l5.813 1.912a2 2 0 0 1 1.275 1.275L12 21l1.912-5.813a2 2 0 0 1 1.275-1.275L21 12l-5.813-1.912a2 2 0 0 1-1.275-1.275L12 3Z" />
          <path d="M5 3v4" />
          <path d="M19 17v4" />
          <path d="M3 5h4" />
          <path d="M17 19h4" />
        </svg>
      ),
    },
    {
      title: "Tăng cơ hội thành công",
      description: "Ảnh chuyên nghiệp có thể tăng cơ hội được mời phỏng vấn và thăng tiến",
      icon: (
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
          className="lucide lucide-trending-up"
        >
          <polyline points="22 7 13.5 15.5 8.5 10.5 2 17" />
          <polyline points="16 7 22 7 22 13" />
        </svg>
      ),
    },
  ];

  return (
    <main className="min-h-screen">
      {/* Header */}
      <Header />
      {/* Hero Section */}
      <section className="relative h-[300px] md:h-[400px]">
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

      <div className="container mx-auto px-4">
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

          {/* Featured Gallery */}
          <div className="mb-16 mt-10">
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
              <div className="relative aspect-[3/4] col-span-2 row-span-2 rounded-lg overflow-hidden shadow-lg">
                <Image
                  src="https://picsum.photos/id/1070/800/1000"
                  alt="Ảnh hồ sơ mẫu"
                  fill
                  className="object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="relative aspect-[3/4] rounded-lg overflow-hidden shadow-lg">
                <Image
                  src="https://picsum.photos/id/1077/400/600"
                  alt="Ảnh hồ sơ mẫu"
                  fill
                  className="object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="relative aspect-[3/4] rounded-lg overflow-hidden shadow-lg">
                <Image
                  src="https://picsum.photos/id/1076/400/600"
                  alt="Ảnh hồ sơ mẫu"
                  fill
                  className="object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="relative aspect-[3/4] rounded-lg overflow-hidden shadow-lg">
                <Image
                  src="https://picsum.photos/id/1066/400/600"
                  alt="Ảnh hồ sơ mẫu"
                  fill
                  className="object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="relative aspect-[3/4] rounded-lg overflow-hidden shadow-lg">
                <Image
                  src="https://picsum.photos/id/1074/400/600"
                  alt="Ảnh hồ sơ mẫu"
                  fill
                  className="object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>
            </div>
          </div>

          {/* Tips */}
          <div className="mb-16">
            <h2 className="text-2xl font-bold mb-8 text-center">
              Mẹo chụp ảnh hồ sơ chuyên nghiệp
            </h2>
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

          {/* CTA */}
          <div className="bg-slate-100 p-8 rounded-xl text-center">
            <h2 className="text-2xl font-bold mb-4">
              Đặt lịch chụp ảnh hồ sơ chuyên nghiệp ngay hôm nay
            </h2>
            <p className="text-slate-600 mb-6 max-w-2xl mx-auto">
              Hãy để Nhật Studio giúp bạn tạo ấn tượng chuyên nghiệp với ảnh hồ sơ chất lượng cao.
              Đặt lịch ngay hôm nay để được phục vụ tốt nhất!
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button className="bg-slate-800 hover:bg-slate-900">Đặt lịch ngay</Button>
              <Button
                variant="outline"
                className="border-slate-800 text-slate-800 hover:bg-slate-100"
              >
                Liên hệ tư vấn
              </Button>
            </div>
          </div>
        </div>

      {/* Main Content */}
      <section className="py-12 bg-white">
    
      </section>

      {/* Footer */}
      <Footer />
    </main>
  );
}
