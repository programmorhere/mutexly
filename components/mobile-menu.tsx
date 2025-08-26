"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { createPortal } from "react-dom"

export function MobileMenu() {
  const [isOpen, setIsOpen] = useState(false)
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden"
    } else {
      document.body.style.overflow = "unset"
    }

    return () => {
      document.body.style.overflow = "unset"
    }
  }, [isOpen])

  const menuItems = [
    { href: "#products", label: "Products" },
    { href: "#about", label: "About" },
    { href: "#contact", label: "Contact" },
  ]

  const handleNavClick = (href: string) => {
    setIsOpen(false)
    setTimeout(() => {
      document.querySelector(href)?.scrollIntoView({
        behavior: "smooth",
        block: "start",
      })
    }, 300)
  }

  const menuContent = (
    <div className="fixed inset-0 z-[9999] md:hidden">
      <div
        className={`fixed inset-0 bg-black/60 backdrop-blur-md transition-opacity duration-500 ${
          isOpen ? "opacity-100" : "opacity-0"
        }`}
        onClick={() => setIsOpen(false)}
      />

      <div
        className={`fixed inset-0 bg-gradient-to-br from-slate-900/95 via-slate-800/95 to-slate-900/95 backdrop-blur-xl transition-all duration-700 ease-out ${
          isOpen ? "translate-x-0 opacity-100" : "translate-x-full opacity-0"
        }`}
      >
        <div className="flex items-center justify-between p-6 border-b border-cyan-500/20">
          <span className="text-2xl font-bold font-[family-name:var(--font-heading)] text-transparent bg-gradient-to-r from-cyan-400 to-teal-400 bg-clip-text">
            Menu
          </span>
          <Button
            variant="ghost"
            size="icon"
            onClick={() => setIsOpen(false)}
            className="relative w-12 h-12 rounded-full border border-cyan-500/30 hover:border-cyan-400 hover:bg-cyan-500/10 transition-all duration-300 group"
          >
            <div className="relative w-6 h-6">
              <span
                className={`absolute top-1/2 left-1/2 w-4 h-0.5 bg-cyan-400 transition-all duration-300 ${
                  isOpen ? "rotate-45 -translate-x-1/2 -translate-y-1/2" : ""
                }`}
              />
              <span
                className={`absolute top-1/2 left-1/2 w-4 h-0.5 bg-cyan-400 transition-all duration-300 ${
                  isOpen ? "-rotate-45 -translate-x-1/2 -translate-y-1/2" : ""
                }`}
              />
            </div>
          </Button>
        </div>

        <nav className="flex flex-col items-center justify-center flex-1 space-y-8 px-6">
          {menuItems.map((item, index) => (
            <button
              key={item.href}
              onClick={() => handleNavClick(item.href)}
              className={`text-3xl font-bold font-[family-name:var(--font-heading)] text-white hover:text-transparent hover:bg-gradient-to-r hover:from-cyan-400 hover:to-teal-400 hover:bg-clip-text transition-all duration-500 relative group ${
                isOpen ? "animate-fade-in-up" : "opacity-0"
              }`}
              style={{
                animationDelay: isOpen ? `${(index + 1) * 150}ms` : "0ms",
                animationFillMode: "forwards",
              }}
            >
              {item.label}
              <span className="absolute -bottom-2 left-0 w-0 h-0.5 bg-gradient-to-r from-cyan-400 to-teal-400 transition-all duration-300 group-hover:w-full" />
            </button>
          ))}
        </nav>

        <div className="p-6 border-t border-cyan-500/20 text-center">
          <p className="text-slate-400 text-sm">Ready to transform your business?</p>
          <a
            href="mailto:contact@mutexly.com"
            className="text-cyan-400 hover:text-teal-400 transition-colors duration-300 font-medium"
          >
            contact@mutexly.com
          </a>
        </div>
      </div>
    </div>
  )

  return (
    <>
      <Button
        variant="ghost"
        size="icon"
        className="md:hidden relative w-12 h-12 rounded-full border border-cyan-500/30 hover:border-cyan-400 hover:bg-cyan-500/10 transition-all duration-300 group"
        onClick={() => setIsOpen(true)}
      >
        <div className="relative w-6 h-6 flex flex-col justify-center items-center">
          <span
            className={`w-5 h-0.5 bg-cyan-400 transition-all duration-300 ${
              isOpen ? "rotate-45 translate-y-0" : "translate-y-[-4px]"
            }`}
          />
          <span
            className={`w-5 h-0.5 bg-cyan-400 transition-all duration-300 ${isOpen ? "opacity-0" : "opacity-100 my-1"}`}
          />
          <span
            className={`w-5 h-0.5 bg-cyan-400 transition-all duration-300 ${
              isOpen ? "-rotate-45 translate-y-0" : "translate-y-[4px]"
            }`}
          />
        </div>
      </Button>

      {mounted && isOpen && createPortal(menuContent, document.body)}
    </>
  )
}
