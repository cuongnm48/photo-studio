import { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "*",
        allow: ["/", "/vi/*", "/en/*"],
        disallow: ["/api/", "/*?*", "/private/", "/*.json$", "/*.xml$", "/admin"],
      },
      {
        userAgent: "GPTBot",
        disallow: ["/"],
      },
    ],
    sitemap: ["https://photoboothdanang.vn/sitemap.xml", "https://chupanhthedanang.vn/sitemap.xml"],
    host: "https://chupanhthedanang.vn",
  };
}
