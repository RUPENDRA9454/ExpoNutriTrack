import { Card, CardContent } from "@/components/ui/card"
import type { Recommendation } from "@/lib/meal-analysis"
import { ArrowDownIcon, ArrowUpIcon, MinusIcon } from "lucide-react"

interface RecommendationCardProps {
  recommendation: Recommendation
}

export function RecommendationCard({ recommendation }: RecommendationCardProps) {
  return (
    <Card className="overflow-hidden">
      <CardContent className="p-4 flex items-center gap-3">
        <div className={`rounded-full p-2 ${getIconBackgroundColor(recommendation.type)}`}>
          {getIcon(recommendation.type)}
        </div>
        <div>
          <p className="font-medium text-sm">
            {getActionText(recommendation)} {recommendation.amount}
            {recommendation.unit} of {recommendation.nutrient}
          </p>
          <p className="text-xs text-gray-500">{recommendation.reason}</p>
        </div>
      </CardContent>
    </Card>
  )
}

function getIcon(type: "increase" | "decrease" | "maintain") {
  switch (type) {
    case "increase":
      return <ArrowUpIcon className="h-4 w-4 text-green-600" />
    case "decrease":
      return <ArrowDownIcon className="h-4 w-4 text-red-600" />
    case "maintain":
      return <MinusIcon className="h-4 w-4 text-blue-600" />
  }
}

function getIconBackgroundColor(type: "increase" | "decrease" | "maintain") {
  switch (type) {
    case "increase":
      return "bg-green-100"
    case "decrease":
      return "bg-red-100"
    case "maintain":
      return "bg-blue-100"
  }
}

function getActionText(recommendation: Recommendation) {
  switch (recommendation.type) {
    case "increase":
      return "Increase by"
    case "decrease":
      return "Decrease by"
    case "maintain":
      return "Maintain at"
  }
}
