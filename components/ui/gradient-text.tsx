import { cn } from "@/lib/utils"
import type { ReactNode } from "react"

interface GradientTextProps {
  children: ReactNode
  className?: string
  variant?: "primary" | "secondary" | "accent"
}

export function GradientText({ children, className, variant = "primary" }: GradientTextProps) {
  const variants = {
    primary: "bg-gradient-to-r from-green-600 to-emerald-500",
    secondary: "bg-gradient-to-r from-blue-600 to-purple-600",
    accent: "bg-gradient-to-r from-yellow-500 to-orange-500",
  }

  return <span className={cn("bg-clip-text text-transparent font-bold", variants[variant], className)}>{children}</span>
}
