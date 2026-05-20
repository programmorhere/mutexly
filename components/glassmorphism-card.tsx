"use client"

import type { ReactNode } from "react"
import { cn } from "@/lib/utils"

interface GlassmorphismCardProps {
  children: ReactNode
  className?: string
  hover3d?: boolean  // kept for API compat
  interactive?: boolean
}

export function GlassmorphismCard({ children, className, interactive = true }: GlassmorphismCardProps) {
  return (
    <div
      className={cn(
        "bg-card border border-border rounded-xl",
        interactive && "card-interactive",
        className,
      )}
    >
      {children}
    </div>
  )
}
