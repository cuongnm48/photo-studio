import Image from "next/image";
import Link from "next/link";
import { Card, CardContent } from "@/components/ui/card";
import { cn } from "@/lib/utils";
import { Camera, CameraIcon, ImageIcon } from "lucide-react";
import Header from "@/components/header";
import Footer from "@/components/footer";

// Define the photo types
const photoTypes = [
  { id: "3x4", label: "Ảnh thẻ 3x4", icon: <ImageIcon className="h-4 w-4" /> },
  { id: "4x6", label: "Ảnh thẻ 4x6", icon: <ImageIcon className="h-4 w-4" /> },
  { id: "5x5", label: "Ảnh thẻ 5x5", icon: <ImageIcon className="h-4 w-4" /> },
  { id: "3.5x4.5", label: "Ảnh thẻ 3.5x4.5", icon: <ImageIcon className="h-4 w-4" /> },
  { id: "3.3x4.8", label: "Ảnh thẻ 3.3x4.8", icon: <ImageIcon className="h-4 w-4" /> },
  { id: "5x7", label: "Ảnh thẻ 5x7", icon: <ImageIcon className="h-4 w-4" /> },
  { id: "3.5x5", label: "Ảnh thẻ 3.5x5", icon: <ImageIcon className="h-4 w-4" /> },
  { id: "4x5", label: "Ảnh thẻ 4x5", icon: <ImageIcon className="h-4 w-4" /> },
];

export default function PhotoService({
  searchParams,
}: {
  searchParams: { [key: string]: string | string[] | undefined };
}) {
  // Get the active type from URL params or default to the first type
  const activeType = (searchParams.type as string) || photoTypes[0].id;

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <Header />
      <section className="relative h-[300px] md:h-[400px]">
        <div className="absolute inset-0 bg-gradient-to-r from-slate-900/90 to-slate-900/60 z-10" />
        <Image
          src="https://picsum.photos/id/1005/1920/600"
          alt="Ảnh thẻ & hộ chiếu"
          fill
          priority
          className="object-cover"
          sizes="100vw"
        />
        <div className="relative z-20 container mx-auto px-4 h-full flex flex-col justify-center">
          <h1 className="text-3xl md:text-5xl font-bold text-white mb-4">
            Ảnh Thẻ, Hộ Chiếu & Visa
          </h1>
          <p className="text-xl md:text-2xl text-white/90 mb-8 max-w-2xl">
            Chụp ảnh thẻ đạt chuẩn cho mọi loại giấy tờ, hồ sơ với chất lượng cao
          </p>
        </div>
      </section>

      {/* Header Section with minimalist design */}
      <div className="container mx-auto px-4">
      <div className="relative bg-gray-100 py-16">
        <div className="container mx-auto px-4 relative z-10">
          <div className="flex items-center justify-center mb-4">
            <CameraIcon className="h-10 w-10 mr-4 text-gray-700" />
            <h1 className="text-3xl font-bold text-gray-900">Chụp ảnh thẻ Đà Nẵng</h1>
          </div>
          <p className="text-center max-w-2xl mx-auto text-gray-600">
            Nhận luôn sản phẩm và chụp ảnh thẻ cho các bạn, các khách hàng thân quen tại Đà Nẵng.
            Mỗi bức ảnh Nhật chụp và chỉnh sửa đều mang một cảm xúc vào trong đó.
          </p>
        </div>
      </div>
      </div>
      {/* Immediate Photo Section */}
      <div className="container mx-auto px-4 py-12 text-center">
        <div className="inline-flex items-center justify-center bg-gray-100 text-gray-800 px-6 py-3 rounded-md mb-8">
          <Camera className="h-5 w-5 mr-2" />
          <h2 className="text-xl font-medium">Chụp ảnh thẻ lấy ngay</h2>
        </div>
      </div>

      {/* Photo Types Section with Left Menu */}
      <div className="container mx-auto px-4 pb-16">
        <div className="flex flex-col md:flex-row gap-8 bg-white rounded-xl shadow-xl overflow-hidden">
          {/* Left Menu */}
          <div className="md:w-72 shrink-0 bg-gradient-to-b from-gray-50 to-gray-100 p-6">
            <h3 className="text-lg font-semibold text-gray-800 mb-4">Danh mục ảnh thẻ</h3>
            <nav className="space-y-2">
              <ul>
                {photoTypes.map((type) => (
                  <li key={type.id}>
                    <Link
                      href={`?type=${type.id}`}
                      scroll={false}
                      className={cn(
                        "flex items-center px-4 py-3 rounded-lg text-sm font-medium transition-all shadow-sm",
                        activeType === type.id
                          ? "bg-gray-300 text-gray-900 shadow-md"
                          : "text-gray-700 hover:bg-gray-200 hover:shadow"
                      )}
                    >
                      {type.icon}
                      <span className="ml-3">{type.label}</span>
                      {activeType === type.id && (
                        <span className="ml-auto w-2 h-2 bg-gray-500 rounded-full"></span>
                      )}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
          </div>

          {/* Content Area */}
          <div className="flex-1 p-8 bg-gray-50">
            {photoTypes.map((type) => (
              <div key={type.id} className={cn(activeType === type.id ? "block" : "hidden")}>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                  {[1, 2, 3, 4].map((item) => (
                    <Card
                      key={item}
                      className="overflow-hidden transition-all hover:shadow-lg group rounded-lg"
                    >
                      <CardContent className="p-0 relative">
                        <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end justify-center">
                          <div className="p-4 text-white text-center">
                            <p className="font-medium">Mẫu {item}</p>
                          </div>
                        </div>
                        <Image
                          src={`/placeholder.svg?height=400&width=300`}
                          alt={`${type.label} mẫu ${item}`}
                          width={300}
                          height={400}
                          className="w-full h-auto object-cover aspect-[3/4] group-hover:scale-105 transition-transform duration-300 rounded-t-lg"
                        />
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Footer */}
      <Footer />
    </div>
  );
}
