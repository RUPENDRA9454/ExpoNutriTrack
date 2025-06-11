import { Card } from "@/components/ui/card"
import { cn } from "@/lib/utils"
import type { ReactNode } from "react"

interface AnimatedCardProps {
  children: ReactNode
  className?: string
  hover?: boolean
  delay?: number
}

export function AnimatedCard({ children, className, hover = true, delay = 0 }: AnimatedCardProps) {
  return (
    <Card
      className={cn(
        "animate-slide-up transition-all duration-300",
        hover && "hover:shadow-lg hover:-translate-y-1",
        className,
      )}
      style={{ animationDelay: `${delay}ms` }}
    >
      {children}
    </Card>
  )
}
