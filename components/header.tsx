"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { Button } from "@/components/ui/button"
import { MobileMenu } from "@/components/mobile-menu"

const navLinks = [
  { href: "/",         label: "Home" },
  { href: "/services", label: "Services" },
  { href: "/about",    label: "About" },
  { href: "/contact",  label: "Contact" },
]

export function Header() {
  const pathname = usePathname()

  return (
    <header className="glass-card border-b border-border sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between max-w-7xl">
        <Link href="/" className="flex items-center gap-2.5">
          <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
            <span className="text-primary-foreground font-black text-base font-heading">M</span>
          </div>
          <span className="text-xl font-black font-heading text-foreground tracking-tight">Mutexly</span>
        </Link>

        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`text-sm transition-colors duration-200 ${
                pathname === link.href
                  ? "text-foreground font-medium"
                  : "text-muted-foreground hover:text-foreground"
              }`}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="hidden md:block">
          <Link href="/contact">
            <Button
              size="sm"
              className="h-9 px-5 text-sm font-semibold bg-primary hover:bg-primary/85 text-primary-foreground border-0 rounded-lg transition-all duration-300"
            >
              Start a Project
            </Button>
          </Link>
        </div>

        <MobileMenu />
      </div>
    </header>
  )
}
