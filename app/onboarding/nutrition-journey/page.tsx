import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function NutritionJourneyPage() {
  return (
    <div className="flex flex-col min-h-screen bg-white p-6">
      <div className="flex-1 flex flex-col items-center justify-center text-center">
        <Image
          src="/images/nutrition-journey.png"
          alt="People enjoying healthy food"
          width={300}
          height={300}
          className="mb-8"
        />

        <h1 className="text-2xl font-bold mb-2">Your Personalized Nutrition Journey</h1>
        <p className="text-gray-600 mb-8">
          Unlock the power of personalized nutrition with our app. Simply snap a photo of your meal, and we'll provide
          tailored dietary advice based on your health data and preferences.
        </p>

        <Button asChild className="w-full bg-emerald-500 hover:bg-emerald-600">
          <Link href="/dashboard">Get Started</Link>
        </Button>
      </div>
    </div>
  )
}
