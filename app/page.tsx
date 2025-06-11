import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { GradientText } from "@/components/ui/gradient-text"
import { AnimatedCard } from "@/components/ui/animated-card"
import { Sparkles, TrendingUp, Shield } from "lucide-react"

export default function WelcomePage() {
  return (
    <div className="flex flex-col min-h-screen bg-gradient-to-br from-green-50 via-white to-blue-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900">
      {/* Hero Section */}
      <div className="flex-1 flex flex-col items-center justify-center p-8 text-center animate-fade-in">
        <div className="relative mb-8">
          <div className="absolute inset-0 bg-gradient-to-r from-green-400 to-blue-500 rounded-full blur-3xl opacity-20 animate-pulse-slow"></div>
          <Image
            src="/images/welcome-illustration.png"
            alt="Healthy nutrition illustration"
            width={280}
            height={280}
            className="relative z-10 object-contain"
          />
        </div>

        <div className="space-y-4 mb-8">
          <h1 className="text-4xl font-bold">
            Welcome to <GradientText>NutriTrack</GradientText>
          </h1>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-sm">
            Your AI-powered nutrition companion for a healthier lifestyle
          </p>
        </div>

        {/* Feature highlights */}
        <div className="grid grid-cols-3 gap-4 mb-8 w-full max-w-sm">
          <AnimatedCard delay={100} className="p-3 text-center">
            <Sparkles className="h-6 w-6 mx-auto mb-2 text-green-600" />
            <p className="text-xs font-medium">AI Analysis</p>
          </AnimatedCard>
          <AnimatedCard delay={200} className="p-3 text-center">
            <TrendingUp className="h-6 w-6 mx-auto mb-2 text-blue-600" />
            <p className="text-xs font-medium">Progress Tracking</p>
          </AnimatedCard>
          <AnimatedCard delay={300} className="p-3 text-center">
            <Shield className="h-6 w-6 mx-auto mb-2 text-purple-600" />
            <p className="text-xs font-medium">Health Insights</p>
          </AnimatedCard>
        </div>
      </div>

      {/* Action Buttons */}
      <div className="p-8 space-y-4">
        <Button
          asChild
          className="w-full h-14 text-lg gradient-primary shadow-lg hover:shadow-xl transition-all duration-300"
        >
          <Link href="/create-account">
            <Sparkles className="mr-2 h-5 w-5" />
            Start Your Journey
          </Link>
        </Button>

        <Button asChild variant="outline" className="w-full h-12 border-2 hover:bg-gray-50 dark:hover:bg-gray-800">
          <Link href="/sign-in">Already have an account? Sign In</Link>
        </Button>

        <p className="text-xs text-center text-gray-500 dark:text-gray-400 mt-6">
          Trusted by 100K+ users worldwide • Enterprise-grade security
        </p>
      </div>
    </div>
  )
}
