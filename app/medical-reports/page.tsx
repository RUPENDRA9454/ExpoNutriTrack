"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { AnimatedCard } from "@/components/ui/animated-card"
import { GradientText } from "@/components/ui/gradient-text"
import { StatusBadge } from "@/components/ui/status-badge"
import { Progress } from "@/components/ui/progress"
import {
  ChevronLeft,
  Calendar,
  Lock,
  FileText,
  FilePlus,
  Trash2,
  Download,
  Share2,
  Search,
  Home,
  Camera,
  TrendingUp,
  User,
  AlertCircle,
  CheckCircle,
  FileBarChart,
  Heart,
} from "lucide-react"

export default function MedicalReportsPage() {
  const [activeTab, setActiveTab] = useState<"reports" | "metrics" | "history">("reports")
  const [isUploading, setIsUploading] = useState(false)

  const handleUpload = () => {
    setIsUploading(true)
    // Simulate upload process
    setTimeout(() => {
      setIsUploading(false)
    }, 2000)
  }

  const reports = [
    {
      id: 1,
      name: "Blood Test Results",
      date: "May 15, 2023",
      type: "PDF",
      size: "1.2 MB",
      status: "normal",
    },
    {
      id: 2,
      name: "Cholesterol Screening",
      date: "Jan 10, 2023",
      type: "PDF",
      size: "0.8 MB",
      status: "attention",
    },
    {
      id: 3,
      name: "Annual Physical",
      date: "Dec 5, 2022",
      type: "PDF",
      size: "2.4 MB",
      status: "normal",
    },
  ]

  const healthMetrics = [
    {
      name: "Blood Pressure",
      value: "120/80",
      unit: "mmHg",
      status: "normal",
      trend: "stable",
      history: [
        { date: "Jan", value: 122 },
        { date: "Feb", value: 125 },
        { date: "Mar", value: 121 },
        { date: "Apr", value: 118 },
        { date: "May", value: 120 },
      ],
    },
    {
      name: "Cholesterol",
      value: "195",
      unit: "mg/dL",
      status: "normal",
      trend: "improving",
      history: [
        { date: "Jan", value: 210 },
        { date: "Feb", value: 205 },
        { date: "Mar", value: 200 },
        { date: "Apr", value: 198 },
        { date: "May", value: 195 },
      ],
    },
    {
      name: "Blood Glucose",
      value: "105",
      unit: "mg/dL",
      status: "attention",
      trend: "worsening",
      history: [
        { date: "Jan", value: 95 },
        { date: "Feb", value: 98 },
        { date: "Mar", value: 100 },
        { date: "Apr", value: 102 },
        { date: "May", value: 105 },
      ],
    },
    {
      name: "HbA1c",
      value: "5.6",
      unit: "%",
      status: "normal",
      trend: "stable",
      history: [
        { date: "Jan", value: 5.7 },
        { date: "Feb", value: 5.7 },
        { date: "Mar", value: 5.6 },
        { date: "Apr", value: 5.6 },
        { date: "May", value: 5.6 },
      ],
    },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 via-white to-blue-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900">
      {/* Header */}
      <div className="glass-effect sticky top-0 z-40 p-4">
        <div className="flex items-center justify-between">
          <Link href="/dashboard" className="flex items-center">
            <ChevronLeft className="h-5 w-5 mr-1" />
            <span>Dashboard</span>
          </Link>
          <h1 className="text-lg font-semibold">Medical Reports</h1>
          <div className="w-10"></div>
        </div>
      </div>

      <div className="p-4 space-y-6 pb-24">
        {/* Tab Navigation */}
        <div className="flex rounded-lg overflow-hidden border border-gray-200 dark:border-gray-700">
          <button
            className={`flex-1 py-3 text-center text-sm font-medium ${
              activeTab === "reports"
                ? "bg-blue-500 text-white"
                : "bg-white dark:bg-gray-800 text-gray-600 dark:text-gray-300"
            }`}
            onClick={() => setActiveTab("reports")}
          >
            Reports
          </button>
          <button
            className={`flex-1 py-3 text-center text-sm font-medium ${
              activeTab === "metrics"
                ? "bg-blue-500 text-white"
                : "bg-white dark:bg-gray-800 text-gray-600 dark:text-gray-300"
            }`}
            onClick={() => setActiveTab("metrics")}
          >
            Health Metrics
          </button>
          <button
            className={`flex-1 py-3 text-center text-sm font-medium ${
              activeTab === "history"
                ? "bg-blue-500 text-white"
                : "bg-white dark:bg-gray-800 text-gray-600 dark:text-gray-300"
            }`}
            onClick={() => setActiveTab("history")}
          >
            History
          </button>
        </div>

        {activeTab === "reports" && (
          <>
            {/* Upload Section */}
            <AnimatedCard>
              <div className="p-6 space-y-4">
                <h2 className="text-lg font-semibold">
                  <GradientText>Upload Reports</GradientText>
                </h2>
                <p className="text-sm text-gray-600 dark:text-gray-300">
                  Upload your medical reports in PDF or image format. Your data is encrypted and securely stored.
                </p>

                <div
                  className="border-2 border-dashed rounded-lg p-8 flex flex-col items-center justify-center text-center cursor-pointer hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors"
                  onClick={handleUpload}
                >
                  {isUploading ? (
                    <div className="flex flex-col items-center">
                      <div className="w-12 h-12 rounded-full border-4 border-blue-200 border-t-blue-500 animate-spin mb-4"></div>
                      <p className="text-gray-600 dark:text-gray-300 mb-1">Uploading your report...</p>
                      <p className="text-xs text-gray-500">Please wait</p>
                    </div>
                  ) : (
                    <>
                      <Lock className="h-8 w-8 text-gray-400 mb-4" />
                      <p className="text-gray-600 dark:text-gray-300 mb-1">Tap to upload your report</p>
                      <p className="text-xs text-gray-500">PDF or image (max 10MB)</p>
                    </>
                  )}
                </div>

                <div className="flex items-center text-xs text-gray-500">
                  <Lock className="h-3 w-3 mr-1" />
                  <span>Your data is encrypted and secure</span>
                </div>
              </div>
            </AnimatedCard>

            {/* Recent Reports */}
            <AnimatedCard delay={200}>
              <div className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <h2 className="text-lg font-semibold">Recent Reports</h2>
                  <Button variant="outline" size="sm" className="h-8">
                    <FilePlus className="h-4 w-4 mr-1" />
                    Add
                  </Button>
                </div>

                <div className="space-y-3">
                  {reports.map((report) => (
                    <div
                      key={report.id}
                      className="flex items-center justify-between p-3 bg-white dark:bg-gray-800 rounded-lg shadow-sm hover:shadow-md transition-shadow"
                    >
                      <div className="flex items-center">
                        <div
                          className={`w-10 h-10 rounded-lg flex items-center justify-center mr-3 ${
                            report.status === "normal"
                              ? "bg-green-100 dark:bg-green-900/30"
                              : "bg-amber-100 dark:bg-amber-900/30"
                          }`}
                        >
                          <FileText
                            className={`h-5 w-5 ${
                              report.status === "normal"
                                ? "text-green-600 dark:text-green-400"
                                : "text-amber-600 dark:text-amber-400"
                            }`}
                          />
                        </div>
                        <div>
                          <p className="font-medium text-sm">{report.name}</p>
                          <div className="flex items-center text-xs text-gray-500">
                            <Calendar className="h-3 w-3 mr-1" />
                            <span>{report.date}</span>
                            <span className="mx-1">•</span>
                            <span>{report.type}</span>
                            <span className="mx-1">•</span>
                            <span>{report.size}</span>
                          </div>
                        </div>
                      </div>
                      <div className="flex space-x-1">
                        <Button variant="ghost" size="icon" className="h-8 w-8">
                          <Download className="h-4 w-4" />
                        </Button>
                        <Button variant="ghost" size="icon" className="h-8 w-8">
                          <Share2 className="h-4 w-4" />
                        </Button>
                        <Button variant="ghost" size="icon" className="h-8 w-8 text-red-500">
                          <Trash2 className="h-4 w-4" />
                        </Button>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </AnimatedCard>

            {/* Enter Lab Values */}
            <AnimatedCard delay={300}>
              <div className="p-6 space-y-4">
                <h2 className="text-lg font-semibold">Enter Lab Values</h2>

                <div className="space-y-2">
                  <Label htmlFor="hba1c">HbA1c (%)</Label>
                  <Input id="hba1c" placeholder="e.g., 5.7" className="h-12" />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="cholesterol">Cholesterol (mg/dL)</Label>
                  <Input id="cholesterol" placeholder="e.g., 200" className="h-12" />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="blood-pressure">Blood Pressure (mmHg)</Label>
                  <Input id="blood-pressure" placeholder="e.g., 120/80" className="h-12" />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="test-date">Date of Test</Label>
                  <div className="relative">
                    <Input id="test-date" type="date" placeholder="Select date" className="h-12" />
                    <Calendar className="absolute right-3 top-3 h-4 w-4 text-gray-400 pointer-events-none" />
                  </div>
                </div>

                <Button className="w-full bg-blue-500 hover:bg-blue-600">Save Values</Button>
              </div>
            </AnimatedCard>
          </>
        )}

        {activeTab === "metrics" && (
          <>
            {/* Health Metrics Overview */}
            <AnimatedCard>
              <div className="p-6">
                <h2 className="text-lg font-semibold mb-4">
                  <GradientText>Health Metrics</GradientText>
                </h2>

                <div className="grid grid-cols-2 gap-4 mb-6">
                  <div className="text-center p-4 bg-gradient-to-br from-green-50 to-emerald-50 dark:from-green-900/20 dark:to-emerald-900/20 rounded-lg">
                    <Heart className="h-6 w-6 text-green-600 mx-auto mb-2" />
                    <p className="text-xs text-gray-600 dark:text-gray-300">Overall Health</p>
                    <p className="text-2xl font-bold text-green-600">Good</p>
                  </div>
                  <div className="text-center p-4 bg-gradient-to-br from-blue-50 to-cyan-50 dark:from-blue-900/20 dark:to-cyan-900/20 rounded-lg">
                    <FileBarChart className="h-6 w-6 text-blue-600 mx-auto mb-2" />
                    <p className="text-xs text-gray-600 dark:text-gray-300">Last Updated</p>
                    <p className="text-lg font-bold text-blue-600">May 15, 2023</p>
                  </div>
                </div>

                <div className="space-y-6">
                  {healthMetrics.map((metric, index) => (
                    <div key={index} className="space-y-2">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center">
                          <h3 className="font-medium">{metric.name}</h3>
                          {metric.status === "attention" && <AlertCircle className="h-4 w-4 text-amber-500 ml-2" />}
                          {metric.status === "normal" && <CheckCircle className="h-4 w-4 text-green-500 ml-2" />}
                        </div>
                        <div className="flex items-center">
                          <span className="font-bold text-lg">
                            {metric.value}
                            <span className="text-sm font-normal text-gray-500 ml-1">{metric.unit}</span>
                          </span>
                        </div>
                      </div>

                      <div className="h-10 bg-gray-100 dark:bg-gray-800 rounded-md overflow-hidden flex items-end">
                        {metric.history.map((point, i) => {
                          // Calculate height based on value (simplified)
                          const height = Math.max(20, Math.min(100, (point.value / 250) * 100))
                          return (
                            <div key={i} className="flex-1 flex flex-col items-center justify-end h-full">
                              <div
                                className={`w-4/5 ${
                                  metric.status === "normal"
                                    ? "bg-green-500"
                                    : metric.status === "attention"
                                      ? "bg-amber-500"
                                      : "bg-red-500"
                                }`}
                                style={{ height: `${height}%` }}
                              ></div>
                              <span className="text-xs mt-1">{point.date}</span>
                            </div>
                          )
                        })}
                      </div>

                      <div className="flex items-center justify-between text-xs text-gray-500">
                        <span>
                          Status:{" "}
                          <span
                            className={
                              metric.status === "normal"
                                ? "text-green-600"
                                : metric.status === "attention"
                                  ? "text-amber-600"
                                  : "text-red-600"
                            }
                          >
                            {metric.status.charAt(0).toUpperCase() + metric.status.slice(1)}
                          </span>
                        </span>
                        <span>
                          Trend:{" "}
                          <span
                            className={
                              metric.trend === "improving"
                                ? "text-green-600"
                                : metric.trend === "stable"
                                  ? "text-blue-600"
                                  : "text-red-600"
                            }
                          >
                            {metric.trend.charAt(0).toUpperCase() + metric.trend.slice(1)}
                          </span>
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </AnimatedCard>

            {/* Health Recommendations */}
            <AnimatedCard delay={200}>
              <div className="p-6">
                <h2 className="text-lg font-semibold mb-4">Recommendations</h2>

                <div className="space-y-3">
                  <div className="p-4 bg-green-50 dark:bg-green-900/20 rounded-lg">
                    <div className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-green-600 mr-3 mt-0.5 flex-shrink-0" />
                      <div>
                        <p className="font-medium text-sm">Blood pressure is within healthy range</p>
                        <p className="text-xs text-gray-600 dark:text-gray-300 mt-1">
                          Continue with your current diet and exercise routine
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="p-4 bg-amber-50 dark:bg-amber-900/20 rounded-lg">
                    <div className="flex items-start">
                      <AlertCircle className="h-5 w-5 text-amber-600 mr-3 mt-0.5 flex-shrink-0" />
                      <div>
                        <p className="font-medium text-sm">Blood glucose is slightly elevated</p>
                        <p className="text-xs text-gray-600 dark:text-gray-300 mt-1">
                          Consider reducing refined carbohydrate intake and increasing physical activity
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="p-4 bg-blue-50 dark:bg-blue-900/20 rounded-lg">
                    <div className="flex items-start">
                      <FileText className="h-5 w-5 text-blue-600 mr-3 mt-0.5 flex-shrink-0" />
                      <div>
                        <p className="font-medium text-sm">Next check-up recommended</p>
                        <p className="text-xs text-gray-600 dark:text-gray-300 mt-1">
                          Schedule your next comprehensive blood work in 3 months
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </AnimatedCard>
          </>
        )}

        {activeTab === "history" && (
          <>
            {/* Health History Timeline */}
            <AnimatedCard>
              <div className="p-6">
                <h2 className="text-lg font-semibold mb-4">
                  <GradientText>Health Timeline</GradientText>
                </h2>

                <div className="relative pl-8 space-y-8 before:absolute before:left-4 before:top-2 before:h-full before:w-0.5 before:bg-gray-200 dark:before:bg-gray-700">
                  <div className="relative">
                    <div className="absolute -left-8 top-0 w-6 h-6 rounded-full bg-green-500 flex items-center justify-center">
                      <div className="w-3 h-3 bg-white rounded-full"></div>
                    </div>
                    <div className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow-sm">
                      <div className="flex items-center justify-between mb-2">
                        <h3 className="font-medium">Annual Physical Exam</h3>
                        <StatusBadge status="excellent">Normal</StatusBadge>
                      </div>
                      <p className="text-sm text-gray-600 dark:text-gray-300 mb-2">
                        All metrics within normal ranges. Doctor recommended maintaining current lifestyle.
                      </p>
                      <div className="flex items-center text-xs text-gray-500">
                        <Calendar className="h-3 w-3 mr-1" />
                        <span>May 15, 2023</span>
                      </div>
                    </div>
                  </div>

                  <div className="relative">
                    <div className="absolute -left-8 top-0 w-6 h-6 rounded-full bg-amber-500 flex items-center justify-center">
                      <div className="w-3 h-3 bg-white rounded-full"></div>
                    </div>
                    <div className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow-sm">
                      <div className="flex items-center justify-between mb-2">
                        <h3 className="font-medium">Cholesterol Screening</h3>
                        <StatusBadge status="needs-improvement">Elevated</StatusBadge>
                      </div>
                      <p className="text-sm text-gray-600 dark:text-gray-300 mb-2">
                        LDL slightly elevated. Recommended dietary changes and follow-up in 3 months.
                      </p>
                      <div className="flex items-center text-xs text-gray-500">
                        <Calendar className="h-3 w-3 mr-1" />
                        <span>Jan 10, 2023</span>
                      </div>
                    </div>
                  </div>

                  <div className="relative">
                    <div className="absolute -left-8 top-0 w-6 h-6 rounded-full bg-blue-500 flex items-center justify-center">
                      <div className="w-3 h-3 bg-white rounded-full"></div>
                    </div>
                    <div className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow-sm">
                      <div className="flex items-center justify-between mb-2">
                        <h3 className="font-medium">Blood Glucose Test</h3>
                        <StatusBadge status="good">Normal</StatusBadge>
                      </div>
                      <p className="text-sm text-gray-600 dark:text-gray-300 mb-2">
                        Fasting blood glucose within normal range. Continue monitoring.
                      </p>
                      <div className="flex items-center text-xs text-gray-500">
                        <Calendar className="h-3 w-3 mr-1" />
                        <span>Dec 5, 2022</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </AnimatedCard>

            {/* Health Trends */}
            <AnimatedCard delay={200}>
              <div className="p-6">
                <h2 className="text-lg font-semibold mb-4">Health Trends</h2>

                <div className="space-y-4">
                  <div className="space-y-2">
                    <div className="flex items-center justify-between text-sm">
                      <span className="font-medium">Weight</span>
                      <span className="text-green-600">-2.5 kg in 6 months</span>
                    </div>
                    <Progress value={70} className="h-2" indicatorClassName="bg-green-500" />
                  </div>

                  <div className="space-y-2">
                    <div className="flex items-center justify-between text-sm">
                      <span className="font-medium">Blood Pressure</span>
                      <span className="text-blue-600">Stable</span>
                    </div>
                    <Progress value={90} className="h-2" indicatorClassName="bg-blue-500" />
                  </div>

                  <div className="space-y-2">
                    <div className="flex items-center justify-between text-sm">
                      <span className="font-medium">Cholesterol</span>
                      <span className="text-amber-600">-5% in 3 months</span>
                    </div>
                    <Progress value={60} className="h-2" indicatorClassName="bg-amber-500" />
                  </div>
                </div>
              </div>
            </AnimatedCard>
          </>
        )}

        {/* Connect Health Services */}
        <AnimatedCard delay={400}>
          <div className="p-6 space-y-4">
            <h2 className="text-lg font-semibold">Connect Health Services</h2>
            <p className="text-sm text-gray-600 dark:text-gray-300">
              Sync data from your health tracking services or hospital portals.
            </p>

            <div className="grid grid-cols-2 gap-3">
              <Button variant="outline" className="flex flex-col h-auto py-4 justify-center items-center">
                <Image
                  src="/placeholder.svg?height=24&width=24"
                  alt="Apple Health"
                  width={24}
                  height={24}
                  className="mb-2"
                />
                <span className="text-sm">Apple Health</span>
              </Button>
              <Button variant="outline" className="flex flex-col h-auto py-4 justify-center items-center">
                <Image
                  src="/placeholder.svg?height=24&width=24"
                  alt="Google Fit"
                  width={24}
                  height={24}
                  className="mb-2"
                />
                <span className="text-sm">Google Fit</span>
              </Button>
              <Button variant="outline" className="flex flex-col h-auto py-4 justify-center items-center" disabled>
                <Image
                  src="/placeholder.svg?height=24&width=24"
                  alt="Epic MyChart"
                  width={24}
                  height={24}
                  className="mb-2 opacity-50"
                />
                <span className="text-sm">Epic MyChart</span>
              </Button>
              <Button variant="outline" className="flex flex-col h-auto py-4 justify-center items-center" disabled>
                <Image
                  src="/placeholder.svg?height=24&width=24"
                  alt="Fitbit"
                  width={24}
                  height={24}
                  className="mb-2 opacity-50"
                />
                <span className="text-sm">Fitbit</span>
              </Button>
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
          <div className="flex flex-col items-center">
            <div className="w-12 h-12 rounded-full gradient-primary flex items-center justify-center shadow-lg">
              <Search className="h-6 w-6 text-white" />
            </div>
            <span className="text-xs mt-1 text-green-600 font-medium">Reports</span>
          </div>
          <Link
            href="/add-meal"
            className="flex flex-col items-center text-gray-400 hover:text-gray-600 dark:hover:text-gray-300"
          >
            <div className="w-12 h-12 rounded-full bg-gray-200 dark:bg-gray-700 flex items-center justify-center">
              <Camera className="h-6 w-6" />
            </div>
            <span className="text-xs mt-1">Scan</span>
          </Link>
          <Link
            href="/insights"
            className="flex flex-col items-center text-gray-400 hover:text-gray-600 dark:hover:text-gray-300"
          >
            <TrendingUp className="h-5 w-5" />
            <span className="text-xs mt-1">Insights</span>
          </Link>
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
