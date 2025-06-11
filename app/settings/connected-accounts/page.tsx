"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Switch } from "@/components/ui/switch"
import { AnimatedCard } from "@/components/ui/animated-card"
import { GradientText } from "@/components/ui/gradient-text"
import { ChevronLeft, Plus } from "lucide-react"

export default function ConnectedAccountsPage() {
  const [connectedAccounts, setConnectedAccounts] = useState([
    {
      id: 1,
      name: "Apple Health",
      icon: "/placeholder.svg?height=40&width=40",
      connected: true,
      lastSync: "Today, 2:30 PM",
    },
    {
      id: 2,
      name: "Google Fit",
      icon: "/placeholder.svg?height=40&width=40",
      connected: false,
      lastSync: "Never",
    },
    {
      id: 3,
      name: "Fitbit",
      icon: "/placeholder.svg?height=40&width=40",
      connected: false,
      lastSync: "Never",
    },
    {
      id: 4,
      name: "Garmin Connect",
      icon: "/placeholder.svg?height=40&width=40",
      connected: false,
      lastSync: "Never",
    },
  ])

  const toggleConnection = (id: number) => {
    setConnectedAccounts(
      connectedAccounts.map((account) => (account.id === id ? { ...account, connected: !account.connected } : account)),
    )
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
          <h1 className="text-lg font-semibold">Connected Accounts</h1>
          <div className="w-10"></div>
        </div>
      </div>

      <div className="p-4 space-y-6 pb-24">
        <AnimatedCard>
          <div className="p-6">
            <h2 className="text-lg font-semibold mb-4">
              <GradientText>Health & Fitness Apps</GradientText>
            </h2>
            <p className="text-sm text-gray-600 dark:text-gray-300 mb-6">
              Connect your health and fitness apps to sync data automatically.
            </p>

            <div className="space-y-6">
              {connectedAccounts.map((account) => (
                <div key={account.id} className="flex items-center justify-between">
                  <div className="flex items-center">
                    <div className="w-12 h-12 rounded-lg bg-gray-100 dark:bg-gray-800 flex items-center justify-center mr-3 overflow-hidden">
                      <Image src={account.icon || "/placeholder.svg"} alt={account.name} width={40} height={40} />
                    </div>
                    <div>
                      <p className="text-sm font-medium">{account.name}</p>
                      <p className="text-xs text-gray-500">
                        {account.connected ? `Last sync: ${account.lastSync}` : "Not connected"}
                      </p>
                    </div>
                  </div>
                  <Switch checked={account.connected} onCheckedChange={() => toggleConnection(account.id)} />
                </div>
              ))}
            </div>
          </div>
        </AnimatedCard>

        <AnimatedCard delay={100}>
          <div className="p-6">
            <h2 className="text-lg font-semibold mb-4">
              <GradientText>Social Accounts</GradientText>
            </h2>

            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  <div className="w-12 h-12 rounded-lg bg-gray-100 dark:bg-gray-800 flex items-center justify-center mr-3">
                    <Image src="/placeholder.svg?height=40&width=40" alt="Google" width={40} height={40} />
                  </div>
                  <div>
                    <p className="text-sm font-medium">Google</p>
                    <p className="text-xs text-gray-500">Connected as sarah.johnson@gmail.com</p>
                  </div>
                </div>
                <Button variant="ghost" size="sm" className="text-red-500">
                  Disconnect
                </Button>
              </div>

              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  <div className="w-12 h-12 rounded-lg bg-gray-100 dark:bg-gray-800 flex items-center justify-center mr-3">
                    <Image src="/placeholder.svg?height=40&width=40" alt="Apple" width={40} height={40} />
                  </div>
                  <div>
                    <p className="text-sm font-medium">Apple</p>
                    <p className="text-xs text-gray-500">Not connected</p>
                  </div>
                </div>
                <Button variant="outline" size="sm">
                  Connect
                </Button>
              </div>

              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  <div className="w-12 h-12 rounded-lg bg-gray-100 dark:bg-gray-800 flex items-center justify-center mr-3">
                    <Image src="/placeholder.svg?height=40&width=40" alt="Facebook" width={40} height={40} />
                  </div>
                  <div>
                    <p className="text-sm font-medium">Facebook</p>
                    <p className="text-xs text-gray-500">Not connected</p>
                  </div>
                </div>
                <Button variant="outline" size="sm">
                  Connect
                </Button>
              </div>
            </div>
          </div>
        </AnimatedCard>

        <AnimatedCard delay={200}>
          <div className="p-6">
            <h2 className="text-lg font-semibold mb-4">
              <GradientText>Healthcare Providers</GradientText>
            </h2>
            <p className="text-sm text-gray-600 dark:text-gray-300 mb-6">
              Connect your healthcare providers to share your health data securely.
            </p>

            <Button variant="outline" className="w-full">
              <Plus className="h-4 w-4 mr-2" />
              Connect Healthcare Provider
            </Button>
          </div>
        </AnimatedCard>

        <div className="text-center text-xs text-gray-500 mt-4">
          <p>
            Connecting accounts allows NutriTrack to access and sync data from these services. You can disconnect at any
            time.
          </p>
        </div>
      </div>
    </div>
  )
}
