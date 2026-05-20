"use client"

import Image from "next/image"
import { useState, useEffect } from "react"
import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { createPortal } from "react-dom"
import { X, Menu } from "lucide-react"

const navItems = [
  { href: "/",         label: "Home" },
  { href: "/services", label: "Services" },
  { href: "/about",    label: "About" },
  { href: "/contact",  label: "Contact" },
]

export function MobileMenu() {
  const [isOpen, setIsOpen]   = useState(false)
  const [mounted, setMounted] = useState(false)
  const router = useRouter()

  useEffect(() => { setMounted(true) }, [])

  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "unset"
    return () => { document.body.style.overflow = "unset" }
  }, [isOpen])

  const handleNavClick = (href: string) => {
    setIsOpen(false)
    setTimeout(() => router.push(href), 280)
  }

  const menuContent = (
    <div className="fixed inset-0 z-9999 md:hidden">
      {/* Backdrop */}
      <div
        className={`fixed inset-0 overlay-backdrop backdrop-blur-sm transition-opacity duration-400 ${
          isOpen ? "opacity-100" : "opacity-0"
        }`}
        onClick={() => setIsOpen(false)}
      />

      {/* Drawer */}
      <div
        className={`fixed inset-y-0 right-0 w-72 bg-card border-l border-border flex flex-col transition-transform duration-400 ease-out ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-5 border-b border-border">
          <div className="flex items-center gap-2">
            <Image
              src="/logo/icon-app-purple.png"
              alt="Mutexly logo mark"
              width={28}
              height={28}
              className="rounded-md"
            />
            <span className="font-black font-heading text-foreground tracking-tight">Mutexly</span>
          </div>
          <Button variant="ghost" size="icon" onClick={() => setIsOpen(false)}
            className="w-8 h-8 text-muted-foreground hover:text-foreground hover:bg-secondary rounded-lg">
            <X className="h-4 w-4" />
          </Button>
        </div>

        {/* Nav links */}
        <nav className="flex-1 px-4 py-6 flex flex-col gap-1">
          {navItems.map((item, index) => (
            <button
              key={item.href}
              onClick={() => handleNavClick(item.href)}
              className={`w-full text-left px-4 py-3 rounded-lg text-sm font-medium transition-all duration-200 ${
                isOpen ? "animate-fade-in-up" : "opacity-0"
              } text-muted-foreground hover:text-foreground hover:bg-secondary`}
              style={{
                animationDelay: isOpen ? `${(index + 1) * 80}ms` : "0ms",
                animationFillMode: "forwards",
              }}
            >
              {item.label}
            </button>
          ))}
        </nav>

        {/* Footer CTA */}
        <div className="px-4 pb-6 border-t border-border pt-4">
          <button
            onClick={() => handleNavClick("/contact")}
            className="w-full h-10 rounded-lg bg-primary text-primary-foreground text-sm font-semibold hover:bg-primary/85 transition-colors duration-200"
          >
            Start a Project
          </button>
          <p className="text-center text-xs text-muted-foreground mt-3 font-mono">info@mutexly.com</p>
        </div>
      </div>
    </div>
  )

  return (
    <>
      <Button
        variant="ghost"
        size="icon"
        className="md:hidden w-9 h-9 text-muted-foreground hover:text-foreground hover:bg-secondary rounded-lg transition-colors"
        onClick={() => setIsOpen(true)}
      >
        <Menu className="h-5 w-5" />
      </Button>

      {mounted && isOpen && createPortal(menuContent, document.body)}
    </>
  )
}
