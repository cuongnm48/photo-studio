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
    title: ` Ảnh Thẻ Lấy Ngay Đà Nẵng ${new Date().getFullYear()}`,
    description: `Dịch vụ chụp ảnh thẻ giá rẻ, chất lượng cao, lấy ngay tại Đà Nẵng`,
    openGraph: {
      title: ` Ảnh Thẻ Lấy Ngay Đà Nẵng ${new Date().getFullYear()}`,
      description: `Dịch vụ chụp ảnh thẻ giá rẻ, chất lượng cao, lấy ngay tại Đà Nẵng`,
      url: domain,
      siteName: "Nhật Studio",
      locale: lang === "vi" ? "vi_VN" : "en_US",
      type: "website",
      images: [
        {
          url: bannerHomepage[0].url, // ảnh bạn muốn hiển thị
          width: 1920,
          height: 600,
          alt: ` Ảnh Thẻ Lấy Ngay Đà Nẵng ${new Date().getFullYear()}`,
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
      title: ` Ảnh Thẻ Lấy Ngay Đà Nẵng ${new Date().getFullYear()}`,
      description: `Dịch vụ chụp ảnh thẻ giá rẻ, chất lượng cao, lấy ngay tại Đà Nẵng`,
      images: [bannerHomepage[0].url],
    },
  };
}

export default function BlogPost() {
  return (
    <article className="min-h-screen bg-gray-50">
      {/* Hero section */}
      <header className="relative w-full h-72">
        <div className="absolute inset-0 flex items-center justify-center">
          <h1 className="text-black text-4xl md:text-5xl font-bold text-center drop-shadow-lg">
            Ảnh Thẻ Lấy Ngay Đà Nẵng {new Date().getFullYear()} - Xu Hướng Mới
          </h1>
        </div>
      </header>

      {/* Main content */}
      <main className="max-w-4xl mx-auto px-6 py-12">
        <article className="prose prose-lg md:prose-xl prose-blue max-w-none">
          <h2>Vì sao nhu cầu ảnh thẻ ngày càng tăng?</h2>
          <p>
            Năm {new Date().getFullYear()}, nhu cầu làm ảnh thẻ tại Đà Nẵng bùng nổ nhờ sự phát
            triển của công nghệ số và yêu cầu thủ tục hành chính, du lịch, visa. Việc cần một bức
            ảnh thẻ chuẩn, đẹp và nhanh chóng trở thành nhu cầu cấp thiết của nhiều người.
          </p>

          <h2>Ảnh thẻ online - xu hướng tất yếu</h2>
          <p>
            Trước đây, bạn phải đến tiệm chụp hình, chờ xử lý và in ảnh. Nhưng giờ đây, nhiều dịch
            vụ chụp ảnh thẻ trực tuyến và in ảnh online cho phép bạn chỉ cần{" "}
            <strong>gửi ảnh qua điện thoại</strong>, chỉnh sửa nhanh, sau đó nhận file hoặc ảnh in
            tận nơi.
          </p>

          <blockquote>
            “Ảnh thẻ không chỉ là giấy tờ, mà còn là ấn tượng chuyên nghiệp của bạn trong công việc
            và học tập.”
          </blockquote>

          <h2>Lý do nên chọn dịch vụ ảnh thẻ lấy ngay tại Đà Nẵng</h2>
          <ul>
            <li>✔️ Chụp & chỉnh sửa chuyên nghiệp trong vòng 5 - 10 phút.</li>
            <li>✔️ Đáp ứng tiêu chuẩn ảnh thẻ cho visa, hộ chiếu, thẻ sinh viên.</li>
            <li>✔️ Có cả dịch vụ giao file online & in ảnh tận nơi.</li>
            <li>✔️ Giá cả hợp lý, phù hợp với học sinh - sinh viên.</li>
          </ul>

          <h2>Mẹo để có bức ảnh thẻ đẹp</h2>
          <ol>
            <li>Chọn trang phục gọn gàng, ưu tiên áo sơ mi sáng màu.</li>
            <li>Chỉnh lại tóc gọn gàng, tránh che mặt.</li>
            <li>Ngồi thẳng lưng, biểu cảm nhẹ nhàng, tự nhiên.</li>
          </ol>

          <h2>Kết luận</h2>
          <p>
            Nếu bạn đang cần <strong>chụp ảnh thẻ lấy ngay tại Đà Nẵng</strong>, đừng ngần ngại thử
            những dịch vụ mới với tốc độ nhanh, chất lượng cao. Xu hướng năm{" "}
            {new Date().getFullYear()} chính là sự tiện lợi và chuyên nghiệp - giúp bạn có một bức
            ảnh thẻ hoàn hảo chỉ trong vài phút.
          </p>
        </article>
      </main>
    </article>
  );
}
