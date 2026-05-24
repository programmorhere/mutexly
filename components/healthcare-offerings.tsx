import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { ScrollReveal } from "@/components/scroll-reveal"
import { healthcareClientTypes, healthcareSolutions } from "@/lib/healthcare-services"

type HealthcareOfferingsProps = {
  id?: string
  showClientTypes?: boolean
  showViewAll?: boolean
}

export function HealthcareOfferings({
  id = "healthcare",
  showClientTypes = true,
  showViewAll = false,
}: HealthcareOfferingsProps) {
  return (
    <section id={id} className="py-24 px-4 border-t border-border">
      <div className="container mx-auto max-w-5xl">
        <ScrollReveal direction="up">
          <div className="mb-12 flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 border-b border-border pb-6">
            <div>
              <p className="text-xs font-mono tracking-[0.18em] uppercase text-primary mb-2">Healthcare</p>
              <h2 className="text-3xl md:text-4xl font-bold font-heading text-foreground mb-3">
                AI Solutions for Healthcare Operations
              </h2>
              <p className="text-sm text-muted-foreground max-w-2xl leading-relaxed">
                AI automation, custom medical software, and billing support tools for clinics, home health agencies, and billing teams.
              </p>
            </div>
            {showViewAll && (
              <Link
                href="/services#healthcare"
                className="flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors shrink-0"
              >
                View all services <ArrowRight className="h-4 w-4" />
              </Link>
            )}
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-10">
          {healthcareSolutions.map((item, i) => (
            <ScrollReveal key={item.title} direction="up" delay={i * 70}>
              <div className="p-6 rounded-xl bg-card border border-border card-interactive h-full flex flex-col gap-3">
                <p className="text-xs font-mono tracking-wider uppercase text-primary">{item.mapsTo}</p>
                <h3 className="font-bold font-heading text-foreground">{item.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed flex-1">{item.description}</p>
              </div>
            </ScrollReveal>
          ))}
        </div>

        {showClientTypes && (
          <ScrollReveal direction="up" delay={120}>
            <div className="rounded-xl border border-border bg-secondary/20 px-6 py-5">
              <p className="text-xs font-mono tracking-wider uppercase text-muted-foreground mb-3">Who we work with</p>
              <div className="flex flex-wrap gap-2">
                {healthcareClientTypes.map((type) => (
                  <span
                    key={type}
                    className="text-xs px-3 py-1 rounded-full border border-border text-muted-foreground bg-background"
                  >
                    {type}
                  </span>
                ))}
              </div>
            </div>
          </ScrollReveal>
        )}
      </div>
    </section>
  )
}
