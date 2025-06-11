"use client"

import type React from "react"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { AnimatedCard } from "@/components/ui/animated-card"
import { GradientText } from "@/components/ui/gradient-text"
import { ChevronLeft, Camera, Upload } from "lucide-react"

export default function EditProfilePage() {
  const [user, setUser] = useState({
    name: "Sarah Johnson",
    email: "sarah.johnson@example.com",
    phone: "+1 (555) 123-4567",
    avatar: "/placeholder.svg?height=100&width=100",
    dateOfBirth: "1990-05-15",
  })

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
          <h1 className="text-lg font-semibold">Edit Profile</h1>
          <div className="w-10"></div>
        </div>
      </div>

      <div className="p-4 space-y-6 pb-24">
        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Avatar Upload */}
          <AnimatedCard>
            <div className="p-6 flex flex-col items-center">
              <div className="relative mb-4">
                <div className="h-24 w-24 rounded-full overflow-hidden border-4 border-white dark:border-gray-800 shadow-lg">
                  <Image
                    src={user.avatar || "/placeholder.svg"}
                    alt={user.name}
                    width={96}
                    height={96}
                    className="object-cover"
                  />
                </div>
                <Button
                  variant="secondary"
                  size="icon"
                  className="absolute bottom-0 right-0 rounded-full h-8 w-8 shadow-lg"
                >
                  <Camera className="h-4 w-4" />
                </Button>
              </div>
              <h2 className="text-lg font-bold mb-1">
                <GradientText>{user.name}</GradientText>
              </h2>
              <p className="text-sm text-gray-600 dark:text-gray-300">{user.email}</p>
            </div>
          </AnimatedCard>

          {/* Personal Information */}
          <AnimatedCard delay={200}>
            <div className="p-6 space-y-4">
              <h2 className="text-lg font-semibold mb-4">Personal Information</h2>

              <div className="space-y-2">
                <Label htmlFor="name">Full Name</Label>
                <Input
                  id="name"
                  value={user.name}
                  onChange={(e) => setUser({ ...user, name: e.target.value })}
                  className="h-12"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="email">Email Address</Label>
                <Input
                  id="email"
                  type="email"
                  value={user.email}
                  onChange={(e) => setUser({ ...user, email: e.target.value })}
                  className="h-12"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="phone">Phone Number</Label>
                <Input
                  id="phone"
                  type="tel"
                  value={user.phone}
                  onChange={(e) => setUser({ ...user, phone: e.target.value })}
                  className="h-12"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="dob">Date of Birth</Label>
                <Input
                  id="dob"
                  type="date"
                  value={user.dateOfBirth}
                  onChange={(e) => setUser({ ...user, dateOfBirth: e.target.value })}
                  className="h-12"
                />
              </div>
            </div>
          </AnimatedCard>

          {/* Additional Documents */}
          <AnimatedCard delay={300}>
            <div className="p-6">
              <h2 className="text-lg font-semibold mb-4">Health Documents</h2>
              <div className="border-2 border-dashed border-gray-300 dark:border-gray-700 rounded-lg p-6 text-center">
                <Upload className="h-8 w-8 mx-auto mb-2 text-gray-400" />
                <p className="text-sm text-gray-600 dark:text-gray-300 mb-2">
                  Upload medical reports or health documents
                </p>
                <p className="text-xs text-gray-500">PDF, JPG or PNG (max 10MB)</p>
                <Button variant="outline" className="mt-4">
                  Select Files
                </Button>
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
              "Save Changes"
            )}
          </Button>
        </form>
      </div>
    </div>
  )
}
