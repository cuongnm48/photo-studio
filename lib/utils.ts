import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const cloudinaryFolders = {
  backgroundCardImages: "background-card-images",
  photoRestoration: "photo-restoration",
  passportPhoto: "passport-photo",
  // Add more folders as needed
} as const;

export type CloudinaryImageType = {
  id: string;
  title: string;
  url: string;
  width: number;
  height: number;
};

export async function getImagesFromFolder(folderName: string) {
  try {
    const response = await fetch(
      `https://api.cloudinary.com/v1_1/${process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME}/resources/search`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Basic ${Buffer.from(
            process.env.CLOUDINARY_API_KEY + ":" + process.env.CLOUDINARY_API_SECRET
          ).toString("base64")}`,
        },
        body: JSON.stringify({
          expression: `folder:${folderName}`,
          sort_by: [{ created_at: "desc" }],
          max_results: 100,
        }),
      }
    );

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const data = await response.json();

    return data.resources.map((resource: any) => ({
      id: resource.public_id,
      title: resource.filename,
      url: resource.secure_url,
      width: resource.width,
      height: resource.height,
    }));
  } catch (error) {
    console.error("Error fetching images:", error);
    return [];
  }
}
