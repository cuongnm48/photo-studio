import { MetadataRoute } from "next";
import { headers } from "next/headers";

const photoTypes = ["3x4", "3.3x4.8", "3.5x5", "3.5x4.5", "3.6x4.7", "4x6", "5x5", "5x7"];
const urlVi = [
  "anh-the-ho-chieu",
  "anh-ho-so-chuyen-nghiep",
  "phuc-hoi-anh-cu",
  "chup-anh-tot-nghiep",
];
const idVi = ["dich-vu", "ve-chung-toi", "danh-gia", "lien-he"];
const urlEn = [
  "professional-profile-photos",
  "id-passport-photos",
  "photo-restoration",
  "graduation-photos",
];
const idEn = ["services", "about-us", "reviews", "contact"];

const posts = ["chup-anh-the-gia-re", "chup-anh-the-lay-ngay", "chup-anh-the-visa-ho-chieu"];

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const headersList = await headers();
  const host = headersList.get("host") || "localhost:3000";
  const protocol = headersList.get("x-forwarded-proto") || "http";
  const domain = `${protocol}://${host}`;

  if (domain.includes("chupanhthedanang")) {
    return [
      {
        url: `${domain}/vi`,
        lastModified: new Date(),
        changeFrequency: "daily",
        priority: 1.0,
      },
      ...idVi.map((e) => ({
        url: `${domain}/vi#${e}`,
        lastModified: new Date().toISOString(),
        changeFrequency: "daily" as const,
        priority: 0.7,
      })),
      ...urlVi.map((e) => ({
        url: `${domain}/vi/${e}`,
        lastModified: new Date().toISOString(),
        changeFrequency: "daily" as const,
        priority: 0.7,
      })),
      ...photoTypes.map((e) => ({
        url: `${domain}/vi/${urlVi[0]}/${e}`,
        lastModified: new Date().toISOString(),
        changeFrequency: "daily" as const,
        priority: 0.7,
      })),
      {
        url: `${domain}/vi/blog`,
        lastModified: new Date(),
        changeFrequency: "daily",
        priority: 0.7,
      },
      ...posts.map((e) => ({
        url: `${domain}/vi/blog/${e}`,
        lastModified: new Date().toISOString(),
        changeFrequency: "daily" as const,
        priority: 0.7,
      })),
    ];
  }

  if (domain.includes("photoboothdanang")) {
    return [
      {
        url: `${domain}/en`,
        lastModified: new Date(),
        changeFrequency: "daily",
        priority: 1.0,
      },
      ...idEn.map((e) => ({
        url: `${domain}/en#${e}`,
        lastModified: new Date().toISOString(),
        changeFrequency: "daily" as const,
        priority: 0.7,
      })),
      ...urlEn.map((e) => ({
        url: `${domain}/en/${e}`,
        lastModified: new Date().toISOString(),
        changeFrequency: "daily" as const,
        priority: 0.7,
      })),
      ...photoTypes.map((e) => ({
        url: `${domain}/en/${urlEn[0]}/${e}`,
        lastModified: new Date().toISOString(),
        changeFrequency: "daily" as const,
        priority: 0.7,
      })),
      {
        url: `${domain}/en/blog`,
        lastModified: new Date(),
        changeFrequency: "daily",
        priority: 0.7,
      },
      ...posts.map((e) => ({
        url: `${domain}/en/blog/${e}`,
        lastModified: new Date().toISOString(),
        changeFrequency: "daily" as const,
        priority: 0.7,
      })),
    ];
  }

  return [];
}
