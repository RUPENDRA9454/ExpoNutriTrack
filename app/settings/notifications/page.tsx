"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Switch } from "@/components/ui/switch"
import { AnimatedCard } from "@/components/ui/animated-card"
import { GradientText } from "@/components/ui/gradient-text"
import { ChevronLeft, Bell, Calendar, Utensils, Activity, Award, MessageSquare, Heart, Zap } from "lucide-react"

export default function NotificationSettingsPage() {
  const [notificationSettings, setNotificationSettings] = useState({
    mealReminders: true,
    waterReminders: true,
    activityReminders: true,
    weeklyReports: true,
    achievements: true,
    tips: false,
    healthAlerts: true,
    updates: false,
  })

  const updateSetting = (key: keyof typeof notificationSettings) => {
    setNotificationSettings({
      ...notificationSettings,
      [key]: !notificationSettings[key],
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
          <h1 className="text-lg font-semibold">Notification Settings</h1>
          <div className="w-10"></div>
        </div>
      </div>

      <div className="p-4 space-y-6 pb-24">
        <AnimatedCard>
          <div className="p-6">
            <h2 className="text-lg font-semibold mb-4">
              <GradientText>Notification Preferences</GradientText>
            </h2>
            <p className="text-sm text-gray-600 dark:text-gray-300 mb-6">
              Choose which notifications you want to receive. You can change these settings at any time.
            </p>

            <div className="space-y-6">
              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  <div className="w-10 h-10 rounded-full bg-green-100 dark:bg-green-900/30 flex items-center justify-center mr-3">
                    <Utensils className="h-5 w-5 text-green-600 dark:text-green-400" />
                  </div>
                  <div>
                    <p className="text-sm font-medium">Meal Reminders</p>
                    <p className="text-xs text-gray-500">Reminders to log your meals</p>
                  </div>
                </div>
                <Switch
                  checked={notificationSettings.mealReminders}
                  onCheckedChange={() => updateSetting("mealReminders")}
                />
              </div>

              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  <div className="w-10 h-10 rounded-full bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center mr-3">
                    <Bell className="h-5 w-5 text-blue-600 dark:text-blue-400" />
                  </div>
                  <div>
                    <p className="text-sm font-medium">Water Reminders</p>
                    <p className="text-xs text-gray-500">Reminders to stay hydrated</p>
                  </div>
                </div>
                <Switch
                  checked={notificationSettings.waterReminders}
                  onCheckedChange={() => updateSetting("waterReminders")}
                />
              </div>

              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  <div className="w-10 h-10 rounded-full bg-purple-100 dark:bg-purple-900/30 flex items-center justify-center mr-3">
                    <Activity className="h-5 w-5 text-purple-600 dark:text-purple-400" />
                  </div>
                  <div>
                    <p className="text-sm font-medium">Activity Reminders</p>
                    <p className="text-xs text-gray-500">Reminders to move and exercise</p>
                  </div>
                </div>
                <Switch
                  checked={notificationSettings.activityReminders}
                  onCheckedChange={() => updateSetting("activityReminders")}
                />
              </div>

              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  <div className="w-10 h-10 rounded-full bg-amber-100 dark:bg-amber-900/30 flex items-center justify-center mr-3">
                    <Calendar className="h-5 w-5 text-amber-600 dark:text-amber-400" />
                  </div>
                  <div>
                    <p className="text-sm font-medium">Weekly Reports</p>
                    <p className="text-xs text-gray-500">Weekly summary of your progress</p>
                  </div>
                </div>
                <Switch
                  checked={notificationSettings.weeklyReports}
                  onCheckedChange={() => updateSetting("weeklyReports")}
                />
              </div>

              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  <div className="w-10 h-10 rounded-full bg-yellow-100 dark:bg-yellow-900/30 flex items-center justify-center mr-3">
                    <Award className="h-5 w-5 text-yellow-600 dark:text-yellow-400" />
                  </div>
                  <div>
                    <p className="text-sm font-medium">Achievements</p>
                    <p className="text-xs text-gray-500">Notifications when you earn badges</p>
                  </div>
                </div>
                <Switch
                  checked={notificationSettings.achievements}
                  onCheckedChange={() => updateSetting("achievements")}
                />
              </div>

              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  <div className="w-10 h-10 rounded-full bg-cyan-100 dark:bg-cyan-900/30 flex items-center justify-center mr-3">
                    <MessageSquare className="h-5 w-5 text-cyan-600 dark:text-cyan-400" />
                  </div>
                  <div>
                    <p className="text-sm font-medium">Tips & Advice</p>
                    <p className="text-xs text-gray-500">Helpful nutrition and health tips</p>
                  </div>
                </div>
                <Switch checked={notificationSettings.tips} onCheckedChange={() => updateSetting("tips")} />
              </div>

              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  <div className="w-10 h-10 rounded-full bg-red-100 dark:bg-red-900/30 flex items-center justify-center mr-3">
                    <Heart className="h-5 w-5 text-red-600 dark:text-red-400" />
                  </div>
                  <div>
                    <p className="text-sm font-medium">Health Alerts</p>
                    <p className="text-xs text-gray-500">Important alerts about your health</p>
                  </div>
                </div>
                <Switch
                  checked={notificationSettings.healthAlerts}
                  onCheckedChange={() => updateSetting("healthAlerts")}
                />
              </div>

              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  <div className="w-10 h-10 rounded-full bg-indigo-100 dark:bg-indigo-900/30 flex items-center justify-center mr-3">
                    <Zap className="h-5 w-5 text-indigo-600 dark:text-indigo-400" />
                  </div>
                  <div>
                    <p className="text-sm font-medium">App Updates</p>
                    <p className="text-xs text-gray-500">Notifications about new features</p>
                  </div>
                </div>
                <Switch checked={notificationSettings.updates} onCheckedChange={() => updateSetting("updates")} />
              </div>
            </div>
          </div>
        </AnimatedCard>

        <AnimatedCard delay={100}>
          <div className="p-6">
            <h2 className="text-lg font-semibold mb-4">
              <GradientText>Quiet Hours</GradientText>
            </h2>
            <p className="text-sm text-gray-600 dark:text-gray-300 mb-6">
              Set times when you don't want to receive notifications.
            </p>

            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium">Enable Quiet Hours</p>
                  <p className="text-xs text-gray-500">Pause notifications during set times</p>
                </div>
                <Switch />
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <p className="text-xs text-gray-500 mb-1">Start Time</p>
                  <Button variant="outline" className="w-full justify-start text-left">
                    10:00 PM
                  </Button>
                </div>
                <div>
                  <p className="text-xs text-gray-500 mb-1">End Time</p>
                  <Button variant="outline" className="w-full justify-start text-left">
                    7:00 AM
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </AnimatedCard>

        <Button className="w-full gradient-primary">Save Preferences</Button>
      </div>
    </div>
  )
}
