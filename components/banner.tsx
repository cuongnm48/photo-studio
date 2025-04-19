"use client"

import { useEffect, useState } from "react"
import Image from "next/image"
import { cn } from "@/lib/utils"
import { useIsMobile } from "@/hooks/use-mobile"

export default function Banner() {
  const isMobile = useIsMobile()
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  // Generate random photo IDs for consistency
  const photoIds = [237, 433, 823, 1027, 1035, 1074]

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
              <button className="bg-white text-slate-900 hover:bg-white/90 transition-colors px-6 py-3 rounded-md font-medium">
                Đặt lịch ngay
              </button>
            </div>

            {/* Photo cards */}
            <div className={cn("grid grid-cols-2 md:grid-cols-3 gap-3 md:gap-4", "w-full max-w-md md:max-w-xl")}>
              {photoIds.map((id, index) => (
                <div
                  key={id}
                  className={cn(
                    "relative overflow-hidden rounded-lg shadow-lg",
                    "transition-all duration-300 hover:scale-105",
                    "aspect-[3/4]",
                  )}
                >
                  <Image
                    src={`https://picsum.photos/id/${id}/300/400`}
                    alt={`Sample photo ${index + 1}`}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 150px, 200px"
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
