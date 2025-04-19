import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Facebook, Instagram } from "lucide-react"

export default function AnhHoSoChuyenNghiep() {
  // Các mẫu ảnh hồ sơ chuyên nghiệp
  const professionalPhotos = [
    {
      title: "Ảnh hồ sơ doanh nhân",
      description: "Phù hợp cho CEO, quản lý cấp cao",
      image: "https://picsum.photos/id/1076/600/800",
    },
    {
      title: "Ảnh hồ sơ chuyên gia",
      description: "Phù hợp cho chuyên gia, tư vấn viên",
      image: "https://picsum.photos/id/1077/600/800",
    },
    {
      title: "Ảnh hồ sơ nhân viên văn phòng",
      description: "Phù hợp cho nhân viên văn phòng, hành chính",
      image: "https://picsum.photos/id/1066/600/800",
    },
    {
      title: "Ảnh hồ sơ LinkedIn",
      description: "Tối ưu cho mạng xã hội chuyên nghiệp",
      image: "https://picsum.photos/id/1074/600/800",
    },
  ]

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
  ]

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
  ]

  return (
    <main className="min-h-screen">
      {/* Header */}
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
                href="/#services"
                className="text-gray-600 hover:text-rose-500 transition-colors"
              >
                Dịch Vụ
              </Link>
              <Link href="/#pricing" className="text-gray-600 hover:text-rose-500 transition-colors">
                Bảng Giá
              </Link>
              <Link href="/#about" className="text-gray-600 hover:text-rose-500 transition-colors">
                Về Chúng Tôi
              </Link>
              <Link
                href="/#testimonials"
                className="text-gray-600 hover:text-rose-500 transition-colors"
              >
                Đánh Giá
              </Link>
              <Link href="/#contact" className="text-gray-600 hover:text-rose-500 transition-colors">
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

      {/* Hero Section */}
      <section className="relative h-[300px] md:h-[400px]">
        <div className="absolute inset-0 bg-gradient-to-r from-slate-900/90 to-slate-900/60 z-10" />
        <Image
          src="https://picsum.photos/id/1070/1920/600"
          alt="Ảnh hồ sơ chuyên nghiệp"
          fill
          priority
          className="object-cover"
          sizes="100vw"
        />
        <div className="relative z-20 container mx-auto px-4 h-full flex flex-col justify-center">
          <h1 className="text-3xl md:text-5xl font-bold text-white mb-4">Ảnh Hồ Sơ Chuyên Nghiệp</h1>
          <p className="text-xl md:text-2xl text-white/90 mb-8 max-w-2xl">
            Tạo ấn tượng chuyên nghiệp và đẳng cấp với ảnh hồ sơ chất lượng cao
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto mb-12">
            <h2 className="text-2xl md:text-3xl font-bold mb-4 text-center">Dịch vụ chụp ảnh hồ sơ chuyên nghiệp</h2>
            <p className="text-slate-600 text-center">
              Nhật Studio cung cấp dịch vụ chụp ảnh hồ sơ chuyên nghiệp, giúp bạn tạo ấn tượng tốt nhất trong môi trường
              công sở và kinh doanh. Chúng tôi hiểu rằng một tấm ảnh hồ sơ chuyên nghiệp có thể mang lại nhiều cơ hội
              cho sự nghiệp của bạn.
            </p>
          </div>

          {/* Featured Photos */}
          <div className="mb-16">
            <h2 className="text-2xl font-bold mb-8 text-center">Mẫu ảnh hồ sơ chuyên nghiệp</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {professionalPhotos.map((photo, index) => (
                <div key={index} className="group relative overflow-hidden rounded-lg shadow-lg">
                  <div className="relative h-[400px]">
                    <Image
                      src={photo.image || "/placeholder.svg"}
                      alt={photo.title}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-4">
                      <h3 className="text-white font-bold text-xl mb-2">{photo.title}</h3>
                      <p className="text-white/80 text-sm">{photo.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Benefits */}
          <div className="mb-16 bg-slate-50 py-12 px-4 rounded-xl">
            <h2 className="text-2xl font-bold mb-8 text-center">Lợi ích của ảnh hồ sơ chuyên nghiệp</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {benefits.map((benefit, index) => (
                <div key={index} className="text-center p-4">
                  <div className="bg-slate-100 w-16 h-16 mx-auto rounded-full flex items-center justify-center mb-4 shadow-md">
                    <div className="text-slate-700">{benefit.icon}</div>
                  </div>
                  <h3 className="text-lg font-bold mb-2">{benefit.title}</h3>
                  <p className="text-slate-600 text-sm">{benefit.description}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Photo Styles */}
          <div className="mb-16">
            <h2 className="text-2xl font-bold mb-8 text-center">Phong cách chụp ảnh</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {photoStyles.map((style, index) => (
                <Card key={index} className="overflow-hidden">
                  <div className="relative h-48">
                    <Image src={style.image || "/placeholder.svg"} alt={style.name} fill className="object-cover" />
                  </div>
                  <CardContent className="p-6">
                    <h3 className="text-xl font-bold mb-2">{style.name}</h3>
                    <p className="text-slate-600 mb-4">{style.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Featured Gallery */}
          <div className="mb-16">
            <h2 className="text-2xl font-bold mb-8 text-center">Bộ sưu tập ảnh hồ sơ</h2>
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

          {/* CTA */}
          <div className="bg-slate-100 p-8 rounded-xl text-center">
            <h2 className="text-2xl font-bold mb-4">Đặt lịch chụp ảnh hồ sơ chuyên nghiệp ngay hôm nay</h2>
            <p className="text-slate-600 mb-6 max-w-2xl mx-auto">
              Hãy để Nhật Studio giúp bạn tạo ấn tượng chuyên nghiệp với ảnh hồ sơ chất lượng cao. Đặt lịch ngay hôm nay
              để được phục vụ tốt nhất!
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button className="bg-slate-800 hover:bg-slate-900">Đặt lịch ngay</Button>
              <Button variant="outline" className="border-slate-800 text-slate-800 hover:bg-slate-100">
                Liên hệ tư vấn
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-900 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <div className="bg-rose-500 text-white rounded-full w-10 h-10 flex items-center justify-center font-bold">
                  NS
                </div>
                <h3 className="text-xl font-bold">Nhật Studio</h3>
              </div>
              <p className="text-slate-300 mb-4">
                Chuyên cung cấp dịch vụ chụp ảnh chuyên nghiệp với chất lượng cao nhất
              </p>
              <div className="flex gap-4">
                <a href="#" className="text-white hover:text-rose-300">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="lucide lucide-facebook"
                  >
                    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
                  </svg>
                </a>
                <a href="#" className="text-white hover:text-rose-300">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="lucide lucide-instagram"
                  >
                    <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
                    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                    <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
                  </svg>
                </a>
                <a href="#" className="text-white hover:text-rose-300">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="lucide lucide-youtube"
                  >
                    <path d="M2.5 17a24.12 24.12 0 0 1 0-10 2 2 0 0 1 1.4-1.4 49.56 49.56 0 0 1 16.2 0A2 2 0 0 1 21.5 7a24.12 24.12 0 0 1 0 10 2 2 0 0 1-1.4 1.4 49.55 49.55 0 0 1-16.2 0A2 2 0 0 1 2.5 17" />
                    <path d="m10 15 5-3-5-3z" />
                  </svg>
                </a>
              </div>
            </div>
            <div>
              <h3 className="text-lg font-bold mb-4">Liên hệ</h3>
              <div className="space-y-3 text-slate-300">
                <p className="flex items-center gap-2">
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
                    className="lucide lucide-map-pin"
                  >
                    <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
                    <circle cx="12" cy="10" r="3" />
                  </svg>
                  123 Đường Lê Lợi, Quận 1, TP.HCM
                </p>
                <p className="flex items-center gap-2">
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
                    className="lucide lucide-phone"
                  >
                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                  </svg>
                  0123 456 789
                </p>
                <p className="flex items-center gap-2">
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
                    className="lucide lucide-mail"
                  >
                    <rect width="20" height="16" x="2" y="4" rx="2" />
                    <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
                  </svg>
                  info@nhatstudio.com
                </p>
              </div>
            </div>
            <div>
              <h3 className="text-lg font-bold mb-4">Giờ làm việc</h3>
              <div className="space-y-2 text-slate-300">
                <p>Thứ 2 - Thứ 6: 8:00 - 20:00</p>
                <p>Thứ 7 - Chủ nhật: 9:00 - 18:00</p>
              </div>
            </div>
          </div>
          <div className="border-t border-slate-700 mt-8 pt-8 text-center text-slate-400">
            <p>© {new Date().getFullYear()} Nhật Studio. Tất cả quyền được bảo lưu.</p>
          </div>
        </div>
      </footer>
    </main>
  )
}
