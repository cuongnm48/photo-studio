import { getCanonicalDomain, getDictionary, getDomainByLocale } from "@/app/[lang]/dictionaries";
import { CloudinaryImage } from "@/components/CloudinaryImage";
import Footer from "@/components/footer";
import Header from "@/components/header";
import { Card, CardContent } from "@/components/ui/card";
import { ValidLocale } from "@/lib/i18n/config";
import {
  cloudinaryFolders,
  CloudinaryImageType,
  getAlternateUrl,
  getImagesFromFolder,
} from "@/lib/utils";
import { Camera, CameraIcon } from "lucide-react";
import { Metadata } from "next";
import Image from "next/image";

export async function generateMetadata({
  params,
}: {
  params: { lang: ValidLocale };
}): Promise<Metadata> {
  const { lang } = await params;
  const dict = await getDictionary(lang);
  const pathname = `${getDomainByLocale(lang)}/${lang}/chup-anh-tot-nghiep`;
  const canonicalUrl = getCanonicalDomain(lang, getAlternateUrl(lang, pathname));

  return {
    title: dict.graduation_photos.intro.title,
    description: dict.graduation_photos.intro.description,
    openGraph: {
      title: dict.graduation_photos.intro.title,
      description: dict.graduation_photos.intro.description,
      url: canonicalUrl,
      siteName: "Nhật Studio",
      locale: lang === "vi" ? "vi_VN" : "en_US",
      type: "website",
    },
    alternates: {
      canonical: canonicalUrl,
      languages: {
        "en-US": getCanonicalDomain("en", getAlternateUrl("en", pathname)),
        "vi-VN": getCanonicalDomain("vi", getAlternateUrl("vi", pathname)),
      },
    },
  };
}

export default async function GraduationPhotos({ params }: { params: { lang: ValidLocale } }) {
  const { lang } = await params;
  const dict = await getDictionary(lang);
  const professionalProfilePhoto = await getImagesFromFolder(cloudinaryFolders.graduationPhotos);

  return (
    <main className="min-h-screen">
      <Header lang={lang} />

      {/* Hero Section */}
      <section className="relative h-[300px] md:h-[400px]" aria-label="Hero banner">
        <div className="absolute inset-0 bg-gradient-to-r from-slate-900/90 to-slate-900/60 z-10" />
        <Image
          src="https://picsum.photos/id/1071/1920/600"
          alt={dict.graduation_photos.hero.title}
          fill
          priority
          className="object-cover"
          sizes="100vw"
        />
        <div className="relative z-20 container mx-auto px-4 h-full flex flex-col justify-center">
          <h1 className="text-3xl md:text-5xl font-bold text-white mb-4">
            {dict.graduation_photos.hero.title}
          </h1>
          <p className="text-xl md:text-2xl text-white/90 mb-8 max-w-2xl">
            {dict.graduation_photos.hero.subtitle}
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
                {dict.graduation_photos.intro.title}
              </h1>
            </div>
            <p className="text-center max-w-2xl mx-auto text-gray-600">
              {dict.graduation_photos.intro.description}
            </p>
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="container mx-auto px-4" aria-label="Bộ sưu tập ảnh mẫu">
        <div className="mb-16 mt-10">
          <div className="grid grid-cols-1 md:block md:columns-3 gap-3">
            {professionalProfilePhoto.map((image: CloudinaryImageType, index: number) => (
              <div key={image.id} className="break-inside-avoid mb-4">
                <CloudinaryImage
                  src={image.url}
                  alt={`${image.title} mẫu ${index + 1}`}
                  width={image.width}
                  height={image.height}
                  className=" transition-transform duration-300 rounded-lg"
                  priority={index === 0}
                />
              </div>
            ))}
          </div>
        </div>
        <section className="py-20 bg-muted">
          <div className="max-w-6xl mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
                {dict.graduation_photos.services.title}
              </h2>
              <p className="font-sans text-lg text-muted-foreground max-w-2xl mx-auto">
                {dict.graduation_photos.services.description}
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {dict.graduation_photos.services.items.map((service, index) => (
                <Card
                  key={index}
                  className="text-center p-8 bg-lime-100 hover:shadow-lg transition-shadow"
                >
                  <CardContent className="space-y-4">
                    <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto">
                      <Camera className="w-8 h-8 text-primary" />
                    </div>
                    <h3 className="text-2xl font-bold text-card-foreground">{service.title}</h3>
                    <p className="font-sans text-muted-foreground">{service.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>
      </section>

      <Footer lang={lang} />
    </main>
  );
}
