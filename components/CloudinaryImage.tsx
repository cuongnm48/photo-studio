"use client";

import { cn } from "@/lib/utils";
import { CldImage } from "next-cloudinary";

interface CloudinaryImageProps {
  src: string;
  alt: string;
  width?: number;
  height?: number;
  className?: string;
  priority?: boolean;
  quality?: number;
  fetchPriority?: "high" | "low" | "auto";
}

export function CloudinaryImage({
  src,
  alt,
  width = 600,
  height = 800,
  className,
  priority,
  quality = 100,
  fetchPriority,
}: CloudinaryImageProps) {
  // Ensure src has f_auto and f_webp parameters

  return (
    <CldImage
      src={src}
      alt={alt}
      width={width}
      height={height}
      className={cn("object-cover", className)}
      priority={priority}
      crop="fill"
      gravity="auto"
      dpr="auto"
      format="webp"
      quality={quality}
      loading={priority ? "eager" : "lazy"}
      fetchPriority={fetchPriority}
    />
  );
}
