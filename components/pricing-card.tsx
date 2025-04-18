import { Check } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter } from "@/components/ui/card"

interface PricingCardProps {
  title: string
  price: string
  features: string[]
  popular?: boolean
}

export default function PricingCard({ title, price, features, popular = false }: PricingCardProps) {
  return (
    <Card className={`border-0 ${popular ? "shadow-xl ring-2 ring-rose-500" : "shadow-md"} relative`}>
      {popular && (
        <div className="absolute top-0 right-0 bg-rose-500 text-white px-3 py-1 text-sm font-medium rounded-bl-lg rounded-tr-lg">
          Phổ Biến
        </div>
      )}
      <CardContent className="p-6">
        <h3 className="text-xl font-bold mb-2">{title}</h3>
        <div className="mt-4 mb-6">
          <span className="text-4xl font-bold">${price}</span>
        </div>
        <ul className="space-y-3">
          {features.map((feature, index) => (
            <li key={index} className="flex items-start">
              <Check className="h-5 w-5 text-rose-500 mr-2 flex-shrink-0 mt-0.5" />
              <span>{feature}</span>
            </li>
          ))}
        </ul>
      </CardContent>
      <CardFooter className="px-6 pb-6 pt-0">
        <Button className={`w-full ${popular ? "bg-rose-500 hover:bg-rose-600" : "bg-gray-900 hover:bg-gray-800"}`}>
          Đặt Ngay
        </Button>
      </CardFooter>
    </Card>
  )
}
