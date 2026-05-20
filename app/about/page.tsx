"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ScrollReveal } from "@/components/scroll-reveal"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { ArrowRight, Target, Eye, Handshake } from "lucide-react"

const values = [
  {
    icon: Target,
    title: "Precision",
    description: "We don't ship vague. Every system we build is scoped tightly, measured carefully, and delivered to spec.",
  },
  {
    icon: Eye,
    title: "Transparency",
    description: "No black boxes — in our AI systems or in our process. You always know what we're building and why.",
  },
  {
    icon: Handshake,
    title: "Impact",
    description: "We measure success by business outcomes, not lines of code. If it doesn't move a metric, we rethink it.",
  },
]

const team = [
  {
    initials: "SC",
    name: "Sarah Chen",
    title: "CEO & Co-Founder",
    bio: "Former ML lead at a Series B fintech. Built AI products used by over 2M people before founding Mutexly.",
  },
  {
    initials: "MW",
    name: "Marcus Webb",
    title: "CTO & Co-Founder",
    bio: "10 years in distributed systems and ML infrastructure. Obsessed with making AI reliable at production scale.",
  },
  {
    initials: "AP",
    name: "Aisha Patel",
    title: "Head of AI Research",
    bio: "PhD in NLP. Led language model fine-tuning projects for enterprise clients across healthcare and legal sectors.",
  },
]

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* Page hero */}
      <section className="relative overflow-hidden py-28 px-4">
        <div className="absolute inset-0 bg-hero-glow-top pointer-events-none" />
        <div className="container mx-auto max-w-4xl relative z-10">
          <ScrollReveal direction="up" delay={50}>
            <p className="text-xs font-mono tracking-[0.18em] uppercase text-primary mb-4">About us</p>
          </ScrollReveal>
          <ScrollReveal direction="up" delay={130}>
            <h1 className="text-5xl md:text-6xl font-black font-heading leading-[1.05] tracking-tight mb-6 text-heading-gradient">
              Who We Are
            </h1>
          </ScrollReveal>
          <ScrollReveal direction="up" delay={210}>
            <p className="text-lg text-muted-foreground max-w-xl leading-relaxed">
              A small team of engineers and researchers who believe that enterprise-grade AI should be accessible to any team willing to build seriously.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* Mission / Vision */}
      <section className="py-6 pb-24 px-4">
        <div className="container mx-auto max-w-4xl">
          <div className="grid md:grid-cols-2 gap-5">
            <ScrollReveal direction="up" delay={80}>
              <div className="p-8 rounded-xl bg-card border border-border card-interactive h-full">
                <div className="flex items-center gap-2 mb-5">
                  <div className="w-1.5 h-5 rounded-full bg-primary" />
                  <h3 className="text-lg font-bold font-heading text-foreground">Our Mission</h3>
                </div>
                <p className="text-muted-foreground leading-relaxed text-sm">
                  Mutexly exists to make enterprise-grade AI accessible. We partner with ambitious teams to design, build, and deploy AI systems that actually work — in production, at scale, with measurable results.
                </p>
              </div>
            </ScrollReveal>
            <ScrollReveal direction="up" delay={160}>
              <div className="p-8 rounded-xl bg-card border border-border card-interactive h-full">
                <div className="flex items-center gap-2 mb-5">
                  <div className="w-1.5 h-5 rounded-full bg-primary/50" />
                  <h3 className="text-lg font-bold font-heading text-foreground">Our Vision</h3>
                </div>
                <p className="text-muted-foreground leading-relaxed text-sm">
                  A world where every organisation — regardless of size or budget — can deploy AI that solves real problems. We&apos;re building toward that by making serious AI engineering feel less intimidating and more repeatable.
                </p>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-24 px-4 border-t border-border">
        <div className="container mx-auto max-w-5xl">
          <ScrollReveal direction="up">
            <div className="mb-12">
              <p className="text-xs font-mono tracking-[0.18em] uppercase text-primary mb-2">Principles</p>
              <h2 className="text-3xl md:text-4xl font-bold font-heading text-foreground">What We Stand For</h2>
            </div>
          </ScrollReveal>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {values.map((v, i) => (
              <ScrollReveal key={i} direction="up" delay={i * 80}>
                <div className="p-7 rounded-xl bg-card border border-border card-interactive h-full flex flex-col gap-4">
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                    <v.icon className="h-5 w-5 text-primary" />
                  </div>
                  <h3 className="font-bold font-heading text-foreground">{v.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{v.description}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-24 px-4 border-t border-border">
        <div className="container mx-auto max-w-5xl">
          <ScrollReveal direction="up">
            <div className="mb-12">
              <p className="text-xs font-mono tracking-[0.18em] uppercase text-primary mb-2">The team</p>
              <h2 className="text-3xl md:text-4xl font-bold font-heading text-foreground">Our Leadership</h2>
            </div>
          </ScrollReveal>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {team.map((member, i) => (
              <ScrollReveal key={i} direction="up" delay={i * 80}>
                <div className="p-7 rounded-xl bg-card border border-border card-interactive h-full flex flex-col gap-5">
                  <div className="w-14 h-14 rounded-full bg-primary/10 border border-primary/20 flex items-center justify-center">
                    <span className="text-primary font-black text-lg font-heading">{member.initials}</span>
                  </div>
                  <div>
                    <p className="font-bold font-heading text-foreground">{member.name}</p>
                    <p className="text-muted-foreground text-sm mt-0.5">{member.title}</p>
                  </div>
                  <p className="text-sm text-muted-foreground leading-relaxed">{member.bio}</p>
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
                <p className="text-xs font-mono tracking-[0.18em] uppercase text-primary mb-4">Work with us</p>
                <h2 className="text-3xl font-black font-heading text-foreground mb-5">Start a Conversation</h2>
                <p className="text-sm text-muted-foreground mb-8 max-w-sm mx-auto leading-relaxed">
                  We take on a small number of projects each quarter to ensure every client gets our full attention.
                </p>
                <Link href="/contact">
                  <Button size="lg" className="h-12 px-10 text-sm font-semibold bg-primary hover:bg-primary/85 text-primary-foreground border-0 rounded-lg transition-all duration-300">
                    Get in Touch <ArrowRight className="ml-2 h-4 w-4" />
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
