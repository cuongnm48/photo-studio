import Image from "next/image";
import Link from "next/link";
import {
  ExternalLink,
  Facebook,
  FacebookIcon,
  Instagram,
  LinkIcon,
  Mail,
  MapPin,
  MessageCircle,
  MessageSquare,
  Phone,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import TestimonialCard from "@/components/testimonial-card";
import PricingCard from "@/components/pricing-card";
import ServiceCard from "@/components/service-card";
import Banner from "@/components/banner";
import Header from "@/components/header";
import Footer from "@/components/footer";

export default function Home() {
  const services = [
    {
      title: "Ảnh Thẻ, Hộ Chiếu & Visa",
      description: "Chụp ảnh thẻ đạt chuẩn cho mọi loại giấy tờ",
      image: "https://picsum.photos/id/1012/600/400",
      link: "/anh-the-ho-chieu",
    },
    {
      title: "Chụp ảnh Profile cá nhân chuyên nghiệp",
      description: "Tôn vinh vẻ đẹp tự nhiên của bạn",
      image: "https://picsum.photos/id/1027/600/400",
      link: "/anh-ho-so-chuyen-nghiep",
    },
    {
      title: "Phục Hồi Ảnh Cũ",
      description: "Tạo ấn tượng chuyên nghiệp cho hồ sơ của bạn",
      image: "https://picsum.photos/id/1066/600/400",
      link: "/phuc-hoi-anh-cu",
    },
  ];

  return (
    <main className="min-h-screen flex flex-col">
      {/* Header */}
      <Header />

      {/* Banner Section */}
      <Banner />

      {/* Second Section - Photography Services */}
      <section id="services" className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900">Dịch Vụ Chụp Ảnh</h2>
            <p className="mt-4 text-lg text-gray-600 max-w-3xl mx-auto">
              Chụp ảnh chuyên nghiệp cho mọi nhu cầu của bạn, từ ảnh thẻ đến ảnh chân dung
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <Card
                className="overflow-hidden border-0 shadow-lg transition-all duration-300 hover:scale-105"
                key={index}
              >
                <div className="relative h-64">
                  <Link
                    href={service.link}
                    className="text-rose-500 hover:text-rose-700 font-medium flex items-center gap-2"
                  >
                    <Image src={service.image} alt="Ảnh thẻ" fill className="object-cover" />
                  </Link>
                </div>
                <CardContent className="p-6 h-32">
                  <Link
                    href={service.link}
                    className=" hover:text-blue-400 font-medium flex items-center gap-2"
                  >
                    <h3 className="text-xl font-bold mb-2">{service.title}</h3>
                  </Link>
                  <p className="text-gray-600">{service.description}</p>
                </CardContent>
                <CardFooter>
                  <Link
                    href={service.link}
                    className=" hover:text-blue-400 font-medium flex items-center gap-2"
                  >
                    Xem chi tiết
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
                      className="lucide lucide-arrow-right"
                    >
                      <path d="M5 12h14" />
                      <path d="m12 5 7 7-7 7" />
                    </svg>
                  </Link>
                </CardFooter>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* First Section - Photo Enhancement */}
      <section className="py-16 bg-white">
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

      <section id="testimonials" className="py-16 bg-gray-50">
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
                Chúng tôi cung cấp mức giá cạnh tranh nhất trên thị trường mà không ảnh hưởng đến
                chất lượng.
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
                Nhiếp ảnh gia của chúng tôi là chuyên gia về bố cục, ánh sáng và nắm bắt góc đẹp
                nhất của bạn.
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
                Đội ngũ thân thiện của chúng tôi cam kết cung cấp dịch vụ cá nhân hóa và đảm bảo sự
                hài lòng của bạn.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Fifth Section - Testimonials */}
      <section className="py-16 bg-white">
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
              image="https://i.pravatar.cc/150?img=52"
              rating={5}
              testimonial="Đội ngũ tại Nhật Studio đã làm rất tốt với ảnh hồ sơ LinkedIn của tôi. Rất chuyên nghiệp và kết quả vượt quá mong đợi của tôi!"
            />

            <TestimonialCard
              name="Linh Trần"
              role="Sinh Viên"
              image="https://i.pravatar.cc/150?img=31"
              rating={5}
              testimonial="Tôi cần ảnh hộ chiếu gấp cho đơn xin visa. Ảnh được hoàn thành trong vài phút và đáp ứng hoàn hảo mọi yêu cầu. Dịch vụ tuyệt vời!"
            />

            <TestimonialCard
              name="Hải Phạm"
              role="Khách Hàng Gia Đình"
              image="https://i.pravatar.cc/150?img=58"
              rating={5}
              testimonial="Chúng tôi đã chụp ảnh gia đình ở đây và ảnh rất đẹp. Nhiếp ảnh gia rất kiên nhẫn với con của chúng tôi và đã ghi lại những khoảnh khắc tuyệt vời."
            />
          </div>
        </div>
      </section>

      {/* Google Map Section */}
      <section id="contact" className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900">Tìm Chúng Tôi</h2>
            <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
              Ghé thăm studio của chúng tôi để sử dụng dịch vụ chụp ảnh chuyên nghiệp
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 items-stretch">
            {/* Contact  */}
            <div className="bg-white p-6 rounded-lg shadow-md flex flex-col">
              <h3 className="text-xl font-bold mb-4">Thông Tin Liên Hệ</h3>
              <div className="space-y-4 flex-grow">
                <div className="flex items-start space-x-3">
                  <MapPin className="text-rose-500 mt-1 flex-shrink-0" />
                  <p>254/9 Hoàng Diệu, Đà Nẵng, Việt Nam</p>
                </div>
                <div className="flex items-center space-x-3">
                  <Phone className="text-rose-500 flex-shrink-0" />
                  <p>0909939351 | 0905098084</p>
                </div>
                <div className="flex items-center space-x-3">
                  <Mail className="text-rose-500 flex-shrink-0" />
                  <p>nhatstudio.0909939351@gmail.com</p>
                </div>
                <div className="flex items-center space-x-3">
                  <MessageCircle className="text-rose-500 flex-shrink-0" />
                  <Link
                    href="https://zalo.me/0909939351"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center hover:text-blue-300"
                  >
                    <p>Nhật Studio Zalo</p>
                  </Link>
                </div>
                <div className="flex items-center space-x-3">
                  <FacebookIcon className="text-rose-500 flex-shrink-0" />
                  <Link
                    href="https://www.facebook.com/ChupAnhTheDaNang.NhatStudio/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center hover:text-blue-300"
                  >
                    <p>Chụp Ảnh Thẻ Đà Nẵng - NHẬT Studio</p>
                  </Link>
                </div>
              </div>
              <div>
                <h3 className="text-xl font-bold mt-4">Giờ mở cửa</h3>
                <p>Thứ Hai - Thứ Bảy: 8:00 - 19:00</p>
                <p>Chủ Nhật: 8:00 - 17:00</p>
              </div>
            </div>
            {/* Address  */}
            <div className="bg-gray-200 rounded-lg overflow-hidden flex">
              {/* This would be replaced with an actual Google Maps embed */}
              <div className="w-full aspect-video rounded-xl overflow-hidden shadow-lg">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d239.63225401400408!2d108.21637842804198!3d16.059465841677223!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x314219be4de295c1%3A0x32aa91831c5d6030!2zTkjhuqxUIFNUVURJTw!5e0!3m2!1svi!2s!4v1745597814112!5m2!1svi!2s"
                  width="600"
                  height="450"
                  allowFullScreen={true}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Me Section */}
      <section id="about" className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="relative h-[500px]">
              <Image
                src="https://picsum.photos/500"
                alt="Nhiếp ảnh gia chuyên nghiệp"
                fill
                className="object-cover rounded-lg"
              />
            </div>

            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Vài nét về Nhật Studio</h2>
              <p className="text-lg text-gray-600 mb-4">
                Xin chào! Tôi là Nhật, một nhiếp ảnh gia chuyên nghiệp với hơn 10 năm kinh nghiệm
                chuyên về chụp ảnh chân dung và ảnh thẻ.
              </p>
              <p className="text-lg text-gray-600 mb-4">
                Niềm đam mê nhiếp ảnh của tôi bắt đầu từ khi tôi còn là một thiếu niên, và tôi đã
                không ngừng trau dồi kỹ năng kể từ đó. Tôi thành lập Nhật Studio với sứ mệnh cung
                cấp dịch vụ chụp ảnh chất lượng cao với giá cả phải chăng.
              </p>
              <p className="text-lg text-gray-600 mb-4">
                Tôi tin rằng mọi người đều xứng đáng có những bức ảnh đẹp thể hiện con người tốt
                nhất của họ. Dù bạn cần một tấm ảnh thẻ đơn giản hay một bức chân dung chuyên
                nghiệp, tôi cam kết mang đến kết quả xuất sắc.
              </p>
              <p className="text-lg text-gray-600 mb-6">
                Tôi mong được chào đón bạn đến studio của chúng tôi và giúp bạn tạo ra những kỷ niệm
                đẹp!
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </main>
  );
}
