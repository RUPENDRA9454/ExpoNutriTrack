import { Progress } from "@/components/ui/progress"
import { calculateDailyNutrientGoals } from "@/lib/user-data"
import type { UserHealthData } from "@/lib/meal-analysis"

interface NutritionProgressProps {
  userData: UserHealthData
  currentIntake: {
    calories: number
    protein: number
    carbs: number
    fat: number
  }
}

export function NutritionProgress({ userData, currentIntake }: NutritionProgressProps) {
  const goals = calculateDailyNutrientGoals(userData)

  const caloriePercentage = Math.min(Math.round((currentIntake.calories / goals.calories) * 100), 100)
  const proteinPercentage = Math.min(Math.round((currentIntake.protein / goals.protein) * 100), 100)
  const carbsPercentage = Math.min(Math.round((currentIntake.carbs / goals.carbs) * 100), 100)
  const fatPercentage = Math.min(Math.round((currentIntake.fat / goals.fat) * 100), 100)

  return (
    <div className="space-y-3">
      <div className="space-y-1">
        <div className="flex items-center justify-between text-sm">
          <span>Calories</span>
          <span className="font-medium">
            {currentIntake.calories}/{goals.calories} kcal
          </span>
        </div>
        <Progress value={caloriePercentage} className="h-2 bg-gray-100" indicatorClassName="bg-yellow-500" />
      </div>

      <div className="space-y-1">
        <div className="flex items-center justify-between text-sm">
          <span>Protein</span>
          <span className="font-medium">
            {currentIntake.protein}g/{goals.protein}g
          </span>
        </div>
        <Progress value={proteinPercentage} className="h-2 bg-gray-100" indicatorClassName="bg-green-500" />
      </div>

      <div className="space-y-1">
        <div className="flex items-center justify-between text-sm">
          <span>Fat</span>
          <span className="font-medium">
            {currentIntake.fat}g/{goals.fat}g
          </span>
        </div>
        <Progress value={fatPercentage} className="h-2 bg-gray-100" indicatorClassName="bg-red-500" />
      </div>

      <div className="space-y-1">
        <div className="flex items-center justify-between text-sm">
          <span>Carbs</span>
          <span className="font-medium">
            {currentIntake.carbs}g/{goals.carbs}g
          </span>
        </div>
        <Progress value={carbsPercentage} className="h-2 bg-gray-100" indicatorClassName="bg-blue-500" />
      </div>
    </div>
  )
}
