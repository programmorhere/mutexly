export type HealthcareSolution = {
  title: string
  description: string
  mapsTo: "AI Consulting" | "Custom AI Development" | "AI Automation" | "Data & Analytics"
}

/** Healthcare offerings aligned with Mutexly's AI-first service model */
export const healthcareSolutions: HealthcareSolution[] = [
  {
    title: "AI Automation for Clinics",
    mapsTo: "AI Automation",
    description:
      "Intelligent scheduling, intake, documentation support, and front-office workflows that reduce manual work without compromising care quality.",
  },
  {
    title: "Healthcare Workflow Automation",
    mapsTo: "AI Automation",
    description:
      "End-to-end automation across clinical and operational teams — handoffs, approvals, reminders, and status tracking built for regulated environments.",
  },
  {
    title: "Medical Software Development",
    mapsTo: "Custom AI Development",
    description:
      "Custom platforms, integrations, and AI features for EHR-adjacent tools, patient portals, and internal clinical systems.",
  },
  {
    title: "Medical Billing Support Tools",
    mapsTo: "Custom AI Development",
    description:
      "AI-assisted billing workflows, validation checks, and operator tools that help teams move claims faster with fewer errors.",
  },
  {
    title: "Insurance Claims Automation",
    mapsTo: "AI Automation",
    description:
      "Automated claim intake, classification, and exception routing to reduce turnaround time and manual rework.",
  },
]

/** Organizations we commonly serve in healthcare — client types, not standalone product lines */
export const healthcareClientTypes = [
  "Clinics & provider groups",
  "Home health agencies",
  "Medical billing companies",
]

export const healthcareContactOptions = healthcareSolutions.map((s) => s.title)
