"use client"

import { useEffect, useState } from "react"
import Image from "next/image"
import { cn } from "@/lib/utils"
import { useIsMobile } from "@/hooks/use-mobile"
import Link from "next/link"
import { Phone } from "lucide-react"

export default function Banner() {
  const isMobile = useIsMobile()
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  // Generate random photo IDs for consistency
  const photoIds = [
    { id: 4333, image_url: "https://res.cloudinary.com/dgsn0xio7/image/upload/f_auto,q_auto:best/v1745637914/banner-homepage/test_sr1i4y.png" },
    { id: 433, image_url: "https://res.cloudinary.com/dgsn0xio7/image/upload/f_auto,q_auto:best,w_387,h_516/v1745637914/banner-homepage/test_sr1i4y.png" },
    { id: 823, image_url: "/DSC_3637a (1).png" },
    { id: 1027, image_url: "https://picsum.photos/id/1074/600/800" },
    { id: 10227, image_url: "https://picsum.photos/id/1074/600/800" },
    { id: 1035, image_url: "https://picsum.photos/id/1074/600/800" },
  ];

  if (!mounted) return null

  return (
    <div className="relative w-full overflow-hidden">
      {/* Background with gradient overlay */}
      <div className="relative w-full h-[600px] md:h-[600px]">
        <div className="absolute inset-0 bg-gradient-to-r from-slate-900/90 to-slate-900/60 z-10" />
        <Image
          src="https://picsum.photos/id/1058/1920/600"
          alt="Studio background"
          fill
          priority
          className="object-cover"
          sizes="100vw"
        />
      </div>

      {/* Content container */}
      <div className="absolute inset-0 z-20 flex flex-col items-center justify-center px-4 md:px-8">
        <div className="max-w-7xl w-full mx-auto">
          <div className="flex flex-col md:flex-row items-center justify-between gap-8">
            {/* Text content */}
            <div className="text-center md:text-left md:max-w-xl">
              <h1 className="text-4xl md:text-6xl font-bold text-white mb-4 tracking-tight">Nhật Studio</h1>
              <p className="text-xl md:text-2xl text-white/90 mb-8 italic">
                "Chúng tôi chuyên cung cấp dịch vụ chụp ảnh chuyên nghiệp với nhiều năm kinh nghiệm. Từ ảnh thẻ, chân dung, profile
                đến ảnh gia đình, chúng tôi cam kết mang đến cho bạn những khoảnh khắc đẹp nhất."
              </p>
       
                <Link
                href="tel:0909939351"
                className="hidden md:flex bg-rose-500 hover:bg-rose-600 text-white px-4 py-2 rounded-md items-center space-x-2 w-fit"
              >
                <span>Đặt lịch ngay</span>
                <Phone size={16} />
              </Link>
            </div>

            {/* Photo cards */}
            <div className={cn("grid grid-cols-2 md:grid-cols-3 gap-3 md:gap-4", "w-full max-w-md md:max-w-xl")}>
              {photoIds.map((photo, index) => (
                <div
                  key={photo.id}
                  className={cn(
                    "relative overflow-hidden rounded-lg shadow-lg",
                    "transition-all duration-300 hover:scale-105",
                    "aspect-[3/4]",
                  )}
                >
                  <Image
                    src={photo.image_url}
                    alt={`Sample photo ${index + 1}`}
                    fill
                    priority
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
