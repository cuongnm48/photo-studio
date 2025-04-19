import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import Header from "@/components/header"
import { Facebook, Instagram } from "lucide-react"

export default function AnhTheHoChieu() {
  // Các loại ảnh thẻ
  const photoTypes = [
    {
      id: "3x4",
      name: "Ảnh thẻ 3x4",
      description: "Phù hợp cho hồ sơ xin việc, học sinh, sinh viên",
      images: [
        "https://picsum.photos/id/1012/300/400",
        "https://picsum.photos/id/1027/300/400",
        "https://picsum.photos/id/1001/300/400",
        "https://picsum.photos/id/1002/300/400",
      ],
    },
    {
      id: "4x6",
      name: "Ảnh thẻ 4x6",
      description: "Phù hợp cho hồ sơ xin việc, học sinh, sinh viên",
      images: [
        "https://picsum.photos/id/1005/300/400",
        "https://picsum.photos/id/1010/300/400",
        "https://picsum.photos/id/1011/300/400",
        "https://picsum.photos/id/1012/300/400",
      ],
    },
    {
      id: "visa",
      name: "Ảnh visa & hộ chiếu",
      description: "Đạt chuẩn quốc tế cho hồ sơ visa, hộ chiếu",
      images: [
        "https://picsum.photos/id/1025/300/400",
        "https://picsum.photos/id/1074/300/400",
        "https://picsum.photos/id/1066/300/400",
        "https://picsum.photos/id/1062/300/400",
      ],
    },
    {
      id: "portrait",
      name: "Ảnh chân dung",
      description: "Ảnh chân dung chuyên nghiệp cho nhiều mục đích",
      images: [
        "https://picsum.photos/id/1027/300/400",
        "https://picsum.photos/id/1082/300/400",
        "https://picsum.photos/id/1074/300/400",
        "https://picsum.photos/id/1062/300/400",
      ],
    },
  ]

  // Các tính năng dịch vụ
  const features = [
    {
      title: "Chụp không giới hạn",
      description: "Chụp nhiều kiểu để bạn lựa chọn ảnh ưng ý nhất",
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
          className="lucide lucide-infinity"
        >
          <path d="M12 12c-2-2.67-4-4-6-4a4 4 0 1 0 0 8c2 0 4-1.33 6-4Zm0 0c2 2.67 4 4 6 4a4 4 0 0 0 0-8c-2 0-4 1.33-6 4Z" />
        </svg>
      ),
    },
    {
      title: "Chỉnh sửa cơ bản",
      description: "Chỉnh màu, độ sáng, làm mịn da tự nhiên",
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
          className="lucide lucide-settings"
        >
          <path d="M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z" />
          <circle cx="12" cy="12" r="3" />
        </svg>
      ),
    },
    {
      title: "In nhanh",
      description: "Nhận ảnh sau 5-15 phút tùy số lượng",
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
          className="lucide lucide-printer"
        >
          <polyline points="6 9 6 2 18 2 18 9" />
          <path d="M6 18H4a2 2 0 0 1-2-2v-5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2h-2" />
          <rect width="12" height="8" x="6" y="14" />
        </svg>
      ),
    },
    {
      title: "Đạt chuẩn",
      description: "Đảm bảo đúng kích thước và tiêu chuẩn",
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
          className="lucide lucide-check-circle"
        >
          <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
          <path d="m9 11 3 3L22 4" />
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

      {/* Hero Section */}
      <section className="relative h-[300px] md:h-[400px]">
        <div className="absolute inset-0 bg-gradient-to-r from-slate-900/90 to-slate-900/60 z-10" />
        <Image
          src="https://picsum.photos/id/1005/1920/600"
          alt="Ảnh thẻ & hộ chiếu"
          fill
          priority
          className="object-cover"
          sizes="100vw"
        />
        <div className="relative z-20 container mx-auto px-4 h-full flex flex-col justify-center">
          <h1 className="text-3xl md:text-5xl font-bold text-white mb-4">Ảnh Thẻ & Hộ Chiếu</h1>
          <p className="text-xl md:text-2xl text-white/90 mb-8 max-w-2xl">
            Chụp ảnh thẻ đạt chuẩn cho mọi loại giấy tờ, hồ sơ với chất lượng cao
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto mb-12">
            <h2 className="text-2xl md:text-3xl font-bold mb-4 text-center">Dịch vụ chụp ảnh thẻ chuyên nghiệp</h2>
            <p className="text-slate-600 text-center">
              Nhật Studio cung cấp dịch vụ chụp ảnh thẻ chuyên nghiệp, đạt chuẩn cho mọi loại giấy tờ từ CMND, CCCD, hộ
              chiếu đến visa các nước. Chúng tôi cam kết mang đến cho bạn những tấm ảnh thẻ chất lượng cao, đúng chuẩn
              và tự nhiên.
            </p>
          </div>

          {/* Features */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
            {features.map((feature, index) => (
              <div key={index} className="text-center p-4">
                <div className="bg-rose-100 w-12 h-12 mx-auto rounded-full flex items-center justify-center mb-4">
                  <div className="text-rose-500">{feature.icon}</div>
                </div>
                <h3 className="text-lg font-bold mb-2">{feature.title}</h3>
                <p className="text-slate-600 text-sm">{feature.description}</p>
              </div>
            ))}
          </div>

          {/* Photo Types with Gallery */}
          <div className="mb-12">
            <h2 className="text-2xl font-bold mb-6 text-center">Các loại ảnh thẻ</h2>

            <Tabs defaultValue="3x4" className="w-full">
              <TabsList className="grid grid-cols-4 mb-8">
                {photoTypes.map((type) => (
                  <TabsTrigger key={type.id} value={type.id}>
                    {type.name}
                  </TabsTrigger>
                ))}
              </TabsList>

              {photoTypes.map((type) => (
                <TabsContent key={type.id} value={type.id}>
                  <div className="mb-6">
                    <h3 className="text-2xl font-bold mb-2">{type.name}</h3>
                    <p className="text-slate-600 mb-6">{type.description}</p>
                  </div>

                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                    {type.images.map((image, idx) => (
                      <div key={idx} className="group relative overflow-hidden rounded-lg shadow-md">
                        <div className="relative aspect-[3/4] hover:scale-105 transition-transform duration-300">
                          <Image
                            src={image || "/placeholder.svg"}
                            alt={`${type.name} mẫu ${idx + 1}`}
                            fill
                            className="object-cover"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-3">
                            <p className="text-white font-medium">Mẫu {idx + 1}</p>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>

                  <div className="mt-8 flex justify-center">
                    <Button className="bg-rose-500 hover:bg-rose-600">Đặt lịch chụp ngay</Button>
                  </div>
                </TabsContent>
              ))}
            </Tabs>
          </div>

          {/* Masonry Gallery */}
          <div className="mb-16">
            <h2 className="text-2xl font-bold mb-8 text-center">Bộ sưu tập ảnh thẻ</h2>

            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
              <div className="relative aspect-[3/4] rounded-lg overflow-hidden shadow-md">
                <Image
                  src="https://picsum.photos/id/1001/300/400"
                  alt="Ảnh thẻ mẫu"
                  fill
                  className="object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="relative aspect-[3/4] rounded-lg overflow-hidden shadow-md md:translate-y-8">
                <Image
                  src="https://picsum.photos/id/1002/300/400"
                  alt="Ảnh thẻ mẫu"
                  fill
                  className="object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="relative aspect-[3/4] rounded-lg overflow-hidden shadow-md">
                <Image
                  src="https://picsum.photos/id/1003/300/400"
                  alt="Ảnh thẻ mẫu"
                  fill
                  className="object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="relative aspect-[3/4] rounded-lg overflow-hidden shadow-md md:translate-y-12">
                <Image
                  src="https://picsum.photos/id/1004/300/400"
                  alt="Ảnh thẻ mẫu"
                  fill
                  className="object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="relative aspect-[3/4] rounded-lg overflow-hidden shadow-md">
                <Image
                  src="https://picsum.photos/id/1005/300/400"
                  alt="Ảnh thẻ mẫu"
                  fill
                  className="object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="relative aspect-[3/4] rounded-lg overflow-hidden shadow-md md:translate-y-4">
                <Image
                  src="https://picsum.photos/id/1006/300/400"
                  alt="Ảnh thẻ mẫu"
                  fill
                  className="object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="relative aspect-[3/4] rounded-lg overflow-hidden shadow-md">
                <Image
                  src="https://picsum.photos/id/1010/300/400"
                  alt="Ảnh thẻ mẫu"
                  fill
                  className="object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="relative aspect-[3/4] rounded-lg overflow-hidden shadow-md md:translate-y-8">
                <Image
                  src="https://picsum.photos/id/1011/300/400"
                  alt="Ảnh thẻ mẫu"
                  fill
                  className="object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="relative aspect-[3/4] rounded-lg overflow-hidden shadow-md">
                <Image
                  src="https://picsum.photos/id/1012/300/400"
                  alt="Ảnh thẻ mẫu"
                  fill
                  className="object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="relative aspect-[3/4] rounded-lg overflow-hidden shadow-md md:translate-y-6">
                <Image
                  src="https://picsum.photos/id/1013/300/400"
                  alt="Ảnh thẻ mẫu"
                  fill
                  className="object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>
            </div>
          </div>

          {/* Process */}
          <div className="mb-16">
            <h2 className="text-2xl font-bold mb-8 text-center">Quy trình chụp ảnh thẻ</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="bg-slate-50 p-6 rounded-lg text-center relative">
                <div className="bg-rose-500 text-white w-8 h-8 rounded-full flex items-center justify-center font-bold absolute -top-3 -left-3">
                  1
                </div>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="40"
                  height="40"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="lucide lucide-calendar-check mx-auto mb-4 text-rose-500"
                >
                  <path d="M8 2v4" />
                  <path d="M16 2v4" />
                  <rect width="18" height="18" x="3" y="4" rx="2" />
                  <path d="M3 10h18" />
                  <path d="m9 16 2 2 4-4" />
                </svg>
                <h3 className="font-bold mb-2">Đặt lịch</h3>
                <p className="text-slate-600 text-sm">Đặt lịch trực tuyến hoặc gọi điện</p>
              </div>
              <div className="bg-slate-50 p-6 rounded-lg text-center relative">
                <div className="bg-rose-500 text-white w-8 h-8 rounded-full flex items-center justify-center font-bold absolute -top-3 -left-3">
                  2
                </div>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="40"
                  height="40"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="lucide lucide-camera mx-auto mb-4 text-rose-500"
                >
                  <path d="M14.5 4h-5L7 7H4a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2h-3l-2.5-3z" />
                  <circle cx="12" cy="13" r="3" />
                </svg>
                <h3 className="font-bold mb-2">Chụp ảnh</h3>
                <p className="text-slate-600 text-sm">Chụp nhiều kiểu để lựa chọn</p>
              </div>
              <div className="bg-slate-50 p-6 rounded-lg text-center relative">
                <div className="bg-rose-500 text-white w-8 h-8 rounded-full flex items-center justify-center font-bold absolute -top-3 -left-3">
                  3
                </div>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="40"
                  height="40"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="lucide lucide-settings mx-auto mb-4 text-rose-500"
                >
                  <path d="M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z" />
                  <circle cx="12" cy="12" r="3" />
                </svg>
                <h3 className="font-bold mb-2">Chỉnh sửa</h3>
                <p className="text-slate-600 text-sm">Chỉnh sửa cơ bản theo yêu cầu</p>
              </div>
              <div className="bg-slate-50 p-6 rounded-lg text-center relative">
                <div className="bg-rose-500 text-white w-8 h-8 rounded-full flex items-center justify-center font-bold absolute -top-3 -left-3">
                  4
                </div>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="40"
                  height="40"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="lucide lucide-printer mx-auto mb-4 text-rose-500"
                >
                  <polyline points="6 9 6 2 18 2 18 9" />
                  <path d="M6 18H4a2 2 0 0 1-2-2v-5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2h-2" />
                  <rect width="12" height="8" x="6" y="14" />
                </svg>
                <h3 className="font-bold mb-2">In ảnh</h3>
                <p className="text-slate-600 text-sm">In ảnh chất lượng cao</p>
              </div>
            </div>
          </div>

          {/* CTA */}
          <div className="bg-rose-50 p-8 rounded-xl text-center">
            <h2 className="text-2xl font-bold mb-4">Đặt lịch chụp ảnh thẻ ngay hôm nay</h2>
            <p className="text-slate-600 mb-6 max-w-2xl mx-auto">
              Chúng tôi cam kết mang đến cho bạn những tấm ảnh thẻ chất lượng cao, đúng chuẩn và tự nhiên. Hãy đặt lịch
              ngay hôm nay để được phục vụ tốt nhất!
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button className="bg-rose-500 hover:bg-rose-600">Đặt lịch ngay</Button>
              <Button variant="outline">Liên hệ tư vấn</Button>
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
