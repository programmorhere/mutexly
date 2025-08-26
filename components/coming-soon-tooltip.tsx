"use client"

import type { ReactNode } from "react"
import { useState } from "react"
import { createPortal } from "react-dom"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"

interface ComingSoonButtonProps {
  children: ReactNode
  className?: string
}

export function ComingSoonButton({ children, className = "" }: ComingSoonButtonProps) {
  const [showTooltip, setShowTooltip] = useState(false)
  const [mounted, setMounted] = useState(false)

  useState(() => {
    setMounted(true)
  }, [])

  const handleClick = () => {
    setShowTooltip(true)
    setTimeout(() => setShowTooltip(false), 3000)
  }

  const tooltip =
    showTooltip && mounted ? (
      <div className="fixed inset-0 flex items-center justify-center pointer-events-none" style={{ zIndex: 9999 }}>
        <div
          className="absolute inset-0 bg-black/20 backdrop-blur-sm pointer-events-auto"
          onClick={() => setShowTooltip(false)}
        />

        <div
          className="relative px-6 py-4 bg-background/95 backdrop-blur-xl border-2 border-primary/50 rounded-xl glass-card animate-fade-in shadow-2xl pointer-events-auto"
          style={{ zIndex: 10000 }}
        >
          <div className="text-center">
            <span className="text-primary font-semibold text-lg">This product is coming soon.</span>
            <p className="text-muted-foreground text-sm mt-1">Stay tuned for updates!</p>
          </div>

          <button
            onClick={() => setShowTooltip(false)}
            className="absolute -top-2 -right-2 w-6 h-6 bg-primary rounded-full flex items-center justify-center text-primary-foreground text-sm hover:bg-primary/80 transition-colors"
          >
            ×
          </button>
        </div>
      </div>
    ) : null

  return (
    <>
      <Button className={`w-full premium-hover animate-neural-pulse cyber-border ${className}`} onClick={handleClick}>
        {children}
        <ArrowRight className="ml-2 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
      </Button>

      {mounted && typeof document !== "undefined" && createPortal(tooltip, document.body)}
    </>
  )
}
