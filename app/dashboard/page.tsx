"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Progress } from "@/components/ui/progress"
import { AnimatedCard } from "@/components/ui/animated-card"
import { GradientText } from "@/components/ui/gradient-text"
import { StatusBadge } from "@/components/ui/status-badge"
import { FloatingActionButton } from "@/components/ui/floating-action-button"
import {
  Camera,
  TrendingUp,
  Home,
  Search,
  User,
  Bell,
  Target,
  Zap,
  Award,
  ChevronRight,
  Calendar,
  Activity,
} from "lucide-react"

export default function DashboardPage() {
  const [currentStreak, setCurrentStreak] = useState(7)

  const nutritionData = {
    calories: { current: 1850, target: 2200, percentage: 84 },
    protein: { current: 120, target: 150, percentage: 80 },
    carbs: { current: 210, target: 250, percentage: 84 },
    fat: { current: 60, target: 75, percentage: 80 },
  }

  const recentMeals = [
    {
      id: 1,
      name: "Quinoa Power Bowl",
      calories: 450,
      image: "/placeholder.svg?height=100&width=100",
      time: "12:30 PM",
    },
    { id: 2, name: "Grilled Salmon", calories: 520, image: "/placeholder.svg?height=100&width=100", time: "7:00 PM" },
    { id: 3, name: "Green Smoothie", calories: 180, image: "/placeholder.svg?height=100&width=100", time: "8:00 AM" },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 via-white to-blue-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900">
      {/* Header */}
      <div className="glass-effect sticky top-0 z-40 p-4">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-xl font-bold">
              Good morning, <GradientText>Sarah</GradientText>
            </h1>
            <p className="text-sm text-gray-600 dark:text-gray-300">
              {new Date().toLocaleDateString("en-US", { weekday: "long", month: "long", day: "numeric" })}
            </p>
          </div>
          <div className="flex items-center space-x-2">
            <Button variant="ghost" size="icon" className="relative">
              <Bell className="h-5 w-5" />
              <div className="absolute -top-1 -right-1 h-3 w-3 bg-red-500 rounded-full"></div>
            </Button>
          </div>
        </div>
      </div>

      <div className="p-4 space-y-6 pb-24">
        {/* Quick Stats */}
        <div className="grid grid-cols-3 gap-3">
          <AnimatedCard className="p-4 text-center gradient-primary text-white" delay={100}>
            <div className="flex items-center justify-center mb-2">
              <Zap className="h-5 w-5 mr-1" />
              <span className="text-2xl font-bold">{currentStreak}</span>
            </div>
            <p className="text-xs opacity-90">Day Streak</p>
          </AnimatedCard>

          <AnimatedCard className="p-4 text-center" delay={200}>
            <div className="flex items-center justify-center mb-2">
              <Target className="h-5 w-5 mr-1 text-blue-600" />
              <span className="text-2xl font-bold">84%</span>
            </div>
            <p className="text-xs text-gray-600 dark:text-gray-300">Goal Progress</p>
          </AnimatedCard>

          <AnimatedCard className="p-4 text-center" delay={300}>
            <div className="flex items-center justify-center mb-2">
              <Award className="h-5 w-5 mr-1 text-yellow-600" />
              <span className="text-2xl font-bold">12</span>
            </div>
            <p className="text-xs text-gray-600 dark:text-gray-300">Achievements</p>
          </AnimatedCard>
        </div>

        {/* Today's Progress */}
        <AnimatedCard delay={400}>
          <div className="p-6">
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-lg font-semibold">Today's Nutrition</h2>
              <StatusBadge status="good">On Track</StatusBadge>
            </div>

            <div className="space-y-4">
              {Object.entries(nutritionData).map(([key, data], index) => (
                <div key={key} className="space-y-2">
                  <div className="flex items-center justify-between text-sm">
                    <span className="capitalize font-medium">{key}</span>
                    <span className="font-semibold">
                      {data.current}/{data.target} {key === "calories" ? "kcal" : "g"}
                    </span>
                  </div>
                  <Progress
                    value={data.percentage}
                    className="h-3 bg-gray-100 dark:bg-gray-800"
                    indicatorClassName={`${
                      key === "calories"
                        ? "bg-gradient-to-r from-yellow-400 to-orange-500"
                        : key === "protein"
                          ? "bg-gradient-to-r from-green-400 to-emerald-500"
                          : key === "carbs"
                            ? "bg-gradient-to-r from-blue-400 to-cyan-500"
                            : "bg-gradient-to-r from-red-400 to-pink-500"
                    } transition-all duration-500`}
                  />
                </div>
              ))}
            </div>
          </div>
        </AnimatedCard>

        {/* Recent Meals */}
        <AnimatedCard delay={500}>
          <div className="p-6">
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-lg font-semibold">Recent Meals</h2>
              <Link href="/meals" className="text-sm text-blue-600 hover:text-blue-500 font-medium">
                View All
              </Link>
            </div>

            <div className="space-y-3">
              {recentMeals.map((meal, index) => (
                <Link key={meal.id} href={`/meal/${meal.id}`}>
                  <div className="flex items-center space-x-3 p-3 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors">
                    <div className="relative">
                      <Image
                        src={meal.image || "/placeholder.svg"}
                        alt={meal.name}
                        width={50}
                        height={50}
                        className="rounded-lg object-cover"
                      />
                      <div className="absolute -top-1 -right-1 w-4 h-4 bg-green-500 rounded-full flex items-center justify-center">
                        <div className="w-2 h-2 bg-white rounded-full"></div>
                      </div>
                    </div>
                    <div className="flex-1">
                      <h3 className="font-medium text-sm">{meal.name}</h3>
                      <div className="flex items-center text-xs text-gray-500 dark:text-gray-400">
                        <Calendar className="h-3 w-3 mr-1" />
                        {meal.time} • {meal.calories} kcal
                      </div>
                    </div>
                    <ChevronRight className="h-4 w-4 text-gray-400" />
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </AnimatedCard>

        {/* AI Insights */}
        <AnimatedCard delay={600} className="gradient-secondary text-white">
          <div className="p-6">
            <div className="flex items-center mb-3">
              <div className="p-2 bg-white/20 rounded-lg mr-3">
                <Activity className="h-5 w-5" />
              </div>
              <h2 className="text-lg font-semibold">AI Health Insight</h2>
            </div>
            <p className="text-sm opacity-90 mb-4">
              Your protein intake is excellent today! Consider adding more fiber-rich vegetables to support digestion
              and maintain energy levels.
            </p>
            <Button variant="secondary" size="sm" className="bg-white/20 hover:bg-white/30 text-white border-white/30">
              Learn More
            </Button>
          </div>
        </AnimatedCard>

        {/* Weekly Challenge */}
        <AnimatedCard delay={700}>
          <div className="p-6">
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-lg font-semibold">Weekly Challenge</h2>
              <div className="text-right">
                <p className="text-2xl font-bold text-green-600">5/7</p>
                <p className="text-xs text-gray-500">Days completed</p>
              </div>
            </div>
            <div className="space-y-3">
              <div className="flex items-center">
                <div className="w-2 h-2 bg-green-500 rounded-full mr-3"></div>
                <span className="text-sm">Eat 5 servings of vegetables daily</span>
              </div>
              <Progress value={71} className="h-2" indicatorClassName="bg-green-500" />
              <p className="text-xs text-gray-500">2 more days to complete this challenge!</p>
            </div>
          </div>
        </AnimatedCard>
      </div>

      {/* Floating Action Button */}
      {/* <FloatingActionButton icon={Camera} onClick={() => (window.location.href = "/add-meal")} variant="primary" /> */}

      {/* Bottom Navigation */}
      <div className="fixed bottom-0 left-0 right-0 glass-effect border-t border-gray-200 dark:border-gray-700">
        <div className="flex items-center justify-around p-3 max-w-md mx-auto">
          <Link href="/dashboard" className="flex flex-col items-center text-green-600">
            <Home className="h-5 w-5" />
            <span className="text-xs mt-1 font-medium">Home</span>
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
  )
}
