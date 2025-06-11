"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Progress } from "@/components/ui/progress"
import { AnimatedCard } from "@/components/ui/animated-card"
import { GradientText } from "@/components/ui/gradient-text"
import { StatusBadge } from "@/components/ui/status-badge"
import {
  Camera,
  Home,
  Search,
  TrendingUp,
  User,
  Settings,
  ChevronRight,
  Award,
  Heart,
  Utensils,
  Bell,
  HelpCircle,
  LogOut,
  Edit,
  Shield,
  Zap,
  Bookmark,
} from "lucide-react"

export default function ProfilePage() {
  const [user, setUser] = useState({
    name: "Sarah Johnson",
    email: "sarah.johnson@example.com",
    joinDate: "Member since June 2023",
    avatar: "/placeholder.svg?height=100&width=100",
    streak: 7,
    achievements: 12,
    healthScore: 85,
  })

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 via-white to-blue-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900">
      {/* Header */}
      <div className="glass-effect sticky top-0 z-40 p-4">
        <div className="flex items-center justify-between">
          <h1 className="text-xl font-bold">Profile</h1>
          <div className="flex items-center space-x-2">
            <Link href="/settings">
              <Button variant="ghost" size="icon">
                <Settings className="h-5 w-5" />
              </Button>
            </Link>
          </div>
        </div>
      </div>

      <div className="p-4 space-y-6 pb-24">
        {/* User Profile Card */}
        <AnimatedCard className="relative">
          <div className="absolute top-4 right-4">
            <Button variant="ghost" size="icon" className="h-8 w-8 rounded-full">
              <Edit className="h-4 w-4" />
            </Button>
          </div>
          <div className="p-6 flex items-center">
            <div className="relative mr-4">
              <div className="h-20 w-20 rounded-full overflow-hidden border-4 border-white dark:border-gray-800 shadow-lg">
                <Image
                  src={user.avatar || "/placeholder.svg"}
                  alt={user.name}
                  width={80}
                  height={80}
                  className="object-cover"
                />
              </div>
              <div className="absolute -bottom-1 -right-1 bg-green-500 rounded-full p-1 border-2 border-white dark:border-gray-800">
                <Shield className="h-3 w-3 text-white" />
              </div>
            </div>
            <div>
              <h2 className="text-xl font-bold">
                <GradientText>{user.name}</GradientText>
              </h2>
              <p className="text-sm text-gray-600 dark:text-gray-300">{user.email}</p>
              <p className="text-xs text-gray-500 dark:text-gray-400">{user.joinDate}</p>
            </div>
          </div>
        </AnimatedCard>

        {/* Stats Overview */}
        <div className="grid grid-cols-3 gap-3">
          <AnimatedCard className="p-4 text-center" delay={100}>
            <div className="flex items-center justify-center mb-2">
              <Zap className="h-5 w-5 mr-1 text-green-600" />
              <span className="text-2xl font-bold">{user.streak}</span>
            </div>
            <p className="text-xs text-gray-600 dark:text-gray-300">Day Streak</p>
          </AnimatedCard>

          <AnimatedCard className="p-4 text-center" delay={200}>
            <div className="flex items-center justify-center mb-2">
              <Award className="h-5 w-5 mr-1 text-yellow-600" />
              <span className="text-2xl font-bold">{user.achievements}</span>
            </div>
            <p className="text-xs text-gray-600 dark:text-gray-300">Achievements</p>
          </AnimatedCard>

          <AnimatedCard className="p-4 text-center" delay={300}>
            <div className="flex items-center justify-center mb-2">
              <Heart className="h-5 w-5 mr-1 text-red-600" />
              <span className="text-2xl font-bold">{user.healthScore}</span>
            </div>
            <p className="text-xs text-gray-600 dark:text-gray-300">Health Score</p>
          </AnimatedCard>
        </div>

        {/* Health Profile */}
        <AnimatedCard delay={400}>
          <div className="p-6">
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-lg font-semibold">Health Profile</h2>
              <Link href="/profile/health">
                <Button variant="ghost" size="sm" className="h-8 text-blue-600 dark:text-blue-400">
                  Edit
                </Button>
              </Link>
            </div>

            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  <div className="w-10 h-10 rounded-full bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center mr-3">
                    <User className="h-5 w-5 text-blue-600 dark:text-blue-400" />
                  </div>
                  <div>
                    <p className="text-sm font-medium">Personal Details</p>
                    <p className="text-xs text-gray-500">Age, height, weight, activity level</p>
                  </div>
                </div>
                <ChevronRight className="h-5 w-5 text-gray-400" />
              </div>

              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  <div className="w-10 h-10 rounded-full bg-green-100 dark:bg-green-900/30 flex items-center justify-center mr-3">
                    <Utensils className="h-5 w-5 text-green-600 dark:text-green-400" />
                  </div>
                  <div>
                    <p className="text-sm font-medium">Dietary Preferences</p>
                    <p className="text-xs text-gray-500">Vegetarian, allergies, restrictions</p>
                  </div>
                </div>
                <ChevronRight className="h-5 w-5 text-gray-400" />
              </div>

              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  <div className="w-10 h-10 rounded-full bg-red-100 dark:bg-red-900/30 flex items-center justify-center mr-3">
                    <Heart className="h-5 w-5 text-red-600 dark:text-red-400" />
                  </div>
                  <div>
                    <p className="text-sm font-medium">Health Conditions</p>
                    <p className="text-xs text-gray-500">Medical history, conditions</p>
                  </div>
                </div>
                <ChevronRight className="h-5 w-5 text-gray-400" />
              </div>
            </div>
          </div>
        </AnimatedCard>

        {/* Goals */}
        <AnimatedCard delay={500}>
          <div className="p-6">
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-lg font-semibold">My Goals</h2>
              <StatusBadge status="good">On Track</StatusBadge>
            </div>

            <div className="space-y-4">
              <div className="space-y-2">
                <div className="flex items-center justify-between text-sm">
                  <span className="font-medium">Weight Goal</span>
                  <span className="text-green-600 font-semibold">-2.5 kg / -5 kg</span>
                </div>
                <Progress value={50} className="h-2" indicatorClassName="bg-green-500" />
              </div>

              <div className="space-y-2">
                <div className="flex items-center justify-between text-sm">
                  <span className="font-medium">Protein Intake</span>
                  <span className="text-blue-600 font-semibold">85%</span>
                </div>
                <Progress value={85} className="h-2" indicatorClassName="bg-blue-500" />
              </div>

              <div className="space-y-2">
                <div className="flex items-center justify-between text-sm">
                  <span className="font-medium">Daily Water</span>
                  <span className="text-cyan-600 font-semibold">1.8L / 2.5L</span>
                </div>
                <Progress value={72} className="h-2" indicatorClassName="bg-cyan-500" />
              </div>
            </div>
          </div>
        </AnimatedCard>

        {/* Settings & Support */}
        <AnimatedCard delay={600}>
          <div className="divide-y divide-gray-100 dark:divide-gray-800">
            <Link href="/settings/notifications">
              <div className="flex items-center justify-between p-4 hover:bg-gray-50 dark:hover:bg-gray-800">
                <div className="flex items-center">
                  <Bell className="h-5 w-5 text-gray-500 mr-3" />
                  <span className="text-sm">Notifications</span>
                </div>
                <ChevronRight className="h-5 w-5 text-gray-400" />
              </div>
            </Link>
            <Link href="/settings/saved-meals">
              <div className="flex items-center justify-between p-4 hover:bg-gray-50 dark:hover:bg-gray-800">
                <div className="flex items-center">
                  <Bookmark className="h-5 w-5 text-gray-500 mr-3" />
                  <span className="text-sm">Saved Meals</span>
                </div>
                <ChevronRight className="h-5 w-5 text-gray-400" />
              </div>
            </Link>
            <Link href="/help">
              <div className="flex items-center justify-between p-4 hover:bg-gray-50 dark:hover:bg-gray-800">
                <div className="flex items-center">
                  <HelpCircle className="h-5 w-5 text-gray-500 mr-3" />
                  <span className="text-sm">Help & Support</span>
                </div>
                <ChevronRight className="h-5 w-5 text-gray-400" />
              </div>
            </Link>
            <Link href="/sign-in">
              <div className="flex items-center justify-between p-4 hover:bg-gray-50 dark:hover:bg-gray-800 text-red-500">
                <div className="flex items-center">
                  <LogOut className="h-5 w-5 mr-3" />
                  <span className="text-sm">Sign Out</span>
                </div>
              </div>
            </Link>
          </div>
        </AnimatedCard>

        {/* App Version */}
        <div className="text-center">
          <p className="text-xs text-gray-500">NutriTrack v2.0.1</p>
        </div>
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
          <Link
            href="/add-meal"
            className="flex flex-col items-center text-gray-400 hover:text-gray-600 dark:hover:text-gray-300"
          >
            <div className="w-12 h-12 rounded-full bg-gray-200 dark:bg-gray-700 flex items-center justify-center">
              <Camera className="h-6 w-6" />
            </div>
            <span className="text-xs mt-1">Scan</span>
          </Link>
          <Link
            href="/insights"
            className="flex flex-col items-center text-gray-400 hover:text-gray-600 dark:hover:text-gray-300"
          >
            <TrendingUp className="h-5 w-5" />
            <span className="text-xs mt-1">Insights</span>
          </Link>
          <div className="flex flex-col items-center">
            <div className="w-12 h-12 rounded-full gradient-primary flex items-center justify-center shadow-lg">
              <User className="h-6 w-6 text-white" />
            </div>
            <span className="text-xs mt-1 text-green-600 font-medium">Profile</span>
          </div>
        </div>
      </div>
    </div>
  )
}
