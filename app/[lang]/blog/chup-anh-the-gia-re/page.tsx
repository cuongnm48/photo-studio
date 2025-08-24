import { ValidLocale } from "@/lib/i18n/config";
import { cloudinaryFolders, getImagesFromFolder } from "@/lib/utils";
import { Metadata } from "next";
import { getDomainByLocale } from "../../dictionaries";

export async function generateMetadata({
  params,
}: {
  params: { lang: ValidLocale };
}): Promise<Metadata> {
  const { lang } = await params;
  const domain = getDomainByLocale(lang);
  const bannerHomepage = await getImagesFromFolder(cloudinaryFolders.bannerHomepage);
  return {
    title: `Chụp ảnh thẻ giá rẻ tại Đà Nẵng - Nhanh chóng, chất lượng, lấy ngay`,
    description: `Bạn đang tìm <strong>địa chỉ chụp ảnh thẻ giá rẻ tại Đà Nẵng</strong> mà vẫn đảm bảo chất
        lượng? Hãy tham khảo dịch vụ chụp ảnh lấy ngay với giá chỉ từ 20.000đ.`,
    openGraph: {
      title: `Chụp ảnh thẻ giá rẻ tại Đà Nẵng - Nhanh chóng, chất lượng, lấy ngay`,
      description: `Bạn đang tìm <strong>địa chỉ chụp ảnh thẻ giá rẻ tại Đà Nẵng</strong> mà vẫn đảm bảo chất
        lượng? Hãy tham khảo dịch vụ chụp ảnh lấy ngay với giá chỉ từ 20.000đ.`,
      url: domain,
      siteName: "Nhật Studio",
      locale: lang === "vi" ? "vi_VN" : "en_US",
      type: "website",
      images: [
        {
          url: bannerHomepage[0].url, // ảnh bạn muốn hiển thị
          width: 1920,
          height: 600,
          alt: `Chụp ảnh thẻ giá rẻ tại Đà Nẵng - Nhanh chóng, chất lượng, lấy ngay`,
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
      title: `Chụp ảnh thẻ giá rẻ tại Đà Nẵng - Nhanh chóng, chất lượng, lấy ngay`,
      description: `Bạn đang tìm <strong>địa chỉ chụp ảnh thẻ giá rẻ tại Đà Nẵng</strong> mà vẫn đảm bảo chất
        lượng? Hãy tham khảo dịch vụ chụp ảnh lấy ngay với giá chỉ từ 20.000đ.`,
      images: [bannerHomepage[0].url],
    },
  };
}

export default function BlogPost() {
  return (
    <article className="max-w-3xl mx-auto p-6">
      <h1 className="text-3xl font-bold text-gray-800 mb-4">
        Chụp ảnh thẻ giá rẻ tại Đà Nẵng - Nhanh chóng, chất lượng, lấy ngay
      </h1>
      <p className="text-gray-600 mb-6">
        Bạn đang tìm <strong>địa chỉ chụp ảnh thẻ giá rẻ tại Đà Nẵng</strong> mà vẫn đảm bảo chất
        lượng? Hãy tham khảo dịch vụ chụp ảnh lấy ngay với giá chỉ từ 20.000đ.
      </p>

      <h2 className="text-2xl font-semibold mt-6 mb-2">
        Vì sao nên chọn dịch vụ chụp ảnh thẻ giá rẻ?
      </h2>
      <ul className="list-disc pl-6 text-gray-600 space-y-2">
        <li>Tiết kiệm chi phí, phù hợp cho sinh viên, người lao động.</li>
        <li>Chỉ 5-10 phút có ảnh thẻ chuẩn, không lo trễ hạn.</li>
        <li>Ảnh đẹp, chỉnh sáng và da nhẹ, tự nhiên.</li>
      </ul>

      <h2 className="text-2xl font-semibold mt-6 mb-2">Ảnh thẻ giá rẻ nhưng vẫn chuẩn quy định</h2>
      <p className="text-gray-600 mb-4">
        Dù giá rẻ, dịch vụ <strong>ảnh thẻ Đà Nẵng</strong> vẫn đảm bảo:
      </p>
      <ul className="list-disc pl-6 text-gray-600 space-y-2">
        <li>Kích thước chuẩn: 3x4, 4x6, 5x5.</li>
        <li>Nền trắng hoặc xanh theo yêu cầu.</li>
        <li>In rõ nét, chống nhòe.</li>
      </ul>

      <h2 className="text-2xl font-semibold mt-6 mb-2">Địa chỉ chụp ảnh thẻ giá rẻ tại Đà Nẵng</h2>
      <p className="text-gray-600">
        Một số khu vực dễ dàng tìm thấy dịch vụ:
        <br />- Hải Châu: <b>Nhật Studio</b> trung tâm Đà Nẵng
        <br />- Thanh Khê: gần ga Đà Nẵng
        <br />- Ngũ Hành Sơn: gần các trường đại học
      </p>
      <p className="text-gray-700 font-medium">
        Nếu bạn đang cần <strong>chụp ảnh thẻ giá rẻ tại Đà Nẵng</strong>, hãy chọn những studio như
        <b> Nhật Studio</b> uy tín để vừa tiết kiệm chi phí vừa đảm bảo chất lượng.
      </p>
    </article>
  );
}
