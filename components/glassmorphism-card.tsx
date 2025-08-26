"use client"

import type { ReactNode } from "react"
import { cn } from "@/lib/utils"

interface GlassmorphismCardProps {
  children: ReactNode
  className?: string
  hover3d?: boolean
}

export function GlassmorphismCard({ children, className, hover3d = true }: GlassmorphismCardProps) {
  return (
    <div
      className={cn(
        "relative backdrop-blur-md bg-white/5 border border-white/10 rounded-xl",
        "shadow-xl shadow-black/5",
        hover3d && "group cursor-pointer transition-all duration-500",
        hover3d && "hover:scale-[1.02] hover:-translate-y-2",
        hover3d && "hover:shadow-2xl hover:shadow-primary/20",
        hover3d && "hover:bg-white/10 hover:border-white/20",
        className,
      )}
      style={{
        transform: hover3d ? "perspective(1000px) rotateX(0deg) rotateY(0deg)" : undefined,
      }}
      onMouseMove={
        hover3d
          ? (e) => {
              const card = e.currentTarget
              const rect = card.getBoundingClientRect()
              const x = e.clientX - rect.left
              const y = e.clientY - rect.top
              const centerX = rect.width / 2
              const centerY = rect.height / 2
              const rotateX = (y - centerY) / 10
              const rotateY = (centerX - x) / 10

              card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale(1.02) translateY(-8px)`
            }
          : undefined
      }
      onMouseLeave={
        hover3d
          ? (e) => {
              e.currentTarget.style.transform =
                "perspective(1000px) rotateX(0deg) rotateY(0deg) scale(1) translateY(0px)"
            }
          : undefined
      }
    >
      {children}
    </div>
  )
}
