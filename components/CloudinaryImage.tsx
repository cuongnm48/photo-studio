"use client";

import { CldImage } from "next-cloudinary";

interface CloudinaryImageProps {
  src: string;
  alt: string;
  width?: number;
  height?: number;
  className?: string;
  priority?: boolean;
  quality?: number;
}

export function CloudinaryImage({
  src,
  alt,
  width = 600,
  height = 800,
  className,
  priority,
  quality = 75,
}: CloudinaryImageProps) {
  // Ensure src has f_auto and f_webp parameters
  const transformedSrc = src.includes("upload/") ? src.replace("upload/", "upload/f_auto/") : src;

  return (
    <CldImage
      src={transformedSrc}
      alt={alt}
      width={width}
      height={height}
      className={className}
      priority={priority}
      crop="fill"
      gravity="auto"
      dpr="auto"
      format="webp"
      quality={quality}
      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
      loading={priority ? "eager" : "lazy"}
    />
  );
}
