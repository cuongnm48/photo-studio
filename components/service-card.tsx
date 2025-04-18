import { Edit, Cloud, Ruler, Wand2 } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"

interface ServiceCardProps {
  icon: "edit" | "cloud" | "ruler" | "wand"
  title: string
  description: string
}

export default function ServiceCard({ icon, title, description }: ServiceCardProps) {
  const getIcon = () => {
    switch (icon) {
      case "edit":
        return <Edit className="h-6 w-6 text-rose-500" />
      case "cloud":
        return <Cloud className="h-6 w-6 text-rose-500" />
      case "ruler":
        return <Ruler className="h-6 w-6 text-rose-500" />
      case "wand":
        return <Wand2 className="h-6 w-6 text-rose-500" />
      default:
        return <Edit className="h-6 w-6 text-rose-500" />
    }
  }

  return (
    <Card className="border-0 shadow-md hover:shadow-lg transition-shadow">
      <CardContent className="p-6">
        <div className="w-12 h-12 bg-rose-100 rounded-full flex items-center justify-center mb-4">{getIcon()}</div>
        <h3 className="text-xl font-bold mb-2">{title}</h3>
        <p className="text-gray-600">{description}</p>
      </CardContent>
    </Card>
  )
}
