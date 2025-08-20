"use client";

import { CldImage } from "next-cloudinary";

interface CloudinaryImageProps {
  src: string;
  alt: string;
  width?: number;
  height?: number;
  className?: string;
  fill?: boolean;
  priority?: boolean;
  quality?: number;
}

export function CloudinaryImage({
  src,
  alt,
  className,
  fill,
  priority,
  quality,
}: CloudinaryImageProps) {
  return (
    <CldImage
      src={src}
      alt={alt}
      className={className}
      fill={fill}
      priority={priority}
      quality={quality}
    />
  );
}
