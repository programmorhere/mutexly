"use client"

import { useState, useEffect, useCallback, useRef } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ScrollReveal } from "@/components/scroll-reveal"
import { AnimatedCounter } from "@/components/animated-counter"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { ArrowRight, Brain, Code2, Zap, BarChart2, Quote, Activity } from "lucide-react"
import { brandAlpha } from "@/lib/theme-colors"

// ─── Data ────────────────────────────────────────────────────────────────────

const services = [
  { icon: Brain,     name: "AI Consulting",         tagline: "Strategy and roadmapping for AI adoption" },
  { icon: Code2,     name: "Custom AI Development", tagline: "Bespoke LLM integrations and ML pipelines" },
  { icon: Zap,       name: "AI Automation",         tagline: "Intelligent workflows that scale with your ops" },
  { icon: BarChart2, name: "Data & Analytics",      tagline: "AI-powered dashboards that turn data into decisions" },
]

const testimonials = [
  {
    initials: "JH",
    name: "James Harrington",
    title: "CTO, Nexlayer Inc.",
    quote: "Mutexly transformed our data pipeline into a real-time intelligence engine. The ROI was visible within the first quarter.",
  },
  {
    initials: "PM",
    name: "Priya Mehta",
    title: "VP Operations, CloudPeak",
    quote: "The AI automation solution they built cut our manual processing time by 70%. Exceptional team, exceptional results.",
  },
  {
    initials: "DO",
    name: "David Osei",
    title: "Founder, Velostack",
    quote: "We came with a vague idea. Mutexly delivered a production-grade LLM integration in six weeks. Incredible execution.",
  },
]

const serviceLabels = ["AI Consulting", "Custom AI Dev", "AI Automation", "Data Analytics"]

// ─── Hero Panel (interactive) ─────────────────────────────────────────────────

