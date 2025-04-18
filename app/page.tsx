import Image from "next/image"
import Link from "next/link"
import { Facebook, Instagram, Mail, MapPin, Phone } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import TestimonialCard from "@/components/testimonial-card"
import PricingCard from "@/components/pricing-card"
import ServiceCard from "@/components/service-card"

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col">
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
              <Link href="#services" className="text-gray-600 hover:text-rose-500 transition-colors">
                Dịch Vụ
              </Link>
              <Link href="#pricing" className="text-gray-600 hover:text-rose-500 transition-colors">
                Bảng Giá
              </Link>
              <Link href="#about" className="text-gray-600 hover:text-rose-500 transition-colors">
                Về Chúng Tôi
              </Link>
              <Link href="#testimonials" className="text-gray-600 hover:text-rose-500 transition-colors">
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

      {/* Banner Section */}
      <section className="relative bg-gradient-to-r from-gray-900 to-gray-800 text-white">
        <div className="absolute inset-0 opacity-30">
          <Image src="/banner-bg.jpg" alt="Nền chụp ảnh" fill className="object-cover" priority />
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-28 lg:py-32 relative z-10">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div className="space-y-6">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">Lưu Giữ Khoảnh Khắc Hoàn Hảo</h1>
              <p className="text-lg md:text-xl text-gray-200 max-w-lg">
                Dịch vụ chụp ảnh chuyên nghiệp cho ảnh thẻ, chân dung và các dịp đặc biệt với chỉnh sửa chuyên nghiệp.
              </p>
              <div className="flex flex-wrap gap-4">
                <Button size="lg" className="bg-rose-500 hover:bg-rose-600">
                  Đặt Lịch Ngay
                </Button>
                <Button size="lg" variant="outline" className="text-black border-white hover:bg-white/10">
                  Xem Bộ Sưu Tập
                </Button>
              </div>
            </div>
            <div className="hidden md:block">
              <div className="relative h-[400px] w-full">
                <Image src="https://picsum.photos/500/300" alt="Máy ảnh chuyên nghiệp" fill className="object-contain" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* First Section - Photo Enhancement */}
      <section id="services" className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900">Dịch Vụ Chỉnh Sửa Ảnh</h2>
            <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
              Biến đổi ảnh của bạn với dịch vụ chỉnh sửa và nâng cao chuyên nghiệp của chúng tôi
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <ServiceCard
              icon="edit"
              title="Xóa Phông Nền"
              description="Xóa phông nền chuyên nghiệp cho bất kỳ bức ảnh nào với đường viền sạch và kết quả hoàn hảo"
            />
            <ServiceCard
              icon="wand"
              title="Trang Điểm Bằng Phần Mềm"
              description="Chỉnh sửa chuyên nghiệp để nâng cao ảnh của bạn trong khi vẫn giữ vẻ tự nhiên"
            />
            <ServiceCard
              icon="ruler"
              title="Cân Đối Tỷ Lệ Vàng"
              description="Tỷ lệ khuôn mặt hoàn hảo sử dụng tỷ lệ vàng cho ảnh cân đối và thẩm mỹ"
            />
            <ServiceCard
              icon="cloud"
              title="Lưu Trữ Vĩnh Viễn"
              description="Ảnh của bạn được lưu trữ an toàn vĩnh viễn với quyền truy cập dễ dàng khi bạn cần"
            />
          </div>
        </div>
      </section>

      {/* Second Section - Photography Services */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900">Dịch Vụ Chụp Ảnh</h2>
            <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
              Chụp ảnh chuyên nghiệp cho mọi nhu cầu của bạn, từ ảnh thẻ đến ảnh chân dung
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="overflow-hidden border-0 shadow-lg">
              <div className="relative h-64">
                <Image src="/id-photo.jpg" alt="Ảnh thẻ" fill className="object-cover" />
              </div>
              <CardContent className="p-6">
                <h3 className="text-xl font-bold mb-2">Ảnh Thẻ & Hộ Chiếu</h3>
                <p className="text-gray-600">
                  Ảnh thẻ và hộ chiếu đáp ứng mọi yêu cầu chính thức. Sẵn sàng trong vài phút.
                </p>
              </CardContent>
            </Card>

            <Card className="overflow-hidden border-0 shadow-lg">
              <div className="relative h-64">
                <Image src="/portrait.jpg" alt="Ảnh chân dung" fill className="object-cover" />
              </div>
              <CardContent className="p-6">
                <h3 className="text-xl font-bold mb-2">Chụp Ảnh Chân Dung</h3>
                <p className="text-gray-600">
                  Ảnh chân dung chuyên nghiệp thể hiện cá tính và giúp bạn trông đẹp nhất.
                </p>
              </CardContent>
            </Card>

            <Card className="overflow-hidden border-0 shadow-lg">
              <div className="relative h-64">
                <Image src="/restoration.jpg" alt="Phục hồi ảnh" fill className="object-cover" />
              </div>
              <CardContent className="p-6">
                <h3 className="text-xl font-bold mb-2">Phục Hồi Ảnh Cũ</h3>
                <p className="text-gray-600">
                  Khôi phục ảnh cũ và hư hỏng với dịch vụ phục hồi chuyên nghiệp của chúng tôi.
                </p>
              </CardContent>
            </Card>

            <Card className="overflow-hidden border-0 shadow-lg">
              <div className="relative h-64">
                <Image src="/profile.jpg" alt="Ảnh hồ sơ" fill className="object-cover" />
              </div>
              <CardContent className="p-6">
                <h3 className="text-xl font-bold mb-2">Ảnh Hồ Sơ Chuyên Nghiệp</h3>
                <p className="text-gray-600">Nổi bật trên LinkedIn và các nền tảng khác với ảnh hồ sơ chuyên nghiệp.</p>
              </CardContent>
            </Card>

            <Card className="overflow-hidden border-0 shadow-lg">
              <div className="relative h-64">
                <Image src="/personal.jpg" alt="Ảnh cá nhân" fill className="object-cover" />
              </div>
              <CardContent className="p-6">
                <h3 className="text-xl font-bold mb-2">Chụp Ảnh Cá Nhân</h3>
                <p className="text-gray-600">
                  Lưu giữ khoảnh khắc đặc biệt cùng bạn bè và gia đình trong studio chuyên nghiệp của chúng tôi.
                </p>
              </CardContent>
            </Card>

            <Card className="overflow-hidden border-0 shadow-lg">
              <div className="relative h-64">
                <Image src="/delivery.jpg" alt="Giao hàng tận nơi" fill className="object-cover" />
              </div>
              <CardContent className="p-6">
                <h3 className="text-xl font-bold mb-2">Giao Hàng Tận Nơi</h3>
                <p className="text-gray-600">
                  Nhận ảnh in của bạn được giao trực tiếp đến tận nhà để thuận tiện tối đa.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Third Section - Pricing */}
      <section id="pricing" className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900">Bảng Giá</h2>
            <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
              Giá cả minh bạch cho tất cả dịch vụ chụp ảnh của chúng tôi
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <PricingCard
              title="Ảnh Thẻ"
              price="15"
              features={[
                "4 bản in",
                "Bản kỹ thuật số",
                "Hoàn thành trong 5 phút",
                "Đáp ứng yêu cầu chính thức",
                "Bao gồm chỉnh sửa",
              ]}
              popular={false}
            />

            <PricingCard
              title="Chụp Chân Dung"
              price="49"
              features={[
                "Buổi chụp 30 phút",
                "5 ảnh kỹ thuật số đã chỉnh sửa",
                "1 ảnh in cỡ 8×10",
                "Ánh sáng chuyên nghiệp",
                "Nhiều tư thế khác nhau",
              ]}
              popular={true}
            />

            <PricingCard
              title="Gói Hoàn Chỉnh"
              price="99"
              features={[
                "Buổi chụp 1 giờ",
                "10 ảnh kỹ thuật số đã chỉnh sửa",
                "3 ảnh in cỡ 8×10",
                "Nhiều phông nền khác nhau",
                "Bao gồm giao hàng tận nơi",
              ]}
              popular={false}
            />
          </div>
        </div>
      </section>

      {/* Fourth Section - About Us */}
      <section id="about" className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900">Tại Sao Chọn Chúng Tôi</h2>
            <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
              Chúng tôi cam kết mang đến trải nghiệm chụp ảnh tốt nhất
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-lg shadow-md text-center">
              <div className="w-16 h-16 bg-rose-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-8 w-8 text-rose-500"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-2">Giá Tốt Nhất</h3>
              <p className="text-gray-600">
                Chúng tôi cung cấp mức giá cạnh tranh nhất trên thị trường mà không ảnh hưởng đến chất lượng.
              </p>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-md text-center">
              <div className="w-16 h-16 bg-rose-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-8 w-8 text-rose-500"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-2">Ảnh Đẹp</h3>
              <p className="text-gray-600">
                Nhiếp ảnh gia của chúng tôi là chuyên gia về bố cục, ánh sáng và nắm bắt góc đẹp nhất của bạn.
              </p>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-md text-center">
              <div className="w-16 h-16 bg-rose-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-8 w-8 text-rose-500"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9.5 9.5c.96-1.35 3.59-1.35 4.55 0 .96 1.35 1.04 3.549 0 4.9-.96 1.35-3.59 1.35-4.55 0-1.04-1.351-.96-3.55 0-4.9z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-2">Dịch Vụ Tận Tâm</h3>
              <p className="text-gray-600">
                Đội ngũ thân thiện của chúng tôi cam kết cung cấp dịch vụ cá nhân hóa và đảm bảo sự hài lòng của bạn.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Fifth Section - Testimonials */}
      <section id="testimonials" className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900">Đánh Giá Từ Khách Hàng</h2>
            <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
              Xem những gì khách hàng nói về trải nghiệm với chúng tôi
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <TestimonialCard
              name="Minh Nguyễn"
              role="Chuyên Gia Kinh Doanh"
              image="/testimonial-1.jpg"
              rating={5}
              testimonial="Đội ngũ tại Nhật Studio đã làm rất tốt với ảnh hồ sơ LinkedIn của tôi. Rất chuyên nghiệp và kết quả vượt quá mong đợi của tôi!"
            />

            <TestimonialCard
              name="Linh Trần"
              role="Sinh Viên"
              image="/testimonial-2.jpg"
              rating={5}
              testimonial="Tôi cần ảnh hộ chiếu gấp cho đơn xin visa. Ảnh được hoàn thành trong vài phút và đáp ứng hoàn hảo mọi yêu cầu. Dịch vụ tuyệt vời!"
            />

            <TestimonialCard
              name="Hải Phạm"
              role="Khách Hàng Gia Đình"
              image="/testimonial-3.jpg"
              rating={4}
              testimonial="Chúng tôi đã chụp ảnh gia đình ở đây và ảnh rất đẹp. Nhiếp ảnh gia rất kiên nhẫn với con của chúng tôi và đã ghi lại những khoảnh khắc tuyệt vời."
            />
          </div>
        </div>
      </section>

      {/* Google Map Section */}
      <section id="location" className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900">Tìm Chúng Tôi</h2>
            <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
              Ghé thăm studio của chúng tôi để sử dụng dịch vụ chụp ảnh chuyên nghiệp
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-bold mb-4">Thông Tin Liên Hệ</h3>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <MapPin className="text-rose-500 mt-1 flex-shrink-0" />
                  <p>123 Đường Nhiếp Ảnh, Quận 1, Thành phố Hồ Chí Minh, Việt Nam</p>
                </div>
                <div className="flex items-center space-x-3">
                  <Phone className="text-rose-500 flex-shrink-0" />
                  <p>+84 123 456 789</p>
                </div>
                <div className="flex items-center space-x-3">
                  <Mail className="text-rose-500 flex-shrink-0" />
                  <p>info@nhatstudio.com</p>
                </div>
                <div>
                  <h4 className="font-medium mb-2">Giờ Mở Cửa:</h4>
                  <p>Thứ Hai - Thứ Sáu: 9:00 - 19:00</p>
                  <p>Thứ Bảy: 9:00 - 17:00</p>
                  <p>Chủ Nhật: Đóng cửa</p>
                </div>
              </div>
            </div>

            <div className="h-[400px] bg-gray-200 rounded-lg overflow-hidden">
              {/* This would be replaced with an actual Google Maps embed */}
              <div className="w-full h-full flex items-center justify-center bg-gray-300">
                <p className="text-gray-600">Bản đồ Google sẽ được nhúng ở đây</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Me Section */}
      <section id="about-me" className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="relative h-[500px]">
              <Image
                src="/photographer.jpg"
                alt="Nhiếp ảnh gia chuyên nghiệp"
                fill
                className="object-cover rounded-lg"
              />
            </div>

            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Về Tôi</h2>
              <p className="text-lg text-gray-600 mb-4">
                Xin chào! Tôi là Nhật, một nhiếp ảnh gia chuyên nghiệp với hơn 10 năm kinh nghiệm chuyên về chụp ảnh
                chân dung và ảnh thẻ.
              </p>
              <p className="text-lg text-gray-600 mb-4">
                Niềm đam mê nhiếp ảnh của tôi bắt đầu từ khi tôi còn là một thiếu niên, và tôi đã không ngừng trau dồi
                kỹ năng kể từ đó. Tôi thành lập Nhật Studio với sứ mệnh cung cấp dịch vụ chụp ảnh chất lượng cao với giá
                cả phải chăng.
              </p>
              <p className="text-lg text-gray-600 mb-4">
                Tôi tin rằng mọi người đều xứng đáng có những bức ảnh đẹp thể hiện con người tốt nhất của họ. Dù bạn cần
                một tấm ảnh thẻ đơn giản hay một bức chân dung chuyên nghiệp, tôi cam kết mang đến kết quả xuất sắc.
              </p>
              <p className="text-lg text-gray-600 mb-6">
                Tôi mong được chào đón bạn đến studio của chúng tôi và giúp bạn tạo ra những kỷ niệm đẹp!
              </p>
              <div className="flex space-x-4">
                <Link href="#" className="text-rose-500 hover:text-rose-600">
                  <Facebook size={24} />
                </Link>
                <Link href="#" className="text-rose-500 hover:text-rose-600">
                  <Instagram size={24} />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer id="contact" className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-xl font-bold mb-4">Nhật Studio</h3>
              <p className="text-gray-300 mb-4">
                Dịch vụ chụp ảnh chuyên nghiệp cho mọi nhu cầu của bạn. Ảnh chất lượng với giá cả phải chăng.
              </p>
              <div className="flex space-x-4">
                <Link href="#" className="text-gray-300 hover:text-white">
                  <Facebook size={20} />
                </Link>
                <Link href="#" className="text-gray-300 hover:text-white">
                  <Instagram size={20} />
                </Link>
              </div>
            </div>

            <div>
              <h3 className="text-lg font-bold mb-4">Dịch Vụ</h3>
              <ul className="space-y-2">
                <li>
                  <Link href="#" className="text-gray-300 hover:text-white">
                    Ảnh Thẻ
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-gray-300 hover:text-white">
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

            <div>
              <h3 className="text-lg font-bold mb-4">Liên Kết Nhanh</h3>
              <ul className="space-y-2">
                <li>
                  <Link href="#" className="text-gray-300 hover:text-white">
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
                  <Link href="#pricing" className="text-gray-300 hover:text-white">
                    Bảng Giá
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

            <div>
              <h3 className="text-lg font-bold mb-4">Liên Hệ Chúng Tôi</h3>
              <ul className="space-y-2">
                <li className="flex items-start space-x-3">
                  <MapPin className="text-rose-400 mt-1 flex-shrink-0" size={18} />
                  <span className="text-gray-300">123 Đường Nhiếp Ảnh, Quận 1, Thành phố Hồ Chí Minh</span>
                </li>
                <li className="flex items-center space-x-3">
                  <Phone className="text-rose-400 flex-shrink-0" size={18} />
                  <span className="text-gray-300">+84 123 456 789</span>
                </li>
                <li className="flex items-center space-x-3">
                  <Mail className="text-rose-400 flex-shrink-0" size={18} />
                  <span className="text-gray-300">info@nhatstudio.com</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400">
            <p>&copy; {new Date().getFullYear()} Nhật Studio. Bảo lưu mọi quyền.</p>
          </div>
        </div>
      </footer>
    </main>
  )
}
