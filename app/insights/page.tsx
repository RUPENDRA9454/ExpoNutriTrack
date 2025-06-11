"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Progress } from "@/components/ui/progress"
import { AnimatedCard } from "@/components/ui/animated-card"
import { GradientText } from "@/components/ui/gradient-text"
import { StatusBadge } from "@/components/ui/status-badge"
import {
  Camera,
  Home,
  Search,
  TrendingUp,
  User,
  Activity,
  Heart,
  Brain,
  Zap,
  Target,
  Award,
  ChevronRight,
  ChevronDown,
  ChevronUp,
  Info,
  Sparkles,
  BarChart3,
  PieChart,
  LineChart,
  Flame,
  Droplets,
  Moon,
  Apple,
  Scale,
} from "lucide-react"

export default function InsightsPage() {
  const [selectedPeriod, setSelectedPeriod] = useState<"daily" | "weekly" | "monthly">("weekly")
  const [expandedSection, setExpandedSection] = useState<string | null>(null)

  // Mock data for health insights
  const healthScore = {
    overall: 85,
    nutrition: 88,
    activity: 82,
    sleep: 79,
    hydration: 91,
    mental: 86,
  }

  const bodySystemsData = [
    {
      id: "cardiovascular",
      name: "Cardiovascular",
      icon: Heart,
      score: 87,
      status: "excellent" as const,
      trend: "improving",
      insights: [
        "Blood pressure within optimal range",
        "Heart rate variability improving",
        "Cardio fitness trending upward",
      ],
      recommendations: ["Continue current exercise routine", "Maintain omega-3 rich diet"],
    },
    {
      id: "metabolic",
      name: "Metabolic Health",
      icon: Flame,
      score: 82,
      status: "good" as const,
      trend: "stable",
      insights: [
        "Blood glucose levels stable",
        "Metabolism rate within normal range",
        "Energy levels consistent throughout day",
      ],
      recommendations: ["Consider intermittent fasting", "Increase protein intake"],
    },
    {
      id: "digestive",
      name: "Digestive System",
      icon: Apple,
      score: 90,
      status: "excellent" as const,
      trend: "improving",
      insights: [
        "High fiber intake supporting gut health",
        "Diverse microbiome from varied diet",
        "Regular meal timing optimizing digestion",
      ],
      recommendations: ["Continue probiotic foods", "Maintain meal consistency"],
    },
    {
      id: "immune",
      name: "Immune System",
      icon: Zap,
      score: 84,
      status: "good" as const,
      trend: "stable",
      insights: [
        "Vitamin C and D levels adequate",
        "Antioxidant intake from fruits/vegetables",
        "Sleep quality supporting immunity",
      ],
      recommendations: ["Add zinc-rich foods", "Consider vitamin D supplement"],
    },
    {
      id: "cognitive",
      name: "Cognitive Health",
      icon: Brain,
      score: 86,
      status: "excellent" as const,
      trend: "improving",
      insights: [
        "Omega-3 intake supporting brain health",
        "Consistent sleep improving memory",
        "Regular exercise enhancing focus",
      ],
      recommendations: ["Continue brain-healthy foods", "Maintain sleep schedule"],
    },
    {
      id: "musculoskeletal",
      name: "Musculoskeletal",
      icon: Activity,
      score: 79,
      status: "good" as const,
      trend: "needs-attention",
      insights: [
        "Protein intake adequate for muscle maintenance",
        "Calcium levels supporting bone health",
        "Exercise routine building strength",
      ],
      recommendations: ["Increase vitamin D", "Add resistance training"],
    },
  ]

  const weeklyTrends = {
    calories: { current: 1850, target: 2200, change: -5.2 },
    protein: { current: 120, target: 150, change: +8.1 },
    carbs: { current: 210, target: 250, change: -2.3 },
    fat: { current: 60, target: 75, change: +3.7 },
    water: { current: 2.1, target: 2.5, change: +12.5 },
    sleep: { current: 7.2, target: 8.0, change: +6.8 },
    steps: { current: 8500, target: 10000, change: +15.2 },
  }

  const aiInsights = [
    {
      type: "achievement",
      title: "Protein Goal Streak",
      description: "You've hit your protein target 6 days in a row! This supports muscle recovery and metabolism.",
      impact: "high",
    },
    {
      type: "recommendation",
      title: "Hydration Opportunity",
      description: "Your afternoon water intake could be improved. Try setting reminders between 2-4 PM.",
      impact: "medium",
    },
    {
      type: "warning",
      title: "Sleep Pattern Alert",
      description: "Your bedtime has been inconsistent this week. Aim for the same time each night.",
      impact: "high",
    },
    {
      type: "insight",
      title: "Nutrient Timing",
      description: "Your post-workout meals are well-timed for optimal recovery and muscle synthesis.",
      impact: "medium",
    },
  ]

  const toggleSection = (sectionId: string) => {
    setExpandedSection(expandedSection === sectionId ? null : sectionId)
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 via-white to-blue-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900">
      {/* Header */}
      <div className="glass-effect sticky top-0 z-40 p-4">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-xl font-bold">
              <GradientText>Health Insights</GradientText>
            </h1>
            <p className="text-sm text-gray-600 dark:text-gray-300">Your comprehensive health analysis</p>
          </div>
          <div className="flex items-center space-x-2">
            <Button variant="ghost" size="icon">
              <Info className="h-5 w-5" />
            </Button>
          </div>
        </div>
      </div>

      <div className="p-4 space-y-6 pb-24">
        {/* Period Selector */}
        <div className="flex rounded-lg overflow-hidden border border-gray-200 dark:border-gray-700">
          {(["daily", "weekly", "monthly"] as const).map((period) => (
            <button
              key={period}
              className={`flex-1 py-3 text-center text-sm font-medium capitalize ${
                selectedPeriod === period
                  ? "bg-blue-500 text-white"
                  : "bg-white dark:bg-gray-800 text-gray-600 dark:text-gray-300"
              }`}
              onClick={() => setSelectedPeriod(period)}
            >
              {period}
            </button>
          ))}
        </div>

        {/* Overall Health Score */}
        <AnimatedCard className="relative overflow-hidden">
          <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-green-400/20 to-blue-500/20 rounded-full -translate-y-8 translate-x-8"></div>
          <div className="p-6 relative">
            <div className="flex items-center justify-between mb-6">
              <div>
                <h2 className="text-lg font-semibold mb-1">Overall Health Score</h2>
                <p className="text-sm text-gray-600 dark:text-gray-300">Based on your {selectedPeriod} data</p>
              </div>
              <div className="text-right">
                <div className="text-3xl font-bold text-green-600">{healthScore.overall}</div>
                <div className="text-xs text-gray-500">out of 100</div>
              </div>
            </div>

            <div className="relative w-32 h-32 mx-auto mb-6">
              <svg className="w-32 h-32 transform -rotate-90" viewBox="0 0 120 120">
                <circle
                  cx="60"
                  cy="60"
                  r="50"
                  stroke="currentColor"
                  strokeWidth="8"
                  fill="none"
                  className="text-gray-200 dark:text-gray-700"
                />
                <circle
                  cx="60"
                  cy="60"
                  r="50"
                  stroke="url(#gradient)"
                  strokeWidth="8"
                  fill="none"
                  strokeLinecap="round"
                  strokeDasharray={`${(healthScore.overall / 100) * 314} 314`}
                  className="transition-all duration-1000"
                />
                <defs>
                  <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                    <stop offset="0%" stopColor="#10B981" />
                    <stop offset="100%" stopColor="#3B82F6" />
                  </linearGradient>
                </defs>
              </svg>
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center">
                  <div className="text-2xl font-bold">{healthScore.overall}</div>
                  <div className="text-xs text-gray-500">Score</div>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-3 gap-4">
              <div className="text-center">
                <div className="text-lg font-bold text-green-600">{healthScore.nutrition}</div>
                <div className="text-xs text-gray-500">Nutrition</div>
              </div>
              <div className="text-center">
                <div className="text-lg font-bold text-blue-600">{healthScore.activity}</div>
                <div className="text-xs text-gray-500">Activity</div>
              </div>
              <div className="text-center">
                <div className="text-lg font-bold text-purple-600">{healthScore.sleep}</div>
                <div className="text-xs text-gray-500">Sleep</div>
              </div>
            </div>
          </div>
        </AnimatedCard>

        {/* AI-Powered Insights */}
        <AnimatedCard delay={200}>
          <div className="p-6">
            <div className="flex items-center mb-4">
              <Sparkles className="h-5 w-5 text-purple-600 mr-2" />
              <h2 className="text-lg font-semibold">AI Health Insights</h2>
            </div>

            <div className="space-y-3">
              {aiInsights.map((insight, index) => (
                <div
                  key={index}
                  className={`p-4 rounded-lg border-l-4 ${
                    insight.type === "achievement"
                      ? "bg-green-50 dark:bg-green-900/20 border-green-500"
                      : insight.type === "warning"
                        ? "bg-amber-50 dark:bg-amber-900/20 border-amber-500"
                        : insight.type === "recommendation"
                          ? "bg-blue-50 dark:bg-blue-900/20 border-blue-500"
                          : "bg-purple-50 dark:bg-purple-900/20 border-purple-500"
                  }`}
                >
                  <div className="flex items-start justify-between">
                    <div className="flex-1">
                      <h3 className="font-medium text-sm mb-1">{insight.title}</h3>
                      <p className="text-xs text-gray-600 dark:text-gray-300">{insight.description}</p>
                    </div>
                    <StatusBadge status={insight.impact === "high" ? "excellent" : "good"} className="ml-2 text-xs">
                      {insight.impact}
                    </StatusBadge>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </AnimatedCard>

        {/* Weekly Trends */}
        <AnimatedCard delay={300}>
          <div className="p-6">
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-lg font-semibold">Weekly Trends</h2>
              <Button variant="ghost" size="sm" className="h-8">
                <BarChart3 className="h-4 w-4 mr-1" />
                View Chart
              </Button>
            </div>

            <div className="grid grid-cols-2 gap-4">
              {Object.entries(weeklyTrends).map(([key, data]) => (
                <div key={key} className="space-y-2">
                  <div className="flex items-center justify-between text-sm">
                    <span className="capitalize font-medium flex items-center">
                      {key === "water" && <Droplets className="h-4 w-4 mr-1 text-blue-500" />}
                      {key === "sleep" && <Moon className="h-4 w-4 mr-1 text-purple-500" />}
                      {key === "steps" && <Activity className="h-4 w-4 mr-1 text-green-500" />}
                      {key === "calories" && <Flame className="h-4 w-4 mr-1 text-orange-500" />}
                      {!["water", "sleep", "steps", "calories"].includes(key) && (
                        <div className="w-2 h-2 rounded-full bg-gray-400 mr-2"></div>
                      )}
                      {key}
                    </span>
                    <div className="flex items-center">
                      <span className={`text-xs font-medium ${data.change > 0 ? "text-green-600" : "text-red-600"}`}>
                        {data.change > 0 ? "+" : ""}
                        {data.change.toFixed(1)}%
                      </span>
                      {data.change > 0 ? (
                        <ChevronUp className="h-3 w-3 text-green-600 ml-1" />
                      ) : (
                        <ChevronDown className="h-3 w-3 text-red-600 ml-1" />
                      )}
                    </div>
                  </div>
                  <Progress
                    value={Math.min((data.current / data.target) * 100, 100)}
                    className="h-2"
                    indicatorClassName={`${
                      key === "water"
                        ? "bg-blue-500"
                        : key === "sleep"
                          ? "bg-purple-500"
                          : key === "steps"
                            ? "bg-green-500"
                            : key === "calories"
                              ? "bg-orange-500"
                              : "bg-gray-500"
                    }`}
                  />
                  <div className="flex justify-between text-xs text-gray-500">
                    <span>
                      {data.current}
                      {key === "water"
                        ? "L"
                        : key === "sleep"
                          ? "h"
                          : key === "steps"
                            ? ""
                            : key === "calories"
                              ? ""
                              : "g"}
                    </span>
                    <span>
                      {data.target}
                      {key === "water"
                        ? "L"
                        : key === "sleep"
                          ? "h"
                          : key === "steps"
                            ? ""
                            : key === "calories"
                              ? ""
                              : "g"}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </AnimatedCard>

        {/* Body Systems Analysis */}
        <AnimatedCard delay={400}>
          <div className="p-6">
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-lg font-semibold">Body Systems Analysis</h2>
              <Button variant="ghost" size="sm" className="h-8">
                <PieChart className="h-4 w-4 mr-1" />
                Full Report
              </Button>
            </div>

            <div className="space-y-4">
              {bodySystemsData.map((system) => (
                <div key={system.id} className="border border-gray-200 dark:border-gray-700 rounded-lg">
                  <button
                    className="w-full p-4 flex items-center justify-between hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors"
                    onClick={() => toggleSection(system.id)}
                  >
                    <div className="flex items-center">
                      <div
                        className={`w-10 h-10 rounded-lg flex items-center justify-center mr-3 ${
                          system.status === "excellent"
                            ? "bg-green-100 dark:bg-green-900/30"
                            : "bg-blue-100 dark:bg-blue-900/30"
                        }`}
                      >
                        <system.icon
                          className={`h-5 w-5 ${
                            system.status === "excellent"
                              ? "text-green-600 dark:text-green-400"
                              : "text-blue-600 dark:text-blue-400"
                          }`}
                        />
                      </div>
                      <div className="text-left">
                        <h3 className="font-medium text-sm">{system.name}</h3>
                        <div className="flex items-center">
                          <span className="text-xs text-gray-500 mr-2">Score: {system.score}/100</span>
                          <StatusBadge status={system.status} className="text-xs">
                            {system.status}
                          </StatusBadge>
                        </div>
                      </div>
                    </div>
                    <ChevronRight
                      className={`h-4 w-4 text-gray-400 transition-transform ${
                        expandedSection === system.id ? "rotate-90" : ""
                      }`}
                    />
                  </button>

                  {expandedSection === system.id && (
                    <div className="px-4 pb-4 border-t border-gray-200 dark:border-gray-700">
                      <div className="pt-4 space-y-4">
                        <div>
                          <h4 className="font-medium text-sm mb-2">Key Insights</h4>
                          <ul className="space-y-1">
                            {system.insights.map((insight, index) => (
                              <li key={index} className="text-xs text-gray-600 dark:text-gray-300 flex items-start">
                                <div className="w-1 h-1 bg-green-500 rounded-full mt-2 mr-2 flex-shrink-0"></div>
                                {insight}
                              </li>
                            ))}
                          </ul>
                        </div>

                        <div>
                          <h4 className="font-medium text-sm mb-2">Recommendations</h4>
                          <ul className="space-y-1">
                            {system.recommendations.map((rec, index) => (
                              <li key={index} className="text-xs text-gray-600 dark:text-gray-300 flex items-start">
                                <div className="w-1 h-1 bg-blue-500 rounded-full mt-2 mr-2 flex-shrink-0"></div>
                                {rec}
                              </li>
                            ))}
                          </ul>
                        </div>

                        <div className="flex items-center justify-between pt-2">
                          <span className="text-xs text-gray-500">
                            Trend: {system.trend === "improving" ? "📈" : system.trend === "stable" ? "➡️" : "⚠️"}{" "}
                            {system.trend}
                          </span>
                          <Button variant="outline" size="sm" className="h-7 text-xs">
                            View Details
                          </Button>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </AnimatedCard>

        {/* Nutrition Breakdown */}
        <AnimatedCard delay={500}>
          <div className="p-6">
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-lg font-semibold">Nutrition Breakdown</h2>
              <Button variant="ghost" size="sm" className="h-8">
                <LineChart className="h-4 w-4 mr-1" />
                Trends
              </Button>
            </div>

            <div className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div className="text-center p-4 bg-gradient-to-br from-green-50 to-emerald-50 dark:from-green-900/20 dark:to-emerald-900/20 rounded-lg">
                  <Apple className="h-6 w-6 text-green-600 mx-auto mb-2" />
                  <p className="text-xs text-gray-600 dark:text-gray-300">Avg Daily Calories</p>
                  <p className="text-2xl font-bold text-green-600">1,850</p>
                </div>
                <div className="text-center p-4 bg-gradient-to-br from-blue-50 to-cyan-50 dark:from-blue-900/20 dark:to-cyan-900/20 rounded-lg">
                  <Scale className="h-6 w-6 text-blue-600 mx-auto mb-2" />
                  <p className="text-xs text-gray-600 dark:text-gray-300">Macro Balance</p>
                  <p className="text-2xl font-bold text-blue-600">Optimal</p>
                </div>
              </div>

              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-sm font-medium">Meal Timing</span>
                  <StatusBadge status="excellent">Excellent</StatusBadge>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm font-medium">Nutrient Density</span>
                  <StatusBadge status="good">Good</StatusBadge>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm font-medium">Hydration</span>
                  <StatusBadge status="excellent">Excellent</StatusBadge>
                </div>
              </div>
            </div>
          </div>
        </AnimatedCard>

        {/* Goals & Achievements */}
        <AnimatedCard delay={600}>
          <div className="p-6">
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-lg font-semibold">Goals & Achievements</h2>
              <Button variant="ghost" size="sm" className="h-8">
                <Award className="h-4 w-4 mr-1" />
                All Badges
              </Button>
            </div>

            <div className="space-y-4">
              <div className="flex items-center justify-between p-3 bg-gradient-to-r from-yellow-50 to-orange-50 dark:from-yellow-900/20 dark:to-orange-900/20 rounded-lg">
                <div className="flex items-center">
                  <div className="w-10 h-10 rounded-full bg-yellow-500 flex items-center justify-center mr-3">
                    <Award className="h-5 w-5 text-white" />
                  </div>
                  <div>
                    <p className="font-medium text-sm">Protein Master</p>
                    <p className="text-xs text-gray-600 dark:text-gray-300">7-day protein goal streak</p>
                  </div>
                </div>
                <div className="text-right">
                  <p className="text-xs text-gray-500">Earned today</p>
                </div>
              </div>

              <div className="grid grid-cols-3 gap-3">
                <div className="text-center p-3 bg-gray-50 dark:bg-gray-800 rounded-lg">
                  <Target className="h-5 w-5 text-blue-600 mx-auto mb-1" />
                  <p className="text-xs text-gray-600 dark:text-gray-300">Goals Hit</p>
                  <p className="text-lg font-bold">12/15</p>
                </div>
                <div className="text-center p-3 bg-gray-50 dark:bg-gray-800 rounded-lg">
                  <Zap className="h-5 w-5 text-green-600 mx-auto mb-1" />
                  <p className="text-xs text-gray-600 dark:text-gray-300">Streak</p>
                  <p className="text-lg font-bold">7 days</p>
                </div>
                <div className="text-center p-3 bg-gray-50 dark:bg-gray-800 rounded-lg">
                  <Award className="h-5 w-5 text-yellow-600 mx-auto mb-1" />
                  <p className="text-xs text-gray-600 dark:text-gray-300">Badges</p>
                  <p className="text-lg font-bold">8</p>
                </div>
              </div>
            </div>
          </div>
        </AnimatedCard>
      </div>

      {/* Bottom Navigation */}
      <div className="fixed bottom-0 left-0 right-0 glass-effect border-t border-gray-200 dark:border-gray-700">
        <div className="flex items-center justify-around p-3 max-w-md mx-auto">
          <Link
            href="/dashboard"
            className="flex flex-col items-center text-gray-400 hover:text-gray-600 dark:hover:text-gray-300"
          >
            <Home className="h-5 w-5" />
            <span className="text-xs mt-1">Home</span>
          </Link>
          <Link
            href="/medical-reports"
            className="flex flex-col items-center text-gray-400 hover:text-gray-600 dark:hover:text-gray-300"
          >
            <Search className="h-5 w-5" />
            <span className="text-xs mt-1">Reports</span>
          </Link>
          <Link
            href="/add-meal"
            className="flex flex-col items-center text-gray-400 hover:text-gray-600 dark:hover:text-gray-300"
          >
            <div className="w-12 h-12 rounded-full bg-gray-200 dark:bg-gray-700 flex items-center justify-center">
              <Camera className="h-6 w-6" />
            </div>
            <span className="text-xs mt-1">Scan</span>
          </Link>
          <div className="flex flex-col items-center">
            <div className="w-12 h-12 rounded-full gradient-primary flex items-center justify-center shadow-lg">
              <TrendingUp className="h-6 w-6 text-white" />
            </div>
            <span className="text-xs mt-1 text-green-600 font-medium">Insights</span>
          </div>
          <Link
            href="/profile"
            className="flex flex-col items-center text-gray-400 hover:text-gray-600 dark:hover:text-gray-300"
          >
            <User className="h-5 w-5" />
            <span className="text-xs mt-1">Profile</span>
          </Link>
        </div>
      </div>
    </div>
  )
}