function HeroPanel() {
  const panelRef = useRef<HTMLDivElement>(null)
  const [mouse, setMouse]               = useState({ x: 0, y: 0 })
  const [activeService, setActiveService] = useState(0)
  const [showService, setShowService]   = useState(true)
  const [blink, setBlink]               = useState(true)

  // Cursor blink
  useEffect(() => {
    const t = setInterval(() => setBlink(b => !b), 530)
    return () => clearInterval(t)
  }, [])

  // Cycle service labels
  useEffect(() => {
    const t = setInterval(() => {
      setShowService(false)
      setTimeout(() => {
        setActiveService(i => (i + 1) % serviceLabels.length)
        setShowService(true)
      }, 250)
    }, 2800)
    return () => clearInterval(t)
  }, [])

  const handleMouseMove = useCallback((e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect()
    setMouse({
      x: ((e.clientX - rect.left) / rect.width  - 0.5) * 2,
      y: ((e.clientY - rect.top)  / rect.height - 0.5) * 2,
    })
  }, [])

  const handleMouseLeave = useCallback(() => {
    setMouse({ x: 0, y: 0 })
  }, [])

  return (
    <div
      ref={panelRef}
      className="hidden lg:block cursor-crosshair select-none"
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      {/* Outer glow that shifts with mouse */}
      <div
        className="absolute w-80 h-80 rounded-full bg-primary/10 blur-3xl pointer-events-none"
        style={{
          left: `calc(50% + ${mouse.x * 60}px)`,
          top:  `calc(50% + ${mouse.y * 60}px)`,
          transform: "translate(-50%, -50%)",
          transition: "left 0.25s ease-out, top 0.25s ease-out",
        }}
      />

      {/* Panel card */}
      <div
        className="relative border border-border/70 rounded-2xl overflow-hidden bg-card/60 backdrop-blur-sm"
        style={{
          transform: `translate(${mouse.x * 10}px, ${mouse.y * 10}px)`,
          transition: "transform 0.12s ease-out",
          boxShadow: `0 0 60px ${brandAlpha(0.04 + Math.abs(mouse.x) * 0.04)}`,
        }}
      >
        {/* ── Title bar ── */}
        <div className="flex items-center gap-2 px-4 py-3 border-b border-border/50 bg-secondary/30">
          <div className="flex gap-1.5">
            <div className="w-2.5 h-2.5 rounded-full bg-muted-foreground/40" />
            <div className="w-2.5 h-2.5 rounded-full bg-muted-foreground/25" />
            <div className="w-2.5 h-2.5 rounded-full bg-primary/60" />
          </div>
          <span className="text-[11px] font-mono text-muted-foreground/70 ml-1 tracking-wider">MUTEXLY_AI — SYSTEM</span>
          <div className="ml-auto flex items-center gap-1.5">
            <div className="w-1.5 h-1.5 rounded-full bg-status-live animate-pulse" />
            <span className="text-[11px] font-mono text-status-live tracking-widest">LIVE</span>
          </div>
        </div>

        {/* ── Diagram area ── */}
        <div className="relative flex items-center justify-center p-8 min-h-[260px]">
          {/* Mouse-following inner glow */}
          <div
            className="absolute w-32 h-32 rounded-full bg-primary/15 blur-2xl pointer-events-none"
            style={{
              left: `calc(50% + ${mouse.x * 36}px)`,
              top:  `calc(50% + ${mouse.y * 36}px)`,
              transform: "translate(-50%, -50%)",
              transition: "left 0.18s ease-out, top 0.18s ease-out",
            }}
          />

          {/* SVG reticle — static rings + slow-spin outer arc */}
          <svg
            viewBox="0 0 300 300"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="w-56 h-56 relative z-10"
          >
            {/* Background grid dots */}
            {Array.from({ length: 5 }, (_, row) =>
              Array.from({ length: 5 }, (_, col) => (
                <circle
                  key={`${row}-${col}`}
                  cx={30 + col * 60}
                  cy={30 + row * 60}
                  r="1"
                  fill={brandAlpha(0.15)}
                />
              ))
            )}

            {/* Concentric circles */}
            <circle cx="150" cy="150" r="135" stroke={brandAlpha(0.07)}  strokeWidth="0.5"/>
            <circle cx="150" cy="150" r="108" stroke={brandAlpha(0.11)}  strokeWidth="0.5"/>
            <circle cx="150" cy="150" r="80"  stroke={brandAlpha(0.18)}  strokeWidth="0.75"/>
            <circle cx="150" cy="150" r="52"  stroke={brandAlpha(0.27)}  strokeWidth="0.75"/>
            <circle cx="150" cy="150" r="26"  stroke={brandAlpha(0.40)}  strokeWidth="1"/>

            {/* Cross axes */}
            <line x1="150" y1="15"  x2="150" y2="285" stroke={brandAlpha(0.07)} strokeWidth="0.5"/>
            <line x1="15"  y1="150" x2="285" y2="150" stroke={brandAlpha(0.07)} strokeWidth="0.5"/>

            {/* Highlighted arc — top right quadrant */}
            <path d="M 150 42 A 108 108 0 0 1 258 150" stroke={brandAlpha(0.65)} strokeWidth="1.5" strokeLinecap="round"/>
            <path d="M 150 70 A 80 80 0 0 1 230 150"   stroke={brandAlpha(0.40)} strokeWidth="1"   strokeLinecap="round"/>

            {/* Cardinal ticks */}
            <line x1="150" y1="15"  x2="150" y2="26"  stroke={brandAlpha(0.65)} strokeWidth="1.5" strokeLinecap="round"/>
            <line x1="285" y1="150" x2="274" y2="150" stroke={brandAlpha(0.65)} strokeWidth="1.5" strokeLinecap="round"/>
            <line x1="150" y1="285" x2="150" y2="274" stroke={brandAlpha(0.28)} strokeWidth="1"   strokeLinecap="round"/>
            <line x1="15"  y1="150" x2="26"  y2="150" stroke={brandAlpha(0.28)} strokeWidth="1"   strokeLinecap="round"/>

            {/* Cardinal dots */}
            <circle cx="150" cy="42"  r="2.5" fill={brandAlpha(0.85)}/>
            <circle cx="258" cy="150" r="2.5" fill={brandAlpha(0.85)}/>
            <circle cx="150" cy="258" r="1.8" fill={brandAlpha(0.35)}/>
            <circle cx="42"  cy="150" r="1.8" fill={brandAlpha(0.35)}/>

            {/* Corner brackets */}
            <path d="M 50 15 L 15 15 L 15 50"  stroke={brandAlpha(0.30)} strokeWidth="1" fill="none" strokeLinecap="round"/>
            <path d="M 250 15 L 285 15 L 285 50" stroke={brandAlpha(0.30)} strokeWidth="1" fill="none" strokeLinecap="round"/>
            <path d="M 50 285 L 15 285 L 15 250" stroke={brandAlpha(0.18)} strokeWidth="1" fill="none" strokeLinecap="round"/>
            <path d="M 250 285 L 285 285 L 285 250" stroke={brandAlpha(0.18)} strokeWidth="1" fill="none" strokeLinecap="round"/>

            {/* Data segments */}
            <line x1="80"  y1="118" x2="132" y2="118" stroke={brandAlpha(0.22)} strokeWidth="0.75"/>
            <line x1="80"  y1="125" x2="118" y2="125" stroke={brandAlpha(0.14)} strokeWidth="0.75"/>
            <line x1="168" y1="175" x2="225" y2="175" stroke={brandAlpha(0.18)} strokeWidth="0.75"/>
            <line x1="178" y1="182" x2="215" y2="182" stroke={brandAlpha(0.11)} strokeWidth="0.75"/>

            {/* Center */}
            <circle cx="150" cy="150" r="16" stroke={brandAlpha(0.55)} strokeWidth="1"   fill={brandAlpha(0.06)}/>
            <circle cx="150" cy="150" r="5"  fill={brandAlpha(0.20)}/>
            <circle cx="150" cy="150" r="2.5" fill={brandAlpha(1)}/>
          </svg>

          {/* Center radial glow */}
          <div className="absolute inset-0 bg-hero-glow-panel pointer-events-none" />
        </div>

        {/* ── Cycling service label ── */}
        <div className="border-t border-border/50 px-5 py-3 bg-secondary/20">
          <p className="text-[10px] font-mono tracking-[0.15em] uppercase text-muted-foreground/60 mb-1.5">
            Specializing in
          </p>
          <div className="flex items-center gap-2 h-5">
            <span className="text-primary text-sm font-mono">›</span>
            <span
              className="text-sm font-mono text-foreground"
              style={{
                opacity:   showService ? 1 : 0,
                transform: showService ? "translateY(0)" : "translateY(4px)",
                transition: "opacity 0.22s ease, transform 0.22s ease",
              }}
            >
              {serviceLabels[activeService]}
            </span>
            <span
              className="text-primary text-sm font-mono"
              style={{ opacity: blink ? 1 : 0, transition: "opacity 0.1s" }}
            >
              _
            </span>
          </div>
        </div>

        {/* ── Mini stats ── */}
        <div className="border-t border-border/50 grid grid-cols-3 divide-x divide-border/50">
          {[
            { value: "50+", label: "Projects" },
            { value: "12+", label: "Clients" },
            { value: "98%", label: "Retention" },
          ].map((s) => (
            <div key={s.label} className="text-center px-4 py-3">
              <p className="text-sm font-bold font-mono text-foreground">{s.value}</p>
              <p className="text-[10px] font-mono text-muted-foreground/70 mt-0.5 tracking-wider uppercase">{s.label}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

// ─── Page ─────────────────────────────────────────────────────────────────────

export default function HomePage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* ── Hero ──────────────────────────────────────────────────────────── */}
      <section className="relative overflow-hidden min-h-[90vh] flex items-center px-4 py-24">
        <div className="absolute inset-0 bg-hero-glow pointer-events-none" />
        <div className="absolute top-0 left-0 w-full h-px bg-linear-to-r from-transparent via-primary/30 to-transparent" />
        {/* Mobile background accent — replaces the hidden panel */}
        <div className="absolute right-0 top-1/2 -translate-y-1/2 w-72 h-72 rounded-full bg-primary/5 blur-3xl pointer-events-none lg:hidden" />

        <div className="container mx-auto max-w-7xl relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">

            {/* Left: Text */}
            <div>
              <ScrollReveal direction="up" delay={40}>
                <span className="inline-flex items-center gap-2 mb-8 px-3 py-1 rounded-sm text-xs font-mono tracking-[0.15em] uppercase border border-primary/25 text-primary bg-primary/8">
                  <Activity className="h-3 w-3" />
                  AI Services Company
                </span>
              </ScrollReveal>

              <ScrollReveal direction="up" delay={110}>
                <h1 className="text-5xl md:text-6xl lg:text-7xl font-black font-heading leading-[1.04] tracking-tight mb-7 text-heading-gradient">
                  We Build<br />
                  Intelligent<br />
                  Systems.
                </h1>
              </ScrollReveal>

              <ScrollReveal direction="up" delay={200}>
                <p className="text-base md:text-lg text-muted-foreground mb-10 max-w-md leading-relaxed">
                  Mutexly partners with forward-thinking teams to design, build, and deploy AI that drives measurable business outcomes.
                </p>
              </ScrollReveal>

              <ScrollReveal direction="up" delay={290}>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Link href="/contact">
                    <Button
                      size="lg"
                      className="h-12 px-8 text-sm font-semibold bg-primary hover:bg-primary/85 text-primary-foreground border-0 rounded-lg hover-shadow-cta"
                    >
                      Start a Project <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </Link>
                  <Link href="/services">
                    <Button
                      size="lg"
                      variant="outline"
                      className="h-12 px-8 text-sm border-border text-muted-foreground hover:border-primary/40 hover:text-foreground hover:bg-primary/5 rounded-lg transition-all duration-300"
                    >
                      Our Services
                    </Button>
                  </Link>
                </div>
              </ScrollReveal>
            </div>

            {/* Right: Interactive panel */}
            <div className="relative">
              <HeroPanel />
            </div>
          </div>
        </div>
      </section>

      {/* ── Services list ─────────────────────────────────────────────────── */}
      <section className="py-24 px-4 border-t border-border">
        <div className="container mx-auto max-w-5xl">
          <ScrollReveal direction="up">
              <div className="flex items-end justify-between mb-12 border-b border-border pb-6">
              <div>
                <p className="text-xs font-mono tracking-[0.18em] uppercase text-primary mb-2">What we do</p>
                <h2 className="text-3xl md:text-4xl font-bold font-heading text-foreground">Our Services</h2>
              </div>
              <Link href="/services" className="hidden sm:flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors duration-200">
                View all <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </ScrollReveal>

          <div className="divide-y divide-border">
            {services.map((svc, i) => (
              <ScrollReveal key={i} direction="up" delay={i * 55}>
                <Link href="/services">
                  <div className="service-row group flex items-center gap-5 py-6 px-3 -mx-3 rounded-lg cursor-pointer">
                    <span className="text-xs font-mono text-muted-foreground/40 w-6 shrink-0 select-none">0{i + 1}</span>
                    <div className="w-9 h-9 rounded-lg bg-primary/10 flex items-center justify-center shrink-0 group-hover:bg-primary/20 transition-colors duration-300">
                      <svc.icon className="h-4 w-4 text-primary" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="font-semibold text-foreground font-heading">
                        {svc.name}
                      </p>
                      <p className="text-sm text-muted-foreground mt-0.5 truncate">{svc.tagline}</p>
                    </div>
                    <ArrowRight className="h-4 w-4 text-muted-foreground/25 group-hover:text-primary group-hover:translate-x-1 transition-all duration-300 shrink-0" />
                  </div>
                </Link>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── Stats ─────────────────────────────────────────────────────────── */}
      <section className="border-y border-border py-14 px-4">
        <div className="container mx-auto max-w-4xl">
          <div className="grid grid-cols-1 sm:grid-cols-3 divide-y sm:divide-y-0 sm:divide-x divide-border">
            {[
              { end: 50,  suffix: "+",  label: "Projects Delivered" },
              { end: 12,  suffix: "+",  label: "Enterprise Clients" },
              { end: 98,  suffix: "%",  label: "Client Retention" },
            ].map((stat) => (
              <ScrollReveal key={stat.label} direction="up">
                <div className="text-center py-8 sm:py-0 sm:px-8">
                  <AnimatedCounter end={stat.end} suffix={stat.suffix} />
                  <p className="text-sm text-muted-foreground mt-2 font-mono tracking-wide">{stat.label}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── Testimonials ──────────────────────────────────────────────────── */}
      <section className="py-24 px-4">
        <div className="container mx-auto max-w-5xl">
          <ScrollReveal direction="up">
            <div className="mb-12">
              <p className="text-xs font-mono tracking-[0.18em] uppercase text-primary mb-2">Client feedback</p>
              <h2 className="text-3xl md:text-4xl font-bold font-heading text-foreground">What Clients Say</h2>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {testimonials.map((t, i) => (
              <ScrollReveal key={i} direction="up" delay={i * 80}>
                <div className="card-interactive flex flex-col gap-4 h-full p-6 rounded-xl bg-card border border-border">
                  {/* Stars */}
                  <div className="flex gap-0.5">
                    {[...Array(5)].map((_, s) => (
                      <svg key={s} className="w-3.5 h-3.5 text-primary" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                  </div>
                  <p className="text-foreground/80 leading-relaxed text-sm flex-1">&ldquo;{t.quote}&rdquo;</p>
                  <div className="flex items-center gap-3 pt-4 border-t border-border">
                    <div className="w-9 h-9 rounded-full bg-primary/15 flex items-center justify-center shrink-0 border border-primary/20">
                      <span className="text-primary font-bold text-xs">{t.initials}</span>
                    </div>
                    <div>
                      <p className="text-sm font-semibold text-foreground leading-tight">{t.name}</p>
                      <p className="text-xs text-muted-foreground mt-0.5">{t.title}</p>
                    </div>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA Banner ────────────────────────────────────────────────────── */}
      <section className="py-24 px-4 border-t border-border">
        <div className="container mx-auto max-w-4xl">
          <ScrollReveal direction="up">
            <div className="relative rounded-2xl border border-border bg-card overflow-hidden px-8 py-16 text-center">
              <div className="absolute inset-0 bg-hero-glow-cta pointer-events-none" />
              <div className="absolute top-0 left-0 w-full h-px bg-linear-to-r from-transparent via-primary/40 to-transparent" />
              <div className="relative z-10">
                <p className="text-xs font-mono tracking-[0.18em] uppercase text-primary mb-4">Ready to build?</p>
                <h2 className="text-3xl md:text-5xl font-black font-heading text-foreground mb-5 leading-tight">
                  Let&apos;s build something<br />
                  <span className="text-heading-gradient">intelligent together.</span>
                </h2>
                <p className="text-muted-foreground mb-10 max-w-md mx-auto text-sm leading-relaxed">
                  Tell us about your project. We respond within one business day.
                </p>
                <Link href="/contact">
                  <Button
                    size="lg"
                    className="h-12 px-10 text-sm font-semibold bg-primary hover:bg-primary/85 text-primary-foreground border-0 rounded-lg hover-shadow-cta"
                  >
                    Book a Discovery Call <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      <Footer />
    </div>
  )
}
