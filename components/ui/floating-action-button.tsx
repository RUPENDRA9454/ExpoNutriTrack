"use client"

import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"
import type { LucideIcon } from "lucide-react"

interface FloatingActionButtonProps {
  icon: LucideIcon
  onClick: () => void
  className?: string
  variant?: "primary" | "secondary" | "accent"
}

export function FloatingActionButton({
  icon: Icon,
  onClick,
  className,
  variant = "primary",
}: FloatingActionButtonProps) {
  const variantStyles = {
    primary: "gradient-primary text-white shadow-green-500/25",
    secondary: "gradient-secondary text-white shadow-blue-500/25",
    accent: "gradient-accent text-white shadow-yellow-500/25",
  }

  return (
    <Button
      onClick={onClick}
      className={cn("floating-action h-14 w-14 shadow-2xl", variantStyles[variant], className)}
      size="icon"
    >
      <Icon className="h-6 w-6" />
    </Button>
  )
}
