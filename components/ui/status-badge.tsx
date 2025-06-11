import type React from "react"
import { Badge } from "@/components/ui/badge"
import { cn } from "@/lib/utils"

interface StatusBadgeProps {
  status: "excellent" | "good" | "needs-improvement" | "poor"
  children: React.ReactNode
  className?: string
}

export function StatusBadge({ status, children, className }: StatusBadgeProps) {
  const statusStyles = {
    excellent: "bg-green-100 text-green-800 border-green-200 dark:bg-green-900/20 dark:text-green-400",
    good: "bg-blue-100 text-blue-800 border-blue-200 dark:bg-blue-900/20 dark:text-blue-400",
    "needs-improvement": "bg-yellow-100 text-yellow-800 border-yellow-200 dark:bg-yellow-900/20 dark:text-yellow-400",
    poor: "bg-red-100 text-red-800 border-red-200 dark:bg-red-900/20 dark:text-red-400",
  }

  return (
    <Badge className={cn(statusStyles[status], className)} variant="outline">
      {children}
    </Badge>
  )
}
