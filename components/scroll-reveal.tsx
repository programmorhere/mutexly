"use client"

import { useInView } from "react-intersection-observer"
import type { ReactNode } from "react"

interface ScrollRevealProps {
  children: ReactNode
  direction?: "up" | "down" | "left" | "right"
  delay?: number
  className?: string
}

export function ScrollReveal({ children, direction = "up", delay = 0, className = "" }: ScrollRevealProps) {
  const { ref, inView } = useInView({ threshold: 0.08, triggerOnce: true })

  const getTransform = () => {
    switch (direction) {
      case "up":    return "translateY(24px)"
      case "down":  return "translateY(-24px)"
      case "left":  return "translateX(24px)"
      case "right": return "translateX(-24px)"
    }
  }

  return (
    <div
      ref={ref}
      className={`transition-all duration-700 ease-out ${className}`}
      style={{
        opacity:   inView ? 1 : 0,
        transform: inView ? "translate(0) scale(1)" : `${getTransform()} scale(0.99)`,
        filter:    inView ? "blur(0px)" : "blur(4px)",
        transitionDelay: `${delay}ms`,
      }}
    >
      {children}
    </div>
  )
}
