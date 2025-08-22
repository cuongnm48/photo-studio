import { Card, CardContent } from "@/components/ui/card";
import { Cloud, Edit, Phone, Ruler, Wand2 } from "lucide-react";
import { CloudinaryImage } from "./CloudinaryImage";

interface ServiceCardProps {
  icon: "edit" | "cloud" | "ruler" | "wand";
  title: string;
  description?: string;
  url?: string; // Optional URL for images
}

export default function ServiceCard({ icon, title, description, url }: ServiceCardProps) {
  const getIcon = () => {
    switch (icon) {
      case "edit":
        return <Edit className="h-6 w-6 text-rose-500" />;
      case "cloud":
        return <Cloud className="h-6 w-6 text-rose-500" />;
      case "ruler":
        return <Ruler className="h-6 w-6 text-rose-500" />;
      case "wand":
        return <Wand2 className="h-6 w-6 text-rose-500" />;
      default:
        return <Edit className="h-6 w-6 text-rose-500" />;
    }
  };

  return (
    <Card className="border-0 shadow-md hover:shadow-lg transition-shadow">
      <CardContent className="p-6">
        <div className="w-12 h-12 bg-rose-100 rounded-full flex items-center justify-center mb-4">
          {getIcon()}
        </div>
        <h3 className="text-xl font-bold mb-2">{title}</h3>
        {description && <p className="text-gray-600">{description}</p>}
        {url && (
          <div className="flex justify-center mt-4 gap-2 flex-col">
            <div className="flex items-center space-x-3">
              <Phone className="text-rose-500 flex-shrink-0" />
              <div>
                <a href="tel:0909939351" className="hover:text-blue-300 transition-colors">
                  0909939351
                </a>
              </div>
            </div>
            <CloudinaryImage
              src={url}
              alt={title}
              width={120}
              height={120}
              className=" transition-transform duration-300 rounded-lg"
            />
          </div>
        )}
      </CardContent>
    </Card>
  );
}
