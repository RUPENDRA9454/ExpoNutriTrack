"use client"

import type React from "react"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Slider } from "@/components/ui/slider"
import { AnimatedCard } from "@/components/ui/animated-card"
import { GradientText } from "@/components/ui/gradient-text"
import { ChevronLeft, Save } from "lucide-react"

export default function DietaryPreferencesPage() {
  const [isLoading, setIsLoading] = useState(false)
  const [macroDistribution, setMacroDistribution] = useState({
    protein: 30,
    carbs: 40,
    fat: 30,
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)

    // Simulate API call
    setTimeout(() => {
      setIsLoading(false)
      window.location.href = "/profile"
    }, 1500)
  }

  // Update macro distribution ensuring they sum to 100%
  const updateMacro = (type: "protein" | "carbs" | "fat", value: number) => {
    const remaining = 100 - value
    const others = ["protein", "carbs", "fat"].filter((m) => m !== type) as ("protein" | "carbs" | "fat")[]

    const currentOthersTotal = others.reduce((sum, macro) => sum + macroDistribution[macro], 0)
    const ratio = currentOthersTotal > 0 ? remaining / currentOthersTotal : 1

    const newDistribution = {
      ...macroDistribution,
      [type]: value,
    }

    // Adjust other macros proportionally
    others.forEach((macro) => {
      newDistribution[macro] = Math.round(macroDistribution[macro] * ratio)
    })

    // Ensure they sum to exactly 100%
    const sum = newDistribution.protein + newDistribution.carbs + newDistribution.fat
    if (sum !== 100) {
      newDistribution[others[0]] += 100 - sum
    }

    setMacroDistribution(newDistribution)
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 via-white to-blue-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900">
      {/* Header */}
      <div className="glass-effect sticky top-0 z-40 p-4">
        <div className="flex items-center justify-between">
          <Link href="/profile" className="flex items-center">
            <ChevronLeft className="h-5 w-5 mr-1" />
            <span>Back</span>
          </Link>
          <h1 className="text-lg font-semibold">Dietary Preferences</h1>
          <div className="w-10"></div>
        </div>
      </div>

      <div className="p-4 space-y-6 pb-24">
        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Cuisine Preferences */}
          <AnimatedCard>
            <div className="p-6">
              <h2 className="text-lg font-semibold mb-4">
                <GradientText>Cuisine Preferences</GradientText>
              </h2>

              <div className="space-y-4">
                <div className="space-y-2">
                  <Label>Favorite Cuisines</Label>
                  <div className="flex flex-wrap gap-2">
                    {["Italian", "Mediterranean", "Asian", "Mexican", "Indian"].map((cuisine) => (
                      <Button
                        key={cuisine}
                        variant="outline"
                        className="rounded-full px-4 py-2 h-auto border-2 hover:bg-green-50 dark:hover:bg-green-900/20"
                      >
                        {cuisine}
                      </Button>
                    ))}
                    <Button variant="outline" className="rounded-full px-4 py-2 h-auto border-2 border-dashed">
                      + Add
                    </Button>
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="disliked-foods">Disliked Foods</Label>
                  <Input id="disliked-foods" placeholder="e.g. Mushrooms, Olives" className="h-12" />
                </div>
              </div>
            </div>
          </AnimatedCard>

          {/* Dietary Restrictions */}
          <AnimatedCard delay={200}>
            <div className="p-6">
              <h2 className="text-lg font-semibold mb-4">
                <GradientText>Dietary Restrictions</GradientText>
              </h2>

              <div className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="diet-type">Diet Type</Label>
                  <Select defaultValue="vegetarian">
                    <SelectTrigger id="diet-type" className="h-12">
                      <SelectValue placeholder="Select diet type" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="omnivore">Omnivore</SelectItem>
                      <SelectItem value="vegetarian">Vegetarian</SelectItem>
                      <SelectItem value="vegan">Vegan</SelectItem>
                      <SelectItem value="pescatarian">Pescatarian</SelectItem>
                      <SelectItem value="keto">Keto</SelectItem>
                      <SelectItem value="paleo">Paleo</SelectItem>
                      <SelectItem value="mediterranean">Mediterranean</SelectItem>
                      <SelectItem value="dash">DASH</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="allergies">Allergies & Intolerances</Label>
                  <Input
                    id="allergies"
                    placeholder="e.g. Peanuts, Gluten, Dairy"
                    className="h-12"
                    defaultValue="Peanuts"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="religious">Religious Restrictions</Label>
                  <Select>
                    <SelectTrigger id="religious" className="h-12">
                      <SelectValue placeholder="Select if applicable" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="none">None</SelectItem>
                      <SelectItem value="kosher">Kosher</SelectItem>
                      <SelectItem value="halal">Halal</SelectItem>
                      <SelectItem value="hindu">Hindu dietary restrictions</SelectItem>
                      <SelectItem value="buddhist">Buddhist dietary restrictions</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>
            </div>
          </AnimatedCard>

          {/* Macro Distribution */}
          <AnimatedCard delay={300}>
            <div className="p-6">
              <h2 className="text-lg font-semibold mb-4">
                <GradientText>Macro Distribution</GradientText>
              </h2>

              <div className="space-y-6">
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <Label htmlFor="protein-slider">Protein</Label>
                    <span className="text-sm font-medium">{macroDistribution.protein}%</span>
                  </div>
                  <Slider
                    id="protein-slider"
                    min={10}
                    max={60}
                    step={5}
                    value={[macroDistribution.protein]}
                    onValueChange={(value) => updateMacro("protein", value[0])}
                    className="[&>span]:bg-green-500"
                  />
                </div>

                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <Label htmlFor="carbs-slider">Carbohydrates</Label>
                    <span className="text-sm font-medium">{macroDistribution.carbs}%</span>
                  </div>
                  <Slider
                    id="carbs-slider"
                    min={10}
                    max={60}
                    step={5}
                    value={[macroDistribution.carbs]}
                    onValueChange={(value) => updateMacro("carbs", value[0])}
                    className="[&>span]:bg-blue-500"
                  />
                </div>

                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <Label htmlFor="fat-slider">Fat</Label>
                    <span className="text-sm font-medium">{macroDistribution.fat}%</span>
                  </div>
                  <Slider
                    id="fat-slider"
                    min={10}
                    max={60}
                    step={5}
                    value={[macroDistribution.fat]}
                    onValueChange={(value) => updateMacro("fat", value[0])}
                    className="[&>span]:bg-yellow-500"
                  />
                </div>

                <div className="flex justify-center">
                  <div className="w-32 h-32 rounded-full border-8 border-gray-100 dark:border-gray-800 relative">
                    <div
                      className="absolute inset-0 bg-green-500"
                      style={{
                        clipPath: `polygon(50% 50%, 50% 0%, ${50 + 50 * Math.cos((2 * Math.PI * macroDistribution.protein) / 100)}% ${50 - 50 * Math.sin((2 * Math.PI * macroDistribution.protein) / 100)}%, 50% 50%)`,
                      }}
                    ></div>
                    <div
                      className="absolute inset-0 bg-blue-500"
                      style={{
                        clipPath: `polygon(50% 50%, ${50 + 50 * Math.cos((2 * Math.PI * macroDistribution.protein) / 100)}% ${50 - 50 * Math.sin((2 * Math.PI * macroDistribution.protein) / 100)}%, ${50 + 50 * Math.cos((2 * Math.PI * (macroDistribution.protein + macroDistribution.carbs)) / 100)}% ${50 - 50 * Math.sin((2 * Math.PI * (macroDistribution.protein + macroDistribution.carbs)) / 100)}%, 50% 50%)`,
                      }}
                    ></div>
                    <div
                      className="absolute inset-0 bg-yellow-500"
                      style={{
                        clipPath: `polygon(50% 50%, ${50 + 50 * Math.cos((2 * Math.PI * (macroDistribution.protein + macroDistribution.carbs)) / 100)}% ${50 - 50 * Math.sin((2 * Math.PI * (macroDistribution.protein + macroDistribution.carbs)) / 100)}%, 50% 0%, 50% 50%)`,
                      }}
                    ></div>
                  </div>
                </div>
              </div>
            </div>
          </AnimatedCard>

          {/* Meal Timing */}
          <AnimatedCard delay={400}>
            <div className="p-6">
              <h2 className="text-lg font-semibold mb-4">
                <GradientText>Meal Timing</GradientText>
              </h2>

              <div className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="meals-per-day">Meals Per Day</Label>
                  <Select defaultValue="3">
                    <SelectTrigger id="meals-per-day" className="h-12">
                      <SelectValue placeholder="Select number of meals" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="2">2 meals</SelectItem>
                      <SelectItem value="3">3 meals</SelectItem>
                      <SelectItem value="4">4 meals</SelectItem>
                      <SelectItem value="5">5 meals</SelectItem>
                      <SelectItem value="6">6+ meals</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="eating-window">Eating Window</Label>
                  <Select defaultValue="standard">
                    <SelectTrigger id="eating-window" className="h-12">
                      <SelectValue placeholder="Select eating pattern" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="standard">Standard (no restrictions)</SelectItem>
                      <SelectItem value="if-16-8">Intermittent Fasting 16:8</SelectItem>
                      <SelectItem value="if-18-6">Intermittent Fasting 18:6</SelectItem>
                      <SelectItem value="if-20-4">Intermittent Fasting 20:4</SelectItem>
                      <SelectItem value="custom">Custom</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>
            </div>
          </AnimatedCard>

          {/* Save Button */}
          <Button
            type="submit"
            className="w-full h-12 gradient-primary shadow-lg hover:shadow-xl transition-all duration-300"
            disabled={isLoading}
          >
            {isLoading ? (
              <div className="flex items-center">
                <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2"></div>
                Saving...
              </div>
            ) : (
              <div className="flex items-center">
                <Save className="mr-2 h-4 w-4" />
                Save Dietary Preferences
              </div>
            )}
          </Button>
        </form>
      </div>
    </div>
  )
}
