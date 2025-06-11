// Types for meal analysis
export interface NutritionalInfo {
  calories: number
  protein: number
  carbs: number
  fat: number
  fiber?: number
  sugar?: number
  sodium?: number
  potassium?: number
}

export interface MealAnalysis {
  id: string
  imageUrl: string
  name: string
  nutritionalInfo: NutritionalInfo
  ingredients: string[]
  timestamp: Date
}

export interface UserHealthData {
  age?: number
  gender?: string
  height?: number
  weight?: number
  activityLevel?: string
  healthGoals?: string[]
  dietaryRestrictions?: string[]
  allergies?: string[]
  healthConditions?: string[]
  labValues?: {
    hba1c?: number
    cholesterol?: number
    bloodPressure?: string
  }
}

export interface Recommendation {
  type: "increase" | "decrease" | "maintain"
  nutrient: string
  amount: number
  unit: string
  reason: string
}

// Mock function to analyze meal image
export async function analyzeMealImage(imageUrl: string): Promise<MealAnalysis> {
  // In a real app, this would call an AI service to analyze the image
  // For now, we'll return mock data
  return {
    id: Math.random().toString(36).substring(2, 9),
    imageUrl,
    name: "Mixed Salad with Protein",
    nutritionalInfo: {
      calories: 450,
      protein: 20,
      carbs: 50,
      fat: 25,
      fiber: 8,
      sugar: 5,
      sodium: 300,
      potassium: 800,
    },
    ingredients: ["Chicken", "Lettuce", "Tomatoes", "Olive Oil", "Nuts"],
    timestamp: new Date(),
  }
}

// Mock function to generate personalized recommendations
export function generateRecommendations(mealAnalysis: MealAnalysis, userData: UserHealthData): Recommendation[] {
  // In a real app, this would use the user's health data and meal analysis
  // to generate personalized recommendations
  const recommendations: Recommendation[] = []

  // Example logic (very simplified)
  if (userData.healthGoals?.includes("weight-loss") && mealAnalysis.nutritionalInfo.calories > 400) {
    recommendations.push({
      type: "decrease",
      nutrient: "calories",
      amount: 100,
      unit: "kcal",
      reason: "To support your weight loss goal",
    })
  }

  if (userData.healthGoals?.includes("muscle-gain") && mealAnalysis.nutritionalInfo.protein < 25) {
    recommendations.push({
      type: "increase",
      nutrient: "protein",
      amount: 10,
      unit: "g",
      reason: "To support muscle growth and recovery",
    })
  }

  if (userData.healthConditions?.includes("diabetes") && mealAnalysis.nutritionalInfo.carbs > 40) {
    recommendations.push({
      type: "decrease",
      nutrient: "carbs",
      amount: 15,
      unit: "g",
      reason: "To help manage blood sugar levels",
    })
  }

  return recommendations
}
