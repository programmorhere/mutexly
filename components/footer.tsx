import Image from "next/image"
import Link from "next/link"

export function Footer() {
  return (
    <footer className="border-t border-border py-12 px-4">
      <div className="container mx-auto max-w-7xl">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 mb-12">
          <div className="md:col-span-1">
            <div className="flex items-center gap-2.5 mb-4">
              <Image
                src="/logo/icon-app-purple.png"
                alt="Mutexly logo mark"
                width={28}
                height={28}
                className="rounded-lg"
              />
              <span className="text-lg font-black font-heading text-foreground tracking-tight">Mutexly</span>
            </div>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Enterprise-grade AI, built for teams that move fast.
            </p>
          </div>

          <div>
            <h4 className="text-xs font-mono tracking-[0.15em] uppercase text-muted-foreground mb-4">Services</h4>
            <ul className="space-y-2.5">
              {["AI Consulting", "Custom AI Development", "AI Automation", "Data & Analytics"].map((s) => (
                <li key={s}>
                  <Link href="/services" className="text-sm text-muted-foreground hover:text-foreground transition-colors duration-200">
                    {s}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-xs font-mono tracking-[0.15em] uppercase text-muted-foreground mb-4">Company</h4>
            <ul className="space-y-2.5">
              <li><Link href="/about"   className="text-sm text-muted-foreground hover:text-foreground transition-colors duration-200">About</Link></li>
              <li><Link href="/contact" className="text-sm text-muted-foreground hover:text-foreground transition-colors duration-200">Contact</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-xs font-mono tracking-[0.15em] uppercase text-muted-foreground mb-4">Legal</h4>
            <ul className="space-y-2.5">
              <li><a href="/privacy-policy.pdf"   download className="text-sm text-muted-foreground hover:text-foreground transition-colors duration-200">Privacy Policy</a></li>
              <li><a href="/terms-of-service.pdf" download className="text-sm text-muted-foreground hover:text-foreground transition-colors duration-200">Terms of Service</a></li>
              <li><a href="/cookie-policy.pdf"    download className="text-sm text-muted-foreground hover:text-foreground transition-colors duration-200">Cookie Policy</a></li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-border flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-muted-foreground font-mono">
            &copy; {new Date().getFullYear()} Mutexly. All rights reserved.
          </p>
          <p className="text-xs text-muted-foreground font-mono">info@mutexly.com</p>
        </div>
      </div>
    </footer>
  )
}
