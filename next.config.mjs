/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    domains: ["i.pravatar.cc", "picsum.photos"],
  },
  async rewrites() {
    return [
      {
        source: "/vi/anh-the-ho-chieu/:path*",
        destination: "/vi/id-photos/:path*",
      },
      {
        source: "/en/id-passport-photos/:path*",
        destination: "/en/id-photos/:path*",
      },
      {
        source: "/vi/anh-ho-so-chuyen-nghiep",
        destination: "/vi/professional-profile-photos",
      },
      {
        source: "/en/professional-profile-photos",
        destination: "/en/professional-profile-photos",
      },
      {
        source: "/vi/chup-anh-tot-nghiep",
        destination: "/vi/graduation-photos",
      },
      {
        source: "/en/graduation-photos",
        destination: "/en/graduation-photos",
      },
      {
        source: "/vi/phuc-hoi-anh-cu",
        destination: "/vi/photo-restoration",
      },
      {
        source: "/en/photo-restoration",
        destination: "/en/photo-restoration",
      },
    ];
  },
};

export default nextConfig;
