import Image from "next/image"
import Link from "next/link"
import { Card, CardContent } from "@/components/ui/card"
import type { MealAnalysis } from "@/lib/meal-analysis"

interface MealCardProps {
  meal: MealAnalysis
}

export function MealCard({ meal }: MealCardProps) {
  return (
    <Link href={`/meal/${meal.id}`}>
      <Card className="overflow-hidden">
        <div className="aspect-square relative">
          <Image
            src={meal.imageUrl || "/placeholder.svg?height=200&width=200"}
            alt={meal.name}
            fill
            className="object-cover"
          />
        </div>
        <CardContent className="p-3">
          <h3 className="font-medium text-sm">{meal.name}</h3>
          <p className="text-xs text-gray-500">{meal.nutritionalInfo.calories} kcal</p>
        </CardContent>
      </Card>
    </Link>
  )
}
