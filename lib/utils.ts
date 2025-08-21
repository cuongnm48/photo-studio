import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const cloudinaryFolders = {
  backgroundCardImages: "background-card-images",
  photoRestoration: "photo-restoration",
  professionalProfilePhotos: "professional-profile-photos",
  graduationPhotos: "graduation-photos",
  serviceCoverPhoto: "service-cover-photo",
  idPassportPhoto: {
    "3x4": "id-passport-photo/3x4",
    "3.3x4.8": "id-passport-photo/3.3x4.8",
    "3.5x5": "id-passport-photo/3.5x5",
    "3.5x4.5": "id-passport-photo/3.5x4.5",
    "3.6x4.7": "id-passport-photo/3.6x4.7",
    "4x6": "id-passport-photo/4x6",
    "5x5": "id-passport-photo/5x5",
    "5x7": "id-passport-photo/5x7",
  },
} as const;

export const photoServiceUrl = [
  {
    url: ["anh-ho-so-chuyen-nghiep", "professional-profile-photos"],
    viUrl: "anh-ho-so-chuyen-nghiep",
    enUrl: "professional-profile-photos",
  },
  {
    url: ["anh-the-ho-chieu", "id-passport-photos"],
    viUrl: "anh-the-ho-chieu",
    enUrl: "id-passport-photos",
  },
  {
    url: ["phuc-hoi-anh-cu", "photo-restoration"],
    viUrl: "phuc-hoi-anh-cu",
    enUrl: "photo-restoration",
  },
  {
    url: ["chup-anh-tot-nghiep", "graduation-photos"],
    viUrl: "chup-anh-tot-nghiep",
    enUrl: "graduation-photos",
  },
  {
    url: ["dich-vu", "services"],
    viUrl: "dich-vu",
    enUrl: "services",
  },
  {
    url: ["ve-chung-toi", "about-us"],
    viUrl: "ve-chung-toi",
    enUrl: "about-us",
  },
  {
    url: ["danh-gia", "testimonials"],
    viUrl: "danh-gia",
    enUrl: "testimonials",
  },
  {
    url: ["lien-he", "contact"],
    viUrl: "lien-he",
    enUrl: "contact",
  },
];

export type CloudinaryImageType = {
  id: string;
  title: string;
  url: string;
  width: number;
  height: number;
};

export async function getImagesFromFolder(folderName: string) {
  try {
    const response = await fetch(
      `https://api.cloudinary.com/v1_1/${process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME}/resources/search`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Basic ${Buffer.from(
            process.env.CLOUDINARY_API_KEY + ":" + process.env.CLOUDINARY_API_SECRET
          ).toString("base64")}`,
        },
        body: JSON.stringify({
          expression: `folder:${folderName}`,
          sort_by: [{ created_at: "desc" }],
          max_results: 100,
        }),
      }
    );

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const data = await response.json();

    return data.resources.map((resource: any) => ({
      id: resource.public_id,
      title: resource.filename,
      url: resource.secure_url,
      width: resource.width,
      height: resource.height,
    }));
  } catch (error) {
    console.error("Error fetching images:", error);
    return [];
  }
}

export function getAlternateUrl(lang: string, pathname: string) {
  const alternate = photoServiceUrl.find((item) => item.url.find((f) => pathname.includes(f)));
  if (!alternate) return pathname;
  const alternateUrl = alternate.url.find((f) => pathname.includes(f));
  if (!alternateUrl) return pathname;
  return lang === "vi"
    ? pathname.replace("en", "vi").replace(alternateUrl, alternate.viUrl)
    : pathname.replace("vi", "en").replace(alternateUrl, alternate.enUrl);
}
