import { NextResponse } from "next/server"
import { analyzeMealImage, generateRecommendations } from "@/lib/meal-analysis"
import { getUserData } from "@/lib/user-data"

export async function POST(request: Request) {
  try {
    const formData = await request.formData()
    const image = formData.get("image") as File

    if (!image) {
      return NextResponse.json({ error: "No image provided" }, { status: 400 })
    }

    // In a real app, we would upload the image to a storage service
    // and then pass the URL to the analyzeMealImage function
    // For now, we'll just use a placeholder URL
    const imageUrl = "/placeholder.svg?height=400&width=400"

    // Analyze the meal image
    const mealAnalysis = await analyzeMealImage(imageUrl)

    // Get user data
    const userData = getUserData()

    // Generate personalized recommendations
    const recommendations = generateRecommendations(mealAnalysis, userData)

    return NextResponse.json({
      success: true,
      mealAnalysis,
      recommendations,
    })
  } catch (error) {
    console.error("Error analyzing meal:", error)
    return NextResponse.json({ error: "Failed to analyze meal" }, { status: 500 })
  }
}
