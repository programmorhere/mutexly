"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ScrollReveal } from "@/components/scroll-reveal"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Brain, Code2, Zap, BarChart2, ArrowRight, Search, Paintbrush, Hammer, Rocket } from "lucide-react"

const services = [
  {
    icon: Brain,
    name: "AI Consulting",
    description:
      "We assess your organisation's AI readiness, map opportunities to business outcomes, and deliver a clear, actionable roadmap. Whether you're exploring AI for the first time or scaling existing initiatives, we bring the strategic clarity your team needs to move fast and confidently.",
  },
  {
    icon: Code2,
    name: "Custom AI Development",
    description:
      "From fine-tuned language models to end-to-end ML pipelines, we build AI systems tailored to your exact product requirements. We handle architecture, training, evaluation, and production deployment so your team can focus on what they do best.",
  },
  {
    icon: Zap,
    name: "AI Automation",
    description:
      "We identify high-value manual processes and replace them with intelligent, self-improving workflows. Our automation solutions integrate with your existing stack, reduce operational overhead, and scale with your business without adding headcount.",
  },
  {
    icon: BarChart2,
    name: "Data & Analytics",
    description:
      "We design data architectures, build robust ETL pipelines, and surface insights through AI-powered dashboards. Raw data becomes a strategic asset — one that leadership can act on in real time, not next quarter.",
  },
]

const steps = [
  { icon: Search,     number: "01", title: "Discovery", description: "We learn your business, your data, and your goals before writing a single line of code." },
  { icon: Paintbrush, number: "02", title: "Design",    description: "We architect the solution collaboratively, aligning on scope, milestones, and success metrics." },
  { icon: Hammer,     number: "03", title: "Build",     description: "Iterative development with regular demos so you stay in the loop and can steer early." },
  { icon: Rocket,     number: "04", title: "Deploy",    description: "Production-ready delivery with documentation, monitoring setup, and a smooth handoff." },
]

export default function ServicesPage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* Page hero */}
      <section className="relative overflow-hidden py-28 px-4">
        <div className="absolute inset-0 bg-hero-glow-top pointer-events-none" />
        <div className="container mx-auto max-w-4xl relative z-10">
          <ScrollReveal direction="up" delay={50}>
            <p className="text-xs font-mono tracking-[0.18em] uppercase text-primary mb-4">What we do</p>
          </ScrollReveal>
          <ScrollReveal direction="up" delay={130}>
            <h1 className="text-5xl md:text-6xl font-black font-heading leading-[1.05] tracking-tight mb-6 text-heading-gradient">
              Our Services
            </h1>
          </ScrollReveal>
          <ScrollReveal direction="up" delay={210}>
            <p className="text-lg text-muted-foreground max-w-xl leading-relaxed">
              Four core offerings. All designed to get AI working in your business — not just in a proof of concept.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* Service cards */}
      <section className="py-6 px-4 pb-24">
        <div className="container mx-auto max-w-4xl">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {services.map((svc, i) => (
              <ScrollReveal key={i} direction="up" delay={i * 70}>
                <div className="group flex flex-col gap-5 p-7 rounded-xl bg-card border border-border card-interactive h-full">
                  <div className="flex items-center gap-4">
                    <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center shrink-0 group-hover:bg-primary/20 transition-colors duration-300">
                      <svc.icon className="h-5 w-5 text-primary" />
                    </div>
                    <h3 className="text-lg font-bold font-heading text-foreground">{svc.name}</h3>
                  </div>
                  <p className="text-sm text-muted-foreground leading-relaxed flex-1">{svc.description}</p>
                  <Link href="/contact">
                    <Button variant="outline" size="sm"
                      className="border-border text-muted-foreground hover:border-primary/40 hover:text-primary hover:bg-primary/5 transition-all duration-300 w-fit rounded-lg">
                      Get in Touch <ArrowRight className="ml-2 h-3.5 w-3.5" />
                    </Button>
                  </Link>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* How we work */}
      <section className="py-24 px-4 border-t border-border">
        <div className="container mx-auto max-w-5xl">
          <ScrollReveal direction="up">
            <div className="mb-14">
              <p className="text-xs font-mono tracking-[0.18em] uppercase text-primary mb-2">Process</p>
              <h2 className="text-3xl md:text-4xl font-bold font-heading text-foreground">How We Work</h2>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {steps.map((step, i) => (
              <ScrollReveal key={i} direction="up" delay={i * 80}>
                <div className="p-6 rounded-xl bg-card border border-border card-interactive h-full flex flex-col gap-4">
                  <div className="flex items-center justify-between">
                    <div className="w-9 h-9 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                      <step.icon className="h-4 w-4 text-primary" />
                    </div>
                    <span className="text-2xl font-black font-heading text-muted-foreground/30">{step.number}</span>
                  </div>
                  <h3 className="font-bold font-heading text-foreground">{step.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{step.description}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 px-4 border-t border-border">
        <div className="container mx-auto max-w-3xl text-center">
          <ScrollReveal direction="up">
            <div className="relative rounded-2xl border border-border bg-card overflow-hidden px-8 py-14">
              <div className="absolute inset-0 bg-hero-glow-center pointer-events-none" />
              <div className="relative z-10">
                <p className="text-xs font-mono tracking-[0.18em] uppercase text-primary mb-4">Have a project in mind?</p>
                <h2 className="text-3xl font-black font-heading text-foreground mb-5">Get in Touch</h2>
                <p className="text-sm text-muted-foreground mb-8 max-w-sm mx-auto leading-relaxed">
                  Tell us what you&apos;re building and we&apos;ll respond within one business day.
                </p>
                <Link href="/contact">
                  <Button size="lg" className="h-12 px-10 text-sm font-semibold bg-primary hover:bg-primary/85 text-primary-foreground border-0 rounded-lg transition-all duration-300">
                    Contact Us <ArrowRight className="ml-2 h-4 w-4" />
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
