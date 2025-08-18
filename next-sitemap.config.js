/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: "https://photoboothdanang.vn",
  generateRobotsTxt: true,
  alternateRefs: [
    {
      href: "https://photoboothdanang.vn",
      hreflang: "en",
    },
    {
      href: "https://chupanhthedanang.vn",
      hreflang: "vi",
    },
  ],
  transform: async (config, path) => {
    const locale = path.startsWith("/vi") ? "vi" : "en";
    const domain = locale === "vi" ? "https://chupanhthedanang.vn" : "https://photoboothdanang.vn";

    return {
      loc: `${domain}${path}`,
      changefreq: "daily",
      priority: 0.7,
      lastmod: new Date().toISOString(),
    };
  },
};
