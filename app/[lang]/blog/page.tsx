import { ValidLocale } from "@/lib/i18n/config";
import { cloudinaryFolders, getImagesFromFolder } from "@/lib/utils";
import { Metadata } from "next";
import Link from "next/link";
import { getDomainByLocale } from "../dictionaries";

export async function generateMetadata({
  params,
}: {
  params: { lang: ValidLocale };
}): Promise<Metadata> {
  const { lang } = await params;
  const domain = getDomainByLocale(lang);
  const bannerHomepage = await getImagesFromFolder(cloudinaryFolders.bannerHomepage);
  return {
    title: `Blog Chụp Ảnh Thẻ Đà Nẵng`,
    description: "Tổng hợp các bài viết hướng dẫn, dịch vụ và kinh nghiệm chụp ảnh thẻ tại Đà Nẵng",
    openGraph: {
      title: `Blog Chụp Ảnh Thẻ Đà Nẵng`,
      description:
        "Tổng hợp các bài viết hướng dẫn, dịch vụ và kinh nghiệm chụp ảnh thẻ tại Đà Nẵng",
      url: domain,
      siteName: "Nhật Studio",
      locale: lang === "vi" ? "vi_VN" : "en_US",
      type: "website",
      images: [
        {
          url: bannerHomepage[0].url, // ảnh bạn muốn hiển thị
          width: 1920,
          height: 600,
          alt: `Blog Chụp Ảnh Thẻ Đà Nẵng`,
        },
      ],
    },
    alternates: {
      canonical: domain,
      languages: {
        "en-US": getDomainByLocale("en"),
        "vi-VN": getDomainByLocale("vi"),
      },
    },
    twitter: {
      card: "summary_large_image",
      title: `Blog Chụp Ảnh Thẻ Đà Nẵng`,
      description:
        "Tổng hợp các bài viết hướng dẫn, dịch vụ và kinh nghiệm chụp ảnh thẻ tại Đà Nẵng",
      images: [bannerHomepage[0].url],
    },
  };
}

export default async function BlogPost({ params }: { params: { lang: ValidLocale } }) {
  const { lang } = await params;
  const posts = [
    {
      title: "Chụp ảnh thẻ giá rẻ tại Đà Nẵng",
      slug: "chup-anh-the-gia-re",
      description: "Dịch vụ chụp ảnh thẻ giá rẻ, chất lượng cao, lấy ngay tại Đà Nẵng.",
    },
    {
      title: "Chụp ảnh thẻ lấy ngay Đà Nẵng",
      slug: "chup-anh-the-lay-ngay",
      description: "Ảnh thẻ lấy ngay trong 5 phút, tiện lợi cho sinh viên, nhân viên văn phòng.",
    },
    {
      title: "Chụp ảnh thẻ visa - hộ chiếu",
      slug: "chup-anh-the-visa-ho-chieu",
      description: "Đạt chuẩn quốc tế cho hồ sơ visa, hộ chiếu với kích thước 3x4, 4x6.",
    },
  ];

  return (
    <div className="max-w-3xl mx-auto px-6 py-12">
      <h1 className="text-3xl font-bold mb-6 text-center">Blog Chụp Ảnh Thẻ Đà Nẵng</h1>
      <p className="text-center text-gray-600 mb-10">
        Tổng hợp các bài viết hướng dẫn, dịch vụ và kinh nghiệm chụp ảnh thẻ tại Đà Nẵng.
      </p>

      <div className="grid gap-6">
        {posts.map((post) => (
          <div
            key={post.slug}
            className="rounded-2xl border border-gray-200 p-6 shadow-sm hover:shadow-lg transition"
          >
            <h2 className="text-xl font-semibold mb-2">{post.title}</h2>
            <p className="text-gray-600 mb-4">{post.description}</p>
            <Link
              href={`/${lang}/blog/${post.slug}`}
              className="inline-block bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition"
            >
              Đọc bài viết
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}
