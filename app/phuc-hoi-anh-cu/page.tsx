import Image from "next/image"
import Link from "next/link"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import Header from "@/components/header"
import { Facebook, Instagram } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function PhucHoiAnhCu() {
  // Các mẫu ảnh phục hồi
  const restorationSamples = [
    {
      id: "sample1",
      title: "Ảnh gia đình thập niên 80",
      beforeImage: "https://picsum.photos/id/1059/600/800",
      afterImage: "https://picsum.photos/id/1068/600/800",
      description: "Phục hồi màu sắc, xử lý vết nứt và làm sắc nét",
    },
    {
      id: "sample2",
      title: "Ảnh cưới thập niên 70",
      beforeImage: "https://picsum.photos/id/1060/600/800",
      afterImage: "https://picsum.photos/id/1069/600/800",
      description: "Khôi phục chi tiết, cân bằng màu sắc và loại bỏ vết bẩn",
    },
    {
      id: "sample3",
      title: "Ảnh chân dung thập niên 60",
      beforeImage: "https://picsum.photos/id/1061/600/800",
      afterImage: "https://picsum.photos/id/1070/600/800",
      description: "Phục hồi độ tương phản, làm sắc nét và tái tạo chi tiết bị mất",
    },
  ]

  // Các dịch vụ phục hồi
  const restorationServices = [
    {
      title: "Phục hồi cơ bản",
      description: "Sửa chữa vết nứt, vết xước, làm sạch vết bẩn và cân bằng màu sắc",
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
          className="lucide lucide-image"
        >
          <rect width="18" height="18" x="3" y="3" rx="2" ry="2" />
          <circle cx="9" cy="9" r="2" />
          <path d="m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21" />
        </svg>
      ),
    },
    {
      title: "Phục hồi nâng cao",
      description: "Tái tạo các phần bị mất, phục hồi chi tiết và cải thiện độ sắc nét",
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
          className="lucide lucide-image-plus"
        >
          <path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h7" />
          <line x1="16" x2="22" y1="5" y2="5" />
          <line x1="19" x2="19" y1="2" y2="8" />
          <circle cx="9" cy="9" r="2" />
          <path d="m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21" />
        </svg>
      ),
    },
    {
      title: "Tô màu ảnh đen trắng",
      description: "Thêm màu sắc tự nhiên cho ảnh đen trắng dựa trên nghiên cứu lịch sử",
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
          className="lucide lucide-palette"
        >
          <circle cx="13.5" cy="6.5" r=".5" />
          <circle cx="17.5" cy="10.5" r=".5" />
          <circle cx="8.5" cy="7.5" r=".5" />
          <circle cx="6.5" cy="12.5" r=".5" />
          <path d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10c.926 0 1.648-.746 1.648-1.688 0-.437-.18-.835-.437-1.125-.29-.289-.438-.652-.438-1.125a1.64 1.64 0 0 1 1.668-1.668h1.996c3.051 0 5.555-2.503 5.555-5.554C21.965 6.012 17.461 2 12 2z" />
        </svg>
      ),
    },
    {
      title: "Phục hồi ảnh bị hư hỏng nặng",
      description: "Khôi phục ảnh bị rách, cháy, ố vàng hoặc bị hư hỏng nặng",
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
          className="lucide lucide-hammer"
        >
          <path d="m15 12-8.5 8.5c-.83.83-2.17.83-3 0 0 0 0 0 0 0a2.12 2.12 0 0 1 0-3L12 9" />
          <path d="M17.64 15 22 10.64" />
          <path d="m20.91 11.7-1.25-1.25c-.6-.6-.93-1.4-.93-2.25v-.86L16.01 4.6a5.56 5.56 0 0 0-3.94-1.64H9l.92.82A6.18 6.18 0 0 1 12 8.4v1.56l2 2h2.47l2.26 1.91" />
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
          src="https://picsum.photos/id/1059/1920/600"
          alt="Phục hồi ảnh cũ"
          fill
          priority
          className="object-cover"
          sizes="100vw"
        />
        <div className="relative z-20 container mx-auto px-4 h-full flex flex-col justify-center">
          <h1 className="text-3xl md:text-5xl font-bold text-white mb-4">Phục Hồi Ảnh Cũ</h1>
          <p className="text-xl md:text-2xl text-white/90 mb-8 max-w-2xl">
            Khôi phục kỷ niệm quý giá của bạn với công nghệ phục hồi ảnh hiện đại
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto mb-12">
            <h2 className="text-2xl md:text-3xl font-bold mb-4 text-center">Dịch vụ phục hồi ảnh cũ</h2>
            <p className="text-slate-600 text-center">
              Nhật Studio cung cấp dịch vụ phục hồi ảnh cũ chuyên nghiệp, giúp bạn khôi phục những kỷ niệm quý giá đã bị
              hư hỏng theo thời gian. Chúng tôi sử dụng công nghệ hiện đại kết hợp với kỹ thuật thủ công tinh tế để mang
              lại kết quả tốt nhất.
            </p>
          </div>

          {/* Before-After Samples */}
          <div className="mb-16">
            <h2 className="text-2xl font-bold mb-8 text-center">Mẫu phục hồi ảnh</h2>

            <Tabs defaultValue="sample1" className="w-full">
              <TabsList className="grid grid-cols-3 mb-8">
                {restorationSamples.map((sample) => (
                  <TabsTrigger key={sample.id} value={sample.id}>
                    {sample.title}
                  </TabsTrigger>
                ))}
              </TabsList>

              {restorationSamples.map((sample) => (
                <TabsContent key={sample.id} value={sample.id}>
                  <div className="grid md:grid-cols-2 gap-8 items-center">
                    <div className="space-y-6">
                      <div className="relative aspect-[3/4] rounded-lg overflow-hidden shadow-md">
                        <Image src={sample.beforeImage || "/placeholder.svg"} alt="Ảnh trước khi phục hồi" fill className="object-cover" />
                        <div className="absolute top-0 left-0 bg-amber-600 text-white px-3 py-1 rounded-br-lg font-medium">
                          Trước
                        </div>
                      </div>
                      <div className="text-center">
                        <p className="text-slate-500 italic">Ảnh gốc trước khi phục hồi</p>
                      </div>
                    </div>

                    <div className="space-y-6">
                      <div className="relative aspect-[3/4] rounded-lg overflow-hidden shadow-md">
                        <Image src={sample.afterImage || "/placeholder.svg"} alt="Ảnh sau khi phục hồi" fill className="object-cover" />
                        <div className="absolute top-0 left-0 bg-emerald-600 text-white px-3 py-1 rounded-br-lg font-medium">
                          Sau
                        </div>
                      </div>
                      <div className="text-center">
                        <p className="text-slate-500 italic">Ảnh sau khi phục hồi</p>
                      </div>
                    </div>
                  </div>

                  <div className="mt-8 bg-amber-50 p-6 rounded-lg">
                    <h3 className="text-xl font-bold mb-2">{sample.title}</h3>
                    <p className="text-slate-600">{sample.description}</p>
                  </div>
                </TabsContent>
              ))}
            </Tabs>
          </div>

          {/* Services */}
          <div className="mb-16 bg-slate-50 py-12 px-4 rounded-xl">
            <h2 className="text-2xl font-bold mb-8 text-center">Các dịch vụ phục hồi ảnh</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {restorationServices.map((service, index) => (
                <div key={index} className="text-center p-4">
                  <div className="bg-amber-100 w-16 h-16 mx-auto rounded-full flex items-center justify-center mb-4 shadow-md">
                    <div className="text-amber-700">{service.icon}</div>
                  </div>
                  <h3 className="text-lg font-bold mb-2">{service.title}</h3>
                  <p className="text-slate-600 text-sm">{service.description}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Process */}
          <section className="mb-16">
            <h2 className="text-2xl font-bold mb-8 text-center">Quy trình phục hồi ảnh cũ</h2>
            <div className="relative">
              {/* Timeline line */}
              <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-0.5 bg-amber-200 transform -translate-x-1/2"></div>

              {/* Step 1 */}
              <div className="relative md:grid md:grid-cols-2 md:gap-8 mb-12">
                <div className="md:text-right md:pr-8">
                  <div className="hidden md:block absolute right-0 top-0 w-4 h-4 rounded-full bg-amber-500 transform translate-x-1/2"></div>
                  <h3 className="text-xl font-bold mb-2">1. Tiếp nhận và đánh giá</h3>
                  <p className="text-slate-600">
                    Chúng tôi tiếp nhận ảnh cũ của bạn, đánh giá mức độ hư hỏng và lên kế hoạch phục hồi phù hợp.
                  </p>
                </div>
                <div className="hidden md:block"></div>
              </div>

              {/* Step 2 */}
              <div className="relative md:grid md:grid-cols-2 md:gap-8 mb-12">
                <div className="hidden md:block"></div>
                <div className="md:pl-8">
                  <div className="hidden md:block absolute left-0 top-0 w-4 h-4 rounded-full bg-amber-500 transform -translate-x-1/2"></div>
                  <h3 className="text-xl font-bold mb-2">2. Scan ảnh chất lượng cao</h3>
                  <p className="text-slate-600">
                    Ảnh của bạn được scan với độ phân giải cao để đảm bảo giữ lại tất cả các chi tiết có thể.
                  </p>
                </div>
              </div>

              {/* Step 3 */}
              <div className="relative md:grid md:grid-cols-2 md:gap-8 mb-12">
                <div className="md:text-right md:pr-8">
                  <div className="hidden md:block absolute right-0 top-0 w-4 h-4 rounded-full bg-amber-500 transform translate-x-1/2"></div>
                  <h3 className="text-xl font-bold mb-2">3. Phục hồi kỹ thuật số</h3>
                  <p className="text-slate-600">
                    Chuyên gia của chúng tôi sử dụng công nghệ hiện đại để sửa chữa các vết nứt, vết bẩn, và khôi phục
                    màu sắc.
                  </p>
                </div>
                <div className="hidden md:block"></div>
              </div>

              {/* Step 4 */}
              <div className="relative md:grid md:grid-cols-2 md:gap-8 mb-12">
                <div className="hidden md:block"></div>
                <div className="md:pl-8">
                  <div className="hidden md:block absolute left-0 top-0 w-4 h-4 rounded-full bg-amber-500 transform -translate-x-1/2"></div>
                  <h3 className="text-xl font-bold mb-2">4. Kiểm tra và điều chỉnh</h3>
                  <p className="text-slate-600">
                    Kết quả được kiểm tra kỹ lưỡng và điều chỉnh để đảm bảo chất lượng tốt nhất.
                  </p>
                </div>
              </div>

              {/* Step 5 */}
              <div className="relative md:grid md:grid-cols-2 md:gap-8">
                <div className="md:text-right md:pr-8">
                  <div className="hidden md:block absolute right-0 top-0 w-4 h-4 rounded-full bg-amber-500 transform translate-x-1/2"></div>
                  <h3 className="text-xl font-bold mb-2">5. Bàn giao sản phẩm</h3>
                  <p className="text-slate-600">
                    Bạn nhận được ảnh đã phục hồi dưới dạng file kỹ thuật số và bản in chất lượng cao (nếu yêu cầu).
                  </p>
                </div>
              </div>

            </div>
          </section>
          </div>
          </section></main>
  )
}