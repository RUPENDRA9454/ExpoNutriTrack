"use client"

import type React from "react"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Checkbox } from "@/components/ui/checkbox"
import { AnimatedCard } from "@/components/ui/animated-card"
import { GradientText } from "@/components/ui/gradient-text"
import { ChevronLeft, Save } from "lucide-react"

export default function HealthProfilePage() {
  const [isLoading, setIsLoading] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)

    // Simulate API call
    setTimeout(() => {
      setIsLoading(false)
      window.location.href = "/profile"
    }, 1500)
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
          <h1 className="text-lg font-semibold">Health Profile</h1>
          <div className="w-10"></div>
        </div>
      </div>

      <div className="p-4 space-y-6 pb-24">
        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Basic Information */}
          <AnimatedCard>
            <div className="p-6">
              <h2 className="text-lg font-semibold mb-4">
                <GradientText>Basic Information</GradientText>
              </h2>

              <div className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="age">Age</Label>
                  <Input id="age" placeholder="Enter your age" className="h-12" defaultValue="32" />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="gender">Gender</Label>
                  <Select defaultValue="female">
                    <SelectTrigger id="gender" className="h-12">
                      <SelectValue placeholder="Select your gender" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="male">Male</SelectItem>
                      <SelectItem value="female">Female</SelectItem>
                      <SelectItem value="non-binary">Non-binary</SelectItem>
                      <SelectItem value="prefer-not-to-say">Prefer not to say</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="height">Height (cm)</Label>
                    <Input id="height" placeholder="e.g. 175" className="h-12" defaultValue="165" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="weight">Weight (kg)</Label>
                    <Input id="weight" placeholder="e.g. 70" className="h-12" defaultValue="65" />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="activity">Activity Level</Label>
                  <Select defaultValue="moderately-active">
                    <SelectTrigger id="activity" className="h-12">
                      <SelectValue placeholder="Select your activity level" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="sedentary">Sedentary</SelectItem>
                      <SelectItem value="lightly-active">Lightly Active</SelectItem>
                      <SelectItem value="moderately-active">Moderately Active</SelectItem>
                      <SelectItem value="very-active">Very Active</SelectItem>
                      <SelectItem value="extremely-active">Extremely Active</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>
            </div>
          </AnimatedCard>

          {/* Health Goals */}
          <AnimatedCard delay={200}>
            <div className="p-6">
              <h2 className="text-lg font-semibold mb-4">
                <GradientText>Health Goals</GradientText>
              </h2>

              <RadioGroup defaultValue="weight-loss">
                <div className="flex items-center justify-between border rounded-lg p-4 mb-2 hover:bg-gray-50 dark:hover:bg-gray-800">
                  <Label htmlFor="weight-loss" className="flex-1 cursor-pointer">
                    Weight Loss
                  </Label>
                  <RadioGroupItem id="weight-loss" value="weight-loss" />
                </div>
                <div className="flex items-center justify-between border rounded-lg p-4 mb-2 hover:bg-gray-50 dark:hover:bg-gray-800">
                  <Label htmlFor="weight-gain" className="flex-1 cursor-pointer">
                    Weight Gain
                  </Label>
                  <RadioGroupItem id="weight-gain" value="weight-gain" />
                </div>
                <div className="flex items-center justify-between border rounded-lg p-4 mb-2 hover:bg-gray-50 dark:hover:bg-gray-800">
                  <Label htmlFor="muscle-gain" className="flex-1 cursor-pointer">
                    Muscle Gain
                  </Label>
                  <RadioGroupItem id="muscle-gain" value="muscle-gain" />
                </div>
                <div className="flex items-center justify-between border rounded-lg p-4 hover:bg-gray-50 dark:hover:bg-gray-800">
                  <Label htmlFor="general-wellness" className="flex-1 cursor-pointer">
                    General Wellness
                  </Label>
                  <RadioGroupItem id="general-wellness" value="general-wellness" />
                </div>
              </RadioGroup>
            </div>
          </AnimatedCard>

          {/* Dietary Preferences */}
          <AnimatedCard delay={300}>
            <div className="p-6">
              <h2 className="text-lg font-semibold mb-4">
                <GradientText>Dietary Preferences</GradientText>
              </h2>

              <div className="space-y-4">
                <div className="space-y-2">
                  <Label>Diet Type</Label>
                  <Select defaultValue="vegetarian">
                    <SelectTrigger className="h-12">
                      <SelectValue placeholder="Select diet type" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="omnivore">Omnivore</SelectItem>
                      <SelectItem value="vegetarian">Vegetarian</SelectItem>
                      <SelectItem value="vegan">Vegan</SelectItem>
                      <SelectItem value="pescatarian">Pescatarian</SelectItem>
                      <SelectItem value="keto">Keto</SelectItem>
                      <SelectItem value="paleo">Paleo</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <Label>Allergies & Intolerances</Label>
                  <div className="grid grid-cols-2 gap-2">
                    <div className="flex items-center space-x-2">
                      <Checkbox id="gluten" />
                      <Label htmlFor="gluten" className="text-sm">
                        Gluten
                      </Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Checkbox id="dairy" />
                      <Label htmlFor="dairy" className="text-sm">
                        Dairy
                      </Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Checkbox id="nuts" defaultChecked />
                      <Label htmlFor="nuts" className="text-sm">
                        Nuts
                      </Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Checkbox id="shellfish" />
                      <Label htmlFor="shellfish" className="text-sm">
                        Shellfish
                      </Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Checkbox id="eggs" />
                      <Label htmlFor="eggs" className="text-sm">
                        Eggs
                      </Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Checkbox id="soy" />
                      <Label htmlFor="soy" className="text-sm">
                        Soy
                      </Label>
                    </div>
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="other-allergies">Other Allergies</Label>
                  <Input id="other-allergies" placeholder="Enter any other allergies" className="h-12" />
                </div>
              </div>
            </div>
          </AnimatedCard>

          {/* Health Conditions */}
          <AnimatedCard delay={400}>
            <div className="p-6">
              <h2 className="text-lg font-semibold mb-4">
                <GradientText>Health Conditions</GradientText>
              </h2>

              <div className="space-y-4">
                <div className="space-y-2">
                  <Label>Medical Conditions</Label>
                  <div className="grid grid-cols-2 gap-2">
                    <div className="flex items-center space-x-2">
                      <Checkbox id="diabetes" />
                      <Label htmlFor="diabetes" className="text-sm">
                        Diabetes
                      </Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Checkbox id="hypertension" />
                      <Label htmlFor="hypertension" className="text-sm">
                        Hypertension
                      </Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Checkbox id="heart-disease" />
                      <Label htmlFor="heart-disease" className="text-sm">
                        Heart Disease
                      </Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Checkbox id="celiac" />
                      <Label htmlFor="celiac" className="text-sm">
                        Celiac Disease
                      </Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Checkbox id="ibs" />
                      <Label htmlFor="ibs" className="text-sm">
                        IBS
                      </Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Checkbox id="thyroid" />
                      <Label htmlFor="thyroid" className="text-sm">
                        Thyroid Issues
                      </Label>
                    </div>
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="other-conditions">Other Conditions</Label>
                  <Input id="other-conditions" placeholder="Enter any other conditions" className="h-12" />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="medications">Current Medications</Label>
                  <Input id="medications" placeholder="Enter current medications" className="h-12" />
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
                Save Health Profile
              </div>
            )}
          </Button>
        </form>
      </div>
    </div>
  )
}
