"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Switch } from "@/components/ui/switch"
import { AnimatedCard } from "@/components/ui/animated-card"
import { GradientText } from "@/components/ui/gradient-text"
import { ChevronLeft, Lock, Shield, Eye, EyeOff, Download, Trash2, FileText, Share2, CloudOff } from "lucide-react"

export default function PrivacySettingsPage() {
  const [privacySettings, setPrivacySettings] = useState({
    dataCollection: true,
    locationTracking: false,
    healthDataSharing: false,
    analytics: true,
    advertising: false,
    thirdPartySharing: false,
  })

  const updateSetting = (key: keyof typeof privacySettings) => {
    setPrivacySettings({
      ...privacySettings,
      [key]: !privacySettings[key],
    })
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 via-white to-blue-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900">
      {/* Header */}
      <div className="glass-effect sticky top-0 z-40 p-4">
        <div className="flex items-center justify-between">
          <Link href="/settings" className="flex items-center">
            <ChevronLeft className="h-5 w-5 mr-1" />
            <span>Back</span>
          </Link>
          <h1 className="text-lg font-semibold">Privacy Settings</h1>
          <div className="w-10"></div>
        </div>
      </div>

      <div className="p-4 space-y-6 pb-24">
        <AnimatedCard>
          <div className="p-6">
            <h2 className="text-lg font-semibold mb-4">
              <GradientText>Data Privacy</GradientText>
            </h2>
            <p className="text-sm text-gray-600 dark:text-gray-300 mb-6">
              Control how your data is collected and used within the app.
            </p>

            <div className="space-y-6">
              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  <div className="w-10 h-10 rounded-full bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center mr-3">
                    <Shield className="h-5 w-5 text-blue-600 dark:text-blue-400" />
                  </div>
                  <div>
                    <p className="text-sm font-medium">Data Collection</p>
                    <p className="text-xs text-gray-500">Allow app to collect usage data</p>
                  </div>
                </div>
                <Switch
                  checked={privacySettings.dataCollection}
                  onCheckedChange={() => updateSetting("dataCollection")}
                />
              </div>

              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  <div className="w-10 h-10 rounded-full bg-red-100 dark:bg-red-900/30 flex items-center justify-center mr-3">
                    <Eye className="h-5 w-5 text-red-600 dark:text-red-400" />
                  </div>
                  <div>
                    <p className="text-sm font-medium">Location Tracking</p>
                    <p className="text-xs text-gray-500">Allow app to access your location</p>
                  </div>
                </div>
                <Switch
                  checked={privacySettings.locationTracking}
                  onCheckedChange={() => updateSetting("locationTracking")}
                />
              </div>

              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  <div className="w-10 h-10 rounded-full bg-green-100 dark:bg-green-900/30 flex items-center justify-center mr-3">
                    <Share2 className="h-5 w-5 text-green-600 dark:text-green-400" />
                  </div>
                  <div>
                    <p className="text-sm font-medium">Health Data Sharing</p>
                    <p className="text-xs text-gray-500">Share health data with healthcare providers</p>
                  </div>
                </div>
                <Switch
                  checked={privacySettings.healthDataSharing}
                  onCheckedChange={() => updateSetting("healthDataSharing")}
                />
              </div>
            </div>
          </div>
        </AnimatedCard>

        <AnimatedCard delay={100}>
          <div className="p-6">
            <h2 className="text-lg font-semibold mb-4">
              <GradientText>Marketing & Analytics</GradientText>
            </h2>

            <div className="space-y-6">
              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  <div className="w-10 h-10 rounded-full bg-purple-100 dark:bg-purple-900/30 flex items-center justify-center mr-3">
                    <FileText className="h-5 w-5 text-purple-600 dark:text-purple-400" />
                  </div>
                  <div>
                    <p className="text-sm font-medium">Analytics</p>
                    <p className="text-xs text-gray-500">Allow anonymous usage analytics</p>
                  </div>
                </div>
                <Switch checked={privacySettings.analytics} onCheckedChange={() => updateSetting("analytics")} />
              </div>

              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  <div className="w-10 h-10 rounded-full bg-amber-100 dark:bg-amber-900/30 flex items-center justify-center mr-3">
                    <EyeOff className="h-5 w-5 text-amber-600 dark:text-amber-400" />
                  </div>
                  <div>
                    <p className="text-sm font-medium">Personalized Advertising</p>
                    <p className="text-xs text-gray-500">Allow personalized ads based on your data</p>
                  </div>
                </div>
                <Switch checked={privacySettings.advertising} onCheckedChange={() => updateSetting("advertising")} />
              </div>

              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  <div className="w-10 h-10 rounded-full bg-cyan-100 dark:bg-cyan-900/30 flex items-center justify-center mr-3">
                    <CloudOff className="h-5 w-5 text-cyan-600 dark:text-cyan-400" />
                  </div>
                  <div>
                    <p className="text-sm font-medium">Third-Party Data Sharing</p>
                    <p className="text-xs text-gray-500">Share data with third-party services</p>
                  </div>
                </div>
                <Switch
                  checked={privacySettings.thirdPartySharing}
                  onCheckedChange={() => updateSetting("thirdPartySharing")}
                />
              </div>
            </div>
          </div>
        </AnimatedCard>

        <AnimatedCard delay={200}>
          <div className="p-6">
            <h2 className="text-lg font-semibold mb-4">
              <GradientText>Your Data</GradientText>
            </h2>

            <div className="space-y-4">
              <Button variant="outline" className="w-full flex items-center justify-center">
                <Download className="h-4 w-4 mr-2" />
                Download Your Data
              </Button>

              <Button
                variant="outline"
                className="w-full flex items-center justify-center text-red-500 border-red-200 hover:bg-red-50 hover:text-red-600 dark:border-red-900/50 dark:hover:bg-red-900/20"
              >
                <Trash2 className="h-4 w-4 mr-2" />
                Delete All Your Data
              </Button>
            </div>
          </div>
        </AnimatedCard>

        <AnimatedCard delay={300}>
          <div className="p-6">
            <h2 className="text-lg font-semibold mb-4">
              <GradientText>Security</GradientText>
            </h2>

            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  <div className="w-10 h-10 rounded-full bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center mr-3">
                    <Lock className="h-5 w-5 text-blue-600 dark:text-blue-400" />
                  </div>
                  <div>
                    <p className="text-sm font-medium">Change Password</p>
                    <p className="text-xs text-gray-500">Update your account password</p>
                  </div>
                </div>
                <Button variant="ghost" size="sm">
                  Change
                </Button>
              </div>

              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  <div className="w-10 h-10 rounded-full bg-green-100 dark:bg-green-900/30 flex items-center justify-center mr-3">
                    <Shield className="h-5 w-5 text-green-600 dark:text-green-400" />
                  </div>
                  <div>
                    <p className="text-sm font-medium">Two-Factor Authentication</p>
                    <p className="text-xs text-gray-500">Add an extra layer of security</p>
                  </div>
                </div>
                <Switch />
              </div>
            </div>
          </div>
        </AnimatedCard>

        <Button className="w-full gradient-primary">Save Privacy Settings</Button>
      </div>
    </div>
  )
}
