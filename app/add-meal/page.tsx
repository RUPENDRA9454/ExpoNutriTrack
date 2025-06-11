"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { AnimatedCard } from "@/components/ui/animated-card"
import { GradientText } from "@/components/ui/gradient-text"
import { Camera, X, ImageIcon, Sparkles, Zap } from "lucide-react"

export default function AddMealPage() {
  const [isAnalyzing, setIsAnalyzing] = useState(false)

  const handleTakePhoto = () => {
    setIsAnalyzing(true)
    // Simulate photo analysis
    setTimeout(() => {
      window.location.href = "/meal/analysis-result"
    }, 3000)
  }

  const handleChooseFromLibrary = () => {
    setIsAnalyzing(true)
    setTimeout(() => {
      window.location.href = "/meal/analysis-result"
    }, 2000)
  }

  if (isAnalyzing) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 flex items-center justify-center p-6">
        <AnimatedCard className="text-center p-8 max-w-sm mx-auto">
          <div className="relative mb-6">
            <div className="w-20 h-20 mx-auto rounded-full gradient-primary flex items-center justify-center animate-pulse">
              <Sparkles className="h-10 w-10 text-white" />
            </div>
            <div className="absolute inset-0 w-20 h-20 mx-auto rounded-full border-4 border-green-200 animate-spin border-t-green-500"></div>
          </div>
          <h2 className="text-xl font-bold mb-2">
            <GradientText>Analyzing Your Meal</GradientText>
          </h2>
          <p className="text-gray-600 dark:text-gray-300 text-sm">
            Our AI is identifying ingredients and calculating nutrition...
          </p>
          <div className="mt-4 flex justify-center space-x-1">
            <div className="w-2 h-2 bg-green-500 rounded-full animate-bounce"></div>
            <div className="w-2 h-2 bg-green-500 rounded-full animate-bounce" style={{ animationDelay: "0.1s" }}></div>
            <div className="w-2 h-2 bg-green-500 rounded-full animate-bounce" style={{ animationDelay: "0.2s" }}></div>
          </div>
        </AnimatedCard>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 via-white to-blue-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900">
      {/* Header */}
      <div className="glass-effect sticky top-0 z-40 p-4">
        <div className="flex items-center justify-between">
          <Link href="/dashboard">
            <Button variant="ghost" size="icon" className="rounded-full">
              <X className="h-5 w-5" />
            </Button>
          </Link>
          <h1 className="text-lg font-semibold">Add Meal</h1>
          <div className="w-10"></div>
        </div>
      </div>

      <div className="flex-1 flex flex-col items-center justify-center p-6 text-center">
        {/* Main Content */}
        <div className="mb-8 animate-fade-in">
          <div className="relative mb-6">
            <div className="absolute inset-0 bg-gradient-to-r from-green-400 to-blue-500 rounded-2xl blur-3xl opacity-20 animate-pulse-slow"></div>
            <AnimatedCard className="relative z-10 p-8 bg-gradient-to-br from-gray-50 to-white dark:from-gray-800 dark:to-gray-700">
              <div className="w-32 h-32 mx-auto rounded-2xl bg-gradient-to-br from-gray-100 to-gray-200 dark:from-gray-700 dark:to-gray-600 flex items-center justify-center mb-4 relative overflow-hidden">
                <Image
                  src="/placeholder.svg?height=120&width=120"
                  alt="Food placeholder"
                  width={120}
                  height={120}
                  className="object-cover opacity-30"
                />
                <div className="absolute inset-0 flex items-center justify-center">
                  <Camera className="h-12 w-12 text-gray-400" />
                </div>
              </div>
            </AnimatedCard>
          </div>

          <h2 className="text-2xl font-bold mb-2">
            <GradientText>Capture Your Meal</GradientText>
          </h2>
          <p className="text-gray-600 dark:text-gray-300 max-w-sm">
            Take a clear photo with good lighting for the most accurate nutritional analysis
          </p>
        </div>

        {/* Action Buttons */}
        <div className="w-full max-w-sm space-y-4">
          <Button
            onClick={handleTakePhoto}
            className="w-full h-14 gradient-primary shadow-lg hover:shadow-xl transition-all duration-300 text-lg"
          >
            <Camera className="mr-3 h-6 w-6" />
            Take Photo
          </Button>

          <Button
            onClick={handleChooseFromLibrary}
            variant="outline"
            className="w-full h-12 border-2 hover:bg-gray-50 dark:hover:bg-gray-800"
          >
            <ImageIcon className="mr-2 h-5 w-5" />
            Choose from Library
          </Button>
        </div>

        {/* Tips */}
        <AnimatedCard delay={400} className="mt-8 max-w-sm">
          <div className="p-4">
            <div className="flex items-center mb-3">
              <Zap className="h-5 w-5 text-yellow-500 mr-2" />
              <h3 className="font-semibold text-sm">Pro Tips</h3>
            </div>
            <ul className="text-xs text-gray-600 dark:text-gray-300 space-y-1">
              <li>• Ensure all food items are visible</li>
              <li>• Use natural lighting when possible</li>
              <li>• Include utensils for size reference</li>
            </ul>
          </div>
        </AnimatedCard>
      </div>
    </div>
  )
}
