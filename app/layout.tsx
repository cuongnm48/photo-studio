import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"

const inter = Inter({ subsets: ["latin", "vietnamese"] })

export const metadata: Metadata = {
  title: "Nhật Studio - Dịch Vụ Chụp Ảnh Chuyên Nghiệp",
  description: "Dịch vụ chụp ảnh chuyên nghiệp cho ảnh thẻ, chân dung và các dịp đặc biệt với chỉnh sửa chuyên nghiệp",
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="vi" >
      <body className={inter.className}>{children}</body>
    </html>
  )
}
