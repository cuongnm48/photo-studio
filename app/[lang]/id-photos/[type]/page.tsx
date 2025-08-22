import { getCanonicalDomain, getDictionary, getDomainByLocale } from "@/app/[lang]/dictionaries";
import { CloudinaryImage } from "@/components/CloudinaryImage";
import { Card, CardContent } from "@/components/ui/card";
import { defaultLocale, isValidLocale, ValidLocale } from "@/lib/i18n/config";
import {
  cloudinaryFolders,
  CloudinaryImageType,
  getAlternateUrl,
  getImagesFromFolder,
} from "@/lib/utils";
import { Metadata } from "next";

export async function generateStaticParams() {
  // Định nghĩa tất cả các loại ảnh bạn hỗ trợ
  const photoTypes = ["3x4", "3.3x4.8", "3.5x5", "3.5x4.5", "3.6x4.7", "4x6", "5x5", "5x7"]; // Ví dụ các loại ảnh

  return photoTypes.map((type) => ({
    type: type,
  }));
}

export async function generateMetadata({
  params,
}: {
  params: { lang: ValidLocale; type: string };
}): Promise<Metadata> {
  const { lang, type } = await params;

  const isValidLang = isValidLocale(lang) ? lang : defaultLocale;
  const dict = await getDictionary(isValidLang as ValidLocale);
  const pathname = `${getDomainByLocale(lang)}/${lang}/anh-the-ho-chieu/${type}`;
  const canonicalUrl = getAlternateUrl(lang, pathname);
  const serviceCoverPhoto = await getImagesFromFolder(cloudinaryFolders.serviceCoverPhoto);

  return {
    title: dict.id_photos.title,
    description: dict.id_photos.description,
    openGraph: {
      title: dict.id_photos.title,
      description: dict.id_photos.description,
      url: canonicalUrl,
      siteName: "Nhật Studio",
      locale: lang === "vi" ? "vi_VN" : "en_US",
      type: "website",
      images: [
        {
          url: serviceCoverPhoto.find((f: CloudinaryImageType) => f.title === "card").url, // ảnh bạn muốn hiển thị
          width: 1200,
          height: 630,
          alt: dict.id_photos.title,
        },
      ],
    },
    alternates: {
      canonical: canonicalUrl,
      languages: {
        "en-US": getAlternateUrl("en", pathname).replace(
          getDomainByLocale(lang) ?? "",
          getDomainByLocale("en") ?? ""
        ),
        "vi-VN": getAlternateUrl("vi", pathname).replace(
          getDomainByLocale(lang) ?? "",
          getDomainByLocale("vi") ?? ""
        ),
      },
    },
    twitter: {
      card: "summary_large_image",
      title: dict.id_photos.title,
      description: dict.id_photos.description,
      images: [serviceCoverPhoto.find((f: CloudinaryImageType) => f.title === "card").url],
    },
  };
}

function getPhotoDimensions(photoType: string) {
  const dimensions = photoType.split("x").map((str) => parseFloat(str));
  const scale = 100;
  return {
    width: Math.round(dimensions[0] * scale),
    height: Math.round(dimensions[1] * scale),
  };
}

export default async function PhotoService({
  params,
}: {
  params: { lang: ValidLocale; type: string };
}) {
  const { type } = await params;

  const activeType = type as string;
  if (!activeType) return <></>;
  const backgroundCardImages = await getImagesFromFolder(
    cloudinaryFolders.idPassportPhoto[activeType as keyof typeof cloudinaryFolders.idPassportPhoto]
  );

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
      {backgroundCardImages.map((image: CloudinaryImageType, index: number) => {
        const dimensions = getPhotoDimensions(activeType);
        return (
          <Card
            key={image.id}
            className="overflow-hidden transition-all hover:shadow-lg group rounded-lg"
          >
            <CardContent className="p-0 relative">
              <div className={`aspect-[${dimensions.width}/${dimensions.height}] relative`}>
                <CloudinaryImage
                  src={image.url}
                  alt={`${image.title} mẫu ${index + 1}`}
                  width={dimensions.width}
                  height={dimensions.height}
                  className=" transition-transform duration-300 rounded-t-lg"
                  priority={index === 0}
                />
              </div>
            </CardContent>
          </Card>
        );
      })}
    </div>
  );
}
