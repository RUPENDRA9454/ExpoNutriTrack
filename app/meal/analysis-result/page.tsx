"use client"

import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Progress } from "@/components/ui/progress"
import { AnimatedCard } from "@/components/ui/animated-card"
import { GradientText } from "@/components/ui/gradient-text"
import { StatusBadge } from "@/components/ui/status-badge"
import {
  ChevronLeft,
  Sparkles,
  TrendingUp,
  AlertCircle,
  CheckCircle,
  Info,
  Share,
  Bookmark,
  Home,
  Search,
  User,
  Camera,
} from "lucide-react"

export default function MealAnalysisResultPage() {
  const mealData = {
    name: "Mediterranean Quinoa Bowl",
    confidence: 94,
    calories: 485,
    nutrients: {
      protein: { amount: 22, percentage: 85, status: "excellent" as const },
      carbs: { amount: 58, percentage: 72, status: "good" as const },
      fat: { amount: 18, percentage: 60, status: "good" as const },
      fiber: { amount: 12, percentage: 95, status: "excellent" as const },
    },
    ingredients: [
      "Quinoa (1 cup)",
      "Grilled Chicken (4 oz)",
      "Cherry Tomatoes (1/2 cup)",
      "Cucumber (1/2 cup)",
      "Feta Cheese (2 oz)",
      "Olive Oil (1 tbsp)",
      "Mixed Greens (1 cup)",
    ],
    recommendations: [
      {
        type: "positive",
        message: "Excellent protein content supports muscle maintenance",
      },
      {
        type: "suggestion",
        message: "Consider adding avocado for healthy omega-3 fats",
      },
      {
        type: "warning",
        message: "Sodium content is slightly high - watch portion of feta cheese",
      },
    ],
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 via-white to-blue-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900">
      {/* Header */}
      <div className="glass-effect sticky top-0 z-40">
        <div className="relative h-64">
          <Image src="/images/meal-photo.png" alt="Analyzed meal" fill className="object-cover" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>

          {/* Header Controls */}
          <div className="absolute top-4 left-4 right-4 flex items-center justify-between">
            <Link href="/dashboard">
              <Button
                variant="ghost"
                size="icon"
                className="rounded-full bg-white/20 backdrop-blur-sm text-white hover:bg-white/30"
              >
                <ChevronLeft className="h-5 w-5" />
              </Button>
            </Link>
            <div className="flex space-x-2">
              <Button
                variant="ghost"
                size="icon"
                className="rounded-full bg-white/20 backdrop-blur-sm text-white hover:bg-white/30"
              >
                <Share className="h-4 w-4" />
              </Button>
              <Button
                variant="ghost"
                size="icon"
                className="rounded-full bg-white/20 backdrop-blur-sm text-white hover:bg-white/30"
              >
                <Bookmark className="h-4 w-4" />
              </Button>
            </div>
          </div>

          {/* Confidence Badge */}
          <div className="absolute bottom-4 left-4">
            <div className="flex items-center bg-white/90 backdrop-blur-sm rounded-full px-3 py-1">
              <Sparkles className="h-4 w-4 text-green-600 mr-1" />
              <span className="text-sm font-medium">{mealData.confidence}% Match</span>
            </div>
          </div>
        </div>
      </div>

      <div className="p-4 space-y-6 -mt-8 relative z-10">
        {/* Meal Info Card */}
        <AnimatedCard className="glass-effect">
          <div className="p-6">
            <div className="flex items-center justify-between mb-4">
              <div>
                <h1 className="text-xl font-bold">
                  <GradientText>{mealData.name}</GradientText>
                </h1>
                <p className="text-sm text-gray-600 dark:text-gray-300">
                  Analyzed just now • {mealData.calories} calories
                </p>
              </div>
              <StatusBadge status="excellent">Healthy Choice</StatusBadge>
            </div>
          </div>
        </AnimatedCard>

        {/* Nutritional Breakdown */}
        <AnimatedCard delay={200}>
          <div className="p-6">
            <h2 className="text-lg font-semibold mb-4 flex items-center">
              <TrendingUp className="h-5 w-5 mr-2 text-blue-600" />
              Nutritional Breakdown
            </h2>

            <div className="grid grid-cols-2 gap-4 mb-6">
              <div className="text-center p-4 bg-gradient-to-br from-green-50 to-emerald-50 dark:from-green-900/20 dark:to-emerald-900/20 rounded-lg">
                <p className="text-2xl font-bold text-green-600">{mealData.calories}</p>
                <p className="text-xs text-gray-600 dark:text-gray-300">Calories</p>
              </div>
              <div className="text-center p-4 bg-gradient-to-br from-blue-50 to-cyan-50 dark:from-blue-900/20 dark:to-cyan-900/20 rounded-lg">
                <p className="text-2xl font-bold text-blue-600">{mealData.nutrients.fiber.amount}g</p>
                <p className="text-xs text-gray-600 dark:text-gray-300">Fiber</p>
              </div>
            </div>

            <div className="space-y-4">
              {Object.entries(mealData.nutrients).map(([key, data]) => (
                <div key={key} className="space-y-2">
                  <div className="flex items-center justify-between text-sm">
                    <div className="flex items-center">
                      <span className="capitalize font-medium">{key}</span>
                      <StatusBadge status={data.status} className="ml-2 text-xs">
                        {data.status}
                      </StatusBadge>
                    </div>
                    <span className="font-semibold">{data.amount}g</span>
                  </div>
                  <Progress
                    value={data.percentage}
                    className="h-3 bg-gray-100 dark:bg-gray-800"
                    indicatorClassName={`${
                      data.status === "excellent"
                        ? "bg-gradient-to-r from-green-400 to-emerald-500"
                        : data.status === "good"
                          ? "bg-gradient-to-r from-blue-400 to-cyan-500"
                          : "bg-gradient-to-r from-yellow-400 to-orange-500"
                    } transition-all duration-500`}
                  />
                </div>
              ))}
            </div>
          </div>
        </AnimatedCard>

        {/* AI Recommendations */}
        <AnimatedCard delay={300}>
          <div className="p-6">
            <h2 className="text-lg font-semibold mb-4 flex items-center">
              <Sparkles className="h-5 w-5 mr-2 text-purple-600" />
              AI Recommendations
            </h2>

            <div className="space-y-3">
              {mealData.recommendations.map((rec, index) => (
                <div
                  key={index}
                  className={`flex items-start p-3 rounded-lg ${
                    rec.type === "positive"
                      ? "bg-green-50 dark:bg-green-900/20"
                      : rec.type === "suggestion"
                        ? "bg-blue-50 dark:bg-blue-900/20"
                        : "bg-yellow-50 dark:bg-yellow-900/20"
                  }`}
                >
                  {rec.type === "positive" && (
                    <CheckCircle className="h-5 w-5 text-green-600 mr-3 mt-0.5 flex-shrink-0" />
                  )}
                  {rec.type === "suggestion" && <Info className="h-5 w-5 text-blue-600 mr-3 mt-0.5 flex-shrink-0" />}
                  {rec.type === "warning" && (
                    <AlertCircle className="h-5 w-5 text-yellow-600 mr-3 mt-0.5 flex-shrink-0" />
                  )}
                  <p className="text-sm">{rec.message}</p>
                </div>
              ))}
            </div>
          </div>
        </AnimatedCard>

        {/* Ingredients */}
        <AnimatedCard delay={400}>
          <div className="p-6">
            <h2 className="text-lg font-semibold mb-4">Detected Ingredients</h2>
            <div className="grid grid-cols-2 gap-2">
              {mealData.ingredients.map((ingredient, index) => (
                <div key={index} className="flex items-center p-2 bg-gray-50 dark:bg-gray-800 rounded-lg">
                  <div className="w-2 h-2 bg-green-500 rounded-full mr-2"></div>
                  <span className="text-sm">{ingredient}</span>
                </div>
              ))}
            </div>
          </div>
        </AnimatedCard>

        {/* Action Buttons */}
        <div className="grid grid-cols-2 gap-4 pb-8">
          <Button className="h-12 gradient-primary shadow-lg">Add to Log</Button>
          <Button variant="outline" className="h-12 border-2">
            View Similar Meals
          </Button>
        </div>
        {/* Bottom Navigation */}
        <div className="fixed bottom-0 left-0 right-0 glass-effect border-t border-gray-200 dark:border-gray-700">
          <div className="flex items-center justify-around p-3 max-w-md mx-auto">
            <Link
              href="/dashboard"
              className="flex flex-col items-center text-gray-400 hover:text-gray-600 dark:hover:text-gray-300"
            >
              <Home className="h-5 w-5" />
              <span className="text-xs mt-1">Home</span>
            </Link>
            <Link
              href="/medical-reports"
              className="flex flex-col items-center text-gray-400 hover:text-gray-600 dark:hover:text-gray-300"
            >
              <Search className="h-5 w-5" />
              <span className="text-xs mt-1">Reports</span>
            </Link>
            <Link href="/add-meal" className="flex flex-col items-center">
              <div className="w-12 h-12 rounded-full gradient-primary flex items-center justify-center shadow-lg">
                <Camera className="h-6 w-6 text-white" />
              </div>
              <span className="text-xs mt-1 text-green-600 font-medium">Scan</span>
            </Link>
            <Link
              href="/insights"
              className="flex flex-col items-center text-gray-400 hover:text-gray-600 dark:hover:text-gray-300"
            >
              <TrendingUp className="h-5 w-5" />
              <span className="text-xs mt-1">Insights</span>
            </Link>
            <Link
              href="/profile"
              className="flex flex-col items-center text-gray-400 hover:text-gray-600 dark:hover:text-gray-300"
            >
              <User className="h-5 w-5" />
              <span className="text-xs mt-1">Profile</span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
