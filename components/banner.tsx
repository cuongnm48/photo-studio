import Image from "next/image";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { Phone } from "lucide-react";
import { getDictionary } from "@/app/[lang]/dictionaries";
import { ValidLocale } from "@/lib/i18n/config";

const photoIds = [
  {
    id: 4333,
    image_url:
      "https://res.cloudinary.com/dgsn0xio7/image/upload/f_auto,q_auto:best,w_387,h_516/v1745637914/banner-homepage/test_sr1i4y.png",
    alt: "Ảnh chụp thẻ mẫu tại Nhật Studio",
  },
  {
    id: 433,
    image_url:
      "https://res.cloudinary.com/dgsn0xio7/image/upload/f_auto,q_auto:best,w_387,h_516/v1745637914/banner-homepage/test_sr1i4y.png",
  },
  { id: 823, image_url: "/DSC_3637a (1).png" },
  { id: 1027, image_url: "https://picsum.photos/id/1074/600/800" },
  { id: 10227, image_url: "https://picsum.photos/id/1074/600/800" },
  { id: 1035, image_url: "https://picsum.photos/id/1074/600/800" },
];

export default async function Banner({ lang }: { lang: string }) {
  const dict = await getDictionary(lang as ValidLocale);

  return (
    <section aria-label={dict.home.banner.aria_label} className="relative w-full overflow-hidden">
      {/* Background with gradient overlay */}
      <div className="md:relative w-full md:h-[600px]">
        <div className="absolute inset-0 md:bg-gradient-to-r md:from-slate-900/90 md:to-slate-900/60 z-10" />
        <Image
          src="https://picsum.photos/id/1058/1920/600"
          alt={dict.home.banner.background_alt}
          fill
          priority
          className="object-cover"
          sizes="100vw"
          quality={90}
        />
      </div>

      {/* Content container */}
      <div className="md:absolute inset-0 z-20 flex flex-col items-center justify-center px-4 md:px-8">
        <div className="max-w-7xl w-full mx-auto">
          <div className="flex flex-col md:flex-row items-center justify-between gap-8">
            {/* Text content */}
            <div className="hidden md:block text-center md:text-left md:max-w-xl">
              <h1 className="text-4xl md:text-6xl font-bold text-white mb-4 tracking-tight">
                {dict.home.banner.title}
              </h1>
              <p className="text-xl md:text-2xl text-white/90 mb-8 italic">
                {dict.home.banner.description}
              </p>
              <Link
                href="tel:0909939351"
                aria-label={dict.home.banner.cta_aria_label}
                className="hidden md:flex bg-rose-500 hover:bg-rose-600 text-white px-4 py-2 rounded-md items-center space-x-2 w-fit mx-auto md:mx-0"
              >
                <span>{dict.common.book_now}</span>
                <Phone size={16} />
              </Link>
            </div>

            {/* Photo cards */}
            <div
              className={cn(
                "grid grid-cols-2 md:grid-cols-3 gap-3 md:gap-4 py-4 md:py-0",
                "w-full max-w-md md:max-w-xl"
              )}
              role="grid"
            >
              {photoIds.map((photo, index) => (
                <div
                  key={photo.id}
                  className={cn(
                    "relative overflow-hidden rounded-lg shadow-lg",
                    "transition-all duration-300 hover:scale-105",
                    "aspect-[3/4]"
                  )}
                  role="gridcell"
                >
                  <Image
                    src={photo.image_url}
                    alt={
                      photo.alt ||
                      dict.home.banner.photo_alt.replace("{index}", (index + 1).toString())
                    }
                    fill
                    priority
                    quality={85}
                    className="object-cover"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
