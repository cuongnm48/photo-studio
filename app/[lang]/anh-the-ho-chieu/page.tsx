import Footer from "@/components/footer";
import Header from "@/components/header";
import { PhotoMenu } from "@/components/photo-menu";
import { Card, CardContent } from "@/components/ui/card";
import { cn } from "@/lib/utils";
import { Camera, CameraIcon, ImageIcon } from "lucide-react";
import { Metadata } from "next";
import Image from "next/image";
import { getDictionary } from "@/app/[lang]/dictionaries";
import { ValidLocale } from "@/lib/i18n/config";

export const metadata: Metadata = {
  title: "Ảnh thẻ, hộ chiếu & visa - Nhật Studio",
  description: "Chụp ảnh thẻ đạt chuẩn cho mọi loại giấy tờ, hồ sơ với chất lượng cao tại Đà Nẵng",
  openGraph: {
    title: "Ảnh thẻ, hộ chiếu & visa - Nhật Studio",
    description: "Chụp ảnh thẻ đạt chuẩn cho mọi loại giấy tờ tại Đà Nẵng",
    type: "website",
    locale: "vi_VN",
  },
};

// Define the photo types
const photoTypes = [
  { 
    id: "3x4",
    label: "Ảnh thẻ 3x4",
    icon: <ImageIcon className="h-4 w-4" />,
    description: "Chuẩn cho CMND, CCCD, bằng lái xe" 
  },
  { id: "4x6", label: "Ảnh thẻ 4x6", icon: <ImageIcon className="h-4 w-4" /> },
  { id: "5x5", label: "Ảnh thẻ 5x5", icon: <ImageIcon className="h-4 w-4" /> },
  { id: "3.5x4.5", label: "Ảnh thẻ 3.5x4.5", icon: <ImageIcon className="h-4 w-4" /> },
  { id: "3.3x4.8", label: "Ảnh thẻ 3.3x4.8", icon: <ImageIcon className="h-4 w-4" /> },
  { id: "5x7", label: "Ảnh thẻ 5x7", icon: <ImageIcon className="h-4 w-4" /> },
  { id: "3.5x5", label: "Ảnh thẻ 3.5x5", icon: <ImageIcon className="h-4 w-4" /> },
  { id: "4x5", label: "Ảnh thẻ 4x5", icon: <ImageIcon className="h-4 w-4" /> },
];

export default async function PhotoService({
  params,
  searchParams,
}: {
  params: { lang: ValidLocale };
  searchParams: { [key: string]: string | string[] | undefined };
}) {
  const { lang } = await params;
  const dict = await getDictionary(lang);

  const { type } = await searchParams;
  const activeType = (type as string) || photoTypes[0].id;

  return (
    <div className="min-h-screen bg-white">
      <Header lang={lang} />
      <section className="relative h-[300px] md:h-[400px]">
        <div className="absolute inset-0 bg-gradient-to-r from-slate-900/90 to-slate-900/60 z-10" />
        <Image
          src="https://picsum.photos/id/1005/1920/600"
          alt={dict.id_photos.title}
          fill
          priority
          className="object-cover"
          sizes="100vw"
        />
        <div className="relative z-20 container mx-auto px-4 h-full flex flex-col justify-center">
          <h1 className="text-3xl md:text-5xl font-bold text-white mb-4">
            {dict.id_photos.title}
          </h1>
          <p className="text-xl md:text-2xl text-white/90 mb-8 max-w-2xl">
            {dict.id_photos.description}
          </p>
        </div>
      </section>

      <div className="container mx-auto lg:px-4">
        <div className="relative bg-gray-100 py-16">
          <div className="container mx-auto px-4 relative z-10">
            <div className="flex items-center justify-center mb-4">
              <CameraIcon className="h-10 w-10 mr-4 text-gray-700" />
              <h1 className="text-3xl font-bold text-gray-900">{dict.id_photos.heading}</h1>
            </div>
            <p className="text-center max-w-2xl mx-auto text-gray-600">
              {dict.id_photos.subtitle}
            </p>
          </div>
        </div>
      </div>

      {/* Immediate Photo Section */}
      <div className="container mx-auto px-4 py-12 text-center">
        <div className="inline-flex items-center justify-center bg-gray-100 text-gray-800 px-6 py-3 rounded-md mb-8">
          <Camera className="h-5 w-5 mr-2" />
          <h2 className="text-xl font-medium">{dict.id_photos.heading2}</h2>
        </div>
      </div>

      {/* Photo Types Section with Left Menu */}
      <div className="container mx-auto px-4 pb-16">
        <div className="flex flex-col md:flex-row gap-8 bg-white rounded-xl shadow-xl">
          <PhotoMenu photoTypes={photoTypes} activeType={activeType} dict={dict} lang={lang} />
          
          {/* Content Area */}
          <div className="flex-1 p-8 bg-gray-50">
            {photoTypes.map((type) => (
              <div key={type.id} className={cn(activeType === type.id ? "block" : "hidden")}>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                  {[1, 2, 3, 4].map((item) => (
                    <Card
                      key={item}
                      className="overflow-hidden transition-all hover:shadow-lg group rounded-lg"
                    >
                      <CardContent className="p-0 relative">
                        <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end justify-center">
                          <div className="p-4 text-white text-center">
                            <p className="font-medium">Mẫu {item}</p>
                          </div>
                        </div>
                        <Image
                          src={`/placeholder.svg?height=400&width=300`}
                          alt={`${type.label} mẫu ${item}`}
                          width={300}
                          height={400}
                          className="w-full h-auto object-cover aspect-[3/4] group-hover:scale-105 transition-transform duration-300 rounded-t-lg"
                        />
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <Footer lang={lang} />
    </div>
  );
}
