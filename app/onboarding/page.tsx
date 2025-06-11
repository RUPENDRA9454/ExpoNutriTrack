import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Camera } from "lucide-react"

export default function OnboardingPage() {
  return (
    <div className="flex flex-col min-h-screen bg-white">
      <div className="flex-1 flex flex-col items-center justify-center p-6 text-center">
        <div className="bg-amber-50 rounded-lg p-8 w-full max-w-sm mb-8">
          <Image src="/images/snap-meal.png" alt="Taking photo of food" width={200} height={200} className="mx-auto" />
        </div>

        <h1 className="text-2xl font-bold mb-2">Snap Your Meals</h1>
        <p className="text-gray-600 mb-8">
          Take a photo of your food to track your meals and get personalized insights.
        </p>

        <Button className="w-full bg-blue-500 hover:bg-blue-600 mb-4">
          <Camera className="mr-2 h-4 w-4" /> Enable Camera
        </Button>

        <Button variant="ghost" className="w-full">
          Skip for now
        </Button>

        <div className="flex justify-center mt-8 space-x-2">
          <div className="h-2 w-2 rounded-full bg-blue-500"></div>
          <div className="h-2 w-2 rounded-full bg-gray-300"></div>
          <div className="h-2 w-2 rounded-full bg-gray-300"></div>
        </div>
      </div>
    </div>
  )
}
