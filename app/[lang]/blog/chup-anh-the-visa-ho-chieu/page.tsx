import { ValidLocale } from "@/lib/i18n/config";
import { cloudinaryFolders, getImagesFromFolder } from "@/lib/utils";
import { MapPin } from "lucide-react";
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
    title: `Chụp ảnh thẻ 3x4, 4x6, Visa & Hộ chiếu tại Đà Nẵng`,
    description: `Địa chỉ chụp ảnh thẻ đẹp, đúng chuẩn quốc tế cho Visa - Hộ chiếu ngay tại Đà Nẵng.`,
    openGraph: {
      title: `Chụp ảnh thẻ 3x4, 4x6, Visa & Hộ chiếu tại Đà Nẵng`,
      description: `Địa chỉ chụp ảnh thẻ đẹp, đúng chuẩn quốc tế cho Visa - Hộ chiếu ngay tại Đà Nẵng.`,
      url: domain,
      siteName: "Nhật Studio",
      locale: lang === "vi" ? "vi_VN" : "en_US",
      type: "website",
      images: [
        {
          url: bannerHomepage[0].url, // ảnh bạn muốn hiển thị
          width: 1920,
          height: 600,
          alt: `Chụp ảnh thẻ 3x4, 4x6, Visa & Hộ chiếu tại Đà Nẵng`,
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
      title: `Chụp ảnh thẻ 3x4, 4x6, Visa & Hộ chiếu tại Đà Nẵng`,
      description: `Địa chỉ chụp ảnh thẻ đẹp, đúng chuẩn quốc tế cho Visa - Hộ chiếu ngay tại Đà Nẵng.`,
      images: [bannerHomepage[0].url],
    },
  };
}

export default function BlogPost() {
  return (
    <div className="max-w-4xl mx-auto px-6 py-12">
      <article className="prose prose-lg lg:prose-xl prose-blue">
        <h1 className="text-3xl font-bold text-center">
          Chụp ảnh thẻ 3x4, 4x6, Visa & Hộ chiếu tại Đà Nẵng
        </h1>

        <p className="text-gray-600 italic text-center mb-6 ">
          Địa chỉ chụp ảnh thẻ đẹp, đúng chuẩn quốc tế cho Visa - Hộ chiếu ngay tại Đà Nẵng.
        </p>

        <h2>📌 Vì sao nên chụp ảnh thẻ đúng chuẩn?</h2>
        <p>
          Ảnh thẻ 3x4, 4x6, Visa và Hộ chiếu là yêu cầu bắt buộc trong nhiều thủ tục hành chính, du
          học, làm việc nước ngoài và xuất nhập cảnh. Một bức ảnh không đúng chuẩn có thể khiến hồ
          sơ của bạn bị từ chối, mất thời gian làm lại.
        </p>

        <h2>📏 Quy chuẩn ảnh thẻ quốc tế</h2>
        <ul>
          <li>
            <strong>Ảnh 3x4:</strong> Thường dùng cho hồ sơ, sơ yếu lý lịch, bằng lái xe.
          </li>
          <li>
            <strong>Ảnh 4x6:</strong> Phổ biến cho hồ sơ xin việc, giấy tờ hành chính.
          </li>
          <li>
            <strong>Ảnh Visa:</strong> Mỗi quốc gia có yêu cầu khác nhau, thường là 3.5x4.5cm.
          </li>
          <li>
            <strong>Ảnh Hộ chiếu:</strong> Chuẩn quốc tế, nền trắng, khuôn mặt chiếm 70-80% ảnh.
          </li>
        </ul>

        <h2>🎯 Lợi ích khi chụp tại studio của chúng tôi</h2>
        <ul>
          <li>Ảnh đúng chuẩn quốc tế (Visa Mỹ, Hàn, Nhật, Úc...)</li>
          <li>Chỉnh sửa ánh sáng, da tự nhiên - vẫn giữ nguyên đặc điểm nhận diện</li>
          <li>In lấy ngay sau 5 phút</li>
          <li>Hỗ trợ file mềm (JPG, PNG) để nộp hồ sơ online</li>
        </ul>

        <h2>📍 Địa chỉ chụp ảnh thẻ tại Đà Nẵng</h2>
        <p>
          <strong>
            Chụp ảnh thẻ Đà Nẵng - {`"`}Chỉn chu từng chi tiết{`"`}
          </strong>{" "}
          <br />
          <div className="flex items-start space-x-3">
            <MapPin className="text-rose-500 mt-1 flex-shrink-0" />
            <a
              href="https://maps.google.com/?q=254/9+Hoàng+Diệu,+Đà+Nẵng"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-blue-300 transition-colors"
            >
              254/9 Hoàng Diệu, Đà Nẵng, Việt Nam
            </a>
          </div>
          Hotline:{" "}
          <a href="tel:0909939351" className="hover:text-blue-300 transition-colors">
            0909939351
          </a>
        </p>

        <h2>✅ Kết luận</h2>
        <p>
          Một bức ảnh thẻ đúng chuẩn không chỉ giúp hồ sơ của bạn nhanh chóng được duyệt mà còn mang
          lại sự tự tin khi sử dụng. Nếu bạn đang cần{" "}
          <strong>chụp ảnh thẻ 3x4, 4x6, Visa, Hộ chiếu tại Đà Nẵng</strong>, hãy ghé ngay studio
          của chúng tôi để được phục vụ tốt nhất.
        </p>
      </article>
    </div>
  );
}
