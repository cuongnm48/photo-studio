import { getDictionary } from "@/app/[lang]/dictionaries";
import { ValidLocale } from "@/lib/i18n/config";
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

export default async function AnhHoSoChuyenNghiep({
  params,
}: {
  params: { lang: ValidLocale };
}) {
  const { lang } = await params;
  const dict = await getDictionary(lang);

  return (
    <main className="min-h-screen">
      <Header lang={lang} />
      
      {/* Hero Section */}
      <section 
        className="relative h-[300px] md:h-[400px]"
        aria-label="Hero banner"
      >
        <div className="absolute inset-0 bg-gradient-to-r from-slate-900/90 to-slate-900/60 z-10" />
        <Image
          src="https://picsum.photos/id/1070/1920/600"
          alt={dict.professional_profile.hero.title}
          fill
          priority
          className="object-cover"
          sizes="100vw"
        />
        <div className="relative z-20 container mx-auto px-4 h-full flex flex-col justify-center">
          <h1 className="text-3xl md:text-5xl font-bold text-white mb-4">
            {dict.professional_profile.hero.title}
          </h1>
          <p className="text-xl md:text-2xl text-white/90 mb-8 max-w-2xl">
            {dict.professional_profile.hero.subtitle}
          </p>
        </div>
      </section>

      {/* Introduction Section */}
      <section className="container mx-auto lg:px-4" aria-label="Giới thiệu dịch vụ">
        <div className="relative bg-gray-100 py-16">
          <div className="container mx-auto px-4 relative z-10">
            <div className="flex items-center justify-center mb-4">
              <CameraIcon className="h-10 w-10 mr-4 text-gray-700" />
              <h1 className="text-3xl font-bold text-gray-900">
                {dict.professional_profile.intro.title}
              </h1>
            </div>
            <p className="text-center max-w-2xl mx-auto text-gray-600">
              {dict.professional_profile.intro.description}
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

        {/* Tips Section */}
        <div className="mb-16">
          <h2 className="text-2xl font-bold mb-8 text-center">{dict.professional_profile.tips.title}</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Outfit Tips */}
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
                {dict.professional_profile.tips.outfit.title}
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
                  {dict.professional_profile.tips.outfit.tips[0]}
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
                  {dict.professional_profile.tips.outfit.tips[1]}
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
                  {dict.professional_profile.tips.outfit.tips[2]}
                </li>
              </ul>
            </div>
            {/* Expression Tips */}
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
                {dict.professional_profile.tips.expression.title}
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
                  {dict.professional_profile.tips.expression.tips[0]}
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
                  {dict.professional_profile.tips.expression.tips[1]}
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
                  {dict.professional_profile.tips.expression.tips[2]}
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="bg-slate-100 p-8 rounded-xl text-center" role="complementary">
          <h2 className="text-2xl font-bold mb-4">
            {dict.professional_profile.cta.title}
          </h2>
          <p className="text-slate-600 mb-6 max-w-2xl mx-auto">
            {dict.professional_profile.cta.description}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="tel:0909939351">
              <Button className="bg-slate-800 hover:bg-slate-900 w-full sm:w-auto flex items-center gap-2">
                <Phone size={16} />
                {dict.professional_profile.cta.book_now}
              </Button>
            </Link>
            <Link href="https://zalo.me/0909939351" target="_blank" rel="noopener noreferrer">
              <Button 
                variant="outline" 
                className="border-slate-800 text-slate-800 hover:bg-slate-100 w-full sm:w-auto flex items-center gap-2"
              >
                <MessageCircle size={16} />
                {dict.professional_profile.cta.contact}
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <Footer lang={lang} />
    </main>
  );
}
