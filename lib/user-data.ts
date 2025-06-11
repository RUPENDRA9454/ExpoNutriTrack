import type { UserHealthData } from "./meal-analysis"

// Mock user data store
let userData: UserHealthData = {
  age: 32,
  gender: "female",
  height: 165,
  weight: 65,
  activityLevel: "moderately-active",
  healthGoals: ["weight-loss", "general-wellness"],
  dietaryRestrictions: ["vegetarian"],
  allergies: ["peanuts"],
  healthConditions: [],
  labValues: {
    cholesterol: 180,
    bloodPressure: "120/80",
  },
}

export function getUserData(): UserHealthData {
  return { ...userData }
}

export function updateUserData(newData: Partial<UserHealthData>): UserHealthData {
  userData = { ...userData, ...newData }
  return getUserData()
}

export function calculateDailyNutrientGoals(userData: UserHealthData) {
  // This is a simplified calculation
  // In a real app, this would be much more sophisticated

  const { weight, height, age, gender, activityLevel, healthGoals } = userData

  // Default values if user data is incomplete
  const userWeight = weight || 70 // kg
  const userHeight = height || 170 // cm
  const userAge = age || 30
  const userGender = gender || "not-specified"
  const userActivity = activityLevel || "moderately-active"

  // Basic BMR calculation (Mifflin-St Jeor Equation)
  let bmr = 0
  if (userGender === "male") {
    bmr = 10 * userWeight + 6.25 * userHeight - 5 * userAge + 5
  } else {
    bmr = 10 * userWeight + 6.25 * userHeight - 5 * userAge - 161
  }

  // Activity multiplier
  let activityMultiplier = 1.2 // sedentary
  if (userActivity === "lightly-active") activityMultiplier = 1.375
  if (userActivity === "moderately-active") activityMultiplier = 1.55
  if (userActivity === "very-active") activityMultiplier = 1.725
  if (userActivity === "extremely-active") activityMultiplier = 1.9

  // Total Daily Energy Expenditure
  let tdee = bmr * activityMultiplier

  // Adjust based on goals
  if (healthGoals?.includes("weight-loss")) {
    tdee -= 500 // Caloric deficit for weight loss
  } else if (healthGoals?.includes("weight-gain")) {
    tdee += 500 // Caloric surplus for weight gain
  }

  // Macronutrient distribution
  let proteinPercentage = 0.25 // 25% of calories from protein
  let fatPercentage = 0.3 // 30% of calories from fat
  let carbPercentage = 0.45 // 45% of calories from carbs

  // Adjust macros based on goals
  if (healthGoals?.includes("muscle-gain")) {
    proteinPercentage = 0.3 // Increase protein for muscle gain
    carbPercentage = 0.45
    fatPercentage = 0.25
  } else if (healthGoals?.includes("weight-loss")) {
    proteinPercentage = 0.3 // Higher protein for satiety during weight loss
    fatPercentage = 0.35
    carbPercentage = 0.35 // Lower carbs for weight loss
  }

  // Calculate grams of each macronutrient
  // Protein: 4 calories per gram
  // Carbs: 4 calories per gram
  // Fat: 9 calories per gram
  const proteinGoal = Math.round((tdee * proteinPercentage) / 4)
  const carbGoal = Math.round((tdee * carbPercentage) / 4)
  const fatGoal = Math.round((tdee * fatPercentage) / 9)

  return {
    calories: Math.round(tdee),
    protein: proteinGoal,
    carbs: carbGoal,
    fat: fatGoal,
  }
}
