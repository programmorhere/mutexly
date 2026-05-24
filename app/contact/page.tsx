"use client"

import { useState } from "react"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { z } from "zod"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { ScrollReveal } from "@/components/scroll-reveal"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { ArrowRight, Mail, Phone, Clock, Loader2, CircleCheckBig } from "lucide-react"
import { SITE_EMAIL, SITE_PHONE_DISPLAY, SITE_PHONE_E164 } from "@/lib/site"
import { healthcareContactOptions } from "@/lib/healthcare-services"

const schema = z.object({
  fullName:           z.string().min(2, "Name must be at least 2 characters"),
  email:              z.string().email("Please enter a valid email address"),
  company:            z.string().min(1, "Company name is required"),
  serviceInterest:    z.string().min(1, "Please select a service"),
  projectDescription: z.string().min(20, "Please describe your project (at least 20 characters)"),
})

type FormData = z.infer<typeof schema>

const coreServiceOptions = [
  "AI Consulting",
  "Custom AI Development",
  "AI Automation",
  "Data & Analytics",
]

const serviceOptions = [...coreServiceOptions, ...healthcareContactOptions, "Not sure yet"]

export default function ContactPage() {
  const [showInquiryModal, setShowInquiryModal] = useState(false)
  const [modalStep, setModalStep] = useState<"processing" | "success">("processing")

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<FormData>({ resolver: zodResolver(schema) })

  const onSubmit = async (_data: FormData) => {
    // Simulated enterprise submission flow (temporary UX before backend wiring)
    setShowInquiryModal(true)
    setModalStep("processing")

    await new Promise((resolve) => setTimeout(resolve, 1400))
    setModalStep("success")
    await new Promise((resolve) => setTimeout(resolve, 1100))

    setShowInquiryModal(false)
    reset()
  }

  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* Page hero */}
      <section className="relative overflow-hidden py-28 px-4">
        <div className="absolute inset-0 bg-hero-glow-top pointer-events-none" />
        <div className="container mx-auto max-w-4xl relative z-10">
          <ScrollReveal direction="up" delay={50}>
            <p className="text-xs font-mono tracking-[0.18em] uppercase text-primary mb-4">Get in touch</p>
          </ScrollReveal>
          <ScrollReveal direction="up" delay={130}>
            <h1 className="text-5xl md:text-6xl font-black font-heading leading-[1.05] tracking-tight mb-6 text-heading-gradient">
              Start a Project
            </h1>
          </ScrollReveal>
          <ScrollReveal direction="up" delay={210}>
            <p className="text-lg text-muted-foreground max-w-xl leading-relaxed">
              Tell us what you&apos;re building. We respond within one business day.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* Form + Info */}
      <section className="py-6 pb-24 px-4">
        <div className="container mx-auto max-w-5xl">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">

            {/* Form */}
            <ScrollReveal direction="up" delay={80} className="lg:col-span-2">
              <div className="rounded-xl bg-card border border-border p-8">
                <form onSubmit={handleSubmit(onSubmit)} className="space-y-6" noValidate>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-xs font-mono tracking-wider uppercase text-muted-foreground mb-2">
                        Full Name
                      </label>
                      <Input
                        {...register("fullName")}
                        placeholder="Alex Johnson"
                        className="bg-background border-border h-11 text-sm focus-visible:ring-primary/50 focus-visible:border-primary/50 rounded-lg"
                      />
                      {errors.fullName && <p className="mt-1.5 text-xs text-destructive">{errors.fullName.message}</p>}
                    </div>
                    <div>
                      <label className="block text-xs font-mono tracking-wider uppercase text-muted-foreground mb-2">
                        Email
                      </label>
                      <Input
                        {...register("email")}
                        type="email"
                        placeholder="alex@company.com"
                        className="bg-background border-border h-11 text-sm focus-visible:ring-primary/50 focus-visible:border-primary/50 rounded-lg"
                      />
                      {errors.email && <p className="mt-1.5 text-xs text-destructive">{errors.email.message}</p>}
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-xs font-mono tracking-wider uppercase text-muted-foreground mb-2">
                        Company
                      </label>
                      <Input
                        {...register("company")}
                        placeholder="Acme Corp"
                        className="bg-background border-border h-11 text-sm focus-visible:ring-primary/50 focus-visible:border-primary/50 rounded-lg"
                      />
                      {errors.company && <p className="mt-1.5 text-xs text-destructive">{errors.company.message}</p>}
                    </div>
                    <div>
                      <label className="block text-xs font-mono tracking-wider uppercase text-muted-foreground mb-2">
                        Service Interest
                      </label>
                      <select
                        {...register("serviceInterest")}
                        defaultValue=""
                        className="w-full h-11 rounded-lg px-3 text-sm bg-background border border-border text-foreground focus:outline-none focus:border-primary/50 transition-colors"
                      >
                        <option value="" disabled className="bg-background text-muted-foreground">
                          Select a service…
                        </option>
                        {serviceOptions.map((opt) => (
                          <option key={opt} value={opt} className="bg-background">{opt}</option>
                        ))}
                      </select>
                      {errors.serviceInterest && <p className="mt-1.5 text-xs text-destructive">{errors.serviceInterest.message}</p>}
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-mono tracking-wider uppercase text-muted-foreground mb-2">
                      Project Description
                    </label>
                    <Textarea
                      {...register("projectDescription")}
                      placeholder="Tell us about your project — what you're building, the problem you're solving, and any constraints we should know about…"
                      rows={5}
                      className="bg-background border-border text-sm focus-visible:ring-primary/50 focus-visible:border-primary/50 resize-none rounded-lg"
                    />
                    {errors.projectDescription && <p className="mt-1.5 text-xs text-destructive">{errors.projectDescription.message}</p>}
                  </div>

                  <Button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full h-12 text-sm font-semibold bg-primary hover:bg-primary/85 text-primary-foreground border-0 rounded-lg transition-all duration-300"
                  >
                    {isSubmitting ? "Sending…" : "Send Inquiry"}
                    {!isSubmitting && <ArrowRight className="ml-2 h-4 w-4" />}
                  </Button>
                </form>
              </div>
            </ScrollReveal>

            {/* Info sidebar */}
            <ScrollReveal direction="up" delay={160}>
              <div className="space-y-4">
                <div className="rounded-xl bg-card border border-border p-6 flex items-start gap-4">
                  <div className="w-9 h-9 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                    <Mail className="h-4 w-4 text-primary" />
                  </div>
                  <div>
                    <p className="text-xs font-mono tracking-wider uppercase text-muted-foreground mb-1.5">Direct email</p>
                    <a href={`mailto:${SITE_EMAIL}`} className="text-sm text-primary hover:text-primary/80 transition-colors">
                      {SITE_EMAIL}
                    </a>
                  </div>
                </div>

                <div className="rounded-xl bg-card border border-border p-6 flex items-start gap-4">
                  <div className="w-9 h-9 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                    <Phone className="h-4 w-4 text-primary" />
                  </div>
                  <div>
                    <p className="text-xs font-mono tracking-wider uppercase text-muted-foreground mb-1.5">Phone</p>
                    <a href={`tel:${SITE_PHONE_E164}`} className="text-sm text-primary hover:text-primary/80 transition-colors">
                      {SITE_PHONE_DISPLAY}
                    </a>
                  </div>
                </div>

                <div className="rounded-xl bg-card border border-border p-6 flex items-start gap-4">
                  <div className="w-9 h-9 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                    <Clock className="h-4 w-4 text-primary" />
                  </div>
                  <div>
                    <p className="text-xs font-mono tracking-wider uppercase text-muted-foreground mb-1.5">Response time</p>
                    <p className="text-sm text-foreground">Within 1 business day</p>
                  </div>
                </div>

                <div className="rounded-xl bg-card border border-border p-6">
                  <p className="text-xs text-muted-foreground leading-relaxed">
                    We take on a limited number of projects each quarter to ensure every client receives our full attention. Early contact helps secure a spot.
                  </p>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {showInquiryModal && (
        <div className="fixed inset-0 z-[120] flex items-center justify-center px-4">
          <div className="absolute inset-0 overlay-backdrop backdrop-blur-md animate-fade-in-up" />
          <div className="relative w-full max-w-md rounded-2xl border border-border bg-card/95 p-7 shadow-2xl shadow-primary/20 animate-fade-in-up">
            <div className="absolute -top-20 right-[-2.5rem] h-40 w-40 rounded-full bg-primary/20 blur-3xl pointer-events-none" />

            {modalStep === "processing" ? (
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <Loader2 className="h-5 w-5 text-primary animate-spin" />
                  <p className="text-sm font-mono uppercase tracking-[0.16em] text-primary">Submitting Inquiry</p>
                </div>
                <h3 className="text-xl font-heading font-bold text-foreground">Reviewing your project brief</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  We are simulating the internal intake workflow and preparing your request packet for our strategy team.
                </p>
                <div className="h-1.5 w-full rounded-full bg-secondary overflow-hidden">
                  <div className="h-full w-1/2 bg-linear-to-r from-primary/70 via-primary to-primary/70 animate-pulse" />
                </div>
              </div>
            ) : (
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <CircleCheckBig className="h-6 w-6 text-primary animate-fade-in-up" />
                  <p className="text-sm font-mono uppercase tracking-[0.16em] text-primary">Inquiry Captured</p>
                </div>
                <h3 className="text-xl font-heading font-bold text-foreground">You are all set.</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Thanks for reaching out. We will follow up within one business day with next steps.
                </p>
              </div>
            )}
          </div>
        </div>
      )}

      <Footer />
    </div>
  )
}
